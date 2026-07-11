# 22.CheckBoxSet

22.1개요

22.2속성

22.3메서드

22.4이벤트

```
CheckBoxSet 컴포넌트는 여러 개의 후보값 중에서 1개 또는 여러 개의 값을 선택하기 위해 사용하는 컴포넌트입니다.
```

## 22.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

## 22.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacroN_CheckBoxSet1.png?raw=true)

## 22.1.3컴포넌트, 내부 컨텐츠 크기

```
CheckBoxSet 컴포넌트의 크기를 결정하는 기준입니다.

- CheckBoxSet 컴포넌트의 fittocontents 속성값이 "none" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| CheckBoxSet Component | |
| Width | CheckBoxSet 컴포넌트의 width 속성값이 적용됩니다. |
| Height | CheckBoxSet 컴포넌트의 height 속성값이 적용됩니다. |
| checkboxsetitem | |
| Left | rowcount, columncount, direction 속성값에 의해 결정된 checkboxsetitem 컨트롤 위치에 맞게 계산된 값이 적용됩니다.  rowcount, columncount 속성값이 "-1" 일 경우 다른 checkboxsetitem 컨트롤의 Width 값도 계산에 포함됩니다. |
| Top | rowcount, columncount, direction 속성값에 의해 결정된 checkboxsetitem 컨트롤 위치에 맞게 계산된 값이 적용됩니다. |
| Width | CheckBoxSet 컴포넌트의 Width 를 rowcount, columncount, direction 속성값에 의해 결정된 컬럼수로 나눈값이 적용됩니다.  rowcount, columncount 속성값이 "-1" 일 경우 icon 의 Width 에 text 의 Width 를 더한 값이 적용됩니다.  내부 컨텐츠의 Width 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
| Height | CheckBoxSet 컴포넌트의 Height 를 rowcount, columncount, direction 속성값에 의해 결정된 로우수로 나눈값이 적용됩니다.  내부 컨텐츠의 Height 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
| icon | |
| Left | checkboxsetitem 컨트롤의 -nexa-icon-position, -nexa-text-align, -nexa-vertical-align 속성값에 따라 계산된 값이 적용됩니다. |
| Top | checkboxsetitem 컨트롤의 -nexa-icon-position, -nexa-text-align, -nexa-vertical-align 속성값에 따라 계산된 값이 적용됩니다. |
| Width | 아이콘 이미지의 너비가 적용됩니다. |
| Height | 아이콘 이미지의 높이가 적용됩니다. |
| text | |
| Left | checkboxsetitem 컨트롤의 -nexa-icon-position, -nexa-text-align, -nexa-vertical-align 속성값에 따라 계산된 값이 적용됩니다. |
| Top | checkboxsetitem 컨트롤의 -nexa-icon-position, -nexa-text-align, -nexa-vertical-align 속성값에 따라 계산된 값이 적용됩니다. |
| Width | 텍스트 길이에 맞게 계산된 값이 적용됩니다. |
| Height | 텍스트 크기에 맞게 계산된 값이 적용됩니다. |

```
- CheckBoxSet 컴포넌트의 fittocontents 속성값이 "width" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| CheckBoxSet Component     * CheckBoxSet 컴포넌트의 rowcount, columncount 속성값이 모두 "-1" 이면 rowcount, columncount 속성값이 "0" 인 것처럼 처리됩니다. | |
| Width | 각 컬럼의 checkboxsetitem 컨트롤 Width 를 합산한 값이 적용됩니다. |
| checkboxsetitem | |
| Left | checkboxsetitem 컨트롤의 갯수와 Width 값, CheckBoxSet 컴포넌트의 rowcount, columncount, direction 속성값에 따라 계산된 값이 적용됩니다. |
| Top | checkboxsetitem 컨트롤의 갯수와 Height 값, CheckBoxSet 컴포넌트의 rowcount, columncount, direction 속성값에 따라 계산된 값이 적용됩니다. |
| Width | icon 의 Width 에 text 의 Width 를 더한 값이 적용됩니다.  동일컬럼에 위치한 checkboxsetitem 컨트롤의 Width 값 중 현재 checkboxsetitem 컨트롤의 Width 값보다 큰 값이 있을 경우 해당 값으로 적용됩니다. |

```
- CheckBoxSet 컴포넌트의 fittocontents 속성값이 "height" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| CheckBoxSet Component     * CheckBoxSet 컴포넌트의 rowcount, columncount 속성값이 모두 "-1" 이면 rowcount, columncount 속성값이 "0" 인 것처럼 처리됩니다. | |
| Height | 각 로우별로 checkboxsetitem 컨트롤의 Height 를 합산한 값이 적용됩니다. |
| checkboxsetitem | |
| Left | checkboxsetitem 컨트롤의 갯수와 Width 값, CheckBoxSet 컴포넌트의 rowcount, columncount, direction 속성값에 따라 계산된 값이 적용됩니다. |
| Top | checkboxsetitem 컨트롤의 갯수와 Height 값, CheckBoxSet 컴포넌트의 rowcount, columncount, direction 속성값에 따라 계산된 값이 적용됩니다. |
| Height | checkboxsetitem 컨트롤의 -nexa-icon-position 속성값이 "left", "right" 이면 icon 의 Height 와 text 의 Height 중 큰 값이 적용됩니다.  -nexa-icon-position 속성값이 "top", "bottom" 이면 icon 의 Height 에 text 의 Height 를 더한 값이 적용됩니다. |

```
-  CheckBoxSet 컴포넌트의 fittocontents 속성값이 "both" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| CheckBoxSet Component     * CheckBoxSet 컴포넌트의 rowcount, columncount 속성값이 모두 "-1" 이면 rowcount, columncount 속성값이 "0" 인 것처럼 처리됩니다. | |
| Width | 각 컬럼의 checkboxsetitem 컨트롤 Width 를 합산한 값이 적용됩니다. |
| Height | 각 로우별로 checkboxsetitem 컨트롤의 Height 를 합산한 값이 적용됩니다. |
| checkboxsetitem | |
| Left | checkboxsetitem 컨트롤의 갯수와 Width 값, CheckBoxSet 컴포넌트의 rowcount, columncount, direction 속성값에 따라 계산된 값이 적용됩니다. |
| Top | checkboxsetitem 컨트롤의 갯수와 Height 값, CheckBoxSet 컴포넌트의 rowcount, columncount, direction 속성값에 따라 계산된 값이 적용됩니다. |
| Width | icon 의 Width 에 text 의 Width 를 더한 값이 적용됩니다.  동일컬럼에 위치한 checkboxsetitem 컨트롤의 Width 값 중 현재 checkboxsetitem 컨트롤의 Width 값보다 큰 값이 있을 경우 해당 값으로 적용됩니다. |
| Height | checkboxsetitem 컨트롤의 -nexa-icon-position 속성값이 "left", "right" 이면 icon 의 Height 와 text 의 Height 중 큰 값이 적용됩니다. -nexa-icon-position 속성값이 "top", "bottom" 이면 icon 의 Height 에 text 의 Height 를 더한 값이 적용됩니다. |

## 22.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 아이템 이동 | 방향키 | 아이템 항목을 순서대로 이동합니다.  이동된 위치의 아이템은 자동으로 선택되지 않습니다.  이동된 위치의 아이템을 선택하려면 Space 를 입력하여야 합니다. |
| 아이템 결정/결정취소 | Space | 이동된 위치의 아이템을 선택 결정하여 value 속성에 반영합니다. |
| 다중아이템 결정 | Shift + 방향키 | Shift+방향키가 시작된 아이템을 기준으로 아이템이 연속적으로 선택됩니다. |

## 22.1.5생성자

```
CheckBoxSet.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | CheckBoxSet 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | CheckBoxSet 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 CheckBoxSet 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 CheckBoxSet 의 left 가 결정됩니다. |
| vTop | String, Number | CheckBoxSet 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 CheckBoxSet 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 CheckBoxSet 의 top 이 결정됩니다. |
| vWidth | String, Number | CheckBoxSet 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 CheckBoxSet 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 CheckBoxSet 의 width 가 결정됩니다. |
| vHeight | String, Number | CheckBoxSet 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 CheckBoxSet 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 CheckBoxSet 의 height 가 결정됩니다. |
| vRight | String, Number | CheckBoxSet 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 CheckBoxSet 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 CheckBoxSet 의 right 가 결정됩니다. |
| vBottom | String, Number | CheckBoxSet 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 CheckBoxSet 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 CheckBoxSet 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | CheckBoxSet 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | CheckBoxSet 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | CheckBoxSet 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | CheckBoxSet 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new CheckBoxSet();  objComp.init( "CheckBoxSet00", 30, 120, 196, 46 ); objComp.init( "CheckBoxSet00", 30, 120, 196, 46, null, null ); objComp.init( "CheckBoxSet00", null, null, 300, "400px", "80%", 300 ); objComp.init( "CheckBoxSet00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "CheckBoxSet00", "CheckBoxSet22:10", 300, null, null, "CheckBoxSet33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objCheckBoxSet = new CheckBoxSet();   objCheckBoxSet.init("CheckBoxSet", 30, 120, 196, 46, null, null); objCheckBoxSet.init("CheckBoxSet", null, null, 300, "400px", "80%", 300); or var objCheckBoxSet = new CheckBoxSet("CheckBoxSet", 30, 120, 196, 46, null, null); var objCheckBoxSet = new CheckBoxSet("CheckBoxSet", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("CheckBoxSet", objCheckBoxSet);    // Insert Object to Parent Form   this.insertChild(1, "CheckBoxSet", objCheckBoxSet);    // Remove Object form Parent Form   this.removeChild("CheckBoxSet");    // Show Object   objCheckBoxSet.show();    // Destroy Object   objCheckBoxSet.destroy();  objCheckBoxSet = null; ``` |

## 22.1.6Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 22.1.7Control

| Name | | TypeName |
| --- | --- | --- |
| checkboxsetitem | | nexacro.CheckBox |
| vscrollbar | | nexacro.ScrollBarControl |
| vscrollindicator | | nexacro.ScrollIndicatorControl |
