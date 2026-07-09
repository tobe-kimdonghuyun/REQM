# 100.Tab > TabpageControl

100.1개요

100.2속성

100.3메서드

100.4이벤트

```
Tab 컴포넌트를 구성하는 TabpageControl 오브젝트입니다.
```

## 100.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- Tab 컴포넌트에 item 으로 한 개 이상 추가되는 Control 입니다.

- TabButtonItemControl 과 한쌍으로 구성되는 Control 입니다.

- Tab 컴포넌트에서 TabButton 선택을 변경하면 화면에 표시되는 TabPage 가 변경됩니다.
   이 때, 변경된 TabPage 에 포커스가 자동으로 이동되지 않습니다.
   변경된 TabPage 에 포커스를 이동시키려면 스크립트를 추가하여야 합니다.

- TabPage 에 포커스가 없는 상태일 때 TabPage 의 빈영역을 선택하면 마지막에 포커스를 가지고 있던 컴포넌트로 포커스가 이동합니다.
```

## 100.1.2Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 스크롤 이동 | Ctrl + 방향키 | TabPage 또는 자식 컴포넌트에 포커스가 있고, TabPage 에 스크롤이 있을 때 입력된 방향키 방향으로 스크롤이 이동합니다 |

## 100.1.3Accessibility Key Action

```
접근성 기능이 활성화 되어 있을 때 적용되는 키 액션입니다.
```

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 선택상자 이동 | 상하방향키 | Tab Order 가 이전/다음인 컴포넌트로 선택상자가 이동합니다. |
| 스크롤 이동 | Ctrl + 방향키 | TabPage 또는 자식 컴포넌트에 포커스가 있고, TabPage 에 스크롤이 있을 때 입력된 방향키 방향으로 스크롤이 이동합니다 |

## 100.1.4Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |
