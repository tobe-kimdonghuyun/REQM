# nexacroN V24 — Communication Objects

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 93개

---

## Communication Objects

### Communication Objects

> Communication Objects

**Description**

서버에 연결하여 정보를 송수신할 수 있는 통신 기능이 포함된 클라이언트 컴포넌트입니다.


---

## Communication Objects > TCPClientSocket

### TCPClientSocket

> Communication Objects > TCPClientSocket

**Description**

TCP 통신을 사용하여 서버에 연결하여 정보를 송수신할 수 있는 클라이언트 컴포넌트입니다.

**Remark**

- 1:1 연결방식의 TCP 통신 Socket 기능을 지원하고 있습니다.

**Property**

| Name | Description |
| --- | --- |
| address | 연결한 서버의 주소값을 갖는 읽기전용 속성입니다. |
| errorcode | TCPClientSocket 에서 요청된 작업이 실패했을 때 발생한 에러코드값을 갖는 읽기전용 속성입니다. |
| errormsg | TCPClientSocket 에서 요청된 작업이 실패했을 때 발생한 에러메시지값을 갖는 읽기전용 속성입니다. |
| isopen | 서버와 연결된 상태값을 갖는 읽기전용 속성입니다. |
| name | TCPClientSocket 의 이름을 설정하는 속성입니다. |
| port | 연결된 서버의 Port 값을 갖는 읽기전용 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addEvent | TCPClientSocket 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| addEventHandler | TCPClientSocket 의 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 검색된 함수를 TCPClientSocket 의 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| clearEventHandler | TCPClientSocket 의 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| close | 연결된 서버에 연결해제를 요청하는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 TCPClientSocket 을(를) 삭제하는 메소드입니다. |
| findEventHandler | TCPClientSocket 의 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getEventHandler | TCPClientSocket 의 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| insertEventHandler | TCPClientSocket 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| open | TCP 를 이용하여 서버에 소켓연결을 요청하는 메소드입니다. |
| read | 연결된 서버에서 데이터를 수신하는 메소드입니다. |
| readLine | 연결된 서버에서 줄단위로 데이터를 수신하는 메소드입니다. |
| removeEvent | TCPClientSocket 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| removeEventHandler | TCPClientSocket 의 이벤트에서 전달된 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | TCPClientSocket 의 이벤트에 정의된 핸들러 함수에서 검색된 함수를 제거하는 메소드입니다. |
| setEventHandler | TCPClientSocket 의 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | TCPClientSocket 의 이벤트에 정의된 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| write | 연결된 서버로 데이터를 송신하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| ondataarrived | 연결된 서버에 수신 가능한 데이터가 있을 경우에 발생하는 이벤트입니다. |
| onerror | TCPClientSocket 에서 요청된 작업이 실패했을 때 발생하는 이벤트입니다. |
| onsuccess | TCPClientSocket 에서 요청된 작업이 성공했을 때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### address

> Communication Objects > TCPClientSocket > Property > address

**Description**

연결한 서버의 주소값을 갖는 읽기전용 속성입니다.

**Setting Syntax**

```javascript
var strAddress = this.TCPClientSocket00.address;
```

**Remark**

- open() 메소드를 사용하여 서버에 연결했을 때 값을 갖는 속성입니다.


---

### errorcode

> Communication Objects > TCPClientSocket > Property > errorcode

**Description**

TCPClientSocket 에서 요청된 작업이 실패했을 때 발생한 에러코드값을 갖는 읽기전용 속성입니다.

**Setting Syntax**

```javascript
var nErrCd = this.TCPClientSocket00.errorcode;
```

**Remark**

- TCPClientSocket 에서 마지막에 발생한 에러코드값을 갖습니다.


---

### errormsg

> Communication Objects > TCPClientSocket > Property > errormsg

**Description**

TCPClientSocket 에서 요청된 작업이 실패했을 때 발생한 에러메시지값을 갖는 읽기전용 속성입니다.

**Setting Syntax**

```javascript
var nErrMsg = this.TCPClientSocket00.errormsg;
```

**Remark**

- TCPClientSocket 에서 마지막에 발생한 에러메시지값을 갖습니다.

- 에러 메시지는 운영체제 레벨에서 제공되는 시스템 메시지를 사용합니다.
   따라서, 운영체제의 버전에 따라 에러 메시지가 달라질 수 있습니다.


---

### isopen

> Communication Objects > TCPClientSocket > Property > isopen

**Description**

서버와 연결된 상태값을 갖는 읽기전용 속성입니다.

**Setting Syntax**

```javascript
var bOpen = this.TCPClientSocket00.isopen;
```
- **`isopen`** — 서버와 연결된 상태이면 "true" 값을 갖습니다.

서버와 연결된 상태가 아니면 "false" 값을 갖습니다.

**Remark**

- 서버와 연결하려면 open() 메소드를 사용하여야 합니다.

- 서버에서 연결을 끊었을 경우는 isopen 속성에 정확한 값이 설정되지 않습니다.


---

### name

> Communication Objects > TCPClientSocket > Property > name

**Description**

TCPClientSocket 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
TCPClientSocket.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### port

> Communication Objects > TCPClientSocket > Property > port

**Description**

연결된 서버의 Port 값을 갖는 읽기전용 속성입니다.

**Setting Syntax**

```javascript
var strPort = this.TCPClientSocket00.port;
```

**Remark**

- open() 메소드를 사용하여 서버에 연결했을 때 값을 갖는 속성입니다.


---

### 메서드 (Methods)

### addEvent

> Communication Objects > TCPClientSocket > Method > addEvent

**Description**

TCPClientSocket 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**

```javascript
TCPClientSocket.addEvent( strEventID )
```

**Parameters**

```
TCPClientSocket 에 추가할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 추가에 성공하면 true 를 반환합니다.

이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- TCPClientSocket 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.


---

### addEventHandler

> Communication Objects > TCPClientSocket > Method > addEventHandler

**Description**

TCPClientSocket 의 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
TCPClientSocket.addEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수가 추가될 이벤트의 ID를 설정합니다.
```

**Return**

이벤트에 추가된 핸들러 함수의 인덱스를 반환합니다.
동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 "-1" 을 반환합니다.


---

### addEventHandlerLookup

> Communication Objects > TCPClientSocket > Method > addEventHandlerLookup

**Description**

검색된 함수를 TCPClientSocket 의 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
TCPClientSocket.addEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

```
핸들러 함수가 추가될 이벤트의 ID를 설정합니다.
```

**Return**

이벤트에 추가된 핸들러 함수의 인덱스를 반환합니다.
동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 "-1" 을 반환합니다.

**Remark**

- strFunc 이름의 함수를 objTarget 영역부터 상위로 올라가며 검색합니다.
  검색된 함수가 있다면 이벤트에 핸들러 함수로 추가합니다.


---

### clearEventHandler

> Communication Objects > TCPClientSocket > Method > clearEventHandler

**Description**

TCPClientSocket 의 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
TCPClientSocket.clearEventHandler( strEventID )
```

**Parameters**

```
핸들러 함수를 모두 제거할 이벤트의 ID 를 설정합니다.
```

**Return**

특정 이벤트에서 제거된 핸들러 함수의 갯수를 반환합니다.

**Remark**

- 특정 핸들러 함수만 제거하려면 removeEventHandler() 메소드를 사용하여야 합니다.


---

### close

> Communication Objects > TCPClientSocket > Method > close

**Description**

연결된 서버에 연결해제를 요청하는 메소드입니다.

**Syntax**

```javascript
TCPClientSocket.close()
```

**Parameters**

var bSucc = this.TCPClientSocket00.close();

**Return**

연결해제 요청이 정상적으로 실행되었으면 "true" 를 반환합니다.

연결해제 요청이 정상적으로 실행되지 않았으면 "false" 를 반환합니다.

**Remark**

- 서버와 연결해제에 성공하면 onsuccess 이벤트가 발생합니다.
   서버와 연결해제에 실패하면 onerror 이벤트가 발생합니다.

- 연결된 서버의 설정에 따라 연결을 해제하지 않으면, 마지막에 보낸 내용이 실제로 보내지지 않을 수도 있습니다.
 
- 서버 연결을 더 이상 사용하지 않으면 시스템 자원 절약과 데이터 송신 마무리를 위해 close() 메서드를 사용하여 연결을 해제하는게 좋습니다.


---

### destroy

> Communication Objects > TCPClientSocket > Method > destroy

**Description**

스크립트에서 동적으로 생성한 TCPClientSocket 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
TCPClientSocket.destroy()
```

**Parameters**

var bSucc = this.TCPClientSocket00.destroy();

**Return**

TCPClientSocket 이(가) 정상적으로 삭제되면 true 를 반환합니다.

TCPClientSocket 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 TCPClientSocket 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildTCPClientSocket.initTCPClientSocket.show


---

### findEventHandler

> Communication Objects > TCPClientSocket > Method > findEventHandler

**Description**

TCPClientSocket 의 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
TCPClientSocket.findEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 찾을 이벤트의 ID를 설정합니다.
```

**Return**

이벤트에서 찾으려고 하는 핸들러 함수의 인덱스를 반환합니다.

찾으려고 하는 핸들러 함수가 존재하지 않는다면 "-1" 을 반환합니다.

**Remark**

- 인덱스는 "0" 부터 시작합니다.


---

### getEventHandler

> Communication Objects > TCPClientSocket > Method > getEventHandler

**Description**

TCPClientSocket 의 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
TCPClientSocket.getEventHandler( strEventID, nIdx )
```

**Parameters**

```
핸들러 함수를 얻을 이벤트의 ID를 설정합니다.
```

**Return**

지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.

지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.


---

### insertEventHandler

> Communication Objects > TCPClientSocket > Method > insertEventHandler

**Description**

TCPClientSocket 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
TCPClientSocket.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

### open

> Communication Objects > TCPClientSocket > Method > open

**Description**

TCP 를 이용하여 서버에 소켓연결을 요청하는 메소드입니다.

**Syntax**

```javascript
TCPClientSocket.open( strAddress, nPort )
```

**Parameters**

```
연결할 서버의 도메인명 또는 IPv4 형식의 IP 를 문자열로 설정합니다.
```

**Return**

연결요청이 정상적으로 실행되었으면 true 를 반환합니다.

연결요청이 정상적으로 실행되지 않았으면 false 를 반환합니다.

**Remark**

- 서버와 연결에 성공하면 onsuccess 이벤트가 발생합니다.
   서버와 연결에 실패하면 onerror 이벤트가 발생합니다.

- 연결할 서버의 주소가 잘못되었거나 허용하지 않는 주소이면 "false"를 반환하고 이벤트가 발생하지 않습니다.

- 넥사크로 스튜디오에서 개발중인 경우는 모든 서버 주소에 대하여 연결을 허용하지만,
   어플리케이션이 운영중인 경우는 연결할 서버의 주소가 ADL 주소와 C-Class 대역이 같아야 합니다.
   주소의 C-Class 영역이 다를 경우 연결에 문제가 발생할 수 있습니다.

- ADL 주소와 서버의 주소가 모두 도메인명이거나 IP 주소 형식일 경우 URL 검사를 수행합니다.
   두 주소의 형식이 다른 경우에는 연결에 문제가 발생할 수 있습니다.

- 샌드박스(sandbox) 옵션인 Environment 의 networksecurelevel 속성값이 "all" 인 경우는 모든 경로의 접근을 허용합니다.
   이 경우 사용자에게 접근 허용 여부를 확인 한 후 사용자가 승인한 경우에만 기능을 수행합니다.


---

### read

> Communication Objects > TCPClientSocket > Method > read

**Description**

연결된 서버에서 데이터를 수신하는 메소드입니다.

**Syntax**

```javascript
TCPClientSocket.read( nSize [, nTimeOut [, strCharSet]] )
```

**Parameters**

```
수신될 데이터의 최대 크기를 바이트 단위의 숫자로 설정합니다.

설정값은 수신될 데이터의 최대 크기로 적용되며 실제 수신된 데이터는 설정값보다 작을 수 있습니다.

0 을 설정하면 수신 할 데이터가 있는지 검사만 수행합니다.
음수값을 설정하면 메소드 실행 시 실패로 처리됩니다.
```

**Return**

데이터의 수신 성공여부와 수신데이터를 배열형태로 반환합니다.

배열의 첫번째 원소에 데이터 수신여부를 Boolean 값으로 반환합니다.
배열의 두번째 원소에 수신된 데이터를 반환합니다.

**Remark**

- 데이터 수신에 실패하면 onerror 이벤트가 발생합니다.

- 반환되는 배열의 두번째 원소는 데이터 수신에 성공하고 데이터가 존재하는 경우만 설정됩니다.

- 데이터를 줄단위로 수신하려면 readLine() 메소드를 사용하여야 합니다.


---

### readLine

> Communication Objects > TCPClientSocket > Method > readLine

**Description**

연결된 서버에서 줄단위로 데이터를 수신하는 메소드입니다.

**Syntax**

```javascript
TCPClientSocket.readLine( nSize [, nTimeOut [, strCharSet]] )
```

**Parameters**

```
수신될 데이터의 최대 크기를 바이트 단위의 숫자로 설정합니다.

설정값은 수신될 데이터의 최대 크기로 적용되며 실제 수신된 데이터는 설정값보다 작을 수 있습니다.

0 이하값을 설정하면 메소드가 정상적으로 실행되지 않습니다.
```

**Return**

데이터의 수신 성공여부와 수신데이터를 배열형태로 반환합니다.

배열의 첫번째 원소에 데이터 수신여부를 Boolean 값으로 반환합니다.
배열의 두번째 원소에 수신된 데이터를 반환합니다.

**Remark**

- 데이터 수신에 실패하면 onerror 이벤트가 발생합니다.

- 반환되는 배열의 두번째 원소는 데이터 수신에 성공하고 데이터가 존재하는 경우만 설정됩니다.

- 정상적으로 수신된 데이터의 마지막은 줄바꿈 문자로 끝납니다.
   그러나, 아래의 이유로 수신된 데이터의 마지막이 줄바꿈 문자가 아닌 경우가 발생할 수 있습니다.
   > nSize 로 설정한 값보다 한 줄의 데이터가 큰 경우
   > 시간내에 데이터를 수신 받지 못한 경우
   > 서버와 연결이 끊긴 경우

- readLine() 메소드에서 nTimeOut 값은 데이터를 한번 수신하는데 대기하는 시간으로만 적용되지 않습니다.
   수신된 데이터에 줄바꿈 문자가 없을 경우 nTimeout 값은 다음 데이터를 대기하는 시간으로 여러번 재설정될 수 있습니다.
   따라서 nTimeOut 값이나 nSize 값을 너무 길게 설정하면 화면이 멈춘것처럼 보일 수 있으니 주의하셔야 합니다.

- 데이터를 바이트 단위로 수신하려면 read() 메소드를 사용하여야 합니다.


---

### removeEvent

> Communication Objects > TCPClientSocket > Method > removeEvent

**Description**

TCPClientSocket 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**

```javascript
TCPClientSocket.removeEvent( strEventID )
```

**Parameters**

```
TCPClientSocket 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 삭제에 성공하면 true 를 반환합니다.

이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- TCPClientSocket 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- TCPClientSocket 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.


---

### removeEventHandler

> Communication Objects > TCPClientSocket > Method > removeEventHandler

**Description**

TCPClientSocket 의 이벤트에서 전달된 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
TCPClientSocket.removeEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 제거할 이벤트의 ID를 설정합니다.
```

**Return**

핸들러 함수 제거에 성공하면 "1" 을 반환합니다.

핸들러 함수 제거에 실패하면 "0" 을 반환합니다.

**Remark**

- 핸들러 함수가 제거되면 핸들러 함수의 인덱스가 "0" 번부터 재조정됩니다.

- 이벤트에 등록된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하여야 합니다.


---

### removeEventHandlerLookup

> Communication Objects > TCPClientSocket > Method > removeEventHandlerLookup

**Description**

TCPClientSocket 의 이벤트에 정의된 핸들러 함수에서 검색된 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
TCPClientSocket.removeEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 제거할 이벤트의 ID를 설정합니다.
```

**Return**

핸들러 함수 제거에 성공하면 "1" 을 반환합니다.

핸들러 함수 제거에 실패하면 "0" 을 반환합니다.

**Remark**

- strFunc 이름의 함수를 objTarget 영역부터 상위로 올라가며 검색합니다.
   검색된 함수가 이벤트에 핸들러 함수로 추가되어 있다면 해당 핸들러 함수를 제거합니다.

- 핸들러 함수가 제거되면 핸들러 함수의 인덱스가 "0" 번부터 재조정됩니다.

- 이벤트에 등록된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하여야 합니다.


---

### setEventHandler

> Communication Objects > TCPClientSocket > Method > setEventHandler

**Description**

TCPClientSocket 의 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
TCPClientSocket.setEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 변경할 이벤트의 ID를 설정합니다.
```

**Return**

첫번째 핸들러 함수 변경에 성공하면 "0" 을 반환합니다.

첫번째 핸들러 함수 변경에 실패하면 "-1" 을 반환합니다.

**Remark**

- 인덱스가 "0" 번인 핸들러 함수를 새로운 함수로 대체합니다.

- 인덱스가 "0" 번인 핸들러 함수가 없다면 "0" 번 인덱스에 대체할 함수를 핸들러 함수로 추가합니다.


---

### setEventHandlerLookup

> Communication Objects > TCPClientSocket > Method > setEventHandlerLookup

**Description**

TCPClientSocket 의 이벤트에 정의된 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
TCPClientSocket.setEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 변경할 이벤트의 ID를 설정합니다.
```

**Return**

첫번째 핸들러 함수 변경에 성공하면 "0"을 반환합니다.
첫번째 핸들러 함수 변경에 실패하면 "-1"을 반환합니다.

**Remark**

- strFunc 이름의 함수를 objTarget 영역부터 상위로 올라가며 검색합니다.
   검색된 함수가 있다면 이벤트의 첫번째 핸들러 함수를 검색된 함수로 변경합니다.

- 인덱스가 "0" 번인 핸들러 함수를 검색된 함수로 대체합니다.

- 인덱스가 "0" 번인 핸들러 함수가 없다면 "0" 번 인덱스에 검색된 함수를 핸들러 함수로 추가합니다.


---

### write

> Communication Objects > TCPClientSocket > Method > write

**Description**

연결된 서버로 데이터를 송신하는 메소드입니다.

**Syntax**

```javascript
TCPClientSocket.write( strData [, strCharset] )
```

**Parameters**

```
연결된 서버로 송신 할 데이터를 설정합니다.
```

**Return**

연결된 서버로 데이터 송신을 시작하면 "true" 를 반환합니다.

연결된 서버로 데이터 송신을 시작하지 못하면 "false" 를 반환합니다.

**Remark**

- 데이터 송신에 성공하면 onsuccess 이벤트가 발생합니다.
   데이터 송신에 실패하면 onerror 이벤트가 발생합니다.

- write() 메소드를 실행하여 대용량 데이터를 송신하는 경우 패킷을 송신 가능한 크기로 나누어 송신합니다.
   이 때, 송신 후 남은 데이터가 있는 경우 onsuccess 이벤트가 여러번 발생할 수 있습니다.


---

### 이벤트 (Events)

### ondataarrived

> Communication Objects > TCPClientSocket > Event > ondataarrived

**Description**

연결된 서버에 수신 가능한 데이터가 있을 경우에 발생하는 이벤트입니다.

**Syntax**

```javascript
ondataarrived(obj:nexacro.TCPClientSocket,e:nexacro.SocketReceiveEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- ondataarrived 이벤트는 수신 가능한 데이터가 있는 경우 1회만 발생하며 실제 데이터를 수신하지 않습니다.
  read(), readLine() 메소드를 실행하여 데이터를 직접 수신하여야 합니다.

- read(), readLine() 메소드를 실행하여 데이터를 수신하지 않으면 수신 가능한 데이터가 누적되어도 이벤트가 추가로 발생하지 않습니다.

- read(), readLine() 메소드를 실행하여 데이터를 수신한 후 수신 가능한 데이터가 남아 있으면 다시 ondataarrived 이벤트가 1회 발생합니다.


---

### onerror

> Communication Objects > TCPClientSocket > Event > onerror

**Description**

TCPClientSocket 에서 요청된 작업이 실패했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.TCPClientSocket,e:nexacro.SocketErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 이벤트가 발생한 원인은 EventInfo 의 statuscode 속성을 참조하여야 합니다.


---

### onsuccess

> Communication Objects > TCPClientSocket > Event > onsuccess

**Description**

TCPClientSocket 에서 요청된 작업이 성공했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsuccess(obj:nexacro.TCPClientSocket,e:nexacro.SocketEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- onsuccess 이벤트는 비동기로 동작하므로 메소드 실행이 완료된 후에 발생합니다.

- write() 메소드를 실행하여 대용량 데이터를 송신하는 경우 패킷을 송신 가능한 크기로 나누어 송신합니다.
   이 때, 송신 후 남은 데이터가 있는 경우 onsuccess 이벤트가 여러번 발생할 수 있습니다.
   송신 후 남은 데이터가 있는지 여부는 EventInfo 의 bytesremain 속성을 참조하여야 합니다.


---

## Communication Objects > XAgent

### XAgent

> Communication Objects > XAgent

**Description**

X-AGENT 서버와 통신할 수 있는 클라이언트 컴포넌트입니다.

**Property**

| Name | Description |
| --- | --- |
| addport | X-AGENT 서버와 통신 실패 시 연결을 시도할 다른 포트의 범위를 설정합니다. |
| adminapiurl | X-AGENT Admin API URL 정보를 설정합니다. |
| license | X-AGENT 서버의 라이선스를 설정합니다. |
| name | XAgent 의 이름을 설정하는 속성입니다. |
| port | X-AGENT 서버와 통신할 포트를 설정합니다. |
| project | X-AGENT 서버의 프로젝트명을 설정합니다. |
| protocol | X-AGENT 서버와 통신할 웹소켓 통신 프로토콜을 설정합니다. |
| updateurl | X-AGENT 모듈 업데이트 URL 정보를 설정합니다. |

**Method**

| Name | Description |
| --- | --- |
| configure | X-AGENT 프로젝트 설정을 요청하는 메서드입니다. |
| connect | X-AGENT 서버와 연결을 요청하는 메서드입니다. |
| disconnect | X-AGENT 서버와 연결 종료를 요청하는 메서드입니다. |
| execute | X-AGENT 서버에 설치된 모듈 실행을 요청하는 메서드입니다. |
| installed | 윈도우 레지스트리 정보를 이용해 타사 앱 설치 여부를 확인하는 메서드입니다. |
| status | X-AGENT 서버 실행 상태 정보를 요청하는 메서드입니다. |
| updateModule | X-AGENT 서버에 모듈 업데이트를 요청하는 메서드입니다 |
| updateModuleCheck | X-AGENT 모듈 업데이트의 다운로드 상태 정보를 요청하는 메서드입니다. |
| updateModules | X-AGENT 서버에 여러 모듈 업데이트를 요청하는 메서드입니다 |
| version | X-AGENT 서버 버전, 모듈 버전 정보를 요청하는 메서드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onerror | 메서드 실행 실패 시 발생하는 이벤트입니다. |
| onsuccess | 메서드 실행 성공 시 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### addport

> Communication Objects > XAgent > Property > addport

**Description**

X-AGENT 서버와 통신 실패 시 연결을 시도할 다른 포트의 범위를 설정합니다.

**Syntax**

```javascript
XAgent.addport [=numAddPort]
```

**Setting Syntax**

```javascript
this.XAgent00.addport = 3;
```
- **`numAddPort`** — X-AGENT 서버와 통신 실패 시 연결을 시도할 다른 포트 범위를 설정합니다.

속성값을 5로 설정한 경우 49020 포트(port 속성값)로 연결을 시도하고 실패 시 1씩 더한 값을 포트값으로 설정해 49021~49025 포트로 연결을 시도합니다.

**Remark**

- addport 속성값을 설정하지 않으면 5로 적용됩니다.


---

### adminapiurl

> Communication Objects > XAgent > Property > adminapiurl

**Description**

X-AGENT Admin API URL 정보를 설정합니다.

**Syntax**

```javascript
XAgent.adminapiurl [=strAdminapiurl]
```

**Setting Syntax**

```javascript
this.XAgent00.adminapiurl = "https://www.example.com/api/event";
```
- **`strAdminapiurl`** — X-AGENT Admin API URL 정보를 설정합니다.

**Remark**

- X-AGENT가 이벤트를 보고할 Admin 서버의 엔드포인트 주소입니다.


---

### license

> Communication Objects > XAgent > Property > license

**Description**

X-AGENT 서버의 라이선스를 설정합니다.

**Syntax**

```javascript
XAgent.license [=strLicense]
```

**Setting Syntax**

```javascript
this.XAgent00.license = "http://localhost:8080/license_xagent.xml";
this.XAgent00.license = "data:application/xml;base64,PD9ljZW5zZT4=";
this.XAgent00.license = "file:///C:/license_xagent.xml";
this.XAgent00.license = "\server\share\license_xagent.xml";
```
- **`strLicense`** — X-AGENT 서버의 라이선스를 설정합니다.


---

### name

> Communication Objects > XAgent > Property > name

**Description**

XAgent 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
XAgent.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### port

> Communication Objects > XAgent > Property > port

**Description**

X-AGENT 서버와 통신할 포트를 설정합니다.

**Syntax**

```javascript
XAgent.port [=numPort]
```

**Setting Syntax**

- **`numPort`** — X-AGENT 서버와 통신할 포트를 설정합니다.

**Remark**

- port 속성값을 설정하지 않으면 49020으로 적용됩니다.


---

### project

> Communication Objects > XAgent > Property > project

**Description**

X-AGENT 서버의 프로젝트명을 설정합니다.

**Syntax**

```javascript
XAgent.project [=strProejct]
```

**Setting Syntax**

- **`strProejct`** — X-AGENT 서버의 프로젝트명을 설정합니다.


---

### protocol

> Communication Objects > XAgent > Property > protocol

**Description**

X-AGENT 서버와 통신할 웹소켓 통신 프로토콜을 설정합니다.

**Syntax**

```javascript
XAgent.protocol [=enumProtocol]
```

**Setting Syntax**

```javascript
enumProtocol ::= 'ws' | 'wss'
```
- **`"ws"`** — WebSocket
- **`"wss"`** — WebSocket Secure

**Remark**

- protocol 속성값을 설정하지 않으면 "ws"로 적용됩니다.


---

### updateurl

> Communication Objects > XAgent > Property > updateurl

**Description**

X-AGENT 모듈 업데이트 URL 정보를 설정합니다.

**Syntax**

```javascript
XAgent.updateurl [=strUpdateurl]
```

**Setting Syntax**

- **`strUpdateurl`** — X-AGENT 모듈 업데이트 URL 정보를 설정합니다.


---

### 메서드 (Methods)

### configure

> Communication Objects > XAgent > Method > configure

**Description**

X-AGENT 프로젝트 설정을 요청하는 메서드입니다.

**Syntax**

```javascript
XAgent.configure(strProject, strLicense, strUpdateUrl, strAdminApiUrl)
```

**Parameters**

```
X-AGENT 서버 프로젝트 이름
```

**Return**

없음

**Remark**

- 성공 시 onsuccess, 실패 시 onerror 이벤트가 발생합니다.

- 메서드가 정상적으로 실행되면 아래 경로에 project.json 파일이 생성됩니다.
  C:\Users\%USERNAME%\AppData\LocalLow\TOBESOFT\X-AGENT\Projects\[프로젝트명]\project.json

- 메서드 실행 시 파라미터값은 project, license, updateurl, adminapiurl 속성값을 변경하지는 않습니다.


---

### connect

> Communication Objects > XAgent > Method > connect

**Description**

X-AGENT 서버와 연결을 요청하는 메서드입니다.

**Syntax**

```javascript
XAgent.connect([strProject [,strLicense [,strUpdateUrl [,strAdminApiUrl]]]]
```

**Parameters**

```
X-AGENT 서버 프로젝트 이름
```

**Return**

없음

**Remark**

- 성공 시 onsuccess, 실패 시 onerror 이벤트가 발생합니다.
   onsuccess 이벤트 발생 시 XAgentEventInfo 오브젝트의 param 속성값에서 X-AGENT 버전 정보를 확인할 수 있습니다.
   var strVersion = e.param; // "2024.999.999"

- 서버 연결이 정상적으로 실행되면 아래 경로에 project.json 파일이 생성됩니다.
  C:\Users\%USERNAME%\AppData\LocalLow\TOBESOFT\X-AGENT\Projects\[프로젝트명]\project.json

- 메서드 실행 시 파라미터값은 project, license, updateurl, adminapiurl 속성값을 변경하지는 않습니다.


---

### disconnect

> Communication Objects > XAgent > Method > disconnect

**Description**

X-AGENT 서버와 연결 종료를 요청하는 메서드입니다.

**Syntax**

```javascript
XAgent.disconnect()
```

**Return**

없음

**Remark**

- 성공 시 onsuccess, 실패 시 onerror 이벤트가 발생합니다.


---

### execute

> Communication Objects > XAgent > Method > execute

**Description**

X-AGENT 서버에 설치된 모듈 실행을 요청하는 메서드입니다.

**Syntax**

```javascript
XAgent.execute(strModule, strFunc, objParam [,objExtraData])
```

**Parameters**

```
모듈 이름
```

**Return**

XAgent 내부적으로 생성된 고유 식별자 uid와 objExtraData 데이터를 포함하는 오브젝트를 반환합니다.

반환된 오브젝트의 'uid' 속성에 고유 식별자(UID) 값이 저장됩니다.
반환된 오브젝트의 'extra' 속성에 objExtraData 데이터 값이 저장됩니다.

execute 메서드 실행 성공 여부와 상관없이 메서드 실행 시 바로 반환하는 값입니다.

**Remark**

- 성공 시 onsuccess, 실패 시 onerror 이벤트가 발생합니다.
   onsuccess 이벤트 발생 시 XAgentEventInfo 오브젝트의 param 속성값에서 실행 모듈 함수의 반환값을 JSON 형태로 확인할 수 있습니다.
   
   {
       [
           "event",
               {
                   "eventId": "event",
                   "parameters": "{\"parameters\":{\"key\":\"value\"}}"
               }
       ]
   }


---

### installed

> Communication Objects > XAgent > Method > installed

**Description**

윈도우 레지스트리 정보를 이용해 타사 앱 설치 여부를 확인하는 메서드입니다.

**Syntax**

```javascript
XAgent.installed(strRegistryPath, strRegistryKey)
```

**Parameters**

```
아래 경로에 있는 레지스트리 CLSID(GUID)
Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\{registryPath}
```

**Return**

없음

**Remark**

- 성공 시 onsuccess, 실패 시 onerror 이벤트가 발생합니다.
   onsuccess 이벤트 발생 시 XAgentEventInfo 오브젝트의 param 속성값에서 레지스트리 키 값을 확인할 수 있습니다.
   var strRegistryKeyValue = e.param; // "24.0.0.1";


---

### status

> Communication Objects > XAgent > Method > status

**Description**

X-AGENT 서버 실행 상태 정보를 요청하는 메서드입니다.

**Syntax**

```javascript
XAgent.status(strType);
```

**Parameters**

```
상태를 확인할 대상을 설정합니다.

- "all":  X-AGENT 서버, 모듈 상태 정보
  파라미터 값을 설정하지 않은 경우 "all"로 동작합니다.
- "server": X-AGENT 서버 상태 정보
- "process":  X-AGENT 모듈 상태 정보
```

**Return**

없음

**Remark**

- 성공 시 onsuccess, 실패 시 onerror 이벤트가 발생합니다.
   onsuccess 이벤트 발생 시 XAgentEventInfo 오브젝트의 param 속성값에서 요청한 상태 정보를 JSON 형태로 확인할 수 있습니다.
   4가지 상태 정보를 반환합니다.
   - "RUNNING": 실행 중
   - "STOPPED": 중지 상태
   - "PAUSED": 일시 중지 상태
   - "IDLE": 대기 상태
   
   {
       "server",
       "RUNNING",
       "process",
       [
           { "slot": 0, "status": "RUNNING" },
           { "slot": 1, "status": "RUNNING" },
           { "slot": 2, "status": "STOPPED" },
           { "slot": 3, "status": "STOPPED" },
           { "slot": 4, "status": "STOPPED" },
           { "slot": 5, "status": "STOPPED" },
           { "slot": 6, "status": "STOPPED" },
           { "slot": 7, "status": "STOPPED" },
           { "slot": 8, "status": "STOPPED" },
           { "slot": 9, "status": "STOPPED" }
       ]
   }


---

### updateModule

> Communication Objects > XAgent > Method > updateModule

**Description**

X-AGENT 서버에 모듈 업데이트를 요청하는 메서드입니다

**Syntax**

```javascript
XAgent.updateModule(strName, strVersion, strFile, strProject[, bForceInstall])
```

**Parameters**

```
모듈 이름
```

**Return**

없음

**Remark**

- 성공 시 onsuccess, 실패 시 onerror 이벤트가 발생합니다.
   onsuccess 이벤트 발생 시 XAgentEventInfo 오브젝트의 param 속성값에서 모듈 정보를 JSON 형태로 확인할 수 있습니다.
   
   {
      "update-module": [
           {
              "name": "ModuleTest",
              "version": "1.0",
              "project": "nexacro.example.moduletest"
           }
       ]
   }


---

### updateModuleCheck

> Communication Objects > XAgent > Method > updateModuleCheck

**Description**

X-AGENT 모듈 업데이트의 다운로드 상태 정보를 요청하는 메서드입니다.

**Syntax**

```javascript
XAgent.updateModuleCheck()
```

**Return**

없음

**Remark**

- 성공 시 onsuccess, 실패 시 onerror 이벤트가 발생합니다.
   onsuccess 이벤트 발생 시 XAgentEventInfo 오브젝트의 param 속성값에서 모듈 업데이트의 다운로드 상태 정보를 확인할 수 있습니다.
   4가지 상태 정보를 반환합니다.
   - "Idle": 다운로드 중
   - "Checking for Updates": 업데이트 확인 중
   - "Downloading": 다운로드 중
   - "Installing": 설치 중
   - "Completed": 업데이트 완료
   - "Failed": 업데이트 실패
   var strUpdateStatus = e.param; // "Completed"


---

### updateModules

> Communication Objects > XAgent > Method > updateModules

**Description**

X-AGENT 서버에 여러 모듈 업데이트를 요청하는 메서드입니다

**Syntax**

```javascript
XAgent.updateModules(strProject)
```

**Parameters**

```
프로젝트 이름
```

**Return**

없음

**Remark**

- 성공 시 onsuccess, 실패 시 onerror 이벤트가 발생합니다.

- updateurl 속성에 설정된 경로 또는 connect, configure 메서드 실행 시 설정한 경로에서 modules.json 파일을 참조해 모듈 업데이트를 실행합니다.


---

### version

> Communication Objects > XAgent > Method > version

**Description**

X-AGENT 서버 버전, 모듈 버전 정보를 요청하는 메서드입니다.

**Syntax**

```javascript
XAgent.version([strType])
```

**Parameters**

```
버전 정보를 요청할 대상을 설정합니다.

- "all":  X-AGENT 서버, 모듈 버전 정보
  파라미터 값을 설정하지 않은 경우 "all"로 동작합니다.
- "server": X-AGENT 서버 버전 정보
- "modules":  X-AGENT 모듈 버전 정보
```

**Return**

없음

**Remark**

- 성공 시 onsuccess, 실패 시 onerror 이벤트가 발생합니다.
   onsuccess 이벤트 발생 시 XAgentEventInfo 오브젝트의 param 속성값에서 요청한 버전 정보를 JSON 형태로 확인할 수 있습니다.
   
   {
       "server":"2024,1,10,1",
       "modules":[
           {"name":"example1","version":"2023,12,10,1"},
           {"name":"example2","version":"2023,12,12,9"},
           {"name":"example3","version":"2024,12,16,999"},
           {"name":"ModuleTest","version":"1.0.1"}
       ],
   }


---

### 이벤트 (Events)

### onerror

> Communication Objects > XAgent > Event > onerror

**Description**

메서드 실행 실패 시 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.XAgent,e:nexacro.XAgentErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onsuccess

> Communication Objects > XAgent > Event > onsuccess

**Description**

메서드 실행 성공 시 발생하는 이벤트입니다.

**Syntax**

```javascript
onsuccess(obj:nexacro.XAgent,e:nexacro.XAgentEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

## Communication Objects > XPush

### XPush

> Communication Objects > XPush

**Description**

X-PUSH 서버에서 전달되는 메시지를 받을 수 있는 클라이언트 컴포넌트입니다.

**Remark**

- X-PUSH 서버와 연결을 맺고 인증을 통과한 후 자신이 받을 Topic 을 메시지 타입과 메시지 키를 사용하여 등록하면 X-PUSH 서버로부터 공급되는 메시지 수신할 수 있습니다.

- 메시지 타입은 메시지의 종류나 그룹에 해당하고 메시지 키는 각 메시지를 구분하기 위한 인덱스의 역할을 합니다.

- WRE 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.
- 모바일 NRE, WRE에서 실행 시 앱(또는 브라우저)이 background로 내려가거나 foreground로 올라올때 connect, disconnect, subscribe 등의 동작을 자동으로 처리하지 않으며 onsuccess, onerror 이벤트도 발생하지 않습니다.

**Property**

| Name | Description |
| --- | --- |
| controlretry | X-PUSH 서버에 Topic 등록/삭제 시 에러가 발생하면 재시도 할 횟수를 설정하는 속성입니다. |
| debug | 넥사크로 스튜디오의 output 윈도우에 디버그용 XPush 메시지를 보여줄지 여부를 설정하는 속성입니다. |
| errorcode | 에러가 발생한 경우 에러코드를 갖는 읽기전용 속성입니다. |
| errormsg | 에러가 발생한 경우 에러 메시지를 갖는 읽기전용 속성입니다. |
| iplist | 연결할 X-PUSH 서버의 IP 와 Port 를 설정하는 속성입니다. |
| keepalivetime | X-PUSH 서버와 연결을 유지하기 위한 메시지를 보낼 주기를 설정하는 속성입니다. |
| keeptimeout | X-PUSH 서버와 연결유지를 위해 보낸 메시지의 응답을 기다리는 시간을 설정하는 속성입니다. |
| layouturl | Message Layout 정의 파일의 위치를 설정하는 속성입니다. |
| name | XPush 의 이름을 설정하는 속성입니다. |
| projectid | X-PUSH 서버와 통신할 때 사용할 Project ID 를 설정하는 속성입니다. |
| protocolversion | X-PUSH 서버와 통신 시 사용할 Protocol 의 버전을 설정하는 속성입니다. |
| retry | X-PUSH 서버에 연결을 시도할 때 에러가 발생하면 재시도 할 횟수를 설정하는 속성입니다. |
| sessionid | X-PUSH 서버 연결 시 사용할 Session ID를 설정하는 속성입니다. |
| timeout | X-PUSH 서버와 연결을 위해 보낸 메시지의 응답을 기다리는 시간을 설정하는 속성입니다. |
| userid | X-PUSH 서버 연결 시 사용할 User ID를 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| connect | X-PUSH 서버와 연결을 수행하는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 XPush 을(를) 삭제하는 메소드입니다. |
| disconnect | X-PUSH 서버의 연결을 해제하는 메소드입니다. |
| getCurrentIP | 현재 접속중인 X-PUSH 서버의 IP값을 반환하는 메소드입니다. |
| getCurrentPort | 현재 접속중인 X-PUSH 서버의 Port 값을 반환하는 메소드입니다. |
| getRegisteredTopics | 신뢰성 메시지를 수신하기 위해 X-PUSH 서버에 등록한 Topic 정보를 요청하는 메소드입니다. |
| getRegisteredTopicsWithUserID | 신뢰성 메시지가 특정 사용자에게 수신될 수 있도록 X-PUSH 서버에 등록한 Topic 정보를 요청하는 메소드입니다. |
| registerDevice | 모바일에서 Notification 을 받기 위해 DeviceToken 값을 X-PUSH 서버에 등록하는 메소드입니다. |
| registerTopic | 신뢰성 메시지를 수신하기 위해 X-PUSH 서버에 Topic 을 등록하는 메소드입니다. |
| registerTopicWithUserID | 신뢰성 메시지가 특정 사용자에게 수신될 수 있도록 X-PUSH 서버에 Topic 을 등록하는 메소드입니다. |
| requestMessage | X-PUSH 서버에서 미수신한 신뢰성 메시지를 요청하는 메소드입니다. |
| requestMessageCount | X-PUSH 서버에서 미수신한 신뢰성 메시지의 갯수를 요청하는 메소드입니다. |
| requestMessageCountWithUserID | 특정 사용자가 미수신한 신뢰성 메시지의 갯수를 X-PUSH 서버에 요청하는 메소드입니다. |
| sendResponse | X-PUSH 서버에서 수신한 신뢰성 메시지에 대한 수신응답을 보내는 메소드입니다. |
| subscribe | 메시지를 받기 위해 연결된 X-PUSH 서버에 Topic 을 등록하는 메소드입니다. |
| unregisterDevice | 모바일에서 Notification 을 받기 위해 X-PUSH 서버에 등록한 DeviceToken 값을 삭제하는 메소드입니다. |
| unregisterTopic | 신뢰성 메시지를 수신하기 위해 X-PUSH 서버에 등록한 Topic 을 삭제하는 메소드입니다. |
| unregisterTopicWithUserID | 특정 사용자에게 수신되는 신뢰성 메시지의 Topic 을 X-PUSH 서버에서 삭제하는 메소드입니다. |
| unsubscribe | 메시지를 받기 위해 X-PUSH 서버에 등록한 Topic 을 삭제하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onerror | XPush 에서 요청된 작업이 실패했을 때 발생하는 이벤트입니다. |
| onkeepalive | X-PUSH 서버에서 통신유지를 위해 메시지를 받았을 때 발생하는 이벤트입니다. |
| onsuccess | XPush 에서 요청된 작업이 성공했을 때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### controlretry

> Communication Objects > XPush > Property > controlretry

**Description**

X-PUSH 서버에 Topic 등록/삭제 시 에러가 발생하면 재시도 할 횟수를 설정하는 속성입니다.

**Setting Syntax**

- **`nRetry`** — 에러 발생 시 재시도 할 횟수를 숫자로 설정합니다.

**Remark**

- controlretry 속성값을 설정하지 않으면 5 로 적용됩니다.

- subscribe(), unsubscribe() 메소드 수행중 또는 서버 연결 후 인증중에 Head 데이터가 잘못된 경우 재시도합니다.


◆ web runtime environment 제약

- web runtime environment 는 지원하지 않는 속성입니다.


---

### debug

> Communication Objects > XPush > Property > debug

**Description**

넥사크로 스튜디오의 output 윈도우에 디버그용 XPush 메시지를 보여줄지 여부를 설정하는 속성입니다.

**Setting Syntax**

```javascript
bDebug ::= 'true' | 'false'
```
- **`true`** — 넥사크로 스튜디오의 output 윈도우에 디버그용 XPush 메시지를 표시합니다.
- **`false`** — 넥사크로 스튜디오의 output 윈도우에 디버그용 XPush 메시지를 표시하지 않습니다.

**Remark**

- debug 속성값을 설정하지 않으면 false 로 적용됩니다.

- Windows NRE 만 지원하는 속성입니다.


---

### errorcode

> Communication Objects > XPush > Property > errorcode

**Description**

에러가 발생한 경우 에러코드를 갖는 읽기전용 속성입니다.

**Remark**

- X-PUSH 서버와 연결 실패 시 발생할 수 있는 에러코드입니다.
  > 300 : 서버와 접속에 실패했을 때 반환합니다.
  > 301 : 패킷 전송 (send / recv) 오류가 발생하면 반환합니다.
  > 202 : Data 전송 채널 인증 (authentication)에 오류가 발생하면 반환합니다.
  > 201 : iplist 속성에 설정된 Push 서버에 접속을 모두 실패했을 때 반환합니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.


---

### errormsg

> Communication Objects > XPush > Property > errormsg

**Description**

에러가 발생한 경우 에러 메시지를 갖는 읽기전용 속성입니다.

**Remark**

◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.


---

### iplist

> Communication Objects > XPush > Property > iplist

**Description**

연결할 X-PUSH 서버의 IP 와 Port 를 설정하는 속성입니다.

**Setting Syntax**

```javascript
strIplist ::= [strScheme]strIPaddress:nPort [, [strScheme]strIPaddress:nPort]*

strScheme ::= "tcp://" | "http://"
```
```javascript
this.XPush00.iplist = "192.168.0.1:1004";
this.XPush00.iplist = "192.168.0.1:1004,127.0.0.1:1004";
```
- **`strScheme`** — "tcp://" 설정 시 TCP 통신을 사용하여 메시지를 전달받습니다.
"http://" 설정 시 HTTP 통신을 사용하여 메시지를 전달받습니다.

웹브라우저 환경에서는 HTTP 통신을 사용하여야 합니다.
값을 설정하지 않으면 "tcp://" 으로 적용됩니다.
- **`strIPaddress`** — 연결할 X-PUSH 서버의 IP Address 를 설정합니다.
- **`nPort`** — 연결할 X-PUSH 서버의 Port 를 설정합니다.

**Remark**

- 하나 이상의 X-PUSH 서버를 콤마(",")로 구분하여 설정할 수 있습니다.

- connect() 메소드 실행 시 설정된 서버 중 무작위로 선택하여 연결을 시도합니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.


---

### keepalivetime

> Communication Objects > XPush > Property > keepalivetime

**Description**

X-PUSH 서버와 연결을 유지하기 위한 메시지를 보낼 주기를 설정하는 속성입니다.

**Setting Syntax**

- **`nKeepAliveTime`** — X-PUSH 서버와 연결유지를 위한 메시지를 보내는 주기를 초(Second) 단위의 숫자로 설정합니다.

**Remark**

- keepalivetime 속성값을 설정하지 않으면 30 으로 적용됩니다.

- X-PUSH 서버에 연결된 클라이언트는 서로 연결되어 있는 상태를 확인하기 위해 주기적으로 메시지를 보냅니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.


---

### keeptimeout

> Communication Objects > XPush > Property > keeptimeout

**Description**

X-PUSH 서버와 연결유지를 위해 보낸 메시지의 응답을 기다리는 시간을 설정하는 속성입니다.

**Setting Syntax**

- **`nTimeOut`** — X-PUSH 서버와 연결유지를 위해 보낸 메시지의 응답을 기다리는 시간을 초(Second) 단위의 숫자로 설정합니다.

"1" 이상의 정수값을 설정할 수 있습니다.
X-PUSH 서버에 설정된 응답시간보다 크거나 같게 설정하여야 합니다.

**Remark**

- keeptimeout 속성값을 설정하지 않으면 60 으로 적용됩니다.


◆ web runtime environment 제약

- web runtime environment 는 지원하지 않는 속성입니다.


---

### layouturl

> Communication Objects > XPush > Property > layouturl

**Description**

Message Layout 정의 파일의 위치를 설정하는 속성입니다.

**Setting Syntax**

```javascript
urlLayoutURL ::= <strAlias> | <absolute-Url> | <relative-Url>
```
- **`<strAlias>`** — Message Layout 파일의 위치를 Alias 를 사용하여 설정합니다.
- **`<absolute-Url>`** — Message Layout 파일의 위치를 "file://절대경로", "http://경로/파일명", "https://경로/파일명" 형태의 절대경로로 설정합니다.
- **`<relative-Url>`** — TypeDefinition 의 Services 영역에 정의된 Prefix 를 사용한 형식으로 설정합니다.

Form 의 위치를 기준으로 한 상대경로를 사용하여 설정합니다.

**Remark**

- layouturl 속성을 설정하지 않으면 정상적인 메시지 수신이 불가능하므로 반드시 설정해야 하는 속성입니다.

- Message Layout 정의 파일의 첫줄은 Header 정보로 XML 선언문을 설정합니다.

- Message Layout 정의 파일은 <message_layout> Element 하위에 <message> Element 로 정의됩니다.
  <message> Element 는 "type" Attribute 를 가지며 반드시 4 자리 영문자로 메시지 타입을 정의하여야 합니다.

- 하나의 메시지를 의미하는 <message> Element 는 하위에 <field> Element 를 갖습니다.
  <field> Element 는 메시지에 정의된 Field 값이며 가질 수 있는 Attribute 는 아래 표와 같습니다.

	
		attribute
		Description
	

	
		id
		필드명을 설정합니다.
	

	
		type
		필드의 타입을 설정합니다.
"string", "int", "float", "bigdecimal", "date", "time", "datetime" 을 설정할 수 있습니다.
	

	
		size
		필드의 데이터 크기를 설정합니다.
	

	
		key
		현재 필드가 키가 되는 여부를 설정합니다.
정의하지 않으면 "false" 로 적용됩니다.
하나 이상의 필드가 키로 설정될 수 있습니다.
	

	
		check
		Push 서버로 부터 받은 메시지를 DataSet 에 저장할 지 결정하는 필드인지 설정합니다.
정의하지 않으면 "false" 로 적용됩니다.
	



◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

**Example**



---

### name

> Communication Objects > XPush > Property > name

**Description**

XPush 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
XPush.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### projectid

> Communication Objects > XPush > Property > projectid

**Description**

X-PUSH 서버와 통신할 때 사용할 Project ID 를 설정하는 속성입니다.

**Syntax**

```javascript
XPush.projectid[= enumChanneltype]
```

**Setting Syntax**

```javascript
this.XPush00.projectid = "Project00";
```
- **`strID`** — X-PUSH 서버와 통신할 때 사용할 Project ID 를 문자열로 설정합니다.

**Remark**

- projectid 속성값을 설정하지 않으면 빈문자열("')로 적용됩니다.

- Project ID 로 구분하여 메시지를 수신하여야 할 때 사용하는 속성입니다.

- projectid 속성은 X-PUSH 서버의 버전이 v2.8 이상일때만 적용됩니다.


---

### protocolversion

> Communication Objects > XPush > Property > protocolversion

**Description**

X-PUSH 서버와 통신 시 사용할 Protocol 의 버전을 설정하는 속성입니다.

**Syntax**

```javascript
XPush.protocolversion[= strProtocolVersion]
```

**Setting Syntax**

```javascript
this.XPush00.protocolversion = 3;
```
- **`nVer`** — X-Push 서버와 통신 시 사용할 Protocol 의 버전을 숫자로 설정합니다.

2 설정 시 v2.8 미만 버전의 X-PUSH 서버 기능을 사용 할 수 있습니다.
3 설정 시 v2.8 이상 버전의 X-PUSH 서버 기능을 사용 할 수 있습니다.

* X-PUSH 서버의 버전이 V2.8 미만일 경우 2 만 설정할 수 있습니다.

**Remark**

- protocolversion 속성값을 설정하지 않으면 2 로 적용됩니다.

- X-PUSH v2.8 이상에서 제공하는 신규기능을 사용하려면 protocolversion 속성값을 3 으로 설정하여야 합니다.
   > User 별로 Project ID 로 구분된 메시지를 전송할 수 있습니다.
   > Mobile 에서 동일 디바이스의 서로 다른 App 에 Notification 을 구분하여 전송할 수 있습니다.


---

### retry

> Communication Objects > XPush > Property > retry

**Description**

X-PUSH 서버에 연결을 시도할 때 에러가 발생하면 재시도 할 횟수를 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.XPush00.retry = 2;
```
- **`nRetry`** — 에러 발생 시 재시도할 횟수를 숫자로 설정합니다.

"0" 설정 시 재시도 없이 연결을 종료합니다.

**Remark**

- retry 속성값을 설정하지 않으면 1 로 적용됩니다.


◆ web runtime environment 제약

- web runtime environment 는 지원하지 않는 속성입니다.


---

### sessionid

> Communication Objects > XPush > Property > sessionid

**Description**

X-PUSH 서버 연결 시 사용할 Session ID를 설정하는 속성입니다.

**Setting Syntax**

- **`strSessionID`** — X-PUSH 서버 연결 시 사용할 Session ID 를 문자열로 설정합니다.

**Remark**

- connect() 메소드에서 파라미터 생략 시 sessionid 속성값을 사용합니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.


---

### timeout

> Communication Objects > XPush > Property > timeout

**Description**

X-PUSH 서버와 연결을 위해 보낸 메시지의 응답을 기다리는 시간을 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.XPush00.timeout = 60;
```
- **`nTimeOut`** — X-PUSH 서버와 연결을 위해 보낸 메시지의 응답을 기다리는 시간을 초(Second) 단위의 숫자로 설정합니다.

"1" 이상의 정수값을 설정할 수 있습니다.
X-PUSH 서버에 설정된 응답시간보다 크거나 같게 설정하여야 합니다.

**Remark**

- timeout 속성값을 설정하지 않으면 30 으로 적용됩니다.


◆ web runtime environment 제약

- web runtime environment 는 지원하지 않는 속성입니다.


---

### userid

> Communication Objects > XPush > Property > userid

**Description**

X-PUSH 서버 연결 시 사용할 User ID를 설정하는 속성입니다.

**Setting Syntax**

- **`strUserID`** — X-PUSH 서버 연결 시 사용할 User ID 를 문자열로 설정합니다.

**Remark**

- connect() 메소드에서 파라미터 생략 시 userid 속성값을 사용합니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.


---

### 메서드 (Methods)

### connect

> Communication Objects > XPush > Method > connect

**Description**

X-PUSH 서버와 연결을 수행하는 메소드입니다.

**Syntax**

```javascript
XPush.connect( [strUserID [,strSessionID]] )
```

**Parameters**

```
X-PUSH 서버에 연결 시 인증을 위한 User ID를 설정합니다.

값 생략 시 userid 속성값이 적용됩니다.
```

**Return**

없음

**Remark**

- connect() 메소드는 iplist 속성에 설정된 서버를 무작위로 선택해서 접속을 시도합니다.  

- X-PUSH 서버 연결에 성공하면 onsuccess 이벤트가 실행됩니다.
   iplist 속성에 설정된 모든 Push 서버와 연결을 실패하면 onerror 이벤트가 실행됩니다.

- 네트워크에 연결되지 않은 경우는 timeout 속성값만큼 기다리지 않고 곧바로 onerror 이벤트가 발생합니다.

- protocolversion 속성값이 3 인 경우 서버와 연결 시 projectid 속성값이 자동으로 사용됩니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.


---

### destroy

> Communication Objects > XPush > Method > destroy

**Description**

스크립트에서 동적으로 생성한 XPush 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
XPush.destroy()
```

**Parameters**

var bSucc = this.XPush00.destroy();

**Return**

XPush 이(가) 정상적으로 삭제되면 true 를 반환합니다.

XPush 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 XPush 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildXPush.initXPush.show


---

### disconnect

> Communication Objects > XPush > Method > disconnect

**Description**

X-PUSH 서버의 연결을 해제하는 메소드입니다.

**Syntax**

```javascript
XPush.disconnect()
```

**Parameters**

this.XPush00.disconnect();

**Return**

없음

**Remark**

- X-PUSH 서버의 연결해제에 성공하면 onsuccess 이벤트가 실행됩니다.
   X-PUSH 서버의 연결해제에 실패하면 onerror 이벤트가 실행됩니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.


---

### getCurrentIP

> Communication Objects > XPush > Method > getCurrentIP

**Description**

현재 접속중인 X-PUSH 서버의 IP값을 반환하는 메소드입니다.

**Syntax**

```javascript
XPush.getCurrentIP()
```

**Parameters**

var strIPAddress = this.XPush00.getCurrentIP();

**Return**

현재 접속중인 X-PUSH 서버의 IP값을 반환합니다.

**Remark**

- 접속이 끊어진 경우에도 접속했던 X-PUSH 서버의 IP값을 반환합니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.


---

### getCurrentPort

> Communication Objects > XPush > Method > getCurrentPort

**Description**

현재 접속중인 X-PUSH 서버의 Port 값을 반환하는 메소드입니다.

**Syntax**

```javascript
XPush.getCurrentPort()
```

**Parameters**

var nPort = this.XPush00.getCurrentPort();

**Return**

현재 접속중인 X-PUSH 서버의 Port 값을 반환합니다.

**Remark**

- 접속이 끊어진 경우에도 접속했던 X-PUSH 서버의 Port 값을 반환합니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.


---

### getRegisteredTopics

> Communication Objects > XPush > Method > getRegisteredTopics

**Description**

신뢰성 메시지를 수신하기 위해 X-PUSH 서버에 등록한 Topic 정보를 요청하는 메소드입니다.

**Syntax**

```javascript
XPush.getRegisteredTopics()
```

**Return**

없음

**Remark**

- 대상 Topic은 데이터베이스에 저장된 Topic 정보만 해당합니다
  (메모리에 저장된 정보는 해당되지 않음).

- Topic 정보 조회 성공 시 onsuccess 이벤트가 발생합니다.
  XPushEventInfo 오브젝트의 action 속성값은 11이며 
  returnvalue 속성값에서 아래와 같은 형태로  값을 확인할 수 있습니다.
{
  "topic_A" : ["id_a", "id_b", id_c"],
  "topic_B" : ["id_a"],
  "topic_C" : ["id_a", "id_b"]
};

- Topic 정보 조회 실패 시 onerror 이벤트가 발생합니다.


---

### getRegisteredTopicsWithUserID

> Communication Objects > XPush > Method > getRegisteredTopicsWithUserID

**Description**

신뢰성 메시지가 특정 사용자에게 수신될 수 있도록 X-PUSH 서버에 등록한 Topic 정보를 요청하는 메소드입니다.

**Syntax**

```javascript
XPush.getRegisteredTopicsWithUserID(strUserID [, strProjectID] )
```

**Parameters**

```
신뢰성 메시지를 수신할 사용자의 ID를 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- 대상 Topic은 데이터베이스에 저장된 Topic 정보만 해당합니다
  (메모리에 저장된 정보는 해당되지 않음).

- Topic 정보 조회 성공 시 onsuccess 이벤트가 발생합니다.
  XPushEventInfo 오브젝트의 action 속성값은 11이며 
  returnvalue 속성값에서 아래와 같은 형태로  값을 확인할 수 있습니다.
{
  "topic_A" : ["id_a", "id_b", id_c"],
  "topic_B" : ["id_a"],
  "topic_C" : ["id_a", "id_b"]
};

- Topic 정보 조회 실패 시 onerror 이벤트가 발생합니다.


---

### registerDevice

> Communication Objects > XPush > Method > registerDevice

**Description**

모바일에서 Notification 을 받기 위해 DeviceToken 값을 X-PUSH 서버에 등록하는 메소드입니다.

**Syntax**

```javascript
XPush.registerDevice()
```

**Parameters**

this.XPush00.registerDevice()

**Return**

없음

**Remark**

- 모바일 환경만 지원하는 기능입니다.


---

### registerTopic

> Communication Objects > XPush > Method > registerTopic

**Description**

신뢰성 메시지를 수신하기 위해 X-PUSH 서버에 Topic 을 등록하는 메소드입니다.

**Syntax**

```javascript
this.XPush00.registerTopic(strMessageType, strMessgageKey);
```

**Parameters**

```
Message Layout 파일에 정의된 메시지 타입 중 수신 받을 메시지 타입을 설정합니다.
```

**Return**

없음

**Remark**

- 신뢰성 메시지 Topic 등록에 성공하면 onsuccess 이벤트가 실행됩니다.
  신뢰성 메시지 Topic 등록에 실패하면 onerror 이벤트가 실행됩니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.


---

### registerTopicWithUserID

> Communication Objects > XPush > Method > registerTopicWithUserID

**Description**

신뢰성 메시지가 특정 사용자에게 수신될 수 있도록 X-PUSH 서버에 Topic 을 등록하는 메소드입니다.

**Syntax**

```javascript
this.XPush00.registerTopicWithUserID( strMessageType, strMessgageKey, strUserID [, strProjectID] );
```

**Parameters**

```
Message Layout 파일에 정의된 메시지 타입 중 수신 받을 메시지 타입을 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- 신뢰성 메시지 Topic 등록에 성공하면 onsuccess 이벤트가 실행됩니다.
   신뢰성 메시지 Topic 등록에 실패하면 onerror 이벤트가 실행됩니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.


---

### requestMessage

> Communication Objects > XPush > Method > requestMessage

**Description**

X-PUSH 서버에서 미수신한 신뢰성 메시지를 요청하는 메소드입니다.

**Syntax**

```javascript
requestMessage ( strMsgType, strMsgKeys );
```

**Parameters**

```
Message Layout 파일에 정의된 메시지 타입 중 수신 받을 메시지 타입을 설정합니다.
```

**Return**

없음

**Remark**

- 미수신 메시지 요청에 성공하면 onsuccess 이벤트가 발생합니다.
   미수신 메시지 요청에 실패하면 onerror 이벤트가 발생합니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.


---

### requestMessageCount

> Communication Objects > XPush > Method > requestMessageCount

**Description**

X-PUSH 서버에서 미수신한 신뢰성 메시지의 갯수를 요청하는 메소드입니다.

**Syntax**

```javascript
XPush.requestMessageCount(strMessageType, strMessgageKey)
```

**Parameters**

```
Message Layout 파일에 정의된 메시지 타입 중 갯수를 수신 받을 메시지의 타입을 설정합니다.
```

**Return**

없음

**Remark**

- 미수신 메시지 갯수 요청에 성공하면 onsuccess 이벤트가 발생합니다.
   미수신 메시지 갯수 요청에 실패하면 onerror 이벤트가 발생합니다.

- 미수신 메시지 갯수는 onsuccess 이벤트에서 "e" 오브젝트(XPushEventInfo)의 returnvalue 속성값으로 전달됩니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.


---

### requestMessageCountWithUserID

> Communication Objects > XPush > Method > requestMessageCountWithUserID

**Description**

특정 사용자가 미수신한 신뢰성 메시지의 갯수를 X-PUSH 서버에 요청하는 메소드입니다.

**Syntax**

```javascript
XPush.requestMessageCountWithUserID( strMessageType, strMessgageKey, strUserID [, strProjectID] )
```

**Parameters**

```
Message Layout 파일에 정의된 메시지 타입 중 갯수를 수신 받을 메시지의 타입을 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- 미수신 메시지 갯수 요청에 성공하면 onsuccess 이벤트가 발생합니다.
   미수신 메시지 갯수 요청에 실패하면 onerror 이벤트가 발생합니다.

- 미수신 메시지 갯수는 onsuccess 이벤트에서 e 오브젝트(XPushEventInfo)의 returnvalue 속성값으로 전달됩니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.


---

### sendResponse

> Communication Objects > XPush > Method > sendResponse

**Description**

X-PUSH 서버에서 수신한 신뢰성 메시지에 대한 수신응답을 보내는 메소드입니다.

**Syntax**

```javascript
XPush.sendResponse(strmsgid)
```

**Parameters**

```
수신된 신뢰성 메시지의 ID를 설정합니다.

메시지 수신 시 발생하는 CallBack 함수에 "msgid" 파라미터의 값으로 ID가 전달됩니다.
```

**Return**

없음

**Remark**

- 메시지 수신응답에 성공하면 onsuccess 이벤트가 발생합니다.
   메시지 수신응답에 실패하면 onerror 이벤트가 발생합니다.

- 메시지 수신응답에 실패한 경우 requestMessage() 메소드 수행 시 해당 메시지가 존재합니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.


---

### subscribe

> Communication Objects > XPush > Method > subscribe

**Description**

메시지를 받기 위해 연결된 X-PUSH 서버에 Topic 을 등록하는 메소드입니다.

**Syntax**

```javascript
XPush.subscribe(strMsgType, strMsgKey, objForm, objDataset, strType, strCallBack[, nRow[, strCheck[, bUseActiveFormCallBack]]])
```

**Parameters**

```
Message Layout 파일에 정의된 메시지 타입 중 수신 받을 메시지 타입을 설정합니다.
```

**Return**

없음

**Remark**

- subscribe() 메소드 실행 전 X-PUSH 서버에 연결되어 있어야 합니다.

- CallBack 함수는 CallBackName ( ChangeRow, ChangeCol, ColList, strMsgType, strActionType, strMsgID ) 형태로 구성되며 각 파라미터는 아래 조건에 따라 다른 의미를 갖습니다.

   a) strType 파라미터값이 "allUpdate" 값이고 데이터를 받았을 경우
       > ChangeRow : 변경된 Row 들의 인덱스가 "," 로 구분되어 설정됩니다.
       > ChangeCol : Null 값이 설정됩니다.
       > ColList : 변경된 Row 와 Column 의 ID 가 배열로 설정됩니다.
                      하나의 원소에는 변경된 Row 의 인덱스와 변경된 Column 의 ID 가 "," 로 구분되어 설정됩니다.
       > strMsgType : "DATA" 값이 설정됩니다.

   b) strType 파라미터값이 "allUpdate" 이 외의 값이고 데이터를 받았을 경우
       > ChangeRow : 변경된 Row 의 인덱스가 설정됩니다.
       > ChangeCol : 변경된 Column ID 가 "," 로 구분되어 설정됩니다.
       > ColList : 모든 Column ID 가 "," 로 구분되어 설정됩니다.
       > strMsgType : "DATA" 값이 설정됩니다.

   c) Recovery 메시지를 받았을 경우
       > ChangeRow : -1 값이 설정됩니다.
       > ChangeCol : 빈 문자열이 설정됩니다.
       > ColList : 빈 문자열이 설정됩니다.
       > strMsgType : "RECOVERY" 값이 설정됩니다.
  
   d) 공통값을 갖는 파라미터
       > strActionType : 일반 메시지를 수신했을 경우 "PUSH" 값이 설정됩니다.
                               신뢰성 메시지를 수신했을 경우 "RECT" 값이 설정됩니다.
       > strMsgID : 메시지를 구분할 수 있는 값이 설정됩니다.
                        sendResponse() 메소드에서 파라미터값으로 사용됩니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.


---

### unregisterDevice

> Communication Objects > XPush > Method > unregisterDevice

**Description**

모바일에서 Notification 을 받기 위해 X-PUSH 서버에 등록한 DeviceToken 값을 삭제하는 메소드입니다.

**Syntax**

```javascript
XPush.unregisterDevice()
```

**Parameters**

this.XPush00.unregisterDevice()

**Return**

없음

**Remark**

- 모바일 환경만 지원하는 기능입니다.


---

### unregisterTopic

> Communication Objects > XPush > Method > unregisterTopic

**Description**

신뢰성 메시지를 수신하기 위해 X-PUSH 서버에 등록한 Topic 을 삭제하는 메소드입니다.

**Syntax**

```javascript
XPush.unregisterTopic(strMessageType, strMessgageKey)
```

**Parameters**

```
Message Layout 파일에 정의된 메시지 타입 중 수신을 중지할 메시지 타입을 설정합니다.
```

**Return**

없음

**Remark**

◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.


---

### unregisterTopicWithUserID

> Communication Objects > XPush > Method > unregisterTopicWithUserID

**Description**

특정 사용자에게 수신되는 신뢰성 메시지의 Topic 을 X-PUSH 서버에서 삭제하는 메소드입니다.

**Syntax**

```javascript
XPush.unregisterTopicWithUserID( strMessageType, strMessgageKey, strUserID [, strProjectID] )
```

**Parameters**

```
Message Layout 파일에 정의된 메시지 타입 중 수신을 중지할 메시지 타입을 문자열로 설정합니다.
```

**Return**

없음

**Remark**

◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.


---

### unsubscribe

> Communication Objects > XPush > Method > unsubscribe

**Description**

메시지를 받기 위해 X-PUSH 서버에 등록한 Topic 을 삭제하는 메소드입니다.

**Syntax**

```javascript
XPush.unsubscribe(strMsgType, strMsgKey, objForm, objDataset, strType, strCallBack)
```

**Parameters**

```
Message Layout 파일에 정의된 메시지 타입 중 수신을 중지할 Topic 의 메시지 타입을 설정합니다.
```

**Return**

없음

**Remark**

◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.


---

### 이벤트 (Events)

### onerror

> Communication Objects > XPush > Event > onerror

**Description**

XPush 에서 요청된 작업이 실패했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.XPush,e:nexacro.XPushErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.


---

### onkeepalive

> Communication Objects > XPush > Event > onkeepalive

**Description**

X-PUSH 서버에서 통신유지를 위해 메시지를 받았을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkeepalive(obj:nexacro.XPush,e:nexacro.XPushKeepAliveEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- XPush 클라이언트는 서버와 통신유지를 위해 keepalivetime 속성에 설정된 시간 간격으로 메시지를 주고 받습니다.


◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.


---

### onsuccess

> Communication Objects > XPush > Event > onsuccess

**Description**

XPush 에서 요청된 작업이 성공했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsuccess(obj:nexacro.XPush,e:nexacro.XPushEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

◆ web runtime environment 제약

- web runtime environment 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.


---

## Communication Objects > XPush > Objects

### Objects

> Communication Objects > XPush > Objects

**Description**

X-PUSH 서버로부터 전달되는 오브젝트입니다.

**Remark**

- 웹브라우저 환경에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

- onsuccess, onerror 이벤트의 EventInfo 속성에 설정되는 오브젝트입니다.


---

## Communication Objects > XPush > PushMessageObject

### PushMessageObject

> Communication Objects > XPush > Objects > PushMessageObject

**Description**

X-PUSH 서버로부터 전달되는 Push 메시지를 갖는 오브젝트입니다.

**Remark**

- 웹브라우저 환경에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.

- PushMessageObejct 는 onsuccess, onerror 이벤트에 전달되는 EventInfo 의 message 속성에 저장됩니다.

**Property**

| Name | Description |
| --- | --- |
| messageid | XPush 서버에서 수신한 메시지의 Topic id 속성입니다. |
| messagekey | XPush 서버에서 수신한메시지를 구분할 수 있는 유일한 키 값입니다. |
| messagetype | XPush 서버에서 수신한 메시지의 Topic Type의 속성입니다. 메시지 레이아웃에 정의 된 메시지의 타입니다. |


---

### 속성 (Properties)

### messageid

> Communication Objects > XPush > Objects > PushMessageObject > Property > messageid

**Description**

XPush 서버에서 수신한 메시지의 Topic id 속성입니다.


---

### messagekey

> Communication Objects > XPush > Objects > PushMessageObject > Property > messagekey

**Description**

XPush 서버에서 수신한메시지를 구분할 수 있는 유일한 키 값입니다.


---

### messagetype

> Communication Objects > XPush > Objects > PushMessageObject > Property > messagetype

**Description**

XPush 서버에서 수신한 메시지의 Topic Type의 속성입니다. 메시지 레이아웃에 정의 된 메시지의 타입니다.


---
