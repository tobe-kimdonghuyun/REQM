# nexacroN V24 — Graphics

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 396개

---

## Components > Component > Graphics

### Graphics

> Components > Component > Graphics

**Description**

도형, 선, 이미지, 경로, 텍스트 등의 Graphics 오브젝트를 사용하기 위한 컴포넌트입니다.

**Remark**

- Graphics 컴포넌트에 하위 오브젝트로 GraphicsGroup, GraphicsRect, GraphicsEllipse, GraphicsImage, GraphicsPaths, GraphicsPath, GraphicsLine, GraphicsText 오브젝트를 한 개 이상 추가할 수 있습니다.

**Property**

| Name | Description |
| --- | --- |
| background | Graphics 의 배경 영역을 설정하는 속성입니다. |
| border-radius | Graphics 의 모서리 모양을 설정하는 속성입니다. |
| bottom | Graphics 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다. |
| box-shadow | Graphics 에 그림자 효과를 설정하는 속성입니다. |
| cssclass | Graphics 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다. |
| enable | Graphics 의 사용가능 여부를 설정하는 속성입니다. |
| enableevent | Graphics 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다. |
| flexgrow | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축) 여백을 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다. |
| flexshrink | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 영역이 컨테이너 영역을 초과하지 않도록 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다. |
| height | Graphics 을(를) 표시하기 위한 높이를 설정하는 속성입니다. |
| id | Graphics의 고유 식별자를 설정하는 속성입니다. |
| initvalueid | Graphics 에 적용될 InitValue 의 ID 를 설정하는 속성입니다. |
| layoutorder | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 순서를 설정합니다. |
| left | Graphics 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다. |
| maxheight | Graphics 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다. |
| maxwidth | Graphics 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다. |
| minheight | Graphics 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다. |
| minwidth | Graphics 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다. |
| name | Graphics 의 이름을 설정하는 속성입니다. |
| -nexa-border | Graphics 의 테두리를 설정하는 속성입니다. |
| -nexa-rtl-background-image | Graphics 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| opacity | Graphics 영역의 투명도를 설정하는 속성입니다. |
| parent | Graphics 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| positionstep | 부모 오브젝트가 화면분할기능을 사용할 때 Graphics 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다. |
| right | Graphics 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다. |
| tablecellarea | Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다. |
| taborder | 탭키 입력으로 컴포넌트간 포커스를 이동할 때 Graphics 의 순서를 설정하는 속성입니다. |
| tabstop | 탭키 입력으로 컴포넌트간 포커스를 이동할 때 Graphics 이(가) 포커스를 받을 지 여부를 설정하는 속성입니다. |
| top | Graphics 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다. |
| visible | Graphics 이(가) 화면에 표시될지 여부를 설정하는 속성입니다. |
| width | Graphics 을(를) 표시하기 위한 너비를 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addChild | Graphics 오브젝트를 Graphics 컴포넌트에 자식으로 추가하는 메소드입니다. |
| addEvent | Graphics 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| addEventHandler | Graphics 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 Graphics 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| bringToFront | 부모가 동일한 컴포넌트 중 Graphics 이(가) 화면의 제일 앞에 표시되게 합니다. |
| bringToPrev | 부모가 동일한 컴포넌트 중 Graphics 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| clear | Graphics 에 추가된 오브젝트를 메모리에서 완전히 삭제하는 메소드입니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 Graphics 을(를) 삭제하는 메소드입니다. |
| findEventHandler | Graphics 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getAllObjects | Graphics 에 추가된 모든 하위 오브젝트를 배열로 반환하는 메소드입니다. |
| getEventHandler | Graphics 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| getFirstChild | Graphics 에 추가된 오브젝트 중 첫번째 오브젝트를 반환하는 메소드입니다. |
| getLastChild | Graphics 에 추가된 오브젝트 중 마지막 오브젝트를 반환하는 메소드입니다. |
| getNextObject | 특정 ID 에 해당하는 하위 오브젝트의 다음 순서 오브젝트를 반환하는 메소드입니다. |
| getObjectByID | Graphics 에 추가된 오브젝트 중 특정 ID 에 해당하는 오브젝트를 반환하는 메소드입니다. |
| getOffsetBottom | 부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetHeight | Graphics 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetLeft | 부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetRight | 부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetTop | 부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetWidth | Graphics 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getPixelBottom | Graphics 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelHeight | Graphics 의 height 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelLeft | Graphics 의 left 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelRight | Graphics 의 right 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelTop | Graphics 의 top 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelWidth | Graphics 의 width 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPrevObject | 특정 ID 에 해당하는 하위 오브젝트의 이전 순서 오브젝트를 반환하는 메소드입니다. |
| hitTest | 인수로 전달된 좌표위치에 표시된 Graphics 오브젝트를 반환하는 메소드입니다. |
| hitTestAll | 인수로 전달된 좌표위치에 표시된 Graphics 오브젝트를 모두 반환하는 메소드입니다. |
| indexOf | Graphics 에 추가된 오브젝트 중 특정 ID 에 해당하는 오브젝트의 인덱스를 반환하는 메소드입니다. |
| init | 스크립트로 Graphics 을(를) 동적 생성한 후에 초기화하는 메소드입니다. |
| insertChild | Graphics 오브젝트를 Graphics 컴포넌트의 특정 위치에 자식으로 삽입하는 메소드입니다. |
| insertEventHandler | Graphics 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| move | Graphics 의 위치와 크기를 변경하는 메소드입니다. |
| moveToNext | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Graphics 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| moveToPrev | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Graphics 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| redraw | Graphics 의 변경사항을 화면에 반영하는 메소드입니다. |
| removeChild | Graphics 의 자식 오브젝트 중 특정 ID 의 Graphics 오브젝트를 제거하는 메소드입니다. |
| removeEvent | Graphics 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| removeEventHandler | Graphics 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | Graphics 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| resize | Graphics 의 크기를 변경하는 메소드입니다. |
| sendToBack | 부모가 동일한 컴포넌트 중 Graphics 이(가) 화면의 제일 뒤에 표시되게 합니다. |
| sendToNext | 부모가 동일한 컴포넌트 중 Graphics 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| setEventHandler | Graphics 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | Graphics 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| setFocus | Graphics 에 포커스를 설정하는 메서드입니다. |
| setOffsetBottom | 부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 bottom 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetHeight | Graphics 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetLeft | 부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 left 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetRight | 부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 right 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetTop | 부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 top 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetWidth | Graphics 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| show | 스크립트로 동적 생성한 Graphics 을(를) 화면에 표시하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onclick | Graphics 영역 내에서 마우스 왼쪽버튼을 클릭했을 때 발생하는 이벤트입니다. |
| ondblclick | Graphics 영역 내에서 마우스 왼쪽버튼을 더블클릭 했을 때 발생하는 이벤트입니다. |
| ondevicebuttonup | 모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다. |
| ondrag | Graphics 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다. |
| ondragenter | Graphics 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| ondragleave | Graphics 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| ondragmove | Graphics 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| ondrop | Graphics 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다. |
| onkeydown | Graphics 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다. |
| onkeyup | Graphics 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다. |
| onkillfocus | Graphics 에서 포커스가 나갈  때 발생하는 이벤트입니다. |
| onlbuttondown | Graphics 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| onlbuttonup | Graphics 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| onmousedown | Graphics 영역 내에서 마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 눌렸을 때 발생하는 이벤트입니다. |
| onmouseenter | Graphics 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| onmouseleave | Graphics 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| onmousemove | Graphics 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| onmouseup | 마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 떼어질 때 발생하는 이벤트입니다. |
| onmove | Graphics 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| onrbuttondown | Graphics 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| onrbuttonup | Graphics 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| onsetfocus | Graphics 에 포커스가 들어올 때 발생하는 이벤트입니다. |
| onsize | Graphics 의 크기가 변경됐을 때 발생하는 이벤트입니다. |
| ontouchend | Graphics 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다. |
| ontouchmove | Graphics 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다. |
| ontouchstart | Graphics 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### -nexa-border

> Components > Component > Graphics > Property > -nexa-border

**Description**

Graphics 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.border[= strborder]
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
this.Graphics00.border = "1px solid #999999";
this.Graphics00.border = "1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999";
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

### -nexa-rtl-background-image

> Components > Component > Graphics > Property > -nexa-rtl-background-image

**Description**

Graphics 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.-nexa-rtl-background-image
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

> Components > Component > Graphics > Property > background

**Description**

Graphics 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.background[= strbackground]
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
this.Graphics00.background = "#ffffaa";
this.Graphics00.background = ""URL('./images/smiley.gif')" no-repeat center center #ffffaa";
this.Graphics00.background = ""URL('./images/smiley.gif')" no-repeat center center /auto #ffffaa";
this.Graphics00.background = ""URL('./images/smiley.gif')" no-repeat center center /15px 15% #ffffaa";
this.Graphics00.background = "linear-gradient( red , blue , yellow )";
this.Graphics00.background = "linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0))";
this.Graphics00.background = ""URL('./images/smiley.gif')" border-box border-box #ffffaa";
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

"left" 설정 시 Graphics 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 Graphics 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 Graphics 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 Graphics 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 Graphics 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 Graphics 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
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

0 보다 작거나 100 보다 큰 값을 설정 시 Graphics 의 영역을 벗어난 가상의 위치로 적용됩니다.

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
예를 들어 <angle> 값이 "to left" 이면 Graphics 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 Graphics 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

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

0 보다 작거나 100 보다 큰 값을 설정 시 Graphics 의 영역을 벗어난 가상의 위치로 적용됩니다.
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
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 Graphics 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

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

> Components > Component > Graphics > Property > border-radius

**Description**

Graphics 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.borderRadius[= strborderradius]
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
this.Graphics00.borderRadius = "10px";
this.Graphics00.borderRadius = "5px 6px 10px / 5px 10px";
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

> Components > Component > Graphics > Property > bottom

**Description**

Graphics 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.bottom[= nBottom]
```

**Setting Syntax**

```javascript
nBottom ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Graphics00.bottom = 10; 
this.Graphics00.bottom = "10px"; 
this.Graphics00.bottom = "10%"; 
this.Graphics00.bottom = "Button00:10px"; 
this.Graphics00.bottom = "Button00:10%";
```
- **`<strCompID>`** — Graphics 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Graphics 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Graphics 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — Graphics 의 하단 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 bottom 속성값을 기준으로 Graphics의 하단 위치 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 Graphics의 하단 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Graphics의 하단 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 Graphics의 하단 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 top 속성값을 기준으로 Graphics의 하단 위치 결정
- "%": <strCompID>의 height 속성값을 기준으로 Graphics의 하단 위치 결정
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

> Components > Component > Graphics > Property > box-shadow

**Description**

Graphics 에 그림자 효과를 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.boxShadow[= strbshadow]
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
this.Graphics00.boxShadow  = "10px 10px 10px #888888";
this.Graphics00.boxShadow  = "inset 10px 10px 10px 5px #888888";
```
- **`<inset>`** — 그림자 효과가 컴포넌트 안쪽에 표시됩니다.
생략 시에는 outset으로 동작합니다.
NRE는 지원하지 않습니다.
- **`<offset>`** — 그림자 효과가 표시되는 위치를 설정합니다.

Graphics 의 좌상단 위치를 기준으로 그림자 효과가 표시될 위치를 가로/세로 픽셀값으로 설정합니다.
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

### cssclass

> Components > Component > Graphics > Property > cssclass

**Description**

Graphics 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.cssclass[= strcssclass]
```

**Setting Syntax**

```javascript
strcssclass ::= <ClassName> [ , &ltClassName> ]*
```
```javascript
this.Graphics00.cssclass = "TestClass"; 
this.Graphics00.cssclass = "TestClass,TestClass2";
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

### enable

> Components > Component > Graphics > Property > enable

**Description**

Graphics 의 사용가능 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.enable[= benable]
```

**Setting Syntax**

```javascript
benable ::= 'true' | 'false'
```
```javascript
this.Graphics00.enable = true; 
this.Graphics00.enable = false;
```
- **`true`** — Graphics 을(를) 사용할 수 있게 설정합니다.
- **`false`** — Graphics 을(를) 사용할 수 없게 설정합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "disabled" Status 가 적용됩니다.

**Remark**

- enable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enable 속성값이 false 이면 컴포넌트가 화면에 표시되지만 포커스나 입력을 받을 수 없습니다.

- Div 와 같은 컨테이너 컴포넌트의 enable 속성값을 false 로 설정하면 자식 컴포넌트도 모두 Disable 됩니다.


---

### enableevent

> Components > Component > Graphics > Property > enableevent

**Description**

Graphics 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.enableevent[= bEvent]
```

**Setting Syntax**

```javascript
bEvent ::= 'true' | 'false'
```
```javascript
this.Graphics00.enableevent = true;  

this.Graphics00.enableevent = false;
```
- **`true`** — Graphics 에서 이벤트가 발생하도록 설정합니다.
- **`false`** — Graphics 에서 이벤트가 발생하지 않도록 설정합니다.

**Remark**

- enableevent 속성을 false 로 설정하면 이벤트 발생으로 인한 처리속도 지연과 화면 깜빡임을 방지할 수 있습니다.


---

### flexgrow

> Components > Component > Graphics > Property > flexgrow

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축) 여백을 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다.

**Syntax**

```javascript
Graphics.flexgrow[= fVal]
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

> Components > Component > Graphics > Property > flexshrink

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 영역이 컨테이너 영역을 초과하지 않도록 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다.

**Syntax**

```javascript
Graphics.flexshrink[= fVal]
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

### height

> Components > Component > Graphics > Property > height

**Description**

Graphics 을(를) 표시하기 위한 높이를 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.height[= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Graphics00.height = 10; 
this.Graphics00.height = "10px"; 
this.Graphics00.height = 10%"; 
this.Graphics00.height = Button00:10%";
```
- **`<strCompID>`** — Graphics 의 높이를 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Graphics 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Graphics 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 높이가 적용됩니다.
- **`<nVal>`** — Graphics 의 높이를 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.


* <strCompID> 값을 생략했을 때 :
- "px": Graphics의 높이 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 Graphics의 높이 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Graphics의 높이 결정
- "rem": MainFrame font-size 속성값을 기준으로 Graphics의 높이 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID> 값은 무시되고 설정값이 Graphics의 높이 결정
- "%": <strCompID>의 height 속성값을 기준으로 Graphics의 높이 결정
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

> Components > Component > Graphics > Property > id

**Description**

Graphics의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.id
```

**Setting Syntax**

- **`id`** — Graphics를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### initvalueid

> Components > Component > Graphics > Property > initvalueid

**Description**

Graphics 에 적용될 InitValue 의 ID 를 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.initvalueid[= strValueID]
```

**Setting Syntax**

- **`strValueID`** — InitValueDefinition 영역에 정의된 InitValue 파일에서 Graphics 에 적용할 항목의 ID 를 문자열로 설정합니다.

**Remark**

- Graphics 가 화면에 표시된 후에는 속성값을 설정하거나 변경 할 수 없습니다.
   Graphics 를 동적으로 생성 시 show() 메소드 실행 전에 속성값을 설정하여야 합니다.

- Screen 별로 Environment 의 initvaluefileid 속성을 각각 설정하면 Screen 에 따라 다른 초기값을 설정할 수 있습니다.

- InitValueDefinition 영역에 한 개 이상의 InitValue 파일을 정의할 수 있고,
   InitValue 파일에는 컴포넌트별로 여러개의 초기값 정의를 할 수 있습니다.


---

### layoutorder

> Components > Component > Graphics > Property > layoutorder

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 순서를 설정합니다.

**Syntax**

```javascript
Graphics.layoutorder[= nVal]
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

> Components > Component > Graphics > Property > left

**Description**

Graphics 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.left[= nLeft]
```

**Setting Syntax**

```javascript
nLeft ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Graphics00.left = 10; 
this.Graphics00.left = "10px"; 
this.Graphics00.left = "10%"; 
this.Graphics00.left = "Button00:10px"; 
this.Graphics00.left = "Button00:10%";
```
- **`<strCompID>`** — Graphics 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Graphics 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Graphics 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — Graphics 의 좌측 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 left 속성값을 기준으로 Graphics의 좌측 위치 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 Graphics의 좌측 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Graphics의 좌측 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 Graphics의 좌측 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 right 속성값을 기준으로 Graphics의 좌측 위치 결정
- "%": <strCompID>의 width 속성값을 기준으로 Graphics의 좌측 위치 결정
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

### maxheight

> Components > Component > Graphics > Property > maxheight

**Description**

Graphics 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.maxheight[= nMaxHeight]
```

**Setting Syntax**

```javascript
nMaxHeight ::= <nVal> ['px']
```
```javascript
this.Graphics00.maxheight = 20; 
this.Graphics00.maxheight = "20px";
```
- **`<nVal>`** — Graphics 이(가) 화면에 표시되는 높이의 최대값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- height 속성값이 maxheight 보다 크면 화면에 표시되는 Graphics 의 높이는 maxheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- maxheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxheight 속성값을 minheight 속성값보다 작게 설정하면 minheight 속성값이 maxheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 Graphics 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.


---

### maxwidth

> Components > Component > Graphics > Property > maxwidth

**Description**

Graphics 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.maxwidth[= nMaxWidth]
```

**Setting Syntax**

```javascript
nMaxWidth ::= <nVal> ['px']
```
```javascript
this.Graphics00.maxwidth = 20; 
this.Graphics00.maxwidth = "20px";
```
- **`<nVal>`** — Graphics 이(가) 화면에 표시되는 너비의 최대값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- width 속성값이 maxwidth 보다 크면 화면에 표시되는 Graphics 의 너비는 maxwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- maxwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxwidth 속성값을 minwidth 속성값보다 작게 설정하면 minwidth 속성값이 maxwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 Graphics 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.


---

### minheight

> Components > Component > Graphics > Property > minheight

**Description**

Graphics 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.minheight[= nMinHeight]
```

**Setting Syntax**

```javascript
nMinHeight ::= <nVal> ['px']
```
```javascript
this.Graphics00.minheight = 20; 
this.Graphics00.minheight = "20px";
```
- **`<nVal>`** — Graphics 이(가) 화면에 표시되는 높이의 최소값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- height 속성값이 minheight 보다 작다면 화면에 표시되는 Graphics 의 높이는 minheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- minheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minheight 속성값을 maxheight 속성값보다 크게 설정하면 maxheight 속성값이 minheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 Graphics 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.


---

### minwidth

> Components > Component > Graphics > Property > minwidth

**Description**

Graphics 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.minwidth[= nMinWidth]
```

**Setting Syntax**

```javascript
nMinWidth ::= <nVal> ['px']
```
```javascript
this.Graphics00.minwidth = 20; 
this.Graphics00.minwidth = "20px";
```
- **`<nVal>`** — Graphics 이(가) 화면에 표시되는 너비의 최소값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- width 속성값이 minwidth 보다 작으면 화면에 표시되는 Graphics 의 너비는 minwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- minwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minwidth 속성값을 maxwidth 속성값보다 크게 설정하면 maxwidth 속성값이 minwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 Graphics 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.


---

### name

> Components > Component > Graphics > Property > name

**Description**

Graphics 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### opacity

> Components > Component > Graphics > Property > opacity

**Description**

Graphics 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.opacity[= stropacity]
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8;
opacity : 80%;

* Script ( normal property )
this.Graphics00.opacity = "0.8";
this.Graphics00.opacity = 0.8;
this.Graphics00.opacity = "80%";
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

> Components > Component > Graphics > Property > parent

**Description**

Graphics 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Graphics.parent
```

**Setting Syntax**

```javascript
var objParent = this.Graphics00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- Graphics 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### positionstep

> Components > Component > Graphics > Property > positionstep

**Description**

부모 오브젝트가 화면분할기능을 사용할 때 Graphics 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.positionstep[= nStep]
```

**Setting Syntax**

```javascript
this.Graphics00.positionstep = 0; 
this.Graphics00.positionstep = -1;
```
- **`nStep`** — Graphics 이(가) 표시될 분할화면의 인덱스를 설정합니다.
"-1" 로 설정하면 모든 분할화면에 Graphics 이(가) 표시됩니다.

분할화면의 인덱스는 "0" 부터 시작합니다.

**Remark**

- positionstep 에 설정된 인덱스값과 일치하는 분할화면에만 컴포넌트가 표시됩니다.

- 분할화면에 표시되지 않는 컴포넌트의 visible 속성값은 "false"로 변경되지 않습니다.


---

### right

> Components > Component > Graphics > Property > right

**Description**

Graphics 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.right[= nRight]
```

**Setting Syntax**

```javascript
nRight ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Graphics00.right = 10; 
this.Graphics00.right = "10px"; 
this.Graphics00.right = "10%"; 
this.Graphics00.right = "Button00:10px"; 
this.Graphics00.right = "Button00:10%";
```
- **`<strCompID>`** — Graphics 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Graphics 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Graphics 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — Graphics 의 우측 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 right 속성값을 기준으로 Graphics의 우측 위치 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 Graphics의 우측 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Graphics의 우측 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 Graphics의 우측 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 left 속성값을 기준으로 Graphics의 우측 위치 결정
- "%": <strCompID>의 width 속성값을 기준으로 Graphics의 우측 위치 결정
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

### tablecellarea

> Components > Component > Graphics > Property > tablecellarea

**Description**

Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다.

**Syntax**

```javascript
Graphics.tablecellarea[= strArea]
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

> Components > Component > Graphics > Property > taborder

**Description**

탭키 입력으로 컴포넌트간 포커스를 이동할 때 Graphics 의 순서를 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.taborder[= nTabOrder]
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

> Components > Component > Graphics > Property > tabstop

**Description**

탭키 입력으로 컴포넌트간 포커스를 이동할 때 Graphics 이(가) 포커스를 받을 지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.tabstop[= bTabStop]
```

**Setting Syntax**

```javascript
bTabStop ::= 'true' | 'false'
```
- **`"true"`** — Graphics 이(가) 탭키 입력에 의한 포커스를 받습니다.
- **`"false"`** — Graphics 이(가) 탭키 입력에 의한 포커스를 받지 않습니다.

**Remark**

- tabstop 속성값이 "false"인 경우 taborder 속성값과 관계없이 포커스가 해당 컴포넌트를 건너뜁니다.

- tabstop 속성값에 관계없이 마우스로 직접 포커스를 주거나, setfocus() 메소드 사용 시 포커스를 갖습니다.

- Div 와 같은 컨테이너 컴포넌트에서 포커스를 받을 수 있는 자식 컴포넌트가 존재하면 해당 컴포넌트가 포커스를 갖습니다.


---

### top

> Components > Component > Graphics > Property > top

**Description**

Graphics 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.top[= nTop]
```

**Setting Syntax**

```javascript
nTop ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Graphics00.top = 10; 
this.Graphics00.top = "10px"; 
this.Graphics00.top = "10%"; 
this.Graphics00.top = "Button00:10px"; 
this.Graphics00.top = "Button00:10%";
```
- **`<strCompID>`** — Graphics 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Graphics 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Graphics 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — Graphics의 상단 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 top 속성값을 기준으로 Graphics의 상단 위치 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 Graphics의 상단 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Graphics의 상단 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 Graphics의 상단 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 bottom 속성값을 기준으로 Graphics의 상단 위치 결정
- "%": <strCompID>의 height 속성값을 기준으로 Graphics의 상단 위치 결정
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

### visible

> Components > Component > Graphics > Property > visible

**Description**

Graphics 이(가) 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
this.Graphics00.visible = true; 
this.Graphics00.visible = false;
```
- **`"true"`** — Graphics 을(를) 화면에 표시합니다.
- **`"false"`** — Graphics 을(를) 화면에 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하는 즉시 컴포넌트의 표시 여부가 화면에 반영됩니다.

- visible 속성값이 "false"이면 컴포넌트가 화면에 표시되지 않고, 포커스를 받을 수 없으므로 입력이나 사용이 불가능합니다.

- Div 와 같은 컨테이너 컴포넌트의 visible 속성값을 "false"로 설정하면 자식 컴포넌트도 함께 화면에 표시되지 않습니다.

- visible 속성값이 "false"이어도 컴포넌트는 존재하기 때문에 스크립트로 제어가 가능합니다.

- 넥사크로 스튜디오에서는 visible 속성값을 'false'로 설정해도 디자인화면에서 사라지지 않습니다.


---

### width

> Components > Component > Graphics > Property > width

**Description**

Graphics 을(를) 표시하기 위한 너비를 설정하는 속성입니다.

**Syntax**

```javascript
Graphics.width[= nWidth]
```

**Setting Syntax**

```javascript
nWidth ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Graphics00.width = 10; this.Graphics00.width = "10px"; 
this.Graphics00.width = "10%"; 
this.Graphics00.width = "Button00:10%";
```
- **`<strCompID>`** — Graphics 의 너비를 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Graphics 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Graphics 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 너비가 적용됩니다.
- **`<nVal>`** — Graphics 의 너비를 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": Graphics의 너비 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 Graphics의 너비 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Graphics의 너비 결정
- "rem": MainFrame font-size 속성값을 기준으로 Graphics의 너비 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID> 값은 무시되고 설정값이 Graphics의 너비 결정
- "%": <strCompID>의 width 속성값을 기준으로 Graphics의 너비 결정
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

### 메서드 (Methods)

### addChild

> Components > Component > Graphics > Method > addChild

**Description**

Graphics 오브젝트를 Graphics 컴포넌트에 자식으로 추가하는 메소드입니다.

**Syntax**

```javascript
Graphics.addChild( strID, objGObject )
```

**Parameters**

```
자식으로 추가하려는 Graphics 오브젝트의 ID 를 문자열로 설정합니다.
```

**Return**

Graphics 에 추가된 Graphics 오브젝트의 인덱스를 반환합니다.

**Remark**

- addChild() 메소드로 오브젝트가 추가되어도 화면에 오브젝트가 자동으로 표시되지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- addChild() 로 추가된 Graphics 오브젝트는 자식 오브젝트 중 순서상 마지막에 위치합니다.

- Graphics 오브젝트는 Graphics 컴포넌트에 추가된 순서대로 화면에 표시됩니다.
   따라서 Graphics 오브젝트가 동일위치일 경우 먼저 추가된 오브젝트는 뒤에 추가된 오브젝트에 가려집니다.


---

### addEvent

> Components > Component > Graphics > Method > addEvent

**Description**

Graphics 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**

```javascript
Graphics.addEvent( strEventID )
```

**Parameters**

```
Graphics 에 추가할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 추가에 성공하면 true 를 반환합니다.

이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- Graphics 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.


---

### addEventHandler

> Components > Component > Graphics > Method > addEventHandler

**Description**

Graphics 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
Graphics.addEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > Graphics > Method > addEventHandlerLookup

**Description**

함수를 검색하여 Graphics 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
Graphics.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

> Components > Component > Graphics > Method > bringToFront

**Description**

부모가 동일한 컴포넌트 중 Graphics 이(가) 화면의 제일 앞에 표시되게 합니다.

**Syntax**

```javascript
Graphics.bringToFront()
```

**Parameters**

this.Graphics.bringToFront();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToFront() 메소드는 Graphics 을(를) 가장 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 앞에 표시되게 됩니다.


---

### bringToPrev

> Components > Component > Graphics > Method > bringToPrev

**Description**

부모가 동일한 컴포넌트 중 Graphics 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**

```javascript
Graphics.bringToPrev()
```

**Parameters**

this.Graphics.bringToPrev();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToPrev() 메소드는 Graphics 을(를) 한단계 나중에 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 앞에 표시되게 됩니다.


---

### clear

> Components > Component > Graphics > Method > clear

**Description**

Graphics 에 추가된 오브젝트를 메모리에서 완전히 삭제하는 메소드입니다.

**Syntax**

```javascript
Graphics.clear()
```

**Return**

없음

**Remark**

- Graphics 에 추가된 오브젝트만 삭제되고 Graphics 는 삭제되지 않습니다.

- clear() 메소드로 오브젝트가 삭제되어도 화면에서 자동으로 사라지지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.


---

### clearEventHandler

> Components > Component > Graphics > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
Graphics.clearEventHandler( strEventID )
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

> Components > Component > Graphics > Method > destroy

**Description**

스크립트에서 동적으로 생성한 Graphics 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
Graphics.destroy()
```

**Parameters**

var bSucc = this.Graphics00.destroy();

**Return**

Graphics 이(가) 정상적으로 삭제되면 true 를 반환합니다.

Graphics 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 Graphics 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildGraphics.initGraphics.show


---

### findEventHandler

> Components > Component > Graphics > Method > findEventHandler

**Description**

Graphics 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
Graphics.findEventHandler( strEventID, objFunc, objTarget )
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

### getAllObjects

> Components > Component > Graphics > Method > getAllObjects

**Description**

Graphics 에 추가된 모든 하위 오브젝트를 배열로 반환하는 메소드입니다.

**Syntax**

```javascript
Graphics.getAllObjects()
```

**Return**

Graphics 에 추가된 모든 하위 오브젝트를 배열로 반환합니다.

**Remark**

- GraphicsGroup 에 속한 하위 오브젝트를 포함하여 Graphics 에 속한 모든 오브젝트를 반환합니다.


---

### getEventHandler

> Components > Component > Graphics > Method > getEventHandler

**Description**

Graphics 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
Graphics.getEventHandler( strEventID, nIdx )
```

**Parameters**

```
핸들러 함수를 얻을 이벤트의 ID를 설정합니다.
```

**Return**

지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.

지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.


---

### getFirstChild

> Components > Component > Graphics > Method > getFirstChild

**Description**

Graphics 에 추가된 오브젝트 중 첫번째 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
Graphics.getFirstChild()
```

**Return**

Graphics 에 추가된 첫번째 오브젝트를 반환합니다.

**Remark**

- Graphics 에 추가된 오브젝트는 추가된 순서대로 화면에 표시됩니다.
   따라서 오브젝트가 동일위치일 경우 먼저 추가된 오브젝트는 뒤에 추가된 오브젝트에 가려집니다.


---

### getLastChild

> Components > Component > Graphics > Method > getLastChild

**Description**

Graphics 에 추가된 오브젝트 중 마지막 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
Graphics.getLastChild()
```

**Return**

Graphics 에 추가된 마지막 오브젝트를 반환합니다.

**Remark**

- Graphics 에 추가된 오브젝트는 추가된 순서대로 화면에 표시됩니다.
   따라서 오브젝트가 동일위치일 경우 먼저 추가된 오브젝트는 뒤에 추가된 오브젝트에 가려집니다.


---

### getNextObject

> Components > Component > Graphics > Method > getNextObject

**Description**

특정 ID 에 해당하는 하위 오브젝트의 다음 순서 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
Graphics.getNextObject( strID )
```

**Parameters**

```
기준 오브젝트의 ID 를 문자열로 설정합니다.
```

**Return**

strID 에 해당하는 오브젝트의 다음 순서 오브젝트를 반환합니다.

다음 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.


---

### getObjectByID

> Components > Component > Graphics > Method > getObjectByID

**Description**

Graphics 에 추가된 오브젝트 중 특정 ID 에 해당하는 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
Graphics.getObjectByID( strID )
```

**Parameters**

```
얻으려 하는 오브젝트의 ID 를 문자열로 설정합니다.
```

**Return**

strID 에 해당하는 오브젝트를 반환합니다.

**Remark**

- GraphicsGroup 에 속한 하위 오브젝트를 포함하여 Graphics 에 속한 모든 오브젝트를 대상으로 검색합니다.


---

### getOffsetBottom

> Components > Component > Graphics > Method > getOffsetBottom

**Description**

부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Graphics.getOffsetBottom();
```

**Parameters**

var nBottom = this.Graphics.getOffsetBottom();

**Return**

부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 bottom 값을 동적으로 계산합니다.


---

### getOffsetHeight

> Components > Component > Graphics > Method > getOffsetHeight

**Description**

Graphics 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Graphics.getOffsetHeight();
```

**Parameters**

var nHeight = this.Graphics.getOffsetHeight();

**Return**

Graphics 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 Graphics 의 높이를 동적으로 계산합니다.


---

### getOffsetLeft

> Components > Component > Graphics > Method > getOffsetLeft

**Description**

부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Graphics.getOffsetLeft();
```

**Parameters**

var nleft = this.Graphics.getOffsetLeft();

**Return**

부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 left 값을 동적으로 계산합니다.


---

### getOffsetRight

> Components > Component > Graphics > Method > getOffsetRight

**Description**

부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Graphics.getOffsetRight();
```

**Parameters**

var nRight = this.Graphics.getOffsetRight();

**Return**

부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 right 값을 동적으로 계산합니다.


---

### getOffsetTop

> Components > Component > Graphics > Method > getOffsetTop

**Description**

부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Graphics.getOffsetTop();
```

**Parameters**

var nTop = this.Graphics.getOffsetTop();

**Return**

부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 top 값을 동적으로 계산합니다.


---

### getOffsetWidth

> Components > Component > Graphics > Method > getOffsetWidth

**Description**

Graphics 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Graphics.getOffsetWidth();
```

**Parameters**

var nWidth = this.Graphics.getOffsetWidth();

**Return**

Graphics 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 Graphics 의 너비를 동적으로 계산합니다.


---

### getPixelBottom

> Components > Component > Graphics > Method > getPixelBottom

**Description**

Graphics 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Graphics.getPixelBottom();
```

**Parameters**

var nbottom = this.Graphics.getPixelBottom();

**Return**

Graphics 의 bottom 속성값을 픽셀단위로 반환합니다.

bottom 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- bottom 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelHeight

> Components > Component > Graphics > Method > getPixelHeight

**Description**

Graphics 의 height 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Graphics.getPixelHeight();
```

**Parameters**

var nheight = this.Graphics.getPixelHeight();

**Return**

Graphics 의 height 속성값을 픽셀단위로 반환합니다.

height 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- height 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelLeft

> Components > Component > Graphics > Method > getPixelLeft

**Description**

Graphics 의 left 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Graphics.getPixelLeft();
```

**Parameters**

var nleft = this.Graphics.getPixelLeft();

**Return**

Graphics 의 left 속성값을 픽셀단위로 반환합니다.

left 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- left 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelRight

> Components > Component > Graphics > Method > getPixelRight

**Description**

Graphics 의 right 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Graphics.getPixelRight();
```

**Parameters**

var nright = this.Graphics.getPixelRight();

**Return**

Graphics 의 right 속성값을 픽셀단위로 반환합니다.

right 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- right 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelTop

> Components > Component > Graphics > Method > getPixelTop

**Description**

Graphics 의 top 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Graphics.getPixelTop();
```

**Parameters**

var ntop = this.Graphics.getPixelTop();

**Return**

Graphics 의 top 속성값을 픽셀단위로 반환합니다.

top 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- top 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelWidth

> Components > Component > Graphics > Method > getPixelWidth

**Description**

Graphics 의 width 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Graphics.getPixelWidth();
```

**Parameters**

var nwidth = this.Graphics.getPixelWidth();

**Return**

Graphics 의 width 속성값을 픽셀단위로 반환합니다.

width 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- width 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPrevObject

> Components > Component > Graphics > Method > getPrevObject

**Description**

특정 ID 에 해당하는 하위 오브젝트의 이전 순서 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
Graphics.getPrevObject( strID )
```

**Parameters**

```
기준 오브젝트의 ID 를 문자열로 설정합니다.
```

**Return**

strID 에 해당하는 오브젝트의 이전 순서 오브젝트를 반환합니다.

이전 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.


---

### hitTest

> Components > Component > Graphics > Method > hitTest

**Description**

인수로 전달된 좌표위치에 표시된 Graphics 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
Graphics.hitTest( nX, nY )
```

**Parameters**

```
오브젝트를 확인하려는 위치의 x 좌표값을 pixel 단위의 숫자로 설정합니다.

설정값은 Graphics 컴포넌트를 기준으로 처리됩니다.
```

**Return**

인수로 전달된 좌표위치에 표시된 Graphics 오브젝트 중 제일 위에 표시된 오브젝트를 반환합니다.

즉, 해당 위치에 표시된 Graphics 오브젝트 중 순서상 제일 마지막에 추가된 오브젝트를 반환합니다.

**Remark**

- 인수로 전달된 좌표위치에 존재하는 Graphics 오브젝트 판단기준은 각 Graphics 오브젝트의 isHitTest() 메소드 리턴값을 따릅니다.


---

### hitTestAll

> Components > Component > Graphics > Method > hitTestAll

**Description**

인수로 전달된 좌표위치에 표시된 Graphics 오브젝트를 모두 반환하는 메소드입니다.

**Syntax**

```javascript
Graphics.hitTestAll( nX, nY )
```

**Parameters**

```
오브젝트를 확인하려는 위치의 x 좌표값을 pixel 단위의 숫자로 설정합니다.

설정값은 Graphics 컴포넌트를 기준으로 처리됩니다.
```

**Return**

인수로 전달된 좌표위치에 표시된 모든 Graphics 오브젝트를 배열로 반환합니다.

**Remark**

- 인수로 전달된 좌표위치에 존재하는 Graphics 오브젝트 판단기준은 각 Graphics 오브젝트의 isHitTest() 메소드 리턴값을 따릅니다.


---

### indexOf

> Components > Component > Graphics > Method > indexOf

**Description**

Graphics 에 추가된 오브젝트 중 특정 ID 에 해당하는 오브젝트의 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
Graphics.indexOf( strID )
```

**Parameters**

```
인덱스를 얻으려 하는 오브젝트의 ID 를 문자열로 설정합니다.
```

**Return**

strID 에 해당하는 오브젝트의 인덱스를 반환합니다.


---

### init

> Components > Component > Graphics > Method > init

**Description**

스크립트로 Graphics 을(를) 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**

```javascript
Graphics.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

**Parameters**

```
Graphics 의 ID를 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- 인수값에 기준 컴포넌트를 포함하면 Graphics 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 Graphics 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 Graphics 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

- 스크립트에서 동적으로 컴포넌트를 생성한 후에만 사용할 수 있습니다.
  동적으로 생성한 컴포넌트가 아닌 경우에는 오동작이 발생할수 있습니다.

- show() 메소드로 컴포넌트가 화면에 표시되면 초기화가 끝난 상태입니다.
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다.

- 동적으로 생성한 컴포넌트를 컨테이너 컴포넌트에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildGraphics.destroyGraphics.show


---

### insertChild

> Components > Component > Graphics > Method > insertChild

**Description**

Graphics 오브젝트를 Graphics 컴포넌트의 특정 위치에 자식으로 삽입하는 메소드입니다.

**Syntax**

```javascript
Graphics.insertChild( nIdx, strID, objGObject )
```

**Parameters**

```
Graphics 오브젝트가 삽입될 위치의 인덱스를 숫자로 설정합니다.
```

**Return**

Graphics 컴포넌트에 자식으로 삽입된 Graphics 오브젝트의 인덱스를 반환합니다.

**Remark**

- insertChild() 메소드로 Graphics 오브젝트가 추가되어도 화면에 오브젝트가 자동으로 표시되지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- Graphics 오브젝트는 Graphics 컴포넌트에 추가된 순서대로 화면에 표시됩니다.
   따라서 Graphics 오브젝트가 동일위치일 경우 먼저 추가된 오브젝트는 뒤에 추가된 오브젝트에 가려집니다.


---

### insertEventHandler

> Components > Component > Graphics > Method > insertEventHandler

**Description**

Graphics 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
Graphics.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

> Components > Component > Graphics > Method > move

**Description**

Graphics 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
Graphics.move( vLeft, vTop [, vWidth, vHeight [, vRight, vBottom]] )
```

**Parameters**

```
Graphics 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* 값에 기준 컴포넌트를 포함하여 설정했을 때 :
pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 Graphics 의 left 가 결정됩니다.
비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Graphics 의 left 가 결정됩니다.
```

**Return**

없음

**Remark**

- 인수값에 기준 컴포넌트를 포함하면 Graphics 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 Graphics 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 Graphics 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.


---

### moveToNext

> Components > Component > Graphics > Method > moveToNext

**Description**

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Graphics 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**

```javascript
Graphics.moveToNext( objComp )
Graphics.moveToNext( strComp )
```

**Parameters**

```
기준이 되는 컴포넌트를 오브젝트로 설정합니다.
```

**Return**

없음

**Remark**

- 인수로 전달되는 기준 컴포넌트와 Graphics 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToNext() 메소드는 기준 컴포넌트보다 Graphics 이(가) 한단계 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 뒤에 표시되게 됩니다.


---

### moveToPrev

> Components > Component > Graphics > Method > moveToPrev

**Description**

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Graphics 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**

```javascript
Graphics.moveToPrev( objComp )
Graphics.moveToPrev( strComp )
```

**Parameters**

```
기준이 되는 컴포넌트를 오브젝트로 설정합니다.
```

**Return**

없음

**Remark**

- 인수로 전달되는 기준 컴포넌트와 Graphics 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToPrev() 메소드는 기준 컴포넌트보다 Graphics 이(가) 한단계 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 앞에 표시되게 됩니다.


---

### redraw

> Components > Component > Graphics > Method > redraw

**Description**

Graphics 의 변경사항을 화면에 반영하는 메소드입니다.

**Syntax**

```javascript
GraphicsControl.redraw( )
```

**Return**

없음

**Remark**

- Graphics 에 하위 오브젝트를 추가하거나 변경한 후 redraw() 메소드를 호출하여야 화면에 변경사항이 반영됩니다.


---

### removeChild

> Components > Component > Graphics > Method > removeChild

**Description**

Graphics 의 자식 오브젝트 중 특정 ID 의 Graphics 오브젝트를 제거하는 메소드입니다.

**Syntax**

```javascript
Graphics.removeChild( strID )
```

**Parameters**

```
제거하려는 Graphics 오브젝트의 ID 를 문자열로 설정합니다.
```

**Return**

Graphics 컴포넌트에서 제거된 Graphics 오브젝트를 반환합니다.

**Remark**

- removeChild() 메소드로 Graphics 오브젝트가 제거되어도 화면에 표시된 오브젝트가 자동으로 사라지지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- removeChild() 메소드로 제거된 Graphics 오브젝트를 메모리에서 삭제하려면 destroy() 메소드를 사용해야 합니다.


---

### removeEvent

> Components > Component > Graphics > Method > removeEvent

**Description**

Graphics 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**

```javascript
Graphics.removeEvent( strEventID )
```

**Parameters**

```
Graphics 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 삭제에 성공하면 true 를 반환합니다.

이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- Graphics 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- Graphics 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.


---

### removeEventHandler

> Components > Component > Graphics > Method > removeEventHandler

**Description**

Graphics 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
Graphics.removeEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > Graphics > Method > removeEventHandlerLookup

**Description**

Graphics 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
Graphics.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

> Components > Component > Graphics > Method > resize

**Description**

Graphics 의 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
Graphics.resize( vWidth, vHeight )
```

**Parameters**

```
Graphics 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.
음수값을 설정할 수 없습니다.

* 값에 기준 컴포넌트를 포함하여 설정했을 때 :
pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Graphics 의 width 가 결정됩니다.
비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Graphics 의 width 가 결정됩니다.
```

**Return**

없음

**Remark**

- Graphics 의 left 속성값이 null 이 아니면 resize() 메소드 실행 후 Graphics 의 우측 위치가 변경됩니다.
  또한, 메소드 실행 후 right 속성값은 null 이 됩니다.

- Graphics 의 left 속성값이 null 이면 resize() 메소드 실행 후 Graphics 의 좌측 위치가 변경됩니다.
  또한, 메소드 실행 후 left 속성값은 null 로 유지됩니다.

- Graphics 의 top 속성값이 null 이 아니면 resize() 메소드 실행 후 Graphics 의 하단 위치가 변경됩니다.
  또한, 메소드 실행 후 bottom 속성값은 null 이 됩니다.

- Graphics 의 top 속성값이 null 이면 resize() 메소드 실행 후 Graphics 의 상단 위치가 변경됩니다.
  또한, 메소드 실행 후 top 속성값은 null 로 유지됩니다.

- 인수값에 기준 컴포넌트를 포함하면 Graphics 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vWidth, vHeight 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 Graphics 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 Graphics 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.


---

### sendToBack

> Components > Component > Graphics > Method > sendToBack

**Description**

부모가 동일한 컴포넌트 중 Graphics 이(가) 화면의 제일 뒤에 표시되게 합니다.

**Syntax**

```javascript
Graphics.sendToBack()
```

**Parameters**

this.Graphics.sendToBack();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToBack() 메소드는 Graphics 을(를) 가장 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 뒤에 표시되게 됩니다


---

### sendToNext

> Components > Component > Graphics > Method > sendToNext

**Description**

부모가 동일한 컴포넌트 중 Graphics 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**

```javascript
Graphics.sendToNext()
```

**Parameters**

this.Graphics.sendToNext();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToNext() 메소드는 Graphics 을(를) 한단계 먼저 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 뒤에 표시되게 됩니다.


---

### setEventHandler

> Components > Component > Graphics > Method > setEventHandler

**Description**

Graphics 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
Graphics.setEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > Graphics > Method > setEventHandlerLookup

**Description**

Graphics 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
Graphics.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

> Components > Component > Graphics > Method > setFocus

**Description**

Graphics 에 포커스를 설정하는 메서드입니다.

**Syntax**

```javascript
Graphics.setFocus( [bMoveScroll] )
```

**Parameters**

```
부모 컴포넌트에 스크롤이 있을 경우, Graphics 기준으로 스크롤을 이동할지 여부를 설정합니다.

true: Graphics 이(가) 화면에 표시되도록 스크롤을 이동합니다.
false: Graphics 위치와 관계없이 스크롤을 이동하지 않습니다.

값을 지정하지 않으면 기본값은 true입니다.
```

**Return**

Graphics 이(가) 포커스를 얻기 전에 포커스를 가지고 있던 컴포넌트를 반환합니다.
이전에 포커스를 가진 컴포넌트가 없거나 메소드 실행에 실패한 경우에는 null을 반환합니다.

**Remark**

- enableaccessibility 속성값과 관계없이 전달된 파라미터값을 기준으로 동작합니다.


---

### setOffsetBottom

> Components > Component > Graphics > Method > setOffsetBottom

**Description**

부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 bottom 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Graphics.setOffsetBottom( nBottom );
```

**Parameters**

```
부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 bottom 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 Graphics 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Graphics 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Graphics 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Graphics 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.


---

### setOffsetHeight

> Components > Component > Graphics > Method > setOffsetHeight

**Description**

Graphics 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Graphics.setOffsetHeight( nHeight );
```

**Parameters**

```
Graphics 의 높이를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 Graphics 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Graphics 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Graphics 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Graphics 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.


---

### setOffsetLeft

> Components > Component > Graphics > Method > setOffsetLeft

**Description**

부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 left 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Graphics.setOffsetLeft( nLeft );
```

**Parameters**

```
부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 left 값을 픽셀단위의 숫자로 설정합니다
```

**Return**

없음

**Remark**

- 메소드 실행 전 Graphics 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Graphics 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Graphics 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, right 속성이 설정됩니다.
   > Graphics 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.


---

### setOffsetRight

> Components > Component > Graphics > Method > setOffsetRight

**Description**

부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 right 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Graphics.setOffsetRight( nRight );
```

**Parameters**

```
부모 컴포넌트의 Left 위치를 기준으로 Graphics 의 right 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 Graphics 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Graphics 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Graphics 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Graphics 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.


---

### setOffsetTop

> Components > Component > Graphics > Method > setOffsetTop

**Description**

부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 top 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Graphics.setOffsetTop( nTop );
```

**Parameters**

```
부모 컴포넌트의 Top 위치를 기준으로 Graphics 의 top 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 Graphics 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Graphics 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Graphics 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, bottom 속성이 설정됩니다.
   > Graphics 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.


---

### setOffsetWidth

> Components > Component > Graphics > Method > setOffsetWidth

**Description**

Graphics 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Graphics.setOffsetWidth( nWidth );
```

**Parameters**

```
Graphics 의 너비를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 Graphics 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Graphics 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Graphics 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Graphics 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.


---

### show

> Components > Component > Graphics > Method > show

**Description**

스크립트로 동적 생성한 Graphics 을(를) 화면에 표시하는 메소드입니다.

**Syntax**

```javascript
Graphics.show()
```

**Parameters**

this.Graphics00.show();

**Return**

없음

**Remark**

- show() 메소드는 컴포넌트가 폼 또는 컨테이너 컴포넌트의 자식 컴포넌트로 등록된 상태에서 사용이 가능합니다.
  자식 컴포넌트로 등록된 상태가 아닌 경우에는 오동작이 발생할 수 있습니다.

- 컴포넌트를 컨테이너에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildGraphics.destroyGraphics.init


---

### 이벤트 (Events)

### onclick

> Components > Component > Graphics > Event > onclick

**Description**

Graphics 영역 내에서 마우스 왼쪽버튼을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onclick(obj:nexacro.Graphics,e:nexacro.ClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Graphics 영역 내에서 마우스의 lbuttondown 액션과 lbuttonup 액션이 발생되어야 합니다.

- 일부 컴포넌트는 아래 조건에서 onclick 이벤트가 발생하는 경우 ClickEventInfo 오브젝트의 좌표 관련 속성값은 모두 -1로 처리합니다.
  * 컴포넌트에 포커스가 주어진 상태에서 Basic Key Action에 설정된 키 입력 시
    - Space 또는 Enter 키: Button, FileDownload, ImageViewer   
    - Space 키: CheckBox  
  * hotkey 속성을 설정하고 해당 키 입력 시: Button, CheckBox  
  * defaultbutton, escapebutton 속성을 설정하고 Form에서 해당 키 입력 시: Button  
  * click 메소드 실행 시: Button


---

### ondblclick

> Components > Component > Graphics > Event > ondblclick

**Description**

Graphics 영역 내에서 마우스 왼쪽버튼을 더블클릭 했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondblclick(obj:nexacro.Graphics,e:nexacro.MouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- ondblclick 이벤트는 onlbuttondown -> onlbuttonup -> onclick -> onlbuttondown -> onlbuttonup -> onclick -> ondblclick 순서로 발생합니다.


---

### ondevicebuttonup

> Components > Component > Graphics > Event > ondevicebuttonup

**Description**

모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondevicebuttonup(obj:nexacro.Graphics,e:nexacro.DeviceButtonEventInfo);
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

> Components > Component > Graphics > Event > ondrag

**Description**

Graphics 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondrag(obj:nexacro.Graphics,e:nexacro.DragEventInfo);
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

- Graphics 영역 내에서 마우스의 LButtonDown 후 LButtonUp 액션 없이 마우스 이동 시 ondrag 이벤트가 발생합니다.

- 이벤트의 리턴값을 true 로 하여 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등

- 에디트 계열 컴포넌트에서 마우스로 드래그 시 화면의 문자열을 선택할 지 드래그 상태를 발생시킬지 여부는 이벤트의 리턴값으로 결정됩니다.


---

### ondragenter

> Components > Component > Graphics > Event > ondragenter

**Description**

Graphics 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragenter(obj:nexacro.Graphics,e:nexacro.DragEventInfo);
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

- 드래그 상태를 유지하고 있으면 Graphics 영역으로 마우스 포인터가 들어올 때마다 이벤트가 발생합니다.


---

### ondragleave

> Components > Component > Graphics > Event > ondragleave

**Description**

Graphics 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragleave(obj:nexacro.Graphics,e:nexacro.DragEventInfo);
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

- 드래그 상태를 유지하고 있으면 Graphics 영역에서 마우스 포인터가 나갈 때마다 이벤트가 발생합니다.


---

### ondragmove

> Components > Component > Graphics > Event > ondragmove

**Description**

Graphics 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragmove(obj:nexacro.Graphics,e:nexacro.DragEventInfo);
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

- 드래그 상태를 유지하고 있으면 Graphics 영역 내에서 마우스 포인터가 움직일 때마다 이벤트가 발생합니다.


---

### ondrop

> Components > Component > Graphics > Event > ondrop

**Description**

Graphics 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondrop(obj:nexacro.Graphics,e:nexacro.DragEventInfo);
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

- Graphics 영역 내에서 드래그 상태인 마우스의 LButtonUp 액션 발생 시 ondrop 이벤트가 발생합니다.

- 넥사크로에서 발생한 드래그 또는 어플리케이션 외부에서 파일을 드래그 했을 때 ondrop 이벤트를 발생시킬 수 있습니다.

- 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등


---

### onkeydown

> Components > Component > Graphics > Event > onkeydown

**Description**

Graphics 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkeydown(obj:nexacro.Graphics,e:nexacro.KeyEventInfo);
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

> Components > Component > Graphics > Event > onkeyup

**Description**

Graphics 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkeyup(obj:nexacro.Graphics,e:nexacro.KeyEventInfo);
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

> Components > Component > Graphics > Event > onkillfocus

**Description**

Graphics 에서 포커스가 나갈  때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkillfocus(obj:nexacro.Graphics,e:nexacro.KillFocusEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 서로 다른 애플리케이션 단위로 포커스가 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showModal(), open() 등의 메소드로 팝업된 Frame 으로 포커스가 이동하는 경우 Graphics 에서 포커스 관련 이벤트가 발생하지 않습니다.
   또한, alert(), confirm() 메소드로 표시된 팝업으로 포커스가 이동하는 경우도 Graphics 에서 포커스 관련 이벤트가 발생하지 않습니다.


---

### onlbuttondown

> Components > Component > Graphics > Event > onlbuttondown

**Description**

Graphics 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onlbuttondown(obj:nexacro.Graphics,e:nexacro.MouseEventInfo);
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

- Graphics 영역 내에서 마우스의 LButtonDown 액션이 발생하면 이벤트가 발생합니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.


---

### onlbuttonup

> Components > Component > Graphics > Event > onlbuttonup

**Description**

Graphics 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onlbuttonup(obj:nexacro.Graphics,e:nexacro.MouseEventInfo);
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

> Components > Component > Graphics > Event > onmousedown

**Description**

Graphics 영역 내에서 마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 눌렸을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmousedown(obj:nexacro.Graphics,e:nexacro.MouseEventInfo);
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

> Components > Component > Graphics > Event > onmouseenter

**Description**

Graphics 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmouseenter(obj:nexacro.Graphics,e:nexacro.MouseEventInfo);
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

> Components > Component > Graphics > Event > onmouseleave

**Description**

Graphics 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmouseleave(obj:nexacro.Graphics,e:nexacro.MouseEventInfo);
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

> Components > Component > Graphics > Event > onmousemove

**Description**

Graphics 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmousemove(obj:nexacro.Graphics,e:nexacro.MouseEventInfo);
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

> Components > Component > Graphics > Event > onmouseup

**Description**

마우스의 왼쪽/오른쪽 버튼을 제외한 나머지 버튼이 떼어질 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmouseup(obj:nexacro.Graphics,e:nexacro.MouseEventInfo);
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

### onmove

> Components > Component > Graphics > Event > onmove

**Description**

Graphics 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmove(obj:nexacro.Graphics,e:nexacro.MoveEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onrbuttondown

> Components > Component > Graphics > Event > onrbuttondown

**Description**

Graphics 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrbuttondown(obj:nexacro.Graphics,e:nexacro.MouseEventInfo);
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


---

### onrbuttonup

> Components > Component > Graphics > Event > onrbuttonup

**Description**

Graphics 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrbuttonup(obj:nexacro.Graphics,e:nexacro.MouseEventInfo);
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


---

### onsetfocus

> Components > Component > Graphics > Event > onsetfocus

**Description**

Graphics 에 포커스가 들어올 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsetfocus(obj:nexacro.Graphics,e:nexacro.SetFocusEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 서로 다른 애플리케이션 단위로 포커스가 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showModal(), open() 등의 메소드로 팝업된 Frame 으로 포커스가 이동하는 경우 Graphics 에서 포커스 관련 이벤트가 발생하지 않습니다.
   또한, alert(), confirm() 메소드로 표시된 팝업으로 포커스가 이동하는 경우도 Graphics 에서 포커스 관련 이벤트가 발생하지 않습니다.

- open() 메소드로 오픈된 Modeless 창에서 부모창의 Graphics 에 setFocus() 메소드 실행 시 환경에 따라 동작에 차이가 있으므로 주의하여야 합니다.
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

> Components > Component > Graphics > Event > onsize

**Description**

Graphics 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsize(obj:nexacro.Graphics,e:nexacro.SizeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### ontouchend

> Components > Component > Graphics > Event > ontouchend

**Description**

Graphics 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchend(obj:nexacro.Graphics,e:nexacro.TouchEventInfo);
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

> Components > Component > Graphics > Event > ontouchmove

**Description**

Graphics 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchmove(obj:nexacro.Graphics,e:nexacro.TouchEventInfo);
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

> Components > Component > Graphics > Event > ontouchstart

**Description**

Graphics 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchstart(obj:nexacro.Graphics,e:nexacro.TouchEventInfo);
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

## Components > Component > Graphics > Objects

### Objects

> Components > Component > Graphics > Objects

**Description**

여러가지 도형을 Graphics 컴포넌트에 표시하기 위해 제공되는 오브젝트입니다.

**Remark**

- Graphics 컴포넌트의 layers 속성에 오브젝트를 Collection 형태로 저장합니다.


---

## Components > Component > Graphics > GraphicsEllipse

### GraphicsEllipse

> Components > Component > Graphics > Objects > GraphicsEllipse

**Description**

Graphics 컴포넌트에 원 또는 타원을 표시할 때 사용되는 오브젝트입니다.

**Remark**

- 스크립트로 동적생성하여 사용할 수 있으며 넥사크로 스튜디오에서 디자인 할 수 없습니다.

**Property**

| Name | Description |
| --- | --- |
| fillstyle | GraphicsEllipse 의 내부영역에 채워질 형식과 색을 설정하는 속성입니다. |
| height | GraphicsEllipse 영역의 세로 지름을 설정하는 속성입니다. |
| id | GraphicsEllipse 의 고유 식별자를 설정하는 속성입니다. |
| opacity | GraphicsEllipse 영역의 투명도를 설정하는 속성입니다. |
| parent | GraphicsEllipse 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| strokepen | GraphicsEllipse 의 외곽선에 적용될 색과 형식을 설정하는 속성입니다. |
| visible | GraphicsEllipse 가 화면에 표시될지 여부를 설정하는 속성입니다. |
| width | GraphicsEllipse 영역의 가로 지름을 설정하는 속성입니다. |
| x | 부모 오브젝트를 기준으로 GraphicsEllipse 가 표시될 x 축 중심좌표값을 설정하는 속성입니다. |
| y | 부모 오브젝트를 기준으로 GraphicsEllipse 가 표시될 y 축 중심좌표값을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| destroy | GraphicsEllipse 를 메모리에서 완전히 삭제하는 메소드입니다. |
| getBoundRect | GraphicsEllipse 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| getNextSibling | GraphicsEllipse 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다. |
| getOffsetBoundRect | GraphicsEllipse 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| getOffsetRect | GraphicsEllipse 가 표시되는 영역정보를 부모 오브젝트 기준으로 반환하는 메소드입니다. |
| getOffsetRegion | GraphicsEllipse 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| getPreviousSibling | GraphicsEllipse 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다. |
| getRect | GraphicsEllipse 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다. |
| getRegion | GraphicsEllipse 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| isEmptyRect | GraphicsEllipse 에 영역이 설정 되었는지 여부를 반환하는 메소드입니다. |
| isHitTest | 인수로 전달된 좌표위치가 GraphicsEllipse 영역에 포함되는지 여부를 반환하는 메소드입니다. |
| rotate | GraphicsEllipse 에 회전효과를 적용하는 메소드입니다. |
| scale | GraphicsEllipse 에 확대/축소 효과를 적용하는 메소드입니다. |
| setClipRect | GraphicsEllipse 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다. |
| setTransform | GraphicsEllipse 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다. |
| shear | GraphicsEllipse 에 비틀기 효과를 적용하는 메소드입니다. |
| toString | GraphicsEllipse 의 타입을 문자열로 반환하는 메소드입니다. |
| transform | GraphicsEllipse 에 Transform 관련 효과를 적용하는 메소드입니다. |
| translate | GraphicsEllipse 의 위치가 이동되는 효과를 적용하는 메소드입니다. |


---

### 속성 (Properties)

### fillstyle

> Components > Component > Graphics > Objects > GraphicsEllipse > Property > fillstyle

**Description**

GraphicsEllipse 의 내부영역에 채워질 형식과 색을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.fillstyle[= strFillStyle]
```

**Setting Syntax**

```javascript
strFillStyle ::= <color> | <linear-gradient>

<color> ::= <NamedColor> | <NumericColor>

<linear-gradient> ::= 'linear-gradient(' [<angle> , ] <color-stop> ')'
<angle> ::= 'to left' | 'to right' | 'to top' | 'to bottom' | 'to left top' | 'to left bottom' | 'to right top' | 'to right bottom'
<color-stop> ::= <startcolor-stop> [',' <listcolor-stop>] ',' <endcolor-stop>
<startcolor-stop> ::= <color> [<percentage>'%']
<listcolor-stop> ::= <color> [<percentage>'%'] [',' <listcolor-stop>]*
<endcolor-stop> ::= <color> [<percentage>'%']
```
```javascript
var objGObject = new nexacro.GraphicsEllipse();

objGObject.fillstyle = "red";
objGObject.fillstyle = "rgb(255,255,0)";
objGObject.fillstyle = "#ffffaa";
objGObject.fillstyle = "linear-gradient(red, yellow)";
objGObject.fillstyle = "linear-gradient(to right, red, yellow)";
objGObject.fillstyle = "linear-gradient(to right, red 50%, yellow)";
objGObject.fillstyle = "linear-gradient(red, yellow 25%, green 50%, blue 75%, indigo)";
objGObject.fillstyle = "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)";
```
- **`<color>`** — GraphicsEllipse 의 내부영역에 채워질 색을 색상이름 또는 색상코드로 설정합니다.
- **`<NamedColor>`** — "red", "blue" 와 같이 미리 정의된 색상이름의 문자열로 내부영역의 색을 설정합니다.
- **`<NumericColor>`** — "#"기호로 시작하는 6자리 HexaDecimal 색상코드값으로 내부영역의 색을 설정합니다. ("#FF00FF")

r,g,b 값을 인자로 하는 rgb() 메소드로 내부영역의 색을 설정합니다. ("rgb (255, 0, 255)")
- **`<linear-gradient>`** — GraphicsEllipse 의 내부영역을 그라데이션으로 설정합니다.

"linear-gradient ( [방향, 색상값, 색상값, ...] )" 형식으로 그라데이션 방향과 색상을 설정할 수 있습니다.
<listcolor-stop> 에 한 개 이상의 색상값을 설정할 수 있습니다.
- **`<angle>`** — 그라데이션의 표시 방향을 설정합니다.

"to left" 설정 시 오른쪽에서 왼쪽 방향으로 그라데이션이 표시됩니다.
"to right" 설정 시 왼쪽에서 오른쪽 방향으로 그라데이션이 표시됩니다.
"to top" 설정 시 아래쪽에서 윗쪽 방향으로 그라데이션이 표시됩니다.
"to bottom" 설정 시 윗쪽에서 아래쪽 방향으로 그라데이션이 표시됩니다.
"to left top" 설정 시 오른쪽 아래 방향에서 왼쪽 윗 방향으로 그라데이션이 표시됩니다.
"to left bottom" 설정 시 오른쪽 윗 뱡향에서 왼쪽 아래 방향으로 그라데이션이 표시됩니다.
"to right top" 설정 시 왼쪽 아래 방향에서 오른쪽 윗 방향으로 그라데이션이 표시됩니다.
"to right bottom" 설정 시 왼쪽 윗 방향에서 오른쪽 아래 방향으로 그라데이션이 표시됩니다.

값을 설정하지 않으면 "to bottom" 으로 적용됩니다.
- **`<color-stop>`** — 그라데이션의 시작점, 끝점, 중간점의 색을 설정합니다.

<angle> 값에 따라 시작점과 끝점의 위치가 결정됩니다.
<angle> 값에 설정된 표시 방향이 시작되는 위치가 시작점으로 적용됩니다.

예를 들어 <angle> 값이 "to left" 이면 GraphicsEllipse 영역의 오른쪽 위치가 시작점이 되고, 왼쪽 위치가 끝점이 됩니다.
<angle> 값이 "to right" 이면 GraphicsEllipse 영역의 왼쪽 위치가 시작점이 되고, 오른쪽 위치가 끝점이 됩니다.

그라데이션 중간점의 색은 한개 이상 설정할 수 있으며 <percentage> 값 생략 시 균등하게 표시됩니다.
- **`<startcolor-stop>`** — 그라데이션의 시작점 색을 설정합니다.

<angle> 값에 설정된 방향으로 시작점 위치가 결정됩니다.
시작점의 <percentage> 값을 0 이상으로 설정 시 "시작점~설정값"까지 동일한 색상으로 표시됩니다.
- **`<listcolor-stop>`** — 그라데이션의 중간점 색을 설정합니다.

시작점과 끝점 사이에 적용될 중간색을 ","로 구분하여 여러개 설정할 수 있습니다.
- **`<endcolor-stop>`** — 그라데이션의 끝점 색을 설정합니다.

<angle> 값에 설정된 방향으로 끝점 위치가 결정됩니다.
끝점의 <percentage> 값을 100 이하로 설정 시 "설정값~끝점"까지 동일한 색상으로 표시됩니다.
- **`<percentage>`** — <color> 에 해당하는 색이 적용될 위치를 비율값으로 설정합니다.

<angle> 값에 의해 결정된 시작점이 "0%" 로 적용됩니다.
<angle> 값에 의해 결정된 끝점이 "100%" 로 적용됩니다.

<percentage> 값은 0 에서 100 사이의 값을 설정해야 합니다.
<percentage> 값을 생략하면 균등한 위치에 <color> 값이 적용됩니다.

**Remark**

- GraphicsPaths, GraphicsPath 는 닫힌 경로가 존재할 경우에만 내부영역을 처리합니다.


---

### height

> Components > Component > Graphics > Objects > GraphicsEllipse > Property > height

**Description**

GraphicsEllipse 영역의 세로 지름을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsEllipse.height[= nHeight]
```

**Setting Syntax**

```javascript
var objGEllipse = new nexacro.GraphicsEllipse();  
objGEllipse.height = 300; 
objGEllipse.width = 300;
```
- **`nHeight`** — GraphicsEllipse 의 세로 지름을 pixel 단위의 숫자로 설정합니다.

**Remark**

- width 속성값을 함께 설정하여야 정상적으로 처리됩니다.


---

### id

> Components > Component > Graphics > Objects > GraphicsEllipse > Property > id

**Description**

GraphicsEllipse 의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsEllipse.id
```

**Setting Syntax**

```javascript
var objGraphicsEllipse = new nexacro.GraphicsEllipse();

this.Graphics00.addChild( "GraphicsEllipse00", objGraphicsEllipse );
```
- **`id`** — GraphicsEllipse 를 구별할 수 있는 유일값을 설정합니다.

**Remark**

-  addChild() 나 insertChild() 메소드를 사용하여 GraphicsEllipse 를 등록할때 오브젝트를 구별하기 위한 고유값입니다.

- 속성명이나 메소드명과 같은 예약어를 설정할 경우 오류가 발생할 수 있습니다.


---

### opacity

> Components > Component > Graphics > Objects > GraphicsEllipse > Property > opacity

**Description**

GraphicsEllipse 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.opacity[= nOpacity]
```

**Setting Syntax**

```javascript
var objGraphicsEllipse = new nexacro.GraphicsEllipse() ;

objGraphicsEllipse.opacity = 0.5;
objGraphicsEllipse.opacity = "0.5";
objGraphicsEllipse.opacity = "50%";
```
- **`nOpacity`** — 0.0 ~ 1.0 사이의 값 또는 0.0% ~ 100.0% 사이의 값을 지정합니다.
0(또는 0%)을 설정하면 완전 투명, 1(또는 100%)을 설정하면 완전 불투명으로 처리됩니다.
1 이상의 값은 1로, 0 이하의 값은 0으로 처리됩니다. 마찬가지로 100% 이상의 값은 100%로, 0% 이하의 값은 0%로 처리됩니다.

Script는 숫자 또는 문자(숫자, 퍼센트 값)로 설정할 수 있습니다.

**Remark**

- opacity 속성값을 설정하지 않으면 undefined 가 설정되고 1 로 동작합니다.

- GraphicsGroup 의 경우 하위 오브젝트에 투명도가 동일하게 적용됩니다.

- 부모와 자식 오브젝트에 각각 opacity 속성이 설정되어 있으면 자식 오브젝트의 투명도는 부모의 투명도에 추가적으로 적용됩니다.
   예를 들어 부모의 opacity 값이 0.5 이고 자식의 opacity 값이 0.4 이면 결과적으로 자식 오브젝트는 0.2 의 투명도가 적용됩니다.


---

### parent

> Components > Component > Graphics > Objects > GraphicsEllipse > Property > parent

**Description**

GraphicsEllipse 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GraphicsEllipse.parent
```

**Remark**

- 일반적으로 addChild() 메소드를 사용하여 GraphicsEllipse 를 추가한 오브젝트가 parent 속성에 설정됩니다.

- GraphicsEllipse 가 어디에도 속해있지 않거나 부모 오브젝트로부터 제거되면 null 값을 갖습니다.


---

### strokepen

> Components > Component > Graphics > Objects > GraphicsEllipse > Property > strokepen

**Description**

GraphicsEllipse 의 외곽선에 적용될 색과 형식을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.strokepen[= strStrokePen]
```

**Setting Syntax**

```javascript
strStrokePen ::= <line-width> <line-style> <color>

<line-width> ::= <nWidth> ['px']
<line-style> ::= 'solid' | 'dotted' | 'dashed'
<color> ::= <NamedColor> | <NumericColor>
```
```javascript
var objGObject = new nexacro.GraphicsEllipse();

objGObject.strokepen = "5px solid red";
objGObject.strokepen = "5 dotted #999999";
objGObject.strokepen = "5px dotted rgb(255,0,0)";
```
- **`<nWidth>`** — 외곽선의 두께를 pixel 단위의 숫자로 설정합니다.
- **`<line-style>`** — 외곽선의 스타일을 설정합니다.

"solid" 설정 시 외곽선이 실선으로 표시됩니다.
"dotted" 설정 시 외곽선이 점선으로 표시됩니다.
"dashed" 설정 시 외곽선이 긴 점선으로 표시됩니다.
- **`<NamedColor>`** — 외곽선의 색을 "red", "blue" 와 같이 미리 정의된 색상이름의 문자열로 설정합니다.
- **`<NumericColor>`** — "#" 기호로 시작하는 6자리 hexadecimal 색상코드값으로 외곽선의 색을 설정합니다. ("#FF00FF")

r,g,b 값을 인자로 하는 rgb() 메소드로 외곽선의 색을 설정합니다. (ex-"rgb (255, 0, 255)")

**Remark**

- strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.

◆ Nexacro Runtime Environment 제약

- Nexacro Runtime Environment는 <line-style> 에 "solid" 값만 설정할 수 있습니다.


---

### visible

> Components > Component > Graphics > Objects > GraphicsEllipse > Property > visible

**Description**

GraphicsEllipse 가 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
var objGraphicsEllipse = new nexacro.GraphicsEllipse();

objGraphicsEllipse.visible = false;
```
- **`true`** — Graphics 컴포넌트의 redraw() 메소드 수행 시 GraphicsEllipse 를 표시합니다.
- **`false`** — Graphics 컴포넌트의 redraw() 메소드 수행 시 GraphicsEllipse 를 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하면 화면에 즉시 반영되지 않고 Graphics 컴포넌트의 redraw() 메소드가 수행될 때 반영됩니다.

- GraphicsGroup 의 경우 visible 속성을 false 로 설정하면 하위 오브젝트도 함께 화면에 표시되지 않습니다.

- visible 속성에 의해 화면에 GraphicsEllipse 가 표시되지 않아도 오브젝트는 존재하기 때문에 스크립트로 제어가 가능합니다.


---

### width

> Components > Component > Graphics > Objects > GraphicsEllipse > Property > width

**Description**

GraphicsEllipse 영역의 가로 지름을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsEllipse.width[= nWidth]
```

**Setting Syntax**

```javascript
var objGEllipse = new nexacro.GraphicsEllipse();  
objGEllipse.height = 300; 
objGEllipse.width = 300;
```
- **`nWidth`** — GraphicsEllipse 의 가로 지름을 pixel 단위의 숫자로 설정합니다.

**Remark**

- height 속성값을 함께 설정하여야 정상적으로 처리됩니다.


---

### x

> Components > Component > Graphics > Objects > GraphicsEllipse > Property > x

**Description**

부모 오브젝트를 기준으로 GraphicsEllipse 가 표시될 x 축 중심좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsEllipse.x[= nX]
```

**Setting Syntax**

```javascript
var objGEllipse = new nexacro.GraphicsEllipse();  
objGEllipse.x = 200; 
objGEllipse.y = 200;
```
- **`nX`** — 부모 오브젝트를 기준으로 GraphicsEllipse 가 표시될 x 축 중심좌표값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- GraphicsEllipse 의 x 속성은 원 또는 타원의 x 축 중심점을 의미합니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsEllipse 의 표시위치가 변경되어도 x 속성은 원본위치값을 유지합니다.

**See Also**

GraphicsEllipse.cy-graphics


---

### y

> Components > Component > Graphics > Objects > GraphicsEllipse > Property > y

**Description**

부모 오브젝트를 기준으로 GraphicsEllipse 가 표시될 y 축 중심좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsEllipse.y[= nY]
```

**Setting Syntax**

```javascript
var objGEllipse = new nexacro.GraphicsEllipse();  
objGEllipse.x = 200; 
objGEllipse.y = 200;
```
- **`nY`** — 부모 오브젝트를 기준으로 GraphicsEllipse 가 표시될 y 축 중심좌표값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- GraphicsEllipse 의 y 속성은 원 또는 타원의 y 축 중심점을 의미합니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsEllipse 의 표시위치가 변경되어도 y 속성은 원본위치값을 유지합니다.

**See Also**

GraphicsEllipse.cy-graphics


---

### 메서드 (Methods)

### destroy

> Components > Component > Graphics > Objects > GraphicsEllipse > Method > destroy

**Description**

GraphicsEllipse 를 메모리에서 완전히 삭제하는 메소드입니다.

**Syntax**

```javascript
GraphicsEllipse.destroy()
```

**Return**

GraphicsEllipse 가 정상적으로 삭제되면 true 를 반환합니다.

GraphicsEllipse 가 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- destroy() 메소드로 GraphicsEllipse 가 삭제되어도 화면에 표시된 오브젝트가 자동으로 사라지지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- GraphicsEllipse 가 하위 오브젝트를 가질 수 있는 경우 하위 오브젝트도 함께 삭제됩니다.


---

### getBoundRect

> Components > Component > Graphics > Objects > GraphicsEllipse > Method > getBoundRect

**Description**

GraphicsEllipse 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsEllipse.getBoundRect( );
```

**Parameters**

var objGraphicsEllipse = this.Graphics00.getObjectByID("GraphicsEllipse00");
var objRect = objGraphicsEllipse.getBoundRect();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다.
strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getBoundRect() 메소드는 GraphicsEllipse 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getBoundRect() 메소드의 반환값으로 GraphicsEllipse 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsEllipse 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getNextSibling

> Components > Component > Graphics > Objects > GraphicsEllipse > Method > getNextSibling

**Description**

GraphicsEllipse 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsEllipse.getNextSibling()
```

**Parameters**

var objGraphicsEllipse = this.Graphics00.getObjectByID("GraphicsEllipse00");
var objNext = objGraphicsEllipse.getNextSibling();

trace( objNext.toString() );

**Return**

부모가 동일한 다음 순서의 Graphics 오브젝트를 반환합니다.

다음 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

**Remark**

- addChild() 메소드로 추가된 순서대로 Graphics 오브젝트가 저장됩니다.

- 부모가 다른 Graphics 오브젝트는 반환되지 않습니다.


---

### getOffsetBoundRect

> Components > Component > Graphics > Objects > GraphicsEllipse > Method > getOffsetBoundRect

**Description**

GraphicsEllipse 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsEllipse.getOffsetBoundRect( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsEllipse = objGroup.getObjectByID("GraphicsEllipse00");
var objRect = objGraphicsEllipse.getOffsetBoundRect();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다.
strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetBoundRect() 메소드는 GraphicsEllipse 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetBoundRect() 메소드의 반환값으로 GraphicsEllipse 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsEllipse 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getOffsetRect

> Components > Component > Graphics > Objects > GraphicsEllipse > Method > getOffsetRect

**Description**

GraphicsEllipse 가 표시되는 영역정보를 부모 오브젝트 기준으로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsEllipse.getOffsetRect( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsEllipse = objGroup.getObjectByID("GraphicsEllipse00");
var objRect = objGraphicsEllipse.getOffsetRect();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsEllipse 오브젝트의 strokepen 속성값을 설정했더라도 외곽선 영역과 관계없이 GraphicsEllipse 오브젝트의 실제 영역이 반환됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetRect() 메소드는 GraphicsEllipse 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetRect() 메소드의 반환값으로 GraphicsEllipse 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsEllipse 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getOffsetRegion

> Components > Component > Graphics > Objects > GraphicsEllipse > Method > getOffsetRegion

**Description**

GraphicsEllipse 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsEllipse.getOffsetRegion( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsEllipse = objGroup.getObjectByID("GraphicsEllipse00");
var objRect = objGraphicsEllipse.getOffsetRegion();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsEllipse 오브젝트의 strokepen 속성값을 설정했더라도 반환되는 영역정보에는 안쪽 외곽선 영역이 제외됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetRegion() 메소드는 GraphicsEllipse 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetRegion() 메소드의 반환값으로 GraphicsEllipse 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsEllipse 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getRegion() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getPreviousSibling

> Components > Component > Graphics > Objects > GraphicsEllipse > Method > getPreviousSibling

**Description**

GraphicsEllipse 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsEllipse.getPreviousSibling()
```

**Parameters**

var objGraphicsEllipse = this.Graphics00.getObjectByID("GraphicsEllipse00");
var objPrev = objGraphicsEllipse.getPreviousSibling();

trace( objPrev.toString() );

**Return**

부모가 동일한 이전 순서의 Graphics 오브젝트를 반환합니다.

이전 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

**Remark**

- addChild() 메소드로 추가된 순서대로 Graphics 오브젝트가 저장됩니다.

- 부모가 다른 Graphics 오브젝트는 반환되지 않습니다.


---

### getRect

> Components > Component > Graphics > Objects > GraphicsEllipse > Method > getRect

**Description**

GraphicsEllipse 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsEllipse.getRect( );
```

**Parameters**

var objGraphicsEllipse = this.Graphics00.getObjectByID("GraphicsEllipse00");
var objRect = objGraphicsEllipse.getRect();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsEllipse 오브젝트의 strokepen 속성값을 설정했더라도 외곽선 영역과 관계없이 GraphicsEllipse 오브젝트의 실제 영역이 반환됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getRect() 메소드는 GraphicsEllipse 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getRect() 메소드의 반환값으로 GraphicsEllipse 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsEllipse 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getRegion

> Components > Component > Graphics > Objects > GraphicsEllipse > Method > getRegion

**Description**

GraphicsEllipse 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsEllipse.getRegion( );
```

**Parameters**

var objGraphicsEllipse = this.Graphics00.getObjectByID("GraphicsEllipse00");
var objRect = objGraphicsEllipse.getRegion();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsEllipse 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에는 안쪽 외곽선 영역이 제외됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getRegion() 메소드는 GraphicsEllipse 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getRegion() 메소드의 반환값으로 GraphicsEllipse 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsEllipse 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetRegion() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### isEmptyRect

> Components > Component > Graphics > Objects > GraphicsEllipse > Method > isEmptyRect

**Description**

GraphicsEllipse 에 영역이 설정 되었는지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsEllipse.isEmptyRect()
```

**Parameters**

var objGEllipse = new nexacro.GraphicsEllipse();

var bResult = objGEllipse.isEmptyRect() ;

**Return**

GraphicsEllipse 에 영역이 설정되어 있지 않으면 true 를 반환합니다.

GraphicsEllipse 에 영역이 설정되어 있으면 false 를 반환합니다.

**Remark**

- GraphicsEllipse 의 height, width 속성에 모두 0 보다 큰 값이 설정되어 있으면 영역이 설정된 것으로 판단합니다.


---

### isHitTest

> Components > Component > Graphics > Objects > GraphicsEllipse > Method > isHitTest

**Description**

인수로 전달된 좌표위치가 GraphicsEllipse 영역에 포함되는지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsEllipse.isHitTest( nX, nY )
```

**Parameters**

```
확인할 위치의 x 좌표값을 pixel 단위의 숫자로 설정합니다.

설정값은 Graphics 컴포넌트를 기준으로 처리됩니다.
```

**Return**

인수로 전달된 좌표위치가 GraphicsEllipse 영역에 포함되면 true 를 반환합니다.

인수로 전달된 좌표위치가 GraphicsEllipse 영역에 포함되지 않으면 false 를 반환합니다.

**Remark**

- 일반적으로 GraphicsEllipse 영역은 getRect() 메소드로 반환되는 영역과 일치합니다.
   getRect() 메소드의 반환값은 GraphicsEllipse 의 상태에 따라 변경될 수 있으므로 isHitTest() 사용에 주의하여야 합니다.

- 인수로 전달된 nX, nY 좌표는 Graphics 컴포넌트의 left, top 을 기준으로 처리됩니다.


---

### rotate

> Components > Component > Graphics > Objects > GraphicsEllipse > Method > rotate

**Description**

GraphicsEllipse 에 회전효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsEllipse.rotate( nAngle [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 모습에서 회전될 각도를 숫자로 설정합니다.

양수로 설정 시 시계방향으로 회전합니다.
음수로 설정 시 반시계방향으로 회전합니다.
```

**Return**

없음

**Remark**

- rotate() 메소드 수행 시 Position 과 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 rotate() 메소드가 적용된 영역정보를 반환합니다.

- rotate() 메소드는 GraphicsEllipse 가 표시되는 위치를 기준으로 수행됩니다.
   따라서 rotate() 메소드를 여러번 수행하면 회전 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 회전효과가 동일하게 적용됩니다.

- GraphicsEllipse 에 부모 오브젝트가 설정되어 있어야 rotate() 메소드가 정상적으로 수행됩니다.
   즉, rotate() 메소드 수행 전에 addChild() 메소드로 GraphicsEllipse 를 등록하여야 합니다.


---

### scale

> Components > Component > Graphics > Objects > GraphicsEllipse > Method > scale

**Description**

GraphicsEllipse 에 확대/축소 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsEllipse.scale( nScaleX, nScaleY [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 크기에서 확대/축소 될 가로 배율을 실수로 설정합니다.

1.0 보다 큰값을 설정하면 GraphicsEllipse 가 확대됩니다.
1.0 보다 작은값을 설정하면 GraphicsEllipse 가 축소됩니다.
```

**Return**

없음

**Remark**

- scale() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 scale() 메소드가 적용된 영역정보를 반환합니다.

- scale() 메소드는 GraphicsEllipse 가 표시되는 크기를 기준으로 수행됩니다.
   따라서 scale() 메소드를 여러번 수행하면 확대/축소 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 확대/축소 효과가 동일하게 적용됩니다.

- GraphicsEllipse 에 부모 오브젝트가 설정되어 있어야 scale() 메소드가 정상적으로 수행됩니다.
   즉, scale() 메소드 수행 전에 addChild() 메소드로 GraphicsEllipse 를 등록하여야 합니다.


---

### setClipRect

> Components > Component > Graphics > Objects > GraphicsEllipse > Method > setClipRect

**Description**

GraphicsEllipse 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다.

**Syntax**

```javascript
GraphicsEllipse.setClipRect( nX, nY, nWidth, nHeight );
```

**Parameters**

```
Clipping 할 영역의 x 좌표를 숫자로 설정합니다.

설정값은 GraphicsEllipse 의 x 속성값 위치를 0 으로 가정하고 처리됩니다.
```

**Return**

없음

**Remark**

- GraphicsEllipse 영역에서 Clipping 영역으로 설정된 부분만 화면에 표시됩니다.
   Transform 과 관련된 메소드(scale(), rotate() 등)가 적용된 경우 GraphicsEllipse 의 원본영역을 기준으로 Clipping 됩니다.

- "setClipRect( null );" 형태로 파라미터에 null 설정 시 Clipping 영역 설정이 취소됩니다.

- Clipping 이 적용되어도 GraphicsEllipse 의 Position 관련 속성값은 변경되지 않습니다.


---

### setTransform

> Components > Component > Graphics > Objects > GraphicsEllipse > Method > setTransform

**Description**

GraphicsEllipse 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsEllipse.setTransform( strMethod );
```

**Parameters**

```
GraphicsEllipse 에 적용할 Transform 관련 메소드를 "," 로 구분하여 설정합니다.
translate(), scale(), rotate(), shear() 메소드를 사용할 수 있습니다.
null 값 설정 시 transform 효과가 지정되지 않은 상태로 초기화합니다.
```

**Return**

없음

**Remark**

- setTransform() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 setTransform() 메소드가 적용된 영역정보를 반환합니다.

- setTransform() 메소드는 GraphicsEllipse 의 원본 위치를 기준으로 수행됩니다.
   따라서 setTransform() 메소드를 여러번 수행해도 효과가 누적되어 적용되지 않습니다.

- GraphicsGroup 의 경우 하위 오브젝트에 효과가 동일하게 적용됩니다.

- GraphicsEllipse 에 부모 오브젝트가 설정되어 있어야 setTransform() 메소드가 정상적으로 수행됩니다.
   즉, setTransform() 메소드 수행 전에 addChild() 메소드로 GraphicsEllipse 를 등록하여야 합니다.

- 메소드 실행 시 strMethod 파라미터 값을 null로 설정하면 transform 효과가 지정되지 않은 상태로 초기화합니다.
  setTransform 메소드로 설정한 transform 효과 뿐 아니라 translate, scale, rotate, shear 메소드로 개별 설정한 상태도 초기화합니다.


---

### shear

> Components > Component > Graphics > Objects > GraphicsEllipse > Method > shear

**Description**

GraphicsEllipse 에 비틀기 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsEllipse.shear( nRadianX, nRadianY [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 모습에서 x 축 기준으로 비틀어질 각도를 라디안값으로 설정합니다.
```

**Return**

없음

**Remark**

- shear() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 shear() 메소드가 적용된 영역정보를 반환합니다.

- shear() 메소드는 GraphicsEllipse 가 표시되는 모습을 기준으로 수행됩니다.
   따라서 shear() 메소드를 여러번 수행하면 비틀기 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 비틀기 효과가 동일하게 적용됩니다.

- GraphicsEllipse 에 부모 오브젝트가 설정되어 있어야 shear() 메소드가 정상적으로 수행됩니다.
   즉, shear() 메소드 수행 전에 addChild() 메소드로 GraphicsEllipse 를 등록하여야 합니다.


---

### toString

> Components > Component > Graphics > Objects > GraphicsEllipse > Method > toString

**Description**

GraphicsEllipse 의 타입을 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsEllipse.toString();
```

**Return**

일반적으로 "[object GraphicsEllipse]" 형태의 문자열을 반환합니다.


---

### transform

> Components > Component > Graphics > Objects > GraphicsEllipse > Method > transform

**Description**

GraphicsEllipse 에 Transform 관련 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsEllipse.transform( nScaleX, nShearX, nShearY, nScaleY, nTransX, nTransY );
```

**Parameters**

```
현재 크기에서 확대/축소 될 가로 배율을 실수로 설정합니다.

1.0 보다 큰값을 설정하면 GraphicsEllipse 가 확대됩니다.
1.0 보다 작은값을 설정하면 GraphicsEllipse 가 축소됩니다.
```

**Return**

없음

**Remark**

- transform() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 transform() 메소드가 적용된 영역정보를 반환합니다.

- transform() 메소드는 GraphicsEllipse 가 표시되는 모습을 기준으로 수행됩니다.
   따라서 transform() 메소드를 여러번 수행하면 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 효과가 동일하게 적용됩니다.

- GraphicsEllipse 에 부모 오브젝트가 설정되어 있어야 transform() 메소드가 정상적으로 수행됩니다.
   즉, transform() 메소드 수행 전에 addChild() 메소드로 GraphicsEllipse 를 등록하여야 합니다.


---

### translate

> Components > Component > Graphics > Objects > GraphicsEllipse > Method > translate

**Description**

GraphicsEllipse 의 위치가 이동되는 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsEllipse.translate( nTransX, nTransY );
```

**Parameters**

```
현재 위치에서 x 축 방향으로 이동 할 거리를 pixel 단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- translate() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 translate() 메소드가 적용된 영역정보를 반환합니다.

- translate() 메소드는 GraphicsEllipse 가 표시되는 위치를 기준으로 수행됩니다.
   따라서 translate() 메소드를 여러번 수행하면 이동 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 이동 효과가 동일하게 적용됩니다.

- GraphicsEllipse 에 부모 오브젝트가 설정되어 있어야 translate() 메소드가 정상적으로 수행됩니다.
   즉, translate() 메소드 수행 전에 addChild() 메소드로 GraphicsEllipse 를 등록하여야 합니다.


---

## Components > Component > Graphics > GraphicsGroup

### GraphicsGroup

> Components > Component > Graphics > Objects > GraphicsGroup

**Description**

Graphics 관련 오브젝트를 논리적인 그룹으로 관리하기 위한 오브젝트입니다.

**Remark**

- 스크립트로 동적생성하여 사용할 수 있으며 넥사크로 스튜디오에서 디자인 할 수 없습니다.

- Graphics 에 속한 Graphics 오브젝트를 종류에 관계없이 그룹핑 할 수 있습니다.

- GraphicsGroup 오브젝트는 화면에 표시되지 않고 논리적으로만 관리됩니다.

**Property**

| Name | Description |
| --- | --- |
| id | GraphicsGroup 의 고유 식별자를 설정하는 속성입니다. |
| parent | GraphicsGroup 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| visible | GraphicsGroup 가 화면에 표시될지 여부를 설정하는 속성입니다. |
| x | 부모 오브젝트를 기준으로 GraphicsGroup 가 표시될 x 축 좌표값을 설정하는 속성입니다. |
| y | 부모 오브젝트를 기준으로 GraphicsGroup 가 표시될 y 축 좌표값을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addChild | Graphics 오브젝트를 GraphicsGroup 에 자식으로 추가하는 메소드입니다. |
| clear | GraphicsGroup 에 추가된 오브젝트를 메모리에서 완전히 삭제하는 메소드입니다. |
| destroy | GraphicsGroup 를 메모리에서 완전히 삭제하는 메소드입니다. |
| getBoundRect | GraphicsGroup 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| getFirstChild | GraphicsGroup 에 추가된 오브젝트 중 첫번째 오브젝트를 반환하는 메소드입니다. |
| getLastChild | GraphicsGroup 에 추가된 오브젝트 중 마지막 오브젝트를 반환하는 메소드입니다. |
| getNextSibling | GraphicsGroup 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다. |
| getObjectByID | GraphicsGroup 에 추가된 오브젝트 중 특정 ID 에 해당하는 오브젝트를 반환하는 메소드입니다. |
| getObjects | GraphicsGroup 에 추가된 오브젝트를 배열로 반환하는 메소드입니다. |
| getOffsetBoundRect | GraphicsGroup 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| getOffsetRect | GraphicsGroup 가 표시되는 영역정보를 부모 오브젝트 기준으로 반환하는 메소드입니다. |
| getOffsetRegion | GraphicsGroup 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| getPreviousSibling | GraphicsGroup 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다. |
| getRect | GraphicsGroup 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다. |
| getRegion | GraphicsGroup 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| hasChild | GraphicsGroup 에 Graphics 오브젝트가 추가 되었는지 여부를 반환하는 메소드입니다. |
| indexOf | GraphicsGroup 에 추가된 오브젝트 중 특정 ID 에 해당하는 오브젝트의 인덱스를 반환하는 메소드입니다. |
| insertChild | Graphics 오브젝트를 GraphicsGroup 의 특정 위치에 자식으로 삽입하는 메소드입니다. |
| isHitTest | 인수로 전달된 좌표위치가 GraphicsGroup 영역에 포함되는지 여부를 반환하는 메소드입니다. |
| removeChild | GraphicsGroup 의 자식 오브젝트 중 특정 ID 의 Graphics 오브젝트를 제거하는 메소드입니다. |
| rotate | GraphicsGroup 에 회전효과를 적용하는 메소드입니다. |
| scale | GraphicsGroup 에 확대/축소 효과를 적용하는 메소드입니다. |
| setClipRect | GraphicsGroup 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다. |
| setTransform | GraphicsGroup 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다. |
| shear | GraphicsGroup 에 비틀기 효과를 적용하는 메소드입니다. |
| toString | GraphicsGroup 에 비틀기 효과를 적용하는 메소드입니다. |
| transform | GraphicsGroup 에 Transform 관련 효과를 적용하는 메소드입니다. |
| translate | GraphicsGroup 의 위치가 이동되는 효과를 적용하는 메소드입니다. |


---

### 속성 (Properties)

### id

> Components > Component > Graphics > Objects > GraphicsGroup > Property > id

**Description**

GraphicsGroup 의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsGroup.id
```

**Setting Syntax**

```javascript
var objGraphicsGroup = new nexacro.GraphicsGroup();

this.Graphics00.addChild( "GraphicsGroup00", objGraphicsGroup );
```
- **`id`** — GraphicsGroup 를 구별할 수 있는 유일값을 설정합니다.

**Remark**

-  addChild() 나 insertChild() 메소드를 사용하여 GraphicsGroup 를 등록할때 오브젝트를 구별하기 위한 고유값입니다.

- 속성명이나 메소드명과 같은 예약어를 설정할 경우 오류가 발생할 수 있습니다.


---

### parent

> Components > Component > Graphics > Objects > GraphicsGroup > Property > parent

**Description**

GraphicsGroup 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GraphicsGroup.parent
```

**Remark**

- 일반적으로 addChild() 메소드를 사용하여 GraphicsGroup 를 추가한 오브젝트가 parent 속성에 설정됩니다.

- GraphicsGroup 가 어디에도 속해있지 않거나 부모 오브젝트로부터 제거되면 null 값을 갖습니다.


---

### visible

> Components > Component > Graphics > Objects > GraphicsGroup > Property > visible

**Description**

GraphicsGroup 가 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
var objGraphicsGroup = new nexacro.GraphicsGroup();

objGraphicsGroup.visible = false;
```
- **`true`** — Graphics 컴포넌트의 redraw() 메소드 수행 시 GraphicsGroup 를 표시합니다.
- **`false`** — Graphics 컴포넌트의 redraw() 메소드 수행 시 GraphicsGroup 를 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하면 화면에 즉시 반영되지 않고 Graphics 컴포넌트의 redraw() 메소드가 수행될 때 반영됩니다.

- GraphicsGroup 의 경우 visible 속성을 false 로 설정하면 하위 오브젝트도 함께 화면에 표시되지 않습니다.

- visible 속성에 의해 화면에 GraphicsGroup 가 표시되지 않아도 오브젝트는 존재하기 때문에 스크립트로 제어가 가능합니다.


---

### x

> Components > Component > Graphics > Objects > GraphicsGroup > Property > x

**Description**

부모 오브젝트를 기준으로 GraphicsGroup 가 표시될 x 축 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.x[= nX]
```

**Setting Syntax**

```javascript
var objGraphicsGroup = new nexacro.GraphicsGroup( ) ;

objGraphicsGroup .x = 200;
objGraphicsGroup .y = 200;
```
- **`nX`** — 부모 오브젝트를 기준으로 GraphicsGroup 가 표시될 x 축 좌표값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- x 속성값을 설정하지 않으면 0 으로 적용됩니다.

- x 속성은 컴포넌트의 left 속성에 해당하는 속성입니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsGroup 의 표시위치가 변경되어도 x 속성은 원본위치값을 유지합니다.


---

### y

> Components > Component > Graphics > Objects > GraphicsGroup > Property > y

**Description**

부모 오브젝트를 기준으로 GraphicsGroup 가 표시될 y 축 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.y[= nY]
```

**Setting Syntax**

```javascript
var objGraphicsGroup = new nexacro.GraphicsGroup( ) ;

objGraphicsGroup .x = 200;
objGraphicsGroup .y = 200;
```
- **`nY`** — 부모 오브젝트를 기준으로 GraphicsGroup 가 표시될 y 축 좌표값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- y 속성값을 설정하지 않으면 0 으로 적용됩니다.

- y 속성은 컴포넌트의 top 속성에 해당하는 속성입니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsGroup 의 표시위치가 변경되어도 y 속성은 원본위치값을 유지합니다.


---

### 메서드 (Methods)

### addChild

> Components > Component > Graphics > Objects > GraphicsGroup > Method > addChild

**Description**

Graphics 오브젝트를 GraphicsGroup 에 자식으로 추가하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.addChild( strID, objGObject )
```

**Parameters**

```
자식으로 추가하려는 Graphics 오브젝트의 ID 를 문자열로 설정합니다.
```

**Return**

GraphicsGroup 에 추가된 Graphics 오브젝트의 인덱스를 반환합니다.

**Remark**

- addChild() 메소드로 Graphics 오브젝트가 추가되어도 화면에 자동으로 표시되지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- addChild() 로 추가된 Graphics 오브젝트는 자식 오브젝트 중 순서상 마지막에 위치합니다.

- Graphics 오브젝트는 GraphicsGroup 에 추가된 순서대로 화면에 표시됩니다.
   따라서 Graphics 오브젝트가 동일위치일 경우 먼저 추가된 오브젝트는 뒤에 추가된 오브젝트에 가려집니다.

**See Also**

GraphicsGroup.insertChildGraphicsGroup.removeChild


---

### clear

> Components > Component > Graphics > Objects > GraphicsGroup > Method > clear

**Description**

GraphicsGroup 에 추가된 오브젝트를 메모리에서 완전히 삭제하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.clear()
```

**Return**

없음

**Remark**

- GraphicsGroup 에 추가된 오브젝트만 삭제되고 GraphicsGroup 는 삭제되지 않습니다.

- clear() 메소드로 오브젝트가 삭제되어도 화면에서 자동으로 사라지지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.


---

### destroy

> Components > Component > Graphics > Objects > GraphicsGroup > Method > destroy

**Description**

GraphicsGroup 를 메모리에서 완전히 삭제하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.destroy()
```

**Return**

GraphicsGroup 가 정상적으로 삭제되면 true 를 반환합니다.

GraphicsGroup 가 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- destroy() 메소드로 GraphicsGroup 가 삭제되어도 화면에 표시된 오브젝트가 자동으로 사라지지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- GraphicsGroup 가 하위 오브젝트를 가질 수 있는 경우 하위 오브젝트도 함께 삭제됩니다.


---

### getBoundRect

> Components > Component > Graphics > Objects > GraphicsGroup > Method > getBoundRect

**Description**

GraphicsGroup 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.getBoundRect( );
```

**Parameters**

var objGraphicsGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objRect = objGraphicsGroup.getBoundRect();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다.
strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getBoundRect() 메소드는 GraphicsGroup 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getBoundRect() 메소드의 반환값으로 GraphicsGroup 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsGroup 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getFirstChild

> Components > Component > Graphics > Objects > GraphicsGroup > Method > getFirstChild

**Description**

GraphicsGroup 에 추가된 오브젝트 중 첫번째 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.getFirstChild()
```

**Return**

GraphicsGroup 에 추가된 첫번째 오브젝트를 반환합니다.

**Remark**

- GraphicsGroup 에 추가된 오브젝트는 추가된 순서대로 화면에 표시됩니다.
   따라서 오브젝트가 동일위치일 경우 먼저 추가된 오브젝트는 뒤에 추가된 오브젝트에 가려집니다.


---

### getLastChild

> Components > Component > Graphics > Objects > GraphicsGroup > Method > getLastChild

**Description**

GraphicsGroup 에 추가된 오브젝트 중 마지막 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.getLastChild()
```

**Return**

GraphicsGroup 에 추가된 마지막 오브젝트를 반환합니다.

**Remark**

- GraphicsGroup 에 추가된 오브젝트는 추가된 순서대로 화면에 표시됩니다.
   따라서 오브젝트가 동일위치일 경우 먼저 추가된 오브젝트는 뒤에 추가된 오브젝트에 가려집니다.


---

### getNextSibling

> Components > Component > Graphics > Objects > GraphicsGroup > Method > getNextSibling

**Description**

GraphicsGroup 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.getNextSibling()
```

**Parameters**

var objGraphicsGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objNext = objGraphicsGroup.getNextSibling();

trace( objNext.toString() );

**Return**

부모가 동일한 다음 순서의 Graphics 오브젝트를 반환합니다.

다음 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

**Remark**

- addChild() 메소드로 추가된 순서대로 Graphics 오브젝트가 저장됩니다.

- 부모가 다른 Graphics 오브젝트는 반환되지 않습니다.


---

### getObjectByID

> Components > Component > Graphics > Objects > GraphicsGroup > Method > getObjectByID

**Description**

GraphicsGroup 에 추가된 오브젝트 중 특정 ID 에 해당하는 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.getObjectByID( strID )
```

**Parameters**

```
얻으려 하는 오브젝트의 ID 를 문자열로 설정합니다.
```

**Return**

strID 에 해당하는 오브젝트를 반환합니다.


---

### getObjects

> Components > Component > Graphics > Objects > GraphicsGroup > Method > getObjects

**Description**

GraphicsGroup 에 추가된 오브젝트를 배열로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.getObjects()
```

**Return**

GraphicsGroup 에 추가된 순서대로 오브젝트를 배열로 반환합니다.

**Remark**

- GraphicsGroup 에 추가된 오브젝트는 추가된 순서대로 화면에 표시됩니다.
   따라서 오브젝트가 동일위치일 경우 먼저 추가된 오브젝트는 뒤에 추가된 오브젝트에 가려집니다.


---

### getOffsetBoundRect

> Components > Component > Graphics > Objects > GraphicsGroup > Method > getOffsetBoundRect

**Description**

GraphicsGroup 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.getOffsetBoundRect( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsGroup = objGroup.getObjectByID("GraphicsGroup00");
var objRect = objGraphicsGroup.getOffsetBoundRect();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다.
strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetBoundRect() 메소드는 GraphicsGroup 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetBoundRect() 메소드의 반환값으로 GraphicsGroup 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsGroup 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getOffsetRect

> Components > Component > Graphics > Objects > GraphicsGroup > Method > getOffsetRect

**Description**

GraphicsGroup 가 표시되는 영역정보를 부모 오브젝트 기준으로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.getOffsetRect( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsGroup = objGroup.getObjectByID("GraphicsGroup00");
var objRect = objGraphicsGroup.getOffsetRect();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsGroup 오브젝트의 strokepen 속성값을 설정했더라도 외곽선 영역과 관계없이 GraphicsGroup 오브젝트의 실제 영역이 반환됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetRect() 메소드는 GraphicsGroup 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetRect() 메소드의 반환값으로 GraphicsGroup 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsGroup 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getOffsetRegion

> Components > Component > Graphics > Objects > GraphicsGroup > Method > getOffsetRegion

**Description**

GraphicsGroup 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.getOffsetRegion( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsGroup = objGroup.getObjectByID("GraphicsGroup00");
var objRect = objGraphicsGroup.getOffsetRegion();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsGroup 오브젝트의 strokepen 속성값을 설정했더라도 반환되는 영역정보에는 안쪽 외곽선 영역이 제외됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetRegion() 메소드는 GraphicsGroup 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetRegion() 메소드의 반환값으로 GraphicsGroup 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsGroup 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getRegion() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getPreviousSibling

> Components > Component > Graphics > Objects > GraphicsGroup > Method > getPreviousSibling

**Description**

GraphicsGroup 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.getPreviousSibling()
```

**Parameters**

var objGraphicsGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objPrev = objGraphicsGroup.getPreviousSibling();

trace( objPrev.toString() );

**Return**

부모가 동일한 이전 순서의 Graphics 오브젝트를 반환합니다.

이전 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

**Remark**

- addChild() 메소드로 추가된 순서대로 Graphics 오브젝트가 저장됩니다.

- 부모가 다른 Graphics 오브젝트는 반환되지 않습니다.


---

### getRect

> Components > Component > Graphics > Objects > GraphicsGroup > Method > getRect

**Description**

GraphicsGroup 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.getRect( );
```

**Parameters**

var objGraphicsGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objRect = objGraphicsGroup.getRect();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsGroup 오브젝트의 strokepen 속성값을 설정했더라도 외곽선 영역과 관계없이 GraphicsGroup 오브젝트의 실제 영역이 반환됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getRect() 메소드는 GraphicsGroup 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getRect() 메소드의 반환값으로 GraphicsGroup 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsGroup 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getRegion

> Components > Component > Graphics > Objects > GraphicsGroup > Method > getRegion

**Description**

GraphicsGroup 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.getRegion( );
```

**Parameters**

var objGraphicsGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objRect = objGraphicsGroup.getRegion();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsGroup 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에는 안쪽 외곽선 영역이 제외됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getRegion() 메소드는 GraphicsGroup 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getRegion() 메소드의 반환값으로 GraphicsGroup 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsGroup 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetRegion() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### hasChild

> Components > Component > Graphics > Objects > GraphicsGroup > Method > hasChild

**Description**

GraphicsGroup 에 Graphics 오브젝트가 추가 되었는지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.hasChild()
```

**Return**

Graphics 오브젝트가 한 개 이상 추가되어 있으면 true 를 반환합니다.

Graphics 오브젝트가 추가되어 있지 않으면 false 를 반환합니다.


---

### indexOf

> Components > Component > Graphics > Objects > GraphicsGroup > Method > indexOf

**Description**

GraphicsGroup 에 추가된 오브젝트 중 특정 ID 에 해당하는 오브젝트의 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.indexOf( strID )
```

**Parameters**

```
인덱스를 얻으려 하는 오브젝트의 ID 를 문자열로 설정합니다.
```

**Return**

strID 에 해당하는 오브젝트의 인덱스를 반환합니다.


---

### insertChild

> Components > Component > Graphics > Objects > GraphicsGroup > Method > insertChild

**Description**

Graphics 오브젝트를 GraphicsGroup 의 특정 위치에 자식으로 삽입하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.insertChild( nIdx, strID, objGObject )
```

**Parameters**

```
Graphics 오브젝트가 삽입될 위치의 인덱스를 숫자로 설정합니다.
```

**Return**

GraphicsGroup 에 자식으로 삽입된 Graphics 오브젝트의 인덱스를 반환합니다.

**Remark**

- insertChild() 메소드로 Graphics 오브젝트가 추가되어도 화면에 오브젝트가 자동으로 표시되지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- Graphics 오브젝트는 GraphicsGroup 에 추가된 순서대로 화면에 표시됩니다.
   따라서 Graphics 오브젝트가 동일위치일 경우 먼저 추가된 오브젝트는 뒤에 추가된 오브젝트에 가려집니다.

**See Also**

GraphicsPaths.addChildGraphicsPaths.removeChild


---

### isHitTest

> Components > Component > Graphics > Objects > GraphicsGroup > Method > isHitTest

**Description**

인수로 전달된 좌표위치가 GraphicsGroup 영역에 포함되는지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.isHitTest( nX, nY )
```

**Parameters**

```
확인할 위치의 x 좌표값을 pixel 단위의 숫자로 설정합니다.

설정값은 Graphics 컴포넌트를 기준으로 처리됩니다.
```

**Return**

인수로 전달된 좌표위치가 GraphicsGroup 영역에 포함되면 true 를 반환합니다.

인수로 전달된 좌표위치가 GraphicsGroup 영역에 포함되지 않으면 false 를 반환합니다.

**Remark**

- 일반적으로 GraphicsGroup 영역은 getRect() 메소드로 반환되는 영역과 일치합니다.
   getRect() 메소드의 반환값은 GraphicsGroup 의 상태에 따라 변경될 수 있으므로 isHitTest() 사용에 주의하여야 합니다.

- 인수로 전달된 nX, nY 좌표는 Graphics 컴포넌트의 left, top 을 기준으로 처리됩니다.


---

### removeChild

> Components > Component > Graphics > Objects > GraphicsGroup > Method > removeChild

**Description**

GraphicsGroup 의 자식 오브젝트 중 특정 ID 의 Graphics 오브젝트를 제거하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.removeChild( strID )
```

**Parameters**

```
제거하려는 Graphics 오브젝트의 ID 를 문자열로 설정합니다.
```

**Return**

GraphicsGroup 에서 제거된 Graphics 오브젝트를 반환합니다.

**Remark**

- removeChild() 메소드로 Graphics 오브젝트가 제거되어도 화면에 표시된 오브젝트가 자동으로 사라지지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- removeChild() 메소드로 제거된 Graphics 오브젝트를 메모리에서 삭제하려면 destroy() 메소드를 사용해야 합니다.

**See Also**

GraphicsGroup.addChildGraphicsGroup.insertChild


---

### rotate

> Components > Component > Graphics > Objects > GraphicsGroup > Method > rotate

**Description**

GraphicsGroup 에 회전효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.rotate( nAngle [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 모습에서 회전될 각도를 숫자로 설정합니다.

양수로 설정 시 시계방향으로 회전합니다.
음수로 설정 시 반시계방향으로 회전합니다.
```

**Return**

없음

**Remark**

- rotate() 메소드 수행 시 Position 과 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 rotate() 메소드가 적용된 영역정보를 반환합니다.

- rotate() 메소드는 GraphicsGroup 가 표시되는 위치를 기준으로 수행됩니다.
   따라서 rotate() 메소드를 여러번 수행하면 회전 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 회전효과가 동일하게 적용됩니다.

- GraphicsGroup 에 부모 오브젝트가 설정되어 있어야 rotate() 메소드가 정상적으로 수행됩니다.
   즉, rotate() 메소드 수행 전에 addChild() 메소드로 GraphicsGroup 를 등록하여야 합니다.


---

### scale

> Components > Component > Graphics > Objects > GraphicsGroup > Method > scale

**Description**

GraphicsGroup 에 확대/축소 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.scale( nScaleX, nScaleY [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 크기에서 확대/축소 될 가로 배율을 실수로 설정합니다.

1.0 보다 큰값을 설정하면 GraphicsGroup 가 확대됩니다.
1.0 보다 작은값을 설정하면 GraphicsGroup 가 축소됩니다.
```

**Return**

없음

**Remark**

- scale() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 scale() 메소드가 적용된 영역정보를 반환합니다.

- scale() 메소드는 GraphicsGroup 가 표시되는 크기를 기준으로 수행됩니다.
   따라서 scale() 메소드를 여러번 수행하면 확대/축소 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 확대/축소 효과가 동일하게 적용됩니다.

- GraphicsGroup 에 부모 오브젝트가 설정되어 있어야 scale() 메소드가 정상적으로 수행됩니다.
   즉, scale() 메소드 수행 전에 addChild() 메소드로 GraphicsGroup 를 등록하여야 합니다.


---

### setClipRect

> Components > Component > Graphics > Objects > GraphicsGroup > Method > setClipRect

**Description**

GraphicsGroup 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.setClipRect( nX, nY, nWidth, nHeight );
```

**Parameters**

```
Clipping 할 영역의 x 좌표를 숫자로 설정합니다.

설정값은 GraphicsGroup 의 x 속성값 위치를 0 으로 가정하고 처리됩니다.
```

**Return**

없음

**Remark**

- GraphicsGroup 영역에서 Clipping 영역으로 설정된 부분만 화면에 표시됩니다.
   Transform 과 관련된 메소드(scale(), rotate() 등)가 적용된 경우 GraphicsGroup 의 원본영역을 기준으로 Clipping 됩니다.

- "setClipRect( null );" 형태로 파라미터에 null 설정 시 Clipping 영역 설정이 취소됩니다.

- Clipping 이 적용되어도 GraphicsGroup 의 Position 관련 속성값은 변경되지 않습니다.


---

### setTransform

> Components > Component > Graphics > Objects > GraphicsGroup > Method > setTransform

**Description**

GraphicsGroup 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.setTransform( strMethod );
```

**Parameters**

```
GraphicsGroup 에 적용할 Transform 관련 메소드를 "," 로 구분하여 설정합니다.
translate(), scale(), rotate(), shear() 메소드를 사용할 수 있습니다.
null 값 설정 시 transform 효과가 지정되지 않은 상태로 초기화합니다.
```

**Return**

없음

**Remark**

- setTransform() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 setTransform() 메소드가 적용된 영역정보를 반환합니다.

- setTransform() 메소드는 GraphicsGroup 의 원본 위치를 기준으로 수행됩니다.
   따라서 setTransform() 메소드를 여러번 수행해도 효과가 누적되어 적용되지 않습니다.

- GraphicsGroup 의 경우 하위 오브젝트에 효과가 동일하게 적용됩니다.

- GraphicsGroup 에 부모 오브젝트가 설정되어 있어야 setTransform() 메소드가 정상적으로 수행됩니다.
   즉, setTransform() 메소드 수행 전에 addChild() 메소드로 GraphicsGroup 를 등록하여야 합니다.

- 메소드 실행 시 strMethod 파라미터 값을 null로 설정하면 transform 효과가 지정되지 않은 상태로 초기화합니다.
  setTransform 메소드로 설정한 transform 효과 뿐 아니라 translate, scale, rotate, shear 메소드로 개별 설정한 상태도 초기화합니다.


---

### shear

> Components > Component > Graphics > Objects > GraphicsGroup > Method > shear

**Description**

GraphicsGroup 에 비틀기 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.shear( nRadianX, nRadianY [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 모습에서 x 축 기준으로 비틀어질 각도를 라디안값으로 설정합니다.
```

**Return**

없음

**Remark**

- shear() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 shear() 메소드가 적용된 영역정보를 반환합니다.

- shear() 메소드는 GraphicsGroup 가 표시되는 모습을 기준으로 수행됩니다.
   따라서 shear() 메소드를 여러번 수행하면 비틀기 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 비틀기 효과가 동일하게 적용됩니다.

- GraphicsGroup 에 부모 오브젝트가 설정되어 있어야 shear() 메소드가 정상적으로 수행됩니다.
   즉, shear() 메소드 수행 전에 addChild() 메소드로 GraphicsGroup 를 등록하여야 합니다.


---

### toString

> Components > Component > Graphics > Objects > GraphicsGroup > Method > toString

**Description**

GraphicsGroup 에 비틀기 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.shear( nRadianX, nRadianY [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 모습에서 x 축 기준으로 비틀어질 각도를 라디안값으로 설정합니다.
```

**Return**

없음

**Remark**

- shear() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 shear() 메소드가 적용된 영역정보를 반환합니다.

- shear() 메소드는 GraphicsGroup 가 표시되는 모습을 기준으로 수행됩니다.
   따라서 shear() 메소드를 여러번 수행하면 비틀기 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 비틀기 효과가 동일하게 적용됩니다.

- GraphicsGroup 에 부모 오브젝트가 설정되어 있어야 shear() 메소드가 정상적으로 수행됩니다.
   즉, shear() 메소드 수행 전에 addChild() 메소드로 GraphicsGroup 를 등록하여야 합니다.


---

### transform

> Components > Component > Graphics > Objects > GraphicsGroup > Method > transform

**Description**

GraphicsGroup 에 Transform 관련 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.transform( nScaleX, nShearX, nShearY, nScaleY, nTransX, nTransY );
```

**Parameters**

```
현재 크기에서 확대/축소 될 가로 배율을 실수로 설정합니다.

1.0 보다 큰값을 설정하면 GraphicsGroup 가 확대됩니다.
1.0 보다 작은값을 설정하면 GraphicsGroup 가 축소됩니다.
```

**Return**

없음

**Remark**

- transform() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 transform() 메소드가 적용된 영역정보를 반환합니다.

- transform() 메소드는 GraphicsGroup 가 표시되는 모습을 기준으로 수행됩니다.
   따라서 transform() 메소드를 여러번 수행하면 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 효과가 동일하게 적용됩니다.

- GraphicsGroup 에 부모 오브젝트가 설정되어 있어야 transform() 메소드가 정상적으로 수행됩니다.
   즉, transform() 메소드 수행 전에 addChild() 메소드로 GraphicsGroup 를 등록하여야 합니다.


---

### translate

> Components > Component > Graphics > Objects > GraphicsGroup > Method > translate

**Description**

GraphicsGroup 의 위치가 이동되는 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsGroup.translate( nTransX, nTransY );
```

**Parameters**

```
현재 위치에서 x 축 방향으로 이동 할 거리를 pixel 단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- translate() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 translate() 메소드가 적용된 영역정보를 반환합니다.

- translate() 메소드는 GraphicsGroup 가 표시되는 위치를 기준으로 수행됩니다.
   따라서 translate() 메소드를 여러번 수행하면 이동 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 이동 효과가 동일하게 적용됩니다.

- GraphicsGroup 에 부모 오브젝트가 설정되어 있어야 translate() 메소드가 정상적으로 수행됩니다.
   즉, translate() 메소드 수행 전에 addChild() 메소드로 GraphicsGroup 를 등록하여야 합니다.


---

## Components > Component > Graphics > GraphicsImage

### GraphicsImage

> Components > Component > Graphics > Objects > GraphicsImage

**Description**

Graphics 컴포넌트에 이미지를 표시할 때 사용되는 오브젝트입니다.

**Remark**

- 스크립트로 동적생성하여 사용할 수 있으며 넥사크로 스튜디오에서 디자인 할 수 없습니다.

**Property**

| Name | Description |
| --- | --- |
| height | GraphicsImage 영역의 높이를 설정하는 속성입니다. |
| id | GraphicsImage 의 고유 식별자를 설정하는 속성입니다. |
| image | GraphicsImage 에 로드 할 이미지 파일의 위치 경로를 설정하는 속성입니다. |
| imageheight | GraphicsImage 에 로드된 이미지의 실제 높이값을 갖는 읽기전용 속성입니다. |
| imagewidth | GraphicsImage 에 로드된 이미지의 실제 너비값을 갖는 읽기전용 속성입니다. |
| opacity | GraphicsImage 영역의 투명도를 설정하는 속성입니다. |
| parent | GraphicsImage 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| visible | GraphicsImage 가 화면에 표시될지 여부를 설정하는 속성입니다. |
| width | GraphicsImage 영역의 너비를 설정하는 속성입니다. |
| x | 부모 오브젝트를 기준으로 GraphicsImage 가 표시될 x 축 좌표값을 설정하는 속성입니다. |
| y | 부모 오브젝트를 기준으로 GraphicsImage 가 표시될 y 축 좌표값을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| destroy | GraphicsImage 를 메모리에서 완전히 삭제하는 메소드입니다. |
| getBoundRect | GraphicsImage 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| getNextSibling | GraphicsImage 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다. |
| getOffsetBoundRect | GraphicsImage 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| getOffsetRect | GraphicsImage 가 표시되는 영역정보를 부모 오브젝트 기준으로 반환하는 메소드입니다. |
| getOffsetRegion | GraphicsImage 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| getPreviousSibling | GraphicsImage 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다. |
| getRect | GraphicsImage 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다. |
| getRegion | GraphicsImage 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| isEmptyRect | GraphicsImage 에 이미지의 로딩 여부를 반환하는 메소드입니다. |
| isHitTest | 인수로 전달된 좌표위치가 GraphicsImage 영역에 포함되는지 여부를 반환하는 메소드입니다. |
| rotate | GraphicsImage 에 회전효과를 적용하는 메소드입니다. |
| scale | GraphicsImage 에 확대/축소 효과를 적용하는 메소드입니다. |
| setClipRect | GraphicsImage 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다. |
| setImageLoadEventHandler | GraphicsImage 에 이미지가 로딩되었을 때 CallBack 으로 실행할 함수를 설정하는 메소드입니다. |
| setTransform | GraphicsImage 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다. |
| shear | GraphicsImage 에 비틀기 효과를 적용하는 메소드입니다. |
| toString | GraphicsImage 의 타입을 문자열로 반환하는 메소드입니다. |
| transform | GraphicsImage 에 Transform 관련 효과를 적용하는 메소드입니다. |
| translate | GraphicsImage 의 위치가 이동되는 효과를 적용하는 메소드입니다. |


---

### 속성 (Properties)

### height

> Components > Component > Graphics > Objects > GraphicsImage > Property > height

**Description**

GraphicsImage 영역의 높이를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.height[= nHeight]
```

**Setting Syntax**

```javascript
var objGObject = new nexacro.GraphicsImage();

objGObject.height = 300;
```
- **`nHeight`** — GraphicsImage 영역의 높이를 pixel 단위의 숫자로 설정합니다.

"px" 단위 없이 숫자값만 설정하여야 합니다.


---

### id

> Components > Component > Graphics > Objects > GraphicsImage > Property > id

**Description**

GraphicsImage 의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsImage.id
```

**Setting Syntax**

```javascript
var objGraphicsImage = new nexacro.GraphicsImage();

this.Graphics00.addChild( "GraphicsImage00", objGraphicsImage );
```
- **`id`** — GraphicsImage 를 구별할 수 있는 유일값을 설정합니다.

**Remark**

-  addChild() 나 insertChild() 메소드를 사용하여 GraphicsImage 를 등록할때 오브젝트를 구별하기 위한 고유값입니다.

- 속성명이나 메소드명과 같은 예약어를 설정할 경우 오류가 발생할 수 있습니다.


---

### image

> Components > Component > Graphics > Objects > GraphicsImage > Property > image

**Description**

GraphicsImage 에 로드 할 이미지 파일의 위치 경로를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsImage.image[= strImage]
```

**Setting Syntax**

```javascript
strImage ::= 'URL(' <theme-Image> | <web-Image> | <absolute-image> | <relative-image> ')'
```
```javascript
var objGImage = new nexacro.GraphicsImage();  

objGImage.image = "URL('theme://images/V13_logo.png')";                            // 테마 이미지 
objGImage.image = "URL('http://www.tobesoft.com/images/gnb/btn_h1.gif')";  // 웹 이미지 
objGImage.image = "URL('file://C:\xplatform_logo.gif')";                                // 절대경로 이미지 
objGImage.image = "URL('Base::test.jpg')";                                                  // TypeDefinition Prefix 이미지 
objGImage.image = "URL('./test.jpg')";                                                         // 상대경로 이미지
```
- **`<theme-Image>`** — 테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<absolute-image>`** — 로컬에 정의된 이미지를 "file://절대경로" 형식으로 설정합니다.
또는 TypeDefinition 영역의 Services 에 정의된 Prefix를 사용한 형식으로 설정합니다.

* 웹브라우저환경에서는 지원하지 않습니다.
- **`<relative-image>`** — Form 의 위치를 기준으로 한 상대경로를 사용하여 설정합니다.

**Remark**

- 이미지 데이터를 로드하지 않고 이미지 파일에 대한 핸들을 관리합니다.

- GraphicsImage 에 이미지가 비동기로 로드됩니다.
   이미지 용량과 위치에 따라서 image 속성 설정 후 곧바로 화면에 표시되지 않을 수 있습니다.


---

### imageheight

> Components > Component > Graphics > Objects > GraphicsImage > Property > imageheight

**Description**

GraphicsImage 에 로드된 이미지의 실제 높이값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GraphicsImage.imageheight
```

**Remark**

- GraphicsImage 에 이미지가 비동기로 로드됩니다.
   따라서 image 속성에 값 설정 후 곧바로 imageheight 속성에 접근 시 잘못된 값을 얻을 수 있습니다.
   이미지 로드가 완료된 후 imageheight 속성에 접근하여야 합니다.

**See Also**

GraphicsImage.imagewidth


---

### imagewidth

> Components > Component > Graphics > Objects > GraphicsImage > Property > imagewidth

**Description**

GraphicsImage 에 로드된 이미지의 실제 너비값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GraphicsImage.imagewidth
```

**Remark**

- GraphicsImage 에 이미지가 비동기로 로드됩니다.
   따라서 image 속성에 값설정 후 곧바로 imagewidth 속성에 접근 시 잘못된 값을 얻을 수 있습니다.
   이미지 로드가 완료된 후 imagewidth 속성에 접근하여야 합니다.

**See Also**

GraphicsImage.imageheight


---

### opacity

> Components > Component > Graphics > Objects > GraphicsImage > Property > opacity

**Description**

GraphicsImage 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.opacity[= nOpacity]
```

**Setting Syntax**

```javascript
var objGraphicsImage = new nexacro.GraphicsImage() ;

objGraphicsImage.opacity = 0.5;
objGraphicsImage.opacity = "0.5";
objGraphicsImage.opacity = "50%";
```
- **`nOpacity`** — 0.0 ~ 1.0 사이의 값 또는 0.0% ~ 100.0% 사이의 값을 지정합니다.
0(또는 0%)을 설정하면 완전 투명, 1(또는 100%)을 설정하면 완전 불투명으로 처리됩니다.
1 이상의 값은 1로, 0 이하의 값은 0으로 처리됩니다. 마찬가지로 100% 이상의 값은 100%로, 0% 이하의 값은 0%로 처리됩니다.

Script는 숫자 또는 문자(숫자, 퍼센트 값)로 설정할 수 있습니다.

**Remark**

- opacity 속성값을 설정하지 않으면 undefined 가 설정되고 1 로 동작합니다.

- GraphicsGroup 의 경우 하위 오브젝트에 투명도가 동일하게 적용됩니다.

- 부모와 자식 오브젝트에 각각 opacity 속성이 설정되어 있으면 자식 오브젝트의 투명도는 부모의 투명도에 추가적으로 적용됩니다.
   예를 들어 부모의 opacity 값이 0.5 이고 자식의 opacity 값이 0.4 이면 결과적으로 자식 오브젝트는 0.2 의 투명도가 적용됩니다.


---

### parent

> Components > Component > Graphics > Objects > GraphicsImage > Property > parent

**Description**

GraphicsImage 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GraphicsImage.parent
```

**Remark**

- 일반적으로 addChild() 메소드를 사용하여 GraphicsImage 를 추가한 오브젝트가 parent 속성에 설정됩니다.

- GraphicsImage 가 어디에도 속해있지 않거나 부모 오브젝트로부터 제거되면 null 값을 갖습니다.


---

### visible

> Components > Component > Graphics > Objects > GraphicsImage > Property > visible

**Description**

GraphicsImage 가 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
var objGraphicsImage = new nexacro.GraphicsImage();

objGraphicsImage.visible = false;
```
- **`true`** — Graphics 컴포넌트의 redraw() 메소드 수행 시 GraphicsImage 를 표시합니다.
- **`false`** — Graphics 컴포넌트의 redraw() 메소드 수행 시 GraphicsImage 를 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하면 화면에 즉시 반영되지 않고 Graphics 컴포넌트의 redraw() 메소드가 수행될 때 반영됩니다.

- GraphicsGroup 의 경우 visible 속성을 false 로 설정하면 하위 오브젝트도 함께 화면에 표시되지 않습니다.

- visible 속성에 의해 화면에 GraphicsImage 가 표시되지 않아도 오브젝트는 존재하기 때문에 스크립트로 제어가 가능합니다.


---

### width

> Components > Component > Graphics > Objects > GraphicsImage > Property > width

**Description**

GraphicsImage 영역의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.width[= nWidth]
```

**Setting Syntax**

```javascript
var objGObject = new nexacro.GraphicsImage();

objGObject.width = 300;
```
- **`nWidth`** — GraphicsImage 영역의 너비를 pixel 단위의 숫자로 설정합니다.

"px" 단위 없이 숫자값만 설정하여야 합니다.


---

### x

> Components > Component > Graphics > Objects > GraphicsImage > Property > x

**Description**

부모 오브젝트를 기준으로 GraphicsImage 가 표시될 x 축 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.x[= nX]
```

**Setting Syntax**

```javascript
var objGraphicsImage = new nexacro.GraphicsImage( ) ;

objGraphicsImage .x = 200;
objGraphicsImage .y = 200;
```
- **`nX`** — 부모 오브젝트를 기준으로 GraphicsImage 가 표시될 x 축 좌표값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- x 속성값을 설정하지 않으면 0 으로 적용됩니다.

- x 속성은 컴포넌트의 left 속성에 해당하는 속성입니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsImage 의 표시위치가 변경되어도 x 속성은 원본위치값을 유지합니다.


---

### y

> Components > Component > Graphics > Objects > GraphicsImage > Property > y

**Description**

부모 오브젝트를 기준으로 GraphicsImage 가 표시될 y 축 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.y[= nY]
```

**Setting Syntax**

```javascript
var objGraphicsImage = new nexacro.GraphicsImage( ) ;

objGraphicsImage .x = 200;
objGraphicsImage .y = 200;
```
- **`nY`** — 부모 오브젝트를 기준으로 GraphicsImage 가 표시될 y 축 좌표값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- y 속성값을 설정하지 않으면 0 으로 적용됩니다.

- y 속성은 컴포넌트의 top 속성에 해당하는 속성입니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsImage 의 표시위치가 변경되어도 y 속성은 원본위치값을 유지합니다.


---

### 메서드 (Methods)

### destroy

> Components > Component > Graphics > Objects > GraphicsImage > Method > destroy

**Description**

GraphicsImage 를 메모리에서 완전히 삭제하는 메소드입니다.

**Syntax**

```javascript
GraphicsImage.destroy()
```

**Return**

GraphicsImage 가 정상적으로 삭제되면 true 를 반환합니다.

GraphicsImage 가 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- destroy() 메소드로 GraphicsImage 가 삭제되어도 화면에 표시된 오브젝트가 자동으로 사라지지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- GraphicsImage 가 하위 오브젝트를 가질 수 있는 경우 하위 오브젝트도 함께 삭제됩니다.


---

### getBoundRect

> Components > Component > Graphics > Objects > GraphicsImage > Method > getBoundRect

**Description**

GraphicsImage 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsImage.getBoundRect( );
```

**Parameters**

var objGraphicsImage = this.Graphics00.getObjectByID("GraphicsImage00");
var objRect = objGraphicsImage.getBoundRect();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다.
strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getBoundRect() 메소드는 GraphicsImage 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getBoundRect() 메소드의 반환값으로 GraphicsImage 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsImage 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getNextSibling

> Components > Component > Graphics > Objects > GraphicsImage > Method > getNextSibling

**Description**

GraphicsImage 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsImage.getNextSibling()
```

**Parameters**

var objGraphicsImage = this.Graphics00.getObjectByID("GraphicsImage00");
var objNext = objGraphicsImage.getNextSibling();

trace( objNext.toString() );

**Return**

부모가 동일한 다음 순서의 Graphics 오브젝트를 반환합니다.

다음 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

**Remark**

- addChild() 메소드로 추가된 순서대로 Graphics 오브젝트가 저장됩니다.

- 부모가 다른 Graphics 오브젝트는 반환되지 않습니다.


---

### getOffsetBoundRect

> Components > Component > Graphics > Objects > GraphicsImage > Method > getOffsetBoundRect

**Description**

GraphicsImage 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsImage.getOffsetBoundRect( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsImage = objGroup.getObjectByID("GraphicsImage00");
var objRect = objGraphicsImage.getOffsetBoundRect();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다.
strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetBoundRect() 메소드는 GraphicsImage 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetBoundRect() 메소드의 반환값으로 GraphicsImage 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsImage 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getOffsetRect

> Components > Component > Graphics > Objects > GraphicsImage > Method > getOffsetRect

**Description**

GraphicsImage 가 표시되는 영역정보를 부모 오브젝트 기준으로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsImage.getOffsetRect( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsImage = objGroup.getObjectByID("GraphicsImage00");
var objRect = objGraphicsImage.getOffsetRect();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsImage 오브젝트의 strokepen 속성값을 설정했더라도 외곽선 영역과 관계없이 GraphicsImage 오브젝트의 실제 영역이 반환됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetRect() 메소드는 GraphicsImage 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetRect() 메소드의 반환값으로 GraphicsImage 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsImage 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getOffsetRegion

> Components > Component > Graphics > Objects > GraphicsImage > Method > getOffsetRegion

**Description**

GraphicsImage 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsImage.getOffsetRegion( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsImage = objGroup.getObjectByID("GraphicsImage00");
var objRect = objGraphicsImage.getOffsetRegion();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsImage 오브젝트의 strokepen 속성값을 설정했더라도 반환되는 영역정보에는 안쪽 외곽선 영역이 제외됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetRegion() 메소드는 GraphicsImage 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetRegion() 메소드의 반환값으로 GraphicsImage 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsImage 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getRegion() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getPreviousSibling

> Components > Component > Graphics > Objects > GraphicsImage > Method > getPreviousSibling

**Description**

GraphicsImage 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsImage.getPreviousSibling()
```

**Parameters**

var objGraphicsImage = this.Graphics00.getObjectByID("GraphicsImage00");
var objPrev = objGraphicsImage.getPreviousSibling();

trace( objPrev.toString() );

**Return**

부모가 동일한 이전 순서의 Graphics 오브젝트를 반환합니다.

이전 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

**Remark**

- addChild() 메소드로 추가된 순서대로 Graphics 오브젝트가 저장됩니다.

- 부모가 다른 Graphics 오브젝트는 반환되지 않습니다.


---

### getRect

> Components > Component > Graphics > Objects > GraphicsImage > Method > getRect

**Description**

GraphicsImage 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsImage.getRect( );
```

**Parameters**

var objGraphicsImage = this.Graphics00.getObjectByID("GraphicsImage00");
var objRect = objGraphicsImage.getRect();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsImage 오브젝트의 strokepen 속성값을 설정했더라도 외곽선 영역과 관계없이 GraphicsImage 오브젝트의 실제 영역이 반환됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getRect() 메소드는 GraphicsImage 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getRect() 메소드의 반환값으로 GraphicsImage 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsImage 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getRegion

> Components > Component > Graphics > Objects > GraphicsImage > Method > getRegion

**Description**

GraphicsImage 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsImage.getRegion( );
```

**Parameters**

var objGraphicsImage = this.Graphics00.getObjectByID("GraphicsImage00");
var objRect = objGraphicsImage.getRegion();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsImage 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에는 안쪽 외곽선 영역이 제외됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getRegion() 메소드는 GraphicsImage 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getRegion() 메소드의 반환값으로 GraphicsImage 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsImage 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetRegion() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### isEmptyRect

> Components > Component > Graphics > Objects > GraphicsImage > Method > isEmptyRect

**Description**

GraphicsImage 에 이미지의 로딩 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsImage.isEmptyRect()
```

**Parameters**

var objGImage = new nexacro.GraphicsImage();

objGImage.image = "test.jpg";
var bResult = objGraphicsText.isEmptyRect() ;

**Return**

GraphicsImage 에 이미지가 로딩되어 있지 않으면 true 를 반환합니다.

GraphicsImage 에 이미지가 로딩되어 있으면 false 를 반환합니다.

**Remark**

- width, height 속성값과 관계없이 이미지가 로딩되어 있어야 합니다.

- 이미지에 크기가 있어야 정상적인 이미지로 판단합니다.


---

### isHitTest

> Components > Component > Graphics > Objects > GraphicsImage > Method > isHitTest

**Description**

인수로 전달된 좌표위치가 GraphicsImage 영역에 포함되는지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsImage.isHitTest( nX, nY )
```

**Parameters**

```
확인할 위치의 x 좌표값을 pixel 단위의 숫자로 설정합니다.

설정값은 Graphics 컴포넌트를 기준으로 처리됩니다.
```

**Return**

인수로 전달된 좌표위치가 GraphicsImage 영역에 포함되면 true 를 반환합니다.

인수로 전달된 좌표위치가 GraphicsImage 영역에 포함되지 않으면 false 를 반환합니다.

**Remark**

- 일반적으로 GraphicsImage 영역은 getRect() 메소드로 반환되는 영역과 일치합니다.
   getRect() 메소드의 반환값은 GraphicsImage 의 상태에 따라 변경될 수 있으므로 isHitTest() 사용에 주의하여야 합니다.

- 인수로 전달된 nX, nY 좌표는 Graphics 컴포넌트의 left, top 을 기준으로 처리됩니다.


---

### rotate

> Components > Component > Graphics > Objects > GraphicsImage > Method > rotate

**Description**

GraphicsImage 에 회전효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsImage.rotate( nAngle [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 모습에서 회전될 각도를 숫자로 설정합니다.

양수로 설정 시 시계방향으로 회전합니다.
음수로 설정 시 반시계방향으로 회전합니다.
```

**Return**

없음

**Remark**

- rotate() 메소드 수행 시 Position 과 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 rotate() 메소드가 적용된 영역정보를 반환합니다.

- rotate() 메소드는 GraphicsImage 가 표시되는 위치를 기준으로 수행됩니다.
   따라서 rotate() 메소드를 여러번 수행하면 회전 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 회전효과가 동일하게 적용됩니다.

- GraphicsImage 에 부모 오브젝트가 설정되어 있어야 rotate() 메소드가 정상적으로 수행됩니다.
   즉, rotate() 메소드 수행 전에 addChild() 메소드로 GraphicsImage 를 등록하여야 합니다.


---

### scale

> Components > Component > Graphics > Objects > GraphicsImage > Method > scale

**Description**

GraphicsImage 에 확대/축소 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsImage.scale( nScaleX, nScaleY [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 크기에서 확대/축소 될 가로 배율을 실수로 설정합니다.

1.0 보다 큰값을 설정하면 GraphicsImage 가 확대됩니다.
1.0 보다 작은값을 설정하면 GraphicsImage 가 축소됩니다.
```

**Return**

없음

**Remark**

- scale() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 scale() 메소드가 적용된 영역정보를 반환합니다.

- scale() 메소드는 GraphicsImage 가 표시되는 크기를 기준으로 수행됩니다.
   따라서 scale() 메소드를 여러번 수행하면 확대/축소 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 확대/축소 효과가 동일하게 적용됩니다.

- GraphicsImage 에 부모 오브젝트가 설정되어 있어야 scale() 메소드가 정상적으로 수행됩니다.
   즉, scale() 메소드 수행 전에 addChild() 메소드로 GraphicsImage 를 등록하여야 합니다.


---

### setClipRect

> Components > Component > Graphics > Objects > GraphicsImage > Method > setClipRect

**Description**

GraphicsImage 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다.

**Syntax**

```javascript
GraphicsImage.setClipRect( nX, nY, nWidth, nHeight );
```

**Parameters**

```
Clipping 할 영역의 x 좌표를 숫자로 설정합니다.

설정값은 GraphicsImage 의 x 속성값 위치를 0 으로 가정하고 처리됩니다.
```

**Return**

없음

**Remark**

- GraphicsImage 영역에서 Clipping 영역으로 설정된 부분만 화면에 표시됩니다.
   Transform 과 관련된 메소드(scale(), rotate() 등)가 적용된 경우 GraphicsImage 의 원본영역을 기준으로 Clipping 됩니다.

- "setClipRect( null );" 형태로 파라미터에 null 설정 시 Clipping 영역 설정이 취소됩니다.

- Clipping 이 적용되어도 GraphicsImage 의 Position 관련 속성값은 변경되지 않습니다.


---

### setImageLoadEventHandler

> Components > Component > Graphics > Objects > GraphicsImage > Method > setImageLoadEventHandler

**Description**

GraphicsImage 에 이미지가 로딩되었을 때 CallBack 으로 실행할 함수를 설정하는 메소드입니다.

**Syntax**

```javascript
GraphicsImage.setImageLoadEventHandler( objfunc, objTarget )
```

**Parameters**

```
이미지가 로딩되었을 때 실행할 함수를 설정합니다.
```

**Return**

없음

**Remark**

- 스크립트에서 GraphicsImage 오브젝트의 image 속성값을 설정하기 전에 setImageLoadEventHandler 메소드를 작성해야 합니다.


---

### setTransform

> Components > Component > Graphics > Objects > GraphicsImage > Method > setTransform

**Description**

GraphicsImage 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsImage.setTransform( strMethod );
```

**Parameters**

```
GraphicsImage 에 적용할 Transform 관련 메소드를 "," 로 구분하여 설정합니다.
translate(), scale(), rotate(), shear() 메소드를 사용할 수 있습니다.
null 값 설정 시 transform 효과가 지정되지 않은 상태로 초기화합니다.
```

**Return**

없음

**Remark**

- setTransform() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 setTransform() 메소드가 적용된 영역정보를 반환합니다.

- setTransform() 메소드는 GraphicsImage 의 원본 위치를 기준으로 수행됩니다.
   따라서 setTransform() 메소드를 여러번 수행해도 효과가 누적되어 적용되지 않습니다.

- GraphicsGroup 의 경우 하위 오브젝트에 효과가 동일하게 적용됩니다.

- GraphicsImage 에 부모 오브젝트가 설정되어 있어야 setTransform() 메소드가 정상적으로 수행됩니다.
   즉, setTransform() 메소드 수행 전에 addChild() 메소드로 GraphicsImage 를 등록하여야 합니다.

- 메소드 실행 시 strMethod 파라미터 값을 null로 설정하면 transform 효과가 지정되지 않은 상태로 초기화합니다.
  setTransform 메소드로 설정한 transform 효과 뿐 아니라 translate, scale, rotate, shear 메소드로 개별 설정한 상태도 초기화합니다.


---

### shear

> Components > Component > Graphics > Objects > GraphicsImage > Method > shear

**Description**

GraphicsImage 에 비틀기 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsImage.shear( nRadianX, nRadianY [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 모습에서 x 축 기준으로 비틀어질 각도를 라디안값으로 설정합니다.
```

**Return**

없음

**Remark**

- shear() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 shear() 메소드가 적용된 영역정보를 반환합니다.

- shear() 메소드는 GraphicsImage 가 표시되는 모습을 기준으로 수행됩니다.
   따라서 shear() 메소드를 여러번 수행하면 비틀기 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 비틀기 효과가 동일하게 적용됩니다.

- GraphicsImage 에 부모 오브젝트가 설정되어 있어야 shear() 메소드가 정상적으로 수행됩니다.
   즉, shear() 메소드 수행 전에 addChild() 메소드로 GraphicsImage 를 등록하여야 합니다.


---

### toString

> Components > Component > Graphics > Objects > GraphicsImage > Method > toString

**Description**

GraphicsImage 의 타입을 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsImage.toString();
```

**Return**

일반적으로 "[object GraphicsImage]" 형태의 문자열을 반환합니다.


---

### transform

> Components > Component > Graphics > Objects > GraphicsImage > Method > transform

**Description**

GraphicsImage 에 Transform 관련 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsImage.transform( nScaleX, nShearX, nShearY, nScaleY, nTransX, nTransY );
```

**Parameters**

```
현재 크기에서 확대/축소 될 가로 배율을 실수로 설정합니다.

1.0 보다 큰값을 설정하면 GraphicsImage 가 확대됩니다.
1.0 보다 작은값을 설정하면 GraphicsImage 가 축소됩니다.
```

**Return**

없음

**Remark**

- transform() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 transform() 메소드가 적용된 영역정보를 반환합니다.

- transform() 메소드는 GraphicsImage 가 표시되는 모습을 기준으로 수행됩니다.
   따라서 transform() 메소드를 여러번 수행하면 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 효과가 동일하게 적용됩니다.

- GraphicsImage 에 부모 오브젝트가 설정되어 있어야 transform() 메소드가 정상적으로 수행됩니다.
   즉, transform() 메소드 수행 전에 addChild() 메소드로 GraphicsImage 를 등록하여야 합니다.


---

### translate

> Components > Component > Graphics > Objects > GraphicsImage > Method > translate

**Description**

GraphicsImage 의 위치가 이동되는 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsImage.translate( nTransX, nTransY );
```

**Parameters**

```
현재 위치에서 x 축 방향으로 이동 할 거리를 pixel 단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- translate() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 translate() 메소드가 적용된 영역정보를 반환합니다.

- translate() 메소드는 GraphicsImage 가 표시되는 위치를 기준으로 수행됩니다.
   따라서 translate() 메소드를 여러번 수행하면 이동 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 이동 효과가 동일하게 적용됩니다.

- GraphicsImage 에 부모 오브젝트가 설정되어 있어야 translate() 메소드가 정상적으로 수행됩니다.
   즉, translate() 메소드 수행 전에 addChild() 메소드로 GraphicsImage 를 등록하여야 합니다.


---

## Components > Component > Graphics > GraphicsLine

### GraphicsLine

> Components > Component > Graphics > Objects > GraphicsLine

**Description**

Graphics 컴포넌트에 직선을 표시할 때 사용되는 오브젝트입니다.

**Remark**

- 스크립트로 동적생성하여 사용할 수 있으며 넥사크로 스튜디오에서 디자인 할 수 없습니다.

- 직선만 표시할 때 편리하게 사용하기 위해 제공되는 오브젝트입니다.
   직선을 설정하기 위해 x1, y1, x2, y2 4개의 속성이 사용됩니다.

**Property**

| Name | Description |
| --- | --- |
| id | GraphicsLine 의 고유 식별자를 설정하는 속성입니다. |
| opacity | GraphicsLine 영역의 투명도를 설정하는 속성입니다. |
| parent | GraphicsLine 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| strokecap | GraphicsLIne 에 표시되는 직선의 양 끝 모양을 설정하는 속성입니다. |
| strokepen | GraphicsLine 에 표시되는 직선의 색과 형식을 설정하는 속성입니다. |
| visible | GraphicsLine 가 화면에 표시될지 여부를 설정하는 속성입니다. |
| x | 부모 오브젝트를 기준으로 GraphicsLine 가 표시될 x 축 좌표값을 설정하는 속성입니다. |
| x1 | 직선이 시작하는 위치의 x 좌표값을 설정하는 속성입니다. |
| x2 | 직선이 끝나는 위치의 x 좌표값을 설정하는 속성입니다. |
| y | 부모 오브젝트를 기준으로 GraphicsLine 가 표시될 y 축 좌표값을 설정하는 속성입니다. |
| y1 | 직선이 시작하는 위치의 y 좌표값을 설정하는 속성입니다. |
| y2 | 직선이 끝나는 위치의 y 좌표값을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| destroy | GraphicsLine 를 메모리에서 완전히 삭제하는 메소드입니다. |
| getBoundRect | GraphicsLine 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| getNextSibling | GraphicsLine 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다. |
| getOffsetBoundRect | GraphicsLine 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| getOffsetRect | GraphicsLine 가 표시되는 영역정보를 부모 오브젝트 기준으로 반환하는 메소드입니다. |
| getOffsetRegion | GraphicsLine 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| getPreviousSibling | GraphicsLine 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다. |
| getRect | GraphicsLine 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다. |
| getRegion | GraphicsLine 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| isHitTest | 인수로 전달된 좌표위치가 GraphicsLine 영역에 포함되는지 여부를 반환하는 메소드입니다. |
| isPointInPath | 특정 좌표위치가 GraphicsLine 영역에 포함되는지 여부를 반환하는 메소드입니다. |
| rotate | GraphicsLine 에 회전효과를 적용하는 메소드입니다. |
| scale | GraphicsLine 에 확대/축소 효과를 적용하는 메소드입니다. |
| setClipRect | GraphicsLine 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다. |
| setTransform | GraphicsLine 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다. |
| shear | GraphicsLine 에 비틀기 효과를 적용하는 메소드입니다. |
| toString | GraphicsLine 의 타입을 문자열로 반환하는 메소드입니다. |
| transform | GraphicsLine 에 Transform 관련 효과를 적용하는 메소드입니다. |
| translate | GraphicsLine 의 위치가 이동되는 효과를 적용하는 메소드입니다. |


---

### 속성 (Properties)

### id

> Components > Component > Graphics > Objects > GraphicsLine > Property > id

**Description**

GraphicsLine 의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsLine.id
```

**Setting Syntax**

```javascript
var objGraphicsLine = new nexacro.GraphicsLine();

this.Graphics00.addChild( "GraphicsLine00", objGraphicsLine );
```
- **`id`** — GraphicsLine 를 구별할 수 있는 유일값을 설정합니다.

**Remark**

-  addChild() 나 insertChild() 메소드를 사용하여 GraphicsLine 를 등록할때 오브젝트를 구별하기 위한 고유값입니다.

- 속성명이나 메소드명과 같은 예약어를 설정할 경우 오류가 발생할 수 있습니다.


---

### opacity

> Components > Component > Graphics > Objects > GraphicsLine > Property > opacity

**Description**

GraphicsLine 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.opacity[= nOpacity]
```

**Setting Syntax**

```javascript
var objGraphicsLine = new nexacro.GraphicsLine() ;

objGraphicsLine.opacity = 0.5;
objGraphicsLine.opacity = "0.5";
objGraphicsLine.opacity = "50%";
```
- **`nOpacity`** — 0.0 ~ 1.0 사이의 값 또는 0.0% ~ 100.0% 사이의 값을 지정합니다.
0(또는 0%)을 설정하면 완전 투명, 1(또는 100%)을 설정하면 완전 불투명으로 처리됩니다.
1 이상의 값은 1로, 0 이하의 값은 0으로 처리됩니다. 마찬가지로 100% 이상의 값은 100%로, 0% 이하의 값은 0%로 처리됩니다.

Script는 숫자 또는 문자(숫자, 퍼센트 값)로 설정할 수 있습니다.

**Remark**

- opacity 속성값을 설정하지 않으면 undefined 가 설정되고 1 로 동작합니다.

- GraphicsGroup 의 경우 하위 오브젝트에 투명도가 동일하게 적용됩니다.

- 부모와 자식 오브젝트에 각각 opacity 속성이 설정되어 있으면 자식 오브젝트의 투명도는 부모의 투명도에 추가적으로 적용됩니다.
   예를 들어 부모의 opacity 값이 0.5 이고 자식의 opacity 값이 0.4 이면 결과적으로 자식 오브젝트는 0.2 의 투명도가 적용됩니다.


---

### parent

> Components > Component > Graphics > Objects > GraphicsLine > Property > parent

**Description**

GraphicsLine 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GraphicsLine.parent
```

**Remark**

- 일반적으로 addChild() 메소드를 사용하여 GraphicsLine 를 추가한 오브젝트가 parent 속성에 설정됩니다.

- GraphicsLine 가 어디에도 속해있지 않거나 부모 오브젝트로부터 제거되면 null 값을 갖습니다.


---

### strokecap

> Components > Component > Graphics > Objects > GraphicsLine > Property > strokecap

**Description**

GraphicsLIne 에 표시되는 직선의 양 끝 모양을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsLine.strokecap[= enumCap]
```

**Setting Syntax**

```javascript
enumCap ::= 'butt' | 'round' | 'square'
```
```javascript
var objGLine = new nexacro.GraphicsLine();  

objGLine.strokepen = "10px solid red"; 
objGLine.strokecap = "square";
```
- **`"butt"`** — 직선의 끝점을 벗어나지 않고 끝을 각지게 표시합니다.
- **`"round"`** — 직선의 끝점을 약간 벗어나고 끝을 둥글게 표시합니다.
- **`"square"`** — 직선의 끝점을 약간 벗어나고 끝을 각지게 표시합니다.

**Remark**

- strokecap 속성값을 설정하지 않으면 "butt" 로 적용됩니다.


---

### strokepen

> Components > Component > Graphics > Objects > GraphicsLine > Property > strokepen

**Description**

GraphicsLine 에 표시되는 직선의 색과 형식을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsLine.strokepen[= strStrokePen]
```

**Setting Syntax**

```javascript
strStrokePen ::= <line-width> <line-style> <color>

<line-width> ::= <nWidth> ['px']
<line-style> ::= 'solid' | 'dotted' | 'dashed'
<color> ::= <NamedColor> | <NumericColor>
```
```javascript
var objGLine = new nexacro.GraphicsLine();  

objGLine.strokepen = "5px solid red"; 
objGLine.strokepen = "5 dotted #999999"; 
objGLine.strokepen = "5px dotted rgb(255,0,0)";
```
- **`<nWidth>`** — 직선의 두께를 pixel 단위의 숫자로 설정합니다.
- **`<line-style>`** — 직선의 스타일을 설정합니다.

"solid" 설정 시 선이 실선으로 표시됩니다.
"dotted" 설정 시 선이 점선으로 표시됩니다.
"dashed" 설정 시 선이 긴 점선으로 표시됩니다.
- **`<NamedColor>`** — 직선의 색을 "red", "blue" 와 같이 미리 정의된 색상이름의 문자열로 설정합니다.
- **`<NumericColor>`** — "#"기호로 시작하는 6자리 hexadecimal 색상코드값으로 직선의 색을 설정합니다. ("#FF00FF")

r,g,b 값을 인자로 하는 rgb() 메소드로 직선의 색을 설정합니다. (ex-"rgb (255, 0, 255)")

**Remark**

- strokepen 속성값을 설정하지 않으면 GraphicsLine 에 직선이 표시되지 않습니다.

- strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


◆ Nexacro Runtime Environment 제약

- Nexacro Runtime Environment는 <line-style> 에 "solid" 값만 설정할 수 있습니다.


---

### visible

> Components > Component > Graphics > Objects > GraphicsLine > Property > visible

**Description**

GraphicsLine 가 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
var objGraphicsLine = new nexacro.GraphicsLine();

objGraphicsLine.visible = false;
```
- **`true`** — Graphics 컴포넌트의 redraw() 메소드 수행 시 GraphicsLine 를 표시합니다.
- **`false`** — Graphics 컴포넌트의 redraw() 메소드 수행 시 GraphicsLine 를 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하면 화면에 즉시 반영되지 않고 Graphics 컴포넌트의 redraw() 메소드가 수행될 때 반영됩니다.

- GraphicsGroup 의 경우 visible 속성을 false 로 설정하면 하위 오브젝트도 함께 화면에 표시되지 않습니다.

- visible 속성에 의해 화면에 GraphicsLine 가 표시되지 않아도 오브젝트는 존재하기 때문에 스크립트로 제어가 가능합니다.


---

### x

> Components > Component > Graphics > Objects > GraphicsLine > Property > x

**Description**

부모 오브젝트를 기준으로 GraphicsLine 가 표시될 x 축 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.x[= nX]
```

**Setting Syntax**

```javascript
var objGraphicsLine = new nexacro.GraphicsLine( ) ;

objGraphicsLine .x = 200;
objGraphicsLine .y = 200;
```
- **`nX`** — 부모 오브젝트를 기준으로 GraphicsLine 가 표시될 x 축 좌표값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- x 속성값을 설정하지 않으면 0 으로 적용됩니다.

- x 속성은 컴포넌트의 left 속성에 해당하는 속성입니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsLine 의 표시위치가 변경되어도 x 속성은 원본위치값을 유지합니다.


---

### x1

> Components > Component > Graphics > Objects > GraphicsLine > Property > x1

**Description**

직선이 시작하는 위치의 x 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsLine.x1[= nX1]
```

**Setting Syntax**

```javascript
var objGLine = new nexacro.GraphicsLine();  

objGLine.x1 = 50; 
objGLine.y1 = 50;
```
- **`nX1`** — 직선이 시작하는 위치의 x 좌표값을 pixel 단위의 숫자로 설정합니다.

설정값은 GrpahicsLine 의 x 속성값을 기준으로 처리됩니다.

**Remark**

- y1 속성값을 함께 설정하여야 정상적으로 처리됩니다.

- 직선의 두께와 색을 설정하려면 strokepen 속성을 사용하여야 합니다.

**See Also**

GraphicsLine.y1


---

### x2

> Components > Component > Graphics > Objects > GraphicsLine > Property > x2

**Description**

직선이 끝나는 위치의 x 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsLine.x2[= nX2]
```

**Setting Syntax**

```javascript
var objGLine = new nexacro.GraphicsLine();  

objGLine.x2 = 50; 
objGLine.y2 = 50;
```
- **`nX2`** — 직선이 끝나는 위치의 x 좌표값을 pixel 단위의 숫자로 설정합니다.

설정값은 GrpahicsLine 의 x 속성값을 기준으로 처리됩니다.

**Remark**

- y2 속성값을 함께 설정하여야 정상적으로 처리됩니다.

- 직선의 두께와 색을 설정하려면 strokepen 속성을 사용하여야 합니다.

**See Also**

GraphicsLine.y2


---

### y

> Components > Component > Graphics > Objects > GraphicsLine > Property > y

**Description**

부모 오브젝트를 기준으로 GraphicsLine 가 표시될 y 축 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.y[= nY]
```

**Setting Syntax**

```javascript
var objGraphicsLine = new nexacro.GraphicsLine( ) ;

objGraphicsLine .x = 200;
objGraphicsLine .y = 200;
```
- **`nY`** — 부모 오브젝트를 기준으로 GraphicsLine 가 표시될 y 축 좌표값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- y 속성값을 설정하지 않으면 0 으로 적용됩니다.

- y 속성은 컴포넌트의 top 속성에 해당하는 속성입니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsLine 의 표시위치가 변경되어도 y 속성은 원본위치값을 유지합니다.


---

### y1

> Components > Component > Graphics > Objects > GraphicsLine > Property > y1

**Description**

직선이 시작하는 위치의 y 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsLine.y1[= nY1]
```

**Setting Syntax**

```javascript
var objGLine = new nexacro.GraphicsLine();  

objGLine.x1 = 50; 
objGLine.y1 = 50;
```
- **`nY1`** — 직선이 시작하는 위치의 y 좌표값을 pixel 단위의 숫자로 설정합니다.

설정값은 GrpahicsLine 의 y 속성값을 기준으로 처리됩니다.

**Remark**

- x1 속성값을 함께 설정하여야 정상적으로 처리됩니다.

- 직선의 두께와 색을 설정하려면 strokepen 속성을 사용하여야 합니다.

**See Also**

GraphicsLine.x1


---

### y2

> Components > Component > Graphics > Objects > GraphicsLine > Property > y2

**Description**

직선이 끝나는 위치의 y 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsLine.y2[= nY2]
```

**Setting Syntax**

```javascript
var objGLine = new nexacro.GraphicsLine();  

objGLine.x2 = 50; 
objGLine.y2 = 50;
```
- **`nY2`** — 직선이 끝나는 위치의 y 좌표값을 pixel 단위의 숫자로 설정합니다.

설정값은 GrpahicsLine 의 y 속성값을 기준으로 처리됩니다.

**Remark**

- x2 속성값을 함께 설정하여야 정상적으로 처리됩니다.

- 직선의 두께와 색을 설정하려면 strokepen 속성을 사용하여야 합니다.


---

### 메서드 (Methods)

### destroy

> Components > Component > Graphics > Objects > GraphicsLine > Method > destroy

**Description**

GraphicsLine 를 메모리에서 완전히 삭제하는 메소드입니다.

**Syntax**

```javascript
GraphicsLine.destroy()
```

**Return**

GraphicsLine 가 정상적으로 삭제되면 true 를 반환합니다.

GraphicsLine 가 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- destroy() 메소드로 GraphicsLine 가 삭제되어도 화면에 표시된 오브젝트가 자동으로 사라지지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- GraphicsLine 가 하위 오브젝트를 가질 수 있는 경우 하위 오브젝트도 함께 삭제됩니다.


---

### getBoundRect

> Components > Component > Graphics > Objects > GraphicsLine > Method > getBoundRect

**Description**

GraphicsLine 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsLine.getBoundRect( );
```

**Parameters**

var objGraphicsLine = this.Graphics00.getObjectByID("GraphicsLine00");
var objRect = objGraphicsLine.getBoundRect();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다.
strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getBoundRect() 메소드는 GraphicsLine 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getBoundRect() 메소드의 반환값으로 GraphicsLine 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsLine 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getNextSibling

> Components > Component > Graphics > Objects > GraphicsLine > Method > getNextSibling

**Description**

GraphicsLine 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsLine.getNextSibling()
```

**Parameters**

var objGraphicsLine = this.Graphics00.getObjectByID("GraphicsLine00");
var objNext = objGraphicsLine.getNextSibling();

trace( objNext.toString() );

**Return**

부모가 동일한 다음 순서의 Graphics 오브젝트를 반환합니다.

다음 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

**Remark**

- addChild() 메소드로 추가된 순서대로 Graphics 오브젝트가 저장됩니다.

- 부모가 다른 Graphics 오브젝트는 반환되지 않습니다.


---

### getOffsetBoundRect

> Components > Component > Graphics > Objects > GraphicsLine > Method > getOffsetBoundRect

**Description**

GraphicsLine 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsLine.getOffsetBoundRect( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsLine = objGroup.getObjectByID("GraphicsLine00");
var objRect = objGraphicsLine.getOffsetBoundRect();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다.
strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetBoundRect() 메소드는 GraphicsLine 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetBoundRect() 메소드의 반환값으로 GraphicsLine 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsLine 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getOffsetRect

> Components > Component > Graphics > Objects > GraphicsLine > Method > getOffsetRect

**Description**

GraphicsLine 가 표시되는 영역정보를 부모 오브젝트 기준으로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsLine.getOffsetRect( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsLine = objGroup.getObjectByID("GraphicsLine00");
var objRect = objGraphicsLine.getOffsetRect();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsLine 오브젝트의 strokepen 속성값을 설정했더라도 외곽선 영역과 관계없이 GraphicsLine 오브젝트의 실제 영역이 반환됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetRect() 메소드는 GraphicsLine 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetRect() 메소드의 반환값으로 GraphicsLine 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsLine 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getOffsetRegion

> Components > Component > Graphics > Objects > GraphicsLine > Method > getOffsetRegion

**Description**

GraphicsLine 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsLine.getOffsetRegion( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsLine = objGroup.getObjectByID("GraphicsLine00");
var objRect = objGraphicsLine.getOffsetRegion();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsLine 오브젝트의 strokepen 속성값을 설정했더라도 반환되는 영역정보에는 안쪽 외곽선 영역이 제외됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetRegion() 메소드는 GraphicsLine 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetRegion() 메소드의 반환값으로 GraphicsLine 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsLine 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getRegion() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getPreviousSibling

> Components > Component > Graphics > Objects > GraphicsLine > Method > getPreviousSibling

**Description**

GraphicsLine 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsLine.getPreviousSibling()
```

**Parameters**

var objGraphicsLine = this.Graphics00.getObjectByID("GraphicsLine00");
var objPrev = objGraphicsLine.getPreviousSibling();

trace( objPrev.toString() );

**Return**

부모가 동일한 이전 순서의 Graphics 오브젝트를 반환합니다.

이전 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

**Remark**

- addChild() 메소드로 추가된 순서대로 Graphics 오브젝트가 저장됩니다.

- 부모가 다른 Graphics 오브젝트는 반환되지 않습니다.


---

### getRect

> Components > Component > Graphics > Objects > GraphicsLine > Method > getRect

**Description**

GraphicsLine 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsLine.getRect( );
```

**Parameters**

var objGraphicsLine = this.Graphics00.getObjectByID("GraphicsLine00");
var objRect = objGraphicsLine.getRect();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsLine 오브젝트의 strokepen 속성값을 설정했더라도 외곽선 영역과 관계없이 GraphicsLine 오브젝트의 실제 영역이 반환됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getRect() 메소드는 GraphicsLine 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getRect() 메소드의 반환값으로 GraphicsLine 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsLine 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getRegion

> Components > Component > Graphics > Objects > GraphicsLine > Method > getRegion

**Description**

GraphicsLine 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsLine.getRegion( );
```

**Parameters**

var objGraphicsLine = this.Graphics00.getObjectByID("GraphicsLine00");
var objRect = objGraphicsLine.getRegion();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsLine 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에는 안쪽 외곽선 영역이 제외됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getRegion() 메소드는 GraphicsLine 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getRegion() 메소드의 반환값으로 GraphicsLine 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsLine 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetRegion() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### isHitTest

> Components > Component > Graphics > Objects > GraphicsLine > Method > isHitTest

**Description**

인수로 전달된 좌표위치가 GraphicsLine 영역에 포함되는지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsLine.isHitTest( nX, nY )
```

**Parameters**

```
확인할 위치의 x 좌표값을 pixel 단위의 숫자로 설정합니다.

설정값은 Graphics 컴포넌트를 기준으로 처리됩니다.
```

**Return**

인수로 전달된 좌표위치가 GraphicsLine 영역에 포함되면 true 를 반환합니다.

인수로 전달된 좌표위치가 GraphicsLine 영역에 포함되지 않으면 false 를 반환합니다.

**Remark**

- 일반적으로 GraphicsLine 영역은 getRect() 메소드로 반환되는 영역과 일치합니다.
   getRect() 메소드의 반환값은 GraphicsLine 의 상태에 따라 변경될 수 있으므로 isHitTest() 사용에 주의하여야 합니다.

- 인수로 전달된 nX, nY 좌표는 Graphics 컴포넌트의 left, top 을 기준으로 처리됩니다.


---

### isPointInPath

> Components > Component > Graphics > Objects > GraphicsLine > Method > isPointInPath

**Description**

특정 좌표위치가 GraphicsLine 영역에 포함되는지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsLine.isPointInPath( objPoint [, nTolerance] )
```

**Parameters**

```
GraphicsLine 영역에 포함되는지 확인할 좌표값을 nexacro.Point 오브젝트로 설정합니다.

설정한 좌표값은 Graphics 컴포넌트를 기준으로 처리됩니다.
```

**Return**

objPoint 좌표위치가 GraphicsLine 영역에 포함되면 true 를 반환합니다.

objPoint 좌표위치가 GraphicsLine 영역에 포함되지 않으면 false 를 반환합니다.

**Remark**

- GraphicsLine 의 영역은 직선을 모두 포함하는 최소 크기의 사각형입니다.


---

### rotate

> Components > Component > Graphics > Objects > GraphicsLine > Method > rotate

**Description**

GraphicsLine 에 회전효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsLine.rotate( nAngle [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 모습에서 회전될 각도를 숫자로 설정합니다.

양수로 설정 시 시계방향으로 회전합니다.
음수로 설정 시 반시계방향으로 회전합니다.
```

**Return**

없음

**Remark**

- rotate() 메소드 수행 시 Position 과 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 rotate() 메소드가 적용된 영역정보를 반환합니다.

- rotate() 메소드는 GraphicsLine 가 표시되는 위치를 기준으로 수행됩니다.
   따라서 rotate() 메소드를 여러번 수행하면 회전 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 회전효과가 동일하게 적용됩니다.

- GraphicsLine 에 부모 오브젝트가 설정되어 있어야 rotate() 메소드가 정상적으로 수행됩니다.
   즉, rotate() 메소드 수행 전에 addChild() 메소드로 GraphicsLine 를 등록하여야 합니다.


---

### scale

> Components > Component > Graphics > Objects > GraphicsLine > Method > scale

**Description**

GraphicsLine 에 확대/축소 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsLine.scale( nScaleX, nScaleY [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 크기에서 확대/축소 될 가로 배율을 실수로 설정합니다.

1.0 보다 큰값을 설정하면 GraphicsLine 가 확대됩니다.
1.0 보다 작은값을 설정하면 GraphicsLine 가 축소됩니다.
```

**Return**

없음

**Remark**

- scale() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 scale() 메소드가 적용된 영역정보를 반환합니다.

- scale() 메소드는 GraphicsLine 가 표시되는 크기를 기준으로 수행됩니다.
   따라서 scale() 메소드를 여러번 수행하면 확대/축소 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 확대/축소 효과가 동일하게 적용됩니다.

- GraphicsLine 에 부모 오브젝트가 설정되어 있어야 scale() 메소드가 정상적으로 수행됩니다.
   즉, scale() 메소드 수행 전에 addChild() 메소드로 GraphicsLine 를 등록하여야 합니다.


---

### setClipRect

> Components > Component > Graphics > Objects > GraphicsLine > Method > setClipRect

**Description**

GraphicsLine 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다.

**Syntax**

```javascript
GraphicsLine.setClipRect( nX, nY, nWidth, nHeight );
```

**Parameters**

```
Clipping 할 영역의 x 좌표를 숫자로 설정합니다.

설정값은 GraphicsLine 의 x 속성값 위치를 0 으로 가정하고 처리됩니다.
```

**Return**

없음

**Remark**

- GraphicsLine 영역에서 Clipping 영역으로 설정된 부분만 화면에 표시됩니다.
   Transform 과 관련된 메소드(scale(), rotate() 등)가 적용된 경우 GraphicsLine 의 원본영역을 기준으로 Clipping 됩니다.

- "setClipRect( null );" 형태로 파라미터에 null 설정 시 Clipping 영역 설정이 취소됩니다.

- Clipping 이 적용되어도 GraphicsLine 의 Position 관련 속성값은 변경되지 않습니다.


---

### setTransform

> Components > Component > Graphics > Objects > GraphicsLine > Method > setTransform

**Description**

GraphicsLine 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsLine.setTransform( strMethod );
```

**Parameters**

```
GraphicsLine 에 적용할 Transform 관련 메소드를 "," 로 구분하여 설정합니다.
translate(), scale(), rotate(), shear() 메소드를 사용할 수 있습니다.
null 값 설정 시 transform 효과가 지정되지 않은 상태로 초기화합니다.
```

**Return**

없음

**Remark**

- setTransform() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 setTransform() 메소드가 적용된 영역정보를 반환합니다.

- setTransform() 메소드는 GraphicsLine 의 원본 위치를 기준으로 수행됩니다.
   따라서 setTransform() 메소드를 여러번 수행해도 효과가 누적되어 적용되지 않습니다.

- GraphicsGroup 의 경우 하위 오브젝트에 효과가 동일하게 적용됩니다.

- GraphicsLine 에 부모 오브젝트가 설정되어 있어야 setTransform() 메소드가 정상적으로 수행됩니다.
   즉, setTransform() 메소드 수행 전에 addChild() 메소드로 GraphicsLine 를 등록하여야 합니다.

- 메소드 실행 시 strMethod 파라미터 값을 null로 설정하면 transform 효과가 지정되지 않은 상태로 초기화합니다.
  setTransform 메소드로 설정한 transform 효과 뿐 아니라 translate, scale, rotate, shear 메소드로 개별 설정한 상태도 초기화합니다.


---

### shear

> Components > Component > Graphics > Objects > GraphicsLine > Method > shear

**Description**

GraphicsLine 에 비틀기 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsLine.shear( nRadianX, nRadianY [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 모습에서 x 축 기준으로 비틀어질 각도를 라디안값으로 설정합니다.
```

**Return**

없음

**Remark**

- shear() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 shear() 메소드가 적용된 영역정보를 반환합니다.

- shear() 메소드는 GraphicsLine 가 표시되는 모습을 기준으로 수행됩니다.
   따라서 shear() 메소드를 여러번 수행하면 비틀기 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 비틀기 효과가 동일하게 적용됩니다.

- GraphicsLine 에 부모 오브젝트가 설정되어 있어야 shear() 메소드가 정상적으로 수행됩니다.
   즉, shear() 메소드 수행 전에 addChild() 메소드로 GraphicsLine 를 등록하여야 합니다.


---

### toString

> Components > Component > Graphics > Objects > GraphicsLine > Method > toString

**Description**

GraphicsLine 의 타입을 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsLine.toString();
```

**Return**

일반적으로 "[object GraphicsLine]" 형태의 문자열을 반환합니다.


---

### transform

> Components > Component > Graphics > Objects > GraphicsLine > Method > transform

**Description**

GraphicsLine 에 Transform 관련 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsLine.transform( nScaleX, nShearX, nShearY, nScaleY, nTransX, nTransY );
```

**Parameters**

```
현재 크기에서 확대/축소 될 가로 배율을 실수로 설정합니다.

1.0 보다 큰값을 설정하면 GraphicsLine 가 확대됩니다.
1.0 보다 작은값을 설정하면 GraphicsLine 가 축소됩니다.
```

**Return**

없음

**Remark**

- transform() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 transform() 메소드가 적용된 영역정보를 반환합니다.

- transform() 메소드는 GraphicsLine 가 표시되는 모습을 기준으로 수행됩니다.
   따라서 transform() 메소드를 여러번 수행하면 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 효과가 동일하게 적용됩니다.

- GraphicsLine 에 부모 오브젝트가 설정되어 있어야 transform() 메소드가 정상적으로 수행됩니다.
   즉, transform() 메소드 수행 전에 addChild() 메소드로 GraphicsLine 를 등록하여야 합니다.


---

### translate

> Components > Component > Graphics > Objects > GraphicsLine > Method > translate

**Description**

GraphicsLine 의 위치가 이동되는 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsLine.translate( nTransX, nTransY );
```

**Parameters**

```
현재 위치에서 x 축 방향으로 이동 할 거리를 pixel 단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- translate() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 translate() 메소드가 적용된 영역정보를 반환합니다.

- translate() 메소드는 GraphicsLine 가 표시되는 위치를 기준으로 수행됩니다.
   따라서 translate() 메소드를 여러번 수행하면 이동 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 이동 효과가 동일하게 적용됩니다.

- GraphicsLine 에 부모 오브젝트가 설정되어 있어야 translate() 메소드가 정상적으로 수행됩니다.
   즉, translate() 메소드 수행 전에 addChild() 메소드로 GraphicsLine 를 등록하여야 합니다.


---

## Components > Component > Graphics > GraphicsPath

### GraphicsPath

> Components > Component > Graphics > Objects > GraphicsPath

**Description**

Graphics 컴포넌트에 경로를 표시할 때 사용되는 오브젝트입니다.

**Remark**

- 스크립트로 동적생성하여 사용할 수 있으며 넥사크로 스튜디오에서 디자인 할 수 없습니다.

- GraphicsPath 오브젝트는 한 개의 경로만 표시할 수 있습니다.
   연속되지 않는 경로를 표시하려면 한 개 이상의 GraphicsPath 오브젝트를 사용하여야 합니다.

- GraphicsPath 에서 moveTo() 메소드는 한번만 적용됩니다.

**Property**

| Name | Description |
| --- | --- |
| fillstyle | GraphicsPath 의 내부영역에 채워질 형식과 색을 설정하는 속성입니다. |
| id | GraphicsPath 의 고유 식별자를 설정하는 속성입니다. |
| miterlimit | strokejoin 속성값이 "miter" 일 때 특정 조건에서 "bevel" 로 변경적용될 비율값을 설정하는 속성입니다. |
| opacity | GraphicsPath 영역의 투명도를 설정하는 속성입니다. |
| parent | GraphicsPath 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| strokecap | GraphicsPath 에 표시되는 경로의 양 끝 모양을 설정하는 속성입니다. |
| strokejoin | GraphicsPath 에 표시되는 경로의 연결점 모양을 설정하는 속성입니다. |
| strokepen | GraphicsPath 에 표시되는 경로의 색과 형식을 설정하는 속성입니다. |
| visible | GraphicsPath 가 화면에 표시될지 여부를 설정하는 속성입니다. |
| x | 부모 오브젝트를 기준으로 GraphicsPath 가 표시될 x 축 좌표값을 설정하는 속성입니다. |
| y | 부모 오브젝트를 기준으로 GraphicsPath 가 표시될 y 축 좌표값을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| arcTo | 현재위치에서 인수로 전달된 위치까지 타원호 경로를 GraphicsPath 에 추가하는 메소드입니다. |
| bezierCurveTo | 현재위치에서 인수로 전달된 위치까지 cubic Bezier 곡선경로를 GraphicsPath 에 추가하는 메소드입니다. |
| clear | GraphicsPath 에 설정된 경로 데이터를 모두 삭제하는 메소드입니다. |
| closePath | GraphicsPath 에 설정된 경로의 끝점과 시작점을 직선으로 연결하는 메소드입니다. |
| destroy | GraphicsPath 를 메모리에서 완전히 삭제하는 메소드입니다. |
| getBoundRect | GraphicsPath 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| getNextSibling | GraphicsPath 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다. |
| getOffsetBoundRect | GraphicsPath 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| getOffsetRect | GraphicsPath 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| getOffsetRegion | GraphicsPath 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| getPathData | GraphicsPath 에 설정된 경로 데이터를 SVG 형식의 문자열로 반환하는 메소드입니다. |
| getPreviousSibling | GraphicsPath 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다. |
| getRect | GraphicsPath 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다. |
| getRegion | GraphicsPath 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| hasSegments | GraphicsPath 에 경로 데이터가 설정되어 있는지 여부를 반환하는 메소드입니다. |
| isHitTest | 인수로 전달된 좌표위치가 GraphicsPath 영역에 포함되는지 여부를 반환하는 메소드입니다. |
| isPointInPath | 특정 좌표위치가 GraphicsPath 영역에 포함되는지 여부를 반환하는 메소드입니다. |
| lineTo | 현재위치에서 인수로 전달된 위치까지 직선 경로를 GraphicsPath 에 추가하는 메소드입니다. |
| moveBy | GraphicsPath 의 시작위치를 이동하는 메소드입니다. |
| moveTo | GraphicsPath 의 시작위치를 설정하는 메소드입니다. |
| quadraticCurveTo | 현재위치에서 인수로 전달된 위치까지 quadratic Bezier 곡선 경로를 GraphicsPath 에 추가하는 메소드입니다. |
| rotate | GraphicsPath 에 회전효과를 적용하는 메소드입니다. |
| scale | GraphicsPath 에 확대/축소 효과를 적용하는 메소드입니다. |
| setClipRect | GraphicsPath 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다. |
| setPathData | GraphicsPath 에 SVG 형식으로 경로 데이터를 설정하는 메소드입니다. |
| setTransform | GraphicsPath 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다. |
| shear | GraphicsPath 에 비틀기 효과를 적용하는 메소드입니다. |
| toString | GraphicsPath 의 타입을 문자열로 반환하는 메소드입니다. |
| transform | GraphicsPath 에 Transform 관련 효과를 적용하는 메소드입니다. |
| translate | GraphicsPath 의 위치가 이동되는 효과를 적용하는 메소드입니다. |


---

### 속성 (Properties)

### fillstyle

> Components > Component > Graphics > Objects > GraphicsPath > Property > fillstyle

**Description**

GraphicsPath 의 내부영역에 채워질 형식과 색을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.fillstyle[= strFillStyle]
```

**Setting Syntax**

```javascript
strFillStyle ::= <color> | <linear-gradient>

<color> ::= <NamedColor> | <NumericColor>

<linear-gradient> ::= 'linear-gradient(' [<angle> , ] <color-stop> ')'
<angle> ::= 'to left' | 'to right' | 'to top' | 'to bottom' | 'to left top' | 'to left bottom' | 'to right top' | 'to right bottom'
<color-stop> ::= <startcolor-stop> [',' <listcolor-stop>] ',' <endcolor-stop>
<startcolor-stop> ::= <color> [<percentage>'%']
<listcolor-stop> ::= <color> [<percentage>'%'] [',' <listcolor-stop>]*
<endcolor-stop> ::= <color> [<percentage>'%']
```
```javascript
var objGObject = new nexacro.GraphicsPath();

objGObject.fillstyle = "red";
objGObject.fillstyle = "rgb(255,255,0)";
objGObject.fillstyle = "#ffffaa";
objGObject.fillstyle = "linear-gradient(red, yellow)";
objGObject.fillstyle = "linear-gradient(to right, red, yellow)";
objGObject.fillstyle = "linear-gradient(to right, red 50%, yellow)";
objGObject.fillstyle = "linear-gradient(red, yellow 25%, green 50%, blue 75%, indigo)";
objGObject.fillstyle = "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)";
```
- **`<color>`** — GraphicsPath 의 내부영역에 채워질 색을 색상이름 또는 색상코드로 설정합니다.
- **`<NamedColor>`** — "red", "blue" 와 같이 미리 정의된 색상이름의 문자열로 내부영역의 색을 설정합니다.
- **`<NumericColor>`** — "#"기호로 시작하는 6자리 HexaDecimal 색상코드값으로 내부영역의 색을 설정합니다. ("#FF00FF")

r,g,b 값을 인자로 하는 rgb() 메소드로 내부영역의 색을 설정합니다. ("rgb (255, 0, 255)")
- **`<linear-gradient>`** — GraphicsPath 의 내부영역을 그라데이션으로 설정합니다.

"linear-gradient ( [방향, 색상값, 색상값, ...] )" 형식으로 그라데이션 방향과 색상을 설정할 수 있습니다.
<listcolor-stop> 에 한 개 이상의 색상값을 설정할 수 있습니다.
- **`<angle>`** — 그라데이션의 표시 방향을 설정합니다.

"to left" 설정 시 오른쪽에서 왼쪽 방향으로 그라데이션이 표시됩니다.
"to right" 설정 시 왼쪽에서 오른쪽 방향으로 그라데이션이 표시됩니다.
"to top" 설정 시 아래쪽에서 윗쪽 방향으로 그라데이션이 표시됩니다.
"to bottom" 설정 시 윗쪽에서 아래쪽 방향으로 그라데이션이 표시됩니다.
"to left top" 설정 시 오른쪽 아래 방향에서 왼쪽 윗 방향으로 그라데이션이 표시됩니다.
"to left bottom" 설정 시 오른쪽 윗 뱡향에서 왼쪽 아래 방향으로 그라데이션이 표시됩니다.
"to right top" 설정 시 왼쪽 아래 방향에서 오른쪽 윗 방향으로 그라데이션이 표시됩니다.
"to right bottom" 설정 시 왼쪽 윗 방향에서 오른쪽 아래 방향으로 그라데이션이 표시됩니다.

값을 설정하지 않으면 "to bottom" 으로 적용됩니다.
- **`<color-stop>`** — 그라데이션의 시작점, 끝점, 중간점의 색을 설정합니다.

<angle> 값에 따라 시작점과 끝점의 위치가 결정됩니다.
<angle> 값에 설정된 표시 방향이 시작되는 위치가 시작점으로 적용됩니다.

예를 들어 <angle> 값이 "to left" 이면 GraphicsPath 영역의 오른쪽 위치가 시작점이 되고, 왼쪽 위치가 끝점이 됩니다.
<angle> 값이 "to right" 이면 GraphicsPath 영역의 왼쪽 위치가 시작점이 되고, 오른쪽 위치가 끝점이 됩니다.

그라데이션 중간점의 색은 한개 이상 설정할 수 있으며 <percentage> 값 생략 시 균등하게 표시됩니다.
- **`<startcolor-stop>`** — 그라데이션의 시작점 색을 설정합니다.

<angle> 값에 설정된 방향으로 시작점 위치가 결정됩니다.
시작점의 <percentage> 값을 0 이상으로 설정 시 "시작점~설정값"까지 동일한 색상으로 표시됩니다.
- **`<listcolor-stop>`** — 그라데이션의 중간점 색을 설정합니다.

시작점과 끝점 사이에 적용될 중간색을 ","로 구분하여 여러개 설정할 수 있습니다.
- **`<endcolor-stop>`** — 그라데이션의 끝점 색을 설정합니다.

<angle> 값에 설정된 방향으로 끝점 위치가 결정됩니다.
끝점의 <percentage> 값을 100 이하로 설정 시 "설정값~끝점"까지 동일한 색상으로 표시됩니다.
- **`<percentage>`** — <color> 에 해당하는 색이 적용될 위치를 비율값으로 설정합니다.

<angle> 값에 의해 결정된 시작점이 "0%" 로 적용됩니다.
<angle> 값에 의해 결정된 끝점이 "100%" 로 적용됩니다.

<percentage> 값은 0 에서 100 사이의 값을 설정해야 합니다.
<percentage> 값을 생략하면 균등한 위치에 <color> 값이 적용됩니다.

**Remark**

- GraphicsPaths, GraphicsPath 는 닫힌 경로가 존재할 경우에만 내부영역을 처리합니다.


---

### id

> Components > Component > Graphics > Objects > GraphicsPath > Property > id

**Description**

GraphicsPath 의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsPath.id
```

**Setting Syntax**

```javascript
var objGraphicsPath = new nexacro.GraphicsPath();

this.Graphics00.addChild( "GraphicsPath00", objGraphicsPath );
```
- **`id`** — GraphicsPath 를 구별할 수 있는 유일값을 설정합니다.

**Remark**

-  addChild() 나 insertChild() 메소드를 사용하여 GraphicsPath 를 등록할때 오브젝트를 구별하기 위한 고유값입니다.

- 속성명이나 메소드명과 같은 예약어를 설정할 경우 오류가 발생할 수 있습니다.


---

### miterlimit

> Components > Component > Graphics > Objects > GraphicsPath > Property > miterlimit

**Description**

strokejoin 속성값이 "miter" 일 때 특정 조건에서 "bevel" 로 변경적용될 비율값을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.miterlimit[= nLimit]
```

**Setting Syntax**

```javascript
var objGObject = new nexacro.GraphicsPath();

objGObject.miterlimit = 1;
```
- **`nLimit`** — strokejoin 속성값이 "bevel" 로 변경될 최소 비율을 1 이상의 숫자로 설정합니다.

1 설정 시 strokejoin 속성이 항상 "bevel" 로 적용됩니다.
1 보다 큰 값을 설정하면 연관 요소들을 함께 판단하여 "bevel" 로 적용됩니다.

**Remark**

- miterlimit 속성값을 설정하지 않으면 10 으로 적용됩니다.

- 일반적으로 miterlimit 속성값이 "miter_length / (stroke_width / 2)" 의 값보다 작으면 strokejoin 속성값이 "bevel" 로 적용됩니다.
   > miter_length : 두 선의 중심이 만나는 점에서 테두리가 만나 뾰족하게 돌출된 끝점까지의 거리
   > stroke_width : 선의 두께


---

### opacity

> Components > Component > Graphics > Objects > GraphicsPath > Property > opacity

**Description**

GraphicsPath 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.opacity[= nOpacity]
```

**Setting Syntax**

```javascript
var objGraphicsPath = new nexacro.GraphicsPath() ;

objGraphicsPath.opacity = 0.5;
objGraphicsPath.opacity = "0.5";
objGraphicsPath.opacity = "50%";
```
- **`nOpacity`** — 0.0 ~ 1.0 사이의 값 또는 0.0% ~ 100.0% 사이의 값을 지정합니다.
0(또는 0%)을 설정하면 완전 투명, 1(또는 100%)을 설정하면 완전 불투명으로 처리됩니다.
1 이상의 값은 1로, 0 이하의 값은 0으로 처리됩니다. 마찬가지로 100% 이상의 값은 100%로, 0% 이하의 값은 0%로 처리됩니다.

Script는 숫자 또는 문자(숫자, 퍼센트 값)로 설정할 수 있습니다.

**Remark**

- opacity 속성값을 설정하지 않으면 undefined 가 설정되고 1 로 동작합니다.

- GraphicsGroup 의 경우 하위 오브젝트에 투명도가 동일하게 적용됩니다.

- 부모와 자식 오브젝트에 각각 opacity 속성이 설정되어 있으면 자식 오브젝트의 투명도는 부모의 투명도에 추가적으로 적용됩니다.
   예를 들어 부모의 opacity 값이 0.5 이고 자식의 opacity 값이 0.4 이면 결과적으로 자식 오브젝트는 0.2 의 투명도가 적용됩니다.


---

### parent

> Components > Component > Graphics > Objects > GraphicsPath > Property > parent

**Description**

GraphicsPath 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GraphicsPath.parent
```

**Remark**

- 일반적으로 addChild() 메소드를 사용하여 GraphicsPath 를 추가한 오브젝트가 parent 속성에 설정됩니다.

- GraphicsPath 가 어디에도 속해있지 않거나 부모 오브젝트로부터 제거되면 null 값을 갖습니다.


---

### strokecap

> Components > Component > Graphics > Objects > GraphicsPath > Property > strokecap

**Description**

GraphicsPath 에 표시되는 경로의 양 끝 모양을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsPath.strokecap[= enumCap]
```

**Setting Syntax**

```javascript
enumCap ::= 'butt' | 'round' | 'square'
```
```javascript
var objGPath = new nexacro.GraphicsPath();  

objGPath.strokepen = "10px solid red"; 
objGPath.strokejoin = "bevel"; 
objGPath.strokecap = "square";
```
- **`"butt"`** — 경로의 끝점을 벗어나지 않고 끝을 각지게 표시합니다.
- **`"round"`** — 경로의 끝점을 약간 벗어나고 끝을 둥글게 표시합니다.
- **`"square"`** — 경로의 끝점을 약간 벗어나고 끝을 각지게 표시합니다.

**Remark**

- strokecap 속성값을 설정하지 않으면 "butt" 로 적용됩니다.

- strokecap 속성은 경로의 시작점과 끝점 모양을 결정하며 연결점의 모양은 strokejoin 속성으로 설정합니다.

- GraphicsPath 에 닫힌 경로가 설정되어 있을 경우 strokecap 속성은 적용되지 않습니다.


---

### strokejoin

> Components > Component > Graphics > Objects > GraphicsPath > Property > strokejoin

**Description**

GraphicsPath 에 표시되는 경로의 연결점 모양을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsPath.strokejoin[= enumJoin]
```

**Setting Syntax**

```javascript
enumJoin ::= 'miter' | 'round' | 'bevel'
```
```javascript
var objGPath = new nexacro.GraphicsPath();  

objGPath.strokepen = "10px solid red"; 
objGPath.strokejoin = "bevel";
```
- **`"miter"`** — 경로가 만나는 중심점에서 테두리가 만나는 바깥점까지 뾰족하게 표시됩니다.

miterlimit 속성에 의해 "bevel" 로 자동 적용될 수 있습니다.
- **`"round"`** — 경로가 만나는 중심점에서 테두리가 만나는 바깥점까지 둥글게 표시됩니다.
- **`"bevel"`** — 경로가 만나는 중심점에서 테두리가 만나는 바깥점쪽이 칼로 잘라낸것 처럼 표시됩니다.

**Remark**

- strokejoin 속성값을 설정하지 않으면 "miter" 로 적용됩니다.

- strokejoin 속성은 연결점의 모양을 결정하며 경로의 시작점과 끝점 모양은 strokecap 속성으로 설정합니다.


---

### strokepen

> Components > Component > Graphics > Objects > GraphicsPath > Property > strokepen

**Description**

GraphicsPath 에 표시되는 경로의 색과 형식을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsPath.strokepen[= strStrokePen]
```

**Setting Syntax**

```javascript
strStrokePen ::= <line-width> <line-style> <color>

<line-width> ::= <nWidth> ['px']
<line-style> ::= 'solid' | 'dotted' | 'dashed'
<color> ::= <NamedColor> | <NumericColor>
```
```javascript
var objGPath = new nexacro.GraphicsPath();  

objGPath.strokepen = "5px solid red"; 
objGPath.strokepen = "5 dotted #999999"; 
objGPath.strokepen = "5px dotted rgb(255,0,0)";
```
- **`<nWidth>`** — 경로의 두께를 pixel 단위의 숫자로 설정합니다.
- **`<line-style>`** — 경로의 스타일을 설정합니다.

"solid" 설정 시 경로가 실선으로 표시됩니다.
"dotted" 설정 시 경로가 점선으로 표시됩니다.
"dashed" 설정 시 경로가 긴 점선으로 표시됩니다.
- **`<NamedColor>`** — 경로의 색을 "red", "blue" 와 같이 미리 정의된 색상이름의 문자열로 설정합니다.
- **`<NumericColor>`** — "#"기호로 시작하는 6자리 hexadecimal 색상코드값으로 경로의 색을 설정합니다. ("#FF00FF")

r,g,b 값을 인자로 하는 rgb() 메소드로 경로의 색을 설정합니다. (ex-"rgb (255, 0, 255)")

**Remark**

- strokepen 속성값을 설정하지 않으면 GraphicsPath 에 경로가 표시되지 않습니다.

- strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


◆ Nexacro Runtime Environment 제약

- Nexacro Runtime Environment는 <line-style> 에 "solid" 값만 설정할 수 있습니다.


---

### visible

> Components > Component > Graphics > Objects > GraphicsPath > Property > visible

**Description**

GraphicsPath 가 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
var objGraphicsPath = new nexacro.GraphicsPath();

objGraphicsPath.visible = false;
```
- **`true`** — Graphics 컴포넌트의 redraw() 메소드 수행 시 GraphicsPath 를 표시합니다.
- **`false`** — Graphics 컴포넌트의 redraw() 메소드 수행 시 GraphicsPath 를 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하면 화면에 즉시 반영되지 않고 Graphics 컴포넌트의 redraw() 메소드가 수행될 때 반영됩니다.

- GraphicsGroup 의 경우 visible 속성을 false 로 설정하면 하위 오브젝트도 함께 화면에 표시되지 않습니다.

- visible 속성에 의해 화면에 GraphicsPath 가 표시되지 않아도 오브젝트는 존재하기 때문에 스크립트로 제어가 가능합니다.


---

### x

> Components > Component > Graphics > Objects > GraphicsPath > Property > x

**Description**

부모 오브젝트를 기준으로 GraphicsPath 가 표시될 x 축 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.x[= nX]
```

**Setting Syntax**

```javascript
var objGraphicsPath = new nexacro.GraphicsPath( ) ;

objGraphicsPath .x = 200;
objGraphicsPath .y = 200;
```
- **`nX`** — 부모 오브젝트를 기준으로 GraphicsPath 가 표시될 x 축 좌표값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- x 속성값을 설정하지 않으면 0 으로 적용됩니다.

- x 속성은 컴포넌트의 left 속성에 해당하는 속성입니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsPath 의 표시위치가 변경되어도 x 속성은 원본위치값을 유지합니다.


---

### y

> Components > Component > Graphics > Objects > GraphicsPath > Property > y

**Description**

부모 오브젝트를 기준으로 GraphicsPath 가 표시될 y 축 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.y[= nY]
```

**Setting Syntax**

```javascript
var objGraphicsPath = new nexacro.GraphicsPath( ) ;

objGraphicsPath .x = 200;
objGraphicsPath .y = 200;
```
- **`nY`** — 부모 오브젝트를 기준으로 GraphicsPath 가 표시될 y 축 좌표값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- y 속성값을 설정하지 않으면 0 으로 적용됩니다.

- y 속성은 컴포넌트의 top 속성에 해당하는 속성입니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsPath 의 표시위치가 변경되어도 y 속성은 원본위치값을 유지합니다.


---

### 메서드 (Methods)

### arcTo

> Components > Component > Graphics > Objects > GraphicsPath > Method > arcTo

**Description**

현재위치에서 인수로 전달된 위치까지 타원호 경로를 GraphicsPath 에 추가하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.arcTo(  nX, nY, nRadiusX, nRadiusY, nRotation, bClockwise, bLarge )
```

**Parameters**

```
추가할 타원호 경로의 x 좌표 위치를 pixel 단위의 숫자로 설정합니다.

설정값은 GrpahicsPath 의 x 속성값을 기준으로 처리됩니다.
```

**Return**

없음

**Remark**

- arcTo() 메소드 실행 후 현재위치가 nX, nY 로 변경됩니다.

- GraphicsPath 의 시작위치를 설정하지 않으면 경로가 정상적으로 표시되지 않을 수 있습니다.

- 타원호 경로는 아래와 같은 절차에 의해 결정됩니다.
  1. 타원호는 현재위치에서 시작하여 nX, nY 위치에서 끝납니다.
  2. 타원은 nRadiusX, nRadiusY 값을 가로,세로 반지름으로 갖습니다.
  3. 타원의 x 축은 nRotation 값만큼 회전합니다.
  4. 1~3번 조건에 의해 2개 또는 4개의 타원호 경로가 존재하게 됩니다.
  5. bClockwise 와 bLarge 값에 의해 4번의 타원호 중 1개의 타원호가 경로로 결정됩니다.

**See Also**

GraphicsPath.bezierCurveToGraphicsPath.lineToGraphicsPath.moveToGraphicsPath.quadraticCurveToGraphicsPath.setPathData


---

### bezierCurveTo

> Components > Component > Graphics > Objects > GraphicsPath > Method > bezierCurveTo

**Description**

현재위치에서 인수로 전달된 위치까지 cubic Bezier 곡선경로를 GraphicsPath 에 추가하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.bezierCurveTo( nCBeginX, nCBeginY, nCEndX, nCEndY, nX, nY )
```

**Parameters**

```
cubic Bezier 곡선을 결정할 컨트롤 포인트의 시작점 x 좌표 위치를 pixel 단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- cubicCurveTo() 메소드 실행 후 현재위치가 nX, nY 로 변경됩니다.

- 인수로 전달된 좌표는 GrpahicsPath 의 x, y 속성값을 기준으로 처리됩니다.

- GraphicsPath 의 시작위치를 설정하지 않으면 경로가 정상적으로 표시되지 않을 수 있습니다.

**See Also**

GraphicsPath.arcToGraphicsPath.lineToGraphicsPath.moveToGraphicsPath.quadraticCurveToGraphicsPath.setPathData


---

### clear

> Components > Component > Graphics > Objects > GraphicsPath > Method > clear

**Description**

GraphicsPath 에 설정된 경로 데이터를 모두 삭제하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.clear()
```

**Return**

없음


---

### closePath

> Components > Component > Graphics > Objects > GraphicsPath > Method > closePath

**Description**

GraphicsPath 에 설정된 경로의 끝점과 시작점을 직선으로 연결하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.closePath()
```

**Parameters**

var objGPath = new nexacro.GraphicsPath();

objGPath.setPathData("M200,40 L100,160 L300,160");
objGPath.closePath();

**Return**

없음

**Remark**

- 끝점과 시작점을 연결하여 닫힌경로로 만드는 메소드입니다.

- GraphicPath 에 경로 데이터가 없을 경우 closePath() 메소드는 수행되지 않습니다.


---

### destroy

> Components > Component > Graphics > Objects > GraphicsPath > Method > destroy

**Description**

GraphicsPath 를 메모리에서 완전히 삭제하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.destroy()
```

**Return**

GraphicsPath 가 정상적으로 삭제되면 true 를 반환합니다.

GraphicsPath 가 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- destroy() 메소드로 GraphicsPath 가 삭제되어도 화면에 표시된 오브젝트가 자동으로 사라지지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- GraphicsPath 가 하위 오브젝트를 가질 수 있는 경우 하위 오브젝트도 함께 삭제됩니다.


---

### getBoundRect

> Components > Component > Graphics > Objects > GraphicsPath > Method > getBoundRect

**Description**

GraphicsPath 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.getBoundRect( );
```

**Parameters**

var objGraphicsPath = this.Graphics00.getObjectByID("GraphicsPath00");
var objRect = objGraphicsPath.getBoundRect();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다.
strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getBoundRect() 메소드는 GraphicsPath 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getBoundRect() 메소드의 반환값으로 GraphicsPath 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPath 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getNextSibling

> Components > Component > Graphics > Objects > GraphicsPath > Method > getNextSibling

**Description**

GraphicsPath 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.getNextSibling()
```

**Parameters**

var objGraphicsPath = this.Graphics00.getObjectByID("GraphicsPath00");
var objNext = objGraphicsPath.getNextSibling();

trace( objNext.toString() );

**Return**

부모가 동일한 다음 순서의 Graphics 오브젝트를 반환합니다.

다음 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

**Remark**

- addChild() 메소드로 추가된 순서대로 Graphics 오브젝트가 저장됩니다.

- 부모가 다른 Graphics 오브젝트는 반환되지 않습니다.


---

### getOffsetBoundRect

> Components > Component > Graphics > Objects > GraphicsPath > Method > getOffsetBoundRect

**Description**

GraphicsPath 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.getOffsetBoundRect( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsPath = objGroup.getObjectByID("GraphicsPath00");
var objRect = objGraphicsPath.getOffsetBoundRect();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다.
strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetBoundRect() 메소드는 GraphicsPath 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetBoundRect() 메소드의 반환값으로 GraphicsPath 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPath 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getOffsetRect

> Components > Component > Graphics > Objects > GraphicsPath > Method > getOffsetRect

**Description**

GraphicsPath 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.getOffsetBoundRect( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsPath = objGroup.getObjectByID("GraphicsPath00");
var objRect = objGraphicsPath.getOffsetBoundRect();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다.
strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetBoundRect() 메소드는 GraphicsPath 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetBoundRect() 메소드의 반환값으로 GraphicsPath 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPath 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getOffsetRegion

> Components > Component > Graphics > Objects > GraphicsPath > Method > getOffsetRegion

**Description**

GraphicsPath 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.getOffsetRegion( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsPath = objGroup.getObjectByID("GraphicsPath00");
var objRect = objGraphicsPath.getOffsetRegion();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsPath 오브젝트의 strokepen 속성값을 설정했더라도 반환되는 영역정보에는 안쪽 외곽선 영역이 제외됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetRegion() 메소드는 GraphicsPath 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetRegion() 메소드의 반환값으로 GraphicsPath 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPath 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getRegion() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getPathData

> Components > Component > Graphics > Objects > GraphicsPath > Method > getPathData

**Description**

GraphicsPath 에 설정된 경로 데이터를 SVG 형식의 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.getPathData()
```

**Return**

경로 데이터를 SVG 형식의 문자열로 반환합니다.

**Remark**

- 경로 데이터는 공백문자로 구분됩니다.

**See Also**

GraphicsPath.setPathData


---

### getPreviousSibling

> Components > Component > Graphics > Objects > GraphicsPath > Method > getPreviousSibling

**Description**

GraphicsPath 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.getPreviousSibling()
```

**Parameters**

var objGraphicsPath = this.Graphics00.getObjectByID("GraphicsPath00");
var objPrev = objGraphicsPath.getPreviousSibling();

trace( objPrev.toString() );

**Return**

부모가 동일한 이전 순서의 Graphics 오브젝트를 반환합니다.

이전 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

**Remark**

- addChild() 메소드로 추가된 순서대로 Graphics 오브젝트가 저장됩니다.

- 부모가 다른 Graphics 오브젝트는 반환되지 않습니다.


---

### getRect

> Components > Component > Graphics > Objects > GraphicsPath > Method > getRect

**Description**

GraphicsPath 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.getRect( );
```

**Parameters**

var objGraphicsPath = this.Graphics00.getObjectByID("GraphicsPath00");
var objRect = objGraphicsPath.getRect();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsPath 오브젝트의 strokepen 속성값을 설정했더라도 외곽선 영역과 관계없이 GraphicsPath 오브젝트의 실제 영역이 반환됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getRect() 메소드는 GraphicsPath 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getRect() 메소드의 반환값으로 GraphicsPath 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPath 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getRegion

> Components > Component > Graphics > Objects > GraphicsPath > Method > getRegion

**Description**

GraphicsPath 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.getRegion( );
```

**Parameters**

var objGraphicsPath = this.Graphics00.getObjectByID("GraphicsPath00");
var objRect = objGraphicsPath.getRegion();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsPath 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에는 안쪽 외곽선 영역이 제외됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getRegion() 메소드는 GraphicsPath 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getRegion() 메소드의 반환값으로 GraphicsPath 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPath 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetRegion() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### hasSegments

> Components > Component > Graphics > Objects > GraphicsPath > Method > hasSegments

**Description**

GraphicsPath 에 경로 데이터가 설정되어 있는지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.hasSegments()
```

**Parameters**

var objGPath = new nexacro.GraphicsPath();

objGPath.setPathData("M 15,0 L 0,30 L 30,30Z");
var bResult = objGPath.hasSegments() ;

**Return**

GraphicsPath 에 경로 데이터가 설정되어 있으면 true 를 반환합니다.

GraphicsPath 에 경로 데이터가 설정되어 있지 않으면 false 를 반환합니다.

**Remark**

- moveTo(), lineTo(), arcTo() 와 같은 메소드를 사용하여 경로를 추가합니다.


---

### isHitTest

> Components > Component > Graphics > Objects > GraphicsPath > Method > isHitTest

**Description**

인수로 전달된 좌표위치가 GraphicsPath 영역에 포함되는지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.isHitTest( nX, nY )
```

**Parameters**

```
확인할 위치의 x 좌표값을 pixel 단위의 숫자로 설정합니다.

설정값은 Graphics 컴포넌트를 기준으로 처리됩니다.
```

**Return**

인수로 전달된 좌표위치가 GraphicsPath 영역에 포함되면 true 를 반환합니다.

인수로 전달된 좌표위치가 GraphicsPath 영역에 포함되지 않으면 false 를 반환합니다.

**Remark**

- 일반적으로 GraphicsPath 영역은 getRect() 메소드로 반환되는 영역과 일치합니다.
   getRect() 메소드의 반환값은 GraphicsPath 의 상태에 따라 변경될 수 있으므로 isHitTest() 사용에 주의하여야 합니다.

- 인수로 전달된 nX, nY 좌표는 Graphics 컴포넌트의 left, top 을 기준으로 처리됩니다.


---

### isPointInPath

> Components > Component > Graphics > Objects > GraphicsPath > Method > isPointInPath

**Description**

특정 좌표위치가 GraphicsPath 영역에 포함되는지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.isPointInPath( objPoint [, nTolerance] )
```

**Parameters**

```
GraphicsPath 영역에 포함되는지 확인할 좌표값을 nexacro.Point 오브젝트로 설정합니다.

설정한 좌표값은 Graphics 컴포넌트를 기준으로 처리됩니다.
```

**Return**

objPoint 좌표위치가 GraphicsPath 영역에 포함되면 true 를 반환합니다.

objPoint 좌표위치가 GraphicsPath 영역에 포함되지 않으면 false 를 반환합니다.

**Remark**

- GraphicsPath 의 영역은 경로를 모두 포함하는 최소 크기의 사각형입니다.


---

### lineTo

> Components > Component > Graphics > Objects > GraphicsPath > Method > lineTo

**Description**

현재위치에서 인수로 전달된 위치까지 직선 경로를 GraphicsPath 에 추가하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.lineTo( nX, nY )
```

**Parameters**

```
추가할 직선경로의 x 좌표 위치를 pixel 단위의 숫자로 설정합니다.

설정값은 GrpahicsPath 의 x 속성값을 기준으로 처리됩니다.
```

**Return**

없음

**Remark**

- lineTo() 메소드 실행 후 현재위치가 nX, nY 로 변경됩니다.

- GraphicsPath 의 시작위치를 설정하지 않으면 경로가 정상적으로 표시되지 않을 수 있습니다.

**See Also**

GraphicsPath.arcToGraphicsPath.bezierCurveToGraphicsPath.moveToGraphicsPath.quadraticCurveToGraphicsPath.setPathData


---

### moveBy

> Components > Component > Graphics > Objects > GraphicsPath > Method > moveBy

**Description**

GraphicsPath 의 시작위치를 이동하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.moveBy( nX, nY )
```

**Parameters**

```
현재 시작위치에서 x 좌표가 이동할 거리를 pixel 단위의 숫자로 설정합니다.

설정값은 현재 시작위치의 x 좌표값을 기준으로 처리됩니다.
```

**Return**

없음

**Remark**

- GraphicsPath 의 시작위치를 설정하지 않으면 경로가 정상적으로 표시되지 않을 수 있습니다.

- moveBy() 메소드는 경로의 시작점을 설정할 때 외에는 무시됩니다.

**See Also**

GraphicsPath.arcToGraphicsPath.bezierCurveToGraphicsPath.lineToGraphicsPath.quadraticCurveToGraphicsPath.setPathData


---

### moveTo

> Components > Component > Graphics > Objects > GraphicsPath > Method > moveTo

**Description**

GraphicsPath 의 시작위치를 설정하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.moveTo( nX, nY )
```

**Parameters**

```
GraphicsPath 의 시작위치 중 x 좌표 위치를 pixel 단위의 숫자로 설정합니다.

설정값은 GrpahicsPath 의 x 속성값을 기준으로 처리됩니다.
```

**Return**

없음

**Remark**

- GraphicsPath 의 시작위치를 설정하지 않으면 경로가 정상적으로 표시되지 않을 수 있습니다.

- moveTo() 메소드는 경로의 시작점을 설정할 때 외에는 무시됩니다.

**See Also**

GraphicsPath.arcToGraphicsPath.bezierCurveToGraphicsPath.lineToGraphicsPath.quadraticCurveToGraphicsPath.setPathData


---

### quadraticCurveTo

> Components > Component > Graphics > Objects > GraphicsPath > Method > quadraticCurveTo

**Description**

현재위치에서 인수로 전달된 위치까지 quadratic Bezier 곡선 경로를 GraphicsPath 에 추가하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.quadraticCurveTo( nControlX, nControlY, nX, nY )
```

**Parameters**

```
quadratic Bezier 곡선을 결정할 컨트롤 포인트의 x 좌표 위치를 pixel 단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- quadraticCurveTo() 메소드 실행 후 현재위치가 nX, nY 로 변경됩니다.

- 인수로 전달된 좌표는 GrpahicsPath 의 x, y 속성값을 기준으로 처리됩니다.

- GraphicsPath 의 시작위치를 설정하지 않으면 경로가 정상적으로 표시되지 않을 수 있습니다.

**See Also**

GraphicsPath.arcToGraphicsPath.bezierCurveToGraphicsPath.lineToGraphicsPath.moveToGraphicsPath.setPathData


---

### rotate

> Components > Component > Graphics > Objects > GraphicsPath > Method > rotate

**Description**

GraphicsPath 에 회전효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.rotate( nAngle [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 모습에서 회전될 각도를 숫자로 설정합니다.

양수로 설정 시 시계방향으로 회전합니다.
음수로 설정 시 반시계방향으로 회전합니다.
```

**Return**

없음

**Remark**

- rotate() 메소드 수행 시 Position 과 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 rotate() 메소드가 적용된 영역정보를 반환합니다.

- rotate() 메소드는 GraphicsPath 가 표시되는 위치를 기준으로 수행됩니다.
   따라서 rotate() 메소드를 여러번 수행하면 회전 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 회전효과가 동일하게 적용됩니다.

- GraphicsPath 에 부모 오브젝트가 설정되어 있어야 rotate() 메소드가 정상적으로 수행됩니다.
   즉, rotate() 메소드 수행 전에 addChild() 메소드로 GraphicsPath 를 등록하여야 합니다.


---

### scale

> Components > Component > Graphics > Objects > GraphicsPath > Method > scale

**Description**

GraphicsPath 에 확대/축소 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.scale( nScaleX, nScaleY [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 크기에서 확대/축소 될 가로 배율을 실수로 설정합니다.

1.0 보다 큰값을 설정하면 GraphicsPath 가 확대됩니다.
1.0 보다 작은값을 설정하면 GraphicsPath 가 축소됩니다.
```

**Return**

없음

**Remark**

- scale() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 scale() 메소드가 적용된 영역정보를 반환합니다.

- scale() 메소드는 GraphicsPath 가 표시되는 크기를 기준으로 수행됩니다.
   따라서 scale() 메소드를 여러번 수행하면 확대/축소 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 확대/축소 효과가 동일하게 적용됩니다.

- GraphicsPath 에 부모 오브젝트가 설정되어 있어야 scale() 메소드가 정상적으로 수행됩니다.
   즉, scale() 메소드 수행 전에 addChild() 메소드로 GraphicsPath 를 등록하여야 합니다.


---

### setClipRect

> Components > Component > Graphics > Objects > GraphicsPath > Method > setClipRect

**Description**

GraphicsPath 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.setClipRect( nX, nY, nWidth, nHeight );
```

**Parameters**

```
Clipping 할 영역의 x 좌표를 숫자로 설정합니다.

설정값은 GraphicsPath 의 x 속성값 위치를 0 으로 가정하고 처리됩니다.
```

**Return**

없음

**Remark**

- GraphicsPath 영역에서 Clipping 영역으로 설정된 부분만 화면에 표시됩니다.
   Transform 과 관련된 메소드(scale(), rotate() 등)가 적용된 경우 GraphicsPath 의 원본영역을 기준으로 Clipping 됩니다.

- "setClipRect( null );" 형태로 파라미터에 null 설정 시 Clipping 영역 설정이 취소됩니다.

- Clipping 이 적용되어도 GraphicsPath 의 Position 관련 속성값은 변경되지 않습니다.


---

### setPathData

> Components > Component > Graphics > Objects > GraphicsPath > Method > setPathData

**Description**

GraphicsPath 에 SVG 형식으로 경로 데이터를 설정하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.setPathData( strPath )
```

**Parameters**

```
경로 데이터를 SVG 형식의 문자열로 설정합니다.

설정할 수 있는 SVG 형식입니다.
- "M x,y" : 시작위치를 x,y 좌표위치로 설정합니다.
- "L x,y" : 현재 위치에서 x,y 좌표위치까지 선을 표시합니다.
- "H x" : 현재 위치에서 x 좌표위치까지 가로선을 표시합니다.
- "V y" : 현재 위치에서 y 좌표위치까지 세로선을 표시합니다.
- "Z" : 현재 위치에서 시작점까지 선을 표시합니다.
- "C x1,y1 x2,y2 x,y" : 현재 위치에서 x,y 좌표위치까지 cubic Bezier 곡선을 표시합니다.
- "S x2,y2 x,y" : 현재 위치에서 x,y 좌표위치까지 cubic Bezier 곡선을 표시합니다.
- "Q x1,y1 x,y" : 현재 위치에서 x,y 좌표위치까지 quadratic Bezier 곡선을 표시합니다.
- "T x,y" : 현재 위치에서 x,y 좌표위치까지 quadratic Bezier 곡선을 표시합니다.
- "A rx,ry rotation large clockwise x,y" : 현재 위치에서 x,y 좌표위치까지 타원호를 표시합니다.
```

**Return**

없음

**Remark**

- "M" 명령어는 경로의 시작점을 설정할 때 외에는 무시됩니다.
   경로를 그리기 시작한 후 입력되는 "M" 명령어는 처리되지 않습니다.

- 경로 데이터는 공백문자로 구분됩니다.

**See Also**

GraphicsPath.getPathData


---

### setTransform

> Components > Component > Graphics > Objects > GraphicsPath > Method > setTransform

**Description**

GraphicsPath 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.setTransform( strMethod );
```

**Parameters**

```
GraphicsPath 에 적용할 Transform 관련 메소드를 "," 로 구분하여 설정합니다.
translate(), scale(), rotate(), shear() 메소드를 사용할 수 있습니다.
null 값 설정 시 transform 효과가 지정되지 않은 상태로 초기화합니다.
```

**Return**

없음

**Remark**

- setTransform() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 setTransform() 메소드가 적용된 영역정보를 반환합니다.

- setTransform() 메소드는 GraphicsPath 의 원본 위치를 기준으로 수행됩니다.
   따라서 setTransform() 메소드를 여러번 수행해도 효과가 누적되어 적용되지 않습니다.

- GraphicsGroup 의 경우 하위 오브젝트에 효과가 동일하게 적용됩니다.

- GraphicsPath 에 부모 오브젝트가 설정되어 있어야 setTransform() 메소드가 정상적으로 수행됩니다.
   즉, setTransform() 메소드 수행 전에 addChild() 메소드로 GraphicsPath 를 등록하여야 합니다.

- 메소드 실행 시 strMethod 파라미터 값을 null로 설정하면 transform 효과가 지정되지 않은 상태로 초기화합니다.
  setTransform 메소드로 설정한 transform 효과 뿐 아니라 translate, scale, rotate, shear 메소드로 개별 설정한 상태도 초기화합니다.


---

### shear

> Components > Component > Graphics > Objects > GraphicsPath > Method > shear

**Description**

GraphicsPath 에 비틀기 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.shear( nRadianX, nRadianY [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 모습에서 x 축 기준으로 비틀어질 각도를 라디안값으로 설정합니다.
```

**Return**

없음

**Remark**

- shear() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 shear() 메소드가 적용된 영역정보를 반환합니다.

- shear() 메소드는 GraphicsPath 가 표시되는 모습을 기준으로 수행됩니다.
   따라서 shear() 메소드를 여러번 수행하면 비틀기 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 비틀기 효과가 동일하게 적용됩니다.

- GraphicsPath 에 부모 오브젝트가 설정되어 있어야 shear() 메소드가 정상적으로 수행됩니다.
   즉, shear() 메소드 수행 전에 addChild() 메소드로 GraphicsPath 를 등록하여야 합니다.


---

### toString

> Components > Component > Graphics > Objects > GraphicsPath > Method > toString

**Description**

GraphicsPath 의 타입을 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.toString();
```

**Return**

일반적으로 "[object GraphicsPath]" 형태의 문자열을 반환합니다.


---

### transform

> Components > Component > Graphics > Objects > GraphicsPath > Method > transform

**Description**

GraphicsPath 에 Transform 관련 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.transform( nScaleX, nShearX, nShearY, nScaleY, nTransX, nTransY );
```

**Parameters**

```
현재 크기에서 확대/축소 될 가로 배율을 실수로 설정합니다.

1.0 보다 큰값을 설정하면 GraphicsPath 가 확대됩니다.
1.0 보다 작은값을 설정하면 GraphicsPath 가 축소됩니다.
```

**Return**

없음

**Remark**

- transform() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 transform() 메소드가 적용된 영역정보를 반환합니다.

- transform() 메소드는 GraphicsPath 가 표시되는 모습을 기준으로 수행됩니다.
   따라서 transform() 메소드를 여러번 수행하면 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 효과가 동일하게 적용됩니다.

- GraphicsPath 에 부모 오브젝트가 설정되어 있어야 transform() 메소드가 정상적으로 수행됩니다.
   즉, transform() 메소드 수행 전에 addChild() 메소드로 GraphicsPath 를 등록하여야 합니다.


---

### translate

> Components > Component > Graphics > Objects > GraphicsPath > Method > translate

**Description**

GraphicsPath 의 위치가 이동되는 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsPath.translate( nTransX, nTransY );
```

**Parameters**

```
현재 위치에서 x 축 방향으로 이동 할 거리를 pixel 단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- translate() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 translate() 메소드가 적용된 영역정보를 반환합니다.

- translate() 메소드는 GraphicsPath 가 표시되는 위치를 기준으로 수행됩니다.
   따라서 translate() 메소드를 여러번 수행하면 이동 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 이동 효과가 동일하게 적용됩니다.

- GraphicsPath 에 부모 오브젝트가 설정되어 있어야 translate() 메소드가 정상적으로 수행됩니다.
   즉, translate() 메소드 수행 전에 addChild() 메소드로 GraphicsPath 를 등록하여야 합니다.


---

## Components > Component > Graphics > GraphicsPaths

### GraphicsPaths

> Components > Component > Graphics > Objects > GraphicsPaths

**Description**

GraphicsPath 오브젝트를 추가하여 경로를 표시할 때 사용되는 오브젝트입니다.

**Remark**

- 스크립트로 동적생성하여 사용할 수 있으며 넥사크로 스튜디오에서 디자인 할 수 없습니다.

- 한 개 이상의 GraphicsPath 오브젝트를 추가하여 경로를 표시합니다.

- 추가된 GraphicsPath 오브젝트의 Style 관련 속성을 설정하지 않으면 GraphicsPaths 의 속성값이 적용됩니다.

**Property**

| Name | Description |
| --- | --- |
| fillstyle | GraphicsPaths 의 내부영역에 채워질 형식과 색을 설정하는 속성입니다. |
| id | GraphicsPaths 의 고유 식별자를 설정하는 속성입니다. |
| miterlimit | strokejoin 속성값이 "miter" 일 때 특정 조건에서 "bevel" 로 변경적용될 비율값을 설정하는 속성입니다. |
| opacity | GraphicsPaths 영역의 투명도를 설정하는 속성입니다. |
| parent | GraphicsPaths 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| strokecap | GraphicsPaths 에 표시되는 경로의 양 끝 모양을 설정하는 속성입니다. |
| strokejoin | GraphicsPaths 에 표시되는 경로의 연결점 모양을 설정하는 속성입니다. |
| strokepen | GraphicsPaths 에 표시되는 경로의 색과 형식을 설정하는 속성입니다. |
| visible | GraphicsPaths 가 화면에 표시될지 여부를 설정하는 속성입니다. |
| x | 부모 오브젝트를 기준으로 GraphicsPaths 가 표시될 x 축 좌표값을 설정하는 속성입니다. |
| y | 부모 오브젝트를 기준으로 GraphicsPaths 가 표시될 y 축 좌표값을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addChild | GraphicsPath 오브젝트를 GraphicsPaths 에 추가하는 메소드입니다. |
| clear | GraphicsPaths 에 추가된 오브젝트를 메모리에서 완전히 삭제하는 메소드입니다. |
| closePath | GraphicsPaths 에 추가된 마지막 GraphicsPath 오브젝트의 끝점과 시작점을 직선으로 연결하는 메소드입니다. |
| destroy | GraphicsPaths 를 메모리에서 완전히 삭제하는 메소드입니다. |
| getBoundRect | GraphicsPaths 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| getChildByIndex | GraphicsPaths 에서 특정 인덱스의 GraphicsPath 오브젝트를 반환하는 메소드입니다. |
| getFirstChild | GraphicsPaths 에 추가된 오브젝트 중 첫번째 오브젝트를 반환하는 메소드입니다. |
| getLastChild | GraphicsPaths 에 추가된 오브젝트 중 마지막 오브젝트를 반환하는 메소드입니다. |
| getNextSibling | GraphicsPaths 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다. |
| getObjectByID | GraphicsPaths 에 추가된 오브젝트 중 특정 ID 에 해당하는 오브젝트를 반환하는 메소드입니다. |
| getObjects | GraphicsPaths 에 추가된 오브젝트를 배열로 반환하는 메소드입니다. |
| getOffsetBoundRect | GraphicsPaths 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| getOffsetRect | GraphicsPaths 가 표시되는 영역정보를 부모 오브젝트 기준으로 반환하는 메소드입니다. |
| getOffsetRegion | GraphicsPaths 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| getPathData | GraphicsPaths 에 설정된 경로 데이터를 SVG 형식의 문자열로 반환하는 메소드입니다. |
| getPreviousSibling | GraphicsPaths 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다. |
| getRect | GraphicsPaths 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다. |
| getRegion | GraphicsPaths 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| hasChild | GraphicsPaths 에 GraphicsPath 오브젝트가 추가 되었는지 여부를 반환하는 메소드입니다. |
| indexOf | GraphicsPaths 에 추가된 오브젝트 중 특정 ID 에 해당하는 오브젝트의 인덱스를 반환하는 메소드입니다. |
| insertChild | GraphicPath 오브젝트를 GraphicsPaths 의 특정 위치에 삽입하는 메소드입니다. |
| isHitTest | 인수로 전달된 좌표위치가 GraphicsPaths 영역에 포함되는지 여부를 반환하는 메소드입니다. |
| removeChild | GraphicsPaths 에서 특정 ID 의 GraphicsPath 오브젝트를 제거하는 메소드입니다. |
| rotate | GraphicsPaths 에 회전효과를 적용하는 메소드입니다. |
| scale | GraphicsPaths 에 확대/축소 효과를 적용하는 메소드입니다. |
| setClipRect | GraphicsPaths 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다. |
| setPathData | GraphicsPaths 에 SVG 형식으로 경로 데이터를 설정하는 메소드입니다. |
| setTransform | GraphicsPaths 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다. |
| shear | GraphicsPaths 에 비틀기 효과를 적용하는 메소드입니다. |
| toString | GraphicsPaths 의 타입을 문자열로 반환하는 메소드입니다. |
| transform | GraphicsPaths 에 Transform 관련 효과를 적용하는 메소드입니다. |
| translate | GraphicsPaths 의 위치가 이동되는 효과를 적용하는 메소드입니다. |


---

### 속성 (Properties)

### fillstyle

> Components > Component > Graphics > Objects > GraphicsPaths > Property > fillstyle

**Description**

GraphicsPaths 의 내부영역에 채워질 형식과 색을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.fillstyle[= strFillStyle]
```

**Setting Syntax**

```javascript
strFillStyle ::= <color> | <linear-gradient>

<color> ::= <NamedColor> | <NumericColor>

<linear-gradient> ::= 'linear-gradient(' [<angle> , ] <color-stop> ')'
<angle> ::= 'to left' | 'to right' | 'to top' | 'to bottom' | 'to left top' | 'to left bottom' | 'to right top' | 'to right bottom'
<color-stop> ::= <startcolor-stop> [',' <listcolor-stop>] ',' <endcolor-stop>
<startcolor-stop> ::= <color> [<percentage>'%']
<listcolor-stop> ::= <color> [<percentage>'%'] [',' <listcolor-stop>]*
<endcolor-stop> ::= <color> [<percentage>'%']
```
```javascript
var objGObject = new nexacro.GraphicsPaths();

objGObject.fillstyle = "red";
objGObject.fillstyle = "rgb(255,255,0)";
objGObject.fillstyle = "#ffffaa";
objGObject.fillstyle = "linear-gradient(red, yellow)";
objGObject.fillstyle = "linear-gradient(to right, red, yellow)";
objGObject.fillstyle = "linear-gradient(to right, red 50%, yellow)";
objGObject.fillstyle = "linear-gradient(red, yellow 25%, green 50%, blue 75%, indigo)";
objGObject.fillstyle = "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)";
```
- **`<color>`** — GraphicsPaths 의 내부영역에 채워질 색을 색상이름 또는 색상코드로 설정합니다.
- **`<NamedColor>`** — "red", "blue" 와 같이 미리 정의된 색상이름의 문자열로 내부영역의 색을 설정합니다.
- **`<NumericColor>`** — "#"기호로 시작하는 6자리 HexaDecimal 색상코드값으로 내부영역의 색을 설정합니다. ("#FF00FF")

r,g,b 값을 인자로 하는 rgb() 메소드로 내부영역의 색을 설정합니다. ("rgb (255, 0, 255)")
- **`<linear-gradient>`** — GraphicsPaths 의 내부영역을 그라데이션으로 설정합니다.

"linear-gradient ( [방향, 색상값, 색상값, ...] )" 형식으로 그라데이션 방향과 색상을 설정할 수 있습니다.
<listcolor-stop> 에 한 개 이상의 색상값을 설정할 수 있습니다.
- **`<angle>`** — 그라데이션의 표시 방향을 설정합니다.

"to left" 설정 시 오른쪽에서 왼쪽 방향으로 그라데이션이 표시됩니다.
"to right" 설정 시 왼쪽에서 오른쪽 방향으로 그라데이션이 표시됩니다.
"to top" 설정 시 아래쪽에서 윗쪽 방향으로 그라데이션이 표시됩니다.
"to bottom" 설정 시 윗쪽에서 아래쪽 방향으로 그라데이션이 표시됩니다.
"to left top" 설정 시 오른쪽 아래 방향에서 왼쪽 윗 방향으로 그라데이션이 표시됩니다.
"to left bottom" 설정 시 오른쪽 윗 뱡향에서 왼쪽 아래 방향으로 그라데이션이 표시됩니다.
"to right top" 설정 시 왼쪽 아래 방향에서 오른쪽 윗 방향으로 그라데이션이 표시됩니다.
"to right bottom" 설정 시 왼쪽 윗 방향에서 오른쪽 아래 방향으로 그라데이션이 표시됩니다.

값을 설정하지 않으면 "to bottom" 으로 적용됩니다.
- **`<color-stop>`** — 그라데이션의 시작점, 끝점, 중간점의 색을 설정합니다.

<angle> 값에 따라 시작점과 끝점의 위치가 결정됩니다.
<angle> 값에 설정된 표시 방향이 시작되는 위치가 시작점으로 적용됩니다.

예를 들어 <angle> 값이 "to left" 이면 GraphicsPaths 영역의 오른쪽 위치가 시작점이 되고, 왼쪽 위치가 끝점이 됩니다.
<angle> 값이 "to right" 이면 GraphicsPaths 영역의 왼쪽 위치가 시작점이 되고, 오른쪽 위치가 끝점이 됩니다.

그라데이션 중간점의 색은 한개 이상 설정할 수 있으며 <percentage> 값 생략 시 균등하게 표시됩니다.
- **`<startcolor-stop>`** — 그라데이션의 시작점 색을 설정합니다.

<angle> 값에 설정된 방향으로 시작점 위치가 결정됩니다.
시작점의 <percentage> 값을 0 이상으로 설정 시 "시작점~설정값"까지 동일한 색상으로 표시됩니다.
- **`<listcolor-stop>`** — 그라데이션의 중간점 색을 설정합니다.

시작점과 끝점 사이에 적용될 중간색을 ","로 구분하여 여러개 설정할 수 있습니다.
- **`<endcolor-stop>`** — 그라데이션의 끝점 색을 설정합니다.

<angle> 값에 설정된 방향으로 끝점 위치가 결정됩니다.
끝점의 <percentage> 값을 100 이하로 설정 시 "설정값~끝점"까지 동일한 색상으로 표시됩니다.
- **`<percentage>`** — <color> 에 해당하는 색이 적용될 위치를 비율값으로 설정합니다.

<angle> 값에 의해 결정된 시작점이 "0%" 로 적용됩니다.
<angle> 값에 의해 결정된 끝점이 "100%" 로 적용됩니다.

<percentage> 값은 0 에서 100 사이의 값을 설정해야 합니다.
<percentage> 값을 생략하면 균등한 위치에 <color> 값이 적용됩니다.

**Remark**

- GraphicsPaths, GraphicsPath 는 닫힌 경로가 존재할 경우에만 내부영역을 처리합니다.


---

### id

> Components > Component > Graphics > Objects > GraphicsPaths > Property > id

**Description**

GraphicsPaths 의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsPaths.id
```

**Setting Syntax**

```javascript
var objGraphicsPaths = new nexacro.GraphicsPaths();

this.Graphics00.addChild( "GraphicsPaths00", objGraphicsPaths );
```
- **`id`** — GraphicsPaths 를 구별할 수 있는 유일값을 설정합니다.

**Remark**

-  addChild() 나 insertChild() 메소드를 사용하여 GraphicsPaths 를 등록할때 오브젝트를 구별하기 위한 고유값입니다.

- 속성명이나 메소드명과 같은 예약어를 설정할 경우 오류가 발생할 수 있습니다.


---

### miterlimit

> Components > Component > Graphics > Objects > GraphicsPaths > Property > miterlimit

**Description**

strokejoin 속성값이 "miter" 일 때 특정 조건에서 "bevel" 로 변경적용될 비율값을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.miterlimit[= nLimit]
```

**Setting Syntax**

```javascript
var objGObject = new nexacro.GraphicsPaths();

objGObject.miterlimit = 1;
```
- **`nLimit`** — strokejoin 속성값이 "bevel" 로 변경될 최소 비율을 1 이상의 숫자로 설정합니다.

1 설정 시 strokejoin 속성이 항상 "bevel" 로 적용됩니다.
1 보다 큰 값을 설정하면 연관 요소들을 함께 판단하여 "bevel" 로 적용됩니다.

**Remark**

- miterlimit 속성값을 설정하지 않으면 10 으로 적용됩니다.

- 일반적으로 miterlimit 속성값이 "miter_length / (stroke_width / 2)" 의 값보다 작으면 strokejoin 속성값이 "bevel" 로 적용됩니다.
   > miter_length : 두 선의 중심이 만나는 점에서 테두리가 만나 뾰족하게 돌출된 끝점까지의 거리
   > stroke_width : 선의 두께


---

### opacity

> Components > Component > Graphics > Objects > GraphicsPaths > Property > opacity

**Description**

GraphicsPaths 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.opacity[= nOpacity]
```

**Setting Syntax**

```javascript
var objGraphicsPaths = new nexacro.GraphicsPaths() ;

objGraphicsPaths.opacity = 0.5;
objGraphicsPaths.opacity = "0.5";
objGraphicsPaths.opacity = "50%";
```
- **`nOpacity`** — 0.0 ~ 1.0 사이의 값 또는 0.0% ~ 100.0% 사이의 값을 지정합니다.
0(또는 0%)을 설정하면 완전 투명, 1(또는 100%)을 설정하면 완전 불투명으로 처리됩니다.
1 이상의 값은 1로, 0 이하의 값은 0으로 처리됩니다. 마찬가지로 100% 이상의 값은 100%로, 0% 이하의 값은 0%로 처리됩니다.

Script는 숫자 또는 문자(숫자, 퍼센트 값)로 설정할 수 있습니다.

**Remark**

- opacity 속성값을 설정하지 않으면 undefined 가 설정되고 1 로 동작합니다.

- GraphicsGroup 의 경우 하위 오브젝트에 투명도가 동일하게 적용됩니다.

- 부모와 자식 오브젝트에 각각 opacity 속성이 설정되어 있으면 자식 오브젝트의 투명도는 부모의 투명도에 추가적으로 적용됩니다.
   예를 들어 부모의 opacity 값이 0.5 이고 자식의 opacity 값이 0.4 이면 결과적으로 자식 오브젝트는 0.2 의 투명도가 적용됩니다.


---

### parent

> Components > Component > Graphics > Objects > GraphicsPaths > Property > parent

**Description**

GraphicsPaths 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GraphicsPaths.parent
```

**Remark**

- 일반적으로 addChild() 메소드를 사용하여 GraphicsPaths 를 추가한 오브젝트가 parent 속성에 설정됩니다.

- GraphicsPaths 가 어디에도 속해있지 않거나 부모 오브젝트로부터 제거되면 null 값을 갖습니다.


---

### strokecap

> Components > Component > Graphics > Objects > GraphicsPaths > Property > strokecap

**Description**

GraphicsPaths 에 표시되는 경로의 양 끝 모양을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsPaths.strokecap[= enumCap]
```

**Setting Syntax**

```javascript
enumCap ::= 'butt' | 'round' | 'square'
```
```javascript
var objGPaths = new nexacro.GraphicsPaths();  

objGPaths.strokepen = "10px solid red"; 
objGPaths.strokejoin = "bevel"; 
objGPaths.strokecap = "square";
```
- **`"butt"`** — 경로의 끝점을 벗어나지 않고 끝을 각지게 표시합니다.
- **`"round"`** — 경로의 끝점을 약간 벗어나고 끝을 둥글게 표시합니다.
- **`"square"`** — 경로의 끝점을 약간 벗어나고 끝을 각지게 표시합니다.

**Remark**

- strokecap 속성값을 설정하지 않으면 "butt" 로 적용됩니다.

- strokecap 속성은 경로의 시작점과 끝점 모양을 결정하며 연결점의 모양은 strokejoin 속성으로 설정합니다.

- GraphicsPaths 에 닫힌 경로가 설정되어 있을 경우 strokecap 속성은 적용되지 않습니다.


---

### strokejoin

> Components > Component > Graphics > Objects > GraphicsPaths > Property > strokejoin

**Description**

GraphicsPaths 에 표시되는 경로의 연결점 모양을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsPaths.strokejoin[= enumJoin]
```

**Setting Syntax**

```javascript
enumJoin ::= 'miter' | 'round' | 'bevel'
```
```javascript
var objGPaths = new nexacro.GraphicsPaths();  

objGPaths.strokepen = "10px solid red"; 
objGPaths.strokejoin = "bevel";
```
- **`"miter"`** — 경로가 만나는 중심점에서 테두리가 만나는 바깥점까지 뾰족하게 표시됩니다.

miterlimit 속성에 의해 "bevel" 로 자동 적용될 수 있습니다.
- **`"round"`** — 경로가 만나는 중심점에서 테두리가 만나는 바깥점까지 둥글게 표시됩니다.
- **`"bevel"`** — 경로가 만나는 중심점에서 테두리가 만나는 바깥점쪽이 칼로 잘라낸것 처럼 표시됩니다.

**Remark**

- strokejoin 속성값을 설정하지 않으면 "miter" 로 적용됩니다.

- strokejoin 속성은 연결점의 모양을 결정하며 경로의 시작점과 끝점 모양은 strokecap 속성으로 설정합니다.


---

### strokepen

> Components > Component > Graphics > Objects > GraphicsPaths > Property > strokepen

**Description**

GraphicsPaths 에 표시되는 경로의 색과 형식을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsPaths.strokepen[= strStrokePen]
```

**Setting Syntax**

```javascript
strStrokePen ::= <line-width> <line-style> <color>

<line-width> ::= <nWidth> ['px']
<line-style> ::= 'solid' | 'dotted' | 'dashed'
<color> ::= <NamedColor> | <NumericColor>
```
```javascript
var objGPaths = new nexacro.GraphicsPaths();  

objGPaths.strokepen = "5px solid red"; 
objGPaths.strokepen = "5 dotted #999999"; 
objGPaths.strokepen = "5px dotted rgb(255,0,0)";
```
- **`<nWidth>`** — 경로의 두께를 pixel 단위의 숫자로 설정합니다.
- **`<line-style>`** — 경로의 스타일을 설정합니다.

"solid" 설정 시 경로가 실선으로 표시됩니다.
"dotted" 설정 시 경로가 점선으로 표시됩니다.
"dashed" 설정 시 경로가 긴 점선으로 표시됩니다.
- **`<NamedColor>`** — 경로의 색을 "red", "blue" 와 같이 미리 정의된 색상이름의 문자열로 설정합니다.
- **`<NumericColor>`** — "#"기호로 시작하는 6자리 hexadecimal 색상코드값으로 경로의 색을 설정합니다. ("#FF00FF")

r,g,b 값을 인자로 하는 rgb() 메소드로 경로의 색을 설정합니다. (ex-"rgb (255, 0, 255)")

**Remark**

- strokepen 속성값을 설정하지 않으면 GraphicsPaths 에 경로가 표시되지 않습니다.

- strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


◆ Nexacro Runtime Environment 제약

- Nexacro Runtime Environment는 <line-style> 에 "solid" 값만 설정할 수 있습니다.


---

### visible

> Components > Component > Graphics > Objects > GraphicsPaths > Property > visible

**Description**

GraphicsPaths 가 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
var objGraphicsPaths = new nexacro.GraphicsPaths();

objGraphicsPaths.visible = false;
```
- **`true`** — Graphics 컴포넌트의 redraw() 메소드 수행 시 GraphicsPaths 를 표시합니다.
- **`false`** — Graphics 컴포넌트의 redraw() 메소드 수행 시 GraphicsPaths 를 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하면 화면에 즉시 반영되지 않고 Graphics 컴포넌트의 redraw() 메소드가 수행될 때 반영됩니다.

- GraphicsGroup 의 경우 visible 속성을 false 로 설정하면 하위 오브젝트도 함께 화면에 표시되지 않습니다.

- visible 속성에 의해 화면에 GraphicsPaths 가 표시되지 않아도 오브젝트는 존재하기 때문에 스크립트로 제어가 가능합니다.


---

### x

> Components > Component > Graphics > Objects > GraphicsPaths > Property > x

**Description**

부모 오브젝트를 기준으로 GraphicsPaths 가 표시될 x 축 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.x[= nX]
```

**Setting Syntax**

```javascript
var objGraphicsPaths = new nexacro.GraphicsPaths( ) ;

objGraphicsPaths .x = 200;
objGraphicsPaths .y = 200;
```
- **`nX`** — 부모 오브젝트를 기준으로 GraphicsPaths 가 표시될 x 축 좌표값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- x 속성값을 설정하지 않으면 0 으로 적용됩니다.

- x 속성은 컴포넌트의 left 속성에 해당하는 속성입니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsPaths 의 표시위치가 변경되어도 x 속성은 원본위치값을 유지합니다.


---

### y

> Components > Component > Graphics > Objects > GraphicsPaths > Property > y

**Description**

부모 오브젝트를 기준으로 GraphicsPaths 가 표시될 y 축 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.y[= nY]
```

**Setting Syntax**

```javascript
var objGraphicsPaths = new nexacro.GraphicsPaths( ) ;

objGraphicsPaths .x = 200;
objGraphicsPaths .y = 200;
```
- **`nY`** — 부모 오브젝트를 기준으로 GraphicsPaths 가 표시될 y 축 좌표값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- y 속성값을 설정하지 않으면 0 으로 적용됩니다.

- y 속성은 컴포넌트의 top 속성에 해당하는 속성입니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsPaths 의 표시위치가 변경되어도 y 속성은 원본위치값을 유지합니다.


---

### 메서드 (Methods)

### addChild

> Components > Component > Graphics > Objects > GraphicsPaths > Method > addChild

**Description**

GraphicsPath 오브젝트를 GraphicsPaths 에 추가하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.addChild( strID, objGPath )
```

**Parameters**

```
추가하려는 GraphicsPath 오브젝트의 ID 를 문자열로 설정합니다.
```

**Return**

GraphicsPaths 에 추가된 GraphicsPath 오브젝트의 인덱스를 반환합니다.

**Remark**

- addChild() 메소드로 GraphicsPath 오브젝트가 추가되어도 화면에 자동으로 표시되지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- addChild() 로 추가된 GraphicsPath 오브젝트는 순서상 마지막에 위치합니다.

- GraphicsPath 오브젝트는 GraphicsPaths 에 추가된 순서대로 화면에 표시됩니다.
   따라서 GraphicsPath 오브젝트가 동일위치일 경우 먼저 추가된 오브젝트는 뒤에 추가된 오브젝트에 가려집니다.

**See Also**

GraphicsPaths.insertChildGraphicsPaths.removeChild


---

### clear

> Components > Component > Graphics > Objects > GraphicsPaths > Method > clear

**Description**

GraphicsPaths 에 추가된 오브젝트를 메모리에서 완전히 삭제하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.clear()
```

**Return**

없음

**Remark**

- GraphicsPaths 에 추가된 오브젝트만 삭제되고 GraphicsPaths 는 삭제되지 않습니다.

- clear() 메소드로 오브젝트가 삭제되어도 화면에서 자동으로 사라지지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.


---

### closePath

> Components > Component > Graphics > Objects > GraphicsPaths > Method > closePath

**Description**

GraphicsPaths 에 추가된 마지막 GraphicsPath 오브젝트의 끝점과 시작점을 직선으로 연결하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.closePath()
```

**Return**

없음

**Remark**

- GraphicsPaths 에 추가된 GraphicsPath 오브젝트 중 마지막 오브젝트에 적용됩니다.

- 끝점과 시작점을 연결하여 닫힌경로로 만드는 메소드입니다.

- 마지막 GraphicsPath 오브젝트에 경로 데이터가 없을 경우 closePath() 메소드는 수행되지 않습니다.


---

### destroy

> Components > Component > Graphics > Objects > GraphicsPaths > Method > destroy

**Description**

GraphicsPaths 를 메모리에서 완전히 삭제하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.destroy()
```

**Return**

GraphicsPaths 가 정상적으로 삭제되면 true 를 반환합니다.

GraphicsPaths 가 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- destroy() 메소드로 GraphicsPaths 가 삭제되어도 화면에 표시된 오브젝트가 자동으로 사라지지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- GraphicsPaths 가 하위 오브젝트를 가질 수 있는 경우 하위 오브젝트도 함께 삭제됩니다.


---

### getBoundRect

> Components > Component > Graphics > Objects > GraphicsPaths > Method > getBoundRect

**Description**

GraphicsPaths 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.getBoundRect( );
```

**Parameters**

var objGraphicsPaths = this.Graphics00.getObjectByID("GraphicsPaths00");
var objRect = objGraphicsPaths.getBoundRect();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다.
strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getBoundRect() 메소드는 GraphicsPaths 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getBoundRect() 메소드의 반환값으로 GraphicsPaths 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPaths 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getChildByIndex

> Components > Component > Graphics > Objects > GraphicsPaths > Method > getChildByIndex

**Description**

GraphicsPaths 에서 특정 인덱스의 GraphicsPath 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.getChildByIndex( nIndex )
```

**Parameters**

```
얻으려 하는 GraphicsPath 오브젝트의 인덱스를 숫자로 설정합니다.
```

**Return**

GraphicsPaths 에서 nIndex 에 해당하는 GraphicsPath 오브젝트를 반환합니다.


---

### getFirstChild

> Components > Component > Graphics > Objects > GraphicsPaths > Method > getFirstChild

**Description**

GraphicsPaths 에 추가된 오브젝트 중 첫번째 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.getFirstChild()
```

**Return**

GraphicsPaths 에 추가된 첫번째 오브젝트를 반환합니다.

**Remark**

- GraphicsPaths 에 추가된 오브젝트는 추가된 순서대로 화면에 표시됩니다.
   따라서 오브젝트가 동일위치일 경우 먼저 추가된 오브젝트는 뒤에 추가된 오브젝트에 가려집니다.


---

### getLastChild

> Components > Component > Graphics > Objects > GraphicsPaths > Method > getLastChild

**Description**

GraphicsPaths 에 추가된 오브젝트 중 마지막 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.getLastChild()
```

**Return**

GraphicsPaths 에 추가된 마지막 오브젝트를 반환합니다.

**Remark**

- GraphicsPaths 에 추가된 오브젝트는 추가된 순서대로 화면에 표시됩니다.
   따라서 오브젝트가 동일위치일 경우 먼저 추가된 오브젝트는 뒤에 추가된 오브젝트에 가려집니다.


---

### getNextSibling

> Components > Component > Graphics > Objects > GraphicsPaths > Method > getNextSibling

**Description**

GraphicsPaths 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.getNextSibling()
```

**Parameters**

var objGraphicsPaths = this.Graphics00.getObjectByID("GraphicsPaths00");
var objNext = objGraphicsPaths.getNextSibling();

trace( objNext.toString() );

**Return**

부모가 동일한 다음 순서의 Graphics 오브젝트를 반환합니다.

다음 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

**Remark**

- addChild() 메소드로 추가된 순서대로 Graphics 오브젝트가 저장됩니다.

- 부모가 다른 Graphics 오브젝트는 반환되지 않습니다.


---

### getObjectByID

> Components > Component > Graphics > Objects > GraphicsPaths > Method > getObjectByID

**Description**

GraphicsPaths 에 추가된 오브젝트 중 특정 ID 에 해당하는 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.getObjectByID( strID )
```

**Parameters**

```
얻으려 하는 오브젝트의 ID 를 문자열로 설정합니다.
```

**Return**

strID 에 해당하는 오브젝트를 반환합니다.


---

### getObjects

> Components > Component > Graphics > Objects > GraphicsPaths > Method > getObjects

**Description**

GraphicsPaths 에 추가된 오브젝트를 배열로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.getObjects()
```

**Return**

GraphicsPaths 에 추가된 순서대로 오브젝트를 배열로 반환합니다.

**Remark**

- GraphicsPaths 에 추가된 오브젝트는 추가된 순서대로 화면에 표시됩니다.
   따라서 오브젝트가 동일위치일 경우 먼저 추가된 오브젝트는 뒤에 추가된 오브젝트에 가려집니다.


---

### getOffsetBoundRect

> Components > Component > Graphics > Objects > GraphicsPaths > Method > getOffsetBoundRect

**Description**

GraphicsPaths 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.getOffsetBoundRect( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsPaths = objGroup.getObjectByID("GraphicsPaths00");
var objRect = objGraphicsPaths.getOffsetBoundRect();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다.
strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetBoundRect() 메소드는 GraphicsPaths 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetBoundRect() 메소드의 반환값으로 GraphicsPaths 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPaths 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getOffsetRect

> Components > Component > Graphics > Objects > GraphicsPaths > Method > getOffsetRect

**Description**

GraphicsPaths 가 표시되는 영역정보를 부모 오브젝트 기준으로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.getOffsetRect( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsPaths = objGroup.getObjectByID("GraphicsPaths00");
var objRect = objGraphicsPaths.getOffsetRect();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsPaths 오브젝트의 strokepen 속성값을 설정했더라도 외곽선 영역과 관계없이 GraphicsPaths 오브젝트의 실제 영역이 반환됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetRect() 메소드는 GraphicsPaths 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetRect() 메소드의 반환값으로 GraphicsPaths 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPaths 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getOffsetRegion

> Components > Component > Graphics > Objects > GraphicsPaths > Method > getOffsetRegion

**Description**

GraphicsPaths 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.getOffsetRegion( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsPaths = objGroup.getObjectByID("GraphicsPaths00");
var objRect = objGraphicsPaths.getOffsetRegion();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsPaths 오브젝트의 strokepen 속성값을 설정했더라도 반환되는 영역정보에는 안쪽 외곽선 영역이 제외됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetRegion() 메소드는 GraphicsPaths 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetRegion() 메소드의 반환값으로 GraphicsPaths 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPaths 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getRegion() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getPathData

> Components > Component > Graphics > Objects > GraphicsPaths > Method > getPathData

**Description**

GraphicsPaths 에 설정된 경로 데이터를 SVG 형식의 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.getPathData()
```

**Return**

경로 데이터를 SVG 형식의 문자열로 반환합니다.

**Remark**

- 경로 데이터는 공백문자로 구분됩니다.

**See Also**

GraphicsPaths.setPathData


---

### getPreviousSibling

> Components > Component > Graphics > Objects > GraphicsPaths > Method > getPreviousSibling

**Description**

GraphicsPaths 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.getPreviousSibling()
```

**Parameters**

var objGraphicsPaths = this.Graphics00.getObjectByID("GraphicsPaths00");
var objPrev = objGraphicsPaths.getPreviousSibling();

trace( objPrev.toString() );

**Return**

부모가 동일한 이전 순서의 Graphics 오브젝트를 반환합니다.

이전 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

**Remark**

- addChild() 메소드로 추가된 순서대로 Graphics 오브젝트가 저장됩니다.

- 부모가 다른 Graphics 오브젝트는 반환되지 않습니다.


---

### getRect

> Components > Component > Graphics > Objects > GraphicsPaths > Method > getRect

**Description**

GraphicsPaths 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.getRect( );
```

**Parameters**

var objGraphicsPaths = this.Graphics00.getObjectByID("GraphicsPaths00");
var objRect = objGraphicsPaths.getRect();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsPaths 오브젝트의 strokepen 속성값을 설정했더라도 외곽선 영역과 관계없이 GraphicsPaths 오브젝트의 실제 영역이 반환됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getRect() 메소드는 GraphicsPaths 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getRect() 메소드의 반환값으로 GraphicsPaths 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPaths 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getRegion

> Components > Component > Graphics > Objects > GraphicsPaths > Method > getRegion

**Description**

GraphicsPaths 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.getRegion( );
```

**Parameters**

var objGraphicsPaths = this.Graphics00.getObjectByID("GraphicsPaths00");
var objRect = objGraphicsPaths.getRegion();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsPaths 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에는 안쪽 외곽선 영역이 제외됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getRegion() 메소드는 GraphicsPaths 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getRegion() 메소드의 반환값으로 GraphicsPaths 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsPaths 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetRegion() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### hasChild

> Components > Component > Graphics > Objects > GraphicsPaths > Method > hasChild

**Description**

GraphicsPaths 에 GraphicsPath 오브젝트가 추가 되었는지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.hasChild()
```

**Return**

GraphicsPath 오브젝트가 한 개 이상 추가되어 있으면 true 를 반환합니다.

GraphicsPath 오브젝트가 추가되어 있지 않으면 false 를 반환합니다.


---

### indexOf

> Components > Component > Graphics > Objects > GraphicsPaths > Method > indexOf

**Description**

GraphicsPaths 에 추가된 오브젝트 중 특정 ID 에 해당하는 오브젝트의 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.indexOf( strID )
```

**Parameters**

```
인덱스를 얻으려 하는 오브젝트의 ID 를 문자열로 설정합니다.
```

**Return**

strID 에 해당하는 오브젝트의 인덱스를 반환합니다.


---

### insertChild

> Components > Component > Graphics > Objects > GraphicsPaths > Method > insertChild

**Description**

GraphicPath 오브젝트를 GraphicsPaths 의 특정 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.insertChild( nIdx, strID, objGPath )
```

**Parameters**

```
GraphicsPath 오브젝트가 삽입될 위치의 인덱스를 숫자로 설정합니다.
```

**Return**

GraphicsPaths 에 삽입된 GraphicsPath 오브젝트의 인덱스를 반환합니다.

**Remark**

- insertChild() 메소드로 GraphicsPath 오브젝트가 추가되어도 화면에 오브젝트가 자동으로 표시되지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- GraphicsPath 오브젝트는 GraphicsPaths 에 추가된 순서대로 화면에 표시됩니다.
   따라서 GraphicsPath 오브젝트가 동일위치일 경우 먼저 추가된 오브젝트는 뒤에 추가된 오브젝트에 가려집니다.

**See Also**

GraphicsPaths.addChildGraphicsPaths.removeChild


---

### isHitTest

> Components > Component > Graphics > Objects > GraphicsPaths > Method > isHitTest

**Description**

인수로 전달된 좌표위치가 GraphicsPaths 영역에 포함되는지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.isHitTest( nX, nY )
```

**Parameters**

```
확인할 위치의 x 좌표값을 pixel 단위의 숫자로 설정합니다.

설정값은 Graphics 컴포넌트를 기준으로 처리됩니다.
```

**Return**

인수로 전달된 좌표위치가 GraphicsPaths 영역에 포함되면 true 를 반환합니다.

인수로 전달된 좌표위치가 GraphicsPaths 영역에 포함되지 않으면 false 를 반환합니다.

**Remark**

- 일반적으로 GraphicsPaths 영역은 getRect() 메소드로 반환되는 영역과 일치합니다.
   getRect() 메소드의 반환값은 GraphicsPaths 의 상태에 따라 변경될 수 있으므로 isHitTest() 사용에 주의하여야 합니다.

- 인수로 전달된 nX, nY 좌표는 Graphics 컴포넌트의 left, top 을 기준으로 처리됩니다.


---

### removeChild

> Components > Component > Graphics > Objects > GraphicsPaths > Method > removeChild

**Description**

GraphicsPaths 에서 특정 ID 의 GraphicsPath 오브젝트를 제거하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.removeChild( strID )
```

**Parameters**

```
제거하려는 GraphicsPath 오브젝트의 ID 를 문자열로 설정합니다.
```

**Return**

GraphicsPaths 에서 제거된 GraphicsPath 오브젝트를 반환합니다.

**Remark**

- removeChild() 메소드로 GraphicsPath 오브젝트가 제거되어도 화면에 표시된 오브젝트가 자동으로 사라지지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- removeChild() 메소드로 제거된 GraphicsPath 오브젝트를 메모리에서 삭제하려면 destroy() 메소드를 사용해야 합니다.

**See Also**

GraphicsPaths.addChildGraphicsPaths.insertChild


---

### rotate

> Components > Component > Graphics > Objects > GraphicsPaths > Method > rotate

**Description**

GraphicsPaths 에 회전효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.rotate( nAngle [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 모습에서 회전될 각도를 숫자로 설정합니다.

양수로 설정 시 시계방향으로 회전합니다.
음수로 설정 시 반시계방향으로 회전합니다.
```

**Return**

없음

**Remark**

- rotate() 메소드 수행 시 Position 과 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 rotate() 메소드가 적용된 영역정보를 반환합니다.

- rotate() 메소드는 GraphicsPaths 가 표시되는 위치를 기준으로 수행됩니다.
   따라서 rotate() 메소드를 여러번 수행하면 회전 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 회전효과가 동일하게 적용됩니다.

- GraphicsPaths 에 부모 오브젝트가 설정되어 있어야 rotate() 메소드가 정상적으로 수행됩니다.
   즉, rotate() 메소드 수행 전에 addChild() 메소드로 GraphicsPaths 를 등록하여야 합니다.


---

### scale

> Components > Component > Graphics > Objects > GraphicsPaths > Method > scale

**Description**

GraphicsPaths 에 확대/축소 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.scale( nScaleX, nScaleY [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 크기에서 확대/축소 될 가로 배율을 실수로 설정합니다.

1.0 보다 큰값을 설정하면 GraphicsPaths 가 확대됩니다.
1.0 보다 작은값을 설정하면 GraphicsPaths 가 축소됩니다.
```

**Return**

없음

**Remark**

- scale() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 scale() 메소드가 적용된 영역정보를 반환합니다.

- scale() 메소드는 GraphicsPaths 가 표시되는 크기를 기준으로 수행됩니다.
   따라서 scale() 메소드를 여러번 수행하면 확대/축소 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 확대/축소 효과가 동일하게 적용됩니다.

- GraphicsPaths 에 부모 오브젝트가 설정되어 있어야 scale() 메소드가 정상적으로 수행됩니다.
   즉, scale() 메소드 수행 전에 addChild() 메소드로 GraphicsPaths 를 등록하여야 합니다.


---

### setClipRect

> Components > Component > Graphics > Objects > GraphicsPaths > Method > setClipRect

**Description**

GraphicsPaths 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.setClipRect( nX, nY, nWidth, nHeight );
```

**Parameters**

```
Clipping 할 영역의 x 좌표를 숫자로 설정합니다.

설정값은 GraphicsPaths 의 x 속성값 위치를 0 으로 가정하고 처리됩니다.
```

**Return**

없음

**Remark**

- GraphicsPaths 영역에서 Clipping 영역으로 설정된 부분만 화면에 표시됩니다.
   Transform 과 관련된 메소드(scale(), rotate() 등)가 적용된 경우 GraphicsPaths 의 원본영역을 기준으로 Clipping 됩니다.

- "setClipRect( null );" 형태로 파라미터에 null 설정 시 Clipping 영역 설정이 취소됩니다.

- Clipping 이 적용되어도 GraphicsPaths 의 Position 관련 속성값은 변경되지 않습니다.


---

### setPathData

> Components > Component > Graphics > Objects > GraphicsPaths > Method > setPathData

**Description**

GraphicsPaths 에 SVG 형식으로 경로 데이터를 설정하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.setPathData( strPath )
```

**Parameters**

```
경로 데이터를 SVG 형식의 문자열로 설정합니다.

설정할 수 있는 SVG 형식입니다.
- "M x,y" : 시작위치를 x,y 좌표위치로 설정합니다.
- "L x,y" : 현재 위치에서 x,y 좌표위치까지 선을 표시합니다.
- "H x" : 현재 위치에서 x 좌표위치까지 가로선을 표시합니다.
- "V y" : 현재 위치에서 y 좌표위치까지 세로선을 표시합니다.
- "Z" : 현재 위치에서 시작점까지 선을 표시합니다.
- "C x1,y1 x2,y2 x,y" : 현재 위치에서 x,y 좌표위치까지 cubic Bezier 곡선을 표시합니다.
- "S x2,y2 x,y" : 현재 위치에서 x,y 좌표위치까지 cubic Bezier 곡선을 표시합니다.
- "Q x1,y1 x,y" : 현재 위치에서 x,y 좌표위치까지 quadratic Bezier 곡선을 표시합니다.
- "T x,y" : 현재 위치에서 x,y 좌표위치까지 quadratic Bezier 곡선을 표시합니다.
- "A rx,ry rotation large clockwise x,y" : 현재 위치에서 x,y 좌표위치까지 타원호를 표시합니다.
```

**Return**

없음

**Remark**

- "M" 명령어는 경로의 시작점을 설정할 때 외에는 무시됩니다.
   경로를 그리기 시작한 후 입력되는 "M" 명령어는 처리되지 않습니다.

- 경로 데이터는 공백문자로 구분됩니다.

**See Also**

GraphicsPaths.getPathData


---

### setTransform

> Components > Component > Graphics > Objects > GraphicsPaths > Method > setTransform

**Description**

GraphicsPaths 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.setTransform( strMethod );
```

**Parameters**

```
GraphicsPaths 에 적용할 Transform 관련 메소드를 "," 로 구분하여 설정합니다.
translate(), scale(), rotate(), shear() 메소드를 사용할 수 있습니다.
null 값 설정 시 transform 효과가 지정되지 않은 상태로 초기화합니다.
```

**Return**

없음

**Remark**

- setTransform() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 setTransform() 메소드가 적용된 영역정보를 반환합니다.

- setTransform() 메소드는 GraphicsPaths 의 원본 위치를 기준으로 수행됩니다.
   따라서 setTransform() 메소드를 여러번 수행해도 효과가 누적되어 적용되지 않습니다.

- GraphicsGroup 의 경우 하위 오브젝트에 효과가 동일하게 적용됩니다.

- GraphicsPaths 에 부모 오브젝트가 설정되어 있어야 setTransform() 메소드가 정상적으로 수행됩니다.
   즉, setTransform() 메소드 수행 전에 addChild() 메소드로 GraphicsPaths 를 등록하여야 합니다.

- 메소드 실행 시 strMethod 파라미터 값을 null로 설정하면 transform 효과가 지정되지 않은 상태로 초기화합니다.
  setTransform 메소드로 설정한 transform 효과 뿐 아니라 translate, scale, rotate, shear 메소드로 개별 설정한 상태도 초기화합니다.


---

### shear

> Components > Component > Graphics > Objects > GraphicsPaths > Method > shear

**Description**

GraphicsPaths 에 비틀기 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.shear( nRadianX, nRadianY [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 모습에서 x 축 기준으로 비틀어질 각도를 라디안값으로 설정합니다.
```

**Return**

없음

**Remark**

- shear() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 shear() 메소드가 적용된 영역정보를 반환합니다.

- shear() 메소드는 GraphicsPaths 가 표시되는 모습을 기준으로 수행됩니다.
   따라서 shear() 메소드를 여러번 수행하면 비틀기 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 비틀기 효과가 동일하게 적용됩니다.

- GraphicsPaths 에 부모 오브젝트가 설정되어 있어야 shear() 메소드가 정상적으로 수행됩니다.
   즉, shear() 메소드 수행 전에 addChild() 메소드로 GraphicsPaths 를 등록하여야 합니다.


---

### toString

> Components > Component > Graphics > Objects > GraphicsPaths > Method > toString

**Description**

GraphicsPaths 의 타입을 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.toString();
```

**Return**

일반적으로 "[object GraphicsPaths]" 형태의 문자열을 반환합니다.


---

### transform

> Components > Component > Graphics > Objects > GraphicsPaths > Method > transform

**Description**

GraphicsPaths 에 Transform 관련 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.transform( nScaleX, nShearX, nShearY, nScaleY, nTransX, nTransY );
```

**Parameters**

```
현재 크기에서 확대/축소 될 가로 배율을 실수로 설정합니다.

1.0 보다 큰값을 설정하면 GraphicsPaths 가 확대됩니다.
1.0 보다 작은값을 설정하면 GraphicsPaths 가 축소됩니다.
```

**Return**

없음

**Remark**

- transform() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 transform() 메소드가 적용된 영역정보를 반환합니다.

- transform() 메소드는 GraphicsPaths 가 표시되는 모습을 기준으로 수행됩니다.
   따라서 transform() 메소드를 여러번 수행하면 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 효과가 동일하게 적용됩니다.

- GraphicsPaths 에 부모 오브젝트가 설정되어 있어야 transform() 메소드가 정상적으로 수행됩니다.
   즉, transform() 메소드 수행 전에 addChild() 메소드로 GraphicsPaths 를 등록하여야 합니다.


---

### translate

> Components > Component > Graphics > Objects > GraphicsPaths > Method > translate

**Description**

GraphicsPaths 의 위치가 이동되는 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsPaths.translate( nTransX, nTransY );
```

**Parameters**

```
현재 위치에서 x 축 방향으로 이동 할 거리를 pixel 단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- translate() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 translate() 메소드가 적용된 영역정보를 반환합니다.

- translate() 메소드는 GraphicsPaths 가 표시되는 위치를 기준으로 수행됩니다.
   따라서 translate() 메소드를 여러번 수행하면 이동 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 이동 효과가 동일하게 적용됩니다.

- GraphicsPaths 에 부모 오브젝트가 설정되어 있어야 translate() 메소드가 정상적으로 수행됩니다.
   즉, translate() 메소드 수행 전에 addChild() 메소드로 GraphicsPaths 를 등록하여야 합니다.


---

## Components > Component > Graphics > GraphicsRect

### GraphicsRect

> Components > Component > Graphics > Objects > GraphicsRect

**Description**

Graphics 컴포넌트에 사각형을 표시할 때 사용되는 오브젝트입니다.

**Remark**

- 스크립트로 동적생성하여 사용할 수 있으며 넥사크로 스튜디오에서 디자인 할 수 없습니다.

**Property**

| Name | Description |
| --- | --- |
| fillstyle | GraphicsRect 의 내부영역에 채워질 형식과 색을 설정하는 속성입니다. |
| height | GraphicsRect 영역의 높이를 설정하는 속성입니다. |
| id | GraphicsRect 의 고유 식별자를 설정하는 속성입니다. |
| miterlimit | strokejoin 속성값이 "miter" 일 때 특정 조건에서 "bevel" 로 변경적용될 비율값을 설정하는 속성입니다. |
| opacity | GraphicsRect 영역의 투명도를 설정하는 속성입니다. |
| parent | GraphicsRect 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| radiusx | GraphicsRect 의 모서리를 둥글게 표시하기 위해 x 축의 반경을 설정하는 속성입니다. |
| radiusy | GraphicsRect 의 모서리를 둥글게 표시하기 위해 y 축의 반경을 설정하는 속성입니다. |
| strokejoin | GraphicsRect 의 모서리 모양을 설정하는 속성입니다. |
| strokepen | GraphicsRect 의 외곽선에 적용될 색과 형식을 설정하는 속성입니다. |
| visible | GraphicsRect 가 화면에 표시될지 여부를 설정하는 속성입니다. |
| width | GraphicsRect 영역의 너비를 설정하는 속성입니다. |
| x | 부모 오브젝트를 기준으로 GraphicsRect 가 표시될 x 축 좌표값을 설정하는 속성입니다. |
| y | 부모 오브젝트를 기준으로 GraphicsRect 가 표시될 y 축 좌표값을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| destroy | GraphicsRect 를 메모리에서 완전히 삭제하는 메소드입니다. |
| getBoundRect | GraphicsRect 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| getNextSibling | GraphicsRect 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다. |
| getOffsetBoundRect | GraphicsRect 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| getOffsetRect | GraphicsRect 가 표시되는 영역정보를 부모 오브젝트 기준으로 반환하는 메소드입니다. |
| getOffsetRegion | GraphicsRect 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| getPreviousSibling | GraphicsRect 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다. |
| getRect | GraphicsRect 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다. |
| getRegion | GraphicsRect 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| isEmptyRect | GraphicsRect 에 영역이 설정 되었는지 여부를 반환하는 메소드입니다. |
| isHitTest | 인수로 전달된 좌표위치가 GraphicsRect 영역에 포함되는지 여부를 반환하는 메소드입니다. |
| rotate | GraphicsRect 에 회전효과를 적용하는 메소드입니다. |
| scale | GraphicsRect 에 확대/축소 효과를 적용하는 메소드입니다. |
| setClipRect | GraphicsRect 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다. |
| setTransform | GraphicsRect 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다. |
| shear | GraphicsRect 에 비틀기 효과를 적용하는 메소드입니다. |
| toString | GraphicsRect 의 타입을 문자열로 반환하는 메소드입니다. |
| transform | GraphicsRect 에 Transform 관련 효과를 적용하는 메소드입니다. |
| translate | GraphicsRect 의 위치가 이동되는 효과를 적용하는 메소드입니다. |


---

### 속성 (Properties)

### fillstyle

> Components > Component > Graphics > Objects > GraphicsRect > Property > fillstyle

**Description**

GraphicsRect 의 내부영역에 채워질 형식과 색을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.fillstyle[= strFillStyle]
```

**Setting Syntax**

```javascript
strFillStyle ::= <color> | <linear-gradient>

<color> ::= <NamedColor> | <NumericColor>

<linear-gradient> ::= 'linear-gradient(' [<angle> , ] <color-stop> ')'
<angle> ::= 'to left' | 'to right' | 'to top' | 'to bottom' | 'to left top' | 'to left bottom' | 'to right top' | 'to right bottom'
<color-stop> ::= <startcolor-stop> [',' <listcolor-stop>] ',' <endcolor-stop>
<startcolor-stop> ::= <color> [<percentage>'%']
<listcolor-stop> ::= <color> [<percentage>'%'] [',' <listcolor-stop>]*
<endcolor-stop> ::= <color> [<percentage>'%']
```
```javascript
var objGObject = new nexacro.GraphicsRect();

objGObject.fillstyle = "red";
objGObject.fillstyle = "rgb(255,255,0)";
objGObject.fillstyle = "#ffffaa";
objGObject.fillstyle = "linear-gradient(red, yellow)";
objGObject.fillstyle = "linear-gradient(to right, red, yellow)";
objGObject.fillstyle = "linear-gradient(to right, red 50%, yellow)";
objGObject.fillstyle = "linear-gradient(red, yellow 25%, green 50%, blue 75%, indigo)";
objGObject.fillstyle = "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)";
```
- **`<color>`** — GraphicsRect 의 내부영역에 채워질 색을 색상이름 또는 색상코드로 설정합니다.
- **`<NamedColor>`** — "red", "blue" 와 같이 미리 정의된 색상이름의 문자열로 내부영역의 색을 설정합니다.
- **`<NumericColor>`** — "#"기호로 시작하는 6자리 HexaDecimal 색상코드값으로 내부영역의 색을 설정합니다. ("#FF00FF")

r,g,b 값을 인자로 하는 rgb() 메소드로 내부영역의 색을 설정합니다. ("rgb (255, 0, 255)")
- **`<linear-gradient>`** — GraphicsRect 의 내부영역을 그라데이션으로 설정합니다.

"linear-gradient ( [방향, 색상값, 색상값, ...] )" 형식으로 그라데이션 방향과 색상을 설정할 수 있습니다.
<listcolor-stop> 에 한 개 이상의 색상값을 설정할 수 있습니다.
- **`<angle>`** — 그라데이션의 표시 방향을 설정합니다.

"to left" 설정 시 오른쪽에서 왼쪽 방향으로 그라데이션이 표시됩니다.
"to right" 설정 시 왼쪽에서 오른쪽 방향으로 그라데이션이 표시됩니다.
"to top" 설정 시 아래쪽에서 윗쪽 방향으로 그라데이션이 표시됩니다.
"to bottom" 설정 시 윗쪽에서 아래쪽 방향으로 그라데이션이 표시됩니다.
"to left top" 설정 시 오른쪽 아래 방향에서 왼쪽 윗 방향으로 그라데이션이 표시됩니다.
"to left bottom" 설정 시 오른쪽 윗 뱡향에서 왼쪽 아래 방향으로 그라데이션이 표시됩니다.
"to right top" 설정 시 왼쪽 아래 방향에서 오른쪽 윗 방향으로 그라데이션이 표시됩니다.
"to right bottom" 설정 시 왼쪽 윗 방향에서 오른쪽 아래 방향으로 그라데이션이 표시됩니다.

값을 설정하지 않으면 "to bottom" 으로 적용됩니다.
- **`<color-stop>`** — 그라데이션의 시작점, 끝점, 중간점의 색을 설정합니다.

<angle> 값에 따라 시작점과 끝점의 위치가 결정됩니다.
<angle> 값에 설정된 표시 방향이 시작되는 위치가 시작점으로 적용됩니다.

예를 들어 <angle> 값이 "to left" 이면 GraphicsRect 영역의 오른쪽 위치가 시작점이 되고, 왼쪽 위치가 끝점이 됩니다.
<angle> 값이 "to right" 이면 GraphicsRect 영역의 왼쪽 위치가 시작점이 되고, 오른쪽 위치가 끝점이 됩니다.

그라데이션 중간점의 색은 한개 이상 설정할 수 있으며 <percentage> 값 생략 시 균등하게 표시됩니다.
- **`<startcolor-stop>`** — 그라데이션의 시작점 색을 설정합니다.

<angle> 값에 설정된 방향으로 시작점 위치가 결정됩니다.
시작점의 <percentage> 값을 0 이상으로 설정 시 "시작점~설정값"까지 동일한 색상으로 표시됩니다.
- **`<listcolor-stop>`** — 그라데이션의 중간점 색을 설정합니다.

시작점과 끝점 사이에 적용될 중간색을 ","로 구분하여 여러개 설정할 수 있습니다.
- **`<endcolor-stop>`** — 그라데이션의 끝점 색을 설정합니다.

<angle> 값에 설정된 방향으로 끝점 위치가 결정됩니다.
끝점의 <percentage> 값을 100 이하로 설정 시 "설정값~끝점"까지 동일한 색상으로 표시됩니다.
- **`<percentage>`** — <color> 에 해당하는 색이 적용될 위치를 비율값으로 설정합니다.

<angle> 값에 의해 결정된 시작점이 "0%" 로 적용됩니다.
<angle> 값에 의해 결정된 끝점이 "100%" 로 적용됩니다.

<percentage> 값은 0 에서 100 사이의 값을 설정해야 합니다.
<percentage> 값을 생략하면 균등한 위치에 <color> 값이 적용됩니다.

**Remark**

- GraphicsPaths, GraphicsPath 는 닫힌 경로가 존재할 경우에만 내부영역을 처리합니다.


---

### height

> Components > Component > Graphics > Objects > GraphicsRect > Property > height

**Description**

GraphicsRect 영역의 높이를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.height[= nHeight]
```

**Setting Syntax**

```javascript
var objGObject = new nexacro.GraphicsRect();

objGObject.height = 300;
```
- **`nHeight`** — GraphicsRect 영역의 높이를 pixel 단위의 숫자로 설정합니다.

"px" 단위 없이 숫자값만 설정하여야 합니다.


---

### id

> Components > Component > Graphics > Objects > GraphicsRect > Property > id

**Description**

GraphicsRect 의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsRect.id
```

**Setting Syntax**

```javascript
var objGraphicsRect = new nexacro.GraphicsRect();

this.Graphics00.addChild( "GraphicsRect00", objGraphicsRect );
```
- **`id`** — GraphicsRect 를 구별할 수 있는 유일값을 설정합니다.

**Remark**

-  addChild() 나 insertChild() 메소드를 사용하여 GraphicsRect 를 등록할때 오브젝트를 구별하기 위한 고유값입니다.

- 속성명이나 메소드명과 같은 예약어를 설정할 경우 오류가 발생할 수 있습니다.


---

### miterlimit

> Components > Component > Graphics > Objects > GraphicsRect > Property > miterlimit

**Description**

strokejoin 속성값이 "miter" 일 때 특정 조건에서 "bevel" 로 변경적용될 비율값을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.miterlimit[= nLimit]
```

**Setting Syntax**

```javascript
var objGObject = new nexacro.GraphicsRect();

objGObject.miterlimit = 1;
```
- **`nLimit`** — strokejoin 속성값이 "bevel" 로 변경될 최소 비율을 1 이상의 숫자로 설정합니다.

1 설정 시 strokejoin 속성이 항상 "bevel" 로 적용됩니다.
1 보다 큰 값을 설정하면 연관 요소들을 함께 판단하여 "bevel" 로 적용됩니다.

**Remark**

- miterlimit 속성값을 설정하지 않으면 10 으로 적용됩니다.

- 일반적으로 miterlimit 속성값이 "miter_length / (stroke_width / 2)" 의 값보다 작으면 strokejoin 속성값이 "bevel" 로 적용됩니다.
   > miter_length : 두 선의 중심이 만나는 점에서 테두리가 만나 뾰족하게 돌출된 끝점까지의 거리
   > stroke_width : 선의 두께


---

### opacity

> Components > Component > Graphics > Objects > GraphicsRect > Property > opacity

**Description**

GraphicsRect 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.opacity[= nOpacity]
```

**Setting Syntax**

```javascript
var objGraphicsRect = new nexacro.GraphicsRect() ;

objGraphicsRect.opacity = 0.5;
objGraphicsRect.opacity = "0.5";
objGraphicsRect.opacity = "50%";
```
- **`nOpacity`** — 0.0 ~ 1.0 사이의 값 또는 0.0% ~ 100.0% 사이의 값을 지정합니다.
0(또는 0%)을 설정하면 완전 투명, 1(또는 100%)을 설정하면 완전 불투명으로 처리됩니다.
1 이상의 값은 1로, 0 이하의 값은 0으로 처리됩니다. 마찬가지로 100% 이상의 값은 100%로, 0% 이하의 값은 0%로 처리됩니다.

Script는 숫자 또는 문자(숫자, 퍼센트 값)로 설정할 수 있습니다.

**Remark**

- opacity 속성값을 설정하지 않으면 undefined 가 설정되고 1 로 동작합니다.

- GraphicsGroup 의 경우 하위 오브젝트에 투명도가 동일하게 적용됩니다.

- 부모와 자식 오브젝트에 각각 opacity 속성이 설정되어 있으면 자식 오브젝트의 투명도는 부모의 투명도에 추가적으로 적용됩니다.
   예를 들어 부모의 opacity 값이 0.5 이고 자식의 opacity 값이 0.4 이면 결과적으로 자식 오브젝트는 0.2 의 투명도가 적용됩니다.


---

### parent

> Components > Component > Graphics > Objects > GraphicsRect > Property > parent

**Description**

GraphicsRect 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GraphicsRect.parent
```

**Remark**

- 일반적으로 addChild() 메소드를 사용하여 GraphicsRect 를 추가한 오브젝트가 parent 속성에 설정됩니다.

- GraphicsRect 가 어디에도 속해있지 않거나 부모 오브젝트로부터 제거되면 null 값을 갖습니다.


---

### radiusx

> Components > Component > Graphics > Objects > GraphicsRect > Property > radiusx

**Description**

GraphicsRect 의 모서리를 둥글게 표시하기 위해 x 축의 반경을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsRect.radiusx[= nRadiusx]
```

**Setting Syntax**

```javascript
var objGRect = new nexacro.GraphicsRect();  

objGRect.radiusx = 50; 
objGRect.radiusy = 50;
```
- **`nRadiusx`** — 모서리를 둥글게 표시하기 위한 x 축의 반경을 pixel 단위의 숫자로 설정합니다.

설정값은 GraphicsRect 의 네 모서리에 동일하게 적용됩니다.

**Remark**

- radiusy 속성값과 함께 설정하여야 모서리에 효과가 적용됩니다.

**See Also**

GraphicsRect.radiusy


---

### radiusy

> Components > Component > Graphics > Objects > GraphicsRect > Property > radiusy

**Description**

GraphicsRect 의 모서리를 둥글게 표시하기 위해 y 축의 반경을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsRect.radiusy[= nRadiusy]
```

**Setting Syntax**

```javascript
var objGRect = new nexacro.GraphicsRect();  

objGRect.radiusx = 50; 
objGRect.radiusy = 50;
```
- **`nRadiusy`** — 모서리를 둥글게 표시하기 위한 y 축의 반경을  pixel 단위의 숫자로 설정합니다.

설정값은 GraphicsRect 의 네 모서리에 동일하게 적용됩니다.

**Remark**

- radiusx 속성값과 함께 설정하여야 모서리에 효과가 적용됩니다.

**See Also**

GraphicsRect.radiusx


---

### strokejoin

> Components > Component > Graphics > Objects > GraphicsRect > Property > strokejoin

**Description**

GraphicsRect 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsRect.strokejoin[= enumJoin]
```

**Setting Syntax**

```javascript
enumJoin ::= 'miter' | 'round' | 'bevel'
```
```javascript
var objGRect = new nexacro.GraphicsRect();  

objGRect.strokepen = "10px solid red"; 
objGRect.strokejoin = "bevel";
```
- **`"miter"`** — 모서리 끝부분이 일반적인 사각형 모양의 직각으로 표시됩니다.
- **`"round"`** — 모서리 끝부분이 둥글게 표시됩니다.
- **`"bevel"`** — 모서리 끝부분이 45도 각도로 잘린것처럼 표시됩니다.

**Remark**

- strokejoin 속성값을 설정하지 않으면 "miter" 로 적용됩니다.

- strokejoin 속성값이 "miter" 인 경우 miterlimit 속성값에 의해 모서리가 잘린것처럼 표시할 수 있습니다.

- radiusx, radiusy 속성을 설정하면 strokejoin 속성값은 무시됩니다.

**See Also**

GraphicsRect.miterlimit


---

### strokepen

> Components > Component > Graphics > Objects > GraphicsRect > Property > strokepen

**Description**

GraphicsRect 의 외곽선에 적용될 색과 형식을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.strokepen[= strStrokePen]
```

**Setting Syntax**

```javascript
strStrokePen ::= <line-width> <line-style> <color>

<line-width> ::= <nWidth> ['px']
<line-style> ::= 'solid' | 'dotted' | 'dashed'
<color> ::= <NamedColor> | <NumericColor>
```
```javascript
var objGObject = new nexacro.GraphicsRect();

objGObject.strokepen = "5px solid red";
objGObject.strokepen = "5 dotted #999999";
objGObject.strokepen = "5px dotted rgb(255,0,0)";
```
- **`<nWidth>`** — 외곽선의 두께를 pixel 단위의 숫자로 설정합니다.
- **`<line-style>`** — 외곽선의 스타일을 설정합니다.

"solid" 설정 시 외곽선이 실선으로 표시됩니다.
"dotted" 설정 시 외곽선이 점선으로 표시됩니다.
"dashed" 설정 시 외곽선이 긴 점선으로 표시됩니다.
- **`<NamedColor>`** — 외곽선의 색을 "red", "blue" 와 같이 미리 정의된 색상이름의 문자열로 설정합니다.
- **`<NumericColor>`** — "#" 기호로 시작하는 6자리 hexadecimal 색상코드값으로 외곽선의 색을 설정합니다. ("#FF00FF")

r,g,b 값을 인자로 하는 rgb() 메소드로 외곽선의 색을 설정합니다. (ex-"rgb (255, 0, 255)")

**Remark**

- strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.

◆ Nexacro Runtime Environment 제약

- Nexacro Runtime Environment는 <line-style> 에 "solid" 값만 설정할 수 있습니다.


---

### visible

> Components > Component > Graphics > Objects > GraphicsRect > Property > visible

**Description**

GraphicsRect 가 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
var objGraphicsRect = new nexacro.GraphicsRect();

objGraphicsRect.visible = false;
```
- **`true`** — Graphics 컴포넌트의 redraw() 메소드 수행 시 GraphicsRect 를 표시합니다.
- **`false`** — Graphics 컴포넌트의 redraw() 메소드 수행 시 GraphicsRect 를 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하면 화면에 즉시 반영되지 않고 Graphics 컴포넌트의 redraw() 메소드가 수행될 때 반영됩니다.

- GraphicsGroup 의 경우 visible 속성을 false 로 설정하면 하위 오브젝트도 함께 화면에 표시되지 않습니다.

- visible 속성에 의해 화면에 GraphicsRect 가 표시되지 않아도 오브젝트는 존재하기 때문에 스크립트로 제어가 가능합니다.


---

### width

> Components > Component > Graphics > Objects > GraphicsRect > Property > width

**Description**

GraphicsRect 영역의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.width[= nWidth]
```

**Setting Syntax**

```javascript
var objGObject = new nexacro.GraphicsRect();

objGObject.width = 300;
```
- **`nWidth`** — GraphicsRect 영역의 너비를 pixel 단위의 숫자로 설정합니다.

"px" 단위 없이 숫자값만 설정하여야 합니다.


---

### x

> Components > Component > Graphics > Objects > GraphicsRect > Property > x

**Description**

부모 오브젝트를 기준으로 GraphicsRect 가 표시될 x 축 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.x[= nX]
```

**Setting Syntax**

```javascript
var objGraphicsRect = new nexacro.GraphicsRect( ) ;

objGraphicsRect .x = 200;
objGraphicsRect .y = 200;
```
- **`nX`** — 부모 오브젝트를 기준으로 GraphicsRect 가 표시될 x 축 좌표값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- x 속성값을 설정하지 않으면 0 으로 적용됩니다.

- x 속성은 컴포넌트의 left 속성에 해당하는 속성입니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsRect 의 표시위치가 변경되어도 x 속성은 원본위치값을 유지합니다.


---

### y

> Components > Component > Graphics > Objects > GraphicsRect > Property > y

**Description**

부모 오브젝트를 기준으로 GraphicsRect 가 표시될 y 축 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.y[= nY]
```

**Setting Syntax**

```javascript
var objGraphicsRect = new nexacro.GraphicsRect( ) ;

objGraphicsRect .x = 200;
objGraphicsRect .y = 200;
```
- **`nY`** — 부모 오브젝트를 기준으로 GraphicsRect 가 표시될 y 축 좌표값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- y 속성값을 설정하지 않으면 0 으로 적용됩니다.

- y 속성은 컴포넌트의 top 속성에 해당하는 속성입니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsRect 의 표시위치가 변경되어도 y 속성은 원본위치값을 유지합니다.


---

### 메서드 (Methods)

### destroy

> Components > Component > Graphics > Objects > GraphicsRect > Method > destroy

**Description**

GraphicsRect 를 메모리에서 완전히 삭제하는 메소드입니다.

**Syntax**

```javascript
GraphicsRect.destroy()
```

**Return**

GraphicsRect 가 정상적으로 삭제되면 true 를 반환합니다.

GraphicsRect 가 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- destroy() 메소드로 GraphicsRect 가 삭제되어도 화면에 표시된 오브젝트가 자동으로 사라지지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- GraphicsRect 가 하위 오브젝트를 가질 수 있는 경우 하위 오브젝트도 함께 삭제됩니다.


---

### getBoundRect

> Components > Component > Graphics > Objects > GraphicsRect > Method > getBoundRect

**Description**

GraphicsRect 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsRect.getBoundRect( );
```

**Parameters**

var objGraphicsRect = this.Graphics00.getObjectByID("GraphicsRect00");
var objRect = objGraphicsRect.getBoundRect();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다.
strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getBoundRect() 메소드는 GraphicsRect 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getBoundRect() 메소드의 반환값으로 GraphicsRect 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsRect 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getNextSibling

> Components > Component > Graphics > Objects > GraphicsRect > Method > getNextSibling

**Description**

GraphicsRect 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsRect.getNextSibling()
```

**Parameters**

var objGraphicsRect = this.Graphics00.getObjectByID("GraphicsRect00");
var objNext = objGraphicsRect.getNextSibling();

trace( objNext.toString() );

**Return**

부모가 동일한 다음 순서의 Graphics 오브젝트를 반환합니다.

다음 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

**Remark**

- addChild() 메소드로 추가된 순서대로 Graphics 오브젝트가 저장됩니다.

- 부모가 다른 Graphics 오브젝트는 반환되지 않습니다.


---

### getOffsetBoundRect

> Components > Component > Graphics > Objects > GraphicsRect > Method > getOffsetBoundRect

**Description**

GraphicsRect 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsRect.getOffsetBoundRect( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsRect = objGroup.getObjectByID("GraphicsRect00");
var objRect = objGraphicsRect.getOffsetBoundRect();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다.
strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetBoundRect() 메소드는 GraphicsRect 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetBoundRect() 메소드의 반환값으로 GraphicsRect 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsRect 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getOffsetRect

> Components > Component > Graphics > Objects > GraphicsRect > Method > getOffsetRect

**Description**

GraphicsRect 가 표시되는 영역정보를 부모 오브젝트 기준으로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsRect.getOffsetRect( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsRect = objGroup.getObjectByID("GraphicsRect00");
var objRect = objGraphicsRect.getOffsetRect();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsRect 오브젝트의 strokepen 속성값을 설정했더라도 외곽선 영역과 관계없이 GraphicsRect 오브젝트의 실제 영역이 반환됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetRect() 메소드는 GraphicsRect 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetRect() 메소드의 반환값으로 GraphicsRect 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsRect 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getOffsetRegion

> Components > Component > Graphics > Objects > GraphicsRect > Method > getOffsetRegion

**Description**

GraphicsRect 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsRect.getOffsetRegion( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsRect = objGroup.getObjectByID("GraphicsRect00");
var objRect = objGraphicsRect.getOffsetRegion();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsRect 오브젝트의 strokepen 속성값을 설정했더라도 반환되는 영역정보에는 안쪽 외곽선 영역이 제외됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetRegion() 메소드는 GraphicsRect 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetRegion() 메소드의 반환값으로 GraphicsRect 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsRect 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getRegion() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getPreviousSibling

> Components > Component > Graphics > Objects > GraphicsRect > Method > getPreviousSibling

**Description**

GraphicsRect 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsRect.getPreviousSibling()
```

**Parameters**

var objGraphicsRect = this.Graphics00.getObjectByID("GraphicsRect00");
var objPrev = objGraphicsRect.getPreviousSibling();

trace( objPrev.toString() );

**Return**

부모가 동일한 이전 순서의 Graphics 오브젝트를 반환합니다.

이전 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

**Remark**

- addChild() 메소드로 추가된 순서대로 Graphics 오브젝트가 저장됩니다.

- 부모가 다른 Graphics 오브젝트는 반환되지 않습니다.


---

### getRect

> Components > Component > Graphics > Objects > GraphicsRect > Method > getRect

**Description**

GraphicsRect 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsRect.getRect( );
```

**Parameters**

var objGraphicsRect = this.Graphics00.getObjectByID("GraphicsRect00");
var objRect = objGraphicsRect.getRect();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsRect 오브젝트의 strokepen 속성값을 설정했더라도 외곽선 영역과 관계없이 GraphicsRect 오브젝트의 실제 영역이 반환됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getRect() 메소드는 GraphicsRect 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getRect() 메소드의 반환값으로 GraphicsRect 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsRect 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getRegion

> Components > Component > Graphics > Objects > GraphicsRect > Method > getRegion

**Description**

GraphicsRect 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsRect.getRegion( );
```

**Parameters**

var objGraphicsRect = this.Graphics00.getObjectByID("GraphicsRect00");
var objRect = objGraphicsRect.getRegion();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에는 안쪽 외곽선 영역이 제외됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getRegion() 메소드는 GraphicsRect 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getRegion() 메소드의 반환값으로 GraphicsRect 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsRect 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetRegion() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### isEmptyRect

> Components > Component > Graphics > Objects > GraphicsRect > Method > isEmptyRect

**Description**

GraphicsRect 에 영역이 설정 되었는지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsRect.isEmptyRect()
```

**Parameters**

var objGraphicsRect = new nexacro.GraphicsRect();

var bResult = objGraphicsRect.isEmptyRect() ;

**Return**

GraphicsRect 에 영역이 설정되어 있지 않으면 true 를 반환합니다.

GraphicsRect 에 영역이 설정되어 있으면 false 를 반환합니다.

**Remark**

- GraphicsRect 의 height, width 속성에 모두 0 보다 큰 값이 설정되어 있으면 영역이 설정된 것으로 판단합니다.


---

### isHitTest

> Components > Component > Graphics > Objects > GraphicsRect > Method > isHitTest

**Description**

인수로 전달된 좌표위치가 GraphicsRect 영역에 포함되는지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsRect.isHitTest( nX, nY )
```

**Parameters**

```
확인할 위치의 x 좌표값을 pixel 단위의 숫자로 설정합니다.

설정값은 Graphics 컴포넌트를 기준으로 처리됩니다.
```

**Return**

인수로 전달된 좌표위치가 GraphicsRect 영역에 포함되면 true 를 반환합니다.

인수로 전달된 좌표위치가 GraphicsRect 영역에 포함되지 않으면 false 를 반환합니다.

**Remark**

- 일반적으로 GraphicsRect 영역은 getRect() 메소드로 반환되는 영역과 일치합니다.
   getRect() 메소드의 반환값은 GraphicsRect 의 상태에 따라 변경될 수 있으므로 isHitTest() 사용에 주의하여야 합니다.

- 인수로 전달된 nX, nY 좌표는 Graphics 컴포넌트의 left, top 을 기준으로 처리됩니다.


---

### rotate

> Components > Component > Graphics > Objects > GraphicsRect > Method > rotate

**Description**

GraphicsRect 에 회전효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsRect.rotate( nAngle [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 모습에서 회전될 각도를 숫자로 설정합니다.

양수로 설정 시 시계방향으로 회전합니다.
음수로 설정 시 반시계방향으로 회전합니다.
```

**Return**

없음

**Remark**

- rotate() 메소드 수행 시 Position 과 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 rotate() 메소드가 적용된 영역정보를 반환합니다.

- rotate() 메소드는 GraphicsRect 가 표시되는 위치를 기준으로 수행됩니다.
   따라서 rotate() 메소드를 여러번 수행하면 회전 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 회전효과가 동일하게 적용됩니다.

- GraphicsRect 에 부모 오브젝트가 설정되어 있어야 rotate() 메소드가 정상적으로 수행됩니다.
   즉, rotate() 메소드 수행 전에 addChild() 메소드로 GraphicsRect 를 등록하여야 합니다.


---

### scale

> Components > Component > Graphics > Objects > GraphicsRect > Method > scale

**Description**

GraphicsRect 에 확대/축소 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsRect.scale( nScaleX, nScaleY [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 크기에서 확대/축소 될 가로 배율을 실수로 설정합니다.

1.0 보다 큰값을 설정하면 GraphicsRect 가 확대됩니다.
1.0 보다 작은값을 설정하면 GraphicsRect 가 축소됩니다.
```

**Return**

없음

**Remark**

- scale() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 scale() 메소드가 적용된 영역정보를 반환합니다.

- scale() 메소드는 GraphicsRect 가 표시되는 크기를 기준으로 수행됩니다.
   따라서 scale() 메소드를 여러번 수행하면 확대/축소 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 확대/축소 효과가 동일하게 적용됩니다.

- GraphicsRect 에 부모 오브젝트가 설정되어 있어야 scale() 메소드가 정상적으로 수행됩니다.
   즉, scale() 메소드 수행 전에 addChild() 메소드로 GraphicsRect 를 등록하여야 합니다.


---

### setClipRect

> Components > Component > Graphics > Objects > GraphicsRect > Method > setClipRect

**Description**

GraphicsRect 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다.

**Syntax**

```javascript
GraphicsRect.setClipRect( nX, nY, nWidth, nHeight );
```

**Parameters**

```
Clipping 할 영역의 x 좌표를 숫자로 설정합니다.

설정값은 GraphicsRect 의 x 속성값 위치를 0 으로 가정하고 처리됩니다.
```

**Return**

없음

**Remark**

- GraphicsRect 영역에서 Clipping 영역으로 설정된 부분만 화면에 표시됩니다.
   Transform 과 관련된 메소드(scale(), rotate() 등)가 적용된 경우 GraphicsRect 의 원본영역을 기준으로 Clipping 됩니다.

- "setClipRect( null );" 형태로 파라미터에 null 설정 시 Clipping 영역 설정이 취소됩니다.

- Clipping 이 적용되어도 GraphicsRect 의 Position 관련 속성값은 변경되지 않습니다.


---

### setTransform

> Components > Component > Graphics > Objects > GraphicsRect > Method > setTransform

**Description**

GraphicsRect 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsRect.setTransform( strMethod );
```

**Parameters**

```
GraphicsRect 에 적용할 Transform 관련 메소드를 "," 로 구분하여 설정합니다.
translate(), scale(), rotate(), shear() 메소드를 사용할 수 있습니다.
null 값 설정 시 transform 효과가 지정되지 않은 상태로 초기화합니다.
```

**Return**

없음

**Remark**

- setTransform() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 setTransform() 메소드가 적용된 영역정보를 반환합니다.

- setTransform() 메소드는 GraphicsRect 의 원본 위치를 기준으로 수행됩니다.
   따라서 setTransform() 메소드를 여러번 수행해도 효과가 누적되어 적용되지 않습니다.

- GraphicsGroup 의 경우 하위 오브젝트에 효과가 동일하게 적용됩니다.

- GraphicsRect 에 부모 오브젝트가 설정되어 있어야 setTransform() 메소드가 정상적으로 수행됩니다.
   즉, setTransform() 메소드 수행 전에 addChild() 메소드로 GraphicsRect 를 등록하여야 합니다.

- 메소드 실행 시 strMethod 파라미터 값을 null로 설정하면 transform 효과가 지정되지 않은 상태로 초기화합니다.
  setTransform 메소드로 설정한 transform 효과 뿐 아니라 translate, scale, rotate, shear 메소드로 개별 설정한 상태도 초기화합니다.


---

### shear

> Components > Component > Graphics > Objects > GraphicsRect > Method > shear

**Description**

GraphicsRect 에 비틀기 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsRect.shear( nRadianX, nRadianY [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 모습에서 x 축 기준으로 비틀어질 각도를 라디안값으로 설정합니다.
```

**Return**

없음

**Remark**

- shear() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 shear() 메소드가 적용된 영역정보를 반환합니다.

- shear() 메소드는 GraphicsRect 가 표시되는 모습을 기준으로 수행됩니다.
   따라서 shear() 메소드를 여러번 수행하면 비틀기 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 비틀기 효과가 동일하게 적용됩니다.

- GraphicsRect 에 부모 오브젝트가 설정되어 있어야 shear() 메소드가 정상적으로 수행됩니다.
   즉, shear() 메소드 수행 전에 addChild() 메소드로 GraphicsRect 를 등록하여야 합니다.


---

### toString

> Components > Component > Graphics > Objects > GraphicsRect > Method > toString

**Description**

GraphicsRect 의 타입을 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsRect.toString();
```

**Return**

일반적으로 "[object GraphicsRect]" 형태의 문자열을 반환합니다.


---

### transform

> Components > Component > Graphics > Objects > GraphicsRect > Method > transform

**Description**

GraphicsRect 에 Transform 관련 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsRect.transform( nScaleX, nShearX, nShearY, nScaleY, nTransX, nTransY );
```

**Parameters**

```
현재 크기에서 확대/축소 될 가로 배율을 실수로 설정합니다.

1.0 보다 큰값을 설정하면 GraphicsRect 가 확대됩니다.
1.0 보다 작은값을 설정하면 GraphicsRect 가 축소됩니다.
```

**Return**

없음

**Remark**

- transform() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 transform() 메소드가 적용된 영역정보를 반환합니다.

- transform() 메소드는 GraphicsRect 가 표시되는 모습을 기준으로 수행됩니다.
   따라서 transform() 메소드를 여러번 수행하면 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 효과가 동일하게 적용됩니다.

- GraphicsRect 에 부모 오브젝트가 설정되어 있어야 transform() 메소드가 정상적으로 수행됩니다.
   즉, transform() 메소드 수행 전에 addChild() 메소드로 GraphicsRect 를 등록하여야 합니다.


---

### translate

> Components > Component > Graphics > Objects > GraphicsRect > Method > translate

**Description**

GraphicsRect 의 위치가 이동되는 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsRect.translate( nTransX, nTransY );
```

**Parameters**

```
현재 위치에서 x 축 방향으로 이동 할 거리를 pixel 단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- translate() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 translate() 메소드가 적용된 영역정보를 반환합니다.

- translate() 메소드는 GraphicsRect 가 표시되는 위치를 기준으로 수행됩니다.
   따라서 translate() 메소드를 여러번 수행하면 이동 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 이동 효과가 동일하게 적용됩니다.

- GraphicsRect 에 부모 오브젝트가 설정되어 있어야 translate() 메소드가 정상적으로 수행됩니다.
   즉, translate() 메소드 수행 전에 addChild() 메소드로 GraphicsRect 를 등록하여야 합니다.


---

## Components > Component > Graphics > GraphicsText

### GraphicsText

> Components > Component > Graphics > Objects > GraphicsText

**Description**

Graphics 컴포넌트에 텍스트를 표시할 때 사용되는 오브젝트입니다.

**Remark**

- 스크립트로 동적생성하여 사용할 수 있으며 넥사크로 스튜디오에서 디자인 할 수 없습니다.

**Property**

| Name | Description |
| --- | --- |
| color | GraphicsText 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| font | GraphicsText 에서 사용하는 폰트를 설정하는 속성입니다. |
| id | GraphicsText 의 고유 식별자를 설정하는 속성입니다. |
| opacity | GraphicsText 영역의 투명도를 설정하는 속성입니다. |
| parent | GraphicsText 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| text | GraphicsText 에 표시될 텍스트를 설정하는 속성입니다. |
| textAlign | GraphicsText 의 x 속성값 위치를 기준으로 텍스트가 표시되는 가로위치를 설정하는 속성입니다. |
| textwidth | wordWrap 속성값이 "char" 일 때 GraphicsText 에 텍스트가 표시되는 영역의 너비를 설정하는 속성입니다. |
| verticalAlign | GraphicsText 의 y 속성값 위치를 기준으로 텍스트가 표시되는 세로위치를 설정하는 속성입니다. |
| visible | GraphicsText 가 화면에 표시될지 여부를 설정하는 속성입니다. |
| wordWrap | GraphicsText 에 표시되는 텍스트가 textwidth 속성값보다 길 경우 줄바꿈 되도록 설정하는 속성입니다. |
| x | 부모 오브젝트를 기준으로 GraphicsText 가 표시될 x 축 좌표값을 설정하는 속성입니다. |
| y | 부모 오브젝트를 기준으로 GraphicsText 가 표시될 y 축 좌표값을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| destroy | GraphicsText 를 메모리에서 완전히 삭제하는 메소드입니다. |
| getBoundRect | GraphicsText 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| getNextSibling | GraphicsText 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다. |
| getOffsetBoundRect | GraphicsText 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다. |
| getOffsetRect | GraphicsText 가 표시되는 영역정보를 부모 오브젝트 기준으로 반환하는 메소드입니다. |
| getOffsetRegion | GraphicsText 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| getPreviousSibling | GraphicsText 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다. |
| getRect | GraphicsText 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다. |
| getRegion | GraphicsText 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다. |
| isEmptyRect | GraphicsText 에 설정된 텍스트의 존재여부를 반환하는 메소드입니다. |
| isHitTest | 인수로 전달된 좌표위치가 GraphicsText 영역에 포함되는지 여부를 반환하는 메소드입니다. |
| rotate | GraphicsText 에 회전효과를 적용하는 메소드입니다. |
| scale | GraphicsText 에 확대/축소 효과를 적용하는 메소드입니다. |
| setClipRect | GraphicsText 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다. |
| setTransform | GraphicsText 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다. |
| shear | GraphicsText 에 비틀기 효과를 적용하는 메소드입니다. |
| toString | GraphicsText 의 타입을 문자열로 반환하는 메소드입니다. |
| transform | GraphicsText 에 Transform 관련 효과를 적용하는 메소드입니다. |
| translate | GraphicsText 의 위치가 이동되는 효과를 적용하는 메소드입니다. |


---

### 속성 (Properties)

### color

> Components > Component > Graphics > Objects > GraphicsText > Property > color

**Description**

GraphicsText 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsText.color[= strColor]
```

**Setting Syntax**

```javascript
strColor ::= <NamedColor> | <NumericColor>
```
```javascript
var objGText = new nexacro.GraphicsText(100,100);  

objGText.font = "bold 12pt arial, sans-serif"; 
objGText.color = "blue"; objGText.color = "#999999"; 
objGText.color = "rgb(255,0,0)";
```
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- color 속성값을 설정하지 않으면 undefined 가 설정되고 "#000000" 으로 동작합니다.


◆ web runtime environment 제약

- rgba(), hsl(), hsla() 메소드를 속성에 직접 설정할 경우 브라우저 버전에 따라 적용되지 않을 수 있습니다.


---

### font

> Components > Component > Graphics > Objects > GraphicsText > Property > font

**Description**

GraphicsText 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsText.font[= strfont]
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
var objGraphicsText = new nexacro.GraphicsText();  

objGraphicsText.font = "bold 12pt/30px arial, sans-serif"; 
objGraphicsText.color = "blue";
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

### id

> Components > Component > Graphics > Objects > GraphicsText > Property > id

**Description**

GraphicsText 의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsText.id
```

**Setting Syntax**

```javascript
var objGraphicsText = new nexacro.GraphicsText();

this.Graphics00.addChild( "GraphicsText00", objGraphicsText );
```
- **`id`** — GraphicsText 를 구별할 수 있는 유일값을 설정합니다.

**Remark**

-  addChild() 나 insertChild() 메소드를 사용하여 GraphicsText 를 등록할때 오브젝트를 구별하기 위한 고유값입니다.

- 속성명이나 메소드명과 같은 예약어를 설정할 경우 오류가 발생할 수 있습니다.


---

### opacity

> Components > Component > Graphics > Objects > GraphicsText > Property > opacity

**Description**

GraphicsText 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.opacity[= nOpacity]
```

**Setting Syntax**

```javascript
var objGraphicsText = new nexacro.GraphicsText() ;

objGraphicsText.opacity = 0.5;
objGraphicsText.opacity = "0.5";
objGraphicsText.opacity = "50%";
```
- **`nOpacity`** — 0.0 ~ 1.0 사이의 값 또는 0.0% ~ 100.0% 사이의 값을 지정합니다.
0(또는 0%)을 설정하면 완전 투명, 1(또는 100%)을 설정하면 완전 불투명으로 처리됩니다.
1 이상의 값은 1로, 0 이하의 값은 0으로 처리됩니다. 마찬가지로 100% 이상의 값은 100%로, 0% 이하의 값은 0%로 처리됩니다.

Script는 숫자 또는 문자(숫자, 퍼센트 값)로 설정할 수 있습니다.

**Remark**

- opacity 속성값을 설정하지 않으면 undefined 가 설정되고 1 로 동작합니다.

- GraphicsGroup 의 경우 하위 오브젝트에 투명도가 동일하게 적용됩니다.

- 부모와 자식 오브젝트에 각각 opacity 속성이 설정되어 있으면 자식 오브젝트의 투명도는 부모의 투명도에 추가적으로 적용됩니다.
   예를 들어 부모의 opacity 값이 0.5 이고 자식의 opacity 값이 0.4 이면 결과적으로 자식 오브젝트는 0.2 의 투명도가 적용됩니다.


---

### parent

> Components > Component > Graphics > Objects > GraphicsText > Property > parent

**Description**

GraphicsText 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GraphicsText.parent
```

**Remark**

- 일반적으로 addChild() 메소드를 사용하여 GraphicsText 를 추가한 오브젝트가 parent 속성에 설정됩니다.

- GraphicsText 가 어디에도 속해있지 않거나 부모 오브젝트로부터 제거되면 null 값을 갖습니다.


---

### text

> Components > Component > Graphics > Objects > GraphicsText > Property > text

**Description**

GraphicsText 에 표시될 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsText.text[= strText]
```

**Setting Syntax**

```javascript
var objGraphicsText = new nexacro.GraphicsText();  

objGraphicsText.text = "Text";
```
- **`strText`** — GraphicsText 에 표시될 텍스트를 설정합니다.


---

### textAlign

> Components > Component > Graphics > Objects > GraphicsText > Property > textAlign

**Description**

GraphicsText 의 x 속성값 위치를 기준으로 텍스트가 표시되는 가로위치를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsText.textAlign[= enumTextAlign]
```

**Setting Syntax**

```javascript
enumTextAlign ::= 'left' | 'center' | 'right'
```
```javascript
var objGraphicsText = new nexacro.GraphicsText();  

objGraphicsText.x = 100; 
objGraphicsText.y = 100; 
objGraphicsText.textAlign = "left"; 
objGraphicsText.verticalAlign = "top";
```
- **`"left"`** — 텍스트가 x 속성값 위치의 오른쪽에 표시됩니다.
- **`"center"`** — 텍스트가 x 속성값 위치에 가운데 정렬되어 표시됩니다.
- **`"right"`** — 텍스트가 x 속성값 위치의 왼쪽에 표시됩니다.

**Remark**

- textAlign 속성값을 설정하지 않으면 "left" 로 적용됩니다.

- GraphicsText 의 x 속성값이 텍스트 표시의 x 축 기준위치로 처리됩니다.


---

### textwidth

> Components > Component > Graphics > Objects > GraphicsText > Property > textwidth

**Description**

wordWrap 속성값이 "char" 일 때 GraphicsText 에 텍스트가 표시되는 영역의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsText.textwidth[= nTextWidth]
```

**Setting Syntax**

```javascript
var objGraphicsText = new nexacro.GraphicsText();  

objGraphicsText.wordWrap = "char"; 
objGraphicsText.textwidth = 100;
```
- **`nTextWidth`** — 텍스트가 표시되는 영역의 너비를 pixel 단위의 숫자로 설정합니다.

**Remark**

- wordWrap 속성값이 "none" 이면 textwidth 속성값은 무시됩니다.

- wordWrap 속성값이 "char" 일 때 표시할 텍스트의 길이가 textwidth 속성값보다 크면 자동 줄바꿈 처리됩니다.

**See Also**

GraphicsText.wordWrap


---

### verticalAlign

> Components > Component > Graphics > Objects > GraphicsText > Property > verticalAlign

**Description**

GraphicsText 의 y 속성값 위치를 기준으로 텍스트가 표시되는 세로위치를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsText.verticalAlign[= enumVAlign]
```

**Setting Syntax**

```javascript
enumVAlign ::= 'top' | 'middle' | 'bottom'
```
```javascript
var objGraphicsText = new nexacro.GraphicsText();  

objGraphicsText.x = 100; 
objGraphicsText.y = 100; 
objGraphicsText.textAlign = "left"; 
objGraphicsText.verticalAlign = "top";
```
- **`"top"`** — 텍스트가 y 속성값 위치의 아랫쪽에 표시됩니다.
- **`"middle"`** — 텍스트가 y 속성값 위치에 가운데 정렬되어 표시됩니다.
- **`"bottom"`** — 텍스트가 y 속성값 위치의 윗쪽에 표시됩니다.

**Remark**

- verticalAlign 속성값을 설정하지 않으면 "top" 으로 적용됩니다.

- GraphicsText 의 y 속성값이 텍스트 표시의 y 축 기준위치로 처리됩니다.


---

### visible

> Components > Component > Graphics > Objects > GraphicsText > Property > visible

**Description**

GraphicsText 가 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsStock.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
var objGraphicsText = new nexacro.GraphicsText();

objGraphicsText.visible = false;
```
- **`true`** — Graphics 컴포넌트의 redraw() 메소드 수행 시 GraphicsText 를 표시합니다.
- **`false`** — Graphics 컴포넌트의 redraw() 메소드 수행 시 GraphicsText 를 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하면 화면에 즉시 반영되지 않고 Graphics 컴포넌트의 redraw() 메소드가 수행될 때 반영됩니다.

- GraphicsGroup 의 경우 visible 속성을 false 로 설정하면 하위 오브젝트도 함께 화면에 표시되지 않습니다.

- visible 속성에 의해 화면에 GraphicsText 가 표시되지 않아도 오브젝트는 존재하기 때문에 스크립트로 제어가 가능합니다.


---

### wordWrap

> Components > Component > Graphics > Objects > GraphicsText > Property > wordWrap

**Description**

GraphicsText 에 표시되는 텍스트가 textwidth 속성값보다 길 경우 줄바꿈 되도록 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsText.wordWrap[= enumWordwrap]
```

**Setting Syntax**

```javascript
enumWordwrap ::= 'none' | 'char'
```
```javascript
var objGraphicsText = new nexacro.GraphicsText();  

objGraphicsText.wordWrap = "char"; 
objGraphicsText.textwidth = 100;
```
- **`"none"`** — 자동으로 줄바꿈을 수행하지 않습니다.
- **`"char"`** — 표시되는 텍스트가 textwidth 속성값보다 길면 글자 단위로 줄바꿈을 수행합니다.

**Remark**

- wordWrap 속성값을 설정하지 않으면 "none" 으로 적용됩니다.

**See Also**

GraphicsText.textwidth


---

### x

> Components > Component > Graphics > Objects > GraphicsText > Property > x

**Description**

부모 오브젝트를 기준으로 GraphicsText 가 표시될 x 축 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsText.x[= nX]
```

**Setting Syntax**

```javascript
var objGraphicsText = new nexacro.GraphicsText();  

objGraphicsText.x = 200; 
objGraphicsText.y = 200;
```
- **`nX`** — 부모 오브젝트를 기준으로 GraphicsText 가 표시될 x 축 좌표값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- x 속성값을 설정하지 않으면 0 으로 적용됩니다.

- GraphicsText 의 x 속성은 left 를 의미하지 않습니다.
   textAlign, verticalAlign 속성값에 따라 x 속성값을 기준으로 텍스트가 표시될 위치가 결정됩니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsText 의 표시위치가 변경되어도 x 속성은 원본위치값을 유지합니다.

**See Also**

GraphicsText.textAlignGraphicsText.verticalAlign


---

### y

> Components > Component > Graphics > Objects > GraphicsText > Property > y

**Description**

부모 오브젝트를 기준으로 GraphicsText 가 표시될 y 축 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GraphicsText.y[= nY]
```

**Setting Syntax**

```javascript
var objGraphicsText = new nexacro.GraphicsText();  

objGraphicsText.x = 200; 
objGraphicsText.y = 200;
```
- **`nY`** — 부모 오브젝트를 기준으로 GraphicsText 가 표시될 y 축 좌표값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- y 속성값을 설정하지 않으면 0 으로 적용됩니다.

- GraphicsText 의 y 속성은 top 을 의미하지 않습니다.
   textAlign, verticalAlign 속성값에 따라 y 속성값을 기준으로 텍스트가 표시될 위치가 결정됩니다.

- Transform 과 관련된 메소드(scale(), rotate() 등)가 수행되어 GraphicsText 의 표시위치가 변경되어도 y 속성은 원본위치값을 유지합니다.

**See Also**

GraphicsText.textAlignGraphicsText.verticalAlign


---

### 메서드 (Methods)

### destroy

> Components > Component > Graphics > Objects > GraphicsText > Method > destroy

**Description**

GraphicsText 를 메모리에서 완전히 삭제하는 메소드입니다.

**Syntax**

```javascript
GraphicsText.destroy()
```

**Return**

GraphicsText 가 정상적으로 삭제되면 true 를 반환합니다.

GraphicsText 가 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- destroy() 메소드로 GraphicsText 가 삭제되어도 화면에 표시된 오브젝트가 자동으로 사라지지 않습니다.
   Graphics 컴포넌트의 redraw() 메소드를 실행하여야 화면에 변경사항이 반영됩니다.

- GraphicsText 가 하위 오브젝트를 가질 수 있는 경우 하위 오브젝트도 함께 삭제됩니다.


---

### getBoundRect

> Components > Component > Graphics > Objects > GraphicsText > Method > getBoundRect

**Description**

GraphicsText 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsText.getBoundRect( );
```

**Parameters**

var objGraphicsText = this.Graphics00.getObjectByID("GraphicsText00");
var objRect = objGraphicsText.getBoundRect();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다.
strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getBoundRect() 메소드는 GraphicsText 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getBoundRect() 메소드의 반환값으로 GraphicsText 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsText 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getNextSibling

> Components > Component > Graphics > Objects > GraphicsText > Method > getNextSibling

**Description**

GraphicsText 와 부모가 동일한 Graphics 오브젝트 중 다음 순서의 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsText.getNextSibling()
```

**Parameters**

var objGraphicsText = this.Graphics00.getObjectByID("GraphicsText00");
var objNext = objGraphicsText.getNextSibling();

trace( objNext.toString() );

**Return**

부모가 동일한 다음 순서의 Graphics 오브젝트를 반환합니다.

다음 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

**Remark**

- addChild() 메소드로 추가된 순서대로 Graphics 오브젝트가 저장됩니다.

- 부모가 다른 Graphics 오브젝트는 반환되지 않습니다.


---

### getOffsetBoundRect

> Components > Component > Graphics > Objects > GraphicsText > Method > getOffsetBoundRect

**Description**

GraphicsText 가 표시되는 영역정보를 Graphics 부모 오브젝트 기준으로 바깥쪽 외곽선 영역을 포함하여 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsText.getOffsetBoundRect( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsText = objGroup.getObjectByID("GraphicsText00");
var objRect = objGraphicsText.getOffsetBoundRect();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에 바깥쪽 외곽선 영역이 포함됩니다.
strokepen 속성값을 설정하지 않았거나 GraphicsGroup, GraphicsImage, GraphicsText 오브젝트의 경우에는 외곽선 정보가 없으며 반환되는 영역정보에 외곽선 영역이 포함되지 않습니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetBoundRect() 메소드는 GraphicsText 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetBoundRect() 메소드의 반환값으로 GraphicsText 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsText 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getBoundRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getOffsetRect

> Components > Component > Graphics > Objects > GraphicsText > Method > getOffsetRect

**Description**

GraphicsText 가 표시되는 영역정보를 부모 오브젝트 기준으로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsText.getOffsetRect( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsText = objGroup.getObjectByID("GraphicsText00");
var objRect = objGraphicsText.getOffsetRect();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsText 오브젝트의 strokepen 속성값을 설정했더라도 외곽선 영역과 관계없이 GraphicsText 오브젝트의 실제 영역이 반환됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetRect() 메소드는 GraphicsText 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetRect() 메소드의 반환값으로 GraphicsText 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsText 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getOffsetRegion

> Components > Component > Graphics > Objects > GraphicsText > Method > getOffsetRegion

**Description**

GraphicsText 가 표시되는 영역정보를 부모 오브젝트 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsText.getOffsetRegion( );
```

**Parameters**

var objGroup = this.Graphics00.getObjectByID("GraphicsGroup00");
var objGraphicsText = objGroup.getObjectByID("GraphicsText00");
var objRect = objGraphicsText.getOffsetRegion();

trace( "left : " + objRect.left );

**Return**

부모 오브젝트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsText 오브젝트의 strokepen 속성값을 설정했더라도 반환되는 영역정보에는 안쪽 외곽선 영역이 제외됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getOffsetRegion() 메소드는 GraphicsText 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getOffsetRegion() 메소드의 반환값으로 GraphicsText 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsText 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- Graphics 컴포넌트를 기준으로 계산된 영역정보를 얻으려면 getRegion() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getPreviousSibling

> Components > Component > Graphics > Objects > GraphicsText > Method > getPreviousSibling

**Description**

GraphicsText 와 부모가 동일한 Graphics 오브젝트 중 이전 순서의 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsText.getPreviousSibling()
```

**Parameters**

var objGraphicsText = this.Graphics00.getObjectByID("GraphicsText00");
var objPrev = objGraphicsText.getPreviousSibling();

trace( objPrev.toString() );

**Return**

부모가 동일한 이전 순서의 Graphics 오브젝트를 반환합니다.

이전 순서의 Graphics 오브젝트가 없을 경우 null 을 반환합니다.

**Remark**

- addChild() 메소드로 추가된 순서대로 Graphics 오브젝트가 저장됩니다.

- 부모가 다른 Graphics 오브젝트는 반환되지 않습니다.


---

### getRect

> Components > Component > Graphics > Objects > GraphicsText > Method > getRect

**Description**

GraphicsText 의 영역정보를 Graphics 컴포넌트 기준으로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsText.getRect( );
```

**Parameters**

var objGraphicsText = this.Graphics00.getObjectByID("GraphicsText00");
var objRect = objGraphicsText.getRect();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsText 오브젝트의 strokepen 속성값을 설정했더라도 외곽선 영역과 관계없이 GraphicsText 오브젝트의 실제 영역이 반환됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getRect() 메소드는 GraphicsText 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getRect() 메소드의 반환값으로 GraphicsText 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsText 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetRect() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### getRegion

> Components > Component > Graphics > Objects > GraphicsText > Method > getRegion

**Description**

GraphicsText 가 표시되는 영역정보를 Graphics 컴포넌트 기준으로 안쪽 외곽선 영역을 제외하고 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsText.getRegion( );
```

**Parameters**

var objGraphicsText = this.Graphics00.getObjectByID("GraphicsText00");
var objRect = objGraphicsText.getRegion();

trace( "left : " + objRect.left );

**Return**

Graphics 컴포넌트의 left, top 위치를 기준으로 계산된 영역정보가 Rect 오브젝트로 반환됩니다.

GraphicsText 오브젝트의 strokepen 속성값을 설정한 경우 반환되는 영역정보에는 안쪽 외곽선 영역이 제외됩니다.

* Rect 오브젝트는 "left","top","right","bottom","width","height" 속성을 갖습니다.

**Remark**

- getRegion() 메소드는 GraphicsText 의 표시여부와 관계없이 논리적인 영역정보를 반환하는 메소드입니다.
   따라서 getRegion() 메소드의 반환값으로 GraphicsText 의 표시여부를 판단할 수 없으므로 사용에 주의하여야 합니다.

- GraphicsText 에서 Transform 관련 메소드(scale(), rotate() 등)를 실행하면 메소드가 적용된 영역정보를 반환합니다.

- 부모 오브젝트를 기준으로 계산된 영역정보를 얻으려면 getOffsetRegion() 메소드를 사용하여야 합니다.

- GraphicsEllipse, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsRect 오브젝트의 strokepen 속성값은 오브젝트의 실제 영역을 기준으로 안쪽과 바깥쪽에 나누어 적용됩니다.


---

### isEmptyRect

> Components > Component > Graphics > Objects > GraphicsText > Method > isEmptyRect

**Description**

GraphicsText 에 설정된 텍스트의 존재여부를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsText.isEmptyRect()
```

**Parameters**

var objGraphicsText = new nexacro.GraphicsText("ABC");

var bResult = objGraphicsText.isEmptyRect() ;

**Return**

GraphicsText 에 설정된 텍스트가 없으면 true 를 반환합니다.

GraphicsText 에 설정된 텍스트가 있으면 false 를 반환합니다.

**Remark**

- GraphicsText 의 font 속성과 text 속성을 모두 설정하여야 텍스트가 있는것으로 판단합니다.


---

### isHitTest

> Components > Component > Graphics > Objects > GraphicsText > Method > isHitTest

**Description**

인수로 전달된 좌표위치가 GraphicsText 영역에 포함되는지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsText.isHitTest( nX, nY )
```

**Parameters**

```
확인할 위치의 x 좌표값을 pixel 단위의 숫자로 설정합니다.

설정값은 Graphics 컴포넌트를 기준으로 처리됩니다.
```

**Return**

인수로 전달된 좌표위치가 GraphicsText 영역에 포함되면 true 를 반환합니다.

인수로 전달된 좌표위치가 GraphicsText 영역에 포함되지 않으면 false 를 반환합니다.

**Remark**

- 일반적으로 GraphicsText 영역은 getRect() 메소드로 반환되는 영역과 일치합니다.
   getRect() 메소드의 반환값은 GraphicsText 의 상태에 따라 변경될 수 있으므로 isHitTest() 사용에 주의하여야 합니다.

- 인수로 전달된 nX, nY 좌표는 Graphics 컴포넌트의 left, top 을 기준으로 처리됩니다.


---

### rotate

> Components > Component > Graphics > Objects > GraphicsText > Method > rotate

**Description**

GraphicsText 에 회전효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsText.rotate( nAngle [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 모습에서 회전될 각도를 숫자로 설정합니다.

양수로 설정 시 시계방향으로 회전합니다.
음수로 설정 시 반시계방향으로 회전합니다.
```

**Return**

없음

**Remark**

- rotate() 메소드 수행 시 Position 과 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 rotate() 메소드가 적용된 영역정보를 반환합니다.

- rotate() 메소드는 GraphicsText 가 표시되는 위치를 기준으로 수행됩니다.
   따라서 rotate() 메소드를 여러번 수행하면 회전 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 회전효과가 동일하게 적용됩니다.

- GraphicsText 에 부모 오브젝트가 설정되어 있어야 rotate() 메소드가 정상적으로 수행됩니다.
   즉, rotate() 메소드 수행 전에 addChild() 메소드로 GraphicsText 를 등록하여야 합니다.


---

### scale

> Components > Component > Graphics > Objects > GraphicsText > Method > scale

**Description**

GraphicsText 에 확대/축소 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsText.scale( nScaleX, nScaleY [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 크기에서 확대/축소 될 가로 배율을 실수로 설정합니다.

1.0 보다 큰값을 설정하면 GraphicsText 가 확대됩니다.
1.0 보다 작은값을 설정하면 GraphicsText 가 축소됩니다.
```

**Return**

없음

**Remark**

- scale() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 scale() 메소드가 적용된 영역정보를 반환합니다.

- scale() 메소드는 GraphicsText 가 표시되는 크기를 기준으로 수행됩니다.
   따라서 scale() 메소드를 여러번 수행하면 확대/축소 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 확대/축소 효과가 동일하게 적용됩니다.

- GraphicsText 에 부모 오브젝트가 설정되어 있어야 scale() 메소드가 정상적으로 수행됩니다.
   즉, scale() 메소드 수행 전에 addChild() 메소드로 GraphicsText 를 등록하여야 합니다.


---

### setClipRect

> Components > Component > Graphics > Objects > GraphicsText > Method > setClipRect

**Description**

GraphicsText 의 일부 영역만 표시되게 Clipping 할 영역의 좌표를 설정하는 메소드입니다.

**Syntax**

```javascript
GraphicsText.setClipRect( nX, nY, nWidth, nHeight );
```

**Parameters**

```
Clipping 할 영역의 x 좌표를 숫자로 설정합니다.

설정값은 GraphicsText 의 x 속성값 위치를 0 으로 가정하고 처리됩니다.
```

**Return**

없음

**Remark**

- GraphicsText 영역에서 Clipping 영역으로 설정된 부분만 화면에 표시됩니다.
   Transform 과 관련된 메소드(scale(), rotate() 등)가 적용된 경우 GraphicsText 의 원본영역을 기준으로 Clipping 됩니다.

- "setClipRect( null );" 형태로 파라미터에 null 설정 시 Clipping 영역 설정이 취소됩니다.

- Clipping 이 적용되어도 GraphicsText 의 Position 관련 속성값은 변경되지 않습니다.


---

### setTransform

> Components > Component > Graphics > Objects > GraphicsText > Method > setTransform

**Description**

GraphicsText 의 원본 위치를 기준으로 Transform 관련 효과를 연속적으로 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsText.setTransform( strMethod );
```

**Parameters**

```
GraphicsText 에 적용할 Transform 관련 메소드를 "," 로 구분하여 설정합니다.
translate(), scale(), rotate(), shear() 메소드를 사용할 수 있습니다.
null 값 설정 시 transform 효과가 지정되지 않은 상태로 초기화합니다.
```

**Return**

없음

**Remark**

- setTransform() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 setTransform() 메소드가 적용된 영역정보를 반환합니다.

- setTransform() 메소드는 GraphicsText 의 원본 위치를 기준으로 수행됩니다.
   따라서 setTransform() 메소드를 여러번 수행해도 효과가 누적되어 적용되지 않습니다.

- GraphicsGroup 의 경우 하위 오브젝트에 효과가 동일하게 적용됩니다.

- GraphicsText 에 부모 오브젝트가 설정되어 있어야 setTransform() 메소드가 정상적으로 수행됩니다.
   즉, setTransform() 메소드 수행 전에 addChild() 메소드로 GraphicsText 를 등록하여야 합니다.

- 메소드 실행 시 strMethod 파라미터 값을 null로 설정하면 transform 효과가 지정되지 않은 상태로 초기화합니다.
  setTransform 메소드로 설정한 transform 효과 뿐 아니라 translate, scale, rotate, shear 메소드로 개별 설정한 상태도 초기화합니다.


---

### shear

> Components > Component > Graphics > Objects > GraphicsText > Method > shear

**Description**

GraphicsText 에 비틀기 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsText.shear( nRadianX, nRadianY [, nCenterX, nCenterY] );
```

**Parameters**

```
현재 모습에서 x 축 기준으로 비틀어질 각도를 라디안값으로 설정합니다.
```

**Return**

없음

**Remark**

- shear() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 shear() 메소드가 적용된 영역정보를 반환합니다.

- shear() 메소드는 GraphicsText 가 표시되는 모습을 기준으로 수행됩니다.
   따라서 shear() 메소드를 여러번 수행하면 비틀기 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 비틀기 효과가 동일하게 적용됩니다.

- GraphicsText 에 부모 오브젝트가 설정되어 있어야 shear() 메소드가 정상적으로 수행됩니다.
   즉, shear() 메소드 수행 전에 addChild() 메소드로 GraphicsText 를 등록하여야 합니다.


---

### toString

> Components > Component > Graphics > Objects > GraphicsText > Method > toString

**Description**

GraphicsText 의 타입을 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
GraphicsText.toString();
```

**Return**

일반적으로 "[object GraphicsText]" 형태의 문자열을 반환합니다.


---

### transform

> Components > Component > Graphics > Objects > GraphicsText > Method > transform

**Description**

GraphicsText 에 Transform 관련 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsText.transform( nScaleX, nShearX, nShearY, nScaleY, nTransX, nTransY );
```

**Parameters**

```
현재 크기에서 확대/축소 될 가로 배율을 실수로 설정합니다.

1.0 보다 큰값을 설정하면 GraphicsText 가 확대됩니다.
1.0 보다 작은값을 설정하면 GraphicsText 가 축소됩니다.
```

**Return**

없음

**Remark**

- transform() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 transform() 메소드가 적용된 영역정보를 반환합니다.

- transform() 메소드는 GraphicsText 가 표시되는 모습을 기준으로 수행됩니다.
   따라서 transform() 메소드를 여러번 수행하면 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 효과가 동일하게 적용됩니다.

- GraphicsText 에 부모 오브젝트가 설정되어 있어야 transform() 메소드가 정상적으로 수행됩니다.
   즉, transform() 메소드 수행 전에 addChild() 메소드로 GraphicsText 를 등록하여야 합니다.


---

### translate

> Components > Component > Graphics > Objects > GraphicsText > Method > translate

**Description**

GraphicsText 의 위치가 이동되는 효과를 적용하는 메소드입니다.

**Syntax**

```javascript
GraphicsText.translate( nTransX, nTransY );
```

**Parameters**

```
현재 위치에서 x 축 방향으로 이동 할 거리를 pixel 단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- translate() 메소드 수행 시 위치와 관련된 속성(x, y 등)은 변경되지 않습니다.
   영역정보를 반환하는 getRect() 와 같은 메소드는 translate() 메소드가 적용된 영역정보를 반환합니다.

- translate() 메소드는 GraphicsText 가 표시되는 위치를 기준으로 수행됩니다.
   따라서 translate() 메소드를 여러번 수행하면 이동 효과가 누적되어 적용됩니다.

- GraphicsGroup 의 경우 하위 오브젝트에 이동 효과가 동일하게 적용됩니다.

- GraphicsText 에 부모 오브젝트가 설정되어 있어야 translate() 메소드가 정상적으로 수행됩니다.
   즉, translate() 메소드 수행 전에 addChild() 메소드로 GraphicsText 를 등록하여야 합니다.


---
