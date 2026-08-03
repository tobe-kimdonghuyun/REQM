# nexacroN V24 — FileUpTransfer

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 35개

---

## Components > Component > FileUpTransfer

### FileUpTransfer

> Components > Component > FileUpTransfer

**Description**

서버로 파일을 업로드하기 위한 Invisible 오브젝트입니다.

**Remark**

- HTTP/HTTPS 프로토콜의 POST 방식을 사용하여 파일을 서버로 업로드합니다.

- filelist 속성에 설정된 한 개 이상의 파일과 postdatalist 속성에 설정한 데이터를 서버로 전송합니다.

- 파일 업로드 중에는 onprogress 이벤트가 발생하며, 발생주기는 브라우저에 따라 달라질 수 있습니다.


◆ Desktop WRE 제약

- Chrome, FireFox 브라우저는 실제 파일경로가 표시되지 않는 제약사항으로 파일정보 중 파일경로가 "fakepath" 로 표시됩니다.

**Property**

| Name | Description |
| --- | --- |
| filelist | FileUpTransfer 에서 서버로 업로드할 파일의 정보를 Collection 형태로 갖는 읽기전용 속성입니다. |
| id | FileUpTransfer의 고유 식별자를 설정하는 속성입니다. |
| name | FileUpTransfer 의 이름을 설정하는 속성입니다. |
| postdatalist | 파일을 업로드할 때 서버로 전송할 데이터를 Collection 형태로 갖는 읽기전용 속성입니다. |
| url | FileUpTransfer 에서 업로드 한 파일을 수신할 서버페이지 정보를 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addEvent | FileUpTransfer 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| addEventHandler | FileUpTransfer 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 FileUpTransfer 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| addFile | filelist 속성의 마지막 위치에 파일정보를 추가하는 메소드입니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| clearFileList | filelist 속성에 설정된 파일정보를 모두 삭제하는 메소드입니다. |
| clearPostDataList | postdatalist 속성에 설정된 데이터를 모두 삭제하는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 FileUpTransfer 을(를) 삭제하는 메소드입니다. |
| existFile | filelist 속성에서 인수로 전달된 VirtualFile 오브젝트와 일치하는 파일정보의 존재여부를 반환하는 메소드입니다. |
| findEventHandler | FileUpTransfer 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getEventHandler | FileUpTransfer 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| getFileArrayByFileName | filelist 속성에서 지정한 파일명과 일치하는 파일정보를 VirtualFile 오브젝트 배열로 반환하는 메소드입니다. |
| getIndexArrayByFileName | filelist 속성에서 지정한 파일명과 일치하는 파일정보의 인덱스를 배열로 반환하는 메소드입니다. |
| getPostData | postdatalist 속성에서 특정 Key 값에 해당하는 데이터를 반환하는 메소드입니다. |
| insertEventHandler | FileUpTransfer 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| removeEvent | FileUpTransfer 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| removeEventHandler | FileUpTransfer 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | FileUpTransfer 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| removeFile | filelist 속성에 설정된 파일정보에서 인수로 전달된 VirtualFile 오브젝트와 일치하는 파일정보를 제거하는 메소드입니다. |
| removeFileByIndex | filelist 속성에 설정된 파일정보에서 인수로 전달된 인덱스의 파일정보를 제거하는 메소드입니다. |
| removePostData | postdatalist 속성에 설정된 데이터에서 특정 Key 값에 해당하는 데이터를 제거하는 메소드입니다. |
| setEventHandler | FileUpTransfer 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | FileUpTransfer 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| setFile | filelist 속성에서 인수로 전달된 인덱스의 파일정보를 변경하는 메소드입니다. |
| setPostData | 파일 업로드 요청 시 서버로 전송할 데이터를 postdatalist 속성에 추가하는 메소드입니다. |
| upload | filelist 속성에 설정한 파일들을 HTTP/HTTPS 프로토콜의 POST 방식으로 업로드 하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onerror | 파일 업로드에 실패하거나 에러코드가 반환 되었을 때 발생하는 이벤트입니다. |
| onprogress | 파일이 업로드 중일 때 일정간격으로 발생하는 이벤트입니다. |
| onsuccess | 파일 업로드가 완료된 후 성공코드값이 전달 되었을 때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### filelist

> Components > Component > FileUpTransfer > Property > filelist

**Description**

FileUpTransfer 에서 서버로 업로드할 파일의 정보를 Collection 형태로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUpTransfer.filelist
```

**Setting Syntax**

```javascript
var objFile0 = this.FileUpTransfer00.filelist[0];
var objFile0 = this.FileUpTransfer00.filelist["id"];
```

**Remark**

- filelist 속성은 "{ ID : VirtualFile }" 형태의 Collection 으로 addFile(), setFile() 메소드를 사용하여 설정할 수 있습니다.

- filelist 속성은 Collection 접근방식을 사용할 수 있습니다.
   filelist[0], filelist["id"], filelist.length 등의 방법을 사용합니다.


---

### id

> Components > Component > FileUpTransfer > Property > id

**Description**

FileUpTransfer의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
FileUpTransfer.id
```

**Setting Syntax**

- **`id`** — FileUpTransfer를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### name

> Components > Component > FileUpTransfer > Property > name

**Description**

FileUpTransfer 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
FileUpTransfer.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### postdatalist

> Components > Component > FileUpTransfer > Property > postdatalist

**Description**

파일을 업로드할 때 서버로 전송할 데이터를 Collection 형태로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUpTransfer.postdatalist
```

**Setting Syntax**

```javascript
this.FileUpTransfer00.postdatalist["Key"];
```

**Remark**

- 서버로 데이터 전송 시 HTTP/HTTPS 프로토콜을 사용하여 POST 방식으로 전송합니다.

- postdatalist 속성은 "{ Key : Value }" 형태의 Collection 으로 setPostData() 메소드를 사용하여 설정할 수 있습니다.

- postdatalist 속성은 Collection 접근방식을 사용할 수 잇습니다.
   postdatalist[0], postdatalist["strKey"], postdatalist.length 등의 방법을 사용합니다.


---

### url

> Components > Component > FileUpTransfer > Property > url

**Description**

FileUpTransfer 에서 업로드 한 파일을 수신할 서버페이지 정보를 설정하는 속성입니다.

**Syntax**

```javascript
FileUpTransfer.url[= strURL]
```

**Setting Syntax**

```javascript
this.FileUpTransfer00.url = "http://localhost/UploadServlet.jsp";
```
- **`strURL`** — 업로드 한 파일을 수신할 서버페이지 정보를 문자열로 설정합니다.

**Remark**

- upload() 메소드 실행 시 서버페이지 파라미터를 설정하지 않으면 url 속성에 설정된 값이 적용됩니다.
   upload() 메소드 실행 시 서버페이지 파라미터를 설정하면 url 속성에 설정된 값은 무시됩니다.

- 파일 업로드의 결과를 onsuccess 이벤트의 "e.datasets" 속성으로 전달할 수 있습니다.
   "e.datasets" 속성은 XML 또는 SSV 형식의 DataSet 으로 구성되어야 합니다.

- 어플리케이션의 Domain 과 파일을 수신 할 서버페이지의 Domain 이 다를 경우 Cross Domain 문제로 에러가 발생할 수 있습니다.


---

### 메서드 (Methods)

### addEvent

> Components > Component > FileUpTransfer > Method > addEvent

**Description**

FileUpTransfer 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.addEvent( strEventID )
```

**Parameters**

```
FileUpTransfer 에 추가할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 추가에 성공하면 true 를 반환합니다.

이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- FileUpTransfer 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.


---

### addEventHandler

> Components > Component > FileUpTransfer > Method > addEventHandler

**Description**

FileUpTransfer 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.addEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > FileUpTransfer > Method > addEventHandlerLookup

**Description**

함수를 검색하여 FileUpTransfer 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

### addFile

> Components > Component > FileUpTransfer > Method > addFile

**Description**

filelist 속성의 마지막 위치에 파일정보를 추가하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.addFile( strID, objVFile )
```

**Parameters**

```
filelist 속성에 추가 할 파일정보의 ID 를 문자열로 설정합니다.

파일 업로드 시 "name" 파라미터값으로 사용됩니다.
```

**Return**

파일정보 추가에 성공하면 추가된 위치의 인덱스를 반환합니다.

strID 가 중복이거나 strID, objVFile 파라미터를 잘못 설정하면 -1 을 반환합니다.
파일정보 추가에 실패하면 -1 을 반환합니다.

**Remark**

- filelist 속성은 "{ ID : VirtualFile }" 형태의 Collection 입니다.

- filelist 속성에 설정된 파일정보를 변경하려면 setFile() 메소드를 사용하여야 합니다.


---

### clearEventHandler

> Components > Component > FileUpTransfer > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.clearEventHandler( strEventID )
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

### clearFileList

> Components > Component > FileUpTransfer > Method > clearFileList

**Description**

filelist 속성에 설정된 파일정보를 모두 삭제하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.clearFileList()
```

**Parameters**

this.FileUpTransfer00.clearFileList();

**Return**

없음

**Remark**

- filelist 속성은 "{ ID : VirtualFile }" 형태의 Collection 으로 addFile(), setFile() 메소드를 사용하여 설정할 수 있습니다.


---

### clearPostDataList

> Components > Component > FileUpTransfer > Method > clearPostDataList

**Description**

postdatalist 속성에 설정된 데이터를 모두 삭제하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.clearPostDataList()
```

**Parameters**

this.FileUpTransfer00.clearPostDataList();

**Return**

없음

**Remark**

- postdatalist 속성은 "{ Key : Value }" 형태의 Collection 으로 setPostData() 메소드를 사용하여 설정할 수 있습니다.


---

### destroy

> Components > Component > FileUpTransfer > Method > destroy

**Description**

스크립트에서 동적으로 생성한 FileUpTransfer 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.destroy()
```

**Return**

FileUpTransfer 이(가) 정상적으로 삭제되면 true 를 반환합니다.

FileUpTransfer 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 FileUpTransfer 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChild


---

### existFile

> Components > Component > FileUpTransfer > Method > existFile

**Description**

filelist 속성에서 인수로 전달된 VirtualFile 오브젝트와 일치하는 파일정보의 존재여부를 반환하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.existFile( objVFile )
```

**Parameters**

```
filelist 속성에서 존재여부를 확인할 파일정보를 VirtualFile 오브젝트 형태로 설정합니다.
```

**Return**

인수로 전달된 VirtualFile 오브젝트와 일치하는 파일정보가 filelist 속성에 존재하면 true 를 반환합니다.

인수로 전달된 VirtualFile 오브젝트와 일치하는 파일정보가 filelist 속성에 존재하지 않으면 false 를 반환합니다.

**Remark**

- filelist 속성은 VirtualFile 오브젝트 배열입니다.

- 특정 파일정보의 일치여부를 판단하는 기준은 환경에 따라 달라집니다.
   > Nexacro Runtime Environment는 VirtualFile 오브젝트의 fullpath 속성값이 동일하여야 합니다.
   > Web Runtime Environment는 VirtualFile 오브젝트의 filename 과 filesize 속성값이 모두 동일하여야 합니다.


---

### findEventHandler

> Components > Component > FileUpTransfer > Method > findEventHandler

**Description**

FileUpTransfer 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.findEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > FileUpTransfer > Method > getEventHandler

**Description**

FileUpTransfer 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.getEventHandler( strEventID, nIdx )
```

**Parameters**

```
핸들러 함수를 얻을 이벤트의 ID를 설정합니다.
```

**Return**

지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.

지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.


---

### getFileArrayByFileName

> Components > Component > FileUpTransfer > Method > getFileArrayByFileName

**Description**

filelist 속성에서 지정한 파일명과 일치하는 파일정보를 VirtualFile 오브젝트 배열로 반환하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.getFileArrayByFileName( strFileName )
```

**Parameters**

```
반환 받으려는 파일정보의 파일명을 문자열로 설정합니다.
```

**Return**

filelist 속성에서 지정한 파일명과 일치하는 파일정보를 VirtualFile 오브젝트 배열로 반환합니다.

반환할 파일정보가 1 개인 경우도 VirtualFile 오브젝트 배열로 반환합니다.

지정한 파일명과 일치하는 파일정보가 없을 경우 null 을 반환합니다.

**Remark**

- filelist 속성은 "{ ID : VirtualFile }" 형태의 Collection 입니다.


---

### getIndexArrayByFileName

> Components > Component > FileUpTransfer > Method > getIndexArrayByFileName

**Description**

filelist 속성에서 지정한 파일명과 일치하는 파일정보의 인덱스를 배열로 반환하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.getIndexArrayByFileName( strFileName )
```

**Parameters**

```
인덱스를 반환 받으려는 파일정보의 파일명을 문자열로 설정합니다.
```

**Return**

filelist 속성에서 지정한 파일명과 일치하는 파일정보의 인덱스를 배열로 반환합니다.

반환할 파일정보가 1 개인 경우도 배열로 반환합니다.

지정한 파일명과 일치하는 파일정보가 없을 경우 null 을 반환합니다.

**Remark**

- filelist 속성은 "{ ID : VirtualFile }" 형태의 Collection 입니다.


---

### getPostData

> Components > Component > FileUpTransfer > Method > getPostData

**Description**

postdatalist 속성에서 특정 Key 값에 해당하는 데이터를 반환하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.getPostData( strKey )
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

> Components > Component > FileUpTransfer > Method > insertEventHandler

**Description**

FileUpTransfer 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

> Components > Component > FileUpTransfer > Method > removeEvent

**Description**

FileUpTransfer 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.removeEvent( strEventID )
```

**Parameters**

```
FileUpTransfer 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 삭제에 성공하면 true 를 반환합니다.

이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- FileUpTransfer 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- FileUpTransfer 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.


---

### removeEventHandler

> Components > Component > FileUpTransfer > Method > removeEventHandler

**Description**

FileUpTransfer 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.removeEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > FileUpTransfer > Method > removeEventHandlerLookup

**Description**

FileUpTransfer 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

### removeFile

> Components > Component > FileUpTransfer > Method > removeFile

**Description**

filelist 속성에 설정된 파일정보에서 인수로 전달된 VirtualFile 오브젝트와 일치하는 파일정보를 제거하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.removeFile( strID )
```

**Parameters**

```
filelist 속성에서 제거할 파일정보의 ID 를 문자열로 설정합니다.
```

**Return**

filelist 속성에서 제거된 파일정보의 인덱스를 반환합니다.

strID 파라미터를 잘못 설정하거나 파일정보 제거에 실패하면 -1 을 반환합니다.

**Remark**

- filelist 속성은 "{ ID : VirtualFile }" 형태의 Collection 입니다.

- 파일정보가 제거되면 filelist 속성의 Collection 인덱스가 재조정됩니다.


---

### removeFileByIndex

> Components > Component > FileUpTransfer > Method > removeFileByIndex

**Description**

filelist 속성에 설정된 파일정보에서 인수로 전달된 인덱스의 파일정보를 제거하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.removeFileByIndex( nIndex )
```

**Parameters**

```
filelist 속성에서 제거할 파일정보의 인덱스를 숫자로 설정합니다.

NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 설정됩니다.
```

**Return**

filelist 속성에서 제거된 파일정보의 인덱스를 반환합니다.

nIndex 파라미터를 잘못 설정하거나 파일정보 제거에 실패하면 -1 을 반환합니다.

**Remark**

- filelist 속성은 "{ ID : VirtualFile }" 형태의 Collection 입니다.

- 파일정보가 제거되면 filelist 속성의 Collection 인덱스가 재조정됩니다.


---

### removePostData

> Components > Component > FileUpTransfer > Method > removePostData

**Description**

postdatalist 속성에 설정된 데이터에서 특정 Key 값에 해당하는 데이터를 제거하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.removePostData( strKey );
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

> Components > Component > FileUpTransfer > Method > setEventHandler

**Description**

FileUpTransfer 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.setEventHandler( strEventID, objFunc, objTarget )
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

> Components > Component > FileUpTransfer > Method > setEventHandlerLookup

**Description**

FileUpTransfer 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

### setFile

> Components > Component > FileUpTransfer > Method > setFile

**Description**

filelist 속성에서 인수로 전달된 인덱스의 파일정보를 변경하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.setFile( nIndex, objVFile )
```

**Parameters**

```
filelist 속성에서 변경할 파일정보의 인덱스를 숫자로 설정합니다.

NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 설정됩니다.
```

**Return**

인수로 전달된 인덱스의 파일정보 변경에 성공하면 true 를 반환합니다.

nIndex 파라미터를 잘못 설정하거나 파일정보 변경에 실패하면 false 를 반환합니다.

**Remark**

- filelist 속성은 "{ ID : VirtualFile }" 형태의 Collection 입니다.

- filelist 속성에 파일정보를 추가하려면 addFile() 메소드를 사용하여야 합니다.


---

### setPostData

> Components > Component > FileUpTransfer > Method > setPostData

**Description**

파일 업로드 요청 시 서버로 전송할 데이터를 postdatalist 속성에 추가하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.setPostData( strKey, varVal )
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

### upload

> Components > Component > FileUpTransfer > Method > upload

**Description**

filelist 속성에 설정한 파일들을 HTTP/HTTPS 프로토콜의 POST 방식으로 업로드 하는 메소드입니다.

**Syntax**

```javascript
FileUpTransfer.upload( [strUrl] )
```

**Parameters**

```
업로드 파일을 수신할 서버페이지 정보를 문자열로 설정합니다.

값을 생략할 경우 url 속성에 설정된 값이 적용됩니다.
값을 설정하면 url 속성에 설정된 값이 무시됩니다.
```

**Return**

없음

**Remark**

- filelist 속성의 파일과 postdatalist 속성의 데이터를 HTTP/HTTPS 프로토콜을 사용하여 POST 방식으로 전송합니다.

- 파일 업로드의 결과에 대한 응답을 onsuccess 이벤트에서 FileUpTransferEventInfo 오브젝트의 datasets 속성으로 전달할 수 있습니다. 
  datasets 속성은 XML, SSV, JSON 형식의 Dataset 으로 구성되어야 합니다.

- 파일 업로드 중에는 onprogress 이벤트가 발생합니다.
   파일 업로드 완료 후 서버에서 보내온 결과에 따라 onsuccess 또는 onerror 이벤트가 발생합니다.

- 어플리케이션의 Domain 과 파일을 수신 할 서버페이지의 Domain 이 다를 경우 Cross Domain 문제로 에러가 발생할 수 있습니다.


---

### 이벤트 (Events)

### onerror

> Components > Component > FileUpTransfer > Event > onerror

**Description**

파일 업로드에 실패하거나 에러코드가 반환 되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.FileUpTransfer,e:nexacro.FileUpTransferErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 서버와 통신이 성공한 이후 서버 측 코드에서 응답하는 에러코드, 메시지는 WRE, NRE 모두 같은 방식으로 처리합니다.
  서버에서 0 미만의 음수값이 결과코드로 반환되었을 때 실패로 처리됩니다.

◆ web runtime environment 제약
- WRE에서 일부 브라우저에서만 업로드의 실패, 취소 등의 상태를 부분적으로 확인할 수 있지만 정상적인 상태 정보를 보장할 수 없어 onerror 이벤트에서 HTTP Status Code 처리는 지원하지 않습니다.
  NRE는 파일 업로드 상태를 자체적으로 처리하며 해당 정보를 통해 HTTP Status Code에 대한 onerror 이벤트를 지원합니다.


---

### onprogress

> Components > Component > FileUpTransfer > Event > onprogress

**Description**

파일이 업로드 중일 때 일정간격으로 발생하는 이벤트입니다.

**Syntax**

```javascript
onprogress(obj:nexacro.FileUpTransfer,e:nexacro.FileUpTransferProgressEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 이벤트가 발생하는 간격은 웹브라우저에 따라 달라질 수 있습니다.


---

### onsuccess

> Components > Component > FileUpTransfer > Event > onsuccess

**Description**

파일 업로드가 완료된 후 성공코드값이 전달 되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsuccess(obj:nexacro.FileUpTransfer,e:nexacro.FileUpTransferEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 서버에서 0 이상의 결과코드값이 반환되었을 때 성공으로 처리됩니다.

- 파일 업로드 결과에 대한 응답을 FileUpTransferEventInfo 오브젝트의 datasets 속성에 XML, SSV, JSON 형식의 Dataset으로 전달할 수 있습니다.
  XML, SSV, JSON 구조에 적합하지 않은 정보는 누락될 수 있습니다.


---
