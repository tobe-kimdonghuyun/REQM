# 338.Web API NRE Support

338.1XMLHttpRequest NRE Support

338.2WebSocket NRE Support

## 338.1.1개요

```
NRE 실행 시 XMLHttpRequest 오브젝트를 사용할 수 있습니다.
앱을 실행하는 운영체제에 따른 기능(속성, 메소드) 지원 여부를 설명합니다.

* WRE에서 브라우저, 버전에 따른 XMLHttpRequest 오브젝트 기능 지원 여부는 아래 링크를 참고하세요.
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#browser_compatibility

* 각 기능 상세 정보는 아래 스펙 문서를 참고하세요.
https://xhr.spec.whatwg.org/
```

## 338.1.2iOS/iPadOS NRE 사용 제약

```
앱 Packing 시 Update Type을 "Update" 또는 "Local"로 지정한 경우에는 XMLHttpRequest 오브젝트를 사용할 수 없습니다.
WKWebView 정책에 따라 로컬에 저장한 파일은 XMLHttpRequest 통신을 처리할 수 없습니다(실행 시 에러가 발생합니다).
아래 기능 지원 여부는 Update Type을 "Server"로 지정한 경우에만 해당합니다.
```

## 338.1.3기능 지원 여부

> 아래 표에서 운영체제 NRE는 약어로 표시합니다.
>
> **W**(Windows NRE), **A**(Android NRE), **I**(iOS/iPad NRE), **M**(macOS NRE)

| Property | Value: State | W | A | I | M | Description |
| --- | --- | --- | --- | --- | --- | --- |
| readyState | 0: UNSENT | O | O | O | O |  |
| 1: OPENED | O | O | O | O |  |
| 2: HEADERS\_RECEIVED | X | X | O | X |  |
| 3: LOADING | O | O | O | X |  |
| 4: DONE | O | O | O | O |  |
| status |  | O | O | O | O |  |
| onreadystatechange |  | O | O | O | O |  |
| responseURL |  | O | O | O | O | default 값은 빈 값으로 처리합니다. |
| response |  | O | O | O | O | 반환값은 Text 형식만 지원합니다. |
| responseType |  | O | O | O | O |  |
| responseText |  | O | O | O | O | 반환값은 Text 형식만 지원합니다. |

| Method | Parameter | W | A | I | M | Description |
| --- | --- | --- | --- | --- | --- | --- |
| abort |  | O | O | O | O |  |
| getAllResponseHeaders |  | O | O | O | O |  |
| getResponseHeader |  | O | O | O | O |  |
| open | method | O | O | O | O | GET, POST, PUT, DELETE, HEAD, PATCH를 지원합니다. |
| url | O | O | O | O | prefix는 지원하지 않습니다. |
| [async = true] | O | O | O | O |  |
| [user = null] | X | X | O | X |  |
| [psw = null] | X | X | O | X |  |
| send |  | O | O | O | O | open의 method 파라미터값이 "GET", "HEAD"이면 Body는 null로 설정됩니다. |
| setRequestHeader |  | O | O | O | O |  |
