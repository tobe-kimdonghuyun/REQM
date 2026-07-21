# 8.Form > StepControl

8.1개요

8.2속성

```
Form 에서 화면분할 기능을 사용할 때 Form 에 표시되는 Step Control 입니다.
```

## 8.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- Layout 오브젝트의 stepcount 속성값을 2 이상 설정 시 Form 에 자동 표시됩니다.

- Form 의 getStepCount(), setStepIndex() 메소드를 사용하여 분할된 화면을 이동하거나 속성값을 얻을 수 있습니다.
```

## 8.1.2Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 8.1.3Control

| Name | | TypeName |
| --- | --- | --- |
| stepitem | | nexacro.Button |
