# nexacroN V24 — WebBrowser

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 85개

---

## Components > Component > WebBrowser

### WebBrowser

> Components > Component > WebBrowser

**Description**

WebBrowser 컴포넌트는 웹페이지를 로딩하고 화면에 표시하는 컴포넌트입니다.

**Remark**

- WebBrowser 컴포넌트 내에서 웹접근성 기능이 정상적으로 동작하려면 가상커서 기능을 사용하여야 합니다.
   가상커서 기능에 관한 안내 메시지는 WebBrowser 컴포넌트로 선택상자가 이동되거나 나갈 때 출력되도록 설정하는 것을 권장합니다.
   선택상자가 이동되거나 나갈 때 접근성이 출력되게 하려면 accessibilityaction과 accessibilityleavemessage 속성을 사용하여야 합니다.


◆ macOS NRE 제약

- macOS NRE에서 WebBrowser 컴포넌트를 사용하려면
   Xcode 프로젝트의 info 항목에서 "App Transport Security Settings > Allow Arbitrary Loads" 값을 "YES"로 설정하여야 합니다.


◆ Windows NRE 제약

- Windows NRE에서 WebBrowser 컴포넌트는 Microsoft WebBrowser Control 기반으로 작성됐습니다. 
  Microsoft WebBrowser Control의 제약으로 Internet Explorer를 지원하지 않는 콘텐츠는 정상적으로 로딩할 수 없습니다.
  24.0.0.100 이후 버전에서 WRE로 배포된 콘텐츠 역시 Internet Explorer를 지원하지 않으며 WebBrowser 컴포넌트에서 정상적으로 로딩할 수 없습니다.
  Internet Explorer를 지원하지 않는 콘텐츠가 필요한 경우에는 WebView 컴포넌트를 사용해 주세요.


◆ Mobile NRE 제약

- WebBrowser 컴포넌트에 로드한 페이지에서 window.open 메서드 실행 시 Nexacro in-app browser가 팝업 형태로 표시됩니다. 
  열린 창은 상단 왼쪽 닫기 버튼을 터치해 닫을 수 있습니다.
  window.opener 속성을 사용해 WebBrowser 컴포넌트에서 로드한 페이지와 Nexacro in-app browser에서 로드한 페이지 간 데이터를 주고받을 수 있습니다.

**Structure**



**Property**

| Name | Description |
| --- | --- |
| accessibilityaction | WebBrowser에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다. |
| accessibilitydesclevel | WebBrowser 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다. |
| accessibilitydescription | WebBrowser에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다. |
| accessibilityenable | WebBrowser 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다. |
| accessibilitylabel | WebBrowser에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다. |
| accessibilityleavemessage | WebBrowser 컴포넌트에서 다른 컴포넌트로 선택상자가 이동하기 전에 스크린 리더의 음성 출력 대상으로 포함할 정보를 설정하는 속성입니다. |
| accessibilityrole | WebBrowser에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다. |
| bottom | WebBrowser 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다. |
| cssclass | WebBrowser 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다. |
| enable | WebBrowser 의 사용가능 여부를 설정하는 속성입니다. |
| flexgrow | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축) 여백을 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다. |
| flexshrink | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 영역이 컨테이너 영역을 초과하지 않도록 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다. |
| height | WebBrowser 을(를) 표시하기 위한 높이를 설정하는 속성입니다. |
| id | WebBrowser의 고유 식별자를 설정하는 속성입니다. |
| initvalueid | WebBrowser 에 적용될 InitValue 의 ID 를 설정하는 속성입니다. |
| layoutorder | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 순서를 설정합니다. |
| left | WebBrowser 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다. |
| maxheight | WebBrowser 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다. |
| maxwidth | WebBrowser 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다. |
| minheight | WebBrowser 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다. |
| minwidth | WebBrowser 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다. |
| name | WebBrowser 의 이름을 설정하는 속성입니다. |
| -nexa-border | WebBrowser 의 테두리를 설정하는 속성입니다. |
| parent | WebBrowser 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| positionstep | 부모 오브젝트가 화면분할기능을 사용할 때 WebBrowser 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다. |
| right | WebBrowser 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다. |
| tablecellarea | Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다. |
| taborder | 탭키 입력으로 컴포넌트간 포커스를 이동할 때 WebBrowser 의 순서를 설정하는 속성입니다. |
| tabstop | 탭키 입력으로 컴포넌트간 포커스를 이동할 때 WebBrowser 이(가) 포커스를 받을 지 여부를 설정하는 속성입니다. |
| top | WebBrowser 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다. |
| url | WebBrowser 에 표시될 웹페이지의 URL 을 설정하는 속성입니다. |
| useurlhistory | WebBrowser 컴포넌트의 url 속성이 변경되었을 때 History 기능을 사용할지 설정하는 속성입니다. |
| visible | WebBrowser 이(가) 화면에 표시될지 여부를 설정하는 속성입니다. |
| width | WebBrowser 을(를) 표시하기 위한 너비를 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addEvent | WebBrowser 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| addEventHandler | WebBrowser 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 WebBrowser 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| bringToFront | 부모가 동일한 컴포넌트 중 WebBrowser 이(가) 화면의 제일 앞에 표시되게 합니다. |
| bringToPrev | 부모가 동일한 컴포넌트 중 WebBrowser 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| callMethod | WebBrowser 의 window 객체에 정의된 메소드를 호출하는 메소드입니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 WebBrowser 을(를) 삭제하는 메소드입니다. |
| findEventHandler | WebBrowser 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getEventHandler | WebBrowser 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| getOffsetBottom | 부모 컴포넌트의 Top 위치를 기준으로 WebBrowser 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetHeight | WebBrowser 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetLeft | 부모 컴포넌트의 Left 위치를 기준으로 WebBrowser 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetRight | 부모 컴포넌트의 Left 위치를 기준으로 WebBrowser 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetTop | 부모 컴포넌트의 Top 위치를 기준으로 WebBrowser 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetWidth | WebBrowser 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getPixelBottom | WebBrowser 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelHeight | WebBrowser 의 height 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelLeft | WebBrowser 의 left 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelRight | WebBrowser 의 right 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelTop | WebBrowser 의 top 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelWidth | WebBrowser 의 width 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getProperty | WebBrowser 에 로드된 웹페이지의 window 또는 document 객체를 반환하는 메소드입니다. |
| init | 스크립트로 WebBrowser 을(를) 동적 생성한 후에 초기화하는 메소드입니다. |
| insertEventHandler | WebBrowser 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| move | WebBrowser 의 위치와 크기를 변경하는 메소드입니다. |
| moveToNext | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 WebBrowser 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| moveToPrev | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 WebBrowser 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| reload | WebBrowser 에 표시되고 있는 웹페이지를 새로고침하는 메소드입니다. |
| removeEvent | WebBrowser 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| removeEventHandler | WebBrowser 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | WebBrowser 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| resize | WebBrowser 의 크기를 변경하는 메소드입니다. |
| sendToBack | 부모가 동일한 컴포넌트 중 WebBrowser 이(가) 화면의 제일 뒤에 표시되게 합니다. |
| sendToNext | 부모가 동일한 컴포넌트 중 WebBrowser 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| setEventHandler | WebBrowser 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | WebBrowser 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| setOffsetBottom | 부모 컴포넌트의 Top 위치를 기준으로 WebBrowser 의 bottom 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetHeight | WebBrowser 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetLeft | 부모 컴포넌트의 Left 위치를 기준으로 WebBrowser 의 left 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetRight | 부모 컴포넌트의 Left 위치를 기준으로 WebBrowser 의 right 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetTop | 부모 컴포넌트의 Top 위치를 기준으로 WebBrowser 의 top 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetWidth | WebBrowser 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| setProperty | WebBrowser 의 document 객체에 정의된 속성에 값을 설정하는 메소드입니다. |
| show | 스크립트로 동적 생성한 WebBrowser 을(를) 화면에 표시하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| ondevicebuttonup | 모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다. |
| onloadcompleted | WebBrowser 에 웹페이지가 로딩 되었을 때 발생하는 이벤트입니다. |
| onmove | WebBrowser 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| onsize | WebBrowser 의 크기가 변경됐을 때 발생하는 이벤트입니다. |
| onusernotify | WebBrowser 에 로드된 웹페이지에서 넥사크로 쪽으로 정보를 전달할 때 발생하는 이벤트입니다. |

**Status**

컴포넌트가 비활성화된 상태


---

### 속성 (Properties)

### -nexa-border

> Components > Component > WebBrowser > Property > -nexa-border

**Description**

WebBrowser 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.border[= strborder]
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
```
```javascript
* XCSS
-nexa-border : 1px solid #999999;
-nexa-border : 1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999;

* Script ( normal property )
this.WebBrowser00.border = "1px solid #999999";
this.WebBrowser00.border = "1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999";
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

- <line-style> 에 "double","groove","ridge","inset","outset" 값을 설정해도 적용되지 않습니다.

- <line-width> 에 "thin","medium","thick" 값을 설정해도 적용되지 않습니다.


◆ WRE 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 웹브라우저에 따라 테두리가 겹쳐지는 순서가 다르게 처리될 수 있습니다.

- XCSS 를 사용하지 않고 rgba(), hsl(), hsla() 메소드를 속성에 직접 설정할 경우 브라우저 버전에 따라 적용되지 않을 수 있습니다.


---

### accessibilityaction

> Components > Component > WebBrowser > Property > accessibilityaction

**Description**

WebBrowser에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.accessibilityaction[= strAction]
```

**Setting Syntax**

```javascript
this.WebBrowser00.accessibilityaction = "Accessibility Action Message"; 
this.WebBrowser00.accessibilityaction = "Select by direction key";
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

> Components > Component > WebBrowser > Property > accessibilitydesclevel

**Description**

WebBrowser 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.accessibilitydesclevel[= enumLevel]
```

**Setting Syntax**

```javascript
enumLevel ::= 'all' | 'self' | 'child' | 'none'
```
```javascript
this.WebBrowser00.accessibilitydesclevel = "all";
```
- **`"all"`** — WebBrowser 와 자식 컴포넌트에 대한 접근성을 모두 출력합니다.
- **`"self"`** — WebBrowser 의 접근성만 출력하고 자식 컴포넌트의 접근성은 출력하지 않습니다.
- **`"child"`** — WebBrowser 의 접근성은 출력하지 않고, 자식 컴포넌트의 접근성은 출력합니다.
- **`"none"`** — WebBrowser 와 자식 컴포넌트에 대한 접근성을 모두 출력하지 않습니다.

**Remark**

- accessibilitydesclevel 속성값을 설정하지 않으면 "all" 로 적용됩니다.

- Button 과 같이 자식 컴포넌트가 없는 컴포넌트는 "all" 또는 "child" 로 설정 시 "self" 로 적용됩니다.

- Div 와 같은 컨테이너 컴포넌트는 "child" 설정 시 실제 컨텐츠의 접근성만을 출력합니다.

- accessibilitydesclevel 속성은 선택상자의 이동에 영향을 주지 않으므로 방향키로 선택상자가 WebBrowser 에 이동되게 하지 않으려면 accessibilityenable 속성을 설정하여야 합니다.


---

### accessibilitydescription

> Components > Component > WebBrowser > Property > accessibilitydescription

**Description**

WebBrowser에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.accessibilitydescription[= strDescription]
```

**Setting Syntax**

```javascript
this.WebBrowser00.accessibilitydescription = "Option";
```
- **`strDescription`** — accessibilitydescreadtype 속성값에 "description"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.


---

### accessibilityenable

> Components > Component > WebBrowser > Property > accessibilityenable

**Description**

WebBrowser 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.accessibilityenable[= bEnable]
```

**Setting Syntax**

```javascript
bEnable ::= 'true' | 'false'
```
```javascript
this.WebBrowser00.accessibilityenable = false;
```
- **`true`** — WebBrowser 에 선택상자가 이동되면 접근성 관련 속성값을 출력합니다.

방향키 또는 제스처로 선택상자 이동 시 Static 과 같이 포커스를 갖지 않는 컴포넌트에도 선택상자가 이동됩니다.
- **`false`** — WebBrowser 에 선택상자가 이동되어도 접근성 관련 속성값을 출력하지 않습니다.

데스크탑 환경에서 방향키로 선택상자가 WebBrowser 에 이동되지 않습니다.
모바일 환경에서 제스처로 선택상자가 WebBrowser 에 이동되지 않습니다.

**Remark**

- accessibilityenable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 선택상자 이동 시 컴포넌트의 ARIA-LABEL + Status + Role 순서로 정보가 조합되어 접근성으로 출력됩니다.
   각 정보의 조합순서는 스크린 리더의 종류에 따라 달라질 수 있습니다.
   > ARIA-LABEL : Environment 의 accessbilitydescreadtype 속성에 설정된 속성값이 반영됩니다.
   > Status : WebBrowser 의 현재 상태가 반영됩니다.
   > Role : accessibilityrole 속성값이 반영됩니다. accessibilityrole 속성값을 설정하지 않으면 WebBrowser 의 고유 Role 이 반영됩니다.

- 접근성 기능이 활성화 되어 있을때 웹브라우저 내부로 들어가기 위해서는 가상커서의 활성/비활성화 작업이 필요합니다.

- accessibilityenable 속성값이 false 일 때 데스크탑 환경에서 방향키 외의 방법으로 선택상자를 WebBrowser 로 이동시키면 스크린 리딩 프로그램에서 임의의 값을 출력할 수 있습니다.


◆ 컨테이너 컴포넌트 선택상자 이동 제약

아래와 같은 환경에서 컨테이너 컴포넌트로 선택상자가 이동하지 않고 컨테이너 컴포넌트 내에 배치된 컴포넌트로 이동합니다.
- Android, iOS/iPadOS 운영체제에서 실행 시 (Div, PopupDiv, TabpageControl, View)
- Windows 운영체제에서 센스리더 가상커서 사용 시 (Div, PopupDiv, View)


---

### accessibilitylabel

> Components > Component > WebBrowser > Property > accessibilitylabel

**Description**

WebBrowser에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.accessibilitylabel[= strLabel]
```

**Setting Syntax**

```javascript
this.WebBrowser00.accessibilitylabel = "OK Button"; 
this.WebBrowser00.accessibilitylabel = "[@static00]"; 
this.WebBrowser00.accessibilitylabel = "[@static00][@static01]"; 
this.WebBrowser00.accessibilitylabel = "[@static00][@static01] OK Button";
```
- **`strLabel`** — accessibilitydescreadtype 속성값에 "label"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.
문자열로 설정하거나 부모가 같은 컴포넌트의 accessibilitylabel 속성값을 참조할 수 있습니다.
다른 컴포넌트 참조 시에는 "[@ComponentID]" 형식으로 컴포넌트의 id를 대괄호와 "@" 문자를 사용하여 설정합니다.
참조하는 참조값에 해당하는 컴포넌트를 찾을 수 없는 경우에는 참조값 자체가 문자열로 처리됩니다.

**Remark**

- enableaccessibility 속성값이 true인 경우만 적용되는 속성입니다.

- accessibilitydescreadtype 속성값에 "label"이 포함되었으나 accessibilitylabel 속성값을 설정하지 않으면 스크린 리더의 음성 출력 대상에 포함하지 않습니다.


---

### accessibilityleavemessage

> Components > Component > WebBrowser > Property > accessibilityleavemessage

**Description**

WebBrowser 컴포넌트에서 다른 컴포넌트로 선택상자가 이동하기 전에 스크린 리더의 음성 출력 대상으로 포함할 정보를 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.accessibilityleavemessage[= strMsg]
```

**Setting Syntax**

```javascript
this.WebBorwser00.accessibilityleavemessage = "Leave Message";
```
- **`strMsg`** — 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.

**Remark**

- enableaccessibility 속성값이 true인 경우만 적용되는 속성입니다.

- 컴포넌트의 특성에 따라 스크린 리더의 특정 옵션을 변경한 상태에서 컴포넌트를 탐색하고 다른 컴포넌트로 이동하기 전 스크린 리더의 옵션을 다시 변경하기 위한 안내를 하기 위한 용도로 사용할 수 있습니다.
컴포넌트 내부 콘텐츠를 모두 탐색 후 아래방향키 입력 시 스크린 리더에서 읽어줍니다.
예를 들어 윈도우 운영체제에서 센스리더의 가상커서 기능을 끈 상태로 사용하는 경우 WebBrowser 컴포넌트 내 콘텐츠를 탐색하기 위해서는 가상커서를 켠 상태로 변경해야 합니다. 이런 경우 accessibilityaction 속성에서는 가상커서를 켜도록 안내하고 accessibilityleavemessage 속성에서는 다시 가상커서를 끄도록 안내합니다.


---

### accessibilityrole

> Components > Component > WebBrowser > Property > accessibilityrole

**Description**

WebBrowser에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.accessibilityrole[= enumRole]
```

**Setting Syntax**

```javascript
enumRole ::= 'none' | 'alert' | 'application' | 'button' | 'calendar' | 'chart' | 'checkbox' | 'columnheader' | 'combobox' | 'datepicker' | 'edit' | 'fileupload' | 'form' | 'frame' | 'grid' | 'gridcell' | 'groupbox' | 'heading' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6' | 'image' | 'link' | 'listbox' | 'menubar' | 'progressbar' | 'radio' | 'rowheader' | 'scrollbar' | 'spin' | 'static' | 'statusbar' | 'tab' | 'tabpage' | 'textarea' | 'titlebar' | 'toolbar' | 'tooltip' | 'treegrid' | 'treeitem' | 'webbrowser'
```
```javascript
this.WebBrowser00.accessibilityrole = "none"; 
this.WebBrowser00.accessibilityrole = "button";
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

- accessibilityenable 속성값을 설정하지 않으면 WebBrowser의 기본 Role 로 적용됩니다.

- 추가적인 속성값이 필요한 Role 설정 시 WebBrowser에 해당 속성이 없으면 스크린 리더에 따라 정상적으로 정보를 읽지 못할 수 있습니다.


---

### bottom

> Components > Component > WebBrowser > Property > bottom

**Description**

WebBrowser 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.bottom[= nBottom]
```

**Setting Syntax**

```javascript
nBottom ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.WebBrowser00.bottom = 10; 
this.WebBrowser00.bottom = "10px"; 
this.WebBrowser00.bottom = "10%"; 
this.WebBrowser00.bottom = "Button00:10px"; 
this.WebBrowser00.bottom = "Button00:10%";
```
- **`<strCompID>`** — WebBrowser 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 WebBrowser 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 WebBrowser 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — WebBrowser 의 하단 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 bottom 속성값을 기준으로 WebBrowser의 하단 위치 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 WebBrowser의 하단 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 WebBrowser의 하단 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 WebBrowser의 하단 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 top 속성값을 기준으로 WebBrowser의 하단 위치 결정
- "%": <strCompID>의 height 속성값을 기준으로 WebBrowser의 하단 위치 결정
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

### cssclass

> Components > Component > WebBrowser > Property > cssclass

**Description**

WebBrowser 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.cssclass[= strcssclass]
```

**Setting Syntax**

```javascript
strcssclass ::= <ClassName> [ , &ltClassName> ]*
```
```javascript
this.WebBrowser00.cssclass = "TestClass"; 
this.WebBrowser00.cssclass = "TestClass,TestClass2";
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

> Components > Component > WebBrowser > Property > enable

**Description**

WebBrowser 의 사용가능 여부를 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.enable[= benable]
```

**Setting Syntax**

```javascript
benable ::= 'true' | 'false'
```
```javascript
this.WebBrowser00.enable = true; 
this.WebBrowser00.enable = false;
```
- **`true`** — WebBrowser 을(를) 사용할 수 있게 설정합니다.
- **`false`** — WebBrowser 을(를) 사용할 수 없게 설정합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "disabled" Status 가 적용됩니다.

**Remark**

- enable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enable 속성값이 false 이면 컴포넌트가 화면에 표시되지만 포커스나 입력을 받을 수 없습니다.

- Div 와 같은 컨테이너 컴포넌트의 enable 속성값을 false 로 설정하면 자식 컴포넌트도 모두 Disable 됩니다.


---

### flexgrow

> Components > Component > WebBrowser > Property > flexgrow

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축) 여백을 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.flexgrow[= fVal]
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

> Components > Component > WebBrowser > Property > flexshrink

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 영역이 컨테이너 영역을 초과하지 않도록 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.flexshrink[= fVal]
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

> Components > Component > WebBrowser > Property > height

**Description**

WebBrowser 을(를) 표시하기 위한 높이를 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.height[= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.WebBrowser00.height = 10; 
this.WebBrowser00.height = "10px"; 
this.WebBrowser00.height = 10%"; 
this.WebBrowser00.height = Button00:10%";
```
- **`<strCompID>`** — WebBrowser 의 높이를 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 WebBrowser 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 WebBrowser 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 높이가 적용됩니다.
- **`<nVal>`** — WebBrowser 의 높이를 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.


* <strCompID> 값을 생략했을 때 :
- "px": WebBrowser의 높이 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 WebBrowser의 높이 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 WebBrowser의 높이 결정
- "rem": MainFrame font-size 속성값을 기준으로 WebBrowser의 높이 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID> 값은 무시되고 설정값이 WebBrowser의 높이 결정
- "%": <strCompID>의 height 속성값을 기준으로 WebBrowser의 높이 결정
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

> Components > Component > WebBrowser > Property > id

**Description**

WebBrowser의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.id
```

**Setting Syntax**

- **`id`** — WebBrowser를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### initvalueid

> Components > Component > WebBrowser > Property > initvalueid

**Description**

WebBrowser 에 적용될 InitValue 의 ID 를 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.initvalueid[= strValueID]
```

**Setting Syntax**

- **`strValueID`** — InitValueDefinition 영역에 정의된 InitValue 파일에서 WebBrowser 에 적용할 항목의 ID 를 문자열로 설정합니다.

**Remark**

- WebBrowser 가 화면에 표시된 후에는 속성값을 설정하거나 변경 할 수 없습니다.
   WebBrowser 를 동적으로 생성 시 show() 메소드 실행 전에 속성값을 설정하여야 합니다.

- Screen 별로 Environment 의 initvaluefileid 속성을 각각 설정하면 Screen 에 따라 다른 초기값을 설정할 수 있습니다.

- InitValueDefinition 영역에 한 개 이상의 InitValue 파일을 정의할 수 있고,
   InitValue 파일에는 컴포넌트별로 여러개의 초기값 정의를 할 수 있습니다.


---

### layoutorder

> Components > Component > WebBrowser > Property > layoutorder

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 순서를 설정합니다.

**Syntax**

```javascript
WebBrowser.layoutorder[= nVal]
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

> Components > Component > WebBrowser > Property > left

**Description**

WebBrowser 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.left[= nLeft]
```

**Setting Syntax**

```javascript
nLeft ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.WebBrowser00.left = 10; 
this.WebBrowser00.left = "10px"; 
this.WebBrowser00.left = "10%"; 
this.WebBrowser00.left = "Button00:10px"; 
this.WebBrowser00.left = "Button00:10%";
```
- **`<strCompID>`** — WebBrowser 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 WebBrowser 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 WebBrowser 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — WebBrowser 의 좌측 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 left 속성값을 기준으로 WebBrowser의 좌측 위치 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 WebBrowser의 좌측 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 WebBrowser의 좌측 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 WebBrowser의 좌측 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 right 속성값을 기준으로 WebBrowser의 좌측 위치 결정
- "%": <strCompID>의 width 속성값을 기준으로 WebBrowser의 좌측 위치 결정
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

> Components > Component > WebBrowser > Property > maxheight

**Description**

WebBrowser 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.maxheight[= nMaxHeight]
```

**Setting Syntax**

```javascript
nMaxHeight ::= <nVal> ['px']
```
```javascript
this.WebBrowser00.maxheight = 20; 
this.WebBrowser00.maxheight = "20px";
```
- **`<nVal>`** — WebBrowser 이(가) 화면에 표시되는 높이의 최대값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- height 속성값이 maxheight 보다 크면 화면에 표시되는 WebBrowser 의 높이는 maxheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- maxheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxheight 속성값을 minheight 속성값보다 작게 설정하면 minheight 속성값이 maxheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 WebBrowser 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.


---

### maxwidth

> Components > Component > WebBrowser > Property > maxwidth

**Description**

WebBrowser 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.maxwidth[= nMaxWidth]
```

**Setting Syntax**

```javascript
nMaxWidth ::= <nVal> ['px']
```
```javascript
this.WebBrowser00.maxwidth = 20; 
this.WebBrowser00.maxwidth = "20px";
```
- **`<nVal>`** — WebBrowser 이(가) 화면에 표시되는 너비의 최대값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- width 속성값이 maxwidth 보다 크면 화면에 표시되는 WebBrowser 의 너비는 maxwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- maxwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxwidth 속성값을 minwidth 속성값보다 작게 설정하면 minwidth 속성값이 maxwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 WebBrowser 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.


---

### minheight

> Components > Component > WebBrowser > Property > minheight

**Description**

WebBrowser 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.minheight[= nMinHeight]
```

**Setting Syntax**

```javascript
nMinHeight ::= <nVal> ['px']
```
```javascript
this.WebBrowser00.minheight = 20; 
this.WebBrowser00.minheight = "20px";
```
- **`<nVal>`** — WebBrowser 이(가) 화면에 표시되는 높이의 최소값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- height 속성값이 minheight 보다 작다면 화면에 표시되는 WebBrowser 의 높이는 minheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- minheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minheight 속성값을 maxheight 속성값보다 크게 설정하면 maxheight 속성값이 minheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 WebBrowser 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.


---

### minwidth

> Components > Component > WebBrowser > Property > minwidth

**Description**

WebBrowser 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.minwidth[= nMinWidth]
```

**Setting Syntax**

```javascript
nMinWidth ::= <nVal> ['px']
```
```javascript
this.WebBrowser00.minwidth = 20; 
this.WebBrowser00.minwidth = "20px";
```
- **`<nVal>`** — WebBrowser 이(가) 화면에 표시되는 너비의 최소값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- width 속성값이 minwidth 보다 작으면 화면에 표시되는 WebBrowser 의 너비는 minwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- minwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minwidth 속성값을 maxwidth 속성값보다 크게 설정하면 maxwidth 속성값이 minwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 WebBrowser 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.


---

### name

> Components > Component > WebBrowser > Property > name

**Description**

WebBrowser 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### parent

> Components > Component > WebBrowser > Property > parent

**Description**

WebBrowser 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
WebBrowser.parent
```

**Setting Syntax**

```javascript
var objParent = this.WebBrowser00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- WebBrowser 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### positionstep

> Components > Component > WebBrowser > Property > positionstep

**Description**

부모 오브젝트가 화면분할기능을 사용할 때 WebBrowser 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.positionstep[= nStep]
```

**Setting Syntax**

```javascript
this.WebBrowser00.positionstep = 0; 
this.WebBrowser00.positionstep = -1;
```
- **`nStep`** — WebBrowser 이(가) 표시될 분할화면의 인덱스를 설정합니다.
"-1" 로 설정하면 모든 분할화면에 WebBrowser 이(가) 표시됩니다.

분할화면의 인덱스는 "0" 부터 시작합니다.

**Remark**

- positionstep 에 설정된 인덱스값과 일치하는 분할화면에만 컴포넌트가 표시됩니다.

- 분할화면에 표시되지 않는 컴포넌트의 visible 속성값은 "false"로 변경되지 않습니다.


---

### right

> Components > Component > WebBrowser > Property > right

**Description**

WebBrowser 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.right[= nRight]
```

**Setting Syntax**

```javascript
nRight ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.WebBrowser00.right = 10; 
this.WebBrowser00.right = "10px"; 
this.WebBrowser00.right = "10%"; 
this.WebBrowser00.right = "Button00:10px"; 
this.WebBrowser00.right = "Button00:10%";
```
- **`<strCompID>`** — WebBrowser 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 WebBrowser 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 WebBrowser 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — WebBrowser 의 우측 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 right 속성값을 기준으로 WebBrowser의 우측 위치 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 WebBrowser의 우측 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 WebBrowser의 우측 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 WebBrowser의 우측 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 left 속성값을 기준으로 WebBrowser의 우측 위치 결정
- "%": <strCompID>의 width 속성값을 기준으로 WebBrowser의 우측 위치 결정
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

> Components > Component > WebBrowser > Property > tablecellarea

**Description**

Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다.

**Syntax**

```javascript
WebBrowser.tablecellarea[= strArea]
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

> Components > Component > WebBrowser > Property > taborder

**Description**

탭키 입력으로 컴포넌트간 포커스를 이동할 때 WebBrowser 의 순서를 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.taborder[= nTabOrder]
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

> Components > Component > WebBrowser > Property > tabstop

**Description**

탭키 입력으로 컴포넌트간 포커스를 이동할 때 WebBrowser 이(가) 포커스를 받을 지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.tabstop[= bTabStop]
```

**Setting Syntax**

```javascript
bTabStop ::= 'true' | 'false'
```
- **`"true"`** — WebBrowser 이(가) 탭키 입력에 의한 포커스를 받습니다.
- **`"false"`** — WebBrowser 이(가) 탭키 입력에 의한 포커스를 받지 않습니다.

**Remark**

- tabstop 속성값이 "false"인 경우 taborder 속성값과 관계없이 포커스가 해당 컴포넌트를 건너뜁니다.

- tabstop 속성값에 관계없이 마우스로 직접 포커스를 주거나, setfocus() 메소드 사용 시 포커스를 갖습니다.

- Div 와 같은 컨테이너 컴포넌트에서 포커스를 받을 수 있는 자식 컴포넌트가 존재하면 해당 컴포넌트가 포커스를 갖습니다.


---

### top

> Components > Component > WebBrowser > Property > top

**Description**

WebBrowser 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.top[= nTop]
```

**Setting Syntax**

```javascript
nTop ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.WebBrowser00.top = 10; 
this.WebBrowser00.top = "10px"; 
this.WebBrowser00.top = "10%"; 
this.WebBrowser00.top = "Button00:10px"; 
this.WebBrowser00.top = "Button00:10%";
```
- **`<strCompID>`** — WebBrowser 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 WebBrowser 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 WebBrowser 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — WebBrowser의 상단 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 top 속성값을 기준으로 WebBrowser의 상단 위치 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 WebBrowser의 상단 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 WebBrowser의 상단 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 WebBrowser의 상단 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 bottom 속성값을 기준으로 WebBrowser의 상단 위치 결정
- "%": <strCompID>의 height 속성값을 기준으로 WebBrowser의 상단 위치 결정
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

> Components > Component > WebBrowser > Property > url

**Description**

WebBrowser 에 표시될 웹페이지의 URL 을 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.url[= strUrl]
```

**Setting Syntax**

```javascript
strUrl ::= <Web-Url> | <Local-Url>
```
```javascript
this.WebBrowser00.url = "http://www.tobesoft.co.kr"; 

this.WebBrowser00.url = "http://m.naver.com"; 

this.WebBrowser00.url = "about:blank"; 

this.WebBrowser00.url = "file://C:\\Test.html";
```
- **`<Web-Url>`** — 웹에 위치한 웹페이지의 URL 을 "http://경로/파일명", "https://경로/파일명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<Local-Url>`** — 로컬에 위치한 파일의 경로를 "file://절대경로\\파일명" 형식으로 설정합니다.

Environment 의 filesecurelevel 속성으로 접근이 허용된 경로에 로컬파일이 위치하여야 합니다.
Nexacro Runtime Environment에서만 사용할 수 있습니다.

**Remark**

- 모바일 디바이스에서 사용하는 경우는 모바일용으로 개발된 웹페이지 URL로 설정할 것을 권장합니다.

- WebBrowser 컴포넌트에 빈페이지를 로드하려면 "about:blank" 을 설정하여야 합니다.


◆ Web Runtime Environment 제약

- <Local-Url> 형태의 로컬파일 로드를 지원하지 않습니다.


---

### useurlhistory

> Components > Component > WebBrowser > Property > useurlhistory

**Description**

WebBrowser 컴포넌트의 url 속성이 변경되었을 때 History 기능을 사용할지 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.useurlhistory[= bHistory]
```

**Setting Syntax**

```javascript
bHistory ::= 'true' | 'false'
```
```javascript
this.WebBrowser00.userurlhistory = false;
```
- **`true`** — url 속성이 변경되면 History 기능이 적용되어 변경된 url 정보가 저장됩니다.

"뒤로가기" 시도 시 HIstory  정보에 맞게 페이지가 변경됩니다. 
웹브라우저는 뒤로가기 버튼이 활성화됩니다.
- **`false`** — url 속성이 변경되면 History 기능이 적용되지 않아 url 정보가 저장되지 않습니다.

"뒤로가기" 시도 시 페이지가 변경되지 않습니다.
웹브라우저는 뒤로가기 버튼이 비활성화됩니다.

**Remark**

- useurlhistory 속성값을 설정하지 않으면 true 로 적용됩니다.

- macOS NRE, iOS/iPadOS NRE 는 지원하지 않는 속성입니다.


---

### visible

> Components > Component > WebBrowser > Property > visible

**Description**

WebBrowser 이(가) 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
this.WebBrowser00.visible = true; 
this.WebBrowser00.visible = false;
```
- **`"true"`** — WebBrowser 을(를) 화면에 표시합니다.
- **`"false"`** — WebBrowser 을(를) 화면에 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하는 즉시 컴포넌트의 표시 여부가 화면에 반영됩니다.

- visible 속성값이 "false"이면 컴포넌트가 화면에 표시되지 않고, 포커스를 받을 수 없으므로 입력이나 사용이 불가능합니다.

- Div 와 같은 컨테이너 컴포넌트의 visible 속성값을 "false"로 설정하면 자식 컴포넌트도 함께 화면에 표시되지 않습니다.

- visible 속성값이 "false"이어도 컴포넌트는 존재하기 때문에 스크립트로 제어가 가능합니다.

- 넥사크로 스튜디오에서는 visible 속성값을 'false'로 설정해도 디자인화면에서 사라지지 않습니다.


---

### width

> Components > Component > WebBrowser > Property > width

**Description**

WebBrowser 을(를) 표시하기 위한 너비를 설정하는 속성입니다.

**Syntax**

```javascript
WebBrowser.width[= nWidth]
```

**Setting Syntax**

```javascript
nWidth ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.WebBrowser00.width = 10; this.WebBrowser00.width = "10px"; 
this.WebBrowser00.width = "10%"; 
this.WebBrowser00.width = "Button00:10%";
```
- **`<strCompID>`** — WebBrowser 의 너비를 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 WebBrowser 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 WebBrowser 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 너비가 적용됩니다.
- **`<nVal>`** — WebBrowser 의 너비를 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": WebBrowser의 너비 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 WebBrowser의 너비 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 WebBrowser의 너비 결정
- "rem": MainFrame font-size 속성값을 기준으로 WebBrowser의 너비 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID> 값은 무시되고 설정값이 WebBrowser의 너비 결정
- "%": <strCompID>의 width 속성값을 기준으로 WebBrowser의 너비 결정
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

### addEvent

> Components > Component > WebBrowser > Method > addEvent

**Description**

WebBrowser 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.addEvent( strEventID )
```

**Parameters**

```
WebBrowser 에 추가할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 추가에 성공하면 true 를 반환합니다.

이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- WebBrowser 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.


---

### addEventHandler

> Components > Component > WebBrowser > Method > addEventHandler

**Description**

WebBrowser 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.addEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > WebBrowser > Method > addEventHandlerLookup

**Description**

함수를 검색하여 WebBrowser 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

> Components > Component > WebBrowser > Method > bringToFront

**Description**

부모가 동일한 컴포넌트 중 WebBrowser 이(가) 화면의 제일 앞에 표시되게 합니다.

**Syntax**

```javascript
WebBrowser.bringToFront()
```

**Parameters**

this.WebBrowser.bringToFront();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToFront() 메소드는 WebBrowser 을(를) 가장 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 앞에 표시되게 됩니다.


---

### bringToPrev

> Components > Component > WebBrowser > Method > bringToPrev

**Description**

부모가 동일한 컴포넌트 중 WebBrowser 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**

```javascript
WebBrowser.bringToPrev()
```

**Parameters**

this.WebBrowser.bringToPrev();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- bringToPrev() 메소드는 WebBrowser 을(를) 한단계 나중에 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 앞에 표시되게 됩니다.


---

### callMethod

> Components > Component > WebBrowser > Method > callMethod

**Description**

WebBrowser 의 window 객체에 정의된 메소드를 호출하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.callMethod( strMethodID [, varArg1 [, varArg2 ]] );
```

**Parameters**

```
호출할 메소드의 이름을 문자열로 설정합니다.
```

**Return**

window 객체의 메소드에서 리턴값이 있을 경우 해당값을 반환합니다.

window 객체의 메소드에서 오브젝트를 리턴한 경우 PluginObject 로 Wrapping 되어 반환될 수 있습니다.

**Remark**

- Cross Domain 상황이면 사용에 제한이 있습니다.

- WebBrowser 컴포넌트의 url 속성값을 Local-Url로 설정하면 iOS/iPadOS에서 callMethod 메소드를 사용할 수 없습니다. 
  아래 제품제약사항 문서를 참고해주세요.
  - WebBrowser 컴포넌트의 url 속성으로 Local-Url 접근 시 제약
    http://docs.tobesoft.com/product_information_nexacro_n_v24_ko/product_restrictions#129b7876db079a2e

- 반환된 PluginObject 객체에서 getProperty(), setProperty(), callMethod() 메소드를 사용할 수 있습니다.
   각 메소드로 하위 객체나 속성에 접근하고, 메소드를 실행 할 수 있습니다.

- 사용을 완료한 PluginObject 객체는 명시적으로 destroy 하여야 합니다.
   PluginObject 객체를 destroy 하지 않을 경우 메모리 누수가 발생할 수 있습니다.


---

### clearEventHandler

> Components > Component > WebBrowser > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.clearEventHandler( strEventID )
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

> Components > Component > WebBrowser > Method > destroy

**Description**

스크립트에서 동적으로 생성한 WebBrowser 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.destroy()
```

**Parameters**

var bSucc = this.WebBrowser00.destroy();

**Return**

WebBrowser 이(가) 정상적으로 삭제되면 true 를 반환합니다.

WebBrowser 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 WebBrowser 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildWebBrowser.initWebBrowser.show


---

### findEventHandler

> Components > Component > WebBrowser > Method > findEventHandler

**Description**

WebBrowser 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.findEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > WebBrowser > Method > getEventHandler

**Description**

WebBrowser 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.getEventHandler( strEventID, nIdx )
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

> Components > Component > WebBrowser > Method > getOffsetBottom

**Description**

부모 컴포넌트의 Top 위치를 기준으로 WebBrowser 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.getOffsetBottom();
```

**Parameters**

var nBottom = this.WebBrowser.getOffsetBottom();

**Return**

부모 컴포넌트의 Top 위치를 기준으로 WebBrowser 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 WebBrowser 의 bottom 값을 동적으로 계산합니다.


---

### getOffsetHeight

> Components > Component > WebBrowser > Method > getOffsetHeight

**Description**

WebBrowser 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.getOffsetHeight();
```

**Parameters**

var nHeight = this.WebBrowser.getOffsetHeight();

**Return**

WebBrowser 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 WebBrowser 의 높이를 동적으로 계산합니다.


---

### getOffsetLeft

> Components > Component > WebBrowser > Method > getOffsetLeft

**Description**

부모 컴포넌트의 Left 위치를 기준으로 WebBrowser 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.getOffsetLeft();
```

**Parameters**

var nleft = this.WebBrowser.getOffsetLeft();

**Return**

부모 컴포넌트의 Left 위치를 기준으로 WebBrowser 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 WebBrowser 의 left 값을 동적으로 계산합니다.


---

### getOffsetRight

> Components > Component > WebBrowser > Method > getOffsetRight

**Description**

부모 컴포넌트의 Left 위치를 기준으로 WebBrowser 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.getOffsetRight();
```

**Parameters**

var nRight = this.WebBrowser.getOffsetRight();

**Return**

부모 컴포넌트의 Left 위치를 기준으로 WebBrowser 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 WebBrowser 의 right 값을 동적으로 계산합니다.


---

### getOffsetTop

> Components > Component > WebBrowser > Method > getOffsetTop

**Description**

부모 컴포넌트의 Top 위치를 기준으로 WebBrowser 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.getOffsetTop();
```

**Parameters**

var nTop = this.WebBrowser.getOffsetTop();

**Return**

부모 컴포넌트의 Top 위치를 기준으로 WebBrowser 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 WebBrowser 의 top 값을 동적으로 계산합니다.


---

### getOffsetWidth

> Components > Component > WebBrowser > Method > getOffsetWidth

**Description**

WebBrowser 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.getOffsetWidth();
```

**Parameters**

var nWidth = this.WebBrowser.getOffsetWidth();

**Return**

WebBrowser 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 WebBrowser 의 너비를 동적으로 계산합니다.


---

### getPixelBottom

> Components > Component > WebBrowser > Method > getPixelBottom

**Description**

WebBrowser 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.getPixelBottom();
```

**Parameters**

var nbottom = this.WebBrowser.getPixelBottom();

**Return**

WebBrowser 의 bottom 속성값을 픽셀단위로 반환합니다.

bottom 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- bottom 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelHeight

> Components > Component > WebBrowser > Method > getPixelHeight

**Description**

WebBrowser 의 height 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.getPixelHeight();
```

**Parameters**

var nheight = this.WebBrowser.getPixelHeight();

**Return**

WebBrowser 의 height 속성값을 픽셀단위로 반환합니다.

height 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- height 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelLeft

> Components > Component > WebBrowser > Method > getPixelLeft

**Description**

WebBrowser 의 left 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.getPixelLeft();
```

**Parameters**

var nleft = this.WebBrowser.getPixelLeft();

**Return**

WebBrowser 의 left 속성값을 픽셀단위로 반환합니다.

left 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- left 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelRight

> Components > Component > WebBrowser > Method > getPixelRight

**Description**

WebBrowser 의 right 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.getPixelRight();
```

**Parameters**

var nright = this.WebBrowser.getPixelRight();

**Return**

WebBrowser 의 right 속성값을 픽셀단위로 반환합니다.

right 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- right 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelTop

> Components > Component > WebBrowser > Method > getPixelTop

**Description**

WebBrowser 의 top 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.getPixelTop();
```

**Parameters**

var ntop = this.WebBrowser.getPixelTop();

**Return**

WebBrowser 의 top 속성값을 픽셀단위로 반환합니다.

top 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- top 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelWidth

> Components > Component > WebBrowser > Method > getPixelWidth

**Description**

WebBrowser 의 width 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.getPixelWidth();
```

**Parameters**

var nwidth = this.WebBrowser.getPixelWidth();

**Return**

WebBrowser 의 width 속성값을 픽셀단위로 반환합니다.

width 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- width 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getProperty

> Components > Component > WebBrowser > Method > getProperty

**Description**

WebBrowser 에 로드된 웹페이지의 window 또는 document 객체를 반환하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.getProperty( strObjID );
```

**Parameters**

```
"window" 설정 시 웹페이지의 window 객체를 반환합니다.

"document" 설정 시 웹페이지의 document 객체를 반환합니다.
```

**Return**

window 또는 document 객체를 갖는 PluginObject 객체를 반환합니다.

**Remark**

- Cross Domain 상황이면 사용에 제한이 있습니다.

- 반환된 PluginObject 객체에서 getProperty(), setProperty(), callMethod() 메소드를 사용할 수 있습니다.
   각 메소드로 하위 객체나 속성에 접근하고, 메소드를 실행 할 수 있습니다.
   PluginObject 객체에 대한 설명은 여기를 참고하세요.

- 사용을 완료한 PluginObject 객체는 명시적으로 destroy 하여야 합니다.
   PluginObject 객체를 destroy 하지 않을 경우 메모리 누수가 발생할 수 있습니다.


---

### init

> Components > Component > WebBrowser > Method > init

**Description**

스크립트로 WebBrowser 을(를) 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

**Parameters**

```
WebBrowser 의 ID를 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- 인수값에 기준 컴포넌트를 포함하면 WebBrowser 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 WebBrowser 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 WebBrowser 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

- 스크립트에서 동적으로 컴포넌트를 생성한 후에만 사용할 수 있습니다.
  동적으로 생성한 컴포넌트가 아닌 경우에는 오동작이 발생할수 있습니다.

- show() 메소드로 컴포넌트가 화면에 표시되면 초기화가 끝난 상태입니다.
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다.

- 동적으로 생성한 컴포넌트를 컨테이너 컴포넌트에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildWebBrowser.destroyWebBrowser.show


---

### insertEventHandler

> Components > Component > WebBrowser > Method > insertEventHandler

**Description**

WebBrowser 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

> Components > Component > WebBrowser > Method > move

**Description**

WebBrowser 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.move( vLeft, vTop [, vWidth, vHeight [, vRight, vBottom]] )
```

**Parameters**

```
WebBrowser 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* 값에 기준 컴포넌트를 포함하여 설정했을 때 :
pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 WebBrowser 의 left 가 결정됩니다.
비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 WebBrowser 의 left 가 결정됩니다.
```

**Return**

없음

**Remark**

- 인수값에 기준 컴포넌트를 포함하면 WebBrowser 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 WebBrowser 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 WebBrowser 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.


---

### moveToNext

> Components > Component > WebBrowser > Method > moveToNext

**Description**

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 WebBrowser 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**

```javascript
WebBrowser.moveToNext( objComp )
WebBrowser.moveToNext( strComp )
```

**Parameters**

```
기준이 되는 컴포넌트를 오브젝트로 설정합니다.
```

**Return**

없음

**Remark**

- 인수로 전달되는 기준 컴포넌트와 WebBrowser 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToNext() 메소드는 기준 컴포넌트보다 WebBrowser 이(가) 한단계 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 뒤에 표시되게 됩니다.


---

### moveToPrev

> Components > Component > WebBrowser > Method > moveToPrev

**Description**

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 WebBrowser 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**

```javascript
WebBrowser.moveToPrev( objComp )
WebBrowser.moveToPrev( strComp )
```

**Parameters**

```
기준이 되는 컴포넌트를 오브젝트로 설정합니다.
```

**Return**

없음

**Remark**

- 인수로 전달되는 기준 컴포넌트와 WebBrowser 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToPrev() 메소드는 기준 컴포넌트보다 WebBrowser 이(가) 한단계 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 앞에 표시되게 됩니다.


---

### reload

> Components > Component > WebBrowser > Method > reload

**Description**

WebBrowser 에 표시되고 있는 웹페이지를 새로고침하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.reload()
```

**Parameters**

this.WebBrowser00.reload();

**Return**

없음

**Remark**

- Cross Domain 상황이면 사용에 제한이 있습니다.


---

### removeEvent

> Components > Component > WebBrowser > Method > removeEvent

**Description**

WebBrowser 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.removeEvent( strEventID )
```

**Parameters**

```
WebBrowser 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 삭제에 성공하면 true 를 반환합니다.

이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- WebBrowser 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- WebBrowser 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.


---

### removeEventHandler

> Components > Component > WebBrowser > Method > removeEventHandler

**Description**

WebBrowser 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.removeEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > WebBrowser > Method > removeEventHandlerLookup

**Description**

WebBrowser 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

> Components > Component > WebBrowser > Method > resize

**Description**

WebBrowser 의 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.resize( vWidth, vHeight )
```

**Parameters**

```
WebBrowser 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.
음수값을 설정할 수 없습니다.

* 값에 기준 컴포넌트를 포함하여 설정했을 때 :
pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 WebBrowser 의 width 가 결정됩니다.
비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 WebBrowser 의 width 가 결정됩니다.
```

**Return**

없음

**Remark**

- WebBrowser 의 left 속성값이 null 이 아니면 resize() 메소드 실행 후 WebBrowser 의 우측 위치가 변경됩니다.
  또한, 메소드 실행 후 right 속성값은 null 이 됩니다.

- WebBrowser 의 left 속성값이 null 이면 resize() 메소드 실행 후 WebBrowser 의 좌측 위치가 변경됩니다.
  또한, 메소드 실행 후 left 속성값은 null 로 유지됩니다.

- WebBrowser 의 top 속성값이 null 이 아니면 resize() 메소드 실행 후 WebBrowser 의 하단 위치가 변경됩니다.
  또한, 메소드 실행 후 bottom 속성값은 null 이 됩니다.

- WebBrowser 의 top 속성값이 null 이면 resize() 메소드 실행 후 WebBrowser 의 상단 위치가 변경됩니다.
  또한, 메소드 실행 후 top 속성값은 null 로 유지됩니다.

- 인수값에 기준 컴포넌트를 포함하면 WebBrowser 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vWidth, vHeight 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 WebBrowser 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 WebBrowser 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.


---

### sendToBack

> Components > Component > WebBrowser > Method > sendToBack

**Description**

부모가 동일한 컴포넌트 중 WebBrowser 이(가) 화면의 제일 뒤에 표시되게 합니다.

**Syntax**

```javascript
WebBrowser.sendToBack()
```

**Parameters**

this.WebBrowser.sendToBack();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToBack() 메소드는 WebBrowser 을(를) 가장 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 뒤에 표시되게 됩니다


---

### sendToNext

> Components > Component > WebBrowser > Method > sendToNext

**Description**

부모가 동일한 컴포넌트 중 WebBrowser 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**

```javascript
WebBrowser.sendToNext()
```

**Parameters**

this.WebBrowser.sendToNext();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToNext() 메소드는 WebBrowser 을(를) 한단계 먼저 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 뒤에 표시되게 됩니다.


---

### setEventHandler

> Components > Component > WebBrowser > Method > setEventHandler

**Description**

WebBrowser 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.setEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > WebBrowser > Method > setEventHandlerLookup

**Description**

WebBrowser 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

> Components > Component > WebBrowser > Method > setOffsetBottom

**Description**

부모 컴포넌트의 Top 위치를 기준으로 WebBrowser 의 bottom 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.setOffsetBottom( nBottom );
```

**Parameters**

```
부모 컴포넌트의 Top 위치를 기준으로 WebBrowser 의 bottom 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 WebBrowser 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > WebBrowser 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > WebBrowser 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > WebBrowser 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.


---

### setOffsetHeight

> Components > Component > WebBrowser > Method > setOffsetHeight

**Description**

WebBrowser 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.setOffsetHeight( nHeight );
```

**Parameters**

```
WebBrowser 의 높이를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 WebBrowser 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > WebBrowser 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > WebBrowser 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > WebBrowser 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.


---

### setOffsetLeft

> Components > Component > WebBrowser > Method > setOffsetLeft

**Description**

부모 컴포넌트의 Left 위치를 기준으로 WebBrowser 의 left 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.setOffsetLeft( nLeft );
```

**Parameters**

```
부모 컴포넌트의 Left 위치를 기준으로 WebBrowser 의 left 값을 픽셀단위의 숫자로 설정합니다
```

**Return**

없음

**Remark**

- 메소드 실행 전 WebBrowser 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > WebBrowser 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > WebBrowser 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, right 속성이 설정됩니다.
   > WebBrowser 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.


---

### setOffsetRight

> Components > Component > WebBrowser > Method > setOffsetRight

**Description**

부모 컴포넌트의 Left 위치를 기준으로 WebBrowser 의 right 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.setOffsetRight( nRight );
```

**Parameters**

```
부모 컴포넌트의 Left 위치를 기준으로 WebBrowser 의 right 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 WebBrowser 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > WebBrowser 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > WebBrowser 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > WebBrowser 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.


---

### setOffsetTop

> Components > Component > WebBrowser > Method > setOffsetTop

**Description**

부모 컴포넌트의 Top 위치를 기준으로 WebBrowser 의 top 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.setOffsetTop( nTop );
```

**Parameters**

```
부모 컴포넌트의 Top 위치를 기준으로 WebBrowser 의 top 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 WebBrowser 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > WebBrowser 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > WebBrowser 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, bottom 속성이 설정됩니다.
   > WebBrowser 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.


---

### setOffsetWidth

> Components > Component > WebBrowser > Method > setOffsetWidth

**Description**

WebBrowser 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.setOffsetWidth( nWidth );
```

**Parameters**

```
WebBrowser 의 너비를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 WebBrowser 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > WebBrowser 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > WebBrowser 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > WebBrowser 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.


---

### setProperty

> Components > Component > WebBrowser > Method > setProperty

**Description**

WebBrowser 의 document 객체에 정의된 속성에 값을 설정하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.setProperty( strPropertyID, varValue );
```

**Parameters**

```
document 객체에 정의된 속성명을 문자열로 설정합니다.
```

**Return**

없음


---

### show

> Components > Component > WebBrowser > Method > show

**Description**

스크립트로 동적 생성한 WebBrowser 을(를) 화면에 표시하는 메소드입니다.

**Syntax**

```javascript
WebBrowser.show()
```

**Parameters**

this.WebBrowser00.show();

**Return**

없음

**Remark**

- show() 메소드는 컴포넌트가 폼 또는 컨테이너 컴포넌트의 자식 컴포넌트로 등록된 상태에서 사용이 가능합니다.
  자식 컴포넌트로 등록된 상태가 아닌 경우에는 오동작이 발생할 수 있습니다.

- 컴포넌트를 컨테이너에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildWebBrowser.destroyWebBrowser.init


---

### 이벤트 (Events)

### ondevicebuttonup

> Components > Component > WebBrowser > Event > ondevicebuttonup

**Description**

모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondevicebuttonup(obj:nexacro.WebBrowser,e:nexacro.DeviceButtonEventInfo);
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
- CANCEL 버튼이 눌려진 경우 preventDefault 메소드를 실행해 Default Action을 취소할 수 있습니다.

**Default Action**

 CANCEL 버튼이 눌려진 경우 goback 처리


---

### onloadcompleted

> Components > Component > WebBrowser > Event > onloadcompleted

**Description**

WebBrowser 에 웹페이지가 로딩 되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onloadcompleted(obj:nexacro.WebBrowser,e:nexacro.WebLoadCompEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- url 속성값으로 "about:blank"를 설정하여 빈페이지가 로드될 때는 onloadcompleted 이벤트가 발생하지 않습니다.


---

### onmove

> Components > Component > WebBrowser > Event > onmove

**Description**

WebBrowser 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmove(obj:nexacro.WebBrowser,e:nexacro.MoveEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onsize

> Components > Component > WebBrowser > Event > onsize

**Description**

WebBrowser 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsize(obj:nexacro.WebBrowser,e:nexacro.SizeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onusernotify

> Components > Component > WebBrowser > Event > onusernotify

**Description**

WebBrowser 에 로드된 웹페이지에서 넥사크로 쪽으로 정보를 전달할 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onusernotify(obj:nexacro.WebBrowser,e:nexacro.WebUserNotifyEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- onusernotify 이벤트를 발생시키려면 아래와 같은 코드가 웹페이지에 정의되어야 합니다.
  실행 환경에 따라 이벤트 발생 시 사용하는 코드가 달라집니다.

  1. WRE, iOS/iPadOS NRE 일때
     if(window.NEXACROWEBBROWSER)
        window.NEXACROWEBBROWSER.on_fire_onusernotify(window.NEXACROWEBBROWSER, userdata)
  2. Windows NRE 일때
     if (typeof nexacro == "undefined")
        window.document.title = userdata;
  3. Android NRE, macOS NRE 일때
     if(nexacro)
        nexacro.fireUserNotify(userdata);

- Windows NRE는 userdata를 최대 259자까지만 설정할 수 있습니다.
  (window.document.title 속성이 Microsoft WebBrowser Control 길이 제약을 받으며 최대가 259자입니다).

- Windows NRE는 웹페이지 로드 시 window.document.title 속성값이 변경되면서 이벤트가 발생할 수 있습니다.
  이벤트 처리 시 전달되는 userdata를 조건문으로 설정해 웹페이지 자체에서 발생하는 이벤트와 구분해서 사용해야 합니다.


---
