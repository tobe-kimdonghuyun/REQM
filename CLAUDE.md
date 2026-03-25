# 언어 응답 규칙

- 설명, 피드백, 질문 답변, 진행상황 등 모든 텍스트 응답은 **한글**로 작성한다.
- 코드, 명령어, 프로그래밍 언어 키워드, 배포 설정값(YAML, JSON 키 등)은 원문 그대로 유지한다.
- 코드 주석은 한글로 작성해도 무방하나, 코드 자체는 변경하지 않는다.

---

# Project Overview

## 기술 스택

| 영역 | 기술 |
|------|------|
| 프론트엔드 | nexacroN v21 / nexacroN v24, HTML, JavaScript, TypeScript |
| UI 라이브러리 | framer-motion, lucide-react, tailwind-merge, clsx |
| 백엔드 | Kotlin (Spring Boot), Python (FastAPI) |
| 빌드/배포 | NexacroN_Deploy_JAVA.jar, Apache Tomcat 9, BAT 스크립트 |
| 마이그레이션 | Jakarta 마이그레이션 (PowerShell 스크립트) |

## 프로젝트 주요 디렉토리

```
tools/           — 배포 BAT 스크립트 및 Tomcat 제어 스크립트
scripts/         — PowerShell 유틸리티 (Jakarta 변환, JAR 다운로드)
nexacroK/        — nexacroN 프로젝트 소스
NTemplate/       — nexacroN 프로젝트 템플릿
SKILLS/          — Claude Code 커스텀 스킬 정의
deploy/          — 배포 설정
```

---

# 코딩 컨벤션

## 공통 원칙

- 과도한 추상화 금지 — 단일 사용 헬퍼/유틸 함수 생성 지양
- 불필요한 하위 호환 코드, 주석 처리된 코드, 미사용 변수 남기지 않기
- 시스템 경계(사용자 입력, 외부 API)에서만 유효성 검사
- 에러 핸들링은 실제 발생 가능한 케이스에만 추가

## TypeScript / JavaScript

- `any` 타입 사용 최소화, 명시적 타입 선언 우선
- `async/await` 사용, `.then().catch()` 체이닝 지양
- 컴포넌트 파일은 PascalCase, 유틸 파일은 camelCase
- 상수는 `UPPER_SNAKE_CASE`

## Python

- Black formatter 기준 포맷팅
- type hint 필수 (`def foo(x: int) -> str:`)
- `f-string` 사용, `%` 포맷 지양
- 예외는 구체적인 타입으로 (`except ValueError` > `except Exception`)

## Kotlin

- `data class` 활용으로 불변 모델 선호
- null-safety: `!!` 연산자 사용 금지, `?.let {}` 또는 `?: return` 패턴 사용
- `companion object` 내 상수 정의
- 함수명은 camelCase, 클래스명은 PascalCase

## nexacroN

- 이벤트 핸들러명: `컴포넌트명_이벤트명` (예: `btnSave_onclick`)
- 공통 함수는 `gfn_` prefix 사용
- Dataset 컬럼명은 대문자 스네이크케이스 (예: `USER_ID`)
- 화면 스크립트는 기능 단위로 구역 주석 구분

---

# 개발 워크플로우

## 배포 명령어 (tools/)

```bash
# 빌드 + 배포
tools/run_Build&deploy.bat

# 배포만
tools/run_Deploy.bat

# JSON 빌드 + 배포
tools/run_JSON_Build&deploy.bat

# nexacroK 실행
tools/run_TEXT_nexacroK.bat

# Tomcat 제어
tools/start_tomcat.bat
tools/stop_tomcat.bat

# 유효성 검사
tools/Validate.bat
```

## Git

```bash
tools/git_push.bat   # 프로젝트 전용 git push 스크립트
```

---

# 테스트

- 테스트 스킬: `SKILLS/dev-test-automation` 참조
- TypeScript/JS: Jest (단위), Playwright (E2E)
- Python: pytest (단위/통합)
- Kotlin: JUnit 5 + MockK
- 커버리지 기준: 라인 80% 이상 권장
- AAA 패턴(Arrange / Act / Assert) 준수

---

# 모델 사용 규칙 (opusplan 자동 전환)

현재 모델은 `opusplan`으로 설정되어 있으며 아래 규칙에 따라 자동으로 전환된다.

| 상황 | 모델 | 방법 |
|------|------|------|
| 전체 계획 수립 / 아키텍처 설계 / 복잡한 분석 | **Opus** (고성능) | `/plan` 명령으로 플랜 모드 진입 시 자동 전환 |
| 코딩 / 버그 수정 / 테스트 작성 | **Sonnet** (기본) | 일반 대화 모드에서 자동 사용 |
| 환경 설정 / 샘플 제작 / 일반 질문 | **Sonnet** (기본) | 일반 대화 모드에서 자동 사용 |

> **사용 방법**: 설계·계획 작업 시작 전 `/plan`을 입력하면 Opus로 자동 전환된다.
> 플랜 승인 후에는 자동으로 Sonnet으로 복귀한다.

---

# Claude 행동 지침

## 코드 수정 시

- 요청된 범위만 수정한다. 주변 코드 리팩토링 금지.
- 파일을 먼저 읽고 기존 패턴을 파악한 후 수정한다.
- 새 파일 생성보다 기존 파일 수정을 우선한다.

## 보안

- SQL Injection, XSS, Command Injection 등 OWASP Top 10 취약점 주의
- `.env` 파일에 시크릿 하드코딩 금지
- 사용자 입력값은 반드시 검증 후 사용

## 불확실할 때

- 추측으로 진행하지 않고 사용자에게 확인 요청
- 파괴적 작업(파일 삭제, force push 등) 전 반드시 확인
