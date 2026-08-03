# nexacroN V24 — Frames

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 535개

---

## Frames

### Frames

> Frames

**Description**

Frame 은 화면을 구성하는 기본 단위로써 MainFrame 내부에 각 Frame 들을 배치하여 원하는 화면을 구성할 수 있도록 합니다.

**Remark**

- MainFrame 은 Frame 구조에서 최상단 Frame 에 해당하며 종류에 관계없이 한개의 Frame 을 가질 수 있습니다.

- FrameSet, HFrameSet, VFrameSet, TileFrameSet  은 MainFrame 을 제외하고 한 개 이상의 Frame 을 가질 수 있습니다.
  각 Frame 은 다른 Frame 을 하위에 가질 수 있으며 중첩하여 Frame 을 구성할 수 있습니다.

- ChildFrame 은 Frame 구조에서 마지막 Frame 에 해당하며 한 개의 Form 만 가질 수 있습니다.


---

## Frames > ChildFrame

### ChildFrame

> Frames > ChildFrame

**Description**

ChildFrame 은 MainFrame, FrameSet, HFrameSet, VFrameSet, TileFrameSet 하위에 올 수 있는 Frame 입니다.

Form 정보를 formurl 속성으로 갖고 있어 해당 Form의 화면을 로딩하여 보여줍니다.
기본적으로 Form이 로딩될 수 있는 기본 단위 화면입니다.

**Structure**



**Property**

| Name | Description |
| --- | --- |
| all | ChildFrame 이 포함하고 있는 Frame 를 갖는 속성입니다. |
| autosize | ChildFrame 이 화면에 표시될 때 formurl 속성에 설정된 Form 의 크기에 맞춰질 지 설정하는 속성입니다. |
| background | ChildFrame 의 배경 영역을 설정하는 속성입니다. |
| border-radius | ChildFrame 의 모서리 모양을 설정하는 속성입니다. |
| bottom | ChildFrame 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다. |
| color | ChildFrame 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| cssclass | ChildFrame 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다. |
| cursor | ChildFrame 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| dragmovetype | ChildFrame 을 드래그로 이동시킬 때 드래그가 가능한 영역을 설정하는 속성입니다. |
| enable | ChildFrame 의 사용가능 여부를 설정하는 속성입니다. |
| enableevent | ChildFrame 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다. |
| font | ChildFrame 에서 사용하는 폰트를 설정하는 속성입니다. |
| form | ChildFrame 에 속한 Form 의 오브젝트를 갖는 읽기전용 속성입니다. |
| formurl | ChildFrame 에 속할 Form 의 위치정보를 설정하는 속성입니다. |
| height | ChildFrame 을(를) 표시하기 위한 높이를 설정하는 속성입니다. |
| hotkey | ChildFrame 의 기본 액션을 수행하기 위한 단축키를 설정하는 속성입니다. |
| id | ChildFrame의 고유 식별자를 설정하는 속성입니다. |
| layered | open() 메소드를 사용하여 ChildFrame 을 생성할 때 배경 윈도우를 투명으로 설정하는 속성입니다. |
| left | ChildFrame 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다. |
| name | ChildFrame 의 이름을 설정하는 속성입니다. |
| -nexa-border | ChildFrame 의 테두리를 설정하는 속성입니다. |
| -nexa-edge | ChildFrame 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-rtl-background-image | ChildFrame 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| -nexa-rtl-edge-image | ChildFrame 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| opacity | ChildFrame 영역의 투명도를 설정하는 속성입니다. |
| openalign | showModal() 메소드로 ChildFrame 을 팝업창으로 표시할 때 위치를 지정하는 속성입니다. |
| openstatus | ChildFrame 의 창 크기를 설정하는 속성입니다. |
| overlaycolor | ChildFrame 이 Modal 로 띄워진 경우에 부모 Frame 전체에 적용될 색을 설정하는 속성입니다. |
| progressbardirection | ChildFrame 의 StatusBar 에 표시되는 ProgressBar 의 진행방향을 설정하는 속성입니다. |
| progressbargap | ChildFrame 의 StatusBar 에 표시되는 ProgressBar 의 오른쪽 공간 크기를 설정하는 설정하는 속성입니다. |
| progressbarsize | ChildFrame 의 StatusBar 에 표시되는 ProgressBar 의 너비를 설정하는 속성입니다. |
| progressbarsmooth | MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 진행바가 연속된 형태로 표시될 지 설정하는 속성입니다. |
| resizable | ChildFrame 의 리사이즈 가능 여부를 설정하는 속성입니다. |
| right | ChildFrame 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다. |
| rtl | ChildFrame 에서 내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다. |
| showcascadestatustext | ChildFrame 의 StatusBar 에 하위 Frame 과 Form 의 statustext 속성값을 모두 표시할 지 설정하는 속성입니다. |
| showcascadetitletext | ChildFrame 의 TitleBar 에 하위 Frame 과 Form 의 titletext 속성값을 모두 표시할 지 설정하는 속성입니다. |
| showontaskbar | open() 메소드로 ChildFrame 이 Modeless로 표시될 때 윈도우의 TaskBar 에 표시할 지 여부를 설정하는 속성입니다. |
| showstatusbar | ChildFrame 에 StatusBar 표시 여부를 설정하는 속성입니다. |
| showtitlebar | ChildFrame 의 TitleBar 표시 여부를 설정하는 속성입니다. |
| showtitleicon | ChildFrame 의 타이틀바에 아이콘 표시 여부를 설정하는 속성입니다. |
| statusbar | ChildFrame 의 상태바 오브젝트를 갖는 속성입니다. |
| statusbarheight | ChildFrame 의 StatusBar 높이를 설정하는 속성입니다. |
| statustext | ChildFrame 의 StatusBar 에 표시될 텍스트를 설정하는 속성입니다. |
| titlebar | ChildFrame 의 타이틀바 오브젝트를 갖는 속성입니다. |
| titlebarbuttongap | ChildFrame 의 TitleBar 에 표시되는 시스템 버튼의 간격을 설정하는 속성입니다. |
| titlebarbuttonsize | ChildFrame 의 타이틀바에 표시되는 시스템 버튼의 크기을 설정하는 속성입니다. |
| titlebarheight | ChildFrame 의 TitleBar 높이를 설정하는 속성입니다. |
| titletext | ChildFrame 의 TitleBar 에 표시될 텍스트를 설정하는 속성입니다. |
| top | ChildFrame 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다. |
| topmost | 별도의 Window 를 가진 ChildFrame 을 최상위에 표시할지 설정하는 속성입니다. |
| visible | ChildFrame 이(가) 화면에 표시될지 여부를 설정하는 속성입니다. |
| width | ChildFrame 을(를) 표시하기 위한 너비를 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addEventHandler | ChildFrame 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 ChildFrame 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| alert | ChildFrame 의 경고 대화상자를 표시하는 메소드입니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| confirm | ChildFrame 의 선택 대화상자를 표시하는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 ChildFrame 을(를) 삭제하는 메소드입니다. |
| findEventHandler | ChildFrame 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getEventHandler | ChildFrame 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| getForm | ChildFrame 이 갖고 있는 Form 의 오브젝트를 반환하는 메소드입니다. |
| getNativeHandle | ChildFrame이 속한 윈도우 핸들(HWND)값을 반환하는 메소드입니다. |
| getOffsetBottom | 부모 Frame 의 Top 위치를 기준으로 ChildFrame 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetHeight | ChildFrame 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetLeft | 부모 Frame 의 Left 위치를 기준으로 ChildFrame 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetRight | 부모 Frame 의 Left 위치를 기준으로 ChildFrame 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetTop | 부모 Frame 의 Top 위치를 기준으로 ChildFrame 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetWidth | ChildFrame 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOwnerFrame | ChildFrame 이 소속된 부모 Frame 을 반환하는 메소드입니다. |
| init | 스크립트로 ChildFrame 을 동적 생성한 후에 초기화하는 메소드입니다. |
| insertEventHandler | ChildFrame 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| move | ChildFrame 의 위치와 크기를 변경하는 메소드입니다. |
| removeEventHandler | ChildFrame 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | ChildFrame 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| setEventHandler | ChildFrame 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | ChildFrame 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| setFocus | ChildFrame 을 활성화하고 포커스를 주는 메소드입니다. |
| setOffsetBottom | ChildFrame 이 FrameSet 의 하위에 속해 있을 때 ChidFrame 의 bottom 을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetHeight | ChildFrame 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetLeft | ChildFrame 이 FrameSet 의 하위에 속해 있을 때 ChidFrame 의 left 를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetRight | ChildFrame 이 FrameSet 의 하위에 속해 있을 때 ChidFrame 의 right 를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetTop | ChildFrame 이 FrameSet 의 하위에 속해 있을 때 ChidFrame 의 top 을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetWidth | ChildFrame 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| show | 스크립트로 동적 생성한 ChildFrame 을 화면에 표시하는 메소드입니다. |
| showModal | 동적으로 생성한 ChildFrame 을 Modal 형태로 표시하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onactivate | ChildFrame 이 활성화 되었을 때 발생하는 이벤트입니다. |
| onbeforeclose | ChildFrame 이 종료되기 전에 발생하는 이벤트입니다. |
| onclose | ChildFrame 이 종료될 때 발생하는 이벤트입니다. |
| ondeactivate | ChildFrame 이 비활성화 되었을 때 발생하는 이벤트입니다. |
| onmove | ChildFrame 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| onorientationchange | 모바일 기기의 화면 방향이 변경되었을 때 발생하는 이벤트입니다. |
| onsize | ChildFrame 의 크기가 변경됐을 때 발생하는 이벤트입니다. |
| onsyscommand | ChildFrame 에 시스템명령(Command) 메시지가 들어왔을 때 발생하는 이벤트입니다. |

**Status**

컴포넌트가 비활성화된 상태

**Control**

| Name | TypeName |
| --- | --- |
| titlebar | nexacro.TitleBarControl |
| statusbar | nexacro.StatusBarControl |


---

### 속성 (Properties)

### -nexa-border

> Frames > ChildFrame > Property > -nexa-border

**Description**

ChildFrame 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.border[= strborder]
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
this.ChildFrame00.border = "1px solid #999999";
this.ChildFrame00.border = "1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999";
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

> Frames > ChildFrame > Property > -nexa-edge

**Description**

ChildFrame 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.edge[= stredge]
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
this.ChildFrame00.edge = "URL('./images/border.png')" 5px 5px;
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

- ChildFrame 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.


◆ WRE 제약

- <fixedwidth>,<fixedheight> 값이 이미지 사이즈의 1/2 을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-rtl-background-image

> Frames > ChildFrame > Property > -nexa-rtl-background-image

**Description**

ChildFrame 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.-nexa-rtl-background-image
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

> Frames > ChildFrame > Property > -nexa-rtl-edge-image

**Description**

ChildFrame 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.-nexa-rtl-edge-image
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

### all

> Frames > ChildFrame > Property > all

**Description**

ChildFrame 이 포함하고 있는 Frame 를 갖는 속성입니다.

**Syntax**

```javascript
ChildFrame.all
```

**Setting Syntax**

```javascript
var childframe= Childframe.all[0];
```

**Remark**

- showModal() 메소드 호출시 ChildFrame을 parent를 설정했다면 해당 목록이 생성됩니다.


---

### autosize

> Frames > ChildFrame > Property > autosize

**Description**

ChildFrame 이 화면에 표시될 때 formurl 속성에 설정된 Form 의 크기에 맞춰질 지 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.autosize[= bAutoSize]
```

**Setting Syntax**

```javascript
bAutoSize ::= 'true' | 'false'
```
```javascript
var objFrame = new ChildFrame();

objFrame.init("modal00", 0, 0, 500, 500); objFrame.formurl = "Base::Test00.xfdl";
objFrame.autosize = false;

var vRtn = objFrame.showModal("modal00", this.getOwnerFrame());
```
- **`true`** — ChildFrame 의 formurl 속성에 설정된 Form 의 크기에 맞게 ChildFrame 의 크기를 설정합니다.

ChildFrame 의 최종 크기는 Form 크기에 ChildFrame 의 TitleBar, StatusBar, Border 등의 크기를 더해서 결정됩니다.
- **`false`** — ChildFrame 의 width, height 속성에 설정된 값에 맞게 ChildFrame 의 크기를 설정합니다.

ChildFrame 의 최종 크기는 width, height 속성값과 동일하며 TitleBar, StatusBar, Border 등이 최종 크기 안에 포함됩니다.

**Remark**

- autosize 속성값을 설정하지 않으면 true 로 적용됩니다.

- autosize 속성은 showModal() 과 같은 메소드로 ChildFrame 을 동적으로 화면에 표시할 때 설정하는 속성입니다.
   ChildFrame 이 화면에 표시되기 전에 설정하여야 하며 화면에 표시된 후에 값을 변경하는 것은 의미가 없습니다.


---

### background

> Frames > ChildFrame > Property > background

**Description**

ChildFrame 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.background[= strbackground]
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
this.ChildFrame00.background = "#ffffaa";
this.ChildFrame00.background = ""URL('./images/smiley.gif')" no-repeat center center #ffffaa";
this.ChildFrame00.background = ""URL('./images/smiley.gif')" no-repeat center center /auto #ffffaa";
this.ChildFrame00.background = ""URL('./images/smiley.gif')" no-repeat center center /15px 15% #ffffaa";
this.ChildFrame00.background = "linear-gradient( red , blue , yellow )";
this.ChildFrame00.background = "linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0))";
this.ChildFrame00.background = ""URL('./images/smiley.gif')" border-box border-box #ffffaa";
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

"left" 설정 시 ChildFrame 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 ChildFrame 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 ChildFrame 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 ChildFrame 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 ChildFrame 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 ChildFrame 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
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

0 보다 작거나 100 보다 큰 값을 설정 시 ChildFrame 의 영역을 벗어난 가상의 위치로 적용됩니다.

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
예를 들어 <angle> 값이 "to left" 이면 ChildFrame 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 ChildFrame 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

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

0 보다 작거나 100 보다 큰 값을 설정 시 ChildFrame 의 영역을 벗어난 가상의 위치로 적용됩니다.
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
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 ChildFrame 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

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

> Frames > ChildFrame > Property > border-radius

**Description**

ChildFrame 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.borderRadius[= strborderradius]
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
this.ChildFrame00.borderRadius = "10px";
this.ChildFrame00.borderRadius = "5px 6px 10px / 5px 10px";
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

> Frames > ChildFrame > Property > bottom

**Description**

ChildFrame 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.bottom[= nBottom]
```

**Setting Syntax**

```javascript
nBottom ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — ChildFrame 의 하단 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### color

> Frames > ChildFrame > Property > color

**Description**

ChildFrame 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.color[= strcolor]
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
this.ChildFrame00.color = "#999999";
this.ChildFrame00.color = "rgb(255,0,0)";
this.ChildFrame00.color = "red";
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

> Frames > ChildFrame > Property > cssclass

**Description**

ChildFrame 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.cssclass[= strcssclass]
```

**Setting Syntax**

```javascript
strcssclass ::= <ClassName> [ , &ltClassName> ]*
```
```javascript
var objCFrame = this.getOwnerFrame();

objCFrame.cssclass = "TestClass";
objCFrame.cssclass = "TestClass,TestClass2";
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

> Frames > ChildFrame > Property > cursor

**Description**

ChildFrame 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.cursor[= strCursor]
```

**Setting Syntax**

```javascript
strCursor ::= 'none' | 'auto' | 'default' | 'copy' | 'crosshair' | 'help' | 'move' | 'not-allowed' | 'pointer' | 'progress' | 'text' | 'wait' | 'ew-resize' | 'e-resize' | 'w-resize' | 'ns-resize' | 'n-resize' | 's-resize' | 'nesw-resize' | 'ne-resize' | 'sw-resize' | 'nwse-resize' | 'nw-resize' | 'se-resize'
```
```javascript
* XCSS
cursor : default;

* Script ( normal property )
this.ChildFrame00.cursor = "default";
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

### dragmovetype

> Frames > ChildFrame > Property > dragmovetype

**Description**

ChildFrame 을 드래그로 이동시킬 때 드래그가 가능한 영역을 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.dragmovetype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'normal' | 'all"
```
```javascript
ChildFraem00.dragmovetype = "none";
```
- **`"none"`** — 드래그로 ChildFrame 을 이동시킬 수 없습니다.
- **`"normal"`** — TitleBar 가 있는 경우 TitleBar를 드래그 하면 ChildFrame 이 이동합니다.

TitleBar 가 없는 경우 Form 영역을 드래그 하면 ChildFrame 이 이동합니다.
- **`"all"`** — TitleBar 와 Form 영역에서 드래그 할 경우 ChildFrame 이 이동합니다.

**Remark**

- dragmovetype 속성값을 설정하지 않으면 "normal"로 적용됩니다.


◆ Mobile 제약

- 모바일 환경에서 Form 영역의 드래그는 스크롤 액션과 구별할 수 없어 지원하지 않습니다.
   따라서, 모바일 환경은 TitleBar 영역의 드래그만 가능합니다.


---

### enable

> Frames > ChildFrame > Property > enable

**Description**

ChildFrame 의 사용가능 여부를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.enable[= benable]
```

**Setting Syntax**

```javascript
benable ::= 'true' | 'false'
```
```javascript
this.ChildFrame00.enable = true; 
this.ChildFrame00.enable = false;
```
- **`true`** — ChildFrame 을(를) 사용할 수 있게 설정합니다.
- **`false`** — ChildFrame 을(를) 사용할 수 없게 설정합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "disabled" Status 가 적용됩니다.

**Remark**

- enable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enable 속성값이 false 이면 컴포넌트가 화면에 표시되지만 포커스나 입력을 받을 수 없습니다.

- Div 와 같은 컨테이너 컴포넌트의 enable 속성값을 false 로 설정하면 자식 컴포넌트도 모두 Disable 됩니다.


---

### enableevent

> Frames > ChildFrame > Property > enableevent

**Description**

ChildFrame 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.enableevent[= bEvent]
```

**Setting Syntax**

```javascript
bEvent ::= 'true' | 'false'
```
```javascript
this.ChildFrame00.enableevent = true;  

this.ChildFrame00.enableevent = false;
```
- **`true`** — ChildFrame 에서 이벤트가 발생하도록 설정합니다.
- **`false`** — ChildFrame 에서 이벤트가 발생하지 않도록 설정합니다.

**Remark**

- enableevent 속성을 false 로 설정하면 이벤트 발생으로 인한 처리속도 지연과 화면 깜빡임을 방지할 수 있습니다.


---

### font

> Frames > ChildFrame > Property > font

**Description**

ChildFrame 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.font[= strfont]
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
this.ChildFrame00.font = "bold 12pt/30px arial, sans-serif";
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

> Frames > ChildFrame > Property > form

**Description**

ChildFrame 에 속한 Form 의 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ChildFrame.form
```

**Remark**

- formurl 속성에 정의된 Form의 변수, 함수, 컴포넌트에 접근할 때 form 속성을 사용하여야 합니다.


---

### formurl

> Frames > ChildFrame > Property > formurl

**Description**

ChildFrame 에 속할 Form 의 위치정보를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.formurl[= strFormurl]
```

**Setting Syntax**

```javascript
strFormurl ::= <absolute-url> | <relative-url>
```
```javascript
ChildFrame00.formurl = "Base::Form01.xfdl";
```
- **`<absolute-url>`** — 웹에 Generate 된 파일을 "http://경로/폼명", "https://경로/폼명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 하고, Form이 Generate 되어 있어야 합니다. 
Cross Domain 상황이면 사용에 제한이 있습니다.
- **`<relative-url>`** — TypeDefinition 영역의 Services 에 정의된 Prefix를 사용한 형식으로 설정합니다.
현재 Form의 위치를 기준으로 한 상대경로를 사용하여 설정합니다.


---

### height

> Frames > ChildFrame > Property > height

**Description**

ChildFrame 을(를) 표시하기 위한 높이를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.height[= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — ChildFrame 의 높이를 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 높이값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 높이값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### hotkey

> Frames > ChildFrame > Property > hotkey

**Description**

ChildFrame 의 기본 액션을 수행하기 위한 단축키를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.hotkey[= strHotkey]
```

**Setting Syntax**

```javascript
this.ChildFrame00.hotkey = "G"; 
this.ChildFrame00.hotkey = "CTRL+A"; 
this.ChildFrame00.hotkey = "CTRL+ALT+X";
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

> Frames > ChildFrame > Property > id

**Description**

ChildFrame의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.id
```

**Setting Syntax**

- **`id`** — ChildFrame를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### layered

> Frames > ChildFrame > Property > layered

**Description**

open() 메소드를 사용하여 ChildFrame 을 생성할 때 배경 윈도우를 투명으로 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.layered[= bLayered]
```

**Setting Syntax**

```javascript
bLayered ::= 'true' | 'false'
```
- **`"true"`** — ChildFrame 의 배경이 투명 윈도우로 표시됩니다.

ChildFrame 의 background 속성값이 "transparent" 로 자동 변경됩니다.
- **`"false"`** — ChildFrame 의 배경이 불투명 윈도우로 표시됩니다.

**Remark**

- open() 메소드를 사용하여 ChildFrame 을 Widget 형태로 실행할 때 투명 배경을 설정하기 위해 사용하는 속성입니다.

- open() 메소드에서 layered 속성값을 설정하지 않으면 "false" 로 적용됩니다.

- ChildFrame 이 생성된 후 변경이 불가능한 속성입니다.

**See Also**

NexacroAPI.open


---

### left

> Frames > ChildFrame > Property > left

**Description**

ChildFrame 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.left [=nLeft]
```

**Setting Syntax**

```javascript
nLeft ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — ChildFrame 의 좌측 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### name

> Frames > ChildFrame > Property > name

**Description**

ChildFrame 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### opacity

> Frames > ChildFrame > Property > opacity

**Description**

ChildFrame 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.opacity[= stropacity]
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8;
opacity : 80%;

* Script ( normal property )
this.ChildFrame00.opacity = "0.8";
this.ChildFrame00.opacity = 0.8;
this.ChildFrame00.opacity = "80%";
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

### openalign

> Frames > ChildFrame > Property > openalign

**Description**

showModal() 메소드로 ChildFrame 을 팝업창으로 표시할 때 위치를 지정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.openalign[= strAlign]
```

**Setting Syntax**

```javascript
strAlign ::= [<hAlign>] [<vAlign>]

<hAlign> ::= 'left' | 'center' | 'right'
<vAlign> ::= 'top' | 'middle' | 'bottom'
```
- **`<hAlign>`** — 팝업창이 표시될 가로 위치를 설정합니다.

"left" 설정 시 상위 Frame의 왼쪽에 정렬되어 표시됩니다.
"center" 설정 시 상위 Frame의 중앙에 정렬되어 표시됩니다.
"right" 설정 시 상위 Frame의 오른쪽에 정렬되어 표시됩니다.
- **`<vAlign>`** — 팝업창이 표시될 세로 위치를 설정합니다.

"top" 설정 시 상위 Frame의 윗쪽에 정렬되어 표시됩니다.
"middle" 설정 시 상위 Frame의 중앙에 정렬되어 표시됩니다.
"bottom" 설정 시 상위 Frame의 아랫쪽에 정렬되어 표시됩니다.

**Remark**

- openalign 속성값을 설정하지 않으면 Position 관련 속성값에 맞게 표시되는 위치가 결정됩니다.

- <hAlign> 값과 <vAlign> 값은 공백문자로 구분하여 설정합니다.


---

### openstatus

> Frames > ChildFrame > Property > openstatus

**Description**

ChildFrame 의 창 크기를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.openstatus[= stropenstatus]
```

**Setting Syntax**

```javascript
stropenstatus ::= 'normal' | 'minimize' | 'maximize'
```
```javascript
this.ChildFrame00.openstatus = "maximize";
```
- **`"normal"`** — 사용자가 설정한 창 크기를 유지합니다.
- **`"minimize"`** — ChildFrame 의 창 크기를 최소화 합니다.
- **`"maximize"`** — ChildFrame 의 창 크기를 최대화 합니다.


---

### overlaycolor

> Frames > ChildFrame > Property > overlaycolor

**Description**

ChildFrame 이 Modal 로 띄워진 경우에 부모 Frame 전체에 적용될 색을 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.overlaycolor[= strcolor]
```

**Setting Syntax**

```javascript
strcolor ::= <NamedColor> | <NumericColor>
```
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- ChildFrame 이 Modal 로 표시되면 부모 Frame 을 사용할 수 없다는 의미로 오버레이색을 설정하게 됩니다.


---

### progressbardirection

> Frames > ChildFrame > Property > progressbardirection

**Description**

ChildFrame 의 StatusBar 에 표시되는 ProgressBar 의 진행방향을 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.progressbardirection[= enumDirection]
```

**Setting Syntax**

```javascript
enumDirection ::= 'forward' | 'backward'
```
- **`"forward"`** — ProgressBar 의 진행바가 왼쪽에서 오른쪽으로 증가합니다.
- **`"backward"`** — ProgressBar 의 진행바가 오른쪽에서 왼쪽으로 증가합니다.

**Remark**

- direction 속성값을 설정하지 않으면 "forward"로 적용됩니다.

- 진행중인 통신 상태는 StatusBar 의 ProgressBar 를 통해 확인할 수 있습니다.


---

### progressbargap

> Frames > ChildFrame > Property > progressbargap

**Description**

ChildFrame 의 StatusBar 에 표시되는 ProgressBar 의 오른쪽 공간 크기를 설정하는 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.progressbargap[= nSize]
```

**Setting Syntax**

- **`nSize`** — ProgressBar 의 오른쪽 공간 크기를 pixel 단위로 설정합니다.


---

### progressbarsize

> Frames > ChildFrame > Property > progressbarsize

**Description**

ChildFrame 의 StatusBar 에 표시되는 ProgressBar 의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.progressbarsize[= nSize]
```

**Setting Syntax**

- **`nSize`** — ProgressBar 의 너비를 pixel 단위로 설정합니다.


---

### progressbarsmooth

> Frames > ChildFrame > Property > progressbarsmooth

**Description**

MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 진행바가 연속된 형태로 표시될 지 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.progressbarsmooth[= bSmooth]
```

**Setting Syntax**

```javascript
bSmooth ::= 'true' | 'false'
```
- **`"true"`** — 진행바가 끊어진 부분 없이 연속된 모양으로 표시됩니다.
- **`"false"`** — 진행바가 블럭형태로 표시됩니다.


---

### resizable

> Frames > ChildFrame > Property > resizable

**Description**

ChildFrame 의 리사이즈 가능 여부를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.resizable[= bResizable]
```

**Setting Syntax**

```javascript
bResizable ::= 'true' | 'false'
```
- **`true`** — ChildFrame 의 크기 변경이 가능합니다.
- **`false`** — ChildFrame 의 크기 변경이 불가능합니다.

**Remark**

- showModal() 메소드를 사용하여 ChildFrame 이 표시될 경우 resizable 속성값을 설정하지 않으면 false 로 적용됩니다.

- Frame 의 내부에 ChildFrame 이 표시될 경우 resizable 속성값을 설정하지 않으면 true 로 적용됩니다.


◆ web runtime environment 제약

- web runtime environment 에서 open() 메소드 사용하여 ChildFrame 을 표시할 경우 resizable 속성값은 항상 true 로 적용됩니다.


---

### right

> Frames > ChildFrame > Property > right

**Description**

ChildFrame 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.right [=nRight]
```

**Setting Syntax**

```javascript
nRight ::= <nVal>['px' | '%']
```
- **`<nVal>`** — ChildFrame 의 우측 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### rtl

> Frames > ChildFrame > Property > rtl

**Description**

ChildFrame 에서 내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.rtl
```

**Setting Syntax**

```javascript
bRtl ::= undefined | 'true' | 'false'
```
```javascript
var vRtl = this.ChildFrame00.rtl;
```
- **`undefined`** — undefined 설정 시 상위 컴포넌트의 rtl 속성값이 적용됩니다.

사용자가 rtl 속성값을 설정하지 않거나 삭제했을 경우 undefined 가 설정됩니다.
- **`true`** — ChildFrame 의 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 오른쪽으로 설정합니다.
ChildFrame 의 내부 좌표계의 기준을 오른쪽으로 설정합니다.
ChildFrame 의 텍스트 표시 기준을 오른쪽으로 설정합니다.
수직스크롤바가 있을 경우 왼쪽에 표시됩니다.
- **`false`** — ChildFrame 의 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 왼쪽으로 설정합니다.
ChildFrame 의 내부 좌표계의 기준을 왼쪽으로 설정합니다.
ChildFrame 의 텍스트 표시 기준을 왼쪽으로 설정합니다.
수직스크롤바가 있을 경우 오른쪽에 표시됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 아랍권 같이 화면의 표시기준이 오른쪽인 환경에서 컨텐츠의 표시 기준을 변경하기 위해 설정하는 속성입니다.

- ChildFrame 부터 Environment 까지 상위의 모든 rtl 속성값이 undefined 이면
   Environment 의 locale 속성에 설정된 국가 및 언어 설정값을 기준으로 rtl 속성이 적용됩니다.
   Environment 의 locale 속성값을 설정하지 않았을 경우 시스템의 국가 및 언어 설정값이 적용됩니다.


---

### showcascadestatustext

> Frames > ChildFrame > Property > showcascadestatustext

**Description**

ChildFrame 의 StatusBar 에 하위 Frame 과 Form 의 statustext 속성값을 모두 표시할 지 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.showcascadestatustext[= bShow]
```

**Setting Syntax**

```javascript
bShow ::= 'true' | 'false'
```
- **`"true"`** — 하위 Frame 과 Form 의 statustext 속성값이 "-" 구분자를 사용하여 연속적으로 표시됩니다.
- **`"false"`** — ChildFrame 의 statustext 속성값만 표시합니다.

**Remark**

- ChildFrame 의 showstatusbar 속성값이 "true" 일 경우만 적용됩니다.

- ChildFrame 보다 상위 Frame 의 StatusBar 는 상위 Frame 의 showcascadestatustext 속성값에 따라 표시됩니다.


---

### showcascadetitletext

> Frames > ChildFrame > Property > showcascadetitletext

**Description**

ChildFrame 의 TitleBar 에 하위 Frame 과 Form 의 titletext 속성값을 모두 표시할 지 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.showcascadetitletext[= bShow]
```

**Setting Syntax**

```javascript
bShow ::= 'true' | 'false'
```
- **`"true"`** — 하위 Frame 과 Form 의 titletext 속성값이 "-" 구분자를 사용하여 연속적으로 표시됩니다.
- **`"false"`** — ChildFrame 의 titletext 속성값만 표시합니다.

**Remark**

- ChildFrame 의 showtitlebar 속성값이 "true" 일 경우만 적용됩니다.

- ChildFrame 보다 상위 Frame 의 TtileBar 는 상위 Frame 의 showcascadetitletext 속성값에 따라 표시됩니다.


---

### showontaskbar

> Frames > ChildFrame > Property > showontaskbar

**Description**

open() 메소드로 ChildFrame 이 Modeless로 표시될 때 윈도우의 TaskBar 에 표시할 지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.showontaskbar[= bShow]
```

**Setting Syntax**

```javascript
bShow ::= 'true' | 'false'
```
- **`"true"`** — ChildFrame 이 Modeless 로 표시될 때 윈도우의 TaskBar 에 항목을 따로 표시합니다.
- **`"false"`** — ChildFrame 이 Modeless 로 표시될 때 윈도우의 TaskBar 에 항목을 따로 표시하지 않습니다.

**Remark**

- showontaskbar 속성값을 설정하지 않으면 표시되는 ChildFrame 이 상위 Frame 을 갖지 않을때만 TaskBar 에 항목을 표시합니다.


---

### showstatusbar

> Frames > ChildFrame > Property > showstatusbar

**Description**

ChildFrame 에 StatusBar 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.showstatusbar[= bshowstatus]
```

**Setting Syntax**

```javascript
bshowstatus ::= 'true' | 'false'
```
```javascript
this.ChildFrame00.showstatusbar = true;
```
- **`true`** — ChildFrame 에 StatusBar 를 표시합니다.
- **`false`** — ChildFrame 에 StatusBar 를 표시하지 않습니다.

**Remark**

- showstatusbar 속성값을 설정하지 않으면 false 로 적용됩니다.


---

### showtitlebar

> Frames > ChildFrame > Property > showtitlebar

**Description**

ChildFrame 의 TitleBar 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.showtitlebar[= bshowtitlebar]
```

**Setting Syntax**

```javascript
bshowtitlebar ::= 'true' | 'false'
```
- **`"true"`** — ChildFrame 에 TitleBar 를 표시합니다.
- **`"false"`** — ChildFrame 에 TitleBar 를 표시하지 않습니다.

**Remark**

- TitleBar 에는 ChildFrame을(를) 최소화, 최대화, 종료할 수 있는 버튼이 있습니다.


---

### showtitleicon

> Frames > ChildFrame > Property > showtitleicon

**Description**

ChildFrame 의 타이틀바에 아이콘 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.showtitleicon[= bshowtitleicon]
```

**Setting Syntax**

```javascript
bshowtitleicon ::= 'true' | 'false'
```
- **`"true"`** — ChildFrame 의 타이틀바에 아이콘을 표시합니다.
- **`"false"`** — ChildFrame 의 타이틀바에 아이콘을 표시하지 않습니다.

**Remark**

- Theme 의 TitleBarControl > titleicon > -nexa-icon 속성에 설정된 아이콘 이미지를 아이콘으로 표시합니다.


---

### statusbar

> Frames > ChildFrame > Property > statusbar

**Description**

ChildFrame 의 상태바 오브젝트를 갖는 속성입니다.

**Syntax**

```javascript
ChildFrame.statusbar
```

**Setting Syntax**

```javascript
var objApp = nexacro.getAppplication();
var objStatusBar = objApp.mainframe.statusbar;
```

**Remark**

- ChildFrame 의 showstatusbar 속성값이 "true" 일 경우만 상태바 오브젝트가 생성됩니다.


---

### statusbarheight

> Frames > ChildFrame > Property > statusbarheight

**Description**

ChildFrame 의 StatusBar 높이를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.statusbarheight[= nHeight]
```

**Setting Syntax**

- **`nHeight`** — StatusBar 의 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- showstatubar 속성값이 "true" 일 경우 적용되는 속성입니다.

미지정시 기본값 : default : undefinded
값이 undefinded 일 경우  메인프레임은 30으로, 메인프레임이 아닌 프레임들은 20으로 동작


---

### statustext

> Frames > ChildFrame > Property > statustext

**Description**

ChildFrame 의 StatusBar 에 표시될 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.statustext[= strStatustext]
```

**Setting Syntax**

- **`strStatustext`** — StatusBar 에 표시될 텍스트를 설정합니다.

**Remark**

- showcascadestatustext 속성값이 true 이면 하위 Frame 또는 Form 의 statustext 속성값을 ChildFrame 의 StatusBar 에 함께 표시합니다.
   ChildFrame 하위에 여러개의 Frame 이 있을 경우엔 현재 활성화 된 Frame 의 statustext 속성값이 표시됩니다.

 
◆ WRE 제약
 
- Chrome, Firefox, Opera, Edge 브라우저는 보안상의 이유로 StatusBar 의 텍스트 변경을 지원하지 않습니다.

- 현재 StatusBar 의 텍스트를 변경할 수 있는 브라우저도 향후 기능이 차단될 수 있습니다.


---

### titlebar

> Frames > ChildFrame > Property > titlebar

**Description**

ChildFrame 의 타이틀바 오브젝트를 갖는 속성입니다.

**Syntax**

```javascript
ChildFrame.titlebar
```

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication();
var objTitleBar = objApp.mainframe.titlebar
```

**Remark**

- ChildFrame 의 showtitlebar 속성값이 "true" 일 경우만 타이틀바 오브젝트가 생성됩니다.


---

### titlebarbuttongap

> Frames > ChildFrame > Property > titlebarbuttongap

**Description**

ChildFrame 의 TitleBar 에 표시되는 시스템 버튼의 간격을 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.titlebarbuttongap[= nGap]
```

**Setting Syntax**

- **`nGap`** — TitleBar 에 표시되는 시스템 버튼(최소/최대/종료)의 간격을 pixel 단위의 숫자로 설정합니다.

**Remark**

- showtitlebar 속성값이 "true" 일 때 적용되는 속성입니다.


---

### titlebarbuttonsize

> Frames > ChildFrame > Property > titlebarbuttonsize

**Description**

ChildFrame 의 타이틀바에 표시되는 시스템 버튼의 크기을 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.titlebarbuttonsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [<strHeight>]
```
- **`<strWidth>`** — 타이틀바에 표시되는 시스템 버튼(최소/최대/종료)의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 타이틀바에 표시되는 시스템 버튼(최소/최대/종료)의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- showtitlebar 속성값이 "true" 일 때 적용되는 속성입니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### titlebarheight

> Frames > ChildFrame > Property > titlebarheight

**Description**

ChildFrame 의 TitleBar 높이를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.titlebarheight[= nHeight]
```

**Setting Syntax**

- **`nHeight`** — ChildFrame 의 TitleBar 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- titlebarheight 속성값을 설정하지 않으면 undefined 로 적용됩니다.
   undefined 가 적용되면 MainFrame 은 "30px" 로  표시되고, 다른 Frame 은 "20px" 로 표시됩니다.


---

### titletext

> Frames > ChildFrame > Property > titletext

**Description**

 ChildFrame 의 TitleBar 에 표시될 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.titletext[= strTitletext]
```

**Setting Syntax**

- **`strTitletext`** — TitleBar 에 표시될 텍스트를 설정합니다.

**Remark**

- showcascadetitletext  속성값이 "true"이면 하위 Frame 또는 Form 의 titletext 속성값을 ChildFrame 의 TitleBar 에 함께 표시합니다.
  ChildFrame 하위에 여러개의 Frame 이 있을 경우 현재 활성화 된 Frame 의 titletext 속성값이 표시됩니다.


---

### top

> Frames > ChildFrame > Property > top

**Description**

ChildFrame 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.top[= nTop]
```

**Setting Syntax**

```javascript
nTop ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — ChildFrame 의 상단 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### topmost

> Frames > ChildFrame > Property > topmost

**Description**

별도의 Window 를 가진 ChildFrame 을 최상위에 표시할지 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.topmost[= bTopmost]
```

**Setting Syntax**

```javascript
bTopmost ::= 'true' | 'false'
```
- **`true`** — 별도의 window 를 가진 ChildFrame 을 다른 어플리케이션보다 상위에 표시합니다.
- **`false`** — ChildFrame 이 활성화 된 순서에 맞게 겹쳐서 표시됩니다.

**Remark**

- open() 메소드로 ChildFrame 을 Widget 형태로 실행하여 사용할 경우 topmost 값을 true 로 설정하여 항상 최상위에 표시되도록 할 수 있습니다.

- open() 메소드로 ChildFrame 을 Modeless 형태로 실행할 때 topmost 속성을 true 로 설정하면 다른 어플리케이션보다 상위에 표시됩니다.
   ChildFrame 이 표시된 후 topmost 속성이 true 인 어플리케이션이 실행되면 겹쳐서 표시될 수 있습니다.

- showModal() 등의 메소드로 오픈된 별도의 window 를 갖지 않는 팝업창은 topmost 속성을 설정할 수 없습니다.


---

### visible

> Frames > ChildFrame > Property > visible

**Description**

ChildFrame 이(가) 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
this.ChildFrame00.visible = true; 
this.ChildFrame00.visible = false;
```
- **`"true"`** — ChildFrame 을(를) 화면에 표시합니다.
- **`"false"`** — ChildFrame 을(를) 화면에 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하는 즉시 컴포넌트의 표시 여부가 화면에 반영됩니다.

- visible 속성값이 "false"이면 컴포넌트가 화면에 표시되지 않고, 포커스를 받을 수 없으므로 입력이나 사용이 불가능합니다.

- Div 와 같은 컨테이너 컴포넌트의 visible 속성값을 "false"로 설정하면 자식 컴포넌트도 함께 화면에 표시되지 않습니다.

- visible 속성값이 "false"이어도 컴포넌트는 존재하기 때문에 스크립트로 제어가 가능합니다.

- 넥사크로 스튜디오에서는 visible 속성값을 'false'로 설정해도 디자인화면에서 사라지지 않습니다.


---

### width

> Frames > ChildFrame > Property > width

**Description**

ChildFrame 을(를) 표시하기 위한 너비를 설정하는 속성입니다.

**Syntax**

```javascript
ChildFrame.width[= nWidth]
```

**Setting Syntax**

```javascript
nWidth ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — ChildFrame 의 너비를 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 너비값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 너비값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### 메서드 (Methods)

### addEventHandler

> Frames > ChildFrame > Method > addEventHandler

**Description**

ChildFrame 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.addEventHandler( strEventID, objFunc, objTarget )
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

> Frames > ChildFrame > Method > addEventHandlerLookup

**Description**

함수를 검색하여 ChildFrame 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

### alert

> Frames > ChildFrame > Method > alert

**Description**

ChildFrame 의 경고 대화상자를 표시하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.alert( strText )
```

**Parameters**

```
대화상자에 표시할 텍스트를 설정합니다.
```

**Return**

없음

**Remark**

- ChildFrame 의 중앙에 대화상자를 표시합니다.


---

### clearEventHandler

> Frames > ChildFrame > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.clearEventHandler( strEventID )
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

### confirm

> Frames > ChildFrame > Method > confirm

**Description**

 ChildFrame 의 선택 대화상자를 표시하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.confirm( strText [,strCaption [,strType]] )
```

**Parameters**

```
대화상자에 표시할 텍스트를 설정합니다.
```

**Return**

표시된 선택 대화상자에서 "확인" 버튼을 선택하면 "true"를 반환합니다.
표시된 선택 대화상자에서 "취소" 버튼을 선택하면 "false"를 반환합니다.

**Remark**

- ChildFrame 의 중앙에 선택 대화상자를 표시합니다.


---

### destroy

> Frames > ChildFrame > Method > destroy

**Description**

스크립트에서 동적으로 생성한 ChildFrame 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.destroy()
```

**Parameters**

var bSucc = this.ChildFrame00.destroy();

**Return**

ChildFrame 이(가) 정상적으로 삭제되면 true 를 반환합니다.

ChildFrame 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 ChildFrame 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

ChildFrame.initChildFrame.showForm.addChildForm.insertChildForm.removeChild


---

### findEventHandler

> Frames > ChildFrame > Method > findEventHandler

**Description**

ChildFrame 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.findEventHandler( strEventID, objFunc, objTarget )
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

> Frames > ChildFrame > Method > getEventHandler

**Description**

ChildFrame 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.getEventHandler( strEventID, nIdx )
```

**Parameters**

```
핸들러 함수를 얻을 이벤트의 ID를 설정합니다.
```

**Return**

지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.

지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.


---

### getForm

> Frames > ChildFrame > Method > getForm

**Description**

ChildFrame 이 갖고 있는 Form 의 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.getForm()
```

**Parameters**

var objForm = ChildFrame00.getForm();

**Return**

ChildFrame 이 갖고 있는 Form 을 Object 형태로 반환합니다.

Form 이 없거나 생성되기 전이면 "null"을 반환합니다.

**Remark**

- ChildFrame 을 동적으로 생성하는 경우 show(), showModal() 메소드를 호출하기 전에는 Form이 생성되지 않습니다.


---

### getNativeHandle

> Frames > ChildFrame > Method > getNativeHandle

**Description**

ChildFrame이 속한 윈도우 핸들(HWND)값을 반환하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.getNativeHandle();
```

**Parameters**

var nHwnd = this.parent.getNativeHandle();

**Return**

ChildFrame이 속한 윈도우 핸들(HWND)값


---

### getOffsetBottom

> Frames > ChildFrame > Method > getOffsetBottom

**Description**

부모 Frame 의 Top 위치를 기준으로 ChildFrame 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.getOffsetBottom();
```

**Parameters**

var objApp = nexacro.getApplication();

var nBottom = objApp.mainframe.frame.getOffsetBottom();

**Return**

부모 Frame 의 Top 위치를 기준으로 ChildFrame 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 ChildFrame 의 bottom 값을 부모 Frame 의 Top 위치를 기준으로 동적으로 계산합니다.


---

### getOffsetHeight

> Frames > ChildFrame > Method > getOffsetHeight

**Description**

ChildFrame 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.getOffsetHeight();
```

**Parameters**

var objApp = nexacro.getApplication() ;

var nHeight = objApp.mainframe.frame.getOffsetHeight( ) ;

**Return**

ChildFrame 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 ChildFrame 의 높이를 동적으로 계산합니다.


---

### getOffsetLeft

> Frames > ChildFrame > Method > getOffsetLeft

**Description**

부모 Frame 의 Left 위치를 기준으로 ChildFrame 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.getOffsetLeft();
```

**Parameters**

var objApp = nexacro.getApplication();

var nLeft = objApp.mainframe.frame.getOffsetLeft();

**Return**

부모 Frame 의 Left 위치를 기준으로 ChildFrame 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 Frame 의 Left 위치를 기준으로 ChildFrame 의 left 값을 동적으로 계산합니다.


---

### getOffsetRight

> Frames > ChildFrame > Method > getOffsetRight

**Description**

부모 Frame 의 Left 위치를 기준으로 ChildFrame 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.getOffsetLeft();
```

**Parameters**

var objApp = nexacro.getApplication();

var nRight = objApp.mainframe.frame.getOffsetRight();

**Return**

부모 Frame 의 Left 위치를 기준으로 ChildFrame 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 Frame 의 Left 위치를 기준으로 ChildFrame 의 right 값을 동적으로 계산합니다.


---

### getOffsetTop

> Frames > ChildFrame > Method > getOffsetTop

**Description**

부모 Frame 의 Top 위치를 기준으로 ChildFrame 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.getOffsetTop();
```

**Parameters**

var objApp = nexacro.getApplication();

var nTop = objApp.mainframe.frame.getOffsetTop();

**Return**

부모 Frame 의 Top 위치를 기준으로 ChildFrame 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 ChildFrame 의 top 값을 부모 Frame 의 Top 위치를 기준으로 동적으로 계산합니다.


---

### getOffsetWidth

> Frames > ChildFrame > Method > getOffsetWidth

**Description**

ChildFrame 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.getOffsetWidth();
```

**Parameters**

var objApp = nexacro.getApplication() ;

var nWidth = objApp.mainframe.frame.getOffsetWidth( ) ;

**Return**

ChildFrame 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 ChildFrame 의 너비를 동적으로 계산합니다.


---

### getOwnerFrame

> Frames > ChildFrame > Method > getOwnerFrame

**Description**

ChildFrame 이 소속된 부모 Frame 을 반환하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.getOwnerFrame()
```

**Parameters**

var objFrame = this.getOwnerFrame().getOwnerFrame() ;

**Return**

ChildFrame 이 소속된 부모 Frame 오브젝트를 반환합니다.
ChildFrame 이 소속된 Frame 이 없을 경우 "null"을 반환합니다.


---

### init

> Frames > ChildFrame > Method > init

**Description**

스크립트로 ChildFrame 을 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.init( strName, nLeft, nTop, nWidth, nHeight [, nRight, nBottom [,strUrl]] )
```

**Parameters**

```
ChildFrame 의 ID를 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- 위치관련 인수값에 단위를 사용할 경우 문자열로 설정하여야 합니다.

- 이미 show() 메소드가 호출된 경우에는 초기화가 끝난 상태입니다. 
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다.

- 스크립트로 ChildFrame 을 동적 생성한 후에 사용할 수 있습니다.
  동적으로 생성한 ChildFrame 이 아닌 경우에는 오동작이 발생할 수 있습니다.

- 동적으로 생성한 ChildFrame 을 부모 Frame 에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.


---

### insertEventHandler

> Frames > ChildFrame > Method > insertEventHandler

**Description**

ChildFrame 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

> Frames > ChildFrame > Method > move

**Description**

ChildFrame 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.move( nLeft, nTop [, nWidth, nHeight [, nRight, nBottom]] )
```

**Parameters**

```
ChildFrame 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 인수값에 "px" 또는 "%" 단위를 사용할 경우 문자열로 설정하여야 합니다.

- ChildFrame 이 고정된 형태를 갖는 HFrameSet, VFrameSet, TileFrameSet 의 자식 Frame 일 경우 move() 메소드는 동작하지 않습니다.


---

### removeEventHandler

> Frames > ChildFrame > Method > removeEventHandler

**Description**

ChildFrame 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.removeEventHandler( strEventID, objFunc, objTarget )
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

> Frames > ChildFrame > Method > removeEventHandlerLookup

**Description**

ChildFrame 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

### setEventHandler

> Frames > ChildFrame > Method > setEventHandler

**Description**

ChildFrame 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.setEventHandler( strEventID, objFunc, objTarget )
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

> Frames > ChildFrame > Method > setEventHandlerLookup

**Description**

ChildFrame 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

> Frames > ChildFrame > Method > setFocus

**Description**

ChildFrame 을 활성화하고 포커스를 주는 메소드입니다.

**Syntax**

```javascript
ChildFrame.setFocus()
```

**Parameters**

var objApp = nexacro.getApplication() ;
var objRemoveFrame = objApp.mainframe.frame.setFocus() ;

**Return**

없음

**Remark**

- Frame 에 다수의 자식 Frame 을 갖고 있을 때 특정 Frame 을 활성화하고 다른 Frame 보다 앞에 표시하는 메소드입니다.

- Frame 이 포커스 되면 Frame 내의 컴포넌트 중 마지막에 포커스를 가진 컴포넌트가 포커스를 갖습니다.


---

### setOffsetBottom

> Frames > ChildFrame > Method > setOffsetBottom

**Description**

ChildFrame 이 FrameSet 의 하위에 속해 있을 때 ChidFrame 의 bottom 을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.setOffsetBottom( nBottom );
```

**Parameters**

```
부모 FrameSet 의 Top 위치를 기준으로 ChildFrame 의 bottom 을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- ChildFrame 의 부모 Frame 이 FrameSet 이 아니면 ChidFrame 의 bottom 은 변경되지 않습니다.

- open(), showModal() 과 같은 메소드에 의해 표시된 ChildFrame 창에서는 지원하지 않는 메소드입니다.


---

### setOffsetHeight

> Frames > ChildFrame > Method > setOffsetHeight

**Description**

ChildFrame 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.setOffsetHeight( nHeight );
```

**Parameters**

```
ChildFrame 의 높이를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- ChildFrame 이 FrameSet 의 하위에 속해 있거나 open(), showModal() 과 같은 메소드에 의해 표시된 팝업창인 경우만 메소드가 정상 수행됩니다.


---

### setOffsetLeft

> Frames > ChildFrame > Method > setOffsetLeft

**Description**

ChildFrame 이 FrameSet 의 하위에 속해 있을 때 ChidFrame 의 left 를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.setOffsetLeft( nLeft );
```

**Parameters**

```
부모 FrameSet 의 Left 위치를 기준으로 ChildFrame 의 left 를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- ChildFrame 이 FrameSet 의 하위에 속해 있거나 open(), showModal() 과 같은 메소드에 의해 표시된 팝업창인 경우만 메소드가 정상 수행됩니다.


---

### setOffsetRight

> Frames > ChildFrame > Method > setOffsetRight

**Description**

ChildFrame 이 FrameSet 의 하위에 속해 있을 때 ChidFrame 의 right 를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.setOffsetRight( nRight );
```

**Parameters**

```
부모 FrameSet 의 Left 위치를 기준으로 ChildFrame 의 right 를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- ChildFrame 의 부모 Frame 이 FrameSet 이 아니면 ChidFrame 의 right 는 변경되지 않습니다.

- open(), showModal() 과 같은 메소드에 의해 표시된 ChildFrame 창에서는 지원하지 않는 메소드입니다.


---

### setOffsetTop

> Frames > ChildFrame > Method > setOffsetTop

**Description**

ChildFrame 이 FrameSet 의 하위에 속해 있을 때 ChidFrame 의 top 을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.setOffsetTop( nTop );
```

**Parameters**

```
부모 FrameSet 의 Top 위치를 기준으로 ChildFrame 의 top 을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- ChildFrame 이 FrameSet 의 하위에 속해 있거나 open(), showModal() 과 같은 메소드에 의해 표시된 팝업창인 경우만 메소드가 정상 수행됩니다.


---

### setOffsetWidth

> Frames > ChildFrame > Method > setOffsetWidth

**Description**

ChildFrame 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.setOffsetWidth( nWidth );
```

**Parameters**

```
ChildFrame 의 너비를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- ChildFrame 이 FrameSet 의 하위에 속해 있거나 open(), showModal() 과 같은 메소드에 의해 표시된 팝업창인 경우만 메소드가 정상 수행됩니다.


---

### show

> Frames > ChildFrame > Method > show

**Description**

스크립트로 동적 생성한 ChildFrame 을 화면에 표시하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.show()
```

**Parameters**

var objApp = nexacro.getApplication() ;

var objFrame = new ChildFrame();
objFrame.init( "ChildFrame00", 30, 120, 196, 46, "Base::Form00.xfdl" );

objApp.mainframe.frame.insertChild( 0, "ChildFrame00", objFrame ) ;
objFrame.show();

**Return**

없음

**Remark**

- show() 메소드가 호출되면 ChildFrame 의 formurl 속성에 설정된 Form 이 비동기(Async)로 로딩됩니다.
  로딩 완료 후의 작업은 Form 의 onload 이벤트에서 처리합니다.

- 스크립트로 ChildFrame 을 동적 생성한 후에 사용 가능합니다.
  동적으로 생성한 ChildFrame 이 아닌 경우에는 오동작 할 수 있습니다.

- 동적 생성한 ChildFrame 을 추가하기 위해 부모 Frame 의 addChild() 메소드나 insertChild() 메소드를 사용합니다.
  추가된 ChildFrame 을 표시하기 위해 show() 메소드를 사용합니다.
  부모 Frame 에 추가되지 않고 show() 메소드를 사용할 경우 에러가 발생합니다.


---

### showModal

> Frames > ChildFrame > Method > showModal

**Description**

동적으로 생성한 ChildFrame 을 Modal 형태로 표시하는 메소드입니다.

**Syntax**

```javascript
ChildFrame.showModal( [strID,] objParentFrame, [{objArguList} [, objOpener [, callbackFunc]]] );
```

**Parameters**

```
Modal 로 표시할 ChildFrame 의 ID 를 문자열로 설정합니다.

값 생략 시 ChildFrame 에 설정된 name 속성값으로 설정됩니다.
```

**Return**

callbackFunc 설정값에 따라 반환값 타입이 달라집니다.

- callbackFunc 설정: (Boolean) 
  메서드 실행 성공/실패 여부를 반환합니다.

- callbackFunc 설정 없음: (Object)
  Promise 오브젝트를 반환합니다.
  Promise 오브젝트는 자바스크립트 표준 내장 객체입니다.
  내부적으로 resolve 수행 시점은 Modal 로 표시된 ChildFrame이 종료되는 시점입니다.
  Promise 오브젝트에서 then 메서드 사용 시 다음과 같이 인자값을 받아 처리할 수 있습니다.
  - argument.name: showModal 메서드 실행 시 설정한 strID 값
  - argument.arg: close 메서드로 ChildFrame이 종료되는 경우 close 메서드 파라미터값

**Remark**

* 동적 생성 처리 방식

- showModal() 메소드는 스크립트에서 동적으로 생성한 ChildFrame 만 사용할 수 있습니다.
   동적으로 생성한 ChildFrame 이 아닌 경우에는 오동작이 발생할 수 있습니다.

- 동적으로 생성한 ChildFrame 은 autosize 속성값에 따라 표시되는 Modal 의 크기가 결정됩니다.
   autosize 속성값을 설정하지 않으면 true 로 적용됩니다.


* 파라미터 설정 시 참고사항

- objArguList 파라미터로 설정한 변수값은 Modal 로 표시된 ChildFrame 에서 "this.parent.[변수명]" 형태로 접근할 수 있습니다.

- strID 파라미터는 getPopupFrames() 메소드에서 결과값으로 받은 Collection 에 인자로 사용할 수 있습니다.


* 기타 참고사항

- showModal() 메소드는 Modal 의 표시와 관계없이 메소드 호출 이후의 스크립트를 계속해서 수행합니다.
   메소드 호출 위치에서 스크립트가 중지되었다가 Modal 종료 후 다음 스크립트가 수행되게 하려면 showModalSync() 메소드를 사용하여야 합니다.

- showModal() 메소드 실행 시 objParentFrame 파라미터에 설정한 Frame 이 속한 Window 의 팝업 리스트에 Modal 로 표시된 ChildFrame 이 추가됩니다.
   또한, Modal 로 표시된 ChildFrame 이 종료되면 자동으로 팝업 리스트에서 제거되고 내부적으로 destroy 까지 수행됩니다.

- Modal 로 표시될 ChildFrame 의 left, top 속성값이 음수일 경우 0 으로 적용됩니다.
   또한, Modal 이 표시될 공간이 부족한 경우 TitleBar 가 표시되도록 left, top 위치가 보정됩니다.

- objParentFrame 파라미터에 설정한 Frame 이 속한 window 영역을 기준으로 Modal 이 표시됩니다.
   objParentFrame 파라미터에 설정한 Frame 이 Modeless 인 경우 해당 Frame 이 포함된 Window 를 기준으로 표시됩니다.
   objParentFrame 파라미터에 null 이 설정된 경우 MainFrame 을 기준으로 표시됩니다.

- Modal 로 표시될 ChildFrame 의 openstatus 속성값을 "minimize" 로 설정해도 "normal" 로 표시됩니다.


---

### 이벤트 (Events)

### onactivate

> Frames > ChildFrame > Event > onactivate

**Description**

ChildFrame 이 활성화 되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onactivate(obj:nexacro.ChildFrame,e:nexacro.ActivateEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 앱이 활성화될 때 이벤트가 발생합니다.
- MainFrame > [Frameset] > ChildFrame > Form 순으로 이벤트가 발생합니다.
  ChildFrame 의 onactivate 이벤트가 발생한 후 ChildFrame 의 formurl 속성에 설정된 Form 에서 onactivate 이벤트가 발생합니다. 
- 운영체제에 따라 특정 동작 또는 시스템과 연결되어 이벤트가 발생할 수 있습니다.
  > 안드로이드
     앱 시작 시
     background 상태에서 다시 foreground 상태로 변경될 때
  > iOS
    앱 시작 시
    background 상태에서 다시 foreground 상태로 변경될 때
    키패드가 내려가면서 deactive 상태가 된 상태에서 Form에 포커스를 줄 때
    (WKWebView 내부에서 포커스 동작 시 시스템 이벤트 발생 기준과 같습니다).


---

### onbeforeclose

> Frames > ChildFrame > Event > onbeforeclose

**Description**

ChildFrame 이 종료되기 전에 발생하는 이벤트입니다.

**Syntax**

```javascript
onbeforeclose(obj:nexacro.ChildFrame,e:nexacro.CloseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 문자열 설정 시 ChildFrame 종료를 위한 확인창이 표시됩니다.
이벤트에서 리턴값으로 설정한 문자열이 종료를 위한 확인창에 사용됩니다.

이벤트에서 리턴값을 생략하거나 null, undefined, ""(Empty String) 으로 설정 시 확인창이 표시되지 않습니다.

**Remark**

- 일반적으로 어플리케이션 종료 전 사용자의 확인을 받을 때 사용하는 이벤트입니다.

- onbeforeclose 이벤트는 최하위부터 최상위로 전파되는 이벤트입니다.
   ChildFrame 의 하위 오브젝트에 onbeforeclose 이벤트가 정의되어 있다면 최하위 오브젝트의 이벤트부터 차례로 수행됩니다.
   최종 onbeforeclose 이벤트 수행 후 각 이벤트의 리턴값은 누적되어 종료를 위한 확인창에 모두 표시됩니다.

- 종료를 위한 확인창에서 "확인"을 선택하면 onclose 이벤트가 발생하고 ChildFrame 이 종료됩니다.
   종료를 위한 확인창에서 "취소"를 선택하면 onclose 이벤트가 발생하지 않고 ChildFrame 이 종료되지 않습니다.


---

### onclose

> Frames > ChildFrame > Event > onclose

**Description**

ChildFrame 이 종료될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onclose(obj:nexacro.ChildFrame,e:nexacro.CloseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- onclose 이벤트는 최하위부터 최상위로 전파되는 이벤트입니다.
   ChildFrame 의 하위 오브젝트에 onclose 이벤트가 정의되어 있다면 최하위 오브젝트의 이벤트부터 차례로 수행됩니다.
   최종 onclose 이벤트 수행 후 ChildFrame 이 종료됩니다.


---

### ondeactivate

> Frames > ChildFrame > Event > ondeactivate

**Description**

ChildFrame 이 비활성화 되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondeactivate(obj:nexacro.ChildFrame,e:nexacro.ActivateEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 앱이 비활성화될 때 이벤트가 발생합니다.
- Form > ChildFrame > [Frameset] > MainFrame 순으로 이벤트가 발생합니다.
  ChildFrame 의 formurl 속성에 지정된 Form에서 ondeactivate 이벤트가 발생 한 후에 ChildFrame 의 ondeactivate 이벤트가 발생합니다.
- 운영체제에 따라 특정 동작 또는 시스템과 연결되어 이벤트가 발생할 수 있습니다.
  > 안드로이드
     다른 앱이 활성화될 때
     홈 키를 입력할 때
     화면을 끌 때
  > iOS
     다른 앱이 활성화될 때
     화면을 끌 때
     키패드가 내려갈 때
    (WKWebView 내부에서 포커스 동작 시 시스템 이벤트 발생 기준과 같습니다).


---

### onmove

> Frames > ChildFrame > Event > onmove

**Description**

ChildFrame 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmove(obj:nexacro.ChildFrame,e:nexacro.MoveEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onorientationchange

> Frames > ChildFrame > Event > onorientationchange

**Description**

모바일 기기의 화면 방향이 변경되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onorientationchange(obj:nexacro.ChildFrame,e:nexacro.OrientationChangeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- onorientationchange  이벤트는 상위에서 하위로 이벤트가 발생합니다.
  모바일 기기의 방향 전환 시 MainFrame 의 onorientationchange 이벤트가 처음 발생한 후 Frame, Form 순서로 이벤트가 발생합니다.
  이때, preventDefault() 메소드로 이벤트 발생을 중지시킬 수 없습니다.

- onorientationchange 이벤트 내에서 MainFrame 크기 또는 시스템에서 값을 얻는 속성에 접근 시 변경된 값이 전달되지 않을 수 있습니다.
  모바일 기기마다 시스템 관련값의 갱신 시점이 다르고, onorientationchange 이벤트는 기기의 방향이 전환된 즉시 발생하기 때문입니다.


---

### onsize

> Frames > ChildFrame > Event > onsize

**Description**

ChildFrame 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsize(obj:nexacro.ChildFrame,e:nexacro.SizeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onsyscommand

> Frames > ChildFrame > Event > onsyscommand

**Description**

ChildFrame 에 시스템명령(Command) 메시지가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsyscommand(obj:nexacro.ChildFrame,e:nexacro.SysCommandEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 프레임으로 이벤트가 전파되고, 시스템명령이 수행됩니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 프레임으로 이벤트가 전파되지 않고, 시스템명령도 취소됩니다.

이벤트에서 리턴값을 생략하면 true 로 적용됩니다.

**Remark**

- 이벤트의 리턴값에 따라 상위 프레임으로 이벤트가 전파됩니다.

- 이벤트가 상위로 전파되는 중간에 이벤트 리턴값으로 false 가 반환되면 상위 프레임으로 이벤트가 전파되지 않고 시스템명령이 취소됩니다.

- 프레임의 최소/최대 버튼이 클릭되었을 때 onsyscommand 이벤트에서 false 를 반환하면 최소/최대화 명령이 취소됩니다.


---

## Frames > FrameSet

### FrameSet

> Frames > FrameSet

**Description**

MainFrame 하위에 오는 Frame 으로써 애플리케이션의 화면 배열을 위한 기본단위 화면으로 사용됩니다. 

FrameSet 은 하위에 FrameSet, HFrameSet, VFrameSet, TileFrameSet, ChildFrame 을 반복적으로 가질 수 있습니다. 
또한, 하위 프레임을 자유롭게 배열할 수 있는 기능이 있습니다.

**Structure**



**Property**

| Name | Description |
| --- | --- |
| all | FrameSet 에 등록된 Frame 을 갖는 읽기전용 속성입니다. |
| background | FrameSet 의 배경 영역을 설정하는 속성입니다. |
| border-radius | FrameSet 의 모서리 모양을 설정하는 속성입니다. |
| bottom | FrameSet 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다. |
| color | FrameSet 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| cssclass | FrameSet 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다. |
| cursor | FrameSet 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| enable | FrameSet 의 사용가능 여부를 설정하는 속성입니다. |
| enableevent | FrameSet 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다. |
| font | FrameSet 에서 사용하는 폰트를 설정하는 속성입니다. |
| frames | FrameSet 에 등록된 자식 Frame 들을 Collection 형태로 갖는 읽기전용 속성입니다. |
| height | FrameSet 을(를) 표시하기 위한 높이를 설정하는 속성입니다. |
| hotkey | FrameSet 의 기본 액션을 수행하기 위한 단축키를 설정하는 속성입니다. |
| id | FrameSet의 고유 식별자를 설정하는 속성입니다. |
| left | FrameSet 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다. |
| minimizedchildposition | FrameSet 에서 최소화 된 자식 Frame 이 표시되는 위치를 설정하는 속성입니다. |
| minimizeheight | FrameSet 에서 최소화 된 자식 Frame 의 높이를 설정하는 속성입니다. |
| minimizewidth | FrameSet 에서 최소화 된 자식 Frame 의 너비를 설정하는 속성입니다. |
| name | FrameSet 의 이름을 설정하는 속성입니다. |
| -nexa-border | FrameSet 의 테두리를 설정하는 속성입니다. |
| -nexa-edge | FrameSet 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-rtl-background-image | FrameSet 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| -nexa-rtl-edge-image | FrameSet 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| opacity | FrameSet 영역의 투명도를 설정하는 속성입니다. |
| progressbardirection | FrameSet 의 StatusBar 에 표시되는 ProgressBar 의 진행방향을 설정하는 속성입니다. |
| progressbargap | FrameSet 의 StatusBar 에 표시되는 ProgressBar 의 오른쪽 공간 크기를 설정하는 설정하는 속성입니다. |
| progressbarsize | FrameSet 의 StatusBar 에 표시되는 ProgressBar 의 너비를 설정하는 속성입니다. |
| progressbarsmooth | MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 진행바가 연속된 형태로 표시될 지 설정하는 속성입니다. |
| restorechildpositiontype | FrameSet 의 하위 ChildFrame 중 하나가 최대화 될 때 나머지 ChildFrame 의 크기변경 기준을 설정하는 속성입니다. |
| right | FrameSet 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다. |
| showcascadestatustext | FrameSet 의 StatusBar 에 하위 Frame 과 Form 의 statustext 속성값을 모두 표시할 지 설정하는 속성입니다. |
| showcascadetitletext | FrameSet 의 TitleBar 에 하위 Frame 과 Form 의 titletext 속성값을 모두 표시할 지 설정하는 속성입니다. |
| showstatusbar | FrameSet 에 StatusBar 표시 여부를 설정하는 속성입니다. |
| showtitlebar | FrameSet 의 TitleBar 표시 여부를 설정하는 속성입니다. |
| showtitleicon | FrameSet 의 타이틀바에 아이콘 표시 여부를 설정하는 속성입니다. |
| statusbar | FrameSet 의 상태바 오브젝트를 갖는 속성입니다. |
| statusbarheight | FrameSet 의 StatusBar 높이를 설정하는 속성입니다. |
| statustext | FrameSet 의 StatusBar 에 표시될 텍스트를 설정하는 속성입니다. |
| tabkeycirculation | 탭키 또는 Shift+탭키 입력으로 포커스 이동 시 Form 내에서 마지막 컴포넌트 또는 첫번째 컴포넌트에서 다른 Frame으로 포커스를 이동하는 조건을 설정하는 속성입니다. |
| titlebar | FrameSet 의 타이틀바 오브젝트를 갖는 속성입니다. |
| titlebarbuttongap | FrameSet 의 TitleBar 에 표시되는 시스템 버튼의 간격을 설정하는 속성입니다. |
| titlebarbuttonsize | FrameSet 의 타이틀바에 표시되는 시스템 버튼의 크기을 설정하는 속성입니다. |
| titlebarheight | FrameSet 의 TitleBar 높이를 설정하는 속성입니다. |
| titletext | FrameSet 의 TitleBar 에 표시될 텍스트를 설정하는 속성입니다. |
| top | FrameSet 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다. |
| visible | FrameSet 이(가) 화면에 표시될지 여부를 설정하는 속성입니다. |
| width | FrameSet 을(를) 표시하기 위한 너비를 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addChild | 스크립트로 동적 생성한 Frame 을 FrameSet 의 자식 Frame 으로 추가하는 메소드입니다. |
| addEventHandler | FrameSet 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 FrameSet 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| alert | FrameSet 의 경고 대화상자를 표시하는 메소드입니다. |
| arrange | FrameSet 의 자식 Frame 을 정렬하는 메소드입니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| confirm | FrameSet 의 선택 대화상자를 표시하는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 FrameSet 을(를) 삭제하는 메소드입니다. |
| findEventHandler | FrameSet 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getActiveFrame | FrameSet 의 자식 Frame 중 활성화 상태인 Frame 오브젝트를 반환하는 메소드입니다. |
| getEventHandler | FrameSet 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| getNativeHandle | FrameSet이 속한 윈도우 핸들(HWND)값을 반환하는 메소드입니다. |
| getOffsetBottom | 부모 Frame 의 Top 위치를 기준으로 FrameSet 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetHeight | FrameSet 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetLeft | 부모 Frame 의 Left 위치를 기준으로 FrameSet 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetRight | 부모 Frame 의 Left 위치를 기준으로 FrameSet 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetTop | 부모 Frame 의 Top 위치를 기준으로 FrameSet 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetWidth | FrameSet 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOwnerFrame | FrameSet 이 소속된 부모 Frame 을 반환하는 메소드입니다. |
| init | 스크립트로 FrameSet 을 동적 생성한 후에 초기화하는 메소드입니다. |
| insertChild | 스크립트로 동적 생성한 Frame 을 FrameSet 의 자식 Frame 으로 특정 순서에 추가하는 메소드입니다. |
| insertEventHandler | FrameSet 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| move | FrameSet 의 위치와 크기를 변경하는 메소드입니다. |
| removeChild | FrameSet 에 동적으로 추가된 Frame 을 제거하는 메소드입니다. |
| removeEventHandler | FrameSet 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | FrameSet 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| setEventHandler | FrameSet 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | FrameSet 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| setFocus | FrameSet 을 활성화하고 포커스를 주는 메소드입니다. |
| setOffsetBottom | FrameSet 이 FrameSet 의 하위에 속해 있을 때 FrameSet 의 bottom 을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetHeight | FrameSet 이 FrameSet 의 하위에 속해 있을 때 FrameSet 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetLeft | FrameSet 이 FrameSet 의 하위에 속해 있을 때 FrameSet 의 left 를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetRight | FrameSet 이 FrameSet 의 하위에 속해 있을 때 FrameSet 의 right 를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetTop | FrameSet 이 FrameSet 의 하위에 속해 있을 때 FrameSet 의 top 을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetWidth | FrameSet 이 FrameSet 의 하위에 속해 있을 때 FrameSet 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| show | 스크립트로 동적 생성한 FrameSet 을 화면에 표시하는 메소드입니다 |

**Event**

| Name | Description |
| --- | --- |
| onactivate | FrameSet 이 활성화 되었을 때 발생하는 이벤트입니다. |
| onbeforeclose | FrameSet 이 종료되기 전에 발생하는 이벤트입니다. |
| onclose | FrameSet 이 종료될 때 발생하는 이벤트입니다. |
| ondeactivate | FrameSet 이 비활성화 되었을 때 발생하는 이벤트입니다. |
| onmove | FrameSet 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| onorientationchange | 모바일 기기의 화면 방향이 변경되었을 때 발생하는 이벤트입니다. |
| onsize | FrameSet 의 크기가 변경됐을 때 발생하는 이벤트입니다. |
| onsyscommand | FrameSet 에 시스템명령(Command) 메시지가 들어왔을 때 발생하는 이벤트입니다. |

**Status**

컴포넌트가 비활성화된 상태

**Control**

| Name | TypeName |
| --- | --- |
| titlebar | nexacro.TitleBarControl |
| statusbar | nexacro.StatusBarControl |


---

### 속성 (Properties)

### -nexa-border

> Frames > FrameSet > Property > -nexa-border

**Description**

FrameSet 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.border[= strborder]
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
this.FrameSet00.border = "1px solid #999999";
this.FrameSet00.border = "1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999";
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

> Frames > FrameSet > Property > -nexa-edge

**Description**

FrameSet 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.edge[= stredge]
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
this.FrameSet00.edge = "URL('./images/border.png')" 5px 5px;
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

- FrameSet 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.


◆ WRE 제약

- <fixedwidth>,<fixedheight> 값이 이미지 사이즈의 1/2 을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-rtl-background-image

> Frames > FrameSet > Property > -nexa-rtl-background-image

**Description**

FrameSet 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.-nexa-rtl-background-image
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

> Frames > FrameSet > Property > -nexa-rtl-edge-image

**Description**

FrameSet 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.-nexa-rtl-edge-image
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

### all

> Frames > FrameSet > Property > all

**Description**

FrameSet 에 등록된 Frame 을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FrameSet.all
```

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication();
var objFrames = objApp.mainframe.[Frame구조].all;
```

**Remark**

- all 속성은 Collection 접근방식을 사용할 수 있습니다.
  FrameSet.all[0], FrameSet.all["ChildFrame0"], FrameSet.all.length 등의 방법을 사용합니다.


---

### background

> Frames > FrameSet > Property > background

**Description**

FrameSet 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.background[= strbackground]
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
this.FrameSet00.background = "#ffffaa";
this.FrameSet00.background = ""URL('./images/smiley.gif')" no-repeat center center #ffffaa";
this.FrameSet00.background = ""URL('./images/smiley.gif')" no-repeat center center /auto #ffffaa";
this.FrameSet00.background = ""URL('./images/smiley.gif')" no-repeat center center /15px 15% #ffffaa";
this.FrameSet00.background = "linear-gradient( red , blue , yellow )";
this.FrameSet00.background = "linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0))";
this.FrameSet00.background = ""URL('./images/smiley.gif')" border-box border-box #ffffaa";
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

"left" 설정 시 FrameSet 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 FrameSet 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 FrameSet 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 FrameSet 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 FrameSet 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 FrameSet 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
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

0 보다 작거나 100 보다 큰 값을 설정 시 FrameSet 의 영역을 벗어난 가상의 위치로 적용됩니다.

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
예를 들어 <angle> 값이 "to left" 이면 FrameSet 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 FrameSet 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

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

0 보다 작거나 100 보다 큰 값을 설정 시 FrameSet 의 영역을 벗어난 가상의 위치로 적용됩니다.
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
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 FrameSet 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

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

> Frames > FrameSet > Property > border-radius

**Description**

FrameSet 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.borderRadius[= strborderradius]
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
this.FrameSet00.borderRadius = "10px";
this.FrameSet00.borderRadius = "5px 6px 10px / 5px 10px";
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

> Frames > FrameSet > Property > bottom

**Description**

FrameSet 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.bottom[= nBottom]
```

**Setting Syntax**

```javascript
nBottom ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — FrameSet 의 하단 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### color

> Frames > FrameSet > Property > color

**Description**

FrameSet 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.color[= strcolor]
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
this.FrameSet00.color = "#999999";
this.FrameSet00.color = "rgb(255,0,0)";
this.FrameSet00.color = "red";
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

> Frames > FrameSet > Property > cssclass

**Description**

FrameSet 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.cssclass[= strcssclass]
```

**Setting Syntax**

```javascript
strcssclass ::= <ClassName> [ , &ltClassName> ]*
```
```javascript
var objApp = nexacro.getApplication();

objApp.mainframe.FrameSet00.cssclass = "TestClass";
objApp.mainframe.FrameSet00.cssclass = "TestClass,TestClass2";
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

> Frames > FrameSet > Property > cursor

**Description**

FrameSet 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.cursor[= strCursor]
```

**Setting Syntax**

```javascript
strCursor ::= 'none' | 'auto' | 'default' | 'copy' | 'crosshair' | 'help' | 'move' | 'not-allowed' | 'pointer' | 'progress' | 'text' | 'wait' | 'ew-resize' | 'e-resize' | 'w-resize' | 'ns-resize' | 'n-resize' | 's-resize' | 'nesw-resize' | 'ne-resize' | 'sw-resize' | 'nwse-resize' | 'nw-resize' | 'se-resize'
```
```javascript
* XCSS
cursor : default;

* Script ( normal property )
this.FrameSet00.cursor = "default";
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

> Frames > FrameSet > Property > enable

**Description**

FrameSet 의 사용가능 여부를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.enable[= benable]
```

**Setting Syntax**

```javascript
benable ::= 'true' | 'false'
```
```javascript
this.FrameSet00.enable = true; 
this.FrameSet00.enable = false;
```
- **`true`** — FrameSet 을(를) 사용할 수 있게 설정합니다.
- **`false`** — FrameSet 을(를) 사용할 수 없게 설정합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "disabled" Status 가 적용됩니다.

**Remark**

- enable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enable 속성값이 false 이면 컴포넌트가 화면에 표시되지만 포커스나 입력을 받을 수 없습니다.

- Div 와 같은 컨테이너 컴포넌트의 enable 속성값을 false 로 설정하면 자식 컴포넌트도 모두 Disable 됩니다.


---

### enableevent

> Frames > FrameSet > Property > enableevent

**Description**

FrameSet 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.enableevent[= bEvent]
```

**Setting Syntax**

```javascript
bEvent ::= 'true' | 'false'
```
```javascript
this.FrameSet00.enableevent = true;  

this.FrameSet00.enableevent = false;
```
- **`true`** — FrameSet 에서 이벤트가 발생하도록 설정합니다.
- **`false`** — FrameSet 에서 이벤트가 발생하지 않도록 설정합니다.

**Remark**

- enableevent 속성을 false 로 설정하면 이벤트 발생으로 인한 처리속도 지연과 화면 깜빡임을 방지할 수 있습니다.


---

### font

> Frames > FrameSet > Property > font

**Description**

FrameSet 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.font[= strfont]
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
this.FrameSet00.font = "bold 12pt/30px arial, sans-serif";
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

### frames

> Frames > FrameSet > Property > frames

**Description**

FrameSet 에 등록된 자식 Frame 들을 Collection 형태로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FrameSet.frames
```

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication();
var objFrame = objApp.mainframe.frame.frames[1];
```

**Remark**

- frames 속성은 Collection 접근방식을 사용할 수 있습니다.
  FrameSet.frames[0], FrameSet.frames["ChildFrame0"], FrameSet.frames.length 등의 방법을 사용합니다.


---

### height

> Frames > FrameSet > Property > height

**Description**

FrameSet 을(를) 표시하기 위한 높이를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.height[= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — FrameSet 의 높이를 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 높이값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 높이값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### hotkey

> Frames > FrameSet > Property > hotkey

**Description**

FrameSet 의 기본 액션을 수행하기 위한 단축키를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.hotkey[= strHotkey]
```

**Setting Syntax**

```javascript
this.FrameSet00.hotkey = "G"; 
this.FrameSet00.hotkey = "CTRL+A"; 
this.FrameSet00.hotkey = "CTRL+ALT+X";
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

> Frames > FrameSet > Property > id

**Description**

FrameSet의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.id
```

**Setting Syntax**

- **`id`** — FrameSet를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### left

> Frames > FrameSet > Property > left

**Description**

FrameSet 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.left [=nLeft]
```

**Setting Syntax**

```javascript
nLeft ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — FrameSet 의 좌측 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### minimizedchildposition

> Frames > FrameSet > Property > minimizedchildposition

**Description**

FrameSet 에서 최소화 된 자식 Frame 이 표시되는 위치를 설정하는 속성입니다.

**Syntax**

```javascript
Default : "bottom"
```

**Setting Syntax**

```javascript
enumPos ::= 'left' | 'top' | 'right' | 'bottom'
```
```javascript
FrameSet00.minimizedchildposition = "left";
```
- **`"left"`** — 최소화 된 자식 Frame 이 FrameSet 내부의 왼쪽 영역에 표시됩니다.
- **`"top"`** — 최소화 된 자식 Frame 이 FrameSet 내부의 윗쪽 영역에 표시됩니다.
- **`"right"`** — 최소화 된 자식 Frame 이 FrameSet 내부의 오른쪽 영역에 표시됩니다.
- **`"bottom"`** — 최소화 된 자식 Frame 이 FrameSet 내부의 아랫쪽 영역에 표시됩니다.

**Remark**

- minimizedchildposition 속성값을 설정하지 않으면 "bottom" 으로 적용됩니다.


---

### minimizeheight

> Frames > FrameSet > Property > minimizeheight

**Description**

FrameSet 에서 최소화 된 자식 Frame 의 높이를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.minimizeheight[= nHeight]
```

**Setting Syntax**

```javascript
FrameSet00.minimizeheight = 25;
```
- **`nHeight`** — 최소화 된 자식 Frame 의 높이를 pixel 단위로 설정합니다.


---

### minimizewidth

> Frames > FrameSet > Property > minimizewidth

**Description**

FrameSet 에서 최소화 된 자식 Frame 의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.minimizewidth[= nWidth]
```

**Setting Syntax**

```javascript
FrameSet00.minimizewidth = 150;
```
- **`nWidth`** — 최소화 된 자식 Frame 의 너비를 pixel 단위로 설정합니다.


---

### name

> Frames > FrameSet > Property > name

**Description**

FrameSet 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### opacity

> Frames > FrameSet > Property > opacity

**Description**

FrameSet 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.opacity[= stropacity]
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8;
opacity : 80%;

* Script ( normal property )
this.FrameSet00.opacity = "0.8";
this.FrameSet00.opacity = 0.8;
this.FrameSet00.opacity = "80%";
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

### progressbardirection

> Frames > FrameSet > Property > progressbardirection

**Description**

FrameSet 의 StatusBar 에 표시되는 ProgressBar 의 진행방향을 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.progressbardirection[= enumDirection]
```

**Setting Syntax**

```javascript
enumDirection ::= 'forward' | 'backward'
```
- **`"forward"`** — ProgressBar 의 진행바가 왼쪽에서 오른쪽으로 증가합니다.
- **`"backward"`** — ProgressBar 의 진행바가 오른쪽에서 왼쪽으로 증가합니다.

**Remark**

- direction 속성값을 설정하지 않으면 "forward"로 적용됩니다.

- 진행중인 통신 상태는 StatusBar 의 ProgressBar 를 통해 확인할 수 있습니다.


---

### progressbargap

> Frames > FrameSet > Property > progressbargap

**Description**

FrameSet 의 StatusBar 에 표시되는 ProgressBar 의 오른쪽 공간 크기를 설정하는 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.progressbargap[= nSize]
```

**Setting Syntax**

- **`nSize`** — ProgressBar 의 오른쪽 공간 크기를 pixel 단위로 설정합니다.


---

### progressbarsize

> Frames > FrameSet > Property > progressbarsize

**Description**

FrameSet 의 StatusBar 에 표시되는 ProgressBar 의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.progressbarsize[= nSize]
```

**Setting Syntax**

- **`nSize`** — ProgressBar 의 너비를 pixel 단위로 설정합니다.


---

### progressbarsmooth

> Frames > FrameSet > Property > progressbarsmooth

**Description**

MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 진행바가 연속된 형태로 표시될 지 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.progressbarsmooth[= bSmooth]
```

**Setting Syntax**

```javascript
bSmooth ::= 'true' | 'false'
```
- **`"true"`** — 진행바가 끊어진 부분 없이 연속된 모양으로 표시됩니다.
- **`"false"`** — 진행바가 블럭형태로 표시됩니다.


---

### restorechildpositiontype

> Frames > FrameSet > Property > restorechildpositiontype

**Description**

FrameSet 의 하위 ChildFrame 중 하나가 최대화 될 때 나머지 ChildFrame 의 크기변경 기준을 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.restorechildpositiontype[= enumRestoreType]
```

**Setting Syntax**

```javascript
enumRestoreType ::= 'normal' | 'keepmaximizeposition'
```
```javascript
var objApp = nexacro.getApplication();

objApp.mainframe.FrameSet00.restorechildpositiontype = "keepmaximizeposition";
```
- **`"normal"`** — 하위 ChildFrame 중 하나가 최대화 될 때 최대화 되어 있던 ChildFrame 은 normal 크기로 변경됩니다.

최대화 되어 있던 ChildFrame 이 normal 상태의 마지막 크기로 변경(Restore)됩니다.
타이틀바의 시스템 버튼 중 크기복원 버튼 클릭 시 normal 상태의 마지막 크기로 변경(Restore)됩니다.
최대화 되어 있던 ChildFrame 의 크기가 normal 상태로 변경될 때 onsize 이벤트가 발생합니다.
- **`"keepmaximizeposition"`** — 하위 ChildFrame 중 하나가 최대화 될 때 최대화 되어 있던 ChildFrame 은 크기를 유지합니다.

최대화 되어 있던 ChildFrame 이 최대화 크기를 유지합니다.
타이틀바의 시스템 버튼 중 크기복원 버튼 클릭 시 최대화 크기를 유지합니다.
최대화 되어 있던 ChildFrame 의 크기가 변경되지 않으므로 onsize 이벤트가 발생하지 않습니다.

**Remark**

- restorechildpositiontype 속성값을 설정하지 않으면 "normal" 로 적용됩니다.

- restorechildpositiontype 속성은 성능향상을 목적으로 설정하는 속성입니다.
   FrameSet 의 하위 ChildFrame 중 하나가 최대화 될 때 최대화 되어 있던 ChildFrame 의 크기를 변경(Restore)시키지 않음으로서 성능을 향상시킵니다.

- restorechildpositiontype 속성은 최대화 되어 있던 ChildFrame 의 크기만 변경(Restore)시키지 않습니다.
   따라서 openstatus 속성은 "normal" 값으로 변경되고, 타이틀바의 시스템버튼도 그에 맞게 변경됩니다.


---

### right

> Frames > FrameSet > Property > right

**Description**

FrameSet 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.right [=nRight]
```

**Setting Syntax**

```javascript
nRight ::= <nVal>['px' | '%']
```
- **`<nVal>`** — FrameSet 의 우측 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### showcascadestatustext

> Frames > FrameSet > Property > showcascadestatustext

**Description**

FrameSet 의 StatusBar 에 하위 Frame 과 Form 의 statustext 속성값을 모두 표시할 지 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.showcascadestatustext[= bShow]
```

**Setting Syntax**

```javascript
bShow ::= 'true' | 'false'
```
- **`"true"`** — 하위 Frame 과 Form 의 statustext 속성값이 "-" 구분자를 사용하여 연속적으로 표시됩니다.
- **`"false"`** — FrameSet 의 statustext 속성값만 표시합니다.

**Remark**

- FrameSet 의 showstatusbar 속성값이 "true" 일 경우만 적용됩니다.

- FrameSet 보다 상위 Frame 의 StatusBar 는 상위 Frame 의 showcascadestatustext 속성값에 따라 표시됩니다.


---

### showcascadetitletext

> Frames > FrameSet > Property > showcascadetitletext

**Description**

FrameSet 의 TitleBar 에 하위 Frame 과 Form 의 titletext 속성값을 모두 표시할 지 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.showcascadetitletext[= bShow]
```

**Setting Syntax**

```javascript
bShow ::= 'true' | 'false'
```
- **`"true"`** — 하위 Frame 과 Form 의 titletext 속성값이 "-" 구분자를 사용하여 연속적으로 표시됩니다.
- **`"false"`** — FrameSet 의 titletext 속성값만 표시합니다.

**Remark**

- FrameSet 의 showtitlebar 속성값이 "true" 일 경우만 적용됩니다.

- FrameSet 보다 상위 Frame 의 TtileBar 는 상위 Frame 의 showcascadetitletext 속성값에 따라 표시됩니다.


---

### showstatusbar

> Frames > FrameSet > Property > showstatusbar

**Description**

FrameSet 에 StatusBar 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.showstatusbar[= bshowstatus]
```

**Setting Syntax**

```javascript
bshowstatus ::= 'true' | 'false'
```
```javascript
this.FrameSet00.showstatusbar = true;
```
- **`true`** — FrameSet 에 StatusBar 를 표시합니다.
- **`false`** — FrameSet 에 StatusBar 를 표시하지 않습니다.

**Remark**

- showstatusbar 속성값을 설정하지 않으면 false 로 적용됩니다.


---

### showtitlebar

> Frames > FrameSet > Property > showtitlebar

**Description**

FrameSet 의 TitleBar 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.showtitlebar[= bshowtitlebar]
```

**Setting Syntax**

```javascript
bshowtitlebar ::= 'true' | 'false'
```
- **`"true"`** — FrameSet 에 TitleBar 를 표시합니다.
- **`"false"`** — FrameSet 에 TitleBar 를 표시하지 않습니다.

**Remark**

- TitleBar 에는 FrameSet을(를) 최소화, 최대화, 종료할 수 있는 버튼이 있습니다.


---

### showtitleicon

> Frames > FrameSet > Property > showtitleicon

**Description**

FrameSet 의 타이틀바에 아이콘 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.showtitleicon[= bshowtitleicon]
```

**Setting Syntax**

```javascript
bshowtitleicon ::= 'true' | 'false'
```
- **`"true"`** — FrameSet 의 타이틀바에 아이콘을 표시합니다.
- **`"false"`** — FrameSet 의 타이틀바에 아이콘을 표시하지 않습니다.

**Remark**

- Theme 의 TitleBarControl > titleicon > -nexa-icon 속성에 설정된 아이콘 이미지를 아이콘으로 표시합니다.


---

### statusbar

> Frames > FrameSet > Property > statusbar

**Description**

FrameSet 의 상태바 오브젝트를 갖는 속성입니다.

**Syntax**

```javascript
FrameSet.statusbar
```

**Setting Syntax**

```javascript
var objApp = nexacro.getAppplication();
var objStatusBar = objApp.mainframe.statusbar;
```

**Remark**

- FrameSet 의 showstatusbar 속성값이 "true" 일 경우만 상태바 오브젝트가 생성됩니다.


---

### statusbarheight

> Frames > FrameSet > Property > statusbarheight

**Description**

FrameSet 의 StatusBar 높이를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.statusbarheight[= nHeight]
```

**Setting Syntax**

- **`nHeight`** — StatusBar 의 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- showstatubar 속성값이 "true" 일 경우 적용되는 속성입니다.

미지정시 기본값 : default : undefinded
값이 undefinded 일 경우  메인프레임은 30으로, 메인프레임이 아닌 프레임들은 20으로 동작


---

### statustext

> Frames > FrameSet > Property > statustext

**Description**

FrameSet 의 StatusBar 에 표시될 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.statustext[= strStatustext]
```

**Setting Syntax**

- **`strStatustext`** — StatusBar 에 표시될 텍스트를 설정합니다.

**Remark**

- showcascadestatustext 속성값이 true 이면 하위 Frame 또는 Form 의 statustext 속성값을 FrameSet 의 StatusBar 에 함께 표시합니다.
   FrameSet 하위에 여러개의 Frame 이 있을 경우엔 현재 활성화 된 Frame 의 statustext 속성값이 표시됩니다.

 
◆ WRE 제약
 
- Chrome, Firefox, Opera, Edge 브라우저는 보안상의 이유로 StatusBar 의 텍스트 변경을 지원하지 않습니다.

- 현재 StatusBar 의 텍스트를 변경할 수 있는 브라우저도 향후 기능이 차단될 수 있습니다.


---

### tabkeycirculation

> Frames > FrameSet > Property > tabkeycirculation

**Description**

탭키 또는 Shift+탭키 입력으로 포커스 이동 시 Form 내에서 마지막 컴포넌트 또는 첫번째 컴포넌트에서 다른 Frame으로 포커스를 이동하는 조건을 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.tabkeycirculation[= enumTabkeyCirculation]
```

**Setting Syntax**

```javascript
enumTabkeyCirculation ::= 'all' | 'all, no_minimize' | 'active_only' | 'auto'
```
```javascript
this.FrameSet00.tabkeycirculation = "auto";
```
- **`"all"`** — FrameSet 내 전체 Frame을 순환합니다 (기본값)
- **`"all,no_minimize"`** — 최소화된 창을 제외한 Frame을 순환합니다.
- **`"active_only"`** — active 상태의 창만 순환합니다.
- **`"auto"`** — arrange 메소드 실행 시 파라미터에 따라 동작이 달라집니다.
- 파라미터가 "cascade"인 경우: "active_only"로 동작합니다.
- 파라미터가 "cascade"가 아닌 경우: "all"로 동작합니다.

**Remark**

- tabkeycirculation 속성값을 설정하지 않으면 "all" 로 적용됩니다.
- Environment에서 tabkeycirculation 속성값을 "form,cycle" 또는 "form,nocycle"로 설정한 경우에는 프레임 간 포커스 이동은 하지 않습니다.


---

### titlebar

> Frames > FrameSet > Property > titlebar

**Description**

FrameSet 의 타이틀바 오브젝트를 갖는 속성입니다.

**Syntax**

```javascript
FrameSet.titlebar
```

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication();
var objTitleBar = objApp.mainframe.titlebar
```

**Remark**

- FrameSet 의 showtitlebar 속성값이 "true" 일 경우만 타이틀바 오브젝트가 생성됩니다.


---

### titlebarbuttongap

> Frames > FrameSet > Property > titlebarbuttongap

**Description**

FrameSet 의 TitleBar 에 표시되는 시스템 버튼의 간격을 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.titlebarbuttongap[= nGap]
```

**Setting Syntax**

- **`nGap`** — TitleBar 에 표시되는 시스템 버튼(최소/최대/종료)의 간격을 pixel 단위의 숫자로 설정합니다.

**Remark**

- showtitlebar 속성값이 "true" 일 때 적용되는 속성입니다.


---

### titlebarbuttonsize

> Frames > FrameSet > Property > titlebarbuttonsize

**Description**

FrameSet 의 타이틀바에 표시되는 시스템 버튼의 크기을 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.titlebarbuttonsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [<strHeight>]
```
- **`<strWidth>`** — 타이틀바에 표시되는 시스템 버튼(최소/최대/종료)의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 타이틀바에 표시되는 시스템 버튼(최소/최대/종료)의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- showtitlebar 속성값이 "true" 일 때 적용되는 속성입니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### titlebarheight

> Frames > FrameSet > Property > titlebarheight

**Description**

FrameSet 의 TitleBar 높이를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.titlebarheight[= nHeight]
```

**Setting Syntax**

- **`nHeight`** — FrameSet 의 TitleBar 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- titlebarheight 속성값을 설정하지 않으면 undefined 로 적용됩니다.
   undefined 가 적용되면 MainFrame 은 "30px" 로  표시되고, 다른 Frame 은 "20px" 로 표시됩니다.


---

### titletext

> Frames > FrameSet > Property > titletext

**Description**

 FrameSet 의 TitleBar 에 표시될 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.titletext[= strTitletext]
```

**Setting Syntax**

- **`strTitletext`** — TitleBar 에 표시될 텍스트를 설정합니다.

**Remark**

- showcascadetitletext  속성값이 "true"이면 하위 Frame 또는 Form 의 titletext 속성값을 FrameSet 의 TitleBar 에 함께 표시합니다.
  FrameSet 하위에 여러개의 Frame 이 있을 경우 현재 활성화 된 Frame 의 titletext 속성값이 표시됩니다.


---

### top

> Frames > FrameSet > Property > top

**Description**

FrameSet 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.top[= nTop]
```

**Setting Syntax**

```javascript
nTop ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — FrameSet 의 상단 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### visible

> Frames > FrameSet > Property > visible

**Description**

FrameSet 이(가) 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
this.FrameSet00.visible = true; 
this.FrameSet00.visible = false;
```
- **`"true"`** — FrameSet 을(를) 화면에 표시합니다.
- **`"false"`** — FrameSet 을(를) 화면에 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하는 즉시 컴포넌트의 표시 여부가 화면에 반영됩니다.

- visible 속성값이 "false"이면 컴포넌트가 화면에 표시되지 않고, 포커스를 받을 수 없으므로 입력이나 사용이 불가능합니다.

- Div 와 같은 컨테이너 컴포넌트의 visible 속성값을 "false"로 설정하면 자식 컴포넌트도 함께 화면에 표시되지 않습니다.

- visible 속성값이 "false"이어도 컴포넌트는 존재하기 때문에 스크립트로 제어가 가능합니다.

- 넥사크로 스튜디오에서는 visible 속성값을 'false'로 설정해도 디자인화면에서 사라지지 않습니다.


---

### width

> Frames > FrameSet > Property > width

**Description**

FrameSet 을(를) 표시하기 위한 너비를 설정하는 속성입니다.

**Syntax**

```javascript
FrameSet.width[= nWidth]
```

**Setting Syntax**

```javascript
nWidth ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — FrameSet 의 너비를 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 너비값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 너비값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### 메서드 (Methods)

### addChild

> Frames > FrameSet > Method > addChild

**Description**

스크립트로 동적 생성한 Frame 을 FrameSet 의 자식 Frame 으로 추가하는 메소드입니다.

**Syntax**

```javascript
FrameSet.addChild( strChildID, objFrame )
```

**Parameters**

```
자식으로 추가될 Frame 의 ID를 설정합니다.
```

**Return**

추가된 자식 Frame 의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

**Remark**

- addChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- 스크립트에서 동적으로 생성한 Frame 만 추가할 수 있습니다.
  동적으로 생성한 Frame 이 아닌 경우 오동작이 발생할 수 있습니다.

- 자식 Frame 의 세부 속성은 addChild() 메소드로 자식 Frame 을 추가 후 설정해야 합니다.

- 자식 Frame 으로 추가된 Frame 을 화면에 표시하기 위해서는 show() 메소드를 사용해야 합니다.

- 동적으로 추가된 Frame 을 제거하기 위해서는 removeChild() 메소드를 사용해야 합니다.

- removeChild() 메소드로 제거된 Frame 을 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.


---

### addEventHandler

> Frames > FrameSet > Method > addEventHandler

**Description**

FrameSet 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
FrameSet.addEventHandler( strEventID, objFunc, objTarget )
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

> Frames > FrameSet > Method > addEventHandlerLookup

**Description**

함수를 검색하여 FrameSet 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
FrameSet.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

### alert

> Frames > FrameSet > Method > alert

**Description**

FrameSet 의 경고 대화상자를 표시하는 메소드입니다.

**Syntax**

```javascript
FrameSet.alert( strText )
```

**Parameters**

```
대화상자에 표시할 텍스트를 설정합니다.
```

**Return**

없음

**Remark**

- FrameSet 의 중앙에 대화상자를 표시합니다.


---

### arrange

> Frames > FrameSet > Method > arrange

**Description**

FrameSet 의 자식 Frame 을 정렬하는 메소드입니다.

**Syntax**

```javascript
FrameSet.arrange( strArrangeType )
```

**Parameters**

```
자식 Frame 을 정렬하는 방법을 문자열로 설정합니다.

"cascade" 설정 시 자식 Frame 의 TitleBar 를 기준으로 자식 Frame을 계단식으로 배열합니다.
"vertical" 설정 시 자식 Frame 을 수직(왼쪽에서 오른쪽으로)으로 배열합니다.
"horizontal" 설정 시 자식 Frame 을 수평(위에서 아래로)으로 배열합니다.
"tilevertical" 설정 시 자식 Frame을 수직 바둑판 형태로 배열하고 여백부분은 마지막 행에 표시됩니다.
"tilehorizontal" 설정 시 자식 Frame을 수평 바둑판 형태로 배열하고 여백부분은 마지막 열에 표시됩니다.
```

**Return**

없음


---

### clearEventHandler

> Frames > FrameSet > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
FrameSet.clearEventHandler( strEventID )
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

### confirm

> Frames > FrameSet > Method > confirm

**Description**

 FrameSet 의 선택 대화상자를 표시하는 메소드입니다.

**Syntax**

```javascript
FrameSet.confirm( strText [,strCaption [,strType]] )
```

**Parameters**

```
대화상자에 표시할 텍스트를 설정합니다.
```

**Return**

표시된 선택 대화상자에서 "확인" 버튼을 선택하면 "true"를 반환합니다.
표시된 선택 대화상자에서 "취소" 버튼을 선택하면 "false"를 반환합니다.

**Remark**

- FrameSet 의 중앙에 선택 대화상자를 표시합니다.


---

### destroy

> Frames > FrameSet > Method > destroy

**Description**

스크립트에서 동적으로 생성한 FrameSet 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
FrameSet.destroy()
```

**Parameters**

var bSucc = this.FrameSet00.destroy();

**Return**

FrameSet 이(가) 정상적으로 삭제되면 true 를 반환합니다.

FrameSet 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 FrameSet 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildFrameSet.initFrameSet.show


---

### findEventHandler

> Frames > FrameSet > Method > findEventHandler

**Description**

FrameSet 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
FrameSet.findEventHandler( strEventID, objFunc, objTarget )
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

### getActiveFrame

> Frames > FrameSet > Method > getActiveFrame

**Description**

FrameSet 의 자식 Frame 중 활성화 상태인 Frame 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
FrameSet.getActiveFrame() ;
```

**Parameters**

var objApp = nexacro.getApplication() ;
var objActiveFrame = objApp.mainframe.frame.getActiveFrame() ;

**Return**

FrameSet 의 자식 Frame 중 활성화 상태일 Frame 오브젝트를 반환합니다.
FrameSet 의 자식 Frame 중 활성화 상태인 Frame 이 없을 경우 "null"을 반환합니다.

**Remark**

- 가장 최근에 활성화되어 최상위에 위치한 Frame 오브젝트를 반환합니다.


---

### getEventHandler

> Frames > FrameSet > Method > getEventHandler

**Description**

FrameSet 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
FrameSet.getEventHandler( strEventID, nIdx )
```

**Parameters**

```
핸들러 함수를 얻을 이벤트의 ID를 설정합니다.
```

**Return**

지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.

지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.


---

### getNativeHandle

> Frames > FrameSet > Method > getNativeHandle

**Description**

FrameSet이 속한 윈도우 핸들(HWND)값을 반환하는 메소드입니다.

**Syntax**

```javascript
FrameSet.getNativeHandle();
```

**Parameters**

var nHwnd = this.parent.getNativeHandle();

**Return**

FrameSet이 속한 윈도우 핸들(HWND)값


---

### getOffsetBottom

> Frames > FrameSet > Method > getOffsetBottom

**Description**

부모 Frame 의 Top 위치를 기준으로 FrameSet 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
FrameSet.getOffsetBottom();
```

**Parameters**

var objApp = nexacro.getApplication();

var nBottom = objApp.mainframe.frame.getOffsetBottom();

**Return**

부모 Frame 의 Top 위치를 기준으로 FrameSet 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 FrameSet 의 bottom 값을 부모 Frame 의 Top 위치를 기준으로 동적으로 계산합니다.


---

### getOffsetHeight

> Frames > FrameSet > Method > getOffsetHeight

**Description**

FrameSet 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
FrameSet.getOffsetHeight();
```

**Parameters**

var objApp = nexacro.getApplication() ;

var nHeight = objApp.mainframe.frame.getOffsetHeight( ) ;

**Return**

FrameSet 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 FrameSet 의 높이를 동적으로 계산합니다.


---

### getOffsetLeft

> Frames > FrameSet > Method > getOffsetLeft

**Description**

부모 Frame 의 Left 위치를 기준으로 FrameSet 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
FrameSet.getOffsetLeft();
```

**Parameters**

var objApp = nexacro.getApplication();

var nLeft = objApp.mainframe.frame.getOffsetLeft();

**Return**

부모 Frame 의 Left 위치를 기준으로 FrameSet 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 Frame 의 Left 위치를 기준으로 FrameSet 의 left 값을 동적으로 계산합니다.


---

### getOffsetRight

> Frames > FrameSet > Method > getOffsetRight

**Description**

부모 Frame 의 Left 위치를 기준으로 FrameSet 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
FrameSet.getOffsetLeft();
```

**Parameters**

var objApp = nexacro.getApplication();

var nRight = objApp.mainframe.frame.getOffsetRight();

**Return**

부모 Frame 의 Left 위치를 기준으로 FrameSet 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 Frame 의 Left 위치를 기준으로 FrameSet 의 right 값을 동적으로 계산합니다.


---

### getOffsetTop

> Frames > FrameSet > Method > getOffsetTop

**Description**

부모 Frame 의 Top 위치를 기준으로 FrameSet 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
FrameSet.getOffsetTop();
```

**Parameters**

var objApp = nexacro.getApplication();

var nTop = objApp.mainframe.frame.getOffsetTop();

**Return**

부모 Frame 의 Top 위치를 기준으로 FrameSet 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 FrameSet 의 top 값을 부모 Frame 의 Top 위치를 기준으로 동적으로 계산합니다.


---

### getOffsetWidth

> Frames > FrameSet > Method > getOffsetWidth

**Description**

FrameSet 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
FrameSet.getOffsetWidth();
```

**Parameters**

var objApp = nexacro.getApplication() ;

var nWidth = objApp.mainframe.frame.getOffsetWidth( ) ;

**Return**

FrameSet 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 FrameSet 의 너비를 동적으로 계산합니다.


---

### getOwnerFrame

> Frames > FrameSet > Method > getOwnerFrame

**Description**

FrameSet 이 소속된 부모 Frame 을 반환하는 메소드입니다.

**Syntax**

```javascript
FrameSet.getOwnerFrame()
```

**Parameters**

var objFrame = this.getOwnerFrame().getOwnerFrame() ;

**Return**

FrameSet 이 소속된 부모 Frame 오브젝트를 반환합니다.
FrameSet 이 소속된 Frame 이 없을 경우 "null"을 반환합니다.


---

### init

> Frames > FrameSet > Method > init

**Description**

스크립트로 FrameSet 을 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**

```javascript
FrameSet.init( strName, nLeft, nTop, nWidth, nHeight [, nRight, nBottom] )
```

**Parameters**

```
FrameSet 의 ID를 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- 위치관련 인수값에 단위를 사용할 경우 문자열로 설정하여야 합니다.

- 이미 show() 메소드가 호출된 경우에는 초기화가 끝난 상태입니다. 
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다. 

- 스크립트로 FrameSet 을 동적 생성한 후에 사용할 수 있습니다.
  동적으로 생성한 XComponenet 이 아닌 경우에는 오동작이 발생할 수 있습니다.

- 동적으로 생성한 FrameSet 을 부모 Frame 에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.


---

### insertChild

> Frames > FrameSet > Method > insertChild

**Description**

스크립트로 동적 생성한 Frame 을 FrameSet 의 자식 Frame 으로 특정 순서에 추가하는 메소드입니다.

**Syntax**

```javascript
FrameSet.insertChild( nIdx, strChildID, objComp )
```

**Parameters**

```
부모 Frame 에 추가 될 순서를 설정합니다.
"-1"로 설정할 경우 자식 Frame 중 제일 마지막에 추가됩니다.
```

**Return**

추가된 자식 Frame 의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

**Remark**

- 자식 Frame 은 선언된 순서에 따라 화면에 표시됩니다.
  따라서 nIdx 값에 따라 추가되는 Frame 의 화면표시 순서가 정해집니다.
  Frame 이 겹칠 경우 nIdx 값이 작은 Frame 이 nIdx 값이 큰 Frame 에게 가려지게 됩니다.

- insertChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- 스크립트에서 동적으로 생성한 Frame 만 추가할 수 있습니다.
  동적으로 생성한 Frame 이 아닌 경우 오동작이 발생할 수 있습니다.

- 자식 Frame 의 세부 속성은 insertChild() 메소드로 자식 Frame 을 추가 후 설정해야 합니다.

- 자식 Frame 으로 추가된 Frame 을 화면에 표시하기 위해서는 show() 메소드를 사용해야 합니다.

- 동적으로 추가된 Frame 을 제거하기 위해서는 removeChild() 메소드를 사용해야 합니다.

- removeChild() 메소드로 제거된 Frame 을 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.


---

### insertEventHandler

> Frames > FrameSet > Method > insertEventHandler

**Description**

FrameSet 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
FrameSet.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

> Frames > FrameSet > Method > move

**Description**

FrameSet 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
FrameSet.move( nLeft, nTop [, nWidth, nHeight [, nRight, nBottom]] )
```

**Parameters**

```
FrameSet 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 인수값에 "px" 또는 "%" 단위를 사용할 경우 문자열로 설정하여야 합니다.

- FrameSet 이 고정된 형태를 갖는 HFrameSet, VFrameSet, TileFrameSet 의 자식 Frame 일 경우 move() 메소드는 동작하지 않습니다.


---

### removeChild

> Frames > FrameSet > Method > removeChild

**Description**

FrameSet 에 동적으로 추가된 Frame 을 제거하는 메소드입니다.

**Syntax**

```javascript
FrameSet.removeChild( strChildID )
```

**Parameters**

```
제거할 자식 Frame 의 ID를 문자열로 설정합니다.
```

**Return**

Frame 제거에 성공하면 제거된 Frame 의 오브젝트를 반환합니다.
Frame 제거에 실패하면 "null"을 반환합니다.

**Remark**

- removeChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- addChild() 또는 insertChild() 메소드를 사용하여 동적으로 추가한 Frame 만 제거할 수 있습니다.
  동적으로 추가한 Frame 이 아닌 경우 오동작이 발생할 수 있습니다.

- removeChild() 메소드로 제거된 Frame 을 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.


---

### removeEventHandler

> Frames > FrameSet > Method > removeEventHandler

**Description**

FrameSet 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
FrameSet.removeEventHandler( strEventID, objFunc, objTarget )
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

> Frames > FrameSet > Method > removeEventHandlerLookup

**Description**

FrameSet 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
FrameSet.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

### setEventHandler

> Frames > FrameSet > Method > setEventHandler

**Description**

FrameSet 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
FrameSet.setEventHandler( strEventID, objFunc, objTarget )
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

> Frames > FrameSet > Method > setEventHandlerLookup

**Description**

FrameSet 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
FrameSet.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

> Frames > FrameSet > Method > setFocus

**Description**

FrameSet 을 활성화하고 포커스를 주는 메소드입니다.

**Syntax**

```javascript
FrameSet.setFocus()
```

**Parameters**

var objApp = nexacro.getApplication() ;
var objRemoveFrame = objApp.mainframe.frame.setFocus() ;

**Return**

없음

**Remark**

- Frame 에 다수의 자식 Frame 을 갖고 있을 때 특정 Frame 을 활성화하고 다른 Frame 보다 앞에 표시하는 메소드입니다.

- Frame 이 포커스 되면 Frame 내의 컴포넌트 중 마지막에 포커스를 가진 컴포넌트가 포커스를 갖습니다.


---

### setOffsetBottom

> Frames > FrameSet > Method > setOffsetBottom

**Description**

FrameSet 이 FrameSet 의 하위에 속해 있을 때 FrameSet 의 bottom 을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
FrameSet.setOffsetBottom( nBottom );
```

**Parameters**

```
부모 FrameSet 의 Top 위치를 기준으로 FrameSet 의 bottom 을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- FrameSet 의 부모 Frame 이 FrameSet 이 아니면 FrameSet 의 bottom 이 변경되지 않습니다.


---

### setOffsetHeight

> Frames > FrameSet > Method > setOffsetHeight

**Description**

FrameSet 이 FrameSet 의 하위에 속해 있을 때 FrameSet 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
FrameSet.setOffsetHeight( nHeight );
```

**Parameters**

```
FrameSet 의 높이를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 후 FrameSet 의 height 속성에 값이 설정됩니다.

- FrameSet 의 부모 Frame 이 FrameSet 이 아니면 FrameSet 의 높이가 변경되지 않습니다.


---

### setOffsetLeft

> Frames > FrameSet > Method > setOffsetLeft

**Description**

FrameSet 이 FrameSet 의 하위에 속해 있을 때 FrameSet 의 left 를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
FrameSet.setOffsetLeft( nLeft );
```

**Parameters**

```
부모 FrameSet 의 Left 위치를 기준으로 FrameSet 의 left 를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 후 FrameSet 의 left 속성에 값이 설정됩니다.

- FrameSet 의 부모 Frame 이 FrameSet 이 아니면 FrameSet 의 left 가 변경되지 않습니다.


---

### setOffsetRight

> Frames > FrameSet > Method > setOffsetRight

**Description**

FrameSet 이 FrameSet 의 하위에 속해 있을 때 FrameSet 의 right 를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
FrameSet.setOffsetRight( nRight );
```

**Parameters**

```
부모 FrameSet 의 Left 위치를 기준으로 FrameSet 의 right 를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- FrameSet 의 부모 Frame 이 FrameSet 이 아니면 FrameSet 의 right 가 변경되지 않습니다.


---

### setOffsetTop

> Frames > FrameSet > Method > setOffsetTop

**Description**

FrameSet 이 FrameSet 의 하위에 속해 있을 때 FrameSet 의 top 을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
FrameSet.setOffsetTop( nTop );
```

**Parameters**

```
부모 FrameSet 의 Top 위치를 기준으로 FrameSet 의 top 을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 후 FrameSet 의 top 속성에 값이 설정됩니다.

- FrameSet 의 부모 Frame 이 FrameSet 이 아니면 FrameSet 의 top 이 변경되지 않습니다.


---

### setOffsetWidth

> Frames > FrameSet > Method > setOffsetWidth

**Description**

FrameSet 이 FrameSet 의 하위에 속해 있을 때 FrameSet 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
FrameSet.setOffsetWidth( nWidth );
```

**Parameters**

```
FrameSet 의 너비를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 후 FrameSet 의 width 속성에 값이 설정됩니다.

- FrameSet 의 부모 Frame 이 FrameSet 이 아니면 FrameSet 의 너비가 변경되지 않습니다.


---

### show

> Frames > FrameSet > Method > show

**Description**

스크립트로 동적 생성한 FrameSet 을 화면에 표시하는 메소드입니다

**Syntax**

```javascript
FrameSet.show()
```

**Parameters**

var objApp = nexacro.getApplication() ;

var objFrame = new FrameSet();
objFrame.init( "FrameSet00", 30, 120, 196, 46 );

objApp.mainframe.frame.insertChild( 0, "FrameSet00", objFrame ) ;
objFrame.show();

**Return**

없음

**Remark**

- 스크립트로 FrameSet 을 동적 생성한 후에 사용 가능합니다.
  동적으로 생성한 FrameSet 이 아닌 경우에는 오동작 할 수 있습니다.

- 동적 생성한 FrameSet 을 추가하기 위해 부모 Frame 의 addChild() 메소드나 insertChild() 메소드를 사용합니다.
  추가된 FrameSet 을 표시하기 위해 show() 메소드를 사용합니다.
  부모 Frame 에 추가되지 않고 show() 메소드를 사용할 경우 에러가 발생합니다.


---

### 이벤트 (Events)

### onactivate

> Frames > FrameSet > Event > onactivate

**Description**

FrameSet 이 활성화 되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onactivate(obj:nexacro.FrameSet,e:nexacro.ActivateEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 앱이 활성화될 때 이벤트가 발생합니다.
- MainFrame > [Frameset] > ChildFrame > Form 순으로 이벤트가 발생합니다.
  ChildFrame 의 onactivate 이벤트가 발생한 후 ChildFrame 의 formurl 속성에 설정된 Form 에서 onactivate 이벤트가 발생합니다. 
- 운영체제에 따라 특정 동작 또는 시스템과 연결되어 이벤트가 발생할 수 있습니다.
  > 안드로이드
     앱 시작 시
     background 상태에서 다시 foreground 상태로 변경될 때
  > iOS
    앱 시작 시
    background 상태에서 다시 foreground 상태로 변경될 때
    키패드가 내려가면서 deactive 상태가 된 상태에서 Form에 포커스를 줄 때
    (WKWebView 내부에서 포커스 동작 시 시스템 이벤트 발생 기준과 같습니다).


---

### onbeforeclose

> Frames > FrameSet > Event > onbeforeclose

**Description**

FrameSet 이 종료되기 전에 발생하는 이벤트입니다.

**Syntax**

```javascript
onbeforeclose(obj:nexacro.FrameSet,e:nexacro.CloseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 문자열 설정 시 FrameSet 종료를 위한 확인창이 표시됩니다.
이벤트에서 리턴값으로 설정한 문자열이 종료를 위한 확인창에 사용됩니다.

이벤트에서 리턴값을 생략하거나 null, undefined, ""(Empty String) 으로 설정 시 확인창이 표시되지 않습니다.

**Remark**

- 일반적으로 어플리케이션 종료 전 사용자의 확인을 받을 때 사용하는 이벤트입니다.

- onbeforeclose 이벤트는 최하위부터 최상위로 전파되는 이벤트입니다.
   FrameSet 의 하위 오브젝트에 onbeforeclose 이벤트가 정의되어 있다면 최하위 오브젝트의 이벤트부터 차례로 수행됩니다.
   최종 onbeforeclose 이벤트 수행 후 각 이벤트의 리턴값은 누적되어 종료를 위한 확인창에 모두 표시됩니다.

- 종료를 위한 확인창에서 "확인"을 선택하면 onclose 이벤트가 발생하고 FrameSet 이 종료됩니다.
   종료를 위한 확인창에서 "취소"를 선택하면 onclose 이벤트가 발생하지 않고 FrameSet 이 종료되지 않습니다.


---

### onclose

> Frames > FrameSet > Event > onclose

**Description**

FrameSet 이 종료될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onclose(obj:nexacro.FrameSet,e:nexacro.CloseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- onclose 이벤트는 최하위부터 최상위로 전파되는 이벤트입니다.
   FrameSet 의 하위 오브젝트에 onclose 이벤트가 정의되어 있다면 최하위 오브젝트의 이벤트부터 차례로 수행됩니다.
   최종 onclose 이벤트 수행 후 FrameSet 이 종료됩니다.


---

### ondeactivate

> Frames > FrameSet > Event > ondeactivate

**Description**

FrameSet 이 비활성화 되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondeactivate(obj:nexacro.FrameSet,e:nexacro.ActivateEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 앱이 비활성화될 때 이벤트가 발생합니다.
- Form > ChildFrame > [Frameset] > MainFrame 순으로 이벤트가 발생합니다.
  ChildFrame 의 formurl 속성에 지정된 Form에서 ondeactivate 이벤트가 발생 한 후에 ChildFrame 의 ondeactivate 이벤트가 발생합니다.
- 운영체제에 따라 특정 동작 또는 시스템과 연결되어 이벤트가 발생할 수 있습니다.
  > 안드로이드
     다른 앱이 활성화될 때
     홈 키를 입력할 때
     화면을 끌 때
  > iOS
     다른 앱이 활성화될 때
     화면을 끌 때
     키패드가 내려갈 때
    (WKWebView 내부에서 포커스 동작 시 시스템 이벤트 발생 기준과 같습니다).


---

### onmove

> Frames > FrameSet > Event > onmove

**Description**

FrameSet 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmove(obj:nexacro.FrameSet,e:nexacro.MoveEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onorientationchange

> Frames > FrameSet > Event > onorientationchange

**Description**

모바일 기기의 화면 방향이 변경되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onorientationchange(obj:nexacro.FrameSet,e:nexacro.OrientationChangeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- onorientationchange  이벤트는 상위에서 하위로 이벤트가 발생합니다.
  모바일 기기의 방향 전환 시 MainFrame 의 onorientationchange 이벤트가 처음 발생한 후 Frame, Form 순서로 이벤트가 발생합니다.
  이때, preventDefault() 메소드로 이벤트 발생을 중지시킬 수 없습니다.

- onorientationchange 이벤트 내에서 MainFrame 크기 또는 시스템에서 값을 얻는 속성에 접근 시 변경된 값이 전달되지 않을 수 있습니다.
  모바일 기기마다 시스템 관련값의 갱신 시점이 다르고, onorientationchange 이벤트는 기기의 방향이 전환된 즉시 발생하기 때문입니다.


---

### onsize

> Frames > FrameSet > Event > onsize

**Description**

FrameSet 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsize(obj:nexacro.FrameSet,e:nexacro.SizeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onsyscommand

> Frames > FrameSet > Event > onsyscommand

**Description**

FrameSet 에 시스템명령(Command) 메시지가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsyscommand(obj:nexacro.FrameSet,e:nexacro.SysCommandEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 프레임으로 이벤트가 전파되고, 시스템명령이 수행됩니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 프레임으로 이벤트가 전파되지 않고, 시스템명령도 취소됩니다.

이벤트에서 리턴값을 생략하면 true 로 적용됩니다.

**Remark**

- 이벤트의 리턴값에 따라 상위 프레임으로 이벤트가 전파됩니다.

- 이벤트가 상위로 전파되는 중간에 이벤트 리턴값으로 false 가 반환되면 상위 프레임으로 이벤트가 전파되지 않고 시스템명령이 취소됩니다.

- 프레임의 최소/최대 버튼이 클릭되었을 때 onsyscommand 이벤트에서 false 를 반환하면 최소/최대화 명령이 취소됩니다.


---

## Frames > HFrameSet

### HFrameSet

> Frames > HFrameSet

**Description**

MainFrame 하위에 오는 Frame 으로써 애플리케이션의 화면 배열을 위한 기본단위 화면으로 사용됩니다. 

HFrameSet 을 하위에 FrameSet, HFrameSet, VFrameSet, TileFrameSet, ChildFrame 을 반복적으로 가질 수 있습니다.
또한 수평 방향으로 자동으로 하위 Frame 을 배열할 수 있는 기능이 있습니다.

**Structure**



**Property**

| Name | Description |
| --- | --- |
| all | HFrameSet 에 등록된 Frame 을 갖는 읽기전용 속성입니다. |
| background | HFrameSet 의 배경 영역을 설정하는 속성입니다. |
| border-radius | HFrameSet 의 모서리 모양을 설정하는 속성입니다. |
| bottom | HFrameSet 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다. |
| color | HFrameSet 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| cssclass | HFrameSet 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다. |
| cursor | HFrameSet 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| enable | HFrameSet 의 사용가능 여부를 설정하는 속성입니다. |
| enableevent | HFrameSet 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다. |
| font | HFrameSet 에서 사용하는 폰트를 설정하는 속성입니다. |
| frames | HFrameSet 에 등록된 자식 Frame 들을 Collection 형태로 갖는 읽기전용 속성입니다. |
| height | HFrameSet 을(를) 표시하기 위한 높이를 설정하는 속성입니다. |
| hotkey | HFrameSet 의 기본 액션을 수행하기 위한 단축키를 설정하는 속성입니다. |
| id | HFrameSet의 고유 식별자를 설정하는 속성입니다. |
| left | HFrameSet 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다. |
| name | HFrameSet 의 이름을 설정하는 속성입니다. |
| -nexa-border | HFrameSet 의 테두리를 설정하는 속성입니다. |
| -nexa-edge | HFrameSet 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-rtl-background-image | HFrameSet 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| -nexa-rtl-edge-image | HFrameSet 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| opacity | HFrameSet 영역의 투명도를 설정하는 속성입니다. |
| progressbardirection | HFrameSet 의 StatusBar 에 표시되는 ProgressBar 의 진행방향을 설정하는 속성입니다. |
| progressbargap | HFrameSet 의 StatusBar 에 표시되는 ProgressBar 의 오른쪽 공간 크기를 설정하는 설정하는 속성입니다. |
| progressbarsize | HFrameSet 의 StatusBar 에 표시되는 ProgressBar 의 너비를 설정하는 속성입니다. |
| progressbarsmooth | MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 진행바가 연속된 형태로 표시될 지 설정하는 속성입니다. |
| right | HFrameSet 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다. |
| separatesize | HFrameSet 에서 자식 Frame 들이 표시되는 너비를 자식 Frame 별로 설정하는 속성입니다. |
| showcascadestatustext | HFrameSet 의 StatusBar 에 하위 Frame 과 Form 의 statustext 속성값을 모두 표시할 지 설정하는 속성입니다. |
| showcascadetitletext | HFrameSet 의 TitleBar 에 하위 Frame 과 Form 의 titletext 속성값을 모두 표시할 지 설정하는 속성입니다. |
| showstatusbar | HFrameSet 에 StatusBar 표시 여부를 설정하는 속성입니다. |
| showtitlebar | HFrameSet 의 TitleBar 표시 여부를 설정하는 속성입니다. |
| showtitleicon | HFrameSet 의 타이틀바에 아이콘 표시 여부를 설정하는 속성입니다. |
| statusbar | HFrameSet 의 상태바 오브젝트를 갖는 속성입니다. |
| statusbarheight | HFrameSet 의 StatusBar 높이를 설정하는 속성입니다. |
| statustext | HFrameSet 의 StatusBar 에 표시될 텍스트를 설정하는 속성입니다. |
| titlebar | HFrameSet 의 타이틀바 오브젝트를 갖는 속성입니다. |
| titlebarbuttongap | HFrameSet 의 TitleBar 에 표시되는 시스템 버튼의 간격을 설정하는 속성입니다. |
| titlebarbuttonsize | HFrameSet 의 타이틀바에 표시되는 시스템 버튼의 크기을 설정하는 속성입니다. |
| titlebarheight | HFrameSet 의 TitleBar 높이를 설정하는 속성입니다. |
| titletext | HFrameSet 의 TitleBar 에 표시될 텍스트를 설정하는 속성입니다. |
| top | HFrameSet 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다. |
| visible | HFrameSet 이(가) 화면에 표시될지 여부를 설정하는 속성입니다. |
| width | HFrameSet 을(를) 표시하기 위한 너비를 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addChild | 스크립트로 동적 생성한 Frame 을 HFrameSet 의 자식 Frame 으로 추가하는 메소드입니다. |
| addEventHandler | HFrameSet 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 HFrameSet 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| alert | HFrameSet 의 경고 대화상자를 표시하는 메소드입니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| confirm | HFrameSet 의 선택 대화상자를 표시하는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 HFrameSet 을(를) 삭제하는 메소드입니다. |
| findEventHandler | HFrameSet 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getActiveFrame | HFrameSet 의 자식 Frame 중 활성화 상태인 Frame 오브젝트를 반환하는 메소드입니다. |
| getEventHandler | HFrameSet 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| getNativeHandle | HFrameSet이 속한 윈도우 핸들(HWND)값을 반환하는 메소드입니다. |
| getOffsetBottom | 부모 Frame 의 Top 위치를 기준으로 HFrameSet 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetHeight | HFrameSet 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetLeft | 부모 Frame 의 Left 위치를 기준으로 HFrameSet 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetRight | 부모 Frame 의 Left 위치를 기준으로 HFrameSet 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetTop | 부모 Frame 의 Top 위치를 기준으로 HFrameSet 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetWidth | HFrameSet 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOwnerFrame | HFrameSet 이 소속된 부모 Frame 을 반환하는 메소드입니다. |
| init | 스크립트로 HFrameSet 을 동적 생성한 후에 초기화하는 메소드입니다. |
| insertChild | 스크립트로 동적 생성한 Frame 을 HFrameSet 의 자식 Frame 으로 특정 순서에 추가하는 메소드입니다. |
| insertEventHandler | HFrameSet 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| move | HFrameSet 의 위치와 크기를 변경하는 메소드입니다. |
| removeChild | HFrameSet 에 동적으로 추가된 Frame 을 제거하는 메소드입니다. |
| removeEventHandler | HFrameSet 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | HFrameSet 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| setEventHandler | HFrameSet 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | HFrameSet 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| setFocus | HFrameSet 을 활성화하고 포커스를 주는 메소드입니다. |
| setOffsetBottom | HFrameSet 이 FrameSet 의 하위에 속해 있을 때 HFrameSet 의 bottom 을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetHeight | HFrameSet 이 FrameSet 의 하위에 속해 있을 때 HFrameSet 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetLeft | HFrameSet 이 FrameSet 의 하위에 속해 있을 때 HFrameSet 의 left 를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetRight | HFrameSet 이 FrameSet 의 하위에 속해 있을 때 HFrameSet 의 right 를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetTop | HFrameSet 이 FrameSet 의 하위에 속해 있을 때 HFrameSet 의 top 을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetWidth | HFrameSet 이 FrameSet 의 하위에 속해 있을 때 HFrameSet 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| show | 스크립트로 동적 생성한 HFrameSet 을 화면에 표시하는 메소드입니다 |

**Event**

| Name | Description |
| --- | --- |
| onactivate | HFrameSet 이 활성화 되었을 때 발생하는 이벤트입니다. |
| onbeforeclose | HFrameSet 이 종료되기 전에 발생하는 이벤트입니다. |
| onclose | HFrameSet 이 종료될 때 발생하는 이벤트입니다. |
| ondeactivate | HFrameSet 이 비활성화 되었을 때 발생하는 이벤트입니다. |
| onmove | HFrameSet 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| onorientationchange | 모바일 기기의 화면 방향이 변경되었을 때 발생하는 이벤트입니다. |
| onsize | HFrameSet 의 크기가 변경됐을 때 발생하는 이벤트입니다. |
| onsyscommand | HFrameSet 에 시스템명령(Command) 메시지가 들어왔을 때 발생하는 이벤트입니다. |

**Status**

컴포넌트가 비활성화된 상태

**Control**

| Name | TypeName |
| --- | --- |
| titlebar | nexacro.TitleBarControl |
| statusbar | nexacro.StatusBarControl |


---

### 속성 (Properties)

### -nexa-border

> Frames > HFrameSet > Property > -nexa-border

**Description**

HFrameSet 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.border[= strborder]
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
this.HFrameSet00.border = "1px solid #999999";
this.HFrameSet00.border = "1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999";
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

> Frames > HFrameSet > Property > -nexa-edge

**Description**

HFrameSet 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.edge[= stredge]
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
this.HFrameSet00.edge = "URL('./images/border.png')" 5px 5px;
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

- HFrameSet 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.


◆ WRE 제약

- <fixedwidth>,<fixedheight> 값이 이미지 사이즈의 1/2 을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-rtl-background-image

> Frames > HFrameSet > Property > -nexa-rtl-background-image

**Description**

HFrameSet 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.-nexa-rtl-background-image
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

> Frames > HFrameSet > Property > -nexa-rtl-edge-image

**Description**

HFrameSet 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.-nexa-rtl-edge-image
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

### all

> Frames > HFrameSet > Property > all

**Description**

HFrameSet 에 등록된 Frame 을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
HFrameSet.all
```

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication();
var objFrames = objApp.mainframe.[Frame구조].all;
```

**Remark**

- all 속성은 Collection 접근방식을 사용할 수 있습니다.
  HFrameSet.all[0], HFrameSet.all["ChildFrame0"], HFrameSet.all.length 등의 방법을 사용합니다.


---

### background

> Frames > HFrameSet > Property > background

**Description**

HFrameSet 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.background[= strbackground]
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
this.HFrameSet00.background = "#ffffaa";
this.HFrameSet00.background = ""URL('./images/smiley.gif')" no-repeat center center #ffffaa";
this.HFrameSet00.background = ""URL('./images/smiley.gif')" no-repeat center center /auto #ffffaa";
this.HFrameSet00.background = ""URL('./images/smiley.gif')" no-repeat center center /15px 15% #ffffaa";
this.HFrameSet00.background = "linear-gradient( red , blue , yellow )";
this.HFrameSet00.background = "linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0))";
this.HFrameSet00.background = ""URL('./images/smiley.gif')" border-box border-box #ffffaa";
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

"left" 설정 시 HFrameSet 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 HFrameSet 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 HFrameSet 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 HFrameSet 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 HFrameSet 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 HFrameSet 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
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

0 보다 작거나 100 보다 큰 값을 설정 시 HFrameSet 의 영역을 벗어난 가상의 위치로 적용됩니다.

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
예를 들어 <angle> 값이 "to left" 이면 HFrameSet 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 HFrameSet 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

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

0 보다 작거나 100 보다 큰 값을 설정 시 HFrameSet 의 영역을 벗어난 가상의 위치로 적용됩니다.
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
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 HFrameSet 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

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

> Frames > HFrameSet > Property > border-radius

**Description**

HFrameSet 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.borderRadius[= strborderradius]
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
this.HFrameSet00.borderRadius = "10px";
this.HFrameSet00.borderRadius = "5px 6px 10px / 5px 10px";
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

> Frames > HFrameSet > Property > bottom

**Description**

HFrameSet 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.bottom[= nBottom]
```

**Setting Syntax**

```javascript
nBottom ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — HFrameSet 의 하단 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### color

> Frames > HFrameSet > Property > color

**Description**

HFrameSet 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.color[= strcolor]
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
this.HFrameSet00.color = "#999999";
this.HFrameSet00.color = "rgb(255,0,0)";
this.HFrameSet00.color = "red";
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

> Frames > HFrameSet > Property > cssclass

**Description**

HFrameSet 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.cssclass[= strcssclass]
```

**Setting Syntax**

```javascript
strcssclass ::= <ClassName> [ , &ltClassName> ]*
```
```javascript
var objApp = nexacro.getApplication();

objApp.mainframe.HFramSet00.cssclass = "TestClass";
objApp.mainframe.HFramSet00.cssclass = "TestClass,TestClass2";
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

> Frames > HFrameSet > Property > cursor

**Description**

HFrameSet 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.cursor[= strCursor]
```

**Setting Syntax**

```javascript
strCursor ::= 'none' | 'auto' | 'default' | 'copy' | 'crosshair' | 'help' | 'move' | 'not-allowed' | 'pointer' | 'progress' | 'text' | 'wait' | 'ew-resize' | 'e-resize' | 'w-resize' | 'ns-resize' | 'n-resize' | 's-resize' | 'nesw-resize' | 'ne-resize' | 'sw-resize' | 'nwse-resize' | 'nw-resize' | 'se-resize'
```
```javascript
* XCSS
cursor : default;

* Script ( normal property )
this.HFrameSet00.cursor = "default";
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

> Frames > HFrameSet > Property > enable

**Description**

HFrameSet 의 사용가능 여부를 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.enable[= benable]
```

**Setting Syntax**

```javascript
benable ::= 'true' | 'false'
```
```javascript
this.HFrameSet00.enable = true; 
this.HFrameSet00.enable = false;
```
- **`true`** — HFrameSet 을(를) 사용할 수 있게 설정합니다.
- **`false`** — HFrameSet 을(를) 사용할 수 없게 설정합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "disabled" Status 가 적용됩니다.

**Remark**

- enable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enable 속성값이 false 이면 컴포넌트가 화면에 표시되지만 포커스나 입력을 받을 수 없습니다.

- Div 와 같은 컨테이너 컴포넌트의 enable 속성값을 false 로 설정하면 자식 컴포넌트도 모두 Disable 됩니다.


---

### enableevent

> Frames > HFrameSet > Property > enableevent

**Description**

HFrameSet 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.enableevent[= bEvent]
```

**Setting Syntax**

```javascript
bEvent ::= 'true' | 'false'
```
```javascript
this.HFrameSet00.enableevent = true;  

this.HFrameSet00.enableevent = false;
```
- **`true`** — HFrameSet 에서 이벤트가 발생하도록 설정합니다.
- **`false`** — HFrameSet 에서 이벤트가 발생하지 않도록 설정합니다.

**Remark**

- enableevent 속성을 false 로 설정하면 이벤트 발생으로 인한 처리속도 지연과 화면 깜빡임을 방지할 수 있습니다.


---

### font

> Frames > HFrameSet > Property > font

**Description**

HFrameSet 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.font[= strfont]
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
this.HFrameSet00.font = "bold 12pt/30px arial, sans-serif";
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

### frames

> Frames > HFrameSet > Property > frames

**Description**

HFrameSet 에 등록된 자식 Frame 들을 Collection 형태로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
HFrameSet.frames
```

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication();
var objFrame = objApp.mainframe.frame.frames[1];
```

**Remark**

- frames 속성은 Collection 접근방식을 사용할 수 있습니다.
  HFrameSet.frames[0], HFrameSet.frames["ChildFrame0"], HFrameSet.frames.length 등의 방법을 사용합니다.


---

### height

> Frames > HFrameSet > Property > height

**Description**

HFrameSet 을(를) 표시하기 위한 높이를 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.height[= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — HFrameSet 의 높이를 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 높이값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 높이값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### hotkey

> Frames > HFrameSet > Property > hotkey

**Description**

HFrameSet 의 기본 액션을 수행하기 위한 단축키를 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.hotkey[= strHotkey]
```

**Setting Syntax**

```javascript
this.HFrameSet00.hotkey = "G"; 
this.HFrameSet00.hotkey = "CTRL+A"; 
this.HFrameSet00.hotkey = "CTRL+ALT+X";
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

> Frames > HFrameSet > Property > id

**Description**

HFrameSet의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.id
```

**Setting Syntax**

- **`id`** — HFrameSet를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### left

> Frames > HFrameSet > Property > left

**Description**

HFrameSet 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.left [=nLeft]
```

**Setting Syntax**

```javascript
nLeft ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — HFrameSet 의 좌측 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### name

> Frames > HFrameSet > Property > name

**Description**

HFrameSet 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### opacity

> Frames > HFrameSet > Property > opacity

**Description**

HFrameSet 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.opacity[= stropacity]
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8;
opacity : 80%;

* Script ( normal property )
this.HFrameSet00.opacity = "0.8";
this.HFrameSet00.opacity = 0.8;
this.HFrameSet00.opacity = "80%";
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

### progressbardirection

> Frames > HFrameSet > Property > progressbardirection

**Description**

HFrameSet 의 StatusBar 에 표시되는 ProgressBar 의 진행방향을 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.progressbardirection[= enumDirection]
```

**Setting Syntax**

```javascript
enumDirection ::= 'forward' | 'backward'
```
- **`"forward"`** — ProgressBar 의 진행바가 왼쪽에서 오른쪽으로 증가합니다.
- **`"backward"`** — ProgressBar 의 진행바가 오른쪽에서 왼쪽으로 증가합니다.

**Remark**

- direction 속성값을 설정하지 않으면 "forward"로 적용됩니다.

- 진행중인 통신 상태는 StatusBar 의 ProgressBar 를 통해 확인할 수 있습니다.


---

### progressbargap

> Frames > HFrameSet > Property > progressbargap

**Description**

HFrameSet 의 StatusBar 에 표시되는 ProgressBar 의 오른쪽 공간 크기를 설정하는 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.progressbargap[= nSize]
```

**Setting Syntax**

- **`nSize`** — ProgressBar 의 오른쪽 공간 크기를 pixel 단위로 설정합니다.


---

### progressbarsize

> Frames > HFrameSet > Property > progressbarsize

**Description**

HFrameSet 의 StatusBar 에 표시되는 ProgressBar 의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.progressbarsize[= nSize]
```

**Setting Syntax**

- **`nSize`** — ProgressBar 의 너비를 pixel 단위로 설정합니다.


---

### progressbarsmooth

> Frames > HFrameSet > Property > progressbarsmooth

**Description**

MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 진행바가 연속된 형태로 표시될 지 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.progressbarsmooth[= bSmooth]
```

**Setting Syntax**

```javascript
bSmooth ::= 'true' | 'false'
```
- **`"true"`** — 진행바가 끊어진 부분 없이 연속된 모양으로 표시됩니다.
- **`"false"`** — 진행바가 블럭형태로 표시됩니다.


---

### right

> Frames > HFrameSet > Property > right

**Description**

HFrameSet 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.right [=nRight]
```

**Setting Syntax**

```javascript
nRight ::= <nVal>['px' | '%']
```
- **`<nVal>`** — HFrameSet 의 우측 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### separatesize

> Frames > HFrameSet > Property > separatesize

**Description**

HFrameSet 에서 자식 Frame 들이 표시되는 너비를 자식 Frame 별로 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.separatesize[= strSize]
```

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication();

objApp.mainframe.HFramSet00.separatesize = "200,*,400,2*";
```
- **`strSize`** — 각 자식 Frame 별로 표시될 너비를 콤마(",")로 구분하여 설정합니다.

너비를 숫자로 설정 시 해당 자식 Frame 의 고정 너비로 적용됩니다.
너비에 "*" 기호를 사용할 경우 자식 Frame 의 너비가 비율로 적용됩니다.
"2*", "3*" 형태로 설정 시 기준값에 2배 비율, 3배 비율로 적용됩니다.

자식 Frame 수보다 설정된 너비 갯수가 적을 경우 설정값이 없는 자식 Frame 은 "*" 로 적용됩니다.
자식 Frame 수보다 설정된 너비 갯수가 많을 경우 나머지 설정값은 무시됩니다.

**Remark**

- separatesize 속성값에 비율을 설정하였을 경우 비율의 기준값은 전체 HFrameSet 너비에서 고정 너비값을 빼고 계산합니다.

  ex) HFrame 너비가 "1000" 이고, separatesize 속성값이 "200,*,400,4*" 일 때
       비율로 처리될 너비는 전체 너비 "1000" 에서 고정너비인 "600"(200+400)을 뺀 "400" 이 되고,
       비율의 기준값은 "400" 에서 비율값인 "5*"(* + 4*)을 나눈 "80"이 기준값이 됩니다.

       따라서 첫번째 자식 Frame 의 너비는 고정값인 "200"
       두번째 자식 Frame 의 너비는 기준값 "80"에 대한 1배 비율인 "80"
       세번째 자식 Frame 의 너비는 고정값인 "400"
       마지막 자식 Frame 의 너비는 기준값 "80"에 대한 4배 비율인 "320" 이 됩니다.


---

### showcascadestatustext

> Frames > HFrameSet > Property > showcascadestatustext

**Description**

HFrameSet 의 StatusBar 에 하위 Frame 과 Form 의 statustext 속성값을 모두 표시할 지 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.showcascadestatustext[= bShow]
```

**Setting Syntax**

```javascript
bShow ::= 'true' | 'false'
```
- **`"true"`** — 하위 Frame 과 Form 의 statustext 속성값이 "-" 구분자를 사용하여 연속적으로 표시됩니다.
- **`"false"`** — HFrameSet 의 statustext 속성값만 표시합니다.

**Remark**

- HFrameSet 의 showstatusbar 속성값이 "true" 일 경우만 적용됩니다.

- HFrameSet 보다 상위 Frame 의 StatusBar 는 상위 Frame 의 showcascadestatustext 속성값에 따라 표시됩니다.


---

### showcascadetitletext

> Frames > HFrameSet > Property > showcascadetitletext

**Description**

HFrameSet 의 TitleBar 에 하위 Frame 과 Form 의 titletext 속성값을 모두 표시할 지 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.showcascadetitletext[= bShow]
```

**Setting Syntax**

```javascript
bShow ::= 'true' | 'false'
```
- **`"true"`** — 하위 Frame 과 Form 의 titletext 속성값이 "-" 구분자를 사용하여 연속적으로 표시됩니다.
- **`"false"`** — HFrameSet 의 titletext 속성값만 표시합니다.

**Remark**

- HFrameSet 의 showtitlebar 속성값이 "true" 일 경우만 적용됩니다.

- HFrameSet 보다 상위 Frame 의 TtileBar 는 상위 Frame 의 showcascadetitletext 속성값에 따라 표시됩니다.


---

### showstatusbar

> Frames > HFrameSet > Property > showstatusbar

**Description**

HFrameSet 에 StatusBar 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.showstatusbar[= bshowstatus]
```

**Setting Syntax**

```javascript
bshowstatus ::= 'true' | 'false'
```
```javascript
this.HFrameSet00.showstatusbar = true;
```
- **`true`** — HFrameSet 에 StatusBar 를 표시합니다.
- **`false`** — HFrameSet 에 StatusBar 를 표시하지 않습니다.

**Remark**

- showstatusbar 속성값을 설정하지 않으면 false 로 적용됩니다.


---

### showtitlebar

> Frames > HFrameSet > Property > showtitlebar

**Description**

HFrameSet 의 TitleBar 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.showtitlebar[= bshowtitlebar]
```

**Setting Syntax**

```javascript
bshowtitlebar ::= 'true' | 'false'
```
- **`"true"`** — HFrameSet 에 TitleBar 를 표시합니다.
- **`"false"`** — HFrameSet 에 TitleBar 를 표시하지 않습니다.

**Remark**

- TitleBar 에는 HFrameSet을(를) 최소화, 최대화, 종료할 수 있는 버튼이 있습니다.


---

### showtitleicon

> Frames > HFrameSet > Property > showtitleicon

**Description**

HFrameSet 의 타이틀바에 아이콘 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.showtitleicon[= bshowtitleicon]
```

**Setting Syntax**

```javascript
bshowtitleicon ::= 'true' | 'false'
```
- **`"true"`** — HFrameSet 의 타이틀바에 아이콘을 표시합니다.
- **`"false"`** — HFrameSet 의 타이틀바에 아이콘을 표시하지 않습니다.

**Remark**

- Theme 의 TitleBarControl > titleicon > -nexa-icon 속성에 설정된 아이콘 이미지를 아이콘으로 표시합니다.


---

### statusbar

> Frames > HFrameSet > Property > statusbar

**Description**

HFrameSet 의 상태바 오브젝트를 갖는 속성입니다.

**Syntax**

```javascript
HFrameSet.statusbar
```

**Setting Syntax**

```javascript
var objApp = nexacro.getAppplication();
var objStatusBar = objApp.mainframe.statusbar;
```

**Remark**

- HFrameSet 의 showstatusbar 속성값이 "true" 일 경우만 상태바 오브젝트가 생성됩니다.


---

### statusbarheight

> Frames > HFrameSet > Property > statusbarheight

**Description**

HFrameSet 의 StatusBar 높이를 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.statusbarheight[= nHeight]
```

**Setting Syntax**

- **`nHeight`** — StatusBar 의 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- showstatubar 속성값이 "true" 일 경우 적용되는 속성입니다.

미지정시 기본값 : default : undefinded
값이 undefinded 일 경우  메인프레임은 30으로, 메인프레임이 아닌 프레임들은 20으로 동작


---

### statustext

> Frames > HFrameSet > Property > statustext

**Description**

HFrameSet 의 StatusBar 에 표시될 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.statustext[= strStatustext]
```

**Setting Syntax**

- **`strStatustext`** — StatusBar 에 표시될 텍스트를 설정합니다.

**Remark**

- showcascadestatustext 속성값이 true 이면 하위 Frame 또는 Form 의 statustext 속성값을 HFrameSet 의 StatusBar 에 함께 표시합니다.
   HFrameSet 하위에 여러개의 Frame 이 있을 경우엔 현재 활성화 된 Frame 의 statustext 속성값이 표시됩니다.

 
◆ WRE 제약
 
- Chrome, Firefox, Opera, Edge 브라우저는 보안상의 이유로 StatusBar 의 텍스트 변경을 지원하지 않습니다.

- 현재 StatusBar 의 텍스트를 변경할 수 있는 브라우저도 향후 기능이 차단될 수 있습니다.


---

### titlebar

> Frames > HFrameSet > Property > titlebar

**Description**

HFrameSet 의 타이틀바 오브젝트를 갖는 속성입니다.

**Syntax**

```javascript
HFrameSet.titlebar
```

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication();
var objTitleBar = objApp.mainframe.titlebar
```

**Remark**

- HFrameSet 의 showtitlebar 속성값이 "true" 일 경우만 타이틀바 오브젝트가 생성됩니다.


---

### titlebarbuttongap

> Frames > HFrameSet > Property > titlebarbuttongap

**Description**

HFrameSet 의 TitleBar 에 표시되는 시스템 버튼의 간격을 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.titlebarbuttongap[= nGap]
```

**Setting Syntax**

- **`nGap`** — TitleBar 에 표시되는 시스템 버튼(최소/최대/종료)의 간격을 pixel 단위의 숫자로 설정합니다.

**Remark**

- showtitlebar 속성값이 "true" 일 때 적용되는 속성입니다.


---

### titlebarbuttonsize

> Frames > HFrameSet > Property > titlebarbuttonsize

**Description**

HFrameSet 의 타이틀바에 표시되는 시스템 버튼의 크기을 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.titlebarbuttonsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [<strHeight>]
```
- **`<strWidth>`** — 타이틀바에 표시되는 시스템 버튼(최소/최대/종료)의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 타이틀바에 표시되는 시스템 버튼(최소/최대/종료)의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- showtitlebar 속성값이 "true" 일 때 적용되는 속성입니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### titlebarheight

> Frames > HFrameSet > Property > titlebarheight

**Description**

HFrameSet 의 TitleBar 높이를 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.titlebarheight[= nHeight]
```

**Setting Syntax**

- **`nHeight`** — HFrameSet 의 TitleBar 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- titlebarheight 속성값을 설정하지 않으면 undefined 로 적용됩니다.
   undefined 가 적용되면 MainFrame 은 "30px" 로  표시되고, 다른 Frame 은 "20px" 로 표시됩니다.


---

### titletext

> Frames > HFrameSet > Property > titletext

**Description**

 HFrameSet 의 TitleBar 에 표시될 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.titletext[= strTitletext]
```

**Setting Syntax**

- **`strTitletext`** — TitleBar 에 표시될 텍스트를 설정합니다.

**Remark**

- showcascadetitletext  속성값이 "true"이면 하위 Frame 또는 Form 의 titletext 속성값을 HFrameSet 의 TitleBar 에 함께 표시합니다.
  HFrameSet 하위에 여러개의 Frame 이 있을 경우 현재 활성화 된 Frame 의 titletext 속성값이 표시됩니다.


---

### top

> Frames > HFrameSet > Property > top

**Description**

HFrameSet 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.top[= nTop]
```

**Setting Syntax**

```javascript
nTop ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — HFrameSet 의 상단 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### visible

> Frames > HFrameSet > Property > visible

**Description**

HFrameSet 이(가) 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
this.HFrameSet00.visible = true; 
this.HFrameSet00.visible = false;
```
- **`"true"`** — HFrameSet 을(를) 화면에 표시합니다.
- **`"false"`** — HFrameSet 을(를) 화면에 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하는 즉시 컴포넌트의 표시 여부가 화면에 반영됩니다.

- visible 속성값이 "false"이면 컴포넌트가 화면에 표시되지 않고, 포커스를 받을 수 없으므로 입력이나 사용이 불가능합니다.

- Div 와 같은 컨테이너 컴포넌트의 visible 속성값을 "false"로 설정하면 자식 컴포넌트도 함께 화면에 표시되지 않습니다.

- visible 속성값이 "false"이어도 컴포넌트는 존재하기 때문에 스크립트로 제어가 가능합니다.

- 넥사크로 스튜디오에서는 visible 속성값을 'false'로 설정해도 디자인화면에서 사라지지 않습니다.


---

### width

> Frames > HFrameSet > Property > width

**Description**

HFrameSet 을(를) 표시하기 위한 너비를 설정하는 속성입니다.

**Syntax**

```javascript
HFrameSet.width[= nWidth]
```

**Setting Syntax**

```javascript
nWidth ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — HFrameSet 의 너비를 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 너비값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 너비값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### 메서드 (Methods)

### addChild

> Frames > HFrameSet > Method > addChild

**Description**

스크립트로 동적 생성한 Frame 을 HFrameSet 의 자식 Frame 으로 추가하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.addChild( strChildID, objFrame )
```

**Parameters**

```
자식으로 추가될 Frame 의 ID를 설정합니다.
```

**Return**

추가된 자식 Frame 의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

**Remark**

- addChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- 스크립트에서 동적으로 생성한 Frame 만 추가할 수 있습니다.
  동적으로 생성한 Frame 이 아닌 경우 오동작이 발생할 수 있습니다.

- 자식 Frame 의 세부 속성은 addChild() 메소드로 자식 Frame 을 추가 후 설정해야 합니다.

- 자식 Frame 으로 추가된 Frame 을 화면에 표시하기 위해서는 show() 메소드를 사용해야 합니다.

- 동적으로 추가된 Frame 을 제거하기 위해서는 removeChild() 메소드를 사용해야 합니다.

- removeChild() 메소드로 제거된 Frame 을 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.


---

### addEventHandler

> Frames > HFrameSet > Method > addEventHandler

**Description**

HFrameSet 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.addEventHandler( strEventID, objFunc, objTarget )
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

> Frames > HFrameSet > Method > addEventHandlerLookup

**Description**

함수를 검색하여 HFrameSet 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

### alert

> Frames > HFrameSet > Method > alert

**Description**

HFrameSet 의 경고 대화상자를 표시하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.alert( strText )
```

**Parameters**

```
대화상자에 표시할 텍스트를 설정합니다.
```

**Return**

없음

**Remark**

- HFrameSet 의 중앙에 대화상자를 표시합니다.


---

### clearEventHandler

> Frames > HFrameSet > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.clearEventHandler( strEventID )
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

### confirm

> Frames > HFrameSet > Method > confirm

**Description**

 HFrameSet 의 선택 대화상자를 표시하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.confirm( strText [,strCaption [,strType]] )
```

**Parameters**

```
대화상자에 표시할 텍스트를 설정합니다.
```

**Return**

표시된 선택 대화상자에서 "확인" 버튼을 선택하면 "true"를 반환합니다.
표시된 선택 대화상자에서 "취소" 버튼을 선택하면 "false"를 반환합니다.

**Remark**

- HFrameSet 의 중앙에 선택 대화상자를 표시합니다.


---

### destroy

> Frames > HFrameSet > Method > destroy

**Description**

스크립트에서 동적으로 생성한 HFrameSet 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.destroy()
```

**Parameters**

var bSucc = this.HFrameSet00.destroy();

**Return**

HFrameSet 이(가) 정상적으로 삭제되면 true 를 반환합니다.

HFrameSet 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 HFrameSet 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildHFrameSet.initHFrameSet.show


---

### findEventHandler

> Frames > HFrameSet > Method > findEventHandler

**Description**

HFrameSet 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.findEventHandler( strEventID, objFunc, objTarget )
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

### getActiveFrame

> Frames > HFrameSet > Method > getActiveFrame

**Description**

HFrameSet 의 자식 Frame 중 활성화 상태인 Frame 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.getActiveFrame() ;
```

**Parameters**

var objApp = nexacro.getApplication() ;
var objActiveFrame = objApp.mainframe.frame.getActiveFrame() ;

**Return**

HFrameSet 의 자식 Frame 중 활성화 상태일 Frame 오브젝트를 반환합니다.
HFrameSet 의 자식 Frame 중 활성화 상태인 Frame 이 없을 경우 "null"을 반환합니다.

**Remark**

- 가장 최근에 활성화되어 최상위에 위치한 Frame 오브젝트를 반환합니다.


---

### getEventHandler

> Frames > HFrameSet > Method > getEventHandler

**Description**

HFrameSet 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.getEventHandler( strEventID, nIdx )
```

**Parameters**

```
핸들러 함수를 얻을 이벤트의 ID를 설정합니다.
```

**Return**

지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.

지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.


---

### getNativeHandle

> Frames > HFrameSet > Method > getNativeHandle

**Description**

HFrameSet이 속한 윈도우 핸들(HWND)값을 반환하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.getNativeHandle();
```

**Parameters**

var nHwnd = this.parent.getNativeHandle();

**Return**

HFrameSet이 속한 윈도우 핸들(HWND)값


---

### getOffsetBottom

> Frames > HFrameSet > Method > getOffsetBottom

**Description**

부모 Frame 의 Top 위치를 기준으로 HFrameSet 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.getOffsetBottom();
```

**Parameters**

var objApp = nexacro.getApplication();

var nBottom = objApp.mainframe.frame.getOffsetBottom();

**Return**

부모 Frame 의 Top 위치를 기준으로 HFrameSet 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 HFrameSet 의 bottom 값을 부모 Frame 의 Top 위치를 기준으로 동적으로 계산합니다.


---

### getOffsetHeight

> Frames > HFrameSet > Method > getOffsetHeight

**Description**

HFrameSet 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.getOffsetHeight();
```

**Parameters**

var objApp = nexacro.getApplication() ;

var nHeight = objApp.mainframe.frame.getOffsetHeight( ) ;

**Return**

HFrameSet 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 HFrameSet 의 높이를 동적으로 계산합니다.


---

### getOffsetLeft

> Frames > HFrameSet > Method > getOffsetLeft

**Description**

부모 Frame 의 Left 위치를 기준으로 HFrameSet 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.getOffsetLeft();
```

**Parameters**

var objApp = nexacro.getApplication();

var nLeft = objApp.mainframe.frame.getOffsetLeft();

**Return**

부모 Frame 의 Left 위치를 기준으로 HFrameSet 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 Frame 의 Left 위치를 기준으로 HFrameSet 의 left 값을 동적으로 계산합니다.


---

### getOffsetRight

> Frames > HFrameSet > Method > getOffsetRight

**Description**

부모 Frame 의 Left 위치를 기준으로 HFrameSet 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.getOffsetLeft();
```

**Parameters**

var objApp = nexacro.getApplication();

var nRight = objApp.mainframe.frame.getOffsetRight();

**Return**

부모 Frame 의 Left 위치를 기준으로 HFrameSet 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 Frame 의 Left 위치를 기준으로 HFrameSet 의 right 값을 동적으로 계산합니다.


---

### getOffsetTop

> Frames > HFrameSet > Method > getOffsetTop

**Description**

부모 Frame 의 Top 위치를 기준으로 HFrameSet 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.getOffsetTop();
```

**Parameters**

var objApp = nexacro.getApplication();

var nTop = objApp.mainframe.frame.getOffsetTop();

**Return**

부모 Frame 의 Top 위치를 기준으로 HFrameSet 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 HFrameSet 의 top 값을 부모 Frame 의 Top 위치를 기준으로 동적으로 계산합니다.


---

### getOffsetWidth

> Frames > HFrameSet > Method > getOffsetWidth

**Description**

HFrameSet 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.getOffsetWidth();
```

**Parameters**

var objApp = nexacro.getApplication() ;

var nWidth = objApp.mainframe.frame.getOffsetWidth( ) ;

**Return**

HFrameSet 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 HFrameSet 의 너비를 동적으로 계산합니다.


---

### getOwnerFrame

> Frames > HFrameSet > Method > getOwnerFrame

**Description**

HFrameSet 이 소속된 부모 Frame 을 반환하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.getOwnerFrame()
```

**Parameters**

var objFrame = this.getOwnerFrame().getOwnerFrame() ;

**Return**

HFrameSet 이 소속된 부모 Frame 오브젝트를 반환합니다.
HFrameSet 이 소속된 Frame 이 없을 경우 "null"을 반환합니다.


---

### init

> Frames > HFrameSet > Method > init

**Description**

스크립트로 HFrameSet 을 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.init( strName, nLeft, nTop, nWidth, nHeight [, nRight, nBottom] )
```

**Parameters**

```
HFrameSet 의 ID를 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- 위치관련 인수값에 단위를 사용할 경우 문자열로 설정하여야 합니다.

- 이미 show() 메소드가 호출된 경우에는 초기화가 끝난 상태입니다. 
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다. 

- 스크립트로 HFrameSet 을 동적 생성한 후에 사용할 수 있습니다.
  동적으로 생성한 XComponenet 이 아닌 경우에는 오동작이 발생할 수 있습니다.

- 동적으로 생성한 HFrameSet 을 부모 Frame 에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.


---

### insertChild

> Frames > HFrameSet > Method > insertChild

**Description**

스크립트로 동적 생성한 Frame 을 HFrameSet 의 자식 Frame 으로 특정 순서에 추가하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.insertChild( nIdx, strChildID, objComp )
```

**Parameters**

```
부모 Frame 에 추가 될 순서를 설정합니다.
"-1"로 설정할 경우 자식 Frame 중 제일 마지막에 추가됩니다.
```

**Return**

추가된 자식 Frame 의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

**Remark**

- 자식 Frame 은 선언된 순서에 따라 화면에 표시됩니다.
  따라서 nIdx 값에 따라 추가되는 Frame 의 화면표시 순서가 정해집니다.
  Frame 이 겹칠 경우 nIdx 값이 작은 Frame 이 nIdx 값이 큰 Frame 에게 가려지게 됩니다.

- insertChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- 스크립트에서 동적으로 생성한 Frame 만 추가할 수 있습니다.
  동적으로 생성한 Frame 이 아닌 경우 오동작이 발생할 수 있습니다.

- 자식 Frame 의 세부 속성은 insertChild() 메소드로 자식 Frame 을 추가 후 설정해야 합니다.

- 자식 Frame 으로 추가된 Frame 을 화면에 표시하기 위해서는 show() 메소드를 사용해야 합니다.

- 동적으로 추가된 Frame 을 제거하기 위해서는 removeChild() 메소드를 사용해야 합니다.

- removeChild() 메소드로 제거된 Frame 을 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.


---

### insertEventHandler

> Frames > HFrameSet > Method > insertEventHandler

**Description**

HFrameSet 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

> Frames > HFrameSet > Method > move

**Description**

HFrameSet 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.move( nLeft, nTop [, nWidth, nHeight [, nRight, nBottom]] )
```

**Parameters**

```
HFrameSet 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 인수값에 "px" 또는 "%" 단위를 사용할 경우 문자열로 설정하여야 합니다.

- HFrameSet 이 고정된 형태를 갖는 HFrameSet, VFrameSet, TileFrameSet 의 자식 Frame 일 경우 move() 메소드는 동작하지 않습니다.


---

### removeChild

> Frames > HFrameSet > Method > removeChild

**Description**

HFrameSet 에 동적으로 추가된 Frame 을 제거하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.removeChild( strChildID )
```

**Parameters**

```
제거할 자식 Frame 의 ID를 문자열로 설정합니다.
```

**Return**

Frame 제거에 성공하면 제거된 Frame 의 오브젝트를 반환합니다.
Frame 제거에 실패하면 "null"을 반환합니다.

**Remark**

- removeChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- addChild() 또는 insertChild() 메소드를 사용하여 동적으로 추가한 Frame 만 제거할 수 있습니다.
  동적으로 추가한 Frame 이 아닌 경우 오동작이 발생할 수 있습니다.

- removeChild() 메소드로 제거된 Frame 을 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.


---

### removeEventHandler

> Frames > HFrameSet > Method > removeEventHandler

**Description**

HFrameSet 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.removeEventHandler( strEventID, objFunc, objTarget )
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

> Frames > HFrameSet > Method > removeEventHandlerLookup

**Description**

HFrameSet 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

### setEventHandler

> Frames > HFrameSet > Method > setEventHandler

**Description**

HFrameSet 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.setEventHandler( strEventID, objFunc, objTarget )
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

> Frames > HFrameSet > Method > setEventHandlerLookup

**Description**

HFrameSet 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

> Frames > HFrameSet > Method > setFocus

**Description**

HFrameSet 을 활성화하고 포커스를 주는 메소드입니다.

**Syntax**

```javascript
HFrameSet.setFocus()
```

**Parameters**

var objApp = nexacro.getApplication() ;
var objRemoveFrame = objApp.mainframe.frame.setFocus() ;

**Return**

없음

**Remark**

- Frame 에 다수의 자식 Frame 을 갖고 있을 때 특정 Frame 을 활성화하고 다른 Frame 보다 앞에 표시하는 메소드입니다.

- Frame 이 포커스 되면 Frame 내의 컴포넌트 중 마지막에 포커스를 가진 컴포넌트가 포커스를 갖습니다.


---

### setOffsetBottom

> Frames > HFrameSet > Method > setOffsetBottom

**Description**

HFrameSet 이 FrameSet 의 하위에 속해 있을 때 HFrameSet 의 bottom 을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.setOffsetBottom( nBottom );
```

**Parameters**

```
부모 FrameSet 의 Top 위치를 기준으로 HFrameSet 의 bottom 을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- HFrameSet 의 부모 Frame 이 FrameSet 이 아니면 HFrameSet 의 bottom 이 변경되지 않습니다.


---

### setOffsetHeight

> Frames > HFrameSet > Method > setOffsetHeight

**Description**

HFrameSet 이 FrameSet 의 하위에 속해 있을 때 HFrameSet 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.setOffsetHeight( nHeight );
```

**Parameters**

```
HFrameSet 의 높이를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 후 HFrameSet 의 height 속성에 값이 설정됩니다.

- HFrameSet 의 부모 Frame 이 FrameSet 이 아니면 HFrameSet 의 높이가 변경되지 않습니다.


---

### setOffsetLeft

> Frames > HFrameSet > Method > setOffsetLeft

**Description**

HFrameSet 이 FrameSet 의 하위에 속해 있을 때 HFrameSet 의 left 를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.setOffsetLeft( nLeft );
```

**Parameters**

```
부모 FrameSet 의 Left 위치를 기준으로 HFrameSet 의 left 를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 후 HFrameSet 의 left 속성에 값이 설정됩니다.

- HFrameSet 의 부모 Frame 이 FrameSet 이 아니면 HFrameSet 의 left 가 변경되지 않습니다.


---

### setOffsetRight

> Frames > HFrameSet > Method > setOffsetRight

**Description**

HFrameSet 이 FrameSet 의 하위에 속해 있을 때 HFrameSet 의 right 를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.setOffsetRight( nRight );
```

**Parameters**

```
부모 FrameSet 의 Left 위치를 기준으로 HFrameSet 의 right 를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- HFrameSet 의 부모 Frame 이 FrameSet 이 아니면 HFrameSet 의 right 가 변경되지 않습니다.


---

### setOffsetTop

> Frames > HFrameSet > Method > setOffsetTop

**Description**

HFrameSet 이 FrameSet 의 하위에 속해 있을 때 HFrameSet 의 top 을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.setOffsetTop( nTop );
```

**Parameters**

```
부모 FrameSet 의 Top 위치를 기준으로 HFrameSet 의 top 을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 후 HFrameSet 의 top 속성에 값이 설정됩니다.

- HFrameSet 의 부모 Frame 이 FrameSet 이 아니면 HFrameSet 의 top 이 변경되지 않습니다.


---

### setOffsetWidth

> Frames > HFrameSet > Method > setOffsetWidth

**Description**

HFrameSet 이 FrameSet 의 하위에 속해 있을 때 HFrameSet 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
HFrameSet.setOffsetWidth( nWidth );
```

**Parameters**

```
HFrameSet 의 너비를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 후 HFrameSet 의 width 속성에 값이 설정됩니다.

- HFrameSet 의 부모 Frame 이 FrameSet 이 아니면 HFrameSet 의 너비가 변경되지 않습니다.


---

### show

> Frames > HFrameSet > Method > show

**Description**

스크립트로 동적 생성한 HFrameSet 을 화면에 표시하는 메소드입니다

**Syntax**

```javascript
HFrameSet.show()
```

**Parameters**

var objApp = nexacro.getApplication() ;

var objFrame = new HFrameSet();
objFrame.init( "HFrameSet00", 30, 120, 196, 46 );

objApp.mainframe.frame.insertChild( 0, "HFrameSet00", objFrame ) ;
objFrame.show();

**Return**

없음

**Remark**

- 스크립트로 HFrameSet 을 동적 생성한 후에 사용 가능합니다.
  동적으로 생성한 HFrameSet 이 아닌 경우에는 오동작 할 수 있습니다.

- 동적 생성한 HFrameSet 을 추가하기 위해 부모 Frame 의 addChild() 메소드나 insertChild() 메소드를 사용합니다.
  추가된 HFrameSet 을 표시하기 위해 show() 메소드를 사용합니다.
  부모 Frame 에 추가되지 않고 show() 메소드를 사용할 경우 에러가 발생합니다.


---

### 이벤트 (Events)

### onactivate

> Frames > HFrameSet > Event > onactivate

**Description**

HFrameSet 이 활성화 되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onactivate(obj:nexacro.HFrameSet,e:nexacro.ActivateEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 앱이 활성화될 때 이벤트가 발생합니다.
- MainFrame > [Frameset] > ChildFrame > Form 순으로 이벤트가 발생합니다.
  ChildFrame 의 onactivate 이벤트가 발생한 후 ChildFrame 의 formurl 속성에 설정된 Form 에서 onactivate 이벤트가 발생합니다. 
- 운영체제에 따라 특정 동작 또는 시스템과 연결되어 이벤트가 발생할 수 있습니다.
  > 안드로이드
     앱 시작 시
     background 상태에서 다시 foreground 상태로 변경될 때
  > iOS
    앱 시작 시
    background 상태에서 다시 foreground 상태로 변경될 때
    키패드가 내려가면서 deactive 상태가 된 상태에서 Form에 포커스를 줄 때
    (WKWebView 내부에서 포커스 동작 시 시스템 이벤트 발생 기준과 같습니다).


---

### onbeforeclose

> Frames > HFrameSet > Event > onbeforeclose

**Description**

HFrameSet 이 종료되기 전에 발생하는 이벤트입니다.

**Syntax**

```javascript
onbeforeclose(obj:nexacro.HFrameSet,e:nexacro.CloseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 문자열 설정 시 HFrameSet 종료를 위한 확인창이 표시됩니다.
이벤트에서 리턴값으로 설정한 문자열이 종료를 위한 확인창에 사용됩니다.

이벤트에서 리턴값을 생략하거나 null, undefined, ""(Empty String) 으로 설정 시 확인창이 표시되지 않습니다.

**Remark**

- 일반적으로 어플리케이션 종료 전 사용자의 확인을 받을 때 사용하는 이벤트입니다.

- onbeforeclose 이벤트는 최하위부터 최상위로 전파되는 이벤트입니다.
   HFrameSet 의 하위 오브젝트에 onbeforeclose 이벤트가 정의되어 있다면 최하위 오브젝트의 이벤트부터 차례로 수행됩니다.
   최종 onbeforeclose 이벤트 수행 후 각 이벤트의 리턴값은 누적되어 종료를 위한 확인창에 모두 표시됩니다.

- 종료를 위한 확인창에서 "확인"을 선택하면 onclose 이벤트가 발생하고 HFrameSet 이 종료됩니다.
   종료를 위한 확인창에서 "취소"를 선택하면 onclose 이벤트가 발생하지 않고 HFrameSet 이 종료되지 않습니다.


---

### onclose

> Frames > HFrameSet > Event > onclose

**Description**

HFrameSet 이 종료될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onclose(obj:nexacro.HFrameSet,e:nexacro.CloseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- onclose 이벤트는 최하위부터 최상위로 전파되는 이벤트입니다.
   HFrameSet 의 하위 오브젝트에 onclose 이벤트가 정의되어 있다면 최하위 오브젝트의 이벤트부터 차례로 수행됩니다.
   최종 onclose 이벤트 수행 후 HFrameSet 이 종료됩니다.


---

### ondeactivate

> Frames > HFrameSet > Event > ondeactivate

**Description**

HFrameSet 이 비활성화 되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondeactivate(obj:nexacro.HFrameSet,e:nexacro.ActivateEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 앱이 비활성화될 때 이벤트가 발생합니다.
- Form > ChildFrame > [Frameset] > MainFrame 순으로 이벤트가 발생합니다.
  ChildFrame 의 formurl 속성에 지정된 Form에서 ondeactivate 이벤트가 발생 한 후에 ChildFrame 의 ondeactivate 이벤트가 발생합니다.
- 운영체제에 따라 특정 동작 또는 시스템과 연결되어 이벤트가 발생할 수 있습니다.
  > 안드로이드
     다른 앱이 활성화될 때
     홈 키를 입력할 때
     화면을 끌 때
  > iOS
     다른 앱이 활성화될 때
     화면을 끌 때
     키패드가 내려갈 때
    (WKWebView 내부에서 포커스 동작 시 시스템 이벤트 발생 기준과 같습니다).


---

### onmove

> Frames > HFrameSet > Event > onmove

**Description**

HFrameSet 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmove(obj:nexacro.HFrameSet,e:nexacro.MoveEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onorientationchange

> Frames > HFrameSet > Event > onorientationchange

**Description**

모바일 기기의 화면 방향이 변경되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onorientationchange(obj:nexacro.HFrameSet,e:nexacro.OrientationChangeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- onorientationchange  이벤트는 상위에서 하위로 이벤트가 발생합니다.
  모바일 기기의 방향 전환 시 MainFrame 의 onorientationchange 이벤트가 처음 발생한 후 Frame, Form 순서로 이벤트가 발생합니다.
  이때, preventDefault() 메소드로 이벤트 발생을 중지시킬 수 없습니다.

- onorientationchange 이벤트 내에서 MainFrame 크기 또는 시스템에서 값을 얻는 속성에 접근 시 변경된 값이 전달되지 않을 수 있습니다.
  모바일 기기마다 시스템 관련값의 갱신 시점이 다르고, onorientationchange 이벤트는 기기의 방향이 전환된 즉시 발생하기 때문입니다.


---

### onsize

> Frames > HFrameSet > Event > onsize

**Description**

HFrameSet 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsize(obj:nexacro.HFrameSet,e:nexacro.SizeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onsyscommand

> Frames > HFrameSet > Event > onsyscommand

**Description**

HFrameSet 에 시스템명령(Command) 메시지가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsyscommand(obj:nexacro.HFrameSet,e:nexacro.SysCommandEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 프레임으로 이벤트가 전파되고, 시스템명령이 수행됩니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 프레임으로 이벤트가 전파되지 않고, 시스템명령도 취소됩니다.

이벤트에서 리턴값을 생략하면 true 로 적용됩니다.

**Remark**

- 이벤트의 리턴값에 따라 상위 프레임으로 이벤트가 전파됩니다.

- 이벤트가 상위로 전파되는 중간에 이벤트 리턴값으로 false 가 반환되면 상위 프레임으로 이벤트가 전파되지 않고 시스템명령이 취소됩니다.

- 프레임의 최소/최대 버튼이 클릭되었을 때 onsyscommand 이벤트에서 false 를 반환하면 최소/최대화 명령이 취소됩니다.


---

## Frames > MainFrame

### MainFrame

> Frames > MainFrame

**Description**

애플리케이션의 기본 화면을 구성합니다.

내부적으로 TitleBarControl 과 StatusBarControl 을 기본으로 갖고 있습니다. 
하위 구성요소로 FrameSet,  HFrameSet, VFrameSet, TileFrameSet, ChildFrame 중 한개를 가질 수 있습니다.

**Structure**



**Property**

| Name | Description |
| --- | --- |
| all | MainFrame 에 등록된 Frame 을 갖는 읽기전용 속성입니다. |
| background | MainFrame 의 배경 영역을 설정하는 속성입니다. |
| border-radius | MainFrame 의 모서리 모양을 설정하는 속성입니다. |
| color | MainFrame 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| cssclass | MainFrame 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다. |
| cursor | MainFrame 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| enable | MainFrame 의 사용가능 여부를 설정하는 속성입니다. |
| enableevent | MainFrame 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다. |
| font | MainFrame 에서 사용하는 폰트를 설정하는 속성입니다. |
| frame | MainFrame 에 등록된 Frame 을 갖는 읽기전용 속성입니다. |
| height | MainFrame 을 표시하기 위한 높이를 설정하는 속성입니다. |
| hotkey | MainFrame 의 기본 액션을 수행하기 위한 단축키를 설정하는 속성입니다. |
| id | MainFrame의 고유 식별자를 설정하는 속성입니다. |
| layered | MainFrame 의 윈도우를 투명으로 설정하는 속성입니다. |
| left | MainFrame 을 표시하기 위한 좌측 좌표값을 설정하는 속성입니다. |
| letter-spacing | MainFrame 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다. |
| name | MainFrame 의 이름을 설정하는 속성입니다. |
| -nexa-border | MainFrame 의 테두리를 설정하는 속성입니다. |
| -nexa-edge | MainFrame 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-rtl-background-image | MainFrame 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| -nexa-rtl-edge-image | MainFrame 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| opacity | MainFrame 영역의 투명도를 설정하는 속성입니다. |
| openalign | 어플리케이션이 실행될 때 전체화면에서 표시될 위치를 설정하는 속성입니다. |
| openstatus | MainFrame 의 창 크기를 설정하는 속성입니다. |
| progressbardirection | MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 진행방향을 설정하는 속성입니다. |
| progressbargap | MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 오른쪽 공간 크기를 설정하는 설정하는 속성입니다. |
| progressbarsize | MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 너비를 설정하는 속성입니다. |
| progressbarsmooth | MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 진행바가 연속된 형태로 표시될 지 설정하는 속성입니다. |
| resizable | MainFrame 의 리사이즈 가능 여부를 설정하는 속성입니다. |
| showcascadestatustext | MainFrame 의 StatusBar 에 하위 Frame 과 Form 의 statustext 속성값을 모두 표시할 지 설정하는 속성입니다. |
| showcascadetitletext | MainFrame 의 TitleBar 에 하위 Frame 과 Form 의 titletext 속성값을 모두 표시할 지 설정하는 속성입니다. |
| showstatusbar | MainFrame 에 StatusBar 표시 여부를 설정하는 속성입니다. |
| showtitlebar | MainFrame 의 TitleBar 표시 여부를 설정하는 속성입니다. |
| showtitleicon | MainFrame 의 타이틀바에 아이콘 표시 여부를 설정하는 속성입니다. |
| statusbar | MainFrame 의 상태바 오브젝트를 갖는 속성입니다. |
| statusbarheight | MainFrame 의 StatusBar 높이를 설정하는 속성입니다. |
| statustext | MainFrame 의 StatusBar 에 표시될 텍스트를 설정하는 속성입니다. |
| titlebar | MainFrame 의 타이틀바 오브젝트를 갖는 속성입니다. |
| titlebarbuttongap | MainFrame 의 TitleBar 에 표시되는 시스템 버튼의 간격을 설정하는 속성입니다. |
| titlebarbuttonsize | MainFrame 의 타이틀바에 표시되는 시스템 버튼의 크기을 설정하는 속성입니다. |
| titlebarheight | MainFrame 의 TitleBar 높이를 설정하는 속성입니다. |
| titletext | MainFrame 의 TitleBar 에 표시될 텍스트를 설정하는 속성입니다. |
| top | MainFrame 을 표시하기 위한 상단 좌표값을 설정하는 속성입니다. |
| visible | MainFrame 이(가) 화면에 표시될지 여부를 설정하는 속성입니다. |
| width | MainFrame 을 표시하기 위한 너비를 설정하는 속성입니다. |
| word-spacing | MainFrame 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addEventHandler | MainFrame 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 MainFrame 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| alert | MainFrame 의 경고 대화상자를 표시하는 메소드입니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| confirm | MainFrame 의 선택 대화상자를 표시하는 메소드입니다. |
| findEventHandler | MainFrame 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getEventHandler | MainFrame 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| getNativeHandle | MainFrame이 속한 윈도우 핸들(HWND)값을 반환하는 메소드입니다. |
| getOffsetHeight | MainFrame 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetWidth | MainFrame 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| insertEventHandler | MainFrame 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| removeEventHandler | MainFrame 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | MainFrame 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| setEventHandler | MainFrame 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | MainFrame 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| setOffsetHeight | MainFrame 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetLeft | MainFrame 의 left 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetTop | MainFrame 의 top 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetWidth | MainFrame 의 너비를 픽셀단위로 설정하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onactivate | MainFrame 이 활성화 되었을 때 발생하는 이벤트입니다. |
| onbeforeclose | MainFrame 이 종료되기 전에 발생하는 이벤트입니다. |
| onclose | MainFrame 이 종료될 때 발생하는 이벤트입니다. |
| ondeactivate | MainFrame 이 비활성화 되었을 때 발생하는 이벤트입니다. |
| onmove | MainFrame 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| onorientationchange | 모바일 기기의 화면 방향이 변경되었을 때 발생하는 이벤트입니다. |
| onsize | MainFrame 의 크기가 변경됐을 때 발생하는 이벤트입니다. |
| onsyscommand | MainFrame 에 시스템명령(Command) 메시지가 들어왔을 때 발생하는 이벤트입니다. |

**Status**

컴포넌트가 비활성화된 상태

**Control**

| Name | TypeName |
| --- | --- |
| titlebar | nexacro.TitleBarControl |
| statusbar | nexacro.StatusBarControl |


---

### 속성 (Properties)

### -nexa-border

> Frames > MainFrame > Property > -nexa-border

**Description**

MainFrame 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.border[= strborder]
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
this.MainFrame00.border = "1px solid #999999";
this.MainFrame00.border = "1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999";
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

> Frames > MainFrame > Property > -nexa-edge

**Description**

MainFrame 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.edge[= stredge]
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
this.MainFrame00.edge = "URL('./images/border.png')" 5px 5px;
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

- MainFrame 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.


◆ WRE 제약

- <fixedwidth>,<fixedheight> 값이 이미지 사이즈의 1/2 을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-rtl-background-image

> Frames > MainFrame > Property > -nexa-rtl-background-image

**Description**

MainFrame 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.-nexa-rtl-background-image
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

> Frames > MainFrame > Property > -nexa-rtl-edge-image

**Description**

MainFrame 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.-nexa-rtl-edge-image
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

### all

> Frames > MainFrame > Property > all

**Description**

MainFrame 에 등록된 Frame 을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
MainFrame.all
```

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication();
var objFrames = objApp.mainframe.[Frame구조].all;
```

**Remark**

- all 속성은 Collection 접근방식을 사용할 수 있습니다.
  MainFrame.all[0], MainFrame.all["ChildFrame0"], MainFrame.all.length 등의 방법을 사용합니다.


---

### background

> Frames > MainFrame > Property > background

**Description**

MainFrame 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.background[= strbackground]
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
this.MainFrame00.background = "#ffffaa";
this.MainFrame00.background = ""URL('./images/smiley.gif')" no-repeat center center #ffffaa";
this.MainFrame00.background = ""URL('./images/smiley.gif')" no-repeat center center /auto #ffffaa";
this.MainFrame00.background = ""URL('./images/smiley.gif')" no-repeat center center /15px 15% #ffffaa";
this.MainFrame00.background = "linear-gradient( red , blue , yellow )";
this.MainFrame00.background = "linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0))";
this.MainFrame00.background = ""URL('./images/smiley.gif')" border-box border-box #ffffaa";
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

"left" 설정 시 MainFrame 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 MainFrame 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 MainFrame 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 MainFrame 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 MainFrame 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 MainFrame 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
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

0 보다 작거나 100 보다 큰 값을 설정 시 MainFrame 의 영역을 벗어난 가상의 위치로 적용됩니다.

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
예를 들어 <angle> 값이 "to left" 이면 MainFrame 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 MainFrame 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

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

0 보다 작거나 100 보다 큰 값을 설정 시 MainFrame 의 영역을 벗어난 가상의 위치로 적용됩니다.
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
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 MainFrame 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

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

> Frames > MainFrame > Property > border-radius

**Description**

MainFrame 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.borderRadius[= strborderradius]
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
this.MainFrame00.borderRadius = "10px";
this.MainFrame00.borderRadius = "5px 6px 10px / 5px 10px";
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

> Frames > MainFrame > Property > color

**Description**

MainFrame 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.color[= strcolor]
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
this.MainFrame00.color = "#999999";
this.MainFrame00.color = "rgb(255,0,0)";
this.MainFrame00.color = "red";
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

> Frames > MainFrame > Property > cssclass

**Description**

MainFrame 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.cssclass[= strcssclass]
```

**Setting Syntax**

```javascript
strcssclass ::= <ClassName> [ , &ltClassName> ]*
```
```javascript
var objApp = nexacro.getApplication();

objApp.mainframe.cssclass = "TestClass";
objApp.mainframe.cssclass = "TestClass,TestClass2";
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

> Frames > MainFrame > Property > cursor

**Description**

MainFrame 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.cursor[= strCursor]
```

**Setting Syntax**

```javascript
strCursor ::= 'none' | 'auto' | 'default' | 'copy' | 'crosshair' | 'help' | 'move' | 'not-allowed' | 'pointer' | 'progress' | 'text' | 'wait' | 'ew-resize' | 'e-resize' | 'w-resize' | 'ns-resize' | 'n-resize' | 's-resize' | 'nesw-resize' | 'ne-resize' | 'sw-resize' | 'nwse-resize' | 'nw-resize' | 'se-resize'
```
```javascript
* XCSS
cursor : default;

* Script ( normal property )
this.MainFrame00.cursor = "default";
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

> Frames > MainFrame > Property > enable

**Description**

MainFrame 의 사용가능 여부를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.enable[= benable]
```

**Setting Syntax**

```javascript
benable ::= 'true' | 'false'
```
```javascript
this.MainFrame00.enable = true; 
this.MainFrame00.enable = false;
```
- **`true`** — MainFrame 을(를) 사용할 수 있게 설정합니다.
- **`false`** — MainFrame 을(를) 사용할 수 없게 설정합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "disabled" Status 가 적용됩니다.

**Remark**

- enable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enable 속성값이 false 이면 컴포넌트가 화면에 표시되지만 포커스나 입력을 받을 수 없습니다.

- Div 와 같은 컨테이너 컴포넌트의 enable 속성값을 false 로 설정하면 자식 컴포넌트도 모두 Disable 됩니다.


---

### enableevent

> Frames > MainFrame > Property > enableevent

**Description**

MainFrame 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.enableevent[= bEvent]
```

**Setting Syntax**

```javascript
bEvent ::= 'true' | 'false'
```
```javascript
this.MainFrame00.enableevent = true;  

this.MainFrame00.enableevent = false;
```
- **`true`** — MainFrame 에서 이벤트가 발생하도록 설정합니다.
- **`false`** — MainFrame 에서 이벤트가 발생하지 않도록 설정합니다.

**Remark**

- enableevent 속성을 false 로 설정하면 이벤트 발생으로 인한 처리속도 지연과 화면 깜빡임을 방지할 수 있습니다.


---

### font

> Frames > MainFrame > Property > font

**Description**

MainFrame 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.font[= strfont]
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
this.MainFrame00.font = "bold 12pt/30px arial, sans-serif";
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

### frame

> Frames > MainFrame > Property > frame

**Description**

MainFrame 에 등록된 Frame 을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
MainFrame.frame
```

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication();
var objFrame = objApp.mainframe.frame.name;
```


---

### height

> Frames > MainFrame > Property > height

**Description**

MainFrame 을 표시하기 위한 높이를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.height[= nheight]
```

**Setting Syntax**

```javascript
nheight ::= <nVal> ['px']
```
```javascript
var objApp = nexacro.getApplication();

objApp.mainframe.height = 10;
objApp.mainframe.height = "10px";
```
- **`<nVal>`** — MainFrame 의 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- 높이값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### hotkey

> Frames > MainFrame > Property > hotkey

**Description**

MainFrame 의 기본 액션을 수행하기 위한 단축키를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.hotkey[= strHotkey]
```

**Setting Syntax**

```javascript
this.MainFrame00.hotkey = "G"; 
this.MainFrame00.hotkey = "CTRL+A"; 
this.MainFrame00.hotkey = "CTRL+ALT+X";
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

> Frames > MainFrame > Property > id

**Description**

MainFrame의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.id
```

**Setting Syntax**

- **`id`** — MainFrame를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### layered

> Frames > MainFrame > Property > layered

**Description**

MainFrame 의 윈도우를 투명으로 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.layered[= bLayered]
```

**Setting Syntax**

```javascript
bLayered ::= 'true' | 'false'
```
- **`"true"`** — MainFrame 의 배경이 투명 윈도우로 표시됩니다.

MainFrame 의 background 속성값이 "transparent"로 자동 변경됩니다.
- **`"false"`** — MainFrame 의 배경이 불투명 윈도우로 표시됩니다.

**Remark**

- layered 속성값을 설정하지 않으면 "false"로 적용됩니다.

- 동적으로 변경이 불가능 한 속성입니다.


---

### left

> Frames > MainFrame > Property > left

**Description**

MainFrame 을 표시하기 위한 좌측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.left[= nleft]
```

**Setting Syntax**

```javascript
nleft ::= <nVal> ['px']
```
```javascript
var objApp = nexacro.getApplication();

objApp.mainframe.left = 10;
objApp.mainframe.left = "10px";
```
- **`<nVal>`** — MainFrame 의 좌측 좌표값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- 좌표값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- Windows NRE 와 macOS NRE 만 적용되는 속성입니다.


---

### letter-spacing

> Frames > MainFrame > Property > letter-spacing

**Description**

MainFrame 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.letterSpacing[= strspace]
```

**Setting Syntax**

```javascript
strspace ::= 'normal' | <nVal> ['px']
```
```javascript
* XCSS
letter-spacing : 2px ;

* Script ( normal property )
this.MainFrame00.letterSpacing = "2px";
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

> Frames > MainFrame > Property > name

**Description**

MainFrame 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### opacity

> Frames > MainFrame > Property > opacity

**Description**

MainFrame 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.opacity[= stropacity]
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8;
opacity : 80%;

* Script ( normal property )
this.MainFrame00.opacity = "0.8";
this.MainFrame00.opacity = 0.8;
this.MainFrame00.opacity = "80%";
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

### openalign

> Frames > MainFrame > Property > openalign

**Description**

어플리케이션이 실행될 때 전체화면에서 표시될 위치를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.openalign[= strAlign]
```

**Setting Syntax**

```javascript
strAlign ::= [<hAlign>] [<vAlign>]

<hAlign> ::= 'left' | 'center' | 'right'
<vAlign> ::= 'top' | 'middle' | 'bottom'
```
- **`<hAlign>`** — 어플리케이션이 표시될 가로 위치를 설정합니다.

"left" 설정 시 현재 스크린의 왼쪽에 정렬되어 표시됩니다.
"center" 설정 시 현재 스크린의 중앙에 정렬되어 표시됩니다.
"right" 설정 시 현재 스크린의 오른쪽에 정렬되어 표시됩니다.
- **`<vAlign>`** — 어플리케이션이 표시될 세로 위치를 설정합니다.

"top" 설정 시 현재 스크린의 윗쪽에 정렬되어 표시됩니다.
"middle" 설정 시 현재 스크린의 중앙에 정렬되어 표시됩니다.
"bottom" 설정 시 현재 스크린의 아랫쪽에 정렬되어 표시됩니다.

**Remark**

- openalign 속성값을 설정하지 않으면 "left top"으로 적용됩니다.

- <hAlign> 값과 <vAlign> 값은 공백문자로 구분하여 설정합니다.


---

### openstatus

> Frames > MainFrame > Property > openstatus

**Description**

MainFrame 의 창 크기를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.openstatus[= stropenstatus]
```

**Setting Syntax**

```javascript
stropenstatus ::= 'normal' | 'minimize' | 'maximize'
```
```javascript
this.MainFrame00.openstatus = "maximize";
```
- **`"normal"`** — 사용자가 설정한 창 크기를 유지합니다.
- **`"minimize"`** — MainFrame 의 창 크기를 최소화 합니다.
- **`"maximize"`** — MainFrame 의 창 크기를 최대화 합니다.


---

### progressbardirection

> Frames > MainFrame > Property > progressbardirection

**Description**

MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 진행방향을 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.progressbardirection[= enumDirection]
```

**Setting Syntax**

```javascript
enumDirection ::= 'forward' | 'backward'
```
- **`"forward"`** — ProgressBar 의 진행바가 왼쪽에서 오른쪽으로 증가합니다.
- **`"backward"`** — ProgressBar 의 진행바가 오른쪽에서 왼쪽으로 증가합니다.

**Remark**

- direction 속성값을 설정하지 않으면 "forward"로 적용됩니다.

- 진행중인 통신 상태는 StatusBar 의 ProgressBar 를 통해 확인할 수 있습니다.


---

### progressbargap

> Frames > MainFrame > Property > progressbargap

**Description**

MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 오른쪽 공간 크기를 설정하는 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.progressbargap[= nSize]
```

**Setting Syntax**

- **`nSize`** — ProgressBar 의 오른쪽 공간 크기를 pixel 단위로 설정합니다.


---

### progressbarsize

> Frames > MainFrame > Property > progressbarsize

**Description**

MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.progressbarsize[= nSize]
```

**Setting Syntax**

- **`nSize`** — ProgressBar 의 너비를 pixel 단위로 설정합니다.


---

### progressbarsmooth

> Frames > MainFrame > Property > progressbarsmooth

**Description**

MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 진행바가 연속된 형태로 표시될 지 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.progressbarsmooth[= bSmooth]
```

**Setting Syntax**

```javascript
bSmooth ::= 'true' | 'false'
```
- **`"true"`** — 진행바가 끊어진 부분 없이 연속된 모양으로 표시됩니다.
- **`"false"`** — 진행바가 블럭형태로 표시됩니다.


---

### resizable

> Frames > MainFrame > Property > resizable

**Description**

MainFrame 의 리사이즈 가능 여부를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.resizable[= bResizable]
```

**Setting Syntax**

```javascript
bResizable ::= 'true' | 'false'
```
- **`"true"`** — MainFrame 의 크기 변경이 가능합니다.
- **`"false"`** — MainFrame 의 크기 변경이 불가능합니다.

**Remark**

- resizable 속성값을 설정하지 않으면 "true" 로 적용됩니다.


---

### showcascadestatustext

> Frames > MainFrame > Property > showcascadestatustext

**Description**

MainFrame 의 StatusBar 에 하위 Frame 과 Form 의 statustext 속성값을 모두 표시할 지 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.showcascadestatustext[= bShow]
```

**Setting Syntax**

```javascript
bShow ::= 'true' | 'false'
```
- **`"true"`** — 하위 Frame 과 Form 의 statustext 속성값이 "-" 구분자를 사용하여 연속적으로 표시됩니다.
- **`"false"`** — MainFrame 의 statustext 속성값만 표시합니다.

**Remark**

- MainFrame 의 showstatusbar 속성값이 "true" 일 경우만 적용됩니다.

- MainFrame 보다 상위 Frame 의 StatusBar 는 상위 Frame 의 showcascadestatustext 속성값에 따라 표시됩니다.


---

### showcascadetitletext

> Frames > MainFrame > Property > showcascadetitletext

**Description**

MainFrame 의 TitleBar 에 하위 Frame 과 Form 의 titletext 속성값을 모두 표시할 지 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.showcascadetitletext[= bShow]
```

**Setting Syntax**

```javascript
bShow ::= 'true' | 'false'
```
- **`"true"`** — 하위 Frame 과 Form 의 titletext 속성값이 "-" 구분자를 사용하여 연속적으로 표시됩니다.
- **`"false"`** — MainFrame 의 titletext 속성값만 표시합니다.

**Remark**

- MainFrame 의 showtitlebar 속성값이 "true" 일 경우만 적용됩니다.

- MainFrame 보다 상위 Frame 의 TtileBar 는 상위 Frame 의 showcascadetitletext 속성값에 따라 표시됩니다.


---

### showstatusbar

> Frames > MainFrame > Property > showstatusbar

**Description**

MainFrame 에 StatusBar 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.showstatusbar[= bshowstatus]
```

**Setting Syntax**

```javascript
bshowstatus ::= 'true' | 'false'
```
```javascript
this.MainFrame00.showstatusbar = true;
```
- **`true`** — MainFrame 에 StatusBar 를 표시합니다.
- **`false`** — MainFrame 에 StatusBar 를 표시하지 않습니다.

**Remark**

- showstatusbar 속성값을 설정하지 않으면 false 로 적용됩니다.


---

### showtitlebar

> Frames > MainFrame > Property > showtitlebar

**Description**

MainFrame 의 TitleBar 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.showtitlebar[= bshowtitlebar]
```

**Setting Syntax**

```javascript
bshowtitlebar ::= 'true' | 'false'
```
- **`"true"`** — MainFrame 에 TitleBar 를 표시합니다.
- **`"false"`** — MainFrame 에 TitleBar 를 표시하지 않습니다.

**Remark**

- TitleBar 에는 MainFrame을(를) 최소화, 최대화, 종료할 수 있는 버튼이 있습니다.


---

### showtitleicon

> Frames > MainFrame > Property > showtitleicon

**Description**

MainFrame 의 타이틀바에 아이콘 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.showtitleicon[= bshowtitleicon]
```

**Setting Syntax**

```javascript
bshowtitleicon ::= 'true' | 'false'
```
- **`"true"`** — MainFrame 의 타이틀바에 아이콘을 표시합니다.
- **`"false"`** — MainFrame 의 타이틀바에 아이콘을 표시하지 않습니다.

**Remark**

- Theme 의 TitleBarControl > titleicon > -nexa-icon 속성에 설정된 아이콘 이미지를 아이콘으로 표시합니다.


---

### statusbar

> Frames > MainFrame > Property > statusbar

**Description**

MainFrame 의 상태바 오브젝트를 갖는 속성입니다.

**Syntax**

```javascript
MainFrame.statusbar
```

**Setting Syntax**

```javascript
var objApp = nexacro.getAppplication();
var objStatusBar = objApp.mainframe.statusbar;
```

**Remark**

- MainFrame 의 showstatusbar 속성값이 "true" 일 경우만 상태바 오브젝트가 생성됩니다.


---

### statusbarheight

> Frames > MainFrame > Property > statusbarheight

**Description**

MainFrame 의 StatusBar 높이를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.statusbarheight[= nHeight]
```

**Setting Syntax**

- **`nHeight`** — StatusBar 의 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- showstatubar 속성값이 "true" 일 경우 적용되는 속성입니다.

미지정시 기본값 : default : undefinded
값이 undefinded 일 경우  메인프레임은 30으로, 메인프레임이 아닌 프레임들은 20으로 동작


---

### statustext

> Frames > MainFrame > Property > statustext

**Description**

MainFrame 의 StatusBar 에 표시될 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.statustext[= strStatustext]
```

**Setting Syntax**

- **`strStatustext`** — StatusBar 에 표시될 텍스트를 설정합니다.

**Remark**

- showcascadestatustext 속성값이 true 이면 하위 Frame 또는 Form 의 statustext 속성값을 MainFrame 의 StatusBar 에 함께 표시합니다.
   MainFrame 하위에 여러개의 Frame 이 있을 경우엔 현재 활성화 된 Frame 의 statustext 속성값이 표시됩니다.

 
◆ WRE 제약
 
- Chrome, Firefox, Opera, Edge 브라우저는 보안상의 이유로 StatusBar 의 텍스트 변경을 지원하지 않습니다.

- 현재 StatusBar 의 텍스트를 변경할 수 있는 브라우저도 향후 기능이 차단될 수 있습니다.


---

### titlebar

> Frames > MainFrame > Property > titlebar

**Description**

MainFrame 의 타이틀바 오브젝트를 갖는 속성입니다.

**Syntax**

```javascript
MainFrame.titlebar
```

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication();
var objTitleBar = objApp.mainframe.titlebar
```

**Remark**

- MainFrame 의 showtitlebar 속성값이 "true" 일 경우만 타이틀바 오브젝트가 생성됩니다.


---

### titlebarbuttongap

> Frames > MainFrame > Property > titlebarbuttongap

**Description**

MainFrame 의 TitleBar 에 표시되는 시스템 버튼의 간격을 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.titlebarbuttongap[= nGap]
```

**Setting Syntax**

- **`nGap`** — TitleBar 에 표시되는 시스템 버튼(최소/최대/종료)의 간격을 pixel 단위의 숫자로 설정합니다.

**Remark**

- showtitlebar 속성값이 "true" 일 때 적용되는 속성입니다.


---

### titlebarbuttonsize

> Frames > MainFrame > Property > titlebarbuttonsize

**Description**

MainFrame 의 타이틀바에 표시되는 시스템 버튼의 크기을 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.titlebarbuttonsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [<strHeight>]
```
- **`<strWidth>`** — 타이틀바에 표시되는 시스템 버튼(최소/최대/종료)의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 타이틀바에 표시되는 시스템 버튼(최소/최대/종료)의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- showtitlebar 속성값이 "true" 일 때 적용되는 속성입니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### titlebarheight

> Frames > MainFrame > Property > titlebarheight

**Description**

MainFrame 의 TitleBar 높이를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.titlebarheight[= nHeight]
```

**Setting Syntax**

- **`nHeight`** — MainFrame 의 TitleBar 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- titlebarheight 속성값을 설정하지 않으면 undefined 로 적용됩니다.
   undefined 가 적용되면 MainFrame 은 "30px" 로  표시되고, 다른 Frame 은 "20px" 로 표시됩니다.


---

### titletext

> Frames > MainFrame > Property > titletext

**Description**

 MainFrame 의 TitleBar 에 표시될 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.titletext[= strTitletext]
```

**Setting Syntax**

- **`strTitletext`** — TitleBar 에 표시될 텍스트를 설정합니다.

**Remark**

- showcascadetitletext  속성값이 "true"이면 하위 Frame 또는 Form 의 titletext 속성값을 MainFrame 의 TitleBar 에 함께 표시합니다.
  MainFrame 하위에 여러개의 Frame 이 있을 경우 현재 활성화 된 Frame 의 titletext 속성값이 표시됩니다.


---

### top

> Frames > MainFrame > Property > top

**Description**

MainFrame 을 표시하기 위한 상단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.top[= ntop]
```

**Setting Syntax**

```javascript
ntop ::= <nVal> ['px']
```
```javascript
var objApp = nexacro.getApplication();

objApp.mainframe.top = 10;
objApp.mainframe.top = "10px";
```
- **`<nVal>`** — MainFrame 의 상단 좌표값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- 좌표값에 "px" 문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- Windows NRE 와 macOS NRE 만 적용되는 속성입니다.


---

### visible

> Frames > MainFrame > Property > visible

**Description**

MainFrame 이(가) 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
this.MainFrame00.visible = true; 
this.MainFrame00.visible = false;
```
- **`"true"`** — MainFrame 을(를) 화면에 표시합니다.
- **`"false"`** — MainFrame 을(를) 화면에 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하는 즉시 컴포넌트의 표시 여부가 화면에 반영됩니다.

- visible 속성값이 "false"이면 컴포넌트가 화면에 표시되지 않고, 포커스를 받을 수 없으므로 입력이나 사용이 불가능합니다.

- Div 와 같은 컨테이너 컴포넌트의 visible 속성값을 "false"로 설정하면 자식 컴포넌트도 함께 화면에 표시되지 않습니다.

- visible 속성값이 "false"이어도 컴포넌트는 존재하기 때문에 스크립트로 제어가 가능합니다.

- 넥사크로 스튜디오에서는 visible 속성값을 'false'로 설정해도 디자인화면에서 사라지지 않습니다.


---

### width

> Frames > MainFrame > Property > width

**Description**

MainFrame 을 표시하기 위한 너비를 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.width[= nwidth]
```

**Setting Syntax**

```javascript
nwidth ::= <nVal> ['px']
```
```javascript
var objApp = nexacro.getApplication();

objApp.mainframe.width = 10; objApp.mainframe.width = "10px";
```
- **`<nVal>`** — MainFrame 의 너비를 pixel 단위의 숫자로 설정합니다.

**Remark**

- 너비값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### word-spacing

> Frames > MainFrame > Property > word-spacing

**Description**

MainFrame 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다.

**Syntax**

```javascript
MainFrame.wordSpacing[= strwordspacing]
```

**Setting Syntax**

```javascript
strWordSpacing ::= 'normal' | <nVal>'px'
```
```javascript
* XCSS
word-spacing : 30px;

* Script ( normal property )
this.MainFrame00.wordSpacing = "30px";
```
- **`"normal"`** — 텍스트의 단어 사이 간격을 설정하지 않습니다.

현재 font 에 맞는 기본형태로 텍스트가 표시됩니다.
- **`<nVal>`** — pixel 단위로 텍스트의 단어 사이 간격을 설정합니다.

**Remark**

- word-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "wordSpacing"을 사용해야 합니다.


---

### 메서드 (Methods)

### addEventHandler

> Frames > MainFrame > Method > addEventHandler

**Description**

MainFrame 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
MainFrame.addEventHandler( strEventID, objFunc, objTarget )
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

> Frames > MainFrame > Method > addEventHandlerLookup

**Description**

함수를 검색하여 MainFrame 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
MainFrame.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

### alert

> Frames > MainFrame > Method > alert

**Description**

MainFrame 의 경고 대화상자를 표시하는 메소드입니다.

**Syntax**

```javascript
MainFrame.alert( strText )
```

**Parameters**

```
대화상자에 표시할 텍스트를 설정합니다.
```

**Return**

없음

**Remark**

- MainFrame 의 중앙에 대화상자를 표시합니다.


---

### clearEventHandler

> Frames > MainFrame > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
MainFrame.clearEventHandler( strEventID )
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

### confirm

> Frames > MainFrame > Method > confirm

**Description**

 MainFrame 의 선택 대화상자를 표시하는 메소드입니다.

**Syntax**

```javascript
MainFrame.confirm( strText [,strCaption [,strType]] )
```

**Parameters**

```
대화상자에 표시할 텍스트를 설정합니다.
```

**Return**

표시된 선택 대화상자에서 "확인" 버튼을 선택하면 "true"를 반환합니다.
표시된 선택 대화상자에서 "취소" 버튼을 선택하면 "false"를 반환합니다.

**Remark**

- MainFrame 의 중앙에 선택 대화상자를 표시합니다.


---

### findEventHandler

> Frames > MainFrame > Method > findEventHandler

**Description**

MainFrame 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
MainFrame.findEventHandler( strEventID, objFunc, objTarget )
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

> Frames > MainFrame > Method > getEventHandler

**Description**

MainFrame 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
MainFrame.getEventHandler( strEventID, nIdx )
```

**Parameters**

```
핸들러 함수를 얻을 이벤트의 ID를 설정합니다.
```

**Return**

지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.

지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.


---

### getNativeHandle

> Frames > MainFrame > Method > getNativeHandle

**Description**

MainFrame이 속한 윈도우 핸들(HWND)값을 반환하는 메소드입니다.

**Syntax**

```javascript
MainFrame.getNativeHandle();
```

**Parameters**

var nHwnd = this.parent.getNativeHandle();

**Return**

MainFrame이 속한 윈도우 핸들(HWND)값


---

### getOffsetHeight

> Frames > MainFrame > Method > getOffsetHeight

**Description**

MainFrame 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
MainFrame.getOffsetHeight();
```

**Parameters**

var objApp = nexacro.getApplication();

var nWidth = objApp.mainframe.getOffsetHeight();

**Return**

MainFrame 의 height 속성값을 픽셀단위의 값으로 변경하여 반환합니다.

MainFrame 의 height 속성값을 설정하지 않으면 top, bottom 속성값을 기준으로 높이를 반환합니다.

**Remark**

- 화면에 표시된 MainFrame 의 높이를 동적으로 계산합니다.


---

### getOffsetWidth

> Frames > MainFrame > Method > getOffsetWidth

**Description**

MainFrame 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
MainFrame.getOffsetWidth();
```

**Parameters**

var objApp = nexacro.getApplication();

var nWidth = objApp.mainframe.getOffsetWidth();

**Return**

MainFrame 의 width 속성값을 픽셀단위의 값으로 변경하여 반환합니다.

MainFrame 의 width 속성값을 설정하지 않으면 left, right 속성값을 기준으로 너비를 반환합니다.

**Remark**

- 화면에 표시된 MainFrame 의 너비를 동적으로 계산합니다.


---

### insertEventHandler

> Frames > MainFrame > Method > insertEventHandler

**Description**

MainFrame 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
MainFrame.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

### removeEventHandler

> Frames > MainFrame > Method > removeEventHandler

**Description**

MainFrame 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
MainFrame.removeEventHandler( strEventID, objFunc, objTarget )
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

> Frames > MainFrame > Method > removeEventHandlerLookup

**Description**

MainFrame 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
MainFrame.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

### setEventHandler

> Frames > MainFrame > Method > setEventHandler

**Description**

MainFrame 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
MainFrame.setEventHandler( strEventID, objFunc, objTarget )
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

> Frames > MainFrame > Method > setEventHandlerLookup

**Description**

MainFrame 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
MainFrame.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

### setOffsetHeight

> Frames > MainFrame > Method > setOffsetHeight

**Description**

MainFrame 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
MainFrame.setOffsetHeight( nHeight );
```

**Parameters**

```
MainFrame 의 높이를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- Windows NRE, macOS NRE 만 지원하는 메소드입니다.

- 메소드 실행 후 MainFrame 의 height 속성값이 변경됩니다.


---

### setOffsetLeft

> Frames > MainFrame > Method > setOffsetLeft

**Description**

MainFrame 의 left 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
MainFrame.setOffsetLeft( nLeft );
```

**Parameters**

```
MainFrame 의 left 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- Windows NRE, macOS NRE 만 지원하는 메소드입니다.

- 메소드 실행 후 MainFrame 의 left 속성값이 변경됩니다.


---

### setOffsetTop

> Frames > MainFrame > Method > setOffsetTop

**Description**

MainFrame 의 top 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
MainFrame.setOffsetLeft( nTop );
```

**Parameters**

```
MainFrame 의 top 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- Windows NRE, macOS NRE 만 지원하는 메소드입니다.

- 메소드 실행 후 MainFrame 의 top 속성값이 변경됩니다.


---

### setOffsetWidth

> Frames > MainFrame > Method > setOffsetWidth

**Description**

MainFrame 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
MainFrame.setOffsetWidth( nWidth );
```

**Parameters**

```
MainFrame 의 너비를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- Windows NRE, macOS NRE 만 지원하는 메소드입니다.

- 메소드 실행 후 MainFrame 의 width 속성값이 변경됩니다.


---

### 이벤트 (Events)

### onactivate

> Frames > MainFrame > Event > onactivate

**Description**

MainFrame 이 활성화 되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onactivate(obj:nexacro.MainFrame,e:nexacro.ActivateEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 앱이 활성화될 때 이벤트가 발생합니다.
- MainFrame > [Frameset] > ChildFrame > Form 순으로 이벤트가 발생합니다.
  ChildFrame 의 onactivate 이벤트가 발생한 후 ChildFrame 의 formurl 속성에 설정된 Form 에서 onactivate 이벤트가 발생합니다. 
- 운영체제에 따라 특정 동작 또는 시스템과 연결되어 이벤트가 발생할 수 있습니다.
  > 안드로이드
     앱 시작 시
     background 상태에서 다시 foreground 상태로 변경될 때
  > iOS
    앱 시작 시
    background 상태에서 다시 foreground 상태로 변경될 때
    키패드가 내려가면서 deactive 상태가 된 상태에서 Form에 포커스를 줄 때
    (WKWebView 내부에서 포커스 동작 시 시스템 이벤트 발생 기준과 같습니다).


---

### onbeforeclose

> Frames > MainFrame > Event > onbeforeclose

**Description**

MainFrame 이 종료되기 전에 발생하는 이벤트입니다.

**Syntax**

```javascript
onbeforeclose(obj:nexacro.MainFrame,e:nexacro.CloseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 문자열 설정 시 MainFrame 종료를 위한 확인창이 표시됩니다.
이벤트에서 리턴값으로 설정한 문자열이 종료를 위한 확인창에 사용됩니다.

이벤트에서 리턴값을 생략하거나 null, undefined, ""(Empty String) 으로 설정 시 확인창이 표시되지 않습니다.

**Remark**

- 일반적으로 어플리케이션 종료 전 사용자의 확인을 받을 때 사용하는 이벤트입니다.

- onbeforeclose 이벤트는 최하위부터 최상위로 전파되는 이벤트입니다.
   MainFrame 의 하위 오브젝트에 onbeforeclose 이벤트가 정의되어 있다면 최하위 오브젝트의 이벤트부터 차례로 수행됩니다.
   최종 onbeforeclose 이벤트 수행 후 각 이벤트의 리턴값은 누적되어 종료를 위한 확인창에 모두 표시됩니다.

- 종료를 위한 확인창에서 "확인"을 선택하면 onclose 이벤트가 발생하고 MainFrame 이 종료됩니다.
   종료를 위한 확인창에서 "취소"를 선택하면 onclose 이벤트가 발생하지 않고 MainFrame 이 종료되지 않습니다.


---

### onclose

> Frames > MainFrame > Event > onclose

**Description**

MainFrame 이 종료될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onclose(obj:nexacro.MainFrame,e:nexacro.CloseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- onclose 이벤트는 exit() 메소드를 실행하거나 MainFrame TitleBar 의 닫기("X") 시스템버튼을 클릭했을 때 발생합니다.

- onclose 이벤트는 최하위부터 최상위로 전파되는 이벤트입니다.
   MainFrame 의 하위 오브젝트에 onclose 이벤트가 정의되어 있다면 최하위 오브젝트의 이벤트부터 차례로 수행됩니다.
   최종 onclose 이벤트 수행 후 MainFrame 이 종료됩니다.


◆ web runtime environment 제약

- 웹브라우저의 닫기("X") 시스템버튼을 클릭했을 경우엔 onclose 이벤트가 발생하지 않습니다.


---

### ondeactivate

> Frames > MainFrame > Event > ondeactivate

**Description**

MainFrame 이 비활성화 되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondeactivate(obj:nexacro.MainFrame,e:nexacro.ActivateEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 앱이 비활성화될 때 이벤트가 발생합니다.
- Form > ChildFrame > [Frameset] > MainFrame 순으로 이벤트가 발생합니다.
  ChildFrame 의 formurl 속성에 지정된 Form에서 ondeactivate 이벤트가 발생 한 후에 ChildFrame 의 ondeactivate 이벤트가 발생합니다.
- 운영체제에 따라 특정 동작 또는 시스템과 연결되어 이벤트가 발생할 수 있습니다.
  > 안드로이드
     다른 앱이 활성화될 때
     홈 키를 입력할 때
     화면을 끌 때
  > iOS
     다른 앱이 활성화될 때
     화면을 끌 때
     키패드가 내려갈 때
    (WKWebView 내부에서 포커스 동작 시 시스템 이벤트 발생 기준과 같습니다).


---

### onmove

> Frames > MainFrame > Event > onmove

**Description**

MainFrame 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmove(obj:nexacro.MainFrame,e:nexacro.MoveEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onorientationchange

> Frames > MainFrame > Event > onorientationchange

**Description**

모바일 기기의 화면 방향이 변경되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onorientationchange(obj:nexacro.MainFrame,e:nexacro.OrientationChangeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- onorientationchange  이벤트는 상위에서 하위로 이벤트가 발생합니다.
  모바일 기기의 방향 전환 시 MainFrame 의 onorientationchange 이벤트가 처음 발생한 후 Frame, Form 순서로 이벤트가 발생합니다.
  이때, preventDefault() 메소드로 이벤트 발생을 중지시킬 수 없습니다.

- onorientationchange 이벤트 내에서 MainFrame 크기 또는 시스템에서 값을 얻는 속성에 접근 시 변경된 값이 전달되지 않을 수 있습니다.
  모바일 기기마다 시스템 관련값의 갱신 시점이 다르고, onorientationchange 이벤트는 기기의 방향이 전환된 즉시 발생하기 때문입니다.


---

### onsize

> Frames > MainFrame > Event > onsize

**Description**

MainFrame 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsize(obj:nexacro.MainFrame,e:nexacro.SizeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onsyscommand

> Frames > MainFrame > Event > onsyscommand

**Description**

MainFrame 에 시스템명령(Command) 메시지가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsyscommand(obj:nexacro.MainFrame,e:nexacro.SysCommandEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 프레임으로 이벤트가 전파되고, 시스템명령이 수행됩니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 프레임으로 이벤트가 전파되지 않고, 시스템명령도 취소됩니다.

이벤트에서 리턴값을 생략하면 true 로 적용됩니다.

**Remark**

- 이벤트의 리턴값에 따라 상위 프레임으로 이벤트가 전파됩니다.

- 이벤트가 상위로 전파되는 중간에 이벤트 리턴값으로 false 가 반환되면 상위 프레임으로 이벤트가 전파되지 않고 시스템명령이 취소됩니다.

- 프레임의 최소/최대 버튼이 클릭되었을 때 onsyscommand 이벤트에서 false 를 반환하면 최소/최대화 명령이 취소됩니다.


---

## Frames > TileFrameSet

### TileFrameSet

> Frames > TileFrameSet

**Description**

MainFrame 의 하위에 오는 Frame 으로써 응용프로그램의 화면 배열을 위한 기본단위 화면으로 사용됩니다.

TileFrameSet 은 하위에 FrameSet, HFrameSet, VFrameSet, TileFrameSet, ChildFrame 을 반복적으로 가질 수 있습니다.
또한 수평, 수직 방향으로 자동으로 하위 Frame 들을 배열할 수 있는 기능을 갖고 있습니다.

**Structure**



**Property**

| Name | Description |
| --- | --- |
| all | TileFrameSet 에 등록된 Frame 을 갖는 읽기전용 속성입니다. |
| background | TileFrameSet 의 배경 영역을 설정하는 속성입니다. |
| border-radius | TileFrameSet 의 모서리 모양을 설정하는 속성입니다. |
| bottom | TileFrameSet 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다. |
| color | TileFrameSet 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| cssclass | TileFrameSet 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다. |
| cursor | TileFrameSet 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| enable | TileFrameSet 의 사용가능 여부를 설정하는 속성입니다. |
| enableevent | TileFrameSet 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다. |
| font | TileFrameSet 에서 사용하는 폰트를 설정하는 속성입니다. |
| frames | TileFrameSet 에 등록된 자식 Frame 들을 Collection 형태로 갖는 읽기전용 속성입니다. |
| fullframemaximize | TileFrameSet 에서 자식 Frame 을 최대화할 경우 나머지 최소화된 자식 Frame 이 배치되는 영역을 덮을지 설정하는 속성입니다. |
| height | TileFrameSet 을(를) 표시하기 위한 높이를 설정하는 속성입니다. |
| hotkey | TileFrameSet 의 기본 액션을 수행하기 위한 단축키를 설정하는 속성입니다. |
| id | TileFrameSet의 고유 식별자를 설정하는 속성입니다. |
| initvalueid | TileFrameSet 에 적용될 InitValue 의 ID 를 설정하는 속성입니다. |
| left | TileFrameSet 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다. |
| letter-spacing | TileFrameSet 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다. |
| minimizedchildposition | TileFrameSet 에서 최소화 된 자식 Frame 이 표시되는 위치를 설정하는 속성입니다. |
| minimizeheight | TileFrameSet 에서 최소화 된 자식 Frame 의 높이를 설정하는 속성입니다. |
| minimizewidth | TileFrameSet 에서 최소화 된 자식 Frame 의 너비를 설정하는 속성입니다. |
| name | TileFrameSet 의 이름을 설정하는 속성입니다. |
| -nexa-border | TileFrameSet 의 테두리를 설정하는 속성입니다. |
| -nexa-edge | TileFrameSet 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-rtl-background-image | TileFrameSet 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| -nexa-rtl-edge-image | TileFrameSet 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| opacity | TileFrameSet 영역의 투명도를 설정하는 속성입니다. |
| progressbardirection | TileFrameSet 의 StatusBar 에 표시되는 ProgressBar 의 진행방향을 설정하는 속성입니다. |
| progressbargap | TileFrameSet 의 StatusBar 에 표시되는 ProgressBar 의 오른쪽 공간 크기를 설정하는 설정하는 속성입니다. |
| progressbarsize | TileFrameSet 의 StatusBar 에 표시되는 ProgressBar 의 너비를 설정하는 속성입니다. |
| progressbarsmooth | MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 진행바가 연속된 형태로 표시될 지 설정하는 속성입니다. |
| right | TileFrameSet 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다. |
| separatecount | TileFrameSet 에서 한 행 또는 열에 표시하는 자식 Frame 의 갯수를 설정하는 속성입니다. |
| separatesize | HFrameSet 에서 자식 Frame 들이 표시되는 크기를 자식 Frame 별로 설정하는 속성입니다. |
| separatetype | TileFrameSet 에서 자식 Frame 을 배치하는 기준을 설정하는 속성입니다. |
| showcascadestatustext | TileFrameSet 의 StatusBar 에 하위 Frame 과 Form 의 statustext 속성값을 모두 표시할 지 설정하는 속성입니다. |
| showcascadetitletext | TileFrameSet 의 TitleBar 에 하위 Frame 과 Form 의 titletext 속성값을 모두 표시할 지 설정하는 속성입니다. |
| showstatusbar | TileFrameSet 에 StatusBar 표시 여부를 설정하는 속성입니다. |
| showtitlebar | TileFrameSet 의 TitleBar 표시 여부를 설정하는 속성입니다. |
| showtitleicon | TileFrameSet 의 타이틀바에 아이콘 표시 여부를 설정하는 속성입니다. |
| statusbar | TileFrameSet 의 상태바 오브젝트를 갖는 속성입니다. |
| statusbarheight | TileFrameSet 의 StatusBar 높이를 설정하는 속성입니다. |
| statustext | TileFrameSet 의 StatusBar 에 표시될 텍스트를 설정하는 속성입니다. |
| titlebar | TileFrameSet 의 타이틀바 오브젝트를 갖는 속성입니다. |
| titlebarbuttongap | TileFrameSet 의 TitleBar 에 표시되는 시스템 버튼의 간격을 설정하는 속성입니다. |
| titlebarbuttonsize | TileFrameSet 의 타이틀바에 표시되는 시스템 버튼의 크기을 설정하는 속성입니다. |
| titlebarheight | TileFrameSet 의 TitleBar 높이를 설정하는 속성입니다. |
| titletext | TileFrameSet 의 TitleBar 에 표시될 텍스트를 설정하는 속성입니다. |
| top | TileFrameSet 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다. |
| visible | TileFrameSet 이(가) 화면에 표시될지 여부를 설정하는 속성입니다. |
| width | TileFrameSet 을(를) 표시하기 위한 너비를 설정하는 속성입니다. |
| word-spacing | TileFrameSet 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addChild | 스크립트로 동적 생성한 Frame 을 TileFrameSet 의 자식 Frame 으로 추가하는 메소드입니다. |
| addEventHandler | TileFrameSet 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 TileFrameSet 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| alert | TileFrameSet 의 경고 대화상자를 표시하는 메소드입니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| confirm | TileFrameSet 의 선택 대화상자를 표시하는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 TileFrameSet 을(를) 삭제하는 메소드입니다. |
| findEventHandler | TileFrameSet 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getActiveFrame | TileFrameSet 의 자식 Frame 중 활성화 상태인 Frame 오브젝트를 반환하는 메소드입니다. |
| getEventHandler | TileFrameSet 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| getNativeHandle | TileFrameSet이 속한 윈도우 핸들(HWND)값을 반환하는 메소드입니다. |
| getOffsetBottom | 부모 Frame 의 Top 위치를 기준으로 TileFrameSet 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetHeight | TileFrameSet 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetLeft | 부모 Frame 의 Left 위치를 기준으로 TileFrameSet 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetRight | 부모 Frame 의 Left 위치를 기준으로 TileFrameSet 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetTop | 부모 Frame 의 Top 위치를 기준으로 TileFrameSet 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetWidth | TileFrameSet 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOwnerFrame | TileFrameSet 이 소속된 부모 Frame 을 반환하는 메소드입니다. |
| init | 스크립트로 TileFrameSet 을 동적 생성한 후에 초기화하는 메소드입니다. |
| insertChild | 스크립트로 동적 생성한 Frame 을 TileFrameSet 의 자식 Frame 으로 특정 순서에 추가하는 메소드입니다. |
| insertEventHandler | TileFrameSet 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| move | TileFrameSet 의 위치와 크기를 변경하는 메소드입니다. |
| removeChild | TileFrameSet 에 동적으로 추가된 Frame 을 제거하는 메소드입니다. |
| removeEventHandler | TileFrameSet 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | TileFrameSet 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| setEventHandler | TileFrameSet 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | TileFrameSet 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| setFocus | TileFrameSet 을 활성화하고 포커스를 주는 메소드입니다. |
| setOffsetBottom | TileFrameSet 이 FrameSet 의 하위에 속해 있을 때 TileFrameSet 의 bottom 을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetHeight | TileFrameSet 이 FrameSet 의 하위에 속해 있을 때 TileFrameSet 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetLeft | TileFrameSet 이 FrameSet 의 하위에 속해 있을 때 TileFrameSet 의 left 를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetRight | TileFrameSet 이 FrameSet 의 하위에 속해 있을 때 TileFrameSet 의 right 를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetTop | TileFrameSet 이 FrameSet 의 하위에 속해 있을 때 TileFrameSet 의 top 을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetWidth | TileFrameSet 이 FrameSet 의 하위에 속해 있을 때 TileFrameSet 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| show | 스크립트로 동적 생성한 TileFrameSet 을 화면에 표시하는 메소드입니다 |

**Event**

| Name | Description |
| --- | --- |
| onactivate | TileFrameSet 이 활성화 되었을 때 발생하는 이벤트입니다. |
| onbeforeclose | TileFrameSet 이 종료되기 전에 발생하는 이벤트입니다. |
| onclose | TileFrameSet 이 종료될 때 발생하는 이벤트입니다. |
| ondeactivate | TileFrameSet 이 활성화 되었을 때 발생하는 이벤트입니다. |
| onmove | TileFrameSet 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| onorientationchange | 모바일 기기의 화면 방향이 변경되었을 때 발생하는 이벤트입니다. |
| onsize | TileFrameSet 의 크기가 변경됐을 때 발생하는 이벤트입니다. |
| onsyscommand | TileFrameSet 에 시스템명령(Command) 메시지가 들어왔을 때 발생하는 이벤트입니다. |

**Status**

컴포넌트가 비활성화된 상태

**Control**

| Name | TypeName |
| --- | --- |
| titlebar | nexacro.TitleBarControl |
| statusbar | nexacro.StatusBarControl |


---

### 속성 (Properties)

### -nexa-border

> Frames > TileFrameSet > Property > -nexa-border

**Description**

TileFrameSet 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.border[= strborder]
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
this.TileFrameSet00.border = "1px solid #999999";
this.TileFrameSet00.border = "1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999";
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

> Frames > TileFrameSet > Property > -nexa-edge

**Description**

TileFrameSet 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.edge[= stredge]
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
this.TileFrameSet00.edge = "URL('./images/border.png')" 5px 5px;
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

- TileFrameSet 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.


◆ WRE 제약

- <fixedwidth>,<fixedheight> 값이 이미지 사이즈의 1/2 을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-rtl-background-image

> Frames > TileFrameSet > Property > -nexa-rtl-background-image

**Description**

TileFrameSet 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.-nexa-rtl-background-image
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

> Frames > TileFrameSet > Property > -nexa-rtl-edge-image

**Description**

TileFrameSet 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.-nexa-rtl-edge-image
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

### all

> Frames > TileFrameSet > Property > all

**Description**

TileFrameSet 에 등록된 Frame 을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
TileFrameSet.all
```

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication();
var objFrames = objApp.mainframe.[Frame구조].all;
```

**Remark**

- all 속성은 Collection 접근방식을 사용할 수 있습니다.
  TileFrameSet.all[0], TileFrameSet.all["ChildFrame0"], TileFrameSet.all.length 등의 방법을 사용합니다.


---

### background

> Frames > TileFrameSet > Property > background

**Description**

TileFrameSet 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.background[= strbackground]
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
this.TileFrameSet00.background = "#ffffaa";
this.TileFrameSet00.background = ""URL('./images/smiley.gif')" no-repeat center center #ffffaa";
this.TileFrameSet00.background = ""URL('./images/smiley.gif')" no-repeat center center /auto #ffffaa";
this.TileFrameSet00.background = ""URL('./images/smiley.gif')" no-repeat center center /15px 15% #ffffaa";
this.TileFrameSet00.background = "linear-gradient( red , blue , yellow )";
this.TileFrameSet00.background = "linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0))";
this.TileFrameSet00.background = ""URL('./images/smiley.gif')" border-box border-box #ffffaa";
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

"left" 설정 시 TileFrameSet 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 TileFrameSet 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 TileFrameSet 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 TileFrameSet 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 TileFrameSet 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 TileFrameSet 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
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

0 보다 작거나 100 보다 큰 값을 설정 시 TileFrameSet 의 영역을 벗어난 가상의 위치로 적용됩니다.

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
예를 들어 <angle> 값이 "to left" 이면 TileFrameSet 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 TileFrameSet 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

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

0 보다 작거나 100 보다 큰 값을 설정 시 TileFrameSet 의 영역을 벗어난 가상의 위치로 적용됩니다.
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
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 TileFrameSet 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

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

> Frames > TileFrameSet > Property > border-radius

**Description**

TileFrameSet 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.borderRadius[= strborderradius]
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
this.TileFrameSet00.borderRadius = "10px";
this.TileFrameSet00.borderRadius = "5px 6px 10px / 5px 10px";
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

> Frames > TileFrameSet > Property > bottom

**Description**

TileFrameSet 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.bottom[= nBottom]
```

**Setting Syntax**

```javascript
nBottom ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — TileFrameSet 의 하단 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### color

> Frames > TileFrameSet > Property > color

**Description**

TileFrameSet 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.color[= strcolor]
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
this.TileFrameSet00.color = "#999999";
this.TileFrameSet00.color = "rgb(255,0,0)";
this.TileFrameSet00.color = "red";
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

> Frames > TileFrameSet > Property > cssclass

**Description**

TileFrameSet 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.cssclass[= strcssclass]
```

**Setting Syntax**

```javascript
strcssclass ::= <ClassName> [ , &ltClassName> ]*
```
```javascript
var objApp = nexacro.getApplication();

objApp.mainframe.TileFramSet00.cssclass = "TestClass";
objApp.mainframe.TileFrameSet00.cssclass = "TestClass,TestClass2";
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

> Frames > TileFrameSet > Property > cursor

**Description**

TileFrameSet 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.cursor[= strCursor]
```

**Setting Syntax**

```javascript
strCursor ::= 'none' | 'auto' | 'default' | 'copy' | 'crosshair' | 'help' | 'move' | 'not-allowed' | 'pointer' | 'progress' | 'text' | 'wait' | 'ew-resize' | 'e-resize' | 'w-resize' | 'ns-resize' | 'n-resize' | 's-resize' | 'nesw-resize' | 'ne-resize' | 'sw-resize' | 'nwse-resize' | 'nw-resize' | 'se-resize'
```
```javascript
* XCSS
cursor : default;

* Script ( normal property )
this.TileFrameSet00.cursor = "default";
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

> Frames > TileFrameSet > Property > enable

**Description**

TileFrameSet 의 사용가능 여부를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.enable[= benable]
```

**Setting Syntax**

```javascript
benable ::= 'true' | 'false'
```
```javascript
this.TileFrameSet00.enable = true; 
this.TileFrameSet00.enable = false;
```
- **`true`** — TileFrameSet 을(를) 사용할 수 있게 설정합니다.
- **`false`** — TileFrameSet 을(를) 사용할 수 없게 설정합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "disabled" Status 가 적용됩니다.

**Remark**

- enable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enable 속성값이 false 이면 컴포넌트가 화면에 표시되지만 포커스나 입력을 받을 수 없습니다.

- Div 와 같은 컨테이너 컴포넌트의 enable 속성값을 false 로 설정하면 자식 컴포넌트도 모두 Disable 됩니다.


---

### enableevent

> Frames > TileFrameSet > Property > enableevent

**Description**

TileFrameSet 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.enableevent[= bEvent]
```

**Setting Syntax**

```javascript
bEvent ::= 'true' | 'false'
```
```javascript
this.TileFrameSet00.enableevent = true;  

this.TileFrameSet00.enableevent = false;
```
- **`true`** — TileFrameSet 에서 이벤트가 발생하도록 설정합니다.
- **`false`** — TileFrameSet 에서 이벤트가 발생하지 않도록 설정합니다.

**Remark**

- enableevent 속성을 false 로 설정하면 이벤트 발생으로 인한 처리속도 지연과 화면 깜빡임을 방지할 수 있습니다.


---

### font

> Frames > TileFrameSet > Property > font

**Description**

TileFrameSet 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.font[= strfont]
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
this.TileFrameSet00.font = "bold 12pt/30px arial, sans-serif";
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

### frames

> Frames > TileFrameSet > Property > frames

**Description**

TileFrameSet 에 등록된 자식 Frame 들을 Collection 형태로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
TileFrameSet.frames
```

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication();
var objFrame = objApp.mainframe.frame.frames[1];
```

**Remark**

- frames 속성은 Collection 접근방식을 사용할 수 있습니다.
  TileFrameSet.frames[0], TileFrameSet.frames["ChildFrame0"], TileFrameSet.frames.length 등의 방법을 사용합니다.


---

### fullframemaximize

> Frames > TileFrameSet > Property > fullframemaximize

**Description**

TileFrameSet 에서 자식 Frame 을 최대화할 경우 나머지 최소화된 자식 Frame 이 배치되는 영역을 덮을지 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.fullframemaximize[= bFullframe]
```

**Setting Syntax**

```javascript
bFullframe ::= 'true' | 'false'
```
```javascript
TileFrameSet00.fullframemaximize = true;
TileFrameSet00.fullframemaximize = false;
```
- **`"true"`** — TileFrameSet 하단에 최소화된 Frame 표시영역까지 자식 Frame 이 확대되어 표시됩니다.
- **`"false"`** — TileFrameSet 하단에 최소화된 Frame 표시영역까지 자식 Frame 이 확대되지 않습니다.

하나의 자식 Frame 이 최대화 되면 나머지 자식 Frame 은 모두 최소화됩니다.
모든 자식 Frame 의 최소화버튼이 표시되지 않습니다.

**Remark**

- fullframemaximize 속성값을 설정하지 않으면 "true"로 적용됩니다.


---

### height

> Frames > TileFrameSet > Property > height

**Description**

TileFrameSet 을(를) 표시하기 위한 높이를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.height[= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — TileFrameSet 의 높이를 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 높이값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 높이값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### hotkey

> Frames > TileFrameSet > Property > hotkey

**Description**

TileFrameSet 의 기본 액션을 수행하기 위한 단축키를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.hotkey[= strHotkey]
```

**Setting Syntax**

```javascript
this.TileFrameSet00.hotkey = "G"; 
this.TileFrameSet00.hotkey = "CTRL+A"; 
this.TileFrameSet00.hotkey = "CTRL+ALT+X";
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

> Frames > TileFrameSet > Property > id

**Description**

TileFrameSet의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.id
```

**Setting Syntax**

- **`id`** — TileFrameSet를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### initvalueid

> Frames > TileFrameSet > Property > initvalueid

**Description**

TileFrameSet 에 적용될 InitValue 의 ID 를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.initvalueid[= strValueID]
```

**Setting Syntax**

- **`strValueID`** — InitValueDefinition 영역에 정의된 InitValue 파일에서 TileFrameSet 에 적용할 항목의 ID 를 문자열로 설정합니다.

**Remark**

- TileFrameSet 가 화면에 표시된 후에는 속성값을 설정하거나 변경 할 수 없습니다.
   TileFrameSet 를 동적으로 생성 시 show() 메소드 실행 전에 속성값을 설정하여야 합니다.

- Screen 별로 Environment 의 initvaluefileid 속성을 각각 설정하면 Screen 에 따라 다른 초기값을 설정할 수 있습니다.

- InitValueDefinition 영역에 한 개 이상의 InitValue 파일을 정의할 수 있고,
   InitValue 파일에는 컴포넌트별로 여러개의 초기값 정의를 할 수 있습니다.


---

### left

> Frames > TileFrameSet > Property > left

**Description**

TileFrameSet 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.left [=nLeft]
```

**Setting Syntax**

```javascript
nLeft ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — TileFrameSet 의 좌측 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### letter-spacing

> Frames > TileFrameSet > Property > letter-spacing

**Description**

TileFrameSet 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.letterSpacing[= strspace]
```

**Setting Syntax**

```javascript
strspace ::= 'normal' | <nVal> ['px']
```
```javascript
* XCSS
letter-spacing : 2px ;

* Script ( normal property )
this.TileFrameSet00.letterSpacing = "2px";
```
- **`"normal"`** — 문자 사이의 간격(자간)을 설정하지 않습니다.
- **`<nVal>`** — 문자 사이의 간격(자간)을 pixel 단위로 설정합니다.

스크립트 작성 시에는 "px" 단위 표기를 생략할 수 있습니다.
(XCSS 작성 시에는 "px" 단위를 포함해 작성해야 합니다).

**Remark**

- letter-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "letterSpacing"을 사용해야 합니다.


---

### minimizedchildposition

> Frames > TileFrameSet > Property > minimizedchildposition

**Description**

TileFrameSet 에서 최소화 된 자식 Frame 이 표시되는 위치를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.minimizedchildposition[= enumPos]
```

**Setting Syntax**

```javascript
enumPos ::= 'left' | 'top' | 'right' | 'bottom'
```
```javascript
TileFrameSet00.minimizedchildposition = "left";
```
- **`"left"`** — 최소화 된 자식 Frame 이 TileFrameSet 내부의 왼쪽 영역에 표시됩니다.
- **`"top"`** — 최소화 된 자식 Frame 이 TileFrameSet 내부의 윗쪽 영역에 표시됩니다.
- **`"right"`** — 최소화 된 자식 Frame 이 TileFrameSet 내부의 오른쪽 영역에 표시됩니다.
- **`"bottom"`** — 최소화 된 자식 Frame 이 TileFrameSet 내부의 아랫쪽 영역에 표시됩니다.

**Remark**

- minimizedchildposition 속성값을 설정하지 않으면 "bottom" 으로 적용됩니다.


---

### minimizeheight

> Frames > TileFrameSet > Property > minimizeheight

**Description**

TileFrameSet 에서 최소화 된 자식 Frame 의 높이를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.minimizeheight[= nHeight]
```

**Setting Syntax**

```javascript
TileFrameSet00.minimizeheight = 25;
```
- **`nHeight`** — 최소화 된 자식 Frame 의 높이를 pixel 단위로 설정합니다.


---

### minimizewidth

> Frames > TileFrameSet > Property > minimizewidth

**Description**

TileFrameSet 에서 최소화 된 자식 Frame 의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.minimizewidth[= nWidth]
```

**Setting Syntax**

```javascript
TileFrameSet00.minimizewidth = 150;
```
- **`nWidth`** — 최소화 된 자식 Frame 의 너비를 pixel 단위로 설정합니다.


---

### name

> Frames > TileFrameSet > Property > name

**Description**

TileFrameSet 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### opacity

> Frames > TileFrameSet > Property > opacity

**Description**

TileFrameSet 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.opacity[= stropacity]
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8;
opacity : 80%;

* Script ( normal property )
this.TileFrameSet00.opacity = "0.8";
this.TileFrameSet00.opacity = 0.8;
this.TileFrameSet00.opacity = "80%";
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

### progressbardirection

> Frames > TileFrameSet > Property > progressbardirection

**Description**

TileFrameSet 의 StatusBar 에 표시되는 ProgressBar 의 진행방향을 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.progressbardirection[= enumDirection]
```

**Setting Syntax**

```javascript
enumDirection ::= 'forward' | 'backward'
```
- **`"forward"`** — ProgressBar 의 진행바가 왼쪽에서 오른쪽으로 증가합니다.
- **`"backward"`** — ProgressBar 의 진행바가 오른쪽에서 왼쪽으로 증가합니다.

**Remark**

- direction 속성값을 설정하지 않으면 "forward"로 적용됩니다.

- 진행중인 통신 상태는 StatusBar 의 ProgressBar 를 통해 확인할 수 있습니다.


---

### progressbargap

> Frames > TileFrameSet > Property > progressbargap

**Description**

TileFrameSet 의 StatusBar 에 표시되는 ProgressBar 의 오른쪽 공간 크기를 설정하는 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.progressbargap[= nSize]
```

**Setting Syntax**

- **`nSize`** — ProgressBar 의 오른쪽 공간 크기를 pixel 단위로 설정합니다.


---

### progressbarsize

> Frames > TileFrameSet > Property > progressbarsize

**Description**

TileFrameSet 의 StatusBar 에 표시되는 ProgressBar 의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.progressbarsize[= nSize]
```

**Setting Syntax**

- **`nSize`** — ProgressBar 의 너비를 pixel 단위로 설정합니다.


---

### progressbarsmooth

> Frames > TileFrameSet > Property > progressbarsmooth

**Description**

MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 진행바가 연속된 형태로 표시될 지 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.progressbarsmooth[= bSmooth]
```

**Setting Syntax**

```javascript
bSmooth ::= 'true' | 'false'
```
- **`"true"`** — 진행바가 끊어진 부분 없이 연속된 모양으로 표시됩니다.
- **`"false"`** — 진행바가 블럭형태로 표시됩니다.


---

### right

> Frames > TileFrameSet > Property > right

**Description**

TileFrameSet 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.right [=nRight]
```

**Setting Syntax**

```javascript
nRight ::= <nVal>['px' | '%']
```
- **`<nVal>`** — TileFrameSet 의 우측 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### separatecount

> Frames > TileFrameSet > Property > separatecount

**Description**

TileFrameSet 에서 한 행 또는 열에 표시하는 자식 Frame 의 갯수를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.separatecount[= nCount]
```

**Setting Syntax**

```javascript
TileFrameSet00.separatecount = 3;
```
- **`nCount`** — 한 행 또는 열에 표시하는 자식 Frame 의 갯수를 숫자로 설정합니다.

**Remark**

- separatetype 속성값에 따라 적용되는 방향이 결정됩니다.


---

### separatesize

> Frames > TileFrameSet > Property > separatesize

**Description**

HFrameSet 에서 자식 Frame 들이 표시되는 크기를 자식 Frame 별로 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.separatesize[= strSize]
```

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication() ;

objApp.mainframe.TileFramSet00.separatesize = "200,*,400,2*";
```
- **`strSize`** — 각 자식 Frame 별로 표시될 크기를 콤마(",")로 구분하여 설정합니다.

크기를 숫자로 설정 시 해당 자식 Frame 의 고정 크기로 적용됩니다.
크기에 "*" 기호를 사용할 경우 자식 Frame 의 크기가 비율로 적용됩니다.
"2*", "3*" 형태로 설정 시 기준값에 2배 비율, 3배 비율로 적용됩니다.

자식 Frame 수 또는 separatecount 속성값보다 설정된 크기 갯수가 적을 경우 설정값이 없는 자식 Frame 은 "*" 로 적용됩니다.
자식 Frame 수 또는 separatecount 속성값보다 설정된 크기 갯수가 많을 경우 나머지 설정값은 무시됩니다.

**Remark**

- separatetype 속성값에 따라 separatesize 속성값이 높이 또는 너비에 적용됩니다.

- separatesize 속성값에 비율을 설정하였을 경우 비율의 기준값은 전체 TileFrameSet 크기에서 고정 너비값을 빼고 계산합니다.

  ex) HFrame 크기가 "1000" 이고, separatesize 속성값이 "200,*,400,4*" 일 때
       비율로 처리될 크기는 전체 크기 "1000" 에서 고정크기인 "600"(200+400)을 뺀 "400" 이 되고,
       비율의 기준값은 "400" 에서 비율값인 "5*"(* + 4*)을 나눈 "80"이 기준값이 됩니다.

       따라서 첫번째 자식 Frame 의 크기는 고정값인 "200"
       두번째 자식 Frame 의 크기는 기준값 "80"에 대한 1배 비율인 "80"
       세번째 자식 Frame 의 크기는 고정값인 "400"
       마지막 자식 Frame 의 크기는 기준값 "80"에 대한 4배 비율인 "320" 이 됩니다.


---

### separatetype

> Frames > TileFrameSet > Property > separatetype

**Description**

TileFrameSet 에서 자식 Frame 을 배치하는 기준을 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.separatetype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'horizontal' | 'vertical'
```
- **`'horizontal'`** — 수평(왼쪽에서 오른쪽) 기준으로 separatecount 속성값만큼 Frame을 배치 한 후 나머지 Frame 을 다음 행에 배치합니다.
- **`'vertical'`** — 수직(위쪽에서 아랫쪽) 기준으로 separatecount 속성값만큼 Frame을 배치 한 후 나머지 Frame 을 다음 열에 배치합니다.

**Remark**

- separatetype 속성값을 설정하지 않으면 "horizontal" 으로 적용됩니다.

- separatecount 속성값만큼 연속적으로 다음 라인에 자식 Frame 을 배치 한 후 남는 Frame 영역은 공백으로 표시됩니다.


---

### showcascadestatustext

> Frames > TileFrameSet > Property > showcascadestatustext

**Description**

TileFrameSet 의 StatusBar 에 하위 Frame 과 Form 의 statustext 속성값을 모두 표시할 지 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.showcascadestatustext[= bShow]
```

**Setting Syntax**

```javascript
bShow ::= 'true' | 'false'
```
- **`"true"`** — 하위 Frame 과 Form 의 statustext 속성값이 "-" 구분자를 사용하여 연속적으로 표시됩니다.
- **`"false"`** — TileFrameSet 의 statustext 속성값만 표시합니다.

**Remark**

- TileFrameSet 의 showstatusbar 속성값이 "true" 일 경우만 적용됩니다.

- TileFrameSet 보다 상위 Frame 의 StatusBar 는 상위 Frame 의 showcascadestatustext 속성값에 따라 표시됩니다.


---

### showcascadetitletext

> Frames > TileFrameSet > Property > showcascadetitletext

**Description**

TileFrameSet 의 TitleBar 에 하위 Frame 과 Form 의 titletext 속성값을 모두 표시할 지 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.showcascadetitletext[= bShow]
```

**Setting Syntax**

```javascript
bShow ::= 'true' | 'false'
```
- **`"true"`** — 하위 Frame 과 Form 의 titletext 속성값이 "-" 구분자를 사용하여 연속적으로 표시됩니다.
- **`"false"`** — TileFrameSet 의 titletext 속성값만 표시합니다.

**Remark**

- TileFrameSet 의 showtitlebar 속성값이 "true" 일 경우만 적용됩니다.

- TileFrameSet 보다 상위 Frame 의 TtileBar 는 상위 Frame 의 showcascadetitletext 속성값에 따라 표시됩니다.


---

### showstatusbar

> Frames > TileFrameSet > Property > showstatusbar

**Description**

TileFrameSet 에 StatusBar 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.showstatusbar[= bshowstatus]
```

**Setting Syntax**

```javascript
bshowstatus ::= 'true' | 'false'
```
```javascript
this.TileFrameSet00.showstatusbar = true;
```
- **`true`** — TileFrameSet 에 StatusBar 를 표시합니다.
- **`false`** — TileFrameSet 에 StatusBar 를 표시하지 않습니다.

**Remark**

- showstatusbar 속성값을 설정하지 않으면 false 로 적용됩니다.


---

### showtitlebar

> Frames > TileFrameSet > Property > showtitlebar

**Description**

TileFrameSet 의 TitleBar 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.showtitlebar[= bshowtitlebar]
```

**Setting Syntax**

```javascript
bshowtitlebar ::= 'true' | 'false'
```
- **`"true"`** — TileFrameSet 에 TitleBar 를 표시합니다.
- **`"false"`** — TileFrameSet 에 TitleBar 를 표시하지 않습니다.

**Remark**

- TitleBar 에는 TileFrameSet을(를) 최소화, 최대화, 종료할 수 있는 버튼이 있습니다.


---

### showtitleicon

> Frames > TileFrameSet > Property > showtitleicon

**Description**

TileFrameSet 의 타이틀바에 아이콘 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.showtitleicon[= bshowtitleicon]
```

**Setting Syntax**

```javascript
bshowtitleicon ::= 'true' | 'false'
```
- **`"true"`** — TileFrameSet 의 타이틀바에 아이콘을 표시합니다.
- **`"false"`** — TileFrameSet 의 타이틀바에 아이콘을 표시하지 않습니다.

**Remark**

- Theme 의 TitleBarControl > titleicon > -nexa-icon 속성에 설정된 아이콘 이미지를 아이콘으로 표시합니다.


---

### statusbar

> Frames > TileFrameSet > Property > statusbar

**Description**

TileFrameSet 의 상태바 오브젝트를 갖는 속성입니다.

**Syntax**

```javascript
TileFrameSet.statusbar
```

**Setting Syntax**

```javascript
var objApp = nexacro.getAppplication();
var objStatusBar = objApp.mainframe.statusbar;
```

**Remark**

- TileFrameSet 의 showstatusbar 속성값이 "true" 일 경우만 상태바 오브젝트가 생성됩니다.


---

### statusbarheight

> Frames > TileFrameSet > Property > statusbarheight

**Description**

TileFrameSet 의 StatusBar 높이를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.statusbarheight[= nHeight]
```

**Setting Syntax**

- **`nHeight`** — StatusBar 의 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- showstatubar 속성값이 "true" 일 경우 적용되는 속성입니다.

미지정시 기본값 : default : undefinded
값이 undefinded 일 경우  메인프레임은 30으로, 메인프레임이 아닌 프레임들은 20으로 동작


---

### statustext

> Frames > TileFrameSet > Property > statustext

**Description**

TileFrameSet 의 StatusBar 에 표시될 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.statustext[= strStatustext]
```

**Setting Syntax**

- **`strStatustext`** — StatusBar 에 표시될 텍스트를 설정합니다.

**Remark**

- showcascadestatustext 속성값이 true 이면 하위 Frame 또는 Form 의 statustext 속성값을 TileFrameSet 의 StatusBar 에 함께 표시합니다.
   TileFrameSet 하위에 여러개의 Frame 이 있을 경우엔 현재 활성화 된 Frame 의 statustext 속성값이 표시됩니다.

 
◆ WRE 제약
 
- Chrome, Firefox, Opera, Edge 브라우저는 보안상의 이유로 StatusBar 의 텍스트 변경을 지원하지 않습니다.

- 현재 StatusBar 의 텍스트를 변경할 수 있는 브라우저도 향후 기능이 차단될 수 있습니다.


---

### titlebar

> Frames > TileFrameSet > Property > titlebar

**Description**

TileFrameSet 의 타이틀바 오브젝트를 갖는 속성입니다.

**Syntax**

```javascript
TileFrameSet.titlebar
```

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication();
var objTitleBar = objApp.mainframe.titlebar
```

**Remark**

- TileFrameSet 의 showtitlebar 속성값이 "true" 일 경우만 타이틀바 오브젝트가 생성됩니다.


---

### titlebarbuttongap

> Frames > TileFrameSet > Property > titlebarbuttongap

**Description**

TileFrameSet 의 TitleBar 에 표시되는 시스템 버튼의 간격을 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.titlebarbuttongap[= nGap]
```

**Setting Syntax**

- **`nGap`** — TitleBar 에 표시되는 시스템 버튼(최소/최대/종료)의 간격을 pixel 단위의 숫자로 설정합니다.

**Remark**

- showtitlebar 속성값이 "true" 일 때 적용되는 속성입니다.


---

### titlebarbuttonsize

> Frames > TileFrameSet > Property > titlebarbuttonsize

**Description**

TileFrameSet 의 타이틀바에 표시되는 시스템 버튼의 크기을 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.titlebarbuttonsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [<strHeight>]
```
- **`<strWidth>`** — 타이틀바에 표시되는 시스템 버튼(최소/최대/종료)의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 타이틀바에 표시되는 시스템 버튼(최소/최대/종료)의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- showtitlebar 속성값이 "true" 일 때 적용되는 속성입니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### titlebarheight

> Frames > TileFrameSet > Property > titlebarheight

**Description**

TileFrameSet 의 TitleBar 높이를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.titlebarheight[= nHeight]
```

**Setting Syntax**

- **`nHeight`** — TileFrameSet 의 TitleBar 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- titlebarheight 속성값을 설정하지 않으면 undefined 로 적용됩니다.
   undefined 가 적용되면 MainFrame 은 "30px" 로  표시되고, 다른 Frame 은 "20px" 로 표시됩니다.


---

### titletext

> Frames > TileFrameSet > Property > titletext

**Description**

 TileFrameSet 의 TitleBar 에 표시될 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.titletext[= strTitletext]
```

**Setting Syntax**

- **`strTitletext`** — TitleBar 에 표시될 텍스트를 설정합니다.

**Remark**

- showcascadetitletext  속성값이 "true"이면 하위 Frame 또는 Form 의 titletext 속성값을 TileFrameSet 의 TitleBar 에 함께 표시합니다.
  TileFrameSet 하위에 여러개의 Frame 이 있을 경우 현재 활성화 된 Frame 의 titletext 속성값이 표시됩니다.


---

### top

> Frames > TileFrameSet > Property > top

**Description**

TileFrameSet 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.top[= nTop]
```

**Setting Syntax**

```javascript
nTop ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — TileFrameSet 의 상단 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### visible

> Frames > TileFrameSet > Property > visible

**Description**

TileFrameSet 이(가) 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
this.TileFrameSet00.visible = true; 
this.TileFrameSet00.visible = false;
```
- **`"true"`** — TileFrameSet 을(를) 화면에 표시합니다.
- **`"false"`** — TileFrameSet 을(를) 화면에 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하는 즉시 컴포넌트의 표시 여부가 화면에 반영됩니다.

- visible 속성값이 "false"이면 컴포넌트가 화면에 표시되지 않고, 포커스를 받을 수 없으므로 입력이나 사용이 불가능합니다.

- Div 와 같은 컨테이너 컴포넌트의 visible 속성값을 "false"로 설정하면 자식 컴포넌트도 함께 화면에 표시되지 않습니다.

- visible 속성값이 "false"이어도 컴포넌트는 존재하기 때문에 스크립트로 제어가 가능합니다.

- 넥사크로 스튜디오에서는 visible 속성값을 'false'로 설정해도 디자인화면에서 사라지지 않습니다.


---

### width

> Frames > TileFrameSet > Property > width

**Description**

TileFrameSet 을(를) 표시하기 위한 너비를 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.width[= nWidth]
```

**Setting Syntax**

```javascript
nWidth ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — TileFrameSet 의 너비를 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 너비값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 너비값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### word-spacing

> Frames > TileFrameSet > Property > word-spacing

**Description**

TileFrameSet 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다.

**Syntax**

```javascript
TileFrameSet.wordSpacing[= strwordspacing]
```

**Setting Syntax**

```javascript
strWordSpacing ::= 'normal' | <nVal>'px'
```
```javascript
* XCSS
word-spacing : 30px;

* Script ( normal property )
this.TileFrameSet00.wordSpacing = "30px";
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

> Frames > TileFrameSet > Method > addChild

**Description**

스크립트로 동적 생성한 Frame 을 TileFrameSet 의 자식 Frame 으로 추가하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.addChild( strChildID, objFrame )
```

**Parameters**

```
자식으로 추가될 Frame 의 ID를 설정합니다.
```

**Return**

추가된 자식 Frame 의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

**Remark**

- addChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- 스크립트에서 동적으로 생성한 Frame 만 추가할 수 있습니다.
  동적으로 생성한 Frame 이 아닌 경우 오동작이 발생할 수 있습니다.

- 자식 Frame 의 세부 속성은 addChild() 메소드로 자식 Frame 을 추가 후 설정해야 합니다.

- 자식 Frame 으로 추가된 Frame 을 화면에 표시하기 위해서는 show() 메소드를 사용해야 합니다.

- 동적으로 추가된 Frame 을 제거하기 위해서는 removeChild() 메소드를 사용해야 합니다.

- removeChild() 메소드로 제거된 Frame 을 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.


---

### addEventHandler

> Frames > TileFrameSet > Method > addEventHandler

**Description**

TileFrameSet 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.addEventHandler( strEventID, objFunc, objTarget )
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

> Frames > TileFrameSet > Method > addEventHandlerLookup

**Description**

함수를 검색하여 TileFrameSet 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

### alert

> Frames > TileFrameSet > Method > alert

**Description**

TileFrameSet 의 경고 대화상자를 표시하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.alert( strText )
```

**Parameters**

```
대화상자에 표시할 텍스트를 설정합니다.
```

**Return**

없음

**Remark**

- TileFrameSet 의 중앙에 대화상자를 표시합니다.


---

### clearEventHandler

> Frames > TileFrameSet > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.clearEventHandler( strEventID )
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

### confirm

> Frames > TileFrameSet > Method > confirm

**Description**

 TileFrameSet 의 선택 대화상자를 표시하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.confirm( strText [,strCaption [,strType]] )
```

**Parameters**

```
대화상자에 표시할 텍스트를 설정합니다.
```

**Return**

표시된 선택 대화상자에서 "확인" 버튼을 선택하면 "true"를 반환합니다.
표시된 선택 대화상자에서 "취소" 버튼을 선택하면 "false"를 반환합니다.

**Remark**

- TileFrameSet 의 중앙에 선택 대화상자를 표시합니다.


---

### destroy

> Frames > TileFrameSet > Method > destroy

**Description**

스크립트에서 동적으로 생성한 TileFrameSet 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.destroy()
```

**Parameters**

var bSucc = this.TileFrameSet00.destroy();

**Return**

TileFrameSet 이(가) 정상적으로 삭제되면 true 를 반환합니다.

TileFrameSet 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 TileFrameSet 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildTileFrameSet.initTileFrameSet.show


---

### findEventHandler

> Frames > TileFrameSet > Method > findEventHandler

**Description**

TileFrameSet 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.findEventHandler( strEventID, objFunc, objTarget )
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

### getActiveFrame

> Frames > TileFrameSet > Method > getActiveFrame

**Description**

TileFrameSet 의 자식 Frame 중 활성화 상태인 Frame 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.getActiveFrame() ;
```

**Parameters**

var objApp = nexacro.getApplication() ;
var objActiveFrame = objApp.mainframe.frame.getActiveFrame() ;

**Return**

TileFrameSet 의 자식 Frame 중 활성화 상태일 Frame 오브젝트를 반환합니다.
TileFrameSet 의 자식 Frame 중 활성화 상태인 Frame 이 없을 경우 "null"을 반환합니다.

**Remark**

- 가장 최근에 활성화되어 최상위에 위치한 Frame 오브젝트를 반환합니다.


---

### getEventHandler

> Frames > TileFrameSet > Method > getEventHandler

**Description**

TileFrameSet 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.getEventHandler( strEventID, nIdx )
```

**Parameters**

```
핸들러 함수를 얻을 이벤트의 ID를 설정합니다.
```

**Return**

지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.

지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.


---

### getNativeHandle

> Frames > TileFrameSet > Method > getNativeHandle

**Description**

TileFrameSet이 속한 윈도우 핸들(HWND)값을 반환하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.getNativeHandle();
```

**Parameters**

var nHwnd = this.parent.getNativeHandle();

**Return**

TileFrameSet이 속한 윈도우 핸들(HWND)값


---

### getOffsetBottom

> Frames > TileFrameSet > Method > getOffsetBottom

**Description**

부모 Frame 의 Top 위치를 기준으로 TileFrameSet 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.getOffsetBottom();
```

**Parameters**

var objApp = nexacro.getApplication();

var nBottom = objApp.mainframe.frame.getOffsetBottom();

**Return**

부모 Frame 의 Top 위치를 기준으로 TileFrameSet 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 TileFrameSet 의 bottom 값을 부모 Frame 의 Top 위치를 기준으로 동적으로 계산합니다.


---

### getOffsetHeight

> Frames > TileFrameSet > Method > getOffsetHeight

**Description**

TileFrameSet 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.getOffsetHeight();
```

**Parameters**

var objApp = nexacro.getApplication() ;

var nHeight = objApp.mainframe.frame.getOffsetHeight( ) ;

**Return**

TileFrameSet 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 TileFrameSet 의 높이를 동적으로 계산합니다.


---

### getOffsetLeft

> Frames > TileFrameSet > Method > getOffsetLeft

**Description**

부모 Frame 의 Left 위치를 기준으로 TileFrameSet 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.getOffsetLeft();
```

**Parameters**

var objApp = nexacro.getApplication();

var nLeft = objApp.mainframe.frame.getOffsetLeft();

**Return**

부모 Frame 의 Left 위치를 기준으로 TileFrameSet 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 Frame 의 Left 위치를 기준으로 TileFrameSet 의 left 값을 동적으로 계산합니다.


---

### getOffsetRight

> Frames > TileFrameSet > Method > getOffsetRight

**Description**

부모 Frame 의 Left 위치를 기준으로 TileFrameSet 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.getOffsetLeft();
```

**Parameters**

var objApp = nexacro.getApplication();

var nRight = objApp.mainframe.frame.getOffsetRight();

**Return**

부모 Frame 의 Left 위치를 기준으로 TileFrameSet 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 Frame 의 Left 위치를 기준으로 TileFrameSet 의 right 값을 동적으로 계산합니다.


---

### getOffsetTop

> Frames > TileFrameSet > Method > getOffsetTop

**Description**

부모 Frame 의 Top 위치를 기준으로 TileFrameSet 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.getOffsetTop();
```

**Parameters**

var objApp = nexacro.getApplication();

var nTop = objApp.mainframe.frame.getOffsetTop();

**Return**

부모 Frame 의 Top 위치를 기준으로 TileFrameSet 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 TileFrameSet 의 top 값을 부모 Frame 의 Top 위치를 기준으로 동적으로 계산합니다.


---

### getOffsetWidth

> Frames > TileFrameSet > Method > getOffsetWidth

**Description**

TileFrameSet 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.getOffsetWidth();
```

**Parameters**

var objApp = nexacro.getApplication() ;

var nWidth = objApp.mainframe.frame.getOffsetWidth( ) ;

**Return**

TileFrameSet 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 TileFrameSet 의 너비를 동적으로 계산합니다.


---

### getOwnerFrame

> Frames > TileFrameSet > Method > getOwnerFrame

**Description**

TileFrameSet 이 소속된 부모 Frame 을 반환하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.getOwnerFrame()
```

**Parameters**

var objFrame = this.getOwnerFrame().getOwnerFrame() ;

**Return**

TileFrameSet 이 소속된 부모 Frame 오브젝트를 반환합니다.
TileFrameSet 이 소속된 Frame 이 없을 경우 "null"을 반환합니다.


---

### init

> Frames > TileFrameSet > Method > init

**Description**

스크립트로 TileFrameSet 을 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.init( strName, nLeft, nTop, nWidth, nHeight [, nRight, nBottom] )
```

**Parameters**

```
TileFrameSet 의 ID를 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- 위치관련 인수값에 단위를 사용할 경우 문자열로 설정하여야 합니다.

- 이미 show() 메소드가 호출된 경우에는 초기화가 끝난 상태입니다. 
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다. 

- 스크립트로 TileFrameSet 을 동적 생성한 후에 사용할 수 있습니다.
  동적으로 생성한 XComponenet 이 아닌 경우에는 오동작이 발생할 수 있습니다.

- 동적으로 생성한 TileFrameSet 을 부모 Frame 에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.


---

### insertChild

> Frames > TileFrameSet > Method > insertChild

**Description**

스크립트로 동적 생성한 Frame 을 TileFrameSet 의 자식 Frame 으로 특정 순서에 추가하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.insertChild( nIdx, strChildID, objComp )
```

**Parameters**

```
부모 Frame 에 추가 될 순서를 설정합니다.
"-1"로 설정할 경우 자식 Frame 중 제일 마지막에 추가됩니다.
```

**Return**

추가된 자식 Frame 의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

**Remark**

- 자식 Frame 은 선언된 순서에 따라 화면에 표시됩니다.
  따라서 nIdx 값에 따라 추가되는 Frame 의 화면표시 순서가 정해집니다.
  Frame 이 겹칠 경우 nIdx 값이 작은 Frame 이 nIdx 값이 큰 Frame 에게 가려지게 됩니다.

- insertChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- 스크립트에서 동적으로 생성한 Frame 만 추가할 수 있습니다.
  동적으로 생성한 Frame 이 아닌 경우 오동작이 발생할 수 있습니다.

- 자식 Frame 의 세부 속성은 insertChild() 메소드로 자식 Frame 을 추가 후 설정해야 합니다.

- 자식 Frame 으로 추가된 Frame 을 화면에 표시하기 위해서는 show() 메소드를 사용해야 합니다.

- 동적으로 추가된 Frame 을 제거하기 위해서는 removeChild() 메소드를 사용해야 합니다.

- removeChild() 메소드로 제거된 Frame 을 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.


---

### insertEventHandler

> Frames > TileFrameSet > Method > insertEventHandler

**Description**

TileFrameSet 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

> Frames > TileFrameSet > Method > move

**Description**

TileFrameSet 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.move( nLeft, nTop [, nWidth, nHeight [, nRight, nBottom]] )
```

**Parameters**

```
TileFrameSet 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 인수값에 "px" 또는 "%" 단위를 사용할 경우 문자열로 설정하여야 합니다.

- TileFrameSet 이 고정된 형태를 갖는 HFrameSet, VFrameSet, TileFrameSet 의 자식 Frame 일 경우 move() 메소드는 동작하지 않습니다.


---

### removeChild

> Frames > TileFrameSet > Method > removeChild

**Description**

TileFrameSet 에 동적으로 추가된 Frame 을 제거하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.removeChild( strChildID )
```

**Parameters**

```
제거할 자식 Frame 의 ID를 문자열로 설정합니다.
```

**Return**

Frame 제거에 성공하면 제거된 Frame 의 오브젝트를 반환합니다.
Frame 제거에 실패하면 "null"을 반환합니다.

**Remark**

- removeChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- addChild() 또는 insertChild() 메소드를 사용하여 동적으로 추가한 Frame 만 제거할 수 있습니다.
  동적으로 추가한 Frame 이 아닌 경우 오동작이 발생할 수 있습니다.

- removeChild() 메소드로 제거된 Frame 을 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.


---

### removeEventHandler

> Frames > TileFrameSet > Method > removeEventHandler

**Description**

TileFrameSet 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.removeEventHandler( strEventID, objFunc, objTarget )
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

> Frames > TileFrameSet > Method > removeEventHandlerLookup

**Description**

TileFrameSet 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

### setEventHandler

> Frames > TileFrameSet > Method > setEventHandler

**Description**

TileFrameSet 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.setEventHandler( strEventID, objFunc, objTarget )
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

> Frames > TileFrameSet > Method > setEventHandlerLookup

**Description**

TileFrameSet 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

> Frames > TileFrameSet > Method > setFocus

**Description**

TileFrameSet 을 활성화하고 포커스를 주는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.setFocus()
```

**Parameters**

var objApp = nexacro.getApplication() ;
var objRemoveFrame = objApp.mainframe.frame.setFocus() ;

**Return**

없음

**Remark**

- Frame 에 다수의 자식 Frame 을 갖고 있을 때 특정 Frame 을 활성화하고 다른 Frame 보다 앞에 표시하는 메소드입니다.

- Frame 이 포커스 되면 Frame 내의 컴포넌트 중 마지막에 포커스를 가진 컴포넌트가 포커스를 갖습니다.


---

### setOffsetBottom

> Frames > TileFrameSet > Method > setOffsetBottom

**Description**

TileFrameSet 이 FrameSet 의 하위에 속해 있을 때 TileFrameSet 의 bottom 을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.setOffsetBottom( nBottom );
```

**Parameters**

```
부모 FrameSet 의 Top 위치를 기준으로 TileFrameSet 의 bottom 을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- TileFrameSet 의 부모 Frame 이 FrameSet 이 아니면 TileFrameSet 의 bottom 이 변경되지 않습니다.


---

### setOffsetHeight

> Frames > TileFrameSet > Method > setOffsetHeight

**Description**

TileFrameSet 이 FrameSet 의 하위에 속해 있을 때 TileFrameSet 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.setOffsetHeight( nHeight );
```

**Parameters**

```
TileFrameSet 의 높이를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 후 TileFrameSet 의 height 속성에 값이 설정됩니다.

- TileFrameSet 의 부모 Frame 이 FrameSet 이 아니면 TileFrameSet 의 높이가 변경되지 않습니다.


---

### setOffsetLeft

> Frames > TileFrameSet > Method > setOffsetLeft

**Description**

TileFrameSet 이 FrameSet 의 하위에 속해 있을 때 TileFrameSet 의 left 를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.setOffsetLeft( nLeft );
```

**Parameters**

```
부모 FrameSet 의 Left 위치를 기준으로 TileFrameSet 의 left 를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 후 TileFrameSet 의 left 속성에 값이 설정됩니다.

- TileFrameSet 의 부모 Frame 이 FrameSet 이 아니면 TileFrameSet 의 left 가 변경되지 않습니다.


---

### setOffsetRight

> Frames > TileFrameSet > Method > setOffsetRight

**Description**

TileFrameSet 이 FrameSet 의 하위에 속해 있을 때 TileFrameSet 의 right 를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.setOffsetRight( nRight );
```

**Parameters**

```
부모 FrameSet 의 Left 위치를 기준으로 TileFrameSet 의 right 를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- TileFrameSet 의 부모 Frame 이 FrameSet 이 아니면 TileFrameSet 의 right 가 변경되지 않습니다.


---

### setOffsetTop

> Frames > TileFrameSet > Method > setOffsetTop

**Description**

TileFrameSet 이 FrameSet 의 하위에 속해 있을 때 TileFrameSet 의 top 을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.setOffsetTop( nTop );
```

**Parameters**

```
부모 FrameSet 의 Top 위치를 기준으로 TileFrameSet 의 top 을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 후 TileFrameSet 의 top 속성에 값이 설정됩니다.

- TileFrameSet 의 부모 Frame 이 FrameSet 이 아니면 TileFrameSet 의 top 이 변경되지 않습니다.


---

### setOffsetWidth

> Frames > TileFrameSet > Method > setOffsetWidth

**Description**

TileFrameSet 이 FrameSet 의 하위에 속해 있을 때 TileFrameSet 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
TileFrameSet.setOffsetWidth( nWidth );
```

**Parameters**

```
TileFrameSet 의 너비를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 후 TileFrameSet 의 width 속성에 값이 설정됩니다.

- TileFrameSet 의 부모 Frame 이 FrameSet 이 아니면 TileFrameSet 의 너비가 변경되지 않습니다.


---

### show

> Frames > TileFrameSet > Method > show

**Description**

스크립트로 동적 생성한 TileFrameSet 을 화면에 표시하는 메소드입니다

**Syntax**

```javascript
TileFrameSet.show()
```

**Parameters**

var objApp = nexacro.getApplication() ;

var objFrame = new TileFrameSet();
objFrame.init( "TileFrameSet00", 30, 120, 196, 46 );

objApp.mainframe.frame.insertChild( 0, "TileFrameSet00", objFrame ) ;
objFrame.show();

**Return**

없음

**Remark**

- 스크립트로 TileFrameSet 을 동적 생성한 후에 사용 가능합니다.
  동적으로 생성한 TileFrameSet 이 아닌 경우에는 오동작 할 수 있습니다.

- 동적 생성한 TileFrameSet 을 추가하기 위해 부모 Frame 의 addChild() 메소드나 insertChild() 메소드를 사용합니다.
  추가된 TileFrameSet 을 표시하기 위해 show() 메소드를 사용합니다.
  부모 Frame 에 추가되지 않고 show() 메소드를 사용할 경우 에러가 발생합니다.


---

### 이벤트 (Events)

### onactivate

> Frames > TileFrameSet > Event > onactivate

**Description**

TileFrameSet 이 활성화 되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onactivate(obj:nexacro.TileFrameSet,e:nexacro.ActivateEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 앱이 활성화될 때 이벤트가 발생합니다.
- MainFrame > [Frameset] > ChildFrame > Form 순으로 이벤트가 발생합니다.
  ChildFrame 의 onactivate 이벤트가 발생한 후 ChildFrame 의 formurl 속성에 설정된 Form 에서 onactivate 이벤트가 발생합니다. 
- 운영체제에 따라 특정 동작 또는 시스템과 연결되어 이벤트가 발생할 수 있습니다.
  > 안드로이드
     앱 시작 시
     background 상태에서 다시 foreground 상태로 변경될 때
  > iOS
    앱 시작 시
    background 상태에서 다시 foreground 상태로 변경될 때
    키패드가 내려가면서 deactive 상태가 된 상태에서 Form에 포커스를 줄 때
    (WKWebView 내부에서 포커스 동작 시 시스템 이벤트 발생 기준과 같습니다).


---

### onbeforeclose

> Frames > TileFrameSet > Event > onbeforeclose

**Description**

TileFrameSet 이 종료되기 전에 발생하는 이벤트입니다.

**Syntax**

```javascript
onbeforeclose(obj:nexacro.TileFrameSet,e:nexacro.CloseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 문자열 설정 시 TileFrameSet 종료를 위한 확인창이 표시됩니다.
이벤트에서 리턴값으로 설정한 문자열이 종료를 위한 확인창에 사용됩니다.

이벤트에서 리턴값을 생략하거나 null, undefined, ""(Empty String) 으로 설정 시 확인창이 표시되지 않습니다.

**Remark**

- 일반적으로 어플리케이션 종료 전 사용자의 확인을 받을 때 사용하는 이벤트입니다.

- onbeforeclose 이벤트는 최하위부터 최상위로 전파되는 이벤트입니다.
   TileFrameSet 의 하위 오브젝트에 onbeforeclose 이벤트가 정의되어 있다면 최하위 오브젝트의 이벤트부터 차례로 수행됩니다.
   최종 onbeforeclose 이벤트 수행 후 각 이벤트의 리턴값은 누적되어 종료를 위한 확인창에 모두 표시됩니다.

- 종료를 위한 확인창에서 "확인"을 선택하면 onclose 이벤트가 발생하고 TileFrameSet 이 종료됩니다.
   종료를 위한 확인창에서 "취소"를 선택하면 onclose 이벤트가 발생하지 않고 TileFrameSet 이 종료되지 않습니다.


---

### onclose

> Frames > TileFrameSet > Event > onclose

**Description**

TileFrameSet 이 종료될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onclose(obj:nexacro.TileFrameSet,e:nexacro.CloseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- onclose 이벤트는 최하위부터 최상위로 전파되는 이벤트입니다.
   TileFrameSet 의 하위 오브젝트에 onclose 이벤트가 정의되어 있다면 최하위 오브젝트의 이벤트부터 차례로 수행됩니다.
   최종 onclose 이벤트 수행 후 TileFrameSet 이 종료됩니다.


---

### ondeactivate

> Frames > TileFrameSet > Event > ondeactivate

**Description**

TileFrameSet 이 활성화 되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondeactivate(obj:nexacro.TileFrameSet,e:nexacro.ActivateEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 앱이 활성화될 때 이벤트가 발생합니다.
- MainFrame > [Frameset] > ChildFrame > Form 순으로 이벤트가 발생합니다.
  ChildFrame 의 onactivate 이벤트가 발생한 후 ChildFrame 의 formurl 속성에 설정된 Form 에서 onactivate 이벤트가 발생합니다. 
- 운영체제에 따라 특정 동작 또는 시스템과 연결되어 이벤트가 발생할 수 있습니다.
  > 안드로이드
     앱 시작 시
     background 상태에서 다시 foreground 상태로 변경될 때
  > iOS
    앱 시작 시
    background 상태에서 다시 foreground 상태로 변경될 때
    키패드가 내려가면서 deactive 상태가 된 상태에서 Form에 포커스를 줄 때
    (WKWebView 내부에서 포커스 동작 시 시스템 이벤트 발생 기준과 같습니다).


---

### onmove

> Frames > TileFrameSet > Event > onmove

**Description**

TileFrameSet 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmove(obj:nexacro.TileFrameSet,e:nexacro.MoveEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onorientationchange

> Frames > TileFrameSet > Event > onorientationchange

**Description**

모바일 기기의 화면 방향이 변경되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onorientationchange(obj:nexacro.TileFrameSet,e:nexacro.OrientationChangeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- onorientationchange  이벤트는 상위에서 하위로 이벤트가 발생합니다.
  모바일 기기의 방향 전환 시 MainFrame 의 onorientationchange 이벤트가 처음 발생한 후 Frame, Form 순서로 이벤트가 발생합니다.
  이때, preventDefault() 메소드로 이벤트 발생을 중지시킬 수 없습니다.

- onorientationchange 이벤트 내에서 MainFrame 크기 또는 시스템에서 값을 얻는 속성에 접근 시 변경된 값이 전달되지 않을 수 있습니다.
  모바일 기기마다 시스템 관련값의 갱신 시점이 다르고, onorientationchange 이벤트는 기기의 방향이 전환된 즉시 발생하기 때문입니다.


---

### onsize

> Frames > TileFrameSet > Event > onsize

**Description**

TileFrameSet 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsize(obj:nexacro.TileFrameSet,e:nexacro.SizeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onsyscommand

> Frames > TileFrameSet > Event > onsyscommand

**Description**

TileFrameSet 에 시스템명령(Command) 메시지가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsyscommand(obj:nexacro.TileFrameSet,e:nexacro.SysCommandEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 프레임으로 이벤트가 전파되고, 시스템명령이 수행됩니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 프레임으로 이벤트가 전파되지 않고, 시스템명령도 취소됩니다.

이벤트에서 리턴값을 생략하면 true 로 적용됩니다.

**Remark**

- 이벤트의 리턴값에 따라 상위 프레임으로 이벤트가 전파됩니다.

- 이벤트가 상위로 전파되는 중간에 이벤트 리턴값으로 false 가 반환되면 상위 프레임으로 이벤트가 전파되지 않고 시스템명령이 취소됩니다.

- 프레임의 최소/최대 버튼이 클릭되었을 때 onsyscommand 이벤트에서 false 를 반환하면 최소/최대화 명령이 취소됩니다.


---

## Frames > VFrameSet

### VFrameSet

> Frames > VFrameSet

**Description**

MainFrame 하위에 오는 Frame 으로써 애플리케이션의 화면 배열을 위한 기본단위 화면으로 사용됩니다. 

VFrameSet 은 하위에 FrameSet, HFrameSet, VFrameSet, TileFrameSet, ChildFrame을 반복적으로 가질 수 있습니다.
또한 수직 방향으로 자동으로 하위 Frame 을 배열할 수 있는 기능이 있습니다.

**Structure**



**Property**

| Name | Description |
| --- | --- |
| all | VFrameSet 에 등록된 Frame 을 갖는 읽기전용 속성입니다. |
| background | VFrameSet 의 배경 영역을 설정하는 속성입니다. |
| border-radius | VFrameSet 의 모서리 모양을 설정하는 속성입니다. |
| bottom | VFrameSet 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다. |
| color | VFrameSet 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| cssclass | VFrameSet 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다. |
| cursor | VFrameSet 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| enable | VFrameSet 의 사용가능 여부를 설정하는 속성입니다. |
| enableevent | VFrameSet 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다. |
| font | VFrameSet 에서 사용하는 폰트를 설정하는 속성입니다. |
| frames | VFrameSet 에 등록된 자식 Frame 들을 Collection 형태로 갖는 읽기전용 속성입니다. |
| height | VFrameSet 을(를) 표시하기 위한 높이를 설정하는 속성입니다. |
| hotkey | VFrameSet 의 기본 액션을 수행하기 위한 단축키를 설정하는 속성입니다. |
| id | VFrameSet의 고유 식별자를 설정하는 속성입니다. |
| initvalueid | VFrameSet 에 적용될 InitValue 의 ID 를 설정하는 속성입니다. |
| left | VFrameSet 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다. |
| letter-spacing | VFrameSet 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다. |
| name | VFrameSet 의 이름을 설정하는 속성입니다. |
| -nexa-border | VFrameSet 의 테두리를 설정하는 속성입니다. |
| -nexa-edge | VFrameSet 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-rtl-background-image | VFrameSet 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| -nexa-rtl-edge-image | VFrameSet 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| opacity | VFrameSet 영역의 투명도를 설정하는 속성입니다. |
| progressbardirection | VFrameSet 의 StatusBar 에 표시되는 ProgressBar 의 진행방향을 설정하는 속성입니다. |
| progressbargap | VFrameSet 의 StatusBar 에 표시되는 ProgressBar 의 오른쪽 공간 크기를 설정하는 설정하는 속성입니다. |
| progressbarsize | VFrameSet 의 StatusBar 에 표시되는 ProgressBar 의 너비를 설정하는 속성입니다. |
| progressbarsmooth | MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 진행바가 연속된 형태로 표시될 지 설정하는 속성입니다. |
| right | VFrameSet 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다. |
| separatesize | VFrameSet 에서 자식 Frame 들이 표시되는 높이를 자식 Frame 별로 설정하는 속성입니다. |
| showcascadestatustext | VFrameSet 의 StatusBar 에 하위 Frame 과 Form 의 statustext 속성값을 모두 표시할 지 설정하는 속성입니다. |
| showcascadetitletext | VFrameSet 의 TitleBar 에 하위 Frame 과 Form 의 titletext 속성값을 모두 표시할 지 설정하는 속성입니다. |
| showstatusbar | VFrameSet 에 StatusBar 표시 여부를 설정하는 속성입니다. |
| showtitlebar | VFrameSet 의 TitleBar 표시 여부를 설정하는 속성입니다. |
| showtitleicon | VFrameSet 의 타이틀바에 아이콘 표시 여부를 설정하는 속성입니다. |
| statusbar | VFrameSet 의 상태바 오브젝트를 갖는 속성입니다. |
| statusbarheight | VFrameSet 의 StatusBar 높이를 설정하는 속성입니다. |
| statustext | VFrameSet 의 StatusBar 에 표시될 텍스트를 설정하는 속성입니다. |
| titlebar | VFrameSet 의 타이틀바 오브젝트를 갖는 속성입니다. |
| titlebarbuttongap | VFrameSet 의 TitleBar 에 표시되는 시스템 버튼의 간격을 설정하는 속성입니다. |
| titlebarbuttonsize | VFrameSet 의 타이틀바에 표시되는 시스템 버튼의 크기을 설정하는 속성입니다. |
| titlebarheight | VFrameSet 의 TitleBar 높이를 설정하는 속성입니다. |
| titletext | VFrameSet 의 TitleBar 에 표시될 텍스트를 설정하는 속성입니다. |
| top | VFrameSet 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다. |
| visible | VFrameSet 이(가) 화면에 표시될지 여부를 설정하는 속성입니다. |
| width | VFrameSet 을(를) 표시하기 위한 너비를 설정하는 속성입니다. |
| word-spacing | VFrameSet 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addChild | 스크립트로 동적 생성한 Frame 을 VFrameSet 의 자식 Frame 으로 추가하는 메소드입니다. |
| addEventHandler | VFrameSet 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 VFrameSet 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| alert | VFrameSet 의 경고 대화상자를 표시하는 메소드입니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| confirm | VFrameSet 의 선택 대화상자를 표시하는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 VFrameSet 을(를) 삭제하는 메소드입니다. |
| findEventHandler | VFrameSet 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getActiveFrame | VFrameSet 의 자식 Frame 중 활성화 상태인 Frame 오브젝트를 반환하는 메소드입니다. |
| getEventHandler | VFrameSet 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| getNativeHandle | VFrameSet이 속한 윈도우 핸들(HWND)값을 반환하는 메소드입니다. |
| getOffsetBottom | 부모 Frame 의 Top 위치를 기준으로 VFrameSet 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetHeight | VFrameSet 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetLeft | 부모 Frame 의 Left 위치를 기준으로 VFrameSet 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetRight | 부모 Frame 의 Left 위치를 기준으로 VFrameSet 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetTop | 부모 Frame 의 Top 위치를 기준으로 VFrameSet 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetWidth | VFrameSet 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOwnerFrame | VFrameSet 이 소속된 부모 Frame 을 반환하는 메소드입니다. |
| init | 스크립트로 VFrameSet 을 동적 생성한 후에 초기화하는 메소드입니다. |
| insertChild | 스크립트로 동적 생성한 Frame 을 VFrameSet 의 자식 Frame 으로 특정 순서에 추가하는 메소드입니다. |
| insertEventHandler | VFrameSet 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| move | VFrameSet 의 위치와 크기를 변경하는 메소드입니다. |
| removeChild | VFrameSet 에 동적으로 추가된 Frame 을 제거하는 메소드입니다. |
| removeEventHandler | VFrameSet 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | VFrameSet 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| setEventHandler | VFrameSet 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | VFrameSet 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| setFocus | VFrameSet 을 활성화하고 포커스를 주는 메소드입니다. |
| setOffsetBottom | VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 bottom 을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetHeight | VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetLeft | VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 left 를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetRight | VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 right 를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetTop | VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 top 을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetWidth | VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| show | 스크립트로 동적 생성한 VFrameSet 을 화면에 표시하는 메소드입니다 |

**Event**

| Name | Description |
| --- | --- |
| onactivate | VFrameSet 이 활성화 되었을 때 발생하는 이벤트입니다. |
| onbeforeclose | VFrameSet 이 종료되기 전에 발생하는 이벤트입니다. |
| onclose | VFrameSet 이 종료될 때 발생하는 이벤트입니다. |
| ondeactivate | VFrameSet 이 비활성화 되었을 때 발생하는 이벤트입니다. |
| onmove | VFrameSet 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| onorientationchange | 모바일 기기의 화면 방향이 변경되었을 때 발생하는 이벤트입니다. |
| onsize | VFrameSet 의 크기가 변경됐을 때 발생하는 이벤트입니다. |
| onsyscommand | VFrameSet 에 시스템명령(Command) 메시지가 들어왔을 때 발생하는 이벤트입니다. |

**Status**

컴포넌트가 비활성화된 상태

**Control**

| Name | TypeName |
| --- | --- |
| titlebar | nexacro.TitleBarControl |
| statusbar | nexacro.StatusBarControl |


---

### 속성 (Properties)

### -nexa-border

> Frames > VFrameSet > Property > -nexa-border

**Description**

VFrameSet 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.border[= strborder]
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
this.VFrameSet00.border = "1px solid #999999";
this.VFrameSet00.border = "1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999";
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

> Frames > VFrameSet > Property > -nexa-edge

**Description**

VFrameSet 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.edge[= stredge]
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
this.VFrameSet00.edge = "URL('./images/border.png')" 5px 5px;
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

- VFrameSet 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.


◆ WRE 제약

- <fixedwidth>,<fixedheight> 값이 이미지 사이즈의 1/2 을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-rtl-background-image

> Frames > VFrameSet > Property > -nexa-rtl-background-image

**Description**

VFrameSet 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.-nexa-rtl-background-image
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

> Frames > VFrameSet > Property > -nexa-rtl-edge-image

**Description**

VFrameSet 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.-nexa-rtl-edge-image
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

### all

> Frames > VFrameSet > Property > all

**Description**

VFrameSet 에 등록된 Frame 을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
VFrameSet.all
```

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication();
var objFrames = objApp.mainframe.[Frame구조].all;
```

**Remark**

- all 속성은 Collection 접근방식을 사용할 수 있습니다.
  VFrameSet.all[0], VFrameSet.all["ChildFrame0"], VFrameSet.all.length 등의 방법을 사용합니다.


---

### background

> Frames > VFrameSet > Property > background

**Description**

VFrameSet 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.background[= strbackground]
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
this.VFrameSet00.background = "#ffffaa";
this.VFrameSet00.background = ""URL('./images/smiley.gif')" no-repeat center center #ffffaa";
this.VFrameSet00.background = ""URL('./images/smiley.gif')" no-repeat center center /auto #ffffaa";
this.VFrameSet00.background = ""URL('./images/smiley.gif')" no-repeat center center /15px 15% #ffffaa";
this.VFrameSet00.background = "linear-gradient( red , blue , yellow )";
this.VFrameSet00.background = "linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0))";
this.VFrameSet00.background = ""URL('./images/smiley.gif')" border-box border-box #ffffaa";
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

"left" 설정 시 VFrameSet 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 VFrameSet 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 VFrameSet 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 VFrameSet 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 VFrameSet 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 VFrameSet 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
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

0 보다 작거나 100 보다 큰 값을 설정 시 VFrameSet 의 영역을 벗어난 가상의 위치로 적용됩니다.

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
예를 들어 <angle> 값이 "to left" 이면 VFrameSet 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 VFrameSet 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

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

0 보다 작거나 100 보다 큰 값을 설정 시 VFrameSet 의 영역을 벗어난 가상의 위치로 적용됩니다.
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
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 VFrameSet 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

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

> Frames > VFrameSet > Property > border-radius

**Description**

VFrameSet 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.borderRadius[= strborderradius]
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
this.VFrameSet00.borderRadius = "10px";
this.VFrameSet00.borderRadius = "5px 6px 10px / 5px 10px";
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

> Frames > VFrameSet > Property > bottom

**Description**

VFrameSet 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.bottom[= nBottom]
```

**Setting Syntax**

```javascript
nBottom ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — VFrameSet 의 하단 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### color

> Frames > VFrameSet > Property > color

**Description**

VFrameSet 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.color[= strcolor]
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
this.VFrameSet00.color = "#999999";
this.VFrameSet00.color = "rgb(255,0,0)";
this.VFrameSet00.color = "red";
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

> Frames > VFrameSet > Property > cssclass

**Description**

VFrameSet 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.cssclass[= strcssclass]
```

**Setting Syntax**

```javascript
strcssclass ::= <ClassName> [ , &ltClassName> ]*
```
```javascript
var objApp = nexacro.getApplication();

objApp.mainframe.VFramSet00.cssclass = "TestClass";
objApp.mainframe.VFramSet00.cssclass = "TestClass,TestClass2";
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

> Frames > VFrameSet > Property > cursor

**Description**

VFrameSet 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.cursor[= strCursor]
```

**Setting Syntax**

```javascript
strCursor ::= 'none' | 'auto' | 'default' | 'copy' | 'crosshair' | 'help' | 'move' | 'not-allowed' | 'pointer' | 'progress' | 'text' | 'wait' | 'ew-resize' | 'e-resize' | 'w-resize' | 'ns-resize' | 'n-resize' | 's-resize' | 'nesw-resize' | 'ne-resize' | 'sw-resize' | 'nwse-resize' | 'nw-resize' | 'se-resize'
```
```javascript
* XCSS
cursor : default;

* Script ( normal property )
this.VFrameSet00.cursor = "default";
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

> Frames > VFrameSet > Property > enable

**Description**

VFrameSet 의 사용가능 여부를 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.enable[= benable]
```

**Setting Syntax**

```javascript
benable ::= 'true' | 'false'
```
```javascript
this.VFrameSet00.enable = true; 
this.VFrameSet00.enable = false;
```
- **`true`** — VFrameSet 을(를) 사용할 수 있게 설정합니다.
- **`false`** — VFrameSet 을(를) 사용할 수 없게 설정합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "disabled" Status 가 적용됩니다.

**Remark**

- enable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enable 속성값이 false 이면 컴포넌트가 화면에 표시되지만 포커스나 입력을 받을 수 없습니다.

- Div 와 같은 컨테이너 컴포넌트의 enable 속성값을 false 로 설정하면 자식 컴포넌트도 모두 Disable 됩니다.


---

### enableevent

> Frames > VFrameSet > Property > enableevent

**Description**

VFrameSet 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.enableevent[= bEvent]
```

**Setting Syntax**

```javascript
bEvent ::= 'true' | 'false'
```
```javascript
this.VFrameSet00.enableevent = true;  

this.VFrameSet00.enableevent = false;
```
- **`true`** — VFrameSet 에서 이벤트가 발생하도록 설정합니다.
- **`false`** — VFrameSet 에서 이벤트가 발생하지 않도록 설정합니다.

**Remark**

- enableevent 속성을 false 로 설정하면 이벤트 발생으로 인한 처리속도 지연과 화면 깜빡임을 방지할 수 있습니다.


---

### font

> Frames > VFrameSet > Property > font

**Description**

VFrameSet 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.font[= strfont]
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
this.VFrameSet00.font = "bold 12pt/30px arial, sans-serif";
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

### frames

> Frames > VFrameSet > Property > frames

**Description**

VFrameSet 에 등록된 자식 Frame 들을 Collection 형태로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
VFrameSet.frames
```

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication();
var objFrame = objApp.mainframe.frame.frames[1];
```

**Remark**

- frames 속성은 Collection 접근방식을 사용할 수 있습니다.
  VFrameSet.frames[0], VFrameSet.frames["ChildFrame0"], VFrameSet.frames.length 등의 방법을 사용합니다.


---

### height

> Frames > VFrameSet > Property > height

**Description**

VFrameSet 을(를) 표시하기 위한 높이를 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.height[= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — VFrameSet 의 높이를 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 높이값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 높이값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### hotkey

> Frames > VFrameSet > Property > hotkey

**Description**

VFrameSet 의 기본 액션을 수행하기 위한 단축키를 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.hotkey[= strHotkey]
```

**Setting Syntax**

```javascript
this.VFrameSet00.hotkey = "G"; 
this.VFrameSet00.hotkey = "CTRL+A"; 
this.VFrameSet00.hotkey = "CTRL+ALT+X";
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

> Frames > VFrameSet > Property > id

**Description**

VFrameSet의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.id
```

**Setting Syntax**

- **`id`** — VFrameSet를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### initvalueid

> Frames > VFrameSet > Property > initvalueid

**Description**

VFrameSet 에 적용될 InitValue 의 ID 를 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.initvalueid[= strValueID]
```

**Setting Syntax**

- **`strValueID`** — InitValueDefinition 영역에 정의된 InitValue 파일에서 VFrameSet 에 적용할 항목의 ID 를 문자열로 설정합니다.

**Remark**

- VFrameSet 가 화면에 표시된 후에는 속성값을 설정하거나 변경 할 수 없습니다.
   VFrameSet 를 동적으로 생성 시 show() 메소드 실행 전에 속성값을 설정하여야 합니다.

- Screen 별로 Environment 의 initvaluefileid 속성을 각각 설정하면 Screen 에 따라 다른 초기값을 설정할 수 있습니다.

- InitValueDefinition 영역에 한 개 이상의 InitValue 파일을 정의할 수 있고,
   InitValue 파일에는 컴포넌트별로 여러개의 초기값 정의를 할 수 있습니다.


---

### left

> Frames > VFrameSet > Property > left

**Description**

VFrameSet 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.left [=nLeft]
```

**Setting Syntax**

```javascript
nLeft ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — VFrameSet 의 좌측 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### letter-spacing

> Frames > VFrameSet > Property > letter-spacing

**Description**

VFrameSet 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.letterSpacing[= strspace]
```

**Setting Syntax**

```javascript
strspace ::= 'normal' | <nVal> ['px']
```
```javascript
* XCSS
letter-spacing : 2px ;

* Script ( normal property )
this.VFrameSet00.letterSpacing = "2px";
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

> Frames > VFrameSet > Property > name

**Description**

VFrameSet 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### opacity

> Frames > VFrameSet > Property > opacity

**Description**

VFrameSet 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.opacity[= stropacity]
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8;
opacity : 80%;

* Script ( normal property )
this.VFrameSet00.opacity = "0.8";
this.VFrameSet00.opacity = 0.8;
this.VFrameSet00.opacity = "80%";
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

### progressbardirection

> Frames > VFrameSet > Property > progressbardirection

**Description**

VFrameSet 의 StatusBar 에 표시되는 ProgressBar 의 진행방향을 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.progressbardirection[= enumDirection]
```

**Setting Syntax**

```javascript
enumDirection ::= 'forward' | 'backward'
```
- **`"forward"`** — ProgressBar 의 진행바가 왼쪽에서 오른쪽으로 증가합니다.
- **`"backward"`** — ProgressBar 의 진행바가 오른쪽에서 왼쪽으로 증가합니다.

**Remark**

- direction 속성값을 설정하지 않으면 "forward"로 적용됩니다.

- 진행중인 통신 상태는 StatusBar 의 ProgressBar 를 통해 확인할 수 있습니다.


---

### progressbargap

> Frames > VFrameSet > Property > progressbargap

**Description**

VFrameSet 의 StatusBar 에 표시되는 ProgressBar 의 오른쪽 공간 크기를 설정하는 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.progressbargap[= nSize]
```

**Setting Syntax**

- **`nSize`** — ProgressBar 의 오른쪽 공간 크기를 pixel 단위로 설정합니다.


---

### progressbarsize

> Frames > VFrameSet > Property > progressbarsize

**Description**

VFrameSet 의 StatusBar 에 표시되는 ProgressBar 의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.progressbarsize[= nSize]
```

**Setting Syntax**

- **`nSize`** — ProgressBar 의 너비를 pixel 단위로 설정합니다.


---

### progressbarsmooth

> Frames > VFrameSet > Property > progressbarsmooth

**Description**

MainFrame 의 StatusBar 에 표시되는 ProgressBar 의 진행바가 연속된 형태로 표시될 지 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.progressbarsmooth[= bSmooth]
```

**Setting Syntax**

```javascript
bSmooth ::= 'true' | 'false'
```
- **`"true"`** — 진행바가 끊어진 부분 없이 연속된 모양으로 표시됩니다.
- **`"false"`** — 진행바가 블럭형태로 표시됩니다.


---

### right

> Frames > VFrameSet > Property > right

**Description**

VFrameSet 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.right [=nRight]
```

**Setting Syntax**

```javascript
nRight ::= <nVal>['px' | '%']
```
- **`<nVal>`** — VFrameSet 의 우측 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### separatesize

> Frames > VFrameSet > Property > separatesize

**Description**

VFrameSet 에서 자식 Frame 들이 표시되는 높이를 자식 Frame 별로 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.separatesize[= strSize]
```

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication();

objApp.mainframe.VFramSet00.separatesize = "200,*,400,2*";
```
- **`strSize`** — 각 자식 Frame 별로 표시될 높이를 콤마(",")로 구분하여 설정합니다.

높이를 숫자로 설정 시 해당 자식 Frame 의 고정 높이로 적용됩니다.
높이에 "*" 기호를 사용할 경우 자식 Frame 의 높이가 비율로 적용됩니다.
"2*", "3*" 형태로 설정 시 기준값에 2배 비율, 3배 비율로 적용됩니다.

자식 Frame 수보다 설정된 높이 갯수가 적을 경우 설정값이 없는 자식 Frame 은 "*" 로 적용됩니다.
자식 Frame 수보다 설정된 높이 갯수가 많을 경우 나머지 설정값은 무시됩니다.

**Remark**

- separatesize 속성값에 비율을 설정하였을 경우 비율의 기준값은 전체 VFrameSet 높이에서 고정 높이값을 빼고 계산합니다.

  ex) VFrame 높이가 "1000" 이고, separatesize 속성값이 "200,*,400,4*" 일 때
       비율로 처리될 높이는 전체 높이 "1000" 에서 고정높이인 "600"(200+400)을 뺀 "400" 이 되고,
       비율의 기준값은 "400" 에서 비율값인 "5*"(* + 4*)을 나눈 "80"이 기준값이 됩니다.

       따라서 첫번째 자식 Frame 의 높이는 고정값인 "200"
       두번째 자식 Frame 의 높이는 기준값 "80"에 대한 1배 비율인 "80"
       세번째 자식 Frame 의 높이는 고정값인 "400"
       마지막 자식 Frame 의 높이는 기준값 "80"에 대한 4배 비율인 "320" 이 됩니다.


---

### showcascadestatustext

> Frames > VFrameSet > Property > showcascadestatustext

**Description**

VFrameSet 의 StatusBar 에 하위 Frame 과 Form 의 statustext 속성값을 모두 표시할 지 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.showcascadestatustext[= bShow]
```

**Setting Syntax**

```javascript
bShow ::= 'true' | 'false'
```
- **`"true"`** — 하위 Frame 과 Form 의 statustext 속성값이 "-" 구분자를 사용하여 연속적으로 표시됩니다.
- **`"false"`** — VFrameSet 의 statustext 속성값만 표시합니다.

**Remark**

- VFrameSet 의 showstatusbar 속성값이 "true" 일 경우만 적용됩니다.

- VFrameSet 보다 상위 Frame 의 StatusBar 는 상위 Frame 의 showcascadestatustext 속성값에 따라 표시됩니다.


---

### showcascadetitletext

> Frames > VFrameSet > Property > showcascadetitletext

**Description**

VFrameSet 의 TitleBar 에 하위 Frame 과 Form 의 titletext 속성값을 모두 표시할 지 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.showcascadetitletext[= bShow]
```

**Setting Syntax**

```javascript
bShow ::= 'true' | 'false'
```
- **`"true"`** — 하위 Frame 과 Form 의 titletext 속성값이 "-" 구분자를 사용하여 연속적으로 표시됩니다.
- **`"false"`** — VFrameSet 의 titletext 속성값만 표시합니다.

**Remark**

- VFrameSet 의 showtitlebar 속성값이 "true" 일 경우만 적용됩니다.

- VFrameSet 보다 상위 Frame 의 TtileBar 는 상위 Frame 의 showcascadetitletext 속성값에 따라 표시됩니다.


---

### showstatusbar

> Frames > VFrameSet > Property > showstatusbar

**Description**

VFrameSet 에 StatusBar 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.showstatusbar[= bshowstatus]
```

**Setting Syntax**

```javascript
bshowstatus ::= 'true' | 'false'
```
```javascript
this.VFrameSet00.showstatusbar = true;
```
- **`true`** — VFrameSet 에 StatusBar 를 표시합니다.
- **`false`** — VFrameSet 에 StatusBar 를 표시하지 않습니다.

**Remark**

- showstatusbar 속성값을 설정하지 않으면 false 로 적용됩니다.


---

### showtitlebar

> Frames > VFrameSet > Property > showtitlebar

**Description**

VFrameSet 의 TitleBar 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.showtitlebar[= bshowtitlebar]
```

**Setting Syntax**

```javascript
bshowtitlebar ::= 'true' | 'false'
```
- **`"true"`** — VFrameSet 에 TitleBar 를 표시합니다.
- **`"false"`** — VFrameSet 에 TitleBar 를 표시하지 않습니다.

**Remark**

- TitleBar 에는 VFrameSet을(를) 최소화, 최대화, 종료할 수 있는 버튼이 있습니다.


---

### showtitleicon

> Frames > VFrameSet > Property > showtitleicon

**Description**

VFrameSet 의 타이틀바에 아이콘 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.showtitleicon[= bshowtitleicon]
```

**Setting Syntax**

```javascript
bshowtitleicon ::= 'true' | 'false'
```
- **`"true"`** — VFrameSet 의 타이틀바에 아이콘을 표시합니다.
- **`"false"`** — VFrameSet 의 타이틀바에 아이콘을 표시하지 않습니다.

**Remark**

- Theme 의 TitleBarControl > titleicon > -nexa-icon 속성에 설정된 아이콘 이미지를 아이콘으로 표시합니다.


---

### statusbar

> Frames > VFrameSet > Property > statusbar

**Description**

VFrameSet 의 상태바 오브젝트를 갖는 속성입니다.

**Syntax**

```javascript
VFrameSet.statusbar
```

**Setting Syntax**

```javascript
var objApp = nexacro.getAppplication();
var objStatusBar = objApp.mainframe.statusbar;
```

**Remark**

- VFrameSet 의 showstatusbar 속성값이 "true" 일 경우만 상태바 오브젝트가 생성됩니다.


---

### statusbarheight

> Frames > VFrameSet > Property > statusbarheight

**Description**

VFrameSet 의 StatusBar 높이를 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.statusbarheight[= nHeight]
```

**Setting Syntax**

- **`nHeight`** — StatusBar 의 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- showstatubar 속성값이 "true" 일 경우 적용되는 속성입니다.

미지정시 기본값 : default : undefinded
값이 undefinded 일 경우  메인프레임은 30으로, 메인프레임이 아닌 프레임들은 20으로 동작


---

### statustext

> Frames > VFrameSet > Property > statustext

**Description**

VFrameSet 의 StatusBar 에 표시될 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.statustext[= strStatustext]
```

**Setting Syntax**

- **`strStatustext`** — StatusBar 에 표시될 텍스트를 설정합니다.

**Remark**

- showcascadestatustext 속성값이 true 이면 하위 Frame 또는 Form 의 statustext 속성값을 VFrameSet 의 StatusBar 에 함께 표시합니다.
   VFrameSet 하위에 여러개의 Frame 이 있을 경우엔 현재 활성화 된 Frame 의 statustext 속성값이 표시됩니다.

 
◆ WRE 제약
 
- Chrome, Firefox, Opera, Edge 브라우저는 보안상의 이유로 StatusBar 의 텍스트 변경을 지원하지 않습니다.

- 현재 StatusBar 의 텍스트를 변경할 수 있는 브라우저도 향후 기능이 차단될 수 있습니다.


---

### titlebar

> Frames > VFrameSet > Property > titlebar

**Description**

VFrameSet 의 타이틀바 오브젝트를 갖는 속성입니다.

**Syntax**

```javascript
VFrameSet.titlebar
```

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication();
var objTitleBar = objApp.mainframe.titlebar
```

**Remark**

- VFrameSet 의 showtitlebar 속성값이 "true" 일 경우만 타이틀바 오브젝트가 생성됩니다.


---

### titlebarbuttongap

> Frames > VFrameSet > Property > titlebarbuttongap

**Description**

VFrameSet 의 TitleBar 에 표시되는 시스템 버튼의 간격을 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.titlebarbuttongap[= nGap]
```

**Setting Syntax**

- **`nGap`** — TitleBar 에 표시되는 시스템 버튼(최소/최대/종료)의 간격을 pixel 단위의 숫자로 설정합니다.

**Remark**

- showtitlebar 속성값이 "true" 일 때 적용되는 속성입니다.


---

### titlebarbuttonsize

> Frames > VFrameSet > Property > titlebarbuttonsize

**Description**

VFrameSet 의 타이틀바에 표시되는 시스템 버튼의 크기을 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.titlebarbuttonsize[= strSize]
```

**Setting Syntax**

```javascript
strSize ::= <strWidth> [<strHeight>]
```
- **`<strWidth>`** — 타이틀바에 표시되는 시스템 버튼(최소/최대/종료)의 너비를 pixel 단위의 문자열로 설정합니다.
- **`<strHeight>`** — 타이틀바에 표시되는 시스템 버튼(최소/최대/종료)의 높이를 pixel 단위의 문자열로 설정합니다.

값을 생략할 경우 <strWidth> 값이 적용됩니다.

**Remark**

- showtitlebar 속성값이 "true" 일 때 적용되는 속성입니다.

- <strWidth> 값과 <strHeight> 값은 공백문자로 구분하여 문자열로 설정합니다.


---

### titlebarheight

> Frames > VFrameSet > Property > titlebarheight

**Description**

VFrameSet 의 TitleBar 높이를 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.titlebarheight[= nHeight]
```

**Setting Syntax**

- **`nHeight`** — VFrameSet 의 TitleBar 높이를 pixel 단위의 숫자로 설정합니다.

**Remark**

- titlebarheight 속성값을 설정하지 않으면 undefined 로 적용됩니다.
   undefined 가 적용되면 MainFrame 은 "30px" 로  표시되고, 다른 Frame 은 "20px" 로 표시됩니다.


---

### titletext

> Frames > VFrameSet > Property > titletext

**Description**

 VFrameSet 의 TitleBar 에 표시될 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.titletext[= strTitletext]
```

**Setting Syntax**

- **`strTitletext`** — TitleBar 에 표시될 텍스트를 설정합니다.

**Remark**

- showcascadetitletext  속성값이 "true"이면 하위 Frame 또는 Form 의 titletext 속성값을 VFrameSet 의 TitleBar 에 함께 표시합니다.
  VFrameSet 하위에 여러개의 Frame 이 있을 경우 현재 활성화 된 Frame 의 titletext 속성값이 표시됩니다.


---

### top

> Frames > VFrameSet > Property > top

**Description**

VFrameSet 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.top[= nTop]
```

**Setting Syntax**

```javascript
nTop ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — VFrameSet 의 상단 좌표값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 좌표값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 좌표값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### visible

> Frames > VFrameSet > Property > visible

**Description**

VFrameSet 이(가) 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
this.VFrameSet00.visible = true; 
this.VFrameSet00.visible = false;
```
- **`"true"`** — VFrameSet 을(를) 화면에 표시합니다.
- **`"false"`** — VFrameSet 을(를) 화면에 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하는 즉시 컴포넌트의 표시 여부가 화면에 반영됩니다.

- visible 속성값이 "false"이면 컴포넌트가 화면에 표시되지 않고, 포커스를 받을 수 없으므로 입력이나 사용이 불가능합니다.

- Div 와 같은 컨테이너 컴포넌트의 visible 속성값을 "false"로 설정하면 자식 컴포넌트도 함께 화면에 표시되지 않습니다.

- visible 속성값이 "false"이어도 컴포넌트는 존재하기 때문에 스크립트로 제어가 가능합니다.

- 넥사크로 스튜디오에서는 visible 속성값을 'false'로 설정해도 디자인화면에서 사라지지 않습니다.


---

### width

> Frames > VFrameSet > Property > width

**Description**

VFrameSet 을(를) 표시하기 위한 너비를 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.width[= nWidth]
```

**Setting Syntax**

```javascript
nWidth ::= <nVal> ['px' | '%']
```
- **`<nVal>`** — VFrameSet 의 너비를 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

**Remark**

- 너비값에 단위를 생략할 경우 pixel 값으로 적용됩니다.

- 너비값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### word-spacing

> Frames > VFrameSet > Property > word-spacing

**Description**

VFrameSet 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다.

**Syntax**

```javascript
VFrameSet.wordSpacing[= strwordspacing]
```

**Setting Syntax**

```javascript
strWordSpacing ::= 'normal' | <nVal>'px'
```
```javascript
* XCSS
word-spacing : 30px;

* Script ( normal property )
this.VFrameSet00.wordSpacing = "30px";
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

> Frames > VFrameSet > Method > addChild

**Description**

스크립트로 동적 생성한 Frame 을 VFrameSet 의 자식 Frame 으로 추가하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.addChild( strChildID, objFrame )
```

**Parameters**

```
자식으로 추가될 Frame 의 ID를 설정합니다.
```

**Return**

추가된 자식 Frame 의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

**Remark**

- addChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- 스크립트에서 동적으로 생성한 Frame 만 추가할 수 있습니다.
  동적으로 생성한 Frame 이 아닌 경우 오동작이 발생할 수 있습니다.

- 자식 Frame 의 세부 속성은 addChild() 메소드로 자식 Frame 을 추가 후 설정해야 합니다.

- 자식 Frame 으로 추가된 Frame 을 화면에 표시하기 위해서는 show() 메소드를 사용해야 합니다.

- 동적으로 추가된 Frame 을 제거하기 위해서는 removeChild() 메소드를 사용해야 합니다.

- removeChild() 메소드로 제거된 Frame 을 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.


---

### addEventHandler

> Frames > VFrameSet > Method > addEventHandler

**Description**

VFrameSet 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.addEventHandler( strEventID, objFunc, objTarget )
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

> Frames > VFrameSet > Method > addEventHandlerLookup

**Description**

함수를 검색하여 VFrameSet 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

### alert

> Frames > VFrameSet > Method > alert

**Description**

VFrameSet 의 경고 대화상자를 표시하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.alert( strText )
```

**Parameters**

```
대화상자에 표시할 텍스트를 설정합니다.
```

**Return**

없음

**Remark**

- VFrameSet 의 중앙에 대화상자를 표시합니다.


---

### clearEventHandler

> Frames > VFrameSet > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.clearEventHandler( strEventID )
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

### confirm

> Frames > VFrameSet > Method > confirm

**Description**

 VFrameSet 의 선택 대화상자를 표시하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.confirm( strText [,strCaption [,strType]] )
```

**Parameters**

```
대화상자에 표시할 텍스트를 설정합니다.
```

**Return**

표시된 선택 대화상자에서 "확인" 버튼을 선택하면 "true"를 반환합니다.
표시된 선택 대화상자에서 "취소" 버튼을 선택하면 "false"를 반환합니다.

**Remark**

- VFrameSet 의 중앙에 선택 대화상자를 표시합니다.


---

### destroy

> Frames > VFrameSet > Method > destroy

**Description**

스크립트에서 동적으로 생성한 VFrameSet 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.destroy()
```

**Parameters**

var bSucc = this.VFrameSet00.destroy();

**Return**

VFrameSet 이(가) 정상적으로 삭제되면 true 를 반환합니다.

VFrameSet 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 VFrameSet 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildVFrameSet.initVFrameSet.show


---

### findEventHandler

> Frames > VFrameSet > Method > findEventHandler

**Description**

VFrameSet 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.findEventHandler( strEventID, objFunc, objTarget )
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

### getActiveFrame

> Frames > VFrameSet > Method > getActiveFrame

**Description**

VFrameSet 의 자식 Frame 중 활성화 상태인 Frame 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.getActiveFrame() ;
```

**Parameters**

var objApp = nexacro.getApplication() ;
var objActiveFrame = objApp.mainframe.frame.getActiveFrame() ;

**Return**

VFrameSet 의 자식 Frame 중 활성화 상태일 Frame 오브젝트를 반환합니다.
VFrameSet 의 자식 Frame 중 활성화 상태인 Frame 이 없을 경우 "null"을 반환합니다.

**Remark**

- 가장 최근에 활성화되어 최상위에 위치한 Frame 오브젝트를 반환합니다.


---

### getEventHandler

> Frames > VFrameSet > Method > getEventHandler

**Description**

VFrameSet 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.getEventHandler( strEventID, nIdx )
```

**Parameters**

```
핸들러 함수를 얻을 이벤트의 ID를 설정합니다.
```

**Return**

지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.

지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.


---

### getNativeHandle

> Frames > VFrameSet > Method > getNativeHandle

**Description**

VFrameSet이 속한 윈도우 핸들(HWND)값을 반환하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.getNativeHandle();
```

**Parameters**

var nHwnd = this.parent.getNativeHandle();

**Return**

VFrameSet이 속한 윈도우 핸들(HWND)값


---

### getOffsetBottom

> Frames > VFrameSet > Method > getOffsetBottom

**Description**

부모 Frame 의 Top 위치를 기준으로 VFrameSet 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.getOffsetBottom();
```

**Parameters**

var objApp = nexacro.getApplication();

var nBottom = objApp.mainframe.frame.getOffsetBottom();

**Return**

부모 Frame 의 Top 위치를 기준으로 VFrameSet 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 VFrameSet 의 bottom 값을 부모 Frame 의 Top 위치를 기준으로 동적으로 계산합니다.


---

### getOffsetHeight

> Frames > VFrameSet > Method > getOffsetHeight

**Description**

VFrameSet 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.getOffsetHeight();
```

**Parameters**

var objApp = nexacro.getApplication() ;

var nHeight = objApp.mainframe.frame.getOffsetHeight( ) ;

**Return**

VFrameSet 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 VFrameSet 의 높이를 동적으로 계산합니다.


---

### getOffsetLeft

> Frames > VFrameSet > Method > getOffsetLeft

**Description**

부모 Frame 의 Left 위치를 기준으로 VFrameSet 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.getOffsetLeft();
```

**Parameters**

var objApp = nexacro.getApplication();

var nLeft = objApp.mainframe.frame.getOffsetLeft();

**Return**

부모 Frame 의 Left 위치를 기준으로 VFrameSet 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 Frame 의 Left 위치를 기준으로 VFrameSet 의 left 값을 동적으로 계산합니다.


---

### getOffsetRight

> Frames > VFrameSet > Method > getOffsetRight

**Description**

부모 Frame 의 Left 위치를 기준으로 VFrameSet 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.getOffsetLeft();
```

**Parameters**

var objApp = nexacro.getApplication();

var nRight = objApp.mainframe.frame.getOffsetRight();

**Return**

부모 Frame 의 Left 위치를 기준으로 VFrameSet 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 Frame 의 Left 위치를 기준으로 VFrameSet 의 right 값을 동적으로 계산합니다.


---

### getOffsetTop

> Frames > VFrameSet > Method > getOffsetTop

**Description**

부모 Frame 의 Top 위치를 기준으로 VFrameSet 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.getOffsetTop();
```

**Parameters**

var objApp = nexacro.getApplication();

var nTop = objApp.mainframe.frame.getOffsetTop();

**Return**

부모 Frame 의 Top 위치를 기준으로 VFrameSet 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 VFrameSet 의 top 값을 부모 Frame 의 Top 위치를 기준으로 동적으로 계산합니다.


---

### getOffsetWidth

> Frames > VFrameSet > Method > getOffsetWidth

**Description**

VFrameSet 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.getOffsetWidth();
```

**Parameters**

var objApp = nexacro.getApplication() ;

var nWidth = objApp.mainframe.frame.getOffsetWidth( ) ;

**Return**

VFrameSet 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 VFrameSet 의 너비를 동적으로 계산합니다.


---

### getOwnerFrame

> Frames > VFrameSet > Method > getOwnerFrame

**Description**

VFrameSet 이 소속된 부모 Frame 을 반환하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.getOwnerFrame()
```

**Parameters**

var objFrame = this.getOwnerFrame().getOwnerFrame() ;

**Return**

VFrameSet 이 소속된 부모 Frame 오브젝트를 반환합니다.
VFrameSet 이 소속된 Frame 이 없을 경우 "null"을 반환합니다.


---

### init

> Frames > VFrameSet > Method > init

**Description**

스크립트로 VFrameSet 을 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.init( strName, nLeft, nTop, nWidth, nHeight [, nRight, nBottom] )
```

**Parameters**

```
VFrameSet 의 ID를 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- 위치관련 인수값에 단위를 사용할 경우 문자열로 설정하여야 합니다.

- 이미 show() 메소드가 호출된 경우에는 초기화가 끝난 상태입니다. 
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다. 

- 스크립트로 VFrameSet 을 동적 생성한 후에 사용할 수 있습니다.
  동적으로 생성한 XComponenet 이 아닌 경우에는 오동작이 발생할 수 있습니다.

- 동적으로 생성한 VFrameSet 을 부모 Frame 에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.


---

### insertChild

> Frames > VFrameSet > Method > insertChild

**Description**

스크립트로 동적 생성한 Frame 을 VFrameSet 의 자식 Frame 으로 특정 순서에 추가하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.insertChild( nIdx, strChildID, objComp )
```

**Parameters**

```
부모 Frame 에 추가 될 순서를 설정합니다.
"-1"로 설정할 경우 자식 Frame 중 제일 마지막에 추가됩니다.
```

**Return**

추가된 자식 Frame 의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

**Remark**

- 자식 Frame 은 선언된 순서에 따라 화면에 표시됩니다.
  따라서 nIdx 값에 따라 추가되는 Frame 의 화면표시 순서가 정해집니다.
  Frame 이 겹칠 경우 nIdx 값이 작은 Frame 이 nIdx 값이 큰 Frame 에게 가려지게 됩니다.

- insertChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- 스크립트에서 동적으로 생성한 Frame 만 추가할 수 있습니다.
  동적으로 생성한 Frame 이 아닌 경우 오동작이 발생할 수 있습니다.

- 자식 Frame 의 세부 속성은 insertChild() 메소드로 자식 Frame 을 추가 후 설정해야 합니다.

- 자식 Frame 으로 추가된 Frame 을 화면에 표시하기 위해서는 show() 메소드를 사용해야 합니다.

- 동적으로 추가된 Frame 을 제거하기 위해서는 removeChild() 메소드를 사용해야 합니다.

- removeChild() 메소드로 제거된 Frame 을 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.


---

### insertEventHandler

> Frames > VFrameSet > Method > insertEventHandler

**Description**

VFrameSet 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

> Frames > VFrameSet > Method > move

**Description**

VFrameSet 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.move( nLeft, nTop [, nWidth, nHeight [, nRight, nBottom]] )
```

**Parameters**

```
VFrameSet 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 인수값에 "px" 또는 "%" 단위를 사용할 경우 문자열로 설정하여야 합니다.

- VFrameSet 이 고정된 형태를 갖는 HFrameSet, VFrameSet, TileFrameSet 의 자식 Frame 일 경우 move() 메소드는 동작하지 않습니다.


---

### removeChild

> Frames > VFrameSet > Method > removeChild

**Description**

VFrameSet 에 동적으로 추가된 Frame 을 제거하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.removeChild( strChildID )
```

**Parameters**

```
제거할 자식 Frame 의 ID를 문자열로 설정합니다.
```

**Return**

Frame 제거에 성공하면 제거된 Frame 의 오브젝트를 반환합니다.
Frame 제거에 실패하면 "null"을 반환합니다.

**Remark**

- removeChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- addChild() 또는 insertChild() 메소드를 사용하여 동적으로 추가한 Frame 만 제거할 수 있습니다.
  동적으로 추가한 Frame 이 아닌 경우 오동작이 발생할 수 있습니다.

- removeChild() 메소드로 제거된 Frame 을 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.


---

### removeEventHandler

> Frames > VFrameSet > Method > removeEventHandler

**Description**

VFrameSet 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.removeEventHandler( strEventID, objFunc, objTarget )
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

> Frames > VFrameSet > Method > removeEventHandlerLookup

**Description**

VFrameSet 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

### setEventHandler

> Frames > VFrameSet > Method > setEventHandler

**Description**

VFrameSet 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.setEventHandler( strEventID, objFunc, objTarget )
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

> Frames > VFrameSet > Method > setEventHandlerLookup

**Description**

VFrameSet 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

> Frames > VFrameSet > Method > setFocus

**Description**

VFrameSet 을 활성화하고 포커스를 주는 메소드입니다.

**Syntax**

```javascript
VFrameSet.setFocus()
```

**Parameters**

var objApp = nexacro.getApplication() ;
var objRemoveFrame = objApp.mainframe.frame.setFocus() ;

**Return**

없음

**Remark**

- Frame 에 다수의 자식 Frame 을 갖고 있을 때 특정 Frame 을 활성화하고 다른 Frame 보다 앞에 표시하는 메소드입니다.

- Frame 이 포커스 되면 Frame 내의 컴포넌트 중 마지막에 포커스를 가진 컴포넌트가 포커스를 갖습니다.


---

### setOffsetBottom

> Frames > VFrameSet > Method > setOffsetBottom

**Description**

VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 bottom 을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.setOffsetBottom( nBottom );
```

**Parameters**

```
부모 FrameSet 의 Top 위치를 기준으로 VFrameSet 의 bottom 을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- VFrameSet 의 부모 Frame 이 FrameSet 이 아니면 VFrameSet 의 bottom 이 변경되지 않습니다.


---

### setOffsetHeight

> Frames > VFrameSet > Method > setOffsetHeight

**Description**

VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.setOffsetHeight( nHeight );
```

**Parameters**

```
VFrameSet 의 높이를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 후 VFrameSet 의 height 속성에 값이 설정됩니다.

- VFrameSet 의 부모 Frame 이 FrameSet 이 아니면 VFrameSet 의 높이가 변경되지 않습니다.


---

### setOffsetLeft

> Frames > VFrameSet > Method > setOffsetLeft

**Description**

VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 left 를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.setOffsetLeft( nLeft );
```

**Parameters**

```
부모 FrameSet 의 Left 위치를 기준으로 VFrameSet 의 left 를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 후 VFrameSet 의 left 속성에 값이 설정됩니다.

- VFrameSet 의 부모 Frame 이 FrameSet 이 아니면 VFrameSet 의 left 가 변경되지 않습니다.


---

### setOffsetRight

> Frames > VFrameSet > Method > setOffsetRight

**Description**

VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 right 를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.setOffsetRight( nRight );
```

**Parameters**

```
부모 FrameSet 의 Left 위치를 기준으로 VFrameSet 의 right 를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- VFrameSet 의 부모 Frame 이 FrameSet 이 아니면 VFrameSet 의 right 가 변경되지 않습니다.


---

### setOffsetTop

> Frames > VFrameSet > Method > setOffsetTop

**Description**

VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 top 을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.setOffsetTop( nTop );
```

**Parameters**

```
부모 FrameSet 의 Top 위치를 기준으로 VFrameSet 의 top 을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 후 VFrameSet 의 top 속성에 값이 설정됩니다.

- VFrameSet 의 부모 Frame 이 FrameSet 이 아니면 VFrameSet 의 top 이 변경되지 않습니다.


---

### setOffsetWidth

> Frames > VFrameSet > Method > setOffsetWidth

**Description**

VFrameSet 이 FrameSet 의 하위에 속해 있을 때 VFrameSet 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
VFrameSet.setOffsetWidth( nWidth );
```

**Parameters**

```
VFrameSet 의 너비를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 후 VFrameSet 의 width 속성에 값이 설정됩니다.

- VFrameSet 의 부모 Frame 이 FrameSet 이 아니면 VFrameSet 의 너비가 변경되지 않습니다.


---

### show

> Frames > VFrameSet > Method > show

**Description**

스크립트로 동적 생성한 VFrameSet 을 화면에 표시하는 메소드입니다

**Syntax**

```javascript
VFrameSet.show()
```

**Parameters**

var objApp = nexacro.getApplication() ;

var objFrame = new VFrameSet();
objFrame.init( "VFrameSet00", 30, 120, 196, 46 );

objApp.mainframe.frame.insertChild( 0, "VFrameSet00", objFrame ) ;
objFrame.show();

**Return**

없음

**Remark**

- 스크립트로 VFrameSet 을 동적 생성한 후에 사용 가능합니다.
  동적으로 생성한 VFrameSet 이 아닌 경우에는 오동작 할 수 있습니다.

- 동적 생성한 VFrameSet 을 추가하기 위해 부모 Frame 의 addChild() 메소드나 insertChild() 메소드를 사용합니다.
  추가된 VFrameSet 을 표시하기 위해 show() 메소드를 사용합니다.
  부모 Frame 에 추가되지 않고 show() 메소드를 사용할 경우 에러가 발생합니다.


---

### 이벤트 (Events)

### onactivate

> Frames > VFrameSet > Event > onactivate

**Description**

VFrameSet 이 활성화 되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onactivate(obj:nexacro.VFrameSet,e:nexacro.ActivateEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 앱이 활성화될 때 이벤트가 발생합니다.
- MainFrame > [Frameset] > ChildFrame > Form 순으로 이벤트가 발생합니다.
  ChildFrame 의 onactivate 이벤트가 발생한 후 ChildFrame 의 formurl 속성에 설정된 Form 에서 onactivate 이벤트가 발생합니다. 
- 운영체제에 따라 특정 동작 또는 시스템과 연결되어 이벤트가 발생할 수 있습니다.
  > 안드로이드
     앱 시작 시
     background 상태에서 다시 foreground 상태로 변경될 때
  > iOS
    앱 시작 시
    background 상태에서 다시 foreground 상태로 변경될 때
    키패드가 내려가면서 deactive 상태가 된 상태에서 Form에 포커스를 줄 때
    (WKWebView 내부에서 포커스 동작 시 시스템 이벤트 발생 기준과 같습니다).


---

### onbeforeclose

> Frames > VFrameSet > Event > onbeforeclose

**Description**

VFrameSet 이 종료되기 전에 발생하는 이벤트입니다.

**Syntax**

```javascript
onbeforeclose(obj:nexacro.VFrameSet,e:nexacro.CloseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 문자열 설정 시 VFrameSet 종료를 위한 확인창이 표시됩니다.
이벤트에서 리턴값으로 설정한 문자열이 종료를 위한 확인창에 사용됩니다.

이벤트에서 리턴값을 생략하거나 null, undefined, ""(Empty String) 으로 설정 시 확인창이 표시되지 않습니다.

**Remark**

- 일반적으로 어플리케이션 종료 전 사용자의 확인을 받을 때 사용하는 이벤트입니다.

- onbeforeclose 이벤트는 최하위부터 최상위로 전파되는 이벤트입니다.
   VFrameSet 의 하위 오브젝트에 onbeforeclose 이벤트가 정의되어 있다면 최하위 오브젝트의 이벤트부터 차례로 수행됩니다.
   최종 onbeforeclose 이벤트 수행 후 각 이벤트의 리턴값은 누적되어 종료를 위한 확인창에 모두 표시됩니다.

- 종료를 위한 확인창에서 "확인"을 선택하면 onclose 이벤트가 발생하고 VFrameSet 이 종료됩니다.
   종료를 위한 확인창에서 "취소"를 선택하면 onclose 이벤트가 발생하지 않고 VFrameSet 이 종료되지 않습니다.


---

### onclose

> Frames > VFrameSet > Event > onclose

**Description**

VFrameSet 이 종료될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onclose(obj:nexacro.VFrameSet,e:nexacro.CloseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- onclose 이벤트는 최하위부터 최상위로 전파되는 이벤트입니다.
   VFrameSet 의 하위 오브젝트에 onclose 이벤트가 정의되어 있다면 최하위 오브젝트의 이벤트부터 차례로 수행됩니다.
   최종 onclose 이벤트 수행 후 VFrameSet 이 종료됩니다.


---

### ondeactivate

> Frames > VFrameSet > Event > ondeactivate

**Description**

VFrameSet 이 비활성화 되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondeactivate(obj:nexacro.VFrameSet,e:nexacro.ActivateEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 앱이 비활성화될 때 이벤트가 발생합니다.
- Form > ChildFrame > [Frameset] > MainFrame 순으로 이벤트가 발생합니다.
  ChildFrame 의 formurl 속성에 지정된 Form에서 ondeactivate 이벤트가 발생 한 후에 ChildFrame 의 ondeactivate 이벤트가 발생합니다.
- 운영체제에 따라 특정 동작 또는 시스템과 연결되어 이벤트가 발생할 수 있습니다.
  > 안드로이드
     다른 앱이 활성화될 때
     홈 키를 입력할 때
     화면을 끌 때
  > iOS
     다른 앱이 활성화될 때
     화면을 끌 때
     키패드가 내려갈 때
    (WKWebView 내부에서 포커스 동작 시 시스템 이벤트 발생 기준과 같습니다).


---

### onmove

> Frames > VFrameSet > Event > onmove

**Description**

VFrameSet 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmove(obj:nexacro.VFrameSet,e:nexacro.MoveEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onorientationchange

> Frames > VFrameSet > Event > onorientationchange

**Description**

모바일 기기의 화면 방향이 변경되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onorientationchange(obj:nexacro.VFrameSet,e:nexacro.OrientationChangeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- onorientationchange  이벤트는 상위에서 하위로 이벤트가 발생합니다.
  모바일 기기의 방향 전환 시 MainFrame 의 onorientationchange 이벤트가 처음 발생한 후 Frame, Form 순서로 이벤트가 발생합니다.
  이때, preventDefault() 메소드로 이벤트 발생을 중지시킬 수 없습니다.

- onorientationchange 이벤트 내에서 MainFrame 크기 또는 시스템에서 값을 얻는 속성에 접근 시 변경된 값이 전달되지 않을 수 있습니다.
  모바일 기기마다 시스템 관련값의 갱신 시점이 다르고, onorientationchange 이벤트는 기기의 방향이 전환된 즉시 발생하기 때문입니다.


---

### onsize

> Frames > VFrameSet > Event > onsize

**Description**

VFrameSet 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsize(obj:nexacro.VFrameSet,e:nexacro.SizeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onsyscommand

> Frames > VFrameSet > Event > onsyscommand

**Description**

VFrameSet 에 시스템명령(Command) 메시지가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsyscommand(obj:nexacro.VFrameSet,e:nexacro.SysCommandEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 프레임으로 이벤트가 전파되고, 시스템명령이 수행됩니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 프레임으로 이벤트가 전파되지 않고, 시스템명령도 취소됩니다.

이벤트에서 리턴값을 생략하면 true 로 적용됩니다.

**Remark**

- 이벤트의 리턴값에 따라 상위 프레임으로 이벤트가 전파됩니다.

- 이벤트가 상위로 전파되는 중간에 이벤트 리턴값으로 false 가 반환되면 상위 프레임으로 이벤트가 전파되지 않고 시스템명령이 취소됩니다.

- 프레임의 최소/최대 버튼이 클릭되었을 때 onsyscommand 이벤트에서 false 를 반환하면 최소/최대화 명령이 취소됩니다.


---
