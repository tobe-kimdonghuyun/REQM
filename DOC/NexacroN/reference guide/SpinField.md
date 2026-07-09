# 93.SpinField

93.1개요

93.2속성

93.3메서드

93.4이벤트

```
SpinField 컴포넌트는 일정 범위 내의 숫자 값을 입력하기 위해 사용하는 컴포넌트입니다.
```

## 93.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- Spin 컴포넌트와 비슷한 기능을 제공하지만, TextField 컴포넌트처럼 라벨을 표시하거나 helpertext를 표시하는 추가적인 UI를 지원하는 컴포넌트입니다.
  TextField 컴포넌트 등과 같이 사용할 때 보다 일관성 있는 UI를 제공할 수 있습니다.

- buttontype 속성을 설정하면 spindownbutton, spinupbutton 컨트롤을 텍스트 편집 영역 왼쪽과 오른쪽에 각각 배치할 수 있습니다.
```

## 93.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacroN_V24_SpinField2.png?raw=true)

## 93.1.3컴포넌트, 내부 컨텐츠 크기

```
SpinField 컴포넌트의 크기를 결정하는 기준입니다.
```

|  |  |
| --- | --- |
| SpinField Component | |
| Width | 컴포넌트의 width 속성값이 적용됩니다.  내부 컨텐츠의 너비보다 작을 경우, 내부 컨텐츠가 잘려서 표시됩니다. |
| Height | 컴포넌트의 height 속성값이 적용됩니다.  내부 컨텐츠의 높이보다 작을 경우, 내부 컨텐츠가 잘려서 표시됩니다. |
| label Control | |
| Width | label 컨트롤 Text의 자동 계산된 너비값이 적용됩니다. |
| Height | label 컨트롤 Text의 자동 계산된 높이값이 적용됩니다. |
| helpertext Control | |
| Left | 0 으로 적용됩니다. |
| Top | 컴포넌트의 높이에서 helpertext 컨트롤의 높이를 뺀 값이 적용됩니다. |
| Width | helpertext 컨트롤 Text의 자동 계산된 너비값이 적용됩니다. |
| Height | helpertext 컨트롤 Text의 자동 계산된 높이값이 적용됩니다. |
| nulltext Control | |
| Left | buttontype 속성값에 따라 아래와 같이 적용됩니다.  - "default": prefixtext 컨트롤의 너비를 더한 값  - "horizontal": spindownbutton, prefixtext 컨트롤의 너비를 더한 값 |
| Top | 0 으로 적용됩니다 |
| Width | buttontype 속성값에 따라 아래와 같이 적용됩니다.  - "default": 컴포넌트의 너비에서 prefixtext, postfixtext, spinupbutton 컨트롤들의 너비를 합한 값을 뺀 값  - "horizontal": 컴포넌트의 너비에서 prefixtext, postfixtext, spindownbutton, spinupbutton 컨트롤들의 너비를 합한 값을 뺀 값 |
| Height | 컴포넌트의 높이값이 적용됩니다. |
| box control | |
| Left | 0 으로 적용됩니다 |
| Top | 컴포넌트의 높이에서 label 컨트롤이 floating 되기 위해 확보된 영역의 높이를 뺀 값이 적용됩니다. |
| Width | 컴포넌트의 너비값이 적용됩니다. |
| Height | 컴포넌트의 높이에서 label 컨트롤이 floating 되기 위해 확보된 영역의 높이와 helpertext 컨트롤의 높이를 뺀 값이 적용됩니다. |
| prefixtext control | |
| Left | buttontype 속성값에 따라 아래와 같이 적용됩니다.  - "default": 0  - "horizontal": spindownbutton 컨트롤의 너비를 더한 값 |
| Top | 0 으로 적용됩니다 |
| Width | postfixtext 컨트롤의 자동 계산된 너비값이 적용됩니다. |
| Height | 컴포넌트의 높이값이 적용됩니다. |
| postfixtext control | |
| Left | 컴포넌트의 너비에서 postfixtext, spinupbutton 컨트롤들의 너비를 합한 값을 뺀 값이 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | postfixtext 컨트롤의 자동 계산된 너비값이 적용됩니다. |
| Height | 컴포넌트의 높이값이 적용됩니다. |
| spindownbutton control | |
| Left | buttontype 속성값에 따라 아래와 같이 적용됩니다.  - "default": 컴포넌트의 너비에서 spindownbutton 컨트롤의 너비를 뺀 값  - "horizontal": 0 |
| Top | buttontype 속성값에 따라 아래와 같이 적용됩니다.  - "default": spinupbuton control의 높이를 더한 값  - "horizontal": 0 |
| Width | iconbuttonsize 속성 값이 적용됩니다.  iconbuttonsize 속성값이 없으면 컴포넌트의 높이값이 적용됩니다. |
| Height | iconbuttonsize 속성 값이 적용됩니다.  iconbuttonsize 속성값이 없으면 컴포넌트의 높이값이 적용됩니다.  buttontype 속성값이 "default"인 경우 레이아웃 조정을 위해 Spindownbutton 컨트롤의 높이를 2로 나눈 값이 적용됩니다. |
| spinupbutton control | |
| Left | buttontype 속성값에 따라 아래와 같이 적용됩니다.  - "default": 컴포넌트의 너비에서 spinupbutton 컨트롤의 너비를 뺀 값  - "horizontal": 컴포넌트의 너비에서 spinupbutton 컨트롤의 너비를 뺀 값 |
| Top | 0 으로 적용됩니다 |
| Width | iconbuttonsize 속성 값이 적용됩니다.  iconbuttonsize 속성값이 없으면 컴포넌트의 높이값이 적용됩니다. |
| Height | iconbuttonsize 속성 값이 적용됩니다.  iconbuttonsize 속성값이 없으면 컴포넌트의 높이값이 적용됩니다.  buttontype 속성값이 "default"인 경우 레이아웃 조정을 위해 Spinupbutton 컨트롤의 높이를 2로 나눈 값이 적용됩니다. |

## 93.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 값 변경 | 상하방향키 | value 값을 increment 속성값만큼 증가 또는 감소 시킵니다. |

## 93.1.5생성자

```
SpinField.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | SpinField 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | SpinField 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 SpinField 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 SpinField 의 left 가 결정됩니다. |
| vTop | String, Number | SpinField 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 SpinField 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 SpinField 의 top 이 결정됩니다. |
| vWidth | String, Number | SpinField 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 SpinField 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 SpinField 의 width 가 결정됩니다. |
| vHeight | String, Number | SpinField 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 SpinField 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 SpinField 의 height 가 결정됩니다. |
| vRight | String, Number | SpinField 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 SpinField 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 SpinField 의 right 가 결정됩니다. |
| vBottom | String, Number | SpinField 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 SpinField 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 SpinField 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | SpinField 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | SpinField 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | SpinField 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | SpinField 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new SpinField();  objComp.init( "SpinField00", 30, 120, 196, 46 ); objComp.init( "SpinField00", 30, 120, 196, 46, null, null ); objComp.init( "SpinField00", null, null, 300, "400px", "80%", 300 ); objComp.init( "SpinField00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "SpinField00", "SpinField22:10", 300, null, null, "SpinField33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objSpinField = new SpinField();   objSpinField.init("SpinField", 30, 120, 196, 46, null, null); objSpinField.init("SpinField", null, null, 300, "400px", "80%", 300); or var objSpinField = new SpinField("SpinField", 30, 120, 196, 46, null, null); var objSpinField = new SpinField("SpinField", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("SpinField", objSpinField);    // Insert Object to Parent Form   this.insertChild(1, "SpinField", objSpinField);    // Remove Object form Parent Form   this.removeChild("SpinField");    // Show Object   objSpinField.show();    // Destroy Object   objSpinField.destroy();  objSpinField = null; ``` |

## 93.1.6Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 93.1.7Control

| Name | | TypeName |
| --- | --- | --- |
| box | | nexacro.SpinFieldBoxControl |
| helpertext | | nexacro.FieldBaseTextControl |
| label | | nexacro.FieldBaseLabelControl |
| nulltext | | nexacro.FlexTextControl |
