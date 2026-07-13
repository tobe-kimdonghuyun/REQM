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

### 1-3. 앱 초기화 흐름 확인

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 1-3-1 | `app.js` 로드 후 `data-appkey="Sample_K"` div에 nexacroK가 마운트됨 | [ ] | DevTools Elements 탭 확인 |
| 1-3-2 | `frmLogin.xfdl.js` 또는 startup Form이 최초 표시됨 | [ ] | |
| 1-3-3 | 네트워크 탭에서 `environment.xml.js`, `application.xadl.js` 로드 200 OK | [ ] | |
| 1-3-4 | 네트워크 탭에서 테마 CSS 파일 로드 200 OK | [ ] | `_resource_/_theme_/` |
| 1-3-5 | 브라우저 콘솔에 JavaScript 에러 없음 | [ ] | |

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

### 2-2. Form Only vs Application 전체 로드

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 2-2-1 | `data-fdl=""` (빈 값) → 앱 B의 MainFrame 전체(startup Form)가 로드됨 | [ ] | |
| 2-2-2 | `data-fdl="sample::sampleScript.xfdl"` → 해당 Form만 로드됨 | [ ] | Application 없이 Form만 |
| 2-2-3 | `data-fdl`에 존재하지 않는 경로 입력 시 `onerror` 이벤트 발생 | [ ] | |
| 2-2-4 | Form Only 로드 시 앱 B의 전역 Dataset이 없어도 화면이 정상 표시됨 | [ ] | |

### 2-3. 격리 검증

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 2-3-1 | DevTools Elements에서 앱 A / 앱 B의 CSS 클래스명이 서로 다름 (해싱됨) | [ ] | |
| 2-3-2 | 앱 A에서 이벤트 발생 시 앱 B에 영향 없음 | [ ] | 이벤트 버블링 차단 확인 |
| 2-3-3 | 앱 A와 앱 B의 `environment` 객체가 독립적임 (콘솔에서 확인) | [ ] | |
| 2-3-4 | 앱 B 내부에서 `nexacro` 전역 객체가 앱 A와 공유되지 않음 | [ ] | ESM 스코프 격리 확인 |
| 2-3-5 | 앱 B의 전역 Dataset 변경이 앱 A에 영향 없음 | [ ] | |

### 2-4. 오류 처리

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 2-4-1 | 앱 B 서버(포트 8000) 중단 후 NexacroPortal embed 시 `onerror` 이벤트 발생 | [ ] | |
| 2-4-2 | 잘못된 `data-appkey` 값 입력 시 오류 처리됨 (앱 A는 정상 동작 유지) | [ ] | |
| 2-4-3 | 앱 B 내부 스크립트 오류가 앱 A를 중단시키지 않음 | [ ] | |

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

### 3-2. React 생명주기와 nexacroK 연동

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 3-2-1 | React 컴포넌트 unmount 시 nexacroK 앱이 함께 정리됨 (메모리 해제) | [ ] | `useEffect` cleanup |
| 3-2-2 | React 컴포넌트 remount 시 nexacroK 앱이 재초기화됨 | [ ] | |
| 3-2-3 | React state 변경으로 nexacroK 컨테이너 크기가 변경될 때 nexacroK 화면 정상 리사이즈 | [ ] | |
| 3-2-4 | React strict mode에서 이중 마운트/언마운트 시 nexacroK 오류 없음 | [ ] | |

### 3-3. DnD (드래그앤드롭) 이동

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 3-3-1 | react-dnd로 nexacroK portlet을 다른 위치로 드래그앤드롭 가능 | [ ] | |
| 3-3-2 | DnD 이동 후 nexacroK 화면이 정상 표시됨 (재마운트 시 깨짐 없음) | [ ] | known issue — README 참고 |
| 3-3-3 | DnD 이동 후 nexacroK 컴포넌트 이벤트가 정상 동작함 | [ ] | |
| 3-3-4 | DnD 중 nexacroK 화면이 드래그 영역을 가로막지 않음 | [ ] | pointer-events 설정 확인 |

### 3-4. 복수 nexacroK 인스턴스

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 3-4-1 | 동일 페이지에 `data-appkey`가 다른 nexacroK div 2개 이상 동시 렌더링됨 | [ ] | |
| 3-4-2 | 각 인스턴스가 독립적으로 초기화됨 (서로 간섭 없음) | [ ] | |
| 3-4-3 | 한 인스턴스의 오류가 다른 인스턴스에 영향 없음 | [ ] | |

### 3-5. popup.html 처리

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 3-5-1 | nexacroK 내 팝업 오픈 시 `popup.html`이 별도 창으로 열림 | [ ] | |
| 3-5-2 | Vite 미들웨어에서 `popup.html` 요청이 React 번들 처리 없이 정적 파일로 응답됨 | [ ] | 네트워크 탭 확인 |
| 3-5-3 | 팝업 내부 nexacroK 화면이 정상 표시됨 | [ ] | |
| 3-5-4 | 팝업 닫기 후 호스트 화면에 반환값이 정상 전달됨 | [ ] | |

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

### 4-2. postMessage 양방향 통신

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 4-2-1 | nexacroK → React: `window.postMessage()` 전송 후 React `addEventListener("message")`에서 수신 | [ ] | |
| 4-2-2 | React → nexacroK: React에서 `postMessage` 전송 후 nexacroK `onusernotify`에서 수신 | [ ] | |
| 4-2-3 | 메시지 `origin` 검증이 적용되어 있음 (`event.origin` 확인) | [ ] | 보안 |
| 4-2-4 | 복잡한 객체 데이터가 JSON 직렬화를 통해 정상 전달됨 | [ ] | |

### 4-3. 팝업 처리

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 4-3-1 | React 앱 내부 팝업이 nexacroK 컨테이너 영역 밖으로 표시됨 | [ ] | z-index 확인 |
| 4-3-2 | nexacroK 팝업과 React 팝업이 동시에 열릴 때 z-index 충돌 없음 | [ ] | |

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

### 5-2. JS 격리

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 5-2-1 | `window.nexacro` 전역 객체가 두 앱에서 공유되지 않음 | [ ] | ESM 스코프 확인 |
| 5-2-2 | 앱 A의 전역 Dataset 변경이 앱 B에 전파되지 않음 | [ ] | |
| 5-2-3 | 앱 A의 전역 변수 변경이 앱 B에 전파되지 않음 | [ ] | |
| 5-2-4 | 앱 A와 앱 B가 동일한 이벤트 핸들러명을 사용해도 충돌 없음 | [ ] | |

### 5-3. 동시 실행 안정성

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 5-3-1 | 앱 A, 앱 B가 동시에 로드될 때 초기화 순서에 의한 오류 없음 | [ ] | race condition 확인 |
| 5-3-2 | 앱 A를 언마운트해도 앱 B는 정상 동작 유지 | [ ] | |
| 5-3-3 | 앱 B를 언마운트해도 앱 A는 정상 동작 유지 | [ ] | |
| 5-3-4 | 3개 이상 앱 동시 실행 시 성능 저하 없음 (FPS 30 이상 유지) | [ ] | |

---

## 6. 테스트 E — CSS 테마 / 다크모드 전환

> 참고 파일: `deploys/GroupAutoSelector/`, `GroupAutoSelector-portlet/`

### 6-1. xcssgroup 전환

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 6-1-1 | `app.xcssgroup = "Dark"` 설정 후 다크모드 CSS가 적용됨 | [ ] | |
| 6-1-2 | `app.xcssgroup = "Light"` 설정 후 라이트모드 CSS로 복귀됨 | [ ] | |
| 6-1-3 | xcssgroup 전환 시 화면 깜빡임(FOUC) 없음 | [ ] | |
| 6-1-4 | 전환 후 모든 컴포넌트에 테마가 일관되게 적용됨 | [ ] | |

### 6-2. xcssgroupfilter (viewport-aware)

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 6-2-1 | `app.xcssgroupfilter = "viewport"` 설정 후 viewport 크기에 따라 CSS 그룹 자동 전환됨 | [ ] | |
| 6-2-2 | 브라우저 창 크기 변경 시 CSS 그룹이 자동으로 재선택됨 | [ ] | |
| 6-2-3 | 다중 인스턴스 환경에서 각 앱의 xcssgroup이 독립적으로 관리됨 | [ ] | |

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

### 9-2. 앱 간 postMessage

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 9-2-1 | 호스트 앱 → 게스트 앱: `window.postMessage` 전송 및 수신 | [ ] | |
| 9-2-2 | 게스트 앱 → 호스트 앱: 이벤트 전파 또는 postMessage로 반환 | [ ] | |
| 9-2-3 | 메시지 페이로드에 복잡한 객체(Dataset row 데이터 등) 포함 가능 | [ ] | JSON 직렬화 |
| 9-2-4 | 잘못된 origin에서의 메시지가 무시됨 | [ ] | 보안 검증 |

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

---

## 11. 공통 — 브라우저 호환성

| # | 브라우저 | 테스트 A | 테스트 B | 테스트 C | 팝업 | 결과 |
|---|----------|----------|----------|----------|------|------|
| 11-1 | Chrome 최신 | [ ] | [ ] | [ ] | [ ] | |
| 11-2 | Edge 최신 | [ ] | [ ] | [ ] | [ ] | |
| 11-3 | Chrome 모바일 (Android) | [ ] | N/A | N/A | [ ] | |
| 11-4 | Safari (iOS) | [ ] | N/A | N/A | [ ] | |

> `type="module"` ESM은 IE 미지원. Chrome / Edge 최신 버전 필수.

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

### 12-2. 배포본 동작 검증

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 12-2-1 | `_output_mfe_sample/index_mfe.html`이 포트 8000에서 정상 실행 | [ ] | |
| 12-2-2 | `app1.js`(appkey: `KKKKKKK`)가 다중 embed 테스트에서 정상 로드됨 | [ ] | |
| 12-2-3 | `index_mfe_test.html`에서 두 앱(A, B)이 동시에 표시됨 | [ ] | |
| 12-2-4 | Tomcat에 `_output_mfe_sample/` 배포 후 컨텍스트 경로 기준 정상 접근 | [ ] | |
| 12-2-5 | 배포 후 서비스 URL이 환경에 맞게 변경되었음 (`127.0.0.1:4098` → 실 서버) | [ ] | |

### 12-3. 보안 / 인프라

| # | 확인 항목 | 결과 | 비고 |
|---|-----------|------|------|
| 12-3-1 | HTTPS 환경에서 `type="module"` 스크립트가 Mixed Content 오류 없음 | [ ] | |
| 12-3-2 | CORS 헤더가 올바르게 설정됨 (`Access-Control-Allow-Origin`) | [ ] | 다중 서버 환경 |
| 12-3-3 | CSP(Content-Security-Policy) 정책과 ESM 모듈 로드가 충돌하지 않음 | [ ] | |
| 12-3-4 | `postMessage` 통신에 `origin` 화이트리스트 검증 적용됨 | [ ] | |

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
