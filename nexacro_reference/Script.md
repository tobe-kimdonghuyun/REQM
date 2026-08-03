# nexacroN V24 — Script

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 131개

---

## Script

### Script

> Script

**Description**

Script 에서 사용할 수 있는 오브젝트입니다.

**Remark**

- 넥사크로에서 사용 가능한 Standard Built-in ECMAScript Objects ( String, Boolean, Number, Array 등 ) 는 브라우저에 따라 다를 수 있습니다.
   
- Nexacro Runtime Environment는  V8 JavaScript Engine 을 내장하여 사용하고 있으므로 V8 에서 제공하는 Built-in Object 를 그대로 사용합니다.
   지원하는 Standard Built-in ECMAScript 오브젝트의 기준 버전은 V8 8.2.297.3 버전입니다.

- Web Runtime Environment는 각각의 웹브라우저가 제공하는 엔진 구현내용을 따릅니다.

- ECMAScript 오브젝트에 대한 설명은 여기를 참조하세요.


---

## Script > Nexacro Objects

### Nexacro Objects

> Script > Nexacro Objects

**Description**

넥사크로에서 제공하는 오브젝트입니다.


---

## Script > Nexacro Objects > Date

### Date

> Script > Nexacro Objects > Date

**Description**

Date 정보를 처리하기 위해 제공되는 오브젝트입니다.

**Remark**

- 스크립트의 Date 오브젝트에서 toLocaleDateString(), toLocaleString(), toLocaleTimeString () 메소드를 추가로 제공합니다.

- 넥사크로에서 제공하는 Date 오브젝트로 생성 시 "nexacro" 를 사용하여야 합니다.

- Date 오브젝트를 생성할 때 시간을 지정하지 않으면 시,분,초 값이 모두 0 으로 설정됩니다.

- datatyperule 속성값이 "2.0" 일 때 Invalid Value 를 가진 Date 오브젝트를 생성하려면 파라미터로 undefined 를 설정하여야 합니다.

**Method**

| Name | Description |
| --- | --- |
| addDate | Date 오브젝트에 지정된 날짜(Day)만큼 더하는 메소드입니다. |
| addHours | Date 오브젝트에 지정된 시간(Hour)만큼 더하는 메소드입니다. |
| addMilliseconds | Date 오브젝트에 지정된 밀리초(MilliSecond)만큼 더하는 메소드입니다. |
| addMinutes | Date 오브젝트에 지정된 분(Minutes)만큼 더하는 메소드입니다. |
| addMonth | Date 오브젝트에 지정된 월(Month)만큼 더하는 메소드입니다. |
| addSeconds | Date 오브젝트에 지정된 초(Second)만큼 더하는 메소드입니다. |
| addYear | Date 오브젝트에 지정된 년도(Year)만큼 더하는 메소드입니다. |
| getDate | Date 오브젝트에 저장된 값에서 날짜(Day)를 반환하는 메소드입니다. |
| getDay | Date 오브젝트에 저장된 값에서 요일를 반환하는 메소드입니다. |
| getFullYear | Date 오브젝트에 저장된 값에서 네자리 년도(Year)를 반환하는 메소드입니다. |
| getHours | Date 오브젝트에 저장된 값에서 시(Hour)값을 반환하는 메소드입니다. |
| getMilliseconds | Date 오브젝트에 저장된 값에서 밀리초(MilliSecond)값을 반환하는 메소드입니다. |
| getMinutes | Date 오브젝트에 저장된 값에서 분(Minute)값을 반환하는 메소드입니다. |
| getMonth | Date 오브젝트에 저장된 값에서 월(Month)값을 반환하는 메소드입니다. |
| getSeconds | Date 오브젝트에 저장된 값에서 초(Second)값을 반환하는 메소드입니다. |
| getTime | Date 오브젝트에 저장된 값을 밀리초(MilliSecond)값으로 반환하는 메소드입니다. |
| getTimezoneOffset | Date 오브젝트에 저장된 값과 UTC(협정세계시) 사이의 시간차를 분(Minute)값으로 반환하는 메소드입니다. |
| getUTCDate | UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 날짜(Day)를 반환하는 메소드입니다. |
| getUTCDay | UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 요일를 반환하는 메소드입니다. |
| getUTCFullYear | UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 네자리 년도(Year)를 반환하는 메소드입니다. |
| getUTCHours | UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 시(Hour)값을 반환하는 메소드입니다. |
| getUTCMilliseconds | UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 밀리초(MilliSecond)값을 반환하는 메소드입니다. |
| getUTCMinutes | UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 분(Minute)값을 반환하는 메소드입니다. |
| getUTCMonth | UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 월(Month)값을 반환하는 메소드입니다. |
| getUTCSeconds | UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 초(Second)값을 반환하는 메소드입니다. |
| getYear | Date 오브젝트에 저장된 값에서 년도(Year)를 반환하는 메소드입니다. |
| parse | 날짜가 포함된 문자열을 분석해 1970년 1월 1일 자정부터 해당 날짜 사이의 시간을 밀리초로 반환하는 메소드입니다. |
| setDate | Date 오브젝트에 저장된 값에서 날짜(Day)를 변경하는 메소드입니다. |
| setFullYear | Date 오브젝트에 저장된 값에서 년도(Year) 또는 전체 날짜를 변경하는 메소드입니다. |
| setHours | Date 오브젝트에 저장된 값에서 시(Hour) 또는 전체 시간를 변경하는 메소드입니다. |
| setMilliseconds | Date 오브젝트에 저장된 값에서 밀리초(MilliSecond)를 변경하는 메소드입니다. |
| setMinutes | Date 오브젝트에 저장된 값에서 분(Minute)을 변경하는 메소드입니다. |
| setMonth | Date 오브젝트에 저장된 값에서 월(Month)을 변경하는 메소드입니다. |
| setSeconds | Date 오브젝트에 저장된 값에서 초(Second)를 변경하는 메소드입니다. |
| setTime | Date 오브젝트에 날짜와 시간을 밀리초(MilliSecond)값으로 설정하는 메소드입니다. |
| setUTCDate | UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 날짜(Day)를 변경하는 메소드입니다. |
| setUTCFullYear | UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 년도(Year) 또는 전체 날짜를 변경하는 메소드입니다. |
| setUTCHours | UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 시(Hour) 또는 전체 시간를 변경하는 메소드입니다. |
| setUTCMilliseconds | UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 밀리초(MilliSecond)를 변경하는 메소드입니다. |
| setUTCMinutes | UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 분(Minute)을 변경하는 메소드입니다. |
| setUTCMonth | UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 월(Month)을 변경하는 메소드입니다. |
| setUTCSeconds | UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 초(Second)를 변경하는 메소드입니다. |
| setYear | Date 오브젝트에 저장된 값에서 년도(Year)를 변경하는 메소드입니다. |
| toDateString | Date 오브젝트에 저장된 날짜를 문자열로 반환하는 메소드입니다. |
| toGMTString | GMT(그리니치 표준시)를 기준으로 Date 오브젝트에 저장된 날짜와 시간을 문자열로 반환하는 메소드입니다. |
| toLocaleDateString | Date 오브젝트에 저장된 날짜를 특정 로케일 형식의 문자열로 반환하는 메소드입니다. |
| toLocaleString | Date 오브젝트에 저장된 날짜와 시간을 특정 로케일 형식의 문자열로 반환하는 메소드입니다. |
| toLocaleTimeString | Date 오브젝트에 저장된 시간을 특정 로케일 형식의 문자열로 반환하는 메소드입니다. |
| toString | Date 오브젝트에 저장된 날짜와 시간값을 문자열로 반환하는 메소드입니다. |
| toTimeString | Date 오브젝트에 저장된 시간을 문자열로 반환하는 메소드입니다. |
| toUTCString | UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 날짜와 시간을 문자열로 반환하는 메소드입니다. |
| UTC | UTC(협정세계시) 또는 GMT(그리니치 표준시)를 기준으로 1970년 1월 1일 자정부터 인수로 전달된 날짜까지의 시간을 밀리초(MilliSecond)값으로 반환하는 메소드입니다. |
| valueOf | Date 오브젝트에 저장된 날짜와 시간값을 문자열로 반환하는 메소드입니다. |


---

### 메서드 (Methods)

### addDate

> Script > Nexacro Objects > Date > Method > addDate

**Description**

Date 오브젝트에 지정된 날짜(Day)만큼 더하는 메소드입니다.

**Syntax**

```javascript
Date.addDate(nDays)
```

**Parameters**

```
Date 오브젝트에 더할 날짜(Day) 수를 숫자로 설정합나다.

음수로 설정 시 Date 오브젝트에서 설정한 날짜 (Day)수를 뺍니다.
```

**Return**

Date 오브젝트에 저장된 날짜에 지정한 날짜만큼 더한 날짜를 반환합니다.

UTC(협정세계시) 1970년 1월 1일 자정부터 밀리초 단위로 저장된 시간 값을 반환합니다.


---

### addHours

> Script > Nexacro Objects > Date > Method > addHours

**Description**

Date 오브젝트에 지정된 시간(Hour)만큼 더하는 메소드입니다.

**Syntax**

```javascript
Date.addHours(nHours)
```

**Parameters**

```
Date 오브젝트에 더할 시간값(Hour)을 숫자로 설정합나다.

음수로 설정 시 Date 오브젝트에서 설정한 시간값(Hour)을 뺍니다.
```

**Return**

Date 오브젝트에 저장된 날짜에 지정한 시간만큼 더한 날짜를 반환합니다.

UTC(협정세계시) 1970년 1월 1일 자정부터 밀리초 단위로 저장된 시간 값을 반환합니다.


---

### addMilliseconds

> Script > Nexacro Objects > Date > Method > addMilliseconds

**Description**

Date 오브젝트에 지정된 밀리초(MilliSecond)만큼 더하는 메소드입니다.

**Syntax**

```javascript
Date.addMilliseconds(nMsec)
```

**Parameters**

```
Date 오브젝트에 더할 밀리초값(MilliSecond)을 숫자로 설정합나다.

음수로 설정 시 Date 오브젝트에서 설정한 밀리초값(MilliSecond)을 뺍니다.
```

**Return**

Date 오브젝트에 저장된 날짜에 지정한 밀리초만큼 더한 날짜를 반환합니다.

UTC(협정세계시) 1970년 1월 1일 자정부터 밀리초 단위로 저장된 시간 값을 반환합니다.


---

### addMinutes

> Script > Nexacro Objects > Date > Method > addMinutes

**Description**

Date 오브젝트에 지정된 분(Minutes)만큼 더하는 메소드입니다.

**Syntax**

```javascript
Date.addMinutes(nMinutes)
```

**Parameters**

```
Date 오브젝트에 더할 분값(Minutes)을 숫자로 설정합나다.

음수로 설정 시 Date 오브젝트에서 설정한 분값(Minutes)을 뺍니다.
```

**Return**

Date 오브젝트에 저장된 날짜에 지정한 분(Minutes)만큼 더한 날짜를 반환합니다.

UTC(협정세계시) 1970년 1월 1일 자정부터 밀리초 단위로 저장된 시간 값을 반환합니다.


---

### addMonth

> Script > Nexacro Objects > Date > Method > addMonth

**Description**

Date 오브젝트에 지정된 월(Month)만큼 더하는 메소드입니다.

**Syntax**

```javascript
Date.addMonth(nMonths)
```

**Parameters**

```
Date 오브젝트에 더할 월값(Month)을 숫자로 설정합나다.

음수로 설정 시 Date 오브젝트에서 설정한 월값(Month)을 뺍니다.
```

**Return**

Date 오브젝트에 저장된 날짜에 지정한 월(Month)만큼 더한 날짜를 반환합니다.

UTC(협정세계시) 1970년 1월 1일 자정부터 밀리초 단위로 저장된 시간 값을 반환합니다.


---

### addSeconds

> Script > Nexacro Objects > Date > Method > addSeconds

**Description**

Date 오브젝트에 지정된 초(Second)만큼 더하는 메소드입니다.

**Syntax**

```javascript
Date.addSeconds(nSeconds)
```

**Parameters**

```
Date 오브젝트에 더할 초값(Second)을 숫자로 설정합나다.

음수로 설정 시 Date 오브젝트에서 설정한 초값(Second)을 뺍니다.
```

**Return**

Date 오브젝트에 저장된 날짜에 지정한 초(Second)만큼 더한 날짜를 반환합니다.

UTC(협정세계시) 1970년 1월 1일 자정부터 밀리초 단위로 저장된 시간 값을 반환합니다.


---

### addYear

> Script > Nexacro Objects > Date > Method > addYear

**Description**

Date 오브젝트에 지정된 년도(Year)만큼 더하는 메소드입니다.

**Syntax**

```javascript
Date.addYear(nYears)
```

**Parameters**

```
Date 오브젝트에 더할 년수값(Year)을 숫자로 설정합나다.

음수로 설정 시 Date 오브젝트에서 설정한 년수값(Year)을 뺍니다.
```

**Return**

Date 오브젝트에 저장된 날짜에 지정한 년수(Year)만큼 더한 날짜를 반환합니다.

UTC(협정세계시) 1970년 1월 1일 자정부터 밀리초 단위로 저장된 시간 값을 반환합니다.


---

### getDate

> Script > Nexacro Objects > Date > Method > getDate

**Description**

Date 오브젝트에 저장된 값에서 날짜(Day)를 반환하는 메소드입니다.

**Syntax**

```javascript
Date.getDate()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.getDate());

**Return**

1 부터 31 사이의 날짜 값을 반환합니다.

**Remark**

- UTC(협정세계시)를 기준으로 날짜(Day)값을 가져오려고 하면 getUTCDate() 메소드를 사용해야 합니다.

**Example**



---

### getDay

> Script > Nexacro Objects > Date > Method > getDay

**Description**

Date 오브젝트에 저장된 값에서 요일를 반환하는 메소드입니다.

**Syntax**

```javascript
Date.getDay()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.getDay());

**Return**

0 (일요일) 부터 6 (토요일) 사이의 요일 코드값을 반환합니다.

**Remark**

- UTC(협정세계시)를 기준으로 요일값을 가져오려고 하면 getUTCDay() 메소드를 사용해야 합니다.

- getDay() 메소드에서 반환되는 요일의 코드값은 아래와 같습니다.
   0 :일요일, 1 :월요일, 2 :화요일, 3 :수요일, 4 :목요일, 5 :금요일:, 6 :토요일

**Example**



---

### getFullYear

> Script > Nexacro Objects > Date > Method > getFullYear

**Description**

Date 오브젝트에 저장된 값에서 네자리 년도(Year)를 반환하는 메소드입니다.

**Syntax**

```javascript
Date.getFullYear()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.getFullYear());

**Return**

네자리 년도(Year)값을 반환합니다.

**Remark**

- UTC(협정세계시)를 기준으로 년도(Year)값을 가져오려고 하면 getUTCFullYear() 메소드를 사용해야 합니다.

- getFullYear() 메소드는 년도를 네자리로 반환합니다.
   getFullYear() 메소드를 사용하면 2000년대 년도와 1900년대 년도의 혼동을 피할 수 있습니다.

**Example**



---

### getHours

> Script > Nexacro Objects > Date > Method > getHours

**Description**

Date 오브젝트에 저장된 값에서 시(Hour)값을 반환하는 메소드입니다.

**Syntax**

```javascript
Date.getHours()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.getHours());

**Return**

0 부터 23 까지의 시(Hour)값을 반환합니다.

**Remark**

- UTC(협정세계시)를 기준으로 시(Hour)값을 가져오려고 하면 getUTCHours () 메소드를 사용해야 합니다.

- getHours() 메소드는 자정을 기준으로 0 부터 23 까지의 정수로 시간값을 반환합니다.
   메소드의 반환값이 0 일때는 오전 1시 이전이거나 Date 오브젝트를 생성할 때 시간을 지정하지 않은 경우입니다.
   Date 오브젝트를 생성할 때 시간을 지정하지 않으면 시,분,초 값이 모두 0 으로 출력됩니다.

**Example**



---

### getMilliseconds

> Script > Nexacro Objects > Date > Method > getMilliseconds

**Description**

Date 오브젝트에 저장된 값에서 밀리초(MilliSecond)값을 반환하는 메소드입니다.

**Syntax**

```javascript
Date.getMilliseconds()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.getMilliseconds());

**Return**

0 부터 999 사이의 밀리초(MilliSecond)값을 반환합니다.

**Remark**

- UTC(협정세계시)를 기준으로 밀리초(MilliSecon)값을 가져오려고 하면 getUTCMilliseconds() 메소드를 사용해야 합니다.

**Example**



---

### getMinutes

> Script > Nexacro Objects > Date > Method > getMinutes

**Description**

Date 오브젝트에 저장된 값에서 분(Minute)값을 반환하는 메소드입니다.

**Syntax**

```javascript
Date.getMinutes()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.getMinutes());

**Return**

0 부터 59 사이의 분(Minute)값을 반환합니다.

**Remark**

- UTC(협정세계시)를 기준으로 분(Minute)값을 가져오려고 하면 getUTCMinutes() 메소드를 사용해야 합니다.

- getMinutes() 메소드는 정시를 기점으로 0 부터 59 까지의 정수로 분(Minute)값을 반환합니다.
   메소드의 반환값이 0 일때는 정각에서 1분이 지나지 않았거나 Date 오브젝트를 생성할 때 시간을 지정하지 않은 경우입니다.
   Date 오브젝트를 생성할 때 시간을 지정하지 않으면 시,분,초 값이 모두 0 으로 출력됩니다.

**Example**



---

### getMonth

> Script > Nexacro Objects > Date > Method > getMonth

**Description**

Date 오브젝트에 저장된 값에서 월(Month)값을 반환하는 메소드입니다.

**Syntax**

```javascript
Date.getMonth()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.getMonth());

**Return**

0 (1월) 부터 11 (12월) 사이의 월(Month) 코드값을 반환합니다.

**Remark**

- UTC(협정세계시)를 기준으로 월(Month)값을 가져오려고 하면 getUTCMonth() 메소드를 사용해야 합니다.

- getMonth() 메소드는 실제 사용하는 월(Month)값보다 1 작은 값을 반환합니다.
   예를 들어 1월의 경우 0 을 반환합니다.

**Example**



---

### getSeconds

> Script > Nexacro Objects > Date > Method > getSeconds

**Description**

Date 오브젝트에 저장된 값에서 초(Second)값을 반환하는 메소드입니다.

**Syntax**

```javascript
Date.getSeconds()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.getSeconds());

**Return**

0 부터 59 사이의 초(Second)값을 반환합니다.

**Remark**

- UTC(협정세계시)를 기준으로 초(Second)값을 가져오려고 하면 getUTCSeconds() 메소드를 사용해야 합니다.

- getSeconds() 메소드는 정시를 기점으로 0부터 59까지의 정수로 시간 값을 반환합니다.
   메소드의 반환값이 0 일때는 1초가 지나지 않았거나 Date 오브젝트를 생성할 때 시간을 지정하지 않은 경우입니다.
   Date 오브젝트를 생성할 때 시간을 지정하지 않으면 시,분,초 값이 모두 0 으로 출력됩니다.

**Example**



---

### getTime

> Script > Nexacro Objects > Date > Method > getTime

**Description**

Date 오브젝트에 저장된 값을 밀리초(MilliSecond)값으로 반환하는 메소드입니다.

**Syntax**

```javascript
Date.getTime()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.getTime());

**Return**

1970년 1월 1일 자정부터 Date 오브젝트에 저장된 값까지의 시간을 밀리초(MilliSecond)값으로 반환합니다.

**Remark**

- getTime() 메소드가 처리할 수 있는 날짜 범위는 1970년 1월 1일 자정을 전후로 약 285,616년입니다.
   음수는 해당 날짜가 1970년 이전임을 나타냅니다.

- 날짜와 시간을 여러 번 계산할 때는 밀리초 값에 해당하는 변수를 아래 예제와 같이 일, 시, 분으로 정의하는 것이 좋습니다.

**Example**



---

### getTimezoneOffset

> Script > Nexacro Objects > Date > Method > getTimezoneOffset

**Description**

Date 오브젝트에 저장된 값과 UTC(협정세계시) 사이의 시간차를 분(Minute)값으로 반환하는 메소드입니다.

**Syntax**

```javascript
Date.getTimezoneOffset()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.getTimezoneOffset());

**Return**

Date 오브젝트에 저장된 값과 UTC(협정세계시) 사이의 시간차를 분(Minute)값으로 반환합니다.

Date 오브젝트에 저장된 값이 태평양 일광 절약 시간(PDT)처럼 UTC보다 느리면 양수가 되고 한국이나 일본처럼 UTC보다 빠르면 음수가 됩니다.

**Example**



---

### getUTCDate

> Script > Nexacro Objects > Date > Method > getUTCDate

**Description**

UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 날짜(Day)를 반환하는 메소드입니다.

**Syntax**

```javascript
Date.getUTCDate()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.getUTCDate());

**Return**

1 부터 31 사이의 날짜 값을 반환합니다.

**Remark**

- Date 오브젝트에 저장된 값을 기준으로 날짜(Day)값을 가져오려고 하면 getDate() 메소드를 사용해야 합니다.

**Example**



---

### getUTCDay

> Script > Nexacro Objects > Date > Method > getUTCDay

**Description**

UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 요일를 반환하는 메소드입니다.

**Syntax**

```javascript
Date.getUTCDay()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.getUTCDay());

**Return**

0 (일요일) 부터 6 (토요일) 사이의 요일 코드값을 반환합니다.

**Remark**

- Date 오브젝트에 저장된 값을 기준으로 요일값을 가져오려고 하면 getDay() 메소드를 사용해야 합니다.

- getUTCDay() 메소드에서 반환되는 요일의 코드값은 아래와 같습니다.
   0 :일요일, 1 :월요일, 2 :화요일, 3 :수요일, 4 :목요일, 5 :금요일, 6 :토요일

**Example**



---

### getUTCFullYear

> Script > Nexacro Objects > Date > Method > getUTCFullYear

**Description**

UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 네자리 년도(Year)를 반환하는 메소드입니다.

**Syntax**

```javascript
Date.getUTCFullYear()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.getUTCFullYear());

**Return**

네자리 년도(Year)값을 반환합니다.

**Remark**

- Date 오브젝트에 저장된 값을 기준으로 년도(Year)값을 가져오려고 하면 getFullYear() 메소드를 사용해야 합니다.

- getUTCFullYear() 메소드는 년도를 네자리로 반환합니다.
   getUTCFullYear() 메소드를 사용하면 2000년대 년도와 1900년대 년도의 혼동을 피할 수 있습니다.

**Example**



---

### getUTCHours

> Script > Nexacro Objects > Date > Method > getUTCHours

**Description**

UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 시(Hour)값을 반환하는 메소드입니다.

**Syntax**

```javascript
Date.getUTCHours()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.getUTCHours());

**Return**

0 부터 23 까지의 시(Hour)값을 반환합니다.

**Remark**

- Date 오브젝트에 저장된 값을 기준으로 시(Hour)값을 가져오려고 하면 getHours() 메소드를 사용해야 합니다.

- getUTCHours() 메소드는 자정을 기준으로 0 부터 23 까지의 정수로 시간값을 반환합니다.
   메소드의 반환값이 0 일때는 오전 1시 이전이거나 Date 오브젝트를 생성할 때 시간을 지정하지 않은 경우입니다.
   Date 오브젝트를 생성할 때 시간을 지정하지 않으면 시,분,초 값이 모두 0 으로 출력됩니다.

**Example**



---

### getUTCMilliseconds

> Script > Nexacro Objects > Date > Method > getUTCMilliseconds

**Description**

UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 밀리초(MilliSecond)값을 반환하는 메소드입니다.

**Syntax**

```javascript
Date.getUTCMilliseconds()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.getUTCMilliseconds());

**Return**

0 부터 999 사이의 밀리초(MilliSecond)값을 반환합니다.

**Example**



---

### getUTCMinutes

> Script > Nexacro Objects > Date > Method > getUTCMinutes

**Description**

UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 분(Minute)값을 반환하는 메소드입니다.

**Syntax**

```javascript
Date.getUTCMinutes()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.getUTCMinutes());

**Return**

0 부터 59 사이의 분(Minute)값을 반환합니다.

**Remark**

- getUTCMinutes() 메소드는 정시를 기점으로 0 부터 59 까지의 정수로 분(Minute)값을 반환합니다.
   메소드의 반환값이 0 일때는 정각에서 1분이 지나지 않았거나 Date 오브젝트를 생성할 때 시간을 지정하지 않은 경우입니다.
   Date 오브젝트를 생성할 때 시간을 지정하지 않으면 시,분,초 값이 모두 0 으로 출력됩니다.

**Example**



---

### getUTCMonth

> Script > Nexacro Objects > Date > Method > getUTCMonth

**Description**

UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 월(Month)값을 반환하는 메소드입니다.

**Syntax**

```javascript
Date.getUTCMonth()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.getUTCMonth());

**Return**

0 (1월) 부터 11 (12월) 사이의 월(Month) 코드값을 반환합니다.

**Remark**

- Date 오브젝트에 저장된 값을 기준으로 월(Month)값을 가져오려고 하면 getMonth() 메소드를 사용해야 합니다.

- getUTCMonth() 메소드는 실제 사용하는 월(Month)값보다 1 이 작은 값을 반환합니다.
   예를 들어 1월의 경우 0 을 반환합니다.

**Example**



---

### getUTCSeconds

> Script > Nexacro Objects > Date > Method > getUTCSeconds

**Description**

UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 초(Second)값을 반환하는 메소드입니다.

**Syntax**

```javascript
Date.getUTCSeconds()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.getUTCSeconds());

**Return**

0 부터 59 사이의 초(Second)값을 반환합니다.

**Remark**

- getUTCSeconds 메소드는 정시를 기점으로 0부터 59까지의 정수로 시간 값을 반환합니다.
   메소드의 반환값이 0 일때는 1초가 지나지 않았거나 Date 오브젝트를 생성할 때 시간을 지정하지 않은 경우입니다.
   Date 오브젝트를 생성할 때 시간을 지정하지 않으면 시,분,초 값이 모두 0 으로 출력됩니다.

**Example**



---

### getYear

> Script > Nexacro Objects > Date > Method > getYear

**Description**

Date 오브젝트에 저장된 값에서 년도(Year)를 반환하는 메소드입니다.

**Syntax**

```javascript
Date.getYear()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.getYear());

**Return**

1900년에서 1999년까지의 날짜는 두자리 년도(Year)값을 반환합니다.
이 기간 외의 날짜는 네자리 년도(Year)값을 반환합니다.

예를 들어, 1996년은 96으로 반환하고 1825년이나 2025년은 네자리 그대로 반환됩니다.

**Remark**

- getYear() 메소드는 이전 버전과의 호환성을 유지하기 위해서만 사용합니다.
   년도값을 가져오려면 getFullYear() 메소드를 사용하시기 바랍니다.

**Example**



---

### parse

> Script > Nexacro Objects > Date > Method > parse

**Description**

날짜가 포함된 문자열을 분석해 1970년 1월 1일 자정부터 해당 날짜 사이의 시간을 밀리초로 반환하는 메소드입니다.

**Syntax**

```javascript
Date.parse(strDate)
```

**Parameters**

```
날짜 형식의 문자열을 설정합니다.

유효하지 않은 날짜형식의 문자열은 오류로 처리됩니다.
```

**Return**

1970년 1월 1일 자정과 지정된 날짜 사이의 시간을 밀리초(MilliSecond)로 반환합니다.

유효하지 않은 날짜형식으로 오류로 처리되면 NaN을 반환합니다.

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

### setDate

> Script > Nexacro Objects > Date > Method > setDate

**Description**

Date 오브젝트에 저장된 값에서 날짜(Day)를 변경하는 메소드입니다.

**Syntax**

```javascript
Date.setDate(nDate)
```

**Parameters**

```
변경시킬 날짜(Day)를 숫자로 설정합니다.

현재 달(Month)의 마지막 날짜(Day) 보다 큰 수를 설정하면 다음달로 전체 날짜값이 변경됩니다.
0 을 설정하면 이전 달의 마지막 날로 전체 날짜값이 변경됩니다.
음수를 설정하면 이전 달의 마지막 날부터 날짜(Day)를 거꾸로 계산하여 전체 날짜값이 변경됩니다.
```

**Return**

1970년 1월 1일 자정부터 Date 오브젝트에 변경된 날짜까지의 시간을 밀리초(MilliSecond)값으로 반환합니다.

**Remark**

- UTC(협정세계시)를 기준으로 날짜(Day)을 변경하려면 setUTCDate() 메소드를 사용해야 합니다.

- nDate에 지정된 날짜가 해당 월에 적용할 수 있는 날짜보다 크면 다음월 또는 다음년도로 처리됩니다.
   예를 들어 "January 5, 1996"에서 setDate(32)를 호출하는 경우에는 날짜가 "February 1, 1996"로 변경됩니다.
   반대로 nDate의 값이 음수인 경우에는 이전월 또는 이전년도로 처리됩니다.
   예를 들어 "January 5, 1996"에서 setDate(-32)를 호출하는 경우에는 날짜가 "November 29, 1995"로 변경됩니다.

**Example**



---

### setFullYear

> Script > Nexacro Objects > Date > Method > setFullYear

**Description**

Date 오브젝트에 저장된 값에서 년도(Year) 또는 전체 날짜를 변경하는 메소드입니다.

**Syntax**

```javascript
Date.setFullYear(nYear[, nMonth[, nDate]])
```

**Parameters**

```
변경시킬 년도(Year)값을 설정합니다.
```

**Return**

1970년 1월 1일 자정부터 Date 오브젝트에 저장된 값까지의 시간을 밀리초(MilliSecond)값으로 반환합니다.

**Remark**

- UTC(협정세계시)를 기준으로 년도(Year)을 변경하려면 setUTCFullYear() 메소드를 사용해야 합니다.

- 인수값이 범위를 초과하거나 음수이면 이에 따라 저장된 다른 값들이 수정될 수 있습니다.

**Example**



---

### setHours

> Script > Nexacro Objects > Date > Method > setHours

**Description**

Date 오브젝트에 저장된 값에서 시(Hour) 또는 전체 시간를 변경하는 메소드입니다.

**Syntax**

```javascript
Date.setHours(nHours[, nMinutes[, nSeconds[, nMillisecond]]])
```

**Parameters**

```
변경시킬 시(Hour)값을 설정합니다.
```

**Return**

1970년 1월 1일 자정부터 Date 오브젝트에 저장된 값까지의 시간을 밀리초(MilliSecond)값으로 반환합니다.

**Remark**

- UTC(협정세계시)를 기준으로 시(Hour)를 변경하려면 setUTCHours() 메소드를 사용해야 합니다.

- 인수값이 범위를 초과하거나 음수이면 이에 따라 저장된 다른 값들이 수정될 수 있습니다.
   예를 들어 저장된 날짜가 "Jan 5, 1996 00:00:00"이고 setHours(30)을 실행하면 "Jan 6, 1996 06:00:00" 로 변경됩니다.
   음수값도 같은 방법으로 처리됩니다.

**Example**



---

### setMilliseconds

> Script > Nexacro Objects > Date > Method > setMilliseconds

**Description**

Date 오브젝트에 저장된 값에서 밀리초(MilliSecond)를 변경하는 메소드입니다.

**Syntax**

```javascript
Date.setMilliseconds(nMilliSecond)
```

**Parameters**

```
변경시킬 밀리초(MilliSecond)값을 설정합니다.
```

**Return**

1970년 1월 1일 자정부터 Date 오브젝트에 저장된 값까지의 시간을 밀리초(MilliSecond)값으로 반환합니다.

**Remark**

- UTC(협정세계시)를 기준으로 밀리초(MilliSecond)를 변경하려면 setUTCMilliseconds() 메소드를 사용해야 합니다.

- 인수값이 999보다 크거나 음수이면 이에 따라 저장된 다른 값들이 수정됩니다.

**Example**



---

### setMinutes

> Script > Nexacro Objects > Date > Method > setMinutes

**Description**

Date 오브젝트에 저장된 값에서 분(Minute)을 변경하는 메소드입니다.

**Syntax**

```javascript
Date.setMinutes(nMinutes[, nSeconds[, nMillisecond]])
```

**Parameters**

```
변경시킬 분(Minute)값을 설정합니다.
```

**Return**

1970년 1월 1일 자정부터 Date 오브젝트에 저장된 값까지의 시간을 밀리초(MilliSecond)값으로 반환합니다.

**Remark**

- UTC(협정세계시)를 기준으로 분(Minute)을 변경하려면 setUTCMinutes() 메소드를 사용해야 합니다.

- 인수값이 범위를 초과하거나 음수이면 이에 따라 저장된 다른 값들이 수정됩니다.
   예를 들어 저장된 날짜가 "Jan 5, 1996 00:00:00"이고 setMinutes(90)가 호출되면 날짜는 "Jan 5, 1996 01:30:00"로 바뀝니다.
   음수값도 같은 방법으로 처리됩니다.

**Example**



---

### setMonth

> Script > Nexacro Objects > Date > Method > setMonth

**Description**

Date 오브젝트에 저장된 값에서 월(Month)을 변경하는 메소드입니다.

**Syntax**

```javascript
Date.setMonth(nMonth[, nDate])
```

**Parameters**

```
변경시킬 0 (1월) 부터 11 (12월) 사이의 월(Month) 코드값을 설정합니다.
```

**Return**

1970년 1월 1일 자정부터 Date 오브젝트에 저장된 값까지의 시간을 밀리초(MilliSecond)값으로 반환합니다.

**Remark**

- UTC(협정세계시)를 기준으로 월(Month)을 변경하려면 setUTCMonth() 메소드를 사용해야 합니다.

- nMonth 의 값이 11보다 크거나(1월이 0) 음수이면 이에 따라 저장된 다른 값들도 변경됩니다.
   예를 들어, 저장된 날짜가 "Jan 5, 1996"이고 setMonth(14) 가 실행되면 날짜는 "Mar 5, 1997" 로 변경됩니다.

**Example**



---

### setSeconds

> Script > Nexacro Objects > Date > Method > setSeconds

**Description**

Date 오브젝트에 저장된 값에서 초(Second)를 변경하는 메소드입니다.

**Syntax**

```javascript
Date.setSeconds(nSeconds[, nMillisecond])
```

**Parameters**

```
변경시킬 초(Second)값을 설정합니다.
```

**Return**

1970년 1월 1일 자정부터 Date 오브젝트에 저장된 값까지의 시간을 밀리초(MilliSecond)값으로 반환합니다.

**Remark**

- UTC(협정세계시)를 기준으로 초(Second)를 변경하려면 setUTCSeconds() 메소드를 사용해야 합니다.

- 인수의 값이 범위를 초과하거나 음수이면 이에 따라 저장된 다른 값들도 변경됩니다.
   예를 들어, 저장된 날짜가 "Jan 5, 1996 00:00:00" 이고 setSeconds(150) 가 실행되면 날짜는 "Jan 5, 1996 00:02:30" 로 변경됩니다.

**Example**



---

### setTime

> Script > Nexacro Objects > Date > Method > setTime

**Description**

Date 오브젝트에 날짜와 시간을 밀리초(MilliSecond)값으로 설정하는 메소드입니다.

**Syntax**

```javascript
Date.setTime(nMs)
```

**Parameters**

```
1970년 1월 1일 자정부터 설정할 날짜까지의 시간을 밀리초(MilliSecond)값으로 설정합니다.
```

**Return**

1970년 1월 1일 자정부터 Date 오브젝트에 저장된 값까지의 시간을 밀리초(MilliSecond)값으로 반환합니다.

**Remark**

- setTime() 메소드가 처리할 수 있는 날짜 범위는 1970년 1월 1일 자정을 전후로 약 285,616년입니다.
   음수는 해당 날짜가 1970년 이전임을 나타냅니다.

**Example**



---

### setUTCDate

> Script > Nexacro Objects > Date > Method > setUTCDate

**Description**

UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 날짜(Day)를 변경하는 메소드입니다.

**Syntax**

```javascript
Date.setUTCDate(nDate)
```

**Parameters**

```
변경시킬 날짜(Day)를 설정합니다.
```

**Return**

1970년 1월 1일 자정부터 Date 오브젝트에 저장된 값까지의 시간을 밀리초(MilliSecond)값으로 반환합니다.

**Remark**

- 시스템의 로케일을 기준으로 날짜(Day)을 변경하려면 setDate() 메소드를 사용해야 합니다.

- nDate에 지정된 날짜가 해당 월에 적용할 수 있는 날짜보다 크면 다음월 또는 다음년도로 처리됩니다.
   예를 들어 "January 5, 1996"에서 setUTCDate(32)를 호출하는 경우에는 날짜가 "February 1, 1996"로 변경됩니다.
   반대로 nDate의 값이 음수인 경우에는 이전월 또는 이전년도로 처리됩니다.
   예를 들어 "January 5, 1996"에서 setUTCDate(-32)를 호출하는 경우에는 날짜가 "November 29, 1995"로 변경됩니다.

**Example**



---

### setUTCFullYear

> Script > Nexacro Objects > Date > Method > setUTCFullYear

**Description**

UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 년도(Year) 또는 전체 날짜를 변경하는 메소드입니다.

**Syntax**

```javascript
Date.setUTCFullYear(nYears[, nMonths[, nDate]])
```

**Parameters**

```
변경시킬 년도(Year)값을 설정합니다.
```

**Return**

1970년 1월 1일 자정부터 Date 오브젝트에 저장된 값까지의 시간을 밀리초(MilliSecond)값으로 반환합니다.

**Remark**

- 시스템의 로케일을 기준으로 날짜(Day)을 변경하려면 setFullYear() 메소드를 사용해야 합니다.

- 인수값이 범위를 초과하거나 음수이면 이에 따라 저장된 다른 값들이 수정될 수 있습니다.

**Example**



---

### setUTCHours

> Script > Nexacro Objects > Date > Method > setUTCHours

**Description**

UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 시(Hour) 또는 전체 시간를 변경하는 메소드입니다.

**Syntax**

```javascript
Date.setUTCHours(nHours[, nMinutes[, nSeconds[, nMillisecond]]])
```

**Parameters**

```
변경시킬 시(Hour)값을 설정합니다.
```

**Return**

1970년 1월 1일 자정부터 Date 오브젝트에 저장된 값까지의 시간을 밀리초(MilliSecond)값으로 반환합니다.

**Remark**

- 시스템의 로케일을 기준으로 시(Hour)를 변경하려면 setHours() 메소드를 사용해야 합니다.

- 인수값이 범위를 초과하거나 음수이면 이에 따라 저장된 다른 값들이 수정될 수 있습니다.
   예를 들어 저장된 날짜가 "Jan 5, 1996 00:00:00"이고 setUTCHours(30)을 실행하면 "Jan 6, 1996 06:00:00" 로 변경됩니다.
   음수값도 같은 방법으로 처리됩니다.

**Example**



---

### setUTCMilliseconds

> Script > Nexacro Objects > Date > Method > setUTCMilliseconds

**Description**

UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 밀리초(MilliSecond)를 변경하는 메소드입니다.

**Syntax**

```javascript
Date.setUTCMilliseconds(nMs)
```

**Parameters**

```
변경시킬 밀리초(MilliSecond)값을 설정합니다.
```

**Return**

1970년 1월 1일 자정부터 Date 오브젝트에 저장된 값까지의 시간을 밀리초(MilliSecond)값으로 반환합니다.

**Remark**

- 시스템의 로케일을 기준으로 밀리초(MilliSecond)를 변경하려면 setMilliseconds() 메소드를 사용해야 합니다.

- 인수값이 999보다 크거나 음수이면 이에 따라 저장된 다른 값들이 수정됩니다.

**Example**



---

### setUTCMinutes

> Script > Nexacro Objects > Date > Method > setUTCMinutes

**Description**

UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 분(Minute)을 변경하는 메소드입니다.

**Syntax**

```javascript
Date.setUTCMinutes(nMinutes[, nSeconds[, nMillisecond]])
```

**Parameters**

```
변경시킬 분(Minute)값을 설정합니다.
```

**Return**

1970년 1월 1일 자정부터 Date 오브젝트에 저장된 값까지의 시간을 밀리초(MilliSecond)값으로 반환합니다.

**Remark**

- 시스템의 로케일을 기준으로 분(Minute)을 변경하려면 setMinutes() 메소드를 사용해야 합니다.

- 인수값이 범위를 초과하거나 음수이면 이에 따라 저장된 다른 값들이 수정됩니다.
   예를 들어 저장된 날짜가 "Jan 5, 1996 00:00:00" 이고 setUTCMinutes(70)가 호출되면 날짜는 "Jan 5, 1996 01:10:00" 로 바뀝니다.
   음수값도 같은 방법으로 처리됩니다.

**Example**



---

### setUTCMonth

> Script > Nexacro Objects > Date > Method > setUTCMonth

**Description**

UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 월(Month)을 변경하는 메소드입니다.

**Syntax**

```javascript
Date.setUTCMonth(nMonth[, nDate])
```

**Parameters**

```
변경시킬 0 (1월) 부터 11 (12월) 사이의 월(Month) 코드값을 설정합니다.
```

**Return**

1970년 1월 1일 자정부터 Date 오브젝트에 저장된 값까지의 시간을 밀리초(MilliSecond)값으로 반환합니다.

**Remark**

- 시스템의 로케일을 기준으로 월(Month)을 변경하려면 setMonth() 메소드를 사용해야 합니다.

- nMonth 의 값이 11보다 크거나(1월이 0) 음수이면 이에 따라 저장된 다른 값들도 변경됩니다.
   예를 들어, 저장된 날짜가 "Jan 5, 1996"이고 setUTCMonth(14) 가 실행되면 날짜는 "Mar 5, 1997" 로 변경됩니다.

**Example**



---

### setUTCSeconds

> Script > Nexacro Objects > Date > Method > setUTCSeconds

**Description**

UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 값에서 초(Second)를 변경하는 메소드입니다.

**Syntax**

```javascript
Date.setUTCSeconds(nSeconds[, nMillisecond])
```

**Parameters**

```
변경시킬 초(Second)값을 설정합니다.
```

**Return**

1970년 1월 1일 자정부터 Date 오브젝트에 저장된 값까지의 시간을 밀리초(MilliSecond)값으로 반환합니다.

**Remark**

- 시스템의 로케일을 기준으로 초(Second)를 변경하려면 setSeconds() 메소드를 사용해야 합니다.

- 인수의 값이 범위를 초과하거나 음수이면 이에 따라 저장된 다른 값들도 변경됩니다.
   예를 들어, 저장된 날짜가 "Jan 5, 1996 00:00:00" 이고 setUTCSeconds(150) 가 실행되면 날짜는 "Jan 5, 1996 00:02:30" 로 변경됩니다.

**Example**



---

### setYear

> Script > Nexacro Objects > Date > Method > setYear

**Description**

Date 오브젝트에 저장된 값에서 년도(Year)를 변경하는 메소드입니다.

**Syntax**

```javascript
Date.setYear(nYears)
```

**Parameters**

```
변경시킬 년도(Year)값을 설정합니다.
```

**Return**

1970년 1월 1일 자정부터 Date 오브젝트에 저장된 값까지의 시간을 밀리초(MilliSecond)값으로 반환합니다.

**Remark**

- setYear() 메소드는 이전 버전과의 호환성을 유지하기 위해서만 사용합니다.
   년도값을 변경하려면 setFullYear() 메소드를 사용하시기 바랍니다.

- 1900년에서 1999년까지의 년도를 설정하는 경우에는 두 자리 정수를 지정합니다.
   예를 들어 1997년을 설정한다면 setYear(97)를 호출합니다.
   그 외의 날짜는 네 자리 정수를 지정합니다.

- 0년부터 99년 사이의 년도를 설정하려면 setFullYear() 메소드를 사용하여야 합니다.

**Example**



---

### toDateString

> Script > Nexacro Objects > Date > Method > toDateString

**Description**

Date 오브젝트에 저장된 날짜를 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
Date.toDateString()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.toDateString());

**Return**

문자열로 변환된 날짜를 반환합니다.

**Remark**

- Date 오브젝트에 저장된 시간을 문자열로 변환하려면 toTimeString() 메소드를 사용하여야 합니다.

**Example**



---

### toGMTString

> Script > Nexacro Objects > Date > Method > toGMTString

**Description**

GMT(그리니치 표준시)를 기준으로 Date 오브젝트에 저장된 날짜와 시간을 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
Date.toGMTString()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.toGMTString());

**Return**

문자열로 변환된 날짜와 시간을 반환합니다.

**Remark**

- toGMTString() 메소드는 이전 버전과의 호환성을 유지하기 위해서만 사용합니다.
   UTC(협정세계시)를 사용하는 toUTCString() 메소드를 사용하시기 바랍니다.

- toGMTString() 메소드는 GMT 규칙을 사용하여 "Fri 05 Jan 1996 00:00:00 GMT"와 같이 서식이 적용된 값을 반환합니다.

**Example**



---

### toLocaleDateString

> Script > Nexacro Objects > Date > Method > toLocaleDateString

**Description**

Date 오브젝트에 저장된 날짜를 특정 로케일 형식의 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
Date.toLocaleDateString( [strLocale] )
```

**Parameters**

```
ISO 639-1 에서 정의하고 있는 2-알파벳 언어코드와 ISO 3166-1 에서 정의하고 있는 2-알파벳 국가코드를 조합하여 "언어[_국가]" 형식의 문자열로 설정합니다.

값 생략 시 Environment 의 locale 속성값이 적용됩니다.
Environment 의 locale 속성값도 설정하지 않았을 경우 시스템의 로케일 설정값이 적용됩니다.
```

**Return**

특정 로케일 형식에 맞게 변환된 날짜를 문자열로 반환합니다.

**Remark**

- 반환값은 시스템 설정에 따라 달라질 수 있으므로 표시용도로만 사용하고 계산식에서는 사용하지 않아야 합니다.
 
- 지원 가능한 로케일은 운영체제에 따라 달라질 수 있습니다.

- 로케일 코드는 "Appendix > Locale Code List" 항목을 참고하세요.

**Example**



---

### toLocaleString

> Script > Nexacro Objects > Date > Method > toLocaleString

**Description**

Date 오브젝트에 저장된 날짜와 시간을 특정 로케일 형식의 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
Date.toLocaleString( [strLocale] )
```

**Parameters**

```
ISO 639-1 에서 정의하고 있는 2-알파벳 언어코드와 ISO 3166-1 에서 정의하고 있는 2-알파벳 국가코드를 조합하여 "언어[_국가]" 형식의 문자열로 설정합니다.

값 생략 시 Environment 의 locale 속성값이 적용됩니다.
Environment 의 locale 속성값도 설정하지 않았을 경우 시스템의 로케일 설정값이 적용됩니다.
```

**Return**

특정 로케일 형식에 맞게 변환된 날짜와 시간을 문자열로 반환합니다.

**Remark**

- 반환값은 시스템 설정에 따라 달라질 수 있으므로 표시용도로만 사용하고 계산식에서는 사용하지 않아야 합니다.
 
- 지원 가능한 로케일은 운영체제에 따라 달라질 수 있습니다.

- 로케일 코드는 "Appendix > Locale Code List" 항목을 참고하세요.

**Example**



---

### toLocaleTimeString

> Script > Nexacro Objects > Date > Method > toLocaleTimeString

**Description**

Date 오브젝트에 저장된 시간을 특정 로케일 형식의 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
Date.toLocaleTimeString( [strLocale] )
```

**Parameters**

```
ISO 639-1 에서 정의하고 있는 2-알파벳 언어코드와 ISO 3166-1 에서 정의하고 있는 2-알파벳 국가코드를 조합하여 "언어[_국가]" 형식의 문자열로 설정합니다.

값 생략 시 Environment 의 locale 속성값이 적용됩니다.
Environment 의 locale 속성값도 설정하지 않았을 경우 시스템의 로케일 설정값이 적용됩니다.
```

**Return**

특정 로케일 형식에 맞게 변환된 시간을 문자열로 반환합니다.

**Remark**

- 반환값은 시스템 설정에 따라 달라질 수 있으므로 표시용도로만 사용하고 계산식에서는 사용하지 않아야 합니다.
 
- 지원 가능한 로케일은 운영체제에 따라 달라질 수 있습니다.

- 로케일 코드는 "Appendix > Locale Code List" 항목을 참고하세요.

**Example**



---

### toString

> Script > Nexacro Objects > Date > Method > toString

**Description**

Date 오브젝트에 저장된 날짜와 시간값을 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
Date.toString()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.toString());

**Return**

Date 오브젝트에 저장된 값에서 날짜와 시간을 문자열로 반환합니다.

Date 오브젝트에 날짜값만 있을 경우 8 자리 날짜형식으로 반환합니다.
Date 오브젝트에 시간값만 있을 경우 9 자리 시간형식으로 반환합니다.
Date 오브젝트에 날짜와 시간값이 모두 있을 경우 17 자리 날짜시간형식으로 반환합니다.

**Remark**

- valueOf() 메소드와 동일한 메소드입니다.

**Example**



---

### toTimeString

> Script > Nexacro Objects > Date > Method > toTimeString

**Description**

Date 오브젝트에 저장된 시간을 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
Date.toTimeString()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.toTimeString());

**Return**

문자열로 변환된 시간을 반환합니다.

**Remark**

- Date 오브젝트에 저장된 날짜를 문자열로 변환하려면 toDateString() 메소드를 사용하여야 합니다.

**Example**



---

### toUTCString

> Script > Nexacro Objects > Date > Method > toUTCString

**Description**

UTC(협정세계시)를 기준으로 Date 오브젝트에 저장된 날짜와 시간을 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
Date.toUTCString()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.toUTCString());

**Return**

문자열로 변환된 날짜와 시간을 반환합니다.

**Remark**

- toUTCString() 메소드는 UTC(협정세계시) 규칙을 사용하여 서식이 적용된 값을 반환합니다.

- OS와 브라우저에 따라 다른 형식으로 반환 될 수 있습니다.

**Example**



---

### UTC

> Script > Nexacro Objects > Date > Method > UTC

**Description**

UTC(협정세계시) 또는 GMT(그리니치 표준시)를 기준으로 1970년 1월 1일 자정부터 인수로 전달된 날짜까지의 시간을 밀리초(MilliSecond)값으로 반환하는 메소드입니다.

**Syntax**

```javascript
Date.UTC(nYear, nMonth, nDay[, nHours[, nMinutes[, nSeconds[,nMillisecond]]]])
```

**Parameters**

```
네자리 년도(Year)값을 설정합니다.

0부터 99까지의 값을 입력하는 경우 1900을 더한 값으로 처리됩니다.
```

**Return**

1970년 1월 1일 자정부터 Date 오브젝트에 저장된 값까지의 시간을 밀리초(MilliSecond)값으로 반환합니다.

**Remark**

- 인수값이 범위를 초과하거나 음수이면 저장된 다른 값들이 수정될 수 있습니다.
   예를 들어 nSeconds 값을 150으로 지정하게 되면 2분 30초로 처리합니다.

- 반환되는 값은 setTime() 메소드를 사용하여 설정할 수 있습니다.

   var objDate = new nexacro.Date();   
   var nMs = objDate.UTC(1999,0,1);
   var dDate = new nexacro.Date();
   dDate.setTime(nMs);
   trace(dDate.toString());     //  19990101090000000

- 날짜를 받아들이는 UTC() 메서드와 Date 개체 생성자 사이의 차이점은 UTC() 메서드는 UTC로 간주하고 Date 개체 생성자는 로컬 시간으로 간주한다는 것입니다. 

   var dDate = new nexacro.Date( 1970, 0, 1 );
   trace(dDate.getTime()); //  -32400000
   var objDate = new nexacro.Date();
   var nMs = objDate.UTC(1970, 0, 1);
   dDate = new nexacro.Date();
   dDate.setTime(nMs);
   trace(dDate.getTime());     // 0


---

### valueOf

> Script > Nexacro Objects > Date > Method > valueOf

**Description**

Date 오브젝트에 저장된 날짜와 시간값을 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
Date.valueOf()
```

**Parameters**

var objDate = new nexacro.Date();

trace(objDate.valueOf());

**Return**

Date 오브젝트에 저장된 값에서 날짜와 시간을 문자열로 반환합니다.

Date 오브젝트에 날짜값만 있을 경우 8 자리 날짜형식으로 반환합니다.
Date 오브젝트에 시간값만 있을 경우 9 자리 시간형식으로 반환합니다.
Date 오브젝트에 날짜와 시간값이 모두 있을 경우 17 자리 날짜시간형식으로 반환합니다.

**Remark**

- toString() 메소드와 동일한 메소드입니다.

**Example**



---

## Script > Nexacro Objects > Decimal

### Decimal

> Script > Nexacro Objects > Decimal

**Description**

decimal 자료형을 처리하기 위해 제공하는 오브젝트입니다.

**Remark**

- Decimal 오브젝트는 연산을 위하여 "+","-","*","/" 의 산술연산자를 사용하지 않고 제공된 메소드를 사용하여야 합니다.

- Dataset 의 Column 타입 중 "BIGDECIMAL" 타입을 처리하기 위해 제공하는 오브젝트입니다.

- toString() 메서드 실행 시 십진수 기준으로 정수부와 소수부를 합쳐 최대 31자리까지 표현할 수 있습니다.
  
  정수부는 최대 24자리, 소수부는 최대 15자리까지 표현할 수 있습니다.
  예를 들어, 아래와 같이 최대 31자리 조합으로 사용할 수 있습니다.
  ex) 정수부(24자리)+소수부(7자리), 정수부(16자리)+소수부(15자리)
  
  정수부 입력 범위(최대 24자리)를 초과하는 경우에는 지수 표기법으로 표시됩니다.
  ex) nexacro.Decimal("12345678901234567890123456789").toString() // "1.234567890123457e+28"

  소수부 입력 범위(최대 15자리)를 초과하는 경우에는 반올림되어 표시됩니다.
  ex) nexacro.Decimal("1234567890.1234567890123456789").toString()  // "1234567890.123456789012346"

  최대 표현할 수 있는 자릿수(31자리)에서 정수부 자릿수를 먼저 체크하고 나머지 자릿수에서 소수부를 처리합니다.
  예를 들어 정수부(20자리), 소수부(15자리)로 값이 입력된 경우 정수부(20자리), 소수부(11자리)로 처리됩니다.
  ex) nexacro.Decimal("12345678901234567890.123456789012345").toString(); // 12345678901234567890.12345678901

**Method**

| Name | Description |
| --- | --- |
| abs | Decimal 오브젝트에 저장된 값을 절대값으로 변경하는 메소드입니다. |
| addDecimal | Decimal 오브젝트에 저장된 값에 Decimal 형 값을 더하는 메소드입니다. |
| addDouble | Decimal 오브젝트에 저장된 값에 숫자값을 더하는 메소드입니다. |
| ceil | Decimal 오브젝트에 저장된 값을 소수점 기준으로 올림한 값으로 변경하는 메소드입니다. |
| divDecimal | Decimal 오브젝트에 저장된 값을 Decimal 형 값으로 나누는 메소드입니다. |
| divDouble | Decimal 오브젝트에 저장된 값을 숫자값으로 나누는 메소드입니다. |
| floor | Decimal 오브젝트에 저장된 값을 소수점 기준으로 내림한 값으로 변경하는 메소드입니다. |
| isEqual | Decimal 오브젝트에 저장된 값과 인수로 전달된 Decimal 오브젝트의 값이 일치하는 지 비교하는 메소드입니다. |
| isInfinity | Decimal 오브젝트에 저장된 값이 Infinity 값인지 확인하는 메소드입니다. |
| isNaN | Decimal 오브젝트에 저장된 값이 NaN 값인지 확인하는 메소드입니다. |
| isNaNOrInf | Decimal 오브젝트에 저장된 값이 Infinity 또는 NaN 값인지 확인하는 메소드입니다. |
| isNegative | Decimal 오브젝트에 저장된 값이 음수값인지 확인하는 메소드입니다. |
| isZero | Decimal 오브젝트의 값의 Zero 여부를 반환하는 메소드입니다. |
| modDecimal | Decimal 오브젝트에 저장된 값을 Decimal 형 값으로 나눈 나머지값으로 변경하는 메소드입니다. |
| modDouble | Decimal 오브젝트에 저장된 값을 숫자값으로 나눈 나머지값으로 변경하는 메소드입니다. |
| mulDecimal | Decimal 오브젝트에 저장된 값에 Decimal 형 값을 곱하는 메소드입니다. |
| mulDouble | Decimal 오브젝트에 저장된 값에 숫자값을 곱하는 메소드입니다. |
| round | Decimal 오브젝트에 저장된 값을 소수점 기준으로 반올림한 값으로 변경하는 메소드입니다. |
| setDecimal | Decimal 오브젝트에 인수로 전달된 Decimal 오브젝트의 값을 저장하는 메소드입니다. |
| setDouble | Decimal 오브젝트에 인수로 전달된 숫자값을 저장하는 메소드입니다. |
| setString | Decimal 오브젝트에 숫자로 된 문자열을 저장하는 메소드입니다. |
| subDecimal | Decimal 오브젝트에 저장된 값에서 Decimal 형 값을 빼는 메소드입니다. |
| subDouble | Decimal 오브젝트에 저장된 값에서 숫자값을 빼는 메소드입니다. |
| toString | Decimal 오브젝트에 저장된 값을 문자열로 반환하는 메소드입니다. |
| trunc | Decimal 오브젝트에 저장된 값을 소수점 기준으로 버림한 값으로 변경하는 메소드입니다. |


---

### 메서드 (Methods)

### abs

> Script > Nexacro Objects > Decimal > Method > abs

**Description**

Decimal 오브젝트에 저장된 값을 절대값으로 변경하는 메소드입니다.

**Syntax**

```javascript
Decimal.abs()
```

**Parameters**

var objDec1 = new nexacro.Decimal( -20 );

trace(objDec1.abs());
trace(objDec1);

**Return**

변경된 절대값을 반환합니다.

**Remark**

- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.


---

### addDecimal

> Script > Nexacro Objects > Decimal > Method > addDecimal

**Description**

Decimal 오브젝트에 저장된 값에 Decimal 형 값을 더하는 메소드입니다.

**Syntax**

```javascript
Decimal.addDecimal( objDecimal )
```

**Parameters**

```
Decimal 오브젝트에 더할 Decimal 오브젝트를 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.


---

### addDouble

> Script > Nexacro Objects > Decimal > Method > addDouble

**Description**

Decimal 오브젝트에 저장된 값에 숫자값을 더하는 메소드입니다.

**Syntax**

```javascript
Decimal.addDouble( nValue )
```

**Parameters**

```
Decimal 오브젝트에 더할 숫자값을 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.


---

### ceil

> Script > Nexacro Objects > Decimal > Method > ceil

**Description**

Decimal 오브젝트에 저장된 값을 소수점 기준으로 올림한 값으로 변경하는 메소드입니다.

**Syntax**

```javascript
Decimal.ceil()
```

**Parameters**

var objDec1 = new nexacro.Decimal( 30.555 );

trace(objDec1.ceil());
trace(objDec1);

**Return**

소수점을 기준으로 올림한 값을 반환합니다.

**Remark**

- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.


---

### divDecimal

> Script > Nexacro Objects > Decimal > Method > divDecimal

**Description**

Decimal 오브젝트에 저장된 값을 Decimal 형 값으로 나누는 메소드입니다.

**Syntax**

```javascript
Decimal.divDecimal( objDecimal )
```

**Parameters**

```
Decimal 오브젝트를 나눌 Decimal 오브젝트를 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.


---

### divDouble

> Script > Nexacro Objects > Decimal > Method > divDouble

**Description**

Decimal 오브젝트에 저장된 값을 숫자값으로 나누는 메소드입니다.

**Syntax**

```javascript
Decimal.divDouble( nValue )
```

**Parameters**

```
Decimal 오브젝트를 나눌 숫자값을 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.


---

### floor

> Script > Nexacro Objects > Decimal > Method > floor

**Description**

Decimal 오브젝트에 저장된 값을 소수점 기준으로 내림한 값으로 변경하는 메소드입니다.

**Syntax**

```javascript
Decimal.floor()
```

**Parameters**

var objDec1 = new nexacro.Decimal( 30.555 );

trace(objDec1.floor());
trace(objDec1);

**Return**

소수점을 기준으로 내림한 값을 반환합니다.

**Remark**

- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.


---

### isEqual

> Script > Nexacro Objects > Decimal > Method > isEqual

**Description**

Decimal 오브젝트에 저장된 값과 인수로 전달된 Decimal 오브젝트의 값이 일치하는 지 비교하는 메소드입니다.

**Syntax**

```javascript
Decimal.isEqual( objDecimal )
```

**Parameters**

```
값을 비교할 Decimal 오브젝트를 설정합니다.
```

**Return**

두 오브젝트의 값이 일치하면 "true" 를 반환합니다.

두 오브젝트의 값이 다르면 "false" 를 반환합니다.


---

### isInfinity

> Script > Nexacro Objects > Decimal > Method > isInfinity

**Description**

Decimal 오브젝트에 저장된 값이 Infinity 값인지 확인하는 메소드입니다.

**Syntax**

```javascript
Decimal.isInfinity()
```

**Parameters**

var objDec1 = new nexacro.Decimal( 1.55 );
var objDec2 = new nexacro.Decimal( Number.MAX_VALUE+1 );

trace(objDec1.isInfinity());
trace(objDec2.isInfinity());

**Return**

Decimal 오브젝트의 값이 Infinity 값이면 "true" 를 반환합니다.

Decimal 오브젝트의 값이 Infinity 값이 아니면 "false" 를 반환합니다.


---

### isNaN

> Script > Nexacro Objects > Decimal > Method > isNaN

**Description**

Decimal 오브젝트에 저장된 값이 NaN 값인지 확인하는 메소드입니다.

**Syntax**

```javascript
Decimal.isNaN()
```

**Parameters**

var objDec1 = new nexacro.Decimal( 30 );
var objDec2 = new nexacro.Decimal( ' ' );

trace(objDec1.isNaN());
trace(objDec2.isNaN());

**Return**

Decimal 오브젝트의 값이 NaN 값이면 "true" 를 반환합니다.

Decimal 오브젝트의 값이 NaN 값이 아니면 "false" 를 반환합니다.


---

### isNaNOrInf

> Script > Nexacro Objects > Decimal > Method > isNaNOrInf

**Description**

Decimal 오브젝트에 저장된 값이 Infinity 또는 NaN 값인지 확인하는 메소드입니다.

**Syntax**

```javascript
Decimal.isNaNOrInf()
```

**Parameters**

var objDec1 = new nexacro.Decimal( 30 );
var objDec2 = new nexacro.Decimal( ' ' );
var objDec3 = new nexacro.Decimal( Number.MAX_VALUE+1 );

trace(objDec1.isNaNOrInf());
trace(objDec2.isNaNOrInf());
trace(objDec3.isNaNOrInf());

**Return**

Decimal 오브젝트의 값이 Infinity 또는 NaN 값이면 "true" 를 반환합니다.

Decimal 오브젝트의 값이 Infinity, NaN 값이 모두 아니면 "false" 를 반환합니다.


---

### isNegative

> Script > Nexacro Objects > Decimal > Method > isNegative

**Description**

Decimal 오브젝트에 저장된 값이 음수값인지 확인하는 메소드입니다.

**Syntax**

```javascript
Decimal.isNegative()
```

**Parameters**

var objDec1 = new nexacro.Decimal( 0.01 );
var objDec2 = new nexacro.Decimal( -30 );

trace(objDec1.isNegative());
trace(objDec2.isNegative());

**Return**

Decimal 오브젝트의 값이 음수값이면 "true" 를 반환합니다.

Decimal 오브젝트의 값이 음수값이 아니면 "false" 를 반환합니다.


---

### isZero

> Script > Nexacro Objects > Decimal > Method > isZero

**Description**

Decimal 오브젝트의 값의 Zero 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
Decimal.isZero()
```

**Parameters**

var objDec1 = new nexacro.Decimal( 30 );
var objDec2 = new nexacro.Decimal( 0.0 );

trace(objDec1.isZero());
trace(objDec2.isZero());

**Return**

Decimal 오브젝트의 값이 0 값이면 "true" 를 반환합니다.

Decimal 오브젝트의 값이 0 값이 아니면 "false" 를 반환합니다.


---

### modDecimal

> Script > Nexacro Objects > Decimal > Method > modDecimal

**Description**

Decimal 오브젝트에 저장된 값을 Decimal 형 값으로 나눈 나머지값으로 변경하는 메소드입니다.

**Syntax**

```javascript
Decimal.modDecimal( objDecimal )
```

**Parameters**

```
Decimal 오브젝트를 나눌 Decimal 오브젝트를 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.


---

### modDouble

> Script > Nexacro Objects > Decimal > Method > modDouble

**Description**

Decimal 오브젝트에 저장된 값을 숫자값으로 나눈 나머지값으로 변경하는 메소드입니다.

**Syntax**

```javascript
Decimal.modDouble( nValue )
```

**Parameters**

```
Decimal 오브젝트를 나눌 숫자값을 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.


---

### mulDecimal

> Script > Nexacro Objects > Decimal > Method > mulDecimal

**Description**

Decimal 오브젝트에 저장된 값에 Decimal 형 값을 곱하는 메소드입니다.

**Syntax**

```javascript
Decimal.mulDecimal( objDecimal )
```

**Parameters**

```
Decimal 오브젝트에 곱할 Decimal 오브젝트를 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.


---

### mulDouble

> Script > Nexacro Objects > Decimal > Method > mulDouble

**Description**

Decimal 오브젝트에 저장된 값에 숫자값을 곱하는 메소드입니다.

**Syntax**

```javascript
Decimal.mulDouble( nValue )
```

**Parameters**

```
Decimal 오브젝트에 곱할 숫자값을 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.


---

### round

> Script > Nexacro Objects > Decimal > Method > round

**Description**

Decimal 오브젝트에 저장된 값을 소수점 기준으로 반올림한 값으로 변경하는 메소드입니다.

**Syntax**

```javascript
Decimal.round()
```

**Parameters**

var objDec1 = new nexacro.Decimal( 30.555 );

trace(objDec1.round());
trace(objDec1);

**Return**

소수점을 기준으로 반올림한 값을 반환합니다.

**Remark**

- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.


---

### setDecimal

> Script > Nexacro Objects > Decimal > Method > setDecimal

**Description**

Decimal 오브젝트에 인수로 전달된 Decimal 오브젝트의 값을 저장하는 메소드입니다.

**Syntax**

```javascript
Decimal.setDecimal( objDecimal )
```

**Parameters**

```
Decimal 오브젝트에 저장할 다른 Decimal 오브젝트를 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.


---

### setDouble

> Script > Nexacro Objects > Decimal > Method > setDouble

**Description**

Decimal 오브젝트에 인수로 전달된 숫자값을 저장하는 메소드입니다.

**Syntax**

```javascript
Decimal.setDouble( nValue )
```

**Parameters**

```
Decimal 오브젝트에 저장할 숫자값을 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.


---

### setString

> Script > Nexacro Objects > Decimal > Method > setString

**Description**

Decimal 오브젝트에 숫자로 된 문자열을 저장하는 메소드입니다.

**Syntax**

```javascript
Decimal.setString( strValue )
```

**Parameters**

```
Decimal 오브젝트에 저장할 숫자로 된 문자열을 설정합니다.

숫자가 아닌 문자가 포함되어 있을 경우 정상적으로 저장되지 않습니다.
```

**Return**

없음

**Remark**

- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.


---

### subDecimal

> Script > Nexacro Objects > Decimal > Method > subDecimal

**Description**

Decimal 오브젝트에 저장된 값에서 Decimal 형 값을 빼는 메소드입니다.

**Syntax**

```javascript
Decimal.subDecimal( objDecimal )
```

**Parameters**

```
Decimal 오브젝트에서 값을 빼려는 Decimal 오브젝트를 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.


---

### subDouble

> Script > Nexacro Objects > Decimal > Method > subDouble

**Description**

Decimal 오브젝트에 저장된 값에서 숫자값을 빼는 메소드입니다.

**Syntax**

```javascript
Decimal.subDouble( nValue )
```

**Parameters**

```
Decimal 오브젝트에서 값을 빼려는 숫자값을 설정합니다.
```

**Return**

없음

**Remark**

- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.


---

### toString

> Script > Nexacro Objects > Decimal > Method > toString

**Description**

Decimal 오브젝트에 저장된 값을 문자열로 반환하는 메소드입니다.

**Syntax**

```javascript
Decimal.toString()
```

**Parameters**

var objDec1 = new nexacro.Decimal( "1234567890123456789012345" );

trace(objDec1.toString());

**Return**

Decimal 오브젝트에 저장된 값을 문자열로 반환합니다.


---

### trunc

> Script > Nexacro Objects > Decimal > Method > trunc

**Description**

Decimal 오브젝트에 저장된 값을 소수점 기준으로 버림한 값으로 변경하는 메소드입니다.

**Syntax**

```javascript
Decimal.trunc()
```

**Parameters**

var objDec1 = new nexacro.Decimal( 30.555 );

trace(objDec1.trunc());
trace(objDec1);

**Return**

소수점을 기준으로 버림한 값을 반환합니다.

**Remark**

- 메소드 수행 시 Decimal 오브젝트에 저장된 값이 변경됩니다.


---

## Script > Nexacro Objects > DomParser

### DomParser

> Script > Nexacro Objects > DomParser

**Description**

XML 문자열을 해석하여 DOMDocument 오브젝트를 생성하기 위한 오브젝트입니다.

**Remark**

- 자바스크립트의 DOMParser 와 별도로 넥사크로에서 제공하는 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| name | DomParser 의 이름을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addEvent | DomParser 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| addEventHandler | DomParser 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 DomParser 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| findEventHandler | DomParser 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getEventHandler | DomParser 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| insertEventHandler | DomParser 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| parseFromString | XML 문자열을 해석해 DOMDocument 오브젝트를 생성하고 반환하는 메소드입니다. |
| removeEvent | DomParser 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| removeEventHandler | DomParser 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | DomParser 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| setEventHandler | DomParser 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | DomParser 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onerror | XML 문자열 Parsing 중 오류가 생겼을 때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### name

> Script > Nexacro Objects > DomParser > Property > name

**Description**

DomParser 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
DomParser.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### 메서드 (Methods)

### addEvent

> Script > Nexacro Objects > DomParser > Method > addEvent

**Description**

DomParser 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**

```javascript
DomParser.addEvent( strEventID )
```

**Parameters**

```
DomParser 에 추가할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 추가에 성공하면 true 를 반환합니다.

이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- DomParser 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.


---

### addEventHandler

> Script > Nexacro Objects > DomParser > Method > addEventHandler

**Description**

DomParser 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
DomParser.addEventHandler( strEventID, objFunc, objTarget )
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

> Script > Nexacro Objects > DomParser > Method > addEventHandlerLookup

**Description**

함수를 검색하여 DomParser 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
DomParser.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

> Script > Nexacro Objects > DomParser > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
DomParser.clearEventHandler( strEventID )
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

### findEventHandler

> Script > Nexacro Objects > DomParser > Method > findEventHandler

**Description**

DomParser 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
DomParser.findEventHandler( strEventID, objFunc, objTarget )
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

> Script > Nexacro Objects > DomParser > Method > getEventHandler

**Description**

DomParser 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
DomParser.getEventHandler( strEventID, nIdx )
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

> Script > Nexacro Objects > DomParser > Method > insertEventHandler

**Description**

DomParser 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
DomParser.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

### parseFromString

> Script > Nexacro Objects > DomParser > Method > parseFromString

**Description**

XML 문자열을 해석해 DOMDocument 오브젝트를 생성하고 반환하는 메소드입니다.

**Syntax**

```javascript
DomParser.parseFromString( strXML )
```

**Parameters**

```
DOMDocument 오브젝트로 변환하려는 XML 문자열을 설정합니다.

"text/xml" 형식의 문자열만 설정할 수 있습니다.
```

**Return**

XML 문자열 해석에 성공하면 DOMDocumnet 오브젝트를 반환합니다.

XML 문자열 해석에 실패하면 null 값을 반환합니다.


---

### removeEvent

> Script > Nexacro Objects > DomParser > Method > removeEvent

**Description**

DomParser 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**

```javascript
DomParser.removeEvent( strEventID )
```

**Parameters**

```
DomParser 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 삭제에 성공하면 true 를 반환합니다.

이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- DomParser 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- DomParser 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.


---

### removeEventHandler

> Script > Nexacro Objects > DomParser > Method > removeEventHandler

**Description**

DomParser 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
DomParser.removeEventHandler( strEventID, objFunc, objTarget )
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

> Script > Nexacro Objects > DomParser > Method > removeEventHandlerLookup

**Description**

DomParser 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
DomParser.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

### setEventHandler

> Script > Nexacro Objects > DomParser > Method > setEventHandler

**Description**

DomParser 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
DomParser.setEventHandler( strEventID, objFunc, objTarget )
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

> Script > Nexacro Objects > DomParser > Method > setEventHandlerLookup

**Description**

DomParser 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
DomParser.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

### onerror

> Script > Nexacro Objects > DomParser > Event > onerror

**Description**

XML 문자열 Parsing 중 오류가 생겼을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.DomParser,e:nexacro.DomParseErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

## Script > Nexacro Objects > Image

### Image

> Script > Nexacro Objects > Image

**Description**

이미지를 처리하기 위해 제공되는 오브젝트입니다.

**Remark**

- src 속성을 사용하여 로딩된 이미지는 크기정보를 속성으로 얻을수 있습니다.

- Base64 로 인코딩된 이미지 정보를 처리할 수 있는 메소드를 제공합니다.

**Property**

| Name | Description |
| --- | --- |
| height | Image 오브젝트의 src 속성에 로드된 이미지의 높이값을 갖는 읽기전용 속성입니다. |
| src | Image 오브젝트에 로드 할 이미지 파일의 위치 경로를 설정하는 속성입니다. |
| width | Image 오브젝트의 src 속성에 로드된 이미지의 너비값을 갖는 읽기전용 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| getBase64String | Image 오브젝트에 저장된 Base64 인코딩 데이터를 반환하는 메소드입니다. |
| setBase64String | Image 오브젝트에 Base64 로 인코딩 된 데이터를 저장하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onerror | src 속성에 설정한 이미지 로드에 실패했을때 발생하는 이벤트입니다. |
| onload | src 속성에 설정한 이미지 로드에 성공했을때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### height

> Script > Nexacro Objects > Image > Property > height

**Description**

Image 오브젝트의 src 속성에 로드된 이미지의 높이값을 갖는 읽기전용 속성입니다.

**Remark**

- src 속성값이 설정된 후 정상적으로 이미지가 로드되면 height 속성값이 자동으로 설정됩니다.


---

### src

> Script > Nexacro Objects > Image > Property > src

**Description**

Image 오브젝트에 로드 할 이미지 파일의 위치 경로를 설정하는 속성입니다.

**Setting Syntax**

```javascript
strImgpath ::= 'URL(' <theme-Image> | <web-Image> | <absolute-image> | <relative-image> ')'
```
```javascript
var objImg = new nexacro.Image();

objImg.src = "URL('theme://images/V13_logo.png')";                            // 테마 이미지
objImg.src = "URL('http://www.tobesoft.com/images/gnb/btn_h1.gif')";  // 웹 이미지
objImg.src = "URL('file://C:\\xplatform_logo.gif')";                             // 절대경로 이미지
objImg.src = "URL('Base::test.jpg')";                                                   // TypeDefinition Prefix 이미지
objImg.src = "URL('./test.jpg')";                                                         // 상대경로 이미지
```
- **`<theme-Image>`** — 테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<absolute-image>`** — 로컬에 정의된 이미지를 "file://절대경로" 형식으로 설정합니다.

또는 TypeDefinition 영역의 Services 에 정의된 Prefix를 사용한 형식으로 설정합니다.
- **`<relative-image>`** — 폼의 위치를 기준으로 한 상대경로를 사용하여 설정합니다.

**Remark**

- 이미지 데이터 전체를 로드하지 않고 이미지 파일에 대한 핸들을 관리합니다.


---

### width

> Script > Nexacro Objects > Image > Property > width

**Description**

Image 오브젝트의 src 속성에 로드된 이미지의 너비값을 갖는 읽기전용 속성입니다.

**Remark**

- src 속성값이 설정된 후 정상적으로 이미지가 로드되면 width 속성값이 자동으로 설정됩니다.


---

### 메서드 (Methods)

### getBase64String

> Script > Nexacro Objects > Image > Method > getBase64String

**Description**

Image 오브젝트에 저장된 Base64 인코딩 데이터를 반환하는 메소드입니다.

**Syntax**

```javascript
Image.getBase64String([bOnlydata]);
```

**Parameters**

```
false: Data URI 형태로 반환
true: Data URI 형태 중 Base64 인코딩 데이터만 반환

값을 설정하지 않으면 false로 설정됩니다.
```

**Return**

Image 오브젝트에 저장된 Base64 데이터를 반환합니다.

**Remark**

- src 속성에 설정된 이미지정보와 별개로 Image 오브젝트에 저장된 Base64 인코딩 데이터를 반환합니다.

- src 속성에 설정된 이미지를 Base64 인코딩 데이터로 반환하는 메소드가 아닙니다.
  setBase64String 메소드를 실행해 저장했거나 Sketch 컴포넌트의 value 속성 등에 저장된 Base64 데이터를 반환하는 메소드입니다.


---

### setBase64String

> Script > Nexacro Objects > Image > Method > setBase64String

**Description**

Image 오브젝트에 Base64 로 인코딩 된 데이터를 저장하는 메소드입니다.

**Syntax**

```javascript
Image.setBase64String(strBase64);
```

**Parameters**

```
Base64 로 인코딩 된 이미지 데이터를 설정합니다.
```

**Return**

없음

**Remark**

- Image 오브젝트의 src 속성에 설정된 이미지정보와 별개로 Base64 인코딩 데이터를 저장하는 메소드입니다.


---

### 이벤트 (Events)

### onerror

> Script > Nexacro Objects > Image > Event > onerror

**Description**

src 속성에 설정한 이미지 로드에 실패했을때 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.Image,e:nexacro.ErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onload

> Script > Nexacro Objects > Image > Event > onload

**Description**

src 속성에 설정한 이미지 로드에 성공했을때 발생하는 이벤트입니다.

**Syntax**

```javascript
onload(obj:nexacro.Image,e:nexacro.LoadEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 이미지 데이터를 로드하지 않고 이미지 파일에 대한 핸들을 관리합니다.


---

## Script > Nexacro Objects > PluginObject

### PluginObject

> Script > Nexacro Objects > PluginObject

**Description**

WebBrowser, Plugin 컴포넌트에서 반환하는 오브젝트를 Wrapping 하는 Wrapper 오브젝트입니다.

**Remark**

- WebBrowser 컴포넌트에서 getProperty() 메소드 실행 시 로드된 웹페이지의 window 또는 document 객체를 PluginObject 로 Wrapping 하여 반환합니다.
   WebBrowser 컴포넌트에서 callMethod() 메소드 실행 시 오브젝트를 리턴한 경우 PluginObject 로 Wrapping 되어 반환될 수 있습니다.

- Plugin 컴포넌트에서 getProperty(), callMethod() 메소드 실행 시 오브젝트를 리턴한 경우 PluginObject 로 Wrapping 되어 반환될 수 있습니다.

- 반환된 PluginObject 에서 getProperty() 메소드 실행 시 반환값이 객체일 경우 PluginObject 로 Wrapping 하여 반환합니다.

- 사용을 완료한 PluginObject 객체는 명시적으로 destroy 하여야 합니다.
   PluginObject 객체를 destroy 하지 않을 경우 메모리 누수가 발생할 수 있습니다.

**Method**

| Name | Description |
| --- | --- |
| callMethod | PluginObject 로 Wrapping 된 객체에 정의된 메소드를 호출하는 메소드입니다. |
| getProperty | PluginObject 로 Wrapping 된 객체에 정의된 속성의 값을 반환하는 메소드입니다. |
| setProperty | PluginObject 로 Wrapping 된 객체에 정의된 속성에 값을 설정하는 메소드입니다. |


---

### 메서드 (Methods)

### callMethod

> Script > Nexacro Objects > PluginObject > Method > callMethod

**Description**

PluginObject 로 Wrapping 된 객체에 정의된 메소드를 호출하는 메소드입니다.

**Syntax**

```javascript
PluginObject.callMethod( strMethodID [, varArg1 [, varArg2 ]]);
```

**Parameters**

```
호출할 메소드의 이름을 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- Cross Domain 상황이면 사용에 제한이 있습니다.


---

### getProperty

> Script > Nexacro Objects > PluginObject > Method > getProperty

**Description**

PluginObject 로 Wrapping 된 객체에 정의된 속성의 값을 반환하는 메소드입니다.

**Syntax**

```javascript
PluginObject.getProperty( strPropID );
```

**Parameters**

```
PluginObject 로 Wrapping 된 객체에 정의된 속성명을 문자열로 설정합니다.
```

**Return**

strPropID 가 객체를 가질 경우 해당 객체를 Wrapping 한 PluginObject 객체를 반환합니다.

strPropID 가 속성일 경우 속성값을 반환합니다.

**Remark**

- Cross Domain 상황이면 사용에 제한이 있습니다.

- 반환된 PluginObject 객체에서 getProperty(), setProperty(), callMethod() 메소드를 사용할 수 있습니다.
   각 메소드로 하위 객체나 속성에 접근하고, 메소드를 실행 할 수 있습니다.

- 사용을 완료한 PluginObject 객체는 명시적으로 destroy 하여야 합니다.
   PluginObject 객체를 destroy 하지 않을 경우 메모리 누수가 발생할 수 있습니다.


◆ Android NRE 제약

- Android NRE 는 WebKit Library 에서 document 객체의 접근을 제공하지 않아 사용할 수 없는 메소드입니다.


---

### setProperty

> Script > Nexacro Objects > PluginObject > Method > setProperty

**Description**

PluginObject 로 Wrapping 된 객체에 정의된 속성에 값을 설정하는 메소드입니다.

**Syntax**

```javascript
PluginObject.setProperty( strPropID, varValue );
```

**Parameters**

```
PluginObject 로 Wrapping 된 객체에 정의된 속성명을 문자열로 설정합니다.
```

**Return**

없음


---

## Script > Nexacro Objects > Point

### Point

> Script > Nexacro Objects > Point

**Description**

좌표정보를 처리하기 위해 제공되는 오브젝트입니다.

**Remark**

- 스크립트로 오브젝트를 생성하여 좌표정보를 관리할 수 있습니다.

**Property**

| Name | Description |
| --- | --- |
| x | Point 오브젝트의 x 좌표를 설정하는 속성입니다. |
| y | Point 오브젝트의 y 좌표를 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| clone | Point 오브젝트의 속성값을 복사하여 새로운 Point 오브젝트를 반환하는 메소드입니다. |
| copy | 인수로 전달된 값을 Point 오브젝트의 x, y 속성값으로 복사하는 메소드입니다. |
| equals | 현재 Point 오브젝트의 속성값과 인수로 전달된 값의 일치여부를 반환하는 메소드입니다. |


---

### 속성 (Properties)

### x

> Script > Nexacro Objects > Point > Property > x

**Description**

Point 오브젝트의 x 좌표를 설정하는 속성입니다.

**Setting Syntax**

```javascript
var objPnt = new nexacro.Point(20, 20) ;
objPnt.x = 40;
```
- **`nX`** — x 좌표값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- x 속성값을 설정하지 않으면 "0" 으로 적용됩니다.


---

### y

> Script > Nexacro Objects > Point > Property > y

**Description**

Point 오브젝트의 y 좌표를 설정하는 속성입니다.

**Setting Syntax**

```javascript
var objPnt = new nexacro.Point(20, 20) ;
objPnt.y = 40;
```
- **`nY`** — y 좌표값을 pixel 단위의 숫자로 설정합니다.

**Remark**

- y 속성값을 설정하지 않으면 "0" 으로 적용됩니다.


---

### 메서드 (Methods)

### clone

> Script > Nexacro Objects > Point > Method > clone

**Description**

Point 오브젝트의 속성값을 복사하여 새로운 Point 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
Point.clone()
```

**Parameters**

var objPoint1 = new nexacro.Point(10,10);

var objPoint2 = objPoint1.clone();

**Return**

현재 Point 오브젝트의 값을 복사한 새로운 Point 오브젝트를 반환합니다.


---

### copy

> Script > Nexacro Objects > Point > Method > copy

**Description**

인수로 전달된 값을 Point 오브젝트의 x, y 속성값으로 복사하는 메소드입니다.

**Syntax**

```javascript
Point.copy( objPoint )
Point.copy( nX, nY )
```

**Parameters**

```
현재 Point 오브젝트의 x, y 속성값에 복사될 값을 Point 오브젝트 형태로 설정합니다.
```

**Return**

없음

**Remark**

- 인수가 Point 오브젝트일 때 속성값이 x, y 속성에 각각 복사됩니다.


---

### equals

> Script > Nexacro Objects > Point > Method > equals

**Description**

현재 Point 오브젝트의 속성값과 인수로 전달된 값의 일치여부를 반환하는 메소드입니다.

**Syntax**

```javascript
Point.equals( objPoint )
Point.equals( arrVal )
Point.equals( nX, nY )
```

**Parameters**

```
Point 오브젝트의 x, y 속성값과 비교할 값을 Point 오브젝트 형태로 설정합니다.
```

**Return**

Point 오브젝트에 저장된 x, y 속성값과 인수로 전달된 값이 모두 일치하면 "true" 를 반환합니다.

Point 오브젝트에 저장된 x, y 속성값과 인수로 전달된 값이 하나라도 다르면 "false" 를 반환합니다.

**Remark**

- 인수가 Point 오브젝트일 때 x, y 속성을 각각 비교합니다.


---

## Script > Nexacro Objects > Rect

### Rect

> Script > Nexacro Objects > Rect

**Description**

사각형 모양의 영역 좌표를 처리하기 위해 제공되는 오브젝트입니다.

**Remark**

- 스크립트로 오브젝트를 생성하여 영역좌표를 관리할 수 있습니다.

**Property**

| Name | Description |
| --- | --- |
| height | Rect 오브젝트의 높이를 설정하는 속성입니다. |
| left | Rect 오브젝트의 좌측 좌표값을 설정하는 속성입니다. |
| top | Rect 오브젝트의 상단 좌표값을 설정하는 속성입니다. |
| width | Rect 오브젝트의 너비를 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| clear | Rect 오브젝트의 모든 속성값을 0 으로 초기화하는 메소드입니다. |
| clone | Rect 오브젝트의 속성값을 복사하여 새로운 Rect 오브젝트를 반환하는 메소드입니다. |
| copy | 인수로 전달된 Rect 오브젝트의 속성값을 현재 Rect 오브젝트의 속성값으로 복사하는 메소드입니다. |
| equals | 현재 Rect 오브젝트와 인수로 전달된 Rect 오브젝트의 속성값 일치여부를 반환하는 메소드입니다. |
| getBottom | Rect 오브젝트의 하단 좌표값을 반환하는 메소드입니다. |
| getRight | Rect 오브젝트의 우측 좌표값을 반환하는 메소드입니다. |
| isSameSize | 현재 Rect 오브젝트와 인수로 전달된 Rect 오브젝트의 넓이와 높이가 일치하는지 반환하는 메소드입니다. |


---

### 속성 (Properties)

### height

> Script > Nexacro Objects > Rect > Property > height

**Description**

Rect 오브젝트의 높이를 설정하는 속성입니다.

**Setting Syntax**

```javascript
var objRect = new nexacro.Rect() ;

objRect.height = 200;
```
- **`nHeight`** — 높이를 pixel 단위의 정수로 설정합니다.

**Remark**

- height 속성값을 설정하지 않으면 "0" 으로 적용됩니다.


---

### left

> Script > Nexacro Objects > Rect > Property > left

**Description**

Rect 오브젝트의 좌측 좌표값을 설정하는 속성입니다.

**Setting Syntax**

```javascript
var objRect = new nexacro.Rect() ;

objRect.left = 50;
```
- **`nLeft`** — 좌측 좌표값을 pixel 단위의 정수로 설정합니다.

**Remark**

- left 속성값을 설정하지 않으면 "0" 으로 적용됩니다.


---

### top

> Script > Nexacro Objects > Rect > Property > top

**Description**

Rect 오브젝트의 상단 좌표값을 설정하는 속성입니다.

**Setting Syntax**

```javascript
var objRect = new nexacro.Rect() ;

objRect.top = 50;
```
- **`nTop`** — 상단 좌표값을 pixel 단위의 정수로 설정합니다.

**Remark**

- top 속성값을 설정하지 않으면 "0" 으로 적용됩니다.


---

### width

> Script > Nexacro Objects > Rect > Property > width

**Description**

Rect 오브젝트의 너비를 설정하는 속성입니다.

**Setting Syntax**

```javascript
var objRect = new nexacro.Rect() ;

objRect.width = 200;
```
- **`nWidth`** — 너비를 pixel 단위의 정수로 설정합니다.

**Remark**

- width 속성값을 설정하지 않으면 "0" 으로 적용됩니다.


---

### 메서드 (Methods)

### clear

> Script > Nexacro Objects > Rect > Method > clear

**Description**

Rect 오브젝트의 모든 속성값을 0 으로 초기화하는 메소드입니다.

**Parameters**

var objRect = new nexacro.Rect( 10,10,100,100 );

objRect.clear()

**Return**

없음

**Remark**

- Rect 오브젝트는 left, top, width, height 속성을 갖습니다.


---

### clone

> Script > Nexacro Objects > Rect > Method > clone

**Description**

Rect 오브젝트의 속성값을 복사하여 새로운 Rect 오브젝트를 반환하는 메소드입니다.

**Syntax**

```javascript
Rect.clone()
```

**Parameters**

var objRect1 = new nexacro.Rect(10,10,100,100);

var objRect2 = objRect1.clone();

**Return**

현재 Rect 오브젝트의 값을 복사한 새로운 Rect 오브젝트를 반환합니다.


---

### copy

> Script > Nexacro Objects > Rect > Method > copy

**Description**

인수로 전달된 Rect 오브젝트의 속성값을 현재 Rect 오브젝트의 속성값으로 복사하는 메소드입니다.

**Syntax**

```javascript
Rect.copy( objRect )
```

**Parameters**

```
현재 Rect 오브젝트의 속성에 복사될 값을 Rect 오브젝트 형태로 설정합니다.
```

**Return**

없음

**Remark**

- 인수로 전달된 Rect 오브젝트의 속성값이 left, top, width, height 속성에 각각 복사됩니다.


---

### equals

> Script > Nexacro Objects > Rect > Method > equals

**Description**

현재 Rect 오브젝트와 인수로 전달된 Rect 오브젝트의 속성값 일치여부를 반환하는 메소드입니다.

**Syntax**

```javascript
Rect.equals( objRect )
```

**Parameters**

```
현재 Rect 오브젝트의 속성값과 비교할 값을 Rect 오브젝트 형태로 설정합니다.
```

**Return**

현재 Rect 오브젝트와 인수로 전달된 Rect 오브젝트의 속성값이 모두 일치하면 "true" 를 반환합니다.

현재 Rect 오브젝트와 인수로 전달된 Rect 오브젝트의 속성값이 하나라도 다르면 "false" 를 반환합니다.

**Remark**

- Rect 오브젝트의 left, top, width, height 속성을 각각 비교합니다.


---

### getBottom

> Script > Nexacro Objects > Rect > Method > getBottom

**Description**

Rect 오브젝트의 하단 좌표값을 반환하는 메소드입니다.

**Syntax**

```javascript
Rect.getBottom()
```

**Parameters**

var objRect1 = new nexacro.Rect( 10,10,100,100 );

alert(objRect1.getBottom());

**Return**

Rect 오브젝트의 하단 좌표값을 pixel 단위의 정수로 반환합니다.


---

### getRight

> Script > Nexacro Objects > Rect > Method > getRight

**Description**

Rect 오브젝트의 우측 좌표값을 반환하는 메소드입니다.

**Syntax**

```javascript
Rect.getRight()
```

**Parameters**

var objRect1 = new nexacro.Rect( 10,10,100,100 );

alert(objRect1.getRight());

**Return**

Rect 오브젝트의 우측 좌표값을 pixel 단위의 정수로 반환합니다.


---

### isSameSize

> Script > Nexacro Objects > Rect > Method > isSameSize

**Description**

현재 Rect 오브젝트와 인수로 전달된 Rect 오브젝트의 넓이와 높이가 일치하는지 반환하는 메소드입니다.

**Syntax**

```javascript
Rect.isSameSize( objRect )
```

**Parameters**

```
현재 Rect 오브젝트의 넓이, 높이와 비교할 Rect 오브젝트를 설정합니다.
```

**Return**

현재 Rect 오브젝트와 인수로 전달된 Rect 오브젝트의 넓이와 높이가 일치하면 "true" 를 반환합니다.

현재 Rect 오브젝트와 인수로 전달된 Rect 오브젝트의 넓이 또는 높이가 다르면 "false" 를 반환합니다.

**Remark**

- Rect 오브젝트의 width, height 속성을 각각 비교합니다.


---

## Script > Nexacro Objects > XmlSerializer

### XmlSerializer

> Script > Nexacro Objects > XmlSerializer

**Description**

DOMDocument 오브젝트를 해석하여 XML 문자열을 생성하기 위한 오브젝트입니다.

**Remark**

- 자바스크립트의 XMLSerializer 와 별도로 넥사크로에서 제공하는 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| name | XmlSerializer 의 이름을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| serializeToString | DOMDocument 오브젝트를 해석해 XML 문자열을 생성하고 반환하는 메소드입니다. |


---

### 속성 (Properties)

### name

> Script > Nexacro Objects > XmlSerializer > Property > name

**Description**

XmlSerializer 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
XmlSerializer.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### 메서드 (Methods)

### serializeToString

> Script > Nexacro Objects > XmlSerializer > Method > serializeToString

**Description**

DOMDocument 오브젝트를 해석해 XML 문자열을 생성하고 반환하는 메소드입니다.

**Syntax**

```javascript
XmlSerializer.serializeToString( objDOM )
```

**Parameters**

```
XML 문자열로 변환하려는 DOMDocument 오브젝트를 설정합니다.
```

**Return**

DOMDocumnet 오브젝트 해석에 성공하면 XML 문자열을 반환합니다.


---
