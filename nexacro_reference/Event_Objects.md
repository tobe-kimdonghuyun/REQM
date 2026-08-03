# nexacroN V24 — Event Objects

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 5개

---

## Event Objects

### Event Objects

> Event Objects

**Description**

이벤트를 처리하기 위한 오브젝트입니다.


---

## Event Objects > EventObject

### EventObject

> Event Objects > EventObject

**Description**

컴포넌트에 선언된 이벤트의 원형 오브젝트입니다.

**Remark**

- 일반적으로 Composite Component 와 같은 사용자 컴포넌트에 이벤트를 선언할 때 내부적으로 사용되는 오브젝트입니다.

- 컴포넌트의 모든 이벤트는 EventObject 를 사용하여 선언됩니다.
   컴포넌트에 선언된 이벤트에 addEventHandler() 와 같은 메소드로 핸들러 함수를 동록하여 이벤트를 정의합니다.

- 이벤트 및 이벤트 핸들러의 종류는 각 컴포넌트의 Event 항목을 참조하시기 바랍니다.

**Property**

| Name | Description |
| --- | --- |
| length | 이벤트에 정의된 이벤트 핸들러 함수의 갯수를 갖는 읽기전용 속성입니다. |
| name | EventObject 의 이름을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| fireEvent | 이벤트에 정의된 핸들러 함수를 호출하여 이벤트를 발생시키는 메소드입니다. |


---

### 속성 (Properties)

### length

> Event Objects > EventObject > Property > length

**Description**

이벤트에 정의된 이벤트 핸들러 함수의 갯수를 갖는 읽기전용 속성입니다.

**Setting Syntax**

```javascript
var nCnt = this.Button00.onclick.length;
```

**Remark**

- 이벤트 핸들러 함수는 넥사크로 스튜디오에서 정의하거나 addEventHandler() 와 같은 메소드를 사용하여 정의할 수 있습니다.


---

### name

> Event Objects > EventObject > Property > name

**Description**

EventObject 의 이름을 설정하는 속성입니다.

**Setting Syntax**

- **`strName`** — EventObject 의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 Object 의 이름으로 논리적으로 중복이 가능합니다.


---

### 메서드 (Methods)

### fireEvent

> Event Objects > EventObject > Method > fireEvent

**Description**

이벤트에 정의된 핸들러 함수를 호출하여 이벤트를 발생시키는 메소드입니다.

**Syntax**

```javascript
EventObject.fireEvent( objFireComp, objEventInfo [, bCancelable] )
```

**Parameters**

```
이벤트 핸들러 함수에 전달할 컴포넌트를 설정합니다.

일반적으로 이벤트가 발생할 컴포넌트를 동일하게 설정합니다.
```

**Return**

bCancelable 파라미터가 true 이고 핸들러 함수 실행중 false 가 반환되었다면 false 를 반환합니다.
bCancelable 파라미터가 true 이고 핸들러 함수 실행중 false 가 반환되지 않았다면 true 를 반환합니다.

bCancelable 파라미터가 false 이면 마지막 핸들러 함수에서 반환한 값을 반환합니다.
bCancelable 파라미터가 false 이고 마지막 핸들러 함수에서 값을 반환하지 않으면 빈값을 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에서 이벤트를 발생시킬 때 사용하는 메소드입니다.

- 이벤트에 두개 이상의 핸들러 함수가 정의되었다면 정의된 순서대로 핸들러 함수를 실행합니다.

- 일반적으로 fireEvent() 메소드의 반환값은 핸들러 함수에서 이벤트를 취소했다는 정보를 받으려 할 때 사용합니다.
   bCancelable 파라미터가 true 이고 핸들러 함수 실행중 false 가 반환되었을 경우입니다.

**Example**



---
