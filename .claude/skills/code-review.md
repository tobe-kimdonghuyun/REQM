---
name: code-review
description: 코드 리뷰 스킬. "코드 리뷰", "리뷰해줘", "코드 검토", "문제 있어?", "개선점", "best practice", "코드 품질", "보안 검토", "성능 검토" 등을 언급할 때 이 스킬을 사용하세요.
---

# 코드 리뷰 스킬

TypeScript / JavaScript / Python / Kotlin / nexacroN 코드에 대한 체계적인 리뷰를 제공합니다.

---

## 리뷰 우선순위

1. **보안** — 취약점, 민감 정보 노출
2. **정확성** — 버그, 로직 오류, 엣지 케이스
3. **성능** — 불필요한 반복, 메모리 누수
4. **가독성** — 네이밍, 구조, 복잡도
5. **컨벤션** — 프로젝트 코딩 규칙 준수

---

## 공통 체크리스트

### 보안
- [ ] SQL Injection 가능성 (동적 쿼리 문자열 연결 금지)
- [ ] XSS 가능성 (innerHTML 직접 삽입 금지)
- [ ] 민감 정보 하드코딩 금지 (비밀번호, API 키, DB 접속 정보)
- [ ] 입력값 검증 누락 (사용자 입력 → 반드시 검증 후 사용)
- [ ] 에러 메시지에 내부 정보 노출 금지

### 정확성
- [ ] null / undefined 처리 누락
- [ ] 배열 인덱스 범위 초과 가능성
- [ ] 비동기 오류 처리 누락 (try/catch 또는 .catch())
- [ ] 조건문 경계값 처리 (`<` vs `<=`)
- [ ] 타입 불일치 (`==` vs `===`)

### 성능
- [ ] 반복문 내 불필요한 DOM 접근 / DB 쿼리
- [ ] 대용량 데이터 페이지네이션 없이 전체 로딩
- [ ] 불필요한 전역 변수 사용
- [ ] 메모리 누수 가능성 (이벤트 리스너 미해제)

---

## TypeScript / JavaScript 리뷰 포인트

```typescript
// ❌ 나쁜 예
function getUser(id) {
    return users[id];  // null 체크 없음
}

// ✅ 좋은 예
function getUser(id: string): User | null {
    return users[id] ?? null;
}

// ❌ 나쁜 예 — any 남발
function process(data: any): any { ... }

// ✅ 좋은 예 — 명시적 타입
function process(data: UserDto): ProcessResult { ... }
```

---

## Python 리뷰 포인트

```python
# ❌ 나쁜 예 — 광범위한 예외 처리
try:
    result = process()
except Exception:
    pass

# ✅ 좋은 예 — 구체적 예외 처리
try:
    result = process()
except ValueError as e:
    logger.error("유효하지 않은 값: %s", e)
    raise

# ❌ 나쁜 예 — SQL Injection 위험
query = f"SELECT * FROM users WHERE id = {user_id}"

# ✅ 좋은 예 — 파라미터 바인딩
query = "SELECT * FROM users WHERE id = %s"
cursor.execute(query, (user_id,))
```

---

## Kotlin 리뷰 포인트

```kotlin
// ❌ 나쁜 예 — !! 연산자 사용
val name = user!!.name

// ✅ 좋은 예 — 안전 호출
val name = user?.name ?: "알 수 없음"

// ❌ 나쁜 예 — var 남발
var userId = "admin"

// ✅ 좋은 예 — val 우선
val userId = "admin"
```

---

## nexacroN 리뷰 포인트

```javascript
// ❌ 나쁜 예 — 에러 콜백 처리 없음
function fn_searchCallback(svcId, errCode, errMsg) {
    // 성공 처리만
}

// ✅ 좋은 예 — 에러 처리 포함
function fn_searchCallback(svcId, errCode, errMsg) {
    if (errCode != 0) {
        gfn_alert("오류: " + errMsg);
        return;
    }
    // 성공 처리
}

// ❌ 나쁜 예 — 하드코딩된 URL
this.transaction("svc", "http://192.168.1.10:8080/service.do", ...);

// ✅ 좋은 예 — 설정 파일 또는 상수 사용
this.transaction("svc", "svc::UserService.do", ...);
```

---

## 리뷰 결과 작성 형식

```
## 코드 리뷰 결과

### 🔴 반드시 수정 (보안/버그)
- [파일:줄번호] 문제 설명 → 수정 방법

### 🟡 수정 권장 (품질/성능)
- [파일:줄번호] 문제 설명 → 개선 방법

### 🟢 참고 사항 (컨벤션/가독성)
- [파일:줄번호] 제안 내용

### ✅ 잘된 점
- 좋은 패턴이나 접근 방식 언급
```
