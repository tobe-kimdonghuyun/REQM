# 55.MultiCombo > MultiComboTagBoxControl

55.1개요

55.2속성

```
MultiCombo 컴포넌트의 edittype 속성값이 "singletag" 또는 "multitag"일 때 선택된 아이템을 태그로 표시하는 오브젝트입니다.
```

## 55.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
◆ Control 표시 참고

- scrollbartype 속성값 또는 실행 환경(Desktop, Mobile)에 따라 스크롤바 영역에 표시되는 컨트롤이 달라집니다. 조건에 따라 ScrollBarControl 또는 ScrollIndicatorControl 중 하나가 적용됩니다.
```

## 55.1.2Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 55.1.3Control

| Name | | TypeName |
| --- | --- | --- |
| tagboxitem | | nexacro.TagBoxControl |
| tagboxedit | | nexacro.Edit |
| vscrollbar | | nexacro.ScrollBarControl |
| hscrollbar | | nexacro.ScrollBarControl |
| hscrollindicator | | nexacro.ScrollIndicatorControl |
| vscrollindicator | | nexacro.ScrollIndicatorControl |
