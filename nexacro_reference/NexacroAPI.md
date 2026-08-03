# nexacroN V24 — NexacroAPI

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 55개

---

## NexacroAPI

### NexacroAPI

> NexacroAPI

**Description**

넥사크로에서 기능을 확장하여 추가로 제공하는 메소드입니다.

**Remark**

- 넥사크로에 정의된 메소드는 정적 메소드이므로 생성이나 선언 없이 바로 사용할 수 있습니다.

**Method**

| Name | Description |
| --- | --- |
| addErrorMessage | 어플리케이션에 사용자가 정의한 에러메시지를 추가하는 메소드입니다. |
| base64Decode | Base64 형식으로 인코딩된 데이터를 디코딩 하는 메소드입니다. |
| base64Encode | 데이터를 Base64 형식으로 인코딩 하는 메소드입니다. |
| ceil | 지정된 자릿수 또는 소수점을 기준으로 올림한 값을 반환하는 메소드입니다. |
| deleteCacheDB | 어플리케이션에서 사용한 Cache DB 파일 및 관련된 임시파일을 삭제하는 메소드입니다. |
| flashWindow | 작업표시줄에서 해당 어플리케이션 아이콘을 깜빡이게 하는 메소드입니다. |
| floor | 지정된 자릿수 또는 소수점을 기준으로 내림한 값을 반환하는 메소드입니다. |
| gc | 메모리에서 사용하지 않는 데이터를 즉시 삭제하는 메소드입니다. |
| getApplication | 현재 실행된 어플리케이션의 Application 오브젝트를 반환하는 메소드입니다. |
| getCookieVariable | Environment 의 Cookies 영역에 정의된 쿠키의 값을 반환하는 메소드입니다. |
| getEnableWheelZoom | 지정된 Frame 이 속한 window 의 Zoom 기능 설정여부를 반환하는 메소드입니다. |
| getEnvironment | 현재 실행된 어플리케이션의 Environment 오브젝트를 반환하는 메소드입니다. |
| getEnvironmentVariable | Environment 의 Variables 영역에 정의된 변수의 값을 반환하는 메소드입니다. |
| getHTTPHeaderVariable | Environment 의 HTTP Header 영역에 정의된 변수의 값을 반환하는 메소드입니다. |
| getLogFilePath | 앱에서 로그 파일을 저장하는 경로를 반환하는 메소드입니다. |
| getPopupFrames | 파라미터로 설정한 Frame 이 속한 Window 를 기준으로 팝업된 ChildFrame 을 Collection 형태로 반환하는 메소드입니다. |
| getPrivateProfile | 어플리케이션에서 저장한 개인화 데이터를 반환하는 메소드입니다. |
| getProjectPath | 애플리케이션의 실행 경로를 반환하는 메소드입니다. |
| getStringResourceValue | StringResource에서 지정한 Key 값에 해당하는 문자열을 반환하는 메서드입니다. |
| getTextSize | 인수로 전달된 값을 기준으로 텍스트가 표시되는 영역의 크기를 계산하여 반환하는 메소드입니다. |
| getWheelZoom | 지정된 Frame 이 속한 window 의 Zoom 배율을 반환하는 메소드입니다. |
| isAlpha | 인수로 전달된 문자코드 또는 문자열이 알파벳인지 여부를 반환하는 메소드입니다. |
| isAlphaNumeric | 인수로 전달된 문자코드 또는 문자열이 알파벳 또는 숫자인지 여부를 반환하는 메소드입니다. |
| isExistCookieVariable | Environment 의 Cookies 영역에서 특정 쿠키변수의 존재여부를 반환하는 메소드입니다. |
| isLower | 인수로 전달된 문자코드 또는 문자열이 알파벳 소문자인지 여부를 반환하는 메소드입니다. |
| isNumeric | 인수로 전달된 문자코드 또는 문자열이 숫자인지 여부를 반환하는 메소드입니다. |
| isSpace | 인수로 전달된 문자코드 또는 문자열이 공백문자인지 여부를 반환하는 메소드입니다. |
| isUpper | 인수로 전달된 문자코드 또는 문자열이 알파벳 대문자인지 여부를 반환하는 메소드입니다. |
| loadStringResource | 지정한 언어에 해당하는 StringResource를 로드하는 메서드입니다. |
| loadStyle | 어플리케이션에 XCSS 파일을 로드하여 적용하는 메소드입니다. |
| open | 동적으로 생성한 ChildFrame 을 Modeless Window 로 표시하는 메소드입니다. |
| parseDate | 날짜형식의 문자열을 분석해 1970년 1월 1일 자정부터 해당 날짜 사이의 시간을 밀리초로 반환하는 메소드입니다. |
| removeCookieVariable | Environment 의 Cookies 영역에서 쿠키변수를 제거하는 메소드입니다. |
| removeEnvironmentVariable | Environment 의 Variables 영역에 정의된 변수를 제거하는 메소드입니다. |
| removeHTTPHeaderVariable | Environment 의 HTTP Header 영역에서 변수를 제거하는 메소드입니다. |
| removePrivateProfile | 애플리케이션에서 저장한 개인화 데이터를 삭제하는 메소드입니다. |
| replaceAll | 인수로 전달된 문자열에서 특정 문자열을 새 문자열로 모두 변환하여 반환하는 메소드입니다. |
| round | 지정된 자릿수 또는 소수점을 기준으로 반올림한 값을 반환하는 메소드입니다. |
| setCookieVariable | Environment 의 Cookies 영역에 쿠키를 추가하는 메소드입니다. |
| setEnableWheelZoom | 지정된 Frame 이 속한 window 의 Zoom 기능을 설정하는 메소드입니다. |
| setEnvironmentVariable | Environment 의 Variables 영역에 변수를 추가하는 메소드입니다. |
| setHTTPHeaderVariable | Environment 의 HTTP Header 영역에 변수를 추가하는 메소드입니다. |
| setInitialVariable | 웹브라우저 환경에서 어플리케이션이 로드되기 전 Global 영역 변수에 값을 설정하는 메소드입니다. |
| setPrivateProfile | 어플리케이션에서 개인화 데이터를 저장하는 메소드입니다. |
| setProtocolVar | 통신에 사용되는 Protocol 어답터에 설정값을 전달하는 메소드입니다. |
| setRenderingType | Windows NRE에서 렌더링 방식을 설정하는 메소드입니다. |
| setTimeout | 일정 시간 이후 콜백 함수를 한 번만 실행하는 타이머 메서드입니다. |
| setWheelZoom | 지정된 Frame 이 속한 window 의 Zoom 배율을 설정하는 메소드입니다. |
| stripQuote | 인수로 전달된 문자열의 양쪽 끝에서 따옴표를 제거한 후 반환하는 메소드입니다. |
| toNumber | 인수로 전달된 문자열을 숫자로 변환하여 반환하는 메소드입니다. |
| trim | 인수로 전달된 문자열의 양쪽 끝에서 공백문자 또는 지정된 문자를 제거한 후 반환하는 메소드입니다. |
| trimLeft | 인수로 전달된 문자열의 왼쪽 끝에서 공백문자 또는 지정된 문자를 제거한 후 반환하는 메소드입니다. |
| trimRight | 인수로 전달된 문자열의 오른쪽 끝에서 공백문자 또는 지정된 문자를 제거한 후 반환하는 메소드입니다. |
| wrapQuote | 인수로 전달된 문자열의 양쪽 끝에 큰따옴표를 붙여 반환하는 메소드입니다. |


---

### 메서드 (Methods)

### addErrorMessage

> NexacroAPI > Method > addErrorMessage

**Description**

어플리케이션에 사용자가 정의한 에러메시지를 추가하는 메소드입니다.

**Syntax**

```javascript
nexacro.addErrorMessage( enumLang, strCode, strMsg )
```

**Parameters**

```
에러메시지가 추가될 언어를 설정합니다.

"ko" 설정 시 한국어 영역에 에러메시지를 추가합니다.
"en" 설정 시 영어 영역에 에러메시지를 추가합니다.
"ja" 설정 시 일본어 영역에 에러메시지를 추가합니다.
"zh" 설정 시 중국어 영역에 에러메시지를 추가합니다.
```

**Return**

없음

**Remark**

- 추가된 에러메시지에 대응하는 에러를 발생시키려면 Library 를 수정하여야 합니다.


---

### base64Decode

> NexacroAPI > Method > base64Decode

**Description**

Base64 형식으로 인코딩된 데이터를 디코딩 하는 메소드입니다.

**Syntax**

```javascript
nexacro.base64Decode( strData )
```

**Parameters**

```
Base64 형식으로 인코딩된 데이터를 설정합니다.
```

**Return**

디코딩된 결과 데이터를 반환합니다.


---

### base64Encode

> NexacroAPI > Method > base64Encode

**Description**

데이터를 Base64 형식으로 인코딩 하는 메소드입니다.

**Syntax**

```javascript
nexacro.base64Encode( strData )
```

**Parameters**

```
Base64 형식으로 인코딩할 데이터를 설정합니다.
```

**Return**

Base64 형식으로 인코딩된 오브젝트를 반환합니다.


---

### ceil

> NexacroAPI > Method > ceil

**Description**

지정된 자릿수 또는 소수점을 기준으로 올림한 값을 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.ceil( nVal [,nFractionDigit] );
```

**Parameters**

```
올림을 수행할 숫자값을 설정합니다.
```

**Return**

올림한 값을 반환합니다.

**Remark**

- 자릿수 지정 시 오차가 발생할 수 있습니다.


---

### deleteCacheDB

> NexacroAPI > Method > deleteCacheDB

**Description**

어플리케이션에서 사용한 Cache DB 파일 및 관련된 임시파일을 삭제하는 메소드입니다.

**Syntax**

```javascript
nexacro.deleteCacheDB()
```

**Parameters**

nexacro.deleteCacheDB() ;

**Return**

없음

**Remark**

- Cache 경로의 ".db" 파일을 삭제한 후 새로 작성합니다.
  추가로 Cache 경로에서 현재 어플리케이션의 키값에 해당하는 하위폴더의 모든 파일을 함께 삭제합니다.


---

### flashWindow

> NexacroAPI > Method > flashWindow

**Description**

작업표시줄에서 해당 어플리케이션 아이콘을 깜빡이게 하는 메소드입니다.

**Syntax**

```javascript
nexacro.flashWindow( enumType, nCount, [,nInterval] )
```

**Parameters**

```
어플리케이션이 아이콘이 깜빡이는 방식을 설정합니다.

"count" 설정 시 지정된 횟수만큼 깜빡인 후 종료됩니다.
"timer" 설정 시 "stop" 값으로 flashWindow() 메소드를 실행할 때까지 계속 깜빡입니다.
"timernofg" 설정 시 해당 어플리케이션이 활성화 될 때까지 깜빡입니다.
"stop" 설정 시 현재 깜빡이는 동작을 중지합니다.
```

**Return**

없음

**Remark**

- 사용자에게 알릴 작업이 있는 경우에 사용합니다.


---

### floor

> NexacroAPI > Method > floor

**Description**

지정된 자릿수 또는 소수점을 기준으로 내림한 값을 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.floor( nVal [,nFractionDigit] );
```

**Parameters**

```
내림을 수행할 숫자값을 설정합니다.
```

**Return**

내림한 값을 반환합니다.

**Remark**

- 자릿수 지정 시 오차가 발생할 수 있습니다.


---

### gc

> NexacroAPI > Method > gc

**Description**

메모리에서 사용하지 않는 데이터를 즉시 삭제하는 메소드입니다.

**Syntax**

```javascript
nexacro.gc()
```

**Parameters**

nexacro.gc() ;

**Return**

없음

**Remark**

- 팝업되었던 Form, ChildFrame, DataSet 등 현재 사용되지 않고 메모리에 남아 있는 데이터를 명시적으로 삭제하기 위한 메소드입니다.

- gc() 메소드는 방법에 따라 성능에 영향을 미칠 수 있으므로 주의하여 사용하여야 합니다.


---

### getApplication

> NexacroAPI > Method > getApplication

**Description**

현재 실행된 어플리케이션의 Application 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.getApplication()
```

**Parameters**

var objApp = nexacro.getApplication() ;

**Return**

Application 오브젝트를 반환합니다.


---

### getCookieVariable

> NexacroAPI > Method > getCookieVariable

**Description**

Environment 의 Cookies 영역에 정의된 쿠키의 값을 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.getCookieVariable( strID [, bSecure] )
```

**Parameters**

```
값을 가져올 쿠키변수의 ID 를 문자열로 설정합니다.
```

**Return**

Cookies 영역에 정의된 쿠키변수의 값을 반환합니다.

조건에 만족하는 쿠키변수가 없을 경우 undefined 를 반환합니다.

**Remark**

◆ web runtime environment 제약

- Secure 속성이 설정된 상태로 서버에서 받은 Cookie 는 Cookies 영역에 추가되거나 변경되지 않습니다.

- Cross Domain 상황이면 Cookies 영역의 Cookie 가 서버로 전송되거나 서버에서 받은 값으로 변경되지 않습니다.


---

### getEnableWheelZoom

> NexacroAPI > Method > getEnableWheelZoom

**Description**

지정된 Frame 이 속한 window 의 Zoom 기능 설정여부를 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.getEnableWheelZoom( objFrame )
```

**Parameters**

```
Zoom 기능 설정여부를 확인할 window 에 속한 Frame 을 오브젝트 형태로 설정합니다.

동일한 window 에 속한 Frame 중 어느것을 설정하여도 동일한 결과를 반환합니다.
```

**Return**

지정된 Frame 이 속한 window 에 Zoom 기능이 설정되어 있으면 true 를 반환합니다.

지정된 Frame 이 속한 window 에 Zoom 기능이 설정되어 있지 않으면 false 를 반환합니다.

**Remark**

- Zoom 기능의 설정을 변경하지 않았다면 true 로 적용됩니다.

- Zoom 기능은 window 단위로 설정 할 수 있습니다.
   따라서, open(), showModalWindow() 등의 메소드로 오픈된 별도의 window 를 갖는 팝업창은 Zoom 기능을 따로 설정하여야 합니다.

**See Also**

NexacroAPI.setEnableWheelZoom


---

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

### getHTTPHeaderVariable

> NexacroAPI > Method > getHTTPHeaderVariable

**Description**

Environment 의 HTTP Header 영역에 정의된 변수의 값을 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.getHTTPHeaderVariable( strID )
```

**Parameters**

```
값을 가져올 변수의 ID 를 문자열로 설정합니다.
```

**Return**

없음


---

### getLogFilePath

> NexacroAPI > Method > getLogFilePath

**Description**

앱에서 로그 파일을 저장하는 경로를 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.getLogFilePath()
```

**Parameters**

var strLogFilePath = nexacro.getLogFilePath();

**Return**

로그 파일이 저장된 경로를 문자열로 반환합니다.

**Remark**

- 윈도우 운영체제에서 로그 파일을 읽기 위해서는 Environment filesecurelevel 속성값이 "all"로 설정되어 있어야 합니다. 최초 로그 파일 접근 시 샌드박스 창이 표시됩니다.

- VirtualFile 오브젝트를 사용해 저장한 로그 파일 정보를 확인할 수 있습니다. 아래 예제를 참고하세요.

**Example**



---

### getPopupFrames

> NexacroAPI > Method > getPopupFrames

**Description**

파라미터로 설정한 Frame 이 속한 Window 를 기준으로 팝업된 ChildFrame 을 Collection 형태로 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.getPopupFrames( [objFrame] )
```

**Parameters**

```
기준 Frame 을 오브젝트 형태로 설정합니다.

값 생략 시 Remark 에 설명된 조건에 따라 적용되는 Frame 이 달라질 수 있으므로 주의하여야 합니다.
```

**Return**

파라미터로 설정한 Frame 이 속한 Window 에서 팝업으로 실행된 Frame 을 Collection 형태로 반환합니다.

objFrame 파라미터에 null 또는 잘못된 값을 설정할 경우 undefined 를 반환합니다.

**Remark**

- 팝업된 ChildFrame 의 리스트는 Window 를 기준으로 관리됩니다.
   따라서 objFrame 파라미터에 서로 다른 Frame 을 설정해도 같은 Window 에 있으면 동일한 결과값을 반환합니다.
   예를 들어 동일한 Window 에 속한 "A", "B" Frame 에서 각각 팝업을 했을 때 objFrame 에 어떤 Frame 을 설정해도 동일한 결과값을 반환합니다.
   그러나 Window 가 다른 "A", "B" Frame 에서 각각 팝업을 했을 때는 objFrame 에 설정한 Frame 에 따라 다른 결과값을 반환합니다.

- objFrame 파라미터를 생략했을 경우 getPopupFrames() 메소드가 실행되는 시점에 활성화 되어 있는 Window 를 기준으로 결과값을 반환하므로 특정 조건일 때 결과값이 달라질 수 있습니다.
   예를 들어 "A" Frame 에서 open() 메소드로 별도 Window 가 있는 "B" Frame 을 팝업한 상태에서 "A" Frame 에 정의된 스크립트롤 호출하여 "A" Frame" 에서 getPopupFrames() 메소드가 실행되어도 활성화 된 Window 가 기준이 되므로 "B" Frame 을 기준으로 결과값을 반환할 수 있습니다.
   그러므로 objFrame 파라미터를 생략하지 않을 것을 권장합니다.

- open(), showModalWindow() 메소드는 부모와 별도의 Window 를 갖고 팝업됩니다.
   showModal(), showModalSync() 메소드는 부모와 동일한 Window 로 팝업됩니다.

- open(), showModal(), showModalSync(), showModalWindow() 메소드로 팝업된 ChildFrame 은
   해당 메소드 실행 시 objParentFrame 파라미터에 설정한 Frame 이 속한 Window 의 팝업리스트에 추가됩니다.

- 결과값으로 반환된 오브젝트는 Collection 접근방식을 사용할 수 있습니다.
   ReturnObj[0], ReturnObj["Frame0"], ReturnObj.length 등의 방법을 사용합니다.

**See Also**

ChildFrame.showModalNexacroAPI.open


---

### getPrivateProfile

> NexacroAPI > Method > getPrivateProfile

**Description**

어플리케이션에서 저장한 개인화 데이터를 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.getPrivateProfile( strKey )
```

**Parameters**

```
개인화 데이터를 저장할 때 설정했던 키값을 설정합니다.
```

**Return**

인수로 전달된 키값에 해당하는 개인화 데이터를 저장 시 설정한 데이터 타입으로 반환합니다.

**Remark**

- 개인화 데이터는 어플리케이션이 구동될 때 설정한 Key 값 별로 따로 관리되며 "nexacro.xml" 파일에 저장됩니다.

- "nexacro.xml" 파일은 사용자별로 정보를 관리하기 위해 사용하는 XML 형식의 파일입니다.
  Windows 운영체제의 경우 C:\Users\[UserName]\AppData\LocalLow\TOBESOFT\Nexacro N\24 위치에 파일이 생성됩니다.

- 웹브라우저 환경일 경우 브라우저의 Local Storage 영역에 개인화 데이터를 저장합니다.

**See Also**

NexacroAPI.removePrivateProfileNexacroAPI.setPrivateProfile


---

### getProjectPath

> NexacroAPI > Method > getProjectPath

**Description**

애플리케이션의 실행 경로를 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.getProjectPath()
```

**Parameters**

var strPrjPath = nexacro.getProjectPath();

**Return**

애플리케이션의 실행 경로를 문자열로 반환합니다.


---

### getStringResourceValue

> NexacroAPI > Method > getStringResourceValue

**Description**

StringResource에서 지정한 Key 값에 해당하는 문자열을 반환하는 메서드입니다.

**Syntax**

```javascript
nexacro.getStringResourceValue(strKey);
```

**Parameters**

```
StringResource에서 가져올 문자열에 해당하는 Key 값을 설정합니다.
```

**Return**

StringResource에서 지정한 Key 값에 해당하는 문자열을 반환합니다.


---

### getTextSize

> NexacroAPI > Method > getTextSize

**Description**

인수로 전달된 값을 기준으로 텍스트가 표시되는 영역의 크기를 계산하여 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.getTextSize( strText, strFont [, nLimitWidth, strWordWrap [, refObj]] );
nexacro.getTextSize( strText, strFont [, refObj] );
```

**Parameters**

```
화면에 표시될 텍스트를 설정합니다.
```

**Return**

인수값을 기준으로 계산된 텍스트가 표시되는 영역의 크기 정보를 오브젝트로 반환합니다.

반환된 오브젝트의 "nx" 속성에 텍스트의 가로크기가 저장됩니다.
반환된 오브젝트의 "ny" 속성에 텍스트의 세로크기가 저장됩니다.

**Remark**

- Theme 나 XCSS 로 설정된 속성값은 스크립트로 접근할 수 없습니다.
   따라서 strFont 에 컴포넌트의 font 속성을 사용하려면 넥사크로 스튜디오나 스크립트로 font 속성을 설정하여야 합니다.

- nLimitWidth, strWordWrap 값을 설정하면 줄바꿈이 적용되어 텍스트가 표시되는 영역의 크기가 계산됩니다.


---

### getWheelZoom

> NexacroAPI > Method > getWheelZoom

**Description**

지정된 Frame 이 속한 window 의 Zoom 배율을 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.getWheelZoom( objFrame )
```

**Parameters**

```
Zoom 배율을 확인할 window 에 속한 Frame 을 오브젝트 형태로 설정합니다.

동일한 window 에 속한 Frame 중 어느것을 설정하여도 동일한 결과를 반환합니다.
```

**Return**

지정된 Frame 이 속한 window 의 Zoom 배율을 "%" 단위의 숫자로 반환합니다.

**Remark**

- Zoom 배율을 변경하지 않았다면 100 으로 적용됩니다.

- Zoom 기능은 window 단위로 설정 할 수 있습니다.
   따라서, open(), showModalWindow() 등의 메소드로 오픈된 별도의 window 를 갖는 팝업창은 Zoom 배율을 따로 설정하여야 합니다.

**See Also**

NexacroAPI.setWheelZoom


---

### isAlpha

> NexacroAPI > Method > isAlpha

**Description**

인수로 전달된 문자코드 또는 문자열이 알파벳인지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.isAlpha( nChar )
nexacro.isAlpha( strChar )
```

**Parameters**

```
알파벳에 대응하는 코드값인지 확인 할 10진수 숫자를 설정합니다.
```

**Return**

전달된 문자코드 또는 문자열이 알파벳이면 "true" 를 반환합니다.
전달된 문자코드 또는 문자열이 알파벳이 아니면 "false" 를 반환합니다.


---

### isAlphaNumeric

> NexacroAPI > Method > isAlphaNumeric

**Description**

인수로 전달된 문자코드 또는 문자열이 알파벳 또는 숫자인지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.isAlphaNumeric( nChar )
nexacro.isAlphaNumeric( strChar )
```

**Parameters**

```
알파벳 또는 숫자에 대응하는 코드값인지 확인 할 10진수 숫자를 설정합니다.
```

**Return**

전달된 문자코드가 알파벳 또는 숫자이면 "true" 를 반환합니다.
전달된 문자열이 알파벳과 숫자로만 이루어져 있다면 "true" 를 반환합니다.

전달된 문자코드가 알파벳 또는 숫자가 아니면 "false" 를 반환합니다.
전달된 문자열에 알파벳과 숫자 이외의 문자가 있다면 "false" 를 반환합니다.


---

### isExistCookieVariable

> NexacroAPI > Method > isExistCookieVariable

**Description**

Environment 의 Cookies 영역에서 특정 쿠키변수의 존재여부를 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.isExistCookieVariable( strID [, bSecure] )
```

**Parameters**

```
존재여부를 확인할 쿠키변수의 ID 를 문자열로 설정합니다.
```

**Return**

Cookies 영역에 쿠키변수가 존재하면 true 를 반환합니다.
Cookies 영역에 쿠키변수가 존재하지 않으면 false 를 반환합니다.

bSecure 설정 시 bSecure 에 설정한 값까지 일치할 경우 true 를 반환합니다.


---

### isLower

> NexacroAPI > Method > isLower

**Description**

인수로 전달된 문자코드 또는 문자열이 알파벳 소문자인지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.isLower( nChar )
nexacro.isLower( strChar )
```

**Parameters**

```
알파벳 소문자에 대응하는 코드값인지 확인 할 10진수 숫자를 설정합니다.
```

**Return**

전달된 문자코드 또는 문자열이 알파벳 소문자이면 "true" 를 반환합니다.
전달된 문자코드 또는 문자열이 알파벳 소문자가 아니면 "false" 를 반환합니다.


---

### isNumeric

> NexacroAPI > Method > isNumeric

**Description**

인수로 전달된 문자코드 또는 문자열이 숫자인지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.isNumeric( nChar )
nexacro.isNumeric( strChar )
```

**Parameters**

```
숫자에 대응하는 코드값인지 확인 할 10진수 숫자를 설정합니다.
```

**Return**

전달된 문자코드 또는 문자열이 숫자이면 "true" 를 반환합니다.
전달된 문자코드 또는 문자열이 숫자가 아니면 "false" 를 반환합니다.


---

### isSpace

> NexacroAPI > Method > isSpace

**Description**

인수로 전달된 문자코드 또는 문자열이 공백문자인지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.isSpace( nChar )
nexacro.isSpace( strChar )
```

**Parameters**

```
공백문자에 대응하는 코드값인지 확인 할 10진수 숫자를 설정합니다.
```

**Return**

전달된 문자코드 또는 문자열이 공백문자이면 "true" 를 반환합니다.
전달된 문자코드 또는 문자열이 공백문자가 아니면 "false" 를 반환합니다.


---

### isUpper

> NexacroAPI > Method > isUpper

**Description**

인수로 전달된 문자코드 또는 문자열이 알파벳 대문자인지 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.isUpper( nChar );
nexacro.isUpper( strChar );
```

**Parameters**

```
알파벳 대문자에 대응하는 코드값인지 확인 할 10진수 숫자를 설정합니다.
```

**Return**

전달된 문자코드 또는 문자열이 알파벳 대문자이면 "true" 를 반환합니다.
전달된 문자코드 또는 문자열이 알파벳 대문자가 아니면 "false" 를 반환합니다.


---

### loadStringResource

> NexacroAPI > Method > loadStringResource

**Description**

지정한 언어에 해당하는 StringResource를 로드하는 메서드입니다.

**Syntax**

```javascript
nexacro.loadStringResource(strLang[, strUrl]);
nexacro.loadStringResource(strUrl);
```

**Parameters**

```
StringResource에서 로드할 대상 언어를 설정합니다.

strLang 파라미터 값만 설정한 경우 아래와 같은 상황에서는 메서드가 동작하지 않습니다.
- 제너레이트 된 StringResource 파일이 없는 경우
- Environment.usestringresource 속성값이 false인 경우
```

**Return**

없음

**Remark**

- 첫 번째 파라미터 값이 URL 문자열 형태인지 구분해서 strLang 또는 strUrl 파라미터로 처리합니다.

- strUrl 파라미터 값 설정 시 반환되는 JSON 파일에는 지정한 언어 데이터가 포함되어야 합니다.
  지정된 언어 데이터를 찾지 못하면 Environment.onerror 이벤트에서 에러로 처리합니다.
  예를 들어 지정한 언어가 en인 경우 JSON 파일은 아래와 같은 형태여야 합니다.

  {
      "en": {
              "btn_0001" : "Example",
              "btn_0002" : "Source",
              "btn_0003" : "Script",
              "msg_0001" : "The example application was tested on the Nexaro N",
              "msg_0002" : "version."
      }
  }


---

### loadStyle

> NexacroAPI > Method > loadStyle

**Description**

어플리케이션에 XCSS 파일을 로드하여 적용하는 메소드입니다.

**Syntax**

```javascript
nexacro.loadStyle( strURL )
```

**Parameters**

```
어플리케이션에 적용시킬 XCSS 파일경로를 "xcssrc::[FileID]" 형식으로 설정합니다.

파일경로의 "xcssrc::" 는 고정 Prefix 값으로 수정할 수 없습니다.
XCSS 파일은 Resource Service 영역의 "./_resource_/_xcss_" 에 위치하여야 합니다.
```

**Return**

없음

**Remark**

- Form을 로드하기 전에 loadStyle 메소드를 실행해 새로운 스타일을 적용하는 용도로 사용할 수 있습니다.

- 열려있는 Form에 새로운 스타일을 적용하기 위해 loadStyle 메소드를 사용한다면 아래와 같은 제약이 있을 수 있습니다.
  > 크기나 위치에 영향을 줄 수 있는 스타일 속성 중 일부는 loadStyle 메소드를 실행해도 열려있는 Form에 적용되지 않습니다.
  > 스타일 속성을 모두 적용하려면 reload 메소드를 실행해야 합니다. 단, reload 메소드 실행 시에는 화면이 초기화되며 동적으로 추가된 컴포넌트는 유지되지 않습니다.
  > loadStyle 메소드 실행 후 reload 메소드를 실행하지 않고 동적으로 컴포넌트를 추가하는 경우에는 추가한 컴포넌트에 한정해 새로운 스타일이 정상적으로 적용됩니다.

- 메소드 실행 시 기존에 적용된 XCSS 에 새로운 XCSS 설정값을 중첩하여 적용합니다.

- "xcssrc" 는 User Prefix 로 사용하실 수 없습니다.


---

### open

> NexacroAPI > Method > open

**Description**

동적으로 생성한 ChildFrame 을 Modeless Window 로 표시하는 메소드입니다.

**Syntax**

```javascript
nexacro.open( strID, strFormURL, objParentFrame, {objArguList}, strOpenStyle, nLeft, nTop [, nWidth, nHeight [, objOpener [, strExtOpenStyle [, strReturnType ]]]])
```

**Parameters**

```
Modeless Window 로 표시할 ChildFrame 의 ID 를 문자열로 설정합니다.
```

**Return**

returnType 설정값에 따라 반환값 타입이 달라집니다.

- 설정값 없음: (Boolean) 
  Modeless Window 정상 표시 여부를 반환합니다.

- "promise": (Object)
  Promise 오브젝트를 반환합니다.
  Promise 오브젝트는 자바스크립트 표준 내장 객체입니다.
  내부적으로 resolve 수행 시점은 Modeless Window가 종료되는 시점입니다.

**Remark**

- objParentFrame 파라미터에 null 설정 시 팝업창으로 표시된 ChildFrame에 부모는 설정되지 않지만, MainFrame 오브젝트의 Window에는 팝업된 ChildFrame이 팝업리스트에 추가됩니다.

- ChildFrame 의 autosize 속성값이 true 인 경우 nWidth, nHeight 파라미터값을 생략해도 자동으로 Form 의 크기에 맞춰집니다.
   그렇지 않은 경우 nWidth, nHeight 의 기본값이 0 이므로 화면에 표시되지 않을 수 있습니다. (autosize 속성은 Default 값이 true 입니다)

- strOpenStyle 파라미터에서 환경에 따른 제약을 받는 속성은 open() 메소드로 생성할 때만 적용되는 제약입니다.
   각 속성의 실제 지원환경은 각 속성의 Chm 페이지를 확인하시기 바랍니다.


◆ Desktop WRE 제약

- strOpenStyle 파라미터에 resizable 속성값을 false로 지정하여도 항상 true로 동작합니다.

**See Also**

ChildFrame.layeredChildFrame.taskbariconChildFrame.topmost


---

### parseDate

> NexacroAPI > Method > parseDate

**Description**

날짜형식의 문자열을 분석해 1970년 1월 1일 자정부터 해당 날짜 사이의 시간을 밀리초로 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.parseDate( strDate )
```

**Parameters**

```
날짜형식의 문자열을 설정합니다.

유효하지 않은 날짜형식의 문자열은 오류로 처리됩니다.
```

**Return**

1970년 1월 1일 자정부터 인수로 전달된 날짜 사이의 시간을 밀리초로 반환합니다.

유효하지 않은 날짜형식으로 오류로 처리되면 undefined 를 반환합니다.

**Remark**

- 메소드에 사용하는 문자열은 ISO 8601 날짜 형식 또는 RFC2822 / IETF 날짜 형식을 따릅니다.

  * ECMA 표준 
    [http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15]
  * ISO 8601 날짜형식 : YYYY-MM-DD'T'hh:mm:ss.sss'Z' 
    [http://www.iso.org/iso/home/standards/iso8601.htm]
  * RFC2822 / IETF 날짜형식 : 'May 21, 2012', 'Mon, 21 May 2012 03:20:00 +0900'
    [https://datatracker.ietf.org/doc/html/rfc2822#page-14]
  * Mozilla 웹브라우저 지원 형식
    [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse]


◆ WRE 제약

- ECMA5 표준에서는 ISO 8601 날짜 형식을 따르도록 명시되어 있습니다. 
  하지만 이전 ECMA 표준에서는 Date 표준 내장 객체의 toString 메소드 실행 결과를 해석하는 것으로 명시되어 있어 브라우저에 따라 동작이 다를 수 있으며 오류가 발생할 수 있습니다.

- 브라우저에 상관없이 같은 결과를 얻기 위해서는 아래 날짜 형식 문자열을 사용해야 합니다.
  YYYY-MM-DD (ISO 8601 날짜 형식, 예: 2021-06-29)
  YYYY-MM-DD'T'hh:mm:ss.sss'Z' (ISO 8601 조합된 UTC 날짜 및 시간, 예: 2021-06-29T11:00:00.000Z)
  MMM DD, YYYY (예: May 21, 2012)
  EEE, DD MMM YYYY hh:mm:ss Z (예: Mon, 21 May 2012 03:20:00 +0900)
  EEE, DD MMM YYYY hh:mm:ss z (예: Wed, 09 Aug 1995 00:00:00 GMT)
  EEE, DD MMM YYYY hh:mm:ss (예: Wed, 09 Aug 1995 00:00:00)


---

### removeCookieVariable

> NexacroAPI > Method > removeCookieVariable

**Description**

Environment 의 Cookies 영역에서 쿠키변수를 제거하는 메소드입니다.

**Syntax**

```javascript
nexacro.removeCookieVariable( strID [, bSecure] )
```

**Parameters**

```
제거될 쿠키변수의 ID 를 설정합니다.
```

**Return**

없음

**Remark**

- Application 영역에 있는 변수를 제거하기 위해서는 removeVariable() 메소드를 사용하여야 합니다.

- Environment 영역에 있는 변수를 제거하기 위해서는 removeEnvironmentVariable() 메소드를 사용하여야 합니다.


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

### removeHTTPHeaderVariable

> NexacroAPI > Method > removeHTTPHeaderVariable

**Description**

Environment 의 HTTP Header 영역에서 변수를 제거하는 메소드입니다.

**Syntax**

```javascript
nexacro.removeHTTPHeaderVariable( strID )
```

**Parameters**

```
제거될 변수의 ID 를 설정합니다.
```

**Return**

없음


---

### removePrivateProfile

> NexacroAPI > Method > removePrivateProfile

**Description**

애플리케이션에서 저장한 개인화 데이터를 삭제하는 메소드입니다.

**Syntax**

```javascript
nexacro.removePrivateProfile( strKey )
```

**Parameters**

```
삭제할 개인화 데이터의 키값을 설정합니다.
```

**Return**

없음

**See Also**

NexacroAPI.getPrivateProfileNexacroAPI.setPrivateProfile


---

### replaceAll

> NexacroAPI > Method > replaceAll

**Description**

인수로 전달된 문자열에서 특정 문자열을 새 문자열로 모두 변환하여 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.replaceAll( strText, strOrgText, strRepText );
```

**Parameters**

```
변환을 수행할 전체 문자열을 설정합니다.
```

**Return**

특정 문자열을 새 문자열로 변환한 문자열을 반환합니다.


---

### round

> NexacroAPI > Method > round

**Description**

지정된 자릿수 또는 소수점을 기준으로 반올림한 값을 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.round( nVal [,nFractionDigit] );
```

**Parameters**

```
반올림을 수행할 숫자값을 설정합니다.
```

**Return**

반올림한 값을 반환합니다.

**Remark**

- 자릿수 지정 시 오차가 발생할 수 있습니다.


---

### setCookieVariable

> NexacroAPI > Method > setCookieVariable

**Description**

Environment 의 Cookies 영역에 쿠키를 추가하는 메소드입니다.

**Syntax**

```javascript
nexacro.setCookieVariable( strID, varVal [, bSecure] )
```

**Parameters**

```
추가될 쿠키변수의 ID 를 설정합니다.
```

**Return**

없음

**Remark**

- Application 영역에 변수를 추가하기 위해서는 addVariable() 또는 setVariable() 메소드를 사용하여야 합니다.

- Environment 영역에 변수를 추가하기 위해서는 setEnvironmentVariable() 메소드를 사용하여야 합니다.

- strID 에 설정한 쿠키변수가 존재할 경우에는 쿠키변수의 값을 변경합니다.


◆ web runtime environment 제약

- Secure 속성이 설정된 상태로 서버에서 받은 Cookie 는 Cookies 영역에 추가되거나 변경되지 않습니다.

- Cross Domain 상황이면 Cookies 영역의 Cookie 가 서버로 전송되거나 서버에서 받은 값으로 변경되지 않습니다.


---

### setEnableWheelZoom

> NexacroAPI > Method > setEnableWheelZoom

**Description**

지정된 Frame 이 속한 window 의 Zoom 기능을 설정하는 메소드입니다.

**Syntax**

```javascript
nexacro.setEnableWheelZoom( objFrame, bZoom)
```

**Parameters**

```
Zoom 기능을 설정할 window 에 속한 Frame 을 오브젝트 형태로 설정합니다.

동일한 window 에 속한 Frame 중 어느것을 설정하여도 동일하게 설정됩니다.
```

**Return**

없음

**Remark**

- Zoom 기능의 설정을 변경하지 않았다면 true 로 적용됩니다.

- Zoom 기능은 window 단위로 설정 할 수 있습니다.
   따라서, open(), showModalWindow() 등의 메소드로 오픈된 별도의 window 를 갖는 팝업창은 Zoom 기능을 따로 설정하여야 합니다.

- Zoom 기능이 활성화 되어 있을 때 Control 키를 누른 상태에서 휠버튼을 회전시키면 window 화면단위로 Zoom 이 발생합니다.
   Zoom 발생 시 50%~200% 범위 내에서 10% 단위로 Zoom 배율이 변경됩니다.

- Zoom 배율이 100% 가 아닌 경우 성능이 저하될 수 있으므로 주의하여야 합니다.

- Zoom 배율이 적용된 상태에서 Zoom 기능을 비활성화 하여도 적용된 Zoom 배율은 유지됩니다.

- 특정 Zoom 배율로 확대/축소하려면 setWheelZoom() 메소드를 사용하여야 합니다.


◆ web runtime environment 제약

- web runtime environment 는 지원하지 않는 메소드입니다.
   web runtime environment 는 웹브라우저에서 제공하는 Zoom 기능을 사용하므로 
   Control 키를 누른 상태에서 휠버튼을 회전시키면 전체화면에서 50/75/100/125/150/175/200 배율로 Zoom 이 발생합니다.

**See Also**

NexacroAPI.getEnableWheelZoomNexacroAPI.setWheelZoom


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

### setHTTPHeaderVariable

> NexacroAPI > Method > setHTTPHeaderVariable

**Description**

Environment 의 HTTP Header 영역에 변수를 추가하는 메소드입니다.

**Syntax**

```javascript
nexacro.setHTTPHeaderVariable( strID, varVal )
```

**Parameters**

```
추가될 HTTP Header 변수의 ID 를 설정합니다.
```

**Return**

없음

**Remark**

- HTTP Header 영역에 정의된 변수는 HTTP 통신 시 Header 영역에 추가됩니다.
   Cross Domain 상황인 경우는 Header 영역에 변수가 추가되지 않습니다.

- Nexacro Runtime Environment 환경에서 실행 시에는 아래 오브젝트 통신 처리 시 Header 영역에 변수를 추가할 수 있습니다.
(Web Runtime Environment 환경에서 실행 시에는 아래 오브젝트 통신 처리 시 Header 영역에 변수를 추가할 수 없습니다).
FileUpload, FileDownload, ExcelExportObject, ExcelImportObject, FileUpTransfer, FileDownTransfer


---

### setInitialVariable

> NexacroAPI > Method > setInitialVariable

**Description**

웹브라우저 환경에서 어플리케이션이 로드되기 전 Global 영역 변수에 값을 설정하는 메소드입니다.

**Syntax**

```javascript
nexacro.setInitialVariable( strType, strID, varVal )
```

**Parameters**

```
설정할 변수의 Global 영역 위치를 문자열로 설정합니다.

“environment” 설정 시 Environment 의 Variables 영역에 변수를 설정합니다.
“cookie” 설정 시 Environment 의 Cookies 영역에 변수를 설정합니다.
“httpheader” 설정 시 Environment 의 HTTPHeader 영역에 변수를 설정합니다.
“application” 설정 시 Application 의 Variables 영역에 변수를 설정합니다.
```

**Return**

없음

**Remark**

- 어플리케이션이 로드 된 후에는 사용할 수 없는 메소드입니다.

- 외부 HTML 의 oninitframework 함수에서 어플리케이션 로딩 전에 넥사크로의 Global 영역 변수값을 설정할 때 사용하는 메소드입니다.

- 어플리케이션 내부에서는 setCookieVariable(), setEnvironmentVariable(), setHTTPHeaderVariable(), setVariable() 메소드를 사용하여야 합니다.


---

### setPrivateProfile

> NexacroAPI > Method > setPrivateProfile

**Description**

어플리케이션에서 개인화 데이터를 저장하는 메소드입니다.

**Syntax**

```javascript
nexacro.setPrivateProfile( strKey, varVal )
```

**Parameters**

```
개인화 데이터를 저장하기 위한 키값을 설정합니다.

XML 태그명으로 사용되므로 XML 태그명에서 사용 할 수 없는 문자는 설정할 수 없습니다.
또한, ":" 문자를 설정할 수 없습니다.
```

**Return**

개인화 데이터 저장에 성공하면 "true" 를 반환합니다.
개인화 데이터 저장에 실패하면 "false" 를 반환합니다.

**Remark**

- 개인화 데이터는 어플리케이션이 구동될 때 설정한 Key 값 별로 따로 관리되며 "nexacro.xml" 파일에 저장됩니다.

- "nexacro.xml" 파일은 사용자별로 정보를 관리하기 위해 사용하는 XML 형식의 파일입니다.
  Windows 운영체제의 경우 C:\Users\[UserName]\AppData\LocalLow\TOBESOFT\Nexacro N\24 위치에 파일이 생성됩니다.

- 웹브라우저 환경일 경우 브라우저의 Local Storage 영역에 개인화 데이터를 저장합니다.

**See Also**

NexacroAPI.getPrivateProfileNexacroAPI.removePrivateProfile


---

### setProtocolVar

> NexacroAPI > Method > setProtocolVar

**Description**

통신에 사용되는 Protocol 어답터에 설정값을 전달하는 메소드입니다.

**Syntax**

```javascript
nexacro.setProtocolVar(strName, strKey, strValue) ;
```

**Parameters**

```
TypeDefinition 의 Protocols 영역에 정의된 Protocol 어답터 중 설정값을 전달할 Protocol 의 "Protocol ID" 를 설정합니다.
```

**Return**

없음


---

### setRenderingType

> NexacroAPI > Method > setRenderingType

**Description**

Windows NRE에서 렌더링 방식을 설정하는 메소드입니다.

**Syntax**

```javascript
nexacro.setRenderingType( nType )
```

**Parameters**

```
Windows 넥사크로의 렌더링 방식을 0 또는 1 로 설정합니다.

0 설정 시 RealTime 방식(기존과 동일)으로 주기적으로 렌더링을 실행합니다.
1 설정 시 Event 방식으로 내부 규칙에 의해 렌더링을 실행합니다.
```

**Return**

없음

**Remark**

- Windows NRE 만 사용할 수 있는 메소드입니다.

- 화면의 복잡도가 높아 표시되어야 할 내용이 많은 경우 성능을 위하여 렌더링을 제한할 필요가 있을 때 사용하는 메소드입니다.

- 렌더링을 Event 방식으로 설정 시 다른 작업보다 렌더링 순위가 낮아질 수 있습니다.


---

### setTimeout

> NexacroAPI > Method > setTimeout

**Description**

일정 시간 이후 콜백 함수를 한 번만 실행하는 타이머 메서드입니다.

**Syntax**

```javascript
nexacro.setTimeout(objContext, objCallbackFunc, nDelay);
```

**Parameters**

```
콜백 함수가 실행될 때 this로 바인딩될 오브젝트를 설정합니다.
```

**Return**

없음


---

### setWheelZoom

> NexacroAPI > Method > setWheelZoom

**Description**

지정된 Frame 이 속한 window 의 Zoom 배율을 설정하는 메소드입니다.

**Syntax**

```javascript
nexacro.setWheelZoom( objFrame, nZoomScale)
```

**Parameters**

```
Zoom 배율을 설정할 window 에 속한 Frame 을 오브젝트 형태로 설정합니다.

동일한 window 에 속한 Frame 중 어느것을 설정하여도 동일하게 설정됩니다.
```

**Return**

없음

**Remark**

- Zoom 배율을 변경하지 않았다면 100 으로 적용됩니다.

- Zoom 기능은 window 단위로 설정 할 수 있습니다.
   따라서, open(), showModalWindow() 등의 메소드로 오픈된 별도의 window 를 갖는 팝업창은 Zoom 배율을 따로 설정하여야 합니다.

- Zoom 배율이 100% 가 아닌 경우 성능이 저하될 수 있으므로 주의하여야 합니다.

- Zoom 기능이 비활성화된 상태에서도 setWheelZoom() 메소드를 사용하여 Zoom 배율을 변경할 수 있습니다.

- Zoom 배율이 적용된 상태에서 Zoom 기능을 비활성화 하여도 적용된 Zoom 배율은 유지됩니다.

**See Also**

NexacroAPI.getWheelZoomNexacroAPI.setEnableWheelZoom


---

### stripQuote

> NexacroAPI > Method > stripQuote

**Description**

인수로 전달된 문자열의 양쪽 끝에서 따옴표를 제거한 후 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.stripQuote( strText )
```

**Parameters**

```
따옴표를 제거 할 문자열을 설정합니다.
```

**Return**

전달된 문자열의 양쪽 끝에서 따옴표를 제거하여 반환합니다.

**Remark**

- 큰따옴표(Double Quotes), 작은따옴표(Single Quotes) 모두 제거하는 메소드입니다.

- 양쪽 끝에 있는 따옴표는 같은 형식이어야 합니다.
  앞쪽에는 큰따옴표가 있고 뒷쪽에는 작은따옴표가 있거나 그 반대라면 메소드는 수행되지 않습니다.


---

### toNumber

> NexacroAPI > Method > toNumber

**Description**

인수로 전달된 문자열을 숫자로 변환하여 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.toNumber( varValue [, varNanVal [, varPinfVal [, varNinfVal]]] )
```

**Parameters**

```
숫자로 변환할 문자열을 설정합니다.
```

**Return**

문자열을 숫자로 변환하여 반환합니다.


---

### trim

> NexacroAPI > Method > trim

**Description**

인수로 전달된 문자열의 양쪽 끝에서 공백문자 또는 지정된 문자를 제거한 후 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.trim( strText [,strChar] )
```

**Parameters**

```
양쪽 끝에서 공백문자 또는 지정된 문자를 제거 할 문자열을 설정합니다.
```

**Return**

문자열의 양쪽 끝에서 공백문자 또는 지정된 문자가 제거된 문자열을 반환합니다.


---

### trimLeft

> NexacroAPI > Method > trimLeft

**Description**

인수로 전달된 문자열의 왼쪽 끝에서 공백문자 또는 지정된 문자를 제거한 후 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.trimLeft( strText [,strChar] )
```

**Parameters**

```
왼쪽 끝에서 공백문자 또는 지정된 문자를 제거 할 문자열을 설정합니다.
```

**Return**

문자열의 왼쪽 끝에서 공백문자 또는 지정된 문자가 제거된 문자열을 반환합니다.


---

### trimRight

> NexacroAPI > Method > trimRight

**Description**

인수로 전달된 문자열의 오른쪽 끝에서 공백문자 또는 지정된 문자를 제거한 후 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.trimRight( strText [,strChar] )
```

**Parameters**

```
오른쪽 끝에서 공백문자 또는 지정된 문자를 제거 할 문자열을 설정합니다.
```

**Return**

문자열의 오른쪽 끝에서 공백문자 또는 지정된 문자가 제거된 문자열을 반환합니다.


---

### wrapQuote

> NexacroAPI > Method > wrapQuote

**Description**

인수로 전달된 문자열의 양쪽 끝에 큰따옴표를 붙여 반환하는 메소드입니다.

**Syntax**

```javascript
nexacro.wrapQuote( strText )
```

**Parameters**

```
큰따옴표를 붙일 문자열을 설정합니다.
```

**Return**

전달된 문자열의 양쪽 끝에 큰따옴표를 붙여 반환합니다.


---
