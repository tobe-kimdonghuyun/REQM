# 53.MultiCombo

53.1개요

53.2속성

53.3메서드

53.4이벤트

```
MultiCombo는 미리 설정된 아이템 리스트에서 여러 개의 아이템을 선택하기 위한 용도로 사용되는 컴포넌트입니다.
```

## 53.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

## 53.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacroN_MultiCombo3.png?raw=true)

## 53.1.3컴포넌트, 내부 컨텐츠 크기

```
edittype 속성값이 "text" 또는 "count" 일 때 MultiCombo 컴포넌트와 내부 콘텐츠 크기를 결정하는 기준입니다.
```

|  |  |
| --- | --- |
| MultiCombo Component | |
| Width | MultiCombo 컴포넌트의 width 속성값이 적용됩니다.  내부 콘텐츠의 Width 보다 작을 경우 내부 콘텐츠가 잘려서 표시됩니다. |
| Height | MultiCombo 컴포넌트의 height 속성값이 적용됩니다.  내부 콘텐츠의 Height 보다 작을 경우 내부 콘텐츠가 잘려서 표시됩니다. |
| multicombotext Control | |
| Left | 0으로 적용됩니다. |
| Top | 0으로 적용됩니다. |
| Width | MultiCombo 컴포넌트의 Width에서 dropbutton 컨트롤의 Width를 뺀 값이 적용됩니다. |
| Height | MultiCombo 컴포넌트의 Height 가 적용됩니다. |
| dropbutton Control | |
| Left | MultiCombo 컴포넌트의 Width 에서 dropbutton 컨트롤의 Width 를 뺀 값이 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | buttonsize 속성값이 적용됩니다.  buttonsize 속성값이 없으면 MultiCombo 컴포넌트의 Height 가 적용됩니다. |
| Height | MultiCombo 컴포넌트의 Height 가 적용됩니다. |
| multicomboedit Control(type 속성값이 "dropdown"일 때) | |
| - | type 속성값이 "dropdown"일 경우, 표시되지 않습니다. |
| multicomboedit Control(type 속성값이 "dropdown"이 아닐 때) | |
| Left | 0으로 적용됩니다. |
| Top | 0으로 적용됩니다. |
| Width | MultiCombo 컴포넌트의 Width가 적용됩니다. |
| Height | textsize + padding값이 적용됩니다. |
| checkboxset Control | |
| Left | MultiCombo 컴포넌트의 left 속성값이 적용됩니다.  MultiCombo 컴포넌트의 오른쪽에 multicombolist 컨트롤이 표시될 공간이 없다면 왼쪽 공간에 맞게 재계산되어 적용됩니다. |
| Top | MultiCombo 컴포넌트의 bottom 속성값이 적용됩니다.  MultiCombo 컴포넌트의 아래쪽에 multicombolist 컨트롤이 표시될 공간이 없다면 위쪽 공간에 맞게 재계산되어 적용됩니다.     * dropdown이 아닌 경우, multicomboedit의 Height가 추가되어 적용됩니다. * selectallcheckbox가 있으면 selectallcheckbox의 Height로 추가되어 적용됩니다. |
| Width | checkboxsetitem 컨트롤의 Width 가 적용됩니다.  multicombolist 컨트롤이 표시될 공간의 너비보다 클 경우 자동으로 재계산되어 적용됩니다.     * selectallcheckbox가 있으면 selectallcheckbox의 Width와 비교하여 큰 값으로 적용됩니다. |
| Height | MultiCombo 컴포넌트의 displayrowcount 속성값에 checkboxsetitem 컨트롤의 Height를 곱한 값이 적용됩니다.  MultiCombo 컴포넌트의 displayrowcount 속성값이 없으면 checkboxsetitem 컨트롤의 개수에 checkboxsetitem 컨트롤의 Height를 곱한 값이 적용됩니다. |
| checkboxsetitem Control | |
| Left | 0 으로 적용됩니다. |
| Top | checkboxsetitem 컨트롤의 갯수와 checkboxsetitem 컨트롤의 Height 에 따라 각 아이템별로 계산된 값이 적용됩니다. |
| Width | checkboxsetitem 에 표시되는 텍스트 중 가장 긴 텍스트에 맞게 계산된 값이 적용됩니다. |
| Height | MultiCombo 컴포넌트의 itemheight 속성값이 적용됩니다.  MultiCombo 컴포넌트의 itemheight 속성값이 없으면 텍스트 크기에 맞게 계산된 값이 적용됩니다. |
| selectallcheckbox Control | |
| Left | 0으로 적용됩니다. |
| Top | 0으로 적용됩니다.  Dropdown이 아닌 경우, multicomboedit의 Height가 추가되어 적용됩니다. |
| Width | 적용된 fontsize에 따라서 크기가 적용됩니다.  Multicombolist의 크기보다 작으면 popupsize만큼 크기가 적용됩니다. |
| Height | MultiCombo 컴포넌트의 selectallcheckboxheight 속성값이 적용됩니다.  MultiCombo 컴포넌트의 selectallcheckboxheight 속성값이 없으면 텍스트 크기에 맞게 계산된 값이 적용됩니다. |

```
edittype 속성값이 "singletag" 또는 "multitag"일 때 MultiCombo 컴포넌트와 내부 콘텐츠 크기를 결정하는 기준입니다.
```

|  |  |
| --- | --- |
| tagboxedit Control(type 속성값이 "dropdown"일 때) | |
| - | type 속성값이 "dropdown"일 경우, 표시되지 않습니다. |
| tagboxedit Control(type 속성값이 "dropdown"이 아닐 때) | |
| Left | 0으로 적용됩니다.  아이템을 선택한 경우 마지막 tagboxitem의 left+width값이 적용됩니다.  edit\_left + edit\_width가 tagbox의 width를 초과하였을 때 다시 0으로 적용됩니다. |
| Top | 0으로 적용됩니다.  아이템을 선택한 경우 마지막 tagboxitem의 top값이 적용됩니다.  edit\_left + edit\_width가 tagbox의 width를 초과하였을 때 마지막 tagboxitem의 top+height값이 적용됩니다. |
| Width | multitagtagbox의 width값의 1/3이 적용됩니다. |
| Height | textsize + padding값이 적용됩니다. |
| dropbutton Control | |
| Left | MultiCombo 컴포넌트의 Width 에서 dropbutton 컨트롤의 Width 를 뺀 값이 적용됩니다. |
| Top | 0으로 적용됩니다. |
| Width | buttonsize 속성값이 적용됩니다.  buttonsize 속성값이 없으면 MultiCombo 컴포넌트의 Height 가 적용됩니다. |
| Height | MultiCombo 컴포넌트의 Height 가 적용됩니다. |
| multicombotagbox Control | |
| Left | 0 으로 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | MultiCombo 컴포넌트의 Width 에서 dropbutton 컨트롤의 Width 를 뺀 값이 적용됩니다. |
| Height | MultiCombo 컴포넌트의 Height 가 적용됩니다. |
| tagboxitem Control | |
| Left | 0으로 적용됩니다.  아이템을 선택한 경우 tag\_width + marginsize를 누적하며 계산하여 적용됩니다.     * multitag인 경우 누적된 width+tagwidth+marginsize(=5)가 tagbox 크기를 초과하면 다시 0으로 적용됩니다. |
| Top | 0으로 적용됩니다.     * multitag인 경우 누적된 width+tagwidth+marginsize(=5)가 tagbox 크기를 초과할 때마다   tag\_height+marginsize(=5) 값을 누적하며 계산하여 적용됩니다. |
| Width | tagtext 컨트롤의 Width와 tagbutton 컨트롤의 Width와 tagboxitem 컨트롤의 padding.left/right + border.width 값을 더한 값이 적용됩니다. |
| Height | tagtext 컨트롤의 Height와 tagboxitem 컨트롤의 padding.top/bottom + border.width 값을 더한 값이 적용됩니다. |
| tagtext Control | |
| Left | 0 으로 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | 텍스트 크기에 맞게 계산된 값이 적용됩니다. |
| Height | 텍스트 크기에 맞게 계산된 값이 적용됩니다. |
| tagbutton Control | |
| Left | tagtext 컨트롤의 Width 와 multicombotag 컨트롤의 padding 값을 더한 값이 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | tagtext 컨트롤의 Height 가 적용됩니다. |
| Height | tagtext 컨트롤의 Height 가 적용됩니다. |

## 53.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| MultiComboList 열기 | Alt + 아래방향키 또는 Option + 아래방향키 | MultiComboList 가 표시됩니다. |
| 아이템 이동 | 상하방향키 | 아이템 항목을 이동합니다.  이동된 위치의 아이템을 결정하려면 Ctrl + Space 를 입력하여야 합니다. |
| 아이템 이동취소 | ESC | 아이템 항목을 이동했을 때 원래 위치로 이동을 취소합니다.  Ctrl + Space 입력으로 이동된 위치의 아이템이 결정된 상태에서는 위치이동을 취소할 수 없습니다. |
| 아이템 결정 | Enter | 이동된 위치의 아이템을 선택 결정하여 value 속성에 반영합니다. |
| 아이템 선택/선택취소 | Ctrl + Space | 하나의 아이템을 선택하거나 선택 취소합니다. |
| 전체 선택/선택취소 | Alt + A | 전체 아이템을 선택하거나 선택 취소합니다. |
| 영역 선택/선택취소 | Shift + 상하방향키 | 연속된 영역의 아이템을 선택하거나 선택 취소합니다. |
| 스크롤 이동(페이지) | PageUp/PageDown | MultiComboList에 vscrollbar가 활성화됐을 때 페이지 단위(화면에 표시되는 아이템 개수)로 스크롤합니다.  이동된 위치의 아이템을 결정하려면 Ctrl + Space 키를 입력해야 합니다. |
| 스크롤 이동(최상단/최하단) | Home/End | MultiComboList에 vscrollbar가 활성화됐을 때 최상단 또는 최하단으로 스크롤합니다.  이동된 위치의 아이템을 결정하려면 Enter 키를 입력해야 합니다.  type 속성값이 "dropdown"일때만 스크롤 동작에 반영되며 그 외의 경우에는 multicomboedit 캐럿 위치에 반영됩니다. |
| tagboxitem 선택 | 좌우방향키 | type 속성값이 "dropdown"인 경우, tagboxitem 선택이 안되어 있을 때 좌 방향키를 누르면 마지막에 추가된 tagboxitem이 선택됩니다.  type 속성값이 "dropdown"이 아닌 경우, 편집영역에 포커스가 있고 caret 위치가 0인 상태에서 좌 방향키를 누르면 마지막에 추가된 tagboxitem이 선택됩니다.    아래와 같은 동작 제약이 있습니다.  - 편집 영역의 caret 위치가 0이 아닌 경우엔 동작하지 않습니다.  - 마지막 tagboxitem가 선택되어 있는 상태에서 우 방향키를 누르면 tagboxitem 선택이 해제되며 편집영역에 포커스가 들어갑니다.    편집영역에 포커스가 들어갈 때와 다른 컴포넌트로 포커스가 이동할 때 선택된 tagboxitem이 있다면 tagboxitem 선택이 해제됩니다. |
| tagboxitem 삭제 | Delete | 현재 선택되어 있는 tagboxitem을 삭제합니다.  삭제 후 다음 tagboxitem이 선택됩니다.  마지막 tagboxitem을 삭제했을 때는 선택된 tagboxitem의 이전 tagboxitem이 선택됩니다. |

## 53.1.5Accessibility Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 선택상자 이동 | 상하방향키 | Tab Order 가 이전/다음인 컴포넌트로 선택상자가 이동합니다. |
| MultiComboList 열기 | Alt + 아래방향키 또는 Option + 아래방향키 | MultiComboList 가 표시됩니다. |
| 아이템 이동 | Ctrl + 상하방향키 | 아이템 항목을 이동합니다.  이동된 위치의 아이템을 결정하려면 Enter 를 입력하여야 합니다. |
| 아이템 이동취소 | ESC | 아이템 항목을 이동했을 때 원래 위치로 이동을 취소합니다.  Enter 입력으로 이동된 위치의 아이템이 결정된 상태에서는 위치이동을 취소할 수 없습니다. |
| 아이템 결정 | Enter | 이동된 위치의 아이템을 선택 결정하여 value 속성에 반영합니다. |
| 아이템 선택/선택취소 | Ctrl + Space | 하나의 아이템을 선택하거나 선택 취소합니다. |
| 전체 선택/선택취소 | Shift + A | 전체 아이템을 선택하거나 선택 취소합니다. |
| 영역 선택/선택취소 | Shift + 상하방향키 | 연속된 영역의 아이템을 선택하거나 선택 취소합니다. |
| 스크롤 이동(페이지) | PageUp/PageDown | MultiComboList에 vscrollbar가 활성화됐을 때 페이지 단위(화면에 표시되는 아이템 개수)로 스크롤합니다.  이동된 위치의 아이템을 결정하려면 Enter 키를 입력해야 합니다. |
| 스크롤 이동(최상단/최하단) | Home/End | MultiComboList에 vscrollbar가 활성화됐을 때 최상단 또는 최하단으로 스크롤합니다.  이동된 위치의 아이템을 결정하려면 Enter 키를 입력해야 합니다.  type 속성값이 "dropdown"일때만 스크롤 동작에 반영되며 그 외의 경우에는 multicomboedit 캐럿 위치에 반영됩니다. |

## 53.1.6생성자

```
MultiCombo.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | MultiCombo 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | MultiCombo 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 MultiCombo 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 MultiCombo 의 left 가 결정됩니다. |
| vTop | String, Number | MultiCombo 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 MultiCombo 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 MultiCombo 의 top 이 결정됩니다. |
| vWidth | String, Number | MultiCombo 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 MultiCombo 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 MultiCombo 의 width 가 결정됩니다. |
| vHeight | String, Number | MultiCombo 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 MultiCombo 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 MultiCombo 의 height 가 결정됩니다. |
| vRight | String, Number | MultiCombo 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 MultiCombo 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 MultiCombo 의 right 가 결정됩니다. |
| vBottom | String, Number | MultiCombo 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 MultiCombo 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 MultiCombo 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | MultiCombo 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | MultiCombo 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | MultiCombo 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | MultiCombo 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new MultiCombo();  objComp.init( "MultiCombo00", 30, 120, 196, 46 ); objComp.init( "MultiCombo00", 30, 120, 196, 46, null, null ); objComp.init( "MultiCombo00", null, null, 300, "400px", "80%", 300 ); objComp.init( "MultiCombo00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "MultiCombo00", "MultiCombo22:10", 300, null, null, "MultiCombo33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objMultiCombo = new MultiCombo();   objMultiCombo.init("MultiCombo", 30, 120, 196, 46, null, null); objMultiCombo.init("MultiCombo", null, null, 300, "400px", "80%", 300); or var objMultiCombo = new MultiCombo("MultiCombo", 30, 120, 196, 46, null, null); var objMultiCombo = new MultiCombo("MultiCombo", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("MultiCombo", objMultiCombo);    // Insert Object to Parent Form   this.insertChild(1, "MultiCombo", objMultiCombo);    // Remove Object form Parent Form   this.removeChild("MultiCombo");    // Show Object   objMultiCombo.show();    // Destroy Object   objMultiCombo.destroy();  objMultiCombo = null; ``` |

## 53.1.7Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 53.1.8Control

| Name | | TypeName |
| --- | --- | --- |
| dropbutton | | nexacro.Button |
| multicombolist | | nexacro.MultiComboListControl |
| multicombotext | | nexacro.Edit |
| multicombotagbox | | nexacro.MultiComboTagBoxControl |
