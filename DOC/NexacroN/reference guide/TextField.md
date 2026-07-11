# 94.TextField

94.1개요

94.2속성

94.3메서드

94.4이벤트

```
TextField 컴포넌트는 사용자로부터 한 줄로 된 문자열을 입력하는 데 쓰이는 컴포넌트입니다.
```

## 94.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- TextField 컴포넌트는 inputtype이나 pattern 속성값을 설정해 입력 형식을 지정할 수 있습니다.
  입력 형식에 따라 입력값의 유효성을 검사할 수 있습니다.

- 여러 줄로 된 문자열을 입력받고자 한다면, MultiLineTextField 컴포넌트를 사용해야 합니다.
```

## 94.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacroN_V24_TextField2.png?raw=true)

## 94.1.3컴포넌트, 내부 컨텐츠 크기

```
TextField 컴포넌트의 크기를 결정하는 기준입니다.
```

|  |  |
| --- | --- |
| TextField Component | |
| Width | TextField 컴포넌트의 width 속성값이 적용됩니다.  내부 콘텐츠의 Width 보다 작을 경우 내부 콘텐츠가 잘려서 표시됩니다. |
| Height | TextField컴포넌트의 height 속성값이 적용됩니다.  내부 콘텐츠의 Height 보다 작을 경우 내부 콘텐츠가 잘려서 표시됩니다. |
| label Control | |
| Width | label 컨트롤 Text의 자동 계산된 Width값이 적용됩니다. |
| Height | label 컨트롤 Text의 자동 계산된 Height값이 적용됩니다. |
| charcounttext Control | |
| Left | TextField 컴포넌트의 Width에서 charcounttext 컨트롤의 Width를 뺀 값이 적용됩니다. |
| Top | TextField 컴포넌트의 Height에서 charcounttext 컨트롤의 Height를 뺀 값이 적용됩니다. |
| Width | charcounttext 컨트롤의 Text의 자동 계산된 Width값이 적용됩니다. |
| Height | TextField 컴포넌트의 footerheight 속성값이 적용됩니다.  footerheight 속성값이 없으면 charcounttext 컨트롤 Text의 자동 계산된 Height 값이 적용됩니다.  helpertext 컨트롤의 Height 값이 더 큰 경우에는 helpertext 컨트롤의 Height 값이 적용됩니다. |
| helpertext Control | |
| Left | 0으로 적용됩니다 |
| Top | TextField 컴포넌트의 Height에서 helpertext 컨트롤의 Height를 뺀 값이 적용됩니다. |
| Width | TextField 컴포넌트의 Width에서 charcounttext 컨트롤의 Width를 뺀 값이 적용됩니다. |
| Height | TextField 컴포넌트의 footerheight 속성값이 적용됩니다.  footerheight 속성값이 없으면 helpertext 컨트롤 Text의 자동 계산된 Height 값이 적용됩니다.  charcounttext 컨트롤의 Height 값이 더 큰 경우에는 charcounttext 컨트롤의 Height 값이 적용됩니다. |
| nulltext Control | |
| Left | 0으로 적용됩니다. |
| Top | 0으로 적용됩니다. |
| Width | TextField 컴포넌트의 Width에서 prefixtext, postfixtext, leadingbutton, trailingbutton 컨트롤들의 Width를 모두 합한 값을 뺀 값이 적용됩니다. |
| Height | box 컨트롤 Height 값에서 box 컨트롤의 위, 아래 border 값을 뺀 값이 적용됩니다. |
| box control | |
| Left | 0으로 적용됩니다. |
| Top | TextField 컴포넌트의 Height에서 label 컨트롤이 floating 되기 위해 확보된 영역의 Height를 뺀 값이 적용됩니다. |
| Width | TextField 컴포넌트의 Width 가 적용됩니다. |
| Height | TextField 컴포넌트의 contentheight 속성값이 적용됩니다.  contentheight 속성값이 없으면 TextField 컴포넌트의 Height 값에서 label 컨트롤이 labelposition 속성값으로 설정한 위치에 표시되기 위해 확보된 Height 값과 helpertext와 charcounttext 컨트롤이 표시되기 위해 확보된 Height 값을 뺀 값이 적용됩니다. |
| prefixtext control | |
| Left | 0으로 적용됩니다. |
| Top | 0으로 적용됩니다. |
| Width | prefixtext 컨트롤의 자동 계산된 Width값이 적용됩니다. |
| Height | box 컨트롤 Height 값에서 box 컨트롤의 위, 아래 border 값을 뺀 값이 적용됩니다. |
| postfixtext control | |
| Left | TextField 컴포넌트의 Width에서 postfixtext, trailingbutton 컨트롤들의 Width를 모두 합한 값을 뺀 값이 적용됩니다. |
| Top | 0으로 적용됩니다. |
| Width | postfixtext 컨트롤의 자동 계산된 Width값이 적용됩니다. |
| Height | box 컨트롤 Height 값에서 box 컨트롤의 위, 아래 border 값을 뺀 값이 적용됩니다. |
| leadingbutton control | |
| Left | 0으로 적용됩니다. |
| Top | 0으로 적용됩니다. |
| Width | iconbuttonsize 속성 값이 적용됩니다.  iconbuttonsize 속성값이 없으면 TextField 컴포넌트의 Height 가 적용됩니다. |
| Height | iconbuttonsize 속성 값이 적용됩니다.  iconbuttonsize 속성값이 없으면 box 컨트롤 Height 값에서 box 컨트롤의 위, 아래 border 값을 뺀 값이 적용됩니다. |
| trailingbutton control | |
| Left | TextField 컴포넌트의 Width에서 trailingbutton 컨트롤의 Width를 뺀 값이 적용됩니다. |
| Top | 0으로 적용됩니다. |
| Width | iconbuttonsize 속성 값이 적용됩니다. iconbuttonsize 속성값이 없으면 TextField 컴포넌트의 Height 가 적용됩니다. |
| Height | iconbuttonsize 속성 값이 적용됩니다.  iconbuttonsize 속성값이 없으면 box 컨트롤 Height 값에서 box 컨트롤의 위, 아래 border 값을 뺀 값이 적용됩니다. |

## 94.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 캐럿 이동 | 좌우방향키 | 캐럿이 표시되고 있을 때 캐럿이 좌/우 방향으로 이동됩니다. |
| 텍스트 선택 | Shift + 좌우방향키 | 캐럿이 표시되고 있을 때 입력된 텍스트가 좌/우 방향으로 선택됩니다. |

## 94.1.5생성자

```
TextField.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | TextField 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | TextField 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 TextField 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 TextField 의 left 가 결정됩니다. |
| vTop | String, Number | TextField 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 TextField 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 TextField 의 top 이 결정됩니다. |
| vWidth | String, Number | TextField 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 TextField 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 TextField 의 width 가 결정됩니다. |
| vHeight | String, Number | TextField 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 TextField 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 TextField 의 height 가 결정됩니다. |
| vRight | String, Number | TextField 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 TextField 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 TextField 의 right 가 결정됩니다. |
| vBottom | String, Number | TextField 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 TextField 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 TextField 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | TextField 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | TextField 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | TextField 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | TextField 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new TextField();  objComp.init( "TextField00", 30, 120, 196, 46 ); objComp.init( "TextField00", 30, 120, 196, 46, null, null ); objComp.init( "TextField00", null, null, 300, "400px", "80%", 300 ); objComp.init( "TextField00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "TextField00", "TextField22:10", 300, null, null, "TextField33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objTextField = new TextField();   objTextField.init("TextField", 30, 120, 196, 46, null, null); objTextField.init("TextField", null, null, 300, "400px", "80%", 300); or var objTextField = new TextField("TextField", 30, 120, 196, 46, null, null); var objTextField = new TextField("TextField", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("TextField", objTextField);    // Insert Object to Parent Form   this.insertChild(1, "TextField", objTextField);    // Remove Object form Parent Form   this.removeChild("TextField");    // Show Object   objTextField.show();    // Destroy Object   objTextField.destroy();  objTextField = null; ``` |

## 94.1.6Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 94.1.7Control

| Name | | TypeName |
| --- | --- | --- |
| box | | nexacro.TextFieldBoxControl |
| helpertext | | nexacro.FieldBaseTextControl |
| charcounttext | | nexacro.FlexTextControl |
| label | | nexacro.FieldBaseLabelControl |
| nulltext | | nexacro.FlexTextControl |
