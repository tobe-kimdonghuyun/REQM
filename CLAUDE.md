# 언어 응답 규칙

- 설명, 피드백, 질문 답변 등 모든 텍스트 응답은 **한글**로 작성한다.
- 코드, 명령어, 프로그래밍 언어 키워드, 배포 설정값(YAML, JSON 키 등)은 원문 그대로 유지한다.
- 코드 주석은 한글로 작성해도 무방하나, 코드 자체는 변경하지 않는다.

# Project Overview

- 언어: TypeScript / Python / Kotlin
- 프레임워크: (예: Next.js, FastAPI, Spring Boot)
- 코딩 컨벤션: (예: ESLint, Black formatter)
- 테스트 방식: (예: Jest, pytest, JUnit)

```

**`.claudeignore`** — Claude가 읽지 않을 파일 제외
```

node_modules/
.env
.env.local
**pycache**/
\*.lock
build/
dist/
.gradle/
