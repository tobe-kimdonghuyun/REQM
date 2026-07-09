# 98.Tab > TabButtonItemControl

98.1개요

98.2속성

```
Tab 컴포넌트를 구성하는 TabButtonItemControl 오브젝트입니다.
```

## 98.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- TabPageControl 과 한쌍으로 구성되는 Control 입니다.

- Tab 컴포넌트에서 TabButton 선택을 변경하면 화면에 표시되는 TabPage 가 변경됩니다.
   이 때, 변경된 TabPage 에 포커스가 자동으로 이동되지 않습니다.
   변경된 TabPage 에 포커스를 이동시키려면 스크립트를 추가하여야 합니다.
```

## 98.1.2Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| selected | userstatus | 컴포넌트의 특정 아이템이 선택된 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 98.1.3Control

| Name | | TypeName |
| --- | --- | --- |
| extrabutton | | nexacro.Button |
| tabbuttonitemtext | | nexacro.Static |
| tabbuttonitemicon | | nexacro.TabButtonIconControl |
