# nexacroN V24 — ListView

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 429개

---

## Components > Component > ListView

### ListView

> Components > Component > ListView

**Description**

ListView 는 Dataset 의 내용을 아이템 단위로 표현하는 컴포넌트입니다.

**Remark**

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

**Structure**



**Basic Key Action**

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | 편집할 수 있는 다음 Cell로 포커스가 이동합니다.
편집할 수 있는 다음 Cell이 없으면 다음 Tab Order 순서인 컴포넌트 중 편집할 수 있는 컴포넌트로 포커스가 이동합니다. |
| Band 이동 | 상하방향키 | 다음 Body Band로 이동합니다. |
| Cell 이동 | 좌우방향키 | Cell 생성 순서에 따라 다음 Cell로 이동합니다. |
| Cell 활성화 | Enter | 선택된 Cell이 편집할 수 있는 Cell이라면 입력창이 활성화됩니다.
입력창이 활성화되어 있는 Cell이면 입력창이 비활성화됩니다. |
| Cell 활성화 | 키입력 | autoenter 속성값이 "key" 일 때 선택된 Cell이 편집할 수 있는 Cell이면 입력창이 활성화됩니다. |
| Cell 클릭 | Space | Cell이 Button 형태일 때 oncellclick 이벤트가 발생합니다. |
| 체크값 변경 | Space | Cell이 CheckBox 형태일 때 체크값을 토글합니다. |
| DatePicker 열기 | Alt + 아래방향키 또는 Option + 아래방향키 | Cell이 Calendar 형태일 때 팝업달력(DatePicker)이 표시됩니다. |
| ComboLIst 열기 | Alt + 아래방향키 또는 Option + 아래방향키 | Cell이 Combo 형태일 때 ComboList가 표시됩니다. |
| 스크롤 이동 | Ctrl + 상하방향키 | ListView 컴포넌트의 스크롤바가 활성화된 상태일 경우 입력된 방향키 방향으로 스크롤이 이동합니다. |
| Detail Band 확장 | Ctrl + Alt + E 또는 Ctrl + Option + E | Detail Band가 확장/축소됩니다. |

**Accessibility Key Action**

접근성 기능이 활성화 되어 있을 때 적용되는 키 액션입니다.

**Property**

| Name | Description |
| --- | --- |
| accessibilityaction | ListView에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다. |
| accessibilitydesclevel | ListView 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다. |
| accessibilitydescription | ListView에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다. |
| accessibilityenable | ListView 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다. |
| accessibilitylabel | ListView에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다. |
| accessibilityrole | ListView에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다. |
| autoenter | ListView 에서 편집이 가능한 Cell 이 선택되었을 때 편집모드용 컨트롤이 활성화 되는 방법을 설정하는 속성입니다. |
| autoupdatetype | Cell이 Combo, MultiCombo, Calendar 중 하나의 형식일 때 팝업창으로 선택된 값이 Dataset 오브젝트에 적용되는 시점을 설정하는 속성입니다. |
| background | ListView 의 배경 영역을 설정하는 속성입니다. |
| bandexpandtype | ListView 에서 Detail 밴드가 표시되는 방법을 설정하는 속성입니다. |
| bandindentsize | ListView 에서 Detail 밴드가 표시될 때 왼쪽 여백의 너비를 설정하는 속성입니다. |
| bandinitstatus | bandexpandtype 속성값이 "expand" 일 때 Detail 밴드의 최초 표시상태를 설정하는 속성입니다. |
| binddataset | ListView 의 전체 Cell 과 바인드 되는 DataSet 의 ID 를 설정하는 속성입니다. |
| border-radius | ListView 의 모서리 모양을 설정하는 속성입니다. |
| bottom | ListView 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다. |
| cellcalendarbuttonsize | Cell 이 Calendar 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다. |
| cellcalendarpopupsize | Cell 이 Calendar 형식일 때 팝업으로 표시되는 달력의 크기를 설정하는 속성입니다. |
| cellcalendarpopuptype | Cell 이 Calendar 형식일 때 팝업달력(DatePicker)이 표시되는 방식을 설정하는 속성입니다. |
| cellcheckboxsize | Cell 이 CheckBox 형식일 때 CheckBox 의 크기를 설정하는 속성입니다. |
| cellclickbound | CheckBox 형식의 Cell 에서 마우스 클릭에 의해 값이 변경되는 영역을 설정하는 속성입니다. |
| cellcombobuttonsize | Cell 이 Combo 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다. |
| cellcombopopupsize | Cell 이 Combo 형식일 때 팝업으로 표시되는 아이템 리스트의 크기를 설정하는 속성입니다. |
| cellcombopopuptype | Cell 이 Combo 형식일 때 아이템 리스트가 표시되는 방식을 설정하는 속성입니다. |
| cellmulticombobuttonsize | Cell이 MultiCombo 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다. |
| cellmulticombopopupsize | Cell 이 MultiCombo 형식일 때 팝업으로 표시되는 아이템 리스트의 크기를 설정하는 속성입니다. |
| cellmulticombopopuptype | Cell이 MultiCombo 형식일 때 아이템 리스트가 표시되는 방식을 설정하는 속성입니다. |
| color | ListView 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| createrowstype | ListView 컴포넌트 생성 시점에 Band 생성 방식을 설정하는 속성입니다. |
| cssclass | ListView 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다. |
| cursor | ListView 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| enable | ListView 의 사용가능 여부를 설정하는 속성입니다. |
| enableevent | ListView 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다. |
| enableredraw | ListView 에 변경이 발생하면 화면을 자동으로 다시 그릴 지 설정하는 속성입니다. |
| flexgrow | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축) 여백을 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다. |
| flexshrink | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 영역이 컨테이너 영역을 초과하지 않도록 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다. |
| font | ListView 에서 사용하는 폰트를 설정하는 속성입니다. |
| formatid | formats 속성에 정의된 포맷 중 ListView 에 표시할 포맷의 ID 를 설정하는 속성입니다. |
| formats | ListView 에 정의된 모든 포맷의 정보를 갖는 속성입니다. |
| height | ListView 을(를) 표시하기 위한 높이를 설정하는 속성입니다. |
| id | ListView의 고유 식별자를 설정하는 속성입니다. |
| initvalueid | ListView 에 적용될 InitValue 의 ID 를 설정하는 속성입니다. |
| layoutorder | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 순서를 설정합니다. |
| left | ListView 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다. |
| letter-spacing | ListView 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다. |
| locale | ListView 에 적용될 국가 및 언어(locale)를 설정하는 속성입니다. |
| maxheight | ListView 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다. |
| maxwidth | ListView 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다. |
| minheight | ListView 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다. |
| minwidth | ListView 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다. |
| name | ListView 의 이름을 설정하는 속성입니다. |
| -nexa-border | ListView 의 테두리를 설정하는 속성입니다. |
| -nexa-edge | ListView 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-rtl-background-image | ListView 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| -nexa-rtl-edge-image | ListView 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| nodataimage | ListView 에 표시할 데이터가 없을 때 출력할 이미지의 위치 경로를 설정하는 속성입니다. |
| nodatatext | ListView 에 표시할 데이터가 없을 때 출력할 텍스트를 설정하는 속성입니다. |
| opacity | ListView 영역의 투명도를 설정하는 속성입니다. |
| parent | ListView 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| positionstep | 부모 오브젝트가 화면분할기능을 사용할 때 ListView 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다. |
| readonly | ListView 에서 편집을 허용할 지 설정하는 속성입니다. |
| right | ListView 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다. |
| rtl | ListView 에서 내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다. |
| scrollbarbarminsize | ListView 에 표시되는 스크롤바의 트랙바(TrackBar) 최소크기를 설정하는 속성입니다. |
| scrollbarbaroutsize | ListView 의 스크롤바에서 트랙바(TrackBar)가 사라지는 기준 크기를 설정하는 속성입니다. |
| scrollbardecbuttonsize | ListView 에 표시되는 스크롤바의 감소 버튼(DecButton) 크기를 설정하는 속성입니다. |
| scrollbarincbuttonsize | ListView 에 표시되는 스크롤바의 증가 버튼(IncButton) 크기를 설정하는 속성입니다. |
| scrollbarsize | ListView 에 표시되는 스크롤바의 크기를 설정하는 속성입니다. |
| scrollbartrackbarsize | ListView 에 표시되는 스크롤바의 트랙바(TrackBar) 크기를 설정하는 속성입니다. |
| scrollbartype | ListView 에 스크롤바가 표시되는 형식을 설정하는 속성입니다. |
| scrollindicatorsize | ListView 에 표시되는 스크롤 인디케이터바의 크기를 설정하는 속성입니다. |
| scrolltype | ListView 에서 사용되는 스크롤의 종류를 설정하는 속성입니다. |
| selectchangetype | ListView 에 마우스 클릭 시 아이템 선택이 결정되는 시점을 설정하는 속성입니다. |
| selectscrollmode | ListView 영역 내에서 드래그 액션을 했을 때 수행되는 동작을 설정하는 속성입니다. |
| tablecellarea | Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다. |
| taborder | 탭키 입력으로 컴포넌트간 포커스를 이동할 때 ListView 의 순서를 설정하는 속성입니다. |
| tabstop | 탭키 입력으로 컴포넌트간 포커스를 이동할 때 ListView 이(가) 포커스를 받을 지 여부를 설정하는 속성입니다. |
| tooltiptext | ListView 에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다. |
| tooltiptype | ListView 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다. |
| top | ListView 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다. |
| useselcolor | ListView 에서 아이템 선택 시 XCSS 에 정의된 Select 관련 Status 를 적용시킬지 설정하는 속성입니다. |
| usesoftkeyboard | ListView 의 Cell 에 편집모드용 컨트롤이 표시되어 포커스를 가질 때 키패드의 표시 여부를 설정하는 속성입니다. |
| visible | ListView 이(가) 화면에 표시될지 여부를 설정하는 속성입니다. |
| vscrollbar | ListView 의 서브컨트롤인 수직 스크롤바의 오브젝트를 갖는 읽기전용 속성입니다. |
| width | ListView 을(를) 표시하기 위한 너비를 설정하는 속성입니다. |
| word-spacing | ListView 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addEvent | ListView 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| addEventHandler | ListView 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 ListView 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| bringToFront | 부모가 동일한 컴포넌트 중 ListView 이(가) 화면의 제일 앞에 표시되게 합니다. |
| bringToPrev | 부모가 동일한 컴포넌트 중 ListView 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| clearSelect | ListView 에서 선택된 아이템의 선택상태를 해제하는 메소드입니다. |
| createFormat | ListView 와 바인딩 된 DataSet 의 Column 정보를 기준으로 새로운 포맷을 생성하는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 ListView 을(를) 삭제하는 메소드입니다. |
| dropdown | ListView 컴포넌트의 Cell 편집상태에서 아이템 리스트를 표시하는 메서드입니다. |
| dropdownCalendar | ListView 에서 edittype 속성값이 "date" 인 Cell 이 편집상태일 때 팝업달력을 표시하는 메소드입니다. |
| dropdownCombo | ListView 에서 edittype 속성값이 "combo" 인 Cell 이 편집상태일 때 Combo 아이템 리스트를 표시하는 메소드입니다. |
| findEventHandler | ListView 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getBandExpandStatus | ListView 에서 특정 아이템의 Detail 밴드 표시여부를 반환하는 메소드입니다. |
| getBandProperty | 특정 밴드에서 지정된 속성의 값을 반환하는 메소드입니다. |
| getBindCellId | DataSet 의 특정 Column 과 바인드된 Cell 의 ID 를 반환하는 메소드입니다. |
| getBindDataset | ListView 의 binddataset 속성에 설정되어 있는 DataSet 오브젝트를 반환하는 메소드입니다. |
| getCellCount | ListView 에서 특정 밴드에 정의된 Cell 의 갯수를 반환하는 메소드입니다. |
| getCellProperty | Cell 의 특정 속성값을 반환하는 메소드입니다. |
| getCellRect | 특정 Cell 의 위치영역 정보를 Rect 오브젝트로 반환하는 메소드입니다. |
| getCellText | 특정 Cell 에 표시되는 텍스트값을 반환하는 메소드입니다. |
| getCellValue | 특정 Cell 의 text 속성에 설정된 값을 반환하는 메소드입니다. |
| getCurEditType | ListView 에서 선택된 Cell 의 edittype 속성값을 반환하는 메소드입니다. |
| getCurFormatString | ListView 에 현재 표시되고 있는 포맷을 XML 형식의 문자열로 반환하는 메소드입니다. |
| getDatasetRow | ListView 의 아이템 인덱스에 해당하는 DataSet 의 Row 인덱스를 반환하는 메소드입니다. |
| getEditCaret | Cell 이 편집상태일 때 캐럿이 위치한 인덱스를 반환하는 메소드입니다. |
| getEditingText | Cell 이 편집모드일 때 표시되는 컨트롤에 입력중인 text 값을 반환하는 메소드입니다. |
| getEditingValue | Cell 이 편집모드일 때 표시되는 컨트롤에 입력중인 value 값을 반환하는 메소드입니다. |
| getEditSelect | Cell 이 편집상태일 때 선택된 텍스트의 인덱스를 배열로 반환하는 메소드입니다. |
| getEditSelectedText | Cell 이 편집상태일 때 선택된 텍스트를 반환하는 메소드입니다. |
| getEditText | Cell 이 편집모드일 때 표시되는 컨트롤의 text 속성값을 반환하는 메소드입니다. |
| getEditValue | Cell 이 편집모드일 때 표시되는 컨트롤의 value 속성값을 반환하는 메소드입니다. |
| getEventHandler | ListView 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| getFormatIdList | Format id 배열값을 반환하는 메소드입니다. |
| getFormatString | 디자인 시 정의된 전체 포맷을 XML 형식의 문자열로 반환하는 메소드입니다. |
| getOffsetBottom | 부모 컴포넌트의 Top 위치를 기준으로 ListView 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetHeight | ListView 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetLeft | 부모 컴포넌트의 Left 위치를 기준으로 ListView 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetRight | 부모 컴포넌트의 Left 위치를 기준으로 ListView 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetTop | 부모 컴포넌트의 Top 위치를 기준으로 ListView 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetWidth | ListView 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getPixelBottom | ListView 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelHeight | ListView 의 height 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelLeft | ListView 의 left 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelRight | ListView 의 right 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelTop | ListView 의 top 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelWidth | ListView 의 width 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getSelectedRows | ListView 에 선택되어 있는 아이템의 인덱스를 배열로 반환하는 메소드입니다. |
| getVScrollPos | ListViw 에 표시된 수직스크롤바의 트랙바 위치값을 반환하는 메소드입니다. |
| hideDetailBand | ListView 에서 특정 아이템의 Detail 밴드를 숨기는 메소드입니다. |
| init | 스크립트로 ListView 을(를) 동적 생성한 후에 초기화하는 메소드입니다. |
| insertEventHandler | ListView 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| isDropdown | ListView 컴포넌트에 아이템 리스트가 표시되어 있는지 여부를 반환하는 메소드입니다. |
| isDropdownCalendar | ListView 에 팝업달력이 표시되어 있는지 여부를 반환하는 메소드입니다. |
| isDropdownCombo | ListView 에 Combo 아이템 리스트가 표시되어 있는지 여부를 반환하는 메소드입니다. |
| move | ListView 의 위치와 크기를 변경하는 메소드입니다. |
| moveToNext | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 ListView 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| moveToNextCell | ListView 에서 Cell 포커스를 편집 가능한 다음 Cell 로 이동시키는 메소드입니다. |
| moveToPrev | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 ListView 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| moveToPrevCell | ListView 에서 Cell 포커스를 편집 가능한 이전 Cell 로 이동시키는 메소드입니다. |
| redrawExprCell | ListView 컴포넌트 Cell에 설정된 Expr 값을 모두 갱신하는 메서드입니다. |
| removeEvent | ListView 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| removeEventHandler | ListView 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | ListView 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| resize | ListView 의 크기를 변경하는 메소드입니다. |
| selectRow | ListView 에서 인수로 전달된 위치의 아이템을 선택 또는 선택해제 하는 메소드입니다. |
| sendToBack | 부모가 동일한 컴포넌트 중 ListView 이(가) 화면의 제일 뒤에 표시되게 합니다. |
| sendToNext | 부모가 동일한 컴포넌트 중 ListView 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| setBandProperty | 특정 밴드에서 지정된 속성의 값을 설정하는 메소드입니다. |
| setBindDataset | ListView 의 binddataset 속성에 DataSet 오브젝트를 설정하는 메소드입니다. |
| setCellPos | ListView 에서 현재 선택된 아이템에 속한 Cell 중 특정 Cell 에 포커스를 이동하는 메소드입니다. |
| setCellProperty | ListView 에서 특정 Cell 의 속성값을 설정하는 메소드입니다. |
| setEditingValue | Cell 이 편집모드일 때 표시되는 컨트롤 또는 서브컨트롤의 value 속성을 설정하는 메소드입니다. |
| setEditSelect | Cell 이 편집상태일 때 편집기에 표시되는 텍스트를 인수로 전달된 영역만큼 선택하는 메소드입니다. |
| setEditValue | Cell 이 편집모드일 때 표시되는 컨트롤의 value 속성을 설정하는 메소드입니다. |
| setEventHandler | ListView 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | ListView 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| setFocus | ListView 에 포커스를 설정하는 메서드입니다. |
| setFormat | ListView 에 표시 할 포맷의 ID 를 설정하는 메소드입니다. |
| setOffsetBottom | 부모 컴포넌트의 Top 위치를 기준으로 ListView 의 bottom 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetHeight | ListView 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetLeft | 부모 컴포넌트의 Left 위치를 기준으로 ListView 의 left 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetRight | 부모 컴포넌트의 Left 위치를 기준으로 ListView 의 right 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetTop | 부모 컴포넌트의 Top 위치를 기준으로 ListView 의 top 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetWidth | ListView 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| show | 스크립트로 동적 생성한 ListView 을(를) 화면에 표시하는 메소드입니다. |
| showDetailBand | ListView 에서 특정 아이템의 Detail 밴드를 표시하는 메소드입니다. |
| showEditor | 현재 선택된 Cell 이 편집 가능할 경우 편집모드용 컨트롤을 표시하거나 숨기는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onbandclick | ListView 에서 Cell 영역 이외의 밴드 영역을 클릭했을 때 발생하는 이벤트입니다. |
| onbanddblclick | ListView 에서 Cell 영역 이외의 밴드 영역을 더블클릭했을 때 발생하는 이벤트입니다. |
| onbandexpandclick | ListView 에서 Body 밴드의 확장바를 클릭했을 때 발생하는 이벤트입니다. |
| onbandstatuschanged | ListView 에서 Detail 밴드가 표시되거나 숨겨진 후 발생하는 이벤트입니다. |
| oncellclick | ListView 에서 Body 또는 Detail 밴드 영역의 Cell 을 클릭했을 때 발생하는 이벤트입니다. |
| oncelldblclick | ListView 에서 Body 또는 Detail 밴드 영역의 Cell 을 더블클릭 했을 때 발생하는 이벤트입니다. |
| oncellexpandclick | ListView 에서 Cell 의 오른쪽에 표시된 확장버튼을 클릭했을 때 발생하는 이벤트입니다. |
| oncellimeaction | 사용자 작업 버튼 또는 ENTER 키 입력 시 발생하는 이벤트입니다. |
| onclick | 포맷이 정의되지 않은 ListView 영역에서 마우스 왼쪽버튼을 클릭했을 때 발생하는 이벤트입니다. |
| oncloseup | ListView 에 표시되었던 Combo 아이템 리스트 또는 팝업달력이 닫힐 때 발생하는 이벤트입니다. |
| oncontextmenu | ListView 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다. |
| ondevicebuttonup | 모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다. |
| ondrag | ListView 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다. |
| ondragenter | ListView 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| ondragleave | ListView 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| ondragmove | ListView 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| ondrop | ListView 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다. |
| ondropdown | ListView 의 Cell 에서 Combo 아이템 리스트 또는 팝업달력이 표시될 때 발생하는 이벤트입니다. |
| onenterdown | ListView 에서 Cell 에 편집모드용 컨트롤이 활성화 되어 있을 때 엔터키가 입력되면 발생하는 이벤트입니다. |
| oninput | ListView 에서 입력을 시도할 때 발생하는 이벤트 입니다. |
| onkeydown | ListView 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다. |
| onkeyup | ListView 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다. |
| onkillfocus | ListView 에서 포커스가 나갈  때 발생하는 이벤트입니다. |
| onlbuttondown | ListView 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| onlbuttonup | ListView 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| onmousedown | ListView 영역 내에서 마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 눌렸을 때 발생하는 이벤트입니다. |
| onmouseenter | ListView 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| onmouseleave | ListView 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| onmousemove | ListView 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| onmouseup | 마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 ListView 영역 내에서 떼어질 때 발생하는 이벤트입니다. |
| onmousewheel | ListView 영역 내에서 마우스의 휠버튼을 회전했을 때 발생하는 이벤트입니다. |
| onmove | ListView 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| onnodataareaclick | ListView 에서 Cell 또는 밴드 영역이 아닌 곳을 클릭했을 때 발생하는 이벤트입니다. |
| onnodataareadblclick | ListView 에서 Cell 또는 밴드 영역이 아닌 곳을 더블클릭 했을 때 발생하는 이벤트입니다. |
| onrbuttondown | ListView 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| onrbuttonup | ListView 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| onselectchanged | ListView 에서 선택 영역이 변경 된 후 발생하는 이벤트입니다. |
| onsetfocus | ListView 에 포커스가 들어올 때 발생하는 이벤트입니다. |
| onsize | ListView 의 크기가 변경됐을 때 발생하는 이벤트입니다. |
| ontouchend | ListView 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다. |
| ontouchmove | ListView 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다. |
| ontouchstart | ListView 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다. |
| onvscroll | ListView 에서 수직 스크롤바를 이동 했을 때 발생하는 이벤트입니다. |

**Status**

컴포넌트가 비활성화된 상태

**Control**

| Name | TypeName |
| --- | --- |
| body | nexacro.ListViewBandControl |
| detail | nexacro.ListViewDetailBandControl |
| vscrollbar | nexacro.ScrollBarControl |
| vscrollindicator | nexacro.ScrollIndicatorControl |


---

### 속성 (Properties)

### -nexa-border

> Components > Component > ListView > Property > -nexa-border

**Description**

ListView 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.border[= strborder]
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
this.ListView00.border = "1px solid #999999";
this.ListView00.border = "1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999";
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

> Components > Component > ListView > Property > -nexa-edge

**Description**

ListView 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.edge[= stredge]
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
this.ListView00.edge = "URL('./images/border.png')" 5px 5px;
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

- ListView 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.


◆ WRE 제약

- <fixedwidth>,<fixedheight> 값이 이미지 사이즈의 1/2 을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-rtl-background-image

> Components > Component > ListView > Property > -nexa-rtl-background-image

**Description**

ListView 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.-nexa-rtl-background-image
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

> Components > Component > ListView > Property > -nexa-rtl-edge-image

**Description**

ListView 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.-nexa-rtl-edge-image
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

> Components > Component > ListView > Property > accessibilityaction

**Description**

ListView에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.accessibilityaction[= strAction]
```

**Setting Syntax**

```javascript
this.ListView00.accessibilityaction = "Accessibility Action Message"; 
this.ListView00.accessibilityaction = "Select by direction key";
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

> Components > Component > ListView > Property > accessibilitydesclevel

**Description**

ListView 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.accessibilitydesclevel[= enumLevel]
```

**Setting Syntax**

```javascript
enumLevel ::= 'all' | 'self' | 'child' | 'none'
```
```javascript
this.ListView00.accessibilitydesclevel = "all";
```
- **`"all"`** — ListView 와 자식 컴포넌트에 대한 접근성을 모두 출력합니다.
- **`"self"`** — ListView 의 접근성만 출력하고 자식 컴포넌트의 접근성은 출력하지 않습니다.
- **`"child"`** — ListView 의 접근성은 출력하지 않고, 자식 컴포넌트의 접근성은 출력합니다.
- **`"none"`** — ListView 와 자식 컴포넌트에 대한 접근성을 모두 출력하지 않습니다.

**Remark**

- accessibilitydesclevel 속성값을 설정하지 않으면 "all" 로 적용됩니다.

- Button 과 같이 자식 컴포넌트가 없는 컴포넌트는 "all" 또는 "child" 로 설정 시 "self" 로 적용됩니다.

- Div 와 같은 컨테이너 컴포넌트는 "child" 설정 시 실제 컨텐츠의 접근성만을 출력합니다.

- accessibilitydesclevel 속성은 선택상자의 이동에 영향을 주지 않으므로 방향키로 선택상자가 ListView 에 이동되게 하지 않으려면 accessibilityenable 속성을 설정하여야 합니다.


---

### accessibilitydescription

> Components > Component > ListView > Property > accessibilitydescription

**Description**

ListView에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.accessibilitydescription[= strDescription]
```

**Setting Syntax**

```javascript
this.ListView00.accessibilitydescription = "Option";
```
- **`strDescription`** — accessibilitydescreadtype 속성값에 "description"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.


---

### accessibilityenable

> Components > Component > ListView > Property > accessibilityenable

**Description**

ListView 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.accessibilityenable[= bEnable]
```

**Setting Syntax**

```javascript
bEnable ::= 'true' | 'false'
```
```javascript
this.ListView00.accessibilityenable = false;
```
- **`true`** — ListView 에 선택상자가 이동되면 접근성 관련 속성값을 출력합니다.

방향키 또는 제스처로 선택상자 이동 시 Static 과 같이 포커스를 갖지 않는 컴포넌트에도 선택상자가 이동됩니다.
- **`false`** — ListView 에 선택상자가 이동되어도 접근성 관련 속성값을 출력하지 않습니다.

데스크탑 환경에서 방향키로 선택상자가 ListView 에 이동되지 않습니다.
모바일 환경에서 제스처로 선택상자가 ListView 에 이동되지 않습니다.

**Remark**

- accessibilityenable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 선택상자 이동 시 컴포넌트의 ARIA-LABEL + Status + Role 순서로 정보가 조합되어 접근성으로 출력됩니다.
   각 정보의 조합순서는 스크린 리더의 종류에 따라 달라질 수 있습니다.
   > ARIA-LABEL : Environment 의 accessibilitydescreadtype 속성에 설정된 속성값이 반영됩니다.
   > Status : ListView 의 현재 상태가 반영됩니다.
   > Role : accessibilityrole 속성값이 반영됩니다. accessibilityrole 속성값을 설정하지 않으면 ListView 의 고유 Role 이 반영됩니다.

- accessibilityenable 속성값이 false 일 때 데스크탑 환경에서 방향키 외의 방법으로 선택상자를 ListView 로 이동시키면 스크린 리딩 프로그램에서 임의의 값을 출력할 수 있습니다.


◆ 컨테이너 컴포넌트 선택상자 이동 제약

아래와 같은 환경에서 컨테이너 컴포넌트로 선택상자가 이동하지 않고 컨테이너 컴포넌트 내에 배치된 컴포넌트로 이동합니다.
- Android, iOS/iPadOS 운영체제에서 실행 시 (Div, PopupDiv, TabpageControl, View)
- Windows 운영체제에서 센스리더 가상커서 사용 시 (Div, PopupDiv, View)


---

### accessibilitylabel

> Components > Component > ListView > Property > accessibilitylabel

**Description**

ListView에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.accessibilitylabel[= strLabel]
```

**Setting Syntax**

```javascript
this.ListView00.accessibilitylabel = "OK Button"; 
this.ListView00.accessibilitylabel = "[@static00]"; 
this.ListView00.accessibilitylabel = "[@static00][@static01]"; 
this.ListView00.accessibilitylabel = "[@static00][@static01] OK Button";
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

> Components > Component > ListView > Property > accessibilityrole

**Description**

ListView에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.accessibilityrole[= enumRole]
```

**Setting Syntax**

```javascript
enumRole ::= 'none' | 'alert' | 'application' | 'button' | 'calendar' | 'chart' | 'checkbox' | 'columnheader' | 'combobox' | 'datepicker' | 'edit' | 'fileupload' | 'form' | 'frame' | 'grid' | 'gridcell' | 'groupbox' | 'heading' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6' | 'image' | 'link' | 'listbox' | 'menubar' | 'progressbar' | 'radio' | 'rowheader' | 'scrollbar' | 'spin' | 'static' | 'statusbar' | 'tab' | 'tabpage' | 'textarea' | 'titlebar' | 'toolbar' | 'tooltip' | 'treegrid' | 'treeitem' | 'webbrowser'
```
```javascript
this.ListView00.accessibilityrole = "none"; 
this.ListView00.accessibilityrole = "button";
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

- accessibilityenable 속성값을 설정하지 않으면 ListView의 기본 Role 로 적용됩니다.

- 추가적인 속성값이 필요한 Role 설정 시 ListView에 해당 속성이 없으면 스크린 리더에 따라 정상적으로 정보를 읽지 못할 수 있습니다.


---

### autoenter

> Components > Component > ListView > Property > autoenter

**Description**

ListView 에서 편집이 가능한 Cell 이 선택되었을 때 편집모드용 컨트롤이 활성화 되는 방법을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.autoenter[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'select' | 'key'
```
```javascript
this.ListView00.autoenter = "key";
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

- 마우스로 Cell 을 클릭하거나 키보드의 방향키를 입력(ListView 가 포커스 되어 있을 때)하면 Cell 이 선택된 상태가 됩니다.   

- Cell 이 선택되어 있을 때 showEditor() 메소드를 사용하여 편집모드용 컨트롤을 활성화 할 수 있습니다.

◆ web runtime environment 제약

- "key" 값일 때 기존값을 삭제한 후 편집모드용 컨트롤을 활성화하는 기능은 숫자와 알파벳만 지원합니다.
   다국어 문자 등 다른 문자의 경우 입력값과 다른값이 입력될 수 있습니다.


---

### autoupdatetype

> Components > Component > ListView > Property > autoupdatetype

**Description**

Cell이 Combo, MultiCombo, Calendar 중 하나의 형식일 때 팝업창으로 선택된 값이 Dataset 오브젝트에 적용되는 시점을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.autoupdatetype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'comboselect' | 'dateselect' | 'itemselect'
```
```javascript
this.ListView00.autoupdatetype = "itemselect";
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

> Components > Component > ListView > Property > background

**Description**

ListView 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.background[= strbackground]
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
this.ListView00.background = "#ffffaa";
this.ListView00.background = ""URL('./images/smiley.gif')" no-repeat center center #ffffaa";
this.ListView00.background = ""URL('./images/smiley.gif')" no-repeat center center /auto #ffffaa";
this.ListView00.background = ""URL('./images/smiley.gif')" no-repeat center center /15px 15% #ffffaa";
this.ListView00.background = "linear-gradient( red , blue , yellow )";
this.ListView00.background = "linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0))";
this.ListView00.background = ""URL('./images/smiley.gif')" border-box border-box #ffffaa";
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

"left" 설정 시 ListView 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 ListView 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 ListView 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 ListView 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 ListView 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 ListView 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
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

0 보다 작거나 100 보다 큰 값을 설정 시 ListView 의 영역을 벗어난 가상의 위치로 적용됩니다.

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
예를 들어 <angle> 값이 "to left" 이면 ListView 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 ListView 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

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

0 보다 작거나 100 보다 큰 값을 설정 시 ListView 의 영역을 벗어난 가상의 위치로 적용됩니다.
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
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 ListView 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

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

### bandexpandtype

> Components > Component > ListView > Property > bandexpandtype

**Description**

ListView 에서 Detail 밴드가 표시되는 방법을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.bandexpandtype[= enumExpandType]
```

**Setting Syntax**

```javascript
enumExpandType ::= 'none' | 'expand' | 'accordion' | 'popup'
```
```javascript
this.ListView00.bandexpandtype = "popup";
```
- **`"none"`** — Detail 밴드가 정의되어 있으면 모든 Detail 밴드를 항상 표시합니다.

메소드 또는 Body 밴드의 확장바를 사용하여 Detail 밴드를 숨길 수 없습니다.
- **`"expand"`** — 아이템 단위로 Detail 밴드를 표시하거나 숨깁니다.

다른 아이템의 Detail 밴드 표시에 영향을 미치지 않습니다.
ListView 가 최초 로드될 때 Detail 밴드의 표시상태는 bandinitstatus 속성값으로 설정합니다.
- **`"accordion"`** — 아이템 단위로 Detail 밴드를 표시하거나 숨깁니다.

현재 아이템 이외에 다른 아이템에 표시된 Detail 밴드를 자동으로 숨깁니다.
- **`"popup"`** — 아이템 단위로 Detail 밴드를 팝업으로 표시합니다.

**Remark**

- bandexpandtype 속성값을 설정하지 않으면 "expand" 로 적용됩니다.

- Detail 밴드가 정의되어 있지 않으면 "none" 으로 동작합니다.

- Detail 밴드를 표시하거나 숨기려면 Body 밴드의 확장바 또는 showDetailBand(), hideDetailBand() 메소드를 사용하여야 합니다.
   ListView 의 아이템 선택으로 Detail 밴드가 표시되거나 숨겨지지 않습니다.


---

### bandindentsize

> Components > Component > ListView > Property > bandindentsize

**Description**

ListView 에서 Detail 밴드가 표시될 때 왼쪽 여백의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.bandindentsize[= nIndentSize]
```

**Setting Syntax**

```javascript
this.ListView00.bandindentsize = 20;
```
- **`nIndentSize`** — Detail 밴드의 왼쪽 여백 너비를 픽셀 단위의 숫자로 설정합니다.

**Remark**

- 표시되는 Detail 밴드에 모두 적용됩니다.


---

### bandinitstatus

> Components > Component > ListView > Property > bandinitstatus

**Description**

bandexpandtype 속성값이 "expand" 일 때 Detail 밴드의 최초 표시상태를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.bandinitstatus[= enumBandInit]
```

**Setting Syntax**

```javascript
enumBandInit ::= 'expand' | 'collapse'
```
```javascript
this.ListView00.bandinitstatus = "collapse";
```
- **`"expand"`** — ListView 가 최초 로드될 때 모든 아이템의 Detail 밴드를 표시합니다.
- **`"collapse"`** — ListView 가 최초 로드될 때 모든 아이템의 Detail 밴드를 표시하지 않습니다.

**Remark**

- bandinitstatus 속성값을 설정하지 않으면 "expand" 로 적용됩니다.

- bandexpandtype 속성값이 "expand" 인 경우만 적용되는 속성입니다.


---

### binddataset

> Components > Component > ListView > Property > binddataset

**Description**

ListView 의 전체 Cell 과 바인드 되는 DataSet 의 ID 를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.binddataset[= strDatasetID]
```

**Setting Syntax**

```javascript
this.ListView00.binddataset = "Dataset00";
```
- **`strDataset`** — 전체 Cell 과 바인드 되는 DataSet 의 ID 를 문자열로 설정합니다.

**Remark**

- ListView 에서 선택된 아이템을 변경하면 DataSet 의 rowposition 속성값이 변경됩니다.
   반대로 DataSet 의 rowposition 속성값을 변경하면 ListView 에 선택된 아이템이 변경됩니다.

- ListView 에서 Cell 의 내용을 변경하면, 바인딩 된 DataSet 의 해당 컬럼 데이터값도 변경됩니다.

- binddataset 속성에 설정된 DataSet 이 존재하지 않을 경우 ListView 에 데이터가 표시되지 않습니다.


---

### border-radius

> Components > Component > ListView > Property > border-radius

**Description**

ListView 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.borderRadius[= strborderradius]
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
this.ListView00.borderRadius = "10px";
this.ListView00.borderRadius = "5px 6px 10px / 5px 10px";
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

> Components > Component > ListView > Property > bottom

**Description**

ListView 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.bottom[= nBottom]
```

**Setting Syntax**

```javascript
nBottom ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.ListView00.bottom = 10; 
this.ListView00.bottom = "10px"; 
this.ListView00.bottom = "10%"; 
this.ListView00.bottom = "Button00:10px"; 
this.ListView00.bottom = "Button00:10%";
```
- **`<strCompID>`** — ListView 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 ListView 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 ListView 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — ListView 의 하단 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 bottom 속성값을 기준으로 ListView의 하단 위치 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 ListView의 하단 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 ListView의 하단 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 ListView의 하단 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 top 속성값을 기준으로 ListView의 하단 위치 결정
- "%": <strCompID>의 height 속성값을 기준으로 ListView의 하단 위치 결정
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

> Components > Component > ListView > Property > cellcalendarbuttonsize

**Description**

Cell 이 Calendar 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.cellcalendarbuttonsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.ListView00.cellcalendarbuttonsize = "30"; 

this.ListView00.cellcalendarbuttonsize = "30 20";
```
- **`<strWidth>`** — 드롭다운 버튼의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 드롭다운 버튼의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- cellcalendarbuttonsize 속성값을 설정하지 않으면 Cell 의 내부 컨트롤 높이가 적용됩니다.

- Cell 의 calendarbuttonsize 속성값을 설정하지 않으면 ListView 의 cellcalendarbuttonsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### cellcalendarpopupsize

> Components > Component > ListView > Property > cellcalendarpopupsize

**Description**

Cell 이 Calendar 형식일 때 팝업으로 표시되는 달력의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.cellcalendarpopupsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.ListView00.cellcalendarpopupsize = "500 400";
```
- **`<strWidth>`** — 팝업달력의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 팝업달력의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- cellcalendarpopupsize 속성값을 설정하지 않으면 undefined 로 적용됩니다.
   undefined 로 설정되면 팝업달력(DatePicker)의 너비와 높이는 각각 "220", "200" 으로 적용됩니다.

- Cell 의 calendarpopupsize 속성값을 설정하지 않으면 ListView 의 cellcalendarpopupsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### cellcalendarpopuptype

> Components > Component > ListView > Property > cellcalendarpopuptype

**Description**

Cell 이 Calendar 형식일 때 팝업달력(DatePicker)이 표시되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.cellcalendarpopuptype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'normal' | 'center' | 'system'
```
```javascript
this.ListView00.cellcalendarpopuptype = "system";
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

- popuptype 속성값을 설정하지 않으면 undefined 로 적용됩니다.
   undefined 일 경우 데스크탑 환경은 "normal" 로 동작되고, 모바일 환경은 "system" 으로 동작됩니다.

- Cell 의 calendarpopuptype 속성값을 설정하지 않으면 ListView 의 cellcalendarpopuptype 속성값이 적용됩니다.

- calendartype 속성값이 "normal" 일때만 적용되며 모바일환경 같은 특별한 경우에 제한적으로 사용해야 하는 속성입니다.

- 다중 모니터의 경우 ListView 가 표시되고 있는 모니터를 기준으로 팝업달력이 표시됩니다.


---

### cellcheckboxsize

> Components > Component > ListView > Property > cellcheckboxsize

**Description**

Cell 이 CheckBox 형식일 때 CheckBox 의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.cellcheckboxsize[= nSize]
```

**Setting Syntax**

```javascript
this.ListView00.cellcheckboxsize = 20;
```
- **`nSize`** — Cell 에 표시되는 CheckBox 의 크기를 pixel 단위의 숫자로 설정합니다.

설정값은 표시되는 CheckBox 의 가로/세로 크기에 동일하게 적용됩니다.

**Remark**

- Cell 의 edittype 속성값이 "checkbox" 일 때 Cell 에 표시되는 CheckBox 에 적용됩니다.
   Cell 의 displaytype 속성값이 "checkboxcontrol" 일 때 Cell 에 표시되는 CheckBox 에 적용됩니다.

- cellcheckboxsize 속성값을 설정하지 않으면 테마에 정의된 CheckBox 이미지 크기에 맞게 적용됩니다.

- Cell 의 checkboxsize 속성을 설정하지 않으면 ListView 의 cellcheckboxsize 속성값이 적용됩니다.

- 테마에서 CheckBox 이미지 크기는 ListViewCellControl 하위의 cellcheckbox 셀렉터에 정의됩니다.

- 테마에 정의된 CheckBox 이미지 크기보다 cellcheckboxsize 속성값을 작게 설정할 경우 이미지가 잘려서 표시됩니다.


---

### cellclickbound

> Components > Component > ListView > Property > cellclickbound

**Description**

CheckBox 형식의 Cell 에서 마우스 클릭에 의해 값이 변경되는 영역을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.cellclickbound[= enumBound]
```

**Setting Syntax**

```javascript
enumBound ::= 'control' | 'cell'
```
- **`"control"`** — CheckBox 이미지 영역을 클릭 시 Cell 의 데이터가 변경됩니다.
- **`"cell"`** — CheckBox 이미지를 포함하여 Cell 영역 아무곳이나 클릭 시 데이터가 변경됩니다.

**Remark**

- cellclickbound 속성값을 설정하지 않으면 "control" 로 적용됩니다.

- edittype 속성값이 "checkbox" 이고, displaytype 속성값이 "checkboxcontrol" 일 경우만 적용되는 속성입니다.


---

### cellcombobuttonsize

> Components > Component > ListView > Property > cellcombobuttonsize

**Description**

Cell 이 Combo 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.cellcombobuttonsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.ListView00.cellcombobuttonsize = "30"; 

this.ListView00.cellcombobuttonsize = "30 20";
```
- **`<strWidth>`** — 드롭다운 버튼의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 드롭다운 버튼의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- cellcombobuttonsize 속성값을 설정하지 않으면 Cell 의 내부 컨트롤 높이가 적용됩니다.

- Cell 의 combobuttonsize 속성값을 설정하지 않으면 ListView 의 cellcombobuttonsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### cellcombopopupsize

> Components > Component > ListView > Property > cellcombopopupsize

**Description**

Cell 이 Combo 형식일 때 팝업으로 표시되는 아이템 리스트의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.cellcombopopupsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.ListView00.cellcombopopupsize = "500 400";
```
- **`<strWidth>`** — 아이템 리스트의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 아이템 리스트의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- cellcombopopupsize 속성값을 설정하지 않으면 undefined 로 적용됩니다.
   undefined 로 설정되면 아이템에 맞게 리스트의 크기가 자동으로 설정됩니다.

- Cell 의 combopopupsize 속성값을 설정하지 않으면 ListView 의 cellcombopopupsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### cellcombopopuptype

> Components > Component > ListView > Property > cellcombopopuptype

**Description**

Cell 이 Combo 형식일 때 아이템 리스트가 표시되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.cellcombopopuptype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'normal' | 'center'
```
```javascript
this.ListView00.cellcombopopuptype = "center";
```
- **`"none"`** — 아이템 리스트를 화면에 표시하지 않습니다.
- **`"normal"`** — 아이템 리스트가 표시되는 일반적인 규칙을 따릅니다.
- **`"center"`** — 어플리케이션이 실행중인 화면의 중앙에 아이템 리스트가 표시됩니다

**Remark**

- cellcombopopuptype 속성값을 설정하지 않으면 "normal" 로 적용됩니다.

- Cell 의 combopopuptype 속성값을 설정하지 않으면 ListView 의 cellcombopopuptype 속성값이 적용됩니다.

- 모바일환경 같은 특별한 경우에 제한적으로 사용해야 하는 속성입니다.

- 다중 모니터의 경우 ListView 가 표시되고 있는 모니터를 기준으로 아이템 리스트가 표시됩니다.


---

### cellmulticombobuttonsize

> Components > Component > ListView > Property > cellmulticombobuttonsize

**Description**

Cell이 MultiCombo 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.cellmulticombobuttonsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.ListView00.cellmulticombobuttonsize = "30";
this.ListView00.cellmulticombobuttonsize = "30 20";
```
- **`<strWidth>`** — 드롭다운 버튼의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 드롭다운 버튼의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- cellmulticombobuttonsize 속성값을 설정하지 않으면 Cell의 내부 컨트롤 높이가 적용됩니다.
   controlautosizingtype 속성값에 따라 드롭다운 버튼의 크기가 달라집니다.

- Cell의 multicombobuttonsize 속성값을 설정하지 않으면 ListView의 cellmulticombobuttonsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### cellmulticombopopupsize

> Components > Component > ListView > Property > cellmulticombopopupsize

**Description**

Cell 이 MultiCombo 형식일 때 팝업으로 표시되는 아이템 리스트의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.cellmulticombopopupsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.ListView00.cellmulticombopopupsize = "500 400";
```
- **`<strWidth>`** — 아이템 리스트의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 아이템 리스트의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- cellmulticombopopupsize 속성값을 설정하지 않으면 undefined로 적용됩니다.
   undefined로 설정되면 아이템에 맞게 리스트의 크기가 자동으로 설정됩니다.

- Cell의 multicombopopupsize 속성값을 설정하지 않으면 ListView의 cellmulticombopopupsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### cellmulticombopopuptype

> Components > Component > ListView > Property > cellmulticombopopuptype

**Description**

Cell이 MultiCombo 형식일 때 아이템 리스트가 표시되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.cellmulticombopopuptype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'normal' | 'center'
```
```javascript
this.ListView00.cellmulticombopopuptype = "center";
```
- **`"none"`** — 아이템 리스트를 화면에 표시하지 않습니다.
- **`"normal"`** — 아이템 리스트가 표시되는 일반적인 규칙을 따릅니다.
- **`"center"`** — 애플리케이션이 실행 중인 화면의 중앙에 아이템 리스트가 표시됩니다

**Remark**

- cellmulticombopopuptype 속성값을 설정하지 않으면 "normal"로 적용됩니다.

- Cell의 multicombopopuptype 속성값을 설정하지 않으면 ListView의 cellmulticombopopuptype 속성값이 적용됩니다.

- 모바일환경 같은 특별한 경우에 제한적으로 사용해야 하는 속성입니다.

- 다중 모니터의 경우 ListView가 표시되고 있는 모니터를 기준으로 아이템 리스트가 표시됩니다.


---

### color

> Components > Component > ListView > Property > color

**Description**

ListView 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.color[= strcolor]
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
this.ListView00.color = "#999999";
this.ListView00.color = "rgb(255,0,0)";
this.ListView00.color = "red";
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

> Components > Component > ListView > Property > createrowstype

**Description**

ListView 컴포넌트 생성 시점에 Band 생성 방식을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.createrowstype [=enumType]
```

**Setting Syntax**

```javascript
enumType ::= "auto" | "all"
```
```javascript
this.Grid00.createrowstype = "all";
```
- **`"auto"`** — 화면에 표시되는 ListView 컴포넌트 영역 내에 표시되는 Band의 개수를 자동으로 설정하고 필요한 Band만 생성합니다.
- **`"all"`** — ListView 컴포넌트 생성 시점에 전체 Band를 생성합니다.

**Remark**

- createrowstype 속성값을 설정하지 않으면 "auto"로 적용됩니다.

- createrowstype 속성값을 "all"로 설정한 경우 성능에 영향을 미칠 수 있습니다.
  접근성 지원 환경에서 스크린 리더가 Accessibility Tree 구성 시 전체 노드가 미리 생성되어야 하는 경우에만 성능에 미치는 영향을 인지하고 사용하는 것을 권장합니다.

- 스크립트에서 속성값 변경 시 Form 오브젝트의 resetScroll 메서드를 실행해 ListView 컴포넌트를 갱신해주어야 합니다.


---

### cssclass

> Components > Component > ListView > Property > cssclass

**Description**

ListView 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다.

**Syntax**

```javascript
ListView.cssclass[= strcssclass]
```

**Setting Syntax**

```javascript
strcssclass ::= <ClassName> [ , &ltClassName> ]*
```
```javascript
this.ListView00.cssclass = "TestClass"; 
this.ListView00.cssclass = "TestClass,TestClass2";
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

> Components > Component > ListView > Property > cursor

**Description**

ListView 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.cursor[= strCursor]
```

**Setting Syntax**

```javascript
strCursor ::= 'none' | 'auto' | 'default' | 'copy' | 'crosshair' | 'help' | 'move' | 'not-allowed' | 'pointer' | 'progress' | 'text' | 'wait' | 'ew-resize' | 'e-resize' | 'w-resize' | 'ns-resize' | 'n-resize' | 's-resize' | 'nesw-resize' | 'ne-resize' | 'sw-resize' | 'nwse-resize' | 'nw-resize' | 'se-resize'
```
```javascript
* XCSS
cursor : default;

* Script ( normal property )
this.ListView00.cursor = "default";
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

> Components > Component > ListView > Property > enable

**Description**

ListView 의 사용가능 여부를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.enable[= benable]
```

**Setting Syntax**

```javascript
benable ::= 'true' | 'false'
```
```javascript
this.ListView00.enable = true; 
this.ListView00.enable = false;
```
- **`true`** — ListView 을(를) 사용할 수 있게 설정합니다.
- **`false`** — ListView 을(를) 사용할 수 없게 설정합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "disabled" Status 가 적용됩니다.

**Remark**

- enable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enable 속성값이 false 이면 컴포넌트가 화면에 표시되지만 포커스나 입력을 받을 수 없습니다.

- Div 와 같은 컨테이너 컴포넌트의 enable 속성값을 false 로 설정하면 자식 컴포넌트도 모두 Disable 됩니다.


---

### enableevent

> Components > Component > ListView > Property > enableevent

**Description**

ListView 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.enableevent[= bEvent]
```

**Setting Syntax**

```javascript
bEvent ::= 'true' | 'false'
```
```javascript
this.ListView00.enableevent = true;  

this.ListView00.enableevent = false;
```
- **`true`** — ListView 에서 이벤트가 발생하도록 설정합니다.
- **`false`** — ListView 에서 이벤트가 발생하지 않도록 설정합니다.

**Remark**

- enableevent 속성을 false 로 설정하면 이벤트 발생으로 인한 처리속도 지연과 화면 깜빡임을 방지할 수 있습니다.


---

### enableredraw

> Components > Component > ListView > Property > enableredraw

**Description**

ListView 에 변경이 발생하면 화면을 자동으로 다시 그릴 지 설정하는 속성입니다.

**Syntax**

```javascript
ListView.enableredraw[= bRedraw]
```

**Setting Syntax**

```javascript
bRedraw ::= 'true' | 'false'
```
```javascript
this.ListView00.enableredraw = true;
this.ListView00.enableredraw = false;
```
- **`"true"`** — ListView 에 변경이 발생하면 화면을 자동으로 다시 그립니다.
- **`"false"`** — ListView 에 변경이 발생하여도 화면을 자동으로 다시 그리지 않습니다.

**Remark**

- enableredraw 속성을 false 로 설정하면 컴포넌트가 변경되어도 화면에 반영되지 않습니다.

- enableredraw 속성값이 false 에서 true 로 변경되면 화면 다시 그리기가 즉시 수행됩니다.

- Div 와 같이 자식 컴포넌트를 갖는 컴포넌트는 화면 다시 그리기가 자식 컴포넌트에는 적용되지 않고 자기 자신에만 영향을 줍니다.


---

### flexgrow

> Components > Component > ListView > Property > flexgrow

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축) 여백을 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다.

**Syntax**

```javascript
ListView.flexgrow[= fVal]
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

> Components > Component > ListView > Property > flexshrink

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 영역이 컨테이너 영역을 초과하지 않도록 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다.

**Syntax**

```javascript
ListView.flexshrink[= fVal]
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

> Components > Component > ListView > Property > font

**Description**

ListView 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.font[= strfont]
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
this.ListView00.font = "bold 12pt/30px arial, sans-serif";
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

> Components > Component > ListView > Property > formatid

**Description**

formats 속성에 정의된 포맷 중 ListView 에 표시할 포맷의 ID 를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.formatid[= strFormatID]
```

**Setting Syntax**

```javascript
this.ListView00.formatid = "default";
```
- **`strFormatID`** — formats 속성에 정의된 포맷 중 ListView 에 표시할 포맷의 ID 를 문자열로 설정합니다.

**Remark**

- 하나의 ListView 에서 데이터를 여러 형식으로 표현하고자 할 때 사용합니다.
   넥사크로 스튜디오의 ListView Contents Editor 를 사용하여 여러개의 포맷을 추가할 수 있습니다.

- formatid 속성을 설정하지 않으면 포맷 ID가 "default" 인 포맷이 표시됩니다.
   포맷 ID가 "default" 인 포맷이 없다면 첫번째로 정의된 포맷이 표시됩니다.

- formatid 속성값을 변경하면 디자인 시 정의된 포맷이 적용되어 표시됩니다.
   실행중 스크립트로 변경한 포맷 정보는 유지되지 않습니다.


---

### formats

> Components > Component > ListView > Property > formats

**Description**

ListView 에 정의된 모든 포맷의 정보를 갖는 속성입니다.

**Syntax**

```javascript
ListView.formats[= strFormat]
```

**Setting Syntax**

```javascript
var strFormat = ' <Formats>'
                   + '   <Format id="default">'
                   + '     <Band id="body" left="0px" top="0px" width="100%" height="24px" expandbartype="true">'
                   + '   	<Cell id="cell00" left="0px" top="0px" bottom="0px" width="33%" text="bind:Column0"/>'
                   + '   	<Cell id="cell01" left="33%" top="0px" bottom="0px" width="33%" text="bind:Column1"/>'
                   + '     </Band>'
                   + '     <Band id="detail" left="0px" top="0px" width="100%" height="60px">'
                   + '   	<Cell id="cell01" left="33%" top="0px" bottom="0px" width="33%" text="bind:Column1"/>'
                   + '   	<Cell id="cell02" left="66%" right="0px" top="0px" bottom="0px" text="bind:Column2"/>'
                   + '     </Band>'
                   + '   </Format>'
                   + ' </Formats>'

this.ListView00.formats = strFormat;
```
- **`strFormat`** — XML 형식에 맞게 정의된 포맷 정보를 문자열로 설정합니다.

**Remark**

- formats 속성을 동적으로 변경하려면 전체 포맷을 형식에 맞게 설정하여야 합니다.
  일부 포맷만 선택적으로 변경할 수 없습니다.


---

### height

> Components > Component > ListView > Property > height

**Description**

ListView 을(를) 표시하기 위한 높이를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.height[= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.ListView00.height = 10; 
this.ListView00.height = "10px"; 
this.ListView00.height = 10%"; 
this.ListView00.height = Button00:10%";
```
- **`<strCompID>`** — ListView 의 높이를 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 ListView 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 ListView 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 높이가 적용됩니다.
- **`<nVal>`** — ListView 의 높이를 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.


* <strCompID> 값을 생략했을 때 :
- "px": ListView의 높이 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 ListView의 높이 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 ListView의 높이 결정
- "rem": MainFrame font-size 속성값을 기준으로 ListView의 높이 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID> 값은 무시되고 설정값이 ListView의 높이 결정
- "%": <strCompID>의 height 속성값을 기준으로 ListView의 높이 결정
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

### id

> Components > Component > ListView > Property > id

**Description**

ListView의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.id
```

**Setting Syntax**

- **`id`** — ListView를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### initvalueid

> Components > Component > ListView > Property > initvalueid

**Description**

ListView 에 적용될 InitValue 의 ID 를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.initvalueid[= strValueID]
```

**Setting Syntax**

- **`strValueID`** — InitValueDefinition 영역에 정의된 InitValue 파일에서 ListView 에 적용할 항목의 ID 를 문자열로 설정합니다.

**Remark**

- ListView 가 화면에 표시된 후에는 속성값을 설정하거나 변경 할 수 없습니다.
   ListView 를 동적으로 생성 시 show() 메소드 실행 전에 속성값을 설정하여야 합니다.

- Screen 별로 Environment 의 initvaluefileid 속성을 각각 설정하면 Screen 에 따라 다른 초기값을 설정할 수 있습니다.

- InitValueDefinition 영역에 한 개 이상의 InitValue 파일을 정의할 수 있고,
   InitValue 파일에는 컴포넌트별로 여러개의 초기값 정의를 할 수 있습니다.


---

### layoutorder

> Components > Component > ListView > Property > layoutorder

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 순서를 설정합니다.

**Syntax**

```javascript
ListView.layoutorder[= nVal]
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

> Components > Component > ListView > Property > left

**Description**

ListView 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.left[= nLeft]
```

**Setting Syntax**

```javascript
nLeft ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.ListView00.left = 10; 
this.ListView00.left = "10px"; 
this.ListView00.left = "10%"; 
this.ListView00.left = "Button00:10px"; 
this.ListView00.left = "Button00:10%";
```
- **`<strCompID>`** — ListView 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 ListView 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 ListView 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — ListView 의 좌측 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 left 속성값을 기준으로 ListView의 좌측 위치 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 ListView의 좌측 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 ListView의 좌측 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 ListView의 좌측 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 right 속성값을 기준으로 ListView의 좌측 위치 결정
- "%": <strCompID>의 width 속성값을 기준으로 ListView의 좌측 위치 결정
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

> Components > Component > ListView > Property > letter-spacing

**Description**

ListView 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.letterSpacing[= strspace]
```

**Setting Syntax**

```javascript
strspace ::= 'normal' | <nVal> ['px']
```
```javascript
* XCSS
letter-spacing : 2px ;

* Script ( normal property )
this.ListView00.letterSpacing = "2px";
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

> Components > Component > ListView > Property > locale

**Description**

ListView 에 적용될 국가 및 언어(locale)를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.locale[= strlocale]
```

**Setting Syntax**

```javascript
this.ListView00.locale = "ko_KR";
```
- **`strlocale`** — "언어[_국가]" 형식의 문자열로 설정합니다.

**Remark**

- ISO 639-1에서 정의하고 있는 2-알파벳 언어 코드와 ISO 3166-1에서 정의하고 있는 2-알파벳 국가 코드를 조합하여 사용합니다.

- 국가 및 언어 코드는 "Appendix > Locale Code List" 항목을 참고하세요.


---

### maxheight

> Components > Component > ListView > Property > maxheight

**Description**

ListView 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.maxheight[= nMaxHeight]
```

**Setting Syntax**

```javascript
nMaxHeight ::= <nVal> ['px']
```
```javascript
this.ListView00.maxheight = 20; 
this.ListView00.maxheight = "20px";
```
- **`<nVal>`** — ListView 이(가) 화면에 표시되는 높이의 최대값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- height 속성값이 maxheight 보다 크면 화면에 표시되는 ListView 의 높이는 maxheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- maxheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxheight 속성값을 minheight 속성값보다 작게 설정하면 minheight 속성값이 maxheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 ListView 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.


---

### maxwidth

> Components > Component > ListView > Property > maxwidth

**Description**

ListView 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.maxwidth[= nMaxWidth]
```

**Setting Syntax**

```javascript
nMaxWidth ::= <nVal> ['px']
```
```javascript
this.ListView00.maxwidth = 20; 
this.ListView00.maxwidth = "20px";
```
- **`<nVal>`** — ListView 이(가) 화면에 표시되는 너비의 최대값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- width 속성값이 maxwidth 보다 크면 화면에 표시되는 ListView 의 너비는 maxwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- maxwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxwidth 속성값을 minwidth 속성값보다 작게 설정하면 minwidth 속성값이 maxwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 ListView 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.


---

### minheight

> Components > Component > ListView > Property > minheight

**Description**

ListView 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.minheight[= nMinHeight]
```

**Setting Syntax**

```javascript
nMinHeight ::= <nVal> ['px']
```
```javascript
this.ListView00.minheight = 20; 
this.ListView00.minheight = "20px";
```
- **`<nVal>`** — ListView 이(가) 화면에 표시되는 높이의 최소값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- height 속성값이 minheight 보다 작다면 화면에 표시되는 ListView 의 높이는 minheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- minheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minheight 속성값을 maxheight 속성값보다 크게 설정하면 maxheight 속성값이 minheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 ListView 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.


---

### minwidth

> Components > Component > ListView > Property > minwidth

**Description**

ListView 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.minwidth[= nMinWidth]
```

**Setting Syntax**

```javascript
nMinWidth ::= <nVal> ['px']
```
```javascript
this.ListView00.minwidth = 20; 
this.ListView00.minwidth = "20px";
```
- **`<nVal>`** — ListView 이(가) 화면에 표시되는 너비의 최소값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- width 속성값이 minwidth 보다 작으면 화면에 표시되는 ListView 의 너비는 minwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- minwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minwidth 속성값을 maxwidth 속성값보다 크게 설정하면 maxwidth 속성값이 minwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 ListView 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.


---

### name

> Components > Component > ListView > Property > name

**Description**

ListView 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### nodataimage

> Components > Component > ListView > Property > nodataimage

**Description**

ListView 에 표시할 데이터가 없을 때 출력할 이미지의 위치 경로를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.nodataimage[= strUrl]
```

**Setting Syntax**

```javascript
strImage ::= 'URL(' <theme-Image> | <web-Image> | <absolute-image> | <relative-image> ')'
```
```javascript
this.ListView00.nodataimage = "URL('theme://images/nodataimg.png')";                         // 테마 이미지 
this.ListView00.nodataimage = "URL('http://www.tobesoft.com/images/gnb/btn_h1.gif')";  // 웹 이미지 
this.ListView00.nodataimage = "URL('file://C:\\nodataimg.gif')";                                     // 절대경로 이미지 
this.ListView00.nodataimage = "URL('Base::nodataimg.jpg')";                                             // TypeDefinition Prefix 이미지 
this.ListView00.nodataimage = "URL('./nodataimg.jpg')";                                                // 상대경로 이미지
```
- **`<theme-Image>`** — 테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<absolute-image>`** — 로컬에 정의된 이미지를 "file://절대경로" 형식으로 설정합니다.

TypeDefinition 영역의 Services 에 정의된 Prefix 를 사용한 형식으로 설정합니다.
- **`<relative-image>`** — 폼의 위치를 기준으로 한 상대경로를 사용하여 설정합니다.

**Remark**

- 이미지 크기가 ListView 크기와 다르더라도 이미지 크기를 자동으로 조정하지 않습니다.

- ListView 에 nodatatext 속성값이 설정되어 있다면 텍스트가 함께 표시됩니다.


---

### nodatatext

> Components > Component > ListView > Property > nodatatext

**Description**

ListView 에 표시할 데이터가 없을 때 출력할 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.nodatatext[= strText]
```

**Setting Syntax**

```javascript
this.ListView00.nodatatext = "strText";
```
- **`strText`** — ListView 에 표시할 데이터가 없을 때 출력할 텍스트를 설정합니다.

**Remark**

- ListView 에 nodataimage 속성값이 설정되어 있다면 이미지가 함께 표시됩니다.


---

### opacity

> Components > Component > ListView > Property > opacity

**Description**

ListView 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.opacity[= stropacity]
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8;
opacity : 80%;

* Script ( normal property )
this.ListView00.opacity = "0.8";
this.ListView00.opacity = 0.8;
this.ListView00.opacity = "80%";
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

### parent

> Components > Component > ListView > Property > parent

**Description**

ListView 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListView.parent
```

**Setting Syntax**

```javascript
var objParent = this.ListView00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- ListView 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### positionstep

> Components > Component > ListView > Property > positionstep

**Description**

부모 오브젝트가 화면분할기능을 사용할 때 ListView 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.positionstep[= nStep]
```

**Setting Syntax**

```javascript
this.ListView00.positionstep = 0; 
this.ListView00.positionstep = -1;
```
- **`nStep`** — ListView 이(가) 표시될 분할화면의 인덱스를 설정합니다.
"-1" 로 설정하면 모든 분할화면에 ListView 이(가) 표시됩니다.

분할화면의 인덱스는 "0" 부터 시작합니다.

**Remark**

- positionstep 에 설정된 인덱스값과 일치하는 분할화면에만 컴포넌트가 표시됩니다.

- 분할화면에 표시되지 않는 컴포넌트의 visible 속성값은 "false"로 변경되지 않습니다.


---

### readonly

> Components > Component > ListView > Property > readonly

**Description**

ListView 에서 편집을 허용할 지 설정하는 속성입니다.

**Syntax**

```javascript
ListView.readonly[= bReadOnly]
```

**Setting Syntax**

```javascript
bReadOnly ::= 'true' | 'false'
```
- **`true`** — ListView 의 편집을 불가능하게 설정합니다.

편집이 불가능하여도 아이템 또는 Cell 의 선택 동작은 가능합니다.
Cell 의 edittype 속성값이 설정되어 있어도 편집기능은 동작하지 않습니다.
- **`false`** — ListView 의 편집을 가능하게 설정합니다.

**Remark**

- readonly 속성값을 설정하지 않으면 false 로 적용됩니다.


---

### right

> Components > Component > ListView > Property > right

**Description**

ListView 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.right[= nRight]
```

**Setting Syntax**

```javascript
nRight ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.ListView00.right = 10; 
this.ListView00.right = "10px"; 
this.ListView00.right = "10%"; 
this.ListView00.right = "Button00:10px"; 
this.ListView00.right = "Button00:10%";
```
- **`<strCompID>`** — ListView 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 ListView 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 ListView 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — ListView 의 우측 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 right 속성값을 기준으로 ListView의 우측 위치 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 ListView의 우측 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 ListView의 우측 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 ListView의 우측 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 left 속성값을 기준으로 ListView의 우측 위치 결정
- "%": <strCompID>의 width 속성값을 기준으로 ListView의 우측 위치 결정
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

### rtl

> Components > Component > ListView > Property > rtl

**Description**

ListView 에서 내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.rtl
```

**Setting Syntax**

```javascript
bRtl ::= undefined | 'true' | 'false'
```
```javascript
var vRtl = this.ListView00.rtl;
```
- **`undefined`** — undefined 설정 시 상위 컴포넌트의 rtl 속성값이 적용됩니다.

사용자가 rtl 속성값을 설정하지 않거나 삭제했을 경우 undefined 가 설정됩니다.
- **`true`** — ListView 의 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 오른쪽으로 설정합니다.
ListView 의 내부 좌표계의 기준을 오른쪽으로 설정합니다.
ListView 의 텍스트 표시 기준을 오른쪽으로 설정합니다.
수직스크롤바가 있을 경우 왼쪽에 표시됩니다.
- **`false`** — ListView 의 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 왼쪽으로 설정합니다.
ListView 의 내부 좌표계의 기준을 왼쪽으로 설정합니다.
ListView 의 텍스트 표시 기준을 왼쪽으로 설정합니다.
수직스크롤바가 있을 경우 오른쪽에 표시됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 아랍권 같이 화면의 표시기준이 오른쪽인 환경에서 컨텐츠의 표시 기준을 변경하기 위해 설정하는 속성입니다.

- ListView 부터 Environment 까지 상위의 모든 rtl 속성값이 undefined 이면
   Environment 의 locale 속성에 설정된 국가 및 언어 설정값을 기준으로 rtl 속성이 적용됩니다.
   Environment 의 locale 속성값을 설정하지 않았을 경우 시스템의 국가 및 언어 설정값이 적용됩니다.


---

### scrollbarbarminsize

> Components > Component > ListView > Property > scrollbarbarminsize

**Description**

ListView 에 표시되는 스크롤바의 트랙바(TrackBar) 최소크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.scrollbarbarminsize[= nSize]
```

**Setting Syntax**

```javascript
this.ListView00.scrollbarbarminsize = 20;
```
- **`nSize`** — 스크롤바의 트랙바 최소크기를 pixel 단위의 숫자로 설정합니다.

음수값은 설정할 수 없습니다.

**Remark**

- scrollbarbarminsize 속성값을 설정하지 않으면 undefined 가 설정되고 트랙바 크기에 맞는 적당한 값으로 동작합니다.

- scrollbartrackbarsize 속성값이 설정되어 있으면 scrollbarbarminsize 속성값은 무시됩니다.

- ListView 의 크기 변경에 의해 트랙바의 크기가 자동변경될 때 scrollbarbarminsize 속성값 미만으로 작아지지 않습니다.

- 트랙바가 표시되는 영역보다 scrollbarbarminsize 속성값을 크게 설정해도 트랙바는 표시영역까지만 표현됩니다.


---

### scrollbarbaroutsize

> Components > Component > ListView > Property > scrollbarbaroutsize

**Description**

ListView 의 스크롤바에서 트랙바(TrackBar)가 사라지는 기준 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.scrollbarbaroutsize[= nSize]
```

**Setting Syntax**

```javascript
this.ListView00.scrollbarbaroutsize( 50 );
```
- **`nSize`** — 스크롤바의 트랙바가 사라지는 기준 크기를 pixel 단위의 숫자로 설정합니다.

음수값은 설정할 수 없습니다.

**Remark**

- scrollbarbaroutsize 속성값을 설정하지 않으면 undefined 가 설정되고 트랙바 크기에 맞는 적당한 값으로 동작합니다.

- ListView 의 크기가 변경되어 스크롤바가 줄어들 때 트랙바를 표시할 공간이 scrollbarbaroutsize 속성값보다 작아지면 트랙바를 표시하지 않습니다.


---

### scrollbardecbuttonsize

> Components > Component > ListView > Property > scrollbardecbuttonsize

**Description**

ListView 에 표시되는 스크롤바의 감소 버튼(DecButton) 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.scrollbardecbuttonsize[= nSize]
```

**Setting Syntax**

```javascript
this.ListView00.scrollbardecbuttonsize = 30;
```
- **`nSize`** — 스크롤바의 감소 버튼(DecButton) 크기를 pixel 단위의 숫자로 설정합니다.

음수값이나 ListView 의 너비/높이보다 큰 값을 설정할 수 없습니다.

**Remark**

- scrollbardecbuttonsize 속성값을 설정하지 않으면 scrollbarsize 에 적용된 값이 적용됩니다.

- scrollbardecbuttonsize 속성값은 수평 스크롤바에 적용됩니다.

- 수직스크롤바의 감소 버튼(DecButton) 높이는 scrollbardecbuttonsize 속성으로 설정하고 너비는 scrollbarsize 속성으로 설정합니다.


---

### scrollbarincbuttonsize

> Components > Component > ListView > Property > scrollbarincbuttonsize

**Description**

ListView 에 표시되는 스크롤바의 증가 버튼(IncButton) 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.scrollbarincbuttonsize[= nSize]
```

**Setting Syntax**

```javascript
this.ListView00.scrollbarincbuttonsize = 30;
```
- **`nSize`** — 스크롤바의 증가 버튼(IncButton) 크기를 pixel 단위의 숫자로 설정합니다.

음수값이나 ListView 의 높이보다 큰 값을 설정할 수 없습니다.

**Remark**

- scrollbarincbuttonsize 속성값을 설정하지 않으면 scrollbarsize 에 적용된 값이 적용됩니다.

- scrollbarincbuttonsize 속성값은 수직 스크롤바에 적용됩니다.

- 수직스크롤바의 증가 버튼(IncButton) 높이는 scrollbarincbuttonsize 속성으로 설정하고 너비는 scrollbarsize 속성으로 설정합니다.


---

### scrollbarsize

> Components > Component > ListView > Property > scrollbarsize

**Description**

ListView 에 표시되는 스크롤바의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.scrollbarsize[= nSize]
```

**Setting Syntax**

```javascript
this.ListView00.scrollbarsize = 30;
```
- **`nSize`** — 스크롤바의 크기를 pixel 단위의 숫자로 설정합니다.

**Remark**

- scrollbarsize 속성값은 수직스크롤바의 너비에 적용됩니다.

- scrollbarsize 속성값을 변경하면 스크롤바 내부버튼의 높이와 너비가 같이 변경됩니다.


---

### scrollbartrackbarsize

> Components > Component > ListView > Property > scrollbartrackbarsize

**Description**

ListView 에 표시되는 스크롤바의 트랙바(TrackBar) 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.scrollbartrackbarsize[= nSize]
```

**Setting Syntax**

```javascript
this.ListView00.scrollbartrackbarsize = 20;
```
- **`nSize`** — 스크롤바의 트랙바 크기를 pixel 단위의 숫자로 설정합니다.

-1 을 설정하면 ListView 크기와 내부 컨텐츠에 따라 트랙바 크기가 자동으로 조절됩니다.
-2 이하의 음수값은 설정할 수 없습니다.

**Remark**

- scrollbartrackbarsize 속성값을 설정하지 않으면 undefined 가 설정되고 -1 로 동작합니다.

- scrollbartrackbarsize 속성을 설정하면 내부 컨텐츠와 관계없이 트랙바 크기가 고정되어 표시됩니다.


---

### scrollbartype

> Components > Component > ListView > Property > scrollbartype

**Description**

ListView 에 스크롤바가 표시되는 형식을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.scrollbartype[= strBartype]
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
this.ListView00.scrollbartype = "none"; 
this.ListView00.scrollbartype = "default autoindicator"; 
this.ListView00.scrollbartype = "auto fixed"; 
this.ListView00.scrollbartype = "indicator none";
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
   ex) this.ListView00.scrollbartype = "fixed autoindicator";

**See Also**

ListView.scrolltype


---

### scrollindicatorsize

> Components > Component > ListView > Property > scrollindicatorsize

**Description**

ListView 에 표시되는 스크롤 인디케이터바의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.scrollindicatorsize[= nSize]
```

**Setting Syntax**

```javascript
this.ListView00.scrollindicatorsize = 30;
```
- **`nSize`** — 스크롤 인디케이터바의 크기를 pixel 단위의 숫자로 설정합니다.

**Remark**

- scrollindicatorsize 속성값은 수직스크롤바의 너비와 수평스크롤바의 높이에 동일하게 적용됩니다.

- ListView 에 스크롤 인디케이터바가 아닌 스크롤바가 표시될 경우 scrollbarsize 속성으로 크기를 설정하여야 합니다.


---

### scrolltype

> Components > Component > ListView > Property > scrolltype

**Description**

ListView 에서 사용되는 스크롤의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.scrolltype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'both' | 'vertical' | 'horizontal'
```
- **`"none"`** — ListView 에서 수평/수직 스크롤을 사용하지 않습니다.
- **`"both"`** — ListView 에서 수평/수직 스크롤을 모두 사용합니다.
- **`"vertical"`** — ListView 에서 수직 스크롤만 사용합니다.

수평 스크롤은 사용하지 않습니다.
- **`"horizontal"`** — ListView 에서 수평 스크롤만 사용합니다.

수직 스크롤은 사용하지 않습니다.

**Remark**

- scrolltype 속성값을 설정하지 않으면 "both" 로 적용됩니다.

- ListView 에서 사용되는 스크롤에 대한 자세한 설정은 scrollbartype 속성을 사용하여야 합니다.

**See Also**

ListView.scrollbartype


---

### selectchangetype

> Components > Component > ListView > Property > selectchangetype

**Description**

ListView 에 마우스 클릭 시 아이템 선택이 결정되는 시점을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.selectchangetype[= enumChangetype]
```

**Setting Syntax**

```javascript
enumChangetype ::= 'down' | 'up'
```
```javascript
this.ListView00.selectchangetype = "up";
```
- **`"down"`** — ListView 에 마우스 왼쪽버튼으로 Down 했을 때 선택이 결정됩니다.

선택과 관련된 이벤트 발생 순서는 아래와 같습니다.
(1) ListView.onlbuttondown
(2) Dataset.canrowposchange
(3) Dataset.onrowposchanged
(4) ListView.onselectchanged
(5) ListView.onlbuttonup
(6) ListView.oncellclick 또는 ListView.onbandclick
- **`"up"`** — ListView 에 마우스 왼쪽버튼으로 Down&Up 했을 때 선택이 결정됩니다.

선택과 관련된 이벤트 발생 순서는 아래와 같습니다.
(1) ListView.onlbuttondown
(2) ListView.onlbuttonup
(3) Dataset.canrowposchange
(4) Dataset.onrowposchanged
(5) ListView.onselectchagned
(6) ListView.oncellclick 또는 ListView.onbandclick

**Remark**

- selectchangetype 속성값을 설정하지 않으면 "down"으로 적용됩니다.

- selectchangetype 속성값에 따라 이벤트 발생순서가 변경됩니다.


---

### selectscrollmode

> Components > Component > ListView > Property > selectscrollmode

**Description**

ListView 영역 내에서 드래그 액션을 했을 때 수행되는 동작을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.selectscrollmode[= enumMode]
```

**Setting Syntax**

```javascript
enumMode ::= 'default' | 'select' | 'scroll'
```
```javascript
this.ListView00.selectscrollmode = "scroll";
this.ListView00.selectscrollmode = "select";
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

### tablecellarea

> Components > Component > ListView > Property > tablecellarea

**Description**

Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다.

**Syntax**

```javascript
ListView.tablecellarea[= strArea]
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

> Components > Component > ListView > Property > taborder

**Description**

탭키 입력으로 컴포넌트간 포커스를 이동할 때 ListView 의 순서를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.taborder[= nTabOrder]
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

> Components > Component > ListView > Property > tabstop

**Description**

탭키 입력으로 컴포넌트간 포커스를 이동할 때 ListView 이(가) 포커스를 받을 지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.tabstop[= bTabStop]
```

**Setting Syntax**

```javascript
bTabStop ::= 'true' | 'false'
```
- **`"true"`** — ListView 이(가) 탭키 입력에 의한 포커스를 받습니다.
- **`"false"`** — ListView 이(가) 탭키 입력에 의한 포커스를 받지 않습니다.

**Remark**

- tabstop 속성값이 "false"인 경우 taborder 속성값과 관계없이 포커스가 해당 컴포넌트를 건너뜁니다.

- tabstop 속성값에 관계없이 마우스로 직접 포커스를 주거나, setfocus() 메소드 사용 시 포커스를 갖습니다.

- Div 와 같은 컨테이너 컴포넌트에서 포커스를 받을 수 있는 자식 컴포넌트가 존재하면 해당 컴포넌트가 포커스를 갖습니다.


---

### tooltiptext

> Components > Component > ListView > Property > tooltiptext

**Description**

ListView 에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.tooltiptext[= strToolTipText]
```

**Setting Syntax**

```javascript
this.ListView00.tooltiptext = "This is ToolTip Text";
this.ListView00.tooltiptext = "";          // 풍선 도움말이 표시되지 않습니다.
this.ListView00.tooltiptext = null;        // 상위 컴포넌트의 풍선 도움말이 표시됩니다.
```
- **`strToolTipText`** — 풍선도움말에 표시할 텍스트를 설정합니다.

빈문자열(EmptyString) 설정 시 풍선도움말이 표시되지 않습니다.
null 또는 undefined 설정 시 상위컴포넌트(Form, Div 등)의 풍선도움말이 표시됩니다.

**Remark**

- tooltiptext 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- 마우스 포인터가 ListView 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.

- 풍선도움말이 표시된 상태에서 tooltiptext 속성값을 변경하면 풍선도움말이 사라집니다.


◆ Desktop WRE 제약

- 풍선도움말은 브라우저의 기능을 활용하므로 브라우저 사양에 따라 스타일에 차이가 있을 수 있습니다.
   NRE는 Chrome 의 스타일과 동일하게 적용됩니다.


---

### tooltiptype

> Components > Component > ListView > Property > tooltiptype

**Description**

ListView 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.tooltiptype[= enumTooltipType]
```

**Setting Syntax**

```javascript
enumTooltipType ::= 'default' | 'hover' | 'inplace' | 'default,mouseleave' | 'hover,mouseleave' | 'inplace,mouseleave'
```
```javascript
this.ListView00.tooltiptype = "hover";
```
- **`"default"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 ListView 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"hover"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 ListView 영역내에 멈춰서 일정시간이 경과하면 풍선도움말이 사라집니다.
ListView 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경되거나 사라진 풍선도움말이 다시 표시됩니다.
- **`"inplace"`** — ListView 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 ListView 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"default,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 ListView 영역에 있으면 풍선도움말이 사라지지 않습니다.
- **`"hover,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 ListView 영역에 있으면 풍선도움말이 사라지지 않습니다.
ListView 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경됩니다.
- **`"inplace,mouseleave"`** — ListView 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 ListView 영역에 있으면 풍선도움말이 사라지지 않습니다.

**Remark**

- tooltiptype 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- 마우스 포인터가 ListView 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.

- 풍선도움말이 표시된 상태에서 tooltiptext 속성값을 변경하면 tooltiptype 속성값에 관계없이 풍선도움말이 사라집니다.

- 표시되었다가 사라진 풍선도움말은 마우스 포인터가 ListView 영역을 나갔다가 들어오면 다시 표시됩니다.

- 마우스 포인터가 ListView 영역에서 벗어나면 풍선도움말이 사라집니다.

- 풍선도움말의 크기는 풍선도움말에 표시되는 텍스트의 길이와 크기에 맞춰 자동으로 조정됩니다.

- 풍선도움말에 표시되는 텍스트의 글꼴과 크기는 변경하실 수 없습니다.


---

### top

> Components > Component > ListView > Property > top

**Description**

ListView 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.top[= nTop]
```

**Setting Syntax**

```javascript
nTop ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.ListView00.top = 10; 
this.ListView00.top = "10px"; 
this.ListView00.top = "10%"; 
this.ListView00.top = "Button00:10px"; 
this.ListView00.top = "Button00:10%";
```
- **`<strCompID>`** — ListView 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 ListView 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 ListView 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — ListView의 상단 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 top 속성값을 기준으로 ListView의 상단 위치 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 ListView의 상단 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 ListView의 상단 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 ListView의 상단 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 bottom 속성값을 기준으로 ListView의 상단 위치 결정
- "%": <strCompID>의 height 속성값을 기준으로 ListView의 상단 위치 결정
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

### useselcolor

> Components > Component > ListView > Property > useselcolor

**Description**

ListView 에서 아이템 선택 시 XCSS 에 정의된 Select 관련 Status 를 적용시킬지 설정하는 속성입니다.

**Syntax**

```javascript
ListView.useselcolor[= bUsecolor]
```

**Setting Syntax**

```javascript
bUsecolor ::= 'true' | 'false'
```
```javascript
this.ListView00.useselcolor = false;
```
- **`true`** — 선택된 아이템에 Select 관련 Status 를 적용시킵니다.
- **`false`** — 선택된 아이템에 Select 관련 Status 를 적용시키지 않습니다.

**Remark**

- useselcolor 속성값을 설정하지 않으면 true 로 적용됩니다.

- XCSS 에서 Select 관련 스타일 값은 밴드별로 설정할 수 있습니다.


---

### usesoftkeyboard

> Components > Component > ListView > Property > usesoftkeyboard

**Description**

ListView 의 Cell 에 편집모드용 컨트롤이 표시되어 포커스를 가질 때 키패드의 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.usesoftkeyboard[= bUseKeyboard]
```

**Setting Syntax**

```javascript
bUseKeyboard ::= true | false
```
```javascript
this.ListView00.usesoftkeyboard = false;
```
- **`"true"`** — ListView 의 Cell 에 편집모드용 컨트롤이 표시되어 포커스를 가질 때 키패드가 자동으로 표시됩니다.
- **`"false"`** — ListView 의 Cell 에 편집모드용 컨트롤이 표시되어 포커스를 가져도 키패드가 표시되지 않습니다.

**Remark**

- usesoftkeyboard 속성값을 설정하지 않으면 true 로 적용됩니다.


◆ Windows NRE 제약

- Windows NRE 는 OS 가 Windows 10 이상이고, 연결된 키보드가 없을 때만 적용됩니다.


---

### visible

> Components > Component > ListView > Property > visible

**Description**

ListView 이(가) 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
this.ListView00.visible = true; 
this.ListView00.visible = false;
```
- **`"true"`** — ListView 을(를) 화면에 표시합니다.
- **`"false"`** — ListView 을(를) 화면에 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하는 즉시 컴포넌트의 표시 여부가 화면에 반영됩니다.

- visible 속성값이 "false"이면 컴포넌트가 화면에 표시되지 않고, 포커스를 받을 수 없으므로 입력이나 사용이 불가능합니다.

- Div 와 같은 컨테이너 컴포넌트의 visible 속성값을 "false"로 설정하면 자식 컴포넌트도 함께 화면에 표시되지 않습니다.

- visible 속성값이 "false"이어도 컴포넌트는 존재하기 때문에 스크립트로 제어가 가능합니다.

- 넥사크로 스튜디오에서는 visible 속성값을 'false'로 설정해도 디자인화면에서 사라지지 않습니다.


---

### vscrollbar

> Components > Component > ListView > Property > vscrollbar

**Description**

ListView 의 서브컨트롤인 수직 스크롤바의 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListView.vscrollbar
```

**Setting Syntax**

```javascript
this.ListView00.vscrollbar.decbuttonsize = 30;
```

**Remark**

- scrollbartype 속성값과 앱 실행 환경에 따라 반환하는 오브젝트가 달라집니다.
  ScrollBarControl 또는 ScrollindicatorControl 오브젝트를 반환합니다.

- vscrollbar 속성을 사용하여 수직 스크롤바의 속성값을 변경할 수 있습니다.

- vscrollbar 속성은 읽기전용이므로 해당 속성에 다른 컨트롤을 설정할 수 없지만,
  vscrollbar 속성이 갖는 수직 스크롤바 오브젝트의 하위 속성은 수정이 가능합니다.


---

### width

> Components > Component > ListView > Property > width

**Description**

ListView 을(를) 표시하기 위한 너비를 설정하는 속성입니다.

**Syntax**

```javascript
ListView.width[= nWidth]
```

**Setting Syntax**

```javascript
nWidth ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.ListView00.width = 10; this.ListView00.width = "10px"; 
this.ListView00.width = "10%"; 
this.ListView00.width = "Button00:10%";
```
- **`<strCompID>`** — ListView 의 너비를 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 ListView 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 ListView 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 너비가 적용됩니다.
- **`<nVal>`** — ListView 의 너비를 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": ListView의 너비 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 ListView의 너비 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 ListView의 너비 결정
- "rem": MainFrame font-size 속성값을 기준으로 ListView의 너비 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID> 값은 무시되고 설정값이 ListView의 너비 결정
- "%": <strCompID>의 width 속성값을 기준으로 ListView의 너비 결정
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

> Components > Component > ListView > Property > word-spacing

**Description**

ListView 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다.

**Syntax**

```javascript
ListView.wordSpacing[= strwordspacing]
```

**Setting Syntax**

```javascript
strWordSpacing ::= 'normal' | <nVal>'px'
```
```javascript
* XCSS
word-spacing : 30px;

* Script ( normal property )
this.ListView00.wordSpacing = "30px";
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

> Components > Component > ListView > Method > addEvent

**Description**

ListView 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**

```javascript
ListView.addEvent( strEventID )
```

**Parameters**

```
ListView 에 추가할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 추가에 성공하면 true 를 반환합니다.

이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- ListView 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.


---

### addEventHandler

> Components > Component > ListView > Method > addEventHandler

**Description**

ListView 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
ListView.addEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > ListView > Method > addEventHandlerLookup

**Description**

함수를 검색하여 ListView 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
ListView.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

### bringToFront

> Components > Component > ListView > Method > bringToFront

**Description**

부모가 동일한 컴포넌트 중 ListView 이(가) 화면의 제일 앞에 표시되게 합니다.

**Syntax**

```javascript
ListView.bringToFront()
```

**Parameters**

this.ListView.bringToFront();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToFront() 메소드는 ListView 을(를) 가장 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 앞에 표시되게 됩니다.


---

### bringToPrev

> Components > Component > ListView > Method > bringToPrev

**Description**

부모가 동일한 컴포넌트 중 ListView 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**

```javascript
ListView.bringToPrev()
```

**Parameters**

this.ListView.bringToPrev();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToPrev() 메소드는 ListView 을(를) 한단계 나중에 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 앞에 표시되게 됩니다.


---

### clearEventHandler

> Components > Component > ListView > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
ListView.clearEventHandler( strEventID )
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

> Components > Component > ListView > Method > clearSelect

**Description**

ListView 에서 선택된 아이템의 선택상태를 해제하는 메소드입니다.

**Syntax**

```javascript
ListView.clearSelect()
```

**Parameters**

this.ListView00.clearSelect()

**Return**

없음

**Remark**

- 아이템은 Body 밴드와 Detail 밴드를 포함하는 영역입니다.


---

### createFormat

> Components > Component > ListView > Method > createFormat

**Description**

ListView 와 바인딩 된 DataSet 의 Column 정보를 기준으로 새로운 포맷을 생성하는 메소드입니다.

**Syntax**

```javascript
ListView.createFormat()
```

**Parameters**

this.ListView00.createFormat();

**Return**

없음

**Remark**

- createFomat() 메소드를 실행하여 생성된 포맷은 ListView 에 즉시 표시됩니다.
   ListView 의 현재 포맷정보를 확인하려면 getCurFormatString() 메소드나 formats 속성을 사용하여야 합니다.

- 포맷은 ListView 에 표시되는 형식으로 Body, Detail 로 구성됩니다.
   넥사크로 스튜디오에서 ListView Contents Editor 를 사용하여 한개 이상의 포맷을 설정할 수 있습니다.


---

### destroy

> Components > Component > ListView > Method > destroy

**Description**

스크립트에서 동적으로 생성한 ListView 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
ListView.destroy()
```

**Parameters**

var bSucc = this.ListView00.destroy();

**Return**

ListView 이(가) 정상적으로 삭제되면 true 를 반환합니다.

ListView 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 ListView 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildListView.initListView.show


---

### dropdown

> Components > Component > ListView > Method > dropdown

**Description**

ListView 컴포넌트의 Cell 편집상태에서 아이템 리스트를 표시하는 메서드입니다.

**Syntax**

```javascript
ListView.dropdown()
```

**Parameters**

var bSucc = this.ListView00.dropdown();

**Return**

아이템 리스트가 정상적으로 표시되면 true를 반환합니다.
아이템 리스트가 정상적으로 표시되지 않으면 false를 반환합니다.

**Remark**

- Cell edittype 속성값을 "combo", "date", "multicombo"처럼 아이템 리스트를 가지는 형태로 설정한 경우 지원하는 메서드입니다.
  
- 선택된 Cell 이 포커스 되어 편집모드용 컨트롤이 표시된 상태여야 합니다.
   편집모드용 컨트롤이 표시된 상태가 아니면 showEditor 메서드를 사용하여 편집상태로 전환해야 합니다.


---

### dropdownCalendar

> Components > Component > ListView > Method > dropdownCalendar

**Description**

ListView 에서 edittype 속성값이 "date" 인 Cell 이 편집상태일 때 팝업달력을 표시하는 메소드입니다.

**Syntax**

```javascript
ListView.dropdownCalendar()
```

**Parameters**

var bSucc = this.ListView00.dropdownCalendar();

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

> Components > Component > ListView > Method > dropdownCombo

**Description**

ListView 에서 edittype 속성값이 "combo" 인 Cell 이 편집상태일 때 Combo 아이템 리스트를 표시하는 메소드입니다.

**Syntax**

```javascript
ListView.dropdownCombo()
```

**Parameters**

var bSucc = this.ListView00.dropdownCombo();

**Return**

Combo 아이템 리스트가 정상적으로 표시되면 true 를 반환합니다.

Combo 아이템 리스트가 정상적으로 표시되지 않으면 false 를 반환합니다.

**Remark**

- 선택된 Cell 이 포커스 되어 편집모드용 컨트롤이 표시된 상태여야 합니다.
   편집모드용 컨트롤이 표시된 상태가 아니면 showEditor() 메소드를 사용하여 편집상태로 전환해야 합니다.


---

### findEventHandler

> Components > Component > ListView > Method > findEventHandler

**Description**

ListView 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.findEventHandler( strEventID, objFunc, objTarget )
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

### getBandExpandStatus

> Components > Component > ListView > Method > getBandExpandStatus

**Description**

ListView 에서 특정 아이템의 Detail 밴드 표시여부를 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getBandExpandStatus( nRow )
```

**Parameters**

```
Detail 밴드의 표시여부를 확인하려는 아이템의 인덱스를 숫자로 설정합니다.
```

**Return**

특정 아이템의 Detail 밴드가 표시되어 있으면 true 를 반환합니다.
특정 아이템의 Detail 밴드가 표시되어 있지 않으면 false 를 반환합니다.

Detail 밴드가 존재하지 않거나 nRow 파라미터를 잘 못 설정한 경우 false 를 반환합니다.

**Remark**

- bandexpandtype 속성값에 관계없이 Detail 밴드의 표시여부를 반환합니다.


---

### getBandProperty

> Components > Component > ListView > Method > getBandProperty

**Description**

특정 밴드에서 지정된 속성의 값을 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getBandProperty( enumBand, strPropID )
```

**Parameters**

```
속성값을 가져올 밴드를 문자열로 설정합니다.

"body" 설정 시 Body 밴드에서 속성값을 반환합니다.
"detail" 설정 시 Detail 밴드에서 속성값을 반환합니다.
```

**Return**

특정 밴드에서 지정된 속성의 값을 반환합니다.

**Remark**

- Style 관련 속성은 스크립트나 넥사크로 스튜디오에서 속성에 직접 설정한 값만 반환됩니다.
   테마에 정의된 값이 적용된 Style 속성의 값은 반환되지 않습니다.


---

### getBindCellId

> Components > Component > ListView > Method > getBindCellId

**Description**

DataSet 의 특정 Column 과 바인드된 Cell 의 ID 를 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getBindCellId( enumBand, strColID )
```

**Parameters**

```
현재 ListView 포맷에서 특정 Column 과 바인드 된 Cell 을 검색할 밴드 영역을 문자열로 설정합니다.

"body" 설정 시 Body 밴드 영역에서 Cell 을 검색합니다.
"detail" 설정 시 Detail 밴드 영역에서 Cell 을 검색합니다.
```

**Return**

ID 가 strColID 인 Column 과 바인드 된 첫번째 Cell 의 ID 를 반환합니다.

ID 가 strColID 인 Column 과 바인드 된 Cell 이 없다면 빈문자열(Empty String) 을 반환합니다.

**Remark**

- Cell 의 text 속성에 바인드된 Column ID 가 strColID 값과 같은 Cell 을 enumBand 값에 해당하는 영역에서 검색합니다.
   Cell 의 text 속성에 바인드된 Column ID 가 strColID 값과 같은 Cell 이 여러개 있을 경우 첫번째 Cell 의 ID 를 반환합니다.


---

### getBindDataset

> Components > Component > ListView > Method > getBindDataset

**Description**

ListView 의 binddataset 속성에 설정되어 있는 DataSet 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getBindDataset()
```

**Parameters**

this.ListView00.getBindDataset()

**Return**

binddataset 속성에 설정되어 있는 DataSet 오브젝트를 반환합니다.


---

### getCellCount

> Components > Component > ListView > Method > getCellCount

**Description**

ListView 에서 특정 밴드에 정의된 Cell 의 갯수를 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getCellCount( enumBand )
```

**Parameters**

```
현재 ListView 포맷에 정의된 Cell 의 갯수를 구할 밴드를 문자열로 설정합니다.

"body" 설정 시 Body 밴드 영역에 정의된 Cell 의 갯수를 구합니다.
"detail" 설정 시 Detail 밴드 영역에 정의된 Cell 의 갯수를 구합니다.
```

**Return**

enumBand 에 설정한 밴드 영역에 정의된 Cell 의 갯수를 반환합니다.

**Remark**

- ListView 의 Body, Detail 밴드는 각각 한개의 Row 로 구성되어 있습니다.


---

### getCellProperty

> Components > Component > ListView > Method > getCellProperty

**Description**

Cell 의 특정 속성값을 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getCellProperty( enumBand, strCellID, strPropID )
```

**Parameters**

```
속성값을 가져올 Cell 이 속한 밴드를 문자열로 설정합니다.

"body" 설정 시 Body 밴드의 Cell 에서 속성값을 반환합니다.
"detail" 설정 시 Detail 밴드의 Cell 에서 속성값을 반환합니다.
```

**Return**

특정 Cell 의 특정 속성값을 반환합니다.

**Remark**

	
- Style 관련 속성은 스크립트나 넥사크로 스튜디오에서 속성에 직접 설정한 값만 반환됩니다.
   테마에 정의된 값이 적용된 Style 속성의 값은 반환되지 않습니다.

- ListView 의 Body, Detail 밴드는 각각 한개의 Row 로 구성되어 있습니다.


---

### getCellRect

> Components > Component > ListView > Method > getCellRect

**Description**

특정 Cell 의 위치영역 정보를 Rect 오브젝트로 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getCellRect( nRow, strBandID, strCellID )
```

**Parameters**

```
영역 정보를 얻을 Cell 이 위치한 아이템의 인덱스를 설정합니다.
```

**Return**

인수로 전달된 Cell 의 위치영역 정보를 갖는 Rect 오브젝트를 반환합니다.
잘못된 Cell 지정 시 모든 속성값이 "0" 인 Rect 오브젝트를 반환합니다.

Rect 오브젝트는 "left", "top", "right", "bottom", "width", "height" 속성을 갖습니다.
Cell 영역의 정보는 Rect 오브젝트의 각 속성에 저장됩니다.

**Remark**

- ListView 의 Body, Detail 밴드는 각각 한개의 Row 로 구성되어 있습니다.


---

### getCellText

> Components > Component > ListView > Method > getCellText

**Description**

특정 Cell 에 표시되는 텍스트값을 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getCellText( nRow, strBandID, strCellID )
```

**Parameters**

```
텍스트값을 얻을 Cell 이 위치한 아이템의 인덱스를 설정합니다.
```

**Return**

인수로 전달된 Cell 에 표시되는 텍스트값을 반환합니다.

**Remark**

- ListView 의 Body, Detail 밴드는 각각 한개의 Row 로 구성되어 있습니다.

- expr 과 같은 속성에 의해 실제값과 화면에 표시되는 값이 다를 수 있습니다.
   getCellText() 메소드는 화면에 표시되는 값을 반환합니다.
   실제 데이터값을 확인하려면 getCellValue() 메소드를 사용하여야 합니다.


---

### getCellValue

> Components > Component > ListView > Method > getCellValue

**Description**

특정 Cell 의 text 속성에 설정된 값을 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getCellValue( nRow, strBandID, strCellID )
```

**Parameters**

```
text 속성값을 얻을 Cell 이 위치한 아이템의 인덱스를 설정합니다.
```

**Return**

Cell 의 text 속성이 DataSet 에 바인드 되어 있다면 바인드된 DataSet 의 Column 값을 반환합니다.
Cell 의 text 속성에 값이 설정되어 있다면 설정된 값을 반환합니다.
Cell 의 text 속성이 EXPR 형식으로 설정되어 있다면 EXPR 이 적용된 값을 반환합니다.

**Remark**

- ListView 의 Body, Detail 밴드는 각각 한개의 Row 로 구성되어 있습니다.

- expr 과 같은 속성에 의해 실제값과 화면에 표시되는 값이 다를 수 있습니다.
   getCellValue() 메소드는 실제 text 속성값을 반환합니다.
   화면에 표시되는 값을 확인하려면 getCellText() 메소드를 사용하여야 합니다.


---

### getCurEditType

> Components > Component > ListView > Method > getCurEditType

**Description**

ListView 에서 선택된 Cell 의 edittype 속성값을 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getCurEditType()
```

**Parameters**

var strEditType = this.ListView00.getCurEditType();

**Return**

현재 선택된 Cell 의 editytype 속성값을 반환합니다.


---

### getCurFormatString

> Components > Component > ListView > Method > getCurFormatString

**Description**

ListView 에 현재 표시되고 있는 포맷을 XML 형식의 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getCurFormatString( [bOrginal] )
```

**Parameters**

```
동적으로 변경된 포맷을 반영하여 반환할 지 여부를 설정합니다.

true 설정 시 동적으로 변경된 포맷은 무시하고, 디자인 시 설정한 포맷을 반환합니다.
false 설정 시 동적으로 변경된 포맷을 반영하여 반환합니다.

값을 설정하지 않으면 false 로 적용됩니다.
```

**Return**

현재 ListView 에 표시되고 있는 포맷을 XML 형식의 문자열로 반환합니다.

기본적인 XML 형식은 아래와 같으며 Body, Detail 정의는 포맷에 따라 없을 수 있습니다.

<Format id="default">
  <Band id="body">...</Band>
  <Band id="detail">..</Band>
</Format>

**Remark**

- ListView 에 여러개의 포맷이 정의되어 있는 경우 현재 화면에 표시되는 포맷을 반환합니다.

- ListView 에 정의된 전체 포맷을 확인하려면 getFormatString() 메소드를 사용하여야 합니다.

**See Also**

ListView.getFormatString


---

### getDatasetRow

> Components > Component > ListView > Method > getDatasetRow

**Description**

ListView 의 아이템 인덱스에 해당하는 DataSet 의 Row 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getDatasetRow( nRowIndex )
```

**Parameters**

```
ListView 의 아이템 인덱스를 숫자로 설정합니다.
```

**Return**

ListView 의 아이템 인덱스에 해당하는 DataSet 의 Row 인덱스값을 반환합니다.

정상적으로 값을 구할 수 없을 경우는 -1 을 반환합니다.


---

### getEditCaret

> Components > Component > ListView > Method > getEditCaret

**Description**

Cell 이 편집상태일 때 캐럿이 위치한 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getEditCaret()
```

**Parameters**

var nCaretPos = this.ListView00.getEditCaret();

**Return**

인덱스는 0 부터 시작하며 캐럿이 위치한 인덱스를 반환합니다.

Cell 이 편집상태가 아니면 -1 을 반환합니다.

**Remark**

- 선택된 Cell 이 포커스 되어 편집모드용 컨트롤이 표시되어 있을 때 메소드가 정상적으로 실행됩니다.


---

### getEditingText

> Components > Component > ListView > Method > getEditingText

**Description**

Cell 이 편집모드일 때 표시되는 컨트롤에 입력중인 text 값을 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getEditingText()
```

**Parameters**

var strInputText = this.ListView00.getEditingText();

**Return**

Cell 에 표시된 편집모드용 컨트롤에 입력중인 text 값을 문자열로 반환합니다.

Cell 의 edittype 속성값이 "checkbox" 이면 undefined 를 반환합니다.
Cell 의 edittype 속성값이 "date", "mask" 이면 마스크 문자가 포함된 입력중인 값을 반환합니다.

**Remark**

- 편집모드용 컨트롤이 화면에 표시되어 있고, 편집상태일 때만 메소드가 정상적으로 동작합니다.

- Cell 의 edittype 속성값이 "combo", "date" 이면 편집모드용 컨트롤로 Combo, Calendar 컨트롤이 표시됩니다.
   이 때, Combo, Calendar 컨트롤은 입력중인 값이 하위컨트롤인 comboedit, calendaredit 의 text 속성에 반영됩니다.
   Combo, Calendar 컨트롤의 text 속성엔 하위컨트롤에 입력한 값을 확정하여야 반영됩니다.
   getEdiingText() 메소드는 하위컨트롤인 comboedit, calendaredit 의 text 속성값을 반환하므로 입력중인 값이 반환됩니다.

- Cell 의 edittype 속성값이 "date", "mask" 이면 getEditingValue() 메소드와 getEditingText() 메소드의 반환값이 달라질 수 있습니다.


---

### getEditingValue

> Components > Component > ListView > Method > getEditingValue

**Description**

Cell 이 편집모드일 때 표시되는 컨트롤에 입력중인 value 값을 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getEditingValue()
```

**Parameters**

var strInputValue = this.ListView00.getEditingValue();

**Return**

Cell 에 표시된 편집모드용 컨트롤에 입력중인 value 값을 문자열로 반환합니다.

Cell 의 edittype 속성값이 "button", "checkbox" 이면 undefined 를 반환합니다.
Cell 의 edittype 속성값이 "date" 이면 마스크 문자가 제외된 입력중인 원본값을 날짜형식에 맞게 보정하여 반환합니다.
Cell 의 edittype 속성값이 "mask" 이면 마스크 문자가 제외된 입력중인 원본값만 반환합니다.

**Remark**

- 편집모드용 컨트롤이 화면에 표시되어 있고, 편집상태일 때만 메소드가 정상적으로 동작합니다.

- Cell 의 edittype 속성값이 "combo", "date" 이면 편집모드용 컨트롤로 Combo, Calendar 컨트롤이 표시됩니다.
   이 때, Combo, Calendar 컨트롤은 입력중인 값이 하위컨트롤인 comboedit, calendaredit 의 value 속성에 반영됩니다.
   Combo, Calendar 컨트롤의 value 속성엔 하위컨트롤에 입력한 값을 확정하여야 반영됩니다.
   getEditngValue() 메소드는 하위컨트롤인 comboedit, calendaredit 의 value 속성값을 반환하므로 입력중인 값이 반환됩니다.

- Cell 의 edittype 속성값이 "date", "mask" 이면 getEditingValue() 메소드와 getEditingText() 메소드의 반환값이 달라질 수 있습니다.


---

### getEditSelect

> Components > Component > ListView > Method > getEditSelect

**Description**

Cell 이 편집상태일 때 선택된 텍스트의 인덱스를 배열로 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getEditSelect()
```

**Parameters**

var varArrSelect = this.ListView00.getEditSelect();

**Return**

선택된 텍스트의 시작 인덱스와 끝 인덱스를 각각 배열의 0번, 1번 원소로 반환합니다.
선택된 텍스트가 없는 경우 현재 캐럿 위치를 배열의 0번, 1번 원소로 반환합니다.

인덱스는 0 부터 시작합니다

**Remark**

- 선택된 Cell 이 포커스 되어 편집모드용 컨트롤이 표시되어 있을 때 메소드가 정상적으로 실행됩니다.


---

### getEditSelectedText

> Components > Component > ListView > Method > getEditSelectedText

**Description**

Cell 이 편집상태일 때 선택된 텍스트를 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getEditSelectedText()
```

**Parameters**

var strText = this.ListView00.getEditSelectedText();

**Return**

선택된 텍스트를 반환합니다.

선택된 텍스트가 없을 경우 빈문자열(Empty String)을 반환합니다.

**Remark**

- 선택된 Cell 이 포커스 되어 편집모드용 컨트롤이 표시되어 있을 때 메소드가 정상적으로 실행됩니다.

- 한글과 같이 다국어 문자의 경우 조합중인 문자는 선택된 상태가 아니므로 선택문자로 처리하지 않습니다.


---

### getEditText

> Components > Component > ListView > Method > getEditText

**Description**

Cell 이 편집모드일 때 표시되는 컨트롤의 text 속성값을 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getEditText()
```

**Parameters**

var strText = this.ListView00.getEditText();

**Return**

Cell 에 표시된 편집모드용 컨트롤의 text 속성값을 문자열로 반환합니다.

ListView 의 edittype 속성값이 "checkbox" 인 경우 undefined 를 반환합니다.
ListView 의 edittype 속성값이 "combo", "date" 인 경우 컨트롤에 입력중인 값이 아닌 원본 text 속성값을 반환합니다.

**Remark**

- 편집모드용 컨트롤이 화면에 표시되어 있고, 편집상태일 때만 메소드가 정상적으로 동작합니다.

- Cell 의 edittype 속성값이 "combo", "date" 이면 편집모드용 컨트롤로 Combo, Calendar 컨트롤이 표시됩니다.
   이 때, Combo, Calendar 컨트롤은 입력중인 값이 하위컨트롤인 comboedit, calendaredit 의 text 속성에 반영됩니다.
   Combo, Calendar 컨트롤의 text 속성엔 하위컨트롤에 입력한 값을 확정하여야 반영됩니다.
   따라서, Cell 의 edittype 속성값이 "combo", "date" 일 때 getEditText() 메소드는 입력중인 값을 반환하지 않습니다.

- Cell 의 edittype 속성값이 "combo", "date" 일 때 컨트롤에 입력중인 text 값을 반환 받으려면 getEditingText() 메소드를 사용하여야 합니다.

- Cell 의 edittype 속성값이 "combo", "date", "mask" 이면 getEditValue() 메소드와 getEditText() 메소드의 반환값이 달라질 수 있습니다.

**Example**



---

### getEditValue

> Components > Component > ListView > Method > getEditValue

**Description**

Cell 이 편집모드일 때 표시되는 컨트롤의 value 속성값을 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getEditValue()
```

**Parameters**

var strValue = this.ListView00.getEditValue();

**Return**

Cell 에 표시된 편집모드용 컨트롤의 value 속성값을 문자열로 반환합니다.

Cell 의 edittype 속성값이 "button", "checkbox" 이면 undefined 를 반환합니다.
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



---

### getEventHandler

> Components > Component > ListView > Method > getEventHandler

**Description**

ListView 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getEventHandler( strEventID, nIdx )
```

**Parameters**

```
핸들러 함수를 얻을 이벤트의 ID를 설정합니다.
```

**Return**

지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.

지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.


---

### getFormatIdList

> Components > Component > ListView > Method > getFormatIdList

**Description**

Format id 배열값을 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getFormatIdList();
```

**Parameters**

var arrFormatIdList = this.ListView00.getFormatIdList();

**Return**

Format id 목록을 배열로 반환합니다.
값이 없는 경우에는 빈 배열을 반환합니다.


---

### getFormatString

> Components > Component > ListView > Method > getFormatString

**Description**

디자인 시 정의된 전체 포맷을 XML 형식의 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getFormatString()
```

**Parameters**

var strContents = this.ListView00.getFormatString();

**Return**

디자인 시 정의된 전체 포맷을 XML 형식의 문자열로 반환합니다.
동적으로 변경된 포맷값은 반영되지 않습니다.

기본적인 XML 형식은 아래와 같으며 Body, Detail 정의는 포맷에 따라 없을 수 있습니다.

<Formats>
  <Format id="default">
    <Band id="body">...</Band>
    <Band id="detail">..</Band>
  </Format>
  <Format id="format00">
    <Band id="body">...</Band>
    <Band id="detail">..</Band>
  </Format>
</Formats>

**Remark**

- ListView 에 현재 표시되고 있는 포맷을 확인하려면 getCurFormatString() 메소드를 사용하여야 합니다.


---

### getOffsetBottom

> Components > Component > ListView > Method > getOffsetBottom

**Description**

부모 컴포넌트의 Top 위치를 기준으로 ListView 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getOffsetBottom();
```

**Parameters**

var nBottom = this.ListView.getOffsetBottom();

**Return**

부모 컴포넌트의 Top 위치를 기준으로 ListView 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 ListView 의 bottom 값을 동적으로 계산합니다.


---

### getOffsetHeight

> Components > Component > ListView > Method > getOffsetHeight

**Description**

ListView 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getOffsetHeight();
```

**Parameters**

var nHeight = this.ListView.getOffsetHeight();

**Return**

ListView 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 ListView 의 높이를 동적으로 계산합니다.


---

### getOffsetLeft

> Components > Component > ListView > Method > getOffsetLeft

**Description**

부모 컴포넌트의 Left 위치를 기준으로 ListView 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getOffsetLeft();
```

**Parameters**

var nleft = this.ListView.getOffsetLeft();

**Return**

부모 컴포넌트의 Left 위치를 기준으로 ListView 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 ListView 의 left 값을 동적으로 계산합니다.


---

### getOffsetRight

> Components > Component > ListView > Method > getOffsetRight

**Description**

부모 컴포넌트의 Left 위치를 기준으로 ListView 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getOffsetRight();
```

**Parameters**

var nRight = this.ListView.getOffsetRight();

**Return**

부모 컴포넌트의 Left 위치를 기준으로 ListView 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 ListView 의 right 값을 동적으로 계산합니다.


---

### getOffsetTop

> Components > Component > ListView > Method > getOffsetTop

**Description**

부모 컴포넌트의 Top 위치를 기준으로 ListView 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getOffsetTop();
```

**Parameters**

var nTop = this.ListView.getOffsetTop();

**Return**

부모 컴포넌트의 Top 위치를 기준으로 ListView 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 ListView 의 top 값을 동적으로 계산합니다.


---

### getOffsetWidth

> Components > Component > ListView > Method > getOffsetWidth

**Description**

ListView 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getOffsetWidth();
```

**Parameters**

var nWidth = this.ListView.getOffsetWidth();

**Return**

ListView 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 ListView 의 너비를 동적으로 계산합니다.


---

### getPixelBottom

> Components > Component > ListView > Method > getPixelBottom

**Description**

ListView 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getPixelBottom();
```

**Parameters**

var nbottom = this.ListView.getPixelBottom();

**Return**

ListView 의 bottom 속성값을 픽셀단위로 반환합니다.

bottom 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- bottom 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelHeight

> Components > Component > ListView > Method > getPixelHeight

**Description**

ListView 의 height 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getPixelHeight();
```

**Parameters**

var nheight = this.ListView.getPixelHeight();

**Return**

ListView 의 height 속성값을 픽셀단위로 반환합니다.

height 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- height 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelLeft

> Components > Component > ListView > Method > getPixelLeft

**Description**

ListView 의 left 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getPixelLeft();
```

**Parameters**

var nleft = this.ListView.getPixelLeft();

**Return**

ListView 의 left 속성값을 픽셀단위로 반환합니다.

left 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- left 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelRight

> Components > Component > ListView > Method > getPixelRight

**Description**

ListView 의 right 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getPixelRight();
```

**Parameters**

var nright = this.ListView.getPixelRight();

**Return**

ListView 의 right 속성값을 픽셀단위로 반환합니다.

right 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- right 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelTop

> Components > Component > ListView > Method > getPixelTop

**Description**

ListView 의 top 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getPixelTop();
```

**Parameters**

var ntop = this.ListView.getPixelTop();

**Return**

ListView 의 top 속성값을 픽셀단위로 반환합니다.

top 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- top 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelWidth

> Components > Component > ListView > Method > getPixelWidth

**Description**

ListView 의 width 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getPixelWidth();
```

**Parameters**

var nwidth = this.ListView.getPixelWidth();

**Return**

ListView 의 width 속성값을 픽셀단위로 반환합니다.

width 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- width 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getSelectedRows

> Components > Component > ListView > Method > getSelectedRows

**Description**

ListView 에 선택되어 있는 아이템의 인덱스를 배열로 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getSelectedRows()
```

**Parameters**

var arrRowidx = this.ListView00.getSelectedRows()

**Return**

ListView 에 선택되어 있는 아이템의 인덱스를 배열로 반환합니다.

선택된 아이템이 없을 경우 빈 배열을 반환합니다.


---

### getVScrollPos

> Components > Component > ListView > Method > getVScrollPos

**Description**

ListViw 에 표시된 수직스크롤바의 트랙바 위치값을 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.getVScrollPos()
```

**Parameters**

var nScrollPos = this.ListView00.getVScrollPos();

**Return**

수직스크롤바의 현재 트랙바 위치값을 반환합니다.

**Remark**

- scrollbartype 속성값에 따라 표시되는 스크롤바 종류에 관계없이 위치값을 반환합니다.


---

### hideDetailBand

> Components > Component > ListView > Method > hideDetailBand

**Description**

ListView 에서 특정 아이템의 Detail 밴드를 숨기는 메소드입니다.

**Syntax**

```javascript
ListView.hideDetailBand( nRow )
```

**Parameters**

```
Detail 밴드를 숨기려는 아이템의 인덱스를 설정합니다.
```

**Return**

없음

**Remark**

- bandexpandtype 속성값 "none" 인 경우 Detail 밴드를 숨길 수 없습니다.


---

### init

> Components > Component > ListView > Method > init

**Description**

스크립트로 ListView 을(를) 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**

```javascript
ListView.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

**Parameters**

```
ListView 의 ID를 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- 인수값에 기준 컴포넌트를 포함하면 ListView 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 ListView 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 ListView 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

- 스크립트에서 동적으로 컴포넌트를 생성한 후에만 사용할 수 있습니다.
  동적으로 생성한 컴포넌트가 아닌 경우에는 오동작이 발생할수 있습니다.

- show() 메소드로 컴포넌트가 화면에 표시되면 초기화가 끝난 상태입니다.
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다.

- 동적으로 생성한 컴포넌트를 컨테이너 컴포넌트에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildListView.destroyListView.show


---

### insertEventHandler

> Components > Component > ListView > Method > insertEventHandler

**Description**

ListView 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
ListView.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

> Components > Component > ListView > Method > isDropdown

**Description**

ListView 컴포넌트에 아이템 리스트가 표시되어 있는지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.isDropdown()
```

**Parameters**

var bRtn = this.ListView00.isDropdown()

**Return**

ListView 컴포넌트에 아이템 리스트가 표시되어 있으면 true를 반환합니다.
ListView 컴포넌트에 아이템 리스트가 표시되어 있지 않으면 false를 반환합니다.

**Remark**

- Cell edittype 속성값을 "combo", "date", "multicombo"처럼 아이템 리스트를 가지는 형태로 설정한 경우 지원하는 메서드입니다.


---

### isDropdownCalendar

> Components > Component > ListView > Method > isDropdownCalendar

**Description**

ListView 에 팝업달력이 표시되어 있는지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.isDropdownCalendar()
```

**Parameters**

var bRtn = this.ListView00.isDropdownCalendar()

**Return**

ListView 에 팝업달력이 표시되어 있으면 true 를 반환합니다.

ListView 에 팝업달력이 표시되어 있지 않으면 false 를 반환합니다.


---

### isDropdownCombo

> Components > Component > ListView > Method > isDropdownCombo

**Description**

ListView 에 Combo 아이템 리스트가 표시되어 있는지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
ListView.isDropdownCombo()
```

**Parameters**

var bRtn = this.ListView00.isDropdownCombo()

**Return**

ListView 에 Combo 아이템 리스트가 표시되어 있으면 true 를 반환합니다.

ListView 에 Combo 아이템 리스트가 표시되어 있지 않으면 false 를 반환합니다.


---

### move

> Components > Component > ListView > Method > move

**Description**

ListView 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
ListView.move( vLeft, vTop [, vWidth, vHeight [, vRight, vBottom]] )
```

**Parameters**

```
ListView 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* 값에 기준 컴포넌트를 포함하여 설정했을 때 :
pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 ListView 의 left 가 결정됩니다.
비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 ListView 의 left 가 결정됩니다.
```

**Return**

없음

**Remark**

- 인수값에 기준 컴포넌트를 포함하면 ListView 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 ListView 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 ListView 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.


---

### moveToNext

> Components > Component > ListView > Method > moveToNext

**Description**

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 ListView 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**

```javascript
ListView.moveToNext( objComp )
ListView.moveToNext( strComp )
```

**Parameters**

```
기준이 되는 컴포넌트를 오브젝트로 설정합니다.
```

**Return**

없음

**Remark**

- 인수로 전달되는 기준 컴포넌트와 ListView 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToNext() 메소드는 기준 컴포넌트보다 ListView 이(가) 한단계 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 뒤에 표시되게 됩니다.


---

### moveToNextCell

> Components > Component > ListView > Method > moveToNextCell

**Description**

ListView 에서 Cell 포커스를 편집 가능한 다음 Cell 로 이동시키는 메소드입니다.

**Syntax**

```javascript
ListView.moveToNextCell()
```

**Parameters**

var bSuccess = this.ListView00.moveToNextCell();

**Return**

Cell 포커스 이동에 성공하면 true 를 반환합니다.

Cell 포커스 이동에 실패하면 false 를 반환합니다.

**Remark**

- Cell 의 taborder 속성값 순서대로 포커스가 이동합니다.

- Cell 에 포커스가 이동했을 때 autoenter 속성값에 따라 편집모드용 컨트롤이 표시될 수 있습니다.

- 현재 포커스 된 Cell 이 밴드에서 편집 가능한 마지막 Cell 일 경우 다음 밴드 또는 아이템으로 포커스가 이동합니다.
   다음 아이템의 편집 가능한 Cell 로 포커스가 이동하면 DataSet 의 rowposition 속성값도 변경됩니다.

- 현재 포커스 된 Cell 이 마지막 아이템의 마지막 편집 가능한 Cell 일 경우 첫 번째 아이템으로 포커스가 이동하지 않습니다.

- Cell 의 포커스가 변경된 경우는 onselectchanged 이벤트가 발생합니다.


---

### moveToPrev

> Components > Component > ListView > Method > moveToPrev

**Description**

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 ListView 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**

```javascript
ListView.moveToPrev( objComp )
ListView.moveToPrev( strComp )
```

**Parameters**

```
기준이 되는 컴포넌트를 오브젝트로 설정합니다.
```

**Return**

없음

**Remark**

- 인수로 전달되는 기준 컴포넌트와 ListView 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToPrev() 메소드는 기준 컴포넌트보다 ListView 이(가) 한단계 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 앞에 표시되게 됩니다.


---

### moveToPrevCell

> Components > Component > ListView > Method > moveToPrevCell

**Description**

ListView 에서 Cell 포커스를 편집 가능한 이전 Cell 로 이동시키는 메소드입니다.

**Parameters**

var bSuccess = this.ListView00.moveToPrevCell();

**Return**

Cell 포커스 이동에 성공하면 true 를 반환합니다.

Cell 포커스 이동에 실패하면 false 를 반환합니다.

**Remark**

- Cell 의 taborder 속성값 역순으로 포커스가 이동합니다.

- Cell 에 포커스가 이동했을 때 autoenter 속성값에 따라 편집모드용 컨트롤이 표시될 수 있습니다.

- 현재 포커스 된 Cell 이 밴드에서 편집 가능한 첫번째 Cell 일 경우 이전 밴드 또는 아이템으로 포커스가 이동합니다.
   이전 아이템의 편집 가능한 Cell 로 포커스가 이동하면 DataSet 의 rowposition 속성값도 변경됩니다.

- 현재 포커스 된 Cell 이 첫번째 아이템의 첫번째 편집 가능한 Cell 일 경우 마지막 아이템으로 포커스가 이동하지 않습니다.

- Cell 의 포커스가 변경된 경우는 onselectchanged 이벤트가 발생합니다.


---

### redrawExprCell

> Components > Component > ListView > Method > redrawExprCell

**Description**

ListView 컴포넌트 Cell에 설정된 Expr 값을 모두 갱신하는 메서드입니다.

**Syntax**

```javascript
ListView.redrawExprCell( [enumBand] )
```

**Parameters**

```
Cell에 설정한 Expr 값을 갱신할 밴드를 문자열로 설정합니다.

"body" 설정 시 Body 밴드 영역의 Cell에 설정된 Expr 값을 갱신합니다.
"detail" 설정 시 Detail 밴드 영역의 Cell에 설정된 Expr 값을 갱신합니다.

값을 설정하지 않으면 전체 밴드 영역의 Cell에 설정된 Expr 값을 모두 갱신합니다.
```

**Return**

없음


---

### removeEvent

> Components > Component > ListView > Method > removeEvent

**Description**

ListView 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**

```javascript
ListView.removeEvent( strEventID )
```

**Parameters**

```
ListView 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 삭제에 성공하면 true 를 반환합니다.

이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- ListView 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- ListView 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.


---

### removeEventHandler

> Components > Component > ListView > Method > removeEventHandler

**Description**

ListView 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
ListView.removeEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > ListView > Method > removeEventHandlerLookup

**Description**

ListView 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
ListView.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

> Components > Component > ListView > Method > resize

**Description**

ListView 의 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
ListView.resize( vWidth, vHeight )
```

**Parameters**

```
ListView 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.
음수값을 설정할 수 없습니다.

* 값에 기준 컴포넌트를 포함하여 설정했을 때 :
pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 ListView 의 width 가 결정됩니다.
비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 ListView 의 width 가 결정됩니다.
```

**Return**

없음

**Remark**

- ListView 의 left 속성값이 null 이 아니면 resize() 메소드 실행 후 ListView 의 우측 위치가 변경됩니다.
  또한, 메소드 실행 후 right 속성값은 null 이 됩니다.

- ListView 의 left 속성값이 null 이면 resize() 메소드 실행 후 ListView 의 좌측 위치가 변경됩니다.
  또한, 메소드 실행 후 left 속성값은 null 로 유지됩니다.

- ListView 의 top 속성값이 null 이 아니면 resize() 메소드 실행 후 ListView 의 하단 위치가 변경됩니다.
  또한, 메소드 실행 후 bottom 속성값은 null 이 됩니다.

- ListView 의 top 속성값이 null 이면 resize() 메소드 실행 후 ListView 의 상단 위치가 변경됩니다.
  또한, 메소드 실행 후 top 속성값은 null 로 유지됩니다.

- 인수값에 기준 컴포넌트를 포함하면 ListView 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vWidth, vHeight 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 ListView 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 ListView 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.


---

### selectRow

> Components > Component > ListView > Method > selectRow

**Description**

ListView 에서 인수로 전달된 위치의 아이템을 선택 또는 선택해제 하는 메소드입니다.

**Syntax**

```javascript
ListView.selectRow( nRowIdx [,bSelect] )
```

**Parameters**

```
선택상태를 변경 할 ListView 아이템의 인덱스를 숫자로 설정합니다.

전체 아이템 갯수보다 큰값 또는 음수를 설정할 경우 선택이 모두 해제됩니다.
```

**Return**

아이템의 선택상태가 메소드 실행 전과 반대 상태로 변경되면 true 를 반환합니다.

아이템의 선택상태가 메소드 실행 전과 동일하면 false 를 반환합니다.

**Remark**

- 메소드 실행 결과로 다른 아이템이 선택되면 기존에 선택되어 있던 아이템은 선택해제 됩니다.


---

### sendToBack

> Components > Component > ListView > Method > sendToBack

**Description**

부모가 동일한 컴포넌트 중 ListView 이(가) 화면의 제일 뒤에 표시되게 합니다.

**Syntax**

```javascript
ListView.sendToBack()
```

**Parameters**

this.ListView.sendToBack();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToBack() 메소드는 ListView 을(를) 가장 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 뒤에 표시되게 됩니다


---

### sendToNext

> Components > Component > ListView > Method > sendToNext

**Description**

부모가 동일한 컴포넌트 중 ListView 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**

```javascript
ListView.sendToNext()
```

**Parameters**

this.ListView.sendToNext();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToNext() 메소드는 ListView 을(를) 한단계 먼저 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 뒤에 표시되게 됩니다.


---

### setBandProperty

> Components > Component > ListView > Method > setBandProperty

**Description**

특정 밴드에서 지정된 속성의 값을 설정하는 메소드입니다.

**Syntax**

```javascript
ListView.setBandProperty( enumBand, strPropID, varValue )
```

**Parameters**

```
속성값을 설정하려는 밴드를 문자열로 설정합니다.

"body" 설정 시 Body 밴드의 속성값을 설정합니다.
"detail" 설정 시 Detail 밴드의 속성값을 설정합니다.
```

**Return**

지정한 밴드의 속성값 설정에 성공하면 "true" 를 반환합니다.

지정한 밴드의 속성값 설정에 실패하면 "false" 를 반환합니다.

**Remark**

- setBandProperty() 메소드가 정상적으로 수행되면 ListView 에 변경내용이 즉시 반영됩니다.


---

### setBindDataset

> Components > Component > ListView > Method > setBindDataset

**Description**

ListView 의 binddataset 속성에 DataSet 오브젝트를 설정하는 메소드입니다.

**Syntax**

```javascript
ListView.setBindDataset( objDataset )
```

**Parameters**

```
binddataset 속성에 설정할 DataSet 을 오브젝트 형식으로 설정합니다.
```

**Return**

없음


---

### setCellPos

> Components > Component > ListView > Method > setCellPos

**Description**

ListView 에서 현재 선택된 아이템에 속한 Cell 중 특정 Cell 에 포커스를 이동하는 메소드입니다.

**Syntax**

```javascript
ListView.setCellPos( strBandID, strCellID )
```

**Parameters**

```
포커스를 이동할 Cell 이 속한 밴드를 문자열로 설정합니다.

"body" 설정 시 Body 밴드의 Cell 로 포커스가 이동합니다.
"detail" 설정 시 Detail 밴드의 Cell 로 포커스가 이동합니다.
```

**Return**

Cell 포커스 이동에 성공하면 "true"를 반환합니다.

Cell 포커스 이동에 실패하면 "false"를 반환합니다.

**Remark**

- Cell 의 포커스가 변경된 경우는 onselectchanged 이벤트가 발생합니다.

- ListView 의 Body, Detail 밴드는 각각 한개의 Row 로 구성되어 있습니다.


---

### setCellProperty

> Components > Component > ListView > Method > setCellProperty

**Description**

ListView 에서 특정 Cell 의 속성값을 설정하는 메소드입니다.

**Syntax**

```javascript
ListView.setCellProperty( enumBand, strCellID, strPropID, varValue )
```

**Parameters**

```
속성값을 설정하려는 Cell 이 속한 밴드를 문자열로 설정합니다.

"body" 설정 시 Body 밴드에 속한 Cell 의 속성값을 설정합니다.
"detail" 설정 시 Detail 밴드에 속한 Cell 의 속성값을 설정합니다.
```

**Return**

특정 Cell 의 속성값 설정에 성공하면 "true"를 반환합니다.

특정 Cell 의 속성값 설정에 실패하면 "false"를 반환합니다.

**Remark**

- setCellProperty() 메소드가 정상적으로 수행되면 ListView 에 변경내용이 즉시 반영됩니다.

- ListView 의 Body, Detail 밴드는 각각 한개의 Row 로 구성되어 있습니다.


---

### setEditingValue

> Components > Component > ListView > Method > setEditingValue

**Description**

Cell 이 편집모드일 때 표시되는 컨트롤 또는 서브컨트롤의 value 속성을 설정하는 메소드입니다.

**Syntax**

```javascript
ListView.setEditingValue( strValue )
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

- Cell 의 edittype 속성값이 "button", "checkbox" 인 경우 메소드를 사용할 수 없습니다.

- Cell 의 edittype 속성값이 "combo", "date" 이면 편집모드용 컨트롤로 Combo, Calendar 컨트롤이 표시됩니다.
   이 때, Combo, Calendar 컨트롤은 입력중인 값이 하위컨트롤인 comboedit, calendaredit 의 value 속성에 반영됩니다.
   Combo, Calendar 컨트롤의 value 속성엔 하위컨트롤에 입력한 값을 확정하여야 반영됩니다.
   setEditingValue() 메소드는 하위컨트롤인 comboeidt, calendaredit 의 value 속성에 값을 설정합니다.
   따라서, setEditingValue() 메소드 실행 후 getEditValue() 메소드와 getEditingValue() 메소드의 반환값이 달라질 수 있습니다.


---

### setEditSelect

> Components > Component > ListView > Method > setEditSelect

**Description**

Cell 이 편집상태일 때 편집기에 표시되는 텍스트를 인수로 전달된 영역만큼 선택하는 메소드입니다.

**Syntax**

```javascript
ListView.setEditSelect( nBegin [,nEnd] )
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

> Components > Component > ListView > Method > setEditValue

**Description**

Cell 이 편집모드일 때 표시되는 컨트롤의 value 속성을 설정하는 메소드입니다.

**Syntax**

```javascript
ListView.setEditValue( strValue )
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

- Cell 의 edittype 속성값이 "button", "checkbox" 인 경우 메소드를 사용할 수 없습니다.

- Cell 의 edittype 속성값이 "combo", "date" 이면 편집모드용 컨트롤로 Combo, Calendar 컨트롤이 표시됩니다.
   이 때, Combo, Calendar 컨트롤은 입력중인 값이 하위컨트롤인 comboedit, calendaredit 의 value 속성에 반영됩니다.
   Combo, Calendar 컨트롤의 value 속성엔 하위컨트롤에 입력한 값을 확정하여야 반영됩니다.
   setEditValue() 메소드는 Combo, Calendar 컨트롤의 value 속성에 값을 설정하며, 하위컨트롤인 comboeidt, calendaredit 의 value 속성에도 함께 반영됩니다.

**Example**



---

### setEventHandler

> Components > Component > ListView > Method > setEventHandler

**Description**

ListView 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
ListView.setEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > ListView > Method > setEventHandlerLookup

**Description**

ListView 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
ListView.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

### setFocus

> Components > Component > ListView > Method > setFocus

**Description**

ListView 에 포커스를 설정하는 메서드입니다.

**Syntax**

```javascript
ListView.setFocus( [bMoveScroll] )
```

**Parameters**

```
부모 컴포넌트에 스크롤이 있을 경우, ListView 기준으로 스크롤을 이동할지 여부를 설정합니다.

true: ListView 이(가) 화면에 표시되도록 스크롤을 이동합니다.
false: ListView 위치와 관계없이 스크롤을 이동하지 않습니다.

값을 지정하지 않으면 기본값은 true입니다.
```

**Return**

ListView 이(가) 포커스를 얻기 전에 포커스를 가지고 있던 컴포넌트를 반환합니다.
이전에 포커스를 가진 컴포넌트가 없거나 메소드 실행에 실패한 경우에는 null을 반환합니다.

**Remark**

- enableaccessibility 속성값과 관계없이 전달된 파라미터값을 기준으로 동작합니다.


---

### setFormat

> Components > Component > ListView > Method > setFormat

**Description**

ListView 에 표시 할 포맷의 ID 를 설정하는 메소드입니다.

**Syntax**

```javascript
ListView.setFormat( strFormatID )
```

**Parameters**

```
ListView 에 표시 할 포맷의 ID 를 문자열로 설정합니다.
```

**Return**

ListView 에 표시할 포맷의 ID 설정에 성공했을 경우 "true"를 반환합니다.

ListView 에 표시할 포맷의 ID 설정에 실패했을 경우 "false"를 반환합니다.

**Remark**

- 포맷은 하나의 ListView 에서 데이터를 여러 형식으로 표현하고자 할 때 사용합니다.
   포맷별로 Body, Detail 을 다양하게 구성할 수 있습니다.
   넥사크로 스튜디오의 ListView Contents Editor 를 사용하려 여러개의 포맷을 추가할 수 있습니다.

- setFormat() 메소드로 포맷이 성공적으로 변경되면 formatid 속성값이 변경된 포맷의 ID 로 설정됩니다.

- ListView 의 formatid 속성값을 변경해도 동일한 결과를 얻을 수 있습니다.


---

### setOffsetBottom

> Components > Component > ListView > Method > setOffsetBottom

**Description**

부모 컴포넌트의 Top 위치를 기준으로 ListView 의 bottom 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
ListView.setOffsetBottom( nBottom );
```

**Parameters**

```
부모 컴포넌트의 Top 위치를 기준으로 ListView 의 bottom 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 ListView 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > ListView 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > ListView 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > ListView 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.


---

### setOffsetHeight

> Components > Component > ListView > Method > setOffsetHeight

**Description**

ListView 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
ListView.setOffsetHeight( nHeight );
```

**Parameters**

```
ListView 의 높이를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 ListView 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > ListView 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > ListView 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > ListView 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.


---

### setOffsetLeft

> Components > Component > ListView > Method > setOffsetLeft

**Description**

부모 컴포넌트의 Left 위치를 기준으로 ListView 의 left 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
ListView.setOffsetLeft( nLeft );
```

**Parameters**

```
부모 컴포넌트의 Left 위치를 기준으로 ListView 의 left 값을 픽셀단위의 숫자로 설정합니다
```

**Return**

없음

**Remark**

- 메소드 실행 전 ListView 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > ListView 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > ListView 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, right 속성이 설정됩니다.
   > ListView 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.


---

### setOffsetRight

> Components > Component > ListView > Method > setOffsetRight

**Description**

부모 컴포넌트의 Left 위치를 기준으로 ListView 의 right 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
ListView.setOffsetRight( nRight );
```

**Parameters**

```
부모 컴포넌트의 Left 위치를 기준으로 ListView 의 right 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 ListView 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > ListView 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > ListView 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > ListView 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.


---

### setOffsetTop

> Components > Component > ListView > Method > setOffsetTop

**Description**

부모 컴포넌트의 Top 위치를 기준으로 ListView 의 top 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
ListView.setOffsetTop( nTop );
```

**Parameters**

```
부모 컴포넌트의 Top 위치를 기준으로 ListView 의 top 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 ListView 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > ListView 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > ListView 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, bottom 속성이 설정됩니다.
   > ListView 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.


---

### setOffsetWidth

> Components > Component > ListView > Method > setOffsetWidth

**Description**

ListView 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
ListView.setOffsetWidth( nWidth );
```

**Parameters**

```
ListView 의 너비를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 ListView 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > ListView 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > ListView 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > ListView 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.


---

### show

> Components > Component > ListView > Method > show

**Description**

스크립트로 동적 생성한 ListView 을(를) 화면에 표시하는 메소드입니다.

**Syntax**

```javascript
ListView.show()
```

**Parameters**

this.ListView00.show();

**Return**

없음

**Remark**

- show() 메소드는 컴포넌트가 폼 또는 컨테이너 컴포넌트의 자식 컴포넌트로 등록된 상태에서 사용이 가능합니다.
  자식 컴포넌트로 등록된 상태가 아닌 경우에는 오동작이 발생할 수 있습니다.

- 컴포넌트를 컨테이너에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildListView.destroyListView.init


---

### showDetailBand

> Components > Component > ListView > Method > showDetailBand

**Description**

ListView 에서 특정 아이템의 Detail 밴드를 표시하는 메소드입니다.

**Syntax**

```javascript
ListView.showDetailBand( nRow );
```

**Parameters**

```
Detail 밴드를 표시하려는 아이템의 인덱스를 설정합니다.
```

**Return**

없음

**Remark**

- bandexpandtype 속성값이 "accordion" 일 경우 다른 아이템에 표시된 Detail 밴드가 자동으로 숨겨집니다.


---

### showEditor

> Components > Component > ListView > Method > showEditor

**Description**

현재 선택된 Cell 이 편집 가능할 경우 편집모드용 컨트롤을 표시하거나 숨기는 메소드입니다.

**Syntax**

```javascript
ListView.showEditor( bShow )
```

**Parameters**

```
현재 선택된 Cell 에 편집모드용 컨트롤을 표시할지 설정합니다.

true 설정 시 현재 선택된 Cell 이 편집가능한 상태이면 편집모드용 컨트롤을 표시합니다.
false 설정 시 현재 선택된 Cell 의 편집모드가 해제되고 편집모드용 컨트롤을 표시하지 않습니다.
```

**Return**

메소드가 정상적으로 수행되면 true 를 반환합니다.

메소드가 정상적으로 수행되지 못하면 false 를 반환합니다.

**Remark**

- 선택된 Cell 의 edittype 속성값에 따라 Combo 아이템 리스트, 팝업달력, 체크박스, 에디트 등의 편집모드용 컨트롤이 표시됩니다.

- ListView 의 readonly 속성값이 true 이거나 편집이 불가능한 Cell 을 선택했을 경우 편집모드용 컨트롤이 표시되지 않습니다.

- ListView 의 autoenter 속성값이 "select" 이면 Cell 을 선택 할때 자동으로 편집모드용 컨트롤이 표시됩니다.   


◆ Mobile 제약

- iOS/iPadOS 에서 edittype 속성값이 "date" 이고, calendarpopuptype 속성값이 "system" 일 때
   showEditor() 메소드로 Cell 을 편집모드로 하면 팝업달력이 자동으로 표시되므로 사용에 주의하여야 합니다.


---

### 이벤트 (Events)

### onbandclick

> Components > Component > ListView > Event > onbandclick

**Description**

ListView 에서 Cell 영역 이외의 밴드 영역을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onbandclick(obj:nexacro.ListView,e:nexacro.ListViewClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Cell 영역을 클릭했을 때는 oncellclick 이벤트가 발생합니다.


---

### onbanddblclick

> Components > Component > ListView > Event > onbanddblclick

**Description**

ListView 에서 Cell 영역 이외의 밴드 영역을 더블클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onbanddblclick(obj:nexacro.ListView,e:nexacro.ListViewClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Cell 영역을 더블클릭했을 때는 oncelldblclick 이벤트가 발생합니다.


---

### onbandexpandclick

> Components > Component > ListView > Event > onbandexpandclick

**Description**

ListView 에서 Body 밴드의 확장바를 클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onbandexpandclick(obj:nexacro.ListView,e:nexacro.ListViewClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 확장바 클릭 시 bandexpandtype 속성값에 따라 Detail 밴드가 표시되거나 숨겨집니다.

- 확장바는 Body 밴드만 존재합니다.

- showDetailBand() 또는 hideDetailBand() 메소드 실행에 의해서는 이벤트가 발생하지 않습니다.


---

### onbandstatuschanged

> Components > Component > ListView > Event > onbandstatuschanged

**Description**

ListView 에서 Detail 밴드가 표시되거나 숨겨진 후 발생하는 이벤트입니다.

**Syntax**

```javascript
onbandstatuschanged(obj:nexacro.ListView,e:nexacro.ListViewBandStatusEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- showDetailBand() 또는 hideDetailBand() 메소드로 Detail 밴드의 상태를 변경해도 이벤트가 발생합니다.


---

### oncellclick

> Components > Component > ListView > Event > oncellclick

**Description**

ListView 에서 Body 또는 Detail 밴드 영역의 Cell 을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
oncellclick(obj:nexacro.ListView,e:nexacro.ListViewClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Cell 에 편집모드용 컨트롤이 표시된 상태에서 클릭한 경우는 이벤트가 발생되지 않습니다.

- 마우스 클릭에 의해 oncellclick 이벤트가 발생하려면 Cell 내에서 LButtonDown 과 LButtonUp 액션이 연속으로 발생하여야 합니다.
   이 때, LButtonDown 액션과 LButtonUp 액션 사이에 발생하는 이벤트(ex-onselectchanged)에서 transaction(), alert() 과 같은 메소드 실행 시 LButtonDown 액션정보가 사라지게 되어 oncellclick 이벤트가 정상적으로 발생하지 않습니다.
   위와 같은 문제를 해결하려면 selectchangedtype 속성으로 LButtonDown 액션과 LButtonUp 액션 사이에 발생하는 이벤트의 순서를 변경하거나 LButtonUp 액션에 의해 발생하는 onlbuttonup 이벤트에서 transaction(), alert() 과 같은 메소드를 실행하여야 합니다.


---

### oncelldblclick

> Components > Component > ListView > Event > oncelldblclick

**Description**

ListView 에서 Body 또는 Detail 밴드 영역의 Cell 을 더블클릭 했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
oncelldblclick(obj:nexacro.ListView,e:nexacro.ListViewClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

◆ web runtime environment 제약

- 편집이 가능한 Cell 일 때 더블클릭 과정에서 편집모드용 컨트롤이 표시될 수 있습니다.
   이런 경우, Cell 에서 편집모드용 컨트롤로 클릭대상이 변경되어 브라우저에 따라 이벤트가 발생하지 않을 수 있습니다.


---

### oncellexpandclick

> Components > Component > ListView > Event > oncellexpandclick

**Description**

ListView 에서 Cell 의 오른쪽에 표시된 확장버튼을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
oncellexpandclick(obj:nexacro.ListView,e:nexacro.ListViewClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Cell 에 확장버튼을 표시하려면 ListViewCellControl 의 expandshow 속성값을 "true" 로 설정하여야 합니다.


---

### oncellimeaction

> Components > Component > ListView > Event > oncellimeaction

**Description**

사용자 작업 버튼 또는 ENTER 키 입력 시 발생하는 이벤트입니다.

**Syntax**

```javascript
oncellimeaction(obj:nexacro.ListView,e:nexacro.ListViewKeyEventInfo);
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

### onclick

> Components > Component > ListView > Event > onclick

**Description**

포맷이 정의되지 않은 ListView 영역에서 마우스 왼쪽버튼을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onclick(obj:nexacro.ListView,e:nexacro.ListViewClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- ListView 에 포맷이 정의되지 않았을 때 ListView 영역에서 마우스의 lbuttondown 액션과 lbuttonup 액션이 발생되어야 합니다.

- ListView 에 포맷이 정의되어 있을 때는 테두리(Border)영역을 클릭 시 이벤트가 발생합니다.

- ListView 가 포커스 된 상태서 스페이스키나 엔터키를 입력하면 이벤트가 발생합니다.
   이 때, EventInfo 오브젝트(e 오브젝트)의 좌표관련 속성값은 모두 -1 이 됩니다. (e.clientx 등)


---

### oncloseup

> Components > Component > ListView > Event > oncloseup

**Description**

ListView 에 표시되었던 Combo 아이템 리스트 또는 팝업달력이 닫힐 때 발생하는 이벤트입니다.

**Syntax**

```javascript
oncloseup(obj:nexacro.ListView,e:nexacro.ListViewEditEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- autoupdatetype 속성값이 "none" 일 경우 선택된 값이 DataSet 에 반영되기 전에 oncloseup 이벤트가 발생합니다.

**See Also**

ListView.autoupdatetype


---

### oncontextmenu

> Components > Component > ListView > Event > oncontextmenu

**Description**

ListView 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다.

**Syntax**

```javascript
oncontextmenu(obj:nexacro.ListView,e:nexacro.ListViewContextMenuEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 모바일 환경에서는 터치를 일정시간 유지하면 oncontextmenu 이벤트가 발생합니다.

- ListView 컴포넌트는 마우스 우클릭이나 터치에 의해 표시되는 기본팝업메뉴가 제공되지 않습니다.


---

### ondevicebuttonup

> Components > Component > ListView > Event > ondevicebuttonup

**Description**

모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondevicebuttonup(obj:nexacro.ListView,e:nexacro.DeviceButtonEventInfo);
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

> Components > Component > ListView > Event > ondrag

**Description**

ListView 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondrag(obj:nexacro.ListView,e:nexacro.ListViewDragEventInfo);
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

- ListView  영역 내에서 마우스의 LButtonDown 후 LButtonUp 액션 없이 마우스 이동 시 ondrag 이벤트가 발생합니다.

- 이벤트의 리턴값을 true 로 하여 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등

- Cell 의 편집창에서 마우스로 드래그 시 편집중인 문자열을 선택할 지 드래그 상태를 발생시킬지 여부는 이벤트의 리턴값으로 결정됩니다.


---

### ondragenter

> Components > Component > ListView > Event > ondragenter

**Description**

ListView 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragenter(obj:nexacro.ListView,e:nexacro.ListViewDragEventInfo);
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

- 드래그를 유지한 상태에서 ListView 영역으로 마우스 포인터가 들어올 때마다 이벤트가 발생합니다.


---

### ondragleave

> Components > Component > ListView > Event > ondragleave

**Description**

ListView 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragleave(obj:nexacro.ListView,e:nexacro.ListViewDragEventInfo);
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

- 드래그를 유지한 상태로 ListView 영역에서 마우스 포인터가 나갈 때마다 이벤트가 발생합니다.


---

### ondragmove

> Components > Component > ListView > Event > ondragmove

**Description**

ListView 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragmove(obj:nexacro.ListView,e:nexacro.ListViewDragEventInfo);
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

- 드래그를 유지한 상태로 ListView 영역 내에서 마우스 포인터가 움직일 때마다 이벤트가 발생합니다.


---

### ondrop

> Components > Component > ListView > Event > ondrop

**Description**

ListView 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondrop(obj:nexacro.ListView,e:nexacro.ListViewDragEventInfo);
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

- ListView 영역 내에서 드래그 상태인 마우스의 LButtonUp 액션 발생 시 ondrop 이벤트가 발생합니다.

- 넥사크로에서 발생한 드래그 또는 어플리케이션 외부에서 파일을 드래그 했을 때 ondrop 이벤트를 발생시킬 수 있습니다.

- 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등


---

### ondropdown

> Components > Component > ListView > Event > ondropdown

**Description**

ListView 의 Cell 에서 Combo 아이템 리스트 또는 팝업달력이 표시될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondropdown(obj:nexacro.ListView,e:nexacro.ListViewEditEventInfo);
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

> Components > Component > ListView > Event > onenterdown

**Description**

ListView 에서 Cell 에 편집모드용 컨트롤이 활성화 되어 있을 때 엔터키가 입력되면 발생하는 이벤트입니다.

**Syntax**

```javascript
onenterdown(obj:nexacro.ListView,e:nexacro.ListViewEditEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Cell 에 편집모드용 컨트롤이 활성화 되어 있지 않을 때 엔터키를 입력하면 편집모드용 컨트롤이 표시되고 onenterdown 이벤트는 발생하지 않습니다.

- ListView 의 readonly 속성값이 true 일 때는 이벤트가 발생하지 않습니다.

- Cell 에 편집모드용 컨트롤이 활성화 된 상태에서 엔터키를 입력하면
   "onkeydown 이벤트 발생 -> DataSet 에 값 반영 -> onenterdown 이벤트 발생" 순서로 진행됩니다.

- Cell 의 edittype 속성값이 "checkbox" 일 때 엔터키를 입력하면 값은 변경되지 않고, onenterdown 이벤트만 발생합니다.
   edittype 속성값이 "checkbox" 인 Cell 의 값을 키보드로 변경하려면 스페이스키를 입력하여야 합니다.


---

### oninput

> Components > Component > ListView > Event > oninput

**Description**

ListView 에서 입력을 시도할 때 발생하는 이벤트 입니다.

**Syntax**

```javascript
oninput(obj:nexacro.ListView,e:nexacro.ListViewInputEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 조합문자 입력시 oninput 이벤트가 한번 이상 발생할 수 있습니다.

- Cell 이 Edit, TextArea, Combo 형식이고 편집창이 활성화 상태일때 일본어 IME 로 일본어 입력(조합중이고 확정이 안된 상태)중이면 붙여넣기 기능이 동작하지 않습니다.


◆ web runtime environment 제약

- 동일한 입력에 대해 브라우저의 특성에 따라 oninput 이벤트 발생횟수가 다를 수 있습니다.

- 조합문자 입력확정 동작에서 oninput 이벤트가 발생하지 않는 브라우저가 있을 수 있습니다.
   조합문자 입력확정 동작은 입력시도로 볼 수 없기 때문에 oninput 이벤트의 발생을 보장하지 않습니다.


---

### onkeydown

> Components > Component > ListView > Event > onkeydown

**Description**

ListView 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkeydown(obj:nexacro.ListView,e:nexacro.KeyEventInfo);
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


---

### onkeyup

> Components > Component > ListView > Event > onkeyup

**Description**

ListView 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkeyup(obj:nexacro.ListView,e:nexacro.KeyEventInfo);
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

> Components > Component > ListView > Event > onkillfocus

**Description**

ListView 에서 포커스가 나갈  때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkillfocus(obj:nexacro.ListView,e:nexacro.KillFocusEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 서로 다른 애플리케이션 단위로 포커스가 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showModal(), open() 등의 메소드로 팝업된 Frame 으로 포커스가 이동하는 경우 ListView 에서 포커스 관련 이벤트가 발생하지 않습니다.
   또한, alert(), confirm() 메소드로 표시된 팝업으로 포커스가 이동하는 경우도 ListView 에서 포커스 관련 이벤트가 발생하지 않습니다.


---

### onlbuttondown

> Components > Component > ListView > Event > onlbuttondown

**Description**

ListView 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onlbuttondown(obj:nexacro.ListView,e:nexacro.ListViewMouseEventInfo);
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

- ListView 영역 내에서 마우스의 LButtonDown 액션이 발생하면 이벤트가 발생합니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

**Default Action**

- 이벤트 발생 후 ListView 와 Cell 이 포커스 됩니다.

- autoenter 속성값이 "select" 이면 이벤트 발생 후 마우스 위치의 Cell 에 편집모드용 컨트롤이 표시됩니다.


---

### onlbuttonup

> Components > Component > ListView > Event > onlbuttonup

**Description**

ListView 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onlbuttonup(obj:nexacro.ListView,e:nexacro.ListViewMouseEventInfo);
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

- ListView 에 Status 상태가 적용된 후 이벤트가 발생합니다.

**Default Action**

- 이벤트 발생 후 마우스가 위치한 영역의 클릭 관련 이벤트가 발생합니다.

- 이벤트 발생 전 ListView 와 Cell 이 포커스 됩니다.

- autoenter 속성값이 "select" 이면 이벤트 발생 전 마우스 위치의 Cell 에 편집모드용 컨트롤이 표시됩니다.


---

### onmousedown

> Components > Component > ListView > Event > onmousedown

**Description**

ListView 영역 내에서 마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 눌렸을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmousedown(obj:nexacro.ListView,e:nexacro.ListViewMouseEventInfo);
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

- ListViewMouseEventInfo 오브젝트는 마우스가 위치한 Cell 의 정보를 갖습니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.


---

### onmouseenter

> Components > Component > ListView > Event > onmouseenter

**Description**

ListView 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmouseenter(obj:nexacro.ListView,e:nexacro.ListViewMouseEventInfo);
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

> Components > Component > ListView > Event > onmouseleave

**Description**

ListView 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmouseleave(obj:nexacro.ListView,e:nexacro.ListViewMouseEventInfo);
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

> Components > Component > ListView > Event > onmousemove

**Description**

ListView 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmousemove(obj:nexacro.ListView,e:nexacro.ListViewMouseEventInfo);
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

> Components > Component > ListView > Event > onmouseup

**Description**

마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 ListView 영역 내에서 떼어질 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmouseup(obj:nexacro.ListView,e:nexacro.ListViewMouseEventInfo);
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

- ListViewMouseEventInfo 오브젝트는 마우스가 위치한 Cell 의 정보를 갖습니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.


---

### onmousewheel

> Components > Component > ListView > Event > onmousewheel

**Description**

ListView 영역 내에서 마우스의 휠버튼을 회전했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmousewheel(obj:nexacro.ListView,e:nexacro.MouseWheelEventInfo);
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

- ListView 에서 마우스의 휠버튼 회전값을 처리할 필요가 없을 때 상위 컴포넌트로 휠버튼 회전값과 이벤트가 전파됩니다.
   즉, ListView 에서 스크롤이 이동될 때는 상위로 이벤트가 전파되지 않고, 스크롤이 처음이나 마지막 상태일 때 상위로 이벤트가 전파됩니다.

- Control 키를 누른 상태에서 휠버튼을 회전시키면 환경에 따라 아래와 같이 Zoom 이 발생합니다.
   > Windows NRE 는 window 화면단위로 50%~200% 범위 내에서 10% 단위로 Zoom 이 변경됩니다.
   > Desktop WRE는 웹 브라우저에서 지원하는 범위/간격에 따라 Zoom이 변경됩니다.

- Zoom 상태에서도 ListView 에서 이벤트가 발생하고 리턴값에 따라 상위로 전파되므로 스크립트 작성 시 주의하여야 합니다.
   이 때, 스크롤은 처리되지 않으며 e.ctrlkey 속성값이 true 로 설정됩니다.

**Default Action**

- ListView 컴포넌트에 스크롤바가 있다면 이벤트 발생 후 스크롤을 이동시킵니다.


---

### onmove

> Components > Component > ListView > Event > onmove

**Description**

ListView 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmove(obj:nexacro.ListView,e:nexacro.MoveEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onnodataareaclick

> Components > Component > ListView > Event > onnodataareaclick

**Description**

ListView 에서 Cell 또는 밴드 영역이 아닌 곳을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onnodataareaclick(obj:nexacro.ListView,e:nexacro.ClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onnodataareadblclick

> Components > Component > ListView > Event > onnodataareadblclick

**Description**

ListView 에서 Cell 또는 밴드 영역이 아닌 곳을 더블클릭 했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onnodataareadblclick(obj:nexacro.ListView,e:nexacro.ClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onrbuttondown

> Components > Component > ListView > Event > onrbuttondown

**Description**

ListView 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrbuttondown(obj:nexacro.ListView,e:nexacro.ListViewMouseEventInfo);
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

**Default Action**

- onrbuttondown 이벤트 종료 후 이벤트가 발생한 컴포넌트로 포커스가 이동됩니다.
  단, GroupBox, Static 컴포넌트는 포커스가 이동하지 않습니다.

- 일반적으로 onrbuttondown -> onrbuttonup -> oncontextmenu 순서로 이벤트가 발생하지만
   예외적으로 아래 환경은 onrbuttondown -> oncontextmenu -> onrbuttonup 순서로 이벤트가 발생하므로 주의하여야 합니다.
   : Safari 브라우저, macOS 환경의 전체 웹브라우저, Mobile 전체환경


---

### onrbuttonup

> Components > Component > ListView > Event > onrbuttonup

**Description**

ListView 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrbuttonup(obj:nexacro.ListView,e:nexacro.ListViewMouseEventInfo);
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

**Default Action**

- onrbuttonup 이벤트 종료 후 oncontextmenu 이벤트가 발생합니다.
   예외적으로 아래 환경은 onrbuttondown -> oncontextmenu -> onrbuttonup 순서로 이벤트가 발생하므로 주의하여야 합니다.
   : Safari 브라우저, macOS 환경의 전체 웹브라우저, Mobile 전체환경


---

### onselectchanged

> Components > Component > ListView > Event > onselectchanged

**Description**

ListView 에서 선택 영역이 변경 된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
onselectchanged(obj:nexacro.ListView,e:nexacro.ListViewSelectEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

 - 마우스나 키보드를 사용해 Cell 또는 아이템의 선택 영역을 변경한 후 이벤트가 발생합니다.


---

### onsetfocus

> Components > Component > ListView > Event > onsetfocus

**Description**

ListView 에 포커스가 들어올 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsetfocus(obj:nexacro.ListView,e:nexacro.SetFocusEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 서로 다른 애플리케이션 단위로 포커스가 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showModal(), open() 등의 메소드로 팝업된 Frame 으로 포커스가 이동하는 경우 ListView 에서 포커스 관련 이벤트가 발생하지 않습니다.
   또한, alert(), confirm() 메소드로 표시된 팝업으로 포커스가 이동하는 경우도 ListView 에서 포커스 관련 이벤트가 발생하지 않습니다.

- open() 메소드로 오픈된 Modeless 창에서 부모창의 ListView 에 setFocus() 메소드 실행 시 환경에 따라 동작에 차이가 있으므로 주의하여야 합니다.
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

> Components > Component > ListView > Event > onsize

**Description**

ListView 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsize(obj:nexacro.ListView,e:nexacro.SizeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### ontouchend

> Components > Component > ListView > Event > ontouchend

**Description**

ListView 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchend(obj:nexacro.ListView,e:nexacro.TouchEventInfo);
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

> Components > Component > ListView > Event > ontouchmove

**Description**

ListView 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchmove(obj:nexacro.ListView,e:nexacro.TouchEventInfo);
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

> Components > Component > ListView > Event > ontouchstart

**Description**

ListView 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchstart(obj:nexacro.ListView,e:nexacro.TouchEventInfo);
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

### onvscroll

> Components > Component > ListView > Event > onvscroll

**Description**

ListView 에서 수직 스크롤바를 이동 했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onvscroll(obj:nexacro.ListView,e:nexacro.ScrollEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 수직 스크롤은 Item 단위로 이동합니다.


---

## Components > Component > ListView > Objects

### Objects

> Components > Component > ListView > Objects

**Description**

ListView 를 구성하는 오브젝트입니다.


---

## Components > Component > ListView > ListViewBandControl

### ListViewBandControl

> Components > Component > ListView > Objects > ListViewBandControl

**Description**

ListView 컴포넌트의 Body 밴드를 구성하는 밴드 컨트롤입니다.

**Remark**

- ListView 는 Body, Detail 밴드로 구성되며, 각 밴드는 Cell 리스트를 각각 소유합니다.

- Body, Detail 밴드는 바인드 된 DataSet 의 Row 가 반복되어 출력되는 Cell 들의 집합입니다.

**Property**

| Name | Description |
| --- | --- |
| accessibilityaction | ListViewBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다. |
| accessibilitydesclevel | ListViewBandControl 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다. |
| accessibilitydescription | ListViewBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다. |
| accessibilityenable | ListViewBandControl 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다. |
| accessibilitylabel | ListViewBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다. |
| accessibilityrole | ListViewBandControl에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다. |
| background | ListViewBandControl 의 배경 영역을 설정하는 속성입니다. |
| border-radius | ListViewBandControl 의 모서리 모양을 설정하는 속성입니다. |
| color | ListViewBandControl 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| cssclass | ListViewBandControl 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다. |
| cursor | ListViewBandControl 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| expandbarsize | ListViewBandControl 의 오른쪽 끝에 표시되는 확장바(ExpandBar)의 크기를 설정하는 속성입니다. |
| expandbartype | ListViewBandControl 의 오른쪽 끝에 확장바(ExpandBar)의 표시 여부를 설정하는 속성입니다. |
| font | ListViewBandControl 에서 사용하는 폰트를 설정하는 속성입니다. |
| height | ListViewBandControl 의 높이를 설정하는 속성입니다. |
| letter-spacing | ListViewBandControl 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다. |
| name | ListViewBandControl 의 이름을 설정하는 속성입니다. |
| -nexa-border | ListViewBandControl 의 테두리를 설정하는 속성입니다. |
| -nexa-edge | ListViewBandControl 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-rtl-background-image | ListViewBandControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| -nexa-rtl-edge-image | ListViewBandControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| opacity | ListViewBandControl 영역의 투명도를 설정하는 속성입니다. |
| tooltiptext | ListViewBandControl 영역에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다. |
| tooltiptype | ListViewBandControl 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다. |
| width | ListViewBandControl 의 너비를 설정하는 속성입니다. |
| word-spacing | ListViewBandControl 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다. |

**Status**

컴포넌트가 비활성화된 상태

**Control**

| Name | TypeName |
| --- | --- |
| cell | nexacro.ListViewCellControl |
| expandbar | nexacro.ListViewBandExpandbarControl |


---

### 속성 (Properties)

### -nexa-border

> Components > Component > ListView > Objects > ListViewBandControl > Property > -nexa-border

**Description**

ListViewBandControl 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.border[= strborder]
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
this.ListView00.setBandProperty( "body", "border", "1px solid #999999" );
this.ListView00.setBandProperty( "body", "border", "1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999" );
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

> Components > Component > ListView > Objects > ListViewBandControl > Property > -nexa-edge

**Description**

ListViewBandControl 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.edge[= stredge]
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
this.ListView00.setBandProperty( "body", "edge", "URL('./images/border.png') 5px 5px" );
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

- ListViewBandControl 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.


◆ WRE 제약

- <fixedwidth>,<fixedheight> 값이 이미지 사이즈의 1/2 을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-rtl-background-image

> Components > Component > ListView > Objects > ListViewBandControl > Property > -nexa-rtl-background-image

**Description**

ListViewBandControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.-nexa-rtl-background-image
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

> Components > Component > ListView > Objects > ListViewBandControl > Property > -nexa-rtl-edge-image

**Description**

ListViewBandControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.-nexa-rtl-edge-image
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

> Components > Component > ListView > Objects > ListViewBandControl > Property > accessibilityaction

**Description**

ListViewBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.accessibilityaction[= strAction]
```

**Setting Syntax**

```javascript
this.ListView00.setBandProperty( "body", "accessibilityaction", "Accessibility Action Message" );
this.ListView00.setBandProperty( "body", "accessibilityaction", "Select by direction key" );
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

> Components > Component > ListView > Objects > ListViewBandControl > Property > accessibilitydesclevel

**Description**

ListViewBandControl 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.accessibilitydesclevel[= enumLevel]
```

**Setting Syntax**

```javascript
enumLevel ::= 'all' | 'self' | 'child' | 'none'
```
```javascript
this.ListView00.setBandProperty( "body", "accessibilitydesclevel", "all" );
```
- **`"all"`** — ListViewBandControl 와 자식 컴포넌트에 대한 접근성을 모두 출력합니다.
- **`"self"`** — ListViewBandControl 의 접근성만 출력하고 자식 컴포넌트의 접근성은 출력하지 않습니다.
- **`"child"`** — ListViewBandControl 의 접근성은 출력하지 않고, 자식 컴포넌트의 접근성은 출력합니다.
- **`"none"`** — ListViewBandControl 와 자식 컴포넌트에 대한 접근성을 모두 출력하지 않습니다.

**Remark**

- accessibilitydesclevel 속성값을 설정하지 않으면 "all" 로 적용됩니다.

- Button 과 같이 자식 컴포넌트가 없는 컴포넌트는 "all" 또는 "child" 로 설정 시 "self" 로 적용됩니다.

- Div 와 같은 컨테이너 컴포넌트는 "child" 설정 시 실제 컨텐츠의 접근성만을 출력합니다.

- accessibilitydesclevel 속성은 선택상자의 이동에 영향을 주지 않으므로 방향키로 선택상자가 ListViewBandControl 에 이동되게 하지 않으려면 accessibilityenable 속성을 설정하여야 합니다.


---

### accessibilitydescription

> Components > Component > ListView > Objects > ListViewBandControl > Property > accessibilitydescription

**Description**

ListViewBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.accessibilitydescription[= strDescription]
```

**Setting Syntax**

```javascript
this.ListView00.setBandProperty( "body", "accessibilitydescription", "Option" );
```
- **`strDescription`** — accessibilitydescreadtype 속성값에 "description"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.


---

### accessibilityenable

> Components > Component > ListView > Objects > ListViewBandControl > Property > accessibilityenable

**Description**

ListViewBandControl 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.accessibilityenable[= bEnable]
```

**Setting Syntax**

```javascript
bEnable ::= 'true' | 'false'
```
```javascript
this.ListView00.setBandProperty( "body", "accessibilityenable", false );
```
- **`true`** — ListViewBandControl 에 선택상자가 이동되면 접근성 관련 속성값을 출력합니다.

방향키 또는 제스처로 선택상자 이동 시 Static 과 같이 포커스를 갖지 않는 컴포넌트에도 선택상자가 이동됩니다.
- **`false`** — ListViewBandControl 에 선택상자가 이동되어도 접근성 관련 속성값을 출력하지 않습니다.

데스크탑 환경에서 방향키로 선택상자가 ListViewBandControl 에 이동되지 않습니다.
모바일 환경에서 제스처로 선택상자가 ListViewBandControl 에 이동되지 않습니다.

**Remark**

- accessibilityenable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 선택상자 이동 시 컴포넌트의 ARIA-LABEL + Status + Role 순서로 정보가 조합되어 접근성으로 출력됩니다.
   각 정보의 조합순서는 스크린 리더의 종류에 따라 달라질 수 있습니다.
   > ARIA-LABEL : Environment 의 accessibilitydescreadtype 속성에 설정된 속성값이 반영됩니다.
   > Status : ListViewBandControl 의 현재 상태가 반영됩니다.
   > Role : accessibilityrole 속성값이 반영됩니다. accessibilityrole 속성값을 설정하지 않으면 ListViewBandControl 의 고유 Role 이 반영됩니다.

- accessibilityenable 속성값이 false 일 때 데스크탑 환경에서 방향키 외의 방법으로 선택상자를 ListViewBandControl 로 이동시키면 스크린 리딩 프로그램에서 임의의 값을 출력할 수 있습니다.


◆ 컨테이너 컴포넌트 선택상자 이동 제약

아래와 같은 환경에서 컨테이너 컴포넌트로 선택상자가 이동하지 않고 컨테이너 컴포넌트 내에 배치된 컴포넌트로 이동합니다.
- Android, iOS/iPadOS 운영체제에서 실행 시 (Div, PopupDiv, TabpageControl, View)
- Windows 운영체제에서 센스리더 가상커서 사용 시 (Div, PopupDiv, View)


---

### accessibilitylabel

> Components > Component > ListView > Objects > ListViewBandControl > Property > accessibilitylabel

**Description**

ListViewBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.accessibilitylabel[= strLabel]
```

**Setting Syntax**

```javascript
this.ListView00.setBandProperty( "body", "accessibilitylabel", "OK Button" );
this.ListView00.setBandProperty( "body", "accessibilitylabel", "[@static00]" );
this.ListView00.setBandProperty( "body", "accessibilitylabel", "[@static00][@static01]" );
this.ListView00.setBandProperty( "body", "accessibilitylabel", "[@static00][@static01] OK Button" );
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

> Components > Component > ListView > Objects > ListViewBandControl > Property > accessibilityrole

**Description**

ListViewBandControl에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.accessibilityrole[= enumRole]
```

**Setting Syntax**

```javascript
enumRole ::= 'none' | 'alert' | 'application' | 'button' | 'calendar' | 'chart' | 'checkbox' | 'columnheader' | 'combobox' | 'datepicker' | 'edit' | 'fileupload' | 'form' | 'frame' | 'grid' | 'gridcell' | 'groupbox' | 'heading' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6' | 'image' | 'link' | 'listbox' | 'menubar' | 'progressbar' | 'radio' | 'rowheader' | 'scrollbar' | 'spin' | 'static' | 'statusbar' | 'tab' | 'tabpage' | 'textarea' | 'titlebar' | 'toolbar' | 'tooltip' | 'treegrid' | 'treeitem' | 'webbrowser'
```
```javascript
this.ListView00.setBandProperty( "body", "accessibilityrole", "none" );
this.ListView00.setBandProperty( "body", "accessibilityrole", "button" );
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

- accessibilityenable 속성값을 설정하지 않으면 ListViewBandControl의 기본 Role 로 적용됩니다.

- 추가적인 속성값이 필요한 Role 설정 시 ListViewBandControl에 해당 속성이 없으면 스크린 리더에 따라 정상적으로 정보를 읽지 못할 수 있습니다.


---

### background

> Components > Component > ListView > Objects > ListViewBandControl > Property > background

**Description**

ListViewBandControl 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.background[= strbackground]
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
this.ListView00.setBandProperty( "body", "background", "#ffffaa" );
this.ListView00.setBandProperty( "body", "background", "url('./images/smiley.gif') no-repeat center center #ffffaa" );
this.ListView00.setBandProperty( "body", "background", "linear-gradient( red , blue , yellow )" );
this.ListView00.setBandProperty( "body", "background", "linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0))" );
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

"left" 설정 시 ListViewBandControl 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 ListViewBandControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 ListViewBandControl 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 ListViewBandControl 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 ListViewBandControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 ListViewBandControl 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
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

0 보다 작거나 100 보다 큰 값을 설정 시 ListViewBandControl 의 영역을 벗어난 가상의 위치로 적용됩니다.

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
예를 들어 <angle> 값이 "to left" 이면 ListViewBandControl 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 ListViewBandControl 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

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

0 보다 작거나 100 보다 큰 값을 설정 시 ListViewBandControl 의 영역을 벗어난 가상의 위치로 적용됩니다.
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
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 ListViewBandControl 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

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

> Components > Component > ListView > Objects > ListViewBandControl > Property > border-radius

**Description**

ListViewBandControl 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.borderRadius[= strborderradius]
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
this.ListView00.setBandProperty( "body", "borderRadius", "10px" );
this.ListView00.setBandProperty( "body", "borderRadius", "5px 6px 10px / 5px 10px" );
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

> Components > Component > ListView > Objects > ListViewBandControl > Property > color

**Description**

ListViewBandControl 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.color[= strcolor]
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
this.ListView00.setBandProperty( "body", "color", "#999999" );
this.ListView00.setBandProperty( "body", "color", "rgb(255,0,0)" );
this.ListView00.setBandProperty( "body", "color", "red" );
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

> Components > Component > ListView > Objects > ListViewBandControl > Property > cssclass

**Description**

ListViewBandControl 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.cssclass[= strcssclass]
```

**Setting Syntax**

```javascript
strcssclass ::= <ClassName> [ , &ltClassName> ]*
```
```javascript
this.ListView00.setBandProperty( "body", "cssclass", "TestClass" );
this.ListView00.setBandProperty( "body", "cssclass", "TestClass,TestClass2" );
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

> Components > Component > ListView > Objects > ListViewBandControl > Property > cursor

**Description**

ListViewBandControl 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.cursor[= strCursor]
```

**Setting Syntax**

```javascript
strCursor ::= 'none' | 'auto' | 'default' | 'copy' | 'crosshair' | 'help' | 'move' | 'not-allowed' | 'pointer' | 'progress' | 'text' | 'wait' | 'ew-resize' | 'e-resize' | 'w-resize' | 'ns-resize' | 'n-resize' | 's-resize' | 'nesw-resize' | 'ne-resize' | 'sw-resize' | 'nwse-resize' | 'nw-resize' | 'se-resize'
```
```javascript
* XCSS
cursor : default;

* Script ( normal property )
this.ListView00.setBandProperty( "body", "cursor", "default" );
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

### expandbarsize

> Components > Component > ListView > Objects > ListViewBandControl > Property > expandbarsize

**Description**

ListViewBandControl 의 오른쪽 끝에 표시되는 확장바(ExpandBar)의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.expandbarsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [<strHeight>]
```
```javascript
this.ListView00.setBandProperty( "body", "expandbarsize", "40 20" );
```
- **`<strWidth>`** — 확장바(ExpandBar)의 너비를 픽셀 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 확장바(ExpandBar)의 높이를 픽셀 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- expandbarsize 속성값을 설정하지 않으면 undefined 로 적용됩니다.
   undefined 설정 시 너비와 높이는 모두 "17" 로 적용됩니다.

- <strWidth> 값이 ListView 의 width 속성값보다 클 경우 ListView 너비에 맞게 확장바가 표시됩니다.

- <strHeight> 값과 <strWidth> 값은 공백문자로 구분하여 문자열로 설정합니다.

- 확장바는 Cell 의 오른쪽에 표시되는 확장버튼과 다른 컨트롤입니다.

- 확장바는 Body 밴드에세만 지원하는 기능입니다.


---

### expandbartype

> Components > Component > ListView > Objects > ListViewBandControl > Property > expandbartype

**Description**

ListViewBandControl 의 오른쪽 끝에 확장바(ExpandBar)의 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.expandbartype[= bBar]
```

**Setting Syntax**

```javascript
bBar ::= 'true' | 'false'
```
```javascript
this.ListView00.setBandProperty( "body", "expandbartype", "false" );
```
- **`"true"`** — 확장바(ExpandBar)를 ListViewBandControl 의 오른쪽 끝에 표시합니다.
- **`"false"`** — 확장바(ExpandBar)를 ListViewBandControl 에 표시하지 않습니다.

**Remark**

- expandbartype 속성값을 설정하지 않으면 "false" 로 적용됩니다.

- 확장바는 Cell 의 오른쪽에 표시되는 확장버튼과 다른 컨트롤입니다.

- 확장바는 Body 밴드에서만 지원하는 기능입니다.


---

### font

> Components > Component > ListView > Objects > ListViewBandControl > Property > font

**Description**

ListViewBandControl 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.font[= strfont]
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
this.ListView00.setBandProperty( "body", "font", "bold 12pt/30px arial, sans-serif" );
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

### height

> Components > Component > ListView > Objects > ListViewBandControl > Property > height

**Description**

ListViewBandControl 의 높이를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.height[= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::=  <nVal> ['px' | '%']
```
```javascript
this.ListView00.setBandProperty( "body", "height", "50" ); 
this.ListView00.setBandProperty( "body", "height", "40%" );
```
- **`<nVal>`** — ListViewBandControl 의 높이를 픽셀 또는 비율("%") 단위의 숫자로 설정합니다.

픽셀 단위로 설정 시 설정한 값이 높이로 결정됩니다.
비율("%") 단위로 설정 시 ListView 의 height 속성값을 기준으로 ListViewBandControl 의 높이가 결정됩니다.


---

### letter-spacing

> Components > Component > ListView > Objects > ListViewBandControl > Property > letter-spacing

**Description**

ListViewBandControl 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.letterSpacing[= strspace]
```

**Setting Syntax**

```javascript
strspace ::= 'normal' | <nVal> ['px']
```
```javascript
* XCSS
letter-spacing : 2px ;

* Script ( normal property )
this.ListView00.setBandProperty( "body", "letterSpacing", "2px" );
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

> Components > Component > ListView > Objects > ListViewBandControl > Property > name

**Description**

ListViewBandControl 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.name
```

**Setting Syntax**

- **`name`** — Control 의 이름을 설정합니다.

**Remark**

- 컴포넌트 내부에 정의된 Control 은 name 을 설정할 수 없습니다.


---

### opacity

> Components > Component > ListView > Objects > ListViewBandControl > Property > opacity

**Description**

ListViewBandControl 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.opacity[= stropacity]
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8;
opacity : 80%;

* Script ( normal property )
this.ListView00.setBandProperty( "body", "opacity", "0.8" );
this.ListView00.setBandProperty( "body", "opacity", 0.8 );
this.ListView00.setBandProperty( "body", "opacity", "80%" );
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

> Components > Component > ListView > Objects > ListViewBandControl > Property > tooltiptext

**Description**

ListViewBandControl 영역에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.tooltiptext[= strToolTipText]
```

**Setting Syntax**

```javascript
this.ListView00.setBandProperty( "body", "tooltiptext", "This is ToolTip Text" ); 
this.ListView00.setBandProperty( "body", "tooltiptext", "" );          // 풍선 도움말이 표시되지 않습니다. 
this.ListView00.setBandProperty( "body", "tooltiptext", null );        // ListView 컴포넌트의 풍선 도움말이 표시됩니다.
```
- **`strToolTipText`** — 풍선도움말에 표시할 텍스트를 설정합니다.

빈문자열(EmptyString) 설정 시 풍선도움말이 표시되지 않습니다.
null 또는 undefined 설정 시 ListView 컴포넌트의 풍선도움말이 표시됩니다.

**Remark**

- tooltiptext 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- tooltiptext 속성이 undefined 로 적용되면 상위 영역(ListView)의 tooltiptext 속성값이 적용됩니다.
   상위 영역의 tooltiptext 속성값이 undefined 일 경우는 다시 상위 영역의 tooltiptext 속성값이 적용됩니다. 

- 마우스 포인터가 ListViewBandControl 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.


◆ Desktop WRE 제약

- 풍선도움말은 브라우저의 기능을 활용하므로 브라우저 사양에 따라 스타일에 차이가 있을 수 있습니다.
   NRE는 Chrome 의 스타일과 동일하게 적용됩니다.


---

### tooltiptype

> Components > Component > ListView > Objects > ListViewBandControl > Property > tooltiptype

**Description**

ListViewBandControl 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.tooltiptype[= enumTooltipType]
```

**Setting Syntax**

```javascript
enumTooltipType ::= 'default' | 'hover' | 'inplace' | 'default,mouseleave' | 'hover,mouseleave' | 'inplace,mouseleave'
```
```javascript
this.ListView00.setBandProperty( "body", "tooltiptype", "hover" );
```
- **`"default"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 ListViewBandControl 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"hover"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 ListViewBandControl 영역내에 멈춰서 일정시간이 경과하면 풍선도움말이 사라집니다.
ListViewBandControl 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경되거나 사라진 풍선도움말이 다시 표시됩니다.
- **`"inplace"`** — ListViewBandControl 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 ListViewBandControl 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"default,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 ListViewBandControl 영역에 있으면 풍선도움말이 사라지지 않습니다.
- **`"hover,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 ListViewBandControl 영역에 있으면 풍선도움말이 사라지지 않습니다.
ListViewBandControl 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경됩니다.
- **`"inplace,mouseleave"`** — ListViewBandControl 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 ListViewBandControl 영역에 있으면 풍선도움말이 사라지지 않습니다.

**Remark**

- tooltiptype 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- 마우스 포인터가 ListViewBandControl 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.

- 풍선도움말이 표시된 상태에서 tooltiptext 속성값을 변경하면 tooltiptype 속성값에 관계없이 풍선도움말이 사라집니다.

- 표시되었다가 사라진 풍선도움말은 마우스 포인터가 ListViewBandControl 영역을 나갔다가 들어오면 다시 표시됩니다.

- 마우스 포인터가 ListViewBandControl 영역에서 벗어나면 풍선도움말이 사라집니다.

- 풍선도움말의 크기는 풍선도움말에 표시되는 텍스트의 길이와 크기에 맞춰 자동으로 조정됩니다.

- 풍선도움말에 표시되는 텍스트의 글꼴과 크기는 변경하실 수 없습니다.


---

### width

> Components > Component > ListView > Objects > ListViewBandControl > Property > width

**Description**

ListViewBandControl 의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.width[= nWidth]
```

**Setting Syntax**

```javascript
nWidth ::=  <nVal> ['px' | '%']
```
```javascript
this.ListView00.setBandProperty( "body", "width", "200" ); 
this.ListView00.setBandProperty( "body", "width", "30%" );
```
- **`<nVal>`** — ListViewBandControl 의 너비를 픽셀 또는 비율("%") 단위의 숫자로 설정합니다.

픽셀 단위로 설정 시 설정한 값이 너비로 결정됩니다.
비율("%") 단위로 설정 시 ListView 의 width 속성값을 기준으로 ListViewBandControl 의 너비가 결정됩니다.

**Remark**

- width 속성값을 ListView 컴포넌트 너비의 50% 이하로 설정하면 아이템이 바둑판 모양으로 표시됩니다.

- 아이템이 바둑판 모양으로 표시될 때 아래와 같은 규칙이 적용됩니다.
   > 같은 줄에 표시되는 아이템의 갯수는 ListView 의 width 를 ListViewBandControl 의 width 로 나눈값으로 결정됩니다.
   > ListViewDetailBandControl 의 width 값과 표시여부에 따라 같은 줄에 표시되는 아이템의 갯수가 동적으로 변경될 수 있습니다.
   > 바둑판 모양으로 표시될 때 남는 공간은 각 ListViewBandControl 간의 공백으로 처리됩니다.


---

### word-spacing

> Components > Component > ListView > Objects > ListViewBandControl > Property > word-spacing

**Description**

ListViewBandControl 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandControl.wordSpacing[= strwordspacing]
```

**Setting Syntax**

```javascript
strWordSpacing ::= 'normal' | <nVal>'px'
```
```javascript
* XCSS
word-spacing : 30px;

* Script ( normal property )
this.ListView00.setBandProperty( "body", "wordSpacing", "30px" );
```
- **`"normal"`** — 텍스트의 단어 사이 간격을 설정하지 않습니다.

현재 font 에 맞는 기본형태로 텍스트가 표시됩니다.
- **`<nVal>`** — pixel 단위로 텍스트의 단어 사이 간격을 설정합니다.

**Remark**

- word-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "wordSpacing"을 사용해야 합니다.


---

## Components > Component > ListView > ListViewBandExpandbarControl

### ListViewBandExpandbarControl

> Components > Component > ListView > Objects > ListViewBandExpandbarControl

**Description**

ListViewBandControl 의 확장바(ExpandBar) 버튼을 구성하는 컨트롤입니다.

**Remark**

- ListViewBandExpandbarControl 의 모든 속성은 XCSS 에서만 정의할 수 있으며, 스크립트로 속성값을 읽어오거나 수정할 수 없습니다.

- 확장바(ExpandBar) 버튼은 Body 밴드에서만 지원하며 Cell 의 오른쪽에 표시되는 확장버튼과 다른 컨트롤입니다.

- 확장바(ExpandBar) 를 사용하여 Detail 밴드를 확장 또는 축소 할 수 있습니다.
   확장바(ExpandBar) 기능은 ListView 컴포넌트의 bandexpandtype, bandinitstatus 속성값에 따라 동작합니다.

◆ Deprecated features

아래 기능은 아직 사용할 수 있지만, 언젠가 제거할 예정이므로 주의를 기울여야 합니다. 작성한 코드에 해당 기능이 포함되어 있다면 제거해야 합니다.

- pushed userstatus
- selected userstatus

**Property**

| Name | Description |
| --- | --- |
| background | ListViewBandExpandbarControl 의 배경 영역을 설정하는 속성입니다. |
| border-radius | ListViewBandExpandbarControl 의 모서리 모양을 설정하는 속성입니다. |
| box-shadow | ListViewBandExpandbarControl 에 그림자 효과를 설정하는 속성입니다. |
| color | ListViewBandExpandbarControl 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| cursor | ListViewBandExpandbarControl 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| font | ListViewBandExpandbarControl 에서 사용하는 폰트를 설정하는 속성입니다. |
| letter-spacing | ListViewBandExpandbarControl 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다. |
| -nexa-border | ListViewBandExpandbarControl 의 테두리를 설정하는 속성입니다. |
| -nexa-edge | ListViewBandExpandbarControl 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-icon | ListViewBandExpandbarControl에서 텍스트와 함께 표시 될 아이콘 이미지를 설정하는 속성입니다. |
| -nexa-icon-position | ListViewBandExpandbarControl에서 텍스트와 함께 표시 될 아이콘 이미지의 위치를 설정하는 속성입니다. |
| -nexa-padding | ListViewBandExpandbarControl 영역의 안쪽 여백을 설정하는 속성입니다. |
| -nexa-rtl-background-image | ListViewBandExpandbarControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| -nexa-rtl-edge-image | ListViewBandExpandbarControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-rtl-icon | ListViewBandExpandbarControl 의 rtl 속성이 true 로 적용될 때 표시될 아이콘 이미지를 설정하는 속성입니다. |
| -nexa-text-align | ListViewBandExpandbarControl 에 표시되는 텍스트 또는 컨텐츠의 가로 정렬 방식을 설정하는 속성입니다. |
| -nexa-text-decoration | ListViewBandExpandbarControl 에 표시되는 텍스트에 적용할 효과를 설정하는 속성입니다. |
| -nexa-text-padding | ListViewBandExpandbarControl 에 표시되는 아이콘과 텍스트의 간격을 설정하는 속성입니다. |
| -nexa-vertical-align | ListViewBandExpandbarControl 에 표시되는 텍스트 또는 컨텐츠의 세로 정렬 방식을 설정하는 속성입니다. |
| -nexa-word-wrap | ListViewBandExpandbarControl 에 표시되는 텍스트가 출력영역보다 길 경우 자동으로 줄바꿈 되도록 설정하는 속성입니다. |
| opacity | ListViewBandExpandbarControl 영역의 투명도를 설정하는 속성입니다. |
| word-spacing | ListViewBandExpandbarControl 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다. |

**Status**

컴포넌트가 비활성화된 상태


---

### 속성 (Properties)

### -nexa-border

> Components > Component > ListView > Objects > ListViewBandExpandbarControl > Property > -nexa-border

**Description**

ListViewBandExpandbarControl 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandExpandbarControl.-nexa-border
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

> Components > Component > ListView > Objects > ListViewBandExpandbarControl > Property > -nexa-edge

**Description**

ListViewBandExpandbarControl 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandExpandbarControl.-nexa-edge
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

- ListViewBandExpandbarControl 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.


◆ web runtime environment 제약

- <fixedwidth>,<fixedheight> 값이 이미지사이즈의 1/2을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-icon

> Components > Component > ListView > Objects > ListViewBandExpandbarControl > Property > -nexa-icon

**Description**

ListViewBandExpandbarControl에서 텍스트와 함께 표시 될 아이콘 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandExpandbarControl.-nexa-icon
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

- 아이콘 이미지가 표시되는 위치는 -nexa-icon-position 속성에서 설정합니다.


---

### -nexa-icon-position

> Components > Component > ListView > Objects > ListViewBandExpandbarControl > Property > -nexa-icon-position

**Description**

ListViewBandExpandbarControl에서 텍스트와 함께 표시 될 아이콘 이미지의 위치를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandExpandbarControl.-nexa-icon-position
```

**Setting Syntax**

```javascript
-nexa-icon-position ::= 'left' | 'top' | 'right' | 'bottom'
```
```javascript
* XCSS
-nexa-icon-position : left ;
```
- **`"left"`** — 아이콘을 텍스트 왼쪽에 표시합니다.
- **`"right"`** — 아이콘을 텍스트 오른쪽에 표시합니다.
- **`"top"`** — 아이콘을 텍스트 위쪽에 표시합니다.
- **`"bottom"`** — 아이콘을 텍스트 아래쪽에 표시합니다.

**Remark**

- -nexa-icon-position 속성값을 설정하지 않으면 undefined 가 설정되고, "left" 로 동작합니다.

- 아이콘과 텍스트가 겹쳐지도록 설정할 수 없습니다.


---

### -nexa-padding

> Components > Component > ListView > Objects > ListViewBandExpandbarControl > Property > -nexa-padding

**Description**

ListViewBandExpandbarControl 영역의 안쪽 여백을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandExpandbarControl.-nexa-padding
```

**Setting Syntax**

```javascript
-nexa-padding ::= <npadding>'px'{4}
```
```javascript
* XCSS
-nexa-padding : 5px 5px 5px 5px;
```
- **`<npadding>`** — ListViewBandExpandbarControl 영역의 안쪽 여백을 pixel 단위로 설정합니다.

값을 1회 입력 시 top/right/bottom/left 에 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top/bottom, right/left 에 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top, right/left, bottom 에 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top, right, bottom, left 에 첫번째 값부터 각각 적용됩니다.

"px" 단위를 생략할 수 없습니다.

**Remark**

- -nexa-padding 속성값을 설정하지 않으면 undefined 가 설정되고, "0px" 로 동작합니다.

- -nexa-padding 속성은 컴포넌트에 표시되는 아이콘과 텍스트의 영역에 적용됩니다.

- ListViewBandExpandbarControl 의 너비보다 표시되는 컨텐츠의 너비가 길면 "right" 방향의 padding 값이 무시됩니다.

- Div 와 같이 자식을 갖을 수 있는 컴포넌트에서 -nexa-padding 속성은 자식 컴포넌트의 위치에 영향을 주지 않습니다.


---

### -nexa-rtl-background-image

> Components > Component > ListView > Objects > ListViewBandExpandbarControl > Property > -nexa-rtl-background-image

**Description**

ListViewBandExpandbarControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandExpandbarControl.-nexa-rtl-background-image
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

> Components > Component > ListView > Objects > ListViewBandExpandbarControl > Property > -nexa-rtl-edge-image

**Description**

ListViewBandExpandbarControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandExpandbarControl.-nexa-rtl-edge-image
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

> Components > Component > ListView > Objects > ListViewBandExpandbarControl > Property > -nexa-rtl-icon

**Description**

ListViewBandExpandbarControl 의 rtl 속성이 true 로 적용될 때 표시될 아이콘 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandExpandbarControl.-nexa-rtl-icon
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

> Components > Component > ListView > Objects > ListViewBandExpandbarControl > Property > -nexa-text-align

**Description**

ListViewBandExpandbarControl 에 표시되는 텍스트 또는 컨텐츠의 가로 정렬 방식을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandExpandbarControl.-nexa-text-align
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

- ListViewBandExpandbarControl 의 너비보다 표시되는 텍스트의 길이가 크면 "right" 를 설정해도 "left" 로 동작됩니다.


◆ web runtime environment 제약

- -nexa-text-align 속성값이 "right" 일 때 font 속성에 "italic" 을 설정하면 마지막 텍스트의 기울어진 부분이 잘려서 표시될 수 있습니다.
   웹브라우저에서 텍스트영역을 일반글자 기준으로 처리한 후 기울임을 적용하면서 발생하는 문제입니다.


---

### -nexa-text-decoration

> Components > Component > ListView > Objects > ListViewBandExpandbarControl > Property > -nexa-text-decoration

**Description**

ListViewBandExpandbarControl 에 표시되는 텍스트에 적용할 효과를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandExpandbarControl.-nexa-text-decoration
```

**Setting Syntax**

```javascript
-nexa-text-decoration ::= 'none' | <txt-deco> [' ' <txt-deco>]{2}

<txt-deco> ::= 'underline' | 'overline' | 'line-through'
```
```javascript
* XCSS
-nexa-text-decoration : underline overline;
```
- **`"none"`** — 텍스트에 효과를 적용하지 않습니다.
- **`<txt-deco>`** — 텍스트에 적용할 효과를 설정합니다.

"underline" 설정 시 텍스트에 밑줄 효과가 적용됩니다.
"overline" 설정 시 텍스트에 윗줄 효과가 적용됩니다.
"line-through" 설정 시 텍스트에 취소선 효과가 적용됩니다.

**Remark**

- -nexa-text-decoration 속성값을 설정하지 않으면 undefined 가 설정되고, "none" 으로 동작합니다.

- 각 효과는 공백(" ")을 구분자로 사용하여 여러번 설정할 수 있습니다.


◆ web runtime environment 제약

- 일부 웹브라우저는 속성값에 "none" 이 포함될 경우 텍스트에 효과가 적용되지 않습니다.


---

### -nexa-text-padding

> Components > Component > ListView > Objects > ListViewBandExpandbarControl > Property > -nexa-text-padding

**Description**

ListViewBandExpandbarControl 에 표시되는 아이콘과 텍스트의 간격을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandExpandbarControl.-nexa-text-padding //get
```

**Setting Syntax**

```javascript
strtextpadding ::= <ntextpadding>'px'{4}
```
```javascript
* XCSS
-nexa-text-padding : 5px 5px 5px 5px;
```
- **`<ntextpadding>`** — 아이콘과 텍스트 영역의 간격을 pixel 단위로 설정합니다.

값을 1회 입력 시 top/right/bottom/left 에 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top/bottom, right/left 에 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top, right/left, bottom 에 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top, right, bottom, left 에 첫번째 값부터 각각 적용됩니다.

"px" 단위를 생략할 수 없습니다.

**Remark**

- -nexa-text-padding 속성값을 설정하지 않으면 undefined 가 설정되고, "0px" 로 동작합니다.

- ListViewBandExpandbarControl 에 표시되는 아이콘이 없을 경우 -nexa-text-padding 속성값은 무시됩니다.

- 일반적으로 아이콘과 텍스트에 간격을 주고자 할 때 사용하는 속성으로 아이콘의 위치에 맞게 속성값을 설정합니다.


---

### -nexa-vertical-align

> Components > Component > ListView > Objects > ListViewBandExpandbarControl > Property > -nexa-vertical-align

**Description**

ListViewBandExpandbarControl 에 표시되는 텍스트 또는 컨텐츠의 세로 정렬 방식을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandExpandbarControl.-nexa-vertical-align
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

### -nexa-word-wrap

> Components > Component > ListView > Objects > ListViewBandExpandbarControl > Property > -nexa-word-wrap

**Description**

ListViewBandExpandbarControl 에 표시되는 텍스트가 출력영역보다 길 경우 자동으로 줄바꿈 되도록 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandExpandbarControl.-nexa-word-wrap
```

**Setting Syntax**

```javascript
-nexa-word-wrap ::= 'none' | 'char' | 'english'
```
```javascript
* XCSS
-nexa-word-wrap : char;
```
- **`"none"`** — 자동으로 줄바꿈을 수행하지 않습니다.
- **`"char"`** — 글자 단위로 줄바꿈을 자동 수행합니다.
- **`"english"`** — 영문자일 경우 단어 단위로 줄바꿈을 자동 수행합니다.
영문자 이외의 문자는 글자 단위로 줄바꿈을 자동 수행합니다.

**Remark**

- -nexa-word-wrap 속성값을 설정하지 않으면 undefined 가 설정되고, "none" 으로 동작합니다.

- 자동 줄바꿈이 수행되면 텍스트 정렬의 기준점이 변경될 수 있습니다.

- "english"로 설정 시 한 단어는 공백(Space, Tab 등) 으로 구분합니다.


---

### background

> Components > Component > ListView > Objects > ListViewBandExpandbarControl > Property > background

**Description**

ListViewBandExpandbarControl 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandExpandbarControl.background
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

"left" 설정 시 ListViewBandExpandbarControl 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 ListViewBandExpandbarControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 ListViewBandExpandbarControl 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 ListViewBandExpandbarControl 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 ListViewBandExpandbarControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 ListViewBandExpandbarControl 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
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

0 보다 작거나 100 보다 큰 값을 설정 시 ListViewBandExpandbarControl 의 영역을 벗어난 가상의 위치로 적용됩니다.

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
예를 들어 <angle> 값이 "to left" 이면 ListViewBandExpandbarControl 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 ListViewBandExpandbarControl 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

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

0 보다 작거나 100 보다 큰 값을 설정 시 ListViewBandExpandbarControl 의 영역을 벗어난 가상의 위치로 적용됩니다.
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
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 ListViewBandExpandbarControl 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

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

> Components > Component > ListView > Objects > ListViewBandExpandbarControl > Property > border-radius

**Description**

ListViewBandExpandbarControl 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandExpandbarControl.border-radius
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

### box-shadow

> Components > Component > ListView > Objects > ListViewBandExpandbarControl > Property > box-shadow

**Description**

ListViewBandExpandbarControl 에 그림자 효과를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandExpandbarControl.box-shadow
```

**Setting Syntax**

```javascript
box-shadow ::= 'none' | [<inset>] <offset> [<blur>'px'] [<spread>'px'] [<color>]

<offset> ::= <horizontal>'px' <vertical>'px'
<color> ::= <NamedColor> | <NumericColor>
```
```javascript
* XCSS
box-shadow : 10px 10px 10px #888888;
box-shadow : inset 10px 10px 10px 5px #888888
```
- **`<inset>`** — 그림자 효과가 컴포넌트 안쪽에 표시됩니다.
생략 시에는 outset으로 동작합니다.
NRE는 지원하지 않습니다.
- **`<offset>`** — 그림자 효과가 표시되는 위치를 설정합니다.

ListViewBandExpandbarControl 의 좌상단 위치를 기준으로 그림자 효과가 표시될 위치를 가로/세로 픽셀값으로 설정합니다.
- **`<horizontal>`** — 그림자 효과가 표시되는 가로 위치를 설정합니다.

음수로 설정 시 컴포넌트의 왼쪽에 그림자 효과가 표시됩니다.
pixel 단위로 입력하며 "px" 단위를 생략할 수 없습니다.
- **`<vertical>`** — 그림자 효과가 표시되는 세로 위치를 설정합니다.

음수로 설정 시 컴포넌트의 윗쪽에 그림자 효과가 표시됩니다.
pixel 단위로 입력하며 "px" 단위를 생략할 수 없습니다.
- **`<blur>`** — 그림자 효과에 blur를 설정합니다.
음수로 설정 시 blur가 적용되지 않습니다.
pixel 단위로 입력하며 "px" 단위를 생략할 수 없습니다.
- **`<spread>`** — 그림자를 확장하거나 축소합니다.
양수로 설정 시에는 그림자를 확장하고 음수로 설정 시에는 그림자를 축소합니다.
NRE는 지원하지 않습니다.
- **`<color>`** — 그림자 효과의 색을 색상이름 또는 색상코드로 설정할 수 있습니다.

값을 입력하지 않으면 브라우저별로 다르게 동작하거나 오동작할 수 있습니다.
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- box-shadow 속성값을 설정하지 않으면 undefined 가 설정되고, "none"으로 동작합니다.

- <blur> 값을 크게 설정하면 시스템 자원 요구량이 많아져 성능 저하의 원인이 됩니다.

- <inset>, <spread> 값은 NRE를 지원하지 않습니다. 
  넥사크로 스튜디오 디자인 창에서도 속성값 설정 시 변경된 디자인을 확인할 수 없습니다.


---

### color

> Components > Component > ListView > Objects > ListViewBandExpandbarControl > Property > color

**Description**

ListViewBandExpandbarControl 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandExpandbarControl.color
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

> Components > Component > ListView > Objects > ListViewBandExpandbarControl > Property > cursor

**Description**

ListViewBandExpandbarControl 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandExpandbarControl.cursor
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

> Components > Component > ListView > Objects > ListViewBandExpandbarControl > Property > font

**Description**

ListViewBandExpandbarControl 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandExpandbarControl.font
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

> Components > Component > ListView > Objects > ListViewBandExpandbarControl > Property > letter-spacing

**Description**

ListViewBandExpandbarControl 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandExpandbarControl.letter-spacing
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

### opacity

> Components > Component > ListView > Objects > ListViewBandExpandbarControl > Property > opacity

**Description**

ListViewBandExpandbarControl 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandExpandbarControl.opacity
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

### word-spacing

> Components > Component > ListView > Objects > ListViewBandExpandbarControl > Property > word-spacing

**Description**

ListViewBandExpandbarControl 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewBandExpandbarControl.word-spacing
```

**Setting Syntax**

```javascript
word-spacing ::= 'normal' | <nVal>'px'
```
```javascript
* XCSS
word-spacing : 30px ;
```
- **`"normal"`** — 텍스트의 단어 사이 간격을 설정하지 않습니다.

현재 font 에 맞는 기본형태로 텍스트가 표시됩니다.
- **`<nVal>`** — pixel 단위로 텍스트의 단어 사이 간격을 설정합니다.

**Remark**

- word-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.


---

## Components > Component > ListView > ListViewCellControl

### ListViewCellControl

> Components > Component > ListView > Objects > ListViewCellControl

**Description**

Cell 은 ListView 가 출력되는 최소단위로 Band 내에 표시되는 오브젝트입니다.

**Remark**

- 각 Cell 은 해당 Band 내에서 고유한 Cell 인덱스를 갖습니다.
  
- Cell 인덱스는 바인드 된 DataSet 의 데이터 갯수와는 관계가 없으며, ListView 에 정의된 포맷과 관계가 있습니다.
  
- Cell 의 일부 속성은 DataSet 의 Column 을 바인드 하거나 Expression 수식을 설정할 수 있습니다.
   Expression 수식에는 바인드 된 DataSet 의 메소드, Column ID, 접근가능한 영역에 정의된 함수 등을 사용할 수 있습니다.
  
- Expression 수식에 아래의 예약어를 사용하면 수식 실행 시 예약어에 상응하는 값으로 대체됩니다.
  > this : 수식이 정의된 Cell 오브젝트. ( Form 의 지시어가 아닙니다.)
  > comp : Cell 을 갖는 ListView 컴포넌트.
  > dataset : ListView 에 바인드된 DataSet 컴포넌트.
  > currow : 수식이 계산하고 있는 아이템의 인덱스.
  > [Column ID] : 수식이 계산하고 있는 아이템의 DataSet Column 값.
  > ListView 에 바인드 된 DataSet 의 속성과 메소드.
      ex) "dataset.rowcount", "dataset.colcouont", "dataset.rowposition", "dataset.getCount()" 등

**Property**

| Name | Description |
| --- | --- |
| accessibilityaction | ListViewCellControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다. |
| accessibilitydesclevel | ListViewCellControl 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다. |
| accessibilitydescription | ListViewCellControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다. |
| accessibilityenable | ListViewCellControl 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다. |
| accessibilitylabel | ListViewCellControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다. |
| accessibilityrole | ListViewCellControl에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다. |
| background | ListViewCellControl 의 배경 영역을 설정하는 속성입니다. |
| border-radius | Cell 의 모서리 모양을 설정하는 속성입니다. |
| bottom | Cell 을 표시하기 위한 하단 좌표값을 설정하는 속성입니다. |
| calendarautoselect | Cell 의 edittype 속성값이 "date" 일 때 편집모드용 컨트롤이 활성화 되면 텍스트를 전체선택 할지 설정하는 속성입니다. |
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
| calendardisplaynulltype | Cell 의 displaytype 속성값이 "date" 또는 "calendarcontrol" 이고 바인드 된 값이 "null" 인 경우 Cell 에 표시되는 값의 종류를 설정하는 속성입니다. |
| calendareditformat | Cell 의 edittype 속성값이 "date" 일 경우 입력받는 날짜의 형식을 설정하는 속성입니다. |
| calendarheadformat | Cell 이 Calendar 형식일 때 팝업달력의 상단에 표시되는 년/월의 순서를 설정하는 속성입니다. |
| calendarheadheight | Cell 이 Calendar 형식일 때 팝업달력에서 년/월이 표시되는 Head 영역의 높이를 설정하는 속성입니다. |
| calendarpopupsize | Cell 이 Calendar 형식일 때 팝업으로 표시되는 달력의 크기를 설정하는 속성입니다. |
| calendarpopuptype | Cell 이 Calendar 형식일 때 팝업달력(DatePicker)이 표시되는 방식을 설정하는 속성입니다. |
| calendarshowmonthspin | Cell 이 Calendar 형식일 때 팝업달력의 상단에 월 변경버튼을 표시할 지 설정하는 속성입니다. |
| calendarshowyearspin | Cell 이 Calendar 형식일 때 팝업달력의 상단에 연도 변경버튼을 표시할 지 설정하는 속성입니다. |
| calendartextcolorcol | Cell이 Calendar 형식일 때 Calendar 의 특정날짜에 날짜색을 표시하기 위해 calendardataset 속성에 설정된 Dataset 오브젝트의 Column을 설정하는 속성입니다. |
| calendartype | Cell 이 Calendar 형식일 때 편집모드용 컨트롤이 화면에 표시되는 형식을 설정하는 속성입니다. |
| calendarusetrailingday | Cell 이 Calendar 형식일 때 팝업달력의 시작/끝 여백에 전/후 달의 날짜를 표시할지 설정하는 속성입니다. |
| calendarweekformat | Cell 이 Calendar 형식일 때 팝업달력에 요일이 표시되는 형식을 설정하는 속성입니다. |
| checkboxsize | Cell 이 CheckBox 형식일 때 CheckBox 의 크기를 설정하는 속성입니다. |
| color | Cell 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| comboautoselect | Cell 이 Combo 형식일 때 편집모드용 컨트롤이 활성화 되면 텍스트를 전체선택 할지 설정하는 속성입니다. |
| combobuttonsize | Cell 이 Combo 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다. |
| combocodecol | Cell 이 Combo 형식일 때 Cell 의 아이템 리스트에서 코드값으로 사용될 Column 을 설정하는 속성입니다. |
| combodatacol | Cell 이 Combo 형식일 때 Cell 의 아이템 리스트에서 데이터값으로 사용될 Column 을 설정하는 속성입니다. |
| combodataset | Cell 이 Combo 형식일 때 Cell 의 아이템 리스트를 구성할 DataSet 의 ID를 설정하는 속성입니다. |
| combodisplaynulltext | Cell 이 Combo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시할 텍스트를 설정하는 속성입니다. |
| combodisplaynulltype | Cell 이 Combo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시되는 값의 종류를 설정하는 속성입니다. |
| combodisplayrowcount | Cell 이 Combo 형식일 때 아이템 리스트에 한번에 표시될 아이템의 갯수를 설정하는 속성입니다. |
| comboimemode | Cell 이 Combo 형식일 때 편집모드용 컨트롤에서 사용될 기본 입력 언어를 설정하는 속성입니다. |
| comboitemheight | Cell 이 Combo 형식일 때 아이템 리스트의 각 행높이를 설정하는 속성입니다. |
| combopopupsize | Cell 이 Combo 형식일 때 팝업으로 표시되는 아이템 리스트의 크기를 설정하는 속성입니다. |
| combopopuptype | Cell 이 Combo 형식일 때 아이템 리스트가 표시되는 방식을 설정하는 속성입니다. |
| comboscrollbarsize | Cell 이 Combo 형식일 때 아이템 리스트에 표시되는 스크롤바의 너비를 설정하는 속성입니다. |
| combotype | Cell 이 Combo 형식일 때 동작하는 방법을 설정하는 속성입니다. |
| cssclass | Cell 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다. |
| cursor | Cell 영역내에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| displaytype | Cell 이 편집모드가 아닐 때 바인드 된 데이터가 화면에 표시되는 형식을 설정하는 속성입니다. |
| editautoselect | Cell 의 edittype 속성값이 "text" 일 경우 편집모드용 컨트롤이 활성화 되면 텍스트를 전체선택 할지 설정하는 속성입니다. |
| editimeaction | 키보드에 하단 모서리에 표시되는 사용자 작업 버튼 UI와 동작을 설정하는 속성입니다. |
| editimemode | Cell 의 edittype 속성값이 "text" 일 때 편집모드용 컨트롤에서 사용될 기본 입력 언어를 설정하는 속성입니다. |
| editinputfilter | Cell 의 edittype 속성값이 "text" 일 때 편집모드용 컨트롤에서 입력을 제한 시킬 문자를 타입별로 설정하는 속성입니다. |
| editinputmode | Cell 의 edittype 속성값이 "text" 일 경우 편집모드용 컨트롤에 입력되는 영문자를 대문자 또는 소문자로 변환할지 설정하는 속성입니다. |
| editinputtype | Cell 의 edittype 속성값이 "text" 일 때 편집모드용 컨트롤에서 입력을 허용할 문자를 타입별로 설정하는 속성입니다. |
| editmaxlength | Cell 의 edittype 속성값이 "text" 일 때 편집모드용 컨트롤에 입력할 수 있는 문자열의 최대길이를 설정하는 속성입니다. |
| edittype | Cell 이 포커스를 받아 표시되는 편집모드용 컨트롤의 형식을 설정하는 속성입니다. |
| expandchar | Cell 의 확장버튼에 표시될 텍스트를 설정하는 속성입니다. |
| expandimage | Cell 의 확장버튼에 텍스트와 함께 표시할 이미지의 위치 경로를 설정하는 속성입니다. |
| expandshow | Cell 의 오른쪽에 확장버튼을 표시할지 설정하는 속성입니다. |
| expandsize | Cell 의 오른쪽에 표시되는 확장버튼의 크기를 설정하는 속성입니다. |
| expr | Cell 에 표시될 텍스트를 동적으로 생성하는 수식을 설정하는 속성입니다. |
| font | Cell 에서 사용하는 폰트를 설정하는 속성입니다. |
| height | Cell 을 표시하기 위한 높이를 설정하는 속성입니다. |
| imagestretch | Cell 의 크기에 맞게 이미지가 확대/축소되는 방식을 설정하는 속성입니다. |
| left | Cell 을 표시하기 위한 좌측 좌표값을 설정하는 속성입니다. |
| letter-spacing | ListViewCellControl 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다. |
| locale | Cell 에 적용될 국가 및 언어(locale)를 설정하는 속성입니다. |
| maskeditautoselect | Cell 의 edittype 속성값이 "mask" 일 때 편집모드용 컨트롤이 활성화 되면 텍스트를 전체선택 할지 설정하는 속성입니다. |
| maskeditclipmode | Cell 의 maskeditformat 속성에 설정된 형식 중 입력하지 않은 마스크에 대한 처리 방법을 결정하는 속성입니다. |
| maskeditformat | Cell 의 edittype 속성값이 "mask" 일 때 입력 받을 문자의 형식을 지정하는 속성입니다. |
| maskeditimeaction | 키보드에 하단 모서리에 표시되는 사용자 작업 버튼 UI와 동작을 설정하는 속성입니다. |
| maskeditlimitbymask | Cell 이 숫자를 입력받는 MaskEdit 형식일 때 마스크 값이 적용되는 부분을 설정하는 속성입니다. |
| maskeditmaskchar | Cell 의 maskeditformat 속성에 정의된 마스크 문자에 대응하는 문자를 지정하는 속성입니다. |
| maskeditpostfixtext | 표시되는 텍스트 뒤에 붙여서 표시할 문자열을 지정하는 속성입니다. |
| maskedittrimtype | Cell 의 maskeditformat 속성에 설정된 형식 중 좌우 공백에 대한 처리 방법을 결정하는 속성입니다. |
| maskedittype | Cell 의 edittype 속성값이 "mask" 일 때 Cell 에 입력되는 값의 형식을 설정하는 속성입니다. |
| maxheight | Cell 이 화면에 표시되는 최대 높이를 설정하는 속성입니다. |
| maxwidth | Cell 이 화면에 표시되는 최대 너비를 설정하는 속성입니다. |
| minheight | Cell 이 화면에 표시되는 최소 높이를 설정하는 속성입니다. |
| minwidth | Cell 이 화면에 표시되는 최소 너비를 설정하는 속성입니다. |
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
| name | ListViewCellControl 의 이름을 설정하는 속성입니다. |
| -nexa-border | Cell 의 테두리를 설정하는 속성입니다. |
| -nexa-edge | Cell 의 테두리(Border) 안쪽에 표시될 edge 이미지를 설정하는 속성입니다. |
| -nexa-padding | Cell 영역의 안쪽 여백을 설정하는 속성입니다. |
| -nexa-rtl-background-image | ListViewCellControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| -nexa-rtl-edge-image | ListViewCellControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-text-align | Cell 에 표시되는 텍스트 또는 컨텐츠의 가로 정렬 방식을 설정하는 속성입니다. |
| -nexa-text-decoration | Cell 에 표시되는 텍스트에 적용할 효과를 설정하는 속성입니다. |
| -nexa-vertical-align | Cell 에 표시되는 텍스트 또는 컨텐츠의 세로 정렬 방식을 설정하는 속성입니다. |
| -nexa-word-wrap | Cell 에 표시되는 텍스트가 출력영역보다 길 경우 자동으로 줄바꿈 되도록 설정하는 속성입니다. |
| opacity | Cell 영역의 투명도를 설정하는 속성입니다. |
| progressbarblockgap | Cell 의 displaytype 속성값이 "progressbarcontrol" 일 때 ProgressBar 의 진행 상태를 표시하는 블럭의 간격을 설정하는 속성입니다. |
| progressbarblocksize | Cell 의 displaytype 속성값이 "progressbarcontrol" 일 때  ProgressBar 의 진행 상태를 표시하는 블럭의 너비를 설정하는 속성입니다. |
| progressbardirection | Cell 의 displaytype 속성값이 "progressbarcontrol" 일 때 ProgressBar 의 진행 방향을 설정하는 속성입니다. |
| progressbarsmooth | Cell 의 displaytype 속성값이 "progressbarcontrol" 일 때 ProgressBar 가 표시되는 형태를 설정하는 속성입니다. |
| right | Cell 을 표시하기 위한 우측 좌표값을 설정하는 속성입니다. |
| rtl | ListViewCellControl 에서 내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다. |
| text | Cell 에 표시될 텍스트를 설정하는 속성입니다. |
| textareaacceptsenter | Cell 의 edittype 속성값이 "textarea" 일 때 편집영역에서 Enter 키 입력의 처리방식을 설정하는 속성입니다. |
| textareaautoselect | Cell 의 edittype 속성값이 "textarea" 일 때 편집모드용 컨트롤이 활성화 되면 텍스트를 전체선택 할지 설정하는 속성입니다. |
| textareaimemode | Cell 의 edittype 속성값이 "textarea" 일 때 편집모드용 컨트롤에서 사용될 기본 입력 언어를 설정하는 속성입니다. |
| textareainputfilter | Cell 의 edittype 속성값이 "textarea" 일 때 편집모드용 컨트롤에서 입력을 제한 시킬 문자를 타입별로 설정하는 속성입니다. |
| textareainputmode | Cell 의 edittype 속성값이 "textarea" 일 때 편집모드용 컨트롤에 입력되는 영문자를 대문자 또는 소문자로 변환할지 설정하는 속성입니다. |
| textareainputtype | Cell 의 edittype 속성값이 "textarea" 일 때 편집모드용 컨트롤에 입력을 허용할 문자를 타입별로 설정하는 속성입니다. |
| textareamaxlength | Cell 의 edittype 속성값이 "textarea" 일 때 편집모드용 컨트롤에 입력할 수 있는 문자열의 최대길이를 설정하는 속성입니다. |
| textareascrollbarsize | Cell 이 TextArea 형식일 때 표시되는 스크롤바의 크기를 설정하는 속성입니다. |
| textareascrollbartype | Cell 의 edittype 속성값이 "textarea" 일 때 편집모드용 컨트롤에 스크롤바가 표시되는 형식을 설정하는 속성입니다. |
| textareascrolltype | Cell 의 edittype 속성값이 "textarea" 일 때 편집모드용 컨트롤에 사용되는 스크롤의 종류를 설정하는 속성입니다. |
| tooltiptext | Cell 영역에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다. |
| tooltiptype | Cell 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다. |
| top | Cell 을 표시하기 위한 상단 좌표값을 설정하는 속성입니다. |
| width | Cell 을 표시하기 위한 너비를 설정하는 속성입니다. |
| word-spacing | Cell 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다. |

**Status**

컴포넌트가 비활성화된 상태

**Control**

| Name | TypeName |
| --- | --- |
| cellmaskedit | nexacro.MaskEdit |
| cellprogressbar | nexacro.ProgressBar |
| celltextarea | nexacro.TextArea |
| cellimage | nexacro.ImageAreaControl |
| cellexpandbutton | nexacro.Button |
| cellbutton | nexacro.Button |
| cellcalendar | nexacro.Calendar |
| cellcheckbox | nexacro.CheckBox |
| cellcombo | nexacro.Combo |
| celledit | nexacro.Edit |
| cellmulticombo | nexacro.MultiCombo |


---

### 속성 (Properties)

### -nexa-border

> Components > Component > ListView > Objects > ListViewCellControl > Property > -nexa-border

**Description**

Cell 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.border[= strborder]
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
this.ListView00.setCellProperty( "body", "col00", "border", "1px solid #999999" );
this.ListView00.setCellProperty( "body", "col00", "border", "1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999" );
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

> Components > Component > ListView > Objects > ListViewCellControl > Property > -nexa-edge

**Description**

Cell 의 테두리(Border) 안쪽에 표시될 edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.edge[= stredge]
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
this.ListView00.setCellProperty( "body", "col00", "edge", "URL('./images/border.png')" 5px 5px );
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

- ListViewCellControl 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.


◆ WRE 제약

- <fixedwidth>,<fixedheight> 값이 이미지 사이즈의 1/2 을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-padding

> Components > Component > ListView > Objects > ListViewCellControl > Property > -nexa-padding

**Description**

Cell 영역의 안쪽 여백을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.padding[= strpadding]
```

**Setting Syntax**

```javascript
strpadding ::= <npadding>'px'{4}
```
```javascript
* XCSS
-nexa-padding : 5px 5px 5px 5px;

* Script ( normal property )
this.ListView00.setCellProperty( "body", "col00", "padding", "5px 5px 5px 5px" );
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


---

### -nexa-rtl-background-image

> Components > Component > ListView > Objects > ListViewCellControl > Property > -nexa-rtl-background-image

**Description**

ListViewCellControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.-nexa-rtl-background-image
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

> Components > Component > ListView > Objects > ListViewCellControl > Property > -nexa-rtl-edge-image

**Description**

ListViewCellControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.-nexa-rtl-edge-image
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

> Components > Component > ListView > Objects > ListViewCellControl > Property > -nexa-text-align

**Description**

Cell 에 표시되는 텍스트 또는 컨텐츠의 가로 정렬 방식을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.textAlign[= strtextalign]
```

**Setting Syntax**

```javascript
strtextalign ::= 'left' | 'center' | 'right'
```
```javascript
* XCSS
-nexa-text-align : center;

* Script ( normal property )
this.ListView00.setCellProperty( "body", "col00", "textAlign", "center" );
```
- **`"left"`** — 텍스트 또는 컨텐츠를 왼쪽으로 정렬합니다.
- **`"center"`** — 텍스트 또는 컨텐츠를 가운데로 정렬합니다.
- **`"right"`** — 텍스트 또는 컨텐츠를 오른쪽으로 정렬합니다.

**Remark**

- -nexa-text-align 속성값을 설정하지 않고, XCSS 에 정의된 값이 없을 경우 Grid Contents Editor 에 "left" 가 표시됩니다.
   XCSS 에도 정의된 값이 없고, displaytype 속성값에 의해 결정된 Control 의 XCSS 에도 정의된 값이 없다면 하단의 기준으로 동작됩니다.
   > displaytype 속성값이 "normal" 이면 바인드된 DataSet 의 컬럼타입에 따라 달라집니다.
   > displaytype 속성값이 "mask, maskeditcontrol" 일 때 maskedittype 속성값이 "string" 이면 "left" 로 동작됩니다.
   > displaytype 속성값이 "mask, maskeditcontrol" 일 때 maskedittype 속성값이 "number" 이면 "right" 로 동작됩니다.
   > displaytype 속성값이 "progressbarcontrol, textareacontrol, editcontrol, combocontrol, calendarcontrol" 이면 "left" 로 동작됩니다.
   > displaytype 속성값이 "combotext, date, text, decoratetext, buttoncontrol, checkboxcontrol, imagecontrol, treeitemcontrol" 이면 "center" 로 동작됩니다.
   > displaytype 속성값이 "number, currency" 이면 "right" 로 동작됩니다.

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

> Components > Component > ListView > Objects > ListViewCellControl > Property > -nexa-text-decoration

**Description**

Cell 에 표시되는 텍스트에 적용할 효과를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.textDecoration[= strTxtDeco]
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
this.ListView00.setCellProperty( "body", "col00", "textDecoration", "underline overline" );
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

> Components > Component > ListView > Objects > ListViewCellControl > Property > -nexa-vertical-align

**Description**

Cell 에 표시되는 텍스트 또는 컨텐츠의 세로 정렬 방식을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.verticalAlign[= strvertalign]
```

**Setting Syntax**

```javascript
strvertalign ::= 'top' | 'middle' | 'bottom'
```
```javascript
* XCSS
-nexa-vertical-align : middle;

* Script ( normal property )
this.ListView00.setCellProperty( "body", "col00", "verticalAlign", "middle" );
```
- **`"top"`** — 텍스트 또는 컨텐츠를 위쪽으로 정렬합니다.
- **`"middle"`** — 텍스트 또는 컨텐츠를 가운데로 정렬합니다.
- **`"bottom"`** — 텍스트 또는 컨텐츠를 아래쪽으로 정렬합니다.

**Remark**

- -nexa-vertical-align 속성값을 설정하지 않으면 undefined 가 설정되고, "middle" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "verticalAlign"을 사용해야 합니다.


---

### -nexa-word-wrap

> Components > Component > ListView > Objects > ListViewCellControl > Property > -nexa-word-wrap

**Description**

Cell 에 표시되는 텍스트가 출력영역보다 길 경우 자동으로 줄바꿈 되도록 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.wordWrap[= strwordwrap]
```

**Setting Syntax**

```javascript
strwordwrap ::= 'none' | 'char' | 'english'
```
```javascript
* XCSS
-nexa-word-wrap : char;

* Script ( normal property )
this.ListView00.setCellProperty( "body", "col00", "wordWrap", "char" );
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

> Components > Component > ListView > Objects > ListViewCellControl > Property > accessibilityaction

**Description**

ListViewCellControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.accessibilityaction[= strAction]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "accessibilityaction", "Accessibility Action Message" );
this.ListView00.setCellProperty( "body", "col00", "accessibilityaction", "Select by direction key" );
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

> Components > Component > ListView > Objects > ListViewCellControl > Property > accessibilitydesclevel

**Description**

ListViewCellControl 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.accessibilitydesclevel[= enumLevel]
```

**Setting Syntax**

```javascript
enumLevel ::= 'all' | 'self' | 'child' | 'none'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "accessibilitydesclevel", "all" );
```
- **`"all"`** — ListViewCellControl 와 자식 컴포넌트에 대한 접근성을 모두 출력합니다.
- **`"self"`** — ListViewCellControl 의 접근성만 출력하고 자식 컴포넌트의 접근성은 출력하지 않습니다.
- **`"child"`** — ListViewCellControl 의 접근성은 출력하지 않고, 자식 컴포넌트의 접근성은 출력합니다.
- **`"none"`** — ListViewCellControl 와 자식 컴포넌트에 대한 접근성을 모두 출력하지 않습니다.

**Remark**

- accessibilitydesclevel 속성값을 설정하지 않으면 "all" 로 적용됩니다.

- Button 과 같이 자식 컴포넌트가 없는 컴포넌트는 "all" 또는 "child" 로 설정 시 "self" 로 적용됩니다.

- Div 와 같은 컨테이너 컴포넌트는 "child" 설정 시 실제 컨텐츠의 접근성만을 출력합니다.

- accessibilitydesclevel 속성은 선택상자의 이동에 영향을 주지 않으므로 방향키로 선택상자가 ListViewCellControl 에 이동되게 하지 않으려면 accessibilityenable 속성을 설정하여야 합니다.


---

### accessibilitydescription

> Components > Component > ListView > Objects > ListViewCellControl > Property > accessibilitydescription

**Description**

ListViewCellControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.accessibilitydescription[= strDescription]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "accessibilitydescription", "Option" );
```
- **`strDescription`** — accessibilitydescreadtype 속성값에 "description"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.


---

### accessibilityenable

> Components > Component > ListView > Objects > ListViewCellControl > Property > accessibilityenable

**Description**

ListViewCellControl 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.accessibilityenable[= bEnable]
```

**Setting Syntax**

```javascript
bEnable ::= 'true' | 'false'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "accessibilityenable", false );
```
- **`true`** — ListViewCellControl 에 선택상자가 이동되면 접근성 관련 속성값을 출력합니다.

방향키 또는 제스처로 선택상자 이동 시 Static 과 같이 포커스를 갖지 않는 컴포넌트에도 선택상자가 이동됩니다.
- **`false`** — ListViewCellControl 에 선택상자가 이동되어도 접근성 관련 속성값을 출력하지 않습니다.

데스크탑 환경에서 방향키로 선택상자가 ListViewCellControl 에 이동되지 않습니다.
모바일 환경에서 제스처로 선택상자가 ListViewCellControl 에 이동되지 않습니다.

**Remark**

- accessibilityenable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 선택상자 이동 시 컴포넌트의 ARIA-LABEL + Status + Role 순서로 정보가 조합되어 접근성으로 출력됩니다.
   각 정보의 조합순서는 스크린 리더의 종류에 따라 달라질 수 있습니다.
   > ARIA-LABEL : Environment 의 accessibilitydescreadtype 속성에 설정된 속성값이 반영됩니다.
   > Status : ListViewCellControl 의 현재 상태가 반영됩니다.
   > Role : accessibilityrole 속성값이 반영됩니다. accessibilityrole 속성값을 설정하지 않으면 ListViewCellControl 의 고유 Role 이 반영됩니다.

- accessibilityenable 속성값이 false 일 때 데스크탑 환경에서 방향키 외의 방법으로 선택상자를 ListViewCellControl 로 이동시키면 스크린 리딩 프로그램에서 임의의 값을 출력할 수 있습니다.


◆ 컨테이너 컴포넌트 선택상자 이동 제약

아래와 같은 환경에서 컨테이너 컴포넌트로 선택상자가 이동하지 않고 컨테이너 컴포넌트 내에 배치된 컴포넌트로 이동합니다.
- Android, iOS/iPadOS 운영체제에서 실행 시 (Div, PopupDiv, TabpageControl, View)
- Windows 운영체제에서 센스리더 가상커서 사용 시 (Div, PopupDiv, View)


---

### accessibilitylabel

> Components > Component > ListView > Objects > ListViewCellControl > Property > accessibilitylabel

**Description**

ListViewCellControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.accessibilitylabel[= strLabel]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "accessibilitylabel", "OK Button" ); 
this.ListView00.setCellProperty( "body", "col00", "accessibilitylabel", "[@static00]" ); 
this.ListView00.setCellProperty( "body", "col00", "accessibilitylabel", "[@static00][@static01]" ); 
this.ListView00.setCellProperty( "body", "col00", "accessibilitylabel", "[@static00][@static01][OK Button]" );
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

> Components > Component > ListView > Objects > ListViewCellControl > Property > accessibilityrole

**Description**

ListViewCellControl에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.accessibilityrole[= enumRole]
```

**Setting Syntax**

```javascript
enumRole ::= 'none' | 'alert' | 'application' | 'button' | 'calendar' | 'chart' | 'checkbox' | 'columnheader' | 'combobox' | 'datepicker' | 'edit' | 'fileupload' | 'form' | 'frame' | 'grid' | 'gridcell' | 'groupbox' | 'heading' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6' | 'image' | 'link' | 'listbox' | 'menubar' | 'progressbar' | 'radio' | 'rowheader' | 'scrollbar' | 'spin' | 'static' | 'statusbar' | 'tab' | 'tabpage' | 'textarea' | 'titlebar' | 'toolbar' | 'tooltip' | 'treegrid' | 'treeitem' | 'webbrowser'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "accessibilityrole", "none" );
this.ListView00.setCellProperty( "body", "col00", "accessibilityrole", "button" );
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

- accessibilityenable 속성값을 설정하지 않으면 ListViewCellControl의 기본 Role 로 적용됩니다.

- 추가적인 속성값이 필요한 Role 설정 시 ListViewCellControl에 해당 속성이 없으면 스크린 리더에 따라 정상적으로 정보를 읽지 못할 수 있습니다.


---

### background

> Components > Component > ListView > Objects > ListViewCellControl > Property > background

**Description**

ListViewCellControl 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.background[= strbackground]
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
this.ListView00.setCellProperty( "body", "col00", "background", "#ffffaa");
this.ListView00.setCellProperty( "body", "col00", "background", "URL('./images/smiley.gif')" no-repeat center center #ffffaa);
this.ListView00.setCellProperty( "body", "col00", "background", "linear-gradient( red , blue , yellow )");
this.ListView00.setCellProperty( "body", "col00", "background", "linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0))");
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

"left" 설정 시 ListViewCellControl 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 ListViewCellControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 ListViewCellControl 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 ListViewCellControl 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 ListViewCellControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 ListViewCellControl 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
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

0 보다 작거나 100 보다 큰 값을 설정 시 ListViewCellControl 의 영역을 벗어난 가상의 위치로 적용됩니다.

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
예를 들어 <angle> 값이 "to left" 이면 ListViewCellControl 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 ListViewCellControl 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

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

0 보다 작거나 100 보다 큰 값을 설정 시 ListViewCellControl 의 영역을 벗어난 가상의 위치로 적용됩니다.
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
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 ListViewCellControl 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

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

> Components > Component > ListView > Objects > ListViewCellControl > Property > border-radius

**Description**

Cell 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.borderRadius[= strborderradius]
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
this.ListView00.setCellProperty( "body", "col00", "borderRadius", "10px");
this.ListView00.setCellProperty( "body", "col00", "borderRadius", "5px 6px 10px / 5px 10px");
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

> Components > Component > ListView > Objects > ListViewCellControl > Property > bottom

**Description**

Cell 을 표시하기 위한 하단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.bottom[= nBottom]
```

**Setting Syntax**

```javascript
nBottom ::= [<strCellID> ':' ] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.ListView00.setCellProperty("body", "col00", "bottom", "10"); 
this.ListView00.setCellProperty("body", "col00", "bottom", "10px"); 
this.ListView00.setCellProperty("body", "col00", "bottom", "10%"); 
this.ListView00.setCellProperty("body", "col00", "bottom", "Cell00:10px"); 
this.ListView00.setCellProperty("body", "col00", "bottom", "Cell00:10%");
```
- **`<strCellID>`** — Cell 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 Cell의 ID 를 설정합니다.

기준 Cell 은 현재 Cell 과 밴드가 동일하여야 합니다.
또한, ListView 로딩 시 현재 Cell 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 밴드를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — Cell 의 하단 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCellID> 값을 생략했을 때 :
- "px": 밴드의 하단을 기준으로 Cell의 하단 위치 설정
- "%": 밴드의 height 속성값을 기준으로 Cell의 하단 위치 결정
- "em": Cell의 font-size 속성값을 기준으로 Cell의 하단 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 Cell의 하단 위치 결정

* <strCellID> 값을 설정했을 때 :
- "px":  <strCellID>의 top 속성값을 기준으로 Cell의 하단 위치 결정
- "%": <strCellID>의 height 속성값을 기준으로 Cell의 하단 위치 결정
<strCellID> 값 설정 시 "em", "rem" 단위는 지원하지 않습니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 기준 Cell 또는 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- 스크립트로 <strCellID> 값을 포함하여 bottom 속성값을 변경하면 <strCellID> 가 조건에 맞을 경우만 정상 적용됩니다.
  <strCellID> 가 조건에 맞지 않다면 bottom 속성값은 밴드를 기준으로 적용됩니다.


---

### calendarautoselect

> Components > Component > ListView > Objects > ListViewCellControl > Property > calendarautoselect

**Description**

Cell 의 edittype 속성값이 "date" 일 때 편집모드용 컨트롤이 활성화 되면 텍스트를 전체선택 할지 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.calendarautoselect[= bAutoselect]
```

**Setting Syntax**

```javascript
bAutoselect ::= 'true' | 'false'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "calendarautoselect", "true" );
```
- **`true`** — Cell 의 편집모드용 컨트롤이 활성화 될 때 텍스트가 전체선택 됩니다.
- **`false`** — Cell 의 편집모드용 컨트롤이 활성화 될 때 텍스트가 선택되지 않습니다.

**Remark**

- calendarautoselect 속성값을 설정하지 않으면 false 로 적용됩니다.


◆ web runtime environment 제약

- 마우스 또는 터치에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 정상동작합니다.
  그러나 setFocus() 메소드에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 되지 않을 수 있습니다.


---

### calendarbackgroundcol

> Components > Component > ListView > Objects > ListViewCellControl > Property > calendarbackgroundcol

**Description**

Cell이 Calendar 형식일 때 Calendar 의 특정날짜에 배경색을 표시하기 위해 calendardataset 속성에 설정된 Dataset 오브젝트의 Column을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.calendarbackgroundcol[= strColumnID]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "calendarbackgroundcol", "column0");
```
- **`strColumnID`** — 배경색이 정의된 Column 의 ID를 문자열로 설정합니다.

**Remark**

- calendardataset 속성에 설정된 Dataset 오브젝트의 Column만 설정할 수 있습니다.
- calendardatecol 속성에 설정된 특정날짜에 calendarbackgroundcol 에 설정된 배경색이 적용됩니다.


---

### calendarbordercol

> Components > Component > ListView > Objects > ListViewCellControl > Property > calendarbordercol

**Description**

Cell이 Calendar 형식일 때 Calendar 의 특정날짜에 테두리을 표시하기 위해 calendardataset 속성에 설정된 Dataset 오브젝트의 Column을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.calendarbordercol[= strColumnID]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "calendarbordercol", "column0");
```
- **`strColumnID`** — 테두리값이 정의된 Column 의 ID를 문자열로 설정합니다.

**Remark**

- calendardataset 속성에 설정된 Dataset 오브젝트의 Column만 설정할 수 있습니다. 
- calendardatecol 속성에 설정된 특정날짜에 calendarbordercol 에 설정된 테두리값을 적용됩니다.


---

### calendarbuttonsize

> Components > Component > ListView > Objects > ListViewCellControl > Property > calendarbuttonsize

**Description**

Cell 이 Calendar 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.calendarbuttonsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [<strHeight>]
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "calendarbuttonsize", "30"); 

this.ListView00.setCellProperty( "body", "col00", "calendarbuttonsize", "30 20");
```
- **`<strWidth>`** — 드롭다운 버튼의 너비를 픽셀 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 드롭다운 버튼의 높이를 픽셀 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- Cell 의 calendarbuttonsize 속성값을 설정하지 않으면 ListView 의 cellcalendarbuttonsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### calendardataset

> Components > Component > ListView > Objects > ListViewCellControl > Property > calendardataset

**Description**

Cell이 Calendar 형식일 때 Calendar 에 특정날짜를 표시하기 위해 Dataset 오브젝트 ID를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.calendardataset[= strDatasetID]
```

**Setting Syntax**

```javascript
ListViewCellContorl 
this.ListView00.setCellProperty( "body", "col00", "calendardataset", "Dataset00");
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

> Components > Component > ListView > Objects > ListViewCellControl > Property > calendardatecol

**Description**

Cell이 Calendar 형식일 때 Calendar 에 특정날짜를 표시하기 위해 calendardataset 속성에 설정된 Dataset 오브젝트의 Column을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.calendardatecol[= strColumnID]
```

**Setting Syntax**

```javascript
ListViewCellContorl 
this.ListView00.setCellProperty( "body", "col00", "calendardatecol", "column0");
```
- **`strColumnID`** — 특정날짜가 정의된 Column 의 ID를 문자열로 설정합니다.

**Remark**

- calendardataset 속성에 설정된 Dataset 오브젝트의 Column만 설정할 수 있습니다.
- calendardatecol 속성에 설정된 특정날짜에 calendarbackgroundcol, calendarbordercol, calendartextcolorcol 에 설정된 효과가 적용됩니다.


---

### calendardateformat

> Components > Component > ListView > Objects > ListViewCellControl > Property > calendardateformat

**Description**

Cell 의 displaytype 속성값이 "date" 또는 "calendarcontrol" 일 경우 표시되는 날짜의 형식을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.calendardateformat[= strFormat]
```

**Setting Syntax**

```javascript
strFormat ::= <maskchar> | 'LONGDATE' | 'SHORTDATE'

<maskchar> ::= [<Year>] [<Month>] [<Day>] [<Week>] [<Hour>] [<Minute>] [<Second>] [<MiliSec>]


* <maskchar>는 날짜와 시간을 표시하기 위한 마스크 문자의 조합으로 각 요소의 순서변경과 생략이 가능합니다.
```
```javascript
this.ListView00.setCellProperty( "body", "cell00", "calendardateformat", "yyyy-MM-dd ddd"); 

this.ListView00.setCellProperty( "body", "cell00", "calendardateformat", "yyyy-MM-dd ddd HH:mm:ss");
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


---

### calendardaysize

> Components > Component > ListView > Objects > ListViewCellControl > Property > calendardaysize

**Description**

Cell 이 Calendar 형식일 때 팝업으로 표시되는 달력의 각 날짜영역크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.calendardaysize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [<strHeight>]
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "calendardaysize", "10 10");
```
- **`<strWidth>`** — 팝업달력의 각 날짜영역 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 팝업달력의 각 날짜영역 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### calendardisplayinvalidtext

> Components > Component > ListView > Objects > ListViewCellControl > Property > calendardisplayinvalidtext

**Description**

Cell 이 Calendar 형식일 때 바인드 된 데이터값이 유효하지 않으면 대체되어 표시할 문자열을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.calendardisplayinvalidtext[= enumType]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", 0, "calendardisplayinvalidtext", "Data Error");
```
- **`strText`** — Cell 에 바인드 된 데이터가 NaN, ±Infinity, 유효하지 않은 값 일 때 Cell 에 표시될 대체 문자열을 설정합니다.

**Remark**

- calendardisplayinvalidtext 속성값을 설정하지 않으면 undefined 가 설정되고 "invalid value" 로 동작합니다.

- calendardisplayinvalidtype 속성값이 "invalidtext" 일 때만 적용되는 속성입니다.


---

### calendardisplayinvalidtype

> Components > Component > ListView > Objects > ListViewCellControl > Property > calendardisplayinvalidtype

**Description**

Cell 이 Calendar 형식일 때 바인드 된 데이터값이 유효하지 않으면 대체되어 표시할 형식을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.calendardisplayinvalidtype[= nHeight]
```

**Setting Syntax**

```javascript
enumType ::= 'default' | 'none' | 'invalidtext'
```
```javascript
this.ListView00.setCellProperty( "body", 0, "calendardisplayinvalidtype", "none" );
```
- **`"default"`** — Cell 에 "invalid text" 문자열을 표시합니다.
- **`"none"`** — Cell 에 바인드된 데이터값을 그대로 표시합니다.
- **`"invalidtext"`** — Cell 에 calendardisplayinvalidtext 속성값을 표시합니다.

**Remark**

- calendardisplayinvalidtype 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- 바인드 된 데이터가 NaN, ±Infinity, 유효하지 않은 값 일 때 적용되는 속성입니다.


---

### calendardisplaynulltext

> Components > Component > ListView > Objects > ListViewCellControl > Property > calendardisplaynulltext

**Description**

Cell 의 calendardisplaynulltype 속성값이 "nulltext" 일 경우 Cell 에 표시할 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.calendardisplaynulltext[= strText]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "calendardisplaynulltext", "No Data");
```
- **`strText`** — Cell 에 바인드된 데이터가 null 일 때 Cell 에 표시할 텍스트를 설정합니다.

**Remark**

- Cell 에 포커스가 없을 때 대체 텍스트가 표시됩니다.


---

### calendardisplaynulltype

> Components > Component > ListView > Objects > ListViewCellControl > Property > calendardisplaynulltype

**Description**

Cell 의 displaytype 속성값이 "date" 또는 "calendarcontrol" 이고 바인드 된 값이 "null" 인 경우 Cell 에 표시되는 값의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.calendardisplaynulltype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'default' | 'nulltext' | 'nullmask'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "calendardisplaynulltype", "default");
```
- **`"none"`** — 빈 문자열을 표시합니다.
- **`"default"`** — calendardateformat 속성값으로 설정된 형식에 따라 "0000/01/01" 값을 표시합니다.
- **`"nulltext"`** — calendardisplaynulltext 속성값을 표시합니다.
- **`"nullmask"`** — calendardateformat 속성값으로 설정된 형식에 빈 문자열을 표시합니다.


---

### calendareditformat

> Components > Component > ListView > Objects > ListViewCellControl > Property > calendareditformat

**Description**

Cell 의 edittype 속성값이 "date" 일 경우 입력받는 날짜의 형식을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.calendareditformat[= strFormat]
```

**Setting Syntax**

```javascript
strFormat ::= <maskchar> | 'LONGDATE' | 'SHORTDATE'

<maskchar> ::= [<Year>] [<Month>] [<Day>] [<Hour>] [<Minute>] [<Second>]


* <maskchar>는 날짜와 시간을 입력하기 위한 마스크 문자의 조합으로 각 요소의 순서변경과 생략이 가능합니다.
```
```javascript
this.ListView00.setCellProperty( "body", "cell00", "calendareditformat", "yyyy-MM-dd"); 

this.ListView00.setCellProperty( "body", "cell00", "calendareditformat", "yyyy-MM-dd HH:mm:ss");
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

> Components > Component > ListView > Objects > ListViewCellControl > Property > calendarheadformat

**Description**

Cell 이 Calendar 형식일 때 팝업달력의 상단에 표시되는 년/월의 순서를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.calendarheadformat[= strFormat]
```

**Setting Syntax**

```javascript
strFormat ::= 'yyyy.MM' | 'MM.yyyy'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "calendarheadformat", "MM.yyyy");
```
- **`"yyyy.MM"`** — 팝업달력 상단에 년,월 순으로 표시됩니다.
- **`"MM.yyyy"`** — 팝업달력 상단에 월,년 순으로 표시됩니다.

**Remark**

- calendarheadformat 속성값을 설정하지 않거나 허용하지 않는 값을 설정하면 "yyyy.MM" 으로 적용됩니다.


---

### calendarheadheight

> Components > Component > ListView > Objects > ListViewCellControl > Property > calendarheadheight

**Description**

Cell 이 Calendar 형식일 때 팝업달력에서 년/월이 표시되는 Head 영역의 높이를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.calendarheadheight[= nHeight]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "calendarheadheight", "60");
```
- **`nHeight`** — 년/월이 표시되는 Head 영역의 높이를 픽셀 단위의 숫자로 설정합니다.


---

### calendarpopupsize

> Components > Component > ListView > Objects > ListViewCellControl > Property > calendarpopupsize

**Description**

Cell 이 Calendar 형식일 때 팝업으로 표시되는 달력의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.calendarpopupsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.ListView00.setCellProperty( "body", "cell00", "calendarpopupsize", "500 400");
```
- **`<strWidth>`** — 팝업달력의 너비를 픽셀 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 팝업달력의 높이를 픽셀 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- calendarpopupsize 속성값을 설정하지 않으면 ListView 의 cellcalendarpopupsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### calendarpopuptype

> Components > Component > ListView > Objects > ListViewCellControl > Property > calendarpopuptype

**Description**

Cell 이 Calendar 형식일 때 팝업달력(DatePicker)이 표시되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.calendarpopuptype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'normal' | 'center' | 'system'
```
```javascript
this.ListView00.setCellProperty( "body", "cell00", "calendarpopuptype", "system");
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

- calendarpopuptype 속성값을 설정하지 않으면 ListView 의 cellcalendarpopuptype 속성값이 적용됩니다.

- calendartype 속성값이 "normal" 일때만 적용되며 모바일환경 같은 특별한 경우에 제한적으로 사용해야 하는 속성입니다.

- 다중 모니터의 경우 ListView 가 표시되고 있는 모니터를 기준으로 팝업달력이 표시됩니다.


---

### calendarshowmonthspin

> Components > Component > ListView > Objects > ListViewCellControl > Property > calendarshowmonthspin

**Description**

Cell 이 Calendar 형식일 때 팝업달력의 상단에 월 변경버튼을 표시할 지 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.calendarshowmonthspin[= bShow]
```

**Setting Syntax**

```javascript
bShow ::= 'true' | 'false'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "calendarshowmonthspin", "true");
```
- **`"true"`** — 팝업달력 Head 영역에 표시되는 월의 오른쪽에 변경버튼을 항상 표시합니다.
- **`"false"`** — 팝업달력 Head 영역에 표시되는 월이 선택되면 변경버튼을 표시합니다.

**Remark**

- calendarshowmonthspin 속성값을 설정하지 않으면 "false"로 적용됩니다.

**See Also**

ListViewCellControl.calendarshowyearspin


---

### calendarshowyearspin

> Components > Component > ListView > Objects > ListViewCellControl > Property > calendarshowyearspin

**Description**

Cell 이 Calendar 형식일 때 팝업달력의 상단에 연도 변경버튼을 표시할 지 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.calendarshowyearspin[= bShow]
```

**Setting Syntax**

```javascript
bShow ::= 'true' | 'false'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "calendarshowyearspin", "true");
```
- **`"true"`** — 팝업달력 Head 영역에 표시되는 연도의 오른쪽에 변경버튼을 항상 표시합니다.
- **`"false"`** — 팝업달력 Head 영역에 표시되는 연도가 선택되면 변경버튼을 표시합니다.

**Remark**

- calendarshowyearspin 속성값을 설정하지 않으면 "false"로 적용됩니다.

**See Also**

ListViewCellControl.calendarshowmonthspin


---

### calendartextcolorcol

> Components > Component > ListView > Objects > ListViewCellControl > Property > calendartextcolorcol

**Description**

Cell이 Calendar 형식일 때 Calendar 의 특정날짜에 날짜색을 표시하기 위해 calendardataset 속성에 설정된 Dataset 오브젝트의 Column을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.calendartextcolorcol[= strColumnID]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "calendartextcolorcol", "column0");
```
- **`strColumnID`** — 날짜색이 정의된 Column 의 ID를 문자열로 설정합니다.

**Remark**

- calendardataset 속성에 설정된 Dataset 오브젝트 의 Column만 설정할 수 있습니다. 
- calendardatecol 속성에 설정된 특정날짜에 calendartextcolorcol 에 설정된 날짜색이 적용됩니다.


---

### calendartype

> Components > Component > ListView > Objects > ListViewCellControl > Property > calendartype

**Description**

Cell 이 Calendar 형식일 때 편집모드용 컨트롤이 화면에 표시되는 형식을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.calendartype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'normal' | 'monthonly' | 'spin'
```
```javascript
this.ListView00.setCellProperty( "body", "cell00", "calendartype", "normal");
```
- **`"normal"`** — 날짜 입력영역과 팝업달력 드롭다운 버튼이 있는 Calendar가 표시됩니다.
- **`"monthonly"`** — 일반적인 월 단위 달력형태의 Calendar가 표시됩니다.
- **`"spin"`** — 날짜 입력영역과 날짜값을 변경하는 스핀버튼이 있는 Calendar가 표시됩니다.

**Remark**

- calendartype 속성값을 설정하지 않으면 "normal"로 적용됩니다.


---

### calendarusetrailingday

> Components > Component > ListView > Objects > ListViewCellControl > Property > calendarusetrailingday

**Description**

Cell 이 Calendar 형식일 때 팝업달력의 시작/끝 여백에 전/후 달의 날짜를 표시할지 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.calendarusetrailingday[= bTrail]
```

**Setting Syntax**

```javascript
bTrail ::= 'true' | 'false'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "calendarusetrailingday", "true");
```
- **`"true"`** — 팝업달력의 시작/끝 여백에 전/후 달의 날짜를 표시합니다.
- **`"false"`** — 팝업달력의 시작/끝 여백을 그대로 표시합니다.

**Remark**

- calendarusetrailingday 속성값을 설정하지 않으면 "false"로 적용됩니다.

- calendarusetrailingday 속성값을 "false"로 설정하면 전/후 달의 날짜가 표시되지 않고 선택할 수 없습니다.


---

### calendarweekformat

> Components > Component > ListView > Objects > ListViewCellControl > Property > calendarweekformat

**Description**

Cell 이 Calendar 형식일 때 팝업달력에 요일이 표시되는 형식을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.calendarweekformat[= strFormat]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty("body", "col00", "calendarweekformat","S M T W T F S");
```
- **`strFormat`** — 팝업달력에 표시되는 요일을 공백문자로 구분하여 문자열로 설정합니다.

null 또는 ""(Empty String) 설정 시 국가별 설정에 정의된 기준으로 요일이 표시됩니다.
공백문자(space) 설정 시 팝업달력에 요일이 표시되지 않습니다.


---

### checkboxsize

> Components > Component > ListView > Objects > ListViewCellControl > Property > checkboxsize

**Description**

Cell 이 CheckBox 형식일 때 CheckBox 의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.checkboxsize[= nSize]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "checkboxsize", "25");
```
- **`nSize`** — Cell 에 표시되는 CheckBox 의 크기를 픽셀 단위의 숫자로 설정합니다.

설정값은 표시되는 CheckBox 의 가로/세로 크기에 동일하게 적용됩니다.

**Remark**

- Cell 의 edittype 속성값이 "checkbox" 일 때 Cell 에 표시되는 CheckBox 에 적용됩니다.
   또는 Cell 의 displaytype 속성값이 "checkboxcontrol" 일 때 Cell 에 표시되는 CheckBox 에 적용됩니다.

- checkboxsize 속성값을 설정하지 않으면 ListView 의 cellcheckboxsize 속성값이 적용됩니다.
   checkboxsize, cellcheckboxsize 속성을 모두 설정하지 않으면 테마에 정의된 CheckBox 이미지 크기에 맞게 적용됩니다.

- 테마에서 CheckBox 이미지 크기는 ListViewCellControl 하위의 cellcheckbox 셀렉터에 정의됩니다.

- 테마에 정의된 CheckBox 이미지 크기보다 checkboxsize 속성값을 작게 설정할 경우 이미지가 잘려서 표시됩니다.


---

### color

> Components > Component > ListView > Objects > ListViewCellControl > Property > color

**Description**

Cell 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.color[= strcolor]
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
this.ListView00.setCellProperty( "body", "col00", "color", "#999999");
this.ListView00.setCellProperty( "body", "col00", "color", "rgb(255,0,0)");
this.ListView00.setCellProperty( "body", "col00", "color", "red");
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

### comboautoselect

> Components > Component > ListView > Objects > ListViewCellControl > Property > comboautoselect

**Description**

Cell 이 Combo 형식일 때 편집모드용 컨트롤이 활성화 되면 텍스트를 전체선택 할지 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.comboautoselect[= bAutoselect]
```

**Setting Syntax**

```javascript
bAutoselect ::= 'true' | 'false'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "comboautoselect", "true" );
```
- **`true`** — Cell 의 편집모드용 컨트롤이 활성화 될 때 텍스트가 전체선택 됩니다.
- **`false`** — Cell 의 편집모드용 컨트롤이 활성화 될 때 텍스트가 선택되지 않습니다.

**Remark**

- comboautoselect 속성값을 설정하지 않으면 false 로 적용됩니다.

- Cell 이 Combo 형식일 때 편집영역이 활성화 되려면 edittype 속성값이 "combo" 이고, combotype 속성값이 "dropdown" 이외의 값이어야 합니다.


◆ web runtime environment 제약

- 마우스 또는 터치에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 정상동작합니다.
  그러나 setFocus() 메소드에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 되지 않을 수 있습니다.


---

### combobuttonsize

> Components > Component > ListView > Objects > ListViewCellControl > Property > combobuttonsize

**Description**

Cell 이 Combo 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.combobuttonsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.ListView00.setCellProperty( "body", "cell00", "combobuttonsize", "30"); 

this.ListView00.setCellProperty( "body", "cell00", "combobuttonsize", "30 20");
```
- **`<strWidth>`** — 드롭다운 버튼의 너비를 픽셀 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 드롭다운 버튼의 높이를 픽셀 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- combobuttonsize 속성값을 설정하지 않으면 ListView 의 cellcombobuttonsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### combocodecol

> Components > Component > ListView > Objects > ListViewCellControl > Property > combocodecol

**Description**

Cell 이 Combo 형식일 때 Cell 의 아이템 리스트에서 코드값으로 사용될 Column 을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.combocodecol[= strColumnID]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "combocodecol", "column0");
```
- **`strColumnID`** — Cell 의 combodataset 속성에 설정된 DataSet 의 Column 중 코드값으로 사용할 Column 의 ID 를 문자열로 설정합니다.

**Remark**

- Cell 의 edittype 속성값이 "combo" 일 경우 적용되는 속성입니다.
   Cell 의 displaytype 속성값이 "combotext" 또는 "combocontrol" 일 경우 적용되는 속성입니다.

- combocodecol 속성은 Body, Detail 밴드의 Cell 에만 적용되는 속성입니다.

- combocodecol 속성을 설정하지 않으면 내부적으로 combodatacol 속성값을 사용합니다.

- combocodecol 속성에 설정된 Column 의 값은 아이템 리스트에 표시되지 않고 각 아이템의 코드값으로 처리됩니다.
   combodatacol 속성에 설정된 Column 의 값은 아이템 리스트에 표시되며 각 아이템의 데이터값으로 처리됩니다.

- 아이템 리스트의 코드값은 아이템을 구분하는 유일값으로 중복값을 가질 수 없습니다.
   만일 중복된 코드값이 존재할 경우 중복코드값의 첫번째 아이템이 항상 선택처리됩니다.
   
- Cell 에서 선택된 아이템의 코드값은 Cell 의 text 속성에 저장되고 ListView 에 바인딩 된 DataSet 에 반영됩니다.
   Cell 에는 선택된 코드값에 해당하는 아이템 리스트의 데이터값이 텍스트로 표시됩니다.


---

### combodatacol

> Components > Component > ListView > Objects > ListViewCellControl > Property > combodatacol

**Description**

Cell 이 Combo 형식일 때 Cell 의 아이템 리스트에서 데이터값으로 사용될 Column 을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.combodatacol[= strColumnID]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "combodatacol", "column1");
```
- **`strColumnID`** — Cell 의 combodataset 속성에 설정된 DataSet 의 Column 중 데이터값으로 사용할 Column 의 ID 를 문자열로 설정합니다.

**Remark**

- Cell 의 edittype 속성값이 "combo" 일 경우 적용되는 속성입니다.
   Cell 의 displaytype 속성값이 "combotext" 또는 "combocontrol" 일 경우 적용되는 속성입니다.

- combodatacol 속성은 Body, Detail 밴드의 Cell 에만 적용되는 속성입니다.

- combodatacol 속성을 설정하지 않으면 내부적으로 combocodecol 속성값을 사용합니다.

- combodatacol 속성에 설정된 Column 의 값은 아이템 리스트에 표시되며 각 아이템의 데이터값으로 처리됩니다.
   combocodecol 속성에 설정된 Column 의 값은 아이템 리스트에 표시되지 않고 각 아이템의 코드값으로 처리됩니다.

- 아이템 리스트의 코드값은 아이템을 구분하는 유일값으로 중복값을 가질 수 없습니다.
   만일 중복된 코드값이 존재할 경우 중복코드값의 첫번째 아이템이 항상 선택처리됩니다.
   
- Cell 에서 선택된 아이템의 코드값은 Cell 의 text 속성에 저장되고 Grid 에 바인딩 된 DataSet 에 반영됩니다.
   Cell 에는 선택된 코드값에 해당하는 아이템 리스트의 데이터값이 텍스트로 표시됩니다.


---

### combodataset

> Components > Component > ListView > Objects > ListViewCellControl > Property > combodataset

**Description**

Cell 이 Combo 형식일 때 Cell 의 아이템 리스트를 구성할 DataSet 의 ID를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.combodataset[= strDatasetID]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "combodataset", "Dataset00");
```
- **`strDatasetID`** — Cell 의 아이템 리스트를 구성할 DataSet 의 ID 를 문자열로 설정합니다.

**Remark**

- Cell 에서 Combo 아이템 리스트를 사용하기 위해서는 combocodecol 과 combodatacol 중 한개 속성과 combodataset 속성을 설정하여야 합니다.

- combodataset 속성에 설정한 DataSet 이 존재하지 않거나 데이터가 없을 경우 아이템 리스트가 정상적으로 표시되지 않습니다.

- combodataset 속성은 Body, Detail 밴드의 Cell 에만 적용되는 속성입니다.


---

### combodisplaynulltext

> Components > Component > ListView > Objects > ListViewCellControl > Property > combodisplaynulltext

**Description**

Cell 이 Combo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시할 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.combodisplaynulltext[= strText]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "combodisplaynulltext", "No Data");
```
- **`strText`** — Cell 에 바인드 된 값과 일치하는 아이템이 없을 경우 표시할 텍스트를 설정합니다.

**Remark**

- combodisplaynulltype 속성값이 "nulltext" 일 때만 적용되는 속성입니다.

- Cell 에 바인드된 값이 Combo 아이템 리스트의 코드값에 없고, Cell 이 포커스 되지 않았을 때 대체 텍스트가 표시됩니다.


---

### combodisplaynulltype

> Components > Component > ListView > Objects > ListViewCellControl > Property > combodisplaynulltype

**Description**

Cell 이 Combo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시되는 값의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.combodisplaynulltype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'nulltext'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "combodisplaynulltype", "nulltext" );
```
- **`"none"`** — Cell 에 바인드된 값과 일치하는 아이템이 없을 경우 빈 문자열을 표시합니다.
- **`"nulltext"`** — Cell 에 바인드된 값과 일치하는 아이템이 없을 경우 combodisplaynulltext 속성값을 표시합니다.

**Remark**

- combodisplaynulltype 속성값을 설정하지 않으면 "none" 으로 적용됩니다.

- ListView 의 Body,Detail 밴드에 속한 Cell 에만 적용되는 속성으로 "BIND" 또는 "EXPR" 형식으로 설정할 수 있습니다.


---

### combodisplayrowcount

> Components > Component > ListView > Objects > ListViewCellControl > Property > combodisplayrowcount

**Description**

Cell 이 Combo 형식일 때 아이템 리스트에 한번에 표시될 아이템의 갯수를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.combodisplayrowcount[= nRowNum]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "combodisplayrowcount", "5");
```
- **`nRowNum`** — 아이템 리스트에 표시될 아이템의 갯수를 숫자로 설정합니다.

undefined 를 설정하면 아이템 리스트가 표시되는 공간에 맞게 자동으로 갯수가 설정됩니다.

**Remark**

- combodisplayrowcount 속성은 Body, Detail 밴드에 속한 Cell 만 적용되는 속성입니다.

- combodisplayrowcount 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- combodisplayrowcount 속성값 보다 아이템의 갯수가 작으면 아이템 갯수에 맞게 리스트가 표시됩니다.

- combodisplayrowcount 속성값 보다 아이템의 갯수가 많으면 아이템 리스트에 스크롤이 표시됩니다.

- Combo 하단에 아이템 3개를 표시할 공간이 없다면 아이템 리스트가 Combo 상단에 표시됩니다.
   상/하단 모두 아이템 3개를 표시할 공간이 없다면 더 넓은 방향으로 아이템 리스트가 표시됩니다.


---

### comboimemode

> Components > Component > ListView > Objects > ListViewCellControl > Property > comboimemode

**Description**

Cell 이 Combo 형식일 때 편집모드용 컨트롤에서 사용될 기본 입력 언어를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.comboimemode[= enumImemode]
```

**Setting Syntax**

```javascript
enumImemode ::= 'none' | 'alpha' | 'alpha,full' | 'hangul' | 'hangul,full' | 'katakana' | 'katakana,full' | 'hiragana' | 'direct'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "comboimemode", "alpha" );
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

- Cell 이 포커스를 받아 편집모드용 컨트롤이 활성화 될 때 IME가 재설정됩니다.

- 일부 환경에서만 지원하는 속성이므로 상단의 지원환경을 확인하시기 바랍니다.
   > Windows NRE, Android NRE에서만 지원하는 속성입니다.
   > macOS NRE, iOS/iPadOS NRE, WRE에서는 지원하지 않는 속성입니다.


---

### comboitemheight

> Components > Component > ListView > Objects > ListViewCellControl > Property > comboitemheight

**Description**

Cell 이 Combo 형식일 때 아이템 리스트의 각 행높이를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.comboitemheight[= nHeight]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "comboitemheight", "30");
```
- **`nHeight`** — 각 아이템이 표시되는 행의 높이를 픽셀 단위의 숫자로 설정합니다.

**Remark**

- comboitemheight 속성을 설정하지 않으면 글자 크기를 기준으로 행의 높이를 자동 계산합니다.


---

### combopopupsize

> Components > Component > ListView > Objects > ListViewCellControl > Property > combopopupsize

**Description**

Cell 이 Combo 형식일 때 팝업으로 표시되는 아이템 리스트의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.combopopupsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [<strHeight>]
```
```javascript
this.ListView00.setCellProperty( "body", "cell00", "combopopupsize", "500 400");
```
- **`<strWidth>`** — 아이템 리스트의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 아이템 리스트의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- combopopupsize 속성값을 설정하지 않으면 ListView 의 cellcombopopupsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### combopopuptype

> Components > Component > ListView > Objects > ListViewCellControl > Property > combopopuptype

**Description**

Cell 이 Combo 형식일 때 아이템 리스트가 표시되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.combopopuptype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'normal' | 'center'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "combopopuptype", "center");
```
- **`"none"`** — 아이템 리스트를 화면에 표시하지 않습니다.
- **`"normal"`** — 아이템 리스트가 표시되는 일반적인 규칙을 따릅니다.
- **`"center"`** — 어플리케이션이 실행중인 화면의 중앙에 아이템 리스트가 표시됩니다

**Remark**

- combopopuptype 속성값을 설정하지 않으면 ListView 의 cellcombopopuptype 속성값이 적용됩니다.

- 모바일환경 같은 특별한 경우에 제한적으로 사용해야 하는 속성입니다.

- 다중 모니터의 경우 ListView 가 표시되고 있는 모니터를 기준으로 아이템 리스트가 표시됩니다.


---

### comboscrollbarsize

> Components > Component > ListView > Objects > ListViewCellControl > Property > comboscrollbarsize

**Description**

Cell 이 Combo 형식일 때 아이템 리스트에 표시되는 스크롤바의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.comboscrollbarsize[= nWidth]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "comboscrollbarsize", "20" );
```
- **`nWidth`** — 스크롤바의 너비를 픽셀 단위의 숫자로 설정합니다.

**Remark**

- scrollbarsize 속성값을 변경하면 스크롤바 내부버튼의 높이와 너비가 같이 변경됩니다.


---

### combotype

> Components > Component > ListView > Objects > ListViewCellControl > Property > combotype

**Description**

Cell 이 Combo 형식일 때 동작하는 방법을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.combotype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'dropdown' | 'search' | 'filter' | 'filterlike' | 'caseisearch' | 'caseifilter' | 'caseifilterlike'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "combotype", "caseifilter");
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

### cssclass

> Components > Component > ListView > Objects > ListViewCellControl > Property > cssclass

**Description**

Cell 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.cssclass[= strcssclass]
```

**Setting Syntax**

```javascript
strcssclass ::= <ClassName> [ , &ltClassName> ]*
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "cssclass", "TestClass" );
this.ListView00.setCellProperty( "body", "col00", "cssclass", "TestClass,TestClass2" );
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

> Components > Component > ListView > Objects > ListViewCellControl > Property > cursor

**Description**

Cell 영역내에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.cursor[= strCursor]
```

**Setting Syntax**

```javascript
strCursor ::= 'none' | 'auto' | 'default' | 'copy' | 'crosshair' | 'help' | 'move' | 'not-allowed' | 'pointer' | 'progress' | 'text' | 'wait' | 'ew-resize' | 'e-resize' | 'w-resize' | 'ns-resize' | 'n-resize' | 's-resize' | 'nesw-resize' | 'ne-resize' | 'sw-resize' | 'nwse-resize' | 'nw-resize' | 'se-resize'
```
```javascript
* XCSS
cursor : default;

* Script ( normal property )
this.ListView00.setBandProperty( "body", "cursor", "default" );
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

> Components > Component > ListView > Objects > ListViewCellControl > Property > displaytype

**Description**

Cell 이 편집모드가 아닐 때 바인드 된 데이터가 화면에 표시되는 형식을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.displaytype[= enumDpType]
```

**Setting Syntax**

```javascript
enumDpType ::= 'normal' | 'none' | 'buttoncontrol' | 'calendarcontrol' | 'checkboxcontrol' | 'combocontrol' | 'combotext' | 'currency' | 'date' | 'decoratetext' | 'editcontrol' | 'imagecontrol' | 'mask' | 'maskeditcontrol' | 'multicombocontrol' | 'number' | 'progressbarcontrol' | 'text' | 'textareacontrol'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "displaytype", "normal" );
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
- **`"text"`** — Cell 에 바인드 된 데이터가 텍스트로 표시됩니다.

바인드 된 데이터에 개행문자가 있을 경우 줄바꿈되어 표시됩니다.
- **`"textareacontrol"`** — Cell 영역이 TextArea 컨트롤 형태로 표시되고, 바인드 된 데이터는 텍스트로 표시됩니다.

바인드 된 데이터에 개행문자가 있을 경우 줄바꿈되어 표시됩니다.

**Remark**

- displaytype 속성값을 설정하지 않으면 "normal" 로 적용됩니다.

- Body, Detail 밴드에 속한 Cell 에만 적용되는 속성입니다.

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

> Components > Component > ListView > Objects > ListViewCellControl > Property > editautoselect

**Description**

Cell 의 edittype 속성값이 "text" 일 경우 편집모드용 컨트롤이 활성화 되면 텍스트를 전체선택 할지 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.editautoselect[= bAutoselect]
```

**Setting Syntax**

```javascript
bAutoselect ::= 'true' | 'false'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "editautoselect", "true" );
```
- **`true`** — Cell 의 편집모드용 컨트롤이 활성화 될 때 텍스트가 전체선택 됩니다.
- **`false`** — Cell 의 편집모드용 컨트롤이 활성화 될 때 텍스트가 선택되지 않습니다.

**Remark**

- editautoselect 속성값을 설정하지 않으면 false 로 적용됩니다.


◆ web runtime environment 제약

- 마우스 또는 터치에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 정상동작합니다.
  그러나 setFocus() 메소드에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 되지 않을 수 있습니다.


---

### editimeaction

> Components > Component > ListView > Objects > ListViewCellControl > Property > editimeaction

**Description**

키보드에 하단 모서리에 표시되는 사용자 작업 버튼 UI와 동작을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.editimeaction[= enumEditimeaction]
```

**Setting Syntax**

```javascript
enumEditimeaction ::= 'none' | 'next' | 'previous'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "editimeaction", "none" );
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

> Components > Component > ListView > Objects > ListViewCellControl > Property > editimemode

**Description**

Cell 의 edittype 속성값이 "text" 일 때 편집모드용 컨트롤에서 사용될 기본 입력 언어를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.editimemode[= enumImemode]
```

**Setting Syntax**

```javascript
enumImemode ::= 'none' | 'alpha' | 'alpha,full' | 'hangul' | 'hangul,full' | 'katakana' | 'katakana,full' | 'hiragana' | 'direct'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "editimemode", "alpha" );
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

- Cell 이 포커스를 받아 편집모드용 컨트롤이 활성화 될 때 IME가 재설정됩니다.

- 일부 환경에서만 지원하는 속성이므로 상단의 지원환경을 확인하시기 바랍니다.
   > Windows NRE, Android NRE에서만 지원하는 속성입니다.
   > macOS NRE, iOS/iPadOS NRE, WRE에서는 지원하지 않는 속성입니다.


---

### editinputfilter

> Components > Component > ListView > Objects > ListViewCellControl > Property > editinputfilter

**Description**

Cell 의 edittype 속성값이 "text" 일 때 편집모드용 컨트롤에서 입력을 제한 시킬 문자를 타입별로 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.editinputfilter[= strInputfilter]
```

**Setting Syntax**

```javascript
strInputfilter ::= 'none' | <filter>

<filter> ::= <inputfilter> | <inputfilter> ',' <filter>
<inputfilter> ::= 'alpha' | 'digit' | 'comma' | 'dot' | 'sign' | 'space' | 'symbol'

* 각 타입값을 콤마(",")로 구분하여 중복 설정할 수 있습니다.
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "editinputfilter", "dot" ); 

this.ListView00.setCellProperty( "body", "col00", "editinputfilter", "dot,comma" ); 

this.ListView00.setCellProperty( "body", "col00", "editinputfilter", "dot,comma,sign" );
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

- editinputfilter 속성은 사용자가 편집모드용 컨트롤에서 직접 입력할 때만 적용됩니다.
   스크립트로 Cell 값을 설정할 때는 적용되지 않습니다.

- 일본어 입력 시 글자 조합이 완료된 후 editinputfilter 속성값이 적용됩니다.


---

### editinputmode

> Components > Component > ListView > Objects > ListViewCellControl > Property > editinputmode

**Description**

Cell 의 edittype 속성값이 "text" 일 경우 편집모드용 컨트롤에 입력되는 영문자를 대문자 또는 소문자로 변환할지 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.editinputmode[= enumInputmode]
```

**Setting Syntax**

```javascript
enumInputmode ::= 'normal' | 'upper' | 'lower'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "editinputmode", "upper" );
```
- **`"normal"`** — 입력되는 영문자의 대/소문자를 변경하지 않습니다.
- **`"upper"`** — 입력되는 영문자를 모두 대문자로 변경합니다.
- **`"lower"`** — 입력되는 영문자를 모두 소문자로 변경합니다.

**Remark**

- editinputmode 속성값을 설정하지 않으면 "normal" 로 적용됩니다.

- editinputmode 속성값을 변경하면 Cell 에 바인딩 된 DataSet 의 데이터가 변경될 수 있습니다.


---

### editinputtype

> Components > Component > ListView > Objects > ListViewCellControl > Property > editinputtype

**Description**

Cell 의 edittype 속성값이 "text" 일 때 편집모드용 컨트롤에서 입력을 허용할 문자를 타입별로 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.editinputtype[= strInputtype]
```

**Setting Syntax**

```javascript
strInputtype ::= 'normal' | <type>

<type> ::= <inputtype> | <inputtype> ',' <type>
<inputtype> ::= 'alpha' | 'english' | 'digit' | 'number' | 'numberandenglish' | 'comma' | 'dot' | 'sign' | 'space' | 'symbol' | 'half' | 'full'

* 각 타입값을 콤마(",")로 구분하여 중복 설정할 수 있습니다.
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "editinputtype", "english" );                         // 영문자만 입력허용 

this.ListView00.setCellProperty( "body", "col00", "editinputtype", "english,number" );             // 영문자와 숫자만 입력허용 

this.ListView00.setCellProperty( "body", "col00", "editinputtype", "english,number,space" );   // 영문자, 숫자, 공백만 입력허용
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

- editinputtype 속성은 사용자가 편집모드용 컨트롤에서 직접 입력할 때만 적용됩니다.
   스크립트로 Cell 값을 설정할 때는 적용되지 않습니다.

- 설정된 타입값에 해당하는 문자만 입력을 허용하며 설정되지 않은 타입값의 문자는 입력할 수 없습니다.

- editinputtype 속성값에 "full" 값이 속해 있지 않으면 반각 문자만 입력할 수 있습니다.

- 입력된 문자는 editinputfilter 속성값에 따라 입력 제한을 적용한 후 editinputtype 속성값에 따라 입력 허용을 확인합니다.


◆ Mobile 제약

- inputtype 속성을 "digit", "number", "tel", "dot" 과 같이 숫자만 입력이 가능하도록 설정하면,
   Android 에서는 tel 타입의 키패드가 기본으로 적용되고, iOS/iPadOS 에서는 number 타입의 키패드가 기본으로 적용됩니다.
   단 iOS/iPadOS 에서는 value 에 숫자가 아닌 문자가 저장되어 있으면 text 타입의 키패드가 기본으로 적용됩니다.

- inputtype 속성을 "numberandenglish", "english" 와 같이 문자입력이 가능하도록 설정하면,
   Android, iOS/iPadOS 모두 text 타입의 키패드가 기본으로 적용됩니다.


---

### editmaxlength

> Components > Component > ListView > Objects > ListViewCellControl > Property > editmaxlength

**Description**

Cell 의 edittype 속성값이 "text" 일 때 편집모드용 컨트롤에 입력할 수 있는 문자열의 최대길이를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.editmaxlength[= nLimit]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "editmaxlength", "10" );
```
- **`nLimit`** — 입력할 수 있는 문자열의 최대길이를 숫자로 설정합니다.

0 설정 시 바인딩된 DataSet 의 Column 크기로 제한됩니다.
-1 설정 시 입력할 수 있는 최대길이를 제한하지 않습니다.

**Remark**

- editmaxlength 속성값을 설정하지 않으면 -1 로 적용됩니다.

- 영문, 숫자, 기호, 다국어 모두 한 문자가 1 로 계산됩니다.

- Body, Detail 밴드에 속한 Cell 에만 적용되는 속성입니다.

- 문자열의 길이가 editmaxlength 속성값과 같아지면 입력이 제한됩니다.

- 스크립트로 value 값 설정 시 editmaxlength 속성은 적용되지 않습니다.


---

### edittype

> Components > Component > ListView > Objects > ListViewCellControl > Property > edittype

**Description**

Cell 이 포커스를 받아 표시되는 편집모드용 컨트롤의 형식을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.edittype[= enumEdittype]
```

**Setting Syntax**

```javascript
enumEdittype ::= 'normal' | 'none' | 'button' | 'checkbox' | 'combo' | 'date' | 'mask' | 'multicombo' | 'readonly' | 'text' | 'textarea'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "edittype", "normal" );
```
- **`"normal"`** — 바인드 된 데이터 형식에 맞게 편집창이 자동으로 표시됩니다.

바인드 된 Column 의 타입에 맞게 "text" 또는 "date"로 적용됩니다.
- **`"none"`** — Cell 이 포커스를 받아도 편집모드용 컨트롤이 표시되지 않습니다.
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
- **`"readonly"`** — Cell 영역이 TextArea 형식의 입력창으로 표시됩니다.

Cell 값을 수정할 수 없고 읽기만 가능합니다..
- **`"text"`** — Cell 영역이 Edit 형식의 입력창으로 표시됩니다.
- **`"textarea"`** — Cell 영역이 TextArea 형식의 입력창으로 표시됩니다.

**Remark**

- edittype 속성값을 설정하지 않으면 "none" 으로 적용됩니다.

- Cell 에서 데이터를 수정하면 바인드 되어 있는 Dataset 에서 cancolumnchange -> oncolumnchanged 순서로 이벤트가 발생합니다.
   이때, Dataset 의 cancolumnchange 이벤트에서 "false" 값을 반환하면 oncolumnchanged 이벤트가 발생하지 않고 수정된 데이터도 원복됩니다.

- Cell 에 표시되는 편집모드용 컨트롤의 스타일은 테마에서 설정하여야 합니다.

- edittype 속성값이 "text" 또는 "textarea" 일 때 입력값을 숫자로 제한하려면 editinputfilter 또는 textareainputfilter 속성값을 설정하여야 합니다.


---

### expandchar

> Components > Component > ListView > Objects > ListViewCellControl > Property > expandchar

**Description**

Cell 의 확장버튼에 표시될 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.expandchar[= strExptext]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "expandchar", "..." );
```
- **`strExptext`** — Cell 의 확장버튼에 표시될 텍스트를 설정합니다.

**Remark**

- Body, Detail 밴드에 속한 Cell 에만 적용되는 속성입니다.


---

### expandimage

> Components > Component > ListView > Objects > ListViewCellControl > Property > expandimage

**Description**

Cell 의 확장버튼에 텍스트와 함께 표시할 이미지의 위치 경로를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.expandimage[= strImage]
```

**Setting Syntax**

```javascript
strImage ::= 'URL(' <theme-Image> | <resource-image> | <web-Image> | <absolute-image> | <relative-image> ')'
```
```javascript
this.ListView00.setCellProperty("body","col00","expandimage","URL('theme://images/test.png')") ;                                   // 테마 이미지 
this.ListView00.setCellProperty("body","col00","expandimage","URL('globalimageID')") ;                                                  // Resource영역 이미지 
this.ListView00.setCellProperty("body","col00","expandimage","URL('http://www.tobesoft.com/images/gnb/btn_h1.gif')") ;  // 웹 이미지 
this.ListView00.setCellProperty("body","col00","expandimage","URL('file://C:\\xplatform_logo.gif')") ;                             // 절대경로 이미지 
this.ListView00.setCellProperty("body","col00","expandimage","URL('Base::test.jpg')") ;                                                   // TypeDefinition Prefix 이미지 
this.ListView00.setCellProperty("body","col00","expandimage","URL('./test.jpg')") ;                                                         // 상대경로 이미지
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

- Body, Detail 밴드에 속한 Cell 에만 적용되는 속성입니다.

- 확장버튼의 background 속성에는 확장버튼의 상태별 이미지를 설정하고, 
   expandimage 속성에는 확장버튼의 상태와 상관없이 표시되는 이미지를 설정합니다.


---

### expandshow

> Components > Component > ListView > Objects > ListViewCellControl > Property > expandshow

**Description**

Cell 의 오른쪽에 확장버튼을 표시할지 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.expandshow[= enumShow]
```

**Setting Syntax**

```javascript
enumShow ::= 'hide' | 'show'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "expandshow", "hide" );
```
- **`"hide"`** — Cell 의 오른쪽에 확장버튼을 표시하지 않습니다.
- **`"show"`** — Cell 의 오른쪽에 확장버튼을 표시합니다.

**Remark**

- expandshow 속성값을 설정하지 않으면 "hide" 로 적용됩니다.

- Cell 의 활성화 여부와 관계없이 확장버튼이 표시됩니다.
   Cell 의 displaytype 속성값에 관계없이 확장버튼이 표시됩니다.

- Body, Detail 밴드에 속한 Cell 에만 적용되는 속성입니다.

- displaytype 속성을  'text', 'number' 등 텍스트만 표시되는 형태의 속성값으로 설정하고 wordWrap 속성값을 'none'으로 설정하면 확장 버튼 표시 영역까지 텍스트가 표시되며 확장 버튼과 겹쳐져 표시될 수 있습니다. 
  텍스트 길이가 긴 경우에는 텍스트 길이를 조정하거나 wordWrap 속성을 지정해 텍스트와 확장 버튼이 겹쳐져 표시되지 않도록 해야 합니다.


---

### expandsize

> Components > Component > ListView > Objects > ListViewCellControl > Property > expandsize

**Description**

Cell 의 오른쪽에 표시되는 확장버튼의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.expandsize[= nSize]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "expandsize", "30" );
```
- **`nSize`** — 확장버튼의 크기를 pixel 단위의 숫자로 설정합니다.

**Remark**

- expandsize 속성값을 설정하지 않으면 16 으로 적용됩니다.

- Body, Detail 밴드에 속한 Cell 에만 적용되는 속성입니다.

- Cell 의 텍스트는 확장버튼 영역까지 표시됩니다.


---

### expr

> Components > Component > ListView > Objects > ListViewCellControl > Property > expr

**Description**

Cell 에 표시될 텍스트를 동적으로 생성하는 수식을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.expr[= strExpr]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "expr", "Column2 == '1' ? 'true' : 'false' "); 
this.ListView00.setCellProperty( "body", "col00", "expr", "currow + '/' + dataset.rowcount");
```
- **`strExpr`** — 텍스트로 적용될 수식을 설정합니다.
접근 가능한 영역에 정의된 함수를 설정할 수 있습니다.

설정된 수식을 동적으로 실행하여 그 결과값을 Cell 에 텍스트로 표시합니다.

**Remark**

- 동적으로 Cell 에 적용된 텍스트는 getCellText() 메소드를 사용하여 확인할 수 있습니다.

- expr 속성 설정 시 text 속성에 적용된 값은 무시되어 표시되지 않습니다.

- 수식에 아래의 예약어를 사용하면 수식 실행 시 예약어에 상응하는 값으로 대체됩니다.
  > this : 수식이 정의된 Cell ( Form 의 지시어가 아닙니다.)
  > comp : Cell 을 갖는 ListView 컴포넌트.
  > dataset : ListView 에 바인드된 DataSet 컴포넌트.
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

> Components > Component > ListView > Objects > ListViewCellControl > Property > font

**Description**

Cell 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.font[= strfont]
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
this.ListView00.setCellProperty( "body", "col00", "font", "bold 12pt/30px arial, sans-serif" );
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

### height

> Components > Component > ListView > Objects > ListViewCellControl > Property > height

**Description**

Cell 을 표시하기 위한 높이를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.height[= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::= [<strCellID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.ListView00.setCellProperty("body", "col00", "height", "10"); 
this.ListView00.setCellProperty("body", "col00", "height", "10px"); 
this.ListView00.setCellProperty("body", "col00", "height", "10%"); 
this.ListView00.setCellProperty("body", "col00", "height", "Cell00:10px"); 
this.ListView00.setCellProperty("body", "col00", "height", "Cell00:10%");
```
- **`<strCellID>`** — Cell 의 높이를 상대적으로 적용하기 위해 기준이 되는 Cell 의 ID 를 설정합니다.

기준 Cell 은 현재 Cell 과 밴드가 동일하여야 합니다.
또한, ListView 로딩 시 현재 Cell 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 밴드를 기준으로 높이가 적용됩니다.
- **`<nVal>`** — Cell 의 높이를 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCellID> 값을 생략했을 때 :
- "px": Cell의 높이 설정
- "%": 밴드의 height 속성값을 기준으로 Cell의 높이 결정
- "em": Cell의 font-size 속성값을 기준으로 Cell의 높이 결정
- "rem": MainFrame font-size 속성값을 기준으로 Cell의 높이 결정

* <strCellID> 값을 설정했을 때 :
- "px":  <strCellID> 값은 무시되고 설정값이 Cell의 높이 결정
- "%": <strCellID>의 height 속성값을 기준으로 Cell의 높이 결정
<strCellID> 값 설정 시 "em", "rem" 단위는 지원하지 않습니다.

**Remark**

- 높이값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 높이값에 기준 Cell 또는 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- 스크립트로 <strCellID> 값을 포함하여 height 속성값을 변경하면 <strCellID> 가 조건에 맞을 경우만 정상 적용됩니다.
  <strCellID> 가 조건에 맞지 않다면 height 속성값은 밴드를 기준으로 적용됩니다.


---

### imagestretch

> Components > Component > ListView > Objects > ListViewCellControl > Property > imagestretch

**Description**

Cell 의 크기에 맞게 이미지가 확대/축소되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.imagestretch[= enumStretch]
```

**Setting Syntax**

```javascript
enumStretch ::= 'none' | 'fit' | 'fixaspectratio'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "imagestretch", "fit" );
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

### left

> Components > Component > ListView > Objects > ListViewCellControl > Property > left

**Description**

Cell 을 표시하기 위한 좌측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.left[= nLeft]
```

**Setting Syntax**

```javascript
nLeft ::= [<strCellID> ':' ] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.ListView00.setCellProperty("body", "col00", "left", "10"); 
this.ListView00.setCellProperty("body", "col00", "left", "10px"); 
this.ListView00.setCellProperty("body", "col00", "left", "10%"); 
this.ListView00.setCellProperty("body", "col00", "left", "Cell00:10px"); 
this.ListView00.setCellProperty("body", "col00", "left", "Cell00:10%");
```
- **`<strCellID>`** — Cell 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 Cell의 ID 를 설정합니다.

기준 Cell 은 현재 Cell 과 밴드가 동일하여야 합니다.
또한, ListView 로딩 시 현재 Cell 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 밴드를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — Cell 의 좌측 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCellID> 값을 생략했을 때 :
- "px": 밴드의 좌측을 기준으로 Cell의 좌측 위치 설정
- "%": 밴드의 width 속성값을 기준으로 Cell의 좌측 위치 결정
- "em": Cell의 font-size 속성값을 기준으로 Cell의 좌측 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 Cell의 좌측 위치 결정

* <strCellID> 값을 설정했을 때 :
- "px":  <strCellID>의 right 속성값을 기준으로 Cell의 좌측 위치 결정
- "%": <strCellID>의 width 속성값을 기준으로 Cell의 좌측 위치 결정
<strCellID> 값 설정 시 "em", "rem" 단위는 지원하지 않습니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 기준 Cell 또는 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- 스크립트로 <strCellID> 값을 포함하여 left 속성값을 변경하면 <strCellID> 가 조건에 맞을 경우만 정상 적용됩니다.
  <strCellID> 가 조건에 맞지 않다면 left 속성값은 밴드를 기준으로 적용됩니다.


---

### letter-spacing

> Components > Component > ListView > Objects > ListViewCellControl > Property > letter-spacing

**Description**

ListViewCellControl 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.letterSpacing[= strspace]
```

**Setting Syntax**

```javascript
strspace ::= 'normal' | <nVal> ['px']
```
```javascript
* XCSS
letter-spacing : 2px ;

* Script ( normal property )
this.ListView00.setCellProperty( "body", "col00", "letterSpacing", "2px" );
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

> Components > Component > ListView > Objects > ListViewCellControl > Property > locale

**Description**

Cell 에 적용될 국가 및 언어(locale)를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.locale[= strlocale]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "locale", "ko_KR" );
```
- **`strlocale`** — "언어[_국가]" 형식의 문자열로 설정합니다.

**Remark**

- ISO 639-1에서 정의하고 있는 2-알파벳 언어 코드와 ISO 3166-1에서 정의하고 있는 2-알파벳 국가 코드를 조합하여 사용합니다.

- 국가 및 언어 코드는 "Appendix > Locale Code List" 항목을 참고하세요.


---

### maskeditautoselect

> Components > Component > ListView > Objects > ListViewCellControl > Property > maskeditautoselect

**Description**

Cell 의 edittype 속성값이 "mask" 일 때 편집모드용 컨트롤이 활성화 되면 텍스트를 전체선택 할지 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.maskeditautoselect[= bAutoselect]
```

**Setting Syntax**

```javascript
bAutoselect ::= 'true' | 'false'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "maskeditautoselect", "true" );
```
- **`true`** — Cell 의 편집모드용 컨트롤이 활성화 될 때 텍스트가 전체선택 됩니다.
- **`false`** — Cell 의 편집모드용 컨트롤이 활성화 될 때 텍스트가 선택되지 않습니다.

**Remark**

- maskeditautoselect 속성값을 설정하지 않으면 false 로 적용됩니다.


◆ web runtime environment 제약

- 마우스 또는 터치에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 정상동작합니다.
  그러나 setFocus() 메소드에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 되지 않을 수 있습니다.


---

### maskeditclipmode

> Components > Component > ListView > Objects > ListViewCellControl > Property > maskeditclipmode

**Description**

Cell 의 maskeditformat 속성에 설정된 형식 중 입력하지 않은 마스크에 대한 처리 방법을 결정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.maskeditclipmode[= enumClipMode]
```

**Setting Syntax**

```javascript
enumClipmode ::= 'includespace' | 'excludespace'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "maskeditclipmode", "includespace" );
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

> Components > Component > ListView > Objects > ListViewCellControl > Property > maskeditformat

**Description**

Cell 의 edittype 속성값이 "mask" 일 때 입력 받을 문자의 형식을 지정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.maskeditformat[= strFormat]
```

**Setting Syntax**

```javascript
strFormat ::= <strSNummask> | <strStringmask>

<strSNummask> ::= [<strSignmask>] <strNumbermask>
```
```javascript
this.ListView00.setCellProperty("body", "col00", "maskeditformat", "@@@@") ; 
this.ListView00.setCellProperty("body", "col00", "maskeditformat", "###,000.00##") ; 
this.ListView00.setCellProperty("body", "col00", "maskeditformat", "999,000.0099") ;
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

- Body, Detail 밴드에 속한 Cell 에만 적용되는 속성입니다.

- edittype 속성값이 "date" 일 때 입력형식은 calendareditformat 속성값이 적용됩니다.
   displaytype 속성값이 "date", "calendarcontrol" 일 때 표시형식은 calendardateformat 속성값이 적용됩니다.

- Cell 의 editype 속성값이 "mask" 이고, maskedittype 속성값이 "number" 일 때 0.1 과 같이 소수형태로 입력했을 경우 입력확정 후 마스크에 따라 정수부에 입력된 0 이 표시되지 않을 수 있습니다.


◆ Android NRE 제약

- 일부 키패드의 경우 한글자판에서 입력 시 영문으로 자체 변환되는 키패드가 존재합니다.
   이 경우 영문으로 입력이 처리됩니다.


---

### maskeditimeaction

> Components > Component > ListView > Objects > ListViewCellControl > Property > maskeditimeaction

**Description**

키보드에 하단 모서리에 표시되는 사용자 작업 버튼 UI와 동작을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.maskeditimeaction[= enumMaskededitimeaction]
```

**Setting Syntax**

```javascript
enumMaskededitimeaction ::= 'none' | 'next' | 'previous'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "maskeditimeaction", "none" );
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

> Components > Component > ListView > Objects > ListViewCellControl > Property > maskeditlimitbymask

**Description**

Cell 이 숫자를 입력받는 MaskEdit 형식일 때 마스크 값이 적용되는 부분을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.maskeditlimitbymask[= enumLimitmask]
```

**Setting Syntax**

```javascript
enumLimitmask ::= 'none' | 'integer' | 'decimal' | 'both'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "maskeditlimitbymask", "integer" );
```
- **`"none"`** — maskeditformat 속성값과 관계없이 숫자값 입력에 제한을 두지 않습니다.
- **`"integer"`** — 정수부분만 maskeditformat 속성값에 따라 입력을 제한합니다.
소수부분은 maskeditformat 속성값이 정의되어 있어도 제한없이 입력이 가능합니다.
- **`"decimal"`** — 정수부분은 maskeditformat 속성값이 정의되어 있어도 제한없이 입력이 가능합니다.
소수부분만 maskeditformat 속성값에 따라 입력을 제한합니다.
- **`"both"`** — 정수부분과 소수부분 모두 maskeditformat 속성값에 따라 입력을 제한합니다.

**Remark**

- maskeditlimitbymask 속성값을 설정하지 않으면 "decimal"로 적용됩니다.

- Cell 의 edittype 속성값이 "mask" 이고 maskedittype 속성값이 "number" 일 때만 적용되는 속성입니다.

- 부호(Sign)는 maskeditlimitbymask 속성값에 관계없이 입력할 수 있습니다.

- 예를 들어 maskeditformat 속성값이 "###.##"이고, maskeditlimitbymask 속성값이 "decimal" 이면 소수부 입력 시 두자리 숫자까지만 입력됩니다.


---

### maskeditmaskchar

> Components > Component > ListView > Objects > ListViewCellControl > Property > maskeditmaskchar

**Description**

Cell 의 maskeditformat 속성에 정의된 마스크 문자에 대응하는 문자를 지정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.maskeditmaskchar[= strMaskchar]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "maskeditmaskchar", "=" );
```
- **`strMaskchar`** — maskeditformat 속성에 정의된 마스크("#","@","yyyy" 등) 위치에 표시될 문자를 설정합니다.

**Remark**

- maskeditmaskchar 속성값을 설정하지 않으면 언더바("_")로 적용됩니다.

- edittype 속성값이 "mask","date" 인 경우에만 적용되는 속성입니다.

- Body, Detail 밴드에 속한 Cell 에만 적용되는 속성입니다.


---

### maskeditpostfixtext

> Components > Component > ListView > Objects > ListViewCellControl > Property > maskeditpostfixtext

**Description**

표시되는 텍스트 뒤에 붙여서 표시할 문자열을 지정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.maskeditpostfixtext[= strPostFixText]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "maskeditpostfixtext", "%");
```
- **`strPostFixText`** — 표시되는 텍스트 뒤에 붙여서 표시할 문자열을 설정합니다.

**Remark**

- 속성값을 설정하지 않으면 표시되는 텍스트에 영향을 미치지 않습니다.
- maskedittype 속성값이 "number"인 경우에는 maskeditformat 속성값 설정 시 숫자를 표기하기 위한 마스크 문자 외에 다른 문자를 설정할 수 없습니다. 때문에 "20%"와 같은 텍스트를 표시할 수 없습니다. maskeditpostfixtext 속성값을 "%"로 지정하면 숫자 뒤에 원하는 문자열을 설정해서 표시할 수 있습니다.


---

### maskedittrimtype

> Components > Component > ListView > Objects > ListViewCellControl > Property > maskedittrimtype

**Description**

Cell 의 maskeditformat 속성에 설정된 형식 중 좌우 공백에 대한 처리 방법을 결정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.maskedittrimtype[= enumTrimtype]
```

**Setting Syntax**

```javascript
enumTrimtype ::= 'none' | 'left' | 'right' | 'both'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "maskedittrimtype", "both" );
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

- maskedittrimtype 속성은 사용자가 편집모드용 컨트롤에서 직접 입력할 때만 적용됩니다.
  스크립트로 Cell 값을 설정할 때는 적용되지 않습니다.


---

### maskedittype

> Components > Component > ListView > Objects > ListViewCellControl > Property > maskedittype

**Description**

Cell 의 edittype 속성값이 "mask" 일 때 Cell 에 입력되는 값의 형식을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.maskedittype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'number' | 'string'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "maskedittype", "number" ); 

this.ListView00.setCellProperty( "body", "col00", "maskedittype", "string" );
```
- **`"number"`** — Cell 에서 숫자 형식으로 입력을 받습니다.

maskeditformat, maskeditlimitbymask 속성값이 입력방식에 영향을 줍니다.
- **`"string"`** — Cell 에서 문자 형식으로 입력을 받습니다.

maskeditformat, maskeditmaskchar, maskeditclipmode, maskedittrimtype 속성값이 입력방식에 영향을 줍니다.

**Remark**

- maskedittype 속성값을 설정하지 않으면 "number"로 적용됩니다.


---

### maxheight

> Components > Component > ListView > Objects > ListViewCellControl > Property > maxheight

**Description**

Cell 이 화면에 표시되는 최대 높이를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.maxheight[= nMaxHeight]
```

**Setting Syntax**

```javascript
nMaxHeight ::= <nVal> ['px']
```
```javascript
this.ListView00.setCellProperty("body", "col00", "maxheight", "10"); 

this.ListView00.setCellProperty("body", "col00", "maxheight", "10px");
```
- **`<nVal>`** — Cell 이 화면에 표시되는 높이의 최대값을 픽셀 단위의 숫자로 설정합니다.

**Remark**

- height 속성값이 maxheight 보다 크면 화면에 표시되는 Cell 의 높이는 maxheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- maxheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxheight 속성값을 minheight 속성값보다 작게 설정하면 minheight 속성값이 maxheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준 Cell 을 설정하여 Cell 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.


---

### maxwidth

> Components > Component > ListView > Objects > ListViewCellControl > Property > maxwidth

**Description**

Cell 이 화면에 표시되는 최대 너비를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.maxwidth[= nMaxWidth]
```

**Setting Syntax**

```javascript
nMaxWidth ::= <nVal> ['px']
```
```javascript
this.ListView00.setCellProperty("body", "col00", "maxwidth", "10"); 

this.ListView00.setCellProperty("body", "col00", "maxwidth", "10px");
```
- **`<nVal>`** — Cell 이 화면에 표시되는 너비의 최대값을 픽셀 단위의 숫자로 설정합니다.

**Remark**

- width 속성값이 maxwidth 보다 크면 화면에 표시되는 Cell 의 너비는 maxwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- maxwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxwidth 속성값을 minwidth 속성값보다 작게 설정하면 minwidth 속성값이 maxwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준 Cell 을 설정하여 Cell 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.


---

### minheight

> Components > Component > ListView > Objects > ListViewCellControl > Property > minheight

**Description**

Cell 이 화면에 표시되는 최소 높이를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.minheight[= nMinHeight]
```

**Setting Syntax**

```javascript
nMinHeight ::= <nVal> ['px']
```
```javascript
this.ListView00.setCellProperty("body", "col00", "minheight", "10"); 

this.ListView00.setCellProperty("body", "col00", "minheight", "10px");
```
- **`<nVal>`** — Cell 이 화면에 표시되는 높이의 최소값을 픽셀 단위의 숫자로 설정합니다.

**Remark**

- height 속성값이 minheight 보다 작으면 화면에 표시되는 Cell 의 높이는 minheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- minheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minheight 속성값을 maxheight 속성값보다 크게 설정하면 maxheight 속성값이 minheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준 Cell 을 설정하여 Cell 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.


---

### minwidth

> Components > Component > ListView > Objects > ListViewCellControl > Property > minwidth

**Description**

Cell 이 화면에 표시되는 최소 너비를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.minwidth[= nMinWidth]
```

**Setting Syntax**

```javascript
nMinWidth ::= <nVal> ['px']
```
```javascript
this.ListView00.setCellProperty("body", "col00", "minwidth", "10"); 

this.ListView00.setCellProperty("body", "col00", "minwidth", "10px");
```
- **`<nVal>`** — Cell 이 화면에 표시되는 너비의 최소값을 픽셀 단위의 숫자로 설정합니다.

**Remark**

- width 속성값이 minwidth 보다 작으면 화면에 표시되는 Cell 의 너비는 minwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- minwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minwidth 속성값을 maxwidth 속성값보다 크게 설정하면 maxwidth 속성값이 minwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준 Cell 을 설정하여 Cell 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.


---

### multicomboautoselect

> Components > Component > ListView > Objects > ListViewCellControl > Property > multicomboautoselect

**Description**

Cell이 MultiCombo 형식일 때 편집영역이 활성화되면 텍스트를 전체선택 할지 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.multicomboautoselect[= bAutoselect]
```

**Setting Syntax**

```javascript
bAutoselect ::= 'true' | 'false'
```
```javascript
this.ListView00.setCellProperty( "body", "cell00", "multicomboautoselect", "true");
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

> Components > Component > ListView > Objects > ListViewCellControl > Property > multicombobuttonsize

**Description**

Cell이 MultiCombo 형식일 때 표시되는 드롭다운 버튼의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.multicombobuttonsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.ListView00.setCellProperty( "body", "cell00", "multicombobuttonsize", "30");
this.ListView00.setCellProperty( "body", "cell00", "multicombobuttonsize", 30 20");
```
- **`<strWidth>`** — 드롭다운 버튼의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 드롭다운 버튼의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- multicombobuttonsize 속성값을 설정하지 않으면 ListView의 cellmulticombobuttonsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### multicombocodecol

> Components > Component > ListView > Objects > ListViewCellControl > Property > multicombocodecol

**Description**

Cell이 MultiCombo 형식일 때 Cell의 아이템 리스트에서 코드값으로 사용될 Column을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.multicombocodecol[= strColumnID]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "cell00", "multicombocodecol", "column0");
```
- **`strColumnID`** — Cell의 multicombodataset 속성에 설정된 DataSet의 Column 중 코드값으로 사용할 Column의 ID를 문자열로 설정합니다.

**Remark**

- Cell의 edittype 속성값이 "multicombo" 일 경우 적용되는 속성입니다.
  Cell의 displaytype 속성값이 "multicombocontrol" 일 경우 적용되는 속성입니다.

- multicombocodecol 속성은 Body, Detail 밴드 영역의 Cell 에만 적용되는 속성입니다.

- multicombocodecol 속성을 설정하지 않으면 내부적으로 multicombodatacol 속성값을 사용합니다.

- multicombocodecol 속성에 설정된 Column의 값은 아이템 리스트에 표시되지 않고 각 아이템의 코드값으로 처리됩니다.
  multicombodatacol 속성에 설정된 Column의 값은 아이템 리스트에 표시되며 각 아이템의 데이터값으로 처리됩니다.

- 아이템 리스트의 코드값은 아이템을 구분하는 유일값으로 중복값을 가질 수 없습니다.
  만일 중복된 코드값이 존재할 경우 중복코드값의 첫 번째 아이템이 항상 선택처리됩니다.
   
- Cell에서 선택된 아이템의 코드값은 Cell의 text 속성에 저장되고 ListView에 바인딩된 DataSet에 반영됩니다.
  Cell에는 선택된 코드값에 해당하는 아이템 리스트의 데이터값이 텍스트로 표시됩니다.


---

### multicombocounttextformat

> Components > Component > ListView > Objects > ListViewCellControl > Property > multicombocounttextformat

**Description**

Cell이 MultiCombo 형식이고 multicomboedittype 속성값이 "count"일 때 선택된 아이템을 표시할 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.multicombocounttextformat[= strExpr]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "cell00", "multicombocounttextformat", "[#]개 아이템을 선택했습니다.");
```
- **`strExpr`** — 선택된 아이템을 표시할 텍스트를 설정합니다.

값 설정 시 전체 아이템 개수와 선택한 아이템 개수를 아래 기호로 설정할 수 있습니다.
  [*] : 전체 아이템 개수
  [#] : 선택한 아이템 개수

**Remark**

- multicombocounttextformat 속성값을 설정하지 않으면 "[#] item(s) selected"으로 적용됩니다.


---

### multicombodatacol

> Components > Component > ListView > Objects > ListViewCellControl > Property > multicombodatacol

**Description**

Cell이 MultiCombo 형식일 때 Cell의 아이템 리스트에서 데이터값으로 사용될 Column을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.multicombodatacol[= strColumnID]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "cell00", "multicombodatacol", "column1");
```
- **`strColumnID`** — Cell의 multicombodataset 속성에 설정된 DataSet의 Column 중 데이터값으로 사용할 Column의 ID를 문자열로 설정합니다.

**Remark**

- Cell의 edittype 속성값이 "multicombo" 일 경우 적용되는 속성입니다.
  Cell의 displaytype 속성값이 "multicombocontrol" 일 경우 적용되는 속성입니다.

- multicombodatacol 속성은 Body, Detail 밴드 영역의 Cell 에만 적용되는 속성입니다.

- multicombodatacol 속성을 설정하지 않으면 내부적으로 multicombocodecol 속성값을 사용합니다.

- multicombodatacol 속성에 설정된 Column의 값은 아이템 리스트에 표시되며 각 아이템의 데이터값으로 처리됩니다.
  multicombocodecol 속성에 설정된 Column의 값은 아이템 리스트에 표시되지 않고 각 아이템의 코드값으로 처리됩니다.

- 아이템 리스트의 코드값은 아이템을 구분하는 유일값으로 중복값을 가질 수 없습니다.
  만일 중복된 코드값이 존재할 경우 중복코드값의 첫 번째 아이템이 항상 선택처리됩니다.
   
- Cell에서 선택된 아이템의 코드값은 Cell의 text 속성에 저장되고 ListView에 바인딩된 DataSet에 반영됩니다.
  Cell 에는 선택된 코드값에 해당하는 아이템 리스트의 데이터값이 텍스트로 표시됩니다.


---

### multicombodataset

> Components > Component > ListView > Objects > ListViewCellControl > Property > multicombodataset

**Description**

Cell이 MultiCombo 형식일 때 Cell 의 아이템 리스트를 구성할 DataSet의 ID를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.multicombodataset[= strDatasetID]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "cell00", "multicombodataset", "Dataset00");
```
- **`strDatasetID`** — Cell의 아이템 리스트를 구성할 DataSet의 ID를 문자열로 설정합니다.

**Remark**

- Cell에서 MultiCombo 아이템 리스트를 사용하기 위해서는 multicombocodecol과 multicombodatacol 중 한 개 속성과 multicombodataset 속성을 설정하여야 합니다.

- multicombodataset 속성에 설정한 DataSet 이 존재하지 않거나 데이터가 없을 경우 아이템 리스트가 정상적으로 표시되지 않습니다.

- multicombodataset 속성은 Body, Detail 밴드 영역의 Cell 에만 적용되는 속성입니다.


---

### multicombodisplaynulltext

> Components > Component > ListView > Objects > ListViewCellControl > Property > multicombodisplaynulltext

**Description**

Cell이 MultiCombo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시할 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.multicombodisplaynulltext[= strText]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "cell00", "multicombodisplaynulltext", "No Data");
```
- **`strText`** — Cell이 MultiCombo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시할 텍스트를 설정합니다.

**Remark**

- MultiCombo 아이템의 코드값에 현재 Cell에 바인드 된 값이 없는 상태에서
  Cell 에 포커스가 없고, multicombodisplaynulltype 속성값이 "nulltext" 일 때 대체 텍스트가 표시됩니다.


---

### multicombodisplaynulltype

> Components > Component > ListView > Objects > ListViewCellControl > Property > multicombodisplaynulltype

**Description**

Cell 이 MultiCombo 형식일 때 바인드 된 값과 일치하는 아이템이 없을 경우 표시되는 값의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.multicombodisplaynulltype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'nulltext'
```
```javascript
this.ListView00.setCellProperty( "body", "cell00", "multicombodisplaynulltype", "nulltext" );
```
- **`"none"`** — Cell에 바인드 된 값과 일치하는 콤보 아이템이 없을 경우 빈 문자열을 표시합니다.
- **`"nulltext"`** — Cell에 바인드 된 값과 일치하는 콤보 아이템이 없을 경우 combodisplaynulltext 속성값을 표시합니다.

**Remark**

- multicombodisplaynulltype 속성값을 설정하지 않으면 "none"으로 적용됩니다.

- ListView의 Body,Detail 밴드 영역에 속한 Cell 에만 적용되는 속성으로 "BIND" 또는 "EXPR"을 설정할 수 있습니다.


---

### multicombodisplayrowcount

> Components > Component > ListView > Objects > ListViewCellControl > Property > multicombodisplayrowcount

**Description**

Cell이 MultiCombo 형식일 때 아이템 리스트에 한 번에 표시될 아이템의 개수를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.multicombodisplayrowcount[= nRowNum]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "cell00", "multicombodisplayrowcount", "5");
```
- **`nRowNum`** — 아이템 리스트에 표시될 아이템의 개수를 숫자로 설정합니다.

undefined를 설정하면 아이템 리스트가 표시되는 공간에 맞게 자동으로 개수가 설정됩니다.

**Remark**

- ListView의 Body, Detail 밴드 영역에 속한 Cell 만 적용되는 속성입니다.

- multicombodisplayrowcount 속성값을 설정하지 않으면 undefined로 적용됩니다.

- multicombodisplayrowcount 속성값 보다 아이템의 개수가 작으면 아이템 개수에 맞게 리스트가 표시됩니다.

- multicombodisplayrowcount 속성값 보다 아이템의 개수가 많으면 아이템 리스트에 스크롤이 표시됩니다.

- MultiCombo 하단에 아이템 3개를 표시할 공간이 없다면 아이템 리스트가 MultiCombo 상단에 표시됩니다.
  상/하단 모두 아이템 3개를 표시할 공간이 없다면 더 넓은 방향으로 리스트가 표시됩니다.


---

### multicomboedittype

> Components > Component > ListView > Objects > ListViewCellControl > Property > multicomboedittype

**Description**

Cell이 MultiCombo 형식일 때 선택된 아이템의 표시 방식을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.multicomboedittype[= enumMode]
```

**Setting Syntax**

```javascript
enumMode ::= "text" | "singletag" | "multitag" | "count"
```
```javascript
this.ListView00.setCellProperty( "body", "cell00", "multicomboedittype", "multitag");
```
- **`"text"`** — 선택된 아이템을 텍스트로 표시합니다.
- **`"singletag"`** — 선택된 아이템을 한 줄의 태그로 표시합니다.
- **`"multitag"`** — 선택된 아이템을 여러 줄의 태그로 표시합니다.
- **`"count"`** — 선택된 아이템을 개수로 표시합니다.

**Remark**

- multicomboedittype 속성값을 설정하지 않으면 "text"로 적용됩니다.


---

### multicomboimemode

> Components > Component > ListView > Objects > ListViewCellControl > Property > multicomboimemode

**Description**

Cell이 MultiCombo 형식일 때 편집창에서 사용될 기본 입력 언어를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.multicomboimemode[= enumImemode]
```

**Setting Syntax**

```javascript
enumImemode ::= 'none' | 'alpha' | 'alpha,full' | 'hangul' | 'hangul,full' | 'katakana' | 'katakana,full' | 'hiragana' | 'direct'
```
```javascript
this.ListView00.setCellProperty( "body", "cell00", "multicomboimemode", "alpha" );
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

> Components > Component > ListView > Objects > ListViewCellControl > Property > multicomboitemheight

**Description**

Cell이 MultiCombo 형식일 때 아이템 리스트의 각 행의 높이를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.multicomboitemheight[= nHeight]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "cell00", "multicomboitemheight", "30");
```
- **`nHeight`** — 각 아이템이 표시되는 행의 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- multicomboitemheight 속성을 설정하지 않으면 글자 크기를 기준으로 행의 높이를 자동 계산합니다.


---

### multicombopopupsize

> Components > Component > ListView > Objects > ListViewCellControl > Property > multicombopopupsize

**Description**

Cell이 MultiCombo 형식일 때 팝업으로 표시되는 아이템 리스트의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.multicombopopupsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [ ' ' <strHeight> ]
```
```javascript
this.ListView00.setCellProperty( "body", "cell00", "multicombopopupsize", "500 400");
```
- **`<strWidth>`** — 아이템 리스트의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 아이템 리스트의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- multicombopopupsize 속성값을 설정하지 않으면 ListView의 cellmulticombopopupsize 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### multicombopopuptype

> Components > Component > ListView > Objects > ListViewCellControl > Property > multicombopopuptype

**Description**

Cell이 MultiCombo 형식일 때 아이템 리스트가 표시되는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.multicombopopuptype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'normal' | 'center'
```
```javascript
this.ListView00.setCellProperty( "body", 0, "multicombopopuptype", "center");
```
- **`"none"`** — 아이템 리스트를 화면에 표시하지 않습니다.
- **`"normal"`** — 아이템 리스트가 표시되는 일반적인 규칙을 따릅니다.
- **`"center"`** — 애플리케이션이 실행 중인 화면의 중앙에 아이템 리스트가 표시됩니다

**Remark**

- multicombopopuptype 속성값을 설정하지 않으면 ListView의 cellmulticombopopuptype 속성값이 적용됩니다.

- 모바일환경 같은 특별한 경우에 제한적으로 사용해야 하는 속성입니다.

- 다중 모니터의 경우 ListView가 표시되고 있는 모니터를 기준으로 아이템 리스트가 표시됩니다.


---

### multicomboreadonlycolumn

> Components > Component > ListView > Objects > ListViewCellControl > Property > multicomboreadonlycolumn

**Description**

Cell이 MultiCombo 형식일 때 아이템 readonly 여부 설정 시 사용될 Column을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.multicomboreadonlycolumn [=strColumnID]
```

**Setting Syntax**

```javascript
 this.ListView00.setCellProperty( "body", "col00", "multicomboreadonlycolumn", "column0");
```
- **`strColumnID`** — multicombodataset 속성에 설정된 Dataset 오브젝트의 Column 중 아이템 readonly 여부를 설정할 Column의 ID를 문자열로 설정합니다.


---

### multicomboscrollbarsize

> Components > Component > ListView > Objects > ListViewCellControl > Property > multicomboscrollbarsize

**Description**

Cell이 MultiCombo 형식일 때 아이템 리스트에 표시되는 스크롤바의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.multicomboscrollbarsize[= nWidth]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "cell00", "multicomboscrollbarsize", "20" );
```
- **`nWidth`** — 스크롤바의 너비를 숫자로 설정합니다.

**Remark**

- scrollbarsize 속성값을 변경하면 스크롤바 내부버튼의 높이와 너비가 같이 변경됩니다.


---

### multicomboshowselectallcheckbox

> Components > Component > ListView > Objects > ListViewCellControl > Property > multicomboshowselectallcheckbox

**Description**

Cell이 MultiCombo 형식일 때 아이템 리스트 상단에 아이템 전체를 선택 또는 선택해제하는 체크박스의 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.showselectallcheckbox [=bSelectall]
```

**Setting Syntax**

```javascript
bSelectall ::= true | false
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "showselectallcheckbox", true);
```
- **`true`** — 아이템 전체를 선택 또는 선택해제하는 체크박스를 아이템 리스트 상단에 표시합니다.
- **`false`** — 아이템 전체를 선택 또는 선택해제하는 체크박스를 아이템 리스트 상단에 표시하지 않습니다.

**Remark**

- multicomboshowselectallcheckbox 속성값을 설정하지 않으면 false로 적용됩니다.


---

### multicombotextseparator

> Components > Component > ListView > Objects > ListViewCellControl > Property > multicombotextseparator

**Description**

Cell 이 MultiCombo 형식일 때 2개 이상의 text 속성값 설정 시 구분자로 사용할 값을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.multicombotextseparator[= strTextSeparator]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "cell00", "multicombotextseparator", ";");
```
- **`strTextSeparator`** — 구분자를 설정합니다.

**Remark**

- multicombotextseparator 속성값을 설정하지 않으면 ","로 적용됩니다.


---

### multicombotype

> Components > Component > ListView > Objects > ListViewCellControl > Property > multicombotype

**Description**

Cell이 MultiCombo 형식일 때 동작하는 방법을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.multicombotype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'dropdown' | 'search' | 'filter' | 'filterlike' | 'caseisearch' | 'caseifilter' | 'caseifilterlike'
```
```javascript
this.ListView00.setCellProperty( "body", "cell00", "multicombotype", "caseifilter");
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

> Components > Component > ListView > Objects > ListViewCellControl > Property > name

**Description**

ListViewCellControl 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### opacity

> Components > Component > ListView > Objects > ListViewCellControl > Property > opacity

**Description**

Cell 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.opacity[= stropacity]
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8;
opacity : 80%;

* Script ( normal property )
this.ListView00.setCellProperty( "body", "col00", "opacity", "0.8" );
this.ListView00.setCellProperty( "body", "col00", "opacity", 0.8 );
this.ListView00.setCellProperty( "body", "col00", "opacity", "80%" );
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

> Components > Component > ListView > Objects > ListViewCellControl > Property > progressbarblockgap

**Description**

Cell 의 displaytype 속성값이 "progressbarcontrol" 일 때 ProgressBar 의 진행 상태를 표시하는 블럭의 간격을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.progressbarblockgap[= nGap]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "progressbarblockgap", "3");
```
- **`nGap`** — 블럭의 간격을 0 이상의 픽셀 단위의 숫자값으로 설정합니다.

0 미만의 값을 설정하면 0 으로 적용됩니다.
undefined 값을 설정하면 2 로 적용됩니다.

**Remark**

- progressbarblockgap 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- Cell 의 progressbarsmooth 속성값이 "false" 일 때만 적용되는 속성입니다.


---

### progressbarblocksize

> Components > Component > ListView > Objects > ListViewCellControl > Property > progressbarblocksize

**Description**

Cell 의 displaytype 속성값이 "progressbarcontrol" 일 때  ProgressBar 의 진행 상태를 표시하는 블럭의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.progressbarblocksize[= nWidth]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "progressbarblocksize", "20");
```
- **`nWidth`** — 블럭의 너비를 1 이상의 픽셀 단위의 숫자값으로 설정합니다.

1 미만의 값을 설정하면 1 로 적용됩니다.
undefined 값을 설정하면 15 로 적용됩니다.

**Remark**

- progressbarblocksize 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- Cell 의 progressbarsmooth 속성값이 "false" 일 때만 적용되는 속성입니다.


---

### progressbardirection

> Components > Component > ListView > Objects > ListViewCellControl > Property > progressbardirection

**Description**

Cell 의 displaytype 속성값이 "progressbarcontrol" 일 때 ProgressBar 의 진행 방향을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.progressbardirection[= enumDirection]
```

**Setting Syntax**

```javascript
enumDirection ::= 'forward' | 'backward'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "progressbardirection", "backward");
```
- **`"forward"`** — 진행바가 왼쪽에서 오른쪽으로 증가합니다.
- **`"backward"`** — 진행바가 오른쪽에서 왼쪽으로 증가합니다.

**Remark**

- progressbardirection 속성값을 설정하지 않으면 "forward"로 적용됩니다.


---

### progressbarsmooth

> Components > Component > ListView > Objects > ListViewCellControl > Property > progressbarsmooth

**Description**

Cell 의 displaytype 속성값이 "progressbarcontrol" 일 때 ProgressBar 가 표시되는 형태를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.progressbarsmooth[= bSmooth]
```

**Setting Syntax**

```javascript
bSmooth ::= 'true' | 'false'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "progressbarsmooth", "true");
```
- **`"true"`** — 진행바가 끊어진 부분 없이 연속된 모양으로 표시됩니다.
- **`"false"`** — 진행바가 progressbarblockgap, progressbarblocksize 속성값에 맞게 블럭형태로 표시됩니다.

**Remark**

- progressbarsmooth 속성값을 설정하지 않으면 "false" 로 적용됩니다.


---

### right

> Components > Component > ListView > Objects > ListViewCellControl > Property > right

**Description**

Cell 을 표시하기 위한 우측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.right[= nRight]
```

**Setting Syntax**

```javascript
nRight ::= [<strCellID> ':' ] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.ListView00.setCellProperty("body", "col00", "right", "10"); 
this.ListView00.setCellProperty("body", "col00", "right", "10px"); 
this.ListView00.setCellProperty("body", "col00", "right", "10%"); 
this.ListView00.setCellProperty("body", "col00", "right", "Cell00:10px"); 
this.ListView00.setCellProperty("body", "col00", "right", "Cell00:10%");
```
- **`<strCellID>`** — Cell 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 Cell의 ID 를 설정합니다.

기준 Cell 은 현재 Cell 과 밴드가 동일하여야 합니다.
또한, ListView 로딩 시 현재 Cell 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 밴드를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — Cell 의 우측 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCellID> 값을 생략했을 때 :
- "px": 밴드의 우측을 기준으로 Cell의 우측 위치 설정
- "%": 밴드의 width 속성값을 기준으로 Cell의 우측 위치 결정
- "em": Cell의 font-size 속성값을 기준으로 Cell의 우측 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 Cell의 우측 위치 결정

* <strCellID> 값을 설정했을 때 :
- "px":  <strCellID>의 left 속성값을 기준으로 Cell의 우측 위치 결정
- "%": <strCellID>의 width 속성값을 기준으로 Cell의 우측 위치 결정
<strCellID> 값 설정 시 "em", "rem" 단위는 지원하지 않습니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 기준 Cell 또는 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- 스크립트로 <strCellID> 값을 포함하여 right 속성값을 변경하면 <strCellID> 가 조건에 맞을 경우만 정상 적용됩니다.
  <strCellID> 가 조건에 맞지 않다면 right 속성값은 밴드를 기준으로 적용됩니다.


---

### rtl

> Components > Component > ListView > Objects > ListViewCellControl > Property > rtl

**Description**

ListViewCellControl 에서 내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.rtl
```

**Setting Syntax**

```javascript
bRtl ::= undefined | 'true' | 'false'
```
```javascript
var vRtl = this.List00.getCellProperty( "body", "cell00", "rtl");
```
- **`undefined`** — undefined 설정 시 상위 컴포넌트의 rtl 속성값이 적용됩니다.

사용자가 rtl 속성값을 설정하지 않거나 삭제했을 경우 undefined 가 설정됩니다.
- **`true`** — ListViewCellControl 의 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 오른쪽으로 설정합니다.
ListViewCellControl 의 내부 좌표계의 기준을 오른쪽으로 설정합니다.
ListViewCellControl 의 텍스트 표시 기준을 오른쪽으로 설정합니다.
수직스크롤바가 있을 경우 왼쪽에 표시됩니다.
- **`false`** — ListViewCellControl 의 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 왼쪽으로 설정합니다.
ListViewCellControl 의 내부 좌표계의 기준을 왼쪽으로 설정합니다.
ListViewCellControl 의 텍스트 표시 기준을 왼쪽으로 설정합니다.
수직스크롤바가 있을 경우 오른쪽에 표시됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 아랍권 같이 화면의 표시기준이 오른쪽인 환경에서 컨텐츠의 표시 기준을 변경하기 위해 설정하는 속성입니다.

- ListViewCellControl 부터 Environment 까지 상위의 모든 rtl 속성값이 undefined 이면
   Environment 의 locale 속성에 설정된 국가 및 언어 설정값을 기준으로 rtl 속성이 적용됩니다.
   Environment 의 locale 속성값을 설정하지 않았을 경우 시스템의 국가 및 언어 설정값이 적용됩니다.


---

### text

> Components > Component > ListView > Objects > ListViewCellControl > Property > text

**Description**

Cell 에 표시될 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.text[= strText]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "text", "bind:Column0" );
```
- **`strText`** — Cell 에 표시될 텍스트를 문자열로 설정하거나 ListView 에 바인드 된 DataSet 의 Column 을 바인드 설정합니다.

Column 바인드 시 "bind:컬럼ID" 의 형태로 설정합니다.


---

### textareaacceptsenter

> Components > Component > ListView > Objects > ListViewCellControl > Property > textareaacceptsenter

**Description**

Cell 의 edittype 속성값이 "textarea" 일 때 편집영역에서 Enter 키 입력의 처리방식을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.textareaacceptsenter[= bAcceptsEnter]
```

**Setting Syntax**

```javascript
bAcceptsEnter ::= 'true' | 'false'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "textareaacceptsenter", "true" );
```
- **`true`** — 편집영역에서 Enter 키 입력 시 줄바꿈을 수행합니다.

편집영역의 입력을 완료하려면 "Ctrl + Enter" 키를 입력하여야 합니다.
- **`false`** — 편집영역에서 Enter 키 입력 시 편집영역의 입력을 완료합니다.

편집영역에서 줄바꿈을 수행하려면 "Ctrl + Enter" 키를 입력하여야 합니다.

**Remark**

- textareaacceptsenter 속성값을 설정하지 않으면 false 로 적용됩니다.


---

### textareaautoselect

> Components > Component > ListView > Objects > ListViewCellControl > Property > textareaautoselect

**Description**

Cell 의 edittype 속성값이 "textarea" 일 때 편집모드용 컨트롤이 활성화 되면 텍스트를 전체선택 할지 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.textareaautoselect[= bAutoselect]
```

**Setting Syntax**

```javascript
bAutoselect ::= 'true' | 'false'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "textareaautoselect", "true" );
```
- **`true`** — Cell 의 편집모드용 컨트롤이 활성화 될 때 텍스트가 전체선택 됩니다.
- **`false`** — Cell 의 편집모드용 컨트롤이 활성화 될 때 텍스트가 선택되지 않습니다.

**Remark**

- textareaautoselect 속성값을 설정하지 않으면 false 로 적용됩니다.


◆ web runtime environment 제약

- 마우스 또는 터치에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 정상동작합니다.
  그러나 setFocus() 메소드에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 되지 않을 수 있습니다.


---

### textareaimemode

> Components > Component > ListView > Objects > ListViewCellControl > Property > textareaimemode

**Description**

Cell 의 edittype 속성값이 "textarea" 일 때 편집모드용 컨트롤에서 사용될 기본 입력 언어를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.textareaimemode[= enumImemode]
```

**Setting Syntax**

```javascript
enumImemode ::= 'none' | 'alpha' | 'alpha,full' | 'hangul' | 'hangul,full' | 'katakana' | 'katakana,full' | 'hiragana' | 'direct'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "textareaimemode", "alpha" );
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

- Cell 이 포커스를 받아 편집모드용 컨트롤이 활성화 될 때 IME가 재설정됩니다.

- 일부 환경에서만 지원하는 속성이므로 상단의 지원환경을 확인하시기 바랍니다.
   > Windows NRE, Android NRE에서만 지원하는 속성입니다.
   > macOS NRE, iOS/iPadOS NRE, WRE에서는 지원하지 않는 속성입니다.


---

### textareainputfilter

> Components > Component > ListView > Objects > ListViewCellControl > Property > textareainputfilter

**Description**

Cell 의 edittype 속성값이 "textarea" 일 때 편집모드용 컨트롤에서 입력을 제한 시킬 문자를 타입별로 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.textareainputfilter[= strInputfilter]
```

**Setting Syntax**

```javascript
strInputfilter ::= 'none' | <filter>

<filter> ::= <inputfilter> | <inputfilter> ',' <filter>
<inputfilter> ::= 'alpha' | 'digit' | 'comma' | 'dot' | 'sign' | 'space' | 'symbol'

* 각 타입값을 콤마(",")로 구분하여 중복 설정할 수 있습니다.
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "textareainputfilter", "dot" ); 
this.ListView00.setCellProperty( "body", "col00", "textareainputfilter", "dot,comma" ); 
this.ListView00.setCellProperty( "body", "col00", "textareainputfilter", "dot,comma,sign" );
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

- textareainputfilter 속성은 사용자가 편집모드용 컨트롤에서 직접 입력할 때만 적용됩니다.
  스크립트로 Cell 값을 설정할 때는 적용되지 않습니다.

- 일본어 입력 시 글자 조합이 완료된 후 textareainputfilter 속성값이 적용됩니다.


---

### textareainputmode

> Components > Component > ListView > Objects > ListViewCellControl > Property > textareainputmode

**Description**

Cell 의 edittype 속성값이 "textarea" 일 때 편집모드용 컨트롤에 입력되는 영문자를 대문자 또는 소문자로 변환할지 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.textareainputmode[= enumInputmode]
```

**Setting Syntax**

```javascript
enumInputmode ::= 'normal' | 'upper' | 'lower'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "textareainputmode", "upper" );
```
- **`"normal"`** — 입력되는 영문자의 대/소문자를 변경하지 않습니다.
- **`"upper"`** — 입력되는 영문자를 모두 대문자로 변경합니다.
- **`"lower"`** — 입력되는 영문자를 모두 소문자로 변경합니다.

**Remark**

- textareainputmode 속성값을 설정하지 않으면 "normal"로 적용됩니다.

- textareainputmode 속성값을 변경하면 Cell 에 바인딩 된 DataSet 의 데이터가 변경될 수 있습니다.


---

### textareainputtype

> Components > Component > ListView > Objects > ListViewCellControl > Property > textareainputtype

**Description**

Cell 의 edittype 속성값이 "textarea" 일 때 편집모드용 컨트롤에 입력을 허용할 문자를 타입별로 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.textareainputtype[= strInputtype]
```

**Setting Syntax**

```javascript
strInputtype ::= 'normal' | <type>

<type> ::= <inputtype> | <inputtype> ',' <type>
<inputtype> ::= 'alpha' | 'english' | 'digit' | 'number' | 'numberandenglish' | 'comma' | 'dot' | 'sign' | 'space' | 'symbol' | 'half' | 'full'

* 각 타입값을 콤마(",")로 구분하여 중복 설정할 수 있습니다.
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "textareainputtype", "english" );                         // 영문자만 입력허용 
this.ListView00.setCellProperty( "body", "col00", "textareainputtype", "english,number" );             // 영문자와 숫자만 입력허용 
this.ListView00.setCellProperty( "body", "col00", "textareainputtype", "english,number,space" );   // 영문자, 숫자, 공백만 입력허용
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

- textareainputtype 속성은 사용자가 편집모드용 컨트롤에서 직접 입력할 때만 적용됩니다.
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

> Components > Component > ListView > Objects > ListViewCellControl > Property > textareamaxlength

**Description**

Cell 의 edittype 속성값이 "textarea" 일 때 편집모드용 컨트롤에 입력할 수 있는 문자열의 최대길이를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.textareamaxlength[= nLimit]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "textareamaxlength", "10" );
```
- **`nLimit`** — 입력할 수 있는 문자열의 최대길이를 숫자로 설정합니다.

0 설정 시 바인딩된 DataSet 의 Column 크기로 제한됩니다.
-1 설정 시 입력할 수 있는 최대길이를 제한하지 않습니다.

**Remark**

- textareamaxlength 속성값을 설정하지 않으면 -1 로 적용됩니다.

- 영문, 숫자, 기호, 다국어, 개행문자(CR, LF) 모두 한 문자가 1 로 계산됩니다.

- Body, Detail 밴드에 속한 Cell 에만 적용되는 속성입니다.

- 문자열의 길이가 textareamaxlength 속성값과 같아지면 입력이 제한됩니다.

- 스크립트로 value 값 설정 시 textareamaxlength 속성은 적용되지 않습니다.


---

### textareascrollbarsize

> Components > Component > ListView > Objects > ListViewCellControl > Property > textareascrollbarsize

**Description**

Cell 이 TextArea 형식일 때 표시되는 스크롤바의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.textareascrollbarsize[= nSize]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "textareascrollbarsize", "30" );
```
- **`nSize`** — 스크롤바의 크기를 픽셀 단위의 숫자로 설정합니다.

**Remark**

- textareascrollbarsize 속성값은 수직스크롤바의 너비와 수평스크롤바의 높이에 동일하게 적용됩니다.

- textareascrollbarsize 속성값을 변경하면 스크롤바 내부버튼의 높이와 너비가 같이 변경됩니다.


---

### textareascrollbartype

> Components > Component > ListView > Objects > ListViewCellControl > Property > textareascrollbartype

**Description**

Cell 의 edittype 속성값이 "textarea" 일 때 편집모드용 컨트롤에 스크롤바가 표시되는 형식을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.textareascrollbartype[= strBartype]
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
this.ListView00.setCellProperty( "body", "col00", "textareascrollbartype", "none" ); 
this.ListView00.setCellProperty( "body", "col00", "textareascrollbartype", "default autoindicator" ); 
this.ListView00.setCellProperty( "body", "col00", "textareascrollbartype", "auto fixed" ); 
this.ListView00.setCellProperty( "body", "col00", "textareascrollbartype", "indicator none" );
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
   ex) this.ListView00.setCellProperty( "body", 0, "textareascrollbartype", "fixed autoindicator" );


---

### textareascrolltype

> Components > Component > ListView > Objects > ListViewCellControl > Property > textareascrolltype

**Description**

Cell 의 edittype 속성값이 "textarea" 일 때 편집모드용 컨트롤에 사용되는 스크롤의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.textareascrolltype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'both' | 'vertical' | 'horizontal'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "textareascrolltype", "none" );
```
- **`"none"`** — 편집모드용 컨트롤에 수평/수직 스크롤을 사용하지 않습니다.
- **`"both"`** — 편집모드용 컨트롤에 수평/수직 스크롤을 모두 사용합니다.
- **`"vertical"`** — Cell 에서 수직 스크롤만 사용합니다.

수평 스크롤은 사용하지 않습니다.
- **`"horizontal"`** — Cell 에서 수평 스크롤만 사용합니다.

수직 스크롤은 사용하지 않습니다.

**Remark**

- textareascrolltype 속성값을 설정하지 않으면 "both" 로 적용됩니다.

- 편집모드용 컨트롤에 사용되는 스크롤에 대한 자세한 설정은 textareascrollbartype 속성을 사용하여야 합니다.

**See Also**

ListViewCellControl.scrollbartype


---

### tooltiptext

> Components > Component > ListView > Objects > ListViewCellControl > Property > tooltiptext

**Description**

Cell 영역에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.tooltiptext[= strToolTipText]
```

**Setting Syntax**

```javascript
this.ListView00.setCellProperty( "body", "col00", "tooltiptext", "ToolTip" ); 
this.ListView00.setCellProperty( "body", "col00", "tooltiptext", "" );           // 풍선 도움말이 표시되지 않습니다. 
this.ListView00.setCellProperty( "body", "col00", "tooltiptext", null );         // 상위영역의 풍선 도움말이 표시됩니다.
```
- **`strToolTipText`** — 풍선도움말에 표시할 텍스트를 설정합니다.

빈문자열(EmptyString) 설정 시 풍선도움말이 표시되지 않습니다.
null 또는 undefined 설정 시 상위영역(Band)의 풍선도움말이 표시됩니다.

**Remark**

- tooltiptext 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- tooltiptext 속성이 undefined 로 적용되면 상위 영역(Band)의 tooltiptext 속성값이 적용됩니다.
   상위 영역의 tooltiptext 속성값이 undefined 일 경우는 다시 상위 영역의 tooltiptext 속성값이 적용됩니다. 

- 마우스 포인터가 ListView 의 밴드영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.


◆ Desktop WRE 제약

- 풍선도움말은 브라우저의 기능을 활용하므로 브라우저 사양에 따라 스타일에 차이가 있을 수 있습니다.
   NRE는 Chrome 의 스타일과 동일하게 적용됩니다.


---

### tooltiptype

> Components > Component > ListView > Objects > ListViewCellControl > Property > tooltiptype

**Description**

Cell 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.tooltiptype[= enumTooltipType]
```

**Setting Syntax**

```javascript
enumTooltipType ::= 'default' | 'hover' | 'inplace' | 'default,mouseleave' | 'hover,mouseleave' | 'inplace,mouseleave'
```
```javascript
this.ListView00.setCellProperty( "body", "col00", "tooltiptype", "hover" );
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

### top

> Components > Component > ListView > Objects > ListViewCellControl > Property > top

**Description**

Cell 을 표시하기 위한 상단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.top[= nTop]
```

**Setting Syntax**

```javascript
nTop ::= [<strCellID> ':' ] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.ListView00.setCellProperty("body", "col00", "top", "10"); 
this.ListView00.setCellProperty("body", "col00", "top", "10px"); 
this.ListView00.setCellProperty("body", "col00", "top", "10%"); 
this.ListView00.setCellProperty("body", "col00", "top", "Cell00:10px"); 
this.ListView00.setCellProperty("body", "col00", "top", "Cell00:10%");
```
- **`<strCellID>`** — Cell 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 Cell의 ID 를 설정합니다.

기준 Cell 은 현재 Cell 과 밴드가 동일하여야 합니다.
또한, ListView 로딩 시 현재 Cell 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 밴드를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — Cell 의 상단 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCellID> 값을 생략했을 때 :
- "px": 밴드의 상단을 기준으로 Cell의 상단 위치 설정
- "%": 밴드의 height 속성값을 기준으로 Cell의 상단 위치 결정
- "em": Cell의 font-size 속성값을 기준으로 Cell의 상단 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 Cell의 상단 위치 결정


* <strCellID> 값을 설정했을 때 :
- "px":  <strCellID>의 bottom 속성값을 기준으로 Cell의 상단 위치 결정
- "%": <strCellID>의 height 속성값을 기준으로 Cell의 상단 위치 결정
<strCellID> 값 설정 시 "em", "rem" 단위는 지원하지 않습니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 기준 Cell 또는 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- 스크립트로 <strCellID> 값을 포함하여 top 속성값을 변경하면 <strCellID> 가 조건에 맞을 경우만 정상 적용됩니다.
  <strCellID> 가 조건에 맞지 않다면 top 속성값은 밴드를 기준으로 적용됩니다.


---

### width

> Components > Component > ListView > Objects > ListViewCellControl > Property > width

**Description**

Cell 을 표시하기 위한 너비를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.width[= nWidth]
```

**Setting Syntax**

```javascript
nWidth ::= [<strCellID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.ListView00.setCellProperty("body", "col00", "width", "10"); 
this.ListView00.setCellProperty("body", "col00", "width", "10px"); 
this.ListView00.setCellProperty("body", "col00", "width", "10%"); 
this.ListView00.setCellProperty("body", "col00", "width", "Cell00:10px"); 
this.ListView00.setCellProperty("body", "col00", "width", "Cell00:10%");
```
- **`<strCellID>`** — Cell 의 너비를 상대적으로 적용하기 위해 기준이 되는 Cell 의 ID 를 설정합니다.

기준 Cell 은 현재 Cell 과 밴드가 동일하여야 합니다.
또한, ListView 로딩 시 현재 Cell 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 밴드를 기준으로 너비가 적용됩니다.
- **`<nVal>`** — Cell 의 너비를 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCellID> 값을 생략했을 때 :
pixel 단위로 설정 시 설정값이 너비로 결정됩니다.
비율("%") 단위로 설정 시 밴드의 width 속성값을 기준으로 Cell 의 너비가 결정됩니다.

- "px": Cell의 너비 설정
- "%": 밴드의 width 속성값을 기준으로 Cell의 너비 결정
- "em": Cell의 font-size 속성값을 기준으로 Cell의 너비 결정
- "rem": MainFrame font-size 속성값을 기준으로 Cell의 너비 결정

* <strCellID> 값을 설정했을 때 :
- "px":  <strCellID> 값은 무시되고 설정값이 Cell의 너비 결정
- "%": <strCellID>의 width 속성값을 기준으로 Cell의 너비 결정
<strCellID> 값 설정 시 "em", "rem" 단위는 지원하지 않습니다.

**Remark**

- 너비값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 너비값에 기준 Cell 또는 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- 스크립트로 <strCellID> 값을 포함하여 width 속성값을 변경하면 <strCellID> 가 조건에 맞을 경우만 정상 적용됩니다.
  <strCellID> 가 조건에 맞지 않다면 width 속성값은 밴드를 기준으로 적용됩니다.


---

### word-spacing

> Components > Component > ListView > Objects > ListViewCellControl > Property > word-spacing

**Description**

Cell 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewCellControl.wordSpacing[= strwordspacing]
```

**Setting Syntax**

```javascript
strWordSpacing ::= 'normal' | <nVal>'px'
```
```javascript
* XCSS
word-spacing : 30px;

* Script ( normal property )
this.ListView00.setCellProperty( "body", "col00", "wordSpacing", "30px" );
```
- **`"normal"`** — 텍스트의 단어 사이 간격을 설정하지 않습니다.

현재 font 에 맞는 기본형태로 텍스트가 표시됩니다.
- **`<nVal>`** — pixel 단위로 텍스트의 단어 사이 간격을 설정합니다.

**Remark**

- word-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "wordSpacing"을 사용해야 합니다.


---

## Components > Component > ListView > ListViewDetailBandControl

### ListViewDetailBandControl

> Components > Component > ListView > Objects > ListViewDetailBandControl

**Description**

ListView 컴포넌트의 Detail 밴드를 구성하는 밴드 컨트롤입니다.

**Remark**

- ListView 는 Body, Detail 밴드로 구성되며, 각 밴드는 Cell 리스트를 각각 소유합니다.

- Body, Detail 밴드는 바인드 된 DataSet 의 Row 가 반복되어 출력되는 Cell 들의 집합입니다.

**Property**

| Name | Description |
| --- | --- |
| accessibilityaction | ListViewDetailBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다. |
| accessibilitydesclevel | ListViewDetailBandControl 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다. |
| accessibilitydescription | ListViewDetailBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다. |
| accessibilityenable | ListViewDetailBandControl 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다. |
| accessibilitylabel | ListViewDetailBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다. |
| accessibilityrole | ListViewDetailBandControl에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다. |
| background | ListViewDetailBandControl 의 배경 영역을 설정하는 속성입니다. |
| border-radius | ListViewDetailBandControl 의 모서리 모양을 설정하는 속성입니다. |
| color | ListViewDetailBandControl 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| cssclass | ListViewDetailBandControl 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다. |
| cursor | ListViewDetailBandControl 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| font | ListViewDetailBandControl 에서 사용하는 폰트를 설정하는 속성입니다. |
| height | ListViewDetailBandControl 의 높이를 설정하는 속성입니다. |
| letter-spacing | ListViewDetailBandControl 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다. |
| name | ListViewDetailBandControl 의 이름을 설정하는 속성입니다. |
| -nexa-border | ListViewDetailBandControl 의 테두리를 설정하는 속성입니다. |
| -nexa-edge | ListViewDetailBandControl 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-rtl-background-image | ListViewDetailBandControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| -nexa-rtl-edge-image | ListViewDetailBandControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| opacity | ListViewDetailBandControl 영역의 투명도를 설정하는 속성입니다. |
| tooltiptext | ListViewDetailBandControl 영역에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다. |
| tooltiptype | ListViewDetailBandControl 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다. |
| width | ListViewDetailBandControl 의 너비를 설정하는 속성입니다. |
| word-spacing | ListViewDetailBandControl 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다. |

**Status**

컴포넌트가 비활성화된 상태

**Control**

| Name | TypeName |
| --- | --- |
| cell | nexacro.ListViewCellControl |


---

### 속성 (Properties)

### -nexa-border

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > -nexa-border

**Description**

ListViewDetailBandControl 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.border[= strborder]
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
this.ListView00.setBandProperty( "detail", "border", "1px solid #999999" );
this.ListView00.setBandProperty( "detail", "border", "1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999" );
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

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > -nexa-edge

**Description**

ListViewDetailBandControl 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.edge[= stredge]
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
this.ListView00.setBandProperty( "detail", "edge", "URL('./images/border.png')" 5px 5px );
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

- ListViewDetailBandControl 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.


◆ WRE 제약

- <fixedwidth>,<fixedheight> 값이 이미지 사이즈의 1/2 을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-rtl-background-image

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > -nexa-rtl-background-image

**Description**

ListViewDetailBandControl 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.-nexa-rtl-background-image
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

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > -nexa-rtl-edge-image

**Description**

ListViewDetailBandControl 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.-nexa-rtl-edge-image
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

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > accessibilityaction

**Description**

ListViewDetailBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.accessibilityaction[= strAction]
```

**Setting Syntax**

```javascript
this.ListView00.setBandProperty( "detail", "accessibilityaction", "Accessibility Action Message" );
this.ListView00.setBandProperty( "detail", "accessibilityaction", "Select by direction key" );
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

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > accessibilitydesclevel

**Description**

ListViewDetailBandControl 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.accessibilitydesclevel[= enumLevel]
```

**Setting Syntax**

```javascript
enumLevel ::= 'all' | 'self' | 'child' | 'none'
```
```javascript
this.ListView00.setBandProperty( "detail", "accessibilitydesclevel", "all" );
```
- **`"all"`** — ListViewDetailBandControl 와 자식 컴포넌트에 대한 접근성을 모두 출력합니다.
- **`"self"`** — ListViewDetailBandControl 의 접근성만 출력하고 자식 컴포넌트의 접근성은 출력하지 않습니다.
- **`"child"`** — ListViewDetailBandControl 의 접근성은 출력하지 않고, 자식 컴포넌트의 접근성은 출력합니다.
- **`"none"`** — ListViewDetailBandControl 와 자식 컴포넌트에 대한 접근성을 모두 출력하지 않습니다.

**Remark**

- accessibilitydesclevel 속성값을 설정하지 않으면 "all" 로 적용됩니다.

- Button 과 같이 자식 컴포넌트가 없는 컴포넌트는 "all" 또는 "child" 로 설정 시 "self" 로 적용됩니다.

- Div 와 같은 컨테이너 컴포넌트는 "child" 설정 시 실제 컨텐츠의 접근성만을 출력합니다.

- accessibilitydesclevel 속성은 선택상자의 이동에 영향을 주지 않으므로 방향키로 선택상자가 ListViewDetailBandControl 에 이동되게 하지 않으려면 accessibilityenable 속성을 설정하여야 합니다.


---

### accessibilitydescription

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > accessibilitydescription

**Description**

ListViewDetailBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.accessibilitydescription[= strDescription]
```

**Setting Syntax**

```javascript
this.ListView00.setBandProperty( "detail", "accessibilitydescription", "Option" );
```
- **`strDescription`** — accessibilitydescreadtype 속성값에 "description"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.


---

### accessibilityenable

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > accessibilityenable

**Description**

ListViewDetailBandControl 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.accessibilityenable[= bEnable]
```

**Setting Syntax**

```javascript
bEnable ::= 'true' | 'false'
```
```javascript
this.ListView00.setBandProperty( "detail", "accessibilityenable", false );
```
- **`true`** — ListViewDetailBandControl 에 선택상자가 이동되면 접근성 관련 속성값을 출력합니다.

방향키 또는 제스처로 선택상자 이동 시 Static 과 같이 포커스를 갖지 않는 컴포넌트에도 선택상자가 이동됩니다.
- **`false`** — ListViewDetailBandControl 에 선택상자가 이동되어도 접근성 관련 속성값을 출력하지 않습니다.

데스크탑 환경에서 방향키로 선택상자가 ListViewDetailBandControl 에 이동되지 않습니다.
모바일 환경에서 제스처로 선택상자가 ListViewDetailBandControl 에 이동되지 않습니다.

**Remark**

- accessibilityenable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 선택상자 이동 시 컴포넌트의 ARIA-LABEL + Status + Role 순서로 정보가 조합되어 접근성으로 출력됩니다.
   각 정보의 조합순서는 스크린 리더의 종류에 따라 달라질 수 있습니다.
   > ARIA-LABEL : Environment 의 accessibilitydescreadtype 속성에 설정된 속성값이 반영됩니다.
   > Status : ListViewDetailBandControl 의 현재 상태가 반영됩니다.
   > Role : accessibilityrole 속성값이 반영됩니다. accessibilityrole 속성값을 설정하지 않으면 ListViewDetailBandControl 의 고유 Role 이 반영됩니다.

- accessibilityenable 속성값이 false 일 때 데스크탑 환경에서 방향키 외의 방법으로 선택상자를 ListViewDetailBandControl 로 이동시키면 스크린 리딩 프로그램에서 임의의 값을 출력할 수 있습니다.


◆ 컨테이너 컴포넌트 선택상자 이동 제약

아래와 같은 환경에서 컨테이너 컴포넌트로 선택상자가 이동하지 않고 컨테이너 컴포넌트 내에 배치된 컴포넌트로 이동합니다.
- Android, iOS/iPadOS 운영체제에서 실행 시 (Div, PopupDiv, TabpageControl, View)
- Windows 운영체제에서 센스리더 가상커서 사용 시 (Div, PopupDiv, View)


---

### accessibilitylabel

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > accessibilitylabel

**Description**

ListViewDetailBandControl에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.accessibilitylabel[= strLabel]
```

**Setting Syntax**

```javascript
this.ListView00.setBandProperty( "detail", "accessibilitylabel", "OK Button" );
this.ListView00.setBandProperty( "detail", "accessibilitylabel", "[@static00]" );
this.ListView00.setBandProperty( "detail", "accessibilitylabel", "[@static00][@static01]" );
this.ListView00.setBandProperty( "detail", "accessibilitylabel", "[@static00][@static01] OK Button" );
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

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > accessibilityrole

**Description**

ListViewDetailBandControl에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.accessibilityrole[= enumRole]
```

**Setting Syntax**

```javascript
enumRole ::= 'none' | 'alert' | 'application' | 'button' | 'calendar' | 'chart' | 'checkbox' | 'columnheader' | 'combobox' | 'datepicker' | 'edit' | 'fileupload' | 'form' | 'frame' | 'grid' | 'gridcell' | 'groupbox' | 'heading' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6' | 'image' | 'link' | 'listbox' | 'menubar' | 'progressbar' | 'radio' | 'rowheader' | 'scrollbar' | 'spin' | 'static' | 'statusbar' | 'tab' | 'tabpage' | 'textarea' | 'titlebar' | 'toolbar' | 'tooltip' | 'treegrid' | 'treeitem' | 'webbrowser'
```
```javascript
this.ListView00.setBandProperty( "detail", "accessibilityrole", "none" );
this.ListView00.setBandProperty( "detail", "accessibilityrole", "button" );
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

- accessibilityenable 속성값을 설정하지 않으면 ListViewDetailBandControl의 기본 Role 로 적용됩니다.

- 추가적인 속성값이 필요한 Role 설정 시 ListViewDetailBandControl에 해당 속성이 없으면 스크린 리더에 따라 정상적으로 정보를 읽지 못할 수 있습니다.


---

### background

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > background

**Description**

ListViewDetailBandControl 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.background[= strbackground]
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
this.ListView00.setBandProperty( "detail", "background", "#ffffaa" );
this.ListView00.setBandProperty( "detail", "background", "URL('./images/smiley.gif')" no-repeat center center #ffffaa );
this.ListView00.setBandProperty( "detail", "background", "linear-gradient( red , blue , yellow )" );
this.ListView00.setBandProperty( "detail", "background", "linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0))" );
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

"left" 설정 시 ListViewDetailBandControl 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 ListViewDetailBandControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 ListViewDetailBandControl 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 ListViewDetailBandControl 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 ListViewDetailBandControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 ListViewDetailBandControl 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
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

0 보다 작거나 100 보다 큰 값을 설정 시 ListViewDetailBandControl 의 영역을 벗어난 가상의 위치로 적용됩니다.

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
예를 들어 <angle> 값이 "to left" 이면 ListViewDetailBandControl 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 ListViewDetailBandControl 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

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

0 보다 작거나 100 보다 큰 값을 설정 시 ListViewDetailBandControl 의 영역을 벗어난 가상의 위치로 적용됩니다.
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
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 ListViewDetailBandControl 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

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

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > border-radius

**Description**

ListViewDetailBandControl 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.borderRadius[= strborderradius]
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
this.ListView00.setBandProperty( "detail", "borderRadius", "10px" );
this.ListView00.setBandProperty( "detail", "borderRadius", "5px 6px 10px / 5px 10px" );
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

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > color

**Description**

ListViewDetailBandControl 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.color[= strcolor]
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
this.ListView00.setBandProperty( "detail", "color", "#999999" );
this.ListView00.setBandProperty( "detail", "color", "rgb(255,0,0)" );
this.ListView00.setBandProperty( "detail", "color", "red" );
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

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > cssclass

**Description**

ListViewDetailBandControl 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.cssclass[= strcssclass]
```

**Setting Syntax**

```javascript
strcssclass ::= <ClassName> [ , &ltClassName> ]*
```
```javascript
this.ListView00.setBandProperty( "detail", "cssclass", "TestClass" );
this.ListView00.setBandProperty( "detail", "cssclass", "TestClass,TestClass2" );
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

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > cursor

**Description**

ListViewDetailBandControl 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.cursor[= strCursor]
```

**Setting Syntax**

```javascript
strCursor ::= 'none' | 'auto' | 'default' | 'copy' | 'crosshair' | 'help' | 'move' | 'not-allowed' | 'pointer' | 'progress' | 'text' | 'wait' | 'ew-resize' | 'e-resize' | 'w-resize' | 'ns-resize' | 'n-resize' | 's-resize' | 'nesw-resize' | 'ne-resize' | 'sw-resize' | 'nwse-resize' | 'nw-resize' | 'se-resize'
```
```javascript
* XCSS
cursor : default;

* Script ( normal property )
this.ListView00.setBandProperty( "detail", "cursor", "default" );
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

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > font

**Description**

ListViewDetailBandControl 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.font[= strfont]
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
this.ListView00.setBandProperty( "detail", "font", "bold 12pt/30px arial, sans-serif" );
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

### height

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > height

**Description**

ListViewDetailBandControl 의 높이를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.height[= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::=  <nVal> ['px' | '%']
```
```javascript
this.ListView00.setBandProperty( "detail", "height", "50" ); 
this.ListView00.setBandProperty( "detail", "height", "40%" );
```
- **`<nVal>`** — ListViewDetailBandControl 의 높이를 픽셀 또는 비율("%") 단위의 숫자로 설정합니다.

픽셀 단위로 설정 시 설정한 값이 높이로 결정됩니다.
비율("%") 단위로 설정 시 ListView 의 height 속성값을 기준으로 ListViewDetailBandControl 의 높이가 결정됩니다.


---

### letter-spacing

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > letter-spacing

**Description**

ListViewDetailBandControl 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.letterSpacing[= strspace]
```

**Setting Syntax**

```javascript
strspace ::= 'normal' | <nVal> ['px']
```
```javascript
* XCSS
letter-spacing : 2px ;

* Script ( normal property )
this.ListView00.setBandProperty( "detail", "letterSpacing", "2px" );
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

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > name

**Description**

ListViewDetailBandControl 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.name
```

**Setting Syntax**

- **`name`** — Control 의 이름을 설정합니다.

**Remark**

- 컴포넌트 내부에 정의된 Control 은 name 을 설정할 수 없습니다.


---

### opacity

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > opacity

**Description**

ListViewDetailBandControl 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.opacity[= stropacity]
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8;
opacity : "80%";

* Script ( normal property )
this.ListView00.setBandProperty( "detail", "opacity", "0.8" );
this.ListView00.setBandProperty( "detail", "opacity", 0.8 );
this.ListView00.setBandProperty( "detail", "opacity", "80%" );
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

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > tooltiptext

**Description**

ListViewDetailBandControl 영역에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.tooltiptext[= strToolTipText]
```

**Setting Syntax**

```javascript
this.ListView00.setBandProperty( "detail", "tooltiptext", "This is ToolTip Text" ); 
this.ListView00.setBandProperty( "detail", "tooltiptext", "" );          // 풍선 도움말이 표시되지 않습니다. 
this.ListView00.setBandProperty( "detail", "tooltiptext", null );        // ListView 컴포넌트의 풍선 도움말이 표시됩니다.
```
- **`strToolTipText`** — 풍선도움말에 표시할 텍스트를 설정합니다.

빈문자열(EmptyString) 설정 시 풍선도움말이 표시되지 않습니다.
null 또는 undefined 설정 시 ListView 컴포넌트의 풍선도움말이 표시됩니다.

**Remark**

- tooltiptext 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- tooltiptext 속성이 undefined 로 적용되면 상위 영역(ListView)의 tooltiptext 속성값이 적용됩니다.
   상위 영역의 tooltiptext 속성값이 undefined 일 경우는 다시 상위 영역의 tooltiptext 속성값이 적용됩니다.

- 마우스 포인터가 ListViewDetailBandControl 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.


◆ Desktop WRE 제약

- 풍선도움말은 브라우저의 기능을 활용하므로 브라우저 사양에 따라 스타일에 차이가 있을 수 있습니다.
   NRE는 Chrome 의 스타일과 동일하게 적용됩니다.


---

### tooltiptype

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > tooltiptype

**Description**

ListViewDetailBandControl 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.tooltiptype[= enumTooltipType]
```

**Setting Syntax**

```javascript
enumTooltipType ::= 'default' | 'hover' | 'inplace' | 'default,mouseleave' | 'hover,mouseleave' | 'inplace,mouseleave'
```
```javascript
this.ListView00.setBandProperty( "detail", "tooltiptype", "hover" );
```
- **`"default"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 ListViewDetailBandControl 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"hover"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 ListViewDetailBandControl 영역내에 멈춰서 일정시간이 경과하면 풍선도움말이 사라집니다.
ListViewDetailBandControl 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경되거나 사라진 풍선도움말이 다시 표시됩니다.
- **`"inplace"`** — ListViewDetailBandControl 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 ListViewDetailBandControl 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"default,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 ListViewDetailBandControl 영역에 있으면 풍선도움말이 사라지지 않습니다.
- **`"hover,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 ListViewDetailBandControl 영역에 있으면 풍선도움말이 사라지지 않습니다.
ListViewDetailBandControl 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경됩니다.
- **`"inplace,mouseleave"`** — ListViewDetailBandControl 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 ListViewDetailBandControl 영역에 있으면 풍선도움말이 사라지지 않습니다.

**Remark**

- tooltiptype 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- 마우스 포인터가 ListViewDetailBandControl 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.

- 풍선도움말이 표시된 상태에서 tooltiptext 속성값을 변경하면 tooltiptype 속성값에 관계없이 풍선도움말이 사라집니다.

- 표시되었다가 사라진 풍선도움말은 마우스 포인터가 ListViewDetailBandControl 영역을 나갔다가 들어오면 다시 표시됩니다.

- 마우스 포인터가 ListViewDetailBandControl 영역에서 벗어나면 풍선도움말이 사라집니다.

- 풍선도움말의 크기는 풍선도움말에 표시되는 텍스트의 길이와 크기에 맞춰 자동으로 조정됩니다.

- 풍선도움말에 표시되는 텍스트의 글꼴과 크기는 변경하실 수 없습니다.


---

### width

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > width

**Description**

ListViewDetailBandControl 의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.width[= nWidth]
```

**Setting Syntax**

```javascript
nWidth ::=  ['px' | '%']
```
```javascript
this.ListView00.setBandProperty( "detail", "width", "200" ); 
this.ListView00.setBandProperty( "detail", "width", "30%" );
```
- **`<nVal>`** — ListViewDetailBandControl 의 너비를 픽셀 또는 비율("%") 단위의 숫자로 설정합니다.

픽셀 단위로 설정 시 설정한 값이 너비로 결정됩니다.
비율("%") 단위로 설정 시 ListView 의 width 속성값을 기준으로 ListViewDetailBandControl 의 너비가 결정됩니다.

**Remark**

- 아이템이 바둑판 모양으로 표시될 때 아래와 같은 규칙이 적용됩니다.
   > 같은 줄에 표시되는 아이템의 갯수는 ListView 의 width 를 ListViewBandControl 의 width 로 나눈값으로 결정됩니다.
   > ListViewDetailBandControl 의 width 값과 표시여부에 따라 같은 줄에 표시되는 아이템의 갯수가 동적으로 변경될 수 있습니다.
   > 바둑판 모양으로 표시될 때 남는 공간은 각 ListViewBandControl 간의 공백으로 처리됩니다.


---

### word-spacing

> Components > Component > ListView > Objects > ListViewDetailBandControl > Property > word-spacing

**Description**

ListViewDetailBandControl 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다.

**Syntax**

```javascript
ListViewDetailBandControl.wordSpacing[= strwordspacing]
```

**Setting Syntax**

```javascript
strWordSpacing ::= 'normal' | <nVal>'px'
```
```javascript
* XCSS
word-spacing : 30px;

* Script ( normal property )
this.ListView00.setBandProperty( "detail", "wordSpacing", "30px" );
```
- **`"normal"`** — 텍스트의 단어 사이 간격을 설정하지 않습니다.

현재 font 에 맞는 기본형태로 텍스트가 표시됩니다.
- **`<nVal>`** — pixel 단위로 텍스트의 단어 사이 간격을 설정합니다.

**Remark**

- word-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "wordSpacing"을 사용해야 합니다.


---
