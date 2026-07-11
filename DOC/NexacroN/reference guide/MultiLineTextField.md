# 91.MultiLineTextField

91.1개요

91.2속성

91.3메서드

91.4이벤트

```
MultiLineTextField 컴포넌트는 사용자로부터 여러 줄로 된 문자열을 입력하는 데 쓰이는 컴포넌트입니다.
```

## 91.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- 한 줄로 된 문자열을 입력받고 유효성 검사를 하고자 한다면, TextField 컴포넌트를 사용해야 합니다.
```

## 91.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacroN_V24_MultiLineTextField2.png?raw=true)

## 91.1.3컴포넌트, 내부 컨텐츠 크기

```
MultiLineTextField 컴포넌트의 크기를 결정하는 기준입니다.
```

|  |  |
| --- | --- |
| MultiLineTextField Component | |
| Width | MultiLineTextField 컴포넌트의 width 속성값이 적용됩니다.  내부 콘텐츠의 Width 보다 작을 경우 내부 콘텐츠가 잘려서 표시됩니다. |
| Height | MultiLineTextField 컴포넌트의 height 속성값이 적용됩니다. 내부 콘텐츠의 Height 보다 작을 경우 내부 콘텐츠가 잘려서 표시됩니다. |
| label Control | |
| Width | label 컨트롤 Text의 자동 계산된 Width값이 적용됩니다. |
| Height | label 컨트롤 Text의 자동 계산된 Height값이 적용됩니다. |
| charcounttext Control | |
| Left | MultiLineTextField 컴포넌트의 Width에서 charcounttext 컨트롤의 Width를 뺀 값이 적용됩니다. |
| Top | MultiLineTextField 컴포넌트의 Height에서 charcounttext 컨트롤의 Height를 뺀 값이 적용됩니다. |
| Width | charcounttext 컨트롤의 Text의 자동 계산된 Width값이 적용됩니다. |
| Height | MultiLineTextField 컴포넌트의 footerheight 속성값이 적용됩니다.  footerheight 속성값이 없으면 charcounttext 컨트롤 Text의 자동 계산된 Height 값이 적용됩니다.  helpertext 컨트롤의 Height 값이 더 큰 경우에는 helpertext 컨트롤의 Height 값이 적용됩니다. |
| helpertext Control | |
| Left | 0으로 적용됩니다. |
| Top | MultiLineTextField 컴포넌트의 Height에서 helpertext 컨트롤의 Height를 뺀 값이 적용됩니다. |
| Width | MultiLineTextField 컴포넌트의 Width에서 charcounttext 컨트롤의 Width를 뺀 값이 적용됩니다. |
| Height | MultiLineTextField 컴포넌트의 footerheight 속성값이 적용됩니다.  footerheight 속성값이 없으면 helpertext 컨트롤 Text의 자동 계산된 Height 값이 적용됩니다.  charcounttext 컨트롤의 Height 값이 더 큰 경우에는 charcounttext 컨트롤의 Height 값이 적용됩니다. |
| nulltext Control | |
| Left | 0으로 적용됩니다. |
| Top | 0으로 적용됩니다. |
| Width | MultiLineTextField 컴포넌트의 Width에서 prefixtext, suffixtext, leadingbutton, trailingbutton 컨트롤들의 Width를 모두 합한 값을 뺀 값이 적용됩니다. |
| Height | box 컨트롤 Height 값에서 box 컨트롤의 위, 아래 border 값을 뺀 값이 적용됩니다. |
| box control | |
| Left | 0으로 적용됩니다. |
| Top | MultiLineTextField 컴포넌트의 Height에서 label 컨트롤이 floating 되기 위해 확보된 영역의 Height를 뺀 값이 적용됩니다. |
| Width | MultiLineTextField 컴포넌트의 Width 가 적용됩니다. |
| Height | MultiLineTextField 컴포넌트의 contentheight 속성값이 적용됩니다.  contentheight 속성값이 없으면 MultiLineTextField 컴포넌트의 Height 값에서 label 컨트롤이 labelposition 속성값으로 설정한 위치에 표시되기 위해 확보된 Height 값과 helpertext와 charcounttext 컨트롤이 표시되기 위해 확보된 Height 값을 뺀 값이 적용됩니다. |

## 91.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 캐럿 이동 | 방향키 | 캐럿이 표시되고 있을 때 캐럿이 입력된 방향키 방향으로 이동됩니다. |
| 텍스트 선택 | Shift + 방향키 | 캐럿이 표시되고 있을 때 텍스트가 입력된 방향키 방향으로 선택됩니다. |
| 스크롤 이동 | Ctrl + 방향키 | MultiLineTextField 컴포넌트에 스크롤이 있을 때 입력된 방향키 방향으로 스크롤이 이동합니다 |

## 91.1.5생성자

```
MultiLineTextField.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | MultiLineTextField 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | MultiLineTextField 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 MultiLineTextField 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 MultiLineTextField 의 left 가 결정됩니다. |
| vTop | String, Number | MultiLineTextField 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 MultiLineTextField 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 MultiLineTextField 의 top 이 결정됩니다. |
| vWidth | String, Number | MultiLineTextField 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 MultiLineTextField 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 MultiLineTextField 의 width 가 결정됩니다. |
| vHeight | String, Number | MultiLineTextField 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 MultiLineTextField 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 MultiLineTextField 의 height 가 결정됩니다. |
| vRight | String, Number | MultiLineTextField 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 MultiLineTextField 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 MultiLineTextField 의 right 가 결정됩니다. |
| vBottom | String, Number | MultiLineTextField 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 MultiLineTextField 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 MultiLineTextField 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | MultiLineTextField 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | MultiLineTextField 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | MultiLineTextField 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | MultiLineTextField 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new MultiLineTextField();  objComp.init( "MultiLineTextField00", 30, 120, 196, 46 ); objComp.init( "MultiLineTextField00", 30, 120, 196, 46, null, null ); objComp.init( "MultiLineTextField00", null, null, 300, "400px", "80%", 300 ); objComp.init( "MultiLineTextField00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "MultiLineTextField00", "MultiLineTextField22:10", 300, null, null, "MultiLineTextField33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objMultiLineTextField = new MultiLineTextField();   objMultiLineTextField.init("MultiLineTextField", 30, 120, 196, 46, null, null); objMultiLineTextField.init("MultiLineTextField", null, null, 300, "400px", "80%", 300); or var objMultiLineTextField = new MultiLineTextField("MultiLineTextField", 30, 120, 196, 46, null, null); var objMultiLineTextField = new MultiLineTextField("MultiLineTextField", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("MultiLineTextField", objMultiLineTextField);    // Insert Object to Parent Form   this.insertChild(1, "MultiLineTextField", objMultiLineTextField);    // Remove Object form Parent Form   this.removeChild("MultiLineTextField");    // Show Object   objMultiLineTextField.show();    // Destroy Object   objMultiLineTextField.destroy();  objMultiLineTextField = null; ``` |

## 91.1.6Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 91.1.7Control

| Name | | TypeName |
| --- | --- | --- |
| box | | nexacro.MultiLineTextFieldBoxControl |
| helpertext | | nexacro.FieldBaseTextControl |
| charcounttext | | nexacro.FlexTextControl |
| label | | nexacro.FieldBaseLabelControl |
| nulltext | | nexacro.FlexTextControl |
| vscrollbar | | nexacro.ScrollBarControl |
| hscrollbar | | nexacro.ScrollBarControl |
| vscrollindicator | | nexacro.ScrollIndicatorControl |
| hscrollindicator | | nexacro.ScrollIndicatorControl |
