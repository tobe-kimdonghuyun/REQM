# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

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
| 빌드/배포 | NexacroN_Deploy_JAVA.jar, Apache Tomcat 10.1.55 (Jakarta EE), BAT 스크립트 |
| 런타임 | JDK 21 (Microsoft Build), Tomcat 포트 9091 |
| 마이그레이션 | Jakarta 마이그레이션 (javax → jakarta 패키지) |

## 프로젝트 주요 디렉토리

```
.claude/                   — Claude Code 프로젝트 설정
  ├── commands/            — 커스텀 슬래시 커맨드 정의 (.md → /커맨드명)
  ├── skills/              — 스킬 참조 문서 (nexacro-dev, nexacro-deploy 등)
  └── settings.local.json  — 로컬 권한·hooks·language 설정

SKILLS/                    — Claude Code 스킬 상세 가이드 (nexacro-dev, nexacro-deploy 등)
tools/                     — 배포 BAT 스크립트 및 Tomcat 제어 스크립트
scripts/                   — PowerShell 유틸리티 (Jakarta 변환, JAR 다운로드)
deploy/                    — 배포 설정 파일
DOC/                       — 개발·운영 문서, nexacroN/nexacroK 설계 문서
nexacroN 메뉴얼/            — nexacroN V24 오프라인 매뉴얼 HTML (developer_guide 등)
NTemplate/                 — nexacroN 프로젝트 템플릿
apache-tomcat-9.0.89/      — 로컬 Tomcat 9 서버 (conf/, webapps/ 등)
nexacrodeploy/             — nexacro 배포 도구 (NexacroN_Deploy_JAVA.jar 등)
scratch/                   — 임시 작업 폴더

nexacroK_UI/               — nexacroK UI 화면 프로젝트 모음
  └── EmRemSample/         — em/rem 단위 검증 샘플 프로젝트
        ├── Base/          — 기본 기능 화면 (Button, Grid, DynamicDataset 등)
        ├── FrameBase/     — 메인 프레임 (main.xfdl — Combo 메뉴 진입점)
        └── TestCase/      — em/rem 테스트 케이스 화면 (EmRemSample00~10, TestCase00~02)

nexacroN_UI/               — nexacroN UI 화면 프로젝트 소스
  ├── v21/                 — nexacroN v21 화면 프로젝트
  └── v24/                 — nexacroN v24 화면 프로젝트

nexacroN_generate/         — nexacroN Studio Generate/Deploy 결과물
  ├── output/              — Generate 결과물
  └── deploy/              — 최종 배포 결과물
```

---

# 코딩 컨벤션

## 공통 원칙

- 과도한 추상화 금지 — 단일 사용 헬퍼/유틸 함수 생성 지양
- 불필요한 하위 호환 코드, 주석 처리된 코드, 미사용 변수 남기지 않기
- 시스템 경계(사용자 입력, 외부 API)에서만 유효성 검사
- 에러 핸들링은 실제 발생 가능한 케이스에만 추가

## nexacroN / nexacroK

> nexacroN 또는 nexacroK 관련 작업 시 아래 규칙 파일을 반드시 참조한다.

@nexacroN_rules.md

---

# 개발 워크플로우

## 배포 명령어 (Tools/)

```bash
# Generate + Deploy 통합 실행
Tools/run_BuildDeploy.bat

# Deploy 단독 실행
Tools/run_Deploy.bat

# JSON 모드 Generate + Deploy
Tools/run_JSON_Build&deploy.bat

# nexacroK 실행
Tools/run_nexacroK.bat

# nexacroK TEXT 모드 실행
Tools/run_TEXT_nexacroK.bat

# Tomcat 제어
Tools/start_tomcat.bat
Tools/stop_tomcat.bat

# 유효성 검사
Tools/Validate.bat
```

## 배포 설정 파일

배포 전 `Tools/deploy_config.txt`에서 아래 4개 경로를 환경에 맞게 수정한다.

```ini
ProjectPath=D:\git_prj\REQM\nexacroK_UI\...\프로젝트명.xprj
OutputPath=D:\git_prj\REQM\apache-tomcat-9.0.89\webapps\배포폴더
NexacroLibPath=E:\git\...\nexacrolib
GenerateRule=E:\git\...\tools\resource\generate
```

`run_BuildDeploy.bat` 실행 흐름: git pull → npm build:dev → jar 복사 → `deploy_nexacro.ps1` 실행 → Chrome 자동 오픈.

## Git

```bash
Tools/git_push.bat   # 프로젝트 전용 git push 스크립트
```

---

# 테스트

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

## Skill routing

When the user's request matches an available skill, ALWAYS invoke it using the Skill
tool as your FIRST action. Do NOT answer directly, do NOT use other tools first.
The skill has specialized workflows that produce better results than ad-hoc answers.

Key routing rules:
- Product ideas, "is this worth building", brainstorming → invoke office-hours
- Bugs, errors, "why is this broken", 500 errors → invoke investigate
- Ship, deploy, push, create PR → invoke ship
- QA, test the site, find bugs → invoke qa
- Code review, check my diff → invoke review
- Update docs after shipping → invoke document-release
- Weekly retro → invoke retro
- Design system, brand → invoke design-consultation
- Visual audit, design polish → invoke design-review
- Architecture review → invoke plan-eng-review
- Save progress, checkpoint, resume → invoke checkpoint
- Code quality, health check → invoke health
