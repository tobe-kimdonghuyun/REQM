# nexacroN V24 — TextField

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 154개

---

## Components > Component > TextField

### TextField

> Components > Component > TextField

**Description**

TextField 컴포넌트는 사용자로부터 한 줄로 된 문자열을 입력하는 데 쓰이는 컴포넌트입니다.

**Remark**

- TextField 컴포넌트는 inputtype이나 pattern 속성값을 설정해 입력 형식을 지정할 수 있습니다.
  입력 형식에 따라 입력값의 유효성을 검사할 수 있습니다.

- 여러 줄로 된 문자열을 입력받고자 한다면, MultiLineTextField 컴포넌트를 사용해야 합니다.

**Structure**



**Contents Sizing**

TextField 컴포넌트의 크기를 결정하는 기준입니다.

**Basic Key Action**

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 캐럿 이동 | 좌우방향키 | 캐럿이 표시되고 있을 때 캐럿이 좌/우 방향으로 이동됩니다. |
| 텍스트 선택 | Shift + 좌우방향키 | 캐럿이 표시되고 있을 때 입력된 텍스트가 좌/우 방향으로 선택됩니다. |

**Property**

| Name | Description |
| --- | --- |
| autoselect | TextField 컴포넌트의 편집영역이 활성화될 때 텍스트를 전체선택 할지 설정하는 속성입니다. |
| autoskip | TextField 컴포넌트에 입력 중인 문자열의 길이가 maxlength 속성값에 도달했을 때 포커스를 자동으로 이동시킬지 설정하는 속성입니다. |
| background | TextField 의 배경 영역을 설정하는 속성입니다. |
| border-radius | TextField 의 모서리 모양을 설정하는 속성입니다. |
| bottom | TextField 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다. |
| box-shadow | TextField 에 그림자 효과를 설정하는 속성입니다. |
| color | TextField 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| contentheight | box 컨트롤 영역의 높이를 설정하는 속성입니다. |
| cssclass | TextField 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다. |
| cursor | TextField 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| displaynulltext | TextField 의 value 속성값이 null 또는 undefined 일 때 TextField 에 표시될 대체 문자열을 설정하는 속성입니다. |
| enable | TextField 의 사용가능 여부를 설정하는 속성입니다. |
| enableevent | TextField 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다. |
| flexgrow | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축) 여백을 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다. |
| flexshrink | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 영역이 컨테이너 영역을 초과하지 않도록 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다. |
| font | TextField 에서 사용하는 폰트를 설정하는 속성입니다. |
| footerheight | helpertext, charcounttext 컨트롤이 표시되기 위한 영역의 높이를 설정하는 속성입니다. |
| headerheight | 라벨이 labelposition 속성값으로 설정한 위치에 표시되기 위한 영역의 높이를 설정하는 속성입니다. |
| height | TextField 을(를) 표시하기 위한 높이를 설정하는 속성입니다. |
| helpertext | TextField 컴포넌트에 입력할 내용을 사용자에게 설명하는 텍스트를 설정하는 속성입니다. |
| hotkey | TextField 의 기본 액션을 수행하기 위한 단축키를 설정하는 속성입니다. |
| iconbuttonsize | leadingbutton, trailingbutton 이미지 버튼의 크기를 설정하는 속성입니다. |
| id | TextField의 고유 식별자를 설정하는 속성입니다. |
| initvalueid | TextField 에 적용될 InitValue 의 ID 를 설정하는 속성입니다. |
| inputtype | TextField 컴포넌트에 입력할 텍스트의 유효성을 검사할 기준을 설정하는 속성입니다. |
| invalidtext | TextField 컴포넌트에 입력할 내용이 유효하지 않은 경우 사용자에게 설명하는 텍스트를 설정하는 속성입니다. |
| labelfloatingfixed | TextField 컴포넌트 상태에 따라 라벨을 표시하는 방식을 설정하는 속성입니다. |
| labelgap | 라벨이 표시되는 위치의 간격을 설정하는 속성입니다. |
| labelposition | TextField 컴포넌트의 라벨을 표시할 위치를 설정하는 속성입니다. |
| labeltext | TextField 컴포넌트의 라벨로 표시할 텍스트를 설정하는 속성입니다. |
| layoutorder | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 순서를 설정합니다. |
| leadingbuttonsize | leadingbutton 이미지 버튼 크기를 설정하는 속성입니다. |
| left | TextField 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다. |
| letter-spacing | TextField 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다. |
| maxheight | TextField 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다. |
| maxlength | TextField 컴포넌트에 입력할 수 있는 문자열의 최대길이를 설정하는 속성입니다. |
| maxwidth | TextField 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다. |
| minheight | TextField 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다. |
| minwidth | TextField 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다. |
| name | TextField 의 이름을 설정하는 속성입니다. |
| -nexa-border | TextField 의 테두리를 설정하는 속성입니다. |
| -nexa-edge | TextField 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-rtl-background-image | TextField 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| -nexa-rtl-edge-image | TextField 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| opacity | TextField 영역의 투명도를 설정하는 속성입니다. |
| parent | TextField 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| pattern | 입력할 텍스트의 유효성을 검사할 기준을 정규식으로 설정하는 속성입니다. |
| positionstep | 부모 오브젝트가 화면분할기능을 사용할 때 TextField 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다. |
| postfixtext | 입력창 영역 뒤에 표시할 텍스트를 설정하는 속성입니다. |
| prefixtext | 입력창 영역 앞에 표시할 텍스트를 설정하는 속성입니다. |
| readonly | TextField 에서 편집을 허용할 지 설정하는 속성입니다. |
| right | TextField 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다. |
| rtl | TextField 에서 내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다. |
| tablecellarea | Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다. |
| taborder | 탭키 입력으로 컴포넌트간 포커스를 이동할 때 TextField 의 순서를 설정하는 속성입니다. |
| tabstop | 탭키 입력으로 컴포넌트간 포커스를 이동할 때 TextField 이(가) 포커스를 받을 지 여부를 설정하는 속성입니다. |
| text | TextField 컴포넌트에 표시되는 문자열을 갖는 읽기 전용 속성입니다. |
| tooltiptext | TextField 에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다. |
| tooltiptype | TextField 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다. |
| top | TextField 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다. |
| trailingbuttonsize | trailingbutton 이미지 버튼 크기를 설정하는 속성입니다. |
| usecharcount | 입력 중인 글자 수 정보를 표시할지 설정하는 속성입니다. |
| usecontextmenu | TextField 의 편집영역에서 오른쪽 마우스 클릭 시 기본팝업메뉴의 표시 여부를 설정하는 속성입니다. |
| usehelpertext | helpertext, invalidtext 속성값으로 지정한 텍스트를 표시할지 설정하는 속성입니다. |
| useleadingbutton | 입력창 영역 앞에 leadingbutton 이미지 버튼을 표시할지 설정하는 속성입니다. |
| usesoftkeyboard | TextField 가 포커스를 가질 때 키패드의 표시 여부를 설정하는 속성입니다. |
| usetrailingbutton | 입력창 영역 뒤에 trailingbutton 이미지 버튼을 표시할지 설정하는 속성입니다. |
| value | TextField 컴포넌트에 표시되는 문자열을 갖는 속성입니다. |
| visible | TextField 이(가) 화면에 표시될지 여부를 설정하는 속성입니다. |
| width | TextField 을(를) 표시하기 위한 너비를 설정하는 속성입니다. |
| word-spacing | TextField 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addEvent | TextField 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| addEventHandler | TextField 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 TextField 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| bringToFront | 부모가 동일한 컴포넌트 중 TextField 이(가) 화면의 제일 앞에 표시되게 합니다. |
| bringToPrev | 부모가 동일한 컴포넌트 중 TextField 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 TextField 을(를) 삭제하는 메소드입니다. |
| findEventHandler | TextField 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getCaretPos | TextField 컴포넌트에서 캐럿이 위치한 인덱스를 반환하는 메서드입니다. |
| getDisplayText | TextField 에 표시된 텍스트값을 반환하는 메소드입니다. |
| getEventHandler | TextField 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| getLength | TextField 컴포넌트의 value 속성에 설정된 문자열의 길이를 반환하는 메서드입니다. |
| getOffsetBottom | 부모 컴포넌트의 Top 위치를 기준으로 TextField 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetHeight | TextField 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetLeft | 부모 컴포넌트의 Left 위치를 기준으로 TextField 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetRight | 부모 컴포넌트의 Left 위치를 기준으로 TextField 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetTop | 부모 컴포넌트의 Top 위치를 기준으로 TextField 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetWidth | TextField 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getPixelBottom | TextField 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelHeight | TextField 의 height 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelLeft | TextField 의 left 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelRight | 부모 컴포넌트의 Left 위치를 기준으로 TextField 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getPixelTop | TextField 의 top 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelWidth | TextField 의 width 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getSelect | TextField 컴포넌트의 텍스트 편집 영역에서 선택한 텍스트의 시작 인덱스와 끝 인덱스를 배열 형태로 반환하는 메서드입니다. |
| getSelectedText | TextField 컴포넌트의 텍스트 편집 영역에서 선택한 텍스트를 반환하는 메서드입니다. |
| getValidStatus | TextField 컴포넌트에 입력한 텍스트의 유효성 검사 결과를 반환하는 메서드입니다. |
| init | 스크립트로 TextField 을(를) 동적 생성한 후에 초기화하는 메소드입니다. |
| insertEventHandler | TextField 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| move | TextField 의 위치와 크기를 변경하는 메소드입니다. |
| moveToNext | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 TextField 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| moveToPrev | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 TextField 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| removeEvent | TextField 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| removeEventHandler | TextField 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | TextField 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| resize | TextField 의 크기를 변경하는 메소드입니다. |
| sendToBack | 부모가 동일한 컴포넌트 중 TextField 이(가) 화면의 제일 뒤에 표시되게 합니다. |
| sendToNext | 부모가 동일한 컴포넌트 중 TextField 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| setCaretPos | TextField 컴포넌트에서 캐럿의 위치를 인덱스로 설정하는 메서드입니다. |
| setEventHandler | TextField 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | TextField 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| setFocus | TextField 에 포커스를 설정하는 메서드입니다. |
| setOffsetBottom | 부모 컴포넌트의 Top 위치를 기준으로 TextField 의 bottom 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetHeight | TextField 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetLeft | 부모 컴포넌트의 Left 위치를 기준으로 TextField 의 left 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetRight | 부모 컴포넌트의 Left 위치를 기준으로 TextField 의 right 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetTop | 부모 컴포넌트의 Top 위치를 기준으로 TextField 의 top 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetWidth | TextField 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| setSelect | TextField 컴포넌트에 포커스가 있을 때 인수로 지정된 영역을 선택하는 메서드입니다. |
| setSelectedText | TextField 컴포넌트에서 현재 선택되어 있는 텍스트를 전달된 인수값으로 변경하는 메서드입니다. |
| show | 스크립트로 동적 생성한 TextField 을(를) 화면에 표시하는 메소드입니다. |
| updateToDataset | TextField 의 value 속성값을 바인딩 되어 있는 DataSet 에 즉시 반영시키는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| canchange | TextField 컴포넌트에서 value 속성값이 변경될 때 발생하는 이벤트입니다. |
| onchanged | TextField 컴포넌트에서 value 속성값이 변경된 후 발생하는 이벤트입니다. |
| oncontextmenu | TextField 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다. |
| ondevicebuttonup | 모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다. |
| ondrag | TextField 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다. |
| ondragenter | TextField 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| ondragleave | TextField 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| ondragmove | TextField 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| ondrop | TextField 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다. |
| oneditclick | TextField 컴포넌트의 텍스트 편집 영역에서 마우스 왼쪽 버튼을 클릭했을 때 발생하는 이벤트입니다. |
| oninput | TextField 에서 입력을 시도할 때 발생하는 이벤트 입니다. |
| oninvalid | TextField 컴포넌트에 입력한 텍스트를 확정했을 때 입력한 텍스트가 유효하지 않은 경우 발생하는 이벤트입니다. |
| onkeydown | TextField 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다. |
| onkeyup | TextField 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다. |
| onkillfocus | TextField 에서 포커스가 나갈  때 발생하는 이벤트입니다. |
| onlbuttondown | TextField 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| onlbuttonup | TextField 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| onleadingbuttonclick | leadingbutton 이미지 버튼 영역 내에서 마우스 왼쪽 버튼을 클릭했을 때 발생하는 이벤트입니다. |
| onmouseenter | TextField 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| onmouseleave | TextField 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| onmousemove | TextField 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| onmove | TextField 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| onrbuttondown | TextField 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| onrbuttonup | TextField 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| onsetfocus | TextField 에 포커스가 들어올 때 발생하는 이벤트입니다. |
| onsize | TextField 의 크기가 변경됐을 때 발생하는 이벤트입니다. |
| ontouchend | TextField 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다. |
| ontouchmove | TextField 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다. |
| ontouchstart | TextField 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다. |
| ontrailingbuttonclick | trailingbutton 이미지 버튼 영역 내에서 마우스 왼쪽 버튼을 클릭했을 때 발생하는 이벤트입니다. |

**Status**

컴포넌트가 비활성화된 상태

**Control**

| Name | TypeName |
| --- | --- |
| box | nexacro.TextFieldBoxControl |
| helpertext | nexacro.FieldBaseTextControl |
| charcounttext | nexacro.FlexTextControl |
| label | nexacro.FieldBaseLabelControl |
| nulltext | nexacro.FlexTextControl |


---

### 속성 (Properties)

### -nexa-border

> Components > Component > TextField > Property > -nexa-border

**Description**

TextField 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.border[= strborder]
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
this.TextField00.border = "1px solid #999999";
this.TextField00.border = "1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999";
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

> Components > Component > TextField > Property > -nexa-edge

**Description**

TextField 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.edge[= stredge]
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
this.TextField00.edge = "URL('./images/border.png')" 5px 5px;
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

- TextField 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.


◆ WRE 제약

- <fixedwidth>,<fixedheight> 값이 이미지 사이즈의 1/2 을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-rtl-background-image

> Components > Component > TextField > Property > -nexa-rtl-background-image

**Description**

TextField 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.-nexa-rtl-background-image
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

> Components > Component > TextField > Property > -nexa-rtl-edge-image

**Description**

TextField 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.-nexa-rtl-edge-image
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

### autoselect

> Components > Component > TextField > Property > autoselect

**Description**

TextField 컴포넌트의 편집영역이 활성화될 때 텍스트를 전체선택 할지 설정하는 속성입니다.

**Syntax**

```javascript
TextField.autoselect [=bAutoselect]
```

**Setting Syntax**

```javascript
bAutoselect ::= true | false
```
```javascript
this.TextField00.autoselect = true;
```
- **`true`** — 편집영역이 활성화될 때 텍스트가 전체선택 됩니다.
- **`false`** — 편집영역이 활성화될 때 텍스트가 선택되지 않습니다.

**Remark**

- autoselect 속성값을 설정하지 않으면 false로 적용됩니다.


◆ WRE 제약

- 마우스 또는 터치 동작으로 편집영역이 활성화될 때는 텍스트 전체선택이 정상동작합니다.
  그러나 setFocus 메서드 실행으로 편집영역이 활성화될 때는 텍스트 전체선택이 되지 않을 수 있습니다.


---

### autoskip

> Components > Component > TextField > Property > autoskip

**Description**

TextField 컴포넌트에 입력 중인 문자열의 길이가 maxlength 속성값에 도달했을 때 포커스를 자동으로 이동시킬지 설정하는 속성입니다.

**Syntax**

```javascript
TextField.autoskip [=bAutoskip]
```

**Setting Syntax**

```javascript
bAutoskip ::= true | false
```
```javascript
this.TextField00.autoskip = true;
```
- **`true`** — 문자열 길이가 maxlength 속성값에 도달하면 포커스를 다음 컴포넌트로 이동시킵니다.

숫자/영문자 일 경우 마지막 문자가 입력된 후 포커스가 이동됩니다.
다국어일 경우 마지막 문자가 확정된 후 다음 문자를 입력하면 포커스가 이동됩니다.
- **`false`** — 문자열 길이가 maxlength 속성값에 도달해도 포커스를 이동시키지 않습니다.

**Remark**

- autoskip 속성값을 설정하지 않으면 false로 적용됩니다.


---

### background

> Components > Component > TextField > Property > background

**Description**

TextField 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
TextField.background[= strbackground]
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
this.TextField00.background = "#ffffaa";
this.TextField00.background = ""URL('./images/smiley.gif')" no-repeat center center #ffffaa";
this.TextField00.background = ""URL('./images/smiley.gif')" no-repeat center center /auto #ffffaa";
this.TextField00.background = ""URL('./images/smiley.gif')" no-repeat center center /15px 15% #ffffaa";
this.TextField00.background = "linear-gradient( red , blue , yellow )";
this.TextField00.background = "linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0))";
this.TextField00.background = ""URL('./images/smiley.gif')" border-box border-box #ffffaa";
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

"left" 설정 시 TextField 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 TextField 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 TextField 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 TextField 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 TextField 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 TextField 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
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

0 보다 작거나 100 보다 큰 값을 설정 시 TextField 의 영역을 벗어난 가상의 위치로 적용됩니다.

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
예를 들어 <angle> 값이 "to left" 이면 TextField 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 TextField 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

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

0 보다 작거나 100 보다 큰 값을 설정 시 TextField 의 영역을 벗어난 가상의 위치로 적용됩니다.
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
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 TextField 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

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

> Components > Component > TextField > Property > border-radius

**Description**

TextField 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
TextField.borderRadius[= strborderradius]
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
this.TextField00.borderRadius = "10px";
this.TextField00.borderRadius = "5px 6px 10px / 5px 10px";
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

> Components > Component > TextField > Property > bottom

**Description**

TextField 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
TextField.bottom[= nBottom]
```

**Setting Syntax**

```javascript
nBottom ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.TextField00.bottom = 10; 
this.TextField00.bottom = "10px"; 
this.TextField00.bottom = "10%"; 
this.TextField00.bottom = "Button00:10px"; 
this.TextField00.bottom = "Button00:10%";
```
- **`<strCompID>`** — TextField 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 TextField 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 TextField 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — TextField 의 하단 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 bottom 속성값을 기준으로 TextField의 하단 위치 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 TextField의 하단 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 TextField의 하단 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 TextField의 하단 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 top 속성값을 기준으로 TextField의 하단 위치 결정
- "%": <strCompID>의 height 속성값을 기준으로 TextField의 하단 위치 결정
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

> Components > Component > TextField > Property > box-shadow

**Description**

TextField 에 그림자 효과를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.boxShadow[= strbshadow]
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
this.TextField00.boxShadow  = "10px 10px 10px #888888";
this.TextField00.boxShadow  = "inset 10px 10px 10px 5px #888888";
```
- **`<inset>`** — 그림자 효과가 컴포넌트 안쪽에 표시됩니다.
생략 시에는 outset으로 동작합니다.
NRE는 지원하지 않습니다.
- **`<offset>`** — 그림자 효과가 표시되는 위치를 설정합니다.

TextField 의 좌상단 위치를 기준으로 그림자 효과가 표시될 위치를 가로/세로 픽셀값으로 설정합니다.
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

> Components > Component > TextField > Property > color

**Description**

TextField 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
TextField.color[= strcolor]
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
this.TextField00.color = "#999999";
this.TextField00.color = "rgb(255,0,0)";
this.TextField00.color = "red";
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

> Components > Component > TextField > Property > contentheight

**Description**

box 컨트롤 영역의 높이를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.contentheight [= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::= <nVal> ['px']
```
```javascript
this.TextField00.contentheight = 20;
this.TextField00.contentheight = "20px";
```
- **`<nVal>`** — box 컨트롤 영역의 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- contentheight 속성값을 설정하지 않으면 undefined로 설정되고 Contents Sizing 규칙에 따라 해당 영역의 높이를 설정합니다.

- contentheight 속성값을 설정하면 height, bottom 속성값이 변경되어 적용됩니다.
  contentheight 속성값을 설정한 경우에는 height, bottom 속성값을 변경할 수 없습니다.
  (넥사크로 스튜디오 디자인 편집창, 속성창에서 height, bottom 속성값을 변경할 수 없으며 스크립트로도 변경할 수 없습니다).


---

### cssclass

> Components > Component > TextField > Property > cssclass

**Description**

TextField 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다.

**Syntax**

```javascript
TextField.cssclass[= strcssclass]
```

**Setting Syntax**

```javascript
strcssclass ::= <ClassName> [ , &ltClassName> ]*
```
```javascript
this.TextField00.cssclass = "TestClass"; 
this.TextField00.cssclass = "TestClass,TestClass2";
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

> Components > Component > TextField > Property > cursor

**Description**

TextField 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.cursor[= strCursor]
```

**Setting Syntax**

```javascript
strCursor ::= 'none' | 'auto' | 'default' | 'copy' | 'crosshair' | 'help' | 'move' | 'not-allowed' | 'pointer' | 'progress' | 'text' | 'wait' | 'ew-resize' | 'e-resize' | 'w-resize' | 'ns-resize' | 'n-resize' | 's-resize' | 'nesw-resize' | 'ne-resize' | 'sw-resize' | 'nwse-resize' | 'nw-resize' | 'se-resize'
```
```javascript
* XCSS
cursor : default;

* Script ( normal property )
this.TextField00.cursor = "default";
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

> Components > Component > TextField > Property > displaynulltext

**Description**

TextField 의 value 속성값이 null 또는 undefined 일 때 TextField 에 표시될 대체 문자열을 설정하는 속성입니다.

**Syntax**

```javascript
TextField.displaynulltext[= strText]
```

**Setting Syntax**

```javascript
this.TextField00.displaynulltext = "no value";
```
- **`strText`** — value 속성값이 null 일 때 TextField 에 표시될 대체 문자열을 설정합니다.

**Remark**

- value 속성값이 null 또는 undefined 이고, TextField 에 포커스가 없을 때 대체 문자열이 표시됩니다.
   value 속성에 값이 있거나 빈문자열("Empty String")인 경우는 대체 문자열이 표시되지 않습니다.

- 최초 value 속성값이 null 일 때 편집창에 입력중인 값을 모두 지우면 value 속성은 null 값을 유지합니다.
   최초 value 속성값이 null 이 아닐 때 편집창에 입력된 값을 모두 지우면 value 속성은 빈문자열("Empty String")값을 갖습니다.

- value 속성값을 null 로 재설정 하려면 바인드 된 데이터 또는 value 속성값을 스크립트로 수정하여야 합니다.


---

### enable

> Components > Component > TextField > Property > enable

**Description**

TextField 의 사용가능 여부를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.enable[= benable]
```

**Setting Syntax**

```javascript
benable ::= 'true' | 'false'
```
```javascript
this.TextField00.enable = true; 
this.TextField00.enable = false;
```
- **`true`** — TextField 을(를) 사용할 수 있게 설정합니다.
- **`false`** — TextField 을(를) 사용할 수 없게 설정합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "disabled" Status 가 적용됩니다.

**Remark**

- enable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enable 속성값이 false 이면 컴포넌트가 화면에 표시되지만 포커스나 입력을 받을 수 없습니다.

- Div 와 같은 컨테이너 컴포넌트의 enable 속성값을 false 로 설정하면 자식 컴포넌트도 모두 Disable 됩니다.


---

### enableevent

> Components > Component > TextField > Property > enableevent

**Description**

TextField 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.enableevent[= bEvent]
```

**Setting Syntax**

```javascript
bEvent ::= 'true' | 'false'
```
```javascript
this.TextField00.enableevent = true;  

this.TextField00.enableevent = false;
```
- **`true`** — TextField 에서 이벤트가 발생하도록 설정합니다.
- **`false`** — TextField 에서 이벤트가 발생하지 않도록 설정합니다.

**Remark**

- enableevent 속성을 false 로 설정하면 이벤트 발생으로 인한 처리속도 지연과 화면 깜빡임을 방지할 수 있습니다.


---

### flexgrow

> Components > Component > TextField > Property > flexgrow

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축) 여백을 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다.

**Syntax**

```javascript
TextField.flexgrow[= fVal]
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

> Components > Component > TextField > Property > flexshrink

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 영역이 컨테이너 영역을 초과하지 않도록 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다.

**Syntax**

```javascript
TextField.flexshrink[= fVal]
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

> Components > Component > TextField > Property > font

**Description**

TextField 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.font[= strfont]
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
this.TextField00.font = "bold 12pt/30px arial, sans-serif";
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

> Components > Component > TextField > Property > footerheight

**Description**

helpertext, charcounttext 컨트롤이 표시되기 위한 영역의 높이를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.footerheight[= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::= <nVal> ['px']
```
```javascript
this.TextField00.footerheight = 20;
this.TextField00.footerheight = "20px";
```
- **`<nVal>`** — helpertext, charcounttext 컨트롤이 표시되기 위한 영역의 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- footerheight 속성값을 설정하지 않으면 undefined로 설정되고 Contents Sizing 규칙에 따라 해당 영역의 높이를 설정합니다.

- usehelpertext, usecharcount 속성값이 모두 false인 경우에도 footerheight 속성값만큼 영역을 설정합니다.


---

### headerheight

> Components > Component > TextField > Property > headerheight

**Description**

라벨이 labelposition 속성값으로 설정한 위치에 표시되기 위한 영역의 높이를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.headerheight[= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::= <nVal> ['px']
```
```javascript
this.TextField00.headerheight = 20;
this.TextField00.headerheight = "20px";
```
- **`<nVal>`** — 라벨이 labelposition 속성값으로 설정한 위치에 표시되기 위한 영역의 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- headerheight 속성값을 설정하지 않으면 undefined로 설정되고 Contents Sizing 규칙에 따라 해당 영역의 높이를 설정합니다.

- labelposition 속성값이 "inside"인 경우에도 headerheight 속성값만큼 영역을 설정합니다.


---

### height

> Components > Component > TextField > Property > height

**Description**

TextField 을(를) 표시하기 위한 높이를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.height[= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.TextField00.height = 10; 
this.TextField00.height = "10px"; 
this.TextField00.height = 10%"; 
this.TextField00.height = Button00:10%";
```
- **`<strCompID>`** — TextField 의 높이를 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 TextField 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 TextField 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 높이가 적용됩니다.
- **`<nVal>`** — TextField 의 높이를 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.


* <strCompID> 값을 생략했을 때 :
- "px": TextField의 높이 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 TextField의 높이 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 TextField의 높이 결정
- "rem": MainFrame font-size 속성값을 기준으로 TextField의 높이 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID> 값은 무시되고 설정값이 TextField의 높이 결정
- "%": <strCompID>의 height 속성값을 기준으로 TextField의 높이 결정
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

> Components > Component > TextField > Property > helpertext

**Description**

TextField 컴포넌트에 입력할 내용을 사용자에게 설명하는 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.helpertext [=strHelperText]
```

**Setting Syntax**

```javascript
this.TextField00.helpertext = "Password must be at least 8 characters.";
```
- **`strHelperText`** — 입력할 내용을 사용자에게 설명하는 텍스트를 설정합니다.

**Remark**

- usehelpertext 속성값을 true로 설정한 경우에만 설정한 텍스트를 표시합니다.

- helpertext 속성과 invalidtext 속성으로 설정한 텍스트는 같은 영역에 표시됩니다.
  입력한 문자열 유효성 검사 후 invalidtext 속성으로 설정한 텍스트가 표시되는 경우에는 helpertext 속성으로 설정한 텍스트가 표시되지 않습니다.


---

### hotkey

> Components > Component > TextField > Property > hotkey

**Description**

TextField 의 기본 액션을 수행하기 위한 단축키를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.hotkey[= strHotkey]
```

**Setting Syntax**

```javascript
this.TextField00.hotkey = "G"; 
this.TextField00.hotkey = "CTRL+A"; 
this.TextField00.hotkey = "CTRL+ALT+X";
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

### iconbuttonsize

> Components > Component > TextField > Property > iconbuttonsize

**Description**

leadingbutton, trailingbutton 이미지 버튼의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.iconbuttonsize [=strIconbuttonSize]
```

**Setting Syntax**

```javascript
strIconbuttonSize ::= <strWidth> [<strHeight>]
```
```javascript
this.TextField00.iconbuttonsize = "20";
this.TextField00.iconbuttonsize = "40 20";
```
- **`<strWidth>`** — leadingbutton, trailingbutton 이미지 버튼의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — leadingbutton, trailingbutton 이미지 버튼의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- iconbuttonsize 속성값을 설정하지 않으면 undefined 로 적용됩니다.
  undefined 설정 시 TextField 컴포넌트의 height 속성값이 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.

- <strWidth> 값이 TextField 컴포넌트의 width 속성값보다 클 경우 TextField 컴포넌트의 너비에 맞게 이미지 버튼이 표시됩니다.


---

### id

> Components > Component > TextField > Property > id

**Description**

TextField의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.id
```

**Setting Syntax**

- **`id`** — TextField를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### initvalueid

> Components > Component > TextField > Property > initvalueid

**Description**

TextField 에 적용될 InitValue 의 ID 를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.initvalueid[= strValueID]
```

**Setting Syntax**

- **`strValueID`** — InitValueDefinition 영역에 정의된 InitValue 파일에서 TextField 에 적용할 항목의 ID 를 문자열로 설정합니다.

**Remark**

- TextField 가 화면에 표시된 후에는 속성값을 설정하거나 변경 할 수 없습니다.
   TextField 를 동적으로 생성 시 show() 메소드 실행 전에 속성값을 설정하여야 합니다.

- Screen 별로 Environment 의 initvaluefileid 속성을 각각 설정하면 Screen 에 따라 다른 초기값을 설정할 수 있습니다.

- InitValueDefinition 영역에 한 개 이상의 InitValue 파일을 정의할 수 있고,
   InitValue 파일에는 컴포넌트별로 여러개의 초기값 정의를 할 수 있습니다.


---

### inputtype

> Components > Component > TextField > Property > inputtype

**Description**

TextField 컴포넌트에 입력할 텍스트의 유효성을 검사할 기준을 설정하는 속성입니다.

**Syntax**

```javascript
TextField.inputtype [=strInputtype]
```

**Setting Syntax**

```javascript
strInputtype ::= 'text' | 'email' | 'url' | 'password' | 'number' | 'tel'
```
```javascript
this.TextField00.inputtype = "url";
```
- **`'text'`** — 모든 문자의 입력을 허용합니다.
pattern 속성 설정 시 설정값에 따라 유효성을 검사합니다.
- **`'email'`** — 입력한 텍스트가 유효한 이메일 주소 형식인지 검사합니다.
"@" 문자가 포함되어야 하고 유효한 도메인 형식으로 작성되어야 합니다.
- **`'url'`** — 입력한 텍스트가 유효한 URL 형식인지 검사합니다.
urlscheme("http://", "https://" 등) 문자가 포함되어야 하고 유효한 도메인 형식으로 작성되어야 합니다.
- **`'password'`** — 모든 문자의 입력을 허용합니다.
입력된 문자는 모두 특수문자( "*" 또는 "●" )로 대체해 표시됩니다.
pattern 속성 설정 시 설정값에 따라 유효성을 검사합니다.
- **`'number'`** — 숫자 형식의 문자열 입력을 허용합니다.
"+", "-", ".", "e" 문자를 형식에 맞게 포함할 수 있습니다.
- **`'tel'`** — 전화번호 형식의 문자열 입력을 허용합니다.
숫자, " ", "(", ")", "/", "N", ",", ";", "*", "#", ".", "+", "-" 문자를 형식에 맞게 포함할 수 있습니다.

**Remark**

- inputtype 속성값을 설정하지 않으면 "text"로 적용됩니다.

- 속성값을 "number", "tel"로 설정한 경우에는 허용되지 않은 문자는 입력할 수 없습니다.


---

### invalidtext

> Components > Component > TextField > Property > invalidtext

**Description**

TextField 컴포넌트에 입력할 내용이 유효하지 않은 경우 사용자에게 설명하는 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.invalidtext [=strInvalidText]
```

**Setting Syntax**

```javascript
this.TextField00.invalidtext = "create a password with at least 8 characters.";
```
- **`strInvalidText`** — 입력한 내용이 유효하지 않은 경우 사용자에게 설명하는 텍스트를 설정합니다.

**Remark**

- usehelpertext 속성값을 true로 설정한 경우에만 설정한 텍스트를 표시합니다.

- 속성값을 설정하지 않은 경우에는 라이브러리 내부에 정의된 텍스트인 "Input value is not valid"가 표시됩니다.
  
- 텍스트 입력을 시작하면 유효성 검사를 시작하고 유효하지 않은 경우 invalidtext 속성값에 설정한 텍스트를 표시합니다.
  예를 들어 inputtype 속성값을 "url"로 설정하면 입력한 텍스트가 유효한 URL 형식이 될 때까지 invalidtext 속성값에 설정한 텍스트를 표시합니다.

- helpertext 속성과 invalidtext 속성으로 설정한 텍스트는 같은 영역에 표시됩니다.
  입력한 문자열 유효성 검사 후 invalidtext 속성으로 설정한 텍스트가 표시되는 경우에는 helpertext 속성으로 설정한 텍스트가 표시되지 않습니다.


---

### labelfloatingfixed

> Components > Component > TextField > Property > labelfloatingfixed

**Description**

TextField 컴포넌트 상태에 따라 라벨을 표시하는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
TextField.labelfloatingfixed [=bLabelfloatingfixed]
```

**Setting Syntax**

```javascript
bLabelfloatingfixed ::= true | false
```
```javascript
this.TextField00.labelfloatingfixed = true;
```
- **`true`** — 라벨이 labelposition 속성값으로 설정한 위치에 고정되어 표시됩니다.
- **`false`** — 입력값이 없고 컴포넌트가 포커스를 가지지 않을 때는 라벨이 입력창 영역에 표시됩니다.
사용자가 포커스를 TextField 컴포넌트로 옮기거나 입력값이 있는 경우에는 labelpostion 속성값으로 설정한 위치에 라벨이 표시됩니다.

prefixtext, postfixtext, displaynulltext 속성값을 설정한 경우에는 입력값과 상관 없이 labelpostion 속성값으로 설정한 위치에 라벨이 표시됩니다.

**Remark**

- labelfloatingfixed 속성값을 설정하지 않으면 false로 적용됩니다.


---

### labelgap

> Components > Component > TextField > Property > labelgap

**Description**

라벨이 표시되는 위치의 간격을 설정하는 속성입니다.

**Syntax**

```javascript
TextField.labelgap [=nGap]
```

**Setting Syntax**

```javascript
this.TextField00.labelgap = 10;
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

> Components > Component > TextField > Property > labelposition

**Description**

TextField 컴포넌트의 라벨을 표시할 위치를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.labelposition [=strLabelPosition]
```

**Setting Syntax**

```javascript
strLabelPosition ::= 'overlap' | 'outside' | 'inside'
```
```javascript
this.TextField00.labelposition = "inside";
```
- **`'overlap'`** — 라벨이 TextFieldBox 경계선 위에 겹쳐져 표시됩니다.
- **`'outside'`** — 라벨이 TextFieldBox 경계선 바깥쪽에 표시됩니다.
- **`'inside'`** — 라벨이 TextFieldBox 경계선 안쪽에 표시됩니다.

**Remark**

- labelposition 속성값을 설정하지 않으면 "overlap"으로 적용됩니다.

- labelfloatingfixed 속성값이 false인 경우에는 입력값이 없고 컴포넌트가 포커스를 가지지 않을 때는 labelposition 속성값과 상관없이 입력창 영역에 라벨이 표시됩니다.
  prefixtext, postfixtext, displaynulltext 속성값을 설정한 경우에는 입력값과 상관 없이 labelpostion 속성값으로 설정한 위치에 라벨이 표시됩니다.


---

### labeltext

> Components > Component > TextField > Property > labeltext

**Description**

TextField 컴포넌트의 라벨로 표시할 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.labeltext [=strLabelText]
```

**Setting Syntax**

```javascript
this.TextField00.labeltext = "First Name";
```
- **`strLabelText`** — 라벨로 표시할 텍스트를 설정합니다.


---

### layoutorder

> Components > Component > TextField > Property > layoutorder

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 순서를 설정합니다.

**Syntax**

```javascript
TextField.layoutorder[= nVal]
```

**Setting Syntax**

- **`nVal`** — 컴포넌트의 배치 순서를 설정합니다.

**Remark**

- layoutorder 속성값을 설정하지 않으면 0으로 설정됩니다.

- 속성값이 음수인 경우에는 0으로 설정됩니다.

- 같은 값으로 2개 이상의 컴포넌트의 속성값을 설정할 수 있습니다. 
  속성값이 같은 경우에는 생성 순서(Z-Order)에 따라 배치 순서가 달라집니다.


---

### leadingbuttonsize

> Components > Component > TextField > Property > leadingbuttonsize

**Description**

leadingbutton 이미지 버튼 크기를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.leadingbuttonsize [=strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [<strHeight>]
```
```javascript
this.TextField00.leadingbuttonsize = "20";
this.TextField00.leadingbuttonsize = "40 20";
```
- **`<strWidth>`** — leadingbutton 이미지 버튼의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — leadingbutton 이미지 버튼의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- leadingbuttonsize 속성값을 설정하지 않으면 undefined 로 적용됩니다.
  undefined 설정 시 iconbuttonsize 속성값에 따라 leadingbutton 이미지 버튼 크기를 설정합니다.

- leadingbuttonsize, iconbuttonsize 속성이 다른 값으로 설정된 경우 leadingbuttonsize 속성값만 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.

- <strWidth> 값이 TextField 컴포넌트의 width 속성값보다 클 경우 TextField 컴포넌트의 너비에 맞게 이미지 버튼이 표시됩니다.


---

### left

> Components > Component > TextField > Property > left

**Description**

TextField 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
TextField.left[= nLeft]
```

**Setting Syntax**

```javascript
nLeft ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.TextField00.left = 10; 
this.TextField00.left = "10px"; 
this.TextField00.left = "10%"; 
this.TextField00.left = "Button00:10px"; 
this.TextField00.left = "Button00:10%";
```
- **`<strCompID>`** — TextField 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 TextField 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 TextField 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — TextField 의 좌측 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 left 속성값을 기준으로 TextField의 좌측 위치 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 TextField의 좌측 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 TextField의 좌측 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 TextField의 좌측 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 right 속성값을 기준으로 TextField의 좌측 위치 결정
- "%": <strCompID>의 width 속성값을 기준으로 TextField의 좌측 위치 결정
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

> Components > Component > TextField > Property > letter-spacing

**Description**

TextField 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다.

**Syntax**

```javascript
TextField.letterSpacing[= strspace]
```

**Setting Syntax**

```javascript
strspace ::= 'normal' | <nVal> ['px']
```
```javascript
* XCSS
letter-spacing : 2px ;

* Script ( normal property )
this.TextField00.letterSpacing = "2px";
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

> Components > Component > TextField > Property > maxheight

**Description**

TextField 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.maxheight[= nMaxHeight]
```

**Setting Syntax**

```javascript
nMaxHeight ::= <nVal> ['px']
```
```javascript
this.TextField00.maxheight = 20; 
this.TextField00.maxheight = "20px";
```
- **`<nVal>`** — TextField 이(가) 화면에 표시되는 높이의 최대값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- height 속성값이 maxheight 보다 크면 화면에 표시되는 TextField 의 높이는 maxheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- maxheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxheight 속성값을 minheight 속성값보다 작게 설정하면 minheight 속성값이 maxheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 TextField 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.


---

### maxlength

> Components > Component > TextField > Property > maxlength

**Description**

TextField 컴포넌트에 입력할 수 있는 문자열의 최대길이를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.maxlength [=nMaxlength]
```

**Setting Syntax**

```javascript
this.TextField00.maxlength = 10;
```
- **`nMaxlength`** — 입력할 수 있는 문자열의 최대길이를 숫자로 설정합니다.

0 설정 시 입력할 수 있는 최대길이를 제한하지 않습니다.

**Remark**

- maxlength 속성값을 설정하지 않으면 0으로 설정됩니다.

- 영문, 숫자, 기호, 다국어 모두 한 문자가 1로 계산됩니다.

- 문자열의 길이가 maxlength 속성값과 같아지면 입력이 제한됩니다.


◆ 속성이 적용되지 않는 경우

아래와 같은 조건에서는 maxlength 속성값이 적용되지 않으며 0으로 설정됩니다.
- 스크립트로 value 값 설정
- inputtype 속성값을 "number"로 설정


---

### maxwidth

> Components > Component > TextField > Property > maxwidth

**Description**

TextField 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.maxwidth[= nMaxWidth]
```

**Setting Syntax**

```javascript
nMaxWidth ::= <nVal> ['px']
```
```javascript
this.TextField00.maxwidth = 20; 
this.TextField00.maxwidth = "20px";
```
- **`<nVal>`** — TextField 이(가) 화면에 표시되는 너비의 최대값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- width 속성값이 maxwidth 보다 크면 화면에 표시되는 TextField 의 너비는 maxwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- maxwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxwidth 속성값을 minwidth 속성값보다 작게 설정하면 minwidth 속성값이 maxwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 TextField 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.


---

### minheight

> Components > Component > TextField > Property > minheight

**Description**

TextField 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.minheight[= nMinHeight]
```

**Setting Syntax**

```javascript
nMinHeight ::= <nVal> ['px']
```
```javascript
this.TextField00.minheight = 20; 
this.TextField00.minheight = "20px";
```
- **`<nVal>`** — TextField 이(가) 화면에 표시되는 높이의 최소값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- height 속성값이 minheight 보다 작다면 화면에 표시되는 TextField 의 높이는 minheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- minheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minheight 속성값을 maxheight 속성값보다 크게 설정하면 maxheight 속성값이 minheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 TextField 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.


---

### minwidth

> Components > Component > TextField > Property > minwidth

**Description**

TextField 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.minwidth[= nMinWidth]
```

**Setting Syntax**

```javascript
nMinWidth ::= <nVal> ['px']
```
```javascript
this.TextField00.minwidth = 20; 
this.TextField00.minwidth = "20px";
```
- **`<nVal>`** — TextField 이(가) 화면에 표시되는 너비의 최소값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- width 속성값이 minwidth 보다 작으면 화면에 표시되는 TextField 의 너비는 minwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- minwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minwidth 속성값을 maxwidth 속성값보다 크게 설정하면 maxwidth 속성값이 minwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 TextField 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.


---

### name

> Components > Component > TextField > Property > name

**Description**

TextField 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
TextField.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### opacity

> Components > Component > TextField > Property > opacity

**Description**

TextField 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.opacity[= stropacity]
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8;
opacity : 80%;

* Script ( normal property )
this.TextField00.opacity = "0.8";
this.TextField00.opacity = 0.8;
this.TextField00.opacity = "80%";
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

> Components > Component > TextField > Property > parent

**Description**

TextField 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
TextField.parent
```

**Setting Syntax**

```javascript
var objParent = this.TextField00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- TextField 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### pattern

> Components > Component > TextField > Property > pattern

**Description**

입력할 텍스트의 유효성을 검사할 기준을 정규식으로 설정하는 속성입니다.

**Syntax**

```javascript
TextField.pattern [=strPattern]
```

**Setting Syntax**

```javascript
this.TextField00.pattern = "^[A-Z]+$";
```
- **`strPattern`** — 입력한 텍스트의 유효성을 검사할 기준을 정규식으로 설정합니다.

**Remark**

- inputtype 속성값이 "number"인 경우를 제외하고 적용됩니다.

- inputtype 속성값을 "url", "email", "tel" 중 하나로 설정하고 pattern 속성값을 설정한 경우에는 pattern 속성값에 설정한 정규식이 적용됩니다.


---

### positionstep

> Components > Component > TextField > Property > positionstep

**Description**

부모 오브젝트가 화면분할기능을 사용할 때 TextField 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.positionstep[= nStep]
```

**Setting Syntax**

```javascript
this.TextField00.positionstep = 0; 
this.TextField00.positionstep = -1;
```
- **`nStep`** — TextField 이(가) 표시될 분할화면의 인덱스를 설정합니다.
"-1" 로 설정하면 모든 분할화면에 TextField 이(가) 표시됩니다.

분할화면의 인덱스는 "0" 부터 시작합니다.

**Remark**

- positionstep 에 설정된 인덱스값과 일치하는 분할화면에만 컴포넌트가 표시됩니다.

- 분할화면에 표시되지 않는 컴포넌트의 visible 속성값은 "false"로 변경되지 않습니다.


---

### postfixtext

> Components > Component > TextField > Property > postfixtext

**Description**

입력창 영역 뒤에 표시할 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.postfixtext [=strPostfixText]
```

**Setting Syntax**

```javascript
this.TextField00.postfixtext = "kg";
```
- **`strPostfixText`** — 입력창 영역 뒤에 표시할 텍스트를 설정하는 속성입니다.
무게단위처럼 입력값 뒤에 표시하는 기호를 설정할 수 있습니다.


---

### prefixtext

> Components > Component > TextField > Property > prefixtext

**Description**

입력창 영역 앞에 표시할 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.prefixtext [=strPrefixText]
```

**Setting Syntax**

```javascript
this.TextField00.prefixtext = "$";
```
- **`strPrefixText`** — 입력창 영역 앞에 표시할 텍스트를 설정하는 속성입니다.
화폐단위처럼 입력값 앞에 표시하는 기호를 설정할 수 있습니다.


---

### readonly

> Components > Component > TextField > Property > readonly

**Description**

TextField 에서 편집을 허용할 지 설정하는 속성입니다.

**Syntax**

```javascript
TextField.readonly[= bReadOnly]
```

**Setting Syntax**

```javascript
bReadOnly ::= 'true' | 'false'
```
- **`true`** — TextField 의 편집을 불가능하게 설정합니다.
편집이 불가능하여도 편집영역의 선택 및 복사 기능은 사용 가능합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "readonly" Status 가 적용됩니다.
"readonly" Status 가 없는 하위 컨트롤은 "disabled" Status 가 적용됩니다.
- **`false`** — TextField 의 편집을 가능하게 설정합니다.

**Remark**

- readonly 속성값을 설정하지 않으면 false 로 적용됩니다.


◆ Android WRE 제약

- Android WRE 는 편집영역의 선택과 복사 기능에 대한 정확한 동작을 보장하지 않습니다.


---

### right

> Components > Component > TextField > Property > right

**Description**

TextField 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
TextField.right[= nRight]
```

**Setting Syntax**

```javascript
nRight ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.TextField00.right = 10; 
this.TextField00.right = "10px"; 
this.TextField00.right = "10%"; 
this.TextField00.right = "Button00:10px"; 
this.TextField00.right = "Button00:10%";
```
- **`<strCompID>`** — TextField 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 TextField 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 TextField 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — TextField 의 우측 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 right 속성값을 기준으로 TextField의 우측 위치 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 TextField의 우측 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 TextField의 우측 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 TextField의 우측 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 left 속성값을 기준으로 TextField의 우측 위치 결정
- "%": <strCompID>의 width 속성값을 기준으로 TextField의 우측 위치 결정
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

> Components > Component > TextField > Property > rtl

**Description**

TextField 에서 내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다.

**Syntax**

```javascript
TextField.rtl
```

**Setting Syntax**

```javascript
bRtl ::= undefined | 'true' | 'false'
```
```javascript
var vRtl = this.TextField00.rtl;
```
- **`undefined`** — undefined 설정 시 상위 컴포넌트의 rtl 속성값이 적용됩니다.

사용자가 rtl 속성값을 설정하지 않거나 삭제했을 경우 undefined 가 설정됩니다.
- **`true`** — TextField 의 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 오른쪽으로 설정합니다.
TextField 의 내부 좌표계의 기준을 오른쪽으로 설정합니다.
TextField 의 텍스트 표시 기준을 오른쪽으로 설정합니다.
수직스크롤바가 있을 경우 왼쪽에 표시됩니다.
- **`false`** — TextField 의 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 왼쪽으로 설정합니다.
TextField 의 내부 좌표계의 기준을 왼쪽으로 설정합니다.
TextField 의 텍스트 표시 기준을 왼쪽으로 설정합니다.
수직스크롤바가 있을 경우 오른쪽에 표시됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 아랍권 같이 화면의 표시기준이 오른쪽인 환경에서 컨텐츠의 표시 기준을 변경하기 위해 설정하는 속성입니다.

- TextField 부터 Environment 까지 상위의 모든 rtl 속성값이 undefined 이면
   Environment 의 locale 속성에 설정된 국가 및 언어 설정값을 기준으로 rtl 속성이 적용됩니다.
   Environment 의 locale 속성값을 설정하지 않았을 경우 시스템의 국가 및 언어 설정값이 적용됩니다.


---

### tablecellarea

> Components > Component > TextField > Property > tablecellarea

**Description**

Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다.

**Syntax**

```javascript
TextField.tablecellarea[= strArea]
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

> Components > Component > TextField > Property > taborder

**Description**

탭키 입력으로 컴포넌트간 포커스를 이동할 때 TextField 의 순서를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.taborder[= nTabOrder]
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

> Components > Component > TextField > Property > tabstop

**Description**

탭키 입력으로 컴포넌트간 포커스를 이동할 때 TextField 이(가) 포커스를 받을 지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.tabstop[= bTabStop]
```

**Setting Syntax**

```javascript
bTabStop ::= 'true' | 'false'
```
- **`"true"`** — TextField 이(가) 탭키 입력에 의한 포커스를 받습니다.
- **`"false"`** — TextField 이(가) 탭키 입력에 의한 포커스를 받지 않습니다.

**Remark**

- tabstop 속성값이 "false"인 경우 taborder 속성값과 관계없이 포커스가 해당 컴포넌트를 건너뜁니다.

- tabstop 속성값에 관계없이 마우스로 직접 포커스를 주거나, setfocus() 메소드 사용 시 포커스를 갖습니다.

- Div 와 같은 컨테이너 컴포넌트에서 포커스를 받을 수 있는 자식 컴포넌트가 존재하면 해당 컴포넌트가 포커스를 갖습니다.


---

### text

> Components > Component > TextField > Property > text

**Description**

TextField 컴포넌트에 표시되는 문자열을 갖는 읽기 전용 속성입니다.

**Syntax**

```javascript
TextField.text
```

**Remark**

- displaynulltext 속성값에 의해 화면에 보이는 문자열은 text 속성에 저장되지 않습니다.


---

### tooltiptext

> Components > Component > TextField > Property > tooltiptext

**Description**

TextField 에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다.

**Syntax**

```javascript
TextField.tooltiptext[= strToolTipText]
```

**Setting Syntax**

```javascript
this.TextField00.tooltiptext = "This is ToolTip Text"; this.TextField00.tooltiptext = "";          // 풍선 도움말이 표시되지 않습니다. 

this.TextField00.tooltiptext = null;        // 상위 컴포넌트의 풍선 도움말이 표시됩니다.
```
- **`strToolTipText`** — 풍선도움말에 표시할 텍스트를 설정합니다.

빈문자열(EmptyString) 설정 시 풍선도움말이 표시되지 않습니다.
null 또는 undefined 설정 시 상위컴포넌트(Form, Div 등)의 풍선도움말이 표시됩니다.

**Remark**

- tooltiptext 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- 마우스 포인터가 TextField 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.

- 풍선도움말이 표시된 상태에서 tooltiptext 속성값을 변경하면 풍선도움말이 사라집니다.


◆ Desktop WRE 제약

- 풍선도움말은 브라우저의 기능을 활용하므로 브라우저 사양에 따라 스타일에 차이가 있을 수 있습니다.
   NRE는 Chrome 의 스타일과 동일하게 적용됩니다.


---

### tooltiptype

> Components > Component > TextField > Property > tooltiptype

**Description**

TextField 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다.

**Syntax**

```javascript
TextField.tooltiptype[= enumTooltipType]
```

**Setting Syntax**

```javascript
enumTooltipType ::= 'default' | 'hover' | 'inplace' | 'default,mouseleave' | 'hover,mouseleave' | 'inplace,mouseleave'
```
```javascript
this.TextField00.tooltiptype = "hover";
```
- **`"default"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 TextField 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"hover"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 TextField 영역내에 멈춰서 일정시간이 경과하면 풍선도움말이 사라집니다.
TextField 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경되거나 사라진 풍선도움말이 다시 표시됩니다.
- **`"inplace"`** — TextField 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 TextField 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"default,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 TextField 영역에 있으면 풍선도움말이 사라지지 않습니다.
- **`"hover,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 TextField 영역에 있으면 풍선도움말이 사라지지 않습니다.
TextField 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경됩니다.
- **`"inplace,mouseleave"`** — TextField 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 TextField 영역에 있으면 풍선도움말이 사라지지 않습니다.

**Remark**

- tooltiptype 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- 마우스 포인터가 TextField 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.

- 풍선도움말이 표시된 상태에서 tooltiptext 속성값을 변경하면 tooltiptype 속성값에 관계없이 풍선도움말이 사라집니다.

- 표시되었다가 사라진 풍선도움말은 마우스 포인터가 TextField 영역을 나갔다가 들어오면 다시 표시됩니다.

- 마우스 포인터가 TextField 영역에서 벗어나면 풍선도움말이 사라집니다.

- 풍선도움말의 크기는 풍선도움말에 표시되는 텍스트의 길이와 크기에 맞춰 자동으로 조정됩니다.

- 풍선도움말에 표시되는 텍스트의 글꼴과 크기는 변경하실 수 없습니다.


---

### top

> Components > Component > TextField > Property > top

**Description**

TextField 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
TextField.top[= nTop]
```

**Setting Syntax**

```javascript
nTop ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.TextField00.top = 10; 
this.TextField00.top = "10px"; 
this.TextField00.top = "10%"; 
this.TextField00.top = "Button00:10px"; 
this.TextField00.top = "Button00:10%";
```
- **`<strCompID>`** — TextField 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 TextField 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 TextField 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — TextField의 상단 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 top 속성값을 기준으로 TextField의 상단 위치 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 TextField의 상단 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 TextField의 상단 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 TextField의 상단 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 bottom 속성값을 기준으로 TextField의 상단 위치 결정
- "%": <strCompID>의 height 속성값을 기준으로 TextField의 상단 위치 결정
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

### trailingbuttonsize

> Components > Component > TextField > Property > trailingbuttonsize

**Description**

trailingbutton 이미지 버튼 크기를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.trailingbuttonsize [=strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [<strHeight>]
```
```javascript
this.TextField00.trailingbuttonsize = "20";
this.TextField00.trailingbuttonsize = "40 20";
```
- **`<strWidth>`** — trailingbutton 이미지 버튼의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — trailingbutton 이미지 버튼의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- trailingbuttonsize 속성값을 설정하지 않으면 undefined 로 적용됩니다.
  undefined 설정 시 iconbuttonsize 속성값에 따라 trailingbutton 이미지 버튼 크기를 설정합니다.

- trailingbuttonsize, iconbuttonsize 속성이 다른 값으로 설정된 경우 trailingbuttonsize 속성값만 적용됩니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.

- <strWidth> 값이 TextField 컴포넌트의 width 속성값보다 클 경우 TextField 컴포넌트의 너비에 맞게 이미지 버튼이 표시됩니다.


---

### usecharcount

> Components > Component > TextField > Property > usecharcount

**Description**

입력 중인 글자 수 정보를 표시할지 설정하는 속성입니다.

**Syntax**

```javascript
TextField.usecharcount [=bUseCharCount]
```

**Setting Syntax**

```javascript
bUseCharCount ::= true | false
```
```javascript
this.TextField00.usecharcount = true;
```
- **`true`** — 입력 중인 글자 수 정보를 표시합니다.
- **`false`** — 입력 중인 글자 수 정보를 표시하지 않습니다.

**Remark**

- usecharcount 속성값을 설정하지 않으면 false로 적용됩니다.

- (현재 입력한 글자 수) / (maxlength 속성값) 형식으로 표시합니다.
  maxlength 속성값을 설정하지 않은 경우에는 (현재 입력한 글자 수) / 0 형식으로 표시합니다.


---

### usecontextmenu

> Components > Component > TextField > Property > usecontextmenu

**Description**

TextField 의 편집영역에서 오른쪽 마우스 클릭 시 기본팝업메뉴의 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.usecontextmenu[= bUseContextMenu]
```

**Setting Syntax**

```javascript
bUseContextMenu ::= 'true' | 'false'
```
```javascript
this.TextField00.usecontextmenu = true;
```
- **`true`** — 편집영역에서 오른쪽 마우스 클릭 시 기본팝업메뉴가 표시됩니다.
- **`false`** — 편집영역에서 오른쪽 마우스 클릭 시 기본팝업메뉴가 표시되지 않습니다.

**Remark**

- usecontextmenu 속성값을 설정하지 않으면 true 로 적용됩니다.

- Environment 의 usecontextmenu 속성값이 "none" 또는 "form" 인 경우 TextField 의 usecontextmenu 속성은 false 로 동작합니다.

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

> Components > Component > TextField > Property > usehelpertext

**Description**

helpertext, invalidtext 속성값으로 지정한 텍스트를 표시할지 설정하는 속성입니다.

**Syntax**

```javascript
TextField.usehelpertext [=bUseHelperText]
```

**Setting Syntax**

```javascript
bUseHelperText ::= true | false
```
```javascript
this.TextField00.usehelpertext = true;
```
- **`true`** — helpertext, invalidtext 속성값으로 지정한 텍스트를 표시합니다.
- **`false`** — helpertext, invalidtext 속성값으로 지정한 텍스트를 표시하지 않습니다.

**Remark**

- usehelpertext 속성값을 설정하지 않으면 false로 적용됩니다.


---

### useleadingbutton

> Components > Component > TextField > Property > useleadingbutton

**Description**

입력창 영역 앞에 leadingbutton 이미지 버튼을 표시할지 설정하는 속성입니다.

**Syntax**

```javascript
TextField.useleadingbutton [=bUseLeadingButton]
```

**Setting Syntax**

```javascript
bUseLeadingButton ::= true | false
```
```javascript
this.TextField00.useleadingbutton = true;
```
- **`true`** — 입력창 영역 앞에 leadingbutton 이미지 버튼을 표시합니다.
- **`false`** — 입력창 영역 앞에 leadingbutton 이미지 버튼을 표시하지 않습니다.

**Remark**

- useleadingbutton 속성값을 설정하지 않으면 false로 적용됩니다.

- prefixtext 속성값을 설정한 경우에는 leadingbutton, prefixtext 순으로 표시됩니다.


---

### usesoftkeyboard

> Components > Component > TextField > Property > usesoftkeyboard

**Description**

TextField 가 포커스를 가질 때 키패드의 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.usesoftkeyboard[= bUseKeyboard]
```

**Setting Syntax**

```javascript
bUseKeyboard ::= true | false
```
```javascript
this.TextField00.usesoftkeyboard = false;
```
- **`true`** — TextField 가 포커스를 가질 때 키패드가 자동으로 표시됩니다.
- **`false`** — TextField 가 포커스를 가질 때 키패드가 표시되지 않습니다.

**Remark**

- usesoftkeyboard 속성값을 설정하지 않으면 true 로 적용됩니다.


◆ Windows NRE 제약

- Windows NRE 는 OS 가 Windows 10 이상이고, 연결된 키보드가 없을 때만 적용됩니다.


---

### usetrailingbutton

> Components > Component > TextField > Property > usetrailingbutton

**Description**

입력창 영역 뒤에 trailingbutton 이미지 버튼을 표시할지 설정하는 속성입니다.

**Syntax**

```javascript
TextField.usetrailingbutton [=bUseTrailingButton]
```

**Setting Syntax**

```javascript
bUseTrailingButton ::= true | false
```
```javascript
this.TextField00.usetrailingbutton = true;
```
- **`true`** — 입력창 영역 뒤에 trailingbutton 이미지 버튼을 표시합니다.
- **`false`** — 입력창 영역 뒤에 trailingbutton 이미지 버튼을 표시하지 않습니다.

**Remark**

- usetrailingbutton 속성값을 설정하지 않으면 false로 적용됩니다.

- suffixtext 속성값을 설정한 경우에는 suffixtext, trailingbutton 순으로 표시됩니다.


---

### value

> Components > Component > TextField > Property > value

**Description**

TextField 컴포넌트에 표시되는 문자열을 갖는 속성입니다.

**Syntax**

```javascript
TextField.value [=strValue]
```

**Setting Syntax**

```javascript
this.TextField00.value = "Hello";
```
- **`strValue`** — 화면에 표시될 문자열을 설정합니다.

**Remark**

- value 속성값을 설정하지 않으면 undefined로 적용됩니다.

- TextField 컴포넌트와 Dataset 오브젝트를 바인딩하는 경우에 기본으로 연동되는 속성입니다.

- displaynulltext 속성값에 의해 화면에 보이는 문자열은 value 속성에 저장되지 않습니다.

- value 속성이 Dataset 오브젝트에 바인드 되어 있을 경우 datatyperule 속성값에 따라 value 속성의 타입 처리가 달라집니다.
   > datatyperule="1.0" 일 때 : 바인드 된 Column의 타입으로 value 속성의 타입이 변경됩니다.
   > datatyperule="2.0" 일 때 : value 속성은 string 타입으로 처리됩니다.

- value 속성이 Dataset 오브젝트에 바인드 되어 있지 않을 경우 value 속성은 string 타입으로 처리됩니다.


---

### visible

> Components > Component > TextField > Property > visible

**Description**

TextField 이(가) 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
this.TextField00.visible = true; 
this.TextField00.visible = false;
```
- **`"true"`** — TextField 을(를) 화면에 표시합니다.
- **`"false"`** — TextField 을(를) 화면에 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하는 즉시 컴포넌트의 표시 여부가 화면에 반영됩니다.

- visible 속성값이 "false"이면 컴포넌트가 화면에 표시되지 않고, 포커스를 받을 수 없으므로 입력이나 사용이 불가능합니다.

- Div 와 같은 컨테이너 컴포넌트의 visible 속성값을 "false"로 설정하면 자식 컴포넌트도 함께 화면에 표시되지 않습니다.

- visible 속성값이 "false"이어도 컴포넌트는 존재하기 때문에 스크립트로 제어가 가능합니다.

- 넥사크로 스튜디오에서는 visible 속성값을 'false'로 설정해도 디자인화면에서 사라지지 않습니다.


---

### width

> Components > Component > TextField > Property > width

**Description**

TextField 을(를) 표시하기 위한 너비를 설정하는 속성입니다.

**Syntax**

```javascript
TextField.width[= nWidth]
```

**Setting Syntax**

```javascript
nWidth ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.TextField00.width = 10; this.TextField00.width = "10px"; 
this.TextField00.width = "10%"; 
this.TextField00.width = "Button00:10%";
```
- **`<strCompID>`** — TextField 의 너비를 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 TextField 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 TextField 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 너비가 적용됩니다.
- **`<nVal>`** — TextField 의 너비를 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": TextField의 너비 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 TextField의 너비 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 TextField의 너비 결정
- "rem": MainFrame font-size 속성값을 기준으로 TextField의 너비 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID> 값은 무시되고 설정값이 TextField의 너비 결정
- "%": <strCompID>의 width 속성값을 기준으로 TextField의 너비 결정
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

> Components > Component > TextField > Property > word-spacing

**Description**

TextField 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다.

**Syntax**

```javascript
TextField.wordSpacing[= strwordspacing]
```

**Setting Syntax**

```javascript
strWordSpacing ::= 'normal' | <nVal>'px'
```
```javascript
* XCSS
word-spacing : 30px;

* Script ( normal property )
this.TextField00.wordSpacing = "30px";
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

> Components > Component > TextField > Method > addEvent

**Description**

TextField 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**

```javascript
TextField.addEvent( strEventID )
```

**Parameters**

```
TextField 에 추가할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 추가에 성공하면 true 를 반환합니다.

이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- TextField 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.


---

### addEventHandler

> Components > Component > TextField > Method > addEventHandler

**Description**

TextField 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
TextField.addEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > TextField > Method > addEventHandlerLookup

**Description**

함수를 검색하여 TextField 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
TextField.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

> Components > Component > TextField > Method > bringToFront

**Description**

부모가 동일한 컴포넌트 중 TextField 이(가) 화면의 제일 앞에 표시되게 합니다.

**Syntax**

```javascript
TextField.bringToFront()
```

**Parameters**

this.TextField.bringToFront();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToFront() 메소드는 TextField 을(를) 가장 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 앞에 표시되게 됩니다.


---

### bringToPrev

> Components > Component > TextField > Method > bringToPrev

**Description**

부모가 동일한 컴포넌트 중 TextField 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**

```javascript
TextField.bringToPrev()
```

**Parameters**

this.TextField.bringToPrev();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToPrev() 메소드는 TextField 을(를) 한단계 나중에 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 앞에 표시되게 됩니다.


---

### clearEventHandler

> Components > Component > TextField > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
TextField.clearEventHandler( strEventID )
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

### destroy

> Components > Component > TextField > Method > destroy

**Description**

스크립트에서 동적으로 생성한 TextField 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
TextField.destroy()
```

**Parameters**

var bSucc = this.TextField00.destroy();

**Return**

TextField 이(가) 정상적으로 삭제되면 true 를 반환합니다.

TextField 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 TextField 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildTextField.initTextField.show


---

### findEventHandler

> Components > Component > TextField > Method > findEventHandler

**Description**

TextField 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
TextField.findEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > TextField > Method > getCaretPos

**Description**

TextField 컴포넌트에서 캐럿이 위치한 인덱스를 반환하는 메서드입니다.

**Syntax**

```javascript
TextField.getCaretPos()
```

**Parameters**

var nCaretpos = this.TextField00.getCaretPos();

**Return**

캐럿이 위치한 인덱스를 반환합니다. 
읽기 전용 상태이거나 TextField 컴포넌트에 포커스가 없으면 -1을 반환합니다. 

첫 번째 위치의 인덱스는 0입니다.

**Remark**

- TextField 컴포넌트에 포커스가 있고 캐럿이 표시되고 있어야 합니다.


---

### getDisplayText

> Components > Component > TextField > Method > getDisplayText

**Description**

TextField 에 표시된 텍스트값을 반환하는 메소드입니다.

**Syntax**

```javascript
TextField.getDisplayText()
```

**Parameters**

var strTxt = this.TextField00.getDisplayText() ;

**Return**

TextField 에 표시된 텍스트값을 반환합니다.

**Remark**

- displaynulltext 속성값을 설정하고 value 속성값이 null 또는 undefined 인 경우 표시된 displaynulltext 속성값을 반환합니다.

- prefixtext, postfixtext 속성값을 설정한 경우 이를 포함한 텍스트를 반환합니다.
  반환되는 값은 prefixtext + text + postfixtext 형식입니다.


---

### getEventHandler

> Components > Component > TextField > Method > getEventHandler

**Description**

TextField 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
TextField.getEventHandler( strEventID, nIdx )
```

**Parameters**

```
핸들러 함수를 얻을 이벤트의 ID를 설정합니다.
```

**Return**

지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.

지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.


---

### getLength

> Components > Component > TextField > Method > getLength

**Description**

TextField 컴포넌트의 value 속성에 설정된 문자열의 길이를 반환하는 메서드입니다.

**Syntax**

```javascript
TextField.getLength()
```

**Parameters**

var nLength = this.TextField00.getLength();

**Return**

영문, 숫자, 기호, 다국어 등 문자 종류에 관계없이 문자 하나를 1로 계산하여 문자열의 길이를 반환합니다.


---

### getOffsetBottom

> Components > Component > TextField > Method > getOffsetBottom

**Description**

부모 컴포넌트의 Top 위치를 기준으로 TextField 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
TextField.getOffsetBottom();
```

**Parameters**

var nBottom = this.TextField.getOffsetBottom();

**Return**

부모 컴포넌트의 Top 위치를 기준으로 TextField 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 TextField 의 bottom 값을 동적으로 계산합니다.


---

### getOffsetHeight

> Components > Component > TextField > Method > getOffsetHeight

**Description**

TextField 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
TextField.getOffsetHeight();
```

**Parameters**

var nHeight = this.TextField.getOffsetHeight();

**Return**

TextField 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 TextField 의 높이를 동적으로 계산합니다.


---

### getOffsetLeft

> Components > Component > TextField > Method > getOffsetLeft

**Description**

부모 컴포넌트의 Left 위치를 기준으로 TextField 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
TextField.getOffsetLeft();
```

**Parameters**

var nleft = this.TextField.getOffsetLeft();

**Return**

부모 컴포넌트의 Left 위치를 기준으로 TextField 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 TextField 의 left 값을 동적으로 계산합니다.


---

### getOffsetRight

> Components > Component > TextField > Method > getOffsetRight

**Description**

부모 컴포넌트의 Left 위치를 기준으로 TextField 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
TextField.getOffsetRight();
```

**Parameters**

var nRight = this.TextField.getOffsetRight();

**Return**

부모 컴포넌트의 Left 위치를 기준으로 TextField 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 TextField 의 right 값을 동적으로 계산합니다.


---

### getOffsetTop

> Components > Component > TextField > Method > getOffsetTop

**Description**

부모 컴포넌트의 Top 위치를 기준으로 TextField 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
TextField.getOffsetTop();
```

**Parameters**

var nTop = this.TextField.getOffsetTop();

**Return**

부모 컴포넌트의 Top 위치를 기준으로 TextField 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 TextField 의 top 값을 동적으로 계산합니다.


---

### getOffsetWidth

> Components > Component > TextField > Method > getOffsetWidth

**Description**

TextField 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
TextField.getOffsetWidth();
```

**Parameters**

var nWidth = this.TextField.getOffsetWidth();

**Return**

TextField 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 TextField 의 너비를 동적으로 계산합니다.


---

### getPixelBottom

> Components > Component > TextField > Method > getPixelBottom

**Description**

TextField 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
TextField.getPixelBottom();
```

**Parameters**

var nbottom = this.TextField.getPixelBottom();

**Return**

TextField 의 bottom 속성값을 픽셀단위로 반환합니다.

bottom 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- bottom 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelHeight

> Components > Component > TextField > Method > getPixelHeight

**Description**

TextField 의 height 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
TextField.getPixelHeight();
```

**Parameters**

var nheight = this.TextField.getPixelHeight();

**Return**

TextField 의 height 속성값을 픽셀단위로 반환합니다.

height 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- height 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelLeft

> Components > Component > TextField > Method > getPixelLeft

**Description**

TextField 의 left 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
TextField.getPixelLeft();
```

**Parameters**

var nleft = this.TextField.getPixelLeft();

**Return**

TextField 의 left 속성값을 픽셀단위로 반환합니다.

left 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- left 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelRight

> Components > Component > TextField > Method > getPixelRight

**Description**

부모 컴포넌트의 Left 위치를 기준으로 TextField 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
TextField.getOffsetRight();
```

**Parameters**

var nRight = this.TextField.getOffsetRight();

**Return**

부모 컴포넌트의 Left 위치를 기준으로 TextField 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 TextField 의 right 값을 동적으로 계산합니다.


---

### getPixelTop

> Components > Component > TextField > Method > getPixelTop

**Description**

TextField 의 top 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
TextField.getPixelTop();
```

**Parameters**

var ntop = this.TextField.getPixelTop();

**Return**

TextField 의 top 속성값을 픽셀단위로 반환합니다.

top 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- top 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelWidth

> Components > Component > TextField > Method > getPixelWidth

**Description**

TextField 의 width 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
TextField.getPixelWidth();
```

**Parameters**

var nwidth = this.TextField.getPixelWidth();

**Return**

TextField 의 width 속성값을 픽셀단위로 반환합니다.

width 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- width 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getSelect

> Components > Component > TextField > Method > getSelect

**Description**

TextField 컴포넌트의 텍스트 편집 영역에서 선택한 텍스트의 시작 인덱스와 끝 인덱스를 배열 형태로 반환하는 메서드입니다.

**Syntax**

```javascript
TextField.getSelect()
```

**Parameters**

var vArrSelect = this.TextField00.getSelect();

**Return**

- 선택한 텍스트의 시작 인덱스와 끝 인덱스를 배열로 반환합니다.
- 선택한 텍스트가 없는 경우 현재 캐럿 위치의 인덱스 값을 배열 형태로 반환합니다.
  예를 들어, 캐럿 위치의 인덱스 값이 1인 경우 [1, 1]을 반환합니다.
- 텍스트 편집 영역의 상태를 확인할 수 없는 경우 [0, 0]을 반환합니다.

**Remark**

- TextField 컴포넌트의 텍스트 편집 영역에 포커스가 있고 캐럿이 표시된 상태에서만 정상적으로 값을 반환합니다.

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

> Components > Component > TextField > Method > getSelectedText

**Description**

TextField 컴포넌트의 텍스트 편집 영역에서 선택한 텍스트를 반환하는 메서드입니다.

**Syntax**

```javascript
TextField.getSelectedText()
```

**Parameters**

var strText = this.TextField00.getSelectedText();

**Return**

- 편집영역에서 선택한 텍스트를 반환합니다.
- 선택된 텍스트가 없을 경우 빈값을 반환합니다.
- 텍스트 편집 영역의 상태를 확인할 수 없는 경우 빈값을 반환합니다.

**Remark**

- TextField 컴포넌트의 텍스트 편집 영역에 포커스가 있고 캐럿이 표시된 상태에서만 정상적으로 값을 반환합니다.

- 화면에 표시되고 선택할 수 있는 문자(예: 마스크 문자, 공백 문자, 숫자 기호)를 포함합니다.
  
- 컴포넌트의 속성에 따라 선택한 텍스트 영역을 처리할 수 없는 경우 메서드 실행 시 빈값을 반환합니다.
  - 텍스트 편집 영역이 비활성화된 경우
    Calendar 컴포넌트의 type 속성값이 "monthonly"인 경우
    Calendar 컴포넌트의 popuptype 속성값이 "normal" 또는 "system"이고 모바일 환경에서 실행한 경우
    Spin 컴포넌트의 type 속성값이 "spinonly"인 경우
  - 웹 표준 스펙에서 지원하지 않는 경우
    WRE 환경에서 TextField 컴포넌트의 inputtype 속성값이 "email" 또는 "number"인 경우


---

### getValidStatus

> Components > Component > TextField > Method > getValidStatus

**Description**

TextField 컴포넌트에 입력한 텍스트의 유효성 검사 결과를 반환하는 메서드입니다.

**Syntax**

```javascript
TextField.getValidStatus()
```

**Return**

TextField 컴포넌트에 입력한 텍스트의 유효성 검사 결과를 반환합니다.

- "invalid": 입력한 텍스트가 유효하지 않습니다.
- "valid": 입력한 텍스트가 유효합니다.
- "": 입력값이 없을 때


---

### init

> Components > Component > TextField > Method > init

**Description**

스크립트로 TextField 을(를) 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**

```javascript
TextField.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

**Parameters**

```
TextField 의 ID를 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- 인수값에 기준 컴포넌트를 포함하면 TextField 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 TextField 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 TextField 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

- 스크립트에서 동적으로 컴포넌트를 생성한 후에만 사용할 수 있습니다.
  동적으로 생성한 컴포넌트가 아닌 경우에는 오동작이 발생할수 있습니다.

- show() 메소드로 컴포넌트가 화면에 표시되면 초기화가 끝난 상태입니다.
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다.

- 동적으로 생성한 컴포넌트를 컨테이너 컴포넌트에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildTextField.destroyTextField.show


---

### insertEventHandler

> Components > Component > TextField > Method > insertEventHandler

**Description**

TextField 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
TextField.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

### move

> Components > Component > TextField > Method > move

**Description**

TextField 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
TextField.move( vLeft, vTop [, vWidth, vHeight [, vRight, vBottom]] )
```

**Parameters**

```
TextField 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* 값에 기준 컴포넌트를 포함하여 설정했을 때 :
pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 TextField 의 left 가 결정됩니다.
비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 TextField 의 left 가 결정됩니다.
```

**Return**

없음

**Remark**

- 인수값에 기준 컴포넌트를 포함하면 TextField 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 TextField 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 TextField 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.


---

### moveToNext

> Components > Component > TextField > Method > moveToNext

**Description**

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 TextField 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**

```javascript
TextField.moveToNext( objComp )
TextField.moveToNext( strComp )
```

**Parameters**

```
기준이 되는 컴포넌트를 오브젝트로 설정합니다.
```

**Return**

없음

**Remark**

- 인수로 전달되는 기준 컴포넌트와 TextField 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToNext() 메소드는 기준 컴포넌트보다 TextField 이(가) 한단계 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 뒤에 표시되게 됩니다.


---

### moveToPrev

> Components > Component > TextField > Method > moveToPrev

**Description**

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 TextField 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**

```javascript
TextField.moveToPrev( objComp )
TextField.moveToPrev( strComp )
```

**Parameters**

```
기준이 되는 컴포넌트를 오브젝트로 설정합니다.
```

**Return**

없음

**Remark**

- 인수로 전달되는 기준 컴포넌트와 TextField 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToPrev() 메소드는 기준 컴포넌트보다 TextField 이(가) 한단계 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 앞에 표시되게 됩니다.


---

### removeEvent

> Components > Component > TextField > Method > removeEvent

**Description**

TextField 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**

```javascript
TextField.removeEvent( strEventID )
```

**Parameters**

```
TextField 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 삭제에 성공하면 true 를 반환합니다.

이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- TextField 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- TextField 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.


---

### removeEventHandler

> Components > Component > TextField > Method > removeEventHandler

**Description**

TextField 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
TextField.removeEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > TextField > Method > removeEventHandlerLookup

**Description**

TextField 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
TextField.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

> Components > Component > TextField > Method > resize

**Description**

TextField 의 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
TextField.resize( vWidth, vHeight )
```

**Parameters**

```
TextField 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.
음수값을 설정할 수 없습니다.

* 값에 기준 컴포넌트를 포함하여 설정했을 때 :
pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 TextField 의 width 가 결정됩니다.
비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 TextField 의 width 가 결정됩니다.
```

**Return**

없음

**Remark**

- TextField 의 left 속성값이 null 이 아니면 resize() 메소드 실행 후 TextField 의 우측 위치가 변경됩니다.
  또한, 메소드 실행 후 right 속성값은 null 이 됩니다.

- TextField 의 left 속성값이 null 이면 resize() 메소드 실행 후 TextField 의 좌측 위치가 변경됩니다.
  또한, 메소드 실행 후 left 속성값은 null 로 유지됩니다.

- TextField 의 top 속성값이 null 이 아니면 resize() 메소드 실행 후 TextField 의 하단 위치가 변경됩니다.
  또한, 메소드 실행 후 bottom 속성값은 null 이 됩니다.

- TextField 의 top 속성값이 null 이면 resize() 메소드 실행 후 TextField 의 상단 위치가 변경됩니다.
  또한, 메소드 실행 후 top 속성값은 null 로 유지됩니다.

- 인수값에 기준 컴포넌트를 포함하면 TextField 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vWidth, vHeight 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 TextField 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 TextField 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.


---

### sendToBack

> Components > Component > TextField > Method > sendToBack

**Description**

부모가 동일한 컴포넌트 중 TextField 이(가) 화면의 제일 뒤에 표시되게 합니다.

**Syntax**

```javascript
TextField.sendToBack()
```

**Parameters**

this.TextField.sendToBack();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToBack() 메소드는 TextField 을(를) 가장 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 뒤에 표시되게 됩니다


---

### sendToNext

> Components > Component > TextField > Method > sendToNext

**Description**

부모가 동일한 컴포넌트 중 TextField 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**

```javascript
TextField.sendToNext()
```

**Parameters**

this.TextField.sendToNext();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToNext() 메소드는 TextField 을(를) 한단계 먼저 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 뒤에 표시되게 됩니다.


---

### setCaretPos

> Components > Component > TextField > Method > setCaretPos

**Description**

TextField 컴포넌트에서 캐럿의 위치를 인덱스로 설정하는 메서드입니다.

**Syntax**

```javascript
TextField.setCaretPos( [nIndex] )
```

**Parameters**

```
캐럿이 위치할 인덱스를 숫자로 설정합니다. 
인덱스는 0부터 시작하며 "0 ~ 텍스트길이"까지 설정할 수 있습니다. 
"-1"을 설정할 경우 캐럿이 텍스트의 오른쪽 끝에 위치합니다.
```

**Return**

캐럿 설정에 성공하면 true를 반환합니다.
캐럿 설정에 실패하면 false를 반환합니다.

**Remark**

- nIndex 값을 생략할 경우 0으로 적용됩니다.

- TextField 컴포넌트에 포커스가 있고 캐럿이 표시되고 있어야 합니다.


◆ NRE 제약 (Windows, macOS, Android)

- 문자열 입력 시 입력 확정 처리가 필요한 문자를 사용하는 경우 미확정 상태에서 setCaretPos 메서드는 동작하지 않습니다.


---

### setEventHandler

> Components > Component > TextField > Method > setEventHandler

**Description**

TextField 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
TextField.setEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > TextField > Method > setEventHandlerLookup

**Description**

TextField 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
TextField.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

> Components > Component > TextField > Method > setFocus

**Description**

TextField 에 포커스를 설정하는 메서드입니다.

**Syntax**

```javascript
TextField.setFocus( [bMoveScroll] )
```

**Parameters**

```
부모 컴포넌트에 스크롤이 있을 경우, TextField 기준으로 스크롤을 이동할지 여부를 설정합니다.

true: TextField 이(가) 화면에 표시되도록 스크롤을 이동합니다.
false: TextField 위치와 관계없이 스크롤을 이동하지 않습니다.

값을 지정하지 않으면 기본값은 true입니다.
```

**Return**

TextField 이(가) 포커스를 얻기 전에 포커스를 가지고 있던 컴포넌트를 반환합니다.
이전에 포커스를 가진 컴포넌트가 없거나 메소드 실행에 실패한 경우에는 null을 반환합니다.

**Remark**

- enableaccessibility 속성값과 관계없이 전달된 파라미터값을 기준으로 동작합니다.


---

### setOffsetBottom

> Components > Component > TextField > Method > setOffsetBottom

**Description**

부모 컴포넌트의 Top 위치를 기준으로 TextField 의 bottom 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
TextField.setOffsetBottom( nBottom );
```

**Parameters**

```
부모 컴포넌트의 Top 위치를 기준으로 TextField 의 bottom 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 TextField 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > TextField 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > TextField 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > TextField 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.


---

### setOffsetHeight

> Components > Component > TextField > Method > setOffsetHeight

**Description**

TextField 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
TextField.setOffsetHeight( nHeight );
```

**Parameters**

```
TextField 의 높이를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 TextField 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > TextField 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > TextField 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > TextField 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.


---

### setOffsetLeft

> Components > Component > TextField > Method > setOffsetLeft

**Description**

부모 컴포넌트의 Left 위치를 기준으로 TextField 의 left 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
TextField.setOffsetLeft( nLeft );
```

**Parameters**

```
부모 컴포넌트의 Left 위치를 기준으로 TextField 의 left 값을 픽셀단위의 숫자로 설정합니다
```

**Return**

없음

**Remark**

- 메소드 실행 전 TextField 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > TextField 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > TextField 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, right 속성이 설정됩니다.
   > TextField 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.


---

### setOffsetRight

> Components > Component > TextField > Method > setOffsetRight

**Description**

부모 컴포넌트의 Left 위치를 기준으로 TextField 의 right 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
TextField.setOffsetRight( nRight );
```

**Parameters**

```
부모 컴포넌트의 Left 위치를 기준으로 TextField 의 right 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 TextField 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > TextField 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > TextField 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > TextField 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.


---

### setOffsetTop

> Components > Component > TextField > Method > setOffsetTop

**Description**

부모 컴포넌트의 Top 위치를 기준으로 TextField 의 top 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
TextField.setOffsetTop( nTop );
```

**Parameters**

```
부모 컴포넌트의 Top 위치를 기준으로 TextField 의 top 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 TextField 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > TextField 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > TextField 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, bottom 속성이 설정됩니다.
   > TextField 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.


---

### setOffsetWidth

> Components > Component > TextField > Method > setOffsetWidth

**Description**

TextField 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
TextField.setOffsetWidth( nWidth );
```

**Parameters**

```
TextField 의 너비를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 TextField 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > TextField 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > TextField 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > TextField 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.


---

### setSelect

> Components > Component > TextField > Method > setSelect

**Description**

TextField 컴포넌트에 포커스가 있을 때 인수로 지정된 영역을 선택하는 메서드입니다.

**Syntax**

```javascript
TextField.setSelect( [nBegin [,nEnd]] )
```

**Parameters**

```
선택할 영역의 시작 인덱스를 숫자로 설정합니다.

인덱스는 0부터 시작하며 0 ~ 텍스트 길이까지 설정할 수 있습니다.
-1을 설정하면 선택할 영역의 시작 위치가 오른쪽 끝으로 설정됩니다.

값 생략 시 0으로 적용됩니다.
```

**Return**

지정된 영역의 선택에 성공하면 true를 반환합니다.

지정된 영역의 선택에 실패하면 false를 반환합니다.

**Remark**

- setSelect 메서드 실행 전에 편집영역이 포커스 되어 있어야 합니다.

- nBegin 값이 nEnd 값 보다 클 경우 오른쪽부터 영역이 선택되고, 캐럿은 선택된 영역의 오른쪽에 위치합니다.


◆ Mobile WRE 제약

- Mobile WRE는 nBegin, nEnd 값에 따라 정상적으로 선택이 되지 않을 수 있습니다.


---

### setSelectedText

> Components > Component > TextField > Method > setSelectedText

**Description**

TextField 컴포넌트에서 현재 선택되어 있는 텍스트를 전달된 인수값으로 변경하는 메서드입니다.

**Syntax**

```javascript
TextField.setSelectedText( strText )
```

**Parameters**

```
TextField 컴포넌트에 선택되어 있는 텍스트를 대체할 문자열을 설정합니다.
```

**Return**

TextField 컴포넌트에 선택되어 있던 텍스트를 문자열로 반환합니다.

**Remark**

- TextField 컴포넌트에 선택된 텍스트가 없으면 setSelectedText 메서드는 동작하지 않습니다.

- inputtype 또는 pattern 속성에서 허용한 문자 이외의 문자가 strText에 있다면 setSelectedText 메서드는 동작하지 않습니다.


---

### show

> Components > Component > TextField > Method > show

**Description**

스크립트로 동적 생성한 TextField 을(를) 화면에 표시하는 메소드입니다.

**Syntax**

```javascript
TextField.show()
```

**Parameters**

this.TextField00.show();

**Return**

없음

**Remark**

- show() 메소드는 컴포넌트가 폼 또는 컨테이너 컴포넌트의 자식 컴포넌트로 등록된 상태에서 사용이 가능합니다.
  자식 컴포넌트로 등록된 상태가 아닌 경우에는 오동작이 발생할 수 있습니다.

- 컴포넌트를 컨테이너에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildTextField.destroyTextField.init


---

### updateToDataset

> Components > Component > TextField > Method > updateToDataset

**Description**

TextField 의 value 속성값을 바인딩 되어 있는 DataSet 에 즉시 반영시키는 메소드입니다.

**Syntax**

```javascript
TextField.updateToDataset()
```

**Parameters**

var bSucc = this.TextField00.updateToDataset();

**Return**

반영에 성공하면 "true"를 반환합니다.

반영에 실패하면 "false"를 반환합니다.

**Remark**

- TextField 의 value 속성이 DataSet 에 바인딩 되어 있어야 합니다.

- TextField 의 value 속성값이 바인딩 되어있는 Dataset 의 값과 같으면 Dataset 에 값이 반영되지 않고 "false"를 반환합니다.


---

### 이벤트 (Events)

### canchange

> Components > Component > TextField > Event > canchange

**Description**

TextField 컴포넌트에서 value 속성값이 변경될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
canchange(obj:nexacro.TextField,e:nexacro.ChangeEventInfo);
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

- TextField 컴포넌트에서 문자를 입력/삭제 후 엔터키를 입력하거나 포커스를 이동하면 value 속성값이 변경됩니다.


---

### onchanged

> Components > Component > TextField > Event > onchanged

**Description**

TextField 컴포넌트에서 value 속성값이 변경된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
onchanged(obj:nexacro.TextField,e:nexacro.ChangeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- canchange 이벤트에서 false를 반환하면 onchanged 이벤트는 발생하지 않습니다.

- TextField 컴포넌트에서 문자를 입력/삭제 후 엔터키를 입력하거나 포커스를 이동하면 value 속성값이 변경됩니다.


---

### oncontextmenu

> Components > Component > TextField > Event > oncontextmenu

**Description**

TextField 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다.

**Syntax**

```javascript
oncontextmenu(obj:nexacro.TextField,e:nexacro.ContextMenuEventInfo);
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

> Components > Component > TextField > Event > ondevicebuttonup

**Description**

모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondevicebuttonup(obj:nexacro.TextField,e:nexacro.DeviceButtonEventInfo);
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

> Components > Component > TextField > Event > ondrag

**Description**

TextField 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondrag(obj:nexacro.TextField,e:nexacro.DragEventInfo);
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

- TextField 영역 내에서 마우스의 LButtonDown 후 LButtonUp 액션 없이 마우스 이동 시 ondrag 이벤트가 발생합니다.

- 이벤트의 리턴값을 true 로 하여 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등

- 에디트 계열 컴포넌트에서 마우스로 드래그 시 화면의 문자열을 선택할 지 드래그 상태를 발생시킬지 여부는 이벤트의 리턴값으로 결정됩니다.


---

### ondragenter

> Components > Component > TextField > Event > ondragenter

**Description**

TextField 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragenter(obj:nexacro.TextField,e:nexacro.DragEventInfo);
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

- 드래그 상태를 유지하고 있으면 TextField 영역으로 마우스 포인터가 들어올 때마다 이벤트가 발생합니다.


---

### ondragleave

> Components > Component > TextField > Event > ondragleave

**Description**

TextField 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragleave(obj:nexacro.TextField,e:nexacro.DragEventInfo);
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

- 드래그 상태를 유지하고 있으면 TextField 영역에서 마우스 포인터가 나갈 때마다 이벤트가 발생합니다.


---

### ondragmove

> Components > Component > TextField > Event > ondragmove

**Description**

TextField 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragmove(obj:nexacro.TextField,e:nexacro.DragEventInfo);
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

- 드래그 상태를 유지하고 있으면 TextField 영역 내에서 마우스 포인터가 움직일 때마다 이벤트가 발생합니다.


---

### ondrop

> Components > Component > TextField > Event > ondrop

**Description**

TextField 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondrop(obj:nexacro.TextField,e:nexacro.DragEventInfo);
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

- TextField 영역 내에서 드래그 상태인 마우스의 LButtonUp 액션 발생 시 ondrop 이벤트가 발생합니다.

- 넥사크로에서 발생한 드래그 또는 어플리케이션 외부에서 파일을 드래그 했을 때 ondrop 이벤트를 발생시킬 수 있습니다.

- 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등


---

### oneditclick

> Components > Component > TextField > Event > oneditclick

**Description**

TextField 컴포넌트의 텍스트 편집 영역에서 마우스 왼쪽 버튼을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
oneditclick(obj:nexacro.TextField,e:nexacro.EditClickEventInfo);
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

### oninput

> Components > Component > TextField > Event > oninput

**Description**

TextField 에서 입력을 시도할 때 발생하는 이벤트 입니다.

**Syntax**

```javascript
oninput(obj:nexacro.TextField,e:nexacro.InputEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 조합문자 입력시 oninput 이벤트가 한번 이상 발생할 수 있습니다.


◆ web runtime environment 제약

- 동일한 입력에 대해 브라우저의 특성에 따라 oninput 이벤트 발생횟수가 다를 수 있습니다.

- 조합문자 입력확정 동작에서 oninput 이벤트가 발생하지 않는 브라우저가 있을 수 있습니다.
   조합문자 입력확정 동작은 입력시도로 볼 수 없기 때문에 oninput 이벤트의 발생을 보장하지 않습니다.


---

### oninvalid

> Components > Component > TextField > Event > oninvalid

**Description**

TextField 컴포넌트에 입력한 텍스트를 확정했을 때 입력한 텍스트가 유효하지 않은 경우 발생하는 이벤트입니다.

**Syntax**

```javascript
oninvalid(obj:nexacro.TextField,e:nexacro.EventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onkeydown

> Components > Component > TextField > Event > onkeydown

**Description**

TextField 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkeydown(obj:nexacro.TextField,e:nexacro.KeyEventInfo);
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


---

### onkeyup

> Components > Component > TextField > Event > onkeyup

**Description**

TextField 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkeyup(obj:nexacro.TextField,e:nexacro.KeyEventInfo);
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

> Components > Component > TextField > Event > onkillfocus

**Description**

TextField 에서 포커스가 나갈  때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkillfocus(obj:nexacro.TextField,e:nexacro.KillFocusEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 서로 다른 애플리케이션 단위로 포커스가 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showModal(), open() 등의 메소드로 팝업된 Frame 으로 포커스가 이동하는 경우 TextField 에서 포커스 관련 이벤트가 발생하지 않습니다.
   또한, alert(), confirm() 메소드로 표시된 팝업으로 포커스가 이동하는 경우도 TextField 에서 포커스 관련 이벤트가 발생하지 않습니다.


---

### onlbuttondown

> Components > Component > TextField > Event > onlbuttondown

**Description**

TextField 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onlbuttondown(obj:nexacro.TextField,e:nexacro.MouseEventInfo);
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

- TextField 영역 내에서 마우스의 LButtonDown 액션이 발생하면 이벤트가 발생합니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.


---

### onlbuttonup

> Components > Component > TextField > Event > onlbuttonup

**Description**

TextField 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onlbuttonup(obj:nexacro.TextField,e:nexacro.MouseEventInfo);
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


---

### onleadingbuttonclick

> Components > Component > TextField > Event > onleadingbuttonclick

**Description**

leadingbutton 이미지 버튼 영역 내에서 마우스 왼쪽 버튼을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onleadingbuttonclick(obj:nexacro.TextField,e:nexacro.ClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onmouseenter

> Components > Component > TextField > Event > onmouseenter

**Description**

TextField 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmouseenter(obj:nexacro.TextField,e:nexacro.MouseEventInfo);
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

> Components > Component > TextField > Event > onmouseleave

**Description**

TextField 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmouseleave(obj:nexacro.TextField,e:nexacro.MouseEventInfo);
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

> Components > Component > TextField > Event > onmousemove

**Description**

TextField 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmousemove(obj:nexacro.TextField,e:nexacro.MouseEventInfo);
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

### onmove

> Components > Component > TextField > Event > onmove

**Description**

TextField 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmove(obj:nexacro.TextField,e:nexacro.MoveEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onrbuttondown

> Components > Component > TextField > Event > onrbuttondown

**Description**

TextField 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrbuttondown(obj:nexacro.TextField,e:nexacro.MouseEventInfo);
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

> Components > Component > TextField > Event > onrbuttonup

**Description**

TextField 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrbuttonup(obj:nexacro.TextField,e:nexacro.MouseEventInfo);
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

### onsetfocus

> Components > Component > TextField > Event > onsetfocus

**Description**

TextField 에 포커스가 들어올 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsetfocus(obj:nexacro.TextField,e:nexacro.SetFocusEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 서로 다른 애플리케이션 단위로 포커스가 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showModal(), open() 등의 메소드로 팝업된 Frame 으로 포커스가 이동하는 경우 TextField 에서 포커스 관련 이벤트가 발생하지 않습니다.
   또한, alert(), confirm() 메소드로 표시된 팝업으로 포커스가 이동하는 경우도 TextField 에서 포커스 관련 이벤트가 발생하지 않습니다.

- open() 메소드로 오픈된 Modeless 창에서 부모창의 TextField 에 setFocus() 메소드 실행 시 환경에 따라 동작에 차이가 있으므로 주의하여야 합니다.
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

> Components > Component > TextField > Event > onsize

**Description**

TextField 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsize(obj:nexacro.TextField,e:nexacro.SizeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### ontouchend

> Components > Component > TextField > Event > ontouchend

**Description**

TextField 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchend(obj:nexacro.TextField,e:nexacro.TouchEventInfo);
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

> Components > Component > TextField > Event > ontouchmove

**Description**

TextField 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchmove(obj:nexacro.TextField,e:nexacro.TouchEventInfo);
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

> Components > Component > TextField > Event > ontouchstart

**Description**

TextField 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchstart(obj:nexacro.TextField,e:nexacro.TouchEventInfo);
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

### ontrailingbuttonclick

> Components > Component > TextField > Event > ontrailingbuttonclick

**Description**

trailingbutton 이미지 버튼 영역 내에서 마우스 왼쪽 버튼을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontrailingbuttonclick(obj:nexacro.TextField,e:nexacro.ClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---
