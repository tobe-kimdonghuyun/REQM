# 74.Grid

74.1개요

74.2속성

74.3메서드

74.4이벤트

```
Grid는 Dataset의 내용을 격자 모양으로 표현하는 컴포넌트입니다.
```

## 74.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- Grid 는 항상 Dataset 과 바인딩하여 사용합니다. 
   Dataset 에 변경 사항이 생기면 Grid 에 반영되고, 반대로 Grid 에 변경 사항이 생기면 Dataset 에 반영됩니다.

- Grid 는 Head, Body, Summary 영역의 Band 로 구성되며, 각 Band 는 Cell 이라는 기본 단위로 구성됩니다.
   Cell 별로 Dataset 의 Column 과 맵핑해서 사용할수 있으며, Combo, CheckBox, Image, ProgressBar, Edit 컴포넌트를 포함 할 수 있어 다양한 디자인 및 편집이 가능합니다.

- Head, Body, Summary Band 는 한줄 이상의 Line 으로 표현할 수 있습니다.
   Body Band 는 바인딩된 Dataset 의 레코드를 보여줍니다.
   ContentsEditor 를 통해서 디자인한 Body Band 의 레코드는 Dataset 의 한 레코드와 맵핑됩니다.
   Dataset 의 한 레코드를 보기 쉽게 표현하기 위해 Grid 의 Body 영역을 MultiLine 으로 구성할 수 있습니다.

- Cell 이 Edit, TextArea, Combo 형식이고 편집창이 활성화 상태일때 일본어 IME 로 일본어 입력(조합중이고 확정이 안된 상태)중이면 붙여넣기 기능이 동작하지 않습니다.


◆ Control 표시 참고

- scrollbartype 속성값 또는 실행 환경(Desktop, Mobile)에 따라 스크롤바 영역에 표시되는 컨트롤이 달라집니다. 조건에 따라 ScrollBarControl 또는 ScrollIndicatorControl 중 하나가 적용됩니다.
  도움말에서 Structure 항목의 이미지는 모든 조건에 동시에 표시할 수 없어 ScrollBarControl 기준으로만 작성된 점을 참고해주세요.
```

## 74.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_11_Grid7.png?raw=true)

## 74.1.3Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| Cell 선택이동 | Tab | 모든 밴드 영역에서 Tab 이동 순서에 따라 edittype 속성값이 "none"이 아닌 다음 Cell로 선택이 이동합니다. |
| Cell 선택이동 | 방향키 | Body 밴드 영역에서 입력된 키 방향으로 선택이 이동합니다.    selecttype 속성값에 따라 선택되는 영역이 결정됩니다. |
| Cell 선택이동 | Shift + 방향키 | Body 밴드 영역에서 현재 Cell 을 포함하여 입력된 키 방향으로 선택이 확장됩니다.    selecttype 속성값이 "multirow", "area", "multiarea" 이 아니면 Shift 없는 방향키 입력과 동일하게 동작합니다.  selecttype 속성값에 따라 선택되는 영역이 결정됩니다. |
| Cell 활성화 | Enter | 선택된 Cell 이 에디트가 가능하면 입력창이 활성화 됩니다.    입력창이 활성화 되어 있는 Cell 이면 입력창이 비활성화 됩니다. |
| Cell 활성화 | 키입력 | autoenter 속성값이 "key" 일 때 선택된 Cell 이 에디트가 가능하면 입력창이 활성화 됩니다. |
| Cell 클릭 | Space | Cell 이 Button 형태일 때 클릭 처리되어 oncellclick 이벤트가 발생합니다. |
| 체크값 변경 | Space | Cell 이 CheckBox 형태일 때 체크값을 토글합니다. |
| 아이템 결정 | Space | Cell 이 radioitem 형태일 때 아이템을 선택상태로 변경하고 text 속성에 반영합니다. |
| DatePicker 열기 | Alt + 아래방향키 또는 Option + 아래방향키 | Cell 이 Calendar 형태일 때 팝업달력(DatePicker)이 표시됩니다. |
| DatePicker 닫기 | ESC | Cell 이 Calendar 형태일 때 열려있는 팝업달력(DatePicker)을 닫습니다. |
| ComboList 열기 | Alt + 아래방향키 또는 Option + 아래방향키 | Cell 이 Combo 형태일 때 ComboList 가 표시됩니다. |
| ComboList 닫기 | ESC | Cell 이 Combo 형태일 때 열려있는 ComboList를 닫습니다. |
| 트리 확장/축소 | 좌우방향키 | treeuseexpandkey 속성값이 "true" 일 때 Tree Cell 이 확장/축소 됩니다. |
| 트리 확장/축소 | Ctrl + Alt + 좌우방향키 또는 Ctrl + Option + 좌우방향키 | treeuseexpandkey 속성값이 "false" 일 때 Tree Cell 이 확장/축소 됩니다. |
| 스크롤 이동 | Ctrl + 방향키 | Grid 에 스크롤이 있을 때 입력된 방향키 방향으로 스크롤이 이동합니다 |
| 스크롤 이동 | PageUp/PageDown | Grid 에 스크롤이 있을 때 페이지 단위로 수직스크롤이 이동합니다 |

## 74.1.4Accessibility Key Action

```
접근성 기능이 활성화 되어 있을 때 적용되는 키 액션입니다.
```

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| Cell 선택이동 | Tab | 모든 밴드 영역에서 Tab 이동 순서에 따라 edittype 속성값이 "none"이 아닌 다음 Cell로 선택이 이동합니다. |
| Cell 선택이동 | 방향키 | 모든 밴드 영역에서 입력된 키 방향으로 선택상자가 이동합니다.    Body 밴드일 경우 selecttype 속성값에 따라 선택되는 영역이 결정됩니다. |
| Cell 선택이동 | Shift + 방향키 | Body 밴드 영역에서 현재 Cell 을 포함하여 입력된 키 방향으로 선택이 확장됩니다.    selecttype 속성값이 "multirow", "area", "multiarea" 이 아니면 Shift 없는 방향키 입력과 동일하게 동작합니다.  selecttype 속성값에 따라 선택되는 영역이 결정됩니다. |
| Cell 활성화 | Enter | 선택된 Cell 이 에디트가 가능하면 입력창이 활성화 됩니다.    입력창이 활성화 되어 있는 Cell 이면 입력창이 비활성화 됩니다. |
| Cell 활성화 | 키입력 | autoenter 속성값이 "key" 일 때 선택된 Cell 이 에디트가 가능하면 입력창이 활성화 됩니다. |
| Cell 클릭 | Space | Cell 이 Button 형태일 때 클릭 처리되어 oncellclick 이벤트가 발생합니다. |
| 체크값 변경 | Space | Cell 이 CheckBox 형태일 때 체크값을 토글합니다. |
| 아이템 결정 | Space | Cell 이 radioitem 형태일 때 아이템을 선택상태로 변경하고 text 속성에 반영합니다. |
| DatePicker 열기 | Alt + 아래방향키 또는 Option + 아래방향키 | Cell 이 Calendar 형태일 때 팝업달력(DatePicker)이 표시됩니다. |
| DatePicker 닫기 | ESC | Cell 이 Calendar 형태일 때 열려있는 팝업달력(DatePicker)을 닫습니다. |
| ComboList 열기 | Alt + 아래방향키 또는 Option + 아래방향키 | Cell 이 Combo 형태일 때 ComboList 가 표시됩니다. |
| ComboList 닫기 | ESC | Cell 이 Combo 형태일 때 열려있는 ComboList를 닫습니다. |
| 트리 확장/축소 | 좌우방향키 | treeuseexpandkey 속성값이 "true" 일 때 Tree Cell 이 확장/축소 됩니다. |
| 트리 확장/축소 | Ctrl + Alt + 좌우방향키 또는 Ctrl + Option + 좌우방향키 | treeuseexpandkey 속성값이 "false" 일 때 Tree Cell 이 확장/축소 됩니다. |
| 스크롤 이동 | Ctrl + 방향키 | Grid 에 스크롤이 있을 때 입력된 방향키 방향으로 스크롤이 이동합니다 |
| 스크롤 이동 | PageUp/PageDown | Grid 에 스크롤이 있을 때 페이지 단위로 수직스크롤이 이동합니다 |

## 74.1.5생성자

```
Grid.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | Grid 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | Grid 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 Grid 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Grid 의 left 가 결정됩니다. |
| vTop | String, Number | Grid 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 Grid 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Grid 의 top 이 결정됩니다. |
| vWidth | String, Number | Grid 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Grid 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Grid 의 width 가 결정됩니다. |
| vHeight | String, Number | Grid 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Grid 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Grid 의 height 가 결정됩니다. |
| vRight | String, Number | Grid 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 Grid 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Grid 의 right 가 결정됩니다. |
| vBottom | String, Number | Grid 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 Grid 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Grid 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | Grid 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | Grid 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | Grid 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | Grid 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new Grid();  objComp.init( "Grid00", 30, 120, 196, 46 ); objComp.init( "Grid00", 30, 120, 196, 46, null, null ); objComp.init( "Grid00", null, null, 300, "400px", "80%", 300 ); objComp.init( "Grid00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "Grid00", "Grid22:10", 300, null, null, "Grid33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objGrid = new Grid();   objGrid.init("Grid", 30, 120, 196, 46, null, null); objGrid.init("Grid", null, null, 300, "400px", "80%", 300); or var objGrid = new Grid("Grid", 30, 120, 196, 46, null, null); var objGrid = new Grid("Grid", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("Grid", objGrid);    // Insert Object to Parent Form   this.insertChild(1, "Grid", objGrid);    // Remove Object form Parent Form   this.removeChild("Grid");    // Show Object   objGrid.show();    // Destroy Object   objGrid.destroy();  objGrid = null; ``` |

## 74.1.6Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 74.1.7Control

| Name | | TypeName |
| --- | --- | --- |
| head | | nexacro.GridBandControl |
| body | | nexacro.GridBandControl |
| summary | | nexacro.GridBandControl |
| hscrollbar | | nexacro.ScrollBarControl |
| vscrollbar | | nexacro.ScrollBarControl |
| hscrollindicator | | nexacro.ScrollIndicatorControl |
| vscrollindicator | | nexacro.ScrollIndicatorControl |
