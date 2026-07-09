# 60.PopupMenu

60.1개요

60.2속성

60.3메서드

60.4이벤트

```
PopupMenu는 Menu 컴포넌트의 하위 메뉴를 구성하는 컴포넌트입니다.

trackPopup() 메소드를 사용하여 호출할 수 있습니다.
```

## 60.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

## 60.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_19_PopupMenu1.png?raw=true)

## 60.1.3Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 메뉴 이동 | 상하방향키 | 팝업메뉴 또는 서브메뉴 항목을 이동합니다.  이동된 위치의 메뉴 항목을 실행하려면 Enter 를 입력하여야 합니다. |
| 메뉴 실행 | Enter | 이동된 위치의 메뉴를 실행하여 onmenuclick 이벤트가 발생합니다.    이동된 위치의 메뉴에 서브메뉴가 있을 경우 서브메뉴가 확장됩니다. |
| 서브메뉴 확장 | 좌우방향키 | 서브메뉴를 확장합니다. |
| 서브메뉴 닫기 | ESC | 서브메뉴로 표시된 메뉴를 닫습니다.    PopupMenu 는 닫히지 않습니다. |

## 60.1.4생성자

```
PopupMenu.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | PopupMenu 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | PopupMenu 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 PopupMenu 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 PopupMenu 의 left 가 결정됩니다. |
| vTop | String, Number | PopupMenu 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 PopupMenu 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 PopupMenu 의 top 이 결정됩니다. |
| vWidth | String, Number | PopupMenu 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 PopupMenu 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 PopupMenu 의 width 가 결정됩니다. |
| vHeight | String, Number | PopupMenu 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 PopupMenu 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 PopupMenu 의 height 가 결정됩니다. |
| vRight | String, Number | PopupMenu 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 PopupMenu 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 PopupMenu 의 right 가 결정됩니다. |
| vBottom | String, Number | PopupMenu 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 PopupMenu 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 PopupMenu 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | PopupMenu 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | PopupMenu 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | PopupMenu 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | PopupMenu 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new PopupMenu();  objComp.init( "PopupMenu00", 30, 120, 196, 46 ); objComp.init( "PopupMenu00", 30, 120, 196, 46, null, null ); objComp.init( "PopupMenu00", null, null, 300, "400px", "80%", 300 ); objComp.init( "PopupMenu00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "PopupMenu00", "PopupMenu22:10", 300, null, null, "PopupMenu33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objPopupMenu = new PopupMenu();   objPopupMenu.init("PopupMenu", 30, 120, 196, 46, null, null); objPopupMenu.init("PopupMenu", null, null, 300, "400px", "80%", 300); or var objPopupMenu = new PopupMenu("PopupMenu", 30, 120, 196, 46, null, null); var objPopupMenu = new PopupMenu("PopupMenu", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("PopupMenu", objPopupMenu);    // Insert Object to Parent Form   this.insertChild(1, "PopupMenu", objPopupMenu);    // Remove Object form Parent Form   this.removeChild("PopupMenu");    // Show Object   objPopupMenu.show();    // Destroy Object   objPopupMenu.destroy();  objPopupMenu = null; ``` |

## 60.1.5Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 60.1.6Control

| Name | | TypeName |
| --- | --- | --- |
| popupmenuitem | | nexacro.PopupMenuItemControl |
| prevbutton | | nexacro.Button |
| nextbutton | | nexacro.Button |

```
* xtheme 에디터에서 prevbutton, nextbutton 컨트롤에 "focused" Status 를 정의할 수 있지만 실제로 Status 가 적용되지 않습니다.
  사용에 주의하여 주시기 바랍니다.
```
