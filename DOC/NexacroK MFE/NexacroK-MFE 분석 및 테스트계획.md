# NexacroK MFE 분석 및 테스트 계획

> 원본 문서: `(분석,방안) NexacroK-MFE & 멀티프로젝트 & 메세지연동 방안.xlsx` — 최종결정 시트  
> 참고 예제: `E:\git\VSCODE_WORK900\WORK900\nexacro-k-examples`  
> 첨부 샘플: `DOC\NexacroK MFE\sample.xml`  
> 작성일: 2026-07-13

---

## 목차

1. [최종결정 시트 핵심 내용](#1-최종결정-시트-핵심-내용)
2. [테스트 계획](#2-테스트-계획)
3. [수동 수정 필요 영역](#3-수동-수정-필요-영역)
4. [nexacro-k-examples 폴더 분석](#4-nexacro-k-examples-폴더-분석)
5. [sample.xml 샘플 구조 분석 및 실행 방법](#5-samplexml-샘플-구조-분석-및-실행-방법)

---

## 1. 최종결정 시트 핵심 내용

### 1-1. ESModule 단일 방식 전환

- CommonJS + ESModule 듀얼 지원 → **ESModule 단일 방식**으로 확정
- 확장자는 `.mjs` 대신 **`.js` 고정** → Apache에서 mime type 추가 설정 불필요
- bootstrap은 `type="module"`로 로드
- `data-shared` 속성 삭제 처리
- esmodule 여부에 따라 분기:
  - `true` → `<script type="module">`
  - `false` → `<script defer>`

### 1-2. module.json 스펙 추가

| 속성 | 타입 | 설명 |
|------|------|------|
| `esmodule` | boolean | ESModule 사용 여부 |
| `import` | string | 파일 경로 |

### 1-3. client-side routing (`executeurl`)

- `typedefinition service`에 `executeurl` 속성 추가
  - `resource service`는 미지원 (파일 분리 제너레이션 복잡성 이슈)
- **`launch.html` 삭제 → `quickview.html`로 통합**

| URL 패턴 | 동작 |
|----------|------|
| `quickview.html?screenid=mobile&formname=...` | 기존 quickview 실행 |
| `quickview.html?screenid=mobile` | 기존 launch 실행 |

- `index_mfe.html`은 배포 결과물에서 제외, 툴에서 별도 처리
- `nexacro._use_service_executeurl = false` 템플릿 포함

### 1-4. Resource Service별 executeurl 처리

| Service | 처리 방식 |
|---------|----------|
| `nexacrolib` | 신규 resource service 추가, `%nexacrolib%` alias 사용 |
| `xfont` | `.xfont` 내 src에 prefix 사용, 개발/실행 환경 분리 |
| `imagerc` | 디플로이 시 옵션 선택 기능 추가 |
| `theme` / `xcssrc` | executeurl 설정 시 root 경로 변경 처리 |
| `extlib` | esmodule type인 경우에만 정상 지원, 아닌 경우 warning |
| `externals` | bootstrap에 `<script>` / `<link>` tag 추가 |

### 1-5. Multi-Project / Application 구조

- **`environment.appkey`** 추가: 프로젝트별 고유 5자 키로 컨테이너 식별
- `nexacro` 공유 기반 Multi-Environment 구조
  - Monolithic: 기존 API 그대로 사용
  - MFE: 제약사항 처리 + 대체 함수 제공
- `environment`, `application` keyword를 script callstack push/pop으로 관리
- **`new` 호출 시 `nexacro.` prefix 필수** (이전 결정에서 변경)
- `xadl.js`, `xfdl.js`, `xjs.js`에서 `environment`, `application`을 전역 객체처럼 사용 가능

```javascript
// script 함수 시그니처
function(nexacro, system, trace, environment, application) {
    // environment, application 키워드 직접 사용 가능
}
```

### 1-6. 제너레이터 변경 사항

| 파일 | 변경 내용 |
|------|----------|
| `index.html` | ESModule 형태, `data-shared` 삭제, `target-densitydpi=device-dpi` 삭제 |
| `popup.html` | `index.html`과 동일 적용 |
| `quickview.html` | `data-quickview` 옵션 추가, `launch.html` 통합 |
| `index_mfe.html` | 결과물 제외, 툴에서 별도 처리 |
| `environment.xml.js` | nexacro 공유를 위해 정보를 전달받는 형태로 변경, Monolithic 호환 처리 |
| `##.xiv.js` (initvalue) | 보안취약점 해소 — 파라미터에 `environment`, `application` 추가 |
| `theme.map.js` | initvalue와 동일 패턴 변경 |

### 1-7. NexacroPortal 컴포넌트 (NexaView → 명칭 변경)

- nexacro에서 nexacroK를 embed할 수 있는 컨테이너 컴포넌트
- embed 대상: **Nexacro K**
- **application** 또는 **form** 단위로 로드 가능

| 속성 / 이벤트 | 설명 |
|--------------|------|
| `data-appkey` | 로드할 nexacroK 프로젝트의 appkey |
| `data-fdl` | 로드할 Form 경로 (미지정 시 Application 전체 로드) |
| `onmount` | 마운트 완료 이벤트 |
| `onunmount` | 언마운트 이벤트 |
| `onerror` | 오류 이벤트 |

---

## 2. 테스트 계획

### MFE 구현 메커니즘 (공통 이해)

Module Federation을 사용하지 않고 **ESM 스코프 격리 + `data-appkey` div 마운트** 방식 채택.  
nexacroK 자체 런타임이 격리를 보장하므로 별도 번들러 설정 없이 동일 페이지에 복수 인스턴스 실행 가능.

```html
<!-- 복수 nexacroK 인스턴스 동시 로드 예시 -->
<script type="module" src="/nexacro-k-portlet/nexacro.js"></script>
<script type="module" src="/nexacro-k-portlet/app.js"></script>
<script type="module" src="/GroupAutoSelector-portlet/nexacro.js"></script>
<script type="module" src="/GroupAutoSelector-portlet/app.js"></script>
```

---

### 테스트 A — nexacroK → nexacroK (NexacroPortal 경유)

**목적**: nexacroK 환경 안에서 다른 nexacroK 앱을 NexacroPortal 컴포넌트로 임베드

**환경 구성**
- 호스트: nexacroK 프로젝트 A
- 게스트: nexacroK 프로젝트 B (별도 appkey 설정)

**구현 방법**
1. 프로젝트 A의 Form에 `NexacroPortal` 컴포넌트 배치
2. `data-appkey` = 프로젝트 B의 appkey 설정
3. `data-fdl` = 로드할 Form 경로 설정 (Form Only 방식) 또는 미설정 (Application 전체)

**확인 포인트**

| # | 항목 | 확인 방법 |
|---|------|----------|
| 1 | 게스트 앱 정상 마운트 | `onmount` 이벤트 발생 확인 |
| 2 | 게스트 앱 정상 언마운트 | `onunmount` 이벤트 발생 확인 |
| 3 | Style 충돌 없음 | 브라우저 DevTools CSS 클래스 해싱 확인 |
| 4 | appkey 격리 | 프로젝트 A/B의 `environment` 객체 분리 확인 |
| 5 | Form Only vs Application 전체 | `data-fdl` 유무에 따른 로드 범위 차이 확인 |
| 6 | `onerror` 이벤트 | 잘못된 appkey 입력 시 오류 처리 확인 |

**참고 파일**: `deploys/nexacro-k-portlet/nexacrolib/component/ComComp/NexacroPortal.js`

---

### 테스트 B — React → nexacroK (MFE div 임베드)

**목적**: React 앱 안에 nexacroK를 div 컨테이너로 삽입

**환경 구성**
- 호스트: React 프로젝트 (Vite 기반)
- 게스트: nexacroK 배포본 (`nexacro.js` + `app.js`)

**구현 방법**
```jsx
// Portlet.jsx 패턴
function NexacroPortlet({ appkey, fdl }) {
    return (
        <div
            id={`portlet-${appkey}`}
            data-appkey={appkey}
            data-fdl={fdl}
        />
    );
}
```

```html
<!-- index.html에 nexacroK 스크립트 로드 -->
<script type="module" src="/nexacro-k-portlet/nexacro.js"></script>
<script type="module" src="/nexacro-k-portlet/app.js"></script>
```

**확인 포인트**

| # | 항목 | 확인 방법 |
|---|------|----------|
| 1 | nexacroK 자동 마운트 | `data-appkey` div 렌더링 후 nexacroK 앱 초기화 확인 |
| 2 | React unmount 시 nexacroK 정리 | `useEffect` cleanup에서 언마운트 처리 |
| 3 | DnD 이동 시 재마운트 | react-dnd로 portlet 이동 후 nexacroK 재초기화 확인 |
| 4 | popup.html 정적 서빙 | Vite 미들웨어에서 popup.html 요청 가로채기 처리 |
| 5 | 복수 인스턴스 동시 로드 | 2개 이상 nexacroK 인스턴스 동시 실행 및 격리 확인 |
| 6 | React ↔ nexacroK 메시지 | `postMessage` 양방향 통신 동작 확인 |

**참고 파일**
- `deploys/nexacro-k-portlet-react/src/Portlet.jsx`
- `deploys/nexacro-k-portlet-react/vite.config.js`

---

### 테스트 C — nexacroK → React 화면 실행

**목적**: nexacroK 프로젝트 안에서 React 화면을 실행

**환경 구성**
- 호스트: nexacroK 프로젝트
- 게스트: React 앱 배포본 (별도 URL로 서빙)

**구현 방법 (옵션)**

| 방식 | 구현 | 특징 |
|------|------|------|
| `WebBrowser` 컴포넌트 | `this.wb_main.set_url("http://localhost:5174")` | nexacroK 안에 React 화면 임베드 |
| `Div.url` | `this.div_content.set_url("http://...")` | Div 내부에 외부 URL 로드 |
| iframe (직접 삽입) | HTML 직접 작성 | 가장 단순, 통신 제약 있음 |

**확인 포인트**

| # | 항목 | 확인 방법 |
|---|------|----------|
| 1 | React 앱 정상 렌더링 | nexacroK 컨테이너 내부에서 React UI 표시 확인 |
| 2 | 양방향 메시지 통신 | `window.postMessage` / `addEventListener("message")` 패턴 |
| 3 | 화면 크기 동기화 | nexacroK Form 리사이즈 시 React 앱 영역 동기화 |
| 4 | 팝업 처리 | React 앱 내부 팝업이 nexacroK 컨테이너 밖으로 표시되는지 확인 |
| 5 | 이벤트 버블링 | nexacroK 이벤트와 React 이벤트 간 충돌 여부 |

---

### 추가 MFE 테스트 (examples 폴더 분석 결과)

#### 테스트 D — nexacroK 다크/라이트 모드 동적 전환

**목적**: 런타임에 CSS 그룹을 전환하여 다크/라이트 모드 및 viewport-aware 레이아웃 적용

```javascript
// 다크모드 전환
app.xcssgroup = "Dark";

// viewport-aware CSS 그룹 필터
app.xcssgroupfilter = "viewport";
```

**참고 파일**: `deploys/GroupAutoSelector/`, `deploys/GroupAutoSelector-portlet/`

---

#### 테스트 E — 브라우저 History API 연동

**목적**: nexacroK 메뉴 이동 시 브라우저 URL 히스토리 관리 (뒤로가기/앞으로가기 지원)

**확인 포인트**
- 메뉴 이동 → URL 변경 확인
- 브라우저 뒤로가기 → nexacroK 화면 복원 확인

**참고 파일**: `deploys/History/`

---

#### 테스트 F — 동일 페이지 복수 nexacroK 인스턴스

**목적**: appkey가 다른 2개 이상의 nexacroK 앱을 동일 페이지에서 동시 실행, 격리 확인

**확인 포인트**
- Style 충돌 없음 (CSS 클래스 해싱)
- JS 네임스페이스 분리 (ESM 스코프)
- 각 인스턴스의 `environment` / `application` 독립성

---

## 3. 수동 수정 필요 영역

nexacroStudio로 기본 프로젝트 생성 후 작업자가 직접 수정해야 하는 파일과 항목.

### `environment.xml`

```xml
<!-- 추가 필요: 프로젝트별 고유 5자 appkey -->
<appkey>AbC1d</appkey>
```

> Studio UI에서 설정 불가 — XML 직접 편집 필요

---

### `index.html`

| 항목 | 변경 내용 |
|------|----------|
| `data-shared` 속성 | 삭제 |
| `target-densitydpi=device-dpi` | 삭제 |
| `<script>` 태그 | `type="module"` 추가 |
| `nexacro._use_service_executeurl` | `= false` 라인 삽입 |

```html
<!-- 변경 전 -->
<script src="nexacro.js"></script>

<!-- 변경 후 -->
<script type="module" src="nexacro.js"></script>
<script>nexacro._use_service_executeurl = false;</script>
```

---

### `quickview.html` (launch.html 통합)

```html
<!-- data-quickview 옵션 추가 -->
<!-- launch.html 역할 통합 처리 로직 삽입 -->
<!-- nexacro._use_service_executeurl = false 삽입 -->
```

> `launch.html`은 삭제하고 `quickview.html`에 통합

---

### `module.json`

```json
{
    "esmodule": true,
    "import": "./파일경로.js"
}
```

> Studio가 생성하지 않으므로 수동 추가 필요

---

### `typedefinition` service 정의

```xml
<!-- executeurl 속성 수동 추가 -->
<Service id="..." executeurl="..." />
```

---

### `##.xiv.js` (initvalue 파일) / `theme.map.js`

```javascript
// 변경 전
(function(nexacro) {

// 변경 후 — environment, application 파라미터 추가 (보안취약점 해소)
(function(nexacro, system, trace, environment, application) {
```

> 제너레이션 결과물이지만 현재 툴이 미지원하므로 수동 수정 필요

---

### `vite.config.js` (React 호스트 앱)

```javascript
// popup.html 정적 서빙 우회 미들웨어 수동 추가
{
    name: 'nexacro-popup-handler',
    configureServer(server) {
        server.middlewares.use((req, res, next) => {
            if (req.url?.includes('popup.html')) {
                // 정적 파일로 직접 응답
            } else {
                next();
            }
        });
    }
}
```

---

## 4. nexacro-k-examples 폴더 분석

### 폴더 구조

```
nexacro-k-examples/
├── projects/                        ← nexacroStudio 소스 (.xprj, .xfdl)
├── outputs/                         ← Generate 중간 산출물
├── deploys/                         ← 최종 배포 JS 파일
│   ├── nexacro-k-portlet/           ← nexacroK MDI 포털 앱 (배포본)
│   ├── nexacro-k-portlet-react/     ← React + nexacroK MFE 핵심 예제
│   ├── GroupAutoSelector/           ← 다크/라이트 모드 CSS 그룹 전환 예제
│   ├── GroupAutoSelector-portlet/   ← portlet 방식의 CSS 그룹 전환 예제
│   ├── Grid_nexacroK/               ← Grid 고급 기능 예제 18종
│   ├── FramesetTabBar/              ← ChildFrame + 탭바 레이아웃 예제
│   ├── History/                     ← 브라우저 History API 연동 예제
│   ├── IconTextTest/                ← IconText 컴포넌트 테스트
│   ├── ResizeTest/                  ← Flex/Splitter/ScrollBar 리사이즈 테스트
│   ├── splitter_test_00/            ← Splitter 창 분할 기능 테스트
│   └── Test_MegaMenu/              ← MegaMenu 컴포넌트 전체 기능 테스트
├── generator/
│   ├── generator.js                 ← Node.js 병렬 빌드 스크립트 (최대 4개 동시)
│   └── NexacroN_Deploy_JAVA.jar     ← 실제 빌드 실행 JAR
├── mfe-build.js                     ← 멀티 포트 개발 서버 실행기
├── vite.config.js                   ← 루트 Vite 설정 (정적 서빙 + 인덱스 라우터)
└── package.json                     ← React + react-dnd + zustand
```

---

### 핵심 예제 설명

| 폴더 | 역할 |
|------|------|
| `nexacro-k-portlet` | nexacroK MDI 포털. 컬러 테마별 Frame/Form 8종 포함 |
| `nexacro-k-portlet-react` | **테스트 B 참고** — React DnD 포털 위에 nexacroK div 컨테이너 삽입 |
| `GroupAutoSelector` | `app.xcssgroup` / `app.xcssgroupfilter`로 다크/라이트 모드, CSS 그룹 자동 선택 |
| `Grid_nexacroK` | 필터/정렬/페이지네이션/체크박스/HTML셀 등 Grid 고급 기능 18종 |
| `History` | 메뉴 이동 시 URL 히스토리 관리 — 뒤로가기/앞으로가기 지원 |

---

### 빌드 흐름

```
projects/<프로젝트명>/*.xprj
    ↓ generator.js (Node.js, 병렬 최대 4개)
    ↓ NexacroN_Deploy_JAVA.jar (-MERGE -REGENERATE)
    ↓
outputs/<프로젝트명>/    ← Generate 중간 결과
    ↓
deploys/<프로젝트명>/    ← 최종 배포 JS
    ↓
mfe-build.js → Vite 개발 서버 (포트 5173~)
```

---

### 개발 서버 포트 구조

| 포트 | 역할 |
|------|------|
| 5173 | 루트 Vite 서버 — 정적 nexacroK 배포본 서빙 + 인덱스 라우터 |
| 5174~ | `mfe-build.js`가 `package.json`이 있는 폴더(React 앱 등)를 자동 감지하여 순차 부여 |

---

### 핵심 파일 경로

| 파일 | 설명 |
|------|------|
| `deploys/nexacro-k-portlet-react/src/Portlet.jsx` | React ↔ nexacroK MFE 통합 구현 핵심 |
| `deploys/nexacro-k-portlet-react/vite.config.js` | popup.html 우회 미들웨어, 멀티포트 설정 |
| `deploys/nexacro-k-portlet/nexacrolib/component/ComComp/NexacroPortal.js` | nexacroK 내장 MFE 컨테이너 컴포넌트 |
| `generator/generator.js` | 자동화 병렬 빌드 스크립트 |

---

### 권장 진행 순서

1. **테스트 A** — `nexacro-k-portlet` 예제로 NexacroPortal 컴포넌트 동작 확인
2. **테스트 B** — `nexacro-k-portlet-react` 예제로 React + nexacroK MFE 통합 확인  
   ```bash
   cd deploys/nexacro-k-portlet-react
   npm install
   node ../../mfe-build.js
   ```
3. **테스트 C** — nexacroK의 `WebBrowser` 또는 `Div.url`에 React 앱 URL 설정
4. **테스트 D~F** — 추가 MFE 시나리오 순차 검증
5. `generator.js`를 REQM 프로젝트의 빌드 파이프라인과 연계 검토

---

### Module Federation 미사용 이유

Webpack/Vite의 Module Federation 대신 **ESM 스코프 격리 + `data-appkey` div 마운트** 방식 채택.

| 격리 방식 | 설명 |
|----------|------|
| Style 격리 | CSS 클래스명 해싱으로 프로젝트 간 스타일 충돌 방지 |
| JS 격리 | ESM 모듈 스코프로 프로젝트 간 네임스페이스 분리 |
| 런타임 격리 | nexacroK 자체 런타임이 격리를 보장하므로 별도 번들러 설정 불필요 |

---

## 5. sample.xml 샘플 구조 분석 및 실행 방법

> 경로: `D:\git_prj\REQM\DOC\NexacroK MFE\sample.xml`  
> MFE 구현자가 첨부한 nexacroK MFE 배포 샘플. nexacrodeploy로 Generate된 최종 배포본 구조.

---

### 5-1. 폴더 전체 구조

```
sample.xml/                              ← MFE 배포 루트 (여기서 서버 실행)
│
├── index.html                           ← 일반 단독 실행 진입점
├── index_mfe.html                       ← MFE embed 방식 진입점 ★ 핵심
├── index_mfe_test.html                  ← 다중 컨테이너 테스트용
├── popup.html                           ← 팝업창 전용 프레임
├── quickview.html                       ← Studio QuickView 전용
├── nexacro.js                           ← 컴포넌트 라이브러리 일괄 import (barrel)
├── app.js                               ← MFE 앱 생성 진입점 (createApp 호출)
├── environment.xml.js                   ← 앱 환경설정 (appkey, 서비스, 테마)
├── application.xadl.js                  ← 전역 Dataset·변수·MainFrame 구성
├── application.xadl.quickview.js        ← QuickView 전용 application 초기화
├── Application_Desktop.xadl.js         ← Desktop 스크린 타입 전용
├── start.json                           ← NRE(네이티브 런타임) 실행용 manifest
│
├── frame/                               ← 프레임 구조 화면
│   ├── frmBase.xfdl.js                 ← 바탕 프레임 (헤더/메뉴/콘텐츠/로그인)
│   ├── frmLogin.xfdl.js                ← 로그인 화면
│   ├── frmMainPage.xfdl.js             ← 메인페이지
│   ├── frmMenu.xfdl.js                 ← 슬라이드 메뉴
│   ├── frmPopup.xfdl.js                ← 팝업 공통 프레임
│   ├── frmWork.xfdl.js                 ← 업무 화면 컨테이너
│   └── sample.xfdl.js                  ← 개발 테스트용 컴포넌트 배치 샘플
│
├── sample/                              ← 개발표준 샘플 화면 (51개)
│   ├── sampleScript.xfdl.js            ← 스크립트 표준 뼈대
│   ├── sampleTransaction.xfdl.js       ← 서버 통신 CRUD 전체 흐름
│   ├── sampleMessage.xfdl.js           ← 공통 메시지 팝업 (gfnAlert)
│   ├── samplePopup.xfdl.js             ← 모달/모달리스 팝업 비교
│   ├── samplecomponent.xfdl.js         ← 컴포넌트 종합 배치 확인
│   ├── nexacroportal.xfdl.js           ← NexacroPortal 컴포넌트 샘플
│   └── ... (총 51개)
│
├── Application/                         ← Application 레벨 샘플 화면 (29개)
├── design/Template/                     ← 업무 화면 레이아웃 템플릿 8종
│   ├── Temp15.xfdl.js                  ← FoldingList 패턴
│   ├── Temp16.xfdl.js                  ← SingleDetail 패턴
│   ├── Temp17.xfdl.js                  ← ListDetail 패턴
│   ├── Temp18.xfdl.js                  ← Tab 패턴
│   ├── Temp19P.xfdl.js                 ← Popup 패턴
│   ├── Temp20.xfdl.js                  ← Shuttle 패턴
│   ├── Temp21.xfdl.js                  ← SearchDetail 패턴
│   └── Temp22.xfdl.js                  ← SearchDetailList 패턴
│
├── common/                              ← 공통 화면 (팝업, 검색, 공통코드)
├── _resource_/
│   ├── _theme_/blue/                   ← blue 테마 CSS + 이미지
│   ├── _theme_/Mobile/                 ← Mobile 테마 CSS + 이미지
│   ├── _initvalue_/                    ← 초기값 파일 (aa.xiv.js, bb.xiv.js)
│   └── _stringrc_/ko|en/              ← 다국어 문자열 리소스 JSON
│
├── nexacrolib/
│   ├── framework/Framework.js           ← nexacro, createApp, system, trace export
│   └── component/
│       ├── ComComp/                    ← 표준 컴포넌트 (Button, Edit, Grid 등)
│       ├── MobileLib/                  ← 공통 라이브러리
│       │   ├── Message.js              ← gfnAlert 공통 메시지 함수
│       │   ├── Util.js                 ← gfnIsNull 등 유틸 함수
│       │   ├── Transaction.js          ← 서버통신 공통 처리
│       │   ├── Popup.js                ← 팝업 공통 처리
│       │   ├── Frame.js                ← 프레임/화면 전환 공통 함수
│       │   └── Resize.js               ← 화면 리사이즈 공통
│       └── ...
│
└── _output_mfe_sample/                  ← nexacrodeploy Generate 최종 산출물
    ├── index.html / index_mfe.html / index_mfe_test.html
    ├── nexacro.js / nexacro1.js         ← 앱 A/B 각각의 barrel
    ├── app.js / app1.js                 ← 앱 A/B 각각의 진입점
    ├── environment.xml.js               ← appkey = "Sample_K"
    ├── environment1.xml.js              ← appkey = "KKKKKKK" (두 번째 앱)
    └── _resource_/
```

---

### 5-2. appkey 값

| 파일 | appkey | 용도 |
|------|--------|------|
| `environment.xml.js` | **`Sample_K`** | 메인 앱 |
| `_output_mfe_sample/environment1.xml.js` | `KKKKKKK` | 다중 embed 테스트용 두 번째 앱 |
| `index_mfe_test.html` 내 더미 div | `WWWW` | 격리 테스트용 빈 컨테이너 |

---

### 5-3. 앱 초기화 흐름

```
app.js
  └─ createApp(import.meta.url, nexacro, system, trace, "./environment.xml.js")
       └─ environment.xml.js 로드
            ├─ env.set_appkey("Sample_K")
            ├─ 서비스 등록 (theme, sample, frame, svcUrl 등)
            ├─ 컴포넌트 클래스 등록
            └─ HTML에서 data-appkey="Sample_K"인 <div> 탐색
                 └─ application.xadl.js 로드
                      ├─ 전역 Dataset 생성 (gdsMessage, gdsMenu, gds)
                      ├─ 전역 변수 생성 (gvSytmFlagCd="MO" 등)
                      └─ MainFrame → ChildFrame(frame::frmBase.xfdl) 로드
                           └─ divTop(헤더) + divMain(콘텐츠) + divMenu(메뉴) + divLogin
```

---

### 5-4. MFE embed 코드 패턴

#### 단일 앱 embed

```html
<!-- 1. 컴포넌트 라이브러리 로드 -->
<script src="./nexacro.js" type="module"></script>

<!-- 2. 앱 생성 (environment.xml.js → appkey, 서비스 URL 초기화) -->
<script src="./app.js" type="module"></script>

<!-- 3. embed할 div — data-appkey로 앱과 연결 -->
<div id="nexacroContainer"
     data-fdl=""
     data-appkey="Sample_K"
     style="position:absolute; inset:0;">
</div>

<!-- data-fdl 값이 비어 있으면 application.xadl.js의 startup Form 표시 -->
<!-- data-fdl="sample::sampleTransaction.xfdl" 처럼 폼 직접 지정 가능 -->
```

#### 동일 페이지 다중 앱 embed

```html
<!-- 앱 A (로컬) -->
<script src="./nexacro.js" type="module"></script>
<script src="./app.js" type="module"></script>

<!-- 앱 B (별도 서버) -->
<script src="http://localhost:8000/_output_mfe_sample/nexacro1.js" type="module"></script>
<script src="http://localhost:8000/_output_mfe_sample/app1.js" type="module"></script>

<!-- 앱 A 컨테이너 (좌측 50%) -->
<div id="container00" data-appkey="Sample_K"
     style="position:absolute; top:0; left:0; width:50%; height:100%;"></div>

<!-- 앱 B 컨테이너 (우측 50%) -->
<div id="container01" data-appkey="KKKKKKK"
     style="position:absolute; top:0; left:50%; width:50%; height:100%;"></div>
```

---

### 5-5. 샘플 화면별 테스트 내용

| 화면 파일 | 테스트 내용 |
|-----------|------------|
| `sampleScript.xfdl.js` | 스크립트 표준 뼈대 — FORM 변수 선언, onload, cfnSearch/cfnSave/cfnAdd/cfnDel 함수 영역 |
| `sampleTransaction.xfdl.js` | `this.transaction()` CRUD 전체 흐름 — dsSearch(검색조건) → 서버 → dsList(결과), ROWTYPE별 INSERT/UPDATE/DELETE |
| `sampleMessage.xfdl.js` | `gfnAlert()` 공통 메시지 — 메시지 타입(CFN/INF/WAN/ERR) 선택 → Grid 조회 → 팝업 표시 |
| `samplePopup.xfdl.js` | 모달 팝업 vs 모달리스 팝업 두 가지 방식 비교 |
| `samplecomponent.xfdl.js` | DataObject, Dataset, VirtualFile, Combo, Edit 등 컴포넌트 종합 배치 확인 |
| `nexacroportal.xfdl.js` | **NexacroPortal 컴포넌트** — nexacroK 안에서 다른 nexacroK 앱 embed 테스트 |
| `design/Template/Temp15~22` | 업무 화면 레이아웃 패턴 8종 (FoldingList, SingleDetail, ListDetail, Tab, Popup, Shuttle, SearchDetail, SearchDetailList) |

---

### 5-6. 실행 방법

#### 서버 환경 요건

| 구분 | 내용 |
|------|------|
| `file://` 프로토콜 | **불가** — `type="module"` 스크립트는 반드시 HTTP/HTTPS 필요 |
| **정적 서버만으로 가능** | 화면 전환, 테마, 팝업, 메시지, 컴포넌트 렌더링 전반 |
| **백엔드 서버 필요** | `sampleTransaction` 조회/저장 (`http://127.0.0.1:4098/`), 파일 업/다운로드 |

#### 빠른 실행 (정적 서버, UI 확인 목적)

```bash
# 방법 1: npx serve (Node.js 설치 필요)
npx serve "D:\git_prj\REQM\DOC\NexacroK MFE\sample.xml" -p 8080

# 방법 2: Python 내장 서버
cd "D:\git_prj\REQM\DOC\NexacroK MFE\sample.xml"
python -m http.server 8080

# 방법 3: Tomcat webapps에 sample.xml 폴더 배포 후 접속
```

#### 브라우저 접속 URL

| 목적 | URL |
|------|-----|
| MFE embed 방식 (핵심) | `http://localhost:8080/index_mfe.html` |
| 일반 단독 실행 | `http://localhost:8080/index.html` |
| 다중 컨테이너 테스트 | `http://localhost:8080/index_mfe_test.html` |
| 특정 Form 직접 진입 | `http://localhost:8080/index_mfe.html?formname=sample::sampleTransaction.xfdl` |
| Generate 산출물 기준 | `http://localhost:8080/_output_mfe_sample/index_mfe.html` |

#### 다중 앱 테스트 (앱 A + 앱 B 동시 실행)

```bash
# 터미널 1: 루트 폴더 서버 (앱 A)
npx serve "D:\git_prj\REQM\DOC\NexacroK MFE\sample.xml" -p 8080

# 터미널 2: _output_mfe_sample 서버 (앱 B)
npx serve "D:\git_prj\REQM\DOC\NexacroK MFE\sample.xml\_output_mfe_sample" -p 8000

# 브라우저에서 index_mfe_test.html 열기
http://localhost:8080/index_mfe_test.html
```

---

### 5-7. 테스트 A와의 연계 — NexacroPortal 샘플

`sample/nexacroportal.xfdl.js`가 **테스트 A (nexacroK → nexacroK embed)** 의 실제 구현 예제입니다.

```
sample.xml (appkey: Sample_K)
  └─ nexacroportal.xfdl
       └─ NexacroPortal 컴포넌트
            └─ data-appkey="KKKKKKK" (앱 B, _output_mfe_sample/app1.js)
```

**실행 전 확인 사항**
1. 앱 B 서버(`localhost:8000`)가 실행 중이어야 함
2. `environment1.xml.js`의 서비스 URL이 `localhost:8000` 기준으로 설정되어 있어야 함
3. CORS 이슈 방지를 위해 두 서버 모두 `localhost` 도메인 사용 권장

---

## 6. MFE 확대 지원 관련 — 구현자 피드백 정리

> 출처: tobesoft 개발자 이메일 (kang500@tobesoft.com, 2026-07-13)  
> 기존 설명 중 잘못된 부분을 개발자가 직접 정정한 내용.

---

### 6-1. Imagerc route 설정 (정정)

**기존 설명 (오류)**: 운영에만 옵션이 적용되고 NexacroPortal에 따라 달라진다.  
**정정 내용**:
- XCSS 파일을 **CDN 경로로 직접 입력**해서 사용하는 방식이 올바름
- NexacroPortal 방식과 분리해서 이해해야 함

---

### 6-2. CSS Style Collisions 처리 방식 (정정)

**기존 설명 (오류)**: CSS Style Collisions 방지를 위해 `environment.themekey`, `Environment.csscollisionpreventkey` 두 값이 모두 필요하다.  
**정정 내용**:
- **`environment.themekey`와 `csscollisionpreventkey`는 별도로 설정할 필요 없음**
- **`environment.appkey` 하나만 설정하면** 각 프로젝트 내의 CSS Style Collisions 처리가 자동으로 됨
- `appkey` 값으로 `csscollisionpreventkey`가 **자동 생성**되는 구조

```javascript
// environment.xml.js 에서 appkey만 설정하면 충분
env.set_appkey("Sample_K");
// → csscollisionpreventkey 자동 처리됨 (별도 설정 불필요)
```

> **테스트 영향**: 테스트 A, B, F (다중 인스턴스 격리 테스트) 시  
> `themekey` / `csscollisionpreventkey` 설정 여부를 확인하는 항목은 제거.  
> `appkey`만 프로젝트별로 고유하게 설정되어 있는지만 확인하면 됨.

---

### 6-3. loadTypeDefinition — constructor 필드 추가 (신규)

`typedefinition`에서 사전 등록된 클래스에 **`constructor` 필드를 추가**해야 함.

```javascript
env.loadTypeDefinition = function () {
    var registerclass = [
        {
            "id": "Button",
            "classname": "nexacro.Button",
            "constructor": nexacro.Button,   // ← 추가 필요
            "type": "JavaScript",
            "width": "120",
            "height": "50"
        },
        {
            "id": "Combo",
            "classname": "nexacro.Combo",
            "constructor": nexacro.Combo,    // ← 추가 필요
            "type": "JavaScript",
            "width": "150",
            "height": "20"
        },
        // ... 등록할 컴포넌트 전체
    ];
    this._addClasses(registerclass);
};
```

**적용 위치**: `environment.xml.js`의 `loadTypeDefinition` 함수  
**대상**: MFE 환경에서 사용할 모든 컴포넌트 (Button, Edit, Grid, Combo, CheckBox 등)  
**수동 수정 영역**: nexacroStudio가 자동 생성하지 않으므로 작업자가 직접 추가

---

### 6-4. 수동 수정 필요 영역 업데이트 (기존 섹션 3 보완)

위 정정 내용을 반영한 추가 수동 수정 항목:

| 파일 | 항목 | 내용 |
|------|------|------|
| `environment.xml.js` | `appkey` | 프로젝트별 고유 5자 키 — CSS 충돌 방지 자동 처리 기준값 |
| `environment.xml.js` | `loadTypeDefinition` | 각 컴포넌트의 `constructor` 필드 추가 |
| `environment.xml.js` | `themekey`, `csscollisionpreventkey` | **설정 불필요** (appkey로 자동 처리) |
| `_resource_/_xcss_/` | CDN 경로 | Imagerc route: XCSS 파일 CDN 경로를 직접 입력 |
