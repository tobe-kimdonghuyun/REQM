# nexacroN V24 — FileDownTransfer

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 26개

---

## Components > Component > FileDownTransfer

### FileDownTransfer

> Components > Component > FileDownTransfer

**Description**

서버로부터 파일을 다운로드하기 위한 Invisible 오브젝트입니다.

**Remark**

- HTTP/HTTPS 프로토콜의 POST 방식을 사용하여 서버의 파일을 지정된 경로로 다운로드합니다.

- onsuccess, onerror 이벤트는 웹브라우저 환경에서는 발생하지 않습니다.

**Property**

| Name | Description |
| --- | --- |
| downloadfilename | 파일 다운로드 시 표시되는 FileDialog 에 기본으로 표시될 파일명을 설정합니다. |
| id | FileDownTransfer의 고유 식별자를 설정하는 속성입니다. |
| name | FileDownTransfer 의 이름을 설정하는 속성입니다. |
| postdatalist | 파일을 다운로드할 때 서버로 전송할 데이터를 Collection 형태로 갖는 읽기전용 속성입니다. |
| url | FileDownTransfer 에서 다운로드 받을 파일의 서버경로와 파일명을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addEvent | FileDownTransfer 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| addEventHandler | FileDownTransfer 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 FileDownTransfer 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| clearPostDataList | postdatalist 속성에 설정된 데이터를 모두 삭제하는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 FileDownTransfer 을(를) 삭제하는 메소드입니다. |
| download | 서버에서 HTTP/HTTPS 프로토콜의 POST 방식으로 특정 파일을 다운로드 하는 메소드입니다. |
| findEventHandler | FileDownTransfer 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getEventHandler | FileDownTransfer 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| getPostData | postdatalist 속성에 설정된 데이터에서 특정 Key 값에 해당하는 데이터를 반환하는 메소드입니다. |
| insertEventHandler | FileDownTransfer 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| removeEvent | FileDownTransfer 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| removeEventHandler | FileDownTransfer 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | FileDownTransfer 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| removePostData | postdatalist 속성에 설정된 데이터에서 특정 Key 값에 해당하는 데이터를 제거하는 메소드입니다. |
| setEventHandler | FileDownTransfer 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | FileDownTransfer 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| setPostData | 파일 다운로드 요청 시 서버로 전송할 데이터를 postdatalist 속성에 추가하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onerror | 파일 다운로드에 실패하거나 에러코드가 반환 되었을 때 발생하는 이벤트입니다. |
| onsuccess | 파일 다운로드가 완료된 후 성공코드가 반환 되었을 때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### downloadfilename

> Components > Component > FileDownTransfer > Property > downloadfilename

**Description**

파일 다운로드 시 표시되는 FileDialog 에 기본으로 표시될 파일명을 설정합니다.

**Syntax**

```javascript
FileDownTransfer.downloadfilename[= strFileName]
```

**Setting Syntax**

```javascript
this.FileDownTransfer00.downloadfilename = "Test.txt";
```
- **`strFileName`** — 다운로드를 위한 FileDialog 에 기본으로 표시될 파일명을 설정합니다.

값을 설정하지 않으면 FileDialog 에 빈값이 표시됩니다.
파일명으로 사용할 수 없는 "\", "/", "*", """, "'", "<", ">", "|" 등의 문자는 설정할 수 없습니다.

**Remark**

- Windows NRE 환경만 지원하는 속성입니다.

- download() 메소드에서 strTargetpath 파라미터를 설정했을 경우 다운로드를 위한 FileDialog 는 표시되지 않습니다.


---

### id

> Components > Component > FileDownTransfer > Property > id

**Description**

FileDownTransfer의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
FileDownTransfer.id
```

**Setting Syntax**

- **`id`** — FileDownTransfer를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### name

> Components > Component > FileDownTransfer > Property > name

**Description**

FileDownTransfer 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
FileDownTransfer.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### postdatalist

> Components > Component > FileDownTransfer > Property > postdatalist

**Description**

파일을 다운로드할 때 서버로 전송할 데이터를 Collection 형태로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileDownTransfer.postdatalist
```

**Setting Syntax**

```javascript
this.FileDownTransfer00.postdatalist["Key"];
```

**Remark**

- 서버로 데이터 전송 시 HTTP/HTTPS 프로토콜을 사용하여 POST 방식으로 전송합니다.

- postdatalist 속성은 "{ Key : Value }" 형태의 Collection 으로 setPostData() 메소드를 사용하여 설정할 수 있습니다.

- postdatalist 속성은 Collection 접근방식을 사용할 수 잇습니다.
   postdatalist[0], postdatalist["strKey"], postdatalist.length 등의 방법을 사용합니다.


---

### url

> Components > Component > FileDownTransfer > Property > url

**Description**

FileDownTransfer 에서 다운로드 받을 파일의 서버경로와 파일명을 설정하는 속성입니다.

**Syntax**

```javascript
FileDownTransfer.url[= strURL]
```

**Setting Syntax**

```javascript
this.FileDownTransfer00.urll = "http://localhost/Test.txt";
```
- **`strURL`** — 다운로드 받을 파일의 서버경로와 파일명을 문자열로 설정합니다.

**Remark**

- download() 메소드 실행 시 다운로드 경로 파라미터를 설정하지 않으면 url 속성에 설정된 값이 적용됩니다.
   download() 메소드 실행 시 다운로드 경로 파라미터를 설정하면 url 속성에 설정된 값은 무시됩니다.


◆ web runtime environment 제약

- Image, PDF 와 같은 특정 컨텐츠는 다운로드 시 웹브라우저가 파일을 수신하여 오픈 할 수 있습니다.
   웹브라우저의 파일 수신을 막으려면 url 속성에 다운로드를 위한 모듈경로를 설정하고 
   실제 파일정보는 PostData 에 설정하여 다운로드 모듈에서 파일을 전송하는 방법을 사용하여야 합니다.


---

### 메서드 (Methods)

### addEvent

> Components > Component > FileDownTransfer > Method > addEvent

**Description**

FileDownTransfer 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**

```javascript
FileDownTransfer.addEvent( strEventID )
```

**Parameters**

```
FileDownTransfer 에 추가할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 추가에 성공하면 true 를 반환합니다.

이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- FileDownTransfer 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.


---

### addEventHandler

> Components > Component > FileDownTransfer > Method > addEventHandler

**Description**

FileDownTransfer 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
FileDownTransfer.addEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > FileDownTransfer > Method > addEventHandlerLookup

**Description**

함수를 검색하여 FileDownTransfer 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
FileDownTransfer.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

### clearEventHandler

> Components > Component > FileDownTransfer > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
FileDownTransfer.clearEventHandler( strEventID )
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

### clearPostDataList

> Components > Component > FileDownTransfer > Method > clearPostDataList

**Description**

postdatalist 속성에 설정된 데이터를 모두 삭제하는 메소드입니다.

**Syntax**

```javascript
FileDownTransfer.clearPostDataList()
```

**Parameters**

this.FileDownTransfer00.clearPostDataList();

**Return**

없음

**Remark**

- postdatalist 속성은 "{ Key : Value }" 형태의 Collection 으로 setPostData() 메소드를 사용하여 설정할 수 있습니다.


---

### destroy

> Components > Component > FileDownTransfer > Method > destroy

**Description**

스크립트에서 동적으로 생성한 FileDownTransfer 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
FileDownTransfer.destroy()
```

**Return**

FileDownTransfer 이(가) 정상적으로 삭제되면 true 를 반환합니다.

FileDownTransfer 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 FileDownTransfer 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChild


---

### download

> Components > Component > FileDownTransfer > Method > download

**Description**

서버에서 HTTP/HTTPS 프로토콜의 POST 방식으로 특정 파일을 다운로드 하는 메소드입니다.

**Syntax**

```javascript
FileDownTransfer.download( [strUrl [, strTargetpath]] )
```

**Parameters**

```
다운로드 받을 파일의 경로를 설정합니다.

값을 생략할 경우 url 속성에 설정된 값이 적용됩니다.
값을 설정하면 url 속성에 설정된 값이 무시됩니다.
```

**Return**

없음

**Remark**

- 서버에 다운로드 요청 시 postdatalist 속성에 설정된 데이터를 HTTP/HTTPS 프로토콜을 사용하여 POST 방식으로 전송합니다.


◆ web runtime environment 제약

- Image, PDF 와 같은 특정 컨텐츠는 다운로드 시 웹브라우저가 파일을 수신하여 오픈 할 수 있습니다.
   웹브라우저의 파일 수신을 막으려면 strUrl 파라미터에 다운로드를 위한 모듈경로를 설정하고 
   실제 파일정보는 PostData 에 설정하여 다운로드 모듈에서 파일을 전송하는 방법을 사용하여야 합니다.


---

### findEventHandler

> Components > Component > FileDownTransfer > Method > findEventHandler

**Description**

FileDownTransfer 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
FileDownTransfer.findEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > FileDownTransfer > Method > getEventHandler

**Description**

FileDownTransfer 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
FileDownTransfer.getEventHandler( strEventID, nIdx )
```

**Parameters**

```
핸들러 함수를 얻을 이벤트의 ID를 설정합니다.
```

**Return**

지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.

지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.


---

### getPostData

> Components > Component > FileDownTransfer > Method > getPostData

**Description**

postdatalist 속성에 설정된 데이터에서 특정 Key 값에 해당하는 데이터를 반환하는 메소드입니다.

**Syntax**

```javascript
FileDownTransfer.getPostData( strKey )
```

**Parameters**

```
반환 받으려는 데이터의 Key 값을 문자열로 설정합니다.
```

**Return**

strKey 값에 해당하는 데이터를 반환합니다.

strKey 값에 해당하는 데이터가 없을 경우 null 을 반환합니다.

**Remark**

- postdatalist 속성은 "{ Key : Value }" 형태의 Collection 입니다.


---

### insertEventHandler

> Components > Component > FileDownTransfer > Method > insertEventHandler

**Description**

FileDownTransfer 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
FileDownTransfer.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

### removeEvent

> Components > Component > FileDownTransfer > Method > removeEvent

**Description**

FileDownTransfer 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**

```javascript
FileDownTransfer.removeEvent( strEventID )
```

**Parameters**

```
FileDownTransfer 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 삭제에 성공하면 true 를 반환합니다.

이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- FileDownTransfer 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- FileDownTransfer 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.


---

### removeEventHandler

> Components > Component > FileDownTransfer > Method > removeEventHandler

**Description**

FileDownTransfer 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
FileDownTransfer.removeEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > FileDownTransfer > Method > removeEventHandlerLookup

**Description**

FileDownTransfer 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
FileDownTransfer.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

### removePostData

> Components > Component > FileDownTransfer > Method > removePostData

**Description**

postdatalist 속성에 설정된 데이터에서 특정 Key 값에 해당하는 데이터를 제거하는 메소드입니다.

**Syntax**

```javascript
FileDownTransfer.removePostData( strKey );
```

**Parameters**

```
제거할 데이터의 Key 값을 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- postdatalist 속성은 "{ Key : Value }" 형태의 Collection 입니다.


---

### setEventHandler

> Components > Component > FileDownTransfer > Method > setEventHandler

**Description**

FileDownTransfer 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
FileDownTransfer.setEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > FileDownTransfer > Method > setEventHandlerLookup

**Description**

FileDownTransfer 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
FileDownTransfer.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

### setPostData

> Components > Component > FileDownTransfer > Method > setPostData

**Description**

파일 다운로드 요청 시 서버로 전송할 데이터를 postdatalist 속성에 추가하는 메소드입니다.

**Syntax**

```javascript
FileDownTransfer.setPostData( strKey, varVal )
```

**Parameters**

```
서버로 전송할 데이터의 Key 값을 문자열로 설정합니다.

동일한 Key 값이 존재할 경우 새로운 데이터로 변경됩니다.
```

**Return**

없음

**Remark**

- postdatalist 속성은 "{ Key : Value }" 형태의 Collection 입니다.


---

### 이벤트 (Events)

### onerror

> Components > Component > FileDownTransfer > Event > onerror

**Description**

파일 다운로드에 실패하거나 에러코드가 반환 되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.FileDownTransfer,e:nexacro.FileDownTransferErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 서버에서 0 미만의 음수값이 결과코드로 반환되었을 때 실패로 처리됩니다.

◆ web runtime environment 제약
- web runtime environment 는 지원하지 않는 이벤트입니다.
- WRE에서는 파일 다운로드의 성공 또는 실패, 취소 등의 상태를 확인할 수 없어 onerror, onsuccess 이벤트를 지원하지 않습니다.
  개발 단계에서 필요하다면 WRE에서는 개발자도구(콘솔, 네트워크)를 통해 파일 다운로드 상태를 확인할 수 있습니다.
  NRE는 파일 다운로드 상태를 자체적으로 처리하며 해당 정보를 통해 onerror, onsuccess 이벤트를 지원합니다.
- 파일 다운로드 동작은 서버 측 코드 없이 직접 다운로드할 파일 URL을 지정해서 다운로드를 시도할 수 있기 때문에 WRE에서는 서버 측 코드에서 응답하는 에러코드, 메시지를 처리하지 않도록 구현됐습니다.


---

### onsuccess

> Components > Component > FileDownTransfer > Event > onsuccess

**Description**

파일 다운로드가 완료된 후 성공코드가 반환 되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsuccess(obj:nexacro.FileDownTransfer,e:nexacro.FileDownTransferEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 서버에서 0 이상의 결과코드가 반환되었을 때 성공으로 처리됩니다.

- web runtime environment 는 지원하지 않는 이벤트입니다.


---
