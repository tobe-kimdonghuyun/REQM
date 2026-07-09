# 86.ListView > ListViewBandExpandbarControl

86.1개요

86.2속성

```
ListViewBandControl 의 확장바(ExpandBar) 버튼을 구성하는 컨트롤입니다.
```

## 86.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- ListViewBandExpandbarControl 의 모든 속성은 XCSS 에서만 정의할 수 있으며, 스크립트로 속성값을 읽어오거나 수정할 수 없습니다.

- 확장바(ExpandBar) 버튼은 Body 밴드에서만 지원하며 Cell 의 오른쪽에 표시되는 확장버튼과 다른 컨트롤입니다.

- 확장바(ExpandBar) 를 사용하여 Detail 밴드를 확장 또는 축소 할 수 있습니다.
   확장바(ExpandBar) 기능은 ListView 컴포넌트의 bandexpandtype, bandinitstatus 속성값에 따라 동작합니다.

◆ Deprecated features

아래 기능은 아직 사용할 수 있지만, 언젠가 제거할 예정이므로 주의를 기울여야 합니다. 작성한 코드에 해당 기능이 포함되어 있다면 제거해야 합니다.

- pushed userstatus
- selected userstatus
```

## 86.1.2Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| pushed | userstatus | 컴포넌트가 push된 상태 |
| selected | userstatus | 컴포넌트의 특정 아이템이 선택된 상태 |
| expand | userstatus | 트리가 펼쳐진 상태 |
| collapse | userstatus | 트리가 접어진 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |
