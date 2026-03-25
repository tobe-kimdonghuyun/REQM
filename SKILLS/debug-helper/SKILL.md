---
name: debug-helper
description: 디버깅 도우미 스킬. "오류", "에러", "버그", "안 돼요", "왜 이러지", "디버깅", "로그 분석", "스택 트레이스", "null pointer", "500 에러", "안 뜸", "응답 없음", "화면이 안 나와" 등을 언급할 때 이 스킬을 사용하세요.
---

# 디버깅 도우미 스킬

TypeScript / JavaScript / Python / Kotlin / nexacroN 환경에서의 디버깅 전략과 로그 분석 가이드입니다.

---

## 1. 디버깅 기본 순서

```
1. 오류 메시지 전문 확인 (스택 트레이스 포함)
2. 오류 발생 시점 특정 (어떤 동작 → 어떤 파일:라인)
3. 최소 재현 조건 파악
4. 가설 설정 → 검증 (추측으로 무작위 수정 금지)
5. 원인 확인 후 수정
6. 수정 후 회귀 테스트
```

---

## 2. nexacroN 디버깅

### 개발자 도구 (F12)
```
Console 탭 → JavaScript 오류, trace() 출력 확인
Network 탭 → Transaction 요청/응답 확인
```

### 트레이스 출력
```javascript
// 값 확인
trace("userId: " + this.edtUserId.value);
trace("rowcount: " + this.dsResult.rowcount);
trace("errCode: " + errCode + " / errMsg: " + errMsg);

// Dataset 전체 출력
for (var i = 0; i < this.dsData.rowcount; i++) {
    trace("[" + i + "] " + this.dsData.getColumn(i, "USER_ID"));
}
```

### Transaction 오류 분석
```javascript
function fn_callback(svcId, errCode, errMsg) {
    trace("=== " + svcId + " ===");
    trace("errCode: " + errCode);
    trace("errMsg: " + errMsg);
    // errCode < 0 : 시스템 오류 (네트워크, 서버 다운)
    // errCode > 0 : 비즈니스 오류 (서버에서 설정한 오류)
    // errCode == 0 : 성공
}
```

### 자주 발생하는 nexacroN 오류

| 증상 | 확인 포인트 |
|------|-------------|
| 화면 안 뜸 | start_tomcat.bat 실행 여부, URL 확인 |
| 조회 결과 없음 | Network 탭 → Transaction 응답 JSON 확인 |
| Dataset 컬럼 null | 컬럼명 대소문자, typedefinition.xml 일치 여부 |
| 팝업 안 열림 | openPopup 경로, .xfdl 파일 존재 여부 |
| 버튼 클릭 무반응 | 이벤트 핸들러 이름 오타 (`btnSave_onclick` 등) |

---

## 3. TypeScript / JavaScript 디버깅

### 브라우저 디버거
```javascript
// 코드 내 중단점
debugger;  // 브라우저 DevTools에서 일시 정지

// 조건부 로그
console.log({ userId, userData });  // 객체 구조 확인
console.table(dataArray);           // 배열/객체 테이블 출력
console.error('오류:', err);        // 스택 트레이스 포함 출력
console.time('성능측정');
// ... 측정할 코드
console.timeEnd('성능측정');
```

### 타입 오류 패턴
```typescript
// 오류: Property 'name' does not exist on type 'unknown'
const data = JSON.parse(response);       // ❌ any 추론
const data = JSON.parse(response) as User; // ✅ 타입 단언

// 오류: Cannot read properties of undefined
const name = user.profile.name;         // ❌ 중간 null 가능
const name = user?.profile?.name ?? ''; // ✅ 옵셔널 체이닝
```

### 비동기 오류
```typescript
// ❌ 오류가 삼켜짐
async function load() {
    const data = await fetchData();
    process(data);
}

// ✅ 오류 포착
async function load() {
    try {
        const data = await fetchData();
        process(data);
    } catch (err) {
        console.error('로딩 실패:', err);
        throw err;  // 상위 호출자에게 전파
    }
}
```

---

## 4. Python 디버깅

### 로깅 설정
```python
import logging

logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
logger = logging.getLogger(__name__)

# 사용
logger.debug("요청 데이터: %s", request_data)
logger.info("사용자 생성 완료: %s", user_id)
logger.error("DB 연결 실패: %s", exc, exc_info=True)  # 스택 트레이스 포함
```

### pdb 디버거
```python
import pdb

def process():
    pdb.set_trace()  # 여기서 일시 정지 → 인터랙티브 디버깅
    result = calculate()
    return result

# Python 3.7+
def process():
    breakpoint()  # pdb.set_trace() 와 동일
```

### 자주 발생하는 오류

| 오류 | 원인 | 해결 |
|------|------|------|
| `AttributeError: NoneType` | None 반환값 미확인 | `if result is not None:` 추가 |
| `KeyError` | dict 키 없음 | `.get(key, default)` 사용 |
| `IndentationError` | 들여쓰기 혼용 | 탭/스페이스 일관성 확인 |
| `ImportError` | 모듈 없음 | `pip install 패키지명` |
| `RecursionError` | 무한 재귀 | 재귀 종료 조건 확인 |

---

## 5. Kotlin / Spring Boot 디버깅

### 로깅
```kotlin
import org.slf4j.LoggerFactory

private val logger = LoggerFactory.getLogger(UserService::class.java)

fun createUser(dto: CreateUserDto): User {
    logger.debug("사용자 생성 요청: {}", dto)
    val user = userRepository.save(dto.toEntity())
    logger.info("사용자 생성 완료: id={}", user.id)
    return user
}
```

### Spring Boot 자주 발생하는 오류

| 오류 | 원인 | 해결 |
|------|------|------|
| `NullPointerException` | `@Autowired` 누락 또는 늦은 초기화 | `@Autowired` / 생성자 주입 확인 |
| `LazyInitializationException` | 트랜잭션 밖에서 Lazy 로딩 | `@Transactional` 범위 확인 또는 Eager 로딩 |
| `HttpMessageNotReadableException` | 요청 JSON 형식 오류 | 요청 바디 DTO 필드명 일치 확인 |
| `MethodArgumentNotValidException` | `@Valid` 검증 실패 | 요청 데이터 형식 확인 |
| `DataIntegrityViolationException` | DB 제약 조건 위반 | 유니크/FK 제약 확인 |

### 스택 트레이스 읽기
```
Caused by: org.springframework.dao.DataIntegrityViolationException
    at ... (DB 오류)
Caused by: java.sql.SQLIntegrityConstraintViolationException
    at ... (실제 원인 — 여기부터 읽기)
```
→ **`Caused by:` 중 가장 마지막(가장 안쪽)이 실제 원인**

---

## 6. Tomcat / 서버 디버깅

### 로그 확인
```bash
# 실시간 로그 확인 (Windows)
type apache-tomcat-9.0.89\logs\catalina.out

# 오류만 필터 (PowerShell)
Get-Content apache-tomcat-9.0.89\logs\catalina.out | Select-String "ERROR|Exception"
```

### 포트 충돌 확인
```bash
# 8080 포트 사용 프로세스 확인
netstat -ano | findstr :8080

# PID로 프로세스 종료
taskkill /PID <PID번호> /F
```

### 503/500 오류 분석
```
503 Service Unavailable → Tomcat 미실행 또는 앱 배포 오류
500 Internal Server Error → 서버 코드 오류 → catalina.out 확인
404 Not Found → 배포 경로 오류 → OutputPath 확인
```

---

## 7. 오류 보고 시 필요한 정보

Claude에게 디버깅을 요청할 때 다음 정보를 함께 제공하면 빠른 해결이 가능합니다:

```
1. 오류 메시지 전문 (스택 트레이스 포함)
2. 오류 발생 조건 (어떤 동작을 했을 때)
3. 관련 코드 (오류 발생 함수/파일)
4. 환경 정보 (개발/운영, Tomcat 버전 등)
5. 최근 변경 사항 (이전에는 됐는지)
```
