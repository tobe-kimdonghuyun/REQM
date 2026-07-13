# NexacroK MFE 테스트 체크리스트

> 작성일: 2026-07-13  
> 참고 문서: `NexacroK-MFE 분석 및 테스트계획.md`  
> 샘플 경로: `DOC\NexacroK MFE\sample.xml`

각 항목은 `[ ]` 체크박스 형태로 작성. 결과는 **PASS / FAIL / N/A** 중 하나를 기입.

---

## 목차

1. [사전 환경 준비](#1-사전-환경-준비)
2. [테스트 A — nexacroK → nexacroK (NexacroPortal)](#2-테스트-a--nexacrok--nexacrok-nexacorportal)
3. [테스트 B — React → nexacroK (div embed)](#3-테스트-b--react--nexacrok-div-embed)
4. [테스트 C — nexacroK → React 화면](#4-테스트-c--nexacrok--react-화면)
5. [테스트 D — 다중 인스턴스 격리](#5-테스트-d--다중-인스턴스-격리)
6. [테스트 E — CSS 테마 / 다크모드 전환](#6-테스트-e--css-테마--다크모드-전환)
7. [테스트 F — 브라우저 History API 연동](#7-테스트-f--브라우저-history-api-연동)
8. [공통 — 팝업 처리](#8-공통--팝업-처리)
9. [공통 — 메시지 통신](#9-공통--메시지-통신)
10. [공통 — 성능 / 메모리](#10-공통--성능--메모리)
11. [공통 — 브라우저 호환성](#11-공통--브라우저-호환성)
12. [배포 산출물 검증](#12-배포-산출물-검증)

---

## 1. 사전 환경 준비

### 1-1. 서버 실행

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 1-1-1 | `npx serve` 또는 Python 서버로 `sample.xml` 폴더를 포트 8080에서 서빙 | [ ] | `file://` 프로토콜 불가 |
| 1-1-2 | `_output_mfe_sample` 폴더를 포트 8000에서 서빙 (다중 앱 테스트용) | [ ] | |
| 1-1-3 | `http://localhost:8080/index_mfe.html` 브라우저에서 정상 접속 | [ ] | 빈 화면이면 콘솔 에러 확인 |
| 1-1-4 | `http://localhost:8080/index.html` (단독 실행) 정상 접속 | [ ] | |
| 1-1-5 | 브라우저 콘솔(F12)에 CORS 에러 없음 | [ ] | 두 서버 모두 localhost 도메인 |
| 1-1-6 | 브라우저 콘솔에 모듈 로드 에러(`Failed to resolve module`) 없음 | [ ] | |

#### 항목별 상세 설명

**1-1-1 ~ 1-1-2 | HTTP 서버 기동**
- **검증 목적**: nexacroK는 `type="module"` ESM 방식으로 로드되므로 `file://` 프로토콜에서는 브라우저의 CORS 정책에 의해 모듈 import가 차단됩니다. 반드시 HTTP 서버를 통해 접근해야 합니다.
- **확인 방법**:
  ```bash
  # 터미널 1: 메인 앱 (포트 8080)
  npx serve "D:\git_prj\REQM\DOC\NexacroK MFE\sample.xml" -p 8080

  # 터미널 2: 두 번째 앱 — 다중 embed 테스트 시 필요 (포트 8000)
  npx serve "D:\git_prj\REQM\DOC\NexacroK MFE\sample.xml\_output_mfe_sample" -p 8000
  ```
- **실패 시 증상**: 브라우저 콘솔에 `Cross-Origin Request Blocked` 또는 `Failed to fetch` 에러 표시
- **분석 문서 참조**: §5-6 "실행 방법 > 서버 환경 요건", §5-6 "빠른 실행 (정적 서버)"

**1-1-3 ~ 1-1-4 | 진입점 URL 접속**
- **검증 목적**: MFE 방식(`index_mfe.html`)과 단독 실행 방식(`index.html`)이 모두 정상 동작하는지 확인합니다.
- **확인 방법**: 브라우저에서 두 URL을 순서대로 열고 화면이 표시되는지 확인. 빈 화면이면 F12 > Console 탭 확인.
- **실패 시 증상**: 흰 화면만 표시되거나 `nexacro is not defined` 에러
- **분석 문서 참조**: §5-1 "폴더 전체 구조 (`index.html`, `index_mfe.html`)", §5-6 "브라우저 접속 URL"

**1-1-5 ~ 1-1-6 | CORS / 모듈 로드 에러 없음**
- **검증 목적**: 두 서버(8080, 8000)가 모두 `localhost` 도메인을 사용하므로 Cross-Origin 요청이 최소화됩니다. CORS 오류나 모듈 import 실패가 없어야 다음 테스트가 의미 있습니다.
- **확인 방법**: F12 > Console 탭에서 빨간 에러 메시지 없음 확인
- **분석 문서 참조**: §1-1 "ESModule 단일 방식 전환", §5-6 "서버 환경 요건"

---

### 1-2. 빌드 / 소스 검증

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 1-2-1 | `nexacro.js` — `type="module"` 로드 정상 (`import` 구문 포함 여부 확인) | [ ] | |
| 1-2-2 | `app.js` — `createApp()` 호출 확인 | [ ] | |
| 1-2-3 | `environment.xml.js` — `appkey` 값이 설정되어 있음 (`Sample_K`) | [ ] | |
| 1-2-4 | `environment.xml.js` — `loadTypeDefinition` 함수에 각 컴포넌트의 `constructor` 필드 포함 | [ ] | 미포함 시 수동 추가 필요 |
| 1-2-5 | `environment.xml.js` — `themekey` / `csscollisionpreventkey` 미설정 확인 (`appkey`만으로 충분) | [ ] | |
| 1-2-6 | `application.xadl.js` — 전역 Dataset(`gdsMessage`, `gdsMenu`) 선언 확인 | [ ] | |
| 1-2-7 | `data-appkey` 속성이 HTML `<div>`에 올바르게 설정됨 | [ ] | `Sample_K` |
| 1-2-8 | `popup.html` 파일 존재 및 별도 정적 파일로 서빙됨 | [ ] | |

#### 항목별 상세 설명

**1-2-1 | nexacro.js ESModule 확인**
- **검증 목적**: nexacroK는 CommonJS 대신 ESModule 단일 방식으로 변경되었습니다. `nexacro.js`가 `type="module"`로 로드되어야 ESM 스코프 격리가 동작합니다.
- **확인 방법**: F12 > Sources 탭에서 `nexacro.js`를 열거나, `index_mfe.html` 소스 보기에서 `<script type="module" src="nexacro.js">` 태그 확인
- **실패 시 증상**: `type` 속성이 없으면 다중 인스턴스 격리 불가, 전역 오염 발생
- **분석 문서 참조**: §1-1 "ESModule 단일 방식 전환", §3 "index.html 수동 수정 항목"

**1-2-2 | app.js createApp() 확인**
- **검증 목적**: `app.js`는 `createApp(import.meta.url, nexacro, ...)` 호출로 앱 인스턴스를 생성하고 `data-appkey` div를 탐색합니다. 이 호출이 없으면 nexacroK가 마운트되지 않습니다.
- **확인 방법**: F12 > Sources에서 `app.js` 열고 `createApp` 문자열 검색
- **분석 문서 참조**: §5-3 "앱 초기화 흐름"

**1-2-3 | appkey 설정 확인**
- **검증 목적**: `appkey`는 프로젝트별 고유 식별자(5자)로, CSS 충돌 방지와 다중 인스턴스 식별에 사용됩니다. 설정 누락 시 다중 앱 환경에서 CSS 충돌 발생합니다.
- **확인 방법**: `environment.xml.js` 파일에서 `set_appkey("Sample_K")` 또는 `appkey: "Sample_K"` 라인 확인
- **분석 문서 참조**: §1-5 "Multi-Project / Application 구조", §5-2 "appkey 값", §6-2 "CSS Style Collisions 처리"

**1-2-4 | loadTypeDefinition constructor 필드 확인**
- **검증 목적**: MFE 환경에서 컴포넌트 클래스 등록 시 `constructor` 필드가 누락되면 컴포넌트 인스턴스 생성이 실패합니다. nexacroStudio가 자동 생성하지 않으므로 수동 확인이 필요합니다.
- **확인 방법**: `environment.xml.js`의 `loadTypeDefinition` 함수 내 각 컴포넌트 객체에 `"constructor": nexacro.Button` 형태의 필드가 있는지 확인
  ```javascript
  // 올바른 형태
  { "id": "Button", "classname": "nexacro.Button", "constructor": nexacro.Button, ... }
  ```
- **실패 시 증상**: 화면에 컴포넌트가 표시되지 않거나 `is not a constructor` 에러
- **분석 문서 참조**: §6-3 "loadTypeDefinition — constructor 필드 추가", §3 "수동 수정 필요 영역"

**1-2-5 | themekey / csscollisionpreventkey 미설정 확인**
- **검증 목적**: 기존 문서에서 CSS 충돌 방지를 위해 두 값이 필요하다고 했으나, 구현자 피드백에 따라 `appkey`만으로 자동 처리됩니다. 불필요한 값이 설정되어 있으면 의도치 않은 동작이 발생할 수 있습니다.
- **확인 방법**: `environment.xml.js`에서 `themekey` 또는 `csscollisionpreventkey` 설정 라인이 없음을 확인
- **분석 문서 참조**: §6-2 "CSS Style Collisions 처리 방식 (정정)", §6-4 "수동 수정 필요 영역 업데이트"

**1-2-6 | 전역 Dataset 선언 확인**
- **검증 목적**: `gdsMessage`(공통 메시지), `gdsMenu`(메뉴 목록) 등 전역 Dataset이 `application.xadl.js`에 선언되어야 화면 전반에서 사용 가능합니다.
- **확인 방법**: `application.xadl.js` 파일에서 `gdsMessage`, `gdsMenu` 선언 라인 확인
- **분석 문서 참조**: §5-3 "앱 초기화 흐름 (전역 Dataset 생성)"

**1-2-7 | data-appkey div 설정 확인**
- **검증 목적**: nexacroK는 HTML 내 `data-appkey` 속성이 있는 `<div>`를 찾아 마운트됩니다. 속성값이 `environment.xml.js`의 appkey와 일치해야 합니다.
- **확인 방법**: `index_mfe.html` 소스에서 `data-appkey="Sample_K"` 확인. F12 > Elements 탭에서 실시간 확인 가능
- **실패 시 증상**: 앱이 마운트되지 않고 빈 div만 존재
- **분석 문서 참조**: §5-4 "MFE embed 코드 패턴 (단일 앱 embed)"

**1-2-8 | popup.html 정적 서빙 확인**
- **검증 목적**: nexacroK 팝업은 `popup.html`을 별도 창으로 엽니다. 이 파일이 React/Vite 번들러를 거치지 않고 정적 파일로 서빙되어야 합니다. React 앱 환경에서는 별도 미들웨어 설정이 필요합니다.
- **확인 방법**: `http://localhost:8080/popup.html` 직접 접속하여 404 없음 확인. F12 > Network에서 응답 Content-Type이 `text/html`인지 확인
- **분석 문서 참조**: §1-6 "제너레이터 변경 (popup.html)", §3 "vite.config.js 수동 수정", §5-1 "폴더 구조 (popup.html)"

---

### 1-3. 앱 초기화 흐름 확인

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 1-3-1 | `app.js` 로드 후 `data-appkey="Sample_K"` div에 nexacroK가 마운트됨 | [ ] | DevTools Elements 탭 확인 |
| 1-3-2 | `frmLogin.xfdl.js` 또는 startup Form이 최초 표시됨 | [ ] | |
| 1-3-3 | 네트워크 탭에서 `environment.xml.js`, `application.xadl.js` 로드 200 OK | [ ] | |
| 1-3-4 | 네트워크 탭에서 테마 CSS 파일 로드 200 OK | [ ] | `_resource_/_theme_/` |
| 1-3-5 | 브라우저 콘솔에 JavaScript 에러 없음 | [ ] | |

#### 항목별 상세 설명

**1-3-1 ~ 1-3-2 | 마운트 및 startup Form 표시**
- **검증 목적**: `app.js` → `environment.xml.js` → `application.xadl.js` → startup Form 순서로 초기화가 완료되어야 합니다. 이 흐름이 정상이면 로그인 화면 또는 메인 화면이 표시됩니다.
- **확인 방법**: F12 > Elements 탭에서 `data-appkey` div 내부에 nexacroK가 생성한 DOM 요소가 있는지 확인
- **실패 시 증상**: div가 비어 있거나 `Cannot read properties of undefined` 에러
- **분석 문서 참조**: §5-3 "앱 초기화 흐름 (전체 다이어그램)"

**1-3-3 ~ 1-3-4 | 핵심 파일 HTTP 200 확인**
- **검증 목적**: 초기화 과정에서 로드되는 파일들이 모두 정상 응답해야 합니다. 404 응답이 있으면 초기화가 중단됩니다.
- **확인 방법**: F12 > Network 탭 > Filter: XHR/JS에서 `environment.xml.js`, `application.xadl.js`, `_resource_/_theme_/` 경로 파일들의 Status 컬럼 확인
- **분석 문서 참조**: §5-1 "폴더 전체 구조", §5-3 "앱 초기화 흐름"

---

## 2. 테스트 A — nexacroK → nexacroK (NexacroPortal)

> 참고 파일: `sample/nexacroportal.xfdl.js`, `nexacrolib/component/ComComp/NexacroPortal.js`  
> 앱 A(`Sample_K`, 포트 8080) 안에서 앱 B(`KKKKKKK`, 포트 8000)를 NexacroPortal로 embed

### 2-1. 마운트 / 언마운트

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 2-1-1 | nexacroportal.xfdl 화면에서 NexacroPortal 컴포넌트가 렌더링됨 | [ ] | |
| 2-1-2 | `data-appkey="KKKKKKK"` 설정 후 앱 B가 컨테이너 안에 마운트됨 | [ ] | |
| 2-1-3 | `onmount` 이벤트 발생 확인 (콘솔 trace 또는 브레이크포인트) | [ ] | |
| 2-1-4 | 화면 이동 또는 컨테이너 hide 시 앱 B가 정상 언마운트됨 | [ ] | |
| 2-1-5 | `onunmount` 이벤트 발생 확인 | [ ] | |
| 2-1-6 | 언마운트 후 재마운트 시 앱 B가 정상 재초기화됨 | [ ] | 메모리 누수 없음 |

#### 항목별 상세 설명

**2-1-1 ~ 2-1-3 | 마운트 확인**
- **검증 목적**: NexacroPortal은 nexacroK 안에서 다른 nexacroK 앱을 embed하는 컴포넌트입니다(NexaView에서 명칭 변경). `data-appkey`로 지정한 앱이 컨테이너 내부에 정상 마운트되는지 확인합니다.
- **확인 방법**:
  1. 샘플 앱의 메뉴에서 `nexacroportal.xfdl` 화면으로 이동
  2. 앱 B 서버(포트 8000)가 실행 중인지 확인
  3. NexacroPortal 컴포넌트 영역 안에 앱 B 화면이 표시되는지 확인
  4. 스크립트에 `trace("onmount")` 추가 후 콘솔에서 확인
- **실패 시 증상**: NexacroPortal 영역이 비어 있거나 `onerror` 이벤트 발생
- **분석 문서 참조**: §1-7 "NexacroPortal 컴포넌트 (onmount, onunmount, onerror 속성)", §5-7 "테스트 A와의 연계"

**2-1-4 ~ 2-1-6 | 언마운트 및 재마운트**
- **검증 목적**: 화면 이동이나 컨테이너 숨김 시 앱 B의 리소스가 정상 해제되고, 재방문 시 메모리 누수 없이 재초기화되는지 확인합니다.
- **확인 방법**:
  1. nexacroportal.xfdl에서 다른 화면으로 이동 후 `onunmount` 이벤트 로그 확인
  2. F12 > Memory 탭에서 마운트/언마운트 전후 힙 스냅샷 비교
  3. 다시 nexacroportal.xfdl로 돌아와 앱 B가 재초기화되는지 확인
- **분석 문서 참조**: §1-7 "NexacroPortal 속성/이벤트 표"

---

### 2-2. Form Only vs Application 전체 로드

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 2-2-1 | `data-fdl=""` (빈 값) → 앱 B의 MainFrame 전체(startup Form)가 로드됨 | [ ] | |
| 2-2-2 | `data-fdl="sample::sampleScript.xfdl"` → 해당 Form만 로드됨 | [ ] | Application 없이 Form만 |
| 2-2-3 | `data-fdl`에 존재하지 않는 경로 입력 시 `onerror` 이벤트 발생 | [ ] | |
| 2-2-4 | Form Only 로드 시 앱 B의 전역 Dataset이 없어도 화면이 정상 표시됨 | [ ] | |

#### 항목별 상세 설명

**2-2-1 ~ 2-2-2 | data-fdl 로드 범위 차이**
- **검증 목적**: `data-fdl` 속성이 비어 있으면 앱 B의 Application 전체(MainFrame + startup Form)를 로드하고, 값이 있으면 해당 Form만 단독으로 로드합니다. 두 방식의 동작 차이를 검증합니다.
- **확인 방법**:
  1. `data-fdl=""` 설정 → 앱 B의 로그인 화면 또는 메인 화면이 표시되는지 확인
  2. `data-fdl="sample::sampleScript.xfdl"` 설정 → 해당 Form만 표시되고, 앱 B의 메뉴/헤더가 없는지 확인
- **분석 문서 참조**: §1-7 "data-fdl 속성 설명 (미지정 시 Application 전체 로드)", §2 "테스트 A 확인 포인트 #5"

**2-2-3 ~ 2-2-4 | 오류 처리 및 독립성**
- **검증 목적**: 잘못된 경로 입력 시 앱 A가 중단되지 않고 `onerror` 이벤트만 발생하는지 확인합니다. Form Only 방식에서 전역 Dataset 부재가 화면 표시에 영향을 주지 않아야 합니다.
- **분석 문서 참조**: §1-7 "onerror 이벤트", §2 "테스트 A 확인 포인트 #6"

---

### 2-3. 격리 검증

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 2-3-1 | DevTools Elements에서 앱 A / 앱 B의 CSS 클래스명이 서로 다름 (해싱됨) | [ ] | |
| 2-3-2 | 앱 A에서 이벤트 발생 시 앱 B에 영향 없음 | [ ] | 이벤트 버블링 차단 확인 |
| 2-3-3 | 앱 A와 앱 B의 `environment` 객체가 독립적임 (콘솔에서 확인) | [ ] | |
| 2-3-4 | 앱 B 내부에서 `nexacro` 전역 객체가 앱 A와 공유되지 않음 | [ ] | ESM 스코프 격리 확인 |
| 2-3-5 | 앱 B의 전역 Dataset 변경이 앱 A에 영향 없음 | [ ] | |

#### 항목별 상세 설명

**2-3-1 | CSS 클래스 해싱 확인**
- **검증 목적**: `appkey`를 기반으로 CSS 클래스명이 해싱되어 앱 간 스타일 충돌이 방지됩니다. 두 앱의 Button 등 동일 컴포넌트가 다른 클래스명을 사용하는지 확인합니다.
- **확인 방법**: F12 > Elements 탭에서 앱 A의 Button 클래스명과 앱 B의 Button 클래스명을 비교. 예: `nx-Sample_K-btn` vs `nx-KKKKKKK-btn` 형태
- **분석 문서 참조**: §6-2 "CSS Style Collisions — appkey 자동 처리", §4 "Module Federation 미사용 이유 > Style 격리"

**2-3-3 ~ 2-3-4 | JS 스코프 격리**
- **검증 목적**: ESM 방식으로 로드된 nexacroK는 각 앱이 독립적인 `nexacro`, `environment`, `application` 객체를 가집니다. `window.nexacro`가 공유되지 않아야 합니다.
- **확인 방법**: F12 > Console에서 `window.nexacro` 입력 시 `undefined`이거나 특정 앱의 객체만 반환되는지 확인
- **분석 문서 참조**: §1-5 "Multi-Project 구조 (environment, application 스코프 관리)", §4 "Module Federation 미사용 이유 > JS 격리"

---

### 2-4. 오류 처리

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 2-4-1 | 앱 B 서버(포트 8000) 중단 후 NexacroPortal embed 시 `onerror` 이벤트 발생 | [ ] | |
| 2-4-2 | 잘못된 `data-appkey` 값 입력 시 오류 처리됨 (앱 A는 정상 동작 유지) | [ ] | |
| 2-4-3 | 앱 B 내부 스크립트 오류가 앱 A를 중단시키지 않음 | [ ] | |

#### 항목별 상세 설명

**2-4-1 ~ 2-4-3 | 격리된 오류 처리**
- **검증 목적**: MFE의 핵심 가치는 한 앱의 장애가 다른 앱에 전파되지 않는 것입니다. 앱 B가 실패하더라도 앱 A는 정상 동작을 유지해야 합니다.
- **확인 방법**:
  1. 터미널 2(포트 8000)를 종료하고 nexacroportal.xfdl로 이동하여 앱 A 정상 동작 확인
  2. `data-appkey`를 임의 값(예: `XXXXX`)으로 변경 후 `onerror` 이벤트 핸들러 동작 확인
  3. 앱 B 화면 스크립트에 의도적으로 `undefined.property` 오류 삽입 후 앱 A 상태 확인
- **분석 문서 참조**: §1-7 "onerror 이벤트", §2 "테스트 A 확인 포인트 #6"

---

## 3. 테스트 B — React → nexacroK (div embed)

> 참고 파일: `nexacro-k-portlet-react/src/Portlet.jsx`, `nexacro-k-portlet-react/vite.config.js`  
> React 앱(포트 5174)이 nexacroK 배포본을 `data-appkey` div로 embed

### 3-1. 기본 마운트

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 3-1-1 | React 앱에서 `<div data-appkey="..." data-fdl="...">` 렌더링 후 nexacroK 마운트됨 | [ ] | |
| 3-1-2 | `nexacro.js`와 `app.js`가 `type="module"`로 정상 로드됨 | [ ] | 네트워크 탭 확인 |
| 3-1-3 | nexacroK 화면(startup Form)이 React 컨테이너 안에 정상 표시됨 | [ ] | |
| 3-1-4 | React devtools에서 Portlet 컴포넌트가 정상 렌더링 상태 | [ ] | |

#### 항목별 상세 설명

**3-1-1 ~ 3-1-4 | React 내 nexacroK 마운트**
- **검증 목적**: React 앱이 `data-appkey` div를 렌더링하면 nexacroK가 자동으로 해당 div를 감지하고 마운트됩니다. React의 렌더링 사이클과 nexacroK 초기화 타이밍이 맞아야 합니다.
- **확인 방법**:
  ```bash
  cd deploys/nexacro-k-portlet-react
  npm install
  node ../../mfe-build.js
  # 브라우저: http://localhost:5174
  ```
  React Portlet 컴포넌트가 렌더링되면 nexacroK 화면이 div 안에 표시되는지 확인
- **실패 시 증상**: div가 비어 있거나 React 컴포넌트 트리에서 오류 경계가 활성화됨
- **분석 문서 참조**: §2 "테스트 B 구현 방법 (Portlet.jsx 패턴)", §4 "nexacro-k-portlet-react 설명", §5-4 "MFE embed 코드 패턴"

---

### 3-2. React 생명주기와 nexacroK 연동

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 3-2-1 | React 컴포넌트 unmount 시 nexacroK 앱이 함께 정리됨 (메모리 해제) | [ ] | `useEffect` cleanup |
| 3-2-2 | React 컴포넌트 remount 시 nexacroK 앱이 재초기화됨 | [ ] | |
| 3-2-3 | React state 변경으로 nexacroK 컨테이너 크기가 변경될 때 nexacroK 화면 정상 리사이즈 | [ ] | |
| 3-2-4 | React strict mode에서 이중 마운트/언마운트 시 nexacroK 오류 없음 | [ ] | |

#### 항목별 상세 설명

**3-2-1 ~ 3-2-2 | useEffect cleanup과 연동**
- **검증 목적**: React의 `useEffect` cleanup 함수에서 nexacroK 언마운트 처리를 해야 메모리 누수가 없습니다. `Portlet.jsx`에서 cleanup 로직이 올바르게 구현되어 있는지 확인합니다.
- **확인 방법**: React DevTools에서 Portlet 컴포넌트를 언마운트(탭 전환, 조건부 렌더링 제거)하고 F12 > Memory에서 힙 스냅샷 비교
- **분석 문서 참조**: §2 "테스트 B 확인 포인트 #2 (useEffect cleanup)", §4 "nexacro-k-portlet-react"

**3-2-4 | React Strict Mode 이중 실행**
- **검증 목적**: React 18 Strict Mode는 개발 환경에서 마운트 → 언마운트 → 재마운트를 의도적으로 실행합니다. nexacroK가 이중 초기화 시도에 대해 안정적으로 동작하는지 확인합니다.
- **확인 방법**: `index.js`에서 `<React.StrictMode>` 활성화 상태로 앱 실행 후 콘솔 오류 확인
- **분석 문서 참조**: §2 "테스트 B"

---

### 3-3. DnD (드래그앤드롭) 이동

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 3-3-1 | react-dnd로 nexacroK portlet을 다른 위치로 드래그앤드롭 가능 | [ ] | |
| 3-3-2 | DnD 이동 후 nexacroK 화면이 정상 표시됨 (재마운트 시 깨짐 없음) | [ ] | known issue — README 참고 |
| 3-3-3 | DnD 이동 후 nexacroK 컴포넌트 이벤트가 정상 동작함 | [ ] | |
| 3-3-4 | DnD 중 nexacroK 화면이 드래그 영역을 가로막지 않음 | [ ] | pointer-events 설정 확인 |

#### 항목별 상세 설명

**3-3-1 ~ 3-3-4 | DnD 통합**
- **검증 목적**: `nexacro-k-portlet-react` 예제의 핵심 기능으로, react-dnd를 사용해 nexacroK portlet을 드래그하여 재배치할 수 있습니다. DnD 이동 후 DOM 위치가 변경되면 nexacroK가 재마운트되는데, 이 과정에서 깨짐 없이 동작하는지 확인합니다.
- **확인 방법**: portlet 헤더를 드래그하여 다른 컬럼으로 이동. 이동 완료 후 nexacroK 화면 표시 상태와 버튼 클릭 등 이벤트 동작 확인
- **알려진 이슈**: DnD 이동 시 nexacroK가 재마운트되면 일시적 깜빡임이 발생할 수 있음 (README 참고)
- **DnD 중 이벤트 차단**: nexacroK 화면이 마우스 이벤트를 캡처하면 드래그가 안 될 수 있으므로 드래그 중 `pointer-events: none` CSS 적용 필요
- **분석 문서 참조**: §2 "테스트 B 확인 포인트 #3 (DnD)", §4 "nexacro-k-portlet-react"

---

### 3-4. 복수 nexacroK 인스턴스

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 3-4-1 | 동일 페이지에 `data-appkey`가 다른 nexacroK div 2개 이상 동시 렌더링됨 | [ ] | |
| 3-4-2 | 각 인스턴스가 독립적으로 초기화됨 (서로 간섭 없음) | [ ] | |
| 3-4-3 | 한 인스턴스의 오류가 다른 인스턴스에 영향 없음 | [ ] | |

#### 항목별 상세 설명

**3-4-1 ~ 3-4-3 | 다중 인스턴스 격리**
- **검증 목적**: 동일 React 앱에서 `appkey`가 다른 nexacroK를 여러 개 렌더링할 수 있습니다. 각 인스턴스가 독립적으로 동작하고 서로 영향을 주지 않아야 합니다.
- **확인 방법**: `Portlet.jsx`를 두 개 렌더링하되 각각 다른 `appkey`와 `fdl` 설정. 한쪽에서 Form 이동 시 다른쪽에 영향 없음 확인
- **분석 문서 참조**: §1-5 "Multi-Project / Application 구조", §2 "테스트 B 확인 포인트 #5", §5-4 "동일 페이지 다중 앱 embed 코드"

---

### 3-5. popup.html 처리

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 3-5-1 | nexacroK 내 팝업 오픈 시 `popup.html`이 별도 창으로 열림 | [ ] | |
| 3-5-2 | Vite 미들웨어에서 `popup.html` 요청이 React 번들 처리 없이 정적 파일로 응답됨 | [ ] | 네트워크 탭 확인 |
| 3-5-3 | 팝업 내부 nexacroK 화면이 정상 표시됨 | [ ] | |
| 3-5-4 | 팝업 닫기 후 호스트 화면에 반환값이 정상 전달됨 | [ ] | |

#### 항목별 상세 설명

**3-5-1 ~ 3-5-2 | popup.html 정적 서빙**
- **검증 목적**: Vite는 기본적으로 모든 HTML 요청을 React SPA의 `index.html`로 라우팅합니다. nexacroK가 `popup.html`을 열 때 React 번들 처리가 되면 팝업이 정상 동작하지 않습니다. `vite.config.js`의 미들웨어로 우회 처리해야 합니다.
- **확인 방법**: nexacroK 앱에서 팝업을 열고 F12 > Network 탭에서 `popup.html` 요청의 응답 헤더와 본문 확인. React SPA 마크업이 아닌 nexacroK 팝업 마크업이어야 함
- **실패 시 증상**: 팝업 창에 React 앱이 표시되거나 빈 화면
- **분석 문서 참조**: §1-6 "제너레이터 변경 (popup.html)", §3 "vite.config.js 미들웨어 수동 추가", §5-1 "폴더 구조 (popup.html)"

---

## 4. 테스트 C — nexacroK → React 화면

> nexacroK 프로젝트 안에서 React 앱을 실행하는 시나리오

### 4-1. WebBrowser / Div.url 방식

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 4-1-1 | nexacroK의 `WebBrowser` 컴포넌트에 React 앱 URL 설정 후 정상 렌더링됨 | [ ] | |
| 4-1-2 | nexacroK의 `Div.url`에 React 앱 URL 설정 후 정상 렌더링됨 | [ ] | |
| 4-1-3 | nexacroK Form 리사이즈 시 React 앱 영역이 함께 리사이즈됨 | [ ] | |
| 4-1-4 | React 앱 내부 클릭/스크롤 이벤트가 nexacroK에 간섭하지 않음 | [ ] | |

#### 항목별 상세 설명

**4-1-1 ~ 4-1-2 | WebBrowser/Div.url로 React 임베드**
- **검증 목적**: nexacroK 내에서 외부 React 앱을 iframe 형태로 로드하는 두 가지 방식을 확인합니다. WebBrowser는 Edge WebView2 기반, Div.url은 Div 내부에 외부 URL을 로드합니다.
- **확인 방법**:
  ```javascript
  // WebBrowser 방식
  this.wb_react.set_url("http://localhost:5174");
  
  // Div.url 방식
  this.div_react.set_url("http://localhost:5174");
  ```
  React 앱이 해당 영역에 표시되는지 확인
- **분석 문서 참조**: §2 "테스트 C 구현 방법 (옵션 비교 표)"

**4-1-3 ~ 4-1-4 | 리사이즈 및 이벤트 격리**
- **검증 목적**: nexacroK Form 크기 변경 시 React 앱 영역도 함께 조정되어야 합니다. React 앱 내부 이벤트(클릭, 스크롤)가 nexacroK로 버블링되지 않아야 합니다.
- **확인 방법**: 브라우저 창 크기를 변경하고 React 앱 영역이 overflow/clipping 없이 조정되는지 확인
- **분석 문서 참조**: §2 "테스트 C 확인 포인트 #3, #5"

---

### 4-2. postMessage 양방향 통신

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 4-2-1 | nexacroK → React: `window.postMessage()` 전송 후 React `addEventListener("message")`에서 수신 | [ ] | |
| 4-2-2 | React → nexacroK: React에서 `postMessage` 전송 후 nexacroK `onusernotify`에서 수신 | [ ] | |
| 4-2-3 | 메시지 `origin` 검증이 적용되어 있음 (`event.origin` 확인) | [ ] | 보안 |
| 4-2-4 | 복잡한 객체 데이터가 JSON 직렬화를 통해 정상 전달됨 | [ ] | |

#### 항목별 상세 설명

**4-2-1 ~ 4-2-4 | postMessage 양방향 통신**
- **검증 목적**: nexacroK와 React 앱은 서로 다른 origin 또는 iframe 컨텍스트에 있을 수 있으므로 `window.postMessage`를 통해 통신합니다. 양방향 메시지 전달과 보안 검증(origin 화이트리스트)이 정상 동작하는지 확인합니다.
- **확인 방법**:
  ```javascript
  // nexacroK에서 React로 전송
  window.postMessage(JSON.stringify({ type: "NX_EVENT", data: "value" }), "http://localhost:5174");
  
  // React에서 nexacroK로 전송 (iframe.contentWindow)
  iframeRef.current.contentWindow.postMessage({ type: "REACT_EVENT" }, "http://localhost:8080");
  ```
  각각 수신 측에서 콘솔 로그로 확인
- **보안 확인**: 수신 측 `event.origin`이 예상 도메인과 일치하지 않으면 무시하는 로직이 있는지 확인
- **분석 문서 참조**: §2 "테스트 C 확인 포인트 #2 (postMessage)", §2 "테스트 B 확인 포인트 #6"

---

### 4-3. 팝업 처리

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 4-3-1 | React 앱 내부 팝업이 nexacroK 컨테이너 영역 밖으로 표시됨 | [ ] | z-index 확인 |
| 4-3-2 | nexacroK 팝업과 React 팝업이 동시에 열릴 때 z-index 충돌 없음 | [ ] | |

#### 항목별 상세 설명

**4-3-1 ~ 4-3-2 | z-index 충돌 방지**
- **검증 목적**: nexacroK가 생성하는 팝업과 React 앱(iframe 내)이 생성하는 팝업의 z-index가 충돌하면 한쪽이 가려집니다. nexacroK 팝업이 React iframe 위에 표시되어야 합니다.
- **확인 방법**: nexacroK에서 모달 팝업을 열고 React 앱 영역이 overlay에 의해 가려지는지 확인. 반대로 React 앱 내부 alert/modal이 nexacroK 영역까지 커버하는지 확인
- **분석 문서 참조**: §2 "테스트 C 확인 포인트 #4 (팝업 처리)"

---

## 5. 테스트 D — 다중 인스턴스 격리

> 동일 페이지에 appkey가 다른 nexacroK 앱 2개 이상 동시 실행

### 5-1. Style 격리

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 5-1-1 | DevTools Elements에서 각 앱의 CSS 클래스명이 서로 다른 해시값을 가짐 | [ ] | appkey 기반 해싱 |
| 5-1-2 | 앱 A의 테마 변경이 앱 B에 영향 없음 | [ ] | |
| 5-1-3 | 앱 A와 앱 B가 같은 컴포넌트 타입(Button 등)을 사용할 때 스타일 충돌 없음 | [ ] | |
| 5-1-4 | `environment.themekey` / `csscollisionpreventkey` 미설정 상태에서도 충돌 없음 | [ ] | appkey만으로 처리됨 |

#### 항목별 상세 설명

**5-1-1 ~ 5-1-4 | CSS 클래스 해싱 격리**
- **검증 목적**: 동일 페이지에서 두 nexacroK 앱이 같은 Button 컴포넌트를 렌더링할 때 CSS 클래스명이 충돌하면 한쪽 앱의 스타일이 깨집니다. `appkey` 기반 해싱으로 이 문제를 방지합니다.
- **확인 방법**:
  1. `http://localhost:8080/index_mfe_test.html` 열기 — 앱 A(Sample_K)와 앱 B(KKKKKKK)가 좌우로 배치됨
  2. F12 > Elements에서 앱 A의 Button 요소 클래스명과 앱 B의 Button 요소 클래스명 비교
  3. 앱 A에서 CSS 그룹 전환(`app.xcssgroup = "Dark"`) 후 앱 B 화면 변화 없음 확인
  4. `environment.xml.js`에 `themekey` 미설정 상태에서도 스타일 정상 적용 확인
- **실패 시 증상**: 두 앱이 동일 CSS 클래스를 공유하여 한쪽 앱 테마 변경 시 다른 앱에도 영향
- **분석 문서 참조**: §6-2 "CSS Style Collisions 처리 방식 (정정)", §1-5 "environment.appkey 설명", §4 "Module Federation 미사용 이유 > Style 격리"

---

### 5-2. JS 격리

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 5-2-1 | `window.nexacro` 전역 객체가 두 앱에서 공유되지 않음 | [ ] | ESM 스코프 확인 |
| 5-2-2 | 앱 A의 전역 Dataset 변경이 앱 B에 전파되지 않음 | [ ] | |
| 5-2-3 | 앱 A의 전역 변수 변경이 앱 B에 전파되지 않음 | [ ] | |
| 5-2-4 | 앱 A와 앱 B가 동일한 이벤트 핸들러명을 사용해도 충돌 없음 | [ ] | |

#### 항목별 상세 설명

**5-2-1 ~ 5-2-4 | ESM 스코프 격리**
- **검증 목적**: CommonJS 방식이면 `window.nexacro`가 공유되어 두 앱이 동일한 전역 객체를 사용합니다. ESM 방식에서는 각 `nexacro.js`가 독립적인 모듈 스코프를 가지므로 격리됩니다.
- **확인 방법**:
  1. F12 > Console에서 `window.nexacro` 입력 — `undefined`이거나 특정 앱 객체만 반환
  2. 앱 A 콘솔에서 `application.setGlobal("TEST", "A값")` 실행 후 앱 B에서 `application.getGlobal("TEST")` 확인 — `undefined`이어야 함
  3. 앱 A 스크립트에서 전역 변수 `gvTest = "A"` 설정 후 앱 B에서 접근 불가 확인
- **분석 문서 참조**: §1-5 "Multi-Project 구조 (스코프 관리)", §4 "Module Federation 미사용 이유 > JS 격리", §1-1 "ESModule 단일 방식"

---

### 5-3. 동시 실행 안정성

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 5-3-1 | 앱 A, 앱 B가 동시에 로드될 때 초기화 순서에 의한 오류 없음 | [ ] | race condition 확인 |
| 5-3-2 | 앱 A를 언마운트해도 앱 B는 정상 동작 유지 | [ ] | |
| 5-3-3 | 앱 B를 언마운트해도 앱 A는 정상 동작 유지 | [ ] | |
| 5-3-4 | 3개 이상 앱 동시 실행 시 성능 저하 없음 (FPS 30 이상 유지) | [ ] | |

#### 항목별 상세 설명

**5-3-1 | 동시 초기화 Race Condition**
- **검증 목적**: 두 앱이 동시에 `environment.xml.js`를 로드하고 초기화할 때 타이밍 문제(race condition)로 한쪽이 실패할 수 있습니다.
- **확인 방법**: `index_mfe_test.html`을 여러 번 새로고침하며 매번 두 앱이 모두 정상 초기화되는지 확인. 콘솔에 오류 없음 확인
- **분석 문서 참조**: §2 "테스트 F (동일 페이지 복수 nexacroK 인스턴스)", §5-4 "동일 페이지 다중 앱 embed 코드"

**5-3-2 ~ 5-3-3 | 독립 언마운트**
- **검증 목적**: 한 앱이 언마운트될 때 공유 리소스를 해제하면 다른 앱에 영향을 줄 수 있습니다. 각 앱이 독립적으로 언마운트되어야 합니다.
- **확인 방법**: 개발자 도구에서 앱 A의 div를 제거하고 앱 B가 계속 정상 동작하는지 확인

**5-3-4 | 3개 이상 앱 성능**
- **검증 목적**: 다중 인스턴스 환경에서 메인 스레드가 과부하되면 UI 응답성이 저하됩니다.
- **확인 방법**: F12 > Performance 탭에서 3개 앱 동시 실행 중 FPS 측정. 30fps 이하로 떨어지면 기록
- **분석 문서 참조**: §2 "MFE 구현 메커니즘", §4 "개발 서버 포트 구조"

---

## 6. 테스트 E — CSS 테마 / 다크모드 전환

> 참고 파일: `deploys/GroupAutoSelector/`, `deploys/GroupAutoSelector-portlet/`

### 6-1. xcssgroup 전환

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 6-1-1 | `app.xcssgroup = "Dark"` 설정 후 다크모드 CSS가 적용됨 | [ ] | |
| 6-1-2 | `app.xcssgroup = "Light"` 설정 후 라이트모드 CSS로 복귀됨 | [ ] | |
| 6-1-3 | xcssgroup 전환 시 화면 깜빡임(FOUC) 없음 | [ ] | |
| 6-1-4 | 전환 후 모든 컴포넌트에 테마가 일관되게 적용됨 | [ ] | |

#### 항목별 상세 설명

**6-1-1 ~ 6-1-4 | xcssgroup 다크/라이트 전환**
- **검증 목적**: nexacroK는 런타임에 `app.xcssgroup` 값을 변경하여 테마를 즉시 전환할 수 있습니다. 전환 후 Button, Grid, Edit 등 모든 컴포넌트에 새 테마가 일관되게 적용되어야 합니다.
- **확인 방법**:
  ```bash
  # GroupAutoSelector 예제 실행
  # (nexacro-k-examples/deploys/GroupAutoSelector 폴더)
  npx serve . -p 5175
  ```
  브라우저에서 다크/라이트 전환 버튼 클릭 후 전체 화면 테마 변경 확인
- **FOUC 확인**: 전환 시 순간적으로 스타일 없는 화면이 표시되면 CSS 로드 순서 문제
- **분석 문서 참조**: §2 "추가 MFE 테스트 > 테스트 D (다크/라이트 모드)", §4 "GroupAutoSelector 설명"

---

### 6-2. xcssgroupfilter (viewport-aware)

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 6-2-1 | `app.xcssgroupfilter = "viewport"` 설정 후 viewport 크기에 따라 CSS 그룹 자동 전환됨 | [ ] | |
| 6-2-2 | 브라우저 창 크기 변경 시 CSS 그룹이 자동으로 재선택됨 | [ ] | |
| 6-2-3 | 다중 인스턴스 환경에서 각 앱의 xcssgroup이 독립적으로 관리됨 | [ ] | |

#### 항목별 상세 설명

**6-2-1 ~ 6-2-2 | viewport 기반 자동 CSS 그룹 전환**
- **검증 목적**: `xcssgroupfilter = "viewport"` 설정 시 브라우저 창 너비에 따라 CSS 그룹이 자동으로 선택됩니다(반응형 레이아웃). 창 크기를 변경하면 테마/레이아웃이 자동 전환되어야 합니다.
- **확인 방법**: 브라우저 개발자 도구에서 반응형 모드로 전환하여 창 너비를 600px, 1024px, 1440px로 변경하며 CSS 그룹 전환 확인
- **분석 문서 참조**: §2 "추가 MFE 테스트 > 테스트 D", §4 "GroupAutoSelector 예제"

**6-2-3 | 다중 인스턴스 독립 xcssgroup**
- **검증 목적**: 두 nexacroK 앱이 동시에 실행될 때 각 앱의 `xcssgroup` 설정이 서로 독립적으로 유지되어야 합니다.
- **확인 방법**: `index_mfe_test.html`에서 앱 A의 xcssgroup을 "Dark"로, 앱 B는 "Light"로 설정하고 서로 다른 테마가 유지되는지 확인
- **분석 문서 참조**: §1-5 "Multi-Project 구조", §6-2 "CSS Style Collisions — appkey 자동 처리"

---

## 7. 테스트 F — 브라우저 History API 연동

> 참고 파일: `deploys/History/`

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 7-1 | nexacroK 메뉴 이동 시 브라우저 URL이 변경됨 | [ ] | `history.pushState` 확인 |
| 7-2 | 브라우저 뒤로가기 버튼 클릭 시 이전 nexacroK 화면으로 복원됨 | [ ] | |
| 7-3 | 브라우저 앞으로가기 버튼 클릭 시 다음 nexacroK 화면으로 이동됨 | [ ] | |
| 7-4 | URL 직접 입력으로 특정 화면에 딥링크 접근 가능 | [ ] | `?formname=...` 파라미터 |
| 7-5 | 페이지 새로고침 시 현재 URL의 화면으로 복원됨 | [ ] | |
| 7-6 | MFE embed 환경에서 History 조작이 호스트 앱 라우팅에 간섭하지 않음 | [ ] | |

#### 항목별 상세 설명

**7-1 ~ 7-3 | History pushState / popstate**
- **검증 목적**: nexacroK가 메뉴 이동 시 `history.pushState`로 URL을 갱신하고, 브라우저 뒤로/앞으로 버튼 클릭 시 `popstate` 이벤트를 수신하여 화면을 복원합니다.
- **확인 방법**:
  ```bash
  # History 예제 실행
  npx serve deploys/History -p 5176
  ```
  메뉴를 이동하며 브라우저 주소창 URL 변화 확인. 뒤로가기 버튼 클릭 시 이전 화면 복원 확인
- **분석 문서 참조**: §2 "추가 MFE 테스트 > 테스트 E (브라우저 History API)", §4 "History 예제"

**7-4 ~ 7-5 | 딥링크 및 새로고침 복원**
- **검증 목적**: URL에 `?formname=sample::sampleTransaction.xfdl` 파라미터를 붙여 직접 접근하면 해당 화면이 즉시 표시되어야 합니다. 새로고침 시에도 현재 URL의 화면으로 복원되어야 합니다.
- **확인 방법**: `http://localhost:5176/index_mfe.html?formname=sample::sampleTransaction.xfdl` 직접 접속 후 해당 화면 표시 확인. 새로고침(F5) 후 동일 화면 유지 확인
- **분석 문서 참조**: §5-6 "브라우저 접속 URL (특정 Form 직접 진입)"

**7-6 | 호스트 앱 라우팅 간섭 없음**
- **검증 목적**: React SPA 등의 호스트 앱 안에 nexacroK를 embed했을 때, nexacroK의 `history.pushState` 호출이 React Router의 라우팅을 방해하지 않아야 합니다.
- **확인 방법**: React + React Router 환경에 nexacroK embed 후 nexacroK 화면 이동 시 React 라우터의 현재 경로가 유지되는지 확인
- **분석 문서 참조**: §2 "추가 MFE 테스트 > 테스트 E"

---

## 8. 공통 — 팝업 처리

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 8-1 | nexacroK 내부 팝업(`openPopup`)이 정상 표시됨 | [ ] | `popup.html` 로드 |
| 8-2 | 팝업 → 호스트 폼으로 데이터 반환(`close({...})`)이 정상 동작 | [ ] | |
| 8-3 | 팝업 창이 호스트 앱 영역 기준으로 `center middle` 정렬됨 | [ ] | |
| 8-4 | 모달 팝업 표시 중 호스트 화면 클릭이 차단됨 | [ ] | overlay 확인 |
| 8-5 | ESC 키로 팝업이 닫힘 | [ ] | |
| 8-6 | 팝업 내부에서 또 다른 팝업 오픈 가능 (중첩 팝업) | [ ] | |
| 8-7 | MFE embed 환경에서 팝업의 z-index가 호스트 앱보다 높음 | [ ] | |
| 8-8 | 팝업 창 `popup.html`이 React/Vite 번들 처리 없이 정적으로 서빙됨 | [ ] | 테스트 B 환경 한정 |

#### 항목별 상세 설명

**8-1 ~ 8-2 | openPopup 기본 동작**
- **검증 목적**: nexacroK의 `openPopup`은 `popup.html`을 새 창으로 열고 그 안에 지정된 Form을 로드합니다. 팝업에서 데이터를 선택하고 `close({...})`로 반환할 때 호스트 Form의 콜백이 호출되어야 합니다.
- **확인 방법**: `samplePopup.xfdl` 화면에서 팝업 오픈 버튼 클릭 → 팝업 창 표시 확인 → 항목 선택 후 확인 버튼 클릭 → 호스트 화면에 선택값 표시 확인
- **분석 문서 참조**: §5-5 "샘플 화면별 테스트 내용 (samplePopup.xfdl)", §1-6 "제너레이터 변경 (popup.html)"

**8-3 ~ 8-4 | 위치 정렬 및 모달 overlay**
- **검증 목적**: 팝업이 호스트 div 기준 가운데에 배치되고, 모달 팝업 시 overlay가 호스트 화면 클릭을 차단해야 합니다.
- **확인 방법**: 팝업 창 위치 확인. 모달 팝업 뒤 영역(overlay)을 클릭해도 호스트 화면에서 클릭 이벤트가 발생하지 않음 확인

**8-5 ~ 8-6 | 키보드 단축키 및 중첩 팝업**
- **확인 방법**: 팝업이 열린 상태에서 ESC 키 입력 → 팝업 닫힘 확인. 팝업 내부 버튼에서 `openPopup` 추가 호출 → 2단계 팝업 표시 확인

**8-7 ~ 8-8 | MFE 환경 z-index 및 정적 서빙**
- **검증 목적**: nexacroK가 React SPA 안에 embed된 경우, nexacroK의 팝업이 React 컴포넌트 위에 표시되어야 합니다. 또한 Vite가 `popup.html`을 SPA 라우팅으로 처리하지 않도록 미들웨어 설정이 필요합니다.
- **확인 방법**: React 앱에서 nexacroK 팝업 오픈 후 z-index 확인. F12 > Network에서 `popup.html` 요청 응답이 nexacroK 마크업인지 확인
- **분석 문서 참조**: §3 "vite.config.js popup.html 미들웨어", §5-1 "폴더 구조 (popup.html)"

---

## 9. 공통 — 메시지 통신

### 9-1. nexacroK 내부 메시지 (gfnAlert)

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 9-1-1 | `gfnAlert("CFN", ...)` — 확인 메시지 팝업 정상 표시 | [ ] | |
| 9-1-2 | `gfnAlert("INF", ...)` — 정보 메시지 팝업 정상 표시 | [ ] | |
| 9-1-3 | `gfnAlert("WAN", ...)` — 경고 메시지 팝업 정상 표시 | [ ] | |
| 9-1-4 | `gfnAlert("ERR", ...)` — 에러 메시지 팝업 정상 표시 | [ ] | |
| 9-1-5 | 메시지 팝업의 확인/취소 버튼이 정상 동작 | [ ] | |

#### 항목별 상세 설명

**9-1-1 ~ 9-1-5 | gfnAlert 공통 메시지**
- **검증 목적**: nexacroK 표준 개발에서 `alert` 대신 `gfnAlert`를 사용합니다. 4가지 메시지 타입(CFN: 확인/취소, INF: 정보, WAN: 경고, ERR: 오류)이 각각 적절한 아이콘과 버튼으로 표시되어야 합니다.
- **확인 방법**: `sampleMessage.xfdl` 화면 접속 → 각 메시지 타입 버튼 클릭 → 팝업 스타일과 버튼 동작 확인
  - CFN: 확인/취소 버튼 → 확인 클릭 시 true, 취소 클릭 시 false 콜백
  - INF/WAN/ERR: 확인 버튼만 존재
- **분석 문서 참조**: §5-5 "샘플 화면별 테스트 내용 (sampleMessage.xfdl)", §5-1 "nexacrolib/MobileLib/Message.js"

---

### 9-2. 앱 간 postMessage

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 9-2-1 | 호스트 앱 → 게스트 앱: `window.postMessage` 전송 및 수신 | [ ] | |
| 9-2-2 | 게스트 앱 → 호스트 앱: 이벤트 전파 또는 postMessage로 반환 | [ ] | |
| 9-2-3 | 메시지 페이로드에 복잡한 객체(Dataset row 데이터 등) 포함 가능 | [ ] | JSON 직렬화 |
| 9-2-4 | 잘못된 origin에서의 메시지가 무시됨 | [ ] | 보안 검증 |

#### 항목별 상세 설명

**9-2-1 ~ 9-2-4 | 앱 간 postMessage 통신**
- **검증 목적**: MFE 환경에서 서로 다른 앱(호스트 ↔ 게스트)이 데이터를 교환할 때 `window.postMessage`를 사용합니다. Dataset row 데이터처럼 복잡한 객체를 JSON 직렬화하여 전달하고 복원할 수 있어야 합니다.
- **확인 방법**:
  ```javascript
  // 호스트에서 게스트로
  document.querySelector('[data-appkey="KKKKKKK"]')
    .contentWindow?.postMessage({ type: "HOST_TO_GUEST", payload: { key: "val" } }, "*");
  
  // 수신 측 (origin 검증 필수)
  window.addEventListener("message", (e) => {
    if (e.origin !== "http://localhost:8080") return; // 화이트리스트
    console.log(e.data);
  });
  ```
- **보안**: `origin` 검증 없이 모든 메시지를 처리하면 XSS 공격에 취약하므로 화이트리스트 검증 확인
- **분석 문서 참조**: §2 "테스트 B 확인 포인트 #6", §2 "테스트 C 확인 포인트 #2"

---

## 10. 공통 — 성능 / 메모리

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 10-1 | `index_mfe.html` 최초 로드 시간이 5초 이내 | [ ] | 네트워크 탭 DOMContentLoaded |
| 10-2 | nexacroK 앱 마운트 완료까지 3초 이내 (캐시 없는 상태) | [ ] | |
| 10-3 | 화면 전환 시 FPS 30 이상 유지 | [ ] | DevTools Performance |
| 10-4 | 앱 마운트/언마운트 10회 반복 후 메모리 누수 없음 | [ ] | DevTools Memory 힙 스냅샷 |
| 10-5 | 다중 인스턴스(2개) 동시 실행 시 메모리 2배 이하 | [ ] | |
| 10-6 | `nexacro.js` 번들 크기가 적절한 수준 (참고값 기록) | [ ] | 네트워크 탭 Size 컬럼 |
| 10-7 | 스크롤/리사이즈 이벤트 대량 발생 시 메인 스레드 블로킹 없음 | [ ] | |

#### 항목별 상세 설명

**10-1 ~ 10-2 | 초기 로드 시간**
- **검증 목적**: MFE 방식은 추가 스크립트 로드로 초기 로드 시간이 늘어날 수 있습니다. 5초 이내 로드는 UX 기준점입니다.
- **확인 방법**: F12 > Network 탭에서 Throttling: "Fast 3G" 설정 후 페이지 새로고침. DOMContentLoaded 이벤트 시간과 nexacroK startup Form 표시 시간 기록
- **분석 문서 참조**: §2 "MFE 구현 메커니즘", §5-6 "실행 방법"

**10-3 | FPS 측정**
- **확인 방법**: F12 > Performance 탭 > Record 시작 → 화면 전환 10회 → Record 중지 → Frames 섹션에서 FPS 확인
- **기준**: 30fps 미만이면 주요 렌더링 병목 조사 필요

**10-4 ~ 10-5 | 메모리 누수 및 다중 인스턴스 메모리**
- **검증 목적**: 마운트/언마운트 반복 시 메모리가 계속 증가하면 이벤트 리스너나 DOM 참조가 해제되지 않은 것입니다.
- **확인 방법**:
  1. F12 > Memory 탭 > Take Heap Snapshot (초기값 기록)
  2. 마운트/언마운트 10회 반복
  3. 다시 Heap Snapshot → 초기값 대비 증가량 확인 (10MB 이상 증가 시 이슈)
- **분석 문서 참조**: §2 "MFE 구현 메커니즘 (ESM 스코프 격리)"

**10-6 | 번들 크기**
- **확인 방법**: F12 > Network에서 `nexacro.js` 항목의 Size(압축 전/후) 기록. 다음 테스트 사이클의 참고값으로 활용

**10-7 | 메인 스레드 블로킹**
- **확인 방법**: F12 > Performance에서 Long Task(빨간 삼각형) 발생 여부 확인. 스크롤 이벤트를 빠르게 발생시키며 50ms 이상 블로킹 없음 확인

---

## 11. 공통 — 브라우저 호환성

| # | 브라우저 | 테스트 A | 테스트 B | 테스트 C | 팝업 | 결과 |
|---|----------|----------|----------|----------|------|------|
| 11-1 | Chrome 최신 | [ ] | [ ] | [ ] | [ ] | |
| 11-2 | Edge 최신 | [ ] | [ ] | [ ] | [ ] | |
| 11-3 | Chrome 모바일 (Android) | [ ] | N/A | N/A | [ ] | |
| 11-4 | Safari (iOS) | [ ] | N/A | N/A | [ ] | |

> `type="module"` ESM은 IE 미지원. Chrome / Edge 최신 버전 필수.

#### 항목별 상세 설명

**11-1 ~ 11-2 | Chrome / Edge 데스크톱**
- **검증 목적**: nexacroK는 Chrome과 Edge(Chromium 기반)를 주요 지원 브라우저로 합니다. ESM `type="module"` 스크립트와 CSS 클래스 해싱이 두 브라우저에서 동일하게 동작해야 합니다.
- **확인 방법**: 각 브라우저에서 테스트 A~C 시나리오를 순서대로 실행하고 결과 기록
- **분석 문서 참조**: §1-1 "ESModule 단일 방식 (esmodule true → type=module)", §1-2 "module.json 스펙"

**11-3 ~ 11-4 | 모바일 브라우저**
- **검증 목적**: 모바일 환경에서도 nexacroK MFE가 동작하는지 기본 확인합니다. React embed(테스트 B), nexacroK→React(테스트 C)는 모바일 환경 대상 시나리오가 아니므로 N/A 처리합니다.
- **확인 방법**: Chrome DevTools 반응형 모드(Android) 또는 실제 기기에서 `index_mfe.html` 접속 후 화면 표시 확인
- **분석 문서 참조**: §1-1 "ESModule (esmodule false → script defer 분기)"

---

## 12. 배포 산출물 검증

> `_output_mfe_sample/` 폴더 기준 (nexacrodeploy Generate 결과물)

### 12-1. 파일 구조 확인

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 12-1-1 | `index_mfe.html` 존재 | [ ] | |
| 12-1-2 | `nexacro.js` / `app.js` 존재 | [ ] | |
| 12-1-3 | `environment.xml.js` 존재 및 appkey 값 확인 | [ ] | |
| 12-1-4 | `_resource_/_theme_/` 폴더 내 CSS + 이미지 파일 존재 | [ ] | |
| 12-1-5 | `_resource_/_stringrc_/ko/` 다국어 리소스 파일 존재 | [ ] | |
| 12-1-6 | `_resource_/_initvalue_/` 초기값 파일 존재 | [ ] | |
| 12-1-7 | `popup.html` 존재 | [ ] | |

#### 항목별 상세 설명

**12-1-1 ~ 12-1-7 | 배포 파일 구조 완전성**
- **검증 목적**: nexacrodeploy Generate 후 MFE 동작에 필요한 모든 파일이 산출물 폴더에 존재하는지 확인합니다. 파일 누락 시 런타임 404 오류로 앱이 중단됩니다.
- **확인 방법**: `_output_mfe_sample/` 폴더를 열어 각 파일/폴더 존재 확인. 또는:
  ```powershell
  ls "D:\git_prj\REQM\DOC\NexacroK MFE\sample.xml\_output_mfe_sample"
  ```
- **특이사항**: `index_mfe_test.html`은 개발/테스트용으로 배포 환경에서는 제외 가능 (§1-3 확인)
- **분석 문서 참조**: §5-1 "폴더 전체 구조 (_output_mfe_sample 섹션)", §1-6 "제너레이터 변경 사항 표"

---

### 12-2. 배포본 동작 검증

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 12-2-1 | `_output_mfe_sample/index_mfe.html`이 포트 8000에서 정상 실행 | [ ] | |
| 12-2-2 | `app1.js`(appkey: `KKKKKKK`)가 다중 embed 테스트에서 정상 로드됨 | [ ] | |
| 12-2-3 | `index_mfe_test.html`에서 두 앱(A, B)이 동시에 표시됨 | [ ] | |
| 12-2-4 | Tomcat에 `_output_mfe_sample/` 배포 후 컨텍스트 경로 기준 정상 접근 | [ ] | |
| 12-2-5 | 배포 후 서비스 URL이 환경에 맞게 변경되었음 (`127.0.0.1:4098` → 실 서버) | [ ] | |

#### 항목별 상세 설명

**12-2-1 ~ 12-2-3 | 배포본 실행 검증**
- **검증 목적**: 개발 환경의 소스(sample.xml/)가 아닌 실제 Generate 산출물(_output_mfe_sample/)이 정상 동작하는지 확인합니다. Generate 과정에서 파일이 변환되므로 소스 환경과 동작이 다를 수 있습니다.
- **확인 방법**:
  ```bash
  npx serve "_output_mfe_sample" -p 8000
  # http://localhost:8000/index_mfe.html
  # http://localhost:8000/index_mfe_test.html (앱 A + B 동시 표시)
  ```
- **분석 문서 참조**: §5-2 "appkey 값 (environment.xml.js vs environment1.xml.js)", §5-6 "다중 앱 테스트 실행 방법"

**12-2-4 | Tomcat 배포 후 접근**
- **검증 목적**: 실제 운영 환경인 Tomcat에 배포했을 때 컨텍스트 경로(예: `/mfe-app/`)가 포함된 URL로 정상 접근 가능한지 확인합니다. 상대 경로 설정이 컨텍스트 경로를 고려하지 않으면 404 발생합니다.
- **확인 방법**: Tomcat webapps에 폴더 복사 후 `http://localhost:9091/mfe-app/index_mfe.html` 접속 확인
- **분석 문서 참조**: §5-6 "실행 방법 > Tomcat webapps 배포"

**12-2-5 | 서비스 URL 환경 전환**
- **검증 목적**: `environment.xml.js`의 서비스 URL이 개발용 로컬 주소(`127.0.0.1:4098`)로 설정되어 있습니다. 실 서버 배포 전 운영 서버 URL로 변경해야 합니다.
- **확인 방법**: `environment.xml.js`에서 서비스 URL 검색하여 운영 서버 주소로 변경 여부 확인
- **분석 문서 참조**: §5-3 "앱 초기화 흐름 (서비스 등록)", §1-3 "executeurl 설명"

---

### 12-3. 보안 / 인프라

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 12-3-1 | HTTPS 환경에서 `type="module"` 스크립트가 Mixed Content 오류 없음 | [ ] | |
| 12-3-2 | CORS 헤더가 올바르게 설정됨 (`Access-Control-Allow-Origin`) | [ ] | 다중 서버 환경 |
| 12-3-3 | CSP(Content-Security-Policy) 정책과 ESM 모듈 로드가 충돌하지 않음 | [ ] | |
| 12-3-4 | `postMessage` 통신에 `origin` 화이트리스트 검증 적용됨 | [ ] | |

#### 항목별 상세 설명

**12-3-1 | HTTPS Mixed Content**
- **검증 목적**: HTTPS 페이지에서 HTTP로 nexacroK 스크립트를 로드하면 Mixed Content 오류로 차단됩니다. 모든 스크립트와 리소스가 HTTPS로 서빙되어야 합니다.
- **확인 방법**: HTTPS 서버에 배포 후 F12 > Console에서 `Mixed Content` 경고 없음 확인
- **분석 문서 참조**: §1-1 "ESModule 단일 방식"

**12-3-2 | CORS 헤더 설정**
- **검증 목적**: 다중 서버 환경(앱 A: 서버1, 앱 B: 서버2)에서 앱 A가 앱 B의 스크립트를 로드할 때 CORS가 올바르게 설정되어야 합니다.
- **확인 방법**: F12 > Network에서 교차 출처 요청의 응답 헤더에 `Access-Control-Allow-Origin: *` 또는 특정 도메인 확인
- **분석 문서 참조**: §5-7 "실행 전 확인 사항 (CORS 이슈 방지)"

**12-3-3 | CSP와 ESM 호환성**
- **검증 목적**: 엄격한 CSP 정책(`script-src 'self'` 등)이 적용된 운영 환경에서 `type="module"` 스크립트와 동적 import가 차단될 수 있습니다.
- **확인 방법**: 서버 응답 헤더에 CSP가 있는 경우, `script-src`에 nexacroK 스크립트 출처가 허용되어 있는지 확인

**12-3-4 | postMessage origin 화이트리스트**
- **검증 목적**: `window.postMessage`의 수신 측에서 `event.origin` 검증 없이 모든 메시지를 처리하면 외부 사이트가 악의적인 메시지를 전송할 수 있습니다.
- **확인 방법**: 소스 코드에서 `addEventListener("message"` 핸들러를 검색하여 `if (e.origin !== "허용URL") return;` 패턴이 있는지 확인
- **분석 문서 참조**: §2 "테스트 B 확인 포인트 #6", §2 "테스트 C 확인 포인트 #2"

---

## 결과 집계

| 테스트 영역 | 전체 항목 수 | PASS | FAIL | N/A | 비고 |
|-------------|------------|------|------|-----|------|
| 1. 사전 환경 준비 | 14 | | | | |
| 2. 테스트 A (NexacroPortal) | 13 | | | | |
| 3. 테스트 B (React embed) | 12 | | | | |
| 4. 테스트 C (nexacroK→React) | 7 | | | | |
| 5. 테스트 D (다중 격리) | 11 | | | | |
| 6. 테스트 E (테마 전환) | 6 | | | | |
| 7. 테스트 F (History API) | 6 | | | | |
| 8. 공통 팝업 | 8 | | | | |
| 9. 공통 메시지 | 9 | | | | |
| 10. 성능/메모리 | 7 | | | | |
| 11. 브라우저 호환성 | 16 | | | | |
| 12. 배포 산출물 | 12 | | | | |
| **합계** | **121** | | | | |

---

## 이슈 기록

| 번호 | 테스트 항목 | 현상 | 재현 방법 | 심각도 | 상태 |
|------|------------|------|-----------|--------|------|
| | | | | | |

> 심각도: **Critical** / **High** / **Medium** / **Low**  
> 상태: **Open** / **In Progress** / **Resolved** / **Won't Fix**
