# nexacroN V24 — PopupDiv

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 125개

---

## Components > ContainerComponent > PopupDiv

### PopupDiv

> Components > ContainerComponent > PopupDiv

**Description**

PopupDiv는 하나의 화면에 여러개의 부분화면을 구성할 때 사용하는 컴포넌트입니다.

PopupDiv로 구성하게 되면 주 화면과 독립적 또는 연계하여 화면을 구성할 수 있습니다.
Div 컴포넌트와 비슷하나 PopupDiv 는 포커스를 잃게 되면 자동으로 사라지게 됩니다.

**Remark**

- PopupDiv는 화면의 구성을 수월하게 하고, 화면을 분할해서, Form에 대한 재사용성을 높일 수있습니다.
  그러나 PopupDiv의 단계수가 늘어나게 되면, 화면의 구성이 느려지게 되고, 초기화 시간을 길게 만듭니다.

- PopupDiv를 사용할 때에는 2~3단계정도의 깊이로 사용하는 것이 효율적입니다.
  1개의 화면에 대해 2~3단계의 PopupDiv가 다수있는 쪽이 4~5단계의 PopupDiv를 사용하는 것보다 화면 구성이 빠릅니다.

**Structure**



**Contents Sizing**

PopupDiv 컴포넌트의 크기를 결정하는 기준입니다.

**Basic Key Action**

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 스크롤 이동 | Ctrl + 방향키 | PopupDiv 또는 자식 컴포넌트에 포커스가 있고, PopupDiv 에 스크롤이 있을 때 입력된 방향키 방향으로 스크롤이 이동합니다. |

**Property**

| Name | Description |
| --- | --- |
| async | PopupDiv 의 url 속성값을 동적으로 변경 시 연결된 Form 의 로딩방식을 설정하는 속성입니다. |
| background | PopupDiv 의 배경 영역을 설정하는 속성입니다. |
| border-radius | PopupDiv 의 모서리 모양을 설정하는 속성입니다. |
| bottom | PopupDiv 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다. |
| box-shadow | PopupDiv 에 그림자 효과를 설정하는 속성입니다. |
| color | PopupDiv 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| cssclass | PopupDiv 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다. |
| cursor | PopupDiv 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| enable | PopupDiv 의 사용가능 여부를 설정하는 속성입니다. |
| enableevent | PopupDiv 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다. |
| font | PopupDiv 에서 사용하는 폰트를 설정하는 속성입니다. |
| form | PopupDiv에서 모든 오브젝트가 등록된 Form을 갖는 읽기전용 속성입니다. |
| formscrollbarbarminsize | PopupDiv 의 내부 Form 에 표시되는 스크롤바의 트랙바(TrackBar) 최소크기를 설정하는 속성입니다. |
| formscrollbarbaroutsize | PopupDiv 의 내부 Form 에 표시되는 스크롤바에서 트랙바(TrackBar)가 사라지는 기준 크기를 설정하는 속성입니다. |
| formscrollbardecbuttonsize | PopupDiv 에서 내부 Form 에 표시되는 스크롤바의 감소 버튼(DecButton) 크기를 설정하는 속성입니다. |
| formscrollbarincbuttonsize | PopupDiv 에서 내부 Form 에 표시되는 스크롤바의 증가 버튼(IncButton) 크기를 설정하는 속성입니다. |
| formscrollbarsize | PopupDiv 에서 내부 Form 에 표시되는 스크롤바의 크기를 설정하는 속성입니다. |
| formscrollbartrackbarsize | PopupDiv 의 내부 Form 에 표시되는 스크롤바의 트랙바(TrackBar) 크기를 설정하는 속성입니다. |
| formscrollbartype | PopupDiv 에서 내부 Form 에 스크롤바가 표시되는 형식을 설정하는 속성입니다. |
| formscrollindicatorsize | PopupDiv 에서 내부 Form 에 표시되는 스크롤 인디케이터바의 크기를 설정하는 속성입니다. |
| formscrolltype | PopupDiv 의 내부 Form 에서 사용되는 스크롤의 종류를 설정하는 속성입니다. |
| height | PopupDiv 을(를) 표시하기 위한 높이를 설정하는 속성입니다. |
| hotkey | PopupDiv 의 기본 액션을 수행하기 위한 단축키를 설정하는 속성입니다. |
| id | PopupDiv의 고유 식별자를 설정하는 속성입니다. |
| initvalueid | PopupDiv 에 적용될 InitValue 의 ID 를 설정하는 속성입니다. |
| left | PopupDiv 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다. |
| letter-spacing | PopupDiv 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다. |
| maxheight | PopupDiv 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다. |
| maxwidth | PopupDiv 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다. |
| minheight | PopupDiv 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다. |
| minwidth | PopupDiv 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다. |
| name | PopupDiv 의 이름을 설정하는 속성입니다. |
| -nexa-border | PopupDiv 의 테두리를 설정하는 속성입니다. |
| -nexa-edge | PopupDiv 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-rtl-background-image | PopupDiv 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| -nexa-rtl-edge-image | PopupDiv 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| opacity | PopupDiv 영역의 투명도를 설정하는 속성입니다. |
| parent | PopupDiv 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| returnvalue | PopupDiv 의 closePopup() 메소드 실행 시 인수로 전달된 값을 갖는 읽기전용 속성입니다. |
| right | PopupDiv 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다. |
| rtl | PopupDiv 에서 내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다. |
| text | PopupDiv 에 내부 컴포넌트가 없을 때 화면에 표시될 텍스트를 설정하는 속성입니다. |
| tooltiptext | PopupDiv 에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다. |
| tooltiptype | PopupDiv 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다. |
| top | PopupDiv 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다. |
| url | PopupDiv 에 Form 을 연결하여 표시할 때 설정하는 속성입니다. |
| visible | PopupDiv 의 화면 표시여부에 따라 자동으로 설정되는 속성입니다. |
| width | PopupDiv 을(를) 표시하기 위한 너비를 설정하는 속성입니다. |
| word-spacing | PopupDiv 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addChild | 스크립트에서 동적으로 생성한 컴포넌트를 PopupDiv 의 자식 컴포넌트로 추가하는 메소드입니다. |
| addEvent | PopupDiv 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| addEventHandler | PopupDiv 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 PopupDiv 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| closePopup | 화면에 표시된 PopupDiv 를 닫는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 PopupDiv 을(를) 삭제하는 메소드입니다. |
| findEventHandler | PopupDiv 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getEventHandler | PopupDiv 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| getOffsetBottom | 부모 컴포넌트의 Top 위치를 기준으로 PopupDiv 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetHeight | PopupDiv 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetLeft | 부모 컴포넌트의 Left 위치를 기준으로 PopupDiv 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetRight | 부모 컴포넌트의 Left 위치를 기준으로 PopupDiv 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetTop | 부모 컴포넌트의 Top 위치를 기준으로 PopupDiv 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetWidth | PopupDiv 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getPixelBottom | PopupDiv 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelHeight | PopupDiv 의 height 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelLeft | PopupDiv 의 left 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelRight | PopupDiv 의 right 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelTop | PopupDiv 의 top 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelWidth | PopupDiv 의 width 속성값을 픽셀단위로 반환하는 메소드입니다. |
| init | 스크립트로 PopupDiv 을(를) 동적 생성한 후에 초기화하는 메소드입니다. |
| insertChild | 스크립트로 동적 생성한 컴포넌트를 PopupDiv 의 자식 컴포넌트로 특정 순서에 추가하는 메소드입니다. |
| insertEventHandler | PopupDiv 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| isPopup | 화면에 PopupDiv 가 표시되고 있는지 확인하는 메소드입니다. |
| move | PopupDiv 의 위치와 크기를 변경하는 메소드입니다. |
| reload | PopupDiv 에 url 속성으로 연결된 Form 을 다시 로딩하는 메서드입니다. |
| removeChild | PopupDiv 에 동적으로 추가된 컴포넌트를 제거하는 메소드입니다. |
| removeEvent | PopupDiv 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| removeEventHandler | PopupDiv 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | PopupDiv 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| resize | PopupDiv 의 크기를 변경하는 메소드입니다. |
| setContents | PopupDiv 의 내부 구성 컨텐츠를 동적으로 설정하는 메소드입니다. |
| setEventHandler | PopupDiv 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | PopupDiv 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| setOffsetBottom | 부모 컴포넌트의 Top 위치를 기준으로 PopupDiv 의 bottom 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetHeight | PopupDiv 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetLeft | 부모 컴포넌트의 Left 위치를 기준으로 PopupDiv 의 left 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetRight | 부모 컴포넌트의 Left 위치를 기준으로 PopupDiv 의 right 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetTop | 부모 컴포넌트의 Top 위치를 기준으로 PopupDiv 의 top 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetWidth | PopupDiv 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| show | 스크립트로 동적 생성한 PopupDiv 을(를) 화면에 표시하는 메소드입니다. |
| trackPopup | PopupDiv 를 특정 위치에 팝업으로 표시하는 메소드입니다. |
| trackPopupByComponent | 인수로 전달된 컴포넌트를 기준으로 PopupDiv 를 특정 위치에 표시하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onclick | PopupDiv 영역 내에서 마우스 왼쪽버튼을 클릭했을 때 발생하는 이벤트입니다. |
| oncloseup | 화면에 표시된 PopupDiv 가 닫힐 때 발생하는 이벤트입니다. |
| oncontextmenu | PopupDiv 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다. |
| ondevicebuttonup | 모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다. |
| ondrag | PopupDiv 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다. |
| ondragenter | PopupDiv 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| ondragleave | PopupDiv 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| ondragmove | PopupDiv 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| ondrop | PopupDiv 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다. |
| onhscroll | PopupDiv 의 수평 스크롤바를 스크롤 했을 때 발생하는 이벤트입니다. |
| onkeydown | PopupDiv 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다. |
| onkeyup | PopupDiv 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다. |
| onkillfocus | PopupDiv 에서 포커스가 나갈  때 발생하는 이벤트입니다. |
| onlbuttondown | PopupDiv 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| onlbuttonup | PopupDiv 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| onmousedown | PopupDiv 영역 내에서 마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 눌렸을 때 발생하는 이벤트입니다. |
| onmouseenter | PopupDiv 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| onmouseleave | PopupDiv 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| onmousemove | PopupDiv 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| onmouseup | 마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 떼어질 때 발생하는 이벤트입니다. |
| onmousewheel | PopupDiv 영역 내에서 마우스의 휠버튼을 회전했을 때 발생하는 이벤트입니다. |
| onmove | PopupDiv 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| onpopup | PopupDiv 가 화면에 표시될 때 발생하는 Event 입니다. |
| onrbuttondown | PopupDiv 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| onrbuttonup | PopupDiv 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| onsetfocus | PopupDiv 에 포커스가 들어올 때 발생하는 이벤트입니다. |
| onsize | PopupDiv 의 크기가 변경됐을 때 발생하는 이벤트입니다. |
| ontouchend | PopupDiv 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다. |
| ontouchmove | PopupDiv 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다. |
| ontouchstart | PopupDiv 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다. |
| onvscroll | PopupDiv 의 수직 스크롤바를 스크롤 했을 때 발생하는 이벤트입니다. |

**Status**

컴포넌트가 비활성화된 상태


---

### 속성 (Properties)

### -nexa-border

> Components > ContainerComponent > PopupDiv > Property > -nexa-border

**Description**

PopupDiv 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.border[= strborder]
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
this.PopupDiv00.border = "1px solid #999999";
this.PopupDiv00.border = "1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999";
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

> Components > ContainerComponent > PopupDiv > Property > -nexa-edge

**Description**

PopupDiv 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.edge[= stredge]
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
this.PopupDiv00.edge = "URL('./images/border.png')" 5px 5px;
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

- PopupDiv 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.


◆ WRE 제약

- <fixedwidth>,<fixedheight> 값이 이미지 사이즈의 1/2 을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-rtl-background-image

> Components > ContainerComponent > PopupDiv > Property > -nexa-rtl-background-image

**Description**

PopupDiv 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.-nexa-rtl-background-image
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

> Components > ContainerComponent > PopupDiv > Property > -nexa-rtl-edge-image

**Description**

PopupDiv 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.-nexa-rtl-edge-image
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

### async

> Components > ContainerComponent > PopupDiv > Property > async

**Description**

PopupDiv 의 url 속성값을 동적으로 변경 시 연결된 Form 의 로딩방식을 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.async[= bAsync]
```

**Setting Syntax**

```javascript
bAsync ::= 'true' | 'false'
```
```javascript
this.PopupDiv00.async = false;
```
- **`true`** — PopupDiv 에 Form 을 비동기(ASync) 방식으로 로드됩니다.

PopupDiv 에 로딩된 Form 에서 onload 이벤트가 발생한 후 Form 의 내부 컴포넌트에 접근 가능합니다.
onload 이벤트 발생 전 PopupDiv 에 로딩된 Form 의 내부 컴포넌트 접근 시 오류가 발생합니다.

url 속성값을 변경한 위치 이후 스크립트 수행 기준은 Remark 를 참조하시기 바랍니다.
- **`false`** — PopupDiv 에 Form 을 동기(Sync) 방식으로 로드합니다.

url 속성값을 변경한 후 로딩된 Form 의 내부 컴포넌트에 바로 접근 가능합니다.
url 속성값을 변경한 위치 이후 스크립트는 Form 에서 onload 이벤트가 발생한 다음 수행됩니다.

**Remark**

- async 속성값을 설정하지 않으면 true 로 적용됩니다.

- PopupDiv 를 포함한 Form 이 최초 로딩될 때 PopupDiv 에 url 속성으로 연결된 Form 은 async 속성값에 관계없이 항상 동기(Sync)방식으로 로딩됩니다.

- PopupDiv 에 연결된 Form 내부에서 PopupDiv 의 url 속성을 변경 시 async 속성값이 false 일 경우 오동작 할 수 있습니다.
   async 속성값이 false 이면 PopupDiv 의 url 속성을 변경하는 즉시 새로운 Form 이 로드되고 기존 Form이 제거되므로
   스크립트가 끝나기 전에 해당 오브젝트가 제거되서 문제가 발생할 수 있습니다.

- async 속성값이 true 일 때 url 속성을 변경한 위치 이후의 스크립트 수행 기준은 PopupDiv 에 연결된 Form 의 캐시여부에 따라 달라집니다.
   Form 이 넥사크로가 관리하는 캐시에서 로드될 경우는 Form 의 로드가 완료된 이후에 나머지 스크립트가 수행됩니다.
   Form 이 서버 또는 브라우저 캐시에서 로드될 경우는 Form 의 로드와 관계없이 나머지 스크립트가 수행됩니다.


---

### background

> Components > ContainerComponent > PopupDiv > Property > background

**Description**

PopupDiv 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.background[= strbackground]
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
this.PopupDiv00.background = "#ffffaa";
this.PopupDiv00.background = ""URL('./images/smiley.gif')" no-repeat center center #ffffaa";
this.PopupDiv00.background = ""URL('./images/smiley.gif')" no-repeat center center /auto #ffffaa";
this.PopupDiv00.background = ""URL('./images/smiley.gif')" no-repeat center center /15px 15% #ffffaa";
this.PopupDiv00.background = "linear-gradient( red , blue , yellow )";
this.PopupDiv00.background = "linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0))";
this.PopupDiv00.background = ""URL('./images/smiley.gif')" border-box border-box #ffffaa";
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

"left" 설정 시 PopupDiv 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 PopupDiv 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 PopupDiv 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 PopupDiv 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 PopupDiv 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 PopupDiv 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
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

0 보다 작거나 100 보다 큰 값을 설정 시 PopupDiv 의 영역을 벗어난 가상의 위치로 적용됩니다.

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
예를 들어 <angle> 값이 "to left" 이면 PopupDiv 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 PopupDiv 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

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

0 보다 작거나 100 보다 큰 값을 설정 시 PopupDiv 의 영역을 벗어난 가상의 위치로 적용됩니다.
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
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 PopupDiv 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

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

> Components > ContainerComponent > PopupDiv > Property > border-radius

**Description**

PopupDiv 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.borderRadius[= strborderradius]
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
this.PopupDiv00.borderRadius = "10px";
this.PopupDiv00.borderRadius = "5px 6px 10px / 5px 10px";
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

> Components > ContainerComponent > PopupDiv > Property > bottom

**Description**

PopupDiv 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.bottom[= nBottom]
```

**Setting Syntax**

```javascript
nBottom ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.PopupDiv00.bottom = 10; 
this.PopupDiv00.bottom = "10px"; 
this.PopupDiv00.bottom = "10%"; 
this.PopupDiv00.bottom = "Button00:10px"; 
this.PopupDiv00.bottom = "Button00:10%";
```
- **`<strCompID>`** — PopupDiv 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 PopupDiv 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 PopupDiv 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — PopupDiv 의 하단 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 bottom 속성값을 기준으로 PopupDiv의 하단 위치 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 PopupDiv의 하단 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 PopupDiv의 하단 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 PopupDiv의 하단 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 top 속성값을 기준으로 PopupDiv의 하단 위치 결정
- "%": <strCompID>의 height 속성값을 기준으로 PopupDiv의 하단 위치 결정
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

> Components > ContainerComponent > PopupDiv > Property > box-shadow

**Description**

PopupDiv 에 그림자 효과를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.boxShadow[= strbshadow]
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
this.PopupDiv00.boxShadow  = "10px 10px 10px #888888";
this.PopupDiv00.boxShadow  = "inset 10px 10px 10px 5px #888888";
```
- **`<inset>`** — 그림자 효과가 컴포넌트 안쪽에 표시됩니다.
생략 시에는 outset으로 동작합니다.
NRE는 지원하지 않습니다.
- **`<offset>`** — 그림자 효과가 표시되는 위치를 설정합니다.

PopupDiv 의 좌상단 위치를 기준으로 그림자 효과가 표시될 위치를 가로/세로 픽셀값으로 설정합니다.
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

> Components > ContainerComponent > PopupDiv > Property > color

**Description**

PopupDiv 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.color[= strcolor]
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
this.PopupDiv00.color = "#999999";
this.PopupDiv00.color = "rgb(255,0,0)";
this.PopupDiv00.color = "red";
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

> Components > ContainerComponent > PopupDiv > Property > cssclass

**Description**

PopupDiv 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.cssclass[= strcssclass]
```

**Setting Syntax**

```javascript
strcssclass ::= <ClassName> [ , &ltClassName> ]*
```
```javascript
this.PopupDiv00.cssclass = "TestClass"; 
this.PopupDiv00.cssclass = "TestClass,TestClass2";
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

> Components > ContainerComponent > PopupDiv > Property > cursor

**Description**

PopupDiv 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.cursor[= strCursor]
```

**Setting Syntax**

```javascript
strCursor ::= 'none' | 'auto' | 'default' | 'copy' | 'crosshair' | 'help' | 'move' | 'not-allowed' | 'pointer' | 'progress' | 'text' | 'wait' | 'ew-resize' | 'e-resize' | 'w-resize' | 'ns-resize' | 'n-resize' | 's-resize' | 'nesw-resize' | 'ne-resize' | 'sw-resize' | 'nwse-resize' | 'nw-resize' | 'se-resize'
```
```javascript
* XCSS
cursor : default;

* Script ( normal property )
this.PopupDiv00.cursor = "default";
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

> Components > ContainerComponent > PopupDiv > Property > enable

**Description**

PopupDiv 의 사용가능 여부를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.enable[= benable]
```

**Setting Syntax**

```javascript
benable ::= 'true' | 'false'
```
```javascript
this.PopupDiv00.enable = true; 
this.PopupDiv00.enable = false;
```
- **`true`** — PopupDiv 을(를) 사용할 수 있게 설정합니다.
- **`false`** — PopupDiv 을(를) 사용할 수 없게 설정합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "disabled" Status 가 적용됩니다.

**Remark**

- enable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enable 속성값이 false 이면 컴포넌트가 화면에 표시되지만 포커스나 입력을 받을 수 없습니다.

- Div 와 같은 컨테이너 컴포넌트의 enable 속성값을 false 로 설정하면 자식 컴포넌트도 모두 Disable 됩니다.


---

### enableevent

> Components > ContainerComponent > PopupDiv > Property > enableevent

**Description**

PopupDiv 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.enableevent[= bEvent]
```

**Setting Syntax**

```javascript
bEvent ::= 'true' | 'false'
```
```javascript
this.PopupDiv00.enableevent = true;  

this.PopupDiv00.enableevent = false;
```
- **`true`** — PopupDiv 에서 이벤트가 발생하도록 설정합니다.
- **`false`** — PopupDiv 에서 이벤트가 발생하지 않도록 설정합니다.

**Remark**

- enableevent 속성을 false 로 설정하면 이벤트 발생으로 인한 처리속도 지연과 화면 깜빡임을 방지할 수 있습니다.


---

### font

> Components > ContainerComponent > PopupDiv > Property > font

**Description**

PopupDiv 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.font[= strfont]
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
this.PopupDiv00.font = "bold 12pt/30px arial, sans-serif";
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

### form

> Components > ContainerComponent > PopupDiv > Property > form

**Description**

PopupDiv에서 모든 오브젝트가 등록된 Form을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
PopupDiv.form
```

**Setting Syntax**

```javascript
this.PopupDiv00.form.Button00.click();
```

**Remark**

- PopupDiv 내부에 정의된 컴포넌트에 접근하기 위해서는 form 속성을 사용하여야 합니다.

- url 속성을 사용하여 연결된 Form의 변수, 함수, 컴포넌트에 접근할 때도 form 속성을 사용하여야 합니다.


---

### formscrollbarbarminsize

> Components > ContainerComponent > PopupDiv > Property > formscrollbarbarminsize

**Description**

PopupDiv 의 내부 Form 에 표시되는 스크롤바의 트랙바(TrackBar) 최소크기를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.formscrollbarbarminsize[= nSize]
```

**Setting Syntax**

```javascript
this.PopupDiv00.formscrollbarbarminsize = 20;
```
- **`nSize`** — 스크롤바의 트랙바 최소크기를 pixel 단위의 숫자로 설정합니다.

음수값은 설정할 수 없습니다.

**Remark**

- formscrollbarbarminsize 속성값을 설정하지 않으면 undefined 가 설정되고 트랙바 크기에 맞는 적당한 값으로 동작합니다.

- formscrollbartrackbarsize 속성값이 설정되어 있으면 formscrollbarbarminsize 속성값은 무시됩니다.

- Form 의 크기 또는 내부 컨텐츠 변경에 의해 트랙바의 크기가 자동변경될 때 formscrollbarbarminsize 속성값 미만으로 작아지지 않습니다.

- 트랙바가 표시되는 영역보다 formscrollbarbarminsize 속성값을 크게 설정해도 트랙바는 표시영역까지만 표현됩니다.

- url 속성으로 기존에 작성된 Form 과 연결 시 연결된 Form 의 scrollbarbarminsize 속성보다 formscrollbarbarminsize 속성이 우선 적용됩니다.


---

### formscrollbarbaroutsize

> Components > ContainerComponent > PopupDiv > Property > formscrollbarbaroutsize

**Description**

PopupDiv 의 내부 Form 에 표시되는 스크롤바에서 트랙바(TrackBar)가 사라지는 기준 크기를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.formscrollbarbaroutsize[= nSize]
```

**Setting Syntax**

```javascript
this.PopupDiv00.formscrollbarbaroutsize = 50;
```
- **`nSize`** — 스크롤바의 트랙바가 사라지는 기준 크기를 pixel 단위의 숫자로 설정합니다.

음수값은 설정할 수 없습니다.

**Remark**

- formscrollbarbaroutsize 속성값을 설정하지 않으면 undefined 가 설정되고 스크롤바 크기에 맞는 적당한 값으로 동작합니다.

- PopupDiv 의 크기가 변경되어 스크롤바가 줄어들 때 트랙바를 표시할 공간이 formscrollbarbaroutsize 속성값보다 작아지면 트랙바를 표시하지 않습니다.

- url 속성으로 기존에 작성된 Form 과 연결 시 연결된 Form 의 scrollbarbaroutsize 속성보다 formscrollbarbaroutsize 속성이 우선 적용됩니다.


---

### formscrollbardecbuttonsize

> Components > ContainerComponent > PopupDiv > Property > formscrollbardecbuttonsize

**Description**

PopupDiv 에서 내부 Form 에 표시되는 스크롤바의 감소 버튼(DecButton) 크기를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.formscrollbardecbuttonsize[= nSize]
```

**Setting Syntax**

```javascript
this.PopupDiv00.formscrollbardecbuttonsize = 30;
```
- **`nSize`** — 스크롤바의 감소 버튼(DecButton) 크기를 pixel 단위의 숫자로 설정합니다.

**Remark**

- formscrollbardecbuttonsize 속성값은 수직/수평 스크롤바에 동일하게 적용됩니다.

- 수직스크롤바의 감소 버튼(DecButton) 높이는 formscrollbardecbuttonsize 속성으로 설정하고 너비는 formscrollbarsize 속성으로 설정합니다.

- 수평스크롤바의 감소 버튼(DecButton) 너비는 formscrollbardecbuttonsize 속성으로 설정하고 높이는 formscrollbarsize 속성으로 설정합니다.

- url 속성으로 기존에 작성된 Form 과 연결 시 연결된 Form 의 scrollbardecbuttonsize 속성보다 formscrollbardecbuttonsize 속성이 우선 적용됩니다.


---

### formscrollbarincbuttonsize

> Components > ContainerComponent > PopupDiv > Property > formscrollbarincbuttonsize

**Description**

PopupDiv 에서 내부 Form 에 표시되는 스크롤바의 증가 버튼(IncButton) 크기를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.formscrollbarincbuttonsize[= nSize]
```

**Setting Syntax**

```javascript
 this.PopupDiv00.formscrollbarincbuttonsize = 30;
```
- **`nSize`** — 스크롤바의 증가 버튼(IncButton) 크기를 pixel 단위의 숫자로 설정합니다.

**Remark**

- formscrollbarincbuttonsize 속성값은 수직/수평 스크롤바에 동일하게 적용됩니다.

- 수직스크롤바의 증가 버튼(IncButton) 높이는 formscrollbarincbuttonsize 속성으로 설정하고 너비는 formscrollbarsize 속성으로 설정합니다.

- 수평스크롤바의 증가 버튼(IncButton) 너비는 formscrollbarincbuttonsize 속성으로 설정하고 높이는 formscrollbarsize 속성으로 설정합니다.

- url 속성으로 기존에 작성된 Form 과 연결 시 연결된 Form 의 scrollbarincbuttonsize 속성보다 formscrollbarincbuttonsize 속성이 우선 적용됩니다.


---

### formscrollbarsize

> Components > ContainerComponent > PopupDiv > Property > formscrollbarsize

**Description**

PopupDiv 에서 내부 Form 에 표시되는 스크롤바의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.formscrollbarsize[= nSize]
```

**Setting Syntax**

```javascript
this.PopupDiv00.formscrollbarsize = 30;
```
- **`nSize`** — 스크롤바의 크기를 pixel 단위의 숫자로 설정합니다.

**Remark**

- formscrollbarsize 속성값은 수직스크롤바의 너비와 수평스크롤바의 높이에 동일하게 적용됩니다.

- formscrollbarsize 속성값을 변경하면 수평스크롤바 내부버튼의 높이와 수직스크롤바 내부버튼의 너비가 동일하게 변경됩니다.

- url 속성으로 기존에 작성된 Form 과 연결 시 연결된 Form 의 scrollbarsize 속성보다 formscrollbarsize 속성이 우선 적용됩니다.


---

### formscrollbartrackbarsize

> Components > ContainerComponent > PopupDiv > Property > formscrollbartrackbarsize

**Description**

PopupDiv 의 내부 Form 에 표시되는 스크롤바의 트랙바(TrackBar) 크기를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.formscrollbartrackbarsize[= nSize]
```

**Setting Syntax**

```javascript
this.PopupDiv00.formscrollbartrackbarsize = 20;
```
- **`nSize`** — 스크롤바의 트랙바 크기를 pixel 단위의 숫자로 설정합니다.

-1 을 설정하면 PopupDiv 의 크기와 내부에 표시되는 컴포넌트 위치에 따라 트랙바 크기가 자동으로 조절됩니다.
-2 이하의 음수값은 설정할 수 없습니다.

**Remark**

- formscrollbartrackbarsize 속성값을 설정하지 않으면 undefined 가 설정되고 -1 로 동작합니다.

- formscrollbartrackbarsize 속성을 설정하면 내부 컨텐츠와 관계없이 트랙바 크기가 고정되어 표시됩니다.

- url 속성으로 기존에 작성된 Form 과 연결 시 연결된 Form 의 scrollbartrackbarsize 속성보다 formscrollbartrackbarsize 속성이 우선 적용됩니다.


---

### formscrollbartype

> Components > ContainerComponent > PopupDiv > Property > formscrollbartype

**Description**

PopupDiv 에서 내부 Form 에 스크롤바가 표시되는 형식을 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.formscrollbartype[= strBartype]
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
this.PopupDiv00.formscrollbartype = "none"; 
this.PopupDiv00.formscrollbartype = "default autoindicator"; 
this.PopupDiv00.formscrollbartype = "auto fixed"; 
this.PopupDiv00.formscrollbartype = "indicator none";
```
- **`<scrolltype>`** — formscrollbartype 속성값을 하나만 설정하면 가로/세로 스크롤바에 동일한 값이 적용됩니다.
- **`<pairtype>`** — formscrollbartype 속성값을 빈칸으로 구분한 두개의 값으로 설정합니다.

첫번째 값은 가로스크롤바에 적용되고, 두번째 값은 세로스크롤바에 적용됩니다.
- **`"default"`** — 데스크탑 환경인 경우 "auto" 로 적용됩니다.

모바일 환경인 경우 "autoindicator" 로 적용됩니다.
- **`"none"`** — 스크롤바 또는 인디케이터바를 표시하지 않습니다.
- **`"fixed"`** — 스크롤바를 항상 표시합니다.
- **`"auto"`** — 스크롤바가 필요할 때 자동으로 표시합니다.
- **`"indicator"`** — 스크롤 인디케이터바가 필요할 때 자동으로 표시합니다.
- **`"autoindicator"`** — 스크롤이 동작될 때만 인디케이터바가 표시되었다가 스크롤이 종료되면 사라집니다.

**Remark**

- formscrollbartype 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- 데스크탑에 적용되는 값과 모바일에 적용되는 값을 함께 설정할 수 있지만 권장하지 않습니다.
   ex) this.PopupDiv00.formscrollbartype = "fixed autoindicator";

- url 속성으로 기존에 작성된 Form 을 연결 시 연결된 Form 의 scrollbartype 속성보다 formscrollbartype 속성이 우선 적용됩니다.

**See Also**

PopupDiv.scrolltype


---

### formscrollindicatorsize

> Components > ContainerComponent > PopupDiv > Property > formscrollindicatorsize

**Description**

PopupDiv 에서 내부 Form 에 표시되는 스크롤 인디케이터바의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.formscrollindicatorsize[= nSize]
```

**Setting Syntax**

```javascript
this.PopupDiv00.formscrollindicatorsize = 30;
```
- **`nSize`** — 스크롤 인디케이터바의 크기를 pixel 단위의 숫자로 설정합니다.

**Remark**

- formscrollindicatorsize 속성값은 수직스크롤바의 너비와 수평스크롤바의 높이에 동일하게 적용됩니다.

- PopupDiv 에 스크롤 인디케이터바가 아닌 스크롤바가 표시될 경우 formscrollbarsize 속성으로 크기를 설정하여야 합니다.

- url 속성으로 기존에 작성된 Form 과 연결 시 연결된 Form 의 scrollindicatorsize 속성보다 formscrollindicatorsize 속성이 우선 적용됩니다.


---

### formscrolltype

> Components > ContainerComponent > PopupDiv > Property > formscrolltype

**Description**

PopupDiv 의 내부 Form 에서 사용되는 스크롤의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.formscrolltype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'both' | 'vertical' | 'horizontal'
```
```javascript
this.PopupDiv00.formscrolltype = "vertical";
```
- **`"none"`** — PopupDiv 의 내부 Form 에서 수평/수직 스크롤을 사용하지 않습니다.
- **`"both"`** — PopupDiv 의 내부 Form 에서 수평/수직 스크롤을 모두 사용합니다.
- **`"vertical"`** — PopupDiv 의 내부 Form 에서 수직 스크롤만 사용합니다.

수평 스크롤은 사용하지 않습니다.
- **`"horizontal"`** — PopupDiv 의 내부 Form 에서 수평 스크롤만 사용합니다.

수직 스크롤은 사용하지 않습니다.

**Remark**

- formscrolltype 속성값을 설정하지 않으면 "both" 로 적용됩니다.

- PopupDiv 의 내부 Form 에서 사용되는 스크롤에 대한 자세한 설정은 formscrollbartype 속성을 사용하여야 합니다.

- url 속성으로 기존에 작성된 Form 과 연결 시 연결된 Form 의 scrolltype 속성보다 formscrolltype 속성이 우선 적용됩니다.


---

### height

> Components > ContainerComponent > PopupDiv > Property > height

**Description**

PopupDiv 을(를) 표시하기 위한 높이를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.height[= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.PopupDiv00.height = 10; 
this.PopupDiv00.height = "10px"; 
this.PopupDiv00.height = 10%"; 
this.PopupDiv00.height = Button00:10%";
```
- **`<strCompID>`** — PopupDiv 의 높이를 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 PopupDiv 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 PopupDiv 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 높이가 적용됩니다.
- **`<nVal>`** — PopupDiv 의 높이를 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.


* <strCompID> 값을 생략했을 때 :
- "px": PopupDiv의 높이 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 PopupDiv의 높이 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 PopupDiv의 높이 결정
- "rem": MainFrame font-size 속성값을 기준으로 PopupDiv의 높이 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID> 값은 무시되고 설정값이 PopupDiv의 높이 결정
- "%": <strCompID>의 height 속성값을 기준으로 PopupDiv의 높이 결정
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

> Components > ContainerComponent > PopupDiv > Property > hotkey

**Description**

PopupDiv 의 기본 액션을 수행하기 위한 단축키를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.hotkey[= strHotkey]
```

**Setting Syntax**

```javascript
this.PopupDiv00.hotkey = "G"; 
this.PopupDiv00.hotkey = "CTRL+A"; 
this.PopupDiv00.hotkey = "CTRL+ALT+X";
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

> Components > ContainerComponent > PopupDiv > Property > id

**Description**

PopupDiv의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.id
```

**Setting Syntax**

- **`id`** — PopupDiv를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### initvalueid

> Components > ContainerComponent > PopupDiv > Property > initvalueid

**Description**

PopupDiv 에 적용될 InitValue 의 ID 를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.initvalueid[= strValueID]
```

**Setting Syntax**

- **`strValueID`** — InitValueDefinition 영역에 정의된 InitValue 파일에서 PopupDiv 에 적용할 항목의 ID 를 문자열로 설정합니다.

**Remark**

- PopupDiv 가 화면에 표시된 후에는 속성값을 설정하거나 변경 할 수 없습니다.
   PopupDiv 를 동적으로 생성 시 show() 메소드 실행 전에 속성값을 설정하여야 합니다.

- Screen 별로 Environment 의 initvaluefileid 속성을 각각 설정하면 Screen 에 따라 다른 초기값을 설정할 수 있습니다.

- InitValueDefinition 영역에 한 개 이상의 InitValue 파일을 정의할 수 있고,
   InitValue 파일에는 컴포넌트별로 여러개의 초기값 정의를 할 수 있습니다.


---

### left

> Components > ContainerComponent > PopupDiv > Property > left

**Description**

PopupDiv 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.left[= nLeft]
```

**Setting Syntax**

```javascript
nLeft ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.PopupDiv00.left = 10; 
this.PopupDiv00.left = "10px"; 
this.PopupDiv00.left = "10%"; 
this.PopupDiv00.left = "Button00:10px"; 
this.PopupDiv00.left = "Button00:10%";
```
- **`<strCompID>`** — PopupDiv 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 PopupDiv 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 PopupDiv 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — PopupDiv 의 좌측 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 left 속성값을 기준으로 PopupDiv의 좌측 위치 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 PopupDiv의 좌측 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 PopupDiv의 좌측 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 PopupDiv의 좌측 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 right 속성값을 기준으로 PopupDiv의 좌측 위치 결정
- "%": <strCompID>의 width 속성값을 기준으로 PopupDiv의 좌측 위치 결정
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

> Components > ContainerComponent > PopupDiv > Property > letter-spacing

**Description**

PopupDiv 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.letterSpacing[= strspace]
```

**Setting Syntax**

```javascript
strspace ::= 'normal' | <nVal> ['px']
```
```javascript
* XCSS
letter-spacing : 2px ;

* Script ( normal property )
this.PopupDiv00.letterSpacing = "2px";
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

> Components > ContainerComponent > PopupDiv > Property > maxheight

**Description**

PopupDiv 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.maxheight[= nMaxHeight]
```

**Setting Syntax**

```javascript
nMaxHeight ::= <nVal> ['px']
```
```javascript
this.PopupDiv00.maxheight = 20; 
this.PopupDiv00.maxheight = "20px";
```
- **`<nVal>`** — PopupDiv 이(가) 화면에 표시되는 높이의 최대값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- height 속성값이 maxheight 보다 크면 화면에 표시되는 PopupDiv 의 높이는 maxheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- maxheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxheight 속성값을 minheight 속성값보다 작게 설정하면 minheight 속성값이 maxheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 PopupDiv 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.


---

### maxwidth

> Components > ContainerComponent > PopupDiv > Property > maxwidth

**Description**

PopupDiv 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.maxwidth[= nMaxWidth]
```

**Setting Syntax**

```javascript
nMaxWidth ::= <nVal> ['px']
```
```javascript
this.PopupDiv00.maxwidth = 20; 
this.PopupDiv00.maxwidth = "20px";
```
- **`<nVal>`** — PopupDiv 이(가) 화면에 표시되는 너비의 최대값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- width 속성값이 maxwidth 보다 크면 화면에 표시되는 PopupDiv 의 너비는 maxwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- maxwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxwidth 속성값을 minwidth 속성값보다 작게 설정하면 minwidth 속성값이 maxwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 PopupDiv 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.


---

### minheight

> Components > ContainerComponent > PopupDiv > Property > minheight

**Description**

PopupDiv 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.minheight[= nMinHeight]
```

**Setting Syntax**

```javascript
nMinHeight ::= <nVal> ['px']
```
```javascript
this.PopupDiv00.minheight = 20; 
this.PopupDiv00.minheight = "20px";
```
- **`<nVal>`** — PopupDiv 이(가) 화면에 표시되는 높이의 최소값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- height 속성값이 minheight 보다 작다면 화면에 표시되는 PopupDiv 의 높이는 minheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- minheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minheight 속성값을 maxheight 속성값보다 크게 설정하면 maxheight 속성값이 minheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 PopupDiv 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.


---

### minwidth

> Components > ContainerComponent > PopupDiv > Property > minwidth

**Description**

PopupDiv 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.minwidth[= nMinWidth]
```

**Setting Syntax**

```javascript
nMinWidth ::= <nVal> ['px']
```
```javascript
this.PopupDiv00.minwidth = 20; 
this.PopupDiv00.minwidth = "20px";
```
- **`<nVal>`** — PopupDiv 이(가) 화면에 표시되는 너비의 최소값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- width 속성값이 minwidth 보다 작으면 화면에 표시되는 PopupDiv 의 너비는 minwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- minwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minwidth 속성값을 maxwidth 속성값보다 크게 설정하면 maxwidth 속성값이 minwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 PopupDiv 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.


---

### name

> Components > ContainerComponent > PopupDiv > Property > name

**Description**

PopupDiv 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### opacity

> Components > ContainerComponent > PopupDiv > Property > opacity

**Description**

PopupDiv 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.opacity[= stropacity]
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8;
opacity : 80%;

* Script ( normal property )
this.PopupDiv00.opacity = "0.8";
this.PopupDiv00.opacity = 0.8;
this.PopupDiv00.opacity = "80%";
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

> Components > ContainerComponent > PopupDiv > Property > parent

**Description**

PopupDiv 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
PopupDiv.parent
```

**Setting Syntax**

```javascript
var objParent = this.PopupDiv00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- PopupDiv 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### returnvalue

> Components > ContainerComponent > PopupDiv > Property > returnvalue

**Description**

PopupDiv 의 closePopup() 메소드 실행 시 인수로 전달된 값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
PopupDiv.returnvalue
```

**Setting Syntax**

```javascript
this.PopupDiv00.closePopup( "return value" );
var strRtn = this.PopupDiv00.returnvalue;
```

**Remark**

- closePopup() 메소드를 사용하여 PopupDiv 를 닫지 않았다면 returnvalue 속성값은 빈값으로 설정됩니다.

- PopupDiv 가 화면에 표시될 때 returnvalue 속성값이 초기화 됩니다.

- trackPopup() 또는 trackPopupByComponent() 메소드 실행 시 콜백함수를 설정했다면  PopupDiv 가 닫힐 때 콜백함수에 returnvalue 값을 전달합니다.


---

### right

> Components > ContainerComponent > PopupDiv > Property > right

**Description**

PopupDiv 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.right[= nRight]
```

**Setting Syntax**

```javascript
nRight ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.PopupDiv00.right = 10; 
this.PopupDiv00.right = "10px"; 
this.PopupDiv00.right = "10%"; 
this.PopupDiv00.right = "Button00:10px"; 
this.PopupDiv00.right = "Button00:10%";
```
- **`<strCompID>`** — PopupDiv 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 PopupDiv 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 PopupDiv 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — PopupDiv 의 우측 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 right 속성값을 기준으로 PopupDiv의 우측 위치 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 PopupDiv의 우측 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 PopupDiv의 우측 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 PopupDiv의 우측 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 left 속성값을 기준으로 PopupDiv의 우측 위치 결정
- "%": <strCompID>의 width 속성값을 기준으로 PopupDiv의 우측 위치 결정
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

> Components > ContainerComponent > PopupDiv > Property > rtl

**Description**

PopupDiv 에서 내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.rtl
```

**Setting Syntax**

```javascript
bRtl ::= undefined | 'true' | 'false'
```
```javascript
var vRtl = this.PopupDiv00.rtl;
```
- **`undefined`** — undefined 설정 시 상위 컴포넌트의 rtl 속성값이 적용됩니다.

사용자가 rtl 속성값을 설정하지 않거나 삭제했을 경우 undefined 가 설정됩니다.
- **`true`** — PopupDiv 의 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 오른쪽으로 설정합니다.
PopupDiv 의 내부 좌표계의 기준을 오른쪽으로 설정합니다.
PopupDiv 의 텍스트 표시 기준을 오른쪽으로 설정합니다.
수직스크롤바가 있을 경우 왼쪽에 표시됩니다.
- **`false`** — PopupDiv 의 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 왼쪽으로 설정합니다.
PopupDiv 의 내부 좌표계의 기준을 왼쪽으로 설정합니다.
PopupDiv 의 텍스트 표시 기준을 왼쪽으로 설정합니다.
수직스크롤바가 있을 경우 오른쪽에 표시됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 아랍권 같이 화면의 표시기준이 오른쪽인 환경에서 컨텐츠의 표시 기준을 변경하기 위해 설정하는 속성입니다.

- PopupDiv 부터 Environment 까지 상위의 모든 rtl 속성값이 undefined 이면
   Environment 의 locale 속성에 설정된 국가 및 언어 설정값을 기준으로 rtl 속성이 적용됩니다.
   Environment 의 locale 속성값을 설정하지 않았을 경우 시스템의 국가 및 언어 설정값이 적용됩니다.


---

### text

> Components > ContainerComponent > PopupDiv > Property > text

**Description**

PopupDiv 에 내부 컴포넌트가 없을 때 화면에 표시될 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.text[= strText]
```

**Setting Syntax**

```javascript
this.PopupDiv00.text = "Empty Form";
```
- **`strText`** — PopupDiv 에 연결된 Form이 없거나 내부 컴포넌트가 없을 때 화면에 표시될 텍스트를 설정합니다.


---

### tooltiptext

> Components > ContainerComponent > PopupDiv > Property > tooltiptext

**Description**

PopupDiv 에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.tooltiptext[= strToolTipText]
```

**Setting Syntax**

```javascript
this.PopupDiv00.tooltiptext = "This is ToolTip Text"; this.PopupDiv00.tooltiptext = "";          // 풍선 도움말이 표시되지 않습니다. 

this.PopupDiv00.tooltiptext = null;        // 상위 컴포넌트의 풍선 도움말이 표시됩니다.
```
- **`strToolTipText`** — 풍선도움말에 표시할 텍스트를 설정합니다.

빈문자열(EmptyString) 설정 시 풍선도움말이 표시되지 않습니다.
null 또는 undefined 설정 시 상위컴포넌트(Form, Div 등)의 풍선도움말이 표시됩니다.

**Remark**

- tooltiptext 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- 마우스 포인터가 PopupDiv 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.

- 풍선도움말이 표시된 상태에서 tooltiptext 속성값을 변경하면 풍선도움말이 사라집니다.


◆ Desktop WRE 제약

- 풍선도움말은 브라우저의 기능을 활용하므로 브라우저 사양에 따라 스타일에 차이가 있을 수 있습니다.
   NRE는 Chrome 의 스타일과 동일하게 적용됩니다.


---

### tooltiptype

> Components > ContainerComponent > PopupDiv > Property > tooltiptype

**Description**

PopupDiv 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.tooltiptype[= enumTooltipType]
```

**Setting Syntax**

```javascript
enumTooltipType ::= 'default' | 'hover' | 'inplace' | 'default,mouseleave' | 'hover,mouseleave' | 'inplace,mouseleave'
```
```javascript
this.PopupDiv00.tooltiptype = "hover";
```
- **`"default"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 PopupDiv 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"hover"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 PopupDiv 영역내에 멈춰서 일정시간이 경과하면 풍선도움말이 사라집니다.
PopupDiv 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경되거나 사라진 풍선도움말이 다시 표시됩니다.
- **`"inplace"`** — PopupDiv 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 PopupDiv 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"default,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 PopupDiv 영역에 있으면 풍선도움말이 사라지지 않습니다.
- **`"hover,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 PopupDiv 영역에 있으면 풍선도움말이 사라지지 않습니다.
PopupDiv 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경됩니다.
- **`"inplace,mouseleave"`** — PopupDiv 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 PopupDiv 영역에 있으면 풍선도움말이 사라지지 않습니다.

**Remark**

- tooltiptype 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- 마우스 포인터가 PopupDiv 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.

- 풍선도움말이 표시된 상태에서 tooltiptext 속성값을 변경하면 tooltiptype 속성값에 관계없이 풍선도움말이 사라집니다.

- 표시되었다가 사라진 풍선도움말은 마우스 포인터가 PopupDiv 영역을 나갔다가 들어오면 다시 표시됩니다.

- 마우스 포인터가 PopupDiv 영역에서 벗어나면 풍선도움말이 사라집니다.

- 풍선도움말의 크기는 풍선도움말에 표시되는 텍스트의 길이와 크기에 맞춰 자동으로 조정됩니다.

- 풍선도움말에 표시되는 텍스트의 글꼴과 크기는 변경하실 수 없습니다.


---

### top

> Components > ContainerComponent > PopupDiv > Property > top

**Description**

PopupDiv 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.top[= nTop]
```

**Setting Syntax**

```javascript
nTop ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.PopupDiv00.top = 10; 
this.PopupDiv00.top = "10px"; 
this.PopupDiv00.top = "10%"; 
this.PopupDiv00.top = "Button00:10px"; 
this.PopupDiv00.top = "Button00:10%";
```
- **`<strCompID>`** — PopupDiv 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 PopupDiv 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 PopupDiv 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — PopupDiv의 상단 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 top 속성값을 기준으로 PopupDiv의 상단 위치 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 PopupDiv의 상단 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 PopupDiv의 상단 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 PopupDiv의 상단 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 bottom 속성값을 기준으로 PopupDiv의 상단 위치 결정
- "%": <strCompID>의 height 속성값을 기준으로 PopupDiv의 상단 위치 결정
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

### url

> Components > ContainerComponent > PopupDiv > Property > url

**Description**

PopupDiv 에 Form 을 연결하여 표시할 때 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.url[= strUrl]
```

**Setting Syntax**

```javascript
strUrl ::= <absolute-url> | <relative-url>
```
```javascript
this.PopupDiv00.url = "http://localhost:8080/Prj/Base/temp00.xfdl.js";     // 절대경로

this.PopupDiv00.url = "../Base/temp00.xfdl";                                        // 상대경로
this.PopupDiv00.url = "Base::temp00.xfdl";                                           // TypeDefinition의 Services 경로
```
- **`<absolute-url>`** — 웹에 Generate 된 파일을 "http://경로/폼명", "https://경로/폼명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 하고, Form 이 Generate 되어 있어야 합니다. 
Cross Domain 상황이면 사용에 제한이 있습니다.
- **`<relative-url>`** — TypeDefinition 의 Services 영역에 정의된 Prefix 를 사용한 형식으로 설정합니다.

현재 Form 위치를 기준으로 한 상대경로를 사용하여 설정합니다.

**Remark**

- 기존에 작성된 Form 을 PopupDiv 에 연결할 때 사용하는 속성입니다.

- PopupDiv 의 위치와 크기는 연결된 Form 의 크기와 관계없이 유지됩니다.

- PopupDiv 에 연결된 Form 내부에서 PopupDiv 의 url 속성을 변경 시 async 속성값이 false 일 경우 오동작 할 수 있습니다.
   async 속성값이 false 이면 PopupDiv 의 url 속성을 변경하는 즉시 새로운 Form 이 로드되고,
   기존 Form 이 제거되므로 스크립트가 끝나기 전에 해당 오브젝트가 제거되서 발생하는 문제입니다.
 
- PopupDiv 에 연결된 Form 내부에서 PopupDiv 의 url 속성을 변경하면 변경 시점 이후의 스크립트는 수행되지 않습니다.

- PopupDiv 가 속한 Form 과 상위 Form 들은 url 속성에 설정하여 연결 할 수 없습니다.


---

### visible

> Components > ContainerComponent > PopupDiv > Property > visible

**Description**

PopupDiv 의 화면 표시여부에 따라 자동으로 설정되는 속성입니다.

**Syntax**

```javascript
PopupDiv.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
- **`"true"`** — PopupDiv 가 화면에 표시된 상태입니다.
- **`"false"`** — PopupDiv 가 화면에 표시되지 않은 상태입니다.

**Remark**

- PopupDiv 의 화면 표시 여부는 isPopup() 메소드로 확인하는 것을 권장합니다.

- trackPopup() 또는 trackPopupByComponent() 메소드를 실행하여 PopupDiv가 화면에 표시되면 visible 속성값은 "true"로 설정됩니다.

- closePopup() 메소드를 실행하여 PopupDiv 가 화면에서 닫히면 visible 속성값은 "false"로 설정됩니다.

- visible 속성값이 "false"이면 컴포넌트가 화면에 표시되지 않고, 포커스를 받을 수 없으므로 입력이나 사용이 불가능합니다.

- visible 속성값이 "false"이면 내부 컴포넌트도 함께 화면에 표시되지 않습니다.

- visible 속성값이 "false"이어도 컴포넌트는 존재하기 때문에 스크립트로 제어가 가능합니다.

- 넥사크로 스튜디오에서는 visible 속성값을 'false'로 설정해도 디자인화면에서 사라지지 않습니다.


---

### width

> Components > ContainerComponent > PopupDiv > Property > width

**Description**

PopupDiv 을(를) 표시하기 위한 너비를 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.width[= nWidth]
```

**Setting Syntax**

```javascript
nWidth ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.PopupDiv00.width = 10; this.PopupDiv00.width = "10px"; 
this.PopupDiv00.width = "10%"; 
this.PopupDiv00.width = "Button00:10%";
```
- **`<strCompID>`** — PopupDiv 의 너비를 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 PopupDiv 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 PopupDiv 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 너비가 적용됩니다.
- **`<nVal>`** — PopupDiv 의 너비를 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": PopupDiv의 너비 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 PopupDiv의 너비 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 PopupDiv의 너비 결정
- "rem": MainFrame font-size 속성값을 기준으로 PopupDiv의 너비 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID> 값은 무시되고 설정값이 PopupDiv의 너비 결정
- "%": <strCompID>의 width 속성값을 기준으로 PopupDiv의 너비 결정
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

> Components > ContainerComponent > PopupDiv > Property > word-spacing

**Description**

PopupDiv 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다.

**Syntax**

```javascript
PopupDiv.wordSpacing[= strwordspacing]
```

**Setting Syntax**

```javascript
strWordSpacing ::= 'normal' | <nVal>'px'
```
```javascript
* XCSS
word-spacing : 30px;

* Script ( normal property )
this.PopupDiv00.wordSpacing = "30px";
```
- **`"normal"`** — 텍스트의 단어 사이 간격을 설정하지 않습니다.

현재 font 에 맞는 기본형태로 텍스트가 표시됩니다.
- **`<nVal>`** — pixel 단위로 텍스트의 단어 사이 간격을 설정합니다.

**Remark**

- word-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "wordSpacing"을 사용해야 합니다.


---

### 메서드 (Methods)

### addChild

> Components > ContainerComponent > PopupDiv > Method > addChild

**Description**

스크립트에서 동적으로 생성한 컴포넌트를 PopupDiv 의 자식 컴포넌트로 추가하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.addChild( strChildID, objComp )
```

**Parameters**

```
자식으로 추가될 컴포넌트의 ID를 설정합니다.
```

**Return**

추가된 자식 컴포넌트의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

**Remark**

- addChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- 스크립트에서 동적으로 생성한 컴포넌트만 추가할 수 있습니다.
  동적으로 생성한 컴포넌트가 아닌 경우 오동작이 발생할 수 있습니다.

- 자식 컴포넌트의 세부 속성은 addChild() 메소드로 자식 컴포넌트를 추가 후 설정해야 합니다.

- 자식 컴포넌트로 추가된 컴포넌트를 화면에 표시하기 위해서는 show() 메소드를 사용해야 합니다.

- 추가된 컴포넌트에 의해 부모 컴포넌트의 스크롤바가 갱신되야 할 때는 resetScroll() 메소드를 사용해야 합니다.
  추가된 컴포넌트에 의해 스크롤바가 자동으로 갱신되지 않습니다.

- 동적으로 추가된 컴포넌트를 제거하기 위해서는 removeChild() 메소드를 사용해야 합니다.

- removeChild() 메소드로 제거된 컴포넌트를 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.

- Div, PopupDiv, Tabpagecontrol 에서 제공하는  addChild() 메소드는 form 컨트롤에 자식 컴포넌트를 추가합니다.
   this.Div00.addChild("mysubbutton", Button00);
  수행 시  this.Div00.form.Button00  로  접근 가능합니다.

**See Also**

PopupDiv.destroyPopupDiv.initPopupDiv.insertChildPopupDiv.-nexa-rtl-background-imagePopupDiv.removeChildPopupDiv.show


---

### addEvent

> Components > ContainerComponent > PopupDiv > Method > addEvent

**Description**

PopupDiv 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.addEvent( strEventID )
```

**Parameters**

```
PopupDiv 에 추가할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 추가에 성공하면 true 를 반환합니다.

이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- PopupDiv 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.


---

### addEventHandler

> Components > ContainerComponent > PopupDiv > Method > addEventHandler

**Description**

PopupDiv 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.addEventHandler( strEventID, objFunc, objTarget )
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

> Components > ContainerComponent > PopupDiv > Method > addEventHandlerLookup

**Description**

함수를 검색하여 PopupDiv 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

### clearEventHandler

> Components > ContainerComponent > PopupDiv > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.clearEventHandler( strEventID )
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

### closePopup

> Components > ContainerComponent > PopupDiv > Method > closePopup

**Description**

화면에 표시된 PopupDiv 를 닫는 메소드입니다.

**Syntax**

```javascript
PopupDiv.closePopup( [varReturnvalue] )
```

**Parameters**

```
PopupDiv 를 닫은 후 returnvalue 속성에 저장될 값을 설정합니다.
값을 설정하지 않으면 빈값이 returnvalue 속성에 저장됩니다.
```

**Return**

화면에 표시되어 있던 PopupDiv 닫기에 성공하면 "true"를 반환합니다.
화면에 PopupDiv 가 표시되어 있지 않거나 닫기에 실패하면 "false"를 반환합니다.

**Remark**

- closePopup() 메소드가 정상적으로 수행되면 PopupDiv 에서 oncloseup 이벤트가 발생합니다.

- trackPopup() 또는 trackPopupByComponent() 메소드 실행 시 콜백함수를 설정했다면 PopupDiv 가 닫힐 때 콜백함수에 varReturnvalue 값을 전달합니다.


---

### destroy

> Components > ContainerComponent > PopupDiv > Method > destroy

**Description**

스크립트에서 동적으로 생성한 PopupDiv 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.destroy()
```

**Parameters**

var bSucc = this.PopupDiv00.destroy();

**Return**

PopupDiv 이(가) 정상적으로 삭제되면 true 를 반환합니다.

PopupDiv 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 PopupDiv 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildPopupDiv.initPopupDiv.show


---

### findEventHandler

> Components > ContainerComponent > PopupDiv > Method > findEventHandler

**Description**

PopupDiv 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.findEventHandler( strEventID, objFunc, objTarget )
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

### getEventHandler

> Components > ContainerComponent > PopupDiv > Method > getEventHandler

**Description**

PopupDiv 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.getEventHandler( strEventID, nIdx )
```

**Parameters**

```
핸들러 함수를 얻을 이벤트의 ID를 설정합니다.
```

**Return**

지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.

지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.


---

### getOffsetBottom

> Components > ContainerComponent > PopupDiv > Method > getOffsetBottom

**Description**

부모 컴포넌트의 Top 위치를 기준으로 PopupDiv 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.getOffsetBottom();
```

**Parameters**

var nBottom = this.PopupDiv.getOffsetBottom();

**Return**

부모 컴포넌트의 Top 위치를 기준으로 PopupDiv 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 PopupDiv 의 bottom 값을 동적으로 계산합니다.


---

### getOffsetHeight

> Components > ContainerComponent > PopupDiv > Method > getOffsetHeight

**Description**

PopupDiv 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.getOffsetHeight();
```

**Parameters**

var nHeight = this.PopupDiv.getOffsetHeight();

**Return**

PopupDiv 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 PopupDiv 의 높이를 동적으로 계산합니다.


---

### getOffsetLeft

> Components > ContainerComponent > PopupDiv > Method > getOffsetLeft

**Description**

부모 컴포넌트의 Left 위치를 기준으로 PopupDiv 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.getOffsetLeft();
```

**Parameters**

var nleft = this.PopupDiv.getOffsetLeft();

**Return**

부모 컴포넌트의 Left 위치를 기준으로 PopupDiv 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 PopupDiv 의 left 값을 동적으로 계산합니다.


---

### getOffsetRight

> Components > ContainerComponent > PopupDiv > Method > getOffsetRight

**Description**

부모 컴포넌트의 Left 위치를 기준으로 PopupDiv 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.getOffsetRight();
```

**Parameters**

var nRight = this.PopupDiv.getOffsetRight();

**Return**

부모 컴포넌트의 Left 위치를 기준으로 PopupDiv 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 PopupDiv 의 right 값을 동적으로 계산합니다.


---

### getOffsetTop

> Components > ContainerComponent > PopupDiv > Method > getOffsetTop

**Description**

부모 컴포넌트의 Top 위치를 기준으로 PopupDiv 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.getOffsetTop();
```

**Parameters**

var nTop = this.PopupDiv.getOffsetTop();

**Return**

부모 컴포넌트의 Top 위치를 기준으로 PopupDiv 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 PopupDiv 의 top 값을 동적으로 계산합니다.


---

### getOffsetWidth

> Components > ContainerComponent > PopupDiv > Method > getOffsetWidth

**Description**

PopupDiv 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.getOffsetWidth();
```

**Parameters**

var nWidth = this.PopupDiv.getOffsetWidth();

**Return**

PopupDiv 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 PopupDiv 의 너비를 동적으로 계산합니다.


---

### getPixelBottom

> Components > ContainerComponent > PopupDiv > Method > getPixelBottom

**Description**

PopupDiv 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.getPixelBottom();
```

**Parameters**

var nbottom = this.PopupDiv.getPixelBottom();

**Return**

PopupDiv 의 bottom 속성값을 픽셀단위로 반환합니다.

bottom 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- bottom 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelHeight

> Components > ContainerComponent > PopupDiv > Method > getPixelHeight

**Description**

PopupDiv 의 height 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.getPixelHeight();
```

**Parameters**

var nheight = this.PopupDiv.getPixelHeight();

**Return**

PopupDiv 의 height 속성값을 픽셀단위로 반환합니다.

height 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- height 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelLeft

> Components > ContainerComponent > PopupDiv > Method > getPixelLeft

**Description**

PopupDiv 의 left 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.getPixelLeft();
```

**Parameters**

var nleft = this.PopupDiv.getPixelLeft();

**Return**

PopupDiv 의 left 속성값을 픽셀단위로 반환합니다.

left 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- left 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelRight

> Components > ContainerComponent > PopupDiv > Method > getPixelRight

**Description**

PopupDiv 의 right 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.getPixelRight();
```

**Parameters**

var nright = this.PopupDiv.getPixelRight();

**Return**

PopupDiv 의 right 속성값을 픽셀단위로 반환합니다.

right 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- right 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelTop

> Components > ContainerComponent > PopupDiv > Method > getPixelTop

**Description**

PopupDiv 의 top 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.getPixelTop();
```

**Parameters**

var ntop = this.PopupDiv.getPixelTop();

**Return**

PopupDiv 의 top 속성값을 픽셀단위로 반환합니다.

top 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- top 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelWidth

> Components > ContainerComponent > PopupDiv > Method > getPixelWidth

**Description**

PopupDiv 의 width 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.getPixelWidth();
```

**Parameters**

var nwidth = this.PopupDiv.getPixelWidth();

**Return**

PopupDiv 의 width 속성값을 픽셀단위로 반환합니다.

width 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- width 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### init

> Components > ContainerComponent > PopupDiv > Method > init

**Description**

스크립트로 PopupDiv 을(를) 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

**Parameters**

```
PopupDiv 의 ID를 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- 인수값에 기준 컴포넌트를 포함하면 PopupDiv 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 PopupDiv 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 PopupDiv 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

- 스크립트에서 동적으로 컴포넌트를 생성한 후에만 사용할 수 있습니다.
  동적으로 생성한 컴포넌트가 아닌 경우에는 오동작이 발생할수 있습니다.

- show() 메소드로 컴포넌트가 화면에 표시되면 초기화가 끝난 상태입니다.
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다.

- 동적으로 생성한 컴포넌트를 컨테이너 컴포넌트에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildPopupDiv.destroyPopupDiv.show


---

### insertChild

> Components > ContainerComponent > PopupDiv > Method > insertChild

**Description**

스크립트로 동적 생성한 컴포넌트를 PopupDiv 의 자식 컴포넌트로 특정 순서에 추가하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.insertChild( nIdx, strChildID, objComp )
```

**Parameters**

```
부모 컴포넌트에 추가 될 순서를 설정합니다.
"-1"로 설정할 경우 자식 컴포넌트 중 제일 마지막에 추가됩니다.
```

**Return**

추가된 자식 컴포넌트의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

**Remark**

- 자식 컴포넌트는 선언된 순서에 따라 화면에 표시됩니다.
  따라서 nIdx 값에 따라 추가되는 컴포넌트의 화면표시 순서가 정해집니다.
  컴포넌트가 겹칠 경우 nIdx 값이 작은 컴포넌트가 nIdx 값이 큰 컴포넌트에게 가려지게 됩니다.

- insertChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- 스크립트에서 동적으로 생성한 컴포넌트만 추가할 수 있습니다.
  동적으로 생성한 컴포넌트가 아닌 경우 오동작이 발생할 수 있습니다.

- 자식 컴포넌트의 세부 속성은 insertChild() 메소드로 자식 컴포넌트를 추가 후 설정해야 합니다.

- 자식 컴포넌트로 추가된 컴포넌트를 화면에 표시하기 위해서는 show() 메소드를 사용해야 합니다.

- 추가된 컴포넌트에 의해 부모 컴포넌트의 스크롤바가 갱신되야 할 때는 resetScroll() 메소드를 사용해야 합니다.
  추가된 컴포넌트에 의해 스크롤바가 자동으로 갱신되지 않습니다.

- 동적으로 추가된 컴포넌트를 제거하기 위해서는 removeChild() 메소드를 사용해야 합니다.

- removeChild() 메소드로 제거된 컴포넌트를 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.

**See Also**

PopupDiv.addChildPopupDiv.destroyPopupDiv.initPopupDiv.removeChildPopupDiv.show


---

### insertEventHandler

> Components > ContainerComponent > PopupDiv > Method > insertEventHandler

**Description**

PopupDiv 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

### isPopup

> Components > ContainerComponent > PopupDiv > Method > isPopup

**Description**

화면에 PopupDiv 가 표시되고 있는지 확인하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.isPopup()
```

**Parameters**

var bOpened = this.PopupDiv00.isPopup();

**Return**

PopupDiv 가 화면에 표시되고 있다면 "true"를 반환합니다.
PopupDiv 가 화면에 표시되고 있지 않다면 "false"를 반환합니다.


---

### move

> Components > ContainerComponent > PopupDiv > Method > move

**Description**

PopupDiv 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.move( vLeft, vTop [, vWidth, vHeight [, vRight, vBottom]] )
```

**Parameters**

```
PopupDiv 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* 값에 기준 컴포넌트를 포함하여 설정했을 때 :
pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 PopupDiv 의 left 가 결정됩니다.
비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 PopupDiv 의 left 가 결정됩니다.
```

**Return**

없음

**Remark**

- 인수값에 기준 컴포넌트를 포함하면 PopupDiv 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 PopupDiv 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 PopupDiv 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.


---

### reload

> Components > ContainerComponent > PopupDiv > Method > reload

**Description**

PopupDiv 에 url 속성으로 연결된 Form 을 다시 로딩하는 메서드입니다.

**Syntax**

```javascript
PopupDiv.reload()
```

**Parameters**

this.PopupDiv00.reload();

**Return**

없음

**Remark**

- url 속성으로 Form 이 연결되어 있을 경우만 메서드가 정상동작 합니다.
   PopupDiv 이 자체 콘텐츠로 구성되어 있는 경우는 메서드 실행 시 모든 콘텐츠가 삭제됩니다.

- PopupDiv 의 form 컨트롤에 정의된 reload() 메서드와 동일한 메서드입니다.

- 메서드 실행 시 연결된 Form 은 초기화 상태로 로딩됩니다.


◆ onbeforeclose, onclose 이벤트

- reload 메서드 실행 시 연결된 Form의 onbeforeclose, onclose 이벤트는 발생하지 않습니다.


---

### removeChild

> Components > ContainerComponent > PopupDiv > Method > removeChild

**Description**

PopupDiv 에 동적으로 추가된 컴포넌트를 제거하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.removeChild( strChildID )
```

**Parameters**

```
제거할 자식 컴포넌트의 ID를 설정합니다.
```

**Return**

컴포넌트 제거에 성공하면 제거된 컴포넌트의 오브젝트를 반환합니다.
컴포넌트 제거에 실패하면 "null"을 반환합니다.

**Remark**

- removeChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- addChild() 또는 insertChild() 메소드를 사용하여 동적으로 추가한 컴포넌트만 제거할 수 있습니다.
  동적으로 추가한 컴포넌트가 아닌 경우 오동작이 발생할 수 있습니다.

- 제거된 컴포넌트에 의해 부모 컴포넌트의 스크롤바가 갱신되야 할 때는 resetScroll() 메소드를 사용해야 합니다.
  제거된 컴포넌트에 의해 스크롤바가 자동으로 갱신되지 않습니다.

- removeChild() 메소드로 제거된 컴포넌트를 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.

**See Also**

PopupDiv.addChildPopupDiv.destroyPopupDiv.initPopupDiv.insertChildPopupDiv.show


---

### removeEvent

> Components > ContainerComponent > PopupDiv > Method > removeEvent

**Description**

PopupDiv 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.removeEvent( strEventID )
```

**Parameters**

```
PopupDiv 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 삭제에 성공하면 true 를 반환합니다.

이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- PopupDiv 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- PopupDiv 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.


---

### removeEventHandler

> Components > ContainerComponent > PopupDiv > Method > removeEventHandler

**Description**

PopupDiv 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.removeEventHandler( strEventID, objFunc, objTarget )
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

> Components > ContainerComponent > PopupDiv > Method > removeEventHandlerLookup

**Description**

PopupDiv 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

> Components > ContainerComponent > PopupDiv > Method > resize

**Description**

PopupDiv 의 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.resize( vWidth, vHeight )
```

**Parameters**

```
PopupDiv 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.
음수값을 설정할 수 없습니다.

* 값에 기준 컴포넌트를 포함하여 설정했을 때 :
pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 PopupDiv 의 width 가 결정됩니다.
비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 PopupDiv 의 width 가 결정됩니다.
```

**Return**

없음

**Remark**

- PopupDiv 의 left 속성값이 null 이 아니면 resize() 메소드 실행 후 PopupDiv 의 우측 위치가 변경됩니다.
  또한, 메소드 실행 후 right 속성값은 null 이 됩니다.

- PopupDiv 의 left 속성값이 null 이면 resize() 메소드 실행 후 PopupDiv 의 좌측 위치가 변경됩니다.
  또한, 메소드 실행 후 left 속성값은 null 로 유지됩니다.

- PopupDiv 의 top 속성값이 null 이 아니면 resize() 메소드 실행 후 PopupDiv 의 하단 위치가 변경됩니다.
  또한, 메소드 실행 후 bottom 속성값은 null 이 됩니다.

- PopupDiv 의 top 속성값이 null 이면 resize() 메소드 실행 후 PopupDiv 의 상단 위치가 변경됩니다.
  또한, 메소드 실행 후 top 속성값은 null 로 유지됩니다.

- 인수값에 기준 컴포넌트를 포함하면 PopupDiv 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vWidth, vHeight 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 PopupDiv 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 PopupDiv 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.


---

### setContents

> Components > ContainerComponent > PopupDiv > Method > setContents

**Description**

PopupDiv 의 내부 구성 컨텐츠를 동적으로 설정하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.setContents( strCont );
```

**Parameters**

```
PopupDiv 의 내부 구성 컨텐츠 정보를 XML 형태의 문자열로 설정합니다.

"<Layout> ... </Layout>" 형태로 레이아웃 태그를 포함하여 설정하여야 합니다.

컨텐츠 정보에 User Property 를 포함할 수 있습니다.
컨텐츠 정보에 Invisible Object, Bind Object, InitValue Object 는 포함할 수 없습니다.
```

**Return**

컨텐츠 생성에 성공하면 true 를 반환합니다.
컨텐츠 생성에 실패하면 false 를 반환합니다.

문자열 파싱 중 오류가 발생하거나 잘못된 컴포넌트(오타 포함) 정의에 의해 오류가 발생할 경우 컨텐츠 생성에 실패하게 됩니다.

**Remark**

- setContents() 메소드는 동기(Sync)로 수행되며 메소드 수행이 완료될 때까지 스크립트 수행이 중단됩니다.


---

### setEventHandler

> Components > ContainerComponent > PopupDiv > Method > setEventHandler

**Description**

PopupDiv 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.setEventHandler( strEventID, objFunc, objTarget )
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

> Components > ContainerComponent > PopupDiv > Method > setEventHandlerLookup

**Description**

PopupDiv 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

### setOffsetBottom

> Components > ContainerComponent > PopupDiv > Method > setOffsetBottom

**Description**

부모 컴포넌트의 Top 위치를 기준으로 PopupDiv 의 bottom 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.setOffsetBottom( nBottom );
```

**Parameters**

```
부모 컴포넌트의 Top 위치를 기준으로 PopupDiv 의 bottom 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 PopupDiv 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > PopupDiv 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > PopupDiv 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > PopupDiv 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.


---

### setOffsetHeight

> Components > ContainerComponent > PopupDiv > Method > setOffsetHeight

**Description**

PopupDiv 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.setOffsetHeight( nHeight );
```

**Parameters**

```
PopupDiv 의 높이를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 PopupDiv 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > PopupDiv 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > PopupDiv 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > PopupDiv 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.


---

### setOffsetLeft

> Components > ContainerComponent > PopupDiv > Method > setOffsetLeft

**Description**

부모 컴포넌트의 Left 위치를 기준으로 PopupDiv 의 left 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.setOffsetLeft( nLeft );
```

**Parameters**

```
부모 컴포넌트의 Left 위치를 기준으로 PopupDiv 의 left 값을 픽셀단위의 숫자로 설정합니다
```

**Return**

없음

**Remark**

- 메소드 실행 전 PopupDiv 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > PopupDiv 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > PopupDiv 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, right 속성이 설정됩니다.
   > PopupDiv 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.


---

### setOffsetRight

> Components > ContainerComponent > PopupDiv > Method > setOffsetRight

**Description**

부모 컴포넌트의 Left 위치를 기준으로 PopupDiv 의 right 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.setOffsetRight( nRight );
```

**Parameters**

```
부모 컴포넌트의 Left 위치를 기준으로 PopupDiv 의 right 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 PopupDiv 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > PopupDiv 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > PopupDiv 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > PopupDiv 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.


---

### setOffsetTop

> Components > ContainerComponent > PopupDiv > Method > setOffsetTop

**Description**

부모 컴포넌트의 Top 위치를 기준으로 PopupDiv 의 top 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.setOffsetTop( nTop );
```

**Parameters**

```
부모 컴포넌트의 Top 위치를 기준으로 PopupDiv 의 top 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 PopupDiv 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > PopupDiv 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > PopupDiv 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, bottom 속성이 설정됩니다.
   > PopupDiv 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.


---

### setOffsetWidth

> Components > ContainerComponent > PopupDiv > Method > setOffsetWidth

**Description**

PopupDiv 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.setOffsetWidth( nWidth );
```

**Parameters**

```
PopupDiv 의 너비를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 PopupDiv 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > PopupDiv 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > PopupDiv 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > PopupDiv 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.


---

### show

> Components > ContainerComponent > PopupDiv > Method > show

**Description**

스크립트로 동적 생성한 PopupDiv 을(를) 화면에 표시하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.show()
```

**Parameters**

this.PopupDiv00.show();

**Return**

없음

**Remark**

- show() 메소드는 컴포넌트가 폼 또는 컨테이너 컴포넌트의 자식 컴포넌트로 등록된 상태에서 사용이 가능합니다.
  자식 컴포넌트로 등록된 상태가 아닌 경우에는 오동작이 발생할 수 있습니다.

- 컴포넌트를 컨테이너에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildPopupDiv.destroyPopupDiv.init


---

### trackPopup

> Components > ContainerComponent > PopupDiv > Method > trackPopup

**Description**

PopupDiv 를 특정 위치에 팝업으로 표시하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.trackPopup( nXpos, nYpos  [,nWidth ,nHeight [,strCallBackFunc [,bCapture]]] )
```

**Parameters**

```
부모 Frame 의 좌상단을 기준으로 PopupDiv 가 표시될 위치의 x 좌표를 설정합니다.

PopupDiv 의 left 가 nXpos 값으로 적용됩니다.
PopupDiv 가 화면에서 잘려서 표시될 경우 nXpos 값이 자동으로 변경됩니다.
```

**Return**

strCallbackFunc 파라미터값을 설정하지 않은 경우에만 반환값이 있습니다.

Promise 오브젝트를 반환합니다.
Promise 오브젝트는 자바스크립트 표준 내장 객체입니다.
내부적으로 resolve 수행 시점은 PopupDiv가 닫히는 시점입니다.

**Remark**

- PopupDiv 가 화면에 표시된 상태에서 trackPopup() 메소드를 다시 호출하면 에러가 발생합니다.
  trackPopup() 메소드를 실행하기 전 isPopup() 메소드를 사용하여 PopupDiv 의 표시여부를 확인하시는 것을 권장합니다.
- 화면에 표시된 PopupDiv 컴포넌트가 닫히는 과정에서 아직 닫히지 않은 PoppuDiv 컴포넌트의 trackPopup(또는 trackPopupByComponent) 메소드를 호출하는 경우에는 해당 메소드를 처리하지 않습니다.

- trackPopup() 메소드는 async 속성값과 관계없이 PopupDiv 를 비동기(ASync) 방식으로 화면에 표시합니다.
  즉, PopupDiv 의 화면 표시여부와 관계없이 trackPopup() 메소드 이후 스크립트를 수행합니다.

- PopupDiv 에 Capture 특성이 없다면 다른 컴포넌트 선택 시 PopupDiv 가 사라지면서 포커스가 다른 컴포넌트로 바로 이동합니다.
  PopupDiv 에 Capture 특성이 있다면 다른 컴포넌트 선택 시 첫번째 선택으로 PopupDiv 가 사라지고, 두번째 선택으로 포커스가 이동합니다.

- closePopup() 메소드에서 전달된 반환값은 strCallBackFunc 에 지정한 콜백함수로 전달됩니다.


---

### trackPopupByComponent

> Components > ContainerComponent > PopupDiv > Method > trackPopupByComponent

**Description**

인수로 전달된 컴포넌트를 기준으로 PopupDiv 를 특정 위치에 표시하는 메소드입니다.

**Syntax**

```javascript
PopupDiv.trackPopupByComponent( objComp, nXpos, nYpos [,nWidth ,nHeight [,strCallBackFunc [,bCapture]]] )
```

**Parameters**

```
좌표 계산의 기준이 되는 컴포넌트를 오브젝트로 설정합니다.
```

**Return**

strCallbackFunc 파라미터값을 설정하지 않은 경우에만 반환값이 있습니다.

Promise 오브젝트를 반환합니다.
Promise 오브젝트는 자바스크립트 표준 내장 객체입니다.
내부적으로 resolve 수행 시점은 PopupDiv가 닫히는 시점입니다.

**Remark**

- PopupDiv 가 화면에 표시된 상태에서 trackPopupByComponent() 메소드를 다시 호출하면 에러가 발생합니다.
  trackPopupByComponent() 메소드를 실행하기 전 isPopup() 메소드를 사용하여 PopupDiv 의 표시여부를 확인하시는 것을 권장합니다.
- 화면에 표시된 PopupDiv 컴포넌트가 닫히는 과정에서 아직 닫히지 않은 PoppuDiv 컴포넌트의 trackPopup(또는 trackPopupByComponent) 메소드를 호출하는 경우에는 해당 메소드를 처리하지 않습니다.

- trackPopupByComponent() 메소드는 async 속성값과 관계없이 PopupDiv 를 화면에 비동기(ASync) 방식으로 표시합니다.
  즉, PopupDiv 의 화면 표시여부와 관계없이 trackPopupByComponent() 메소드 이후 스크립트를 수행합니다.

- PopupDiv 에 Capture 특성이 없다면 다른 컴포넌트 선택 시 PopupDiv 가 사라지면서 포커스가 다른 컴포넌트로 바로 이동합니다.
  PopupDiv 에 Capture 특성이 있다면 다른 컴포넌트 선택 시 첫번째 선택으로 PopupDiv 가 사라지고, 두번째 선택으로 포커스가 이동합니다.

- closePopup() 메소드에서 전달된 반환값은 strCallBackFunc 에 지정한 콜백함수로 전달됩니다.


---

### 이벤트 (Events)

### onclick

> Components > ContainerComponent > PopupDiv > Event > onclick

**Description**

PopupDiv 영역 내에서 마우스 왼쪽버튼을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onclick(obj:nexacro.PopupDiv,e:nexacro.ClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- PopupDiv 영역 내에서 마우스의 lbuttondown 액션과 lbuttonup 액션이 발생되어야 합니다.

- 일부 컴포넌트는 아래 조건에서 onclick 이벤트가 발생하는 경우 ClickEventInfo 오브젝트의 좌표 관련 속성값은 모두 -1로 처리합니다.
  * 컴포넌트에 포커스가 주어진 상태에서 Basic Key Action에 설정된 키 입력 시
    - Space 또는 Enter 키: Button, FileDownload, ImageViewer   
    - Space 키: CheckBox  
  * hotkey 속성을 설정하고 해당 키 입력 시: Button, CheckBox  
  * defaultbutton, escapebutton 속성을 설정하고 Form에서 해당 키 입력 시: Button  
  * click 메소드 실행 시: Button


---

### oncloseup

> Components > ContainerComponent > PopupDiv > Event > oncloseup

**Description**

화면에 표시된 PopupDiv 가 닫힐 때 발생하는 이벤트입니다.

**Syntax**

```javascript
oncloseup(obj:nexacro.PopupDiv,e:nexacro.EventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 화면에 표시된 PopupDiv를 닫는 방법은 아래와 같습니다.
  1. closePopup() 메소드를 실행했을 경우.
  2. 마우스로 PopupDiv 영역이 아닌 부분을 선택했을 경우.


---

### oncontextmenu

> Components > ContainerComponent > PopupDiv > Event > oncontextmenu

**Description**

PopupDiv 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다.

**Syntax**

```javascript
oncontextmenu(obj:nexacro.PopupDiv,e:nexacro.ContextMenuEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 모바일 환경에서는 터치를 일정시간 유지하면 oncontextmenu 이벤트가 발생합니다.

- PopupDiv 컴포넌트는 마우스 우클릭이나 터치에 의해 표시되는 기본팝업메뉴가 제공되지 않습니다.

◆ Desktop WRE 제약

- Chrome, Edge, Firefox 브라우저에서 오른쪽 마우스 클릭 시 이벤트 핸들러 함수 내에서 PopupDiv 컴포넌트의 trackPopup 또는 trackPopupByComponent 메소드를 실행해 PopupDiv 컴포넌트가 표시되면 PopupDiv 컴포넌트의 oncontextmenu 이벤트가 발생합니다.
  넥사크로에서 의도된 동작은 아니며 브라우저 특성에 따라 이벤트가 발생하는 현상입니다.


---

### ondevicebuttonup

> Components > ContainerComponent > PopupDiv > Event > ondevicebuttonup

**Description**

모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondevicebuttonup(obj:nexacro.PopupDiv,e:nexacro.DeviceButtonEventInfo);
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

> Components > ContainerComponent > PopupDiv > Event > ondrag

**Description**

PopupDiv 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondrag(obj:nexacro.PopupDiv,e:nexacro.DragEventInfo);
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

- PopupDiv 영역 내에서 마우스의 LButtonDown 후 LButtonUp 액션 없이 마우스 이동 시 ondrag 이벤트가 발생합니다.

- 이벤트의 리턴값을 true 로 하여 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등

- 에디트 계열 컴포넌트에서 마우스로 드래그 시 화면의 문자열을 선택할 지 드래그 상태를 발생시킬지 여부는 이벤트의 리턴값으로 결정됩니다.


---

### ondragenter

> Components > ContainerComponent > PopupDiv > Event > ondragenter

**Description**

PopupDiv 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragenter(obj:nexacro.PopupDiv,e:nexacro.DragEventInfo);
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

- 드래그 상태를 유지하고 있으면 PopupDiv 영역으로 마우스 포인터가 들어올 때마다 이벤트가 발생합니다.


---

### ondragleave

> Components > ContainerComponent > PopupDiv > Event > ondragleave

**Description**

PopupDiv 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragleave(obj:nexacro.PopupDiv,e:nexacro.DragEventInfo);
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

- 드래그 상태를 유지하고 있으면 PopupDiv 영역에서 마우스 포인터가 나갈 때마다 이벤트가 발생합니다.


---

### ondragmove

> Components > ContainerComponent > PopupDiv > Event > ondragmove

**Description**

PopupDiv 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragmove(obj:nexacro.PopupDiv,e:nexacro.DragEventInfo);
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

- 드래그 상태를 유지하고 있으면 PopupDiv 영역 내에서 마우스 포인터가 움직일 때마다 이벤트가 발생합니다.


---

### ondrop

> Components > ContainerComponent > PopupDiv > Event > ondrop

**Description**

PopupDiv 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondrop(obj:nexacro.PopupDiv,e:nexacro.DragEventInfo);
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

- PopupDiv 영역 내에서 드래그 상태인 마우스의 LButtonUp 액션 발생 시 ondrop 이벤트가 발생합니다.

- 넥사크로에서 발생한 드래그 또는 어플리케이션 외부에서 파일을 드래그 했을 때 ondrop 이벤트를 발생시킬 수 있습니다.

- 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등


---

### onhscroll

> Components > ContainerComponent > PopupDiv > Event > onhscroll

**Description**

PopupDiv 의 수평 스크롤바를 스크롤 했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onhscroll(obj:nexacro.PopupDiv,e:nexacro.ScrollEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onkeydown

> Components > ContainerComponent > PopupDiv > Event > onkeydown

**Description**

PopupDiv 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkeydown(obj:nexacro.PopupDiv,e:nexacro.KeyEventInfo);
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

- 조합키 [Ctrl+Right/Left] 다운 : 좌/우 스크롤 처리  

- 조합키 [Ctrl+Down/Up] 다운 : 상/하 스크롤 처리


---

### onkeyup

> Components > ContainerComponent > PopupDiv > Event > onkeyup

**Description**

PopupDiv 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkeyup(obj:nexacro.PopupDiv,e:nexacro.KeyEventInfo);
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

> Components > ContainerComponent > PopupDiv > Event > onkillfocus

**Description**

PopupDiv 에서 포커스가 나갈  때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkillfocus(obj:nexacro.PopupDiv,e:nexacro.KillFocusEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 서로 다른 애플리케이션 단위로 포커스가 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showModal(), open() 등의 메소드로 팝업된 Frame 으로 포커스가 이동하는 경우 PopupDiv 에서 포커스 관련 이벤트가 발생하지 않습니다.
   또한, alert(), confirm() 메소드로 표시된 팝업으로 포커스가 이동하는 경우도 PopupDiv 에서 포커스 관련 이벤트가 발생하지 않습니다.


---

### onlbuttondown

> Components > ContainerComponent > PopupDiv > Event > onlbuttondown

**Description**

PopupDiv 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onlbuttondown(obj:nexacro.PopupDiv,e:nexacro.MouseEventInfo);
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

- PopupDiv 영역 내에서 마우스의 LButtonDown 액션이 발생하면 이벤트가 발생합니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

**Basic Action**

＊ pseudo 표시

**Default Action**

＊ 컴포넌트 포커스 처리


---

### onlbuttonup

> Components > ContainerComponent > PopupDiv > Event > onlbuttonup

**Description**

PopupDiv 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onlbuttonup(obj:nexacro.PopupDiv,e:nexacro.MouseEventInfo);
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

### onmousedown

> Components > ContainerComponent > PopupDiv > Event > onmousedown

**Description**

PopupDiv 영역 내에서 마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 눌렸을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmousedown(obj:nexacro.PopupDiv,e:nexacro.MouseEventInfo);
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


---

### onmouseenter

> Components > ContainerComponent > PopupDiv > Event > onmouseenter

**Description**

PopupDiv 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmouseenter(obj:nexacro.PopupDiv,e:nexacro.MouseEventInfo);
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

> Components > ContainerComponent > PopupDiv > Event > onmouseleave

**Description**

PopupDiv 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmouseleave(obj:nexacro.PopupDiv,e:nexacro.MouseEventInfo);
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

> Components > ContainerComponent > PopupDiv > Event > onmousemove

**Description**

PopupDiv 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmousemove(obj:nexacro.PopupDiv,e:nexacro.MouseEventInfo);
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

> Components > ContainerComponent > PopupDiv > Event > onmouseup

**Description**

마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 떼어질 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmouseup(obj:nexacro.PopupDiv,e:nexacro.MouseEventInfo);
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

- onmouseup 이벤트는 onmousedown 이벤트와 관계없이 마우스 나머지 버튼을 떼었을 때 마우스가 위치한 컴포넌트에서 발생합니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.


---

### onmousewheel

> Components > ContainerComponent > PopupDiv > Event > onmousewheel

**Description**

PopupDiv 영역 내에서 마우스의 휠버튼을 회전했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmousewheel(obj:nexacro.PopupDiv,e:nexacro.MouseWheelEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 다른 컴포넌트와 달리 PopupDiv 컴포넌트의 onmousewheel 이벤트는 상위 컴포넌트로 전파되지 않습니다.

- Control 키를 누른 상태에서 휠버튼을 회전시키면 환경에 따라 아래와 같이 Zoom 이 발생합니다.
   > Windows NRE 는 window 화면단위로 50%~200% 범위 내에서 10% 단위로 Zoom 이 변경됩니다.
   > Desktop WRE는 웹 브라우저에서 지원하는 범위/간격에 따라 Zoom이 변경됩니다.

- Zoom 상태로 전환될 때 PopupDiv 에서 이벤트가 발생하고 팝업이 닫히므로 스크립트 작성 시 주의하여야 합니다.
   이 때, 스크롤은 처리되지 않으며 e.ctrlkey 속성값이 true 로 설정됩니다.

**Default Action**

- PopupDiv 에 스크롤바가 있다면 이벤트 발생 후 스크롤을 이동시킵니다.


---

### onmove

> Components > ContainerComponent > PopupDiv > Event > onmove

**Description**

PopupDiv 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmove(obj:nexacro.PopupDiv,e:nexacro.MoveEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onpopup

> Components > ContainerComponent > PopupDiv > Event > onpopup

**Description**

PopupDiv 가 화면에 표시될 때 발생하는 Event 입니다.

**Syntax**

```javascript
onpopup(obj:nexacro.PopupDiv,e:nexacro.EventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onrbuttondown

> Components > ContainerComponent > PopupDiv > Event > onrbuttondown

**Description**

PopupDiv 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrbuttondown(obj:nexacro.PopupDiv,e:nexacro.MouseEventInfo);
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

> Components > ContainerComponent > PopupDiv > Event > onrbuttonup

**Description**

PopupDiv 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrbuttonup(obj:nexacro.PopupDiv,e:nexacro.MouseEventInfo);
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

> Components > ContainerComponent > PopupDiv > Event > onsetfocus

**Description**

PopupDiv 에 포커스가 들어올 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsetfocus(obj:nexacro.PopupDiv,e:nexacro.SetFocusEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 서로 다른 애플리케이션 단위로 포커스가 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showModal(), open() 등의 메소드로 팝업된 Frame 으로 포커스가 이동하는 경우 PopupDiv 에서 포커스 관련 이벤트가 발생하지 않습니다.
   또한, alert(), confirm() 메소드로 표시된 팝업으로 포커스가 이동하는 경우도 PopupDiv 에서 포커스 관련 이벤트가 발생하지 않습니다.

- open() 메소드로 오픈된 Modeless 창에서 부모창의 PopupDiv 에 setFocus() 메소드 실행 시 환경에 따라 동작에 차이가 있으므로 주의하여야 합니다.
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

> Components > ContainerComponent > PopupDiv > Event > onsize

**Description**

PopupDiv 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsize(obj:nexacro.PopupDiv,e:nexacro.SizeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### ontouchend

> Components > ContainerComponent > PopupDiv > Event > ontouchend

**Description**

PopupDiv 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchend(obj:nexacro.PopupDiv,e:nexacro.TouchEventInfo);
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

> Components > ContainerComponent > PopupDiv > Event > ontouchmove

**Description**

PopupDiv 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchmove(obj:nexacro.PopupDiv,e:nexacro.TouchEventInfo);
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

> Components > ContainerComponent > PopupDiv > Event > ontouchstart

**Description**

PopupDiv 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchstart(obj:nexacro.PopupDiv,e:nexacro.TouchEventInfo);
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

> Components > ContainerComponent > PopupDiv > Event > onvscroll

**Description**

PopupDiv 의 수직 스크롤바를 스크롤 했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onvscroll(obj:nexacro.PopupDiv,e:nexacro.ScrollEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---
