# 75.Grid > GridBandControl

75.1개요

75.2속성

```
Grid의 Band를 지정하는 오브젝트입니다.

Grid는 Head,Body,Summary Band로 구성됩니다. 각 Band는 Cell 의 List를 각각 소유하여 구성됩니다.
Head Band는 Grid의 상단에 출력되는 Cell 들이며, Body Band는 Bind된 Dataset Row 가 반복되어 출력되는 Cell 들이며, Summary Band는 Grid의 하단에 출력되는 Cell 들의 집합입니다.
```

## 75.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- Head Band의 style이 css또는 theme에 정의되어 있지 않을 때에는 Body Band의 style을 참조합니다.
  또한, Summary Band의 style이 css 또는 theme에 정의되어 있지 않을 때에는 Head Band의 style을 참조하며,
  Summary Band와 Head Band의 style이 모두 css나 theme에 정의 되어있지 않다면, Body Band의 style값을 참조하게 됩니다.
```

## 75.1.2Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 75.1.3Control

| Name | | TypeName |
| --- | --- | --- |
| row | | nexacro.GridRowControl |
| selection | | nexacro.GridSelectionControl |
