# nexacroN V24 — Edit

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 145개

---

## Components > Component > Edit

### Edit

> Components > Component > Edit

**Description**

Edit 는 사용자로부터 1 줄로 된 문자열을 입력받기 위해 사용되는 컴포넌트입니다.

**Remark**

- 사용자에게 문자열을 출력하기 위한 용도로 사용할 수 있습니다.

- password 속성을 설정하여 사용자로부터 암호문자열을 입력받을 수 있습니다.
   maxlength 속성을 설정하여 입력받는 문자열의 최대 길이를 제한 할 수 있습니다.

- 여러 줄로 된 문자열을 입력 받고자 한다면 TextArea 를 사용하여야 합니다.

- 특정한 형식의 문자나 숫자를 입력받고자 한다면 MaskEdit 를 사용하여야 합니다.

- 일본어 IME 로 일본어 입력(조합중이고 확정이 안된 상태)중이면 붙여넣기 기능이 동작하지 않습니다.

**Structure**



**Contents Sizing**

Edit 의 크기를 결정하는 기준입니다.

**Basic Key Action**

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 캐럿 이동 | 좌우방향키 | 캐럿이 표시되고 있을 때 캐럿이 좌/우 방향으로 이동됩니다. |
| 텍스트 선택 | Shift + 좌우방향키 | 캐럿이 표시되고 있을 때 입력된 텍스트가 좌/우 방향으로 선택됩니다. |

**Accessibility Key Action**

접근성 기능이 활성화 되어 있을 때 적용되는 키 액션입니다.

**Property**

| Name | Description |
| --- | --- |
| accessibilityaction | Edit에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다. |
| accessibilitydesclevel | Edit 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다. |
| accessibilitydescription | Edit에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다. |
| accessibilityenable | Edit 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다. |
| accessibilitylabel | Edit에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다. |
| accessibilityrole | Edit에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다. |
| autoselect | Edit 의 편집영역이 활성화 될 때 텍스트를 전체선택 할지 설정하는 속성입니다. |
| autoskip | Edit 에 입력중인 문자열의 길이가 maxlength 속성값에 도달했을 때 포커스를 자동으로 이동시킬지 설정하는 속성입니다. |
| background | Edit 의 배경 영역을 설정하는 속성입니다. |
| border-radius | Edit 의 모서리 모양을 설정하는 속성입니다. |
| bottom | Edit 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다. |
| box-shadow | Edit 에 그림자 효과를 설정하는 속성입니다. |
| color | Edit 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| cssclass | Edit 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다. |
| cursor | Edit 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| displaynulltext | Edit 의 value 속성값이 null 또는 undefined 일 때 Edit 에 표시될 대체 문자열을 설정하는 속성입니다. |
| enable | Edit 의 사용가능 여부를 설정하는 속성입니다. |
| enableevent | Edit 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다. |
| flexgrow | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축) 여백을 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다. |
| flexshrink | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 영역이 컨테이너 영역을 초과하지 않도록 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다. |
| font | Edit 에서 사용하는 폰트를 설정하는 속성입니다. |
| height | Edit 을(를) 표시하기 위한 높이를 설정하는 속성입니다. |
| hotkey | Edit 의 기본 액션을 수행하기 위한 단축키를 설정하는 속성입니다. |
| id | Edit의 고유 식별자를 설정하는 속성입니다. |
| imeaction | 키보드에 하단 모서리에 표시되는 사용자 작업 버튼 UI와 동작을 설정하는 속성입니다. |
| imemode | Edit 의 기본 입력 언어를 설정하는 속성입니다. |
| initvalueid | Edit 에 적용될 InitValue 의 ID 를 설정하는 속성입니다. |
| inputfilter | Edit 에 입력을 제한 시킬 문자를 타입별로 설정하는 속성입니다. |
| inputmode | Edit 에 입력되는 영문자를 대문자 또는 소문자로 변환할지 설정하는 속성입니다. |
| inputtype | Edit 에 입력을 허용할 문자를 타입별로 설정하는 속성입니다. |
| layoutorder | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 순서를 설정합니다. |
| left | Edit 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다. |
| letter-spacing | Edit 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다. |
| maxheight | Edit 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다. |
| maxlength | Edit 에 입력할 수 있는 문자열의 최대길이를 설정하는 속성입니다. |
| maxwidth | Edit 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다. |
| minheight | Edit 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다. |
| minwidth | Edit 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다. |
| name | Edit 의 이름을 설정하는 속성입니다. |
| -nexa-border | Edit 의 테두리를 설정하는 속성입니다. |
| -nexa-edge | Edit 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-padding | Edit 와 내부 텍스트영역 사이의 여백을 설정하는 속성입니다. |
| -nexa-rtl-background-image | Edit 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| -nexa-rtl-edge-image | Edit 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-text-align | Edit 에 표시되는 텍스트 또는 컨텐츠의 가로 정렬 방식을 설정하는 속성입니다. |
| -nexa-text-decoration | Edit 에 표시되는 텍스트에 적용할 효과를 설정하는 속성입니다. |
| opacity | Edit 영역의 투명도를 설정하는 속성입니다. |
| parent | Edit 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| password | Edit 에 표시되는 문자를 모두 특수문자로 대체할 지 설정하는 속성입니다. |
| positionstep | 부모 오브젝트가 화면분할기능을 사용할 때 Edit 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다. |
| readonly | Edit 에서 편집을 허용할 지 설정하는 속성입니다. |
| right | Edit 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다. |
| rtl | Edit 에서 내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다. |
| tablecellarea | Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다. |
| taborder | 탭키 입력으로 컴포넌트간 포커스를 이동할 때 Edit 의 순서를 설정하는 속성입니다. |
| tabstop | 탭키 입력으로 컴포넌트간 포커스를 이동할 때 Edit 이(가) 포커스를 받을 지 여부를 설정하는 속성입니다. |
| text | Edit 에 표시되는 문자열을 갖는 읽기전용 속성입니다. |
| tooltiptext | Edit 에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다. |
| tooltiptype | Edit 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다. |
| top | Edit 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다. |
| usecontextmenu | Edit 의 편집영역에서 오른쪽 마우스 클릭 시 기본팝업메뉴의 표시 여부를 설정하는 속성입니다. |
| usesoftkeyboard | Edit 가 포커스를 가질 때 키패드의 표시 여부를 설정하는 속성입니다. |
| value | Edit 에 표시되는 문자열을 갖는 속성입니다. |
| visible | Edit 이(가) 화면에 표시될지 여부를 설정하는 속성입니다. |
| width | Edit 을(를) 표시하기 위한 너비를 설정하는 속성입니다. |
| word-spacing | Edit 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addEvent | Edit 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| addEventHandler | Edit 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 Edit 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| bringToFront | 부모가 동일한 컴포넌트 중 Edit 이(가) 화면의 제일 앞에 표시되게 합니다. |
| bringToPrev | 부모가 동일한 컴포넌트 중 Edit 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 Edit 을(를) 삭제하는 메소드입니다. |
| findEventHandler | Edit 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getCaretPos | Edit 에서 캐럿이 위치한 인덱스를 반환하는 메소드입니다. |
| getEventHandler | Edit 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| getLength | Edit 의 value 속성에 설정된 문자열의 길이를 반환하는 메소드입니다. |
| getOffsetBottom | 부모 컴포넌트의 Top 위치를 기준으로 Edit 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetHeight | Edit 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetLeft | 부모 컴포넌트의 Left 위치를 기준으로 Edit 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetRight | 부모 컴포넌트의 Left 위치를 기준으로 Edit 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetTop | 부모 컴포넌트의 Top 위치를 기준으로 Edit 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetWidth | Edit 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getPixelBottom | Edit 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelHeight | Edit 의 height 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelLeft | Edit 의 left 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelRight | Edit 의 right 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelTop | Edit 의 top 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelWidth | Edit 의 width 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getSelect | Edit 컴포넌트의 텍스트 편집 영역에서 선택한 텍스트의 시작 인덱스와 끝 인덱스를 배열 형태로 반환하는 메서드입니다. |
| getSelectedText | Edit 컴포넌트의 텍스트 편집 영역에서 선택한 텍스트를 반환하는 메서드입니다. |
| init | 스크립트로 Edit 을(를) 동적 생성한 후에 초기화하는 메소드입니다. |
| insertEventHandler | Edit 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| move | Edit 의 위치와 크기를 변경하는 메소드입니다. |
| moveToNext | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Edit 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| moveToPrev | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Edit 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| removeEvent | Edit 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| removeEventHandler | Edit 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | Edit 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| resize | Edit 의 크기를 변경하는 메소드입니다. |
| sendToBack | 부모가 동일한 컴포넌트 중 Edit 이(가) 화면의 제일 뒤에 표시되게 합니다. |
| sendToNext | 부모가 동일한 컴포넌트 중 Edit 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| setCaretPos | Edit 에서 캐럿의 위치를 인덱스로 설정하는 메소드입니다. |
| setEventHandler | Edit 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | Edit 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| setFocus | Edit 에 포커스를 설정하는 메서드입니다. |
| setOffsetBottom | 부모 컴포넌트의 Top 위치를 기준으로 Edit 의 bottom 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetHeight | Edit 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetLeft | 부모 컴포넌트의 Left 위치를 기준으로 Edit 의 left 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetRight | 부모 컴포넌트의 Left 위치를 기준으로 Edit 의 right 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetTop | 부모 컴포넌트의 Top 위치를 기준으로 Edit 의 top 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetWidth | Edit 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| setSelect | Edit 에 포커스가 있을 때 인수로 지정된 영역을 선택하는 메소드입니다. |
| setSelectedText | Edit 에서 현재 선택되어 있는 텍스트를 전달된 인수값으로 변경하는 메소드입니다. |
| show | 스크립트로 동적 생성한 Edit 을(를) 화면에 표시하는 메소드입니다. |
| updateToDataset | Edit 의 value 속성값을 바인딩 되어 있는 DataSet 에 즉시 반영시키는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| canchange | Edit 에서 value 속성값이 변경될 때 발생하는 이벤트입니다. |
| onchanged | Edit 에서 value 속성값이 변경된 후 발생하는 이벤트입니다. |
| oncontextmenu | Edit 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다. |
| ondevicebuttonup | 모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다. |
| ondrag | Edit 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다. |
| ondragenter | Edit 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| ondragleave | Edit 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| ondragmove | Edit 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| ondrop | Edit 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다. |
| oneditclick | Edit 컴포넌트의 텍스트 편집 영역에서 마우스 왼쪽 버튼을 클릭했을 때 발생하는 이벤트입니다. |
| onimeaction | 사용자 작업 버튼 또는 ENTER 키 입력 시 발생하는 이벤트입니다. |
| oninput | Edit 에서 입력을 시도할 때 발생하는 이벤트 입니다. |
| onkeydown | Edit 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다. |
| onkeyup | Edit 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다. |
| onkillfocus | Edit 에서 포커스가 나갈  때 발생하는 이벤트입니다. |
| onlbuttondown | Edit 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| onlbuttonup | Edit 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| onmouseenter | Edit 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| onmouseleave | Edit 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| onmousemove | Edit 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| onmove | Edit 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| onrbuttondown | Edit 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| onrbuttonup | Edit 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| onsetfocus | Edit 에 포커스가 들어올 때 발생하는 이벤트입니다. |
| onsize | Edit 의 크기가 변경됐을 때 발생하는 이벤트입니다. |
| ontouchend | Edit 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다. |
| ontouchmove | Edit 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다. |
| ontouchstart | Edit 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다. |

**Status**

컴포넌트가 비활성화된 상태


---

### 속성 (Properties)

### -nexa-border

> Components > Component > Edit > Property > -nexa-border

**Description**

Edit 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.border[= strborder]
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
this.Edit00.border = "1px solid #999999";
this.Edit00.border = "1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999";
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

> Components > Component > Edit > Property > -nexa-edge

**Description**

Edit 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.edge[= stredge]
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
this.Edit00.edge = "URL('./images/border.png')" 5px 5px;
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

- Edit 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.


◆ WRE 제약

- <fixedwidth>,<fixedheight> 값이 이미지 사이즈의 1/2 을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-padding

> Components > Component > Edit > Property > -nexa-padding

**Description**

Edit 와 내부 텍스트영역 사이의 여백을 설정하는 속성입니다.

**Syntax**

```javascript
Edit.padding[= strpadding]
```

**Setting Syntax**

```javascript
strpadding ::= <npadding>'px'{4}
```
```javascript
* XCSS
-nexa-padding : 5px 5px 5px 5px;

* Script ( normal property )
this.Edit00.padding = "5px 5px 5px 5px";
```
- **`<npadding>`** — Edit 와 내부 텍스트영역 사이의 여백을 pixel 단위로 설정합니다.

값을 1회 입력 시 top/right/bottom/left 에 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top/bottom, right/left 에 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top, right/left, bottom 에 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top, right, bottom, left 에 첫번째 값부터 각각 적용됩니다.

"px" 단위를 생략할 수 없습니다.

**Remark**

- -nexa-padding 속성값을 설정하지 않으면 undefined 가 설정되고, "0px" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "padding" 을 사용해야 합니다.


◆ web runtime environment 제약

- -nexa-padding 속성값을 설정해도 텍스트가 여백이 적용된 부분에 표시될 수 있습니다.
   이는 Padding 은 적용되었지만 해당 영역까지 Clipping 이 되지 않아 텍스트가 보이는 문제로 브라우저 제약사항입니다.


---

### -nexa-rtl-background-image

> Components > Component > Edit > Property > -nexa-rtl-background-image

**Description**

Edit 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.-nexa-rtl-background-image
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

> Components > Component > Edit > Property > -nexa-rtl-edge-image

**Description**

Edit 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.-nexa-rtl-edge-image
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

> Components > Component > Edit > Property > -nexa-text-align

**Description**

Edit 에 표시되는 텍스트 또는 컨텐츠의 가로 정렬 방식을 설정하는 속성입니다.

**Syntax**

```javascript
Edit.textAlign[= strtextalign]
```

**Setting Syntax**

```javascript
strtextalign ::= 'left' | 'center' | 'right'
```
```javascript
* XCSS
-nexa-text-align : center;

* Script ( normal property )
this.Edit00.textAlign = "center";
```
- **`"left"`** — 텍스트 또는 컨텐츠를 왼쪽으로 정렬합니다.
- **`"center"`** — 텍스트 또는 컨텐츠를 가운데로 정렬합니다.
- **`"right"`** — 텍스트 또는 컨텐츠를 오른쪽으로 정렬합니다.

**Remark**

- -nexa-text-align 속성값을 설정하지 않으면 undefined 가 설정되고, XCSS 에 정의된 값으로 동작됩니다.
   XCSS 에도 정의된 값이 없을 경우 하단의 기준으로 컴포넌트에 따라 동작됩니다.
   > FileDownload, Button, IconControl, IconTextControl 은 "center" 로 동작됩니다.
   > MaskEdit 는 type 속성값이 "number" 이면 "right" 로 동작되고, "string" 이면 "left" 로 동작됩니다.
   > Grid 는 displaytype 속성값에 따라 동작되는 값이 다릅니다.
   > 나머지 컴포넌트는 "left" 로 동작됩니다.

- 스크립트로 접근 시 속성명은 "textAlign"을 사용해야 합니다.

- Edit 의 너비보다 표시되는 텍스트의 길이가 크면 "right" 를 설정해도 "left" 로 동작됩니다.


◆ web runtime environment 제약

- -nexa-text-align 속성값이 "right" 일 때 font 속성에 "italic" 을 설정하면 마지막 텍스트의 기울어진 부분이 잘려서 표시될 수 있습니다.
   웹브라우저에서 텍스트영역을 일반글자 기준으로 처리한 후 기울임을 적용하면서 발생하는 문제입니다.


---

### -nexa-text-decoration

> Components > Component > Edit > Property > -nexa-text-decoration

**Description**

Edit 에 표시되는 텍스트에 적용할 효과를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.textDecoration[= strTxtDeco]
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
this.Edit00.textDecoration = "underline overline";
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

### accessibilityaction

> Components > Component > Edit > Property > accessibilityaction

**Description**

Edit에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.accessibilityaction[= strAction]
```

**Setting Syntax**

```javascript
this.Edit00.accessibilityaction = "Accessibility Action Message"; 
this.Edit00.accessibilityaction = "Select by direction key";
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

> Components > Component > Edit > Property > accessibilitydesclevel

**Description**

Edit 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.accessibilitydesclevel[= enumLevel]
```

**Setting Syntax**

```javascript
enumLevel ::= 'all' | 'self' | 'child' | 'none'
```
```javascript
this.Edit00.accessibilitydesclevel = "all";
```
- **`"all"`** — Edit 와 자식 컴포넌트에 대한 접근성을 모두 출력합니다.
- **`"self"`** — Edit 의 접근성만 출력하고 자식 컴포넌트의 접근성은 출력하지 않습니다.
- **`"child"`** — Edit 의 접근성은 출력하지 않고, 자식 컴포넌트의 접근성은 출력합니다.
- **`"none"`** — Edit 와 자식 컴포넌트에 대한 접근성을 모두 출력하지 않습니다.

**Remark**

- accessibilitydesclevel 속성값을 설정하지 않으면 "all" 로 적용됩니다.

- Button 과 같이 자식 컴포넌트가 없는 컴포넌트는 "all" 또는 "child" 로 설정 시 "self" 로 적용됩니다.

- Div 와 같은 컨테이너 컴포넌트는 "child" 설정 시 실제 컨텐츠의 접근성만을 출력합니다.

- accessibilitydesclevel 속성은 선택상자의 이동에 영향을 주지 않으므로 방향키로 선택상자가 Edit 에 이동되게 하지 않으려면 accessibilityenable 속성을 설정하여야 합니다.


---

### accessibilitydescription

> Components > Component > Edit > Property > accessibilitydescription

**Description**

Edit에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.accessibilitydescription[= strDescription]
```

**Setting Syntax**

```javascript
this.Edit00.accessibilitydescription = "Option";
```
- **`strDescription`** — accessibilitydescreadtype 속성값에 "description"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.


---

### accessibilityenable

> Components > Component > Edit > Property > accessibilityenable

**Description**

Edit 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.accessibilityenable[= bEnable]
```

**Setting Syntax**

```javascript
bEnable ::= 'true' | 'false'
```
```javascript
this.Edit00.accessibilityenable = false;
```
- **`true`** — Edit 에 선택상자가 이동되면 접근성 관련 속성값을 출력합니다.

방향키 또는 제스처로 선택상자 이동 시 Static 과 같이 포커스를 갖지 않는 컴포넌트에도 선택상자가 이동됩니다.
- **`false`** — Edit 에 선택상자가 이동되어도 접근성 관련 속성값을 출력하지 않습니다.

데스크탑 환경에서 방향키로 선택상자가 Edit 에 이동되지 않습니다.
모바일 환경에서 제스처로 선택상자가 Edit 에 이동되지 않습니다.

**Remark**

- accessibilityenable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 선택상자 이동 시 컴포넌트의 ARIA-LABEL + Value + Status + Role 순서로 정보가 조합되어 접근성으로 출력됩니다.
   각 정보의 조합순서는 스크린 리더의 종류에 따라 달라질 수 있습니다.
   > ARIA-LABEL : Environment 의 accessbilitydescreadtype 속성에 설정된 속성값이 반영됩니다.
   > Value : Edit 의 text 속성값이 반영됩니다. text 속성값이 없을 경우 "빈줄"로 반영됩니다.
   > Status : Edit 가 편집가능상태인지 여부가 반영됩니다.
   > Role : accessibilityrole 속성값이 반영됩니다. accessibilityrole 속성값을 설정하지 않으면 Edit 의 고유 Role 이 반영됩니다.
               센스리더는 Edit 의 고유 Role 로 "편집창"을 출력합니다.

- Edit 가 편집상태일 때 캐럿이동 또는 텍스트선택/삭제 시 캐럿위치의 텍스트를 접근성으로 출력합니다.
   캐럿 이동 및 텍스트 선택은 접근성과 무관하게 키액션으로 동작됩니다.

- Edit 에 입력된 텍스트가 없을 경우 접근성으로 "빈줄" 이라고 출력합니다.

- accessibilityenable 속성값이 false 일 때 데스크탑 환경에서 방향키 외의 방법으로 선택상자를 Edit 로 이동시키면 스크린 리딩 프로그램에서 임의의 값을 출력할 수 있습니다.


◆ 컨테이너 컴포넌트 선택상자 이동 제약

아래와 같은 환경에서 컨테이너 컴포넌트로 선택상자가 이동하지 않고 컨테이너 컴포넌트 내에 배치된 컴포넌트로 이동합니다.
- Android, iOS/iPadOS 운영체제에서 실행 시 (Div, PopupDiv, TabpageControl, View)
- Windows 운영체제에서 센스리더 가상커서 사용 시 (Div, PopupDiv, View)


---

### accessibilitylabel

> Components > Component > Edit > Property > accessibilitylabel

**Description**

Edit에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.accessibilitylabel[= strLabel]
```

**Setting Syntax**

```javascript
this.Edit00.accessibilitylabel = "OK Button"; 
this.Edit00.accessibilitylabel = "[@static00]"; 
this.Edit00.accessibilitylabel = "[@static00][@static01]"; 
this.Edit00.accessibilitylabel = "[@static00][@static01] OK Button";
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

> Components > Component > Edit > Property > accessibilityrole

**Description**

Edit에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.accessibilityrole[= enumRole]
```

**Setting Syntax**

```javascript
enumRole ::= 'none' | 'alert' | 'application' | 'button' | 'calendar' | 'chart' | 'checkbox' | 'columnheader' | 'combobox' | 'datepicker' | 'edit' | 'fileupload' | 'form' | 'frame' | 'grid' | 'gridcell' | 'groupbox' | 'heading' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6' | 'image' | 'link' | 'listbox' | 'menubar' | 'progressbar' | 'radio' | 'rowheader' | 'scrollbar' | 'spin' | 'static' | 'statusbar' | 'tab' | 'tabpage' | 'textarea' | 'titlebar' | 'toolbar' | 'tooltip' | 'treegrid' | 'treeitem' | 'webbrowser'
```
```javascript
this.Edit00.accessibilityrole = "none"; 
this.Edit00.accessibilityrole = "button";
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

- accessibilityenable 속성값을 설정하지 않으면 Edit의 기본 Role 로 적용됩니다.

- 추가적인 속성값이 필요한 Role 설정 시 Edit에 해당 속성이 없으면 스크린 리더에 따라 정상적으로 정보를 읽지 못할 수 있습니다.


---

### autoselect

> Components > Component > Edit > Property > autoselect

**Description**

Edit 의 편집영역이 활성화 될 때 텍스트를 전체선택 할지 설정하는 속성입니다.

**Syntax**

```javascript
Edit.autoselect[= bAutoselect]
```

**Setting Syntax**

```javascript
bAutoselect ::= 'true' | 'false'
```
```javascript
this.Edit00.autoselect = true;
```
- **`true`** — 편집영역이 활성화 될 때 텍스트가 전체선택 됩니다.
- **`false`** — 편집영역이 활성화 될 때 텍스트가 선택되지 않습니다.

**Remark**

- autoselect 속성값을 설정하지 않으면 false 로 적용됩니다.


◆ web runtime environment 제약

- 마우스 또는 터치에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 정상동작합니다.
  그러나 setFocus() 메소드에 의해 편집영역이 활성화 될 때는 텍스트 전체선택이 되지 않을 수 있습니다.


---

### autoskip

> Components > Component > Edit > Property > autoskip

**Description**

Edit 에 입력중인 문자열의 길이가 maxlength 속성값에 도달했을 때 포커스를 자동으로 이동시킬지 설정하는 속성입니다.

**Syntax**

```javascript
Edit.autoskip[= bAutoskip]
```

**Setting Syntax**

```javascript
bAutoskip ::= 'true' | 'false'
```
```javascript
this.Edit00.autoskip = true;
```
- **`true`** — 문자열 길이가 maxlength 속성값에 도달하면 포커스를 다음 컴포넌트로 이동시킵니다.

숫자/영문자 일 경우 마지막 문자가 입력 된 후 포커스가 이동됩니다.
다국어일 경우 마지막 문자가 확정된 후 다음 문자를 입력하면 포커스가 이동됩니다.
- **`false`** — 문자열 길이가 maxlength 속성값에 도달해도 포커스를 이동시키지 않습니다.

**Remark**

- autoskip 속성값을 설정하지 않으면 false 로 적용됩니다.


---

### background

> Components > Component > Edit > Property > background

**Description**

Edit 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
Edit.background[= strbackground]
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
this.Edit00.background = "#ffffaa";
this.Edit00.background = ""URL('./images/smiley.gif')" no-repeat center center #ffffaa";
this.Edit00.background = ""URL('./images/smiley.gif')" no-repeat center center /auto #ffffaa";
this.Edit00.background = ""URL('./images/smiley.gif')" no-repeat center center /15px 15% #ffffaa";
this.Edit00.background = "linear-gradient( red , blue , yellow )";
this.Edit00.background = "linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0))";
this.Edit00.background = ""URL('./images/smiley.gif')" border-box border-box #ffffaa";
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

"left" 설정 시 Edit 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 Edit 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 Edit 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 Edit 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 Edit 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 Edit 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
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

0 보다 작거나 100 보다 큰 값을 설정 시 Edit 의 영역을 벗어난 가상의 위치로 적용됩니다.

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
예를 들어 <angle> 값이 "to left" 이면 Edit 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 Edit 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

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

0 보다 작거나 100 보다 큰 값을 설정 시 Edit 의 영역을 벗어난 가상의 위치로 적용됩니다.
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
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 Edit 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

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

> Components > Component > Edit > Property > border-radius

**Description**

Edit 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
Edit.borderRadius[= strborderradius]
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
this.Edit00.borderRadius = "10px";
this.Edit00.borderRadius = "5px 6px 10px / 5px 10px";
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

> Components > Component > Edit > Property > bottom

**Description**

Edit 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
Edit.bottom[= nBottom]
```

**Setting Syntax**

```javascript
nBottom ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Edit00.bottom = 10; 
this.Edit00.bottom = "10px"; 
this.Edit00.bottom = "10%"; 
this.Edit00.bottom = "Button00:10px"; 
this.Edit00.bottom = "Button00:10%";
```
- **`<strCompID>`** — Edit 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Edit 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Edit 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — Edit 의 하단 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 bottom 속성값을 기준으로 Edit의 하단 위치 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 Edit의 하단 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Edit의 하단 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 Edit의 하단 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 top 속성값을 기준으로 Edit의 하단 위치 결정
- "%": <strCompID>의 height 속성값을 기준으로 Edit의 하단 위치 결정
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

> Components > Component > Edit > Property > box-shadow

**Description**

Edit 에 그림자 효과를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.boxShadow[= strbshadow]
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
this.Edit00.boxShadow  = "10px 10px 10px #888888";
this.Edit00.boxShadow  = "inset 10px 10px 10px 5px #888888";
```
- **`<inset>`** — 그림자 효과가 컴포넌트 안쪽에 표시됩니다.
생략 시에는 outset으로 동작합니다.
NRE는 지원하지 않습니다.
- **`<offset>`** — 그림자 효과가 표시되는 위치를 설정합니다.

Edit 의 좌상단 위치를 기준으로 그림자 효과가 표시될 위치를 가로/세로 픽셀값으로 설정합니다.
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

> Components > Component > Edit > Property > color

**Description**

Edit 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
Edit.color[= strcolor]
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
this.Edit00.color = "#999999";
this.Edit00.color = "rgb(255,0,0)";
this.Edit00.color = "red";
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

> Components > Component > Edit > Property > cssclass

**Description**

Edit 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다.

**Syntax**

```javascript
Edit.cssclass[= strcssclass]
```

**Setting Syntax**

```javascript
strcssclass ::= <ClassName> [ , &ltClassName> ]*
```
```javascript
this.Edit00.cssclass = "TestClass"; 
this.Edit00.cssclass = "TestClass,TestClass2";
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

> Components > Component > Edit > Property > cursor

**Description**

Edit 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.cursor[= strCursor]
```

**Setting Syntax**

```javascript
strCursor ::= 'none' | 'auto' | 'default' | 'copy' | 'crosshair' | 'help' | 'move' | 'not-allowed' | 'pointer' | 'progress' | 'text' | 'wait' | 'ew-resize' | 'e-resize' | 'w-resize' | 'ns-resize' | 'n-resize' | 's-resize' | 'nesw-resize' | 'ne-resize' | 'sw-resize' | 'nwse-resize' | 'nw-resize' | 'se-resize'
```
```javascript
* XCSS
cursor : default;

* Script ( normal property )
this.Edit00.cursor = "default";
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

> Components > Component > Edit > Property > displaynulltext

**Description**

Edit 의 value 속성값이 null 또는 undefined 일 때 Edit 에 표시될 대체 문자열을 설정하는 속성입니다.

**Syntax**

```javascript
Edit.displaynulltext[= strText]
```

**Setting Syntax**

```javascript
this.Edit00.displaynulltext = "no value";
```
- **`strText`** — value 속성값이 null 일 때 Edit 에 표시될 대체 문자열을 설정합니다.

**Remark**

- value 속성값이 null 또는 undefined 이고, Edit 에 포커스가 없을 때 대체 문자열이 표시됩니다.
   value 속성에 값이 있거나 빈문자열("Empty String")인 경우는 대체 문자열이 표시되지 않습니다.

- 최초 value 속성값이 null 일 때 편집창에 입력중인 값을 모두 지우면 value 속성은 null 값을 유지합니다.
   최초 value 속성값이 null 이 아닐 때 편집창에 입력된 값을 모두 지우면 value 속성은 빈문자열("Empty String")값을 갖습니다.

- value 속성값을 null 로 재설정 하려면 바인드 된 데이터 또는 value 속성값을 스크립트로 수정하여야 합니다.


---

### enable

> Components > Component > Edit > Property > enable

**Description**

Edit 의 사용가능 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.enable[= benable]
```

**Setting Syntax**

```javascript
benable ::= 'true' | 'false'
```
```javascript
this.Edit00.enable = true; 
this.Edit00.enable = false;
```
- **`true`** — Edit 을(를) 사용할 수 있게 설정합니다.
- **`false`** — Edit 을(를) 사용할 수 없게 설정합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "disabled" Status 가 적용됩니다.

**Remark**

- enable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enable 속성값이 false 이면 컴포넌트가 화면에 표시되지만 포커스나 입력을 받을 수 없습니다.

- Div 와 같은 컨테이너 컴포넌트의 enable 속성값을 false 로 설정하면 자식 컴포넌트도 모두 Disable 됩니다.


---

### enableevent

> Components > Component > Edit > Property > enableevent

**Description**

Edit 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.enableevent[= bEvent]
```

**Setting Syntax**

```javascript
bEvent ::= 'true' | 'false'
```
```javascript
this.Edit00.enableevent = true;  

this.Edit00.enableevent = false;
```
- **`true`** — Edit 에서 이벤트가 발생하도록 설정합니다.
- **`false`** — Edit 에서 이벤트가 발생하지 않도록 설정합니다.

**Remark**

- enableevent 속성을 false 로 설정하면 이벤트 발생으로 인한 처리속도 지연과 화면 깜빡임을 방지할 수 있습니다.


---

### flexgrow

> Components > Component > Edit > Property > flexgrow

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축) 여백을 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다.

**Syntax**

```javascript
Edit.flexgrow[= fVal]
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

> Components > Component > Edit > Property > flexshrink

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 영역이 컨테이너 영역을 초과하지 않도록 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다.

**Syntax**

```javascript
Edit.flexshrink[= fVal]
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

> Components > Component > Edit > Property > font

**Description**

Edit 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.font[= strfont]
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
this.Edit00.font = "bold 12pt/30px arial, sans-serif";
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

> Components > Component > Edit > Property > height

**Description**

Edit 을(를) 표시하기 위한 높이를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.height[= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Edit00.height = 10; 
this.Edit00.height = "10px"; 
this.Edit00.height = 10%"; 
this.Edit00.height = Button00:10%";
```
- **`<strCompID>`** — Edit 의 높이를 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Edit 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Edit 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 높이가 적용됩니다.
- **`<nVal>`** — Edit 의 높이를 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.


* <strCompID> 값을 생략했을 때 :
- "px": Edit의 높이 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 Edit의 높이 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Edit의 높이 결정
- "rem": MainFrame font-size 속성값을 기준으로 Edit의 높이 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID> 값은 무시되고 설정값이 Edit의 높이 결정
- "%": <strCompID>의 height 속성값을 기준으로 Edit의 높이 결정
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

### hotkey

> Components > Component > Edit > Property > hotkey

**Description**

Edit 의 기본 액션을 수행하기 위한 단축키를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.hotkey[= strHotkey]
```

**Setting Syntax**

```javascript
this.Edit00.hotkey = "G"; 
this.Edit00.hotkey = "CTRL+A"; 
this.Edit00.hotkey = "CTRL+ALT+X";
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

### id

> Components > Component > Edit > Property > id

**Description**

Edit의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.id
```

**Setting Syntax**

- **`id`** — Edit를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### imeaction

> Components > Component > Edit > Property > imeaction

**Description**

키보드에 하단 모서리에 표시되는 사용자 작업 버튼 UI와 동작을 설정하는 속성입니다.

**Syntax**

```javascript
Edit.imeaction[= enumImeaction]
```

**Setting Syntax**

```javascript
enumImeaction ::= 'none' | 'go' | 'search' | 'send' | 'next' | 'done' | 'previous'
```
```javascript
this.Edit00.imeaction = "none";
```
- **`"none"`** — 캐리지 리턴 버튼을 표시합니다.
- **`"go"`** — 이동 버튼을 표시합니다.
- **`"search"`** — 검색 버튼을 표시합니다.
- **`"send"`** — 보내기 버튼을 표시합니다.
- **`"next"`** — 다음 버튼을 표시합니다.
TAB 키 입력과 같은 동작을 처리합니다 (다음 컴포넌트로 포커스가 이동합니다).
- **`"done"`** — 완료 버튼을 표시합니다.
- **`"previous"`** — 이전 버튼을 표시합니다.
SHIFT + TAB 키 입력과 같은 동작을 처리합니다 (이전 컴포넌트로 포커스가 이동합니다).

**Remark**

- 속성값을 설정하지 않으면 "none" 으로 적용됩니다.
- 운영체제 또는 키보드 앱에서 지원하지 않는 경우 UI가 원하는 형식으로 변경되지 않을 수 있습니다.
  UI가 변경되지 않더라도 키 입력 시 발생하는 이벤트는 정상적으로 처리됩니다.
- "next", "previous"를 제외한 나머지 속성값은 버튼 UI만 변경합니다. 
  버튼 클릭 시 동작은 onimeaction 이벤트 핸들러 함수 내에서 처리해주어야 합니다.
- 키보드가 표시된 상태에서 속성값을 변경하면 현재 키보드 UI에는 반영되지 않습니다.
  키보드가 다시 표시될때 변경된 속성값이 반영됩니다.
- onkeydown > onkeyup > onimeaction 순으로 이벤트가 발생합니다.


---

### imemode

> Components > Component > Edit > Property > imemode

**Description**

Edit 의 기본 입력 언어를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.imemode[= enumImemode]
```

**Setting Syntax**

```javascript
enumImemode ::= 'none' | 'alpha' | 'alpha,full' | 'hangul' | 'hangul,full' | 'katakana' | 'katakana,full' | 'hiragana' | 'direct'
```
```javascript
this.Edit00.imemode = "none";
```
- **`"none"`** — 기본 입력 언어를 변경하지 않고 현재 시스템에 설정된 언어를 유지합니다.

imemode 속성값을 설정하지 않으면 기본으로 적용됩니다.
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

- imemode 속성값을 설정하지 않으면 "none" 으로 적용됩니다.

- 컴포넌트가 포커스를 받을 때 IME 가 재설정됩니다.

- 일부 환경에서만 지원하는 속성이므로 상단의 지원환경을 확인하시기 바랍니다.
   > Windows NRE, Android NRE에서만 지원하는 속성입니다.
   > macOS NRE, iOS/iPadOS NRE, WRE에서는 지원하지 않는 속성입니다.


---

### initvalueid

> Components > Component > Edit > Property > initvalueid

**Description**

Edit 에 적용될 InitValue 의 ID 를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.initvalueid[= strValueID]
```

**Setting Syntax**

- **`strValueID`** — InitValueDefinition 영역에 정의된 InitValue 파일에서 Edit 에 적용할 항목의 ID 를 문자열로 설정합니다.

**Remark**

- Edit 가 화면에 표시된 후에는 속성값을 설정하거나 변경 할 수 없습니다.
   Edit 를 동적으로 생성 시 show() 메소드 실행 전에 속성값을 설정하여야 합니다.

- Screen 별로 Environment 의 initvaluefileid 속성을 각각 설정하면 Screen 에 따라 다른 초기값을 설정할 수 있습니다.

- InitValueDefinition 영역에 한 개 이상의 InitValue 파일을 정의할 수 있고,
   InitValue 파일에는 컴포넌트별로 여러개의 초기값 정의를 할 수 있습니다.


---

### inputfilter

> Components > Component > Edit > Property > inputfilter

**Description**

Edit 에 입력을 제한 시킬 문자를 타입별로 설정하는 속성입니다.

**Syntax**

```javascript
Edit.inputfilter[= strInputfilter]
```

**Setting Syntax**

```javascript
strInputfilter ::= 'none' | <filter>

<filter> ::= <inputfilter> | <inputfilter> ',' <filter>
<inputfilter> ::= 'alpha' | 'digit' | 'comma' | 'dot' | 'sign' | 'space' | 'symbol'

* 각 타입값을 콤마(",")로 구분하여 중복 설정할 수 있습니다.
```
```javascript
this.Edit00.inputfilter = "dot";

this.Edit00.inputfilter = "dot,comma";

this.Edit00.inputfilter = "dot,comma,sign";
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

- inputfilter 속성값을 설정하지 않으면 "none"으로 적용됩니다.

- inputfilter 속성은 사용자가 직접 입력할 때만 적용됩니다.
  스크립트로 value 속성값을 설정할 때는 적용되지 않습니다.

- 일본어 입력 시 글자 조합이 완료된 후 inputfilter 속성값이 적용됩니다.


---

### inputmode

> Components > Component > Edit > Property > inputmode

**Description**

Edit 에 입력되는 영문자를 대문자 또는 소문자로 변환할지 설정하는 속성입니다.

**Syntax**

```javascript
Edit.inputmode[= enumInputmode]
```

**Setting Syntax**

```javascript
enumInputmode ::= 'normal' | 'upper' | 'lower'
```
```javascript
this.Edit00.inputmode = "normal";
```
- **`"normal"`** — 입력되는 영문자를 대/소문자로 변경하지 않습니다.
- **`"upper"`** — 입력되는 영문자를 모두 대문자로 변경합니다.
- **`"lower"`** — 입력되는 영문자를 모두 소문자로 변경합니다.

**Remark**

- inputmode 속성값을 설정하지 않으면 "normal" 로 적용됩니다.

- inputmode 속성값을 변경하면 value 속성값과 text 속성값이 변경될 수 있습니다.

- DataSet을 바인딩한 경우에는 바인딩한 DataSet의 데이타가 변경될 수 있습니다.


---

### inputtype

> Components > Component > Edit > Property > inputtype

**Description**

Edit 에 입력을 허용할 문자를 타입별로 설정하는 속성입니다.

**Syntax**

```javascript
Edit.inputtype[= strInputtype]
```

**Setting Syntax**

```javascript
strInputtype ::= 'normal' | <type>

<type> ::= <inputtype> | <inputtype> ',' <type>
<inputtype> ::= 'alpha' | 'english' | 'digit' | 'number' | 'numberandenglish' | 'comma' | 'dot' | 'sign' | 'space' | 'symbol' | 'half' | 'full'

* 각 타입값을 콤마(",")로 구분하여 중복 설정할 수 있습니다.
```
```javascript
this.Edit00.inputtype = "english";                       // 영문자만 입력허용
this.Edit00.inputtype = "english,number";            // 영문자와 숫자만 입력허용
this.Edit00.inputtype = "english,number,space";  // 영문자, 숫자, 공백만 입력허용
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

- inputtype 속성값을 설정하지 않으면 "normal" 로 적용됩니다.
  inputtype 속성값 설정 시 "normal"과 다른 값을 같이 설정한 경우에는 "normal" 값을 무시합니다.
  예를 들어 "normal,english"로 속성값을 설정하면 "english"로 적용됩니다.

- inputtype 속성은 사용자가 직접 입력할 때만 적용됩니다.
  스크립트로 value 속성값을 설정할 때는 적용되지 않습니다.

- 설정된 타입값에 해당하는 문자만 입력을 허용하며 설정되지 않은 타입값의 문자는 입력할 수 없습니다.

- inputtype 속성값에 "full" 값이 속해 있지 않으면 반각 문자만 입력할 수 있습니다.

- 입력을 제한하는 속성은 inputmode > inputfilter > inputtype 순으로 적용됩니다.


◆ Mobile 제약

- inputtype 속성을 "digit", "number", "tel", "dot" 과 같이 숫자만 입력이 가능하도록 설정하면,
   Android 에서는 tel 타입의 키패드가 기본으로 적용되고, iOS/iPadOS 에서는 number 타입의 키패드가 기본으로 적용됩니다.
   단 iOS/IPadOS 에서는 value 에 숫자가 아닌 문자가 저장되어 있으면 text 타입의 키패드가 기본으로 적용됩니다.

- inputtype 속성을 "numberandenglish", "english" 와 같이 문자입력이 가능하도록 설정하면
   Android, iOS/iPadOS 모두 text 타입의 키패드가 기본으로 적용됩니다.


◆ Chrome, Edge 제약

- inputtype 속성값이 "digit" 일 때 입력값을 영역선택한 상태에서 조합문자(한글 등)를 입력하면 선택영역이 해제되고 캐럿이 제일 마지막에 위치합니다.


---

### layoutorder

> Components > Component > Edit > Property > layoutorder

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 순서를 설정합니다.

**Syntax**

```javascript
Edit.layoutorder[= nVal]
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

> Components > Component > Edit > Property > left

**Description**

Edit 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
Edit.left[= nLeft]
```

**Setting Syntax**

```javascript
nLeft ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Edit00.left = 10; 
this.Edit00.left = "10px"; 
this.Edit00.left = "10%"; 
this.Edit00.left = "Button00:10px"; 
this.Edit00.left = "Button00:10%";
```
- **`<strCompID>`** — Edit 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Edit 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Edit 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — Edit 의 좌측 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 left 속성값을 기준으로 Edit의 좌측 위치 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 Edit의 좌측 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Edit의 좌측 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 Edit의 좌측 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 right 속성값을 기준으로 Edit의 좌측 위치 결정
- "%": <strCompID>의 width 속성값을 기준으로 Edit의 좌측 위치 결정
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

> Components > Component > Edit > Property > letter-spacing

**Description**

Edit 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다.

**Syntax**

```javascript
Edit.letterSpacing[= strspace]
```

**Setting Syntax**

```javascript
strspace ::= 'normal' | <nVal> ['px']
```
```javascript
* XCSS
letter-spacing : 2px ;

* Script ( normal property )
this.Edit00.letterSpacing = "2px";
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

> Components > Component > Edit > Property > maxheight

**Description**

Edit 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.maxheight[= nMaxHeight]
```

**Setting Syntax**

```javascript
nMaxHeight ::= <nVal> ['px']
```
```javascript
this.Edit00.maxheight = 20; 
this.Edit00.maxheight = "20px";
```
- **`<nVal>`** — Edit 이(가) 화면에 표시되는 높이의 최대값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- height 속성값이 maxheight 보다 크면 화면에 표시되는 Edit 의 높이는 maxheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- maxheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxheight 속성값을 minheight 속성값보다 작게 설정하면 minheight 속성값이 maxheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 Edit 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.


---

### maxlength

> Components > Component > Edit > Property > maxlength

**Description**

Edit 에 입력할 수 있는 문자열의 최대길이를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.maxlength[= nMaxlength]
```

**Setting Syntax**

```javascript
this.Edit00.maxlength = 10;
```
- **`nMaxlength`** — 입력할 수 있는 문자열의 최대길이를 숫자로 설정합니다.

0 설정 시 입력할 수 있는 최대길이를 제한하지 않습니다.

**Remark**

- maxlength 속성값을 설정하지 않으면 0 으로 설정됩니다.

- 영문, 숫자, 기호, 다국어 모두 한 문자가 1 로 계산됩니다.

- 문자열의 길이가 maxlength 속성값과 같아지면 입력이 제한됩니다.

- 스크립트로 value 값 설정 시 maxlength 속성은 적용되지 않습니다.


---

### maxwidth

> Components > Component > Edit > Property > maxwidth

**Description**

Edit 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.maxwidth[= nMaxWidth]
```

**Setting Syntax**

```javascript
nMaxWidth ::= <nVal> ['px']
```
```javascript
this.Edit00.maxwidth = 20; 
this.Edit00.maxwidth = "20px";
```
- **`<nVal>`** — Edit 이(가) 화면에 표시되는 너비의 최대값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- width 속성값이 maxwidth 보다 크면 화면에 표시되는 Edit 의 너비는 maxwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- maxwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxwidth 속성값을 minwidth 속성값보다 작게 설정하면 minwidth 속성값이 maxwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 Edit 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.


---

### minheight

> Components > Component > Edit > Property > minheight

**Description**

Edit 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.minheight[= nMinHeight]
```

**Setting Syntax**

```javascript
nMinHeight ::= <nVal> ['px']
```
```javascript
this.Edit00.minheight = 20; 
this.Edit00.minheight = "20px";
```
- **`<nVal>`** — Edit 이(가) 화면에 표시되는 높이의 최소값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- height 속성값이 minheight 보다 작다면 화면에 표시되는 Edit 의 높이는 minheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- minheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minheight 속성값을 maxheight 속성값보다 크게 설정하면 maxheight 속성값이 minheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 Edit 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.


---

### minwidth

> Components > Component > Edit > Property > minwidth

**Description**

Edit 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.minwidth[= nMinWidth]
```

**Setting Syntax**

```javascript
nMinWidth ::= <nVal> ['px']
```
```javascript
this.Edit00.minwidth = 20; 
this.Edit00.minwidth = "20px";
```
- **`<nVal>`** — Edit 이(가) 화면에 표시되는 너비의 최소값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- width 속성값이 minwidth 보다 작으면 화면에 표시되는 Edit 의 너비는 minwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- minwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minwidth 속성값을 maxwidth 속성값보다 크게 설정하면 maxwidth 속성값이 minwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 Edit 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.


---

### name

> Components > Component > Edit > Property > name

**Description**

Edit 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
Edit.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### opacity

> Components > Component > Edit > Property > opacity

**Description**

Edit 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.opacity[= stropacity]
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8;
opacity : 80%;

* Script ( normal property )
this.Edit00.opacity = "0.8";
this.Edit00.opacity = 0.8;
this.Edit00.opacity = "80%";
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

> Components > Component > Edit > Property > parent

**Description**

Edit 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Edit.parent
```

**Setting Syntax**

```javascript
var objParent = this.Edit00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- Edit 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### password

> Components > Component > Edit > Property > password

**Description**

Edit 에 표시되는 문자를 모두 특수문자로 대체할 지 설정하는 속성입니다.

**Syntax**

```javascript
Edit.password[= bPassword]
```

**Setting Syntax**

```javascript
bPassword ::= 'true' | 'false'
```
```javascript
this.Edit00.password = true;
```
- **`true`** — 입력하는 문자나 표시되는 문자 모두 특수문자( "*" 또는 "●" )로 대체합니다.
- **`false`** — 입력하는 문자나 표시하는 문자를 특수문자로 대체하지 않고 그대로 표시합니다.

**Remark**

- password 속성값을 설정하지 않으면 false 로 적용됩니다.

- 사용자가 직접 입력하는 경우 다국어 문자는 입력이 안되며 영문자를 포함한 ASCII 코드 내의 문자만 입력됩니다.
   텍스트를 붙여넣기 하거나 스크립트로 value 속성값을 설정하는 경우는 다국어 문자 입력이 가능합니다.


◆ Mobile 제약

- 모바일 환경에서 마지막 문자는 특수문자( "*" 또는 "●" )로 대체되지 않습니다.
   다음 문자가 입력되거나 포커스가 이동 될 때 마지막 문자가 특수문자( "*" 또는 "●" )로 대체됩니다.


---

### positionstep

> Components > Component > Edit > Property > positionstep

**Description**

부모 오브젝트가 화면분할기능을 사용할 때 Edit 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.positionstep[= nStep]
```

**Setting Syntax**

```javascript
this.Edit00.positionstep = 0; 
this.Edit00.positionstep = -1;
```
- **`nStep`** — Edit 이(가) 표시될 분할화면의 인덱스를 설정합니다.
"-1" 로 설정하면 모든 분할화면에 Edit 이(가) 표시됩니다.

분할화면의 인덱스는 "0" 부터 시작합니다.

**Remark**

- positionstep 에 설정된 인덱스값과 일치하는 분할화면에만 컴포넌트가 표시됩니다.

- 분할화면에 표시되지 않는 컴포넌트의 visible 속성값은 "false"로 변경되지 않습니다.


---

### readonly

> Components > Component > Edit > Property > readonly

**Description**

Edit 에서 편집을 허용할 지 설정하는 속성입니다.

**Syntax**

```javascript
Edit.readonly[= bReadOnly]
```

**Setting Syntax**

```javascript
bReadOnly ::= 'true' | 'false'
```
- **`true`** — Edit 의 편집을 불가능하게 설정합니다.
편집이 불가능하여도 편집영역의 선택 및 복사 기능은 사용 가능합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "readonly" Status 가 적용됩니다.
"readonly" Status 가 없는 하위 컨트롤은 "disabled" Status 가 적용됩니다.
- **`false`** — Edit 의 편집을 가능하게 설정합니다.

**Remark**

- readonly 속성값을 설정하지 않으면 false 로 적용됩니다.


◆ Android WRE 제약

- Android WRE 는 편집영역의 선택과 복사 기능에 대한 정확한 동작을 보장하지 않습니다.


---

### right

> Components > Component > Edit > Property > right

**Description**

Edit 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
Edit.right[= nRight]
```

**Setting Syntax**

```javascript
nRight ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Edit00.right = 10; 
this.Edit00.right = "10px"; 
this.Edit00.right = "10%"; 
this.Edit00.right = "Button00:10px"; 
this.Edit00.right = "Button00:10%";
```
- **`<strCompID>`** — Edit 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Edit 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Edit 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — Edit 의 우측 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 right 속성값을 기준으로 Edit의 우측 위치 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 Edit의 우측 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Edit의 우측 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 Edit의 우측 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 left 속성값을 기준으로 Edit의 우측 위치 결정
- "%": <strCompID>의 width 속성값을 기준으로 Edit의 우측 위치 결정
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

> Components > Component > Edit > Property > rtl

**Description**

Edit 에서 내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다.

**Syntax**

```javascript
Edit.rtl
```

**Setting Syntax**

```javascript
bRtl ::= undefined | 'true' | 'false'
```
```javascript
var vRtl = this.Edit00.rtl;
```
- **`undefined`** — undefined 설정 시 상위 컴포넌트의 rtl 속성값이 적용됩니다.

사용자가 rtl 속성값을 설정하지 않거나 삭제했을 경우 undefined 가 설정됩니다.
- **`true`** — Edit 의 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 오른쪽으로 설정합니다.
Edit 의 내부 좌표계의 기준을 오른쪽으로 설정합니다.
Edit 의 텍스트 표시 기준을 오른쪽으로 설정합니다.
수직스크롤바가 있을 경우 왼쪽에 표시됩니다.
- **`false`** — Edit 의 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 왼쪽으로 설정합니다.
Edit 의 내부 좌표계의 기준을 왼쪽으로 설정합니다.
Edit 의 텍스트 표시 기준을 왼쪽으로 설정합니다.
수직스크롤바가 있을 경우 오른쪽에 표시됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 아랍권 같이 화면의 표시기준이 오른쪽인 환경에서 컨텐츠의 표시 기준을 변경하기 위해 설정하는 속성입니다.

- Edit 부터 Environment 까지 상위의 모든 rtl 속성값이 undefined 이면
   Environment 의 locale 속성에 설정된 국가 및 언어 설정값을 기준으로 rtl 속성이 적용됩니다.
   Environment 의 locale 속성값을 설정하지 않았을 경우 시스템의 국가 및 언어 설정값이 적용됩니다.


---

### tablecellarea

> Components > Component > Edit > Property > tablecellarea

**Description**

Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다.

**Syntax**

```javascript
Edit.tablecellarea[= strArea]
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

> Components > Component > Edit > Property > taborder

**Description**

탭키 입력으로 컴포넌트간 포커스를 이동할 때 Edit 의 순서를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.taborder[= nTabOrder]
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

> Components > Component > Edit > Property > tabstop

**Description**

탭키 입력으로 컴포넌트간 포커스를 이동할 때 Edit 이(가) 포커스를 받을 지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.tabstop[= bTabStop]
```

**Setting Syntax**

```javascript
bTabStop ::= 'true' | 'false'
```
- **`"true"`** — Edit 이(가) 탭키 입력에 의한 포커스를 받습니다.
- **`"false"`** — Edit 이(가) 탭키 입력에 의한 포커스를 받지 않습니다.

**Remark**

- tabstop 속성값이 "false"인 경우 taborder 속성값과 관계없이 포커스가 해당 컴포넌트를 건너뜁니다.

- tabstop 속성값에 관계없이 마우스로 직접 포커스를 주거나, setfocus() 메소드 사용 시 포커스를 갖습니다.

- Div 와 같은 컨테이너 컴포넌트에서 포커스를 받을 수 있는 자식 컴포넌트가 존재하면 해당 컴포넌트가 포커스를 갖습니다.


---

### text

> Components > Component > Edit > Property > text

**Description**

Edit 에 표시되는 문자열을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Edit.text
```

**Remark**

- displaynulltext 속성값에 의해 화면에 보여지는 문자열은 text 속성에 저장되지 않습니다.


---

### tooltiptext

> Components > Component > Edit > Property > tooltiptext

**Description**

Edit 에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다.

**Syntax**

```javascript
Edit.tooltiptext[= strToolTipText]
```

**Setting Syntax**

```javascript
this.Edit00.tooltiptext = "This is ToolTip Text"; this.Edit00.tooltiptext = "";          // 풍선 도움말이 표시되지 않습니다. 

this.Edit00.tooltiptext = null;        // 상위 컴포넌트의 풍선 도움말이 표시됩니다.
```
- **`strToolTipText`** — 풍선도움말에 표시할 텍스트를 설정합니다.

빈문자열(EmptyString) 설정 시 풍선도움말이 표시되지 않습니다.
null 또는 undefined 설정 시 상위컴포넌트(Form, Div 등)의 풍선도움말이 표시됩니다.

**Remark**

- tooltiptext 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- 마우스 포인터가 Edit 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.

- 풍선도움말이 표시된 상태에서 tooltiptext 속성값을 변경하면 풍선도움말이 사라집니다.


◆ Desktop WRE 제약

- 풍선도움말은 브라우저의 기능을 활용하므로 브라우저 사양에 따라 스타일에 차이가 있을 수 있습니다.
   NRE는 Chrome 의 스타일과 동일하게 적용됩니다.


---

### tooltiptype

> Components > Component > Edit > Property > tooltiptype

**Description**

Edit 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다.

**Syntax**

```javascript
Edit.tooltiptype[= enumTooltipType]
```

**Setting Syntax**

```javascript
enumTooltipType ::= 'default' | 'hover' | 'inplace' | 'default,mouseleave' | 'hover,mouseleave' | 'inplace,mouseleave'
```
```javascript
this.Edit00.tooltiptype = "hover";
```
- **`"default"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 Edit 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"hover"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 Edit 영역내에 멈춰서 일정시간이 경과하면 풍선도움말이 사라집니다.
Edit 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경되거나 사라진 풍선도움말이 다시 표시됩니다.
- **`"inplace"`** — Edit 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 Edit 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"default,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 Edit 영역에 있으면 풍선도움말이 사라지지 않습니다.
- **`"hover,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 Edit 영역에 있으면 풍선도움말이 사라지지 않습니다.
Edit 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경됩니다.
- **`"inplace,mouseleave"`** — Edit 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 Edit 영역에 있으면 풍선도움말이 사라지지 않습니다.

**Remark**

- tooltiptype 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- 마우스 포인터가 Edit 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.

- 풍선도움말이 표시된 상태에서 tooltiptext 속성값을 변경하면 tooltiptype 속성값에 관계없이 풍선도움말이 사라집니다.

- 표시되었다가 사라진 풍선도움말은 마우스 포인터가 Edit 영역을 나갔다가 들어오면 다시 표시됩니다.

- 마우스 포인터가 Edit 영역에서 벗어나면 풍선도움말이 사라집니다.

- 풍선도움말의 크기는 풍선도움말에 표시되는 텍스트의 길이와 크기에 맞춰 자동으로 조정됩니다.

- 풍선도움말에 표시되는 텍스트의 글꼴과 크기는 변경하실 수 없습니다.


---

### top

> Components > Component > Edit > Property > top

**Description**

Edit 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
Edit.top[= nTop]
```

**Setting Syntax**

```javascript
nTop ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Edit00.top = 10; 
this.Edit00.top = "10px"; 
this.Edit00.top = "10%"; 
this.Edit00.top = "Button00:10px"; 
this.Edit00.top = "Button00:10%";
```
- **`<strCompID>`** — Edit 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Edit 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Edit 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — Edit의 상단 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 top 속성값을 기준으로 Edit의 상단 위치 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 Edit의 상단 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Edit의 상단 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 Edit의 상단 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 bottom 속성값을 기준으로 Edit의 상단 위치 결정
- "%": <strCompID>의 height 속성값을 기준으로 Edit의 상단 위치 결정
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

### usecontextmenu

> Components > Component > Edit > Property > usecontextmenu

**Description**

Edit 의 편집영역에서 오른쪽 마우스 클릭 시 기본팝업메뉴의 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.usecontextmenu[= bUseContextMenu]
```

**Setting Syntax**

```javascript
bUseContextMenu ::= 'true' | 'false'
```
```javascript
this.Edit00.usecontextmenu = true;
```
- **`true`** — 편집영역에서 오른쪽 마우스 클릭 시 기본팝업메뉴가 표시됩니다.
- **`false`** — 편집영역에서 오른쪽 마우스 클릭 시 기본팝업메뉴가 표시되지 않습니다.

**Remark**

- usecontextmenu 속성값을 설정하지 않으면 true 로 적용됩니다.

- Environment 의 usecontextmenu 속성값이 "none" 또는 "form" 인 경우 Edit 의 usecontextmenu 속성은 false 로 동작합니다.

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

### usesoftkeyboard

> Components > Component > Edit > Property > usesoftkeyboard

**Description**

Edit 가 포커스를 가질 때 키패드의 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.usesoftkeyboard[= bUseKeyboard]
```

**Setting Syntax**

```javascript
bUseKeyboard ::= true | false
```
```javascript
this.Edit00.usesoftkeyboard = false;
```
- **`true`** — Edit 가 포커스를 가질 때 키패드가 자동으로 표시됩니다.
- **`false`** — Edit 가 포커스를 가질 때 키패드가 표시되지 않습니다.

**Remark**

- usesoftkeyboard 속성값을 설정하지 않으면 true 로 적용됩니다.


◆ Windows NRE 제약

- Windows NRE 는 OS 가 Windows 10 이상이고, 연결된 키보드가 없을 때만 적용됩니다.


---

### value

> Components > Component > Edit > Property > value

**Description**

Edit 에 표시되는 문자열을 갖는 속성입니다.

**Syntax**

```javascript
Edit.value[= strValue]
```

**Setting Syntax**

```javascript
this.Edit00.value = "Hello";
```
- **`strValue`** — 화면에 표시될 문자열을 설정합니다.

**Remark**

- value 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- Edit 와 DataSet 을 바인딩하는 경우에 기본으로 연동되는 속성입니다.

- displaynulltext 속성값에 의해 화면에 보여지는 문자열은 value 속성에 저장되지 않습니다.

- value 속성이 Dataset 에 바인드 되어 있을 경우 datatyperule 속성값에 따라 value 속성의 타입 처리가 달라집니다.
   > datatyperule="1.0" 일 때 : 바인드된 Column 의 타입으로 value 속성의 타입이 변경됩니다.
   > datatyperule="2.0" 일 때 : value 속성은 string 타입으로 처리됩니다.

- value 속성이 Dataset 에 바인드 되어 있지 않을 경우 value 속성은 string 타입으로 처리됩니다.


---

### visible

> Components > Component > Edit > Property > visible

**Description**

Edit 이(가) 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
this.Edit00.visible = true; 
this.Edit00.visible = false;
```
- **`"true"`** — Edit 을(를) 화면에 표시합니다.
- **`"false"`** — Edit 을(를) 화면에 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하는 즉시 컴포넌트의 표시 여부가 화면에 반영됩니다.

- visible 속성값이 "false"이면 컴포넌트가 화면에 표시되지 않고, 포커스를 받을 수 없으므로 입력이나 사용이 불가능합니다.

- Div 와 같은 컨테이너 컴포넌트의 visible 속성값을 "false"로 설정하면 자식 컴포넌트도 함께 화면에 표시되지 않습니다.

- visible 속성값이 "false"이어도 컴포넌트는 존재하기 때문에 스크립트로 제어가 가능합니다.

- 넥사크로 스튜디오에서는 visible 속성값을 'false'로 설정해도 디자인화면에서 사라지지 않습니다.


---

### width

> Components > Component > Edit > Property > width

**Description**

Edit 을(를) 표시하기 위한 너비를 설정하는 속성입니다.

**Syntax**

```javascript
Edit.width[= nWidth]
```

**Setting Syntax**

```javascript
nWidth ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Edit00.width = 10; this.Edit00.width = "10px"; 
this.Edit00.width = "10%"; 
this.Edit00.width = "Button00:10%";
```
- **`<strCompID>`** — Edit 의 너비를 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Edit 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Edit 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 너비가 적용됩니다.
- **`<nVal>`** — Edit 의 너비를 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": Edit의 너비 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 Edit의 너비 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Edit의 너비 결정
- "rem": MainFrame font-size 속성값을 기준으로 Edit의 너비 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID> 값은 무시되고 설정값이 Edit의 너비 결정
- "%": <strCompID>의 width 속성값을 기준으로 Edit의 너비 결정
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

> Components > Component > Edit > Property > word-spacing

**Description**

Edit 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다.

**Syntax**

```javascript
Edit.wordSpacing[= strwordspacing]
```

**Setting Syntax**

```javascript
strWordSpacing ::= 'normal' | <nVal>'px'
```
```javascript
* XCSS
word-spacing : 30px;

* Script ( normal property )
this.Edit00.wordSpacing = "30px";
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

> Components > Component > Edit > Method > addEvent

**Description**

Edit 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**

```javascript
Edit.addEvent( strEventID )
```

**Parameters**

```
Edit 에 추가할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 추가에 성공하면 true 를 반환합니다.

이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- Edit 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.


---

### addEventHandler

> Components > Component > Edit > Method > addEventHandler

**Description**

Edit 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
Edit.addEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > Edit > Method > addEventHandlerLookup

**Description**

함수를 검색하여 Edit 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
Edit.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

> Components > Component > Edit > Method > bringToFront

**Description**

부모가 동일한 컴포넌트 중 Edit 이(가) 화면의 제일 앞에 표시되게 합니다.

**Syntax**

```javascript
Edit.bringToFront()
```

**Parameters**

this.Edit.bringToFront();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToFront() 메소드는 Edit 을(를) 가장 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 앞에 표시되게 됩니다.


---

### bringToPrev

> Components > Component > Edit > Method > bringToPrev

**Description**

부모가 동일한 컴포넌트 중 Edit 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**

```javascript
Edit.bringToPrev()
```

**Parameters**

this.Edit.bringToPrev();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToPrev() 메소드는 Edit 을(를) 한단계 나중에 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 앞에 표시되게 됩니다.


---

### clearEventHandler

> Components > Component > Edit > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
Edit.clearEventHandler( strEventID )
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

> Components > Component > Edit > Method > destroy

**Description**

스크립트에서 동적으로 생성한 Edit 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
Edit.destroy()
```

**Parameters**

var bSucc = this.Edit00.destroy();

**Return**

Edit 이(가) 정상적으로 삭제되면 true 를 반환합니다.

Edit 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 Edit 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Edit.initEdit.showForm.addChildForm.insertChildForm.removeChild


---

### findEventHandler

> Components > Component > Edit > Method > findEventHandler

**Description**

Edit 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
Edit.findEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > Edit > Method > getCaretPos

**Description**

Edit 에서 캐럿이 위치한 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
Edit.getCaretPos()
```

**Parameters**

var nCaretpos = this.Edit00.getCaretPos();

**Return**

캐럿이 위치한 인덱스를 반환합니다.
읽기 전용 상태이거나 Edit에 포커스가 없으면 "-1"을 반환합니다.

첫번째 위치의 인덱스는 "0" 입니다.

**Remark**

- Edit 에 포커스가 있고 캐럿이 표시되고 있어야 합니다.


---

### getEventHandler

> Components > Component > Edit > Method > getEventHandler

**Description**

Edit 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
Edit.getEventHandler( strEventID, nIdx )
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

> Components > Component > Edit > Method > getLength

**Description**

Edit 의 value 속성에 설정된 문자열의 길이를 반환하는 메소드입니다.

**Syntax**

```javascript
Edit.getLength()
```

**Parameters**

var nLength = this.Edit00.getLength();

**Return**

영문, 숫자, 기호, 다국어 등 문자 종류에 관계없이 문자 하나를 "1"로 계산하여 문자열의 길이를 반환합니다.


---

### getOffsetBottom

> Components > Component > Edit > Method > getOffsetBottom

**Description**

부모 컴포넌트의 Top 위치를 기준으로 Edit 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Edit.getOffsetBottom();
```

**Parameters**

var nBottom = this.Edit.getOffsetBottom();

**Return**

부모 컴포넌트의 Top 위치를 기준으로 Edit 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 Edit 의 bottom 값을 동적으로 계산합니다.


---

### getOffsetHeight

> Components > Component > Edit > Method > getOffsetHeight

**Description**

Edit 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Edit.getOffsetHeight();
```

**Parameters**

var nHeight = this.Edit.getOffsetHeight();

**Return**

Edit 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 Edit 의 높이를 동적으로 계산합니다.


---

### getOffsetLeft

> Components > Component > Edit > Method > getOffsetLeft

**Description**

부모 컴포넌트의 Left 위치를 기준으로 Edit 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Edit.getOffsetLeft();
```

**Parameters**

var nleft = this.Edit.getOffsetLeft();

**Return**

부모 컴포넌트의 Left 위치를 기준으로 Edit 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 Edit 의 left 값을 동적으로 계산합니다.


---

### getOffsetRight

> Components > Component > Edit > Method > getOffsetRight

**Description**

부모 컴포넌트의 Left 위치를 기준으로 Edit 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Edit.getOffsetRight();
```

**Parameters**

var nRight = this.Edit.getOffsetRight();

**Return**

부모 컴포넌트의 Left 위치를 기준으로 Edit 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 Edit 의 right 값을 동적으로 계산합니다.


---

### getOffsetTop

> Components > Component > Edit > Method > getOffsetTop

**Description**

부모 컴포넌트의 Top 위치를 기준으로 Edit 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Edit.getOffsetTop();
```

**Parameters**

var nTop = this.Edit.getOffsetTop();

**Return**

부모 컴포넌트의 Top 위치를 기준으로 Edit 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 Edit 의 top 값을 동적으로 계산합니다.


---

### getOffsetWidth

> Components > Component > Edit > Method > getOffsetWidth

**Description**

Edit 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Edit.getOffsetWidth();
```

**Parameters**

var nWidth = this.Edit.getOffsetWidth();

**Return**

Edit 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 Edit 의 너비를 동적으로 계산합니다.


---

### getPixelBottom

> Components > Component > Edit > Method > getPixelBottom

**Description**

Edit 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Edit.getPixelBottom();
```

**Parameters**

var nbottom = this.Edit.getPixelBottom();

**Return**

Edit 의 bottom 속성값을 픽셀단위로 반환합니다.

bottom 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- bottom 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelHeight

> Components > Component > Edit > Method > getPixelHeight

**Description**

Edit 의 height 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Edit.getPixelHeight();
```

**Parameters**

var nheight = this.Edit.getPixelHeight();

**Return**

Edit 의 height 속성값을 픽셀단위로 반환합니다.

height 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- height 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelLeft

> Components > Component > Edit > Method > getPixelLeft

**Description**

Edit 의 left 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Edit.getPixelLeft();
```

**Parameters**

var nleft = this.Edit.getPixelLeft();

**Return**

Edit 의 left 속성값을 픽셀단위로 반환합니다.

left 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- left 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelRight

> Components > Component > Edit > Method > getPixelRight

**Description**

Edit 의 right 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Edit.getPixelRight();
```

**Parameters**

var nright = this.Edit.getPixelRight();

**Return**

Edit 의 right 속성값을 픽셀단위로 반환합니다.

right 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- right 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelTop

> Components > Component > Edit > Method > getPixelTop

**Description**

Edit 의 top 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Edit.getPixelTop();
```

**Parameters**

var ntop = this.Edit.getPixelTop();

**Return**

Edit 의 top 속성값을 픽셀단위로 반환합니다.

top 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- top 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelWidth

> Components > Component > Edit > Method > getPixelWidth

**Description**

Edit 의 width 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Edit.getPixelWidth();
```

**Parameters**

var nwidth = this.Edit.getPixelWidth();

**Return**

Edit 의 width 속성값을 픽셀단위로 반환합니다.

width 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- width 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getSelect

> Components > Component > Edit > Method > getSelect

**Description**

Edit 컴포넌트의 텍스트 편집 영역에서 선택한 텍스트의 시작 인덱스와 끝 인덱스를 배열 형태로 반환하는 메서드입니다.

**Syntax**

```javascript
Edit.getSelect()
```

**Parameters**

var vArrSelect = this.Edit00.getSelect();

**Return**

- 선택한 텍스트의 시작 인덱스와 끝 인덱스를 배열로 반환합니다.
- 선택한 텍스트가 없는 경우 현재 캐럿 위치의 인덱스 값을 배열 형태로 반환합니다.
  예를 들어, 캐럿 위치의 인덱스 값이 1인 경우 [1, 1]을 반환합니다.
- 텍스트 편집 영역의 상태를 확인할 수 없는 경우 [0, 0]을 반환합니다.

**Remark**

- Edit 컴포넌트의 텍스트 편집 영역에 포커스가 있고 캐럿이 표시된 상태에서만 정상적으로 값을 반환합니다.

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

> Components > Component > Edit > Method > getSelectedText

**Description**

Edit 컴포넌트의 텍스트 편집 영역에서 선택한 텍스트를 반환하는 메서드입니다.

**Syntax**

```javascript
Edit.getSelectedText()
```

**Parameters**

var strText = this.Edit00.getSelectedText();

**Return**

- 편집영역에서 선택한 텍스트를 반환합니다.
- 선택된 텍스트가 없을 경우 빈값을 반환합니다.
- 텍스트 편집 영역의 상태를 확인할 수 없는 경우 빈값을 반환합니다.

**Remark**

- Edit 컴포넌트의 텍스트 편집 영역에 포커스가 있고 캐럿이 표시된 상태에서만 정상적으로 값을 반환합니다.

- 화면에 표시되고 선택할 수 있는 문자(예: 마스크 문자, 공백 문자, 숫자 기호)를 포함합니다.
  
- 컴포넌트의 속성에 따라 선택한 텍스트 영역을 처리할 수 없는 경우 메서드 실행 시 빈값을 반환합니다.
  - 텍스트 편집 영역이 비활성화된 경우
    Calendar 컴포넌트의 type 속성값이 "monthonly"인 경우
    Calendar 컴포넌트의 popuptype 속성값이 "normal" 또는 "system"이고 모바일 환경에서 실행한 경우
    Spin 컴포넌트의 type 속성값이 "spinonly"인 경우
  - 웹 표준 스펙에서 지원하지 않는 경우
    WRE 환경에서 TextField 컴포넌트의 inputtype 속성값이 "email" 또는 "number"인 경우


---

### init

> Components > Component > Edit > Method > init

**Description**

스크립트로 Edit 을(를) 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**

```javascript
Edit.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

**Parameters**

```
Edit 의 ID를 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- 인수값에 기준 컴포넌트를 포함하면 Edit 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 Edit 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 Edit 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

- 스크립트에서 동적으로 컴포넌트를 생성한 후에만 사용할 수 있습니다.
  동적으로 생성한 컴포넌트가 아닌 경우에는 오동작이 발생할수 있습니다.

- show() 메소드로 컴포넌트가 화면에 표시되면 초기화가 끝난 상태입니다.
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다.

- 동적으로 생성한 컴포넌트를 컨테이너 컴포넌트에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**

Edit.destroyEdit.showForm.addChildForm.insertChildForm.removeChild


---

### insertEventHandler

> Components > Component > Edit > Method > insertEventHandler

**Description**

Edit 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
Edit.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

> Components > Component > Edit > Method > move

**Description**

Edit 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
Edit.move( vLeft, vTop [, vWidth, vHeight [, vRight, vBottom]] )
```

**Parameters**

```
Edit 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* 값에 기준 컴포넌트를 포함하여 설정했을 때 :
pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 Edit 의 left 가 결정됩니다.
비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Edit 의 left 가 결정됩니다.
```

**Return**

없음

**Remark**

- 인수값에 기준 컴포넌트를 포함하면 Edit 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 Edit 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 Edit 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.


---

### moveToNext

> Components > Component > Edit > Method > moveToNext

**Description**

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Edit 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**

```javascript
Edit.moveToNext( objComp )
Edit.moveToNext( strComp )
```

**Parameters**

```
기준이 되는 컴포넌트를 오브젝트로 설정합니다.
```

**Return**

없음

**Remark**

- 인수로 전달되는 기준 컴포넌트와 Edit 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToNext() 메소드는 기준 컴포넌트보다 Edit 이(가) 한단계 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 뒤에 표시되게 됩니다.


---

### moveToPrev

> Components > Component > Edit > Method > moveToPrev

**Description**

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Edit 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**

```javascript
Edit.moveToPrev( objComp )
Edit.moveToPrev( strComp )
```

**Parameters**

```
기준이 되는 컴포넌트를 오브젝트로 설정합니다.
```

**Return**

없음

**Remark**

- 인수로 전달되는 기준 컴포넌트와 Edit 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToPrev() 메소드는 기준 컴포넌트보다 Edit 이(가) 한단계 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 앞에 표시되게 됩니다.


---

### removeEvent

> Components > Component > Edit > Method > removeEvent

**Description**

Edit 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**

```javascript
Edit.removeEvent( strEventID )
```

**Parameters**

```
Edit 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 삭제에 성공하면 true 를 반환합니다.

이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- Edit 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- Edit 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.


---

### removeEventHandler

> Components > Component > Edit > Method > removeEventHandler

**Description**

Edit 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
Edit.removeEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > Edit > Method > removeEventHandlerLookup

**Description**

Edit 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
Edit.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

> Components > Component > Edit > Method > resize

**Description**

Edit 의 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
Edit.resize( vWidth, vHeight )
```

**Parameters**

```
Edit 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.
음수값을 설정할 수 없습니다.

* 값에 기준 컴포넌트를 포함하여 설정했을 때 :
pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Edit 의 width 가 결정됩니다.
비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Edit 의 width 가 결정됩니다.
```

**Return**

없음

**Remark**

- Edit 의 left 속성값이 null 이 아니면 resize() 메소드 실행 후 Edit 의 우측 위치가 변경됩니다.
  또한, 메소드 실행 후 right 속성값은 null 이 됩니다.

- Edit 의 left 속성값이 null 이면 resize() 메소드 실행 후 Edit 의 좌측 위치가 변경됩니다.
  또한, 메소드 실행 후 left 속성값은 null 로 유지됩니다.

- Edit 의 top 속성값이 null 이 아니면 resize() 메소드 실행 후 Edit 의 하단 위치가 변경됩니다.
  또한, 메소드 실행 후 bottom 속성값은 null 이 됩니다.

- Edit 의 top 속성값이 null 이면 resize() 메소드 실행 후 Edit 의 상단 위치가 변경됩니다.
  또한, 메소드 실행 후 top 속성값은 null 로 유지됩니다.

- 인수값에 기준 컴포넌트를 포함하면 Edit 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vWidth, vHeight 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 Edit 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 Edit 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.


---

### sendToBack

> Components > Component > Edit > Method > sendToBack

**Description**

부모가 동일한 컴포넌트 중 Edit 이(가) 화면의 제일 뒤에 표시되게 합니다.

**Syntax**

```javascript
Edit.sendToBack()
```

**Parameters**

this.Edit.sendToBack();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToBack() 메소드는 Edit 을(를) 가장 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 뒤에 표시되게 됩니다


---

### sendToNext

> Components > Component > Edit > Method > sendToNext

**Description**

부모가 동일한 컴포넌트 중 Edit 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**

```javascript
Edit.sendToNext()
```

**Parameters**

this.Edit.sendToNext();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToNext() 메소드는 Edit 을(를) 한단계 먼저 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 뒤에 표시되게 됩니다.


---

### setCaretPos

> Components > Component > Edit > Method > setCaretPos

**Description**

Edit 에서 캐럿의 위치를 인덱스로 설정하는 메소드입니다.

**Syntax**

```javascript
Edit.setCaretPos( [nIndex] )
```

**Parameters**

```
캐럿이 위치할 인덱스를 숫자로 설정합니다.
인덱스는 0 부터 시작하며 "0 ~ 텍스트길이"까지 설정할 수 있습니다.
"-1"을 설정할 경우 캐럿이 텍스트의 오른쪽 끝에 위치합니다.
```

**Return**

캐럿 설정에 성공하면 "true"를 반환합니다.
캐럿 설정에 실패하면 "false"를 반환합니다.

**Remark**

- nIndex 값을 생략할 경우 "0"으로 적용됩니다.

- Edit 에 포커스가 있고 캐럿이 표시되고 있어야 합니다.

◆ NRE 제약 (Windows, macOS, Android)
- 문자열 입력 시 입력 확정 처리가 필요한 문자를 사용하는 경우 미확정 상태에서 setCaretPos 메소드는 동작하지 않습니다.


---

### setEventHandler

> Components > Component > Edit > Method > setEventHandler

**Description**

Edit 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
Edit.setEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > Edit > Method > setEventHandlerLookup

**Description**

Edit 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
Edit.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

> Components > Component > Edit > Method > setFocus

**Description**

Edit 에 포커스를 설정하는 메서드입니다.

**Syntax**

```javascript
Edit.setFocus( [bMoveScroll] )
```

**Parameters**

```
부모 컴포넌트에 스크롤이 있을 경우, Edit 기준으로 스크롤을 이동할지 여부를 설정합니다.

true: Edit 이(가) 화면에 표시되도록 스크롤을 이동합니다.
false: Edit 위치와 관계없이 스크롤을 이동하지 않습니다.

값을 지정하지 않으면 기본값은 true입니다.
```

**Return**

Edit 이(가) 포커스를 얻기 전에 포커스를 가지고 있던 컴포넌트를 반환합니다.
이전에 포커스를 가진 컴포넌트가 없거나 메소드 실행에 실패한 경우에는 null을 반환합니다.

**Remark**

- enableaccessibility 속성값과 관계없이 전달된 파라미터값을 기준으로 동작합니다.


---

### setOffsetBottom

> Components > Component > Edit > Method > setOffsetBottom

**Description**

부모 컴포넌트의 Top 위치를 기준으로 Edit 의 bottom 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Edit.setOffsetBottom( nBottom );
```

**Parameters**

```
부모 컴포넌트의 Top 위치를 기준으로 Edit 의 bottom 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 Edit 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Edit 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Edit 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Edit 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.


---

### setOffsetHeight

> Components > Component > Edit > Method > setOffsetHeight

**Description**

Edit 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Edit.setOffsetHeight( nHeight );
```

**Parameters**

```
Edit 의 높이를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 Edit 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Edit 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Edit 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Edit 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.


---

### setOffsetLeft

> Components > Component > Edit > Method > setOffsetLeft

**Description**

부모 컴포넌트의 Left 위치를 기준으로 Edit 의 left 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Edit.setOffsetLeft( nLeft );
```

**Parameters**

```
부모 컴포넌트의 Left 위치를 기준으로 Edit 의 left 값을 픽셀단위의 숫자로 설정합니다
```

**Return**

없음

**Remark**

- 메소드 실행 전 Edit 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Edit 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Edit 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, right 속성이 설정됩니다.
   > Edit 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.


---

### setOffsetRight

> Components > Component > Edit > Method > setOffsetRight

**Description**

부모 컴포넌트의 Left 위치를 기준으로 Edit 의 right 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Edit.setOffsetRight( nRight );
```

**Parameters**

```
부모 컴포넌트의 Left 위치를 기준으로 Edit 의 right 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 Edit 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Edit 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Edit 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Edit 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.


---

### setOffsetTop

> Components > Component > Edit > Method > setOffsetTop

**Description**

부모 컴포넌트의 Top 위치를 기준으로 Edit 의 top 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Edit.setOffsetTop( nTop );
```

**Parameters**

```
부모 컴포넌트의 Top 위치를 기준으로 Edit 의 top 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 Edit 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Edit 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Edit 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, bottom 속성이 설정됩니다.
   > Edit 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.


---

### setOffsetWidth

> Components > Component > Edit > Method > setOffsetWidth

**Description**

Edit 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Edit.setOffsetWidth( nWidth );
```

**Parameters**

```
Edit 의 너비를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 Edit 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Edit 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Edit 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Edit 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.


---

### setSelect

> Components > Component > Edit > Method > setSelect

**Description**

Edit 에 포커스가 있을 때 인수로 지정된 영역을 선택하는 메소드입니다.

**Syntax**

```javascript
Edit.setSelect( [nBegin [,nEnd]] )
```

**Parameters**

```
선택할 영역의 시작 인덱스를 숫자로 설정합니다.

인덱스는 0 부터 시작하며 "0 ~ 텍스트길이" 까지 설정할 수 있습니다.
-1 을 설정하면 선택할 영역의 시작 위치가 오른쪽 끝으로 설정됩니다.

값 생략 시 0 으로 적용됩니다.
```

**Return**

지정된 영역의 선택에 성공하면 true 를 반환합니다.

지정된 영역의 선택에 실패하면 false 를 반환합니다.

**Remark**

- setSelect() 메소드 실행 전에 편집영역이 포커스 되어 있어야 합니다.

- nBegin 값이 nEnd 값 보다 클 경우 오른쪽부터 영역이 선택되고, 캐럿은 선택된 영역의 오른쪽에 위치합니다.


◆ Mobile WRE 제약

- Mobile WRE 는 nBegin, nEnd 값에 따라 정상적으로 선택이 되지 않을 수 있습니다.


---

### setSelectedText

> Components > Component > Edit > Method > setSelectedText

**Description**

Edit 에서 현재 선택되어 있는 텍스트를 전달된 인수값으로 변경하는 메소드입니다.

**Syntax**

```javascript
Edit.setSelectedText( strText )
```

**Parameters**

```
Edit 에 선택되어 있는 텍스트를 대체할 문자열을 설정합니다.
```

**Return**

Edit 에 선택되어 있던 텍스트를 문자열로 반환합니다.

**Remark**

- Edit 에 선택된 텍스트가 없으면 setSelectedText() 메소드는 동작하지 않습니다.

- inputtype 속성에서 허용한 문자 이외의 문자가 strText 에 있다면 setSelectedText() 메소드는 동작하지 않습니다.


---

### show

> Components > Component > Edit > Method > show

**Description**

스크립트로 동적 생성한 Edit 을(를) 화면에 표시하는 메소드입니다.

**Syntax**

```javascript
Edit.show()
```

**Parameters**

this.Edit00.show();

**Return**

없음

**Remark**

- show() 메소드는 컴포넌트가 폼 또는 컨테이너 컴포넌트의 자식 컴포넌트로 등록된 상태에서 사용이 가능합니다.
  자식 컴포넌트로 등록된 상태가 아닌 경우에는 오동작이 발생할 수 있습니다.

- 컴포넌트를 컨테이너에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**

Edit.destroyEdit.initForm.addChildForm.insertChildForm.removeChild


---

### updateToDataset

> Components > Component > Edit > Method > updateToDataset

**Description**

Edit 의 value 속성값을 바인딩 되어 있는 DataSet 에 즉시 반영시키는 메소드입니다.

**Syntax**

```javascript
Edit.updateToDataset()
```

**Parameters**

var bSucc = this.Edit00.updateToDataset();

**Return**

반영에 성공하면 "true"를 반환합니다.

반영에 실패하면 "false"를 반환합니다.

**Remark**

- Edit 의 value 속성이 DataSet 에 바인딩 되어 있어야 합니다.

- Edit 의 value 속성값이 바인딩 되어있는 Dataset 의 값과 같으면 Dataset 에 값이 반영되지 않고 "false"를 반환합니다.


---

### 이벤트 (Events)

### canchange

> Components > Component > Edit > Event > canchange

**Description**

Edit 에서 value 속성값이 변경될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
canchange(obj:nexacro.Edit,e:nexacro.ChangeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값을 "true"로 반환하면 value 속성값을 변경합니다.
이벤트에서 리턴값을 "false"로 반환하면 value 속성값이 변경되지 않고, 화면에 표시되는 텍스트도 원복됩니다.

이벤트에서 리턴값을 생략하면 "true"로 적용됩니다.

**Remark**

- 스크립트로 value 속성값을 변경할 때는 canchange 이벤트가 발생하지 않습니다.

- Edit 에서 문자를 입력/삭제 후 엔터키를 입력하거나 포커스를 이동하면 value 속성값이 변경됩니다.


---

### onchanged

> Components > Component > Edit > Event > onchanged

**Description**

Edit 에서 value 속성값이 변경된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
onchanged(obj:nexacro.Edit,e:nexacro.ChangeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- canchange 이벤트에서 "false"를 반환하면 onchanged 이벤트는 발생하지 않습니다.

- Edit 에서 문자를 입력/삭제 후 엔터키를 입력하거나 포커스를 이동하면 value 속성값이 변경됩니다.


---

### oncontextmenu

> Components > Component > Edit > Event > oncontextmenu

**Description**

Edit 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다.

**Syntax**

```javascript
oncontextmenu(obj:nexacro.Edit,e:nexacro.ContextMenuEventInfo);
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

> Components > Component > Edit > Event > ondevicebuttonup

**Description**

모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondevicebuttonup(obj:nexacro.Edit,e:nexacro.DeviceButtonEventInfo);
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

> Components > Component > Edit > Event > ondrag

**Description**

Edit 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondrag(obj:nexacro.Edit,e:nexacro.DragEventInfo);
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

- Edit 영역 내에서 마우스의 LButtonDown 후 LButtonUp 액션 없이 마우스 이동 시 ondrag 이벤트가 발생합니다.

- 이벤트의 리턴값을 true 로 하여 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등

- 에디트 계열 컴포넌트에서 마우스로 드래그 시 화면의 문자열을 선택할 지 드래그 상태를 발생시킬지 여부는 이벤트의 리턴값으로 결정됩니다.


---

### ondragenter

> Components > Component > Edit > Event > ondragenter

**Description**

Edit 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragenter(obj:nexacro.Edit,e:nexacro.DragEventInfo);
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

- 드래그 상태를 유지하고 있으면 Edit 영역으로 마우스 포인터가 들어올 때마다 이벤트가 발생합니다.


---

### ondragleave

> Components > Component > Edit > Event > ondragleave

**Description**

Edit 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragleave(obj:nexacro.Edit,e:nexacro.DragEventInfo);
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

- 드래그 상태를 유지하고 있으면 Edit 영역에서 마우스 포인터가 나갈 때마다 이벤트가 발생합니다.


---

### ondragmove

> Components > Component > Edit > Event > ondragmove

**Description**

Edit 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragmove(obj:nexacro.Edit,e:nexacro.DragEventInfo);
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

- 드래그 상태를 유지하고 있으면 Edit 영역 내에서 마우스 포인터가 움직일 때마다 이벤트가 발생합니다.


---

### ondrop

> Components > Component > Edit > Event > ondrop

**Description**

Edit 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondrop(obj:nexacro.Edit,e:nexacro.DragEventInfo);
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

- Edit 영역 내에서 드래그 상태인 마우스의 LButtonUp 액션 발생 시 ondrop 이벤트가 발생합니다.

- 넥사크로에서 발생한 드래그 또는 어플리케이션 외부에서 파일을 드래그 했을 때 ondrop 이벤트를 발생시킬 수 있습니다.

- 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등


---

### oneditclick

> Components > Component > Edit > Event > oneditclick

**Description**

Edit 컴포넌트의 텍스트 편집 영역에서 마우스 왼쪽 버튼을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
oneditclick(obj:nexacro.Edit,e:nexacro.EditClickEventInfo);
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

### onimeaction

> Components > Component > Edit > Event > onimeaction

**Description**

사용자 작업 버튼 또는 ENTER 키 입력 시 발생하는 이벤트입니다.

**Syntax**

```javascript
onimeaction(obj:nexacro.Edit,e:nexacro.KeyEventInfo);
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

imeaction 속성값이 "next"인 경우 TAB 키 입력과 같은 동작을 처리합니다.
imeaction 속성값이 "previous"인 경우에는 SHIFT+TAB 키 입력과 같은 동작을 처리합니다.


---

### oninput

> Components > Component > Edit > Event > oninput

**Description**

Edit 에서 입력을 시도할 때 발생하는 이벤트 입니다.

**Syntax**

```javascript
oninput(obj:nexacro.Edit,e:nexacro.InputEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 조합문자 입력시 oninput 이벤트가 한번 이상 발생할 수 있습니다.

- 일본어 IME 로 일본어 입력(조합중이고 확정이 안된 상태)중이면 붙여넣기 기능이 동작하지 않습니다.


◆ web runtime environment 제약

- 동일한 입력에 대해 브라우저의 특성에 따라 oninput 이벤트 발생횟수가 다를 수 있습니다.

- 조합문자 입력확정 동작에서 oninput 이벤트가 발생하지 않는 브라우저가 있을 수 있습니다.
   조합문자 입력확정 동작은 입력시도로 볼 수 없기 때문에 oninput 이벤트의 발생을 보장하지 않습니다.


---

### onkeydown

> Components > Component > Edit > Event > onkeydown

**Description**

Edit 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkeydown(obj:nexacro.Edit,e:nexacro.KeyEventInfo);
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

- 좌우방향키 입력 시 이벤트 발생 후 캐럿의 위치가 이동됩니다.

- Shift + 좌우방향키 입력 시 이벤트 발생 후 텍스트가 선택 처리됩니다.

- 엔터키 입력 시 이벤트 발생 후 value 속성에 입력값이 반영됩니다.
  value 속성이 바인드되어 있다면 DataSet 에도 입력값이 반영됩니다.

- 삭제/백스페이스키 입력 시 이벤트 발생 후 문자가 삭제됩니다.

- 일본어 입력 중 스페이키가 입력되면 이벤트 발생 후 일본어 한자 변환이 됩니다.

- 일반 문자 입력 시 이벤트 발생 후 해당 문자가 입력됩니다.


---

### onkeyup

> Components > Component > Edit > Event > onkeyup

**Description**

Edit 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkeyup(obj:nexacro.Edit,e:nexacro.KeyEventInfo);
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

> Components > Component > Edit > Event > onkillfocus

**Description**

Edit 에서 포커스가 나갈  때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkillfocus(obj:nexacro.Edit,e:nexacro.KillFocusEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 서로 다른 애플리케이션 단위로 포커스가 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showModal(), open() 등의 메소드로 팝업된 Frame 으로 포커스가 이동하는 경우 Edit 에서 포커스 관련 이벤트가 발생하지 않습니다.
   또한, alert(), confirm() 메소드로 표시된 팝업으로 포커스가 이동하는 경우도 Edit 에서 포커스 관련 이벤트가 발생하지 않습니다.


---

### onlbuttondown

> Components > Component > Edit > Event > onlbuttondown

**Description**

Edit 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onlbuttondown(obj:nexacro.Edit,e:nexacro.MouseEventInfo);
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

- Edit 영역 내에서 마우스의 LButtonDown 액션이 발생하면 이벤트가 발생합니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

**Basic Action**

* pseudo 표시

**Default Action**

* 컴포넌트 포커스 처리
* 캐럿 표시


---

### onlbuttonup

> Components > Component > Edit > Event > onlbuttonup

**Description**

Edit 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onlbuttonup(obj:nexacro.Edit,e:nexacro.MouseEventInfo);
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

> Components > Component > Edit > Event > onmouseenter

**Description**

Edit 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmouseenter(obj:nexacro.Edit,e:nexacro.MouseEventInfo);
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

> Components > Component > Edit > Event > onmouseleave

**Description**

Edit 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmouseleave(obj:nexacro.Edit,e:nexacro.MouseEventInfo);
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

> Components > Component > Edit > Event > onmousemove

**Description**

Edit 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmousemove(obj:nexacro.Edit,e:nexacro.MouseEventInfo);
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

> Components > Component > Edit > Event > onmove

**Description**

Edit 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmove(obj:nexacro.Edit,e:nexacro.MoveEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onrbuttondown

> Components > Component > Edit > Event > onrbuttondown

**Description**

Edit 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrbuttondown(obj:nexacro.Edit,e:nexacro.MouseEventInfo);
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
   Default Action 을 취소하거나 usecontextmenu 속성을 사용하여 기본팝업메뉴를 비활성화 시켜야 합니다.

**Default Action**

- onrbuttondown 이벤트 종료 후 이벤트가 발생한 컴포넌트로 포커스가 이동됩니다.
  단, GroupBox, Static 컴포넌트는 포커스가 이동하지 않습니다.

- 일반적으로 onrbuttondown -> onrbuttonup -> oncontextmenu 순서로 이벤트가 발생하지만
   예외적으로 아래 환경은 onrbuttondown -> oncontextmenu -> onrbuttonup 순서로 이벤트가 발생하므로 주의하여야 합니다.
   : Safari 브라우저, macOS 환경의 전체 웹브라우저, Mobile 전체환경


---

### onrbuttonup

> Components > Component > Edit > Event > onrbuttonup

**Description**

Edit 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrbuttonup(obj:nexacro.Edit,e:nexacro.MouseEventInfo);
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
   Default Action 을 취소하거나 usecontextmenu 속성을 사용하여 기본팝업메뉴를 비활성화 시켜야 합니다.

**Default Action**

- onrbuttonup 이벤트 종료 후 oncontextmenu 이벤트가 발생합니다.
   예외적으로 아래 환경은 onrbuttondown -> oncontextmenu -> onrbuttonup 순서로 이벤트가 발생하므로 주의하여야 합니다.
   : Safari 브라우저, macOS 환경의 전체 웹브라우저, Mobile 전체환경


---

### onsetfocus

> Components > Component > Edit > Event > onsetfocus

**Description**

Edit 에 포커스가 들어올 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsetfocus(obj:nexacro.Edit,e:nexacro.SetFocusEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 서로 다른 애플리케이션 단위로 포커스가 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showModal(), open() 등의 메소드로 팝업된 Frame 으로 포커스가 이동하는 경우 Edit 에서 포커스 관련 이벤트가 발생하지 않습니다.
   또한, alert(), confirm() 메소드로 표시된 팝업으로 포커스가 이동하는 경우도 Edit 에서 포커스 관련 이벤트가 발생하지 않습니다.

- open() 메소드로 오픈된 Modeless 창에서 부모창의 Edit 에 setFocus() 메소드 실행 시 환경에 따라 동작에 차이가 있으므로 주의하여야 합니다.
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

> Components > Component > Edit > Event > onsize

**Description**

Edit 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsize(obj:nexacro.Edit,e:nexacro.SizeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### ontouchend

> Components > Component > Edit > Event > ontouchend

**Description**

Edit 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchend(obj:nexacro.Edit,e:nexacro.TouchEventInfo);
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

> Components > Component > Edit > Event > ontouchmove

**Description**

Edit 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchmove(obj:nexacro.Edit,e:nexacro.TouchEventInfo);
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

> Components > Component > Edit > Event > ontouchstart

**Description**

Edit 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchstart(obj:nexacro.Edit,e:nexacro.TouchEventInfo);
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
