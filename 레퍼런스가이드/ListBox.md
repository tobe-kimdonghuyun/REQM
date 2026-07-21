# 48.ListBox

48.1개요

48.2속성

48.3메서드

48.4이벤트

```
ListBox 는 여러개의 후보값중에서 1 개 또는 여러개의 값을 선택하기위해 사용되는 컴포넌트입니다.

ListBox 는 여러개의 선택된 값을 출력하기위해서 사용되기도 합니다.
ListBox 의 Data 는 InnerBind 된 Dataset 을 통해 사용됩니다.
```

## 48.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
◆ Control 표시 참고

- scrollbartype 속성값 또는 실행 환경(Desktop, Mobile)에 따라 스크롤바 영역에 표시되는 컨트롤이 달라집니다. 조건에 따라 ScrollBarControl 또는 ScrollIndicatorControl 중 하나가 적용됩니다.
  도움말에서 Structure 항목의 이미지는 모든 조건에 동시에 표시할 수 없어 ScrollBarControl 기준으로만 작성된 점을 참고해주세요.
```

## 48.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_14_ListBox2.png?raw=true)

## 48.1.3컴포넌트, 내부 컨텐츠 크기

```
ListBox 의 크기를 결정하는 기준입니다.
```

|  |  |
| --- | --- |
| ListBox Component     * ListBox 의 Width 가 listboxitem 의 Width 중 가장 큰 Width 보다 작을 경우 hscrollbar 가 표시됩니다. * ListBox 의 Height 가 전체 listboxitem 의 Height 보다 작을 경우 vscrollbar 가 표시됩니다. | |
| Width | ListBox 컴포넌트의 width 속성값이 적용됩니다. |
| Height | ListBox 컴포넌트의 height 속성값이 적용됩니다. |
| listboxitem Control | |
| Left | 0 으로 적용됩니다. |
| Top | listboxitem 컨트롤의 갯수와 listboxitem 컨트롤의 Height 에 따라 각 아이템별로 계산된 값이 적용됩니다. |
| Width | listboxitem 에 표시되는 텍스트 중 가장 긴 텍스트에 맞게 계산된 값이 적용됩니다. |
| Height | ListBox 컴포넌트의 itemheight 속성값이 적용됩니다.  ListBox 컴포넌트의 itemheight 속성값이 없으면 텍스트 크기에 맞게 계산된 값이 적용됩니다. |

## 48.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 아이템 이동 | 상하방향키 | 아이템 항목을 이동합니다.  이동된 위치의 아이템이 자동으로 선택됩니다.    첫번째 또는 마지막 아이템에서 위/아래 방향키 입력 시 마지막 또는 첫번째 아이템으로 이동합니다. |
| 스크롤 이동 | Ctrl + 방향키 | vscrollbar가 활성화됐을 때 입력된 방향키 방향으로 스크롤합니다. |
| 스크롤 이동(페이지) | PageUp/PageDown | vscrollbar가 활성화됐을 때 페이지 단위(화면에 표시되는 아이템 개수)로 스크롤합니다.  이동된 위치의 아이템이 자동으로 선택됩니다. |
| 다중아이템 결정 | Shift+상하방향키 | multiselect 속성값이 true 일 때 다중아이템을 선택합니다.  Shift+상하방향키가 시작된 아이템을 기준으로 위 또는 아래 아이템이 연속적으로 선택됩니다. |

## 48.1.5Accessibility Key Action

```
접근성 기능이 활성화 되어 있을 때 적용되는 키 액션입니다.
```

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 선택상자 이동 | 상하방향키 | 아이템 항목을 이동합니다.  이동된 위치의 아이템은 자동으로 선택되지 않습니다.  이동된 위치의 아이템을 선택하려면 Space 또는 Enter 키를 입력해야 합니다    첫번째 또는 마지막 아이템에서 위/아래 방향키 입력 시 Tab Order 가 이전/다음인 컴포넌트로 선택상자가 이동합니다. |
| 아이템 결정 | Space | 이동된 위치의 아이템을 선택 결정하여 value 속성에 반영합니다. |
| 스크롤 이동 | Ctrl + 방향키 | vscrollbar가 활성화됐을 때 입력된 방향키 방향으로 스크롤합니다. |
| 스크롤 이동(페이지) | PageUp/PageDown | vscrollbar가 활성화됐을 때 페이지 단위(화면에 표시되는 아이템 개수)로 스크롤합니다.  이동된 위치의 아이템은 자동으로 선택되지 않습니다.  이동된 위치의 아이템을 선택하려면 Space 또는 Enter 키를 입력해야 합니다. |

## 48.1.6생성자

```
ListBox.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | ListBox 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | ListBox 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 ListBox 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 ListBox 의 left 가 결정됩니다. |
| vTop | String, Number | ListBox 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 ListBox 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 ListBox 의 top 이 결정됩니다. |
| vWidth | String, Number | ListBox 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 ListBox 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 ListBox 의 width 가 결정됩니다. |
| vHeight | String, Number | ListBox 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 ListBox 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 ListBox 의 height 가 결정됩니다. |
| vRight | String, Number | ListBox 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 ListBox 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 ListBox 의 right 가 결정됩니다. |
| vBottom | String, Number | ListBox 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 ListBox 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 ListBox 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | ListBox 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | ListBox 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | ListBox 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | ListBox 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new ListBox();  objComp.init( "ListBox00", 30, 120, 196, 46 ); objComp.init( "ListBox00", 30, 120, 196, 46, null, null ); objComp.init( "ListBox00", null, null, 300, "400px", "80%", 300 ); objComp.init( "ListBox00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "ListBox00", "ListBox22:10", 300, null, null, "ListBox33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objListBox = new ListBox();   objListBox.init("ListBox", 30, 120, 196, 46, null, null); objListBox.init("ListBox", null, null, 300, "400px", "80%", 300); or var objListBox = new ListBox("ListBox", 30, 120, 196, 46, null, null); var objListBox = new ListBox("ListBox", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("ListBox", objListBox);    // Insert Object to Parent Form   this.insertChild(1, "ListBox", objListBox);    // Remove Object form Parent Form   this.removeChild("ListBox");    // Show Object   objListBox.show();    // Destroy Object   objListBox.destroy();  objListBox = null; ``` |

## 48.1.7Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 48.1.8Control

| Name | | TypeName |
| --- | --- | --- |
| listboxitem | | nexacro.ListBoxItemControl |
| vscrollbar | | nexacro.ScrollBarControl |
| hscrollbar | | nexacro.ScrollBarControl |
| hscrollindicator | | nexacro.ScrollIndicatorControl |
| vscrollindicator | | nexacro.ScrollIndicatorControl |
