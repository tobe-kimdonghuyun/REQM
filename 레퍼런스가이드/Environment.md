# 1.Environment

1.1개요

1.2속성

1.3메서드

1.4이벤트

```
Environment 오브젝트에 프로젝트에서 사용될 환경정보를 저장하고 관리합니다.
```

## 1.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- 스크립트에서 nexacro.getEnvironment() 메소드를 사용하여 오브젝트에 접근할 수 있습니다.
- WRE 실행 시 스크립트로 Environment 오브젝트의 속성값(usewaitcursor, locale 등)을 변경한 경우 open 메소드 등을 실행해 띄운 팝업창에는 변경한 Environment 오브젝트의 속성값이 반영되지 않습니다.

- 프로젝트에서 사용될 Cookies 와 Variables 를 관리합니다.

- 멀티스크린 환경에서 공통으로 사용될 변수를 관리합니다.
```
