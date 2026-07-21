# 23.Combo

23.1개요

23.2속성

23.3메서드

23.4이벤트

```
Combo 는 미리 설정된 아이템 리스트에서 한 개의 아이템을 선택하기 위한 용도로 사용되는 컴포넌트입니다.
```

## 23.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- Combo 를 사용하려면 innerdataset 속성으로 아이템 리스트를 미리 설정해 주어야 합니다.
   innerdataset 속성으로 설정된 아이템 리스트는 참조대상일뿐 값을 변경하는 대상은 아닙니다.

- codecolumn, datadolumn 속성으로 화면에 표시되는 텍스트와 실제 내부에서 갖는 값을 다르게 처리할 수 있습니다.

- 검색/필터 기능을 사용하면 아이템 리스트에 특정 아이템만 표시할 수 있습니다.
   type 속성으로 검색/필터 기능을 사용하면 1~2 글자를 입력하는 것으로  특정 아이템만 빠르게 표시할 수 있습니다.

- Combo 의 편집창이 활성화 상태일때 일본어 IME 로 일본어 입력(조합중이고 확정이 안된 상태)중이면 붙여넣기 기능이 동작하지 않습니다.
```

## 23.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_04_Combo.png?raw=true)

## 23.1.3컴포넌트, 내부 컨텐츠 크기

```
Combo 컴포넌트와 내부 컨텐츠 크기를 결정하는 기준입니다.
```

|  |  |
| --- | --- |
| Combo Component | |
| Width | Combo 컴포넌트의 width 속성값이 적용됩니다.  내부 컨텐츠의 Width 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
| Height | Combo 컴포넌트의 height 속성값이 적용됩니다.  내부 컨텐츠의 Height 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
| comboedit Control | |
| Left | 0 으로 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | Combo 컴포넌트의 Width 에서 dropbutton 컨트롤의 Width 를 뺀 값이 적용됩니다. |
| Height | Combo 컴포넌트의 Height 가 적용됩니다. |
| dropbutton Control | |
| Left | Combo 컴포넌트의 Width 에서 dropbutton 컨트롤의 Width 를 뺀 값이 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | buttonsize 속성값이 적용됩니다.  buttonsize 속성값이 없으면 Combo 컴포넌트의 Height 가 적용됩니다. |
| Height | Combo 컴포넌트의 Height 가 적용됩니다. |
| combolist Control | |
| Left | Combo 컴포넌트의 left 속성값이 적용됩니다.  Combo 컴포넌트의 오른쪽에 combolist 컨트롤이 표시될 공간이 없다면 왼쪽 공간에 맞게 재계산되어 적용됩니다. |
| Top | Combo 컴포넌트의 bottom 속성값이 적용됩니다.  Combo 컴포넌트의 아랫쪽에 combolist 컨트롤이 표시될 공간이 없다면 윗쪽 공간에 맞게 재계산되어 적용됩니다. |
| Width | listboxitem 컨트롤의 Width 가 적용됩니다.  combolist 컨트롤이 표시될 공간의 너비보다 클 경우 자동으로 재계산되어 적용됩니다. |
| Height | Combo 컴포넌트의 displayrowcount 속성값에 listboxitem 컨트롤의 Height 를 곱한값이 적용됩니다.  Combo 컴포넌트의 displayrowcount 속성값이 없으면 listboxitem 컨트롤의 갯수에 listboxitem 컨트롤의 Height 를 곱한값이 적용됩니다. |
| listboxitem Control | |
| Left | 0 으로 적용됩니다. |
| Top | listboxitem 컨트롤의 갯수와 listboxitem 컨트롤의 Height 에 따라 각 아이템별로 계산된 값이 적용됩니다. |
| Width | listboxitem 에 표시되는 텍스트 중 가장 긴 텍스트에 맞게 계산된 값이 적용됩니다. |
| Height | Combo 컴포넌트의 itemheight 속성값이 적용됩니다.  Combo 컴포넌트의 itemheight 속성값이 없으면 텍스트 크기에 맞게 계산된 값이 적용됩니다. |

## 23.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| ComboList 열기 | Alt + 아래방향키 또는 Option + 아래방향키 | ComboList 가 표시됩니다. |
| ComboList 닫기 | ESC | 열려있는 ComboList를 닫습니다. |
| 아이템 이동 | 상하방향키 | 아이템 항목을 이동합니다.  ComboList가 열린 상태에서 이동된 위치의 아이템을 결정하려면 Enter 를 입력하여야 합니다. |
| 아이템 결정 | Enter | 이동된 위치의 아이템을 선택 결정하여 value 속성에 반영합니다. |
| 스크롤 이동(페이지) | PageUp/PageDown | ComboList에 vscrollbar가 활성화됐을 때 페이지 단위(화면에 표시되는 아이템 개수)로 스크롤합니다.  이동된 위치의 아이템을 결정하려면 Enter 키를 입력해야 합니다. |
| 스크롤 이동(최상단/최하단) | Home/End | ComboList에 vscrollbar가 활성화됐을 때 최상단 또는 최하단으로 스크롤합니다.  이동된 위치의 아이템을 결정하려면 Enter 키를 입력해야 합니다.  type 속성값이 "dropdown"일때만 스크롤 동작에 반영되며 그 외의 경우에는 comboedit 캐럿 위치에 반영됩니다. |

## 23.1.5Accessibility Key Action

```
접근성 기능이 활성화 되어 있을 때 적용되는 키 액션입니다.
```

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 선택상자 이동 | 상하방향키 | Tab Order 가 이전/다음인 컴포넌트로 선택상자가 이동합니다. |
| ComboList 열기 | Alt + 아래방향키 또는 Option + 아래방향키 | ComboList 가 표시됩니다. |
| ComboList 열기 | Enter | type 속성값이 "dropdown"인 경우에만 사용할 수 있습니다.  ComboList가 표시됩니다. |
| ComboList 닫기 | ESC | 열려있는 ComboList를 닫습니다. |
| 아이템 이동 | Ctrl + 상하방향키 | ComboList가 닫힌 상태에서 아이템 항목을 이동합니다. |
| 아이템 이동 | 상하방향키 | ComboList가 열린 상태에서 아이템 항목을 이동합니다.  이동된 위치의 아이템을 결정하려면 Enter 를 입력하여야 합니다. |
| 아이템 결정 | Enter | 이동된 위치의 아이템을 선택 결정하여 value 속성에 반영합니다. |
| 스크롤 이동(페이지) | PageUp/PageDown | ComboList에 vscrollbar가 활성화됐을 때 페이지 단위(화면에 표시되는 아이템 개수)로 스크롤합니다.  이동된 위치의 아이템을 결정하려면 Enter 키를 입력해야 합니다. |
| 스크롤 이동(최상단/최하단) | Home/End | ComboList에 vscrollbar가 활성화됐을 때 최상단 또는 최하단으로 스크롤합니다.  이동된 위치의 아이템을 결정하려면 Enter 키를 입력해야 합니다.  type 속성값이 "dropdown"일때만 스크롤 동작에 반영되며 그 외의 경우에는 comboedit 캐럿 위치에 반영됩니다. |

## 23.1.6생성자

```
Combo.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | Combo 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | Combo 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 Combo 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Combo 의 left 가 결정됩니다. |
| vTop | String, Number | Combo 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 Combo 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Combo 의 top 이 결정됩니다. |
| vWidth | String, Number | Combo 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Combo 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Combo 의 width 가 결정됩니다. |
| vHeight | String, Number | Combo 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Combo 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Combo 의 height 가 결정됩니다. |
| vRight | String, Number | Combo 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 Combo 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Combo 의 right 가 결정됩니다. |
| vBottom | String, Number | Combo 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 Combo 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Combo 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | Combo 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | Combo 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | Combo 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | Combo 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new Combo();  objComp.init( "Combo00", 30, 120, 196, 46 ); objComp.init( "Combo00", 30, 120, 196, 46, null, null ); objComp.init( "Combo00", null, null, 300, "400px", "80%", 300 ); objComp.init( "Combo00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "Combo00", "Combo22:10", 300, null, null, "Combo33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objCombo = new Combo();   objCombo.init("Combo", 30, 120, 196, 46, null, null); objCombo.init("Combo", null, null, 300, "400px", "80%", 300); or var objCombo = new Combo("Combo", 30, 120, 196, 46, null, null); var objCombo = new Combo("Combo", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("Combo", objCombo);    // Insert Object to Parent Form   this.insertChild(1, "Combo", objCombo);    // Remove Object form Parent Form   this.removeChild("Combo");    // Show Object   objCombo.show();    // Destroy Object   objCombo.destroy();  objCombo = null; ``` |

## 23.1.7Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 23.1.8Control

| Name | | TypeName |
| --- | --- | --- |
| dropbutton | | nexacro.Button |
| comboedit | | nexacro.Edit |
| combolist | | nexacro.ListBox |
