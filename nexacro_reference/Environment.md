# nexacroN V24 — Environment 레퍼런스 메뉴얼

> 출처: `nexacro_manual.chm` 자동 추출
> Environment 관련 항목 92개

---

## 목차

- [개요 (Overview)](#개요-Overview) (1개)
- [속성 (Properties)](#속성-Properties) (64개)
- [메서드 (Methods)](#메서드-Methods) (5개)
- [이벤트 (Events)](#이벤트-Events) (7개)
- [EnvironmentUserHotkeyEventInfo](#EnvironmentUserHotkeyEventInfo) (10개)
- [NexacroAPI 관련 메서드](#NexacroAPI-관련-메서드) (4개)
- [부록: Environment 상수](#부록:-Environment-상수) (1개)

---

## 개요 (Overview)

### Environment

> Environment

**Description**

Environment 오브젝트에 프로젝트에서 사용될 환경정보를 저장하고 관리합니다.

**Remark**

- 스크립트에서 nexacro.getEnvironment() 메소드를 사용하여 오브젝트에 접근할 수 있습니다.
- WRE 실행 시 스크립트로 Environment 오브젝트의 속성값(usewaitcursor, locale 등)을 변경한 경우 open 메소드 등을 실행해 띄운 팝업창에는 변경한 Environment 오브젝트의 속성값이 반영되지 않습니다.

- 프로젝트에서 사용될 Cookies 와 Variables 를 관리합니다.

- 멀티스크린 환경에서 공통으로 사용될 변수를 관리합니다.

**Property**

Name
Description
accessibilitybackwardkey
접근성이 활성화 되었을 때 History 에 저장된 순서의 반대로 재탐색하는 단축키를 설정하는 속성입니다.
accessibilitycontentsearchkey
선택상자 이동 시 Accessibility Key Action 지원 여부를 설정합니다.
accessibilitydescreadtype
접근성 기능이 활성화됐을 때 사용할 컴포넌트의 접근성 속성을 설정하는 속성입니다.
accessibilityfirstovermessage
접근성이 활성화 되었을 때 Form 의 첫번째 컴포넌트에 포커스가 이동되면 접근성으로 실행될 문자열을 설정하는 속성입니다.
accessibilityforwardkey
접근성이 활성화 되었을 때 History 에 저장된 순서대로 재탐색하는 단축키를 설정하는 속성입니다.
accessibilityheadingnexthotkey
접근성이 활성화 되었을 때 role 정보가 "heading"으로 설정된 컴포넌트를 탭오더 순서로 이동하는 단축키를 설정하는 속성입니다.
accessibilityheadingprevhotkey
접근성이 활성화 되었을 때 role 정보가 "heading"으로 설정된 컴포넌트를 탭오더 반대순서로 이동하는 단축키를 설정하는 속성입니다.
accessibilityhistorycount
접근성이 활성화 되었을 때 컴포넌트를 이동한 순서가 History 에 저장되는 갯수를 설정하는 속성입니다.
accessibilitylastovermessage
접근성이 활성화 되었을 때 Form 의 마지막 컴포넌트에 포커스가 이동되면 접근성으로 실행될 문자열을 설정하는 속성입니다.
accessibilityreplayhotkey
접근성이 활성화 되었을 때 직전에 실행된 접근성을 재실행하는 단축키를 설정하는 속성입니다.
accessibilitytype
접근성 기능 실행 시 스크린 리더 또는 실행환경에 따라 적절한 기능을 지원하도록 설정하는 속성입니다.
accessibilitywholereadhotkey
접근성이 활성화 되었을 때 포커스가 있는 Form 의 접근성 전체를 실행하는 단축키를 설정하는 속성입니다.
accessibilitywholereadtype
접근성이 활성화 되었을 때 Form 이 로드되면 접근성 전체를 실행할 지 설정하는 속성입니다.
addcookietovariable
서버와 통신 시 수신된 Cookie 를 자동으로 Cookies 영역에 추가할지 여부를 설정하는 속성입니다.
calendarrestoreonblur
Calendar 컴포넌트의 type 속성값이 "monthonly"로 설정된 경우, 사용자가 년 또는 월 값을 변경한 뒤 일자를 확정하지 않은 상태에서 다른 컴포넌트로 포커스를 이동할 때, 변경된 년/월 값을 유지할지 여부를 설정하는 속성입니다.
checkversion
Cache 를 강제로 갱신하기 위해 프로젝트 제너레이트 시 Query String 에 Version 정보를 포함할지 여부를 설정하는 속성입니다.
datasetloadtype
transaction 메서드 또는 Dataset 오브젝트의 load 메서드 실행 결과로 받은 데이터에 ErrorCode 값이 포함된 경우 Dataset 오브젝트에 데이터를 로드하는 방식을 설정하는 속성입니다.
datasetsaveinfinity
DataSet 에서 타입이 INT, FLOAT, BIGDECIMAL 인 Column 에 저장된 Infinity 값의 처리 방법을 설정하는 속성입니다.
datasetsaveinvaliddate
DataSet 에서 타입이 DATE, TIME, DATETIME 인 Column 에 저장된 잘못된 날자값의 처리 방법을 설정하는 속성입니다.
datasetsavenan
DataSet 에서 타입이 INT, FLOAT, BIGDECIMAL 인 Column 에 저장된 NaN 값의 처리 방법을 설정하는 속성입니다.
datatyperule
어플리케이션에 적용될 Data 처리 규칙을 설정하는 속성입니다.
dnsquery
어플리케이션에서 통신 시 DNS Query 를 사용할지 설정하는 속성입니다.
enableaccessibility
접근성 기능을 사용할지 여부를 설정하는 속성입니다.
enablecache
서버와 통신 시 Cache 사용 여부를 설정하는 속성입니다.
enableclipboard
시스템의 클립보드 사용여부를 설정하는 속성입니다.
enablecookie
서버와 통신 시 Cookie 사용 여부를 설정하는 속성입니다.
enableinspector
앱 실행 시 원격 디버깅 허용 여부를 설정하는 속성입니다.
enablescreencapture
OS 에서 제공하는 스크린캡쳐 기능 사용 여부를 설정하는 속성입니다.
enabletouchevent
터치 관련 이벤트의 발생여부를 설정하는 속성입니다.
enabletouchsoftkeyboard
터치 동작으로 컴포넌트가 포커스를 가질 때 키패드 표시 여부를 설정하는 속성입니다.
filesecurelevel
로컬 파일에 접근할 권한을 설정하는 속성입니다.
highcontrastthemeid
OS 에 고대비 기능이 적용되어 있을 때 어플리케이션에 적용될 테마를 설정하는 읽기전용 속성입니다.
httpretry
HTTP/HTTPS 통신 시 에러가 발생하면 재시도 할 횟수를 설정하는 속성입니다.
httptimeout
HTTP/HTTPS 통신 시 서버의 응답을 기다리는 시간을 설정하는 속성입니다.
icon
작업표시줄 또는 Favicon 으로 표시될 아이콘을 리소스 영역의 이미지로 설정하는 속성입니다.
initvaluefileid
InitValue 를 적용하기 위해 InitValueDefinition 영역에 정의된 파일명을 설정하는 속성입니다.
key
어플리케이션 실행 시 설정된 Key 값을 갖는 읽기전용 속성입니다.
loadingimage
데이터 로딩 시 화면에 표시될 이미지를 설정하는 속성입니다.
locale
국가 및 언어(locale)를 설정하는 속성입니다.
loglevel
애플리케이션에서 로그 파일에 출력할 정보 수준을 설정하는 속성입니다.
multivalueseparator
Multi Value 바인딩된 Dataset 오브젝트에서 구분자로 사용할 값을 설정하는 속성입니다.
networksecurelevel
TCP 또는 HTTP/HTTPS 로 소켓통신 시 원격서버에 접근을 허용하는 보안 레벨을 설정하는 속성입니다.
rtl
내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다.
scrollbarsize
어플리케이션의 컴포넌트에 표시되는 스크롤바의 크기를 설정하는 속성입니다.
scrollbartype
어플리케이션의 컴포넌트에 스크롤바가 표시되는 형식을 설정하는 속성입니다.
scrollindicatorsize
어플리케이션의 컴포넌트에 표시되는 스크롤 인디케이터바의 크기를 설정하는 속성입니다.
services
TypeDefinition 영역의 Services 정보를 갖는 읽기전용 속성입니다.
ssvrecordseparator
SSV 형식으로 통신 할 때 SSV 데이터의 레코드 구분자를 설정하는 속성입니다.
ssvunitseparator
SSV 형식으로 통신 할 때 SSV 데이터의 컬럼 구분자를 설정하는 속성입니다.
stringresourceserviceurl
외부에서 StringResource 정보를 가져오기 위한 서비스 URL을 설정하는 속성입니다.
tabkeycirculation
탭키 또는 Shift+탭키 입력으로 포커스 이동 시 Form 내에서 마지막 컴포넌트 또는 첫번째 컴포넌트 다음동작 방식을 설정하는 속성입니다.
themeid
어플리케이션에 적용될 테마를 설정하는 속성입니다.
traceduration
로그 파일을 일별로 생성하는 옵션을 설정하는 속성입니다.
tracemode
어플리케이션에서 로그파일에 메시지를 출력하는 방법을 설정하는 속성입니다.
usecontextmenu
어플리케이션 영역에서 오른쪽 마우스 클릭 시 기본팝업메뉴의 표시 여부를 설정하는 속성입니다.
usedateautocalibration
Calendar 컴포넌트의 calendaredit 영역에 직접 날짜값을 입력하는 경우 유효하지 않은 값 입력 시 자동 보정 여부를 설정하는 속성입니다.
usehttpkeepalive
HTTP/HTTPS 통신시 서버와 연결을 유지하기 위한 Keep Alive 기능의 사용여부를 설정하는 속성입니다.
useproxykeepalive
Proxy 통신시 서버와 연결을 유지하기 위한 Keep Alive 기능의 사용여부를 설정하는 속성입니다.
userfontid
어플리케이션에 적용될 UserFont 의 ID 를 설정하는 속성입니다.
userhotkey
애플리케이션에 적용될 전역 단축키를 설정하는 속성입니다.
usesoftkeyboard
usesoftkeyboard 속성을 가지는 컴포넌트가 포커스를 가질 때 키패드 표시 여부를 설정하는 속성입니다.
usestringresource
애플리케이션 로딩 시 제너레이트 된 StringResource 로딩 여부를 설정하는 속성입니다.
usewaitcursor
서버와 통신중 대기상태일때 WaitCursor 를 화면에 표시할 지 설정하는 속성입니다.
version
Environment 의 버전을 설정하는 속성입니다.

**Method**

Name
Description
findAccessibility
파라미터로 전달된 텍스트가 접근성 관련 속성값에 설정된 오브젝트를 특정범위에서 검색하여 반환하는 메소드입니다.
getDeviceAdaptor
DeviceAdaptors 영역에 정의된 디바이스를 반환하는 메소드입니다.
getNetworkStatus
애플리케이션이 실행 중인 환경에서 네트워크 사용 가능 상태를 반환하는 메서드입니다.
playAccessibility
파라미터로 전달된 오브젝트의 접근성을 실행하는 메소드입니다.
userNotify
넥사크로가 다른 어플리케이션에 포함되어 있을 때 상위 어플리케이션으로 정보를 전달하는 메소드입니다.

**Event**

Name
Description
onaccessibilitykey
접근성 기능이 활성화됐을 때 키 입력 시 제일 먼저 발생하는 이벤트입니다.
ondevicepermission
권한 요청 또는 확인 시 발생하는 이벤트입니다.
onerror
Form 또는 Application 오브젝트의 transaction 메서드, DataObject 오브젝트의 load, request 메서드 실행 중 사용자 입력, 통신 실패 시 발생하는 이벤트입니다.
onextendedcommand
DeviceAdaptors 에 정의된 디바이스에서 이벤트가 전달되었을 때 발생하는 이벤트입니다.
onload
넥사크로 엔진이 로드된 후 발생하는 이벤트입니다.
onnetworkstatuschange
애플리케이션이 실행 중인 환경에서 네트워크 사용 가능 여부가 변경됐을 때 발생하는 이벤트입니다.
onuserhotkey
전역 단축키 입력 시 발생하는 이벤트입니다.


---

## 속성 (Properties)

### accessibilitybackwardkey

> Environment > Property > accessibilitybackwardkey

**Description**

접근성이 활성화 되었을 때 History 에 저장된 순서의 반대로 재탐색하는 단축키를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.accessibilitybackwardkey[= strHotKey]
```

**Setting Syntax**

```javascript
var objEnv = nexacro.getEnvironment();

objEnv.accessibilitybackwardkey = "G";
objEnv.accessibilitybackwardkey = "CTRL+ALT+A";
```
- **`strHotKey`** — History 에 저장된 순서의 반대로 재탐색하는 단축키를 설정합니다.

"Control", "Alt", "Shift" 키와 일반키를 "+" 문자로 조합하여 설정합니다.

잘못된 값을 설정하거나 시스템 또는 다른 어플리케이션에서 사용하는 단축키를 설정하면 정상동작하지 않을 수 있습니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- accessibilitybackwardkey 속성의 단축키로 History 의 첫번째 위치까지 접근성을 실행합니다.
   accessibilityforwardkey 속성의 단축키로 History 의 마지막 위치까지 접근성을 실행합니다.
   accessibilityreplayhotkey 속성의 단축키로 History 의 현재위치 접근성을 실행합니다.

- accessibilityforwardkey 속성에 설정된 단축키로 History 에 저장된 순서대로 접근성을 다시 실행하려면
   accessibilitybackwardkey 속성에 설정된 단축키를 먼저 입력하여 History 를 이전 순서로 이동하여야 합니다.

- accessibilitybackwardkey 속성에 설정된 단축키 입력 시 History 의 첫번째 순서까지 접근성이 실행되면 이후는 실행되지 않습니다.

- accessibilityforwardkey, accessibilitybackwardkey 속성에 설정된 단축키 입력 시 History 의 순서와 내용은 변경되지 않습니다.
   또한 단축키 입력으로 History 의 접근성이 실행될 때 포커스도 이동하지 않습니다.


◆ Desktop WRE 제약

- Firefox 는 accessibilitybackwardkey 에 설정된 단축키 입력 시 해당 컴포넌트의 accessibilityrole 속성값이 출력되지 않습니다.


---

### accessibilitycontentsearchkey

> Environment > Property > accessibilitycontentsearchkey

**Description**

선택상자 이동 시 Accessibility Key Action 지원 여부를 설정합니다.

**Syntax**

```javascript
Environment.accessibilitycontentsearchkey [= bAccessibilitycontentsearchkey]
```

**Setting Syntax**

```javascript
bAccessibilitycontentsearchkey ::= true | false
```
- **`true`** — 접근성 설정 시 Accessibility Key Action에 따라 선택상자를 이동합니다.
컴포넌트의 아이템 선택 등 상하방향키로 조작하는 Key Action을 Ctrl+상하방향키로 변경해 적용합니다.
Combo, Spin 등의 컴포넌트 Accessibility Key Action 항목을 참고하세요.
- **`false`** — 선택상자 이동은 스크린 리더에서 제공하는 Key Action에 따라 동작합니다.
스크린 리더를 실행하지 않은 환경에서 상하방향키로 선택상자를 이동할 수 없습니다.

**Remark**

-  accessibilitycontentsearchkey 속성값을 설정하지 않으면 false로 적용됩니다.


---

### accessibilitydescreadtype

> Environment > Property > accessibilitydescreadtype

**Description**

접근성 기능이 활성화됐을 때 사용할 컴포넌트의 접근성 속성을 설정하는 속성입니다.

**Syntax**

```javascript
Environment.accessibilitydescreadtype[= enumReadType]
```

**Setting Syntax**

```javascript
enumReadType ::= <readtype> [',' <readtype> [',' <readtype>]]

<readtype> ::= 'label' | 'action' | 'description'

* 각 타입값을 콤마(",")로 구분하여 중복 설정할 수 있습니다.
```
```javascript
var objEnv = nexacro.getEnvironment();

objEnv.accessibilitydescreadtype = "label";
objEnv.accessibilitydescreadtype = "label,description";
```
- **`label`** — 컴포넌트의 accessibilitylabel 속성에 설정된 값을 스크린 리더의 음성 출력 대상에 포함합니다.
- **`action`** — 컴포넌트의 accessibilityaction 속성에 설정된 값을 스크린 리더의 음성 출력 대상에 포함합니다.
- **`description`** — 컴포넌트의 accessibilitydescription 속성에 설정된 값을 스크린 리더의 음성 출력 대상에 포함합니다.

**Remark**

- accessibilitydescreadtype 속성값을 설정하지 않으면 "label" 로 적용됩니다. 

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다. 

- 속성값에 설정한 순서와 상관없이 설정하지 않는 대상은 제외하고 label -> action -> description 순서로 스크린 리더가 읽어줍니다.


---

### accessibilityfirstovermessage

> Environment > Property > accessibilityfirstovermessage

**Description**

접근성이 활성화 되었을 때 Form 의 첫번째 컴포넌트에 포커스가 이동되면 접근성으로 실행될 문자열을 설정하는 속성입니다.

**Syntax**

```javascript
Environment.accessibilityfirstovermessage[= strText]
```

**Setting Syntax**

```javascript
var objEnv = nexacro.getEnvironment();

objEnv.accessibilityfirstovermessage = "First Component";
```
- **`strText`** — 첫번째 컴포넌트에 포커스가 이동되면 접근성으로 실행될 문자열을 설정합니다.

설정한 문자열 -> 첫번째 컴포넌트의 Label, Action, Description 값 -> Role 값 순서로 접근성이 실행됩니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 접근성 실행 시 첫번째 컴포넌트의 Label, Action, Description 값은 accessibilitydescreadtype 속성값에 따라 실행여부와 순서가 결정됩니다.


◆ tabkeycirculation 속성값이 "form,nocycle"일 때 동작

- 넥사크로 앱에서 첫 번째 컴포넌트에 포커스가 있는 상태에서 Shift+Tab 키를 입력하면, 포커스는 이동하지 않고 accessibilityfirstovermessage 속성에 설정된 값이 접근성 메시지로 실행됩니다.
  단, 넥사크로 앱이 HTML IFRAME 태그 내에서 로딩된 경우, HTML 내 이전 순서의 항목으로 포커스가 이동하며 accessibilityfirstovermessage 속성에 설정된 값은 실행되지 않습니다.


---

### accessibilityforwardkey

> Environment > Property > accessibilityforwardkey

**Description**

접근성이 활성화 되었을 때 History 에 저장된 순서대로 재탐색하는 단축키를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.accessibilityforwardkey[= strHotKey]
```

**Setting Syntax**

```javascript
var objEnv = nexacro.getEnvironment();

objEnv.accessibilityforwardkey = "G";
objEnv.accessibilityforwardkey = "CTRL+ALT+A";
```
- **`strHotKey`** — History 에 저장된 순서대로 재탐색하는 단축키를 설정합니다.

"Control", "Alt", "Shift" 키와 일반키를 "+" 문자로 조합하여 설정합니다.

잘못된 값을 설정하거나 시스템 또는 다른 어플리케이션에서 사용하는 단축키를 설정하면 정상동작하지 않을 수 있습니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- accessibilitybackwardkey 속성의 단축키로 History 의 첫번째 위치까지 접근성을 실행합니다.
   accessibilityforwardkey 속성의 단축키로 History 의 마지막 위치까지 접근성을 실행합니다.
   accessibilityreplayhotkey 속성의 단축키로 History 의 현재위치 접근성을 실행합니다.

- accessibilityforwardkey 속성에 설정된 단축키로 History 에 저장된 순서대로 접근성을 다시 실행하려면
   accessibilitybackwardkey 속성에 설정된 단축키를 먼저 입력하여 History 를 이전 순서로 이동하여야 합니다.

- accessibilityforwardkey 속성에 설정된 단축키 입력 시 History 의 마지막 순서까지 접근성이 실행되면 이후는 실행되지 않습니다.

- accessibilityforwardkey, accessibilitybackwardkey 속성에 설정된 단축키 입력 시 History 의 순서와 내용은 변경되지 않습니다.
  또한 단축키 입력으로 History 의 접근성이 실행될 때 포커스도 이동하지 않습니다.


◆ Desktop WRE 제약

- Firefox 는 accessibilityforwardkey 에 설정된 단축키 입력 시 해당 컴포넌트의 accessibilityrole 속성값이 출력되지 않습니다.


---

### accessibilityheadingnexthotkey

> Environment > Property > accessibilityheadingnexthotkey

**Description**

접근성이 활성화 되었을 때 role 정보가 "heading"으로 설정된 컴포넌트를 탭오더 순서로 이동하는 단축키를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.accessibilityheadingnexthotkey[= strHotKey]
```

**Setting Syntax**

```javascript
var objEnv = nexacro.getEnvironment();

objEnv.accessibilityheadingnexthotey = "G";
objEnv.accessibilityheadingnexthotey = "CTRL+ALT+A";
```
- **`strHotKey`** — role 정보가 "heading"으로 설정된 컴포넌트를 탭오더 순서로 이동하는 단축키를 설정합니다.

"Control", "Alt", "Shift" 키와 일반키를 "+" 문자로 조합하여 설정합니다.

잘못된 값을 설정하거나 시스템 또는 다른 어플리케이션에서 사용하는 단축키를 설정하면 정상동작하지 않을 수 있습니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 단축키를 입력하면 accessibilityenable 속성값이 true 인 컴포넌트 중 accessibilityrole 속성값을 "heading" 또는 "heading1"부터 "heading6" 사이의 값으로 설정한 컴포넌트에 탭오더 순서로 포커스가 이동합니다.

- tabkeycirculation 속성값의 영향을 받지 않고 마지막 컴포넌트에서 멈춥니다.

- accessibilityheadingnexthotkey 속성의 단축키 입력으로 포커스 이동 시 이동순서가 History 에 저장됩니다.

- accessibilityheadingnexthotkey 속성값이 accessibilityfowradkey, accessibilitybackwordkey, accessibilityreplaykey, accessibilitywholereadhotkey 속성값과 중복이 될 경우 accessibilityheadingnexthotkey 속성값은 무시됩니다.


---

### accessibilityheadingprevhotkey

> Environment > Property > accessibilityheadingprevhotkey

**Description**

접근성이 활성화 되었을 때 role 정보가 "heading"으로 설정된 컴포넌트를 탭오더 반대순서로 이동하는 단축키를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.accessibilityheadingprevhotkey[= strHotKey]
```

**Setting Syntax**

```javascript
var objEnv = nexacro.getEnvironment();

objEnv.accessibilityheadingprevhotey = "G";
objEnv.accessibilityheadingprevhotey = "CTRL+ALT+A";
```
- **`strHotKey`** — role 정보가 "heading"으로 설정된 컴포넌트를 탭오더 반대순서로 이동하는 단축키를 설정합니다.

"Control", "Alt", "Shift" 키와 일반키를 "+" 문자로 조합하여 설정합니다.

잘못된 값을 설정하거나 시스템 또는 다른 어플리케이션에서 사용하는 단축키를 설정하면 정상동작하지 않을 수 있습니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 단축키를 입력하면 accessibilityenable 속성값이 true 인 컴포넌트 중 accessibilityrole 속성값을 "heading" 또는 "heading1"부터 "heading6" 사이의 값으로 설정한 컴포넌트에 탭오더 반대순서로 포커스가 이동합니다.

- tabkeycirculation 속성값의 영향을 받지 않고 첫 번째 컴포넌트에서 멈춥니다.

- accessibilityheadingprevhotkey 속성의 단축키 입력으로 포커스 이동 시 이동순서가 History 에 저장됩니다.

- accessibilityheadingprevhotkey 속성값이 accessibilityfowradkey, accessibilitybackwordkey, accessibilityreplaykey, accessibilitywholereadhotkey 속성값과 중복이 될 경우 accessibilityheadingprevhotkey 속성값은 무시됩니다.


---

### accessibilityhistorycount

> Environment > Property > accessibilityhistorycount

**Description**

접근성이 활성화 되었을 때 컴포넌트를 이동한 순서가 History 에 저장되는 갯수를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.accessibilityhistorycount[= nCount]
```

**Setting Syntax**

```javascript
var objEnv = nexacro.getEnvironment();

objEnv.accessibilityhistorycount = 10;
```
- **`nCount`** — 저장될 History 의 갯수를 숫자로 설정합니다.

0 이하값 설정 시 0 으로 적용됩니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- accessibilityhistorycount 속성값을 설정하지 않으면 5 로 적용됩니다.

- 접근성 기능이 활성화 되어 있을 때 컴포넌트를 이동한 순서가 accessibilityhistorycount 속성값만큼 History 에 저장됩니다.
   accessibilitybackwardkey, accessibilityforwardkey 속성에 설정된 단축키 입력 시 History 에 저장된 순서대로 탐색할 수 있습니다.

- accessibilityreplayhotkey 속성에 설정된 단축키는 accessibilityhistorycount 속성과 관계없이 사용할 수 있습니다.


---

### accessibilitylastovermessage

> Environment > Property > accessibilitylastovermessage

**Description**

접근성이 활성화 되었을 때 Form 의 마지막 컴포넌트에 포커스가 이동되면 접근성으로 실행될 문자열을 설정하는 속성입니다.

**Syntax**

```javascript
Environment.accessibilitylastovermessage[= strText]
```

**Setting Syntax**

```javascript
var objEnv = nexacro.getEnvironment();

objEnv.accessibilitylastovermessage = "Last Component";
```
- **`strText`** — 마지막 컴포넌트에 포커스가 이동되면 접근성으로 실행될 문자열을 설정합니다.

마지막 컴포넌트의 Label, Action, Description 값 -> 설정한 문자열 -> 마지막 컴포넌트의 Role 값 순서로 접근성이 실행됩니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 접근성 실행 시 마지막 컴포넌트의 Label, Action, Description 값은 accessibilitydescreadtype 속성값에 따라 실행여부와 순서가 결정됩니다.


◆ tabkeycirculation 속성값이 "form,nocycle"일 때 동작

- 넥사크로 앱에서 마지막 컴포넌트에 포커스가 있는 상태에서 Tab 키를 입력하면, 포커스는 이동하지 않고 accessibilitylastovermessage 속성에 설정된 값이 접근성 메시지로 실행됩니다.
  단, 넥사크로 앱이 HTML IFRAME 태그 내에서 로딩된 경우, HTML 내 다음 순서의 항목으로 포커스가 이동하며 accessibilitylastovermessage 속성에 설정된 값은 실행되지 않습니다.


---

### accessibilityreplayhotkey

> Environment > Property > accessibilityreplayhotkey

**Description**

접근성이 활성화 되었을 때 직전에 실행된 접근성을 재실행하는 단축키를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.accessibilityreplayhotkey[= strHotKey]
```

**Setting Syntax**

```javascript
var objEnv = nexacro.getEnvironment();

objEnv.accessibilityreplayhotkey = "G";
objEnv.accessibilityreplayhotkey = "CTRL+ALT+A";
```
- **`strHotKey`** — 직전에 실행된 접근성을 재실행하는 단축키를 설정합니다.

"Control", "Alt", "Shift" 키와 일반키를 "+" 문자로 조합하여 설정합니다.

잘못된 값을 설정하거나 시스템 또는 다른 어플리케이션에서 사용하는 단축키를 설정하면 정상동작하지 않을 수 있습니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- accessibilityreplayhotkey 속성의 단축키 입력 시 History 의 접근성 실행과 실제 이동에 의한 접근성 실행을 구분하지 않고 마지막에 실행된 접근성이 재실행됩니다.

- accessibilitybackwardkey 속성의 단축키로 History 의 첫번째 위치까지 접근성을 실행합니다.
  accessibilityforwardkey 속성의 단축키로 History 의 마지막 위치까지 접근성을 실행합니다.
  accessibilityreplayhotkey 속성의 단축키로 History 의 현재위치 접근성을 실행합니다.

- accessibilityreplayhotkey 속성에 설정된 단축키 입력 시 History 의 순서와 내용은 변경되지 않습니다.
  또한 단축키 입력으로 History 의 접근성이 실행될 때 포커스도 이동하지 않습니다.


◆ Desktop WRE 제약

- Firefox 는 accessibilityreplayhotkey 에 설정된 단축키 입력 시 해당 컴포넌트의 accessibilityrole 속성값이 출력되지 않습니다.


---

### accessibilitytype

> Environment > Property > accessibilitytype

**Description**

접근성 기능 실행 시 스크린 리더 또는 실행환경에 따라 적절한 기능을 지원하도록 설정하는 속성입니다.

**Syntax**

```javascript
Environment.accessibilitytype[= enumAccessType]
```

**Setting Syntax**

```javascript
enumAccessType ::= 'standard' | 'sensereader' | 'jaws'
```
- **`"standard"`** — 실행환경에 따라 사용할 수 있는 스크린 리더 또는 인터페이스의 기능을 지원합니다.
- Windows NRE: MSAA(Microsoft Active Accessibility)
- Desktop WRE: WAI-ARIA(Web Accessibility Initiative – Accessible Rich Internet Applications)
- Android: TalkBack
- iOS/iPadOS: VoiceOver
- **`"sensereader"`** — 엑스비전 테크놀로지의 스크린 리더 제품인 센스리더에 특화된 기능을 지원합니다.

* Desktop 환경에서만 적용되며 Mobile 환경에서는 "standard"로 동작합니다.
- **`"jaws"`** — Freedom Scientific의 스크린 리더 제품인 JAWS에 특화된 기능을 지원합니다.

* Desktop 환경에서만 적용되며 Mobile 환경에서는 "standard"로 동작합니다.

**Remark**

- accessibilitytype 속성값을 설정하지 않으면 "standard"로 적용됩니다.

- 시각 장애인이 윈도우 운영체제 사용 시에는 특정 스크린 리더 제품을 사용합니다. 센스리더나 JAWS는 윈도우 애플리케이션을 손쉽게 사용할 수 있게 운영체제의 기본 접근성 기능 외에 추가 기능을 지원하거나 기본 동작과 다르게 처리되기도 합니다. 
accessibilitytype 속성값을 "sensereader" 또는 "jaws"로 설정하면 이런 특화된 기능에 맞게 접근성 기능을 실행하도록 지원합니다.


---

### accessibilitywholereadhotkey

> Environment > Property > accessibilitywholereadhotkey

**Description**

접근성이 활성화 되었을 때 포커스가 있는 Form 의 접근성 전체를 실행하는 단축키를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.accessibilitywholereadhotkey[= strHotKey]
```

**Setting Syntax**

```javascript
var objEnv = nexacro.getEnvironment();

objEnv.accessibilitywholereadhotkey = "G";
objEnv.accessibilitywholereadhotkey = "CTRL+ALT+A";
```
- **`strHotKey`** — 포커스가 있는 Form 의 접근성 전체를 실행하는 단축키를 설정합니다.

"Control", "Alt", "Shift" 키와 일반키를 "+" 문자로 조합하여 설정합니다.

잘못된 값을 설정하거나 시스템 또는 다른 어플리케이션에서 사용하는 단축키를 설정하면 정상동작하지 않을 수 있습니다.

**Remark**

- enableaccessibility 속성값이 true 이고 accessibilitywholereadtype 속성값이 "none" 이 아닌 경우만 적용되는 속성입니다.

- Form 에 속한 모든 컴포넌트의 접근성이 실행됩니다.

- 접근성 전체를 실행 중 취소하는 방법은 스크린 리더 프로그램의 취소기능을 따릅니다.

- Form 에 속한 컨테이너 컴포넌트에 링크된 Form 의 접근성도 실행됩니다.


---

### accessibilitywholereadtype

> Environment > Property > accessibilitywholereadtype

**Description**

접근성이 활성화 되었을 때 Form 이 로드되면 접근성 전체를 실행할 지 설정하는 속성입니다.

**Syntax**

```javascript
Environment.accessibilitywholereadtype[= enumReadType]
```

**Setting Syntax**

```javascript
enumReadType ::= 'none' | 'load' | 'change' | 'load,change'
```
```javascript
var objEnv = nexacro.getEnvironment();

objEnv.accessibilitywholereadhotkey = "load";
objEnv.accessibilitywholereadhotkey = "load,change";
```
- **`"none"`** — Form 이 로드되어도 접근성 전체가 자동으로 실행되지 않습니다.

컨테이너 컴포넌트(Div,PopupDiv,TabPage)에 링크로 연결된 Form 이 다른 Form 으로 변경되어도 자동으로 접근성 전체가 실행되지 않습니다.

accessibilitywholereadhotkey 속성에 설정된 단축키를 입력해도 접근성 전체가 실행되지 않습니다.
- **`"load"`** — Form 이 로드될 때 접근성 전체가 자동으로 실행되고 포커스를 갖습니다.

컨테이너 컴포넌트(Div,PopupDiv,TabPage)에 링크로 연결된 Form 이 다른 Form 으로 변경되어도 자동으로 접근성 전체가 실행되지 않습니다.

accessibilitywholereadhotkey 속성에 설정된 단축키를 입력하면 접근성 전체가 실행됩니다.
- **`"change"`** — Form 이 로드되어도 접근성 전체가 자동으로 실행되지 않습니다.

컨테이너 컴포넌트(Div,PopupDiv,TabPage)에 링크로 연결된 Form 이 다른 Form 으로 변경될때 자동으로 접근성 전체가 실행됩니다.

accessibilitywholereadhotkey 속성에 설정된 단축키를 입력하면 접근성 전체가 실행됩니다.
- **`"load,change"`** — Form 이 로드될 때 접근성 전체가 자동으로 실행되고 포커스를 갖습니다.

컨테이너 컴포넌트(Div,PopupDiv,TabPage)에 링크로 연결된 Form 이 다른 Form 으로 변경될때 자동으로 접근성 전체가 실행됩니다.

accessibilitywholereadhotkey 속성에 설정된 단축키를 입력하면 접근성 전체가 실행됩니다.

**Remark**

- accessibilitywholereadtype 속성값을 설정하지 않으면 "none" 으로 적용됩니다.

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 접근성 전체를 실행 중 취소하는 방법은 스크린 리더 프로그램의 취소기능을 따릅니다.



◆ Mobile 제약

- Mobile 환경은 지원하지 않는 속성입니다.


---

### addcookietovariable

> Environment > Property > addcookietovariable

**Description**

서버와 통신 시 수신된 Cookie 를 자동으로 Cookies 영역에 추가할지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.addcookietovariable
```

**Setting Syntax**

```javascript
addcookietovariable ::= 'true' | 'false'
```
- **`true`** — Cookie 를 Environment 의 Cookies 영역에 자동 추가합니다.

추가된 쿠키값은 서버와 통신 시 자동으로 서버에 전송됩니다.
- **`false`** — Cookie 를 Environment 의 Cookies 영역에 자동으로 변수로 추가하지 않습니다.

**Remark**

- addcookietovariable 속성값을 설정하지 않으면 true 로 적용됩니다.

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.


◆ WRE 제약

- Secure 속성이 설정된 상태로 서버에서 받은 Cookie 는 Cookies 영역에 추가되거나 변경되지 않습니다.

- Cross Domain 상황이면 Cookies 영역의 Cookie 가 서버로 전송되거나 서버에서 받은 값으로 변경되지 않습니다.


---

### calendarrestoreonblur

> Environment > Property > calendarrestoreonblur

**Description**

Calendar 컴포넌트의 type 속성값이 "monthonly"로 설정된 경우, 사용자가 년 또는 월 값을 변경한 뒤 일자를 확정하지 않은 상태에서 다른 컴포넌트로 포커스를 이동할 때, 변경된 년/월 값을 유지할지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.calendarrestoreonblur
```

**Setting Syntax**

```javascript
calendarrestoreonblur ::= true | false
```
- **`true`** — 포커스가 다른 컴포넌트로 이동하면 변경한 년/월 값이 초기화되고 Calendar 컴포넌트의 value 속성에 지정된 년/월 달력이 다시 표시됩니다.
value 속성이 설정되어 있지 않으면, 오늘 날짜를 기준으로 한 년/월 달력이 표시됩니다.
- **`false`** — 포커스가 다른 컴포넌트로 이동해도 변경한 년/월 값이 그대로 유지되며, 해당 년/월의 달력이 표시됩니다.
value 속성값은 변경되지 않습니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- calendarrestoreonblur 속성값을 설정하지 않으면 true로 적용됩니다.


---

### checkversion

> Environment > Property > checkversion

**Description**

Cache 를 강제로 갱신하기 위해 프로젝트 제너레이트 시 Query String 에 Version 정보를 포함할지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.checkversion
```

**Setting Syntax**

```javascript
bCheck ::= 'true' | 'false'
```
- **`true`** — 프로젝트 제너레이트 시 Query String 에 Version 정보를 추가하여 생성합니다.

Version 정보는 Environment, Application, Typedefinition > Services 등에 설정할 수 있으며,
Query String 종류에 따라 각기 다른 위치의 Version 정보가 사용되므로 주의하여야 합니다.
- **`false`** — 프로젝트 제너레이트 시 Query String 에 Version 정보를 추가하지 않고 생성합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.
  값을 설정하지 않으면 false로 적용됩니다.

- Screen 별로 checkversion 속성값을 다르게 설정할 수 없습니다.


---

### datasetloadtype

> Environment > Property > datasetloadtype

**Description**

transaction 메서드 또는 Dataset 오브젝트의 load 메서드 실행 결과로 받은 데이터에 ErrorCode 값이 포함된 경우 Dataset 오브젝트에 데이터를 로드하는 방식을 설정하는 속성입니다.

**Syntax**

```javascript
Environment.datasetloadtype[= enumLoadType]
```

**Setting Syntax**

```javascript
enumLoadType ::= 'onsuccess' | 'errorallow'
```
```javascript
var objEnv = nexacro.getEnvironment();
objEnv.datasetloadtype = "errorallow";
```
- **`"onsuccess"`** — ErrorCode값이 음수이면 Output Dataset 오브젝트에 데이터를 로드하지 않습니다.
ErrorCode값이 0 이상이면 Output Dataset 오브젝트에 데이터를 로드합니다.

ErrorCode값이 음수이면 Input Dataset 오브젝트의 상태와 바인딩된 컴포넌트를 갱신하지 않습니다.
ErrorCode값이 0 이상이면 Input Dataset 오브젝트의 상태를 "Normal"로 변경하고 바인딩된 컴포넌트는 갱신됩니다.
- **`"errorallow"`** — ErrorCode 값과 관계없이 Output Dataset 오브젝트에 데이터를 로드합니다.

ErrorCode 값이 음수이면 Input Dataset 오브젝트의 상태와 바인딩된 컴포넌트를 갱신하지 않습니다.
ErrorCode 값이 0 이상이면 Input Dataset 오브젝트의 상태를 "Normal"로 변경하고 바인딩된 컴포넌트는 갱신됩니다.

**Remark**

- datasetloadtype 속성값을 설정하지 않으면 "onsuccess" 로 적용됩니다.

- ErrorCode는 메서드 실행 결과로 받을 데이터에 아래와 같은 형식으로 설정할 수 있습니다.
   ErrorCode 값을 설정하지 않은 경우에는 0으로 처리됩니다.

   <Parameters>
     <Parameter id="ErrorCode" type="int">0</Parameter>
     <Parameter id="ErrorMsg" type="string">SUCC</Parameter>
   </Parameters>

- Transaction 수행 시 Input Dataset 보다 Output Dataset 을 먼저 처리합니다.
   따라서 datasetloadtype 속성값이 "errorallow" 일 때 Input Dataset 과 Output Dataset 을 동일한 Dataset 로 설정하면
   에러코드에 관계없이 Output Dataset 에 데이터가 로드되므로 결과적으로 Input Dataset 의 변경을 막을 수 없습니다.


---

### datasetsaveinfinity

> Environment > Property > datasetsaveinfinity

**Description**

DataSet 에서 타입이 INT, FLOAT, BIGDECIMAL 인 Column 에 저장된 Infinity 값의 처리 방법을 설정하는 속성입니다.

**Syntax**

```javascript
Environment.datasetsaveinfinity[= enumSave]
```

**Setting Syntax**

```javascript
enumSave ::= 'include' | 'exclude'
```
```javascript
var objEnv = nexacro.getEnvironment();

objEnv.datasetsavenan = "exclude";
```
- **`"include"`** — saveXML(), saveBIN(), saveSSV(), saveCSV() 메소드에서 데이터 저장 시 Infinity 값으로 처리합니다.

Transaction 에서 strInDatasets 로 데이터 전송 시 infinity 값으로 처리합니다.

ExcelExportObject 로 Column 값을 Export 시 infinity 값으로 처리합니다.
- **`"exclude"`** — saveXML(), saveBIN(), saveSSV(), saveCSV() 메소드에서 데이터 저장 시 빈문자열("")로 처리합니다.

Transaction 에서 strInDatasets 로 데이터 전송 시 빈문자열("")로 처리합니다.

ExcelExportObject 로 Column 값을 Export 시 빈문자열("")로 처리합니다.

**Remark**

- datasetsaveinfinity 속성값을 설정하지 않으면 "include" 로 적용됩니다.

- DataSet 의 saveinfinity 속성을 설정하지 않으면 Environment 의 datasetsaveinfinity 속성값이 적용됩니다.


---

### datasetsaveinvaliddate

> Environment > Property > datasetsaveinvaliddate

**Description**

DataSet 에서 타입이 DATE, TIME, DATETIME 인 Column 에 저장된 잘못된 날자값의 처리 방법을 설정하는 속성입니다.

**Syntax**

```javascript
Environment.datasetsaveinvaliddate[= enumSave]
```

**Setting Syntax**

```javascript
enumSave ::= 'include' | 'exclude'
```
```javascript
var objEnv = nexacro.getEnvironment();

objEnv.datasetsaveinvaliddate = "include";
```
- **`"include"`** — saveXML(), saveBIN(), saveSSV(), saveCSV() 메소드에서 데이터 저장 시 "Invalid Date" 문자열로 처리합니다.

Transaction 에서 strInDatasets 로 데이터 전송 시 "Invalid Date" 문자열로 처리합니다.

ExcelExportObject 로 Column 값을 Export 시 "Invalid Date" 문자열로 처리합니다.
- **`"exclude"`** — saveXML(), saveBIN(), saveSSV(), saveCSV() 메소드에서 데이터 저장 시 빈문자열("")로 처리합니다.

Transaction 에서 strInDatasets 로 데이터 전송 시 빈문자열("")로 처리합니다.

ExcelExportObject 로 Column 값을 Export 시 빈문자열("")로 처리합니다.

**Remark**

- datasetsaveinvaliddate 속성값을 설정하지 않으면 "exclude" 로 적용됩니다.

- DataSet 의 saveinvaliddate 속성을 설정하지 않으면 Environment 의 datasetsaveinvaliddate 속성값이 적용됩니다.


---

### datasetsavenan

> Environment > Property > datasetsavenan

**Description**

DataSet 에서 타입이 INT, FLOAT, BIGDECIMAL 인 Column 에 저장된 NaN 값의 처리 방법을 설정하는 속성입니다.

**Syntax**

```javascript
Environment.datasetsavenan[= enumSave]
```

**Setting Syntax**

```javascript
enumSave ::= 'include' | 'exclude'
```
```javascript
var objEnv = nexacro.getEnvironment();

objEnv.datasetsavenan = "include";
```
- **`"include"`** — saveXML(), saveBIN(), saveSSV(), saveCSV() 메소드에서 데이터 저장 시 NaN 값으로 처리합니다.

Transaction 에서 strInDatasets 로 데이터 전송 시 NaN 값으로 처리합니다.

ExcelExportObject 로 Column 값을 Export 시 NaN 값으로 처리합니다.
- **`"exclude"`** — saveXML(), saveBIN(), saveSSV(), saveCSV() 메소드에서 데이터 저장 시 빈문자열("")로 처리합니다.

Transaction 에서 strInDatasets 로 데이터 전송 시 빈문자열("")로 처리합니다.

ExcelExportObject 로 Column 값을 Export 시 빈문자열("")로 처리합니다.

**Remark**

- datasetsavenan 속성값을 설정하지 않으면 "exclude" 로 적용됩니다.

- DataSet 의 savenan 속성을 설정하지 않으면 Environment 의 datasetsavenan 속성값이 적용됩니다.


---

### datatyperule

> Environment > Property > datatyperule

**Description**

어플리케이션에 적용될 Data 처리 규칙을 설정하는 속성입니다.

**Syntax**

```javascript
Environment.datatyperule
```

**Setting Syntax**

```javascript
datatyperule ::= '1.0' | '2.0'
```
- **`"1.0"`** — 이전 버전의 넥사크로 제품과 동일한 규칙을 적용합니다.
- **`"2.0"`** — 신규 규칙을 적용합니다.

* Dataset 에 유효하지 않은 값 설정 시 보정하지 않고 "Invalid value" 로 처리합니다.
* Dataset 의 데이터 정렬 시 undefined, NaN, null 값을 최대값으로 처리합니다.
* 컴포넌트의 value 속성이 Dataset 에 바인드 되어도 value 속성의 타입이 Column 타입으로 변경되지 않습니다.
  (InnerDataset 에 바인드 된 경우도 value 속성의 타입이 Column 타입으로 변경되지 않습니다.)

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- datatyperule 속성값을 설정하지 않으면 기존 프로젝트는 "1.0" 이 설정되고,
   신규 프로젝트 생성 시 넥사크로 스튜디오에서 "2.0" 을 자동 설정합니다.


---

### dnsquery

> Environment > Property > dnsquery

**Description**

어플리케이션에서 통신 시 DNS Query 를 사용할지 설정하는 속성입니다.

**Syntax**

```javascript
Environment.dnsquery
```

**Setting Syntax**

```javascript
enumDnsQuery ::= 'none' | 'request'
```
- **`"none"`** — Local 에 Cache 된 DNS 정보를 우선적으로 사용합니다.

일반적으로 OS 에서 제공하는 기준에 맞게 동작합니다.
- **`"request"`** — 항상 DNS 서버로 DNS Query 를 요청합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- dnsquery 값을 설정하지 않으면 "none" 으로 적용됩니다.

- BootStrap 로딩단계에서는 dnsquery 속성값과 관계없이 항상 DNS 서버로 DNS Query 를 요청합니다.


---

### enableaccessibility

> Environment > Property > enableaccessibility

**Description**

접근성 기능을 사용할지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.enableaccessibility
```

**Setting Syntax**

```javascript
bEnableAccess ::= 'true' | 'false'
```
- **`true`** — 접근성 기능을 사용하도록 설정합니다.
실행 시 아래 기능이 활성화됩니다.
- 각 컴포넌트의 접근성 관련 속성값
- Accessibility Key Action

접근성 기능을 사용하려면 넥사크로 스튜디오에서 프로젝트의 TypeDefinition에 접근성 모듈(Accessibility.json)을 등록해주어야 합니다. 프로젝트 생성 시에는 접근성 모듈이 등록되지 않은 상태로 프로젝트가 생성됩니다.
접근성 모듈이 등록되어 있지 않으면 일부 접근성 기능이 동작하지 않을 수 있습니다.
- **`false`** — 접근성 기능을 사용하지 않도록 설정합니다.
실행 시 아래 기능이 활성화되지 않습니다.
- 각 컴포넌트의 접근성 관련 속성값
- Accessibility Key Action

**Remark**

- enableaccessibility 속성값을 설정하지 않으면 false로 적용됩니다.
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

◆ WRE 제약

- enableaccessibility 속성값을 false로 설정하더라도 스크린 리더의 실행을 제한하지는 않습니다.
각 컴포넌트의 접근성 관련 속성값, Accessibility Key Action 기능이 활성화되지 않은 상태에서 의도치 않은 정보를 스크린 리더가 읽을 수 있습니다.


---

### enablecache

> Environment > Property > enablecache

**Description**

서버와 통신 시 Cache 사용 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.enablecache
```

**Setting Syntax**

```javascript
enablecache ::= 'true' | 'false'
```
- **`true`** — 서버와 통신 시 Cache 를 사용합니다.
- **`false`** — 서버와 통신 시 Cache 를 사용하지 않습니다.

iOS/iPadOS NRE 는 Cache 사용을 막을 수 없으므로 앱이 종료되었을 때 Cache 를 삭제합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- enablecache 속성값을 설정하지 않으면 true 로 적용됩니다.


---

### enableclipboard

> Environment > Property > enableclipboard

**Description**

시스템의 클립보드 사용여부를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.enableclipboard[= bEnableclipboard]
```

**Setting Syntax**

```javascript
bEnableclipboard ::= 'true' | 'false'
```
```javascript
var objEnv = nexacro.getEnvironment();
objEnv.enableclipboard = false;
```
- **`true`** — 시스템의 클립보드를 사용합니다.
- **`false`** — 시스템의 클립보드를 사용하지 않습니다.

텍스트를 복사, 잘라내기 할 수 없지만 붙여넣기는 가능합니다.

**Remark**

- enableclipboard 속성값을 설정하지 않으면 true 로 적용됩니다.


---

### enablecookie

> Environment > Property > enablecookie

**Description**

서버와 통신 시 Cookie 사용 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.enablecookie
```

**Setting Syntax**

```javascript
enablecookie ::= 'true' | 'false'
```
- **`true`** — 서버와 통신 시 Cookie 를 사용합니다.
- **`false`** — 서버와 통신 시 Cookie 를 사용하지 않습니다.

iOS/iPadOS NRE 는 Cookie 사용을 막을 수 없으므로 앱이 종료되었을 때 Cookie 를 삭제합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- enablecookie 속성값을 설정하지 않으면 true 로 적용됩니다.

- 넥사크로에서 제공하는 WebBrowser 컴포넌트 내에서는 Environment 의 Cookies 영역에 정의된 변수를 사용할 수 없습니다.


---

### enableinspector

> Environment > Property > enableinspector

**Description**

앱 실행 시 원격 디버깅 허용 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.enableinspector
```

**Setting Syntax**

- **`"true"`** — 원격 디버깅 기능을 허용합니다.
- **`"false"`** — 원격 디버깅 기능을 허용하지 않습니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.
- 값을 설정하지 않으면 "false" 로 적용됩니다.

- Chrome 또는 Edge 브라우저의 개발자도구의 원격 디버깅 기능을 사용할 수 있도록 설정합니다.


---

### enablescreencapture

> Environment > Property > enablescreencapture

**Description**

OS 에서 제공하는 스크린캡쳐 기능 사용 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.enablescreencapture
```

**Setting Syntax**

```javascript
enablescreencapture ::= 'true' | 'false'
```
- **`true`** — OS 에서 제공하는 스크린캡쳐 기능을 사용합니다.
- **`false`** — OS 에서 제공하는 스크린캡쳐 기능을 사용할 수 없게 설정합니다.

Windows NRE 는 "PrtSc" 버튼을 사용할 수 없게 됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- enablescreencapture 속성값을 설정하지 않으면 true 로 적용됩니다.

- Windows NRE 와 Android NRE 에서만 사용할 수 있는 속성입니다.


---

### enabletouchevent

> Environment > Property > enabletouchevent

**Description**

터치 관련 이벤트의 발생여부를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.enabletouchevent
```

**Setting Syntax**

```javascript
enabletouchevent ::= 'true' | 'false'
```
- **`"true"`** — 마우스 관련 이벤트 대신 터치 관련 이벤트가 발생합니다.
- **`"false"`** — 터치 관련 이벤트 대신 마우스 관련 이벤트가 발생합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- enabletouchevent 속성값을 설정하지 않으면 "false" 로 적용됩니다.

- 마우스 관련 이벤트는 onlbuttondown, onlbuttonup, onmouseenter, onmouseleave, onmousemove 이벤트입니다.
  터치 관련 이벤트는 ontouchstart, ontouchmove, ontouchend 이벤트입니다.

- ondrag, onclick 등의 이벤트는 enabletouchevent 속성값에 영향을 받지 않고 발생합니다.


---

### enabletouchsoftkeyboard

> Environment > Property > enabletouchsoftkeyboard

**Description**

터치 동작으로 컴포넌트가 포커스를 가질 때 키패드 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.enabletouchsoftkeyboard [=bEnableTouchSoftkeyboard]
```

**Setting Syntax**

```javascript
bEnableTouchSoftkeyboard ::= true | false
```
- **`true`** — 컴포넌트가 포커스를 가질 때 물리 키보드 연결 상태와 상관 없이 키패드를 표시합니다.
- **`false`** — 컴포넌트가 포커스를 가질 때 물리 키보드 연결 상태가 아니라면 키패드를 표시합니다.

* 물리 키보드 연결 상태는 운영체제, 하드웨어, 드라이버 설치 등에 따라 명확하지 않을 수 있습니다.
  예를 들어 일부 기기에서는 드라이버 설치를 한 경우 물리 키보드 연결이 되지 않더라도 키보드가 연결된 상태로 값을 반환합니다.

**Remark**

- enabletouchsoftkeyboard 속성값을 설정하지 않으면 false로 적용됩니다.
  24.0.0.400 이전 버전에서는 enabletouchsoftkeyboard 속성값이 false인 상태와 같은 방식으로 동작했습니다.

- 컴포넌트의 usesoftkeyboard 속성값이 true로 적용되는 경우에만 키패드가 표시됩니다.


---

### filesecurelevel

> Environment > Property > filesecurelevel

**Description**

로컬 파일에 접근할 권한을 설정하는 속성입니다.

**Syntax**

```javascript
Environment.filesecurelevel
```

**Setting Syntax**

```javascript
filesecurelevel ::= 'private' | 'all'
```
- **`"private"`** — Personal Path 및 그 하위 경로의 파일에만 접근을 허용합니다.
- **`"all"`** — 모든 경로의 접근을 허용합니다.

Personal Path 외의 경로나 파일에 접근하면, 접근 허용 여부를 사용자에게 확인하는 UserConfirm 창이 표시됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- filesecurelevel 속성값을 설정하지 않으면 "private"로 적용됩니다.
  "Personal Path"는 개인 디렉터리를 뜻하는 것으로 MS 윈도우 시스템에서는 "내 문서"를 의미합니다.

- filesecurelevel 속성은 아래의 경우 적용됩니다.
  - VirtualFile 오브젝트 사용
  - LiteDBConnection 오브젝트에서 데이터베이스 파일 사용
  - 스크립트에서 메소드 실행 시 문자열로 파일 경로 설정


---

### highcontrastthemeid

> Environment > Property > highcontrastthemeid

**Description**

OS 에 고대비 기능이 적용되어 있을 때 어플리케이션에 적용될 테마를 설정하는 읽기전용 속성입니다.

**Syntax**

```javascript
Environment.highcontrastthemeid
```

**Setting Syntax**

- **`highcontrastthemeid`** — OS 가 고대비 상태일 때 적용될 테마의 ID 를 설정합니다.

정의되지 않은 테마의 ID 설정 시 themeid 속성에 설정된 테마가 적용됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- Windows NRE 는 OS 에 고대비 기능이 적용되면 highcontrastthemeid 속성에 설정된 테마가 동적으로 적용됩니다.

- Desktop WRE 는 OS 에 고대비 기능이 적용되도 동적으로 highcontrastthemeid 속성의 테마가 적용되지 않습니다.


---

### httpretry

> Environment > Property > httpretry

**Description**

HTTP/HTTPS 통신 시 에러가 발생하면 재시도 할 횟수를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.httpretry
```

**Setting Syntax**

- **`httpretry`** — 에러 발생 시 재시도 할 횟수를 0 이상의 정수로 설정합니다.

**Remark**

- httpretry 속성값을 설정하지 않으면 0 으로 적용됩니다.

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.


---

### httptimeout

> Environment > Property > httptimeout

**Description**

HTTP/HTTPS 통신 시 서버의 응답을 기다리는 시간을 설정하는 속성입니다.

**Syntax**

```javascript
Environment.httptimeout[= nHttpTimeOut]
```

**Setting Syntax**

```javascript
var objEnv = nexacro.getEnvironment();
objEnv.httptimeout = 10;
```
- **`nHttpTimeOut`** — 서버의 응답을 기다리는 시간으로 초(Second) 단위의 0 보다 큰 정수를 설정합니다.

속성값을 0으로 설정하면 시간 제한 없이 계속 응답을 기다립니다.

**Remark**

- httptimeout 속성값을 설정하지 않으면 60 으로 적용됩니다.


◆ Windows NRE 제약

- usehttpkeepalive 속성값이 true 인 경우 서버와 연결유지를 위한 통신 대기시간으로 사용됩니다.
   usehttpkeepalive 속성값이 false 인 경우 HTTP/HTTPS 통신 시 대기시간으로 사용됩니다.


◆ Desktop WRE 제약

- usehttpkeepalive 속성값에 관계없이 비동기(Async)로 Transaction 을 실행할 때만 HTTP/HTTPS 통신 시 대기시간으로 사용됩니다.


---

### icon

> Environment > Property > icon

**Description**

작업표시줄 또는 Favicon 으로 표시될 아이콘을 리소스 영역의 이미지로 설정하는 속성입니다.

**Syntax**

```javascript
Environment.icon
```

**Setting Syntax**

```javascript
strUrl ::= 'URL(" ' <Resource-Image> ' ")'
```
- **`<Resource-Image>`** — 리소스 영역에 정의된 이미지 중 "*.ico" 이미지를 설정합니다.

리소스 영역에 정의된 이미지가 아닐 경우 정상적으로 적용되지 않습니다.
32 * 32 크기의 아이콘 이미지를 설정하여야 웹브라우저에서 정상적으로 표시됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 리소스 영역은 TypeDefinition 에 기본으로 정의되는 영역으로 넥사크로 스튜디오의 "Resource Explorer" 로 관리할 수 있습니다.

- Windows NRE 는 icon 속성값을 설정하지 않으면 TitleBarControl 에 설정한 아이콘 이미지가 적용됩니다.

- Screen 에 따라 다른 아이콘을 적용하려면 Screen 영역에서 Environment 의 icon 속성값을 설정하여야 합니다.

- icon 속성에 설정된 아이콘 이미지는 Windows NRE 는 작업표시줄의 아이콘으로 사용되고, Desktop WRE 는 Favicon 으로 사용됩니다.


---

### initvaluefileid

> Environment > Property > initvaluefileid

**Description**

InitValue 를 적용하기 위해 InitValueDefinition 영역에 정의된 파일명을 설정하는 속성입니다.

**Syntax**

```javascript
Environment.initvaluefileid
```

**Setting Syntax**

- **`initvaluefileid`** — InitValueDefinition 영역에 정의된 InitValue 파일을 "initvalue::" Prefix 와 함께 설정합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.


---

### key

> Environment > Property > key

**Description**

어플리케이션 실행 시 설정된 Key 값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Environment.key
```

**Setting Syntax**

```javascript
var objEnv = nexacro.getEnvironment();
var strkey = objEnv.key;
```

**Remark**

- Key 값 또는 부트스트랩 정보가 인수로 전달되지 않을 경우에는 어플리케이션이 구동되지 않습니다.

- 어플리케이션 실행 시 "-K" 옵션으로 들어온 입력 인수값이 key 속성에 설정됩니다.
  설정된 key 속성값은 nexacro.xml에 저장됩니다.

- nexacro.xml 파일은 사용자별로 정보를 관리하기 위해 사용하는 XML 형식의 파일입니다.
  Windows 운영체제의 경우 "C:\Users\[UserName]\AppData\LocalLow\TOBESOFT\Nexacro N\24" 위치에 파일이 생성됩니다.

◆ Windows NRE 제약

- 보안상 문제가 될 수 있는 문자열은 실행 시 삭제 처리합니다.
  관련 제약 사항은 [앱 배포 가이드 > 런처 서비스 > 지원 기능 > 속성] 항목을 참고하세요.


---

### loadingimage

> Environment > Property > loadingimage

**Description**

데이터 로딩 시 화면에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.loadingimage
```

**Setting Syntax**

- **`loadingimage`** — 데이터 로딩 시 화면에 표시될 이미지의 경로를 설정합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- loadingimage 속성값을 설정하지 않으면 넥사크로에서 제공하는 기본 이미지가 표시됩니다.


---

### locale

> Environment > Property > locale

**Description**

국가 및 언어(locale)를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.locale[= strlocale]
```

**Setting Syntax**

```javascript
var objEnv = nexacro.getEnvironment();
objEnv.locale = "ko_KR";
```
- **`strlocale`** — "언어[_국가]" 형식의 문자열로 설정합니다.

**Remark**

- ISO 639-1에서 정의하고 있는 2-알파벳 언어 코드와 ISO 3166-1에서 정의하고 있는 2-알파벳 국가 코드를 조합하여 사용합니다.

- 국가 및 언어 코드는 "Appendix > Locale Code List" 항목을 참고하세요.


---

### loglevel

> Environment > Property > loglevel

**Description**

애플리케이션에서 로그 파일에 출력할 정보 수준을 설정하는 속성입니다.

**Syntax**

```javascript
Environment.loglevel[= strloglevel]
```

**Setting Syntax**

```javascript
loglevel ::= 'fatal' | 'error' | 'warn' | 'info' | 'debug'
```
```javascript
var objEnv = nexacro.getEnvironment();
objEnv.loglevel = "warn";
```
- **`"fatal"`** — 치명적이 에러만 로그로 출력합니다.
- **`"error"`** — 일반적인 에러까지 로그로 출력합니다.
- **`"warn"`** — 경고까지 로그로 출력합니다.
- **`"info"`** — 일반적인 정보까지 로그로 출력합니다.
- **`"debug"`** — 디버그 정보까지 로그로 출력합니다.
디버그 정보는 trace 메소드 실행 시 출력되는 문자열을 포함합니다.

**Remark**

- loglevel 속성값을 설정하지 않으면 "debug"로 적용됩니다.

- 발생되는 에러의 레벨이 설정값과 같거나 높은 경우 로그 파일에 로그를 출력합니다.
  에러 레벨은 "fatal" > "error" > "warn" > "info" > "debug" 순입니다.
  "fatal"부터 "info"까지는 프레임워크 내부에서 처리하는 로그 정보입니다.

- loglevel 속성은 아래 우선순위에 따라 동작합니다.
  (1) nexacro_config.xml 설정 파일 내 loglevel 속성값
  (2) 스크립트에서 설정한 loglevel 속성값
  (3) 넥사크로 스튜디오에서 설정한 loglevel 속성값
  단, nexacro_config.xml 설정 파일 내 loglevel 속성값은 실행 시에만 반영되며 스크립트에서 Environment.loglevel 속성값 확인 시 반환되지 않습니다.

- 로그 파일 생성 위치
  Windows NRE, macOS NRE: "%USERAPP%"

- 로그 파일명
  넥사크로 Config 파일에 정의되지 않았을 경우 "nexacro_"+[Protocol]+[URL]+".log" 형태로 생성

- Alias 실제경로입니다.

	
		Alias
		OS
		Path
		Remark
	

	
		%USERAPP%
		Windows
		C:\Users\[UserName]\AppData\LocalLow\TOBESOFT\Nexacro N\24
		 
	

	
		macOS
		/Users/[UserName]/Library/TOBESOFT/Nexacro N/24


---

### multivalueseparator

> Environment > Property > multivalueseparator

**Description**

Multi Value 바인딩된 Dataset 오브젝트에서 구분자로 사용할 값을 설정하는 속성입니다.

**Syntax**

```javascript
Environment.multivalueseparator
```

**Setting Syntax**

- **`multivalueseparator`** — 데이터 구분자로 사용될 텍스트를 설정합니다.

**Remark**

- multivalueseparator 속성값을 설정하지 않으면 ","로 적용됩니다.

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.


---

### networksecurelevel

> Environment > Property > networksecurelevel

**Description**

TCP 또는 HTTP/HTTPS 로 소켓통신 시 원격서버에 접근을 허용하는 보안 레벨을 설정하는 속성입니다.

**Syntax**

```javascript
Environment.networksecurelevel
```

**Setting Syntax**

```javascript
networksecurelevel ::= 'private' | 'all'
```
- **`"private"`** — D Class내의 도메인으로만 접근을 허용합니다.
- **`"all"`** — 모든 도메인으로의 접근을 허용합니다.

D Class 도메인 외의 주소에 접근하면, 접근 허용 여부를 사용자에게 확인하는 UserConfirm 창이 표시됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 통신 시 비교 대상은 ADL 의 도메인과 대상 도메인이며, 두 주소가 IP와 도메인으로 각각 타입이 다를 경우 설정값이 "private" 이면 접근이 허용되지 않습니다.


◆ Desktop WRE 제약

- 속성값을 "all" 로 설정하면 비동기(Async) 통신에서 XMLHttpRequest 의 withCredentials 속성이 true 로 설정됩니다.

- withCredentials 속성값이 true 이면 Cross Domain 상황에서 브라우저의 자격정보를 전송할 수 있습니다.
   이 때, 서버에서도 "Access-Control-Allow-Credentials" 헤더에 true 를 할당해서 보내야 합니다.

- withCredentials 속성이 true 로 설정되어 있을 때는 "Access-Control-Allow-Origin : *" 을 허용하지 않습니다.
   그러므로 쿠키에 관련된 요청을 사용하려면 반드시 와일드카드가 아니라 URL 을 지정해주어야 합니다.

- withCredentials 속성에 대한 자세한 내용은 "여기"를 참고하세요.


---

### rtl

> Environment > Property > rtl

**Description**

내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다.

**Syntax**

```javascript
Environment.rtl
```

**Setting Syntax**

```javascript
bRtl ::= undefined | 'true' | 'false'
```
```javascript
var objEnv = nexacro.getEnvironment();
var vRtl = objEnv.rtl;
```
- **`undefined`** — undefined 설정 시 Environment 의 locale 속성에 설정된 국가 및 언어 설정값을 기준으로 rtl 속성이 적용됩니다.
Environment 의 locale 속성값을 설정하지 않았을 경우 시스템의 국가 및 언어 설정값이 적용됩니다.
- **`true`** — 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 오른쪽으로 설정합니다.
내부 좌표계의 기준을 오른쪽으로 설정합니다.
텍스트 표시 기준을 오른쪽으로 설정합니다.
수직스크롤바가 있을 경우 왼쪽에 표시됩니다.
- **`false`** — 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 왼쪽으로 설정합니다.
내부 좌표계의 기준을 왼쪽으로 설정합니다.
텍스트 표시 기준을 왼쪽으로 설정합니다.
수직스크롤바가 있을 경우 오른쪽에 표시됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- rtl 속성값을 설정하지 않거나 삭제했을 경우 undefined 로 설정됩니다.

- 아랍권 같이 화면의 표시기준이 오른쪽인 환경에서 컨텐츠의 표시 기준을 변경하기 위해 설정하는 속성입니다.

- 하위 컨트롤 또는 컴포넌트의 rtl 속성값을 설정하지 않으면 Environment 의 rtl 속성값이 적용됩니다.


---

### scrollbarsize

> Environment > Property > scrollbarsize

**Description**

어플리케이션의 컴포넌트에 표시되는 스크롤바의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.scrollbarsize
```

**Setting Syntax**

- **`scrollbarsize`** — 스크롤바의 크기를 pixel 단위의 숫자로 설정합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 어플리케이션에 속한 컴포넌트의 scrollbarsize 속성을 설정하지 않았을 경우 Environment 의 scrollbarsize 속성이 적용됩니다.

- scrollbarsize 속성값은 수직스크롤바의 너비와 수평스크롤바의 높이에 동일하게 적용됩니다.

- scrollbarsize 속성값을 변경하면 스크롤바 내부버튼의 높이와 너비가 같이 변경됩니다.


---

### scrollbartype

> Environment > Property > scrollbartype

**Description**

어플리케이션의 컴포넌트에 스크롤바가 표시되는 형식을 설정하는 속성입니다.

**Syntax**

```javascript
Environment.scrollbartype
```

**Setting Syntax**

```javascript
scrollbartype ::= <scrolltype> | <pairtype>

<scrolltype> ::= <desktype> | <mobiletype>
<pairtype> ::= <desktype> ' ' <desktype> | <mobiletype> ' ' <mobiletype>

<desktype> ::= 'default' | 'none' | 'fixed' | 'auto'
<mobiletype> ::= 'default' | 'none' | 'indicator' | 'autoindicator'
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

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- scrollbartype 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- 어플리케이션에 속한 컴포넌트의 scrollbartype 속성을 설정하지 않았을 경우 Environment 의 scrollbartype 속성이 적용됩니다.

- 데스크탑에 적용되는 값과 모바일에 적용되는 값을 함께 설정할 수 있지만 권장하지 않습니다.
   ex) "fixed autoindicator", "auto indicator"


---

### scrollindicatorsize

> Environment > Property > scrollindicatorsize

**Description**

어플리케이션의 컴포넌트에 표시되는 스크롤 인디케이터바의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.scrollindicatorsize
```

**Setting Syntax**

- **`scrollindicatorsize`** — 스크롤 인디케이터바의 크기를 pixel 단위의 숫자로 설정합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 어플리케이션에 속한 컴포넌트의 scrollindicatorsize 속성을 설정하지 않았을 경우 Environment 의 scrollindicatorsize 속성이 적용됩니다.

- scrollindicatorsize 속성값은 수직스크롤바의 너비와 수평스크롤바의 높이에 동일하게 적용됩니다.

- 스크롤 인디케이터바가 아닌 스크롤바가 표시될 경우 scrollbarsize 속성으로 크기를 설정하여야 합니다.


---

### services

> Environment > Property > services

**Description**

TypeDefinition 영역의 Services 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Environment.services
```

**Setting Syntax**

```javascript
var objEnv = nexacro.getEnvironment();
var objSrv0 = objEnv.services[0];
var strPrefixid = objSrv0.prefixid;
```

**Remark**

- services 속성에 접근하기 위해서는 getEnvironment() 메소드로 Environment 오브젝트를 반환받아야 합니다.

- services 속성은 Collection 접근방식을 사용할 수 있습니다.
   objEnv.services[0], objEnv.services["Base"], objEnv.services.length 등의 방법을 사용합니다.

- 개별 service 속성(오브젝트)에서 사용할 수 있는 속성은 아래와 같습니다.
  prefixid, type, url, cachelevel, version, communicationversion
  - prefixid, type 속성은 읽기만 지원하며 스크립트에서 속성값을 변경할 수 없습니다.
  - url, cachelevel, version, communicationversion 속성은 스크립트에서 아래와 같은 형식으로 속성값을 변경할 수 있습니다.
    objEnv.services["Base"].url = "./Base/";

- 넥사크로 스튜디오에서 Service의 PrefixID 설정 시 특수문자와 숫자로 시작하는 문자열을 설정할 수 없습니다.
   또한 아래 표에 명시된 스크립트 예약어도 설정할 수 없습니다.

	
		Reserved
		Word
		  
		 
		 
		 
		 
		 
	

	
		abstract
		arguments
		boolean
		break
		byte
		case
		catch
		char
	

	
		class
		const
		continue
		debugger
		default
		delete
		do
		double
	

	
		else
		enum
		eval
		export
		extends
		false
		final
		finally
	

	
		float
		for
		function
		goto
		if
		implements
		import
		in
	

	
		include
		instanceof
		int
		interface
		let
		long
		native
		new
	

	
		null
		package
		private
		protected
		public
		return
		short
		static
	

	
		super
		switch
		synchronized
		this
		throw
		throws
		transient
		true
	

	
		try
		typeof
		var
		void
		volatile
		while
		with
		yield

**See Also**

NexacroAPI.getEnvironment


---

### ssvrecordseparator

> Environment > Property > ssvrecordseparator

**Description**

SSV 형식으로 통신 할 때 SSV 데이터의 레코드 구분자를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.ssvrecordseparator
```

**Setting Syntax**

```javascript
"33"
"0x1E"
"33,0x1E,34"
"0x1E,0x1F"
"33,34,35,36,37"
```
- **`ssvrecordseparator`** — 데이터의 레코드 구분자로 사용될 ASCII 문자를 10진수 또는 16진수로 설정합니다.

- 0x00(0) ~ 0x7F(127) 범위의 ASCII 문자를 콤마(",")를 사용하여 최대 5 문자까지 조합하여 설정할 수 있습니다.
0x80(128) 이상의 값은 설정할 수 없으며 5 문자 이상 설정 시 5 문자까지 적용됩니다.

- 0x00(0) ~ 0x7F(127) 범위의 ASCII 문자 중 SSV 에서 사용중이거나 제품에서 Token으로 사용되는 아래 문자는 설정할 수 없습니다.
단, 2문자 이상 조합해 사용할 때는 아래 문자를 포함할 수 있습니다.
0x03(03) - ETX  (End of Text)
0x1D(29) - GS  (Group Separator)
0x28(40) - ( (left opening parenthesis)
0x29(41) - ) (right closing parenthesis)
0x3A(58) - : (colon)
0x3D(61) - = (equal sign)

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- ssvrecordseparator 속성값을 설정하지 않으면 EmptyString 이 설정되고 ASCII 문자 0x1E(30)-RS 가 구분자로 사용됩니다.

- ssvunitseparator, ssvrecordseparator 속성값이 같은 경우 정상적으로 데이터를 처리할 수 없습니다.
  데이터 컬럼과 레코드를 구분할 수 있게 다른 값으로 속성값을 설정해주세요.


---

### ssvunitseparator

> Environment > Property > ssvunitseparator

**Description**

SSV 형식으로 통신 할 때 SSV 데이터의 컬럼 구분자를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.ssvunitseparator
```

**Setting Syntax**

```javascript
"33"
"0x1E"
"33,0x1E,34"
"0x1E,0x1F"
"33,34,35,36,37"
```
- **`ssvunitseparator`** — 데이터의 컬럼 구분자로 사용될 ASCII 문자를 10진수 또는 16진수로 설정합니다.

- 0x00(0) ~ 0x7F(127) 범위의 ASCII 문자를 콤마(",")를 사용하여 최대 5 문자까지 조합하여 설정할 수 있습니다.
0x80(128) 이상의 값은 설정할 수 없으며 5 문자 이상 설정 시 5 문자까지 적용됩니다.

- 0x00(0) ~ 0x7F(127) 범위의 ASCII 문자 중 SSV 에서 사용중이거나 제품에서 Token으로 사용되는 아래 문자는 설정할 수 없습니다.
단, 2문자 이상 조합해 사용할 때는 아래 문자를 포함할 수 있습니다.
0x03(03) - ETX  (End of Text)
0x1D(29) - GS  (Group Separator)
0x28(40) - ( (left opening parenthesis)
0x29(41) - ) (right closing parenthesis)
0x3A(58) - : (colon)
0x3D(61) - = (equal sign)

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- ssvunitseparator 속성값을 설정하지 않으면 EmptyString 이 설정되고 ASCII 문자 0x1F(31)-US 가 구분자로 사용됩니다.

- ssvunitseparator, ssvrecordseparator 속성값이 같은 경우 정상적으로 데이터를 처리할 수 없습니다.
  데이터 컬럼과 레코드를 구분할 수 있게 다른 값으로 속성값을 설정해주세요.


---

### stringresourceserviceurl

> Environment > Property > stringresourceserviceurl

**Description**

외부에서 StringResource 정보를 가져오기 위한 서비스 URL을 설정하는 속성입니다.

**Syntax**

```javascript
Environment.stringresourceserviceurl
```

**Setting Syntax**

```javascript
var objEnv = nexacro.getEnvironment();
var strUrl = objEnv.stringresourceserviceurl;
```
- **`stringresourceserviceurl`** — 외부에서 StringResource 정보를 가져오기 위한 서비스 URL을 문자열로 설정합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- Environment.usestringresource 속성값에 따라 애플리케이션 로딩 시 동작이 달라집니다.
  false: stringresourceserviceurl 속성값으로 설정한 서비스 URL에서 StringResource 정보를 로딩합니다.
  true: 제너레이트 된 StringResource 정보를 로딩합니다.


---

### tabkeycirculation

> Environment > Property > tabkeycirculation

**Description**

탭키 또는 Shift+탭키 입력으로 포커스 이동 시 Form 내에서 마지막 컴포넌트 또는 첫번째 컴포넌트 다음동작 방식을 설정하는 속성입니다.

**Syntax**

```javascript
Environment.tabkeycirculation
```

**Setting Syntax**

```javascript
tabkeycirculation ::= 'form,cycle' | 'form,nocycle' | 'frame,cycle' | 'frame,nocycle'
```
- **`"form,cycle"`** — Form 내에서만 순환합니다 (기본값)
마지막 컴포넌트에서 첫 번째 컴포넌트로 포커스를 이동하며 계속 순환합니다.
- **`"form,nocycle"`** — Form 내에서 한 번만 순환합니다.
마지막 컴포넌트 또는 첫 번째 컴포넌트에서 포커스 이동을 멈추고 탭키 입력이 무시됩니다.
- **`"frame,cycle"`** — 마지막 컴포넌트 또는 첫 번째 컴포넌트에서 포커스 이동 시 다른 프레임으로 이동합니다.
순환할 수 있는 모든 프레임을 계속 순환합니다.
- **`"frame,nocycle"`** — 마지막 컴포넌트 또는 첫 번째 컴포넌트에서 포커스 이동 시 다른 프레임으로 이동합니다.
순환할 수 있는 모든 프레임을 한 번만 순환합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- tabkeycirculation 속성값을 설정하지 않으면 "form,cycle" 로 적용됩니다.


---

### themeid

> Environment > Property > themeid

**Description**

어플리케이션에 적용될 테마를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.themeid
```

**Setting Syntax**

- **`themeid`** — 어플리케이션에 적용 될 테마의 ID 를 "theme::[ThemeID]" 형식으로 설정합니다.

파일경로의 "theme::" 는 고정 Prefix 값으로 수정할 수 없습니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.


---

### traceduration

> Environment > Property > traceduration

**Description**

로그 파일을 일별로 생성하는 옵션을 설정하는 속성입니다.

**Syntax**

```javascript
Environment.traceduration
```

**Remark**

- 값을 설정하지 않거나 0 이하의 값을 설정한 경우 기본값(-1)으로 동작합니다.
  기본값인 경우에는 지정된 파일명으로 파일을 생성합니다.
- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- 앱 실행 시 traceduration 값이 설정된 넥사크로 Config 파일이 적용되었다면 현재 속성은 적용되지 않습니다. 넥사크로 Config 파일이 적용되지 않았거나 파일내에 traceduration 속성이 정의되지 않은 경우는 현재 속성이 적용됩니다.

- 1 이상의 정수값을 지정한 경우에는 지정한 속성값만큼의 로그파일을 생성하고 유지합니다.
  예를 들어 속성값이 2인 경우 "filepath_시스템날짜(yyyymmdd).log" 형태로 파일을 생성하며 생성일, 생성일-1일 2개의 로그 파일을 유지합니다.
- traceduration 속성값을 0 이하의 값으로 변경한 경우 생성된 로그 파일이 삭제되고 "nexacro(protocol+url).log" 형태로 파일이 생성됩니다.


---

### tracemode

> Environment > Property > tracemode

**Description**

어플리케이션에서 로그파일에 메시지를 출력하는 방법을 설정하는 속성입니다.

**Syntax**

```javascript
Environment.tracemode
```

**Setting Syntax**

```javascript
tracemode ::= 'none' | 'new' | 'append'
```
- **`"none"`** — 로그파일을 생성하지 않습니다.
- **`"new"`** — 어플리케이션이 시작할때마다 로그파일을 새로 만듭니다.
- **`"append"`** — 기존에 있는 로그파일에 내용을 추가합니다.

**Remark**

- tracemode 속성값을 설정하지 않으면 "none" 으로 적용됩니다.

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 어플리케이션 실행 시 tracemode 값이 설정된 넥사크로 Config 파일이 적용되었다면 현재 속성은 적용되지 않습니다.
   넥사크로 Config 파일이 적용되지 않았거나 파일내에 tracemode 속성이 정의되지 않은 경우는 현재 속성이 적용됩니다.


- 어플리케이션에서 에러가 발생하거나 trace() 메소드 실행 시 로그파일에 메시지가 출력됩니다.

- Windows NRE, macOS NRE 의 경우 "%USERAPP%" 위치에 로그파일이 생성됩니다.
   로그파일명이 넥사크로 Config 파일에 정의되지 않았을 경우 "nexacro_"+[Protocol]+[URL]+".log" 형태로 생성됩니다.

- Alias 실제경로입니다.

	
		Alias
		OS
		Path
		Remark
	

	
		%USERAPP%
		Windows
		C:\Users\[UserName]\AppData\LocalLow\TOBESOFT\Nexacro N\24
		 
	

	
		macOS
		/Users/[UserName]/Library/TOBESOFT/Nexacro N/24


---

### usecontextmenu

> Environment > Property > usecontextmenu

**Description**

어플리케이션 영역에서 오른쪽 마우스 클릭 시 기본팝업메뉴의 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.usecontextmenu
```

**Setting Syntax**

```javascript
usecontextmenu ::= 'all' | 'form' | 'edit' | 'none'
```
- **`"all"`** — 모든 시스템 기본팝업메뉴를 사용할 수 있습니다.
- **`"form"`** — Form 의 기본팝업메뉴를 사용할 수 있습니다.

Edit 와 같이 입력이 가능한 컴포넌트의 기본팝업메뉴를 사용할 수 없습니다.
- **`"edit"`** — Form 의 기본팝업메뉴를 사용할 수 없습니다.

Edit 와 같이 입력이 가능한 컴포넌트의 기본팝업메뉴를 사용할 수 있습니다.
- **`"none"`** — 컴포넌트의 usecontextmenu 속성값에 관계없이 모든 기본팝업메뉴를 사용할 수 없습니다.

**Remark**

- usecontextmenu 속성값을 설정하지 않으면 "all" 로 적용됩니다. 

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 입력이 가능한 Calendar, Combo, Edit, Grid, MaskEdit, Sketch, Spin, TextArea 컴포넌트에만 적용되는 속성입니다.
   나머지 컴포넌트는 항상 "none" 으로 적용됩니다.

- Grid 컴포넌트는 Cell 이 편집상태일 때에 한해서 해당 편집영역에 Environment 의 usecontextmenu 속성값이 적용됩니다.
   Grid 컴포넌트에는 usecontextmenu 속성이 없습니다.


◆ web runtime environment 제약

- web runtime environment  에서 기본팝업메뉴(ContextMenu)는 사용하는 브라우저에 따라 다르게 표시됩니다.


---

### usedateautocalibration

> Environment > Property > usedateautocalibration

**Description**

Calendar 컴포넌트의 calendaredit 영역에 직접 날짜값을 입력하는 경우 유효하지 않은 값 입력 시 자동 보정 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.usedateautocalibration
```

**Setting Syntax**

```javascript
usedateautocalibration ::= true | false
```
- **`true`** — 유효하지 않은 값 입력 시 입력값을 자동 보정합니다.
Calendar 컴포넌트 Remark 내 "입력값 자동 보정" 항목을 참고해주세요.
- **`false`** — 유효하지 않은 값 입력 시 입력값을 자동 보정하지 않습니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- usedateautocalibration 속성값을 설정하지 않으면 true로 적용됩니다.


---

### usehttpkeepalive

> Environment > Property > usehttpkeepalive

**Description**

HTTP/HTTPS 통신시 서버와 연결을 유지하기 위한 Keep Alive 기능의 사용여부를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.usehttpkeepalive
```

**Setting Syntax**

```javascript
usehttpkeepalive ::= 'true' | 'false'
```
- **`"true"`** — 서버와 연결을 유지하기 위한 Keep Alive 기능을 사용합니다.
- **`"false"`** — 서버와 연결을 유지하기 위한 Keep Alive 기능을 사용하지 않습니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- usehttpkeepalive 속성값을 설정하지 않으면 "false" 로 적용됩니다.


---

### useproxykeepalive

> Environment > Property > useproxykeepalive

**Description**

Proxy 통신시 서버와 연결을 유지하기 위한 Keep Alive 기능의 사용여부를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.useproxykeepalive
```

**Setting Syntax**

```javascript
useproxykeepalive ::= 'true' | 'false'
```
- **`"true"`** — 서버와 연결을 유지하기 위한 Keep Alive 기능을 사용합니다.
- **`"false"`** — 서버와 연결을 유지하기 위한 Keep Alive 기능을 사용하지 않습니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- useproxykeepalive 속성값을 설정하지 않으면 "false" 로 적용됩니다.


---

### userfontid

> Environment > Property > userfontid

**Description**

어플리케이션에 적용될 UserFont 의 ID 를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.userfontid
```

**Setting Syntax**

- **`userfontid`** — UserFontDefinition 영역에 정의된 UserFont 파일에서 어플리케이션에 적용할 UserFont 의 ID를 설정합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- Screen 별로 다른 UserFont 를 설정할 수 없습니다.

- UserFontDefinition 영역에 한 개 이상의 UserFont 파일을 정의할 수 있고,UserFont 파일에는 여러개의 UserFont 를 정의할 수 있습니다.

- 프로젝트를 Generate 하면 UserFont 정의는 index.html 파일에 "style" 항목으로 추가됩니다.

- UserFont 사용 시 환경별로 지원하는 포맷정보는 "Appendix > Supported UserFont" 항목을 참고하세요.


◆ Nexacro Runtime Environment 제약

- UserFont 가 시스템에 설치되어 있어야 어플리케이션에 적용됩니다.


---

### userhotkey

> Environment > Property > userhotkey

**Description**

애플리케이션에 적용될 전역 단축키를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.userhotkey[= strId=strUserHotkey]
```

**Setting Syntax**

```javascript
Environment.userhotkey = "id1=G";
Environment.userhotkey = "id1=CTRL+G";
Environment.userhotkey = "id1=CTRL+Y,id2=CTRL+ALT+SHIFT+E,id3=SHIFT+U";
```
- **`strId`** — 전역 단축키 id를 설정합니다.
- **`strUserHotkey`** — 수식키(CTRL, ALT, SHIFT)와 일반키의 조합으로 설정합니다.
수식키는 중복으로 조합하여 설정할 수 있습니다.
각 키는 "+" 를 사용하여 조합을 설정합니다.

**Remark**

- 콤마 구분자로 여러 개의 전역 단축키를 설정할 수 있습니다.

- 전역 단축키 입력 시 onuserhotkey 이벤트가 발생한 후 onkeydown 이벤트가 발생합니다.

- 단축키 우선순위는 아래와 같습니다.
  (1) Environment.userhotkey 속성
  (2) 접근성 관련 단축키 속성 (accessibilitybackwardkey, accessibilityforwardkey, accessibilityheadingnexthotkey, accessibilityheadingprevhotkey 등)
  (3) 컴포넌트 hotkey 속성
  Environment.userhotkey와 같은 키 조합으로 단축키가 설정된 경우에는 우선순위에 따라 Environment.userhotkey 속성에 설정한 단축키만 동작합니다.
    
- 여러 개의 전역 단축키 설정 시 strId 또는 strUserHotkey 설정값이 중복된 경우에는 먼저 설정된 값만 등록됩니다.
  예를 들어 obj.userhotkey = "uk0=CTRL+A,uk1=CTRL+B,uk0=CTRL+C,uk3=CTRL+A,uk0=CTRL+A"로 설정한 경우 먼저 설정된 값과 중복된 항목은 제외하고 "uk0=CTRL+A,uk1=CTRL+B" 2개의 값만 적용됩니다.


---

### usesoftkeyboard

> Environment > Property > usesoftkeyboard

**Description**

usesoftkeyboard 속성을 가지는 컴포넌트가 포커스를 가질 때 키패드 표시 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.usesoftkeyboard [= bUseKeyboard]
```

**Setting Syntax**

```javascript
bUseKeyboard ::= true | false
```
- **`true`** — 컴포넌트가 포커스를 가질 때 키패드가 자동으로 표시됩니다.
- **`false`** — 컴포넌트가 포커스를 가질 때 키패드가 표시되지 않습니다.

**Remark**

- usesoftkeyboard 속성값을 설정하지 않으면 true로 적용됩니다.

- 컴포넌트의 usesoftkeyboard 속성값을 false로 일괄 적용하고자 하는 경우  Environment 오브젝트의 usesoftkeyboard 속성값을 false로 설정합니다.
  컴포넌트의 usesoftkeyboard 속성을 직접 설정하지 않은 경우(기본값이 적용된 상태)에는 Environment 오브젝트의 usesoftkeyboard 속성값인 false가 우선 적용됩니다.

- 컴포넌트의 usesoftkeyboard 속성값을 직접 설정한 경우에는 컴포넌트의 속성값이 우선 적용됩니다.
  예를 들어, Environment 오브젝트의 usesoftkeyboard 속성값을 false로 설정한 경우, 개별 컴포넌트의 usesoftkeyboard 속성값을 true로 적용하려면 해당 속성값을 true로 직접 설정해야 합니다.


---

### usestringresource

> Environment > Property > usestringresource

**Description**

애플리케이션 로딩 시 제너레이트 된 StringResource 로딩 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Environment.usestringresource
```

**Setting Syntax**

```javascript
usestringresource ::= true | false
```
- **`true`** — 애플리케이션 로딩 시 제너레이트 된 StringResource를 적용합니다.
- **`false`** — 애플리케이션 로딩 시 제너레이트 된 StringResource를 적용하지 않습니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

-  usestringresource 속성값을 설정하지 않으면 false로 적용됩니다.

- StringResource 로딩 시 설정한 locale에 해당하는 StringResource 정보가 없는 경우에는 "en" 기준으로 StringResource를 로딩합니다.
  StringResource 로딩 시 locale 적용 우선순위는 다음과 같습니다.
  (1) Environment locale 속성
  (2) 사용자 운영체제 로케일 정보

- nexacro.loadStringResource 메서드 실행 시 strUrl 파라미터를 설정한 경우에는 usestringresource 속성값과 상관없이 StringResource를 로드합니다.


---

### usewaitcursor

> Environment > Property > usewaitcursor

**Description**

서버와 통신중 대기상태일때 WaitCursor 를 화면에 표시할 지 설정하는 속성입니다.

**Syntax**

```javascript
Environment.usewaitcursor[= bWaitcursor]
```

**Setting Syntax**

```javascript
bWaitcursor ::= 'true' | 'false'
```
```javascript
var objEnv = nexacro.getEnvironment();
objEnv.usewaitcursor = true;
```
- **`true`** — 대기상태일 때 WaitCursor 를 화면에 표시합니다.
- **`false`** — 대기상태일 때 WaitCursor 를 화면에 표시하지 않습니다.

**Remark**

- usewaitcursor 속성값을 설정하지 않으면 true 로 적용됩니다.


---

### version

> Environment > Property > version

**Description**

Environment 의 버전을 설정하는 속성입니다.

**Syntax**

```javascript
Environment.version
```

**Setting Syntax**

- **`strVersion`** — Environment 의 버전을 설정합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- Screen 별로 version 속성값을 다르게 설정할 수 없습니다.

- checkversion 속성이 true 일 경우 Environment 관련 Query String 생성에 사용되는 속성입니다.


---

## 메서드 (Methods)

### findAccessibility

> Environment > Method > findAccessibility

**Description**

파라미터로 전달된 텍스트가 접근성 관련 속성값에 설정된 오브젝트를 특정범위에서 검색하여 반환하는 메소드입니다.

**Syntax**

```javascript
Environment.findAccessibility( objParent, objStartComp, strFindText [, strProp [, strDirection [, strScope]]] );
```

**Parameters**

```
검색하려는 범위의 기준이 되는 오브젝트를 설정합니다.

MainFrame, ChildFrame, Form 또는 Container Component 만 설정할 수 있습니다.
설정된 오브젝트의 하위만 검색범위로 적용됩니다.
```

**Return**

파라미터로 전달된 텍스트가 접근성 관련 속성값으로 설정된 오브젝트를 검색하여 반환합니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 실행되는 메소드입니다.

- accessibilityenable 속성과 visible 속성값이 true 인 컴포넌트만 검색대상이 됩니다.

- findAccessibility() 메소드를 위해 별도의 HotKey 나 UI 를 제공하지 않습니다.


---

### getDeviceAdaptor

> Environment > Method > getDeviceAdaptor

**Description**

DeviceAdaptors 영역에 정의된 디바이스를 반환하는 메소드입니다.

**Syntax**

```javascript
Environment.getDeviceAdaptor( strID )
```

**Parameters**

```
가져올 디바이스의 ID 를 문자열로 설정합니다.
```

**Return**

TypeDefinition 의 DeviceAdaptors 영역에 정의된 디바이스를 반환합니다.


---

### getNetworkStatus

> Environment > Method > getNetworkStatus

**Description**

애플리케이션이 실행 중인 환경에서 네트워크 사용 가능 상태를 반환하는 메서드입니다.

**Syntax**

```javascript
Environment.getNetworkStatus()
```

**Parameters**

var objEnv = nexacro.getEnvironment();
var strNetworkStatus = objEnv.getNetworkStatus();

**Return**

네트워크 사용 가능 상태를 반환합니다.
- "online": 네트워크가 연결된 상태
- "offline": 네트워크가 연결되지 않은 상태


---

### playAccessibility

> Environment > Method > playAccessibility

**Description**

파라미터로 전달된 오브젝트의 접근성을 실행하는 메소드입니다.

**Syntax**

```javascript
Environment.playAccessibility( objComp  );
```

**Parameters**

```
접근성을 실행할 오브젝트를 설정합니다.
```

**Return**

오브젝트의 접근성을 정상적으로 실행하면 true 를 반환합니다.

오브젝트의 접근성을 정상적으로 실행하지 못하면 false 를 반환합니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 실행되는 메소드입니다.

- objComp 에 잘못된 값을 설정 시 접근성이 실행되지 않습니다.


◆ Mobile 제약

- Mobile 환경은 지원하지 않는 메소드입니다.


---

### userNotify

> Environment > Method > userNotify

**Description**

넥사크로가 다른 어플리케이션에 포함되어 있을 때 상위 어플리케이션으로 정보를 전달하는 메소드입니다.

**Syntax**

```javascript
Environment.userNotify( nNotifyID, strMessage )
```

**Parameters**

```
Notification 을 구별하기 위한 ID 를 숫자로 설정합니다.
```

**Return**

없음

**Example**



---

## 이벤트 (Events)

### onaccessibilitykey

> Environment > Event > onaccessibilitykey

**Description**

접근성 기능이 활성화됐을 때 키 입력 시 제일 먼저 발생하는 이벤트입니다.

**Syntax**

```javascript
onaccessibilitykey(obj:nexacro.Environment,e:nexacro.KeyEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

true 값을 반환하면 키 입력이 취소되고 접근성 기능이 동작하지 않습니다.
false 값을 반환하면 접근성 기능이 동작하고 이후 처리될 키 관련 이벤트가 발생합니다.
이벤트에서 return 값을 생략하면 false 값으로 적용됩니다.

**Remark**

- enableaccessibility 속성값이 true이고 userhotkey 속성값을 설정하지 않은 경우 모든 키 입력 시 onaccessibilitykey 이벤트가 제일 먼저 발생합니다.

- userhotkey 속성값으로 설정한 단축키 입력 시에는 onaccessibilitykey 이벤트가 발생하지 않으며 onuserhotkey 이벤트가 발생합니다.


---

### ondevicepermission

> Environment > Event > ondevicepermission

**Description**

권한 요청 또는 확인 시 발생하는 이벤트입니다.

**Syntax**

```javascript
ondevicepermission(obj:nexacro.Environment,e:nexacro.DevicePermissionEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

system.requestDevicePermission 메소드 또는 system.checkDevicePermission 메소드 실행 시 결과를 확인하기 위해 발생하는 이벤트입니다.


---

### onerror

> Environment > Event > onerror

**Description**

Form 또는 Application 오브젝트의 transaction 메서드, DataObject 오브젝트의 load, request 메서드 실행 중 사용자 입력, 통신 실패 시 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.Environment,e:nexacro.ErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

true 값을 반환하면 
> Form 또는 Application 오브젝트의 transaction 메서드 실행 상태를 유지합니다. 
> DataObject 오브젝트의 onerror 이벤트가 발생하지 않으며 load, request 메서드 실행 상태를 유지합니다. 

false 값을 반환하면 
> Form 또는 Application 오브젝트의 transaction 메서드 실행을 중지합니다. 
> DataObject 오브젝트의 onerror 이벤트가 발생하며 load, request 메서드 실행을 중지합니다. 

반환값을 따로 지정하지 않으면 false 값으로 적용됩니다.

**Remark**

- Form 또는 Application의 transaction 메서드 실행 중 사용자가 ESC 키 입력 시 onerror 이벤트가 발생합니다.
  onerror 이벤트 핸들러 함수 내에서 true 값을 반환하지 않은 경우 Environment 오브젝트의 onerror 이벤트가 발생합니다.
  Environment 오브젝트의 onerror 이벤트 핸들러 함수 내에서 transaction 메서드 실행 상태 유지 여부를 결정할 수 있습니다.


---

### onextendedcommand

> Environment > Event > onextendedcommand

**Description**

DeviceAdaptors 에 정의된 디바이스에서 이벤트가 전달되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onextendedcommand(obj:nexacro.Environment,e:nexacro.ExtendedCommandEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Form 의 onextendedcommand 이벤트가 전파되어 Environment 의 onextendedcommand 이벤트가 발생합니다.
   이벤트 전파를 막으려면 Form 의 onextendedcommand 이벤트에서 stopPropagation() 메소드를 사용하여야 합니다.


---

### onload

> Environment > Event > onload

**Description**

넥사크로 엔진이 로드된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
onload(obj:nexacro.Environment,e:nexacro.LoadEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Application 과 Form 이 로드되기 전에 발생하는 이벤트입니다.
   화면 크기 및 기타 환경변수를 변경할 수 있습니다.


---

### onnetworkstatuschange

> Environment > Event > onnetworkstatuschange

**Description**

애플리케이션이 실행 중인 환경에서 네트워크 사용 가능 여부가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onnetworkstatuschange(obj:nexacro.Environment,e:nexacro.NetworkStatusChangeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onuserhotkey

> Environment > Event > onuserhotkey

**Description**

전역 단축키 입력 시 발생하는 이벤트입니다.

**Syntax**

```javascript
onuserhotkey(obj:nexacro.Environment,e:nexacro.EnvironmentUserHotkeyEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

전역 단축키 입력 시 onkeydown 이벤트 발생 전에 발생하는 이벤트입니다.


---

## EnvironmentUserHotkeyEventInfo

### EnvironmentUserHotkeyEventInfo

> EventInfo Objects > EnvironmentUserHotkeyEventInfo

**Description**

전역 단축키 입력 시 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

Name
Description
altkey
이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.
ctrlkey
이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.
eventid
이벤트의 ID를 갖는 읽기전용 속성입니다.
fromobject
이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.
fromreferenceobject
이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.
keycode
키보드로 입력된 키에 해당하는 코드값을 갖는 속성입니다.
keyid
입력된 전역 단축키의 id 값을 갖는 속성입니다.
metakey
이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.
shiftkey
이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.


---

### altkey

> EventInfo Objects > EnvironmentUserHotkeyEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
EnvironmentUserHotkeyEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### ctrlkey

> EventInfo Objects > EnvironmentUserHotkeyEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
EnvironmentUserHotkeyEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### eventid

> EventInfo Objects > EnvironmentUserHotkeyEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
EnvironmentUserHotkeyEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > EnvironmentUserHotkeyEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
EnvironmentUserHotkeyEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > EnvironmentUserHotkeyEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
EnvironmentUserHotkeyEventInfo.fromreferenceobject
```

**Setting Syntax**

```javascript
var objComp = e.fromreferenceobject;
```

**Remark**

- Calendar 와 같이 서브컨트롤이 있는 컴포넌트에서 서브컨트롤에 의해 이벤트가 발생한 경우 fromreferenceobject 속성은 서브컨트롤을 갖습니다.
  Button 과 같이 서브컨트롤이 없는 컴포넌트는 해당 컴포넌트를 갖습니다.

- onlbuttondown과 같이 상위로 전파되는 이벤트에서 fromreferenceobject 속성은 이벤트가 최초로 발생한 컴포넌트 또는 서브컨트롤을 갖습니다.


---

### keycode

> EventInfo Objects > EnvironmentUserHotkeyEventInfo > Property > keycode

**Description**

키보드로 입력된 키에 해당하는 코드값을 갖는 속성입니다.

**Syntax**

```javascript
EnvironmentUserHotkeyEventInfo.keycode
```

**Setting Syntax**

```javascript
var nCode = e.keycode;
```

**Remark**

- 운영체제(OS)에 따른 Key Code 값을 갖습니다.


---

### keyid

> EventInfo Objects > EnvironmentUserHotkeyEventInfo > Property > keyid

**Description**

입력된 전역 단축키의 id 값을 갖는 속성입니다.

**Syntax**

```javascript
EnvironmentUserHotkeyEventInfo.keyid
```

**Setting Syntax**

```javascript
var strKeyid = e.keyid;
```


---

### metakey

> EventInfo Objects > EnvironmentUserHotkeyEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
EnvironmentUserHotkeyEventInfo.metakey
```

**Setting Syntax**

```javascript
var bMeta = e.metakey;
```
- **`"true"`** — command(또는 windows) 키가 눌린 상태로 이벤트가 발생할 때 갖는 값입니다.
- **`"false"`** — command(또는 windows) 키가 눌리지 않은 상태로 이벤트가 발생할 때 갖는 값입니다.

**Remark**

- mac 키보드에서 command 키, 윈도우 키보드에서 Windows 키 입력 여부를 반환합니다.
- Firefox 브라우저는 Windows 운영체제에서 키 입력 상태를 반환하지 않습니다.


---

### shiftkey

> EventInfo Objects > EnvironmentUserHotkeyEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
EnvironmentUserHotkeyEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

## NexacroAPI 관련 메서드

### getEnvironment

> NexacroAPI > Method > getEnvironment

**Description**

현재 실행된 어플리케이션의 Environment 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.getEnvironment()
```

**Parameters**

var objEnv = nexacro.getEnvironment() ;

**Return**

Environment 오브젝트를 반환합니다.


---

### getEnvironmentVariable

> NexacroAPI > Method > getEnvironmentVariable

**Description**

Environment 의 Variables 영역에 정의된 변수의 값을 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.getEnvironmentVariable( strID )
```

**Parameters**

```
값을 가져올 변수의 ID 를 문자열로 설정합니다.
```

**Return**

Environment 의 Variable 영역에 정의된 변수의 값을 반환합니다.

**Remark**

- Application 의 AppVariables 영역에 정의된 변수값을 얻으려면 getApplication() 메소드를 사용하여 변수에 접근하여야 합니다.


---

### removeEnvironmentVariable

> NexacroAPI > Method > removeEnvironmentVariable

**Description**

Environment 의 Variables 영역에 정의된 변수를 제거하는 메소드입니다.

**Syntax**

```javascript
nexacro.removeEnvironmentVariable( strID )
```

**Parameters**

```
제거될 변수의 ID를 설정합니다.
```

**Return**

없음

**Remark**

- Application 의 AppVariables 영역에 있는 변수를 제거하기 위해서는 removeVariable() 메소드를 사용하여야 합니다.

- 통신 시 사용되는 Cookie 를 제거하기 위해서는 removeCookieVariable() 메소드를 사용하여야 합니다.


---

### setEnvironmentVariable

> NexacroAPI > Method > setEnvironmentVariable

**Description**

Environment 의 Variables 영역에 변수를 추가하는 메소드입니다.

**Syntax**

```javascript
nexacro.setEnvironmentVariable( strID, varVal )
```

**Parameters**

```
추가될 변수의 ID를 설정합니다.
```

**Return**

없음

**Remark**

- Application 영역에 변수를 추가하기 위해서는 addVariable() 또는 setVariable() 메소드를 사용하여야 합니다.

- 통신 시 사용되는 Cookie 를 추가하기 위해서는 setCookieVariable() 메소드를 사용하여야 합니다.


---

## 부록: Environment 상수

### Environment

> 

**DevicePermissionEventInfo(ondevicepermission) > status**

	
		Constant
		Value
		Description
	

	
		nexacro.DevicePermissionStatus.DENIED
		0
		권한이 설정되지 않은 상태
	

	
		nexacro.DevicePermissionStatus.GRANTED
		1
		권한이 설정된 상태


---
