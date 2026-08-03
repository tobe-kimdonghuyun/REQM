# nexacroN V24 — MultiLineTextField

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 165개

---

## Components > Component > MultiLineTextField

### MultiLineTextField

> Components > Component > MultiLineTextField

**Description**

MultiLineTextField 컴포넌트는 사용자로부터 여러 줄로 된 문자열을 입력하는 데 쓰이는 컴포넌트입니다.

**Remark**

- 한 줄로 된 문자열을 입력받고 유효성 검사를 하고자 한다면, TextField 컴포넌트를 사용해야 합니다.

**Structure**



**Contents Sizing**

MultiLineTextField 컴포넌트의 크기를 결정하는 기준입니다.

**Basic Key Action**

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 캐럿 이동 | 방향키 | 캐럿이 표시되고 있을 때 캐럿이 입력된 방향키 방향으로 이동됩니다. |
| 텍스트 선택 | Shift + 방향키 | 캐럿이 표시되고 있을 때 텍스트가 입력된 방향키 방향으로 선택됩니다. |
| 스크롤 이동 | Ctrl + 방향키 | MultiLineTextField 컴포넌트에 스크롤이 있을 때 입력된 방향키 방향으로 스크롤이 이동합니다 |

**Property**

| Name | Description |
| --- | --- |
| acceptstab | MultiLineTextField 에서 탭키 입력을 들여쓰기로 적용할지 포커스 이동으로 적용할지 결정하는 속성입니다. |
| autoselect | MultiLineTextField 컴포넌트의 편집영역이 활성화될 때 텍스트를 전체선택 할지 설정하는 속성입니다. |
| autoskip | MultiLineTextField 컴포넌트에 입력 중인 문자열의 길이가 maxlength 속성값에 도달했을 때 포커스를 자동으로 이동시킬지 설정하는 속성입니다. |
| background | MultiLineTextField 의 배경 영역을 설정하는 속성입니다. |
| border-radius | MultiLineTextField 의 모서리 모양을 설정하는 속성입니다. |
| bottom | MultiLineTextField 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다. |
| box-shadow | MultiLineTextField 에 그림자 효과를 설정하는 속성입니다. |
| color | MultiLineTextField 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| contentheight | box 컨트롤 영역의 높이를 설정하는 속성입니다. |
| cssclass | MultiLineTextField 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다. |
| cursor | MultiLineTextField 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| displaynulltext | MultiLineTextField 의 value 속성값이 null 또는 undefined 일 때 MultiLineTextField 에 표시될 대체 문자열을 설정하는 속성입니다. |
| dragscrolltype | MultiLineTextField에서 터치 후 드래그로 스크롤이 발생할 경우, 스크롤 방향을 설정하는 속성입니다. |
| enable | MultiLineTextField 의 사용가능 여부를 설정하는 속성입니다. |
| enableevent | MultiLineTextField 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다. |
| flexgrow | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축) 여백을 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다. |
| flexshrink | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 영역이 컨테이너 영역을 초과하지 않도록 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다. |
| font | MultiLineTextField 에서 사용하는 폰트를 설정하는 속성입니다. |
| footerheight | helpertext, charcounttext 컨트롤이 표시되기 위한 영역의 높이를 설정하는 속성입니다. |
| headerheight | 라벨이 labelposition 속성값으로 설정한 위치에 표시되기 위한 영역의 높이를 설정하는 속성입니다. |
| height | MultiLineTextField 을(를) 표시하기 위한 높이를 설정하는 속성입니다. |
| helpertext | MultiLineTextField 컴포넌트에 입력할 내용을 사용자에게 설명하는 텍스트를 설정하는 속성입니다. |
| hotkey | MultiLineTextField 의 기본 액션을 수행하기 위한 단축키를 설정하는 속성입니다. |
| hscrollbar | MultiLineTextField 의 서브컨트롤인 수평 스크롤바의 오브젝트를 갖는 읽기전용 속성입니다. |
| id | MultiLineTextField의 고유 식별자를 설정하는 속성입니다. |
| initvalueid | MultiLineTextField 에 적용될 InitValue 의 ID 를 설정하는 속성입니다. |
| labelfloatingfixed | MultiLineTextField 컴포넌트 상태에 따라 라벨을 표시하는 방식을 설정하는 속성입니다. |
| labelgap | 라벨이 표시되는 위치의 간격을 설정하는 속성입니다. |
| labelposition | MultiLineTextField 컴포넌트의 라벨을 표시할 위치를 설정하는 속성입니다. |
| labeltext | MultiLineTextField 컴포넌트의 라벨로 표시할 텍스트를 설정하는 속성입니다. |
| layoutorder | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 순서를 설정합니다. |
| left | MultiLineTextField 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다. |
| letter-spacing | MultiLineTextField 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다. |
| maxheight | MultiLineTextField 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다. |
| maxlength | MultiLineTextField 컴포넌트에 입력할 수 있는 문자열의 최대길이를 설정하는 속성입니다. |
| maxwidth | MultiLineTextField 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다. |
| minheight | MultiLineTextField 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다. |
| minwidth | MultiLineTextField 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다. |
| name | MultiLineTextField 의 이름을 설정하는 속성입니다. |
| -nexa-border | MultiLineTextField 의 테두리를 설정하는 속성입니다. |
| -nexa-edge | MultiLineTextField 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-rtl-background-image | MultiLineTextField 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| -nexa-rtl-edge-image | MultiLineTextField 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-vertical-align | MultiLineTextField 에 표시되는 텍스트 또는 컨텐츠의 세로 정렬 방식을 설정하는 속성입니다. |
| -nexa-word-wrap | MultiLineTextField 에 표시되는 텍스트가 출력영역보다 길 경우 자동으로 줄바꿈 되도록 설정하는 속성입니다. |
| opacity | MultiLineTextField 영역의 투명도를 설정하는 속성입니다. |
| parent | MultiLineTextField 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| positionstep | 부모 오브젝트가 화면분할기능을 사용할 때 MultiLineTextField 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다. |
| readonly | MultiLineTextField 에서 편집을 허용할 지 설정하는 속성입니다. |
| right | MultiLineTextField 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다. |
| rtl | MultiLineTextField 에서 내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다. |
| scrollbarbarminsize | MultiLineTextField 에 표시되는 스크롤바의 트랙바(TrackBar) 최소크기를 설정하는 속성입니다. |
| scrollbarbaroutsize | MultiLineTextField 의 스크롤바에서 트랙바(TrackBar)가 사라지는 기준 크기를 설정하는 속성입니다. |
| scrollbardecbuttonsize | MultiLineTextField 컴포넌트에 표시되는 스크롤바의 감소 버튼(DecButton) 크기를 설정하는 속성입니다. |
| scrollbarincbuttonsize | MultiLineTextField 컴포넌트에 표시되는 스크롤바의 증가 버튼(IncButton) 크기를 설정하는 속성입니다. |
| scrollbarsize | MultiLineTextField 컴포넌트에 표시되는 스크롤바의 크기를 설정하는 속성입니다. |
| scrollbartrackbarsize | MultiLineTextField 에 표시되는 스크롤바의 트랙바(TrackBar) 크기를 설정하는 속성입니다. |
| scrollbartype | MultiLineTextField 에 스크롤바가 표시되는 형식을 설정하는 속성입니다. |
| scrollindicatorsize | MultiLineTextField 에 표시되는 스크롤 인디케이터바의 크기를 설정하는 속성입니다. |
| scrolltype | MultiLineTextField 에서 사용되는 스크롤의 종류를 설정하는 속성입니다. |
| tablecellarea | Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다. |
| taborder | 탭키 입력으로 컴포넌트간 포커스를 이동할 때 MultiLineTextField 의 순서를 설정하는 속성입니다. |
| tabstop | 탭키 입력으로 컴포넌트간 포커스를 이동할 때 MultiLineTextField 이(가) 포커스를 받을 지 여부를 설정하는 속성입니다. |
| text | MultiLineTextField 컴포넌트에 표시되는 문자열을 갖는 읽기 전용 속성입니다. |
| tooltiptext | MultiLineTextField 에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다. |
| tooltiptype | MultiLineTextField 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다. |
| top | MultiLineTextField 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다. |
| usecharcount | 입력 중인 글자 수 정보를 표시할지 설정하는 속성입니다. |
| usecontextmenu | MultiLineTextField 의 편집영역에서 오른쪽 마우스 클릭 시 기본팝업메뉴의 표시 여부를 설정하는 속성입니다. |
| usehelpertext | helpertext 속성값으로 지정한 텍스트를 표시할지 설정하는 속성입니다. |
| usesoftkeyboard | MultiLineTextField 가 포커스를 가질 때 키패드의 표시 여부를 설정하는 속성입니다. |
| value | MultiLineTextField 컴포넌트에 표시되는 문자열을 갖는 속성입니다. |
| visible | MultiLineTextField 이(가) 화면에 표시될지 여부를 설정하는 속성입니다. |
| vscrollbar | MultiLineTextField 의 서브컨트롤인 수직 스크롤바의 오브젝트를 갖는 읽기전용 속성입니다. |
| width | MultiLineTextField 을(를) 표시하기 위한 너비를 설정하는 속성입니다. |
| word-spacing | MultiLineTextField 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addEvent | MultiLineTextField 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| addEventHandler | MultiLineTextField 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 MultiLineTextField 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| bringToFront | 부모가 동일한 컴포넌트 중 MultiLineTextField 이(가) 화면의 제일 앞에 표시되게 합니다. |
| bringToPrev | 부모가 동일한 컴포넌트 중 MultiLineTextField 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| deleteText | MultiLineTextField 컴포넌트의 입력값 중 특정위치에서 특정길이만큼 텍스트를 삭제하는 메서드입니다. |
| destroy | 스크립트에서 동적으로 생성한 MultiLineTextField 을(를) 삭제하는 메소드입니다. |
| find | MultiLineTextField 컴포넌트의 value 속성값에서 특정 텍스트의 시작위치를 반환하는 메서드입니다. |
| findEventHandler | MultiLineTextField 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getCaretPos | MultiLineTextField 컴포넌트에서 캐럿이 위치한 인덱스를 반환하는 메서드입니다. |
| getEventHandler | MultiLineTextField 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| getHScrollPos | MultiLineTextField 에 표시된 수평스크롤바의 트랙바 위치값을 반환하는 메소드입니다. |
| getLength | MultiLineTextField 컴포넌트의 value 속성에 설정된 문자열의 길이를 반환하는 메서드입니다. |
| getOffsetBottom | 부모 컴포넌트의 Top 위치를 기준으로 MultiLineTextField 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetHeight | MultiLineTextField 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetLeft | 부모 컴포넌트의 Left 위치를 기준으로 MultiLineTextField 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetRight | 부모 컴포넌트의 Left 위치를 기준으로 MultiLineTextField 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetTop | 부모 컴포넌트의 Top 위치를 기준으로 MultiLineTextField 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetWidth | MultiLineTextField 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getPixelBottom | MultiLineTextField 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelHeight | MultiLineTextField 의 height 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelLeft | MultiLineTextField 의 left 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelRight | MultiLineTextField 의 right 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelTop | MultiLineTextField 의 top 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelWidth | MultiLineTextField 의 width 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getSelect | MultiLineTextField 컴포넌트의 텍스트 편집 영역에서 선택한 텍스트의 시작 인덱스와 끝 인덱스를 배열 형태로 반환하는 메서드입니다. |
| getSelectedText | MultiLineTextField 컴포넌트의 텍스트 편집 영역에서 선택한 텍스트를 반환하는 메서드입니다. |
| getVScrollPos | MultiLineTextField 에 표시된 수직스크롤바의 트랙바 위치값을 반환하는 메소드입니다. |
| init | 스크립트로 MultiLineTextField 을(를) 동적 생성한 후에 초기화하는 메소드입니다. |
| insertEventHandler | MultiLineTextField 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| insertText | MultiLineTextField 컴포넌트의 특정 위치에 새로운 텍스트를 삽입하는 메서드입니다. |
| move | MultiLineTextField 의 위치와 크기를 변경하는 메소드입니다. |
| moveToNext | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 MultiLineTextField 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| moveToPrev | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 MultiLineTextField 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| removeEvent | MultiLineTextField 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| removeEventHandler | MultiLineTextField 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | MultiLineTextField 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| replace | MultiLineTextField 컴포넌트의 value 속성값에서 특정 텍스트를 새로운 텍스트로 모두 치환하는 메서드입니다. |
| resize | MultiLineTextField 의 크기를 변경하는 메소드입니다. |
| scrollBy | MultiLineTextField 에 표시된 스크롤을 현재 위치에서 인수로 전달된 값만큼 이동시키는 메소드입니다. |
| scrollTo | MultiLineTextField 에 표시된 스크롤을 특정 위치로 이동시키는 메소드입니다. |
| sendToBack | 부모가 동일한 컴포넌트 중 MultiLineTextField 이(가) 화면의 제일 뒤에 표시되게 합니다. |
| sendToNext | 부모가 동일한 컴포넌트 중 MultiLineTextField 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| setCaretPos | MultiLineTextField 컴포넌트에서 캐럿의 위치를 인덱스로 설정하는 메서드입니다. |
| setEventHandler | MultiLineTextField 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | MultiLineTextField 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| setFocus | MultiLineTextField 에 포커스를 설정하는 메서드입니다. |
| setOffsetBottom | 부모 컴포넌트의 Top 위치를 기준으로 MultiLineTextField 의 bottom 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetHeight | MultiLineTextField 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetLeft | 부모 컴포넌트의 Left 위치를 기준으로 MultiLineTextField 의 left 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetRight | 부모 컴포넌트의 Left 위치를 기준으로 MultiLineTextField 의 right 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetTop | 부모 컴포넌트의 Top 위치를 기준으로 MultiLineTextField 의 top 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetWidth | MultiLineTextField 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| setSelect | MultiLineTextField 컴포넌트에 포커스가 있을 때 인수로 지정된 영역을 선택하는 메서드입니다. |
| setSelectedText | MultiLineTextField 컴포넌트에서 현재 선택되어 있는 텍스트를 전달된 인수값으로 변경하는 메소드입니다. |
| show | 스크립트로 동적 생성한 MultiLineTextField 을(를) 화면에 표시하는 메소드입니다. |
| updateToDataset | MultiLineTextField 의 value 속성값을 바인딩 되어 있는 DataSet 에 즉시 반영시키는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| canchange | MultiLineTextField 컴포넌트에서 value 속성값이 변경될 때 발생하는 이벤트입니다. |
| onchanged | MultiLineTextField 컴포넌트에서 value 속성값이 변경된 후 발생하는 이벤트입니다. |
| oncontextmenu | MultiLineTextField 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다. |
| ondevicebuttonup | 모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다. |
| ondrag | MultiLineTextField 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다. |
| ondragenter | MultiLineTextField 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| ondragleave | MultiLineTextField 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| ondragmove | MultiLineTextField 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| ondrop | MultiLineTextField 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다. |
| oneditclick | MultiLineTextField 컴포넌트의 텍스트 편집 영역에서 마우스 왼쪽 버튼을 클릭했을 때 발생하는 이벤트입니다. |
| onhscroll | MultiLineTextField 의 수평 스크롤바를 스크롤 했을 때 발생하는 이벤트입니다. |
| oninput | MultiLineTextField 에서 입력을 시도할 때 발생하는 이벤트 입니다. |
| onkeydown | MultiLineTextField 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다. |
| onkeyup | MultiLineTextField 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다. |
| onkillfocus | MultiLineTextField 에서 포커스가 나갈  때 발생하는 이벤트입니다. |
| onlbuttondown | MultiLineTextField 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| onlbuttonup | MultiLineTextField 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| onmouseenter | MultiLineTextField 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| onmouseleave | MultiLineTextField 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| onmousemove | MultiLineTextField 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| onmousewheel | MultiLineTextField 영역 내에서 마우스의 휠버튼을 회전했을 때 발생하는 이벤트입니다. |
| onmove | MultiLineTextField 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| onrbuttondown | MultiLineTextField 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| onrbuttonup | MultiLineTextField 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| onsetfocus | MultiLineTextField 에 포커스가 들어올 때 발생하는 이벤트입니다. |
| onsize | MultiLineTextField 의 크기가 변경됐을 때 발생하는 이벤트입니다. |
| ontouchend | MultiLineTextField 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다. |
| ontouchmove | MultiLineTextField 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다. |
| ontouchstart | MultiLineTextField 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다. |
| onvscroll | MultiLineTextField 의 수직 스크롤바를 스크롤 했을 때 발생하는 이벤트입니다. |

**Status**

컴포넌트가 비활성화된 상태

**Control**

| Name | TypeName |
| --- | --- |
| box | nexacro.MultiLineTextFieldBoxControl |
| helpertext | nexacro.FieldBaseTextControl |
| charcounttext | nexacro.FlexTextControl |
| label | nexacro.FieldBaseLabelControl |
| nulltext | nexacro.FlexTextControl |
| vscrollbar | nexacro.ScrollBarControl |
| hscrollbar | nexacro.ScrollBarControl |
| vscrollindicator | nexacro.ScrollIndicatorControl |
| hscrollindicator | nexacro.ScrollIndicatorControl |


---

### 속성 (Properties)

### -nexa-border

> Components > Component > MultiLineTextField > Property > -nexa-border

**Description**

MultiLineTextField 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.border[= strborder]
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
this.MultiLineTextField00.border = "1px solid #999999";
this.MultiLineTextField00.border = "1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999";
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

> Components > Component > MultiLineTextField > Property > -nexa-edge

**Description**

MultiLineTextField 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.edge[= stredge]
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
this.MultiLineTextField00.edge = "URL('./images/border.png')" 5px 5px;
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

- MultiLineTextField 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.


◆ WRE 제약

- <fixedwidth>,<fixedheight> 값이 이미지 사이즈의 1/2 을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-rtl-background-image

> Components > Component > MultiLineTextField > Property > -nexa-rtl-background-image

**Description**

MultiLineTextField 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.-nexa-rtl-background-image
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

> Components > Component > MultiLineTextField > Property > -nexa-rtl-edge-image

**Description**

MultiLineTextField 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.-nexa-rtl-edge-image
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

### -nexa-vertical-align

> Components > Component > MultiLineTextField > Property > -nexa-vertical-align

**Description**

MultiLineTextField 에 표시되는 텍스트 또는 컨텐츠의 세로 정렬 방식을 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.verticalAlign[= strvertalign]
```

**Setting Syntax**

```javascript
strvertalign ::= 'top' | 'middle' | 'bottom'
```
```javascript
* XCSS
-nexa-vertical-align : middle;

* Script ( normal property )
this.MultiLineTextField00.verticalAlign = "middle";
```
- **`"top"`** — 텍스트 또는 컨텐츠를 위쪽으로 정렬합니다.
- **`"middle"`** — 텍스트 또는 컨텐츠를 가운데로 정렬합니다.
- **`"bottom"`** — 텍스트 또는 컨텐츠를 아래쪽으로 정렬합니다.

**Remark**

- -nexa-vertical-align 속성값을 설정하지 않으면 undefined 가 설정되고, "middle" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "verticalAlign"을 사용해야 합니다.


---

### -nexa-word-wrap

> Components > Component > MultiLineTextField > Property > -nexa-word-wrap

**Description**

MultiLineTextField 에 표시되는 텍스트가 출력영역보다 길 경우 자동으로 줄바꿈 되도록 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.wordWrap[= strwordwrap]
```

**Setting Syntax**

```javascript
strwordwrap ::= 'none' | 'char' | 'english'
```
```javascript
* XCSS
-nexa-word-wrap : char;

* Script ( normal property )
this.MultiLineTextField.wordWrap = "char";
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

### acceptstab

> Components > Component > MultiLineTextField > Property > acceptstab

**Description**

MultiLineTextField 에서 탭키 입력을 들여쓰기로 적용할지 포커스 이동으로 적용할지 결정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.acceptstab[= bTab]
```

**Setting Syntax**

- **`true`** — 들여쓰기를 하려면 탭키를 입력하여야 합니다.

포커스를 이동하려면 "Ctrl + Tab" 키를 입력해야 합니다.
- **`false`** — 들여쓰기를 하려면 "Ctrl + Tab"키를 입력하여야 합니다.

포커스를 이동하려면 탭키를 입력해야 합니다.

**Remark**

- acceptstab 속성값을 설정하지 않으면 false 로 적용됩니다.


◆ Desktop WRE 제약

- "Ctrl + Tab" 키는 브라우저에서 할당하고 있는 단축키이므로 동작하지 않습니다.


---

### autoselect

> Components > Component > MultiLineTextField > Property > autoselect

**Description**

MultiLineTextField 컴포넌트의 편집영역이 활성화될 때 텍스트를 전체선택 할지 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.autoselect [=bAutoSelect]
```

**Setting Syntax**

```javascript
bAutoSelect ::= true | false
```
```javascript
this.MultiLineTextField00.autoselect = true;
```
- **`true`** — 편집영역이 활성화될 때 텍스트가 전체선택 됩니다.
- **`false`** — 편집영역이 활성화될 때 텍스트가 선택되지 않습니다.

**Remark**

- autoselect 속성값을 설정하지 않으면 false로 적용됩니다.


◆ WRE 제약

- 마우스 또는 터치에 의해 편집영역이 활성화될 때는 텍스트 전체선택이 정상동작합니다.
  그러나 setFocus() 메서드에 의해 편집영역이 활성화될 때는 텍스트 전체선택이 되지 않을 수 있습니다.


---

### autoskip

> Components > Component > MultiLineTextField > Property > autoskip

**Description**

MultiLineTextField 컴포넌트에 입력 중인 문자열의 길이가 maxlength 속성값에 도달했을 때 포커스를 자동으로 이동시킬지 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.autoskip [=bAutoskip]
```

**Setting Syntax**

```javascript
bAutoskip ::= true | false
```
```javascript
this.MultiLineTextField00.autoskip = true;
```
- **`true`** — 문자열 길이가 maxlength 속성값에 도달하면 포커스를 다음 컴포넌트로 이동시킵니다. 

숫자/영문자 일 경우 마지막 문자가 입력된 후 포커스가 이동됩니다. 
다국어일 경우 마지막 문자가 확정된 후 다음 문자를 입력하면 포커스가 이동됩니다.
- **`false`** — 문자열 길이가 maxlength 속성값에 도달해도 포커스를 이동시키지 않습니다.

**Remark**

- autoskip 속성값을 설정하지 않으면 false로 적용됩니다.


---

### background

> Components > Component > MultiLineTextField > Property > background

**Description**

MultiLineTextField 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.background[= strbackground]
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
this.MultiLineTextField00.background = "#ffffaa";
this.MultiLineTextField00.background = ""URL('./images/smiley.gif')" no-repeat center center #ffffaa";
this.MultiLineTextField00.background = ""URL('./images/smiley.gif')" no-repeat center center /auto #ffffaa";
this.MultiLineTextField00.background = ""URL('./images/smiley.gif')" no-repeat center center /15px 15% #ffffaa";
this.MultiLineTextField00.background = "linear-gradient( red , blue , yellow )";
this.MultiLineTextField00.background = "linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0))";
this.MultiLineTextField00.background = ""URL('./images/smiley.gif')" border-box border-box #ffffaa";
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

"left" 설정 시 MultiLineTextField 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 MultiLineTextField 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 MultiLineTextField 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 MultiLineTextField 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 MultiLineTextField 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 MultiLineTextField 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
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

0 보다 작거나 100 보다 큰 값을 설정 시 MultiLineTextField 의 영역을 벗어난 가상의 위치로 적용됩니다.

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
예를 들어 <angle> 값이 "to left" 이면 MultiLineTextField 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 MultiLineTextField 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

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

0 보다 작거나 100 보다 큰 값을 설정 시 MultiLineTextField 의 영역을 벗어난 가상의 위치로 적용됩니다.
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
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 MultiLineTextField 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

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

> Components > Component > MultiLineTextField > Property > border-radius

**Description**

MultiLineTextField 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.borderRadius[= strborderradius]
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
this.MultiLineTextField00.borderRadius = "10px";
this.MultiLineTextField00.borderRadius = "5px 6px 10px / 5px 10px";
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

> Components > Component > MultiLineTextField > Property > bottom

**Description**

MultiLineTextField 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.bottom[= nBottom]
```

**Setting Syntax**

```javascript
nBottom ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.MultiLineTextField00.bottom = 10; 
this.MultiLineTextField00.bottom = "10px"; 
this.MultiLineTextField00.bottom = "10%"; 
this.MultiLineTextField00.bottom = "Button00:10px"; 
this.MultiLineTextField00.bottom = "Button00:10%";
```
- **`<strCompID>`** — MultiLineTextField 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 MultiLineTextField 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 MultiLineTextField 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — MultiLineTextField 의 하단 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 bottom 속성값을 기준으로 MultiLineTextField의 하단 위치 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 MultiLineTextField의 하단 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 MultiLineTextField의 하단 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 MultiLineTextField의 하단 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 top 속성값을 기준으로 MultiLineTextField의 하단 위치 결정
- "%": <strCompID>의 height 속성값을 기준으로 MultiLineTextField의 하단 위치 결정
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

### box-shadow

> Components > Component > MultiLineTextField > Property > box-shadow

**Description**

MultiLineTextField 에 그림자 효과를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.boxShadow[= strbshadow]
```

**Setting Syntax**

```javascript
strbshadow ::= 'none' | [<inset>] <offset> [<blur>'px'] [<spread>'px'] [<color>]

<offset> ::= <horizontal>'px' <vertical>'px'
<color> ::= <NamedColor> | <NumericColor>
```
```javascript
* XCSS
box-shadow : 10px 10px 10px #888888;
box-shadow : inset 10px 10px 10px 5px #888888

* Script ( normal property )
this.MultiLineTextField00.boxShadow  = "10px 10px 10px #888888";
this.MultiLineTextField00.boxShadow  = "inset 10px 10px 10px 5px #888888";
```
- **`<inset>`** — 그림자 효과가 컴포넌트 안쪽에 표시됩니다.
생략 시에는 outset으로 동작합니다.
NRE는 지원하지 않습니다.
- **`<offset>`** — 그림자 효과가 표시되는 위치를 설정합니다.

MultiLineTextField 의 좌상단 위치를 기준으로 그림자 효과가 표시될 위치를 가로/세로 픽셀값으로 설정합니다.
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

- box-shadow 속성값을 설정하지 않으면 undefined 가 설정되고, "none" 으로 동작합니다.

- 스크립트로 접근 시 속성명은 "boxShadow" 를 사용해야 합니다.

- <blur> 값을 크게 설정하면 시스템 자원 요구량이 많아져 성능 저하의 원인이 됩니다.

- <inset>, <spread> 값은 NRE를 지원하지 않습니다. 
  넥사크로 스튜디오 디자인 창에서도 속성값 설정 시 변경된 디자인을 확인할 수 없습니다.


◆ web runtime environment 제약

- XCSS 를 사용하지 않고 rgba(), hsl(), hsla() 메소드를 속성에 직접 설정할 경우 브라우저 버전에 따라 적용되지 않을 수 있습니다.


---

### color

> Components > Component > MultiLineTextField > Property > color

**Description**

MultiLineTextField 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.color[= strcolor]
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
this.MultiLineTextField00.color = "#999999";
this.MultiLineTextField00.color = "rgb(255,0,0)";
this.MultiLineTextField00.color = "red";
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

### contentheight

> Components > Component > MultiLineTextField > Property > contentheight

**Description**

box 컨트롤 영역의 높이를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.contentheight [= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::= <nVal> ['px']
```
```javascript
this.MultiLineTextField00.contentheight = 20;
this.MultiLineTextField00.contentheight = "20px";
```
- **`<nVal>`** — box 컨트롤 영역의 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- contentheight 속성값을 설정하지 않으면 undefined로 설정되고 Contents Sizing 규칙에 따라 해당 영역의 높이를 설정합니다.

- contentheight 속성값을 설정하면 height, bottom 속성값이 변경되어 적용됩니다.
  contentheight 속성값을 설정한 경우에는 height, bottom 속성값을 변경할 수 없습니다.
  (넥사크로 스튜디오 디자인 편집창, 속성창에서 height, bottom 속성값을 변경할 수 없으며 스크립트로도 변경할 수 없습니다).


---

### cssclass

> Components > Component > MultiLineTextField > Property > cssclass

**Description**

MultiLineTextField 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.cssclass[= strcssclass]
```

**Setting Syntax**

```javascript
strcssclass ::= <ClassName> [ , &ltClassName> ]*
```
```javascript
this.MultiLineTextField00.cssclass = "TestClass"; 
this.MultiLineTextField00.cssclass = "TestClass,TestClass2";
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

> Components > Component > MultiLineTextField > Property > cursor

**Description**

MultiLineTextField 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.cursor[= strCursor]
```

**Setting Syntax**

```javascript
strCursor ::= 'none' | 'auto' | 'default' | 'copy' | 'crosshair' | 'help' | 'move' | 'not-allowed' | 'pointer' | 'progress' | 'text' | 'wait' | 'ew-resize' | 'e-resize' | 'w-resize' | 'ns-resize' | 'n-resize' | 's-resize' | 'nesw-resize' | 'ne-resize' | 'sw-resize' | 'nwse-resize' | 'nw-resize' | 'se-resize'
```
```javascript
* XCSS
cursor : default;

* Script ( normal property )
this.MultiLineTextField00.cursor = "default";
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

### displaynulltext

> Components > Component > MultiLineTextField > Property > displaynulltext

**Description**

MultiLineTextField 의 value 속성값이 null 또는 undefined 일 때 MultiLineTextField 에 표시될 대체 문자열을 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.displaynulltext[= strText]
```

**Setting Syntax**

```javascript
this.MultiLineTextField00.displaynulltext = "no value";
```
- **`strText`** — value 속성값이 null 일 때 MultiLineTextField 에 표시될 대체 문자열을 설정합니다.

**Remark**

- value 속성값이 null 또는 undefined 이고, MultiLineTextField 에 포커스가 없을 때 대체 문자열이 표시됩니다.
   value 속성에 값이 있거나 빈문자열("Empty String")인 경우는 대체 문자열이 표시되지 않습니다.

- 최초 value 속성값이 null 일 때 편집창에 입력중인 값을 모두 지우면 value 속성은 null 값을 유지합니다.
   최초 value 속성값이 null 이 아닐 때 편집창에 입력된 값을 모두 지우면 value 속성은 빈문자열("Empty String")값을 갖습니다.

- value 속성값을 null 로 재설정 하려면 바인드 된 데이터 또는 value 속성값을 스크립트로 수정하여야 합니다.


---

### dragscrolltype

> Components > Component > MultiLineTextField > Property > dragscrolltype

**Description**

MultiLineTextField에서 터치 후 드래그로 스크롤이 발생할 경우, 스크롤 방향을 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.dragscrolltype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'vert' | 'horz' | 'both' | 'all'
```
- **`"none"`** — 터치 후 드래그로 스크롤이 발생하지 않습니다.

* Environment 오브젝트의 enabletouchevent 속성값이 false인 경우에는 다음과 같이 동작합니다.
 - scrolltype 속성값이 "none"인 경우, 드래그로 스크롤이 발생하지 않습니다.
 - scrolltype 속성값이 "none"이 아닌 경우, scrolltype 속성으로 설정한 스크롤 방향에 따라 드래그 스크롤이 발생합니다.
- **`"vert"`** — 터치 후 드래그로 수직 스크롤만 발생합니다.

* scrolltype 속성값이 "vertical" 또는 "both"인 경우에만 적용됩니다.
  scrolltype 속성값을 "horizontal"로 설정한 경우에는 수평 방향으로만 드래그 스크롤이 발생합니다.
- **`"horz"`** — 터치 후 드래그로 수평 스크롤만 발생합니다.

* scrolltype 속성값이 "horizontal" 또는 "both"인 경우에만 적용됩니다.
  scrolltype 속성값을 "vertical"인 경우에는 수직 방향으로만 드래그 스크롤이 발생합니다.
- **`"both"`** — 터치 후 드래그로 수직, 수평 스크롤 모두 발생합니다.

* scrolltype 속성값이 "both"인 경우에만 적용됩니다.
  scrolltype 속성값을 "vertical" 또는 "horizontal"인 경우에는 scrolltype 속성으로 설정한 스크롤 방향에 따라 드래그 스크롤이 발생합니다.
- **`"all"`** — 터치 후 드래그로 수직, 수평, 대각선 스크롤이 모두 발생합니다.

* scrolltype 속성값이 "both"인 경우에만 적용됩니다.
  Environment 오브젝트의 enabletouchevent 속성값이 false인 경우에는 대각선 방향으로 드래그 스크롤이 발생하지 않습니다.

**Remark**

- dragscrolltype 속성값을 설정하지 않으면 "all" 로 적용됩니다.

- 모바일 같이 터치 관련 이벤트가 발생하는 디바이스 에서만 속성이 적용됩니다.


---

### enable

> Components > Component > MultiLineTextField > Property > enable

**Description**

MultiLineTextField 의 사용가능 여부를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.enable[= benable]
```

**Setting Syntax**

```javascript
benable ::= 'true' | 'false'
```
```javascript
this.MultiLineTextField00.enable = true; 
this.MultiLineTextField00.enable = false;
```
- **`true`** — MultiLineTextField 을(를) 사용할 수 있게 설정합니다.
- **`false`** — MultiLineTextField 을(를) 사용할 수 없게 설정합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "disabled" Status 가 적용됩니다.

**Remark**

- enable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enable 속성값이 false 이면 컴포넌트가 화면에 표시되지만 포커스나 입력을 받을 수 없습니다.

- Div 와 같은 컨테이너 컴포넌트의 enable 속성값을 false 로 설정하면 자식 컴포넌트도 모두 Disable 됩니다.


---

### enableevent

> Components > Component > MultiLineTextField > Property > enableevent

**Description**

MultiLineTextField 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.enableevent[= bEvent]
```

**Setting Syntax**

```javascript
bEvent ::= 'true' | 'false'
```
```javascript
this.MultiLineTextField00.enableevent = true;  

this.MultiLineTextField00.enableevent = false;
```
- **`true`** — MultiLineTextField 에서 이벤트가 발생하도록 설정합니다.
- **`false`** — MultiLineTextField 에서 이벤트가 발생하지 않도록 설정합니다.

**Remark**

- enableevent 속성을 false 로 설정하면 이벤트 발생으로 인한 처리속도 지연과 화면 깜빡임을 방지할 수 있습니다.


---

### flexgrow

> Components > Component > MultiLineTextField > Property > flexgrow

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축) 여백을 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.flexgrow[= fVal]
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

> Components > Component > MultiLineTextField > Property > flexshrink

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 영역이 컨테이너 영역을 초과하지 않도록 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.flexshrink[= fVal]
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

> Components > Component > MultiLineTextField > Property > font

**Description**

MultiLineTextField 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.font[= strfont]
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
this.MultiLineTextField00.font = "bold 12pt/30px arial, sans-serif";
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

### footerheight

> Components > Component > MultiLineTextField > Property > footerheight

**Description**

helpertext, charcounttext 컨트롤이 표시되기 위한 영역의 높이를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.footerheight[= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::= <nVal> ['px']
```
```javascript
this.MultiLineTextField00.footerheight = 20;
this.MultiLineTextField00.footerheight = "20px";
```
- **`<nVal>`** — helpertext, charcounttext 컨트롤이 표시되기 위한 영역의 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- footerheight 속성값을 설정하지 않으면 undefined로 설정되고 Contents Sizing 규칙에 따라 해당 영역의 높이를 설정합니다.

- usehelpertext, usecharcount 속성값이 모두 false인 경우에도 footerheight 속성값만큼 영역을 설정합니다.


---

### headerheight

> Components > Component > MultiLineTextField > Property > headerheight

**Description**

라벨이 labelposition 속성값으로 설정한 위치에 표시되기 위한 영역의 높이를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.headerheight[= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::= <nVal> ['px']
```
```javascript
this.MultiLineTextField00.headerheight = 20;
this.MultiLineTextField00.headerheight = "20px";
```
- **`<nVal>`** — 라벨이 labelposition 속성값으로 설정한 위치에 표시되기 위한 영역의 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- headerheight 속성값을 설정하지 않으면 undefined로 설정되고 Contents Sizing 규칙에 따라 해당 영역의 높이를 설정합니다.

- labelposition 속성값이 "inside"인 경우에도 headerheight 속성값만큼 영역을 설정합니다.


---

### height

> Components > Component > MultiLineTextField > Property > height

**Description**

MultiLineTextField 을(를) 표시하기 위한 높이를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.height[= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.MultiLineTextField00.height = 10; 
this.MultiLineTextField00.height = "10px"; 
this.MultiLineTextField00.height = 10%"; 
this.MultiLineTextField00.height = Button00:10%";
```
- **`<strCompID>`** — MultiLineTextField 의 높이를 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 MultiLineTextField 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 MultiLineTextField 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 높이가 적용됩니다.
- **`<nVal>`** — MultiLineTextField 의 높이를 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.


* <strCompID> 값을 생략했을 때 :
- "px": MultiLineTextField의 높이 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 MultiLineTextField의 높이 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 MultiLineTextField의 높이 결정
- "rem": MainFrame font-size 속성값을 기준으로 MultiLineTextField의 높이 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID> 값은 무시되고 설정값이 MultiLineTextField의 높이 결정
- "%": <strCompID>의 height 속성값을 기준으로 MultiLineTextField의 높이 결정
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

### helpertext

> Components > Component > MultiLineTextField > Property > helpertext

**Description**

MultiLineTextField 컴포넌트에 입력할 내용을 사용자에게 설명하는 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.helpertext [=strHelperText]
```

**Setting Syntax**

```javascript
this.MultiLineTextField00.helpertext = "This field is required.";
```
- **`strHelperText`** — 입력할 내용을 사용자에게 설명하는 텍스트를 설정합니다.

**Remark**

- usehelpertext 속성값을 true로 설정한 경우에만 설정한 텍스트를 표시합니다.


---

### hotkey

> Components > Component > MultiLineTextField > Property > hotkey

**Description**

MultiLineTextField 의 기본 액션을 수행하기 위한 단축키를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.hotkey[= strHotkey]
```

**Setting Syntax**

```javascript
this.MultiLineTextField00.hotkey = "G"; 
this.MultiLineTextField00.hotkey = "CTRL+A"; 
this.MultiLineTextField00.hotkey = "CTRL+ALT+X";
```
- **`strHotkey`** — 수식키(CTRL, ALT, SHIFT)와 일반키의 조합으로 설정합니다.
수식키는 중복으로 조합하여 설정할 수 있습니다.
각 키는 "+" 를 사용하여 조합을 설정합니다.

**Remark**

(1) 컴포넌트 기본 액션

hotkey 속성값 설정 시 컴포넌트의 기본 액션이 수행됩니다. 컴포넌트 기본 액션은 다음과 같습니다.
- onclick : Button, CheckBox
- 포커스 이동 (접근성 설정 시) : GroupBox, Static
- onsetfocus : 나머지 Frame 오브젝트 및 컴포넌트
* GroupBox, Static 컴포넌트는 접근성 설정 환경이 아닌 경우 hotkey 속성은 처리되지 않습니다.

(2) 예외 조건

(2-1) 같은 hotkey 속성값을 가진 컴포넌트가 있을 때
Form 내에 같은 hotkey 속성값을 가진 컴포넌트가 2개 이상 있는 경우 components 속성 인덱스 순서에 따라 먼저 생성된 컴포넌트의 hotkey 속성만 처리됩니다.

(2-2) 단축키가 설정된 입력장치를 사용할 때
단축키 설정 기능이 있는 입력장치를 사용하는 경우 입력장치에서 설정된 단축키와 같은 값을 hotkey 속성값으로 설정하면 hotkey 속성은 처리되지 않습니다.
예를 들어 "CTRL+M" 키 입력을 ENTER 키 입력으로 변환해 처리하는 키보드를 사용한다면 hotkey 속성값을 "CTRL+M"으로 설정하고 해당 키를 입력해도 기본 액션이 수행되지 않습니다.

(2-3) 상위 프레임 또는 Form이 활성화되지 않았을 때
hotkey 속성은 상위 프레임 또는 Form이 활성화된 경우에만 동작합니다. 

(2-4) enable 속성값이 false 일 때
컴포넌트의 enable 속성값이 false이면 hotkey 속성은 처리되지 않습니다.

(2-5) hotkeycolumn 속성값을 설정했을 때
Menu 컴포넌트의 hotkey 속성값과 hotkeycolumn 속성값을 같은 속성값으로 설정하면 hotkeycolumn 속성은 처리되지 않습니다.


---

### hscrollbar

> Components > Component > MultiLineTextField > Property > hscrollbar

**Description**

MultiLineTextField 의 서브컨트롤인 수평 스크롤바의 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
MultiLineTextField.hscrollbar
```

**Setting Syntax**

```javascript
this.MultiLineTextField00.hscrollbar.decbuttonsize = 30;
```

**Remark**

- scrollbartype 속성값과 앱 실행 환경에 따라 반환하는 오브젝트가 달라집니다.
  ScrollBarControl 또는 ScrollindicatorControl 오브젝트를 반환합니다.

- hscrollbar 속성을 사용하여 수평 스크롤바의 속성값을 변경할 수 있습니다.

- hscrollbar 속성은 읽기전용이므로 해당 속성에 다른 컨트롤을 설정할 수 없지만,
  hscrollbar 속성이 갖는 수평 스크롤바 오브젝트의 하위 속성은 수정이 가능합니다.


---

### id

> Components > Component > MultiLineTextField > Property > id

**Description**

MultiLineTextField의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.id
```

**Setting Syntax**

- **`id`** — MultiLineTextField를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### initvalueid

> Components > Component > MultiLineTextField > Property > initvalueid

**Description**

MultiLineTextField 에 적용될 InitValue 의 ID 를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.initvalueid[= strValueID]
```

**Setting Syntax**

- **`strValueID`** — InitValueDefinition 영역에 정의된 InitValue 파일에서 MultiLineTextField 에 적용할 항목의 ID 를 문자열로 설정합니다.

**Remark**

- MultiLineTextField 가 화면에 표시된 후에는 속성값을 설정하거나 변경 할 수 없습니다.
   MultiLineTextField 를 동적으로 생성 시 show() 메소드 실행 전에 속성값을 설정하여야 합니다.

- Screen 별로 Environment 의 initvaluefileid 속성을 각각 설정하면 Screen 에 따라 다른 초기값을 설정할 수 있습니다.

- InitValueDefinition 영역에 한 개 이상의 InitValue 파일을 정의할 수 있고,
   InitValue 파일에는 컴포넌트별로 여러개의 초기값 정의를 할 수 있습니다.


---

### labelfloatingfixed

> Components > Component > MultiLineTextField > Property > labelfloatingfixed

**Description**

MultiLineTextField 컴포넌트 상태에 따라 라벨을 표시하는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.labelfloatingfixed [=bLabelfloatingfixed]
```

**Setting Syntax**

```javascript
bLabelfloatingfixed ::= true | false
```
```javascript
this.MultiLineTextField00.labelfloatingfixed = true;
```
- **`true`** — 라벨이 labelposition 속성값으로 설정한 위치에 고정되어 표시됩니다.
- **`false`** — 입력값이 없고 컴포넌트가 포커스를 가지지 않을 때는 라벨이 입력창 영역에 표시됩니다.
사용자가 포커스를 MultiLineTextField 컴포넌트로 옮기거나 입력값이 있는 경우에는 labelpostion 속성값으로 설정한 위치에 라벨이 표시됩니다.

**Remark**

- labelfloatingfixed 속성값을 설정하지 않으면 false로 적용됩니다.


---

### labelgap

> Components > Component > MultiLineTextField > Property > labelgap

**Description**

라벨이 표시되는 위치의 간격을 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.labelgap [=nGap]
```

**Setting Syntax**

```javascript
this.MultiLineTextField00.labelgap = 10;
```
- **`nGap`** — labelposition 속성값에 따라 라벨이 표시되는 위치의 간격을 pixel 단위의 숫자로 설정합니다.

undefined를 설정할 경우 labelposition 속성값이 "outside" 일 때는 0, 그 외는 9로 적용됩니다.

**Remark**

- labelgap 속성값을 설정하지 않으면 undefined로 적용됩니다.

- 컴포넌트의 왼쪽에서 labelgap 속성값만큼의 간격을 두고 라벨이 표시됩니다.

- 라벨이 입력창 영역에 표시되는 경우에는 적용되지 않습니다. 
  labelposition 속성값으로 설정한 위치에 라벨이 표시되는 상태에만 적용됩니다.


---

### labelposition

> Components > Component > MultiLineTextField > Property > labelposition

**Description**

MultiLineTextField 컴포넌트의 라벨을 표시할 위치를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.labelposition [=strLabelPosition]
```

**Setting Syntax**

```javascript
strLabelPosition ::= 'overlap' | 'outside' | 'inside'
```
```javascript
this.MultiLineTextField00.labelposition = "inside";
```
- **`'overlap'`** — 라벨이 MultiLineTextFieldBox 경계선 위에 겹쳐져 표시됩니다.
- **`'outside'`** — 라벨이 MultiLineTextFieldBox 경계선 바깥쪽에 표시됩니다.
- **`'inside'`** — 라벨이 MultiLineTextFieldBox 경계선 안쪽에 표시됩니다.

**Remark**

- labelposition 속성값을 설정하지 않으면 "overlap"으로 적용됩니다.

- labelfloatingfixed 속성값이 false인 경우에는 입력값이 없고 컴포넌트가 포커스를 가지지 않을 때는 labelposition 속성값과 상관없이 입력창 영역에 라벨이 표시됩니다.


---

### labeltext

> Components > Component > MultiLineTextField > Property > labeltext

**Description**

MultiLineTextField 컴포넌트의 라벨로 표시할 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.labeltext [=strLabelText]
```

**Setting Syntax**

```javascript
this.MultiLineTextField00.labeltext = "Description";
```
- **`strLabelText`** — 라벨로 표시할 텍스트를 설정합니다.


---

### layoutorder

> Components > Component > MultiLineTextField > Property > layoutorder

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 순서를 설정합니다.

**Syntax**

```javascript
MultiLineTextField.layoutorder[= nVal]
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

> Components > Component > MultiLineTextField > Property > left

**Description**

MultiLineTextField 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.left[= nLeft]
```

**Setting Syntax**

```javascript
nLeft ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.MultiLineTextField00.left = 10; 
this.MultiLineTextField00.left = "10px"; 
this.MultiLineTextField00.left = "10%"; 
this.MultiLineTextField00.left = "Button00:10px"; 
this.MultiLineTextField00.left = "Button00:10%";
```
- **`<strCompID>`** — MultiLineTextField 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 MultiLineTextField 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 MultiLineTextField 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — MultiLineTextField 의 좌측 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 left 속성값을 기준으로 MultiLineTextField의 좌측 위치 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 MultiLineTextField의 좌측 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 MultiLineTextField의 좌측 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 MultiLineTextField의 좌측 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 right 속성값을 기준으로 MultiLineTextField의 좌측 위치 결정
- "%": <strCompID>의 width 속성값을 기준으로 MultiLineTextField의 좌측 위치 결정
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

> Components > Component > MultiLineTextField > Property > letter-spacing

**Description**

MultiLineTextField 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.letterSpacing[= strspace]
```

**Setting Syntax**

```javascript
strspace ::= 'normal' | <nVal> ['px']
```
```javascript
* XCSS
letter-spacing : 2px ;

* Script ( normal property )
this.MultiLineTextField00.letterSpacing = "2px";
```
- **`"normal"`** — 문자 사이의 간격(자간)을 설정하지 않습니다.
- **`<nVal>`** — 문자 사이의 간격(자간)을 pixel 단위로 설정합니다.

스크립트 작성 시에는 "px" 단위 표기를 생략할 수 있습니다.
(XCSS 작성 시에는 "px" 단위를 포함해 작성해야 합니다).

**Remark**

- letter-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "letterSpacing"을 사용해야 합니다.


---

### maxheight

> Components > Component > MultiLineTextField > Property > maxheight

**Description**

MultiLineTextField 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.maxheight[= nMaxHeight]
```

**Setting Syntax**

```javascript
nMaxHeight ::= <nVal> ['px']
```
```javascript
this.MultiLineTextField00.maxheight = 20; 
this.MultiLineTextField00.maxheight = "20px";
```
- **`<nVal>`** — MultiLineTextField 이(가) 화면에 표시되는 높이의 최대값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- height 속성값이 maxheight 보다 크면 화면에 표시되는 MultiLineTextField 의 높이는 maxheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- maxheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxheight 속성값을 minheight 속성값보다 작게 설정하면 minheight 속성값이 maxheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 MultiLineTextField 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.


---

### maxlength

> Components > Component > MultiLineTextField > Property > maxlength

**Description**

MultiLineTextField 컴포넌트에 입력할 수 있는 문자열의 최대길이를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.maxlength [=nMaxlength]
```

**Setting Syntax**

```javascript
this.MultiLineTextField00.maxlength = 10;
```
- **`nMaxlength`** — 입력할 수 있는 문자열의 최대길이를 숫자로 설정합니다.

0 설정 시 입력할 수 있는 최대길이를 제한하지 않습니다.

**Remark**

- maxlength 속성값을 설정하지 않으면 0으로 설정됩니다. 

- 영문, 숫자, 기호, 다국어 모두 한 문자가 1로 계산됩니다. 

- 문자열의 길이가 maxlength 속성값과 같아지면 입력이 제한됩니다. 

- 스크립트로 value 값 설정 시 maxlength 속성은 적용되지 않습니다.


---

### maxwidth

> Components > Component > MultiLineTextField > Property > maxwidth

**Description**

MultiLineTextField 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.maxwidth[= nMaxWidth]
```

**Setting Syntax**

```javascript
nMaxWidth ::= <nVal> ['px']
```
```javascript
this.MultiLineTextField00.maxwidth = 20; 
this.MultiLineTextField00.maxwidth = "20px";
```
- **`<nVal>`** — MultiLineTextField 이(가) 화면에 표시되는 너비의 최대값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- width 속성값이 maxwidth 보다 크면 화면에 표시되는 MultiLineTextField 의 너비는 maxwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- maxwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxwidth 속성값을 minwidth 속성값보다 작게 설정하면 minwidth 속성값이 maxwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 MultiLineTextField 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.


---

### minheight

> Components > Component > MultiLineTextField > Property > minheight

**Description**

MultiLineTextField 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.minheight[= nMinHeight]
```

**Setting Syntax**

```javascript
nMinHeight ::= <nVal> ['px']
```
```javascript
this.MultiLineTextField00.minheight = 20; 
this.MultiLineTextField00.minheight = "20px";
```
- **`<nVal>`** — MultiLineTextField 이(가) 화면에 표시되는 높이의 최소값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- height 속성값이 minheight 보다 작다면 화면에 표시되는 MultiLineTextField 의 높이는 minheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- minheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minheight 속성값을 maxheight 속성값보다 크게 설정하면 maxheight 속성값이 minheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 MultiLineTextField 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.


---

### minwidth

> Components > Component > MultiLineTextField > Property > minwidth

**Description**

MultiLineTextField 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.minwidth[= nMinWidth]
```

**Setting Syntax**

```javascript
nMinWidth ::= <nVal> ['px']
```
```javascript
this.MultiLineTextField00.minwidth = 20; 
this.MultiLineTextField00.minwidth = "20px";
```
- **`<nVal>`** — MultiLineTextField 이(가) 화면에 표시되는 너비의 최소값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- width 속성값이 minwidth 보다 작으면 화면에 표시되는 MultiLineTextField 의 너비는 minwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- minwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minwidth 속성값을 maxwidth 속성값보다 크게 설정하면 maxwidth 속성값이 minwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 MultiLineTextField 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.


---

### name

> Components > Component > MultiLineTextField > Property > name

**Description**

MultiLineTextField 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### opacity

> Components > Component > MultiLineTextField > Property > opacity

**Description**

MultiLineTextField 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.opacity[= stropacity]
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8;
opacity : 80%;

* Script ( normal property )
this.MultiLineTextField00.opacity = "0.8";
this.MultiLineTextField00.opacity = 0.8;
this.MultiLineTextField00.opacity = "80%";
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

> Components > Component > MultiLineTextField > Property > parent

**Description**

MultiLineTextField 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
MultiLineTextField.parent
```

**Setting Syntax**

```javascript
var objParent = this.MultiLineTextField00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- MultiLineTextField 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### positionstep

> Components > Component > MultiLineTextField > Property > positionstep

**Description**

부모 오브젝트가 화면분할기능을 사용할 때 MultiLineTextField 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.positionstep[= nStep]
```

**Setting Syntax**

```javascript
this.MultiLineTextField00.positionstep = 0; 
this.MultiLineTextField00.positionstep = -1;
```
- **`nStep`** — MultiLineTextField 이(가) 표시될 분할화면의 인덱스를 설정합니다.
"-1" 로 설정하면 모든 분할화면에 MultiLineTextField 이(가) 표시됩니다.

분할화면의 인덱스는 "0" 부터 시작합니다.

**Remark**

- positionstep 에 설정된 인덱스값과 일치하는 분할화면에만 컴포넌트가 표시됩니다.

- 분할화면에 표시되지 않는 컴포넌트의 visible 속성값은 "false"로 변경되지 않습니다.


---

### readonly

> Components > Component > MultiLineTextField > Property > readonly

**Description**

MultiLineTextField 에서 편집을 허용할 지 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.readonly[= bReadOnly]
```

**Setting Syntax**

```javascript
bReadOnly ::= 'true' | 'false'
```
- **`true`** — MultiLineTextField 의 편집을 불가능하게 설정합니다.
편집이 불가능하여도 편집영역의 선택 및 복사 기능은 사용 가능합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "readonly" Status 가 적용됩니다.
"readonly" Status 가 없는 하위 컨트롤은 "disabled" Status 가 적용됩니다.
- **`false`** — MultiLineTextField 의 편집을 가능하게 설정합니다.

**Remark**

- readonly 속성값을 설정하지 않으면 false 로 적용됩니다.


◆ Android WRE 제약

- Android WRE 는 편집영역의 선택과 복사 기능에 대한 정확한 동작을 보장하지 않습니다.


---

### right

> Components > Component > MultiLineTextField > Property > right

**Description**

MultiLineTextField 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.right[= nRight]
```

**Setting Syntax**

```javascript
nRight ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.MultiLineTextField00.right = 10; 
this.MultiLineTextField00.right = "10px"; 
this.MultiLineTextField00.right = "10%"; 
this.MultiLineTextField00.right = "Button00:10px"; 
this.MultiLineTextField00.right = "Button00:10%";
```
- **`<strCompID>`** — MultiLineTextField 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 MultiLineTextField 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 MultiLineTextField 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — MultiLineTextField 의 우측 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 right 속성값을 기준으로 MultiLineTextField의 우측 위치 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 MultiLineTextField의 우측 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 MultiLineTextField의 우측 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 MultiLineTextField의 우측 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 left 속성값을 기준으로 MultiLineTextField의 우측 위치 결정
- "%": <strCompID>의 width 속성값을 기준으로 MultiLineTextField의 우측 위치 결정
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

> Components > Component > MultiLineTextField > Property > rtl

**Description**

MultiLineTextField 에서 내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.rtl
```

**Setting Syntax**

```javascript
bRtl ::= undefined | 'true' | 'false'
```
```javascript
var vRtl = this.MultiLineTextField00.rtl;
```
- **`undefined`** — undefined 설정 시 상위 컴포넌트의 rtl 속성값이 적용됩니다.

사용자가 rtl 속성값을 설정하지 않거나 삭제했을 경우 undefined 가 설정됩니다.
- **`true`** — MultiLineTextField 의 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 오른쪽으로 설정합니다.
MultiLineTextField 의 내부 좌표계의 기준을 오른쪽으로 설정합니다.
MultiLineTextField 의 텍스트 표시 기준을 오른쪽으로 설정합니다.
수직스크롤바가 있을 경우 왼쪽에 표시됩니다.
- **`false`** — MultiLineTextField 의 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 왼쪽으로 설정합니다.
MultiLineTextField 의 내부 좌표계의 기준을 왼쪽으로 설정합니다.
MultiLineTextField 의 텍스트 표시 기준을 왼쪽으로 설정합니다.
수직스크롤바가 있을 경우 오른쪽에 표시됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 아랍권 같이 화면의 표시기준이 오른쪽인 환경에서 컨텐츠의 표시 기준을 변경하기 위해 설정하는 속성입니다.

- MultiLineTextField 부터 Environment 까지 상위의 모든 rtl 속성값이 undefined 이면
   Environment 의 locale 속성에 설정된 국가 및 언어 설정값을 기준으로 rtl 속성이 적용됩니다.
   Environment 의 locale 속성값을 설정하지 않았을 경우 시스템의 국가 및 언어 설정값이 적용됩니다.


---

### scrollbarbarminsize

> Components > Component > MultiLineTextField > Property > scrollbarbarminsize

**Description**

MultiLineTextField 에 표시되는 스크롤바의 트랙바(TrackBar) 최소크기를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.scrollbarbarminsize[= nSize]
```

**Setting Syntax**

```javascript
this.MultiLineTextField00.scrollbarbarminsize = 20;
```
- **`nSize`** — 스크롤바의 트랙바 최소크기를 pixel 단위의 숫자로 설정합니다.

음수값은 설정할 수 없습니다.

**Remark**

- scrollbarbarminsize 속성값을 설정하지 않으면 undefined 가 설정되고 트랙바 크기에 맞는 적당한 값으로 동작합니다.

- scrollbartrackbarsize 속성값이 설정되어 있으면 scrollbarbarminsize 속성값은 무시됩니다.

- MultiLineTextField 의 크기 변경에 의해 트랙바의 크기가 자동변경될 때 scrollbarbarminsize 속성값 미만으로 작아지지 않습니다.

- 트랙바가 표시되는 영역보다 scrollbarbarminsize 속성값을 크게 설정해도 트랙바는 표시영역까지만 표현됩니다.


---

### scrollbarbaroutsize

> Components > Component > MultiLineTextField > Property > scrollbarbaroutsize

**Description**

MultiLineTextField 의 스크롤바에서 트랙바(TrackBar)가 사라지는 기준 크기를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.scrollbarbaroutsize[= nSize]
```

**Setting Syntax**

```javascript
this.MultiLineTextField00.scrollbarbaroutsize( 50 );
```
- **`nSize`** — 스크롤바의 트랙바가 사라지는 기준 크기를 pixel 단위의 숫자로 설정합니다.

음수값은 설정할 수 없습니다.

**Remark**

- scrollbarbaroutsize 속성값을 설정하지 않으면 undefined 가 설정되고 트랙바 크기에 맞는 적당한 값으로 동작합니다.

- MultiLineTextField 의 크기가 변경되어 스크롤바가 줄어들 때 트랙바를 표시할 공간이 scrollbarbaroutsize 속성값보다 작아지면 트랙바를 표시하지 않습니다.


---

### scrollbardecbuttonsize

> Components > Component > MultiLineTextField > Property > scrollbardecbuttonsize

**Description**

MultiLineTextField 컴포넌트에 표시되는 스크롤바의 감소 버튼(DecButton) 크기를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.scrollbardecbuttonsize [=nSize]
```

**Setting Syntax**

```javascript
this.MultiLineTextField00.scrollbardecbuttonsize = 30;
```
- **`nSize`** — 스크롤바의 감소 버튼(DecButton) 크기를 pixel 단위의 숫자로 설정합니다.

음수값이나 MultiLineTextField 컴포넌트의 너비/높이보다 큰 값을 설정할 수 없습니다.

**Remark**

- scrollbardecbuttonsize 속성값을 설정하지 않으면 scrollbarsize에 적용된 값이 적용됩니다. 

- scrollbardecbuttonsize 속성값은 수직/수평 스크롤바에 동일하게 적용됩니다. 

- 수직스크롤바의 감소 버튼(DecButton) 높이는 scrollbardecbuttonsize 속성으로 설정하고 너비는 scrollbarsize 속성으로 설정합니다. 

- 수평스크롤바의 감소 버튼(DecButton) 너비는 scrollbardecbuttonsize 속성으로 설정하고 높이는 scrollbarsize 속성으로 설정합니다.


---

### scrollbarincbuttonsize

> Components > Component > MultiLineTextField > Property > scrollbarincbuttonsize

**Description**

MultiLineTextField 컴포넌트에 표시되는 스크롤바의 증가 버튼(IncButton) 크기를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.scrollbarincbuttonsize [=nSize]
```

**Setting Syntax**

```javascript
this.MultiLineTextField00.scrollbarincbuttonsize = 30;
```
- **`nSize`** — 스크롤바의 증가 버튼(IncButton) 크기를 pixel 단위의 숫자로 설정합니다.

음수값이나 MultiLineTextField 컴포넌트의 너비/높이보다 큰 값을 설정할 수 없습니다.

**Remark**

- scrollbarincbuttonsize 속성값을 설정하지 않으면 scrollbarsize에 적용된 값이 적용됩니다. 

- scrollbarincbuttonsize 속성값은 수직/수평 스크롤바에 동일하게 적용됩니다. 

- 수직스크롤바의 증가 버튼(IncButton) 높이는 scrollbarincbuttonsize 속성으로 설정하고 너비는 scrollbarsize 속성으로 설정합니다. 

- 수평스크롤바의 증가 버튼(IncButton) 너비는 scrollbarincbuttonsize 속성으로 설정하고 높이는 scrollbarsize 속성으로 설정합니다.


---

### scrollbarsize

> Components > Component > MultiLineTextField > Property > scrollbarsize

**Description**

MultiLineTextField 컴포넌트에 표시되는 스크롤바의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.scrollbarsize [=nSize]
```

**Setting Syntax**

```javascript
this.MultiLineTextField00.scrollbarsize = 30;
```
- **`nSize`** — 스크롤바의 크기를 pixel 단위의 숫자로 설정합니다.

**Remark**

- scrollbarsize 속성값은 수직스크롤바의 너비와 수평스크롤바의 높이에 동일하게 적용됩니다.

- scrollbarsize 속성값을 변경하면 스크롤바 내부버튼의 높이와 너비가 같이 변경됩니다.


---

### scrollbartrackbarsize

> Components > Component > MultiLineTextField > Property > scrollbartrackbarsize

**Description**

MultiLineTextField 에 표시되는 스크롤바의 트랙바(TrackBar) 크기를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.scrollbartrackbarsize[= nSize]
```

**Setting Syntax**

```javascript
this.MultiLineTextField00.scrollbartrackbarsize = 20;
```
- **`nSize`** — 스크롤바의 트랙바 크기를 pixel 단위의 숫자로 설정합니다.

-1 을 설정하면 MultiLineTextField 크기와 내부 컨텐츠에 따라 트랙바 크기가 자동으로 조절됩니다.
-2 이하의 음수값은 설정할 수 없습니다.

**Remark**

- scrollbartrackbarsize 속성값을 설정하지 않으면 undefined 가 설정되고 -1 로 동작합니다.

- scrollbartrackbarsize 속성을 설정하면 내부 컨텐츠와 관계없이 트랙바 크기가 고정되어 표시됩니다.


---

### scrollbartype

> Components > Component > MultiLineTextField > Property > scrollbartype

**Description**

MultiLineTextField 에 스크롤바가 표시되는 형식을 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.scrollbartype[= strBartype]
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
this.MultiLineTextField00.scrollbartype = "none"; 
this.MultiLineTextField00.scrollbartype = "default autoindicator"; 
this.MultiLineTextField00.scrollbartype = "auto fixed"; 
this.MultiLineTextField00.scrollbartype = "indicator none";
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
   ex) this.MultiLineTextField00.scrollbartype = "fixed autoindicator";

**See Also**

MultiLineTextField.scrolltype


---

### scrollindicatorsize

> Components > Component > MultiLineTextField > Property > scrollindicatorsize

**Description**

MultiLineTextField 에 표시되는 스크롤 인디케이터바의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.scrollindicatorsize[= nSize]
```

**Setting Syntax**

```javascript
this.MultiLineTextField00.scrollindicatorsize = 30;
```
- **`nSize`** — 스크롤 인디케이터바의 크기를 pixel 단위의 숫자로 설정합니다.

**Remark**

- scrollindicatorsize 속성값은 수직스크롤바의 너비와 수평스크롤바의 높이에 동일하게 적용됩니다.

- MultiLineTextField 에 스크롤 인디케이터바가 아닌 스크롤바가 표시될 경우 scrollbarsize 속성으로 크기를 설정하여야 합니다.


---

### scrolltype

> Components > Component > MultiLineTextField > Property > scrolltype

**Description**

MultiLineTextField 에서 사용되는 스크롤의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.scrolltype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'both' | 'vertical' | 'horizontal'
```
- **`"none"`** — MultiLineTextField 에서 수평/수직 스크롤을 사용하지 않습니다.
- **`"both"`** — MultiLineTextField 에서 수평/수직 스크롤을 모두 사용합니다.
- **`"vertical"`** — MultiLineTextField 에서 수직 스크롤만 사용합니다.

수평 스크롤은 사용하지 않습니다.
- **`"horizontal"`** — MultiLineTextField 에서 수평 스크롤만 사용합니다.

수직 스크롤은 사용하지 않습니다.

**Remark**

- scrolltype 속성값을 설정하지 않으면 "both" 로 적용됩니다.

- MultiLineTextField 에서 사용되는 스크롤에 대한 자세한 설정은 scrollbartype 속성을 사용하여야 합니다.

**See Also**

MultiLineTextField.scrollbartype


---

### tablecellarea

> Components > Component > MultiLineTextField > Property > tablecellarea

**Description**

Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다.

**Syntax**

```javascript
MultiLineTextField.tablecellarea[= strArea]
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

> Components > Component > MultiLineTextField > Property > taborder

**Description**

탭키 입력으로 컴포넌트간 포커스를 이동할 때 MultiLineTextField 의 순서를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.taborder[= nTabOrder]
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

> Components > Component > MultiLineTextField > Property > tabstop

**Description**

탭키 입력으로 컴포넌트간 포커스를 이동할 때 MultiLineTextField 이(가) 포커스를 받을 지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.tabstop[= bTabStop]
```

**Setting Syntax**

```javascript
bTabStop ::= 'true' | 'false'
```
- **`"true"`** — MultiLineTextField 이(가) 탭키 입력에 의한 포커스를 받습니다.
- **`"false"`** — MultiLineTextField 이(가) 탭키 입력에 의한 포커스를 받지 않습니다.

**Remark**

- tabstop 속성값이 "false"인 경우 taborder 속성값과 관계없이 포커스가 해당 컴포넌트를 건너뜁니다.

- tabstop 속성값에 관계없이 마우스로 직접 포커스를 주거나, setfocus() 메소드 사용 시 포커스를 갖습니다.

- Div 와 같은 컨테이너 컴포넌트에서 포커스를 받을 수 있는 자식 컴포넌트가 존재하면 해당 컴포넌트가 포커스를 갖습니다.


---

### text

> Components > Component > MultiLineTextField > Property > text

**Description**

MultiLineTextField 컴포넌트에 표시되는 문자열을 갖는 읽기 전용 속성입니다.

**Syntax**

```javascript
MultiLineTextField.text
```

**Remark**

- displaynulltext 속성값에 의해 화면에 보이는 문자열은 text 속성에 저장되지 않습니다.


---

### tooltiptext

> Components > Component > MultiLineTextField > Property > tooltiptext

**Description**

MultiLineTextField 에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.tooltiptext[= strToolTipText]
```

**Setting Syntax**

```javascript
this.MultiLineTextField00.tooltiptext = "This is ToolTip Text"; this.MultiLineTextField00.tooltiptext = "";          // 풍선 도움말이 표시되지 않습니다. 

this.MultiLineTextField00.tooltiptext = null;        // 상위 컴포넌트의 풍선 도움말이 표시됩니다.
```
- **`strToolTipText`** — 풍선도움말에 표시할 텍스트를 설정합니다.

빈문자열(EmptyString) 설정 시 풍선도움말이 표시되지 않습니다.
null 또는 undefined 설정 시 상위컴포넌트(Form, Div 등)의 풍선도움말이 표시됩니다.

**Remark**

- tooltiptext 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- 마우스 포인터가 MultiLineTextField 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.

- 풍선도움말이 표시된 상태에서 tooltiptext 속성값을 변경하면 풍선도움말이 사라집니다.


◆ Desktop WRE 제약

- 풍선도움말은 브라우저의 기능을 활용하므로 브라우저 사양에 따라 스타일에 차이가 있을 수 있습니다.
   NRE는 Chrome 의 스타일과 동일하게 적용됩니다.


---

### tooltiptype

> Components > Component > MultiLineTextField > Property > tooltiptype

**Description**

MultiLineTextField 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.tooltiptype[= enumTooltipType]
```

**Setting Syntax**

```javascript
enumTooltipType ::= 'default' | 'hover' | 'inplace' | 'default,mouseleave' | 'hover,mouseleave' | 'inplace,mouseleave'
```
```javascript
this.MultiLineTextField00.tooltiptype = "hover";
```
- **`"default"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 MultiLineTextField 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"hover"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 MultiLineTextField 영역내에 멈춰서 일정시간이 경과하면 풍선도움말이 사라집니다.
MultiLineTextField 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경되거나 사라진 풍선도움말이 다시 표시됩니다.
- **`"inplace"`** — MultiLineTextField 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 MultiLineTextField 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"default,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 MultiLineTextField 영역에 있으면 풍선도움말이 사라지지 않습니다.
- **`"hover,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 MultiLineTextField 영역에 있으면 풍선도움말이 사라지지 않습니다.
MultiLineTextField 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경됩니다.
- **`"inplace,mouseleave"`** — MultiLineTextField 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 MultiLineTextField 영역에 있으면 풍선도움말이 사라지지 않습니다.

**Remark**

- tooltiptype 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- 마우스 포인터가 MultiLineTextField 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.

- 풍선도움말이 표시된 상태에서 tooltiptext 속성값을 변경하면 tooltiptype 속성값에 관계없이 풍선도움말이 사라집니다.

- 표시되었다가 사라진 풍선도움말은 마우스 포인터가 MultiLineTextField 영역을 나갔다가 들어오면 다시 표시됩니다.

- 마우스 포인터가 MultiLineTextField 영역에서 벗어나면 풍선도움말이 사라집니다.

- 풍선도움말의 크기는 풍선도움말에 표시되는 텍스트의 길이와 크기에 맞춰 자동으로 조정됩니다.

- 풍선도움말에 표시되는 텍스트의 글꼴과 크기는 변경하실 수 없습니다.


---

### top

> Components > Component > MultiLineTextField > Property > top

**Description**

MultiLineTextField 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.top[= nTop]
```

**Setting Syntax**

```javascript
nTop ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.MultiLineTextField00.top = 10; 
this.MultiLineTextField00.top = "10px"; 
this.MultiLineTextField00.top = "10%"; 
this.MultiLineTextField00.top = "Button00:10px"; 
this.MultiLineTextField00.top = "Button00:10%";
```
- **`<strCompID>`** — MultiLineTextField 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 MultiLineTextField 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 MultiLineTextField 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — MultiLineTextField의 상단 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 top 속성값을 기준으로 MultiLineTextField의 상단 위치 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 MultiLineTextField의 상단 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 MultiLineTextField의 상단 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 MultiLineTextField의 상단 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 bottom 속성값을 기준으로 MultiLineTextField의 상단 위치 결정
- "%": <strCompID>의 height 속성값을 기준으로 MultiLineTextField의 상단 위치 결정
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

### usecharcount

> Components > Component > MultiLineTextField > Property > usecharcount

**Description**

입력 중인 글자 수 정보를 표시할지 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.usecharcount [=bUseCharCount]
```

**Setting Syntax**

```javascript
bUseCharCount ::= true | false
```
```javascript
this.MultiLineTextField00.usecharcount = true;
```
- **`true`** — 입력 중인 글자 수 정보를 표시합니다.
- **`false`** — 입력 중인 글자 수 정보를 표시하지 않습니다.

**Remark**

- usecharcount 속성값을 설정하지 않으면 false로 적용됩니다.

- (현재 입력한 글자 수) / (maxlength 속성값) 형식으로 표시합니다.
  maxlength 속성값을 설정하지 않은 경우에는 (현재 입력한 글자 수) / 0 형식으로 표시합니다.


---

### usecontextmenu

> Components > Component > MultiLineTextField > Property > usecontextmenu

**Description**

MultiLineTextField 의 편집영역에서 오른쪽 마우스 클릭 시 기본팝업메뉴의 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.usecontextmenu[= bUseContextMenu]
```

**Setting Syntax**

```javascript
bUseContextMenu ::= 'true' | 'false'
```
```javascript
this.MultiLineTextField00.usecontextmenu = true;
```
- **`true`** — 편집영역에서 오른쪽 마우스 클릭 시 기본팝업메뉴가 표시됩니다.
- **`false`** — 편집영역에서 오른쪽 마우스 클릭 시 기본팝업메뉴가 표시되지 않습니다.

**Remark**

- usecontextmenu 속성값을 설정하지 않으면 true 로 적용됩니다.

- Environment 의 usecontextmenu 속성값이 "none" 또는 "form" 인 경우 MultiLineTextField 의 usecontextmenu 속성은 false 로 동작합니다.

- 기본팝업메뉴란 마우스 오른쪽 버튼 클릭하거나 터치를 일정시간 유지할 때 시스템에 의해 표시되는 자동 메뉴를 의미합니다.

- 기본팝업메뉴는 oncontextmenu 이벤트가 발생한 후에 표시됩니다.

- 기본팝업메뉴를 일시적으로 표시하지 않으려면 oncontextmenu 이벤트에서 preventDefault() 를 실행하여 Default Action 을 취소하거나
   환경에 따라 onrbuttondown, onrbuttonup 이벤트에서 preventDefault() 를 실행하여 oncontextmenu 이벤트 발생을 취소할 수 있습니다.

- 일반적으로 onrbuttondown -> onrbuttonup -> oncontextmenu 순서로 이벤트가 발생하지만
   예외적으로 아래 환경은 onrbuttondown -> oncontextmenu -> onrbuttonup 순서로 이벤트가 발생합니다.
   : Safari 브라우저, macOS 환경의 전체 웹브라우저, Mobile 전체환경


◆ iOS 제약

- iOS 는 기본팝업메뉴를 제어할 수 없는 제약으로 지원하지 않습니다.


---

### usehelpertext

> Components > Component > MultiLineTextField > Property > usehelpertext

**Description**

helpertext 속성값으로 지정한 텍스트를 표시할지 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.usehelpertext [=bUseHelperText]
```

**Setting Syntax**

```javascript
bUseHelperText ::= true | false
```
```javascript
this.MultiLineTextField00.usehelpertext = true;
```
- **`true`** — helpertext 속성값으로 지정한 텍스트를 표시합니다.
- **`false`** — helpertext 속성값으로 지정한 텍스트를 표시하지 않습니다.

**Remark**

- usehelpertext 속성값을 설정하지 않으면 false로 적용됩니다.


---

### usesoftkeyboard

> Components > Component > MultiLineTextField > Property > usesoftkeyboard

**Description**

MultiLineTextField 가 포커스를 가질 때 키패드의 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.usesoftkeyboard[= bUseKeyboard]
```

**Setting Syntax**

```javascript
bUseKeyboard ::= true | false
```
```javascript
this.MultiLineTextField00.usesoftkeyboard = false;
```
- **`true`** — MultiLineTextField 가 포커스를 가질 때 키패드가 자동으로 표시됩니다.
- **`false`** — MultiLineTextField 가 포커스를 가질 때 키패드가 표시되지 않습니다.

**Remark**

- usesoftkeyboard 속성값을 설정하지 않으면 true 로 적용됩니다.


◆ Windows NRE 제약

- Windows NRE 는 OS 가 Windows 10 이상이고, 연결된 키보드가 없을 때만 적용됩니다.


---

### value

> Components > Component > MultiLineTextField > Property > value

**Description**

MultiLineTextField 컴포넌트에 표시되는 문자열을 갖는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.value [=strValue]
```

**Setting Syntax**

```javascript
this.MultiLineTextField00.value = "Hello";
```
- **`strValue`** — 화면에 표시될 문자열을 설정합니다.

**Remark**

- value 속성값을 설정하지 않으면 undefined로 적용됩니다. 

- MultiLineTextField 컴포넌트와 Dataset 오브젝트를 바인딩하는 경우에 기본으로 연동되는 속성입니다. 

- displaynulltext 속성값에 의해 화면에 보이는 문자열은 value 속성에 저장되지 않습니다. 

- 넥사크로 스튜디오에서 줄 바꿈을 하기 위해서는 "Ctrl+Enter"를 사용합니다. 
또한, value 속성값에 "&#10;" 이 있다면 줄 바꿈 처리됩니다. 

- 스크립트로 value 속성 설정 시 개행문자 CR/LF("\r\n")는 LF('\n')로 자동 변경되고, CR("\r")은 삭제됩니다. 

- value 속성이 Dataset에 바인드 되어 있을 경우 datatyperule 속성값에 따라 value 속성의 타입 처리가 달라집니다. 
> datatyperule="1.0" 일 때 : 바인드 된 Column의 타입으로 value 속성의 타입이 변경됩니다. 
> datatyperule="2.0" 일 때 : value 속성은 string 타입으로 처리됩니다. 

- value 속성이 Dataset 오브젝트에 바인드 되어 있지 않을 경우 value 속성은 string 타입으로 처리됩니다.


---

### visible

> Components > Component > MultiLineTextField > Property > visible

**Description**

MultiLineTextField 이(가) 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
this.MultiLineTextField00.visible = true; 
this.MultiLineTextField00.visible = false;
```
- **`"true"`** — MultiLineTextField 을(를) 화면에 표시합니다.
- **`"false"`** — MultiLineTextField 을(를) 화면에 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하는 즉시 컴포넌트의 표시 여부가 화면에 반영됩니다.

- visible 속성값이 "false"이면 컴포넌트가 화면에 표시되지 않고, 포커스를 받을 수 없으므로 입력이나 사용이 불가능합니다.

- Div 와 같은 컨테이너 컴포넌트의 visible 속성값을 "false"로 설정하면 자식 컴포넌트도 함께 화면에 표시되지 않습니다.

- visible 속성값이 "false"이어도 컴포넌트는 존재하기 때문에 스크립트로 제어가 가능합니다.

- 넥사크로 스튜디오에서는 visible 속성값을 'false'로 설정해도 디자인화면에서 사라지지 않습니다.


---

### vscrollbar

> Components > Component > MultiLineTextField > Property > vscrollbar

**Description**

MultiLineTextField 의 서브컨트롤인 수직 스크롤바의 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
MultiLineTextField.vscrollbar
```

**Setting Syntax**

```javascript
this.MultiLineTextField00.vscrollbar.decbuttonsize = 30;
```

**Remark**

- scrollbartype 속성값과 앱 실행 환경에 따라 반환하는 오브젝트가 달라집니다.
  ScrollBarControl 또는 ScrollindicatorControl 오브젝트를 반환합니다.

- vscrollbar 속성을 사용하여 수직 스크롤바의 속성값을 변경할 수 있습니다.

- vscrollbar 속성은 읽기전용이므로 해당 속성에 다른 컨트롤을 설정할 수 없지만,
  vscrollbar 속성이 갖는 수직 스크롤바 오브젝트의 하위 속성은 수정이 가능합니다.


---

### width

> Components > Component > MultiLineTextField > Property > width

**Description**

MultiLineTextField 을(를) 표시하기 위한 너비를 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.width[= nWidth]
```

**Setting Syntax**

```javascript
nWidth ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.MultiLineTextField00.width = 10; this.MultiLineTextField00.width = "10px"; 
this.MultiLineTextField00.width = "10%"; 
this.MultiLineTextField00.width = "Button00:10%";
```
- **`<strCompID>`** — MultiLineTextField 의 너비를 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 MultiLineTextField 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 MultiLineTextField 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 너비가 적용됩니다.
- **`<nVal>`** — MultiLineTextField 의 너비를 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": MultiLineTextField의 너비 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 MultiLineTextField의 너비 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 MultiLineTextField의 너비 결정
- "rem": MainFrame font-size 속성값을 기준으로 MultiLineTextField의 너비 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID> 값은 무시되고 설정값이 MultiLineTextField의 너비 결정
- "%": <strCompID>의 width 속성값을 기준으로 MultiLineTextField의 너비 결정
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

> Components > Component > MultiLineTextField > Property > word-spacing

**Description**

MultiLineTextField 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다.

**Syntax**

```javascript
MultiLineTextField.wordSpacing[= strwordspacing]
```

**Setting Syntax**

```javascript
strWordSpacing ::= 'normal' | <nVal>'px'
```
```javascript
* XCSS
word-spacing : 30px;

* Script ( normal property )
this.MultiLineTextField00.wordSpacing = "30px";
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

> Components > Component > MultiLineTextField > Method > addEvent

**Description**

MultiLineTextField 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.addEvent( strEventID )
```

**Parameters**

```
MultiLineTextField 에 추가할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 추가에 성공하면 true 를 반환합니다.

이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- MultiLineTextField 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.


---

### addEventHandler

> Components > Component > MultiLineTextField > Method > addEventHandler

**Description**

MultiLineTextField 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.addEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > MultiLineTextField > Method > addEventHandlerLookup

**Description**

함수를 검색하여 MultiLineTextField 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

> Components > Component > MultiLineTextField > Method > bringToFront

**Description**

부모가 동일한 컴포넌트 중 MultiLineTextField 이(가) 화면의 제일 앞에 표시되게 합니다.

**Syntax**

```javascript
MultiLineTextField.bringToFront()
```

**Parameters**

this.MultiLineTextField.bringToFront();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToFront() 메소드는 MultiLineTextField 을(를) 가장 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 앞에 표시되게 됩니다.


---

### bringToPrev

> Components > Component > MultiLineTextField > Method > bringToPrev

**Description**

부모가 동일한 컴포넌트 중 MultiLineTextField 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**

```javascript
MultiLineTextField.bringToPrev()
```

**Parameters**

this.MultiLineTextField.bringToPrev();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToPrev() 메소드는 MultiLineTextField 을(를) 한단계 나중에 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 앞에 표시되게 됩니다.


---

### clearEventHandler

> Components > Component > MultiLineTextField > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.clearEventHandler( strEventID )
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

### deleteText

> Components > Component > MultiLineTextField > Method > deleteText

**Description**

MultiLineTextField 컴포넌트의 입력값 중 특정위치에서 특정길이만큼 텍스트를 삭제하는 메서드입니다.

**Syntax**

```javascript
MultiLineTextField.deleteText( [nIndex [,nCnt]] )
```

**Parameters**

```
삭제를 시작할 특정 위치의 인덱스를 숫자로 설정합니다.

인덱스는 0부터 시작하며 "0~텍스트길이"까지 설정할 수 있습니다.
```

**Return**

없음

**Remark**

- nIndex 값을 설정하지 않으면 0으로 적용됩니다.

- nCnt 값을 설정하지 않으면 -1로 적용됩니다.

- 삭제하려는 텍스트에 개행문자(Carriage Return, Line Feed)가 포함되어 있을 경우 개행문자도 각각 1로 계산하므로 주의하여야 합니다.


---

### destroy

> Components > Component > MultiLineTextField > Method > destroy

**Description**

스크립트에서 동적으로 생성한 MultiLineTextField 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.destroy()
```

**Parameters**

var bSucc = this.MultiLineTextField00.destroy();

**Return**

MultiLineTextField 이(가) 정상적으로 삭제되면 true 를 반환합니다.

MultiLineTextField 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 MultiLineTextField 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildMultiLineTextField.initMultiLineTextField.show


---

### find

> Components > Component > MultiLineTextField > Method > find

**Description**

MultiLineTextField 컴포넌트의 value 속성값에서 특정 텍스트의 시작위치를 반환하는 메서드입니다.

**Syntax**

```javascript
MultiLineTextField.find( strText [,nIndex] )
```

**Parameters**

```
value 속성값에서 찾으려고 하는 텍스트를 설정합니다.
```

**Return**

인수로 전달된 텍스트의 시작 인덱스 값을 반환합니다.
일치하는 텍스트가 없을 경우 -1을 반환합니다.

**Remark**

- nIndex 값을 설정하지 않으면 0으로 적용됩니다.

- 개행문자(Carriage Return, Line Feed)도 각각 1로 계산하므로 시작위치 계산 시 주의하여야 합니다.


---

### findEventHandler

> Components > Component > MultiLineTextField > Method > findEventHandler

**Description**

MultiLineTextField 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.findEventHandler( strEventID, objFunc, objTarget )
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

### getCaretPos

> Components > Component > MultiLineTextField > Method > getCaretPos

**Description**

MultiLineTextField 컴포넌트에서 캐럿이 위치한 인덱스를 반환하는 메서드입니다.

**Syntax**

```javascript
MultiLineTextField.getCaretPos()
```

**Parameters**

var nCaretPos = this.MultiLineTextField00.getCaretPos();

**Return**

캐럿이 위치한 인덱스를 반환합니다.
읽기 전용 상태이거나 MultiLineTextField 컴포넌트에 포커스가 없으면 "-1"을 반환합니다.

첫 번째 위치의 인덱스는 0입니다.

**Remark**

- MultiLineTextField 컴포넌트에 포커스가 있고 캐럿이 표시되고 있어야 합니다.


---

### getEventHandler

> Components > Component > MultiLineTextField > Method > getEventHandler

**Description**

MultiLineTextField 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.getEventHandler( strEventID, nIdx )
```

**Parameters**

```
핸들러 함수를 얻을 이벤트의 ID를 설정합니다.
```

**Return**

지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.

지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.


---

### getHScrollPos

> Components > Component > MultiLineTextField > Method > getHScrollPos

**Description**

MultiLineTextField 에 표시된 수평스크롤바의 트랙바 위치값을 반환하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.getHScrollPos()
```

**Parameters**

var nScrollPos = this.MultiLineTextField00.getHScrollPos();

**Return**

수평스크롤바의 현재 트랙바 위치값을 반환합니다.

**Remark**

- scrollbartype 속성값에 따라 표시되는 스크롤바 종류에 관계없이 위치값을 반환합니다.

- 수직스크롤바의 트랙바 위치값을 구하려면 getVScrollPos() 메소드를 사용하여야 합니다.

**See Also**

MultiLineTextField.getVScrollPosMultiLineTextField.scrollbartype


---

### getLength

> Components > Component > MultiLineTextField > Method > getLength

**Description**

MultiLineTextField 컴포넌트의 value 속성에 설정된 문자열의 길이를 반환하는 메서드입니다.

**Syntax**

```javascript
MultiLineTextField.getLength()
```

**Parameters**

var nLength = this.MultiLineTextField00.getLength();

**Return**

영문, 숫자, 기호, 다국어 등 문자 종류에 관계없이 문자 하나를 1로 계산하여 문자열의 길이를 반환합니다.

**Remark**

- 스크립트로 value 속성 설정 시 개행문자 CR/LF("\r\n")는 LF('\n')로 자동 변경되고, CR("\r")은 삭제됩니다.

- 개행문자(CR, LF)도 각각 "1"로 계산하므로 주의하여야 합니다.


---

### getOffsetBottom

> Components > Component > MultiLineTextField > Method > getOffsetBottom

**Description**

부모 컴포넌트의 Top 위치를 기준으로 MultiLineTextField 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.getOffsetBottom();
```

**Parameters**

var nBottom = this.MultiLineTextField.getOffsetBottom();

**Return**

부모 컴포넌트의 Top 위치를 기준으로 MultiLineTextField 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 MultiLineTextField 의 bottom 값을 동적으로 계산합니다.


---

### getOffsetHeight

> Components > Component > MultiLineTextField > Method > getOffsetHeight

**Description**

MultiLineTextField 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.getOffsetHeight();
```

**Parameters**

var nHeight = this.MultiLineTextField.getOffsetHeight();

**Return**

MultiLineTextField 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 MultiLineTextField 의 높이를 동적으로 계산합니다.


---

### getOffsetLeft

> Components > Component > MultiLineTextField > Method > getOffsetLeft

**Description**

부모 컴포넌트의 Left 위치를 기준으로 MultiLineTextField 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.getOffsetLeft();
```

**Parameters**

var nleft = this.MultiLineTextField.getOffsetLeft();

**Return**

부모 컴포넌트의 Left 위치를 기준으로 MultiLineTextField 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 MultiLineTextField 의 left 값을 동적으로 계산합니다.


---

### getOffsetRight

> Components > Component > MultiLineTextField > Method > getOffsetRight

**Description**

부모 컴포넌트의 Left 위치를 기준으로 MultiLineTextField 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.getOffsetRight();
```

**Parameters**

var nRight = this.MultiLineTextField.getOffsetRight();

**Return**

부모 컴포넌트의 Left 위치를 기준으로 MultiLineTextField 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 MultiLineTextField 의 right 값을 동적으로 계산합니다.


---

### getOffsetTop

> Components > Component > MultiLineTextField > Method > getOffsetTop

**Description**

부모 컴포넌트의 Top 위치를 기준으로 MultiLineTextField 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.getOffsetTop();
```

**Parameters**

var nTop = this.MultiLineTextField.getOffsetTop();

**Return**

부모 컴포넌트의 Top 위치를 기준으로 MultiLineTextField 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 MultiLineTextField 의 top 값을 동적으로 계산합니다.


---

### getOffsetWidth

> Components > Component > MultiLineTextField > Method > getOffsetWidth

**Description**

MultiLineTextField 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.getOffsetWidth();
```

**Parameters**

var nWidth = this.MultiLineTextField.getOffsetWidth();

**Return**

MultiLineTextField 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 MultiLineTextField 의 너비를 동적으로 계산합니다.


---

### getPixelBottom

> Components > Component > MultiLineTextField > Method > getPixelBottom

**Description**

MultiLineTextField 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.getPixelBottom();
```

**Parameters**

var nbottom = this.MultiLineTextField.getPixelBottom();

**Return**

MultiLineTextField 의 bottom 속성값을 픽셀단위로 반환합니다.

bottom 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- bottom 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelHeight

> Components > Component > MultiLineTextField > Method > getPixelHeight

**Description**

MultiLineTextField 의 height 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.getPixelHeight();
```

**Parameters**

var nheight = this.MultiLineTextField.getPixelHeight();

**Return**

MultiLineTextField 의 height 속성값을 픽셀단위로 반환합니다.

height 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- height 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelLeft

> Components > Component > MultiLineTextField > Method > getPixelLeft

**Description**

MultiLineTextField 의 left 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.getPixelLeft();
```

**Parameters**

var nleft = this.MultiLineTextField.getPixelLeft();

**Return**

MultiLineTextField 의 left 속성값을 픽셀단위로 반환합니다.

left 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- left 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelRight

> Components > Component > MultiLineTextField > Method > getPixelRight

**Description**

MultiLineTextField 의 right 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.getPixelRight();
```

**Parameters**

var nright = this.MultiLineTextField.getPixelRight();

**Return**

MultiLineTextField 의 right 속성값을 픽셀단위로 반환합니다.

right 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- right 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelTop

> Components > Component > MultiLineTextField > Method > getPixelTop

**Description**

MultiLineTextField 의 top 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.getPixelTop();
```

**Parameters**

var ntop = this.MultiLineTextField.getPixelTop();

**Return**

MultiLineTextField 의 top 속성값을 픽셀단위로 반환합니다.

top 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- top 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelWidth

> Components > Component > MultiLineTextField > Method > getPixelWidth

**Description**

MultiLineTextField 의 width 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.getPixelWidth();
```

**Parameters**

var nwidth = this.MultiLineTextField.getPixelWidth();

**Return**

MultiLineTextField 의 width 속성값을 픽셀단위로 반환합니다.

width 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- width 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getSelect

> Components > Component > MultiLineTextField > Method > getSelect

**Description**

MultiLineTextField 컴포넌트의 텍스트 편집 영역에서 선택한 텍스트의 시작 인덱스와 끝 인덱스를 배열 형태로 반환하는 메서드입니다.

**Syntax**

```javascript
MultiLineTextField.getSelect()
```

**Parameters**

var vArrSelect = this.MultiLineTextField00.getSelect();

**Return**

- 선택한 텍스트의 시작 인덱스와 끝 인덱스를 배열로 반환합니다.
- 선택한 텍스트가 없는 경우 현재 캐럿 위치의 인덱스 값을 배열 형태로 반환합니다.
  예를 들어, 캐럿 위치의 인덱스 값이 1인 경우 [1, 1]을 반환합니다.
- 텍스트 편집 영역의 상태를 확인할 수 없는 경우 [0, 0]을 반환합니다.

**Remark**

- MultiLineTextField 컴포넌트의 텍스트 편집 영역에 포커스가 있고 캐럿이 표시된 상태에서만 정상적으로 값을 반환합니다.

- 인덱스 값 계산 시 화면에 표시되고 선택할 수 있는 문자(예: 마스크 문자, 공백 문자, 숫자 기호)를 포함합니다.
  
- 컴포넌트의 속성에 따라 선택한 텍스트 영역을 처리할 수 없는 경우 메서드 실행 시 [0, 0]을 반환합니다.
  - 텍스트 편집 영역이 비활성화된 경우
    Calendar 컴포넌트의 type 속성값이 "monthonly"인 경우
    Calendar 컴포넌트의 popuptype 속성값이 "normal" 또는 "system"이고 모바일 환경에서 실행한 경우
    Spin 컴포넌트의 type 속성값이 "spinonly"인 경우
  - 웹 표준 스펙에서 지원하지 않는 경우
    WRE 환경에서 TextField 컴포넌트의 inputtype 속성값이 "email" 또는 "number"인 경우


◆ WRE 제약

- onsetfocus 이벤트 핸들러 함수 내에서 getSelect 메서드 실행 시 잘못된 값을 반환할 수 있습니다.


---

### getSelectedText

> Components > Component > MultiLineTextField > Method > getSelectedText

**Description**

MultiLineTextField 컴포넌트의 텍스트 편집 영역에서 선택한 텍스트를 반환하는 메서드입니다.

**Syntax**

```javascript
MultiLineTextField.getSelectedText()
```

**Parameters**

var strText = this.MultiLineTextField00.getSelectedText();

**Return**

- 편집영역에서 선택한 텍스트를 반환합니다.
- 선택된 텍스트가 없을 경우 빈값을 반환합니다.
- 텍스트 편집 영역의 상태를 확인할 수 없는 경우 빈값을 반환합니다.

**Remark**

- MultiLineTextField 컴포넌트의 텍스트 편집 영역에 포커스가 있고 캐럿이 표시된 상태에서만 정상적으로 값을 반환합니다.

- 화면에 표시되고 선택할 수 있는 문자(예: 마스크 문자, 공백 문자, 숫자 기호)를 포함합니다.
  
- 컴포넌트의 속성에 따라 선택한 텍스트 영역을 처리할 수 없는 경우 메서드 실행 시 빈값을 반환합니다.
  - 텍스트 편집 영역이 비활성화된 경우
    Calendar 컴포넌트의 type 속성값이 "monthonly"인 경우
    Calendar 컴포넌트의 popuptype 속성값이 "normal" 또는 "system"이고 모바일 환경에서 실행한 경우
    Spin 컴포넌트의 type 속성값이 "spinonly"인 경우
  - 웹 표준 스펙에서 지원하지 않는 경우
    WRE 환경에서 TextField 컴포넌트의 inputtype 속성값이 "email" 또는 "number"인 경우


---

### getVScrollPos

> Components > Component > MultiLineTextField > Method > getVScrollPos

**Description**

MultiLineTextField 에 표시된 수직스크롤바의 트랙바 위치값을 반환하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.getVScrollPos()
```

**Parameters**

var nScrollPos = this.MultiLineTextField00.getVScrollPos();

**Return**

수직스크롤바의 현재 트랙바 위치값을 반환합니다.

**Remark**

- scrollbartype 속성값에 따라 표시되는 스크롤바 종류에 관계없이 위치값을 반환합니다.

- 수평스크롤바의 트랙바 위치값을 구하려면 getHScrollPos() 메소드를 사용하여야 합니다.

**See Also**

MultiLineTextField.getHScrollPosMultiLineTextField.scrollbartype


---

### init

> Components > Component > MultiLineTextField > Method > init

**Description**

스크립트로 MultiLineTextField 을(를) 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

**Parameters**

```
MultiLineTextField 의 ID를 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- 인수값에 기준 컴포넌트를 포함하면 MultiLineTextField 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 MultiLineTextField 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 MultiLineTextField 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

- 스크립트에서 동적으로 컴포넌트를 생성한 후에만 사용할 수 있습니다.
  동적으로 생성한 컴포넌트가 아닌 경우에는 오동작이 발생할수 있습니다.

- show() 메소드로 컴포넌트가 화면에 표시되면 초기화가 끝난 상태입니다.
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다.

- 동적으로 생성한 컴포넌트를 컨테이너 컴포넌트에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildMultiLineTextField.destroyMultiLineTextField.show


---

### insertEventHandler

> Components > Component > MultiLineTextField > Method > insertEventHandler

**Description**

MultiLineTextField 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

### insertText

> Components > Component > MultiLineTextField > Method > insertText

**Description**

MultiLineTextField 컴포넌트의 특정 위치에 새로운 텍스트를 삽입하는 메서드입니다.

**Syntax**

```javascript
MultiLineTextField.insertText( strText [,nIndex] )
```

**Parameters**

```
value 속성값에 삽입하려 하는 텍스트를 설정합니다.
```

**Return**

없음

**Remark**

- nIndex 값을 설정하지 않으면 -1로 적용됩니다.

- 개행문자(Carriage Return, Line Feed)도 각각 1로 계산하므로 삽입위치 계산 시 주의하여야 합니다.


---

### move

> Components > Component > MultiLineTextField > Method > move

**Description**

MultiLineTextField 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.move( vLeft, vTop [, vWidth, vHeight [, vRight, vBottom]] )
```

**Parameters**

```
MultiLineTextField 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* 값에 기준 컴포넌트를 포함하여 설정했을 때 :
pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 MultiLineTextField 의 left 가 결정됩니다.
비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 MultiLineTextField 의 left 가 결정됩니다.
```

**Return**

없음

**Remark**

- 인수값에 기준 컴포넌트를 포함하면 MultiLineTextField 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 MultiLineTextField 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 MultiLineTextField 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.


---

### moveToNext

> Components > Component > MultiLineTextField > Method > moveToNext

**Description**

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 MultiLineTextField 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**

```javascript
MultiLineTextField.moveToNext( objComp )
MultiLineTextField.moveToNext( strComp )
```

**Parameters**

```
기준이 되는 컴포넌트를 오브젝트로 설정합니다.
```

**Return**

없음

**Remark**

- 인수로 전달되는 기준 컴포넌트와 MultiLineTextField 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToNext() 메소드는 기준 컴포넌트보다 MultiLineTextField 이(가) 한단계 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 뒤에 표시되게 됩니다.


---

### moveToPrev

> Components > Component > MultiLineTextField > Method > moveToPrev

**Description**

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 MultiLineTextField 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**

```javascript
MultiLineTextField.moveToPrev( objComp )
MultiLineTextField.moveToPrev( strComp )
```

**Parameters**

```
기준이 되는 컴포넌트를 오브젝트로 설정합니다.
```

**Return**

없음

**Remark**

- 인수로 전달되는 기준 컴포넌트와 MultiLineTextField 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToPrev() 메소드는 기준 컴포넌트보다 MultiLineTextField 이(가) 한단계 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 앞에 표시되게 됩니다.


---

### removeEvent

> Components > Component > MultiLineTextField > Method > removeEvent

**Description**

MultiLineTextField 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.removeEvent( strEventID )
```

**Parameters**

```
MultiLineTextField 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 삭제에 성공하면 true 를 반환합니다.

이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- MultiLineTextField 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- MultiLineTextField 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.


---

### removeEventHandler

> Components > Component > MultiLineTextField > Method > removeEventHandler

**Description**

MultiLineTextField 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.removeEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > MultiLineTextField > Method > removeEventHandlerLookup

**Description**

MultiLineTextField 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

### replace

> Components > Component > MultiLineTextField > Method > replace

**Description**

MultiLineTextField 컴포넌트의 value 속성값에서 특정 텍스트를 새로운 텍스트로 모두 치환하는 메서드입니다.

**Syntax**

```javascript
MultiLineTextField.replace( strOld [,strNew] )
```

**Parameters**

```
value 속성값에서 새로운 텍스트로 치환될 텍스트를 설정합니다.
```

**Return**

새로운 텍스트로 치환이 완료된 문자열을 반환합니다.

**Remark**

- strNew 값을 설정하지 않으면 빈문자열("")로 적용되어 결과적으로 strOld 값이 모두 삭제되는 효과가 있습니다.


---

### resize

> Components > Component > MultiLineTextField > Method > resize

**Description**

MultiLineTextField 의 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.resize( vWidth, vHeight )
```

**Parameters**

```
MultiLineTextField 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.
음수값을 설정할 수 없습니다.

* 값에 기준 컴포넌트를 포함하여 설정했을 때 :
pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 MultiLineTextField 의 width 가 결정됩니다.
비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 MultiLineTextField 의 width 가 결정됩니다.
```

**Return**

없음

**Remark**

- MultiLineTextField 의 left 속성값이 null 이 아니면 resize() 메소드 실행 후 MultiLineTextField 의 우측 위치가 변경됩니다.
  또한, 메소드 실행 후 right 속성값은 null 이 됩니다.

- MultiLineTextField 의 left 속성값이 null 이면 resize() 메소드 실행 후 MultiLineTextField 의 좌측 위치가 변경됩니다.
  또한, 메소드 실행 후 left 속성값은 null 로 유지됩니다.

- MultiLineTextField 의 top 속성값이 null 이 아니면 resize() 메소드 실행 후 MultiLineTextField 의 하단 위치가 변경됩니다.
  또한, 메소드 실행 후 bottom 속성값은 null 이 됩니다.

- MultiLineTextField 의 top 속성값이 null 이면 resize() 메소드 실행 후 MultiLineTextField 의 상단 위치가 변경됩니다.
  또한, 메소드 실행 후 top 속성값은 null 로 유지됩니다.

- 인수값에 기준 컴포넌트를 포함하면 MultiLineTextField 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vWidth, vHeight 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 MultiLineTextField 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 MultiLineTextField 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.


---

### scrollBy

> Components > Component > MultiLineTextField > Method > scrollBy

**Description**

MultiLineTextField 에 표시된 스크롤을 현재 위치에서 인수로 전달된 값만큼 이동시키는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.scrollBy( nHoffsetpos, nVoffsetpos )
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

MultiLineTextField.scrollTo


---

### scrollTo

> Components > Component > MultiLineTextField > Method > scrollTo

**Description**

MultiLineTextField 에 표시된 스크롤을 특정 위치로 이동시키는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.scrollTo( nHpos, nVpos )
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

MultiLineTextField.scrollBy


---

### sendToBack

> Components > Component > MultiLineTextField > Method > sendToBack

**Description**

부모가 동일한 컴포넌트 중 MultiLineTextField 이(가) 화면의 제일 뒤에 표시되게 합니다.

**Syntax**

```javascript
MultiLineTextField.sendToBack()
```

**Parameters**

this.MultiLineTextField.sendToBack();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToBack() 메소드는 MultiLineTextField 을(를) 가장 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 뒤에 표시되게 됩니다


---

### sendToNext

> Components > Component > MultiLineTextField > Method > sendToNext

**Description**

부모가 동일한 컴포넌트 중 MultiLineTextField 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**

```javascript
MultiLineTextField.sendToNext()
```

**Parameters**

this.MultiLineTextField.sendToNext();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToNext() 메소드는 MultiLineTextField 을(를) 한단계 먼저 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 뒤에 표시되게 됩니다.


---

### setCaretPos

> Components > Component > MultiLineTextField > Method > setCaretPos

**Description**

MultiLineTextField 컴포넌트에서 캐럿의 위치를 인덱스로 설정하는 메서드입니다.

**Syntax**

```javascript
MultiLineTextField.setCaretPos( [nIndex] )
```

**Parameters**

```
캐럿이 위치할 인덱스를 숫자로 설정합니다.

인덱스는 0부터 시작하며 "0~텍스트 길이"까지 설정할 수 있습니다.
-1을 설정할 경우 캐럿이 텍스트의 마지막에 위치합니다.
```

**Return**

캐럿 설정에 성공하면 true를 반환합니다.
캐럿 설정에 실패하면 false를 반환합니다.

**Remark**

- nIndex 값을 생략할 경우 0으로 적용됩니다.

- MultiLineTextField 컴포넌트에 포커스가 있고 캐럿이 표시되고 있어야 합니다.

- 개행문자(Carriage Return, Line Feed)도 각각 1로 계산하므로 위치계산 시 주의하여야 합니다.

◆ NRE 제약 (Windows, macOS, Android)
- 문자열 입력 시 입력 확정 처리가 필요한 문자를 사용하는 경우 미확정 상태에서 setCaretPos 메소드는 동작하지 않습니다.


---

### setEventHandler

> Components > Component > MultiLineTextField > Method > setEventHandler

**Description**

MultiLineTextField 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.setEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > MultiLineTextField > Method > setEventHandlerLookup

**Description**

MultiLineTextField 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

> Components > Component > MultiLineTextField > Method > setFocus

**Description**

MultiLineTextField 에 포커스를 설정하는 메서드입니다.

**Syntax**

```javascript
MultiLineTextField.setFocus( [bMoveScroll] )
```

**Parameters**

```
부모 컴포넌트에 스크롤이 있을 경우, MultiLineTextField 기준으로 스크롤을 이동할지 여부를 설정합니다.

true: MultiLineTextField 이(가) 화면에 표시되도록 스크롤을 이동합니다.
false: MultiLineTextField 위치와 관계없이 스크롤을 이동하지 않습니다.

값을 지정하지 않으면 기본값은 true입니다.
```

**Return**

MultiLineTextField 이(가) 포커스를 얻기 전에 포커스를 가지고 있던 컴포넌트를 반환합니다.
이전에 포커스를 가진 컴포넌트가 없거나 메소드 실행에 실패한 경우에는 null을 반환합니다.

**Remark**

- enableaccessibility 속성값과 관계없이 전달된 파라미터값을 기준으로 동작합니다.


---

### setOffsetBottom

> Components > Component > MultiLineTextField > Method > setOffsetBottom

**Description**

부모 컴포넌트의 Top 위치를 기준으로 MultiLineTextField 의 bottom 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.setOffsetBottom( nBottom );
```

**Parameters**

```
부모 컴포넌트의 Top 위치를 기준으로 MultiLineTextField 의 bottom 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 MultiLineTextField 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > MultiLineTextField 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > MultiLineTextField 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > MultiLineTextField 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.


---

### setOffsetHeight

> Components > Component > MultiLineTextField > Method > setOffsetHeight

**Description**

MultiLineTextField 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.setOffsetHeight( nHeight );
```

**Parameters**

```
MultiLineTextField 의 높이를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 MultiLineTextField 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > MultiLineTextField 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > MultiLineTextField 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > MultiLineTextField 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.


---

### setOffsetLeft

> Components > Component > MultiLineTextField > Method > setOffsetLeft

**Description**

부모 컴포넌트의 Left 위치를 기준으로 MultiLineTextField 의 left 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.setOffsetLeft( nLeft );
```

**Parameters**

```
부모 컴포넌트의 Left 위치를 기준으로 MultiLineTextField 의 left 값을 픽셀단위의 숫자로 설정합니다
```

**Return**

없음

**Remark**

- 메소드 실행 전 MultiLineTextField 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > MultiLineTextField 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > MultiLineTextField 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, right 속성이 설정됩니다.
   > MultiLineTextField 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.


---

### setOffsetRight

> Components > Component > MultiLineTextField > Method > setOffsetRight

**Description**

부모 컴포넌트의 Left 위치를 기준으로 MultiLineTextField 의 right 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.setOffsetRight( nRight );
```

**Parameters**

```
부모 컴포넌트의 Left 위치를 기준으로 MultiLineTextField 의 right 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 MultiLineTextField 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > MultiLineTextField 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > MultiLineTextField 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > MultiLineTextField 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.


---

### setOffsetTop

> Components > Component > MultiLineTextField > Method > setOffsetTop

**Description**

부모 컴포넌트의 Top 위치를 기준으로 MultiLineTextField 의 top 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.setOffsetTop( nTop );
```

**Parameters**

```
부모 컴포넌트의 Top 위치를 기준으로 MultiLineTextField 의 top 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 MultiLineTextField 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > MultiLineTextField 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > MultiLineTextField 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, bottom 속성이 설정됩니다.
   > MultiLineTextField 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.


---

### setOffsetWidth

> Components > Component > MultiLineTextField > Method > setOffsetWidth

**Description**

MultiLineTextField 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.setOffsetWidth( nWidth );
```

**Parameters**

```
MultiLineTextField 의 너비를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 MultiLineTextField 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > MultiLineTextField 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > MultiLineTextField 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > MultiLineTextField 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.


---

### setSelect

> Components > Component > MultiLineTextField > Method > setSelect

**Description**

MultiLineTextField 컴포넌트에 포커스가 있을 때 인수로 지정된 영역을 선택하는 메서드입니다.

**Syntax**

```javascript
MultiLineTextField.setSelect( [nBegin [,nEnd]] )
```

**Parameters**

```
선택할 영역의 시작 인덱스를 숫자로 설정합니다.

인덱스는 0부터 시작하며 "0~텍스트 길이"까지 설정할 수 있습니다.
-1을 설정하면 선택할 영역의 시작 위치가 텍스트 마지막 위치로 설정됩니다.

값 생략 시 0으로 적용됩니다.
```

**Return**

지정된 영역의 선택에 성공하면 true를 반환합니다.

지정된 영역의 선택에 실패하면 false를 반환합니다.

**Remark**

- setSelect 메서드 실행 전에 편집영역이 포커스 되어 있어야 합니다.

- 개행문자(Carriage Return, Line Feed)도 각각 1로 계산하므로 영역 계산 시 주의하여야 합니다.

- nBegin 값이 nEnd 값 보다 클 경우 오른쪽부터 영역이 선택되고, 캐럿은 선택된 영역의 오른쪽에 위치합니다.


◆ Mobile WRE 제약

- Mobile WRE는 nBegin, nEnd 값에 따라 정상적으로 선택되지 않을 수 있습니다.


---

### setSelectedText

> Components > Component > MultiLineTextField > Method > setSelectedText

**Description**

MultiLineTextField 컴포넌트에서 현재 선택되어 있는 텍스트를 전달된 인수값으로 변경하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.setSelectedText( strText )
```

**Parameters**

```
MultiLineTextField 컴포넌트에 선택되어 있는 텍스트를 대체할 문자열을 설정합니다.
```

**Return**

MultiLineTextField 컴포넌트에 선택되어 있던 텍스트를 문자열로 반환합니다.

**Remark**

- MultiLineTextField 컴포넌트에 선택된 텍스트가 없으면 setSelectedText 메서드는 동작하지 않습니다.


---

### show

> Components > Component > MultiLineTextField > Method > show

**Description**

스크립트로 동적 생성한 MultiLineTextField 을(를) 화면에 표시하는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.show()
```

**Parameters**

this.MultiLineTextField00.show();

**Return**

없음

**Remark**

- show() 메소드는 컴포넌트가 폼 또는 컨테이너 컴포넌트의 자식 컴포넌트로 등록된 상태에서 사용이 가능합니다.
  자식 컴포넌트로 등록된 상태가 아닌 경우에는 오동작이 발생할 수 있습니다.

- 컴포넌트를 컨테이너에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildMultiLineTextField.destroyMultiLineTextField.init


---

### updateToDataset

> Components > Component > MultiLineTextField > Method > updateToDataset

**Description**

MultiLineTextField 의 value 속성값을 바인딩 되어 있는 DataSet 에 즉시 반영시키는 메소드입니다.

**Syntax**

```javascript
MultiLineTextField.updateToDataset()
```

**Parameters**

var bSucc = this.MultiLineTextField00.updateToDataset();

**Return**

반영에 성공하면 "true"를 반환합니다.

반영에 실패하면 "false"를 반환합니다.

**Remark**

- MultiLineTextField 의 value 속성이 DataSet 에 바인딩 되어 있어야 합니다.

- MultiLineTextField 의 value 속성값이 바인딩 되어있는 Dataset 의 값과 같으면 Dataset 에 값이 반영되지 않고 "false"를 반환합니다.


---

### 이벤트 (Events)

### canchange

> Components > Component > MultiLineTextField > Event > canchange

**Description**

MultiLineTextField 컴포넌트에서 value 속성값이 변경될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
canchange(obj:nexacro.MultiLineTextField,e:nexacro.ChangeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값을 true로 반환하면 value 속성값을 변경합니다.
이벤트에서 리턴값을 false로 반환하면 value 속성값이 변경되지 않고, 화면에 표시되는 텍스트도 원복 됩니다.

이벤트에서 리턴값을 생략하면 true로 적용됩니다.

**Remark**

- 스크립트로 value 속성값을 변경할 때는 canchange 이벤트가 발생하지 않습니다.

- MultiLineTextField 컴포넌트에서 문자를 입력/삭제 후 포커스를 이동하면 value 속성값이 변경됩니다.


---

### onchanged

> Components > Component > MultiLineTextField > Event > onchanged

**Description**

MultiLineTextField 컴포넌트에서 value 속성값이 변경된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
onchanged(obj:nexacro.MultiLineTextField,e:nexacro.ChangeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- canchange 이벤트에서 false를 반환하면 onchanged 이벤트는 발생하지 않습니다.

- MultiLineTextField 컴포넌트에서 문자를 입력/삭제 후 포커스를 이동하면 value 속성값이 변경됩니다.


---

### oncontextmenu

> Components > Component > MultiLineTextField > Event > oncontextmenu

**Description**

MultiLineTextField 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다.

**Syntax**

```javascript
oncontextmenu(obj:nexacro.MultiLineTextField,e:nexacro.ContextMenuEventInfo);
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
   usecontextmenu 속성값이 false 이면 기본팝업메뉴가 표시되지 않습니다.
   iOS 환경은 기본팝업메뉴의 표시를 제어할 수 없습니다.


---

### ondevicebuttonup

> Components > Component > MultiLineTextField > Event > ondevicebuttonup

**Description**

모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondevicebuttonup(obj:nexacro.MultiLineTextField,e:nexacro.DeviceButtonEventInfo);
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

> Components > Component > MultiLineTextField > Event > ondrag

**Description**

MultiLineTextField 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondrag(obj:nexacro.MultiLineTextField,e:nexacro.DragEventInfo);
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

- MultiLineTextField 영역 내에서 마우스의 LButtonDown 후 LButtonUp 액션 없이 마우스 이동 시 ondrag 이벤트가 발생합니다.

- 이벤트의 리턴값을 true 로 하여 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등

- 에디트 계열 컴포넌트에서 마우스로 드래그 시 화면의 문자열을 선택할 지 드래그 상태를 발생시킬지 여부는 이벤트의 리턴값으로 결정됩니다.


---

### ondragenter

> Components > Component > MultiLineTextField > Event > ondragenter

**Description**

MultiLineTextField 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragenter(obj:nexacro.MultiLineTextField,e:nexacro.DragEventInfo);
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

- 드래그 상태를 유지하고 있으면 MultiLineTextField 영역으로 마우스 포인터가 들어올 때마다 이벤트가 발생합니다.


---

### ondragleave

> Components > Component > MultiLineTextField > Event > ondragleave

**Description**

MultiLineTextField 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragleave(obj:nexacro.MultiLineTextField,e:nexacro.DragEventInfo);
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

- 드래그 상태를 유지하고 있으면 MultiLineTextField 영역에서 마우스 포인터가 나갈 때마다 이벤트가 발생합니다.


---

### ondragmove

> Components > Component > MultiLineTextField > Event > ondragmove

**Description**

MultiLineTextField 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragmove(obj:nexacro.MultiLineTextField,e:nexacro.DragEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트의 리턴값으로 "true"를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트의 리턴값으로 "false"를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트의 리턴값을 생략하면 "false"로 적용됩니다.

**Remark**

- 드래그 상태를 유지하고 있으면 MultiLineTextField 영역 내에서 마우스 포인터가 움직일 때마다 이벤트가 발생합니다.


---

### ondrop

> Components > Component > MultiLineTextField > Event > ondrop

**Description**

MultiLineTextField 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondrop(obj:nexacro.MultiLineTextField,e:nexacro.DragEventInfo);
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

- MultiLineTextField 영역 내에서 드래그 상태인 마우스의 LButtonUp 액션 발생 시 ondrop 이벤트가 발생합니다.

- 넥사크로에서 발생한 드래그 또는 어플리케이션 외부에서 파일을 드래그 했을 때 ondrop 이벤트를 발생시킬 수 있습니다.

- 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등


---

### oneditclick

> Components > Component > MultiLineTextField > Event > oneditclick

**Description**

MultiLineTextField 컴포넌트의 텍스트 편집 영역에서 마우스 왼쪽 버튼을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
oneditclick(obj:nexacro.MultiLineTextField,e:nexacro.EditClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 컴포넌트의 텍스트 편집 영역에서 마우스 왼쪽 버튼을 클릭했을 때 발생합니다.
  onlbuttondown 이벤트와 onlbuttonup 이벤트가 차례로 발생한 뒤, oneditclick 이벤트가 발생합니다.
  단, 텍스트 편집 영역에서 마우스로 드래그하여 텍스트를 선택하는 경우, oneditclick 이벤트 대신 ondrag 이벤트가 발생합니다.


---

### onhscroll

> Components > Component > MultiLineTextField > Event > onhscroll

**Description**

MultiLineTextField 의 수평 스크롤바를 스크롤 했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onhscroll(obj:nexacro.MultiLineTextField,e:nexacro.ScrollEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### oninput

> Components > Component > MultiLineTextField > Event > oninput

**Description**

MultiLineTextField 에서 입력을 시도할 때 발생하는 이벤트 입니다.

**Syntax**

```javascript
oninput(obj:nexacro.MultiLineTextField,e:nexacro.InputEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 조합문자 입력 시 oninput 이벤트가 한번 이상 발생할 수 있습니다.

- 일본어 IME로 일본어 입력(조합중이고 확정이 안된 상태)중이면 붙여넣기 기능이 동작하지 않습니다.


◆ WRE 제약

- 동일한 입력에 대해 브라우저의 특성에 따라 oninput 이벤트 발생 횟수가 다를 수 있습니다.

- 조합문자 입력확정 동작에서 oninput 이벤트가 발생하지 않는 브라우저가 있을 수 있습니다.
   조합문자 입력확정 동작은 입력시도로 볼 수 없기 때문에 oninput 이벤트의 발생을 보장하지 않습니다.


---

### onkeydown

> Components > Component > MultiLineTextField > Event > onkeydown

**Description**

MultiLineTextField 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkeydown(obj:nexacro.MultiLineTextField,e:nexacro.KeyEventInfo);
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

- Tab 키 다운 시 컴포넌트의 포커스를 이동합니다.

**Default Action**

- 좌우방향키 다운 : 캐럿 이동 처리  

- 엔터키 다운 : 줄바꿈 처리  

- 삭제/백스페이스키 다운 : 문자 삭제 처리  

- 스페이스키 다운 : 스페이스 문자 입력 또는 일본어 변환 (일본어 IME 인 경우)  

- 조합키 [Shift+Right/Left] 다운 : 텍스트 선택 처리  

- 숫자/영문/다국어문자키 다운 : 해당 문자 입력 처리  

- 페이지 다운/업키 다운 : 스크롤 다운/업 처리


---

### onkeyup

> Components > Component > MultiLineTextField > Event > onkeyup

**Description**

MultiLineTextField 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkeyup(obj:nexacro.MultiLineTextField,e:nexacro.KeyEventInfo);
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

> Components > Component > MultiLineTextField > Event > onkillfocus

**Description**

MultiLineTextField 에서 포커스가 나갈  때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkillfocus(obj:nexacro.MultiLineTextField,e:nexacro.KillFocusEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 서로 다른 애플리케이션 단위로 포커스가 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showModal(), open() 등의 메소드로 팝업된 Frame 으로 포커스가 이동하는 경우 MultiLineTextField 에서 포커스 관련 이벤트가 발생하지 않습니다.
   또한, alert(), confirm() 메소드로 표시된 팝업으로 포커스가 이동하는 경우도 MultiLineTextField 에서 포커스 관련 이벤트가 발생하지 않습니다.


---

### onlbuttondown

> Components > Component > MultiLineTextField > Event > onlbuttondown

**Description**

MultiLineTextField 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onlbuttondown(obj:nexacro.MultiLineTextField,e:nexacro.MouseEventInfo);
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

- MultiLineTextField 영역 내에서 마우스의 LButtonDown 액션이 발생하면 이벤트가 발생합니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

**Basic Action**

＊ pseudo 표시

**Default Action**

＊ 컴포넌트 포커스 처리  
＊ 캐럿 표시


---

### onlbuttonup

> Components > Component > MultiLineTextField > Event > onlbuttonup

**Description**

MultiLineTextField 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onlbuttonup(obj:nexacro.MultiLineTextField,e:nexacro.MouseEventInfo);
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

＊ pseudo 표시

**Default Action**

＊ 컴포넌트 내 다운/업 인 경우 : 클릭 이벤트 발생


---

### onmouseenter

> Components > Component > MultiLineTextField > Event > onmouseenter

**Description**

MultiLineTextField 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmouseenter(obj:nexacro.MultiLineTextField,e:nexacro.MouseEventInfo);
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

> Components > Component > MultiLineTextField > Event > onmouseleave

**Description**

MultiLineTextField 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmouseleave(obj:nexacro.MultiLineTextField,e:nexacro.MouseEventInfo);
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

> Components > Component > MultiLineTextField > Event > onmousemove

**Description**

MultiLineTextField 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmousemove(obj:nexacro.MultiLineTextField,e:nexacro.MouseEventInfo);
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

### onmousewheel

> Components > Component > MultiLineTextField > Event > onmousewheel

**Description**

MultiLineTextField 영역 내에서 마우스의 휠버튼을 회전했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmousewheel(obj:nexacro.MultiLineTextField,e:nexacro.MouseWheelEventInfo);
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

- MultiLineTextField 에서 마우스의 휠버튼 회전값을 처리할 필요가 없을 때 상위 컴포넌트로 휠버튼 회전값과 이벤트가 전파됩니다.
   즉, MultiLineTextField 에서 스크롤이 이동될 때는 상위로 이벤트가 전파되지 않고, 스크롤이 처음이나 마지막 상태일 때 상위로 이벤트가 전파됩니다.

- Control 키를 누른 상태에서 휠버튼을 회전시키면 환경에 따라 아래와 같이 Zoom 이 발생합니다.
   > Windows NRE 는 window 화면단위로 50%~200% 범위 내에서 10% 단위로 Zoom 이 변경됩니다.
   > Desktop WRE는 웹 브라우저에서 지원하는 범위/간격에 따라 Zoom이 변경됩니다.

- Zoom 상태에서도 MultiLineTextField 에서 이벤트가 발생하고 리턴값에 따라 상위로 전파되므로 스크립트 작성 시 주의하여야 합니다.
   이 때, 스크롤은 처리되지 않으며 e.ctrlkey 속성값이 true 로 설정됩니다.

**Default Action**

- MultiLineTextField 컴포넌트에 스크롤바가 있다면 이벤트 발생 후 스크롤을 이동시킵니다.


---

### onmove

> Components > Component > MultiLineTextField > Event > onmove

**Description**

MultiLineTextField 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmove(obj:nexacro.MultiLineTextField,e:nexacro.MoveEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onrbuttondown

> Components > Component > MultiLineTextField > Event > onrbuttondown

**Description**

MultiLineTextField 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrbuttondown(obj:nexacro.MultiLineTextField,e:nexacro.MouseEventInfo);
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
   onrbuttonup 이벤트 발생이 필요하다면 onrbuttondown 또는 oncontextmenu 이벤트에서 preventDefault 메서드로
   Default Action을 취소하거나 usecontextmenu 속성을 사용하여 기본팝업메뉴를 비활성화시켜야 합니다.

**Default Action**

- onrbuttondown 이벤트 종료 후 이벤트가 발생한 컴포넌트로 포커스가 이동됩니다.
  단, GroupBox, Static 컴포넌트는 포커스가 이동하지 않습니다.

- 일반적으로 onrbuttondown -> onrbuttonup -> oncontextmenu 순서로 이벤트가 발생하지만
   예외적으로 아래 환경은 onrbuttondown -> oncontextmenu -> onrbuttonup 순서로 이벤트가 발생하므로 주의하여야 합니다.
   : Safari 브라우저, macOS 환경의 전체 웹브라우저, Mobile 전체환경


---

### onrbuttonup

> Components > Component > MultiLineTextField > Event > onrbuttonup

**Description**

MultiLineTextField 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrbuttonup(obj:nexacro.MultiLineTextField,e:nexacro.MouseEventInfo);
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
   onrbuttonup 이벤트 발생이 필요하다면 onrbuttondown 또는 oncontextmenu 이벤트에서 preventDefault 메서드로
   Default Action을 취소하거나 usecontextmenu 속성을 사용하여 기본팝업메뉴를 비활성화시켜야 합니다.

**Default Action**

- onrbuttonup 이벤트 종료 후 oncontextmenu 이벤트가 발생합니다.
   예외적으로 아래 환경은 onrbuttondown -> oncontextmenu -> onrbuttonup 순서로 이벤트가 발생하므로 주의하여야 합니다.
   : Safari 브라우저, macOS 환경의 전체 웹브라우저, Mobile 전체환경


---

### onsetfocus

> Components > Component > MultiLineTextField > Event > onsetfocus

**Description**

MultiLineTextField 에 포커스가 들어올 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsetfocus(obj:nexacro.MultiLineTextField,e:nexacro.SetFocusEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 서로 다른 애플리케이션 단위로 포커스가 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showModal(), open() 등의 메소드로 팝업된 Frame 으로 포커스가 이동하는 경우 MultiLineTextField 에서 포커스 관련 이벤트가 발생하지 않습니다.
   또한, alert(), confirm() 메소드로 표시된 팝업으로 포커스가 이동하는 경우도 MultiLineTextField 에서 포커스 관련 이벤트가 발생하지 않습니다.

- open() 메소드로 오픈된 Modeless 창에서 부모창의 MultiLineTextField 에 setFocus() 메소드 실행 시 환경에 따라 동작에 차이가 있으므로 주의하여야 합니다.
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

> Components > Component > MultiLineTextField > Event > onsize

**Description**

MultiLineTextField 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsize(obj:nexacro.MultiLineTextField,e:nexacro.SizeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### ontouchend

> Components > Component > MultiLineTextField > Event > ontouchend

**Description**

MultiLineTextField 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchend(obj:nexacro.MultiLineTextField,e:nexacro.TouchEventInfo);
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

> Components > Component > MultiLineTextField > Event > ontouchmove

**Description**

MultiLineTextField 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchmove(obj:nexacro.MultiLineTextField,e:nexacro.TouchEventInfo);
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

> Components > Component > MultiLineTextField > Event > ontouchstart

**Description**

MultiLineTextField 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchstart(obj:nexacro.MultiLineTextField,e:nexacro.TouchEventInfo);
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


---

### onvscroll

> Components > Component > MultiLineTextField > Event > onvscroll

**Description**

MultiLineTextField 의 수직 스크롤바를 스크롤 했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onvscroll(obj:nexacro.MultiLineTextField,e:nexacro.ScrollEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---
