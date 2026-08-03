# nexacroN V24 — Grid

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 690개

---

## Components > Component > Grid

### Grid

> Components > Component > Grid

**Description**

Grid는 Dataset의 내용을 격자 모양으로 표현하는 컴포넌트입니다.

**Remark**

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

**Structure**



**Basic Key Action**

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| Cell 선택이동 | Tab | 모든 밴드 영역에서 Tab 이동 순서에 따라 edittype 속성값이 "none"이 아닌 다음 Cell로 선택이 이동합니다. |
| Cell 선택이동 | 방향키 | Body 밴드 영역에서 입력된 키 방향으로 선택이 이동합니다.

selecttype 속성값에 따라 선택되는 영역이 결정됩니다. |
| Cell 선택이동 | Shift + 방향키 | Body 밴드 영역에서 현재 Cell 을 포함하여 입력된 키 방향으로 선택이 확장됩니다.

selecttype 속성값이 "multirow", "area", "multiarea" 이 아니면 Shift 없는 방향키 입력과 동일하게 동작합니다.
selecttype 속성값에 따라 선택되는 영역이 결정됩니다. |
| Cell 활성화 | Enter | 선택된 Cell 이 에디트가 가능하면 입력창이 활성화 됩니다.

입력창이 활성화 되어 있는 Cell 이면 입력창이 비활성화 됩니다. |
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

**Accessibility Key Action**

접근성 기능이 활성화 되어 있을 때 적용되는 키 액션입니다.

**Property**

| Name | Description |
| --- | --- |
| accessibilityaction | Grid에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다. |
| accessibilitydesclevel | Grid 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다. |
| accessibilitydescription | Grid에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다. |
| accessibilityenable | Grid 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다. |
| accessibilitylabel | Grid에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다. |
| accessibilityrole | Grid에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다. |
| autoenter | Grid 에서 편집이 가능한 Cell 이 선택되었을 때 편집모드용 컨트롤이 활성화 되는 방법을 설정하는 속성입니다. |
| autofittype | Grid 에 스크롤 없이 전체 Column이 표시되도록 Column의 너비를 자동조절할지 설정하는 속성입니다. |
| autosizebandtype | autosizingtype 속성에 의해 자동으로 크기가 조절 될 영역을 설정하는 속성입니다. |
| autosizingtype | Grid 컴포넌트에 데이터가 모두 표시되도록 Row, Column의 크기를 자동조절 할 지 설정하는 속성입니다. |
| autoupdatetype | Cell이 Combo, MultiCombo, Calendar 중 하나의 형식일 때 팝업창으로 선택된 값이 Dataset 오브젝트에 적용되는 시점을 설정하는 속성입니다. |
| background | Grid 의 배경 영역을 설정하는 속성입니다. |
| binddataset | Grid 의 전체 Cell 과 바인드 되는 DataSet 의 ID 를 설정하는 속성입니다. |
| body | Grid 의 구성 요소 중 Body 밴드 오브젝트를 갖는 읽기전용 속성입니다. |
| border-radius | Grid 의 모서리 모양을 설정하는 속성입니다. |
| bottom | Grid 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다. |
| cellcalendarbuttonsize | Cell 이 Calendar 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다. |
| cellcalendarpopupsize | Cell 이 Calendar 형식일 때 팝업으로 표시되는 달력의 크기를 설정하는 속성입니다. |
| cellcalendarpopuptype | Cell 이 Calendar 형식일 때 팝업달력(DatePicker)이 표시되는 방식을 설정하는 속성입니다. |
| cellcheckboxsize | Cell 이 CheckBox 형식일 때 CheckBox 의 크기를 설정하는 속성입니다. |
| cellclickbound | Cell 에서 마우스 클릭에 의해 값이 변경되는 영역을 설정하는 속성입니다. |
| cellcombobuttonsize | Cell 이 Combo 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다. |
| cellcombopopupsize | Cell 이 Combo 형식일 때 팝업으로 표시되는 아이템 리스트의 크기를 설정하는 속성입니다. |
| cellcombopopuptype | Cell 이 Combo 형식일 때 아이템 리스트가 표시되는 방식을 설정하는 속성입니다. |
| cellcomboscrollbarsize | Cell 이 Combo 형식일 때 아이템 리스트에 표시되는 스크롤바의 너비를 설정하는 속성입니다. |
| cellexprupdatecondition | Cell 의 Expr 값이 갱신될 때 다른 Row  와 Cell 의 Expr 값을 함께 갱신할 지 여부를 설정하는 속성입니다. |
| cellmovingtype | Grid 에서 Column 의 Head 영역을 드래그하여 Column 순서를 바꿀 수 있게 설정하는 속성입니다. |
| cellmulticombobuttonsize | Cell이 MultiCombo 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다. |
| cellmulticombopopupsize | Cell 이 MultiCombo 형식일 때 팝업으로 표시되는 아이템 리스트의 크기를 설정하는 속성입니다. |
| cellmulticombopopuptype | Cell이 MultiCombo 형식일 때 아이템 리스트가 표시되는 방식을 설정하는 속성입니다. |
| cellmulticomboscrollbarsize | Cell 이 MultiCombo 형식일 때 아이템 리스트에 표시되는 스크롤바의 너비를 설정하는 속성입니다. |
| cellradioitemsize | Cell 이 radioitem 형식일 때 radioitem 의 크기를 설정하는 속성입니다. |
| cellsizebandtype | 사용자가 마우스로 크기를 변경할 수 있는 Row, Column 의 영역을 설정하는 속성입니다. |
| cellsizingtype | 사용자가 마우스로 Row 또는 Column 의 크기를 변경할 수 있게 설정하는 속성입니다. |
| celltextareascrollbarsize | Cell 이 TextArea 형식일 때 표시되는 스크롤바의 크기를 설정하는 속성입니다. |
| color | Grid 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| createrowstype | Grid 컴포넌트 생성 시점에 Row 생성 방식을 설정하는 속성입니다. |
| cssclass | Grid 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다. |
| currentcell | Grid 에서 현재 선택된 Cell 의 인덱스를 갖는 읽기전용 속성입니다. |
| currentcol | Grid 에서 현재 선택된 Cell 의 Column 인덱스를 갖는 읽기전용 속성입니다. |
| currentrow | Grid 에서 현재 선택된 Row 의 인덱스를 갖는 읽기전용 속성입니다. |
| currentsubrow | Grid 에서 현재 선택된 Cell 의 Sub Row 인덱스를 갖는 읽기전용 속성입니다. |
| cursor | Grid 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| enable | Grid 의 사용가능 여부를 설정하는 속성입니다. |
| enableevent | Grid 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다. |
| enableredraw | Grid 에 변경이 발생하면 화면을 자동으로 다시 그릴 지 설정하는 속성입니다. |
| extendsizetype | autosizingtype 속성에 의해 Row 의 높이가 자동조절될 때 각 Row 별로 따로 조절 할 지 설정하는 속성입니다. |
| fastvscrolltype | Grid 에서 세로 스크롤 시 팝업으로 표시되는 Row 의 위치를 설정하는 속성입니다. |
| fillareatype | Grid 에서 데이터가 없는 영역이 표시되는 방식을 설정하는 속성입니다. |
| flexgrow | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축) 여백을 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다. |
| flexshrink | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 영역이 컨테이너 영역을 초과하지 않도록 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다. |
| font | Grid 에서 사용하는 폰트를 설정하는 속성입니다. |
| formatid | formats 속성에 정의된 포맷 중 Grid 에 표시할 포맷의 ID 를 설정하는 속성입니다. |
| formats | Grid 에 정의된 모든 포맷의 정보를 갖는 속성입니다. |
| head | Grid 의 구성 요소 중 Head 밴드 오브젝트를 갖는 읽기전용 속성입니다. |
| height | Grid 을(를) 표시하기 위한 높이를 설정하는 속성입니다. |
| hscrollbar | Grid 의 서브컨트롤인 수평 스크롤바의 오브젝트를 갖는 읽기전용 속성입니다. |
| id | Grid의 고유 식별자를 설정하는 속성입니다. |
| initvalueid | Grid 에 적용될 InitValue 의 ID 를 설정하는 속성입니다. |
| layoutorder | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 순서를 설정합니다. |
| left | Grid 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다. |
| letter-spacing | Grid 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다. |
| locale | Grid 에 적용될 국가 및 언어(locale)를 설정하는 속성입니다. |
| maxheight | Grid 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다. |
| maxwidth | Grid 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다. |
| minheight | Grid 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다. |
| minwidth | Grid 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다. |
| mouseovertype | Grid 에 마우스 오버 시 mouseover Status 가 적용되는 단위를 설정하는 속성입니다. |
| name | Grid 의 이름을 설정하는 속성입니다. |
| -nexa-border | Grid 의 테두리를 설정하는 속성입니다. |
| -nexa-edge | Grid 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-rtl-background-image | Grid 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| -nexa-rtl-edge-image | Grid 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| nodataimage | Grid 에 표시할 데이터가 없을 때 출력할 이미지의 위치 경로를 설정하는 속성입니다. |
| nodatatext | Grid 에 표시할 데이터가 없을 때 출력할 텍스트를 설정하는 속성입니다. |
| opacity | Grid 영역의 투명도를 설정하는 속성입니다. |
| pagerowcount | Grid 에서 한 화면에 실제로 표시할 수 있는 Row 의 갯수를 갖는 읽기전용 속성입니다. |
| parent | Grid 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| positionstep | 부모 오브젝트가 화면분할기능을 사용할 때 Grid 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다. |
| readonly | Grid 에서 편집을 허용할 지 설정하는 속성입니다. |
| right | Grid 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다. |
| rowcount | Grid 가 갖고 있는 전체 Row 의 갯수를 갖는 읽기전용 속성입니다. |
| rtl | Grid 에서 내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다. |
| scrollbarbarminsize | Grid 에 표시되는 스크롤바의 트랙바(TrackBar) 최소크기를 설정하는 속성입니다. |
| scrollbarbaroutsize | Grid 의 스크롤바에서 트랙바(TrackBar)가 사라지는 기준 크기를 설정하는 속성입니다. |
| scrollbardecbuttonsize | Grid 에 표시되는 스크롤바의 감소 버튼(DecButton) 크기를 설정하는 속성입니다. |
| scrollbarincbuttonsize | Grid 에 표시되는 스크롤바의 증가 버튼(IncButton) 크기를 설정하는 속성입니다. |
| scrollbarsize | Grid 에 표시되는 스크롤바의 크기를 설정하는 속성입니다. |
| scrollbartrackbarsize | Grid 에 표시되는 스크롤바의 트랙바(TrackBar) 크기를 설정하는 속성입니다. |
| scrollbartype | Grid 에 스크롤바가 표시되는 형식을 설정하는 속성입니다. |
| scrolldisplaymode | Grid 컴포넌트에서 스크롤 시 화면이 갱신되는 방식을 설정하는 속성입니다. |
| scrollindicatorsize | Grid 에 표시되는 스크롤 인디케이터바의 크기를 설정하는 속성입니다. |
| scrollpixel | Grid 에서 스크롤이 수행되는 단위를 설정하는 속성입니다. |
| scrolltype | Grid 에서 사용되는 스크롤의 종류를 설정하는 속성입니다. |
| selectchangetype | Grid 에 마우스 클릭 시 Row 또는 Cell 선택이 결정되는 시점을 설정하는 속성입니다. |
| selectendcol | Gird 에서 선택된 영역의 마지막 Cell 의 Column 인덱스를 갖는 읽기전용 속성입니다. |
| selectendrow | Gird 에서 선택된 영역의 마지막 Cell 의 Row 인덱스를 갖는 읽기전용 속성입니다. |
| selectendsubrow | Gird 에서 선택된 영역의 마지막 Cell 의 Sub Row 인덱스를 갖는 읽기전용 속성입니다. |
| selectscrollmode | Grid 영역 내에서 드래그 액션을 했을 때 수행되는 동작을 설정하는 속성입니다. |
| selectstartcol | Gird 에서 선택된 영역의 시작 Cell 의 Column 인덱스를 갖는 읽기전용 속성입니다. |
| selectstartrow | Gird 에서 선택된 영역의 시작 Cell 의 Row 인덱스를 갖는 읽기전용 속성입니다. |
| selectstartsubrow | Gird 에서 선택된 영역의 시작 Cell 의 Sub Row 인덱스를 갖는 읽기전용 속성입니다. |
| selecttype | Grid 에서 선택되는 단위를 설정하는 속성입니다. |
| showcellselection | Grid 컴포넌트의 body 밴드에서 현재 선택된 Cell(currentcell 속성값에 해당하는 Cell)에 Border를 표시할지 여부를 설정하는 속성입니다. |
| showselection | Grid 의 body 밴드에서 선택된 Cell 영역에 Border 의 표시여부를 설정하는 속성입니다. |
| summary | Grid 의 구성 요소 중 Summary 밴드 오브젝트를 갖는 읽기전용 속성입니다. |
| summarytype | Summary 밴드가 Grid 에서 표시되는 위치를 설정하는 속성입니다. |
| suppresshorzcell | Grid 에서 연속된 Column 의 값이 같을때 값을 하나만 표시할 Band 를 설정하는 속성입니다. |
| suppresslevel | Grid 에서 여러 Cell 에 suppress 속성을 설정했을 때 동일한 suppress 값에 대한 동작 방식을 설정하는 속성입니다. |
| tablecellarea | Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다. |
| taborder | 탭키 입력으로 컴포넌트간 포커스를 이동할 때 Grid 의 순서를 설정하는 속성입니다. |
| tabstop | 탭키 입력으로 컴포넌트간 포커스를 이동할 때 Grid 이(가) 포커스를 받을 지 여부를 설정하는 속성입니다. |
| tooltiptext | Grid 에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다. |
| tooltiptype | Grid 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다. |
| top | Grid 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다. |
| treeasynctoggle | Cell 이 트리 형식일 때 Collapse/Expand 에 의한 화면 갱신을 비동기(Async)로 수행할지 여부를 설정하는 속성입니다. |
| treeinitstatus | Cell 이 트리 형식일 때 최초 로드 시 표시되는 트리의 상태를 설정하는 속성입니다. |
| treeusebutton | Cell 이 트리 형식일 때 Collapse/Expand 버튼의 사용 여부를 설정하는 속성입니다. |
| treeusecheckbox | Cell 이 트리 형식일 때 체크박스 사용 여부를 설정하는 속성입니다. |
| treeuseexpandkey | Cell 이 트리 형식일 때 Collapse/Expand 기능을 키보드의 좌/우 방향키로 동작시킬지 설정하는 속성입니다. |
| treeuseimage | Cell 이 트리 형식일 때 트리 상태를 나타내는 이미지를 사용할 지 설정하는 속성입니다. |
| treeuseline | Cell 이 트리 형식일 때 하위트리와 연결되는 선을 표시할지 설정하는 속성입니다. |
| useselcolor | Grid 에서 Cell 또는 Row 선택 시 XCSS 에 정의된 Select 관련 Status 를 적용시킬지 설정하는 속성입니다. |
| usesoftkeyboard | Grid 의 Cell 이 편집상태가 되어 포커스를 가질 때 키패드의 표시 여부를 설정하는 속성입니다. |
| visible | Grid 이(가) 화면에 표시될지 여부를 설정하는 속성입니다. |
| vscrollbar | Grid 의 서브컨트롤인 수직 스크롤바의 오브젝트를 갖는 읽기전용 속성입니다. |
| wheelscrollrow | Grid 에서 마우스 휠을 사용하여 스크롤 시 한번에 스크롤 되는 Row 의 갯수를 설정하는 속성입니다. |
| width | Grid 을(를) 표시하기 위한 너비를 설정하는 속성입니다. |
| word-spacing | Grid 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addEvent | Grid 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| addEventHandler | Grid 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 Grid 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| appendContentsCol | Grid 에 현재 표시된 포맷에 Column 을 추가하는 메소드입니다. |
| appendContentsRow | Grid 에 표시된 포맷에 Sub Row 를 추가하는 메소드입니다. |
| autoFitCol | Grid 에 스크롤 없이 전체 Column 이 표시되도록 Column 의 너비를 자동으로 조절하는 메소드입니다. |
| autoSizeCol | Grid 에서 텍스트가 모두 표시되도록 특정 Column 의 너비를 자동조절하는 메소드입니다. |
| autoSizeRow | Grid 에 표시되고 있는 포맷에서 텍스트가 모두 표시되도록 특정 Row 의 높이를 자동조절하는 메소드입니다. |
| blinkCell | Grid 에서 설정한 시간동안 특정 Cell 에 깜빡임(Blink) 효과를 주는 메소드입니다. |
| blinkCellByInterval | Grid 에서 설정한 횟수만큼 특정 Cell 에 깜빡임(Blink) 효과를 주는 메소드입니다. |
| bringToFront | 부모가 동일한 컴포넌트 중 Grid 이(가) 화면의 제일 앞에 표시되게 합니다. |
| bringToPrev | 부모가 동일한 컴포넌트 중 Grid 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| clearSelect | Grid 에서 선택된 영역을 모두 해제하는 메소드입니다. |
| createFormat | Grid 와 바인딩 된 DataSet 의 Column 정보를 기준으로 새로운 포맷을 생성하는 메소드입니다. |
| deleteContentsCol | Grid 에 현재 표시된 포맷에서 특정 Column 을 삭제하는 메소드입니다. |
| deleteContentsRow | Grid 에 현재 표시되는 포맷에서 특정 Sub Row 를 삭제하는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 Grid 을(를) 삭제하는 메소드입니다. |
| dropdown | Grid 컴포넌트의 Cell 편집상태에서 아이템 리스트를 표시하는 메서드입니다. |
| dropdownCalendar | Grid 에서 edittype 속성값이 "date" 인 Cell 이 편집상태일 때 팝업달력을 표시하는 메소드입니다. |
| dropdownCombo | Grid 에서 edittype 속성값이 "combo" 인 Cell 이 편집상태일 때 Combo 아이템 리스트를 표시하는 메소드입니다. |
| findEventHandler | Grid 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getBandProperty | 특정 밴드에서 지정된 속성의 속성값을 반환하는 메소드입니다. |
| getBindCellIndex | DataSet 의 특정 Column 과 바인드된 Cell 의 인덱스를 반환하는 메소드입니다. |
| getBindDataset | Grid 의 binddataset 속성에 설정되어 있는 DataSet 오브젝트를 반환하는 메소드입니다. |
| getCellCount | Grid 에서 특정 밴드에 정의된 Cell 의 갯수를 반환하는 메소드입니다. |
| getCellPos | Grid 에서 선택된 Cell 의 Cell 인덱스 값을 반환하는 메소드입니다. |
| getCellProperty | Cell 의 특정 속성값을 반환하는 메소드입니다. |
| getCellPropertyValue | Grid 에 표시된 Cell 중 특정 Cell 에 적용된 속성값을 반환하는 메소드입니다. |
| getCellRect | 인수로 전달된 위치의 Cell 영역을 위치 정보를 가지는 오브젝트로 반환하는 메서드입니다. |
| getCellText | 인수로 전달된 위치의 Cell 에 표시되는 텍스트값을 반환하는 메소드입니다. |
| getCellValue | 인수로 전달된 위치의 Cell 의 text 속성에 설정된 값을 반환하는 메소드입니다. |
| getCurEditType | Grid 에서 선택된 Cell 의 edittype 속성값을 반환하는 메소드입니다. |
| getCurFormatString | Grid 에 현재 표시되고 있는 포맷을 XML 형식의 문자열로 반환하는 메소드입니다. |
| getDatasetRow | Grid 의 Row 인덱스에 해당하는 DataSet 의 Row 인덱스를 반환하는 메소드입니다. |
| getEditCaret | Cell 이 편집상태일 때 캐럿이 위치한 인덱스를 반환하는 메소드입니다. |
| getEditingText | Cell 이 편집모드일 때 표시되는 컨트롤에 입력중인 text 값을 반환하는 메소드입니다. |
| getEditingValue | Cell 이 편집모드일 때 표시되는 컨트롤에 입력중인 value 값을 반환하는 메소드입니다. |
| getEditSelect | Cell 이 편집상태일 때 선택된 텍스트의 인덱스를 배열로 반환하는 메소드입니다. |
| getEditSelectedText | Cell 이 편집상태일 때 선택된 텍스트를 반환하는 메소드입니다. |
| getEditText | Cell 이 편집모드일 때 표시되는 컨트롤의 text 속성값을 반환하는 메소드입니다. |
| getEditValue | Cell 이 편집모드일 때 표시되는 컨트롤의 value 속성값을 반환하는 메소드입니다. |
| getEventHandler | Grid 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| getFormatColCount | Grid 에 표시되고 있는 포맷에 정의된 Column 의 갯수를 반환하는 메소드입니다. |
| getFormatColProperty | Grid 에 표시되고 있는 포맷에 정의된 Column 의 특정 속성값을 반환하는 메소드입니다. |
| getFormatColSize | Grid 의 포맷에 정의된 Column 의 너비를 반환하는 메소드입니다. |
| getFormatIdList | Format id 배열값을 반환하는 메소드입니다. |
| getFormatRowCount | Grid 에 표시되고 있는 포맷에 정의된 모든 Row 또는 Sub Row 의 갯수를 반환하는 메소드입니다. |
| getFormatRowProperty | Grid 에 표시되고 있는 포맷에 정의된 Row 의 특정 속성값을 반환하는 메소드입니다. |
| getFormatRowSize | Grid 의 포맷에 정의된 Row 또는 Sub Row 의 높이를 반환하는 메소드입니다. |
| getFormatString | 디자인 시 정의된 전체 포맷을 XML 형식의 문자열로 반환하는 메소드입니다. |
| getHeadValue | Grid 컴포넌트의 Head 밴드 영역 내 특정 Cell의 text 속성값 또는 Cell 내부에서 관리하는 HeadValue 값을 반환하는 메서드입니다. |
| getHScrollPos | Grid 에 표시된 수평스크롤바의 트랙바 위치값을 반환하는 메소드입니다. |
| getOffsetBottom | 부모 컴포넌트의 Top 위치를 기준으로 Grid 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetHeight | Grid 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetLeft | 부모 컴포넌트의 Left 위치를 기준으로 Grid 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetRight | 부모 컴포넌트의 Left 위치를 기준으로 Grid 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetTop | 부모 컴포넌트의 Top 위치를 기준으로 Grid 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetWidth | Grid 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getPixelBottom | Grid 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelHeight | Grid 의 height 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelLeft | Grid 의 left 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelRight | Grid 의 right 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelTop | Grid 의 top 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelWidth | Grid 의 width 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getRealColFullSize | Grid 에 표시되고 있는 포맷에서 전체 Column 의 너비를 반환하는 메소드입니다. |
| getRealColSize | Grid 에 표시되고 있는 포맷에서 특정 Column 의 너비를 반환하는 메소드입니다. |
| getRealRowFullSize | Grid 에 표시되고 있는 포맷에서 전체 Row 의 높이를 반환하는 메소드입니다. |
| getRealRowSize | Grid 에 표시된 데이터 Row 에서 특정 Row 또는 SubRow 의 높이를 반환하는 메소드입니다. |
| getSelectedDatasetRows | Grid 에 선택되어 있는 Row 들에 해당하는 DataSet 의 Row 인덱스를 배열로 반환하는 메소드입니다. |
| getSelectedRows | Grid 에 선택되어 있는 Row 의 인덱스를 배열로 반환하는 메소드입니다. |
| getSubCellCount | 인수로 전달 된 Cell 이 Sub Cell 구조일 때 Sub Cell 의 갯수를 반환하는 메소드입니다. |
| getSubCellProperty | Cell 이 Sub Cell 구조일 때 특정 Sub Cell 의 속성값을 반환하는 메소드입니다. |
| getSubCellPropertyValue | Grid 에 표시된 Cell 중 특정 SubCell 에 적용된 속성값을 반환하는 메소드입니다. |
| getSubCellRect | 특정 Cell 에서 Sub Cell 영역을 Rect 오브젝트로 반환하는 메소드입니다. |
| getSubCellText | 특정 Cell 의 Sub Cell 에 표시되는 텍스트값을 반환하는 메소드입니다. |
| getSubCellValue | 특정 Sub Cell 의 text 속성에 설정된 값을 반환하는 메소드입니다. |
| getSummValue | Grid 의 Summary 밴드 영역에서 특정 Cell 의 text 속성에 설정된 값을 반환하는 메소드입니다. |
| getTreeChildCount | Grid 가 트리 형식일 때 특정 Row 에 자식으로 존재하는 Row 의 갯수를 반환하는 메소드입니다. |
| getTreeChildRow | Grid 가 트리 형식일 때 특정 Row 의 자식 Row 에 해당하는 DataSet Row 값을 반환하는 메소드입니다. |
| getTreeParentRow | Grid 가 트리 형식일 때 특정 Row 의 부모 Row 에 해당하는 DataSet Row 값을 반환하는 메소드입니다. |
| getTreePath | Grid 가 트리 형식일 때 뿌리(Root) Row 에서 특정 Row 까지 각 Row 의 text 속성값을 반환하는 메소드입니다. |
| getTreeRow | 인수로 전달된 DataSet 의 Row 값에 해당하는 Grid 의 Row 값을 반환하는 메소드입니다. |
| getTreeSiblingRow | Grid 가 트리 형식일 때 특정 Row 의 형제(Sibling) Row 에 해당하는 DataSet Row 값을 반환하는 메소드입니다. |
| getTreeStatus | Grid 가 트리 형식일 때 특정 Row 의 트리 상태를 반환하는 메소드입니다. |
| getVScrollPos | Grid 에 표시된 수직스크롤바의 트랙바 위치값을 반환하는 메소드입니다. |
| init | 스크립트로 Grid 을(를) 동적 생성한 후에 초기화하는 메소드입니다. |
| insertContentsCol | Grid 에 현재 표시된 포맷의 특정 위치에 Column 을 삽입하는 메소드입니다. |
| insertContentsRow | Grid 에 현재 표시되는 포맷의 특정 위치에 Sub Row 를 삽입하는 메소드입니다. |
| insertEventHandler | Grid 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| isDropdown | Grid 컴포넌트에 아이템 리스트가 표시되어 있는지 여부를 반환하는 메소드입니다. |
| isDropdownCalendar | Grid 에 팝업달력이 표시되어 있는지 여부를 반환하는 메소드입니다. |
| isDropdownCombo | Grid 에 Combo 아이템 리스트가 표시되어 있는지 여부를 반환하는 메소드입니다. |
| isSelectedCell | 인수로 전달된 위치의 Cell 이 선택 상태인지 반환하는 메소드입니다. |
| isTreeCollapsedRow | Grid 가 트리 형식일 때 특정 Row 가 Collapse 상태인지 반환하는 메소드입니다. |
| isTreeExpandedRow | Grid 가 트리 형식일 때 특정 Row 가 Expand 상태인지 반환하는 메소드입니다. |
| isTreeLeafRow | Grid 가 트리 형식일 때 특정 Row 가 단말(Leaf) Row 인지 반환하는 메소드입니다. |
| isTreeRootRow | Grid 가 트리 형식일 때 특정 Row 가 뿌리(Root) Row 인지 반환하는 메소드입니다. |
| mergeCell | Grid 에 표시된 Cell 중 특정 영역의 Cell 들을 병합하여 하나의 Cell 로 표시하는 메소드입니다. |
| mergeContentsCell | Grid 에 표시되어 있는 포맷에서 특정 Cell 들을 병합(Merge) 하여 하나의 Cell로 만드는 메소드입니다. |
| move | Grid 의 위치와 크기를 변경하는 메소드입니다. |
| moveToNext | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Grid 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| moveToNextCell | Grid 의 Body 밴드 영역에서 Cell 포커스를 편집 가능한 다음 Cell로 이동시키는 메소드입니다. |
| moveToPrev | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Grid 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| moveToPrevCell | Grid 의 Body 밴드 영역에서 Cell 포커스를 편집 가능한 이전 Cell로 이동시키는 메소드입니다. |
| redrawExprCell | Grid 에서 Cell 에 설정된 Expr 값을 모두 갱신하는 메소드입니다. |
| removeEvent | Grid 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| removeEventHandler | Grid 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | Grid 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| resize | Grid 의 크기를 변경하는 메소드입니다. |
| scrollBy | Grid 에 표시된 스크롤을 현재 위치에서 인수로 전달된 값만큼 이동시키는 메소드입니다. |
| scrollTo | Grid 에 표시된 스크롤을 특정 위치로 이동시키는 메소드입니다. |
| selectArea | Grid 의 Body 밴드 영역에서 인수로 전달된 영역을 선택하는 메소드입니다. |
| selectCell | Grid 의 Body 영역에서 인수로 전달된 위치의 Cell 을 선택 또는 선택해제 하는 메소드입니다. |
| selectMultiRow | Grid의 body 밴드 영역에서 파라미터로 전달된 영역에 해당하는 Row를 선택하는 메소드입니다. |
| selectRow | Grid 의 Body 영역에서 인수로 전달된 위치의 Row 를 선택 또는 선택해제 하는 메소드입니다. |
| sendToBack | 부모가 동일한 컴포넌트 중 Grid 이(가) 화면의 제일 뒤에 표시되게 합니다. |
| sendToNext | 부모가 동일한 컴포넌트 중 Grid 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| setBandProperty | Row 관련 밴드의 특정 속성값을 설정하는 메소드입니다. |
| setBindDataset | Grid 의 binddataset 속성에 DataSet 오브젝트를 설정하는 메소드입니다. |
| setCellPos | Grid 에 표시된 Cell 중 특정 Cell 을 선택하는 메소드입니다. |
| setCellProperty | Cell 의 특정 속성값을 설정하는 메소드입니다. |
| setEditingValue | Cell 이 편집모드일 때 표시되는 컨트롤 또는 서브컨트롤의 value 속성을 설정하는 메소드입니다. |
| setEditSelect | Cell 이 편집상태일 때 편집기에 표시되는 텍스트를 인수로 전달된 영역만큼 선택하는 메소드입니다. |
| setEditValue | Cell 이 편집모드일 때 표시되는 컨트롤의 value 속성을 설정하는 메소드입니다. |
| setEventHandler | Grid 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | Grid 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| setFixedColumn | Grid 컴포넌트에서 스크롤 시, 인수로 전달된 Column이 스크롤되지 않도록 해당 Column을 고정하는 메서드입니다. |
| setFixedRow | Grid 에서 스크롤 시 인수로 전달된 Row 까지 스크롤 되지 않고 행고정 시키는 메소드입니다. |
| setFocus | Grid 에 포커스를 설정하는 메서드입니다. |
| setFormat | Grid 에 여러개의 포맷이 정의되어 있을 때 화면에 표시할 포맷을 설정하는 메소드입니다. |
| setFormatColProperty | Grid 에 표시되고 있는 포맷에 정의된 Column 의 속성값을 설정하는 메소드입니다. |
| setFormatRowProperty | Grid 에 표시되고 있는 포맷에 정의된 Row 의 속성값을 설정하는 메소드입니다 |
| setHeadValue | Grid 컴포넌트의 Head 밴드 영역 내 지정한 인덱스에 해당하는 Cell 내부에서 관리하는 HeadValue 값을 설정하는 메서드입니다. |
| setOffsetBottom | 부모 컴포넌트의 Top 위치를 기준으로 Grid 의 bottom 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetHeight | Grid 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetLeft | 부모 컴포넌트의 Left 위치를 기준으로 Grid 의 left 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetRight | 부모 컴포넌트의 Left 위치를 기준으로 Grid 의 right 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetTop | 부모 컴포넌트의 Top 위치를 기준으로 Grid 의 top 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetWidth | Grid 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| setRealColSize | Grid 에 표시되고 있는 포맷에서 특정 Column 의 너비를 설정하는 메소드입니다. |
| setRealRowSize | Grid 에 표시된 데이터 Row 에서 특정 Row 또는 SubRow 의 높이를 설정하는 메소드입니다. |
| setSubCellProperty | Cell 이 Sub Cell 구조일 때 특정 Sub Cell 의 속성값을 설정하는 메소드입니다. |
| setTreeStatus | Grid 가 트리 형식일 때 특정 Row 의 트리 상태를 설정하는 메소드입니다. |
| show | 스크립트로 동적 생성한 Grid 을(를) 화면에 표시하는 메소드입니다. |
| showEditor | 현재 선택된 Cell 이 편집 가능할 경우에 편집기 표시 여부를 설정하는 메소드입니다. |
| showHeadEditor | Head 밴드 영역 내에서 지정한 인덱스의 Cell이 편집 가능할 경우, HeadValue를 편집할 수 있는 컨트롤의 표시 여부를 설정하는 메서드입니다. |
| splitCell | mergeCell() 메소드로 병합된 Cell 을 분할하는 메소드입니다. |
| splitContentsCell | Grid 에 표시되어 있는 포맷의 Cell 중 병합(Merge) 된 Cell 을 분할하는 메소드입니다. |
| updateToDataset | Grid 에서 편집중인 값을 바인드 된 DataSet 에 즉시 반영시키는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| cantreestatuschange | Grid 의 트리 Cell 에서 트리 상태가 변경될 때 발생하는 이벤트입니다. |
| oncellclick | Grid 에서 Body 영역의 Cell 을 클릭했을 때 발생하는 이벤트입니다. |
| oncelldblclick | Grid 에서 Body 영역의 Cell 을 더블클릭 했을 때 발생하는 이벤트입니다. |
| oncellimeaction | 사용자 작업 버튼 또는 ENTER 키 입력 시 발생하는 이벤트입니다. |
| oncellposchanged | Grid 에서 Cell 의 선택위치가 변경된 후 발생하는 이벤트입니다. |
| onclick | 포맷이 정의되지 않은 Grid 영역에서 마우스 왼쪽버튼을 클릭했을 때 발생하는 이벤트입니다. |
| oncloseup | Grid 에 표시되었던 Combo 아이템 리스트 또는 팝업달력이 닫힐 때 발생하는 이벤트입니다. |
| oncolresized | Grid 의 Column 너비가 변경된 후 발생하는 이벤트입니다. |
| oncontextmenu | Grid 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다. |
| ondevicebuttonup | 모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다. |
| ondrag | Grid 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다. |
| ondragenter | Grid 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| ondragleave | Grid 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| ondragmove | Grid 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| ondrop | Grid 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다. |
| ondropdown | Grid 의 Cell 에서 Combo 아이템 리스트 또는 팝업달력이 표시될 때 발생하는 이벤트입니다. |
| onenterdown | Grid 에서 Cell 에 편집모드용 컨트롤이 활성화 되어 있을 때 엔터키가 입력되면 발생하는 이벤트입니다. |
| onexpanddown | Cell 에 표시된 확장버튼을 마우스 왼쪽버튼으로 눌렀을 때 발생하는 이벤트입니다. |
| onexpandup | Cell 에 표시된 확장버튼에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| onheadclick | Grid 에서 Head 영역의 Cell 을 클릭했을 때 발생하는 이벤트입니다. |
| onheaddblclick | Grid 에서 Head 영역의 Cell 을 더블클릭 했을 때 발생하는 이벤트입니다. |
| onheadvaluechanged | Grid 컴포넌트의 Head 밴드 영역 내 Cell 내부에서 관리하는 HeadValue 값이 변경됐을 때 발생하는 이벤트입니다. |
| onhscroll | Grid 의 수평 스크롤바를 스크롤 했을 때 발생하는 이벤트입니다. |
| onimageerror | Grid 컴포넌트 Cell 오브젝트의 displaytype 속성값이 "imagecontrol"인 경우 이미지 로드 실패 시 발생하는 이벤트입니다. |
| oninput | Grid 에서 입력을 시도할 때 발생하는 이벤트 입니다. |
| onkeydown | Grid 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다. |
| onkeyup | Grid 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다. |
| onkillfocus | Grid 에서 포커스가 나갈  때 발생하는 이벤트입니다. |
| onlbuttondown | Grid 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| onlbuttonup | Grid 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| onmousedown | Grid 영역 내에서 마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 눌렸을 때 발생하는 이벤트입니다. |
| onmouseenter | Grid 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| onmouseleave | Grid 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| onmousemove | Grid 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| onmouseup | 마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 떼어질 때 발생하는 이벤트입니다. |
| onmousewheel | Grid 영역 내에서 마우스의 휠버튼을 회전했을 때 발생하는 이벤트입니다. |
| onmove | Grid 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| onnodataareaclick | 그리드에서 셀이 존재하지 않는 영역을 클릭했을 때 발생하는 이벤트입니다. |
| onnodataareadblclick | 그리드에서 셀이 존재하지 않는 영역을 더블클릭했을 때 발생하는 이벤트입니다. |
| onrbuttondown | Grid 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| onrbuttonup | Grid 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| onrowresized | Grid 의 Row 높이가 변경된 후 발생하는 이벤트입니다. |
| onselectchanged | Grid 의 선택 영역이 변경 된 후 발생하는 이벤트입니다. |
| onsetfocus | Grid 에 포커스가 들어올 때 발생하는 이벤트입니다. |
| onsize | Grid 의 크기가 변경됐을 때 발생하는 이벤트입니다. |
| onsummaryclick | Grid 에서 Summary 영역의 Cell 을 클릭했을 때 발생하는 이벤트입니다. |
| onsummarydblclick | Grid 에서 Summary 영역의 Cell 을 더블클릭 했을 때 발생하는 이벤트입니다. |
| ontouchend | Grid 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다. |
| ontouchmove | Grid 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다. |
| ontouchstart | Grid 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다. |
| ontreestatuschanged | Grid 의 트리 Cell 에서 트리 상태가 변경된 후 발생하는 이벤트입니다. |
| onvscroll | Grid 의 수직 스크롤바를 스크롤 했을 때 발생하는 이벤트입니다. |

**Status**

컴포넌트가 비활성화된 상태

**Control**

| Name | TypeName |
| --- | --- |
| head | nexacro.GridBandControl |
| body | nexacro.GridBandControl |
| summary | nexacro.GridBandControl |
| hscrollbar | nexacro.ScrollBarControl |
| vscrollbar | nexacro.ScrollBarControl |
| hscrollindicator | nexacro.ScrollIndicatorControl |
| vscrollindicator | nexacro.ScrollIndicatorControl |


---

### 속성 (Properties)

### -nexa-border

> Components > Component > Grid > Property > -nexa-border

**Description**

Grid 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.border[= strborder]
```

**Setting Syntax**

```javascript
strborder ::= <line-width> <line-style> <color> [,<line-width> <line-style> <color>]{3}

<line-width> ::= 'thin' | 'medium' | 'thick' | <nWidth> 'px'
<line-style> ::= 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'
<color> ::= <NamedColor> | <NumericColor>

1회 입력 : top/right/bottom/left 에 모두 적용됩니다.
2회 입력 : top/bottom, right/left 에 첫번째 값부터 각각 적용됩니다.
3회 입력 : top, right/left, bottom 에 첫번째 값부터 각각 적용됩니다.
4회 입력 : top, right, bottom, left 에 첫번째 값부터 각각 적용됩니다.

* 2회~4회 입력은 border-radius 속성값이 설정되지 않은 경우만 적용됩니다.
```
```javascript
* XCSS
-nexa-border : 1px solid #999999;
-nexa-border : 1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999;

* Script ( normal property )
this.Grid00.border = "1px solid #999999";
this.Grid00.border = "1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999";
```
- **`<line-width>`** — 테두리 선의 두께를 설정합니다.

"thin" 설정 시 1 pixel 두께로 테두리가 표시됩니다.
"medium" 설정 시 3 pixel 두께로 테두리가 표시됩니다.
"thick" 설정 시  5 pixel 두께로 테두리가 표시됩니다.

<nWidth> 설정 시 <nWidth> pixel 두께로 테두리가 표시됩니다.
- **`<nWidth>`** — 테두리 선의 두께를 pixel 단위로 설정합니다.
"px" 단위는 생략할 수 없습니다.
- **`<line-style>`** — 테두리 선의 스타일을 설정합니다.

"none" 설정 시 테두리가 표시되지 않습니다.
"hidden" 설정 시 테두리가 표시되지 않습니다.
"dotted" 설정 시 테두리가 점선으로 표시됩니다.
"dashed" 설정 시 테두리가 긴 점선으로 표시됩니다.
"solid" 설정 시 테두리가 실선으로 표시됩니다.
"double" 설정 시 테두리가 두줄로 표시됩니다.
"groove" 설정 시 테두리가 들어간 것처럼 보이게 입체적으로 표시됩니다.
"ridge" 설정 시 테두리가 올라온 것처럼 보이게 입체적으로 표시됩니다.
"inset" 설정 시 컴포넌트가 들어간 것처럼 보이게 테두리가 입체적으로 표시됩니다.
"outset" 설정 시 컴포넌트가 올라온 것처럼 보이게 테두리가 입체적으로 표시됩니다.
- **`<color>`** — 테두리 색상을 색상이름 또는 색상코드로 설정합니다.
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- -nexa-border 속성값을 설정하지 않으면 undefined 가 설정되고, "medium none #999999" 로 동작합니다.

- <line-style> 이 "double" 일 때 두 줄을 다른 색으로 설정할 수 없습니다.
   <color> 에 설정된 색이 두 줄에 모두 적용됩니다.

- 스크립트로 접근 시 속성명은 "border"를 사용해야 합니다.


◆ Nexacro Runtime Environment 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 top > right > bottom > left 순으로 겹쳐서 표시됩니다.

- <line-style> 에 "double","groove","ridge","inset","outset" 값을 설정해도 적용되지 않습니다.

- <line-width> 에 "thin","medium","thick" 값을 설정해도 적용되지 않습니다.


◆ Web Runtime Environment 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 웹브라우저에 따라 테두리가 겹쳐지는 순서가 다르게 처리될 수 있습니다.

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있으면 
   두께는 각 테두리 별로 따로 적용되고, 색상은 top 에 설정된 색이 적용됩니다.

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있어도
   일부 브라우저는 각 테두리의 색상이나 두께가 각각 적용됩니다.

- XCSS 를 사용하지 않고 rgba(), hsl(), hsla() 메소드를 속성에 직접 설정할 경우 브라우저 버전에 따라 적용되지 않을 수 있습니다.


---

### -nexa-edge

> Components > Component > Grid > Property > -nexa-edge

**Description**

Grid 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.edge[= stredge]
```

**Setting Syntax**

```javascript
stredge ::= 'none' | <image> [<fixedwidth>'px' <fixedheight>'px']

<image> ::= 'URL("' <Theme-Image> | <Web-Image> '")'
```
```javascript
* XCSS
-nexa-edge : "URL('./images/border.png')" 5px 5px;

* Script ( normal property )
this.Grid00.edge = "URL('./images/border.png')" 5px 5px;
```
- **`"none"`** — edge 이미지를 설정하지 않습니다.
- **`<image>`** — 'URL ("[이미지위치]")' 형식으로 테마 또는 웹의 이미지를 설정합니다.

테두리(border) 안쪽에 edge 형태로 이미지가 표시됩니다.
- **`<Theme-Image>`** — 테마에 선언된 이미지를 "theme://images\이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/파일명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<fixedwidth>`** — 이미지가 고정되어 표시될 왼쪽/오른쪽 영역의 크기를 pixel 단위로 설정합니다.
"0px" 설정 시 왼쪽/오른쪽 영역을 고정하지 않습니다.

값을 설정하지 않으면 "0px" 로 적용됩니다.
- **`<fixedheight>`** — 이미지가 고정되어 표시될 위쪽/아래쪽 영역의 크기를 pixel 단위로 설정합니다.
"0px" 설정 시 위쪽/아래쪽 영역을 고정하지 않습니다.

값을 설정하지 않으면 "0px" 로 적용됩니다.

**Remark**

- -nexa-edge 속성값을 설정하지 않으면 undefined 가 설정되고, "none" 으로 동작합니다.

- 스크립트로 접근 시 속성명은 "edge" 를 사용해야 합니다.

- Grid 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.


◆ WRE 제약

- <fixedwidth>,<fixedheight> 값이 이미지 사이즈의 1/2 을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-rtl-background-image

> Components > Component > Grid > Property > -nexa-rtl-background-image

**Description**

Grid 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.-nexa-rtl-background-image
```

**Setting Syntax**

```javascript
strRtlBgImage ::= "URL(' " <Theme-Image> | <Web-Image> " ')"
```
```javascript
* XCSS
-nexa-rtl-background-image : URL("http://localhost/Test.jpg");
-nexa-rtl-background-image : URL("theme://images/Test.jpg");
```
- **`strRtlBgImage`** — "URL ('<이미지위치>')" 형식으로 테마 또는 웹의 이미지 경로를 문자열로 설정합니다.

background 속성에 설정된 값 중 이미지만 설정한 이미지로 대체됩니다.
background 속성에 설정된 이미지 이외의 값은 동일하게 적용됩니다.
- **`<Theme-Image>`** — 테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.

**Remark**

- rtl 속성에 의해 표시기준이 변경되면 반전된 이미지를 적용하려 할 때 사용하는 속성입니다.

- XCSS 에서만 설정할 수 있는 속성으로 스크립트로 값을 변경할 수 없습니다.
   XCSS 에 -nexa-rtl-background-image 속성값을 설정하지 않으면 background 속성에 설정된 이미지가 적용됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.

- 배경이미지가 적용되는 영역은 컴포넌트의 클라이언트 영역입니다.

- background 속성에 배경색이 설정되어 있을 경우 배경색 위에 이미지가 표시됩니다.

- 그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
   background 속성에 그라데이션이 설정되어 있을 경우 오동작이 발생할 수 있습니다.


---

### -nexa-rtl-edge-image

> Components > Component > Grid > Property > -nexa-rtl-edge-image

**Description**

Grid 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.-nexa-rtl-edge-image
```

**Setting Syntax**

```javascript
strRtlEgImage ::= "URL(' " <Theme-Image> | <Web-Image> " ')"
```
```javascript
* XCSS
-nexa-rtl-edge-image : URL("http://localhost/Test.jpg");
-nexa-rtl-edge-image : URL("theme://images/Test.jpg")
```
- **`strRtlEgImage`** — "URL ('<이미지위치>')" 형식으로 테마 또는 웹의 이미지 경로를 문자열로 설정합니다.

-nexa-edge 속성에 설정된 값 중 이미지만 설정한 이미지로 대체됩니다.
-nexa-edge 속성에 설정된 이미지 이외의 값은 동일하게 적용됩니다.
- **`<Theme-Image>`** — 테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.

**Remark**

- rtl 속성에 의해 표시기준이 변경되면 반전된 이미지를 적용하려 할 때 사용하는 속성입니다.

- XCSS 에서만 설정할 수 있는 속성으로 스크립트로 값을 변경할 수 없습니다.
   XCSS 에 -nexa-rtl-edge-image 속성값을 설정하지 않으면 -nexa-edge 속성에 설정된 이미지가 적용됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.

- 배경이미지가 적용되는 영역은 컴포넌트의 클라이언트 영역입니다.

- background 또는 -nexa-rtl-background-image 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-rtl-edge-image 속성에 설정된 이미지가 제일 위에 표시됩니다.


◆ web runtime environment 제약

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### accessibilityaction

> Components > Component > Grid > Property > accessibilityaction

**Description**

Grid에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.accessibilityaction[= strAction]
```

**Setting Syntax**

```javascript
this.Grid00.accessibilityaction = "Accessibility Action Message"; 
this.Grid00.accessibilityaction = "Select by direction key";
```
- **`strAction`** — accessibilitydescreadtype 속성값에 "action"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 컴포넌트에 선택상자 이동 시 사용자가 추가적인 정보를 얻기 위해 필요한 동작을 안내하는 용도로 사용합니다. 
  예를 들어 컴포넌트 특성에 따라 다음과 같이 속성값을 설정할 수 있습니다.
  
  - CheckBox 컴포넌트의 경우 아래와 같은 안내문을 accessibilityaction 속성값으로 설정할 수 있습니다.
  "선택 상태를 전환하려면 스페이스 바를 누릅니다."
  
  - WebBrowser, WebView 컴포넌트의 경우 스크린 리더 사용자를 위한 안내문을 accessibilityaction 속성값으로 설정할 수 있습니다.
  "웹 브라우저 컴포넌트 내 콘텐츠를 이용하기 위해서는 가상커서를 해제해 주세요."
  그리고 WebBrowser, WebView 컴포넌트를 벗어났을 때 필요한 안내문을 accessibilityleavemessage 속성값으로 설정합니다.
  "가상커서를 설정해 주세요"


---

### accessibilitydesclevel

> Components > Component > Grid > Property > accessibilitydesclevel

**Description**

Grid 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.accessibilitydesclevel[= enumLevel]
```

**Setting Syntax**

```javascript
enumLevel ::= 'all' | 'self' | 'child' | 'none'
```
```javascript
this.Grid00.accessibilitydesclevel = "all";
```
- **`"all"`** — Grid 와 자식 컴포넌트에 대한 접근성을 모두 출력합니다.
- **`"self"`** — Grid 의 접근성만 출력하고 자식 컴포넌트의 접근성은 출력하지 않습니다.
- **`"child"`** — Grid 의 접근성은 출력하지 않고, 자식 컴포넌트의 접근성은 출력합니다.
- **`"none"`** — Grid 와 자식 컴포넌트에 대한 접근성을 모두 출력하지 않습니다.

**Remark**

- accessibilitydesclevel 속성값을 설정하지 않으면 "all" 로 적용됩니다.

- Button 과 같이 자식 컴포넌트가 없는 컴포넌트는 "all" 또는 "child" 로 설정 시 "self" 로 적용됩니다.

- Div 와 같은 컨테이너 컴포넌트는 "child" 설정 시 실제 컨텐츠의 접근성만을 출력합니다.

- accessibilitydesclevel 속성은 선택상자의 이동에 영향을 주지 않으므로 방향키로 선택상자가 Grid 에 이동되게 하지 않으려면 accessibilityenable 속성을 설정하여야 합니다.


---

### accessibilitydescription

> Components > Component > Grid > Property > accessibilitydescription

**Description**

Grid에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.accessibilitydescription[= strDescription]
```

**Setting Syntax**

```javascript
this.Grid00.accessibilitydescription = "Option";
```
- **`strDescription`** — accessibilitydescreadtype 속성값에 "description"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.


---

### accessibilityenable

> Components > Component > Grid > Property > accessibilityenable

**Description**

Grid 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.accessibilityenable[= bEnable]
```

**Setting Syntax**

```javascript
bEnable ::= 'true' | 'false'
```
```javascript
this.Grid00.accessibilityenable = false;
```
- **`true`** — Grid 에 선택상자가 이동되면 접근성 관련 속성값을 출력합니다.

방향키 또는 제스처로 선택상자 이동 시 Static 과 같이 포커스를 갖지 않는 컴포넌트에도 선택상자가 이동됩니다.
- **`false`** — Grid 에 선택상자가 이동되어도 접근성 관련 속성값을 출력하지 않습니다.

데스크탑 환경에서 방향키로 선택상자가 Grid 에 이동되지 않습니다.
모바일 환경에서 제스처로 선택상자가 Grid 에 이동되지 않습니다.

**Remark**

- accessibilityenable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 선택상자 이동 시 컴포넌트의 ARIA-LABEL + Status + Role 순서로 정보가 조합되어 접근성으로 출력됩니다.
   각 정보의 조합순서는 스크린 리더의 종류에 따라 달라질 수 있습니다.
   > ARIA-LABEL : Environment 의 accessibilitydescreadtype 속성에 설정된 속성값이 반영됩니다.
   > Status : Grid 의 현재 상태가 반영됩니다.
   > Role : accessibilityrole 속성값이 반영됩니다. accessibilityrole 속성값을 설정하지 않으면 Grid 의 고유 Role 이 반영됩니다.

- accessibilityenable 속성값이 false 일 때 데스크탑 환경에서 방향키 외의 방법으로 선택상자를 Grid 로 이동시키면 스크린 리딩 프로그램에서 임의의 값을 출력할 수 있습니다.


◆ 컨테이너 컴포넌트 선택상자 이동 제약

아래와 같은 환경에서 컨테이너 컴포넌트로 선택상자가 이동하지 않고 컨테이너 컴포넌트 내에 배치된 컴포넌트로 이동합니다.
- Android, iOS/iPadOS 운영체제에서 실행 시 (Div, PopupDiv, TabpageControl, View)
- Windows 운영체제에서 센스리더 가상커서 사용 시 (Div, PopupDiv, View)


---

### accessibilitylabel

> Components > Component > Grid > Property > accessibilitylabel

**Description**

Grid에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.accessibilitylabel[= strLabel]
```

**Setting Syntax**

```javascript
this.Grid00.accessibilitylabel = "OK Button"; 
this.Grid00.accessibilitylabel = "[@static00]"; 
this.Grid00.accessibilitylabel = "[@static00][@static01]"; 
this.Grid00.accessibilitylabel = "[@static00][@static01] OK Button";
```
- **`strLabel`** — accessibilitydescreadtype 속성값에 "label"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.
문자열로 설정하거나 부모가 같은 컴포넌트의 accessibilitylabel 속성값을 참조할 수 있습니다.
다른 컴포넌트 참조 시에는 "[@ComponentID]" 형식으로 컴포넌트의 id를 대괄호와 "@" 문자를 사용하여 설정합니다.
참조하는 참조값에 해당하는 컴포넌트를 찾을 수 없는 경우에는 참조값 자체가 문자열로 처리됩니다.

**Remark**

- enableaccessibility 속성값이 true인 경우만 적용되는 속성입니다.

- accessibilitydescreadtype 속성값에 "label"이 포함되었으나 accessibilitylabel 속성값을 설정하지 않으면 스크린 리더의 음성 출력 대상에 포함하지 않습니다.


---

### accessibilityrole

> Components > Component > Grid > Property > accessibilityrole

**Description**

Grid에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.accessibilityrole[= enumRole]
```

**Setting Syntax**

```javascript
enumRole ::= 'none' | 'alert' | 'application' | 'button' | 'calendar' | 'chart' | 'checkbox' | 'columnheader' | 'combobox' | 'datepicker' | 'edit' | 'fileupload' | 'form' | 'frame' | 'grid' | 'gridcell' | 'groupbox' | 'heading' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6' | 'image' | 'link' | 'listbox' | 'menubar' | 'progressbar' | 'radio' | 'rowheader' | 'scrollbar' | 'spin' | 'static' | 'statusbar' | 'tab' | 'tabpage' | 'textarea' | 'titlebar' | 'toolbar' | 'tooltip' | 'treegrid' | 'treeitem' | 'webbrowser'
```
```javascript
this.Grid00.accessibilityrole = "none"; 
this.Grid00.accessibilityrole = "button";
```
- **`enumRole`** — - "none": 스크린 리더에서 Role 정보를 처리하지 않습니다.

- 속성값을 설정하지 않으면 컴포넌트/오브젝트에 따라 기본 accessibilityrole 값이 적용됩니다.
"application": Application, MainFrame
"button": Button, FileDownload
"calendar": Calendar
"checkbox": CheckBox
"combobox": ComboBox
"edit": Edit, MaskEdit
"frame": FrameSet, ChildFrame
"fileupload": FileUpload
"form": Form, Div
"groupbox": GroupBox
"image": ImageViewer, Sketch
"listbox": ListBox
"menubar": Menu
"progressbar": ProgressBar
"radio": Radio
"spin": Spin
"static": Static
"tab": Tab
"tabpage": TabPage
"textarea": TextArea
"webbrowser": WebBrower

- Grid 컴포넌트의 경우 하위 오브젝트까지 Role을 적용합니다.
"grid": Grid
"gridcell": Grid Cell
"columnheader": Grid Column Head
"rowheader": Grid Row Head
"treegrid": TreeGrid
"treeitem": TreeItem, TreeCell

- 기능에 따라 컴포넌트 또는 오브젝트의 하위 오브젝트 영역에 아래와 같은 Role이 적용됩니다.
"alert": Alert, Confirm, UserConfirm
"chart": Chart
"datepicker": DatePicker
"link": Link
"scrollbar": ScrollBar
"statusbar": StatusBar
"titlebar": TitleBar
"toolbar": ToolBar
"tooltip": Tooltip

- "heading" 또는 "heading1"부터 "heading6" 사이의 값으로 속성값을 설정하면 role, aria-level 값을 처리합니다.
예를 들어 속성값을 "heading3"으로 설정하면 Generate되는 코드 태그에 role="heading", aria-level="3" 형식으로 값을 처리합니다.
속성값을 "heading"으로 설정 시에는 "heading1"을 설정한 것과 같은 동작을 처리합니다.
accessibilityheadingnexthotkey, accessibilityheadingprevhotkey 속성값으로 설정한 단축키로 이동 시 사용할 수 있습니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- accessibilityenable 속성값을 설정하지 않으면 Grid의 기본 Role 로 적용됩니다.

- 추가적인 속성값이 필요한 Role 설정 시 Grid에 해당 속성이 없으면 스크린 리더에 따라 정상적으로 정보를 읽지 못할 수 있습니다.


---

### autoenter

> Components > Component > Grid > Property > autoenter

**Description**

Grid 에서 편집이 가능한 Cell 이 선택되었을 때 편집모드용 컨트롤이 활성화 되는 방법을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.autoenter[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'select' | 'key'
```
```javascript
this.Grid00.autoenter = "key";
```
- **`"none"`** — Cell 이 선택된 상태에서 엔터키 또는 클릭 시 편집모드용 컨트롤이 활성화됩니다.

Cell 의 선택으로 편집모드용 컨트롤이 자동으로 활성화 되지 않습니다.
- **`"select"`** — Cell 을 선택하면 편집모드용 컨트롤이 자동으로 활성화 됩니다.
- **`"key"`** — Cell 이 선택된 상태에서 Enter 또는 클릭 시 기존값을 유지한 상태로 편집모드용 컨트롤이 활성화됩니다.
Cell 이 선택된 상태에서 알파벳, 다국어문자(한글포함), 숫자, 부호, 스페이스, 영한변환키, 한자키 입력 시 기존값을 삭제한 후 편집모드용 컨트롤이 활성화됩니다.

Cell 의 선택으로 편집모드용 컨트롤이 자동으로 활성화 되지 않습니다.

**Remark**

- autoenter 속성값을 설정하지 않으면 "none" 으로 적용됩니다.

- Cell 의 edittype 속성값에 따라 표시되는 편집모드용 컨트롤의 종류가 달라집니다.

- 마우스로 Cell 을 클릭하거나 키보드의 방향키를 입력(Grid 가 포커스 되어 있을 때)하면 Cell 이 선택된 상태가 됩니다.

- Cell 이 선택되어 있을 때 showEditor() 또는 dropdownCombo() 메소드를 사용하여 편집모드용 컨트롤을 활성화 할 수 있습니다.


◆ Head 밴드 영역 내 동작

- 속성값을 "select"로 설정한 경우 Head 밴드 영역 내에서 편집 가능한 Cell 영역에서 마우스 왼쪽 버튼 클릭 시 HeadValue를 편집할 수 있는 컨트롤을 표시합니다.


◆ WRE 제약

- "key" 값일 때 기존값을 삭제한 후 편집모드용 컨트롤을 활성화하는 기능은 숫자와 알파벳만 지원합니다.
   다국어 문자 등 다른 문자의 경우 입력값과 다른값이 입력될 수 있습니다.


---

### autofittype

> Components > Component > Grid > Property > autofittype

**Description**

Grid 에 스크롤 없이 전체 Column이 표시되도록 Column의 너비를 자동조절할지 설정하는 속성입니다.

**Syntax**

```javascript
Grid.autofittype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'col'
```
```javascript
this.Grid00.autofittype = "col";
```
- **`"none"`** — Column의 너비를 자동조절하지 않습니다.
- **`"col"`** — Grid 의 너비에 맞게 각 Column의 너비를 자동조절합니다.

**Remark**

- autofittype 속성값을 설정하지 않으면 "none"으로 적용됩니다.

- Grid 에 Left/Right Band 로 설정된 Column은 자동조절되지 않고, 설정된 너비를 유지합니다.

- autofittype 속성은 수시로 변동되는 데이터에 대해서 자동으로 Grid 영역에 맞게 크기를 조절할 필요가 있을 경우에 사용합니다.

◆ autofittype 속성과 autosizingtype 속성을 같이 설정 시 동작

- autofittype 속성값을 "col"로 설정하고 autosizingtype 속성값을 "col" 또는 "both"로 설정한 경우 Column 크기에 대한 autosizingtype 속성값은 무시됩니다.
  autofittype 속성값을 "col"로 설정한 상태에서
  autosizingtype 속성값을 "col"로 설정한 경우 "none"으로 처리되며
  autosizingtype 속성값을 "both"로 설정한 경우 "row"로 처리됩니다.


---

### autosizebandtype

> Components > Component > Grid > Property > autosizebandtype

**Description**

autosizingtype 속성에 의해 자동으로 크기가 조절 될 영역을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.autosizebandtype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'body' | 'head' | 'summary' | 'allband' | 'nohead' | 'noleft' | 'nohead,noleft'
```
```javascript
this.Grid00.autosizebandtype = "nohead";
```
- **`"body"`** — band 속성값이 "body"인 Row 의 높이가 자동조절됩니다.
Row 중 가장 높이가 큰 Row에 맞게 모든 Row의 높이가 설정됩니다.
band 속성값이 "head", "summary" 인 Row 의 높이는 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.

band 속성값이 "body"인 Column 의 너비가 자동조절됩니다.
각 Column 별로 가장 너비가 큰 Cell 에 맞게 Column의 너비가 따로 설정됩니다.
band 속성값이 "left", "right" 인 Column 의 너비는 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.
- **`"head"`** — band 속성값이 "head"인 Row 의 높이가 자동조절됩니다.
band 속성값이 "body", "summary" 인 Row 의 높이는 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.

band 속성값이 "left", "body", "right" 인 Column 의 너비가 자동조절됩니다.
각 Column 별로 가장 너비가 큰 Cell 에 맞게 Column의 너비가 따로 설정됩니다.
- **`"summary"`** — band 속성값이 "summary"인 Row 의 높이가 자동조절됩니다.
band 속성값이 "head", "body" 인 Row 의 높이는 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.

band 속성값이 "left", "body", "right" 인 Column 의 너비가 자동조절됩니다.
각 Column 별로 가장 너비가 큰 Cell 에 맞게 Column의 너비가 따로 설정됩니다.
- **`"allband"`** — band 속성값이 "body" 인 Row 중 가장 높이가 큰 Row 에 맞게 "body" 인 Row의 높이가 설정됩니다.
band 속성값이 "head", "summary" 인 Row 는 각각 높이가 자동조절됩니다.

band 속성값이 "left", "body", "right"인 Column 의 너비가 자동조절됩니다.
각 Column 별로 가장 너비가 큰 Cell 에 맞게 Column의 너비가 따로 설정됩니다.
- **`"nohead"`** — band 속성값이 "head" 인 Row 의 높이는 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.
band 속성값이 "body" 인 Row 중 가장 높이가 큰 Row 에 맞게 "body" 인 Row의 높이가 설정됩니다.
band 속성값이 "summary" 인 Row 의 높이가 자동조절됩니다.

band 속성값이 "left", "body", "right" 인 Column 의 너비가 자동조절됩니다.
각 Column 별로 가장 너비가 큰 Cell 에 맞게 Column의 너비가 따로 설정됩니다.
- **`"noleft"`** — band 속성값이 "body" 인 Row 중 가장 높이가 큰 Row 에 맞게 "body" 인 Row의 높이가 설정됩니다.
band 속성값이 "head", "summary" 인 Row 는 각각 높이가 자동조절됩니다.

band 속성값이 "left" 인 Column 의 너비는 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다
band 속성값이 "body", "right" 인 Column 의 너비가 자동조절됩니다.
각 Column 별로 가장 너비가 큰 Cell 에 맞게 Column의 너비가 따로 설정됩니다.
- **`"nohead,noleft"`** — band 속성값이 "head" 인 Row 의 높이는 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.
band 속성값이 "body" 인 Row 중 가장 높이가 큰 Row 에 맞게 "body" 인 Row의 높이가 설정됩니다.
band 속성값이 "summary" 인 Row 의 높이가 자동조절됩니다.

band 속성값이 "left" 인 Column 의 너비는 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다
band 속성값이 "body", "right" 인 Column 의 너비가 자동조절됩니다.
각 Column 별로 가장 너비가 큰 Cell 에 맞게 Column의 너비가 따로 설정됩니다.

**Remark**

- autosizebandtype 속성값을 설정하지 않으면 "body"로 적용됩니다.

- Row, Column 의 크기는 autosizebandtype 속성값에 의해 자동조절되는 범위의 데이터 크기로 결정됩니다.
  자동조절되지 않는 범위의 데이터는 Row, Column 의 크기를 결정하는데 영향을 미치지 않습니다.
  또한, 합병(Merge)된 Cell은 Row, Column 크기를 결정할 때 제외됩니다.

- autosizingtype 속성값이 "none"이 아닐 경우에 적용되는 속성입니다.

- autosizingtype 속성값이 "row" 일 때는 Row의 높이만 자동조절되고, "col" 일 때는 Column의 너비만 자동조절됩니다.
  autosizingtype 속성값이 "both" 일 때는 Row, Column 의 크기가 모두 자동조절됩니다.

- extendsizetype 속성값에 따라 각 Row 의 높이가 다르게 설정될 수 있습니다.


---

### autosizingtype

> Components > Component > Grid > Property > autosizingtype

**Description**

Grid 컴포넌트에 데이터가 모두 표시되도록 Row, Column의 크기를 자동조절 할 지 설정하는 속성입니다.

**Syntax**

```javascript
Grid.autosizingtype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'col' | 'row' | 'both'
```
```javascript
this.Grid00.autosizingtype = "both";
```
- **`"none"`** — 각 Column 의 너비를 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.

각 Row 의 높이를 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.
- **`"col"`** — autosizebandtype 속성에 설정된 범위의 데이터에 맞게 각 Column 의 너비를 자동조절합니다.

각 Row 의 높이를 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.
- **`"row"`** — 각 Column 의 너비를 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.

autosizebandtype 속성에 설정된 범위의 데이터에 맞게 각 Row 의 높이를 자동조절합니다.
- **`"both"`** — autosizebandtype 속성에 설정된 범위의 데이터에 맞게 각 Column 의 너비를 자동조절합니다.

autosizebandtype 속성에 설정된 범위의 데이터에 맞게 각 Row 의 높이를 자동조절합니다.

**Remark**

- autosizingtype 속성값을 설정하지 않으면 "none"으로 적용됩니다.

- autosizingtype 속성에 의해 화면에 표시된 Row, Column 크기가 변경되어도 formats 속성의 실제값은 변경되지 않습니다.

- Dataset 오브젝트가 새로 로딩되거나 Cell 데이터가 변경되면 Row, Column 크기가 매번 자동조절됩니다.
  또한 Dataset 오브젝트의 keystring 속성값이 변경되어 Grid 컴포넌트에 표시할 데이터가 변경될 때도 Row, Column 크기가 자동조절됩니다.

◆ autofittype 속성과 autosizingtype 속성을 같이 설정 시 동작

- autofittype 속성값을 "col"로 설정하고 autosizingtype 속성값을 "col" 또는 "both"로 설정한 경우 Column 크기에 대한 autosizingtype 속성값은 무시됩니다.
  autofittype 속성값을 "col"로 설정한 상태에서
  autosizingtype 속성값을 "col"로 설정한 경우 "none"으로 처리되며
  autosizingtype 속성값을 "both"로 설정한 경우 "row"로 처리됩니다.

◆ 자동조절되는 Row, Column 범위

- 자동조절되는 Row, Column 범위를 autosizebandtype 속성으로 변경할 수 있습니다.
  이때, 합병(Merge)된 Cell은 Row, Column 크기를 계산할 때 제외됩니다.
  autosizebandtype 속성값을 설정하지 않으면 band 속성값이 "body"인 Row, Column이 자동조절됩니다.

◆ 각 Row를 다른 높이로 조절

- autosizingtype 속성값을 "both" 또는 "row"로 설정하고 extendsizetype 속성값을 "row"로 설정하면 각 Row를 다른 높이로 조절할 수 있습니다.
  extendsizetype 속성값을 설정하지 않으면 모든 Row는 같은 높이로 자동조절됩니다.

- 각 Row를 다른 높이로 조절하도록 설정한 경우에는 아래와 같이 동작합니다.
   - 화면에 보이는 영역의 Row 크기만 계산하고 출력합니다.
   - 스크롤 동작 시 화면에 보이는 영역의 Row 크기를 계산하며 Row 크기 계산이 끝난 영역은 더 이상 계산 처리를 하지 않습니다.

- 스크롤 동작 방식에 따른 계산 시점은 아래와 같습니다.
   - 트랙 버튼을 사용해 스크롤바를 움직이거나 플링에 의해 스크롤이 진행하는 경우 스크롤 동작이 완료됐을 때
   - 트랙 버튼을 사용해 스크롤바를 움직이는 중에 일정 시간 멈춘 상태로 있을 때
     (멈춘 상태를 처리하는 기준은 실행 환경에 따라 달라질 수 있습니다. 0.5~1초 사이로 멈춘 상태인 경우 처리합니다).
   - 트랙 버튼 또는 플링 외 다른 방법(마우스 휠 버튼, 키보드 방향키 등)을 사용해 스크롤 동작을 처리하는 경우 스크롤이 진행 중일 때
    
- getCellRect, getSubCellRect 메소드 실행 시 파라미터로 설정한 Row 영역 계산 여부에 따라 다른 값을 반환할 수 있습니다. 계산되지 않은 영역은 계산되지 않은 Cell 영역 정보를 반환합니다.
    
- getRealRowSize, getRealRowFullSize 메소드 실행 시에는 스크롤 동작과 별개로 계산해 높이값을 반환합니다.

◆ 특정 Row, Column만 자동조절

- 특정 Row 또는 Column 만 크기를 자동조절하려면 autoSizeCol(), autoSizeRow() 메소드를 사용하여야 합니다.

◆ mergeCell 메소드 사용 시 주의사항

- mergeCell() 메소드로 병합된 Cell의 복잡도가 높을 때 autosizingtype 속성값을 적용할 경우 설정하는 순서에 따라 결과가 동일하지 않을 수 있습니다.
  즉, autosizingtype 속성값 설정 후 mergeCell() 메소드를 실행한 것과 mergeCell() 메소드 실행 후 autosizingtype 속성을 설정한 결과가 다를 수 있습니다.
  병합된 Cell 의 복잡도가 높을 경우 성능 향상을 위한 조치이며, 이런 경우 mergeCell() 메소드 실행 후 autosizingtype 속성을 설정하는 것을 권장합니다.


---

### autoupdatetype

> Components > Component > Grid > Property > autoupdatetype

**Description**

Cell이 Combo, MultiCombo, Calendar 중 하나의 형식일 때 팝업창으로 선택된 값이 Dataset 오브젝트에 적용되는 시점을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.autoupdatetype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'comboselect' | 'dateselect' | 'itemselect'
```
```javascript
this.Grid00.autoupdatetype = "itemselect";
```
- **`"none"`** — Cell에 표시된 편집모드용 컨트롤이 비활성화될 때 변경된 값이 Dataset 오브젝트에 반영됩니다.

팝업창(Combo 리스트 또는 팝업달력)으로 값을 선택하는 시점에는 Dataset 오브젝트에 값이 반영되지 않습니다.
- **`"comboselect"`** — Cell 이 Combo, MultiCombo 형식이면 팝업 리스트에서 값을 선택하는 즉시 Dataset 오브젝트에 반영됩니다.

Cell이 Calendar 형식이면 "none"으로 설정했을 때와 동일하게 동작합니다.
- **`"dateselect"`** — Cell이 Combo, MultiCombo 형식이면 "none"으로 설정했을 때와 동일하게 동작합니다.

Cell이 Calendar 형식이면 팝업 달력에서 값을 선택하는 즉시 Dataset 오브젝트에 반영됩니다.
- **`"itemselect"`** — Cell에서 팝업창(팝업 목록 또는 팝업 달력)으로 값을 선택하는 즉시 Dataset 오브젝트에 반영됩니다.

**Remark**

- autoupdatetype 속성값을 설정하지 않으면 "none"으로 적용됩니다.

- Combo, MultiCombo, Calendar 형태로 값을 입력받으려면 Cell의 edittype 속성값을 "combo", "multicombo", "date"로 설정하여야 합니다.

- 팝업창에서 값을 선택하는 즉시 Dataset 오브젝트에 반영되는 경우 oncloseup 이벤트는 Dataset 오브젝트에 값이 반영된 후 발생합니다.


---

### background

> Components > Component > Grid > Property > background

**Description**

Grid 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.background[= strbackground]
```

**Setting Syntax**

```javascript
strBackground ::= [<bg-image> | <linear-gradient>] [<background-origin> [<background-clip>]] [<background-color>]

<bg-image> ::= 'none' | <imageurl> [<repeat-style>] [<position>]
   <imageurl> ::= 'URL(' <Theme-Image> | <Web-Image> ')'
   <repeat-style> ::= 'repeat-x' | 'repeat-y' | 'repeat' | 'no-repeat'
   <position> ::= <horizontal-position> <vertical-position> ['/' <background-size>]
      <horizontal-position> ::= 'left' | 'center' | 'right' | <pos-percentage> '%'
      <vertical-position> ::= 'top' | 'center' | 'bottom' | <pos-percentage> '%'
      <background-size> ::= 'auto' | 'cover' | 'contain' | (<length> 'px' | <percentage> '%') {1,2}

<linear-gradient> ::= 'linear-gradient(' [<angle> , ] <color-stop> ')'
   <angle> ::= 'to left' | 'to right' | 'to top' | 'to bottom' | 'to left top' | 'to left bottom' | 'to right top' | 'to right bottom'
   <color-stop> ::= <startcolor-stop> [<listcolor-stop>] <endcolor-stop>
      <startcolor-stop> ::= <color> [<percentage>'%']
      <endcolor-stop> ::= <color> [<percentage>'%']
      <listcolor-stop> ::= <color> [<percentage>'%"] [,<listcolor-stop>]*
         <color> ::= <NamedColor> | <NumericColor>

<background-origin> ::= 'border-box' | 'padding-box'
<background-clip> ::= 'border-box' | 'padding-box'
<background-color> ::= <NamedColor> | <NumericColor>
```
```javascript
* XCSS
background : #ffffaa;
background : "URL('./images/smiley.gif')" no-repeat center center #ffffaa;
background : "URL('./images/smiley.gif')" no-repeat center center /auto #ffffaa;
background : "URL('./images/smiley.gif')" no-repeat center center /15px 15% #ffffaa;
background : linear-gradient( red , blue , yellow );
background : linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0));
background : "URL('./images/smiley.gif')" border-box border-box #ffffaa;

* Script ( normal property )
this.Grid00.background = "#ffffaa";
this.Grid00.background = ""URL('./images/smiley.gif')" no-repeat center center #ffffaa";
this.Grid00.background = ""URL('./images/smiley.gif')" no-repeat center center /auto #ffffaa";
this.Grid00.background = ""URL('./images/smiley.gif')" no-repeat center center /15px 15% #ffffaa";
this.Grid00.background = "linear-gradient( red , blue , yellow )";
this.Grid00.background = "linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0))";
this.Grid00.background = ""URL('./images/smiley.gif')" border-box border-box #ffffaa";
```
- **`<bg-image>`** — 배경에 표시될 이미지를 "'none' | <imageurl> [<repeat-style>] [<position>]" 형식으로 설정합니다.

<background-color> 값이 설정되어 있으면 배경색 위로 이미지가 표시됩니다.

"none" 으로 설정하면 이미지를 설정하지 않습니다.
<imageurl> 값으로 이미지를 설정할 수 있습니다.
<repeat-style> 값으로 이미지의 반복표시 방향을 설정할 수 있습니다.
<position> 값으로 이미지의 표시위치를 설정할 수 있습니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<imageurl>`** — 배경에 표시될 이미지를 "'URL(' <Theme-Image> | <Web-Image> ')'" 형식으로 설정합니다.

"URL ( [이미지경로] )" 형식으로 테마 또는 웹의 이미지를 설정합니다.
- **`<Theme-Image>`** — 테마에 선언된 이미지를 "theme://images\이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/파일명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<repeat-style>`** — 배경에 표시될 이미지의 반복표시 방향을 설정합니다.

"repeat-x" 설정 시 이미지가 가로 방향으로 반복표시 됩니다.
"repeat-y" 설정 시 이미지가 세로 방향으로 반복표시 됩니다.
"repeat" 설정 시 이미지가 가로,세로 방향으로 모두 반복표시 됩니다.
"no-repeat" 설정 시 이미지가 반복표시 되지 않습니다.

값을 설정하지 않으면 "repeat" 로 적용됩니다.
- **`<horizontal-position>`** — 배경에 표시될 이미지의 가로 위치를 설정합니다.

"left" 설정 시 Grid 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 Grid 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 Grid 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 Grid 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 Grid 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 Grid 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<horizontal-position> 값을 설정하고, <vertical-position> 값을 설정하지 않으면 <vertical-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <vertical-position> 은 "top" 으로 적용됩니다.
- **`<pos-percentage>`** — 배경에 표시될 이미지의 가로/세로 위치를 비율로 설정합니다.

<horizontal-position> 에 "0%" 설정 시 "left" 와 같은 위치로 적용됩니다.
<horizontal-position> 에 "50%" 설정 시 "center" 와 같은 위치로 적용됩니다.
<horizontal-position> 에 "100%" 설정 시 "right" 과 같은 위치로 적용됩니다.
<vertical-position> 에 "0%" 설정 시 "top" 와 같은 위치로 적용됩니다.
<vertical-position> 에 "50%" 설정 시 "center" 와 같은 위치로 적용됩니다.
<vertical-position> 에 "100%" 설정 시 "bottom" 과 같은 위치로 적용됩니다.

0 보다 작거나 100 보다 큰 값을 설정 시 Grid 의 영역을 벗어난 가상의 위치로 적용됩니다.

값 설정 시 "%" 단위를 생략할 수 없습니다.
- **`<background-size>`** — 배경에 표시될 이미지의 크기를 설정합니다.
- auto: 원본 이미지 크기를 유지합니다.
- cover: 이미지 비율을 유지하는 한도 내에서 배경에 빈 공간이 없도록 가장 크게 설정합니다.
  width 또는 height 길이가 긴 쪽은 잘려서 표시될 수 있습니다.
- contain: 이미지가 잘리지 않고 비율을 유지하는 한도 내에서 가장 크게 설정합니다.
- <length> | <percentage>: 이미지의 width, height 크기 또는 컴포넌트 대비 비율을 설정합니다. 
  width 값만 설정하면 원본 이미지 비율에 따라 height 크기를 자동으로 처리합니다.
  height 값만 설정할 수는 없습니다. 
  음수값은 설정할 수 없습니다.
- **`<linear-gradient>`** — 배경에 표시될 그라데이션을 "'linear-gradient(' [<angle> , ] <color-stop> ')'" 형식으로 설정합니다.

<background-color> 값이 설정되어 있으면 배경색 위로 그라데이션이 표시됩니다.

"linear-gradient ( [방향, 색상값, 색상값, ...] )" 형식으로 그라데이션 방향과 색상을 설정할 수 있습니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<angle>`** — 그라데이션의 표시 방향을 설정합니다.

"to left" 설정 시 오른쪽에서 왼쪽 방향으로 그라데이션이 표시됩니다.
"to right" 설정 시 왼쪽에서 오른쪽 방향으로 그라데이션이 표시됩니다.
"to top" 설정 시 아래쪽에서 윗쪽 방향으로 그라데이션이 표시됩니다.
"to bottom" 설정 시 윗쪽에서 아래쪽 방향으로 그라데이션이 표시됩니다.
"to left top" 설정 시 오른쪽 아래 방향에서 왼쪽 윗 방향으로 그라데이션이 표시됩니다.
"to left bottom" 설정 시 오른쪽 윗 뱡향에서 왼쪽 아래 방향으로 그라데이션이 표시됩니다.
"to right top" 설정 시 왼쪽 아래 방향에서 오른쪽 윗 방향으로 그라데이션이 표시됩니다.
"to right bottom" 설정 시 왼쪽 윗 방향에서 오른쪽 아래 방향으로 그라데이션이 표시됩니다.

값을 설정하지 않으면 "to bottom"으로 적용됩니다.
- **`<color-stop>`** — 그라데이션의 시작점, 끝점, 중간점의 색을 "<startcolor-stop> [<listcolor-stop>] <endcolor-stop>" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 시작점과 끝점의 위치가 결정됩니다.
예를 들어 <angle> 값이 "to left" 이면 Grid 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 Grid 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

<listcolor-stop> 에 그라데이션 중간점의 색을 한개 이상 설정할 수 있으며 <percentage> 값 생략 시 균등하게 표시됩니다.
- **`<startcolor-stop>`** — 그라데이션의 시작점 색을 "<color> [<percentage>'%']" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 시작점 위치가 결정됩니다.
시작점의 <percentage> 값을 "0" 이상으로 설정 시 "시작점~설정값"까지 동일한 색상으로 표시됩니다.
- **`<endcolor-stop>`** — 그라데이션의 끝점 색을 "<color> [<percentage>'%']" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 끝점 위치가 결정됩니다.
끝점의 <percentage> 값을 "100" 이하로 설정 시 "설정값~끝점"까지 동일한 색상으로 표시됩니다.
- **`<listcolor-stop>`** — 그라데이션의 중간점 색을 "<color> [<percentage>'%"] [,<listcolor-stop>]*" 형식으로 설정합니다.

시작점과 끝점 사이에 적용될 중간색을 ","로 구분하여 여러개 설정할 수 있습니다.
뒤에 선언된 색의 <percentage> 값은 먼저 선언된 색의 <percentage> 값보다 커야 합니다.
- **`<color>`** — 그라데이션 색상을 색상이름 또는 색상코드로 설정합니다.
- **`<percentage>`** — <color> 에 해당하는 색이 적용될 위치를 비율값으로 설정합니다.

<angle> 값에 의해 결정된 시작점이 "0%" 로 적용됩니다.
<angle> 값에 의해 결정된 끝점이 "100%" 로 적용됩니다.

0 보다 작거나 100 보다 큰 값을 설정 시 Grid 의 영역을 벗어난 가상의 위치로 적용됩니다.
예를 들어 "150%" 설정 시 시작점에서 끝점까지 거리의 반만큼 끝점에서 벗어난 위치에 <color> 값이 적용됩니다.

<percentage> 값을 생략하면 균등한 위치에 <color> 값이 적용됩니다.
값 설정 시 "%" 단위를 생략할 수 없습니다.
- **`<background-origin>`** — 배경으로 처리될 기준영역을 설정합니다.

"border-box" 설정 시 Border 를 포함한 영역이 배경영역으로 처리됩니다.

"padding-box" 설정 시 Border 의 안쪽 영역이 배경영역으로 처리됩니다.
"padding-box" 설정 시 그라데이션의 시작점, 끝점과 배경이미지의 반복 기준위치가 Border 안쪽 영역으로 처리됩니다.

값을 설정하지 않으면 "padding-box" 로 적용됩니다.
- **`<background-clip>`** — 배경이 실제로 표시될 영역을 설정합니다.

"border-box" 설정 시 Border 를 포함한 영역에 배경이 표시됩니다.
"padding-box" 설정 시 Border 의 안쪽 영역에 배경이 표시됩니다.

값을 설정하지 않으면 <background-origin> 에 설정한 값이 동일하게 적용됩니다.
<background-origin> 값도 설정하지 않았을 경우 "border-box" 로 적용됩니다.
- **`<background-color>`** — 배경에 표시될 색을 색상이름 또는 색상코드로 설정합니다.

<bg-image> 또는 <linear-gradient> 값이 설정되어 있다면 배경색은 배경이미지 또는 그라데이션 아래에 표시됩니다.
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 Grid 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- background 속성값을 설정하지 않으면 undefined 가 설정되고, "transparent" 로 동작합니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.

- 배경의 기준영역과 표시영역은 <background-origin>, <background-clip> 값으로 각각 설정합니다.

- 배경 이미지를 중앙에 위치시키려면 <position> 값을 "center" 또는 "center center" 로 설정하여야 합니다.

- 배경이미지와 배경색을 모두 설정하면 배경색 위에 이미지가 표시됩니다.
   그라데이션과 배경색을 모두 설정하면 배경색 위에 그라데이션이 표시됩니다.

- 그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
   두 값을 동시에 설정 시 오동작이 발생할 수 있습니다.


---

### binddataset

> Components > Component > Grid > Property > binddataset

**Description**

Grid 의 전체 Cell 과 바인드 되는 DataSet 의 ID 를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.binddataset[= strDatasetID]
```

**Setting Syntax**

```javascript
this.Grid00.binddataset = "Dataset00";
```
- **`strDataset`** — 전체 Cell 과 바인드 되는 DataSet 의 ID 를 문자열로 설정합니다.

**Remark**

- Grid 에서 선택된 Row 를 변경하면 DataSet 의 rowposition 속성값이 변경됩니다.
  반대로 DataSet 의 rowposition 속성값을 변경하면 Grid 에 선택된 Row 가 변경됩니다.

- Grid 에서 Cell 의 내용을 변경하면, 바인딩 된 DataSet 의 해당 컬럼 데이터의 값도 변경됩니다.

- binddataset 속성에 설정된 DataSet 이 존재하지 않을 경우 Grid 에 데이터가 표시되지 않습니다.


---

### body

> Components > Component > Grid > Property > body

**Description**

Grid 의 구성 요소 중 Body 밴드 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Grid.body
```

**Setting Syntax**

```javascript
this.Grid00.body.background  = "red";
```

**Remark**

- formats 속성에 여러개의 포맷이 선언되어 있을 경우 현재 화면에 표시되는 포맷의 Body 밴드를 갖습니다.

- Body 밴드에 Cell 이 없는 경우도 밴드 오브젝트는 존재합니다.


---

### border-radius

> Components > Component > Grid > Property > border-radius

**Description**

Grid 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.borderRadius[= strborderradius]
```

**Setting Syntax**

```javascript
strborderradius ::= <horizontal-radius>{4} ['/' <vertical-radius>{4}]
```
```javascript
* XCSS
border-radius : 10px;
border-radius : 5px 6px 10px / 5px 10px;

* Script ( normal property )
this.Grid00.borderRadius = "10px";
this.Grid00.borderRadius = "5px 6px 10px / 5px 10px";
```
- **`<horizontal-radius>`** — 모서리를 둥글게 표시하기 위한 가로크기를 설정합니다.

pixel 단위로 입력하며 스페이스를 구분자로 4개값까지 설정할 수 있습니다.

값을 1회 입력 시 top-left/top-right/bottom-right/bottom-left 모서리의 가로크기로 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top-left/bottom-right, top-right/bottom-left 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top-left, top-right/bottom-left, bottom-right 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top-left, top-right, bottom-right, bottom-left 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
- **`<vertical-radius>`** — 모서리를 둥글게 표시하기 위한 세로크기를 설정합니다.

pixel 단위로 입력하며 스페이스를 구분자로 4개값까지 설정할 수 있습니다.

값을 1회 입력 시 top-left/top-right/bottom-right/bottom-left 모서리의 세로크기로 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top-left/bottom-right, top-right/bottom-left 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top-left, top-right/bottom-left, bottom-right 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top-left, top-right, bottom-right, bottom-left 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.

**Remark**

- border-radius 속성값을 설정하지 않으면 undefined 가 설정되고, "0px" 로 동작합니다. 

- 스크립트로 접근 시 속성명은 "borderRadius" 를 사용해야 합니다.

- <horizontal-radius>와 <vertical-radius>는 "/" 문자로 구분하여 입력합니다.

- Calendar, Combo 와 같이 하위 컨트롤이 존재하는 컴포넌트는 하위컨트롤에도 border-radius 속성을 설정해야 정상적으로 모서리가 표시됩니다.


◆ NRE 제약

- border-radius 속성을 설정하면 모든 테두리가 같은 색으로 적용됩니다.
   -nexa-border 속성에서 top 에 적용된 색이 모든 테두리에 적용됩니다.


---

### bottom

> Components > Component > Grid > Property > bottom

**Description**

Grid 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.bottom[= nBottom]
```

**Setting Syntax**

```javascript
nBottom ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Grid00.bottom = 10; 
this.Grid00.bottom = "10px"; 
this.Grid00.bottom = "10%"; 
this.Grid00.bottom = "Button00:10px"; 
this.Grid00.bottom = "Button00:10%";
```
- **`<strCompID>`** — Grid 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Grid 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Grid 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — Grid 의 하단 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 bottom 속성값을 기준으로 Grid의 하단 위치 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 Grid의 하단 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Grid의 하단 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 Grid의 하단 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 top 속성값을 기준으로 Grid의 하단 위치 결정
- "%": <strCompID>의 height 속성값을 기준으로 Grid의 하단 위치 결정
<strCompID> 값 설정 시 "em", "rem" 단위는 지원하지 않습니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 기준 컴포넌트 또는 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

◆ 기준 컴포넌트 설정 시 유의할 점

- 속성값을 기준 컴포넌트(<strCompID>)를 참조하도록 설정한 경우 다음 사항을 유의해주세요.

스크립트로 속성값에 설정한 기준 컴포넌트 값(<strCompID>)을 변경하는 경우 유효한 컴포넌트 값이 아니면(잘못된 컴포넌트 id, 부모 또는 stepindex가 다른 컴포넌트) 기준 컴포넌트 값은 무시하고 부모를 기준으로 좌표값(<nVal>)을 적용합니다.
스크립트로 기준 컴포넌트의 크기나 위치 속성값을 변경되는 경우(속성값에 영향을 주는 메소드 실행으로 인한 변경 포함) 변경된 속성값이 기준 컴포넌트를 참조하는 컴포넌트에 바로 반영되지 않습니다.
예를 들어 Button01 컴포넌트의 left 속성값이 "Button00:10px"인 경우 스크립트로 Button00 컴포넌트의 right 속성값이 변경하더라도 Button01 컴포넌트의 위치는 변경되지 않습니다.
기준 컴포넌트의 크기나 위치 속성값이 변경된 것을 기준 컴포넌트를 참조하는 컴포넌트에 반영하려면 스크립트에서 기준 컴포넌트의 크기나 위치 속성값 변경 후 Form 오브젝트의 resetScroll 메소드를 실행해주어야 합니다.


---

### cellcalendarbuttonsize

> Components > Component > Grid > Property > cellcalendarbuttonsize

**Description**

Cell 이 Calendar 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.cellcalendarbuttonsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.Grid00.cellcalendarbuttonsize = "30";
this.Grid00.cellcalendarbuttonsize = "30 20";
```
- **`<strWidth>`** — 드롭다운 버튼의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 드롭다운 버튼의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- cellcalendarbuttonsize 속성값을 설정하지 않으면 Cell 의 내부 컨트롤 높이가 적용됩니다.
   Cell 의 controlautosizingtype 속성값에 따라 드롭다운 버튼의 크기가 달라집니다.

- Cell 의 calendarbuttonsize 속성값을 설정하지 않으면 Grid 의 cellcalendarbuttonsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### cellcalendarpopupsize

> Components > Component > Grid > Property > cellcalendarpopupsize

**Description**

Cell 이 Calendar 형식일 때 팝업으로 표시되는 달력의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.cellcalendarpopupsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.Grid00.cellcalendarpopupsize = "500 400";
```
- **`<strWidth>`** — 팝업달력의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 팝업달력의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- cellcalendarpopupsize 속성값을 설정하지 않으면 undefined 로 적용됩니다.
   undefined 로 설정되면 팝업달력(DatePicker)의 너비와 높이는 각각 "220", "200" 으로 적용됩니다.

- Cell 의 calendarpopupsize 속성값을 설정하지 않으면 Grid 의 cellcalendarpopupsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### cellcalendarpopuptype

> Components > Component > Grid > Property > cellcalendarpopuptype

**Description**

Cell 이 Calendar 형식일 때 팝업달력(DatePicker)이 표시되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.cellcalendarpopuptype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'normal' | 'center' | 'system'
```
```javascript
this.Grid00.cellcalendarpopuptype = "system";
```
- **`"none"`** — 팝업달력을 화면에 표시하지 않습니다.
- **`"normal"`** — 팝업달력이 표시되는 일반적인 규칙을 따릅니다.
- **`"center"`** — 어플리케이션이 실행중인 화면의 중앙에 팝업달력이 표시됩니다.
- **`"system"`** — 데스크탑 환경이면 설정값이 무시되고 "normal" 로 동작합니다.

모바일 환경이면 시스템에서 제공하는 팝업달력이 표시됩니다.

모바일 환경일 때 날짜형식은calendardateformat, calendareditformat 속성값이 적용되지 않으며아래와 같이 처리됩니다.시스템 제약사항이며 날짜형식을 변경할 수 없으므로 사용에 주의하여야 합니다.
  > Android WRE, iOS/iPadOS WRE 는 브라우저 또는 시스템의 날짜형식이 적용됩니다.
  > Android NRE, iOS/iPadOS NRE 는 시스템의 날짜형식이 적용됩니다.
  > iOS/iPadOS NRE 는 시스템의 날짜형식과 관계없이 "yyyy.MM.dd" 형식이 적용되는 경우가 있습니다.* 모바일 환경에서 날짜형식 제약이 적용될 때 사용자가 설정한 calendardateformat, calendareditformat 속성값은 변경되지 않습니다.
* Android 에서 팝업달력의 날짜 변경 후 결정을 입력하거나 iOS/iPadOS 에서 팝업달력의 날짜변경 스핀을 멈추면 oninput -> canchange -> onchanged 순서로 이벤트가 발생합니다.

**Remark**

- cellcalendarpopuptype 속성값을 설정하지 않으면 undefined 로 적용됩니다.
   undefined 일 경우 데스크탑 환경은 "normal" 로 동작되고, 모바일 환경은 "system" 으로 동작됩니다.

- Cell 의 calendarpopuptype 속성값을 설정하지 않으면 Grid 의 cellcalendarpopuptype 속성값이 적용됩니다.

- calendartype 속성값이 "normal" 일때만 적용되며 모바일환경 같은 특별한 경우에 제한적으로 사용해야 하는 속성입니다.

- 다중 모니터의 경우 Grid 가 표시되고 있는 모니터를 기준으로 팝업달력이 표시됩니다.


---

### cellcheckboxsize

> Components > Component > Grid > Property > cellcheckboxsize

**Description**

Cell 이 CheckBox 형식일 때 CheckBox 의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.cellcheckboxsize[= nSize]
```

**Setting Syntax**

```javascript
this.Grid00.cellcheckboxsize = 20;
```
- **`nSize`** — Cell 에 표시되는 CheckBox 의 크기를 pixel 단위의 숫자로 설정합니다.

설정값은 표시되는 CheckBox 의 가로/세로 크기에 동일하게 적용됩니다.

**Remark**

- Cell 의 edittype 속성값이 "checkbox" 이거나 "tree" 일 때 Cell 에 표시되는 CheckBox 에 적용됩니다.
   Cell 의 displaytype 속성값이 "checkboxcontrol" 이거나 "treeitemcontrol" 일 때 Cell 에 표시되는 CheckBox 에 적용됩니다.

- cellcheckboxsize 속성값을 설정하지 않으면 테마에 정의된 CheckBox 이미지 크기에 맞게 적용됩니다.

- Cell 의 checkboxsize 속성을 설정하지 않으면 Grid 의 cellcheckboxsize 속성값이 적용됩니다.

- 테마에서 CheckBox 이미지 크기는 GridCellControl 하위의 cellcheckbox 셀렉터에 정의됩니다.

- 테마에 정의된 CheckBox 이미지 크기보다 cellcheckboxsize 속성값을 작게 설정할 경우 이미지가 잘려서 표시됩니다.


---

### cellclickbound

> Components > Component > Grid > Property > cellclickbound

**Description**

Cell 에서 마우스 클릭에 의해 값이 변경되는 영역을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.cellclickbound[= enumBound]
```

**Setting Syntax**

```javascript
enumBound ::= 'control' | 'cell'
```
- **`"control"`** — 컨트롤 이미지 영역을 클릭 시 Cell 의 데이터가 변경됩니다.
- **`"cell"`** — 컨트롤 이미지를 포함하여 Cell 영역 아무곳이나 클릭 시 데이터가 변경됩니다.

**Remark**

- cellclickbound 속성값을 설정하지 않으면 "control"로 적용됩니다.

- edittype 속성값과 displaytype 속성값이 아래와 같은 경우 적용되는 속성입니다.
   - edittype: "checkboxcontrol", displaytype: "checkboxcontrol"
   - edittype: "radioitem", displaytype: "radioitemcontrol"

- edittype 속성값과 displaytype 속성값이 아래와 같은 경우에는 "control"으로만 동작합니다.
   - edittype: "tree", displaytype: "treeitemcontrol"


---

### cellcombobuttonsize

> Components > Component > Grid > Property > cellcombobuttonsize

**Description**

Cell 이 Combo 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.cellcombobuttonsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.Grid00.cellcombobuttonsize = "30";
this.Grid00.cellcombobuttonsize = "30 20";
```
- **`<strWidth>`** — 드롭다운 버튼의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 드롭다운 버튼의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- cellcombobuttonsize 속성값을 설정하지 않으면 Cell 의 내부 컨트롤 높이가 적용됩니다.
   controlautosizingtype 속성값에 따라 드롭다운 버튼의 크기가 달라집니다.

- Cell 의 combobuttonsize 속성값을 설정하지 않으면 Grid 의 cellcombobuttonsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### cellcombopopupsize

> Components > Component > Grid > Property > cellcombopopupsize

**Description**

Cell 이 Combo 형식일 때 팝업으로 표시되는 아이템 리스트의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.cellcombopopupsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.Grid00.cellcombopopupsize = "500 400";
```
- **`<strWidth>`** — 아이템 리스트의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 아이템 리스트의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- cellcombopopupsize 속성값을 설정하지 않으면 undefined 로 적용됩니다.
   undefined 로 설정되면 아이템에 맞게 리스트의 크기가 자동으로 설정됩니다.

- Cell 의 combopopupsize 속성값을 설정하지 않으면 Grid 의 cellcombopopupsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### cellcombopopuptype

> Components > Component > Grid > Property > cellcombopopuptype

**Description**

Cell 이 Combo 형식일 때 아이템 리스트가 표시되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.cellcombopopuptype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'normal' | 'center'
```
```javascript
this.Grid00.cellcombopopuptype = "center";
```
- **`"none"`** — 아이템 리스트를 화면에 표시하지 않습니다.
- **`"normal"`** — 아이템 리스트가 표시되는 일반적인 규칙을 따릅니다.
- **`"center"`** — 어플리케이션이 실행중인 화면의 중앙에 아이템 리스트가 표시됩니다

**Remark**

- cellcombopopuptype 속성값을 설정하지 않으면 "normal" 로 적용됩니다.

- Cell 의 combopopuptype 속성값을 설정하지 않으면 Grid 의 cellcombopopuptype 속성값이 적용됩니다.

- 모바일환경 같은 특별한 경우에 제한적으로 사용해야 하는 속성입니다.

- 다중 모니터의 경우 Grid 가 표시되고 있는 모니터를 기준으로 아이템 리스트가 표시됩니다.


---

### cellcomboscrollbarsize

> Components > Component > Grid > Property > cellcomboscrollbarsize

**Description**

Cell 이 Combo 형식일 때 아이템 리스트에 표시되는 스크롤바의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.cellcomboscrollbarsize[= nWidth]
```

**Setting Syntax**

```javascript
this.Grid00.cellcomboscrollbarsize = "20";
```
- **`nWidth`** — 스크롤바의 너비를 숫자로 설정합니다.

**Remark**

- Cell 의 comboscrollbarsize 속성값을 설정하지 않으면 Grid 의 cellcomboscrollbarsize 속성값이 적용됩니다.

- scrollbarsize 속성값을 변경하면 스크롤바 내부버튼의 높이와 너비가 같이 변경됩니다.


---

### cellexprupdatecondition

> Components > Component > Grid > Property > cellexprupdatecondition

**Description**

Cell 의 Expr 값이 갱신될 때 다른 Row  와 Cell 의 Expr 값을 함께 갱신할 지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.cellexprupdatecondition[= enumCondition]
```

**Setting Syntax**

```javascript
enumCondition ::= 'none' | 'all' | 'celltext'
```
```javascript
this.Grid00.cellexprupdatecondition = "celltext";
```
- **`"none"`** — Cell 의 Expr 값이 갱신될 때 Expr 이 설정된 다른 Row 와 Cell 을 갱신하지 않습니다.
- **`"all"`** — Cell 의 Expr 값이 갱신될 때 Expr 이 설정된 다른 Row 와 Cell 을 모두 갱신합니다.
- **`"celltext"`** — Cell 의 Expr 값이 갱신될 때 expr, text 속성에 Expr 이 설정된 Cell 만 모두 갱신합니다.
expr, text 속성에 Expr 이 설정된 Cell 은 다른 속성의 Expr 값도 함께 갱신됩니다.

expr, text 속성에 Expr 이 설정되지 않은 Cell 은 모두 갱신하지 않습니다.

**Remark**

- cellexprupdatecondition 속성값을 설정하지 않으면 "all" 로 적용됩니다.

- Grid 에서 선택되거나 선택해제된 Cell 의 Expr 값은 cellexprupdatecondition 속성값과 관계없이 항상 갱신됩니다.
   Grid 에서 선택되거나 선택해제되는 영역은 selecttype 속성값에 따라 다릅니다.

- redrawExprCell() 메소드를 실행하면 cellexprupdatecondition 속성값과 관계없이 설정된 모든 Expr 값을 즉시 갱신합니다.


---

### cellmovingtype

> Components > Component > Grid > Property > cellmovingtype

**Description**

Grid 에서 Column 의 Head 영역을 드래그하여 Column 순서를 바꿀 수 있게 설정하는 속성입니다.

**Syntax**

```javascript
Grid.cellmovingtype[= enumMovingtype]
```

**Setting Syntax**

```javascript
this.Grid00.cellmovingtype = "col";
```
- **`"none"`** — Column 의 순서를 바꿀 수 없습니다.
- **`"col"`** — 마우스로 Head 영역을 드래그하여 Column 의 순서를 바꿀 수 있습니다.

GridColumnControl 의 band 속성값에 관계없이 순서를 바꿀 수 있습니다.
- **`"col,band"`** — 마우스로 Head 영역을 드래그하여 Column 의 순서를 바꿀 수 있습니다.

GridColumnControl 의 band 속성값이 동일한 영역 내에서 순서를 바꿀 수 있습니다.
예를 들어, band 속성값이 "body" 인 Column 은 band 속성값이 "left" 또는 "right" 인 Column 영역에 위치할 수 없습니다.

**Remark**

- cellmovingtype 속성값을 설정하지 않으면 "none" 으로 적용됩니다.

- Grid 의 Head 영역을 마우스로 선택한 후 옮기고 싶은 위치로 드래그하면 Column 전체가 옮겨집니다.
   한 번에 한 개의 Column 이동만 가능합니다.

- Column 에 병합(Merge)된 Cell 이나 서브(Sub) Cell 이 있는 경우에는 Column 을 이동 시킬 수 없습니다.

- Grid 의 selectscrollmode 속성값이 "select" 일 때만 적용되는 속성입니다.
   모바일 환경에서 selectscrollmode 속성값을 설정하지 않으면 "scroll" 로 적용되어 cellmovingtype 속성값이 적용되지 않습니다.

- 속성값이 "col"인 경우 ondrag 이벤트가 발생하며 ondrag 이벤트는 parent로 버블링됩니다. 
  ondragmove, ondragenter, ondragleave, ondrop 이벤트는 발생하지 않습니다.


---

### cellmulticombobuttonsize

> Components > Component > Grid > Property > cellmulticombobuttonsize

**Description**

Cell이 MultiCombo 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.cellmulticombobuttonsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.Grid00.cellmulticombobuttonsize = "30";
this.Grid00.cellmulticombobuttonsize = "30 20";
```
- **`<strWidth>`** — 드롭다운 버튼의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 드롭다운 버튼의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- cellmulticombobuttonsize 속성값을 설정하지 않으면 Cell의 내부 컨트롤 높이가 적용됩니다.
   controlautosizingtype 속성값에 따라 드롭다운 버튼의 크기가 달라집니다.

- Cell의 multicombobuttonsize 속성값을 설정하지 않으면 Grid의 cellmulticombobuttonsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### cellmulticombopopupsize

> Components > Component > Grid > Property > cellmulticombopopupsize

**Description**

Cell 이 MultiCombo 형식일 때 팝업으로 표시되는 아이템 리스트의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.cellmulticombopopupsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.Grid00.cellmulticombopopupsize = "500 400";
```
- **`<strWidth>`** — 아이템 리스트의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 아이템 리스트의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- cellmulticombopopupsize 속성값을 설정하지 않으면 undefined로 적용됩니다.
   undefined로 설정되면 아이템에 맞게 리스트의 크기가 자동으로 설정됩니다.

- Cell의 multicombopopupsize 속성값을 설정하지 않으면 Grid의 cellmulticombopopupsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### cellmulticombopopuptype

> Components > Component > Grid > Property > cellmulticombopopuptype

**Description**

Cell이 MultiCombo 형식일 때 아이템 리스트가 표시되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.cellmulticombopopuptype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'normal' | 'center'
```
```javascript
this.Grid00.cellmulticombopopuptype = "center";
```
- **`"none"`** — 아이템 리스트를 화면에 표시하지 않습니다.
- **`"normal"`** — 아이템 리스트가 표시되는 일반적인 규칙을 따릅니다.
- **`"center"`** — 애플리케이션이 실행 중인 화면의 중앙에 아이템 리스트가 표시됩니다

**Remark**

- cellmulticombopopuptype 속성값을 설정하지 않으면 "normal"로 적용됩니다.

- Cell의 multicombopopuptype 속성값을 설정하지 않으면 Grid의 cellmulticombopopuptype 속성값이 적용됩니다.

- 모바일환경 같은 특별한 경우에 제한적으로 사용해야 하는 속성입니다.

- 다중 모니터의 경우 Grid 가 표시되고 있는 모니터를 기준으로 아이템 리스트가 표시됩니다.


---

### cellmulticomboscrollbarsize

> Components > Component > Grid > Property > cellmulticomboscrollbarsize

**Description**

Cell 이 MultiCombo 형식일 때 아이템 리스트에 표시되는 스크롤바의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.cellmulticomboscrollbarsize[= nWidth]
```

**Setting Syntax**

```javascript
this.Grid00.cellmulticomboscrollbarsize = "20";
```
- **`nWidth`** — 스크롤바의 너비를 숫자로 설정합니다.

**Remark**

- Cell의 multicomboscrollbarsize 속성값을 설정하지 않으면 Grid의 cellmulticomboscrollbarsize 속성값이 적용됩니다.

- scrollbarsize 속성값을 변경하면 스크롤바 내부버튼의 높이와 너비가 같이 변경됩니다.


---

### cellradioitemsize

> Components > Component > Grid > Property > cellradioitemsize

**Description**

Cell 이 radioitem 형식일 때 radioitem 의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.cellradioitemsize[= nSize]
```

**Setting Syntax**

```javascript
this.Grid00.cellradioitemsize = 20;
```
- **`nSize`** — Cell 에 표시되는 radioitem 의 크기를 pixel 단위의 숫자로 설정합니다.

설정값은 표시되는 radioitem 의 가로/세로 크기에 동일하게 적용됩니다.

**Remark**

- Cell 의 edittype 속성값이 "radioitem" 이거나 displaytype 속성값이 "radioitemcontrol" 일 때 Cell 에 표시되는 radioitem 에 적용됩니다.

- cellradioitemsize 속성값을 설정하지 않으면 테마에 정의된 radioitem 이미지 크기에 맞게 적용됩니다.

- Cell 의 radioitemsize 속성을 설정하지 않으면 Grid 의 cellradioitemsize 속성값이 적용됩니다.

- 테마에서 radioitem 이미지 크기는 GridCellControl 하위의 cellradioitem 셀렉터에 정의됩니다.

- 테마에 정의된 radioitem 이미지 크기보다 cellradioitemsize 속성값을 작게 설정할 경우 이미지가 잘려서 표시됩니다.


---

### cellsizebandtype

> Components > Component > Grid > Property > cellsizebandtype

**Description**

사용자가 마우스로 크기를 변경할 수 있는 Row, Column 의 영역을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.cellsizebandtype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'body' | 'allband' | 'nohead' | 'noleft' | 'nohead,noleft'
```
```javascript
this.Grid00.cellsizebandtype = "nohead,noleft";
```
- **`"body"`** — band 속성값이 "body"인 Row 의 높이를 변경할 수 있습니다.
band 속성값이 "head", "summary" 인 Row 의 높이는 변경할 수 없습니다.

band 속성값이 "body" 인 Column 의 너비를 변경할 수 있습니다.
band 속성값이 "left", "right" 인 Column 의 너비는 변경할 수 없습니다.
- **`'allband'`** — band 속성값에 관계없이 모든 Row 의 높이를 변경할 수 있습니다.

band 속성값에 관계없이 모든 Column 의 너비를 변경할 수 있습니다.
- **`'nohead'`** — band 속성값이 "body", "summary" 인 Row 의 높이를 변경할 수 있습니다.
band 속성값이 "head" 인 Row 의 높이는 변경할 수 없습니다.

band 속성값에 관계없이 모든 Column 의 너비를 변경할 수 있습니다.
- **`'noleft'`** — band 속성값에 관계없이 모든 Row 의 높이를 변경할 수 있습니다.

band 속성값이 "body", "right" 인 Column 의 너비를 변경할 수 있습니다.
band 속성값이 "left" 인 Column 의 너비는 변경할 수 없습니다.
- **`'nohead,noleft'`** — band 속성값이 "body", "summary" 인 Row 의 높이를 변경할 수 있습니다.
band 속성값이 "head" 인 Row 의 높이는 변경할 수 없습니다.

band 속성값이 "body", "right" 인 Column 의 너비를 변경할 수 있습니다.
band 속성값이 "left" 인 Column 의 너비는 변경할 수 없습니다.

**Remark**

- cellsizebandtype 속성값을 설정하지 않으면 "body"로 적용됩니다.

- cellsizingtype 속성값이 "none"이 아닐 경우에 적용되는 속성입니다.

- cellsizingtype 속성값이 "row" 일 때는 Row 의 높이만 조절할 수 있고, "col" 일 때는 Column 의 너비만 조절할 수 있습니다.
  cellsizingtype 속성값이 "both" 일 때는 Row, Column 의 크기를 모두 조절할 수 있습니다.

- extendsizetype 속성값이 "row" 이면 각 Row 마다 높이를 다르게 설정할 수 있습니다.


---

### cellsizingtype

> Components > Component > Grid > Property > cellsizingtype

**Description**

사용자가 마우스로 Row 또는 Column 의 크기를 변경할 수 있게 설정하는 속성입니다.

**Syntax**

```javascript
Grid.cellsizingtype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'col' | 'row' | 'both'
```
```javascript
this.Grid00.cellsizingtype = "both";
```
- **`"none"`** — 마우스로 Column 의 너비를 조절할 수 없습니다.
마우스로 Row 의 높이를 조절할 수 없습니다.
- **`"col"`** — 마우스로 Column 의 Head 영역 경계를 드래그하여 너비를 조절할 수 있습니다.
마우스로 Row 의 높이를 조절할 수 없습니다.
- **`"row"`** — 마우스로 Column 의 너비를 조절할 수 없습니다.
마우스로 Row 의 경계를 드래그하여 높이를 조절할 수 있습니다.
- **`"both"`** — 마우스로 Column 의 Head 영역 경계를 드래그하여 너비를 조절할 수 있습니다.
마우스로 Row 의 경계를 드래그하여 높이를 조절할 수 있습니다.

**Remark**

- Column 의 크기 변경은 Head 영역을 드래그해야 가능합니다.

- cellsizebandtype 속성값을 설정하지 않으면 기본적으로 고정되어 있는 Head, Summ, Left, Right 밴드를 제외한 Body 밴드만 크기 변경이 가능합니다.

- extendsizetype 속성값을 설정하면 각 Row 별로 다른 높이로 조절할 수 있습니다.
  extendsizetype 속성값을 설정하지 않으면 한개 Row 의 높이 변경 시 모든 Row 가 같은 높이로 변경됩니다.

- autosizingtype 속성에 의해 Row, Column 의 크기가 자동조절된 상태에서 마우스로 크기를 재조정하면 재조정된 크기가 유지됩니다.


---

### celltextareascrollbarsize

> Components > Component > Grid > Property > celltextareascrollbarsize

**Description**

Cell 이 TextArea 형식일 때 표시되는 스크롤바의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.celltextareascrollbarsize[= nSize]
```

**Setting Syntax**

```javascript
this.Grid00.celltextareascrollbarsize = "30";
```
- **`nSize`** — 스크롤바의 크기를 pixel 단위의 숫자로 설정합니다.

**Remark**

- Cell 의 textareascrollbarsize 속성값을 설정하지 않으면 Grid 의 celltextareascrollbarsize 속성값이 적용됩니다.

- celltextareascrollbarsize 속성값은 수직스크롤바의 너비와 수평스크롤바의 높이에 동일하게 적용됩니다.

- celltextareascrollbarsize 속성값을 변경하면 스크롤바 내부버튼의 높이와 너비가 같이 변경됩니다.


---

### color

> Components > Component > Grid > Property > color

**Description**

Grid 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.color[= strcolor]
```

**Setting Syntax**

```javascript
strcolor ::= <NamedColor> | <NumericColor>
```
```javascript
* XCSS
color : #999999;
color : rgb ( 255, 0, 0 );
color : red;

* Script ( normal property )
this.Grid00.color = "#999999";
this.Grid00.color = "rgb(255,0,0)";
this.Grid00.color = "red";
```
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- color 속성값을 설정하지 않으면 undefined 가 설정되고, "#000000" 으로 동작합니다.


◆ web runtime environment 제약

- XCSS 를 사용하지 않고 rgba(), hsl(), hsla() 메소드를 속성에 직접 설정할 경우 브라우저 버전에 따라 적용되지 않을 수 있습니다.


---

### createrowstype

> Components > Component > Grid > Property > createrowstype

**Description**

Grid 컴포넌트 생성 시점에 Row 생성 방식을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.createrowstype [=enumType]
```

**Setting Syntax**

```javascript
enumType ::= "auto" | "all"
```
```javascript
this.Grid00.createrowstype = "all";
```
- **`"auto"`** — 화면에 표시되는 Grid 컴포넌트 영역 내에 표시되는 Row의 개수를 자동으로 설정하고 필요한 Row만 생성합니다.
- **`"all"`** — Grid 컴포넌트 생성 시점에 전체 Row를 생성합니다.

**Remark**

- createrowstype 속성값을 설정하지 않으면 "auto"로 적용됩니다.

- createrowstype 속성값을 "all"로 설정한 경우 성능에 영향을 미칠 수 있습니다.
  접근성 지원 환경에서 스크린 리더가 Accessibility Tree 구성 시 전체 노드가 미리 생성되어야 하는 경우에만 성능에 미치는 영향을 인지하고 사용하는 것을 권장합니다.

- 스크립트에서 속성값 변경 시 Form 오브젝트의 resetScroll 메서드를 실행해 Grid 컴포넌트를 갱신해주어야 합니다.


---

### cssclass

> Components > Component > Grid > Property > cssclass

**Description**

Grid 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다.

**Syntax**

```javascript
Grid.cssclass[= strcssclass]
```

**Setting Syntax**

```javascript
strcssclass ::= <ClassName> [ , &ltClassName> ]*
```
```javascript
this.Grid00.cssclass = "TestClass"; 
this.Grid00.cssclass = "TestClass,TestClass2";
```
- **`<ClassName>`** — XCSS 에 정의된 classname 을 설정합니다.

**Remark**

- XCSS 에 정의된 ".classname" 형식에서 "." 를 제외하고 "classname" 만 설정합니다.

- Style 에 적용되는 방식은 XCSS Attribute 지정과 동일하게 XCSS 내의 순서대로 적용됩니다.

- Status 를 적용하고자 할 경우는 "classname" 에 Status 를 붙여서 사용합니다.

- ',' 를 사용하여 class 를 다중으로 지정하게 되면 class 가 중첩되어 적용됩니다.
   중첩된 class 의 내용에 중복이 있다면 XCSS 내의 순서상 마지막으로 기술된 것이 적용됩니다.


◆ web runtime environment 제약

- web runtime environment 는 cssclass 명의 첫문자가 숫자일 경우 속성값이 적용되지 않으므로 주의하여야 합니다.


---

### currentcell

> Components > Component > Grid > Property > currentcell

**Description**

Grid 에서 현재 선택된 Cell 의 인덱스를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Grid.currentcell
```

**Setting Syntax**

```javascript
var nIdx = this.Grid00.currentcell;
```
- **`currentcell`** — Grid 에서 현재 선택된 Cell 의 인덱스값을 갖습니다.

선택된 Cell 이 없을 경우 -1 값을 갖습니다.
Cell 인덱스는 0 부터 시작하며 각 Row 의 동일 위치에 있는 Cell은 동일한 인덱스를 갖습니다.

**Remark**

- Row 에 SubRow 가 정의되어 있다면 첫번째 SubRow 의 첫번째 Cell 부터 마지막 SubRow 의 마지막 Cell 까지 인덱스값이 증가합니다.

- Grid 에서 방향키로 선택 이동 시 currentcell 속성에 값이 설정되는 시점은 onkeydown 이벤트 발생 이후입니다.
   따라서, 정확한 Cell 인덱스값을 얻으려면 onkeyup 이벤트에서 currentcell 속성값을 확인하여야 합니다.


---

### currentcol

> Components > Component > Grid > Property > currentcol

**Description**

Grid 에서 현재 선택된 Cell 의 Column 인덱스를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Grid.currentcol
```

**Setting Syntax**

```javascript
var nIdx = this.Grid00.currentcol;
```

**Remark**

- 선택된 Cell 이 없을 경우 "-1"이 저장됩니다.

- 인덱스는 "0" 부터 시작하며 각 Row 의 동일 위치에 있는 Cell은 동일한 인덱스값을 갖습니다.

- 한 Row 가 두줄 이상으로 정의되어 있다면 첫번째 줄의 첫번째 Cell과 두번째 줄의 첫번째 Cell은 동일한 인덱스값을 갖습니다.

- 합병(Merge) 된 Cell은 합병된 첫번째 Cell 의 Column 인덱스를 갖습니다.


---

### currentrow

> Components > Component > Grid > Property > currentrow

**Description**

Grid 에서 현재 선택된 Row 의 인덱스를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Grid.currentrow
```

**Setting Syntax**

```javascript
var nIdx = this.Grid00.currentrow;
```
- **`currentrow`** — Grid 에서 현재 선택된 Row 의 인덱스값을 갖습니다.

선택된 Row 가 없을 경우 -9 값을 갖습니다.
Row 인덱스는 0 부터 시작합니다.

* enableaccessibility 속성값이 true 일 때 방향키에 의해 Head 밴드가 선택되면 -1 값을 갖습니다.
   enableaccessibility 속성값이 true 일 때 방향키에 의해 Summary 밴드가 선택되면 -2 값을 갖습니다.

**Remark**

- Grid 에서 방향키로 선택 이동 시 currentrow 속성에 값이 설정되는 시점은 onkeydown 이벤트 발생 이후입니다.
   따라서, 정확한 Row 인덱스값을 얻으려면 onkeyup 이벤트에서 currentrow 속성값을 확인하여야 합니다.


---

### currentsubrow

> Components > Component > Grid > Property > currentsubrow

**Description**

Grid 에서 현재 선택된 Cell 의 Sub Row 인덱스를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Grid.currentsubrow
```

**Setting Syntax**

```javascript
var nIdx = this.Grid00.currentsubrow;
```

**Remark**

- 선택된 Cell 이 없을 경우 "-1"이 저장됩니다.

- Grid 에서 한개 Row 는 두줄 이상의 Sub Row 가 정의될 수 있습니다.
  여러줄로 정의된 Row 에서 현재 선택된 Cell 이 위치한 Sub Row 의 인덱스가 저장됩니다.

- Sub Row 의 인덱스는 "0" 부터 시작하며 각 Row 의 동일 위치에 있는 Cell은 동일한 Sub Row 인덱스값을 갖습니다.

- Sub Row 가 정의되지 않고 한줄로 이루어진 Row 의 Sub Row 인덱스는 항상 "0" 이 됩니다.

- 합병(Merge) 된 Cell은 합병된 첫번째 Cell 의 Sub Row 인덱스를 갖습니다.


---

### cursor

> Components > Component > Grid > Property > cursor

**Description**

Grid 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.cursor[= strCursor]
```

**Setting Syntax**

```javascript
strCursor ::= 'none' | 'auto' | 'default' | 'copy' | 'crosshair' | 'help' | 'move' | 'not-allowed' | 'pointer' | 'progress' | 'text' | 'wait' | 'ew-resize' | 'e-resize' | 'w-resize' | 'ns-resize' | 'n-resize' | 's-resize' | 'nesw-resize' | 'ne-resize' | 'sw-resize' | 'nwse-resize' | 'nw-resize' | 'se-resize'
```
```javascript
* XCSS
cursor : default;

* Script ( normal property )
this.Grid00.cursor = "default";
```
- **`"none"`** — 마우스 포인터를 표시하지 않습니다.

* macOS NRE는 지원하지 않습니다.
- **`"auto"`** — 컴포넌트의 특성에 맞는 포인터가 표시됩니다.

Edit계열 컴포넌트는 "text" 포인터가 표시됩니다.
그외 계열 컴포넌트는 "arrow" 포인터가 표시됩니다.
- **`"default"`** — 시스템의 기본 포인터가 표시됩니다.

일반적으로 "arrow" 포인터가 표시됩니다.
- **`"copy"`** — 화살표와 작은 십자("+") 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"crosshair"`** — 십자("+") 모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"help"`** — 화살표와 작은 물음표 모양의 포인터가 표시됩니다.

* Safari 브라우저는 물음표 모양의 포인터가 표시됩니다.
* macOS NRE 는 지원하지 않습니다.
- **`"move"`** — 십자 화살표 모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"not-allowed"`** — 금지 표지판 모양의 포인터가 표시됩니다.

* Safari 브라우저는 화살표와 금지 표지판 모양의 포인터가 표시됩니다.
* macOS NRE 는 지원하지 않습니다.
- **`"pointer"`** — 손모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"progress"`** — OS 또는 환경에 따라 다른 형태의 포인터가 표시됩니다.

원, 화살표와 모래시계, 화살표와 원 등 다양한 형태로 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"text"`** — 아이("I") 모양의 포인터가 표시됩니다.
- **`"wait"`** — OS 또는 환경에 따라 다른 형태의 포인터가 표시됩니다.

원, 모래시계, 시계 등 다양한 형태로 표시됩니다.
- **`"ew-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"e-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"w-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"ns-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"n-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"s-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"nesw-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"ne-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"sw-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"nwse-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"nw-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"se-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

**Remark**

- cursor 속성값을 설정하지 않으면 undefined 가 설정되고 "auto" 로 동작합니다.

- disable 상태인 서브컨트롤이 있는 컴포넌트의 경우 마우스 포인터는 서브컨트롤 영역에서
   서브컨트롤의 disable status값이 적용되지 않고, 컴포넌트의 enable status 설정값이 적용됩니다.
   서브컨트롤과 컴포넌트가 모두 disable 상태일 때는 parent 의 enable status 설정값이 적용됩니다.


---

### enable

> Components > Component > Grid > Property > enable

**Description**

Grid 의 사용가능 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.enable[= benable]
```

**Setting Syntax**

```javascript
benable ::= 'true' | 'false'
```
```javascript
this.Grid00.enable = true; 
this.Grid00.enable = false;
```
- **`true`** — Grid 을(를) 사용할 수 있게 설정합니다.
- **`false`** — Grid 을(를) 사용할 수 없게 설정합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "disabled" Status 가 적용됩니다.

**Remark**

- enable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enable 속성값이 false 이면 컴포넌트가 화면에 표시되지만 포커스나 입력을 받을 수 없습니다.

- Div 와 같은 컨테이너 컴포넌트의 enable 속성값을 false 로 설정하면 자식 컴포넌트도 모두 Disable 됩니다.


---

### enableevent

> Components > Component > Grid > Property > enableevent

**Description**

Grid 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.enableevent[= bEvent]
```

**Setting Syntax**

```javascript
bEvent ::= 'true' | 'false'
```
```javascript
this.Grid00.enableevent = true;  

this.Grid00.enableevent = false;
```
- **`true`** — Grid 에서 이벤트가 발생하도록 설정합니다.
- **`false`** — Grid 에서 이벤트가 발생하지 않도록 설정합니다.

**Remark**

- enableevent 속성을 false 로 설정하면 이벤트 발생으로 인한 처리속도 지연과 화면 깜빡임을 방지할 수 있습니다.


---

### enableredraw

> Components > Component > Grid > Property > enableredraw

**Description**

Grid 에 변경이 발생하면 화면을 자동으로 다시 그릴 지 설정하는 속성입니다.

**Syntax**

```javascript
Grid.enableredraw[= bRedraw]
```

**Setting Syntax**

```javascript
bRedraw ::= 'true' | 'false'
```
```javascript
this.Grid00.enableredraw = true;
this.Grid00.enableredraw = false;
```
- **`"true"`** — Grid 에 변경이 발생하면 화면을 자동으로 다시 그립니다.
- **`"false"`** — Grid 에 변경이 발생하여도 화면을 자동으로 다시 그리지 않습니다.

**Remark**

- enableredraw 속성을 false 로 설정하면 컴포넌트가 변경되어도 화면에 반영되지 않습니다.

- enableredraw 속성값이 false 에서 true 로 변경되면 화면 다시 그리기가 즉시 수행됩니다.

- Div 와 같이 자식 컴포넌트를 갖는 컴포넌트는 화면 다시 그리기가 자식 컴포넌트에는 적용되지 않고 자기 자신에만 영향을 줍니다.


---

### extendsizetype

> Components > Component > Grid > Property > extendsizetype

**Description**

autosizingtype 속성에 의해 Row 의 높이가 자동조절될 때 각 Row 별로 따로 조절 할 지 설정하는 속성입니다.

**Syntax**

```javascript
Grid.extendsizetype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'row'
```
```javascript
this.Grid00.extendsizetype = "row";
```
- **`"none"`** — 각 Row 마다 높이를 따로 설정하지 않고, 모든 Row 가 동일한 높이로 설정됩니다.

표시해야 할 데이터의 높이가 가장 큰 Cell 에 맞춰 모든 Row 의 높이가 결정됩니다.
사용자가 마우스로 Row 의 높이를 변경하면 모든 Row 의 높이가 동일한 높이로 변경됩니다.
- **`"row"`** — 각 Row 마다 높이를 따로 설정합니다.

표시해야 할 데이터의 높이가 가장 큰 Cell 에 맞춰 각 Row 의 높이가 결정됩니다.
사용자가 마우스로 Row 의 높이를 변경하면 해당 Row 의 높이만 변경됩니다.

**Remark**

- extendsizetype 속성값을 설정하지 않으면 "none"으로 적용됩니다.

- band 속성값이 "body" 인 Row 에만 적용되는 속성입니다.

- 한 개의 Row 가 두 줄 이상으로 디자인 되었다면 각 줄에서 가장 높이가 큰 Cell 을 모두 합친 높이가 Row 의 높이가 됩니다.

- cellsizingtype 속성값을 설정하면 마우스로 Row 의 높이 변경이 가능합니다.


---

### fastvscrolltype

> Components > Component > Grid > Property > fastvscrolltype

**Description**

Grid 에서 세로 스크롤 시 팝업으로 표시되는 Row 의 위치를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.fastvscrolltype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'default' | 'topdisplay' | 'centerdisplay' | 'topbottomdisplay' | 'topcenterbottomdisplay' | 'trackbarfollow'
```
```javascript
this.Grid00.fastvscrolltype = "trackbarfollow";
```
- **`"default"`** — 스크롤 시 팝업으로 특정 Row 를 표시하지 않고 모든 데이터를 화면에 표시합니다.
- **`"topdisplay"`** — 스크롤 시 Body 영역의 상단에 팝업으로 특정 Row 를 표시합니다.
- **`"centerdisplay"`** — 스크롤 시 Body 영역의 중앙에 팝업으로 특정 Row 를 표시합니다.
- **`"topbottomdisplay"`** — 스크롤 시 Body 영역의 상단과 하단에 팝업으로 특정 Row 를 표시합니다.
- **`"topcenterbottomdisplay"`** — 스크롤 시 Body 영역의 상단, 중앙, 하단에 팝업으로 특정 Row 를 표시합니다.
- **`"trackbarfollow"`** — 스크롤 시 TrackBar 의 위치에 따라서 팝업으로 표시된 특정 Row 의 위치가 이동합니다.

**Remark**

- fastvscrolltype 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- 세로 스크롤 시 표시되는 데이터의 갯수를 제한하여 스크롤 성능을 향상시키기 위하여 사용하는 속성입니다.
  스크롤 중에는 팝업으로 표시된 Row 에 스크롤된 위치의 데이터가 갱신되어 표시되고, 스크롤이 종료되면 전체 데이터가 Grid 에 표시됩니다.

- Desktop 환경에서는 TrackBar 로 스크롤 시 해당 기능이 활성화 됩니다.
   Mobile 환경에서는 Flip 으로 스크롤 시 해당 기능이 활성화 됩니다.

- 팝업으로 표시되는 Row 의 높이는 디자인 시 정의된 포맷의 Row 높이가 적용됩니다.


---

### fillareatype

> Components > Component > Grid > Property > fillareatype

**Description**

Grid 에서 데이터가 없는 영역이 표시되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.fillareatype[= enumFilltype]
```

**Setting Syntax**

```javascript
enumFilltype ::= 'none' | 'linerow' | 'datarow' | 'controlrow' | 'allrow'
```
```javascript
this.Grid00.fillareatype = "linerow";
```
- **`"none"`** — 데이터가 없는 영역에 특별한 표시를 하지 않습니다.
- **`"linerow"`** — 데이터가 없는 영역에 Cell 라인을 그린 후 빈값을 표시합니다.
- **`"datarow"`** — 데이터가 없는 영역에 Cell 라인을 그린 후 특정값이 있는 Cell 은 값을 표시합니다.

displaytype 속성값이 "control" 계열이 아닌 값으로 설정된 Cell 중
Const Column 이 설정된 Cell 이나 상수값, 동적으로 생성된 값이 있는 Cell 은 값이 표시됩니다.
- **`"controlrow"`** — 데이터가 없는 영역에 Cell 라인을 그린 후 컨트롤이 설정된 Cell 은 컨트롤을 표시합니다.

displaytype 속성값이 "control" 계열로 설정된 Cell 은 컨트롤을 표시합니다.
- **`"allrow"`** — 데이터가 없는 영역에 Cell 라인을 그린 후 특정값과 컨트롤이 설정된 Cell 을 모두 표시합니다.

**Remark**

- fillareatype 속성값을 설정하지 않으면 "none"으로 적용됩니다.

- Grid 의 크기보다 DataSet 의 데이터가 적을 때 Grid 내의 하단 빈공간을 어떻게 표시할지 결정하는 속성입니다.

- "datarow" 와 "controlrow" 의 구분은 displaytype 속성값의 종류에 따라 구분합니다.

- 바인드 된 DataSet 에 데이터가 없는 경우 fillareatype 속성값에 따라 Grid 가 표시됩니다.


---

### flexgrow

> Components > Component > Grid > Property > flexgrow

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축) 여백을 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다.

**Syntax**

```javascript
Grid.flexgrow[= fVal]
```

**Setting Syntax**

- **`fVal`** — 컴포넌트의 크기를 재조정할 비율을 설정합니다.

**Remark**

- flexgrow 속성값을 설정하지 않으면 undefined로 설정되고 0 값으로 동작합니다.
  속성값이 0이면 크기를 재조정하지 않습니다.
    
- Layout 컨테이너 내 배치된 컴포넌트 중 flexgrow 속성값이 0보다 큰 값으로 설정된 컴포넌트를 대상으로 Main Axis의 여백을 설정한 비율만큼 나누어 크기에 적용합니다.

- maxwidth, maxheight 속성값을 설정한 경우에는 해당 크기보다 크게 크기가 조정되지는 않습니다.


◆ fittocontents 속성과 같이 사용하는 경우

아래와 같은 경우 컴포넌트의 flexgrow 속성값이 무시되고 fittocontents 속성만 적용됩니다.

- Layout 오브젝트 또는 Panel 컴포넌트의 type 속성값이 "horizontal"이고
  컴포넌트의 fittocontents 속성값이 "width" 또는 "both"일 때
- Layout 오브젝트 또는 Panel 컴포넌트의 type 속성값이 "vertical"이고
  컴포넌트의 fittocontents 속성값이 "height" 또는 "both"일 때


---

### flexshrink

> Components > Component > Grid > Property > flexshrink

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 영역이 컨테이너 영역을 초과하지 않도록 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다.

**Syntax**

```javascript
Grid.flexshrink[= fVal]
```

**Setting Syntax**

- **`fVal`** — 컴포넌트의 크기를 재조정할 비율을 설정합니다.

**Remark**

- flexshrink 속성값을 설정하지 않으면 undefined로 설정되고 1 값으로 동작합니다.
  속성값이 0이면 크기를 재조정하지 않습니다.
    
- Layout 컨테이너 내 배치된 컴포넌트 중 flexshrink 속성값이 0보다 큰 값으로 설정된 컴포넌트를 대상으로 Main Axis의 초과 영역을 설정한 비율만큼 나누어 크기에 적용합니다.

- minwidth, minheight 속성값을 설정한 경우에는 해당 크기보다 작게 크기가 조정되지는 않습니다.


◆ fittocontents 속성과 같이 사용하는 경우

아래와 같은 경우 컴포넌트의 flexshrink 속성값이 무시되고 fittocontents 속성만 적용됩니다.

- Layout 오브젝트 또는 Panel 컴포넌트의 type 속성값이 "horizontal"이고
  컴포넌트의 fittocontents 속성값이 "width" 또는 "both"일 때
- Layout 오브젝트 또는 Panel 컴포넌트의 type 속성값이 "vertical"이고
  컴포넌트의 fittocontents 속성값이 "height" 또는 "both"일 때


---

### font

> Components > Component > Grid > Property > font

**Description**

Grid 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.font[= strfont]
```

**Setting Syntax**

```javascript
strfont ::= [<font-style>] [<font-weight>] <font-size> ['/'<line-height>] <font-family>

<font-style> ::= 'normal' | 'italic'
<font-weight> ::= 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
<font-size> ::= <nSize> 'px'|'pt'|'em'|'rem'
<line-height> ::= 'normal' | <nValue> | <nPixel>'px' | <nPercent>'%'
<font-family> ::= <font-name> [',' <font-name>]*
```
```javascript
* XCSS
font : bold 12pt/30px arial, sans-serif;

* Script ( normal property )
this.Grid00.font = "bold 12pt/30px arial, sans-serif";
```
- **`<font-style>`** — 폰트의 스타일을 설정합니다.

"normal" 설정 시 스타일이 적용되지 않습니다.
"italic" 설정 시 기울임 스타일이 적용됩니다.
- **`<font-weight>`** — 폰트의 굵기를 설정합니다.

"normal" 설정 시 굵기가 적용되지 않습니다.
"bold" 설정 시 굵은 폰트가 적용됩니다.

"100"~"900" 로 설정 시 설정한 굵기로 폰트가 적용됩니다.
"100"~"900" 로 설정 시 굵기에 해당하는 폰트가 정의되어 있어야 합니다.
- **`<font-size>`** — 폰트 크기의 단위는 아래와 같이 절대 길이 단위와 상대 길이 단위로 설정할 수 있습니다.
단위를 지정하지 않으면 속성값이 적용되지 않습니다.
- 절대 길이 단위: pixel("px"), point("pt")
- 상대 길이 단위: "em", "rem"

폰트 크기 단위를 "em", "rem"으로 설정한 경우에는 아래와 같이 폰트 크기가 계산됩니다.
- "em": 상위 컴포넌트 font-size 기준으로 상대적인 크기를 설정
- "rem": MainFrame font-size 기준으로 상대적인 크기를 설정
- **`<nSize>`** — 폰트 크기 단위에 따라 정수 또는 소수로 설정합니다.
음수값은 설정할 수 없습니다.
- "px", "pt": 정수
- "em", "rem": 정수 또는 소수
- **`<line-height>`** — 텍스트가 여러줄로 표시되는 경우 줄 사이의 간격을 설정합니다.

음수값을 설정할 수 없습니다.

"normal" 설정 시 줄 사이의 간격을 설정하지 않습니다.
"normal" 설정 시 웹브라우저마다 줄 사이의 간격이 다르게 적용됩니다.
"normal" 설정 시 Nexacro Runtime Environment는 폰트 크기에 곱할 값(<nValue>값)이 "1.15" 일 때와 동일하게 동작합니다.
- **`<nValue>`** — 폰트 크기에 곱할 값을 설정합니다.

계산 결과값이 줄 사이 간격으로 적용됩니다.
- **`<nPixel>`** — 줄 사이의 간격을 pixel 단위의 숫자로 설정합니다.

"px" 단위를 생략할 수 없습니다.
- **`<nPercent>`** — 폰트 크기에 곱할 비율값을 설정합니다.

계산 결과값이 줄 사이 간격으로 적용됩니다.
"%" 단위를 생략할 수 없습니다.
- **`<font-family>`** — 폰트 이름을 리스트로 설정합니다.

콤마(",")로 구분하여 폰트 이름을 여러개 설정할 수 있습니다.
먼저 선언된 폰트가 우선적으로 적용됩니다.
선언된 폰트가 시스템에 없을 경우 선언된 순서대로 사용 가능한 폰트를 적용합니다.
선언된 폰트가 모두 없을 경우 시스템 기본 폰트가 적용됩니다.
- **`<font-name>`** — 폰트의 이름을 설정합니다.

**Remark**

- font 속성값을 설정하지 않으면 undefined 가 설정되고, "12pt/normal Verdana" 로 동작합니다.

- font 속성의 폰트 크기가 변경되면 <line-height> 에 적용된 값에 따라 줄간격이 변경될 수 있습니다.

- <font-weight> 를 수치로 설정 시 "400" 값이 일반적인 굵기로 적용되고, "700" 값이 "bold" 로 적용됩니다.
   폰트에 수치값에 해당하는 폰트굵기가 없다면 "400" 과 "700" 중 가까운 값으로 표시됩니다.

- UserFont 사용 시 환경별로 지원하는 포맷정보는 "Appendix > Supported UserFont" 항목을 참고하세요.


◆ WRE 제약

- -nexa-text-align 속성값이 "right" 일 때 font 속성에 "italic" 을 설정하면 마지막 텍스트의 기울어진 부분이 잘려서 표시될 수 있습니다.
   웹브라우저에서 텍스트영역을 일반글자 기준으로 처리한 후 기울임을 적용하면서 발생하는 문제입니다.


---

### formatid

> Components > Component > Grid > Property > formatid

**Description**

formats 속성에 정의된 포맷 중 Grid 에 표시할 포맷의 ID 를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.formatid[= strFormatID]
```

**Setting Syntax**

```javascript
this.Grid00.formatid = "default";
```
- **`strFormatID`** — formats 속성에 정의된 포맷 중 Grid 에 표시할 포맷의 ID 를 문자열로 설정합니다.

**Remark**

- 하나의 Grid 에서 데이터를 여러 형식으로 표현하고자 할 때 사용합니다.
  넥사크로 스튜디오의 Grid Contents Editor 를 통해 여러개의 포맷을 추가할 수 있습니다.

- formatid 속성을 설정하지 않으면 포맷 ID가 "default" 인 포맷이 표시됩니다.
  ID가 "default"인 포맷이 없다면 첫번째로 정의된 포맷이 표시됩니다.

- formatid 속성값을 변경하면 디자인 시 정의된 포맷이 표시됩니다.
  스크립트나 마우스로 변경한 포맷 정보는 유지되지 않습니다.


---

### formats

> Components > Component > Grid > Property > formats

**Description**

Grid 에 정의된 모든 포맷의 정보를 갖는 속성입니다.

**Syntax**

```javascript
Grid.formats[= strFormat]
```

**Setting Syntax**

```javascript
var strFormat = ' <Formats>'
              + '      <Format id="format1">'
              + ' 	<Columns>'
              + ' 		<Col band="left" size="80"/>'
              + ' 		<Col band="body" size="80"/>'
              + ' 		<Col band="right" size="80"/>'
              + ' 	</Columns>'
              + ' 	<Rows>'
              + ' 		<Row band="head" size="80"/>'
              + ' 		<Row band="body" size="80"/>'
              + ' 		<Row band="summ" size="80"/>'
              + ' 	</Rows>'
              + ' 	<Band id="head">'
              + ' 		<Cell col="0" text="col1"/>'
              + ' 		<Cell col="1" colspan="2">'
              + ' 			<Cell col="0" text="col2"/>'
              + ' 			<Cell col="1" text="col3"/>'
              + ' 		</Cell>'
              + ' 	</Band>'
              + ' 	<Band id="body">'
              + ' 		<Cell col="0" colid="col1" display="text" text="bind:col1"/>'
              + ' 		<Cell col="1" colid="col2" display="text" text="bind:col2"/>'
              + ' 		<Cell col="2" colid="col3" display="text" text="bind:col3"/>'
              + ' 	</Band>'
              + ' 	<Band id="summary">'
              + ' 		<Cell col="0" display="text"/>'
              + ' 		<Cell col="1" display="text"/>'
              + ' 		<Cell col="2" display="text"/>'
              + ' 	</Band>'
              + '      </Format>'
              + '      <Format id="format2">'
              + '      </Format>'
              + ' </Formats>'

this.Grid00.formats = strFormat;
```
- **`strFormat`** — XML 형식에 맞게 정의된 포맷 정보를 문자열로 설정합니다.

**Remark**

- formats 속성을 동적으로 변경하기 위해서는 전체 포맷을 형식에 맞게 설정하여야 합니다.
  일부 포맷만 선택적으로 변경할 수 없습니다.


---

### head

> Components > Component > Grid > Property > head

**Description**

Grid 의 구성 요소 중 Head 밴드 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Grid.head
```

**Setting Syntax**

```javascript
this.Grid00.head.background = "red";
```

**Remark**

- formats 속성에 여러개의 포맷이 선언되어 있을 경우 현재 화면에 표시되는 포맷의 Head 밴드를 갖습니다.

- Head 밴드에 Cell 이 없는 경우도 밴드 오브젝트는 존재합니다.


---

### height

> Components > Component > Grid > Property > height

**Description**

Grid 을(를) 표시하기 위한 높이를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.height[= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Grid00.height = 10; 
this.Grid00.height = "10px"; 
this.Grid00.height = 10%"; 
this.Grid00.height = Button00:10%";
```
- **`<strCompID>`** — Grid 의 높이를 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Grid 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Grid 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 높이가 적용됩니다.
- **`<nVal>`** — Grid 의 높이를 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.


* <strCompID> 값을 생략했을 때 :
- "px": Grid의 높이 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 Grid의 높이 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Grid의 높이 결정
- "rem": MainFrame font-size 속성값을 기준으로 Grid의 높이 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID> 값은 무시되고 설정값이 Grid의 높이 결정
- "%": <strCompID>의 height 속성값을 기준으로 Grid의 높이 결정
<strCompID> 값 설정 시 "em", "rem" 단위는 지원하지 않습니다.

**Remark**

- 높이값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 높이값에 기준 컴포넌트 또는 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

◆ 기준 컴포넌트 설정 시 유의할 점

- 속성값을 기준 컴포넌트(<strCompID>)를 참조하도록 설정한 경우 다음 사항을 유의해주세요.

스크립트로 속성값에 설정한 기준 컴포넌트 값(<strCompID>)을 변경하는 경우 유효한 컴포넌트 값이 아니면(잘못된 컴포넌트 id, 부모 또는 stepindex가 다른 컴포넌트) 기준 컴포넌트 값은 무시하고 부모를 기준으로 좌표값(<nVal>)을 적용합니다.
스크립트로 기준 컴포넌트의 크기나 위치 속성값을 변경되는 경우(속성값에 영향을 주는 메소드 실행으로 인한 변경 포함) 변경된 속성값이 기준 컴포넌트를 참조하는 컴포넌트에 바로 반영되지 않습니다.
예를 들어 Button01 컴포넌트의 left 속성값이 "Button00:10px"인 경우 스크립트로 Button00 컴포넌트의 right 속성값이 변경하더라도 Button01 컴포넌트의 위치는 변경되지 않습니다.
기준 컴포넌트의 크기나 위치 속성값이 변경된 것을 기준 컴포넌트를 참조하는 컴포넌트에 반영하려면 스크립트에서 기준 컴포넌트의 크기나 위치 속성값 변경 후 Form 오브젝트의 resetScroll 메소드를 실행해주어야 합니다.


---

### hscrollbar

> Components > Component > Grid > Property > hscrollbar

**Description**

Grid 의 서브컨트롤인 수평 스크롤바의 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Grid.hscrollbar
```

**Setting Syntax**

```javascript
this.Grid00.hscrollbar.decbuttonsize = 30;
```

**Remark**

- scrollbartype 속성값과 앱 실행 환경에 따라 반환하는 오브젝트가 달라집니다.
  ScrollBarControl 또는 ScrollindicatorControl 오브젝트를 반환합니다.

- hscrollbar 속성을 사용하여 수평 스크롤바의 속성값을 변경할 수 있습니다.

- hscrollbar 속성은 읽기전용이므로 해당 속성에 다른 컨트롤을 설정할 수 없지만,
  hscrollbar 속성이 갖는 수평 스크롤바 오브젝트의 하위 속성은 수정이 가능합니다.


---

### id

> Components > Component > Grid > Property > id

**Description**

Grid의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.id
```

**Setting Syntax**

- **`id`** — Grid를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### initvalueid

> Components > Component > Grid > Property > initvalueid

**Description**

Grid 에 적용될 InitValue 의 ID 를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.initvalueid[= strValueID]
```

**Setting Syntax**

- **`strValueID`** — InitValueDefinition 영역에 정의된 InitValue 파일에서 Grid 에 적용할 항목의 ID 를 문자열로 설정합니다.

**Remark**

- Grid 가 화면에 표시된 후에는 속성값을 설정하거나 변경 할 수 없습니다.
   Grid 를 동적으로 생성 시 show() 메소드 실행 전에 속성값을 설정하여야 합니다.

- Screen 별로 Environment 의 initvaluefileid 속성을 각각 설정하면 Screen 에 따라 다른 초기값을 설정할 수 있습니다.

- InitValueDefinition 영역에 한 개 이상의 InitValue 파일을 정의할 수 있고,
   InitValue 파일에는 컴포넌트별로 여러개의 초기값 정의를 할 수 있습니다.


---

### layoutorder

> Components > Component > Grid > Property > layoutorder

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 순서를 설정합니다.

**Syntax**

```javascript
Grid.layoutorder[= nVal]
```

**Setting Syntax**

- **`nVal`** — 컴포넌트의 배치 순서를 설정합니다.

**Remark**

- layoutorder 속성값을 설정하지 않으면 0으로 설정됩니다.

- 속성값이 음수인 경우에는 0으로 설정됩니다.

- 같은 값으로 2개 이상의 컴포넌트의 속성값을 설정할 수 있습니다. 
  속성값이 같은 경우에는 생성 순서(Z-Order)에 따라 배치 순서가 달라집니다.


---

### left

> Components > Component > Grid > Property > left

**Description**

Grid 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.left[= nLeft]
```

**Setting Syntax**

```javascript
nLeft ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Grid00.left = 10; 
this.Grid00.left = "10px"; 
this.Grid00.left = "10%"; 
this.Grid00.left = "Button00:10px"; 
this.Grid00.left = "Button00:10%";
```
- **`<strCompID>`** — Grid 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Grid 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Grid 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — Grid 의 좌측 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 left 속성값을 기준으로 Grid의 좌측 위치 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 Grid의 좌측 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Grid의 좌측 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 Grid의 좌측 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 right 속성값을 기준으로 Grid의 좌측 위치 결정
- "%": <strCompID>의 width 속성값을 기준으로 Grid의 좌측 위치 결정
<strCompID> 값 설정 시 "em", "rem" 단위는 지원하지 않습니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 기준 컴포넌트 또는 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

◆ 기준 컴포넌트 설정 시 유의할 점

- 속성값을 기준 컴포넌트(<strCompID>)를 참조하도록 설정한 경우 다음 사항을 유의해주세요.

스크립트로 속성값에 설정한 기준 컴포넌트 값(<strCompID>)을 변경하는 경우 유효한 컴포넌트 값이 아니면(잘못된 컴포넌트 id, 부모 또는 stepindex가 다른 컴포넌트) 기준 컴포넌트 값은 무시하고 부모를 기준으로 좌표값(<nVal>)을 적용합니다.
스크립트로 기준 컴포넌트의 크기나 위치 속성값을 변경되는 경우(속성값에 영향을 주는 메소드 실행으로 인한 변경 포함) 변경된 속성값이 기준 컴포넌트를 참조하는 컴포넌트에 바로 반영되지 않습니다.
예를 들어 Button01 컴포넌트의 left 속성값이 "Button00:10px"인 경우 스크립트로 Button00 컴포넌트의 right 속성값이 변경하더라도 Button01 컴포넌트의 위치는 변경되지 않습니다.
기준 컴포넌트의 크기나 위치 속성값이 변경된 것을 기준 컴포넌트를 참조하는 컴포넌트에 반영하려면 스크립트에서 기준 컴포넌트의 크기나 위치 속성값 변경 후 Form 오브젝트의 resetScroll 메소드를 실행해주어야 합니다.


---

### letter-spacing

> Components > Component > Grid > Property > letter-spacing

**Description**

Grid 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.letterSpacing[= strspace]
```

**Setting Syntax**

```javascript
strspace ::= 'normal' | <nVal> ['px']
```
```javascript
* XCSS
letter-spacing : 2px ;

* Script ( normal property )
this.Grid00.letterSpacing = "2px";
```
- **`"normal"`** — 문자 사이의 간격(자간)을 설정하지 않습니다.
- **`<nVal>`** — 문자 사이의 간격(자간)을 pixel 단위로 설정합니다.

스크립트 작성 시에는 "px" 단위 표기를 생략할 수 있습니다.
(XCSS 작성 시에는 "px" 단위를 포함해 작성해야 합니다).

**Remark**

- letter-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "letterSpacing"을 사용해야 합니다.


---

### locale

> Components > Component > Grid > Property > locale

**Description**

Grid 에 적용될 국가 및 언어(locale)를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.locale[= strlocale]
```

**Setting Syntax**

```javascript
this.Grid00.locale = "ko_KR";
```
- **`strlocale`** — "언어[_국가]" 형식의 문자열로 설정합니다.

**Remark**

- ISO 639-1에서 정의하고 있는 2-알파벳 언어 코드와 ISO 3166-1에서 정의하고 있는 2-알파벳 국가 코드를 조합하여 사용합니다.

- 국가 및 언어 코드는 "Appendix > Locale Code List" 항목을 참고하세요.


---

### maxheight

> Components > Component > Grid > Property > maxheight

**Description**

Grid 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.maxheight[= nMaxHeight]
```

**Setting Syntax**

```javascript
nMaxHeight ::= <nVal> ['px']
```
```javascript
this.Grid00.maxheight = 20; 
this.Grid00.maxheight = "20px";
```
- **`<nVal>`** — Grid 이(가) 화면에 표시되는 높이의 최대값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- height 속성값이 maxheight 보다 크면 화면에 표시되는 Grid 의 높이는 maxheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- maxheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxheight 속성값을 minheight 속성값보다 작게 설정하면 minheight 속성값이 maxheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 Grid 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.


---

### maxwidth

> Components > Component > Grid > Property > maxwidth

**Description**

Grid 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.maxwidth[= nMaxWidth]
```

**Setting Syntax**

```javascript
nMaxWidth ::= <nVal> ['px']
```
```javascript
this.Grid00.maxwidth = 20; 
this.Grid00.maxwidth = "20px";
```
- **`<nVal>`** — Grid 이(가) 화면에 표시되는 너비의 최대값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- width 속성값이 maxwidth 보다 크면 화면에 표시되는 Grid 의 너비는 maxwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- maxwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxwidth 속성값을 minwidth 속성값보다 작게 설정하면 minwidth 속성값이 maxwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 Grid 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.


---

### minheight

> Components > Component > Grid > Property > minheight

**Description**

Grid 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.minheight[= nMinHeight]
```

**Setting Syntax**

```javascript
nMinHeight ::= <nVal> ['px']
```
```javascript
this.Grid00.minheight = 20; 
this.Grid00.minheight = "20px";
```
- **`<nVal>`** — Grid 이(가) 화면에 표시되는 높이의 최소값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- height 속성값이 minheight 보다 작다면 화면에 표시되는 Grid 의 높이는 minheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- minheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minheight 속성값을 maxheight 속성값보다 크게 설정하면 maxheight 속성값이 minheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 Grid 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.


---

### minwidth

> Components > Component > Grid > Property > minwidth

**Description**

Grid 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.minwidth[= nMinWidth]
```

**Setting Syntax**

```javascript
nMinWidth ::= <nVal> ['px']
```
```javascript
this.Grid00.minwidth = 20; 
this.Grid00.minwidth = "20px";
```
- **`<nVal>`** — Grid 이(가) 화면에 표시되는 너비의 최소값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- width 속성값이 minwidth 보다 작으면 화면에 표시되는 Grid 의 너비는 minwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- minwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minwidth 속성값을 maxwidth 속성값보다 크게 설정하면 maxwidth 속성값이 minwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 Grid 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.


---

### mouseovertype

> Components > Component > Grid > Property > mouseovertype

**Description**

Grid 에 마우스 오버 시 mouseover Status 가 적용되는 단위를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.mouseovertype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'default' | 'cell' | 'row'
```
```javascript
this.Grid00.mouseovertype = "row";
```
- **`"default"`** — selecttype 속성에 설정된 단위로 mouseover Status 가 적용됩니다.
- **`"cell"`** — selecttype 속성에 설정된 값과 관계없이 Cell 단위로 mouseover Status 가 적용됩니다.
- **`"row"`** — selecttype 속성에 설정된 값과 관계없이 Row 단위로 mouseover Status 가 적용됩니다.

**Remark**

- mouseovertype 속성값을 설정하지 않으면 undefined 가 설정되고, "default" 로 동작합니다.


---

### name

> Components > Component > Grid > Property > name

**Description**

Grid 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### nodataimage

> Components > Component > Grid > Property > nodataimage

**Description**

Grid 에 표시할 데이터가 없을 때 출력할 이미지의 위치 경로를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.nodataimage[= strUrl]
```

**Setting Syntax**

```javascript
strImage ::= 'URL(' <theme-Image> | <web-Image> | <absolute-image> | <relative-image> ')'
```
```javascript
this.Grid00.nodataimage = "URL('theme://images/nodataimg.png')";                          // 테마 이미지
this.Grid00.nodataimage = "URL('http://www.tobesoft.com/images/gnb/btn_h1.gif')";  // 웹 이미지
this.Grid00.nodataimage = "URL('file://C:\\nodataimg.gif')";                                   // 절대경로 이미지
this.Grid00.nodataimage = "URL('Base::nodataimg.jpg')";                                         // TypeDefinition Prefix 이미지
this.Grid00.nodataimage = "URL('./nodataimg.jpg')";                                                // 상대경로 이미지
```
- **`<theme-Image>`** — 테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<absolute-image>`** — 로컬에 정의된 이미지를 "file://절대경로" 형식으로 설정합니다.

TypeDefinition 영역의 Services 에 정의된 Prefix 를 사용한 형식으로 설정합니다.
- **`<relative-image>`** — 폼의 위치를 기준으로 한 상대경로를 사용하여 설정합니다.

**Remark**

- Grid 의 fillareatype 속성값이 "none" 일 경우만 적용되는 속성입니다.

- Grid 의 Body 밴드 영역에 이미지가 표시되며 Head, Summary 밴드 영역에는 이미지가 표시되지 않습니다.

- 이미지 크기가 Grid 크기와 다르더라도 이미지 크기를 자동으로 조정하지 않습니다.

- Grid 에 nodatatext 속성값이 설정되어 있다면 텍스트가 함께 표시됩니다.


---

### nodatatext

> Components > Component > Grid > Property > nodatatext

**Description**

Grid 에 표시할 데이터가 없을 때 출력할 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.nodatatext[= strText]
```

**Setting Syntax**

```javascript
this.Grid00.nodatatext = "strText";
```
- **`strText`** — Grid 에 표시할 데이터가 없을 때 Body 밴드 영역에 출력할 텍스트를 설정합니다.

**Remark**

- Grid 의 fillareatype 속성값이 "none" 일 경우만 적용되는 속성입니다.

- Grid 의 Body 밴드 영역에 텍스트가 표시되며 Head, Summary 밴드 영역에는 텍스트가 표시되지 않습니다.

- Grid 에 nodataimage 속성값이 설정되어 있다면 이미지가 함께 표시됩니다.


◆ 접근성 설정 시 동작

nodatatext 속성값을 설정하고 Grid 컴포넌트에 표시할 데이터가 없을 때, Grid Body Band의 accessibilityenable 속성값에 따라 nodatatext 속성값의 처리 방식이 달라집니다.

- accessibilityenable 속성값이 true인 경우: 
  초점이 Grid Body Band 영역에 있을 때 nodatatext 속성값이 접근성 출력 대상에 포함됩니다.
- accessibilityenable 속성값이 false인 경우: 
  초점이 Grid 컴포넌트에 있을 때 nodatatext 속성값이 접근성 출력 대상에 포함됩니다.


---

### opacity

> Components > Component > Grid > Property > opacity

**Description**

Grid 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.opacity[= stropacity]
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8;
opacity : 80%;

* Script ( normal property )
this.Grid00.opacity = "0.8";
this.Grid00.opacity = 0.8;
this.Grid00.opacity = "80%";
```
- **`strOpacity`** — 0.0 ~ 1.0 사이의 값 또는 0.0% ~ 100.0% 사이의 값을 지정합니다.
0(또는 0%)을 설정하면 완전 투명, 1(또는 100%)을 설정하면 완전 불투명으로 처리됩니다.
1 이상의 값은 1로, 0 이하의 값은 0으로 처리됩니다. 마찬가지로 100% 이상의 값은 100%로, 0% 이하의 값은 0%로 처리됩니다.

XCSS는 숫자 또는 퍼센트 값으로만 설정할 수 있습니다.
Script는 숫자 또는 문자(숫자, 퍼센트 값)로 설정할 수 있습니다.

**Remark**

- opacity 속성값을 설정하지 않으면 undefined 가 설정되고, 1 로 동작합니다.

- Div 와 같이 자식 컴포넌트를 가질 수 있는 컴포넌트에 opacity 속성을 적용하면 자식 컴포넌트도 함께 적용됩니다.

- 부모와 자식 컴포넌트에 각각 opacity 속성이 설정되어 있으면 자식 컴포넌트의 투명도는 부모의 투명도에 추가적으로 적용됩니다.
   예를 들어 부모의 opacity가 0.5 이고 자식의 opacity가 0.4 이면 결과적으로 자식 컴포넌트는 0.2 의 투명도가 적용됩니다.


---

### pagerowcount

> Components > Component > Grid > Property > pagerowcount

**Description**

Grid 에서 한 화면에 실제로 표시할 수 있는 Row 의 갯수를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Grid.pagerowcount
```

**Setting Syntax**

```javascript
var nCnt = this.Grid00.pagerowcount;
```

**Remark**

- Grid 가 갖고 있는 Row 의 갯수가 아닌 Body 밴드 영역에 표시할 수 있는 Row 의 갯수입니다.
  Grid 의 높이와 Row 의 높이가 비율이 맞지 않아 부분만 출력되는 Row 는 계산에서 제외됩니다.


---

### parent

> Components > Component > Grid > Property > parent

**Description**

Grid 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Grid.parent
```

**Setting Syntax**

```javascript
var objParent = this.Grid00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- Grid 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### positionstep

> Components > Component > Grid > Property > positionstep

**Description**

부모 오브젝트가 화면분할기능을 사용할 때 Grid 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.positionstep[= nStep]
```

**Setting Syntax**

```javascript
this.Grid00.positionstep = 0; 
this.Grid00.positionstep = -1;
```
- **`nStep`** — Grid 이(가) 표시될 분할화면의 인덱스를 설정합니다.
"-1" 로 설정하면 모든 분할화면에 Grid 이(가) 표시됩니다.

분할화면의 인덱스는 "0" 부터 시작합니다.

**Remark**

- positionstep 에 설정된 인덱스값과 일치하는 분할화면에만 컴포넌트가 표시됩니다.

- 분할화면에 표시되지 않는 컴포넌트의 visible 속성값은 "false"로 변경되지 않습니다.


---

### readonly

> Components > Component > Grid > Property > readonly

**Description**

Grid 에서 편집을 허용할 지 설정하는 속성입니다.

**Syntax**

```javascript
Grid.readonly[= bReadOnly]
```

**Setting Syntax**

```javascript
bReadOnly ::= 'true' | 'false'
```
- **`true`** — Grid 의 편집을 불가능하게 설정합니다.

편집이 불가능하여도 Row 또는 Cell 의 선택 동작은 가능합니다.
Cell 의 edittype 속성값이 설정되어 있어도 편집기능은 동작하지 않습니다.
- **`false`** — Grid 의 편집을 가능하게 설정합니다.

**Remark**

- readonly 속성값을 설정하지 않으면 false 로 적용됩니다.


---

### right

> Components > Component > Grid > Property > right

**Description**

Grid 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.right[= nRight]
```

**Setting Syntax**

```javascript
nRight ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Grid00.right = 10; 
this.Grid00.right = "10px"; 
this.Grid00.right = "10%"; 
this.Grid00.right = "Button00:10px"; 
this.Grid00.right = "Button00:10%";
```
- **`<strCompID>`** — Grid 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Grid 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Grid 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — Grid 의 우측 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 right 속성값을 기준으로 Grid의 우측 위치 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 Grid의 우측 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Grid의 우측 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 Grid의 우측 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 left 속성값을 기준으로 Grid의 우측 위치 결정
- "%": <strCompID>의 width 속성값을 기준으로 Grid의 우측 위치 결정
<strCompID> 값 설정 시 "em", "rem" 단위는 지원하지 않습니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 기준 컴포넌트 또는 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

◆ 기준 컴포넌트 설정 시 유의할 점

- 속성값을 기준 컴포넌트(<strCompID>)를 참조하도록 설정한 경우 다음 사항을 유의해주세요.

스크립트로 속성값에 설정한 기준 컴포넌트 값(<strCompID>)을 변경하는 경우 유효한 컴포넌트 값이 아니면(잘못된 컴포넌트 id, 부모 또는 stepindex가 다른 컴포넌트) 기준 컴포넌트 값은 무시하고 부모를 기준으로 좌표값(<nVal>)을 적용합니다.
스크립트로 기준 컴포넌트의 크기나 위치 속성값을 변경되는 경우(속성값에 영향을 주는 메소드 실행으로 인한 변경 포함) 변경된 속성값이 기준 컴포넌트를 참조하는 컴포넌트에 바로 반영되지 않습니다.
예를 들어 Button01 컴포넌트의 left 속성값이 "Button00:10px"인 경우 스크립트로 Button00 컴포넌트의 right 속성값이 변경하더라도 Button01 컴포넌트의 위치는 변경되지 않습니다.
기준 컴포넌트의 크기나 위치 속성값이 변경된 것을 기준 컴포넌트를 참조하는 컴포넌트에 반영하려면 스크립트에서 기준 컴포넌트의 크기나 위치 속성값 변경 후 Form 오브젝트의 resetScroll 메소드를 실행해주어야 합니다.


---

### rowcount

> Components > Component > Grid > Property > rowcount

**Description**

Grid 가 갖고 있는 전체 Row 의 갯수를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Grid.rowcount
```

**Remark**

- 바인드된 DataSet 이 없거나 DataSet 에 데이터가 없는 경우 "0" 값을 갖습니다.

- 일반적으로 바인드된 DataSet 의 rowcount 속성값과 같습니다.
  그러나 트리형태의 Grid 인 경우 트리의 확장(expand), 축소(collapse) 상태에 따라 DataSet 의 rowcount 속성값과 다른 값을 가질 수 있습니다.


---

### rtl

> Components > Component > Grid > Property > rtl

**Description**

Grid 에서 내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.rtl
```

**Setting Syntax**

```javascript
bRtl ::= undefined | 'true' | 'false'
```
```javascript
var vRtl = this.Grid00.rtl;
```
- **`undefined`** — undefined 설정 시 상위 컴포넌트의 rtl 속성값이 적용됩니다.

사용자가 rtl 속성값을 설정하지 않거나 삭제했을 경우 undefined 가 설정됩니다.
- **`true`** — Grid 의 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 오른쪽으로 설정합니다.
Grid 의 내부 좌표계의 기준을 오른쪽으로 설정합니다.
Grid 의 텍스트 표시 기준을 오른쪽으로 설정합니다.
수직스크롤바가 있을 경우 왼쪽에 표시됩니다.
- **`false`** — Grid 의 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 왼쪽으로 설정합니다.
Grid 의 내부 좌표계의 기준을 왼쪽으로 설정합니다.
Grid 의 텍스트 표시 기준을 왼쪽으로 설정합니다.
수직스크롤바가 있을 경우 오른쪽에 표시됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 아랍권 같이 화면의 표시기준이 오른쪽인 환경에서 컨텐츠의 표시 기준을 변경하기 위해 설정하는 속성입니다.

- Grid 부터 Environment 까지 상위의 모든 rtl 속성값이 undefined 이면
   Environment 의 locale 속성에 설정된 국가 및 언어 설정값을 기준으로 rtl 속성이 적용됩니다.
   Environment 의 locale 속성값을 설정하지 않았을 경우 시스템의 국가 및 언어 설정값이 적용됩니다.


---

### scrollbarbarminsize

> Components > Component > Grid > Property > scrollbarbarminsize

**Description**

Grid 에 표시되는 스크롤바의 트랙바(TrackBar) 최소크기를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.scrollbarbarminsize[= nSize]
```

**Setting Syntax**

```javascript
this.Grid00.scrollbarbarminsize = 20;
```
- **`nSize`** — 스크롤바의 트랙바 최소크기를 pixel 단위의 숫자로 설정합니다.

음수값은 설정할 수 없습니다.

**Remark**

- scrollbarbarminsize 속성값을 설정하지 않으면 undefined 가 설정되고 트랙바 크기에 맞는 적당한 값으로 동작합니다.

- scrollbartrackbarsize 속성값이 설정되어 있으면 scrollbarbarminsize 속성값은 무시됩니다.

- Grid 의 크기 변경에 의해 트랙바의 크기가 자동변경될 때 scrollbarbarminsize 속성값 미만으로 작아지지 않습니다.

- 트랙바가 표시되는 영역보다 scrollbarbarminsize 속성값을 크게 설정해도 트랙바는 표시영역까지만 표현됩니다.


---

### scrollbarbaroutsize

> Components > Component > Grid > Property > scrollbarbaroutsize

**Description**

Grid 의 스크롤바에서 트랙바(TrackBar)가 사라지는 기준 크기를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.scrollbarbaroutsize[= nSize]
```

**Setting Syntax**

```javascript
this.Grid00.scrollbarbaroutsize( 50 );
```
- **`nSize`** — 스크롤바의 트랙바가 사라지는 기준 크기를 pixel 단위의 숫자로 설정합니다.

음수값은 설정할 수 없습니다.

**Remark**

- scrollbarbaroutsize 속성값을 설정하지 않으면 undefined 가 설정되고 트랙바 크기에 맞는 적당한 값으로 동작합니다.

- Grid 의 크기가 변경되어 스크롤바가 줄어들 때 트랙바를 표시할 공간이 scrollbarbaroutsize 속성값보다 작아지면 트랙바를 표시하지 않습니다.


---

### scrollbardecbuttonsize

> Components > Component > Grid > Property > scrollbardecbuttonsize

**Description**

Grid 에 표시되는 스크롤바의 감소 버튼(DecButton) 크기를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.scrollbardecbuttonsize[= nSize]
```

**Setting Syntax**

```javascript
this.Grid00.scrollbardecbuttonsize = 30;
```
- **`nSize`** — 스크롤바의 감소 버튼(DecButton) 크기를 pixel 단위의 숫자로 설정합니다.

음수값이나 Grid 의 너비/높이보다 큰 값을 설정할 수 없습니다.

**Remark**

- scrollbardecbuttonsize 속성값을 설정하지 않으면 scrollbarsize 에 적용된 값이 적용됩니다.

- scrollbardecbuttonsize 속성값은 수직/수평 스크롤바에 동일하게 적용됩니다.

- 수직스크롤바의 감소 버튼(DecButton) 높이는 scrollbardecbuttonsize 속성으로 설정하고 너비는 scrollbarsize 속성으로 설정합니다.

- 수평스크롤바의 감소 버튼(DecButton) 너비는 scrollbardecbuttonsize 속성으로 설정하고 높이는 scrollbarsize 속성으로 설정합니다.


---

### scrollbarincbuttonsize

> Components > Component > Grid > Property > scrollbarincbuttonsize

**Description**

Grid 에 표시되는 스크롤바의 증가 버튼(IncButton) 크기를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.scrollbarincbuttonsize[= nSize]
```

**Setting Syntax**

```javascript
this.Grid00.scrollbarincbuttonsize = 30;
```
- **`nSize`** — 스크롤바의 증가 버튼(IncButton) 크기를 pixel 단위의 숫자로 설정합니다.

음수값이나 Grid 의 너비/높이보다 큰 값을 설정할 수 없습니다.

**Remark**

- scrollbarincbuttonsize 속성값을 설정하지 않으면 scrollbarsize 에 적용된 값이 적용됩니다.

- scrollbarincbuttonsize 속성값은 수직/수평 스크롤바에 동일하게 적용됩니다.

- 수직스크롤바의 증가 버튼(IncButton) 높이는 scrollbarincbuttonsize 속성으로 설정하고 너비는 scrollbarsize 속성으로 설정합니다.

- 수평스크롤바의 증가 버튼(IncButton) 너비는 scrollbarincbuttonsize 속성으로 설정하고 높이는 scrollbarsize 속성으로 설정합니다.


---

### scrollbarsize

> Components > Component > Grid > Property > scrollbarsize

**Description**

Grid 에 표시되는 스크롤바의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.scrollbarsize[= nSize]
```

**Setting Syntax**

```javascript
this.Grid00.scrollbarsize = 30;
```
- **`nSize`** — 스크롤바의 크기를 pixel 단위의 숫자로 설정합니다.

**Remark**

- scrollbarsize 속성값은 수직스크롤바의 너비와 수평스크롤바의 높이에 동일하게 적용됩니다.

- scrollbarsize 속성값을 변경하면 스크롤바 내부버튼의 높이와 너비가 같이 변경됩니다.


---

### scrollbartrackbarsize

> Components > Component > Grid > Property > scrollbartrackbarsize

**Description**

Grid 에 표시되는 스크롤바의 트랙바(TrackBar) 크기를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.scrollbartrackbarsize[= nSize]
```

**Setting Syntax**

```javascript
this.Grid00.scrollbartrackbarsize = 20;
```
- **`nSize`** — 스크롤바의 트랙바 크기를 pixel 단위의 숫자로 설정합니다.

-1 을 설정하면 Grid 크기와 내부 컨텐츠에 따라 트랙바 크기가 자동으로 조절됩니다.
-2 이하의 음수값은 설정할 수 없습니다.

**Remark**

- scrollbartrackbarsize 속성값을 설정하지 않으면 undefined 가 설정되고 -1 로 동작합니다.

- scrollbartrackbarsize 속성을 설정하면 내부 컨텐츠와 관계없이 트랙바 크기가 고정되어 표시됩니다.


---

### scrollbartype

> Components > Component > Grid > Property > scrollbartype

**Description**

Grid 에 스크롤바가 표시되는 형식을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.scrollbartype[= strBartype]
```

**Setting Syntax**

```javascript
strBartype ::= <scrolltype> | <pairtype>

<scrolltype> ::= <desktype> | <mobiletype>
<pairtype> ::= <desktype> ' ' <desktype> | <mobiletype> ' ' <mobiletype>

<desktype> ::= 'default' | 'none' | 'fixed' | 'auto'
<mobiletype> ::= 'default' | 'none' | 'indicator' | 'autoindicator'
```
```javascript
this.Grid00.scrollbartype = "none"; 
this.Grid00.scrollbartype = "default autoindicator"; 
this.Grid00.scrollbartype = "auto fixed"; 
this.Grid00.scrollbartype = "indicator none";
```
- **`<scrolltype>`** — scrollbartype 속성값을 하나만 설정하면 가로/세로 스크롤바에 동일한 값이 적용됩니다.
- **`<pairtype>`** — scrollbartype 속성값을 빈칸으로 구분한 두개의 값으로 설정합니다.

첫번째 값은 가로스크롤바에 적용되고, 두번째 값은 세로스크롤바에 적용됩니다.
- **`"default"`** — 데스크탑 환경인 경우 "auto" 로 적용됩니다.

모바일 환경인 경우 "autoindicator" 로 적용됩니다.
- **`"none"`** — 스크롤바 또는 인디케이터바를 표시하지 않습니다.
- **`"fixed"`** — 스크롤바를 항상 표시합니다.
- **`"auto"`** — 스크롤바가 필요할 때 자동으로 표시합니다.
- **`"indicator"`** — 스크롤 인디케이터바가 필요할 때 자동으로 표시합니다.
- **`"autoindicator"`** — 스크롤이 동작될 때만 인디케이터바가 표시되었다가 스크롤이 종료되면 사라집니다.

**Remark**

- scrollbartype 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- 데스크탑에 적용되는 값과 모바일에 적용되는 값을 함께 설정할 수 있지만 권장하지 않습니다.
   ex) this.Grid00.scrollbartype = "fixed autoindicator";

**See Also**

Grid.scrolltype


---

### scrolldisplaymode

> Components > Component > Grid > Property > scrolldisplaymode

**Description**

Grid 컴포넌트에서 스크롤 시 화면이 갱신되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.scrolldisplaymode[= enumMode]
```

**Setting Syntax**

```javascript
enumMode ::= 'normal' | 'page' | 'line'
```
```javascript
this.Grid00.scrolldisplaymode = "page";
```
- **`"normal"`** — 스크롤과 동시에 화면 갱신이 발생합니다.
- **`"page"`** — 스크롤을 진행한 후 페이지 단위로 화면 갱신이 발생합니다.
- **`"line"`** — 스크롤을 진행한 후 Row 또는 Column 단위로 화면 갱신이 발생합니다.

**Remark**

- scrolldisplaymode 속성값을 설정하지 않으면 "normal" 로 적용됩니다.

- 속성값을 "line"으로 설정한 경우 실행 환경이나 조건에 따라 스크롤 동작 시 Grid 컴포넌트 화면 일부가 빈 것처럼 하얗게 표시될 수 있습니다.


---

### scrollindicatorsize

> Components > Component > Grid > Property > scrollindicatorsize

**Description**

Grid 에 표시되는 스크롤 인디케이터바의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.scrollindicatorsize[= nSize]
```

**Setting Syntax**

```javascript
this.Grid00.scrollindicatorsize = 30;
```
- **`nSize`** — 스크롤 인디케이터바의 크기를 pixel 단위의 숫자로 설정합니다.

**Remark**

- scrollindicatorsize 속성값은 수직스크롤바의 너비와 수평스크롤바의 높이에 동일하게 적용됩니다.

- Grid 에 스크롤 인디케이터바가 아닌 스크롤바가 표시될 경우 scrollbarsize 속성으로 크기를 설정하여야 합니다.


---

### scrollpixel

> Components > Component > Grid > Property > scrollpixel

**Description**

Grid 에서 스크롤이 수행되는 단위를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.scrollpixel[= enumScrollpixel]
```

**Setting Syntax**

```javascript
enumScrollpixel ::= 'default' | 'none' | 'all'
```
```javascript
this.Grid00.scrollpixel = "all";
```
- **`"default"`** — 환경에 따라 적용되는 값이 변경됩니다.

데스크탑 환경에서는 "none" 으로 적용됩니다.
모바일 환경에서는 "all" 로 적용됩니다.
- **`"none"`** — 터치 슬라이드, 마우스 드래그, 스크롤바의 TrackBar 를 사용하여 스크롤 시 Row 단위로 스크롤이 동작됩니다.
스크롤바의 증가/감소 버튼을 사용하여 스크롤 시 Row 단위로 스크롤이 동작됩니다.
마우스휠을 사용하여 스크롤 시 wheelscrollrow 속성값 단위로 스크롤이 동작됩니다.
- **`"all"`** — 터치 슬라이드, 마우스 드래그, 스크롤바의 TrackBar 를 사용하여 스크롤 시 Pixel 단위로 스크롤이 동작됩니다.
스크롤바의 증가/감소 버튼을 사용하여 스크롤 시 Row 단위로 스크롤이 동작됩니다.
마우스휠을 사용하여 스크롤 시 wheelscrollrow 속성값 단위로 스크롤이 동작됩니다.

**Remark**

- scrollpixel 속성값을 설정하지 않으면 "default" 로 적용됩니다.


---

### scrolltype

> Components > Component > Grid > Property > scrolltype

**Description**

Grid 에서 사용되는 스크롤의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.scrolltype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'both' | 'vertical' | 'horizontal'
```
- **`"none"`** — Grid 에서 수평/수직 스크롤을 사용하지 않습니다.
- **`"both"`** — Grid 에서 수평/수직 스크롤을 모두 사용합니다.
- **`"vertical"`** — Grid 에서 수직 스크롤만 사용합니다.

수평 스크롤은 사용하지 않습니다.
- **`"horizontal"`** — Grid 에서 수평 스크롤만 사용합니다.

수직 스크롤은 사용하지 않습니다.

**Remark**

- scrolltype 속성값을 설정하지 않으면 "both" 로 적용됩니다.

- Grid 에서 사용되는 스크롤에 대한 자세한 설정은 scrollbartype 속성을 사용하여야 합니다.

**See Also**

Grid.scrollbartype


---

### selectchangetype

> Components > Component > Grid > Property > selectchangetype

**Description**

Grid 에 마우스 클릭 시 Row 또는 Cell 선택이 결정되는 시점을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.selectchangetype[= enumChangetype]
```

**Setting Syntax**

```javascript
enumChangetype ::= 'down' | 'up'
```
```javascript
this.Grid00.selectchangetype = "up";
```
- **`"down"`** — Grid 에 마우스 왼쪽버튼으로 Down 했을 때 선택이 결정됩니다.

선택과 관련된 이벤트 발생 순서는 아래와 같습니다.
(1) Grid.onlbuttondown
(2) Dataset.canrowposchange
(3) Dataset.onrowposchanged
(4) Grid.oncellposchanged
(5) Grid.onselectchanged
(6) Grid.onlbuttonup
(7) Grid.oncellclick
- **`"up"`** — Grid 에 마우스 왼쪽버튼으로 Down&Up 했을 때 선택이 결정됩니다.

선택과 관련된 이벤트 발생 순서는 아래와 같습니다.
(1) Grid.onlbuttondown
(2) Grid.onlbuttonup
(3) Dataset.canrowposchange
(4) Dataset.onrowposchanged
(5) Grid.oncellposchanged
(6) Grid.onselectchagned
(7) Grid.oncellclick

**Remark**

- selectchangetype 속성값을 설정하지 않으면 "down"으로 적용됩니다.
  selectchangetype 속성값을 "down"으로 설정한 경우 Grid 컴포넌트의 onlbuttonup 이벤트가 발생하기 전 (1)번부터 (5)번까지의 이벤트 핸들러 함수 내에서 alert, confirm 메소드를 실행하면 이후 이벤트가 정상적으로 수행되지 않을 수 있습니다.

- selectchangetype 속성값에 따라 이벤트 발생순서가 변경됩니다.

- selecttype 속성값이 "area" 또는 "multiarea"인 경우에는 selectchangetype 속성값과 상관없이 "down"으로 설정한 것과 같은 순서로 이벤트가 발생합니다.
  select 상태가  변경된 시점의 정보는 onselectchanged 이벤트에서 확인할 수 있습니다.


---

### selectendcol

> Components > Component > Grid > Property > selectendcol

**Description**

Gird 에서 선택된 영역의 마지막 Cell 의 Column 인덱스를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Grid.selectendcol
```

**Setting Syntax**

```javascript
var nIdx = this.Grid00.selectendcol;
```

**Remark**

- 선택된 영역이 없거나 selecttype 속성값이 "row" 또는 "multirow" 인 경우 selectendcol 속성은 "-1"값을 갖습니다.

- 선택된 영역에서 좌상단 Cell 이 선택이 시작된 Cell로 되고, 우하단 Cell 이 마지막 선택된 Cell로 처리됩니다.

- Column 인덱스는 "0" 부터 시작합니다.

- 선택된 영역의 갯수에 관계없이 selectendcol 속성은 선택된 영역의 마지막 Cell의 Column 인덱스를 배열 형태로 갖고 있습니다.
  selecttype 속성값에 따라 한개 또는 한개 이상의 영역을 선택할 수 있습니다.


---

### selectendrow

> Components > Component > Grid > Property > selectendrow

**Description**

Gird 에서 선택된 영역의 마지막 Cell 의 Row 인덱스를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Grid.selectendrow
```

**Setting Syntax**

```javascript
var nIdx = this.Grid00.selectendrow;
```

**Remark**

- 선택된 영역이 없을 경우 selectendrow 속성은 "-9"값을 갖습니다.

- 선택된 영역에서 좌상단 Cell 이 선택이 시작된 Cell로 되고, 우하단 Cell 이 마지막 선택된 Cell로 처리됩니다.

- Row 인덱스는 "0" 부터 시작합니다.

- 선택된 영역의 갯수에 관계없이 selectendrow 속성은 선택된 영역의 마지막 Cell의 Row 인덱스를 배열 형태로 갖고 있습니다.
  selecttype 속성값에 따라 한개 또는 한개 이상의 영역을 선택할 수 있습니다


---

### selectendsubrow

> Components > Component > Grid > Property > selectendsubrow

**Description**

Gird 에서 선택된 영역의 마지막 Cell 의 Sub Row 인덱스를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Grid.selectendsubrow
```

**Setting Syntax**

```javascript
var nIdx = this.Grid00.selectendsubrow;
```

**Remark**

- 선택된 영역이 없거나 selecttype 속성값이 "row" 또는 "multirow" 인 경우 selectendsubrow 속성은 "-1"값을 갖습니다.

- 선택된 영역에서 좌상단 Cell 이 선택이 시작된 Cell로 되고, 우하단 Cell 이 마지막 선택된 Cell로 처리됩니다.

- Grid 에서 한개 Row 는 두줄 이상의 Sub Row 가 정의될 수 있습니다.
  여러줄로 정의된 Row 에서 현재 선택된 영역의 마지막 Cell 의 Sub Row 인덱스가 저장됩니다.

- SubRow 인덱스는 "0" 부터 시작합니다.

- selectendsubrow 속성은 선택된 영역의 마지막 Cell의 Sub Row 인덱스를 배열 형태로 갖고 있습니다.


---

### selectscrollmode

> Components > Component > Grid > Property > selectscrollmode

**Description**

Grid 영역 내에서 드래그 액션을 했을 때 수행되는 동작을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.selectscrollmode[= enumMode]
```

**Setting Syntax**

```javascript
enumMode ::= 'default' | 'select' | 'scroll'
```
```javascript
this.Grid00.selectscrollmode = "scroll";
this.Grid00.selectscrollmode = "select";
```
- **`"default"`** — 환경에 따라 적용되는 값이 변경됩니다.

Desktop 환경에서는 "select" 로 적용됩니다.
Mobile 환경에서는 "scroll" 로 적용됩니다.
- **`"select"`** — 드래그 액션이 시작된 위치의 아이템 또는 Cell 이 선택됩니다.
- **`"scroll"`** — 드래그 액션이 시직된 위치를 기준으로 스크롤이 동작합니다.

스크롤이 동작할 때 ondrag 와 ondrop 이벤트는 발생하지 않습니다.

* 왼쪽/윗쪽 방향으로 드래그 액션이 발생하면 스크롤의 트랙바는 오른쪽/아랫쪽으로 이동됩니다.

**Remark**

- selectscrollmode 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- 터치 또는 마우스로 드래그 액션을 발생시킬 수 있습니다.

-  Grid, ListView, ListBox 컴포넌트의 selectscrollmode 속성값이 "scroll"인 경우 드래그 관련 이벤트(ondrag, ondragmove, ondragenter, ondragleave, ondrop)는 발생하지 않습니다.


---

### selectstartcol

> Components > Component > Grid > Property > selectstartcol

**Description**

Gird 에서 선택된 영역의 시작 Cell 의 Column 인덱스를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Grid.selectstartcol
```

**Setting Syntax**

```javascript
var nIdx = this.Grid00.selectstartcol;
```

**Remark**

- 선택된 영역이 없거나 selecttype 속성값이 "row" 또는 "multirow" 인 경우 selectstartcol 속성은 "-1"값을 갖습니다.

- 선택된 영역에서 좌상단 Cell 이 선택이 시작된 Cell 로 되고, 우하단 Cell 이 마지막 선택된 Cell 로 처리됩니다.

- Column 인덱스는 "0" 부터 시작합니다.

- 선택된 영역의 갯수에 관계없이 selectstartcol 속성은 선택된 영역의 시작 Cell 의 Column 인덱스를 배열 형태로 갖고 있습니다.
  selecttype 속성값에 따라 한개 또는 한개 이상의 영역을 선택할 수 있습니다.


---

### selectstartrow

> Components > Component > Grid > Property > selectstartrow

**Description**

Gird 에서 선택된 영역의 시작 Cell 의 Row 인덱스를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Grid.selectstartrow
```

**Setting Syntax**

```javascript
var nIdx = this.Grid00.selectstartrow;
```

**Remark**

- 선택된 영역이 없을 경우 selectstartrow 속성은 "-9"값을 갖습니다.

- 선택된 영역에서 좌상단 Cell 이 선택이 시작된 Cell 로 되고, 우하단 Cell 이 마지막 선택된 Cell 로 처리됩니다.

- Row 인덱스는 "0" 부터 시작합니다.

- 선택된 영역의 갯수에 관계없이 selectstartrow 속성은 선택된 영역의 시작 Cell의 Row 인덱스를 배열 형태로 갖고 있습니다.
  selecttype 속성값에 따라 한개 또는 한개 이상의 영역을 선택할 수 있습니다


---

### selectstartsubrow

> Components > Component > Grid > Property > selectstartsubrow

**Description**

Gird 에서 선택된 영역의 시작 Cell 의 Sub Row 인덱스를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Grid.selectstartsubrow
```

**Setting Syntax**

```javascript
var nIdx = this.Grid00.selectstartsubrow;
```

**Remark**

- 선택된 영역이 없거나 selecttype 속성값이 "row" 또는 "multirow" 인 경우 selectstartsubrow 속성은 "-1"값을 갖습니다.

- 선택된 영역에서 좌상단 Cell 이 선택이 시작된 Cell로 되고, 우하단 Cell 이 마지막 선택된 Cell로 처리됩니다.

- Grid 에서 한개 Row 는 두줄 이상의 Sub Row 가 정의될 수 있습니다.
  여러줄로 정의된 Row 에서 현재 선택된 영역의 시작 Cell 의 Sub Row 인덱스가 저장됩니다.

- SubRow 인덱스는 "0" 부터 시작합니다.

- selectstartsubrow 속성은 선택된 영역의 시작 Cell의 Sub Row 인덱스를 배열 형태로 갖고 있습니다.


---

### selecttype

> Components > Component > Grid > Property > selecttype

**Description**

Grid 에서 선택되는 단위를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.selecttype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'row' | 'multirow' | 'cell' | 'area' | 'multiarea'
```
```javascript
this.Grid00.selecttype = "multirow";
```
- **`"row"`** — Grid 의 Body 밴드 영역에서 Row 를 하나만 선택할 수 있습니다.

selectscrollmode 속성값이 "select" 일 때 마우스로 드래그 시 왼쪽 버튼이 Down 된 Row 가 선택됩니다.
바인드 된 DataSet 의 rowposition 속성값은 선택된 Row 로 변경됩니다.
- **`"multirow"`** — Grid 의 Body 밴드 영역에서 Row 를 여러개 선택할 수 있습니다.

selectscrollmode 속성값이 "select" 일 경우 마우스로 드래그하여 여러개의 Row 를 선택할 수 있습니다.
Control 키와 Shift 키를 마우스와 함께 사용하여 여러개의 Row 를 선택할 수 있습니다.
바인드 된 DataSet 의 rowposition 속성값은 마지막에 선택된 Row 로 변경됩니다.
- **`"cell"`** — Grid 의 Body 밴드 영역에서 Cell 을 하나만 선택할 수 있습니다.

selectscrollmode 속성값이 "select" 일 때 마우스로 드래그 시 왼쪽 버튼이 Down 된 Cell 이 선택됩니다.
바인드 된 DataSet 의 rowposition 속성값은 선택된 Cell 의 Row 로 변경됩니다.
- **`"area"`** — Grid 의 Body 밴드 영역에서 직사각형 형태의 Area 를 하나만 선택할 수 있습니다.

selectscrollmode 속성값이 "select"일 경우 마우스로 드래그하여 Area 를 선택할 수 있습니다.
Shift 키를 마우스와 함께 사용하여 Area 를 선택할 수 있습니다.
바인드 된 DataSet 의 rowposition 속성값은 Area 에서 마지막에 선택된 Row 로 변경됩니다.
- **`"multiarea"`** — Grid 의 Body 밴드 영역에서 직사각형 형태의 Area 를 여러개 선택할 수 있습니다.

selectscrollmode 속성값이 "select"일 경우 마우스로 드래그하여 Area 를 선택할 수 있습니다.
Control 키와 Shift 키를 마우스와 함께 사용하여 여러개의 Area 를 선택할 수 있습니다.
바인드 된 DataSet 의 rowposition 속성값은 Area 에서 마지막에 선택된 Row 로 변경됩니다.

**Remark**

- selecttype 속성값을 설정하지 않으면 "row" 로 적용됩니다.

- selectype 속성값이 "row" 또는 "cell" 일 때 바인드 된 DataSet 의 rowposition 속성값을 변경하면 Grid 의 해당 Row 가 선택처리됩니다.

- selecttype 속성값이 "row", "cell" 이외의 값일 때는 바인드 된 DataSet 의 rowposition 속성값을 변경해도 Grid 의 선택이 변경되지 않고 기존값을 유지합니다.
   이 때, DataSet 의 rowposition 값과 Grid 에 표시된 선택의 위치가 달라지므로 사용에 주의하여야 합니다.

- selecttype 속성값에 따라 선택된 영역에 대한 정보는 
   selectstartrow, selectendrow, selectstartcol, selectendcol, selectstartsubrow, selectendsubrow  속성에 자동으로 반영됩니다.

- 모바일과 같이 입력장치가 터치인 환경에서는 selecttype 속성값이 "multirow", "multiarea" 일 때 다중선택을 할 수 없습니다.
   이는 기능상의 문제가 아니라 입력장치의 특성 때문입니다.


---

### showcellselection

> Components > Component > Grid > Property > showcellselection

**Description**

Grid 컴포넌트의 body 밴드에서 현재 선택된 Cell(currentcell 속성값에 해당하는 Cell)에 Border를 표시할지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.showcellselection[= bShow]
```

**Setting Syntax**

```javascript
bShow ::= true | false
```
```javascript
this.Grid00.showcellselection = true;
```
- **`true`** — body 밴드에서 선택된 Cell에 Border를 표시합니다
- **`false`** — body 밴드에서 선택된 Cell에 Border를 표시하지 않습니다.

**Remark**

- showcellselection 속성값을 설정하지 않으면 false로 적용됩니다.

- 속성값을 true로 설정하고 Grid 컴포넌트가 포커스를 가진 경우에만 Border를 표시합니다.

- 선택된 Cell에 표시되는 Border는 XCSS에 ".GridSelectionControl" 또는 ".Grid .body .row .cell .cellselection"으로 정의합니다.

- head, summary 밴드에는 적용되지 않습니다.


---

### showselection

> Components > Component > Grid > Property > showselection

**Description**

Grid 의 body 밴드에서 선택된 Cell 영역에 Border 의 표시여부를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.showselection[= bShow]
```

**Setting Syntax**

```javascript
bShow ::= 'true' | 'false'
```
```javascript
this.Grid00.showselection = true;
```
- **`true`** — body 밴드에서 선택된 Cell 영역에 Border 를 표시합니다.
- **`false`** — body 밴드에서 선택된 Cell 영역에 Border 를 표시하지 않습니다.

**Remark**

- showselection 속성값을 설정하지 않으면 false 로 적용됩니다.

- 선택된 Cell 영역에 표시되는 Border 는 XCSS 에 ".GridSelectionControl" 또는 ".Grid .body .selection" 으로 정의합니다.

- Grid 의 selecttype 속성값에 따라 선택되는 Cell 영역이 결정됩니다.

- Cell 영역에 표시되는 Border 는 Grid 의 head, summary 밴드에는 적용되지 않습니다.


---

### summary

> Components > Component > Grid > Property > summary

**Description**

Grid 의 구성 요소 중 Summary 밴드 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Grid.summary
```

**Setting Syntax**

```javascript
this.Grid00.summary.background  = "red";
```

**Remark**

- formats 속성에 여러개의 포맷이 선언되어 있을 경우 현재 화면에 표시되는 포맷의 Summary 밴드를 갖습니다.

- Summary 밴드에 Cell 이 없는 경우도 밴드 오브젝트는 존재합니다.


---

### summarytype

> Components > Component > Grid > Property > summarytype

**Description**

Summary 밴드가 Grid 에서 표시되는 위치를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.summarytype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'default' | 'top'
```
```javascript
this.Grid00.summarytype = "top";
```
- **`"default"`** — Grid 에서 Summary 밴드를 하단에 표시합니다.
- **`"top"`** — Grid 에서 Summary 밴드를 Head 밴드와 Body 밴드 사이에 표시합니다.

**Remark**

- summarytype 속성값을 설정하지 않으면 "default"로 적용됩니다.


---

### suppresshorzcell

> Components > Component > Grid > Property > suppresshorzcell

**Description**

Grid 에서 연속된 Column 의 값이 같을때 값을 하나만 표시할 Band 를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.suppresshorzcell[= enumSupHorz]
```

**Setting Syntax**

```javascript
enumSupHorz ::= 'none' | 'left' | 'right' | 'leftright'
```
```javascript
this.Grid00.suppresshorzcell = "left";
```
- **`"none"`** — 연속된 Column 의 값이 같아도 값을 생략하지 않고 모두 표시합니다.
- **`"left"`** — Left Band 에서 연속된 Column 의 값이 같을 경우 제일 왼쪽 Column 의 값만 표시합니다.
- **`"right"`** — Right Band 에서 연속된 Column 의 값이 같을 경우 제일 오른쪽 Column 의 값만 표시합니다.
- **`"leftright"`** — Left Band 에서 연속된 Column 의 값이 같을 경우 제일 왼쪽 Column 의 값만 표시합니다.

Right Band 에서 연속된 Column 의 값이 같을 경우 제일 오른쪽 Column 의 값만 표시합니다.

**Remark**

- suppresshorzcell 속성값을 설정하지 않으면 "none" 으로 적용됩니다.

- Body Band 에 속한 Cell 중 Left 또는 Right Band 로 설정된 Cell 에 적용되는 속성입니다.
   Left/Right Band 설정은 GridColumnControl 의 band 속성으로 설정합니다.

- suppress 속성이 설정되어 있는 Cell 은 suppresshorzcell 속성이 적용되지 않습니다.
   단, suppress 속성이 설정되어 있지만 세로로 합쳐져서 표시되지 않는 Cell 중 교차점이 아닌 Cell 은 suppresshorzcell 속성이 적용됩니다.
   (교차점이란 연속된 Column 에 Suppress 가 적용되어 있고, 해당 Row 가 Suppress 된 첫번째 또는 마지막 Row 가 아닌 위치를 의미합니다.)

- 값이 생략된 Cell 의 내부선은 표시되지 않지만 실제 Cell 이 합쳐진 것은 아닙니다.


---

### suppresslevel

> Components > Component > Grid > Property > suppresslevel

**Description**

Grid 에서 여러 Cell 에 suppress 속성을 설정했을 때 동일한 suppress 값에 대한 동작 방식을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.suppresslevel[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'allskip' | 'sameskip' | 'allcompare'
```
```javascript
this.Grid00.suppresslevel = "allcompare";
```
- **`"allskip"`** — suppress 값이 0 보다 크게 설정된 Cell 은 Suppress 를 다른 Cell 과 관계없이 독립적으로 처리합니다.

다른 Cell 의 suppress 속성값과 관계없이 동일한 데이터값이 반복될 경우 첫 Row 의 값만 표시합니다.
- **`"sameskip"`** — suppress 값이 0 보다 크게 설정된 Cell 중 현재 Cell 보다 한단계 상위 suppress 값을 가진 Cell 과 비교하여 Suppress 를 처리합니다.
suppress 값이 0 보다 크게 설정된 Cell 중 현재 Cell 과 동일한 suppress 값을 가진 Cell 은 Suppress 처리 시 비교하지 않습니다.

현재 Cell 보다 한단계 상위 suppress 값을 가진 Cell 과 비교하여, 상위 Cell 에 값 표시가 생략되었다면 현재 Cell 값이 반복될 경우 생략됩니다.
한단계 상위 suppress 값을 가진 Cell 이 여러개 일 경우, 모든 상위 Cell 에 값 표시가 생략되었다면 현재 Cell 값이 반복될 경우 생략됩니다.
- **`"allcompare"`** — suppress 값이 0 보다 크게 설정된 Cell 중 현재 Cell 과 suppress 값이 같거나 한단계 상위값을 가진 Cell 을 모두 비교하여 Suppress 를 처리합니다.

현재 Cell 과 suppress 값이 같거나 한단계 상위값을 가진 모든 Cell 에 값 표시가 생략되었다면, 현재 Cell 값이 반복될 경우 생략됩니다.

**Remark**

- suppresslevel 속성값을 설정하지 않으면 "sameskip"으로 적용됩니다.

- Cell 의 suppress 속성은 "1" 이 최상위 값이고, 값이 증가할 수록 단계가 낮아 집니다.

- "allcompare" 로 설정 시 suppress 속성값이 같거나 한단계 상위 Cell 을 모두 비교하여 처리하므로 Grid 의 Redraw 속도가 느려질 수 있습니다.

- "sameskip" 과 "allcompare" 는 suppress 값이 같은 Cell 에 대해 처리하는 방식이 다릅니다.


---

### tablecellarea

> Components > Component > Grid > Property > tablecellarea

**Description**

Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다.

**Syntax**

```javascript
Grid.tablecellarea[= strArea]
```

**Setting Syntax**

```javascript
strArea ::= <rowstart> <rowend> '/' <columnstart> <columnend> | <strArea>

<strPosition> ::= <rowstart> <rowend> '/' <columnstart> <columnend>
```
- **`<strPosition>`** — 컴포넌트를 배치할 Cell 좌표를 설정합니다.

rowstart, rowend 또는 columnstart, columnend 구분은 공백문자를 사용합니다.
rowstart, rowend 또는 columnstart, columnend 가 같은(하나의 Cell 영역만 설정) 경우에는 하나의 값만 표기할 수 있습니다.
예를 들어 0 / 0 또는 0 0 / 0 0 으로 설정할 수 있습니다.
- **`<strArea>`** — 컴포넌트를 배치할 tabletemplatearea 속성에서 설정한 Cell 이름을 설정합니다.

**Remark**

- 유효하지 않은 값을 설정한 경우에는 layoutorder, tabledirection 속성값에 따라 배치됩니다.

- 같은 영역에 2개 이상의 컴포넌트를 배치할 수 있습니다.

- row와 column의 start, end는 반대 방향으로 설정할 수 있습니다.
  예를 들어 "2 0 / 2 0"과 "0 2 / 0 2"은 같은 영역으로 처리합니다.


---

### taborder

> Components > Component > Grid > Property > taborder

**Description**

탭키 입력으로 컴포넌트간 포커스를 이동할 때 Grid 의 순서를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.taborder[= nTabOrder]
```

**Setting Syntax**

- **`nTabOrder`** — 0 이상의 정수로 설정합니다.

**Remark**

- taborder 속성값이 작은 컴포넌트에 포커스가 먼저 이동되고, 속성값이 클수록 나중에 포커스가 이동됩니다.

- taborder 속성값이 동일한 컴포넌트는 폼에 먼저 생성된 컴포넌트에 포커스가 먼저 이동됩니다.

- 스크립트로 taborder 속성값 변경 시 포커스 이동 순서가 변경됩니다.

- Div 와 같은 컨테이너 컴포넌트는 자식 컴포넌트 레벨에서 포커스 이동 순서가 별도로 정의됩니다.


---

### tabstop

> Components > Component > Grid > Property > tabstop

**Description**

탭키 입력으로 컴포넌트간 포커스를 이동할 때 Grid 이(가) 포커스를 받을 지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.tabstop[= bTabStop]
```

**Setting Syntax**

```javascript
bTabStop ::= 'true' | 'false'
```
- **`"true"`** — Grid 이(가) 탭키 입력에 의한 포커스를 받습니다.
- **`"false"`** — Grid 이(가) 탭키 입력에 의한 포커스를 받지 않습니다.

**Remark**

- tabstop 속성값이 "false"인 경우 taborder 속성값과 관계없이 포커스가 해당 컴포넌트를 건너뜁니다.

- tabstop 속성값에 관계없이 마우스로 직접 포커스를 주거나, setfocus() 메소드 사용 시 포커스를 갖습니다.

- Div 와 같은 컨테이너 컴포넌트에서 포커스를 받을 수 있는 자식 컴포넌트가 존재하면 해당 컴포넌트가 포커스를 갖습니다.


---

### tooltiptext

> Components > Component > Grid > Property > tooltiptext

**Description**

Grid 에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.tooltiptext[= strToolTipText]
```

**Setting Syntax**

```javascript
this.Grid00.tooltiptext = "This is ToolTip Text";
this.Grid00.tooltiptext = "";          // 풍선 도움말이 표시되지 않습니다.
this.Grid00.tooltiptext = null;        // 상위 컴포넌트의 풍선 도움말이 표시됩니다.
```
- **`strToolTipText`** — 풍선도움말에 표시할 텍스트를 설정합니다.

빈문자열(EmptyString) 설정 시 풍선도움말이 표시되지 않습니다.
null 또는 undefined 설정 시 상위컴포넌트(Form, Div 등)의 풍선도움말이 표시됩니다.

**Remark**

- tooltiptext 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- 마우스 포인터가 Grid 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.

- 풍선도움말이 표시된 상태에서 tooltiptext 속성값을 변경하면 풍선도움말이 사라집니다.


◆ Desktop WRE 제약

- 풍선도움말은 브라우저의 기능을 활용하므로 브라우저 사양에 따라 스타일에 차이가 있을 수 있습니다.
   NRE는 Chrome 의 스타일과 동일하게 적용됩니다.


---

### tooltiptype

> Components > Component > Grid > Property > tooltiptype

**Description**

Grid 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.tooltiptype[= enumTooltipType]
```

**Setting Syntax**

```javascript
enumTooltipType ::= 'default' | 'hover' | 'inplace' | 'default,mouseleave' | 'hover,mouseleave' | 'inplace,mouseleave'
```
```javascript
this.Grid00.tooltiptype = "hover";
```
- **`"default"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 Grid 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"hover"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 Grid 영역내에 멈춰서 일정시간이 경과하면 풍선도움말이 사라집니다.
Grid 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경되거나 사라진 풍선도움말이 다시 표시됩니다.
- **`"inplace"`** — Grid 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 Grid 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"default,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 Grid 영역에 있으면 풍선도움말이 사라지지 않습니다.
- **`"hover,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 Grid 영역에 있으면 풍선도움말이 사라지지 않습니다.
Grid 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경됩니다.
- **`"inplace,mouseleave"`** — Grid 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 Grid 영역에 있으면 풍선도움말이 사라지지 않습니다.

**Remark**

- tooltiptype 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- 마우스 포인터가 Grid 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.

- 풍선도움말이 표시된 상태에서 tooltiptext 속성값을 변경하면 tooltiptype 속성값에 관계없이 풍선도움말이 사라집니다.

- 표시되었다가 사라진 풍선도움말은 마우스 포인터가 Grid 영역을 나갔다가 들어오면 다시 표시됩니다.

- 마우스 포인터가 Grid 영역에서 벗어나면 풍선도움말이 사라집니다.

- 풍선도움말의 크기는 풍선도움말에 표시되는 텍스트의 길이와 크기에 맞춰 자동으로 조정됩니다.

- 풍선도움말에 표시되는 텍스트의 글꼴과 크기는 변경하실 수 없습니다.


---

### top

> Components > Component > Grid > Property > top

**Description**

Grid 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.top[= nTop]
```

**Setting Syntax**

```javascript
nTop ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Grid00.top = 10; 
this.Grid00.top = "10px"; 
this.Grid00.top = "10%"; 
this.Grid00.top = "Button00:10px"; 
this.Grid00.top = "Button00:10%";
```
- **`<strCompID>`** — Grid 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Grid 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Grid 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — Grid의 상단 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 top 속성값을 기준으로 Grid의 상단 위치 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 Grid의 상단 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Grid의 상단 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 Grid의 상단 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 bottom 속성값을 기준으로 Grid의 상단 위치 결정
- "%": <strCompID>의 height 속성값을 기준으로 Grid의 상단 위치 결정
<strCompID> 값 설정 시 "em", "rem" 단위는 지원하지 않습니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 기준 컴포넌트 또는 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

◆ 기준 컴포넌트 설정 시 유의할 점

- 속성값을 기준 컴포넌트(<strCompID>)를 참조하도록 설정한 경우 다음 사항을 유의해주세요.

스크립트로 속성값에 설정한 기준 컴포넌트 값(<strCompID>)을 변경하는 경우 유효한 컴포넌트 값이 아니면(잘못된 컴포넌트 id, 부모 또는 stepindex가 다른 컴포넌트) 기준 컴포넌트 값은 무시하고 부모를 기준으로 좌표값(<nVal>)을 적용합니다.
스크립트로 기준 컴포넌트의 크기나 위치 속성값을 변경되는 경우(속성값에 영향을 주는 메소드 실행으로 인한 변경 포함) 변경된 속성값이 기준 컴포넌트를 참조하는 컴포넌트에 바로 반영되지 않습니다.
예를 들어 Button01 컴포넌트의 left 속성값이 "Button00:10px"인 경우 스크립트로 Button00 컴포넌트의 right 속성값이 변경하더라도 Button01 컴포넌트의 위치는 변경되지 않습니다.
기준 컴포넌트의 크기나 위치 속성값이 변경된 것을 기준 컴포넌트를 참조하는 컴포넌트에 반영하려면 스크립트에서 기준 컴포넌트의 크기나 위치 속성값 변경 후 Form 오브젝트의 resetScroll 메소드를 실행해주어야 합니다.


---

### treeasynctoggle

> Components > Component > Grid > Property > treeasynctoggle

**Description**

Cell 이 트리 형식일 때 Collapse/Expand 에 의한 화면 갱신을 비동기(Async)로 수행할지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.treeasynctoggle[= bTreeAsync]
```

**Setting Syntax**

```javascript
bTreeAsync ::= 'true' | 'false'
```
```javascript
this.Grid00.treeasynctoggle = true;
```
- **`true`** — 트리 Cell 이 Collapse/Expand 될 때 화면 갱신이 비동기(Async)로 처리됩니다.

화면이 갱신되는 동안 마우스의 커서모양이 "wait" 로 표시됩니다.
- **`false`** — 트리 Cell 이 Collapse/Expand 될 때 화면 갱신이 동기(Sync)로 처리됩니다.

화면이 갱신되는 동안 마우스의 커서모양이 변경되지 않습니다.

**Remark**

- treeasynctoggle 속성값을 설정하지 않으면 false 로 적용됩니다.


---

### treeinitstatus

> Components > Component > Grid > Property > treeinitstatus

**Description**

Cell 이 트리 형식일 때 최초 로드 시 표시되는 트리의 상태를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.treeinitstatus[= enumInitstatus]
```

**Setting Syntax**

```javascript
enumInitstatus ::= 'collapse,null' | 'expand,null' | 'collapse,all' | 'expand,all'
```
```javascript
this.Grid00.treeinitstatus = "expand,all";
```
- **`"collapse,null"`** — Cell 의 treestate 속성에 설정된 Column 값이 "0" 이면 트리가 Collapse 상태로 표시됩니다.
Cell 의 treestate 속성에 설정된 Column 값이 "1" 이면 트리가 Expand 상태로 표시됩니다.

Cell 의 treestate 속성에 설정된 Column 이 없거나 Column 값이 Null 이면 잎(leaf) 노드는 Leaf 상태로 표시되고, 가지(branch) 노드는 Collapse 상태로 표시됩니다.
- **`"expand,null"`** — Cell 의 treestate 속성에 설정된 Column 값이 "0" 이면 트리가 Collapse 상태로 표시됩니다.
Cell 의 treestate 속성에 설정된 Column 값이 "1" 이면 트리가 Expand 상태로 표시됩니다.

Cell 의 treestate 속성에 설정된 Column 이 없거나 Column 값이 Null 이면 잎(leaf) 노드는 Leaf 상태로 표시되고, 가지(branch) 노드는 Expand 상태로 표시됩니다.
- **`"collapse,all"`** — Cell 의 treestate 속성에 설정된 Column 값에 관계없이 모든 트리가 Collapse 상태로 표시됩니다.
- **`"expand,all"`** — Cell 의 treestate 속성에 설정된 Column 값에 관계없이 모든 트리가 Expand 상태로 표시됩니다.

**Remark**

- treeinitstatus 속성값을 설정하지 않으면 "collapse,null" 로 적용됩니다.
- 속성값이 "collapse,null" 또는 "expand,null"인 경우에는 Cell의 treelevel 속성값이 변경되더라도 treestate에 설정된 Column 값이 적용됩니다.


---

### treeusebutton

> Components > Component > Grid > Property > treeusebutton

**Description**

Cell 이 트리 형식일 때 Collapse/Expand 버튼의 사용 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.treeusebutton[= enumUsebutton]
```

**Setting Syntax**

```javascript
enumUsebutton ::= 'use' | 'no' | 'noclick'
```
```javascript
this.Grid00.treeusebutton = "no";
```
- **`"use"`** — 트리 Cell 에 Collapse/Expand 버튼을 표시합니다.
- **`"no"`** — 트리 Cell 에 Collapse/Expand 버튼을 표시하지 않지만 버튼 영역을 클릭 시 기능이 동작합니다.
- **`"noclick"`** — 트리 Cell 에 Collapse/Expand 버튼을 표시하지 않고, 버튼 영역을 클릭해도 기능이 동작하지 않습니다.

**Remark**

- treeusebutton 속성값을 설정하지 않으면 "use" 로 적용됩니다.

- Cell 의 treestate 속성값이 "-1"일 경우에는 Collapse/Expand 버튼이 표시되지 않습니다.
  트리 Cell 은 Expand 된 상태로 유지됩니다.


---

### treeusecheckbox

> Components > Component > Grid > Property > treeusecheckbox

**Description**

Cell 이 트리 형식일 때 체크박스 사용 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.treeusecheckbox[= bCheckbox]
```

**Setting Syntax**

```javascript
bCheckbox :: = 'true' | 'false'
```
```javascript
this.Grid00.treeusecheckbox = false;
```
- **`"true"`** — 트리 Cell 에 체크박스를 표시합니다.
- **`"false"`** — 트리 Cell 에 체크박스를 표시하지 않습니다.

**Remark**

- treeusecheckbox 속성값을 설정하지 않으면 "true"로 적용됩니다.

- 체크박스를 사용하기 위해서는 Cell 의 treecheck 속성을 설정해야 합니다.


---

### treeuseexpandkey

> Components > Component > Grid > Property > treeuseexpandkey

**Description**

Cell 이 트리 형식일 때 Collapse/Expand 기능을 키보드의 좌/우 방향키로 동작시킬지 설정하는 속성입니다.

**Syntax**

```javascript
Grid.treeuseexpandkey[= bUsekey]
```

**Setting Syntax**

```javascript
bUsekey ::= 'true' | 'false'
```
```javascript
this.Grid00.treeuseexpandkey = true;
```
- **`"true"`** — 키보드의 좌/우 방향키 입력 시 트리 Cell 의 Collapse/Expand 기능을 동작시킵니다.

Cell 의 포커스 이동은 Tab 키 와 Shift+Tab 키를 사용하여야 합니다.
- **`"false"`** — 키보드의 좌/우 방향키 입력 시 Cell 의 포커스를 이동합니다.

**Remark**

- treeuseexpandkey 속성값을 설정하지 않으면 "false"로 적용됩니다.


---

### treeuseimage

> Components > Component > Grid > Property > treeuseimage

**Description**

Cell 이 트리 형식일 때 트리 상태를 나타내는 이미지를 사용할 지 설정하는 속성입니다.

**Syntax**

```javascript
Grid.treeuseimage[= bUseimage]
```

**Setting Syntax**

```javascript
bUseimage ::= 'true' | 'false'
```
```javascript
this.Grid00.treeuseimage = false;
```
- **`"true"`** — 트리 Cell 에 트리 상태를 나타내는 이미지를 사용합니다.
- **`"false"`** — 트리 Cell 에 트리 상태를 나타내는 이미지를 사용하지 않습니다.

**Remark**

- treeuseimage 속성값을 설정하지 않으면 "true" 로 적용됩니다.

- 하위트리가 숨겨진 상태(Collapse), 하위트리가 펼쳐진 상태(Expand), 하위트리가 없는 말단 상태(Leaf) 에 따른 세가지 이미지가 적용됩니다.


---

### treeuseline

> Components > Component > Grid > Property > treeuseline

**Description**

Cell 이 트리 형식일 때 하위트리와 연결되는 선을 표시할지 설정하는 속성입니다.

**Syntax**

```javascript
Default : true
```

**Setting Syntax**

```javascript
bUseline ::= 'true' | 'false'
```
```javascript
this.Grid00.treeuseline = false;
```
- **`"true"`** — 하위트리와 연결되는 선을 표시합니다.
- **`"false"`** — 하위트리와 연결되는 선을 표시하지 않습니다.

**Remark**

- treeuseline 속성값을 설정하지 않으면 "true"로 적용됩니다.

- 하위트리와 연결되는 선이 표시되지 않아도 레벨에 따라 텍스트가 들여쓰기 되어 표시됩니다.


---

### useselcolor

> Components > Component > Grid > Property > useselcolor

**Description**

Grid 에서 Cell 또는 Row 선택 시 XCSS 에 정의된 Select 관련 Status 를 적용시킬지 설정하는 속성입니다.

**Syntax**

```javascript
Grid.useselcolor[= bUsecolor]
```

**Setting Syntax**

```javascript
bUsecolor ::= 'true' | 'false'
```
```javascript
this.Grid00.useselcolor = false;
```
- **`true`** — 선택된 Cell 또는 Row 에 Select 관련 Status 를 적용시킵니다.
- **`false`** — 선택된 Cell 또는 Row 에 Select 관련 Status 를 적용시키지 않습니다.

**Remark**

- useselcolor 속성값을 설정하지 않으면 true 로 적용됩니다.

- XCSS 에서 Select 관련 Status 값은 밴드와 Cell 에 각각 설정할 수 있습니다.


---

### usesoftkeyboard

> Components > Component > Grid > Property > usesoftkeyboard

**Description**

Grid 의 Cell 이 편집상태가 되어 포커스를 가질 때 키패드의 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.usesoftkeyboard[= bUseKeyboard]
```

**Setting Syntax**

```javascript
bUseKeyboard ::= true | false
```
```javascript
this.Grid00.usesoftkeyboard = false;
```
- **`"true"`** — Grid 의 Cell 이 편집상태가 되어 포커스를 가질 때 키패드가 자동으로 표시됩니다.
- **`"false"`** — Grid 의 Cell 이 편집상태가 되어 포커스를 가질 때 키패드가 표시되지 않습니다.

**Remark**

- usesoftkeyboard 속성값을 설정하지 않으면 true 로 적용됩니다.


◆ Windows NRE 제약

- Windows NRE 는 OS 가 Windows 10 이상이고, 연결된 키보드가 없을 때만 적용됩니다.


---

### visible

> Components > Component > Grid > Property > visible

**Description**

Grid 이(가) 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
this.Grid00.visible = true; 
this.Grid00.visible = false;
```
- **`"true"`** — Grid 을(를) 화면에 표시합니다.
- **`"false"`** — Grid 을(를) 화면에 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하는 즉시 컴포넌트의 표시 여부가 화면에 반영됩니다.

- visible 속성값이 "false"이면 컴포넌트가 화면에 표시되지 않고, 포커스를 받을 수 없으므로 입력이나 사용이 불가능합니다.

- Div 와 같은 컨테이너 컴포넌트의 visible 속성값을 "false"로 설정하면 자식 컴포넌트도 함께 화면에 표시되지 않습니다.

- visible 속성값이 "false"이어도 컴포넌트는 존재하기 때문에 스크립트로 제어가 가능합니다.

- 넥사크로 스튜디오에서는 visible 속성값을 'false'로 설정해도 디자인화면에서 사라지지 않습니다.


---

### vscrollbar

> Components > Component > Grid > Property > vscrollbar

**Description**

Grid 의 서브컨트롤인 수직 스크롤바의 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Grid.vscrollbar
```

**Setting Syntax**

```javascript
this.Grid00.vscrollbar.decbuttonsize = 30;
```

**Remark**

- scrollbartype 속성값과 앱 실행 환경에 따라 반환하는 오브젝트가 달라집니다.
  ScrollBarControl 또는 ScrollindicatorControl 오브젝트를 반환합니다.

- vscrollbar 속성을 사용하여 수직 스크롤바의 속성값을 변경할 수 있습니다.

- vscrollbar 속성은 읽기전용이므로 해당 속성에 다른 컨트롤을 설정할 수 없지만,
  vscrollbar 속성이 갖는 수직 스크롤바 오브젝트의 하위 속성은 수정이 가능합니다.


---

### wheelscrollrow

> Components > Component > Grid > Property > wheelscrollrow

**Description**

Grid 에서 마우스 휠을 사용하여 스크롤 시 한번에 스크롤 되는 Row 의 갯수를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.wheelscrollrow[= nRow]
```

**Setting Syntax**

```javascript
this.Grid00.wheelscrollrow = 5;
```
- **`nRow`** — 마우스 휠로 한번에 스크롤 되는 Row 의 갯수를 숫자로 설정합니다.

**Remark**

- wheelscrollrow 속성값을 설정하지 않으면 "2" 로 적용됩니다.

- 마우스 휠로 스크롤 시 scrollpixel 속성값에 관계없이 Row 단위로 스크롤이 동작합니다.


---

### width

> Components > Component > Grid > Property > width

**Description**

Grid 을(를) 표시하기 위한 너비를 설정하는 속성입니다.

**Syntax**

```javascript
Grid.width[= nWidth]
```

**Setting Syntax**

```javascript
nWidth ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Grid00.width = 10; this.Grid00.width = "10px"; 
this.Grid00.width = "10%"; 
this.Grid00.width = "Button00:10%";
```
- **`<strCompID>`** — Grid 의 너비를 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Grid 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Grid 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 너비가 적용됩니다.
- **`<nVal>`** — Grid 의 너비를 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": Grid의 너비 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 Grid의 너비 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Grid의 너비 결정
- "rem": MainFrame font-size 속성값을 기준으로 Grid의 너비 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID> 값은 무시되고 설정값이 Grid의 너비 결정
- "%": <strCompID>의 width 속성값을 기준으로 Grid의 너비 결정
<strCompID> 값 설정 시 "em", "rem" 단위는 지원하지 않습니다.

**Remark**

- 너비값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 너비값에 기준 컴포넌트 또는 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

◆ 기준 컴포넌트 설정 시 유의할 점

- 속성값을 기준 컴포넌트(<strCompID>)를 참조하도록 설정한 경우 다음 사항을 유의해주세요.

스크립트로 속성값에 설정한 기준 컴포넌트 값(<strCompID>)을 변경하는 경우 유효한 컴포넌트 값이 아니면(잘못된 컴포넌트 id, 부모 또는 stepindex가 다른 컴포넌트) 기준 컴포넌트 값은 무시하고 부모를 기준으로 좌표값(<nVal>)을 적용합니다.
스크립트로 기준 컴포넌트의 크기나 위치 속성값을 변경되는 경우(속성값에 영향을 주는 메소드 실행으로 인한 변경 포함) 변경된 속성값이 기준 컴포넌트를 참조하는 컴포넌트에 바로 반영되지 않습니다.
예를 들어 Button01 컴포넌트의 left 속성값이 "Button00:10px"인 경우 스크립트로 Button00 컴포넌트의 right 속성값이 변경하더라도 Button01 컴포넌트의 위치는 변경되지 않습니다.
기준 컴포넌트의 크기나 위치 속성값이 변경된 것을 기준 컴포넌트를 참조하는 컴포넌트에 반영하려면 스크립트에서 기준 컴포넌트의 크기나 위치 속성값 변경 후 Form 오브젝트의 resetScroll 메소드를 실행해주어야 합니다.


---

### word-spacing

> Components > Component > Grid > Property > word-spacing

**Description**

Grid 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다.

**Syntax**

```javascript
Grid.wordSpacing[= strwordspacing]
```

**Setting Syntax**

```javascript
strWordSpacing ::= 'normal' | <nVal>'px'
```
```javascript
* XCSS
word-spacing : 30px;

* Script ( normal property )
this.Grid00.wordSpacing = "30px";
```
- **`"normal"`** — 텍스트의 단어 사이 간격을 설정하지 않습니다.

현재 font 에 맞는 기본형태로 텍스트가 표시됩니다.
- **`<nVal>`** — pixel 단위로 텍스트의 단어 사이 간격을 설정합니다.

**Remark**

- word-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "wordSpacing"을 사용해야 합니다.


---

### 메서드 (Methods)

### addEvent

> Components > Component > Grid > Method > addEvent

**Description**

Grid 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**

```javascript
Grid.addEvent( strEventID )
```

**Parameters**

```
Grid 에 추가할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 추가에 성공하면 true 를 반환합니다.

이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- Grid 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.


---

### addEventHandler

> Components > Component > Grid > Method > addEventHandler

**Description**

Grid 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
Grid.addEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수가 추가될 이벤트의 ID를 설정합니다.
```

**Return**

이벤트에 추가된 핸들러 함수의 인덱스를 반환합니다.
동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 -1 을 반환합니다.


---

### addEventHandlerLookup

> Components > Component > Grid > Method > addEventHandlerLookup

**Description**

함수를 검색하여 Grid 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
Grid.addEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

```
핸들러 함수가 추가될 이벤트의 ID를 설정합니다.
```

**Return**

이벤트에 추가된 핸들러 함수의 인덱스를 반환합니다.
동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

**Remark**

- strFunc 이름의 함수를 objTarget 영역부터 상위로 올라가며 검색합니다.
  검색된 함수가 있다면 이벤트에 핸들러 함수로 추가합니다.


---

### appendContentsCol

> Components > Component > Grid > Method > appendContentsCol

**Description**

Grid 에 현재 표시된 포맷에 Column 을 추가하는 메소드입니다.

**Syntax**

```javascript
Grid.appendContentsCol( enumBand [, bBandAppend] )
```

**Parameters**

```
현재 표시된 Grid 포맷에 Column 이 추가될 밴드를 문자열로 설정합니다.

"left" 설정 시 Column 이 Left 밴드 영역에 추가됩니다.
"body" 설정 시 Column 이 Body 밴드 영역에 추가됩니다.
"right" 설정 시 Column 이 Right 밴드 영역에 추가됩니다.
```

**Return**

전체 Column 을 기준으로 Column 이 추가된 위치의 인덱스 값을 반환합니다.
enumBand 에 설정한 밴드 영역내의 인덱스가 아닙니다.

정상적으로 추가하지 못했을 경우 -1 을 반환합니다.

**Remark**

- bBandAppend 값에 관계없이 추가된 Column 의 band 속성값은 enumBand 값으로 설정됩니다.

- Grid 에 여러개의 포맷이 정의되어 있어도 현재 화면에 표시된 포맷에만 Column 을 추가합니다.

- 현재 표시된 Grid 포맷에 존재하는 Row 단위 밴드(Head, Body, Summary)만 Column 이 추가됩니다.
   현재 포맷에 Row 단위 밴드(Head, Body, Summary)가 모두 없다면 Column 은 추가되지 않습니다.

- 각 밴드의 마지막 Cell 이 합병(Merge)된 Cell 이어도 추가되는 Column 이 자동으로 합병되지 않습니다.


---

### appendContentsRow

> Components > Component > Grid > Method > appendContentsRow

**Description**

Grid 에 표시된 포맷에 Sub Row 를 추가하는 메소드입니다.

**Syntax**

```javascript
Grid.appendContentsRow( enumBand )
```

**Parameters**

```
현재 Grid 포맷에 Sub Row 가 추가될 밴드를 문자열로 설정합니다.

"head" 설정 시 Sub Row 가 Head 밴드 영역에 추가됩니다.
"body" 설정 시 Sub Row 가 Body 밴드 영역에 추가됩니다.
"summary" 설정 시 Sub Row 가 Summary 밴드 영역에 추가됩니다.
```

**Return**

전체 Row 를 기준으로 Row 가 추가된 위치의 인덱스 값을 반환합니다.
enumBand 에 설정한 밴드 영역내의 인덱스가 아닙니다.

정상적으로 추가하지 못했을 경우 "-1"을 반환합니다.

**Remark**

- Grid 에 여러개의 포맷이 정의되어 있어도 현재 화면에 표시되는 포맷에만 Sub Row 를 추가합니다.

- 바인드 된 DataSet 에 Row 를 추가하는 기능이 아닙니다.
  Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 해당 영역의 Row를 여러줄로 구성하게 하는 기능입니다. 

- 포맷에 enumBand 값에 해당하는 밴드가 정의되지 않았다면 해당 밴드에 새로운 Row 가 추가됩니다.
  enumBand 값에 해당하는 밴드가 정의되어 있다면 해당 밴드의 Row 에  Sub Row 가 추가됩니다.

- Sub Row 가 추가되는 밴드에 합병(Merge)된 Cell 이 있어도 추가되는 Sub Row 는 자동으로 합병되지 않습니다.


---

### autoFitCol

> Components > Component > Grid > Method > autoFitCol

**Description**

Grid 에 스크롤 없이 전체 Column 이 표시되도록 Column 의 너비를 자동으로 조절하는 메소드입니다.

**Syntax**

```javascript
Grid.autoFitCol()
```

**Parameters**

var bSucc = this.Grid00.autoFitCol();

**Return**

Column 너비 자동조절에 성공하면 "true"를 반환합니다.
Column 너비 자동조절에 실패하면 "false"를 반환합니다.

**Remark**

- 수시로 변동되는 데이터에 대해서 Column 너비를 자동으로 Grid 영역에 맞게 조절할 필요가 있을 때 사용합니다.

- Grid 에 Left/Right Band 로 설정된 Column은 자동조절되지 않고, 설정된 너비를 유지합니다.

- autofittype 속성이 "none"일 때 Column 자동조절이 필요하면 autoFitCol() 메소드를 사용합니다.
  autoFitCol() 메소드 수행 후 사용자가 Column 너비를 조절할 경우 사용자 변경값을 유지합니다.


---

### autoSizeCol

> Components > Component > Grid > Method > autoSizeCol

**Description**

Grid 에서 텍스트가 모두 표시되도록 특정 Column 의 너비를 자동조절하는 메소드입니다.

**Syntax**

```javascript
Grid.autoSizeCol( enumBand, nColIndex [,bBandIndex] )
```

**Parameters**

```
현재 Grid 포맷에서 너비를 자동조절 할 Column 이 속한 밴드를 문자열로 설정합니다.

"left" 설정 시 Left 밴드 영역의 Column 이 적용됩니다.
"body" 설정 시 Body 밴드 영역의 Column 이 적용됩니다.
"right" 설정 시 Right 밴드 영역의 Column 이 적용됩니다.
```

**Return**

없음

**Remark**

- autosizebandtype 속성값에 따라 적용되는 밴드가 제한됩니다.


---

### autoSizeRow

> Components > Component > Grid > Method > autoSizeRow

**Description**

Grid 에 표시되고 있는 포맷에서 텍스트가 모두 표시되도록 특정 Row 의 높이를 자동조절하는 메소드입니다.

**Syntax**

```javascript
Grid.autoSizeRow( nRowIndex [, nSubRowIndex [, bDatasetRow]] )
```

**Parameters**

```
텍스트가 모두 표시되도록 높이를 자동조절 할 Row 의 인덱스를 설정합니다.

"0~Row 인덱스" 설정 시 Body 밴드 영역의 Row 인덱스로 적용됩니다.
"-1" 설정 시 Head 밴드 영역으로 적용됩니다.
"-2" 설정 시 Summary 밴드 영역으로 적용됩니다.

Row 인덱스는 "0" 부터 시작합니다.
```

**Return**

없음

**Remark**

- Grid 의 특정 밴드나 Row 의 높이를 자동 조절할 때 사용합니다.


---

### blinkCell

> Components > Component > Grid > Method > blinkCell

**Description**

Grid 에서 설정한 시간동안 특정 Cell 에 깜빡임(Blink) 효과를 주는 메소드입니다.

**Syntax**

```javascript
Grid.blinkCell( nRow, vCell, nKeepMSec, nBlinkCnt );
```

**Parameters**

```
깜빡임(Blink) 효과가 적용될 데이터 Row 의 인덱스를 숫자로 설정합니다.

음수, 잘못된 값, 존재하지 않는 인덱스값 설정 시 메소드가 실행되지 않습니다.
```

**Return**

없음

**Remark**

- 깜빡임(Blink) 효과는 CSS 에 정의된 Cell 의 blinked userstatus 를 적용했다 해제하는 것으로 표현됩니다.
   따라서 깜빡임(Blink) 효과를 주려면 CSS 에 Cell 의 blinked userstatus 가 정의되어 있어야 합니다.

- nKeepMSec 에 설정한 시간을 nBlinkCnt 에 설정한 횟수로 균등 분할하여 깜빡임 효과가 적용됩니다.
   예를 들어 nKeepMSec 값을 10,000 으로 설정하고 nBlinckCnt 값을 5로 설정하여 메소드를 실행하면,
   1,000 밀리초 동안 blinked userstatus 가 해제되고, 1,000 밀리초 동안 blinked userstatus 가 적용되는 것을 5번 반복합니다.

- blinkCell() 메소드는 깜빡임(Blink) 효과가 적용되는 전체시간과 횟수를 설정합니다.
   blinkCellByInterval() 메소드는 깜빡임(Blink) 효과가 적용되는 횟수와 효과가 적용되는 시간간격을 설정합니다.

- blinkCell() 메소드 실행 시 nRow, vCell 에 설정된 Cell 영역에 적용되어 있던 깜빡임(Blink) 효과는 취소되고 새로운 효과가 적용됩니다.

- blinkCell() 메소드는 Cell 단위로 설정할 수 있습니다.
   Row 전체에 깜빡임(Blink) 효과를 적용하려면 전체 Cell 의 ID 를 콤마(",")로 구분하여 설정하거나
   예제와 같이 for 문을 사용하여 전체 Cell 갯수만큼 blinkCell() 메소드를 실행하여야 합니다.

**See Also**

Grid.blinkCellByInterval


---

### blinkCellByInterval

> Components > Component > Grid > Method > blinkCellByInterval

**Description**

Grid 에서 설정한 횟수만큼 특정 Cell 에 깜빡임(Blink) 효과를 주는 메소드입니다.

**Syntax**

```javascript
Grid.blinkCellByInterval( nRow, vCell, nInterMSec, nBlinkCnt );
```

**Parameters**

```
깜빡임(Blink) 효과가 적용될 행의 인덱스를 숫자로 설정합니다.

음수, 잘못된 값, 존재하지 않는 인덱스값 설정 시 메소드가 실행되지 않습니다.
```

**Return**

없음

**Remark**

- 깜빡임(Blink) 효과는 CSS 에 정의된 Cell 의 blinked userstatus 를 적용했다 해제하는 것으로 표현됩니다.
   따라서 깜빡임(Blink) 효과를 주려면 CSS 에 Cell 의 blinked userstatus 가 정의되어 있어야 합니다.

- nInterMSec 에 설정한 시간 간격을 두고 nBlinkCnt 에 설정한 횟수로 깜빡임 효과가 적용됩니다.
   예를 들어 nInterMSec 값을 1000 으로 설정하고 nBlinckCnt 값을 5로 설정하여 메소드를 실행하면,
   500 밀리초 동안 blinked userstatus 가 적용되고, 1000 밀리초 동안 blinked userstatus 가 해제되는 것을 5번 반복합니다.

- blinkCell() 메소드는 깜빡임(Blink) 효과가 적용되는 전체시간과 횟수를 설정합니다.
   blinkCellByInterval() 메소드는 깜빡임(Blink) 효과가 적용되는 횟수와 효과가 적용되는 시간간격을 설정합니다.

- blinkCellByInterval() 메소드 실행 시 nRow, vCell 에 설정된 Cell 영역에 적용되어 있던 깜빡임(Blink) 효과는 취소되고 새로운 효과가 적용됩니다.

- blinkCellByInterval() 메소드는 Cell 단위로 설정할 수 있습니다.
   Row 전체에 깜빡임(Blink) 효과를 적용하려면 전체 Cell 의 ID 를 콤마(",")로 구분하여 설정하거나
   예제와 같이 for 문을 사용하여 전체 Cell 갯수만큼 blinkCellByInterval() 메소드를 실행하여야 합니다.

**See Also**

Grid.blinkCell


---

### bringToFront

> Components > Component > Grid > Method > bringToFront

**Description**

부모가 동일한 컴포넌트 중 Grid 이(가) 화면의 제일 앞에 표시되게 합니다.

**Syntax**

```javascript
Grid.bringToFront()
```

**Parameters**

this.Grid.bringToFront();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToFront() 메소드는 Grid 을(를) 가장 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 앞에 표시되게 됩니다.


---

### bringToPrev

> Components > Component > Grid > Method > bringToPrev

**Description**

부모가 동일한 컴포넌트 중 Grid 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**

```javascript
Grid.bringToPrev()
```

**Parameters**

this.Grid.bringToPrev();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToPrev() 메소드는 Grid 을(를) 한단계 나중에 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 앞에 표시되게 됩니다.


---

### clearEventHandler

> Components > Component > Grid > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
Grid.clearEventHandler( strEventID )
```

**Parameters**

```
모든 핸들러 함수를 제거할 이벤트의 ID를 설정합니다.
```

**Return**

특정 이벤트에서 제거된 핸들러 함수의 갯수를 반환합니다.

**Remark**

- 특정 핸들러 함수만 제거하려면 removeEventHandler() 메소드를 사용하여야 합니다.


---

### clearSelect

> Components > Component > Grid > Method > clearSelect

**Description**

Grid 에서 선택된 영역을 모두 해제하는 메소드입니다.

**Syntax**

```javascript
Grid.clearSelect()
```

**Parameters**

this.Grid00.clearSelect()

**Return**

없음

**Remark**

- clearSelect() 메소드가 정상적으로 실행되면 selectstartrow, selectendrow, selectstartcol, selectendcol, selectstartsubrow, selectendsubrow 속성값이 초기화 됩니다.


---

### createFormat

> Components > Component > Grid > Method > createFormat

**Description**

Grid 와 바인딩 된 DataSet 의 Column 정보를 기준으로 새로운 포맷을 생성하는 메소드입니다.

**Syntax**

```javascript
Grid.createFormat()
```

**Parameters**

this.Grid00.createFormat();

**Return**

없음

**Remark**

- createFomat() 메소드는 수행 후 생성된 포맷은 Grid 에 즉시 표시됩니다.
   Grid 의 현재 포맷정보를 확인하려면 getCurFormatString() 메소드나 formats 속성을 사용합니다.

- 포맷은 Grid 에 표시되는 형식으로 Column, Head, Body, Summary 로 구성됩니다.
   넥사크로 스튜디오에서 Grid Contents Editor 를 사용하여 포맷을 설정할 수 있습니다.
   Grid 에 여러개의 포맷을 정의할 수 있습니다.


---

### deleteContentsCol

> Components > Component > Grid > Method > deleteContentsCol

**Description**

Grid 에 현재 표시된 포맷에서 특정 Column 을 삭제하는 메소드입니다.

**Syntax**

```javascript
Grid.deleteContentsCol( enumBand, nColIndex [, bBandIndex] )
```

**Parameters**

```
현재 표시된 Grid 포맷에서 삭제될 Column 이 속한 밴드를 문자열로 설정합니다.

"left" 설정 시 Column 이 Left 밴드 영역에서 삭제됩니다.
"body" 설정 시 Column 이 Body 밴드 영역에서 삭제됩니다.
"right" 설정 시 Column 이 Right 밴드 영역에서 삭제됩니다.
```

**Return**

전체 Column 을 기준으로 삭제된 Column 의 인덱스 값을 반환합니다.
enumBand 에 설정한 밴드 영역내의 인덱스가 아닙니다.

정상적으로 삭제하지 못했을 경우 -1 을 반환합니다.

**Remark**

- nColIndex 값에 해당하는 Column 이 없을 경우 메소드는 실행되지 않습니다.

- Grid 에 여러개의 포맷이 정의되어 있어도 현재 화면에 표시된 포맷만 Column 을 삭제합니다.

- 현재 표시된 Grid 포맷에 존재하는 모든 Row 관련 밴드(Head,Body,Summary)에서 해당 Column 위치의 Cell 을 삭제합니다.

- 삭제할 Column 에 합병(Merge)된 Cell 이 있는 경우 Cell 의 크기가 작아집니다.


---

### deleteContentsRow

> Components > Component > Grid > Method > deleteContentsRow

**Description**

Grid 에 현재 표시되는 포맷에서 특정 Sub Row 를 삭제하는 메소드입니다.

**Syntax**

```javascript
Grid.deleteContentsRow( enumBand, nSubRowIndex )
```

**Parameters**

```
현재 Grid 포맷에서 삭제할 Sub Row 가 속한 밴드를 문자열로 설정합니다.

"head" 설정 시 Sub Row 가 Head 밴드 영역에서 삭제됩니다.
"body" 설정 시 Sub Row 가 Body 밴드 영역에서 삭제됩니다.
"summary" 설정 시 Sub Row 가 Summary 밴드 영역에서 삭제됩니다.
```

**Return**

삭제된 Sub Row 가 밴드 내에서 위치했던 인덱스 값을 반환합니다.

정상적으로 삭제하지 못했을 경우 "-1"을 반환합니다.

**Remark**

- 바인드 된 DataSet 에 Row 를 삭제하는 기능이 아닙니다.
  Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 해당 Row 가 Sub Row로 구성되어 있을 때 Sub Row 를 삭제하는 기능입니다.

- Grid 에 여러개의 포맷이 정의되어 있어도 현재 화면에 표시된 포맷에서 Sub Row 를 삭제합니다.

- enumBand 값에 해당하는 밴드에 Sub Row가 없고, nSubRowIndex 값이 "0" 이면 해당 밴드가 삭제됩니다.

- 삭제할 Sub Row 에 합병(Merge)된 Cell이 있는 경우 Cell 의 크기가 작아집니다.


---

### destroy

> Components > Component > Grid > Method > destroy

**Description**

스크립트에서 동적으로 생성한 Grid 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
Grid.destroy()
```

**Parameters**

var bSucc = this.Grid00.destroy();

**Return**

Grid 이(가) 정상적으로 삭제되면 true 를 반환합니다.

Grid 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 Grid 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildGrid.initGrid.show


---

### dropdown

> Components > Component > Grid > Method > dropdown

**Description**

Grid 컴포넌트의 Cell 편집상태에서 아이템 리스트를 표시하는 메서드입니다.

**Syntax**

```javascript
Grid.dropdown()
```

**Parameters**

var bSucc = this.Grid00.dropdown();

**Return**

아이템 리스트가 정상적으로 표시되면 true를 반환합니다.
아이템 리스트가 정상적으로 표시되지 않으면 false를 반환합니다.

**Remark**

- Cell edittype 속성값을 "combo", "date", "multicombo"처럼 아이템 리스트를 가지는 형태로 설정한 경우 지원하는 메서드입니다.
  
- 선택된 Cell 이 포커스 되어 편집모드용 컨트롤이 표시된 상태여야 합니다.
   편집모드용 컨트롤이 표시된 상태가 아니면 showEditor 메서드를 사용하여 편집상태로 전환해야 합니다.


---

### dropdownCalendar

> Components > Component > Grid > Method > dropdownCalendar

**Description**

Grid 에서 edittype 속성값이 "date" 인 Cell 이 편집상태일 때 팝업달력을 표시하는 메소드입니다.

**Syntax**

```javascript
Grid.dropdownCalendar()
```

**Parameters**

var bSucc = this.Grid00.dropdownCalendar();

**Return**

팝업달력이 정상적으로 표시되면 true 를 반환합니다.

팝업달력이 정상적으로 표시되지 않으면 false 를 반환합니다.

**Remark**

- 선택된 Cell 이 포커스 되어 편집모드용 컨트롤이 표시된 상태여야 합니다.
   편집모드용 컨트롤이 표시된 상태가 아니면 showEditor() 메소드를 사용하여 편집상태로 전환해야 합니다.


◆ Mobile 제약

- 모바일 환경에서 cellcalendarpopuptype 또는 calendarpopuptype 속성값이 "system" 일 때는 dropdownCalendar() 메소드가 실행되지 않습니다.

- Android 에서 입력패드가 표시될 때는 포커스가 입력패드로 이동되면서 dropdownCalendar() 메소드가 실행되지 않는 것처럼 보일 수 있습니다.


---

### dropdownCombo

> Components > Component > Grid > Method > dropdownCombo

**Description**

Grid 에서 edittype 속성값이 "combo" 인 Cell 이 편집상태일 때 Combo 아이템 리스트를 표시하는 메소드입니다.

**Syntax**

```javascript
Grid.dropdownCombo()
```

**Parameters**

var bSucc = this.Grid00.dropdownCombo();

**Return**

Combo 아이템 리스트가 정상적으로 표시되면 true 를 반환합니다.

Combo 아이템 리스트가 정상적으로 표시되지 않으면 false 를 반환합니다.

**Remark**

- 선택된 Cell 이 포커스 되어 편집모드용 컨트롤이 표시된 상태여야 합니다.
   편집모드용 컨트롤이 표시된 상태가 아니면 showEditor() 메소드를 사용하여 편집상태로 전환해야 합니다.


---

### findEventHandler

> Components > Component > Grid > Method > findEventHandler

**Description**

Grid 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.findEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 찾을 이벤트의 ID를 설정합니다.
```

**Return**

특정 이벤트에서 찾은 핸들러 함수의 인덱스를 반환합니다.

특정 이벤트에 찾으려는 핸들러 함수가 존재하지 않으면 -1 을 반환합니다.

**Remark**

- 핸들러 함수의 인덱스는 0 부터 시작합니다.


---

### getBandProperty

> Components > Component > Grid > Method > getBandProperty

**Description**

특정 밴드에서 지정된 속성의 속성값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getBandProperty( enumBand, strPropID )
```

**Parameters**

```
속성값을 가져올 밴드를 문자열로 설정합니다.

"head" 설정 시 Head 밴드에서 속성값을 반환합니다.
"body" 설정 시 Body 밴드에서 속성값을 반환합니다.
"summary" 설정 시 Summary 밴드에서 속성값을 반환합니다.
```

**Return**

특정 밴드에서 지정된 속성의 속성값을 반환합니다.

**Remark**

- 테마에 설정한 Style 속성의 값은 반환되지 않습니다.
  Style 관련 속성은 스크립트나 넥사크로 스튜디오에서 직접 설정한 값만 반환됩니다.


---

### getBindCellIndex

> Components > Component > Grid > Method > getBindCellIndex

**Description**

DataSet 의 특정 Column 과 바인드된 Cell 의 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getBindCellIndex( enumBand, strColID )
```

**Parameters**

```
현재 Grid 포맷에서 특정 Column 과 바인드 된 Cell 을 검색할 밴드 영역을 문자열로 설정합니다.

"head" 설정 시 Head 밴드 영역에서 Cell 을 검색합니다.
"body" 설정 시 Body 밴드 영역에서 Cell 을 검색합니다.
"summary" 설정 시 Summary 밴드 영역에서 Cell 을 검색합니다.
```

**Return**

ID 가 strColID 인 Column 과 바인드 된 첫번째 Cell 의 인덱스를 반환합니다.

ID 가 strColID 인 Column 과 바인드 된 Cell 이 없다면 -1 을 반환합니다.

**Remark**

- Cell 의 text 속성에 바인드된 Column ID 가 strColID 값과 같은 Cell 을 enumBand 값에 해당하는 영역에서 검색합니다.
   Cell 의 text 속성에 바인드된 Column ID 가 strColID 값과 같은 Cell 이 여러개 있을 경우 첫번째 Cell 의 인덱스를 반환합니다.

- Cell 인덱스는 row, col, rowspan, colspan 속성값과는 별도로 밴드내에서 Cell 이 위치한 인덱스 값입니다.
   getCellProperty(), setCellProperty() 메소드에서 파라미터로 사용하는 Cell 인덱스와 같습니다.


---

### getBindDataset

> Components > Component > Grid > Method > getBindDataset

**Description**

Grid 의 binddataset 속성에 설정되어 있는 DataSet 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getBindDataset()
```

**Parameters**

this.Grid00.getBindDataset()

**Return**

binddataset 속성에 설정되어 있는 DataSet 오브젝트를 반환합니다.


---

### getCellCount

> Components > Component > Grid > Method > getCellCount

**Description**

Grid 에서 특정 밴드에 정의된 Cell 의 갯수를 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getCellCount( enumBand )
```

**Parameters**

```
현재 Grid 포맷에 정의된 Cell 의 갯수를 구할 밴드를 문자열로 설정합니다.

"head" 설정 시 Head 밴드 영역에 정의된 Cell 의 갯수를 구합니다.
"body" 설정 시 Body 밴드 영역에 정의된 Cell 의 갯수를 구합니다.
"summary" 설정 시 Summary 밴드 영역에 정의된 Cell 의 갯수를 구합니다.
```

**Return**

enumBand 에 설정한 밴드 영역에 정의된 Cell 의 갯수를 반환합니다.

**Remark**

- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와 밴드의 Sub Row 갯수는 관계가 없습니다.

- 합병(Merge) 된 Cell 은 한개로 처리됩니다.


---

### getCellPos

> Components > Component > Grid > Method > getCellPos

**Description**

Grid 에서 선택된 Cell 의 Cell 인덱스 값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getCellPos()
```

**Parameters**

var nIndex = this.Grid00.getCellPos();

**Return**

선택된 Cell 의 Cell 인덱스 값을 반환합니다.

**Remark**

- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.
  Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge)된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.


---

### getCellProperty

> Components > Component > Grid > Method > getCellProperty

**Description**

Cell 의 특정 속성값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getCellProperty( enumBand, nCellIdx, strPropID )
```

**Parameters**

```
속성값을 가져올 Cell 이 속한 밴드를 문자열로 설정합니다.

"head" 설정 시 Head 밴드의 Cell 에서 속성값을 반환합니다.
"body" 설정 시 Body 밴드의 Cell 에서 속성값을 반환합니다.
"summary" 설정 시 Summary 밴드의 Cell 에서 속성값을 반환합니다.
```

**Return**

특정 Cell 의 특정 속성값을 반환합니다.

**Remark**

- 스크립트나 넥사크로 스튜디오에서 직접 설정한 속성값만 저장됩니다.
  테마에 정의된 속성값은 적용은 되지만 속성에 저장되지 않습니다.

- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.
  Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge)된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- 병합되었지만 각 Cell 정보가 유지되는 Sub Cell 은 getSubCellProperty() 메소드를 사용하여 각 Sub Cell 의 속성값을 가져올 수 있습니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.


---

### getCellPropertyValue

> Components > Component > Grid > Method > getCellPropertyValue

**Description**

Grid 에 표시된 Cell 중 특정 Cell 에 적용된 속성값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getCellPropertyValue( nRowIdx, nCellIdx, strPropID )
```

**Parameters**

```
속성값을 얻을 Cell 이 Grid 에서 위치한 Row 의 인덱스를 설정합니다.

"0 ~ Row 갯수-1" 설정 시 Body 밴드의 Row 인덱스로 적용됩니다.
"-1" 설정 시 Head 밴드로 적용됩니다.
"-2" 설정 시 Summary 밴드로 적용됩니다.
```

**Return**

Cell 의 속성이 DataSet 에 바인드 되어 있다면 바인드된 DataSet 의 Column 값을 반환합니다.
Cell 의 속성이 EXPR 형식으로 설정되어 있다면 EXPR 이 적용된 값을 반환합니다.
Cell 의 속성에 값이 설정되어 있다면 설정된 값을 반환합니다.

**Remark**

- Cell 인덱스는 Grid 의 포맷을 기준으로 설정되며 DataSet 의 데이터 갯수와는 관계없습니다.
   Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 포맷으로 구성되어 있고, Row 는 여러개의 SubRow 를 가질 수 있습니다.
   SubRow 를 갖는 밴드의 Cell 인덱스는 "SubRow 인덱스 * Column 갯수 + Cell 의 col 속성값" 으로 설정됩니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
   병합(Merge)된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 0 부터 시작합니다.


---

### getCellRect

> Components > Component > Grid > Method > getCellRect

**Description**

인수로 전달된 위치의 Cell 영역을 위치 정보를 가지는 오브젝트로 반환하는 메서드입니다.

**Syntax**

```javascript
Grid.getCellRect( nRow, nCellIdx )
```

**Parameters**

```
영역 정보를 얻을 Cell 이 위치한 Row의 인덱스를 설정합니다.

"0~Row 갯수" 설정 시 Body 밴드의 Row 인덱스로 적용됩니다.
"-1" 설정 시 Head 밴드로 적용됩니다.
"-2" 설정 시 Summary 밴드로 적용됩니다.
```

**Return**

- 인수로 전달된 위치에 해당하는 Cell 오브젝트의 영역 정보를 나타내는 오브젝트를 반환합니다.
반환되는 오브젝트는 left, top, right, bottom, width, height 속성을 가지며, 모든 속성값은 기준 좌표를 기준으로 계산됩니다.
기준 좌표는 Grid 컴포넌트의 border 영역을 제외한 표시 영역의 좌측 상단(top:0, left:0)입니다.

- Cell 영역 전체가 기준 좌표를 벗어나 속성값이 음수가 되는 경우, 해당 속성값은 0으로 처리합니다.
Cell 영역이 화면에 부분적으로 표시된 경우에는 표시된 Cell 영역을 기준으로 속성값을 처리합니다.
Body 밴드 내 Cell 영역이 Head 밴드 영역 뒤로 숨겨지더라도 기준 좌표를 벗어나지 않는다면 정상적으로 속성값을 처리합니다.

- 인수로 전달된 위치의 Cell이 존재하지 않는 경우 모든 속성값은 0으로 처리합니다.

**Remark**

- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.
  Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge)된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.


---

### getCellText

> Components > Component > Grid > Method > getCellText

**Description**

인수로 전달된 위치의 Cell 에 표시되는 텍스트값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getCellText( nRow, nCellIdx )
```

**Parameters**

```
텍스트값을 얻을 Cell 이 위치한 Row의 인덱스를 설정합니다.

"0~Row 갯수" 설정 시 Body 밴드의 Row 인덱스로 적용됩니다.
"-1" 설정 시 Head 밴드로 적용됩니다.
"-2" 설정 시 Summary 밴드로 적용됩니다.
```

**Return**

인수로 전달된 위치의 Cell 에 표시되는 텍스트값을 반환합니다.

**Remark**

- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.
  Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge)된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.


---

### getCellValue

> Components > Component > Grid > Method > getCellValue

**Description**

인수로 전달된 위치의 Cell 의 text 속성에 설정된 값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getCellValue( nRow, nCellIdx )
```

**Parameters**

```
text 속성값을 얻을 Cell 이 위치한 Row의 인덱스를 설정합니다.

"0~Row 갯수" 설정 시 Body 밴드의 Row 인덱스로 적용됩니다.
"-1" 설정 시 Head 밴드로 적용됩니다.
"-2" 설정 시 Summary 밴드로 적용됩니다.
```

**Return**

Cell 의 text 속성이 DataSet 에 바인드 되어 있다면 바인드된 DataSet 의 Column 값을 반환합니다.
Cell 의 text 속성에 값이 설정되어 있다면 설정된 값을 반환합니다.
Cell 의 text 속성이 EXPR 형식으로 설정되어 있다면 EXPR 이 적용된 값을 반환합니다.

**Remark**

- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.
  Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge)된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.


---

### getCurEditType

> Components > Component > Grid > Method > getCurEditType

**Description**

Grid 에서 선택된 Cell 의 edittype 속성값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getCurEditType()
```

**Parameters**

var strEditType = this.Grid00.getCurEditType();

**Return**

선택된 Cell 의 editytype 속성값을 반환합니다.

**Remark**

- Body 밴드에 속한 Cell 만 getCurEditType() 메소드를 사용할 수 있습니다.


---

### getCurFormatString

> Components > Component > Grid > Method > getCurFormatString

**Description**

Grid 에 현재 표시되고 있는 포맷을 XML 형식의 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getCurFormatString( [bOrginal] )
```

**Parameters**

```
동적으로 변경된 포맷을 반영하여 반환할 지 여부를 설정합니다.

true 설정 시 동적으로 변경된 포맷은 무시하고, 디자인 시 설정한 포맷을 반환합니다.
false 설정 시 동적으로 변경된 포맷을 반영하여 반환합니다.

값을 설정하지 않으면 false 로 적용됩니다.
```

**Return**

현재 Grid 에 표시되고 있는 포맷을 XML 형식의 문자열로 반환합니다.

기본적인 XML 형식은 아래와 같으며 Head, Body, Summary 정의는 포맷에 따라 없을 수 있습니다.

<Format id="default">
  <Columns>....</Columns>
  <Rows>....</Rows>
  <Band id="head">...</Band>
  <Band id="body">...</Band>
  <Band id="summary">..</Band>
</Format>

**Remark**

- Grid 에 여러개의 포맷이 정의되어 있는 경우 현재 화면에 표시되는 포맷을 반환합니다.

- Grid 에 정의된 전체 포맷을 확인하려면 getFormatString() 메소드를 사용하여야 합니다.

**See Also**

Grid.getFormatString


---

### getDatasetRow

> Components > Component > Grid > Method > getDatasetRow

**Description**

Grid 의 Row 인덱스에 해당하는 DataSet 의 Row 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getDatasetRow( nRowIndex )
```

**Parameters**

```
Grid 의 Row 인덱스를 숫자로 설정합니다.
```

**Return**

Grid 의 Row 인덱스에 해당하는 DataSet 의 Row 인덱스값을 반환합니다.

정상적으로 값을 구할 수 없을 경우는 -1 을 반환합니다.

**Remark**

- Grid 가 트리 형식일 때는 Collapse/Expand 에 따라 Grid 의 Row 인덱스와 DataSet 의 Row 인덱스가 일치하지 않을 수 있습니다.
   getDatasetRow() 메소드는 Row 인덱스가 서로 일치하지 않는 상황에서 사용하는 메소드입니다.


---

### getEditCaret

> Components > Component > Grid > Method > getEditCaret

**Description**

Cell 이 편집상태일 때 캐럿이 위치한 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getEditCaret()
```

**Parameters**

var nCaretPos = this.Grid00.getEditCaret();

**Return**

인덱스는 0 부터 시작하며 캐럿이 위치한 인덱스를 반환합니다.

Cell 이 편집상태가 아니면 -1 을 반환합니다.

**Remark**

- 선택된 Cell 이 포커스 되어 편집모드용 컨트롤이 표시되어 있을 때 메소드가 정상적으로 실행됩니다.


---

### getEditingText

> Components > Component > Grid > Method > getEditingText

**Description**

Cell 이 편집모드일 때 표시되는 컨트롤에 입력중인 text 값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getEditingText()
```

**Parameters**

var strInputText = this.Grid00.getEditingText();

**Return**

Cell 에 표시된 편집모드용 컨트롤에 입력중인 text 값을 문자열로 반환합니다.

Cell 의 edittype 속성값이 "checkbox", "tree" 이면 undefined 를 반환합니다.
Cell 의 edittype 속성값이 "date", "mask" 이면 마스크 문자가 포함된 입력중인 값을 반환합니다.

**Remark**

- 편집모드용 컨트롤이 화면에 표시되어 있고, 편집상태일 때만 메소드가 정상적으로 동작합니다.

- Cell 의 edittype 속성값이 "combo", "date" 이면 편집모드용 컨트롤로 Combo, Calendar 컨트롤이 표시됩니다.
   이 때, Combo, Calendar 컨트롤은 입력중인 값이 하위컨트롤인 comboedit, calendaredit 의 text 속성에 반영됩니다.
   Combo, Calendar 컨트롤의 text 속성엔 하위컨트롤에 입력한 값을 확정하여야 반영됩니다.
   getEdiingText() 메소드는 하위컨트롤인 comboedit, calendaredit 의 text 속성값을 반환하므로 입력중인 값이 반환됩니다.

- Cell 의 edittype 속성값이 "date", "mask" 이면 getEditingValue() 메소드와 getEditingText() 메소드의 반환값이 달라질 수 있습니다.

**See Also**

Grid.getEditingValueGrid.getEditTextGrid.getEditValueGrid.setEditingValueGrid.setEditValue


---

### getEditingValue

> Components > Component > Grid > Method > getEditingValue

**Description**

Cell 이 편집모드일 때 표시되는 컨트롤에 입력중인 value 값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getEditingValue()
```

**Parameters**

var strInputValue = this.Grid00.getEditingValue();

**Return**

Cell 에 표시된 편집모드용 컨트롤에 입력중인 value 값을 문자열로 반환합니다.

Cell 의 edittype 속성값이 "button", "checkbox", "tree" 이면 undefined 를 반환합니다.
Cell 의 edittype 속성값이 "date" 이면 마스크 문자가 제외된 입력중인 원본값을 날짜형식에 맞게 보정하여 반환합니다.
Cell 의 edittype 속성값이 "mask" 이면 마스크 문자가 제외된 입력중인 원본값만 반환합니다.

**Remark**

- 편집모드용 컨트롤이 화면에 표시되어 있고, 편집상태일 때만 메소드가 정상적으로 동작합니다.

- Cell 의 edittype 속성값이 "combo", "date" 이면 편집모드용 컨트롤로 Combo, Calendar 컨트롤이 표시됩니다.
   이 때, Combo, Calendar 컨트롤은 입력중인 값이 하위컨트롤인 comboedit, calendaredit 의 value 속성에 반영됩니다.
   Combo, Calendar 컨트롤의 value 속성엔 하위컨트롤에 입력한 값을 확정하여야 반영됩니다.
   getEditngValue() 메소드는 하위컨트롤인 comboedit, calendaredit 의 value 속성값을 반환하므로 입력중인 값이 반환됩니다.

- Cell 의 edittype 속성값이 "date", "mask" 이면 getEditingValue() 메소드와 getEditingText() 메소드의 반환값이 달라질 수 있습니다.

**See Also**

Grid.getEditingTextGrid.getEditTextGrid.getEditValueGrid.setEditingValueGrid.setEditValue


---

### getEditSelect

> Components > Component > Grid > Method > getEditSelect

**Description**

Cell 이 편집상태일 때 선택된 텍스트의 인덱스를 배열로 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getEditSelect()
```

**Parameters**

var varArrSelect = this.Grid00.getEditSelect();

**Return**

선택된 텍스트의 시작 인덱스와 끝 인덱스를 각각 배열의 0번, 1번 원소로 반환합니다.
선택된 텍스트가 없는 경우 현재 캐럿 위치를 배열의 0번, 1번 원소로 반환합니다.

인덱스는 0 부터 시작합니다

**Remark**

- 선택된 Cell 이 포커스 되어 편집모드용 컨트롤이 표시되어 있을 때 메소드가 정상적으로 실행됩니다.


---

### getEditSelectedText

> Components > Component > Grid > Method > getEditSelectedText

**Description**

Cell 이 편집상태일 때 선택된 텍스트를 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getEditSelectedText()
```

**Parameters**

var strText = this.Grid00.getEditSelectedText();

**Return**

선택된 텍스트를 반환합니다.

선택된 텍스트가 없을 경우 빈문자열(Empty String)을 반환합니다.

**Remark**

- 선택된 Cell 이 포커스 되어 편집모드용 컨트롤이 표시되어 있을 때 메소드가 정상적으로 실행됩니다.

- 한글과 같이 다국어 문자의 경우 조합중인 문자는 선택된 상태가 아니므로 선택문자로 처리하지 않습니다.


---

### getEditText

> Components > Component > Grid > Method > getEditText

**Description**

Cell 이 편집모드일 때 표시되는 컨트롤의 text 속성값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getEditText()
```

**Parameters**

var strText = this.Grid00.getEditText();

**Return**

Cell 에 표시된 편집모드용 컨트롤의 text 속성값을 문자열로 반환합니다.

Grid 의 edittype 속성값이 "checkbox", "tree" 이면 undefined 를 반환합니다.
Grid 의 edittype 속성값이 "combo", "date" 이면 컨트롤에 입력중인 값이 아닌 원본 text 속성값을 반환합니다.

**Remark**

- 편집모드용 컨트롤이 화면에 표시되어 있고, 편집상태일 때만 메소드가 정상적으로 동작합니다.

- Cell 의 edittype 속성값이 "combo", "date" 이면 편집모드용 컨트롤로 Combo, Calendar 컨트롤이 표시됩니다.
   이 때, Combo, Calendar 컨트롤은 입력중인 값이 하위컨트롤인 comboedit, calendaredit 의 text 속성에 반영됩니다.
   Combo, Calendar 컨트롤의 text 속성엔 하위컨트롤에 입력한 값을 확정하여야 반영됩니다.
   따라서, Cell 의 edittype 속성값이 "combo", "date" 일 때 getEditText() 메소드는 입력중인 값을 반환하지 않습니다.

- Cell 의 edittype 속성값이 "combo", "date" 일 때 컨트롤에 입력중인 text 값을 반환 받으려면 getEditingText() 메소드를 사용하여야 합니다.

- Cell 의 edittype 속성값이 "combo", "date", "mask" 이면 getEditValue() 메소드와 getEditText() 메소드의 반환값이 달라질 수 있습니다.

**Example**


**See Also**

Grid.getEditingTextGrid.getEditingValueGrid.getEditValueGrid.setEditingValueGrid.setEditValue


---

### getEditValue

> Components > Component > Grid > Method > getEditValue

**Description**

Cell 이 편집모드일 때 표시되는 컨트롤의 value 속성값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getEditValue()
```

**Parameters**

var strValue = this.Grid00.getEditValue();

**Return**

Cell 에 표시된 편집모드용 컨트롤의 value 속성값을 문자열로 반환합니다.

Cell 의 edittype 속성값이 "button", "checkbox", "tree" 이면 undefined 를 반환합니다.
Cell 의 edittype 속성값이 "combo", "date" 이면 컨트롤에 입력중인 값이 아닌 원본 value 속성값을 반환합니다.

**Remark**

- 편집모드용 컨트롤이 화면에 표시되어 있고, 편집상태일 때만 메소드가 정상적으로 동작합니다.

- Cell 의 edittype 속성값이 "combo", "date" 이면 편집모드용 컨트롤로 Combo, Calendar 컨트롤이 표시됩니다.
   이 때, Combo, Calendar 컨트롤은 입력중인 값이 하위컨트롤인 comboedit, calendaredit 의 value 속성에 반영됩니다.
   Combo, Calendar 컨트롤의 value 속성엔 하위컨트롤에 입력한 값을 확정하여야 반영됩니다.
   따라서, Cell 의 edittype 속성값이 "combo", "date" 일 때 getEditVaue() 메소드는 입력중인 값을 반환하지 않습니다.

- Cell 의 edittype 속성값이 "combo", "date" 일 때 컨트롤에 입력중인 value 값을 반환 받으려면 getEditingValue() 메소드를 사용하여야 합니다.

- Cell 의 edittype 속성값이 "combo", "date", "mask" 이면 getEditValue() 메소드와 getEditText() 메소드의 반환값이 달라질 수 있습니다.

**Example**


**See Also**

Grid.getEditingTextGrid.getEditingValueGrid.getEditTextGrid.setEditingValueGrid.setEditValue


---

### getEventHandler

> Components > Component > Grid > Method > getEventHandler

**Description**

Grid 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getEventHandler( strEventID, nIdx )
```

**Parameters**

```
핸들러 함수를 얻을 이벤트의 ID를 설정합니다.
```

**Return**

지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.

지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.


---

### getFormatColCount

> Components > Component > Grid > Method > getFormatColCount

**Description**

Grid 에 표시되고 있는 포맷에 정의된 Column 의 갯수를 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getFormatColCount()
```

**Parameters**

var nColCount = this.Grid00.getFormatColCount();

**Return**

현재 Grid 에 표시되고 있는 포맷에 정의된 Column 의 갯수를 반환합니다.

**Remark**

- Grid 에 여러개의 포맷이 정의되어 있어도 현재 화면에 표시되어 있는 포맷의 Column 갯수를 반환합니다.


---

### getFormatColProperty

> Components > Component > Grid > Method > getFormatColProperty

**Description**

Grid 에 표시되고 있는 포맷에 정의된 Column 의 특정 속성값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getFormatColProperty( nColIdx, strPropId )
```

**Parameters**

```
현재 포맷에 정의된 전체 Column 을 기준으로 속성값을 가져올 Column 인덱스 값을 설정합니다.

Column 인덱스는 "0" 부터 시작합니다.
```

**Return**

특정 Column 의 특정 속성값을 반환합니다.


---

### getFormatColSize

> Components > Component > Grid > Method > getFormatColSize

**Description**

Grid 의 포맷에 정의된 Column 의 너비를 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getFormatColSize( nColIdx )
```

**Parameters**

```
현재 포맷에 정의된 전체 Column 을 기준으로 속성값을 가져올 Column 인덱스 값을 설정합니다.

Column 인덱스는 "0"부터 시작합니다.
```

**Return**

디자인 시 설정한 Column 의 너비를 반환합니다.
존재하지 않는 인덱스를 지정하면 "-1"을 반환합니다.

**Remark**

- getFormatColProperty() 메소드에서 "size" 속성값을 얻는 것과 같습니다.

- getFormatColSize() 메소드는 동적으로 변경된 값은 반영되지 않고, 디자인 시 설정한 Column 의 너비를 반환합니다.
  동적으로 변경된 값이 반영된 Column 너비는 getRealColSize() 메소드를 사용하여야 합니다.


---

### getFormatIdList

> Components > Component > Grid > Method > getFormatIdList

**Description**

Format id 배열값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getFormatIdList();
```

**Parameters**

var arrFormatIdList = this.Grid00.getFormatIdList();

**Return**

Format id 목록을 배열로 반환합니다.
값이 없는 경우에는 빈 배열을 반환합니다.


---

### getFormatRowCount

> Components > Component > Grid > Method > getFormatRowCount

**Description**

Grid 에 표시되고 있는 포맷에 정의된 모든 Row 또는 Sub Row 의 갯수를 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getFormatRowCount()
```

**Parameters**

var nCurrnetRowCount = this.Grid00.getFormatRowCount();

**Return**

현재 Grid 에 표시되고 있는 포맷에 정의된 Row 또는 Sub Row 의 총 갯수를 반환합니다.

Head, Body, Summary 밴드에 정의된 각 Row 의 총 갯수의 합을 반환합니다.
Row 에 Sub Row 가 정의되어 있다면 Sub Row 의 갯수를 반영합니다.

**Remark**

- Summary 밴드는 정의되지 않았고, Head 밴드에 1개 Row, Body 밴드에 두줄로 된 Row 가 정의되어 있다면 "3" 이 반환됩니다.

- Grid 에 여러개의 포맷이 정의되어 있어도 현재 화면에 표시되어 있는 포맷의 Row 갯수를 반환합니다.

- Grid 의 formats 속성에 정의된 <Rows>의 <Row> 태그 갯수와 일치합니다.


---

### getFormatRowProperty

> Components > Component > Grid > Method > getFormatRowProperty

**Description**

Grid 에 표시되고 있는 포맷에 정의된 Row 의 특정 속성값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getFormatRowProperty( nRowIdx, strPropId )
```

**Parameters**

```
현재 포맷에 정의된 전체 Row 를 기준으로 속성값을 가져올 Row의 인덱스 값을 설정합니다.

Head, Body, Summary 밴드에 정의된 전체 Row를 기준으로 인덱스를 설정합니다.
Row 에 Sub Row 가 정의되어 있다면 Sub Row 도 인덱스에 포함됩니다.
Row 인덱스는 "0"부터 시작합니다.
```

**Return**

특정 Row 의 특정 속성값을 반환합니다.

**Remark**

- Summary 밴드는 정의되지 않았고, Head 밴드에 1개 Row, Body 밴드에 두줄로 된 Row 가 정의된 포맷에서
  nRowIdx 값을 "2" 로 설정하면 Body 밴드의 마지막 Sub Row 를 의미합니다.


---

### getFormatRowSize

> Components > Component > Grid > Method > getFormatRowSize

**Description**

Grid 의 포맷에 정의된 Row 또는 Sub Row 의 높이를 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getFormatRowSize( nRowIdx )
```

**Parameters**

```
얻고자 하는 Format Rows의 Row 에 대한 Index 입니다.

현재 포맷에 정의된 전체 Row 를 기준으로 높이를 가져올 Row 의 인덱스 값을 설정합니다.

Head, Body, Summary 밴드에 정의된 전체 Row를 기준으로 인덱스를 설정합니다.
Row 에 Sub Row 가 정의되어 있다면 Sub Row 도 인덱스에 포함됩니다.
Row 인덱스는 "0"부터 시작합니다.
```

**Return**

디자인 시 설정한 Row 또는 Sub Row 의 높이를 반환합니다.
존재하지 않는 인덱스를 지정하면 "-1"을 반환합니다.

**Remark**

- getFormatRowProperty() 메소드에서 "size" 속성값을 얻는 것과 같습니다.

- Summary 밴드는 정의되지 않았고, Head 밴드에 1개 Row, Body 밴드에 두줄로 된 Row 가 정의된 포맷에서
  nRowIdx 값을 "2" 로 설정하면 Body 밴드의 마지막 Sub Row 를 의미합니다.

- 동적으로 변경된 Row 의 높이는 반영되지 않고, 디자인 시 설정한 Row 의 높이를 반환합니다.


---

### getFormatString

> Components > Component > Grid > Method > getFormatString

**Description**

디자인 시 정의된 전체 포맷을 XML 형식의 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getFormatString()
```

**Parameters**

var strContents = this.Grid00.getFormatString();

**Return**

디자인 시 정의된 전체 포맷을 XML 형식의 문자열로 반환합니다.
동적으로 변경된 포맷값은 반영되지 않습니다.

기본적인 XML 형식은 아래와 같으며 Head, Body, Summary 정의는 포맷에 따라 없을 수 있습니다.

<Formats>
  <Format id="default">
    <Columns>....</Columns>
    <Rows>....</Rows>
    <Band id="head">...</Band>
    <Band id="body">...</Band>
    <Band id="summary">..</Band>
  </Format>
  <Format id="format00">
    <Columns>....</Columns>
    <Rows>....</Rows>
    <Band id="head">...</Band>
    <Band id="body">...</Band>
    <Band id="summary">..</Band>
  </Format>
</Formats>


---

### getHeadValue

> Components > Component > Grid > Method > getHeadValue

**Description**

Grid 컴포넌트의 Head 밴드 영역 내 특정 Cell의 text 속성값 또는 Cell 내부에서 관리하는 HeadValue 값을 반환하는 메서드입니다.

**Syntax**

```javascript
Grid.getHeadValue( nCellIdx )
```

**Parameters**

```
text 속성값 또는 Cell 내부에서 관리하는 HeadValue 값을 얻을 Cell 인덱스를 설정합니다.
```

**Return**

Cell의 text 속성에 값이 설정되어 있다면 설정된 값을 반환합니다.
Cell의 expr 속성이 설정되어 있다면 text 속성값에 EXPR 이 적용된 값을 반환합니다.
Cell의 text 속성이 Dataset 오브젝트에 바인드되어 있다면 바인드된 Dataset 오브젝트에서 현재 선택된 Row의 Column 값을 반환합니다.
Cell 내부에서 관리하는 HeadValue 값이 undefined가 아닌 경우에는 HeadValue 값을 반환합니다.

존재하지 않는 Cell 인덱스를 설정하면 "null"을 반환합니다.

**Remark**

◆ HeadValue 값 반환

- Cell edittype 속성값이 "none"이 아니고 편집 상태에서 값을 변경하거나 setHeadValue 메서드로 값을 변경한 경우에는 text 속성값이 아닌 Cell 내부에서 관리하는 HeadValue 값을 반환합니다.

- Cell 내부에서 관리하는 HeadValue 초기값은 undefined입니다.
  Cell text 속성값이 변경되거나 Grid 컴포넌트의 format 변경 시 HeadValue 값은 undefined로 변경됩니다.
  HeadValue 값이 undefined인 경우에는 메서드 호출 시 text 속성값을 반환합니다.

◆ nCellIdx 매개 변수 참고

- Grid 의 Head 밴드는 한 개의 Row로 구성되어 있고, Row는 여러개의 Sub Row를 가질 수 있습니다.
  Dataset 오브젝트의 데이터 개수와는 관계없습니다.
  Sub Row를 갖는 Row에서 Cell 인덱스는 (Sub Row 인덱스 * Column 개수 + Cell의 col 속성값) 이 됩니다.

- Head 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge)된 Cell 은 병합된 영역 전체가 첫 번째 Cell의 Cell 인덱스를 갖습니다.

- Cell의 col 속성값을 수정하지 않았다면 Cell 인덱스는 0부터 시작합니다.


---

### getHScrollPos

> Components > Component > Grid > Method > getHScrollPos

**Description**

Grid 에 표시된 수평스크롤바의 트랙바 위치값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getHScrollPos()
```

**Parameters**

var nScrollPos = this.Grid00.getHScrollPos();

**Return**

수평스크롤바의 현재 트랙바 위치값을 반환합니다.

**Remark**

- scrollbartype 속성값에 따라 표시되는 스크롤바 종류에 관계없이 위치값을 반환합니다.

- 수직스크롤바의 트랙바 위치값을 구하려면 getVScrollPos() 메소드를 사용하여야 합니다.

**See Also**

Grid.getVScrollPosGrid.scrollbartype


---

### getOffsetBottom

> Components > Component > Grid > Method > getOffsetBottom

**Description**

부모 컴포넌트의 Top 위치를 기준으로 Grid 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getOffsetBottom();
```

**Parameters**

var nBottom = this.Grid.getOffsetBottom();

**Return**

부모 컴포넌트의 Top 위치를 기준으로 Grid 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 Grid 의 bottom 값을 동적으로 계산합니다.


---

### getOffsetHeight

> Components > Component > Grid > Method > getOffsetHeight

**Description**

Grid 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getOffsetHeight();
```

**Parameters**

var nHeight = this.Grid.getOffsetHeight();

**Return**

Grid 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 Grid 의 높이를 동적으로 계산합니다.


---

### getOffsetLeft

> Components > Component > Grid > Method > getOffsetLeft

**Description**

부모 컴포넌트의 Left 위치를 기준으로 Grid 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getOffsetLeft();
```

**Parameters**

var nleft = this.Grid.getOffsetLeft();

**Return**

부모 컴포넌트의 Left 위치를 기준으로 Grid 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 Grid 의 left 값을 동적으로 계산합니다.


---

### getOffsetRight

> Components > Component > Grid > Method > getOffsetRight

**Description**

부모 컴포넌트의 Left 위치를 기준으로 Grid 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getOffsetRight();
```

**Parameters**

var nRight = this.Grid.getOffsetRight();

**Return**

부모 컴포넌트의 Left 위치를 기준으로 Grid 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 Grid 의 right 값을 동적으로 계산합니다.


---

### getOffsetTop

> Components > Component > Grid > Method > getOffsetTop

**Description**

부모 컴포넌트의 Top 위치를 기준으로 Grid 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getOffsetTop();
```

**Parameters**

var nTop = this.Grid.getOffsetTop();

**Return**

부모 컴포넌트의 Top 위치를 기준으로 Grid 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 Grid 의 top 값을 동적으로 계산합니다.


---

### getOffsetWidth

> Components > Component > Grid > Method > getOffsetWidth

**Description**

Grid 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getOffsetWidth();
```

**Parameters**

var nWidth = this.Grid.getOffsetWidth();

**Return**

Grid 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 Grid 의 너비를 동적으로 계산합니다.


---

### getPixelBottom

> Components > Component > Grid > Method > getPixelBottom

**Description**

Grid 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getPixelBottom();
```

**Parameters**

var nbottom = this.Grid.getPixelBottom();

**Return**

Grid 의 bottom 속성값을 픽셀단위로 반환합니다.

bottom 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- bottom 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelHeight

> Components > Component > Grid > Method > getPixelHeight

**Description**

Grid 의 height 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getPixelHeight();
```

**Parameters**

var nheight = this.Grid.getPixelHeight();

**Return**

Grid 의 height 속성값을 픽셀단위로 반환합니다.

height 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- height 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelLeft

> Components > Component > Grid > Method > getPixelLeft

**Description**

Grid 의 left 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getPixelLeft();
```

**Parameters**

var nleft = this.Grid.getPixelLeft();

**Return**

Grid 의 left 속성값을 픽셀단위로 반환합니다.

left 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- left 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelRight

> Components > Component > Grid > Method > getPixelRight

**Description**

Grid 의 right 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getPixelRight();
```

**Parameters**

var nright = this.Grid.getPixelRight();

**Return**

Grid 의 right 속성값을 픽셀단위로 반환합니다.

right 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- right 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelTop

> Components > Component > Grid > Method > getPixelTop

**Description**

Grid 의 top 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getPixelTop();
```

**Parameters**

var ntop = this.Grid.getPixelTop();

**Return**

Grid 의 top 속성값을 픽셀단위로 반환합니다.

top 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- top 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelWidth

> Components > Component > Grid > Method > getPixelWidth

**Description**

Grid 의 width 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getPixelWidth();
```

**Parameters**

var nwidth = this.Grid.getPixelWidth();

**Return**

Grid 의 width 속성값을 픽셀단위로 반환합니다.

width 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- width 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getRealColFullSize

> Components > Component > Grid > Method > getRealColFullSize

**Description**

Grid 에 표시되고 있는 포맷에서 전체 Column 의 너비를 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getRealColFullSize( [enumBand] )
```

**Parameters**

```
현재 Grid 포맷에서 전체 Column 의 너비를 구할 밴드를 문자열로 설정합니다.

"left" 설정 시 Left 밴드 영역의 전체 Column 너비를 구합니다.
"body" 설정 시 Body 밴드 영역의 전체 Column 너비를 구합니다.
"right" 설정 시 Right 밴드 영역의 전체 Column 너비를 구합니다.

값을 지정하지 않으면 밴드 영역에 관계없이 전체 Column 의 너비를 구합니다.
```

**Return**

지정된 영역에서 전체 Column의 너비를 반환합니다.
Column 의 너비를 구하지 못했을 경우 "0" 을 반환합니다.

**Remark**

- 사용자가 Column 의 너비를 변경하거나 자동조절 된 경우 변경된 너비가 반영됩니다.


---

### getRealColSize

> Components > Component > Grid > Method > getRealColSize

**Description**

Grid 에 표시되고 있는 포맷에서 특정 Column 의 너비를 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getRealColSize( nColIdx [, bBodyIdx] )
```

**Parameters**

```
너비를 가져 올 Column 의 인덱스를 설정합니다.

Column 인덱스는 "0" 부터 시작합니다.
```

**Return**

현재 표시되는 포맷에서 특정 Column의 너비를 반환합니다.
Column 의 너비를 구하지 못했을 경우 "0" 을 반환합니다.

**Remark**

- 사용자가 Column 의 너비를 변경하거나 자동조절 된 경우 변경된 너비가 적용됩니다.

- getRealColSize() 메소드는 동적으로 변경된 값을 반영하여 Column 너비를 반환합니다.
  동적으로 변경된 값이 반영되지 않은 디자인 시 설정한 Column 너비는 getFormatColSize() 메소드를 사용하여야 합니다.


---

### getRealRowFullSize

> Components > Component > Grid > Method > getRealRowFullSize

**Description**

Grid 에 표시되고 있는 포맷에서 전체 Row 의 높이를 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getRealRowFullSize( [enumBand] )
```

**Parameters**

```
현재 Grid 포맷에서 전체 Row 의 높이를 구할 밴드를 문자열로 설정합니다.

"head" 설정 시 Head 밴드 영역의 전체 Row 높이를 구합니다.
"body" 설정 시 Body 밴드 영역의 전체 Row 높이를 구합니다.
"summary" 설정 시 Summary 밴드 영역의 전체 Row 높이를 구합니다.

값을 지정하지 않으면 밴드 영역에 관계없이 전체 Row 의 높이를 구합니다.
```

**Return**

지정된 영역에서 전체 Row 의 높이를 반환합니다.
Row 의 높이를 구하지 못했을 경우 "0" 을 반환합니다.

**Remark**

- 사용자가 Row 의 높이를 변경하거나 자동조절 된 경우 변경된 높이가 반영됩니다.


---

### getRealRowSize

> Components > Component > Grid > Method > getRealRowSize

**Description**

Grid 에 표시된 데이터 Row 에서 특정 Row 또는 SubRow 의 높이를 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getRealRowSize( nRowIdx [, nSubRowIdx [, bBody]] )
```

**Parameters**

```
높이를 가져 올 Row 의 인덱스 또는 밴드영역을 설정합니다.

"0~Row 갯수" 설정 시 bBody 값이 true 이면 Body 밴드영역의 Row 인덱스로 적용됩니다.
"0~Row 갯수" 설정 시 bBody 값이 false 이면 밴드영역에 관계 없이 전체 Row 의 인덱스로 적용됩니다.
-1 설정 시 bBody 값이 true 이면 Head 밴드영역으로 적용됩니다.
-2 설정 시 bBody 값이 true 이면 Summary 밴드영역으로 적용됩니다.

Row 인덱스는 0 부터 시작합니다.
```

**Return**

파라미터로 지정한 Row 또는 SubRow 의 높이를 반환합니다.

Row 또는 SubRow 의 높이를 구하지 못했을 경우 0 을 반환합니다.

**Remark**

- nRowIdx 값에 해당하는 Row 에 SubRow 가 없는 경우 nSubRowIdx 값은 무시됩니다.

- extendsizetype 속성값이 "none" 이면 Body 밴드의 Row 또는 SubRow 는 각 Row 마다 동일한 높이를 갖습니다.

- getRealRowSize() 메소드는 동적으로 변경된 값을 반영하여 Row 높이를 반환합니다.
   따라서 Row 의 높이가 자동조절 되었거나 사용자가 높이를 변경한 경우 변경된 높이가 반환됩니다.
   동적으로 변경된 값이 반영되지 않은 디자인에서 설정한 포맷의 Row 높이를 구하려면 getFormatRowSize() 메소드를 사용하여야 합니다.

**See Also**

Grid.getFormatRowSize


---

### getSelectedDatasetRows

> Components > Component > Grid > Method > getSelectedDatasetRows

**Description**

Grid 에 선택되어 있는 Row 들에 해당하는 DataSet 의 Row 인덱스를 배열로 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getSelectedDatasetRows()
```

**Parameters**

var aDSRowidx = this.Grid00.getSelectedDatasetRows();

**Return**

Grid 에 선택된 Row 들에 해당하는 DataSet 의 Row 인덱스를 배열로 반환합니다.

**Remark**

- Grid 가 트리 형식일 때는 Collapse/Expand 에 따라 Grid 의 Row 인덱스와 DataSet 의 Row 인덱스가 일치하지 않을 수 있습니다.


---

### getSelectedRows

> Components > Component > Grid > Method > getSelectedRows

**Description**

Grid 에 선택되어 있는 Row 의 인덱스를 배열로 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getSelectedRows()
```

**Parameters**

var arrRowidx = this.Grid00.getSelectedRows()

**Return**

Grid 에 선택되어 있는 Row 의 인덱스를 배열로 반환합니다.

선택된 Row 가 없을 경우 빈 배열을 반환합니다.

**Remark**

- selecttype 속성값이 "cell" 이면 선택된 Cell 을 포함하는 Row 가 getSelectedRows() 메소드 호출 시 포함됩니다.

- Grid 가 트리 형식일 때는 Collapse/Expand 에 따라 Grid 의 Row 인덱스와 DataSet 의 Row 인덱스가 일치하지 않을 수 있습니다.
  getSelectedRows() 메소드는 DataSet 과 관계없이 현재 Grid 에 표시되는 Row 를 기준으로 인덱스를 반환합니다.


---

### getSubCellCount

> Components > Component > Grid > Method > getSubCellCount

**Description**

인수로 전달 된 Cell 이 Sub Cell 구조일 때 Sub Cell 의 갯수를 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getSubCellCount( enumBand, nCellIdx )
```

**Parameters**

```
nCellIdx 에 해당하는 Cell 이 속한 밴드를 문자열로 설정합니다.

"head" 설정 시 Head 밴드 영역에 속한 Cell 의 인덱스로 처리됩니다.
"body" 설정 시 Body 밴드 영역에 속한 Cell 의 인덱스로 처리됩니다.
"summary" 설정 시 Summary 밴드 영역에 속한 Cell 의 인덱스로 처리됩니다.
```

**Return**

인수로 전달 된 Cell 의 Sub Cell 갯수를 반환합니다.

Sub Cell 이 아닐 경우 "0" 을 반환합니다.

**Remark**

- Sub Cell 은 넥사크로 스튜디오에서 Grid Contents Editor 를 사용해 Cell 을 병합(Merge)한 후에 Sub Cell 속성을 선택하면 생성할 수 있습니다.
  Sub Cell 은 Cell 인덱스는 공유 하지만 병합된 Cell 의 각 Cell 은 속성을 유지하고 있습니다.
  Merge Cell 은 병합 후 전체를 하나의 Cell 로 처리합니다.

- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge) 된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.
  병합(Merge) 된 Cell 갯수만큼 인덱스가 감소합니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.


---

### getSubCellProperty

> Components > Component > Grid > Method > getSubCellProperty

**Description**

Cell 이 Sub Cell 구조일 때 특정 Sub Cell 의 속성값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getSubCellProperty( enumBand, nCellIdx, nSubCellIdx, strPropID )
```

**Parameters**

```
nCellIdx 에 해당하는 Cell 이 속한 밴드를 문자열로 설정합니다.

"head" 설정 시 Head 밴드 영역에 속한 Cell 의 인덱스로 처리됩니다.
"body" 설정 시 Body 밴드 영역에 속한 Cell 의 인덱스로 처리됩니다.
"summary" 설정 시 Summary 밴드 영역에 속한 Cell 의 인덱스로 처리됩니다.
```

**Return**

특정 Sub Cell 의 속성값을 반환합니다.

**Remark**

- getSubCellProperty() 메소드는 Sub Cell 이 존재할 경우에만 사용할 수 있습니다.

- Sub Cell 은 넥사크로 스튜디오에서 Grid Contents Editor 를 사용해 Cell 을 병합(Merge)한 후에 Sub Cell 속성을 선택하면 생성할 수 있습니다.
  Sub Cell 은 Cell 인덱스는 공유 하지만 병합된 Cell 의 각 Cell 은 속성을 유지하고 있습니다.
  Merge Cell 은 병합 후 전체를 하나의 Cell 로 처리합니다.

- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge) 된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.
  병합(Merge) 된 Cell 갯수만큼 인덱스가 감소합니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.

- Sub Cell 의 인덱스는 병합된 Cell 내에 정의된 순서대로 "0"부터 시작하는 인덱스를 갖습니다.


---

### getSubCellPropertyValue

> Components > Component > Grid > Method > getSubCellPropertyValue

**Description**

Grid 에 표시된 Cell 중 특정 SubCell 에 적용된 속성값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getSubCellPropertyValue( nRowIdx, nCellIdx, nSubCellIdx, strPropID )
```

**Parameters**

```
속성값을 얻을 SubCell 이 Grid 에서 위치한 Row 의 인덱스를 설정합니다.

"0 ~ Row 갯수-1" 설정 시 Body 밴드의 Row 인덱스로 적용됩니다.
"-1" 설정 시 Head 밴드로 적용됩니다.
"-2" 설정 시 Summary 밴드로 적용됩니다.
```

**Return**

SubCell 의 속성이 DataSet 에 바인드 되어 있다면 바인드된 DataSet 의 Column 값을 반환합니다.
SubCell 의 속성이 EXPR 형식으로 설정되어 있다면 EXPR 이 적용된 값을 반환합니다.
SubCell 의 속성에 값이 설정되어 있다면 설정된 값을 반환합니다.

**Remark**

- Cell 인덱스는 Grid 의 포맷을 기준으로 설정되며 DataSet 의 데이터 갯수와는 관계없습니다.
   Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 포맷으로 구성되어 있고, Row 는 여러개의 SubRow 를 가질 수 있습니다.
   SubRow 를 갖는 밴드의 Cell 인덱스는 "SubRow 인덱스 * Column 갯수 + Cell 의 col 속성값" 으로 설정됩니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
   병합(Merge)된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 0 부터 시작합니다.


---

### getSubCellRect

> Components > Component > Grid > Method > getSubCellRect

**Description**

특정 Cell 에서 Sub Cell 영역을 Rect 오브젝트로 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getSubCellRect(nRow,nCellIdx,nSubCellIdx)
```

**Parameters**

```
영역 정보를 얻을 Sub Cell 이 위치한 Row의 인덱스를 설정합니다.

"0~Row 갯수" 설정 시 Body 밴드의 Row 인덱스로 적용됩니다.
"-1" 설정 시 Head 밴드로 적용됩니다.
"-2" 설정 시 Summary 밴드로 적용됩니다.
```

**Return**

특정 Cell 의 Sub Cell 영역 정보를 갖는 Rect 오브젝트를 반환합니다.
Sub Cell 이 아니거나 잘못된 위치의 Sub Cell 지정 시 모든 속성값이 "0" 인 Rect 오브젝트를 반환합니다.

Rect 오브젝트는 "left", "top", "right", "bottom", "width", "height" 속성을 갖습니다.
Cell 영역의 정보는 Rect 오브젝트의 각 속성에 저장됩니다.

**Remark**

- getSubCellRect() 메소드는 Sub Cell 이 존재할 경우에만 사용할 수 있습니다.

- Sub Cell 은 넥사크로 스튜디오에서 Grid Contents Editor 를 사용해 Cell 을 병합(Merge)한 후에 Sub Cell 속성을 선택하면 생성할 수 있습니다.
  Sub Cell 은 Cell 인덱스는 공유 하지만 병합된 Cell 의 각 Cell 은 속성을 유지하고 있습니다.
  Merge Cell 은 병합 후 전체를 하나의 Cell 로 처리합니다.

- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge) 된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.
  병합(Merge) 된 Cell 갯수만큼 인덱스가 감소합니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.

- Sub Cell 의 인덱스는 병합된 Cell 내에 정의된 순서대로 "0"부터 시작하는 인덱스를 갖습니다.


---

### getSubCellText

> Components > Component > Grid > Method > getSubCellText

**Description**

특정 Cell 의 Sub Cell 에 표시되는 텍스트값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getSubCellText( nRow, nCellIdx, nSubCellIdx )
```

**Parameters**

```
텍스트값을 얻을 Sub Cell 이 위치한 Row 의 인덱스를 설정합니다.

"0~Row 갯수" 설정 시 Body 밴드의 Row 인덱스로 적용됩니다.
"-1" 설정 시 Head 밴드로 적용됩니다.
"-2" 설정 시 Summary 밴드로 적용됩니다.
```

**Return**

특정 Cell 의 Sub Cell 에 표시되는 텍스트값을 반환합니다.

**Remark**

- getSubCellText() 메소드는 Sub Cell 이 존재할 경우에만 사용할 수 있습니다.

- Sub Cell 은 넥사크로 스튜디오에서 Grid Contents Editor 를 사용해 Cell 을 병합(Merge)한 후에 Sub Cell 속성을 선택하면 생성할 수 있습니다.
  Sub Cell 은 Cell 인덱스는 공유 하지만 병합된 Cell 의 각 Cell 은 속성을 유지하고 있습니다.
  Merge Cell 은 병합 후 전체를 하나의 Cell 로 처리합니다.

- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge) 된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.
  병합(Merge) 된 Cell 갯수만큼 인덱스가 감소합니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.

- Sub Cell 의 인덱스는 병합된 Cell 내에 정의된 순서대로 "0"부터 시작하는 인덱스를 갖습니다.


---

### getSubCellValue

> Components > Component > Grid > Method > getSubCellValue

**Description**

특정 Sub Cell 의 text 속성에 설정된 값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getSubCellValue( nRow, nCellIdx, nSubCellIdx )
```

**Parameters**

```
text 속성값을 얻을 Sub Cell 이 위치한 Row의 인덱스를 설정합니다.

"0~Row 갯수" 설정 시 Body 밴드의 Row 인덱스로 적용됩니다.
"-1" 설정 시 Head 밴드로 적용됩니다.
"-2" 설정 시 Summary 밴드로 적용됩니다.
```

**Return**

Sub Cell 의 text 속성이 DataSet 에 바인드 되어 있다면 바인드된 DataSet 의 Column 값을 반환합니다.
Sub Cell 의 text 속성에 값이 설정되어 있다면 설정된 값을 반환합니다.
Sub Cell 의 expr 속성이 설정되어 있다면 text 속성값에 EXPR 이 적용된 값을 반환합니다.

**Remark**

- getSubCellValue() 메소드는 Sub Cell 이 존재할 경우에만 사용할 수 있습니다.

- Sub Cell 은 넥사크로 스튜디오에서 Grid Contents Editor 를 사용해 Cell 을 병합(Merge)한 후에 Sub Cell 속성을 선택하면 생성할 수 있습니다.
  Sub Cell 은 Cell 인덱스는 공유 하지만 병합된 Cell 의 각 Cell 은 속성을 유지하고 있습니다.
  Merge Cell 은 병합 후 전체를 하나의 Cell 로 처리합니다.

- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge) 된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.
  병합(Merge) 된 Cell 갯수만큼 인덱스가 감소합니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.

- Sub Cell 의 인덱스는 병합된 Cell 내에 정의된 순서대로 "0"부터 시작하는 인덱스를 갖습니다.


---

### getSummValue

> Components > Component > Grid > Method > getSummValue

**Description**

Grid 의 Summary 밴드 영역에서 특정 Cell 의 text 속성에 설정된 값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getSummValue( nCellIdx )
```

**Parameters**

```
text 속성값을 얻을 Cell 의 Cell 인덱스를 설정합니다.
```

**Return**

Cell 의 text 속성에 값이 설정되어 있다면 설정된 값을 반환합니다.
Cell 의 expr 속성이 설정되어 있다면 text 속성값에 EXPR 이 적용된 값을 반환합니다.
Cell 의 text 속성이 DataSet 에 바인드 되어 있다면 바인드된 DataSet 에서 현재 선택된 Row의 Column 값을 반환합니다.

존재하지 않는 Cell 인덱스를 설정하면 "null"을 반환합니다.

**Remark**

- Grid 의 Summary 밴드는 한개의 Row 로 구성되어 있고, Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.
  Sub Row 를 갖는 Row 에서 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.

- Summary 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge)된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.


---

### getTreeChildCount

> Components > Component > Grid > Method > getTreeChildCount

**Description**

Grid 가 트리 형식일 때 특정 Row 에 자식으로 존재하는 Row 의 갯수를 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getTreeChildCount( nRowIndex [,bDatasetRow] )
```

**Parameters**

```
자식 Row 의 갯수를 확인할 Row 의 인덱스를 설정합니다.
```

**Return**

특정 Row 의 자식 Row 갯수를 반환합니다.

자식 Row 의 갯수를 구할 수 없거나 존재하는 자식 Row 가 없을 경우 "0"을 반환합니다.
Grid 가 트리 형식이 아니어도 "0"을 반환합니다.


---

### getTreeChildRow

> Components > Component > Grid > Method > getTreeChildRow

**Description**

Grid 가 트리 형식일 때 특정 Row 의 자식 Row 에 해당하는 DataSet Row 값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getTreeChildRow( nRowIndex, nChildIndex [,bDatasetRow] )
```

**Parameters**

```
자식 Row 의 DataSet Row 값을 확인할 Row 의 인덱스를 설정합니다.
```

**Return**

특정 Row 의 자식 Row 에 해당하는 DataSet Row 값을 반환합니다.

Grid 가 트리 형식이 아니거나 nRowIndex 에 해당하는 Row 가 단말(Leaf) Row 일 경우 "-1"을 반환합니다.

**Remark**

- DataSet 의 Row 값에 해당하는 Grid 의 Row 값을 구할 때는 getTreeRow() 메소드를 사용해야 합니다.

- 특정 Row 가 단말(Leaf) Row 인지 확인하지 위해서는 isTreeLeafRow() 메소드를 사용해야 합니다.


---

### getTreeParentRow

> Components > Component > Grid > Method > getTreeParentRow

**Description**

Grid 가 트리 형식일 때 특정 Row 의 부모 Row 에 해당하는 DataSet Row 값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getTreeParentRow( nRowIndex[,bDatasetRow] )
```

**Parameters**

```
부모 Row 의 DataSet Row 값을 확인할 Row 의 인덱스를 설정합니다.
```

**Return**

특정 Row 의 부모 Row 에 해당하는 DataSet Row 값을 반환합니다.

Grid 가 트리 형식이 아니거나 nRowIndex 에 해당하는 Row 가 뿌리(Root) Row 일 경우 "-1"을 반환합니다.

**Remark**

- DataSet 의 Row 값에 해당하는 Grid 의 Row 값을 구할 때는 getTreeRow() 메소드를 사용해야 합니다.

- 특정 Row 가 뿌리(Root) Row 인지 확인하지 위해서는 isTreeRootRow() 메소드를 사용해야 합니다.


---

### getTreePath

> Components > Component > Grid > Method > getTreePath

**Description**

Grid 가 트리 형식일 때 뿌리(Root) Row 에서 특정 Row 까지 각 Row 의 text 속성값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getTreePath( nRowIndex [,bDatasetRow] )
```

**Parameters**

```
뿌리(Root) Row 부터 경로를 구할 Row 의 인덱스를 설정합니다.
```

**Return**

뿌리(Root) Row 에서 특정 Row 까지 트리 Cell 에 표시되는 텍스트를 마침표(".")로 연결하여 반환합니다.

Grid 가 트리  형식이 아니거나 뿌리(Root) Row 까지의 경로를 구할 수 없을 때는 빈 문자열을 반환합니다.


---

### getTreeRow

> Components > Component > Grid > Method > getTreeRow

**Description**

인수로 전달된 DataSet 의 Row 값에 해당하는 Grid 의 Row 값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getTreeRow( nDSRowIndex )
```

**Parameters**

```
DataSet 의 Row 인덱스 값을 설정합니다.
```

**Return**

DataSet 의 Row 값에 해당하는 데이터가 Grid 에 표시되는 위치의 Row 값을 반환합니다.

트리 Cell 이 Collapse 되어 Grid 에 데이터가 표시되지 않으면 "-1"을 반환합니다.
Grid 가 트리 형식이 아니어도 "-1"을 반환합니다.


---

### getTreeSiblingRow

> Components > Component > Grid > Method > getTreeSiblingRow

**Description**

Grid 가 트리 형식일 때 특정 Row 의 형제(Sibling) Row 에 해당하는 DataSet Row 값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getTreeSiblingRow( nRowIndex [,nOffset [,bDatasetRow]] )
```

**Parameters**

```
형제(Sibling) Row 의 DataSet Row 값을 확인할 Row 의 인덱스를 설정합니다.
```

**Return**

특정 Row 의 형제 Row 에 해당하는 DataSet Row 값을 반환합니다.

Grid 가 트리 형식이 아니거나 형제(Sibling) Row 가 없을 경우 "-1"을 반환합니다

**Remark**

- DataSet 의 Row 값에 해당하는 Grid 의 Row 값을 구할 때는 getTreeRow() 메소드를 사용해야 합니다.


---

### getTreeStatus

> Components > Component > Grid > Method > getTreeStatus

**Description**

Grid 가 트리 형식일 때 특정 Row 의 트리 상태를 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getTreeStatus( nRowIndex )
```

**Parameters**

```
트리 상태를 확인할 Row 의 인덱스를 현재 화면에 표시되는 Grid 기준으로 설정합니다.
```

**Return**

Row 가 Collapse 상태이면 "0"을 반환합니다.
Row 가 Expand 상태이면 "1"을 반환합니다.
Row 가 Collapse/Expand 상태를 가질 수 없는 단말(Leaf) Row 이면 "3"을 반환합니다.

Row 의 트리 상태를 얻지 못했을 경우 "-1"을 반환합니다.

**Remark**

- nRowIndex 는 Grid 에 표시되는 Row 를 기준(Collapse 된 Row는 인덱스가 없음)으로 인덱스값을 설정합니다.
  따라서, oncellclick 이벤트에서 e.row 를 getTreeStatus() 메소드에 사용할 수 없으므로 주의하셔야 합니다.

- DataSet 의 Row 값에 해당하는 Grid 의 Row 값을 구할 때는 getTreeRow() 메소드를 사용해야 합니다.

- Grid 트리 Cell 의 초기값은 Cell 의 treestate 속성에 바인딩된 DataSet 의 값으로 설정됩니다.
  이 후, 사용자의 입력에 의해 변경된 트리 상태값은 바인딩된 DataSet 에 반영되지 않고 그리드 내부에서 별도로 유지됩니다.
  따라서 특정 Row 의 트리 상태를 얻거나 설정하고자 할 때는 getTreeStatus(), setTreeStatus() 메소드를 사용하여야 합니다.


---

### getVScrollPos

> Components > Component > Grid > Method > getVScrollPos

**Description**

Grid 에 표시된 수직스크롤바의 트랙바 위치값을 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.getVScrollPos()
```

**Parameters**

var nScrollPos = this.Grid00.getVScrollPos();

**Return**

수직스크롤바의 현재 트랙바 위치값을 반환합니다.

**Remark**

- scrollbartype 속성값에 따라 표시되는 스크롤바 종류에 관계없이 위치값을 반환합니다.

- 수평스크롤바의 트랙바 위치값을 구하려면 getHScrollPos() 메소드를 사용하여야 합니다.

**See Also**

Grid.getHScrollPosGrid.scrollbartype


---

### init

> Components > Component > Grid > Method > init

**Description**

스크립트로 Grid 을(를) 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**

```javascript
Grid.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

**Parameters**

```
Grid 의 ID를 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- 인수값에 기준 컴포넌트를 포함하면 Grid 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 Grid 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 Grid 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

- 스크립트에서 동적으로 컴포넌트를 생성한 후에만 사용할 수 있습니다.
  동적으로 생성한 컴포넌트가 아닌 경우에는 오동작이 발생할수 있습니다.

- show() 메소드로 컴포넌트가 화면에 표시되면 초기화가 끝난 상태입니다.
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다.

- 동적으로 생성한 컴포넌트를 컨테이너 컴포넌트에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildGrid.destroyGrid.show


---

### insertContentsCol

> Components > Component > Grid > Method > insertContentsCol

**Description**

Grid 에 현재 표시된 포맷의 특정 위치에 Column 을 삽입하는 메소드입니다.

**Syntax**

```javascript
Grid.insertContentsCol( enumBand, nColIndex [, bBandIndex] )
```

**Parameters**

```
현재 표시된 Grid 포맷에 Column 이 삽입될 밴드를 문자열로 설정합니다.

"left" 설정 시 Column 이 Left 밴드 영역에 삽입됩니다.
"body" 설정 시 Column 이 Body 밴드 영역에 삽입됩니다.
"right" 설정 시 Column 이 Right 밴드 영역에 삽입됩니다.
```

**Return**

전체 Column 을 기준으로 Column 이 삽입된 위치의 인덱스 값을 반환합니다.
enumBand 에 설정한 밴드 영역내의 인덱스가 아닙니다.

정상적으로 삽입하지 못했을 경우 -1 을 반환합니다.

**Remark**

- Grid 에 여러개의 포맷이 정의되어 있어도 현재 화면에 표시된 포맷에만 Column 을 삽입합니다.

- 현재 표시된 Grid 포맷에 존재하는 Row 단위 밴드(Head, Body, Summary)만 Column 이 삽입됩니다.
   현재 포맷에 Row 단위 밴드(Head, Body, Summary)가 모두 없다면 Column 은 삽입되지 않습니다.

- 합병(Merge)된 Cell 의 중간에 Column 이 삽입된 경우 자동으로 Cell 이 합병(Merge) 됩니다.


---

### insertContentsRow

> Components > Component > Grid > Method > insertContentsRow

**Description**

Grid 에 현재 표시되는 포맷의 특정 위치에 Sub Row 를 삽입하는 메소드입니다.

**Syntax**

```javascript
Grid.insertContentsRow( enumBand, nSubRowIndex )
```

**Parameters**

```
현재 Grid 포맷에 Sub Row 가 추가될 밴드를 문자열로 설정합니다.

"head" 설정 시 Sub Row 가 Head 밴드 영역에 추가됩니다.
"body" 설정 시 Sub Row 가 Body 밴드 영역에 추가됩니다.
"summary" 설정 시 Sub Row 가 Summary 밴드 영역에 추가됩니다.
```

**Return**

전체 Sub Row 를 기준으로 Sub Row 가 삽입된 위치의 인덱스 값을 반환합니다.
enumBand 에 설정한 밴드 영역내의 인덱스가 아닙니다.

정상적으로 추가하지 못했을 경우 "-1"을 반환합니다.

**Remark**

- Grid 에 여러개의 포맷이 정의되어 있어도 현재 화면에 표시되는 포맷에만 Sub Row 를 삽입합니다.

- 바인드 된 DataSet 에 Row 를 추가하는 기능이 아닙니다.
  Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 해당 영역의 Row를 여러줄로 구성하게 하는 기능입니다. 

- 포맷에 enumBand 값에 해당하는 밴드가 정의되지 않았다면 해당 밴드에 새로운 Row 가 추가됩니다.
  enumBand 값에 해당하는 밴드가 정의되어 있다면 해당 밴드의 Row 에  Sub Row 가 추가됩니다.

- 병합(Merge)된 Cell 의 중간에 Sub Row 가 삽입된 경우 자동으로 Cell 이 합병(Merge) 됩니다.


---

### insertEventHandler

> Components > Component > Grid > Method > insertEventHandler

**Description**

Grid 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
Grid.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수가 삽입될 이벤트의 ID 를 설정합니다.
```

**Return**

이벤트에 삽입된 핸들러 함수의 인덱스를 반환합니다.
동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다.

핸들러 함수가 정상적으로 삽입되지 않은 경우에는 -1 을 반환합니다.

**Remark**

- 첫번째 핸들러 함수의 인덱스는 0 입니다.


---

### isDropdown

> Components > Component > Grid > Method > isDropdown

**Description**

Grid 컴포넌트에 아이템 리스트가 표시되어 있는지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.isDropdown()
```

**Parameters**

var bRtn = this.Grid00.isDropdown()

**Return**

Grid 컴포넌트에 아이템 리스트가 표시되어 있으면 true를 반환합니다.
Grid 컴포넌트에 아이템 리스트가 표시되어 있지 않으면 false를 반환합니다.

**Remark**

- Cell edittype 속성값을 "combo", "date", "multicombo"처럼 아이템 리스트를 가지는 형태로 설정한 경우 지원하는 메서드입니다.


---

### isDropdownCalendar

> Components > Component > Grid > Method > isDropdownCalendar

**Description**

Grid 에 팝업달력이 표시되어 있는지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.isDropdownCalendar()
```

**Parameters**

var bRtn = this.Grid00.isDropdownCalendar()

**Return**

Grid 에 팝업달력이 표시되어 있으면 true 를 반환합니다.

Grid 에 팝업달력이 표시되어 있지 않으면 false 를 반환합니다.


---

### isDropdownCombo

> Components > Component > Grid > Method > isDropdownCombo

**Description**

Grid 에 Combo 아이템 리스트가 표시되어 있는지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.isDropdownCombo()
```

**Parameters**

var bRtn = this.Grid00.isDropdownCombo()

**Return**

Grid 에 Combo 아이템 리스트가 표시되어 있으면 true 를 반환합니다.

Grid 에 Combo 아이템 리스트가 표시되어 있지 않으면 false 를 반환합니다.


---

### isSelectedCell

> Components > Component > Grid > Method > isSelectedCell

**Description**

인수로 전달된 위치의 Cell 이 선택 상태인지 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.isSelectedCell( nCellIdx [,enumBand, [nRowIdx]] );
```

**Parameters**

```
선택상태를 확인 할 Cell 의 Cell 인덱스를 설정합니다.
```

**Return**

인수로 전달된 위치의 Cell 이 선택상태이면 "true"를 반환합니다.
인수로 전달된 위치의 Cell 이 선택상태가 아니면 "false"를 반환합니다.

**Remark**

- Body 밴드 영역은 selecttype 속성값에 따라 다중 선택이 가능하며 Head,Summary 영역은 선택(Select)을 지원하지 않습니다.

- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge) 된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.
  병합(Merge) 된 Cell 갯수만큼 인덱스가 감소합니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.


---

### isTreeCollapsedRow

> Components > Component > Grid > Method > isTreeCollapsedRow

**Description**

Grid 가 트리 형식일 때 특정 Row 가 Collapse 상태인지 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.isTreeCollapsedRow( nRowIndex [,bDatasetRow] )
```

**Parameters**

```
Collapse 상태 여부를 확인할 Row 의 Row 인덱스를 설정합니다.
```

**Return**

특정 Row 의 부모 Row 가 Collapse 되어 Grid 에 특정 Row 가 표시되지 않으면 "true"를 반환합니다.

특정 Row 의 부모 Row 가 Expand 되어 Grid 에 특정 Row 가 표시되어 있으면 "false"를 반환합니다.
Grid 가 트리형식이 아니거나 nRowIndex 에 해당하는 Row 가 없는 경우 "false"를 반환합니다.


---

### isTreeExpandedRow

> Components > Component > Grid > Method > isTreeExpandedRow

**Description**

Grid 가 트리 형식일 때 특정 Row 가 Expand 상태인지 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.isTreeExpandedRow( nRowIndex [,bDatasetRow] )
```

**Parameters**

```
Expand 상태 여부를 확인할 Row 의 Row 인덱스를 설정합니다.
```

**Return**

특정 Row 의 부모 Row 가 Expand 되어 Grid 에 특정 Row 가 표시되면 "true"를 반환합니다.

특정 Row 의 부모 Row 가 Collapse 되어 Grid 에 특정 Row 가 표시되지 않으면 "false"를 반환합니다.
Grid 가 트리형식이 아니거나 nRowIndex 에 해당하는 Row 가 없는 경우 "false"를 반환합니다.


---

### isTreeLeafRow

> Components > Component > Grid > Method > isTreeLeafRow

**Description**

Grid 가 트리 형식일 때 특정 Row 가 단말(Leaf) Row 인지 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.isTreeLeafRow( nRowIndex[,bDatasetRow] )
```

**Parameters**

```
단말(Leaf) Row 여부를 확인할 Row 의 Row 인덱스를 설정합니다.
```

**Return**

특정 Row 가 자식 Row 가 없는 단말(Leaf) Row 이면 "true"를 반환합니다.

특정 Row 가 자식 Row 를 갖는 비단말 Row 이면 "false"를 반환합니다.
Grid 가 트리형식이 아니거나 nRowIndex 에 해당하는 Row 가 없는 경우 "false"를 반환합니다.


---

### isTreeRootRow

> Components > Component > Grid > Method > isTreeRootRow

**Description**

Grid 가 트리 형식일 때 특정 Row 가 뿌리(Root) Row 인지 반환하는 메소드입니다.

**Syntax**

```javascript
Grid.isTreeRootRow( nRowIndex [,bDatasetRow] )
```

**Parameters**

```
뿌리(Root) Row 여부를 확인할 Row 의 Row 인덱스를 설정합니다.
```

**Return**

특정 Row 가 부모 Row 가 없는 뿌리(Root) Row 이면 "true"를 반환합니다.

특정 Row 가 부모 Row 를 갖는 Row 이면 "false"를 반환합니다.
Grid 가 트리형식이 아니거나 nRowIndex 에 해당하는 Row 가 없는 경우 "false"를 반환합니다.


---

### mergeCell

> Components > Component > Grid > Method > mergeCell

**Description**

Grid 에 표시된 Cell 중 특정 영역의 Cell 들을 병합하여 하나의 Cell 로 표시하는 메소드입니다.

**Syntax**

```javascript
Grid.mergeCell( nStartCol, nEndCol, nStartRow, nEndRow )
```

**Parameters**

```
병합 하려는 Cell 중 왼쪽에 위치한 Cell 의 Column 인덱스를 숫자로 설정합니다.

Grid 의 전체 Column 을 기준으로 Column 인덱스를 설정하여야 합니다.
```

**Return**

메소드가 정상적으로 수행되면 true 를 반환합니다.

메소드가 정상적으로 수행되지 않으면 false 를 반환합니다.

**Remark**

- Grid 에 데이터가 로딩된 상태에서 Grid 의 포맷과 관계없이 화면에 표시된 Cell 을 병합하여 표시할 때 사용되는 메소드입니다.

- mergeCell() 메소드로 병합할 Cell 영역에 GridContentsEditor 에서 병합된 Cell 의 일부만 포함되어 있어도
   GridContentEditor 에서 병합된 Cell 영역을 모두 포함하여 병합됩니다.

- 동일한 밴드(Head, Body, Summary)와 동일한 영역(Left, Body, Right)에 속한 Cell 만 병합될 수 있습니다.
   동일하지 않은 밴드 또는 영역의 Cell 은 병합되지 않습니다.

- suppress 속성이 설정되어 있는 Cell 이 포함된 경우 병합되지 않습니다.
   Grid 의 suppresshorzcell 속성에 의해 가로 Suppress 기능이 적용된 Cell 이 포함된 경우 병합되지 않습니다.
   
- mergeCell() 메소드로 병합된 Cell 영역을 선택 시 selecttype 속성값에 따라 Row 또는 Cell 단위로 선택됩니다.

- mergeCell() 메소드로 병합된 Cell 은 해당 영역의 좌상단 Cell 에 설정된 Style 관련 속성과 edittype, expr 속성 등이 동일하게 적용됩니다.
   또한 병합된 Cell 의 displaytype 속성값은 "text" 로 적용됩니다.

- 병합할 Cell 영역에서 좌상단에 위치한 Cell 의 text 속성이 DataSet 컬럼에 바인드 되어 있다면 다음과 같이 적용됩니다.
   > 병합할 나머지 Cell 중 text 속성값이 DataSet 컬럼에 바인드 되어 있는 Cell 의 값은 좌상단 Cell 의 값으로 모두 변경됩니다.
   > 병합된 Cell 값을 편집 시 text 속성값이 DataSet 컬럼에 바인드 되어 있는 모든 Cell 에 편집한 값이 동일하게 적용됩니다.

- mergeCell() 메소드로 병합된 Cell 의 복잡도가 높을 때 autosizingtype 속성값을 적용할 경우 설정하는 순서에 따라 결과가 동일하지 않을 수 있습니다.
   즉, autosizingtype 속성값 설정 후 mergeCell() 메소드를 실행한 것과 mergeCell() 메소드를 실행한 후 autosizingtype 속성을 설정한 결과가 다를 수 있습니다.
   병합된 Cell 의 복잡도가 높을 경우 성능향상을 위한 조치이며, 이런 경우 mergeCell() 메소드 실행 후 autosizingtype 속성을 설정하는 것을 권장합니다.


---

### mergeContentsCell

> Components > Component > Grid > Method > mergeContentsCell

**Description**

Grid 에 표시되어 있는 포맷에서 특정 Cell 들을 병합(Merge) 하여 하나의 Cell로 만드는 메소드입니다.

**Syntax**

```javascript
Grid.mergeContentsCell( enumBand, nStartSubRow, nStartCol, nEndSubRow, nEndCol, nFirstCell, bKeepSubCell )
```

**Parameters**

```
병합(Merge) 하려는 Cell 이 속한 밴드 영역을 문자열로 설정합니다.

"head" 설정 시 Head 밴드 영역의 Cell 을 병합(Merge) 합니다.
"body" 설정 시 Body 밴드 영역의 Cell 을 병합(Merge) 합니다.
"summary" 설정 시 Summary 밴드 영역의 Cell 을 병합(Merge) 합니다.
```

**Return**

병합(Merge) 한 Cell 이 속한 밴드 영역을 기준으로 Cell 인덱스를 반환합니다.

병합(Merge)에 실패했을 경우 "-1"을 반환합니다.


---

### move

> Components > Component > Grid > Method > move

**Description**

Grid 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
Grid.move( vLeft, vTop [, vWidth, vHeight [, vRight, vBottom]] )
```

**Parameters**

```
Grid 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* 값에 기준 컴포넌트를 포함하여 설정했을 때 :
pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 Grid 의 left 가 결정됩니다.
비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Grid 의 left 가 결정됩니다.
```

**Return**

없음

**Remark**

- 인수값에 기준 컴포넌트를 포함하면 Grid 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 Grid 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 Grid 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.


---

### moveToNext

> Components > Component > Grid > Method > moveToNext

**Description**

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Grid 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**

```javascript
Grid.moveToNext( objComp )
Grid.moveToNext( strComp )
```

**Parameters**

```
기준이 되는 컴포넌트를 오브젝트로 설정합니다.
```

**Return**

없음

**Remark**

- 인수로 전달되는 기준 컴포넌트와 Grid 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToNext() 메소드는 기준 컴포넌트보다 Grid 이(가) 한단계 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 뒤에 표시되게 됩니다.


---

### moveToNextCell

> Components > Component > Grid > Method > moveToNextCell

**Description**

Grid 의 Body 밴드 영역에서 Cell 포커스를 편집 가능한 다음 Cell로 이동시키는 메소드입니다.

**Syntax**

```javascript
Grid.moveToNextCell()
```

**Parameters**

var bSuccess = this.Grid00.moveToNextCell();

**Return**

Cell 포커스 이동에 성공하면 "true"를 반환합니다.
Cell 포커스 이동에 실패하면 "false"를 반환합니다.

**Remark**

- Cell 의 col 속성값 순서대로 포커스가 이동합니다.

- 현재 포커스 된 Cell 이 마지막 Cell 일 경우 첫 Cell 로 이동하지 않습니다.

- Cell 의 포커스가 변경된 경우는 onselectchanged 이벤트가 발생합니다.


---

### moveToPrev

> Components > Component > Grid > Method > moveToPrev

**Description**

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Grid 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**

```javascript
Grid.moveToPrev( objComp )
Grid.moveToPrev( strComp )
```

**Parameters**

```
기준이 되는 컴포넌트를 오브젝트로 설정합니다.
```

**Return**

없음

**Remark**

- 인수로 전달되는 기준 컴포넌트와 Grid 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToPrev() 메소드는 기준 컴포넌트보다 Grid 이(가) 한단계 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 앞에 표시되게 됩니다.


---

### moveToPrevCell

> Components > Component > Grid > Method > moveToPrevCell

**Description**

Grid 의 Body 밴드 영역에서 Cell 포커스를 편집 가능한 이전 Cell로 이동시키는 메소드입니다.

**Syntax**

```javascript
Grid.moveToPrevCell()
```

**Parameters**

var bSuccess = this.Grid00.moveToPrevCell();

**Return**

Cell 포커스 이동에 성공하면 "true"를 반환합니다.
Cell 포커스 이동에 실패하면 "false"를 반환합니다.

**Remark**

- Cell 의 col 속성값 순서대로 포커스가 이동합니다.

- 현재 포커스 된 Cell 이 첫 Cell 일 경우 마지막 Cell 로 이동하지 않습니다.

- Cell 의 포커스가 변경된 경우는 onselectchanged 이벤트가 발생합니다.


---

### redrawExprCell

> Components > Component > Grid > Method > redrawExprCell

**Description**

Grid 에서 Cell 에 설정된 Expr 값을 모두 갱신하는 메소드입니다.

**Syntax**

```javascript
Grid.redrawExprCell( [enumBand] )
```

**Parameters**

```
Cell 에 설정된 Expr 값을 갱신할 밴드를 문자열로 설정합니다.

"head" 설정 시 Head 밴드 영역의 Cell 에 설정된 Expr 값을 갱신합니다.
"body" 설정 시 Body 밴드 영역의 Cell 에 설정된 Expr 값을 갱신합니다.
"summary" 설정 시 Summary 밴드 영역의 Cell 에 설정된 Expr 값을 갱신합니다.

값을 설정하지 않으면 전체 밴드 영역의 Cell 에 설정된 Expr 값을 모두 갱신합니다.
```

**Return**

없음

**Remark**

- Body 밴드 영역은 Row 별로 Expr 값이 각각 적용됩니다.


---

### removeEvent

> Components > Component > Grid > Method > removeEvent

**Description**

Grid 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**

```javascript
Grid.removeEvent( strEventID )
```

**Parameters**

```
Grid 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 삭제에 성공하면 true 를 반환합니다.

이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- Grid 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- Grid 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.


---

### removeEventHandler

> Components > Component > Grid > Method > removeEventHandler

**Description**

Grid 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
Grid.removeEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 제거할 이벤트의 ID를 설정합니다.
```

**Return**

핸들러 함수 제거에 성공하면 1 을 반환합니다.

핸들러 함수 제거에 실패하면 0 을 반환합니다.

**Remark**

- 핸들러 함수가 제거되면 핸들러 함수의 인덱스가 0 번부터 재조정됩니다.

- 이벤트에 등록된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하여야 합니다.


---

### removeEventHandlerLookup

> Components > Component > Grid > Method > removeEventHandlerLookup

**Description**

Grid 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
Grid.removeEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 제거할 이벤트의 ID를 설정합니다.
```

**Return**

핸들러 함수 제거에 성공하면 1 을 반환합니다.

핸들러 함수 제거에 실패하면 0 을 반환합니다.

**Remark**

- 핸들러 함수가 제거되면 핸들러 함수의 인덱스가 0 번부터 재조정됩니다.

- 이벤트에 등록된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하여야 합니다.


---

### resize

> Components > Component > Grid > Method > resize

**Description**

Grid 의 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
Grid.resize( vWidth, vHeight )
```

**Parameters**

```
Grid 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.
음수값을 설정할 수 없습니다.

* 값에 기준 컴포넌트를 포함하여 설정했을 때 :
pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Grid 의 width 가 결정됩니다.
비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Grid 의 width 가 결정됩니다.
```

**Return**

없음

**Remark**

- Grid 의 left 속성값이 null 이 아니면 resize() 메소드 실행 후 Grid 의 우측 위치가 변경됩니다.
  또한, 메소드 실행 후 right 속성값은 null 이 됩니다.

- Grid 의 left 속성값이 null 이면 resize() 메소드 실행 후 Grid 의 좌측 위치가 변경됩니다.
  또한, 메소드 실행 후 left 속성값은 null 로 유지됩니다.

- Grid 의 top 속성값이 null 이 아니면 resize() 메소드 실행 후 Grid 의 하단 위치가 변경됩니다.
  또한, 메소드 실행 후 bottom 속성값은 null 이 됩니다.

- Grid 의 top 속성값이 null 이면 resize() 메소드 실행 후 Grid 의 상단 위치가 변경됩니다.
  또한, 메소드 실행 후 top 속성값은 null 로 유지됩니다.

- 인수값에 기준 컴포넌트를 포함하면 Grid 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vWidth, vHeight 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 Grid 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 Grid 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.


---

### scrollBy

> Components > Component > Grid > Method > scrollBy

**Description**

Grid 에 표시된 스크롤을 현재 위치에서 인수로 전달된 값만큼 이동시키는 메소드입니다.

**Syntax**

```javascript
Grid.scrollBy( nHoffsetpos, nVoffsetpos )
```

**Parameters**

```
수평스크롤바의 스크롤을 현재위치에서 이동시킬 값을 숫자로 설정합니다.

음수로 설정 시 스크롤의 위치가 감소합니다.
양수로 설정 시 스크롤의 위치가 증가합니다.

값을 적용했을 때 수평스크롤바의 min 속성값보다 작을 경우 min 값으로 적용됩니다.
값을 적용했을 때 수평스크롤바의 max 속성값보다 클 경우 max 값으로 적용됩니다.
```

**Return**

없음

**Remark**

- 수평/수직 스크롤바의 스크롤 위치를 현재 위치에 관계없이 특정 위치로 이동하려면 scrollTo() 메소드를 사용하여야 합니다.

**See Also**

Grid.scrollTo


---

### scrollTo

> Components > Component > Grid > Method > scrollTo

**Description**

Grid 에 표시된 스크롤을 특정 위치로 이동시키는 메소드입니다.

**Syntax**

```javascript
Grid.scrollTo( nHpos, nVpos )
```

**Parameters**

```
수평스크롤바의 스크롤이 위치할 값을 숫자로 설정합니다.

설정값이 수평스크롤바의 min 속성값보다 작을 경우 min 값으로 적용됩니다.
설정값이 수평스크롤바의 max 속성값보다 클 경우 max 값으로 적용됩니다.
```

**Return**

없음

**Remark**

- 수평/수직 스크롤바의 스크롤 위치를 현재 위치에서 특정값만큼 이동하려면 scrollBy() 메소드를 사용하여야 합니다.

**See Also**

Grid.scrollBy


---

### selectArea

> Components > Component > Grid > Method > selectArea

**Description**

Grid 의 Body 밴드 영역에서 인수로 전달된 영역을 선택하는 메소드입니다.

**Syntax**

```javascript
Grid.selectArea( nStartRow, nStartCellIdx, nEndRow, nEndCellIdx )
```

**Parameters**

```
선택할 영역의 시작 Row  Index 를 숫자로 설정합니다.
```

**Return**

인수로 전달된 영역이 정상적으로 선택되면 true 를 반환합니다.

인수로 전달된 영역의 선택에 실패하면 false 를 반환합니다.

**Remark**

- selecttype 속성값이 "area" 또는 "multiarea" 인 경우만 수행되는 메소드입니다.

- selecttype 속성값이 "area" 일때 메소드를 수행하면 기존에 선택되어 있던 영역은 선택해제 됩니다.

- selecttype 속성값이 "multiarea" 일때 메소드를 수행하면 기존에 선택되어 있던 영역이 유지된 상태에서 선택영역이 추가됩니다.


---

### selectCell

> Components > Component > Grid > Method > selectCell

**Description**

Grid 의 Body 영역에서 인수로 전달된 위치의 Cell 을 선택 또는 선택해제 하는 메소드입니다.

**Syntax**

```javascript
Grid.selectCell( nRowIdx, nCellIdx [,bSelect] )
```

**Parameters**

```
Body 밴드 영역에서 선택상태를 변경 할 Cell 이 속한 Row 의 Row 인덱스를 설정합니다.
```

**Return**

메소드 수행 후 Cell 이 선택상태이면 "true" 를 반환합니다.
메소드 수행 후 Cell 이 선택해제 상태이면 "false" 를 반환합니다.

**Remark**

- selecttype 속성값이 cell 인 경우만 수행되는 메소드입니다.

- selectCell() 메소드가 수행되면 기존에 선택되어 있던 Cell 은 선택해제 됩니다.


---

### selectMultiRow

> Components > Component > Grid > Method > selectMultiRow

**Description**

Grid의 body 밴드 영역에서 파라미터로 전달된 영역에 해당하는 Row를 선택하는 메소드입니다.

**Syntax**

```javascript
Grid.selectMultiRow(nStrarRow, nEndRow)
```

**Parameters**

```
선택할 영역의 시작 Row index를 숫자로 설정합니다.
```

**Return**

파라미터로 전달된 영역이 정상적으로 선택되면 true를 반환합니다.

파라미터로 전달된 영역 선택에 실패하면 fasle를 반환합니다.

**Remark**

- selecttype 속성값을 "multirow"로 설정한 경우만 사용할 수 있습니다.


---

### selectRow

> Components > Component > Grid > Method > selectRow

**Description**

Grid 의 Body 영역에서 인수로 전달된 위치의 Row 를 선택 또는 선택해제 하는 메소드입니다.

**Syntax**

```javascript
Grid.selectRow( nRowIdx [,bSelect] )
```

**Parameters**

```
Body 영역에서 선택상태를 변경 할 Grid 의 Row  인덱스를 숫자로 설정합니다.
```

**Return**

Row 의 선택상태가 메소드 실행 전과 반대 상태로 변경되면 true 를 반환합니다.

Row 의 선택상태가 메소드 실행 전과 동일하면 false 를 반환합니다.

**Remark**

- selecttype 속성값이 "row" 또는 "multirow" 인 경우만 수행되는 메소드입니다.

- selecttype 속성값이 "row" 일 때 메소드 실행 결과로 다른 Row 가 선택되면 기존에 선택되어 있던 Row 는 선택해제 됩니다.


---

### sendToBack

> Components > Component > Grid > Method > sendToBack

**Description**

부모가 동일한 컴포넌트 중 Grid 이(가) 화면의 제일 뒤에 표시되게 합니다.

**Syntax**

```javascript
Grid.sendToBack()
```

**Parameters**

this.Grid.sendToBack();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToBack() 메소드는 Grid 을(를) 가장 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 뒤에 표시되게 됩니다


---

### sendToNext

> Components > Component > Grid > Method > sendToNext

**Description**

부모가 동일한 컴포넌트 중 Grid 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**

```javascript
Grid.sendToNext()
```

**Parameters**

this.Grid.sendToNext();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToNext() 메소드는 Grid 을(를) 한단계 먼저 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 뒤에 표시되게 됩니다.


---

### setBandProperty

> Components > Component > Grid > Method > setBandProperty

**Description**

Row 관련 밴드의 특정 속성값을 설정하는 메소드입니다.

**Syntax**

```javascript
Grid.setBandProperty( enumBand, strPropID, varValue )
```

**Parameters**

```
속성값을 설정하려는 밴드를 문자열로 설정합니다.

"head" 설정 시 Head 밴드의 속성값을 설정합니다.
"body" 설정 시 Body 밴드의 속성값을 설정합니다.
"summary" 설정 시 Summary 밴드의 속성값을 설정합니다.
```

**Return**

특정 밴드의 속성값 설정에 성공하면 "true"를 반환합니다.
특정 밴드의 속성값 설정에 실패하면 "false"를 반환합니다.

**Remark**

- setBandProperty() 메소드가 정상적으로 수행되면 Grid 에 변경내용이 즉시 반영됩니다.


---

### setBindDataset

> Components > Component > Grid > Method > setBindDataset

**Description**

Grid 의 binddataset 속성에 DataSet 오브젝트를 설정하는 메소드입니다.

**Syntax**

```javascript
Grid.setBindDataset( objDataset )
```

**Parameters**

```
binddataset 속성에 설정할 DataSet을 오브젝트 형식으로 설정합니다.
```

**Return**

없음


---

### setCellPos

> Components > Component > Grid > Method > setCellPos

**Description**

Grid 에 표시된 Cell 중 특정 Cell 을 선택하는 메소드입니다.

**Syntax**

```javascript
Grid.setCellPos( nCellIdx [, nRowIdx] )
```

**Parameters**

```
선택하려는 Cell 의 Cell 인덱스를 설정합니다.

Body 밴드의 Cell 을 대상으로 합니다.
```

**Return**

특정 Cell 선택에 성공하면 true 를 반환합니다.

특정 Cell 선택에 실패하면 false 를 반환합니다.

**Remark**

- Cell 의 선택위치가 변경된 후 oncellposchanged 이벤트가 발생합니다.
   oncellposchanged 이벤트 발생 후 selecttype 속성값에 따라 onselectchanged 이벤트가 발생할 수 있습니다.

- Cell 인덱스는 Grid 의 포맷을 기준으로 설정되며 DataSet 의 데이터 갯수와는 관계없습니다.
   Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 포맷으로 구성되어 있고, Row 는 여러개의 SubRow 를 가질 수 있습니다.
   SubRow 를 갖는 밴드의 Cell 인덱스는 "SubRow 인덱스 * Column 갯수 + Cell 의 col 속성값" 으로 설정됩니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
   병합(Merge)된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 0 부터 시작합니다.


---

### setCellProperty

> Components > Component > Grid > Method > setCellProperty

**Description**

Cell 의 특정 속성값을 설정하는 메소드입니다.

**Syntax**

```javascript
Grid.setCellProperty( enumBand, nCellIdx, strPropID, varValue )
```

**Parameters**

```
속성값을 설정하려는 Cell 이 속한 밴드를 문자열로 설정합니다.

"head" 설정 시 Head 밴드에 속한 Cell 의 속성값을 설정합니다.
"body" 설정 시 Body 밴드에 속한 Cell 의 속성값을 설정합니다.
"summary" 설정 시 Summary 밴드에 속한 Cell 의 속성값을 설정합니다.
```

**Return**

Cell 의 특정 속성값 설정에 성공하면 "true"를 반환합니다.
Cell 의 특정 속성값 설정에 실패하면 "false"를 반환합니다.

**Remark**

- setCellProperty() 메소드가 정상적으로 수행되면 Grid 에 변경내용이 즉시 반영됩니다.

- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.
  Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge)된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.


---

### setEditingValue

> Components > Component > Grid > Method > setEditingValue

**Description**

Cell 이 편집모드일 때 표시되는 컨트롤 또는 서브컨트롤의 value 속성을 설정하는 메소드입니다.

**Syntax**

```javascript
Grid.setEditingValue( strValue )
```

**Parameters**

```
Cell 에 표시된 편집모드용 컨트롤 또는 서브컨트롤의 value 속성값을 문자열로 설정합니다.

Cell 의 edittype 속성값이 "combo" 이면 combodatacol 속성에 적용된 데이터값을 설정합니다.
Cell 의 edittype 속성값이 "date", "mask" 이면 마스크 문자를 제외한 원본값을 설정합니다.
```

**Return**

없음

**Remark**

- 편집모드용 컨트롤이 화면에 표시되어 있고, 편집상태일 때만 메소드가 정상적으로 동작합니다.

- Cell 의 edittype 속성값이 "button", "checkbox", "tree" 인 경우 메소드를 사용할 수 없습니다.

- Cell 의 edittype 속성값이 "combo", "date" 이면 편집모드용 컨트롤로 Combo, Calendar 컨트롤이 표시됩니다.
   이 때, Combo, Calendar 컨트롤은 입력중인 값이 하위컨트롤인 comboedit, calendaredit 의 value 속성에 반영됩니다.
   Combo, Calendar 컨트롤의 value 속성엔 하위컨트롤에 입력한 값을 확정하여야 반영됩니다.
   setEditingValue() 메소드는 하위컨트롤인 comboeidt, calendaredit 의 value 속성에 값을 설정합니다.
   따라서, setEditingValue() 메소드 실행 후 getEditValue() 메소드와 getEditingValue() 메소드의 반환값이 달라질 수 있습니다.


---

### setEditSelect

> Components > Component > Grid > Method > setEditSelect

**Description**

Cell 이 편집상태일 때 편집기에 표시되는 텍스트를 인수로 전달된 영역만큼 선택하는 메소드입니다.

**Syntax**

```javascript
Grid.setEditSelect( nBegin [,nEnd] )
```

**Parameters**

```
선택할 영역의 시작 인덱스를 숫자로 설정합니다.

인덱스는 0 부터 시작하며 "0 ~ 텍스트길이"까지 설정할 수 있습니다.
-1 을 설정하면 캐럿이 0 번 인덱스에 위치하고 영역을 선택하지 않습니다.
```

**Return**

텍스트의 영역선택에 성공하면 true 를 반환합니다.

텍스트의 영역선택에 실패하면 false 를 반환합니다.

**Remark**

- 선택된 Cell 이 포커스 되어 편집모드용 컨트롤이 표시되어 있을 때 메소드가 정상적으로 실행됩니다.


---

### setEditValue

> Components > Component > Grid > Method > setEditValue

**Description**

Cell 이 편집모드일 때 표시되는 컨트롤의 value 속성을 설정하는 메소드입니다.

**Syntax**

```javascript
Grid.setEditValue( strValue )
```

**Parameters**

```
Cell 에 표시된 편집모드용 컨트롤의 value 속성값을 문자열로 설정합니다.

Cell 의 edittype 속성값이 "combo" 이면 combocodecol 속성에 적용된 코드값을 설정합니다.
Cell 의 edittype 속성값이 "date", "mask" 이면 마스크 문자를 제외한 원본값을 설정합니다.
```

**Return**

없음

**Remark**

- 편집모드용 컨트롤이 화면에 표시되어 있고, 편집상태일 때만 메소드가 정상적으로 동작합니다.

- Cell 의 edittype 속성값이 "button", "checkbox", "tree" 인 경우 메소드를 사용할 수 없습니다.

- Cell 의 edittype 속성값이 "combo", "date" 이면 편집모드용 컨트롤로 Combo, Calendar 컨트롤이 표시됩니다.
   이 때, Combo, Calendar 컨트롤은 입력중인 값이 하위컨트롤인 comboedit, calendaredit 의 value 속성에 반영됩니다.
   Combo, Calendar 컨트롤의 value 속성엔 하위컨트롤에 입력한 값을 확정하여야 반영됩니다.
   setEditValue() 메소드는 Combo, Calendar 컨트롤의 value 속성에 값을 설정하며, 하위컨트롤인 comboeidt, calendaredit 의 value 속성에도 함께 반영됩니다.

**Example**


**See Also**

Grid.getEditingTextGrid.getEditingValueGrid.getEditTextGrid.getEditValueGrid.setEditingValue


---

### setEventHandler

> Components > Component > Grid > Method > setEventHandler

**Description**

Grid 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
Grid.setEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 변경할 이벤트의 ID를 설정합니다.
```

**Return**

첫번째 핸들러 함수 변경에 성공하면 0 을 반환합니다.

첫번째 핸들러 함수 변경에 실패하면 -1 을 반환합니다.

**Remark**

- 인덱스가 0 번인 핸들러 함수를 새로운 함수로 대체합니다.

- 인덱스가 0 번인 핸들러 함수가 없다면 0 번 인덱스에 새로운 함수를 핸들러 함수로 추가합니다.


---

### setEventHandlerLookup

> Components > Component > Grid > Method > setEventHandlerLookup

**Description**

Grid 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
Grid.setEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 변경할 이벤트의 ID를 설정합니다.
```

**Return**

첫번째 핸들러 함수 변경에 성공하면 0 을 반환합니다.

첫번째 핸들러 함수 변경에 실패하면 -1 을 반환합니다.

**Remark**

- 인덱스가 0 번인 핸들러 함수를 검색된 함수로 대체합니다.

- 인덱스가 0 번인 핸들러 함수가 없다면 0 번 인덱스에 검색된 함수를 핸들러 함수로 추가합니다.


---

### setFixedColumn

> Components > Component > Grid > Method > setFixedColumn

**Description**

Grid 컴포넌트에서 스크롤 시, 인수로 전달된 Column이 스크롤되지 않도록 해당 Column을 고정하는 메서드입니다.

**Syntax**

```javascript
Grid.setFixedColumn( nColumnindex[, bKeepscroll] );
```

**Parameters**

```
스크롤되지 않고 고정되어 표시될 Column의 인덱스를 설정합니다.
설정한 Column 인덱스의 왼쪽에 위치한 모든 Column이 고정되어 표시됩니다.

-1로 설정하면 기존에 설정된 Column 고정이 해제됩니다.
```

**Return**

없음

**Remark**

- 메서드 실행 시 고정된 Column의 band 속성값은 "left"로 변경됩니다.

- head 또는 body 밴드에서 2개 이상의 Column을 병합한 경우, 병합된 영역의 마지막 Column 인덱스를 설정한 경우에만 동작합니다.
  예를 들어 인덱스 값이 0, 1인 Column을 병합한 경우 nColumnindex 값을 0으로 설정하면 Column 고정이 적용되지 않습니다.


---

### setFixedRow

> Components > Component > Grid > Method > setFixedRow

**Description**

Grid 에서 스크롤 시 인수로 전달된 Row 까지 스크롤 되지 않고 행고정 시키는 메소드입니다.

**Syntax**

```javascript
Grid.setFixedRow( nRowIndex );
```

**Parameters**

```
Body 밴드영역에서 스크롤 되지않고 고정되어 표시될 Row 의 인덱스를 설정합니다.

"-1" 설정 시 기존에 설정된 행고정이 해제됩니다.
```

**Return**

없음

**Remark**

- nRowIndex 에 해당하는 Row 가 Grid 에 표시되고 있을 때만 메소드가 수행됩니다.

- 스크롤이 이동 되어 있을 경우 이동된 상태로 고정됩니다.

- Grid 가 트리 형태일 경우는 메소드가 수행되지 않습니다.


---

### setFocus

> Components > Component > Grid > Method > setFocus

**Description**

Grid 에 포커스를 설정하는 메서드입니다.

**Syntax**

```javascript
Grid.setFocus( [bMoveScroll] )
```

**Parameters**

```
부모 컴포넌트에 스크롤이 있을 경우, Grid 기준으로 스크롤을 이동할지 여부를 설정합니다.

true: Grid 이(가) 화면에 표시되도록 스크롤을 이동합니다.
false: Grid 위치와 관계없이 스크롤을 이동하지 않습니다.

값을 지정하지 않으면 기본값은 true입니다.
```

**Return**

Grid 이(가) 포커스를 얻기 전에 포커스를 가지고 있던 컴포넌트를 반환합니다.
이전에 포커스를 가진 컴포넌트가 없거나 메소드 실행에 실패한 경우에는 null을 반환합니다.

**Remark**

- enableaccessibility 속성값과 관계없이 전달된 파라미터값을 기준으로 동작합니다.


---

### setFormat

> Components > Component > Grid > Method > setFormat

**Description**

Grid 에 여러개의 포맷이 정의되어 있을 때 화면에 표시할 포맷을 설정하는 메소드입니다.

**Syntax**

```javascript
Grid.setFormat( strFormatID )
```

**Parameters**

```
Grid 에 표시할 포맷의 ID 를 문자열로 설정합니다.
```

**Return**

화면에 표시되는 포맷 설정에 성공했을 경우 "true"를 반환합니다.
화면에 표시되는 포맷 설정에 실패했을 경우 "false"를 반환합니다.

**Remark**

- 하나의 Grid 에서 데이터를 여러 형식으로 표현하고자 할 때 사용합니다.
   포맷별로 Head, Body, Summary, Column 을 다양하게 구성할 수 있습니다.
   넥사크로 스튜디오의 Grid Contents Editor 를 통해 여러개의 포맷을 추가할 수 있습니다.

- Grid 의 formatid 속성값을 변경해도 동일한 결과를 얻을 수 있습니다.


---

### setFormatColProperty

> Components > Component > Grid > Method > setFormatColProperty

**Description**

Grid 에 표시되고 있는 포맷에 정의된 Column 의 속성값을 설정하는 메소드입니다.

**Syntax**

```javascript
Grid.setFormatColProperty( nColIdx, strPropID, varValue )
```

**Parameters**

```
현재 포맷에 정의된 전체 Column 을 기준으로 속성값을 설정할 Column 의 인덱스를 설정합니다.

Column 인덱스는 "0" 부터 시작합니다.
```

**Return**

Column 의 속성값 설정에 성공하면 "true"를 반환합니다.
Column 의 속성값 설정에 실패하면 "false"를 반환합니다.

**Remark**

- setFormatColProperty() 메소드가 정상적으로 수행되면 Grid 에 변경내용이 즉시 반영됩니다.


---

### setFormatRowProperty

> Components > Component > Grid > Method > setFormatRowProperty

**Description**

Grid 에 표시되고 있는 포맷에 정의된 Row 의 속성값을 설정하는 메소드입니다

**Syntax**

```javascript
Grid.setFormatRowProperty( nRowIdx, strPropID, varValue )
```

**Parameters**

```
현재 포맷에 정의된 전체 Row 를 기준으로 속성값을 설정할 Row의 인덱스 값을 설정합니다.

Head, Body, Summary 밴드에 정의된 전체 Row를 기준으로 인덱스를 설정합니다.
Row 에 Sub Row 가 정의되어 있다면 Sub Row 도 인덱스에 포함됩니다.
Row 인덱스는 "0"부터 시작합니다.
```

**Return**

Row 의 속성값 설정에 성공하면 "true"를 반환합니다.
Row 의 속성값 설정에 실패하면 "false"를 반환합니다.

**Remark**

- setFormatRowProperty() 메소드가 정상적으로 수행되면 Grid 에 변경내용이 즉시 반영됩니다.


---

### setHeadValue

> Components > Component > Grid > Method > setHeadValue

**Description**

Grid 컴포넌트의 Head 밴드 영역 내 지정한 인덱스에 해당하는 Cell 내부에서 관리하는 HeadValue 값을 설정하는 메서드입니다.

**Syntax**

```javascript
Grid.setHeadValue( nCellIdx, varValue )
```

**Parameters**

```
HeadValue 값을 설정하려는 Head 밴드 영역의 Cell 인덱스를 설정합니다.
```

**Return**

없음

**Remark**

- 지정한 인덱스에 해당하는 Cell의 edittype 속성값이 "none"이 아닌 경우에만 사용할 수 있습니다.


---

### setOffsetBottom

> Components > Component > Grid > Method > setOffsetBottom

**Description**

부모 컴포넌트의 Top 위치를 기준으로 Grid 의 bottom 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Grid.setOffsetBottom( nBottom );
```

**Parameters**

```
부모 컴포넌트의 Top 위치를 기준으로 Grid 의 bottom 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 Grid 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Grid 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Grid 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Grid 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.


---

### setOffsetHeight

> Components > Component > Grid > Method > setOffsetHeight

**Description**

Grid 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Grid.setOffsetHeight( nHeight );
```

**Parameters**

```
Grid 의 높이를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 Grid 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Grid 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Grid 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Grid 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.


---

### setOffsetLeft

> Components > Component > Grid > Method > setOffsetLeft

**Description**

부모 컴포넌트의 Left 위치를 기준으로 Grid 의 left 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Grid.setOffsetLeft( nLeft );
```

**Parameters**

```
부모 컴포넌트의 Left 위치를 기준으로 Grid 의 left 값을 픽셀단위의 숫자로 설정합니다
```

**Return**

없음

**Remark**

- 메소드 실행 전 Grid 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Grid 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Grid 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, right 속성이 설정됩니다.
   > Grid 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.


---

### setOffsetRight

> Components > Component > Grid > Method > setOffsetRight

**Description**

부모 컴포넌트의 Left 위치를 기준으로 Grid 의 right 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Grid.setOffsetRight( nRight );
```

**Parameters**

```
부모 컴포넌트의 Left 위치를 기준으로 Grid 의 right 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 Grid 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Grid 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Grid 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Grid 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.


---

### setOffsetTop

> Components > Component > Grid > Method > setOffsetTop

**Description**

부모 컴포넌트의 Top 위치를 기준으로 Grid 의 top 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Grid.setOffsetTop( nTop );
```

**Parameters**

```
부모 컴포넌트의 Top 위치를 기준으로 Grid 의 top 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 Grid 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Grid 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Grid 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, bottom 속성이 설정됩니다.
   > Grid 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.


---

### setOffsetWidth

> Components > Component > Grid > Method > setOffsetWidth

**Description**

Grid 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Grid.setOffsetWidth( nWidth );
```

**Parameters**

```
Grid 의 너비를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 Grid 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Grid 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Grid 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Grid 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.


---

### setRealColSize

> Components > Component > Grid > Method > setRealColSize

**Description**

Grid 에 표시되고 있는 포맷에서 특정 Column 의 너비를 설정하는 메소드입니다.

**Syntax**

```javascript
Grid.setRealColSize( enumBand, nColIndex, nSize [, bBandIndex] )
```

**Parameters**

```
현재 Grid 포맷에서 너비를 변경 할 Column 이 속한 밴드를 문자열로 설정합니다.

"left" 설정 시 Left 밴드 영역의 Column 이 적용됩니다.
"body" 설정 시 Body 밴드 영역의 Column 이 적용됩니다.
"right" 설정 시 Right 밴드 영역의 Column 이 적용됩니다.
```

**Return**

특정 Column 의 너비 설정에 성공하면 "true"를 반환합니다.
특정 Column 의 너비 설정에 실패하면 "false"를 반환합니다.

**Remark**

- getRealColSize() 메소드는 동적으로 변경된 값을 반영하여 Column 너비를 반환합니다.
  동적으로 변경된 값이 반영되지 않은 디자인 시 설정한 Column 너비는 getFormatColSize() 메소드를 사용하여야 합니다.


---

### setRealRowSize

> Components > Component > Grid > Method > setRealRowSize

**Description**

Grid 에 표시된 데이터 Row 에서 특정 Row 또는 SubRow 의 높이를 설정하는 메소드입니다.

**Syntax**

```javascript
Grid.setRealRowSize( nRowIdx, nSize [, nSubRowIdx [, bBody]] )
```

**Parameters**

```
높이를 설정 할 Row 의 인덱스 또는 밴드영역을 설정합니다.

"0~Row 갯수" 설정 시 bBody 값이 true 이면 Body 밴드영역의 Row 인덱스로 적용됩니다.
"0~Row 갯수" 설정 시 bBody 값이 false 이면 밴드영역에 관계 없이 전체 Row 의 인덱스로 적용됩니다.
-1 설정 시 bBody 값이 true 이면 Head 밴드영역으로 적용됩니다.
-2 설정 시 bBody 값이 true 이면 Summary 밴드영역으로 적용됩니다.

Row 인덱스는 0 부터 시작합니다.
```

**Return**

특정 Row 또는 SubRow 의 높이 설정에 성공하면 true 를 반환합니다.

특정 Row 또는 SubRow 의 높이 설정에 실패하거나 동일한 높이를 설정하면 false 를 반환합니다.

**Remark**

- nRowIdx 값에 해당하는 Row 에 SubRow 가 없는 경우 nSubRowIdx 값을 생략하거나 0 또는 -1 을 설정하여야 합니다.

- extendsizetype 속성값이 "none" 이면 Body 밴드의 특정 Row 또는 SubRow 높이 설정 시 모든 Row 에 동일하게 적용됩니다.

- setRealRowSize() 메소드는 Grid 에 표시된 데이터 Row 의 높이를 변경합니다.
   따라서 Grid 에 표시된 데이터 Row 또는 SubRow 의 높이를 각각 설정할 수 있습니다.
   Grid 에 정의된 포맷을 변경하려면 setFormatRowProperty() 메소드를 사용하여야 합니다.

**See Also**

Grid.setFormatRowProperty


---

### setSubCellProperty

> Components > Component > Grid > Method > setSubCellProperty

**Description**

Cell 이 Sub Cell 구조일 때 특정 Sub Cell 의 속성값을 설정하는 메소드입니다.

**Syntax**

```javascript
Grid.setSubCellProperty( enumBand, nCelIdx, nSubCellIdx, strPropID, varValue )
```

**Parameters**

```
nCellIdx 에 해당하는 Cell 이 속한 밴드를 문자열로 설정합니다.

"head" 설정 시 Head 밴드 영역에 속한 Cell 의 인덱스로 처리됩니다.
"body" 설정 시 Body 밴드 영역에 속한 Cell 의 인덱스로 처리됩니다.
"summary" 설정 시 Summary 밴드 영역에 속한 Cell 의 인덱스로 처리됩니다.
```

**Return**

특정 Sub Cell 의 속성값 설정에 성공하면 "true"를 반환합니다.
특정 Sub Cell 의 속성값 설정에 실패하면 "false"를 반환합니다.

**Remark**

- setSubCellProperty() 메소드는 Sub Cell 이 존재할 경우에만 사용할 수 있습니다.

- setSubCellProperty() 메소드가 정상적으로 수행되면 Grid 에 변경내용이 즉시 반영됩니다.

- Sub Cell 은 넥사크로 스튜디오에서 Grid Contents Editor 를 사용해 Cell 을 병합(Merge)한 후에 Sub Cell 속성을 선택하면 생성할 수 있습니다.
  Sub Cell 은 Cell 인덱스는 공유 하지만 병합된 Cell 의 각 Cell 은 속성을 유지하고 있습니다.
  Merge Cell 은 병합 후 전체를 하나의 Cell 로 처리합니다.

- Grid 의 Head, Body, Summary 밴드는 각각 한개의 Row 로 구성되어 있고, 각 Row 는 여러개의 Sub Row 를 가질 수 있습니다.
  DataSet 의 데이터 갯수와는 관계없습니다.

- 각 밴드에 정의된 Cell 은 좌상단부터 우하단까지 순차적으로 Cell 인덱스를 갖습니다.
  병합(Merge) 된 Cell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 갖습니다.

- Sub Row 를 갖는 밴드의 Cell 인덱스는 "Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값" 이 됩니다.
  병합(Merge) 된 Cell 갯수만큼 인덱스가 감소합니다.

- Cell 의 col 속성값을 수정하지 않았다면 Cell 인덱스는 "0"부터 시작합니다.

- Sub Cell 의 인덱스는 병합된 Cell 내에 정의된 순서대로 "0"부터 시작하는 인덱스를 갖습니다.


---

### setTreeStatus

> Components > Component > Grid > Method > setTreeStatus

**Description**

Grid 가 트리 형식일 때 특정 Row 의 트리 상태를 설정하는 메소드입니다.

**Syntax**

```javascript
Grid.setTreeStatus( nRowIndex, bTreeStatus )
```

**Parameters**

```
트리 상태를 설정 할 Row 의 인덱스를 현재 화면에 표시되는 Grid 기준으로 설정합니다.
```

**Return**

특정 Row 의 트리 상태 설정에 성공하면 "true"를 반환합니다.

특정 Row 의 트리 상태 설정에 실패하면 "false"를 반환합니다.
Grid 가 트리형식이 아니거나 nRowIndex 에 해당하는 Row 가 없는 경우 "false"를 반환합니다.

**Remark**

- nRowIndex 는 Grid 에 표시되는 Row 를 기준(Collapse 된 Row는 인덱스가 없음)으로 인덱스 값을 설정합니다.
  따라서, oncellclick 이벤트에서 e.row 를 setTreeStatus() 메소드에 사용할 수 없으므로 주의하셔야 합니다.

- Grid 트리 Cell 의 초기값은 Cell 의 treestate 속성에 바인딩된 DataSet 의 값으로 설정됩니다.
  이 후, 사용자의 입력에 의해 변경된 트리 상태값은 바인딩된 DataSet 에 반영되지 않고 그리드 내부에서 별도로 유지됩니다.
  따라서 특정 Row 의 트리 상태를 얻거나 설정하고자 할 때는 getTreeStatus(), setTreeStatus() 메소드를 사용하여야 합니다.

- setTreeStatus() 메소드가 정상적으로 수행되면 cantreestatuschange 이벤트와 ontreestatuschanged 이벤트가 발생합니다.


---

### show

> Components > Component > Grid > Method > show

**Description**

스크립트로 동적 생성한 Grid 을(를) 화면에 표시하는 메소드입니다.

**Syntax**

```javascript
Grid.show()
```

**Parameters**

this.Grid00.show();

**Return**

없음

**Remark**

- show() 메소드는 컴포넌트가 폼 또는 컨테이너 컴포넌트의 자식 컴포넌트로 등록된 상태에서 사용이 가능합니다.
  자식 컴포넌트로 등록된 상태가 아닌 경우에는 오동작이 발생할 수 있습니다.

- 컴포넌트를 컨테이너에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildGrid.destroyGrid.init


---

### showEditor

> Components > Component > Grid > Method > showEditor

**Description**

현재 선택된 Cell 이 편집 가능할 경우에 편집기 표시 여부를 설정하는 메소드입니다.

**Syntax**

```javascript
Grid.showEditor( bShow )
```

**Parameters**

```
현재 선택된 Cell 에 편집기를 표시할지 설정합니다.

true 설정 시 현재 선택된 Cell 이 편집상태가 되며 편집기가 표시됩니다.
false 설정 시 현재 선택된 Cell 의 편집상태가 해제되고 편집기가 표시되지 않습니다.
```

**Return**

메소드가 정상적으로 수행되면 true 를 반환합니다.
메소드가 정상적으로 수행되지 못하면 false 를 반환합니다.

**Remark**

- 선택된 Cell 의 edittype 속성값에 따라 Combo 아이템 리스트, 팝업달력, 체크박스, 에디트 등이 표시됩니다.

- Grid 의 readonly 속성값이 true 이거나 편집이 불가능한 Cell 을 선택했을 경우 편집기가 표시되지 않습니다.

- Grid 의 autoenter 속성값이 "select" 이면 Cell 을 선택 할때 자동으로 편집기가 표시됩니다.


◆ Mobile 제약

- iOS/iPadOS 에서 edittype 속성값이 "date" 이고, cellcalendarpopuptype 또는 calendarpopuptype 속성값이 "system" 일 때
   showEditor 메소드로 Cell 을 편집상태로 하면 팝업달력이 자동으로 표시되므로 사용에 주의하여야 합니다.


---

### showHeadEditor

> Components > Component > Grid > Method > showHeadEditor

**Description**

Head 밴드 영역 내에서 지정한 인덱스의 Cell이 편집 가능할 경우, HeadValue를 편집할 수 있는 컨트롤의 표시 여부를 설정하는 메서드입니다.

**Syntax**

```javascript
Grid.showHeadEditor(nCellIdx, bShow);
```

**Parameters**

```
편집상태를 지정할 Cell의 인덱스를 설정합니다.
```

**Return**

메서드가 정상적으로 수행되면 true를 반환합니다.
메서드가 정상적으로 수행되지 못하면 false를 반환합니다.


---

### splitCell

> Components > Component > Grid > Method > splitCell

**Description**

mergeCell() 메소드로 병합된 Cell 을 분할하는 메소드입니다.

**Syntax**

```javascript
Grid.splitCell( nStartCol, nEndCol, nStartRow, nEndRow )
```

**Parameters**

```
병합 Cell 내에서 왼쪽에 위치한 Cell 의 Column 인덱스를 숫자로 설정합니다.

Grid 의 전체 Column 을 기준으로 Column 인덱스를 설정하여야 합니다.
```

**Return**

메소드가 정상적으로 수행되면 true 를 반환합니다.

메소드가 정상적으로 수행되지 않으면 false 를 반환합니다.

**Remark**

- mergeCell() 메소드로 병합된 Cell 을 원래대로 분할할 때 사용되는 메소드입니다.
   mergeContentsCell() 메소드로 병합된 Cell 은 splitContentsCell() 메소드를 사용하여야 합니다.

- 인수로 전달된 영역이 병합된 Cell 과 일치하지 않아도 Cell 을 분할합니다.
   즉, 인수로 전달된 영역에 병합된 Cell 의 일부만 속해 있어도 병합 Cell 을 분할합니다.


---

### splitContentsCell

> Components > Component > Grid > Method > splitContentsCell

**Description**

Grid 에 표시되어 있는 포맷의 Cell 중 병합(Merge) 된 Cell 을 분할하는 메소드입니다.

**Syntax**

```javascript
Grid.splitContentsCell( enumBand, nStartSubRow, nStartCol, nEndSubRow, nEndCol, bMakeSubCell )
```

**Parameters**

```
분할 하려는 Cell 이 속한 밴드 영역을 문자열로 설정합니다.

"head" 설정 시 Head 밴드 영역의 Cell 을 분할 합니다.
"body" 설정 시 Body 밴드 밴드 영역의 Cell 을 분할 합니다.
"summary" 설정 시 Summary 밴드 영역의 Cell 을 분할 합니다.
```

**Return**

병합(Merge) Cell 이 분할되어 생성된 Cell 의 갯수를 반환합니다.
메소드가 정상적으로 수행되지 않은 경우 "-1"을 반환합니다.

**Remark**

- 주어진 영역 내에 병합된 Cell 이 여러 개가 있는 경우 모두 분할 처리됩니다.


---

### updateToDataset

> Components > Component > Grid > Method > updateToDataset

**Description**

Grid 에서 편집중인 값을 바인드 된 DataSet 에 즉시 반영시키는 메소드입니다.

**Syntax**

```javascript
Grid.updateToDataset()
```

**Parameters**

var bSucc = this.Grid00.updateToDataset();

**Return**

Grid 에서 편집중인 값을 바인드 된 DataSet 에 반영하면 "true" 를 반환합니다.

Grid 에서 편집중인 값을 바인드 된 DataSet 에 반영하지 못하거나 Grid 가 편집중이 아니면 "false" 를 반환합니다.

**Remark**

- Grid 가 DataSet 에 바인딩 되어 있어야 합니다.

- Grid 에서 편집중인 값이 바인딩 되어있는 Dataset 의 값과 같으면 Dataset 에 값이 반영되지 않고 "false"를 반환합니다.


---

### 이벤트 (Events)

### cantreestatuschange

> Components > Component > Grid > Event > cantreestatuschange

**Description**

Grid 의 트리 Cell 에서 트리 상태가 변경될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
cantreestatuschange(obj:nexacro.Grid,e:nexacro.GridTreeStatusEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 "true"를 반환하면 Grid 의 트리 상태가 변경됩니다.
이벤트에서 리턴값으로 "false"를 반환하면 Grid 의 트리 상태를 변경하지 않습니다.

이벤트에서 리턴값을 생략하면 "true"로 적용됩니다.

**Remark**

- Grid 의 트리 Cell 에서 Collapse/Expand 버튼을 클릭하거나 setTreeStatus() 메소드로 트리 상태를 변경했을 때 이벤트가 발생합니다.

- 단말(Leaf) 상태인 Row 에서는 cantreestatuschange 이벤트가 발생하지 않습니다.

- 이벤트에서 리턴값으로 "true" 를 반환하면 ontreestatuschanged 이벤트가 발생합니다.


---

### oncellclick

> Components > Component > Grid > Event > oncellclick

**Description**

Grid 에서 Body 영역의 Cell 을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
oncellclick(obj:nexacro.Grid,e:nexacro.GridClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Head,Summary 영역을 클릭하거나, Grid 의 fillareatype 속성에 의해 채워진 영역을 클릭한 경우에는 이벤트가 발생되지 않습니다.

- Cell 에 편집모드용 컨트롤이 표시된 상태에서 클릭한 경우는 이벤트가 발생되지 않습니다.

- 마우스 클릭에 의해 oncellclick 이벤트가 발생하려면 Cell 내에서 LButtonDown 과 LButtonUp 액션이 연속으로 발생하여야 합니다.
   이 때, LButtonDown 액션과 LButtonUp 액션 사이에 발생하는 이벤트(ex-onselectchanged)에서 transaction(), alert() 과 같은 메소드 실행 시 LButtonDown 액션정보가 사라지게 되어 oncellclick 이벤트가 정상적으로 발생하지 않습니다.
   위와 같은 문제를 해결하려면 selectchangedtype 속성으로 LButtonDown 액션과 LButtonUp 액션 사이에 발생하는 이벤트의 순서를 변경하거나 LButtonUp 액션에 의해 발생하는 onlbuttonup 이벤트에서 transaction(), alert() 과 같은 메소드를 실행하여야 합니다.


---

### oncelldblclick

> Components > Component > Grid > Event > oncelldblclick

**Description**

Grid 에서 Body 영역의 Cell 을 더블클릭 했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
oncelldblclick(obj:nexacro.Grid,e:nexacro.GridClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Head, Summary 영역을 클릭하거나, Grid 의 fillareatype 속성에 의해 채워진 영역을 클릭한 경우에는 이벤트가 발생되지 않습니다.


◆ web runtime environment 제약

- 편집이 가능한 Cell 일 때 더블클릭 과정에서 편집모드용 컨트롤이 표시될 수 있습니다.
   이런 경우, Cell 에서 편집모드용 컨트롤로 클릭대상이 변경되어 브라우저에 따라 이벤트가 발생하지 않을 수 있습니다.


---

### oncellimeaction

> Components > Component > Grid > Event > oncellimeaction

**Description**

사용자 작업 버튼 또는 ENTER 키 입력 시 발생하는 이벤트입니다.

**Syntax**

```javascript
oncellimeaction(obj:nexacro.Grid,e:nexacro.GridKeyEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

없음

**Default Action**

editimeaction 또는 maskeditimeaction 속성값이 "next"인 경우 TAB 키 입력과 같은 동작을 처리합니다.
editimeaction 또는 maskeditimeaction 속성값이 "previous"인 경우에는 SHIFT+TAB 키 입력과 같은 동작을 처리합니다.


---

### oncellposchanged

> Components > Component > Grid > Event > oncellposchanged

**Description**

Grid 에서 Cell 의 선택위치가 변경된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
oncellposchanged(obj:nexacro.Grid,e:nexacro.GridSelectEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- selecttype 속성값과 관계없이 Cell 의 선택위치가 변경된 후 발생하는 이벤트입니다.

- Grid 에서 마우스나 키보드를 사용해 Cell 의 선택위치가 변경된 후 발생합니다.
   또는 스크립트에서 setCellPos() 와 같이 선택위치를 변경하는 메소드에 의해 Cell 의 선택위치가 변경된 후 발생합니다.

- Grid 에서 Multi 나 Area 선택이 가능한 경우는 바인딩된 DataSet 의 선택영역과 무관하게 Grid 자체의 선택영역을 관리합니다.
   따라서, 바인딩된 DataSet 의 선택이 변경되어도 이벤트가 발생하지 않습니다.

- oncellposchanged 이벤트 발생 후 selecttype 속성값에 따라 onselectchanged 이벤트가 발생할 수 있습니다.


---

### onclick

> Components > Component > Grid > Event > onclick

**Description**

포맷이 정의되지 않은 Grid 영역에서 마우스 왼쪽버튼을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onclick(obj:nexacro.Grid,e:nexacro.GridClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Grid 에 포맷이 정의되지 않았을 때 Grid 영역에서 마우스의 lbuttondown 액션과 lbuttonup 액션이 발생되어야 합니다.

- Grid 에 포맷이 정의되어 있을 때는 테두리(Border)영역을 클릭 시 onclick 이벤트가 발생합니다.

- 포커스를 갖는 컴포넌트는 포커스 된 상태에서 스페이스키나 엔터키를 입력하면 onclick 이벤트가 발생합니다.
   이 때, 이벤트정보 오브젝트(e 오브젝트)의 좌표관련 속성값은 모두 -1 이 됩니다. (e.clientx 등)


---

### oncloseup

> Components > Component > Grid > Event > oncloseup

**Description**

Grid 에 표시되었던 Combo 아이템 리스트 또는 팝업달력이 닫힐 때 발생하는 이벤트입니다.

**Syntax**

```javascript
oncloseup(obj:nexacro.Grid,e:nexacro.GridEditEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- autoupdatetype 속성값이 "none" 일 경우 DataSet 에 선택된 값이 반영되기 전에 oncloseup 이벤트가 발생합니다.


---

### oncolresized

> Components > Component > Grid > Event > oncolresized

**Description**

Grid 의 Column 너비가 변경된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
oncolresized(obj:nexacro.Grid,e:nexacro.GridSizeChangedEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### oncontextmenu

> Components > Component > Grid > Event > oncontextmenu

**Description**

Grid 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다.

**Syntax**

```javascript
oncontextmenu(obj:nexacro.Grid,e:nexacro.GridContextMenuEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 모바일 환경에서는 터치를 일정시간 유지하면 oncontextmenu 이벤트가 발생합니다.


◆ web runtime environment 제약

- web runtime environment 에서 기본팝업메뉴(ContextMenu)는 사용하는 브라우저에 따라 다르게 보입니다.

**Default Action**

- oncontextmenu 이벤트 종료 후 기본팝업메뉴가 표시됩니다.
   기본팝업메뉴는 Grid 의 Cell 이 편집상태인 경우만 표시됩니다.
   Environment 의 usecontextmenu 속성값에 따라 기본팝업메뉴가 표시되지 않을 수 있습니다.
   iOS 환경은 기본팝업메뉴의 표시를 제어할 수 없습니다.


---

### ondevicebuttonup

> Components > Component > Grid > Event > ondevicebuttonup

**Description**

모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondevicebuttonup(obj:nexacro.Grid,e:nexacro.DeviceButtonEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.
반환값을 생략하면 false로 적용됩니다.

**Remark**

- 디바이스 버튼을 눌렀다 뗄 때 이벤트가 발생합니다.

- 버튼 형식은 MENU(1),  CANCEL(2) 2종류 입니다.

- 일부 기종에서 CANCEL 버튼을 long press 해야 MENU key event가 발생합니다.


---

### ondrag

> Components > Component > Grid > Event > ondrag

**Description**

Grid 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondrag(obj:nexacro.Grid,e:nexacro.GridDragEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 드래그 상태가 되고 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 드래그 상태가 취소되고 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- Grid 에서 마우스로 Column 너비를 조정하거나 위치를 변경하는 경우에도 ondrag 이벤트가 발생합니다.

- Grid 영역 내에서 마우스의 LButtonDown 후 LButtonUp 액션 없이 마우스 이동 시 ondrag 이벤트가 발생합니다.

- 이벤트의 리턴값을 true 로 하여 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등

- 에디트 계열 컴포넌트에서 마우스로 드래그 시 화면의 문자열을 선택할 지 드래그 상태를 발생시킬지 여부는 이벤트의 리턴값으로 결정됩니다.


---

### ondragenter

> Components > Component > Grid > Event > ondragenter

**Description**

Grid 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragenter(obj:nexacro.Grid,e:nexacro.DragEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- 드래그 상태를 유지하고 있으면 Grid 영역으로 마우스 포인터가 들어올 때마다 이벤트가 발생합니다.


---

### ondragleave

> Components > Component > Grid > Event > ondragleave

**Description**

Grid 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragleave(obj:nexacro.Grid,e:nexacro.DragEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- 드래그 상태를 유지하고 있으면 Grid 영역에서 마우스 포인터가 나갈 때마다 이벤트가 발생합니다.


---

### ondragmove

> Components > Component > Grid > Event > ondragmove

**Description**

Grid 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragmove(obj:nexacro.Grid,e:nexacro.GridDragEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- 드래그 상태를 유지하고 있으면 Grid 영역 내에서 마우스 포인터가 움직일 때마다 이벤트가 발생합니다.


---

### ondrop

> Components > Component > Grid > Event > ondrop

**Description**

Grid 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondrop(obj:nexacro.Grid,e:nexacro.GridDragEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- Grid 영역 내에서 드래그 상태인 마우스의 LButtonUp 액션 발생 시 ondrop 이벤트가 발생합니다.

- 넥사크로에서 발생한 드래그 또는 어플리케이션 외부에서 파일을 드래그 했을 때 ondrop 이벤트를 발생시킬 수 있습니다.

- 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등


---

### ondropdown

> Components > Component > Grid > Event > ondropdown

**Description**

Grid 의 Cell 에서 Combo 아이템 리스트 또는 팝업달력이 표시될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondropdown(obj:nexacro.Grid,e:nexacro.GridEditEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Cell 이 Combo 형식인 경우 dropdownCombo() 메소드를 실행하거나 마우스 또는 키보드에 의해
   Combo 아이템 리스트가 표시될 때 ondropdown 이벤트가 발생합니다.

- Cell 이 Calendar 형식인 경우 dropdownCalendar() 메소드를 실행하거나 마우스 또는 키보드에 의해
   팝업달력이 표시될 때 ondropdown 이벤트가 발생합니다.


---

### onenterdown

> Components > Component > Grid > Event > onenterdown

**Description**

Grid 에서 Cell 에 편집모드용 컨트롤이 활성화 되어 있을 때 엔터키가 입력되면 발생하는 이벤트입니다.

**Syntax**

```javascript
onenterdown(obj:nexacro.Grid,e:nexacro.GridEditEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Cell 에 편집모드용 컨트롤이 활성화 되어 있지 않을 때 엔터키를 입력하면 편집모드용 컨트롤이 표시되고 onenterdown 이벤트는 발생하지 않습니다.

- Grid 의 readonly 속성값이 true 일 때는 이벤트가 발생하지 않습니다.

- Cell 에 편집모드용 컨트롤이 활성화 된 상태에서 엔터키를 입력하면
   "onkeydown 이벤트 발생 -> DataSet 에 값 반영 -> onenterdown 이벤트 발생" 순서로 진행됩니다.

- Cell 의 edittype 속성값이 "checkbox" 일 때 엔터키를 입력하면 값은 변경되지 않고, onenterdown 이벤트만 발생합니다.
   edittype 속성값이 "checkbox" 인 Cell 의 값을 키보드로 변경하려면 스페이스키를 입력하여야 합니다.


---

### onexpanddown

> Components > Component > Grid > Event > onexpanddown

**Description**

Cell 에 표시된 확장버튼을 마우스 왼쪽버튼으로 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onexpanddown(obj:nexacro.Grid,e:nexacro.GridMouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Cell 의 expandshow 속성값이 "show" 일 때 확장버튼이 표시됩니다.

**See Also**

Grid.onexpandupGridCellControl.expandshow


---

### onexpandup

> Components > Component > Grid > Event > onexpandup

**Description**

Cell 에 표시된 확장버튼에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onexpandup(obj:nexacro.Grid,e:nexacro.GridMouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Cell 의 expandshow 속성값이 "show" 일 때 확장버튼이 표시됩니다.

**See Also**

Grid.onexpanddownGridCellControl.expandshow


---

### onheadclick

> Components > Component > Grid > Event > onheadclick

**Description**

Grid 에서 Head 영역의 Cell 을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onheadclick(obj:nexacro.Grid,e:nexacro.GridClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onheaddblclick

> Components > Component > Grid > Event > onheaddblclick

**Description**

Grid 에서 Head 영역의 Cell 을 더블클릭 했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onheaddblclick(obj:nexacro.Grid,e:nexacro.GridClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onheadvaluechanged

> Components > Component > Grid > Event > onheadvaluechanged

**Description**

Grid 컴포넌트의 Head 밴드 영역 내 Cell 내부에서 관리하는 HeadValue 값이 변경됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onheadvaluechanged(obj:nexacro.Grid,e:nexacro.GridHeadValueChangedEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onhscroll

> Components > Component > Grid > Event > onhscroll

**Description**

Grid 의 수평 스크롤바를 스크롤 했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onhscroll(obj:nexacro.Grid,e:nexacro.ScrollEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 수평스크롤은 Cell 단위로 스크롤됩니다.


---

### onimageerror

> Components > Component > Grid > Event > onimageerror

**Description**

Grid 컴포넌트 Cell 오브젝트의 displaytype 속성값이 "imagecontrol"인 경우 이미지 로드 실패 시 발생하는 이벤트입니다.

**Syntax**

```javascript
onimageerror(obj:nexacro.Grid,e:nexacro.GridImageErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### oninput

> Components > Component > Grid > Event > oninput

**Description**

Grid 에서 입력을 시도할 때 발생하는 이벤트 입니다.

**Syntax**

```javascript
oninput(obj:nexacro.Grid,e:nexacro.GridInputEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 조합문자 입력시 oninput 이벤트가 한번 이상 발생할 수 있습니다.

- 편집창에 입력중인 값을 확인하려면 getEditingValue(), getEditingText() 등의 메소드를 사용하여야 합니다.

- Cell 이 Edit, TextArea, Combo 형식이고 편집창이 활성화 상태일때 일본어 IME 로 일본어 입력(조합중이고 확정이 안된 상태)중이면 붙여넣기 기능이 동작하지 않습니다.


◆ web runtime environment 제약

- 동일한 입력에 대해 브라우저의 특성에 따라 oninput 이벤트 발생횟수가 다를 수 있습니다.

- 조합문자 입력확정 동작에서 oninput 이벤트가 발생하지 않는 브라우저가 있을 수 있습니다.
   조합문자 입력확정 동작은 입력시도로 볼 수 없기 때문에 oninput 이벤트의 발생을 보장하지 않습니다.


---

### onkeydown

> Components > Component > Grid > Event > onkeydown

**Description**

Grid 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkeydown(obj:nexacro.Grid,e:nexacro.KeyEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- Tab 키 입력으로 포커스가 변경된 경우는 onkeydown 이벤트가 발생하지 않으며 이벤트가 상위로 전파되지 않습니다.

- onkeydown 이벤트는 키보드 관련 이벤트 중 키가 눌렸을 때 제일 먼저 발생하는 이벤트입니다.

- 키를 누르고 있을 경우 연속적으로 이벤트가 발생합니다.


◆ Mobile WRE 제약

- 일부 모바일 웹브라우저에서 e.keycode 속성에 입력값이 정상적으로 전달되지 않을 수 있습니다.
   또한 키보드 관련 이벤트의 순서가 바뀌어 발생할 수 있습니다.

**Basic Action**

- Tab 키 다운 시 컴포넌트 또는 Cell 의 포커스를 이동합니다.

**Default Action**

＊ 상하방향키 다운 : current row 변경
＊ 좌우방향키 다운 : current cell 변경
＊ 엔터키 다운 : 디스플레이모드에서 편집모드로 변경


---

### onkeyup

> Components > Component > Grid > Event > onkeyup

**Description**

Grid 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkeyup(obj:nexacro.Grid,e:nexacro.KeyEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- Tab 키 입력으로 포커스가 변경된 경우는 onkeyup 이벤트가 발생하지 않으며 이벤트가 상위로 전파되지 않습니다.


◆ Mobile WRE 제약

- 일부 모바일 웹브라우저에서 e.keycode 속성에 입력값이 정상적으로 전달되지 않을 수 있습니다.
   또한 키보드 관련 이벤트의 순서가 바뀌어 발생할 수 있습니다.


---

### onkillfocus

> Components > Component > Grid > Event > onkillfocus

**Description**

Grid 에서 포커스가 나갈  때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkillfocus(obj:nexacro.Grid,e:nexacro.KillFocusEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 서로 다른 애플리케이션 단위로 포커스가 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showModal(), open() 등의 메소드로 팝업된 Frame 으로 포커스가 이동하는 경우 Grid 에서 포커스 관련 이벤트가 발생하지 않습니다.
   또한, alert(), confirm() 메소드로 표시된 팝업으로 포커스가 이동하는 경우도 Grid 에서 포커스 관련 이벤트가 발생하지 않습니다.


---

### onlbuttondown

> Components > Component > Grid > Event > onlbuttondown

**Description**

Grid 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onlbuttondown(obj:nexacro.Grid,e:nexacro.GridMouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- NRE는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- Grid 영역 내에서 마우스의 LButtonDown 액션이 발생하면 이벤트가 발생합니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

**Default Action**

- selectchangetype 속성값이 "down" 이면 이벤트 발생 후 Grid 가 포커스 됩니다.

- selectchangetype 속성값이 "down" 이고, autoenter 속성값이 "select" 이면
  이벤트 발생 후 마우스 위치의 Cell 에 편집기가 표시됩니다.

- selectchangetype 속성값이 "up" 이면 이벤트 발생 후 Grid 와 Cell 이 포커스 됩니다.


---

### onlbuttonup

> Components > Component > Grid > Event > onlbuttonup

**Description**

Grid 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onlbuttonup(obj:nexacro.Grid,e:nexacro.GridMouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- NRE는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- onlbuttonup 이벤트는 마우스의 왼쪽버튼을 떼었을 때 마우스의 위치와 관계없이 onlbuttondown 이벤트가 발생했던 컴포넌트에서 발생합니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

**Basic Action**

- Grid 에 Status 상태가 적용된 후 이벤트가 발생합니다.

**Default Action**

- 이벤트 발생 후 마우스가 위치한 밴드영역에 따라 onheadclick/oncellclick/onsummaryclick 이벤트가 발생합니다.

- selectchangetype 속성값이 "up" 이면 이벤트 발생 후 Grid 와 Cell 이 포커스 됩니다.

- selectchangetype 속성값이 "up" 이고, autoenter 속성값이 "select" 이면
  이벤트 발생 후 마우스 위치의 Cell 에 편집기가 표시됩니다.


---

### onmousedown

> Components > Component > Grid > Event > onmousedown

**Description**

Grid 영역 내에서 마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 눌렸을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmousedown(obj:nexacro.Grid,e:nexacro.GridMouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- NRE는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- GridMouseEventInfo 오브젝트는 마우스가 위치한 Cell 의 정보를 갖습니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.


---

### onmouseenter

> Components > Component > Grid > Event > onmouseenter

**Description**

Grid 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmouseenter(obj:nexacro.Grid,e:nexacro.MouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- NRE는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

- onmouseenter 이벤트 발생 후 onmousemove 이벤트가 발생합니다.
  https://www.w3.org/TR/DOM-Level-3-Events/#events-mouseevent-event-order


◆ iPad 운영체제 제약 (블루투스 마우스 사용 시)

- iPadOS 14 이상 버전에서 블루투스 마우스 사용 시 onmouseenter 이벤트를 지원합니다.
  iPadOS 14 미만 버전은 onmouseenter 이벤트를 지원하지 않습니다.


---

### onmouseleave

> Components > Component > Grid > Event > onmouseleave

**Description**

Grid 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmouseleave(obj:nexacro.Grid,e:nexacro.MouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- NRE는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.


◆ iPad 운영체제 제약 (블루투스 마우스 사용 시)

- iPadOS 14 이상 버전에서 블루투스 마우스 사용 시 onmouseleave 이벤트를 지원합니다.
  iPadOS 14 미만 버전은 onmouseleave 이벤트를 지원하지 않습니다.


---

### onmousemove

> Components > Component > Grid > Event > onmousemove

**Description**

Grid 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmousemove(obj:nexacro.Grid,e:nexacro.GridMouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- NRE는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.


◆ iPad 운영체제 제약 (블루투스 마우스 사용 시)

- iPadOS 14 이상 버전에서 블루투스 마우스 사용 시 onmousemove 이벤트를 지원합니다.
  iPadOS 14 미만 버전은 onmousemove 이벤트를 지원하지 않습니다.


---

### onmouseup

> Components > Component > Grid > Event > onmouseup

**Description**

마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 떼어질 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmouseup(obj:nexacro.Grid,e:nexacro.GridMouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다

**Remark**

- NRE는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- onmouseup 이벤트는 onmousedown 이벤트와 관계없이 마우스 나머지버튼을 떼었을 때 마우스가 위치한 컴포넌트에서 발생합니다.

- GridMouseEventInfo 오브젝트는 마우스가 위치한 Cell 의 정보를 갖습니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.


---

### onmousewheel

> Components > Component > Grid > Event > onmousewheel

**Description**

Grid 영역 내에서 마우스의 휠버튼을 회전했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmousewheel(obj:nexacro.Grid,e:nexacro.MouseWheelEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 휠버튼 회전값이 무시되고, 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 휠버튼 회전값이 처리되고, 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- 이벤트의 리턴값과 스크롤 조건에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- Grid 에서 마우스의 휠버튼 회전값을 처리할 필요가 없을 때 상위 컴포넌트로 휠버튼 회전값과 이벤트가 전파됩니다.
   즉, Grid 에서 스크롤이 이동될 때는 상위로 이벤트가 전파되지 않고, 스크롤이 처음이나 마지막 상태일 때 상위로 이벤트가 전파됩니다.

- Control 키를 누른 상태에서 휠버튼을 회전시키면 환경에 따라 아래와 같이 Zoom 이 발생합니다.
   > Windows NRE 는 window 화면단위로 50%~200% 범위 내에서 10% 단위로 Zoom 이 변경됩니다.
   > Desktop WRE는 웹 브라우저에서 지원하는 범위/간격에 따라 Zoom이 변경됩니다.

- Zoom 상태에서도 Grid 에서 이벤트가 발생하고 리턴값에 따라 상위로 전파되므로 스크립트 작성 시 주의하여야 합니다.
   이 때, 스크롤은 처리되지 않으며 e.ctrlkey 속성값이 true 로 설정됩니다.

**Default Action**

- Grid 컴포넌트에 스크롤바가 있다면 이벤트 발생 후 스크롤을 이동시킵니다.


---

### onmove

> Components > Component > Grid > Event > onmove

**Description**

Grid 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmove(obj:nexacro.Grid,e:nexacro.MoveEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onnodataareaclick

> Components > Component > Grid > Event > onnodataareaclick

**Description**

그리드에서 셀이 존재하지 않는 영역을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onnodataareaclick(obj:nexacro.Grid,e:nexacro.MouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onnodataareadblclick

> Components > Component > Grid > Event > onnodataareadblclick

**Description**

그리드에서 셀이 존재하지 않는 영역을 더블클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onnodataareadblclick(obj:nexacro.Grid,e:nexacro.MouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onrbuttondown

> Components > Component > Grid > Event > onrbuttondown

**Description**

Grid 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrbuttondown(obj:nexacro.Grid,e:nexacro.GridMouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- NRE는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

- WRE에서 마우스 오른쪽버튼은 기본팝업메뉴 표시에 사용되므로 일반적으로 onrbuttondown 이벤트를 정의하지 않습니다.
   
- Safari 브라우저는 RButtonDown 액션에서 기본팝업메뉴가 표시되는 특성이 있습니다.
   기본팝업메뉴가 표시되면 onrbuttonup 이벤트가 발생하지 않습니다.
   onrbuttonup 이벤트 발생이 필요하다면 onrbuttondown 또는 oncontextmenu 이벤트에서 preventDefault() 메소드로
   Default Action 을 취소하거나 Environment 의 usecontextmenu 속성을 사용하여 기본팝업메뉴를 비활성화 시켜야 합니다.

**Default Action**

- onrbuttondown 이벤트 종료 후 이벤트가 발생한 컴포넌트로 포커스가 이동됩니다.
  단, GroupBox, Static 컴포넌트는 포커스가 이동하지 않습니다.

- 일반적으로 onrbuttondown -> onrbuttonup -> oncontextmenu 순서로 이벤트가 발생하지만
   예외적으로 아래 환경은 onrbuttondown -> oncontextmenu -> onrbuttonup 순서로 이벤트가 발생하므로 주의하여야 합니다.
   : Safari 브라우저, macOS 환경의 전체 웹브라우저, Mobile 전체환경


---

### onrbuttonup

> Components > Component > Grid > Event > onrbuttonup

**Description**

Grid 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrbuttonup(obj:nexacro.Grid,e:nexacro.GridMouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- NRE는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- onrbuttonup 이벤트는 onrbuttondown 이벤트와 관계없이 마우스 오른쪽버튼을 떼었을 때 마우스가 위치한 컴포넌트에서 발생합니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

- WRE에서 마우스 오른쪽버튼은 기본팝업메뉴 표시에 사용되므로 일반적으로 onrbuttonup 이벤트를 정의하지 않습니다.

- Safari 브라우저는 RButtonDown 액션에서 기본팝업메뉴가 표시되는 특성이 있습니다.
   기본팝업메뉴가 표시되면 onrbuttonup 이벤트가 발생하지 않습니다.
   onrbuttonup 이벤트 발생이 필요하다면 onrbuttondown 또는 oncontextmenu 이벤트에서 preventDefault() 메소드로
   Default Action 을 취소하거나 Environment 의 usecontextmenu 속성을 사용하여 기본팝업메뉴를 비활성화 시켜야 합니다.

**Default Action**

- onrbuttonup 이벤트 종료 후 oncontextmenu 이벤트가 발생합니다.
   예외적으로 아래 환경은 onrbuttondown -> oncontextmenu -> onrbuttonup 순서로 이벤트가 발생하므로 주의하여야 합니다.
   : Safari 브라우저, macOS 환경의 전체 웹브라우저, Mobile 전체환경


---

### onrowresized

> Components > Component > Grid > Event > onrowresized

**Description**

Grid 의 Row 높이가 변경된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
onrowresized(obj:nexacro.Grid,e:nexacro.GridSizeChangedEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onselectchanged

> Components > Component > Grid > Event > onselectchanged

**Description**

Grid 의 선택 영역이 변경 된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
onselectchanged(obj:nexacro.Grid,e:nexacro.GridSelectEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- selecttype 속성값을 기준으로 선택이 변경된 후 발생하는 이벤트입니다.

- Grid 에서 마우스나 키보드를 사용해 선택이 변경된 후 발생합니다.
   또는 스크립트에서 selectRow(), selectCell() 와 같이 선택을 변경하는 메소드에 의해 선택이 변경된 후 발생합니다.

- Grid 에서 Multi 나 Area 선택이 가능한 경우는 바인딩된 DataSet 의 선택영역과 무관하게 Grid 자체의 선택영역을 관리합니다.
   따라서, 바인딩된 DataSet 의 선택이 변경되어도 이벤트가 발생하지 않습니다.


---

### onsetfocus

> Components > Component > Grid > Event > onsetfocus

**Description**

Grid 에 포커스가 들어올 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsetfocus(obj:nexacro.Grid,e:nexacro.SetFocusEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 서로 다른 애플리케이션 단위로 포커스가 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showModal(), open() 등의 메소드로 팝업된 Frame 으로 포커스가 이동하는 경우 Grid 에서 포커스 관련 이벤트가 발생하지 않습니다.
   또한, alert(), confirm() 메소드로 표시된 팝업으로 포커스가 이동하는 경우도 Grid 에서 포커스 관련 이벤트가 발생하지 않습니다.

- open() 메소드로 오픈된 Modeless 창에서 부모창의 Grid 에 setFocus() 메소드 실행 시 환경에 따라 동작에 차이가 있으므로 주의하여야 합니다.
   > Nexacro Runtime Environment
       : 부모 Form 이 활성화 되어 onactivate 이벤트가 발생합니다.
         부모 Form 으로 포커스가 이동하며 "Frame 정렬"이 수행됩니다.
   > Web Runtime Environment
       : 브라우저 제약 때문에 부모 Form 은 활성화 되지 않으며 onactivate 이벤트가 발생하지 않습니다.
         부모 Form 으로 포커스가 이동하지 않지만 "Frame 정렬"은 수행됩니다.
   * "Frame 정렬" : FrameSet 의 자식 Frame 중 하나로 포커스가 이동하면 해당 Frame 이 동일레벨 Frame 중 상위에 표시됩니다.
         이 때, Frame 간 포커스 이동이 발생했다면 해당 Frame 의 Form 에서 onsetfocus 이벤트가 발생합니다.
         Frame 간 포커스 이동이 없다면 onsetfocus 이벤트가 발생하지 않습니다.


---

### onsize

> Components > Component > Grid > Event > onsize

**Description**

Grid 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsize(obj:nexacro.Grid,e:nexacro.SizeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onsummaryclick

> Components > Component > Grid > Event > onsummaryclick

**Description**

Grid 에서 Summary 영역의 Cell 을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsummaryclick(obj:nexacro.Grid,e:nexacro.GridClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onsummarydblclick

> Components > Component > Grid > Event > onsummarydblclick

**Description**

Grid 에서 Summary 영역의 Cell 을 더블클릭 했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsummarydblclick(obj:nexacro.Grid,e:nexacro.GridClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### ontouchend

> Components > Component > Grid > Event > ontouchend

**Description**

Grid 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchend(obj:nexacro.Grid,e:nexacro.TouchEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- Environment 의 enabletouchevent 속성값이 true 인 경우에만 이벤트가 발생합니다.


---

### ontouchmove

> Components > Component > Grid > Event > ontouchmove

**Description**

Grid 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchmove(obj:nexacro.Grid,e:nexacro.TouchEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- Environment 의 enabletouchevent 속성값이 true 인 경우에만 이벤트가 발생합니다.


---

### ontouchstart

> Components > Component > Grid > Event > ontouchstart

**Description**

Grid 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchstart(obj:nexacro.Grid,e:nexacro.TouchEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- Environment 의 enabletouchevent 속성값이 true 인 경우에만 이벤트가 발생합니다.

**Basic Action**

- 테마에 정의된 Status가 적용된 후 이벤트가 발생합니다.

**Default Action**

- selectscrollmode="select", selectchangetype="down", autoenter="select" 이면 이벤트 발생 후 터치된 셀이 편집모드로 변경됩니다.

- selectscrollmode="select", selectchangetype="down" 이면 이벤트 발생 후 Grid 컴포넌트와 셀에 포커스를 처리합니다.

- selectscrollmode="select", selectchangetype="up" 이면 이벤트 발생 후 Grid 컴포넌트에 포커스를 처리합니다.


---

### ontreestatuschanged

> Components > Component > Grid > Event > ontreestatuschanged

**Description**

Grid 의 트리 Cell 에서 트리 상태가 변경된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
ontreestatuschanged(obj:nexacro.Grid,e:nexacro.GridTreeStatusEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Grid 의 트리 Cell 에서 Collapse/Expand 버튼을 클릭하거나 setTreeStatus() 메소드로 트리 상태를 변경했을 때 이벤트가 발생합니다.

- 단말(Leaf) 상태인 Row 에서는 ontreestatuschanged 이벤트가 발생하지 않습니다.

- cantreestatuschange 이벤트에서 리턴값으로 "false" 를 반환하면 ontreestatuschanged 이벤트가 발생하지 않습니다.


---

### onvscroll

> Components > Component > Grid > Event > onvscroll

**Description**

Grid 의 수직 스크롤바를 스크롤 했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onvscroll(obj:nexacro.Grid,e:nexacro.ScrollEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 수직 스크롤은 Row 단위로 스크롤됩니다.


---

## Components > Component > Grid > Objects

### Objects

> Components > Component > Grid > Objects

**Description**

Grid를 구성하는 오브젝트입니다.


---

## Components > Component > Grid > GridBandControl

### GridBandControl

> Components > Component > Grid > Objects > GridBandControl

**Description**

Grid의 Band를 지정하는 오브젝트입니다.

Grid는 Head,Body,Summary Band로 구성됩니다. 각 Band는 Cell 의 List를 각각 소유하여 구성됩니다.
Head Band는 Grid의 상단에 출력되는 Cell 들이며, Body Band는 Bind된 Dataset Row 가 반복되어 출력되는 Cell 들이며, Summary Band는 Grid의 하단에 출력되는 Cell 들의 집합입니다.

**Remark**

- Head Band의 style이 css또는 theme에 정의되어 있지 않을 때에는 Body Band의 style을 참조합니다.
  또한, Summary Band의 style이 css 또는 theme에 정의되어 있지 않을 때에는 Head Band의 style을 참조하며,
  Summary Band와 Head Band의 style이 모두 css나 theme에 정의 되어있지 않다면, Body Band의 style값을 참조하게 됩니다.

**Property**

| Name | Description |
| --- | --- |
| accessibilityaction | GridBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다. |
| accessibilitydesclevel | GridBandControl 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다. |
| accessibilitydescription | GridBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다. |
| accessibilityenable | GridBandControl 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다. |
| accessibilitylabel | GridBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다. |
| accessibilityrole | GridBandControl에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다. |
| background | GridBandControl 의 배경 영역을 설정하는 속성입니다. |
| border-radius | GridBandControl 의 모서리 모양을 설정하는 속성입니다. |
| color | GridBandControl 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| cssclass | GridBandControl 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다. |
| cursor | GridBandControl 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| font | GridBandControl 에서 사용하는 폰트를 설정하는 속성입니다. |
| letter-spacing | GridBandControl 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다. |
| name | GridBandControl 의 이름을 설정하는 속성입니다. |
| -nexa-border | GridBandControl 의 테두리를 설정하는 속성입니다. |
| -nexa-edge | GridBandControl 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-rtl-background-image | GridBandControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| -nexa-rtl-edge-image | GridBandControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| opacity | GridBandControl 영역의 투명도를 설정하는 속성입니다. |
| tooltiptext | GridBandControl 영역에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다. |
| tooltiptype | GridBandControl 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다. |
| word-spacing | GridBandControl 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다. |

**Status**

컴포넌트가 비활성화된 상태

**Control**

| Name | TypeName |
| --- | --- |
| row | nexacro.GridRowControl |
| selection | nexacro.GridSelectionControl |


---

### 속성 (Properties)

### -nexa-border

> Components > Component > Grid > Objects > GridBandControl > Property > -nexa-border

**Description**

GridBandControl 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
GridBandControl.border[= strborder]
```

**Setting Syntax**

```javascript
strborder ::= <line-width> <line-style> <color> [,<line-width> <line-style> <color>]{3}

<line-width> ::= 'thin' | 'medium' | 'thick' | <nWidth> 'px'
<line-style> ::= 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'
<color> ::= <NamedColor> | <NumericColor>

1회 입력 : top/right/bottom/left 에 모두 적용됩니다.
2회 입력 : top/bottom, right/left 에 첫번째 값부터 각각 적용됩니다.
3회 입력 : top, right/left, bottom 에 첫번째 값부터 각각 적용됩니다.
4회 입력 : top, right, bottom, left 에 첫번째 값부터 각각 적용됩니다.

* 2회~4회 입력은 border-radius 속성값이 설정되지 않은 경우만 적용됩니다.
```
```javascript
* XCSS
-nexa-border : 1px solid #999999;
-nexa-border : 1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999;

* Script ( normal property )
this.Grid00.head.border = "1px solid #999999";
this.Grid00.body.border = "1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999";
```
- **`<line-width>`** — 테두리 선의 두께를 설정합니다.

"thin" 설정 시 1 pixel 두께로 테두리가 표시됩니다.
"medium" 설정 시 3 pixel 두께로 테두리가 표시됩니다.
"thick" 설정 시  5 pixel 두께로 테두리가 표시됩니다.

<nWidth> 설정 시 <nWidth> pixel 두께로 테두리가 표시됩니다.
- **`<nWidth>`** — 테두리 선의 두께를 pixel 단위로 설정합니다.
"px" 단위는 생략할 수 없습니다.
- **`<line-style>`** — 테두리 선의 스타일을 설정합니다.

"none" 설정 시 테두리가 표시되지 않습니다.
"hidden" 설정 시 테두리가 표시되지 않습니다.
"dotted" 설정 시 테두리가 점선으로 표시됩니다.
"dashed" 설정 시 테두리가 긴 점선으로 표시됩니다.
"solid" 설정 시 테두리가 실선으로 표시됩니다.
"double" 설정 시 테두리가 두줄로 표시됩니다.
"groove" 설정 시 테두리가 들어간 것처럼 보이게 입체적으로 표시됩니다.
"ridge" 설정 시 테두리가 올라온 것처럼 보이게 입체적으로 표시됩니다.
"inset" 설정 시 컴포넌트가 들어간 것처럼 보이게 테두리가 입체적으로 표시됩니다.
"outset" 설정 시 컴포넌트가 올라온 것처럼 보이게 테두리가 입체적으로 표시됩니다.
- **`<color>`** — 테두리 색상을 색상이름 또는 색상코드로 설정합니다.
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- -nexa-border 속성값을 설정하지 않으면 undefined 가 설정되고, "medium none #999999" 로 동작합니다.

- <line-style> 이 "double" 일 때 두 줄을 다른 색으로 설정할 수 없습니다.
   <color> 에 설정된 색이 두 줄에 모두 적용됩니다.

- 스크립트로 접근 시 속성명은 "border"를 사용해야 합니다.

- Excel Export 시 테두리 선의 스타일과 색상은 적용되지만 두께는 적용되지 않습니다.
   Excel 에서 셀의 테두리 두께를 설정하는 기능이 없으므로 기본 두께로 적용됩니다.


◆ NRE 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 top > right > bottom > left 순으로 겹쳐서 표시됩니다.

- <line-style> 파라미터에 "double","groove","ridge","inset","outset" 값을 설정해도 적용되지 않습니다.

- <line-width> 파라미터에 "thin","medium","thick" 값을 설정해도 적용되지 않습니다.


◆ WRE 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 웹브라우저에 따라 테두리가 겹쳐지는 순서가 다르게 처리될 수 있습니다.

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있으면 
   두께는 각 테두리 별로 따로 적용되고, 색상은 top 에 설정된 색이 적용됩니다.

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있어도
   일부 브라우저는 각 테두리의 색상이나 두께가 각각 적용됩니다.

- XCSS 를 사용하지 않고 rgba(), hsl(), hsla() 메소드를 속성에 직접 설정할 경우 브라우저 버전에 따라 적용되지 않을 수 있습니다.


---

### -nexa-edge

> Components > Component > Grid > Objects > GridBandControl > Property > -nexa-edge

**Description**

GridBandControl 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
GridBandControl.edge[= stredge]
```

**Setting Syntax**

```javascript
stredge ::= 'none' | <image> [<fixedwidth>'px' <fixedheight>'px']

<image> ::= 'URL("' <Theme-Image> | <Web-Image> '")'
```
```javascript
* XCSS
-nexa-edge : "URL('./images/border.png')" 5px 5px;

* Script ( normal property )
this.Grid00.body.edge = "URL('./images/border.png')" 5px 5px;
```
- **`"none"`** — edge 이미지를 설정하지 않습니다.
- **`<image>`** — 'URL ("[이미지위치]")' 형식으로 테마 또는 웹의 이미지를 설정합니다.

테두리(border) 안쪽에 edge 형태로 이미지가 표시됩니다.
- **`<Theme-Image>`** — 테마에 선언된 이미지를 "theme://images\이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/파일명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<fixedwidth>`** — 이미지가 고정되어 표시될 왼쪽/오른쪽 영역의 크기를 pixel 단위로 설정합니다.
"0px" 설정 시 왼쪽/오른쪽 영역을 고정하지 않습니다.

값을 설정하지 않으면 "0px" 로 적용됩니다.
- **`<fixedheight>`** — 이미지가 고정되어 표시될 위쪽/아래쪽 영역의 크기를 pixel 단위로 설정합니다.
"0px" 설정 시 위쪽/아래쪽 영역을 고정하지 않습니다.

값을 설정하지 않으면 "0px" 로 적용됩니다.

**Remark**

- -nexa-edge 속성값을 설정하지 않으면 undefined 가 설정되고, "none" 으로 동작합니다.

- 스크립트로 접근 시 속성명은 "edge" 를 사용해야 합니다.

- GridBandControl 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.


◆ WRE 제약

- <fixedwidth>,<fixedheight> 값이 이미지 사이즈의 1/2 을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-rtl-background-image

> Components > Component > Grid > Objects > GridBandControl > Property > -nexa-rtl-background-image

**Description**

GridBandControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
GridBandControl.-nexa-rtl-background-image
```

**Setting Syntax**

```javascript
strRtlBgImage ::= "URL(' " <Theme-Image> | <Web-Image> " ')"
```
```javascript
* XCSS
-nexa-rtl-background-image : URL("http://localhost/Test.jpg");
-nexa-rtl-background-image : URL("theme://images/Test.jpg");
```
- **`strRtlBgImage`** — "URL ('<이미지위치>')" 형식으로 테마 또는 웹의 이미지 경로를 문자열로 설정합니다.

background 속성에 설정된 값 중 이미지만 설정한 이미지로 대체됩니다.
background 속성에 설정된 이미지 이외의 값은 동일하게 적용됩니다.
- **`<Theme-Image>`** — 테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.

**Remark**

- rtl 속성에 의해 표시기준이 변경되면 반전된 이미지를 적용하려 할 때 사용하는 속성입니다.

- XCSS 에서만 설정할 수 있는 속성으로 스크립트로 값을 변경할 수 없습니다.
   XCSS 에 -nexa-rtl-background-image 속성값을 설정하지 않으면 background 속성에 설정된 이미지가 적용됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.

- 배경이미지가 적용되는 영역은 컴포넌트의 클라이언트 영역입니다.

- background 속성에 배경색이 설정되어 있을 경우 배경색 위에 이미지가 표시됩니다.

- 그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
   background 속성에 그라데이션이 설정되어 있을 경우 오동작이 발생할 수 있습니다.


---

### -nexa-rtl-edge-image

> Components > Component > Grid > Objects > GridBandControl > Property > -nexa-rtl-edge-image

**Description**

GridBandControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
GridBandControl.-nexa-rtl-edge-image
```

**Setting Syntax**

```javascript
strRtlEgImage ::= "URL(' " <Theme-Image> | <Web-Image> " ')"
```
```javascript
* XCSS
-nexa-rtl-edge-image : URL("http://localhost/Test.jpg");
-nexa-rtl-edge-image : URL("theme://images/Test.jpg")
```
- **`strRtlEgImage`** — "URL ('<이미지위치>')" 형식으로 테마 또는 웹의 이미지 경로를 문자열로 설정합니다.

-nexa-edge 속성에 설정된 값 중 이미지만 설정한 이미지로 대체됩니다.
-nexa-edge 속성에 설정된 이미지 이외의 값은 동일하게 적용됩니다.
- **`<Theme-Image>`** — 테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.

**Remark**

- rtl 속성에 의해 표시기준이 변경되면 반전된 이미지를 적용하려 할 때 사용하는 속성입니다.

- XCSS 에서만 설정할 수 있는 속성으로 스크립트로 값을 변경할 수 없습니다.
   XCSS 에 -nexa-rtl-edge-image 속성값을 설정하지 않으면 -nexa-edge 속성에 설정된 이미지가 적용됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.

- 배경이미지가 적용되는 영역은 컴포넌트의 클라이언트 영역입니다.

- background 또는 -nexa-rtl-background-image 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-rtl-edge-image 속성에 설정된 이미지가 제일 위에 표시됩니다.


◆ web runtime environment 제약

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### accessibilityaction

> Components > Component > Grid > Objects > GridBandControl > Property > accessibilityaction

**Description**

GridBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다.

**Syntax**

```javascript
GridBandControl.accessibilityaction[= strAction]
```

**Setting Syntax**

```javascript
this.GridBandControl00.accessibilityaction = "Accessibility Action Message"; 
this.GridBandControl00.accessibilityaction = "Select by direction key";
```
- **`strAction`** — accessibilitydescreadtype 속성값에 "action"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 컴포넌트에 선택상자 이동 시 사용자가 추가적인 정보를 얻기 위해 필요한 동작을 안내하는 용도로 사용합니다. 
  예를 들어 컴포넌트 특성에 따라 다음과 같이 속성값을 설정할 수 있습니다.
  
  - CheckBox 컴포넌트의 경우 아래와 같은 안내문을 accessibilityaction 속성값으로 설정할 수 있습니다.
  "선택 상태를 전환하려면 스페이스 바를 누릅니다."
  
  - WebBrowser, WebView 컴포넌트의 경우 스크린 리더 사용자를 위한 안내문을 accessibilityaction 속성값으로 설정할 수 있습니다.
  "웹 브라우저 컴포넌트 내 콘텐츠를 이용하기 위해서는 가상커서를 해제해 주세요."
  그리고 WebBrowser, WebView 컴포넌트를 벗어났을 때 필요한 안내문을 accessibilityleavemessage 속성값으로 설정합니다.
  "가상커서를 설정해 주세요"


---

### accessibilitydesclevel

> Components > Component > Grid > Objects > GridBandControl > Property > accessibilitydesclevel

**Description**

GridBandControl 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다.

**Syntax**

```javascript
GridBandControl.accessibilitydesclevel[= enumLevel]
```

**Setting Syntax**

```javascript
enumLevel ::= 'all' | 'self' | 'child' | 'none'
```
```javascript
this.GridBandControl00.accessibilitydesclevel = "all";
```
- **`"all"`** — GridBandControl 와 자식 컴포넌트에 대한 접근성을 모두 출력합니다.
- **`"self"`** — GridBandControl 의 접근성만 출력하고 자식 컴포넌트의 접근성은 출력하지 않습니다.
- **`"child"`** — GridBandControl 의 접근성은 출력하지 않고, 자식 컴포넌트의 접근성은 출력합니다.
- **`"none"`** — GridBandControl 와 자식 컴포넌트에 대한 접근성을 모두 출력하지 않습니다.

**Remark**

- accessibilitydesclevel 속성값을 설정하지 않으면 "all" 로 적용됩니다.

- Button 과 같이 자식 컴포넌트가 없는 컴포넌트는 "all" 또는 "child" 로 설정 시 "self" 로 적용됩니다.

- Div 와 같은 컨테이너 컴포넌트는 "child" 설정 시 실제 컨텐츠의 접근성만을 출력합니다.

- accessibilitydesclevel 속성은 선택상자의 이동에 영향을 주지 않으므로 방향키로 선택상자가 GridBandControl 에 이동되게 하지 않으려면 accessibilityenable 속성을 설정하여야 합니다.


---

### accessibilitydescription

> Components > Component > Grid > Objects > GridBandControl > Property > accessibilitydescription

**Description**

GridBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다.

**Syntax**

```javascript
GridBandControl.accessibilitydescription[= strDescription]
```

**Setting Syntax**

```javascript
this.GridBandControl00.accessibilitydescription = "Option";
```
- **`strDescription`** — accessibilitydescreadtype 속성값에 "description"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.


---

### accessibilityenable

> Components > Component > Grid > Objects > GridBandControl > Property > accessibilityenable

**Description**

GridBandControl 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다.

**Syntax**

```javascript
GridBandControl.accessibilityenable[= bEnable]
```

**Setting Syntax**

```javascript
bEnable ::= 'true' | 'false'
```
```javascript
this.GridBandControl00.accessibilityenable = false;
```
- **`true`** — GridBandControl 에 선택상자가 이동되면 접근성 관련 속성값을 출력합니다.

방향키 또는 제스처로 선택상자 이동 시 Static 과 같이 포커스를 갖지 않는 컴포넌트에도 선택상자가 이동됩니다.
- **`false`** — GridBandControl 에 선택상자가 이동되어도 접근성 관련 속성값을 출력하지 않습니다.

데스크탑 환경에서 방향키로 선택상자가 GridBandControl 에 이동되지 않습니다.
모바일 환경에서 제스처로 선택상자가 GridBandControl 에 이동되지 않습니다.

**Remark**

- accessibilityenable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 선택상자 이동 시 컴포넌트의 ARIA-LABEL + Status + Role 순서로 정보가 조합되어 접근성으로 출력됩니다.
   각 정보의 조합순서는 스크린 리더의 종류에 따라 달라질 수 있습니다.
   > ARIA-LABEL : Environment 의 accessibilitydescreadtype 속성에 설정된 속성값이 반영됩니다.
   > Status : GridBandControl의 현재 상태가 반영됩니다.
   > Role : accessibilityrole 속성값이 반영됩니다. accessibilityrole 속성값을 설정하지 않으면 GridBandControl의 고유 Role 이 반영됩니다.

- accessibilityenable 속성값이 false 일 때 데스크탑 환경에서 방향키 외의 방법으로 선택상자를 GridBandControl로 이동시키면 스크린 리딩 프로그램에서 임의의 값을 출력할 수 있습니다.


◆ 컨테이너 컴포넌트 선택상자 이동 제약

아래와 같은 환경에서 컨테이너 컴포넌트로 선택상자가 이동하지 않고 컨테이너 컴포넌트 내에 배치된 컴포넌트로 이동합니다.
- Android, iOS/iPadOS 운영체제에서 실행 시 (Div, PopupDiv, TabpageControl, View)
- Windows 운영체제에서 센스리더 가상커서 사용 시 (Div, PopupDiv, View)


◆ WRE 접근성 제약

- accessibilitytype 속성값이 'sensereader'이고 센스리더에서 가상커서 사용으로 설정한 경우에 accessibilityenable 속성은 항상 false로 동작합니다.


---

### accessibilitylabel

> Components > Component > Grid > Objects > GridBandControl > Property > accessibilitylabel

**Description**

GridBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다.

**Syntax**

```javascript
GridBandControl.accessibilitylabel[= strLabel]
```

**Setting Syntax**

```javascript
this.GridBandControl00.accessibilitylabel = "OK Button"; 
this.GridBandControl00.accessibilitylabel = "[@static00]"; 
this.GridBandControl00.accessibilitylabel = "[@static00][@static01]"; 
this.GridBandControl00.accessibilitylabel = "[@static00][@static01] OK Button";
```
- **`strLabel`** — accessibilitydescreadtype 속성값에 "label"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.
문자열로 설정하거나 부모가 같은 컴포넌트의 accessibilitylabel 속성값을 참조할 수 있습니다.
다른 컴포넌트 참조 시에는 "[@ComponentID]" 형식으로 컴포넌트의 id를 대괄호와 "@" 문자를 사용하여 설정합니다.
참조하는 참조값에 해당하는 컴포넌트를 찾을 수 없는 경우에는 참조값 자체가 문자열로 처리됩니다.

**Remark**

- enableaccessibility 속성값이 true인 경우만 적용되는 속성입니다.

- accessibilitydescreadtype 속성값에 "label"이 포함되었으나 accessibilitylabel 속성값을 설정하지 않으면 스크린 리더의 음성 출력 대상에 포함하지 않습니다.


---

### accessibilityrole

> Components > Component > Grid > Objects > GridBandControl > Property > accessibilityrole

**Description**

GridBandControl에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다.

**Syntax**

```javascript
GridBandControl.accessibilityrole[= enumRole]
```

**Setting Syntax**

```javascript
enumRole ::= 'none' | 'alert' | 'application' | 'button' | 'calendar' | 'chart' | 'checkbox' | 'columnheader' | 'combobox' | 'datepicker' | 'edit' | 'fileupload' | 'form' | 'frame' | 'grid' | 'gridcell' | 'groupbox' | 'heading' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6' | 'image' | 'link' | 'listbox' | 'menubar' | 'progressbar' | 'radio' | 'rowheader' | 'scrollbar' | 'spin' | 'static' | 'statusbar' | 'tab' | 'tabpage' | 'textarea' | 'titlebar' | 'toolbar' | 'tooltip' | 'treegrid' | 'treeitem' | 'webbrowser'
```
```javascript
this.GridBandControl00.accessibilityrole = "none"; 
this.GridBandControl00.accessibilityrole = "button";
```
- **`enumRole`** — - "none": 스크린 리더에서 Role 정보를 처리하지 않습니다.

- 속성값을 설정하지 않으면 컴포넌트/오브젝트에 따라 기본 accessibilityrole 값이 적용됩니다.
"application": Application, MainFrame
"button": Button, FileDownload
"calendar": Calendar
"checkbox": CheckBox
"combobox": ComboBox
"edit": Edit, MaskEdit
"frame": FrameSet, ChildFrame
"fileupload": FileUpload
"form": Form, Div
"groupbox": GroupBox
"image": ImageViewer, Sketch
"listbox": ListBox
"menubar": Menu
"progressbar": ProgressBar
"radio": Radio
"spin": Spin
"static": Static
"tab": Tab
"tabpage": TabPage
"textarea": TextArea
"webbrowser": WebBrower

- Grid 컴포넌트의 경우 하위 오브젝트까지 Role을 적용합니다.
"grid": Grid
"gridcell": Grid Cell
"columnheader": Grid Column Head
"rowheader": Grid Row Head
"treegrid": TreeGrid
"treeitem": TreeItem, TreeCell

- 기능에 따라 컴포넌트 또는 오브젝트의 하위 오브젝트 영역에 아래와 같은 Role이 적용됩니다.
"alert": Alert, Confirm, UserConfirm
"chart": Chart
"datepicker": DatePicker
"link": Link
"scrollbar": ScrollBar
"statusbar": StatusBar
"titlebar": TitleBar
"toolbar": ToolBar
"tooltip": Tooltip

- "heading" 또는 "heading1"부터 "heading6" 사이의 값으로 속성값을 설정하면 role, aria-level 값을 처리합니다.
예를 들어 속성값을 "heading3"으로 설정하면 Generate되는 코드 태그에 role="heading", aria-level="3" 형식으로 값을 처리합니다.
속성값을 "heading"으로 설정 시에는 "heading1"을 설정한 것과 같은 동작을 처리합니다.
accessibilityheadingnexthotkey, accessibilityheadingprevhotkey 속성값으로 설정한 단축키로 이동 시 사용할 수 있습니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- accessibilityenable 속성값을 설정하지 않으면 GridBandControl의 기본 Role 로 적용됩니다.

- 추가적인 속성값이 필요한 Role 설정 시 GridBandControl에 해당 속성이 없으면 스크린 리더에 따라 정상적으로 정보를 읽지 못할 수 있습니다.


---

### background

> Components > Component > Grid > Objects > GridBandControl > Property > background

**Description**

GridBandControl 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
GridBandControl.background[= strbackground]
```

**Setting Syntax**

```javascript
strBackground ::= [<bg-image> | <linear-gradient>] [<background-origin> [<background-clip>]] [<background-color>]

<bg-image> ::= 'none' | <imageurl> [<repeat-style>] [<position>]
   <imageurl> ::= 'URL(' <Theme-Image> | <Web-Image> ')'
   <repeat-style> ::= 'repeat-x' | 'repeat-y' | 'repeat' | 'no-repeat'
   <position> ::= <horizontal-position> <vertical-position> ['/' <background-size>]
      <horizontal-position> ::= 'left' | 'center' | 'right' | <pos-percentage> '%'
      <vertical-position> ::= 'top' | 'center' | 'bottom' | <pos-percentage> '%'
      <background-size> ::= 'auto' | 'cover' | 'contain' | (<length> 'px' | <percentage> '%') {1,2}

<linear-gradient> ::= 'linear-gradient(' [<angle> , ] <color-stop> ')'
   <angle> ::= 'to left' | 'to right' | 'to top' | 'to bottom' | 'to left top' | 'to left bottom' | 'to right top' | 'to right bottom'
   <color-stop> ::= <startcolor-stop> [<listcolor-stop>] <endcolor-stop>
      <startcolor-stop> ::= <color> [<percentage>'%']
      <endcolor-stop> ::= <color> [<percentage>'%']
      <listcolor-stop> ::= <color> [<percentage>'%"] [,<listcolor-stop>]*
         <color> ::= <NamedColor> | <NumericColor>

<background-origin> ::= 'border-box' | 'padding-box'
<background-clip> ::= 'border-box' | 'padding-box'
<background-color> ::= <NamedColor> | <NumericColor>
```
```javascript
* XCSS
background : #ffffaa;
background : "URL('./images/smiley.gif')" no-repeat center center #ffffaa;
background : linear-gradient( red , blue , yellow );

* Script ( normal property )
this.Gird00.head.background = "#ffffaa";
this.Gird00.body.background = "URL('./images/smiley.gif')" no-repeat center center #ffffaa;
this.Gird00.summary.background = "linear-gradient( red , blue , yellow )";
this.Gird00.head.background = "linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0))";
```
- **`<bg-image>`** — 배경에 표시될 이미지를 "'none' | <imageurl> [<repeat-style>] [<position>]" 형식으로 설정합니다.

<background-color> 값이 설정되어 있으면 배경색 위로 이미지가 표시됩니다.

"none" 으로 설정하면 이미지를 설정하지 않습니다.
<imageurl> 값으로 이미지를 설정할 수 있습니다.
<repeat-style> 값으로 이미지의 반복표시 방향을 설정할 수 있습니다.
<position> 값으로 이미지의 표시위치를 설정할 수 있습니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<imageurl>`** — 배경에 표시될 이미지를 "'URL(' <Theme-Image> | <Web-Image> ')'" 형식으로 설정합니다.

"URL ( [이미지경로] )" 형식으로 테마 또는 웹의 이미지를 설정합니다.
- **`<Theme-Image>`** — 테마에 선언된 이미지를 "theme://images\이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/파일명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<repeat-style>`** — 배경에 표시될 이미지의 반복표시 방향을 설정합니다.

"repeat-x" 설정 시 이미지가 가로 방향으로 반복표시 됩니다.
"repeat-y" 설정 시 이미지가 세로 방향으로 반복표시 됩니다.
"repeat" 설정 시 이미지가 가로,세로 방향으로 모두 반복표시 됩니다.
"no-repeat" 설정 시 이미지가 반복표시 되지 않습니다.

값을 설정하지 않으면 "repeat" 로 적용됩니다.
- **`<horizontal-position>`** — 배경에 표시될 이미지의 가로 위치를 설정합니다.

"left" 설정 시 GridBandControl 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 GridBandControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 GridBandControl 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 GridBandControl 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 GridBandControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 GridBandControl 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<horizontal-position> 값을 설정하고, <vertical-position> 값을 설정하지 않으면 <vertical-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <vertical-position> 은 "top" 으로 적용됩니다.
- **`<pos-percentage>`** — 배경에 표시될 이미지의 가로/세로 위치를 비율로 설정합니다.

<horizontal-position> 에 "0%" 설정 시 "left" 와 같은 위치로 적용됩니다.
<horizontal-position> 에 "50%" 설정 시 "center" 와 같은 위치로 적용됩니다.
<horizontal-position> 에 "100%" 설정 시 "right" 과 같은 위치로 적용됩니다.
<vertical-position> 에 "0%" 설정 시 "top" 와 같은 위치로 적용됩니다.
<vertical-position> 에 "50%" 설정 시 "center" 와 같은 위치로 적용됩니다.
<vertical-position> 에 "100%" 설정 시 "bottom" 과 같은 위치로 적용됩니다.

0 보다 작거나 100 보다 큰 값을 설정 시 GridBandControl 의 영역을 벗어난 가상의 위치로 적용됩니다.

값 설정 시 "%" 단위를 생략할 수 없습니다.
- **`<background-size>`** — 배경에 표시될 이미지의 크기를 설정합니다.
- auto: 원본 이미지 크기를 유지합니다.
- cover: 이미지 비율을 유지하는 한도 내에서 배경에 빈 공간이 없도록 가장 크게 설정합니다.
  width 또는 height 길이가 긴 쪽은 잘려서 표시될 수 있습니다.
- contain: 이미지가 잘리지 않고 비율을 유지하는 한도 내에서 가장 크게 설정합니다.
- <length> | <percentage>: 이미지의 width, height 크기 또는 컴포넌트 대비 비율을 설정합니다. 
  width 값만 설정하면 원본 이미지 비율에 따라 height 크기를 자동으로 처리합니다.
  height 값만 설정할 수는 없습니다. 
  음수값은 설정할 수 없습니다.
- **`<linear-gradient>`** — 배경에 표시될 그라데이션을 "'linear-gradient(' [<angle> , ] <color-stop> ')'" 형식으로 설정합니다.

<background-color> 값이 설정되어 있으면 배경색 위로 그라데이션이 표시됩니다.

"linear-gradient ( [방향, 색상값, 색상값, ...] )" 형식으로 그라데이션 방향과 색상을 설정할 수 있습니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<angle>`** — 그라데이션의 표시 방향을 설정합니다.

"to left" 설정 시 오른쪽에서 왼쪽 방향으로 그라데이션이 표시됩니다.
"to right" 설정 시 왼쪽에서 오른쪽 방향으로 그라데이션이 표시됩니다.
"to top" 설정 시 아래쪽에서 윗쪽 방향으로 그라데이션이 표시됩니다.
"to bottom" 설정 시 윗쪽에서 아래쪽 방향으로 그라데이션이 표시됩니다.
"to left top" 설정 시 오른쪽 아래 방향에서 왼쪽 윗 방향으로 그라데이션이 표시됩니다.
"to left bottom" 설정 시 오른쪽 윗 뱡향에서 왼쪽 아래 방향으로 그라데이션이 표시됩니다.
"to right top" 설정 시 왼쪽 아래 방향에서 오른쪽 윗 방향으로 그라데이션이 표시됩니다.
"to right bottom" 설정 시 왼쪽 윗 방향에서 오른쪽 아래 방향으로 그라데이션이 표시됩니다.

값을 설정하지 않으면 "to bottom"으로 적용됩니다.
- **`<color-stop>`** — 그라데이션의 시작점, 끝점, 중간점의 색을 "<startcolor-stop> [<listcolor-stop>] <endcolor-stop>" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 시작점과 끝점의 위치가 결정됩니다.
예를 들어 <angle> 값이 "to left" 이면 GridBandControl 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 GridBandControl 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

<listcolor-stop> 에 그라데이션 중간점의 색을 한개 이상 설정할 수 있으며 <percentage> 값 생략 시 균등하게 표시됩니다.
- **`<startcolor-stop>`** — 그라데이션의 시작점 색을 "<color> [<percentage>'%']" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 시작점 위치가 결정됩니다.
시작점의 <percentage> 값을 "0" 이상으로 설정 시 "시작점~설정값"까지 동일한 색상으로 표시됩니다.
- **`<endcolor-stop>`** — 그라데이션의 끝점 색을 "<color> [<percentage>'%']" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 끝점 위치가 결정됩니다.
끝점의 <percentage> 값을 "100" 이하로 설정 시 "설정값~끝점"까지 동일한 색상으로 표시됩니다.
- **`<listcolor-stop>`** — 그라데이션의 중간점 색을 "<color> [<percentage>'%"] [,<listcolor-stop>]*" 형식으로 설정합니다.

시작점과 끝점 사이에 적용될 중간색을 ","로 구분하여 여러개 설정할 수 있습니다.
뒤에 선언된 색의 <percentage> 값은 먼저 선언된 색의 <percentage> 값보다 커야 합니다.
- **`<color>`** — 그라데이션 색상을 색상이름 또는 색상코드로 설정합니다.
- **`<percentage>`** — <color> 에 해당하는 색이 적용될 위치를 비율값으로 설정합니다.

<angle> 값에 의해 결정된 시작점이 "0%" 로 적용됩니다.
<angle> 값에 의해 결정된 끝점이 "100%" 로 적용됩니다.

0 보다 작거나 100 보다 큰 값을 설정 시 GridBandControl 의 영역을 벗어난 가상의 위치로 적용됩니다.
예를 들어 "150%" 설정 시 시작점에서 끝점까지 거리의 반만큼 끝점에서 벗어난 위치에 <color> 값이 적용됩니다.

<percentage> 값을 생략하면 균등한 위치에 <color> 값이 적용됩니다.
값 설정 시 "%" 단위를 생략할 수 없습니다.
- **`<background-origin>`** — 배경으로 처리될 기준영역을 설정합니다.

"border-box" 설정 시 Border 를 포함한 영역이 배경영역으로 처리됩니다.

"padding-box" 설정 시 Border 의 안쪽 영역이 배경영역으로 처리됩니다.
"padding-box" 설정 시 그라데이션의 시작점, 끝점과 배경이미지의 반복 기준위치가 Border 안쪽 영역으로 처리됩니다.

값을 설정하지 않으면 "padding-box" 로 적용됩니다.
- **`<background-clip>`** — 배경이 실제로 표시될 영역을 설정합니다.

"border-box" 설정 시 Border 를 포함한 영역에 배경이 표시됩니다.
"padding-box" 설정 시 Border 의 안쪽 영역에 배경이 표시됩니다.

값을 설정하지 않으면 <background-origin> 에 설정한 값이 동일하게 적용됩니다.
<background-origin> 값도 설정하지 않았을 경우 "border-box" 로 적용됩니다.
- **`<background-color>`** — 배경에 표시될 색을 색상이름 또는 색상코드로 설정합니다.

<bg-image> 또는 <linear-gradient> 값이 설정되어 있다면 배경색은 배경이미지 또는 그라데이션 아래에 표시됩니다.
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 GridBandControl 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- background 속성값을 설정하지 않으면 undefined 가 설정되고, "transparent" 로 동작합니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.

- 배경의 기준영역과 표시영역은 <background-origin>, <background-clip> 값으로 각각 설정합니다.

- 배경 이미지를 중앙에 위치시키려면 <position> 값을 "center" 또는 "center center" 로 설정하여야 합니다.

- 배경이미지와 배경색을 모두 설정하면 배경색 위에 이미지가 표시됩니다.
   그라데이션과 배경색을 모두 설정하면 배경색 위에 그라데이션이 표시됩니다.

- 그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
   두 값을 동시에 설정 시 오동작이 발생할 수 있습니다.


---

### border-radius

> Components > Component > Grid > Objects > GridBandControl > Property > border-radius

**Description**

GridBandControl 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
GridBandControl.borderRadius[= strborderradius]
```

**Setting Syntax**

```javascript
strborderradius ::= <horizontal-radius>{4} ['/' <vertical-radius>{4}]
```
```javascript
* XCSS
border-radius : 10px;
border-radius : 5px 6px 10px / 5px 10px;

* Script ( normal property )
this.Grid00.head.borderRadius = "10px";
this.Grid00.body.borderRadius = "5px 6px 10px / 5px 10px";
```
- **`<horizontal-radius>`** — 모서리를 둥글게 표시하기 위한 가로크기를 설정합니다.

pixel 단위로 입력하며 스페이스를 구분자로 4개값까지 설정할 수 있습니다.

값을 1회 입력 시 top-left/top-right/bottom-right/bottom-left 모서리의 가로크기로 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top-left/bottom-right, top-right/bottom-left 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top-left, top-right/bottom-left, bottom-right 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top-left, top-right, bottom-right, bottom-left 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
- **`<vertical-radius>`** — 모서리를 둥글게 표시하기 위한 세로크기를 설정합니다.

pixel 단위로 입력하며 스페이스를 구분자로 4개값까지 설정할 수 있습니다.

값을 1회 입력 시 top-left/top-right/bottom-right/bottom-left 모서리의 세로크기로 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top-left/bottom-right, top-right/bottom-left 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top-left, top-right/bottom-left, bottom-right 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top-left, top-right, bottom-right, bottom-left 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.

**Remark**

- border-radius 속성값을 설정하지 않으면 undefined 가 설정되고, "0px" 로 동작합니다. 

- 스크립트로 접근 시 속성명은 "borderRadius" 를 사용해야 합니다.

- <horizontal-radius>와 <vertical-radius>는 "/" 문자로 구분하여 입력합니다.

- Calendar, Combo 와 같이 하위 컨트롤이 존재하는 컴포넌트는 하위컨트롤에도 border-radius 속성을 설정해야 정상적으로 모서리가 표시됩니다.


◆ NRE 제약

- border-radius 속성을 설정하면 모든 테두리가 같은 색으로 적용됩니다.
   -nexa-border 속성에서 top 에 적용된 색이 모든 테두리에 적용됩니다.


---

### color

> Components > Component > Grid > Objects > GridBandControl > Property > color

**Description**

GridBandControl 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
GridBandControl.color[= strcolor]
```

**Setting Syntax**

```javascript
strcolor ::= <NamedColor> | <NumericColor>
```
```javascript
* XCSS
color : #999999;
color : rgb ( 255, 0, 0 );
color : red;

* Script ( normal property )
this.Grid00.head.color = "#999999";
this.Gird00.body.color = "rgb(255,0,0)";
this.Gird00.summary.color = "red";
```
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- color 속성값을 설정하지 않으면 undefined 가 설정되고, "#000000" 으로 동작합니다.


◆ web runtime environment 제약

- XCSS 를 사용하지 않고 rgba(), hsl(), hsla() 메소드를 속성에 직접 설정할 경우 브라우저 버전에 따라 적용되지 않을 수 있습니다.


---

### cssclass

> Components > Component > Grid > Objects > GridBandControl > Property > cssclass

**Description**

GridBandControl 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다.

**Syntax**

```javascript
GridBandControl.cssclass[= strcssclass]
```

**Setting Syntax**

```javascript
strcssclass ::= <ClassName> [ , &ltClassName> ]*
```
```javascript
this.Grid00.head.cssclass = "TestClass";
this.Grid00.body.cssclass = "TestClass,TestClass2";
```
- **`<ClassName>`** — XCSS 에 정의된 classname 을 설정합니다.

**Remark**

- XCSS 에 정의된 ".classname" 형식에서 "." 를 제외하고 "classname" 만 설정합니다.

- Style 에 적용되는 방식은 XCSS Attribute 지정과 동일하게 XCSS 내의 순서대로 적용됩니다.

- Status 를 적용하고자 할 경우는 "classname" 에 Status 를 붙여서 사용합니다.

- ',' 를 사용하여 class 를 다중으로 지정하게 되면 class 가 중첩되어 적용됩니다.
   중첩된 class 의 내용에 중복이 있다면 XCSS 내의 순서상 마지막으로 기술된 것이 적용됩니다.


◆ web runtime environment 제약

- web runtime environment 는 cssclass 명의 첫문자가 숫자일 경우 속성값이 적용되지 않으므로 주의하여야 합니다.


---

### cursor

> Components > Component > Grid > Objects > GridBandControl > Property > cursor

**Description**

GridBandControl 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
GridBandControl.cursor[= strCursor]
```

**Setting Syntax**

```javascript
strCursor ::= 'none' | 'auto' | 'default' | 'copy' | 'crosshair' | 'help' | 'move' | 'not-allowed' | 'pointer' | 'progress' | 'text' | 'wait' | 'ew-resize' | 'e-resize' | 'w-resize' | 'ns-resize' | 'n-resize' | 's-resize' | 'nesw-resize' | 'ne-resize' | 'sw-resize' | 'nwse-resize' | 'nw-resize' | 'se-resize'
```
```javascript
* XCSS
cursor : default;

* Script ( normal property )
this.Grid00.body.cursor = "default";
```
- **`"none"`** — 마우스 포인터를 표시하지 않습니다.

* macOS NRE는 지원하지 않습니다.
- **`"auto"`** — 컴포넌트의 특성에 맞는 포인터가 표시됩니다.

Edit계열 컴포넌트는 "text" 포인터가 표시됩니다.
그외 계열 컴포넌트는 "arrow" 포인터가 표시됩니다.
- **`"default"`** — 시스템의 기본 포인터가 표시됩니다.

일반적으로 "arrow" 포인터가 표시됩니다.
- **`"copy"`** — 화살표와 작은 십자("+") 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"crosshair"`** — 십자("+") 모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"help"`** — 화살표와 작은 물음표 모양의 포인터가 표시됩니다.

* Safari 브라우저는 물음표 모양의 포인터가 표시됩니다.
* macOS NRE 는 지원하지 않습니다.
- **`"move"`** — 십자 화살표 모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"not-allowed"`** — 금지 표지판 모양의 포인터가 표시됩니다.

* Safari 브라우저는 화살표와 금지 표지판 모양의 포인터가 표시됩니다.
* macOS NRE 는 지원하지 않습니다.
- **`"pointer"`** — 손모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"progress"`** — OS 또는 환경에 따라 다른 형태의 포인터가 표시됩니다.

원, 화살표와 모래시계, 화살표와 원 등 다양한 형태로 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"text"`** — 아이("I") 모양의 포인터가 표시됩니다.
- **`"wait"`** — OS 또는 환경에 따라 다른 형태의 포인터가 표시됩니다.

원, 모래시계, 시계 등 다양한 형태로 표시됩니다.
- **`"ew-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"e-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"w-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"ns-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"n-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"s-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"nesw-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"ne-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"sw-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"nwse-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"nw-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"se-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

**Remark**

- cursor 속성값을 설정하지 않으면 undefined 가 설정되고 "auto" 로 동작합니다.

- disable 상태인 서브컨트롤이 있는 컴포넌트의 경우 마우스 포인터는 서브컨트롤 영역에서
   서브컨트롤의 disable status값이 적용되지 않고, 컴포넌트의 enable status 설정값이 적용됩니다.
   서브컨트롤과 컴포넌트가 모두 disable 상태일 때는 parent 의 enable status 설정값이 적용됩니다.


---

### font

> Components > Component > Grid > Objects > GridBandControl > Property > font

**Description**

GridBandControl 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**

```javascript
GridBandControl.font[= strfont]
```

**Setting Syntax**

```javascript
strfont ::= [<font-style>] [<font-weight>] <font-size> ['/'<line-height>] <font-family>

<font-style> ::= 'normal' | 'italic'
<font-weight> ::= 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
<font-size> ::= <nSize> 'px'|'pt'|'em'|'rem'
<line-height> ::= 'normal' | <nValue> | <nPixel>'px' | <nPercent>'%'
<font-family> ::= <font-name> [',' <font-name>]*
```
```javascript
* XCSS
font : bold 12pt/30px arial, sans-serif;

* Script ( normal property )
this.Grid00.body.font = "bold 12pt/30px arial, sans-serif";
```
- **`<font-style>`** — 폰트의 스타일을 설정합니다.

"normal" 설정 시 스타일이 적용되지 않습니다.
"italic" 설정 시 기울임 스타일이 적용됩니다.
- **`<font-weight>`** — 폰트의 굵기를 설정합니다.

"normal" 설정 시 굵기가 적용되지 않습니다.
"bold" 설정 시 굵은 폰트가 적용됩니다.

"100"~"900" 로 설정 시 설정한 굵기로 폰트가 적용됩니다.
"100"~"900" 로 설정 시 굵기에 해당하는 폰트가 정의되어 있어야 합니다.
- **`<font-size>`** — 폰트 크기의 단위는 아래와 같이 절대 길이 단위와 상대 길이 단위로 설정할 수 있습니다.
단위를 지정하지 않으면 속성값이 적용되지 않습니다.
- 절대 길이 단위: pixel("px"), point("pt")
- 상대 길이 단위: "em", "rem"

폰트 크기 단위를 "em", "rem"으로 설정한 경우에는 아래와 같이 폰트 크기가 계산됩니다.
- "em": 상위 컴포넌트 font-size 기준으로 상대적인 크기를 설정
- "rem": MainFrame font-size 기준으로 상대적인 크기를 설정
- **`<nSize>`** — 폰트 크기 단위에 따라 정수 또는 소수로 설정합니다.
음수값은 설정할 수 없습니다.
- "px", "pt": 정수
- "em", "rem": 정수 또는 소수
- **`<line-height>`** — 텍스트가 여러줄로 표시되는 경우 줄 사이의 간격을 설정합니다.

음수값을 설정할 수 없습니다.

"normal" 설정 시 줄 사이의 간격을 설정하지 않습니다.
"normal" 설정 시 웹브라우저마다 줄 사이의 간격이 다르게 적용됩니다.
"normal" 설정 시 Nexacro Runtime Environment는 폰트 크기에 곱할 값(<nValue>값)이 "1.15" 일 때와 동일하게 동작합니다.
- **`<nValue>`** — 폰트 크기에 곱할 값을 설정합니다.

계산 결과값이 줄 사이 간격으로 적용됩니다.
- **`<nPixel>`** — 줄 사이의 간격을 pixel 단위의 숫자로 설정합니다.

"px" 단위를 생략할 수 없습니다.
- **`<nPercent>`** — 폰트 크기에 곱할 비율값을 설정합니다.

계산 결과값이 줄 사이 간격으로 적용됩니다.
"%" 단위를 생략할 수 없습니다.
- **`<font-family>`** — 폰트 이름을 리스트로 설정합니다.

콤마(",")로 구분하여 폰트 이름을 여러개 설정할 수 있습니다.
먼저 선언된 폰트가 우선적으로 적용됩니다.
선언된 폰트가 시스템에 없을 경우 선언된 순서대로 사용 가능한 폰트를 적용합니다.
선언된 폰트가 모두 없을 경우 시스템 기본 폰트가 적용됩니다.
- **`<font-name>`** — 폰트의 이름을 설정합니다.

**Remark**

- font 속성값을 설정하지 않으면 undefined 가 설정되고, "12pt/normal Verdana" 로 동작합니다.

- font 속성의 폰트 크기가 변경되면 <line-height> 에 적용된 값에 따라 줄간격이 변경될 수 있습니다.

- <font-weight> 를 수치로 설정 시 "400" 값이 일반적인 굵기로 적용되고, "700" 값이 "bold" 로 적용됩니다.
   폰트에 수치값에 해당하는 폰트굵기가 없다면 "400" 과 "700" 중 가까운 값으로 표시됩니다.

- UserFont 사용 시 환경별로 지원하는 포맷정보는 "Appendix > Supported UserFont" 항목을 참고하세요.


◆ WRE 제약

- -nexa-text-align 속성값이 "right" 일 때 font 속성에 "italic" 을 설정하면 마지막 텍스트의 기울어진 부분이 잘려서 표시될 수 있습니다.
   웹브라우저에서 텍스트영역을 일반글자 기준으로 처리한 후 기울임을 적용하면서 발생하는 문제입니다.


---

### letter-spacing

> Components > Component > Grid > Objects > GridBandControl > Property > letter-spacing

**Description**

GridBandControl 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다.

**Syntax**

```javascript
GridBandControl.letterSpacing[= strspace]
```

**Setting Syntax**

```javascript
strspace ::= 'normal' | <nVal> ['px']
```
```javascript
* XCSS
letter-spacing : 2px ;

* Script ( normal property )
this.Grid00.body.letterSpacing = "2px";
```
- **`"normal"`** — 문자 사이의 간격(자간)을 설정하지 않습니다.
- **`<nVal>`** — 문자 사이의 간격(자간)을 pixel 단위로 설정합니다.

스크립트 작성 시에는 "px" 단위 표기를 생략할 수 있습니다.
(XCSS 작성 시에는 "px" 단위를 포함해 작성해야 합니다).

**Remark**

- letter-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "letterSpacing"을 사용해야 합니다.


---

### name

> Components > Component > Grid > Objects > GridBandControl > Property > name

**Description**

GridBandControl 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
GridBandControl.name
```

**Setting Syntax**

- **`name`** — Control 의 이름을 설정합니다.

**Remark**

- 컴포넌트 내부에 정의된 Control 은 name 을 설정할 수 없습니다.


---

### opacity

> Components > Component > Grid > Objects > GridBandControl > Property > opacity

**Description**

GridBandControl 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
GridBandControl.opacity[= stropacity]
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8;
opacity : 80%;

* Script ( normal property )
this.Grid00.body.opacity = "0.8";
this.Grid00.body.opacity(0.8);
this.Grid00.body.opacity = "80%";
```
- **`strOpacity`** — 0.0 ~ 1.0 사이의 값 또는 0.0% ~ 100.0% 사이의 값을 지정합니다.
0(또는 0%)을 설정하면 완전 투명, 1(또는 100%)을 설정하면 완전 불투명으로 처리됩니다.
1 이상의 값은 1로, 0 이하의 값은 0으로 처리됩니다. 마찬가지로 100% 이상의 값은 100%로, 0% 이하의 값은 0%로 처리됩니다.

XCSS는 숫자 또는 퍼센트 값으로만 설정할 수 있습니다.
Script는 숫자 또는 문자(숫자, 퍼센트 값)로 설정할 수 있습니다.

**Remark**

- opacity 속성값을 설정하지 않으면 undefined 가 설정되고, 1 로 동작합니다.

- Div 와 같이 자식 컴포넌트를 가질 수 있는 컴포넌트에 opacity 속성을 적용하면 자식 컴포넌트도 함께 적용됩니다.

- 부모와 자식 컴포넌트에 각각 opacity 속성이 설정되어 있으면 자식 컴포넌트의 투명도는 부모의 투명도에 추가적으로 적용됩니다.
   예를 들어 부모의 opacity가 0.5 이고 자식의 opacity가 0.4 이면 결과적으로 자식 컴포넌트는 0.2 의 투명도가 적용됩니다.


---

### tooltiptext

> Components > Component > Grid > Objects > GridBandControl > Property > tooltiptext

**Description**

GridBandControl 영역에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다.

**Syntax**

```javascript
GridBandControl.tooltiptext[= strToolTipText]
```

**Setting Syntax**

```javascript
this.Grid00.setBandProperty("body", "tooltiptext", "This is ToolTip Text')";
this.Grid00.setBandProperty = "body", "tooltiptext", "";          // 풍선 도움말이 표시되지 않습니다.
this.Grid00.setBandProperty("body", "tooltiptext", null);        // Grid 컴포넌트의 풍선 도움말이 표시됩니다.
```
- **`strToolTipText`** — 풍선도움말에 표시할 텍스트를 설정합니다.

빈문자열(EmptyString) 설정 시 풍선도움말이 표시되지 않습니다.
null 또는 undefined 설정 시 Grid 컴포넌트의 풍선도움말이 표시됩니다.

**Remark**

- tooltiptext 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- tooltiptext 속성이 undefined 로 적용되면 상위 영역(Grid)의 tooltiptext 속성값이 적용됩니다.
   상위 영역의 tooltiptext 속성값이 undefined 일 경우는 다시 상위 영역의 tooltiptext 속성값이 적용됩니다. 

- 마우스 포인터가 GridBandControl 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.


◆ Desktop WRE 제약

- 풍선도움말은 브라우저의 기능을 활용하므로 브라우저 사양에 따라 스타일에 차이가 있을 수 있습니다.
   NRE는 Chrome 의 스타일과 동일하게 적용됩니다.


---

### tooltiptype

> Components > Component > Grid > Objects > GridBandControl > Property > tooltiptype

**Description**

GridBandControl 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다.

**Syntax**

```javascript
GridBandControl.tooltiptype[= enumTooltipType]
```

**Setting Syntax**

```javascript
enumTooltipType ::= 'default' | 'hover' | 'inplace' | 'default,mouseleave' | 'hover,mouseleave' | 'inplace,mouseleave'
```
```javascript
this.Grid00.body.tooltiptype = "hover";
```
- **`"default"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 GridBandControl 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"hover"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 GridBandControl 영역내에 멈춰서 일정시간이 경과하면 풍선도움말이 사라집니다.
GridBandControl 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경되거나 사라진 풍선도움말이 다시 표시됩니다.
- **`"inplace"`** — GridBandControl 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 GridBandControl 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"default,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 GridBandControl 영역에 있으면 풍선도움말이 사라지지 않습니다.
- **`"hover,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 GridBandControl 영역에 있으면 풍선도움말이 사라지지 않습니다.
GridBandControl 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경됩니다.
- **`"inplace,mouseleave"`** — GridBandControl 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 GridBandControl 영역에 있으면 풍선도움말이 사라지지 않습니다.

**Remark**

- tooltiptype 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- 마우스 포인터가 GridBandControl 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.

- 풍선도움말이 표시된 상태에서 tooltiptext 속성값을 변경하면 tooltiptype 속성값에 관계없이 풍선도움말이 사라집니다.

- 표시되었다가 사라진 풍선도움말은 마우스 포인터가 GridBandControl 영역을 나갔다가 들어오면 다시 표시됩니다.

- 마우스 포인터가 GridBandControl 영역에서 벗어나면 풍선도움말이 사라집니다.

- 풍선도움말의 크기는 풍선도움말에 표시되는 텍스트의 길이와 크기에 맞춰 자동으로 조정됩니다.

- 풍선도움말에 표시되는 텍스트의 글꼴과 크기는 변경하실 수 없습니다.


---

### word-spacing

> Components > Component > Grid > Objects > GridBandControl > Property > word-spacing

**Description**

GridBandControl 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다.

**Syntax**

```javascript
GridBandControl.wordSpacing[= strwordspacing]
```

**Setting Syntax**

```javascript
strWordSpacing ::= 'normal' | <nVal>'px'
```
```javascript
* XCSS
word-spacing : 30px;

* Script ( normal property )
this.Grid00.body.wordSpacing = "30px";
```
- **`"normal"`** — 텍스트의 단어 사이 간격을 설정하지 않습니다.

현재 font 에 맞는 기본형태로 텍스트가 표시됩니다.
- **`<nVal>`** — pixel 단위로 텍스트의 단어 사이 간격을 설정합니다.

**Remark**

- word-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "wordSpacing"을 사용해야 합니다.


---

## Components > Component > Grid > GridCellControl

### GridCellControl

> Components > Component > Grid > Objects > GridCellControl

**Description**

Cell 은 Grid 가 출력되는 최소단위로 Band 내에서 고유한 위치에 표시되는 오브젝트입니다.

**Remark**

- 각 Cell 은 해당 Band 내에서 고유한 Cell 인덱스를 갖습니다.
   Cell 인덱스는 각 Band 별로 왼쪽에서 오른쪽으로 차례로 Cell 에 부여됩니다.
   SubRow 가 있으면 왼쪽에서 오른쪽으로 Cell 인덱스를 부여한 후 다음 SubRow 에 부여됩니다.
   MergeCell 과 SubCell 은 병합된 영역 전체가 첫번째 Cell 의 Cell 인덱스를 공유합니다.
  
- Cell 인덱스는 바인드 된 DataSet 의 데이터 갯수와는 관계가 없으며, Grid 에 정의된 포맷과 관계가 있습니다.
  
- SubCell 은 관련 메소드(getSubCellProperty() 등)를 사용하여 각 Cell 을 별도의 Cell 로 처리할 수 있습니다.
   SubCell 의 각 Cell 은 별도의 SubCell 인덱스를 갖습니다.
   MergeCell 은 전체 Cell 을 하나의 Cell 로 처리하며 각 Cell 을 별도로 처리할 수 없습니다.
  
- Cell 의 일부 속성은 DataSet 의 Column 을 바인드 하거나 Expression 수식을 설정할 수 있습니다.
   Expression 수식에는 바인드 된 DataSet 의 메소드, Column ID, 접근가능한 영역에 정의된 함수 등을 사용할 수 있습니다.
  
- Expression 수식에 아래의 예약어를 사용하면 수식 실행 시 예약어에 상응하는 값으로 대체됩니다.
  > this : 수식이 정의된 Cell 오브젝트. ( Form 의 지시어가 아닙니다.)
  > comp : Cell 을 갖는 Grid 컴포넌트.
  > dataset : Grid 에 바인드된 DataSet 컴포넌트.
  > currow : 수식이 계산하고 있는 행(Row) 의 인덱스.
  > [Column ID] : 수식이 계산하고 있는 행(Row) 의 DataSet Column 값.
  > Grid 에 바인드 된 DataSet 의 속성과 메소드.
      ex) "dataset.rowcount", "dataset.colcount", "dataset.rowposition", "dataset.getCount()" 등

**Property**

| Name | Description |
| --- | --- |
| accessibilityaction | GridCellControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다. |
| accessibilitydesclevel | GridCellControl 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다. |
| accessibilitydescription | GridCellControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다. |
| accessibilityenable | GridCellControl 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다. |
| accessibilitylabel | Cell에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다. |
| accessibilityrole | GridCellControl에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다. |
| autosizecol | Column 의 너비가 자동조절 되는 방식을 설정하는 속성입니다. |
| autosizerow | Row 의 높이가 자동조절 되는 방식을 설정하는 속성입니다. |
| background | Cell 의 배경 영역을 설정하는 속성입니다. |
| border-radius | Cell 의 모서리 모양을 설정하는 속성입니다. |
| calendarautoselect | Cell 의 edittype 속성값이 "date" 일 경우 편집영역이 활성화 되면 텍스트를 전체선택 할지 설정하는 속성입니다. |
| calendarbackgroundcol | Cell이 Calendar 형식일 때 Calendar 의 특정날짜에 배경색을 표시하기 위해 calendardataset 속성에 설정된 Dataset 오브젝트의 Column을 설정하는 속성입니다. |
| calendarbordercol | Cell이 Calendar 형식일 때 Calendar 의 특정날짜에 테두리을 표시하기 위해 calendardataset 속성에 설정된 Dataset 오브젝트의 Column을 설정하는 속성입니다. |
| calendarbuttonsize | Cell 이 Calendar 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다. |
| calendardataset | Cell이 Calendar 형식일 때 Calendar 에 특정날짜를 표시하기 위해 Dataset 오브젝트 ID를 설정하는 속성입니다. |
| calendardatecol | Cell이 Calendar 형식일 때 Calendar 에 특정날짜를 표시하기 위해 calendardataset 속성에 설정된 Dataset 오브젝트의 Column을 설정하는 속성입니다. |
| calendardateformat | Cell 의 displaytype 속성값이 "date" 또는 "calendarcontrol" 일 경우 표시되는 날짜의 형식을 설정하는 속성입니다. |
| calendardaysize | Cell 이 Calendar 형식일 때 팝업으로 표시되는 달력의 각 날짜영역크기를 설정하는 속성입니다. |
| calendardisplayinvalidtext | Cell 이 Calendar 형식일 때 바인드 된 데이터값이 유효하지 않으면 대체되어 표시할 문자열을 설정하는 속성입니다. |
| calendardisplayinvalidtype | Cell 이 Calendar 형식일 때 바인드 된 데이터값이 유효하지 않으면 대체되어 표시할 형식을 설정하는 속성입니다. |
| calendardisplaynulltext | Cell 의 calendardisplaynulltype 속성값이 "nulltext" 일 경우 Cell 에 표시할 텍스트를 설정하는 속성입니다. |
| calendardisplaynulltype | Cell 의 displaytype 속성값이 "date" 또는 "calendarcontrol" 이고 바인드 된 값이 "null" 인 경우 Cell 에 표시되는 값을 설정하는 속성입니다. |
| calendareditformat | Cell 의 edittype 속성값이 "date" 일 경우 입력받는 날짜의 형식을 설정하는 속성입니다. |
| calendarheadformat | Cell 이 Calendar 형식일 때 팝업달력의 상단에 표시되는 년/월의 순서를 설정하는 속성입니다. |
| calendarheadheight | Cell 이 Calendar 형식일 때 팝업달력에서 년/월이 표시되는 Head 영역의 높이를 설정하는 속성입니다. |
| calendarpopupsize | Cell 이 Calendar 형식일 때 팝업으로 표시되는 달력의 크기를 설정하는 속성입니다. |
| calendarpopuptype | Cell 이 Calendar 형식일 때 팝업달력(DatePicker)이 표시되는 방식을 설정하는 속성입니다. |
| calendarshowmonthspin | Cell 이 Calendar 형식일 때 팝업달력의 상단에 월 변경버튼을 표시할 지 설정하는 속성입니다. |
| calendarshowyearspin | Cell 이 Calendar 형식일 때 팝업달력의 상단에 연도 변경버튼을 표시할 지 설정하는 속성입니다. |
| calendartextcolorcol | Cell이 Calendar 형식일 때 Calendar 의 특정날짜에 날짜색을 표시하기 위해 calendardataset 속성에 설정된 Dataset 오브젝트의 Column을 설정하는 속성입니다. |
| calendartype | Cell 이 Calendar 형식일 때 Calendar가 화면에 표시되는 형식을 설정하는 속성입니다. |
| calendarusetrailingday | Cell 이 Calendar 형식일 때 팝업달력의 시작/끝 여백에 전/후 달의 날짜를 표시할지 설정하는 속성입니다. |
| calendarweekformat | Cell 이 Calendar 형식일 때 팝업달력에 요일이 표시되는 형식을 설정하는 속성입니다. |
| checkboxfalsevalue | Cell 이 CheckBox 형식일 때 False 로 처리되는 값을 문자열로 설정하는 속성입니다. |
| checkboxsize | Cell 이 CheckBox 형식일 때 CheckBox 의 크기를 설정하는 속성입니다. |
| checkboxtruevalue | Cell 이 CheckBox 형식일 때 True 로 처리되는 값을 문자열로 설정하는 속성입니다. |
| col | Cell 에 정의된 Column 인덱스 값이 저장된 읽기전용 속성입니다. |
| color | Cell 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| colspan | Cell 에 병합된 Column 의 갯수가 저장된 읽기전용 속성입니다. |
| comboautoselect | Cell 이 Combo 형식일 때 편집영역이 활성화 되면 텍스트를 전체선택 할지 설정하는 속성입니다. |
| combobuttonsize | Cell 이 Combo 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다. |
| combocodecol | Cell 이 Combo 형식일 때 Cell 의 아이템 리스트에서 코드값으로 사용될 Column 을 설정하는 속성입니다. |
| combodatacol | Cell 이 Combo 형식일 때 Cell 의 아이템 리스트에서 데이터값으로 사용될 Column 을 설정하는 속성입니다. |
| combodataset | Cell 이 Combo 형식일 때 Cell 의 아이템 리스트를 구성할 DataSet 의 ID를 설정하는 속성입니다. |
| combodisplaynulltext | Cell 이 Combo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시할 텍스트를 설정하는 속성입니다. |
| combodisplaynulltype | Cell 이 Combo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시되는 값의 종류를 설정하는 속성입니다. |
| combodisplayrowcount | Cell 이 Combo 형식일 때 아이템 리스트에 한번에 표시될 아이템의 갯수를 설정하는 속성입니다. |
| comboimemode | Cell 이 Combo 형식일 때 편집창에서 사용될 기본 입력 언어를 설정하는 속성입니다. |
| comboitemheight | Cell 이 Combo 형식일 때 아이템 리스트의 각 행높이를 설정하는 속성입니다. |
| combopopupsize | Cell 이 Combo 형식일 때 팝업으로 표시되는 아이템 리스트의 크기를 설정하는 속성입니다. |
| combopopuptype | Cell 이 Combo 형식일 때 아이템 리스트가 표시되는 방식을 설정하는 속성입니다. |
| comboscrollbarsize | Cell 이 Combo 형식일 때 아이템 리스트에 표시되는 스크롤바의 너비를 설정하는 속성입니다. |
| combotype | Cell 이 Combo 형식일 때 동작하는 방법을 설정하는 속성입니다. |
| controlautosizingtype | Cell 이 컨트롤 형식일 때 Cell 크기에 맞게 컨트롤 크기를 자동 조절할 지 설정하는 속성입니다. |
| cssclass | Cell 의 Style을 XCSS 파일에 정의된 class로 설정하는 속성입니다. |
| cursor | Cell 영역내에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| displaytype | Cell 이 편집상태가 아닐 때 바인드 된 데이터가 화면에 표시되는 형식을 설정하는 속성입니다. |
| editautoselect | Cell 의 edittype 속성값이 "text" 일 경우 편집영역이 활성화 될 때 텍스트를 전체선택 할지 설정하는 속성입니다. |
| editimeaction | 키보드에 하단 모서리에 표시되는 사용자 작업 버튼 UI와 동작을 설정하는 속성입니다. |
| editimemode | Cell 의 edittype 속성값이 "text" 일 경우 Cell 의 편집창에서 사용될 기본 입력 언어를 설정하는 속성입니다. |
| editinputfilter | Cell 의 edittype 속성값이 "text" 일 경우 Cell 편집 시 입력을 제한 시킬 문자를 타입별로 설정하는 속성입니다. |
| editinputmode | Cell 의 edittype 속성값이 "text" 일 경우 Cell 에 입력되는 영문자를 대문자 또는 소문자로 변환할지 설정하는 속성입니다. |
| editinputtype | Cell 의 edittype 속성값이 "text" 일 경우 Cell 에 입력을 허용할 문자를 타입별로 설정하는 속성입니다. |
| editmaxlength | Cell 의 edittype 속성값이 "text" 일 경우 Cell 에 입력할 수 있는 문자열의 최대길이를 설정하는 속성입니다. |
| edittype | Cell 이 포커스를 받아 표시되는 편집창의 형식을 설정하는 속성입니다. |
| expandchar | Cell 의 확장버튼에 표시될 텍스트를 설정하는 속성입니다. |
| expandimage | Cell 의 확장버튼에 텍스트와 함께 표시할 이미지의 위치 경로를 설정하는 속성입니다. |
| expandshow | Cell 의 오른쪽에 확장버튼을 표시할지 설정하는 속성입니다. |
| expandsize | Cell 의 오른쪽에 표시되는 확장버튼의 크기를 설정하는 속성입니다. |
| expr | Cell 에 표시될 텍스트를 동적으로 생성하는 수식을 설정하는 속성입니다. |
| font | Cell 에서 사용하는 폰트를 설정하는 속성입니다. |
| imagestretch | Cell 의 크기에 맞게 이미지가 확대/축소되는 방식을 설정하는 속성입니다. |
| letter-spacing | GridCellControl 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다. |
| locale | Cell 에 적용될 국가 및 언어(locale)를 설정하는 속성입니다. |
| maskeditautoselect | Cell 의 edittype 속성값이 "mask" 일 경우 편집영역이 활성화 될 때 텍스트를 전체선택 할지 설정하는 속성입니다. |
| maskeditclipmode | Cell 의 maskeditformat 속성에 설정된 형식 중 입력하지 않은 마스크에 대한 처리 방법을 결정하는 속성입니다. |
| maskeditformat | Cell 의 edittype 속성값이 "mask" 일 때 입력 받을 문자의 형식을 지정하는 속성입니다. |
| maskeditimeaction | 키보드에 하단 모서리에 표시되는 사용자 작업 버튼 UI와 동작을 설정하는 속성입니다. |
| maskeditlimitbymask | Cell 의 edittype 속성값이 "mask" 이고 maskedittype 속성값이 "number" 일 때, maskeditformat 속성의 마스크 값이 적용되는 부분을 설정하는 속성입니다. |
| maskeditmaskchar | Cell 의 maskeditformat 속성에 정의된 마스크 문자에 대응하는 문자를 지정하는 속성입니다. |
| maskeditpostfixtext | 표시되는 텍스트 뒤에 붙여서 표시할 문자열을 지정하는 속성입니다. |
| maskedittrimtype | Cell 의 maskeditformat 속성에 설정된 형식 중 좌우 공백에 대한 처리 방법을 결정하는 속성입니다. |
| maskedittype | Cell 의 edittype 속성값이 "mask" 일 때 Cell 에 입력되는 값의 형식을 설정하는 속성입니다. |
| multicomboautoselect | Cell이 MultiCombo 형식일 때 편집영역이 활성화되면 텍스트를 전체선택 할지 설정하는 속성입니다. |
| multicombobuttonsize | Cell이 MultiCombo 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다. |
| multicombocodecol | Cell이 MultiCombo 형식일 때 Cell의 아이템 리스트에서 코드값으로 사용될 Column을 설정하는 속성입니다. |
| multicombocounttextformat | Cell이 MultiCombo 형식이고 multicomboedittype 속성값이 "count"일 때 선택된 아이템을 표시할 텍스트를 설정하는 속성입니다. |
| multicombodatacol | Cell이 MultiCombo 형식일 때 Cell의 아이템 리스트에서 데이터값으로 사용될 Column을 설정하는 속성입니다. |
| multicombodataset | Cell이 MultiCombo 형식일 때 Cell 의 아이템 리스트를 구성할 DataSet의 ID를 설정하는 속성입니다. |
| multicombodisplaynulltext | Cell이 MultiCombo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시할 텍스트를 설정하는 속성입니다. |
| multicombodisplaynulltype | Cell 이 MultiCombo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시되는 값의 종류를 설정하는 속성입니다. |
| multicombodisplayrowcount | Cell이 MultiCombo 형식일 때 아이템 리스트에 한 번에 표시될 아이템의 개수를 설정하는 속성입니다. |
| multicomboedittype | Cell이 MultiCombo 형식일 때 선택된 아이템의 표시 방식을 설정하는 속성입니다. |
| multicomboimemode | Cell이 MultiCombo 형식일 때 편집창에서 사용될 기본 입력 언어를 설정하는 속성입니다. |
| multicomboitemheight | Cell이 MultiCombo 형식일 때 아이템 리스트의 각 행의 높이를 설정하는 속성입니다. |
| multicombopopupsize | Cell이 MultiCombo 형식일 때 팝업으로 표시되는 아이템 리스트의 크기를 설정하는 속성입니다. |
| multicombopopuptype | Cell이 MultiCombo 형식일 때 아이템 리스트가 표시되는 방식을 설정하는 속성입니다. |
| multicomboreadonlycolumn | Cell이 MultiCombo 형식일 때 아이템 readonly 여부 설정 시 사용될 Column을 설정하는 속성입니다. |
| multicomboscrollbarsize | Cell이 MultiCombo 형식일 때 아이템 리스트에 표시되는 스크롤바의 너비를 설정하는 속성입니다. |
| multicomboshowselectallcheckbox | Cell이 MultiCombo 형식일 때 아이템 리스트 상단에 아이템 전체를 선택 또는 선택해제하는 체크박스의 표시 여부를 설정하는 속성입니다. |
| multicombotextseparator | Cell 이 MultiCombo 형식일 때 2개 이상의 text 속성값 설정 시 구분자로 사용할 값을 설정하는 속성입니다. |
| multicombotype | Cell이 MultiCombo 형식일 때 동작하는 방법을 설정하는 속성입니다. |
| name | GridCellControl 의 이름을 설정하는 속성입니다. |
| -nexa-background-odd | Cell 의 Row 인덱스가 홀수일 때 Cell 의 배경 영역을 설정하는 속성입니다. |
| -nexa-border | Cell 의 right 와 bottom 테두리를 설정하는 속성입니다. |
| -nexa-color-odd | Cell 의 Row 인덱스가 홀수일 때 Cell 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| -nexa-edge | Cell 의 테두리(Border) 안쪽에 표시될 edge 이미지를 설정하는 속성입니다. |
| -nexa-padding | Cell 영역의 안쪽 여백을 설정하는 속성입니다. |
| -nexa-rtl-background-image | GridCellControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| -nexa-rtl-background-image-odd | Grid 의 rtl 속성이 true 로 적용될 때 Row 인덱스가 홀수인 Cell 의 배경에 표시될 이미지를 설정하는 속성입니다. |
| -nexa-rtl-edge-image | GridCellControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-text-align | Cell 에 표시되는 텍스트 또는 컨텐츠의 가로 정렬 방식을 설정하는 속성입니다. |
| -nexa-text-decoration | Cell 에 표시되는 텍스트에 적용할 효과를 설정하는 속성입니다. |
| -nexa-vertical-align | Cell 에 표시되는 텍스트 또는 컨텐츠의 세로 정렬 방식을 설정하는 속성입니다. |
| -nexa-word-wrap | Cell 에 표시되는 텍스트가 출력영역보다 길 경우 자동으로 줄바꿈 되도록 설정하는 속성입니다. |
| opacity | Cell 영역의 투명도를 설정하는 속성입니다. |
| progressbarblockgap | Cell 의 displaytype 속성값이 "progressbarcontrol" 일 경우 ProgressBar 의 진행 상태를 표시하는 블럭의 간격을 설정하는 속성입니다. |
| progressbarblocksize | Cell 의 displaytype 속성값이 "progressbarcontrol" 일 경우  ProgressBar 의 진행 상태를 표시하는 블럭의 너비를 설정하는 속성입니다. |
| progressbardirection | Cell 의 displaytype 속성값이 "progressbarcontrol" 일 경우 ProgressBar 의 진행 방향을 설정하는 속성입니다. |
| progressbarsmooth | Cell 의 displaytype 속성값이 "progressbarcontrol" 일 경우 ProgressBar 가 표시되는 형태를 설정하는 속성입니다. |
| radioitemcodevalue | Cell이 radioitem 형식일 때 선택상태로 처리되는 값을 문자열로 설정하는 속성입니다. |
| radioitemsize | Cell 이 radioitem 형식일 때 radioitem 의 크기를 설정하는 속성입니다. |
| row | Cell 이 밴드내에서 위치하는 Row 인덱스 값이 저장된 읽기전용 속성입니다. |
| rowspan | Cell 에 병합된 Sub Row 의 갯수가 저장된 읽기전용 속성입니다. |
| rtl | GridCellControl 에서 내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다. |
| subcell | 병합(Merge) 된 Cell 일 때 실제 병합된 Cell 의 갯수가 저장된 읽기전용 속성입니다. |
| subsumtext | keystring 속성에 의해 그룹핑되면 생성되는 논리적 레코드에 표시할 텍스트를 설정하는 속성입니다. |
| suppress | Cell 에 Suppress 기능을 설정하는 속성입니다. |
| suppressalign | Cell 에 Suppress 기능이 설정되어 있을때 합쳐서 표시되는 텍스트의 위치를 설정하는 속성입니다. |
| text | Cell 에 표시될 텍스트를 설정하는 속성입니다. |
| textareaacceptsenter | Cell 의 edittype 속성값이 "textarea" 일 때 편집영역에서 Enter 키 입력의 처리방식을 설정하는 속성입니다. |
| textareaautoselect | Cell 의 edittype 속성값이 "textarea" 일 경우 편집영역이 활성화 될 때 텍스트를 전체선택 할지 설정하는 속성입니다. |
| textareaimemode | Cell 의 edittype 속성값이 "textarea" 일 경우 Cell 의 편집창에서 사용될 기본 입력 언어를 설정하는 속성입니다. |
| textareainputfilter | Cell 의 edittype 속성값이 "textarea" 일 경우 Cell 편집 시 입력을 제한 시킬 문자를 타입별로 설정하는 속성입니다. |
| textareainputmode | Cell 의 edittype 속성값이 "textarea" 일 경우 Cell 에 입력되는 영문자를 대문자 또는 소문자로 변환할지 설정하는 속성입니다. |
| textareainputtype | Cell 의 edittype 속성값이 "textarea" 일 경우 Cell 에 입력을 허용할 문자를 타입별로 설정하는 속성입니다. |
| textareamaxlength | Cell 의 edittype 속성값이 "textarea" 일 경우 Cell 에 입력할 수 있는 문자열의 최대길이를 설정하는 속성입니다. |
| textareascrollbarsize | Cell 이 TextArea 형식일 때 표시되는 스크롤바의 크기를 설정하는 속성입니다. |
| textareascrollbartype | Cell 의 edittype 속성값이 "textarea" 일 경우 편집창에 스크롤바가 표시되는 형식을 설정하는 속성입니다. |
| textareascrolltype | Cell 의 edittype 속성값이 "textarea" 일 경우 편집창에서 사용되는 스크롤의 종류를 설정하는 속성입니다. |
| tooltiptext | Cell 영역에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다. |
| tooltiptype | Cell 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다. |
| treecheck | Cell 이 트리 형식일 때 체크박스의 값으로 사용될 Column을 설정하는 속성입니다. |
| treelevel | Cell 이 트리 형식일 때 트리의 레벨값으로 사용될 Column을 설정하는 속성입니다. |
| treestartlevel | Cell 이 트리 형식일 때 트리 레벨의 시작값을 설정하는 속성입니다. |
| treestate | Cell 이 트리 형식일 때 트리의 상태값으로 사용될 Column을 설정하는 속성입니다. |
| word-spacing | Cell 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다. |

**Status**

컴포넌트가 비활성화된 상태

**Control**

| Name | TypeName |
| --- | --- |
| cellbutton | nexacro.Button |
| cellcalendar | nexacro.Calendar |
| cellcheckbox | nexacro.CheckBox |
| cellcombo | nexacro.Combo |
| celledit | nexacro.Edit |
| cellmaskedit | nexacro.MaskEdit |
| celltreeline | nexacro.CellTreeLineControl |
| cellprogressbar | nexacro.ProgressBar |
| celltextarea | nexacro.TextArea |
| celltreeitem | nexacro.CellTreeItemControl |
| subcell | nexacro.CellSubCellControl |
| cellimage | nexacro.ImageAreaControl |
| cellexpandbutton | nexacro.Button |
| cellselection | nexacro.GridSelectionControl |
| cellradioitem | nexacro.RadioItemControl |
| cellmulticombo | nexacro.MultiCombo |


---

### 속성 (Properties)

### -nexa-background-odd

> Components > Component > Grid > Objects > GridCellControl > Property > -nexa-background-odd

**Description**

Cell 의 Row 인덱스가 홀수일 때 Cell 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.-nexa-background-odd
```

**Setting Syntax**

```javascript
-nexa-background-odd ::= [<bg-image> | <linear-gradient>] [<background-origin> [<background-clip>]] [<background-color>]

<bg-image> ::= 'none' | <imageurl> [<repeat-style>] [<position>]
<imageurl> ::= 'URL(' <Theme-Image> | <Web-Image> ')'
<repeat-style> ::= 'repeat-x' | 'repeat-y' | 'repeat' | 'no-repeat'
<position> ::= <horizontal-position> <vertical-position>
<horizontal-position> ::= 'left' | 'center' | 'right' | <pos-percentage> '%'
<vertical-position> ::= 'top' | 'center' | 'bottom' | <pos-percentage> '%'

<linear-gradient> ::= 'linear-gradient(' [<angle> , ] <color-stop> ')'
<angle> ::= 'to left' | 'to right' | 'to top' | 'to bottom' | 'to left top' | 'to left bottom' | 'to right top' | 'to right bottom'
<color-stop> ::= <startcolor-stop> [<listcolor-stop>] <endcolor-stop>
<startcolor-stop> ::= <color> [<percentage>'%']
<endcolor-stop> ::= <color> [<percentage>'%']
<listcolor-stop> ::= <color> [<percentage>'%"] [,<listcolor-stop>]*
<color> ::= <NamedColor> | <NumericColor>

<background-origin> ::= 'border-box' | 'padding-box'
<background-clip> ::= 'border-box' | 'padding-box'

<background-color> ::= <NamedColor> | <NumericColor>
```
```javascript
* XCSS
-nexa-background-odd: #ffffaa;
-nexa-background-odd: url('./images/smiley.gif') no-repeat center center #ffffaa;
-nexa-background-odd : linear-gradient( red , blue , yellow );
-nexa-background-odd: linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0));
-nexa-background-odd: url('./images/smiley.gif') border-box border-box #ffffaa;
```
- **`<bg-image>`** — 배경에 표시될 이미지를 "'none' | <imageurl> [<repeat-style>] [<position>]" 형식으로 설정합니다.

<background-color> 값이 설정되어 있으면 배경색 위로 이미지가 표시됩니다.

"none" 으로 설정하면 이미지를 설정하지 않습니다.
<imageurl> 값으로 이미지를 설정할 수 있습니다.
<repeat-style> 값으로 이미지의 반복표시 방향을 설정할 수 있습니다.
<position> 값으로 이미지의 표시위치를 설정할 수 있습니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<imageurl>`** — 배경에 표시될 이미지를 "'URL(' <Theme-Image> | <Web-Image> ')'" 형식으로 설정합니다.

"URL ( [이미지경로] )" 형식으로 테마 또는 웹의 이미지를 설정합니다.
- **`<Theme-Image>`** — 테마에 선언된 이미지를 "theme://images\이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/파일명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<repeat-style>`** — 배경에 표시될 이미지의 반복표시 방향을 설정합니다.

"repeat-x" 설정 시 이미지가 가로 방향으로 반복표시 됩니다.
"repeat-y" 설정 시 이미지가 세로 방향으로 반복표시 됩니다.
"repeat" 설정 시 이미지가 가로,세로 방향으로 모두 반복표시 됩니다.
"no-repeat" 설정 시 이미지가 반복표시 되지 않습니다.

값을 설정하지 않으면 "repeat" 로 적용됩니다.
- **`<horizontal-position>`** — 배경에 표시될 이미지의 가로 위치를 설정합니다.

"left" 설정 시 GridCellControl 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 GridCellControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 GridCellControl 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 GridCellControl 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 GridCellControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 GridCellControl 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<horizontal-position> 값을 설정하고, <vertical-position> 값을 설정하지 않으면 <vertical-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <vertical-position> 은 "top" 으로 적용됩니다.
- **`<pos-percentage>`** — 배경에 표시될 이미지의 가로/세로 위치를 비율로 설정합니다.

<horizontal-position> 에 "0%" 설정 시 "left" 와 같은 위치로 적용됩니다.
<horizontal-position> 에 "50%" 설정 시 "center" 와 같은 위치로 적용됩니다.
<horizontal-position> 에 "100%" 설정 시 "right" 과 같은 위치로 적용됩니다.
<vertical-position> 에 "0%" 설정 시 "top" 와 같은 위치로 적용됩니다.
<vertical-position> 에 "50%" 설정 시 "center" 와 같은 위치로 적용됩니다.
<vertical-position> 에 "100%" 설정 시 "bottom" 과 같은 위치로 적용됩니다.

0 보다 작거나 100 보다 큰 값을 설정 시 GridCellControl 의 영역을 벗어난 가상의 위치로 적용됩니다.

값 설정 시 "%" 단위를 생략할 수 없습니다.
- **`<linear-gradient>`** — 배경에 표시될 그라데이션을 "'linear-gradient(' [<angle> , ] <color-stop> ')'" 형식으로 설정합니다.

<background-color> 값이 설정되어 있으면 배경색 위로 그라데이션이 표시됩니다.

"linear-gradient ( [방향, 색상값, 색상값, ...] )" 형식으로 그라데이션 방향과 색상을 설정할 수 있습니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<angle>`** — 그라데이션의 표시 방향을 설정합니다.

"to left" 설정 시 오른쪽에서 왼쪽 방향으로 그라데이션이 표시됩니다.
"to right" 설정 시 왼쪽에서 오른쪽 방향으로 그라데이션이 표시됩니다.
"to top" 설정 시 아래쪽에서 윗쪽 방향으로 그라데이션이 표시됩니다.
"to bottom" 설정 시 윗쪽에서 아래쪽 방향으로 그라데이션이 표시됩니다.
"to left top" 설정 시 오른쪽 아래 방향에서 왼쪽 윗 방향으로 그라데이션이 표시됩니다.
"to left bottom" 설정 시 오른쪽 윗 뱡향에서 왼쪽 아래 방향으로 그라데이션이 표시됩니다.
"to right top" 설정 시 왼쪽 아래 방향에서 오른쪽 윗 방향으로 그라데이션이 표시됩니다.
"to right bottom" 설정 시 왼쪽 윗 방향에서 오른쪽 아래 방향으로 그라데이션이 표시됩니다.

값을 설정하지 않으면 "to bottom"으로 적용됩니다.
- **`<color-stop>`** — 그라데이션의 시작점, 끝점, 중간점의 색을 "<startcolor-stop> [<listcolor-stop>] <endcolor-stop>" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 시작점과 끝점의 위치가 결정됩니다.
예를 들어 <angle> 값이 "to left" 이면 GridCellControl 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 GridCellControl 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

<listcolor-stop> 에 그라데이션 중간점의 색을 한개 이상 설정할 수 있으며 <percentage> 값 생략 시 균등하게 표시됩니다.
- **`<startcolor-stop>`** — 그라데이션의 시작점 색을 "<color> [<percentage>'%']" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 시작점 위치가 결정됩니다.
시작점의 <percentage> 값을 "0" 이상으로 설정 시 "시작점~설정값"까지 동일한 색상으로 표시됩니다.
- **`<endcolor-stop>`** — 그라데이션의 끝점 색을 "<color> [<percentage>'%']" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 끝점 위치가 결정됩니다.
끝점의 <percentage> 값을 "100" 이하로 설정 시 "설정값~끝점"까지 동일한 색상으로 표시됩니다.
- **`<listcolor-stop>`** — 그라데이션의 중간점 색을 "<color> [<percentage>'%"] [,<listcolor-stop>]*" 형식으로 설정합니다.

시작점과 끝점 사이에 적용될 중간색을 ","로 구분하여 여러개 설정할 수 있습니다.
뒤에 선언된 색의 <percentage> 값은 먼저 선언된 색의 <percentage> 값보다 커야 합니다.
- **`<color>`** — 그라데이션 색상을 색상이름 또는 색상코드로 설정합니다.
- **`<percentage>`** — <color> 에 해당하는 색이 적용될 위치를 비율값으로 설정합니다.

<angle> 값에 의해 결정된 시작점이 "0%" 로 적용됩니다.
<angle> 값에 의해 결정된 끝점이 "100%" 로 적용됩니다.

0 보다 작거나 100 보다 큰 값을 설정 시 GridCellControl 의 영역을 벗어난 가상의 위치로 적용됩니다.
예를 들어 "150%" 설정 시 시작점에서 끝점까지 거리의 반만큼 끝점에서 벗어난 위치에 <color> 값이 적용됩니다.

<percentage> 값을 생략하면 균등한 위치에 <color> 값이 적용됩니다.
값 설정 시 "%" 단위를 생략할 수 없습니다.
- **`<background-origin>`** — 배경으로 처리될 기준영역을 설정합니다.

"border-box" 설정 시 Border 를 포함한 영역이 배경영역으로 처리됩니다.

"padding-box" 설정 시 Border 의 안쪽 영역이 배경영역으로 처리됩니다.
"padding-box" 설정 시 그라데이션의 시작점, 끝점과 배경이미지의 반복 기준위치가 Border 안쪽 영역으로 처리됩니다.

값을 설정하지 않으면 "padding-box" 로 적용됩니다.
- **`<background-clip>`** — 배경이 실제로 표시될 영역을 설정합니다.

"border-box" 설정 시 Border 를 포함한 영역에 배경이 표시됩니다.
"padding-box" 설정 시 Border 의 안쪽 영역에 배경이 표시됩니다.

값을 설정하지 않으면 <background-origin> 에 설정한 값이 동일하게 적용됩니다.
<background-origin> 값도 설정하지 않았을 경우 "border-box" 로 적용됩니다.
- **`<background-color>`** — 배경에 표시될 색을 색상이름 또는 색상코드로 설정합니다.

<bg-image> 또는 <linear-gradient> 값이 설정되어 있다면 배경색은 배경이미지 또는 그라데이션 아래에 표시됩니다.
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 GridCellControl 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- XCSS 에서만 설정할 수 있는 속성으로 스크립트로 값을 변경할 수 없습니다.
   XCSS 에 속성값을 설정하지 않으면 undefined 가 설정되고, "transparent" 로 동작합니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.

- 배경의 기준영역과 표시영역은 <background-origin>, <background-clip> 값으로 각각 설정합니다.
   Cell 은 top/right/bottom/left 테두리(Border) 모두를 표시하지 않고, right 와 bottom 만으로 인접한 Cell 과 테두리를 연결하는 방식으로 처리합니다.
   따라서 특정 Cell 의 left 는 왼쪽 Cell 의 right 로 대체되고, top 은 윗쪽 Cell 의 bottom 으로 대체됩니다.
   배경 영역 설정 시 이와 같은 특성을 고려하여야 합니다.

- 배경 이미지를 중앙에 위치시키려면 <position> 값을 "center" 또는 "center center" 로 설정하여야 합니다.

- 배경이미지와 배경색을 모두 설정하면 배경색 위에 이미지가 표시됩니다.
   그라데이션과 배경색을 모두 설정하면 배경색 위에 그라데이션이 표시됩니다.

- 그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
   두 값을 동시에 설정 시 오동작이 발생할 수 있습니다.

- Grid 의 Body 영역에 속한 Cell 만 적용되는 속성입니다.


---

### -nexa-border

> Components > Component > Grid > Objects > GridCellControl > Property > -nexa-border

**Description**

Cell 의 right 와 bottom 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.border[= strborder]
```

**Setting Syntax**

```javascript
strborder ::= <line-width> <line-style> <color> [,<line-width> <line-style> <color>]{3}

<line-width> ::= 'thin' | 'medium' | 'thick' | <nWidth> 'px'
<line-style> ::= 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'
<color> ::= <NamedColor> | <NumericColor>

1회 입력 : right/bottom 에 모두 적용됩니다.
2회 입력 : bottom 에 첫번째 right 에 두번째 값이 적용됩니다.
3, 4회 입력 : right 에 두번째, bottom 에 세번째 값이 적용됩니다.

* 2회~4회 입력은 border-radius 속성값이 설정되지 않은 경우만 적용됩니다.
```
```javascript
* XCSS
-nexa-border : 1px solid #999999;
-nexa-border : 1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999;

* Script ( normal property )
this.Grid00.setCellProperty( "body", 0, "border", "1px solid #999999" );
this.Grid00.setCellProperty( "body", 0, "border", "1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999" );
```
- **`<line-width>`** — 테두리 선의 두께를 설정합니다.

"thin" 설정 시 1 pixel 두께로 테두리가 표시됩니다.
"medium" 설정 시 3 pixel 두께로 테두리가 표시됩니다.
"thick" 설정 시  5 pixel 두께로 테두리가 표시됩니다.

<nWidth> 설정 시 <nWidth> pixel 두께로 테두리가 표시됩니다.
- **`<nWidth>`** — 테두리 선의 두께를 pixel 단위로 설정합니다.
"px" 단위는 생략할 수 없습니다.
- **`<line-style>`** — 테두리 선의 스타일을 설정합니다.

"none" 설정 시 테두리가 표시되지 않습니다.
"hidden" 설정 시 테두리가 표시되지 않습니다.
"dotted" 설정 시 테두리가 점선으로 표시됩니다.
"dashed" 설정 시 테두리가 긴 점선으로 표시됩니다.
"solid" 설정 시 테두리가 실선으로 표시됩니다.
"double" 설정 시 테두리가 두줄로 표시됩니다.
"groove" 설정 시 테두리가 들어간 것처럼 보이게 입체적으로 표시됩니다.
"ridge" 설정 시 테두리가 올라온 것처럼 보이게 입체적으로 표시됩니다.
"inset" 설정 시 컴포넌트가 들어간 것처럼 보이게 테두리가 입체적으로 표시됩니다.
"outset" 설정 시 컴포넌트가 올라온 것처럼 보이게 테두리가 입체적으로 표시됩니다.
- **`<color>`** — 테두리 색상을 색상이름 또는 색상코드로 설정합니다.
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- -nexa-border 속성값을 설정하지 않으면 undefined 가 설정되고 "medium none #999999" 로 동작합니다.

- Cell 은 top/right/bottom/left 테두리 모두를 표시하지 않고, right 와 bottom 만으로 인접한 Cell 과 테두리를 연결하는 방식으로 처리합니다.
   따라서 특정 Cell 의 left 는 왼쪽 Cell 의 right 로 대체되고, top 은 윗쪽 Cell 의 bottom 으로 대체됩니다.
   테두리 설정 시 이와 같은 특성을 고려하여야 합니다.

- <line-style> 이 "double" 일 때 두 줄을 다른 색으로 설정할 수 없습니다.
   <color> 에 설정된 색이 두 줄에 모두 적용됩니다.

- 스크립트로 접근 시 속성명은 "border" 를 사용해야 합니다.

- Excel Export 시 테두리 선의 스타일과 색상은 적용되지만 두께는 적용되지 않습니다.
   Excel 에서 셀의 테두리 두께를 설정하는 기능이 없으므로 기본 두께로 적용됩니다.


◆ NRE 제약

- right 와 bottom 의 색상이나 두께를 다르게 설정했을 경우 bottom 이 right 위에 겹쳐서 표시됩니다.

- <line-style> 파라미터에 "double","groove","ridge","inset","outset" 값을 설정해도 적용되지 않습니다.

- <line-width> 파라미터에 "thin","medium","thick" 값을 설정해도 적용되지 않습니다.


◆ WRE 제약

- right 와 bottom 의 색상이나 두께를 다르게 설정했을 경우 웹브라우저에 따라 right 와 bottom 이 겹치는 순서가 다르게 처리될 수 있습니다.

- right 와 bottom 의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있으면 두께는 right, bottom 별로 따로 적용되고, 색상은 top 에 설정된 색이 적용되지만 일부 브라우저는 right 와 bottom 에 색상이나 두께가 각각 적용됩니다.

- XCSS 를 사용하지 않고 rgba(), hsl(), hsla() 메소드를 속성에 직접 설정할 경우 브라우저 버전에 따라 적용되지 않을 수 있습니다.


---

### -nexa-color-odd

> Components > Component > Grid > Objects > GridCellControl > Property > -nexa-color-odd

**Description**

Cell 의 Row 인덱스가 홀수일 때 Cell 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.-nexa-color-odd[= strcolor]
```

**Setting Syntax**

```javascript
strcolor ::= <NamedColor> | <NumericColor>
```
```javascript
* XCSS
-nexa-color-odd : #999999;
-nexa-color-odd : rgb ( 255, 0, 0 );
-nexa-color-odd : red;
```
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- XCSS 에서만 설정할 수 있는 속성으로 스크립트로 값을 변경할 수 없습니다.
   XCSS 에 속성값을 설정하지 않으면 undefined 가 설정되고, "#000000" 로 동작합니다.

- Grid 의 Body 영역에 속한 Cell 만 적용되는 속성입니다.


---

### -nexa-edge

> Components > Component > Grid > Objects > GridCellControl > Property > -nexa-edge

**Description**

Cell 의 테두리(Border) 안쪽에 표시될 edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.edge[= stredge]
```

**Setting Syntax**

```javascript
stredge ::= 'none' | <image> [<fixedwidth>'px' <fixedheight>'px']

<image> ::= 'URL("' <Theme-Image> | <Web-Image> '")'
```
```javascript
* XCSS
-nexa-edge : "URL('./images/border.png')" 5px 5px;

* Script ( normal property )
this.Grid00.setCellProperty( "body", 0, "edge", "URL('./images/border.png')" 5px 5px );
```
- **`"none"`** — edge 이미지를 설정하지 않습니다.
- **`<image>`** — 'URL ("[이미지위치]")' 형식으로 테마 또는 웹의 이미지를 설정합니다.

테두리(border) 안쪽에 edge 형태로 이미지가 표시됩니다.
- **`<Theme-Image>`** — 테마에 선언된 이미지를 "theme://images\이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/파일명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<fixedwidth>`** — 이미지가 고정되어 표시될 왼쪽/오른쪽 영역의 크기를 pixel 단위로 설정합니다.
"0px" 설정 시 왼쪽/오른쪽 영역을 고정하지 않습니다.

값을 설정하지 않으면 "0px" 로 적용됩니다.
- **`<fixedheight>`** — 이미지가 고정되어 표시될 위쪽/아래쪽 영역의 크기를 pixel 단위로 설정합니다.
"0px" 설정 시 위쪽/아래쪽 영역을 고정하지 않습니다.

값을 설정하지 않으면 "0px" 로 적용됩니다.

**Remark**

- -nexa-edge 속성값을 설정하지 않으면 undefined 가 설정되고, "none" 으로 동작합니다.

- 스크립트로 접근 시 속성명은 "edge" 를 사용해야 합니다.

- GridCellControl 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.


◆ WRE 제약

- <fixedwidth>,<fixedheight> 값이 이미지 사이즈의 1/2 을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-padding

> Components > Component > Grid > Objects > GridCellControl > Property > -nexa-padding

**Description**

Cell 영역의 안쪽 여백을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.padding[= strpadding]
```

**Setting Syntax**

```javascript
strpadding ::= <npadding>'px'{4}
```
```javascript
* XCSS
-nexa-padding : 5px 5px 5px 5px;

* Script ( normal property )
this.Grid00.setCellProperty( "body", 0, "padding", "5px 5px 5px 5px" );
```
- **`<npadding>`** — Cell 영역의 안쪽 여백을 pixel 단위로 설정합니다.

값을 1회 입력 시 top/right/bottom/left 에 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top/bottom, right/left 에 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top, right/left, bottom 에 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top, right, bottom, left 에 첫번째 값부터 각각 적용됩니다.

"px" 단위를 생략할 수 없습니다.

**Remark**

- -nexa-padding 속성값을 설정하지 않으면 undefined 가 설정되고, "0px" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "padding" 을 사용해야 합니다.

- -nexa-padding 속성은 내부 컨텐츠영역과 Cell 사이의 여백으로 적용됩니다.

- Div 와 같이 자식을 가질 수 있는 컴포넌트에서 -nexa-padding 속성은 자식 컴포넌트의 위치에 영향을 주지 않습니다.


---

### -nexa-rtl-background-image

> Components > Component > Grid > Objects > GridCellControl > Property > -nexa-rtl-background-image

**Description**

GridCellControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.-nexa-rtl-background-image
```

**Setting Syntax**

```javascript
strRtlBgImage ::= "URL(' " <Theme-Image> | <Web-Image> " ')"
```
```javascript
* XCSS
-nexa-rtl-background-image : URL("http://localhost/Test.jpg");
-nexa-rtl-background-image : URL("theme://images/Test.jpg");
```
- **`strRtlBgImage`** — "URL ('<이미지위치>')" 형식으로 테마 또는 웹의 이미지 경로를 문자열로 설정합니다.

background 속성에 설정된 값 중 이미지만 설정한 이미지로 대체됩니다.
background 속성에 설정된 이미지 이외의 값은 동일하게 적용됩니다.
- **`<Theme-Image>`** — 테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.

**Remark**

- rtl 속성에 의해 표시기준이 변경되면 반전된 이미지를 적용하려 할 때 사용하는 속성입니다.

- XCSS 에서만 설정할 수 있는 속성으로 스크립트로 값을 변경할 수 없습니다.
   XCSS 에 -nexa-rtl-background-image 속성값을 설정하지 않으면 background 속성에 설정된 이미지가 적용됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.

- 배경이미지가 적용되는 영역은 컴포넌트의 클라이언트 영역입니다.

- background 속성에 배경색이 설정되어 있을 경우 배경색 위에 이미지가 표시됩니다.

- 그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
   background 속성에 그라데이션이 설정되어 있을 경우 오동작이 발생할 수 있습니다.


---

### -nexa-rtl-background-image-odd

> Components > Component > Grid > Objects > GridCellControl > Property > -nexa-rtl-background-image-odd

**Description**

Grid 의 rtl 속성이 true 로 적용될 때 Row 인덱스가 홀수인 Cell 의 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.-nexa-rtl-background-image-odd
```

**Setting Syntax**

```javascript
strRtlBgImage ::= "URL(' " <Theme-Image> | <Web-Image> " ')"
```
```javascript
* XCSS
-nexa-rtl-background-image-odd : URL("http://localhost/Test.jpg");
-nexa-rtl-background-image-odd : URL("theme://images/Test.jpg");
```
- **`strRtlBgImage`** — "URL ('<이미지위치>')" 형식으로 테마 또는 웹의 이미지 경로를 문자열로 설정합니다.

-nexa-background-odd 속성에 설정된 값 중 이미지만 설정한 이미지로 대체됩니다.
-nexa-background-odd 속성에 설정된 이미지 이외의 값은 동일하게 적용됩니다.
- **`<Theme-Image>`** — 테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.

**Remark**

- Grid 의 rtl 속성에 의해 표시기준이 변경되면 Cell 에 반전된 이미지를 적용하려 할 때 사용하는 속성입니다.

- XCSS 에서만 설정할 수 있는 속성으로 스크립트로 값을 변경할 수 없습니다.
   XCSS 에 -nexa-rtl-background-image-odd 속성값을 설정하지 않으면 -nexa-background-odd 속성에 설정된 이미지가 적용됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.

- 배경이미지가 적용되는 영역은 컴포넌트의 클라이언트 영역입니다.

- -nexa-background-odd 속성에 배경색이 설정되어 있을 경우 배경색 위에 이미지가 표시됩니다.

- 그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
   -nexa-background-odd 속성에 그라데이션이 설정되어 있을 경우 오동작이 발생할 수 있습니다.


---

### -nexa-rtl-edge-image

> Components > Component > Grid > Objects > GridCellControl > Property > -nexa-rtl-edge-image

**Description**

GridCellControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.-nexa-rtl-edge-image
```

**Setting Syntax**

```javascript
strRtlEgImage ::= "URL(' " <Theme-Image> | <Web-Image> " ')"
```
```javascript
* XCSS
-nexa-rtl-edge-image : URL("http://localhost/Test.jpg");
-nexa-rtl-edge-image : URL("theme://images/Test.jpg")
```
- **`strRtlEgImage`** — "URL ('<이미지위치>')" 형식으로 테마 또는 웹의 이미지 경로를 문자열로 설정합니다.

-nexa-edge 속성에 설정된 값 중 이미지만 설정한 이미지로 대체됩니다.
-nexa-edge 속성에 설정된 이미지 이외의 값은 동일하게 적용됩니다.
- **`<Theme-Image>`** — 테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.

**Remark**

- rtl 속성에 의해 표시기준이 변경되면 반전된 이미지를 적용하려 할 때 사용하는 속성입니다.

- XCSS 에서만 설정할 수 있는 속성으로 스크립트로 값을 변경할 수 없습니다.
   XCSS 에 -nexa-rtl-edge-image 속성값을 설정하지 않으면 -nexa-edge 속성에 설정된 이미지가 적용됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.

- 배경이미지가 적용되는 영역은 컴포넌트의 클라이언트 영역입니다.

- background 또는 -nexa-rtl-background-image 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-rtl-edge-image 속성에 설정된 이미지가 제일 위에 표시됩니다.


◆ web runtime environment 제약

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-text-align

> Components > Component > Grid > Objects > GridCellControl > Property > -nexa-text-align

**Description**

Cell 에 표시되는 텍스트 또는 컨텐츠의 가로 정렬 방식을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.textAlign[= strtextalign]
```

**Setting Syntax**

```javascript
strtextalign ::= 'left' | 'center' | 'right'
```
```javascript
* XCSS
-nexa-text-align : center;

* Script ( normal property )
this.Grid00.setCellProperty( "body", 0, "textAlign", "center" );
```
- **`"left"`** — 텍스트 또는 컨텐츠를 왼쪽으로 정렬합니다.
- **`"center"`** — 텍스트 또는 컨텐츠를 가운데로 정렬합니다.
- **`"right"`** — 텍스트 또는 컨텐츠를 오른쪽으로 정렬합니다.

**Remark**

- -nexa-text-align 속성값을 설정하지 않고, XCSS 에 정의된 값이 없을 경우 Grid Contents Editor 에 "left" 가 표시됩니다.
   XCSS 에 정의된 값이 없고, displaytype 속성값에 의해 결정된 Control 의 XCSS 에도 정의된 값이 없다면 하단의 기준으로 동작됩니다.
   > displaytype 속성값이 "normal" 이면 바인드된 DataSet 의 컬럼타입에 따라 달라집니다.
   > displaytype 속성값이 "mask" 일 때 maskedittype 속성값이 "string" 이면 "left" 로 동작하고, "number" 이면 "right" 로 동작됩니다.
   > displaytype 속성값이 "maskeditcontrol, progressbarcontrol, textareacontrol, editcontrol, combocontrol, calendarcontrol" 이면 "left" 로 동작됩니다.
   > displaytype 속성값이 "combotext, date, text, decoratetext, buttoncontrol, treeitemcontrol" 이면 "center" 로 동작됩니다.
   > displaytype 속성값이 "number, currency" 이면 "right" 로 동작됩니다.
   > displaytype 속성값이 "checkboxcontrol, imagecontrol, radioitemcontrol" 이면 Control 자체가 Cell 의 중앙에 위치합니다.

- displayttype 속성의 값에 "control" 이 포함되면 -nexa-text-align 속성값은 Control 이 표시되는 위치로 적용됩니다.
   Control 내부에 표시되는 텍스트의 정렬은 해당 Control 에 정의된 값에 따라 달라집니다.

- displaytype 속성값이 "normal" 이면 바인드된 DataSet 의 컬럼타입에 따라 달라집니다.
  > 컬럼타입이 "STRING, BLOB" 이면 "left" 로 동작됩니다.
  > 컬럼타입이 "INT, FLOAT, BIGDECIMAL" 이면 "right" 로 동작됩니다.
  > 컬럼타입이 "DATE, TIME, DATETIME" 이면 "center" 로 동작됩니다.

- 스크립트로 접근 시 속성명은 "textAlign"을 사용해야 합니다.

- 표시되는 텍스트의 길이가 Cell 의 너비보다 크면 "right" 를 설정해도 "left" 로 동작됩니다.


◆ web runtime environment 제약

- -nexa-text-align 속성값이 "right" 일 때 font 속성에 "italic" 을 설정하면 마지막 텍스트의 기울어진 부분이 잘려서 표시될 수 있습니다.
   웹브라우저에서 텍스트영역을 일반글자 기준으로 처리한 후 기울임을 적용하면서 발생하는 문제입니다.


---

### -nexa-text-decoration

> Components > Component > Grid > Objects > GridCellControl > Property > -nexa-text-decoration

**Description**

Cell 에 표시되는 텍스트에 적용할 효과를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.textDecoration[= strTxtDeco]
```

**Setting Syntax**

```javascript
strTxtDeco ::= 'none' | <txt-deco> [' ' <txt-deco>]{2}

<txt-deco> ::= 'underline' | 'overline' | 'line-through'
```
```javascript
* XCSS
-nexa-text-decoration : underline overline;

* Script ( normal property )
this.Grid00.setCellProperty( "body", 0, "textDecoration", "underline overline" );
```
- **`"none"`** — 텍스트에 효과를 적용하지 않습니다.
- **`<txt-deco>`** — 텍스트에 적용할 효과를 설정합니다.

"underline" 설정 시 텍스트에 밑줄 효과가 적용됩니다.
"overline" 설정 시 텍스트에 윗줄 효과가 적용됩니다.
"line-through" 설정 시 텍스트에 취소선 효과가 적용됩니다.

**Remark**

- -nexa-text-decoration 속성값을 설정하지 않으면 undefined 가 설정되고, "none" 으로 동작합니다.

- 스크립트로 접근 시 속성명은 "textDecoration" 을 사용해야 합니다.

- 각 효과는 공백(" ")을 구분자로 사용하여 여러번 설정할 수 있습니다.


◆ web runtime environment 제약

- 일부 웹브라우저는 속성값에 "none" 이 포함될 경우 텍스트에 효과가 적용되지 않습니다.


---

### -nexa-vertical-align

> Components > Component > Grid > Objects > GridCellControl > Property > -nexa-vertical-align

**Description**

Cell 에 표시되는 텍스트 또는 컨텐츠의 세로 정렬 방식을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.verticalAlign[= strvertalign]
```

**Setting Syntax**

```javascript
strvertalign ::= 'top' | 'middle' | 'bottom'
```
```javascript
* XCSS
-nexa-vertical-align : middle;

* Script ( normal property )
this.Grid00.setCellProperty( "body", 0, "verticalAlign", "middle" );
```
- **`"top"`** — 텍스트 또는 컨텐츠를 위쪽으로 정렬합니다.
- **`"middle"`** — 텍스트 또는 컨텐츠를 가운데로 정렬합니다.
- **`"bottom"`** — 텍스트 또는 컨텐츠를 아래쪽으로 정렬합니다.

**Remark**

- -nexa-vertical-align 속성값을 설정하지 않으면 undefined 가 설정되고, "middle" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "verticalAlign"을 사용해야 합니다.


---

### -nexa-word-wrap

> Components > Component > Grid > Objects > GridCellControl > Property > -nexa-word-wrap

**Description**

Cell 에 표시되는 텍스트가 출력영역보다 길 경우 자동으로 줄바꿈 되도록 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.wordWrap[= strwordwrap]
```

**Setting Syntax**

```javascript
strwordwrap ::= 'none' | 'char' | 'english'
```
```javascript
* XCSS
-nexa-word-wrap : char;

* Script ( normal property )
this.Grid00.setCellProperty( "body", 0, "wordWrap", "char" );
```
- **`"none"`** — 자동으로 줄바꿈을 수행하지 않습니다.
- **`"char"`** — 글자 단위로 줄바꿈을 자동 수행합니다.
- **`"english"`** — 영문자일 경우 단어 단위로 줄바꿈을 자동 수행합니다.
영문자 이외의 문자는 글자 단위로 줄바꿈을 자동 수행합니다.

**Remark**

- -nexa-word-wrap 속성값을 설정하지 않으면 undefined 가 설정되고, "none" 으로 동작합니다.

- 스크립트로 접근 시 속성명은 "wordWrap"을 사용해야 합니다.

- 자동 줄바꿈이 수행되면 텍스트 정렬의 기준점이 변경될 수 있습니다.

- 스크롤바가 표시되는 컴포넌트도 자동 줄바꿈을 설정할 수 있습니다.

- "english"로 설정 시 한 단어는 공백(Space, Tab 등) 으로 구분합니다.


---

### accessibilityaction

> Components > Component > Grid > Objects > GridCellControl > Property > accessibilityaction

**Description**

GridCellControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.accessibilityaction[= strAction]
```

**Setting Syntax**

```javascript
this.GridCellControl00.accessibilityaction = "Accessibility Action Message"; 
this.GridCellControl00.accessibilityaction = "Select by direction key";
```
- **`strAction`** — accessibilitydescreadtype 속성값에 "action"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 컴포넌트에 선택상자 이동 시 사용자가 추가적인 정보를 얻기 위해 필요한 동작을 안내하는 용도로 사용합니다. 
  예를 들어 컴포넌트 특성에 따라 다음과 같이 속성값을 설정할 수 있습니다.
  
  - CheckBox 컴포넌트의 경우 아래와 같은 안내문을 accessibilityaction 속성값으로 설정할 수 있습니다.
  "선택 상태를 전환하려면 스페이스 바를 누릅니다."
  
  - WebBrowser, WebView 컴포넌트의 경우 스크린 리더 사용자를 위한 안내문을 accessibilityaction 속성값으로 설정할 수 있습니다.
  "웹 브라우저 컴포넌트 내 콘텐츠를 이용하기 위해서는 가상커서를 해제해 주세요."
  그리고 WebBrowser, WebView 컴포넌트를 벗어났을 때 필요한 안내문을 accessibilityleavemessage 속성값으로 설정합니다.
  "가상커서를 설정해 주세요"


---

### accessibilitydesclevel

> Components > Component > Grid > Objects > GridCellControl > Property > accessibilitydesclevel

**Description**

GridCellControl 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.accessibilitydesclevel[= enumLevel]
```

**Setting Syntax**

```javascript
enumLevel ::= 'all' | 'self' | 'child' | 'none'
```
```javascript
this.GridCellControl00.accessibilitydesclevel = "all";
```
- **`"all"`** — GridCellControl 와 자식 컴포넌트에 대한 접근성을 모두 출력합니다.
- **`"self"`** — GridCellControl 의 접근성만 출력하고 자식 컴포넌트의 접근성은 출력하지 않습니다.
- **`"child"`** — GridCellControl 의 접근성은 출력하지 않고, 자식 컴포넌트의 접근성은 출력합니다.
- **`"none"`** — GridCellControl 와 자식 컴포넌트에 대한 접근성을 모두 출력하지 않습니다.

**Remark**

- accessibilitydesclevel 속성값을 설정하지 않으면 "all" 로 적용됩니다.

- Button 과 같이 자식 컴포넌트가 없는 컴포넌트는 "all" 또는 "child" 로 설정 시 "self" 로 적용됩니다.

- Div 와 같은 컨테이너 컴포넌트는 "child" 설정 시 실제 컨텐츠의 접근성만을 출력합니다.

- accessibilitydesclevel 속성은 선택상자의 이동에 영향을 주지 않으므로 방향키로 선택상자가 GridCellControl 에 이동되게 하지 않으려면 accessibilityenable 속성을 설정하여야 합니다.


---

### accessibilitydescription

> Components > Component > Grid > Objects > GridCellControl > Property > accessibilitydescription

**Description**

GridCellControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.accessibilitydescription[= strDescription]
```

**Setting Syntax**

```javascript
this.GridCellControl00.accessibilitydescription = "Option";
```
- **`strDescription`** — accessibilitydescreadtype 속성값에 "description"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.


---

### accessibilityenable

> Components > Component > Grid > Objects > GridCellControl > Property > accessibilityenable

**Description**

GridCellControl 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.accessibilityenable[= bEnable]
```

**Setting Syntax**

```javascript
bEnable ::= 'true' | 'false'
```
```javascript
this.GridCellControl00.accessibilityenable = false;
```
- **`true`** — GridCellControl 에 선택상자가 이동되면 접근성 관련 속성값을 출력합니다.

방향키 또는 제스처로 선택상자 이동 시 Static 과 같이 포커스를 갖지 않는 컴포넌트에도 선택상자가 이동됩니다.
- **`false`** — GridCellControl 에 선택상자가 이동되어도 접근성 관련 속성값을 출력하지 않습니다.

데스크탑 환경에서 방향키로 선택상자가 GridCellControl 에 이동되지 않습니다.
모바일 환경에서 제스처로 선택상자가 GridCellControl 에 이동되지 않습니다.

**Remark**

- accessibilityenable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 선택상자 이동 시 컴포넌트의 ARIA-LABEL + Status + Role 순서로 정보가 조합되어 접근성으로 출력됩니다.
   각 정보의 조합순서는 스크린 리더의 종류에 따라 달라질 수 있습니다.
   > ARIA-LABEL : Environment 의 accessibilitydescreadtype 속성에 설정된 속성값이 반영됩니다.
   > Status : GridCellControl 의 현재 상태가 반영됩니다.
   > Role : accessibilityrole 속성값이 반영됩니다. accessibilityrole 속성값을 설정하지 않으면 GridCellControl 의 고유 Role 이 반영됩니다.

- accessibilityenable 속성값이 false 일 때 데스크탑 환경에서 방향키 외의 방법으로 선택상자를 GridCellControl 로 이동시키면 스크린 리딩 프로그램에서 임의의 값을 출력할 수 있습니다.


◆ 컨테이너 컴포넌트 선택상자 이동 제약

아래와 같은 환경에서 컨테이너 컴포넌트로 선택상자가 이동하지 않고 컨테이너 컴포넌트 내에 배치된 컴포넌트로 이동합니다.
- Android, iOS/iPadOS 운영체제에서 실행 시 (Div, PopupDiv, TabpageControl, View)
- Windows 운영체제에서 센스리더 가상커서 사용 시 (Div, PopupDiv, View)


---

### accessibilitylabel

> Components > Component > Grid > Objects > GridCellControl > Property > accessibilitylabel

**Description**

Cell에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.accessibilitylabel[= strLabel]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "accessibilitylabel", "OK Button" );
this.Grid00.setCellProperty( "body", 0, "accessibilitylabel", "[@static00]" );
this.Grid00.setCellProperty( "body", 0, "accessibilitylabel", "[@static00][@static01]" );
this.Grid00.setCellProperty( "body", 0, "accessibilitylabel", "[@static00][@static01] OK Button" );
```
- **`strLabel`** — accessibilitydescreadtype 속성값에 "label"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.
문자열로 설정하거나 Grid 컴포넌트와 부모가 같은 컴포넌트의 accessibilitylabel 속성값을 참조할 수 있습니다.
다른 컴포넌트 참조 시에는 "[@ComponentID]" 형식으로 컴포넌트의 id를 대괄호와 "@" 문자를 사용하여 설정합니다.
참조하는 참조값에 해당하는 컴포넌트를 찾을 수 없는 경우에는 참조값 자체가 문자열로 처리됩니다.

**Remark**

- enableaccessibility 속성값이 true인 경우만 적용되는 속성입니다.

- accessibilitydescreadtype 속성값에 "label"이 포함되었으나 accessibilitylabel 속성값을 설정하지 않으면 스크린 리더의 음성 출력 대상에 포함하지 않습니다.


---

### accessibilityrole

> Components > Component > Grid > Objects > GridCellControl > Property > accessibilityrole

**Description**

GridCellControl에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.accessibilityrole[= enumRole]
```

**Setting Syntax**

```javascript
enumRole ::= 'none' | 'alert' | 'application' | 'button' | 'calendar' | 'chart' | 'checkbox' | 'columnheader' | 'combobox' | 'datepicker' | 'edit' | 'fileupload' | 'form' | 'frame' | 'grid' | 'gridcell' | 'groupbox' | 'heading' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6' | 'image' | 'link' | 'listbox' | 'menubar' | 'progressbar' | 'radio' | 'rowheader' | 'scrollbar' | 'spin' | 'static' | 'statusbar' | 'tab' | 'tabpage' | 'textarea' | 'titlebar' | 'toolbar' | 'tooltip' | 'treegrid' | 'treeitem' | 'webbrowser'
```
```javascript
this.GridCellControl00.accessibilityrole = "none"; 
this.GridCellControl00.accessibilityrole = "button";
```
- **`enumRole`** — - "none": 스크린 리더에서 Role 정보를 처리하지 않습니다.

- 속성값을 설정하지 않으면 컴포넌트/오브젝트에 따라 기본 accessibilityrole 값이 적용됩니다.
"application": Application, MainFrame
"button": Button, FileDownload
"calendar": Calendar
"checkbox": CheckBox
"combobox": ComboBox
"edit": Edit, MaskEdit
"frame": FrameSet, ChildFrame
"fileupload": FileUpload
"form": Form, Div
"groupbox": GroupBox
"image": ImageViewer, Sketch
"listbox": ListBox
"menubar": Menu
"progressbar": ProgressBar
"radio": Radio
"spin": Spin
"static": Static
"tab": Tab
"tabpage": TabPage
"textarea": TextArea
"webbrowser": WebBrower

- Grid 컴포넌트의 경우 하위 오브젝트까지 Role을 적용합니다.
"grid": Grid
"gridcell": Grid Cell
"columnheader": Grid Column Head
"rowheader": Grid Row Head
"treegrid": TreeGrid
"treeitem": TreeItem, TreeCell

- 기능에 따라 컴포넌트 또는 오브젝트의 하위 오브젝트 영역에 아래와 같은 Role이 적용됩니다.
"alert": Alert, Confirm, UserConfirm
"chart": Chart
"datepicker": DatePicker
"link": Link
"scrollbar": ScrollBar
"statusbar": StatusBar
"titlebar": TitleBar
"toolbar": ToolBar
"tooltip": Tooltip

- "heading" 또는 "heading1"부터 "heading6" 사이의 값으로 속성값을 설정하면 role, aria-level 값을 처리합니다.
예를 들어 속성값을 "heading3"으로 설정하면 Generate되는 코드 태그에 role="heading", aria-level="3" 형식으로 값을 처리합니다.
속성값을 "heading"으로 설정 시에는 "heading1"을 설정한 것과 같은 동작을 처리합니다.
accessibilityheadingnexthotkey, accessibilityheadingprevhotkey 속성값으로 설정한 단축키로 이동 시 사용할 수 있습니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- accessibilityenable 속성값을 설정하지 않으면 GridCellControl의 기본 Role 로 적용됩니다.

- 추가적인 속성값이 필요한 Role 설정 시 GridCellControl에 해당 속성이 없으면 스크린 리더에 따라 정상적으로 정보를 읽지 못할 수 있습니다.


---

### autosizecol

> Components > Component > Grid > Objects > GridCellControl > Property > autosizecol

**Description**

Column 의 너비가 자동조절 되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.autosizecol[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'default' | 'limitmin' | 'limitmax'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "autosizecol", "default" );
```
- **`"none"`** — Column 의 너비를 자동조절 시 기준에서 제외됩니다.
- **`"default"`** — Cell 에 표시되는 내용에 맞게 Column 의 너비를 자동조절합니다.
- **`"limitmin"`** — 디자인 시 설정된 Cell 의 너비보다 자동조절되는 너비가 클 경우 자동조절 합니다.
디자인 시 설정된 Cell 의 너비보다 자동조절되는 너비가 작을 경우 자동조절하지 않습니다.
- **`"limitmax"`** — 디자인 시 설정된 Cell 의 너비보다 자동조절되는 너비가 클 경우 자동조절하지 않습니다.
디자인 시 설정된 Cell 의 너비보다 자동조절되는 너비가 작을 경우 자동조절합니다.

**Remark**

- autosizecol 속성값을 설정하지 않으면 "default"로 적용됩니다.

- autofittype 속성값이 "col" 일 경우 autosizecol 속성값은 무시됩니다.

- Cell 의 autosizecol 속성은 Grid 의 autosizingtype 속성이 설정되어 있을 경우에만 적용됩니다.

- Grid 의 autosizingtype 속성값과 autosizebandtype 속성값에 따라 Column 의 너비를 결정하는 Cell 이 정해집니다.


---

### autosizerow

> Components > Component > Grid > Objects > GridCellControl > Property > autosizerow

**Description**

Row 의 높이가 자동조절 되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.autosizerow[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'default' | 'limitmin' | 'limitmax'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "autosizerow", "default" );
```
- **`"none"`** — Row 의 높이를 자동조절 시 기준에서 제외됩니다.
- **`"default"`** — Cell 에 표시되는 내용에 맞게 Row 의 높이를 자동조절합니다.
- **`"limitmin"`** — 디자인 시 설정된 Cell 의 높이보다 자동조절되는 높이가 클 경우 자동조절합니다.
디자인 시 설정된 Cell 의 높이보다 자동조절되는 높이가 작을 경우 자동조절하지 않습니다.
- **`"limitmax"`** — 디자인 시 설정된 Cell 의 높이보다 자동조절되는 높이가 클 경우 자동조절하지 않습니다.
디자인 시 설정된 Cell 의 높이보다 자동조절되는 높이가 작을 경우 자동조절 합니다.

**Remark**

- autosizerow 속성값을 설정하지 않으면 "default"로 적용됩니다.

- Cell 의 autosizerow 속성은 Grid 의 autosizingtype 속성이 설정되어 있을 경우에만 적용됩니다.

- Grid 의 autosizingtype 속성값과 autosizebandtype 속성값에 따라 Row 의 높이를 결정하는 Cell 이 정해집니다.


---

### background

> Components > Component > Grid > Objects > GridCellControl > Property > background

**Description**

Cell 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.background[= strbackground]
```

**Setting Syntax**

```javascript
strBackground ::= [<bg-image> | <linear-gradient>] [<background-origin> [<background-clip>]] [<background-color>]

<bg-image> ::= 'none' | <imageurl> [<repeat-style>] [<position>]
   <imageurl> ::= 'URL(' <Theme-Image> | <Web-Image> ')'
   <repeat-style> ::= 'repeat-x' | 'repeat-y' | 'repeat' | 'no-repeat'
   <position> ::= <horizontal-position> <vertical-position> ['/' <background-size>]
      <horizontal-position> ::= 'left' | 'center' | 'right' | <pos-percentage> '%'
      <vertical-position> ::= 'top' | 'center' | 'bottom' | <pos-percentage> '%'
      <background-size> ::= 'auto' | 'cover' | 'contain' | (<length> 'px' | <percentage> '%') {1,2}

<linear-gradient> ::= 'linear-gradient(' [<angle> , ] <color-stop> ')'
   <angle> ::= 'to left' | 'to right' | 'to top' | 'to bottom' | 'to left top' | 'to left bottom' | 'to right top' | 'to right bottom'
   <color-stop> ::= <startcolor-stop> [<listcolor-stop>] <endcolor-stop>
      <startcolor-stop> ::= <color> [<percentage>'%']
      <endcolor-stop> ::= <color> [<percentage>'%']
      <listcolor-stop> ::= <color> [<percentage>'%"] [,<listcolor-stop>]*
         <color> ::= <NamedColor> | <NumericColor>

<background-origin> ::= 'border-box' | 'padding-box'
<background-clip> ::= 'border-box' | 'padding-box'
<background-color> ::= <NamedColor> | <NumericColor>
```
```javascript
* XCSS
background : #ffffaa;
background : url('./images/smiley.gif') no-repeat center center #ffffaa;
background : linear-gradient( red , blue , yellow );

* Script ( normal property )
this.Grid00.setCellProperty( "body", 0, "background", "#ffffaa");
this.Grid00.setCellProperty( "body", 0, "background", "URL('./images/smiley.gif') no-repeat center center #ffffaa);
this.Grid00.setCellProperty( "body", 0, "background", "linear-gradient( red , blue , yellow )");
this.Grid00.setCellProperty( "body", 0, "background", "linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0))");
```
- **`<bg-image>`** — 배경에 표시될 이미지를 "'none' | <imageurl> [<repeat-style>] [<position>]" 형식으로 설정합니다.

<background-color> 값이 설정되어 있으면 배경색 위로 이미지가 표시됩니다.

"none" 으로 설정하면 이미지를 설정하지 않습니다.
<imageurl> 값으로 이미지를 설정할 수 있습니다.
<repeat-style> 값으로 이미지의 반복표시 방향을 설정할 수 있습니다.
<position> 값으로 이미지의 표시위치를 설정할 수 있습니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<imageurl>`** — 배경에 표시될 이미지를 "'URL(' <Theme-Image> | <Web-Image> ')'" 형식으로 설정합니다.

"URL ( [이미지경로] )" 형식으로 테마 또는 웹의 이미지를 설정합니다.
- **`<Theme-Image>`** — 테마에 선언된 이미지를 "theme://images\이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/파일명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<repeat-style>`** — 배경에 표시될 이미지의 반복표시 방향을 설정합니다.

"repeat-x" 설정 시 이미지가 가로 방향으로 반복표시 됩니다.
"repeat-y" 설정 시 이미지가 세로 방향으로 반복표시 됩니다.
"repeat" 설정 시 이미지가 가로,세로 방향으로 모두 반복표시 됩니다.
"no-repeat" 설정 시 이미지가 반복표시 되지 않습니다.

값을 설정하지 않으면 "repeat" 로 적용됩니다.
- **`<horizontal-position>`** — 배경에 표시될 이미지의 가로 위치를 설정합니다.

"left" 설정 시 GridCellControl 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 GridCellControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 GridCellControl 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 GridCellControl 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 GridCellControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 GridCellControl 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<horizontal-position> 값을 설정하고, <vertical-position> 값을 설정하지 않으면 <vertical-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <vertical-position> 은 "top" 으로 적용됩니다.
- **`<pos-percentage>`** — 배경에 표시될 이미지의 가로/세로 위치를 비율로 설정합니다.

<horizontal-position> 에 "0%" 설정 시 "left" 와 같은 위치로 적용됩니다.
<horizontal-position> 에 "50%" 설정 시 "center" 와 같은 위치로 적용됩니다.
<horizontal-position> 에 "100%" 설정 시 "right" 과 같은 위치로 적용됩니다.
<vertical-position> 에 "0%" 설정 시 "top" 와 같은 위치로 적용됩니다.
<vertical-position> 에 "50%" 설정 시 "center" 와 같은 위치로 적용됩니다.
<vertical-position> 에 "100%" 설정 시 "bottom" 과 같은 위치로 적용됩니다.

0 보다 작거나 100 보다 큰 값을 설정 시 GridCellControl 의 영역을 벗어난 가상의 위치로 적용됩니다.

값 설정 시 "%" 단위를 생략할 수 없습니다.
- **`<background-size>`** — 배경에 표시될 이미지의 크기를 설정합니다.
- auto: 원본 이미지 크기를 유지합니다.
- cover: 이미지 비율을 유지하는 한도 내에서 배경에 빈 공간이 없도록 가장 크게 설정합니다.
  width 또는 height 길이가 긴 쪽은 잘려서 표시될 수 있습니다.
- contain: 이미지가 잘리지 않고 비율을 유지하는 한도 내에서 가장 크게 설정합니다.
- <length> | <percentage>: 이미지의 width, height 크기 또는 컴포넌트 대비 비율을 설정합니다. 
  width 값만 설정하면 원본 이미지 비율에 따라 height 크기를 자동으로 처리합니다.
  height 값만 설정할 수는 없습니다. 
  음수값은 설정할 수 없습니다.
- **`<linear-gradient>`** — 배경에 표시될 그라데이션을 "'linear-gradient(' [<angle> , ] <color-stop> ')'" 형식으로 설정합니다.

<background-color> 값이 설정되어 있으면 배경색 위로 그라데이션이 표시됩니다.

"linear-gradient ( [방향, 색상값, 색상값, ...] )" 형식으로 그라데이션 방향과 색상을 설정할 수 있습니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<angle>`** — 그라데이션의 표시 방향을 설정합니다.

"to left" 설정 시 오른쪽에서 왼쪽 방향으로 그라데이션이 표시됩니다.
"to right" 설정 시 왼쪽에서 오른쪽 방향으로 그라데이션이 표시됩니다.
"to top" 설정 시 아래쪽에서 윗쪽 방향으로 그라데이션이 표시됩니다.
"to bottom" 설정 시 윗쪽에서 아래쪽 방향으로 그라데이션이 표시됩니다.
"to left top" 설정 시 오른쪽 아래 방향에서 왼쪽 윗 방향으로 그라데이션이 표시됩니다.
"to left bottom" 설정 시 오른쪽 윗 뱡향에서 왼쪽 아래 방향으로 그라데이션이 표시됩니다.
"to right top" 설정 시 왼쪽 아래 방향에서 오른쪽 윗 방향으로 그라데이션이 표시됩니다.
"to right bottom" 설정 시 왼쪽 윗 방향에서 오른쪽 아래 방향으로 그라데이션이 표시됩니다.

값을 설정하지 않으면 "to bottom"으로 적용됩니다.
- **`<color-stop>`** — 그라데이션의 시작점, 끝점, 중간점의 색을 "<startcolor-stop> [<listcolor-stop>] <endcolor-stop>" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 시작점과 끝점의 위치가 결정됩니다.
예를 들어 <angle> 값이 "to left" 이면 GridCellControl 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 GridCellControl 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

<listcolor-stop> 에 그라데이션 중간점의 색을 한개 이상 설정할 수 있으며 <percentage> 값 생략 시 균등하게 표시됩니다.
- **`<startcolor-stop>`** — 그라데이션의 시작점 색을 "<color> [<percentage>'%']" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 시작점 위치가 결정됩니다.
시작점의 <percentage> 값을 "0" 이상으로 설정 시 "시작점~설정값"까지 동일한 색상으로 표시됩니다.
- **`<endcolor-stop>`** — 그라데이션의 끝점 색을 "<color> [<percentage>'%']" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 끝점 위치가 결정됩니다.
끝점의 <percentage> 값을 "100" 이하로 설정 시 "설정값~끝점"까지 동일한 색상으로 표시됩니다.
- **`<listcolor-stop>`** — 그라데이션의 중간점 색을 "<color> [<percentage>'%"] [,<listcolor-stop>]*" 형식으로 설정합니다.

시작점과 끝점 사이에 적용될 중간색을 ","로 구분하여 여러개 설정할 수 있습니다.
뒤에 선언된 색의 <percentage> 값은 먼저 선언된 색의 <percentage> 값보다 커야 합니다.
- **`<color>`** — 그라데이션 색상을 색상이름 또는 색상코드로 설정합니다.
- **`<percentage>`** — <color> 에 해당하는 색이 적용될 위치를 비율값으로 설정합니다.

<angle> 값에 의해 결정된 시작점이 "0%" 로 적용됩니다.
<angle> 값에 의해 결정된 끝점이 "100%" 로 적용됩니다.

0 보다 작거나 100 보다 큰 값을 설정 시 GridCellControl 의 영역을 벗어난 가상의 위치로 적용됩니다.
예를 들어 "150%" 설정 시 시작점에서 끝점까지 거리의 반만큼 끝점에서 벗어난 위치에 <color> 값이 적용됩니다.

<percentage> 값을 생략하면 균등한 위치에 <color> 값이 적용됩니다.
값 설정 시 "%" 단위를 생략할 수 없습니다.
- **`<background-origin>`** — 배경으로 처리될 기준영역을 설정합니다.

"border-box" 설정 시 Border 를 포함한 영역이 배경영역으로 처리됩니다.

"padding-box" 설정 시 Border 의 안쪽 영역이 배경영역으로 처리됩니다.
"padding-box" 설정 시 그라데이션의 시작점, 끝점과 배경이미지의 반복 기준위치가 Border 안쪽 영역으로 처리됩니다.

값을 설정하지 않으면 "padding-box" 로 적용됩니다.
- **`<background-clip>`** — 배경이 실제로 표시될 영역을 설정합니다.

"border-box" 설정 시 Border 를 포함한 영역에 배경이 표시됩니다.
"padding-box" 설정 시 Border 의 안쪽 영역에 배경이 표시됩니다.

값을 설정하지 않으면 <background-origin> 에 설정한 값이 동일하게 적용됩니다.
<background-origin> 값도 설정하지 않았을 경우 "border-box" 로 적용됩니다.
- **`<background-color>`** — 배경에 표시될 색을 색상이름 또는 색상코드로 설정합니다.

<bg-image> 또는 <linear-gradient> 값이 설정되어 있다면 배경색은 배경이미지 또는 그라데이션 아래에 표시됩니다.
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 GridCellControl 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- background 속성값을 설정하지 않으면 undefined 가 설정되고, "transparent" 로 동작합니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오 에서 속성값으로 설정 시 사용할 수 있습니다.

- 배경의 기준영역과 표시영역은 <background-origin>, <background-clip> 값으로 각각 설정합니다.
   Cell 은 top/right/bottom/left 테두리(Border) 모두를 표시하지 않고, right 와 bottom 만으로 인접한 Cell 과 테두리를 연결하는 방식으로 처리합니다.
   따라서 특정 Cell 의 left 는 왼쪽 Cell 의 right 로 대체되고, top 은 윗쪽 Cell 의 bottom 으로 대체됩니다.
   배경 영역 설정 시 이와 같은 특성을 고려하여야 합니다.

- 배경 이미지를 중앙에 위치시키려면 <position> 값을 "center" 또는 "center center" 로 설정하여야 합니다.

- 배경이미지와 배경색을 모두 설정하면 배경색 위에 이미지가 표시됩니다.
   그라데이션과 배경색을 모두 설정하면 배경색 위에 그라데이션이 표시됩니다.

- 그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
   두 값을 동시에 설정 시 오동작이 발생할 수 있습니다.


---

### border-radius

> Components > Component > Grid > Objects > GridCellControl > Property > border-radius

**Description**

Cell 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.borderRadius[= strborderradius]
```

**Setting Syntax**

```javascript
strborderradius ::= <horizontal-radius>{4} ['/' <vertical-radius>{4}]
```
```javascript
* XCSS
border-radius : 10px;
border-radius : 5px 6px 10px / 5px 10px;

* Script ( normal property )
this.Grid00.setCellProperty( "body", 0, "borderRadius", "10px");
this.Grid00.setCellProperty( "body", 0, "borderRadius", "5px 6px 10px / 5px 10px");
```
- **`<horizontal-radius>`** — 모서리를 둥글게 표시하기 위한 가로크기를 설정합니다.

pixel 단위로 입력하며 스페이스를 구분자로 4개값까지 설정할 수 있습니다.

값을 1회 입력 시 top-left/top-right/bottom-right/bottom-left 모서리의 가로크기로 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top-left/bottom-right, top-right/bottom-left 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top-left, top-right/bottom-left, bottom-right 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top-left, top-right, bottom-right, bottom-left 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
- **`<vertical-radius>`** — 모서리를 둥글게 표시하기 위한 세로크기를 설정합니다.

pixel 단위로 입력하며 스페이스를 구분자로 4개값까지 설정할 수 있습니다.

값을 1회 입력 시 top-left/top-right/bottom-right/bottom-left 모서리의 세로크기로 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top-left/bottom-right, top-right/bottom-left 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top-left, top-right/bottom-left, bottom-right 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top-left, top-right, bottom-right, bottom-left 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.

**Remark**

- border-radius 속성값을 설정하지 않으면 undefined 가 설정되고, "0px" 로 동작합니다. 

- 스크립트로 접근 시 속성명은 "borderRadius" 를 사용해야 합니다.

- <horizontal-radius>와 <vertical-radius>는 "/" 문자로 구분하여 입력합니다.

- Calendar, Combo 와 같이 하위 컨트롤이 존재하는 컴포넌트는 하위컨트롤에도 border-radius 속성을 설정해야 정상적으로 모서리가 표시됩니다.


◆ NRE 제약

- border-radius 속성을 설정하면 모든 테두리가 같은 색으로 적용됩니다.
   -nexa-border 속성에서 top 에 적용된 색이 모든 테두리에 적용됩니다.


---

### calendarautoselect

> Components > Component > Grid > Objects > GridCellControl > Property > calendarautoselect

**Description**

Cell 의 edittype 속성값이 "date" 일 경우 편집영역이 활성화 되면 텍스트를 전체선택 할지 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.calendarautoselect[= bAutoselect]
```

**Setting Syntax**

```javascript
bAutoselect ::= 'true' | 'false'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "calendarautoselect", "true" );
```
- **`true`** — Cell 의 편집영역이 활성화 될 때 텍스트가 전체선택 됩니다.
- **`false`** — Cell 의 편집영역이 활성화 될 때 텍스트가 선택되지 않습니다.

**Remark**

- calendarautoselect 속성값을 설정하지 않으면 false 로 적용됩니다.


◆ web runtime environment 제약

- 마우스 또는 터치에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 정상동작합니다.
  그러나 setFocus() 메소드에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 되지 않을 수 있습니다.


---

### calendarbackgroundcol

> Components > Component > Grid > Objects > GridCellControl > Property > calendarbackgroundcol

**Description**

Cell이 Calendar 형식일 때 Calendar 의 특정날짜에 배경색을 표시하기 위해 calendardataset 속성에 설정된 Dataset 오브젝트의 Column을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.calendarbackgroundcol[= strColumnID]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "calendarbackgroundcol", "column0')";
```
- **`strColumnID`** — 배경색이 정의된 Column 의 ID를 문자열로 설정합니다.

**Remark**

- calendardataset 속성에 설정된 Dataset 오브젝트의 Column만 설정할 수 있습니다.
- calendardatecol 속성에 설정된 특정날짜에 calendarbackgroundcol 에 설정된 배경색이 적용됩니다.


---

### calendarbordercol

> Components > Component > Grid > Objects > GridCellControl > Property > calendarbordercol

**Description**

Cell이 Calendar 형식일 때 Calendar 의 특정날짜에 테두리을 표시하기 위해 calendardataset 속성에 설정된 Dataset 오브젝트의 Column을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.calendarbordercol[= strColumnID]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "calendarbordercol", "column0')";
```
- **`strColumnID`** — 테두리값이 정의된 Column 의 ID를 문자열로 설정합니다.

**Remark**

- calendardataset 속성에 설정된 Dataset 오브젝트의 Column만 설정할 수 있습니다. 
- calendardatecol 속성에 설정된 특정날짜에 calendarbordercol 에 설정된 테두리값을 적용됩니다.


---

### calendarbuttonsize

> Components > Component > Grid > Objects > GridCellControl > Property > calendarbuttonsize

**Description**

Cell 이 Calendar 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.calendarbuttonsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.Grid00.setCellProperty( "body", 0, "calendarbuttonsize", "30");
this.Grid00.setCellProperty( "body", 0, "calendarbuttonsize", "30 20");
```
- **`<strWidth>`** — 드롭다운 버튼의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 드롭다운 버튼의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- calendarbuttonsize 속성값을 설정하지 않으면 Grid 의 cellcalendarbuttonsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### calendardataset

> Components > Component > Grid > Objects > GridCellControl > Property > calendardataset

**Description**

Cell이 Calendar 형식일 때 Calendar 에 특정날짜를 표시하기 위해 Dataset 오브젝트 ID를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.calendardataset[= strDatasetID]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "calendardataset", "Dataset00')";
```
- **`strDatasetID`** — Calendar에 표시할 특정날짜와 효과에 대한 데이터가 담긴 Dataset 의 ID를 문자열로 설정합니다.

**Remark**

- Dataset 오브젝트에는 calendardatecol, calendarbackgroundcol, calendarbordercol, calendartextcolorcol 속성에 설정할 수 있는 Column 이 있어야 합니다.
   > calendardatecol : 특정날짜의 데이터가 있는 Column을 설정합니다.
   > calendarbackgroundcol : 특정날짜의 배경색 데이터가 있는 Column을 설정합니다.
   > calendarbordercol : 특정날짜의 테두리 데이터가 있는 Column을 설정합니다.
   > calendartextcolorcol : 특정날짜의 날짜색 데이터가 있는 Column을 설정합니다.


---

### calendardatecol

> Components > Component > Grid > Objects > GridCellControl > Property > calendardatecol

**Description**

Cell이 Calendar 형식일 때 Calendar 에 특정날짜를 표시하기 위해 calendardataset 속성에 설정된 Dataset 오브젝트의 Column을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.calendardatecol[= strColumnID]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "calendardatecol", "column0')";
```
- **`strColumnID`** — 특정날짜가 정의된 Column 의 ID를 문자열로 설정합니다.

**Remark**

- calendardataset 속성에 설정된 Dataset 오브젝트의 Column만 설정할 수 있습니다.
- calendardatecol 속성에 설정된 특정날짜에 calendarbackgroundcol, calendarbordercol, calendartextcolorcol 에 설정된 효과가 적용됩니다.


---

### calendardateformat

> Components > Component > Grid > Objects > GridCellControl > Property > calendardateformat

**Description**

Cell 의 displaytype 속성값이 "date" 또는 "calendarcontrol" 일 경우 표시되는 날짜의 형식을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.calendardateformat[= strFormat]
```

**Setting Syntax**

```javascript
strFormat ::= <maskchar> | 'LONGDATE' | 'SHORTDATE'

<maskchar> ::= [<Year>] [<Month>] [<Day>] [<Week>] [<Hour>] [<Minute>] [<Second>] [<MiliSec>]


* <maskchar>는 날짜와 시간을 표시하기 위한 마스크 문자의 조합으로 각 요소의 순서변경과 생략이 가능합니다.
```
```javascript
this.Grid00.setCellProperty( "body", 0, "calendardateformat", "yyyy-MM-dd ddd");
this.Grid00.setCellProperty( "body", 0, "calendardateformat", "yyyy-MM-dd ddd HH:mm:ss");
```
- **`<Year>`** — 연도를 표시하는 마스크 문자를 설정합니다.

"yy" 설정 시 연도의 뒤 두자리만 표시합니다.
"yyyy" 설정 시 연도를 네자리로 모두 표시합니다.
- **`<Month>`** — 월을 표시하는 마스크 문자를 설정합니다.

"M" 설정 시 1월~9월은 한자리로 표시하고 10월~12월은 두자리로 표시합니다.
"MM" 설정 시 모든 월을 두자리로 표시하고 1월~9월은 앞자리에 "0"을 표시합니다.
"MMM" 설정 시 로케일 설정값에 따라 축약된 형식으로 월 문자열을 표시합니다.
"MMMM" 설정 시 로케일 설정값에 따라 확장된 형식으로 월 문자열을 표시합니다.

* 예를 들어 locale 속성값이 "en_US", text 속성값이 "20241105"인 경우 calendardateformat 속성값에 따라 화면에 표시되는 데이터는 아래와 같습니다.
- "MMM d, yyyy": Nov 5, 2024
- "MMMM d, yyyy": November 5, 2024
- **`<Day>`** — 일을 표시하는 마스크 문자를 설정합니다.

"d" 설정 시 1일~9일은 한자리로 표시하고 나머지 일은 두자리로 표시합니다.
"dd" 설정 시 모든 일을 두자리로 표시하고 1일~9일은 앞자리에 "0"을 표시합니다.
- **`<Week>`** — 요일을 표시하는 마스크 문자를 설정합니다.

"ddd" 설정 시 축약된 요일명을 표시합니다.
"dddd" 설정 시 전체 요일명을 표시합니다.
- **`<Hour>`** — 시간을 표시하는 마스크 문자를 설정합니다.

"h" 설정 시 12시간을 기준으로 1시~9시는 한자리로 표시하고 나머지 시간은 두자리로 표시합니다.
"hh" 설정 시 12시간을 기준으로 모든 시를 두자리로 표시하고 1시~9시는 앞자리에 "0"을 표시합니다.
"H" 설정 시 24시간을 기준으로 1시~9시는 한자리로 표시하고 나머지 시간은 두자리로 표시합니다.
"HH" 설정 시 24시간을 기준으로 모든 시를 두자리로 표시하고 1시~9시는 앞자리에 "0"을 표시합니다.
- **`<Minute>`** — 분을 표시하는 마스크 문자를 설정합니다.

"m" 설정 시 1분~9분은 한자리로 표시하고 나머지 분은 두자리로 표시합니다.
"mm" 설정 시 모든 분을 두자리로 표시하고 1분~9분은 앞자리에 "0"을 표시합니다.
- **`<Second>`** — 초를 표시하는 마스크 문자를 설정합니다.

"s" 설정 시 1초~9초는 한자리로 표시하고 나머지 초는 두자리로 표시합니다.
"ss" 설정 시 모든 초를 두자리로 표시하고 1초~9초는 앞자리에 "0"을 표시합니다.
- **`<MiliSec>`** — 밀리초를 표시하는 마스크 문자를 설정합니다.

"sss" 설정 시 모든 밀리초를 세자리로 표시하고 1밀리초~99밀리초는 앞자리에 "0"을 표시합니다.
- **`"LONGDATE"`** — 넥사크로 내부에 정의된 국가별 날짜 형식에서 "자세한 날짜" 형식을 추출하여 포맷으로 설정합니다.
- **`"SHORTDATE"`** — 넥사크로 내부에 정의된 국가별 날짜 형식에서 "간단한 날짜" 형식을 추출하여 포맷으로 설정합니다.

**Remark**

- calendardateformat 속성값을 설정하지 않으면 "yyyy-MM-dd ddd"로 적용됩니다.

- Cell 이 편집가능한 상태일 때 표시되는 날짜 형식은 calendareditformat 속성에 설정합니다.

- 정의된 마스크 문자 이외의 문자를 설정하는 경우 화면에 그대로 표시되며 해당 문자를 편집할 수 없습니다.


◆ Mobile 제약

- calendartype 속성값이 "normal" 이고 calendarpopuptype 속성값이 "system" 이거나 설정하지 않았을 경우 calendardateformat 속성값이 적용되지 않습니다.
   모바일 환경에 따라 브라우저 또는 시스템의 날짜형식이 적용됩니다.
   브라우저 또는 시스템의 날짜형식이 적용될 때 사용자가 설정한 calendardateformat 속성값을 변경시키지 않습니다.


◆ Excel Export 제약

- Excel 은 "LONGDATE" 를 지원하지 않으므로 "LONGDATE" 를 설정하여도 "SHORTDATE" 로 Export 됩니다.

- Excel Export 시 특정 locale 은 지원되지 않습니다.
  "ar_AE","ar_BH","ar_DZ","ar_EG","ar_IQ","ar_JO","ar_KW","ar_LB","ar_LY","ar_MA","ar_OM","ar_QA","ar_SA","ar_SY","ar_TN","ar_YE","de_DE","he_IL" 등


---

### calendardaysize

> Components > Component > Grid > Objects > GridCellControl > Property > calendardaysize

**Description**

Cell 이 Calendar 형식일 때 팝업으로 표시되는 달력의 각 날짜영역크기를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.calendardaysize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [<strHeight>]
```
```javascript
this.Grid00.setCellProperty( "body", 0, "calendardaysize", "10 10");
```
- **`<strWidth>`** — 팝업달력의 각 날짜영역 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 팝업달력의 각 날짜영역 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### calendardisplayinvalidtext

> Components > Component > Grid > Objects > GridCellControl > Property > calendardisplayinvalidtext

**Description**

Cell 이 Calendar 형식일 때 바인드 된 데이터값이 유효하지 않으면 대체되어 표시할 문자열을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.calendardisplayinvalidtext[= enumType]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "calendardisplayinvalidtext", "Data Error')";
```
- **`strText`** — Cell 에 바인드 된 데이터가 NaN, ±Infinity, 유효하지 않은 값 일 때 Cell 에 표시될 대체 문자열을 설정합니다.

**Remark**

- calendardisplayinvalidtext 속성값을 설정하지 않으면 undefined 가 설정되고 "invalid value" 로 동작합니다.

- calendardisplayinvalidtype 속성값이 "invalidtext" 일 때만 적용되는 속성입니다.


---

### calendardisplayinvalidtype

> Components > Component > Grid > Objects > GridCellControl > Property > calendardisplayinvalidtype

**Description**

Cell 이 Calendar 형식일 때 바인드 된 데이터값이 유효하지 않으면 대체되어 표시할 형식을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.calendardisplayinvalidtype[= nHeight]
```

**Setting Syntax**

```javascript
enumType ::= 'default' | 'none' | 'invalidtext'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "calendardisplayinvalidtype", "none" );
```
- **`"default"`** — Cell 에 "invalid text" 문자열을 표시합니다.
- **`"none"`** — Cell 에 바인드된 데이터값을 그대로 표시합니다.
- **`"invalidtext"`** — Cell 에 calendardisplayinvalidtext 속성값을 표시합니다.

**Remark**

- calendardisplayinvalidtype 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- 바인드 된 데이터가 NaN, ±Infinity, 유효하지 않은 값 일 때 적용되는 속성입니다.


---

### calendardisplaynulltext

> Components > Component > Grid > Objects > GridCellControl > Property > calendardisplaynulltext

**Description**

Cell 의 calendardisplaynulltype 속성값이 "nulltext" 일 경우 Cell 에 표시할 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.calendardisplaynulltext[= strText]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "calendardisplaynulltext", "No Data");
```
- **`strText`** — Cell 에 바인드된 데이터가 null 일 때 Cell 에 표시할 텍스트를 설정합니다.

**Remark**

- Cell 에 포커스가 없을 때 대체 텍스트가 표시됩니다.


---

### calendardisplaynulltype

> Components > Component > Grid > Objects > GridCellControl > Property > calendardisplaynulltype

**Description**

Cell 의 displaytype 속성값이 "date" 또는 "calendarcontrol" 이고 바인드 된 값이 "null" 인 경우 Cell 에 표시되는 값을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.calendardisplaynulltype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'default' | 'nulltext' | 'nullmask'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "calendardisplaynulltype", "default");
```
- **`"none"`** — 빈 문자열을 표시합니다.
- **`"default"`** — calendardateformat 속성값으로 설정된 형식에 따라 "0000/01/01" 값을 표시합니다.
- **`"nulltext"`** — calendardisplaynulltext 속성값을 표시합니다.
- **`"nullmask"`** — calendardateformat 속성값으로 설정된 형식에 빈 문자열을 표시합니다.


---

### calendareditformat

> Components > Component > Grid > Objects > GridCellControl > Property > calendareditformat

**Description**

Cell 의 edittype 속성값이 "date" 일 경우 입력받는 날짜의 형식을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.calendareditformat[= strFormat]
```

**Setting Syntax**

```javascript
strFormat ::= <maskchar> | 'LONGDATE' | 'SHORTDATE'

<maskchar> ::= [<Year>] [<Month>] [<Day>] [<Hour>] [<Minute>] [<Second>]


* <maskchar>는 날짜와 시간을 입력하기 위한 마스크 문자의 조합으로 각 요소의 순서변경과 생략이 가능합니다.
```
```javascript
this.Grid00.setCellProperty( "body", 0, "calendareditformat", "yyyy-MM-dd");
this.Grid00.setCellProperty( "body", 0, "calendareditformat", "yyyy-MM-dd HH:mm:ss");
```
- **`<Year>`** — 연도를 표시하는 마스크 문자를 설정합니다.

"yy" 설정 시 연도의 뒤 두자리만 표시합니다.
"yyyy" 설정 시 연도를 네자리로 모두 표시합니다.
- **`<Month>`** — 월을 표시하는 마스크 문자를 설정합니다.

"M" 설정 시 1월~9월은 한자리로 표시하고 10월~12월은 두자리로 표시합니다.
"MM" 설정 시 모든 월을 두자리로 표시하고 1월~9월은 앞자리에 "0"을 표시합니다.
- **`<Day>`** — 일을 표시하는 마스크 문자를 설정합니다.

"d" 설정 시 1일~9일은 한자리로 표시하고 나머지 일은 두자리로 표시합니다.
"dd" 설정 시 모든 일을 두자리로 표시하고 1일~9일은 앞자리에 "0"을 표시합니다.
- **`<Hour>`** — 시간을 표시하는 마스크 문자를 설정합니다.

"H" 설정 시 24시간을 기준으로 1시~9시는 한자리로 표시하고 나머지 시간은 두자리로 표시합니다.
"HH" 설정 시 24시간을 기준으로 모든 시를 두자리로 표시하고 1시~9시는 앞자리에 "0"을 표시합니다.
- **`<Minute>`** — 분을 표시하는 마스크 문자를 설정합니다.

"m" 설정 시 1분~9분은 한자리로 표시하고 나머지 분은 두자리로 표시합니다.
"mm" 설정 시 모든 분을 두자리로 표시하고 1분~9분은 앞자리에 "0"을 표시합니다.
- **`<Second>`** — 초를 표시하는 마스크 문자를 설정합니다.

"s" 설정 시 1초~9초는 한자리로 표시하고 나머지 초는 두자리로 표시합니다.
"ss" 설정 시 모든 초를 두자리로 표시하고 1초~9초는 앞자리에 "0"을 표시합니다.
- **`"LONGDATE"`** — 넥사크로 내부에 정의된 국가별 날짜 형식에서 "자세한 날짜" 형식을 추출하여 포맷으로 설정합니다.
- **`"SHORTDATE"`** — 넥사크로 내부에 정의된 국가별 날짜 형식에서 "간단한 날짜" 형식을 추출하여 포맷으로 설정합니다.

**Remark**

- calendareditformat 속성값을 설정하지 않으면 "yyyy-MM-dd"로 적용됩니다.

- Cell 에 포커스가 없을 때 표시되는 날짜 형식은 calendardateformat 속성에 설정합니다.

- 정의된 마스크 문자 이외의 문자를 설정하는 경우 화면에 그대로 표시되며 해당 문자를 편집할 수 없습니다.


◆ Mobile 제약

- calendartype 속성값이 "normal" 이고 calendarpopuptype 속성값이 "system" 이거나 설정하지 않았을 경우 calendareditformat 속성값이 적용되지 않습니다.
   모바일 환경에 따라 브라우저 또는 시스템의 날짜형식이 적용됩니다.
   브라우저 또는 시스템의 날짜형식이 적용될 때 사용자가 설정한 calendareditformat 속성값을 변경시키지 않습니다.


---

### calendarheadformat

> Components > Component > Grid > Objects > GridCellControl > Property > calendarheadformat

**Description**

Cell 이 Calendar 형식일 때 팝업달력의 상단에 표시되는 년/월의 순서를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.calendarheadformat[= strFormat]
```

**Setting Syntax**

```javascript
strFormat ::= 'yyyy.MM' | 'MM.yyyy'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "calendarheadformat", "MM.yyyy");
```
- **`"yyyy.MM"`** — 팝업달력 상단에 년,월 순으로 표시됩니다.
- **`"MM.yyyy"`** — 팝업달력 상단에 월,년 순으로 표시됩니다.

**Remark**

- calendarheadformat 속성값을 설정하지 않거나 허용하지 않는 값을 설정하면 "yyyy.MM" 으로 적용됩니다.


---

### calendarheadheight

> Components > Component > Grid > Objects > GridCellControl > Property > calendarheadheight

**Description**

Cell 이 Calendar 형식일 때 팝업달력에서 년/월이 표시되는 Head 영역의 높이를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.calendarheadheight[= nHeight]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "calendarheadheight", "60");
```
- **`nHeight`** — 년/월이 표시되는 Head 영역의 높이를 pixel 단위의 숫자로 설정합니다.


---

### calendarpopupsize

> Components > Component > Grid > Objects > GridCellControl > Property > calendarpopupsize

**Description**

Cell 이 Calendar 형식일 때 팝업으로 표시되는 달력의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.calendarpopupsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.Grid00.setCellProperty( "body", 0, "calendarpopupsize", "500 400");
```
- **`<strWidth>`** — 팝업달력의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 팝업달력의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- calendarpopupsize 속성값을 설정하지 않으면 Grid 의 cellcalendarpopupsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### calendarpopuptype

> Components > Component > Grid > Objects > GridCellControl > Property > calendarpopuptype

**Description**

Cell 이 Calendar 형식일 때 팝업달력(DatePicker)이 표시되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.calendarpopuptype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'normal' | 'center' | 'system'
```
```javascript
this.Grid00.setCellProperty("body", 0, "calendarpopuptype", "system')";
```
- **`"none"`** — 팝업달력을 화면에 표시하지 않습니다.
- **`"normal"`** — 팝업달력이 표시되는 일반적인 규칙을 따릅니다.
- **`"center"`** — 어플리케이션이 실행중인 화면의 중앙에 팝업달력이 표시됩니다.
- **`"system"`** — 데스크탑 환경이면 설정값이 무시되고 "normal" 로 동작합니다.

모바일 환경이면 시스템에서 제공하는 팝업달력이 표시됩니다.

모바일 환경일 때 날짜형식은calendardateformat, calendareditformat 속성값이 적용되지 않으며아래와 같이 처리됩니다.시스템 제약사항이며 날짜형식을 변경할 수 없으므로 사용에 주의하여야 합니다.
  > Android WRE, iOS/iPadOS WRE 는 브라우저 또는 시스템의 날짜형식이 적용됩니다.
  > Android NRE, iOS/iPadOS NRE 는 시스템의 날짜형식이 적용됩니다.
  > iOS/iPadOS NRE 는 시스템의 날짜형식과 관계없이 "yyyy.MM.dd" 형식이 적용되는 경우가 있습니다.* 모바일 환경에서 날짜형식 제약이 적용될 때 사용자가 설정한 calendardateformat, calendareditformat 속성값은 변경되지 않습니다.
* Android 에서 팝업달력의 날짜 변경 후 결정을 입력하거나 iOS/iPadOS 에서 팝업달력의 날짜변경 스핀을 멈추면 oninput -> canchange -> onchanged 순서로 이벤트가 발생합니다.

**Remark**

- calendarpopuptype 속성값을 설정하지 않으면 Grid 의 cellcalendarpopuptype 속성값이 적용됩니다.

- calendartype 속성값이 "normal" 일때만 적용되며 모바일환경 같은 특별한 경우에 제한적으로 사용해야 하는 속성입니다.

- 다중 모니터의 경우 Grid 가 표시되고 있는 모니터를 기준으로 팝업달력이 표시됩니다.


---

### calendarshowmonthspin

> Components > Component > Grid > Objects > GridCellControl > Property > calendarshowmonthspin

**Description**

Cell 이 Calendar 형식일 때 팝업달력의 상단에 월 변경버튼을 표시할 지 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.calendarshowmonthspin[= bShow]
```

**Setting Syntax**

```javascript
bShow ::= 'true' | 'false'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "calendarshowmonthspin", "true')";
```
- **`"true"`** — 팝업달력 Head 영역에 표시되는 월의 오른쪽에 변경버튼을 항상 표시합니다.
- **`"false"`** — 팝업달력 Head 영역에 표시되는 월이 선택되면 변경버튼을 표시합니다.

**Remark**

- calendarshowmonthspin 속성값을 설정하지 않으면 "false"로 적용됩니다.

**See Also**

GridCellControl.calendarshowyearspin


---

### calendarshowyearspin

> Components > Component > Grid > Objects > GridCellControl > Property > calendarshowyearspin

**Description**

Cell 이 Calendar 형식일 때 팝업달력의 상단에 연도 변경버튼을 표시할 지 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.calendarshowyearspin[= bShow]
```

**Setting Syntax**

```javascript
bShow ::= 'true' | 'false'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "calendarshowyearspin", "true')";
```
- **`"true"`** — 팝업달력 Head 영역에 표시되는 연도의 오른쪽에 변경버튼을 항상 표시합니다.
- **`"false"`** — 팝업달력 Head 영역에 표시되는 연도가 선택되면 변경버튼을 표시합니다.

**Remark**

- calendarshowyearspin 속성값을 설정하지 않으면 "false"로 적용됩니다.

**See Also**

GridCellControl.calendarshowmonthspin


---

### calendartextcolorcol

> Components > Component > Grid > Objects > GridCellControl > Property > calendartextcolorcol

**Description**

Cell이 Calendar 형식일 때 Calendar 의 특정날짜에 날짜색을 표시하기 위해 calendardataset 속성에 설정된 Dataset 오브젝트의 Column을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.calendartextcolorcol[= strColumnID]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "calendartextcolorcol", "column0')";
```
- **`strColumnID`** — 날짜색이 정의된 Column 의 ID를 문자열로 설정합니다.

**Remark**

- calendardataset 속성에 설정된 Dataset 오브젝트 의 Column만 설정할 수 있습니다. 
- calendardatecol 속성에 설정된 특정날짜에 calendartextcolorcol 에 설정된 날짜색이 적용됩니다.


---

### calendartype

> Components > Component > Grid > Objects > GridCellControl > Property > calendartype

**Description**

Cell 이 Calendar 형식일 때 Calendar가 화면에 표시되는 형식을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.calendartype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'normal' | 'monthonly' | 'spin'
```
```javascript
this.Grid00.setCellProperty("body", 0, "calendartype", "normal";
```
- **`"normal"`** — 날짜 입력영역과 팝업달력 드롭다운 버튼이 있는 Calendar가 표시됩니다.
- **`"monthonly"`** — 일반적인 월 단위 달력형태의 Calendar가 표시됩니다.
- **`"spin"`** — 날짜 입력영역과 날짜값을 변경하는 스핀버튼이 있는 Calendar가 표시됩니다.

**Remark**

- calendartype 속성값을 설정하지 않으면 "normal"로 적용됩니다.


---

### calendarusetrailingday

> Components > Component > Grid > Objects > GridCellControl > Property > calendarusetrailingday

**Description**

Cell 이 Calendar 형식일 때 팝업달력의 시작/끝 여백에 전/후 달의 날짜를 표시할지 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.calendarusetrailingday[= bTrail]
```

**Setting Syntax**

```javascript
bTrail ::= 'true' | 'false'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "calendarusetrailingday", "true')";
```
- **`"true"`** — 팝업달력의 시작/끝 여백에 전/후 달의 날짜를 표시합니다.
- **`"false"`** — 팝업달력의 시작/끝 여백을 그대로 표시합니다.

**Remark**

- calendarusetrailingday 속성값을 설정하지 않으면 "false"로 적용됩니다.

- calendarusetrailingday 속성값을 "false"로 설정하면 전/후 달의 날짜가 표시되지 않고 선택할 수 없습니다.


---

### calendarweekformat

> Components > Component > Grid > Objects > GridCellControl > Property > calendarweekformat

**Description**

Cell 이 Calendar 형식일 때 팝업달력에 요일이 표시되는 형식을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.calendarweekformat[= strFormat]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty("body", 0, "calendarweekformat","S M T W T F S')";
```
- **`strFormat`** — 팝업달력에 표시되는 요일을 공백문자로 구분하여 문자열로 설정합니다.

null 또는 "" 설정 시 국가별 설정에 정의된 기준으로 요일이 표시됩니다.
공백문자(space) 설정 시 팝업달력에 요일이 표시되지 않습니다.


---

### checkboxfalsevalue

> Components > Component > Grid > Objects > GridCellControl > Property > checkboxfalsevalue

**Description**

Cell 이 CheckBox 형식일 때 False 로 처리되는 값을 문자열로 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.checkboxfalsevalue[= strValue]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "checkboxfalsevalue", "F')";
```
- **`strValue`** — CheckBox 에서 False 로 처리될 문자열을 설정합니다.

설정값과 Cell 에 표시되는 텍스트값이 일치하면 False 로 처리하여 CheckBox 의 체크가 해제됩니다.

**Remark**

- checkboxfalsevalue 속성값을 설정하지 않으면 false 또는 0 값으로 적용됩니다.

- Cell 의 edittype 속성값이 "checkbox" 일 때 Cell 에 표시되는 CheckBox 에 적용됩니다.
   Cell 의 displaytype 속성값이 "checkboxcontrol" 일 때 Cell 에 표시되는 CheckBox 에 적용됩니다.

- Cell 의 CheckBox 에 클릭등의 방법으로 체크해제하면 바인드 된 Column 에 checkboxfalsevalue 속성값이 저장됩니다.

- checkboxtruevalue 속성값과 checkboxfalsevalue 속성값이 같으면 checkboxtruevalue 속성값이 우선 적용됩니다.


---

### checkboxsize

> Components > Component > Grid > Objects > GridCellControl > Property > checkboxsize

**Description**

Cell 이 CheckBox 형식일 때 CheckBox 의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.checkboxsize[= nSize]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "checkboxsize", "25')";
```
- **`nSize`** — Cell 에 표시되는 CheckBox 의 크기를 pixel 단위의 숫자로 설정합니다.

설정값은 표시되는 CheckBox 의 가로/세로 크기에 동일하게 적용됩니다.

**Remark**

- Cell 의 edittype 속성값이 "checkbox" 이거나 "tree" 일 때 Cell 에 표시되는 CheckBox 에 적용됩니다.
   Cell 의 displaytype 속성값이 "checkboxcontrol" 이거나 "treeitemcontrol" 일 때 Cell 에 표시되는 CheckBox 에 적용됩니다.

- checkboxsize 속성값을 설정하지 않으면 Grid 의 cellcheckboxsize 속성값이 적용됩니다.
   checkboxsize, cellcheckboxsize 속성을 모두 설정하지 않으면 테마에 정의된 CheckBox 이미지 크기에 맞게 적용됩니다.

- 테마에서 CheckBox 이미지 크기는 GridCellControl 하위의 cellcheckbox 셀렉터에 정의됩니다.

- 테마에 정의된 CheckBox 이미지 크기보다 checkboxsize 속성값을 작게 설정할 경우 이미지가 잘려서 표시됩니다.


---

### checkboxtruevalue

> Components > Component > Grid > Objects > GridCellControl > Property > checkboxtruevalue

**Description**

Cell 이 CheckBox 형식일 때 True 로 처리되는 값을 문자열로 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.checkboxtruevalue[= strValue]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "checkboxtruevalue", "T')";
```
- **`strValue`** — CheckBox 에서 True 로 처리될 문자열을 설정합니다.

설정값과 Cell 에 표시되는 텍스트값이 일치하면 True 로 처리하여 CheckBox 에 체크가 표시됩니다.

**Remark**

- checkboxtruevalue 속성값을 설정하지 않으면 true 또는 1 값으로 적용됩니다.

- Cell 의 edittype 속성값이 "checkbox" 일 때 Cell 에 표시되는 CheckBox 에 적용됩니다.
   Cell 의 displaytype 속성값이 "checkboxcontrol" 일 때 Cell 에 표시되는 CheckBox 에 적용됩니다.

- Cell 의 CheckBox 에 클릭등의 방법으로 체크설정하면 바인드 된 Column 에 checkboxtruevalue 속성값이 저장됩니다.

- checkboxtruevalue 속성값과 checkboxfalsevalue 속성값이 같으면 checkboxtruevalue 속성값이 우선 적용됩니다.


---

### col

> Components > Component > Grid > Objects > GridCellControl > Property > col

**Description**

Cell 에 정의된 Column 인덱스 값이 저장된 읽기전용 속성입니다.

**Syntax**

```javascript
GridCellControl.col
```

**Remark**

- Column 인덱스는 Cell 이 표시되는 위치를 나타냅니다.

- 같은 Column 위치의 Cell 은 Head, Body, Summary 밴드에 관계없이 동일한 값을 갖습니다.

- Grid 에서 탭키 입력 시 포커스가 Cell 을 이동하는 순서와 일치합니다.

- 넥사크로 스튜디오의 Grid Contents Editor 에서 디자인 시 자동으로 설정되는 속성입니다.


---

### color

> Components > Component > Grid > Objects > GridCellControl > Property > color

**Description**

Cell 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.color[= strcolor]
```

**Setting Syntax**

```javascript
strcolor ::= <NamedColor> | <NumericColor>
```
```javascript
* XCSS
color : #999999;
color : rgb ( 255, 0, 0 );
color : red;

* Script ( normal property )
this.Grid00.setCellProperty( "body", 0, "color", "#999999')";
this.Grid00.setCellProperty( "body", 0, "color", "rgb(255,0,0)')";
this.Grid00.setCellProperty( "body", 0, "color", "red')";
```
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- color 속성값을 설정하지 않으면 undefined 가 설정되고, "#000000" 으로 동작합니다.


◆ web runtime environment 제약

- XCSS 를 사용하지 않고 rgba(), hsl(), hsla() 메소드를 속성에 직접 설정할 경우 브라우저 버전에 따라 적용되지 않을 수 있습니다.


---

### colspan

> Components > Component > Grid > Objects > GridCellControl > Property > colspan

**Description**

Cell 에 병합된 Column 의 갯수가 저장된 읽기전용 속성입니다.

**Syntax**

```javascript
GridCellControl.colspan
```

**Remark**

- 병합(Merge) 된 Cell 이 아닐 경우 "1" 값을 갖습니다.

- 병합(Merge) 된 Cell 이 있는 Column 은 Head 영역을 드래그하여 Column 순서를 바꿀 수 없습니다.


---

### comboautoselect

> Components > Component > Grid > Objects > GridCellControl > Property > comboautoselect

**Description**

Cell 이 Combo 형식일 때 편집영역이 활성화 되면 텍스트를 전체선택 할지 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.comboautoselect[= bAutoselect]
```

**Setting Syntax**

```javascript
bAutoselect ::= 'true' | 'false'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "comboautoselect", "true" );
```
- **`true`** — Cell 의 편집영역이 활성화 될 때 텍스트가 전체선택 됩니다.
- **`false`** — Cell 의 편집영역이 활성화 될 때 텍스트가 선택되지 않습니다.

**Remark**

- comboautoselect 속성값을 설정하지 않으면 false 로 적용됩니다.

- Cell 이 Combo 형식일 때 편집영역이 활성화 되려면 edittype 속성값이 "combo" 이고, combotype 속성값이 "dropdown" 이외의 값이어야 합니다.


◆ web runtime environment 제약

- 마우스 또는 터치에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 정상동작합니다.
  그러나 setFocus() 메소드에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 되지 않을 수 있습니다.


---

### combobuttonsize

> Components > Component > Grid > Objects > GridCellControl > Property > combobuttonsize

**Description**

Cell 이 Combo 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.combobuttonsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.Grid00.setCellProperty( "body", 0, "combobuttonsize", "30')";
this.Grid00.setCellProperty( "body", 0, "combobuttonsize", "30 20')";
```
- **`<strWidth>`** — 드롭다운 버튼의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 드롭다운 버튼의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- combobuttonsize 속성값을 설정하지 않으면 Grid 의 cellcombobuttonsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### combocodecol

> Components > Component > Grid > Objects > GridCellControl > Property > combocodecol

**Description**

Cell 이 Combo 형식일 때 Cell 의 아이템 리스트에서 코드값으로 사용될 Column 을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.combocodecol[= strColumnID]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "combocodecol", "column0')";
```
- **`strColumnID`** — Cell 의 combodataset 속성에 설정된 DataSet 의 Column 중 코드값으로 사용할 Column 의 ID 를 문자열로 설정합니다.

**Remark**

- Cell 의 edittype 속성값이 "combo" 일 경우 적용되는 속성입니다.
   Cell 의 displaytype 속성값이 "combotext" 또는 "combocontrol" 일 경우 적용되는 속성입니다.

- combocodecol 속성은 Body 밴드 영역의 Cell 에만 적용되는 속성입니다.

- combocodecol 속성을 설정하지 않으면 내부적으로 combodatacol 속성값을 사용합니다.

- combocodecol 속성에 설정된 Column 의 값은 아이템 리스트에 표시되지 않고 각 아이템의 코드값으로 처리됩니다.
   combodatacol 속성에 설정된 Column 의 값은 아이템 리스트에 표시되며 각 아이템의 데이터값으로 처리됩니다.

- 아이템 리스트의 코드값은 아이템을 구분하는 유일값으로 중복값을 가질 수 없습니다.
   만일 중복된 코드값이 존재할 경우 중복코드값의 첫번째 아이템이 항상 선택처리됩니다.
   
- Cell 에서 선택된 아이템의 코드값은 Cell 의 text 속성에 저장되고 Grid 에 바인딩 된 DataSet 에 반영됩니다.
   Cell 에는 선택된 코드값에 해당하는 아이템 리스트의 데이터값이 텍스트로 표시됩니다.


---

### combodatacol

> Components > Component > Grid > Objects > GridCellControl > Property > combodatacol

**Description**

Cell 이 Combo 형식일 때 Cell 의 아이템 리스트에서 데이터값으로 사용될 Column 을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.combodatacol[= strColumnID]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "combodatacol", "column1')";
```
- **`strColumnID`** — Cell 의 combodataset 속성에 설정된 DataSet 의 Column 중 데이터값으로 사용할 Column 의 ID 를 문자열로 설정합니다.

**Remark**

- Cell 의 edittype 속성값이 "combo" 일 경우 적용되는 속성입니다.
   Cell 의 displaytype 속성값이 "combotext" 또는 "combocontrol" 일 경우 적용되는 속성입니다.

- combodatacol 속성은 Body 밴드 영역의 Cell 에만 적용되는 속성입니다.

- combodatacol 속성을 설정하지 않으면 내부적으로 combocodecol 속성값을 사용합니다.

- combodatacol 속성에 설정된 Column 의 값은 아이템 리스트에 표시되며 각 아이템의 데이터값으로 처리됩니다.
   combocodecol 속성에 설정된 Column 의 값은 아이템 리스트에 표시되지 않고 각 아이템의 코드값으로 처리됩니다.

- 아이템 리스트의 코드값은 아이템을 구분하는 유일값으로 중복값을 가질 수 없습니다.
   만일 중복된 코드값이 존재할 경우 중복코드값의 첫번째 아이템이 항상 선택처리됩니다.
   
- Cell 에서 선택된 아이템의 코드값은 Cell 의 text 속성에 저장되고 Grid 에 바인딩 된 DataSet 에 반영됩니다.
   Cell 에는 선택된 코드값에 해당하는 아이템 리스트의 데이터값이 텍스트로 표시됩니다.


---

### combodataset

> Components > Component > Grid > Objects > GridCellControl > Property > combodataset

**Description**

Cell 이 Combo 형식일 때 Cell 의 아이템 리스트를 구성할 DataSet 의 ID를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.combodataset[= strDatasetID]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "combodataset", "Dataset00')";
```
- **`strDatasetID`** — Cell 의 아이템 리스트를 구성할 DataSet 의 ID를 문자열로 설정합니다.

**Remark**

- Cell 에서 Combo 아이템 리스트를 사용하기 위해서는 combocodecol 과 combodatacol 중 한개 속성과 combodataset 속성을 설정하여야 합니다.

- combodataset 속성에 설정한 DataSet 이 존재하지 않거나 데이터가 없을 경우 아이템 리스트가 정상적으로 표시되지 않습니다.

- combodataset 속성은 Body 밴드 영역의 Cell 에만 적용되는 속성입니다.


---

### combodisplaynulltext

> Components > Component > Grid > Objects > GridCellControl > Property > combodisplaynulltext

**Description**

Cell 이 Combo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시할 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.combodisplaynulltext[= strText]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "combodisplaynulltext", "No Data')";
```
- **`strText`** — Cell 이 Combo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시할 텍스트를 설정합니다.

**Remark**

- Combo 아이템의 코드값에 현재 Cell 에 바인드된 값이 없는 상태에서
  Cell 에 포커스가 없고, combodisplaynulltype 속성값이 "nulltext" 일 때 대체 텍스트가 표시됩니다.


---

### combodisplaynulltype

> Components > Component > Grid > Objects > GridCellControl > Property > combodisplaynulltype

**Description**

Cell 이 Combo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시되는 값의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.combodisplaynulltype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'nulltext'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "combodisplaynulltype", "nulltext" );
```
- **`"none"`** — Cell 에 바인드된 값과 일치하는 콤보 아이템이 없을 경우 빈 문자열을 표시합니다.
- **`"nulltext"`** — Cell 에 바인드된 값과 일치하는 콤보 아이템이 없을 경우 combodisplaynulltext 속성값을 표시합니다.

**Remark**

- combodisplaynulltype 속성값을 설정하지 않으면 "none" 으로 적용됩니다.


---

### combodisplayrowcount

> Components > Component > Grid > Objects > GridCellControl > Property > combodisplayrowcount

**Description**

Cell 이 Combo 형식일 때 아이템 리스트에 한번에 표시될 아이템의 갯수를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.combodisplayrowcount[= nRowNum]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "combodisplayrowcount", "5')";
```
- **`nRowNum`** — 아이템 리스트에 표시될 아이템의 갯수를 숫자로 설정합니다.

undefined 를 설정하면 아이템 리스트가 표시되는 공간에 맞게 자동으로 갯수가 설정됩니다.

**Remark**

- combodisplayrowcount 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- combodisplayrowcount 속성값 보다 아이템의 갯수가 작으면 아이템 갯수에 맞게 리스트가 표시됩니다.

- combodisplayrowcount 속성값 보다 아이템의 갯수가 많으면 아이템 리스트에 스크롤이 표시됩니다.

- Combo 하단에 아이템 3개를 표시할 공간이 없다면 아이템 리스트가 Combo 상단에 표시됩니다.
  상/하단 모두 아이템 3개를 표시할 공간이 없다면 더 넓은 방향으로 리스트가 표시됩니다.


---

### comboimemode

> Components > Component > Grid > Objects > GridCellControl > Property > comboimemode

**Description**

Cell 이 Combo 형식일 때 편집창에서 사용될 기본 입력 언어를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.comboimemode[= enumImemode]
```

**Setting Syntax**

```javascript
enumImemode ::= 'none' | 'alpha' | 'alpha,full' | 'hangul' | 'hangul,full' | 'katakana' | 'katakana,full' | 'hiragana' | 'direct'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "comboimemode", "alpha" );
```
- **`"none"`** — 기본 입력 언어를 변경하지 않고 현재 시스템에 설정된 언어를 유지합니다.
- **`"alpha"`** — 입력언어를 영문으로 설정합니다.

IME 가 동아시아 입력기(한글/일본어/한자) 일 경우만 적용됩니다.
- **`"alpha,full"`** — 입력언어를 영문 전각으로 설정합니다.

IME 가 동아시아 입력기(한글/일본어/한자) 일 경우만 적용됩니다.
- **`"hangul"`** — 입력언어를 한글로 설정합니다.

IME 가 한글 입력기일 경우만 적용됩니다.
- **`"hangul,full"`** — 입력언어를 한글 전각으로 설정합니다.

IME 가 한글 입력기일 경우만 적용됩니다.
- **`"katakana"`** — 입력언어를 일본어 가나로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"katakana,full"`** — 입력언어를 일본어 가나 전각으로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"hiragana"`** — 입력언어를 일본어 히라가나 전각으로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"direct"`** — 입력언어를 일본어 직접입력으로 설정합니다.

IME 가 IME2002 의 일본어 입력기일 경우만 적용됩니다.
IME 가 IME2007 과 2010 일 경우는 "alpha"로 적용됩니다.

**Remark**

- comboimemode 속성값을 설정하지 않으면 "none" 으로 적용됩니다.

- Cell 이 포커스를 받아 편집창이 활성화 될 때 IME가 재설정됩니다.

- 일부 환경에서만 지원하는 속성이므로 상단의 지원환경을 확인하시기 바랍니다.
   > Windows NRE, Android NRE에서만 지원하는 속성입니다.
   > macOS NRE, iOS/iPadOS NRE, WRE에서는 지원하지 않는 속성입니다.


---

### comboitemheight

> Components > Component > Grid > Objects > GridCellControl > Property > comboitemheight

**Description**

Cell 이 Combo 형식일 때 아이템 리스트의 각 행높이를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.comboitemheight[= nHeight]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "comboitemheight", "30')";
```
- **`nHeight`** — 각 아이템이 표시되는 행의 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- comboitemheight 속성을 설정하지 않으면 글자 크기를 기준으로 행의 높이를 자동 계산합니다.


---

### combopopupsize

> Components > Component > Grid > Objects > GridCellControl > Property > combopopupsize

**Description**

Cell 이 Combo 형식일 때 팝업으로 표시되는 아이템 리스트의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.combopopupsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.Grid00.setCellProperty( "body", 0, "combopopupsize", "500 400')";
```
- **`<strWidth>`** — 아이템 리스트의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 아이템 리스트의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- combopopupsize 속성값을 설정하지 않으면 Grid 의 cellcombopopupsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### combopopuptype

> Components > Component > Grid > Objects > GridCellControl > Property > combopopuptype

**Description**

Cell 이 Combo 형식일 때 아이템 리스트가 표시되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.combopopuptype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'normal' | 'center'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "combopopuptype", "center')";
```
- **`"none"`** — 아이템 리스트를 화면에 표시하지 않습니다.
- **`"normal"`** — 아이템 리스트가 표시되는 일반적인 규칙을 따릅니다.
- **`"center"`** — 어플리케이션이 실행중인 화면의 중앙에 아이템 리스트가 표시됩니다

**Remark**

- combopopuptype 속성값을 설정하지 않으면 Grid 의 cellcombopopuptype 속성값이 적용됩니다.

- 모바일환경 같은 특별한 경우에 제한적으로 사용해야 하는 속성입니다.

- 다중 모니터의 경우 Grid 가 표시되고 있는 모니터를 기준으로 아이템 리스트가 표시됩니다.


---

### comboscrollbarsize

> Components > Component > Grid > Objects > GridCellControl > Property > comboscrollbarsize

**Description**

Cell 이 Combo 형식일 때 아이템 리스트에 표시되는 스크롤바의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.comboscrollbarsize[= nWidth]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "comboscrollbarsize", "20" );
```
- **`nWidth`** — 스크롤바의 너비를 숫자로 설정합니다.

**Remark**

- comboscrollbarsize 속성값을 설정하지 않으면 Grid 의 cellcomboscrollbarsize 속성값이 적용됩니다.

- scrollbarsize 속성값을 변경하면 스크롤바 내부버튼의 높이와 너비가 같이 변경됩니다.


---

### combotype

> Components > Component > Grid > Objects > GridCellControl > Property > combotype

**Description**

Cell 이 Combo 형식일 때 동작하는 방법을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.combotype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'dropdown' | 'search' | 'filter' | 'filterlike' | 'caseisearch' | 'caseifilter' | 'caseifilterlike'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "combotype", "caseifilter')";
```
- **`"dropdown"`** — Combo 의 아이템 리스트에 전체 아이템이 모두 표시됩니다.

Cell 의 편집창에 문자를 입력할 수 없습니다.
- **`"search"`** — Cell 의 편집창에 문자열 입력 시 Combo 의 검색기능이 활성화됩니다.

편집창에 입력된 문자열로 시작하는 첫번째 아이템이 선택된 아이템 리스트가 표시됩니다.
편집창에 입력된 문자열로 시작하는 아이템이 없을 경우 아이템 리스트가 표시되지 않습니다.

아이템 리스트에는 전체 아이템이 모두 표시됩니다.
아이템 검색 시 대소문자를 구별합니다.
- **`"filter"`** — Cell 의 편집창에 문자열 입력 시 Combo 의 필터기능이 활성화됩니다.

편집창에 입력된 문자열로 시작하는 아이템만 있는 아이템 리스트가 표시됩니다.
편집창에 입력된 문자열로 시작하는 아이템이 없을 경우 아이템 리스트가 표시되지 않습니다.

문자를 추가로 입력하면 아이템 리스트가 자동으로 갱신됩니다.
아이템 필터 시 대소문자를 구별합니다.
- **`"filterlike"`** — Cell 의 편집창에 문자열 입력 시 Combo 의 필터기능이 활성화됩니다.

편집창에 입력된 문자열이 포함된 아이템만 있는 아이템 리스트가 표시됩니다.
편집창에 입력된 문자열이 포함된 아이템이 없을 경우 아이템 리스트가 표시되지 않습니다.

문자를 추가로 입력하면 아이템 리스트가 자동으로 갱신됩니다.
아이템 필터 시 대소문자를 구별합니다.
- **`"caseisearch"`** — Cell 의 편집창에 문자열 입력 시 Combo 의 검색기능이 활성화됩니다.

"search" 값과 동일하게 동작하며 아이템 검색 시 대소문자를 구별하지 않습니다.
- **`"caseifilter"`** — Cell 의 편집창에 문자열 입력 시 Combo 의 필터기능이 활성화됩니다.

"filter" 값과 동일하게 동작하며 아이템 필터 시 대소문자를 구별하지 않습니다.
- **`"caseifilterlike"`** — Cell 의 편집창에 문자열 입력 시 Combo 의 필터기능이 활성화됩니다.

"filterlike" 값과 동일하게 동작하며 아이템 필터 시 대소문자를 구별하지 않습니다.

**Remark**

- combotype 속성값을 설정하지 않으면 "dropdown" 으로 적용됩니다.

- combotype 속성값에 관계없이 Cell 의 드롭버튼(DropButton) 클릭 시 전체 아이템이 있는 아이템 리스트가 표시됩니다.

- combotype 속성을 "dropdown" 이외의 값으로 설정하면 검색/필터 기능이 활성화 됩니다.
   검색/필터 기능은 사용자의 입력을 돕기위한 기능으로 아이템 후보값을 편집 영역과 리스트 창을 통해 표시합니다.

- 아이템 리스트에서 마우스나 키보드에 의해 아이템을 선택하면 입력이 종료된 것으로 처리합니다.


---

### controlautosizingtype

> Components > Component > Grid > Objects > GridCellControl > Property > controlautosizingtype

**Description**

Cell 이 컨트롤 형식일 때 Cell 크기에 맞게 컨트롤 크기를 자동 조절할 지 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.controlautosizingtype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'width' | 'height' | 'both'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "controlautosizingtype", "width')";
```
- **`"none"`** — Cell 크기에 관계없이 내부 컨트롤의 크기는 디자인 시 값을 유지합니다.

Cell 크기가 내부 컨트롤 크기보다 작을 경우 컨트롤의 오른쪽과 아랫쪽이 잘려서 표시됩니다.
- **`"width"`** — Cell 의 크기에 맞게 내부 컨트롤의 너비를 자동 조정합니다.

내부 컨트롤의 높이는 디자인 시 값을 유지합니다.
Cell 의 높이가 내부 컨트롤 높이보다 작을 경우 컨트롤의 아랫쪽이 잘려서 표시됩니다.
- **`"height"`** — Cell 의 크기에 맞게 내부 컨트롤의 높이를 자동 조정합니다.

내부 컨트롤의 너비는 디자인 시 값을 유지합니다.
Cell 의 너비가 내부 컨트롤 너비보다 작을 경우 컨트롤의 오른쪽이 잘려서 표시됩니다.
- **`"both"`** — Cell 의 크기에 맞게 내부 컨트롤의 너비와 높이를 자동 조정합니다.

**Remark**

- controlautosizingtype 속성값을 설정하지 않으면 "both" 로 적용됩니다.

- Cell 이 CheckBox 형태이면 controlautosizingtype 속성값은 적용되지 않습니다.
   checkboxsize 속성값 또는 아이콘 크기에 맞게 내부 컨트롤의 크기가 설정됩니다.

- 내부 컨트롤이 Calendar 또는 Combo 형태일 때 드롭다운 버튼의 크기를 고정하려면 calendarbuttonsize 또는 combobuttonsize 속성값을 설정하여야 합니다.
  드롭다운 버튼의 크기를 설정하지 않으면 내부 컨트롤의 크기에 맞게 드롭다운 버튼의 크기가 자동 설정됩니다.

- controlautosizingtype 속성값이 "both" 가 아닐 경우 내부 컨트롤이 잘려서 표시될 수 있습니다.
  이 때, autosizerow 또는 autosizecol 속성값을 "limitmin" 으로 설정하면 내부 컨트롤이 잘려서 표시되는 것을 방지할 수 있습니다.


---

### cssclass

> Components > Component > Grid > Objects > GridCellControl > Property > cssclass

**Description**

Cell 의 Style을 XCSS 파일에 정의된 class로 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.cssclass[= strcssclass]
```

**Setting Syntax**

```javascript
strcssclass ::= <ClassName> [ , &ltClassName> ]*
```
```javascript
this.Grid00.setCellProperty( "body", 0, "cssclass", "TestClass" );
this.Grid00.setCellProperty( "body", 0, "cssclass", "TestClass,TestClass2" );
```
- **`<ClassName>`** — XCSS 에 정의된 classname 을 설정합니다.

**Remark**

- XCSS 에 정의된 ".classname" 형식에서 "." 를 제외하고 "classname" 만 설정합니다.

- Style 에 적용되는 방식은 XCSS Attribute 지정과 동일하게 XCSS 내의 순서대로 적용됩니다.

- Status 를 적용하고자 할 경우는 "classname" 에 Status 를 붙여서 사용합니다.

- ',' 를 사용하여 class 를 다중으로 지정하게 되면 class 가 중첩되어 적용됩니다.
   중첩된 class 의 내용에 중복이 있다면 XCSS 내의 순서상 마지막으로 기술된 것이 적용됩니다.


◆ web runtime environment 제약

- web runtime environment 는 cssclass 명의 첫문자가 숫자일 경우 속성값이 적용되지 않으므로 주의하여야 합니다.


---

### cursor

> Components > Component > Grid > Objects > GridCellControl > Property > cursor

**Description**

Cell 영역내에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.cursor[= strCursor]
```

**Setting Syntax**

```javascript
strCursor ::= 'none' | 'auto' | 'default' | 'copy' | 'crosshair' | 'help' | 'move' | 'not-allowed' | 'pointer' | 'progress' | 'text' | 'wait' | 'ew-resize' | 'e-resize' | 'w-resize' | 'ns-resize' | 'n-resize' | 's-resize' | 'nesw-resize' | 'ne-resize' | 'sw-resize' | 'nwse-resize' | 'nw-resize' | 'se-resize'
```
```javascript
* XCSS
cursor : default;

* Script ( normal property )
this.Grid00.setCellProperty( "body", 0, "cursor", "default" );
```
- **`"none"`** — 마우스 포인터를 표시하지 않습니다.

* macOS NRE는 지원하지 않습니다.
- **`"auto"`** — 컴포넌트의 특성에 맞는 포인터가 표시됩니다.

Edit계열 컴포넌트는 "text" 포인터가 표시됩니다.
그외 계열 컴포넌트는 "arrow" 포인터가 표시됩니다.
- **`"default"`** — 시스템의 기본 포인터가 표시됩니다.

일반적으로 "arrow" 포인터가 표시됩니다.
- **`"copy"`** — 화살표와 작은 십자("+") 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"crosshair"`** — 십자("+") 모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"help"`** — 화살표와 작은 물음표 모양의 포인터가 표시됩니다.

* Safari 브라우저는 물음표 모양의 포인터가 표시됩니다.
* macOS NRE 는 지원하지 않습니다.
- **`"move"`** — 십자 화살표 모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"not-allowed"`** — 금지 표지판 모양의 포인터가 표시됩니다.

* Safari 브라우저는 화살표와 금지 표지판 모양의 포인터가 표시됩니다.
* macOS NRE 는 지원하지 않습니다.
- **`"pointer"`** — 손모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"progress"`** — OS 또는 환경에 따라 다른 형태의 포인터가 표시됩니다.

원, 화살표와 모래시계, 화살표와 원 등 다양한 형태로 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"text"`** — 아이("I") 모양의 포인터가 표시됩니다.
- **`"wait"`** — OS 또는 환경에 따라 다른 형태의 포인터가 표시됩니다.

원, 모래시계, 시계 등 다양한 형태로 표시됩니다.
- **`"ew-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"e-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"w-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"ns-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"n-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"s-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"nesw-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"ne-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"sw-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"nwse-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"nw-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"se-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

**Remark**

- cursor 속성값을 설정하지 않으면 undefined 가 설정되고 "auto" 로 동작합니다.

- disable 상태인 서브컨트롤이 있는 컴포넌트의 경우 마우스 포인터는 서브컨트롤 영역에서
   서브컨트롤의 disable status값이 적용되지 않고, 컴포넌트의 enable status 설정값이 적용됩니다.
   서브컨트롤과 컴포넌트가 모두 disable 상태일 때는 parent 의 enable status 설정값이 적용됩니다.


---

### displaytype

> Components > Component > Grid > Objects > GridCellControl > Property > displaytype

**Description**

Cell 이 편집상태가 아닐 때 바인드 된 데이터가 화면에 표시되는 형식을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.displaytype[= enumDpType]
```

**Setting Syntax**

```javascript
enumDpType ::= 'normal' | 'none' | 'buttoncontrol' | 'calendarcontrol' | 'checkboxcontrol' | 'combocontrol' | 'combotext' | 'currency' | 'date' | 'decoratetext' | 'editcontrol' | 'imagecontrol' | 'mask' | 'maskeditcontrol' | 'multicombocontrol' | 'number' | 'progressbarcontrol' | 'radioitemcontrol' | 'text' | 'textareacontrol' | 'treeitemcontrol'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "displaytype", "normal" );
```
- **`"normal"`** — 바인드 된 데이터 형식에 맞게 자동으로 표시됩니다.

데이터 형식이 "DATE" 이면 "yyyy-MM-dd" 형식으로 표현가능한 값만 표시됩니다.
데이터 형식이 "TIME" 이면 "hh:mm:ss" 형식으로 표현가능한 값만 표시됩니다.
데이터 형식이 "DATETIME" 이면 "yyyy-MM-dd hh:mm:ss" 형식으로 표현가능한 값만 표시됩니다.
데이터 형식이 숫자형이면 세자리 마다 콤마(",")가 표시됩니다.
- **`"none"`** — 바인드 된 데이터를 표시하지 않습니다.
- **`"buttoncontrol"`** — Cell 영역이 Button 컨트롤 형태로 표시되고, 바인드 된 데이터는 컨트롤에 텍스트로 표시됩니다.

Cell 에 마우스 클릭이나 스페이스키 입력 시 컨트롤에 Status 가 적용됩니다.
- **`"calendarcontrol"`** — Cell 영역이 Calendar 컨트롤 형태로 표시되고, 바인드 된 데이터는 컨트롤에 날짜 표시형식에 맞게 표시됩니다.

날짜/시간 표시 형식은 Cell 의 calendardateformat 속성에 설정된 형식을 따릅니다.
- **`"checkboxcontrol"`** — Cell 영역이 CheckBox 컨트롤 형태로 표시되고, 바인드 된 데이터는 컨트롤에 체크로 표시됩니다.

바인드 된 데이터가 "true" 에 해당하는 값이면 체크 상태로 표시됩니다.
- **`"combocontrol"`** — Cell 영역이 Combo 컨트롤 형태로 표시되고, 바인드 된 데이터와 일치하는 Combo 아이템의 데이터값이 표시됩니다.

Combo 컨트롤이 동작하려면 combodataset, combocodecol, combodatacol 속성값을 설정하여야 합니다.
combodataset 의 combocodecol 값 중에 바인드 된 데이터와 일치하는 값에 해당하는 combodatacol 값이 화면에 표시됩니다.
- **`"combotext"`** — Cell 에 바인드 된 데이터와 일치하는 Combo 아이템의 데이터값이 텍스트로 표시됩니다.

텍스트가 정상적으로 표시되려면 combodataset, combocodecol, combodatacol 속성값을 설정하여야 합니다.
combodataset 의 combocodecol 값 중에 바인드 된 데이터와 일치하는 값에 해당하는 combodatacol 값이 화면에 표시됩니다.
- **`"currency"`** — Cell 에 바인드 된 데이터가 통화표시 규칙에 맞게 표시됩니다.

통화표시 규칙은 시스템에 정의된 형식을 따릅니다.
- **`"date"`** — Cell 에 바인드 된 데이터가 날짜 표시형식에 맞게 텍스트로 표시됩니다.

날짜/시간 표시 형식은 Cell 의 calendardateformat 속성에 설정된 형식을 따릅니다.
- **`"decoratetext"`** — Cell 에 바인드 된 데이터를 텍스트로 표시합니다.

바인드 된 데이터에 개행문자가 있을 경우 줄바꿈되어 표시됩니다.
바인드 된 데이타가 Tag 형식의 Decorate 설정값을 포함할 경우 Decorate 효과를 적용하여 텍스트를 표시합니다.
적용할 수 있는 Decorate 형식은 하단의 Remark 를 참고하십시오.

* 설정된 Tag 는 HTML 형식이므로 Excel Export 시 Decorate 효과가 적용되지 않습니다.
   Export 설정에 따라 Tag 가 텍스트로 Export 되거나 Tag 가 제거된 텍스트가 Export 됩니다.
- **`"editcontrol"`** — Cell 영역이 Edit 컨트롤 형태로 표시되고, 바인드 된 데이터는 컨트롤에 텍스트로 표시됩니다.
- **`"imagecontrol"`** — Cell 에 바인드 된 데이터를 이미지로 표시합니다.

바인드 된 데이터는 "URL 형태의 이미지 위치정보" 또는 "BLOB" 값 이어야 합니다.
이미지는 "BMP","PNG","GIF","JPEG", "SVG"를 지원하며, "AniGIF"는 첫 프레임만 표시되고 애니메이션은 동작하지 않습니다.
- **`"mask"`** — Cell 에 바인드 된 데이터가 maskeditformat 속성의 마스크값에 맞게 텍스트로 표시됩니다.

Cell 의 maskeditformat 속성에 설정된 마스크값은 maskedittype 속성값으로 형식을 결정합니다.
- **`"maskeditcontrol"`** — Cell 영역이 MaskEdit 컨트롤 형태로 표시되고, 바인드 된 데이터는 컨트롤에 maskeditformat 속성의 마스크값에 맞게 텍스트로 표시됩니다.

Cell 의 maskeditformat 속성에 설정된 마스크값은 maskedittype 속성값으로 형식을 결정합니다.
- **`"multicombocontrol"`** — Cell 영역이 MultiCombo 컨트롤 형태로 표시되고, 바인드 된 데이터와 일치하는 MultiCombo 아이템의 데이터값이 표시됩니다.

MultiCombo 컨트롤이 동작하려면 multicombodataset, multicombocodecol, multicombodatacol 속성값을 설정하여야 합니다.
multicombodataset의 multicombocodecol 값 중에 바인드 된 데이터와 일치하는 값에 해당하는 multicombodatacol 값이 화면에 표시됩니다.
- **`"number"`** — Cell 에 바인드 된 데이타가 숫자로 표시됩니다.

세자리 마다 콤마(",")가 표시됩니다.
- **`"progressbarcontrol"`** — Cell 영역이 ProgressBar 컨트롤 형태로 표시되고, 바인드 된 데이터는 컨트롤에 숫자와 블럭으로 표시됩니다.

바인드 된 데이터는 ProgressBar 컨트롤의 중앙에 숫자로 표시됩니다.
ProgressBar 컨트롤의 블럭은 "0~100" 값을 표시할 수 있습니다.
- **`"radioitemcontrol"`** — Cell 영역이 radioitem 형태로 표시됩니다.

text 속성값에 바인드된 데이터와 radioitemcodevalue 속성값이 일치하면 선택상태로 표시되며 값이 다르면 선택되지 않은 상태로 표시됩니다.
- **`"text"`** — Cell 에 바인드 된 데이터가 텍스트로 표시됩니다.

바인드 된 데이터에 개행문자가 있을 경우 줄바꿈되어 표시됩니다.
- **`"textareacontrol"`** — Cell 영역이 TextArea 컨트롤 형태로 표시되고, 바인드 된 데이터는 텍스트로 표시됩니다.

바인드 된 데이터에 개행문자가 있을 경우 줄바꿈되어 표시됩니다.
- **`"treeitemcontrol"`** — Cell 영역이 Tree 컨트롤 형태로 표시되고, 바인드 된 데이터는 컨트롤에 텍스트로 표시됩니다.

Tree 컨트롤이 동작하려면 Cell 의 treelevel, treestate 속성값을 설정하여야 합니다.

**Remark**

- displaytype 속성값을 설정하지 않으면 "normal"로 적용됩니다.

- Grid 의 Head, Body, Summary 밴드에 공통 적용되는 속성입니다.

- 바인드 된 데이터가 "BLOB" 형태 일 경우 Suppress 기능은 지원되지 않습니다.

- Cell 의 fillareatype 속성값에 의해 데이터가 없는 영역에 컨트롤이 표시될 때는 "disable" Status 가 적용됩니다.

- displaytype 속성값이 "decoratetext" 일 경우 적용할 수 있는 Tag 형식입니다.
 Tag 형태의 "<", ">" 특수문자를 사용하고 지정된 Tag 형식 외의 영문자를 사용하는 경우에는 입력값이 삭제됩니다.
  예를 들어 "<a href=''>" 형식으로 입력 시 해당 값은 삭제되어 처리됩니다.

	
		Type
		Description
		Default
		Example
	

	
		fs
		폰트크기(font size)를 지정
		"12"
		<fs v='12'>Text</fs>
	

	
		fc
		폰트색상(font color)를 지정
		"#000000"
		<fc v='red'>Text</fc>
	

	
		ff
		폰트종류(font face)를 지정
		"굴림"
		<ff v='Dotum'>Text</ff>
	

	
		b
		굵은(bold) 효과 지정
		"false"
		<b v='true'>Text</b>
	

	
		i
		기울임(italic) 효과 지정
		"false"
		<i v='true'>Text</i>
	

	
		u
		밑줄(under line) 효과 지정
		"false"
		<u v='true'>Text</u>
	

	
		s
		취소선(strike) 효과 지정
		"false"
		<s v='true'>Text</s>
	

	
		l
		링크(link) 효과 지정

value 에는 URL, 전화번호, 메일주소 중 하나를 설정할 수 있습니다.
value 에 설정된 형태에 따라 알맞는 앱이 실행됩니다.
		"false"
		<l v='http://www.tobesoft.co.kr'>Text</l>
<l v='tel:010-1234-5678'> 전화걸기 </l>
<l v='mailto:manager@tobesoft.co.kr'> 메일보내기 </l>


---

### editautoselect

> Components > Component > Grid > Objects > GridCellControl > Property > editautoselect

**Description**

Cell 의 edittype 속성값이 "text" 일 경우 편집영역이 활성화 될 때 텍스트를 전체선택 할지 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.editautoselect[= bAutoselect]
```

**Setting Syntax**

```javascript
bAutoselect ::= 'true' | 'false'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "editautoselect", "true" );
```
- **`true`** — Cell 의 편집영역이 활성화 될 때 텍스트가 전체선택 됩니다.
- **`false`** — Cell 의 편집영역이 활성화 될 때 텍스트가 선택되지 않습니다.

**Remark**

- editautoselect 속성값을 설정하지 않으면 false 로 적용됩니다.


◆ web runtime environment 제약

- 마우스 또는 터치에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 정상동작합니다.
  그러나 setFocus() 메소드에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 되지 않을 수 있습니다.


---

### editimeaction

> Components > Component > Grid > Objects > GridCellControl > Property > editimeaction

**Description**

키보드에 하단 모서리에 표시되는 사용자 작업 버튼 UI와 동작을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.editimeaction[= enumEditimeaction]
```

**Setting Syntax**

```javascript
enumEditimeaction ::= 'none' | 'next' | 'previous'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "editimeaction", "none" );
```
- **`"none"`** — 캐리지 리턴 버튼을 표시합니다.
- **`"next"`** — 다음 버튼을 표시합니다.
TAB 키 입력과 같은 동작을 처리합니다 (다음 컴포넌트로 포커스가 이동합니다).
- **`"previous"`** — 이전 버튼을 표시합니다.
SHIFT + TAB 키 입력과 같은 동작을 처리합니다 (이전 컴포넌트로 포커스가 이동합니다).

**Remark**

- 속성값을 설정하지 않으면 "none" 으로 적용됩니다.
- 운영체제 또는 키보드 앱에서 지원하지 않는 경우 UI가 원하는 형식으로 변경되지 않을 수 있습니다.
  UI가 변경되지 않더라도 키 입력 시 발생하는 이벤트는 정상적으로 처리됩니다.
- 키보드가 표시된 상태에서 속성값을 변경하면 현재 키보드 UI에는 반영되지 않습니다.
키보드가 다시 표시될때 변경된 속성값이 반영됩니다.
- onkeydown > onkeyup > onimeaction 순으로 이벤트가 발생합니다.


---

### editimemode

> Components > Component > Grid > Objects > GridCellControl > Property > editimemode

**Description**

Cell 의 edittype 속성값이 "text" 일 경우 Cell 의 편집창에서 사용될 기본 입력 언어를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.editimemode[= enumImemode]
```

**Setting Syntax**

```javascript
enumImemode ::= 'none' | 'alpha' | 'alpha,full' | 'hangul' | 'hangul,full' | 'katakana' | 'katakana,full' | 'hiragana' | 'direct'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "editimemode", "alpha" );
```
- **`"none"`** — 기본 입력 언어를 변경하지 않고 현재 시스템에 설정된 언어를 유지합니다.
- **`"alpha"`** — 입력언어를 영문으로 설정합니다.

IME 가 동아시아 입력기(한글/일본어/한자) 일 경우만 적용됩니다.
- **`"alpha,full"`** — 입력언어를 영문 전각으로 설정합니다.

IME 가 동아시아 입력기(한글/일본어/한자) 일 경우만 적용됩니다.
- **`"hangul"`** — 입력언어를 한글로 설정합니다.

IME 가 한글 입력기일 경우만 적용됩니다.
- **`"hangul,full"`** — 입력언어를 한글 전각으로 설정합니다.

IME 가 한글 입력기일 경우만 적용됩니다.
- **`"katakana"`** — 입력언어를 일본어 가나로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"katakana,full"`** — 입력언어를 일본어 가나 전각으로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"hiragana"`** — 입력언어를 일본어 히라가나 전각으로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"direct"`** — 입력언어를 일본어 직접입력으로 설정합니다.

IME 가 IME2002의 일본어 입력기일 경우만 적용됩니다.
IME 가 IME2007과 2010 일 경우는 "alpha"로 적용됩니다.

**Remark**

- editimemode 속성값을 설정하지 않으면 "none" 으로 적용됩니다.

- Cell 이 포커스를 받아 편집창이 활성화 될 때 IME가 재설정됩니다.

- 일부 환경에서만 지원하는 속성이므로 상단의 지원환경을 확인하시기 바랍니다.
   > Windows NRE, Android NRE에서만 지원하는 속성입니다.
   > macOS NRE, iOS/iPadOS NRE, WRE에서는 지원하지 않는 속성입니다.


---

### editinputfilter

> Components > Component > Grid > Objects > GridCellControl > Property > editinputfilter

**Description**

Cell 의 edittype 속성값이 "text" 일 경우 Cell 편집 시 입력을 제한 시킬 문자를 타입별로 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.editinputfilter[= strInputfilter]
```

**Setting Syntax**

```javascript
strInputfilter ::= 'none' | <filter>

<filter> ::= <inputfilter> | <inputfilter> ',' <filter>
<inputfilter> ::= 'alpha' | 'digit' | 'comma' | 'dot' | 'sign' | 'space' | 'symbol'

* 각 타입값을 콤마(",")로 구분하여 중복 설정할 수 있습니다.
```
```javascript
this.Grid00.setCellProperty( "body", 0, "editinputfilter", "dot" );
this.Grid00.setCellProperty( "body", 0, "editinputfilter", "dot,comma" );
this.Grid00.setCellProperty( "body", 0, "editinputfilter", "dot,comma,sign" );
```
- **`"none"`** — 입력 제한 없이 모든 문자를 입력할 수 있습니다.
- **`"alpha"`** — 소문자 "a~z"와 대문자 "A~Z"를 입력 할 수 없습니다.
- **`"digit"`** — 숫자 "0~9"를 입력 할 수 없습니다.
- **`"comma"`** — 콤마(",")를 입력 할 수 없습니다.
- **`"dot"`** — 마침표(".")를 입력 할 수 없습니다.
- **`"sign"`** — 플러스("+")와 마이너스("-") 문자를 입력할 수 없습니다.
- **`"space"`** — 공백문자(" ")를 입력 할 수 없습니다.
- **`"symbol"`** — !,",#,$,%,@,&,',*,/,\,:,;,^,`,{,},[,],(,),|,~,=,_,<,>,? 문자를 입력할 수 없습니다.

키보드로 입력할 수 있는 특수문자 중 "comma", "dot", "sign", "space" 타입값의 문자만 입력할 수 있고, 나머지 문자는 입력 할 수 없습니다.

**Remark**

- editinputfilter 속성값을 설정하지 않으면 "none"으로 적용됩니다.

- editinputfilter 속성은 사용자가 직접 입력할 때만 적용됩니다.
  스크립트로 Cell 값을 설정할 때는 적용되지 않습니다.

- 일본어 입력 시 글자 조합이 완료된 후 editinputfilter 속성값이 적용됩니다.


---

### editinputmode

> Components > Component > Grid > Objects > GridCellControl > Property > editinputmode

**Description**

Cell 의 edittype 속성값이 "text" 일 경우 Cell 에 입력되는 영문자를 대문자 또는 소문자로 변환할지 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.editinputmode[= enumInputmode]
```

**Setting Syntax**

```javascript
enumInputmode ::= 'normal' | 'upper' | 'lower'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "editinputmode", "upper" );
```
- **`"normal"`** — 입력되는 영문자의 대/소문자를 변경하지 않습니다.
- **`"upper"`** — 입력되는 영문자를 모두 대문자로 변경합니다.
- **`"lower"`** — 입력되는 영문자를 모두 소문자로 변경합니다.

**Remark**

- editinputmode 속성값을 설정하지 않으면 "normal"로 적용됩니다.

- editinputmode 속성값을 변경하면 Cell 에 바인딩 된 DataSet 의 데이터가 변경될 수 있습니다.


---

### editinputtype

> Components > Component > Grid > Objects > GridCellControl > Property > editinputtype

**Description**

Cell 의 edittype 속성값이 "text" 일 경우 Cell 에 입력을 허용할 문자를 타입별로 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.editinputtype[= strInputtype]
```

**Setting Syntax**

```javascript
strInputtype ::= 'normal' | <type>

<type> ::= <inputtype> | <inputtype> ',' <type>
<inputtype> ::= 'alpha' | 'english' | 'digit' | 'number' | 'numberandenglish' | 'comma' | 'dot' | 'sign' | 'space' | 'symbol' | 'half' | 'full'

* 각 타입값을 콤마(",")로 구분하여 중복 설정할 수 있습니다.
```
```javascript
this.Grid00.setCellProperty( "body", 0, "editinputtype", "english" );                         // 영문자만 입력허용
this.Grid00.setCellProperty( "body", 0, "editinputtype", "english,number" );             // 영문자와 숫자만 입력허용
this.Grid00.setCellProperty( "body", 0, "editinputtype", "english,number,space" );   // 영문자, 숫자, 공백만 입력허용
```
- **`"normal"`** — 모든 문자의 입력을 허용합니다.
- **`"alpha"`** — 소문자 "a~z"와 대문자 "A~Z"를 입력 할 수 있습니다.
- **`"english"`** — 소문자 "a~z"와 대문자 "A~Z"를 입력 할 수 있습니다.
- **`"digit"`** — 숫자 "0~9"를 입력 할 수 있습니다.
- **`"number"`** — 숫자 "0~9"와 마침표("."), 콤마(","), 마이너스("-") 문자를 입력 할 수 있습니다.
- **`"numberandenglish"`** — 소문자 "a~z", 대문자 "A~Z", 숫자 "0~9", 마침표("."), 콤마(","), 마이너스("-") 문자를 입력 할 수 있습니다.

"number"와 "english"를 함께 설정한 것과 같습니다.
- **`"comma"`** — 콤마(",")를 입력 할 수 있습니다.
- **`"dot"`** — 마침표(".")를 입력 할 수 있습니다.
- **`"sign"`** — 플러스("+")와 마이너스("-") 문자를 입력할 수 있습니다.
- **`"space"`** — 공백문자(" ")를 입력 할 수 있습니다.
- **`"symbol"`** — !,",#,$,%,@,&,',*,/,\,:,;,^,`,{,},[,],(,),|,~,=,_,<,>,? 문자를 입력할 수 있습니다.

키보드로 입력할 수 있는 특수문자 중 "comma", "dot", "sign", "space" 타입값의 문자는 입력할 수 없고, 나머지 문자만 입력 할 수 있습니다.
- **`"half"`** — 반각문자를 입력 할 수 있습니다.
- **`"full"`** — 전각문자를 입력 할 수 있습니다.

**Remark**

- editinputtype 속성값을 설정하지 않으면 "normal" 로 적용됩니다.

- editinputtype 속성은 사용자가 직접 입력할 때만 적용됩니다.
  스크립트로 Cell 값을 설정할 때는 적용되지 않습니다.

- 설정된 타입값에 해당하는 문자만 입력을 허용하며 설정되지 않은 타입값의 문자는 입력할 수 없습니다.

- editinputtype 속성값에 "full" 값이 속해 있지 않으면 반각 문자만 입력할 수 있습니다.

- 입력을 제한하는 속성은 editinputmode > editinputfilter > editinputtype 순으로 적용됩니다.


◆ Mobile 제약

- inputtype 속성을 "digit", "number", "tel", "dot" 과 같이 숫자만 입력이 가능하도록 설정하면,
   Android 에서는 tel 타입의 키패드가 기본으로 적용되고, iOS/iPadOS 에서는 number 타입의 키패드가 기본으로 적용됩니다.
   단 iOS/iPadOS 에서는 value 에 숫자가 아닌 문자가 저장되어 있으면 text 타입의 키패드가 기본으로 적용됩니다.

- inputtype 속성을 "numberandenglish", "english" 와 같이 문자입력이 가능하도록 설정하면,
   Android, iOS/iPadOS 모두 text 타입의 키패드가 기본으로 적용됩니다.


---

### editmaxlength

> Components > Component > Grid > Objects > GridCellControl > Property > editmaxlength

**Description**

Cell 의 edittype 속성값이 "text" 일 경우 Cell 에 입력할 수 있는 문자열의 최대길이를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.editmaxlength[= nLimit]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "editmaxlength", "10" );
```
- **`nLimit`** — 입력할 수 있는 문자열의 최대길이를 숫자로 설정합니다.

0 설정 시 바인딩된 DataSet 의 Column 크기로 제한됩니다.
-1 설정 시 입력할 수 있는 최대길이를 제한하지 않습니다.

**Remark**

- editmaxlength 속성값을 설정하지 않으면 -1 로 적용됩니다.

- 영문, 숫자, 기호, 다국어 모두 한 문자가 1 로 계산됩니다.

- 문자열의 길이가 editmaxlength 속성값과 같아지면 입력이 제한됩니다.

- 스크립트로 value 값 설정 시 editmaxlength 속성은 적용되지 않습니다.


---

### edittype

> Components > Component > Grid > Objects > GridCellControl > Property > edittype

**Description**

Cell 이 포커스를 받아 표시되는 편집창의 형식을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.edittype[= enumEdittype]
```

**Setting Syntax**

```javascript
enumEdittype ::= 'normal' | 'none' | 'button' | 'checkbox' | 'combo' | 'date' | 'mask' | 'multicombo' | 'radioitem' | 'readonly' | 'text' | 'textarea' | 'tree'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "edittype", "normal" );
```
- **`"normal"`** — 바인드 된 데이터 형식에 맞게 편집창이 자동으로 표시됩니다.

바인드 된 Column의 타입에 맞게 "text" 또는 "date"로 적용됩니다.
- **`"none"`** — Cell 이 포커스를 받아도 편집창이 표시되지 않습니다.
Cell 이 편집 불가능한 상태로 유지됩니다.
- **`"button'"`** — Cell 영역이 Button 형태로 표시되고, 바인드 된 데이터는 Button 에 텍스트로 표시됩니다.

Cell 에 마우스 클릭이나 스페이스키 입력 시 Button 에 Status 가 적용됩니다.
Cell 의 fillareatype 속성값이 적용되어 Button 이 표시될 때는 "Disable" Status 가 적용됩니다.
- **`"checkbox"`** — Cell 영역은 변화가 없고 마우스로 Cell 영역을 클릭 시 바인드 된 데이터가 "0" 또는 "1" 로 변경됩니다.
- **`"combo"`** — Cell 영역이 Combo 형태로 표시되고, 바인드 된 데이터와 일치하는 Combo 아이템의 데이터값이 표시됩니다.

Combo 형태로 표시하기 위해서는 combodataset, combocodecol, combodatacol 속성값이 설정되어야 합니다.
바인드 된 데이터와 일치하는 combocodecol 값에 해당하는 combodatacol 값이 화면에 표시됩니다.
Cell 우측의 팝업 버튼 클릭 시 아이템 리스트가 표시됩니다.
- **`"date"`** — Cell 영역이 Calendar 형태로 표시되고, 바인드 된 데이터가 날짜 표시형식에 맞게 표시됩니다.

날짜/시간 표시 형식은 Cell 의 calendardateformat 속성에 설정된 형식을 따릅니다.
- **`"mask"`** — Cell 영역이 MaskEdit 형식의 입력창으로 표시됩니다.

Cell 의 maskeditformat 속성값에 입력 형식을 설정합니다.
Cell 에 입력창이 표시될 때 maskeditformat 속성값이 적용된 MaskEdit 형식으로 표시됩니다.

입력받는 값을 숫자로 처리하기 위해서는 maskedittype 속성값을 "number" 로 설정하여야 합니다.
- **`"multicombo"`** — Cell 영역이 MultiCombo 형태로 표시되고, 바인드 된 데이터와 일치하는 MultiCombo 아이템의 데이터값이 표시됩니다.

MultiCombo 형태로 표시하기 위해서는 multicombodataset, multicombocodecol, multicombodatacol 속성값이 설정되어야 합니다.
바인드 된 데이터와 일치하는 multicombocodecol 값에 해당하는 multicombodatacol 값이 화면에 표시됩니다.
Cell 우측의 팝업 버튼 클릭 시 아이템 리스트가 표시됩니다.
- **`"radioitem"`** — Cell 영역이 radioitem 형태로 표시됩니다.

Cell 영역 클릭 시 선택상태로 표시되고 바인드 된 데이터는 radioitemcodevalue 속성값으로 변경됩니다.

Head 밴드 영역에서는 사용할 수 없습니다.
- **`"readonly"`** — Cell 영역이 TextArea 형식의 입력창으로 표시됩니다.

Cell 값을 수정할 수 없고 읽기만 가능합니다..
- **`"text"`** — Cell 영역이 Edit 형식의 입력창으로 표시됩니다.
- **`"textarea"`** — Cell 영역이 TextArea 형식의 입력창으로 표시됩니다.
- **`"tree"`** — Cell 의 displaytype 속성값이 "tree" 일 경우만 적용됩니다.
Cell 에 표시된 트리버튼을 클릭하여 트리가 Collapse/Expand 가 가능하게 합니다.

Head 밴드 영역에서는 사용할 수 없습니다.

**Remark**

- edittype 속성값을 설정하지 않으면 "none"으로 적용됩니다.

- Cell에서 데이터를 수정하면 바인드 되어 있는 Dataset 오브젝트에서 cancolumnchange -> oncolumnchanged 순서로 이벤트가 발생합니다.
  이때, Dataset 오브젝트의 cancolumnchange 이벤트에서 "false" 값을 반환하면 oncolumnchanged Event 가 발생하지 않고 수정된 데이터도 원복 됩니다.

- Cell에 표시되는 입력창의 스타일은 테마에서 설정하여야 합니다.

- edittype 속성값이 "text" 또는 "textarea" 일 때 입력값을 숫자로 제한하려면 editinputfilter 또는 textareainputfilter 속성값을 설정하여야 합니다.

- Grid 컴포넌트에서 병합(Merge) 된 Cell이 Sub Cell 인 경우는 각 Sub Cell 의 edittype 속성값이 무시됩니다.
  병합(Merge) 된 Cell 이 하나의 Cell 인 경우만 edittype 속성값이 적용됩니다.


◆ Head 밴드 영역에서 설정 시

- edittype 속성값을 "none"이 아닌 값으로 설정한 경우에는 Cell의 다른 속성값 설정 시 Dataset 칼럼 바인드를 사용할 수 없습니다.
  넥사크로 스튜디오에서 설정하더라도 적용되지 않습니다.

- Head 밴드 영역 동작에 적합하지 않은 편집창은 지원하지 않습니다.
  "radioitem", "tree"는 속성값으로 설정할 수 없습니다.


---

### expandchar

> Components > Component > Grid > Objects > GridCellControl > Property > expandchar

**Description**

Cell 의 확장버튼에 표시될 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.expandchar[= strExptext]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "expandchar", "..." );
```
- **`strExptext`** — Cell 의 확장버튼에 표시될 텍스트를 설정합니다.

**Remark**

- Grid 의 Head, Body, Summary 밴드에 속한 Cell 에 공통 적용되는 속성입니다.

**See Also**

GridCellControl.expandshowGridCellControl.expandsize


---

### expandimage

> Components > Component > Grid > Objects > GridCellControl > Property > expandimage

**Description**

Cell 의 확장버튼에 텍스트와 함께 표시할 이미지의 위치 경로를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.expandimage[= strImage]
```

**Setting Syntax**

```javascript
strImage ::= 'URL(' <theme-Image> | <resource-image> | <web-Image> | <absolute-image> | <relative-image> ')'
```
```javascript
this.Grid00.setCellProperty("body",0,"expandimage","URL('theme://images/V13_logo.png')')" ;                            // 테마 이미지
this.Grid00.setCellProperty("body",0,"expandimage","URL('globalimageID')')" ;                                                   // Resource영역 이미지
this.Grid00.setCellProperty("body",0,"expandimage","URL('http://www.tobesoft.com/images/gnb/btn_h1.gif')')" ;  // 웹 이미지
this.Grid00.setCellProperty("body",0,"expandimage","URL('file://C:\\xplatform_logo.gif')')" ;                             // 절대경로 이미지
this.Grid00.setCellProperty("body",0,"expandimage","URL('Base::test.jpg')')" ;                                                  // TypeDefinition Prefix 이미지
this.Grid00.setCellProperty("body",0,"expandimage","URL('./test.jpg')')" ;                                                         // 상대경로 이미지
```
- **`<theme-Image>`** — 테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<resource-image>`** — GlobalVariables 영역의 Images 에 정의된 이미지의 ID를 설정합니다.

해당 이미지가 등록되어 있어야 합니다.
- **`<web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<absolute-image>`** — 로컬에 정의된 이미지를 "file://절대경로" 형식으로 설정합니다.

또는 TypeDefinition 영역의 Services 에 정의된 Prefix 를 사용한 형식으로 설정합니다.
- **`<relative-image>`** — 폼의 위치를 기준으로 한 상대경로를 사용하여 설정합니다.

**Remark**

- 확장버튼의 background 속성에는 확장버튼의 상태별 이미지를 설정하고, 
   expandimage 속성에는 확장버튼의 상태와 상관없이 표시되는 이미지를 설정합니다.


---

### expandshow

> Components > Component > Grid > Objects > GridCellControl > Property > expandshow

**Description**

Cell 의 오른쪽에 확장버튼을 표시할지 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.expandshow[= enumShow]
```

**Setting Syntax**

```javascript
enumShow ::= 'hide' | 'show'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "expandshow", "hide" );
```
- **`"hide"`** — Cell 의 오른쪽에 확장버튼을 표시하지 않습니다.
- **`"show"`** — Cell 의 오른쪽에 확장버튼을 표시합니다.

**Remark**

- expandshow 속성값을 설정하지 않으면 "hide" 로 적용됩니다.

- Cell 의 활성화 여부와 관계없이 확장버튼이 표시됩니다.
   Cell 의 displaytype 속성값에 관계없이 확장버튼이 표시됩니다.

- Grid 의 Head, Body, Summary 밴드에 속한 Cell 에 공통 적용되는 속성입니다.

- displaytype 속성을  'text', 'number' 등 텍스트만 표시되는 형태의 속성값으로 설정하고 wordWrap 속성값을 'none'으로 설정하면 확장 버튼 표시 영역까지 텍스트가 표시되며 확장 버튼과 겹쳐져 표시될 수 있습니다. 
  텍스트 길이가 긴 경우에는 텍스트 길이를 조정하거나 wordWrap 속성을 지정해 텍스트와 확장 버튼이 겹쳐져 표시되지 않도록 해야 합니다.

**See Also**

GridCellControl.expandcharGridCellControl.expandsize


---

### expandsize

> Components > Component > Grid > Objects > GridCellControl > Property > expandsize

**Description**

Cell 의 오른쪽에 표시되는 확장버튼의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.expandsize[= nSize]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "expandsize", "30" );
```
- **`nSize`** — 확장버튼의 크기를 pixel 단위의 숫자로 설정합니다.

**Remark**

- expandsize 속성값을 설정하지 않으면 16 으로 적용됩니다.

- Grid 의 Head, Body, Summary 밴드에 속한 Cell 에 공통 적용되는 속성입니다.

- Cell 의 텍스트는 확장버튼 영역까지 표시됩니다.

**See Also**

GridCellControl.expandcharGridCellControl.expandshow


---

### expr

> Components > Component > Grid > Objects > GridCellControl > Property > expr

**Description**

Cell 에 표시될 텍스트를 동적으로 생성하는 수식을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.expr[= strExpr]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "expr", "Column2 == '1' ? 'true' : 'false' ')";
this.Grid00.setCellProperty( "body", 0, "expr", "currow + '/' + dataset.rowcount')";
```
- **`strExpr`** — 텍스트로 적용될 수식을 설정합니다.
접근 가능한 영역에 정의된 함수를 설정할 수 있습니다.

설정된 수식을 동적으로 실행하여 그 결과값을 Cell 에 텍스트로 표시합니다.

**Remark**

- 동적으로 Cell 에 적용된 텍스트는 getCellText() 메소드를 사용하여 확인할 수 있습니다.

- expr 속성 설정 시 text 속성에 적용된 값은 무시되어 표시되지 않습니다.

- 수식에 아래의 예약어를 사용하면 수식 실행 시 예약어에 상응하는 값으로 대체됩니다.
  > this : 수식이 정의된 Cell ( Form 의 지시어가 아닙니다.)
  > comp : Cell 을 갖는 Grid 컴포넌트.
  > dataset : Grid 에 바인드된 DataSet 컴포넌트.
  > currow : 수식이 계산하고 있는 행(Row) 의 인덱스.
  > [Column ID] : 수식이 계산하고 있는 행(Row) 의 DataSet Column 값.

- expr 속성에 여러개의 수식을 설정할 때 마지막 수식은 ";" 문자를 사용하지 않습니다.

◆ StringResource

- Property Type 항목 중 StringResource에 체크가 되어 있다면 TEXT 함수를 사용할 수 있습니다.
  TEXT(stringrc_key[, alter_str])
  StringResource에서 stringrc_key에 해당하는 항목을 표시합니다.
  stringrc_key에 해당하는 항목이 없고 alter_str 값을 지정한 경우에는  alter_str 값을 표시합니다.
  stringrc_key에 해당하는 항목이 없고 alter_str 값을 지정하지 않은 경우에는 stringrc_key 값을 표시합니다.
  예) TEXT('92222', comp.text)

**Example**



---

### font

> Components > Component > Grid > Objects > GridCellControl > Property > font

**Description**

Cell 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.font[= strfont]
```

**Setting Syntax**

```javascript
strfont ::= [<font-style>] [<font-weight>] <font-size> ['/'<line-height>] <font-family>

<font-style> ::= 'normal' | 'italic'
<font-weight> ::= 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
<font-size> ::= <nSize> 'px'|'pt'|'em'|'rem'
<line-height> ::= 'normal' | <nValue> | <nPixel>'px' | <nPercent>'%'
<font-family> ::= <font-name> [',' <font-name>]*
```
```javascript
* XCSS
font : bold 12pt/30px arial, sans-serif;

* Script ( normal property )
this.Grid00.setCellProperty( "body", 0, "font", "bold 12pt/30px arial, sans-serif" );
```
- **`<font-style>`** — 폰트의 스타일을 설정합니다.

"normal" 설정 시 스타일이 적용되지 않습니다.
"italic" 설정 시 기울임 스타일이 적용됩니다.
- **`<font-weight>`** — 폰트의 굵기를 설정합니다.

"normal" 설정 시 굵기가 적용되지 않습니다.
"bold" 설정 시 굵은 폰트가 적용됩니다.

"100"~"900" 로 설정 시 설정한 굵기로 폰트가 적용됩니다.
"100"~"900" 로 설정 시 굵기에 해당하는 폰트가 정의되어 있어야 합니다.
- **`<font-size>`** — 폰트 크기의 단위는 아래와 같이 절대 길이 단위와 상대 길이 단위로 설정할 수 있습니다.
단위를 지정하지 않으면 속성값이 적용되지 않습니다.
- 절대 길이 단위: pixel("px"), point("pt")
- 상대 길이 단위: "em", "rem"

폰트 크기 단위를 "em", "rem"으로 설정한 경우에는 아래와 같이 폰트 크기가 계산됩니다.
- "em": 상위 컴포넌트 font-size 기준으로 상대적인 크기를 설정
- "rem": MainFrame font-size 기준으로 상대적인 크기를 설정
- **`<nSize>`** — 폰트 크기 단위에 따라 정수 또는 소수로 설정합니다.
음수값은 설정할 수 없습니다.
- "px", "pt": 정수
- "em", "rem": 정수 또는 소수
- **`<line-height>`** — 텍스트가 여러줄로 표시되는 경우 줄 사이의 간격을 설정합니다.

음수값을 설정할 수 없습니다.

"normal" 설정 시 줄 사이의 간격을 설정하지 않습니다.
"normal" 설정 시 웹브라우저마다 줄 사이의 간격이 다르게 적용됩니다.
"normal" 설정 시 Nexacro Runtime Environment는 폰트 크기에 곱할 값(<nValue>값)이 "1.15" 일 때와 동일하게 동작합니다.
- **`<nValue>`** — 폰트 크기에 곱할 값을 설정합니다.

계산 결과값이 줄 사이 간격으로 적용됩니다.
- **`<nPixel>`** — 줄 사이의 간격을 pixel 단위의 숫자로 설정합니다.

"px" 단위를 생략할 수 없습니다.
- **`<nPercent>`** — 폰트 크기에 곱할 비율값을 설정합니다.

계산 결과값이 줄 사이 간격으로 적용됩니다.
"%" 단위를 생략할 수 없습니다.
- **`<font-family>`** — 폰트 이름을 리스트로 설정합니다.

콤마(",")로 구분하여 폰트 이름을 여러개 설정할 수 있습니다.
먼저 선언된 폰트가 우선적으로 적용됩니다.
선언된 폰트가 시스템에 없을 경우 선언된 순서대로 사용 가능한 폰트를 적용합니다.
선언된 폰트가 모두 없을 경우 시스템 기본 폰트가 적용됩니다.
- **`<font-name>`** — 폰트의 이름을 설정합니다.

**Remark**

- font 속성값을 설정하지 않으면 undefined 가 설정되고, "12pt/normal Verdana" 로 동작합니다.

- font 속성의 폰트 크기가 변경되면 <line-height> 에 적용된 값에 따라 줄간격이 변경될 수 있습니다.

- <font-weight> 를 수치로 설정 시 "400" 값이 일반적인 굵기로 적용되고, "700" 값이 "bold" 로 적용됩니다.
   폰트에 수치값에 해당하는 폰트굵기가 없다면 "400" 과 "700" 중 가까운 값으로 표시됩니다.

- UserFont 사용 시 환경별로 지원하는 포맷정보는 "Appendix > Supported UserFont" 항목을 참고하세요.


◆ WRE 제약

- -nexa-text-align 속성값이 "right" 일 때 font 속성에 "italic" 을 설정하면 마지막 텍스트의 기울어진 부분이 잘려서 표시될 수 있습니다.
   웹브라우저에서 텍스트영역을 일반글자 기준으로 처리한 후 기울임을 적용하면서 발생하는 문제입니다.


---

### imagestretch

> Components > Component > Grid > Objects > GridCellControl > Property > imagestretch

**Description**

Cell 의 크기에 맞게 이미지가 확대/축소되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.imagestretch[= enumStretch]
```

**Setting Syntax**

```javascript
enumStretch ::= 'none' | 'fit' | 'fixaspectratio'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "imagestretch", "fit" );
```
- **`"none"`** — Cell 크기와 관계없이 이미지를 원본 그대로 표시합니다.
원본 이미지가 Cell 크기보다 클 경우 이미지가 잘려서 표시됩니다.
- **`"fit"`** — Cell 크기에 맞게 이미지의 가로/세로 비율을 변경하여 표시합니다.
이미지가 잘리지 않으나 가로/세로 비율에 따라 이미지가 일그러질 수 있습니다.
- **`"fixaspectratio"`** — 이미지의 가로/세로 비율을 유지하며 Cell 에 전체 이미지를 표시합니다.
이미지에 일그러짐은 없으나 가로/세로 비율에 따라 Cell 에 공백이 표시될 수 있습니다

**Remark**

- imagestretch 속성값을 설정하지 않으면 "none"으로 적용됩니다.


---

### letter-spacing

> Components > Component > Grid > Objects > GridCellControl > Property > letter-spacing

**Description**

GridCellControl 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.letterSpacing[= strspace]
```

**Setting Syntax**

```javascript
strspace ::= 'normal' | <nVal> ['px']
```
```javascript
* XCSS
letter-spacing : 2px ;

* Script ( normal property )
this.Grid00.setCellProperty( "body", 0, "letterSpacing", "2px" );
```
- **`"normal"`** — 문자 사이의 간격(자간)을 설정하지 않습니다.
- **`<nVal>`** — 문자 사이의 간격(자간)을 pixel 단위로 설정합니다.

스크립트 작성 시에는 "px" 단위 표기를 생략할 수 있습니다.
(XCSS 작성 시에는 "px" 단위를 포함해 작성해야 합니다).

**Remark**

- letter-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "letterSpacing"을 사용해야 합니다.


---

### locale

> Components > Component > Grid > Objects > GridCellControl > Property > locale

**Description**

Cell 에 적용될 국가 및 언어(locale)를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.locale[= strlocale]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "locale", "ko_KR" );
```
- **`strlocale`** — "언어[_국가]" 형식의 문자열로 설정합니다.

**Remark**

- ISO 639-1에서 정의하고 있는 2-알파벳 언어 코드와 ISO 3166-1에서 정의하고 있는 2-알파벳 국가 코드를 조합하여 사용합니다.

- 국가 및 언어 코드는 "Appendix > Locale Code List" 항목을 참고하세요.


---

### maskeditautoselect

> Components > Component > Grid > Objects > GridCellControl > Property > maskeditautoselect

**Description**

Cell 의 edittype 속성값이 "mask" 일 경우 편집영역이 활성화 될 때 텍스트를 전체선택 할지 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.maskeditautoselect[= bAutoselect]
```

**Setting Syntax**

```javascript
bAutoselect ::= 'true' | 'false'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "maskeditautoselect", "true" );
```
- **`true`** — Cell 의 편집영역이 활성화 될 때 텍스트가 전체선택 됩니다.
- **`false`** — Cell 의 편집영역이 활성화 될 때 텍스트가 선택되지 않습니다.

**Remark**

- maskeditautoselect 속성값을 설정하지 않으면 false 로 적용됩니다.


◆ web runtime environment 제약

- 마우스 또는 터치에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 정상동작합니다.
  그러나 setFocus() 메소드에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 되지 않을 수 있습니다.


---

### maskeditclipmode

> Components > Component > Grid > Objects > GridCellControl > Property > maskeditclipmode

**Description**

Cell 의 maskeditformat 속성에 설정된 형식 중 입력하지 않은 마스크에 대한 처리 방법을 결정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.maskeditclipmode[= enumClipMode]
```

**Setting Syntax**

```javascript
enumClipmode ::= 'includespace' | 'excludespace'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "maskeditclipmode", "includespace" );
```
- **`"includespace"`** — 입력하지 않은 마스크와 입력한 스페이스 문자를 모두 공백으로 처리하여 Cell 에 저장합니다.

maskedittrimtype 속성에서 좌우공백에 대한 처리를 추가적으로 설정할 수 있습니다.
- **`"excludespace"`** — 입력하지 않은 마스크는 잘라내고 스페이스를 포함하여 입력된 문자를 왼쪽으로 모아서 Cell 에 저장합니다.

maskedittrimtype 속성값이 무시되어 좌우공백을 추가적으로 처리할 수 없습니다.

**Remark**

- maskeditclipmode 속성값을 설정하지 않으면 "includespace"로 적용됩니다.

- Cell 의 edittype 속성값이 "mask" 인 경우에만 적용되는 속성입니다.


---

### maskeditformat

> Components > Component > Grid > Objects > GridCellControl > Property > maskeditformat

**Description**

Cell 의 edittype 속성값이 "mask" 일 때 입력 받을 문자의 형식을 지정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.maskeditformat[= strFormat]
```

**Setting Syntax**

```javascript
strFormat ::= <strSNummask> | <strStringmask>

<strSNummask> ::= [<strSignmask>] <strNumbermask>
```
```javascript
this.Grid00.setCellProperty("body",0,"maskeditformat", "@@@@')" ;
this.Grid00.setCellProperty("body",0,"maskeditformat","###,000.00##')" ;
this.Grid00.setCellProperty("body",0,"maskeditformat","999,000.0099')" ;
```
- **`<strSignmask>`** — Cell 의 editype 속성값이 "mask" 이고, maskedittype 속성값이 "number" 일 때 숫자 앞에 사용될 부호 마스크를 설정합니다.

1. 부호 마스크 문자
  "-" : 음수기호만 입력가능
  "+" : 양수기호만 입력가능
  "!" : 음수/양수기호 모두 입력 불가능

값을 지정하지 않으면 음수/양수기호 모두 입력 가능합니다.
- **`<strNumbermask>`** — Cell 의 editype 속성값이 "mask" 이고, maskedittype 속성값이 "number" 일 때 적용되는 마스크를 설정합니다.

마스크 문자를 설정하면 정수부는 자릿수 제한이 없고, 소수부는 마스크에 의해 자릿수가 제한됩니다.
마스크 문자를 설정하지 않으면 정수부와 소수부 입력에 제한이 없으며, "," 마스크가 자동으로 적용됩니다.
마스크로 허용된 문자가 아닌 문자는 모두 무시됩니다.

1. 숫자 마스크 문자
  "#" : "0~9" 의 10진수 숫자를 허용
        "0" 마스크와 소수점 사이에 설정 시 "0" 마스크로 동작됨
        Cell 값이 없거나 0 이면 값이 표시되지 않음
        정수부에 0 을 입력 후 입력확정(Enter입력)하면 정수부의 0 은 표시되지 않음
  "9" : "0~9" 의 10진수 숫자를 허용
        "0" 마스크와 소수점 사이에 설정 시 "0" 마스크로 동작됨
        Cell 값이 없으면 값이 표시되지 않고, Cell 값이 0 이면 0 이 표시됨
        정수부에 0 을 입력 후 입력확정(Enter입력)하면 정수부의 0 은 표시되지 않음
  "0" : "0~9"의 10진수 숫자를 허용
        해당 자릿수에 입력된 값이 없을 경우 0 이 표시됨
        Cell 값이 없거나 0 이면 0 이 표시됨
        Cell 이 편집상태일 때는 표시되지 않고, Cell 이 편집상태가 아닐 때만 표시됨
        정수부에 0 을 입력 후 입력확정(Enter입력)하면 정수부의 0 을 표시함
  "." : 소수점 표시
        소수점 마스크를 2개 이상 설정 시 가장 왼쪽에 위치한 소수점이 적용되고, 이외의 소수점 마스크는 무시됨
        소수점 마스크만 설정 시 마스크를 설정하지 않은것처럼 처리됨
        locale 속성값에 따라 소수점 표시에 "." 문자외에 다른 문자가 표시될 수 있음
  "," : 콤마 표시
        화면에만 표시되고 실제 Cell 값에는 적용되지 않음
        콤마 마스크 설정 시 "," 마스크의 위치에 관계 없이 locale 속성값에 맞게 정수부에 "," 가 표시됨
        locale 속성값이 설정되지 않으면 정수부 자릿수의 3자리마다 "," 가 표시됨
        locale 속성값에 따라 콤마 표시에 "," 문자외에 다른 문자가 표시될 수 있음

ex) Cell 값이 1234.567 일 때 maskeditformat 속성값이 아래와 같은 경우
 ㄱ. "09999.99"      // "01234.56" 으로 표시됨
 ㄴ. "#9900.0090"    // "1234.5670" 으로 표시됨
 ㄷ. "9,999.##"      // "1,234.56" 으로 표시됨

ex) Cell 값이 0 일 때 maskeditformat 속성값이 아래와 같은 경우
 ㄱ. "##.#"          // "" 으로 표시됨
 ㄴ. "99.9"          // "0" 으로 표시됨
 ㄷ. "00.0"          // "00.0" 으로 표시됨
 
ex) Cell 값이 0.1 일 때 maskeditformat 속성값이 아래와 같은 경우
 ㄱ. "#.#"           // ".1" 로 표시됨
 ㄴ. "9.9"           // ".1" 로 표시됨
 ㄷ. "0.0"           // "0.1" 로 표시됨
- **`<strStringmask>`** — Cell 의 editype 속성값이 "mask" 이고, maskedittype 속성값이 "string" 일 때 적용되는 마스크를 설정합니다.

1. 문자열 마스크 문자
  "@" : 모든 Ascii 문자 (한글과 같은 다국어 문자는 입력 불가)
  "#" : "0~9"의 10진수 숫자
  "*" : "a~z"의 소문자와 "A~Z" 의 대문자
  "9" : "a~z"의 소문자, "A~Z" 의 대문자, "0~9" 의 10진수 숫자
  "A" : "A~Z"의 대문자
  "a" : "a~z"의 소문자
  "Z" : "A~Z"의 대문자와 "0~9" 의 10진수 숫자
  "z" : "a~z"의 소문자와 "0~9" 의 10진수 숫자

2. 홑따옴표(') 활용
홑따옴표(')는 화면에 표시되지 않고, 홑따옴표(') 사이의 문자는 마스크 문자로 적용하지 않고 화면에 그대로 표시됩니다.
  ex) "@'A'@" 는 화면에 "_A_" 로 표시됩니다.
  
3. "\" 활용
"\" 문자는 다음에 오는 문자를 마스크 문자로 적용하지 않고 화면에 그대로 표시합니다.
홑따옴표(')를 표시하거나, "\" 를 표시할때 사용하게 됩니다.

"\" 문자는 Dataset Column, Form Design 영역과 Script 영역에서 사용할때 사용법이 다릅니다.
Dataset Column, Form Design에서 사용한 "\" 문자는 자동적으로 "\\" 로 변환을 해주고 있습니다.
Script 에서 사용한 "\" 문자는 자동적으로 "\\" 로 변환을 해주지 않습니다.(Component 의 property 참조는 해당 안됨.)
  ex) Form Design maskeditformat property "@\\@" 는 "@\\\\@" 로 생성되고 "_\_" 로 표시됩니다.
       Form Design maskeditformat property "@\'@" 는 "@\\'@" 로 생성되고 "_'_" 로 표시됩니다.
       Script setCellProperty("body",0,"maskeditformat", "@\\\\@") 는 "_\_" 로 표시됩니다.
       Script setCellProperty("body",0,"maskeditformat", "@\\@") 는 "_'_" 로 표시됩니다.
	   
4. PassWord 처리
"{ }" 문자로 마스크 문자를 감싸면 해당 마스크 문자가 "*" 문자로 대체되어 출력됩니다.
입력되는 문자 일부를 PassWord 로 처리하기 위해 사용하게 됩니다.
  ex) maskeditformat 속성값이 "@@@{999}" 이고, Cell 값이 "123456" 이면 화면에 "123***" 로 표시됩니다.

5. 마스크 문자 제외 출력
Cell 값에 마스크 문자와 대응하는 값 이외의 값이 있을 경우 아래 조건에서 겹침표시가 됩니다.

  a. maskeditformat 속성값에 정의된 마스크의 길이와 Cell 값의 길이가 일치하는 경우.
  b. maskeditformat 속성값에 정의된 마스크 문자가 아닌 모든 문자가 Cell 값과 위치관계상 일치하는경우.

위의 a,b를 모두 만족할 경우는 Cell 값 중 마스크 문자와 대응되는 값 이외 값을 무시하게 됩니다.

  ex )  maskeditformat 속성값이 "@@@@-@@-@@" 일 때
   ㄱ. Cell 값이 "20060607" 이면 "2006-06-07" 으로 표시됨
   ㄴ. Cell 값이 "200606" 이면 "2006-06-__" 으로 표시됨
   ㄷ. Cell 값이 "2006-06" 이면 "2006--0-6_" 으로 표시됨
   ㄹ. Cell 값이 "2006-06-07" 이면 "2006-06-07" 으로 겹침표시됨.
   ㅁ. Cell 값이 "2006-06-07 13" 이면 "2006--0-6-" 으로 표시됨.

위와 같이 a,b 조건을 만족하는 ㄹ 의 경우만 겹침으로 표시되며, 그외에는 겹침표시 되지 않습니다.

**Remark**

- edittype 속성값이 "date" 일 때 입력형식은 calendareditformat 속성값이 적용됩니다.
   displaytype 속성값이 "date", "calendarcontrol" 일 때 표시형식은 calendardateformat 속성값이 적용됩니다.

- Cell 의 editype 속성값이 "mask" 이고, maskedittype 속성값이 "number" 일 때 0.1 과 같이 소수형태로 입력했을 경우 입력확정 후 마스크에 따라 정수부에 입력된 0 이 표시되지 않을 수 있습니다.


◆ Excel Export 제약

- maskeditformat 속성값이 "##.##" 이고, 데이터값이 "2" 일 때 Grid 는 "2" Excel 은 "2." 으로 출력되는사항은
  Grid 와 Excel 의 마스크 적용방식 차이이므로 Excel 에서 마스크를 제거하여 사용해야 합니다.


◆ Android NRE 제약

- 일부 키패드의 경우 한글자판에서 입력 시 영문으로 자체 변환되는 키패드가 존재합니다.
   이 경우 영문으로 입력이 처리됩니다.


---

### maskeditimeaction

> Components > Component > Grid > Objects > GridCellControl > Property > maskeditimeaction

**Description**

키보드에 하단 모서리에 표시되는 사용자 작업 버튼 UI와 동작을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.maskeditimeaction[= enumMaskededitimeaction]
```

**Setting Syntax**

```javascript
enumMaskededitimeaction ::= 'none' | 'next' | 'previous'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "maskeditimeaction", "none" );
```
- **`"none"`** — 캐리지 리턴 버튼을 표시합니다.
- **`"next"`** — 다음 버튼을 표시합니다.
TAB 키 입력과 같은 동작을 처리합니다 (다음 컴포넌트로 포커스가 이동합니다).
- **`"previous"`** — 이전 버튼을 표시합니다.
SHIFT + TAB 키 입력과 같은 동작을 처리합니다 (이전 컴포넌트로 포커스가 이동합니다).

**Remark**

- 속성값을 설정하지 않으면 "none" 으로 적용됩니다.
- 운영체제 또는 키보드 앱에서 지원하지 않는 경우 UI가 원하는 형식으로 변경되지 않을 수 있습니다.
  UI가 변경되지 않더라도 키 입력 시 발생하는 이벤트는 정상적으로 처리됩니다.
- 키보드가 표시된 상태에서 속성값을 변경하면 현재 키보드 UI에는 반영되지 않습니다.
키보드가 다시 표시될때 변경된 속성값이 반영됩니다.
- onkeydown > onkeyup > onimeaction 순으로 이벤트가 발생합니다.


---

### maskeditlimitbymask

> Components > Component > Grid > Objects > GridCellControl > Property > maskeditlimitbymask

**Description**

Cell 의 edittype 속성값이 "mask" 이고 maskedittype 속성값이 "number" 일 때, maskeditformat 속성의 마스크 값이 적용되는 부분을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.maskeditlimitbymask[= enumLimitmask]
```

**Setting Syntax**

```javascript
enumLimitmask ::= 'none' | 'integer' | 'decimal' | 'both'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "maskeditlimitbymask", "integer" );
```
- **`"none"`** — maskeditformat 속성값과 관계없이 숫자값 입력에 제한을 두지 않습니다.
- **`"integer"`** — 정수부분만 maskeditformat 속성값에 따라 입력을 제한합니다.
소수부분은 maskeditformat 속성값이 정의되어 있어도 제한없이 입력이 가능합니다.
- **`"decimal"`** — 정수부분은 maskeditformat 속성값이 정의되어 있어도 제한없이 입력이 가능합니다.
소수부분만 maskeditformat 속성값에 따라 입력을 제한합니다.
- **`"both"`** — 정수부분과 소수부분 모두 maskeditformat 속성값에 따라 입력을 제한합니다.

**Remark**

- maskeditlimitbymask 속성값을 설정하지 않으면 "decimal"로 적용됩니다.

- 부호(Sign)는 maskeditlimitbymask 속성값에 관계없이 입력할 수 있습니다.

- 예를 들어 maskeditformat 속성값이 "###.##"이고, maskeditlimitbymask 속성값이 "decimal" 이면 소수부 입력 시 두자리 숫자까지만 입력됩니다.


---

### maskeditmaskchar

> Components > Component > Grid > Objects > GridCellControl > Property > maskeditmaskchar

**Description**

Cell 의 maskeditformat 속성에 정의된 마스크 문자에 대응하는 문자를 지정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.maskeditmaskchar[= strMaskchar]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "maskeditmaskchar", "=" );
```
- **`strMaskchar`** — maskeditformat 속성에 정의된 마스크("#","@","yyyy" 등) 위치에 표시될 문자를 설정합니다.

**Remark**

- maskeditmaskchar 속성값을 설정하지 않으면 언더바("_")로 적용됩니다.

- edittype 속성값이 "mask","date" 인 경우에만 적용되는 속성입니다.

- Grid 의 Head, Body, Summary 밴드에 속한 Cell 에 공통 적용되는 속성입니다.


---

### maskeditpostfixtext

> Components > Component > Grid > Objects > GridCellControl > Property > maskeditpostfixtext

**Description**

표시되는 텍스트 뒤에 붙여서 표시할 문자열을 지정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.maskeditpostfixtext[= strPostFixText]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "maskeditpostfixtext", "%')";
```
- **`strPostFixText`** — 표시되는 텍스트 뒤에 붙여서 표시할 문자열을 설정합니다.

**Remark**

- 속성값을 설정하지 않으면 표시되는 텍스트에 영향을 미치지 않습니다.
- maskedittype 속성값이 "number"인 경우에는 maskeditformat 속성값 설정 시 숫자를 표기하기 위한 마스크 문자 외에 다른 문자를 설정할 수 없습니다. 때문에 "20%"와 같은 텍스트를 표시할 수 없습니다. maskeditpostfixtext 속성값을 "%"로 지정하면 숫자 뒤에 원하는 문자열을 설정해서 표시할 수 있습니다.


---

### maskedittrimtype

> Components > Component > Grid > Objects > GridCellControl > Property > maskedittrimtype

**Description**

Cell 의 maskeditformat 속성에 설정된 형식 중 좌우 공백에 대한 처리 방법을 결정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.maskedittrimtype[= enumTrimtype]
```

**Setting Syntax**

```javascript
enumTrimtype ::= 'none' | 'left' | 'right' | 'both'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "maskedittrimtype", "both" );
```
- **`"none"`** — 입력하지 않은 마스크와 입력한 스페이스 문자를 모두 공백으로 처리하여 Cell 에 저장합니다.
- **`"left"`** — 왼쪽에 입력하지 않은 마스크와 입력한 스페이스 문자는 잘라내고 입력된 문자를 왼쪽으로 모아서 Cell 에 저장합니다.

오른쪽에 입력하지 않은 마스크와 입력한 스페이스 문자를 모두 공백으로 처리하여 Cell 에 저장합니다.
- **`"right"`** — 왼쪽에 입력하지 않은 마스크와 입력한 스페이스 문자를 모두 공백으로 처리하여 Cell 에 저장합니다.

오른쪽에 입력하지 않은 마스크와 입력한 스페이스 문자는 잘라내고 Cell 에 저장합니다.
- **`"both"`** — 왼쪽과 오른쪽에 입력하지 않은 마스크와 입력한 스페이스 문자는 모두 잘라내고 입력된 문자를 왼쪽으로 모아서 Cell 에 저장합니다.

**Remark**

- maskedittrimtype 속성값을 설정하지 않으면 "none"으로 적용됩니다.

- Cell 의 edittype 속성값이 "mask" 이고, maskeditclipmode 속성값이 "includespace" 인 경우에만 적용되는 속성입니다.

- maskedittrimtype 속성은 사용자가 직접 입력할 때만 적용됩니다.
  스크립트로 Cell 값을 설정할 때는 적용되지 않습니다.


---

### maskedittype

> Components > Component > Grid > Objects > GridCellControl > Property > maskedittype

**Description**

Cell 의 edittype 속성값이 "mask" 일 때 Cell 에 입력되는 값의 형식을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.maskedittype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'number' | 'string'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "maskedittype", "number" );
this.Grid00.setCellProperty( "body", 0, "maskedittype", "string" );
```
- **`"number"`** — Cell 에서 숫자 형식으로 입력을 받습니다.

maskeditformat, maskeditlimitbymask 속성값이 입력방식에 영향을 줍니다.
- **`"string"`** — Cell 에서 문자 형식으로 입력을 받습니다.

maskeditformat, maskeditmaskchar, maskeditclipmode, maskedittrimtype 속성값이 입력방식에 영향을 줍니다.

**Remark**

- maskedittype 속성값을 설정하지 않으면 "number"로 적용됩니다.


---

### multicomboautoselect

> Components > Component > Grid > Objects > GridCellControl > Property > multicomboautoselect

**Description**

Cell이 MultiCombo 형식일 때 편집영역이 활성화되면 텍스트를 전체선택 할지 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.multicomboautoselect[= bAutoselect]
```

**Setting Syntax**

```javascript
bAutoselect ::= 'true' | 'false'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "multicomboautoselect", "true" );
```
- **`true`** — Cell의 편집영역이 활성화될 때 텍스트가 전체선택 됩니다.
- **`false`** — Cell의 편집영역이 활성화될 때 텍스트가 선택되지 않습니다.

**Remark**

- multicomboautoselect 속성값을 설정하지 않으면 false로 적용됩니다.

- Cell 이 MultiCombo 형식일 때 편집영역이 활성화되려면 edittype 속성값이 "multicombo"이고, multicombotype 속성값이 "dropdown" 이외의 값이어야 합니다.


◆ WRE 제약

- 마우스 또는 터치에 의해 편집영역이 활성화될 때는 텍스트 전체선택이 정상동작합니다.
  그러나 setFocus() 메서드에 의해 편집영역이 활성화될 때는 텍스트 전체선택이 되지 않을 수 있습니다.


---

### multicombobuttonsize

> Components > Component > Grid > Objects > GridCellControl > Property > multicombobuttonsize

**Description**

Cell이 MultiCombo 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.multicombobuttonsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.Grid00.setCellProperty( "body", 0, "multicombobuttonsize", "30");
this.Grid00.setCellProperty( "body", 0, "multicombobuttonsize", "30 20");
```
- **`<strWidth>`** — 드롭다운 버튼의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 드롭다운 버튼의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- multicombobuttonsize 속성값을 설정하지 않으면 Grid의 cellmulticombobuttonsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### multicombocodecol

> Components > Component > Grid > Objects > GridCellControl > Property > multicombocodecol

**Description**

Cell이 MultiCombo 형식일 때 Cell의 아이템 리스트에서 코드값으로 사용될 Column을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.multicombocodecol[= strColumnID]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "multicombocodecol", "column0");
```
- **`strColumnID`** — Cell의 multicombodataset 속성에 설정된 DataSet의 Column 중 코드값으로 사용할 Column의 ID를 문자열로 설정합니다.

**Remark**

- Cell의 edittype 속성값이 "multicombo" 일 경우 적용되는 속성입니다.
  Cell의 displaytype 속성값이 "multicombocontrol" 일 경우 적용되는 속성입니다.

- multicombocodecol 속성은 Body 밴드 영역의 Cell 에만 적용되는 속성입니다.

- multicombocodecol 속성을 설정하지 않으면 내부적으로 multicombodatacol 속성값을 사용합니다.

- multicombocodecol 속성에 설정된 Column의 값은 아이템 리스트에 표시되지 않고 각 아이템의 코드값으로 처리됩니다.
  multicombodatacol 속성에 설정된 Column의 값은 아이템 리스트에 표시되며 각 아이템의 데이터값으로 처리됩니다.

- 아이템 리스트의 코드값은 아이템을 구분하는 유일값으로 중복값을 가질 수 없습니다.
  만일 중복된 코드값이 존재할 경우 중복코드값의 첫 번째 아이템이 항상 선택처리됩니다.
   
- Cell에서 선택된 아이템의 코드값은 Cell의 text 속성에 저장되고 Grid에 바인딩된 DataSet에 반영됩니다.
  Cell에는 선택된 코드값에 해당하는 아이템 리스트의 데이터값이 텍스트로 표시됩니다.


---

### multicombocounttextformat

> Components > Component > Grid > Objects > GridCellControl > Property > multicombocounttextformat

**Description**

Cell이 MultiCombo 형식이고 multicomboedittype 속성값이 "count"일 때 선택된 아이템을 표시할 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.multicombocounttextformat[= strExpr]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "multicombocounttextformat", "[#]개 아이템을 선택했습니다.");
```
- **`strExpr`** — 선택된 아이템을 표시할 텍스트를 설정합니다.

값 설정 시 전체 아이템 개수와 선택한 아이템 개수를 아래 기호로 설정할 수 있습니다.
  [*] : 전체 아이템 개수
  [#] : 선택한 아이템 개수

**Remark**

- multicombocounttextformat 속성값을 설정하지 않으면 "[#] item(s) selected"으로 적용됩니다.


---

### multicombodatacol

> Components > Component > Grid > Objects > GridCellControl > Property > multicombodatacol

**Description**

Cell이 MultiCombo 형식일 때 Cell의 아이템 리스트에서 데이터값으로 사용될 Column을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.multicombodatacol[= strColumnID]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "multicombodatacol", "column1");
```
- **`strColumnID`** — Cell의 multicombodataset 속성에 설정된 DataSet의 Column 중 데이터값으로 사용할 Column의 ID를 문자열로 설정합니다.

**Remark**

- Cell의 edittype 속성값이 "multicombo" 일 경우 적용되는 속성입니다.
  Cell의 displaytype 속성값이 "multicombocontrol" 일 경우 적용되는 속성입니다.

- multicombodatacol 속성은 Body 밴드 영역의 Cell 에만 적용되는 속성입니다.

- multicombodatacol 속성을 설정하지 않으면 내부적으로 multicombocodecol 속성값을 사용합니다.

- multicombodatacol 속성에 설정된 Column의 값은 아이템 리스트에 표시되며 각 아이템의 데이터값으로 처리됩니다.
  multicombocodecol 속성에 설정된 Column의 값은 아이템 리스트에 표시되지 않고 각 아이템의 코드값으로 처리됩니다.

- 아이템 리스트의 코드값은 아이템을 구분하는 유일값으로 중복값을 가질 수 없습니다.
  만일 중복된 코드값이 존재할 경우 중복코드값의 첫 번째 아이템이 항상 선택처리됩니다.
   
- Cell에서 선택된 아이템의 코드값은 Cell의 text 속성에 저장되고 Grid에 바인딩된 DataSet에 반영됩니다.
  Cell 에는 선택된 코드값에 해당하는 아이템 리스트의 데이터값이 텍스트로 표시됩니다.


---

### multicombodataset

> Components > Component > Grid > Objects > GridCellControl > Property > multicombodataset

**Description**

Cell이 MultiCombo 형식일 때 Cell 의 아이템 리스트를 구성할 DataSet의 ID를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.multicombodataset[= strDatasetID]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "multicombodataset", "Dataset00");
```
- **`strDatasetID`** — Cell의 아이템 리스트를 구성할 DataSet의 ID를 문자열로 설정합니다.

**Remark**

- Cell에서 MultiCombo 아이템 리스트를 사용하기 위해서는 multicombocodecol과 multicombodatacol 중 한 개 속성과 multicombodataset 속성을 설정하여야 합니다.

- multicombodataset 속성에 설정한 DataSet 이 존재하지 않거나 데이터가 없을 경우 아이템 리스트가 정상적으로 표시되지 않습니다.

- multicombodataset 속성은 Body 밴드 영역의 Cell 에만 적용되는 속성입니다.


---

### multicombodisplaynulltext

> Components > Component > Grid > Objects > GridCellControl > Property > multicombodisplaynulltext

**Description**

Cell이 MultiCombo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시할 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.multicombodisplaynulltext[= strText]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "multicombodisplaynulltext", "No Data");
```
- **`strText`** — Cell이 MultiCombo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시할 텍스트를 설정합니다.

**Remark**

- MultiCombo 아이템의 코드값에 현재 Cell에 바인드 된 값이 없는 상태에서
  Cell 에 포커스가 없고, multicombodisplaynulltype 속성값이 "nulltext" 일 때 대체 텍스트가 표시됩니다.


---

### multicombodisplaynulltype

> Components > Component > Grid > Objects > GridCellControl > Property > multicombodisplaynulltype

**Description**

Cell 이 MultiCombo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시되는 값의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.multicombodisplaynulltype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'nulltext'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "multicombodisplaynulltype", "nulltext" );
```
- **`"none"`** — Cell에 바인드 된 값과 일치하는 콤보 아이템이 없을 경우 빈 문자열을 표시합니다.
- **`"nulltext"`** — Cell에 바인드 된 값과 일치하는 콤보 아이템이 없을 경우 combodisplaynulltext 속성값을 표시합니다.

**Remark**

- multicombodisplaynulltype 속성값을 설정하지 않으면 "none"으로 적용됩니다.


---

### multicombodisplayrowcount

> Components > Component > Grid > Objects > GridCellControl > Property > multicombodisplayrowcount

**Description**

Cell이 MultiCombo 형식일 때 아이템 리스트에 한 번에 표시될 아이템의 개수를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.multicombodisplayrowcount[= nRowNum]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "multicombodisplayrowcount", "5");
```
- **`nRowNum`** — 아이템 리스트에 표시될 아이템의 개수를 숫자로 설정합니다.

undefined를 설정하면 아이템 리스트가 표시되는 공간에 맞게 자동으로 개수가 설정됩니다.

**Remark**

- Grid의 Body 밴드 영역에 속한 Cell 만 적용되는 속성입니다.

- multicombodisplayrowcount 속성값을 설정하지 않으면 undefined로 적용됩니다.

- multicombodisplayrowcount 속성값 보다 아이템의 개수가 작으면 아이템 개수에 맞게 리스트가 표시됩니다.

- multicombodisplayrowcount 속성값 보다 아이템의 개수가 많으면 아이템 리스트에 스크롤이 표시됩니다.

- MultiCombo 하단에 아이템 3개를 표시할 공간이 없다면 아이템 리스트가 MultiCombo 상단에 표시됩니다.
  상/하단 모두 아이템 3개를 표시할 공간이 없다면 더 넓은 방향으로 리스트가 표시됩니다.


---

### multicomboedittype

> Components > Component > Grid > Objects > GridCellControl > Property > multicomboedittype

**Description**

Cell이 MultiCombo 형식일 때 선택된 아이템의 표시 방식을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.multicomboedittype[= enumMode]
```

**Setting Syntax**

```javascript
enumMode ::= "text" | "singletag" | "multitag" | "count"
```
```javascript
this.Grid00.setCellProperty( "body", 0, "multicomboedittype", "multitag");
```
- **`"text"`** — 선택된 아이템을 텍스트로 표시합니다.
- **`"singletag"`** — 선택된 아이템을 한 줄의 태그로 표시합니다.
- **`"multitag"`** — 선택된 아이템을 여러 줄의 태그로 표시합니다.
- **`"count"`** — 선택된 아이템을 개수로 표시합니다.

**Remark**

- multicomboedittype 속성값을 설정하지 않으면 "text"로 적용됩니다.


---

### multicomboimemode

> Components > Component > Grid > Objects > GridCellControl > Property > multicomboimemode

**Description**

Cell이 MultiCombo 형식일 때 편집창에서 사용될 기본 입력 언어를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.multicomboimemode[= enumImemode]
```

**Setting Syntax**

```javascript
enumImemode ::= 'none' | 'alpha' | 'alpha,full' | 'hangul' | 'hangul,full' | 'katakana' | 'katakana,full' | 'hiragana' | 'direct'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "multicomboimemode", "alpha" );
```
- **`"none"`** — 기본 입력 언어를 변경하지 않고 현재 시스템에 설정된 언어를 유지합니다.
- **`"alpha"`** — 입력언어를 영문으로 설정합니다.

IME 가 동아시아 입력기(한글/일본어/한자) 일 경우만 적용됩니다.
- **`"alpha,full"`** — 입력언어를 영문 전각으로 설정합니다.

IME 가 동아시아 입력기(한글/일본어/한자) 일 경우만 적용됩니다.
- **`"hangul"`** — 입력언어를 한글로 설정합니다.

IME 가 한글 입력기일 경우만 적용됩니다.
- **`"hangul,full"`** — 입력언어를 한글 전각으로 설정합니다.

IME 가 한글 입력기일 경우만 적용됩니다.
- **`"katakana"`** — 입력언어를 일본어 가나로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"katakana,full"`** — 입력언어를 일본어 가나 전각으로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"hiragana"`** — 입력언어를 일본어 히라가나 전각으로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"direct"`** — 입력언어를 일본어 직접입력으로 설정합니다.

IME 가 IME2002 의 일본어 입력기일 경우만 적용됩니다.
IME 가 IME2007 과 2010 일 경우는 "alpha"로 적용됩니다.

**Remark**

- multicomboimemode 속성값을 설정하지 않으면 "none"으로 적용됩니다.

- Cell 이 포커스를 받아 편집창이 활성화될 때 IME 가 재설정됩니다.

- 일부 환경에서만 지원하는 속성이므로 상단의 지원 환경을 확인하시기 바랍니다.
   > Windows NRE, Android NRE에서만 지원하는 속성입니다.
   > macOS NRE, iOS/iPadOS NRE, WRE에서는 지원하지 않는 속성입니다.


---

### multicomboitemheight

> Components > Component > Grid > Objects > GridCellControl > Property > multicomboitemheight

**Description**

Cell이 MultiCombo 형식일 때 아이템 리스트의 각 행의 높이를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.multicomboitemheight[= nHeight]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "multicomboitemheight", "30");
```
- **`nHeight`** — 각 아이템이 표시되는 행의 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- multicomboitemheight 속성을 설정하지 않으면 글자 크기를 기준으로 행의 높이를 자동 계산합니다.


---

### multicombopopupsize

> Components > Component > Grid > Objects > GridCellControl > Property > multicombopopupsize

**Description**

Cell이 MultiCombo 형식일 때 팝업으로 표시되는 아이템 리스트의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.multicombopopupsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.Grid00.setCellProperty( "body", 0, "multicombopopupsize", "500 400");
```
- **`<strWidth>`** — 아이템 리스트의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 아이템 리스트의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- multicombopopupsize 속성값을 설정하지 않으면 Grid 의 cellmulticombopopupsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### multicombopopuptype

> Components > Component > Grid > Objects > GridCellControl > Property > multicombopopuptype

**Description**

Cell이 MultiCombo 형식일 때 아이템 리스트가 표시되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.multicombopopuptype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'normal' | 'center'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "multicombopopuptype", "center");
```
- **`"none"`** — 아이템 리스트를 화면에 표시하지 않습니다.
- **`"normal"`** — 아이템 리스트가 표시되는 일반적인 규칙을 따릅니다.
- **`"center"`** — 애플리케이션이 실행 중인 화면의 중앙에 아이템 리스트가 표시됩니다

**Remark**

- multicombopopuptype 속성값을 설정하지 않으면 Grid 의 cellmulticombopopuptype 속성값이 적용됩니다.

- 모바일환경 같은 특별한 경우에 제한적으로 사용해야 하는 속성입니다.

- 다중 모니터의 경우 Grid가 표시되고 있는 모니터를 기준으로 아이템 리스트가 표시됩니다.


---

### multicomboreadonlycolumn

> Components > Component > Grid > Objects > GridCellControl > Property > multicomboreadonlycolumn

**Description**

Cell이 MultiCombo 형식일 때 아이템 readonly 여부 설정 시 사용될 Column을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.multicomboreadonlycolumn [=strColumnID]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "multicomboreadonlycolumn", "column1" );
```
- **`strColumnID`** — multicombodataset 속성에 설정된 Dataset 오브젝트의 Column 중 아이템 readonly 여부를 설정할 Column의 ID를 문자열로 설정합니다.


---

### multicomboscrollbarsize

> Components > Component > Grid > Objects > GridCellControl > Property > multicomboscrollbarsize

**Description**

Cell이 MultiCombo 형식일 때 아이템 리스트에 표시되는 스크롤바의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.multicomboscrollbarsize[= nWidth]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "multicomboscrollbarsize", "20" );
```
- **`nWidth`** — 스크롤바의 너비를 숫자로 설정합니다.

**Remark**

- multicomboscrollbarsize 속성값을 설정하지 않으면 Grid 의 cellmulticomboscrollbarsize 속성값이 적용됩니다.

- scrollbarsize 속성값을 변경하면 스크롤바 내부버튼의 높이와 너비가 같이 변경됩니다.


---

### multicomboshowselectallcheckbox

> Components > Component > Grid > Objects > GridCellControl > Property > multicomboshowselectallcheckbox

**Description**

Cell이 MultiCombo 형식일 때 아이템 리스트 상단에 아이템 전체를 선택 또는 선택해제하는 체크박스의 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.showselectallcheckbox [=bSelectall]
```

**Setting Syntax**

```javascript
bSelectall ::= true | false
```
```javascript
this.Grid00.setCellProperty( "body", 0, "showselectallcheckbox", true);
```
- **`true`** — 아이템 전체를 선택 또는 선택해제하는 체크박스를 아이템 리스트 상단에 표시합니다.
- **`false`** — 아이템 전체를 선택 또는 선택해제하는 체크박스를 아이템 리스트 상단에 표시하지 않습니다.

**Remark**

- multicomboshowselectallcheckbox 속성값을 설정하지 않으면 false로 적용됩니다.


---

### multicombotextseparator

> Components > Component > Grid > Objects > GridCellControl > Property > multicombotextseparator

**Description**

Cell 이 MultiCombo 형식일 때 2개 이상의 text 속성값 설정 시 구분자로 사용할 값을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.multicombotextseparator[= strTextSeparator]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "multicombotextseparator", ";");
```
- **`strTextSeparator`** — 구분자를 설정합니다.

**Remark**

- multicombotextseparator 속성값을 설정하지 않으면 ","로 적용됩니다.


---

### multicombotype

> Components > Component > Grid > Objects > GridCellControl > Property > multicombotype

**Description**

Cell이 MultiCombo 형식일 때 동작하는 방법을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.multicombotype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'dropdown' | 'search' | 'filter' | 'filterlike' | 'caseisearch' | 'caseifilter' | 'caseifilterlike'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "multicombotype", "caseifilter");
```
- **`"dropdown"`** — Combo 의 아이템 리스트에 전체 아이템이 모두 표시됩니다.

Cell 의 편집창에 문자를 입력할 수 없습니다.
- **`"search"`** — Cell 의 편집창에 문자열 입력 시 Combo 의 검색기능이 활성화됩니다.

편집창에 입력된 문자열로 시작하는 첫번째 아이템이 선택된 아이템 리스트가 표시됩니다.
편집창에 입력된 문자열로 시작하는 아이템이 없을 경우 아이템 리스트가 표시되지 않습니다.

아이템 리스트에는 전체 아이템이 모두 표시됩니다.
아이템 검색 시 대소문자를 구별합니다.
- **`"filter"`** — Cell 의 편집창에 문자열 입력 시 Combo 의 필터기능이 활성화됩니다.

편집창에 입력된 문자열로 시작하는 아이템만 있는 아이템 리스트가 표시됩니다.
편집창에 입력된 문자열로 시작하는 아이템이 없을 경우 아이템 리스트가 표시되지 않습니다.

문자를 추가로 입력하면 아이템 리스트가 자동으로 갱신됩니다.
아이템 필터 시 대소문자를 구별합니다.
- **`"filterlike"`** — Cell 의 편집창에 문자열 입력 시 Combo 의 필터기능이 활성화됩니다.

편집창에 입력된 문자열이 포함된 아이템만 있는 아이템 리스트가 표시됩니다.
편집창에 입력된 문자열이 포함된 아이템이 없을 경우 아이템 리스트가 표시되지 않습니다.

문자를 추가로 입력하면 아이템 리스트가 자동으로 갱신됩니다.
아이템 필터 시 대소문자를 구별합니다.
- **`"caseisearch"`** — Cell 의 편집창에 문자열 입력 시 Combo 의 검색기능이 활성화됩니다.

"search" 값과 동일하게 동작하며 아이템 검색 시 대소문자를 구별하지 않습니다.
- **`"caseifilter"`** — Cell 의 편집창에 문자열 입력 시 Combo 의 필터기능이 활성화됩니다.

"filter" 값과 동일하게 동작하며 아이템 필터 시 대소문자를 구별하지 않습니다.
- **`"caseifilterlike"`** — Cell 의 편집창에 문자열 입력 시 Combo 의 필터기능이 활성화됩니다.

"filterlike" 값과 동일하게 동작하며 아이템 필터 시 대소문자를 구별하지 않습니다.

**Remark**

- multicombotype 속성값을 설정하지 않으면 "dropdown"으로 적용됩니다.

- multicombotype 속성값에 관계없이 Cell 의 드롭버튼(DropButton) 클릭 시 전체 아이템이 있는 아이템 리스트가 표시됩니다.

- multicombotype 속성을 "dropdown" 이외의 값으로 설정하면 검색/필터 기능이 활성화됩니다.
   검색/필터 기능은 사용자의 입력을 돕기 위한 기능으로 아이템 후보값을 편집 영역과 리스트 창을 통해 표시합니다.

- 아이템 리스트에서 마우스나 키보드에 의해 아이템을 선택하면 입력이 종료된 것으로 처리합니다.


---

### name

> Components > Component > Grid > Objects > GridCellControl > Property > name

**Description**

GridCellControl 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.name
```

**Setting Syntax**

- **`name`** — Control 의 이름을 설정합니다.

**Remark**

- 컴포넌트 내부에 정의된 Control 은 name 을 설정할 수 없습니다.


---

### opacity

> Components > Component > Grid > Objects > GridCellControl > Property > opacity

**Description**

Cell 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.opacity[= stropacity]
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8;
opacity : 80%;

* Script ( normal property )
this.Grid00.setCellProperty( "body", 0, "opacity", "0.8" );
this.Grid00.setCellProperty( "body", 0, "opacity", 0.8 );
this.Grid00.setCellProperty( "body", 0, "opacity", "80%" );
```
- **`strOpacity`** — 0.0 ~ 1.0 사이의 값 또는 0.0% ~ 100.0% 사이의 값을 지정합니다.
0(또는 0%)을 설정하면 완전 투명, 1(또는 100%)을 설정하면 완전 불투명으로 처리됩니다.
1 이상의 값은 1로, 0 이하의 값은 0으로 처리됩니다. 마찬가지로 100% 이상의 값은 100%로, 0% 이하의 값은 0%로 처리됩니다.

XCSS는 숫자 또는 퍼센트 값으로만 설정할 수 있습니다.
Script는 숫자 또는 문자(숫자, 퍼센트 값)로 설정할 수 있습니다.

**Remark**

- opacity 속성값을 설정하지 않으면 undefined 가 설정되고, 1 로 동작합니다.

- Div 와 같이 자식 컴포넌트를 가질 수 있는 컴포넌트에 opacity 속성을 적용하면 자식 컴포넌트도 함께 적용됩니다.

- 부모와 자식 컴포넌트에 각각 opacity 속성이 설정되어 있으면 자식 컴포넌트의 투명도는 부모의 투명도에 추가적으로 적용됩니다.
   예를 들어 부모의 opacity가 0.5 이고 자식의 opacity가 0.4 이면 결과적으로 자식 컴포넌트는 0.2 의 투명도가 적용됩니다.


---

### progressbarblockgap

> Components > Component > Grid > Objects > GridCellControl > Property > progressbarblockgap

**Description**

Cell 의 displaytype 속성값이 "progressbarcontrol" 일 경우 ProgressBar 의 진행 상태를 표시하는 블럭의 간격을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.progressbarblockgap[= nGap]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "progressbarblockgap", "3')";
```
- **`nGap`** — 블럭의 간격을 0 이상의 pixel 단위 정수값으로 설정합니다.

0 미만의 값을 설정하면 0 으로 적용됩니다.
undefined 값을 설정하면 2 로 적용됩니다.

**Remark**

- progressbarblockgap 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- Cell 의 progressbarsmooth 속성값이 "false" 일 때만 적용되는 속성입니다.


---

### progressbarblocksize

> Components > Component > Grid > Objects > GridCellControl > Property > progressbarblocksize

**Description**

Cell 의 displaytype 속성값이 "progressbarcontrol" 일 경우  ProgressBar 의 진행 상태를 표시하는 블럭의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.progressbarblocksize[= nWidth]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "progressbarblocksize", "20')";
```
- **`nWidth`** — 블럭의 너비를 1 이상의 pixel 단위 정수값으로 설정합니다.

1 미만의 값을 설정하면 1 로 적용됩니다.
undefined 값을 설정하면 15 로 적용됩니다.

**Remark**

- progressbarblocksize 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- Cell 의 progressbarsmooth 속성값이 "false" 일 때만 적용되는 속성입니다.


---

### progressbardirection

> Components > Component > Grid > Objects > GridCellControl > Property > progressbardirection

**Description**

Cell 의 displaytype 속성값이 "progressbarcontrol" 일 경우 ProgressBar 의 진행 방향을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.progressbardirection[= enumDirection]
```

**Setting Syntax**

```javascript
enumDirection ::= 'forward' | 'backward'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "progressbardirection", "backward')";
```
- **`"forward"`** — 진행바가 왼쪽에서 오른쪽으로 증가합니다.
- **`"backward"`** — 진행바가 오른쪽에서 왼쪽으로 증가합니다.

**Remark**

- progressbardirection 속성값을 설정하지 않으면 "forward"로 적용됩니다.


---

### progressbarsmooth

> Components > Component > Grid > Objects > GridCellControl > Property > progressbarsmooth

**Description**

Cell 의 displaytype 속성값이 "progressbarcontrol" 일 경우 ProgressBar 가 표시되는 형태를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.progressbarsmooth[= bSmooth]
```

**Setting Syntax**

```javascript
bSmooth ::= 'true' | 'false'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "progressbarsmooth", "true')";
```
- **`"true"`** — 진행바가 끊어진 부분 없이 연속된 모양으로 표시됩니다.
- **`"false"`** — 진행바가 progressbarblockgap, progressbarblocksize 속성값에 맞게 블럭형태로 표시됩니다.

**Remark**

- progressbarsmooth 속성값을 설정하지 않으면 "false"로 적용됩니다.


---

### radioitemcodevalue

> Components > Component > Grid > Objects > GridCellControl > Property > radioitemcodevalue

**Description**

Cell이 radioitem 형식일 때 선택상태로 처리되는 값을 문자열로 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.radioitemcodevalue[= strValue]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "radioitemcodevalue ", "1");
```
- **`strValue`** — radioitem 에서 선택상태로 처리될 문자열을 설정합니다.

설정값과 Cell 에 표시되는 텍스트값이 일치하면 radioitem 이 선택상태로 표시됩니다.

**Remark**

- Cell 의 edittype 속성값이 "radioitem" 이거나 displaytype 속성값이 "radioitemcontrol" 일 때 Cell 에 표시되는 radioitem 에 적용됩니다.

- Cell 의 radioitem 이 선택상태가 되면 text 속성값에 바인드 된 Column 에 radioitemcodevalue 속성값이 저장됩니다.


---

### radioitemsize

> Components > Component > Grid > Objects > GridCellControl > Property > radioitemsize

**Description**

Cell 이 radioitem 형식일 때 radioitem 의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.radioitemsize[= nSize]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "radioitemsize", "25");
```
- **`nSize`** — Cell 에 표시되는 radioitem 의 크기를 pixel 단위의 숫자로 설정합니다.

설정값은 표시되는 radioitem 의 가로/세로 크기에 동일하게 적용됩니다.

**Remark**

- Cell 의 edittype 속성값이 "radioitem" 이거나 displaytype 속성값이 "radioitemcontrol" 일 때 Cell 에 표시되는 radioitem 에 적용됩니다.

- radioitemsize 속성값을 설정하지 않으면 Grid 의 cellradioitemsize 속성값이 적용됩니다.
   radioitemsize, cellradioitemsize 속성을 모두 설정하지 않으면 테마에 정의된 radioitem 이미지 크기에 맞게 적용됩니다.

- 테마에서 radioitem 이미지 크기는 GridCellControl 하위의 cellradioitem 셀렉터에 정의됩니다.

- 테마에 정의된 radioitem 이미지 크기보다 radioitemsize 속성값을 작게 설정할 경우 이미지가 잘려서 표시됩니다.


---

### row

> Components > Component > Grid > Objects > GridCellControl > Property > row

**Description**

Cell 이 밴드내에서 위치하는 Row 인덱스 값이 저장된 읽기전용 속성입니다.

**Syntax**

```javascript
GridCellControl.row
```

**Remark**

- Row 인덱스는 Cell 이 밴드 내에서 표시되는 위치를 나타냅니다.

- 같은 Row 위치의 Cell 은 Left, Body, Right 밴드에 관계없이 동일한 값을 갖습니다.

- 넥사크로 스튜디오의 Grid Contents Editor 에서 디자인 시 자동으로 설정되는 속성입니다.


---

### rowspan

> Components > Component > Grid > Objects > GridCellControl > Property > rowspan

**Description**

Cell 에 병합된 Sub Row 의 갯수가 저장된 읽기전용 속성입니다.

**Syntax**

```javascript
GridCellControl.rowspan
```

**Remark**

- 병합(Merge) 된 Cell 이 아닐 경우 "0"값을 갖습니다.

- 동일 밴드 영역이 아닌 Cell 은 병합(Merge) 할 수 없습니다.


---

### rtl

> Components > Component > Grid > Objects > GridCellControl > Property > rtl

**Description**

GridCellControl 에서 내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.rtl
```

**Setting Syntax**

```javascript
bRtl ::= undefined | 'true' | 'false'
```
```javascript
var vRtl = this.Grid00.getCellProperty( "head", 0, "rtl" );
```
- **`undefined`** — undefined 설정 시 상위 컴포넌트의 rtl 속성값이 적용됩니다.

사용자가 rtl 속성값을 설정하지 않거나 삭제했을 경우 undefined 가 설정됩니다.
- **`true`** — GridCellControl 의 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 오른쪽으로 설정합니다.
GridCellControl 의 내부 좌표계의 기준을 오른쪽으로 설정합니다.
GridCellControl 의 텍스트 표시 기준을 오른쪽으로 설정합니다.
수직스크롤바가 있을 경우 왼쪽에 표시됩니다.
- **`false`** — GridCellControl 의 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 왼쪽으로 설정합니다.
GridCellControl 의 내부 좌표계의 기준을 왼쪽으로 설정합니다.
GridCellControl 의 텍스트 표시 기준을 왼쪽으로 설정합니다.
수직스크롤바가 있을 경우 오른쪽에 표시됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 아랍권 같이 화면의 표시기준이 오른쪽인 환경에서 컨텐츠의 표시 기준을 변경하기 위해 설정하는 속성입니다.

- GridCellControl 부터 Environment 까지 상위의 모든 rtl 속성값이 undefined 이면
   Environment 의 locale 속성에 설정된 국가 및 언어 설정값을 기준으로 rtl 속성이 적용됩니다.
   Environment 의 locale 속성값을 설정하지 않았을 경우 시스템의 국가 및 언어 설정값이 적용됩니다.


---

### subcell

> Components > Component > Grid > Objects > GridCellControl > Property > subcell

**Description**

병합(Merge) 된 Cell 일 때 실제 병합된 Cell 의 갯수가 저장된 읽기전용 속성입니다.

**Syntax**

```javascript
GridCellControl.subcell
```

**Remark**

- Sub Cell 에 접근할 경우에는 Grid 의 getSubCellProperty(), setSubCellProperty(), getSubCellCount() 메소드를 사용합니다.


---

### subsumtext

> Components > Component > Grid > Objects > GridCellControl > Property > subsumtext

**Description**

keystring 속성에 의해 그룹핑되면 생성되는 논리적 레코드에 표시할 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.subsumtext[= strSubText]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "subsumtext", "Sum')";
this.Grid00.setCellProperty( "body", 0, "subsumtext", "expr:dataset.getRowLevel(currow) == '1'? 'SubSum':'Total')";
this.Grid00.setCellProperty( "body", 0, "subsumtext", "bind:Column0')";
```
- **`strSubText`** — 논리적 레코드(Logical Record)에 표시할 텍스트를 문자열, "expr:", "bind:" 방식으로 설정합니다.

  > 문자열 형태로 설정 시 설정한 문자열을 논리적 레코드에 표시합니다.
  > "expr:" 형태로 수식 설정 시 동적으로 수식을 실행하여 그 결과값을 논리적 레코드에 표시합니다.
  > "bind:" 형태로 DataSet 의 Column 을 바인드 시 Column 값을 논리적 레코드에 표시합니다.

**Remark**

- Cell 이 Body 밴드영역인 경우만 적용되는 속성입니다.

- subsumtext 속성 설정 시 DataSet 의 prop 속성으로 설정된 값은 무시됩니다.


---

### suppress

> Components > Component > Grid > Objects > GridCellControl > Property > suppress

**Description**

Cell 에 Suppress 기능을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.suppress[= nLevel]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "suppress", "1" );
```
- **`nLevel`** — 0 설정 시 Suppress 기능을 사용하지 않습니다.

1 이상 설정 시 현재 Cell 에 Suppress 기능을 사용합니다.
1 이 최상위 값이고, 값이 증가할 수록 Suppress 순위가 낮아집니다.

설정값 보다 한단계 상위 Suppress 값을 가진 Cell 과 비교하여, 상위 Cell 에 값 표시가 생략되었다면 현재 Cell 값이 반복될 경우 생략됩니다.
한단계 상위 Suppress 값을 가진 Cell 이 여러개 일 경우, 모든 상위 Cell 에 값 표시가 생략되었다면 현재 Cell 값이 반복될 경우 생략됩니다.

**Remark**

- suppress 속성값을 설정하지 않으면 0 으로 적용됩니다.

- Suppress 기능은 연속된 데이터 Row 에서 동일 위치의 Cell 값이 같을 경우 데이터 Row 에 값을 한 개만 표시하는 기능입니다.
   동일 위치의 Cell 값이 같은 Row 를 그룹으로 묶어서 보이게 하는데 효과적입니다.

- Suppress 기능은 Body 밴드의 Cell 에만 적용되며, Cell 에 표시되는 텍스트를 기준으로 동일값 여부를 판단합니다.

- Cell 의 displaytype 속성값이 "treeitemcontrol" 인 경우 suppress 속성값은 무시됩니다.
   Cell 의 displaytype 속성값이 "checkboxcontrol"  또는 "radioitemcontrol" 인 경우 Cell 값을 true/false 로 판단하지 않고, 표시되는 텍스트를 기준으로 Suppress 기능이 적용됩니다.


---

### suppressalign

> Components > Component > Grid > Objects > GridCellControl > Property > suppressalign

**Description**

Cell 에 Suppress 기능이 설정되어 있을때 합쳐서 표시되는 텍스트의 위치를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.suppressalign[= enumSupalign]
```

**Setting Syntax**

```javascript
enumSupalign ::= 'first' | 'middle' | 'last'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "suppressalign", "middle" );
```
- **`"first"`** — 합쳐서 표시되는 Cell 중 첫번째 Cell 에 텍스트가 표시됩니다.

텍스트나 이미지의 크기가 Cell 의 크기보다 큰 경우에도 해당 Cell 내에만 출력합니다.
- **`"middle"`** — 합쳐서 표시되는 Cell 중 가운데 Cell 에 텍스트가 표시됩니다.
합쳐서 표시되는 Cell 이 짝수개인 경우는 가운데 윗부분의 Cell 에 표시됩니다.

텍스트나 이미지의 크기가 Cell 의 크기보다 큰 경우에도 해당 Cell 내에만 출력합니다.
- **`"last"`** — 합쳐서 표시되는 Cell 중 마지막 Cell 에 텍스트가 표시됩니다.

텍스트나 이미지의 크기가 Cell 의 크기보다 큰 경우에도 해당 Cell 내에만 출력합니다.

**Remark**

- suppressalign 속성값을 설정하지 않으면 "first" 로 적용됩니다.

- suppressalign 속성값이 "middle" 인 경우는 Grid 의 Redraw 속도가 느려질 수 있습니다.


---

### text

> Components > Component > Grid > Objects > GridCellControl > Property > text

**Description**

Cell 에 표시될 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.text[= strText]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "text", "bind:Column0" );
```
- **`strText`** — Cell 에 표시될 텍스트를 문자열로 설정하거나 Grid 에 바인드 된 DataSet 의 Column을 바인드 설정합니다.

Column 바인드 시 "bind:컬럼ID" 의 형태로 설정합니다.

**Remark**

- Grid 의 Head, Body, Summary 밴드에 속한 Cell 에 공통 적용되는 속성입니다.

- Head, Summary 밴드의 Cell 에 Column을 바인딩 할 경우 텍스트가 출력되지 않습니다.


---

### textareaacceptsenter

> Components > Component > Grid > Objects > GridCellControl > Property > textareaacceptsenter

**Description**

Cell 의 edittype 속성값이 "textarea" 일 때 편집영역에서 Enter 키 입력의 처리방식을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.textareaacceptsenter[= bAcceptsEnter]
```

**Setting Syntax**

```javascript
bAcceptsEnter ::= 'true' | 'false'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "textareaacceptsenter", "true" );
```
- **`true`** — 편집영역에서 Enter 키 입력 시 줄바꿈을 수행합니다.

편집영역의 입력을 완료하려면 "Ctrl + Enter" 키를 입력하여야 합니다.
- **`false`** — 편집영역에서 Enter 키 입력 시 편집영역의 입력을 완료합니다.

편집영역에서 줄바꿈을 수행하려면 "Ctrl + Enter" 키를 입력하여야 합니다.

**Remark**

- textareaacceptsenter 속성값을 설정하지 않으면 false 로 적용됩니다.


---

### textareaautoselect

> Components > Component > Grid > Objects > GridCellControl > Property > textareaautoselect

**Description**

Cell 의 edittype 속성값이 "textarea" 일 경우 편집영역이 활성화 될 때 텍스트를 전체선택 할지 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.textareaautoselect[= bAutoselect]
```

**Setting Syntax**

```javascript
bAutoselect ::= 'true' | 'false'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "textareaautoselect", "true" );
```
- **`true`** — Cell 의 편집영역이 활성화 될 때 텍스트가 전체선택 됩니다.
- **`false`** — Cell 의 편집영역이 활성화 될 때 텍스트가 선택되지 않습니다.

**Remark**

- textareaautoselect 속성값을 설정하지 않으면 false 로 적용됩니다.


◆ web runtime environment 제약

- 마우스 또는 터치에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 정상동작합니다.
  그러나 setFocus() 메소드에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 되지 않을 수 있습니다.


---

### textareaimemode

> Components > Component > Grid > Objects > GridCellControl > Property > textareaimemode

**Description**

Cell 의 edittype 속성값이 "textarea" 일 경우 Cell 의 편집창에서 사용될 기본 입력 언어를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.textareaimemode[= enumImemode]
```

**Setting Syntax**

```javascript
enumImemode ::= 'none' | 'alpha' | 'alpha,full' | 'hangul' | 'hangul,full' | 'katakana' | 'katakana,full' | 'hiragana' | 'direct'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "textareaimemode", "alpha" );
```
- **`"none"`** — 기본 입력 언어를 변경하지 않고 현재 시스템에 설정된 언어를 유지합니다.
- **`"alpha"`** — 입력언어를 영문으로 설정합니다.

IME 가 동아시아 입력기(한글/일본어/한자) 일 경우만 적용됩니다.
- **`"alpha,full"`** — 입력언어를 영문 전각으로 설정합니다.

IME 가 동아시아 입력기(한글/일본어/한자) 일 경우만 적용됩니다.
- **`"hangul"`** — 입력언어를 한글로 설정합니다.

IME 가 한글 입력기일 경우만 적용됩니다.
- **`"hangul,full"`** — 입력언어를 한글 전각으로 설정합니다.

IME 가 한글 입력기일 경우만 적용됩니다.
- **`"katakana"`** — 입력언어를 일본어 가나로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"katakana,full"`** — 입력언어를 일본어 가나 전각으로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"hiragana"`** — 입력언어를 일본어 히라가나 전각으로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"direct"`** — 입력언어를 일본어 직접입력으로 설정합니다.

IME 가 IME2002 의 일본어 입력기일 경우만 적용됩니다.
IME 가 IME2007 과 2010 일 경우는 "alpha"로 적용됩니다.

**Remark**

- textareaimemode 속성값을 설정하지 않으면 "none" 으로 적용됩니다.

- Cell 이 포커스를 받아 편집창이 활성화 될 때 IME가 재설정됩니다.

- 일부 환경에서만 지원하는 속성이므로 상단의 지원환경을 확인하시기 바랍니다.
   > Windows NRE, Android NRE에서만 지원하는 속성입니다.
   > macOS NRE, iOS/iPadOS NRE, WRE에서는 지원하지 않는 속성입니다.


---

### textareainputfilter

> Components > Component > Grid > Objects > GridCellControl > Property > textareainputfilter

**Description**

Cell 의 edittype 속성값이 "textarea" 일 경우 Cell 편집 시 입력을 제한 시킬 문자를 타입별로 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.textareainputfilter[= strInputfilter]
```

**Setting Syntax**

```javascript
strInputfilter ::= 'none' | <filter>

<filter> ::= <inputfilter> | <inputfilter> ',' <filter>
<inputfilter> ::= 'alpha' | 'digit' | 'comma' | 'dot' | 'sign' | 'space' | 'symbol'

* 각 타입값을 콤마(",")로 구분하여 중복 설정할 수 있습니다.
```
```javascript
this.Grid00.setCellProperty( "body", 0, "textareainputfilter", "dot" );
this.Grid00.setCellProperty( "body", 0, "textareainputfilter", "dot,comma" );
this.Grid00.setCellProperty( "body", 0, "textareainputfilter", "dot,comma,sign" );
```
- **`"none"`** — 입력 제한 없이 모든 문자를 입력할 수 있습니다.
- **`"alpha"`** — 소문자 "a~z"와 대문자 "A~Z"를 입력 할 수 없습니다.
- **`"digit"`** — 숫자 "0~9"를 입력 할 수 없습니다.
- **`"comma"`** — 콤마(",")를 입력 할 수 없습니다.
- **`"dot"`** — 마침표(".")를 입력 할 수 없습니다.
- **`"sign"`** — 플러스("+")와 마이너스("-") 문자를 입력할 수 없습니다.
- **`"space"`** — 공백문자(" ")를 입력 할 수 없습니다.
- **`"symbol"`** — !,",#,$,%,@,&,',*,/,\,:,;,^,`,{,},[,],(,),|,~,=,_,<,>,? 문자를 입력할 수 없습니다.

키보드로 입력할 수 있는 특수문자 중 "comma", "dot", "sign", "space" 타입값의 문자만 입력할 수 있고, 나머지 문자는 입력 할 수 없습니다.

**Remark**

- textareainputfilter 속성값을 설정하지 않으면 "none"으로 적용됩니다.

- textareainputfilter 속성은 사용자가 직접 입력할 때만 적용됩니다.
  스크립트로 Cell 값을 설정할 때는 적용되지 않습니다.

- 일본어 입력 시 글자 조합이 완료된 후 textareainputfilter 속성값이 적용됩니다.


---

### textareainputmode

> Components > Component > Grid > Objects > GridCellControl > Property > textareainputmode

**Description**

Cell 의 edittype 속성값이 "textarea" 일 경우 Cell 에 입력되는 영문자를 대문자 또는 소문자로 변환할지 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.textareainputmode[= enumInputmode]
```

**Setting Syntax**

```javascript
enumInputmode ::= 'normal' | 'upper' | 'lower'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "textareainputmode", "upper" );
```
- **`"normal"`** — 입력되는 영문자의 대/소문자를 변경하지 않습니다.
- **`"upper"`** — 입력되는 영문자를 모두 대문자로 변경합니다.
- **`"lower"`** — 입력되는 영문자를 모두 소문자로 변경합니다.

**Remark**

- textareainputmode 속성값을 설정하지 않으면 "normal"로 적용됩니다.

- textareainputmode 속성값을 변경하면 Cell 에 바인딩 된 DataSet 의 데이터가 변경될 수 있습니다.


---

### textareainputtype

> Components > Component > Grid > Objects > GridCellControl > Property > textareainputtype

**Description**

Cell 의 edittype 속성값이 "textarea" 일 경우 Cell 에 입력을 허용할 문자를 타입별로 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.textareainputtype[= strInputtype]
```

**Setting Syntax**

```javascript
strInputtype ::= 'normal' | <type>

<type> ::= <inputtype> | <inputtype> ',' <type>
<inputtype> ::= 'alpha' | 'english' | 'digit' | 'number' | 'numberandenglish' | 'comma' | 'dot' | 'sign' | 'space' | 'symbol' | 'half' | 'full'

* 각 타입값을 콤마(",")로 구분하여 중복 설정할 수 있습니다.
```
```javascript
this.Grid00.setCellProperty( "body", 0, "textareainputtype", "english" );                         // 영문자만 입력허용
this.Grid00.setCellProperty( "body", 0, "textareainputtype", "english,number" );             // 영문자와 숫자만 입력허용
this.Grid00.setCellProperty( "body", 0, "textareainputtype", "english,number,space" );   // 영문자, 숫자, 공백만 입력허용
```
- **`"normal"`** — 모든 문자의 입력을 허용합니다.
- **`"alpha"`** — 소문자 "a~z"와 대문자 "A~Z"를 입력 할 수 있습니다.
- **`"english"`** — 소문자 "a~z"와 대문자 "A~Z"를 입력 할 수 있습니다.
- **`"digit"`** — 숫자 "0~9"를 입력 할 수 있습니다.
- **`"number"`** — 숫자 "0~9"와 마침표("."), 콤마(","), 마이너스("-") 문자를 입력 할 수 있습니다.
- **`"numberandenglish"`** — 소문자 "a~z", 대문자 "A~Z", 숫자 "0~9", 마침표("."), 콤마(","), 마이너스("-") 문자를 입력 할 수 있습니다.

"number"와 "english"를 함께 설정한 것과 같습니다.
- **`"comma"`** — 콤마(",")를 입력 할 수 있습니다.
- **`"dot"`** — 마침표(".")를 입력 할 수 있습니다.
- **`"sign"`** — 플러스("+")와 마이너스("-") 문자를 입력할 수 있습니다.
- **`"space"`** — 공백문자(" ")를 입력 할 수 있습니다.
- **`"symbol"`** — !,",#,$,%,@,&,',*,/,\,:,;,^,`,{,},[,],(,),|,~,=,_,<,>,? 문자를 입력할 수 있습니다.

키보드로 입력할 수 있는 특수문자 중 "comma", "dot", "sign", "space" 타입값의 문자는 입력할 수 없고, 나머지 문자만 입력 할 수 있습니다.
- **`"half"`** — 반각문자를 입력 할 수 있습니다.
- **`"full"`** — 전각문자를 입력 할 수 있습니다.

**Remark**

- textareainputtype 속성값을 설정하지 않으면 "normal" 로 적용됩니다.

- textareainputtype 속성은 사용자가 직접 입력할 때만 적용됩니다.
  스크립트로 Cell 값을 설정할 때는 적용되지 않습니다.

- 설정된 타입값에 해당하는 문자만 입력을 허용하며 설정되지 않은 타입값의 문자는 입력할 수 없습니다.

- textareainputtype 속성값에 "full" 값이 속해 있지 않으면 반각 문자만 입력할 수 있습니다.

- 입력을 제한하는 속성은 textareainputmode > textareainputfilter > textareainputtype 순으로 적용됩니다.


◆ Mobile 제약

- inputtype 속성을 "digit", "number", "tel", "dot" 과 같이 숫자만 입력이 가능하도록 설정하면,
   Android 에서는 tel 타입의 키패드가 기본으로 적용되고, iOS/iPadOS 에서는 number 타입의 키패드가 기본으로 적용됩니다.
   단 iOS/iPadOS 에서는 value 에 숫자가 아닌 문자가 저장되어 있으면 text 타입의 키패드가 기본으로 적용됩니다.

- inputtype 속성을 "numberandenglish", "english" 와 같이 문자입력이 가능하도록 설정하면,
   Android, iOS/iPadOS 모두 text 타입의 키패드가 기본으로 적용됩니다.


---

### textareamaxlength

> Components > Component > Grid > Objects > GridCellControl > Property > textareamaxlength

**Description**

Cell 의 edittype 속성값이 "textarea" 일 경우 Cell 에 입력할 수 있는 문자열의 최대길이를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.textareamaxlength[= nLimit]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "textareamaxlength", "10" );
```
- **`nLimit`** — 입력할 수 있는 문자열의 최대길이를 숫자로 설정합니다.

0 설정 시 바인딩된 DataSet 의 Column 크기로 제한됩니다.
-1 설정 시 입력할 수 있는 최대길이를 제한하지 않습니다.

**Remark**

- textareamaxlength 속성값을 설정하지 않으면 -1 로 적용됩니다.

- 영문, 숫자, 기호, 다국어, 개행문자(CR, LF) 모두 한 문자가 1 로 계산됩니다.

- Grid 의 Body 영역에 속한 Cell 만 적용되는 속성입니다.

- 문자열의 길이가 textareamaxlength 속성값과 같아지면 입력이 제한됩니다.

- 스크립트로 value 값 설정 시 textareamaxlength 속성은 적용되지 않습니다.


---

### textareascrollbarsize

> Components > Component > Grid > Objects > GridCellControl > Property > textareascrollbarsize

**Description**

Cell 이 TextArea 형식일 때 표시되는 스크롤바의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.textareascrollbarsize[= nSize]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "textareascrollbarsize", "30" );
```
- **`nSize`** — 스크롤바의 크기를 pixel 단위의 숫자로 설정합니다.

**Remark**

- textareascrollbarsize 속성값을 설정하지 않으면 Grid 의 celltextareascrollbarsize 속성값이 적용됩니다.

- textareascrollbarsize 속성값은 수직스크롤바의 너비와 수평스크롤바의 높이에 동일하게 적용됩니다.

- textareascrollbarsize 속성값을 변경하면 스크롤바 내부버튼의 높이와 너비가 같이 변경됩니다.


---

### textareascrollbartype

> Components > Component > Grid > Objects > GridCellControl > Property > textareascrollbartype

**Description**

Cell 의 edittype 속성값이 "textarea" 일 경우 편집창에 스크롤바가 표시되는 형식을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.textareascrollbartype[= strBartype]
```

**Setting Syntax**

```javascript
strBartype ::= <scrolltype> | <pairtype>

<scrolltype> ::= <desktype> | <mobiletype>
<pairtype> ::= <desktype> ' ' <desktype> | <mobiletype> ' ' <mobiletype>

<desktype> ::= 'default' | 'none' | 'fixed' | 'auto'
<mobiletype> ::= 'default' | 'none' | 'indicator' | 'autoindicator'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "textareascrollbartype", "none" );
this.Grid00.setCellProperty( "body", 0, "textareascrollbartype", "default autoindicator" );
this.Grid00.setCellProperty( "body", 0, "textareascrollbartype", "auto fixed" );
this.Grid00.setCellProperty( "body", 0, "textareascrollbartype", "indicator none" );
```
- **`<scrolltype>`** — textareascrollbartype 속성값을 하나만 설정하면 가로/세로 스크롤바에 동일한 값이 적용됩니다.
- **`<pairtype>`** — textareascrollbartype 속성값을 빈칸으로 구분한 두개의 값으로 설정합니다.

첫번째 값은 가로스크롤바에 적용되고, 두번째 값은 세로스크롤바에 적용됩니다.
- **`"default"`** — 데스크탑 환경인 경우 "auto" 로 적용됩니다.

모바일 환경인 경우 "autoindicator" 로 적용됩니다.
- **`"none"`** — 스크롤바 또는 인디케이터바를 표시하지 않습니다.
- **`"fixed"`** — 스크롤바를 항상 표시합니다.
- **`"auto"`** — 스크롤바가 필요할 때 자동으로 표시합니다.
- **`"indicator"`** — 스크롤 인디케이터바가 필요할 때 자동으로 표시합니다.
- **`"autoindicator"`** — 스크롤이 동작될 때만 인디케이터바가 표시되었다가 스크롤이 종료되면 사라집니다.

**Remark**

- textareascrollbartype 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- Cell 에 편집모드용 컨트롤이 표시되어 있을 때 적용되는 속성입니다.
   displaytype 속성값을 "textareacontrol" 로 설정한 것만으로 스크롤바가 표시되지 않습니다.

- 데스크탑에 적용되는 값과 모바일에 적용되는 값을 함께 설정할 수 있지만 권장하지 않습니다.
   ex) this.Grid00.setCellProperty( "body", 0, "textareascrollbartype", "fixed autoindicator" );


---

### textareascrolltype

> Components > Component > Grid > Objects > GridCellControl > Property > textareascrolltype

**Description**

Cell 의 edittype 속성값이 "textarea" 일 경우 편집창에서 사용되는 스크롤의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.textareascrolltype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'both' | 'vertical' | 'horizontal'
```
```javascript
this.Grid00.setCellProperty( "body", 0, "textareascrolltype", "none" );
```
- **`"none"`** — Cell 에서 수평/수직 스크롤을 사용하지 않습니다.
- **`"both"`** — Cell 에서 수평/수직 스크롤을 모두 사용합니다.
- **`"vertical"`** — Cell 에서 수직 스크롤만 사용합니다.

수평 스크롤은 사용하지 않습니다.
- **`"horizontal"`** — Cell 에서 수평 스크롤만 사용합니다.

수직 스크롤은 사용하지 않습니다.

**Remark**

- textareascrolltype 속성값을 설정하지 않으면 "both" 로 적용됩니다.

- Cell 에서 사용되는 스크롤에 대한 자세한 설정은 textareascrollbartype 속성을 사용하여야 합니다.

**See Also**

GridCellControl.scrollbartype


---

### tooltiptext

> Components > Component > Grid > Objects > GridCellControl > Property > tooltiptext

**Description**

Cell 영역에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.tooltiptext[= strToolTipText]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty( "body", 0, "tooltiptext", "ToolTip" );
this.Grid00.setCellProperty( "body", 0, "tooltiptext", "" );          // 풍선 도움말이 표시되지 않습니다.
this.Grid00.setCellProperty( "body", 0, "tooltiptext", null );        // 상위영역의 풍선 도움말이 표시됩니다.
```
- **`strToolTipText`** — 풍선도움말에 표시할 텍스트를 설정합니다.

빈문자열(EmptyString) 설정 시 풍선도움말이 표시되지 않습니다.
null 또는 undefined 설정 시 상위영역(Band)의 풍선도움말이 표시됩니다.

**Remark**

- tooltiptext 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- tooltiptext 속성이 undefined 로 적용되면 상위 영역(Band)의 tooltiptext 속성값이 적용됩니다.
   상위 영역의 tooltiptext 속성값이 undefined 일 경우는 다시 상위 영역의 tooltiptext 속성값이 적용됩니다. 

- 마우스 포인터가 Grid 의 GridCellControl 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.


◆ Desktop WRE 제약

- 풍선도움말은 브라우저의 기능을 활용하므로 브라우저 사양에 따라 스타일에 차이가 있을 수 있습니다.
   NRE는 Chrome 의 스타일과 동일하게 적용됩니다.


---

### tooltiptype

> Components > Component > Grid > Objects > GridCellControl > Property > tooltiptype

**Description**

Cell 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.tooltiptype[= enumTooltipType]
```

**Setting Syntax**

```javascript
enumTooltipType ::= 'default' | 'hover' | 'inplace' | 'default,mouseleave' | 'hover,mouseleave' | 'inplace,mouseleave'
```
```javascript
this.Grid00.setCellProperty("body", 0, "tooltiptype", "hover')";
```
- **`"default"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 Cell 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"hover"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 Cell 영역내에 멈춰서 일정시간이 경과하면 풍선도움말이 사라집니다.
Cell 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경되거나 사라진 풍선도움말이 다시 표시됩니다.
- **`"inplace"`** — Cell 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 Cell 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"default,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 Cell 영역에 있으면 풍선도움말이 사라지지 않습니다.
- **`"hover,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 Cell 영역에 있으면 풍선도움말이 사라지지 않습니다.
Cell 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경됩니다.
- **`"inplace,mouseleave"`** — Cell 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 Cell 영역에 있으면 풍선도움말이 사라지지 않습니다.

**Remark**

- tooltiptype 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- 마우스 포인터가 Cell 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.

- 풍선도움말이 표시된 상태에서 tooltiptext 속성값을 변경하면 tooltiptype 속성값에 관계없이 풍선도움말이 사라집니다.

- 표시되었다가 사라진 풍선도움말은 마우스 포인터가 Cell 영역을 나갔다가 들어오면 다시 표시됩니다.

- 마우스 포인터가 Cell 영역에서 벗어나면 풍선도움말이 사라집니다.

- 풍선도움말의 크기는 풍선도움말에 표시되는 텍스트의 길이와 크기에 맞춰 자동으로 조정됩니다.

- 풍선도움말에 표시되는 텍스트의 글꼴과 크기는 변경하실 수 없습니다.


---

### treecheck

> Components > Component > Grid > Objects > GridCellControl > Property > treecheck

**Description**

Cell 이 트리 형식일 때 체크박스의 값으로 사용될 Column을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.treecheck[= strColID]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty("body", 0, "treecheck", "bind:Column0')";
```
- **`strColID`** — Grid 의 binddataset 속성에 설정된 DataSet 의 Column 중 트리 Cell 의 체크박스 값으로 사용할 Column의 ID를 문자열로 설정합니다.

스크립트로 지정 시 "bind:컬럼ID" 의 형태로 설정합니다.

**Remark**

- Grid 의 treeusecheckbox 속성값이 "true"인 경우에 적용되는 속성입니다.

- Cell 의 edittype 속성값이 "tree" 이고, displaytype 속성값이 "treeitemcontrol" 일 때만 체크박스값을 변경할 수 있습니다.

	
		true / false
		Column type
		Row data
	

	
		false
		STRING
		"0", "-0", "false", "NaN", 빈 값, Null
	

	
		INT, FLOAT, BIGDECIMAL
		0, -0, 빈 값, Null
	

	
		true
		 
		false로 처리되는 값 이외의 모든 값


---

### treelevel

> Components > Component > Grid > Objects > GridCellControl > Property > treelevel

**Description**

Cell 이 트리 형식일 때 트리의 레벨값으로 사용될 Column을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.treelevel[= strColID]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty("body", 0, "treelevel", "bind:Column0')";
```
- **`strColID`** — Grid 의 binddataset 속성에 설정된 DataSet 의 Column 중 트리 Cell 의 레벨값으로 사용할 Column의 ID를 문자열로 설정합니다.

스크립트로 지정 시 "bind:컬럼ID" 의 형태로 설정합니다.

**Remark**

- treelevel 속성값을 설정하지 않을 경우에는 트리 형식으로 동작하지 않습니다.

- treelevel 값이 "1" 이상의 숫자에서 시작할 경우에는 treestartlevel 속성에 시작할 레벨값을 설정할 수 있습니다.


---

### treestartlevel

> Components > Component > Grid > Objects > GridCellControl > Property > treestartlevel

**Description**

Cell 이 트리 형식일 때 트리 레벨의 시작값을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.treestartlevel[= nLevel]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty("body", 0, "treestartlevel", "1')";
```
- **`nLevel`** — 트리 레벨의 시작값을 숫자로 설정합니다.

**Remark**

- treestartlevel 속성값을 설정하지 않으면 "0"으로 적용됩니다.

- 트리 레벨에 따라 텍스트가 표시되는 위치는 treestartlevel 속성값과 treelevel 속성값이 차이로 결정됩니다.
  따라서 treestartlevel 속성값을 지정하지 않고, "1" 이상의 숫자에서 레벨이 시작되면 모든 트리의 텍스트가 일정 비율 안쪽에 표시됩니다.


---

### treestate

> Components > Component > Grid > Objects > GridCellControl > Property > treestate

**Description**

Cell 이 트리 형식일 때 트리의 상태값으로 사용될 Column을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.treestate[= strColID]
```

**Setting Syntax**

```javascript
this.Grid00.setCellProperty("body", 0, "treestate", "1')";
```
- **`strColID`** — Grid 의 binddataset 속성에 설정된 DataSet 의 Column 중 트리 Cell 의 상태값으로 사용할 Column의 ID를 문자열로 설정합니다.
스크립트로 지정 시 "bind:컬럼ID" 의 형태로 설정합니다.

트리가 Collapse 상태이면 "0" 값으로 처리됩니다.
트리가 Expand 상태이면 "1" 값으로 처리됩니다.
트리가 단말(Leaf) 상태이면 "3" 값으로 처리됩니다.

**Remark**

- 사용자가 마우스 선택이나 메소드로 트리 상태를 변경하는 경우에도, 바인딩된 DataSet 에 변경된 값이 반영되지 않습니다.
  그러나, treestate 속성에 바인딩된 DataSet 의 Column 값을 직접 변경하는 경우에는 Grid 에 적용됩니다.

- treelevel 속성값을 설정하지 않을 경우에는 트리 형식으로 동작하지 않습니다.


---

### word-spacing

> Components > Component > Grid > Objects > GridCellControl > Property > word-spacing

**Description**

Cell 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다.

**Syntax**

```javascript
GridCellControl.wordSpacing[= strwordspacing]
```

**Setting Syntax**

```javascript
strWordSpacing ::= 'normal' | <nVal>'px'
```
```javascript
* XCSS
word-spacing : 30px;

* Script ( normal property )
this.Grid00.setCellProperty( "body", 0, "wordSpacing", "30px" );
```
- **`"normal"`** — 텍스트의 단어 사이 간격을 설정하지 않습니다.

현재 font 에 맞는 기본형태로 텍스트가 표시됩니다.
- **`<nVal>`** — pixel 단위로 텍스트의 단어 사이 간격을 설정합니다.

**Remark**

- word-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "wordSpacing"을 사용해야 합니다.


---

## Components > Component > Grid > GridColumnControl

### GridColumnControl

> Components > Component > Grid > Objects > GridColumnControl

**Description**

Grid 내 각 Cell Width 값을 지정하며, Left,Right Band 지정 여부와 Scroll Fix 여부를 지정하는 오브젝트입니다.

**Remark**

- Format의 Columns 내에 List로 존재합니다.

**Property**

| Name | Description |
| --- | --- |
| band | Grid 에서 Column 이 소속 될 밴드영역을 설정하는 속성입니다. |
| size | Column 의 너비를 설정하는 속성입니다. |


---

### 속성 (Properties)

### band

> Components > Component > Grid > Objects > GridColumnControl > Property > band

**Description**

Grid 에서 Column 이 소속 될 밴드영역을 설정하는 속성입니다.

**Syntax**

```javascript
GridColumnControl.band
```

**Setting Syntax**

```javascript
band ::= 'left' | 'body' | 'right'
```
```javascript
Grid.setFormatColProperty( 0, "band", "left" ) ;
Grid.getFormatColProperty( 0, "band" ) ;
```
- **`"left"`** — 해당 Column 이 Left 밴드에 속하게 됩니다.
- **`"body"`** — 해당 Column 이 Body 밴드에 속하게 됩니다.
- **`"right"`** — 해당 Column 이 Right 밴드에 속하게 됩니다.

**Remark**

- band 속성값을 설정하지 않으면 "body" 로 적용됩니다.

- Column 의 band 속성값을 설정하려면 setFormatColProperty() 메소드를 사용하여야 합니다.
  Column 의 band 속성값을 가져오려면 getFormatColProperty() 메소드를 사용하여야 합니다.

- Left/Right 밴드는 기본적으로 각각 Grid의 왼쪽/오른쪽 고정영역에 표시되며 스크롤 시 고정되어 움직이지 않습니다.

**See Also**

Grid.getFormatColPropertyGrid.setFormatColProperty


---

### size

> Components > Component > Grid > Objects > GridColumnControl > Property > size

**Description**

Column 의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
GridColumnControl.size
```

**Setting Syntax**

```javascript
this.Grid00.setFormatColProperty ( 1, "size", 50 );       // 화면에 표시되는 포맷에 적용
this.Grid00.getRealColSize ( 1 );                              // 화면에 표시되는 포맷의 값
this.Grid00.getFormatColProperty ( 1, "size" );           // 디자인시 설정된 값
this.Grid00.getFormatColSize ( 1 );                           // 디자인시 설정된 값
```
- **`size`** — Column 의 너비를 pixel 단위의 숫자로 설정합니다.

디자인 시 정의된 포맷의 속성값은 변경되지 않고, 화면에 표시되는 포맷의 속성값만 변경됩니다.

**Remark**

- Grid 의 포맷을 동적으로 변경하여도 디자인 시 설정된 속성값은 변경되지 않고, 화면에 표시되는 포맷만 변경됩니다.

- 화면에 표시되는 Column 의 size 속성값을 설정하려면 setFormatColProperty() 메소드를 사용하여야 합니다.

- 화면에 표시되는 Column 의 size 속성값을 가져오려면 getRealColSize() 메소드를 사용하여야 합니다.

- 디자인 시 정의된 Column 의 size 속성값을 가져오려면 getFormatColProperty(), getFormatColSize() 메소드를 사용하여야 합니다.

- 디자인 시 정의된 포맷 또는 화면에 표시되는 포맷 정보를 가져오려면 getCurFormatString() 메소드를 사용하여야 합니다.

**See Also**

Grid.getCurFormatStringGrid.getFormatColPropertyGrid.getFormatColSizeGrid.getRealColSizeGrid.setFormatColProperty


---

## Components > Component > Grid > GridRowControl

### GridRowControl

> Components > Component > Grid > Objects > GridRowControl

**Description**

Grid내 각 Cell들의 Height를 지정하며, Head,Body,Summary Band 지정여부와 Scroll Fix 여부를 지정하는 Object 입니다.

**Property**

| Name | Description |
| --- | --- |
| band | Grid 에서 Row 가 소속된 밴드명을 갖는 읽기전용 속성입니다. |
| size | Row 의 높이를 설정하는 속성입니다. |

**Control**

| Name | TypeName |
| --- | --- |
| cell | nexacro.GridCellControl |


---

### 속성 (Properties)

### band

> Components > Component > Grid > Objects > GridRowControl > Property > band

**Description**

Grid 에서 Row 가 소속된 밴드명을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GridRowControl.band
```

**Setting Syntax**

```javascript
var strBand = this.Grid00.getFormatRowProperty( 1, "band" );
```

**Remark**

- Row 의 band 속성에 접근하려면 getFormatRowProperty() 메소드를 사용하여야 합니다.

- Head/Summary 밴드는 기본적으로 각각 Grid의 상단/하단 고정영역에 표시되며 스크롤 시 고정되어 움직이지 않습니다.

**See Also**

Grid.getFormatRowProperty


---

### size

> Components > Component > Grid > Objects > GridRowControl > Property > size

**Description**

Row 의 높이를 설정하는 속성입니다.

**Syntax**

```javascript
GridRowControl.size
```

**Setting Syntax**

```javascript
this.Grid00.setFormatRowProperty ( 1, "size", 50 );        // 화면에 표시되는 포맷에 적용
this.Grid00.getRealRowSize ( 1 );                                // 화면에 표시되는 포맷의 값
this.Grid00.getFormatRowProperty ( 1, "size";)             // 디자인시 설정된 값
this.Grid00.getFormatRowSize ( 1 );                             // 디자인시 설정된 값
```
- **`nSize`** — Row 의 높이를 pixel 단위의 숫자로 설정합니다.

디자인 시 정의된 포맷의 속성값은 변경되지 않고, 화면에 표시되는 포맷의 속성값만 변경됩니다.

**Remark**

- Grid 의 포맷을 동적으로 변경하여도 디자인 시 설정된 속성값은 변경되지 않고, 화면에 표시되는 포맷만 변경됩니다.

- 화면에 표시되는 Row 의 size 속성값을 설정하려면 setFormatRowProperty() 메소드를 사용하여야 합니다.

- 화면에 표시되는 Row 의 size 속성값을 가져오려면 getRealRowSize() 메소드를 사용하여야 합니다.

- 디자인 시 정의된 Row 의 size 속성값을 가져오려면 getFormatRowProperty(), getFormatRowSize() 메소드를 사용하여야 합니다.

- 디자인 시 정의된 포맷 또는 화면에 표시되는 포맷 정보를 가져오려면 getCurFormatString() 메소드를 사용하여야 합니다.

**See Also**

Grid.getCurFormatStringGrid.getFormatRowPropertyGrid.getFormatRowSizeGrid.getRealRowSizeGrid.setFormatRowProperty


---

## Components > Component > Grid > GridSelectionControl

### GridSelectionControl

> Components > Component > Grid > Objects > GridSelectionControl

**Description**

Grid 에서 선택된 Cell 영역에 적용되는 오브젝트입니다.

**Remark**

- Grid 의 showselection 속성값이 true 인 경우만 화면에 적용됩니다.

- GridSelectonControl 의 속성값은 XCSS 에서만 정의할 수 있습니다.

- body 밴드에만 적용되며 head, summary 밴드에는 적용되지 않습니다.

**Property**

| Name | Description |
| --- | --- |
| border-radius | GridSelectionControl 의 모서리 모양을 설정하는 속성입니다. |
| -nexa-border | GridSelectionControl 의 테두리를 설정하는 속성입니다. |
| opacity | GridSelectionControl 영역의 투명도를 설정하는 속성입니다. |


---

### 속성 (Properties)

### -nexa-border

> Components > Component > Grid > Objects > GridSelectionControl > Property > -nexa-border

**Description**

GridSelectionControl 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
GridSelectionControl.-nexa-border
```

**Setting Syntax**

```javascript
-nexa-border ::= <line-width> <line-style> <color> [,<line-width> <line-style> <color>]{3}

<line-width> ::= 'thin' | 'medium' | 'thick' | <nWidth> 'px'
<line-style> ::= 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'
<color> ::= <NamedColor> | <NumericColor>

1회 입력 : top/right/bottom/left 에 모두 적용됩니다.
2회 입력 : top/bottom, right/left 에 첫번째 값부터 각각 적용됩니다.
3회 입력 : top, right/left, bottom 에 첫번째 값부터 각각 적용됩니다.
4회 입력 : top, right, bottom, left 에 첫번째 값부터 각각 적용됩니다.

* 2회~4회 입력은 border-radius 속성값이 설정되지 않은 경우만 적용됩니다.
```
```javascript
* XCSS
-nexa-border : 1px solid #999999;
-nexa-border : 1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999;
```
- **`<line-width>`** — 테두리 선의 두께를 설정합니다.

"thin" 설정 시 1 pixel 두께로 테두리가 표시됩니다.
"medium" 설정 시 3 pixel 두께로 테두리가 표시됩니다.
"thick" 설정 시  5 pixel 두께로 테두리가 표시됩니다.

<nWidth> 설정 시 <nWidth> pixel 두께로 테두리가 표시됩니다.
- **`<nWidth>`** — 테두리 선의 두께를 pixel 단위로 설정합니다.
"px" 단위는 생략할 수 없습니다.
- **`<line-style>`** — 테두리 선의 스타일을 설정합니다.

"none" 설정 시 테두리가 표시되지 않습니다.
"hidden" 설정 시 테두리가 표시되지 않습니다.
"dotted" 설정 시 테두리가 점선으로 표시됩니다.
"dashed" 설정 시 테두리가 긴 점선으로 표시됩니다.
"solid" 설정 시 테두리가 실선으로 표시됩니다.
"double" 설정 시 테두리가 두줄로 표시됩니다.
"groove" 설정 시 테두리가 들어간 것처럼 보이게 입체적으로 표시됩니다.
"ridge" 설정 시 테두리가 올라온 것처럼 보이게 입체적으로 표시됩니다.
"inset" 설정 시 컴포넌트가 들어간 것처럼 보이게 테두리가 입체적으로 표시됩니다.
"outset" 설정 시 컴포넌트가 올라온 것처럼 보이게 테두리가 입체적으로 표시됩니다.
- **`<color>`** — 테두리 색상을 색상이름 또는 색상코드로 설정합니다.
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- -nexa-border 속성값을 설정하지 않으면 undefined 가 설정되고, "medium none #999999" 로 동작합니다.

- <line-style> 이 "double" 일 때 두 줄을 다른 색으로 설정할 수 없습니다.
   <color> 에 설정된 색이 두 줄에 모두 적용됩니다.


◆ Nexacro Runtime Environment 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 top > right > bottom > left 순으로 겹쳐서 표시됩니다.

- <line-style> 파라미터에 "double","groove","ridge","inset","outset" 값을 설정해도 적용되지 않습니다.

- <line-width> 파라미터에 "thin","medium","thick" 값을 설정해도 적용되지 않습니다.


◆ Web Runtime Environment 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 웹브라우저에 따라 테두리가 겹쳐지는 순서가 다르게 처리될 수 있습니다.

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있으면 
   두께는 각 테두리 별로 따로 적용되고, 색상은 top 에 설정된 색이 적용됩니다.

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있어도
   일부 브라우저는 각 테두리의 색상이나 두께가 각각 적용됩니다.


---

### border-radius

> Components > Component > Grid > Objects > GridSelectionControl > Property > border-radius

**Description**

GridSelectionControl 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
GridSelectionControl.border-radius
```

**Setting Syntax**

```javascript
border-radius ::= <horizontal-radius>{4} ['/' <vertical-radius>{4}]
```
```javascript
* XCSS
border-radius : 10px;
border-radius : 5px 6px 10px / 5px 10px;
```
- **`<horizontal-radius>`** — 모서리를 둥글게 표시하기 위한 가로크기를 설정합니다.

pixel 단위로 입력하며 스페이스를 구분자로 4개값까지 설정할 수 있습니다.

값을 1회 입력 시 top-left/top-right/bottom-right/bottom-left 모서리의 가로크기로 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top-left/bottom-right, top-right/bottom-left 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top-left, top-right/bottom-left, bottom-right 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top-left, top-right, bottom-right, bottom-left 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
- **`<vertical-radius>`** — 모서리를 둥글게 표시하기 위한 세로크기를 설정합니다.

pixel 단위로 입력하며 스페이스를 구분자로 4개값까지 설정할 수 있습니다.

값을 1회 입력 시 top-left/top-right/bottom-right/bottom-left 모서리의 세로크기로 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top-left/bottom-right, top-right/bottom-left 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top-left, top-right/bottom-left, bottom-right 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top-left, top-right, bottom-right, bottom-left 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.

**Remark**

- border-radius 속성값을 설정하지 않으면 undefined 가 설정되고, "0px" 로 동작합니다. 

- <horizontal-radius>와 <vertical-radius>는 "/" 문자로 구분하여 입력합니다.


◆ NRE 제약

- border-radius 속성을 설정하면 모든 테두리가 같은 색으로 적용됩니다.
   -nexa-border 속성에서 top 에 적용된 색이 모든 테두리에 적용됩니다.


---

### opacity

> Components > Component > Grid > Objects > GridSelectionControl > Property > opacity

**Description**

GridSelectionControl 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
GridSelectionControl.opacity
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8 ;
opacity : 80%;
```
- **`opacity`** — 0.0 ~ 1.0 사이의 값 또는 0.0% ~ 100.0% 사이의 값을 지정합니다.
0(또는 0%)을 설정하면 완전 투명, 1(또는 100%)을 설정하면 완전 불투명으로 처리됩니다.
1 이상의 값은 1로, 0 이하의 값은 0으로 처리됩니다. 마찬가지로 100% 이상의 값은 100%로, 0% 이하의 값은 0%로 처리됩니다.

XCSS는 숫자 또는 퍼센트 값으로만 설정할 수 있습니다.

**Remark**

- opacity 속성값을 설정하지 않으면 undefined 가 설정되고, 1 로 동작합니다.

- Div 와 같이 자식 컴포넌트를 가질 수 있는 컴포넌트에 opacity 속성을 적용하면 자식 컴포넌트도 함께 적용됩니다.

- 부모와 자식 컴포넌트에 각각 opacity 속성이 설정되어 있으면 자식 컴포넌트의 투명도는 부모의 투명도에 추가적으로 적용됩니다.
   예를 들어 부모의 opacity가 0.5 이고 자식의 opacity가 0.4 이면 결과적으로 자식 컴포넌트는 0.2 의 투명도가 적용됩니다.


---

## Components > Component > Grid > GridCellControl > Objects

### Objects

> Components > Component > Grid > Objects > GridCellControl > Objects

**Description**

Cell 을 구성하는 하위 오브젝트입니다.


---

## Components > Component > Grid > GridCellControl > CellSubCellControl

### CellSubCellControl

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl

**Description**

SubCellControl 은 여러개의 Cell 이 합쳐져서 구성되는 컨트롤입니다.

**Remark**

- CellSubCellControl 은 Grid Contents Editor 에서 "Merge Cells(Having child cells)" 메뉴로 Cell 을 병합하여 생성할 수 있습니다.
   병합된 SubCell 은 CellSubCellControl 에 속한 상태로 각 Cell 영역과 속성을 따로 갖습니다.

- Grid Contents Editor 에서 "Merge Cells(A big cell)" 메뉴를 사용하여 Cell 을 병합할 경우 일반 Cell 로 처리됩니다.
   병합된 MergeCell 은 하나의 Cell 이 되며 영역과 속성을 하나만 갖습니다.

- CellSubCellControl 에서 내부의 Cell 속성은 setSubCellProperty() 메소드로 설정할 수 있습니다.
   내부 Cell 의 속성값을 가져올 때는 getSubCellProperty() 메소드를 사용합니다.
   내부 Cell 은 Cell 마다 내부 인덱스를 가지고 있습니다.

- CellSubCellControl 에서 내부 Cell 은 GridCellControl 과 동일한 속성을 갖지만, CellSubCellControl 에 속해 있을 때는 적용되지 않는 속성이 있습니다.
   CellSubCellControl 에 속해 있을 때 적용되지 않는 속성을 유지하는 이유는
   Grid 의 splitContentsCell() 메소드를 사용하여 CellSubCellControl 을 일반 Cell 로 분할하면 모든 속성이 적용되기 때문입니다.

- Cell 의 일부 속성은 DataSet 의 Column 을 바인드 하거나 Expression 수식을 설정할 수 있습니다.
   Expression 수식에는 바인드 된 DataSet 의 메소드, Column ID, 접근가능한 영역에 정의된 함수 등을 사용할 수 있습니다.
  
- Expression 수식에 아래의 예약어를 사용하면 수식 실행 시 예약어에 상응하는 값으로 대체됩니다.
  > this : 수식이 정의된 Cell 오브젝트. ( Form 의 지시어가 아닙니다.)
  > comp : Cell 을 갖는 Grid 컴포넌트.
  > dataset : Grid 에 바인드된 DataSet 컴포넌트.
  > currow : 수식이 계산하고 있는 행(Row) 의 인덱스.
  > [Column ID] : 수식이 계산하고 있는 행(Row) 의 DataSet Column 값.
  > Grid 에 바인드 된 DataSet 의 속성과 메소드.
      ex) "dataset.rowcount", "dataset.colcount", "dataset.rowposition", "dataset.getCount()" 등

**Property**

| Name | Description |
| --- | --- |
| accessibilityaction | CellSubCellControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다. |
| accessibilitydesclevel | CellSubCellControl 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다. |
| accessibilitydescription | CellSubCellControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다. |
| accessibilityenable | CellSubCellControl 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다. |
| accessibilitylabel | SubCell에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다. |
| accessibilityrole | CellSubCellControl에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다. |
| autosizecol | Column 의 너비가 자동조절 되는 방식을 설정하는 속성입니다. |
| autosizerow | Row 의 높이가 자동조절 되는 방식을 설정하는 속성입니다. |
| background | SubCell 의 배경 영역을 설정하는 속성입니다. |
| border-radius | SubCell 의 모서리 모양을 설정하는 속성입니다. |
| calendarautoselect | SubCell 의 edittype 속성값이 "date" 일 경우 편집영역이 활성화 되면 텍스트를 전체선택 할지 설정하는 속성입니다. |
| calendarbackgroundcol | SubCell이 Calendar 형식일 때 Calendar 의 특정날짜에 배경색을 표시하기 위해 calendardataset 속성에 설정된 Dataset 오브젝트의 Column을 설정하는 속성입니다. |
| calendarbordercol | SubCell이 Calendar 형식일 때 Calendar 의 특정날짜에 테두리을 표시하기 위해 calendardataset 속성에 설정된 Dataset 오브젝트의 Column을 설정하는 속성입니다. |
| calendarbuttonsize | SubCell 이 Calendar 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다. |
| calendardataset | SubCell이 Calendar 형식일 때 Calendar 에 특정날짜를 표시하기 위해 Dataset 오브젝트 ID를 설정하는 속성입니다. |
| calendardatecol | SubCell이 Calendar 형식일 때 Calendar 에 특정날짜를 표시하기 위해 calendardataset 속성에 설정된 Dataset 오브젝트의 Column을 설정하는 속성입니다. |
| calendardateformat | SubCell 의 displaytype 속성값이 "date" 또는 "calendarcontrol" 일 경우 표시되는 날짜의 형식을 설정하는 속성입니다. |
| calendardaysize | SubCell 이 Calendar 형식일 때 팝업으로 표시되는 달력의 각 날짜영역크기를 설정하는 속성입니다. |
| calendardisplayinvalidtext | SubCell 이 Calendar 형식일 때 바인드 된 데이터값이 유효하지 않으면 대체되어 표시할 문자열을 설정하는 속성입니다. |
| calendardisplayinvalidtype | SubCell 이 Calendar 형식일 때 바인드 된 데이터값이 유효하지 않으면 대체되어 표시할 형식을 설정하는 속성입니다. |
| calendardisplaynulltext | SubCell 의 calendardisplaynulltype 속성값이 "nulltext" 일 경우 Cell 에 표시할 텍스트를 설정하는 속성입니다. |
| calendardisplaynulltype | SubCell 의 displaytype 속성값이 "date" 또는 "calendarcontrol" 이고 바인드 된 값이 "null" 인 경우 SubCell 에 표시되는 값을 설정하는 속성입니다. |
| calendareditformat | SubCell 의 edittype 속성값이 "date" 일 경우 입력받는 날짜의 형식을 설정하는 속성입니다. |
| calendarheadformat | SubCell 이 Calendar 형식일 때 팝업달력의 상단에 표시되는 년/월의 순서를 설정하는 속성입니다. |
| calendarheadheight | SubCell 이 Calendar 형식일 때 팝업달력에서 년/월이 표시되는 Head 영역의 높이를 설정하는 속성입니다. |
| calendarpopupsize | SubCell 이 Calendar 형식일 때 팝업으로 표시되는 달력의 크기를 설정하는 속성입니다. |
| calendarpopuptype | SubCell 이 Calendar 형식일 때 팝업달력(DatePicker)이 표시되는 방식을 설정하는 속성입니다. |
| calendarshowmonthspin | SubCell 이 Calendar 형식일 때 팝업달력의 상단에 월 변경버튼을 표시할 지 설정하는 속성입니다. |
| calendarshowyearspin | SubCell 이 Calendar 형식일 때 팝업달력의 상단에 연도 변경버튼을 표시할 지 설정하는 속성입니다. |
| calendartextcolorcol | SubCell이 Calendar 형식일 때 Calendar 의 특정날짜에 날짜색을 표시하기 위해 calendardataset 속성에 설정된 Dataset 오브젝트의 Column을 설정하는 속성입니다. |
| calendartype | SubCell 이 Calendar 형식일 때 Calendar가 화면에 표시되는 형식을 설정하는 속성입니다. |
| calendarusetrailingday | SubCell 이 Calendar 형식일 때 팝업달력의 시작/끝 여백에 전/후 달의 날짜를 표시할지 설정하는 속성입니다. |
| calendarweekformat | SubCell 이 Calendar 형식일 때 팝업달력에 요일이 표시되는 형식을 설정하는 속성입니다. |
| checkboxfalsevalue | SubCell 이 CheckBox 형식일 때 False 로 처리되는 값을 문자열로 설정하는 속성입니다. |
| checkboxsize | SubCell 이 CheckBox 형식일 때 CheckBox 의 크기를 설정하는 속성입니다. |
| checkboxtruevalue | SubCell 이 CheckBox 형식일 때 True 로 처리되는 값을 문자열로 설정하는 속성입니다. |
| col | SubCell 에 정의된 Column 인덱스 값이 저장된 읽기전용 속성입니다. |
| color | SubCell 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| colspan | SubCell 에 병합된 Column 의 갯수가 저장된 읽기전용 속성입니다. |
| comboautoselect | SubCell 이 Combo 형식일 때 편집영역이 활성화 되면 텍스트를 전체선택 할지 설정하는 속성입니다. |
| combobuttonsize | SubCell 이 Combo 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다. |
| combocodecol | SubCell 이 Combo 형식일 때 Cell 의 아이템 리스트에서 코드값으로 사용될 Column 을 설정하는 속성입니다. |
| combodatacol | SubCell 이 Combo 형식일 때 Cell 의 아이템 리스트에서 데이터값으로 사용될 Column 을 설정하는 속성입니다. |
| combodataset | SubCell 이 Combo 형식일 때 SubCell 의 아이템 리스트를 구성할 DataSet 의 ID를 설정하는 속성입니다. |
| combodisplaynulltext | SubCell 이 Combo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시할 텍스트를 설정하는 속성입니다. |
| combodisplaynulltype | SubCell 이 Combo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시되는 값의 종류를 설정하는 속성입니다. |
| combodisplayrowcount | SubCell 이 Combo 형식일 때 아이템 리스트에 한번에 표시될 아이템의 갯수를 설정하는 속성입니다. |
| comboimemode | SubCell 이 Combo 형식일 때 편집창에서 사용될 기본 입력 언어를 설정하는 속성입니다. |
| comboitemheight | SubCell 이 Combo 형식일 때 아이템 리스트의 각 행높이를 설정하는 속성입니다. |
| combopopupsize | SubCell 이 Combo 형식일 때 팝업으로 표시되는 아이템 리스트의 크기를 설정하는 속성입니다. |
| combopopuptype | SubCell 이 Combo 형식일 때 아이템 리스트가 표시되는 방식을 설정하는 속성입니다. |
| comboscrollbarsize | SubCell 이 Combo 형식일 때 아이템 리스트에 표시되는 스크롤바의 너비를 설정하는 속성입니다. |
| combotype | SubCell 이 Combo 형식일 때 동작하는 방법을 설정하는 속성입니다. |
| controlautosizingtype | SubCell 이 컨트롤 형식일 때 SubCell 크기에 맞게 컨트롤 크기를 자동 조절할 지 설정하는 속성입니다. |
| cssclass | SubCell 의 Style을 XCSS 파일에 정의된 class로 설정하는 속성입니다. |
| cursor | SubCell 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| displaytype | SubCell 이 편집상태가 아닐 때 바인드 된 데이터가 화면에 표시되는 형식을 설정하는 속성입니다. |
| editautoselect | SubCell 의 edittype 속성값이 "text" 일 경우 편집영역이 활성화 될 때 텍스트를 전체선택 할지 설정하는 속성입니다. |
| editimeaction | 키보드에 하단 모서리에 표시되는 사용자 작업 버튼 UI와 동작을 설정하는 속성입니다. |
| editimemode | SubCell 의 edittype 속성값이 "text" 일 경우 Cell 의 편집창에서 사용될 기본 입력 언어를 설정하는 속성입니다. |
| editinputfilter | SubCell 의 edittype 속성값이 "text" 일 경우 SubCell 편집 시 입력을 제한 시킬 문자를 타입별로 설정하는 속성입니다. |
| editinputmode | SubCell 의 edittype 속성값이 "text" 일 경우 SubCell 에 입력되는 영문자를 대문자 또는 소문자로 변환할지 설정하는 속성입니다. |
| editinputtype | SubCell 의 edittype 속성값이 "text" 일 경우 SubCell 에 입력을 허용할 문자를 타입별로 설정하는 속성입니다. |
| editmaxlength | SubCell 의 edittype 속성값이 "text" 일 경우 SubCell 에 입력할 수 있는 문자열의 최대길이를 설정하는 속성입니다. |
| edittype | SubCell 이 포커스를 받아 표시되는 편집창의 형식을 설정하는 속성입니다. |
| expandchar | SubCell 의 확장버튼에 표시될 텍스트를 설정하는 속성입니다. |
| expandimage | SubCell 의 확장버튼에 텍스트와 함께 표시할 이미지의 위치 경로를 설정하는 속성입니다. |
| expandshow | SubCell 의 오른쪽에 확장버튼을 표시할지 설정하는 속성입니다. |
| expandsize | SubCell 의 오른쪽에 표시되는 확장버튼의 크기를 설정하는 속성입니다. |
| expr | SubCell 에 표시될 텍스트를 동적으로 생성하는 수식을 설정하는 속성입니다. |
| font | SubCell 에서 사용하는 폰트를 설정하는 속성입니다. |
| imagestretch | SubCell 의 크기에 맞게 이미지가 확대/축소되는 방식을 설정하는 속성입니다. |
| letter-spacing | CellSubCellControl 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다. |
| locale | SubCell 에 적용될 국가 및 언어(locale)를 설정하는 속성입니다. |
| maskeditautoselect | SubCell 의 edittype 속성값이 "mask" 일 경우 편집영역이 활성화 될 때 텍스트를 전체선택 할지 설정하는 속성입니다. |
| maskeditclipmode | SubCell 의 maskeditformat 속성에 설정된 형식 중 입력하지 않은 마스크에 대한 처리 방법을 결정하는 속성입니다. |
| maskeditformat | SubCell 의 edittype 속성값이 "mask" 일 때 입력 받을 문자의 형식을 지정하는 속성입니다. |
| maskeditimeaction | 키보드에 하단 모서리에 표시되는 사용자 작업 버튼 UI와 동작을 설정하는 속성입니다. |
| maskeditlimitbymask | SubCell 의 edittype 속성값이 "mask" 이고 maskedittype 속성값이 "number" 일 때, maskeditformat 속성의 마스크 값이 적용되는 부분을 설정하는 속성입니다. |
| maskeditmaskchar | SubCell 의 maskeditformat 속성에 정의된 마스크 문자에 대응하는 문자를 지정하는 속성입니다. |
| maskeditpostfixtext | 표시되는 텍스트 뒤에 붙여서 표시할 문자열을 지정하는 속성입니다. |
| maskedittrimtype | SubCell 의 maskeditformat 속성에 설정된 형식 중 좌우 공백에 대한 처리 방법을 결정하는 속성입니다. |
| maskedittype | SubCell 의 edittype 속성값이 "mask" 일 때 Cell 에 입력되는 값의 형식을 설정하는 속성입니다. |
| multicomboautoselect | SubCell이 MultiCombo 형식일 때 편집영역이 활성화되면 텍스트를 전체선택 할지 설정하는 속성입니다. |
| multicombobuttonsize | SubCell이 MultiCombo 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다. |
| multicombocodecol | SubCell이 MultiCombo 형식일 때 SubCell의 아이템 리스트에서 코드값으로 사용될 Column을 설정하는 속성입니다. |
| multicombocounttextformat | SubCell이 MultiCombo 형식이고 multicomboedittype 속성값이 "count"일 때 선택된 아이템을 표시할 텍스트를 설정하는 속성입니다. |
| multicombodatacol | SubCell이 MultiCombo 형식일 때 Cell의 아이템 리스트에서 데이터값으로 사용될 Column을 설정하는 속성입니다. |
| multicombodataset | SubCell이 MultiCombo 형식일 때 SubCell의 아이템 리스트를 구성할 DataSet의 ID를 설정하는 속성입니다. |
| multicombodisplaynulltext | SubCell이 MultiCombo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시할 텍스트를 설정하는 속성입니다. |
| multicombodisplaynulltype | SubCell이 MultiCombo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시되는 값의 종류를 설정하는 속성입니다. |
| multicombodisplayrowcount | SubCell이 MultiCombo 형식일 때 아이템 리스트에 한 번에 표시될 아이템의 개수를 설정하는 속성입니다. |
| multicomboedittype | SubCell이 MultiCombo 형식일 때 선택된 아이템의 표시 방식을 설정하는 속성입니다. |
| multicomboimemode | SubCell이 MultiCombo 형식일 때 편집창에서 사용될 기본 입력 언어를 설정하는 속성입니다. |
| multicomboitemheight | SubCell이 MultiCombo 형식일 때 아이템 리스트의 각 행의 높이를 설정하는 속성입니다. |
| multicombopopupsize | SubCell이 MultiCombo 형식일 때 팝업으로 표시되는 아이템 리스트의 크기를 설정하는 속성입니다. |
| multicombopopuptype | SubCell이 MultiCombo 형식일 때 아이템 리스트가 표시되는 방식을 설정하는 속성입니다. |
| multicomboreadonlycolumn | SubCell이 MultiCombo 형식일 때 아이템 readonly 여부 설정 시 사용될 Column을 설정하는 속성입니다. |
| multicomboscrollbarsize | SubCell이 MultiCombo 형식일 때 아이템 리스트에 표시되는 스크롤바의 너비를 설정하는 속성입니다. |
| multicomboshowselectallcheckbox | SubCell이 MultiCombo 형식일 때 아이템 리스트 상단에 아이템 전체를 선택 또는 선택해제하는 체크박스의 표시 여부를 설정하는 속성입니다. |
| multicombotextseparator | SubCell 이 MultiCombo 형식일 때 2개 이상의 text 속성값 설정 시 구분자로 사용할 값을 설정하는 속성입니다. |
| multicombotype | SubCell이 MultiCombo 형식일 때 동작하는 방법을 설정하는 속성입니다. |
| name | CellSubCellControl 의 이름을 설정하는 속성입니다. |
| -nexa-background-odd | SubCell 의 Row 인덱스가 홀수일 때 SubCell 의 배경 영역을 설정하는 속성입니다. |
| -nexa-border | SubCell 의 right 와 bottom 테두리를 설정하는 속성입니다. |
| -nexa-color-odd | SubCell 의 Row 인덱스가 홀수일 때 SubCell 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| -nexa-edge | SubCell 의 테두리(Border) 안쪽에 표시될 edge 이미지를 설정하는 속성입니다. |
| -nexa-padding | SubCell 영역의 안쪽 여백을 설정하는 속성입니다. |
| -nexa-rtl-background-image | CellSubCellControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| -nexa-rtl-background-image-odd | Grid 의 rtl 속성이 true 로 적용될 때 Row 인덱스가 홀수인 SubCell 의 배경에 표시될 이미지를 설정하는 속성입니다. |
| -nexa-rtl-edge-image | CellSubCellControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-text-align | SubCell 에 표시되는 텍스트 또는 컨텐츠의 가로 정렬 방식을 설정하는 속성입니다. |
| -nexa-text-decoration | SubCell 에 표시되는 텍스트에 적용할 효과를 설정하는 속성입니다. |
| -nexa-vertical-align | SubCell 에 표시되는 텍스트 또는 컨텐츠의 세로 정렬 방식을 설정하는 속성입니다. |
| -nexa-word-wrap | SubCell 에 표시되는 텍스트가 출력영역보다 길 경우 자동으로 줄바꿈 되도록 설정하는 속성입니다. |
| opacity | SubCell 영역의 투명도를 설정하는 속성입니다. |
| progressbarblockgap | SubCell 의 displaytype 속성값이 "progressbarcontrol" 일 경우 ProgressBar 의 진행 상태를 표시하는 블럭의 간격을 설정하는 속성입니다. |
| progressbarblocksize | SubCell 의 displaytype 속성값이 "progressbarcontrol" 일 경우  ProgressBar 의 진행 상태를 표시하는 블럭의 너비를 설정하는 속성입니다. |
| progressbardirection | SubCell 의 displaytype 속성값이 "progressbarcontrol" 일 경우 ProgressBar 의 진행 방향을 설정하는 속성입니다. |
| progressbarsmooth | SubCell 의 displaytype 속성값이 "progressbarcontrol" 일 경우 ProgressBar 가 표시되는 형태를 설정하는 속성입니다. |
| radioitemcodevalue | SubCell이 radioitem 형식일 때 선택상태로 처리되는 값을 문자열로 설정하는 속성입니다. |
| radioitemsize | SubCell 이 radioitem 형식일 때 radioitem 의 크기를 설정하는 속성입니다. |
| row | SubCell 이 밴드내에서 위치하는 Row 인덱스 값이 저장된 읽기전용 속성입니다. |
| rowspan | SubCell 에 병합된 Sub Row 의 갯수가 저장된 읽기전용 속성입니다. |
| rtl | CellSubCellControl 에서 내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다. |
| subcell | 병합(Merge) 된 SubCell 일 때 실제 병합된 SubCell 의 갯수가 저장된 읽기전용 속성입니다. |
| suppress | SubCell 에 Suppress 기능을 설정하는 속성입니다. |
| suppressalign | SubCell 에 Suppress 기능이 설정되어 있을때 합쳐서 표시되는 텍스트의 위치를 설정하는 속성입니다. |
| text | SubCell 에 표시될 텍스트를 설정하는 속성입니다. |
| textareaacceptsenter | SubCell 의 edittype 속성값이 "textarea" 일 때 편집영역에서 Enter 키 입력의 처리방식을 설정하는 속성입니다. |
| textareaautoselect | SubCell 의 edittype 속성값이 "textarea" 일 경우 편집영역이 활성화 될 때 텍스트를 전체선택 할지 설정하는 속성입니다. |
| textareaimemode | SubCell 의 edittype 속성값이 "textarea" 일 경우 SubCell 의 편집창에서 사용될 기본 입력 언어를 설정하는 속성입니다. |
| textareainputfilter | SubCell 의 edittype 속성값이 "textarea" 일 경우 SubCell 편집 시 입력을 제한 시킬 문자를 타입별로 설정하는 속성입니다. |
| textareainputmode | SubCell 의 edittype 속성값이 "textarea" 일 경우 SubCell 에 입력되는 영문자를 대문자 또는 소문자로 변환할지 설정하는 속성입니다. |
| textareainputtype | SubCell 의 edittype 속성값이 "textarea" 일 경우 SubCell 에 입력을 허용할 문자를 타입별로 설정하는 속성입니다. |
| textareamaxlength | SubCell 의 edittype 속성값이 "textarea" 일 경우 SubCell 에 입력할 수 있는 문자열의 최대길이를 설정하는 속성입니다. |
| textareascrollbarsize | SubCell 이 TextArea 형식일 때 표시되는 스크롤바의 크기를 설정하는 속성입니다. |
| textareascrollbartype | SubCell 의 edittype 속성값이 "textarea" 일 경우 편집창에 스크롤바가 표시되는 형식을 설정하는 속성입니다. |
| textareascrolltype | SubCell 의 edittype 속성값이 "textarea" 일 경우 편집창에서 사용되는 스크롤의 종류를 설정하는 속성입니다. |
| tooltiptext | SubCell 영역에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다. |
| tooltiptype | CellSubCellControl 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다. |
| treecheck | SubCell 이 트리 형식일 때 체크박스의 값으로 사용될 Column을 설정하는 속성입니다. |
| treelevel | SubCell 이 트리 형식일 때 트리의 레벨값으로 사용될 Column을 설정하는 속성입니다. |
| treestartlevel | SubCell 이 트리 형식일 때 트리 레벨의 시작값을 설정하는 속성입니다. |
| treestate | SubCell 이 트리 형식일 때 트리의 상태값으로 사용될 Column을 설정하는 속성입니다. |
| word-spacing | SubCell 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다. |

**Status**

컴포넌트가 비활성화된 상태

**Control**

| Name | TypeName |
| --- | --- |
| cellbutton | nexacro.Button |
| cellcalendar | nexacro.Calendar |
| cellcheckbox | nexacro.CheckBox |
| cellcombo | nexacro.Combo |
| celledit | nexacro.Edit |
| cellmaskedit | nexacro.MaskEdit |
| celltreeline | nexacro.CellTreeLineControl |
| cellprogressbar | nexacro.ProgressBar |
| celltextarea | nexacro.TextArea |
| celltreeitem | nexacro.CellTreeItemControl |
| cellimage | nexacro.ImageAreaControl |
| cellexpandbutton | nexacro.Button |
| cellselection | nexacro.GridSelectionControl |
| cellradioitem | nexacro.RadioItemControl |
| cellmulticombo | nexacro.MultiCombo |


---

### 속성 (Properties)

### -nexa-background-odd

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > -nexa-background-odd

**Description**

SubCell 의 Row 인덱스가 홀수일 때 SubCell 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.-nexa-background-odd
```

**Setting Syntax**

```javascript
-nexa-background-odd ::= [<bg-image> | <linear-gradient>] [<background-origin> [<background-clip>]] [<background-color>]

<bg-image> ::= 'none' | <imageurl> [<repeat-style>] [<position>]
<imageurl> ::= 'URL(' <Theme-Image> | <Web-Image> ')'
<repeat-style> ::= 'repeat-x' | 'repeat-y' | 'repeat' | 'no-repeat'
<position> ::= <horizontal-position> <vertical-position>
<horizontal-position> ::= 'left' | 'center' | 'right' | <pos-percentage> '%'
<vertical-position> ::= 'top' | 'center' | 'bottom' | <pos-percentage> '%'

<linear-gradient> ::= 'linear-gradient(' [<angle> , ] <color-stop> ')'
<angle> ::= 'to left' | 'to right' | 'to top' | 'to bottom' | 'to left top' | 'to left bottom' | 'to right top' | 'to right bottom'
<color-stop> ::= <startcolor-stop> [<listcolor-stop>] <endcolor-stop>
<startcolor-stop> ::= <color> [<percentage>'%']
<endcolor-stop> ::= <color> [<percentage>'%']
<listcolor-stop> ::= <color> [<percentage>'%"] [,<listcolor-stop>]*
<color> ::= <NamedColor> | <NumericColor>

<background-origin> ::= 'border-box' | 'padding-box'
<background-clip> ::= 'border-box' | 'padding-box'

<background-color> ::= <NamedColor> | <NumericColor>
```
```javascript
* XCSS
-nexa-background-odd: #ffffaa;
-nexa-background-odd: url('./images/smiley.gif') no-repeat center center #ffffaa;
-nexa-background-odd : linear-gradient( red , blue , yellow );
-nexa-background-odd: linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0));
-nexa-background-odd: url('./images/smiley.gif') border-box border-box #ffffaa;
```
- **`<bg-image>`** — 배경에 표시될 이미지를 "'none' | <imageurl> [<repeat-style>] [<position>]" 형식으로 설정합니다.

<background-color> 값이 설정되어 있으면 배경색 위로 이미지가 표시됩니다.

"none" 으로 설정하면 이미지를 설정하지 않습니다.
<imageurl> 값으로 이미지를 설정할 수 있습니다.
<repeat-style> 값으로 이미지의 반복표시 방향을 설정할 수 있습니다.
<position> 값으로 이미지의 표시위치를 설정할 수 있습니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<imageurl>`** — 배경에 표시될 이미지를 "'URL(' <Theme-Image> | <Web-Image> ')'" 형식으로 설정합니다.

"URL ( [이미지경로] )" 형식으로 테마 또는 웹의 이미지를 설정합니다.
- **`<Theme-Image>`** — 테마에 선언된 이미지를 "theme://images\이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/파일명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<repeat-style>`** — 배경에 표시될 이미지의 반복표시 방향을 설정합니다.

"repeat-x" 설정 시 이미지가 가로 방향으로 반복표시 됩니다.
"repeat-y" 설정 시 이미지가 세로 방향으로 반복표시 됩니다.
"repeat" 설정 시 이미지가 가로,세로 방향으로 모두 반복표시 됩니다.
"no-repeat" 설정 시 이미지가 반복표시 되지 않습니다.

값을 설정하지 않으면 "repeat" 로 적용됩니다.
- **`<horizontal-position>`** — 배경에 표시될 이미지의 가로 위치를 설정합니다.

"left" 설정 시 CellSubCellControl 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 CellSubCellControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 CellSubCellControl 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 CellSubCellControl 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 CellSubCellControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 CellSubCellControl 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<horizontal-position> 값을 설정하고, <vertical-position> 값을 설정하지 않으면 <vertical-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <vertical-position> 은 "top" 으로 적용됩니다.
- **`<pos-percentage>`** — 배경에 표시될 이미지의 가로/세로 위치를 비율로 설정합니다.

<horizontal-position> 에 "0%" 설정 시 "left" 와 같은 위치로 적용됩니다.
<horizontal-position> 에 "50%" 설정 시 "center" 와 같은 위치로 적용됩니다.
<horizontal-position> 에 "100%" 설정 시 "right" 과 같은 위치로 적용됩니다.
<vertical-position> 에 "0%" 설정 시 "top" 와 같은 위치로 적용됩니다.
<vertical-position> 에 "50%" 설정 시 "center" 와 같은 위치로 적용됩니다.
<vertical-position> 에 "100%" 설정 시 "bottom" 과 같은 위치로 적용됩니다.

0 보다 작거나 100 보다 큰 값을 설정 시 CellSubCellControl 의 영역을 벗어난 가상의 위치로 적용됩니다.

값 설정 시 "%" 단위를 생략할 수 없습니다.
- **`<linear-gradient>`** — 배경에 표시될 그라데이션을 "'linear-gradient(' [<angle> , ] <color-stop> ')'" 형식으로 설정합니다.

<background-color> 값이 설정되어 있으면 배경색 위로 그라데이션이 표시됩니다.

"linear-gradient ( [방향, 색상값, 색상값, ...] )" 형식으로 그라데이션 방향과 색상을 설정할 수 있습니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<angle>`** — 그라데이션의 표시 방향을 설정합니다.

"to left" 설정 시 오른쪽에서 왼쪽 방향으로 그라데이션이 표시됩니다.
"to right" 설정 시 왼쪽에서 오른쪽 방향으로 그라데이션이 표시됩니다.
"to top" 설정 시 아래쪽에서 윗쪽 방향으로 그라데이션이 표시됩니다.
"to bottom" 설정 시 윗쪽에서 아래쪽 방향으로 그라데이션이 표시됩니다.
"to left top" 설정 시 오른쪽 아래 방향에서 왼쪽 윗 방향으로 그라데이션이 표시됩니다.
"to left bottom" 설정 시 오른쪽 윗 뱡향에서 왼쪽 아래 방향으로 그라데이션이 표시됩니다.
"to right top" 설정 시 왼쪽 아래 방향에서 오른쪽 윗 방향으로 그라데이션이 표시됩니다.
"to right bottom" 설정 시 왼쪽 윗 방향에서 오른쪽 아래 방향으로 그라데이션이 표시됩니다.

값을 설정하지 않으면 "to bottom"으로 적용됩니다.
- **`<color-stop>`** — 그라데이션의 시작점, 끝점, 중간점의 색을 "<startcolor-stop> [<listcolor-stop>] <endcolor-stop>" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 시작점과 끝점의 위치가 결정됩니다.
예를 들어 <angle> 값이 "to left" 이면 CellSubCellControl 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 CellSubCellControl 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

<listcolor-stop> 에 그라데이션 중간점의 색을 한개 이상 설정할 수 있으며 <percentage> 값 생략 시 균등하게 표시됩니다.
- **`<startcolor-stop>`** — 그라데이션의 시작점 색을 "<color> [<percentage>'%']" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 시작점 위치가 결정됩니다.
시작점의 <percentage> 값을 "0" 이상으로 설정 시 "시작점~설정값"까지 동일한 색상으로 표시됩니다.
- **`<endcolor-stop>`** — 그라데이션의 끝점 색을 "<color> [<percentage>'%']" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 끝점 위치가 결정됩니다.
끝점의 <percentage> 값을 "100" 이하로 설정 시 "설정값~끝점"까지 동일한 색상으로 표시됩니다.
- **`<listcolor-stop>`** — 그라데이션의 중간점 색을 "<color> [<percentage>'%"] [,<listcolor-stop>]*" 형식으로 설정합니다.

시작점과 끝점 사이에 적용될 중간색을 ","로 구분하여 여러개 설정할 수 있습니다.
뒤에 선언된 색의 <percentage> 값은 먼저 선언된 색의 <percentage> 값보다 커야 합니다.
- **`<color>`** — 그라데이션 색상을 색상이름 또는 색상코드로 설정합니다.
- **`<percentage>`** — <color> 에 해당하는 색이 적용될 위치를 비율값으로 설정합니다.

<angle> 값에 의해 결정된 시작점이 "0%" 로 적용됩니다.
<angle> 값에 의해 결정된 끝점이 "100%" 로 적용됩니다.

0 보다 작거나 100 보다 큰 값을 설정 시 CellSubCellControl 의 영역을 벗어난 가상의 위치로 적용됩니다.
예를 들어 "150%" 설정 시 시작점에서 끝점까지 거리의 반만큼 끝점에서 벗어난 위치에 <color> 값이 적용됩니다.

<percentage> 값을 생략하면 균등한 위치에 <color> 값이 적용됩니다.
값 설정 시 "%" 단위를 생략할 수 없습니다.
- **`<background-origin>`** — 배경으로 처리될 기준영역을 설정합니다.

"border-box" 설정 시 Border 를 포함한 영역이 배경영역으로 처리됩니다.

"padding-box" 설정 시 Border 의 안쪽 영역이 배경영역으로 처리됩니다.
"padding-box" 설정 시 그라데이션의 시작점, 끝점과 배경이미지의 반복 기준위치가 Border 안쪽 영역으로 처리됩니다.

값을 설정하지 않으면 "padding-box" 로 적용됩니다.
- **`<background-clip>`** — 배경이 실제로 표시될 영역을 설정합니다.

"border-box" 설정 시 Border 를 포함한 영역에 배경이 표시됩니다.
"padding-box" 설정 시 Border 의 안쪽 영역에 배경이 표시됩니다.

값을 설정하지 않으면 <background-origin> 에 설정한 값이 동일하게 적용됩니다.
<background-origin> 값도 설정하지 않았을 경우 "border-box" 로 적용됩니다.
- **`<background-color>`** — 배경에 표시될 색을 색상이름 또는 색상코드로 설정합니다.

<bg-image> 또는 <linear-gradient> 값이 설정되어 있다면 배경색은 배경이미지 또는 그라데이션 아래에 표시됩니다.
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 CellSubCellControl 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- XCSS 에서만 설정할 수 있는 속성으로 스크립트로 값을 변경할 수 없습니다.
   XCSS 에 속성값을 설정하지 않으면 undefined 가 설정되고, "transparent" 로 동작합니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.

- 배경의 기준영역과 표시영역은 <background-origin>, <background-clip> 값으로 각각 설정합니다.
   SubCell 은 top/right/bottom/left 테두리(Border) 모두를 표시하지 않고, right 와 bottom 만으로 인접한 Cell 과 테두리를 연결하는 방식으로 처리합니다.
   따라서 특정 SubCell 의 left 는 왼쪽 Cell 의 right 로 대체되고, top 은 윗쪽 Cell 의 bottom 으로 대체됩니다.
   배경 영역 설정 시 이와 같은 특성을 고려하여야 합니다.

- 배경 이미지를 중앙에 위치시키려면 <position> 값을 "center" 또는 "center center" 로 설정하여야 합니다.

- 배경이미지와 배경색을 모두 설정하면 배경색 위에 이미지가 표시됩니다.
   그라데이션과 배경색을 모두 설정하면 배경색 위에 그라데이션이 표시됩니다.

- 그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
   두 값을 동시에 설정 시 오동작이 발생할 수 있습니다.

- Grid 의 Body 영역에 속한 SubCell 만 적용되는 속성입니다.


---

### -nexa-border

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > -nexa-border

**Description**

SubCell 의 right 와 bottom 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.border[= strborder]
```

**Setting Syntax**

```javascript
strborder ::= <line-width> <line-style> <color> [,<line-width> <line-style> <color>]{3}

<line-width> ::= 'thin' | 'medium' | 'thick' | <nWidth> 'px'
<line-style> ::= 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'
<color> ::= <NamedColor> | <NumericColor>

1회 입력 : right/bottom 에 모두 적용됩니다.
2회 입력 : bottom 에 첫번째 right 에 두번째 값이 적용됩니다.
3, 4회 입력 : right 에 두번째, bottom 에 세번째 값이 적용됩니다.

* 2회~4회 입력은 border-radius 속성값이 설정되지 않은 경우만 적용됩니다.
```
```javascript
* XCSS
-nexa-border : 1px solid #999999;
-nexa-border : 1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999;

* Script ( normal property )
this.Grid00.setSubCellProperty( "body", 0, 0, "border", "1px solid #999999" );
this.Grid00.setSubCellProperty( "body", 0, 0, "border", "1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999" );
```
- **`<line-width>`** — 테두리 선의 두께를 설정합니다.

"thin" 설정 시 1 pixel 두께로 테두리가 표시됩니다.
"medium" 설정 시 3 pixel 두께로 테두리가 표시됩니다.
"thick" 설정 시  5 pixel 두께로 테두리가 표시됩니다.

<nWidth> 설정 시 <nWidth> pixel 두께로 테두리가 표시됩니다.
- **`<nWidth>`** — 테두리 선의 두께를 pixel 단위로 설정합니다.
"px" 단위는 생략할 수 없습니다.
- **`<line-style>`** — 테두리 선의 스타일을 설정합니다.

"none" 설정 시 테두리가 표시되지 않습니다.
"hidden" 설정 시 테두리가 표시되지 않습니다.
"dotted" 설정 시 테두리가 점선으로 표시됩니다.
"dashed" 설정 시 테두리가 긴 점선으로 표시됩니다.
"solid" 설정 시 테두리가 실선으로 표시됩니다.
"double" 설정 시 테두리가 두줄로 표시됩니다.
"groove" 설정 시 테두리가 들어간 것처럼 보이게 입체적으로 표시됩니다.
"ridge" 설정 시 테두리가 올라온 것처럼 보이게 입체적으로 표시됩니다.
"inset" 설정 시 컴포넌트가 들어간 것처럼 보이게 테두리가 입체적으로 표시됩니다.
"outset" 설정 시 컴포넌트가 올라온 것처럼 보이게 테두리가 입체적으로 표시됩니다.
- **`<color>`** — 테두리 색상을 색상이름 또는 색상코드로 설정합니다.
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- -nexa-border 속성값을 설정하지 않으면 undefined 가 설정되고, "medium none #999999" 로 동작합니다.

- SubCell 은 top/right/bottom/left 테두리 모두를 표시하지 않고, right 와 bottom 만으로 인접한 Cell 과 테두리를 연결하는 방식으로 처리합니다.
   따라서 특정 SubCell 의 left 는 왼쪽 Cell 의 right 로 대체되고, top 은 윗쪽 Cell 의 bottom 으로 대체됩니다.
   테두리 설정 시 이와 같은 특성을 고려하여야 합니다.

- <line-style> 이 "double" 일 때 두 줄을 다른 색으로 설정할 수 없습니다.
   <color> 에 설정된 색이 두 줄에 모두 적용됩니다.

- 스크립트로 접근 시 속성명은 "border" 를 사용해야 합니다.

- Excel Export 시 테두리 선의 스타일과 색상은 적용되지만 두께는 적용되지 않습니다.
   Excel 에서 셀의 테두리 두께를 설정하는 기능이 없으므로 기본 두께로 적용됩니다.


◆ Nexacro Runtime Environment 제약

- right 와 bottom 의 색상이나 두께를 다르게 설정했을 경우 bottom 이 right 위에 겹쳐서 표시됩니다.

- <line-style> 파라미터에 "double","groove","ridge","inset","outset" 값을 설정해도 적용되지 않습니다.

- <line-width> 파라미터에 "thin","medium","thick" 값을 설정해도 적용되지 않습니다.


◆ Web Runtime Environment 제약

- right 와 bottom 의 색상이나 두께를 다르게 설정했을 경우 웹브라우저에 따라 right 와 bottom 이 겹치는 순서가 다르게 처리될 수 있습니다.

- right 와 bottom 의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있으면 두께는 right, bottom 별로 따로 적용되고, 색상은 top 에 설정된 색이 적용되지만 일부 브라우저는 right 와 bottom 에 색상이나 두께가 각각 적용됩니다.

- XCSS 를 사용하지 않고 rgba(), hsl(), hsla() 메소드를 속성에 직접 설정할 경우 브라우저 버전에 따라 적용되지 않을 수 있습니다.


---

### -nexa-color-odd

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > -nexa-color-odd

**Description**

SubCell 의 Row 인덱스가 홀수일 때 SubCell 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.-nexa-color-odd
```

**Setting Syntax**

```javascript
strcolor ::= <NamedColor> | <NumericColor>
```
```javascript
* XCSS
-nexa-color-odd : #999999;
-nexa-color-odd : rgb ( 255, 0, 0 );
-nexa-color-odd : red;
```
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- XCSS 에서만 설정할 수 있는 속성으로 스크립트로 값을 변경할 수 없습니다.
   XCSS 에 속성값을 설정하지 않으면 undefined 가 설정되고, "#000000" 로 동작합니다.

- Grid 의 Body 영역에 속한 SubCell 만 적용되는 속성입니다.


---

### -nexa-edge

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > -nexa-edge

**Description**

SubCell 의 테두리(Border) 안쪽에 표시될 edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.edge[= stredge]
```

**Setting Syntax**

```javascript
stredge ::= 'none' | <image> [<fixedwidth>'px' <fixedheight>'px']

<image> ::= 'URL("' <Theme-Image> | <Web-Image> '")'
```
```javascript
* XCSS
-nexa-edge : "URL('./images/border.png') 5px 5px;

* Script ( normal property )
this.Grid00.setSubCellProperty( "body", 0, 0, "edge", "URL('./images/border.png') 5px 5px );
```
- **`"none"`** — edge 이미지를 설정하지 않습니다.
- **`<image>`** — 'URL ("[이미지위치]")' 형식으로 테마 또는 웹의 이미지를 설정합니다.

테두리(border) 안쪽에 edge 형태로 이미지가 표시됩니다.
- **`<Theme-Image>`** — 테마에 선언된 이미지를 "theme://images\이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/파일명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<fixedwidth>`** — 이미지가 고정되어 표시될 왼쪽/오른쪽 영역의 크기를 pixel 단위로 설정합니다.
"0px" 설정 시 왼쪽/오른쪽 영역을 고정하지 않습니다.

값을 설정하지 않으면 "0px" 로 적용됩니다.
- **`<fixedheight>`** — 이미지가 고정되어 표시될 위쪽/아래쪽 영역의 크기를 pixel 단위로 설정합니다.
"0px" 설정 시 위쪽/아래쪽 영역을 고정하지 않습니다.

값을 설정하지 않으면 "0px" 로 적용됩니다.

**Remark**

- -nexa-edge 속성값을 설정하지 않으면 undefined 가 설정되고, "none" 으로 동작합니다.

- 스크립트로 접근 시 속성명은 "edge" 를 사용해야 합니다.

- CellSubCellControl 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.


◆ WRE 제약

- <fixedwidth>,<fixedheight> 값이 이미지 사이즈의 1/2 을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-padding

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > -nexa-padding

**Description**

SubCell 영역의 안쪽 여백을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.padding[= strpadding]
```

**Setting Syntax**

```javascript
strpadding ::= <npadding>'px'{4}
```
```javascript
* XCSS
-nexa-padding : 5px 5px 5px 5px;

* Script ( normal property )
this.Grid00.setSubCellProperty( "body", 0, 0, "padding", "5px 5px 5px 5px" );
```
- **`<npadding>`** — SubCell 영역의 안쪽 여백을 pixel 단위로 설정합니다.

값을 1회 입력 시 top/right/bottom/left 에 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top/bottom, right/left 에 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top, right/left, bottom 에 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top, right, bottom, left 에 첫번째 값부터 각각 적용됩니다.

"px" 단위를 생략할 수 없습니다.

**Remark**

- -nexa-padding 속성값을 설정하지 않으면 undefined 가 설정되고, "0px" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "padding" 을 사용해야 합니다.

- -nexa-padding 속성은 내부 컨텐츠영역과 SubCell 사이의 여백으로 적용됩니다.

- Div 와 같이 자식을 가질 수 있는 컴포넌트에서 -nexa-padding 속성은 자식 컴포넌트의 위치에 영향을 주지 않습니다.


---

### -nexa-rtl-background-image

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > -nexa-rtl-background-image

**Description**

CellSubCellControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.-nexa-rtl-background-image
```

**Setting Syntax**

```javascript
strRtlBgImage ::= "URL(' " <Theme-Image> | <Web-Image> " ')"
```
```javascript
* XCSS
-nexa-rtl-background-image : URL("http://localhost/Test.jpg");
-nexa-rtl-background-image : URL("theme://images/Test.jpg");
```
- **`strRtlBgImage`** — "URL ('<이미지위치>')" 형식으로 테마 또는 웹의 이미지 경로를 문자열로 설정합니다.

background 속성에 설정된 값 중 이미지만 설정한 이미지로 대체됩니다.
background 속성에 설정된 이미지 이외의 값은 동일하게 적용됩니다.
- **`<Theme-Image>`** — 테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.

**Remark**

- rtl 속성에 의해 표시기준이 변경되면 반전된 이미지를 적용하려 할 때 사용하는 속성입니다.

- XCSS 에서만 설정할 수 있는 속성으로 스크립트로 값을 변경할 수 없습니다.
   XCSS 에 -nexa-rtl-background-image 속성값을 설정하지 않으면 background 속성에 설정된 이미지가 적용됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.

- 배경이미지가 적용되는 영역은 컴포넌트의 클라이언트 영역입니다.

- background 속성에 배경색이 설정되어 있을 경우 배경색 위에 이미지가 표시됩니다.

- 그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
   background 속성에 그라데이션이 설정되어 있을 경우 오동작이 발생할 수 있습니다.


---

### -nexa-rtl-background-image-odd

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > -nexa-rtl-background-image-odd

**Description**

Grid 의 rtl 속성이 true 로 적용될 때 Row 인덱스가 홀수인 SubCell 의 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.-nexa-rtl-background-image-odd
```

**Setting Syntax**

```javascript
strRtlBgImage ::= "URL(' " <Theme-Image> | <Web-Image> " ')"
```
```javascript
* XCSS
-nexa-rtl-background-image-odd : URL("http://localhost/Test.jpg");
-nexa-rtl-background-image-odd : URL("theme://images/Test.jpg");
```
- **`strRtlBgImage`** — "URL ('<이미지위치>')" 형식으로 테마 또는 웹의 이미지 경로를 문자열로 설정합니다.

-nexa-background-odd 속성에 설정된 값 중 이미지만 설정한 이미지로 대체됩니다.
-nexa-background-odd 속성에 설정된 이미지 이외의 값은 동일하게 적용됩니다.
- **`<Theme-Image>`** — 테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.

**Remark**

- Grid 의 rtl 속성에 의해 표시기준이 변경되면 Cell 에 반전된 이미지를 적용하려 할 때 사용하는 속성입니다.

- XCSS 에서만 설정할 수 있는 속성으로 스크립트로 값을 변경할 수 없습니다.
   XCSS 에 -nexa-rtl-background-image-odd 속성값을 설정하지 않으면 -nexa-background-odd 속성에 설정된 이미지가 적용됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.

- 배경이미지가 적용되는 영역은 컴포넌트의 클라이언트 영역입니다.

- -nexa-background-odd 속성에 배경색이 설정되어 있을 경우 배경색 위에 이미지가 표시됩니다.

- 그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
   -nexa-background-odd 속성에 그라데이션이 설정되어 있을 경우 오동작이 발생할 수 있습니다.


---

### -nexa-rtl-edge-image

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > -nexa-rtl-edge-image

**Description**

CellSubCellControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.-nexa-rtl-edge-image
```

**Setting Syntax**

```javascript
strRtlEgImage ::= "URL(' " <Theme-Image> | <Web-Image> " ')"
```
```javascript
* XCSS
-nexa-rtl-edge-image : URL("http://localhost/Test.jpg");
-nexa-rtl-edge-image : URL("theme://images/Test.jpg")
```
- **`strRtlEgImage`** — "URL ('<이미지위치>')" 형식으로 테마 또는 웹의 이미지 경로를 문자열로 설정합니다.

-nexa-edge 속성에 설정된 값 중 이미지만 설정한 이미지로 대체됩니다.
-nexa-edge 속성에 설정된 이미지 이외의 값은 동일하게 적용됩니다.
- **`<Theme-Image>`** — 테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.

**Remark**

- rtl 속성에 의해 표시기준이 변경되면 반전된 이미지를 적용하려 할 때 사용하는 속성입니다.

- XCSS 에서만 설정할 수 있는 속성으로 스크립트로 값을 변경할 수 없습니다.
   XCSS 에 -nexa-rtl-edge-image 속성값을 설정하지 않으면 -nexa-edge 속성에 설정된 이미지가 적용됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.

- 배경이미지가 적용되는 영역은 컴포넌트의 클라이언트 영역입니다.

- background 또는 -nexa-rtl-background-image 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-rtl-edge-image 속성에 설정된 이미지가 제일 위에 표시됩니다.


◆ web runtime environment 제약

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-text-align

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > -nexa-text-align

**Description**

SubCell 에 표시되는 텍스트 또는 컨텐츠의 가로 정렬 방식을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.textAlign[= strtextalign]
```

**Setting Syntax**

```javascript
strtextalign ::= 'left' | 'center' | 'right'
```
```javascript
* XCSS
-nexa-text-align : center;

* Script ( normal property )
this.Grid00.setSubCellProperty( "body", 0, 0, "textAlign", "center" );
```
- **`"left"`** — 텍스트 또는 컨텐츠를 왼쪽으로 정렬합니다.
- **`"center"`** — 텍스트 또는 컨텐츠를 가운데로 정렬합니다.
- **`"right"`** — 텍스트 또는 컨텐츠를 오른쪽으로 정렬합니다.

**Remark**

- -nexa-text-align 속성값을 설정하지 않고, XCSS 에 정의된 값이 없을 경우 Grid Contents Editor 에 "left" 가 표시됩니다.
   XCSS 에도 정의된 값이 없고, displaytype 속성값에 의해 결정된 Control 의 XCSS 에도 정의된 값이 없다면 하단의 기준으로 동작됩니다.
   > displaytype 속성값이 "normal" 이면 바인드된 DataSet 의 컬럼타입에 따라 달라집니다.
   > displaytype 속성값이 "mask" 일 때 maskedittype 속성값이 "string" 이면 "left" 로 동작하고, "number" 이면 "right" 로 동작됩니다.
   > displaytype 속성값이 "maskeditcontrol, progressbarcontrol, textareacontrol, editcontrol, combocontrol, calendarcontrol" 이면 "left" 로 동작됩니다.
   > displaytype 속성값이 "combotext, date, text, decoratetext, buttoncontrol, treeitemcontrol" 이면 "center" 로 동작됩니다.
   > displaytype 속성값이 "number, currency" 이면 "right" 로 동작됩니다.
   > displaytype 속성값이 "checkboxcontrol, imagecontrol, radioitemcontrol" 이면 Control 자체가 SubCell 의 중앙에 위치합니다.

- displayttype 속성의 값에 "control" 이 포함되면 -nexa-text-align 속성값은 Control 이 표시되는 위치로 적용됩니다.
   Control 내부에 표시되는 텍스트의 정렬은 해당 Control 에 정의된 값에 따라 달라집니다.

- displaytype 속성값이 "normal" 이면 바인드된 DataSet 의 컬럼타입에 따라 달라집니다.
  > 컬럼타입이 "STRING, BLOB" 이면 "left" 로 동작됩니다.
  > 컬럼타입이 "INT, FLOAT, BIGDECIMAL" 이면 "right" 로 동작됩니다.
  > 컬럼타입이 "DATE, TIME, DATETIME" 이면 "center" 로 동작됩니다.

- 스크립트로 접근 시 속성명은 "textAlign"을 사용해야 합니다.

- 표시되는 텍스트의 길이가 SubCell 의 너비보다 크면 "right" 를 설정해도 "left" 로 동작됩니다.


◆ web runtime environment 제약

- -nexa-text-align 속성값이 "right" 일 때 font 속성에 "italic" 을 설정하면 마지막 텍스트의 기울어진 부분이 잘려서 표시될 수 있습니다.
   웹브라우저에서 텍스트영역을 일반글자 기준으로 처리한 후 기울임을 적용하면서 발생하는 문제입니다.


---

### -nexa-text-decoration

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > -nexa-text-decoration

**Description**

SubCell 에 표시되는 텍스트에 적용할 효과를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.textDecoration[= strTxtDeco]
```

**Setting Syntax**

```javascript
strTxtDeco ::= 'none' | <txt-deco> [' ' <txt-deco>]{2}

<txt-deco> ::= 'underline' | 'overline' | 'line-through'
```
```javascript
* XCSS
-nexa-text-decoration : underline overline;

* Script ( normal property )
this.Grid00.setSubCellProperty( "body", 0, 0, "textDecoration", "underline overline" );
```
- **`"none"`** — 텍스트에 효과를 적용하지 않습니다.
- **`<txt-deco>`** — 텍스트에 적용할 효과를 설정합니다.

"underline" 설정 시 텍스트에 밑줄 효과가 적용됩니다.
"overline" 설정 시 텍스트에 윗줄 효과가 적용됩니다.
"line-through" 설정 시 텍스트에 취소선 효과가 적용됩니다.

**Remark**

- -nexa-text-decoration 속성값을 설정하지 않으면 undefined 가 설정되고, "none" 으로 동작합니다.

- 스크립트로 접근 시 속성명은 "textDecoration" 을 사용해야 합니다.

- 각 효과는 공백(" ")을 구분자로 사용하여 여러번 설정할 수 있습니다.


◆ web runtime environment 제약

- 일부 웹브라우저는 속성값에 "none" 이 포함될 경우 텍스트에 효과가 적용되지 않습니다.


---

### -nexa-vertical-align

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > -nexa-vertical-align

**Description**

SubCell 에 표시되는 텍스트 또는 컨텐츠의 세로 정렬 방식을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.verticalAlign[= strvertalign]
```

**Setting Syntax**

```javascript
strvertalign ::= 'top' | 'middle' | 'bottom'
```
```javascript
* XCSS
-nexa-vertical-align : middle;

* Script ( normal property )
this.Grid00.setSubCellProperty( "body", 0, 0, "verticalAlign", "middle" );
```
- **`"top"`** — 텍스트 또는 컨텐츠를 위쪽으로 정렬합니다.
- **`"middle"`** — 텍스트 또는 컨텐츠를 가운데로 정렬합니다.
- **`"bottom"`** — 텍스트 또는 컨텐츠를 아래쪽으로 정렬합니다.

**Remark**

- -nexa-vertical-align 속성값을 설정하지 않으면 undefined 가 설정되고, "middle" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "verticalAlign"을 사용해야 합니다.


---

### -nexa-word-wrap

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > -nexa-word-wrap

**Description**

SubCell 에 표시되는 텍스트가 출력영역보다 길 경우 자동으로 줄바꿈 되도록 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.wordWrap[= strwordwrap]
```

**Setting Syntax**

```javascript
strwordwrap ::= 'none' | 'char' | 'english'
```
```javascript
* XCSS
-nexa-word-wrap : char;

* Script ( normal property )
this.Grid00.setSubCellProperty( "body", 0, 0, "wordWrap", "char" );
```
- **`"none"`** — 자동으로 줄바꿈을 수행하지 않습니다.
- **`"char"`** — 글자 단위로 줄바꿈을 자동 수행합니다.
- **`"english"`** — 영문자일 경우 단어 단위로 줄바꿈을 자동 수행합니다.
영문자 이외의 문자는 글자 단위로 줄바꿈을 자동 수행합니다.

**Remark**

- -nexa-word-wrap 속성값을 설정하지 않으면 undefined 가 설정되고, "none" 으로 동작합니다.

- 스크립트로 접근 시 속성명은 "wordWrap"을 사용해야 합니다.

- 자동 줄바꿈이 수행되면 텍스트 정렬의 기준점이 변경될 수 있습니다.

- 스크롤바가 표시되는 컴포넌트도 자동 줄바꿈을 설정할 수 있습니다.

- "english"로 설정 시 한 단어는 공백(Space, Tab 등) 으로 구분합니다.


---

### accessibilityaction

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > accessibilityaction

**Description**

CellSubCellControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.accessibilityaction[= strAction]
```

**Setting Syntax**

```javascript
this.CellSubCellControl00.accessibilityaction = "Accessibility Action Message"; 
this.CellSubCellControl00.accessibilityaction = "Select by direction key";
```
- **`strAction`** — accessibilitydescreadtype 속성값에 "action"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 컴포넌트에 선택상자 이동 시 사용자가 추가적인 정보를 얻기 위해 필요한 동작을 안내하는 용도로 사용합니다. 
  예를 들어 컴포넌트 특성에 따라 다음과 같이 속성값을 설정할 수 있습니다.
  
  - CheckBox 컴포넌트의 경우 아래와 같은 안내문을 accessibilityaction 속성값으로 설정할 수 있습니다.
  "선택 상태를 전환하려면 스페이스 바를 누릅니다."
  
  - WebBrowser, WebView 컴포넌트의 경우 스크린 리더 사용자를 위한 안내문을 accessibilityaction 속성값으로 설정할 수 있습니다.
  "웹 브라우저 컴포넌트 내 콘텐츠를 이용하기 위해서는 가상커서를 해제해 주세요."
  그리고 WebBrowser, WebView 컴포넌트를 벗어났을 때 필요한 안내문을 accessibilityleavemessage 속성값으로 설정합니다.
  "가상커서를 설정해 주세요"


---

### accessibilitydesclevel

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > accessibilitydesclevel

**Description**

CellSubCellControl 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.accessibilitydesclevel[= enumLevel]
```

**Setting Syntax**

```javascript
enumLevel ::= 'all' | 'self' | 'child' | 'none'
```
```javascript
this.CellSubCellControl00.accessibilitydesclevel = "all";
```
- **`"all"`** — CellSubCellControl 와 자식 컴포넌트에 대한 접근성을 모두 출력합니다.
- **`"self"`** — CellSubCellControl 의 접근성만 출력하고 자식 컴포넌트의 접근성은 출력하지 않습니다.
- **`"child"`** — CellSubCellControl 의 접근성은 출력하지 않고, 자식 컴포넌트의 접근성은 출력합니다.
- **`"none"`** — CellSubCellControl 와 자식 컴포넌트에 대한 접근성을 모두 출력하지 않습니다.

**Remark**

- accessibilitydesclevel 속성값을 설정하지 않으면 "all" 로 적용됩니다.

- Button 과 같이 자식 컴포넌트가 없는 컴포넌트는 "all" 또는 "child" 로 설정 시 "self" 로 적용됩니다.

- Div 와 같은 컨테이너 컴포넌트는 "child" 설정 시 실제 컨텐츠의 접근성만을 출력합니다.

- accessibilitydesclevel 속성은 선택상자의 이동에 영향을 주지 않으므로 방향키로 선택상자가 CellSubCellControl 에 이동되게 하지 않으려면 accessibilityenable 속성을 설정하여야 합니다.


---

### accessibilitydescription

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > accessibilitydescription

**Description**

CellSubCellControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.accessibilitydescription[= strDescription]
```

**Setting Syntax**

```javascript
this.CellSubCellControl00.accessibilitydescription = "Option";
```
- **`strDescription`** — accessibilitydescreadtype 속성값에 "description"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.


---

### accessibilityenable

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > accessibilityenable

**Description**

CellSubCellControl 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.accessibilityenable[= bEnable]
```

**Setting Syntax**

```javascript
bEnable ::= 'true' | 'false'
```
```javascript
this.CellSubCellControl00.accessibilityenable = false;
```
- **`true`** — CellSubCellControl 에 선택상자가 이동되면 접근성 관련 속성값을 출력합니다.

방향키 또는 제스처로 선택상자 이동 시 Static 과 같이 포커스를 갖지 않는 컴포넌트에도 선택상자가 이동됩니다.
- **`false`** — CellSubCellControl 에 선택상자가 이동되어도 접근성 관련 속성값을 출력하지 않습니다.

데스크탑 환경에서 방향키로 선택상자가 CellSubCellControl 에 이동되지 않습니다.
모바일 환경에서 제스처로 선택상자가 CellSubCellControl 에 이동되지 않습니다.

**Remark**

- accessibilityenable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 선택상자 이동 시 컴포넌트의 ARIA-LABEL + Status + Role 순서로 정보가 조합되어 접근성으로 출력됩니다.
   각 정보의 조합순서는 스크린 리더의 종류에 따라 달라질 수 있습니다.
   > ARIA-LABEL : Environment 의 accessibilitydescreadtype 속성에 설정된 속성값이 반영됩니다.
   > Status : CellSubCellControl 의 현재 상태가 반영됩니다.
   > Role : accessibilityrole 속성값이 반영됩니다. accessibilityrole 속성값을 설정하지 않으면 CellSubCellControl 의 고유 Role 이 반영됩니다.

- accessibilityenable 속성값이 false 일 때 데스크탑 환경에서 방향키 외의 방법으로 선택상자를 CellSubCellControl 로 이동시키면 스크린 리딩 프로그램에서 임의의 값을 출력할 수 있습니다.


◆ 컨테이너 컴포넌트 선택상자 이동 제약

아래와 같은 환경에서 컨테이너 컴포넌트로 선택상자가 이동하지 않고 컨테이너 컴포넌트 내에 배치된 컴포넌트로 이동합니다.
- Android, iOS/iPadOS 운영체제에서 실행 시 (Div, PopupDiv, TabpageControl, View)
- Windows 운영체제에서 센스리더 가상커서 사용 시 (Div, PopupDiv, View)


---

### accessibilitylabel

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > accessibilitylabel

**Description**

SubCell에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.accessibilitylabel[= strLabel]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, "accessibilitylabel", "OK Button" );
this.Grid00.setSubCellProperty( "body", 0, "accessibilitylabel", "[@static00]" );
this.Grid00.setSubCellProperty( "body", 0, "accessibilitylabel", "[@static00][@static01]" );
this.Grid00.setSubCellProperty( "body", 0, "accessibilitylabel", "[@static00][@static01] OK Button" );
```
- **`strLabel`** — accessibilitydescreadtype 속성값에 "label"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.
문자열로 설정하거나 Grid 컴포넌트와 부모가 같은 컴포넌트의 accessibilitylabel 속성값을 참조할 수 있습니다.
다른 컴포넌트 참조 시에는 "[@ComponentID]" 형식으로 컴포넌트의 id를 대괄호와 "@" 문자를 사용하여 설정합니다.
참조하는 참조값에 해당하는 컴포넌트를 찾을 수 없는 경우에는 참조값 자체가 문자열로 처리됩니다.

**Remark**

- enableaccessibility 속성값이 true인 경우만 적용되는 속성입니다.

- accessibilitydescreadtype 속성값에 "label"이 포함되었으나 accessibilitylabel 속성값을 설정하지 않으면 스크린 리더의 음성 출력 대상에 포함하지 않습니다.


---

### accessibilityrole

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > accessibilityrole

**Description**

CellSubCellControl에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.accessibilityrole[= enumRole]
```

**Setting Syntax**

```javascript
enumRole ::= 'none' | 'alert' | 'application' | 'button' | 'calendar' | 'chart' | 'checkbox' | 'columnheader' | 'combobox' | 'datepicker' | 'edit' | 'fileupload' | 'form' | 'frame' | 'grid' | 'gridcell' | 'groupbox' | 'heading' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6' | 'image' | 'link' | 'listbox' | 'menubar' | 'progressbar' | 'radio' | 'rowheader' | 'scrollbar' | 'spin' | 'static' | 'statusbar' | 'tab' | 'tabpage' | 'textarea' | 'titlebar' | 'toolbar' | 'tooltip' | 'treegrid' | 'treeitem' | 'webbrowser'
```
```javascript
this.CellSubCellControl00.accessibilityrole = "none"; 
this.CellSubCellControl00.accessibilityrole = "button";
```
- **`enumRole`** — - "none": 스크린 리더에서 Role 정보를 처리하지 않습니다.

- 속성값을 설정하지 않으면 컴포넌트/오브젝트에 따라 기본 accessibilityrole 값이 적용됩니다.
"application": Application, MainFrame
"button": Button, FileDownload
"calendar": Calendar
"checkbox": CheckBox
"combobox": ComboBox
"edit": Edit, MaskEdit
"frame": FrameSet, ChildFrame
"fileupload": FileUpload
"form": Form, Div
"groupbox": GroupBox
"image": ImageViewer, Sketch
"listbox": ListBox
"menubar": Menu
"progressbar": ProgressBar
"radio": Radio
"spin": Spin
"static": Static
"tab": Tab
"tabpage": TabPage
"textarea": TextArea
"webbrowser": WebBrower

- Grid 컴포넌트의 경우 하위 오브젝트까지 Role을 적용합니다.
"grid": Grid
"gridcell": Grid Cell
"columnheader": Grid Column Head
"rowheader": Grid Row Head
"treegrid": TreeGrid
"treeitem": TreeItem, TreeCell

- 기능에 따라 컴포넌트 또는 오브젝트의 하위 오브젝트 영역에 아래와 같은 Role이 적용됩니다.
"alert": Alert, Confirm, UserConfirm
"chart": Chart
"datepicker": DatePicker
"link": Link
"scrollbar": ScrollBar
"statusbar": StatusBar
"titlebar": TitleBar
"toolbar": ToolBar
"tooltip": Tooltip

- "heading" 또는 "heading1"부터 "heading6" 사이의 값으로 속성값을 설정하면 role, aria-level 값을 처리합니다.
예를 들어 속성값을 "heading3"으로 설정하면 Generate되는 코드 태그에 role="heading", aria-level="3" 형식으로 값을 처리합니다.
속성값을 "heading"으로 설정 시에는 "heading1"을 설정한 것과 같은 동작을 처리합니다.
accessibilityheadingnexthotkey, accessibilityheadingprevhotkey 속성값으로 설정한 단축키로 이동 시 사용할 수 있습니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- accessibilityenable 속성값을 설정하지 않으면 CellSubCellControl의 기본 Role 로 적용됩니다.

- 추가적인 속성값이 필요한 Role 설정 시 CellSubCellControl에 해당 속성이 없으면 스크린 리더에 따라 정상적으로 정보를 읽지 못할 수 있습니다.


---

### autosizecol

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > autosizecol

**Description**

Column 의 너비가 자동조절 되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.autosizecol[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'default' | 'limitmin' | 'limitmax'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "autosizecol", "default" );
```
- **`"none"`** — Column 의 너비를 자동조절 시 기준에서 제외됩니다.
- **`"default"`** — SubCell 에 표시되는 내용에 맞게 Column 의 너비를 자동조절합니다.
- **`"limitmin"`** — 디자인 시 설정된 SubCell 의 너비보다 자동조절되는 너비가 클 경우 자동조절 합니다.
디자인 시 설정된 SubCell 의 너비보다 자동조절되는 너비가 작을 경우 자동조절하지 않습니다.
- **`"limitmax"`** — 디자인 시 설정된 SubCell 의 너비보다 자동조절되는 너비가 클 경우 자동조절하지 않습니다.
디자인 시 설정된 SubCell 의 너비보다 자동조절되는 너비가 작을 경우 자동조절합니다.

**Remark**

- autosizecol 속성값을 설정하지 않으면 "default"로 적용됩니다.

- autofittype 속성값이 "col" 일 경우 autosizecol 속성값은 무시됩니다.

- SubCell 의 autosizecol 속성은 Grid 의 autosizingtype 속성이 설정되어 있을 경우에만 적용됩니다.

- Grid 의 autosizingtype 속성값과 autosizebandtype 속성값에 따라 Column 의 너비를 결정하는 SubCell 이 정해집니다.


---

### autosizerow

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > autosizerow

**Description**

Row 의 높이가 자동조절 되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.autosizerow[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'default' | 'limitmin' | 'limitmax'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "autosizerow", "default" );
```
- **`"none"`** — Row 의 높이를 자동조절 시 기준에서 제외됩니다.
- **`"default"`** — SubCell 에 표시되는 내용에 맞게 Row 의 높이를 자동조절합니다.
- **`"limitmin"`** — 디자인 시 설정된 SubCell 의 높이보다 자동조절되는 높이가 클 경우 자동조절합니다.
디자인 시 설정된 SubCell 의 높이보다 자동조절되는 높이가 작을 경우 자동조절하지 않습니다.
- **`"limitmax"`** — 디자인 시 설정된 SubCell 의 높이보다 자동조절되는 높이가 클 경우 자동조절하지 않습니다.
디자인 시 설정된 SubCell 의 높이보다 자동조절되는 높이가 작을 경우 자동조절 합니다.

**Remark**

- autosizerow 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- SubCell 의 autosizerow 속성은 Grid 의 autosizingtype 속성이 설정되어 있을 경우에만 적용됩니다.

- Grid 의 autosizingtype 속성값과 autosizebandtype 속성값에 따라 Row 의 높이를 결정하는 SubCell 이 정해집니다.


---

### background

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > background

**Description**

SubCell 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.background[= strbackground]
```

**Setting Syntax**

```javascript
strBackground ::= [<bg-image> | <linear-gradient>] [<background-origin> [<background-clip>]] [<background-color>]

<bg-image> ::= 'none' | <imageurl> [<repeat-style>] [<position>]
   <imageurl> ::= 'URL(' <Theme-Image> | <Web-Image> ')'
   <repeat-style> ::= 'repeat-x' | 'repeat-y' | 'repeat' | 'no-repeat'
   <position> ::= <horizontal-position> <vertical-position> ['/' <background-size>]
      <horizontal-position> ::= 'left' | 'center' | 'right' | <pos-percentage> '%'
      <vertical-position> ::= 'top' | 'center' | 'bottom' | <pos-percentage> '%'
      <background-size> ::= 'auto' | 'cover' | 'contain' | (<length> 'px' | <percentage> '%') {1,2}

<linear-gradient> ::= 'linear-gradient(' [<angle> , ] <color-stop> ')'
   <angle> ::= 'to left' | 'to right' | 'to top' | 'to bottom' | 'to left top' | 'to left bottom' | 'to right top' | 'to right bottom'
   <color-stop> ::= <startcolor-stop> [<listcolor-stop>] <endcolor-stop>
      <startcolor-stop> ::= <color> [<percentage>'%']
      <endcolor-stop> ::= <color> [<percentage>'%']
      <listcolor-stop> ::= <color> [<percentage>'%"] [,<listcolor-stop>]*
         <color> ::= <NamedColor> | <NumericColor>

<background-origin> ::= 'border-box' | 'padding-box'
<background-clip> ::= 'border-box' | 'padding-box'
<background-color> ::= <NamedColor> | <NumericColor>
```
```javascript
* XCSS
background : #ffffaa;
background : "URL('./images/smiley.gif')" no-repeat center center #ffffaa;
background : linear-gradient( red , blue , yellow );

* Script ( normal property )
this.Grid00.setSubCellProperty( "body", 0, 0, "background", "#ffffaa");
this.Grid00.setSubCellProperty( "body", 0, 0, "background", "URL('./images/smiley.gif')" no-repeat center center #ffffaa);
this.Grid00.setSubCellProperty( "body", 0, 0, "background", "linear-gradient( red , blue , yellow )");
this.Grid00.setSubCellProperty( "body", 0, 0, "background", "linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0))");
```
- **`<bg-image>`** — 배경에 표시될 이미지를 "'none' | <imageurl> [<repeat-style>] [<position>]" 형식으로 설정합니다.

<background-color> 값이 설정되어 있으면 배경색 위로 이미지가 표시됩니다.

"none" 으로 설정하면 이미지를 설정하지 않습니다.
<imageurl> 값으로 이미지를 설정할 수 있습니다.
<repeat-style> 값으로 이미지의 반복표시 방향을 설정할 수 있습니다.
<position> 값으로 이미지의 표시위치를 설정할 수 있습니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<imageurl>`** — 배경에 표시될 이미지를 "'URL(' <Theme-Image> | <Web-Image> ')'" 형식으로 설정합니다.

"URL ( [이미지경로] )" 형식으로 테마 또는 웹의 이미지를 설정합니다.
- **`<Theme-Image>`** — 테마에 선언된 이미지를 "theme://images\이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/파일명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<repeat-style>`** — 배경에 표시될 이미지의 반복표시 방향을 설정합니다.

"repeat-x" 설정 시 이미지가 가로 방향으로 반복표시 됩니다.
"repeat-y" 설정 시 이미지가 세로 방향으로 반복표시 됩니다.
"repeat" 설정 시 이미지가 가로,세로 방향으로 모두 반복표시 됩니다.
"no-repeat" 설정 시 이미지가 반복표시 되지 않습니다.

값을 설정하지 않으면 "repeat" 로 적용됩니다.
- **`<horizontal-position>`** — 배경에 표시될 이미지의 가로 위치를 설정합니다.

"left" 설정 시 CellSubCellControl 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 CellSubCellControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 CellSubCellControl 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 CellSubCellControl 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 CellSubCellControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 CellSubCellControl 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<horizontal-position> 값을 설정하고, <vertical-position> 값을 설정하지 않으면 <vertical-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <vertical-position> 은 "top" 으로 적용됩니다.
- **`<pos-percentage>`** — 배경에 표시될 이미지의 가로/세로 위치를 비율로 설정합니다.

<horizontal-position> 에 "0%" 설정 시 "left" 와 같은 위치로 적용됩니다.
<horizontal-position> 에 "50%" 설정 시 "center" 와 같은 위치로 적용됩니다.
<horizontal-position> 에 "100%" 설정 시 "right" 과 같은 위치로 적용됩니다.
<vertical-position> 에 "0%" 설정 시 "top" 와 같은 위치로 적용됩니다.
<vertical-position> 에 "50%" 설정 시 "center" 와 같은 위치로 적용됩니다.
<vertical-position> 에 "100%" 설정 시 "bottom" 과 같은 위치로 적용됩니다.

0 보다 작거나 100 보다 큰 값을 설정 시 CellSubCellControl 의 영역을 벗어난 가상의 위치로 적용됩니다.

값 설정 시 "%" 단위를 생략할 수 없습니다.
- **`<background-size>`** — 배경에 표시될 이미지의 크기를 설정합니다.
- auto: 원본 이미지 크기를 유지합니다.
- cover: 이미지 비율을 유지하는 한도 내에서 배경에 빈 공간이 없도록 가장 크게 설정합니다.
  width 또는 height 길이가 긴 쪽은 잘려서 표시될 수 있습니다.
- contain: 이미지가 잘리지 않고 비율을 유지하는 한도 내에서 가장 크게 설정합니다.
- <length> | <percentage>: 이미지의 width, height 크기 또는 컴포넌트 대비 비율을 설정합니다. 
  width 값만 설정하면 원본 이미지 비율에 따라 height 크기를 자동으로 처리합니다.
  height 값만 설정할 수는 없습니다. 
  음수값은 설정할 수 없습니다.
- **`<linear-gradient>`** — 배경에 표시될 그라데이션을 "'linear-gradient(' [<angle> , ] <color-stop> ')'" 형식으로 설정합니다.

<background-color> 값이 설정되어 있으면 배경색 위로 그라데이션이 표시됩니다.

"linear-gradient ( [방향, 색상값, 색상값, ...] )" 형식으로 그라데이션 방향과 색상을 설정할 수 있습니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<angle>`** — 그라데이션의 표시 방향을 설정합니다.

"to left" 설정 시 오른쪽에서 왼쪽 방향으로 그라데이션이 표시됩니다.
"to right" 설정 시 왼쪽에서 오른쪽 방향으로 그라데이션이 표시됩니다.
"to top" 설정 시 아래쪽에서 윗쪽 방향으로 그라데이션이 표시됩니다.
"to bottom" 설정 시 윗쪽에서 아래쪽 방향으로 그라데이션이 표시됩니다.
"to left top" 설정 시 오른쪽 아래 방향에서 왼쪽 윗 방향으로 그라데이션이 표시됩니다.
"to left bottom" 설정 시 오른쪽 윗 뱡향에서 왼쪽 아래 방향으로 그라데이션이 표시됩니다.
"to right top" 설정 시 왼쪽 아래 방향에서 오른쪽 윗 방향으로 그라데이션이 표시됩니다.
"to right bottom" 설정 시 왼쪽 윗 방향에서 오른쪽 아래 방향으로 그라데이션이 표시됩니다.

값을 설정하지 않으면 "to bottom"으로 적용됩니다.
- **`<color-stop>`** — 그라데이션의 시작점, 끝점, 중간점의 색을 "<startcolor-stop> [<listcolor-stop>] <endcolor-stop>" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 시작점과 끝점의 위치가 결정됩니다.
예를 들어 <angle> 값이 "to left" 이면 CellSubCellControl 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 CellSubCellControl 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

<listcolor-stop> 에 그라데이션 중간점의 색을 한개 이상 설정할 수 있으며 <percentage> 값 생략 시 균등하게 표시됩니다.
- **`<startcolor-stop>`** — 그라데이션의 시작점 색을 "<color> [<percentage>'%']" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 시작점 위치가 결정됩니다.
시작점의 <percentage> 값을 "0" 이상으로 설정 시 "시작점~설정값"까지 동일한 색상으로 표시됩니다.
- **`<endcolor-stop>`** — 그라데이션의 끝점 색을 "<color> [<percentage>'%']" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 끝점 위치가 결정됩니다.
끝점의 <percentage> 값을 "100" 이하로 설정 시 "설정값~끝점"까지 동일한 색상으로 표시됩니다.
- **`<listcolor-stop>`** — 그라데이션의 중간점 색을 "<color> [<percentage>'%"] [,<listcolor-stop>]*" 형식으로 설정합니다.

시작점과 끝점 사이에 적용될 중간색을 ","로 구분하여 여러개 설정할 수 있습니다.
뒤에 선언된 색의 <percentage> 값은 먼저 선언된 색의 <percentage> 값보다 커야 합니다.
- **`<color>`** — 그라데이션 색상을 색상이름 또는 색상코드로 설정합니다.
- **`<percentage>`** — <color> 에 해당하는 색이 적용될 위치를 비율값으로 설정합니다.

<angle> 값에 의해 결정된 시작점이 "0%" 로 적용됩니다.
<angle> 값에 의해 결정된 끝점이 "100%" 로 적용됩니다.

0 보다 작거나 100 보다 큰 값을 설정 시 CellSubCellControl 의 영역을 벗어난 가상의 위치로 적용됩니다.
예를 들어 "150%" 설정 시 시작점에서 끝점까지 거리의 반만큼 끝점에서 벗어난 위치에 <color> 값이 적용됩니다.

<percentage> 값을 생략하면 균등한 위치에 <color> 값이 적용됩니다.
값 설정 시 "%" 단위를 생략할 수 없습니다.
- **`<background-origin>`** — 배경으로 처리될 기준영역을 설정합니다.

"border-box" 설정 시 Border 를 포함한 영역이 배경영역으로 처리됩니다.

"padding-box" 설정 시 Border 의 안쪽 영역이 배경영역으로 처리됩니다.
"padding-box" 설정 시 그라데이션의 시작점, 끝점과 배경이미지의 반복 기준위치가 Border 안쪽 영역으로 처리됩니다.

값을 설정하지 않으면 "padding-box" 로 적용됩니다.
- **`<background-clip>`** — 배경이 실제로 표시될 영역을 설정합니다.

"border-box" 설정 시 Border 를 포함한 영역에 배경이 표시됩니다.
"padding-box" 설정 시 Border 의 안쪽 영역에 배경이 표시됩니다.

값을 설정하지 않으면 <background-origin> 에 설정한 값이 동일하게 적용됩니다.
<background-origin> 값도 설정하지 않았을 경우 "border-box" 로 적용됩니다.
- **`<background-color>`** — 배경에 표시될 색을 색상이름 또는 색상코드로 설정합니다.

<bg-image> 또는 <linear-gradient> 값이 설정되어 있다면 배경색은 배경이미지 또는 그라데이션 아래에 표시됩니다.
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 CellSubCellControl 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- background 속성값을 설정하지 않으면 undefined 가 설정되고, "transparent" 로 동작합니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.

- 배경의 기준영역과 표시영역은 <background-origin>, <background-clip> 값으로 각각 설정합니다.
   SubCell 은 top/right/bottom/left 테두리(Border) 모두를 표시하지 않고, right 와 bottom 만으로 인접한 Cell 과 테두리를 연결하는 방식으로 처리합니다.
   따라서 특정 SubCell 의 left 는 왼쪽 Cell 의 right 로 대체되고, top 은 윗쪽 Cell 의 bottom 으로 대체됩니다.
   배경 영역 설정 시 이와 같은 특성을 고려하여야 합니다.

- 배경 이미지를 중앙에 위치시키려면 <position> 값을 "center" 또는 "center center" 로 설정하여야 합니다.

- 배경이미지와 배경색을 모두 설정하면 배경색 위에 이미지가 표시됩니다.
   그라데이션과 배경색을 모두 설정하면 배경색 위에 그라데이션이 표시됩니다.

- 그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
   두 값을 동시에 설정 시 오동작이 발생할 수 있습니다.


---

### border-radius

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > border-radius

**Description**

SubCell 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.borderRadius[= strborderradius]
```

**Setting Syntax**

```javascript
strborderradius ::= <horizontal-radius>{4} ['/' <vertical-radius>{4}]
```
```javascript
* XCSS
border-radius : 10px;
border-radius : 5px 6px 10px / 5px 10px;

* Script ( normal property )
this.Grid00.setSubCellProperty( "body", 0, 0, "borderRadius", "10px");
this.Grid00.setSubCellProperty( "body", 0, 0, "borderRadius", "5px 6px 10px / 5px 10px");
```
- **`<horizontal-radius>`** — 모서리를 둥글게 표시하기 위한 가로크기를 설정합니다.

pixel 단위로 입력하며 스페이스를 구분자로 4개값까지 설정할 수 있습니다.

값을 1회 입력 시 top-left/top-right/bottom-right/bottom-left 모서리의 가로크기로 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top-left/bottom-right, top-right/bottom-left 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top-left, top-right/bottom-left, bottom-right 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top-left, top-right, bottom-right, bottom-left 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
- **`<vertical-radius>`** — 모서리를 둥글게 표시하기 위한 세로크기를 설정합니다.

pixel 단위로 입력하며 스페이스를 구분자로 4개값까지 설정할 수 있습니다.

값을 1회 입력 시 top-left/top-right/bottom-right/bottom-left 모서리의 세로크기로 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top-left/bottom-right, top-right/bottom-left 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top-left, top-right/bottom-left, bottom-right 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top-left, top-right, bottom-right, bottom-left 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.

**Remark**

- border-radius 속성값을 설정하지 않으면 undefined 가 설정되고, "0px" 로 동작합니다. 

- 스크립트로 접근 시 속성명은 "borderRadius" 를 사용해야 합니다.

- <horizontal-radius>와 <vertical-radius>는 "/" 문자로 구분하여 입력합니다.

- Calendar, Combo 와 같이 하위 컨트롤이 존재하는 컴포넌트는 하위컨트롤에도 border-radius 속성을 설정해야 정상적으로 모서리가 표시됩니다.


◆ NRE 제약

- border-radius 속성을 설정하면 모든 테두리가 같은 색으로 적용됩니다.
   -nexa-border 속성에서 top 에 적용된 색이 모든 테두리에 적용됩니다.


---

### calendarautoselect

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > calendarautoselect

**Description**

SubCell 의 edittype 속성값이 "date" 일 경우 편집영역이 활성화 되면 텍스트를 전체선택 할지 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.calendarautoselect[= bAutoselect]
```

**Setting Syntax**

```javascript
bAutoselect ::= 'true' | 'false'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "calendarautoselect", "true" );
```
- **`true`** — SubCell 의 편집영역이 활성화 될 때 텍스트가 전체선택 됩니다.
- **`false`** — SubCell 의 편집영역이 활성화 될 때 텍스트가 선택되지 않습니다.

**Remark**

- calendarautoselect 속성값을 설정하지 않으면 false 로 적용됩니다.


◆ web runtime environment 제약

- 마우스 또는 터치에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 정상동작합니다.
  그러나 setFocus() 메소드에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 되지 않을 수 있습니다.


---

### calendarbackgroundcol

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > calendarbackgroundcol

**Description**

SubCell이 Calendar 형식일 때 Calendar 의 특정날짜에 배경색을 표시하기 위해 calendardataset 속성에 설정된 Dataset 오브젝트의 Column을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.calendarbackgroundcol[= strColumnID]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "calendarbackgroundcol", "column0");
```
- **`strColumnID`** — 배경색이 정의된 Column 의 ID를 문자열로 설정합니다.

**Remark**

- calendardataset 속성에 설정된 Dataset 오브젝트의 Column만 설정할 수 있습니다.
- calendardatecol 속성에 설정된 특정날짜에 calendarbackgroundcol 에 설정된 배경색이 적용됩니다.


---

### calendarbordercol

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > calendarbordercol

**Description**

SubCell이 Calendar 형식일 때 Calendar 의 특정날짜에 테두리을 표시하기 위해 calendardataset 속성에 설정된 Dataset 오브젝트의 Column을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.calendarbordercol[= strColumnID]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "calendarbordercol", "column0");
```
- **`strColumnID`** — 테두리값이 정의된 Column 의 ID를 문자열로 설정합니다.

**Remark**

- calendardataset 속성에 설정된 Dataset 오브젝트의 Column만 설정할 수 있습니다. 
- calendardatecol 속성에 설정된 특정날짜에 calendarbordercol 에 설정된 테두리값을 적용됩니다.


---

### calendarbuttonsize

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > calendarbuttonsize

**Description**

SubCell 이 Calendar 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.calendarbuttonsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "calendarbuttonsize", "30");
this.Grid00.setSubCellProperty( "body", 0, 0, "calendarbuttonsize", "30 20");
```
- **`<strWidth>`** — 드롭다운 버튼의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 드롭다운 버튼의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- calendarbuttonsize 속성값을 설정하지 않으면 Grid 의 cellcalendarbuttonsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### calendardataset

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > calendardataset

**Description**

SubCell이 Calendar 형식일 때 Calendar 에 특정날짜를 표시하기 위해 Dataset 오브젝트 ID를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.calendardataset[= strDatasetID]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "calendardataset", "Dataset00");
```
- **`strDatasetID`** — Calendar에 표시할 특정날짜와 효과에 대한 데이터가 담긴 Dataset 의 ID를 문자열로 설정합니다.

**Remark**

- Dataset 오브젝트에는 calendardatecol, calendarbackgroundcol, calendarbordercol, calendartextcolorcol 속성에 설정할 수 있는 Column 이 있어야 합니다.
   > calendardatecol : 특정날짜의 데이터가 있는 Column을 설정합니다.
   > calendarbackgroundcol : 특정날짜의 배경색 데이터가 있는 Column을 설정합니다.
   > calendarbordercol : 특정날짜의 테두리 데이터가 있는 Column을 설정합니다.
   > calendartextcolorcol : 특정날짜의 날짜색 데이터가 있는 Column을 설정합니다.


---

### calendardatecol

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > calendardatecol

**Description**

SubCell이 Calendar 형식일 때 Calendar 에 특정날짜를 표시하기 위해 calendardataset 속성에 설정된 Dataset 오브젝트의 Column을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.calendardatecol[= strColumnID]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "calendardatecol", "column0");
```
- **`strColumnID`** — 특정날짜가 정의된 Column 의 ID를 문자열로 설정합니다.

**Remark**

- calendardataset 속성에 설정된 Dataset 오브젝트의 Column만 설정할 수 있습니다.
- calendardatecol 속성에 설정된 특정날짜에 calendarbackgroundcol, calendarbordercol, calendartextcolorcol 에 설정된 효과가 적용됩니다.


---

### calendardateformat

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > calendardateformat

**Description**

SubCell 의 displaytype 속성값이 "date" 또는 "calendarcontrol" 일 경우 표시되는 날짜의 형식을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.calendardateformat[= strFormat]
```

**Setting Syntax**

```javascript
strFormat ::= <maskchar> | 'LONGDATE' | 'SHORTDATE'

<maskchar> ::= [<Year>] [<Month>] [<Day>] [<Week>] [<Hour>] [<Minute>] [<Second>] [<MiliSec>]


* <maskchar>는 날짜와 시간을 표시하기 위한 마스크 문자의 조합으로 각 요소의 순서변경과 생략이 가능합니다.
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "calendardateformat", "yyyy-MM-dd ddd");
this.Grid00.setSubCellProperty( "body", 0, 0, "calendardateformat", "yyyy-MM-dd ddd HH:mm:ss");
```
- **`<Year>`** — 연도를 표시하는 마스크 문자를 설정합니다.

"yy" 설정 시 연도의 뒤 두자리만 표시합니다.
"yyyy" 설정 시 연도를 네자리로 모두 표시합니다.
- **`<Month>`** — 월을 표시하는 마스크 문자를 설정합니다.

"M" 설정 시 1월~9월은 한자리로 표시하고 10월~12월은 두자리로 표시합니다.
"MM" 설정 시 모든 월을 두자리로 표시하고 1월~9월은 앞자리에 "0"을 표시합니다.
"MMM" 설정 시 로케일 설정값에 따라 축약된 형식으로 월 문자열을 표시합니다.
"MMMM" 설정 시 로케일 설정값에 따라 확장된 형식으로 월 문자열을 표시합니다.

* 예를 들어 locale 속성값이 "en_US", text 속성값이 "20241105"인 경우 calendardateformat 속성값에 따라 화면에 표시되는 데이터는 아래와 같습니다.
- "MMM d, yyyy": Nov 5, 2024
- "MMMM d, yyyy": November 5, 2024
- **`<Day>`** — 일을 표시하는 마스크 문자를 설정합니다.

"d" 설정 시 1일~9일은 한자리로 표시하고 나머지 일은 두자리로 표시합니다.
"dd" 설정 시 모든 일을 두자리로 표시하고 1일~9일은 앞자리에 "0"을 표시합니다.
- **`<Week>`** — 요일을 표시하는 마스크 문자를 설정합니다.

"ddd" 설정 시 축약된 요일명을 표시합니다.
"dddd" 설정 시 전체 요일명을 표시합니다.
- **`<Hour>`** — 시간을 표시하는 마스크 문자를 설정합니다.

"h" 설정 시 12시간을 기준으로 1시~9시는 한자리로 표시하고 나머지 시간은 두자리로 표시합니다.
"hh" 설정 시 12시간을 기준으로 모든 시를 두자리로 표시하고 1시~9시는 앞자리에 "0"을 표시합니다.
"H" 설정 시 24시간을 기준으로 1시~9시는 한자리로 표시하고 나머지 시간은 두자리로 표시합니다.
"HH" 설정 시 24시간을 기준으로 모든 시를 두자리로 표시하고 1시~9시는 앞자리에 "0"을 표시합니다.
- **`<Minute>`** — 분을 표시하는 마스크 문자를 설정합니다.

"m" 설정 시 1분~9분은 한자리로 표시하고 나머지 분은 두자리로 표시합니다.
"mm" 설정 시 모든 분을 두자리로 표시하고 1분~9분은 앞자리에 "0"을 표시합니다.
- **`<Second>`** — 초를 표시하는 마스크 문자를 설정합니다.

"s" 설정 시 1초~9초는 한자리로 표시하고 나머지 초는 두자리로 표시합니다.
"ss" 설정 시 모든 초를 두자리로 표시하고 1초~9초는 앞자리에 "0"을 표시합니다.
- **`<MiliSec>`** — 밀리초를 표시하는 마스크 문자를 설정합니다.

"sss" 설정 시 모든 밀리초를 세자리로 표시하고 1밀리초~99밀리초는 앞자리에 "0"을 표시합니다.
- **`"LONGDATE"`** — 넥사크로 내부에 정의된 국가별 날짜 형식에서 "자세한 날짜" 형식을 추출하여 포맷으로 설정합니다.
- **`"SHORTDATE"`** — 넥사크로 내부에 정의된 국가별 날짜 형식에서 "간단한 날짜" 형식을 추출하여 포맷으로 설정합니다.

**Remark**

- calendardateformat 속성값을 설정하지 않으면 "yyyy-MM-dd ddd"로 적용됩니다.

- SubCell 이 편집가능한 상태일 때 표시되는 날짜 형식은 calendareditformat 속성에 설정합니다.

- 정의된 마스크 문자 이외의 문자를 설정하는 경우 화면에 그대로 표시되며 해당 문자를 편집할 수 없습니다.


◆ Mobile 제약

- calendartype 속성값이 "normal" 이고 calendarpopuptype 속성값이 "system" 이거나 설정하지 않았을 경우 calendardateformat 속성값이 적용되지 않습니다.
   모바일 환경에 따라 브라우저 또는 시스템의 날짜형식이 적용됩니다.
   브라우저 또는 시스템의 날짜형식이 적용될 때 사용자가 설정한 calendardateformat 속성값을 변경시키지 않습니다.


◆ Excel Export 제약

- Excel 은 "LONGDATE" 를 지원하지 않으므로 "LONGDATE" 를 설정하여도 "SHORTDATE" 로 Export 됩니다.

- Excel Export 시 특정 locale 은 지원되지 않습니다.
  "ar_AE","ar_BH","ar_DZ","ar_EG","ar_IQ","ar_JO","ar_KW","ar_LB","ar_LY","ar_MA","ar_OM","ar_QA","ar_SA","ar_SY","ar_TN","ar_YE","de_DE","he_IL" 등


---

### calendardaysize

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > calendardaysize

**Description**

SubCell 이 Calendar 형식일 때 팝업으로 표시되는 달력의 각 날짜영역크기를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.calendardaysize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [<strHeight>]
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "calendardaysize", "10 10");
```
- **`<strWidth>`** — 팝업달력의 각 날짜영역 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 팝업달력의 각 날짜영역 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### calendardisplayinvalidtext

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > calendardisplayinvalidtext

**Description**

SubCell 이 Calendar 형식일 때 바인드 된 데이터값이 유효하지 않으면 대체되어 표시할 문자열을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.calendardisplayinvalidtext[= enumType]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "calendardisplayinvalidtext", "Data Error");
```
- **`strText`** — Cell 에 바인드 된 데이터가 NaN, ±Infinity, 유효하지 않은 값 일 때 Cell 에 표시될 대체 문자열을 설정합니다.

**Remark**

- calendardisplayinvalidtext 속성값을 설정하지 않으면 undefined 가 설정되고 "invalid value" 로 동작합니다.

- calendardisplayinvalidtype 속성값이 "invalidtext" 일 때만 적용되는 속성입니다.


---

### calendardisplayinvalidtype

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > calendardisplayinvalidtype

**Description**

SubCell 이 Calendar 형식일 때 바인드 된 데이터값이 유효하지 않으면 대체되어 표시할 형식을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.calendardisplayinvalidtype[= nHeight]
```

**Setting Syntax**

```javascript
enumType ::= 'default' | 'none' | 'invalidtext'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "calendardisplayinvalidtype", "none");
```
- **`"default"`** — Cell 에 "invalid text" 문자열을 표시합니다.
- **`"none"`** — Cell 에 바인드된 데이터값을 그대로 표시합니다.
- **`"invalidtext"`** — Cell 에 calendardisplayinvalidtext 속성값을 표시합니다.

**Remark**

- calendardisplayinvalidtype 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- 바인드 된 데이터가 NaN, ±Infinity, 유효하지 않은 값 일 때 적용되는 속성입니다.


---

### calendardisplaynulltext

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > calendardisplaynulltext

**Description**

SubCell 의 calendardisplaynulltype 속성값이 "nulltext" 일 경우 Cell 에 표시할 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.calendardisplaynulltext[= strText]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "calendardisplaynulltext", "No Data");
```
- **`strText`** — SubCell 에 바인드된 데이터가 null 일 때 SubCell 에 표시할 텍스트를 설정합니다.

**Remark**

- SubCell 에 포커스가 없을 때 대체 텍스트가 표시됩니다.


---

### calendardisplaynulltype

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > calendardisplaynulltype

**Description**

SubCell 의 displaytype 속성값이 "date" 또는 "calendarcontrol" 이고 바인드 된 값이 "null" 인 경우 SubCell 에 표시되는 값을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.calendardisplaynulltype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'default' | 'nulltext' | 'nullmask'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "calendardisplaynulltype", "default");
```
- **`"none"`** — 빈 문자열을 표시합니다.
- **`"default"`** — calendardateformat 속성값으로 설정된 형식에 따라 "0000/01/01" 값을 표시합니다.
- **`"nulltext"`** — calendardisplaynulltext 속성값을 표시합니다.
- **`"nullmask"`** — calendardateformat 속성값으로 설정된 형식에 빈 문자열을 표시합니다.


---

### calendareditformat

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > calendareditformat

**Description**

SubCell 의 edittype 속성값이 "date" 일 경우 입력받는 날짜의 형식을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.calendareditformat[= strFormat]
```

**Setting Syntax**

```javascript
strFormat ::= <maskchar> | 'LONGDATE' | 'SHORTDATE'

<maskchar> ::= [<Year>] [<Month>] [<Day>] [<Hour>] [<Minute>] [<Second>]


* <maskchar>는 날짜와 시간을 입력하기 위한 마스크 문자의 조합으로 각 요소의 순서변경과 생략이 가능합니다.
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "calendareditformat", "yyyy-MM-dd");
this.Grid00.setSubCellProperty( "body", 0, 0, "calendareditformat", "yyyy-MM-dd HH:mm:ss");
```
- **`<Year>`** — 연도를 표시하는 마스크 문자를 설정합니다.

"yy" 설정 시 연도의 뒤 두자리만 표시합니다.
"yyyy" 설정 시 연도를 네자리로 모두 표시합니다.
- **`<Month>`** — 월을 표시하는 마스크 문자를 설정합니다.

"M" 설정 시 1월~9월은 한자리로 표시하고 10월~12월은 두자리로 표시합니다.
"MM" 설정 시 모든 월을 두자리로 표시하고 1월~9월은 앞자리에 "0"을 표시합니다.
- **`<Day>`** — 일을 표시하는 마스크 문자를 설정합니다.

"d" 설정 시 1일~9일은 한자리로 표시하고 나머지 일은 두자리로 표시합니다.
"dd" 설정 시 모든 일을 두자리로 표시하고 1일~9일은 앞자리에 "0"을 표시합니다.
- **`<Hour>`** — 시간을 표시하는 마스크 문자를 설정합니다.

"H" 설정 시 24시간을 기준으로 1시~9시는 한자리로 표시하고 나머지 시간은 두자리로 표시합니다.
"HH" 설정 시 24시간을 기준으로 모든 시를 두자리로 표시하고 1시~9시는 앞자리에 "0"을 표시합니다.
- **`<Minute>`** — 분을 표시하는 마스크 문자를 설정합니다.

"m" 설정 시 1분~9분은 한자리로 표시하고 나머지 분은 두자리로 표시합니다.
"mm" 설정 시 모든 분을 두자리로 표시하고 1분~9분은 앞자리에 "0"을 표시합니다.
- **`<Second>`** — 초를 표시하는 마스크 문자를 설정합니다.

"s" 설정 시 1초~9초는 한자리로 표시하고 나머지 초는 두자리로 표시합니다.
"ss" 설정 시 모든 초를 두자리로 표시하고 1초~9초는 앞자리에 "0"을 표시합니다.
- **`"LONGDATE"`** — 넥사크로 내부에 정의된 국가별 날짜 형식에서 "자세한 날짜" 형식을 추출하여 포맷으로 설정합니다.
- **`"SHORTDATE"`** — 넥사크로 내부에 정의된 국가별 날짜 형식에서 "간단한 날짜" 형식을 추출하여 포맷으로 설정합니다.

**Remark**

- calendareditformat 속성값을 설정하지 않으면 "yyyy-MM-dd"로 적용됩니다.

- SubCell 에 포커스가 없을 때 표시되는 날짜 형식은 calendardateformat 속성에 설정합니다.

- 정의된 마스크 문자 이외의 문자를 설정하는 경우 화면에 그대로 표시되며 해당 문자를 편집할 수 없습니다.


◆ Mobile 제약

- calendartype 속성값이 "normal" 이고 calendarpopuptype 속성값이 "system" 이거나 설정하지 않았을 경우 calendareditformat 속성값이 적용되지 않습니다.
   모바일 환경에 따라 브라우저 또는 시스템의 날짜형식이 적용됩니다.
   브라우저 또는 시스템의 날짜형식이 적용될 때 사용자가 설정한 calendareditformat 속성값을 변경시키지 않습니다.


---

### calendarheadformat

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > calendarheadformat

**Description**

SubCell 이 Calendar 형식일 때 팝업달력의 상단에 표시되는 년/월의 순서를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.calendarheadformat[= strFormat]
```

**Setting Syntax**

```javascript
strFormat ::= 'yyyy.MM' | 'MM.yyyy'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "calendarheadformat", "MM.yyyy");
```
- **`"yyyy.MM"`** — 팝업달력 상단에 년,월 순으로 표시됩니다.
- **`"MM.yyyy"`** — 팝업달력 상단에 월,년 순으로 표시됩니다.

**Remark**

- calendarheadformat 속성값을 설정하지 않거나 허용하지 않는 값을 설정하면 "yyyy.MM" 으로 적용됩니다.


---

### calendarheadheight

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > calendarheadheight

**Description**

SubCell 이 Calendar 형식일 때 팝업달력에서 년/월이 표시되는 Head 영역의 높이를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.calendarheadheight[= nHeight]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "calendarheadheight", "60");
```
- **`nHeight`** — 년/월이 표시되는 Head 영역의 높이를 pixel 단위의 숫자로 설정합니다.


---

### calendarpopupsize

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > calendarpopupsize

**Description**

SubCell 이 Calendar 형식일 때 팝업으로 표시되는 달력의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.calendarpopupsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "calendarpopupsize", "500 400");
```
- **`<strWidth>`** — 팝업달력의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 팝업달력의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- calendarpopupsize 속성값을 설정하지 않으면 Grid 의 cellcalendarpopupsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### calendarpopuptype

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > calendarpopuptype

**Description**

SubCell 이 Calendar 형식일 때 팝업달력(DatePicker)이 표시되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.calendarpopuptype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'normal' | 'center' | 'system'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "calendarpopuptype", "system");
```
- **`"none"`** — 팝업달력을 화면에 표시하지 않습니다.
- **`"normal"`** — 팝업달력이 표시되는 일반적인 규칙을 따릅니다.
- **`"center"`** — 어플리케이션이 실행중인 화면의 중앙에 팝업달력이 표시됩니다.
- **`"system"`** — 데스크탑 환경이면 설정값이 무시되고 "normal" 로 동작합니다.

모바일 환경이면 시스템에서 제공하는 팝업달력이 표시됩니다.

모바일 환경일 때 날짜형식은calendardateformat, calendareditformat 속성값이 적용되지 않으며아래와 같이 처리됩니다.시스템 제약사항이며 날짜형식을 변경할 수 없으므로 사용에 주의하여야 합니다.
  > Android WRE, iOS/iPadOS WRE 는 브라우저 또는 시스템의 날짜형식이 적용됩니다.
  > Android NRE, iOS/iPadOS NRE 는 시스템의 날짜형식이 적용됩니다.
  > iOS/iPadOS NRE 는 시스템의 날짜형식과 관계없이 "yyyy.MM.dd" 형식이 적용되는 경우가 있습니다.* 모바일 환경에서 날짜형식 제약이 적용될 때 사용자가 설정한 calendardateformat, calendareditformat 속성값은 변경되지 않습니다.
* Android 에서 팝업달력의 날짜 변경 후 결정을 입력하거나 iOS/iPadOS 에서 팝업달력의 날짜변경 스핀을 멈추면 oninput -> canchange -> onchanged 순서로 이벤트가 발생합니다.

**Remark**

- calendarpopuptype 속성값을 설정하지 않으면 Grid 의 cellcalendarpopuptype 속성값이 적용됩니다.

- calendartype 속성값이 "normal" 일때만 적용되며 모바일환경 같은 특별한 경우에 제한적으로 사용해야 하는 속성입니다.

- 다중 모니터의 경우 Grid 가 표시되고 있는 모니터를 기준으로 팝업달력이 표시됩니다.


---

### calendarshowmonthspin

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > calendarshowmonthspin

**Description**

SubCell 이 Calendar 형식일 때 팝업달력의 상단에 월 변경버튼을 표시할 지 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.calendarshowmonthspin[= bShow]
```

**Setting Syntax**

```javascript
bShow ::= 'true' | 'false'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "calendarshowmonthspin", "true");
```
- **`"true"`** — 팝업달력 Head 영역에 표시되는 월의 오른쪽에 변경버튼을 항상 표시합니다.
- **`"false"`** — 팝업달력 Head 영역에 표시되는 월이 선택되면 변경버튼을 표시합니다.

**Remark**

- calendarshowmonthspin 속성값을 설정하지 않으면 "false"로 적용됩니다.

**See Also**

GridCellControl.calendarshowyearspin


---

### calendarshowyearspin

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > calendarshowyearspin

**Description**

SubCell 이 Calendar 형식일 때 팝업달력의 상단에 연도 변경버튼을 표시할 지 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.calendarshowyearspin[= bShow]
```

**Setting Syntax**

```javascript
bShow ::= 'true' | 'false'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "calendarshowyearspin", "true");
```
- **`"true"`** — 팝업달력 Head 영역에 표시되는 연도의 오른쪽에 변경버튼을 항상 표시합니다.
- **`"false"`** — 팝업달력 Head 영역에 표시되는 연도가 선택되면 변경버튼을 표시합니다.

**Remark**

- calendarshowyearspin 속성값을 설정하지 않으면 "false"로 적용됩니다.

**See Also**

GridCellControl.calendarshowmonthspin


---

### calendartextcolorcol

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > calendartextcolorcol

**Description**

SubCell이 Calendar 형식일 때 Calendar 의 특정날짜에 날짜색을 표시하기 위해 calendardataset 속성에 설정된 Dataset 오브젝트의 Column을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.calendartextcolorcol[= strColumnID]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "calendartextcolorcol", "column0");
```
- **`strColumnID`** — 날짜색이 정의된 Column 의 ID를 문자열로 설정합니다.

**Remark**

- calendardataset 속성에 설정된 Dataset 오브젝트 의 Column만 설정할 수 있습니다. 
- calendardatecol 속성에 설정된 특정날짜에 calendartextcolorcol 에 설정된 날짜색이 적용됩니다.


---

### calendartype

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > calendartype

**Description**

SubCell 이 Calendar 형식일 때 Calendar가 화면에 표시되는 형식을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.calendartype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'normal' | 'monthonly' | 'spin'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "calendartype", "normal");
```
- **`"normal"`** — 날짜 입력영역과 팝업달력 드롭다운 버튼이 있는 Calendar가 표시됩니다.
- **`"monthonly"`** — 일반적인 월 단위 달력형태의 Calendar가 표시됩니다.
- **`"spin"`** — 날짜 입력영역과 날짜값을 변경하는 스핀버튼이 있는 Calendar가 표시됩니다.

**Remark**

- calendartype 속성값을 설정하지 않으면 "normal"로 적용됩니다.


---

### calendarusetrailingday

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > calendarusetrailingday

**Description**

SubCell 이 Calendar 형식일 때 팝업달력의 시작/끝 여백에 전/후 달의 날짜를 표시할지 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.calendarusetrailingday[= bTrail]
```

**Setting Syntax**

```javascript
bTrail ::= 'true' | 'false'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "calendarusetrailingday", "true");
```
- **`"true"`** — 팝업달력의 시작/끝 여백에 전/후 달의 날짜를 표시합니다.
- **`"false"`** — 팝업달력의 시작/끝 여백을 그대로 표시합니다.

**Remark**

- calendarusetrailingday 속성값을 설정하지 않으면 "false"로 적용됩니다.

- calendarusetrailingday 속성값을 "false"로 설정하면 전/후 달의 날짜가 표시되지 않고 선택할 수 없습니다.


---

### calendarweekformat

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > calendarweekformat

**Description**

SubCell 이 Calendar 형식일 때 팝업달력에 요일이 표시되는 형식을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.calendarweekformat[= strFormat]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty("body", 0, 0, "calendarweekformat","S M T W T F S");
```
- **`strFormat`** — 팝업달력에 표시되는 요일을 공백문자로 구분하여 문자열로 설정합니다.

null 또는 "" 설정 시 국가별 설정에 정의된 기준으로 요일이 표시됩니다.
공백문자(space) 설정 시 팝업달력에 요일이 표시되지 않습니다.


---

### checkboxfalsevalue

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > checkboxfalsevalue

**Description**

SubCell 이 CheckBox 형식일 때 False 로 처리되는 값을 문자열로 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.checkboxfalsevalue[= strValue]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "checkboxfalsevalue", "F");
```
- **`strValue`** — CheckBox 에서 False 로 처리될 문자열을 설정합니다.

설정값과 SubCell 에 표시되는 텍스트값이 일치하면 False 로 처리하여 CheckBox 의 체크가 해제됩니다.

**Remark**

- checkboxfalsevalue 속성값을 설정하지 않으면 false 또는 0 값으로 적용됩니다.

- SubCell 의 edittype 속성값이 "checkbox" 일 때 SubCell 에 표시되는 CheckBox 에 적용됩니다.
   SubCell 의 displaytype 속성값이 "checkboxcontrol" 일 때 SubCell 에 표시되는 CheckBox 에 적용됩니다.

- SubCell 의 CheckBox 에 클릭등의 방법으로 체크해제하면 바인드 된 Column 에 checkboxfalsevalue 속성값이 저장됩니다.

- checkboxtruevalue 속성값과 checkboxfalsevalue 속성값이 같으면 checkboxtruevalue 속성값이 우선 적용됩니다.


---

### checkboxsize

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > checkboxsize

**Description**

SubCell 이 CheckBox 형식일 때 CheckBox 의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.checkboxsize[= nSize]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "checkboxsize", "25");
```
- **`nSize`** — SubCell 에 표시되는 CheckBox 의 크기를 pixel 단위의 숫자로 설정합니다.

설정값은 표시되는 CheckBox 의 가로/세로 크기에 동일하게 적용됩니다.

**Remark**

- SubCell 의 edittype 속성값이 "checkbox" 이거나 "tree" 일 때 SubCell 에 표시되는 CheckBox 에 적용됩니다.
   SubCell 의 displaytype 속성값이 "checkboxcontrol" 이거나 "treeitemcontrol" 일 때 SubCell 에 표시되는 CheckBox 에 적용됩니다.

- checkboxsize 속성값을 설정하지 않으면 Grid 의 cellcheckboxsize 속성값이 적용됩니다.
   checkboxsize, cellcheckboxsize 속성을 모두 설정하지 않으면 테마에 정의된 CheckBox 이미지 크기에 맞게 적용됩니다.

- 테마에서 CheckBox 이미지 크기는 GridCellControl 하위의 cellcheckbox 셀렉터에 정의됩니다.

- 테마에 정의된 CheckBox 이미지 크기보다 checkboxsize 속성값을 작게 설정할 경우 이미지가 잘려서 표시됩니다.


---

### checkboxtruevalue

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > checkboxtruevalue

**Description**

SubCell 이 CheckBox 형식일 때 True 로 처리되는 값을 문자열로 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.checkboxtruevalue[= strValue]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "checkboxtruevalue", "T");
```
- **`strValue`** — CheckBox 에서 True 로 처리될 문자열을 설정합니다.

설정값과 SubCell 에 표시되는 텍스트값이 일치하면 True 로 처리하여 CheckBox 에 체크가 표시됩니다.

**Remark**

- checkboxtruevalue 속성값을 설정하지 않으면 true 또는 1 값으로 적용됩니다.

- SubCell 의 edittype 속성값이 "checkbox" 일 때 SubCell 에 표시되는 CheckBox 에 적용됩니다.
   SubCell 의 displaytype 속성값이 "checkboxcontrol" 일 때 SubCell 에 표시되는 CheckBox 에 적용됩니다.

- SubCell 의 CheckBox 에 클릭등의 방법으로 체크설정하면 바인드 된 Column 에 checkboxtruevalue 속성값이 저장됩니다.

- checkboxtruevalue 속성값과 checkboxfalsevalue 속성값이 같으면 checkboxtruevalue 속성값이 우선 적용됩니다.


---

### col

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > col

**Description**

SubCell 에 정의된 Column 인덱스 값이 저장된 읽기전용 속성입니다.

**Syntax**

```javascript
CellSubCellControl.col
```

**Remark**

- Column 인덱스는 SubCell 이 표시되는 위치를 나타냅니다.

- 같은 Column 위치의 SubCell 은 Head, Body, Summary 밴드에 관계없이 동일한 값을 갖습니다.

- Grid 에서 탭키 입력 시 포커스가 SubCell 을 이동하는 순서와 일치합니다.

- 넥사크로 스튜디오의 Grid Contents Editor 에서 디자인 시 자동으로 설정되는 속성입니다.


---

### color

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > color

**Description**

SubCell 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.color[= strcolor]
```

**Setting Syntax**

```javascript
strcolor ::= <NamedColor> | <NumericColor>
```
```javascript
* XCSS
color : #999999;
color : rgb ( 255, 0, 0 );
color : red;

* Script ( normal property )
this.Grid00.setSubCellProperty( "body", 0, 0, "color", "#999999");
this.Grid00.setSubCellProperty( "body", 0, 0, "color", "rgb(255,0,0)");
this.Grid00.setSubCellProperty( "body", 0, 0, "color", "red");
```
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- color 속성값을 설정하지 않으면 undefined 가 설정되고, "#000000" 으로 동작합니다.


◆ web runtime environment 제약

- XCSS 를 사용하지 않고 rgba(), hsl(), hsla() 메소드를 속성에 직접 설정할 경우 브라우저 버전에 따라 적용되지 않을 수 있습니다.


---

### colspan

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > colspan

**Description**

SubCell 에 병합된 Column 의 갯수가 저장된 읽기전용 속성입니다.

**Syntax**

```javascript
CellSubCellControl.colspan
```

**Remark**

- 병합(Merge) 된 SubCell 이 아닐 경우 "1" 값을 갖습니다.

- 병합(Merge) 된 SubCell 이 있는 Column 은 Head 영역을 드래그하여 Column 순서를 바꿀 수 없습니다.


---

### comboautoselect

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > comboautoselect

**Description**

SubCell 이 Combo 형식일 때 편집영역이 활성화 되면 텍스트를 전체선택 할지 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.comboautoselect[= bAutoselect]
```

**Setting Syntax**

```javascript
bAutoselect ::= 'true' | 'false'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "comboautoselect", "true" );
```
- **`true`** — SubCell 의 편집영역이 활성화 될 때 텍스트가 전체선택 됩니다.
- **`false`** — SubCell 의 편집영역이 활성화 될 때 텍스트가 선택되지 않습니다.

**Remark**

- comboautoselect 속성값을 설정하지 않으면 false 로 적용됩니다.

- SubCell 이 Combo 형식일 때 편집영역이 활성화 되려면 edittype 속성값이 "combo" 이고, combotype 속성값이 "dropdown" 이외의 값이어야 합니다.


◆ web runtime environment 제약

- 마우스 또는 터치에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 정상동작합니다.
  그러나 setFocus() 메소드에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 되지 않을 수 있습니다.


---

### combobuttonsize

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > combobuttonsize

**Description**

SubCell 이 Combo 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.combobuttonsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "combobuttonsize", "30");
this.Grid00.setSubCellProperty( "body", 0, 0, "combobuttonsize", "30 20");
```
- **`<strWidth>`** — 드롭다운 버튼의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 드롭다운 버튼의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- combobuttonsize 속성값을 설정하지 않으면 Grid 의 cellcombobuttonsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### combocodecol

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > combocodecol

**Description**

SubCell 이 Combo 형식일 때 Cell 의 아이템 리스트에서 코드값으로 사용될 Column 을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.combocodecol[= strColumnID]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "combocodecol", "column0");
```
- **`strColumnID`** — SubCell 의 combodataset 속성에 설정된 DataSet 의 Column 중 코드값으로 사용할 Column 의 ID 를 문자열로 설정합니다.

**Remark**

- SubCell 의 edittype 속성값이 "combo" 일 경우 적용되는 속성입니다.
   SubCell 의 displaytype 속성값이 "combotext" 또는 "combocontrol" 일 경우 적용되는 속성입니다.

- combocodecol 속성은 Body 밴드 영역의 SubCell 에만 적용되는 속성입니다.

- combocodecol 속성을 설정하지 않으면 내부적으로 combodatacol 속성값을 사용합니다.

- combocodecol 속성에 설정된 Column 의 값은 아이템 리스트에 표시되지 않고 각 아이템의 코드값으로 처리됩니다.
   combodatacol 속성에 설정된 Column 의 값은 아이템 리스트에 표시되며 각 아이템의 데이터값으로 처리됩니다.

- 아이템 리스트의 코드값은 아이템을 구분하는 유일값으로 중복값을 가질 수 없습니다.
   만일 중복된 코드값이 존재할 경우 중복코드값의 첫번째 아이템이 항상 선택처리됩니다.
   
- SubCell 에서 선택된 아이템의 코드값은 SubCell 의 text 속성에 저장되고 Grid 에 바인딩 된 DataSet 에 반영됩니다.
   SubCell 에는 선택된 코드값에 해당하는 아이템 리스트의 데이터값이 텍스트로 표시됩니다.


---

### combodatacol

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > combodatacol

**Description**

SubCell 이 Combo 형식일 때 Cell 의 아이템 리스트에서 데이터값으로 사용될 Column 을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.combodatacol[= strColumnID]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "combodatacol", "column1");
```
- **`strColumnID`** — SubCell 의 combodataset 속성에 설정된 DataSet 의 Column 중 데이터값으로 사용할 Column 의 ID 를 문자열로 설정합니다.

**Remark**

- SubCell 의 edittype 속성값이 "combo" 일 경우 적용되는 속성입니다.
   SubCell 의 displaytype 속성값이 "combotext" 또는 "combocontrol" 일 경우 적용되는 속성입니다.

- combodatacol 속성은 Body 밴드 영역의 SubCell 에만 적용되는 속성입니다.

- combodatacol 속성을 설정하지 않으면 내부적으로 combocodecol 속성값을 사용합니다.

- combodatacol 속성에 설정된 Column 의 값은 아이템 리스트에 표시되며 각 아이템의 데이터값으로 처리됩니다.
   combocodecol 속성에 설정된 Column 의 값은 아이템 리스트에 표시되지 않고 각 아이템의 코드값으로 처리됩니다.

- 아이템 리스트의 코드값은 아이템을 구분하는 유일값으로 중복값을 가질 수 없습니다.
   만일 중복된 코드값이 존재할 경우 중복코드값의 첫번째 아이템이 항상 선택처리됩니다.
   
- SubCell 에서 선택된 아이템의 코드값은 SubCell 의 text 속성에 저장되고 Grid 에 바인딩 된 DataSet 에 반영됩니다.
   SubCell 에는 선택된 코드값에 해당하는 아이템 리스트의 데이터값이 텍스트로 표시됩니다.


---

### combodataset

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > combodataset

**Description**

SubCell 이 Combo 형식일 때 SubCell 의 아이템 리스트를 구성할 DataSet 의 ID를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.combodataset[= strDatasetID]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "combodataset", "Dataset00");
```
- **`strDatasetID`** — SubCell 의 아이템 리스트를 구성할 DataSet 의 ID를 문자열로 설정합니다.

**Remark**

- SubCell 에서 Combo 아이템 리스트를 사용하기 위해서는 combocodecol 과 combodatacol 중 한개 속성과 combodataset 속성을 설정하여야 합니다.

- combodataset 속성에 설정한 DataSet 이 존재하지 않거나 데이터가 없을 경우 아이템 리스트가 정상적으로 표시되지 않습니다.

- combodataset 속성은 Body 밴드 영역의 SubCell 에만 적용되는 속성입니다.


---

### combodisplaynulltext

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > combodisplaynulltext

**Description**

SubCell 이 Combo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시할 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.combodisplaynulltext[= strText]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "combodisplaynulltext", "No Data");
```
- **`strText`** — SubCell 이 Combo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시할 텍스트를 설정합니다.

**Remark**

- Combo 아이템의 코드값에 현재 SubCell 에 바인드된 값이 없는 상태에서
   SubCell 에 포커스가 없고, combodisplaynulltype 속성값이 "nulltext" 일 때 대체 텍스트가 표시됩니다.


---

### combodisplaynulltype

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > combodisplaynulltype

**Description**

SubCell 이 Combo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시되는 값의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.combodisplaynulltype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'nulltext'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "combodisplaynulltype", "nulltext" );
```
- **`"none"`** — SubCell 에 바인드된 값과 일치하는 콤보 아이템이 없을 경우 빈 문자열을 표시합니다.
- **`"nulltext"`** — SubCell 에 바인드된 값과 일치하는 콤보 아이템이 없을 경우 combodisplaynulltext 속성값을 표시합니다.

**Remark**

- combodisplaynulltype 속성값을 설정하지 않으면 "none" 으로 적용됩니다.


---

### combodisplayrowcount

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > combodisplayrowcount

**Description**

SubCell 이 Combo 형식일 때 아이템 리스트에 한번에 표시될 아이템의 갯수를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.combodisplayrowcount[= nRowNum]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "combodisplayrowcount", "5");
```
- **`nRowNum`** — 아이템 리스트에 표시될 아이템의 갯수를 숫자로 설정합니다.

undefined 를 설정하면 아이템 리스트가 표시되는 공간에 맞게 자동으로 갯수가 설정됩니다.

**Remark**

- combodisplayrowcount 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- combodisplayrowcount 속성값 보다 아이템의 갯수가 작으면 아이템 갯수에 맞게 리스트가 표시됩니다.

- combodisplayrowcount 속성값 보다 아이템의 갯수가 많으면 아이템 리스트에 스크롤이 표시됩니다.

- Combo 하단에 아이템 3개를 표시할 공간이 없다면 아이템 리스트가 Combo 상단에 표시됩니다.
  상/하단 모두 아이템 3개를 표시할 공간이 없다면 더 넓은 방향으로 리스트가 표시됩니다.


---

### comboimemode

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > comboimemode

**Description**

SubCell 이 Combo 형식일 때 편집창에서 사용될 기본 입력 언어를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.comboimemode[= enumImemode]
```

**Setting Syntax**

```javascript
enumImemode ::= 'none' | 'alpha' | 'alpha,full' | 'hangul' | 'hangul,full' | 'katakana' | 'katakana,full' | 'hiragana' | 'direct'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "comboimemode", "alpha" );
```
- **`"none"`** — 기본 입력 언어를 변경하지 않고 현재 시스템에 설정된 언어를 유지합니다.
- **`"alpha"`** — 입력언어를 영문으로 설정합니다.

IME 가 동아시아 입력기(한글/일본어/한자) 일 경우만 적용됩니다.
- **`"alpha,full"`** — 입력언어를 영문 전각으로 설정합니다.

IME 가 동아시아 입력기(한글/일본어/한자) 일 경우만 적용됩니다.
- **`"hangul"`** — 입력언어를 한글로 설정합니다.

IME 가 한글 입력기일 경우만 적용됩니다.
- **`"hangul,full"`** — 입력언어를 한글 전각으로 설정합니다.

IME 가 한글 입력기일 경우만 적용됩니다.
- **`"katakana"`** — 입력언어를 일본어 가나로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"katakana,full"`** — 입력언어를 일본어 가나 전각으로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"hiragana"`** — 입력언어를 일본어 히라가나 전각으로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"direct"`** — 입력언어를 일본어 직접입력으로 설정합니다.

IME 가 IME2002 의 일본어 입력기일 경우만 적용됩니다.
IME 가 IME2007 과 2010 일 경우는 "alpha"로 적용됩니다.

**Remark**

- comboimemode 속성값을 설정하지 않으면 "none" 으로 적용됩니다.

- SubCell 이 포커스를 받아 편집창이 활성화 될 때 IME 가 재설정됩니다.

- 일부 환경에서만 지원하는 속성이므로 상단의 지원환경을 확인하시기 바랍니다.
   > Windows NRE, Android NRE에서만 지원하는 속성입니다.
   > macOS NRE, iOS/iPadOS NRE, WRE 에서는 지원하지 않는 속성입니다.


---

### comboitemheight

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > comboitemheight

**Description**

SubCell 이 Combo 형식일 때 아이템 리스트의 각 행높이를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.comboitemheight[= nHeight]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "comboitemheight", "30");
```
- **`nHeight`** — 각 아이템이 표시되는 행의 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- comboitemheight 속성을 설정하지 않으면 글자 크기를 기준으로 행의 높이를 자동 계산합니다.


---

### combopopupsize

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > combopopupsize

**Description**

SubCell 이 Combo 형식일 때 팝업으로 표시되는 아이템 리스트의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.combopopupsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "combopopupsize", "500 400");
```
- **`<strWidth>`** — 아이템 리스트의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 아이템 리스트의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- combopopupsize 속성값을 설정하지 않으면 Grid 의 cellcombopopupsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### combopopuptype

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > combopopuptype

**Description**

SubCell 이 Combo 형식일 때 아이템 리스트가 표시되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.combopopuptype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'normal' | 'center'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "combopopuptype", "center");
```
- **`"none"`** — 아이템 리스트를 화면에 표시하지 않습니다.
- **`"normal"`** — 아이템 리스트가 표시되는 일반적인 규칙을 따릅니다.
- **`"center"`** — 어플리케이션이 실행중인 화면의 중앙에 아이템 리스트가 표시됩니다

**Remark**

- combopopuptype 속성값을 설정하지 않으면 Grid 의 cellcombopopuptype 속성값이 적용됩니다.

- 모바일환경 같은 특별한 경우에 제한적으로 사용해야 하는 속성입니다.

- 다중 모니터의 경우 Grid 가 표시되고 있는 모니터를 기준으로 아이템 리스트가 표시됩니다.


---

### comboscrollbarsize

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > comboscrollbarsize

**Description**

SubCell 이 Combo 형식일 때 아이템 리스트에 표시되는 스크롤바의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.comboscrollbarsize[= nWidth]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "comboscrollbarsize", "20" );
```
- **`nWidth`** — 스크롤바의 너비를 숫자로 설정합니다.

**Remark**

- comboscrollbarsize 속성값을 설정하지 않으면 Grid 의 cellcomboscrollbarsize 속성값이 적용됩니다.

- scrollbarsize 속성값을 변경하면 스크롤바 내부버튼의 높이와 너비가 같이 변경됩니다.


---

### combotype

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > combotype

**Description**

SubCell 이 Combo 형식일 때 동작하는 방법을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.combotype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'dropdown' | 'search' | 'filter' | 'filterlike' | 'caseisearch' | 'caseifilter' | 'caseifilterlike'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "combotype", "dropdown");
```
- **`"dropdown"`** — Combo 의 아이템 리스트에 전체 아이템이 모두 표시됩니다.

Cell 의 편집창에 문자를 입력할 수 없습니다.
- **`"search"`** — SubCell 의 편집창에 문자열 입력 시 Combo 의 검색기능이 활성화됩니다.

편집창에 입력된 문자열로 시작하는 첫번째 아이템이 선택된 아이템 리스트가 표시됩니다.
편집창에 입력된 문자열로 시작하는 아이템이 없을 경우 아이템 리스트가 표시되지 않습니다.

아이템 리스트에는 전체 아이템이 모두 표시됩니다.
아이템 검색 시 대소문자를 구별합니다.
- **`"filter"`** — SubCell 의 편집창에 문자열 입력 시 Combo 의 필터기능이 활성화됩니다.

편집창에 입력된 문자열로 시작하는 아이템만 있는 아이템 리스트가 표시됩니다.
편집창에 입력된 문자열로 시작하는 아이템이 없을 경우 아이템 리스트가 표시되지 않습니다.

문자를 추가로 입력하면 아이템 리스트가 자동으로 갱신됩니다.
아이템 필터 시 대소문자를 구별합니다.
- **`"filterlike"`** — SubCell 의 편집창에 문자열 입력 시 Combo 의 필터기능이 활성화됩니다.

편집창에 입력된 문자열이 포함된 아이템만 있는 아이템 리스트가 표시됩니다.
편집창에 입력된 문자열이 포함된 아이템이 없을 경우 아이템 리스트가 표시되지 않습니다.

문자를 추가로 입력하면 아이템 리스트가 자동으로 갱신됩니다.
아이템 필터 시 대소문자를 구별합니다.
- **`"caseisearch"`** — SubCell 의 편집창에 문자열 입력 시 Combo 의 검색기능이 활성화됩니다.

"search" 값과 동일하게 동작하며 아이템 검색 시 대소문자를 구별하지 않습니다.
- **`"caseifilter"`** — SubCell 의 편집창에 문자열 입력 시 Combo 의 필터기능이 활성화됩니다.

"filter" 값과 동일하게 동작하며 아이템 필터 시 대소문자를 구별하지 않습니다.
- **`"caseifilterlike"`** — SubCell 의 편집창에 문자열 입력 시 Combo 의 필터기능이 활성화됩니다.

"filterlike" 값과 동일하게 동작하며 아이템 필터 시 대소문자를 구별하지 않습니다.

**Remark**

- combotype 속성값을 설정하지 않으면 "dropdown" 으로 적용됩니다.

- combotype 속성값에 관계없이 SubCell 의 드롭버튼(DropButton) 클릭 시 전체 아이템이 있는 아이템 리스트가 표시됩니다.

- combotype 속성을 "dropdown" 이외의 값으로 설정하면 검색/필터 기능이 활성화 됩니다.
   검색/필터 기능은 사용자의 입력을 돕기위한 기능으로 아이템 후보값을 편집 영역과 리스트 창을 통해 표시합니다.

- 아이템 리스트에서 마우스나 키보드에 의해 아이템을 선택하면 입력이 종료된 것으로 처리합니다.


---

### controlautosizingtype

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > controlautosizingtype

**Description**

SubCell 이 컨트롤 형식일 때 SubCell 크기에 맞게 컨트롤 크기를 자동 조절할 지 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.controlautosizingtype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'width' | 'height' | 'both'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "controlautosizingtype", "width");
```
- **`"none"`** — SubCell 크기에 관계없이 내부 컨트롤의 크기는 디자인 시 값을 유지합니다.

SubCell 크기가 내부 컨트롤 크기보다 작을 경우 컨트롤의 오른쪽과 아랫쪽이 잘려서 표시됩니다.
- **`"width"`** — SubCell 의 크기에 맞게 내부 컨트롤의 너비를 자동 조정합니다.

내부 컨트롤의 높이는 디자인 시 값을 유지합니다.
SubCell 의 높이가 내부 컨트롤 높이보다 작을 경우 컨트롤의 아랫쪽이 잘려서 표시됩니다.
- **`"height"`** — Cell 의 크기에 맞게 내부 컨트롤의 높이를 자동 조정합니다.

내부 컨트롤의 너비는 디자인 시 값을 유지합니다.
Cell 의 너비가 내부 컨트롤 너비보다 작을 경우 컨트롤의 오른쪽이 잘려서 표시됩니다.
- **`"both"`** — Cell 의 크기에 맞게 내부 컨트롤의 너비와 높이를 자동 조정합니다.

**Remark**

- controlautosizingtype 속성값을 설정하지 않으면 "both" 로 적용됩니다.

- SubCell 이 CheckBox 형태이면 controlautosizingtype 속성값은 적용되지 않습니다.
   checkboxsize 속성값 또는 아이콘 크기에 맞게 내부 컨트롤의 크기가 설정됩니다.

- 내부 컨트롤이 Calendar 또는 Combo 형태일 때 드롭다운 버튼의 크기를 고정하려면 calendarbuttonsize 또는 combobuttonsize 속성값을 설정하여야 합니다.
  드롭다운 버튼의 크기를 설정하지 않으면 내부 컨트롤의 크기에 맞게 드롭다운 버튼의 크기가 자동 설정됩니다.

- controlautosizingtype 속성값이 "both" 가 아닐 경우 내부 컨트롤이 잘려서 표시될 수 있습니다.
  이 때, autosizerow 또는 autosizecol 속성값을 "limitmin" 으로 설정하면 내부 컨트롤이 잘려서 표시되는 것을 방지할 수 있습니다.


---

### cssclass

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > cssclass

**Description**

SubCell 의 Style을 XCSS 파일에 정의된 class로 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.cssclass[= strcssclass]
```

**Setting Syntax**

```javascript
strcssclass ::= <ClassName> [ , &ltClassName> ]*
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "cssclass", "TestClass" );
this.Grid00.setSubCellProperty( "body", 0, 0, "cssclass", "TestClass,TestClass2" );
```
- **`<ClassName>`** — XCSS 에 정의된 classname 을 설정합니다.

**Remark**

- XCSS 에 정의된 ".classname" 형식에서 "." 를 제외하고 "classname" 만 설정합니다.

- Style 에 적용되는 방식은 XCSS Attribute 지정과 동일하게 XCSS 내의 순서대로 적용됩니다.

- Status 를 적용하고자 할 경우는 "classname" 에 Status 를 붙여서 사용합니다.

- ',' 를 사용하여 class 를 다중으로 지정하게 되면 class 가 중첩되어 적용됩니다.
   중첩된 class 의 내용에 중복이 있다면 XCSS 내의 순서상 마지막으로 기술된 것이 적용됩니다.


◆ web runtime environment 제약

- web runtime environment 는 cssclass 명의 첫문자가 숫자일 경우 속성값이 적용되지 않으므로 주의하여야 합니다.


---

### cursor

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > cursor

**Description**

SubCell 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.cursor[= strCursor]
```

**Setting Syntax**

```javascript
strCursor ::= 'none' | 'auto' | 'default' | 'copy' | 'crosshair' | 'help' | 'move' | 'not-allowed' | 'pointer' | 'progress' | 'text' | 'wait' | 'ew-resize' | 'e-resize' | 'w-resize' | 'ns-resize' | 'n-resize' | 's-resize' | 'nesw-resize' | 'ne-resize' | 'sw-resize' | 'nwse-resize' | 'nw-resize' | 'se-resize'
```
```javascript
* XCSS
cursor : default;

* Script ( normal property )
this.Grid00.setSubCellProperty( "body", 0, 0, "cursor", "default" );
```
- **`"none"`** — 마우스 포인터를 표시하지 않습니다.

* macOS NRE는 지원하지 않습니다.
- **`"auto"`** — 컴포넌트의 특성에 맞는 포인터가 표시됩니다.

Edit계열 컴포넌트는 "text" 포인터가 표시됩니다.
그외 계열 컴포넌트는 "arrow" 포인터가 표시됩니다.
- **`"default"`** — 시스템의 기본 포인터가 표시됩니다.

일반적으로 "arrow" 포인터가 표시됩니다.
- **`"copy"`** — 화살표와 작은 십자("+") 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"crosshair"`** — 십자("+") 모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"help"`** — 화살표와 작은 물음표 모양의 포인터가 표시됩니다.

* Safari 브라우저는 물음표 모양의 포인터가 표시됩니다.
* macOS NRE 는 지원하지 않습니다.
- **`"move"`** — 십자 화살표 모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"not-allowed"`** — 금지 표지판 모양의 포인터가 표시됩니다.

* Safari 브라우저는 화살표와 금지 표지판 모양의 포인터가 표시됩니다.
* macOS NRE 는 지원하지 않습니다.
- **`"pointer"`** — 손모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"progress"`** — OS 또는 환경에 따라 다른 형태의 포인터가 표시됩니다.

원, 화살표와 모래시계, 화살표와 원 등 다양한 형태로 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"text"`** — 아이("I") 모양의 포인터가 표시됩니다.
- **`"wait"`** — OS 또는 환경에 따라 다른 형태의 포인터가 표시됩니다.

원, 모래시계, 시계 등 다양한 형태로 표시됩니다.
- **`"ew-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"e-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"w-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"ns-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"n-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"s-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"nesw-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"ne-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"sw-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"nwse-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"nw-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"se-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

**Remark**

- cursor 속성값을 설정하지 않으면 undefined 가 설정되고 "auto" 로 동작합니다.

- disable 상태인 서브컨트롤이 있는 컴포넌트의 경우 마우스 포인터는 서브컨트롤 영역에서
   서브컨트롤의 disable status값이 적용되지 않고, 컴포넌트의 enable status 설정값이 적용됩니다.
   서브컨트롤과 컴포넌트가 모두 disable 상태일 때는 parent 의 enable status 설정값이 적용됩니다.


---

### displaytype

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > displaytype

**Description**

SubCell 이 편집상태가 아닐 때 바인드 된 데이터가 화면에 표시되는 형식을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.displaytype[= enumDpType]
```

**Setting Syntax**

```javascript
enumDpType ::= 'normal' | 'none' | 'buttoncontrol' | 'calendarcontrol' | 'checkboxcontrol' | 'combocontrol' | 'combotext' | 'currency' | 'date' | 'decoratetext' | 'editcontrol' | 'imagecontrol' | 'mask' | 'maskeditcontrol' | 'multicombocontrol' | 'number' | 'progressbarcontrol' | 'radioitemcontrol' | 'text' | 'textareacontrol' | 'treeitemcontrol'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "displaytype", "normal" );
```
- **`"normal"`** — 바인드 된 데이터 형식에 맞게 자동으로 표시됩니다.

데이터 형식이 "DATE" 이면 "yyyy-MM-dd" 형식으로 표현가능한 값만 표시됩니다.
데이터 형식이 "TIME" 이면 "hh:mm:ss" 형식으로 표현가능한 값만 표시됩니다.
데이터 형식이 "DATETIME" 이면 "yyyy-MM-dd hh:mm:ss" 형식으로 표현가능한 값만 표시됩니다.
데이터 형식이 숫자형이면 세자리 마다 콤마(",")가 표시됩니다.
- **`"none"`** — 바인드 된 데이터를 표시하지 않습니다.
- **`"buttoncontrol"`** — SubCell 영역이 Button 컨트롤 형태로 표시되고, 바인드 된 데이터는 컨트롤에 텍스트로 표시됩니다.

SubCell 에 마우스 클릭이나 스페이스키 입력 시 컨트롤에 Status 가 적용됩니다.
- **`"calendarcontrol"`** — SubCell 영역이 Calendar 컨트롤 형태로 표시되고, 바인드 된 데이터는 컨트롤에 날짜 표시형식에 맞게 표시됩니다.

날짜/시간 표시 형식은 SubCell 의 calendardateformat 속성에 설정된 형식을 따릅니다.
- **`"checkboxcontrol"`** — SubCell 영역이 CheckBox 컨트롤 형태로 표시되고, 바인드 된 데이터는 컨트롤에 체크로 표시됩니다.

바인드 된 데이터가 "true" 에 해당하는 값이면 체크 상태로 표시됩니다.
- **`"combocontrol"`** — SubCell 영역이 Combo 컨트롤 형태로 표시되고, 바인드 된 데이터와 일치하는 Combo 아이템의 데이터값이 표시됩니다.

Combo 컨트롤이 동작하려면 combodataset, combocodecol, combodatacol 속성값을 설정하여야 합니다.
combodataset 의 combocodecol 값 중에 바인드 된 데이터와 일치하는 값에 해당하는 combodatacol 값이 화면에 표시됩니다.
- **`"combotext"`** — SubCell 에 바인드 된 데이터와 일치하는 Combo 아이템의 데이터값이 텍스트로 표시됩니다.

텍스트가 정상적으로 표시되려면 combodataset, combocodecol, combodatacol 속성값을 설정하여야 합니다.
combodataset 의 combocodecol 값 중에 바인드 된 데이터와 일치하는 값에 해당하는 combodatacol 값이 화면에 표시됩니다.
- **`"currency"`** — SubCell 에 바인드 된 데이터가 통화표시 규칙에 맞게 표시됩니다.

통화표시 규칙은 시스템에 정의된 형식을 따릅니다.
- **`"date"`** — SubCell 에 바인드 된 데이터가 날짜 표시형식에 맞게 텍스트로 표시됩니다.

날짜/시간 표시 형식은 Cell 의 calendardateformat 속성에 설정된 형식을 따릅니다.
- **`"decoratetext"`** — SubCell 에 바인드 된 데이터를 텍스트로 표시합니다.

바인드 된 데이터에 개행문자가 있을 경우 줄바꿈되어 표시됩니다.
바인드 된 데이타가 Tag 형식의 Decorate 설정값을 포함할 경우 Decorate 효과를 적용하여 텍스트를 표시합니다.
적용할 수 있는 Decorate 형식은 하단의 Remark 를 참고하십시오.

* 설정된 Tag 는 HTML 형식이므로 Excel Export 시 Decorate 효과가 적용되지 않습니다.
   Export 설정에 따라 Tag 가 텍스트로 Export 되거나 Tag 가 제거된 텍스트가 Export 됩니다.
- **`"editcontrol"`** — SubCell 영역이 Edit 컨트롤 형태로 표시되고, 바인드 된 데이터는 컨트롤에 텍스트로 표시됩니다.
- **`"imagecontrol"`** — SubCell 에 바인드 된 데이터를 이미지로 표시합니다.

바인드 된 데이터는 "URL 형태의 이미지 위치정보" 또는 "BLOB" 값 이어야 합니다.
이미지는 "BMP","PNG","GIF","JPEG", "SVG"를 지원하며, "AniGIF"는 첫 프레임만 표시되고 애니메이션은 동작하지 않습니다.
- **`"mask"`** — SubCell 에 바인드 된 데이터가 maskeditformat 속성의 마스크값에 맞게 텍스트로 표시됩니다.

SubCell 의 maskeditformat 속성에 설정된 마스크값은 maskedittype 속성값으로 형식을 결정합니다.
- **`"maskeditcontrol"`** — SubCell 영역이 MaskEdit 컨트롤 형태로 표시되고, 바인드 된 데이터는 컨트롤에 maskeditformat 속성의 마스크값에 맞게 텍스트로 표시됩니다.

SubCell 의 maskeditformat 속성에 설정된 마스크값은 maskedittype 속성값으로 형식을 결정합니다.
- **`"multicombocontrol"`** — SubCell 영역이 MultiCombo 컨트롤 형태로 표시되고, 바인드 된 데이터와 일치하는 MultiCombo 아이템의 데이터값이 표시됩니다.

MultiCombo 컨트롤이 동작하려면 multicombodataset, multicombocodecol, multicombodatacol 속성값을 설정하여야 합니다.
multicombodataset의 multicombocodecol 값 중에 바인드 된 데이터와 일치하는 값에 해당하는 multicombodatacol 값이 화면에 표시됩니다.
- **`"number"`** — SubCell 에 바인드 된 데이타가 숫자로 표시됩니다.

세자리 마다 콤마(",")가 표시됩니다.
- **`"progressbarcontrol"`** — SubCell 영역이 ProgressBar 컨트롤 형태로 표시되고, 바인드 된 데이터는 컨트롤에 숫자와 블럭으로 표시됩니다.

바인드 된 데이터는 ProgressBar 컨트롤의 중앙에 숫자로 표시됩니다.
ProgressBar 컨트롤의 블럭은 "0~100" 값을 표시할 수 있습니다.
- **`"radioitemcontrol"`** — SubCell 영역이 radioitem 형태로 표시됩니다.

text 속성값에 바인드된 데이터와 radioitemcodevalue 속성값이 일치하면 선택상태로 표시되며 값이 다르면 선택되지 않은 상태로 표시됩니다.
- **`"text"`** — SubCell 에 바인드 된 데이터가 텍스트로 표시됩니다.

바인드 된 데이터에 개행문자가 있을 경우 줄바꿈되어 표시됩니다.
- **`"textareacontrol"`** — SubCell 영역이 TextArea 컨트롤 형태로 표시되고, 바인드 된 데이터는 텍스트로 표시됩니다.

바인드 된 데이터에 개행문자가 있을 경우 줄바꿈되어 표시됩니다.
- **`"treeitemcontrol"`** — SubCell 영역이 Tree 컨트롤 형태로 표시되고, 바인드 된 데이터는 컨트롤에 텍스트로 표시됩니다.

Tree 컨트롤이 동작하려면 SubCell 의 treelevel, treestate 속성값을 설정하여야 합니다.

**Remark**

- displaytype 속성값을 설정하지 않으면 "normal"로 적용됩니다.

- Grid 의 Head, Body, Summary 밴드에 공통 적용되는 속성입니다.

- 바인드 된 데이터가 "BLOB" 형태 일 경우 Suppress 기능은 지원되지 않습니다.

- SubCell 의 fillareatype 속성값에 의해 데이터가 없는 영역에 컨트롤이 표시될 때는 "disable" Status 가 적용됩니다.

- 하위 Cell 영역과 속성을 따로 갖는 형태로 병합된 SubCell 은 "control" 형태의 값 설정 시 정상적으로 표시되지 않을 수 있습니다.
   하위 Cell 영역과 속성을 따로 갖는 형태로 병합하려면 Grid Contents Editor 에서 "Merge Cells(Having child cells)" 메뉴로 병합합니다.

- displaytype 속성값이 "decoratetext" 일 경우 적용할 수 있는 Tag 형식입니다.
 Tag 형태의 "<", ">" 특수문자를 사용하고 지정된 Tag 형식 외의 영문자를 사용하는 경우에는 입력값이 삭제됩니다.
  예를 들어 "<a href=''>" 형식으로 입력 시 해당 값은 삭제되어 처리됩니다.

	
		Type
		Description
		Default
		Example
	

	
		fs
		폰트크기(font size)를 지정
		"12"
		<fs v='12'>Text</fs>
	

	
		fc
		폰트색상(font color)를 지정
		"#000000"
		<fc v='red'>Text</fc>
	

	
		ff
		폰트종류(font face)를 지정
		"굴림"
		<ff v='Dotum'>Text</ff>
	

	
		b
		굵은(bold) 효과 지정
		"false"
		<b v='true'>Text</b>
	

	
		i
		기울임(italic) 효과 지정
		"false"
		<i v='true'>Text</i>
	

	
		u
		밑줄(under line) 효과 지정
		"false"
		<u v='true'>Text</u>
	

	
		s
		취소선(strike) 효과 지정
		"false"
		<s v='true'>Text</s>
	

	
		l
		링크(link) 효과 지정

value 에는 URL, 전화번호, 메일주소 중 하나를 설정할 수 있습니다.
value 에 설정된 형태에 따라 알맞는 앱이 실행됩니다.
		"false"
		<l v='http://www.tobesoft.co.kr'>Text</l>
<l v='tel:010-1234-5678'> 전화걸기 </l>
<l v='mailto:manager@tobesoft.co.kr'> 메일보내기 </l>


---

### editautoselect

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > editautoselect

**Description**

SubCell 의 edittype 속성값이 "text" 일 경우 편집영역이 활성화 될 때 텍스트를 전체선택 할지 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.editautoselect[= bAutoselect]
```

**Setting Syntax**

```javascript
bAutoselect ::= 'true' | 'false'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "editautoselect", "true" );
```
- **`true`** — SubCell 의 편집영역이 활성화 될 때 텍스트가 전체선택 됩니다.
- **`false`** — SubCell 의 편집영역이 활성화 될 때 텍스트가 선택되지 않습니다.

**Remark**

- editautoselect 속성값을 설정하지 않으면 false 로 적용됩니다.


◆ web runtime environment 제약

- 마우스 또는 터치에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 정상동작합니다.
  그러나 setFocus() 메소드에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 되지 않을 수 있습니다.


---

### editimeaction

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > editimeaction

**Description**

키보드에 하단 모서리에 표시되는 사용자 작업 버튼 UI와 동작을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.editimeaction[= enumEditimeaction]
```

**Setting Syntax**

```javascript
enumEditimeaction ::= 'none' | 'next' | 'previous'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "editimeaction", "none" );
```
- **`"none"`** — 캐리지 리턴 버튼을 표시합니다.
- **`"next"`** — 다음 버튼을 표시합니다.
TAB 키 입력과 같은 동작을 처리합니다 (다음 컴포넌트로 포커스가 이동합니다).
- **`"previous"`** — 이전 버튼을 표시합니다.
SHIFT + TAB 키 입력과 같은 동작을 처리합니다 (이전 컴포넌트로 포커스가 이동합니다).

**Remark**

- 속성값을 설정하지 않으면 "none" 으로 적용됩니다.
- 운영체제 또는 키보드 앱에서 지원하지 않는 경우 UI가 원하는 형식으로 변경되지 않을 수 있습니다.
  UI가 변경되지 않더라도 키 입력 시 발생하는 이벤트는 정상적으로 처리됩니다.
- 키보드가 표시된 상태에서 속성값을 변경하면 현재 키보드 UI에는 반영되지 않습니다.
키보드가 다시 표시될때 변경된 속성값이 반영됩니다.
- onkeydown > onkeyup > onimeaction 순으로 이벤트가 발생합니다.


---

### editimemode

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > editimemode

**Description**

SubCell 의 edittype 속성값이 "text" 일 경우 Cell 의 편집창에서 사용될 기본 입력 언어를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.editimemode[= enumImemode]
```

**Setting Syntax**

```javascript
enumImemode ::= 'none' | 'alpha' | 'alpha,full' | 'hangul' | 'hangul,full' | 'katakana' | 'katakana,full' | 'hiragana' | 'direct'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "editimemode", "alpha" );
```
- **`"none"`** — 기본 입력 언어를 변경하지 않고 현재 시스템에 설정된 언어를 유지합니다.
- **`"alpha"`** — 입력언어를 영문으로 설정합니다.

IME 가 동아시아 입력기(한글/일본어/한자) 일 경우만 적용됩니다.
- **`"alpha,full"`** — 입력언어를 영문 전각으로 설정합니다.

IME 가 동아시아 입력기(한글/일본어/한자) 일 경우만 적용됩니다.
- **`"hangul"`** — 입력언어를 한글로 설정합니다.

IME 가 한글 입력기일 경우만 적용됩니다.
- **`"hangul,full"`** — 입력언어를 한글 전각으로 설정합니다.

IME 가 한글 입력기일 경우만 적용됩니다.
- **`"katakana"`** — 입력언어를 일본어 가나로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"katakana,full"`** — 입력언어를 일본어 가나 전각으로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"hiragana"`** — 입력언어를 일본어 히라가나 전각으로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"direct"`** — 입력언어를 일본어 직접입력으로 설정합니다.

IME 가 IME2002의 일본어 입력기일 경우만 적용됩니다.
IME 가 IME2007과 2010 일 경우는 "alpha"로 적용됩니다.

**Remark**

- editimemode 속성값을 설정하지 않으면 "none" 으로 적용됩니다.

- SubCell 이 포커스를 받아 편집창이 활성화 될 때 IME 가 재설정됩니다.

- 일부 환경에서만 지원하는 속성이므로 상단의 지원환경을 확인하시기 바랍니다.
   > Windows NRE, Android NRE에서만 지원하는 속성입니다.
   > macOS NRE, iOS/iPadOS NRE, WRE에서는 지원하지 않는 속성입니다.


---

### editinputfilter

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > editinputfilter

**Description**

SubCell 의 edittype 속성값이 "text" 일 경우 SubCell 편집 시 입력을 제한 시킬 문자를 타입별로 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.editinputfilter[= strInputfilter]
```

**Setting Syntax**

```javascript
strInputfilter ::= 'none' | <filter>

<filter> ::= <inputfilter> | <inputfilter> ',' <filter>
<inputfilter> ::= 'alpha' | 'digit' | 'comma' | 'dot' | 'sign' | 'space' | 'symbol'

* 각 타입값을 콤마(",")로 구분하여 중복 설정할 수 있습니다.
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "editinputfilter", "dot" );
this.Grid00.setSubCellProperty( "body", 0, 0, "editinputfilter", "dot,comma" );
this.Grid00.setSubCellProperty( "body", 0, 0, "editinputfilter", "dot,comma,sign" );
```
- **`"none"`** — 입력 제한 없이 모든 문자를 입력할 수 있습니다.
- **`"alpha"`** — 소문자 "a~z"와 대문자 "A~Z"를 입력 할 수 없습니다.
- **`"digit"`** — 숫자 "0~9"를 입력 할 수 없습니다.
- **`"comma"`** — 콤마(",")를 입력 할 수 없습니다.
- **`"dot"`** — 마침표(".")를 입력 할 수 없습니다.
- **`"sign"`** — 플러스("+")와 마이너스("-") 문자를 입력할 수 없습니다.
- **`"space"`** — 공백문자(" ")를 입력 할 수 없습니다.
- **`"symbol"`** — !,",#,$,%,@,&,',*,/,\,:,;,^,`,{,},[,],(,),|,~,=,_,<,>,? 문자를 입력할 수 없습니다.

키보드로 입력할 수 있는 특수문자 중 "comma", "dot", "sign", "space" 타입값의 문자만 입력할 수 있고, 나머지 문자는 입력 할 수 없습니다.

**Remark**

- editinputfilter 속성값을 설정하지 않으면 "none"으로 적용됩니다.

- editinputfilter 속성은 사용자가 직접 입력할 때만 적용됩니다.
  스크립트로 SubCell 값을 설정할 때는 적용되지 않습니다.

- 일본어 입력 시 글자 조합이 완료된 후 editinputfilter 속성값이 적용됩니다.


---

### editinputmode

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > editinputmode

**Description**

SubCell 의 edittype 속성값이 "text" 일 경우 SubCell 에 입력되는 영문자를 대문자 또는 소문자로 변환할지 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.editinputmode[= enumInputmode]
```

**Setting Syntax**

```javascript
enumInputmode ::= 'normal' | 'upper' | 'lower'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "editinputmode", "upper" );
```
- **`"normal"`** — 입력되는 영문자의 대/소문자를 변경하지 않습니다.
- **`"upper"`** — 입력되는 영문자를 모두 대문자로 변경합니다.
- **`"lower"`** — 입력되는 영문자를 모두 소문자로 변경합니다.

**Remark**

- editinputmode 속성값을 설정하지 않으면 "normal"로 적용됩니다.

- editinputmode 속성값을 변경하면 SubCell 에 바인딩 된 DataSet 의 데이터가 변경될 수 있습니다.


---

### editinputtype

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > editinputtype

**Description**

SubCell 의 edittype 속성값이 "text" 일 경우 SubCell 에 입력을 허용할 문자를 타입별로 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.editinputtype[= strInputtype]
```

**Setting Syntax**

```javascript
strInputtype ::= 'normal' | <type>

<type> ::= <inputtype> | <inputtype> ',' <type>
<inputtype> ::= 'alpha' | 'english' | 'digit' | 'number' | 'numberandenglish' | 'comma' | 'dot' | 'sign' | 'space' | 'symbol' | 'half' | 'full'

* 각 타입값을 콤마(",")로 구분하여 중복 설정할 수 있습니다.
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "editinputtype", "english" );                         // 영문자만 입력허용
this.Grid00.setSubCellProperty( "body", 0, 0, "editinputtype", "english,number" );             // 영문자와 숫자만 입력허용
this.Grid00.setSubCellProperty( "body", 0, 0, "editinputtype", "english,number,space" );   // 영문자, 숫자, 공백만 입력허용
```
- **`"normal"`** — 모든 문자의 입력을 허용합니다.
- **`"alpha"`** — 소문자 "a~z"와 대문자 "A~Z"를 입력 할 수 있습니다.
- **`"english"`** — 소문자 "a~z"와 대문자 "A~Z"를 입력 할 수 있습니다.
- **`"digit"`** — 숫자 "0~9"를 입력 할 수 있습니다.
- **`"number"`** — 숫자 "0~9"와 마침표("."), 콤마(","), 마이너스("-") 문자를 입력 할 수 있습니다.
- **`"numberandenglish"`** — 소문자 "a~z", 대문자 "A~Z", 숫자 "0~9", 마침표("."), 콤마(","), 마이너스("-") 문자를 입력 할 수 있습니다.

"number"와 "english"를 함께 설정한 것과 같습니다.
- **`"comma"`** — 콤마(",")를 입력 할 수 있습니다.
- **`"dot"`** — 마침표(".")를 입력 할 수 있습니다.
- **`"sign"`** — 플러스("+")와 마이너스("-") 문자를 입력할 수 있습니다.
- **`"space"`** — 공백문자(" ")를 입력 할 수 있습니다.
- **`"symbol"`** — !,",#,$,%,@,&,',*,/,\,:,;,^,`,{,},[,],(,),|,~,=,_,<,>,? 문자를 입력할 수 있습니다.

키보드로 입력할 수 있는 특수문자 중 "comma", "dot", "sign", "space" 타입값의 문자는 입력할 수 없고, 나머지 문자만 입력 할 수 있습니다.
- **`"half"`** — 반각문자를 입력 할 수 있습니다.
- **`"full"`** — 전각문자를 입력 할 수 있습니다.

**Remark**

- editinputtype 속성값을 설정하지 않으면 "normal" 로 적용됩니다.

- editinputtype 속성은 사용자가 직접 입력할 때만 적용됩니다.
  스크립트로 SubCell 값을 설정할 때는 적용되지 않습니다.

- 설정된 타입값에 해당하는 문자만 입력을 허용하며 설정되지 않은 타입값의 문자는 입력할 수 없습니다.

- editinputtype 속성값에 "full" 값이 속해 있지 않으면 반각 문자만 입력할 수 있습니다.

- 입력을 제한하는 속성은 editinputmode > editinputfilter > editinputtype 순으로 적용됩니다.


◆ Mobile 제약

- inputtype 속성을 "digit", "number", "tel", "dot" 과 같이 숫자만 입력이 가능하도록 설정하면,
   Android 에서는 tel 타입의 키패드가 기본으로 적용되고, iOS/iPadOS 에서는 number 타입의 키패드가 기본으로 적용됩니다.
   단 iOS/iPadOS 에서는 value 에 숫자가 아닌 문자가 저장되어 있으면 text 타입의 키패드가 기본으로 적용됩니다.

- inputtype 속성을 "numberandenglish", "english" 와 같이 문자입력이 가능하도록 설정하면,
   Android, iOS/iPadOS 모두 text 타입의 키패드가 기본으로 적용됩니다.


---

### editmaxlength

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > editmaxlength

**Description**

SubCell 의 edittype 속성값이 "text" 일 경우 SubCell 에 입력할 수 있는 문자열의 최대길이를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.editmaxlength[= nLimit]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "editmaxlength", "10" );
```
- **`nLimit`** — 입력할 수 있는 문자열의 최대길이를 숫자로 설정합니다.

0 설정 시 바인딩된 DataSet 의 Column 크기로 제한됩니다.
-1 설정 시 입력할 수 있는 최대길이를 제한하지 않습니다.

**Remark**

- editmaxlength 속성값을 설정하지 않으면 -1 로 적용됩니다.

- 영문, 숫자, 기호, 다국어 모두 한 문자가 1 로 계산됩니다.

- 문자열의 길이가 editmaxlength 속성값과 같아지면 입력이 제한됩니다.

- 스크립트로 value 값 설정 시 editmaxlength 속성은 적용되지 않습니다.


---

### edittype

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > edittype

**Description**

SubCell 이 포커스를 받아 표시되는 편집창의 형식을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.edittype[= enumEdittype]
```

**Setting Syntax**

```javascript
enumEdittype ::= 'normal' | 'none' | 'button' | 'checkbox' | 'combo' | 'date' | 'mask' | 'multicombo' | 'radioitem' | 'readonly' | 'text' | 'textarea' | 'tree'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "edittype", "normal" );
```
- **`"normal"`** — 바인드 된 데이터 형식에 맞게 편집창이 자동으로 표시됩니다.

바인드 된 Column 의 타입에 맞게 "text" 또는 "date"로 적용됩니다.
- **`"none"`** — SubCell 이 포커스를 받아도 편집창이 표시되지 않습니다.
SubCell 이 편집 불가능한 상태로 유지됩니다.
- **`"button'"`** — SubCell 영역이 Button 형태로 표시되고, 바인드 된 데이터는 Button 에 텍스트로 표시됩니다.

SubCell 에 마우스 클릭이나 스페이스키 입력 시 Button 에 Status 가 적용됩니다.
SubCell 의 fillareatype 속성값이 적용되어 Button 이 표시될 때는 "Disable" Status 가 적용됩니다.
- **`"checkbox"`** — SubCell 영역은 변화가 없고 마우스로 SubCell 영역을 클릭 시 바인드 된 데이터가 "0" 또는 "1" 로 변경됩니다.
- **`"combo"`** — SubCell 영역이 Combo 형태로 표시되고, 바인드 된 데이터와 일치하는 Combo 아이템의 데이터값이 표시됩니다.

Combo 형태로 표시하기 위해서는 combodataset, combocodecol, combodatacol 속성값이 설정되어야 합니다.
바인드 된 데이터와 일치하는 combocodecol 값에 해당하는 combodatacol 값이 화면에 표시됩니다.
SubCell 우측의 팝업 버튼 클릭 시 아이템 리스트가 표시됩니다.
- **`"date"`** — SubCell 영역이 Calendar 형태로 표시되고, 바인드 된 데이터가 날짜 표시형식에 맞게 표시됩니다.

날짜/시간 표시 형식은 SubCell 의 calendardateformat 속성에 설정된 형식을 따릅니다.
- **`"mask"`** — SubCell 영역이 MaskEdit 형식의 입력창으로 표시됩니다.

SubCell 의 maskeditformat 속성값에 입력 형식을 설정합니다.
SubCell 에 입력창이 표시될 때 maskeditformat 속성값이 적용된 MaskEdit 형식으로 표시됩니다.

입력받는 값을 숫자로 처리하기 위해서는 maskedittype 속성값을 "number" 로 설정하여야 합니다.
- **`"multicombo"`** — SubCell 영역이 MultiCombo 형태로 표시되고, 바인드 된 데이터와 일치하는 MultiCombo 아이템의 데이터값이 표시됩니다.

MultiCombo 형태로 표시하기 위해서는 multicombodataset, multicombocodecol, multicombodatacol 속성값이 설정되어야 합니다.
바인드 된 데이터와 일치하는 multicombocodecol 값에 해당하는 multicombodatacol 값이 화면에 표시됩니다.
SubCell 우측의 팝업 버튼 클릭 시 아이템 리스트가 표시됩니다.
- **`"radioitem"`** — SubCell 영역이 radioitem 형태로 표시됩니다.

SubCell 영역 클릭 시 선택상태로 표시되고 바인드 된 데이터는 radioitemcodevalue 속성값으로 변경됩니다.
- **`"readonly"`** — SubCell 영역이 TextArea 형식의 입력창으로 표시됩니다.

SubCell 값을 수정할 수 없고 읽기만 가능합니다..
- **`"text"`** — SubCell 영역이 Edit 형식의 입력창으로 표시됩니다.
- **`"textarea"`** — SubCell 영역이 TextArea 형식의 입력창으로 표시됩니다.
- **`"tree"`** — SubCell 의 displaytype 속성값이 "tree" 일 경우만 적용됩니다.
SubCell 에 표시된 트리버튼을 클릭하여 트리가 Collapse/Expand 가 가능하게 합니다.

**Remark**

- edittype 속성값을 설정하지 않으면 "none"으로 적용됩니다.

- SubCell 에서 데이터를 수정하면 바인드 되어 있는 Dataset 에서 cancolumnchange -> oncolumnchanged 순서로 이벤트가 발생합니다.
   이때, Dataset 의 cancolumnchange 이벤트에서 "false" 값을 반환하면 oncolumnchanged Event 가 발생하지 않고 수정된 데이터도 원복됩니다.

- SubCell 에 표시되는 입력창의 스타일은 테마에서 설정하여야 합니다.

- edittype 속성값이 "text" 또는 "textarea" 일 때 입력값을 숫자로 제한하려면 editinputfilter 또는 textareainputfilter 속성값을 설정하여야 합니다.

- Grid 에서 병합(Merge) 된 Cell 이 Sub Cell 인 경우는 각 Sub Cell 의 edittype 속성값이 무시됩니다.
   병합(Merge) 된 Cell 이 하나의 Cell 인 경우만 edittype 속성값이 적용됩니다.


---

### expandchar

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > expandchar

**Description**

SubCell 의 확장버튼에 표시될 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.expandchar[= strExptext]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "expandchar", "..." );
```
- **`strExptext`** — SubCell 의 확장버튼에 표시될 텍스트를 설정합니다.

**Remark**

- Grid 의 Head, Body, Summary 밴드에 속한 SubCell 에 공통 적용되는 속성입니다.

**See Also**

GridCellControl.expandshowGridCellControl.expandsize


---

### expandimage

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > expandimage

**Description**

SubCell 의 확장버튼에 텍스트와 함께 표시할 이미지의 위치 경로를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.expandimage[= strImage]
```

**Setting Syntax**

```javascript
strImage ::= 'URL(' <theme-Image> | <resource-image> | <web-Image> | <absolute-image> | <relative-image> ')'
```
```javascript
this.Grid00.setSubCellProperty("body",0,0,"expandimage","URL('theme://images/V13_logo.png')") ;                            // 테마 이미지
this.Grid00.setSubCellProperty("body",0,0,"expandimage","URL('globalimageID')") ;                                                   // Resource영역 이미지 

this.Grid00.setSubCellProperty("body",0,0,"expandimage","URL('http://www.tobesoft.com/images/gnb/btn_h1.gif')") ;  // 웹 이미지
this.Grid00.setSubCellProperty("body",0,0,"expandimage","URL('file://C:\\xplatform_logo.gif')") ;                             // 절대경로 이미지 

this.Grid00.setSubCellProperty("body",0,0,"expandimage","URL('Base::test.jpg')") ;                                                  // TypeDefinition Prefix 이미지
this.Grid00.setSubCellProperty("body",0,0,"expandimage","URL('./test.jpg')") ;                                                         // 상대경로 이미지
```
- **`<theme-Image>`** — 테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<resource-image>`** — GlobalVariables 영역의 Images 에 정의된 이미지의 ID 를 설정합니다.

해당 이미지가 등록되어 있어야 합니다.
- **`<web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<absolute-image>`** — 로컬에 정의된 이미지를 "file://절대경로" 형식으로 설정합니다.

또는 TypeDefinition 영역의 Services 에 정의된 Prefix 를 사용한 형식으로 설정합니다.
- **`<relative-image>`** — 폼의 위치를 기준으로 한 상대경로를 사용하여 설정합니다.

**Remark**

- 확장버튼의 background 속성에는 확장버튼의 상태별 이미지를 설정하고, 
   expandimage 속성에는 확장버튼의 상태와 상관없이 표시되는 이미지를 설정합니다.


---

### expandshow

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > expandshow

**Description**

SubCell 의 오른쪽에 확장버튼을 표시할지 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.expandshow[= enumShow]
```

**Setting Syntax**

```javascript
enumShow ::= 'hide' | 'show'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "expandshow", "hide" );
```
- **`"hide"`** — SubCell 의 오른쪽에 확장버튼을 표시하지 않습니다.
- **`"show"`** — SubCell 의 오른쪽에 확장버튼을 표시합니다.

**Remark**

- expandshow 속성값을 설정하지 않으면 "hide" 로 적용됩니다.

- SubCell 의 활성화 여부와 관계없이 확장버튼이 표시됩니다.
   SubCell 의 displaytype 속성값에 관계없이 확장버튼이 표시됩니다.

- Grid 의 Head, Body, Summary 밴드에 속한 SubCell 에 공통 적용되는 속성입니다.

- displaytype 속성을  'text', 'number' 등 텍스트만 표시되는 형태의 속성값으로 설정하고 wordWrap 속성값을 'none'으로 설정하면 확장 버튼 표시 영역까지 텍스트가 표시되며 확장 버튼과 겹쳐져 표시될 수 있습니다. 
  텍스트 길이가 긴 경우에는 텍스트 길이를 조정하거나 wordWrap 속성을 지정해 텍스트와 확장 버튼이 겹쳐져 표시되지 않도록 해야 합니다.


---

### expandsize

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > expandsize

**Description**

SubCell 의 오른쪽에 표시되는 확장버튼의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.expandsize[= nSize]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "expandsize", "30" );
```
- **`nSize`** — 확장버튼의 크기를 pixel 단위의 숫자로 설정합니다.

**Remark**

- expandsize 속성값을 설정하지 않으면 16 으로 적용됩니다.

- Grid 의 Head, Body, Summary 밴드에 속한 SubCell 에 공통 적용되는 속성입니다.

- SubCell 의 텍스트는 확장버튼 영역까지 표시됩니다.

**See Also**

GridCellControl.expandcharGridCellControl.expandshow


---

### expr

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > expr

**Description**

SubCell 에 표시될 텍스트를 동적으로 생성하는 수식을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.expr[= strExpr]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "expr", "Column2 == '1' ? 'true' : 'false' ");
this.Grid00.setSubCellProperty( "body", 0, 0, "expr", "currow + '/' + dataset.rowcount");
```
- **`strExpr`** — 텍스트로 적용될 수식을 설정합니다.
접근 가능한 영역에 정의된 함수를 설정할 수 있습니다.

설정된 수식을 동적으로 실행하여 그 결과값을 SubCell 에 텍스트로 표시합니다.

**Remark**

- 동적으로 SubCell 에 적용된 텍스트는 getSubCellText() 메소드를 사용하여 확인할 수 있습니다.

- expr 속성 설정 시 text 속성에 적용된 값은 무시되어 표시되지 않습니다.

- 수식에 아래의 예약어를 사용하면 수식 실행 시 예약어에 상응하는 값으로 대체됩니다.
  > this : 수식이 정의된 SubCell ( Form 의 지시어가 아닙니다.)
  > comp : SubCell 을 갖는 Grid 컴포넌트.
  > dataset : Grid 에 바인드된 DataSet 컴포넌트.
  > currow : 수식이 계산하고 있는 행(Row) 의 인덱스.
  > [Column ID] : 수식이 계산하고 있는 행(Row) 의 DataSet Column 값.

- expr 속성에 여러개의 수식을 설정할 때 마지막 수식은 ";" 문자를 사용하지 않습니다.


◆ StringResource

- Property Type 항목 중 StringResource에 체크가 되어 있다면 TEXT 함수를 사용할 수 있습니다.
  TEXT(stringrc_key[, alter_str])
  StringResource에서 stringrc_key에 해당하는 항목을 표시합니다.
  stringrc_key에 해당하는 항목이 없고 alter_str 값을 지정한 경우에는  alter_str 값을 표시합니다.
  stringrc_key에 해당하는 항목이 없고 alter_str 값을 지정하지 않은 경우에는 stringrc_key 값을 표시합니다.
  예) TEXT('92222', comp.text)

**Example**



---

### font

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > font

**Description**

SubCell 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.font[= strfont]
```

**Setting Syntax**

```javascript
strfont ::= [<font-style>] [<font-weight>] <font-size> ['/'<line-height>] <font-family>

<font-style> ::= 'normal' | 'italic'
<font-weight> ::= 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
<font-size> ::= <nSize> 'px'|'pt'|'em'|'rem'
<line-height> ::= 'normal' | <nValue> | <nPixel>'px' | <nPercent>'%'
<font-family> ::= <font-name> [',' <font-name>]*
```
```javascript
* XCSS
font : bold 12pt/30px arial, sans-serif;

* Script ( normal property )
this.Grid00.setSubCellProperty( "body", 0, 0, "font", "bold 12pt/30px arial, sans-serif" );
```
- **`<font-style>`** — 폰트의 스타일을 설정합니다.

"normal" 설정 시 스타일이 적용되지 않습니다.
"italic" 설정 시 기울임 스타일이 적용됩니다.
- **`<font-weight>`** — 폰트의 굵기를 설정합니다.

"normal" 설정 시 굵기가 적용되지 않습니다.
"bold" 설정 시 굵은 폰트가 적용됩니다.

"100"~"900" 로 설정 시 설정한 굵기로 폰트가 적용됩니다.
"100"~"900" 로 설정 시 굵기에 해당하는 폰트가 정의되어 있어야 합니다.
- **`<font-size>`** — 폰트 크기의 단위는 아래와 같이 절대 길이 단위와 상대 길이 단위로 설정할 수 있습니다.
단위를 지정하지 않으면 속성값이 적용되지 않습니다.
- 절대 길이 단위: pixel("px"), point("pt")
- 상대 길이 단위: "em", "rem"

폰트 크기 단위를 "em", "rem"으로 설정한 경우에는 아래와 같이 폰트 크기가 계산됩니다.
- "em": 상위 컴포넌트 font-size 기준으로 상대적인 크기를 설정
- "rem": MainFrame font-size 기준으로 상대적인 크기를 설정
- **`<nSize>`** — 폰트 크기 단위에 따라 정수 또는 소수로 설정합니다.
음수값은 설정할 수 없습니다.
- "px", "pt": 정수
- "em", "rem": 정수 또는 소수
- **`<line-height>`** — 텍스트가 여러줄로 표시되는 경우 줄 사이의 간격을 설정합니다.

음수값을 설정할 수 없습니다.

"normal" 설정 시 줄 사이의 간격을 설정하지 않습니다.
"normal" 설정 시 웹브라우저마다 줄 사이의 간격이 다르게 적용됩니다.
"normal" 설정 시 Nexacro Runtime Environment는 폰트 크기에 곱할 값(<nValue>값)이 "1.15" 일 때와 동일하게 동작합니다.
- **`<nValue>`** — 폰트 크기에 곱할 값을 설정합니다.

계산 결과값이 줄 사이 간격으로 적용됩니다.
- **`<nPixel>`** — 줄 사이의 간격을 pixel 단위의 숫자로 설정합니다.

"px" 단위를 생략할 수 없습니다.
- **`<nPercent>`** — 폰트 크기에 곱할 비율값을 설정합니다.

계산 결과값이 줄 사이 간격으로 적용됩니다.
"%" 단위를 생략할 수 없습니다.
- **`<font-family>`** — 폰트 이름을 리스트로 설정합니다.

콤마(",")로 구분하여 폰트 이름을 여러개 설정할 수 있습니다.
먼저 선언된 폰트가 우선적으로 적용됩니다.
선언된 폰트가 시스템에 없을 경우 선언된 순서대로 사용 가능한 폰트를 적용합니다.
선언된 폰트가 모두 없을 경우 시스템 기본 폰트가 적용됩니다.
- **`<font-name>`** — 폰트의 이름을 설정합니다.

**Remark**

- font 속성값을 설정하지 않으면 undefined 가 설정되고, "12pt/normal Verdana" 로 동작합니다.

- font 속성의 폰트 크기가 변경되면 <line-height> 에 적용된 값에 따라 줄간격이 변경될 수 있습니다.

- <font-weight> 를 수치로 설정 시 "400" 값이 일반적인 굵기로 적용되고, "700" 값이 "bold" 로 적용됩니다.
   폰트에 수치값에 해당하는 폰트굵기가 없다면 "400" 과 "700" 중 가까운 값으로 표시됩니다.

- UserFont 사용 시 환경별로 지원하는 포맷정보는 "Appendix > Supported UserFont" 항목을 참고하세요.


◆ WRE 제약

- -nexa-text-align 속성값이 "right" 일 때 font 속성에 "italic" 을 설정하면 마지막 텍스트의 기울어진 부분이 잘려서 표시될 수 있습니다.
   웹브라우저에서 텍스트영역을 일반글자 기준으로 처리한 후 기울임을 적용하면서 발생하는 문제입니다.


---

### imagestretch

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > imagestretch

**Description**

SubCell 의 크기에 맞게 이미지가 확대/축소되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.imagestretch[= enumStretch]
```

**Setting Syntax**

```javascript
enumStretch ::= 'none' | 'fit' | 'fixaspectratio'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "imagestretch", "fit" );
```
- **`"none"`** — SubCell 크기와 관계없이 이미지를 원본 그대로 표시합니다.
원본 이미지가 SubCell 크기보다 클 경우 이미지가 잘려서 표시됩니다.
- **`"fit"`** — SubCell 크기에 맞게 이미지의 가로/세로 비율을 변경하여 표시합니다.
이미지가 잘리지 않으나 가로/세로 비율에 따라 이미지가 일그러질 수 있습니다.
- **`"fixaspectratio"`** — 이미지의 가로/세로 비율을 유지하며 Cell 에 전체 이미지를 표시합니다.
이미지에 일그러짐은 없으나 가로/세로 비율에 따라 Cell 에 공백이 표시될 수 있습니다

**Remark**

- imagestretch 속성값을 설정하지 않으면 "none"으로 적용됩니다.


---

### letter-spacing

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > letter-spacing

**Description**

CellSubCellControl 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.letterSpacing[= strspace]
```

**Setting Syntax**

```javascript
strspace ::= 'normal' | <nVal> ['px']
```
```javascript
* XCSS
letter-spacing : 2px ;

* Script ( normal property )
this.Grid00.setSubCellProperty( "body", 0, 0, "letterSpacing", "2px" );
```
- **`"normal"`** — 문자 사이의 간격(자간)을 설정하지 않습니다.
- **`<nVal>`** — 문자 사이의 간격(자간)을 pixel 단위로 설정합니다.

스크립트 작성 시에는 "px" 단위 표기를 생략할 수 있습니다.
(XCSS 작성 시에는 "px" 단위를 포함해 작성해야 합니다).

**Remark**

- letter-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "letterSpacing"을 사용해야 합니다.


---

### locale

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > locale

**Description**

SubCell 에 적용될 국가 및 언어(locale)를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.locale[= strlocale]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "locale", "ko_KR" );
```
- **`strlocale`** — "언어[_국가]" 형식의 문자열로 설정합니다.

**Remark**

- ISO 639-1에서 정의하고 있는 2-알파벳 언어 코드와 ISO 3166-1에서 정의하고 있는 2-알파벳 국가 코드를 조합하여 사용합니다.

- 국가 및 언어 코드는 "Appendix > Locale Code List" 항목을 참고하세요.


---

### maskeditautoselect

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > maskeditautoselect

**Description**

SubCell 의 edittype 속성값이 "mask" 일 경우 편집영역이 활성화 될 때 텍스트를 전체선택 할지 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.maskeditautoselect[= bAutoselect]
```

**Setting Syntax**

```javascript
bAutoselect ::= 'true' | 'false'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "maskeditautoselect", "true" );
```
- **`true`** — SubCell 의 편집영역이 활성화 될 때 텍스트가 전체선택 됩니다.
- **`false`** — SubCell 의 편집영역이 활성화 될 때 텍스트가 선택되지 않습니다.

**Remark**

- maskeditautoselect 속성값을 설정하지 않으면 false 로 적용됩니다.


◆ web runtime environment 제약

- 마우스 또는 터치에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 정상동작합니다.
  그러나 setFocus() 메소드에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 되지 않을 수 있습니다.


---

### maskeditclipmode

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > maskeditclipmode

**Description**

SubCell 의 maskeditformat 속성에 설정된 형식 중 입력하지 않은 마스크에 대한 처리 방법을 결정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.maskeditclipmode[= enumClipMode]
```

**Setting Syntax**

```javascript
enumClipmode ::= 'includespace' | 'excludespace'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "maskeditclipmode", "includespace" );
```
- **`"includespace"`** — 입력하지 않은 마스크와 입력한 스페이스 문자를 모두 공백으로 처리하여 SubCell 에 저장합니다.

maskedittrimtype 속성에서 좌우공백에 대한 처리를 추가적으로 설정할 수 있습니다.
- **`"excludespace"`** — 입력하지 않은 마스크는 잘라내고 스페이스를 포함하여 입력된 문자를 왼쪽으로 모아서 SubCell 에 저장합니다.

maskedittrimtype 속성값이 무시되어 좌우공백을 추가적으로 처리할 수 없습니다.

**Remark**

- maskeditclipmode 속성값을 설정하지 않으면 "includespace"로 적용됩니다.

- SubCell 의 edittype 속성값이 "mask" 인 경우에만 적용되는 속성입니다.


---

### maskeditformat

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > maskeditformat

**Description**

SubCell 의 edittype 속성값이 "mask" 일 때 입력 받을 문자의 형식을 지정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.maskeditformat[= strFormat]
```

**Setting Syntax**

```javascript
strFormat ::= <strSNummask> | <strStringmask>

<strSNummask> ::= [<strSignmask>] <strNumbermask>
```
```javascript
this.Grid00.setSubCellProperty("body",0,0,"maskeditformat", "@@@@") ;
this.Grid00.setSubCellProperty("body",0,0,"maskeditformat","###,000.00##") ;
this.Grid00.setSubCellProperty("body",0,0,"maskeditformat","999,000.0099") ;
```
- **`<strSignmask>`** — SubCell 의 editype 속성값이 "mask" 이고, maskedittype 속성값이 "number" 일 때 숫자 앞에 사용될 부호 마스크를 설정합니다.

1. 부호 마스크 문자
  "-" : 음수기호만 입력가능
  "+" : 양수기호만 입력가능
  "!" : 음수/양수기호 모두 입력 불가능

값을 지정하지 않으면 음수/양수기호 모두 입력 가능합니다.
- **`<strNumbermask>`** — SubCell 의 editype 속성값이 "mask" 이고, maskedittype 속성값이 "number" 일 때 적용되는 마스크를 설정합니다.

마스크 문자를 설정하면 정수부는 자릿수 제한이 없고, 소수부는 마스크에 의해 자릿수가 제한됩니다.
마스크 문자를 설정하지 않으면 정수부와 소수부 입력에 제한이 없으며, "," 마스크가 자동으로 적용됩니다.
마스크로 허용된 문자가 아닌 문자는 모두 무시됩니다.

1. 숫자 마스크 문자
  "#" : "0~9" 의 10진수 숫자를 허용
        "0" 마스크와 소수점 사이에 설정 시 "0" 마스크로 동작됨
        SubCell 값이 없거나 0 이면 값이 표시되지 않음
        정수부에 0 을 입력 후 입력확정(Enter입력)하면 정수부의 0 은 표시되지 않음
  "9" : "0~9" 의 10진수 숫자를 허용
        "0" 마스크와 소수점 사이에 설정 시 "0" 마스크로 동작됨
        SubCell 값이 없으면 값이 표시되지 않고, Cell 값이 0 이면 0 이 표시됨
        정수부에 0 을 입력 후 입력확정(Enter입력)하면 정수부의 0 은 표시되지 않음
  "0" : "0~9"의 10진수 숫자를 허용
        해당 자릿수에 입력된 값이 없을 경우 0 이 표시됨
        SubCell 값이 없거나 0 이면 0 이 표시됨
        SubCell 이 편집상태일 때는 표시되지 않고, SubCell 이 편집상태가 아닐 때만 표시됨
        정수부에 0 을 입력 후 입력확정(Enter입력)하면 정수부의 0 을 표시함
  "." : 소수점 표시
        소수점 마스크를 2개 이상 설정 시 가장 왼쪽에 위치한 소수점이 적용되고, 이외의 소수점 마스크는 무시됨
        소수점 마스크만 설정 시 마스크를 설정하지 않은것처럼 처리됨
        locale 속성값에 따라 소수점 표시에 "." 문자외에 다른 문자가 표시될 수 있음
  "," : 콤마 표시
        화면에만 표시되고 실제 Cell 값에는 적용되지 않음
        콤마 마스크 설정 시 "," 마스크의 위치에 관계 없이 locale 속성값에 맞게 정수부에 "," 가 표시됨
        locale 속성값이 설정되지 않으면 정수부 자릿수의 3자리마다 "," 가 표시됨
        locale 속성값에 따라 콤마 표시에 "," 문자외에 다른 문자가 표시될 수 있음

ex) SubCell 값이 1234.567 일 때 maskeditformat 속성값이 아래와 같은 경우
 ㄱ. "09999.99"      // "01234.56" 으로 표시됨
 ㄴ. "#9900.0090"    // "1234.5670" 으로 표시됨
 ㄷ. "9,999.##"      // "1,234.56" 으로 표시됨

ex) SubCell 값이 0 일 때 maskeditformat 속성값이 아래와 같은 경우
 ㄱ. "##.#"          // "" 으로 표시됨
 ㄴ. "99.9"          // "0" 으로 표시됨
 ㄷ. "00.0"          // "00.0" 으로 표시됨
 
ex) SubCell 값이 0.1 일 때 maskeditformat 속성값이 아래와 같은 경우
 ㄱ. "#.#"           // ".1" 로 표시됨
 ㄴ. "9.9"           // ".1" 로 표시됨
 ㄷ. "0.0"           // "0.1" 로 표시됨
- **`<strStringmask>`** — SubCell 의 editype 속성값이 "mask" 이고, maskedittype 속성값이 "string" 일 때 적용되는 마스크를 설정합니다.

1. 문자열 마스크 문자
  "@" : 모든 Ascii 문자 (한글과 같은 다국어 문자는 입력 불가)
  "#" : "0~9"의 10진수 숫자
  "*" : "a~z"의 소문자와 "A~Z" 의 대문자
  "9" : "a~z"의 소문자, "A~Z" 의 대문자, "0~9" 의 10진수 숫자
  "A" : "A~Z"의 대문자
  "a" : "a~z"의 소문자
  "Z" : "A~Z"의 대문자와 "0~9" 의 10진수 숫자
  "z" : "a~z"의 소문자와 "0~9" 의 10진수 숫자

2. 홑따옴표(') 활용
홑따옴표(')는 화면에 표시되지 않고, 홑따옴표(') 사이의 문자는 마스크 문자로 적용하지 않고 화면에 그대로 표시됩니다.
  ex) "@'A'@" 는 화면에 "_A_" 로 표시됩니다.

3. "\" 활용
"\" 문자는 다음에 오는 문자를 마스크 문자로 적용하지 않고 화면에 그대로 표시합니다.
홑따옴표(')를 표시하거나, "\" 를 표시할때 사용하게 됩니다.

"\" 문자는 Dataset Column, Form Design 영역과 Script 영역에서 사용할때 사용법이 다릅니다.
Dataset Column, Form Design에서 사용한 "\" 문자는 자동적으로 "\\" 로 변환을 해주고 있습니다.
Script 에서 사용한 "\" 문자는 자동적으로 "\\" 로 변환을 해주지 않습니다.(Component 의 property 참조는 해당 안됨.)
  ex) Form Design maskeditformat property "@\\@" 는 "@\\\\@" 로 생성되고 "_\_" 로 표시됩니다.
       Form Design maskeditformat property "@\'@" 는 "@\\'@" 로 생성되고 "_'_" 로 표시됩니다.
       Script setSubCellProperty("body",0,"maskeditformat", "@\\\\@") 는 "_\_"로 표시됩니다.
       Script setSubCellProperty("body",0,"maskeditformat", "@\\@") 는 "_'_"로 표시됩니다.

4. PassWord 처리
"{ }" 문자로 마스크 문자를 감싸면 해당 마스크 문자가 "*" 문자로 대체되어 출력됩니다.
입력되는 문자 일부를 PassWord 로 처리하기 위해 사용하게 됩니다.
  ex) maskeditformat 속성값이 "@@@{999}" 이고, SubCell 값이 "123456" 이면 화면에 "123***" 로 표시됩니다.

5. 마스크 문자 제외 출력
SubCell 값에 마스크 문자와 대응하는 값 이외의 값이 있을 경우 아래 조건에서 겹침표시가 됩니다.

  a. maskeditformat 속성값에 정의된 마스크의 길이와 SubCell 값의 길이가 일치하는 경우.
  b. maskeditformat 속성값에 정의된 마스크 문자가 아닌 모든 문자가 SubCell 값과 위치관계상 일치하는경우.

위의 a,b를 모두 만족할 경우는 SubCell 값 중 마스크 문자와 대응되는 값 이외 값을 무시하게 됩니다.

  ex )  maskeditformat 속성값이 "@@@@-@@-@@" 일 때
   ㄱ. SubCell 값이 "20060607" 이면 "2006-06-07" 으로 표시됨
   ㄴ. SubCell 값이 "200606" 이면 "2006-06-__" 으로 표시됨
   ㄷ. SubCell 값이 "2006-06" 이면 "2006--0-6_" 으로 표시됨
   ㄹ. SubCell 값이 "2006-06-07" 이면 "2006-06-07" 으로 겹침표시됨.
   ㅁ. SubCell 값이 "2006-06-07 13" 이면 "2006--0-6-" 으로 표시됨.

위와 같이 a,b 조건을 만족하는 ㄹ 의 경우만 겹침으로 표시되며, 그외에는 겹침표시 되지 않습니다.

**Remark**

- edittype 속성값이 "date" 일 때 입력형식은 calendareditformat 속성값이 적용됩니다.
   displaytype 속성값이 "date", "calendarcontrol" 일 때 표시형식은 calendardateformat 속성값이 적용됩니다.

- SubCell 의 editype 속성값이 "mask" 이고, maskedittype 속성값이 "number" 일 때 0.1 과 같이 소수형태로 입력했을 경우 입력확정 후 마스크에 따라 정수부에 입력된 0 이 표시되지 않을 수 있습니다.


◆ Excel Export 제약

- maskeditformat 속성값이 "##.##" 이고, 데이터값이 "2" 일 때 Grid 는 "2" Excel 은 "2." 으로 출력되는사항은
   Grid 와 Excel 의 마스크 적용방식의 차이이므로 Excel 에서 마스크를 제거하여 사용해야 합니다.


◆ Android NRE 제약

- 일부 키패드의 경우 한글자판에서 입력 시 영문으로 자체 변환되는 키패드가 존재합니다.
   이 경우 영문으로 입력이 처리됩니다.


---

### maskeditimeaction

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > maskeditimeaction

**Description**

키보드에 하단 모서리에 표시되는 사용자 작업 버튼 UI와 동작을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.maskeditimeaction[= enumMaskededitimeaction]
```

**Setting Syntax**

```javascript
enumMaskededitimeaction ::= 'none' | 'next' | 'previous'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "maskeditimeaction", "none" );
```
- **`"none"`** — 캐리지 리턴 버튼을 표시합니다.
- **`"next"`** — 다음 버튼을 표시합니다.
TAB 키 입력과 같은 동작을 처리합니다 (다음 컴포넌트로 포커스가 이동합니다).
- **`"previous"`** — 이전 버튼을 표시합니다.
SHIFT + TAB 키 입력과 같은 동작을 처리합니다 (이전 컴포넌트로 포커스가 이동합니다).

**Remark**

- 속성값을 설정하지 않으면 "none" 으로 적용됩니다.
- 운영체제 또는 키보드 앱에서 지원하지 않는 경우 UI가 원하는 형식으로 변경되지 않을 수 있습니다.
  UI가 변경되지 않더라도 키 입력 시 발생하는 이벤트는 정상적으로 처리됩니다.
- 키보드가 표시된 상태에서 속성값을 변경하면 현재 키보드 UI에는 반영되지 않습니다.
키보드가 다시 표시될때 변경된 속성값이 반영됩니다.
- onkeydown > onkeyup > onimeaction 순으로 이벤트가 발생합니다.


---

### maskeditlimitbymask

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > maskeditlimitbymask

**Description**

SubCell 의 edittype 속성값이 "mask" 이고 maskedittype 속성값이 "number" 일 때, maskeditformat 속성의 마스크 값이 적용되는 부분을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.maskeditlimitbymask[= enumLimitmask]
```

**Setting Syntax**

```javascript
enumLimitmask ::= 'none' | 'integer' | 'decimal' | 'both'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "maskeditlimitbymask", "integer" );
```
- **`"none"`** — maskeditformat 속성값과 관계없이 숫자값 입력에 제한을 두지 않습니다.
- **`"integer"`** — 정수부분만 maskeditformat 속성값에 따라 입력을 제한합니다.
소수부분은 maskeditformat 속성값이 정의되어 있어도 제한없이 입력이 가능합니다.
- **`"decimal"`** — 정수부분은 maskeditformat 속성값이 정의되어 있어도 제한없이 입력이 가능합니다.
소수부분만 maskeditformat 속성값에 따라 입력을 제한합니다.
- **`"both"`** — 정수부분과 소수부분 모두 maskeditformat 속성값에 따라 입력을 제한합니다.

**Remark**

- maskeditlimitbymask 속성값을 설정하지 않으면 "decimal"로 적용됩니다.

- 부호(Sign)는 maskeditlimitbymask 속성값에 관계없이 입력할 수 있습니다.

- 예를 들어 maskeditformat 속성값이 "###.##"이고, maskeditlimitbymask 속성값이 "decimal" 이면 소수부 입력 시 두자리 숫자까지만 입력됩니다.


---

### maskeditmaskchar

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > maskeditmaskchar

**Description**

SubCell 의 maskeditformat 속성에 정의된 마스크 문자에 대응하는 문자를 지정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.maskeditmaskchar[= strMaskchar]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "maskeditmaskchar", "=" );
```
- **`strMaskchar`** — maskeditformat 속성에 정의된 마스크("#","@","yyyy" 등) 위치에 표시될 문자를 설정합니다.

**Remark**

- maskeditmaskchar 속성값을 설정하지 않으면 언더바("_")로 적용됩니다.

- edittype 속성값이 "mask","date" 인 경우에만 적용되는 속성입니다.

- Grid 의 Head, Body, Summary 밴드에 속한 SubCell 에 공통 적용되는 속성입니다.


---

### maskeditpostfixtext

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > maskeditpostfixtext

**Description**

표시되는 텍스트 뒤에 붙여서 표시할 문자열을 지정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.maskeditpostfixtext[= strPostFixText]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "maskeditpostfixtext", "%");
```
- **`strPostFixText`** — 표시되는 텍스트 뒤에 붙여서 표시할 문자열을 설정합니다.

**Remark**

- 속성값을 설정하지 않으면 표시되는 텍스트에 영향을 미치지 않습니다.
- maskedittype 속성값이 "number"인 경우에는 maskeditformat 속성값 설정 시 숫자를 표기하기 위한 마스크 문자 외에 다른 문자를 설정할 수 없습니다. 때문에 "20%"와 같은 텍스트를 표시할 수 없습니다. maskeditpostfixtext 속성값을 "%"로 지정하면 숫자 뒤에 원하는 문자열을 설정해서 표시할 수 있습니다.


---

### maskedittrimtype

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > maskedittrimtype

**Description**

SubCell 의 maskeditformat 속성에 설정된 형식 중 좌우 공백에 대한 처리 방법을 결정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.maskedittrimtype[= enumTrimtype]
```

**Setting Syntax**

```javascript
enumTrimtype ::= 'none' | 'left' | 'right' | 'both'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "maskedittrimtype", "both" );
```
- **`"none"`** — 입력하지 않은 마스크와 입력한 스페이스 문자를 모두 공백으로 처리하여 SubCell 에 저장합니다.
- **`"left"`** — 왼쪽에 입력하지 않은 마스크와 입력한 스페이스 문자는 잘라내고 입력된 문자를 왼쪽으로 모아서 SubCell 에 저장합니다.

오른쪽에 입력하지 않은 마스크와 입력한 스페이스 문자를 모두 공백으로 처리하여 SubCell 에 저장합니다.
- **`"right"`** — 왼쪽에 입력하지 않은 마스크와 입력한 스페이스 문자를 모두 공백으로 처리하여 SubCell 에 저장합니다.

오른쪽에 입력하지 않은 마스크와 입력한 스페이스 문자는 잘라내고 SubCell 에 저장합니다.
- **`"both"`** — 왼쪽과 오른쪽에 입력하지 않은 마스크와 입력한 스페이스 문자는 모두 잘라내고 입력된 문자를 왼쪽으로 모아서 SubCell 에 저장합니다.

**Remark**

- maskedittrimtype 속성값을 설정하지 않으면 "none"으로 적용됩니다.

- SubCell 의 edittype 속성값이 "mask" 이고, maskeditclipmode 속성값이 "includespace" 인 경우에만 적용되는 속성입니다.

- maskedittrimtype 속성은 사용자가 직접 입력할 때만 적용됩니다.
   스크립트로 SubCell 값을 설정할 때는 적용되지 않습니다.


---

### maskedittype

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > maskedittype

**Description**

SubCell 의 edittype 속성값이 "mask" 일 때 Cell 에 입력되는 값의 형식을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.maskedittype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'number' | 'string'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "maskedittype", "number" );
this.Grid00.setSubCellProperty( "body", 0, 0, "maskedittype", "string" );
```
- **`"number"`** — SubCell 에서 숫자 형식으로 입력을 받습니다.

maskeditformat, maskeditlimitbymask 속성값이 입력방식에 영향을 줍니다.
- **`"string"`** — SubCell 에서 문자 형식으로 입력을 받습니다.

maskeditformat, maskeditmaskchar, maskeditclipmode, maskedittrimtype 속성값이 입력방식에 영향을 줍니다.

**Remark**

- maskedittype 속성값을 설정하지 않으면 "number"로 적용됩니다.


---

### multicomboautoselect

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > multicomboautoselect

**Description**

SubCell이 MultiCombo 형식일 때 편집영역이 활성화되면 텍스트를 전체선택 할지 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.multicomboautoselect[= bAutoselect]
```

**Setting Syntax**

```javascript
bAutoselect ::= 'true' | 'false'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "multicomboautoselect", "true" );
```
- **`true`** — SubCell의 편집영역이 활성화될 때 텍스트가 전체선택 됩니다.
- **`false`** — SubCell의 편집영역이 활성화될 때 텍스트가 선택되지 않습니다.

**Remark**

- multicomboautoselect 속성값을 설정하지 않으면 false로 적용됩니다.

- SubCell 이 MultiCombo 형식일 때 편집영역이 활성화되려면 edittype 속성값이 "multicombo"이고, multicombotype 속성값이 "dropdown" 이외의 값이어야 합니다.


◆ WRE 제약

- 마우스 또는 터치에 의해 편집영역이 활성화될 때는 텍스트 전체선택이 정상동작합니다.
  그러나 setFocus() 메서드에 의해 편집영역이 활성화될 때는 텍스트 전체선택이 되지 않을 수 있습니다.


---

### multicombobuttonsize

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > multicombobuttonsize

**Description**

SubCell이 MultiCombo 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.multicombobuttonsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "multicombobuttonsize", "30");
this.Grid00.setSubCellProperty( "body", 0, 0, "multicombobuttonsize", "30 20");
```
- **`<strWidth>`** — 드롭다운 버튼의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 드롭다운 버튼의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- multicombobuttonsize 속성값을 설정하지 않으면 Grid의 cellmulticombobuttonsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### multicombocodecol

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > multicombocodecol

**Description**

SubCell이 MultiCombo 형식일 때 SubCell의 아이템 리스트에서 코드값으로 사용될 Column을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.multicombocodecol[= strColumnID]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "multicombocodecol", "column0");
```
- **`strColumnID`** — SubCell의 multicombodataset 속성에 설정된 DataSet의 Column 중 코드값으로 사용할 Column의 ID를 문자열로 설정합니다.

**Remark**

- SubCell의 edittype 속성값이 "multicombo" 일 경우 적용되는 속성입니다.
  SubCell의 displaytype 속성값이 "multicombocontrol" 일 경우 적용되는 속성입니다.

- multicombocodecol 속성은 Body 밴드 영역의 SubCell 에만 적용되는 속성입니다.

- multicombocodecol 속성을 설정하지 않으면 내부적으로 multicombodatacol 속성값을 사용합니다.

- multicombocodecol 속성에 설정된 Column의 값은 아이템 리스트에 표시되지 않고 각 아이템의 코드값으로 처리됩니다.
  multicombodatacol 속성에 설정된 Column의 값은 아이템 리스트에 표시되며 각 아이템의 데이터값으로 처리됩니다.

- 아이템 리스트의 코드값은 아이템을 구분하는 유일값으로 중복값을 가질 수 없습니다.
  만일 중복된 코드값이 존재할 경우 중복코드값의 첫 번째 아이템이 항상 선택처리됩니다.
   
- SubCell에서 선택된 아이템의 코드값은 SubCell의 text 속성에 저장되고 Grid에 바인딩된 DataSet에 반영됩니다.
  SubCell에는 선택된 코드값에 해당하는 아이템 리스트의 데이터값이 텍스트로 표시됩니다.


---

### multicombocounttextformat

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > multicombocounttextformat

**Description**

SubCell이 MultiCombo 형식이고 multicomboedittype 속성값이 "count"일 때 선택된 아이템을 표시할 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.multicombocounttextformat[= strExpr]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "multicombocounttextformat", "[#]개 아이템을 선택했습니다.");
```
- **`strExpr`** — 선택된 아이템을 표시할 텍스트를 설정합니다.

값 설정 시 전체 아이템 개수와 선택한 아이템 개수를 아래 기호로 설정할 수 있습니다.
  [*] : 전체 아이템 개수
  [#] : 선택한 아이템 개수

**Remark**

- multicombocounttextformat 속성값을 설정하지 않으면 "[#] item(s) selected"으로 적용됩니다.


---

### multicombodatacol

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > multicombodatacol

**Description**

SubCell이 MultiCombo 형식일 때 Cell의 아이템 리스트에서 데이터값으로 사용될 Column을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.multicombodatacol[= strColumnID]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "multicombodatacol", "column1");
```
- **`strColumnID`** — SubCell의 multicombodataset 속성에 설정된 DataSet의 Column 중 데이터값으로 사용할 Column의 ID를 문자열로 설정합니다.

**Remark**

- SubCell의 edittype 속성값이 "multicombo" 일 경우 적용되는 속성입니다.
  SubCell의 displaytype 속성값이 "multicombocontrol" 일 경우 적용되는 속성입니다.

- multicombodatacol 속성은 Body 밴드 영역의 SubCell 에만 적용되는 속성입니다.

- multicombodatacol 속성을 설정하지 않으면 내부적으로 multicombocodecol 속성값을 사용합니다.

- multicombodatacol 속성에 설정된 Column의 값은 아이템 리스트에 표시되며 각 아이템의 데이터값으로 처리됩니다.
  multicombocodecol 속성에 설정된 Column의 값은 아이템 리스트에 표시되지 않고 각 아이템의 코드값으로 처리됩니다.

- 아이템 리스트의 코드값은 아이템을 구분하는 유일값으로 중복값을 가질 수 없습니다.
  만일 중복된 코드값이 존재할 경우 중복코드값의 첫 번째 아이템이 항상 선택처리됩니다.
   
- SubCell에서 선택된 아이템의 코드값은 SubCell의 text 속성에 저장되고 Grid에 바인딩된 DataSet에 반영됩니다.
  SubCell에는 선택된 코드값에 해당하는 아이템 리스트의 데이터값이 텍스트로 표시됩니다.


---

### multicombodataset

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > multicombodataset

**Description**

SubCell이 MultiCombo 형식일 때 SubCell의 아이템 리스트를 구성할 DataSet의 ID를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.multicombodataset[= strDatasetID]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "multicombodataset", "Dataset00");
```
- **`strDatasetID`** — SubCell의 아이템 리스트를 구성할 DataSet의 ID를 문자열로 설정합니다.

**Remark**

- SubCell에서 MultiCombo 아이템 리스트를 사용하기 위해서는 multicombocodecol과 multicombodatacol 중 한 개 속성과 multicombodataset 속성을 설정하여야 합니다.

- multicombodataset 속성에 설정한 DataSet 이 존재하지 않거나 데이터가 없을 경우 아이템 리스트가 정상적으로 표시되지 않습니다.

- multicombodataset 속성은 Body 밴드 영역의 SubCell 에만 적용되는 속성입니다.


---

### multicombodisplaynulltext

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > multicombodisplaynulltext

**Description**

SubCell이 MultiCombo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시할 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.multicombodisplaynulltext[= strText]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "multicombodisplaynulltext", "No Data");
```
- **`strText`** — SubCell 이 MultiCombo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시할 텍스트를 설정합니다.

**Remark**

- MultiCombo 아이템의 코드값에 현재 SubCell에 바인드 된 값이 없는 상태에서
   SubCell에 포커스가 없고, multicombodisplaynulltype 속성값이 "nulltext" 일 때 대체 텍스트가 표시됩니다.


---

### multicombodisplaynulltype

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > multicombodisplaynulltype

**Description**

SubCell이 MultiCombo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시되는 값의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.multicombodisplaynulltype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'nulltext'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "multicombodisplaynulltype", "nulltext" );
```
- **`"none"`** — SubCell에 바인드 된 값과 일치하는 콤보 아이템이 없을 경우 빈 문자열을 표시합니다.
- **`"nulltext"`** — SubCell에 바인드 된 값과 일치하는 콤보 아이템이 없을 경우 combodisplaynulltext 속성값을 표시합니다.

**Remark**

- multicombodisplaynulltype 속성값을 설정하지 않으면 "none"으로 적용됩니다.


---

### multicombodisplayrowcount

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > multicombodisplayrowcount

**Description**

SubCell이 MultiCombo 형식일 때 아이템 리스트에 한 번에 표시될 아이템의 개수를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.multicombodisplayrowcount[= nRowNum]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "multicombodisplayrowcount", "5");
```
- **`nRowNum`** — 아이템 리스트에 표시될 아이템의 개수를 숫자로 설정합니다.

undefined 를 설정하면 아이템 리스트가 표시되는 공간에 맞게 자동으로 개수가 설정됩니다.

**Remark**

- Grid의 Body 밴드 영역에 속한 SubCell 만 적용되는 속성입니다.

- multicombodisplayrowcount 속성값을 설정하지 않으면 undefined로 적용됩니다.

- multicombodisplayrowcount 속성값 보다 아이템의 개수가 작으면 아이템 개수에 맞게 리스트가 표시됩니다.

- multicombodisplayrowcount 속성값 보다 아이템의 개수가 많으면 아이템 리스트에 스크롤이 표시됩니다.

- MultiCombo 하단에 아이템 3개를 표시할 공간이 없다면 아이템 리스트가 MultiCombo 상단에 표시됩니다.
  상/하단 모두 아이템 3개를 표시할 공간이 없다면 더 넓은 방향으로 리스트가 표시됩니다.


---

### multicomboedittype

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > multicomboedittype

**Description**

SubCell이 MultiCombo 형식일 때 선택된 아이템의 표시 방식을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.multicomboedittype[= enumMode]
```

**Setting Syntax**

```javascript
enumMode ::= "text" | "singletag" | "multitag" | "count"
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "multicomboedittype", "multitag");
```
- **`"text"`** — 선택된 아이템을 텍스트로 표시합니다.
- **`"singletag"`** — 선택된 아이템을 한 줄의 태그로 표시합니다.
- **`"multitag"`** — 선택된 아이템을 여러 줄의 태그로 표시합니다.
- **`"count"`** — 선택된 아이템을 개수로 표시합니다.

**Remark**

- multicomboedittype 속성값을 설정하지 않으면 "text"로 적용됩니다.


---

### multicomboimemode

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > multicomboimemode

**Description**

SubCell이 MultiCombo 형식일 때 편집창에서 사용될 기본 입력 언어를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.multicomboimemode[= enumImemode]
```

**Setting Syntax**

```javascript
enumImemode ::= 'none' | 'alpha' | 'alpha,full' | 'hangul' | 'hangul,full' | 'katakana' | 'katakana,full' | 'hiragana' | 'direct'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "multicomboimemode", "alpha" );
```
- **`"none"`** — 기본 입력 언어를 변경하지 않고 현재 시스템에 설정된 언어를 유지합니다.
- **`"alpha"`** — 입력언어를 영문으로 설정합니다.

IME 가 동아시아 입력기(한글/일본어/한자) 일 경우만 적용됩니다.
- **`"alpha,full"`** — 입력언어를 영문 전각으로 설정합니다.

IME 가 동아시아 입력기(한글/일본어/한자) 일 경우만 적용됩니다.
- **`"hangul"`** — 입력언어를 한글로 설정합니다.

IME 가 한글 입력기일 경우만 적용됩니다.
- **`"hangul,full"`** — 입력언어를 한글 전각으로 설정합니다.

IME 가 한글 입력기일 경우만 적용됩니다.
- **`"katakana"`** — 입력언어를 일본어 가나로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"katakana,full"`** — 입력언어를 일본어 가나 전각으로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"hiragana"`** — 입력언어를 일본어 히라가나 전각으로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"direct"`** — 입력언어를 일본어 직접입력으로 설정합니다.

IME 가 IME2002 의 일본어 입력기일 경우만 적용됩니다.
IME 가 IME2007 과 2010 일 경우는 "alpha"로 적용됩니다.

**Remark**

- multicomboimemode 속성값을 설정하지 않으면 "none"으로 적용됩니다.

- SubCell 이 포커스를 받아 편집창이 활성화될 때 IME 가 재설정됩니다.

- 일부 환경에서만 지원하는 속성이므로 상단의 지원 환경을 확인하시기 바랍니다.
   > Windows NRE, Android NRE에서만 지원하는 속성입니다.
   > macOS NRE, iOS/iPadOS NRE, WRE에서는 지원하지 않는 속성입니다.


---

### multicomboitemheight

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > multicomboitemheight

**Description**

SubCell이 MultiCombo 형식일 때 아이템 리스트의 각 행의 높이를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.multicomboitemheight[= nHeight]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "multicomboitemheight", "30");
```
- **`nHeight`** — 각 아이템이 표시되는 행의 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- multicomboitemheight 속성을 설정하지 않으면 글자 크기를 기준으로 행의 높이를 자동 계산합니다.


---

### multicombopopupsize

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > multicombopopupsize

**Description**

SubCell이 MultiCombo 형식일 때 팝업으로 표시되는 아이템 리스트의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.multicombopopupsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "multicombopopupsize", "500 400");
```
- **`<strWidth>`** — 아이템 리스트의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 아이템 리스트의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- multicombopopupsize 속성값을 설정하지 않으면 Grid 의 cellmulticombopopupsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### multicombopopuptype

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > multicombopopuptype

**Description**

SubCell이 MultiCombo 형식일 때 아이템 리스트가 표시되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.multicombopopuptype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'normal' | 'center'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "multicombopopuptype", "center");
```
- **`"none"`** — 아이템 리스트를 화면에 표시하지 않습니다.
- **`"normal"`** — 아이템 리스트가 표시되는 일반적인 규칙을 따릅니다.
- **`"center"`** — 애플리케이션이 실행 중인 화면의 중앙에 아이템 리스트가 표시됩니다

**Remark**

- multicombopopuptype 속성값을 설정하지 않으면 Grid의 cellmulticombopopuptype 속성값이 적용됩니다.

- 모바일환경 같은 특별한 경우에 제한적으로 사용해야 하는 속성입니다.

- 다중 모니터의 경우 Grid 가 표시되고 있는 모니터를 기준으로 아이템 리스트가 표시됩니다.


---

### multicomboreadonlycolumn

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > multicomboreadonlycolumn

**Description**

SubCell이 MultiCombo 형식일 때 아이템 readonly 여부 설정 시 사용될 Column을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.multicomboreadonlycolumn [=strColumnID]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "multicomboreadonlycolumn", "column0");
```
- **`strColumnID`** — multicombodataset 속성에 설정된 Dataset 오브젝트의 Column 중 아이템 readonly 여부를 설정할 Column의 ID를 문자열로 설정합니다.


---

### multicomboscrollbarsize

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > multicomboscrollbarsize

**Description**

SubCell이 MultiCombo 형식일 때 아이템 리스트에 표시되는 스크롤바의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.multicomboscrollbarsize[= nWidth]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "multicomboscrollbarsize", "20" );
```
- **`nWidth`** — 스크롤바의 너비를 숫자로 설정합니다.

**Remark**

- multicomboscrollbarsize 속성값을 설정하지 않으면 Grid 의 cellmulticomboscrollbarsize 속성값이 적용됩니다.

- scrollbarsize 속성값을 변경하면 스크롤바 내부버튼의 높이와 너비가 같이 변경됩니다.


---

### multicomboshowselectallcheckbox

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > multicomboshowselectallcheckbox

**Description**

SubCell이 MultiCombo 형식일 때 아이템 리스트 상단에 아이템 전체를 선택 또는 선택해제하는 체크박스의 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.showselectallcheckbox [=bSelectall]
```

**Setting Syntax**

```javascript
bSelectall ::= true | false
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "showselectallcheckbox", true);
```
- **`true`** — 아이템 전체를 선택 또는 선택해제하는 체크박스를 아이템 리스트 상단에 표시합니다.
- **`false`** — 아이템 전체를 선택 또는 선택해제하는 체크박스를 아이템 리스트 상단에 표시하지 않습니다.

**Remark**

- multicomboshowselectallcheckbox 속성값을 설정하지 않으면 false로 적용됩니다.


---

### multicombotextseparator

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > multicombotextseparator

**Description**

SubCell 이 MultiCombo 형식일 때 2개 이상의 text 속성값 설정 시 구분자로 사용할 값을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.multicombotextseparator[= strTextSeparator]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "multicombotextseparator", ";");
```
- **`strTextSeparator`** — 구분자를 설정합니다.

**Remark**

- multicombotextseparator 속성값을 설정하지 않으면 ","로 적용됩니다.


---

### multicombotype

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > multicombotype

**Description**

SubCell이 MultiCombo 형식일 때 동작하는 방법을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.multicombotype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'dropdown' | 'search' | 'filter' | 'filterlike' | 'caseisearch' | 'caseifilter' | 'caseifilterlike'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "multicombotype", "dropdown");
```
- **`"dropdown"`** — Combo 의 아이템 리스트에 전체 아이템이 모두 표시됩니다.

SubCell 의 편집창에 문자를 입력할 수 없습니다.
- **`"search"`** — SubCell 의 편집창에 문자열 입력 시 Combo 의 검색기능이 활성화됩니다.

편집창에 입력된 문자열로 시작하는 첫번째 아이템이 선택된 아이템 리스트가 표시됩니다.
편집창에 입력된 문자열로 시작하는 아이템이 없을 경우 아이템 리스트가 표시되지 않습니다.

아이템 리스트에는 전체 아이템이 모두 표시됩니다.
아이템 검색 시 대소문자를 구별합니다.
- **`"filter"`** — SubCell 의 편집창에 문자열 입력 시 Combo 의 필터기능이 활성화됩니다.

편집창에 입력된 문자열로 시작하는 아이템만 있는 아이템 리스트가 표시됩니다.
편집창에 입력된 문자열로 시작하는 아이템이 없을 경우 아이템 리스트가 표시되지 않습니다.

문자를 추가로 입력하면 아이템 리스트가 자동으로 갱신됩니다.
아이템 필터 시 대소문자를 구별합니다.
- **`"filterlike"`** — SubCell 의 편집창에 문자열 입력 시 Combo 의 필터기능이 활성화됩니다.

편집창에 입력된 문자열이 포함된 아이템만 있는 아이템 리스트가 표시됩니다.
편집창에 입력된 문자열이 포함된 아이템이 없을 경우 아이템 리스트가 표시되지 않습니다.

문자를 추가로 입력하면 아이템 리스트가 자동으로 갱신됩니다.
아이템 필터 시 대소문자를 구별합니다.
- **`"caseisearch"`** — SubCell 의 편집창에 문자열 입력 시 Combo 의 검색기능이 활성화됩니다.

"search" 값과 동일하게 동작하며 아이템 검색 시 대소문자를 구별하지 않습니다.
- **`"caseifilter"`** — SubCell 의 편집창에 문자열 입력 시 Combo 의 필터기능이 활성화됩니다.

"filter" 값과 동일하게 동작하며 아이템 필터 시 대소문자를 구별하지 않습니다.
- **`"caseifilterlike"`** — SubCell 의 편집창에 문자열 입력 시 Combo 의 필터기능이 활성화됩니다.

"filterlike" 값과 동일하게 동작하며 아이템 필터 시 대소문자를 구별하지 않습니다.

**Remark**

- multicombotype 속성값을 설정하지 않으면 "dropdown"으로 적용됩니다.

- multicombotype 속성값에 관계없이 SubCell의 드롭버튼(DropButton) 클릭 시 전체 아이템이 있는 아이템 리스트가 표시됩니다.

- multicombotype 속성을 "dropdown" 이외의 값으로 설정하면 검색/필터 기능이 활성화됩니다.
   검색/필터 기능은 사용자의 입력을 돕기 위한 기능으로 아이템 후보값을 편집 영역과 리스트 창을 통해 표시합니다.

- 아이템 리스트에서 마우스나 키보드에 의해 아이템을 선택하면 입력이 종료된 것으로 처리합니다.


---

### name

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > name

**Description**

CellSubCellControl 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.name
```

**Setting Syntax**

- **`name`** — Control 의 이름을 설정합니다.

**Remark**

- 컴포넌트 내부에 정의된 Control 은 name 을 설정할 수 없습니다.


---

### opacity

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > opacity

**Description**

SubCell 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.opacity[= stropacity]
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8;
opacity : 80%;

* Script ( normal property )
this.Grid00.setSubCellProperty( "body", 0, 0, "opacity", "0.8" );
this.Grid00.setSubCellProperty( "body", 0, 0, "opacity", 0.8 );
this.Grid00.setSubCellProperty( "body", 0, 0, "opacity", "80" );
```
- **`strOpacity`** — 0.0 ~ 1.0 사이의 값 또는 0.0% ~ 100.0% 사이의 값을 지정합니다.
0(또는 0%)을 설정하면 완전 투명, 1(또는 100%)을 설정하면 완전 불투명으로 처리됩니다.
1 이상의 값은 1로, 0 이하의 값은 0으로 처리됩니다. 마찬가지로 100% 이상의 값은 100%로, 0% 이하의 값은 0%로 처리됩니다.

XCSS는 숫자 또는 퍼센트 값으로만 설정할 수 있습니다.
Script는 숫자 또는 문자(숫자, 퍼센트 값)로 설정할 수 있습니다.

**Remark**

- opacity 속성값을 설정하지 않으면 undefined 가 설정되고, 1 로 동작합니다.

- Div 와 같이 자식 컴포넌트를 가질 수 있는 컴포넌트에 opacity 속성을 적용하면 자식 컴포넌트도 함께 적용됩니다.

- 부모와 자식 컴포넌트에 각각 opacity 속성이 설정되어 있으면 자식 컴포넌트의 투명도는 부모의 투명도에 추가적으로 적용됩니다.
   예를 들어 부모의 opacity가 0.5 이고 자식의 opacity가 0.4 이면 결과적으로 자식 컴포넌트는 0.2 의 투명도가 적용됩니다.


---

### progressbarblockgap

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > progressbarblockgap

**Description**

SubCell 의 displaytype 속성값이 "progressbarcontrol" 일 경우 ProgressBar 의 진행 상태를 표시하는 블럭의 간격을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.progressbarblockgap[= nGap]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "progressbarblockgap", "3");
```
- **`nGap`** — 블럭의 간격을 0 이상의 pixel 단위 정수값으로 설정합니다.

0 미만의 값을 설정하면 0 으로 적용됩니다.
undefined 값을 설정하면 2 로 적용됩니다.

**Remark**

- progressbarblockgap 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- SubCell 의 progressbarsmooth 속성값이 "false" 일 때만 적용되는 속성입니다.


---

### progressbarblocksize

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > progressbarblocksize

**Description**

SubCell 의 displaytype 속성값이 "progressbarcontrol" 일 경우  ProgressBar 의 진행 상태를 표시하는 블럭의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.progressbarblocksize[= nWidth]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "progressbarblocksize", "20");
```
- **`nWidth`** — 블럭의 너비를 1 이상의 pixel 단위 정수값으로 설정합니다.

1 미만의 값을 설정하면 1 로 적용됩니다.
undefined 값을 설정하면 15 로 적용됩니다.

**Remark**

- progressbarblocksize 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- SubCell 의 progressbarsmooth 속성값이 "false" 일 때만 적용되는 속성입니다.


---

### progressbardirection

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > progressbardirection

**Description**

SubCell 의 displaytype 속성값이 "progressbarcontrol" 일 경우 ProgressBar 의 진행 방향을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.progressbardirection[= enumDirection]
```

**Setting Syntax**

```javascript
enumDirection ::= 'forward' | 'backward'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "progressbardirection", "backward");
```
- **`"forward"`** — 진행바가 왼쪽에서 오른쪽으로 증가합니다.
- **`"backward"`** — 진행바가 오른쪽에서 왼쪽으로 증가합니다.

**Remark**

- progressbardirection 속성값을 설정하지 않으면 "forward"로 적용됩니다.


---

### progressbarsmooth

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > progressbarsmooth

**Description**

SubCell 의 displaytype 속성값이 "progressbarcontrol" 일 경우 ProgressBar 가 표시되는 형태를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.progressbarsmooth[= bSmooth]
```

**Setting Syntax**

```javascript
bSmooth ::= 'true' | 'false'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "progressbarsmooth", "true");
```
- **`"true"`** — 진행바가 끊어진 부분 없이 연속된 모양으로 표시됩니다.
- **`"false"`** — 진행바가 progressbarblockgap, progressbarblocksize 속성값에 맞게 블럭형태로 표시됩니다.

**Remark**

- progressbarsmooth 속성값을 설정하지 않으면 "false"로 적용됩니다.


---

### radioitemcodevalue

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > radioitemcodevalue

**Description**

SubCell이 radioitem 형식일 때 선택상태로 처리되는 값을 문자열로 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.radioitemcodevalue[= strValue]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "radioitemcodevalue ", "1");
```
- **`strValue`** — radioitem 에서 선택상태로 처리될 문자열을 설정합니다.

설정값과 SubCell 에 표시되는 텍스트값이 일치하면 radioitem 이 선택상태로 표시됩니다.

**Remark**

- SubCell 의 edittype 속성값이 "radioitem" 이거나 displaytype 속성값이 "radioitemcontrol" 일 때 SubCell 에 표시되는 radioitem 에 적용됩니다.

- SubCell 의 radioitem 이 선택상태가 되면 text 속성값에 바인드 된 Column 에 radioitemcodevalue 속성값이 저장됩니다.


---

### radioitemsize

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > radioitemsize

**Description**

SubCell 이 radioitem 형식일 때 radioitem 의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.radioitemsize[= nSize]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "radioitemsize", "25");
```
- **`nSize`** — SubCell 에 표시되는 radioitem 의 크기를 pixel 단위의 숫자로 설정합니다.

설정값은 표시되는 radioitem 의 가로/세로 크기에 동일하게 적용됩니다.

**Remark**

- SubCell 의 edittype 속성값이 "radioitem" 이거나 displaytype 속성값이 "radioitemcontrol" 일 때 SubCell 에 표시되는 radioitem 에 적용됩니다.

- radioitemsize 속성값을 설정하지 않으면 Grid 의 cellradioitemsize 속성값이 적용됩니다.
   radioitemsize, cellradioitemsize 속성을 모두 설정하지 않으면 테마에 정의된 radioitem 이미지 크기에 맞게 적용됩니다.

- 테마에서 radioitem 이미지 크기는 GridCellControl 하위의 cellradioitem 셀렉터에 정의됩니다.

- 테마에 정의된 radioitem 이미지 크기보다 radioitemsize 속성값을 작게 설정할 경우 이미지가 잘려서 표시됩니다.


---

### row

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > row

**Description**

SubCell 이 밴드내에서 위치하는 Row 인덱스 값이 저장된 읽기전용 속성입니다.

**Syntax**

```javascript
CellSubCellControl.row
```

**Remark**

- Row 인덱스는 SubCell 이 밴드 내에서 표시되는 위치를 나타냅니다.

- 같은 Row 위치의 SubCell 은 Left, Body, Right 밴드에 관계없이 동일한 값을 갖습니다.

- 넥사크로 스튜디오의 Grid Contents Editor 에서 디자인 시 자동으로 설정되는 속성입니다.


---

### rowspan

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > rowspan

**Description**

SubCell 에 병합된 Sub Row 의 갯수가 저장된 읽기전용 속성입니다.

**Syntax**

```javascript
CellSubCellControl.rowspan
```

**Remark**

- 병합(Merge) 된 SubCell 이 아닐 경우 "0"값을 갖습니다.

- 동일 밴드 영역이 아닌 SubCell 은 병합(Merge) 할 수 없습니다.


---

### rtl

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > rtl

**Description**

CellSubCellControl 에서 내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.rtl
```

**Setting Syntax**

```javascript
bRtl ::= undefined | 'true' | 'false'
```
```javascript
var vRtl = this.Grid00.getSubCellProperty( "body", 0, 0, "rtl");
```
- **`undefined`** — undefined 설정 시 상위 컴포넌트의 rtl 속성값이 적용됩니다.

사용자가 rtl 속성값을 설정하지 않거나 삭제했을 경우 undefined 가 설정됩니다.
- **`true`** — CellSubCellControl 의 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 오른쪽으로 설정합니다.
CellSubCellControl 의 내부 좌표계의 기준을 오른쪽으로 설정합니다.
CellSubCellControl 의 텍스트 표시 기준을 오른쪽으로 설정합니다.
수직스크롤바가 있을 경우 왼쪽에 표시됩니다.
- **`false`** — CellSubCellControl 의 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 왼쪽으로 설정합니다.
CellSubCellControl 의 내부 좌표계의 기준을 왼쪽으로 설정합니다.
CellSubCellControl 의 텍스트 표시 기준을 왼쪽으로 설정합니다.
수직스크롤바가 있을 경우 오른쪽에 표시됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 아랍권 같이 화면의 표시기준이 오른쪽인 환경에서 컨텐츠의 표시 기준을 변경하기 위해 설정하는 속성입니다.

- CellSubCellControl 부터 Environment 까지 상위의 모든 rtl 속성값이 undefined 이면
   Environment 의 locale 속성에 설정된 국가 및 언어 설정값을 기준으로 rtl 속성이 적용됩니다.
   Environment 의 locale 속성값을 설정하지 않았을 경우 시스템의 국가 및 언어 설정값이 적용됩니다.


---

### subcell

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > subcell

**Description**

병합(Merge) 된 SubCell 일 때 실제 병합된 SubCell 의 갯수가 저장된 읽기전용 속성입니다.

**Syntax**

```javascript
CellSubCellControl.subcell
```

**Remark**

- SubCell 에 접근할 경우에는 Grid 의 getSubCellProperty(), setSubCellProperty(), getSubCellCount() 메소드를 사용합니다.


---

### suppress

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > suppress

**Description**

SubCell 에 Suppress 기능을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.suppress[= nLevel]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "suppress", "1" );
```
- **`nLevel`** — 0 설정 시 Suppress 기능을 사용하지 않습니다.

1 이상 설정 시 현재 SubCell 에 Suppress 기능을 사용합니다.
1 이 최상위 값이고, 값이 증가할 수록 단계가 낮아집니다.

설정값 보다 한단계 상위 Suppress 값을 가진 Cell 과 비교하여, 상위 Cell 에 값 표시가 생략되었다면 현재 SubCell 값이 반복될 경우 생략됩니다.
한단계 상위 Suppress 값을 가진 Cell 이 여러개 일 경우, 모든 상위 Cell 에 값 표시가 생략되었다면 현재 SubCell 값이 반복될 경우 생략됩니다.

**Remark**

- suppress 속성값을 설정하지 않으면 0 으로 적용됩니다.

- Suppress 기능은 연속된 데이터 Row 에서 동일 위치의 SubCell 값이 같을 경우 데이터 Row 에 값을 한 개만 표시하는 기능입니다.
   동일 위치의 SubCell 값이 같은 Row 를 그룹으로 묶어서 보이게 하는데 효과적입니다.

- Suppress 기능은 Body 밴드의 SubCell 에만 적용되며, SubCell 에 표시되는 텍스트를 기준으로 동일값 여부를 판단합니다.

- Cell 의 displaytype 속성값이 "treeitemcontrol" 인 경우 suppress 속성값은 무시됩니다.
   Cell 의 displaytype 속성값이 "checkboxcontrol" 또는 "radioitemcontrol" 인 경우 SubCell 값을 true/false 로 판단하지 않고, 표시되는 텍스트를 기준으로 Suppress 기능이 적용됩니다.


---

### suppressalign

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > suppressalign

**Description**

SubCell 에 Suppress 기능이 설정되어 있을때 합쳐서 표시되는 텍스트의 위치를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.suppressalign[= enumSupalign]
```

**Setting Syntax**

```javascript
enumSupalign ::= 'first' | 'middle' | 'last'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "suppressalign", "middle" );
```
- **`"first"`** — 합쳐서 표시되는 SubCell 중 첫번째 SubCell 에 텍스트가 표시됩니다.

텍스트나 이미지의 크기가 SubCell 의 크기보다 큰 경우에도 해당 SubCell 내에만 출력합니다.
- **`"middle"`** — 합쳐서 표시되는 SubCell 중 가운데 SubCell 에 텍스트가 표시됩니다.
합쳐서 표시되는 SubCell 이 짝수개인 경우는 가운데 윗부분의 SubCell 에 표시됩니다.

텍스트나 이미지의 크기가 SubCell 의 크기보다 큰 경우에도 해당 SubCell 내에만 출력합니다.
- **`"last"`** — 합쳐서 표시되는 SubCell 중 마지막 SubCell 에 텍스트가 표시됩니다.

텍스트나 이미지의 크기가 SubCell 의 크기보다 큰 경우에도 해당 SubCell 내에만 출력합니다.

**Remark**

- suppressalign 속성값을 설정하지 않으면 "first" 로 적용됩니다.

- suppressalign 속성값이 "middle" 인 경우는 Grid 의 Redraw 속도가 느려질 수 있습니다.


---

### text

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > text

**Description**

SubCell 에 표시될 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.text[= strText]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "text", "bind:Column0" );
```
- **`strText`** — SubCell 에 표시될 텍스트를 문자열로 설정하거나 Grid 에 바인드 된 DataSet 의 Column을 바인드 설정합니다.

Column 바인드 시 "bind:컬럼ID" 의 형태로 설정합니다.

**Remark**

- Grid 의 Head, Body, Summary 밴드에 속한 SubCell 에 공통 적용되는 속성입니다.

- Head, Summary 밴드의 SubCell 에 Column을 바인딩 할 경우 텍스트가 출력되지 않습니다.


---

### textareaacceptsenter

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > textareaacceptsenter

**Description**

SubCell 의 edittype 속성값이 "textarea" 일 때 편집영역에서 Enter 키 입력의 처리방식을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.textareaacceptsenter[= bAcceptsEnter]
```

**Setting Syntax**

```javascript
bAcceptsEnter ::= 'true' | 'false'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "textareaacceptsenter", "true" );
```
- **`true`** — 편집영역에서 Enter 키 입력 시 줄바꿈을 수행합니다.

편집영역의 입력을 완료하려면 "Ctrl + Enter" 키를 입력하여야 합니다.
- **`false`** — 편집영역에서 Enter 키 입력 시 편집영역의 입력을 완료합니다.

편집영역에서 줄바꿈을 수행하려면 "Ctrl + Enter" 키를 입력하여야 합니다.

**Remark**

- textareaacceptsenter 속성값을 설정하지 않으면 false 로 적용됩니다.


---

### textareaautoselect

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > textareaautoselect

**Description**

SubCell 의 edittype 속성값이 "textarea" 일 경우 편집영역이 활성화 될 때 텍스트를 전체선택 할지 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.textareaautoselect[= bAutoselect]
```

**Setting Syntax**

```javascript
bAutoselect ::= 'true' | 'false'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "textareaautoselect", "true" );
```
- **`true`** — SubCell 의 편집영역이 활성화 될 때 텍스트가 전체선택 됩니다.
- **`false`** — SubCell 의 편집영역이 활성화 될 때 텍스트가 선택되지 않습니다.

**Remark**

- textareaautoselect 속성값을 설정하지 않으면 false 로 적용됩니다.


◆ web runtime environment 제약

- 마우스 또는 터치에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 정상동작합니다.
  그러나 setFocus() 메소드에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 되지 않을 수 있습니다.


---

### textareaimemode

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > textareaimemode

**Description**

SubCell 의 edittype 속성값이 "textarea" 일 경우 SubCell 의 편집창에서 사용될 기본 입력 언어를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.textareaimemode[= enumImemode]
```

**Setting Syntax**

```javascript
enumImemode ::= 'none' | 'alpha' | 'alpha,full' | 'hangul' | 'hangul,full' | 'katakana' | 'katakana,full' | 'hiragana' | 'direct'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "textareaimemode", "alpha" );
```
- **`"none"`** — 기본 입력 언어를 변경하지 않고 현재 시스템에 설정된 언어를 유지합니다.
- **`"alpha"`** — 입력언어를 영문으로 설정합니다.

IME 가 동아시아 입력기(한글/일본어/한자) 일 경우만 적용됩니다.
- **`"alpha,full"`** — 입력언어를 영문 전각으로 설정합니다.

IME 가 동아시아 입력기(한글/일본어/한자) 일 경우만 적용됩니다.
- **`"hangul"`** — 입력언어를 한글로 설정합니다.

IME 가 한글 입력기일 경우만 적용됩니다.
- **`"hangul,full"`** — 입력언어를 한글 전각으로 설정합니다.

IME 가 한글 입력기일 경우만 적용됩니다.
- **`"katakana"`** — 입력언어를 일본어 가나로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"katakana,full"`** — 입력언어를 일본어 가나 전각으로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"hiragana"`** — 입력언어를 일본어 히라가나 전각으로 설정합니다.

IME 가 일본어 입력기일 경우만 적용됩니다.
- **`"direct"`** — 입력언어를 일본어 직접입력으로 설정합니다.

IME 가 IME2002 의 일본어 입력기일 경우만 적용됩니다.
IME 가 IME2007 과 2010 일 경우는 "alpha"로 적용됩니다.

**Remark**

- textareaimemode 속성값을 설정하지 않으면 "none" 으로 적용됩니다.

- SubCell 이 포커스를 받아 편집창이 활성화 될 때 IME가 재설정됩니다.

- 일부 환경에서만 지원하는 속성이므로 상단의 지원환경을 확인하시기 바랍니다.
   > Windows NRE, Android NRE에서만 지원하는 속성입니다.
   > macOS NRE, iOS/iPadOS NRE, WRE에서는 지원하지 않는 속성입니다.


---

### textareainputfilter

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > textareainputfilter

**Description**

SubCell 의 edittype 속성값이 "textarea" 일 경우 SubCell 편집 시 입력을 제한 시킬 문자를 타입별로 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.textareainputfilter[= strInputfilter]
```

**Setting Syntax**

```javascript
strInputfilter ::= 'none' | <filter>

<filter> ::= <inputfilter> | <inputfilter> ',' <filter>
<inputfilter> ::= 'alpha' | 'digit' | 'comma' | 'dot' | 'sign' | 'space' | 'symbol'

* 각 타입값을 콤마(",")로 구분하여 중복 설정할 수 있습니다.
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "textareainputfilter", "dot" );
this.Grid00.setSubCellProperty( "body", 0, 0, "textareainputfilter", "dot,comma" ); this.Grid00.setSubCellProperty( "body", 0, 0, "textareainputfilter", "dot,comma,sign" );
```
- **`"none"`** — 입력 제한 없이 모든 문자를 입력할 수 있습니다.
- **`"alpha"`** — 소문자 "a~z"와 대문자 "A~Z"를 입력 할 수 없습니다.
- **`"digit"`** — 숫자 "0~9"를 입력 할 수 없습니다.
- **`"comma"`** — 콤마(",")를 입력 할 수 없습니다.
- **`"dot"`** — 마침표(".")를 입력 할 수 없습니다.
- **`"sign"`** — 플러스("+")와 마이너스("-") 문자를 입력할 수 없습니다.
- **`"space"`** — 공백문자(" ")를 입력 할 수 없습니다.
- **`"symbol"`** — !,",#,$,%,@,&,',*,/,\,:,;,^,`,{,},[,],(,),|,~,=,_,<,>,? 문자를 입력할 수 없습니다.

키보드로 입력할 수 있는 특수문자 중 "comma", "dot", "sign", "space" 타입값의 문자만 입력할 수 있고, 나머지 문자는 입력 할 수 없습니다.

**Remark**

- textareainputfilter 속성값을 설정하지 않으면 "none"으로 적용됩니다.

- textareainputfilter 속성은 사용자가 직접 입력할 때만 적용됩니다.
  스크립트로 SubCell 값을 설정할 때는 적용되지 않습니다.

- 일본어 입력 시 글자 조합이 완료된 후 textareainputfilter 속성값이 적용됩니다.


---

### textareainputmode

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > textareainputmode

**Description**

SubCell 의 edittype 속성값이 "textarea" 일 경우 SubCell 에 입력되는 영문자를 대문자 또는 소문자로 변환할지 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.textareainputmode[= enumInputmode]
```

**Setting Syntax**

```javascript
enumInputmode ::= 'normal' | 'upper' | 'lower'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "textareainputmode", "upper" );
```
- **`"normal"`** — 입력되는 영문자의 대/소문자를 변경하지 않습니다.
- **`"upper"`** — 입력되는 영문자를 모두 대문자로 변경합니다.
- **`"lower"`** — 입력되는 영문자를 모두 소문자로 변경합니다.

**Remark**

- textareainputmode 속성값을 설정하지 않으면 "normal"로 적용됩니다.

- textareainputmode 속성값을 변경하면 SubCell 에 바인딩 된 DataSet 의 데이터가 변경될 수 있습니다.


---

### textareainputtype

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > textareainputtype

**Description**

SubCell 의 edittype 속성값이 "textarea" 일 경우 SubCell 에 입력을 허용할 문자를 타입별로 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.textareainputtype[= strInputtype]
```

**Setting Syntax**

```javascript
strInputtype ::= 'normal' | <type>

<type> ::= <inputtype> | <inputtype> ',' <type>
<inputtype> ::= 'alpha' | 'english' | 'digit' | 'number' | 'numberandenglish' | 'comma' | 'dot' | 'sign' | 'space' | 'symbol' | 'half' | 'full'

* 각 타입값을 콤마(",")로 구분하여 중복 설정할 수 있습니다.
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "textareainputtype", "english" );                         // 영문자만 입력허용
this.Grid00.setSubCellProperty( "body", 0, 0, "textareainputtype", "english,number" );             // 영문자와 숫자만 입력허용
this.Grid00.setSubCellProperty( "body", 0, 0, "textareainputtype", "english,number,space" );   // 영문자, 숫자, 공백만 입력허용
```
- **`"normal"`** — 모든 문자의 입력을 허용합니다.
- **`"alpha"`** — 소문자 "a~z"와 대문자 "A~Z"를 입력 할 수 있습니다.
- **`"english"`** — 소문자 "a~z"와 대문자 "A~Z"를 입력 할 수 있습니다.
- **`"digit"`** — 숫자 "0~9"를 입력 할 수 있습니다.
- **`"number"`** — 숫자 "0~9"와 마침표("."), 콤마(","), 마이너스("-") 문자를 입력 할 수 있습니다.
- **`"numberandenglish"`** — 소문자 "a~z", 대문자 "A~Z", 숫자 "0~9", 마침표("."), 콤마(","), 마이너스("-") 문자를 입력 할 수 있습니다.

"number"와 "english"를 함께 설정한 것과 같습니다.
- **`"comma"`** — 콤마(",")를 입력 할 수 있습니다.
- **`"dot"`** — 마침표(".")를 입력 할 수 있습니다.
- **`"sign"`** — 플러스("+")와 마이너스("-") 문자를 입력할 수 있습니다.
- **`"space"`** — 공백문자(" ")를 입력 할 수 있습니다.
- **`"symbol"`** — !,",#,$,%,@,&,',*,/,\,:,;,^,`,{,},[,],(,),|,~,=,_,<,>,? 문자를 입력할 수 있습니다.

키보드로 입력할 수 있는 특수문자 중 "comma", "dot", "sign", "space" 타입값의 문자는 입력할 수 없고, 나머지 문자만 입력 할 수 있습니다.
- **`"half"`** — 반각문자를 입력 할 수 있습니다.
- **`"full"`** — 전각문자를 입력 할 수 있습니다.

**Remark**

- textareainputtype 속성값을 설정하지 않으면 "normal" 로 적용됩니다.

- textareainputtype 속성은 사용자가 직접 입력할 때만 적용됩니다.
  스크립트로 SubCell 값을 설정할 때는 적용되지 않습니다.

- 설정된 타입값에 해당하는 문자만 입력을 허용하며 설정되지 않은 타입값의 문자는 입력할 수 없습니다.

- textareainputtype 속성값에 "full" 값이 속해 있지 않으면 반각 문자만 입력할 수 있습니다.

- 입력을 제한하는 속성은 textareainputmode > textareainputfilter > textareainputtype 순으로 적용됩니다.


◆ Mobile 제약

- inputtype 속성을 "digit", "number", "tel", "dot" 과 같이 숫자만 입력이 가능하도록 설정하면,
   Android 에서는 tel 타입의 키패드가 기본으로 적용되고, iOS/iPadOS 에서는 number 타입의 키패드가 기본으로 적용됩니다.
   단 iOS/iPadOS 에서는 value 에 숫자가 아닌 문자가 저장되어 있으면 text 타입의 키패드가 기본으로 적용됩니다.

- inputtype 속성을 "numberandenglish", "english" 와 같이 문자입력이 가능하도록 설정하면,
   Android, iOS/iPadOS 모두 text 타입의 키패드가 기본으로 적용됩니다.


---

### textareamaxlength

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > textareamaxlength

**Description**

SubCell 의 edittype 속성값이 "textarea" 일 경우 SubCell 에 입력할 수 있는 문자열의 최대길이를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.textareamaxlength[= nLimit]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "textareamaxlength", "10" );
```
- **`nLimit`** — 입력할 수 있는 문자열의 최대길이를 숫자로 설정합니다.

0 설정 시 바인딩된 DataSet 의 Column 크기로 제한됩니다.
-1 설정 시 입력할 수 있는 최대길이를 제한하지 않습니다.

**Remark**

- textareamaxlength 속성값을 설정하지 않으면 -1 로 적용됩니다.

- 영문, 숫자, 기호, 다국어, 개행문자(CR, LF) 모두 한 문자가 1 로 계산됩니다.

- Grid 의 Body 영역에 속한 SubCell 만 적용되는 속성입니다.

- 문자열의 길이가 textareamaxlength 속성값과 같아지면 입력이 제한됩니다.

- 스크립트로 value 값 설정 시 textareamaxlength 속성은 적용되지 않습니다.


---

### textareascrollbarsize

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > textareascrollbarsize

**Description**

SubCell 이 TextArea 형식일 때 표시되는 스크롤바의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.textareascrollbarsize[= nSize]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "textareascrollbarsize", "30" );
```
- **`nSize`** — 스크롤바의 크기를 pixel 단위의 숫자로 설정합니다.

**Remark**

- textareascrollbarsize 속성값을 설정하지 않으면 Grid 의 celltextareascrollbarsize 속성값이 적용됩니다.

- textareascrollbarsize 속성값은 수직스크롤바의 너비와 수평스크롤바의 높이에 동일하게 적용됩니다.

- textareascrollbarsize 속성값을 변경하면 스크롤바 내부버튼의 높이와 너비가 같이 변경됩니다.


---

### textareascrollbartype

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > textareascrollbartype

**Description**

SubCell 의 edittype 속성값이 "textarea" 일 경우 편집창에 스크롤바가 표시되는 형식을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.textareascrollbartype[= strBartype]
```

**Setting Syntax**

```javascript
strBartype ::= <scrolltype> | <pairtype>

<scrolltype> ::= <desktype> | <mobiletype>
<pairtype> ::= <desktype> ' ' <desktype> | <mobiletype> ' ' <mobiletype>

<desktype> ::= 'default' | 'none' | 'fixed' | 'auto'
<mobiletype> ::= 'default' | 'none' | 'indicator' | 'autoindicator'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "textareascrollbartype", "none" );
this.Grid00.setSubCellProperty( "body", 0, 0, "textareascrollbartype", "default autoindicator" );
this.Grid00.setSubCellProperty( "body", 0, 0, "textareascrollbartype", "auto fixed" );
this.Grid00.setSubCellProperty( "body", 0, 0, "textareascrollbartype", "indicator none" );
```
- **`<scrolltype>`** — textareascrollbartype 속성값을 하나만 설정하면 가로/세로 스크롤바에 동일한 값이 적용됩니다.
- **`<pairtype>`** — textareascrollbartype 속성값을 빈칸으로 구분한 두개의 값으로 설정합니다.

첫번째 값은 가로스크롤바에 적용되고, 두번째 값은 세로스크롤바에 적용됩니다.
- **`"default"`** — 데스크탑 환경인 경우 "auto" 로 적용됩니다.

모바일 환경인 경우 "autoindicator" 로 적용됩니다.
- **`"none"`** — 스크롤바 또는 인디케이터바를 표시하지 않습니다.
- **`"fixed"`** — 스크롤바를 항상 표시합니다.
- **`"auto"`** — 스크롤바가 필요할 때 자동으로 표시합니다.
- **`"indicator"`** — 스크롤 인디케이터바가 필요할 때 자동으로 표시합니다.
- **`"autoindicator"`** — 스크롤이 동작될 때만 인디케이터바가 표시되었다가 스크롤이 종료되면 사라집니다.

**Remark**

- textareascrollbartype 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- SubCell 에 편집모드용 컨트롤이 표시되어 있을 때 적용되는 속성입니다.
   displaytype 속성값을 "textareacontrol" 로 설정한 것만으로 스크롤바가 표시되지 않습니다.

- 데스크탑에 적용되는 값과 모바일에 적용되는 값을 함께 설정할 수 있지만 권장하지 않습니다.
   ex) this.Grid00.setSubCellProperty( "body", 0, "textareascrollbartype", "fixed autoindicator" );


---

### textareascrolltype

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > textareascrolltype

**Description**

SubCell 의 edittype 속성값이 "textarea" 일 경우 편집창에서 사용되는 스크롤의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.textareascrolltype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'both' | 'vertical' | 'horizontal'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "textareascrolltype", "none" );
```
- **`"none"`** — SubCell 에서 수평/수직 스크롤을 사용하지 않습니다.
- **`"both"`** — SubCell 에서 수평/수직 스크롤을 모두 사용합니다.
- **`"vertical"`** — SubCell 에서 수직 스크롤만 사용합니다.

수평 스크롤은 사용하지 않습니다.
- **`"horizontal"`** — SubCell 에서 수평 스크롤만 사용합니다.

수직 스크롤은 사용하지 않습니다.

**Remark**

- textareascrolltype 속성값을 설정하지 않으면 "both" 로 적용됩니다.

- SubCell 에서 사용되는 스크롤에 대한 자세한 설정은 textareascrollbartype 속성을 사용하여야 합니다.

**See Also**

CellSubCellControl.scrollbartype


---

### tooltiptext

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > tooltiptext

**Description**

SubCell 영역에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.tooltiptext[= strToolTipText]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "tooltiptext", "ToolTip" );
this.Grid00.setSubCellProperty( "body", 0, 0, "tooltiptext", "" );          // 풍선 도움말이 표시되지 않습니다.
this.Grid00.setSubCellProperty( "body", 0, 0, "tooltiptext", null );        // 상위영역의 풍선 도움말이 표시됩니다.
```
- **`strToolTipText`** — 풍선도움말에 표시할 텍스트를 설정합니다.

빈문자열(EmptyString) 설정 시 풍선도움말이 표시되지 않습니다.
null 또는 undefined 설정 시 상위영역(Cell)의 풍선도움말이 표시됩니다.

**Remark**

- tooltiptext 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- tooltiptext 속성이 undefined 로 적용되면 상위 영역(Cell)의 tooltiptext 속성값이 적용됩니다.
   상위 영역의 tooltiptext 속성값이 undefined 일 경우는 다시 상위 영역의 tooltiptext 속성값이 적용됩니다. 

- 마우스 포인터가 Grid 의 GridSubCellControl 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.


◆ Desktop WRE 제약

- 풍선도움말은 브라우저의 기능을 활용하므로 브라우저 사양에 따라 스타일에 차이가 있을 수 있습니다.
   NRE는 Chrome 의 스타일과 동일하게 적용됩니다.


---

### tooltiptype

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > tooltiptype

**Description**

CellSubCellControl 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.tooltiptype[= enumTooltipType]
```

**Setting Syntax**

```javascript
enumTooltipType ::= 'default' | 'hover' | 'inplace' | 'default,mouseleave' | 'hover,mouseleave' | 'inplace,mouseleave'
```
```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "tooltiptype", "hover" );
```
- **`"default"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 CellSubCellControl 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"hover"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 CellSubCellControl 영역내에 멈춰서 일정시간이 경과하면 풍선도움말이 사라집니다.
CellSubCellControl 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경되거나 사라진 풍선도움말이 다시 표시됩니다.
- **`"inplace"`** — CellSubCellControl 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 CellSubCellControl 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"default,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 CellSubCellControl 영역에 있으면 풍선도움말이 사라지지 않습니다.
- **`"hover,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 CellSubCellControl 영역에 있으면 풍선도움말이 사라지지 않습니다.
CellSubCellControl 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경됩니다.
- **`"inplace,mouseleave"`** — CellSubCellControl 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 CellSubCellControl 영역에 있으면 풍선도움말이 사라지지 않습니다.

**Remark**

- tooltiptype 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- 마우스 포인터가 CellSubCellControl 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.

- 풍선도움말이 표시된 상태에서 tooltiptext 속성값을 변경하면 tooltiptype 속성값에 관계없이 풍선도움말이 사라집니다.

- 표시되었다가 사라진 풍선도움말은 마우스 포인터가 CellSubCellControl 영역을 나갔다가 들어오면 다시 표시됩니다.

- 마우스 포인터가 CellSubCellControl 영역에서 벗어나면 풍선도움말이 사라집니다.

- 풍선도움말의 크기는 풍선도움말에 표시되는 텍스트의 길이와 크기에 맞춰 자동으로 조정됩니다.

- 풍선도움말에 표시되는 텍스트의 글꼴과 크기는 변경하실 수 없습니다.


---

### treecheck

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > treecheck

**Description**

SubCell 이 트리 형식일 때 체크박스의 값으로 사용될 Column을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.treecheck[= strColID]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "treecheck", "bind:Column0" );
```
- **`strColID`** — Grid 의 binddataset 속성에 설정된 DataSet 의 Column 중 트리 SubCell 의 체크박스 값으로 사용할 Column의 ID를 문자열로 설정합니다.

스크립트로 지정 시 "bind:컬럼ID" 의 형태로 설정합니다.

**Remark**

- Grid 의 treeusecheckbox 속성값이 "true"인 경우에 적용되는 속성입니다.

- Cell 의 edittype 속성값이 "tree" 이고, displaytype 속성값이 "treeitemcontrol" 일 때만 체크박스값을 변경할 수 있습니다.

	
		true / false
		Column type
		Row data
	

	
		false
		STRING
		"0", "-0", "false", "NaN", 빈 값, Null
	

	
		INT, FLOAT, BIGDECIMAL
		0, -0, 빈 값, Null
	

	
		true
		 
		false로 처리되는 값 이외의 모든 값


---

### treelevel

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > treelevel

**Description**

SubCell 이 트리 형식일 때 트리의 레벨값으로 사용될 Column을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.treelevel[= strColID]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "treelevel", "bind:Column0" );
```
- **`strColID`** — Grid 의 binddataset 속성에 설정된 DataSet 의 Column 중 트리 SubCell 의 레벨값으로 사용할 Column의 ID를 문자열로 설정합니다.

스크립트로 지정 시 "bind:컬럼ID" 의 형태로 설정합니다.

**Remark**

- treelevel 속성값을 설정하지 않을 경우에는 트리 형식으로 동작하지 않습니다.

- treelevel 값이 "1" 이상의 숫자에서 시작할 경우에는 treestartlevel 속성에 시작할 레벨값을 설정할 수 있습니다.


---

### treestartlevel

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > treestartlevel

**Description**

SubCell 이 트리 형식일 때 트리 레벨의 시작값을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.treestartlevel[= nLevel]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "treestartlevel", "1" );
```
- **`nLevel`** — 트리 레벨의 시작값을 숫자로 설정합니다.

**Remark**

- treestartlevel 속성값을 설정하지 않으면 "0"으로 적용됩니다.

- 트리 레벨에 따라 텍스트가 표시되는 위치는 treestartlevel 속성값과 treelevel 속성값이 차이로 결정됩니다.
   따라서 treestartlevel 속성값을 지정하지 않고, "1" 이상의 숫자에서 레벨이 시작되면 모든 트리의 텍스트가 일정 비율 안쪽에 표시됩니다.


---

### treestate

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > treestate

**Description**

SubCell 이 트리 형식일 때 트리의 상태값으로 사용될 Column을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.treestate[= strColID]
```

**Setting Syntax**

```javascript
this.Grid00.setSubCellProperty( "body", 0, 0, "treestate", "1" );
```
- **`strColID`** — Grid 의 binddataset 속성에 설정된 DataSet 의 Column 중 트리 SubCell 의 상태값으로 사용할 Column의 ID를 문자열로 설정합니다.
스크립트로 지정 시 "bind:컬럼ID" 의 형태로 설정합니다.

트리가 Collapse 상태이면 "0" 값으로 처리됩니다.
트리가 Expand 상태이면 "1" 값으로 처리됩니다.
트리가 단말(Leaf) 상태이면 "3" 값으로 처리됩니다.

**Remark**

- 사용자가 마우스 선택이나 메소드로 트리 상태를 변경하는 경우에도, 바인딩된 DataSet 에 변경된 값이 반영되지 않습니다.
  그러나, treestate 속성에 바인딩된 DataSet 의 Column 값을 직접 변경하는 경우에는 Grid 에 적용됩니다.

- treelevel 속성값을 설정하지 않을 경우에는 트리 형식으로 동작하지 않습니다.


---

### word-spacing

> Components > Component > Grid > Objects > GridCellControl > Objects > CellSubCellControl > Property > word-spacing

**Description**

SubCell 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다.

**Syntax**

```javascript
CellSubCellControl.wordSpacing[= strwordspacing]
```

**Setting Syntax**

```javascript
strWordSpacing ::= 'normal' | <nVal>'px'
```
```javascript
* XCSS
word-spacing : 30px;

* Script ( normal property )
this.Grid00.setSubCellProperty( "body", 0, 0, "wordSpacing", "30px" );
```
- **`"normal"`** — 텍스트의 단어 사이 간격을 설정하지 않습니다.

현재 font 에 맞는 기본형태로 텍스트가 표시됩니다.
- **`<nVal>`** — pixel 단위로 텍스트의 단어 사이 간격을 설정합니다.

**Remark**

- word-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "wordSpacing"을 사용해야 합니다.


---

## Components > Component > Grid > GridCellControl > CellTreeItemControl

### CellTreeItemControl

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl

**Description**

Cell 이 Tree 형식일 때 사용되는 CellTreeItemControl 입니다.

**Property**

| Name | Description |
| --- | --- |
| background | CellTreeItemControl 의 배경 영역을 설정하는 속성입니다. |
| border-radius | CellTreeItemControl 의 모서리 모양을 설정하는 속성입니다. |
| color | CellTreeItemControl 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| cursor | CellTreeItemControl 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| font | CellTreeItemControl 에서 사용하는 폰트를 설정하는 속성입니다. |
| letter-spacing | CellTreeItemControl 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다. |
| name | CellTreeItemControl 의 이름을 설정하는 속성입니다. |
| -nexa-border | CellTreeItemControl 의 테두리를 설정하는 속성입니다. |
| -nexa-rtl-background-image | CellTreeItemControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| opacity | CellTreeItemControl 영역의 투명도를 설정하는 속성입니다. |

**Status**

컴포넌트가 비활성화된 상태

**Control**

| Name | TypeName |
| --- | --- |
| treeitembutton | nexacro.TreeItemIconControl |
| treeitemcheckbox | nexacro.CheckBox |
| treeitemimage | nexacro.TreeItemIconControl |
| treeitemtext | nexacro.Static |


---

### 속성 (Properties)

### -nexa-border

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Property > -nexa-border

**Description**

CellTreeItemControl 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
CellTreeItemControl.-nexa-border
```

**Setting Syntax**

```javascript
-nexa-border ::= <line-width> <line-style> <color> [,<line-width> <line-style> <color>]{3}

<line-width> ::= 'thin' | 'medium' | 'thick' | <nWidth> 'px'
<line-style> ::= 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'
<color> ::= <NamedColor> | <NumericColor>

1회 입력 : top/right/bottom/left 에 모두 적용됩니다.
2회 입력 : top/bottom, right/left 에 첫번째 값부터 각각 적용됩니다.
3회 입력 : top, right/left, bottom 에 첫번째 값부터 각각 적용됩니다.
4회 입력 : top, right, bottom, left 에 첫번째 값부터 각각 적용됩니다.

* 2회~4회 입력은 border-radius 속성값이 설정되지 않은 경우만 적용됩니다.
```
```javascript
* XCSS
-nexa-border : 1px solid #999999;
-nexa-border : 1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999;
```
- **`<line-width>`** — 테두리 선의 두께를 설정합니다.

"thin" 설정 시 1 pixel 두께로 테두리가 표시됩니다.
"medium" 설정 시 3 pixel 두께로 테두리가 표시됩니다.
"thick" 설정 시  5 pixel 두께로 테두리가 표시됩니다.

<nWidth> 설정 시 <nWidth> pixel 두께로 테두리가 표시됩니다.
- **`<nWidth>`** — 테두리 선의 두께를 pixel 단위로 설정합니다.
"px" 단위는 생략할 수 없습니다.
- **`<line-style>`** — 테두리 선의 스타일을 설정합니다.

"none" 설정 시 테두리가 표시되지 않습니다.
"hidden" 설정 시 테두리가 표시되지 않습니다.
"dotted" 설정 시 테두리가 점선으로 표시됩니다.
"dashed" 설정 시 테두리가 긴 점선으로 표시됩니다.
"solid" 설정 시 테두리가 실선으로 표시됩니다.
"double" 설정 시 테두리가 두줄로 표시됩니다.
"groove" 설정 시 테두리가 들어간 것처럼 보이게 입체적으로 표시됩니다.
"ridge" 설정 시 테두리가 올라온 것처럼 보이게 입체적으로 표시됩니다.
"inset" 설정 시 컴포넌트가 들어간 것처럼 보이게 테두리가 입체적으로 표시됩니다.
"outset" 설정 시 컴포넌트가 올라온 것처럼 보이게 테두리가 입체적으로 표시됩니다.
- **`<color>`** — 테두리 색상을 색상이름 또는 색상코드로 설정합니다.
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- -nexa-border 속성값을 설정하지 않으면 undefined 가 설정되고, "medium none #999999" 로 동작합니다.

- <line-style> 이 "double" 일 때 두 줄을 다른 색으로 설정할 수 없습니다.
   <color> 에 설정된 색이 두 줄에 모두 적용됩니다.


◆ Nexacro Runtime Environment 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 top > right > bottom > left 순으로 겹쳐서 표시됩니다.

- <line-style> 파라미터에 "double","groove","ridge","inset","outset" 값을 설정해도 적용되지 않습니다.

- <line-width> 파라미터에 "thin","medium","thick" 값을 설정해도 적용되지 않습니다.


◆ Web Runtime Environment 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 웹브라우저에 따라 테두리가 겹쳐지는 순서가 다르게 처리될 수 있습니다.

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있으면 
   두께는 각 테두리 별로 따로 적용되고, 색상은 top 에 설정된 색이 적용됩니다.

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있어도
   일부 브라우저는 각 테두리의 색상이나 두께가 각각 적용됩니다.


---

### -nexa-rtl-background-image

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Property > -nexa-rtl-background-image

**Description**

CellTreeItemControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
CellTreeItemControl.-nexa-rtl-background-image
```

**Setting Syntax**

```javascript
strRtlBgImage ::= "URL(' " <Theme-Image> | <Web-Image> " ')"
```
```javascript
* XCSS
-nexa-rtl-background-image : URL("http://localhost/Test.jpg");
-nexa-rtl-background-image : URL("theme://images/Test.jpg");
```
- **`strRtlBgImage`** — "URL ('<이미지위치>')" 형식으로 테마 또는 웹의 이미지 경로를 문자열로 설정합니다.

background 속성에 설정된 값 중 이미지만 설정한 이미지로 대체됩니다.
background 속성에 설정된 이미지 이외의 값은 동일하게 적용됩니다.
- **`<Theme-Image>`** — 테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.

**Remark**

- rtl 속성에 의해 표시기준이 변경되면 반전된 이미지를 적용하려 할 때 사용하는 속성입니다.

- XCSS 에서만 설정할 수 있는 속성으로 스크립트로 값을 변경할 수 없습니다.
   XCSS 에 -nexa-rtl-background-image 속성값을 설정하지 않으면 background 속성에 설정된 이미지가 적용됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.

- 배경이미지가 적용되는 영역은 컴포넌트의 클라이언트 영역입니다.

- background 속성에 배경색이 설정되어 있을 경우 배경색 위에 이미지가 표시됩니다.

- 그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
   background 속성에 그라데이션이 설정되어 있을 경우 오동작이 발생할 수 있습니다.


---

### background

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Property > background

**Description**

CellTreeItemControl 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
CellTreeItemControl.background
```

**Setting Syntax**

```javascript
strBackground ::= [<bg-image> | <linear-gradient>] [<background-origin> [<background-clip>]] [<background-color>]

<bg-image> ::= 'none' | <imageurl> [<repeat-style>] [<position>]
   <imageurl> ::= 'URL(' <Theme-Image> | <Web-Image> ')'
   <repeat-style> ::= 'repeat-x' | 'repeat-y' | 'repeat' | 'no-repeat'
   <position> ::= <horizontal-position> <vertical-position> ['/' <background-size>]
      <horizontal-position> ::= 'left' | 'center' | 'right' | <pos-percentage> '%'
      <vertical-position> ::= 'top' | 'center' | 'bottom' | <pos-percentage> '%'
      <background-size> ::= 'auto' | 'cover' | 'contain' | (<length> 'px' | <percentage> '%') {1,2}

<linear-gradient> ::= 'linear-gradient(' [<angle> , ] <color-stop> ')'
   <angle> ::= 'to left' | 'to right' | 'to top' | 'to bottom' | 'to left top' | 'to left bottom' | 'to right top' | 'to right bottom'
   <color-stop> ::= <startcolor-stop> [<listcolor-stop>] <endcolor-stop>
      <startcolor-stop> ::= <color> [<percentage>'%']
      <endcolor-stop> ::= <color> [<percentage>'%']
      <listcolor-stop> ::= <color> [<percentage>'%"] [,<listcolor-stop>]*
         <color> ::= <NamedColor> | <NumericColor>

<background-origin> ::= 'border-box' | 'padding-box'
<background-clip> ::= 'border-box' | 'padding-box'
<background-color> ::= <NamedColor> | <NumericColor>
```
```javascript
* XCSS
background : #ffffaa;
background : url('./images/smiley.gif') no-repeat center center #ffffaa;
background : url('./images/smiley.gif') no-repeat center center /auto #ffffaa;
background : url('./images/smiley.gif') no-repeat center center /15px 15% #ffffaa;
background : linear-gradient( red , blue , yellow );
background : linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0));
background : url('./images/smiley.gif') border-box border-box #ffffaa;
```
- **`<bg-image>`** — 배경에 표시될 이미지를 "'none' | <imageurl> [<repeat-style>] [<position>]" 형식으로 설정합니다.

<background-color> 값이 설정되어 있으면 배경색 위로 이미지가 표시됩니다.

"none" 으로 설정하면 이미지를 설정하지 않습니다.
<imageurl> 값으로 이미지를 설정할 수 있습니다.
<repeat-style> 값으로 이미지의 반복표시 방향을 설정할 수 있습니다.
<position> 값으로 이미지의 표시위치를 설정할 수 있습니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<imageurl>`** — 배경에 표시될 이미지를 "'URL(' <Theme-Image> | <Web-Image> ')'" 형식으로 설정합니다.

"URL ( [이미지경로] )" 형식으로 테마 또는 웹의 이미지를 설정합니다.
- **`<Theme-Image>`** — 테마에 선언된 이미지를 "theme://images\이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/파일명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<repeat-style>`** — 배경에 표시될 이미지의 반복표시 방향을 설정합니다.

"repeat-x" 설정 시 이미지가 가로 방향으로 반복표시 됩니다.
"repeat-y" 설정 시 이미지가 세로 방향으로 반복표시 됩니다.
"repeat" 설정 시 이미지가 가로,세로 방향으로 모두 반복표시 됩니다.
"no-repeat" 설정 시 이미지가 반복표시 되지 않습니다.

값을 설정하지 않으면 "repeat" 로 적용됩니다.
- **`<horizontal-position>`** — 배경에 표시될 이미지의 가로 위치를 설정합니다.

"left" 설정 시 CellTreeItemControl 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 CellTreeItemControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 CellTreeItemControl 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 CellTreeItemControl 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 CellTreeItemControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 CellTreeItemControl 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<horizontal-position> 값을 설정하고, <vertical-position> 값을 설정하지 않으면 <vertical-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <vertical-position> 은 "top" 으로 적용됩니다.
- **`<pos-percentage>`** — 배경에 표시될 이미지의 가로/세로 위치를 비율로 설정합니다.

<horizontal-position> 에 "0%" 설정 시 "left" 와 같은 위치로 적용됩니다.
<horizontal-position> 에 "50%" 설정 시 "center" 와 같은 위치로 적용됩니다.
<horizontal-position> 에 "100%" 설정 시 "right" 과 같은 위치로 적용됩니다.
<vertical-position> 에 "0%" 설정 시 "top" 와 같은 위치로 적용됩니다.
<vertical-position> 에 "50%" 설정 시 "center" 와 같은 위치로 적용됩니다.
<vertical-position> 에 "100%" 설정 시 "bottom" 과 같은 위치로 적용됩니다.

0 보다 작거나 100 보다 큰 값을 설정 시 CellTreeItemControl 의 영역을 벗어난 가상의 위치로 적용됩니다.

값 설정 시 "%" 단위를 생략할 수 없습니다.
- **`<background-size>`** — 배경에 표시될 이미지의 크기를 설정합니다.
- auto: 원본 이미지 크기를 유지합니다.
- cover: 이미지 비율을 유지하는 한도 내에서 배경에 빈 공간이 없도록 가장 크게 설정합니다.
  width 또는 height 길이가 긴 쪽은 잘려서 표시될 수 있습니다.
- contain: 이미지가 잘리지 않고 비율을 유지하는 한도 내에서 가장 크게 설정합니다.
- <length> | <percentage>: 이미지의 width, height 크기 또는 컴포넌트 대비 비율을 설정합니다. 
  width 값만 설정하면 원본 이미지 비율에 따라 height 크기를 자동으로 처리합니다.
  height 값만 설정할 수는 없습니다. 
  음수값은 설정할 수 없습니다.
- **`<linear-gradient>`** — 배경에 표시될 그라데이션을 "'linear-gradient(' [<angle> , ] <color-stop> ')'" 형식으로 설정합니다.

<background-color> 값이 설정되어 있으면 배경색 위로 그라데이션이 표시됩니다.

"linear-gradient ( [방향, 색상값, 색상값, ...] )" 형식으로 그라데이션 방향과 색상을 설정할 수 있습니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<angle>`** — 그라데이션의 표시 방향을 설정합니다.

"to left" 설정 시 오른쪽에서 왼쪽 방향으로 그라데이션이 표시됩니다.
"to right" 설정 시 왼쪽에서 오른쪽 방향으로 그라데이션이 표시됩니다.
"to top" 설정 시 아래쪽에서 윗쪽 방향으로 그라데이션이 표시됩니다.
"to bottom" 설정 시 윗쪽에서 아래쪽 방향으로 그라데이션이 표시됩니다.
"to left top" 설정 시 오른쪽 아래 방향에서 왼쪽 윗 방향으로 그라데이션이 표시됩니다.
"to left bottom" 설정 시 오른쪽 윗 뱡향에서 왼쪽 아래 방향으로 그라데이션이 표시됩니다.
"to right top" 설정 시 왼쪽 아래 방향에서 오른쪽 윗 방향으로 그라데이션이 표시됩니다.
"to right bottom" 설정 시 왼쪽 윗 방향에서 오른쪽 아래 방향으로 그라데이션이 표시됩니다.

값을 설정하지 않으면 "to bottom"으로 적용됩니다.
- **`<color-stop>`** — 그라데이션의 시작점, 끝점, 중간점의 색을 "<startcolor-stop> [<listcolor-stop>] <endcolor-stop>" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 시작점과 끝점의 위치가 결정됩니다.
예를 들어 <angle> 값이 "to left" 이면 CellTreeItemControl 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 CellTreeItemControl 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

<listcolor-stop> 에 그라데이션 중간점의 색을 한개 이상 설정할 수 있으며 <percentage> 값 생략 시 균등하게 표시됩니다.
- **`<startcolor-stop>`** — 그라데이션의 시작점 색을 "<color> [<percentage>'%']" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 시작점 위치가 결정됩니다.
시작점의 <percentage> 값을 "0" 이상으로 설정 시 "시작점~설정값"까지 동일한 색상으로 표시됩니다.
- **`<endcolor-stop>`** — 그라데이션의 끝점 색을 "<color> [<percentage>'%']" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 끝점 위치가 결정됩니다.
끝점의 <percentage> 값을 "100" 이하로 설정 시 "설정값~끝점"까지 동일한 색상으로 표시됩니다.
- **`<listcolor-stop>`** — 그라데이션의 중간점 색을 "<color> [<percentage>'%"] [,<listcolor-stop>]*" 형식으로 설정합니다.

시작점과 끝점 사이에 적용될 중간색을 ","로 구분하여 여러개 설정할 수 있습니다.
뒤에 선언된 색의 <percentage> 값은 먼저 선언된 색의 <percentage> 값보다 커야 합니다.
- **`<color>`** — 그라데이션 색상을 색상이름 또는 색상코드로 설정합니다.
- **`<percentage>`** — <color> 에 해당하는 색이 적용될 위치를 비율값으로 설정합니다.

<angle> 값에 의해 결정된 시작점이 "0%" 로 적용됩니다.
<angle> 값에 의해 결정된 끝점이 "100%" 로 적용됩니다.

0 보다 작거나 100 보다 큰 값을 설정 시 CellTreeItemControl 의 영역을 벗어난 가상의 위치로 적용됩니다.
예를 들어 "150%" 설정 시 시작점에서 끝점까지 거리의 반만큼 끝점에서 벗어난 위치에 <color> 값이 적용됩니다.

<percentage> 값을 생략하면 균등한 위치에 <color> 값이 적용됩니다.
값 설정 시 "%" 단위를 생략할 수 없습니다.
- **`<background-origin>`** — 배경으로 처리될 기준영역을 설정합니다.

"border-box" 설정 시 Border 를 포함한 영역이 배경영역으로 처리됩니다.

"padding-box" 설정 시 Border 의 안쪽 영역이 배경영역으로 처리됩니다.
"padding-box" 설정 시 그라데이션의 시작점, 끝점과 배경이미지의 반복 기준위치가 Border 안쪽 영역으로 처리됩니다.

값을 설정하지 않으면 "padding-box" 로 적용됩니다.
- **`<background-clip>`** — 배경이 실제로 표시될 영역을 설정합니다.

"border-box" 설정 시 Border 를 포함한 영역에 배경이 표시됩니다.
"padding-box" 설정 시 Border 의 안쪽 영역에 배경이 표시됩니다.

값을 설정하지 않으면 <background-origin> 에 설정한 값이 동일하게 적용됩니다.
<background-origin> 값도 설정하지 않았을 경우 "border-box" 로 적용됩니다.
- **`<background-color>`** — 배경에 표시될 색을 색상이름 또는 색상코드로 설정합니다.

<bg-image> 또는 <linear-gradient> 값이 설정되어 있다면 배경색은 배경이미지 또는 그라데이션 아래에 표시됩니다.
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 CellTreeItemControl 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- background 속성값을 설정하지 않으면 undefined 가 설정되고, "transparent" 로 동작합니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.

- 배경의 기준영역과 표시영역은 <background-origin>, <background-clip> 값으로 각각 설정합니다.

- 배경 이미지를 중앙에 위치시키려면 <position> 값을 "center" 또는 "center center" 로 설정하여야 합니다.

- 배경이미지와 배경색을 모두 설정하면 배경색 위에 이미지가 표시됩니다.
   그라데이션과 배경색을 모두 설정하면 배경색 위에 그라데이션이 표시됩니다.

- 그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
   두 값을 동시에 설정 시 오동작이 발생할 수 있습니다.


---

### border-radius

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Property > border-radius

**Description**

CellTreeItemControl 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
CellTreeItemControl.border-radius
```

**Setting Syntax**

```javascript
border-radius ::= <horizontal-radius>{4} ['/' <vertical-radius>{4}]
```
```javascript
* XCSS
border-radius : 10px;
border-radius : 5px 6px 10px / 5px 10px;
```
- **`<horizontal-radius>`** — 모서리를 둥글게 표시하기 위한 가로크기를 설정합니다.

pixel 단위로 입력하며 스페이스를 구분자로 4개값까지 설정할 수 있습니다.

값을 1회 입력 시 top-left/top-right/bottom-right/bottom-left 모서리의 가로크기로 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top-left/bottom-right, top-right/bottom-left 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top-left, top-right/bottom-left, bottom-right 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top-left, top-right, bottom-right, bottom-left 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
- **`<vertical-radius>`** — 모서리를 둥글게 표시하기 위한 세로크기를 설정합니다.

pixel 단위로 입력하며 스페이스를 구분자로 4개값까지 설정할 수 있습니다.

값을 1회 입력 시 top-left/top-right/bottom-right/bottom-left 모서리의 세로크기로 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top-left/bottom-right, top-right/bottom-left 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top-left, top-right/bottom-left, bottom-right 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top-left, top-right, bottom-right, bottom-left 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.

**Remark**

- border-radius 속성값을 설정하지 않으면 undefined 가 설정되고, "0px" 로 동작합니다. 

- <horizontal-radius> 와 <vertical-radius> 는 "/" 문자로 구분하여 입력합니다.

◆ NRE 제약

- border-radius 속성을 설정하면 모든 테두리가 같은 색으로 적용됩니다.
   -nexa-border 속성에서 top 에 적용된 색이 모든 테두리에 적용됩니다.


---

### color

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Property > color

**Description**

CellTreeItemControl 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
CellTreeItemControl.color
```

**Setting Syntax**

```javascript
color ::= <NamedColor> | <NumericColor>
```
```javascript
* XCSS
color : #999999;
color : rgb ( 255, 0, 0 );
color : red;
```
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- color 속성값을 설정하지 않으면 undefined 가 설정되고, "#000000" 으로 동작합니다.


---

### cursor

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Property > cursor

**Description**

CellTreeItemControl 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
CellTreeItemControl.cursor
```

**Setting Syntax**

```javascript
cursor ::= 'none' | 'auto' | 'default' | 'copy' | 'crosshair' | 'help' | 'move' | 'not-allowed' | 'pointer' | 'progress' | 'text' | 'wait' | 'ew-resize' | 'e-resize' | 'w-resize' | 'ns-resize' | 'n-resize' | 's-resize' | 'nesw-resize' | 'ne-resize' | 'sw-resize' | 'nwse-resize' | 'nw-resize' | 'se-resize'
```
```javascript
* XCSS
cursor : default ;
```
- **`"none"`** — 마우스 포인터를 표시하지 않습니다.

* macOS NRE는 지원하지 않습니다.
- **`"auto"`** — 컴포넌트의 특성에 맞는 포인터가 표시됩니다.

Edit계열 컴포넌트는 "text" 포인터가 표시됩니다.
그외 계열 컴포넌트는 "arrow" 포인터가 표시됩니다.
- **`"default"`** — 시스템의 기본 포인터가 표시됩니다.

일반적으로 "arrow" 포인터가 표시됩니다.
- **`"copy"`** — 화살표와 작은 십자("+") 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"crosshair"`** — 십자("+") 모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"help"`** — 화살표와 작은 물음표 모양의 포인터가 표시됩니다.

* Safari 브라우저는 물음표 모양의 포인터가 표시됩니다.
* macOS NRE 는 지원하지 않습니다.
- **`"move"`** — 십자 화살표 모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"not-allowed"`** — 금지 표지판 모양의 포인터가 표시됩니다.

* Safari 브라우저는 화살표와 금지 표지판 모양의 포인터가 표시됩니다.
* macOS NRE 는 지원하지 않습니다.
- **`"pointer"`** — 손모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"progress"`** — OS 또는 환경에 따라 다른 형태의 포인터가 표시됩니다.

원, 화살표와 모래시계, 화살표와 원 등 다양한 형태로 표시됩니다.

* macOS NRE 에서는 지원하지 않습니다.
- **`"text"`** — 아이("I") 모양의 포인터가 표시됩니다.
- **`"wait"`** — OS 또는 환경에 따라 다른 형태의 포인터가 표시됩니다.

원, 모래시계, 시계 등 다양한 형태로 표시됩니다.
- **`"ew-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"e-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"w-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"ns-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"n-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"s-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"nesw-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"ne-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"sw-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"nwse-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"nw-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS 는 지원하지 않습니다.
- **`"se-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

**Remark**

- cursor 속성값을 설정하지 않으면 undefined 가 설정되고 "auto" 로 동작합니다.

- disable 상태인 서브컨트롤이 있는 컴포넌트의 경우 마우스 포인터는 서브컨트롤 영역에서
   서브컨트롤의 disable status값이 적용되지 않고, 컴포넌트의 enable status 설정값이 적용됩니다.
   서브컨트롤과 컴포넌트가 모두 disable 상태일 때는 parent 의 enable status 설정값이 적용됩니다.


---

### font

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Property > font

**Description**

CellTreeItemControl 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**

```javascript
CellTreeItemControl.font
```

**Setting Syntax**

```javascript
strfont ::= [<font-style>] [<font-weight>] <font-size> ['/'<line-height>] <font-family>

<font-style> ::= 'normal' | 'italic'
<font-weight> ::= 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
<font-size> ::= <nSize> 'px'|'pt'|'em'|'rem'
<line-height> ::= 'normal' | <nValue> | <nPixel>'px' | <nPercent>'%'
<font-family> ::= <font-name> [',' <font-name>]*
```
```javascript
* XCSS
font : bold 12pt/30px arial, sans-serif;
```
- **`<font-style>`** — 폰트의 스타일을 설정합니다.

"normal" 설정 시 스타일이 적용되지 않습니다.
"italic" 설정 시 기울임 스타일이 적용됩니다.
- **`<font-weight>`** — 폰트의 굵기를 설정합니다.

"normal" 설정 시 굵기가 적용되지 않습니다.
"bold" 설정 시 굵은 폰트가 적용됩니다.

"100"~"900" 로 설정 시 설정한 굵기로 폰트가 적용됩니다.
"100"~"900" 로 설정 시 굵기에 해당하는 폰트가 정의되어 있어야 합니다.
- **`<font-size>`** — 폰트 크기의 단위는 아래와 같이 절대 길이 단위와 상대 길이 단위로 설정할 수 있습니다.
단위를 지정하지 않으면 속성값이 적용되지 않습니다.
- 절대 길이 단위: pixel("px"), point("pt")
- 상대 길이 단위: "em", "rem"

폰트 크기 단위를 "em", "rem"으로 설정한 경우에는 아래와 같이 폰트 크기가 계산됩니다.
- "em": 상위 컴포넌트 font-size 기준으로 상대적인 크기를 설정
- "rem": MainFrame font-size 기준으로 상대적인 크기를 설정
- **`<nSize>`** — 폰트 크기 단위에 따라 정수 또는 소수로 설정합니다.
음수값은 설정할 수 없습니다.
- "px", "pt": 정수
- "em", "rem": 정수 또는 소수
- **`<line-height>`** — 텍스트가 여러줄로 표시되는 경우 줄 사이의 간격을 설정합니다.

음수값을 설정할 수 없습니다.

"normal" 설정 시 줄 사이의 간격을 설정하지 않습니다.
"normal" 설정 시 웹브라우저마다 줄 사이의 간격이 다르게 적용됩니다.
"normal" 설정 시 Nexacro Runtime Environment는 폰트 크기에 곱할 값(<nValue>값)이 "1.15" 일 때와 동일하게 동작합니다.
- **`<nValue>`** — 폰트 크기에 곱할 값을 설정합니다.

계산 결과값이 줄 사이 간격으로 적용됩니다.
- **`<nPixel>`** — 줄 사이의 간격을 pixel 단위의 숫자로 설정합니다.

"px" 단위를 생략할 수 없습니다.
- **`<nPercent>`** — 폰트 크기에 곱할 비율값을 설정합니다.

계산 결과값이 줄 사이 간격으로 적용됩니다.
"%" 단위를 생략할 수 없습니다.
- **`<font-family>`** — 폰트 이름을 리스트로 설정합니다.

콤마(",")로 구분하여 폰트 이름을 여러개 설정할 수 있습니다.
먼저 선언된 폰트가 우선적으로 적용됩니다.
선언된 폰트가 시스템에 없을 경우 선언된 순서대로 사용 가능한 폰트를 적용합니다.
선언된 폰트가 모두 없을 경우 시스템 기본 폰트가 적용됩니다.
- **`<font-name>`** — 폰트의 이름을 설정합니다.

**Remark**

- font 속성값을 설정하지 않으면 undefined 가 설정되고, "12pt/normal Verdana" 로 동작합니다.

- font 속성의 폰트 크기가 변경되면 <line-height> 에 적용된 값에 따라 줄간격이 변경될 수 있습니다.

- <font-weight> 를 수치로 설정 시 "400" 값이 일반적인 굵기로 적용되고, "700" 값이 "bold" 로 적용됩니다.
  폰트에 수치값에 해당하는 폰트굵기가 없다면 "400" 과 "700" 중 가까운 값으로 표시됩니다.

- UserFont 사용 시 환경별로 지원하는 포맷정보는 "Appendix > Supported UserFont" 항목을 참고하세요.


◆ WRE 제약

- -nexa-text-align 속성값이 "right" 일 때 font 속성에 "italic" 을 설정하면 마지막 텍스트의 기울어진 부분이 잘려서 표시될 수 있습니다.
   웹브라우저에서 텍스트영역을 일반글자 기준으로 처리한 후 기울임을 적용하면서 발생하는 문제입니다.


---

### letter-spacing

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Property > letter-spacing

**Description**

CellTreeItemControl 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다.

**Syntax**

```javascript
CellTreeItemControl.letter-spacing
```

**Setting Syntax**

```javascript
letter-spacing ::= 'normal' | <nVal> 'px'
```
```javascript
* XCSS
letter-spacing : 2px ;
```
- **`"normal"`** — 문자 사이의 간격(자간)을 설정하지 않습니다.
- **`<nVal>`** — 문자 사이의 간격(자간)을 pixel 단위로 설정합니다.

**Remark**

- letter-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.


---

### name

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Property > name

**Description**

CellTreeItemControl 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
CellTreeItemControl.name
```

**Setting Syntax**

- **`name`** — Control 의 이름을 설정합니다.

**Remark**

- 컴포넌트 내부에 정의된 Control 은 name 을 설정할 수 없습니다.


---

### opacity

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Property > opacity

**Description**

CellTreeItemControl 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
CellTreeItemControl.opacity
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8 ;
opacity : 80%;
```
- **`opacity`** — 0.0 ~ 1.0 사이의 값 또는 0.0% ~ 100.0% 사이의 값을 지정합니다.
0(또는 0%)을 설정하면 완전 투명, 1(또는 100%)을 설정하면 완전 불투명으로 처리됩니다.
1 이상의 값은 1로, 0 이하의 값은 0으로 처리됩니다. 마찬가지로 100% 이상의 값은 100%로, 0% 이하의 값은 0%로 처리됩니다.

XCSS는 숫자 또는 퍼센트 값으로만 설정할 수 있습니다.

**Remark**

- opacity 속성값을 설정하지 않으면 undefined 가 설정되고, 1 로 동작합니다.

- Div 와 같이 자식 컴포넌트를 가질 수 있는 컴포넌트에 opacity 속성을 적용하면 자식 컴포넌트도 함께 적용됩니다.

- 부모와 자식 컴포넌트에 각각 opacity 속성이 설정되어 있으면 자식 컴포넌트의 투명도는 부모의 투명도에 추가적으로 적용됩니다.
   예를 들어 부모의 opacity가 0.5 이고 자식의 opacity가 0.4 이면 결과적으로 자식 컴포넌트는 0.2 의 투명도가 적용됩니다.


---

## Components > Component > Grid > GridCellControl > CellTreeLineControl

### CellTreeLineControl

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeLineControl

**Description**

Cell 이 Tree 형식일 때 사용되는 CellTreeLineControl 입니다.

**Remark**

- Cell 이 Tree 형식일 때 하위 트리와 연결되는 선을 표시하는 컨트롤 오브젝트 입니다.

**Property**

| Name | Description |
| --- | --- |
| -nexa-border | CellTreeLineControl 의 테두리를 설정하는 속성입니다. |

**Status**

컴포넌트가 비활성화된 상태


---

### 속성 (Properties)

### -nexa-border

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeLineControl > Property > -nexa-border

**Description**

CellTreeLineControl 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
CellTreeLineControl.-nexa-border
```

**Setting Syntax**

```javascript
-nexa-border ::= <line-width> <line-style> <color> [,<line-width> <line-style> <color>]{3}

<line-width> ::= 'thin' | 'medium' | 'thick' | <nWidth> 'px'
<line-style> ::= 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'
<color> ::= <NamedColor> | <NumericColor>

1회 입력 : top/right/bottom/left 에 모두 적용됩니다.
2회 입력 : top/bottom, right/left 에 첫번째 값부터 각각 적용됩니다.
3회 입력 : top, right/left, bottom 에 첫번째 값부터 각각 적용됩니다.
4회 입력 : top, right, bottom, left 에 첫번째 값부터 각각 적용됩니다.

* 2회~4회 입력은 border-radius 속성값이 설정되지 않은 경우만 적용됩니다.
```
```javascript
* XCSS
-nexa-border : 1px solid #999999;
-nexa-border : 1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999;
```
- **`<line-width>`** — 테두리 선의 두께를 설정합니다.

"thin" 설정 시 1 pixel 두께로 테두리가 표시됩니다.
"medium" 설정 시 3 pixel 두께로 테두리가 표시됩니다.
"thick" 설정 시  5 pixel 두께로 테두리가 표시됩니다.

<nWidth> 설정 시 <nWidth> pixel 두께로 테두리가 표시됩니다.
- **`<nWidth>`** — 테두리 선의 두께를 pixel 단위로 설정합니다.
"px" 단위는 생략할 수 없습니다.
- **`<line-style>`** — 테두리 선의 스타일을 설정합니다.

"none" 설정 시 테두리가 표시되지 않습니다.
"hidden" 설정 시 테두리가 표시되지 않습니다.
"dotted" 설정 시 테두리가 점선으로 표시됩니다.
"dashed" 설정 시 테두리가 긴 점선으로 표시됩니다.
"solid" 설정 시 테두리가 실선으로 표시됩니다.
"double" 설정 시 테두리가 두줄로 표시됩니다.
"groove" 설정 시 테두리가 들어간 것처럼 보이게 입체적으로 표시됩니다.
"ridge" 설정 시 테두리가 올라온 것처럼 보이게 입체적으로 표시됩니다.
"inset" 설정 시 컴포넌트가 들어간 것처럼 보이게 테두리가 입체적으로 표시됩니다.
"outset" 설정 시 컴포넌트가 올라온 것처럼 보이게 테두리가 입체적으로 표시됩니다.
- **`<color>`** — 테두리 색상을 색상이름 또는 색상코드로 설정합니다.
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- -nexa-border 속성값을 설정하지 않으면 undefined 가 설정되고, "medium none #999999" 로 동작합니다.

- <line-style> 이 "double" 일 때 두 줄을 다른 색으로 설정할 수 없습니다.
   <color> 에 설정된 색이 두 줄에 모두 적용됩니다.


◆ Nexacro Runtime Environment 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 top > right > bottom > left 순으로 겹쳐서 표시됩니다.

- <line-style> 파라미터에 "double","groove","ridge","inset","outset" 값을 설정해도 적용되지 않습니다.

- <line-width> 파라미터에 "thin","medium","thick" 값을 설정해도 적용되지 않습니다.


◆ Web Runtime Environment 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 웹브라우저에 따라 테두리가 겹쳐지는 순서가 다르게 처리될 수 있습니다.

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있으면 
   두께는 각 테두리 별로 따로 적용되고, 색상은 top 에 설정된 색이 적용됩니다.

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있어도
   일부 브라우저는 각 테두리의 색상이나 두께가 각각 적용됩니다.


---

## Components > Component > Grid > GridCellControl > CellTreeItemControl > Objects

### Objects

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Objects

**Description**

CellTreeItemControl 의 하위 오브젝트입니다.


---

## Components > Component > Grid > GridCellControl > CellTreeItemControl > TreeItemIconControl

### TreeItemIconControl

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Objects > TreeItemIconControl

**Description**

CellTreeitemControl 에 아이콘으로 표시되는 TreeItemIconControl 입니다.

**Property**

| Name | Description |
| --- | --- |
| background | TreeItemIconControl 의 배경 영역을 설정하는 속성입니다. |
| border-radius | TreeItemIconControl 의 모서리 모양을 설정하는 속성입니다. |
| cursor | TreeItemIconControl 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| -nexa-border | TreeItemIconControl 의 테두리를 설정하는 속성입니다. |
| -nexa-edge | TreeItemIconControl 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-icon | TreeItemIconControl 에 표시 될 아이콘 이미지를 설정하는 속성입니다. |
| -nexa-padding | TreeItemIconControl 영역의 안쪽 여백을 설정하는 속성입니다. |
| -nexa-rtl-background-image | TreeItemIconControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| -nexa-rtl-edge-image | TreeItemIconControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-rtl-icon | TreeItemIconControl 의 rtl 속성이 true 로 적용될 때 표시될 아이콘 이미지를 설정하는 속성입니다. |
| -nexa-text-align | TreeItemIconControl 에 표시되는 텍스트 또는 컨텐츠의 가로 정렬 방식을 설정하는 속성입니다. |
| -nexa-vertical-align | TreeItemIconControl 에 표시되는 텍스트 또는 컨텐츠의 세로 정렬 방식을 설정하는 속성입니다. |
| opacity | TreeItemIconControl 영역의 투명도를 설정하는 속성입니다. |

**Status**

컴포넌트가 비활성화된 상태


---

### 속성 (Properties)

### -nexa-border

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Objects > TreeItemIconControl > Property > -nexa-border

**Description**

TreeItemIconControl 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
TreeItemIconControl.-nexa-border
```

**Setting Syntax**

```javascript
-nexa-border ::= <line-width> <line-style> <color> [,<line-width> <line-style> <color>]{3}

<line-width> ::= 'thin' | 'medium' | 'thick' | <nWidth> 'px'
<line-style> ::= 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'
<color> ::= <NamedColor> | <NumericColor>

1회 입력 : top/right/bottom/left 에 모두 적용됩니다.
2회 입력 : top/bottom, right/left 에 첫번째 값부터 각각 적용됩니다.
3회 입력 : top, right/left, bottom 에 첫번째 값부터 각각 적용됩니다.
4회 입력 : top, right, bottom, left 에 첫번째 값부터 각각 적용됩니다.

* 2회~4회 입력은 border-radius 속성값이 설정되지 않은 경우만 적용됩니다.
```
```javascript
* XCSS
-nexa-border : 1px solid #999999;
-nexa-border : 1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999;
```
- **`<line-width>`** — 테두리 선의 두께를 설정합니다.

"thin" 설정 시 1 pixel 두께로 테두리가 표시됩니다.
"medium" 설정 시 3 pixel 두께로 테두리가 표시됩니다.
"thick" 설정 시  5 pixel 두께로 테두리가 표시됩니다.

<nWidth> 설정 시 <nWidth> pixel 두께로 테두리가 표시됩니다.
- **`<nWidth>`** — 테두리 선의 두께를 pixel 단위로 설정합니다.
"px" 단위는 생략할 수 없습니다.
- **`<line-style>`** — 테두리 선의 스타일을 설정합니다.

"none" 설정 시 테두리가 표시되지 않습니다.
"hidden" 설정 시 테두리가 표시되지 않습니다.
"dotted" 설정 시 테두리가 점선으로 표시됩니다.
"dashed" 설정 시 테두리가 긴 점선으로 표시됩니다.
"solid" 설정 시 테두리가 실선으로 표시됩니다.
"double" 설정 시 테두리가 두줄로 표시됩니다.
"groove" 설정 시 테두리가 들어간 것처럼 보이게 입체적으로 표시됩니다.
"ridge" 설정 시 테두리가 올라온 것처럼 보이게 입체적으로 표시됩니다.
"inset" 설정 시 컴포넌트가 들어간 것처럼 보이게 테두리가 입체적으로 표시됩니다.
"outset" 설정 시 컴포넌트가 올라온 것처럼 보이게 테두리가 입체적으로 표시됩니다.
- **`<color>`** — 테두리 색상을 색상이름 또는 색상코드로 설정합니다.
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- -nexa-border 속성값을 설정하지 않으면 undefined 가 설정되고, "medium none #999999" 로 동작합니다.

- <line-style> 이 "double" 일 때 두 줄을 다른 색으로 설정할 수 없습니다.
   <color> 에 설정된 색이 두 줄에 모두 적용됩니다.


◆ Nexacro Runtime Environment 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 top > right > bottom > left 순으로 겹쳐서 표시됩니다.

- <line-style> 파라미터에 "double","groove","ridge","inset","outset" 값을 설정해도 적용되지 않습니다.

- <line-width> 파라미터에 "thin","medium","thick" 값을 설정해도 적용되지 않습니다.


◆ Web Runtime Environment 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 웹브라우저에 따라 테두리가 겹쳐지는 순서가 다르게 처리될 수 있습니다.

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있으면 
   두께는 각 테두리 별로 따로 적용되고, 색상은 top 에 설정된 색이 적용됩니다.

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있어도
   일부 브라우저는 각 테두리의 색상이나 두께가 각각 적용됩니다.


---

### -nexa-edge

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Objects > TreeItemIconControl > Property > -nexa-edge

**Description**

TreeItemIconControl 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
TreeItemIconControl.-nexa-edge
```

**Setting Syntax**

```javascript
-nexa-edge ::= 'none' | <image> [<fixedwidth>'px' <fixedheight>'px']

<image> ::= 'URL("' <Theme-Image> | <Web-Image> '")'
```
```javascript
* XCSS
-nexa-edge : URL("./images/border.png") 5px 5px;
```
- **`"none"`** — edge 이미지를 설정하지 않습니다.
- **`<image>`** — 'URL ("[이미지위치]")' 형식으로 테마 또는 웹의 이미지를 설정합니다.

테두리(border) 안쪽에 edge 형태로 이미지가 표시됩니다.
- **`<Theme-Image>`** — 테마에 선언된 이미지를 "theme://images\이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/파일명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<fixedwidth>`** — 이미지가 고정되어 표시될 왼쪽/오른쪽 영역의 크기를 pixel 단위로 설정합니다.
"0px" 설정 시 왼쪽/오른쪽 영역을 고정하지 않습니다.

값을 설정하지 않으면 "0px" 로 적용됩니다.
- **`<fixedheight>`** — 이미지가 고정되어 표시될 위쪽/아래쪽 영역의 크기를 pixel 단위로 설정합니다.
"0px" 설정 시 위쪽/아래쪽 영역을 고정하지 않습니다.

값을 설정하지 않으면 "0px" 로 적용됩니다.

**Remark**

- -nexa-edge 속성값을 설정하지 않으면 undefined 가 설정되고, "none" 으로 동작합니다.

- TreeItemIconControl 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.


◆ web runtime environment 제약

- <fixedwidth>,<fixedheight> 값이 이미지사이즈의 1/2을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-icon

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Objects > TreeItemIconControl > Property > -nexa-icon

**Description**

TreeItemIconControl 에 표시 될 아이콘 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
TreeItemIconControl.-nexa-icon
```

**Setting Syntax**

```javascript
-nexa-icon ::= 'URL(" ' <Theme-Image> | <Web-Image> ' ")'
```
```javascript
* XCSS
-nexa-icon : URL("./images/smiley.gif");
-nexa-icon : URL("theme://images/border.png");
```
- **`<Theme-Image>`** — 테마에 선언된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/파일명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.

**Remark**

- -nexa-icon 속성값을 설정하지 않으면 undefined 가 설정됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.


---

### -nexa-padding

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Objects > TreeItemIconControl > Property > -nexa-padding

**Description**

TreeItemIconControl 영역의 안쪽 여백을 설정하는 속성입니다.

**Syntax**

```javascript
TreeItemIconControl.-nexa-padding
```

**Setting Syntax**

```javascript
-nexa-padding ::= <npadding>'px'{4}
```
```javascript
* XCSS
-nexa-padding : 5px 5px 5px 5px;
```
- **`<npadding>`** — TreeItemIconControl 영역의 안쪽 여백을 pixel 단위로 설정합니다.

값을 1회 입력 시 top/right/bottom/left 에 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top/bottom, right/left 에 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top, right/left, bottom 에 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top, right, bottom, left 에 첫번째 값부터 각각 적용됩니다.

"px" 단위를 생략할 수 없습니다.

**Remark**

- -nexa-padding 속성값을 설정하지 않으면 undefined 가 설정되고, "0px" 로 동작합니다.

- -nexa-padding 속성은 컴포넌트에 표시되는 아이콘과 텍스트의 영역에 적용됩니다.

- TreeItemIconControl 의 너비보다 표시되는 컨텐츠의 너비가 길면 "right" 방향의 padding 값이 무시됩니다.

- Div 와 같이 자식을 갖을 수 있는 컴포넌트에서 -nexa-padding 속성은 자식 컴포넌트의 위치에 영향을 주지 않습니다.


---

### -nexa-rtl-background-image

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Objects > TreeItemIconControl > Property > -nexa-rtl-background-image

**Description**

TreeItemIconControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
TreeItemIconControl.-nexa-rtl-background-image
```

**Setting Syntax**

```javascript
strRtlBgImage ::= "URL(' " <Theme-Image> | <Web-Image> " ')"
```
```javascript
* XCSS
-nexa-rtl-background-image : URL("http://localhost/Test.jpg");
-nexa-rtl-background-image : URL("theme://images/Test.jpg");
```
- **`strRtlBgImage`** — "URL ('<이미지위치>')" 형식으로 테마 또는 웹의 이미지 경로를 문자열로 설정합니다.

background 속성에 설정된 값 중 이미지만 설정한 이미지로 대체됩니다.
background 속성에 설정된 이미지 이외의 값은 동일하게 적용됩니다.
- **`<Theme-Image>`** — 테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.

**Remark**

- rtl 속성에 의해 표시기준이 변경되면 반전된 이미지를 적용하려 할 때 사용하는 속성입니다.

- XCSS 에서만 설정할 수 있는 속성으로 스크립트로 값을 변경할 수 없습니다.
   XCSS 에 -nexa-rtl-background-image 속성값을 설정하지 않으면 background 속성에 설정된 이미지가 적용됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.

- 배경이미지가 적용되는 영역은 컴포넌트의 클라이언트 영역입니다.

- background 속성에 배경색이 설정되어 있을 경우 배경색 위에 이미지가 표시됩니다.

- 그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
   background 속성에 그라데이션이 설정되어 있을 경우 오동작이 발생할 수 있습니다.


---

### -nexa-rtl-edge-image

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Objects > TreeItemIconControl > Property > -nexa-rtl-edge-image

**Description**

TreeItemIconControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
TreeItemIconControl.-nexa-rtl-edge-image
```

**Setting Syntax**

```javascript
strRtlEgImage ::= "URL(' " <Theme-Image> | <Web-Image> " ')"
```
```javascript
* XCSS
-nexa-rtl-edge-image : URL("http://localhost/Test.jpg");
-nexa-rtl-edge-image : URL("theme://images/Test.jpg")
```
- **`strRtlEgImage`** — "URL ('<이미지위치>')" 형식으로 테마 또는 웹의 이미지 경로를 문자열로 설정합니다.

-nexa-edge 속성에 설정된 값 중 이미지만 설정한 이미지로 대체됩니다.
-nexa-edge 속성에 설정된 이미지 이외의 값은 동일하게 적용됩니다.
- **`<Theme-Image>`** — 테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.

**Remark**

- rtl 속성에 의해 표시기준이 변경되면 반전된 이미지를 적용하려 할 때 사용하는 속성입니다.

- XCSS 에서만 설정할 수 있는 속성으로 스크립트로 값을 변경할 수 없습니다.
   XCSS 에 -nexa-rtl-edge-image 속성값을 설정하지 않으면 -nexa-edge 속성에 설정된 이미지가 적용됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.

- 배경이미지가 적용되는 영역은 컴포넌트의 클라이언트 영역입니다.

- background 또는 -nexa-rtl-background-image 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-rtl-edge-image 속성에 설정된 이미지가 제일 위에 표시됩니다.


◆ web runtime environment 제약

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-rtl-icon

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Objects > TreeItemIconControl > Property > -nexa-rtl-icon

**Description**

TreeItemIconControl 의 rtl 속성이 true 로 적용될 때 표시될 아이콘 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
TreeItemIconControl.-nexa-rtl-icon
```

**Setting Syntax**

```javascript
strRtlIcon ::= "URL(' " <Theme-Image> | <Web-Image> " ')"
```
```javascript
* XCSS
-nexa-rtl-icon : URL("http://localhost/Test.jpg");
-nexa-rtl-icon : URL("theme://images/Test.jpg")
```
- **`strRtlIcon`** — "URL ('<이미지위치>')" 형식으로 테마 또는 웹의 이미지 경로를 문자열로 설정합니다.
- **`<Theme-Image>`** — 테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.

**Remark**

- rtl 속성에 의해 표시기준이 변경되면 반전된 이미지를 적용하려 할 때 사용하는 속성입니다.

- XCSS 에서만 설정할 수 있는 속성으로 스크립트로 값을 변경할 수 없습니다.
   XCSS 에 -nexa-rtl-icon 속성값을 설정하지 않으면 -nexa-icon 속성에 설정된 이미지가 적용됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.

- 아이콘 이미지가 표시되는 위치는 -nexa-icon-position 속성으로 설정합니다.


---

### -nexa-text-align

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Objects > TreeItemIconControl > Property > -nexa-text-align

**Description**

TreeItemIconControl 에 표시되는 텍스트 또는 컨텐츠의 가로 정렬 방식을 설정하는 속성입니다.

**Syntax**

```javascript
TreeItemIconControl.-nexa-text-align
```

**Setting Syntax**

```javascript
-nexa-text-align ::= 'left' | 'right' | 'center'
```
```javascript
* XCSS
-nexa-text-align : center;
```
- **`"left"`** — 텍스트 또는 컨텐츠를 왼쪽으로 정렬합니다.
- **`"center"`** — 텍스트 또는 컨텐츠를 가운데로 정렬합니다.
- **`"right"`** — 텍스트 또는 컨텐츠를 오른쪽으로 정렬합니다.

**Remark**

- -nexa-text-align 속성값을 설정하지 않으면 undefined 가 설정되고, 동작되는 기본값이 컴포넌트에 따라 다릅니다.
   > FileDownload, Button, IconControl, IconTextControl 은 "center" 로 동작됩니다.
   > MaskEdit 는 type 속성값이 "number" 이면 "right" 로 동작되고, "string" 이면 "left" 로 동작됩니다.
   > Grid 는 displaytype 속성값에 따라 동작되는 값이 다릅니다.
   > 나머지 컴포넌트는 "left" 로 동작됩니다.

- TreeItemIconControl 의 너비보다 표시되는 텍스트의 길이가 크면 "right" 를 설정해도 "left" 로 동작됩니다.


◆ web runtime environment 제약

- -nexa-text-align 속성값이 "right" 일 때 font 속성에 "italic" 을 설정하면 마지막 텍스트의 기울어진 부분이 잘려서 표시될 수 있습니다.
   웹브라우저에서 텍스트영역을 일반글자 기준으로 처리한 후 기울임을 적용하면서 발생하는 문제입니다.


---

### -nexa-vertical-align

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Objects > TreeItemIconControl > Property > -nexa-vertical-align

**Description**

TreeItemIconControl 에 표시되는 텍스트 또는 컨텐츠의 세로 정렬 방식을 설정하는 속성입니다.

**Syntax**

```javascript
TreeItemIconControl.-nexa-vertical-align
```

**Setting Syntax**

```javascript
-nexa-vertical-align ::= 'top' | 'middle' | 'bottom'
```
```javascript
* XCSS
-nexa-vertical-align : middle;
```
- **`"top"`** — 텍스트 또는 컨텐츠를 위쪽으로 정렬합니다.
- **`"middle"`** — 텍스트 또는 컨텐츠를 가운데로 정렬합니다.
- **`"bottom"`** — 텍스트 또는 컨텐츠를 아래쪽으로 정렬합니다.

**Remark**

- -nexa-vertical-align 속성값을 설정하지 않으면 undefined 가 설정되고, "middle" 로 동작합니다.


---

### background

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Objects > TreeItemIconControl > Property > background

**Description**

TreeItemIconControl 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
TreeItemIconControl.background
```

**Setting Syntax**

```javascript
strBackground ::= [<bg-image> | <linear-gradient>] [<background-origin> [<background-clip>]] [<background-color>]

<bg-image> ::= 'none' | <imageurl> [<repeat-style>] [<position>]
   <imageurl> ::= 'URL(' <Theme-Image> | <Web-Image> ')'
   <repeat-style> ::= 'repeat-x' | 'repeat-y' | 'repeat' | 'no-repeat'
   <position> ::= <horizontal-position> <vertical-position> ['/' <background-size>]
      <horizontal-position> ::= 'left' | 'center' | 'right' | <pos-percentage> '%'
      <vertical-position> ::= 'top' | 'center' | 'bottom' | <pos-percentage> '%'
      <background-size> ::= 'auto' | 'cover' | 'contain' | (<length> 'px' | <percentage> '%') {1,2}

<linear-gradient> ::= 'linear-gradient(' [<angle> , ] <color-stop> ')'
   <angle> ::= 'to left' | 'to right' | 'to top' | 'to bottom' | 'to left top' | 'to left bottom' | 'to right top' | 'to right bottom'
   <color-stop> ::= <startcolor-stop> [<listcolor-stop>] <endcolor-stop>
      <startcolor-stop> ::= <color> [<percentage>'%']
      <endcolor-stop> ::= <color> [<percentage>'%']
      <listcolor-stop> ::= <color> [<percentage>'%"] [,<listcolor-stop>]*
         <color> ::= <NamedColor> | <NumericColor>

<background-origin> ::= 'border-box' | 'padding-box'
<background-clip> ::= 'border-box' | 'padding-box'
<background-color> ::= <NamedColor> | <NumericColor>
```
```javascript
* XCSS
background : #ffffaa;
background : url('./images/smiley.gif') no-repeat center center #ffffaa;
background : url('./images/smiley.gif') no-repeat center center /auto #ffffaa;
background : url('./images/smiley.gif') no-repeat center center /15px 15% #ffffaa;
background : linear-gradient( red , blue , yellow );
background : linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0));
background : url('./images/smiley.gif') border-box border-box #ffffaa;
```
- **`<bg-image>`** — 배경에 표시될 이미지를 "'none' | <imageurl> [<repeat-style>] [<position>]" 형식으로 설정합니다.

<background-color> 값이 설정되어 있으면 배경색 위로 이미지가 표시됩니다.

"none" 으로 설정하면 이미지를 설정하지 않습니다.
<imageurl> 값으로 이미지를 설정할 수 있습니다.
<repeat-style> 값으로 이미지의 반복표시 방향을 설정할 수 있습니다.
<position> 값으로 이미지의 표시위치를 설정할 수 있습니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<imageurl>`** — 배경에 표시될 이미지를 "'URL(' <Theme-Image> | <Web-Image> ')'" 형식으로 설정합니다.

"URL ( [이미지경로] )" 형식으로 테마 또는 웹의 이미지를 설정합니다.
- **`<Theme-Image>`** — 테마에 선언된 이미지를 "theme://images\이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/파일명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<repeat-style>`** — 배경에 표시될 이미지의 반복표시 방향을 설정합니다.

"repeat-x" 설정 시 이미지가 가로 방향으로 반복표시 됩니다.
"repeat-y" 설정 시 이미지가 세로 방향으로 반복표시 됩니다.
"repeat" 설정 시 이미지가 가로,세로 방향으로 모두 반복표시 됩니다.
"no-repeat" 설정 시 이미지가 반복표시 되지 않습니다.

값을 설정하지 않으면 "repeat" 로 적용됩니다.
- **`<horizontal-position>`** — 배경에 표시될 이미지의 가로 위치를 설정합니다.

"left" 설정 시 TreeItemIconControl 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 TreeItemIconControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 TreeItemIconControl 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 TreeItemIconControl 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 TreeItemIconControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 TreeItemIconControl 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<horizontal-position> 값을 설정하고, <vertical-position> 값을 설정하지 않으면 <vertical-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <vertical-position> 은 "top" 으로 적용됩니다.
- **`<pos-percentage>`** — 배경에 표시될 이미지의 가로/세로 위치를 비율로 설정합니다.

<horizontal-position> 에 "0%" 설정 시 "left" 와 같은 위치로 적용됩니다.
<horizontal-position> 에 "50%" 설정 시 "center" 와 같은 위치로 적용됩니다.
<horizontal-position> 에 "100%" 설정 시 "right" 과 같은 위치로 적용됩니다.
<vertical-position> 에 "0%" 설정 시 "top" 와 같은 위치로 적용됩니다.
<vertical-position> 에 "50%" 설정 시 "center" 와 같은 위치로 적용됩니다.
<vertical-position> 에 "100%" 설정 시 "bottom" 과 같은 위치로 적용됩니다.

0 보다 작거나 100 보다 큰 값을 설정 시 TreeItemIconControl 의 영역을 벗어난 가상의 위치로 적용됩니다.

값 설정 시 "%" 단위를 생략할 수 없습니다.
- **`<background-size>`** — 배경에 표시될 이미지의 크기를 설정합니다.
- auto: 원본 이미지 크기를 유지합니다.
- cover: 이미지 비율을 유지하는 한도 내에서 배경에 빈 공간이 없도록 가장 크게 설정합니다.
  width 또는 height 길이가 긴 쪽은 잘려서 표시될 수 있습니다.
- contain: 이미지가 잘리지 않고 비율을 유지하는 한도 내에서 가장 크게 설정합니다.
- <length> | <percentage>: 이미지의 width, height 크기 또는 컴포넌트 대비 비율을 설정합니다. 
  width 값만 설정하면 원본 이미지 비율에 따라 height 크기를 자동으로 처리합니다.
  height 값만 설정할 수는 없습니다. 
  음수값은 설정할 수 없습니다.
- **`<linear-gradient>`** — 배경에 표시될 그라데이션을 "'linear-gradient(' [<angle> , ] <color-stop> ')'" 형식으로 설정합니다.

<background-color> 값이 설정되어 있으면 배경색 위로 그라데이션이 표시됩니다.

"linear-gradient ( [방향, 색상값, 색상값, ...] )" 형식으로 그라데이션 방향과 색상을 설정할 수 있습니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<angle>`** — 그라데이션의 표시 방향을 설정합니다.

"to left" 설정 시 오른쪽에서 왼쪽 방향으로 그라데이션이 표시됩니다.
"to right" 설정 시 왼쪽에서 오른쪽 방향으로 그라데이션이 표시됩니다.
"to top" 설정 시 아래쪽에서 윗쪽 방향으로 그라데이션이 표시됩니다.
"to bottom" 설정 시 윗쪽에서 아래쪽 방향으로 그라데이션이 표시됩니다.
"to left top" 설정 시 오른쪽 아래 방향에서 왼쪽 윗 방향으로 그라데이션이 표시됩니다.
"to left bottom" 설정 시 오른쪽 윗 뱡향에서 왼쪽 아래 방향으로 그라데이션이 표시됩니다.
"to right top" 설정 시 왼쪽 아래 방향에서 오른쪽 윗 방향으로 그라데이션이 표시됩니다.
"to right bottom" 설정 시 왼쪽 윗 방향에서 오른쪽 아래 방향으로 그라데이션이 표시됩니다.

값을 설정하지 않으면 "to bottom"으로 적용됩니다.
- **`<color-stop>`** — 그라데이션의 시작점, 끝점, 중간점의 색을 "<startcolor-stop> [<listcolor-stop>] <endcolor-stop>" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 시작점과 끝점의 위치가 결정됩니다.
예를 들어 <angle> 값이 "to left" 이면 TreeItemIconControl 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 TreeItemIconControl 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

<listcolor-stop> 에 그라데이션 중간점의 색을 한개 이상 설정할 수 있으며 <percentage> 값 생략 시 균등하게 표시됩니다.
- **`<startcolor-stop>`** — 그라데이션의 시작점 색을 "<color> [<percentage>'%']" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 시작점 위치가 결정됩니다.
시작점의 <percentage> 값을 "0" 이상으로 설정 시 "시작점~설정값"까지 동일한 색상으로 표시됩니다.
- **`<endcolor-stop>`** — 그라데이션의 끝점 색을 "<color> [<percentage>'%']" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 끝점 위치가 결정됩니다.
끝점의 <percentage> 값을 "100" 이하로 설정 시 "설정값~끝점"까지 동일한 색상으로 표시됩니다.
- **`<listcolor-stop>`** — 그라데이션의 중간점 색을 "<color> [<percentage>'%"] [,<listcolor-stop>]*" 형식으로 설정합니다.

시작점과 끝점 사이에 적용될 중간색을 ","로 구분하여 여러개 설정할 수 있습니다.
뒤에 선언된 색의 <percentage> 값은 먼저 선언된 색의 <percentage> 값보다 커야 합니다.
- **`<color>`** — 그라데이션 색상을 색상이름 또는 색상코드로 설정합니다.
- **`<percentage>`** — <color> 에 해당하는 색이 적용될 위치를 비율값으로 설정합니다.

<angle> 값에 의해 결정된 시작점이 "0%" 로 적용됩니다.
<angle> 값에 의해 결정된 끝점이 "100%" 로 적용됩니다.

0 보다 작거나 100 보다 큰 값을 설정 시 TreeItemIconControl 의 영역을 벗어난 가상의 위치로 적용됩니다.
예를 들어 "150%" 설정 시 시작점에서 끝점까지 거리의 반만큼 끝점에서 벗어난 위치에 <color> 값이 적용됩니다.

<percentage> 값을 생략하면 균등한 위치에 <color> 값이 적용됩니다.
값 설정 시 "%" 단위를 생략할 수 없습니다.
- **`<background-origin>`** — 배경으로 처리될 기준영역을 설정합니다.

"border-box" 설정 시 Border 를 포함한 영역이 배경영역으로 처리됩니다.

"padding-box" 설정 시 Border 의 안쪽 영역이 배경영역으로 처리됩니다.
"padding-box" 설정 시 그라데이션의 시작점, 끝점과 배경이미지의 반복 기준위치가 Border 안쪽 영역으로 처리됩니다.

값을 설정하지 않으면 "padding-box" 로 적용됩니다.
- **`<background-clip>`** — 배경이 실제로 표시될 영역을 설정합니다.

"border-box" 설정 시 Border 를 포함한 영역에 배경이 표시됩니다.
"padding-box" 설정 시 Border 의 안쪽 영역에 배경이 표시됩니다.

값을 설정하지 않으면 <background-origin> 에 설정한 값이 동일하게 적용됩니다.
<background-origin> 값도 설정하지 않았을 경우 "border-box" 로 적용됩니다.
- **`<background-color>`** — 배경에 표시될 색을 색상이름 또는 색상코드로 설정합니다.

<bg-image> 또는 <linear-gradient> 값이 설정되어 있다면 배경색은 배경이미지 또는 그라데이션 아래에 표시됩니다.
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 TreeItemIconControl 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- background 속성값을 설정하지 않으면 undefined 가 설정되고, "transparent" 로 동작합니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.

- 배경의 기준영역과 표시영역은 <background-origin>, <background-clip> 값으로 각각 설정합니다.

- 배경 이미지를 중앙에 위치시키려면 <position> 값을 "center" 또는 "center center" 로 설정하여야 합니다.

- 배경이미지와 배경색을 모두 설정하면 배경색 위에 이미지가 표시됩니다.
   그라데이션과 배경색을 모두 설정하면 배경색 위에 그라데이션이 표시됩니다.

- 그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
   두 값을 동시에 설정 시 오동작이 발생할 수 있습니다.


---

### border-radius

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Objects > TreeItemIconControl > Property > border-radius

**Description**

TreeItemIconControl 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
TreeItemIconControl.border-radius
```

**Setting Syntax**

```javascript
border-radius ::= <horizontal-radius>{4} ['/' <vertical-radius>{4}]
```
```javascript
* XCSS
border-radius : 10px;
border-radius : 5px 6px 10px / 5px 10px;
```
- **`<horizontal-radius>`** — 모서리를 둥글게 표시하기 위한 가로크기를 설정합니다.

pixel 단위로 입력하며 스페이스를 구분자로 4개값까지 설정할 수 있습니다.

값을 1회 입력 시 top-left/top-right/bottom-right/bottom-left 모서리의 가로크기로 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top-left/bottom-right, top-right/bottom-left 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top-left, top-right/bottom-left, bottom-right 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top-left, top-right, bottom-right, bottom-left 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
- **`<vertical-radius>`** — 모서리를 둥글게 표시하기 위한 세로크기를 설정합니다.

pixel 단위로 입력하며 스페이스를 구분자로 4개값까지 설정할 수 있습니다.

값을 1회 입력 시 top-left/top-right/bottom-right/bottom-left 모서리의 세로크기로 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top-left/bottom-right, top-right/bottom-left 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top-left, top-right/bottom-left, bottom-right 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top-left, top-right, bottom-right, bottom-left 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.

**Remark**

- border-radius 속성값을 설정하지 않으면 undefined 가 설정되고, "0px" 로 동작합니다. 

- <horizontal-radius> 와 <vertical-radius> 는 "/" 문자로 구분하여 입력합니다.

◆ NRE 제약

- border-radius 속성을 설정하면 모든 테두리가 같은 색으로 적용됩니다.
   -nexa-border 속성에서 top 에 적용된 색이 모든 테두리에 적용됩니다.


---

### cursor

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Objects > TreeItemIconControl > Property > cursor

**Description**

TreeItemIconControl 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
TreeItemIconControl.cursor
```

**Setting Syntax**

```javascript
cursor ::= 'none' | 'auto' | 'default' | 'copy' | 'crosshair' | 'help' | 'move' | 'not-allowed' | 'pointer' | 'progress' | 'text' | 'wait' | 'ew-resize' | 'e-resize' | 'w-resize' | 'ns-resize' | 'n-resize' | 's-resize' | 'nesw-resize' | 'ne-resize' | 'sw-resize' | 'nwse-resize' | 'nw-resize' | 'se-resize'
```
```javascript
* XCSS
cursor : default ;
```
- **`"none"`** — 마우스 포인터를 표시하지 않습니다.

* macOS NRE는 지원하지 않습니다.
- **`"auto"`** — 컴포넌트의 특성에 맞는 포인터가 표시됩니다.

Edit계열 컴포넌트는 "text" 포인터가 표시됩니다.
그외 계열 컴포넌트는 "arrow" 포인터가 표시됩니다.
- **`"default"`** — 시스템의 기본 포인터가 표시됩니다.

일반적으로 "arrow" 포인터가 표시됩니다.
- **`"copy"`** — 화살표와 작은 십자("+") 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"crosshair"`** — 십자("+") 모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"help"`** — 화살표와 작은 물음표 모양의 포인터가 표시됩니다.

* Safari 브라우저는 물음표 모양의 포인터가 표시됩니다.
* macOS NRE 는 지원하지 않습니다.
- **`"move"`** — 십자 화살표 모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"not-allowed"`** — 금지 표지판 모양의 포인터가 표시됩니다.

* Safari 브라우저는 화살표와 금지 표지판 모양의 포인터가 표시됩니다.
* macOS NRE 는 지원하지 않습니다.
- **`"pointer"`** — 손모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"progress"`** — OS 또는 환경에 따라 다른 형태의 포인터가 표시됩니다.

원, 화살표와 모래시계, 화살표와 원 등 다양한 형태로 표시됩니다.

* macOS NRE 에서는 지원하지 않습니다.
- **`"text"`** — 아이("I") 모양의 포인터가 표시됩니다.
- **`"wait"`** — OS 또는 환경에 따라 다른 형태의 포인터가 표시됩니다.

원, 모래시계, 시계 등 다양한 형태로 표시됩니다.
- **`"ew-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"e-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"w-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"ns-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"n-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"s-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"nesw-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"ne-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"sw-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"nwse-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"nw-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS 는 지원하지 않습니다.
- **`"se-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

**Remark**

- cursor 속성값을 설정하지 않으면 undefined 가 설정되고 "auto" 로 동작합니다.

- disable 상태인 서브컨트롤이 있는 컴포넌트의 경우 마우스 포인터는 서브컨트롤 영역에서
   서브컨트롤의 disable status값이 적용되지 않고, 컴포넌트의 enable status 설정값이 적용됩니다.
   서브컨트롤과 컴포넌트가 모두 disable 상태일 때는 parent 의 enable status 설정값이 적용됩니다.


---

### opacity

> Components > Component > Grid > Objects > GridCellControl > Objects > CellTreeItemControl > Objects > TreeItemIconControl > Property > opacity

**Description**

TreeItemIconControl 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
TreeItemIconControl.opacity
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8 ;
opacity : 80%;
```
- **`opacity`** — 0.0 ~ 1.0 사이의 값 또는 0.0% ~ 100.0% 사이의 값을 지정합니다.
0(또는 0%)을 설정하면 완전 투명, 1(또는 100%)을 설정하면 완전 불투명으로 처리됩니다.
1 이상의 값은 1로, 0 이하의 값은 0으로 처리됩니다. 마찬가지로 100% 이상의 값은 100%로, 0% 이하의 값은 0%로 처리됩니다.

XCSS는 숫자 또는 퍼센트 값으로만 설정할 수 있습니다.

**Remark**

- opacity 속성값을 설정하지 않으면 undefined 가 설정되고, 1 로 동작합니다.

- Div 와 같이 자식 컴포넌트를 가질 수 있는 컴포넌트에 opacity 속성을 적용하면 자식 컴포넌트도 함께 적용됩니다.

- 부모와 자식 컴포넌트에 각각 opacity 속성이 설정되어 있으면 자식 컴포넌트의 투명도는 부모의 투명도에 추가적으로 적용됩니다.
   예를 들어 부모의 opacity가 0.5 이고 자식의 opacity가 0.4 이면 결과적으로 자식 컴포넌트는 0.2 의 투명도가 적용됩니다.


---
