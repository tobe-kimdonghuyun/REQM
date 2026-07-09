# 146.EventObject

146.1개요

146.2속성

146.3메서드

```
컴포넌트에 선언된 이벤트의 원형 오브젝트입니다.
```

## 146.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- 일반적으로 Composite Component 와 같은 사용자 컴포넌트에 이벤트를 선언할 때 내부적으로 사용되는 오브젝트입니다.

- 컴포넌트의 모든 이벤트는 EventObject 를 사용하여 선언됩니다.
   컴포넌트에 선언된 이벤트에 addEventHandler() 와 같은 메소드로 핸들러 함수를 동록하여 이벤트를 정의합니다.

- 이벤트 및 이벤트 핸들러의 종류는 각 컴포넌트의 Event 항목을 참조하시기 바랍니다.
```
