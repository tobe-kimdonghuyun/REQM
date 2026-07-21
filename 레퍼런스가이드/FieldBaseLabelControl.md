# 111.FieldBaseLabelControl

111.1개요

111.2속성

```
라벨을 표시할 수 있는 Control 오브젝트입니다.
```

## 111.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- 라벨이 labelposition 속성값으로 지정된 위치에 표시된 상태인 경우에는 floating 상태를 가집니다.
  입력한 텍스트 유효성 검사 결과에 따라 floatinginvalid, floatingvalid 상태를 가집니다.
```

## 111.1.2Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| floating | userstatus | 라벨이 labelposition 속성값으로 지정된 위치에 표시된 상태 |
| floatinginvalid | userstatus | 라벨이 labelposition 속성값으로 지정된 위치에 표시된 상태이면서 유효성 검사 결과 유효하지 않은 상태 |
| floatingvalid | userstatus | 라벨이 labelposition 속성값으로 지정된 위치에 표시된 상태이면서 유효성 검사 결과 유효한 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |
