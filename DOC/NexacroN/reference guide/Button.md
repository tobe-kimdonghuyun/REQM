# 19.Button

19.1개요

19.2속성

19.3메서드

19.4이벤트

```
Button 컴포넌트는 사용자가 마우스를 클릭해서 지정한 스크립트를 수행하기 위한 Push Button 컨트롤을 사용하게 하는 컴포넌트입니다.

Button은 기본적으로 사각형의 모양으로, Button을 클릭하면 Button은 눌러진 형태를 보여주며, 놓으면 Button 원래의 모습으로 되돌아옵니다.
Click과 관련한 이벤트 핸들러를 제공하며 사용자는 제공된 이벤트 핸들러에 스크립트를 작성하여 클릭 동작에 따른 실행을 지정합니다.
```

## 19.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

## 19.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_01_Button1.png?raw=true)

## 19.1.3컴포넌트, 내부 컨텐츠 크기

```
Button 컴포넌트와 내부 컨텐츠 크기를 결정하는 기준입니다.

- Button 컴포넌트의 fittocontents 속성값이 "none" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| Button Component | |
| Width | Button 컴포넌트의 width 속성값이 적용됩니다.  내부 컨텐츠의 Width 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
| Height | Button 컴포넌트의 height 속성값이 적용됩니다.  내부 컨텐츠의 Height 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
| icon | |
| Left | -nexa-icon-position,-nexa-text-align,-nexa-vertical-align 속성값에 따라 계산된 값이 적용됩니다. |
| Top | -nexa-icon-position,-nexa-text-align,-nexa-vertical-align 속성값에 따라 계산된 값이 적용됩니다. |
| Width | 아이콘 이미지의 너비가 적용됩니다. |
| Height | 아이콘 이미지의 높이가 적용됩니다. |
| text | |
| Left | -nexa-icon-position,-nexa-text-align,-nexa-vertical-align 속성값에 따라 계산된 값이 적용됩니다. |
| Top | -nexa-icon-position,-nexa-text-align,-nexa-vertical-align 속성값에 따라 계산된 값이 적용됩니다. |
| Width | textwidth 속성값이 적용됩니다.  textwidth 속성값이 없으면 텍스트 길이에 맞게 계산된 값이 적용됩니다. |
| Height | 텍스트 크기에 맞게 계산된 값이 적용됩니다. |

```
- Button 컴포넌트의 fittocontents 속성값이 "width" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| Button Component | |
| Width | -nexa-icon-position 속성값이 "left","right" 이면 icon 의 Width 에 text 의 Width 를 더한 값이 적용됩니다.  -nexa-icon-position 속성값이 "top","bottom" 이면 icon 의 Width 와 text 의 Width 중 큰 값이 적용됩니다. |

```
- Button 컴포넌트의 fittocontents 속성값이 "height" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| Button Component | |
| Height | -nexa-icon-position 속성값이 "left","right" 이면 icon 의 Height 와 text 의 Height 중 큰 값이 적용됩니다.  -nexa-icon-position 속성값이 "top","bottom" 이면 icon 의 Height 에 text 의 Height 를 더한 값이 적용됩니다. |

```
- Button 컴포넌트의 fittocontents 속성값이 "both" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| Button Component | |
| Width | -nexa-icon-position 속성값이 "left","right" 이면 icon 의 Width 에 text 의 Width 를 더한 값이 적용됩니다.  -nexa-icon-position 속성값이 "top","bottom" 이면 icon 의 Width 와 text 의 Width 중 큰 값이 적용됩니다. |
| Height | -nexa-icon-position 속성값이 "left","right" 이면 icon 의 Height 와 text 의 Height 중 큰 값이 적용됩니다.  -nexa-icon-position 속성값이 "top","bottom" 이면 icon 의 Height 에 text 의 Height 를 더한 값이 적용됩니다. |

## 19.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| Click | Enter | 클릭 처리되어 onclick 이벤트가 발생합니다. |
| Click | Space | 클릭 처리되어 onclick 이벤트가 발생합니다. |

## 19.1.5Accessibility Key Action

```
접근성 기능이 활성화 되어 있을 때 적용되는 키 액션입니다.
```

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 선택상자 이동 | 상하방향키 | Tab Order 가 이전/다음인 컴포넌트로 선택상자가 이동합니다. |
| Click | Enter | 클릭 처리되어 onclick 이벤트가 발생합니다. |
| Click | Space | 클릭 처리되어 onclick 이벤트가 발생합니다. |

## 19.1.6생성자

```
Button.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | Button 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | Button 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 Button 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Button 의 left 가 결정됩니다. |
| vTop | String, Number | Button 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 Button 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Button 의 top 이 결정됩니다. |
| vWidth | String, Number | Button 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Button 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Button 의 width 가 결정됩니다. |
| vHeight | String, Number | Button 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Button 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Button 의 height 가 결정됩니다. |
| vRight | String, Number | Button 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 Button 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Button 의 right 가 결정됩니다. |
| vBottom | String, Number | Button 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 Button 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Button 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | Button 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | Button 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | Button 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | Button 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new Button();  objComp.init( "Button00", 30, 120, 196, 46 ); objComp.init( "Button00", 30, 120, 196, 46, null, null ); objComp.init( "Button00", null, null, 300, "400px", "80%", 300 ); objComp.init( "Button00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "Button00", "Button22:10", 300, null, null, "Button33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objButton = new Button();   objButton.init("Button", 30, 120, 196, 46, null, null); objButton.init("Button", null, null, 300, "400px", "80%", 300); or var objButton = new Button("Button", 30, 120, 196, 46, null, null); var objButton = new Button("Button", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("Button", objButton);    // Insert Object to Parent Form   this.insertChild(1, "Button", objButton);    // Remove Object form Parent Form   this.removeChild("Button");    // Show Object   objButton.show();    // Destroy Object   objButton.destroy();  objButton = null; ``` |

## 19.1.7Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| pushed | userstatus | 컴포넌트가 push된 상태 |
| selected | userstatus | 컴포넌트의 특정 아이템이 선택된 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |
