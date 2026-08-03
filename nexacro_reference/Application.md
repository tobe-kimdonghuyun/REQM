# nexacroN V24 — Application

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 80개

---

## Application

### Application

> Application

**Description**

넥사크로로 만든 애플리케이션의 기본 정보와 초기 생성 시 주어지는 환경정보를 다루는 기본이 되는 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| all | Application 에 등록된 모든 오브젝트를 갖는 읽기전용 속성입니다. |
| licenseurl | 라이선스 정보를 가지고 있는 파일의 경로를 설정하는 속성입니다. |
| mainframe | Application 하위에 속한 MainFrame 을 갖는 읽기전용 속성입니다. |
| name | Application 의 이름을 설정하는 속성입니다. |
| screenid | Application 이 실행되는 스크린의 ID 를 설정하는 속성입니다. |
| trays | Application 에 등록된 Tray 오브젝트의 정보를 갖는 읽기전용 속성입니다. |
| version | Application 의 버전을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addEventHandler | Application 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 Application 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| addTray | 동적으로 생성한 Tray 를 Application 에 추가하는 메소드입니다. |
| addVariable | Application 의 AppVariables 영역에 변수를 추가하는 메소드입니다. |
| alert | Application 의 경고 대화상자를 표시하는 메소드입니다. |
| cancelTransaction | 진행중인 트렌젝션을 중지 시키는 메소드입니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다 |
| confirm | Application 의 선택 대화상자를 표시하는 메소드입니다. |
| exit | 실행중인 넥사크로 어플리케이션을 종료시키는 메소드입니다. |
| findEventHandler | Application 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getActiveForm | Application 에서 현재 활성화된 Form 객체를 반환하는 메소드입니다. |
| getActiveFrame | Application 에서 현재 활성화된 Frame 객체를 반환하는 메소드입니다. |
| getEventHandler | Application 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| insertEventHandler | Application 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| isExistVariable | Application 의 AppVariables 영역에 특정 변수의 존재여부를 반환하는 메소드입니다. |
| lookup | 인수로 전달된 오브젝트를 Application 전체를 대상으로 검색하여 반환하는 메소드입니다. |
| removeEventHandler | Application 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | Application 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| removeTray | Application 의 trays 속성에 등록된 Tray 오브젝트를 삭제하는 메소드입니다. |
| removeVariable | Application 의 AppVariables 영역에서 변수를 제거하는 메소드입니다. |
| setEventHandler | Application 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | Application 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| setVariable | Application 의 AppVariables 영역에 변수를 추가 또는 값을 설정하는 메소드입니다. |
| trace | 추적 로그를 남기는 메소드입니다. |
| transaction | Application 영역에 정의된 Dataset 의 데이터를 갱신하기 위한 서비스를 호출하고, 트랜잭션이 완료되면 콜백함수을 실행하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onafteruserconfirm | UserConfirm 창이 닫힌 후에 발생하는 이벤트입니다. |
| onbeforeexit | Application 이 종료되기 전에 발생하는 이벤트입니다. |
| onbeforeuserconfirm | UserConfirm 창이 표시 되기 전에 발생하는 이벤트입니다. |
| onduplicateexecution | 중복실행 불가로 설정된 어플리케이션을 중복으로 실행 시 발생하는 이벤트입니다. |
| onerror | Application 에서 실행한 Transaction 에서 에러가 생겼을 때 발생하는 이벤트입니다. |
| onexit | Application 이 종료될 때 발생하는 이벤트입니다. |
| onload | Application 에 등록된 모든 오브젝트와 데이터가 로드된 후 발생하는 이벤트입니다. |
| onloadforms | ChildFrame 에 연결된 모든 Form 이 모두 로드되면 발생하는 이벤트입니다. |
| onloadingappvariables | Application 의 AppVariables 영역에 정의된 오브젝트가 모두 생성된 후에 발생하는 이벤트입니다. |
| onnotification | 모바일 기기에서 넥사크로에 대한 Notification 을 수신하였을 때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### all

> Application > Property > all

**Description**

Application 에 등록된 모든 오브젝트를 갖는 읽기전용 속성입니다.

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication() ;
var objItem0 = objApp.all[0] ;
```

**Remark**

- all 속성을 사용하면 Application 에 속한 mainframe, Variables, DataSet, Objects 정보에 접근할 수 있습니다.

- all 속성은 Collection 접근방식을 사용할 수 있습니다.
  Application.all[0], Application.all["MainFrame"], Application.all.length 등의 방법을 사용합니다.


---

### licenseurl

> Application > Property > licenseurl

**Description**

라이선스 정보를 가지고 있는 파일의 경로를 설정하는 속성입니다.

**Syntax**

```javascript
application.licenseurl
```

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication() ;
alert(objApp.licenseurl);
```
- **`licenseurl`** — 라이선스 정보를 가진 파일의 경로를 설정합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 라이선스 경로가 서버인 경우에는 ADL과 같은 도메인 경로(D Class까지)만 허용합니다.


---

### mainframe

> Application > Property > mainframe

**Description**

Application 하위에 속한 MainFrame 을 갖는 읽기전용 속성입니다.

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication() ;
var objMainframe = objApp.mainframe ;
```

**Remark**

- MainFrame 의 ID 를 사용하여 접근할 수 있습니다.


---

### name

> Application > Property > name

**Description**

Application 의 이름을 설정하는 속성입니다.

**Setting Syntax**

- **`strName`** — Application 의 이름을 설정합니다.

**Remark**

- 넥사크로 스튜디오에서 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### screenid

> Application > Property > screenid

**Description**

Application 이 실행되는 스크린의 ID 를 설정하는 속성입니다.

**Syntax**

```javascript
application.screenid
```

**Setting Syntax**

- **`screenid`** — ScreenDefinition 영역에 정의된 스크린 항목을 콤마(",")로 구분하여 여러개 설정할 수 있습니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 동일 프로젝트에서 하나의 스크린 ID는 하나의 Application 에만 등록될 수 있습니다.


---

### trays

> Application > Property > trays

**Description**

Application 에 등록된 Tray 오브젝트의 정보를 갖는 읽기전용 속성입니다.

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication() ;
var objTray0 = objApp.trays[0] ;
```

**Remark**

- trays 속성은 Collection 접근방식을 사용할 수 있습니다.
  objApp.trays[0], objApp.trays["Tray00"], objApp.trays.length 등의 방법을 사용합니다.


---

### version

> Application > Property > version

**Description**

Application 의 버전을 설정하는 속성입니다.

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication() ;
objApp.version = "4.0";
```
- **`strVersion`** — Application 의 버전을 설정합니다.


---

### 메서드 (Methods)

### addEventHandler

> Application > Method > addEventHandler

**Description**

Application 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
Application.addEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수가 추가될 이벤트의 ID를 설정합니다.
```

**Return**

이벤트에 추가된 핸들러 함수의 인덱스를 반환합니다.
동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.


---

### addEventHandlerLookup

> Application > Method > addEventHandlerLookup

**Description**

함수를 검색하여 Application 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
Application.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

### addTray

> Application > Method > addTray

**Description**

동적으로 생성한 Tray 를 Application 에 추가하는 메소드입니다.

**Syntax**

```javascript
Application.addTray(strTrayID, objTray)
```

**Parameters**

```
Application 에 추가될 Tray 오브젝트의 ID 를 설정합니다.
```

**Return**

trays 속성에 추가된 Tray 오브젝트의 인덱스를 반환합니다.

Tray 오브젝트 추가에 실패했을 경우 "-1" 을 반환합니다.

**Remark**

- trays 속성을 통해 현재 등록되어 있는 Tray 들을 확인할 수 있습니다.


---

### addVariable

> Application > Method > addVariable

**Description**

Application 의 AppVariables 영역에 변수를 추가하는 메소드입니다.

**Syntax**

```javascript
Application.addVariable( strID, varValue )
```

**Parameters**

```
추가될 변수의 ID를 설정합니다.
```

**Return**

변수 추가에 성공하면 "1" 을 반환합니다.
변수 추가에 실패하면 "0" 을 반환합니다.
동일한 변수가 존재하면 "-1" 을 반환합니다.

**Remark**

- AppVariables 영역에 이미 존재하는 변수명일 경우에는 메소드가 수행되지 않습니다.

- Environment 영역에 변수를 추가하기 위해서는 setEnvironmentVariable() 메소드를 사용하여야 합니다.

- 통신 시 사용되는 Cookie 를 추가하기 위해서는 setCookieVariable() 메소드를 사용하여야 합니다.


---

### alert

> Application > Method > alert

**Description**

Application 의 경고 대화상자를 표시하는 메소드입니다.

**Syntax**

```javascript
Application.alert( strText )
```

**Parameters**

```
대화상자에 표시할 텍스트를 설정합니다
```

**Return**

없음

**Remark**

- 현재 활성화되어 있는 Form 의 중앙에 대화상자를 표시합니다.


---

### cancelTransaction

> Application > Method > cancelTransaction

**Description**

진행중인 트렌젝션을 중지 시키는 메소드입니다.

**Syntax**

```javascript
cancelTransaction( [strSvcID] )
```

**Parameters**

```
중지 시킬 트랜잭션의 ID 를 설정합니다.

값 생략 시 트랜잭션 중 ESC 키를 입력했을 때와 동일하게 통신을 강제로 중지시킵니다.
```

**Return**

없음

**Remark**

- Sync 로 동작되는 트렌잭션에는 적용되지 않습니다.


---

### clearEventHandler

> Application > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다

**Syntax**

```javascript
Application.clearEventHandler( strEventID )
```

**Parameters**

```
모든 핸들러 함수를 제거할 이벤트의 ID 를 설정합니다.
```

**Return**

특정 이벤트에서 제거된 핸들러 함수의 갯수를 반환합니다.

**Remark**

- 특정 핸들러 함수만 제거하려면 removeEventHandler() 메소드를 사용하시기 바랍니다.


---

### confirm

> Application > Method > confirm

**Description**

Application 의 선택 대화상자를 표시하는 메소드입니다.

**Syntax**

```javascript
Application.confirm( strText [,strCaption [,strType]] )
```

**Parameters**

```
대화상자에 표시할 텍스트를 설정합니다.
```

**Return**

표시된 선택 대화상자에서 "확인" 버튼을 선택하면 "true"를 반환합니다.
표시된 선택 대화상자에서 "취소" 버튼을 선택하면 "false"를 반환합니다.

**Remark**

- 현재 활성화되어 있는 Form 의 중앙에 대화상자를 표시합니다.


---

### exit

> Application > Method > exit

**Description**

실행중인 넥사크로 어플리케이션을 종료시키는 메소드입니다.

**Syntax**

```javascript
Application.exit()
```

**Parameters**

var objApp = nexacro.getApplication() ;
objApp.exit() ;

**Return**

없음

**Remark**

- exit() 메소드 이후에 정의된 스크립트까지 실행하고 어플리케이션을 종료합니다.
   단, exit() 메소드 이후 스크립트에 정의된 alert(), confirm() 메소드는 실행되지 않습니다.


◆ WRE 제약

- 애플리케이션을 외부 페이지 링크 또는 window.open 함수로 열지 않고 직접 브라우저 주소창에 URL을 입력하고 실행할 때 발생하는 제약사항입니다.

- 스크립트에서 exit 메소드 실행 시 열려있는 Form이 종료되고 실행 중인 넥사크로 애플리케이션을 종료시키지만 현재 브라우저 탭은 닫히지 않으며 콘솔에 스크립트 에러가 표시됩니다.

- 브라우저 탭은 닫히지 않지만 애플리케이션 종료 요청은 처리되기 때문에 exit 메소드 실행 시 onexit, onbeforeexit 이벤트가 발생합니다.

**See Also**

Environment.userNotify


---

### findEventHandler

> Application > Method > findEventHandler

**Description**

Application 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
Application.findEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 찾을 이벤트의 ID를 설정합니다.
```

**Return**

이벤트에서 찾으려고 하는 핸들러 함수의 인덱스를 반환합니다.

찾으려고 하는 핸들러 함수가 존재하지 않는다면 "-1"을 반환합니다.

**Remark**

- 이벤트에 등록된 핸들러 함수의 인덱스는 "0"부터 시작합니다.


---

### getActiveForm

> Application > Method > getActiveForm

**Description**

Application 에서 현재 활성화된 Form 객체를 반환하는 메소드입니다.

**Syntax**

```javascript
Application.getActiveForm()
```

**Parameters**

var objApp = nexacro.getApplication() ; 
var objForm = objApp.getActiveForm() ;

**Return**

현재 포커스를 가진 컴포넌트의 부모 Form 을 반환합니다.

Div 와 같은 컨테이너 컴포넌트에 속한 컴포넌트에 포커스가 있을 경우 Div 의 부모 Form 을 반환합니다.


---

### getActiveFrame

> Application > Method > getActiveFrame

**Description**

Application 에서 현재 활성화된 Frame 객체를 반환하는 메소드입니다.

**Syntax**

```javascript
Application.getActiveFrame()
```

**Parameters**

var objApp = nexacro.getApplication() ;
var objForm = objApp.getActiveFrame() ;

**Return**

현재 포커스를 가진 Form 의 부모 Frame 을 반환합니다.

Modal, Modeless 자식 Frame 을 포함하여 현재 포커스를 가진 Frame 이 반환됩니다.

**Remark**

모달, 모덜리스 자식프레임을 포함하여 현재 포커스를 가진 프레임이 반환됩니다.

프레임세트내 프레임이 활성화된 경우, 활성화된 폼을 담고 있는 프레임이 반환됩니다.


---

### getEventHandler

> Application > Method > getEventHandler

**Description**

Application 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
Application.getEventHandler( strEventID, nIdx )
```

**Parameters**

```
핸들러 함수를 얻을 이벤트의 ID를 설정합니다.
```

**Return**

지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.

지정된 인덱스에 핸들러 함수가 존재하지 않는다면 "null"을 반환합니다.


---

### insertEventHandler

> Application > Method > insertEventHandler

**Description**

Application 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
Application.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

### isExistVariable

> Application > Method > isExistVariable

**Description**

Application 의 AppVariables 영역에 특정 변수의 존재여부를 반환하는 메소드입니다.

**Syntax**

```javascript
Application.isExistVariable( strID );
```

**Parameters**

```
존재여부를 확인할 변수의 ID 를 설정합니다.
```

**Return**

변수가 AppVariables 영역에 존재하면 "true" 를 반환합니다.
변수가 AppVariables 영역에 존재하지 않으면 "false" 를 반환합니다.


---

### lookup

> Application > Method > lookup

**Description**

인수로 전달된 오브젝트를 Application 전체를 대상으로 검색하여 반환하는 메소드입니다.

**Syntax**

```javascript
Application.lookup( strObjectID )
```

**Parameters**

```
검색하여 찾고자 하는 오브젝트의 ID를 문자열로 설정합니다.
```

**Return**

검색하여 찾아낸 오브젝트를 반환합니다.


---

### removeEventHandler

> Application > Method > removeEventHandler

**Description**

Application 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
Application.removeEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 제거할 이벤트의 ID를 설정합니다.
```

**Return**

핸들러 함수 제거에 성공하면 "1"을 반환합니다.
핸들러 함수 제거에 실패하면 "0"을 반환합니다.

**Remark**

- 추가된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하시기 바랍니다.


---

### removeEventHandlerLookup

> Application > Method > removeEventHandlerLookup

**Description**

Application 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
Application.removeEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 제거할 이벤트의 ID를 설정합니다.
```

**Return**

핸들러 함수 제거에 성공하면 "1"을 반환합니다.
핸들러 함수 제거에 실패하면 "0"을 반환합니다

**Remark**

- 핸들러 함수가 제거되면 핸들러 함수의 인덱스가 "0" 번부터 재조정됩니다.

- 이벤트에 등록된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하여야 합니다.


---

### removeTray

> Application > Method > removeTray

**Description**

Application 의 trays 속성에 등록된 Tray 오브젝트를 삭제하는 메소드입니다.

**Syntax**

```javascript
application.removeTray([strID]);
```

**Parameters**

```
Application 의 trays 속성에서 삭제될 Tray 오브젝트의 ID 를 설정합니다.

값을 설정하지 않으면 등록된 전체 Tray 오브젝트가 삭제됩니다.
```

**Return**

없음


---

### removeVariable

> Application > Method > removeVariable

**Description**

Application 의 AppVariables 영역에서 변수를 제거하는 메소드입니다.

**Syntax**

```javascript
Application.removeVariable( strID )
```

**Parameters**

```
제거될 변수의 ID를 설정합니다.
```

**Return**

없음

**Remark**

- Environment 영역에 있는 변수를 제거하기 위해서는 removeEnvironmentVariable() 메소드를 사용하여야 합니다.

- 통신 시 사용되는 Cookie 를 제거하기 위해서는 removeCookieVariable() 메소드를 사용하여야 합니다.


---

### setEventHandler

> Application > Method > setEventHandler

**Description**

Application 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
Application.setEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 변경할 이벤트의 ID를 설정합니다.
```

**Return**

첫번째 핸들러 함수 변경에 성공하면 "0"을 반환합니다.
첫번째 핸들러 함수 변경에 실패하면 "-1"을 반환합니다.

**Remark**

- 인덱스가 "0"번인 핸들러 함수를 새로운 함수로 대체합니다.

- 인덱스가 "0"번인 핸들러 함수가 없다면 "0"번 인덱스에 새로운 함수를 핸들러 함수로 추가합니다.


---

### setEventHandlerLookup

> Application > Method > setEventHandlerLookup

**Description**

Application 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
Application.setEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 변경할 이벤트의 ID를 설정합니다.
```

**Return**

첫번째 핸들러 함수 변경에 성공하면 "0"을 반환합니다.
첫번째 핸들러 함수 변경에 실패하면 "-1"을 반환합니다.

**Remark**

- 인덱스가 "0"번인 핸들러 함수를 검색된 함수로 대체합니다.

- 인덱스가 "0"번인 핸들러 함수가 없다면 "0"번 인덱스에 검색된 함수를 핸들러 함수로 추가합니다.


---

### setVariable

> Application > Method > setVariable

**Description**

Application 의 AppVariables 영역에 변수를 추가 또는 값을 설정하는 메소드입니다.

**Syntax**

```javascript
Application.setVariable( strID, varValue )
```

**Parameters**

```
추가될 변수명을 설정합니다.
```

**Return**

변수 추가에 성공하면 "1" 을 반환합니다.
변수 추가에 실패하면 "0" 을 반환합니다.
동일한 변수가 존재하면 "-1" 을 반환합니다.

**Remark**

- AppVariables 영역에 이미 존재하는 변수명일 경우에는 값을 변경합니다.

- Environment 영역에 변수를 추가하기 위해서는 setEnvironmentVariable() 메소드를 사용하여야 합니다.

- 통신 시 사용되는 Cookie 를 추가하기 위해서는 setCookieVariable() 메소드를 사용하여야 합니다.


---

### trace

> Application > Method > trace

**Description**

추적 로그를 남기는 메소드입니다.

**Syntax**

```javascript
Application.trace( strLog )
```

**Parameters**

```
로그로 출력할 문자열을 설정합니다.
```

**Return**

없음

**Remark**

- trace() 메소드로 출력할 수 있는 로그의 최대 길이는 브라우저 버전 및 종류에 따라 달라질 수 있습니다.

**See Also**

Environment.tracemode


---

### transaction

> Application > Method > transaction

**Description**

Application 영역에 정의된 Dataset 의 데이터를 갱신하기 위한 서비스를 호출하고, 트랜잭션이 완료되면 콜백함수을 실행하는 메소드입니다.

**Syntax**

```javascript
Application.transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArgument[, strCallbackFunc[,bAsync[,nDataType[,bCompress]]]])
```

**Parameters**

```
트랜잭션을 구분하기 위한 ID를 문자열로 설정합니다.
```

**Return**

strCallbackFunc 파라미터값을 설정하지 않은 경우에만 반환값이 있습니다.

Promise 오브젝트를 반환합니다.
Promise 오브젝트는 자바스크립트 표준 내장 객체입니다.
내부적으로 resolve 수행 시점은 transaction 수행이 완료되는 시점입니다.

**Remark**

- Application 과 Form 에 정의된 transaction() 메소드는 기본적인 기능은 동일하지만 DataSet 과 콜백함수를 찾는 영역이 다릅니다.
  > Application 의 transaction() 메소드는 DataSet 과 콜백함수가 Application 영역에 정의되어 있어야 합니다.
  > 반면 Form 의 transaction() 메소드는 Form 영역에서 DataSet 과 콜백함수를 우선적으로 검색하지만,
  > Form 영역에 DataSet 과 콜백함수가 정의되어 있지 않으면 상위 영역으로 검색을 확장시킵니다.
  > Form 이 Container Component 에 연결되어 있으면 상위 컴포넌트도 검색 영역에 포함됩니다.
  > Form 영역에서 strInDatasets, strOutDatasets 파라미터 설정 시 "."을 포함한 형식을 사용하는 경우에는 상위 영역으로 검색을 확장하지 않습니다.

- 트랜잭션은 기본적으로 비동기 방식으로 동작합니다.
   예외적으로 strURL 에 로컬 경로를 설정하는 경우에는 bAsync 옵션과 무관하게 동기(Sync) 방식으로 동작합니다.

- strInDatasets 의 추가 옵션
   strInDatasets 에 각각의 DataSet ID 뒤에 ":U", ":A", ":N" 의 옵션을 붙일 수 있습니다.
  > ":U" 는 갱신된 정보만을 보냅니다.
  > ":A" 는 모든 정보를 보냅니다.
  > ":N" 은 현재 삭제한 데이터를 제외한 정보를 Normal 상태로 보냅니다. 지정하지 않은 DataSet 은 Normal 로 동작합니다.

- strOutDatasets 관련 주의사항
   strOutDatasets 으로 입력받는 DataSet 은 Datasetid.load() 와 마찬가지로 
   기존에 가진 열/레코드 대신 수신받은 DataSet 의 열/레코드로 모두 변경됩니다.

- strCallbackFunc 에 관한 주의사항
   strCallbackFunc 를 "Transaction_Callback" 으로 설정할 경우,
   해당 Application 영역에는 반드시 this.transaction_Callback = function(strSvcID, nErrorCode, strErrorMag) 이 존재해야 합니다.
   이 콜백 함수는 위와 같은 형태이며, 콜백 함수의 strSvcID 는 입력된 strSvcID 와 동일합니다.

- 트랜잭션 수행 후 서버로 부터 전달된 파라미터가 있을 경우 처리되는 사항
  > 파라미터의 변수명을 Application > Environment 영역 순서로 찾아 처음 일치하는 영역의 변수값만 업데이트합니다.
     전체 영역에서 일치하는 변수가 없을 경우에는 전달된 파라미터값이 무시됩니다.

- 트랜잭션 수행 후 서버로 부터 전달된 Return XML 의 ErrorCode 파라미터 관련 주의사항
  > ErrorCode 가 0 미만의 음수이면 트랜잭션이 실패로 처리되고, Input DataSet 의 상태와 바인딩된 컴포넌트는 리드로(redraw) 되지 않습니다.
     단, Environment 의 datasetloadtype 속성값이 "errorallow" 인 경우는 Output DataSet 에 데이터를 로드합니다.
  > ErrorCode 가 0 이상이면 트랜잭션이 성공으로 처리되고, Input DataSet 의 상태는 "Normal" 로 변경되며 바인딩된 컴포넌트는 리드로(redraw) 됩니다.
  > 서버로 부터 전달된 데이터가 없을 경우 (서버에서 HttpPlatformResponse 자체를 실행하지 않음)에는
     ErrorCode 는 -1 값으로, ErrorMsg 는 "Stream Data is null!" 값으로 설정된 후 콜백 함수가 호출됩니다.

- 통신을 강제로 중지시키는 방법
   트랜잭션 처리 중이라도 ESC 키를 누르면 통신을 강제로 중지시킬 수 있습니다.

- Get/Post 방식관련 참고사항  
   1. strArgument 와 strInDatasets 이 "" 이고, Environment 의 Cookies 영역에 변수가 없으면 GET 방식으로 동작합니다.
   2. strArgument 나 strInDatasets 에 값이 있거나 Environment 의 Cookies 영역에 변수가 있으면 POST로 동작합니다.
   3. 위 1번의 상태에서 addcookietovariable 값이 "true" 이면 서버와의 첫 통신시에는 GET 방식으로 동작하고 이후부터는 서버에서 유입되는
      Cookie 의 유무에 따라 Cookie 가 있으면 POST, 없으면 GET 방식으로 동작합니다.
     (addcookietovariable 값이 "true"이면 Cookie 가 Environment 의 Cookies 영역에 변수로 자동 추가 되기 때문.)

- 서버로부터 데이터를 Chunked 방식으로 여러번에 걸쳐서 받을 경우 progressload 속성으로 데이터를 로드하는 방식을 설정할 수 있습니다.
   자세한 내용은 "Dataset > progressload" 항목을 참고하시기 바랍니다.

- 넥사크로 스튜디오를 사용해 넥사크로를 실행했을 때 트랜잭션을 수행하면 CacheLevel 의 설정과 상관없이 "none" 으로 동작합니다.

- SSV 타입 참고사항
   > 넥사크로 Web 버전 과 Mobile 버전 연동을 위하여 CSV 포맷을 확장하여 사용합니다.
   > 확장내역 : RowType 추가, 구분자 변경(콤마 -> US, 줄바꿈(CR/LF) -> RS)
   > Empty String 과 undefined 의 구분을 위하여 undefined 는 ETX(end of text)[code:0x03] 값으로 대체되어 서버로 전송됩니다. 


◆ WRE 제약
 
- nDataTYpe 값이 “Binary”인 경우에는 bAsync 값과 상관없이 비동기(ASync)로 처리합니다.

- bCompress 값은 지원하지 않습니다.

- bAsync 값을 false로 설정하면 Environment의 httptimeout 속성에 설정된 대기시간이 적용되지 않습니다.

 
◆ Mobile 제약
 
- iOS/iPadOS 는 비동기(Async) 방식만 지원하여 bAsync 값이 적용되지 않습니다.


---

### 이벤트 (Events)

### onafteruserconfirm

> Application > Event > onafteruserconfirm

**Description**

UserConfirm 창이 닫힌 후에 발생하는 이벤트입니다.

**Syntax**

```javascript
onafteruserconfirm(obj:nexacro.Application,e:nexacro.EventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- filesecurelevel 속성값이 "all" 일 때 허용된 경로나 파일 이외에 접근하면, 접근 허용여부를 확인하는 UserConfirm 창이 표시됩니다.


---

### onbeforeexit

> Application > Event > onbeforeexit

**Description**

Application 이 종료되기 전에 발생하는 이벤트입니다.

**Syntax**

```javascript
onbeforeexit(obj:nexacro.Application,e:nexacro.ExitEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

- 확인창 표시
(NRE에서만 지원하는 기능입니다).

이벤트 핸들러 함수에서 리턴값으로 문자열 설정 시 Application 종료를 위한 확인창이 표시됩니다.
리턴값으로 설정한 문자열이 종료를 위한 확인창에 사용됩니다.

이벤트 핸들러 함수에서 리턴값을 생략하거나 null, undefined, 빈문자열("") 으로 설정 시 확인창이 표시되지 않습니다.

**Remark**

- 일반적으로 Application 종료 전 사용자의 확인을 받을 때 사용하는 이벤트입니다.

- onbeforeexit 이벤트 발생 후 모든 Frame 에서 onbeforeclose 이벤트가 발생합니다.

- onbeforeclose 이벤트는 최하위부터 최상위로 전파되는 이벤트입니다.
   ChildFrame 의 하위 오브젝트에 onbeforeclose 이벤트가 정의되어 있다면 최하위 오브젝트의 이벤트부터 차례로 수행됩니다.
   최종 onbeforeclose 이벤트 수행 후 각 이벤트의 리턴값은 누적되어 종료를 위한 확인창에 모두 표시됩니다.

- 종료를 위한 확인창에서 "확인"을 선택하면 onexit 이벤트가 발생하고 Application 이 종료됩니다.

- 종료를 위한 확인창에서 "취소"를 선택하면 onexit 이벤트가 발생하지 않고 Application 이 종료되지 않습니다.


◆ Desktop WRE 제약

- Edge, Chrome, FireFox 일 때 onbeforeexit 이벤트에 작성한 alert(), confirm() 메소드는 수행되지 않습니다.
   브라우저의 제약사항이므로 alert(), confirm() 메소드 사용에 주의하여야 합니다.


---

### onbeforeuserconfirm

> Application > Event > onbeforeuserconfirm

**Description**

UserConfirm 창이 표시 되기 전에 발생하는 이벤트입니다.

**Syntax**

```javascript
onbeforeuserconfirm(obj:nexacro.Application,e:nexacro.EventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- filesecurelevel 속성값이 "all" 일 때 허용된 경로나 파일 이외에 접근하면, 접근 허용여부를 확인하는 UserConfirm 창이 표시됩니다.


---

### onduplicateexecution

> Application > Event > onduplicateexecution

**Description**

중복실행 불가로 설정된 어플리케이션을 중복으로 실행 시 발생하는 이벤트입니다.

**Syntax**

```javascript
onduplicateexecution(obj:nexacro.Application,e:nexacro.DuplicateExecutionEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Windows NRE 에서만 발생하는 이벤트입니다.

- 어플리케이션 실행 시 "-OO" 옵션값을 "true" 로 설정하면 "OnlyOne" 상태로 어플리케이션이 실행됩니다.
   "OnlyOne" 상태에서는 어플리케이션이 중복으로 실행되지 않고, 한 개만 실행할 수 있습니다.

- 사용자가 이미 실행된 어플리케이션을 중복 실행하려고 하는 경우 먼저 실행된 어플리케이션에서 이를 감지하고 처리할 수 있습니다.


---

### onerror

> Application > Event > onerror

**Description**

Application 에서 실행한 Transaction 에서 에러가 생겼을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.Application,e:nexacro.ErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면
  > Environment 의 onerror 로 이벤트를 전파하지 않습니다.
  > 실행중인 Transaction 을 중지시키지 않고 유지합니다.

이벤트에서 리턴값으로 false 를 반환하면
  > Environment 의 onerror 로 이벤트를 전파합니다.
  > 실행중인 Transaction 의 중지여부는 Environment 의 onerror 에서 리턴값으로 결정됩니다.
  > Environment 에 onerror 이벤트가 정의되어 있지 않으면 실행중인 Transaction 은 중지됩니다.

이벤트의 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- Application 의 Transaction 이 실행중일 때 ESC 키를 입력하여 Application 의 onerror 이벤트를 발생 시킬 수 있습니다.
   Form 의 Transaction 이 실행중일 때 ESC 키를 입력하면 Form 의 onerror 이벤트가 발생합니다.

- Application 에서 발생한 onerror 이벤트는 Form 으로 전파되지 않습니다.


---

### onexit

> Application > Event > onexit

**Description**

Application 이 종료될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onexit(obj:nexacro.Application,e:nexacro.ExitEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- onexit 이벤트에서 트랜잭션을 비동기(Async) 방식으로 수행하면 넥사크로 애플리케이션이 종료되면서 통신을 모두 중지시키기 때문에 정상적으로 처리되지 않을 수 있습니다.
  이런 경우에는 트랜잭션을 동기(Sync) 방식으로 수행해서 처리합니다.


◆ Desktop WRE 제약

- Edge, Chrome, FireFox 일 때 onexit 이벤트에 작성한 alert(), confirm() 메소드는 수행되지 않습니다.
   브라우저의 제약사항이므로 alert(), confirm() 메소드 사용에 주의하여야 합니다.


---

### onload

> Application > Event > onload

**Description**

Application 에 등록된 모든 오브젝트와 데이터가 로드된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
onload(obj:nexacro.Application,e:nexacro.LoadEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Application 의 준비가 완료된 상태입니다.

- Environment 의 onload 이벤트 발생 후에 발생하는 이벤트입니다.


---

### onloadforms

> Application > Event > onloadforms

**Description**

ChildFrame 에 연결된 모든 Form 이 모두 로드되면 발생하는 이벤트입니다.

**Syntax**

```javascript
onloadforms(obj:nexacro.Application,e:nexacro.LoadEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onloadingappvariables

> Application > Event > onloadingappvariables

**Description**

Application 의 AppVariables 영역에 정의된 오브젝트가 모두 생성된 후에 발생하는 이벤트입니다.

**Syntax**

```javascript
onloadingappvariables(obj:nexacro.Application,e:nexacro.LoadEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 이벤트가 발생하는 시점에는 생성된 DataSet 에 데이터나 Application 에 Form 이 로딩되기 전입니다.
  따라서 이벤트에서 나머지 오브젝트 로딩에 필요한 정보를 추가, 수정하면 변경된 값을 적용시킬 수 있습니다.


---

### onnotification

> Application > Event > onnotification

**Description**

모바일 기기에서 넥사크로에 대한 Notification 을 수신하였을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onnotification(obj:nexacro.Application,e:nexacro.NotificationEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

## Application > Objects

### Objects

> Application > Objects

**Description**

어플리케이션에서 사용되는 시스템 트레이로써 다중 트레이를 등록할 수 있습니다.


---

## Application > Tray

### Tray

> Application > Objects > Tray

**Description**

어플리케이션에서 사용되는 시스템 트레이로써 다중 트레이를 등록할 수 있습니다.

**Property**

| Name | Description |
| --- | --- |
| icon | 작업표시줄에 표시되는 Tray 의 아이콘 이미지를 설정하는 속성입니다. |
| items | Tray 에 등록된 TrayPopupMenu 오브젝트의 정보를 갖는 읽기전용 속성입니다. |
| name | Tray 의 이름을 설정하는 속성입니다. |
| tooltip | Tray 아이콘에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addItem | Tray 의 items 속성에 TrayPopupMenu 오브젝트를 추가하는 메소드입니다. |
| deleteItem | Tray 의 items 속성에 등록된 TrayPopupMenu 오브젝트를 삭제하는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 Tray 를 삭제하는 메소드입니다. |
| findItem | Tray 의 items 속성에 등록된 특정 TrayPopupMenu 오브젝트의 인덱스를 반환하는 메소드입니다. |
| getItemCount | Tray 의 items 속성에 등록된 TrayPopupMenu 오브젝트의 갯수를 반환하는 메소드입니다. |
| hideBalloonTip | Tray에 표시된 풍선팁을 숨기는 메소드입니다. |
| init | 스크립트로 Tray 를 동적 생성한 후에 초기화하는 메소드입니다. |
| insertItem | Tray 의 items 속성의 특정 위치에 TrayPopupMenu 오브젝트를 추가하는 메소드입니다. |
| show | 스크립트에서 동적으로 생성한 Tray 를 작업표시줄에 표시하는 메소드입니다. |
| showBalloonTip | Tray 에 풍선팁을 표시하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onballoontipclick | Tray에 표시된 풍선팁을 클릭할 때 발생하는 이벤트입니다. |
| onballoontiphide | Tray에 표시된 풍선팁이 숨겨질 때 발생하는 이벤트입니다. |
| onballoontipshow | Tray에 풍선팁을 표시할 때 발생하는 이벤트입니다. |
| ondblclick | Tray 아이콘을 마우스 왼쪽버튼으로 더블클릭 했을 때 발생하는 이벤트입니다. |
| onlbuttonup | Tray 아이콘에서 마우스 왼쪽버튼을 클릭했을 때 발생하는 이벤트입니다. |
| onrbuttonup | Tray 아이콘에서 마우스 오른쪽버튼을 클릭했을 때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### icon

> Application > Objects > Tray > Property > icon

**Description**

작업표시줄에 표시되는 Tray 의 아이콘 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
Tray.icon[= strIcon]
```

**Setting Syntax**

```javascript
strIcon ::= <systemIcon> | <urlIcon>
```
- **`<systemIcon>`** — 시스템에 정의된 아이콘의 이름을 설정합니다.

사용가능한 아이콘은 "question", "information", "error", "warning", "winlogo", "application" 입니다.
- **`urlIcon`** — 확장자가 "*.ico" 인 아이콘 파일을 설정합니다.

**Remark**

- 아이콘 파일의 경로는 시스템 제공 아이콘이나 Web 경로에 있는 ico 파일이 아니면 등록되지 않습니다.


---

### items

> Application > Objects > Tray > Property > items

**Description**

Tray 에 등록된 TrayPopupMenu 오브젝트의 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Tray.items
```

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication() ;
var objItem0 = objApp.trays[0].items[0] ;
```

**Remark**

- Tray 에서 사용하기위해 만들어 놓은 팝업메뉴는 Tray 에서 이벤트를 받았을때 스크립트를 통해 제어합니다.


---

### name

> Application > Objects > Tray > Property > name

**Description**

Tray 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
Tray.name[= strName]
```

**Setting Syntax**

- **`strName`** — Tray 의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.


---

### tooltip

> Application > Objects > Tray > Property > tooltip

**Description**

Tray 아이콘에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다.

**Syntax**

```javascript
Tray.tooltip[= strTooltip]
```

**Setting Syntax**

```javascript
var objApp = nexacro.getApplication();
objApp.trays["Tray0"].tooltip = "Tray ToolTip";
```
- **`strTooltip`** — 풍선도움말에 표시할 텍스트를 설정합니다.

"null"값 설정 시 풍선도움말이 표시되지 않습니다.

**Remark**

- 마우스 포인터가 Tray 아이콘 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.


---

### 메서드 (Methods)

### addItem

> Application > Objects > Tray > Method > addItem

**Description**

Tray 의 items 속성에 TrayPopupMenu 오브젝트를 추가하는 메소드입니다.

**Syntax**

```javascript
Tray.addItem(strID,objPopupMenu)
```

**Parameters**

```
Tray 의 Items 속성에 추가될 TrayPopupMenu 오브젝트의 ID 를 설정합니다.
```

**Return**

items 속성에 추가된 TrayPopupMenu 오브젝트의 인덱스를 반환합니다.

TrayPopupMenu 오브젝트 추가에 실패했을 경우 "-1" 을 반환합니다.

**Remark**

- 이미 등록된 ID 를 추가시키려 할 경우 추가 되지 않습니다.


---

### deleteItem

> Application > Objects > Tray > Method > deleteItem

**Description**

Tray 의 items 속성에 등록된 TrayPopupMenu 오브젝트를 삭제하는 메소드입니다.

**Syntax**

```javascript
Tray.deleteItem( strID )
```

**Parameters**

```
Tray 의 Items 속성에서 삭제될 TrayPopupMenu 오브젝트의 ID 를 설정합니다.
```

**Return**

items 속성에서 삭제된 TrayPopupMenu 오브젝트의 인덱스를 반환합니다.

TrayPopupMenu 오브젝트 삭제에 실패했을 경우 -1 을 반환합니다.


---

### destroy

> Application > Objects > Tray > Method > destroy

**Description**

스크립트에서 동적으로 생성한 Tray 를 삭제하는 메소드입니다.

**Syntax**

```javascript
Tray.destroy()
```

**Parameters**

objTray.destroy();

**Return**

Tray 가 정상적으로 삭제되면 "true"를 반환합니다.
Tray 가 정상적으로 삭제되지 않으면 "false"를 반환합니다.

**Remark**

- 동적으로 생성한 Tray 를 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.


---

### findItem

> Application > Objects > Tray > Method > findItem

**Description**

Tray 의 items 속성에 등록된 특정 TrayPopupMenu 오브젝트의 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
Tray.findItem(strID)
```

**Parameters**

```
items 속성에 등록된 TrayPopupMenu 오브젝트의 ID 를 설정합니다.
```

**Return**

items 속성에 등록된 strID 의 인덱스를 반환합니다.


---

### getItemCount

> Application > Objects > Tray > Method > getItemCount

**Description**

Tray 의 items 속성에 등록된 TrayPopupMenu 오브젝트의 갯수를 반환하는 메소드입니다.

**Syntax**

```javascript
Tray.getItemCount()
```

**Parameters**

var objApp = nexacro.getApplication() ;
var nItemCnt = objApp.trays["Tray0"].getItemCount();

**Return**

items 속성에 등록된 TrayPopupMenu 오브젝트의 갯수를 반환합니다.


---

### hideBalloonTip

> Application > Objects > Tray > Method > hideBalloonTip

**Description**

Tray에 표시된 풍선팁을 숨기는 메소드입니다.

**Syntax**

```javascript
Tray.hideBalloonTip()
```

**Return**

없음

**Remark**

메소드 호출 시 onballoontiphide 이벤트가 발생합니다.


---

### init

> Application > Objects > Tray > Method > init

**Description**

스크립트로 Tray 를 동적 생성한 후에 초기화하는 메소드입니다.

**Syntax**

```javascript
Tray.init(strID, icon, tooltip);
```

**Parameters**

```
동적 생성된 Tray 의 ID 를 설정합니다.
```

**Return**

없음

**Remark**

- show() 메소드로 컴포넌트가 화면에 표시되면 초기화가 끝난 상태입니다.
  초기화가 끝난 후에 init() 메소드를 호출하면 오류가 발생하며 설정한 값은 적용되지 않습니다.

- 스크립트에서 동적으로 Tray를 생성한 후에만 사용할 수 있습니다.
  동적으로 생성한 Tray가 아닌 경우에는 오동작이 발생할수 있습니다.

- 동적으로 Tray 를 생성 시 초기값을 설정한 경우에는 init() 메소드를 다시 호출할 필요가 없습니다.


---

### insertItem

> Application > Objects > Tray > Method > insertItem

**Description**

Tray 의 items 속성의 특정 위치에 TrayPopupMenu 오브젝트를 추가하는 메소드입니다.

**Syntax**

```javascript
Tray.insertItem(nIndex, strID, objPopupMenu)
```

**Parameters**

```
TrayPopupMenu 오브젝트가 추가될 위치의 인덱스를 설정합니다.
```

**Return**

TrayPopupMenu 오브젝트가 추가된 위치의 인덱스를 반환합니다.

TrayPopupMenu 오브젝트 추가에 실패했을 경우 "-1" 을 반환합니다.

**Remark**

- 이미 등록된 ID 를 추가시키려 할 경우 추가 되지 않습니다.


---

### show

> Application > Objects > Tray > Method > show

**Description**

스크립트에서 동적으로 생성한 Tray 를 작업표시줄에 표시하는 메소드입니다.

**Syntax**

```javascript
Tray.show()
```

**Parameters**

var objApp = nexacro.getApplication() ;
var objTray = new nexacro.Tray("Tray00", objApp);

objTray.init("Tray00", "information", "Tray Tooltip");
var nIndex = objApp.addTray("Tray00", objTray);

objApp.trays["Tray00"].show();

**Return**

없음

**Remark**

- 스크립트에서 Tray 를 동적으로 생성한 후에만 사용이 가능합니다.
   동적으로 생성한 Tray 가 아닌 경우에는 오동작이 발생할 수 있습니다.

- Application 의 addTray() 메소드를 사용하여 동적으로 생성한 Tray 를 추가한 후에 show() 메소드를 수행하여야 합니다.

- 동적으로 Tray 를 생성 시 초기값을 설정한 경우에는 init() 메소드를 다시 호출할 필요가 없습니다.


---

### showBalloonTip

> Application > Objects > Tray > Method > showBalloonTip

**Description**

Tray 에 풍선팁을 표시하는 메소드입니다.

**Syntax**

```javascript
Tray.showBalloonTip(strTitleIcon, strTitle, strText [, bNoSound])
```

**Parameters**

```
풍선팁의 타이틀 왼편에 나타나는 아이콘의 이름 및 경로를 설정합니다.

아이콘으로 사용 가능한 시스템 아이콘은 "information", "warning", "error", "none" 입니다.
```

**Return**

없음

**Remark**

풍선팁이 표시된 상태에서 showBalloonTip 메소드를 실행하면 기존 풍선팁이 숨겨지고 새로운 풍선팁이 표시됩니다.


---

### 이벤트 (Events)

### onballoontipclick

> Application > Objects > Tray > Event > onballoontipclick

**Description**

Tray에 표시된 풍선팁을 클릭할 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onballoontipclick(obj:nexacro.Tray,e:nexacro.ClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

풍선팁 클릭 시 풍선팁은 자동으로 숨겨집니다.
풍선팁을 클릭해서 숨겨지는 경우에는 onballoontiphide 이벤트가 발생하지 않습니다.


---

### onballoontiphide

> Application > Objects > Tray > Event > onballoontiphide

**Description**

Tray에 표시된 풍선팁이 숨겨질 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onballoontiphide(obj:nexacro.Tray,e:nexacro.TrayBalloonTipHideEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

hideBalloonTip 메소드를 호출하거나 timeout에 의해 풍선팁이 숨겨질 때 이벤트가 발생합니다.


---

### onballoontipshow

> Application > Objects > Tray > Event > onballoontipshow

**Description**

Tray에 풍선팁을 표시할 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onballoontipshow(obj:nexacro.Tray,e:nexacro.EventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### ondblclick

> Application > Objects > Tray > Event > ondblclick

**Description**

Tray 아이콘을 마우스 왼쪽버튼으로 더블클릭 했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondblclick(obj:nexacro.Tray,e:nexacro.MouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- ondblclick 이벤트는 onlbuttonup -> onlbuttonup -> ondblclick 순서로 발생합니다.


---

### onlbuttonup

> Application > Objects > Tray > Event > onlbuttonup

**Description**

Tray 아이콘에서 마우스 왼쪽버튼을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onlbuttonup(obj:nexacro.Tray,e:nexacro.MouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onrbuttonup

> Application > Objects > Tray > Event > onrbuttonup

**Description**

Tray 아이콘에서 마우스 오른쪽버튼을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrbuttonup(obj:nexacro.Tray,e:nexacro.MouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

## Application > Tray > Objects

### Objects

> Application > Objects > Tray > Objects

**Description**

Tray 에서 팝업메뉴로 사용되는 오브젝트입니다.


---

## Application > Tray > TrayPopupMenu

### TrayPopupMenu

> Application > Objects > Tray > Objects > TrayPopupMenu

**Description**

Tray 의 PopupMenu 오브젝트입니다. 
시스템이 제공하는 API PopupMenu를 사용합니다.

**Property**

| Name | Description |
| --- | --- |
| captioncolumn | innerdataset 속성에 설정된 DataSet 의 Column 중 팝업메뉴 아이템의 텍스트가 정의된 Column 을 설정하는 속성입니다. |
| checkboxcolumn | 체크이미지를 서브메뉴 아이템에 표시할지 여부가 정의된 Column 을 설정하는 속성입니다. |
| enablecolumn | innerdataset 속성에 설정된 DataSet 의 Column 중 팝업메뉴 아이템의 활성화 여부가 정의된 Column을 설정하는 속성입니다. |
| hotkeycolumn | innerdataset 속성에 설정된 DataSet 의 Column 중 메뉴 아이템의 단축키가 정의된 Column을 설정하는 속성입니다. |
| iconcolumn | 팝업메뉴 아이템에 표시되는 아이콘의 정보가 정의된 Column 을 설정하는 속성입니다. |
| id | TrayPopupMenu의 고유 식별자를 설정하는 속성입니다. |
| idcolumn | innerdataset 속성에 설정된 DataSet 의 Column 중 팝업메뉴 아이템의 ID가 정의된 Column을 설정하는 속성입니다. |
| innerdataset | Tray 의 팝업메뉴 아이템이 정의된 DataSet 의 ID를 설정하는 속성입니다. |
| levelcolumn | innerdataset 속성에 설정된 DataSet 의 Column 중 팝업메뉴 아이템의 상/하위 관계가 정의된 Column을 설정하는 속성입니다. |
| userdatacolumn | innerdataset 속성에 설정된 DataSet의 Column 중 사용자 데이터를 처리하기 위한 Column을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| trackPopup | Tray 의 팝업메뉴를 마우스 커서 위치에 표시하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| oninnerdatachanged | TrayPopupMenu 의 innerdataset 속성에 바인딩된 DataSet 에서 데이터 변경이 된 후 발생하는 이벤트입니다. |
| onmenuclick | Tray 에서 메뉴 아이템을 마우스 왼쪽 버튼으로 클릭했을 때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### captioncolumn

> Application > Objects > Tray > Objects > TrayPopupMenu > Property > captioncolumn

**Description**

innerdataset 속성에 설정된 DataSet 의 Column 중 팝업메뉴 아이템의 텍스트가 정의된 Column 을 설정하는 속성입니다.

**Setting Syntax**

- **`strColumnID`** — Tray 팝업메뉴에 아이템으로 표시될 텍스트가 정의된 Column 의 ID 를 문자열로 설정합니다.

**Remark**

- innerdataset 속성에 설정된 DataSet 의 Column 만 설정할 수 있습니다.

- captioncolumn 속성에 설정된 Column 의 데이터가 각 팝업메뉴 아이템에 텍스트로 표시됩니다.

- 설정된 Column 의 데이터값이 "-" 이면 아이템 간의 구분선으로 처리되며, 구분선은 CSS 관련 속성이 적용되지 않습니다.

- innerdataset, idcolumn, levelcolumn, captioncolumn 속성을 모두 설정해야 메뉴 아이템이 정상적으로 표시됩니다.


---

### checkboxcolumn

> Application > Objects > Tray > Objects > TrayPopupMenu > Property > checkboxcolumn

**Description**

체크이미지를 서브메뉴 아이템에 표시할지 여부가 정의된 Column 을 설정하는 속성입니다.

**Setting Syntax**

- **`strColumnID`** — 체크이미지 표시 여부가 정의된 Column 의 ID 를 문자열로 설정합니다.

**Remark**

- innerdataset 속성에 설정된 DataSet 의 Column 만 설정할 수 있습니다.

- Column 의 데이터가 true 로 처리되면 체크이미지가 표시됩니다.

- Column 에 데이터가 없거나 false 로 처리되면 체크이미지가 표시되지 않습니다.
   이 때, iconcolumn 속성이 설정되어 있다면 아이콘이 표시됩니다.

- innerdataset, idcolumn, levelcolumn, captioncolumn 속성을 모두 설정해야 메뉴 아이템이 정상적으로 표시됩니다.

	
		true / false
		Column type
		Row data
	

	
		false
		STRING
		"0", "-0", "false", "NaN", 빈 값, Null
	

	
		INT, FLOAT, BIGDECIMAL
		0, -0, 빈 값, Null
	

	
		true
		 
		false로 처리되는 값 이외의 모든 값


---

### enablecolumn

> Application > Objects > Tray > Objects > TrayPopupMenu > Property > enablecolumn

**Description**

innerdataset 속성에 설정된 DataSet 의 Column 중 팝업메뉴 아이템의 활성화 여부가 정의된 Column을 설정하는 속성입니다.

**Setting Syntax**

- **`strColumnID`** — 팝업메뉴 아이템의 활성화 여부가 정의된 Column의 ID를 문자열로 설정합니다.

**Remark**

- enablecolumn 속성에 설정된 Column의 데이터가 "false"이면 팝업메뉴 아이템이 비활성화 되어 선택할 수 없습니다.

- enablecolumn 속성에 설정된 Column에 데이터가 없거나 enablecolumn 속성값을 설정하지 않으면 팝업메뉴 아이템이 활성화 됩니다.

- innerdataset 속성에 설정된 DataSet 의 Column만 설정할 수 있습니다.

- innerdataset, idcolumn, levelcolumn, captioncolumn 속성을 모두 설정해야 메뉴 아이템이 정상적으로 표시됩니다.


---

### hotkeycolumn

> Application > Objects > Tray > Objects > TrayPopupMenu > Property > hotkeycolumn

**Description**

innerdataset 속성에 설정된 DataSet 의 Column 중 메뉴 아이템의 단축키가 정의된 Column을 설정하는 속성입니다.

**Setting Syntax**

- **`strColumnID`** — 메뉴 아이템의 단축키가 정의된 Column의 ID를 문자열로 설정합니다.

**Remark**

- hotkeycolumn 속성에 설정된 Column 에 정의된 단축키가 입력되면 onmenuclick 이벤트가 발생합니다.
  단축키 입력 시 수행할 동작을 onmenuclick 이벤트에 정의하여야 합니다.

- innerdataset 속성에 설정된 DataSet 의 Column만 설정할 수 있습니다.

- innerdataset, idcolumn, levelcolumn, captioncolumn 속성을 모두 설정해야 메뉴 아이템이 정상적으로 표시됩니다.


---

### iconcolumn

> Application > Objects > Tray > Objects > TrayPopupMenu > Property > iconcolumn

**Description**

팝업메뉴 아이템에 표시되는 아이콘의 정보가 정의된 Column 을 설정하는 속성입니다.

**Setting Syntax**

- **`strColumnID`** — 아이콘의 정보가 정의된 Column 의 ID 를 설정합니다.

**Remark**

- 시스템에서 지원하는 아이콘 이미지 파일 형식은 비트맵(*.bmp) 입니다.
   Column 에 정의된 값으로 URL 경로의 웹이미지만 사용할 수 있습니다.

- innerdataset 속성에 설정된 DataSet 의 Column 만 설정할 수 있습니다.

- checkboxcolumn 속성이 설정되지 않았거나 false 로 처리될 때 아이템에 아이콘이 표시됩니다.

- innerdataset, idcolumn, levelcolumn, captioncolumn 속성을 모두 설정해야 메뉴 아이템이 정상적으로 표시됩니다.


---

### id

> Application > Objects > Tray > Objects > TrayPopupMenu > Property > id

**Description**

TrayPopupMenu의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
TrayPopupMenu.id
```

**Setting Syntax**

- **`id`** — TrayPopupMenu를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### idcolumn

> Application > Objects > Tray > Objects > TrayPopupMenu > Property > idcolumn

**Description**

innerdataset 속성에 설정된 DataSet 의 Column 중 팝업메뉴 아이템의 ID가 정의된 Column을 설정하는 속성입니다.

**Setting Syntax**

- **`strColumnID`** — 팝업메뉴 아이템의 ID가 정의된 Column의 ID를 문자열로 설정합니다.

**Remark**

- 시스템이 제공하는 API Menu 를 사용하기 때문에 id 는 innerdataset 의 Row 인덱스로 설정됩니다.
  값을 설정할 수는 있으나 실제 id 로 동작하지는 않습니다.

- innerdataset 속성에 설정된 DataSet 의 Column만 설정할 수 있습니다.

- innerdataset, idcolumn, levelcolumn, captioncolumn 속성을 모두 설정해야 메뉴 아이템이 정상적으로 표시됩니다.


---

### innerdataset

> Application > Objects > Tray > Objects > TrayPopupMenu > Property > innerdataset

**Description**

Tray 의 팝업메뉴 아이템이 정의된 DataSet 의 ID를 설정하는 속성입니다.

**Setting Syntax**

- **`strColumnID`** — 팝업메뉴 아이템이 정의된 DataSet의 ID를 문자열로 설정합니다.

**Remark**

- innerdataset 속성값에 해당하는 DataSet 이 존재하지 않으면 메뉴 아이템이 표시되지 않습니다.

- innerdataset, idcolumn, levelcolumn, captioncolumn 속성을 모두 설정해야 메뉴 아이템이 정상적으로 표시됩니다.


---

### levelcolumn

> Application > Objects > Tray > Objects > TrayPopupMenu > Property > levelcolumn

**Description**

innerdataset 속성에 설정된 DataSet 의 Column 중 팝업메뉴 아이템의 상/하위 관계가 정의된 Column을 설정하는 속성입니다.

**Setting Syntax**

- **`strColumnID`** — 각 팝업메뉴 아이템의 상/하위 관계가 정의된 Column의 ID를 문자열로 설정합니다.

**Remark**

- 서브메뉴가 표시되기 위해서는 levelcolumn 에 설정된 Column의 데이터가 트리구조로 정의되어 있어야 합니다.
  최상위 메뉴 아이템은 "0" 레벨로 시작하며 레벨값이 증가하면 단계적으로 하위 메뉴로 표시됩니다.
  즉, "0" 레벨 데이터는 다음에 "0" 레벨 데이터가 정의될 때까지 정의된 모든 데이터의 상위메뉴가 됩니다.

- innerdataset 속성에 설정된 DataSet 의 Column만 설정할 수 있습니다.

- innerdataset, idcolumn, levelcolumn, captioncolumn 속성을 모두 설정해야 메뉴 아이템이 정상적으로 표시됩니다.


---

### userdatacolumn

> Application > Objects > Tray > Objects > TrayPopupMenu > Property > userdatacolumn

**Description**

innerdataset 속성에 설정된 DataSet의 Column 중 사용자 데이터를 처리하기 위한 Column을 설정하는 속성입니다.

**Setting Syntax**

- **`strColumnID`** — 사용자 데이터를 처리할 Column의 ID를 문자열로 설정합니다.

**Remark**

- innerdataset 속성에 설정된 DataSet 의 Column만 설정할 수 있습니다.

- 팝업메뉴 아이템 별로 처리해야 하는 데이터를 저장하기 위해 사용합니다.


---

### 메서드 (Methods)

### trackPopup

> Application > Objects > Tray > Objects > TrayPopupMenu > Method > trackPopup

**Description**

Tray 의 팝업메뉴를 마우스 커서 위치에 표시하는 메소드입니다.

**Syntax**

```javascript
TrayPopupMenu.trackPopup()
```

**Parameters**

var objApp = nexacro.getApplication() ;
objApp.trays["Tray0"].items["item00"].trackPopup();

**Return**

없음


---

### 이벤트 (Events)

### oninnerdatachanged

> Application > Objects > Tray > Objects > TrayPopupMenu > Event > oninnerdatachanged

**Description**

TrayPopupMenu 의 innerdataset 속성에 바인딩된 DataSet 에서 데이터 변경이 된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
oninnerdatachanged(obj:nexacro.TrayPopupMenu,e:nexacro.InnerdataChangedEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- innerdataset 속성에 바인딩된 DataSet 의 Data 가 변경되면 oninnerdatachanged 이벤트가 발생합니다.
  일반적으로 DataSet 에서 onvaluechanged 이벤트가 발생한 후 변경된 값이 바인딩된 객체에 영향을 미칠때 이벤트가 발생합니다.
  예를 들어 DataSet 의 Data 변경에 의해 TrayPopupMenu 의 아이템 길이가 변경되면 이벤트가 발생합니다.

- 컴포넌트 크기가 innerdataset 속성에 바인딩된 DataSet 값에 의해 변경되어 화면의 재배열이 필요할 경우 해당 이벤트에 정의합니다.


---

### onmenuclick

> Application > Objects > Tray > Objects > TrayPopupMenu > Event > onmenuclick

**Description**

Tray 에서 메뉴 아이템을 마우스 왼쪽 버튼으로 클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmenuclick(obj:nexacro.TrayPopupMenu,e:nexacro.MenuClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 메뉴 아이템 영역 내에서 마우스의 lbuttondown 액션과 lbuttonup 액션이 발생되어야 합니다.

- 하위 메뉴가 있는 아이템은 마우스 클릭을 해도 onmenuclick 이벤트가 발생되지 않습니다


---
