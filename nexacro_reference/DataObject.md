# nexacroN V24 — DataObject

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 37개

---

## Data Objects > DataObject

### DataObject

> Data Objects > DataObject

**Description**

데이터를 호출하거나 작성하고 관리하는 오브젝트입니다.
REST API 호출 기능과 Dataset 오브젝트와 단방향 바인딩을 지원합니다.

**Remark**

- 데이터 로딩 성공 시 이벤트는 다음 순서로 발생합니다.
request: DataObject.onsuccess -> DataObject.onload -> Dataset.onload
load: DataObject.onload -> Dataset.onload

- 데이터 통신 실패 시 이벤트는 다음 순서로 발생합니다.
Environment.onerror (Return false) -> DataObject.onerror
Environment.onerror (Return true)

**Property**

| Name | Description |
| --- | --- |
| data | 데이터 정보를 갖는 오브젝트 형태의 속성입니다. |
| enableevent | DataObject 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다. |
| id | DataObject의 고유 식별자를 설정하는 속성입니다. |
| name | DataObject 의 이름을 설정하는 속성입니다. |
| parent | DataObject 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| preload | url 속성값을 설정한 경우 데이터를 로드하는 시점을 설정하는 속성입니다. |
| url | 데이터를 호출할 URL을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addEvent | DataObject 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| addEventHandler | DataObject 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 DataObject 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| clearChangedInfo | 변경 정보를 전부 삭제하는 메소드입니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 DataObject 을(를) 삭제하는 메소드입니다. |
| findEventHandler | DataObject 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getAllResponseHeaders | request 메소드 호출 후 Response header 정보를 반환하는 메소드입니다. |
| getChangedInfo | 저장된 변경 정보를 반환하는 메소드입니다. |
| getEventHandler | DataObject 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| getObjectByPath | jsonpath값으로 필터링한 데이터 오브젝트를 반환하는 메소드입니다. |
| getResponse | request 메소드 호출 후 response data 정보를 반환하는 메소드입니다. |
| getResponseHeader | request 메소드 호출 후 특정 Response header 값을 반환하는 메소드입니다. |
| insertEventHandler | DataObject 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| load | url 속성에 설정한 서비스에서 데이터를 로드하는 메소드입니다. |
| removeChangedInfo | 변경 정보에서 특정 uid에 해당하는 item 정보를 삭제하는 메소드입니다. |
| removeEvent | DataObject 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| removeEventHandler | DataObject 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | DataObject 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| request | 설정된 속성값에 따라 통신을 처리하는 메소드입니다. |
| serializeToString | 데이터를 문자열로 반환하는 메소드입니다. |
| setEventHandler | DataObject 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | DataObject 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| ondatachanged | DataObject 오브젝트의 data가 Row 단위로 변경됐을 때 발생하는 이벤트입니다. |
| onerror | load, request 메서드 호출 후 통신 실패 시 발생하는 이벤트입니다. |
| onload | 데이터 로딩이 완료된 후 발생하는 이벤트입니다. |
| onloaddatasets | DataObejct 오브젝트가 Dataset 오브젝트의 binddataobject 속성값으로 설정된 경우 Dataset 오브젝트의 데이터 로딩이 처리된 후 발생하는 이벤트입니다. |
| onsuccess | request 메소드 호출 후 통신 성공 시 발생하는 이벤트입니다. |
| onvaluechanged | DataObject 오브젝트의 value 값(JSON 데이터에서 특정 key에 해당하는 value)이 변경됐을 때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### data

> Data Objects > DataObject > Property > data

**Description**

데이터 정보를 갖는 오브젝트 형태의 속성입니다.

**Syntax**

```javascript
DataObject.data[= objData]
```

**Setting Syntax**

```javascript
DataObject00.data = {
                "status" : "success",
                "data" : [
                    {
                        "id" : "1",
                        "employee_name" : "Tiger Nixon",
                        "employee_salary" : "320800",
                        "employee_age" : "61",
                        "profile_image" : ""
                    }
                ]
            };
```
- **`objData`** — 데이터를 문자열 또는 오브젝트 형태로 설정할 수 있습니다.

**Remark**

- 넥사크로 스튜디오 Json Contents Editor를 사용하는 경우 콘텐츠 조회 또는 편집 후 저장 시 data 속성값을 설정합니다.

- load, request 메소드 실행 후 받은 데이터는 data 속성값에 반영되고 onload 이벤트가 발생합니다.
  속성값이 유효하지 않은 경우에는 속성값을 undefined로 설정하고 onload 이벤트가 발생합니다.


---

### enableevent

> Data Objects > DataObject > Property > enableevent

**Description**

DataObject 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
DataObject.enableevent[= bEvent]
```

**Setting Syntax**

```javascript
bEvent ::= 'true' | 'false'
```
```javascript
this.DataObject00.enableevent = true;  
this.DataObject00.enableevent = false;
```
- **`true`** — DataObject 에서 이벤트가 발생하도록 설정합니다.
- **`false`** — DataObject 에서 이벤트가 발생하지 않도록 설정합니다.

**Remark**

- enableevent 속성값을 설정하지 않으면 true로 적용됩니다.

- enableevent 속성값이 true일 때 많은 양의 데이터를 변경할 경우 DataObject에 작업을 할 때마다 이벤트가 발생합니다.
  이 경우 enableevent 속성값을 false로 설정하면 이벤트 발생으로 인한 처리속도 지연과 화면 깜빡임을 방지할 수 있습니다.

- enableevent 속성값을 true로 변경하면 ondatachanged 이벤트가 발생합니다.


---

### id

> Data Objects > DataObject > Property > id

**Description**

DataObject의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
DataObject.id
```

**Setting Syntax**

- **`id`** — DataObject를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### name

> Data Objects > DataObject > Property > name

**Description**

DataObject 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
DataObject.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### parent

> Data Objects > DataObject > Property > parent

**Description**

DataObject 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DataObject.parent
```

**Setting Syntax**

```javascript
var objParent = this.DataObject00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- DataObject 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### preload

> Data Objects > DataObject > Property > preload

**Description**

url 속성값을 설정한 경우 데이터를 로드하는 시점을 설정하는 속성입니다.

**Syntax**

```javascript
DataObject.preload[= [bPreload]]
```

**Setting Syntax**

```javascript
bPreload ::= true | false
```
```javascript
this.DataObject00.preload = true;
```
- **`true`** — 화면이 로드되기 전에 url 속성값으로 설정한 서비스의 데이터를 먼저 로드합니다.  Form의 onload 이벤트가 발생하기 전에 데이터를 로드합니다.
- **`false`** — 데이터를 자동으로 로드하지 않습니다.  preload 속성값이 false 인 경우에는 load 메소드를 호출해야 데이터를 로드합니다.

**Remark**

속성값을 설정하지 않으면 false로 적용됩니다.


---

### url

> Data Objects > DataObject > Property > url

**Description**

데이터를 호출할 URL을 설정하는 속성입니다.

**Syntax**

```javascript
DataObject.url[= strUrl]
```

**Setting Syntax**

```javascript
strUrl ::= <absolute-url> | <relative-url>
```
```javascript
this.DataObject00.url = "http://localhost:8080/Prj/BService/Serv00.jsp";     // 절대경로 
this.DataObject00.url = "../BService/Serv00.jsp";                                     // 상대경로
this.DataObject00.url = "Service1::Serv00.jsp";                                         // TypeDefinition의 Services 경로
```
- **`<absolute-url>`** — Business Service 가 제공되는 경로를 "http://경로/서비스명", "https://경로/서비스명" 형식의 절대경로로 설정합니다.

웹에 접근 가능한 환경이어야 하고, Cross Domain 상황이면 사용에 제한이 있습니다.
- **`<relative-url>`** — TypeDefinition 영역의 Services 에 정의된 Prefix를 사용한 형식으로 설정합니다.

또는 현재 위치를 기준으로 한 상대경로를 사용하여 설정합니다.

**Remark**

- preload 속성이 false로 설정되어도 load() 메소드를 수행하면 url 속성값에 설정된 서비스에서 데이터를 호출합니다.

◆ 서비스(Service Prefix)
- Service 를 호출하기 위해 공통되는 접근경로를 TypeDefinition 에 정의하고, 
  컴포넌트의 속성이나 스크립트에 TypeDefinition에 정의된 Preifx를 기술하여 경로 정보를 간단히 표현할 수 있는 기능입니다.


---

### 메서드 (Methods)

### addEvent

> Data Objects > DataObject > Method > addEvent

**Description**

DataObject 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**

```javascript
DataObject.addEvent( strEventID )
```

**Parameters**

```
DataObject 에 추가할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 추가에 성공하면 true 를 반환합니다.

이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- DataObject 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.


---

### addEventHandler

> Data Objects > DataObject > Method > addEventHandler

**Description**

DataObject 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
DataObject.addEventHandler( strEventID, objFunc, objTarget )
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

> Data Objects > DataObject > Method > addEventHandlerLookup

**Description**

함수를 검색하여 DataObject 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
DataObject.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

### clearChangedInfo

> Data Objects > DataObject > Method > clearChangedInfo

**Description**

변경 정보를 전부 삭제하는 메소드입니다.

**Syntax**

```javascript
DataObject.clearChangedInfo()
```

**Return**

없음


---

### clearEventHandler

> Data Objects > DataObject > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
DataObject.clearEventHandler( strEventID )
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

> Data Objects > DataObject > Method > destroy

**Description**

스크립트에서 동적으로 생성한 DataObject 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
DataObject.destroy()
```

**Parameters**

var bSucc = this.DataObject00.destroy();

**Return**

DataObject 이(가) 정상적으로 삭제되면 true 를 반환합니다.

DataObject 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 DataObject 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

DataObject.initDataObject.showForm.addChildForm.insertChildForm.removeChild


---

### findEventHandler

> Data Objects > DataObject > Method > findEventHandler

**Description**

DataObject 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
DataObject.findEventHandler( strEventID, objFunc, objTarget )
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

### getAllResponseHeaders

> Data Objects > DataObject > Method > getAllResponseHeaders

**Description**

request 메소드 호출 후 Response header 정보를 반환하는 메소드입니다.

**Syntax**

```javascript
DataObject00.getAllResponseHeaders()
```

**Return**

header, value 쌍으로 구성된 오브젝트를 반환합니다.

**Remark**

- default 값은 undefind 입니다.
  onsuccess, onerror, onload 이벤트 핸들러 함수 내에서만 정보를 확인할 수 있습니다.


---

### getChangedInfo

> Data Objects > DataObject > Method > getChangedInfo

**Description**

저장된 변경 정보를 반환하는 메소드입니다.

**Syntax**

```javascript
DataObject.getChangedInfo()
```

**Return**

Infoarray 형식의 배열을 반환합니다.
Infoarray 각 속성은 아래 표를 참고하세요.

**Remark**

- 특정 이벤트가 발생하지 않는 상태에서 사용자가 임의로 변경 정보를 확인하고 처리할 때 실행합니다.

- Infoarray 속성 참조
	
		Property
		Type
		Description
	

	
		data
		Object
		변경된 데이터
	

	
		dataobjectpath
		String
		변경이 발생한 Dataset 오브젝트에서 설정한 dataobjectpath 속성값
	

	
		index
		Number
		변경이 발생한 Dataset 오브젝트의 Row Index 값
	

	
		sourcedatasetid
		String
		변경이 발생한 Dataset 오브젝트 id 속성값
	

	
		type
		String
		변경이 발생한 상태
- update 특정 Row의 Column 값 변경
- add 새로운 데이터 추가 (Dataset 오브젝트의 addRow 메소드 실행 시)
- insert 새로운 데이터 추가 (Dataset 오브젝트의 insertRow 메소드 실행 시)
- delete 데이터 삭제 (Dataset 오브젝트의 deleteRow 메소드 실행 시)
	

	
		uid
		String
		고유 식별 id
- removeChangedInfo 메소드를 사용해 특정 데이터를 삭제할 경우 사용합니다.


---

### getEventHandler

> Data Objects > DataObject > Method > getEventHandler

**Description**

DataObject 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
DataObject.getEventHandler( strEventID, nIdx )
```

**Parameters**

```
핸들러 함수를 얻을 이벤트의 ID를 설정합니다.
```

**Return**

지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.

지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.


---

### getObjectByPath

> Data Objects > DataObject > Method > getObjectByPath

**Description**

jsonpath값으로 필터링한 데이터 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
DataObject00.getObjectByPath(strJsonpath)
```

**Parameters**

```
jsonpath 값을 설정합니다.
```

**Return**

필터링된 데이터 오브젝트를 반환합니다.

**Remark**

- strJsonpath 파라미터의 상세한 문법은 아래 링크를 참고하세요.
https://github.com/dchester/jsonpath#jsonpath-syntax


---

### getResponse

> Data Objects > DataObject > Method > getResponse

**Description**

request 메소드 호출 후 response data 정보를 반환하는 메소드입니다.

**Syntax**

```javascript
DataObject00.getResponse()
```

**Return**

데이터 통신 후 서버에서 받은 데이터값을 반환합니다.

**Remark**

- default 값은 undefind 입니다.
  onsuccess, onerror, onload 이벤트 핸들러 함수 내에서만 정보를 확인할 수 있습니다.
- onerror 이벤트 발생 시에 서버 측에서 제공하는 정보를 확인하기 위해 사용할 수 있습니다.


---

### getResponseHeader

> Data Objects > DataObject > Method > getResponseHeader

**Description**

request 메소드 호출 후 특정 Response header 값을 반환하는 메소드입니다.

**Syntax**

```javascript
DataObject.getResponseHeader(strHeaderName)
```

**Parameters**

```
반환 받을 header 이름을 설정합니다.
```

**Return**

파라미터로 설정한 header 이름에 해당하는 값을 반환합니다.
대소문자 구분 없이 설정한 header 이름과 일치하는 값을 반환합니다.
일치하는 header 정보가 없는 경우에는 null을 반환합니다.

**Remark**

- 실행 환경에 따라 지원하는 header 정보가 다를 수 있습니다.


---

### insertEventHandler

> Data Objects > DataObject > Method > insertEventHandler

**Description**

DataObject 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
DataObject.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

> Data Objects > DataObject > Method > load

**Description**

url 속성에 설정한 서비스에서 데이터를 로드하는 메소드입니다.

**Syntax**

```javascript
DataObject00.load([bAsync])
```

**Parameters**

```
비동기 처리 여부를 설정합니다.
기본값은 true이며 비동기 방식으로 동작합니다. 데이터 로드 완료와 관계없이 스크립트가 수행됩니다.
```

**Return**

없음

**Remark**

- load 메소드는 GET 방식으로 데이터를 로드합니다.
- 로드한 데이터를 정상적으로 받은 경우에는 onload 이벤트가 발생합니다.
  호출한 URL에서 데이터를 반환하지 않거나 url 속성값 또는 strUrl 파라미터를 지정하지 않은 경우에는 onload 이벤트를 발생하지 않습니다.
- 에러 발생 시 Environment.onerror 이벤트 발생 후 DataObject 오브젝트의 onerror 이벤트가 발생합니다.

- Dataset 오브젝트의 binddataobject 속성값으로 DataObject 오브젝트를 설정한 경우에는 Dataset 오브젝트의 onload 이벤트가 발생합니다.


---

### removeChangedInfo

> Data Objects > DataObject > Method > removeChangedInfo

**Description**

변경 정보에서 특정 uid에 해당하는 item 정보를 삭제하는 메소드입니다.

**Syntax**

```javascript
DataObject.removeChangedInfo(uid)
```

**Parameters**

```
삭제할 변경 정보의 uid를 설정합니다.
```

**Return**

없음

**Remark**

- 변경 정보가 서버로 모두 정상 전송되었거나 더 이상 데이터의 가치가 없을 때 실행합니다.


---

### removeEvent

> Data Objects > DataObject > Method > removeEvent

**Description**

DataObject 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**

```javascript
DataObject.removeEvent( strEventID )
```

**Parameters**

```
DataObject 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 삭제에 성공하면 true 를 반환합니다.

이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- DataObject 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- DataObject 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.


---

### removeEventHandler

> Data Objects > DataObject > Method > removeEventHandler

**Description**

DataObject 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
DataObject.removeEventHandler( strEventID, objFunc, objTarget )
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

> Data Objects > DataObject > Method > removeEventHandlerLookup

**Description**

DataObject 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
DataObject.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

### request

> Data Objects > DataObject > Method > request

**Description**

설정된 속성값에 따라 통신을 처리하는 메소드입니다.

**Syntax**

```javascript
DataObject00.request(strServiceid, strMethod, strUrl[, objParam])
```

**Parameters**

```
서비스 ID 값을 설정합니다.
```

**Return**

없음

**Remark**

- 데이터를 정상적으로 받은 경우에는 onsuccess 이벤트가 발생합니다.
  onsuccess 이벤트 발생 시 DataObjectEventInfo 오브젝트가 response 속성값을 가지고 있다면 onload 이벤트가 발생합니다.
  strMethod 파라미터값이 HEAD인 경우에는 onload 이벤트가 발생하지 않습니다.
- 에러 발생 시 Environment.onerror 이벤트 발생 후 DataObject 오브젝트의 onerror 이벤트가 발생합니다.

- strMethod 파라미터값이 "GET", "HEAD" 인 경우 objParam 파라미터 내 postdata 값을 설정하더라도 서버로 전달되지 않습니다. XMLHttpRequest send 메소드 명세에 따른 동작 방식입니다.
  https://xhr.spec.whatwg.org/#the-send()-method


---

### serializeToString

> Data Objects > DataObject > Method > serializeToString

**Description**

데이터를 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
DataObject00.serializeToString([funcReplacer | arrReplacer[, strSpace | nSpace]])
```

**Parameters**

```
key, value 값을 매개변수로 받는 함수로 반환값에 따라 문자열 결과에 포함할 속성을 설정합니다.
```

**Return**

데이터를 변환한 문자열

**Remark**

- 전달인자 값에 대한 세부 동작은 아래 링크 정보를 참고하세요.
프레임워크 내에서 JSON.stringify 메소드의 value 파라미터를 제외한 두 번째, 세 번째 파라미터로 전달되어 처리합니다.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify


---

### setEventHandler

> Data Objects > DataObject > Method > setEventHandler

**Description**

DataObject 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
DataObject.setEventHandler( strEventID, objFunc, objTarget )
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

> Data Objects > DataObject > Method > setEventHandlerLookup

**Description**

DataObject 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
DataObject.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

### 이벤트 (Events)

### ondatachanged

> Data Objects > DataObject > Event > ondatachanged

**Description**

DataObject 오브젝트의 data가 Row 단위로 변경됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondatachanged(obj:nexacro.DataObject,e:nexacro.DataObjectDataChangedEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 바인딩 된 Dataset 오브젝트의 dataobjectbindmode 속성값이 "twoway"일 때 아래와 같은 경우 이벤트가 발생합니다.
  - Row 단위 데이터 변경 시
  - updatecontrol 속성값이 true일 때 데이터 변경 후 applyChange 메소드 실행 시

- insert type으로 데이터가 변경된 경우 서버에 데이터 전송 후 다시 load 메소드로 가져와야 합니다. 그렇지 않으면 서버 데이터와 DataObject 오브젝트 사이의 차이가 생길 수 있습니다.

◆ 주의

- ondatachanged 이벤트 핸들러 함수 내에서 DataObject 오브젝트의 enableevent 속성값을 false로 변경했다가 다시 true로 변경하면 이벤트가 반복해서 발생하며 무한 루프에 빠집니다.


---

### onerror

> Data Objects > DataObject > Event > onerror

**Description**

load, request 메서드 호출 후 통신 실패 시 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.DataObject,e:nexacro.DataObjectErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

true 값을 반환하면 
> load, request 메서드 실행 상태를 유지합니다. 

false 값을 반환하면 
> load, request 메서드 실행을 중지합니다. 

반환값을 따로 지정하지 않으면 false 값으로 적용됩니다.

**Remark**

- 통신 실패 시 Environment 오브젝트의 onerror 이벤트가 발생하고 이벤트 핸들러 함수 내에서 true 값을 반환하지 않은 경우 DataObject 오브젝트의 oneror 이벤트가 발생합니다.


---

### onload

> Data Objects > DataObject > Event > onload

**Description**

데이터 로딩이 완료된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
onload(obj:nexacro.DataObject,e:nexacro.DataObjectLoadEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- data 속성값이 반영된 후에 onload 이벤트가 발생합니다.

- Dataset 오브젝트의 bindDataobject 속성값으로 DataObject 오브젝트를 설정한 경우에는 Dataset 오브젝트의 onload 이벤트가 발생합니다.


---

### onloaddatasets

> Data Objects > DataObject > Event > onloaddatasets

**Description**

DataObejct 오브젝트가 Dataset 오브젝트의 binddataobject 속성값으로 설정된 경우 Dataset 오브젝트의 데이터 로딩이 처리된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
onloaddatasets(obj:nexacro.DataObject,e:nexacro.DataObjectLoadDatasetsEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 이벤트 발생 순서는 다음과 같습니다.
 (1) DataObject onsuccess
 (2) DataObject onload
 (3) Dataset onload(또는 onerror):
      binddataobject 속성값으로 DataObject를 설정한 모든 Dataset 오브젝트
 (4) DataObject onloaddatasets


---

### onsuccess

> Data Objects > DataObject > Event > onsuccess

**Description**

request 메소드 호출 후 통신 성공 시 발생하는 이벤트입니다.

**Syntax**

```javascript
onsuccess(obj:nexacro.DataObject,e:nexacro.DataObjectEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 통신 성공 시에는 데이터가 없어도 이벤트가 발생합니다.
- 데이터가 없을 때 onload 이벤트가 발생하면서 기존 데이터는 삭제됩니다.
  onload 이벤트를 막으려면 preventDefault 메소드를 호출합니다.
  그 이후 getAllResponseHeaders, getResponse 메소드를 사용해 필요한 정보를 확인하고 처리할 수 있습니다.

  this.DataObject00_onsuccess = function(obj:nexacro.DataObject,e:nexacro.DataObjectEventInfo)
  {
    if (e.statuscode == 200)
        trace("getAllResponseHeaders:"+ obj.getAllResponseHeaders())
    else if (e.statuscode > 200)
    {
        e.preventDefault();
        trace(obj.getAllResponseHeaders())
        trace(obj.getResponse())
    }
  };

**Default Action**

서버로부터 전송받은 response 데이터를 DataObject의 data 속성으로 설정합니다 (Head method 제외)


---

### onvaluechanged

> Data Objects > DataObject > Event > onvaluechanged

**Description**

DataObject 오브젝트의 value 값(JSON 데이터에서 특정 key에 해당하는 value)이 변경됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onvaluechanged(obj:nexacro.DataObject,e:nexacro.DataObjectValueChangedEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 바인딩 된 Dataset 오브젝트의 dataobjectbindmode 속성값이 "twoway", updatecontrol 속성값이 false일 때 특정 Row의 Column 값 변경 시 이벤트가 발생합니다.


---
