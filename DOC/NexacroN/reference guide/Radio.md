# 63.Radio

63.1개요

63.2속성

63.3메서드

63.4이벤트

```
Radio는 동그란 모양의 여러가지 선택사항 중에서 하나를 선택할 수 있도록 하는 Button의 일종인 컴포넌트입니다. 

마우스나 키보드로 한 항목을 선택하게 되면, 선택된 항목만 선택상태로 나머지 항목은 선택되지 않는 상태로 출력해줍니다.
Radio는 선택항목에 관한 Text를 왼쪽 또는 오른쪽에 표시가 가능합니다.
```

## 63.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- 스크립트로 선택항목을 직접 수정할 수 있습니다.
  화면에 출력되는 Text는 Font 속성으로 모양을 수정할 수 있습니다.

- Radio 컴포넌트는 InnerDataset을 통해 자동으로 구성하는 것과, Contents를 이용해 구성하는 것이 가능합니다.
  InnerDataset을 사용할 경우 Radio의 화면 구성은 Radio의 속성값에 따라서 자동으로 이루어지게 되어 있습니다.
  Contents로 구성한 경우에는 사용자가 직접 Radio의 배치를 해주어야만 합니다.

- DataSet을 Bind 하여 Radio의 Code 값과 Data 값을 DataSet의 특정 Column 값과 Binding 할 수 있습니다.
  DataSet의 현재 Row의 지정한 Column의 값이 Radio의 선택된 항목이 되며,
  사용자가 마우스나 키보드로 한 항목을 선택하면 DataSet의 해당 Column의 값이 바로 수정됩니다.
```

## 63.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//21_Radio.png?raw=true)

## 63.1.3컴포넌트, 내부 컨텐츠 크기

```
Radio 컴포넌트의 크기를 결정하는 기준입니다.

- Radio 컴포넌트의 fittocontents 속성값이 "none" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| Radio Component | |
| Width | Radio 컴포넌트의 width 속성값이 적용됩니다. |
| Height | Radio 컴포넌트의 height 속성값이 적용됩니다. |
| radioitem Control | |
| Left | rowcount,columncount,direction 속성값에 의해 결정된 radioitem 컨트롤 위치에 맞게 계산된 값이 적용됩니다.  rowcount,columncount 속성값이 "-1" 일 경우 다른 radioitem 컨트롤의 Width 값도 계산에 포함됩니다. |
| Top | rowcount,columncount,direction 속성값에 의해 결정된 radioitem 컨트롤 위치에 맞게 계산된 값이 적용됩니다. |
| Width | Radio 컴포넌트의 Width 를 rowcount,columncount,direction 속성값에 의해 결정된 컬럼수로 나눈값이 적용됩니다.  rowcount,columncount 속성값이 "-1" 일 경우 icon 의 Width 에 text 의 Width 를 더한 값이 적용됩니다.  내부 컨텐츠의 Width 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
| Height | Radio 컴포넌트의 Height 를 rowcount,columncount,direction 속성값에 의해 결정된 로우수로 나눈값이 적용됩니다.  내부 컨텐츠의 Height 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
| icon | |
| Left | radioitem 컨트롤의 -nexa-icon-position,-nexa-text-align,-nexa-vertical-align 속성값에 따라 계산된 값이 적용됩니다. |
| Top | radioitem 컨트롤의 -nexa-icon-position,-nexa-text-align,-nexa-vertical-align 속성값에 따라 계산된 값이 적용됩니다. |
| Width | 아이콘 이미지의 너비가 적용됩니다. |
| Height | 아이콘 이미지의 높이가 적용됩니다. |
| text | |
| Left | radioitem 컨트롤의 -nexa-icon-position,-nexa-text-align,-nexa-vertical-align 속성값에 따라 계산된 값이 적용됩니다. |
| Top | radioitem 컨트롤의 -nexa-icon-position,-nexa-text-align,-nexa-vertical-align 속성값에 따라 계산된 값이 적용됩니다. |
| Width | 텍스트 길이에 맞게 계산된 값이 적용됩니다. |
| Height | 텍스트 크기에 맞게 계산된 값이 적용됩니다. |

```
- Radio 컴포넌트의 fittocontents 속성값이 "width" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| Radio Component     * Radio 컴포넌트의 rowcount, columncount 속성값이 모두 "-1" 이면 rowcount, columncount 속성값이 "0" 인 것처럼 처리됩니다. | |
| Width | 각 컬럼의 radioitem 컨트롤 Width 를 합산한 값이 적용됩니다. |
| radioitem Control | |
| Left | radioitem 컨트롤의 갯수와 Width 값, Radio 컴포넌트의 rowcount,columncount,direction 속성값에 따라 계산된 값이 적용됩니다. |
| Top | radioitem 컨트롤의 갯수와 Height 값, Radio 컴포넌트의 rowcount,columncount,direction 속성값에 따라 계산된 값이 적용됩니다. |
| Width | icon 의 Width 에 text 의 Width 를 더한 값이 적용됩니다.  동일컬럼에 위치한 radioitem 컨트롤의 Width 값 중 현재 radioitem 컨트롤의 Width 값보다 큰 값이 있을 경우 해당 값으로 적용됩니다. |

```
- Radio 컴포넌트의 fittocontents 속성값이 "height" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| Radio Component     * Radio 컴포넌트의 rowcount, columncount 속성값이 모두 "-1" 이면 rowcount, columncount 속성값이 "0" 인 것처럼 처리됩니다. | |
| Height | 각 로우별로 radioitem 컨트롤의 Height 를 합산한 값이 적용됩니다. |
| radioitem Control | |
| Left | radioitem 컨트롤의 갯수와 Width 값, Radio 컴포넌트의 rowcount,columncount,direction 속성값에 따라 계산된 값이 적용됩니다. |
| Top | radioitem 컨트롤의 갯수와 Height 값, Radio 컴포넌트의 rowcount,columncount,direction 속성값에 따라 계산된 값이 적용됩니다. |
| Height | radioitem 컨트롤의 -nexa-icon-position 속성값이 "left","right" 이면 icon 의 Height 와 text 의 Height 중 큰 값이 적용됩니다.  -nexa-icon-position 속성값이 "top","bottom" 이면 icon 의 Height 에 text 의 Height 를 더한 값이 적용됩니다. |

```
- Radio 컴포넌트의 fittocontents 속성값이 "both" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| Radio Component     * Radio 컴포넌트의 rowcount, columncount 속성값이 모두 "-1" 이면 rowcount, columncount 속성값이 "0" 인 것처럼 처리됩니다. | |
| Width | 각 컬럼의 radioitem 컨트롤 Width 를 합산한 값이 적용됩니다. |
| Height | 각 로우별로 radioitem 컨트롤의 Height 를 합산한 값이 적용됩니다. |
| radioitem Control | |
| Left | radioitem 컨트롤의 갯수와 Width 값, Radio 컴포넌트의 rowcount,columncount,direction 속성값에 따라 계산된 값이 적용됩니다. |
| Top | radioitem 컨트롤의 갯수와 Height 값, Radio 컴포넌트의 rowcount,columncount,direction 속성값에 따라 계산된 값이 적용됩니다. |
| Width | icon 의 Width 에 text 의 Width 를 더한 값이 적용됩니다.  동일컬럼에 위치한 radioitem 컨트롤의 Width 값 중 현재 radioitem 컨트롤의 Width 값보다 큰 값이 있을 경우 해당 값으로 적용됩니다. |
| Height | radioitem 컨트롤의 -nexa-icon-position 속성값이 "left","right" 이면 icon 의 Height 와 text 의 Height 중 큰 값이 적용됩니다.  -nexa-icon-position 속성값이 "top","bottom" 이면 icon 의 Height 에 text 의 Height 를 더한 값이 적용됩니다. |

## 63.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다.    index 속성값이 -1이 아닌 경우에는 해당 index의 아이템이 선택된 상태가 됩니다.  index 속성값이 -1인 경우에는 첫 번째 또는 마지막 index의 아이템 위치로 이동합니다. 이동한 위치의 아이템을 선택하려면 Space 키 입력으로 선택합니다. |
| 아이템 선택이동 | 상하좌우방향키 | 아이템 항목을 순서대로 이동합니다.  (상 또는 좌 방향키: 이전 아이템, 하 또는 우 방향키: 다음 아이템)  이동된 아이템이 선택된 상태로 변경되고 변경된 값을 value 속성에 반영합니다. |
| 아이템 결정 | Space | 이동된 위치의 아이템을 선택 결정하여 value 속성에 반영합니다. |

## 63.1.5Accessibility Key Action

```
- 접근성 기능이 활성화되어 있을 때 적용되는 키 액션입니다.
- Environment 오브젝트 accessibilitysearchkey 속성값이 false인 경우
  Basic Key Action 기준으로 동작합니다.
  스크린 리더를 사용하는 경우에는 스크린 리더에서 제공하는 Key Action에 따라 동작합니다.
```

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다.    index 속성값이 -1이 아닌 경우에는 해당 index의 아이템이 선택된 상태가 됩니다.  index 속성값이 -1인 경우에는 첫 번째 또는 마지막 index의 아이템 위치로 이동합니다. 이동한 위치의 아이템을 선택하려면 Space 키 입력으로 선택합니다. |
| 선택상자 이동 | 상하방향키 | 아이템 항목을 이동합니다.  이동된 위치의 아이템은 자동으로 선택되지 않습니다.  이동된 위치의 아이템을 선택하려면 Space 를 입력하여야 합니다.    첫번째 또는 마지막 아이템에서 위/아래 방향키 입력 시 Tab Order 가 이전/다음인 컴포넌트로 선택상자가 이동합니다. |
| 아이템 선택이동 | 좌우방향키 | 아이템 항목을 순서대로 이동합니다.    이동된 아이템이 선택된 상태로 변경됩니다. |
| 아이템 결정 | Space | 이동된 위치의 아이템을 선택 결정하여 value 속성에 반영합니다. |

## 63.1.6생성자

```
Radio.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | Radio 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | Radio 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 Radio 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Radio 의 left 가 결정됩니다. |
| vTop | String, Number | Radio 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 Radio 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Radio 의 top 이 결정됩니다. |
| vWidth | String, Number | Radio 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Radio 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Radio 의 width 가 결정됩니다. |
| vHeight | String, Number | Radio 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Radio 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Radio 의 height 가 결정됩니다. |
| vRight | String, Number | Radio 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 Radio 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Radio 의 right 가 결정됩니다. |
| vBottom | String, Number | Radio 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 Radio 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Radio 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | Radio 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | Radio 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | Radio 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | Radio 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new Radio();  objComp.init( "Radio00", 30, 120, 196, 46 ); objComp.init( "Radio00", 30, 120, 196, 46, null, null ); objComp.init( "Radio00", null, null, 300, "400px", "80%", 300 ); objComp.init( "Radio00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "Radio00", "Radio22:10", 300, null, null, "Radio33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objRadio = new Radio();   objRadio.init("Radio", 30, 120, 196, 46, null, null); objRadio.init("Radio", null, null, 300, "400px", "80%", 300); or var objRadio = new Radio("Radio", 30, 120, 196, 46, null, null); var objRadio = new Radio("Radio", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("Radio", objRadio);    // Insert Object to Parent Form   this.insertChild(1, "Radio", objRadio);    // Remove Object form Parent Form   this.removeChild("Radio");    // Show Object   objRadio.show();    // Destroy Object   objRadio.destroy();  objRadio = null; ``` |

## 63.1.7Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 63.1.8Control

| Name | | TypeName |
| --- | --- | --- |
| radioitem | | nexacro.RadioItemControl |
