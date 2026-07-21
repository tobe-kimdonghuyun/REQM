# 6.Form

6.1개요

6.2속성

6.3메서드

6.4이벤트

```
Form은 화면을 구성하는 기본 단위로써 내부적으로 각 컴포넌트들을 배치하여 원하는 화면을 구성할 수 있도록 합니다.
```

## 6.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
스크립트가 실행 될 수 있는 환경을 제공합니다.


◆ Control 표시 참고

- scrollbartype 속성값 또는 실행 환경(Desktop, Mobile)에 따라 스크롤바 영역에 표시되는 컨트롤이 달라집니다. 조건에 따라 ScrollBarControl 또는 ScrollIndicatorControl 중 하나가 적용됩니다.
  도움말에서 Structure 항목의 이미지는 모든 조건에 동시에 표시할 수 없어 ScrollBarControl 기준으로만 작성된 점을 참고해주세요.
```

## 6.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_10_Form2.png?raw=true)

## 6.1.3컴포넌트, 내부 컨텐츠 크기

```
Form 의 크기를 결정하는 기준입니다.
```

|  |  |
| --- | --- |
| Form | |
| Width | Form 이 포함된 ChildFrame 의 width 속성값이 적용됩니다.  Form 이 팝업형태로 표시되고, ChildFrame 의 autosize 속성값이 "true" 이면 Form 의 width 속성값이 적용됩니다. |
| Height | Form 이 포함된 ChildFrame 의 height 속성값이 적용됩니다.  Form 이 팝업형태로 표시되고, ChildFrame 의 autosize 속성값이 "true" 이면 Form 의 height 속성값이 적용됩니다. |
| stepselector Control     * Layout 의 stepcount 속성값이 0 이거나 stepitem 컨트롤에 이미지가 설정되지 않으면 stepselector 컨트롤은 표시되지 않습니다. | |
| Left | Form 의 stepalign 속성값과 stepselector 컨트롤의 Width 에 따라 계산된 값이 적용됩니다. |
| Top | Form 의 stepalign 속성값과 stepselector 컨트롤의 Height 에 따라 계산된 값이 적용됩니다. |
| Width | Layout 의 stepcount, Form 의 stepitemgap, stepitem 컨트롤의 Width 값에 따라 계산된 값이 적용됩니다. |
| Height | stepitem 컨트롤의 Height 가 적용됩니다. |
| stepitem Control | |
| Left | Form 의 stepitemsize,stepitemgap 속성값에 따라 계산된 값이 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | Form 의 stepitemsize 속성값이 적용됩니다.  이미지의 Width 보다 작을 경우 이미지가 잘려서 표시됩니다.  Form 의 stepitemsize 속성값이 없으면 이미지의 너비가 적용됩니다. |
| Height | Form 의 stepitemsize 속성값이 적용됩니다.  이미지의 Height 보다 작을 경우 이미지가 잘려서 표시됩니다.  Form 의 stepitemsize 속성값이 없으면 이미지의 높이가 적용됩니다. |

## 6.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| Default Button | Enter | Form 에 defaultbutton 속성값이 "true" 인 Button 이 있다면 해당 Button 이 클릭됩니다. |
| 스크롤 이동 | Ctrl + 방향키 | Form 또는 자식 컴포넌트에 포커스가 있고, Form 에 스크롤이 있을 때 입력된 방향키 방향으로 스크롤이 이동합니다. |

## 6.1.5Accessibility Key Action

```
접근성 기능이 활성화 되어 있을 때 적용되는 키 액션입니다.
```

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 선택상자 이동 | 상하방향키 | Tab Order 가 이전/다음인 컴포넌트로 선택상자가 이동합니다. |
| Default Button | Enter | Form 에 defaultbutton 속성값이 "true" 인 Button 이 있다면 해당 Button 이 클릭됩니다. |
| 스크롤 이동 | Ctrl + 방향키 | Form 또는 자식 컴포넌트에 포커스가 있고, Form 에 스크롤이 있을 때 입력된 방향키 방향으로 스크롤이 이동합니다. |

## 6.1.6Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| contents | userstatus | contents form 처리용 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 6.1.7Control

| Name | | TypeName |
| --- | --- | --- |
| hscrollbar | | nexacro.ScrollBarControl |
| vscrollbar | | nexacro.ScrollBarControl |
| stepselector | | nexacro.StepControl |
| hscrollindicator | | nexacro.ScrollIndicatorControl |
| vscrollindicator | | nexacro.ScrollIndicatorControl |
