# 51.Menu

51.1개요

51.2속성

51.3메서드

51.4이벤트

```
Menu는 사용자가 MenuBar를 구성하거나 PopupMenu를 구성하도록 하는 컴포넌트입니다.  

MenuBar는 단계를 가지는 계층적 메뉴를 구성할 수 있습니다.
PopupMenu는 MenuBar의 하위 메뉴로 구성되거나, 마우스의 오른쪽버튼을 눌렀을때 실행되는 PopupMenu로 사용됩니다.
Menu의 각 Item은 Enable/Disable을 지정할 수 있으며, Check 상태의 표현도 가능합니다.
그리고 동적으로 Menu의 Item을 추가하거나 삭제할 수 있습니다.
```

## 51.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- Menu는 DataSet과 바인딩해 각 Menu Item의 Level,Icon,Text,Enable을 각각 levelcolumn, iconcolumn, captioncolumn, enablecolumn 속성에 연결하여 사용할 수 있습니다. 

- trackPopup() 메소드를 사용해 마우스의 오른쪽 버튼을 눌렀을때 해당 마우스 위치에 PopupMenu를 출력할수 있습니다.
```

## 51.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_16_Menu1.png?raw=true)

## 51.1.3Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 메뉴 이동 | 상하방향키 | 메뉴 또는 서브메뉴 항목을 이동합니다.  이동된 위치의 메뉴 항목을 실행하려면 Enter 를 입력하여야 합니다. |
| 메뉴 실행 | Enter | 이동된 위치의 메뉴를 실행하여 onmenuclick 이벤트가 발생합니다.    이동된 위치의 메뉴에 서브메뉴가 있을 경우 서브메뉴가 확장됩니다. |
| 서브메뉴 확장 | 좌우방향키 | 서브메뉴를 확장합니다. |
| 서브메뉴 닫기 | ESC | 서브메뉴로 표시된 메뉴를 닫습니다. |

## 51.1.4Accessibility Key Action

```
접근성 기능이 활성화 되어 있을 때 적용되는 키 액션입니다.
```

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 선택상자 이동 | 상하방향키 | Tab Order 가 이전/다음인 컴포넌트로 선택상자가 이동합니다. |
| 메뉴 실행 | Enter | 이동된 위치의 메뉴를 실행하여 onmenuclick 이벤트가 발생합니다.    이동된 위치의 메뉴에 서브메뉴가 있을 경우 서브메뉴가 확장되고 첫번째 아이템으로 이동합니다. |
| 메뉴 이동 | 좌우방향키 | 메뉴 또는 서브메뉴 항목을 이동합니다.  이동된 위치의 메뉴 항목을 실행하려면 Enter 를 입력하여야 합니다. |
| 서브메뉴 닫기 | ESC | 서브메뉴로 표시된 메뉴를 닫습니다. |

## 51.1.5생성자

```
Menu.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | Menu 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | Menu 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 Menu 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Menu 의 left 가 결정됩니다. |
| vTop | String, Number | Menu 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 Menu 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Menu 의 top 이 결정됩니다. |
| vWidth | String, Number | Menu 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Menu 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Menu 의 width 가 결정됩니다. |
| vHeight | String, Number | Menu 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Menu 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Menu 의 height 가 결정됩니다. |
| vRight | String, Number | Menu 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 Menu 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Menu 의 right 가 결정됩니다. |
| vBottom | String, Number | Menu 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 Menu 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Menu 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | Menu 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | Menu 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | Menu 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | Menu 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new Menu();  objComp.init( "Menu00", 30, 120, 196, 46 ); objComp.init( "Menu00", 30, 120, 196, 46, null, null ); objComp.init( "Menu00", null, null, 300, "400px", "80%", 300 ); objComp.init( "Menu00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "Menu00", "Menu22:10", 300, null, null, "Menu33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objMenu = new Menu();   objMenu.init("Menu", 30, 120, 196, 46, null, null); objMenu.init("Menu", null, null, 300, "400px", "80%", 300); or var objMenu = new Menu("Menu", 30, 120, 196, 46, null, null); var objMenu = new Menu("Menu", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("Menu", objMenu);    // Insert Object to Parent Form   this.insertChild(1, "Menu", objMenu);    // Remove Object form Parent Form   this.removeChild("Menu");    // Show Object   objMenu.show();    // Destroy Object   objMenu.destroy();  objMenu = null; ``` |

## 51.1.6Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 51.1.7Control

| Name | | TypeName |
| --- | --- | --- |
| menupopupmenu | | nexacro.PopupMenu |
| menuitem | | nexacro.MenuItemControl |
| prevbutton | | nexacro.Button |
| nextbutton | | nexacro.Button |
