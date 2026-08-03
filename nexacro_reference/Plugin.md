# nexacroN V24 — Plugin

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 72개

---

## Components > Component > Plugin

### Plugin

> Components > Component > Plugin

**Description**

ActiveX 나 Applet 을 사용하기 위해 제공되는 wrapper 컴포넌트입니다.

**Remark**

- 속성에 설정하는 값에 의해 ActiveX 또는 Applet 이 로딩 처리됩니다.

- 경로를 입력하는 모든 프로퍼티에 대해서 절대경로 및 상대경로를 지원하지 못합니다.
   HTTP Full URL 을 사용해야 합니다.

- Flash 를 로드 할 경우 movie 속성에 TypeDefinition 의 Services 에 정의된 경로 (ex>Base::sample.swf)를 지원하지 않습니다.

**Structure**



**Property**

| Name | Description |
| --- | --- |
| adjustalpha | Windowless로 설정된 플러그인 중에 이미지에 alpha값이 잘못 적용된 경우에 alpha값을 다시 조절하는 속성입니다. |
| archive | Plugin 에 연결된 객체의 archive 속성을 설정하는 속성입니다. |
| bottom | Plugin 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다. |
| classid | Plugin 에 연결할 객체의 classid 또는 progid 를 설정하는 속성입니다. |
| classid64 | Plugin 에 연결할 객체가 64bit 일 때 객체의 classid 또는 progid 를 설정하는 속성입니다. |
| code | Plugin 에 연결할 객체의 code 를 설정하는 속성입니다. |
| codebase | Plugin 에 연결할 객체의 위치를 설정하는 속성입니다. |
| contents | Plugin의 속성을 지정하거나 Plugin의 ActiveX에서 사용할 메타 데이터를 저장하는 속성입니다. |
| enable | Plugin 의 사용가능 여부를 설정하는 속성입니다. |
| flexgrow | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축) 여백을 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다. |
| flexshrink | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 영역이 컨테이너 영역을 초과하지 않도록 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다. |
| height | Plugin 을(를) 표시하기 위한 높이를 설정하는 속성입니다. |
| id | Plugin의 고유 식별자를 설정하는 속성입니다. |
| initvalueid | Plugin 에 적용될 InitValue 의 ID 를 설정하는 속성입니다. |
| layoutorder | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 순서를 설정합니다. |
| left | Plugin 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다. |
| license | Plugin 에 연결된 객체의 라이선스를 설정하는 속성입니다. |
| lpkpath | Plugin 에 연결된 객체의 lpkpath를 설정하는 속성입니다. |
| maxheight | Plugin 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다. |
| maxwidth | Plugin 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다. |
| mimetype | Plugin 에 연결할 객체의 형식을 설정하는 속성입니다. |
| minheight | Plugin 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다. |
| minwidth | Plugin 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다. |
| name | Plugin 의 이름을 설정하는 속성입니다. |
| -nexa-border | Plugin 의 테두리를 설정하는 속성입니다. |
| parent | Plugin 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| pluginpage | Plugin 에 연결할 객체의 위치를 설정하는 속성입니다. |
| pluginsrc | Plugin 에 연결할 객체의 data, src 속성값을 설정하는 속성입니다. |
| popupstyle | Plugin 에 연결할 객체가 window 를 가질 경우 팝업창으로 생성할지 여부를 설정하는 속성입니다. |
| positionstep | 부모 오브젝트가 화면분할기능을 사용할 때 Plugin 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다. |
| right | Plugin 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다. |
| tablecellarea | Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다. |
| taborder | 탭키 입력으로 컴포넌트간 포커스를 이동할 때 Plugin 의 순서를 설정하는 속성입니다. |
| tabstop | 탭키 입력으로 컴포넌트간 포커스를 이동할 때 Plugin 이(가) 포커스를 받을 지 여부를 설정하는 속성입니다. |
| top | Plugin 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다. |
| usepersistdata | persistdata 를 사용할지를 설정하는 속성입니다. |
| visible | Plugin 이(가) 화면에 표시될지 여부를 설정하는 속성입니다. |
| width | Plugin 을(를) 표시하기 위한 너비를 설정하는 속성입니다. |
| windowed | Plugin 에 연결할 객체가 window 를 가지고 있는지 여부를 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| callMethod | Plugin 에 연결된 객체의 메소드를 호출하는 메소드입니다. |
| getOffsetBottom | 부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetHeight | Plugin 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetLeft | 부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetRight | 부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetTop | 부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetWidth | Plugin 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getPixelBottom | Plugin 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelHeight | Plugin 의 height 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelLeft | Plugin 의 left 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelRight | Plugin 의 right 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelTop | Plugin 의 top 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getPixelWidth | Plugin 의 width 속성값을 픽셀단위로 반환하는 메소드입니다. |
| getProperty | Plugin 에 연결된 객체에 정의된 속성의 값을 반환하는 메소드입니다. |
| init | 스크립트로 Plugin 을(를) 동적 생성한 후에 초기화하는 메소드입니다. |
| install | Plugin 에 연결할 객체를 설치하는 메소드입니다. |
| isInstalled | Plugin 에 연결된 객체가 시스템에 설치되어 있는지를 확인하는 메소드입니다. |
| isLoaded | Plugin 에 객체가 정상적으로 생성 및 로드했는지 확인하는 메소드입니다. |
| move | Plugin 의 위치와 크기를 변경하는 메소드입니다. |
| moveToNext | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Plugin 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| moveToPrev | 부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Plugin 이(가) 화면에 한단계 앞에 표시되게 합니다. |
| sendToBack | 부모가 동일한 컴포넌트 중 Plugin 이(가) 화면의 제일 뒤에 표시되게 합니다. |
| sendToNext | 부모가 동일한 컴포넌트 중 Plugin 이(가) 화면에 한단계 뒤에 표시되게 합니다. |
| setFocus | Plugin 에 포커스를 설정하는 메서드입니다. |
| setOffsetBottom | 부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 bottom 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetHeight | Plugin 의 높이를 픽셀단위로 설정하는 메소드입니다. |
| setOffsetLeft | 부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 left 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetRight | 부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 right 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetTop | 부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 top 값을 픽셀단위로 설정하는 메소드입니다. |
| setOffsetWidth | Plugin 의 너비를 픽셀단위로 설정하는 메소드입니다. |
| setProperty | Plugin 에 연결된 객체에 정의된 속성의 값을 설정하는 메소드입니다. |
| show | 스크립트로 동적 생성한 Plugin 을(를) 화면에 표시하는 메소드입니다. |

**Status**

컴포넌트가 비활성화된 상태


---

### 속성 (Properties)

### -nexa-border

> Components > Component > Plugin > Property > -nexa-border

**Description**

Plugin 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.border[= strborder]
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
this.Plugin00.border = "1px solid #999999";
this.Plugin00.border = "1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999";
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

### adjustalpha

> Components > Component > Plugin > Property > adjustalpha

**Description**

Windowless로 설정된 플러그인 중에 이미지에 alpha값이 잘못 적용된 경우에 alpha값을 다시 조절하는 속성입니다.

**Syntax**

```javascript
Plugin.adjustalpha[= bAdjustalpha]
```

**Setting Syntax**

- **`bAbjustalpha`** — "true" 설정 시 alpha 값을 다시 조절합니다.
"false" 설정 시 alpha 값을 무시합니다.

**Remark**

- adjustalpha 속성값을 설정하지 않으면 "false" 로 적용됩니다.

- 화면에 표시하는 시점에 매번 alpha 값을 조절하면 속도가 느려지는 문제가 있습니다.
  플러그인 이미지가 잘못 적용된 경우에만 사용합니다.

- 플래시, 미디어플레이어를 windowless로 사용할 때 adjustalpha 속성값을 "true" 로 설정하면 검정색으로 나오는 영역이 정상적으로 표현됩니다.


---

### archive

> Components > Component > Plugin > Property > archive

**Description**

Plugin 에 연결된 객체의 archive 속성을 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.archive[= strArchive]
```

**Setting Syntax**

- **`strArchive`** — 플러그인 archive 속성값을 설정합니다.


---

### bottom

> Components > Component > Plugin > Property > bottom

**Description**

Plugin 을(를) 표시하기 위한 하단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.bottom[= nBottom]
```

**Setting Syntax**

```javascript
nBottom ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Plugin00.bottom = 10; 
this.Plugin00.bottom = "10px"; 
this.Plugin00.bottom = "10%"; 
this.Plugin00.bottom = "Button00:10px"; 
this.Plugin00.bottom = "Button00:10%";
```
- **`<strCompID>`** — Plugin 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Plugin 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Plugin 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — Plugin 의 하단 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 bottom 속성값을 기준으로 Plugin의 하단 위치 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 Plugin의 하단 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Plugin의 하단 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 Plugin의 하단 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 top 속성값을 기준으로 Plugin의 하단 위치 결정
- "%": <strCompID>의 height 속성값을 기준으로 Plugin의 하단 위치 결정
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

### classid

> Components > Component > Plugin > Property > classid

**Description**

Plugin 에 연결할 객체의 classid 또는 progid 를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.classid[= strClassid]
```

**Setting Syntax**

- **`strClassid`** — Plugin 에 연결할 객체의 classid 또는 progid 를 문자열로 설정합니다.

**Remark**

- Plugin 에 연결할 객체가 64bit 인 경우는 classid64 속성을 사용하여야 합니다.

◆ Windows NRE 제약

- 보안취약점을 가진 객체를 classid 속성값으로 설정한 경우 플러그인 생성 시점에 확인 대화 상자를 표시해 안전하지 않은 객체임을 사용자에게 알리고 허용 여부를 확인합니다. 이때 허용을 하지 않으면 플러그인 객체 생성을 하지 않습니다.


---

### classid64

> Components > Component > Plugin > Property > classid64

**Description**

Plugin 에 연결할 객체가 64bit 일 때 객체의 classid 또는 progid 를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.classid64[= strClassid64]
```

**Setting Syntax**

- **`strClassid64`** — Plugin 에 연결할 64bit 객체의 classid 또는 progid 를 문자열로 설정합니다.

**Remark**

- Windows NRE 환경에서만 사용할 수 있는 속성입니다.

- Windows OS 가 64bit 인 경우에만 적용되는 속성이며, Windows OS 가 32bit 일 때는 적용되지 않습니다. 

- Windows OS 가 64bit 인 경우 classid 속성값이 설정되어 있어도 classid64 속성값이 우선 적용됩니다.


---

### code

> Components > Component > Plugin > Property > code

**Description**

Plugin 에 연결할 객체의 code 를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.code[= strCode]
```

**Setting Syntax**

- **`strCode`** — Plugin 에 연결할 객체의 code 를 문자열로 설정합니다.


---

### codebase

> Components > Component > Plugin > Property > codebase

**Description**

Plugin 에 연결할 객체의 위치를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.codebase[= strUrl]
```

**Setting Syntax**

```javascript
this.Plugin00.codebase = "http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=11,7,700,169"; 
this.Plugin00.install();
```
- **`strUrl`** — Plugin 에 연결할 객체의 위치 경로를 문자열로 설정합니다.

**Remark**

- Windows NRE 환경에서 ActiveX 기반의 플러그인을 사용할 때 설정해야 하는 속성입니다.

- codebase 속성값을 동적으로 설정 시 install() 메소드를 반드시 호출하여야 합니다.


◆ Desktop WRE 제약

- Form 로드 시점에도 설치팝업이 표시되지 않습니다.


---

### contents

> Components > Component > Plugin > Property > contents

**Description**

Plugin의 속성을 지정하거나 Plugin의 ActiveX에서 사용할 메타 데이터를 저장하는 속성입니다.

**Syntax**

```javascript
Plugin.contents[= strContents]
```

**Setting Syntax**

- **`strContents`** — 속성 또는 메타 데이터를 문자열로 설정합니다.

**Remark**

- Plugin에서 사용할 메타 데이터 및 Plugin 속성을 지정할 때 사용합니다.

- Plugin에서 사용할 속성을 사용자가 직접 param tag로 저장합니다. 
  그리고 Plugin으로 생성된 ActiveX 모듈에서 정보로 사용되는 메타 데이터입니다.
  사용자가 수정 가능한 것은 아니며, ActiveX 모듈을 개발한 개발사나 개발자의 정의에 의해 구현됩니다.
  즉, 사용자가 넥사크로 스튜디오에서 ActiveX의 속성을 설정하면 설정된 정보를 contents 속성에 메타 데이터 형태로 저장됩니다.

- usepersistdata 속성이 true로 설정되면 다음과 같은 형식으로 persistdata가 저장됩니다.
  
<contents>
    <_persistdata>real persistdata</_persistdata>
	<param name="..." value="..."/>
	<param name="..." value="..."/>
</contents>


---

### enable

> Components > Component > Plugin > Property > enable

**Description**

Plugin 의 사용가능 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.enable[= benable]
```

**Setting Syntax**

```javascript
benable ::= 'true' | 'false'
```
```javascript
this.Plugin00.enable = true; 
this.Plugin00.enable = false;
```
- **`true`** — Plugin 을(를) 사용할 수 있게 설정합니다.
- **`false`** — Plugin 을(를) 사용할 수 없게 설정합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "disabled" Status 가 적용됩니다.

**Remark**

- enable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enable 속성값이 false 이면 컴포넌트가 화면에 표시되지만 포커스나 입력을 받을 수 없습니다.

- Div 와 같은 컨테이너 컴포넌트의 enable 속성값을 false 로 설정하면 자식 컴포넌트도 모두 Disable 됩니다.


---

### flexgrow

> Components > Component > Plugin > Property > flexgrow

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축) 여백을 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다.

**Syntax**

```javascript
Plugin.flexgrow[= fVal]
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

> Components > Component > Plugin > Property > flexshrink

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 영역이 컨테이너 영역을 초과하지 않도록 설정한 비율만큼 나누어 컴포넌트의 크기를 재조정하는 속성입니다.

**Syntax**

```javascript
Plugin.flexshrink[= fVal]
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

> Components > Component > Plugin > Property > height

**Description**

Plugin 을(를) 표시하기 위한 높이를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.height[= nHeight]
```

**Setting Syntax**

```javascript
nHeight ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Plugin00.height = 10; 
this.Plugin00.height = "10px"; 
this.Plugin00.height = 10%"; 
this.Plugin00.height = Button00:10%";
```
- **`<strCompID>`** — Plugin 의 높이를 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Plugin 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Plugin 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 높이가 적용됩니다.
- **`<nVal>`** — Plugin 의 높이를 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.


* <strCompID> 값을 생략했을 때 :
- "px": Plugin의 높이 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 Plugin의 높이 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Plugin의 높이 결정
- "rem": MainFrame font-size 속성값을 기준으로 Plugin의 높이 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID> 값은 무시되고 설정값이 Plugin의 높이 결정
- "%": <strCompID>의 height 속성값을 기준으로 Plugin의 높이 결정
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

> Components > Component > Plugin > Property > id

**Description**

Plugin의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.id
```

**Setting Syntax**

- **`id`** — Plugin를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### initvalueid

> Components > Component > Plugin > Property > initvalueid

**Description**

Plugin 에 적용될 InitValue 의 ID 를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.initvalueid[= strValueID]
```

**Setting Syntax**

- **`strValueID`** — InitValueDefinition 영역에 정의된 InitValue 파일에서 Plugin 에 적용할 항목의 ID 를 문자열로 설정합니다.

**Remark**

- Plugin 가 화면에 표시된 후에는 속성값을 설정하거나 변경 할 수 없습니다.
   Plugin 를 동적으로 생성 시 show() 메소드 실행 전에 속성값을 설정하여야 합니다.

- Screen 별로 Environment 의 initvaluefileid 속성을 각각 설정하면 Screen 에 따라 다른 초기값을 설정할 수 있습니다.

- InitValueDefinition 영역에 한 개 이상의 InitValue 파일을 정의할 수 있고,
   InitValue 파일에는 컴포넌트별로 여러개의 초기값 정의를 할 수 있습니다.


---

### layoutorder

> Components > Component > Plugin > Property > layoutorder

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)에 컴포넌트가 배치되는 순서를 설정합니다.

**Syntax**

```javascript
Plugin.layoutorder[= nVal]
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

> Components > Component > Plugin > Property > left

**Description**

Plugin 을(를) 표시하기 위한 좌측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.left[= nLeft]
```

**Setting Syntax**

```javascript
nLeft ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Plugin00.left = 10; 
this.Plugin00.left = "10px"; 
this.Plugin00.left = "10%"; 
this.Plugin00.left = "Button00:10px"; 
this.Plugin00.left = "Button00:10%";
```
- **`<strCompID>`** — Plugin 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Plugin 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Plugin 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — Plugin 의 좌측 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 left 속성값을 기준으로 Plugin의 좌측 위치 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 Plugin의 좌측 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Plugin의 좌측 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 Plugin의 좌측 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 right 속성값을 기준으로 Plugin의 좌측 위치 결정
- "%": <strCompID>의 width 속성값을 기준으로 Plugin의 좌측 위치 결정
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

### license

> Components > Component > Plugin > Property > license

**Description**

Plugin 에 연결된 객체의 라이선스를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.license[= strLicense]
```

**Setting Syntax**

- **`strLicense`** — 객체의 라이선스를 설정합니다.


---

### lpkpath

> Components > Component > Plugin > Property > lpkpath

**Description**

Plugin 에 연결된 객체의 lpkpath를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.lpkpath[= strlpkPath]
```

**Setting Syntax**

- **`strlpkPath`** — 객체의 lpkpath 속성값을 설정합니다.


---

### maxheight

> Components > Component > Plugin > Property > maxheight

**Description**

Plugin 이(가) 화면에 표시되는 최대 높이를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.maxheight[= nMaxHeight]
```

**Setting Syntax**

```javascript
nMaxHeight ::= <nVal> ['px']
```
```javascript
this.Plugin00.maxheight = 20; 
this.Plugin00.maxheight = "20px";
```
- **`<nVal>`** — Plugin 이(가) 화면에 표시되는 높이의 최대값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- height 속성값이 maxheight 보다 크면 화면에 표시되는 Plugin 의 높이는 maxheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- maxheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxheight 속성값을 minheight 속성값보다 작게 설정하면 minheight 속성값이 maxheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 Plugin 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.


---

### maxwidth

> Components > Component > Plugin > Property > maxwidth

**Description**

Plugin 이(가) 화면에 표시되는 최대 너비를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.maxwidth[= nMaxWidth]
```

**Setting Syntax**

```javascript
nMaxWidth ::= <nVal> ['px']
```
```javascript
this.Plugin00.maxwidth = 20; 
this.Plugin00.maxwidth = "20px";
```
- **`<nVal>`** — Plugin 이(가) 화면에 표시되는 너비의 최대값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- width 속성값이 maxwidth 보다 크면 화면에 표시되는 Plugin 의 너비는 maxwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- maxwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- maxwidth 속성값을 minwidth 속성값보다 작게 설정하면 minwidth 속성값이 maxwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 Plugin 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   maxwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.


---

### mimetype

> Components > Component > Plugin > Property > mimetype

**Description**

Plugin 에 연결할 객체의 형식을 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.mimetype[= strMIMEType]
```

**Setting Syntax**

- **`strMIMEType`** — 객체의 type 속성을 설정합니다.


---

### minheight

> Components > Component > Plugin > Property > minheight

**Description**

Plugin 이(가) 화면에 표시되는 최소 높이를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.minheight[= nMinHeight]
```

**Setting Syntax**

```javascript
nMinHeight ::= <nVal> ['px']
```
```javascript
this.Plugin00.minheight = 20; 
this.Plugin00.minheight = "20px";
```
- **`<nVal>`** — Plugin 이(가) 화면에 표시되는 높이의 최소값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- height 속성값이 minheight 보다 작다면 화면에 표시되는 Plugin 의 높이는 minheight 속성값으로 적용됩니다.
  표시되는 높이만 적용되고 height 속성값은 변경되지 않습니다.

- minheight 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minheight 속성값을 maxheight 속성값보다 크게 설정하면 maxheight 속성값이 minheight 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 Plugin 의 높이가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minheight > height > top(상대값) > bottom(상대값) > top(절대값) > bottom(절대값) 순서로 설정값이 적용됩니다.
   이 때, height, top, bottom 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 높이가 자동 설정될 때도 적용되는 속성입니다.


---

### minwidth

> Components > Component > Plugin > Property > minwidth

**Description**

Plugin 이(가) 화면에 표시되는 최소 너비를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.minwidth[= nMinWidth]
```

**Setting Syntax**

```javascript
nMinWidth ::= <nVal> ['px']
```
```javascript
this.Plugin00.minwidth = 20; 
this.Plugin00.minwidth = "20px";
```
- **`<nVal>`** — Plugin 이(가) 화면에 표시되는 너비의 최소값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- width 속성값이 minwidth 보다 작으면 화면에 표시되는 Plugin 의 너비는 minwidth 속성값으로 적용됩니다.
  표시되는 너비만 적용되고 width 속성값은 변경되지 않습니다.

- minwidth 속성값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.

- minwidth 속성값을 maxwidth 속성값보다 크게 설정하면 maxwidth 속성값이 minwidth 속성값으로 설정됩니다.

- Position 관련 속성(left, top 등)에 기준컴포넌트를 설정하여 Plugin 의 너비가 상대적으로 설정될 경우에도 적용되는 속성입니다.
   minwidth > width > left(상대값) > right(상대값) > left(절대값) > right(절대값) 순서로 설정값이 적용됩니다.
   이 때, width, left, right 값 중 먼저 2개가 설정되면 나머지는 무시됩니다.

- fittocontents 속성이 있는 컴포넌트는 속성값에 의해 너비가 자동 설정될 때도 적용되는 속성입니다.


---

### name

> Components > Component > Plugin > Property > name

**Description**

Plugin 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### parent

> Components > Component > Plugin > Property > parent

**Description**

Plugin 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Plugin.parent
```

**Setting Syntax**

```javascript
var objParent = this.Plugin00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- Plugin 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### pluginpage

> Components > Component > Plugin > Property > pluginpage

**Description**

Plugin 에 연결할 객체의 위치를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.pluginpage[= strPluginPage]
```

**Setting Syntax**

- **`strPluginPage`** — Plugin 에 연결할 객체의 위치 경로를 문자열로 설정합니다.


---

### pluginsrc

> Components > Component > Plugin > Property > pluginsrc

**Description**

Plugin 에 연결할 객체의 data, src 속성값을 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.pluginsrc[= strPluginSrc]
```

**Setting Syntax**

- **`strPluginSrc`** — 객체의 data, src 속성값을 설정합니다.


---

### popupstyle

> Components > Component > Plugin > Property > popupstyle

**Description**

Plugin 에 연결할 객체가 window 를 가질 경우 팝업창으로 생성할지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.popupstyle[= bPopupStyle]
```

**Setting Syntax**

- **`bPopupStyle`** — true 설정 시 window 를 팝업 스타일로 생성합니다.

false 설정 시 window 를 클라이언트 스타일로 생성합니다.

**Remark**

- popupstyle 속성값을 설정하지 않으면 false 로 적용됩니다.


---

### positionstep

> Components > Component > Plugin > Property > positionstep

**Description**

부모 오브젝트가 화면분할기능을 사용할 때 Plugin 이(가) 표시될 화면의 인덱스를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.positionstep[= nStep]
```

**Setting Syntax**

```javascript
this.Plugin00.positionstep = 0; 
this.Plugin00.positionstep = -1;
```
- **`nStep`** — Plugin 이(가) 표시될 분할화면의 인덱스를 설정합니다.
"-1" 로 설정하면 모든 분할화면에 Plugin 이(가) 표시됩니다.

분할화면의 인덱스는 "0" 부터 시작합니다.

**Remark**

- positionstep 에 설정된 인덱스값과 일치하는 분할화면에만 컴포넌트가 표시됩니다.

- 분할화면에 표시되지 않는 컴포넌트의 visible 속성값은 "false"로 변경되지 않습니다.


---

### right

> Components > Component > Plugin > Property > right

**Description**

Plugin 를 표시하기 위한 우측 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.right[= nRight]
```

**Setting Syntax**

```javascript
nRight ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Plugin00.right = 10; 
this.Plugin00.right = "10px"; 
this.Plugin00.right = "10%"; 
this.Plugin00.right = "Button00:10px"; 
this.Plugin00.right = "Button00:10%";
```
- **`<strCompID>`** — Plugin 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Plugin 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Plugin 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — Plugin 의 우측 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 right 속성값을 기준으로 Plugin의 우측 위치 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 Plugin의 우측 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Plugin의 우측 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 Plugin의 우측 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 left 속성값을 기준으로 Plugin의 우측 위치 결정
- "%": <strCompID>의 width 속성값을 기준으로 Plugin의 우측 위치 결정
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

> Components > Component > Plugin > Property > tablecellarea

**Description**

Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트가 배치되는 영역을 설정합니다.

**Syntax**

```javascript
Plugin.tablecellarea[= strArea]
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

> Components > Component > Plugin > Property > taborder

**Description**

탭키 입력으로 컴포넌트간 포커스를 이동할 때 Plugin 의 순서를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.taborder[= nTabOrder]
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

> Components > Component > Plugin > Property > tabstop

**Description**

탭키 입력으로 컴포넌트간 포커스를 이동할 때 Plugin 이(가) 포커스를 받을 지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.tabstop[= bTabStop]
```

**Setting Syntax**

```javascript
bTabStop ::= 'true' | 'false'
```
- **`"true"`** — Plugin 이(가) 탭키 입력에 의한 포커스를 받습니다.
- **`"false"`** — Plugin 이(가) 탭키 입력에 의한 포커스를 받지 않습니다.

**Remark**

- tabstop 속성값이 "false"인 경우 taborder 속성값과 관계없이 포커스가 해당 컴포넌트를 건너뜁니다.

- tabstop 속성값에 관계없이 마우스로 직접 포커스를 주거나, setfocus() 메소드 사용 시 포커스를 갖습니다.

- Div 와 같은 컨테이너 컴포넌트에서 포커스를 받을 수 있는 자식 컴포넌트가 존재하면 해당 컴포넌트가 포커스를 갖습니다.


---

### top

> Components > Component > Plugin > Property > top

**Description**

Plugin 을(를) 표시하기 위한 상단 좌표값을 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.top[= nTop]
```

**Setting Syntax**

```javascript
nTop ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Plugin00.top = 10; 
this.Plugin00.top = "10px"; 
this.Plugin00.top = "10%"; 
this.Plugin00.top = "Button00:10px"; 
this.Plugin00.top = "Button00:10%";
```
- **`<strCompID>`** — Plugin 의 좌표값을 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Plugin 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Plugin 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 좌표값이 적용됩니다.
- **`<nVal>`** — Plugin의 상단 좌표값을 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": 부모(Parent)의 top 속성값을 기준으로 Plugin의 상단 위치 설정
- "%": 부모(Parent)의 height 속성값을 기준으로 Plugin의 상단 위치 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Plugin의 상단 위치 결정
- "rem": MainFrame font-size 속성값을 기준으로 Plugin의 상단 위치 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID>의 bottom 속성값을 기준으로 Plugin의 상단 위치 결정
- "%": <strCompID>의 height 속성값을 기준으로 Plugin의 상단 위치 결정
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

### usepersistdata

> Components > Component > Plugin > Property > usepersistdata

**Description**

persistdata 를 사용할지를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.usepersistdata[= bUsePersistData]
```

**Setting Syntax**

- **`bUserPersistdata`** — "true" 설정 시 persistdata를 사용합니다.
"false" 설정 시 persistdata를 사용하지 않습니다.

**Remark**

- usepersistdata 속성이 "true" 로 설정이 되면 다음과 같은 형식으로 persistdata 가 저장됩니다.
<contents>
    <_persistdata>real persistdata
    </_persistdata>
</contents>


---

### visible

> Components > Component > Plugin > Property > visible

**Description**

Plugin 이(가) 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
this.Plugin00.visible = true; 
this.Plugin00.visible = false;
```
- **`"true"`** — Plugin 을(를) 화면에 표시합니다.
- **`"false"`** — Plugin 을(를) 화면에 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하는 즉시 컴포넌트의 표시 여부가 화면에 반영됩니다.

- visible 속성값이 "false"이면 컴포넌트가 화면에 표시되지 않고, 포커스를 받을 수 없으므로 입력이나 사용이 불가능합니다.

- Div 와 같은 컨테이너 컴포넌트의 visible 속성값을 "false"로 설정하면 자식 컴포넌트도 함께 화면에 표시되지 않습니다.

- visible 속성값이 "false"이어도 컴포넌트는 존재하기 때문에 스크립트로 제어가 가능합니다.

- 넥사크로 스튜디오에서는 visible 속성값을 'false'로 설정해도 디자인화면에서 사라지지 않습니다.


---

### width

> Components > Component > Plugin > Property > width

**Description**

Plugin 을(를) 표시하기 위한 너비를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.width[= nWidth]
```

**Setting Syntax**

```javascript
nWidth ::= [<strCompID> ':'] <nVal> ['px' | '%' | 'em' | 'rem']
```
```javascript
this.Plugin00.width = 10; this.Plugin00.width = "10px"; 
this.Plugin00.width = "10%"; 
this.Plugin00.width = "Button00:10%";
```
- **`<strCompID>`** — Plugin 의 너비를 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정합니다.

기준 컴포넌트는 Plugin 와 부모(Parent)가 동일하여야 합니다.
또한, Form 로딩 시 Plugin 보다 먼저 생성되어야 합니다.

값을 설정하지 않거나 잘못된 값을 설정하면 부모(Parent) 를 기준으로 너비가 적용됩니다.
- **`<nVal>`** — Plugin 의 너비를 절대 길이 단위("px"), 비율 단위("%"), 상대 길이 단위("em", "rem")의 숫자로 설정합니다.

* <strCompID> 값을 생략했을 때 :
- "px": Plugin의 너비 설정
- "%": 부모(Parent)의 width 속성값을 기준으로 Plugin의 너비 결정
- "em": 컴포넌트의 font-size 속성값을 기준으로 Plugin의 너비 결정
- "rem": MainFrame font-size 속성값을 기준으로 Plugin의 너비 결정

* <strCompID> 값을 설정했을 때 :
- "px":  <strCompID> 값은 무시되고 설정값이 Plugin의 너비 결정
- "%": <strCompID>의 width 속성값을 기준으로 Plugin의 너비 결정
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

### windowed

> Components > Component > Plugin > Property > windowed

**Description**

Plugin 에 연결할 객체가 window 를 가지고 있는지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Plugin.windowed[= bWindowed]
```

**Setting Syntax**

- **`bWindowed`** — true 설정 시 window 를 갖는 플러그인으로 설정됩니다.

false 설정 시 window 를 갖지 않는 플러그인으로 설정됩니다.

**Remark**

- windowed 속성값을 설정하지 않으면 false 로 적용됩니다.

- windowed 속성은 Plugin 에 연결된 객체를 화면에 정상적으로 표시하기 위해 객체의 window 유무값을 설정하는 속성입니다.
   따라서 연결된 객체에 맞게 windowed 속성값을 설정하여야 합니다.


---

### 메서드 (Methods)

### callMethod

> Components > Component > Plugin > Method > callMethod

**Description**

Plugin 에 연결된 객체의 메소드를 호출하는 메소드입니다.

**Syntax**

```javascript
Plugin.callMethod( strMethodID, [varArg1, [varArg2...]])
```

**Parameters**

```
호출할 메소드의 이름을 문자열로 설정합니다.
```

**Return**

객체의 메소드에서 리턴값이 있을 경우 해당값을 반환합니다.

객체의 메소드에서 오브젝트를 리턴한 경우 PluginObject 로 Wrapping 되어 반환될 수 있습니다.

**Remark**

- Plugin 에 연결된 객체가 가지고 있는 속성, 메소드, 이벤트 중 같은 이름이 있는 경우 명시적으로 메소드를 호출하기 위해 사용합니다.
- 보안취약점을 가진 객체를 classid 속성값으로 지정하고 callMethod 메소드 실행시 확인 대화 상자를 표시해 안전하지 않은 객체임을 사용자에게 알리고 사용자가 사용에 동의한 경우에만 동작합니다.

- Plugin 에 연결된 메소드에 따라 필요한 인자를 설정합니다.

- 반환된 PluginObject 객체에서 getProperty(), setProperty(), callMethod() 메소드를 사용할 수 있습니다.
   각 메소드로 하위 객체나 속성에 접근하고, 메소드를 실행 할 수 있습니다.

- 사용을 완료한 PluginObject 객체는 명시적으로 destroy 하여야 합니다.
   PluginObject 객체를 destroy 하지 않을 경우 메모리 누수가 발생할 수 있습니다.


---

### getOffsetBottom

> Components > Component > Plugin > Method > getOffsetBottom

**Description**

부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 bottom 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Plugin.getOffsetBottom();
```

**Parameters**

var nBottom = this.Plugin.getOffsetBottom();

**Return**

부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 bottom 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 bottom 값을 동적으로 계산합니다.


---

### getOffsetHeight

> Components > Component > Plugin > Method > getOffsetHeight

**Description**

Plugin 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Plugin.getOffsetHeight();
```

**Parameters**

var nHeight = this.Plugin.getOffsetHeight();

**Return**

Plugin 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 Plugin 의 높이를 동적으로 계산합니다.


---

### getOffsetLeft

> Components > Component > Plugin > Method > getOffsetLeft

**Description**

부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 left 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Plugin.getOffsetLeft();
```

**Parameters**

var nleft = this.Plugin.getOffsetLeft();

**Return**

부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 left 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 left 값을 동적으로 계산합니다.


---

### getOffsetRight

> Components > Component > Plugin > Method > getOffsetRight

**Description**

부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 right 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Plugin.getOffsetRight();
```

**Parameters**

var nRight = this.Plugin.getOffsetRight();

**Return**

부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 right 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 right 값을 동적으로 계산합니다.


---

### getOffsetTop

> Components > Component > Plugin > Method > getOffsetTop

**Description**

부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 top 값을 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Plugin.getOffsetTop();
```

**Parameters**

var nTop = this.Plugin.getOffsetTop();

**Return**

부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 top 값을 픽셀단위의 숫자로 반환합니다.

**Remark**

- 화면에 표시된 부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 top 값을 동적으로 계산합니다.


---

### getOffsetWidth

> Components > Component > Plugin > Method > getOffsetWidth

**Description**

Plugin 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Plugin.getOffsetWidth();
```

**Parameters**

var nWidth = this.Plugin.getOffsetWidth();

**Return**

Plugin 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 Plugin 의 너비를 동적으로 계산합니다.


---

### getPixelBottom

> Components > Component > Plugin > Method > getPixelBottom

**Description**

Plugin 의 bottom 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Plugin.getPixelBottom();
```

**Parameters**

var nbottom = this.Plugin.getPixelBottom();

**Return**

Plugin 의 bottom 속성값을 픽셀단위로 반환합니다.

bottom 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- bottom 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelHeight

> Components > Component > Plugin > Method > getPixelHeight

**Description**

Plugin 의 height 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Plugin.getPixelHeight();
```

**Parameters**

var nheight = this.Plugin.getPixelHeight();

**Return**

Plugin 의 height 속성값을 픽셀단위로 반환합니다.

height 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- height 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelLeft

> Components > Component > Plugin > Method > getPixelLeft

**Description**

Plugin 의 left 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Plugin.getPixelLeft();
```

**Parameters**

var nleft = this.Plugin.getPixelLeft();

**Return**

Plugin 의 left 속성값을 픽셀단위로 반환합니다.

left 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- left 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelRight

> Components > Component > Plugin > Method > getPixelRight

**Description**

Plugin 의 right 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Plugin.getPixelRight();
```

**Parameters**

var nright = this.Plugin.getPixelRight();

**Return**

Plugin 의 right 속성값을 픽셀단위로 반환합니다.

right 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- right 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelTop

> Components > Component > Plugin > Method > getPixelTop

**Description**

Plugin 의 top 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Plugin.getPixelTop();
```

**Parameters**

var ntop = this.Plugin.getPixelTop();

**Return**

Plugin 의 top 속성값을 픽셀단위로 반환합니다.

top 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- top 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getPixelWidth

> Components > Component > Plugin > Method > getPixelWidth

**Description**

Plugin 의 width 속성값을 픽셀단위로 반환하는 메소드입니다.

**Syntax**

```javascript
Plugin.getPixelWidth();
```

**Parameters**

var nwidth = this.Plugin.getPixelWidth();

**Return**

Plugin 의 width 속성값을 픽셀단위로 반환합니다.

width 속성값을 설정하지 않았을 경우 null 을 반환합니다.

**Remark**

- width 속성에 설정한 값의 단위가 퍼센트(%)여도 픽셀(pixel) 단위의 값을 반환합니다.


---

### getProperty

> Components > Component > Plugin > Method > getProperty

**Description**

Plugin 에 연결된 객체에 정의된 속성의 값을 반환하는 메소드입니다.

**Syntax**

```javascript
Plugin.getProperty( strPropID )
```

**Parameters**

```
Plugin 에 연결된 객체에 정의된 속성명을 문자열로 설정합니다.
```

**Return**

객체의 속성이 가지고 있는 값을 반환합니다.

객체의 속성값이 오브젝트인  경우 PluginObject 로 Wrapping 되어 반환될 수 있습니다.

**Remark**

- Plugin 에 연결된 객체가 가지고 있는 속성, 메소드, 이벤트 중 같은 이름이 있는 경우 명시적으로 속성값을 얻어오기 위해 사용합니다.

- 반환된 PluginObject 객체에서 getProperty(), setProperty(), callMethod() 메소드를 사용할 수 있습니다.
   각 메소드로 하위 객체나 속성에 접근하고, 메소드를 실행 할 수 있습니다.

- 사용을 완료한 PluginObject 객체는 명시적으로 destroy 하여야 합니다.
   PluginObject 객체를 destroy 하지 않을 경우 메모리 누수가 발생할 수 있습니다.


---

### init

> Components > Component > Plugin > Method > init

**Description**

스크립트로 Plugin 을(를) 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**

```javascript
Plugin.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

**Parameters**

```
Plugin 의 ID를 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- 인수값에 기준 컴포넌트를 포함하면 Plugin 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 Plugin 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 Plugin 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.

- 스크립트에서 동적으로 컴포넌트를 생성한 후에만 사용할 수 있습니다.
  동적으로 생성한 컴포넌트가 아닌 경우에는 오동작이 발생할수 있습니다.

- show() 메소드로 컴포넌트가 화면에 표시되면 초기화가 끝난 상태입니다.
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다.

- 동적으로 생성한 컴포넌트를 컨테이너 컴포넌트에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildPlugin.destroyPlugin.show


---

### install

> Components > Component > Plugin > Method > install

**Description**

Plugin 에 연결할 객체를 설치하는 메소드입니다.

**Syntax**

```javascript
Plugin.install();
```

**Parameters**

this.Plugin00.classid = "{D27CDB6E-AE6D-11cf-96B8-444553540000}";
this.Plugin00.codebase = "http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab";
var bSucc = Plugin00.install();

**Return**

객체 설치에 성공하면 "true"를 반환합니다.

객체가 이미 설치되어 있거나 설치에 실패하면 "false"를 반환합니다.

**Remark**

- 객체가 ActiveX 이면 codebase 와 classid 속성이 설정되어 있어야 합니다.

- 객체가 플러그인 이면 mimetype 과 pluginpage 속성이 설정되어 있어야 합니다.


---

### isInstalled

> Components > Component > Plugin > Method > isInstalled

**Description**

Plugin 에 연결된 객체가 시스템에 설치되어 있는지를 확인하는 메소드입니다.

**Syntax**

```javascript
plugin.isInstalled();
```

**Parameters**

var bRet = this.Plugin00.isInstalled();

**Return**

객체가 시스템에 설치되어 있으면 "true"를 반환합니다.

객체가 시스템에 설치되어 있지 않으면 "false"를 반환합니다.

**Remark**

- 객체가 ActiveX 이면 codebase 와 classid 속성이 설정되어 있어야 합니다.

- 객체가 플러그인 이면 mimetype 과 pluginpage 속성이 설정되어 있어야 합니다.


---

### isLoaded

> Components > Component > Plugin > Method > isLoaded

**Description**

Plugin 에 객체가 정상적으로 생성 및 로드했는지 확인하는 메소드입니다.

**Syntax**

```javascript
Plugin.isLoaded();
```

**Parameters**

var bRet = this.Plugin00.isLoaded();

**Return**

객체가 Plugin 컴포넌트에 정상적으로 로드 되었으면 "true"를 반환합니다.

객체가 Plugin 컴포넌트에 정상적으로 로드 되지 않았으면 "false"를 반환합니다.


---

### move

> Components > Component > Plugin > Method > move

**Description**

Plugin 의 위치와 크기를 변경하는 메소드입니다.

**Syntax**

```javascript
Plugin.move( vLeft, vTop [, vWidth, vHeight [, vRight, vBottom]] )
```

**Parameters**

```
Plugin 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.

* 값에 기준 컴포넌트를 포함하여 설정했을 때 :
pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 Plugin 의 left 가 결정됩니다.
비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Plugin 의 left 가 결정됩니다.
```

**Return**

없음

**Remark**

- 인수값에 기준 컴포넌트를 포함하면 Plugin 의 위치는 기준 컴포넌트를 기준으로 상대적으로 결정됩니다.
  vLeft, vTop, vWidth, vHeight, vRight, vBottom 값에 기준 컴포넌트를 포함할 때는 "ID:Value" 형태로 설정하여야 합니다.

- 기준 컴포넌트는 Plugin 와(과) 부모(Parent)가 동일하여야 하며, Form 로딩 시 Plugin 보다 먼저 생성되어야 합니다.
  기준 컴포넌트를 설정하지 않거나 잘못된 값을 설정하면 부모(Parent)를 기준으로 좌표값이 적용됩니다.

- 인수값에 기준 컴포넌트 또는 단위를 포함할 경우 문자열로 설정하여야 합니다.


---

### moveToNext

> Components > Component > Plugin > Method > moveToNext

**Description**

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Plugin 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**

```javascript
Plugin.moveToNext( objComp )
Plugin.moveToNext( strComp )
```

**Parameters**

```
기준이 되는 컴포넌트를 오브젝트로 설정합니다.
```

**Return**

없음

**Remark**

- 인수로 전달되는 기준 컴포넌트와 Plugin 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToNext() 메소드는 기준 컴포넌트보다 Plugin 이(가) 한단계 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 뒤에 표시되게 됩니다.


---

### moveToPrev

> Components > Component > Plugin > Method > moveToPrev

**Description**

부모가 동일한 컴포넌트 중 인수로 전달된 컴포넌트보다 Plugin 이(가) 화면에 한단계 앞에 표시되게 합니다.

**Syntax**

```javascript
Plugin.moveToPrev( objComp )
Plugin.moveToPrev( strComp )
```

**Parameters**

```
기준이 되는 컴포넌트를 오브젝트로 설정합니다.
```

**Return**

없음

**Remark**

- 인수로 전달되는 기준 컴포넌트와 Plugin 은(는) 부모가 동일하여야 합니다.

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- moveToPrev() 메소드는 기준 컴포넌트보다 Plugin 이(가) 한단계 나중에 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 기준 컴포넌트보다 한단계 앞에 표시되게 됩니다.


---

### sendToBack

> Components > Component > Plugin > Method > sendToBack

**Description**

부모가 동일한 컴포넌트 중 Plugin 이(가) 화면의 제일 뒤에 표시되게 합니다.

**Syntax**

```javascript
Plugin.sendToBack()
```

**Parameters**

this.Plugin.sendToBack();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToBack() 메소드는 Plugin 을(를) 가장 먼저 표시되게 순서를 바꿉니다.
  따라서 화면에 표시될때는 제일 뒤에 표시되게 됩니다


---

### sendToNext

> Components > Component > Plugin > Method > sendToNext

**Description**

부모가 동일한 컴포넌트 중 Plugin 이(가) 화면에 한단계 뒤에 표시되게 합니다.

**Syntax**

```javascript
Plugin.sendToNext()
```

**Parameters**

this.Plugin.sendToNext();

**Return**

없음

**Remark**

- 디자인 시 소스에 컴포넌트가 선언된 순서대로 화면에 표시됩니다.
  소스에서 위에 선언된 컴포넌트가 먼저 표시되고, 아래에 선언된 컴포넌트가 나중에 표시되게 됩니다.
  컴포넌트가 겹쳐져 있을 경우 화면에 표시되는 순서에 따라 먼저 표시된 컴포넌트가 나중에 표시되는 컴포넌트에 가려지게 됩니다.

- sendToNext() 메소드는 Plugin 을(를) 한단계 먼저 표시되는 컴포넌트와 순서를 바꿉니다.
  따라서 화면에 표시될때는 원래 순서보다 한단계 뒤에 표시되게 됩니다.


---

### setFocus

> Components > Component > Plugin > Method > setFocus

**Description**

Plugin 에 포커스를 설정하는 메서드입니다.

**Syntax**

```javascript
Plugin.setFocus( [bMoveScroll] )
```

**Parameters**

```
부모 컴포넌트에 스크롤이 있을 경우, Plugin 기준으로 스크롤을 이동할지 여부를 설정합니다.

true: Plugin 이(가) 화면에 표시되도록 스크롤을 이동합니다.
false: Plugin 위치와 관계없이 스크롤을 이동하지 않습니다.

값을 지정하지 않으면 기본값은 true입니다.
```

**Return**

Plugin 이(가) 포커스를 얻기 전에 포커스를 가지고 있던 컴포넌트를 반환합니다.
이전에 포커스를 가진 컴포넌트가 없거나 메소드 실행에 실패한 경우에는 null을 반환합니다.

**Remark**

- enableaccessibility 속성값과 관계없이 전달된 파라미터값을 기준으로 동작합니다.


---

### setOffsetBottom

> Components > Component > Plugin > Method > setOffsetBottom

**Description**

부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 bottom 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Plugin.setOffsetBottom( nBottom );
```

**Parameters**

```
부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 bottom 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 Plugin 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Plugin 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Plugin 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Plugin 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.


---

### setOffsetHeight

> Components > Component > Plugin > Method > setOffsetHeight

**Description**

Plugin 의 높이를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Plugin.setOffsetHeight( nHeight );
```

**Parameters**

```
Plugin 의 높이를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 Plugin 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Plugin 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Plugin 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Plugin 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 height, bottom 속성이 설정됩니다.


---

### setOffsetLeft

> Components > Component > Plugin > Method > setOffsetLeft

**Description**

부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 left 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Plugin.setOffsetLeft( nLeft );
```

**Parameters**

```
부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 left 값을 픽셀단위의 숫자로 설정합니다
```

**Return**

없음

**Remark**

- 메소드 실행 전 Plugin 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Plugin 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Plugin 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, right 속성이 설정됩니다.
   > Plugin 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.


---

### setOffsetRight

> Components > Component > Plugin > Method > setOffsetRight

**Description**

부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 right 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Plugin.setOffsetRight( nRight );
```

**Parameters**

```
부모 컴포넌트의 Left 위치를 기준으로 Plugin 의 right 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 Plugin 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Plugin 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Plugin 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Plugin 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.


---

### setOffsetTop

> Components > Component > Plugin > Method > setOffsetTop

**Description**

부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 top 값을 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Plugin.setOffsetTop( nTop );
```

**Parameters**

```
부모 컴포넌트의 Top 위치를 기준으로 Plugin 의 top 값을 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 Plugin 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Plugin 에 top, height 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.
   > Plugin 에 top, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, bottom 속성이 설정됩니다.
   > Plugin 에 height, bottom 속성이 설정되어 있었다면 메소드 실행 후 top, height 속성이 설정됩니다.


---

### setOffsetWidth

> Components > Component > Plugin > Method > setOffsetWidth

**Description**

Plugin 의 너비를 픽셀단위로 설정하는 메소드입니다.

**Syntax**

```javascript
Plugin.setOffsetWidth( nWidth );
```

**Parameters**

```
Plugin 의 너비를 픽셀단위의 숫자로 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 실행 전 Plugin 에 설정된 초기 속성에 따라 메소드 실행 후 설정되는 속성이 달라집니다.
   > Plugin 에 left, width 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Plugin 에 left, right 속성이 설정되어 있었다면 메소드 실행 후 left, width 속성이 설정됩니다.
   > Plugin 에 width, right 속성이 설정되어 있었다면 메소드 실행 후 width, right 속성이 설정됩니다.


---

### setProperty

> Components > Component > Plugin > Method > setProperty

**Description**

Plugin 에 연결된 객체에 정의된 속성의 값을 설정하는 메소드입니다.

**Syntax**

```javascript
Plugin.setProeprty( strPropID, varVal )
```

**Parameters**

```
Plugin 에 연결된 객체에 정의된 속성명을 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- Plugin 에 연결된 객체가 가지고 있는 속성, 메소드, 이벤트 명 중 같은 이름을 가진 경우 명시적으로 속성값을 설정하기 위해 사용합니다.


---

### show

> Components > Component > Plugin > Method > show

**Description**

스크립트로 동적 생성한 Plugin 을(를) 화면에 표시하는 메소드입니다.

**Syntax**

```javascript
Plugin.show()
```

**Parameters**

this.Plugin00.show();

**Return**

없음

**Remark**

- show() 메소드는 컴포넌트가 폼 또는 컨테이너 컴포넌트의 자식 컴포넌트로 등록된 상태에서 사용이 가능합니다.
  자식 컴포넌트로 등록된 상태가 아닌 경우에는 오동작이 발생할 수 있습니다.

- 컴포넌트를 컨테이너에 추가하기 위해서는 addChild() 메소드나 insertChild() 메소드를 사용하여야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildPlugin.destroyPlugin.init


---
