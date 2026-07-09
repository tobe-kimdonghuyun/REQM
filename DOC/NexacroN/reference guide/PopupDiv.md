# 96.PopupDiv

96.1개요

96.2속성

96.3메서드

96.4이벤트

```
PopupDiv는 하나의 화면에 여러개의 부분화면을 구성할 때 사용하는 컴포넌트입니다.

PopupDiv로 구성하게 되면 주 화면과 독립적 또는 연계하여 화면을 구성할 수 있습니다.
Div 컴포넌트와 비슷하나 PopupDiv 는 포커스를 잃게 되면 자동으로 사라지게 됩니다.
```

## 96.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- PopupDiv는 화면의 구성을 수월하게 하고, 화면을 분할해서, Form에 대한 재사용성을 높일 수있습니다.
  그러나 PopupDiv의 단계수가 늘어나게 되면, 화면의 구성이 느려지게 되고, 초기화 시간을 길게 만듭니다.

- PopupDiv를 사용할 때에는 2~3단계정도의 깊이로 사용하는 것이 효율적입니다.
  1개의 화면에 대해 2~3단계의 PopupDiv가 다수있는 쪽이 4~5단계의 PopupDiv를 사용하는 것보다 화면 구성이 빠릅니다.
```

## 96.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_18_PopupDiv1.png?raw=true)

## 96.1.3컴포넌트, 내부 컨텐츠 크기

```
PopupDiv 컴포넌트의 크기를 결정하는 기준입니다.
```

|  |  |
| --- | --- |
| PopupDiv Component     * PopupDiv 에 속한 컴포넌트가 PopupDiv 컴포넌트의 영역을 벗어난 경우 vscrollbar, hscrollbar 가 표시됩니다. | |
| Left | trackPopup 또는 trackPopupByComponent 메소드의 파라미터 값으로 적용됩니다.  적용된 Left 값이 PopupDiv 가 표시되는 영역에서 벗어났을 경우 영역 내부에 표시될 수 있도록 재계산되어 적용됩니다. |
| Top | trackPopup 또는 trackPopupByComponent 메소드의 파라미터 값으로 적용됩니다.  적용된 Top 값이 PopupDiv 가 표시되는 영역에서 벗어났을 경우 영역 내부에 표시될 수 있도록 재계산되어 적용됩니다. |
| Width | trackPopup 또는 trackPopupByComponent 메소드의 파라미터 값으로 적용됩니다.  파라미터 값이 생략되었으면 디자인 시 설정한 width 속성값이 적용됩니다.  적용된 Width 값이 PopupDiv 가 표시되는 영역보다 클 경우 너비에 맞게 재계산되어 적용됩니다. |
| Height | trackPopup 또는 trackPopupByComponent 메소드의 파라미터 값으로 적용됩니다.  파라미터 값이 생략되었으면 디자인 시 설정한 height 속성값이 적용됩니다.  적용된 Height 값이 PopupDiv 가 표시되는 영역보다 클 경우 높이에 맞게 재계산되어 적용됩니다. |
| Form | |
| Left | 0 으로 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | PopupDiv 컴포넌트의 Width 가 적용됩니다. |
| Height | PopupDiv 컴포넌트의 Height 가 적용됩니다. |

## 96.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 스크롤 이동 | Ctrl + 방향키 | PopupDiv 또는 자식 컴포넌트에 포커스가 있고, PopupDiv 에 스크롤이 있을 때 입력된 방향키 방향으로 스크롤이 이동합니다. |

## 96.1.5생성자

```
PopupDiv.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | PopupDiv 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | PopupDiv 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 PopupDiv 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 PopupDiv 의 left 가 결정됩니다. |
| vTop | String, Number | PopupDiv 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 PopupDiv 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 PopupDiv 의 top 이 결정됩니다. |
| vWidth | String, Number | PopupDiv 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 PopupDiv 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 PopupDiv 의 width 가 결정됩니다. |
| vHeight | String, Number | PopupDiv 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 PopupDiv 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 PopupDiv 의 height 가 결정됩니다. |
| vRight | String, Number | PopupDiv 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 PopupDiv 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 PopupDiv 의 right 가 결정됩니다. |
| vBottom | String, Number | PopupDiv 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 PopupDiv 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 PopupDiv 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | PopupDiv 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | PopupDiv 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | PopupDiv 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | PopupDiv 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new PopupDiv();  objComp.init( "PopupDiv00", 30, 120, 196, 46 ); objComp.init( "PopupDiv00", 30, 120, 196, 46, null, null ); objComp.init( "PopupDiv00", null, null, 300, "400px", "80%", 300 ); objComp.init( "PopupDiv00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "PopupDiv00", "PopupDiv22:10", 300, null, null, "PopupDiv33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objPopupDiv = new PopupDiv();   objPopupDiv.init("PopupDiv", 30, 120, 196, 46, null, null); objPopupDiv.init("PopupDiv", null, null, 300, "400px", "80%", 300); or var objPopupDiv = new PopupDiv("PopupDiv", 30, 120, 196, 46, null, null); var objPopupDiv = new PopupDiv("PopupDiv", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("PopupDiv", objPopupDiv);    // Insert Object to Parent Form   this.insertChild(1, "PopupDiv", objPopupDiv);    // Remove Object form Parent Form   this.removeChild("PopupDiv");    // Show Object   objPopupDiv.show();    // Destroy Object   objPopupDiv.destroy();  objPopupDiv = null; ``` |

## 96.1.6Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |
