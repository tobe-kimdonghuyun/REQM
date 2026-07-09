# 88.ListView > ListViewDetailBandControl

88.1개요

88.2속성

```
ListView 컴포넌트의 Detail 밴드를 구성하는 밴드 컨트롤입니다.
```

## 88.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- ListView 는 Body, Detail 밴드로 구성되며, 각 밴드는 Cell 리스트를 각각 소유합니다.

- Body, Detail 밴드는 바인드 된 DataSet 의 Row 가 반복되어 출력되는 Cell 들의 집합입니다.
```

## 88.1.2Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| selected | userstatus | 컴포넌트의 특정 아이템이 선택된 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 88.1.3Control

| Name | | TypeName |
| --- | --- | --- |
| cell | | nexacro.ListViewCellControl |
