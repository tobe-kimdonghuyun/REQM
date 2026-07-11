# 103.DatePickerControl

103.1개요

103.2속성

```
월 단위 달력형태로 날짜를 선택할 수 있는 Control 입니다.
```

## 103.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- Calendar 컴포넌트에서 날짜를 선택할 때 팝업달력 형태로 사용됩니다.
```

## 103.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_34_DatePickerControl1.png?raw=true)

## 103.1.3Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 103.1.4Control

| Name | | TypeName |
| --- | --- | --- |
| head | | nexacro.DatePickerHeadControl |
| body | | nexacro.DatePickerBodyControl |
