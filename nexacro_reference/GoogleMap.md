# nexacroN V24 — GoogleMap

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 104개

---

## Components > Component > GoogleMap

### GoogleMap

> Components > Component > GoogleMap

**Description**

Google Map 을 출력하기 위해 사용하는 컴포넌트입니다.

**Remark**

- Android NRE 에서 GoogleMap 을 사용하려면 "build.gradle" 에 아래와 같이 정의하여야 합니다.

  implementation 'com.google.android.gms:play-services-maps:16.0.0'
  implementation 'com.google.android.gms:play-services-location:16.0.0'

**Property**

| Name | Description |
| --- | --- |
| apikey | GoogleMap 컴포넌트에 지도 로드 시 사용될 API Key 를 설정하는 속성입니다. |
| bottom | GoogleMap 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다. |
| enable | GoogleMap 의 사용가능 여부를 설정하는 속성입니다. |
| flexgrow | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축) 여백을 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다. |
| flexshrink | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 영역이 컨테이너 영역을 초과하지 않도록 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다. |
| height | GoogleMap 을(를) 표시하기 위한 높이를 설정하는 속성입니다. |
| id | GoogleMap의 고유 식별자를 설정하는 속성입니다. |
| initvalueid | GoogleMap 에 적용될 InitValue 의 ID 를 설정하는 속성입니다. |
| items | GoogleMap 위에 표시되는 아이템을 배열 형태로 갖는 읽기전용 속성입니다. |
| language | GoogleMap 에 적용될 언어를 설정하는 속성입니다. |
| latitude | GoogleMap 에 로드된 지도의 중앙위치 위도값을 갖는 읽기전용 속성입니다. |
| layoutorder | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 순서를 설정합니다. |
| left | GoogleMap 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다. |
| longitude | GoogleMap 에 로드된 지도의 중앙위치 경도값을 갖는 읽기전용 속성입니다. |
| maxheight | GoogleMap 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다. |
| maxwidth | GoogleMap 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다. |
| minheight | GoogleMap 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다. |
| minwidth | GoogleMap 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다. |
| name | GoogleMap 의 이름을 설정하는 속성입니다. |
| -nexa-border | GoogleMap 의 테두리를 설정하는 속성입니다. |
| parent | GoogleMap 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| positionstep | 부모 오브젝트가 화면분할기능을 사용할 때 GoogleMap 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다. |
| region | GoogleMap 에 적용될 지역을 설정하는 속성입니다. |
| right | GoogleMap 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다. |
| showzoom | GoogleMap 컴포넌트에 로드된 지도에 Zoom 관련 컨트롤의 표시여부를 설정하는 속성입니다. |
| tablecellarea | Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다. |
| taborder | 탭키 입력으로 컴포넌트간 포커스를 이동할 때 GoogleMap 의 순서를 설정하는 속성입니다. |
| top | GoogleMap 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다. |
| viewmode | GoogleMap 에 로드된 지도의 표시모드값을 갖는 읽기전용 속성입니다. |
| visible | GoogleMap 이(가) 화면에 표시될지 여부를 설정하는 속성입니다. |
| width | GoogleMap 을(를) 표시하기 위한 너비를 설정하는 속성입니다. |
| zoomlevel | GoogleMap 에 로딩된 지도의 Zoom Level 값을 갖는 읽기전용 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addEvent | GoogleMap 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| addEventHandler | GoogleMap 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 GoogleMap 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| addItem | GoogleMap 위에 표시할 아이템을 추가하는 메소드입니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 GoogleMap 을(를) 삭제하는 메소드입니다. |
| findEventHandler | GoogleMap 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getAddress | GoogleMap 에서 특정 좌표(위도,경도)에 등록된 주소를 반환하는 메소드입니다. |
| getCoordinates | GoogleMap 에서 특정 주소를 좌표(위도,경도)로 반환하는 메소드입니다. |
| getEventHandler | GoogleMap 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| getOffsetBottom | 부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetHeight | GoogleMap 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetLeft | 부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetRight | 부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetTop | 부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetWidth | GoogleMap 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getPixelBottom | GoogleMap 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelHeight | GoogleMap 의 height 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelLeft | GoogleMap 의 left 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelRight | GoogleMap 의 right 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelTop | GoogleMap 의 top 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelWidth | GoogleMap 의 width 속성값을 픽셀단위로 반환하는 메소드입니다. |
| init | 스크립트로 GoogleMap 을(를) 동적 생성한 후에 초기화하는 메소드입니다. |
| insertEventHandler | GoogleMap 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| load | GoogleMap 에 지도를 로딩하는 메소드입니다. |
| move | GoogleMap 의 위치와 크기를 변경하는 메소드입니다. |
| removeEvent | GoogleMap 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| removeEventHandler | GoogleMap 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | GoogleMap 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| removeItem | GoogleMap 위에 표시된 아이템을 제거하는 메소드입니다. |
| resize | GoogleMap 의 크기를 변경하는 메소드입니다. |
| setEventHandler | GoogleMap 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | GoogleMap 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| setOffsetBottom | 부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 bottom 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetHeight | GoogleMap 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetLeft | 부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 left 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetRight | 부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 right 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetTop | 부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 top 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetWidth | GoogleMap 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| show | 스크립트로 동적 생성한 GoogleMap 을(를) 화면에 표시하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onclick | GoogleMap 컴포넌트를 클릭 또는 터치할 때 발생하는 이벤트입니다. |
| onerror | GoogleMap 동작이 실패하는 경우에 발생하는 이벤트입니다. |
| onload | GoogleMap 에 지도가 로드됐을 때 발생하는 이벤트입니다. |
| onmapdrag | GoogleMap 에 표시된 GoogleMapMarker 를 드래그하여 움직일 때 발생하는 이벤트입니다. |
| onmapdragend | GoogleMap 에서 드래그 상태인 GoogleMapMarker 를 떼었을 때 발생하는 이벤트입니다. |
| onmapdragstart | GoogleMap 에 표시된 GoogleMapMarker 의 드래그가 시작될 때 발생하는 이벤트입니다. |
| onrecvsuccess | GoogleMap 의 getAddress() 메소드 수행이 성공한 경우 발생하는 이벤트입니다. |

**Status**

컴포넌트가 비활성화된 상태


---

### 속성 (Properties)

### -nexa-border

> Components > Component > GoogleMap > Property > -nexa-border

**Description**

GoogleMap 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.border[= strborder]
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
this.GoogleMap00.border = "1px solid #999999";
this.GoogleMap00.border = "1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999";
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

### apikey

> Components > Component > GoogleMap > Property > apikey

**Description**

GoogleMap 컴포넌트에 지도 로드 시 사용될 API Key 를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.apikey[= strApiKey]
```

**Setting Syntax**

```javascript
this.GoogleMap00.apikey = "0VwFiekP...";
```
- **`strApiKey`** — Google 에서 발급받은 API Key 를 문자열로 설정합니다.

**Remark**

- apikey 에 설정된 Key 값은 load() 메소드 최초 실행 시 한번 적용됩니다.

- GoogleMap 컴포넌트별로 서로 다른 Key 를 설정할 수 있습니다.

- Android NRE 는 "AndroidManifest.xml" 에 Key 를 설정하므로 apikey 속성이 적용되지 않습니다.


---

### bottom

> Components > Component > GoogleMap > Property > bottom

**Description**

GoogleMap 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.bottom[= nBottom]
```

**Setting Syntax**

```javascript
nBottom ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.GoogleMap00.bottom = 10; 
this.GoogleMap00.bottom = "10px"; 
this.GoogleMap00.bottom = "10%"; 
this.GoogleMap00.bottom = "Button00:10px"; 
this.GoogleMap00.bottom = "Button00:10%";
```
- **`<strCompID>`** — GoogleMap 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 GoogleMap 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 GoogleMap 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — GoogleMap 의 하단 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 bottom 속성값을 기준으로 GoogleMap의 하단 위치 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 GoogleMap의 하단 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 GoogleMap의 하단 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 GoogleMap의 하단 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 top 속성값을 기준으로 GoogleMap의 하단 위치 결정
- "%": <strCompID>의 height 속성값을 기준으로 GoogleMap의 하단 위치 결정
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

### enable

> Components > Component > GoogleMap > Property > enable

**Description**

GoogleMap 의 사용가능 여부를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.enable[= benable]
```

**Setting Syntax**

```javascript
benable ::= 'true' | 'false'
```
```javascript
this.GoogleMap00.enable = true; 
this.GoogleMap00.enable = false;
```
- **`true`** — GoogleMap 을(를) 사용할 수 있게 설정합니다.
- **`false`** — GoogleMap 을(를) 사용할 수 없게 설정합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "disabled" Status 가 적용됩니다.

**Remark**

- enable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enable 속성값이 false 이면 컴포넌트가 화면에 표시되지만 포커스나 입력을 받을 수 없습니다.

- Div 와 같은 컨테이너 컴포넌트의 enable 속성값을 false 로 설정하면 자식 컴포넌트도 모두 Disable 됩니다.


---

### flexgrow

> Components > Component > GoogleMap > Property > flexgrow

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축) 여백을 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.flexgrow[= fVal]
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

> Components > Component > GoogleMap > Property > flexshrink

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 영역이 컨테이너 영역을 초과하지 않도록 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.flexshrink[= fVal]
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

> Components > Component > GoogleMap > Property > height

**Description**

GoogleMap 을(를) 표시하기 위한 높이를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.height[= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.GoogleMap00.height = 10; 
this.GoogleMap00.height = "10px"; 
this.GoogleMap00.height = 10%"; 
this.GoogleMap00.height = Button00:10%";
```
- **`<strCompID>`** — GoogleMap 의 높이를 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 GoogleMap 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 GoogleMap 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 높이가 적용됩니다.
- **`<nVal>`** — GoogleMap 의 높이를 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.


* <strCompID> 값을 생략했을 때 :
- "px": GoogleMap의 높이 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 GoogleMap의 높이 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 GoogleMap의 높이 결정
- "rem": MainFrame font-size 속성값을 기준으로 GoogleMap의 높이 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID> 값은 무시되고 설정값이 GoogleMap의 높이 결정
- "%": <strCompID>의 height 속성값을 기준으로 GoogleMap의 높이 결정
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

> Components > Component > GoogleMap > Property > id

**Description**

GoogleMap의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.id
```

**Setting Syntax**

- **`id`** — GoogleMap를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### initvalueid

> Components > Component > GoogleMap > Property > initvalueid

**Description**

GoogleMap 에 적용될 InitValue 의 ID 를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.initvalueid[= strValueID]
```

**Setting Syntax**

- **`strValueID`** — InitValueDefinition 영역에 정의된 InitValue 파일에서 GoogleMap 에 적용할 항목의 ID 를 문자열로 설정합니다.

**Remark**

- GoogleMap 가 화면에 표시된 후에는 속성값을 설정하거나 변경 할 수 없습니다.
   GoogleMap 를 동적으로 생성 시 show() 메소드 실행 전에 속성값을 설정하여야 합니다.

- Screen 별로 Environment 의 initvaluefileid 속성을 각각 설정하면 Screen 에 따라 다른 초기값을 설정할 수 있습니다.

- InitValueDefinition 영역에 한 개 이상의 InitValue 파일을 정의할 수 있고,
   InitValue 파일에는 컴포넌트별로 여러개의 초기값 정의를 할 수 있습니다.


---

### items

> Components > Component > GoogleMap > Property > items

**Description**

GoogleMap 위에 표시되는 아이템을 배열 형태로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GoogleMap.items
```

**Setting Syntax**

```javascript
var objItem = this.GoogleMap00.items[0];
```

**Remark**

- GoogleMapMarker, GoogleMapPolyline, GoogleMapPolygon 오브젝트를 배열형태로 갖는 속성입니다.

- 아이템의 추가와 삭제는 addItem(). removeItem() 메소드를 사용하여야 합니다.


---

### language

> Components > Component > GoogleMap > Property > language

**Description**

GoogleMap 에 적용될 언어를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.language[= strLang]
```

**Setting Syntax**

```javascript
this.GoogleMap00.language = "ko";
```
- **`strLang`** — GoogleMap 에 적용할 언어의 코드를 문자열로 설정합니다.

**Remark**

- language 속성값을 설정하지 않으면 브라우저에 설정된 언어가 적용됩니다.

- 설정할 수 있는 언어별 코드는 다음과 같습니다.

	
		Code
		Language
		Code
		Language
		Code
		Language
	

	
		af
		Afrikaans
		fi
		Finnish
		mn
		Mongolian
	

	
		sq
		Albanian
		fr
		French
		ne
		Nepali
	

	
		am
		Amharic
		fr-CA
		French (Canada)
		no
		Norwegian
	

	
		ar
		Arabic
		gl
		Galician
		pl
		Polish
	

	
		hy
		Armenian
		ka
		Georgian
		pt
		Portuguese
	

	
		az
		Azerbaijani
		de
		German
		pt-BR
		Portuguese(Brazil)
	

	
		eu
		Basque
		el
		Greek
		pt-PT
		Portuguese(Portugal)
	

	
		be
		Belarusian
		gu
		Gujarati
		pa
		Punjabi
	

	
		bn
		Bengali
		iw
		Hebrew
		ro
		Romanian
	

	
		bs
		Bosnian
		hi
		Hindi
		ru
		Russian
	

	
		bg
		Bulgarian
		hu
		Hungarian
		sr
		Serbian
	

	
		my
		Burmese
		is
		Icelandic
		si
		Sinhalese
	

	
		ca
		Catalan
		id
		Indonesian
		sk
		Slovak
	

	
		zh
		Chinese
		it
		Italian
		sl
		Slovenian
	

	
		zh-CN
		Chinese(Simplified)
		ja
		Japanese
		es
		Spanish
	

	
		zh-HK
		Chinese (Hong Kong)
		kn
		Kannada
		es-419
		Spanish(Latin America)
	

	
		zh-TW
		Chinese(Traditional)
		kk
		Kazakh
		sw
		Swahili
	

	
		hr
		Croatian
		km
		Khmer
		sv
		Swedish
	

	
		cs
		Czech
		ko
		Korean
		ta
		Tamil
	

	
		da
		Danish
		ky
		Kyrgyz
		te
		Telugu
	

	
		nl
		Dutch
		lo
		Lao
		th
		Thai
	

	
		en
		English
		lv
		Latvian
		tr
		Turkish
	

	
		en-AU
		English (Australian)
		lt
		Lithuanian
		uk
		Ukrainian
	

	
		en-GB
		English (Great Britain)
		mk
		Macedonian
		ur
		Urdu
	

	
		et
		Estonian
		ms
		Malay
		uz
		Uzbek
	

	
		fa
		Farsi
		ml
		Malayalam
		vi
		Vietnamese
	

	
		fil
		Filipino
		mr
		Marathi
		zu
		Zulu
	


* 2020년 1월 1일을 기준으로 지원하는 언어코드입니다.


---

### latitude

> Components > Component > GoogleMap > Property > latitude

**Description**

GoogleMap 에 로드된 지도의 중앙위치 위도값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GoogleMap.latitude
```

**Setting Syntax**

```javascript
var nLatitude = this.GoogleMap00.latitude;
```


---

### layoutorder

> Components > Component > GoogleMap > Property > layoutorder

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 순서를 설정합니다.

**Syntax**

```javascript
GoogleMap.layoutorder[= nVal]
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

> Components > Component > GoogleMap > Property > left

**Description**

GoogleMap 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.left[= nLeft]
```

**Setting Syntax**

```javascript
nLeft ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.GoogleMap00.left = 10; 
this.GoogleMap00.left = "10px"; 
this.GoogleMap00.left = "10%"; 
this.GoogleMap00.left = "Button00:10px"; 
this.GoogleMap00.left = "Button00:10%";
```
- **`<strCompID>`** — GoogleMap 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 GoogleMap 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 GoogleMap 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — GoogleMap 의 좌측 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 left 속성값을 기준으로 GoogleMap의 좌측 위치 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 GoogleMap의 좌측 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 GoogleMap의 좌측 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 GoogleMap의 좌측 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 right 속성값을 기준으로 GoogleMap의 좌측 위치 결정
- "%": <strCompID>의 width 속성값을 기준으로 GoogleMap의 좌측 위치 결정
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

### longitude

> Components > Component > GoogleMap > Property > longitude

**Description**

GoogleMap 에 로드된 지도의 중앙위치 경도값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GoogleMap.longitude
```

**Setting Syntax**

```javascript
var nLongitude = this.GoogleMap00.longitude;
```


---

### maxheight

> Components > Component > GoogleMap > Property > maxheight

**Description**

GoogleMap 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.maxheight[= nMaxHeight]
```

**Setting Syntax**

```javascript
nMaxHeight ::= <nVal> ['px']
```
```javascript
this.GoogleMap00.maxheight = 20; 
this.GoogleMap00.maxheight = "20px";
```
- **`<nVal>`** — GoogleMap 이(가) 화면에 표시되는 높이의 최대값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- height 속성값이 maxheight 보다 크면 화면에 표시되는 GoogleMap 의 높이는 maxheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- maxheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxheight 속성값을 minheight 속성값보다 작게 설정하면 minheight 속성값이 maxheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 GoogleMap 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.


---

### maxwidth

> Components > Component > GoogleMap > Property > maxwidth

**Description**

GoogleMap 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.maxwidth[= nMaxWidth]
```

**Setting Syntax**

```javascript
nMaxWidth ::= <nVal> ['px']
```
```javascript
this.GoogleMap00.maxwidth = 20; 
this.GoogleMap00.maxwidth = "20px";
```
- **`<nVal>`** — GoogleMap 이(가) 화면에 표시되는 너비의 최대값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- width 속성값이 maxwidth 보다 크면 화면에 표시되는 GoogleMap 의 너비는 maxwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- maxwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxwidth 속성값을 minwidth 속성값보다 작게 설정하면 minwidth 속성값이 maxwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 GoogleMap 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.


---

### minheight

> Components > Component > GoogleMap > Property > minheight

**Description**

GoogleMap 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.minheight[= nMinHeight]
```

**Setting Syntax**

```javascript
nMinHeight ::= <nVal> ['px']
```
```javascript
this.GoogleMap00.minheight = 20; 
this.GoogleMap00.minheight = "20px";
```
- **`<nVal>`** — GoogleMap 이(가) 화면에 표시되는 높이의 최소값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- height 속성값이 minheight 보다 작다면 화면에 표시되는 GoogleMap 의 높이는 minheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- minheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minheight 속성값을 maxheight 속성값보다 크게 설정하면 maxheight 속성값이 minheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 GoogleMap 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.


---

### minwidth

> Components > Component > GoogleMap > Property > minwidth

**Description**

GoogleMap 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.minwidth[= nMinWidth]
```

**Setting Syntax**

```javascript
nMinWidth ::= <nVal> ['px']
```
```javascript
this.GoogleMap00.minwidth = 20; 
this.GoogleMap00.minwidth = "20px";
```
- **`<nVal>`** — GoogleMap 이(가) 화면에 표시되는 너비의 최소값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- width 속성값이 minwidth 보다 작으면 화면에 표시되는 GoogleMap 의 너비는 minwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- minwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minwidth 속성값을 maxwidth 속성값보다 크게 설정하면 maxwidth 속성값이 minwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 GoogleMap 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.


---

### name

> Components > Component > GoogleMap > Property > name

**Description**

GoogleMap 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### parent

> Components > Component > GoogleMap > Property > parent

**Description**

GoogleMap 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GoogleMap.parent
```

**Setting Syntax**

```javascript
var objParent = this.GoogleMap00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- GoogleMap 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### positionstep

> Components > Component > GoogleMap > Property > positionstep

**Description**

부모 오브젝트가 화면분할기능을 사용할 때 GoogleMap 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.positionstep[= nStep]
```

**Setting Syntax**

```javascript
this.GoogleMap00.positionstep = 0; 
this.GoogleMap00.positionstep = -1;
```
- **`nStep`** — GoogleMap 이(가) 표시될 분할화면의 인덱스를 설정합니다.
"-1" 로 설정하면 모든 분할화면에 GoogleMap 이(가) 표시됩니다.

분할화면의 인덱스는 "0" 부터 시작합니다.

**Remark**

- positionstep 에 설정된 인덱스값과 일치하는 분할화면에만 컴포넌트가 표시됩니다.

- 분할화면에 표시되지 않는 컴포넌트의 visible 속성값은 "false"로 변경되지 않습니다.


---

### region

> Components > Component > GoogleMap > Property > region

**Description**

GoogleMap 에 적용될 지역을 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.region[= strRegion]
```

**Setting Syntax**

```javascript
this.GoogleMap00.region = "KR";
```
- **`strRegion`** — GoogleMap 에 적용할 지역의 코드를 문자열로 설정합니다.

지역 코드는 ISO 3166-1 에서 정의하고 있는 2-알파벳 국가코드를 사용합니다.

**Remark**

- region 속성값을 설정하지 않으면 브라우저에 설정된 지역이 적용됩니다.

- 지역코드는 "Appendix > Locale Code List" 항목의 국가코드를 참고하세요.


---

### right

> Components > Component > GoogleMap > Property > right

**Description**

GoogleMap 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.right[= nRight]
```

**Setting Syntax**

```javascript
nRight ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.GoogleMap00.right = 10; 
this.GoogleMap00.right = "10px"; 
this.GoogleMap00.right = "10%"; 
this.GoogleMap00.right = "Button00:10px"; 
this.GoogleMap00.right = "Button00:10%";
```
- **`<strCompID>`** — GoogleMap 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 GoogleMap 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 GoogleMap 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — GoogleMap 의 우측 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 right 속성값을 기준으로 GoogleMap의 우측 위치 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 GoogleMap의 우측 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 GoogleMap의 우측 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 GoogleMap의 우측 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 left 속성값을 기준으로 GoogleMap의 우측 위치 결정
- "%": <strCompID>의 width 속성값을 기준으로 GoogleMap의 우측 위치 결정
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

### showzoom

> Components > Component > GoogleMap > Property > showzoom

**Description**

GoogleMap 컴포넌트에 로드된 지도에 Zoom 관련 컨트롤의 표시여부를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.showzoom[= bShowzoom]
```

**Setting Syntax**

```javascript
bShowzoom ::= 'true' | 'false'
```
```javascript
this.GoogleMap00.showzoom = true;
```
- **`"true"`** — Zoom 을 조절할 수 있는 [+],[-] 버튼 컨트롤이 지도에 표시됩니다.
- **`"false"`** — Zoom 을 조절할 수 있는 [+],[-] 버튼 컨트롤이 지도에 표시되지 않습니다.

**Remark**

- showzoom 속성값을 설정하지 않으면 "false"로 적용됩니다.


---

### tablecellarea

> Components > Component > GoogleMap > Property > tablecellarea

**Description**

Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다.

**Syntax**

```javascript
GoogleMap.tablecellarea[= strArea]
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

> Components > Component > GoogleMap > Property > taborder

**Description**

탭키 입력으로 컴포넌트간 포커스를 이동할 때 GoogleMap 의 순서를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.taborder[= nTabOrder]
```

**Setting Syntax**

- **`nTabOrder`** — 0 이상의 정수로 설정합니다.

**Remark**

- taborder 속성값이 작은 컴포넌트에 포커스가 먼저 이동되고, 속성값이 클수록 나중에 포커스가 이동됩니다.

- taborder 속성값이 동일한 컴포넌트는 폼에 먼저 생성된 컴포넌트에 포커스가 먼저 이동됩니다.

- 스크립트로 taborder 속성값 변경 시 포커스 이동 순서가 변경됩니다.

- Div 와 같은 컨테이너 컴포넌트는 자식 컴포넌트 레벨에서 포커스 이동 순서가 별도로 정의됩니다.


---

### top

> Components > Component > GoogleMap > Property > top

**Description**

GoogleMap 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.top[= nTop]
```

**Setting Syntax**

```javascript
nTop ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.GoogleMap00.top = 10; 
this.GoogleMap00.top = "10px"; 
this.GoogleMap00.top = "10%"; 
this.GoogleMap00.top = "Button00:10px"; 
this.GoogleMap00.top = "Button00:10%";
```
- **`<strCompID>`** — GoogleMap 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 GoogleMap 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 GoogleMap 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — GoogleMap의 상단 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 top 속성값을 기준으로 GoogleMap의 상단 위치 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 GoogleMap의 상단 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 GoogleMap의 상단 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 GoogleMap의 상단 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 bottom 속성값을 기준으로 GoogleMap의 상단 위치 결정
- "%": <strCompID>의 height 속성값을 기준으로 GoogleMap의 상단 위치 결정
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

### viewmode

> Components > Component > GoogleMap > Property > viewmode

**Description**

GoogleMap 에 로드된 지도의 표시모드값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GoogleMap.viewmode
```

**Setting Syntax**

- **`viewmode`** — 일반 Google Map 형태로 표시될 경우 "0" 값을 갖습니다.
위성 이미지 형태로 표시될 경우 "1" 값을 갖습니다.
위성 이미지를 표시하고 주요거리의 투명레이어를 함께 표시할 경우 "2" 값을 갖습니다.
지형 및 초목과 같은 물리적인 지형지물과 주요거리 투명레이어를 함께 표시할 경우 "3" 값을 갖습니다.


---

### visible

> Components > Component > GoogleMap > Property > visible

**Description**

GoogleMap 이(가) 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
this.GoogleMap00.visible = true; 
this.GoogleMap00.visible = false;
```
- **`"true"`** — GoogleMap 을(를) 화면에 표시합니다.
- **`"false"`** — GoogleMap 을(를) 화면에 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하는 즉시 컴포넌트의 표시 여부가 화면에 반영됩니다.

- visible 속성값이 "false"이면 컴포넌트가 화면에 표시되지 않고, 포커스를 받을 수 없으므로 입력이나 사용이 불가능합니다.

- Div 와 같은 컨테이너 컴포넌트의 visible 속성값을 "false"로 설정하면 자식 컴포넌트도 함께 화면에 표시되지 않습니다.

- visible 속성값이 "false"이어도 컴포넌트는 존재하기 때문에 스크립트로 제어가 가능합니다.

- 넥사크로 스튜디오에서는 visible 속성값을 'false'로 설정해도 디자인화면에서 사라지지 않습니다.


---

### width

> Components > Component > GoogleMap > Property > width

**Description**

GoogleMap 을(를) 표시하기 위한 너비를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMap.width[= nWidth]
```

**Setting Syntax**

```javascript
nWidth ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.GoogleMap00.width = 10; this.GoogleMap00.width = "10px"; 
this.GoogleMap00.width = "10%"; 
this.GoogleMap00.width = "Button00:10%";
```
- **`<strCompID>`** — GoogleMap 의 너비를 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 GoogleMap 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 GoogleMap 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 너비가 적용됩니다.
- **`<nVal>`** — GoogleMap 의 너비를 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": GoogleMap의 너비 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 GoogleMap의 너비 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 GoogleMap의 너비 결정
- "rem": MainFrame font-size 속성값을 기준으로 GoogleMap의 너비 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID> 값은 무시되고 설정값이 GoogleMap의 너비 결정
- "%": <strCompID>의 width 속성값을 기준으로 GoogleMap의 너비 결정
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

### zoomlevel

> Components > Component > GoogleMap > Property > zoomlevel

**Description**

GoogleMap 에 로딩된 지도의 Zoom Level 값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GoogleMap.zoomlevel
```

**Remark**

- 로딩된 지도의 Zoom Level 이 0 이상의 정수로 저장됩니다.

- 사용자에 의해 지도의 Zoom Level 이 변경될 때 속성값이 함께 변경됩니다.


---

### 메서드 (Methods)

### addEvent

> Components > Component > GoogleMap > Method > addEvent

**Description**

GoogleMap 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.addEvent( strEventID )
```

**Parameters**

```
GoogleMap 에 추가할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 추가에 성공하면 true 를 반환합니다.

이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- GoogleMap 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.


---

### addEventHandler

> Components > Component > GoogleMap > Method > addEventHandler

**Description**

GoogleMap 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.addEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > GoogleMap > Method > addEventHandlerLookup

**Description**

함수를 검색하여 GoogleMap 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

### addItem

> Components > Component > GoogleMap > Method > addItem

**Description**

GoogleMap 위에 표시할 아이템을 추가하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.addItem( strItemID, objItem )
```

**Parameters**

```
각 아이템을 구분할 고유 식별자를 문자열로 설정합니다.
```

**Return**

파라미터를 잘못 설정하거나 중복된 ID가 존재할 경우 "false" 를 반환합니다.
그 외의 정상적인 경우에는 "true" 를 반환합니다.

**Remark**

- 아이템 추가에 실패하였을 경우 onerror 이벤트가 발생합니다.


---

### clearEventHandler

> Components > Component > GoogleMap > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.clearEventHandler( strEventID )
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

> Components > Component > GoogleMap > Method > destroy

**Description**

스크립트에서 동적으로 생성한 GoogleMap 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.destroy()
```

**Parameters**

var bSucc = this.GoogleMap00.destroy();

**Return**

GoogleMap 이(가) 정상적으로 삭제되면 true 를 반환합니다.

GoogleMap 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 GoogleMap 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildGoogleMap.initGoogleMap.show


---

### findEventHandler

> Components > Component > GoogleMap > Method > findEventHandler

**Description**

GoogleMap 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.findEventHandler( strEventID, objFunc, objTarget )
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

### getAddress

> Components > Component > GoogleMap > Method > getAddress

**Description**

GoogleMap 에서 특정 좌표(위도,경도)에 등록된 주소를 반환하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.getAddress(nLatitude, nLongitude, [nMaxResultCount, [enumLocale]])
```

**Parameters**

```
주소를 검색할 위치의 위도를 숫자로 설정합니다.
```

**Return**

파라미터를 잘 못 설정하거나 0 이하로 설정 시 "false" 를 반환합니다.
그 외의 정상적인 경우에는 "true" 를 반환합니다.

**Remark**

- getAddress() 메소드 수행에 성공하면 onrecvsuccess 이벤트가 발생합니다.
  getAddress() 메소드 수행에 실패하면 onerror 이벤트가 발생합니다. 

- 아래 사이트를 참조하시기 바랍니다.
  "http://developer.android.com/reference/android/location/Geocoder.html#getFromLocation(double,double,int)"
  "http://developer.android.com/reference/android/location/Address.html"


---

### getCoordinates

> Components > Component > GoogleMap > Method > getCoordinates

**Description**

GoogleMap 에서 특정 주소를 좌표(위도,경도)로 반환하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.getCoordinates( strAddress )
```

**Parameters**

```
좌표(위도,경도)로 변환하려는 주소를 문자열로 설정합니다.
```

**Return**

메소드 수행에 성공하면 "true" 를 반환합니다.
메소드 수행에 실패하면 "false" 를 반환합니다.

**Remark**

- 좌표(위도,경도) 변환에 성공하면 onrecvsuccess 이벤트가 발생합니다.
  좌표(위도,경도) 변환에 실패하면 onerror 이벤트가 발생합니다.


---

### getEventHandler

> Components > Component > GoogleMap > Method > getEventHandler

**Description**

GoogleMap 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.getEventHandler( strEventID, nIdx )
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

> Components > Component > GoogleMap > Method > getOffsetBottom

**Description**

부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.getOffsetBottom();
```

**Parameters**

var nBottom = this.GoogleMap.getOffsetBottom();

**Return**

부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 bottom 값을 동적으로 계산합니다.


---

### getOffsetHeight

> Components > Component > GoogleMap > Method > getOffsetHeight

**Description**

GoogleMap 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.getOffsetHeight();
```

**Parameters**

var nHeight = this.GoogleMap.getOffsetHeight();

**Return**

GoogleMap 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 GoogleMap 의 높이를 동적으로 계산합니다.


---

### getOffsetLeft

> Components > Component > GoogleMap > Method > getOffsetLeft

**Description**

부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.getOffsetLeft();
```

**Parameters**

var nleft = this.GoogleMap.getOffsetLeft();

**Return**

부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 left 값을 동적으로 계산합니다.


---

### getOffsetRight

> Components > Component > GoogleMap > Method > getOffsetRight

**Description**

부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.getOffsetRight();
```

**Parameters**

var nRight = this.GoogleMap.getOffsetRight();

**Return**

부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 right 값을 동적으로 계산합니다.


---

### getOffsetTop

> Components > Component > GoogleMap > Method > getOffsetTop

**Description**

부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.getOffsetTop();
```

**Parameters**

var nTop = this.GoogleMap.getOffsetTop();

**Return**

부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 top 값을 동적으로 계산합니다.


---

### getOffsetWidth

> Components > Component > GoogleMap > Method > getOffsetWidth

**Description**

GoogleMap 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.getOffsetWidth();
```

**Parameters**

var nWidth = this.GoogleMap.getOffsetWidth();

**Return**

GoogleMap 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 GoogleMap 의 너비를 동적으로 계산합니다.


---

### getPixelBottom

> Components > Component > GoogleMap > Method > getPixelBottom

**Description**

GoogleMap 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.getPixelBottom();
```

**Parameters**

var nbottom = this.GoogleMap.getPixelBottom();

**Return**

GoogleMap 의 bottom 속성값을 픽셀단위로 반환합니다.

bottom 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- bottom 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelHeight

> Components > Component > GoogleMap > Method > getPixelHeight

**Description**

GoogleMap 의 height 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.getPixelHeight();
```

**Parameters**

var nheight = this.GoogleMap.getPixelHeight();

**Return**

GoogleMap 의 height 속성값을 픽셀단위로 반환합니다.

height 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- height 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelLeft

> Components > Component > GoogleMap > Method > getPixelLeft

**Description**

GoogleMap 의 left 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.getPixelLeft();
```

**Parameters**

var nleft = this.GoogleMap.getPixelLeft();

**Return**

GoogleMap 의 left 속성값을 픽셀단위로 반환합니다.

left 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- left 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelRight

> Components > Component > GoogleMap > Method > getPixelRight

**Description**

GoogleMap 의 right 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.getPixelRight();
```

**Parameters**

var nright = this.GoogleMap.getPixelRight();

**Return**

GoogleMap 의 right 속성값을 픽셀단위로 반환합니다.

right 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- right 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelTop

> Components > Component > GoogleMap > Method > getPixelTop

**Description**

GoogleMap 의 top 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.getPixelTop();
```

**Parameters**

var ntop = this.GoogleMap.getPixelTop();

**Return**

GoogleMap 의 top 속성값을 픽셀단위로 반환합니다.

top 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- top 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelWidth

> Components > Component > GoogleMap > Method > getPixelWidth

**Description**

GoogleMap 의 width 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.getPixelWidth();
```

**Parameters**

var nwidth = this.GoogleMap.getPixelWidth();

**Return**

GoogleMap 의 width 속성값을 픽셀단위로 반환합니다.

width 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- width 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### init

> Components > Component > GoogleMap > Method > init

**Description**

스크립트로 GoogleMap 을(를) 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

**Parameters**

```
GoogleMap 의 ID를 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- 인수값에 기준 컴포넌트를 포함하면 GoogleMap 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 GoogleMap 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 GoogleMap 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

- 스크립트에서 동적으로 컴포넌트를 생성한 후에만 사용할 수 있습니다.
  동적으로 생성한 컴포넌트가 아닌 경우에는 오동작이 발생할수 있습니다.

- show() 메소드로 컴포넌트가 화면에 표시되면 초기화가 끝난 상태입니다.
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다.

- 동적으로 생성한 컴포넌트를 컨테이너 컴포넌트에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildGoogleMap.destroyGoogleMap.show


---

### insertEventHandler

> Components > Component > GoogleMap > Method > insertEventHandler

**Description**

GoogleMap 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

### load

> Components > Component > GoogleMap > Method > load

**Description**

GoogleMap 에 지도를 로딩하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.load( [bUseSensor[, nLatitude, nLongitude[, constViewMode[, nZoomLevel]]] )
```

**Parameters**

```
GPS 사용 여부를 설정합니다.

true 설정 시 GPS 정보를 기준으로 로딩될 지도의 위치를 결정합니다.
false 설정 시 GPS 정보를 사용하지 않습니다.

값 생략 시 false 로 적용됩니다.

* 모바일 기기에서 GPS 사용이 허가되지 않은 경우에 true 를 설정하면 onerror 이벤트가 발생합니다.
   모바일 기기에서 GPS 사용이 허가된 상태일때 true 를 설정하면 사용허가 확인창이 1회 이상 표시될 수 있습니다.
```

**Return**

파라미터를 잘 못 설정할 경우 false 를 반환합니다.

그 외의 정상적인 경우에는 true 를 반환합니다.

**Remark**

- 지도가 정상적으로 로딩되면 onload 이벤트가 발생합니다.
   지도가 정상적으로 로딩되지 않으면 onerror 이벤트가 발생합니다.

- GoogleMap 에 지도가 로딩되어 있을 때 load() 메소드를 수행하면 지도를 재로딩합니다.

- 지도 로딩 후 중앙좌표(centerlocation), 지도표시모드(viewmode), 줌레벨(zoomlevel) 속성값이 설정됩니다.

- 표시되는 지역에 따라 지도표시모드와 줌레벨의 범위가 달라지며 해당 지역에서 허용되지 않는 값을 설정할 경우 지도가 정상적으로 표시되지 않을 수 있습니다. 
  지역에 따른 GoogleMap 의 최대 줌값은 아래의 샘플 사이트에서 확인이 가능합니다.
  "https://google-developers.appspot.com/maps/documentation/javascript/examples/control-positioning?hl=ko"

- Android NRE 에서 GoogleMap 을 사용하려면 "build.gradle" 에 아래와 같이 정의하여야 합니다.
  implementation 'com.google.android.gms:play-services-maps:16.0.0'
  implementation 'com.google.android.gms:play-services-location:16.0.0'


---

### move

> Components > Component > GoogleMap > Method > move

**Description**

GoogleMap 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.move( vLeft, vTop [, vWidth, vHeight [, vRight, vBottom]] )
```

**Parameters**

```
GoogleMap 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* 값에 기준 컴포넌트를 포함하여 설정했을 때 :
pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 GoogleMap 의 left 가 결정됩니다.
비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 GoogleMap 의 left 가 결정됩니다.
```

**Return**

없음

**Remark**

- 인수값에 기준 컴포넌트를 포함하면 GoogleMap 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 GoogleMap 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 GoogleMap 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.


---

### removeEvent

> Components > Component > GoogleMap > Method > removeEvent

**Description**

GoogleMap 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.removeEvent( strEventID )
```

**Parameters**

```
GoogleMap 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 삭제에 성공하면 true 를 반환합니다.

이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- GoogleMap 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- GoogleMap 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.


---

### removeEventHandler

> Components > Component > GoogleMap > Method > removeEventHandler

**Description**

GoogleMap 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.removeEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > GoogleMap > Method > removeEventHandlerLookup

**Description**

GoogleMap 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

### removeItem

> Components > Component > GoogleMap > Method > removeItem

**Description**

GoogleMap 위에 표시된 아이템을 제거하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.removeItem(strItemID)
```

**Parameters**

```
제거할 아이템의 ID 를 설정합니다.
```

**Return**

파라미터를 잘 못 설정할 경우 "false" 를 반환합니다.
그 외의 정상적인 경우에는 "true" 를 반환합니다.

**Remark**

- 아이템 제거에 실패했을 경우 onerror 이벤트가 발생합니다.


---

### resize

> Components > Component > GoogleMap > Method > resize

**Description**

GoogleMap 의 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.resize( vWidth, vHeight )
```

**Parameters**

```
GoogleMap 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.
음수값을 설정할 수 없습니다.

* 값에 기준 컴포넌트를 포함하여 설정했을 때 :
pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 GoogleMap 의 width 가 결정됩니다.
비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 GoogleMap 의 width 가 결정됩니다.
```

**Return**

없음

**Remark**

- GoogleMap 의 left 속성값이 null 이 아니면 resize() 메소드 실행 후 GoogleMap 의 우측 위치가 변경됩니다.
  또한, 메소드 실행 후 right 속성값은 null 이 됩니다.

- GoogleMap 의 left 속성값이 null 이면 resize() 메소드 실행 후 GoogleMap 의 좌측 위치가 변경됩니다.
  또한, 메소드 실행 후 left 속성값은 null 로 유지됩니다.

- GoogleMap 의 top 속성값이 null 이 아니면 resize() 메소드 실행 후 GoogleMap 의 하단 위치가 변경됩니다.
  또한, 메소드 실행 후 bottom 속성값은 null 이 됩니다.

- GoogleMap 의 top 속성값이 null 이면 resize() 메소드 실행 후 GoogleMap 의 상단 위치가 변경됩니다.
  또한, 메소드 실행 후 top 속성값은 null 로 유지됩니다.

- 인수값에 기준 컴포넌트를 포함하면 GoogleMap 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vWidth, vHeight 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 GoogleMap 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 GoogleMap 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.


---

### setEventHandler

> Components > Component > GoogleMap > Method > setEventHandler

**Description**

GoogleMap 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.setEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > GoogleMap > Method > setEventHandlerLookup

**Description**

GoogleMap 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

> Components > Component > GoogleMap > Method > setOffsetBottom

**Description**

부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 bottom 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.setOffsetBottom( nBottom );
```

**Parameters**

```
부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 bottom 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 GoogleMap 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > GoogleMap 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > GoogleMap 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > GoogleMap 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.


---

### setOffsetHeight

> Components > Component > GoogleMap > Method > setOffsetHeight

**Description**

GoogleMap 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.setOffsetHeight( nHeight );
```

**Parameters**

```
GoogleMap 의 높이를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 GoogleMap 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > GoogleMap 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > GoogleMap 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > GoogleMap 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.


---

### setOffsetLeft

> Components > Component > GoogleMap > Method > setOffsetLeft

**Description**

부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 left 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.setOffsetLeft( nLeft );
```

**Parameters**

```
부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 left 값을 픽셀단위의 숫자로 설정합니다
```

**Return**

없음

**Remark**

- 메소드 실행 전 GoogleMap 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > GoogleMap 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > GoogleMap 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, right 속성이 설정됩니다.
   > GoogleMap 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.


---

### setOffsetRight

> Components > Component > GoogleMap > Method > setOffsetRight

**Description**

부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 right 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.setOffsetRight( nRight );
```

**Parameters**

```
부모 컴포넌트의 Left 위치를 기준으로 GoogleMap 의 right 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 GoogleMap 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > GoogleMap 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > GoogleMap 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > GoogleMap 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.


---

### setOffsetTop

> Components > Component > GoogleMap > Method > setOffsetTop

**Description**

부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 top 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.setOffsetTop( nTop );
```

**Parameters**

```
부모 컴포넌트의 Top 위치를 기준으로 GoogleMap 의 top 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 GoogleMap 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > GoogleMap 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > GoogleMap 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, bottom 속성이 설정됩니다.
   > GoogleMap 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.


---

### setOffsetWidth

> Components > Component > GoogleMap > Method > setOffsetWidth

**Description**

GoogleMap 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.setOffsetWidth( nWidth );
```

**Parameters**

```
GoogleMap 의 너비를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 GoogleMap 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > GoogleMap 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > GoogleMap 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > GoogleMap 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.


---

### show

> Components > Component > GoogleMap > Method > show

**Description**

스크립트로 동적 생성한 GoogleMap 을(를) 화면에 표시하는 메소드입니다.

**Syntax**

```javascript
GoogleMap.show()
```

**Parameters**

this.GoogleMap00.show();

**Return**

없음

**Remark**

- show() 메소드는 컴포넌트가 폼 또는 컨테이너 컴포넌트의 자식 컴포넌트로 등록된 상태에서 사용이 가능합니다.
  자식 컴포넌트로 등록된 상태가 아닌 경우에는 오동작이 발생할 수 있습니다.

- 컴포넌트를 컨테이너에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildGoogleMap.destroyGoogleMap.init


---

### 이벤트 (Events)

### onclick

> Components > Component > GoogleMap > Event > onclick

**Description**

GoogleMap 컴포넌트를 클릭 또는 터치할 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onclick(obj:nexacro.GoogleMap,e:nexacro.GoogleMapClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onerror

> Components > Component > GoogleMap > Event > onerror

**Description**

GoogleMap 동작이 실패하는 경우에 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.GoogleMap,e:nexacro.GoogleMapErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onload

> Components > Component > GoogleMap > Event > onload

**Description**

GoogleMap 에 지도가 로드됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onload(obj:nexacro.GoogleMap,e:nexacro.GoogleMapEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onmapdrag

> Components > Component > GoogleMap > Event > onmapdrag

**Description**

GoogleMap 에 표시된 GoogleMapMarker 를 드래그하여 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmapdrag(obj:nexacro.GoogleMap,e:nexacro.GoogleMapDragEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Android 일 경우 GoogleMapMarker를 1초 이상 터치하면 드래그가 가능합니다.


---

### onmapdragend

> Components > Component > GoogleMap > Event > onmapdragend

**Description**

GoogleMap 에서 드래그 상태인 GoogleMapMarker 를 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmapdragend(obj:nexacro.GoogleMap,e:nexacro.GoogleMapDragEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Android 일 경우 GoogleMapMarker를 1초 이상 터치하면 드래그가 가능합니다.


---

### onmapdragstart

> Components > Component > GoogleMap > Event > onmapdragstart

**Description**

GoogleMap 에 표시된 GoogleMapMarker 의 드래그가 시작될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmapdragstart(obj:nexacro.GoogleMap,e:nexacro.GoogleMapDragEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Android 일 경우 GoogleMapMarker를 1초 이상 터치하면 드래그가 가능합니다.


---

### onrecvsuccess

> Components > Component > GoogleMap > Event > onrecvsuccess

**Description**

GoogleMap 의 getAddress() 메소드 수행이 성공한 경우 발생하는 이벤트입니다.

**Syntax**

```javascript
onrecvsuccess(obj:nexacro.GoogleMap,e:nexacro.GoogleMapEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 특정 좌표의 주소를 반환합니다.


---

## Components > Component > GoogleMap > Objects

### Objects

> Components > Component > GoogleMap > Objects

**Description**

GoogleMap 에 로드된 지도에 추가정보를 표시하기 위해 사용하는 오브젝트입니다.


---

## Components > Component > GoogleMap > GoogleMapCircle

### GoogleMapCircle

> Components > Component > GoogleMap > Objects > GoogleMapCircle

**Description**

GoogleMap 컴포넌트에 로드된 지도의 특정위치에 원을 표시 할 때 사용하는 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| latitude | GoogleMapCircle 이 표시될 위치의 위도값을 설정하는 속성입니다. |
| longitude | GoogleMapCircle 이 표시될 위치의 경도값을 설정하는 속성입니다. |
| radius | GoogleMapCircle 이 표시될 반지름 값을 설정하는 속성입니다 |
| visible | GoogleMapCircle 을 지도에 표시할 지 여부를 설정하는 속성입니다. |


---

### 속성 (Properties)

### latitude

> Components > Component > GoogleMap > Objects > GoogleMapCircle > Property > latitude

**Description**

GoogleMapCircle 이 표시될 위치의 위도값을 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMapCircle.latitude[= nLatitude]
```

**Setting Syntax**

```javascript
var objMC = new nexacro.GoogleMapCircle();  

objMC.latitude = 37.5;
```
- **`nLatitude`** — 지도에 GoogleMapCircle 이 표시될 위치의 위도값을 숫자로 설정합니다.


---

### longitude

> Components > Component > GoogleMap > Objects > GoogleMapCircle > Property > longitude

**Description**

GoogleMapCircle 이 표시될 위치의 경도값을 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMapCircle.longitude[= nLongitude]
```

**Setting Syntax**

```javascript
var objMC = new nexacro.GoogleMapCircle();  

objMC.longitude = 127.05;
```
- **`nLongitude`** — 지도에 GoogleMapCircle 이 표시될 위치의 경도값을 숫자로 설정합니다.


---

### radius

> Components > Component > GoogleMap > Objects > GoogleMapCircle > Property > radius

**Description**

GoogleMapCircle 이 표시될 반지름 값을 설정하는 속성입니다

**Syntax**

```javascript
GoogleMapCircle.radius[= nRadius]
```

**Setting Syntax**

```javascript
var objMC = new nexacro.GoogleMapCircle();  

objMC.radius = 120;
```
- **`nRadius`** — GoogleMapCircle 의 반지름 값을 미터단위의 숫자로 설정합니다.

**Remark**

- radius 속성값을 설정하지 않으면 100 으로 적용됩니다.


---

### visible

> Components > Component > GoogleMap > Objects > GoogleMapCircle > Property > visible

**Description**

GoogleMapCircle 을 지도에 표시할 지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMapCircle.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
var objMC = new nexacro.GoogleMapCircle();  

objMC.visible = false;
```
- **`"true"`** — 지도에 추가된 GoogleMapCircle 을 표시합니다.
- **`"false"`** — 지도에 추가된 GoogleMapCircle 을 표시하지 않습니다.

**Remark**

- visible 속성값을 설정하지 않으면 "true" 로 적용됩니다.


---

## Components > Component > GoogleMap > GoogleMapMarker

### GoogleMapMarker

> Components > Component > GoogleMap > Objects > GoogleMapMarker

**Description**

GoogleMap 컴포넌트에 로드된 지도의 특정위치에 마크(아이콘) 표시를 할 때 사용하는 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| draggable | GoogleMapMarker 를 드래그로 움직일 수 있는지 여부를 설정하는 속성입니다. |
| imageurl | 지도에 GoogleMapMarker 로 표시될 이미지의 경로를 설정하는 속성입니다. |
| latitude | GoogleMapMarker 가 표시될 위치의 위도값을 설정하는 속성입니다. |
| longitude | GoogleMapMarker 가 표시될 위치의 경도값을 설정하는 속성입니다. |
| text | GoogleMapMaker 위에 표시될 설명을 설정하는 속성입니다. |
| visible | GoogleMapMaker 를 지도에 표시할 지 여부를 설정하는 속성입니다. |


---

### 속성 (Properties)

### draggable

> Components > Component > GoogleMap > Objects > GoogleMapMarker > Property > draggable

**Description**

GoogleMapMarker 를 드래그로 움직일 수 있는지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMapMarker.draggable[= bDraggable]
```

**Setting Syntax**

```javascript
bDraggable ::= 'true' | 'false'
```
```javascript
var objMM = new nexacro.GoogleMapMarker();  

objMM.draggable = true;
```
- **`"true"`** — GoogleMapMarker 를 드래그로 움직일 수 있게 설정합니다.
- **`"false"`** — GoogleMapMarker 를 드래그로 움직일 수 없게 설정합니다.

**Remark**

- draggable 속성값을 설정하지 않으면 "true" 로 적용됩니다.


---

### imageurl

> Components > Component > GoogleMap > Objects > GoogleMapMarker > Property > imageurl

**Description**

지도에 GoogleMapMarker 로 표시될 이미지의 경로를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMapMarker.imageurl[= strImageurl]
```

**Setting Syntax**

```javascript
strImageurl ::= <theme-Image> | <web-Image> | <absolute-image> | <relative-image>
```
```javascript
var objMM = new nexacro.GoogleMapMarker();  

objMM.image = "theme://images/V13_logo.png";                            // 테마 이미지 

objMM.image = "http://www.tobesoft.com/images/gnb/btn_h1.gif";  // 웹 이미지 

objMM.image = "Base::test.jpg";                                                  // TypeDefinition Prefix 이미지 

objMM.image = "./test.jpg";                                                         // 상대경로 이미지
```
- **`<theme-Image>`** — 테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<absolute-image>`** — TypeDefinition 영역의 Services 에 정의된 Prefix를 사용한 형식으로 설정합니다.
- **`<relative-image>`** — 폼의 위치를 기준으로 한 상대경로를 사용하여 설정합니다.

**Remark**

- 설정된 이미지는 GoogleMapMarker 가 표시될 위치의 상단에 중앙정렬되어 표시됩니다.

- 모바일기기의 경로로 접근하는 경우 Alias 를 사용할 수 있습니다.

	
		OS
		Alias
		Path
	

	
		Android
		%USERAPP%
		/data/data/{PackageName}/files/NEXACRO/
	

	
		%SD_CARD%
		/mnt/sdcard                (Android v4.0 이하)
/storage/emulated/0    (Android v4.1 이상)
	

	
		%INSTALLROOT%
		%USERAPP%
	

	
		iOS
		%USERAPP%
		/Library/Caches/nexacro/
	

	
		%SD_CARD%
		미지원
	

	
		%INSTALLROOT%
		%USERAPP%
	


  * %USERAPP% : 애플리케이션에서 할당받은 공간, 다른 애플리케이션 접근불가
  * %SD_CARD% : 모바일 기기의 SD카드 메모리 공간, 다른 애플리케이션 접근가능 

◆ Android NRE 제약

- svg 파일은 지원하지 않습니다. svg 파일 설정 시 설정값을 무시하고 기본 이미지를 표시합니다.


---

### latitude

> Components > Component > GoogleMap > Objects > GoogleMapMarker > Property > latitude

**Description**

GoogleMapMarker 가 표시될 위치의 위도값을 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMapMarker.latitude[= nLatitude]
```

**Setting Syntax**

```javascript
var objMM = new nexacro.GoogleMapMarker();  

objMM.latitude = 37.5;
```
- **`nLatitude`** — 지도에 GoogleMapMarker 가 표시될 위치의 위도값을 숫자로 설정합니다.


---

### longitude

> Components > Component > GoogleMap > Objects > GoogleMapMarker > Property > longitude

**Description**

GoogleMapMarker 가 표시될 위치의 경도값을 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMapMarker.longitude[= nLongitude]
```

**Setting Syntax**

```javascript
var objMM = new nexacro.GoogleMapMarker();  

objMM.longitude = 127.05;
```
- **`nLongitude`** — 지도에 GoogleMapMarker 가 표시될 위치의 경도값을 숫자로 설정합니다.


---

### text

> Components > Component > GoogleMap > Objects > GoogleMapMarker > Property > text

**Description**

GoogleMapMaker 위에 표시될 설명을 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMapMarker.text[= strText]
```

**Setting Syntax**

```javascript
var objMM = new nexacro.GoogleMapMarker();  

objMM.text = "My Home";
```
- **`strText`** — 지도에 추가된 GoogleMapMarker 위에 표시될 설명을 문자열로 설정합니다.

설정값에 개행문자("\n")가 있을 경우 줄바꿈되어 표시됩니다.


---

### visible

> Components > Component > GoogleMap > Objects > GoogleMapMarker > Property > visible

**Description**

GoogleMapMaker 를 지도에 표시할 지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMapMarker.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
var objMM = new nexacro.GoogleMapMarker();  

objMM.visible = false;
```
- **`"true"`** — 지도에 추가된 GoogleMapMarker 를 표시합니다.
- **`"false"`** — 지도에 추가된 GoogleMapMarker 를 표시하지 않습니다.

**Remark**

- visible 속성값을 설정하지 않으면 "true" 로 적용됩니다.


---

## Components > Component > GoogleMap > GoogleMapPolygon

### GoogleMapPolygon

> Components > Component > GoogleMap > Objects > GoogleMapPolygon

**Description**

GoogleMap 컴포넌트에 로드된 지도에 특정영역을 표시를 할 때 사용하는 오브젝트입니다.

**Remark**

- locationdata 에 설정된 좌표값을 순서대로 선으로 연결하여 닫힌 다각형 영역을 만듭니다.

**Property**

| Name | Description |
| --- | --- |
| fillbrushcolor | GoogleMapPolygon 의 내부를 채울 색상을 설정하는 속성입니다. |
| linecolor | GoogleMapPolygon 의 locationdata 속성에 설정된 위치를 연결하는 선의 색상을 설정하는 속성입니다. |
| linewidth | GoogleMapPolygon 의 locationdata 속성에 설정된 위치를 연결하는 선의 너비를 설정하는 속성입니다. |
| locationdata | 지도에 표시할 GoogleMapPolygon 의 좌표를 설정하는 속성입니다. |
| visible | GoogleMapPolygon 을 지도에 표시할 지 여부를 설정하는 속성입니다. |


---

### 속성 (Properties)

### fillbrushcolor

> Components > Component > GoogleMap > Objects > GoogleMapPolygon > Property > fillbrushcolor

**Description**

GoogleMapPolygon 의 내부를 채울 색상을 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMapPolygon.fillbrushcolor[= strColor]
```

**Setting Syntax**

```javascript
strColor ::= <NamedColor> | <NumericColor>
```
```javascript
var objMP = new nexacro.GoogleMapPolygon();  

objMP.fillbrushcolor = "red"; 

objMP.fillbrushcolor = "#999999"; 

objMP.fillbrushcolor = "rgb(255,0,0)";
```
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- fillbrushcolor 속성값을 설정하지 않으면 "black" 으로 적용됩니다.

- GoogleMapPolygon 오브젝트가 다각형일 때 다각형 내부가 지정된 색으로 표시됩니다.


---

### linecolor

> Components > Component > GoogleMap > Objects > GoogleMapPolygon > Property > linecolor

**Description**

GoogleMapPolygon 의 locationdata 속성에 설정된 위치를 연결하는 선의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMapPolygon.linecolor[= strColor]
```

**Setting Syntax**

```javascript
strColor ::= <NamedColor> | <NumericColor>
```
```javascript
var objMP = new nexacro.GoogleMapPolygon();  

objMP.linecolor = "red"; 

objMP.linecolor = "#999999"; 

objMP.linecolor = "rgb(255,0,0)";
```
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- linecolor 속성값을 설정하지 않으면 "black" 으로 적용됩니다.

- GoogleMapPolygon 오브젝트가 다각형일 때 다각형 외부의 선이 지정된 색으로 표시됩니다.


---

### linewidth

> Components > Component > GoogleMap > Objects > GoogleMapPolygon > Property > linewidth

**Description**

GoogleMapPolygon 의 locationdata 속성에 설정된 위치를 연결하는 선의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMapPolygon.linewidth[= nWidth]
```

**Setting Syntax**

```javascript
var objMP = new nexacro.GoogleMapPolygon();  

objMP.linewidth = "1px";
```
- **`nWidth`** — 선의 너비를 pixel 단위의 숫자로 설정합니다.


---

### locationdata

> Components > Component > GoogleMap > Objects > GoogleMapPolygon > Property > locationdata

**Description**

지도에 표시할 GoogleMapPolygon 의 좌표를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMapPolygon.locationdata[= strData]
```

**Setting Syntax**

```javascript
strData ::= <location> [<location>]*

<location> ::= '[' <nlatitude> ',' <nlongitude> ']'
```
```javascript
var objMP = new nexacro.GoogleMapPolygon();  

objMP.locationdata = "[37.51,127.06][37.51,127.07][37.50,127.06]";
```
- **`<location>`** — "[ ]" 로 구분하여 두개 이상의 위도,경도 좌표를 설정합니다.
- **`<nlatitude>`** — GoogleMapPolygon 의 영역을 결정하기 위한 위도좌표를 설정합니다.
- **`<nlongitude>`** — GoogleMapPolygon 의 영역을 결정하기 위한 경도좌표를 설정합니다.

**Remark**

- 설정된 값의 첫좌표에서 다음좌표로 연속하여 선을 연결하고, 마지막좌표에서 첫좌표로 닫힌 형태의 다각형이 표시됩니다.

- locationdata 속성에 위치좌표는 2개 이상 설정할 수 있으며 갯수에 따라 다각형의 형태가 결정됩니다.


---

### visible

> Components > Component > GoogleMap > Objects > GoogleMapPolygon > Property > visible

**Description**

GoogleMapPolygon 을 지도에 표시할 지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMapPolygon.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
var objMP = new nexacro.GoogleMapPolygon();  

objMP.visible = false;
```
- **`"true"`** — 지도에 추가된 GoogleMapPolygon 을 표시합니다.
- **`"false"`** — 지도에 추가된 GoogleMapPolygon 을 표시하지 않습니다.

**Remark**

- visible 속성값을 설정하지 않으면 "true" 로 적용됩니다.


---

## Components > Component > GoogleMap > GoogleMapPolyline

### GoogleMapPolyline

> Components > Component > GoogleMap > Objects > GoogleMapPolyline

**Description**

GoogleMap 컴포넌트에 로드된 지도에 특정라인을 표시를 할 때 사용하는 오브젝트입니다.

**Remark**

- locationdata 에 설정된 좌표값을 순서대로 선으로 연결하여 라인을 만듭니다.

**Property**

| Name | Description |
| --- | --- |
| linecolor | GoogleMapPolyline 의 locationdata 속성에 설정된 위치를 연결하는 선의 색상을 설정하는 속성입니다. |
| linewidth | GoogleMapPolyline 의 locationdata 속성에 설정된 위치를 연결하는 선의 너비를 설정하는 속성입니다. |
| locationdata | 지도에 표시할 GoogleMapPolyline 의 좌표를 설정하는 속성입니다. |
| visible | GoogleMapPolyline 을 지도에 표시할 지 여부를 설정하는 속성입니다. |


---

### 속성 (Properties)

### linecolor

> Components > Component > GoogleMap > Objects > GoogleMapPolyline > Property > linecolor

**Description**

GoogleMapPolyline 의 locationdata 속성에 설정된 위치를 연결하는 선의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMapPolyline.linecolor[= strColor]
```

**Setting Syntax**

```javascript
strColor ::= <NamedColor> | <NumericColor>
```
```javascript
var objMP = new nexacro.GoogleMapPolyline();  

objMP.linecolor = "red"; 

objMP.linecolor = "#999999"; 

objMP.linecolor = "rgb(255,0,0)";
```
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- linecolor 속성값을 설정하지 않으면 "black" 으로 적용됩니다.

- GoogleMapPolyline 오브젝트의 선이 지정된 색으로 표시됩니다.


---

### linewidth

> Components > Component > GoogleMap > Objects > GoogleMapPolyline > Property > linewidth

**Description**

GoogleMapPolyline 의 locationdata 속성에 설정된 위치를 연결하는 선의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMapPolyline.linewidth[= nWidth]
```

**Setting Syntax**

```javascript
var objMP = new nexacro.GoogleMapPolyline();  

objMP.linewidth = "1px";
```
- **`nWidth`** — 선의 너비를 pixel 단위의 숫자로 설정합니다.


---

### locationdata

> Components > Component > GoogleMap > Objects > GoogleMapPolyline > Property > locationdata

**Description**

지도에 표시할 GoogleMapPolyline 의 좌표를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMapPolyline.locationdata[= strData]
```

**Setting Syntax**

```javascript
strData ::= <location> [<location>]*

<location> ::= '[' <nlatitude> ',' <nlongitude> ']'
```
```javascript
var objMP = new nexacro.GoogleMapPolyline();  

objMP.locationdata = "[37.51,127.06][37.51,127.07][37.50,127.06]";
```
- **`<location>`** — "[ ]" 로 구분하여 두개 이상의 위도,경도 좌표를 설정합니다.
- **`<nlatitude>`** — GoogleMapPolyline 의 선을 결정하기 위한 위도좌표를 설정합니다.
- **`<nlongitude>`** — GoogleMapPolyline 의 선을 결정하기 위한 경도좌표를 설정합니다.

**Remark**

- 설정된 값의 첫좌표에서 다음좌표로 연속하여 연결한 선이 표시됩니다.

- locationdata 속성에 위치좌표는 2개 이상 설정할 수 있으며 갯수에 따라 선의 형태가 결정됩니다.


---

### visible

> Components > Component > GoogleMap > Objects > GoogleMapPolyline > Property > visible

**Description**

GoogleMapPolyline 을 지도에 표시할 지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
GoogleMapPolyline.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
var objMP = new nexacro.GoogleMapPolyline();  

objMP.visible = false;
```
- **`"true"`** — 지도에 추가된 GoogleMapPolyline 을 표시합니다.
- **`"false"`** — 지도에 추가된 GoogleMapPolyline 를 표시하지 않습니다.

**Remark**

- visible 속성값을 설정하지 않으면 "true" 로 적용됩니다.


---
