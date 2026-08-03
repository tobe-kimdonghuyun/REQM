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

| Parameters | Type | Description |
| --- | --- | --- |
| enumLang | String | 에러메시지가 추가될 언어를 설정합니다.

"ko" 설정 시 한국어 영역에 에러메시지를 추가합니다.
"en" 설정 시 영어 영역에 에러메시지를 추가합니다.
"ja" 설정 시 일본어 영역에 에러메시지를 추가합니다.
"zh" 설정 시 중국어 영역에 에러메시지를 추가합니다. |
| strCode | String | 추가될 에러메시지의 코드를 문자열로 설정합니다. |
| strMsg | String | 추가될 에러메시지를 설정합니다. |

**Sample Call**

```javascript
nexacro.addErrorMessage( "en", "test_code","Test Error Message" ) ;
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

| Parameters | Type | Description |
| --- | --- | --- |
| strData | String | Base64 형식으로 인코딩된 데이터를 설정합니다. |

**Sample Call**

```javascript
var strOutput = nexacro.base64Decode( strInput ) ;
```

**Return**

| Type | Description |
| --- | --- |
| String | 디코딩된 결과 데이터를 반환합니다. |


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

| Parameters | Type | Description |
| --- | --- | --- |
| strData | String | Base64 형식으로 인코딩할 데이터를 설정합니다. |

**Sample Call**

```javascript
var strOutput = nexacro.base64Encode( strInput ) ;
```

**Return**

| Type | Description |
| --- | --- |
| Object | Base64 형식으로 인코딩된 오브젝트를 반환합니다. |


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

| Parameters | Type | Description |
| --- | --- | --- |
| nVal | Number | 올림을 수행할 숫자값을 설정합니다. |
| nFractionDigit | Number | 올림을 수행할 자릿수를 설정합니다.

"0" 설정 시 소숫점 자리가 기준이 됩니다.
양수 설정 시 소숫점 자리 이하가 기준이 됩니다.
음수 설정 시 소숫점 자리 이상이 기준이 됩니다.

값 생략 시 "0" 으로 적용됩니다. |

**Sample Call**

```javascript
var nNum
nNum = nexacro.ceil(3.0123);      // nNum = 4
nNum = nexacro.ceil(3.0123, 2);  // nNum = 3.02
```

**Return**

| Type | Description |
| --- | --- |
| Number | 올림한 값을 반환합니다. |

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

| Parameters | Type | Description |
| --- | --- | --- |
| enumType | String | 어플리케이션이 아이콘이 깜빡이는 방식을 설정합니다.

"count" 설정 시 지정된 횟수만큼 깜빡인 후 종료됩니다.
"timer" 설정 시 "stop" 값으로 flashWindow() 메소드를 실행할 때까지 계속 깜빡입니다.
"timernofg" 설정 시 해당 어플리케이션이 활성화 될 때까지 깜빡입니다.
"stop" 설정 시 현재 깜빡이는 동작을 중지합니다. |
| nCount | Number | enumType 값이 "count" 인 경우 깜박이는 횟수를 숫자로 설정합니다.

enumType 값이 "count" 가 아닌 경우 설정값은 무시됩니다. |
| nInterval | Number | 어플리케이션 아이콘이 깜박이는 간격을 밀리초(milliseconds) 단위의 숫자로 설정합니다. |

**Sample Call**

```javascript
nexacro.flashWindow( "count", 10, 500 );
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

| Parameters | Type | Description |
| --- | --- | --- |
| nVal | Number | 내림을 수행할 숫자값을 설정합니다. |
| nFractionDigit | Number | 내림을 수행할 자릿수를 설정합니다.

"0" 설정 시 소숫점 자리가 기준이 됩니다.
양수 설정 시 소숫점 자리 이하가 기준이 됩니다.
음수 설정 시 소숫점 자리 이상이 기준이 됩니다.

값 생략 시 "0" 으로 적용됩니다. |

**Sample Call**

```javascript
var nNum;
nNum = nexacro.floor(9.9999);      // nNum = 9
nNum = nexacro.floor(9.9999, 2);  // nNum = 9.99
```

**Return**

| Type | Description |
| --- | --- |
| Number | 내림한 값을 반환합니다. |

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

| Type | Description |
| --- | --- |
| Object | Application 오브젝트를 반환합니다. |


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

| Parameters | Type | Description |
| --- | --- | --- |
| strID | String | 값을 가져올 쿠키변수의 ID 를 문자열로 설정합니다. |
| bSecure | Boolean | Secure 속성값에 따라 쿠키변수의 값을 가져옵니다.

true 설정 시 쿠키변수의 Secure 속성값이 true 일 때만 값을 가져옵니다.
false 설정 시 쿠키변수의 Secure 속성값이 false 일 때만 값을 가져옵니다.

값 생략 시 Secure 속성값에 관계없이 쿠키변수의 값을 가져옵니다. |

**Sample Call**

```javascript
var vCookie0 = nexacro.getCookieVariable("Cookie0") ;
var vCookie1 = nexacro.getCookieVariable("Cookie1", true) ;
```

**Return**

| Type | Description |
| --- | --- |
| String | Cookies 영역에 정의된 쿠키변수의 값을 반환합니다.

조건에 만족하는 쿠키변수가 없을 경우 undefined 를 반환합니다. |

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

| Parameters | Type | Description |
| --- | --- | --- |
| objFrame | Object | Zoom 기능 설정여부를 확인할 window 에 속한 Frame 을 오브젝트 형태로 설정합니다.

동일한 window 에 속한 Frame 중 어느것을 설정하여도 동일한 결과를 반환합니다. |

**Sample Call**

```javascript
var objFrame = this.getOwnerFrame();

var bEnableZoom = nexacro.getEnableWheelZoom( objFrame )
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | 지정된 Frame 이 속한 window 에 Zoom 기능이 설정되어 있으면 true 를 반환합니다.

지정된 Frame 이 속한 window 에 Zoom 기능이 설정되어 있지 않으면 false 를 반환합니다. |

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

| Type | Description |
| --- | --- |
| Object | Environment 오브젝트를 반환합니다. |


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

| Parameters | Type | Description |
| --- | --- | --- |
| strID | String | 값을 가져올 변수의 ID 를 문자열로 설정합니다. |

**Sample Call**

```javascript
var vEnv0 = nexacro.getEnvironmentVariable("Env_Variable0") ;
```

**Return**

| Type | Description |
| --- | --- |
| String | Environment 의 Variable 영역에 정의된 변수의 값을 반환합니다. |

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

| Parameters | Type | Description |
| --- | --- | --- |
| strID | String | 값을 가져올 변수의 ID 를 문자열로 설정합니다. |

**Sample Call**

```javascript
var vHTTPVal0 = nexacro.getHTTPHeaderVariable("HeaderVal00") ;
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

| Type | Description |
| --- | --- |
| String | 로그 파일이 저장된 경로를 문자열로 반환합니다. |

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

| Parameters | Type | Description |
| --- | --- | --- |
| objFrame | Object | 기준 Frame 을 오브젝트 형태로 설정합니다.

값 생략 시 Remark 에 설명된 조건에 따라 적용되는 Frame 이 달라질 수 있으므로 주의하여야 합니다. |

**Sample Call**

```javascript
var arrPopFrame = nexacro.getPopupFrames() ;
var arrPopFrame = nexacro.getPopupFrames( this.getOwnerFrame() ) ;
```

**Return**

| Type | Description |
| --- | --- |
| Array | 파라미터로 설정한 Frame 이 속한 Window 에서 팝업으로 실행된 Frame 을 Collection 형태로 반환합니다.

objFrame 파라미터에 null 또는 잘못된 값을 설정할 경우 undefined 를 반환합니다. |

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

| Parameters | Type | Description |
| --- | --- | --- |
| strKey | String | 개인화 데이터를 저장할 때 설정했던 키값을 설정합니다. |

**Sample Call**

```javascript
var vPrivate0 = nexacro.getPrivateProfile( "aa" ) ;
```

**Return**

| Type | Description |
| --- | --- |
| Variant | 인수로 전달된 키값에 해당하는 개인화 데이터를 저장 시 설정한 데이터 타입으로 반환합니다. |

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

| Type | Description |
| --- | --- |
| String | 애플리케이션의 실행 경로를 문자열로 반환합니다. |


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

| Parameters | Type | Description |
| --- | --- | --- |
| strKey | String | StringResource에서 가져올 문자열에 해당하는 Key 값을 설정합니다. |

**Sample Call**

```javascript
var strResource = nexacro.getStringResourceValue("A0001");
```

**Return**

| Type | Description |
| --- | --- |
| String | StringResource에서 지정한 Key 값에 해당하는 문자열을 반환합니다. |


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

| Parameters | Type | Description |
| --- | --- | --- |
| strText | String | 화면에 표시될 텍스트를 설정합니다. |
| strFont | String | 텍스트에 적용될 폰트정보를 font 속성 형식에 맞게 설정합니다.

컴포넌트의 font 속성에 값이 설정되어 있다면 font 속성을 설정할 수 있습니다. |
| nLimitWidth | Number | 텍스트가 표시되는 영역의 최대 너비를 pixel 단위의 숫자로 설정합니다.

strWordWrap 값이 "none" 또는 "line" 이면 nLimitWidth 에 설정된 값은 무시됩니다.
strWordWrap 값이 "char" 또는 "english" 일 경우 nLimitWidth 값에 맞게 텍스트가 줄바꿈되어 표시됩니다. |
| strWordWrap | String | 텍스트가 줄바꿈 되는 기준을 설정합니다.

"none" 설정 시 텍스트에 포함된 개행문자와 nLimitWidth 값이 무시되어 한줄로 표시됩니다.
"line" 설정 시 nLimitWidth 값은 무시되고 텍스트에 포함된 개행문자를 기준으로 줄바꿈이 됩니다.
"char" 설정 시 nLimitWidth 값을 기준으로 글자 단위로 줄바꿈이 됩니다.
"english" 설정 시 nLimitWidth 값을 기준으로 글자 단위로 줄바꿈이 됩니다.

"char", "english" 설정 시 텍스트에 포함된 개행문자에 의해서도 줄바꿈이 됩니다. |
| refObj | Object | strFont의 단위가 "em"인 경우 상대적인 크기를 설정할 기준 컴포넌트(오브젝트)를 설정합니다. |

**Sample Call**

```javascript
this.Static00.font = "italic bold 10pt Arial";

var strText = "Sample Text";

var objSize = nexacro.getTextSize( strText, this.Static00.font );
var objSize2 = nexacro.getTextSize( strText, "italic bold 10pt Arial", 100, "char" );
var objSize3 = nexacro.getTextSize( strText, "italic bold 2em Arial", this );

trace( objSize.nx + "," + objSize.ny );
trace( objSize2.nx + "," + objSize2.ny );
trace( objSize3.nx + "," + objSize3.ny );
```

**Return**

| Type | Description |
| --- | --- |
| Object | 인수값을 기준으로 계산된 텍스트가 표시되는 영역의 크기 정보를 오브젝트로 반환합니다.

반환된 오브젝트의 "nx" 속성에 텍스트의 가로크기가 저장됩니다.
반환된 오브젝트의 "ny" 속성에 텍스트의 세로크기가 저장됩니다. |

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

| Parameters | Type | Description |
| --- | --- | --- |
| objFrame | Object | Zoom 배율을 확인할 window 에 속한 Frame 을 오브젝트 형태로 설정합니다.

동일한 window 에 속한 Frame 중 어느것을 설정하여도 동일한 결과를 반환합니다. |

**Sample Call**

```javascript
var objFrame = this.getOwnerFrame();

var nZoomScale = nexacro.getWheelZoom( objFrame );
```

**Return**

| Type | Description |
| --- | --- |
| Number | 지정된 Frame 이 속한 window 의 Zoom 배율을 "%" 단위의 숫자로 반환합니다. |

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

| Parameters | Type | Description |
| --- | --- | --- |
| nChar | Number | 알파벳에 대응하는 코드값인지 확인 할 10진수 숫자를 설정합니다. |
| strChar | String | 알파벳 여부를 확인 할 문자열을 설정합니다. |

**Sample Call**

```javascript
var bRet;
bRet = nexacro.isAlpha(97);       // true, 97 = 'a'
bRet = nexacro.isAlpha("aaa");  // true
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | 전달된 문자코드 또는 문자열이 알파벳이면 "true" 를 반환합니다.
전달된 문자코드 또는 문자열이 알파벳이 아니면 "false" 를 반환합니다. |


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

| Parameters | Type | Description |
| --- | --- | --- |
| nChar | Number | 알파벳 또는 숫자에 대응하는 코드값인지 확인 할 10진수 숫자를 설정합니다. |
| strChar | String | 알파벳과 숫자로만 이루어져 있는지 확인 할 문자열을 설정합니다. |

**Sample Call**

```javascript
var bRet;
bRet = nexacro.isAlphaNumeric(97);            // true , 97 = 'a'
bRet = nexacro.isAlphaNumeric("123abc");   // true
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | 전달된 문자코드가 알파벳 또는 숫자이면 "true" 를 반환합니다.
전달된 문자열이 알파벳과 숫자로만 이루어져 있다면 "true" 를 반환합니다.

전달된 문자코드가 알파벳 또는 숫자가 아니면 "false" 를 반환합니다.
전달된 문자열에 알파벳과 숫자 이외의 문자가 있다면 "false" 를 반환합니다. |


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

| Parameters | Type | Description |
| --- | --- | --- |
| strID | String | 존재여부를 확인할 쿠키변수의 ID 를 문자열로 설정합니다. |
| bSecure | Boolean | Secure 속성값에 따라 쿠키변수의 존재여부를 확인합니다.

true 설정 시 쿠키변수가 존재하고 Secure 속성값이 true 일 때만 true 를 반환합니다.
false 설정 시 쿠키변수가 존재하고 Secure 속성값이 false 일 때만 true 를 반환합니다.

값 생략 시 Secure 속성값에 관계없이 쿠키변수의 존재여부를 확인합니다. |

**Sample Call**

```javascript
nexacro.isExistCookieVariable( "Cookie0" ) ;
nexacro.isExistCookieVariable( "Cookie1", true ) ;
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | Cookies 영역에 쿠키변수가 존재하면 true 를 반환합니다.
Cookies 영역에 쿠키변수가 존재하지 않으면 false 를 반환합니다.

bSecure 설정 시 bSecure 에 설정한 값까지 일치할 경우 true 를 반환합니다. |


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

| Parameters | Type | Description |
| --- | --- | --- |
| nChar | Number | 알파벳 소문자에 대응하는 코드값인지 확인 할 10진수 숫자를 설정합니다. |
| strChar | String | 알파벳 소문자 여부를 확인 할 문자열을 설정합니다. |

**Sample Call**

```javascript
var bRet;
bRet = nexacro.isLower(97);       // true , 97 = 'a'
bRet = nexacro.isLower("abC");  // false
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | 전달된 문자코드 또는 문자열이 알파벳 소문자이면 "true" 를 반환합니다.
전달된 문자코드 또는 문자열이 알파벳 소문자가 아니면 "false" 를 반환합니다. |


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

| Parameters | Type | Description |
| --- | --- | --- |
| nChar | Number | 숫자에 대응하는 코드값인지 확인 할 10진수 숫자를 설정합니다. |
| strChar | String | 숫자 여부를 확인 할 문자열을 설정합니다. |

**Sample Call**

```javascript
var bRet;
bRet = nexacro.isNumeric(97);      // false , 97 = 'a'
bRet = nexacro.isNumeric("123");  // true
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | 전달된 문자코드 또는 문자열이 숫자이면 "true" 를 반환합니다.
전달된 문자코드 또는 문자열이 숫자가 아니면 "false" 를 반환합니다. |


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

| Parameters | Type | Description |
| --- | --- | --- |
| nChar | Number | 공백문자에 대응하는 코드값인지 확인 할 10진수 숫자를 설정합니다. |
| strChar | String | 공백문자 여부를 확인 할 문자열을 설정합니다. |

**Sample Call**

```javascript
var bRet;
bRet = nexacro.isSpace(0);        // false , 0 = Null
bRet = nexacro.isSpace(32);      // true , 32 = Space
bRet = nexacro.isSpace(97);      // false , 97 = 'a'
bRet = nexacro.isSpace("");       // true
bRet = nexacro.isSpace(" ");      // true
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | 전달된 문자코드 또는 문자열이 공백문자이면 "true" 를 반환합니다.
전달된 문자코드 또는 문자열이 공백문자가 아니면 "false" 를 반환합니다. |


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

| Parameters | Type | Description |
| --- | --- | --- |
| nChar | Number | 알파벳 대문자에 대응하는 코드값인지 확인 할 10진수 숫자를 설정합니다. |
| strChar | String | 알파벳 대문자 여부를 확인 할 문자열을 설정합니다. |

**Sample Call**

```javascript
var bRet;
bRet = nexacro.isUpper(65);        // true , 65 = 'A'
bRet = nexacro.isUpper("abC");   // false
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | 전달된 문자코드 또는 문자열이 알파벳 대문자이면 "true" 를 반환합니다.
전달된 문자코드 또는 문자열이 알파벳 대문자가 아니면 "false" 를 반환합니다. |


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

| Parameters | Type | Description |
| --- | --- | --- |
| strLang | String | StringResource에서 로드할 대상 언어를 설정합니다.

strLang 파라미터 값만 설정한 경우 아래와 같은 상황에서는 메서드가 동작하지 않습니다.
- 제너레이트 된 StringResource 파일이 없는 경우
- Environment.usestringresource 속성값이 false인 경우 |
| strUrl | String | StringResource 정보를 갱신하기 위한 서비스 URL을 문자열로 설정합니다.

- strUrl 파라미터 값 설정 시 Environment.usestringresource 속성값과 상관없이 동작합니다.
- 반환되는 값은 지정한 언어 데이터를 포함한 JSON 파일 형식이어야 합니다.

* strLang 파라미터 값을 설정한 경우
strLang 파라미터값을 기준으로 해당하는 언어 데이터를 탐색하고 로드합니다.
URL 문자열 형태에 따라 URL 호출 시점에 lang=[strLang] 매개변수를 추가합니다.
- 매개변수가 있는 경우: ⟨=[strLang] 추가
  예) http://dummy.com/i18n?test=true
       -> http://dummy.com/i18n?test=true⟨=ja
- 매개변수가 없는 경우: ?lang=[strLang] 추가
  예) http://dummy.com/i18n
       -> http://dummy.com/i18n?lang=ja

* strUrl 파라미터 값만 설정한 경우
Environment.locale 속성값을 기준으로 해당하는 언어 데이터를 탐색하고 로드합니다. |

**Sample Call**

```javascript
nexacro.loadStringResource("ja");
nexacro.loadStringResource("ja", "https://dummy.com/i18n");
nexacro.loadStringResource("https://dummy.com/i18n");
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

| Parameters | Type | Description |
| --- | --- | --- |
| strURL | String | 어플리케이션에 적용시킬 XCSS 파일경로를 "xcssrc::[FileID]" 형식으로 설정합니다.

파일경로의 "xcssrc::" 는 고정 Prefix 값으로 수정할 수 없습니다.
XCSS 파일은 Resource Service 영역의 "./_resource_/_xcss_" 에 위치하여야 합니다. |

**Sample Call**

```javascript
nexacro.loadStyle( "xcssrc::theme1.xcss" );
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

| Parameters | Type | Description |
| --- | --- | --- |
| strID | String | Modeless Window 로 표시할 ChildFrame 의 ID 를 문자열로 설정합니다. |
| strFormURL | String | Modeless Window 로 표시할 ChildFrame 에 로딩될 Form 을 URL 로 설정합니다. |
| objParentFrame | Object | Modeless Window 로 표시할 ChildFrame 의 부모 Frame 을 Object 형태로 설정합니다.

null 설정 시 부모가 설정되지 않습니다. |
| objArguList | Object | Modeless Window 로 표시할 ChildFrame 에 추가될 변수리스트를 "{변수명:변수값 , 변수명:변수값}" 형식으로 설정합니다. |
| strOpenStyle | String | Modeless Window 로 표시할 ChildFrame 에 적용될 속성값을 "속성명1=속성값1 속성명2=속성값2" 형식으로 설정합니다.

ChildFrame 의 일부 속성을 설정할 수 있으며 각 속성은 공백(Space)으로 구분합니다.
ChildFrame 의 CSS 관련 속성은 설정할 수 없습니다. (예: background, -nexa-border, font 등)

* 다음 속성 또는 속성의 특정 설정값은 open 메서드 실행 시 특정 실행 환경만 지원합니다.
"dragmovetype" 속성의 "all" 값은 Windows NRE 만 지원합니다.
"layered" 속성은 Windows NRE 와 macOS NRE 만 지원합니다.
"openstatus" 속성의 "maximize" 값은 Windows NRE만 지원합니다.
"openstatus" 속성의 "normal", "minimize" 값은 Windows NRE 만 지원합니다.
"showtitlebar" 속성은 Windows NRE 환경만 지원합니다.
"showstatusbar" 속성은 Windows NRE만 지원합니다. |
| nLeft | Number | Modeless Window 로 표시할 ChildFrame 의 left 값을 설정합니다. |
| nTop | Number | Modeless Window 로 표시할 ChildFrame 의 top 값을 설정합니다. |
| nWidth | Number | Modeless Window 로 표시할 ChildFrame 의 width 값을 설정합니다. |
| nHeight | Number | Modeless Window 로 표시할 ChildFrame 의 height 값을 설정합니다. |
| objOpener | Object | opener 로 설정할 Form 을 오브젝트 형태로 설정합니다.

값 생략 시 objParentFrame 파라미터에 설정된 Form 이 설정됩니다. |
| strExtOpenStyle | String | ChildFrame 이 표시될 때 추가적으로 적용될 속성을 "속성명1=속성값1 속성명2=속성값2" 형식으로 설정합니다.
환경에 따라 설정할 수 있는 속성이 다르며 각 속성은 공백(Space)으로 구분합니다.


* Windows NRE 환경에서만 지원하는 속성으로 생략 시 false 로 적용됩니다.
"noactivate" 속성에 true 설정 시 표시된 ChildFrame 이 활성화 되지 않습니다.
"noactivate" 속성에 false 설정 시 표시된 ChildFrame 이 활성화 되어 포커스를 갖습니다.
"noactivate" 속성은 표시된 ChildFrame 에 포커스를 이동하지 않으려 할 때 사용합니다. |
| strReturnType | String | 반환값 타입을 설정합니다.
값을 설정하지 않으면 Modeless Window 표시 성공/실패 여부를 반환합니다.
값을 설정하는 경우 다음과 같이 반환값 타입이 정해집니다.
- "promise": Promise 오브젝트를 반환합니다. |

**Sample Call**

```javascript
var bSucc;
bSucc = nexacro.open("modeless", "Base::Form01.xfdl",  this.getOwnerFrame(), {a:'aaa', b:'bbb'}, "titletext=TEST", 0, 0);
bSucc = nexacro.open("modeless", "Base::Form01.xfdl",  this.getOwnerFrame(), {a:'aaa', b:'bbb'}, "titletext=TEST autosize=false", 0, 0, 640, 480);
bSucc = nexacro.open("modeless", "Base::Form01.xfdl",  this.getOwnerFrame(), {a:'aaa', b:'bbb'}, "titletext=TEST", 0, 0, null, null, this);
bSucc = nexacro.open("modeless", "Base::Form01.xfdl",  this.getOwnerFrame(), {a:'aaa', b:'bbb'}, "titletext=TEST", 0, 0, null, null, this, "location=true menubar=true toolbar=true");
bSucc = nexacro.open("modeless", "Base::Form01.xfdl",  this.getOwnerFrame(), {a:'aaa', b:'bbb'}, "titletext=TEST", 0, 0, null, null, this, "noactivate=true");

nexacro.open("modeless", "Base::Form01.xfdl",  this.getOwnerFrame(), {a:'aaa', b:'bbb'}, "titletext=TEST", 0, 0, null, null, this, "noactivate=true", "promise").then((result) => {
   trace("Closed popup"); 
 }).catch((err) => {
   trace("Failed to open popup: " + err.message);
 });
```

**Return**

| Type | Description |
| --- | --- |
| Boolean, Object | returnType 설정값에 따라 반환값 타입이 달라집니다.

- 설정값 없음: (Boolean) 
  Modeless Window 정상 표시 여부를 반환합니다.

- "promise": (Object)
  Promise 오브젝트를 반환합니다.
  Promise 오브젝트는 자바스크립트 표준 내장 객체입니다.
  내부적으로 resolve 수행 시점은 Modeless Window가 종료되는 시점입니다. |

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

| Parameters | Type | Description |
| --- | --- | --- |
| strDate | String | 날짜형식의 문자열을 설정합니다.

유효하지 않은 날짜형식의 문자열은 오류로 처리됩니다. |

**Sample Call**

```javascript
var ret = nexacro.parseDate("1999-10-10");     // 939481200000
```

**Return**

| Type | Description |
| --- | --- |
| Number | 1970년 1월 1일 자정부터 인수로 전달된 날짜 사이의 시간을 밀리초로 반환합니다.

유효하지 않은 날짜형식으로 오류로 처리되면 undefined 를 반환합니다. |

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

| Parameters | Type | Description |
| --- | --- | --- |
| strID | String | 제거될 쿠키변수의 ID 를 설정합니다. |
| bSecure | Boolean | Secure 속성값에 따라 쿠키변수를 제거합니다.

true 설정 시 쿠키변수의 Secure 속성값이 true 일 때만 쿠키변수를 제거합니다.
false 설정 시 쿠키변수의 Secure 속성값이 false 일 때만 쿠키변수를 제거합니다.

값 생략 시 Secure 속성값에 관계없이 쿠키변수를 제거합니다. |

**Sample Call**

```javascript
nexacro.removeCookieVariable( "Cookie0" ) ;
nexacro.removeCookieVariable( "Cookie1", true ) ;
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

| Parameters | Type | Description |
| --- | --- | --- |
| strID | String | 제거될 변수의 ID를 설정합니다. |

**Sample Call**

```javascript
nexacro.removeEnvironmentVariable( "Env_Variable0" ) ;
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

| Parameters | Type | Description |
| --- | --- | --- |
| strID | String | 제거될 변수의 ID 를 설정합니다. |

**Sample Call**

```javascript
nexacro.removeHTTPHeaderVariable( "HeaderVal00" );
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

| Parameters | Type | Description |
| --- | --- | --- |
| strKey | String | 삭제할 개인화 데이터의 키값을 설정합니다. |

**Sample Call**

```javascript
nexacro.removePrivateProfile("aa");
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

| Parameters | Type | Description |
| --- | --- | --- |
| strText | String | 변환을 수행할 전체 문자열을 설정합니다. |
| strOrgText | String | strText 값에서 새 문자열로 변환될 문자열을 설정합니다. |
| strRepText | String | strOrgText 값의 문자열 대신 변환할 문자열을 설정합니다. |

**Return**

| Type | Description |
| --- | --- |
| String | 특정 문자열을 새 문자열로 변환한 문자열을 반환합니다. |


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

| Parameters | Type | Description |
| --- | --- | --- |
| nVal | Number | 반올림을 수행할 숫자값을 설정합니다. |
| nFractionDigit | Number | 반올림을 수행할 자릿수를 설정합니다.

"0" 설정 시 소숫점 자리가 기준이 됩니다.
양수 설정 시 소숫점 자리 이하가 기준이 됩니다.
음수 설정 시 소숫점 자리 이상이 기준이 됩니다.

값 생략 시 "0" 으로 적용됩니다. |

**Sample Call**

```javascript
var nNum;
nNum = nexacro.round(1.4915);         // 1 
nNum = nexacro.round(1.4915, 2);     // 1.49  
nNum = nexacro.round(1.5163);         // 2
nNum = nexacro.round(1.5163, 2);     // 1.52
nNum = nexacro.round(1024.256, -1); // 1020
nNum = nexacro.round(1024.256, -2); // 1000
nNum = nexacro.round(1024.256, -4); // 0
```

**Return**

| Type | Description |
| --- | --- |
| Number | 반올림한 값을 반환합니다. |

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

| Parameters | Type | Description |
| --- | --- | --- |
| strID | String | 추가될 쿠키변수의 ID 를 설정합니다. |
| varVal | String | 추가될 쿠키변수가 갖는 값을 설정합니다. |
| bSecure | Boolean | 추가될 쿠키변수의 Secure 속성 여부를 설정합니다.

true 로 설정 시 HTTP 통신일 때 쿠키변수를 포함시키지 않습니다.
true 로 설정 시 HTTPS 통신일 때 쿠키변수에 Secure 속성을 설정하여 포함시킵니다.
false 설정 시 모든 통신에 Secure 속성을 설정하지 않은 쿠키변수를 포함시킵니다.

값을 생략하면 false 로 적용됩니다. |

**Sample Call**

```javascript
nexacro.setCookieVariable( "Cookie0", "test" ) ;
nexacro.setCookieVariable( "Cookie1", "test", true ) ;
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

| Parameters | Type | Description |
| --- | --- | --- |
| objFrame | Object | Zoom 기능을 설정할 window 에 속한 Frame 을 오브젝트 형태로 설정합니다.

동일한 window 에 속한 Frame 중 어느것을 설정하여도 동일하게 설정됩니다. |
| bZoom | Boolean | true 설정 시 objFrame 이 속한 window  의 Zoom 기능을 활성화 합니다.

false 설정 시 objFrame 이 속한 window  의 Zoom 기능을 비활성화 합니다. |

**Sample Call**

```javascript
var objFrame = this.getOwnerFrame();

nexacro.setEnableWheelZoom( objFrame, false );
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

| Parameters | Type | Description |
| --- | --- | --- |
| strID | String | 추가될 변수의 ID를 설정합니다. |
| varVal | String | 추가될 변수가 갖는 값을 설정합니다. |

**Sample Call**

```javascript
var vEnv0 = nexacro.setEnvironmentVariable("Env_Variable0", "test") ;
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

| Parameters | Type | Description |
| --- | --- | --- |
| strID | String | 추가될 HTTP Header 변수의 ID 를 설정합니다. |
| varVal | String | 추가될 HTTP Header 변수가 갖는 값을 설정합니다. |

**Sample Call**

```javascript
nexacro.setHTTPHeaderVariable("HeaderVal00", "test") ;
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

| Parameters | Type | Description |
| --- | --- | --- |
| strType | String | 설정할 변수의 Global 영역 위치를 문자열로 설정합니다.

“environment” 설정 시 Environment 의 Variables 영역에 변수를 설정합니다.
“cookie” 설정 시 Environment 의 Cookies 영역에 변수를 설정합니다.
“httpheader” 설정 시 Environment 의 HTTPHeader 영역에 변수를 설정합니다.
“application” 설정 시 Application 의 Variables 영역에 변수를 설정합니다. |
| strID | String | 설정할 Global 변수의 ID 를 문자열로 설정합니다. |
| varVal | String | Global 변수의 값을 문자열로 설정합니다. |

**Sample Call**

```javascript
nexacro.setInitialVariable( "cookie", "ValA", "Text" );
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

| Parameters | Type | Description |
| --- | --- | --- |
| strKey | String | 개인화 데이터를 저장하기 위한 키값을 설정합니다.

XML 태그명으로 사용되므로 XML 태그명에서 사용 할 수 없는 문자는 설정할 수 없습니다.
또한, ":" 문자를 설정할 수 없습니다. |
| varVal | Variant | 저장할 개인화 데이터를 설정합니다.

기본 자료형(integer, float, string, boolean) 과 Date 를 설정할 수 있습니다. |

**Sample Call**

```javascript
var bSucc = nexacro.setPrivateProfile( "aa", "A" );
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | 개인화 데이터 저장에 성공하면 "true" 를 반환합니다.
개인화 데이터 저장에 실패하면 "false" 를 반환합니다. |

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

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | TypeDefinition 의 Protocols 영역에 정의된 Protocol 어답터 중 설정값을 전달할 Protocol 의 "Protocol ID" 를 설정합니다. |
| strKey | String | Protocol 어답터에 전달될 설정값에 해당하는 Key 값을 설정합니다. |
| strValue | String | Protocol 어답터에 전달될 설정값을 설정합니다. |

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

| Parameters | Type | Description |
| --- | --- | --- |
| nType | Number | Windows 넥사크로의 렌더링 방식을 0 또는 1 로 설정합니다.

0 설정 시 RealTime 방식(기존과 동일)으로 주기적으로 렌더링을 실행합니다.
1 설정 시 Event 방식으로 내부 규칙에 의해 렌더링을 실행합니다. |

**Sample Call**

```javascript
nexacro.setRenderingType( 1 );
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

| Parameters | Type | Description |
| --- | --- | --- |
| objContext | Object | 콜백 함수가 실행될 때 this로 바인딩될 오브젝트를 설정합니다. |
| objCallbackFunc | Object | 지연 시간 이후 실행할 콜백함수를 설정합니다. |
| nDelay | Number | 콜백 함수 실행을 지연시킬 시간을 밀리초(milliseconds) 단위로 설정합니다.
값을 설정하지 않으면 기본값으로 0이 적용됩니다. |

**Sample Call**

```javascript
this.Button00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
{
	nexacro.setTimeout(obj, this.onceCallback, 1000);
};

this.onceCallback = function()
{
	trace(this.id); // Button00
}
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

| Parameters | Type | Description |
| --- | --- | --- |
| objFrame | Object | Zoom 배율을 설정할 window 에 속한 Frame 을 오브젝트 형태로 설정합니다.

동일한 window 에 속한 Frame 중 어느것을 설정하여도 동일하게 설정됩니다. |
| nZoomScale | Number | objFrame 이 속한 window  의 Zoom 배율을 "%" 단위의 숫자로 설정합니다.

50%~200% 범위 내에서 10% 단위로 설정하여야 합니다.
설정값이 범위를 벗어나거나 10% 단위가 아닌 경우 메소드가 실행되지 않습니다. |

**Sample Call**

```javascript
var objFrame = this.getOwnerFrame();

nexacro.setWheelZoom( objFrame, 150 );
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

| Parameters | Type | Description |
| --- | --- | --- |
| strText | Object | 따옴표를 제거 할 문자열을 설정합니다. |

**Sample Call**

```javascript
var strVal = nexacro.stripQuote("\"hello\""); // hello
```

**Return**

| Type | Description |
| --- | --- |
| String | 전달된 문자열의 양쪽 끝에서 따옴표를 제거하여 반환합니다. |

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

| Parameters | Type | Description |
| --- | --- | --- |
| varValue | String | 숫자로 변환할 문자열을 설정합니다. |
| varNanVal | Number | varValue 를 숫자로 변환한 결과값이 "NaN" 일 때 반환할 값을 설정합니다.

값 생략 시 "NaN" 이 적용됩니다. |
| varPinfVal | Number | varValue 를 숫자로 변환한 결과값이 "POSITIVE_INFINITY" 일 때 반환할 값을 설정합니다.

값 생략 시 "POSITIVE_INFINITY" 가 적용됩니다. |
| varNinfVal | Number | varValue 를 숫자로 변환한 결과값이 "NEGATIVE_INFINITY" 일 때 반환할 값을 설정합니다.

값 생략 시 "NEGATIVE_INFINITY" 가 적용됩니다. |

**Sample Call**

```javascript
var varNum;
varNum = nexacro.toNumber("123.4");                                          // 123.4
varNum = nexacro.toNumber(Number.NaN, 0);                               // 0
varNum = nexacro.toNumber(Number.POSITIVE_INFINITY, 0, 1);       // 1
varNum = nexacro.toNumber(Number.NEGATIVE_INFINITY, 0, 1, 2);  // 2
```

**Return**

| Type | Description |
| --- | --- |
| Number | 문자열을 숫자로 변환하여 반환합니다. |


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

| Parameters | Type | Description |
| --- | --- | --- |
| strText | String | 양쪽 끝에서 공백문자 또는 지정된 문자를 제거 할 문자열을 설정합니다. |
| strChar | String | 문자열의 양쪽 끝에서 제거할 문자를 설정합니다.

값 생략 시 문자열의 양쪽 끝에서 공백문자를 제거합니다. |

**Sample Call**

```javascript
var strText = "  abcd  ";
var strText2 = "abcdaa";
var strTrim = nexacro.trim( strText );             // strTrim = abcd
var strTrim = nexacro.trim( strText2 ,"a" );     // strTrim =  bcd
```

**Return**

| Type | Description |
| --- | --- |
| String | 문자열의 양쪽 끝에서 공백문자 또는 지정된 문자가 제거된 문자열을 반환합니다. |


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

| Parameters | Type | Description |
| --- | --- | --- |
| strText | String | 왼쪽 끝에서 공백문자 또는 지정된 문자를 제거 할 문자열을 설정합니다. |
| strChar | String | 문자열의 왼쪽 끝에서 제거할 문자를 설정합니다.

값 생략 시 문자열의 왼쪽 끝에서 공백문자를 제거합니다. |

**Sample Call**

```javascript
var ret = nexacro.trimLeft( " nexacro" );     // ret = "nexacro"
```

**Return**

| Type | Description |
| --- | --- |
| String | 문자열의 왼쪽 끝에서 공백문자 또는 지정된 문자가 제거된 문자열을 반환합니다. |


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

| Parameters | Type | Description |
| --- | --- | --- |
| strText | String | 오른쪽 끝에서 공백문자 또는 지정된 문자를 제거 할 문자열을 설정합니다. |
| strTarget | String | 문자열의 오른쪽 끝에서 제거할 문자를 설정합니다.

값 생략 시 문자열의 오른쪽 끝에서 공백문자를 제거합니다. |

**Sample Call**

```javascript
var ret = nexacro.trimLeft( "nexacro  " );     // ret = "nexacro"
```

**Return**

| Type | Description |
| --- | --- |
| String | 문자열의 오른쪽 끝에서 공백문자 또는 지정된 문자가 제거된 문자열을 반환합니다. |


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

| Parameters | Type | Description |
| --- | --- | --- |
| strText | String | 큰따옴표를 붙일 문자열을 설정합니다. |

**Sample Call**

```javascript
var strVal = nexacro.wrapQuote("hello"); // "hello"
```

**Return**

| Type | Description |
| --- | --- |
| String | 전달된 문자열의 양쪽 끝에 큰따옴표를 붙여 반환합니다. |


---
