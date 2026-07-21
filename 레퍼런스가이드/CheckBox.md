# 21.CheckBox

21.1개요

21.2속성

21.3메서드

21.4이벤트

```
CheckBox는 작은 사각박스 안에 선택된 상태/선택되지 않은 상태를 전환하면서 체크표시로 표현하는 Button의 일종인 컴포넌트입니다.

마우스나 키보드로 선택하게 되면, 기존의 상태에 따라 체크된 상태/체크되지 않은 상태를 바꾸어 체크표시를 출력해줍니다.
CheckBox는 체크항목에 관한 text 를 왼쪽 또는 오른쪽에 표시가 가능합니다.
```

## 21.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- value 속성을 제공하여 사용자가 스크립트로 직접 CheckBox의 상태를 바꿀수 있으며, truevalue, falsevalue를 사용해 true 일때의 값과 false 일때의 값을 사용자가 직접 지정해 사용할 수 있습니다.
 
- Align 관련 속성을 사용하여 체크항목에 관한 text 의 출력을 CheckBox의 왼쪽 또는 오른쪽으로 지정할 수 있습니다.
  화면에 출력되는 text 는 font 속성으로 모양을 수정할 수 있습니다.

- DataSet을 바인딩해 CheckBox의 value 속성값을 DataSet의 특정 Column 값과 바인딩할 수 있습니다.
  DataSet의 현재 Row의 지정한 Column의 값이 CheckBox의 상태로 설정되며, 사용자가 마우스나 키보드로 CheckBox의 상태를 수정하면 DataSet의 해당 Column의 값이 바로 수정됩니다.
```

## 21.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_03_Checkbox1.png?raw=true)

## 21.1.3컴포넌트, 내부 컨텐츠 크기

```
CheckBox 컴포넌트와 내부 컨텐츠 크기를 결정하는 기준입니다.

- CheckBox 컴포넌트의 fittocontents 속성값이 "none" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| CheckBox Component | |
| Width | CheckBox 컴포넌트의 width 속성값이 적용됩니다.  내부 컨텐츠의 Width 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
| Height | CheckBox 컴포넌트의 height 속성값이 적용됩니다.  내부 컨텐츠의 Height 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
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
- CheckBox 컴포넌트의 fittocontents 속성값이 "width" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| CheckBox Component | |
| Width | -nexa-icon-position 속성값이 "left","right" 이면 icon 의 Width 에 text 의 Width 를 더한 값이 적용됩니다.  -nexa-icon-position 속성값이 "top","bottom" 이면 icon 의 Width 와 text 의 Width 중 큰 값이 적용됩니다. |

```
- CheckBox 컴포넌트의 fittocontents 속성값이 "height" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| CheckBox Component | |
| Height | -nexa-icon-position 속성값이 "left","right" 이면 icon 의 Height 와 text 의 Height 중 큰 값이 적용됩니다.  -nexa-icon-position 속성값이 "top","bottom" 이면 icon 의 Height 에 text 의 Height 를 더한 값이 적용됩니다. |

```
- CheckBox 컴포넌트의 fittocontents 속성값이 "both" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| CheckBox Component | |
| Width | -nexa-icon-position 속성값이 "left","right" 이면 icon 의 Width 에 text 의 Width 를 더한 값이 적용됩니다.  -nexa-icon-position 속성값이 "top","bottom" 이면 icon 의 Width 와 text 의 Width 중 큰 값이 적용됩니다. |
| Height | -nexa-icon-position 속성값이 "left","right" 이면 icon 의 Height 와 text 의 Height 중 큰 값이 적용됩니다.  -nexa-icon-position 속성값이 "top","bottom" 이면 icon 의 Height 에 text 의 Height 를 더한 값이 적용됩니다. |

## 21.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 체크값 변경 | Space | 체크가 설정되어 있으면 체크를 해제하고, 체크가 해제되어 있으면 체크를 설정합니다. |

## 21.1.5Accessibility Key Action

```
접근성 기능이 활성화 되어 있을 때 적용되는 키 액션입니다.
```

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 선택상자 이동 | 상하방향키 | Tab Order 가 이전/다음인 컴포넌트로 선택상자가 이동합니다. |
| 체크값 변경 | Space | 체크가 설정되어 있으면 체크를 해제하고, 체크가 해제되어 있으면 체크를 설정합니다. |

## 21.1.6생성자

```
CheckBox.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | CheckBox 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | CheckBox 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 CheckBox 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 CheckBox 의 left 가 결정됩니다. |
| vTop | String, Number | CheckBox 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 CheckBox 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 CheckBox 의 top 이 결정됩니다. |
| vWidth | String, Number | CheckBox 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 CheckBox 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 CheckBox 의 width 가 결정됩니다. |
| vHeight | String, Number | CheckBox 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 CheckBox 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 CheckBox 의 height 가 결정됩니다. |
| vRight | String, Number | CheckBox 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 CheckBox 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 CheckBox 의 right 가 결정됩니다. |
| vBottom | String, Number | CheckBox 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 CheckBox 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 CheckBox 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | CheckBox 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | CheckBox 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | CheckBox 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | CheckBox 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new CheckBox();  objComp.init( "CheckBox00", 30, 120, 196, 46 ); objComp.init( "CheckBox00", 30, 120, 196, 46, null, null ); objComp.init( "CheckBox00", null, null, 300, "400px", "80%", 300 ); objComp.init( "CheckBox00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "CheckBox00", "CheckBox22:10", 300, null, null, "CheckBox33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objCheckBox = new CheckBox();   objCheckBox.init("CheckBox", 30, 120, 196, 46, null, null); objCheckBox.init("CheckBox", null, null, 300, "400px", "80%", 300); or var objCheckBox = new CheckBox("CheckBox", 30, 120, 196, 46, null, null); var objCheckBox = new CheckBox("CheckBox", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("CheckBox", objCheckBox);    // Insert Object to Parent Form   this.insertChild(1, "CheckBox", objCheckBox);    // Remove Object form Parent Form   this.removeChild("CheckBox");    // Show Object   objCheckBox.show();    // Destroy Object   objCheckBox.destroy();  objCheckBox = null; ``` |

## 21.1.7Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| selected | userstatus | 컴포넌트의 특정 아이템이 선택된 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |
