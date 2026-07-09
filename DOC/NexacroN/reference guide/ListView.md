# 84.ListView

84.1개요

84.2속성

84.3메서드

84.4이벤트

```
ListView 는 Dataset 의 내용을 아이템 단위로 표현하는 컴포넌트입니다.
```

## 84.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- ListView 는 항상 Dataset 과 바인딩하여 사용합니다. 
   Dataset 에 변경 사항이 생기면 ListView 에 반영되고, 반대로 ListView 에 변경 사항이 생기면 Dataset 에 반영됩니다. 

- ListView 는 Body, Detail 영역의 밴드로 구성되며, 각 밴드는 Cell 을 기본 단위로 구성됩니다.
   바인드 된 Dataset 의 Column 과 각 Cell 을 맵핑해서 사용할수 있습니다.
   Cell 은 Combo, CheckBox, Image, ProgressBar, Edit 등의 컨트롤을 포함 할 수 있어 다양한 디자인 및 편집이 가능합니다.

- Body, Detail 밴드는 바인딩된 Dataset 의 레코드를 보여줍니다.
   ContentsEditor 를 통해서 디자인한 Body, Detail 밴드의 아이템은 Dataset 의 한 레코드와 맵핑됩니다.
   즉, Dataset 의 한 레코드를 보기 쉽게 표현하려면 ListView 의 Body, Detail 밴드로 나누어 구성할 수 있습니다.

- Cell 이 Edit, TextArea, Combo 형식이고 편집창이 활성화 상태일때 일본어 IME 로 일본어 입력(조합중이고 확정이 안된 상태)중이면 붙여넣기 기능이 동작하지 않습니다.


◆ Control 표시 참고

- scrollbartype 속성값 또는 실행 환경(Desktop, Mobile)에 따라 스크롤바 영역에 표시되는 컨트롤이 달라집니다. 조건에 따라 ScrollBarControl 또는 ScrollIndicatorControl 중 하나가 적용됩니다.
  도움말에서 Structure 항목의 이미지는 모든 조건에 동시에 표시할 수 없어 ScrollBarControl 기준으로만 작성된 점을 참고해주세요.
```

## 84.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_39_ListView.png?raw=true)

## 84.1.3Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | 편집할 수 있는 다음 Cell로 포커스가 이동합니다.  편집할 수 있는 다음 Cell이 없으면 다음 Tab Order 순서인 컴포넌트 중 편집할 수 있는 컴포넌트로 포커스가 이동합니다. |
| Band 이동 | 상하방향키 | 다음 Body Band로 이동합니다. |
| Cell 이동 | 좌우방향키 | Cell 생성 순서에 따라 다음 Cell로 이동합니다. |
| Cell 활성화 | Enter | 선택된 Cell이 편집할 수 있는 Cell이라면 입력창이 활성화됩니다.  입력창이 활성화되어 있는 Cell이면 입력창이 비활성화됩니다. |
| Cell 활성화 | 키입력 | autoenter 속성값이 "key" 일 때 선택된 Cell이 편집할 수 있는 Cell이면 입력창이 활성화됩니다. |
| Cell 클릭 | Space | Cell이 Button 형태일 때 oncellclick 이벤트가 발생합니다. |
| 체크값 변경 | Space | Cell이 CheckBox 형태일 때 체크값을 토글합니다. |
| DatePicker 열기 | Alt + 아래방향키 또는 Option + 아래방향키 | Cell이 Calendar 형태일 때 팝업달력(DatePicker)이 표시됩니다. |
| ComboLIst 열기 | Alt + 아래방향키 또는 Option + 아래방향키 | Cell이 Combo 형태일 때 ComboList가 표시됩니다. |
| 스크롤 이동 | Ctrl + 상하방향키 | ListView 컴포넌트의 스크롤바가 활성화된 상태일 경우 입력된 방향키 방향으로 스크롤이 이동합니다. |
| Detail Band 확장 | Ctrl + Alt + E 또는 Ctrl + Option + E | Detail Band가 확장/축소됩니다. |

## 84.1.4Accessibility Key Action

```
접근성 기능이 활성화 되어 있을 때 적용되는 키 액션입니다.
```

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | 편집할 수 있는 다음 Cell로 포커스가 이동합니다.  편집할 수 있는 다음 Cell이 없으면 다음 Tab Order 순서인 컴포넌트 중 편집할 수 있는 컴포넌트로 포커스가 이동합니다. |
| Band, Cell 이동 | 상하방향키 | 가상커서 활성화 여부에 따라 동작이 달라집니다.  - 가상커서 비활성화: 키 입력 시 ListView, Body Band 순으로 이동합니다(Detail Band로 진입하지 않습니다).  - 가상커서 활성화: 키 입력 시 ListView, Body Band, Cell, expandbar, Detail Band 순으로 이동합니다. |
| Cell 이동 | 좌우방향키 | 가상커서 활성화 여부에 따라 동작이 달라집니다.  - 가상커서 비활성화: Cell 생성 순서에 따라 다음 Cell, expandbar 순으로 이동합니다.  - 가상커서 활성화: 상하방향키를 사용해 이동합니다. |
| Cell 활성화 | Enter | 선택된 Cell이 편집할 수 있는 Cell이라면 입력창이 활성화됩니다.  입력창이 활성화되어 있는 Cell이면 입력창이 비활성화됩니다. |
| Cell 활성화 | 키입력 | autoenter 속성값이 "key" 일 때 선택된 Cell이 편집할 수 있는 Cell이면 입력창이 활성화됩니다. |
| Cell 클릭 | Space | Cell이 Button 형태일 때 oncellclick 이벤트가 발생합니다. |
| 체크값 변경 | Space | Cell이 CheckBox 형태일 때 체크값을 토글합니다. |
| DatePicker 열기 | Alt + 아래방향키 또는 Option + 아래방향키 | Cell이 Calendar 형태일 때 팝업달력(DatePicker)이 표시됩니다. |
| ComboLIst 열기 | Alt + 아래방향키 또는 Option + 아래방향키 | Cell이 Combo 형태일 때 ComboList가 표시됩니다. |
| 스크롤 이동 | Ctrl + 상하방향키 | ListView 컴포넌트의 스크롤바가 활성화된 상태일 경우 입력된 방향키 방향으로 스크롤이 이동합니다. |
| Detail Band 확장 | Ctrl + Alt + E 또는 Ctrl + Option + E | Detail Band가 확장/축소됩니다. |

## 84.1.5생성자

```
ListView.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | ListView 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | ListView 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 ListView 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 ListView 의 left 가 결정됩니다. |
| vTop | String, Number | ListView 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 ListView 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 ListView 의 top 이 결정됩니다. |
| vWidth | String, Number | ListView 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 ListView 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 ListView 의 width 가 결정됩니다. |
| vHeight | String, Number | ListView 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 ListView 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 ListView 의 height 가 결정됩니다. |
| vRight | String, Number | ListView 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 ListView 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 ListView 의 right 가 결정됩니다. |
| vBottom | String, Number | ListView 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 ListView 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 ListView 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | ListView 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | ListView 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | ListView 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | ListView 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new ListView();  objComp.init( "ListView00", 30, 120, 196, 46 ); objComp.init( "ListView00", 30, 120, 196, 46, null, null ); objComp.init( "ListView00", null, null, 300, "400px", "80%", 300 ); objComp.init( "ListView00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "ListView00", "ListView22:10", 300, null, null, "ListView33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objListView = new ListView();   objListView.init("ListView", 30, 120, 196, 46, null, null); objListView.init("ListView", null, null, 300, "400px", "80%", 300); or var objListView = new ListView("ListView", 30, 120, 196, 46, null, null); var objListView = new ListView("ListView", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("ListView", objListView);    // Insert Object to Parent Form   this.insertChild(1, "ListView", objListView);    // Remove Object form Parent Form   this.removeChild("ListView");    // Show Object   objListView.show();    // Destroy Object   objListView.destroy();  objListView = null; ``` |

## 84.1.6Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 84.1.7Control

| Name | | TypeName |
| --- | --- | --- |
| body | | nexacro.ListViewBandControl |
| detail | | nexacro.ListViewDetailBandControl |
| vscrollbar | | nexacro.ScrollBarControl |
| vscrollindicator | | nexacro.ScrollIndicatorControl |
