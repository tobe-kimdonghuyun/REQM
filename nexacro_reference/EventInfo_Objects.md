# nexacroN V24 — EventInfo Objects

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 1317개

---

## EventInfo Objects

### EventInfo Objects

> EventInfo Objects

**Description**

이벤트 정보(EventInfo)를 처리하기 위한 오브젝트입니다.


---

## EventInfo Objects > AccelerationErrorEventInfo

### AccelerationErrorEventInfo

> EventInfo Objects > AccelerationErrorEventInfo

**Description**

모바일 기기에서 가속도 정보 수신에 실패했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| errormsg | 발생한 에러에 대한 에러코드값을 갖는 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| statuscode | 발생한 에러에 대한 에러코드값을 갖는 속성입니다. |


---

### 속성 (Properties)

### errormsg

> EventInfo Objects > AccelerationErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러코드값을 갖는 속성입니다.

**Syntax**

```javascript
AccelerationErrorEventInfo.errormsg
```

**Setting Syntax**

- **`"00001"`** — Parameter Error
- **`"5000"`** — Interval Time Value Error
- **`"5001"`** — Accuracy Value Error


---

### errortype

> EventInfo Objects > AccelerationErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
AccelerationErrorEventInfo.errortype
```

**Setting Syntax**

- **`"EvalError"`** — 현재 버전에서 발생하지 않지만 이전 버전과의 호환성을 유지하기 위해 정의
- **`"RangeError"`** — 숫자값이 허용된 범위를 넘어선 경우
- **`"ReferenceError"`** — 참조값이 유효하지 않은 경우
- **`"SyntaxError"`** — 파싱에 문제가 있을 경우
- **`"TypeError"`** — 피연산자의 자료형이 허용된 범위가 아닌 경우
- **`"URIError"`** — 전역 URI 처리 함수 중 하나가 해당 정의와 호환되지 않는 방식으로 사용된 경우
- **`"NativeError"`** — 모든 Native Error 인 경우
- **`"CommunicationError"`** — 통신시 발생한 에러인 경우
- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우


---

### eventid

> EventInfo Objects > AccelerationErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
AccelerationErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### statuscode

> EventInfo Objects > AccelerationErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대한 에러코드값을 갖는 속성입니다.

**Syntax**

```javascript
AccelerationErrorEventInfo.statuscode
```

**Setting Syntax**

- **`"00001"`** — Parameter Error
- **`"5000"`** — Interval Time Value Error
- **`"5001"`** — Accuracy Value Error


---

## EventInfo Objects > AccelerationEventInfo

### AccelerationEventInfo

> EventInfo Objects > AccelerationEventInfo

**Description**

모바일 기기에서 가속도 정보 수신에 성공했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| accuracy | 수신한 가속도 정보의 정확도를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| timestamp | 가속도 정보를 수신한 시간을 갖는 속성입니다. |
| xpos | 수신한 가속도 정보 중 x 축의 값을 갖는 속성입니다. |
| ypos | 수신한 가속도 정보 중 y 축의 값을 갖는 속성입니다. |
| zpos | 수신한 가속도 정보 중 z 축의 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### accuracy

> EventInfo Objects > AccelerationEventInfo > Property > accuracy

**Description**

수신한 가속도 정보의 정확도를 갖는 속성입니다.

**Syntax**

```javascript
AccelerationEventInfo.accuracy
```

**Remark**

- Acceleration 오브젝트의 accuracy 속성에 저장된 값은 이전에 얻은 값이며 이벤트가 종료된 후 변경됩니다.


---

### eventid

> EventInfo Objects > AccelerationEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
AccelerationEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### timestamp

> EventInfo Objects > AccelerationEventInfo > Property > timestamp

**Description**

가속도 정보를 수신한 시간을 갖는 속성입니다.

**Syntax**

```javascript
AccelerationEventInfo.timestamp
```

**Remark**

- Acceleration 오브젝트의 timestamp 속성에 저장된 값은 이전에 얻은 값이며 이벤트가 종료된 후 변경됩니다.


---

### xpos

> EventInfo Objects > AccelerationEventInfo > Property > xpos

**Description**

수신한 가속도 정보 중 x 축의 값을 갖는 속성입니다.

**Syntax**

```javascript
AccelerationEventInfo.xpos
```

**Remark**

- Acceleration 오브젝트의 xpos 속성에 저장된 값은 이전에 얻은 값이며 이벤트가 종료된 후 변경됩니다.


---

### ypos

> EventInfo Objects > AccelerationEventInfo > Property > ypos

**Description**

수신한 가속도 정보 중 y 축의 값을 갖는 속성입니다.

**Syntax**

```javascript
AccelerationEventInfo.ypos
```

**Remark**

- Acceleration 오브젝트의 ypos 속성에 저장된 값은 이전에 얻은 값이며 이벤트가 종료된 후 변경됩니다.


---

### zpos

> EventInfo Objects > AccelerationEventInfo > Property > zpos

**Description**

수신한 가속도 정보 중 z 축의 값을 갖는 속성입니다.

**Syntax**

```javascript
AccelerationEventInfo.zpos
```

**Remark**

- Acceleration 오브젝트의 zpos 속성에 저장된 값은 이전에 얻은 값이며 이벤트가 종료된 후 변경됩니다.


---

## EventInfo Objects > ActivateEventInfo

### ActivateEventInfo

> EventInfo Objects > ActivateEventInfo

**Description**

Frame 또는 Form 이 활성화 또는 비활성화 되어 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- Frame 또는 Form 은 포커스가 주어질 때 활성화되고, 포커스가 나갈 때 비활성화 됩니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| state | 이벤트가 발생한 원인에 대한 정보를 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > ActivateEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ActivateEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > ActivateEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ActivateEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > ActivateEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
ActivateEventInfo.fromreferenceobject
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

### state

> EventInfo Objects > ActivateEventInfo > Property > state

**Description**

이벤트가 발생한 원인에 대한 정보를 갖는 속성입니다.

**Syntax**

```javascript
ActivateEventInfo.state
```

**Setting Syntax**

- **`"0"`** — Frame 또는 Form 이 비활성화되어 이벤트가 발생했을 때 갖는 값입니다.
- **`"1"`** — Frame 또는 Form 이 활성화되어 이벤트가 발생했을 때 갖는 값입니다.


---

## EventInfo Objects > AnimationEventInfo

### AnimationEventInfo

> EventInfo Objects > AnimationEventInfo

**Description**

애니메이션 효과가 실행될 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| curtime | 애니메이션 효과가 실행중인 시간을 밀리세컨드(MilliSecond)로 갖는 읽기전용 속성입니다. |
| direction | 애니메이션 효과가 진행되는 방향값을 갖는 읽기전용 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| loopcount | 애니메이션 효과가 반복되어 실행될 때 반복횟수를 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### curtime

> EventInfo Objects > AnimationEventInfo > Property > curtime

**Description**

애니메이션 효과가 실행중인 시간을 밀리세컨드(MilliSecond)로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
AnimationEventInfo.curtime
```

**Setting Syntax**

- **`curtime`** — Animation 오브젝트의 onupdate 이벤트에서는 delay 속성값을 포함하여 효과가 진행중인 시간을 갖습니다.

Animation 오브젝트의 onbegin 이벤트에서는 진행방향에 따라 최소 또는 최대 시간을 갖습니다.

Animation 오브젝트의 onrun 이벤트에서는 delay 속성값을 제외하고 효과가 진행중인 시간만을 갖습니다.

Animation 오브젝트의 oncomplete 이벤트에서는 진행방향에 따라 최소 또는 최대 시간을 갖습니다.

AnimationTimeline 오브젝트의  onupdate 이벤트에서는 offset 속성값과 delay 속성값을 포함하여 전체 효과가 진행중인 시간을 갖습니다.

AnimationTimeline 오브젝트의 onbegin 이벤트에서는 진행방향에 따라 최소 또는 최대 시간을 갖습니다.

AnimationTimeline 오브젝트의 onrun 이벤트에서는 첫번재 애니메이션 효과의 offset 속성값과 delay 속성값을 제외하고 효과가 진행중인 시간을 갖습니다.

AnimationTimeline 오브젝트의 oncomplete 이벤트에서는 진행방향에 따라 최소 또는 최대 시간을 갖습니다.


---

### direction

> EventInfo Objects > AnimationEventInfo > Property > direction

**Description**

애니메이션 효과가 진행되는 방향값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
AnimationEventInfo.direction
```

**Setting Syntax**

- **`"normal"`** — AnimationItem 오브젝트의 props 속성에 설정된 속성값 순서대로 애니메이션 효과가 진행될 때 갖는 값입니다.
- **`"reverse"`** — AnimationItem 오브젝트의 props 속성에 설정된 속성값 순서의 반대로 애니메이션 효과가 진행될 때 갖는 값입니다.


---

### eventid

> EventInfo Objects > AnimationEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
AnimationEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > AnimationEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
AnimationEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > AnimationEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
AnimationEventInfo.fromreferenceobject
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

### loopcount

> EventInfo Objects > AnimationEventInfo > Property > loopcount

**Description**

애니메이션 효과가 반복되어 실행될 때 반복횟수를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
AnimationEventInfo.loopcount
```

**Setting Syntax**

- **`loopcount`** — Animation 오브젝트 관련 이벤트 발생 시 애니메이션 효과의 반복횟수를 갖습니다.
무한반복일 경우 0 값을 갖습니다.

AnimationTimeline 오브젝트 관련 이벤트 발생 시 undefined 값을 갖습니다.

**Remark**

- Animation 오브젝트가 AnimationTimeline 오브젝트의 아이템으로 등록될 경우
   Animation 오브젝트의 loop 속성값은 항상 false 로 적용됩니다.


---

## EventInfo Objects > AudioErrorEventInfo

### AudioErrorEventInfo

> EventInfo Objects > AudioErrorEventInfo

**Description**

오디오 파일을 정상처리 하지 못했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- AudioPlayer 또는 AudioRecorder 오브젝트에서 발생하는 이벤트에 전달되는 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| currentpos | 컴포넌트에서 처리중인 오디오파일의 현재 재생위치를 갖는 속성입니다. |
| errormsg | 발생한 에러에 대한 에러메시지를 갖는 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| statuscode | 발생한 에러에 대한 에러코드값을 갖는 속성입니다. |
| url | 컴포넌트에서 처리중인 오디오파일의 경로를 URL 형태로 갖는 속성입니다. |


---

### 속성 (Properties)

### currentpos

> EventInfo Objects > AudioErrorEventInfo > Property > currentpos

**Description**

컴포넌트에서 처리중인 오디오파일의 현재 재생위치를 갖는 속성입니다.

**Syntax**

```javascript
AudioErrorEventInfo.currentpos
```

**Remark**

- 처리중인 오디오 파일의 재생위치를 밀리초(milliseconds) 단위의 값으로 갖습니다.


---

### errormsg

> EventInfo Objects > AudioErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러메시지를 갖는 속성입니다.

**Syntax**

```javascript
AudioErrorEventInfo.errormsg
```

**Setting Syntax**

- **`"00001"`** — Parameter Error
- **`"1001"`** — IO Exception File does not exist
- **`"1002"`** — IO Exception sdcard is not mounted  (iOS 제외)
- **`"1003"`** — Not Supported Audio Format
- **`"1004"`** — Network is not available
- **`"1005"`** — Not Reachable
- **`"1006"`** — Play Section Error (startpos >= stoppos 인 경우)
- **`"1007"`** — Not Loaded
- **`"1008"`** — Already playing
- **`"1009"`** — Not playing
- **`"1010"`** — Can't resume
- **`"1011"`** — Not Paused
- **`"1301"`** — Already recording (AudioRecorder 사용)
- **`"1302"`** — Not recording
- **`"1303"`** — Already paused
- **`"1304"`** — Recording Setting Error (AudioRecorder 사용)
- **`"1305"`** — Not paused
- **`"1306"`** — Existing File (AudioRecorder 사용)


---

### errortype

> EventInfo Objects > AudioErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
AudioErrorEventInfo.errortype
```

**Setting Syntax**

- **`"EvalError"`** — 현재 버전에서 발생하지 않지만 이전 버전과의 호환성을 유지하기 위해 정의
- **`"RangeError"`** — 숫자값이 허용된 범위를 넘어선 경우
- **`"ReferenceError"`** — 참조값이 유효하지 않은 경우
- **`"SyntaxError"`** — 파싱에 문제가 있을 경우
- **`"TypeError"`** — 피연산자의 자료형이 허용된 범위가 아닌 경우
- **`"URIError"`** — 전역 URI 처리 함수 중 하나가 해당 정의와 호환되지 않는 방식으로 사용된 경우
- **`"NativeError"`** — 모든 Native Error 인 경우
- **`"CommunicationError"`** — 통신시 발생한 에러인 경우
- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우


---

### eventid

> EventInfo Objects > AudioErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
AudioErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### statuscode

> EventInfo Objects > AudioErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대한 에러코드값을 갖는 속성입니다.

**Syntax**

```javascript
AudioErrorEventInfo.statuscode
```

**Setting Syntax**

- **`"00001"`** — Parameter Error
- **`"1001"`** — IO Exception File does not exist
- **`"1002"`** — IO Exception sdcard is not mounted  (iOS 제외)
- **`"1003"`** — Not Supported Audio Format
- **`"1004"`** — Network is not available
- **`"1005"`** — Not Reachable
- **`"1006"`** — Play Section Error (startpos >= stoppos 인 경우)
- **`"1007"`** — Not Loaded
- **`"1008"`** — Already playing
- **`"1009"`** — Not playing
- **`"1010"`** — Can't resume
- **`"1011"`** — Not Paused
- **`"1301"`** — Already recording (AudioRecorder 사용)
- **`"1302"`** — Not recording
- **`"1303"`** — Already paused
- **`"1304"`** — Recording Setting Error (AudioRecorder 사용)
- **`"1305"`** — Not paused
- **`"1306"`** — Existing File (AudioRecorder 사용)


---

### url

> EventInfo Objects > AudioErrorEventInfo > Property > url

**Description**

컴포넌트에서 처리중인 오디오파일의 경로를 URL 형태로 갖는 속성입니다.

**Syntax**

```javascript
AudioErrorEventInfo.url
```


---

## EventInfo Objects > AudioEventInfo

### AudioEventInfo

> EventInfo Objects > AudioEventInfo

**Description**

오디오 파일을 정상처리 했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- AudioPlayer 또는 AudioRecorder 오브젝트에서 발생하는 이벤트에 전달되는 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| currentpos | 컴포넌트에서 처리중인 오디오파일의 현재 재생위치를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| reason | 이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다. |
| url | 컴포넌트에서 처리중인 오디오파일의 경로를 URL 형태로 갖는 속성입니다. |


---

### 속성 (Properties)

### currentpos

> EventInfo Objects > AudioEventInfo > Property > currentpos

**Description**

컴포넌트에서 처리중인 오디오파일의 현재 재생위치를 갖는 속성입니다.

**Syntax**

```javascript
AudioEventInfo.currentpos
```

**Remark**

- 처리중인 오디오 파일의 재생위치를 밀리초(milliseconds) 단위의 값으로 갖습니다.


---

### eventid

> EventInfo Objects > AudioEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
AudioEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### reason

> EventInfo Objects > AudioEventInfo > Property > reason

**Description**

이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
AudioEventInfo.reason
```

**Setting Syntax**

- **`0`** — AudioPlayer 컴포넌트에서 음원파일이 정상 로딩 되어 이벤트가 발생했을 때 갖는 값입니다.
- **`1`** — AudioPlayer 컴포넌트에서 음원파일의 재생이 시작 되어 이벤트가 발생했을 때 갖는 값입니다.

AudioRecording 컴포넌트에서 음원파일의 녹음이 시작 되어 이벤트가 발생했을 때 갖는 값입니다.
- **`2`** — AudioPlayer 컴포넌트에서 일시중지 되었던 음원파일이 다시 재생 되어 이벤트가 발생했을 때 갖는 값입니다.

AudioRecording 컴포넌트에서 일시중지 되었던 음원파일의 녹음이 다시 시작 되어 이벤트가 발생했을 때 갖는 값입니다.
- **`3`** — AudioPlayer 컴포넌트에서 음원파일이 재생되면서 onplaying 이벤트가 발생했을 때 갖는 값입니다.

AudioRecording 컴포넌트에서 음원파일이 녹음되면서 onrecording 이벤트가 발생했을 때 갖는 값입니다.
- **`4`** — AudioPlayer 컴포넌트에서 음원파일의 재생이 완료되어 이벤트가 발생했을 때 갖는 값입니다.

AudioRecording 컴포넌트에서 음원파일의 녹음이 완료되어 이벤트가 발생했을 때 갖는 값입니다.
- **`5`** — AudioPlayer 컴포넌트에서 음원파일의 재생이 중지되어 이벤트가 발생했을 때 갖는 값입니다.

AudioRecording 컴포넌트에서 음원파일의 녹음이 중지되어 이벤트가 발생했을 때 갖는 값입니다.
- **`6`** — AudioPlayer 컴포넌트에서 음원파일의 재생이 일시중지되어 이벤트가 발생했을 때 갖는 값입니다.

AudioRecording 컴포넌트에서 음원파일의 녹음이 일시중지되어 이벤트가 발생했을 때 갖는 값입니다.
- **`7`** — AudioPlayer 컴포넌트에서 음원파일의 재생위치가 변경되어 이벤트가 발생했을 때 갖는 값입니다.


---

### url

> EventInfo Objects > AudioEventInfo > Property > url

**Description**

컴포넌트에서 처리중인 오디오파일의 경로를 URL 형태로 갖는 속성입니다.

**Syntax**

```javascript
AudioEventInfo.url
```


---

## EventInfo Objects > BindingValueChangedEventInfo

### BindingValueChangedEventInfo

> EventInfo Objects > BindingValueChangedEventInfo

**Description**

Form 에 바인드된 DataSet 의 value 가 변경되었을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| col | 값이 변경된 데이터의 Column 인덱스값을 갖는 읽기전용 속성입니다. |
| columnid | 값이 변경된 데이터의 Column ID 값을 갖는 읽기전용 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| newvalue | 변경된 값을 갖는 읽기전용 속성입니다. |
| oldvalue | 변경되기 전 원본값을 갖는 읽기전용 속성입니다. |
| row | 값이 변경된 데이터의 Row 인덱스값을 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### col

> EventInfo Objects > BindingValueChangedEventInfo > Property > col

**Description**

값이 변경된 데이터의 Column 인덱스값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
BindingValueChangedEventInfo.col
```

**Setting Syntax**

```javascript
var nCol = e.col;
```

**Remark**

- DataSet 의 Row 변경에 의해 이벤트가 발생하면 col 속성에 빈값이 설정됩니다.


---

### columnid

> EventInfo Objects > BindingValueChangedEventInfo > Property > columnid

**Description**

값이 변경된 데이터의 Column ID 값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
BindingValueChangedEventInfo.columnid
```

**Setting Syntax**

```javascript
var strColid = e.columnid;
```

**Remark**

- DataSet 의 Row 변경에 의해 이벤트가 발생하면 columnid 속성에 빈값이 설정됩니다.


---

### eventid

> EventInfo Objects > BindingValueChangedEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
BindingValueChangedEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > BindingValueChangedEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
BindingValueChangedEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > BindingValueChangedEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
BindingValueChangedEventInfo.fromreferenceobject
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

### newvalue

> EventInfo Objects > BindingValueChangedEventInfo > Property > newvalue

**Description**

변경된 값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
BindingValueChangedEventInfo.newvalue
```


---

### oldvalue

> EventInfo Objects > BindingValueChangedEventInfo > Property > oldvalue

**Description**

변경되기 전 원본값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
BindingValueChangedEventInfo.oldvalue
```


---

### row

> EventInfo Objects > BindingValueChangedEventInfo > Property > row

**Description**

값이 변경된 데이터의 Row 인덱스값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
BindingValueChangedEventInfo.row
```

**Setting Syntax**

```javascript
var nRow = e.row;
```

**Remark**

- DataSet 의 Row 변경에 의해 이벤트가 발생하면 row 속성에 빈값이 설정됩니다.


---

## EventInfo Objects > BluetoothLEErrorEventInfo

### BluetoothLEErrorEventInfo

> EventInfo Objects > BluetoothLEErrorEventInfo

**Description**

연결된 Peripheral 디바이스로 한 요청이 실패했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| errormsg | BluetoothLE 에서 발생한 에러의 에러메시지를 갖는 읽기전용 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| reason | BluetoothLE 에서 발생한 에러의 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### errormsg

> EventInfo Objects > BluetoothLEErrorEventInfo > Property > errormsg

**Description**

BluetoothLE 에서 발생한 에러의 에러메시지를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
BluetoothLEErrorEventInfo.errormsg
```

**Setting Syntax**

```javascript
var strErrmsg = e.errormsg;
```

**Remark**

- OS 또는 브라우저에서 전달된 에러메시지를 갖는 속성입니다.
   환경에 따라 동일한 에러에 대해 에러 메시지가 달라질 수 있습니다.

- 에러가 발생한 이유를 확인하려면 e 오브젝트(BluetoothLEErrorEventinfo) 의 reason 속성값을 참조하시기 바랍니다.


---

### eventid

> EventInfo Objects > BluetoothLEErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
BluetoothLEErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### reason

> EventInfo Objects > BluetoothLEErrorEventInfo > Property > reason

**Description**

BluetoothLE 에서 발생한 에러의 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
BluetoothLEErrorEventInfo.reason
```

**Setting Syntax**

```javascript
var nReason = e.reason;
```
- **`10`** — scanStart() 메소드로 스캔을 시작할때 에러가 발생하면 갖는 값입니다.
- **`11`** — scanStart() 메소드의 스캔시간이 초과하여 스캔을 종료할때 에러가 발생하면 갖는 값입니다.
- **`12`** — scanStart() 메소드로 특정 서비스가 제공되는 디바이스를 찾을 때 에러가 발생하면 갖는 값입니다.
- **`20`** — scanStop() 메소드로 스캔을 종료할때 에러가 발생하면 갖는 값입니다.
- **`30`** — connect() 메소드로 디바이스에 연결할때 에러가 발생하면 갖는 값입니다.
- **`40`** — disconnect() 메소드로 디바이스와 연결을 해제할때 에러가 발생하면 갖는 값입니다.
- **`50`** — discoverService() 메소드로 디바이스에서 제공하는 Service 목록 요청을 시작할때 에러가 발생하면 갖는 값입니다.
- **`51`** — discoverService() 메소드로 디바이스에 요청한 Service 목록을 수신할때 에러가 발생하면 갖는 값입니다.
- **`60`** — subscribe() 메소드로 Notification 을 요청할때 에러가 발생하면 갖는 값입니다.
- **`61`** — subscribe() 메소드로 요청한 Notification 을 수신할때 에러가 발생하면 갖는 값입니다.
- **`70`** — unsubscribe() 메소드로 요청한 Notification 을 해제할때 에러가 발생하면 갖는 값입니다.
- **`80`** — readCharacteristic() 메소드로 특정 서비스의 Characteristic 값을 요청할때 에러가 발생하면 갖는 값입니다.
- **`90`** — writeCharacteristic() 메소드로 특정 서비스의 Characteristic 값을 저장할때 에러가 발생하면 갖는 값입니다.


---

## EventInfo Objects > BluetoothLEEventInfo

### BluetoothLEEventInfo

> EventInfo Objects > BluetoothLEEventInfo

**Description**

연결된 Peripheral 디바이스로 요청이 성공했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- Peripheral 디바이스에서 Notification 이 전달되었을 때 발생하는 이벤트에도 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| message | 연결된 Peripheral 디바이스에서 전달된 Notification 또는 Characteristic 값을 갖는 읽기전용 속성입니다. |
| reason | BluetoothLE 에서 이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다. |
| serviceuuid | 연결된 Peripheral 디바이스가 제공하는 서비스의 UUID 값를 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > BluetoothLEEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
BluetoothLEEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### message

> EventInfo Objects > BluetoothLEEventInfo > Property > message

**Description**

연결된 Peripheral 디바이스에서 전달된 Notification 또는 Characteristic 값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
BluetoothLEEventInfo.message
```

**Setting Syntax**

```javascript
var strMessage = e.message
```
- **`message`** — onsubscriberesult 이벤트일 때 연결된 디바이스에서 전달된 Notification 값을 갖습니다.

onsuccess 이벤트(e.reason 값이 80)일 때 Characteristic 값을 갖습니다.

**Remark**

- onsubscriberesult 이벤트와 readCharacteristic() 메소드 실행으로 발생한 onsuccess 이벤트에서만 유효한 값을 갖는 속성입니다.

- readCharacteristic() 메소드 실행으로 발생한 onsuccess 이벤트(e.reason 값이 80)가 아니면 message 속성은 undefind 값을 갖습니다.


---

### reason

> EventInfo Objects > BluetoothLEEventInfo > Property > reason

**Description**

BluetoothLE 에서 이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
BluetoothLEEventInfo.reason
```

**Setting Syntax**

```javascript
var nReason = e.reason;
```
- **`10`** — scanStart() 메소드로 스캔을 시작했을때 갖는 값입니다.
- **`11`** — scanStart() 메소드의 스캔시간이 초과하여 스캔이 종료됐을때 갖는 값입니다.
- **`12`** — scanStart() 메소드로 특정 서비스가 제공되는 디바이스를 찾았을때 갖는 값입니다.
- **`20`** — scanStop() 메소드로 스캔이 종료됐을때 갖는 값입니다.
- **`30`** — connect() 메소드로 디바이스에 연결했을때 갖는 값입니다.
- **`40`** — disconnect() 메소드로 디바이스와 연결이 해제됐을때 갖는 값입니다.
- **`50`** — discoverService() 메소드로 디바이스에서 제공하는 Service 목록 요청이 시작됐을때 갖는 값입니다.
- **`51`** — discoverService() 메소드로 디바이스에 요청한 Service 목록을 수신했을때 갖는 값입니다.
- **`60`** — subscribe() 메소드로 Notification 을 요청했을때 갖는 값입니다.
- **`61`** — subscribe() 메소드로 요청한 Notification 을 수신했을때 갖는 값입니다.
- **`70`** — unsubscribe() 메소드로 요청한 Notification 을 해제했을때 갖는 값입니다.
- **`80`** — readCharacteristic() 메소드로 특정 서비스의 Characteristic 값을 요청했을때 갖는 값입니다.
- **`90`** — writeCharacteristic() 메소드로 특정 서비스의 Characteristic 값을 저장했을때 갖는 값입니다.


---

### serviceuuid

> EventInfo Objects > BluetoothLEEventInfo > Property > serviceuuid

**Description**

연결된 Peripheral 디바이스가 제공하는 서비스의 UUID 값를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
BluetoothLEEventInfo.serviceuuid
```

**Setting Syntax**

```javascript
var strSrvUUID = e.serviceuuid
```
- **`serviceuuid`** — onsuccess 이벤트(e.reason 값이 51)일 때 디바이스가 제공하는 서비스의 UUID 값을 갖습니다.

**Remark**

- discoverService() 메소드를 실행하여 발생한 onsuccess 이벤트(e.reason 값이 51)가 아니면 serviceuuid 속성은 undefined 값을 갖습니다.

- 연결된 Peripheral 디바이스에서 제공하는 서비스가 여러개 일 경우 onsuccess 이벤트가 여러번 발생합니다.
   이 때, 발생하는 onsuccess 이벤트마다 다른 값의 UUID 가 serviceuuid 속성으로 전달됩니다.


---

## EventInfo Objects > BluetoothLEScanDeviceEventInfo

### BluetoothLEScanDeviceEventInfo

> EventInfo Objects > BluetoothLEScanDeviceEventInfo

**Description**

게시(Advertisement)중인 Peripheral 디바이스가 검색되었을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| deviceaddress | 게시(Advertisement)중인 Peripheral 디바이스의 주소값을 갖는 읽기전용 속성입니다. |
| devicename | 게시(Advertisement)중인 Peripheral 디바이스의 이름을 갖는 읽기전용 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### deviceaddress

> EventInfo Objects > BluetoothLEScanDeviceEventInfo > Property > deviceaddress

**Description**

게시(Advertisement)중인 Peripheral 디바이스의 주소값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
BluetoothLEScanDeviceEventInfo.deviceaddress
```

**Setting Syntax**

```javascript
var strDeviceAddress = e.deviceaddress
```
- **`deviceaddress`** — Windows NRE 와 Android NRE 는 MAC Address 값을 갖습니다.

iOS/iPadOS NRE 는 검색된 디바이스 목록의 Index 값을 갖습니다.

macOS NRE 는 OS 가 부여한 UUID 값을 갖습니다.

**Remark**

- 게시(Advertisement)중인 Peripheral 디바이스가 여러개 일 경우 onscanresult 이벤트가 여러번 발생합니다.
   이 때, 발생하는 onscanresult 이벤트마다 검색된 디바이스의 주소가 deviceaddress 속성으로 전달됩니다.


---

### devicename

> EventInfo Objects > BluetoothLEScanDeviceEventInfo > Property > devicename

**Description**

게시(Advertisement)중인 Peripheral 디바이스의 이름을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
BluetoothLEScanDeviceEventInfo.devicename
```

**Setting Syntax**

```javascript
var strDeviceName = e.devicename
```
- **`devicename`** — Android NRE 이면 Advertisement Name 값을 갖습니다.

Android NRE 이외의 환경에서는 Device Name 값을 갖습니다.

**Remark**

- 게시(Advertisement)중인 Peripheral 디바이스가 여러개 일 경우 onscanresult 이벤트가 여러번 발생합니다.
   이 때, 발생하는 onscanresult 이벤트마다 검색된 디바이스 이름이 devicename 속성으로 전달됩니다.


---

### eventid

> EventInfo Objects > BluetoothLEScanDeviceEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
BluetoothLEScanDeviceEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

## EventInfo Objects > CalendarCloseUpEventInfo

### CalendarCloseUpEventInfo

> EventInfo Objects > CalendarCloseUpEventInfo

**Description**

Calendar 컴포넌트에서 화면에 표시된 팝업달력이 닫힐 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- Calendar 컴포넌트에서 화면에 표시된 팝업달력을 선택하거나 다른 영역을 클릭했을 때 닫히게 됩니다.

- Calendar 컴포넌트의 type 속성값이 "normal" 일 때만 연관 이벤트가 발생합니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| posttext | 새로 변경된 text 값을 갖는 속성입니다. |
| postvalue | 새로 변경된 value 값을 갖는 속성입니다. |
| pretext | 변경 전 text 값을 갖는 속성입니다. |
| prevalue | 변경 전 value 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > CalendarCloseUpEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
CalendarCloseUpEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > CalendarCloseUpEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
CalendarCloseUpEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > CalendarCloseUpEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
CalendarCloseUpEventInfo.fromreferenceobject
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

### posttext

> EventInfo Objects > CalendarCloseUpEventInfo > Property > posttext

**Description**

새로 변경된 text 값을 갖는 속성입니다.

**Syntax**

```javascript
CalendarCloseUpEventInfo.posttext
```

**Setting Syntax**

```javascript
var strPosttext = e.posttext;
```

**Remark**

- Calendar 컴포넌트의 dateformat 속성값에 설정된 형식에 맞게 변환된 날짜값을 갖습니다.


---

### postvalue

> EventInfo Objects > CalendarCloseUpEventInfo > Property > postvalue

**Description**

새로 변경된 value 값을 갖는 속성입니다.

**Syntax**

```javascript
CalendarCloseUpEventInfo.postvalue
```

**Setting Syntax**

```javascript
var strPostvalue = e.postvalue;
```


---

### pretext

> EventInfo Objects > CalendarCloseUpEventInfo > Property > pretext

**Description**

변경 전 text 값을 갖는 속성입니다.

**Syntax**

```javascript
CalendarCloseUpEventInfo.pretext
```

**Setting Syntax**

```javascript
var strPretext = e.pretext;
```

**Remark**

- Calendar 컴포넌트의 dateformat 속성값에 설정된 형식에 맞게 변환된 날짜값을 갖습니다.


---

### prevalue

> EventInfo Objects > CalendarCloseUpEventInfo > Property > prevalue

**Description**

변경 전 value 값을 갖는 속성입니다.

**Syntax**

```javascript
CalendarCloseUpEventInfo.prevalue
```

**Setting Syntax**

```javascript
var strPrevalue = e.prevalue;
```


---

## EventInfo Objects > CalendarDayClickEventInfo

### CalendarDayClickEventInfo

> EventInfo Objects > CalendarDayClickEventInfo

**Description**

달력형태가 표시되는 Calendar 컴포넌트에서 날짜를 선택하면 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| date | Calendar 컴포넌트에서 선택한 날짜 정보를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |


---

### 속성 (Properties)

### date

> EventInfo Objects > CalendarDayClickEventInfo > Property > date

**Description**

Calendar 컴포넌트에서 선택한 날짜 정보를 갖는 속성입니다.

**Syntax**

```javascript
CalendarDayClickEventInfo.date
```

**Setting Syntax**

```javascript
var strDate = e.date;
```

**Remark**

- Calendar 컴포넌트의 dateformat 속성값에 설정된 형식에 맞게 변환된 날짜값을 갖습니다.


---

### eventid

> EventInfo Objects > CalendarDayClickEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
CalendarDayClickEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > CalendarDayClickEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
CalendarDayClickEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > CalendarDayClickEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
CalendarDayClickEventInfo.fromreferenceobject
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

## EventInfo Objects > CalendarSpinEventInfo

### CalendarSpinEventInfo

> EventInfo Objects > CalendarSpinEventInfo

**Description**

type 속성값이 "spin" 인 Calendar 컴포넌트에서 스핀버튼을 클릭했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| posttext | 새로 변경된 text 값을 갖는 속성입니다. |
| postvalue | 새로 변경된 value 값을 갖는 속성입니다. |
| pretext | 변경 전 text 값을 갖는 속성입니다. |
| prevalue | 변경 전 value 값을 갖는 속성입니다. |
| up | 이벤트 발생의 원인이 된 버튼의 정보를 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > CalendarSpinEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
CalendarSpinEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > CalendarSpinEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
CalendarSpinEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > CalendarSpinEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
CalendarSpinEventInfo.fromreferenceobject
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

### posttext

> EventInfo Objects > CalendarSpinEventInfo > Property > posttext

**Description**

새로 변경된 text 값을 갖는 속성입니다.

**Syntax**

```javascript
CalendarSpinEventInfo.posttext
```

**Setting Syntax**

```javascript
var strPosttext = e.posttext;
```

**Remark**

- Calendar 컴포넌트의 dateformat 속성값에 설정된 형식에 맞게 변환된 날짜값을 갖습니다.


---

### postvalue

> EventInfo Objects > CalendarSpinEventInfo > Property > postvalue

**Description**

새로 변경된 value 값을 갖는 속성입니다.

**Syntax**

```javascript
CalendarSpinEventInfo.postvalue
```

**Setting Syntax**

```javascript
var strPostvalue = e.postvalue;
```


---

### pretext

> EventInfo Objects > CalendarSpinEventInfo > Property > pretext

**Description**

변경 전 text 값을 갖는 속성입니다.

**Syntax**

```javascript
CalendarSpinEventInfo.pretext
```

**Setting Syntax**

```javascript
var strPretext = e.pretext;
```

**Remark**

- Calendar 컴포넌트의 dateformat 속성값에 설정된 형식에 맞게 변환된 날짜값을 갖습니다.


---

### prevalue

> EventInfo Objects > CalendarSpinEventInfo > Property > prevalue

**Description**

변경 전 value 값을 갖는 속성입니다.

**Syntax**

```javascript
CalendarSpinEventInfo.prevalue
```

**Setting Syntax**

```javascript
var strPrevalue = e.prevalue;
```


---

### up

> EventInfo Objects > CalendarSpinEventInfo > Property > up

**Description**

이벤트 발생의 원인이 된 버튼의 정보를 갖는 속성입니다.

**Syntax**

```javascript
CalendarSpinEventInfo.up
```

**Setting Syntax**

```javascript
var bUp = e.up;
```
- **`"0"`** — Calendar 컴포넌트의 spindownbutton 이 클릭되어 이벤트가 발생했을 때 갖는 값입니다.
- **`"1"`** — Calendar 컴포넌트의 spinupbutton 이 클릭되어 이벤트가 발생했을 때 갖는 값입니다.

**Remark**

- Calendar 컴포넌트에서 onspin 이벤트는 type 속성값이 "spin" 일때만 발생합니다.


---

## EventInfo Objects > CameraErrorEventInfo

### CameraErrorEventInfo

> EventInfo Objects > CameraErrorEventInfo

**Description**

모바일 기기의 카메라 앱과 연동에 실패했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- 카메라 앱 동작이 중단되거나 촬영된 이미지 얻기에 실패했을 때 이벤트가 발생합니다.

**Property**

| Name | Description |
| --- | --- |
| errormsg | 발생한 에러에 대한 에러메시지를 갖는 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| statuscode | 발생한 에러에 대한 에러코드값을 갖는 속성입니다. |


---

### 속성 (Properties)

### errormsg

> EventInfo Objects > CameraErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러메시지를 갖는 속성입니다.

**Syntax**

```javascript
CameraErrorEventInfo.errormsg
```

**Setting Syntax**

- **`"00001"`** — Parameter Error
- **`"8000"`** — No Camera Available (Android 사용안함)
- **`"8001"`** — Camera Application Cancel
- **`"8002"`** — IO Exception File does Not exist
- **`"8003"`** — IO Exception File Memory Error


---

### errortype

> EventInfo Objects > CameraErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
CameraErrorEventInfo.errortype
```

**Setting Syntax**

- **`"EvalError"`** — 현재 버전에서 발생하지 않지만 이전 버전과의 호환성을 유지하기 위해 정의
- **`"RangeError"`** — 숫자값이 허용된 범위를 넘어선 경우
- **`"ReferenceError"`** — 참조값이 유효하지 않은 경우
- **`"SyntaxError"`** — 파싱에 문제가 있을 경우
- **`"TypeError"`** — 피연산자의 자료형이 허용된 범위가 아닌 경우
- **`"URIError"`** — 전역 URI 처리 함수 중 하나가 해당 정의와 호환되지 않는 방식으로 사용된 경우
- **`"NativeError"`** — 모든 Native Error 인 경우
- **`"CommunicationError"`** — 통신시 발생한 에러인 경우
- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우


---

### eventid

> EventInfo Objects > CameraErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
CameraErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### statuscode

> EventInfo Objects > CameraErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대한 에러코드값을 갖는 속성입니다.

**Syntax**

```javascript
CameraErrorEventInfo.statuscode
```

**Setting Syntax**

- **`"00001"`** — Parameter Error
- **`"8000"`** — No Camera Available (Android 사용안함)
- **`"8001"`** — Camera Application Cancel
- **`"8002"`** — IO Exception File does Not exist
- **`"8003"`** — IO Exception File Memory Error


---

## EventInfo Objects > CameraEventInfo

### CameraEventInfo

> EventInfo Objects > CameraEventInfo

**Description**

모바일 기기의 카메라 앱과 연동하여 이미지 얻기에 성공했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| imagedata | 카메라 앱으로 촬영 후 전달된 이미지 오브젝트를 갖는 읽기전용 속성입니다. |
| imageheight | 카메라 앱을 통해 얻은 이미지의 높이값을 갖는 속성입니다. |
| imagewidth | 카메라 앱을 통해 얻은 이미지의 너비값을 갖는 속성입니다. |
| reason | 이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다. |
| url | 카메라 앱을 통해 얻은 이미지의 위치정보를 URL 형식으로 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > CameraEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
CameraEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### imagedata

> EventInfo Objects > CameraEventInfo > Property > imagedata

**Description**

카메라 앱으로 촬영 후 전달된 이미지 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
CameraEventInfo.imagedata
```

**Remark**

- 카메라 앱으로 촬영된 이미지를 모바일 기기에 저장하지 않고 전달받은 경우에 설정되는 속성입니다.

- Camera 오브젝트의 gettype 속성값이 "imagedata" 일 때 값이 설정되는 속성입니다.


---

### imageheight

> EventInfo Objects > CameraEventInfo > Property > imageheight

**Description**

카메라 앱을 통해 얻은 이미지의 높이값을 갖는 속성입니다.

**Syntax**

```javascript
CameraEventInfo.imageheight
```


---

### imagewidth

> EventInfo Objects > CameraEventInfo > Property > imagewidth

**Description**

카메라 앱을 통해 얻은 이미지의 너비값을 갖는 속성입니다.

**Syntax**

```javascript
CameraEventInfo.imagewidth
```


---

### reason

> EventInfo Objects > CameraEventInfo > Property > reason

**Description**

이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
CameraEventInfo.reason
```

**Setting Syntax**

- **`0`** — 카메라 앱이 정상적으로 종료되고, 이미지를 얻는데 성공하여 이벤트가 발생했을 때 갖는 값입니다.
- **`1`** — 카메라 앱이 취소되어서 이벤트가 발생했을 때 갖는 값입니다.


---

### url

> EventInfo Objects > CameraEventInfo > Property > url

**Description**

카메라 앱을 통해 얻은 이미지의 위치정보를 URL 형식으로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
CameraEventInfo.url
```

**Remark**

- Camera 오브젝트의 gettype 속성값이 "url" 일 때 값이 설정되는 속성입니다.


---

## EventInfo Objects > ChangeEventInfo

### ChangeEventInfo

> EventInfo Objects > ChangeEventInfo

**Description**

컴포넌트의 value 속성값이 변경되면 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| posttext | 새로 변경된 text 값을 갖는 속성입니다. |
| postvalue | 새로 변경된 value 값을 갖는 속성입니다. |
| pretext | 변경 전 text 값을 갖는 속성입니다. |
| prevalue | 변경 전 value 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > ChangeEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ChangeEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > ChangeEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ChangeEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > ChangeEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
ChangeEventInfo.fromreferenceobject
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

### posttext

> EventInfo Objects > ChangeEventInfo > Property > posttext

**Description**

새로 변경된 text 값을 갖는 속성입니다.

**Syntax**

```javascript
ChangeEventInfo.posttext
```

**Setting Syntax**

```javascript
var strPosttext = e.posttext;
```


---

### postvalue

> EventInfo Objects > ChangeEventInfo > Property > postvalue

**Description**

새로 변경된 value 값을 갖는 속성입니다.

**Syntax**

```javascript
ChangeEventInfo.postvalue
```

**Setting Syntax**

```javascript
var strPostvalue = e.postvalue;
```


---

### pretext

> EventInfo Objects > ChangeEventInfo > Property > pretext

**Description**

변경 전 text 값을 갖는 속성입니다.

**Syntax**

```javascript
ChangeEventInfo.pretext
```

**Setting Syntax**

```javascript
var strPretext = e.pretext;
```


---

### prevalue

> EventInfo Objects > ChangeEventInfo > Property > prevalue

**Description**

변경 전 value 값을 갖는 속성입니다.

**Syntax**

```javascript
ChangeEventInfo.prevalue
```

**Setting Syntax**

```javascript
var strPrevalue = e.prevalue;
```


---

## EventInfo Objects > CheckBoxChangedEventInfo

### CheckBoxChangedEventInfo

> EventInfo Objects > CheckBoxChangedEventInfo

**Description**

CheckBox 컴포넌트의 체크 상태값이 바뀐 후 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| postvalue | 새로 변경된 value 값을 갖는 속성입니다. |
| prevalue | 변경 전 value 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > CheckBoxChangedEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
CheckBoxChangedEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > CheckBoxChangedEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
CheckBoxChangedEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > CheckBoxChangedEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
CheckBoxChangedEventInfo.fromreferenceobject
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

### postvalue

> EventInfo Objects > CheckBoxChangedEventInfo > Property > postvalue

**Description**

새로 변경된 value 값을 갖는 속성입니다.

**Syntax**

```javascript
CheckBoxChangedEventInfo.postvalue
```


---

### prevalue

> EventInfo Objects > CheckBoxChangedEventInfo > Property > prevalue

**Description**

변경 전 value 값을 갖는 속성입니다.

**Syntax**

```javascript
CheckBoxChangedEventInfo.prevalue
```


---

## EventInfo Objects > ClickEventInfo

### ClickEventInfo

> EventInfo Objects > ClickEventInfo

**Description**

컴포넌트 영역 내에서 마우스 왼쪽버튼을 클릭했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| button | 이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다. |
| canvasx | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| canvasy | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| clientx | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| clienty | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| screenx | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| screeny | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |


---

### 속성 (Properties)

### altkey

> EventInfo Objects > ClickEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ClickEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### button

> EventInfo Objects > ClickEventInfo > Property > button

**Description**

이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ClickEventInfo.button
```

**Setting Syntax**

```javascript
var strButton = e.button;
```
- **`"none"`** — 마우스 버튼에 의해 발생한 이벤트가 아닌 경우 갖는 값입니다.
- **`"lbutton"`** — 마우스의 왼쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"rbutton"`** — 마우스의 오른쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"mbutton"`** — 마우스의 가운데 버튼(Wheel)에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton1"`** — 마우스의 첫번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton2"`** — 마우스의 두번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"touch"`** — 터치에 의해 이벤트가 발생했을 때 갖는 값입니다.


---

### canvasx

> EventInfo Objects > ClickEventInfo > Property > canvasx

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ClickEventInfo.canvasx
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### canvasy

> EventInfo Objects > ClickEventInfo > Property > canvasy

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ClickEventInfo.canvasy
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### clientx

> EventInfo Objects > ClickEventInfo > Property > clientx

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ClickEventInfo.clientx
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### clienty

> EventInfo Objects > ClickEventInfo > Property > clienty

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ClickEventInfo.clienty
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### ctrlkey

> EventInfo Objects > ClickEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ClickEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### eventid

> EventInfo Objects > ClickEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ClickEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > ClickEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ClickEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > ClickEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
ClickEventInfo.fromreferenceobject
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

### metakey

> EventInfo Objects > ClickEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ClickEventInfo.metakey
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

### screenx

> EventInfo Objects > ClickEventInfo > Property > screenx

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ClickEventInfo.screenx
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### screeny

> EventInfo Objects > ClickEventInfo > Property > screeny

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ClickEventInfo.screeny
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 y 좌표를 계산합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다.
  때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.


---

### shiftkey

> EventInfo Objects > ClickEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ClickEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

## EventInfo Objects > CloseEventInfo

### CloseEventInfo

> EventInfo Objects > CloseEventInfo

**Description**

Frame 또는 Form 이 종료되기 전에 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| stopPropagation | 현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > CloseEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
CloseEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > CloseEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
CloseEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > CloseEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
CloseEventInfo.fromreferenceobject
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

### 메서드 (Methods)

### stopPropagation

> EventInfo Objects > CloseEventInfo > Method > stopPropagation

**Description**

현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다.

**Syntax**

```javascript
CloseEventInfo.stopPropagation()
```

**Return**

없음


---

## EventInfo Objects > ComboCloseUpEventInfo

### ComboCloseUpEventInfo

> EventInfo Objects > ComboCloseUpEventInfo

**Description**

Combo 컴포넌트에서 화면에 표시된 아이템 리스트가 닫힐 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- Combo 컴포넌트에서 화면에 표시된 아이템 리스트는 아이템을 선택하거나 다른 영역을 클릭했을 때 닫히게 됩니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| isselect | 아이템 선택에 의해 아이템 리스트가 닫혔는지 여부를 갖는 속성입니다. |
| postindex | 새로 변경된 아이템의 인덱스값을 갖는 속성입니다. |
| posttext | 새로 변경된 아이템의 text 값을 갖는 속성입니다. |
| postvalue | 새로 변경된 아이템의 value 값을 갖는 속성입니다. |
| preindex | 변경 전 아이템의 인덱스값을 갖는 속성입니다. |
| pretext | 변경 전 아이템의 text 값을 갖는 속성입니다. |
| prevalue | 변경 전 아이템의 value 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > ComboCloseUpEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ComboCloseUpEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > ComboCloseUpEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ComboCloseUpEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > ComboCloseUpEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
ComboCloseUpEventInfo.fromreferenceobject
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

### isselect

> EventInfo Objects > ComboCloseUpEventInfo > Property > isselect

**Description**

아이템 선택에 의해 아이템 리스트가 닫혔는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ComboCloseUpEventInfo.isselect
```

**Setting Syntax**

```javascript
var bIssel = e.isselect ;
```
- **`"true"`** — 아이템 선택에 의해 아이템 리스트가 닫혀서 이벤트가 발생했을 경우 갖는 값입니다.
- **`"false"`** — 아이템 리스트 바깥쪽 영역 선택에 의해 리스트가 닫혀서 이벤트가 발생했을 경우 갖는 값입니다.

**Remark**

- Combo 컴포넌트에서 화면에 표시된 아이템 리스트는 아이템을 선택하거나 다른 영역을 클릭했을 때 닫히게 됩니다.


---

### postindex

> EventInfo Objects > ComboCloseUpEventInfo > Property > postindex

**Description**

새로 변경된 아이템의 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
ComboCloseUpEventInfo.postindex
```

**Setting Syntax**

```javascript
var nPostIdx = e.postindex;
```


---

### posttext

> EventInfo Objects > ComboCloseUpEventInfo > Property > posttext

**Description**

새로 변경된 아이템의 text 값을 갖는 속성입니다.

**Syntax**

```javascript
ComboCloseUpEventInfo.posttext
```

**Setting Syntax**

```javascript
var strPosttext = e.posttext;
```


---

### postvalue

> EventInfo Objects > ComboCloseUpEventInfo > Property > postvalue

**Description**

새로 변경된 아이템의 value 값을 갖는 속성입니다.

**Syntax**

```javascript
ComboCloseUpEventInfo.postvalue
```

**Setting Syntax**

```javascript
var strPostvalue = e.postvalue;
```


---

### preindex

> EventInfo Objects > ComboCloseUpEventInfo > Property > preindex

**Description**

변경 전 아이템의 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
ComboCloseUpEventInfo.preindex
```

**Setting Syntax**

```javascript
var nPreIdx = e.preindex ;
```


---

### pretext

> EventInfo Objects > ComboCloseUpEventInfo > Property > pretext

**Description**

변경 전 아이템의 text 값을 갖는 속성입니다.

**Syntax**

```javascript
ComboCloseUpEventInfo.pretext
```

**Setting Syntax**

```javascript
var strPretext = e.pretext;
```


---

### prevalue

> EventInfo Objects > ComboCloseUpEventInfo > Property > prevalue

**Description**

변경 전 아이템의 value 값을 갖는 속성입니다.

**Syntax**

```javascript
ComboCloseUpEventInfo.prevalue
```

**Setting Syntax**

```javascript
var strPrevalue = e.prevalue;
```


---

## EventInfo Objects > ContactSetErrorEventInfo

### ContactSetErrorEventInfo

> EventInfo Objects > ContactSetErrorEventInfo

**Description**

모바일 기기에서 연락처 정보의 처리가 실패했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| errormsg | 발생한 에러에 대한 에러메시지를 갖는 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| statuscode | 발생한 에러에 대한 에러코드값을 갖는 속성입니다. |


---

### 속성 (Properties)

### errormsg

> EventInfo Objects > ContactSetErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러메시지를 갖는 속성입니다.

**Syntax**

```javascript
ContactSetErrorEventInfo.errormsg
```

**Setting Syntax**

- **`"00001"`** — Parameter Error
- **`"9000"`** — unknown Error
- **`"9001"`** — DataBase Error


---

### errortype

> EventInfo Objects > ContactSetErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
ContactSetErrorEventInfo.errortype
```

**Setting Syntax**

- **`"EvalError"`** — 현재 버전에서 발생하지 않지만 이전 버전과의 호환성을 유지하기 위해 정의
- **`"RangeError"`** — 숫자값이 허용된 범위를 넘어선 경우
- **`"ReferenceError"`** — 참조값이 유효하지 않은 경우
- **`"SyntaxError"`** — 파싱에 문제가 있을 경우
- **`"TypeError"`** — 피연산자의 자료형이 허용된 범위가 아닌 경우
- **`"URIError"`** — 전역 URI 처리 함수 중 하나가 해당 정의와 호환되지 않는 방식으로 사용된 경우
- **`"NativeError"`** — 모든 Native Error 인 경우
- **`"CommunicationError"`** — 통신시 발생한 에러인 경우
- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우


---

### eventid

> EventInfo Objects > ContactSetErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ContactSetErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### statuscode

> EventInfo Objects > ContactSetErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대한 에러코드값을 갖는 속성입니다.

**Syntax**

```javascript
ContactSetErrorEventInfo.statuscode
```

**Setting Syntax**

- **`"00001"`** — Parameter Error
- **`"9000"`** — unknown Error
- **`"9001"`** — DataBase Error


---

## EventInfo Objects > ContactSetEventInfo

### ContactSetEventInfo

> EventInfo Objects > ContactSetEventInfo

**Description**

모바일 기기에서 연락처 정보의 처리가 성공했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| contacts | 모바일 기기의 연락처 데이터 중 검색된 Contact 오브젝트 배열을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| reason | 이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### contacts

> EventInfo Objects > ContactSetEventInfo > Property > contacts

**Description**

모바일 기기의 연락처 데이터 중 검색된 Contact 오브젝트 배열을 갖는 속성입니다.

**Syntax**

```javascript
ContactSetEventInfo.contacts
```


---

### eventid

> EventInfo Objects > ContactSetEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ContactSetEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### reason

> EventInfo Objects > ContactSetEventInfo > Property > reason

**Description**

이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ContactSetEventInfo.reason
```

**Setting Syntax**

- **`1`** — query() 메소드 수행에 의해 이벤트 발생 시 갖는 값입니다.
- **`2`** — append() 메소드 수행에 의해 이벤트 발생 시 갖는 값입니다.
- **`3`** — update() 메소드 수행에 의해 이벤트 발생 시 갖는 값입니다.
- **`4`** — delete() 메소드 수행에 의해 이벤트 발생 시 갖는 값입니다.


---

## EventInfo Objects > ContextMenuEventInfo

### ContextMenuEventInfo

> EventInfo Objects > ContextMenuEventInfo

**Description**

컴포넌트의 편집영역에 마우스 오른쪽 마우스 클릭 시 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- 모바일 기기의 경우 터치를 길게하면 오른쪽 마우스 클릭과 같은 효과가 발생합니다.

- WRE 실행 시 컴포넌트 텍스트 편집 영역에서 메뉴키를 입력하면 마우스 클릭과 같은 효과가 발생합니다. 
  컨텍스트 메뉴는 caret 위치를 기준으로 표시됩니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| button | 이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다. |
| canvasx | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| canvasy | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| clientx | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| clienty | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| screenx | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| screeny | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| preventDefault | 현재 이벤트의 Default Action 을 취소하는 메소드입니다. |


---

### 속성 (Properties)

### altkey

> EventInfo Objects > ContextMenuEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ContextMenuEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### button

> EventInfo Objects > ContextMenuEventInfo > Property > button

**Description**

이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ContextMenuEventInfo.button
```

**Setting Syntax**

```javascript
var strButton = e.button;
```
- **`"none"`** — 마우스 버튼에 의해 발생한 이벤트가 아닌 경우 갖는 값입니다.
- **`"lbutton"`** — 마우스의 왼쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"rbutton"`** — 마우스의 오른쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"mbutton"`** — 마우스의 가운데 버튼(Wheel)에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton1"`** — 마우스의 첫번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton2"`** — 마우스의 두번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"touch"`** — 터치에 의해 이벤트가 발생했을 때 갖는 값입니다.


---

### canvasx

> EventInfo Objects > ContextMenuEventInfo > Property > canvasx

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ContextMenuEventInfo.canvasx
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### canvasy

> EventInfo Objects > ContextMenuEventInfo > Property > canvasy

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ContextMenuEventInfo.canvasy
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### clientx

> EventInfo Objects > ContextMenuEventInfo > Property > clientx

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ContextMenuEventInfo.clientx
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### clienty

> EventInfo Objects > ContextMenuEventInfo > Property > clienty

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ContextMenuEventInfo.clienty
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### ctrlkey

> EventInfo Objects > ContextMenuEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ContextMenuEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### eventid

> EventInfo Objects > ContextMenuEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ContextMenuEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > ContextMenuEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ContextMenuEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > ContextMenuEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
ContextMenuEventInfo.fromreferenceobject
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

### metakey

> EventInfo Objects > ContextMenuEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ContextMenuEventInfo.metakey
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

### screenx

> EventInfo Objects > ContextMenuEventInfo > Property > screenx

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ContextMenuEventInfo.screenx
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### screeny

> EventInfo Objects > ContextMenuEventInfo > Property > screeny

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ContextMenuEventInfo.screeny
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 y 좌표를 계산합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다.
  때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.


---

### shiftkey

> EventInfo Objects > ContextMenuEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ContextMenuEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### 메서드 (Methods)

### preventDefault

> EventInfo Objects > ContextMenuEventInfo > Method > preventDefault

**Description**

현재 이벤트의 Default Action 을 취소하는 메소드입니다.

**Syntax**

```javascript
ContextMenuEventInfo.preventDefault()
```

**Return**

없음


---

## EventInfo Objects > DataObjectDataChangedEventInfo

### DataObjectDataChangedEventInfo

> EventInfo Objects > DataObjectDataChangedEventInfo

**Description**

DataObject 오브젝트의 data가 변경됐을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| infoarray | 변경 정보를 담고 있는 Infoarray 형식의 배열을 반환합니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > DataObjectDataChangedEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DataObjectDataChangedEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > DataObjectDataChangedEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
DataObjectDataChangedEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > DataObjectDataChangedEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
DataObjectDataChangedEventInfo.fromreferenceobject
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

### infoarray

> EventInfo Objects > DataObjectDataChangedEventInfo > Property > infoarray

**Description**

변경 정보를 담고 있는 Infoarray 형식의 배열을 반환합니다.

**Remark**

- Infoarray 각 속성은 아래 표를 참고하세요.
	
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

## EventInfo Objects > DataObjectErrorEventInfo

### DataObjectErrorEventInfo

> EventInfo Objects > DataObjectErrorEventInfo

**Description**

DataObject 오브젝트에서 데이터 로딩 시 오류가 생겼을때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| errordata | request 메소드 실행 시 설정한 서비스 ID 값을 반환합니다. |
| errormsg | 발생한 에러에 대한 에러메시지를 갖는 속성입니다. |
| errorobj | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| locationuri | 대상 URI가 다른 주소로 변경된 경우 응답메세지 헤더의 Location 필드값을 갖는 속성입니다. |
| requesturi | 통신 중 발생한 오류의 원인이 되는 URI 를 갖는 속성입니다. |
| statuscode | 발생한 에러에 대한 에러코드값을 갖는 속성입니다. |


---

### 속성 (Properties)

### errordata

> EventInfo Objects > DataObjectErrorEventInfo > Property > errordata

**Description**

request 메소드 실행 시 설정한 서비스 ID 값을 반환합니다.

**Syntax**

```javascript
DataObjectErrorEventInfo.errordata
```

**Remark**

request 메소드가 아닌 다른 메소드 실행 후 이벤트가 발생한 경우에는 빈 문자열("")값을 반환합니다.


---

### errormsg

> EventInfo Objects > DataObjectErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러메시지를 갖는 속성입니다.

**Syntax**

```javascript
DataObjectLoadEventInfo.errormsg
```


---

### errorobj

> EventInfo Objects > DataObjectErrorEventInfo > Property > errorobj

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
DataObjectLoadEventInfo.errorobj
```


---

### errortype

> EventInfo Objects > DataObjectErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
DataObjectErrorEventInfo.errortype
```

**Setting Syntax**

- **`"EvalError"`** — 현재 버전에서 발생하지 않지만 이전 버전과의 호환성을 유지하기 위해 정의
- **`"RangeError"`** — 숫자값이 허용된 범위를 넘어선 경우
- **`"ReferenceError"`** — 참조값이 유효하지 않은 경우
- **`"SyntaxError"`** — 파싱에 문제가 있을 경우
- **`"TypeError"`** — 피연산자의 자료형이 허용된 범위가 아닌 경우
- **`"URIError"`** — 전역 URI 처리 함수 중 하나가 해당 정의와 호환되지 않는 방식으로 사용된 경우
- **`"NativeError"`** — 모든 Native Error 인 경우
- **`"CommunicationError"`** — 통신시 발생한 에러인 경우
- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우


---

### eventid

> EventInfo Objects > DataObjectErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DataObjectErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > DataObjectErrorEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
DataObjectErrorEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > DataObjectErrorEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
DataObjectErrorEventInfo.fromreferenceobject
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

### locationuri

> EventInfo Objects > DataObjectErrorEventInfo > Property > locationuri

**Description**

대상 URI가 다른 주소로 변경된 경우 응답메세지 헤더의 Location 필드값을 갖는 속성입니다.

**Syntax**

```javascript
DataObjectLoadEventInfo.serviceid
```

**Remark**

- locationuri 속성은 대상 URI 가 Http/Https Redirection 이 필요한 경우에만 값을 가지며 응답메세지 헤더의 Location 필드 값을 표현합니다.


---

### requesturi

> EventInfo Objects > DataObjectErrorEventInfo > Property > requesturi

**Description**

통신 중 발생한 오류의 원인이 되는 URI 를 갖는 속성입니다.

**Syntax**

```javascript
DataObjectLoadEventInfo.requesturi
```


---

### statuscode

> EventInfo Objects > DataObjectErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대한 에러코드값을 갖는 속성입니다.

**Syntax**

```javascript
DataObjectLoadEventInfo.statuscode
```

**Remark**

- ErrorEventInfo 오브젝트의 statuscode를 참고하세요.

**See Also**

ErrorEventInfo.statuscode


---

## EventInfo Objects > DataObjectEventInfo

### DataObjectEventInfo

> EventInfo Objects > DataObjectEventInfo

**Description**

DataObject 오브젝트에서 request 메소드 호출 후 데이터가 로딩됐을때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| method | request 메소드 실행 시 설정한 method 파라미터 값을 반환합니다. |
| response | 데이터 통신 후 서버에서 받은 데이터값을 갖는 읽기전용 속성입니다. |
| serviceid | 통신 결과를 구분하기 위한 ID 문자열값을 갖는 읽기전용 속성입니다. |
| statuscode | 통신이 성공한 경우 HTTP Status code 정보를 반환합니다. |
| url | 데이터를 로드한 URL 경로값을 갖는 읽기전용 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| preventDefault | 현재 이벤트의 Default Action 을 취소하는 메소드입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > DataObjectEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DataObjectEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > DataObjectEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
DataObjectEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > DataObjectEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
DataObjectEventInfo.fromreferenceobject
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

### method

> EventInfo Objects > DataObjectEventInfo > Property > method

**Description**

request 메소드 실행 시 설정한 method 파라미터 값을 반환합니다.

**Syntax**

```javascript
DataObjectEventInfo.method
```


---

### response

> EventInfo Objects > DataObjectEventInfo > Property > response

**Description**

데이터 통신 후 서버에서 받은 데이터값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DataObjectEventInfo.response
```


---

### serviceid

> EventInfo Objects > DataObjectEventInfo > Property > serviceid

**Description**

통신 결과를 구분하기 위한 ID 문자열값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DataObjectEventInfo.serviceid
```

**Remark**

DataObject 오브젝트의 request 메소드 실행 시 strServiceid 파라미터로 설정한 값을 반환합니다.


---

### statuscode

> EventInfo Objects > DataObjectEventInfo > Property > statuscode

**Description**

통신이 성공한 경우 HTTP Status code 정보를 반환합니다.

**Syntax**

```javascript
DataObjectEventInfo.statuscode
```

**Remark**

코드 값에 대한 설명은 아래 링크를 참고하세요.
https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html


---

### url

> EventInfo Objects > DataObjectEventInfo > Property > url

**Description**

데이터를 로드한 URL 경로값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DataObjectEventInfo.url
```


---

### 메서드 (Methods)

### preventDefault

> EventInfo Objects > DataObjectEventInfo > Method > preventDefault

**Description**

현재 이벤트의 Default Action 을 취소하는 메소드입니다.

**Syntax**

```javascript
DataObjectEventInfo.preventDefault()
```

**Return**

없음


---

## EventInfo Objects > DataObjectLoadDatasetsEventInfo

### DataObjectLoadDatasetsEventInfo

> EventInfo Objects > DataObjectLoadDatasetsEventInfo

**Description**

DataObejct 오브젝트가 Dataset 오브젝트의 binddataobject 속성값으로 설정된 경우 Dataset 오브젝트의 데이터 로딩이 처리된 후 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| reason | 이벤트가 발생한 원인의 코드값을 정수로 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > DataObjectLoadDatasetsEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DataObjectLoadDatasetsEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > DataObjectLoadDatasetsEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
DataObjectLoadDatasetsEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > DataObjectLoadDatasetsEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
DataObjectLoadDatasetsEventInfo.fromreferenceobject
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

### reason

> EventInfo Objects > DataObjectLoadDatasetsEventInfo > Property > reason

**Description**

이벤트가 발생한 원인의 코드값을 정수로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DataObjectLoadDatasetsEventInfo.reason
```

**Remark**

이벤트의 발생원인을 알려줍니다.
	
		Constant
		Value
		Description
	

	
		DataObject.REASON_LOAD
		0
		DataObject 오브젝트의 url 속성값으로 설정한 서비스에서 데이터 로드를 완료했을 때 발생하는 값입니다.
	

	
		DataObject.REASON_LOADCONTENT
		1
		DataObject 오브젝트의 data 속성값 설정 시 발생하는 값입니다.
넥사크로 스튜디오에서 직접 설정한 data 속성값은 Form 오브젝트의 onload 이벤트보다 먼저 처리됩니다.
	

	
		DataObject.REASON_REQUEST
		2
		DataObject 오브젝트의 request 메소드 호출 후 데이터 로드가 완료됐을때 발생하는 값입니다. onsuccess 이벤트 발생 후 onload 이벤트가 발생합니다.


---

## EventInfo Objects > DataObjectLoadEventInfo

### DataObjectLoadEventInfo

> EventInfo Objects > DataObjectLoadEventInfo

**Description**

DataObject 오브젝트에서 데이터가 로딩됐을때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| reason | 이벤트가 발생한 원인의 코드값을 정수로 갖는 읽기전용 속성입니다. |
| url | 데이터를 로드한 URL 경로값을 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > DataObjectLoadEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DataObjectLoadEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > DataObjectLoadEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
DataObjectLoadEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > DataObjectLoadEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
DataObjectLoadEventInfo.fromreferenceobject
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

### reason

> EventInfo Objects > DataObjectLoadEventInfo > Property > reason

**Description**

이벤트가 발생한 원인의 코드값을 정수로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DataObjectLoadEventInfo.reason
```

**Remark**

이벤트의 발생원인을 알려줍니다.
	
		Constant
		Value
		Description
	

	
		DataObject.REASON_LOAD
		0
		DataObject 오브젝트의 url 속성값으로 설정한 서비스에서 데이터 로드를 완료했을 때 발생하는 값입니다.
	

	
		DataObject.REASON_LOADCONTENT
		1
		DataObject 오브젝트의 data 속성값 설정 시 발생하는 값입니다.
넥사크로 스튜디오에서 직접 설정한 data 속성값은 Form 오브젝트의 onload 이벤트보다 먼저 처리됩니다.
	

	
		DataObject.REASON_REQUEST
		2
		DataObject 오브젝트의 request 메소드 호출 후 데이터 로드가 완료됐을때 발생하는 값입니다. onsuccess 이벤트 발생 후 onload 이벤트가 발생합니다.


---

### url

> EventInfo Objects > DataObjectLoadEventInfo > Property > url

**Description**

데이터를 로드한 URL 경로값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DataObjectLoadEventInfo.url
```


---

## EventInfo Objects > DataObjectValueChangedEventInfo

### DataObjectValueChangedEventInfo

> EventInfo Objects > DataObjectValueChangedEventInfo

**Description**

DataObject 오브젝트의 value 값이 변경됐을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| dataobjectpath | 값이 변경된 Dataset 오브젝트의 dataobjectpath 속성값입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| index | Dataset 오브젝트에서 값이 변경된 Row index 정보입니다. |
| key | 변경된 key 정보입니다. |
| sourcedatasetid | 값이 변경된 Dataset 오브젝트의 id 속성값입니다. |
| uid | 변경 정보를 식별하기 위한 고유 ID 속성값입니다. |
| value | 변경된 key에 해당하는 value 정보입니다. |


---

### 속성 (Properties)

### dataobjectpath

> EventInfo Objects > DataObjectValueChangedEventInfo > Property > dataobjectpath

**Description**

값이 변경된 Dataset 오브젝트의 dataobjectpath 속성값입니다.

**Syntax**

```javascript
DataObjectValueChangedEventInfo.dataobjectpath
```


---

### eventid

> EventInfo Objects > DataObjectValueChangedEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DataObjectValueChangedEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > DataObjectValueChangedEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
DataObjectValueChangedEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > DataObjectValueChangedEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
DataObjectValueChangedEventInfo.fromreferenceobject
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

### index

> EventInfo Objects > DataObjectValueChangedEventInfo > Property > index

**Description**

Dataset 오브젝트에서 값이 변경된 Row index 정보입니다.

**Syntax**

```javascript
DataObjectValueChangedEventInfo.index
```


---

### key

> EventInfo Objects > DataObjectValueChangedEventInfo > Property > key

**Description**

변경된 key 정보입니다.

**Syntax**

```javascript
DataObjectValueChangedEventInfo.key
```


---

### sourcedatasetid

> EventInfo Objects > DataObjectValueChangedEventInfo > Property > sourcedatasetid

**Description**

값이 변경된 Dataset 오브젝트의 id 속성값입니다.

**Syntax**

```javascript
DataObjectValueChangedEventInfo.sourcedatasetid
```


---

### uid

> EventInfo Objects > DataObjectValueChangedEventInfo > Property > uid

**Description**

변경 정보를 식별하기 위한 고유 ID 속성값입니다.

**Syntax**

```javascript
DataObjectValueChangedEventInfo.uid
```

**Remark**

- removeChangedInfo 메소드를 사용해 특정 데이터를 삭제할 경우 사용합니다.


---

### value

> EventInfo Objects > DataObjectValueChangedEventInfo > Property > value

**Description**

변경된 key에 해당하는 value 정보입니다.

**Syntax**

```javascript
DataObjectValueChangedEventInfo.value
```


---

## EventInfo Objects > DateFieldCloseUpEventInfo

### DateFieldCloseUpEventInfo

> EventInfo Objects > DateFieldCloseUpEventInfo

**Description**

DateField 컴포넌트에서 화면에 표시된 팝업달력이 닫힐 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- DateField 컴포넌트에서 화면에 표시된 팝업달력을 선택하거나 다른 영역을 클릭했을 때 닫히게 됩니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| posttext | 새로 변경된 text 값을 갖는 속성입니다. |
| postvalue | 새로 변경된 value 값을 갖는 속성입니다. |
| pretext | 변경 전 text 값을 갖는 속성입니다. |
| prevalue | 변경 전 value 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > DateFieldCloseUpEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DateFieldCloseUpEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > DateFieldCloseUpEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
DateFieldCloseUpEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > DateFieldCloseUpEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
DateFieldCloseUpEventInfo.fromreferenceobject
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

### posttext

> EventInfo Objects > DateFieldCloseUpEventInfo > Property > posttext

**Description**

새로 변경된 text 값을 갖는 속성입니다.

**Syntax**

```javascript
DateFieldCloseUpEventInfo.posttext
```

**Setting Syntax**

```javascript
var strPosttext = e.posttext;
```

**Remark**

- DateField 컴포넌트의 format 속성값에 설정된 형식에 맞게 변환된 날짜값을 갖습니다.


---

### postvalue

> EventInfo Objects > DateFieldCloseUpEventInfo > Property > postvalue

**Description**

새로 변경된 value 값을 갖는 속성입니다.

**Syntax**

```javascript
DateFieldCloseUpEventInfo.postvalue
```

**Setting Syntax**

```javascript
var strPostvalue = e.postvalue;
```

**Remark**

"yyyyMMdd" 형식의 8자리 날짜값을 갖습니다.


---

### pretext

> EventInfo Objects > DateFieldCloseUpEventInfo > Property > pretext

**Description**

변경 전 text 값을 갖는 속성입니다.

**Syntax**

```javascript
DateFieldCloseUpEventInfo.pretext
```

**Setting Syntax**

```javascript
var strPretext = e.pretext;
```

**Remark**

- DateField 컴포넌트의 format 속성값에 설정된 형식에 맞게 변환된 날짜값을 갖습니다.


---

### prevalue

> EventInfo Objects > DateFieldCloseUpEventInfo > Property > prevalue

**Description**

변경 전 value 값을 갖는 속성입니다.

**Syntax**

```javascript
DateFieldCloseUpEventInfo.prevalue
```

**Setting Syntax**

```javascript
var strPrevalue = e.prevalue;
```

**Remark**

"yyyyMMdd" 형식의 8자리 날짜값을 갖습니다.


---

## EventInfo Objects > DateFieldDayClickEventInfo

### DateFieldDayClickEventInfo

> EventInfo Objects > DateFieldDayClickEventInfo

**Description**

DateField 컴포넌트에서 화면에 표시된 팝업달력에서 날짜를 선택하면 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| date | DateField 컴포넌트에서 선택한 날짜 정보를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |


---

### 속성 (Properties)

### date

> EventInfo Objects > DateFieldDayClickEventInfo > Property > date

**Description**

DateField 컴포넌트에서 선택한 날짜 정보를 갖는 속성입니다.

**Syntax**

```javascript
DateFieldDayClickEventInfo.date
```

**Setting Syntax**

```javascript
var strDate = e.date;
```

**Remark**

- "yyyyMMdd" 형식의 8자리 날짜값을 갖습니다.


---

### eventid

> EventInfo Objects > DateFieldDayClickEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DateFieldDayClickEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > DateFieldDayClickEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
DateFieldDayClickEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > DateFieldDayClickEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
DateFieldDayClickEventInfo.fromreferenceobject
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

## EventInfo Objects > DateRangePickerDayClickEventInfo

### DateRangePickerDayClickEventInfo

> EventInfo Objects > DateRangePickerDayClickEventInfo

**Description**

DateRangePicker 컴포넌트의 날짜를 선택할 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| date | DateRangePicker 컴포넌트에서 선택한 날짜 정보를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| rangeposition | DateRangePicker 컴포넌트에서 선택한 날짜가 시작일자인지 종료일자인지 정보를 갖는 속성입니다. |


---

### 속성 (Properties)

### date

> EventInfo Objects > DateRangePickerDayClickEventInfo > Property > date

**Description**

DateRangePicker 컴포넌트에서 선택한 날짜 정보를 갖는 속성입니다.

**Syntax**

```javascript
DateRangePickerDayClickEventInfo.date
```

**Setting Syntax**

```javascript
var strDate = e.date;
```

**Remark**

- "yyyyMMdd" 형식의 8자리 날짜값을 갖습니다.


---

### eventid

> EventInfo Objects > DateRangePickerDayClickEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DateRangePickerDayClickEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > DateRangePickerDayClickEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
DateRangePickerDayClickEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > DateRangePickerDayClickEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
DateRangePickerDayClickEventInfo.fromreferenceobject
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

### rangeposition

> EventInfo Objects > DateRangePickerDayClickEventInfo > Property > rangeposition

**Description**

DateRangePicker 컴포넌트에서 선택한 날짜가 시작일자인지 종료일자인지 정보를 갖는 속성입니다.

**Syntax**

```javascript
DateRangePickerDayClickEventInfo.rangeposition
```

**Remark**

- 선택한 날짜가 시작일자인 경우에는 "start" 텍스트 값을 갖습니다.
  선택한 날짜가 종료일자인 경우에는 "end" 텍스트 값을 갖습니다.


---

## EventInfo Objects > DeviceButtonEventInfo

### DeviceButtonEventInfo

> EventInfo Objects > DeviceButtonEventInfo

**Description**

Android 기기에서 디바이스 버튼이 눌렸을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| button | Android 디바이스에서 입력된 디바이스 버튼의 종류를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| preventDefault | 현재 이벤트의 Default Action 을 취소하는 메소드입니다. |
| stopPropagation | 현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다. |


---

### 속성 (Properties)

### button

> EventInfo Objects > DeviceButtonEventInfo > Property > button

**Description**

Android 디바이스에서 입력된 디바이스 버튼의 종류를 갖는 속성입니다.

**Syntax**

```javascript
DeviceButtonEventInfo.button
```

**Setting Syntax**

- **`1`** — Android 디바이스에서 "MENU" 버튼이 입력됐을 때 갖는 값입니다.
- **`2`** — Android 디바이스에서 "CANCEL" 버튼이 입력됐을 때 갖는 값입니다.

**Remark**

- Android NRE 일 때만 지원되는 속성입니다.

**Example**



---

### eventid

> EventInfo Objects > DeviceButtonEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DeviceButtonEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > DeviceButtonEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
DeviceButtonEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > DeviceButtonEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
DeviceButtonEventInfo.fromreferenceobject
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

### 메서드 (Methods)

### preventDefault

> EventInfo Objects > DeviceButtonEventInfo > Method > preventDefault

**Description**

현재 이벤트의 Default Action 을 취소하는 메소드입니다.

**Syntax**

```javascript
DeviceButtonEventInfo.preventDefault()
```

**Return**

없음


---

### stopPropagation

> EventInfo Objects > DeviceButtonEventInfo > Method > stopPropagation

**Description**

현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다.

**Syntax**

```javascript
DeviceButtonEventInfo.stopPropagation()
```

**Return**

없음


---

## EventInfo Objects > DevicePermissionEventInfo

### DevicePermissionEventInfo

> EventInfo Objects > DevicePermissionEventInfo

**Description**

권한 요청 및 권한 설정 여부 확인시 사용되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| reason | 이벤트 발생 원인을 나타내는 속성입니다. |
| status | 권한의 설정 상태를 나타내는 속성입니다. |


---

### 속성 (Properties)

### reason

> EventInfo Objects > DevicePermissionEventInfo > Property > reason

**Description**

이벤트 발생 원인을 나타내는 속성입니다.

**Syntax**

```javascript
DevicePermissionEventInfo.reason
```

**Setting Syntax**

- **`100`** — System.checkDevicePermission 
메소드 실행 후 이벤트 발생 시 갖는 값입니다.
- **`200`** — System.requestDevicePermission 
메소드 실행 후 이벤트 발생 시 갖는 값입니다.


---

### status

> EventInfo Objects > DevicePermissionEventInfo > Property > status

**Description**

권한의 설정 상태를 나타내는 속성입니다.

**Syntax**

```javascript
DevicePermissionEventInfo.status
```

**Setting Syntax**

```javascript
// e.status : {"calendar":0, "camera":1}
var val = e.status["camera"]; // 1
```
- **`0`** — nexacro.DevicePermissionStatus.DENIED
권한이 설정되지 않은 상태입니다.
- **`1`** — nexacro.DevicePermissionStatus.GRANTED
권한이 설정된 상태입니다.

**Remark**

- 권한의 설정 상태는 아래와 같은 형태로 권한 종류와 권한 설정 상태를 표시합니다.
 {"calendar":0, "camera":1}


---

## EventInfo Objects > DomParseErrorEventInfo

### DomParseErrorEventInfo

> EventInfo Objects > DomParseErrorEventInfo

**Description**

DomParser 오브젝트의 parseFromString() 메소드 실행중 오류가 생겼을때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| column | 오류가 발생한 위치의 컬럼값을 갖는 읽기전용 속성입니다. |
| description | 오류와 관련된 설명을 갖는 읽기전용 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| line | 오류가 발생한 위치의 라인값을 갖는 읽기전용 속성입니다. |
| message | 오류와 관련된 상세 메시지를 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### column

> EventInfo Objects > DomParseErrorEventInfo > Property > column

**Description**

오류가 발생한 위치의 컬럼값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DomParseErrorEventInfo.column
```


---

### description

> EventInfo Objects > DomParseErrorEventInfo > Property > description

**Description**

오류와 관련된 설명을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DomParseErrorEventInfo.description
```

**Remark**

- Safari 브라우저인 경우 빈문자열("")을 갖습니다.


---

### eventid

> EventInfo Objects > DomParseErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DomParseErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > DomParseErrorEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
DomParseErrorEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > DomParseErrorEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
DomParseErrorEventInfo.fromreferenceobject
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

### line

> EventInfo Objects > DomParseErrorEventInfo > Property > line

**Description**

오류가 발생한 위치의 라인값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DomParseErrorEventInfo.line
```


---

### message

> EventInfo Objects > DomParseErrorEventInfo > Property > message

**Description**

오류와 관련된 상세 메시지를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DomParseErrorEventInfo.message
```


---

## EventInfo Objects > DragEventInfo

### DragEventInfo

> EventInfo Objects > DragEventInfo

**Description**

컴포넌트에서 Drag 액션과 관련하여 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- Drag 액션은 특정한 오브젝트에서 마우스 왼쪽버튼을 누른 상태로 마우스를 움직이는 동작입니다.
  마우스 버튼을 뗄 때까지 Drag 관련 이벤트가 발생합니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| button | 이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다. |
| canvasx | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| canvasy | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| clientx | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| clienty | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| datatype | Drag 액션이 발생한 위치에 대한 정보를 갖는 읽기전용 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| filelist | 어플리케이션 외부에서 파일을 Drag 했을 때 파일의 정보를 배열형태로 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| screenx | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| screeny | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |
| sourceobject | Drag 액션이 처음 발생한 컴포넌트를 갖는 속성입니다. |
| sourcereferenceobject | Drag 액션이 처음 발생한 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| userdata | Drag 관련 이벤트에서 사용자가 값을 설정하여 사용할 수 있는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| preventDefault | 현재 이벤트의 Default Action 을 취소하는 메소드입니다. |
| stopPropagation | 현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다. |


---

### 속성 (Properties)

### altkey

> EventInfo Objects > DragEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
DragEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### button

> EventInfo Objects > DragEventInfo > Property > button

**Description**

이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DragEventInfo.button
```

**Setting Syntax**

```javascript
var strButton = e.button;
```
- **`"none"`** — 마우스 버튼에 의해 발생한 이벤트가 아닌 경우 갖는 값입니다.
- **`"lbutton"`** — 마우스의 왼쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"rbutton"`** — 마우스의 오른쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"mbutton"`** — 마우스의 가운데 버튼(Wheel)에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton1"`** — 마우스의 첫번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton2"`** — 마우스의 두번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"touch"`** — 터치에 의해 이벤트가 발생했을 때 갖는 값입니다.


---

### canvasx

> EventInfo Objects > DragEventInfo > Property > canvasx

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
DragEventInfo.canvasx
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### canvasy

> EventInfo Objects > DragEventInfo > Property > canvasy

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
DragEventInfo.canvasy
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### clientx

> EventInfo Objects > DragEventInfo > Property > clientx

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
DragEventInfo.clientx
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### clienty

> EventInfo Objects > DragEventInfo > Property > clienty

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
DragEventInfo.clienty
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### ctrlkey

> EventInfo Objects > DragEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
DragEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### datatype

> EventInfo Objects > DragEventInfo > Property > datatype

**Description**

Drag 액션이 발생한 위치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DragEventInfo.datatype
```

**Setting Syntax**

```javascript
var strDataType = e.datatype;
```
- **`"text"`** — 어플리케이션 내부의 Drag 액션에 의해 발생한 이벤트일 때 갖는 값입니다.
- **`"file"`** — 어플리케이션 외부에서 파일을 Drag 하여 발생한 이벤트일 때 갖는 값입니다.

**Remark**

- 어플리케이션 외부에서 텍스트를 Drag 한 경우는 Drag 관련 이벤트가 발생하지 않습니다.


---

### eventid

> EventInfo Objects > DragEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DragEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### filelist

> EventInfo Objects > DragEventInfo > Property > filelist

**Description**

어플리케이션 외부에서 파일을 Drag 했을 때 파일의 정보를 배열형태로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DragEventInfo.filelist
```

**Setting Syntax**

```javascript
var objFile0 = e.filelist[0];
```
- **`filelist`** — VirtualFile 오브젝트의 배열로 구성되어 있습니다.

어플리케이션 내부의 Drag 액션에 의한 이벤트인 경우 값을 갖지 않습니다.

**Remark**

◆ web runtime environment 제약

- ondrop 이벤트 외 ondrag, ondragenter, ondragleave, ondragmove 이벤트에서 filelist 속성값이 정확하지 않을 수 있습니다.


---

### fromobject

> EventInfo Objects > DragEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
DragEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > DragEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
DragEventInfo.fromreferenceobject
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

### metakey

> EventInfo Objects > DragEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
DragEventInfo.metakey
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

### screenx

> EventInfo Objects > DragEventInfo > Property > screenx

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
DragEventInfo.screenx
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### screeny

> EventInfo Objects > DragEventInfo > Property > screeny

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
DragEventInfo.screeny
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 y 좌표를 계산합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다.
  때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.


---

### shiftkey

> EventInfo Objects > DragEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
DragEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### sourceobject

> EventInfo Objects > DragEventInfo > Property > sourceobject

**Description**

Drag 액션이 처음 발생한 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
DragEventInfo.sourceobject
```

**Setting Syntax**

```javascript
var objComp = e.sourceobject;
```

**Remark**

- ondrag 이벤트에서 리턴값을 "true" 로 반환한 컴포넌트를 갖습니다.


---

### sourcereferenceobject

> EventInfo Objects > DragEventInfo > Property > sourcereferenceobject

**Description**

Drag 액션이 처음 발생한 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
DragEventInfo.sourcereferenceobject
```

**Setting Syntax**

```javascript
var objComp = e.sourcereferenceobject;
```

**Remark**

- ondrag 이벤트에서 리턴값을 "true" 로 반환한 컴포넌트 또는 서브컨트롤을 갖습니다.

- Calendar 와 같이 서브컨트롤이 있는 컴포넌트에서 서브컨트롤에 의해 이벤트가 발생한 경우 sourcereferenceobject 속성은 서브컨트롤을 갖습니다.
  Button 과 같이 서브컨트롤이 없는 컴포넌트는 해당 컴포넌트를 갖습니다.


---

### userdata

> EventInfo Objects > DragEventInfo > Property > userdata

**Description**

Drag 관련 이벤트에서 사용자가 값을 설정하여 사용할 수 있는 속성입니다.

**Syntax**

```javascript
DragEventInfo.userdata[= varUserData]
```

**Setting Syntax**

```javascript
e.userdata = "userData";
```

**Remark**

- ondrag 이벤트에서 userdata 속성값을 설정하면, 다른 Drag 관련 이벤트 발생 시 설정된 속성값이 유지되어 전달됩니다.

- Drag 가 유지되는 동안만 속성값이 유지되면 Drop 되어 Drag 액션이 종료되면 속성값도 지워집니다.


---

### 메서드 (Methods)

### preventDefault

> EventInfo Objects > DragEventInfo > Method > preventDefault

**Description**

현재 이벤트의 Default Action 을 취소하는 메소드입니다.

**Syntax**

```javascript
DragEventInfo.preventDefault()
```

**Return**

없음


---

### stopPropagation

> EventInfo Objects > DragEventInfo > Method > stopPropagation

**Description**

현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다.

**Syntax**

```javascript
DragEventInfo.stopPropagation()
```

**Return**

없음


---

## EventInfo Objects > DSColChangeEventInfo

### DSColChangeEventInfo

> EventInfo Objects > DSColChangeEventInfo

**Description**

DataSet 오브젝트의 데이터 값이 변경되었을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| col | 값이 변경될 데이터의 Column 인덱스값을 갖는 속성입니다. |
| columnid | 값이 변경될 데이터의 Column ID 값을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| newvalue | 새로 변경될 값을 갖는 속성입니다. |
| oldvalue | 변경되기 전 값을 갖는 속성입니다. |
| row | 값이 변경될 데이터의 Row 인덱스값을 갖는 속성입니다. |


---

### 속성 (Properties)

### col

> EventInfo Objects > DSColChangeEventInfo > Property > col

**Description**

값이 변경될 데이터의 Column 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
DSColChangeEventInfo.col
```

**Setting Syntax**

```javascript
var nCol = e.col;
```


---

### columnid

> EventInfo Objects > DSColChangeEventInfo > Property > columnid

**Description**

값이 변경될 데이터의 Column ID 값을 갖는 속성입니다.

**Syntax**

```javascript
DSColChangeEventInfo.columnid
```

**Setting Syntax**

```javascript
var strColid = e.columnid;
```


---

### eventid

> EventInfo Objects > DSColChangeEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DSColChangeEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > DSColChangeEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
DSColChangeEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > DSColChangeEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
DSColChangeEventInfo.fromreferenceobject
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

### newvalue

> EventInfo Objects > DSColChangeEventInfo > Property > newvalue

**Description**

새로 변경될 값을 갖는 속성입니다.

**Syntax**

```javascript
DSColChangeEventInfo.newvalue[= strNewName]
```

**Setting Syntax**

```javascript
var strNewval = e.newvalue;  

e.newvalue = "New Data";
```

**Remark**

- 사용자가 이벤트내에서 해당 속성값을 변경하면 변경된 값으로 처리됩니다.


---

### oldvalue

> EventInfo Objects > DSColChangeEventInfo > Property > oldvalue

**Description**

변경되기 전 값을 갖는 속성입니다.

**Syntax**

```javascript
DSColChangeEventInfo.oldvalue
```

**Setting Syntax**

```javascript
var strOldval = e.oldvalue;
```


---

### row

> EventInfo Objects > DSColChangeEventInfo > Property > row

**Description**

값이 변경될 데이터의 Row 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
DSColChangeEventInfo.row
```

**Setting Syntax**

```javascript
var nRow = e.row;
```


---

## EventInfo Objects > DSLoadEventInfo

### DSLoadEventInfo

> EventInfo Objects > DSLoadEventInfo

**Description**

DataSet 오브젝트에 데이터가 로딩되었을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| errorcode | 서버에서 수신된 에러코드 또는 성공코드 값을 갖는 속성입니다. |
| errormsg | 서버에서 수신된 에러메시지 또는 성공메시지를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| progressload | 이벤트 발생 시 데이터가 Chunked 방식으로 수신되었는지 여부를 갖는 읽기전용 속성입니다. |
| reason | 이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### errorcode

> EventInfo Objects > DSLoadEventInfo > Property > errorcode

**Description**

서버에서 수신된 에러코드 또는 성공코드 값을 갖는 속성입니다.

**Syntax**

```javascript
DSLoadEventInfo.errorcode
```

**Setting Syntax**

```javascript
var nErrorcode = e.errorcode;
```

**Remark**

- 데이터 로딩에 성공 시 "0" 값을 갖고, 에러 발생 시 서버에서 전송 된 에러코드값을 갖습니다.


---

### errormsg

> EventInfo Objects > DSLoadEventInfo > Property > errormsg

**Description**

서버에서 수신된 에러메시지 또는 성공메시지를 갖는 속성입니다.

**Syntax**

```javascript
DSLoadEventInfo.errormsg
```

**Setting Syntax**

```javascript
var strErrmsg = e.errormsg;
```

**Remark**

- 데이터 로딩에 성공 시 "SUCCESS" 값을 갖고, 에러 발생 시 서버에서 전송 된 에러메시지를 갖습니다.


---

### eventid

> EventInfo Objects > DSLoadEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DSLoadEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > DSLoadEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
DSLoadEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > DSLoadEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
DSLoadEventInfo.fromreferenceobject
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

### progressload

> EventInfo Objects > DSLoadEventInfo > Property > progressload

**Description**

이벤트 발생 시 데이터가 Chunked 방식으로 수신되었는지 여부를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DSLoadEventInfo.progressload
```

**Setting Syntax**

```javascript
var bProgressload = e.progressload
```
- **`true`** — 데이터가 Chunked 되어 여러번에 걸쳐 로드 된 경우 갖는 값입니다.
- **`false`** — 데이터가 한번에 로드 된 경우 갖는 값입니다.

**Remark**

- Chunked 된 데이터가 마지막으로 수신되어 발생한 이벤트인 경우 reason 속성값은 "Dataset.REASON_LOAD" 을 갖고 progressload 속성값은 true 를 갖습니다.


---

### reason

> EventInfo Objects > DSLoadEventInfo > Property > reason

**Description**

이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DSLoadEventInfo.reason
```

**Setting Syntax**

```javascript
var nReason = e.reason;
```

**Remark**

- onload 이벤트의 발생원인을 알려줍니다.

	
		Constant
		Value
		Description
	

	
		Dataset.REASON_LOAD
		0
		Dataset의 Load가 완료되었을 때
	

	
		Dataset.REASON_LOADPROCESS
		1
		Dataset을 Loading 중일 때
	

	
		Dataset.REASON_RESET
		2
		Dataset의 변경사항을 무시하고 이전상태로 Reset되었을 때
	

	
		Dataset.REASON_LOADCONTENT
		3
		ADL 또는 FDL에 정의된 Dataset의 Load가 완료되었을 때. Form의 onload() 이벤트보다 먼저 발생합니다.
	

	
		Dataset.REASON_APPEND
		12
		append() 메소드를 실행했을 때
loadCSV()/loadXML() 메소드의 "bClear" 파라미터값을 "false" 로 설정하고 실행했을 때
	

	
		Dataset.REASON_BINDSOURCE
		90
		Dataset을 Bind 했을 때


---

## EventInfo Objects > DSRowPosChangeEventInfo

### DSRowPosChangeEventInfo

> EventInfo Objects > DSRowPosChangeEventInfo

**Description**

DataSet 오브젝트의 rowposition 속성값이 변경되었을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| newrow | 새로 선택된 Row 의 인덱스값을 갖는 속성입니다. |
| oldrow | 선택되어 있던 Row 의 인덱스값을 갖는 속성입니다. |
| reason | 이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > DSRowPosChangeEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DSRowPosChangeEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > DSRowPosChangeEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
DSRowPosChangeEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > DSRowPosChangeEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
DSRowPosChangeEventInfo.fromreferenceobject
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

### newrow

> EventInfo Objects > DSRowPosChangeEventInfo > Property > newrow

**Description**

새로 선택된 Row 의 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
DSRowPosChangeEventInfo.newrow
```

**Setting Syntax**

```javascript
var nNewrow = e.newrow;
```


---

### oldrow

> EventInfo Objects > DSRowPosChangeEventInfo > Property > oldrow

**Description**

선택되어 있던 Row 의 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
DSRowPosChangeEventInfo.oldrow
```

**Setting Syntax**

```javascript
var nOldrow = e.oldrow;
```

**Remark**

- clear(), deleteAll() 메소드를 사용하여 Row 가 모두 삭제되어 이벤트가 발생한 경우는 "-1" 값을 갖습니다.


---

### reason

> EventInfo Objects > DSRowPosChangeEventInfo > Property > reason

**Description**

이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DSRowPosChangeEventInfo.reason
```

**Setting Syntax**

- **`51`** — DataSet 에서 데이터(Row)의 선택과 rowposition 속성값이 모두 변경된 경우 갖는 값입니다.

"Dataset.REASON_ROWCHANGE " 상수값으로 처리합니다.

* 일반적으로 Grid 에서 Row 선택을 변경하여 DataSet 의 데이터(Row) 선택과 rowposition 값이 변경된 경우입니다.
- **`52`** — DataSet 에서 데이터(Row)의 선택은 변경되지 않고 rowposition 속성값만 변경된 경우 갖는 값입니다.

"Dataset.REASON_ROWINDEXCHANGE" 상수값으로 처리합니다.

* 일반적으로 moveRow() 와 같은 메소드로 선택된 데이터(Row)의 위치가 이동하거나
   DataSet 에 선택된 데이터(Row)보다 이전 데이터(Row)가 삭제되어 선택된 데이터(Row)의 인덱스만 변경된 경우입니다.
- **`53`** — DataSet 에서 데이터(Row)의 선택은 변경되었지만 rowposition 속성값은 변경되지 않은 경우 갖는 값입니다. 

"Dataset.REASON_ROWOBJECTCHANGE" 상수값으로 처리합니다.

* 일반적으로 DataSet 에서 선택된 데이터(Row)가 삭제되어 다음 데이터(Row)가 선택된 경우입니다.


---

## EventInfo Objects > DSRowsetChangeEventInfo

### DSRowsetChangeEventInfo

> EventInfo Objects > DSRowsetChangeEventInfo

**Description**

DataSet 오브젝트의 레코드집합이 변경되었을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- DataSet 에 데이터가 추가/삭제 되거나 Row 의 위치, 상태가 변경되었을 때 이벤트가 발생합니다.

**Property**

| Name | Description |
| --- | --- |
| count | 상태가 변경된 Row 의 갯수를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| reason | 이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다. |
| row | 변경된 Row 가 여러개인 경우 변경이 시작된 Row 의 인덱스값을 갖는 속성입니다. |


---

### 속성 (Properties)

### count

> EventInfo Objects > DSRowsetChangeEventInfo > Property > count

**Description**

상태가 변경된 Row 의 갯수를 갖는 속성입니다.

**Syntax**

```javascript
DSRowsetChangeEventInfo.count
```

**Setting Syntax**

```javascript
var nCnt = e.count;
```

**Remark**

- count 속성값이 "1" 이면 Row 상태 변경과 관계없는 이벤트가 발생한 경우입니다.
  Column 추가/삭제/변경 또는 enableevent() 메소드가 실행된 경우입니다.


---

### eventid

> EventInfo Objects > DSRowsetChangeEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DSRowsetChangeEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > DSRowsetChangeEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
DSRowsetChangeEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > DSRowsetChangeEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
DSRowsetChangeEventInfo.fromreferenceobject
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

### reason

> EventInfo Objects > DSRowsetChangeEventInfo > Property > reason

**Description**

이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DSRowsetChangeEventInfo.reason
```

**Setting Syntax**

```javascript
var nReason = e.reason;
```

**Remark**

- onrowsetchanged 이벤트의 발생원인을 알려줍니다.

	
		Constant
		Value
		Description
	

	
		Dataset.REASON_ASSIGN
		10
		Dataset이 Assign 되었을 때
	

	
		Dataset.REASON_COPY
		11
		Dataset이 복사되었을 때
	

	
		Dataset.REASON_APPEND
		12
		Dataset이 추가되었 때
	

	
		Dataset.REASON_MERGE
		13
		Dataset이 통합되었을 때
	

	
		Dataset.REASON_DELETE
		20
		Dataset의 Row가 삭제되었을 때
	

	
		Dataset.REASON_DELETEALL
		22
		Dataset의 모든 Row가 삭제되었을 때
	

	
		Dataset.REASON_CLEARDATA
		23
		Dataset의 모든 Row가 완전 삭제되었을 때
	

	
		Dataset.REASON_CLEAR
		24
		Dataset의 모든 Column 및 Row가 완전히 삭제되었을 때
	

	
		Dataset.REASON_SORTGROUP
		30
		Dataset의 데이터가 정렬 또는 그룹화 되었을 때
	

	
		Dataset.REASON_FILTER
		31
		Dataset의 데이터가 Filter 되었을 때
	

	
		Dataset.REASON_MOVE
		32
		Dataset의 Row가 다른 위치로 이동되었을 때
	

	
		Dataset.REASON_EXCHANGE
		33
		Dataset의 두 Row가 서로 위치가 바뀌었을 때
	

	
		Dataset.REASON_CHANGELAYOUT
		34
		Dataset의 Column 정보가 변경되었을 때
	

	
		Dataset.REASON_CHANGESTATUS
		40
		Dataset의 Row 상태(Type, Select)이 변경되었을 때
	

	
		Dataset.REASON_ENABLEEVENT
		41
		Dataset의 enableevent 속성이 'true'가 되었을 때
	

	
		Dataset.REASON_RESETSTATUS
		42
		TR이나 applyChange로 인한 RowType변경완료 후
	

	
		Dataset.REASON_CHANGEDATAOBJECT
		43
		바인딩된 DataObject 오브젝트의 데이터가 변경됐을 때


---

### row

> EventInfo Objects > DSRowsetChangeEventInfo > Property > row

**Description**

변경된 Row 가 여러개인 경우 변경이 시작된 Row 의 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
DSRowsetChangeEventInfo.row
```

**Setting Syntax**

```javascript
var nRow = e.row;
```


---

## EventInfo Objects > DuplicateExecutionEventInfo

### DuplicateExecutionEventInfo

> EventInfo Objects > DuplicateExecutionEventInfo

**Description**

중복실행 불가로 설정된 어플리케이션을 중복으로 실행 시 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| apparguments | 나중에 실행된 어플리케이션의 AppVariables 영역 변수를 Collection 형태로 갖는 읽기전용 속성입니다. |
| cookiearguments | 나중에 실행된 어플리케이션의 Cookies 영역 변수를 Collection 형태로 갖는 읽기전용 속성입니다. |
| envarguments | 나중에 실행된 어플리케이션의 Variables 영역 변수를 Collection 형태로 갖는 읽기전용 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |


---

### 속성 (Properties)

### apparguments

> EventInfo Objects > DuplicateExecutionEventInfo > Property > apparguments

**Description**

나중에 실행된 어플리케이션의 AppVariables 영역 변수를 Collection 형태로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DuplicateExecutionEventInfo.apparguments
```

**Remark**

- apparguments 속성은 Collection 접근방식을 사용할 수 있습니다.
   e.apparguments[0], e.apparguments["val1"], e.apparguments.length 등의 방법을 사용합니다.

- Environment 의 cookies 영역에 정의된 변수는 e.cookiearguments 속성으로 전달됩니다.
   Environment 의 Variables 영역에 정의된 변수는 e.envarguments 속성으로 전달됩니다.


---

### cookiearguments

> EventInfo Objects > DuplicateExecutionEventInfo > Property > cookiearguments

**Description**

나중에 실행된 어플리케이션의 Cookies 영역 변수를 Collection 형태로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DuplicateExecutionEventInfo.cookiearguments
```

**Remark**

- cookiearguments 속성은 Collection 접근방식을 사용할 수 있습니다.
   e.cookiearguments[0], e.cookiearguments["val1"], e.cookiearguments.length 등의 방법을 사용합니다.

- Application 의 AppVariables 영역에 정의된 변수는 e.apparguments 속성으로 전달됩니다.
   Environment 의 Variables 영역에 정의된 변수는 e.envarguments 속성으로 전달됩니다.


---

### envarguments

> EventInfo Objects > DuplicateExecutionEventInfo > Property > envarguments

**Description**

나중에 실행된 어플리케이션의 Variables 영역 변수를 Collection 형태로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DuplicateExecutionEventInfo.envarguments
```

**Remark**

- envarguments 속성은 Collection 접근방식을 사용할 수 있습니다.
   e.envarguments[0], e.envarguments["val1"], e.envarguments.length 등의 방법을 사용합니다.

- Environment 의 cookies 영역에 정의된 변수는 e.cookiearguments 속성으로 전달됩니다.
   Application 의 AppVariables 영역에 정의된 변수는 e.apparguments 속성으로 전달됩니다.


---

### eventid

> EventInfo Objects > DuplicateExecutionEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
DuplicateExecutionEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > DuplicateExecutionEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
DuplicateExecutionEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > DuplicateExecutionEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
DuplicateExecutionEventInfo.fromreferenceobject
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

## EventInfo Objects > EditClickEventInfo

### EditClickEventInfo

> EventInfo Objects > EditClickEventInfo

**Description**

컴포넌트의 편집영역을 마우스로 클릭했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| button | 이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다. |
| canvasx | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| canvasy | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| caretpos | 이벤트 발생 시 컴포넌트에 캐럿(Caret)이 위치한 인덱스값을 갖는 속성입니다. |
| clientx | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| clienty | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| screenx | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| screeny | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |


---

### 속성 (Properties)

### altkey

> EventInfo Objects > EditClickEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
EditClickEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### button

> EventInfo Objects > EditClickEventInfo > Property > button

**Description**

이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
EditClickEventInfo.button
```

**Setting Syntax**

```javascript
var strButton = e.button;
```
- **`"none"`** — 마우스 버튼에 의해 발생한 이벤트가 아닌 경우 갖는 값입니다.
- **`"lbutton"`** — 마우스의 왼쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"rbutton"`** — 마우스의 오른쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"mbutton"`** — 마우스의 가운데 버튼(Wheel)에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton1"`** — 마우스의 첫번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton2"`** — 마우스의 두번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"touch"`** — 터치에 의해 이벤트가 발생했을 때 갖는 값입니다.


---

### canvasx

> EventInfo Objects > EditClickEventInfo > Property > canvasx

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
EditClickEventInfo.canvasx
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### canvasy

> EventInfo Objects > EditClickEventInfo > Property > canvasy

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
EditClickEventInfo.canvasy
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### caretpos

> EventInfo Objects > EditClickEventInfo > Property > caretpos

**Description**

이벤트 발생 시 컴포넌트에 캐럿(Caret)이 위치한 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
EditClickEventInfo.caretpos
```

**Setting Syntax**

```javascript
var nCaretPos = e.caretpos;
```

**Remark**

- 컴포넌트의 readonly 속성값이 "true" 이면 "-1" 값을 갖습니다.


---

### clientx

> EventInfo Objects > EditClickEventInfo > Property > clientx

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
EditClickEventInfo.clientx
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### clienty

> EventInfo Objects > EditClickEventInfo > Property > clienty

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
EditClickEventInfo.clienty
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### ctrlkey

> EventInfo Objects > EditClickEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
EditClickEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### eventid

> EventInfo Objects > EditClickEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
EditClickEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > EditClickEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
EditClickEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > EditClickEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
EditClickEventInfo.fromreferenceobject
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

### metakey

> EventInfo Objects > EditClickEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
EditClickEventInfo.metakey
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

### screenx

> EventInfo Objects > EditClickEventInfo > Property > screenx

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
EditClickEventInfo.screenx
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### screeny

> EventInfo Objects > EditClickEventInfo > Property > screeny

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
EditClickEventInfo.screeny
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 y 좌표를 계산합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다.
  때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.


---

### shiftkey

> EventInfo Objects > EditClickEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
EditClickEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

## EventInfo Objects > EnvironmentUserHotkeyEventInfo

### EnvironmentUserHotkeyEventInfo

> EventInfo Objects > EnvironmentUserHotkeyEventInfo

**Description**

전역 단축키 입력 시 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| keycode | 키보드로 입력된 키에 해당하는 코드값을 갖는 속성입니다. |
| keyid | 입력된 전역 단축키의 id 값을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |


---

### 속성 (Properties)

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

## EventInfo Objects > ErrorEventInfo

### ErrorEventInfo

> EventInfo Objects > ErrorEventInfo

**Description**

통신과 관련된 에러에 의해 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- transaction 메서드를 비롯한 통신 처리 중 오류 발생 시 사용됩니다.

**Property**

| Name | Description |
| --- | --- |
| errordata | 에러가 발생한 Transaction 의 SvcID 값을 갖는 읽기전용 속성입니다. |
| errormsg | 발생한 에러에 대한 에러메시지를 갖는 속성입니다. |
| errorobj | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| locationuri | 대상 URI가 다른 주소로 변경된 경우 응답메세지 헤더의 Location 필드값을 갖는 속성입니다. |
| requesturi | 통신 중 발생한 오류의 원인이 되는 URI 를 갖는 속성입니다. |
| statuscode | 발생한 에러에 대한 에러코드값을 갖는 속성입니다. |


---

### 속성 (Properties)

### errordata

> EventInfo Objects > ErrorEventInfo > Property > errordata

**Description**

에러가 발생한 Transaction 의 SvcID 값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ErrorEventInfo.errordata
```

**Setting Syntax**

```javascript
var strSvcID = e.errordata;
```

**Remark**

- Transaction 에 의해 발생한 에러가 아닌 경우 undefined 값을 갖습니다.

- Transaction 이 실행중일 때 ESC 키를 입력하여 통신을 강제로 중지한 경우도 onerror 이벤트가 발생합니다.


---

### errormsg

> EventInfo Objects > ErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러메시지를 갖는 속성입니다.

**Syntax**

```javascript
ErrorEventInfo.errormsg
```

**Setting Syntax**

```javascript
var strErrmsg = e.errormsg;
```


---

### errorobj

> EventInfo Objects > ErrorEventInfo > Property > errorobj

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ErrorEventInfo.errorobj
```

**Setting Syntax**

```javascript
var objComp = e.erroobj;
```

**Remark**

- Application 으로 처리됩니다.


---

### errortype

> EventInfo Objects > ErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
ErrorEventInfo.errortype
```

**Setting Syntax**

- **`"EvalError"`** — 현재 버전에서 발생하지 않지만 이전 버전과의 호환성을 유지하기 위해 정의
- **`"RangeError"`** — 숫자값이 허용된 범위를 넘어선 경우
- **`"ReferenceError"`** — 참조값이 유효하지 않은 경우
- **`"SyntaxError"`** — 파싱에 문제가 있을 경우
- **`"TypeError"`** — 피연산자의 자료형이 허용된 범위가 아닌 경우
- **`"URIError"`** — 전역 URI 처리 함수 중 하나가 해당 정의와 호환되지 않는 방식으로 사용된 경우
- **`"NativeError"`** — 모든 Native Error 인 경우
- **`"CommunicationError"`** — 통신시 발생한 에러인 경우
- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우


---

### eventid

> EventInfo Objects > ErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### locationuri

> EventInfo Objects > ErrorEventInfo > Property > locationuri

**Description**

대상 URI가 다른 주소로 변경된 경우 응답메세지 헤더의 Location 필드값을 갖는 속성입니다.

**Syntax**

```javascript
ErrorEventInfo.locationuri
```

**Remark**

- locationuri 속성은 대상 URI 가 Http/Https Redirection 이 필요한 경우에만 값을 가지며 응답메세지 헤더의 Location 필드 값을 표현합니다.


---

### requesturi

> EventInfo Objects > ErrorEventInfo > Property > requesturi

**Description**

통신 중 발생한 오류의 원인이 되는 URI 를 갖는 속성입니다.

**Syntax**

```javascript
ErrorEventInfo.requesturi
```


---

### statuscode

> EventInfo Objects > ErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대한 에러코드값을 갖는 속성입니다.

**Syntax**

```javascript
ErrorEventInfo.statuscode
```

**Setting Syntax**

- **`301`** — 요청한 URI 가 새로운 URI 로 변경되었습니다.
- **`302`** — 요청한 URI 가 일시적으로 변경되었습니다.
- **`305`** — 요청한 자원은 반드시 Proxy Location 을 사용하여 접근해야 합니다.
- **`307`** — 요청한 URI가 일시적으로 변경되었습니다.
- **`400`** — 클라이언트의 잘못된 요청으로 처리할 수 없습니다.
주소가 정확한지 확인하고 다시 시도하십시오.
- **`401`** — 서버에 로그온 하려는 요청사항이 서버에 들어있는 권한과 맞지 않습니다.
- **`402`** — 예약되어 있습니다.
- **`403`** — 브라우저가 접근한 디렉토리에 가용한 디폴트 페이지가 없습니다.
- **`404`** — 요청한 경로에서 문서를 찾을 수 없습니다.
주소가 정확한지 확인하고 다시 시도하십시오.
- **`405`** — 사이트에서 페이지를 표시할 수 없습니다.
- **`406`** — 받아들일 수 없는 요청입니다.
- **`407`** — Proxy 인증이 필요합니다.
- **`408`** — 요청시간이 지났습니다.
- **`409`** — 요청에 충돌이 발생하여 요청을 완료할 수 없습니다.
- **`410`** — 요청된 페이지를 더 이상 사용할 수 없습니다.
- **`411`** — "Content-Length" 가 정의되지 않아 서버에서 요청을 수락하지 않았습니다.
- **`412`** — 서버에서 선결조건이 실패로 처리되었습니다.
- **`413`** — 요청 엔티티가 너무 커서 서버가 요청을 수락하지 않았습니다.
- **`414`** — 요청 URL 이 너무 길어서 서버가 요청을 수락하지 않았습니다.
- **`415`** — 지원하지 않는 미디어 타입으로 서버가 요청을 수락하지 않았습니다.
- **`416`** — 요청한 범위가 너무 커서 서버가 요청을 수락하지 않았습니다.
- **`417`** — 요청헤더의 요구사항을 처리할 수 없습니다.
- **`449`** — 적절한 조치 후 재요청하여야 합니다.
- **`500`** — 서버에 오류가 발생하여 요청을 수행할 수 없습니다.
- **`501`** — 서버가 요청 방법을 인식하지 못하거나 요청을 이행할 수 없습니다.
- **`502`** — 서버가 게이트웨이 또는 프록시로 작동중이거나 상위 서버로부터 잘못된 응답을 수신하였습니다.
- **`503`** — 현재 서버를 사용할 수 없습니다.
- **`504`** — 서버가 게이트웨이 또는 프록시로 작동중이거나 상위 서버로부터 적절한 요청을 받지 못했습니다.
- **`505`** — 서버가 요청에 사용된 HTTP 프로토콜 버전을 지원하지 않습니다.
- **`511`** — 네트워크 액세스 권한을 인증 받지 못했습니다.
- **`10400`** — 사용자에 의해 통신이 중지 되었습니다.
- **`10401`** — Transaction 이 Esc Key 입력에 의해 중단되었습니다.
- **`10402`** — SSL VerifyCert 에 실패하였습니다.
- **`10403`** — SSL 프록시 정보가 변경되었거나 프록시 정보를 얻지 못했습니다.
- **`10405`** — Transaction 수행중에 같은 Service 아이디가 호출되었습니다.
- **`10408`** — 넥사크로 내부에서 통신상태와 관계없이 논리적인 TimeOut 이 발생하였습니다.
- **`10499`** — 넥사크로 내부에서 통신상태와 관계없이 알수없는 에러가 발생하였습니다.
Nexacro Runtime Environment 일 경우 SSL 인증이나 HTTP 프록시 서버에서 발생한 에러입니다.
- **`10504`** — 넥사크로 내부에서 통신상태와 관계없이 논리적인 서버 TimeOut 이 발생하였습니다.
- **`10598`** — 통신으로 받은 다국어 리소스 데이터가 넥사크로에서 지원하지 않는 형태입니다.
- **`10599`** — 통신으로 받은 데이터가 넥사크로에서 지원하지 않는 포맷입니다.

**Remark**

- Transaction 을 제외한 모든 통신에러는 Environment 의 onerror 이벤트로 발생합니다.
   Transaction 과 관련된 통신에러는 메소드 사용위치에 따라 Application 또는 Form 의 onerror 이벤트로 발생합니다.


---

## EventInfo Objects > EventInfo

### EventInfo

> EventInfo Objects > EventInfo

**Description**

이벤트 발생 시 전달되는 EventInfo 오브젝트의 최상위 오브젝트입니다.

**Remark**

- 모든 EventInfo 오브젝트의 기본적인 형태로 해당 오브젝트를 상속받아 구현합니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| preventDefault | 현재 이벤트의 Default Action 을 취소하는 메소드입니다. |
| stopPropagation | 현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > EventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
EventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > EventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
EventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > EventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
EventInfo.fromreferenceobject
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

### 메서드 (Methods)

### preventDefault

> EventInfo Objects > EventInfo > Method > preventDefault

**Description**

현재 이벤트의 Default Action 을 취소하는 메소드입니다.

**Syntax**

```javascript
EventInfo.preventDefault()
```

**Return**

없음


---

### stopPropagation

> EventInfo Objects > EventInfo > Method > stopPropagation

**Description**

현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다.

**Syntax**

```javascript
EventInfo.stopPropagation()
```

**Return**

없음


---

## EventInfo Objects > ExcelExportErrorEventInfo

### ExcelExportErrorEventInfo

> EventInfo Objects > ExcelExportErrorEventInfo

**Description**

ExcelExportObject 에서 데이터를 Export 하며 오류가 생겼을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| errormsg | 발생한 에러에 대한 에러메시지를 갖는 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| statuscode | 발생한 에러에 대한 에러코드값을 갖는 속성입니다. |


---

### 속성 (Properties)

### errormsg

> EventInfo Objects > ExcelExportErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러메시지를 갖는 속성입니다.

**Syntax**

```javascript
ExcelExportErrorEventInfo.errormsg
```

**Remark**

- 서버에서 전달된 에러메시지를 갖습니다.


---

### errortype

> EventInfo Objects > ExcelExportErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
ExcelExportErrorEventInfo.errortype
```

**Setting Syntax**

- **`"EvalError"`** — 현재 버전에서 발생하지 않지만 이전 버전과의 호환성을 유지하기 위해 정의
- **`"RangeError"`** — 숫자값이 허용된 범위를 넘어선 경우
- **`"ReferenceError"`** — 참조값이 유효하지 않은 경우
- **`"SyntaxError"`** — 파싱에 문제가 있을 경우
- **`"TypeError"`** — 피연산자의 자료형이 허용된 범위가 아닌 경우
- **`"URIError"`** — 전역 URI 처리 함수 중 하나가 해당 정의와 호환되지 않는 방식으로 사용된 경우
- **`"NativeError"`** — 모든 Native Error 인 경우
- **`"CommunicationError"`** — 통신시 발생한 에러인 경우
- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우


---

### eventid

> EventInfo Objects > ExcelExportErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ExcelExportErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > ExcelExportErrorEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ExcelExportErrorEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > ExcelExportErrorEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
ExcelExportErrorEventInfo.fromreferenceobject
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

### statuscode

> EventInfo Objects > ExcelExportErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대한 에러코드값을 갖는 속성입니다.

**Syntax**

```javascript
ExcelExportErrorEventInfo.statuscode
```

**Remark**

- 서버에서 전달된 에러코드값을 갖습니다.


---

## EventInfo Objects > ExcelExportEventInfo

### ExcelExportEventInfo

> EventInfo Objects > ExcelExportEventInfo

**Description**

ExcelExportObject 에서 데이터를 Export 완료하면 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| url | Export 한 파일의 위치정보 URL 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > ExcelExportEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ExcelExportEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > ExcelExportEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ExcelExportEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > ExcelExportEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
ExcelExportEventInfo.fromreferenceobject
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

### url

> EventInfo Objects > ExcelExportEventInfo > Property > url

**Description**

Export 한 파일의 위치정보 URL 값을 갖는 속성입니다.

**Syntax**

```javascript
ExcelExportEventInfo.url
```


---

## EventInfo Objects > ExcelExportProgressEventInfo

### ExcelExportProgressEventInfo

> EventInfo Objects > ExcelExportProgressEventInfo

**Description**

ExcelExportObject 에서 데이터를 Export 하며 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| itemindex | Export 가 진행중인 ExportItem 의 인덱스값을 갖는 속성입니다. |
| itemtype | Export 가 진행중인 ExportItem 의 type 값을 갖는 속성입니다. |
| recordindex | Export 가 진행중인 ExportItem 의 Record 인덱스값을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > ExcelExportProgressEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ExcelExportProgressEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > ExcelExportProgressEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ExcelExportProgressEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > ExcelExportProgressEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
ExcelExportProgressEventInfo.fromreferenceobject
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

### itemindex

> EventInfo Objects > ExcelExportProgressEventInfo > Property > itemindex

**Description**

Export 가 진행중인 ExportItem 의 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
ExcelExportProgressEventInfo.itemindex
```


---

### itemtype

> EventInfo Objects > ExcelExportProgressEventInfo > Property > itemtype

**Description**

Export 가 진행중인 ExportItem 의 type 값을 갖는 속성입니다.

**Syntax**

```javascript
ExcelExportProgressEventInfo.itemtype
```

**Remark**

- 현재 Grid 만 Export 할 수 있으며 256 값을 갖습니다.
   nexacro.ExportItemTypes.GRID 의 상수값이 256 입니다.


---

### recordindex

> EventInfo Objects > ExcelExportProgressEventInfo > Property > recordindex

**Description**

Export 가 진행중인 ExportItem 의 Record 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
ExcelExportProgressEventInfo.recordindex
```

**Setting Syntax**

- **`recordindex`** — ExcelExportObject 의 exporteventtype 속성값에 따라 갖는 값이 달라집니다.

"itemrecord" 이면 현재 Export 중인 ExportItem 의 전체 Record 수를 기준으로 인덱스값을 갖습니다.
"item" 또는 "totalrecord" 이면 Export 되는 전체 아이템의 Record 수를 기준으로 인덱스값을 갖습니다.


---

## EventInfo Objects > ExcelImportErrorEventInfo

### ExcelImportErrorEventInfo

> EventInfo Objects > ExcelImportErrorEventInfo

**Description**

ExcelImportObject 오브젝트로 외부파일 Import 에 실패하면 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| errormsg | 발생한 에러에 대한 에러메시지를 갖는 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| statuscode | 발생한 에러에 대한 에러코드값을 갖는 속성입니다. |


---

### 속성 (Properties)

### errormsg

> EventInfo Objects > ExcelImportErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러메시지를 갖는 속성입니다.

**Syntax**

```javascript
ExcelImportErrorEventInfo.errormsg
```

**Remark**

- 서버에서 전달된 에러메시지를 갖습니다.


---

### errortype

> EventInfo Objects > ExcelImportErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
ExcelImportErrorEventInfo.errortype
```

**Setting Syntax**

- **`"EvalError"`** — 현재 버전에서 발생하지 않지만 이전 버전과의 호환성을 유지하기 위해 정의
- **`"RangeError"`** — 숫자값이 허용된 범위를 넘어선 경우
- **`"ReferenceError"`** — 참조값이 유효하지 않은 경우
- **`"SyntaxError"`** — 파싱에 문제가 있을 경우
- **`"TypeError"`** — 피연산자의 자료형이 허용된 범위가 아닌 경우
- **`"URIError"`** — 전역 URI 처리 함수 중 하나가 해당 정의와 호환되지 않는 방식으로 사용된 경우
- **`"NativeError"`** — 모든 Native Error 인 경우
- **`"CommunicationError"`** — 통신시 발생한 에러인 경우
- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우


---

### eventid

> EventInfo Objects > ExcelImportErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ExcelImportErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > ExcelImportErrorEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ExcelImportErrorEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > ExcelImportErrorEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
ExcelImportErrorEventInfo.fromreferenceobject
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

### statuscode

> EventInfo Objects > ExcelImportErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대한 에러코드값을 갖는 속성입니다.

**Syntax**

```javascript
ExcelImportErrorEventInfo.statuscode
```

**Remark**

- 서버에서 전달된 에러코드값을 갖습니다.


---

## EventInfo Objects > ExcelImportEventInfo

### ExcelImportEventInfo

> EventInfo Objects > ExcelImportEventInfo

**Description**

ExcelImportObject 오브젝트로 외부파일 Import 에 성공하면 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| importid | importDataEx() 메소드로 Import 수행 시 메소드에서 파라미터로 설정한 ID 값을 갖는 속성입니다. |
| url | Import 한 파일의 위치정보 URL 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > ExcelImportEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ExcelImportEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > ExcelImportEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ExcelImportEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > ExcelImportEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
ExcelImportEventInfo.fromreferenceobject
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

### importid

> EventInfo Objects > ExcelImportEventInfo > Property > importid

**Description**

importDataEx() 메소드로 Import 수행 시 메소드에서 파라미터로 설정한 ID 값을 갖는 속성입니다.

**Syntax**

```javascript
ExcelImportEventInfo.importid
```

**Setting Syntax**

- **`importid`** — importDataEx() 메소드 수행 시 strImportID 파라미터에 설정된 값을 갖습니다.

importData() 메소드로 Import 수행 시 undefined 값을 갖습니다.


---

### url

> EventInfo Objects > ExcelImportEventInfo > Property > url

**Description**

Import 한 파일의 위치정보 URL 값을 갖는 속성입니다.

**Syntax**

```javascript
ExcelImportEventInfo.url
```

**Setting Syntax**

- **`Local`** — Local 에 위치한 파일을 Import 하였을 경우 Xeni 서버에서 임의로 변경한 URL 값을 갖습니다.

Local 에 위치한 파일을 Import 하려면 importfilemode 속성값을 설정하지 않거나 "local" 로 설정하여야 합니다.

ex) "65486434345464/my.xls"
- **`Server`** — Server 에 위치한 파일을 Import 하였을 경우 importData() 메소드에서 설정한 URL 값을 갖습니다.

Server 에 위치한 파일을 Import 하려면 importfilemode 속성값을 "server" 로 설정하여야 합니다.

ex) "http://localhost:8080/xeni/XImport/my.xlsx"


---

## EventInfo Objects > ExitEventInfo

### ExitEventInfo

> EventInfo Objects > ExitEventInfo

**Description**

어플리케이션을 종료할 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > ExitEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ExitEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

## EventInfo Objects > ExtendedCommandEventInfo

### ExtendedCommandEventInfo

> EventInfo Objects > ExtendedCommandEventInfo

**Description**

DeviceAdaptors 에 정의된 디바이스에 의해 발생하는 onextendedcommand 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| data | 이벤트 발생 시 DeviceAdaptors 에서 전달된 데이터를 갖는 읽기전용 속성입니다. |
| deviceid | 이벤트 발생의 원인이 되는 디바이스의 ID 를 갖는 읽기전용 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| eventtype | 이벤트가 발생한 이유에 대한 정보를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| preventDefault | 현재 이벤트의 Default Action 을 취소하는 메소드입니다. |
| stopPropagation | 현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다. |


---

### 속성 (Properties)

### data

> EventInfo Objects > ExtendedCommandEventInfo > Property > data

**Description**

이벤트 발생 시 DeviceAdaptors 에서 전달된 데이터를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ExtendedCommandEventInfo.data
```

**Setting Syntax**

```javascript
var vData = e.data;
```

**Remark**

- DeviceAdaptors 에서 이벤트로 데이터를 전달하기 위한 속성입니다.
   이벤트를 발생시킨 DeviceAdaptors 에 따라 다른 값을 가질 수 있습니다.

- DeviceAdaptors 에서 이벤트가 발생한 이유에 대한 정보는 ExtendedCommandEventInfo 의 eventtype 속성을 사용합니다.


---

### deviceid

> EventInfo Objects > ExtendedCommandEventInfo > Property > deviceid

**Description**

이벤트 발생의 원인이 되는 디바이스의 ID 를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ExtendedCommandEventInfo.deviceid
```

**Setting Syntax**

```javascript
var strDeviceid = e.deviceid;
```

**Remark**

- 넥사크로 스튜디오의 DeviceAdators 영역에 정의된 디바이스의 ID 가 전달됩니다.


---

### eventid

> EventInfo Objects > ExtendedCommandEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ExtendedCommandEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### eventtype

> EventInfo Objects > ExtendedCommandEventInfo > Property > eventtype

**Description**

이벤트가 발생한 이유에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ExtendedCommandEventInfo.eventtype
```

**Setting Syntax**

```javascript
var vType = e.eventtype;
```

**Remark**

- DeviceAdaptors 에서 이벤트가 발생한 이유에 대한 정보를 전달하기 위한 속성입니다.
   이벤트를 발생시킨 DeviceAdaptors 에 따라 다른 값을 가질 수 있습니다.

- DeviceAdaptors 에서 이벤트로 전달할 데이터는 ExtendedCommandEventInfo 의 data 속성을 사용합니다.


---

### fromobject

> EventInfo Objects > ExtendedCommandEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ExtendedCommandEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### 메서드 (Methods)

### preventDefault

> EventInfo Objects > ExtendedCommandEventInfo > Method > preventDefault

**Description**

현재 이벤트의 Default Action 을 취소하는 메소드입니다.

**Syntax**

```javascript
ExtendedCommandEventInfo.preventDefault()
```

**Return**

없음


---

### stopPropagation

> EventInfo Objects > ExtendedCommandEventInfo > Method > stopPropagation

**Description**

현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다.

**Syntax**

```javascript
ExtendedCommandEventInfo.stopPropagation()
```

**Return**

없음


---

## EventInfo Objects > ExternalAPIErrorEventInfo

### ExternalAPIErrorEventInfo

> EventInfo Objects > ExternalAPIErrorEventInfo

**Description**

모바일 기기에서 외부 모듈에 접속에 실패했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| errormsg | 발생한 에러에 대한 에러메시지값을 갖는 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| statuscode | 발생한 에러에 대한 에러코드값을 갖는 속성입니다. |


---

### 속성 (Properties)

### errormsg

> EventInfo Objects > ExternalAPIErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러메시지값을 갖는 속성입니다.

**Syntax**

```javascript
ExternalAPIErrorEventInfo.errormsg
```

**Setting Syntax**

- **`"00001"`** — ID does NOT exist
- **`"1601"`** — External module is NOT accessible


---

### errortype

> EventInfo Objects > ExternalAPIErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
ExternalAPIErrorEventInfo.errortype
```

**Setting Syntax**

- **`"EvalError"`** — 현재 버전에서 발생하지 않지만 이전 버전과의 호환성을 유지하기 위해 정의
- **`"RangeError"`** — 숫자값이 허용된 범위를 넘어선 경우
- **`"ReferenceError"`** — 참조값이 유효하지 않은 경우
- **`"SyntaxError"`** — 파싱에 문제가 있을 경우
- **`"TypeError"`** — 피연산자의 자료형이 허용된 범위가 아닌 경우
- **`"URIError"`** — 전역 URI 처리 함수 중 하나가 해당 정의와 호환되지 않는 방식으로 사용된 경우
- **`"NativeError"`** — 모든 Native Error 인 경우
- **`"CommunicationError"`** — 통신시 발생한 에러인 경우
- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우


---

### eventid

> EventInfo Objects > ExternalAPIErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ExternalAPIErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### statuscode

> EventInfo Objects > ExternalAPIErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대한 에러코드값을 갖는 속성입니다.

**Syntax**

```javascript
ExternalAPIErrorEventInfo.statuscode
```

**Setting Syntax**

- **`"00001"`** — ID does NOT exist
- **`"1601"`** — External module is NOT accessible


---

## EventInfo Objects > ExternalAPIEventInfo

### ExternalAPIEventInfo

> EventInfo Objects > ExternalAPIEventInfo

**Description**

모바일 기기에서 외부 모듈에 접속하거나 데이터를 받을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| reason | 이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다. |
| recvdata | 외부 모듈에서 전달된 데이터(문자열)를 갖는 속성입니다. |
| recvid | execExtAPI() 메소드로 실행에 성공한 외부모듈 API 를 구분하는 ID 값을 갖습니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > ExternalAPIEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ExternalAPIEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### reason

> EventInfo Objects > ExternalAPIEventInfo > Property > reason

**Description**

이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ExternalAPIEventInfo.reason
```

**Setting Syntax**

- **`0`** — 외부 모듈에 접근이 가능한 경우 갖는 값입니다.
- **`1`** — 외부 모듈에서 데이터가 전달된 경우 갖는 값입니다.


---

### recvdata

> EventInfo Objects > ExternalAPIEventInfo > Property > recvdata

**Description**

외부 모듈에서 전달된 데이터(문자열)를 갖는 속성입니다.

**Syntax**

```javascript
ExternalAPIEventInfo.recvdata
```

**Remark**

- 데이터의 형식은 정해져 있지 않으므로 연동하는 앱과 사전에 정의된 방식으로 개발자가 분석하여 처리해야 합니다.


---

### recvid

> EventInfo Objects > ExternalAPIEventInfo > Property > recvid

**Description**

execExtAPI() 메소드로 실행에 성공한 외부모듈 API 를 구분하는 ID 값을 갖습니다.

**Syntax**

```javascript
ExternalAPIEventInfo.recvid
```

**Remark**

- execExtAPI() 메소드 실행 시 전달된 인자 중 "strRecvID" 에 설정된 값을 갖습니다.

**See Also**

ExternalAPI.execExtAPI


---

## EventInfo Objects > FileDialogEventInfo

### FileDialogEventInfo

> EventInfo Objects > FileDialogEventInfo

**Description**

FileDialog 를 닫았을때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- FileDialog 컴포넌트에서 open() 메소드로 표시된 대화상자를 닫았을 경우에 이벤트가 발생합니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| path | FileDialog 에서 선택한 폴더의 경로값을 갖는 읽기전용 속성입니다. |
| reason | 이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다. |
| virtualfiles | FileDialog 가 수행된 형태에 맞는 파일 정보를 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > FileDialogEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileDialogEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### path

> EventInfo Objects > FileDialogEventInfo > Property > path

**Description**

FileDialog 에서 선택한 폴더의 경로값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileDialogEventInfo.path
```

**Remark**

- FileDialog 컴포넌트에서 "FileDialog.SELFOLDER" 옵션으로 open() 메소드를 실행했을 경우 값을 갖습니다.

- e.reason 속성값이 4 일 경우 값을 갖습니다.

- 웹브라우저 환경일 때는 지원되지 않는 속성입니다.


---

### reason

> EventInfo Objects > FileDialogEventInfo > Property > reason

**Description**

이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileDialogEventInfo.reason
```

**Setting Syntax**

- **`0`** — 파일 또는 폴더를 선택하지 않고 FileDialog 대화상자를 닫았을 경우 갖는 값입니다.
- **`1`** — "FileDialog.LOAD" 옵션으로 open() 메소드를 실행하여 파일 한개를 선택하였을 경우 갖는 값입니다.
- **`2`** — "FileDialog.SAVE" 옵션으로 open() 메소드를 실행하여 파일 한개를 선택하였을 경우 갖는 값입니다.
- **`3`** — "FileDialog.MULTILOAD" 옵션으로 open() 메소드를 실행하여 파일을 한개 이상 선택하였을 경우 갖는 값입니다.
- **`4`** — "FileDialog.SELFOLDER " 옵션으로 open() 메소드를 실행하여 폴더를 선택하였을 경우 갖는 값입니다.

**Remark**

◆ web runtime environment 제약

- web runtime environment 는 reason 속성값이 1 또는 3 인 경우만 onclose 이벤트가 발생합니다.


---

### virtualfiles

> EventInfo Objects > FileDialogEventInfo > Property > virtualfiles

**Description**

FileDialog 가 수행된 형태에 맞는 파일 정보를 갖는 속성입니다.

**Syntax**

```javascript
FileDialogEventInfo.virtualfiles
```

**Setting Syntax**

- **`virtualfiles`** — "FileDialog.LOAD" 또는 "FileDialog.SAVE" 옵션으로 open() 메소드를 실행했을 경우 선택한 파일을 VirtualFile 배열형태로 갖습니다.
VirtualFile 오브젝트 속성에 접근하려면 e.virtualfiles[0].filename 와 같이 접근합니다.

"FileDialog.MULTILOAD" 옵션으로 open() 메소드를 실행했을 경우 선택한 파일들을 VirtualFile 배열형태로 갖습니다.


---

## EventInfo Objects > FileDownloadErrorEventInfo

### FileDownloadErrorEventInfo

> EventInfo Objects > FileDownloadErrorEventInfo

**Description**

FileDownload 컴포넌트에서 파일 다운로드 중 오류가 생겼을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| errormsg | 발생한 에러에 대한 에러메시지를 갖는 속성입니다. |
| errorobj | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| locationuri | 대상 URI가 다른 주소로 변경된 경우 응답메세지 헤더의 Location 필드값을 갖는 속성입니다. |
| requesturi | 통신 중 발생한 오류의 원인이 되는 URI 를 갖는 속성입니다. |
| statuscode | 발생한 에러에 대한 에러코드값를 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### errormsg

> EventInfo Objects > FileDownloadErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러메시지를 갖는 속성입니다.

**Syntax**

```javascript
FileDownloadErrorEventInfo.errormsg
```

**Setting Syntax**

```javascript
var strErrormsg = e.errormsg;
```


---

### errorobj

> EventInfo Objects > FileDownloadErrorEventInfo > Property > errorobj

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
FileDownloadErrorEventInfo.errorobj
```

**Setting Syntax**

```javascript
var objError = e.errorobj;
```

**Remark**

- Application 으로 처리됩니다.


---

### errortype

> EventInfo Objects > FileDownloadErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
FileDownloadErrorEventInfo.errortype
```

**Setting Syntax**

- **`"EvalError"`** — 현재 버전에서 발생하지 않지만 이전 버전과의 호환성을 유지하기 위해 정의
- **`"RangeError"`** — 숫자값이 허용된 범위를 넘어선 경우
- **`"ReferenceError"`** — 참조값이 유효하지 않은 경우
- **`"SyntaxError"`** — 파싱에 문제가 있을 경우
- **`"TypeError"`** — 피연산자의 자료형이 허용된 범위가 아닌 경우
- **`"URIError"`** — 전역 URI 처리 함수 중 하나가 해당 정의와 호환되지 않는 방식으로 사용된 경우
- **`"NativeError"`** — 모든 Native Error 인 경우
- **`"CommunicationError"`** — 통신시 발생한 에러인 경우
- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우


---

### eventid

> EventInfo Objects > FileDownloadErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileDownloadErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### locationuri

> EventInfo Objects > FileDownloadErrorEventInfo > Property > locationuri

**Description**

대상 URI가 다른 주소로 변경된 경우 응답메세지 헤더의 Location 필드값을 갖는 속성입니다.

**Syntax**

```javascript
FileDownloadErrorEventInfo.locationuri
```

**Remark**

- locationuri 속성은 대상 URI 가 Http/Https Redirection 이 필요한 경우에만 값을 가지며 응답메세지 헤더의 Location 필드 값을 표현합니다.


---

### requesturi

> EventInfo Objects > FileDownloadErrorEventInfo > Property > requesturi

**Description**

통신 중 발생한 오류의 원인이 되는 URI 를 갖는 속성입니다.

**Syntax**

```javascript
FileDownloadErrorEventInfo.requesturi
```


---

### statuscode

> EventInfo Objects > FileDownloadErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대한 에러코드값를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileDownloadErrorEventInfo.statuscode
```

**Setting Syntax**

- **`"0001"`** — Parameter Error
- **`"1101"`** — I/O Error
- **`"1102"`** — Permission Denied
- **`"1103"`** — Irregular Expression Error
- **`"1104"`** — Removed target error
- **`"1105"`** — Image Info [statuscode] is not found
- **`"1106"`** — The file is not correct
- **`"1107"`** — Failed to save file

**Remark**

- FileDownloadErrorEventInfo 의 errortype 속성값이 "CommunicationError" 인 경우 HTTP/HTTPS 통신 중 오류가 발생하면 HTTP 상태코드를 반환합니다.
  HTTP/HTTPS Status Code는 RFC 2616 문서의 Status Code 정의를 참조하시기 바랍니다.


---

## EventInfo Objects > FileDownloadEventInfo

### FileDownloadEventInfo

> EventInfo Objects > FileDownloadEventInfo

**Description**

FileDownload 컴포넌트에서 파일 다운로드가 완료되었을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| targetfullpath | 다운로드 된 파일의 전체 경로값을 갖는 속성입니다. |
| url | 다운로드 받을 파일의 URL 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > FileDownloadEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileDownloadEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > FileDownloadEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
FileDownloadEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > FileDownloadEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
FileDownloadEventInfo.fromreferenceobject
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

### targetfullpath

> EventInfo Objects > FileDownloadEventInfo > Property > targetfullpath

**Description**

다운로드 된 파일의 전체 경로값을 갖는 속성입니다.

**Syntax**

```javascript
FileDownloadEventInfo.targetfullpath
```


---

### url

> EventInfo Objects > FileDownloadEventInfo > Property > url

**Description**

다운로드 받을 파일의 URL 값을 갖는 속성입니다.

**Syntax**

```javascript
FileDownloadEventInfo.url
```


---

## EventInfo Objects > FileDownTransferErrorEventInfo

### FileDownTransferErrorEventInfo

> EventInfo Objects > FileDownTransferErrorEventInfo

**Description**

FileDownTransfer 컴포넌트에서 파일 다운로드에 실패하였을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- web runtime environment 는 실패 이벤트가 발생하지 않습니다.

**Property**

| Name | Description |
| --- | --- |
| errormsg | 발생한 에러에 대해 서버에서 반환된 에러메시지를 갖는 읽기전용 속성입니다. |
| errorobj | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| locationuri | 대상 URI 가 다른 주소로 변경된 경우 응답메시지 헤더의 Location 필드값을 갖는 읽기전용 속성입니다. |
| requesturi | 에러가 발생한 원인이 되는 URI 정보를 갖는 읽기전용 속성입니다. |
| statuscode | 발생한 에러에 대해 서버에서 반환된 에러코드값을 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### errormsg

> EventInfo Objects > FileDownTransferErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대해 서버에서 반환된 에러메시지를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileDownTransferErrorEventInfo.errormsg
```

**Setting Syntax**

```javascript
var strErrormsg = e.errormsg;
```


---

### errorobj

> EventInfo Objects > FileDownTransferErrorEventInfo > Property > errorobj

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
FileDownTransferErrorEventInfo.errorobj
```

**Setting Syntax**

```javascript
var objError = e.errorobj;
```

**Remark**

- Application 으로 처리됩니다.


---

### errortype

> EventInfo Objects > FileDownTransferErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
FileDownTransferErrorEventInfo.errortype
```

**Setting Syntax**

- **`"EvalError"`** — 현재 버전에서 발생하지 않지만 이전 버전과의 호환성을 유지하기 위해 정의
- **`"RangeError"`** — 숫자값이 허용된 범위를 넘어선 경우
- **`"ReferenceError"`** — 참조값이 유효하지 않은 경우
- **`"SyntaxError"`** — 파싱에 문제가 있을 경우
- **`"TypeError"`** — 피연산자의 자료형이 허용된 범위가 아닌 경우
- **`"URIError"`** — 전역 URI 처리 함수 중 하나가 해당 정의와 호환되지 않는 방식으로 사용된 경우
- **`"NativeError"`** — 모든 Native Error 인 경우
- **`"CommunicationError"`** — 통신시 발생한 에러인 경우
- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우


---

### eventid

> EventInfo Objects > FileDownTransferErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileDownTransferErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > FileDownTransferErrorEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
FileDownTransferErrorEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > FileDownTransferErrorEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
FileDownTransferErrorEventInfo.fromreferenceobject
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

### locationuri

> EventInfo Objects > FileDownTransferErrorEventInfo > Property > locationuri

**Description**

대상 URI 가 다른 주소로 변경된 경우 응답메시지 헤더의 Location 필드값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileDownTransferErrorEventInfo.locationuri
```

**Remark**

- locationuri 속성은 대상 URI 가 HTTP/HTTPS Redirection 이 필요한 경우에만 응답메시지 헤더의 Location 필드 값을 갖습니다.


---

### requesturi

> EventInfo Objects > FileDownTransferErrorEventInfo > Property > requesturi

**Description**

에러가 발생한 원인이 되는 URI 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileDownTransferErrorEventInfo.requesturi
```


---

### statuscode

> EventInfo Objects > FileDownTransferErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대해 서버에서 반환된 에러코드값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileDownTransferErrorEventInfo.statuscode
```

**Setting Syntax**

- **`"0001"`** — Parameter Error
- **`"1101"`** — I/O Error
- **`"1102"`** — Permission Denied
- **`"1103"`** — Irregular Expression Error
- **`"1104"`** — Removed target error
- **`"1105"`** — Image Info [statuscode] is not found
- **`"1106"`** — The file is not correct
- **`"1107"`** — Failed to save file

**Remark**

- FileDownTransferErrorEventInfo 의 errortype 속성값이 "CommunicationError" 인 경우 HTTP/HTTPS 통신 중 오류가 발생하면 HTTP 상태코드를 반환합니다.
   HTTP/HTTPS 상태코드는 RFC 2616 문서의 Status Code 정의를 참조하시기 바랍니다.


---

## EventInfo Objects > FileDownTransferEventInfo

### FileDownTransferEventInfo

> EventInfo Objects > FileDownTransferEventInfo

**Description**

FileDownTransfer 컴포넌트에서 파일 다운로드에 성공하였을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- web runtime environment 는 성공 이벤트가 발생하지 않습니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| targetfullpath | 다운로드 받은 파일이 저장된 경로와 파일명을 갖는 읽기전용 속성입니다. |
| url | 다운로드 받은 파일의 서버경로와 파일명을 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > FileDownTransferEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileDownTransferEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > FileDownTransferEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
FileDownTransferEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > FileDownTransferEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
FileDownTransferEventInfo.fromreferenceobject
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

### targetfullpath

> EventInfo Objects > FileDownTransferEventInfo > Property > targetfullpath

**Description**

다운로드 받은 파일이 저장된 경로와 파일명을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileDownTransferEventInfo.targetfullpath
```

**Remark**

- download() 메소드에서 strTargetpath 파라미터를 설정했을 경우 해당값을 갖습니다.


---

### url

> EventInfo Objects > FileDownTransferEventInfo > Property > url

**Description**

다운로드 받은 파일의 서버경로와 파일명을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileDownTransferEventInfo.url
```


---

## EventInfo Objects > FileUploadContextMenuEventInfo

### FileUploadContextMenuEventInfo

> EventInfo Objects > FileUploadContextMenuEventInfo

**Description**

컴포넌트의 편집영역에 마우스 오른쪽 마우스 클릭 시 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- 모바일 기기의 경우 터치를 길게하면 오른쪽 마우스 클릭과 같은 효과가 발생합니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| button | 이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다. |
| canvasx | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| canvasy | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| clientx | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| clienty | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| index | 이벤트를 발생시킨 FileUploadItem의 인덱스값을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| screenx | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| screeny | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| preventDefault | 현재 이벤트의 Default Action 을 취소하는 메소드입니다. |


---

### 속성 (Properties)

### altkey

> EventInfo Objects > FileUploadContextMenuEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
FileUploadContextMenuEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### button

> EventInfo Objects > FileUploadContextMenuEventInfo > Property > button

**Description**

이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUploadContextMenuEventInfo.button
```

**Setting Syntax**

```javascript
var strButton = e.button;
```
- **`"none"`** — 마우스 버튼에 의해 발생한 이벤트가 아닌 경우 갖는 값입니다.
- **`"lbutton"`** — 마우스의 왼쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"rbutton"`** — 마우스의 오른쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"mbutton"`** — 마우스의 가운데 버튼(Wheel)에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton1"`** — 마우스의 첫번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton2"`** — 마우스의 두번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"touch"`** — 터치에 의해 이벤트가 발생했을 때 갖는 값입니다.


---

### canvasx

> EventInfo Objects > FileUploadContextMenuEventInfo > Property > canvasx

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadContextMenuEventInfo.canvasx
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### canvasy

> EventInfo Objects > FileUploadContextMenuEventInfo > Property > canvasy

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadContextMenuEventInfo.canvasy
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### clientx

> EventInfo Objects > FileUploadContextMenuEventInfo > Property > clientx

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadContextMenuEventInfo.clientx
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### clienty

> EventInfo Objects > FileUploadContextMenuEventInfo > Property > clienty

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadContextMenuEventInfo.clienty
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### ctrlkey

> EventInfo Objects > FileUploadContextMenuEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
FileUploadContextMenuEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### eventid

> EventInfo Objects > FileUploadContextMenuEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUploadContextMenuEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > FileUploadContextMenuEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
FileUploadContextMenuEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > FileUploadContextMenuEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadContextMenuEventInfo.fromreferenceobject
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

### index

> EventInfo Objects > FileUploadContextMenuEventInfo > Property > index

**Description**

이벤트를 발생시킨 FileUploadItem의 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadContextMenuEventInfo.index
```


---

### metakey

> EventInfo Objects > FileUploadContextMenuEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
FileUploadContextMenuEventInfo.metakey
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

### screenx

> EventInfo Objects > FileUploadContextMenuEventInfo > Property > screenx

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadContextMenuEventInfo.screenx
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### screeny

> EventInfo Objects > FileUploadContextMenuEventInfo > Property > screeny

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadContextMenuEventInfo.screeny
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 y 좌표를 계산합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다.
  때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.


---

### shiftkey

> EventInfo Objects > FileUploadContextMenuEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
FileUploadContextMenuEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### 메서드 (Methods)

### preventDefault

> EventInfo Objects > FileUploadContextMenuEventInfo > Method > preventDefault

**Description**

현재 이벤트의 Default Action 을 취소하는 메소드입니다.

**Syntax**

```javascript
FileUploadContextMenuEventInfo.preventDefault()
```

**Return**

없음


---

## EventInfo Objects > FileUploadErrorEventInfo

### FileUploadErrorEventInfo

> EventInfo Objects > FileUploadErrorEventInfo

**Description**

FileUpload 컴포넌트에서 파일 업로드 중 오류가 생겼을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| errormsg | 발생한 에러에 대한 에러메시지를 갖는 속성입니다. |
| errorobj | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| index | 에러가 발생한 FileUploadItem 의 인덱스값을 갖는 속성입니다. |
| locationuri | 대상 URI가 다른 주소로 변경된 경우 응답메세지 헤더의 Location 필드값을 갖는 속성입니다. |
| requesturi | 통신 중 발생한 오류의 원인이 되는 URI 를 갖는 속성입니다. |
| statuscode | 발생한 에러에 대한 에러코드값을 갖는 속성입니다. |


---

### 속성 (Properties)

### errormsg

> EventInfo Objects > FileUploadErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러메시지를 갖는 속성입니다.

**Syntax**

```javascript
FileUploadErrorEventInfo.errormsg
```

**Setting Syntax**

```javascript
var strErrormsg = e.errormsg;
```


---

### errorobj

> EventInfo Objects > FileUploadErrorEventInfo > Property > errorobj

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
FileUploadErrorEventInfo.errorobj
```

**Setting Syntax**

```javascript
var objError = e.errorobj;
```

**Remark**

- Application 으로 처리됩니다.


---

### errortype

> EventInfo Objects > FileUploadErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadErrorEventInfo.errortype
```

**Setting Syntax**

- **`"EvalError"`** — 현재 버전에서 발생하지 않지만 이전 버전과의 호환성을 유지하기 위해 정의
- **`"RangeError"`** — 숫자값이 허용된 범위를 넘어선 경우
- **`"ReferenceError"`** — 참조값이 유효하지 않은 경우
- **`"SyntaxError"`** — 파싱에 문제가 있을 경우
- **`"TypeError"`** — 피연산자의 자료형이 허용된 범위가 아닌 경우
- **`"URIError"`** — 전역 URI 처리 함수 중 하나가 해당 정의와 호환되지 않는 방식으로 사용된 경우
- **`"NativeError"`** — 모든 Native Error 인 경우
- **`"CommunicationError"`** — 통신시 발생한 에러인 경우
- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우


---

### eventid

> EventInfo Objects > FileUploadErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUploadErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### index

> EventInfo Objects > FileUploadErrorEventInfo > Property > index

**Description**

에러가 발생한 FileUploadItem 의 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadErrorEventInfo.index
```

**Setting Syntax**

```javascript
var nIndex = e.index;
```


---

### locationuri

> EventInfo Objects > FileUploadErrorEventInfo > Property > locationuri

**Description**

대상 URI가 다른 주소로 변경된 경우 응답메세지 헤더의 Location 필드값을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadErrorEventInfo.locationuri
```

**Remark**

- locationuri 속성은 대상 URI 가 Http/Https Redirection 이 필요한 경우에만 값을 가지며 응답메세지 헤더의 Location 필드 값을 표현합니다.


---

### requesturi

> EventInfo Objects > FileUploadErrorEventInfo > Property > requesturi

**Description**

통신 중 발생한 오류의 원인이 되는 URI 를 갖는 속성입니다.

**Syntax**

```javascript
FileUploadErrorEventInfo.requesturi
```


---

### statuscode

> EventInfo Objects > FileUploadErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대한 에러코드값을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadErrorEventInfo.statuscode
```

**Setting Syntax**

- **`"0001"`** — Parameter Error
- **`"1101"`** — I/O Error
- **`"1102"`** — Permission Denied
- **`"1103"`** — Irregular Expression Error
- **`"1104"`** — Removed target error
- **`"1105"`** — Image Info [statuscode] is not found
- **`"1106"`** — The file is not correct
- **`"1107"`** — Failed to save file

**Remark**

- FileUploadErrorEventInfo 의 errortype 속성값이 "CommunicationError" 인 경우 HTTP/HTTPS 통신 중 오류가 발생하면 HTTP 상태코드를 반환합니다.
  HTTP/HTTPS Status Code는 RFC 2616 문서의 Status Code 정의를 참조하시기 바랍니다.


---

## EventInfo Objects > FileUploadEventInfo

### FileUploadEventInfo

> EventInfo Objects > FileUploadEventInfo

**Description**

FileUpload 컴포넌트에서 파일 업로드가 완료되었을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| datasets | 서버로부터 수신받은 DataSet 목록을 갖는 속성입니다. |
| errorcode | 발생한 에러에 대한 에러코드값를 갖는 속성입니다. |
| errormsg | 발생한 에러에 대한 에러메시지를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| url | 파일이 업로드 된 URL 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### datasets

> EventInfo Objects > FileUploadEventInfo > Property > datasets

**Description**

서버로부터 수신받은 DataSet 목록을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadEventInfo.datasets
```


---

### errorcode

> EventInfo Objects > FileUploadEventInfo > Property > errorcode

**Description**

발생한 에러에 대한 에러코드값를 갖는 속성입니다.

**Syntax**

```javascript
FileUploadEventInfo.errorcode
```

**Setting Syntax**

```javascript
var nErrorcode = e.errorcode;
```

**Remark**

- 서버로 부터 받은 오류코드를 갖습니다.
  서버로 부터 받은 오류코드가 없을 경우에는 "0" 을 갖습니다.


---

### errormsg

> EventInfo Objects > FileUploadEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러메시지를 갖는 속성입니다.

**Syntax**

```javascript
FileUploadEventInfo.errormsg
```

**Setting Syntax**

```javascript
var strErrormsg = e.errormsg;
```

**Remark**

- 서버로 부터 받은 오류메시지를 갖습니다.
  서버로 부터 받은 오류메시지가 없을 경우에는 "" 을 갖습니다.


---

### eventid

> EventInfo Objects > FileUploadEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUploadEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > FileUploadEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
FileUploadEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > FileUploadEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadEventInfo.fromreferenceobject
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

### url

> EventInfo Objects > FileUploadEventInfo > Property > url

**Description**

파일이 업로드 된 URL 값을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadEventInfo.url
```


---

## EventInfo Objects > FileUploadItemChangeEventInfo

### FileUploadItemChangeEventInfo

> EventInfo Objects > FileUploadItemChangeEventInfo

**Description**

FileUpload 컴포넌트에서 업로드 파일을 설정할 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| index | 값이 변경된 FileUploadItem 의 인덱스값을 갖는 속성입니다. |
| newvalue | 이벤트를 발생시킨 FileUploadItem 의 새로 변경된 value 값을 갖는 속성입니다. |
| oldvalue | 이벤트를 발생시킨 FileUploadItem 의 변경 전 value 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > FileUploadItemChangeEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUploadItemChangeEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > FileUploadItemChangeEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
FileUploadItemChangeEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > FileUploadItemChangeEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadItemChangeEventInfo.fromreferenceobject
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

### index

> EventInfo Objects > FileUploadItemChangeEventInfo > Property > index

**Description**

값이 변경된 FileUploadItem 의 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadItemChangeEventInfo.index
```


---

### newvalue

> EventInfo Objects > FileUploadItemChangeEventInfo > Property > newvalue

**Description**

이벤트를 발생시킨 FileUploadItem 의 새로 변경된 value 값을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadItemChangeEventInfo.newvalue
```


---

### oldvalue

> EventInfo Objects > FileUploadItemChangeEventInfo > Property > oldvalue

**Description**

이벤트를 발생시킨 FileUploadItem 의 변경 전 value 값을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadItemChangeEventInfo.oldvalue
```


---

## EventInfo Objects > FileUploadItemEventInfo

### FileUploadItemEventInfo

> EventInfo Objects > FileUploadItemEventInfo

**Description**

FileUpload 컴포넌트에서 아이템을 추가,삭제하거나 버튼 클릭 시 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| index | 이벤트를 발생시킨 FileUploadItem 의 인덱스값을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > FileUploadItemEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUploadItemEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > FileUploadItemEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
FileUploadItemEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > FileUploadItemEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadItemEventInfo.fromreferenceobject
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

### index

> EventInfo Objects > FileUploadItemEventInfo > Property > index

**Description**

이벤트를 발생시킨 FileUploadItem 의 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadItemEventInfo.index
```


---

## EventInfo Objects > FileUploadMouseEventInfo

### FileUploadMouseEventInfo

> EventInfo Objects > FileUploadMouseEventInfo

**Description**

FileUpload 컴포넌트에서 마우스를 클릭할 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- 마우스 클릭에 의해 onlbuttondown, onlbuttonup 이벤트 발생 시 전달됩니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| button | 이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다. |
| canvasx | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| canvasy | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| clientx | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| clienty | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| index | 이벤트를 발생시킨 FileUploadItem 의 인덱스값을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| screenx | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| screeny | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| preventDefault | 현재 이벤트의 Default Action 을 취소하는 메소드입니다. |
| stopPropagation | 현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다. |


---

### 속성 (Properties)

### altkey

> EventInfo Objects > FileUploadMouseEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
FileUploadMouseEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### button

> EventInfo Objects > FileUploadMouseEventInfo > Property > button

**Description**

이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUploadMouseEventInfo.button
```

**Setting Syntax**

```javascript
var strButton = e.button;
```
- **`"none"`** — 마우스 버튼에 의해 발생한 이벤트가 아닌 경우 갖는 값입니다.
- **`"lbutton"`** — 마우스의 왼쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"rbutton"`** — 마우스의 오른쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"mbutton"`** — 마우스의 가운데 버튼(Wheel)에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton1"`** — 마우스의 첫번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton2"`** — 마우스의 두번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"touch"`** — 터치에 의해 이벤트가 발생했을 때 갖는 값입니다.


---

### canvasx

> EventInfo Objects > FileUploadMouseEventInfo > Property > canvasx

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadMouseEventInfo.canvasx
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### canvasy

> EventInfo Objects > FileUploadMouseEventInfo > Property > canvasy

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadMouseEventInfo.canvasy
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### clientx

> EventInfo Objects > FileUploadMouseEventInfo > Property > clientx

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadMouseEventInfo.clientx
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### clienty

> EventInfo Objects > FileUploadMouseEventInfo > Property > clienty

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadMouseEventInfo.clienty
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### ctrlkey

> EventInfo Objects > FileUploadMouseEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
FileUploadMouseEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### eventid

> EventInfo Objects > FileUploadMouseEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUploadMouseEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > FileUploadMouseEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
FileUploadMouseEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > FileUploadMouseEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadMouseEventInfo.fromreferenceobject
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

### index

> EventInfo Objects > FileUploadMouseEventInfo > Property > index

**Description**

이벤트를 발생시킨 FileUploadItem 의 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadMouseEventInfo.index
```


---

### metakey

> EventInfo Objects > FileUploadMouseEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
FileUploadMouseEventInfo.metakey
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

### screenx

> EventInfo Objects > FileUploadMouseEventInfo > Property > screenx

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadMouseEventInfo.screenx
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### screeny

> EventInfo Objects > FileUploadMouseEventInfo > Property > screeny

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
FileUploadMouseEventInfo.screeny
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 y 좌표를 계산합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다.
  때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.


---

### shiftkey

> EventInfo Objects > FileUploadMouseEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
FileUploadMouseEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### 메서드 (Methods)

### preventDefault

> EventInfo Objects > FileUploadMouseEventInfo > Method > preventDefault

**Description**

현재 이벤트의 Default Action 을 취소하는 메소드입니다.

**Syntax**

```javascript
FileUploadMouseEventInfo.preventDefault()
```

**Return**

없음


---

### stopPropagation

> EventInfo Objects > FileUploadMouseEventInfo > Method > stopPropagation

**Description**

현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다.

**Syntax**

```javascript
FileUploadMouseEventInfo.stopPropagation()
```

**Return**

없음


---

## EventInfo Objects > FileUpTransferErrorEventInfo

### FileUpTransferErrorEventInfo

> EventInfo Objects > FileUpTransferErrorEventInfo

**Description**

FileUpTransfer 컴포넌트에서 파일 업로드에 실패하였을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| errormsg | 발생한 에러에 대해 서버에서 반환된 에러메시지를 갖는 읽기전용 속성입니다. |
| errorobj | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 읽기전용 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| locationuri | 대상 URI 가 다른 주소로 변경된 경우 응답메시지 헤더의 Location 필드값을 갖는 읽기전용 속성입니다. |
| requesturi | 에러가 발생한 원인이 되는 URI 정보를 갖는 읽기전용 속성입니다. |
| statuscode | 발생한 에러에 대해 서버에서 반환된 에러코드값을 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### errormsg

> EventInfo Objects > FileUpTransferErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대해 서버에서 반환된 에러메시지를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUpTransferErrorEventInfo.errormsg
```

**Setting Syntax**

```javascript
var strErrormsg = e.errormsg;
```


---

### errorobj

> EventInfo Objects > FileUpTransferErrorEventInfo > Property > errorobj

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUpTransferErrorEventInfo.errorobj
```

**Setting Syntax**

```javascript
var objError = e.errorobj;
```

**Remark**

- Application 으로 처리됩니다.


---

### errortype

> EventInfo Objects > FileUpTransferErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
FileUpTransferErrorEventInfo.errortype
```

**Setting Syntax**

- **`"EvalError"`** — 현재 버전에서 발생하지 않지만 이전 버전과의 호환성을 유지하기 위해 정의
- **`"RangeError"`** — 숫자값이 허용된 범위를 넘어선 경우
- **`"ReferenceError"`** — 참조값이 유효하지 않은 경우
- **`"SyntaxError"`** — 파싱에 문제가 있을 경우
- **`"TypeError"`** — 피연산자의 자료형이 허용된 범위가 아닌 경우
- **`"URIError"`** — 전역 URI 처리 함수 중 하나가 해당 정의와 호환되지 않는 방식으로 사용된 경우
- **`"NativeError"`** — 모든 Native Error 인 경우
- **`"CommunicationError"`** — 통신시 발생한 에러인 경우
- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우


---

### eventid

> EventInfo Objects > FileUpTransferErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUpTransferErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > FileUpTransferErrorEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
FileUpTransferErrorEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > FileUpTransferErrorEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
FileUpTransferErrorEventInfo.fromreferenceobject
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

### locationuri

> EventInfo Objects > FileUpTransferErrorEventInfo > Property > locationuri

**Description**

대상 URI 가 다른 주소로 변경된 경우 응답메시지 헤더의 Location 필드값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUpTransferErrorEventInfo.locationuri
```

**Remark**

- locationuri 속성은 대상 URI 가 HTTP/HTTPS Redirection 이 필요한 경우에만 응답메시지 헤더의 Location 필드 값을 갖습니다.


---

### requesturi

> EventInfo Objects > FileUpTransferErrorEventInfo > Property > requesturi

**Description**

에러가 발생한 원인이 되는 URI 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUpTransferErrorEventInfo.requesturi
```


---

### statuscode

> EventInfo Objects > FileUpTransferErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대해 서버에서 반환된 에러코드값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUpTransferErrorEventInfo.statuscode
```

**Setting Syntax**

- **`"0001"`** — Parameter Error
- **`"1101"`** — I/O Error
- **`"1102"`** — Permission Denied
- **`"1103"`** — Irregular Expression Error
- **`"1104"`** — Removed target error
- **`"1105"`** — Image Info [statuscode] is not found
- **`"1106"`** — The file is not correct
- **`"1107"`** — Failed to save file

**Remark**

- FileUpTransferErrorEventInfo 의 errortype 속성값이 "CommunicationError" 인 경우 HTTP/HTTPS 통신 중 오류가 발생하면 HTTP 상태코드를 반환합니다.
   HTTP/HTTPS 상태코드는 RFC 2616 문서의 Status Code 정의를 참조하시기 바랍니다.


---

## EventInfo Objects > FileUpTransferEventinfo

### FileUpTransferEventInfo

> EventInfo Objects > FileUpTransferEventinfo

**Description**

FileUpTransfer 컴포넌트에서 파일 업로드에 성공하였을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| code | 서버에서 전송된 성공코드값을 갖는 읽기전용 속성입니다. |
| datasets | 서버로부터 수신받은 DataSet 오브젝트를 배열로 갖는 읽기전용 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| message | 서버에서 전송된 성공 메시지값을 갖는 읽기전용 속성입니다. |
| url | 업로드 한 파일을 수신한 서버페이지 정보를 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### code

> EventInfo Objects > FileUpTransferEventinfo > Property > code

**Description**

서버에서 전송된 성공코드값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUpTransferEventinfo.code
```

**Setting Syntax**

```javascript
var nResultCode = e.code;
```

**Remark**

- 서버에서 전송된 성공코드가 없을 경우 0 을 갖습니다.


---

### datasets

> EventInfo Objects > FileUpTransferEventinfo > Property > datasets

**Description**

서버로부터 수신받은 DataSet 오브젝트를 배열로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUpTransferEventinfo.datasets
```


---

### eventid

> EventInfo Objects > FileUpTransferEventinfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUpTransferEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > FileUpTransferEventinfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
FileUpTransferEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > FileUpTransferEventinfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
FileUpTransferEventInfo.fromreferenceobject
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

### message

> EventInfo Objects > FileUpTransferEventinfo > Property > message

**Description**

서버에서 전송된 성공 메시지값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUpTransferEventinfo.message
```

**Setting Syntax**

```javascript
var nResultMsg = e.message;
```


---

### url

> EventInfo Objects > FileUpTransferEventinfo > Property > url

**Description**

업로드 한 파일을 수신한 서버페이지 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUpTransferEventinfo.url
```

**Remark**

- 서버페이지의 URL 값을 갖습니다.


---

## EventInfo Objects > FileUpTransferProgressEventInfo

### FileUpTransferProgressEventInfo

> EventInfo Objects > FileUpTransferProgressEventInfo

**Description**

FileUpTransfer 컴포넌트에서 파일 업로드 중일 때 일정간격으로 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- onprogress 이벤트가 발생하는 간격은 웹브라우저에 따라 달라질 수 있습니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| loaded | 이벤트가 발생할 때까지 업로드 된 파일의 용량을 갖는 읽기전용 속성입니다. |
| total | 업로드 되어야 할 파일의 전체용량을 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > FileUpTransferProgressEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUpTransferProgressEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > FileUpTransferProgressEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
FileUpTransferProgressEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > FileUpTransferProgressEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
FileUpTransferProgressEventInfo.fromreferenceobject
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

### loaded

> EventInfo Objects > FileUpTransferProgressEventInfo > Property > loaded

**Description**

이벤트가 발생할 때까지 업로드 된 파일의 용량을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUpTransferProgressEventInfo.loaded
```

**Remark**

- 용량은 Byte 단위이며 파일의 갯수와 관계없이 전체 업로드 용량 중 현재까지 업로드 된 용량을 갖습니다.


---

### total

> EventInfo Objects > FileUpTransferProgressEventInfo > Property > total

**Description**

업로드 되어야 할 파일의 전체용량을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileUpTransferProgressEventInfo.total
```

**Remark**

- 용량은 Byte 단위이며 파일의 갯수와 관계없이 전체 업로드 용량을 갖습니다.


---

## EventInfo Objects > GeolocationErrorEventInfo

### GeolocationErrorEventInfo

> EventInfo Objects > GeolocationErrorEventInfo

**Description**

모바일 기기에서 위치정보 수신이 실패했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| errormsg | 발생한 에러에 대한 에러메시지를 갖는 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| statuscode | 발생한 에러에 대한 에러코드값을 갖는 속성입니다. |


---

### 속성 (Properties)

### errormsg

> EventInfo Objects > GeolocationErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러메시지를 갖는 속성입니다.

**Syntax**

```javascript
GeolocationErrorEventInfo.errormsg
```

**Setting Syntax**

- **`"00001"`** — Parameter Error
- **`"4000"`** — Unknown Error
- **`"4001"`** — Position Unavailable
- **`"4002"`** — Time Out
- **`"4003"`** — Device provider disable


---

### errortype

> EventInfo Objects > GeolocationErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
GeolocationErrorEventInfo.errortype
```

**Setting Syntax**

- **`"EvalError"`** — 현재 버전에서 발생하지 않지만 이전 버전과의 호환성을 유지하기 위해 정의
- **`"RangeError"`** — 숫자값이 허용된 범위를 넘어선 경우
- **`"ReferenceError"`** — 참조값이 유효하지 않은 경우
- **`"SyntaxError"`** — 파싱에 문제가 있을 경우
- **`"TypeError"`** — 피연산자의 자료형이 허용된 범위가 아닌 경우
- **`"URIError"`** — 전역 URI 처리 함수 중 하나가 해당 정의와 호환되지 않는 방식으로 사용된 경우
- **`"NativeError"`** — 모든 Native Error 인 경우
- **`"CommunicationError"`** — 통신시 발생한 에러인 경우
- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우


---

### eventid

> EventInfo Objects > GeolocationErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GeolocationErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### statuscode

> EventInfo Objects > GeolocationErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대한 에러코드값을 갖는 속성입니다.

**Syntax**

```javascript
GeolocationErrorEventInfo.statuscode
```

**Setting Syntax**

- **`"00001"`** — Parameter Error
- **`"4000"`** — Unknown Error
- **`"4001"`** — Position Unavailable
- **`"4002"`** — Time Out
- **`"4003"`** — Device provider disable


---

## EventInfo Objects > GeolocationEventInfo

### GeolocationEventInfo

> EventInfo Objects > GeolocationEventInfo

**Description**

모바일 기기에서 위치정보 수신이 성공했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| coords | 모바일 기기에서 마지막으로 수신된 위치정보 객체를 갖는 읽기전용 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| sourcetype | 위치정보를 제공한 소스를 갖는 속성입니다. |
| timestamp | 위치정보를 수신한 시간을 갖는 속성입니다. |


---

### 속성 (Properties)

### coords

> EventInfo Objects > GeolocationEventInfo > Property > coords

**Description**

모바일 기기에서 마지막으로 수신된 위치정보 객체를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GeolocationEventInfo.coords
```

**Setting Syntax**

```javascript
var nlatitude = e.coords.latitude ;
```
- **`accuracy`** — 위치정보의 오차범위값을 갖는 하위속성입니다.
- **`altitude`** — 위치정보 중 고도정보를 Meter 단위의 숫자로 갖는 하위속성입니다.
- **`altitudeaccuracy`** — 고도정보의 오차범위값을 갖는 하위속성입니다.
- **`heading`** — 위치정보 중 방향정보를 360도 단위의 숫자로 갖는 하위속성입니다.
- **`latitude`** — 위치정보 중 위도정보를 숫자로 갖는 하위속성입니다.
- **`longitude`** — 위치정보 중 경도정보를 숫자로 갖는 하위속성입니다.
- **`speed`** — 위치정보 중 속도정보를 Meter/Second 단위의 숫자로 갖는 하위속성입니다.

**Remark**

- Android 일 경우 altitudeaccuracy 하위속성을 지원하지 않습니다.
- 하위 속성 중 speed 속성값이 유효하지 않은 값인 경우(0 또는 0보다 작은 값)에는 speed 속성값을 undefined로 반환합니다.


---

### eventid

> EventInfo Objects > GeolocationEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GeolocationEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### sourcetype

> EventInfo Objects > GeolocationEventInfo > Property > sourcetype

**Description**

위치정보를 제공한 소스를 갖는 속성입니다.

**Syntax**

```javascript
GeolocationEventInfo.sourcetype
```

**Setting Syntax**

- **`1`** — GPS 에서 수신된 위치정보일 경우 갖는 값입니다.
- **`2`** — WPS 에서 수신된 위치정보일 경우 갖는 값입니다.


---

### timestamp

> EventInfo Objects > GeolocationEventInfo > Property > timestamp

**Description**

위치정보를 수신한 시간을 갖는 속성입니다.

**Syntax**

```javascript
GeolocationEventInfo.timestamp
```

**Remark**

- 자바스크립트의 Date 객체 형태로 값을 갖습니다.


---

## EventInfo Objects > GoogleMapClickEventInfo

### GoogleMapClickEventInfo

> EventInfo Objects > GoogleMapClickEventInfo

**Description**

GoogleMap 컴포넌트에 로드된 지도를 클릭하면 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| latitude | GoogleMap 컴포넌트에 로드된 지도에서 클릭된 위치의 위도값을 갖는 읽기전용 속성입니다. |
| longitude | GoogleMap 컴포넌트에 로드된 지도에서 클릭된 위치의 경도값을 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > GoogleMapClickEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GoogleMapClickEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > GoogleMapClickEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
GoogleMapClickEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > GoogleMapClickEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
GoogleMapClickEventInfo.fromreferenceobject
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

### latitude

> EventInfo Objects > GoogleMapClickEventInfo > Property > latitude

**Description**

GoogleMap 컴포넌트에 로드된 지도에서 클릭된 위치의 위도값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GoogleMapClickEventInfo.latitude
```

**Setting Syntax**

```javascript
var nLatitude = e.latitude;
```


---

### longitude

> EventInfo Objects > GoogleMapClickEventInfo > Property > longitude

**Description**

GoogleMap 컴포넌트에 로드된 지도에서 클릭된 위치의 경도값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GoogleMapClickEventInfo.longitude
```

**Setting Syntax**

```javascript
var nLongitude = e.longitude;
```


---

## EventInfo Objects > GoogleMapDragEventInfo

### GoogleMapDragEventInfo

> EventInfo Objects > GoogleMapDragEventInfo

**Description**

GoogleMap 컴포넌트에 표시된 MapMarker 오브젝트를 드래그할 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > GoogleMapDragEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GoogleMapDragEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > GoogleMapDragEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
GoogleMapDragEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > GoogleMapDragEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
GoogleMapDragEventInfo.fromreferenceobject
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

## EventInfo Objects > GoogleMapErrorEventInfo

### GoogleMapErrorEventInfo

> EventInfo Objects > GoogleMapErrorEventInfo

**Description**

GoogleMap 컴포넌트에 에러가 있을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| errormsg | 발생한 에러에 대한 에러메시지를 갖는 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| statuscode | 발생한 에러에 대한 에러코드값를 갖는 속성입니다. |


---

### 속성 (Properties)

### errormsg

> EventInfo Objects > GoogleMapErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러메시지를 갖는 속성입니다.

**Syntax**

```javascript
GoogleMapErrorEventInfo.errormsg
```

**Setting Syntax**

- **`"00001"`** — Not configured properties
- **`"1501"`** — 추가할 아이템의 ID 가 이미 존재하는 경우
- **`"1502"`** — 제거할 아이템의 ID 를 찾을 수 없는 경우
- **`"1503"`** — Device provider disable
- **`"1504"`** — Irregular Expression Error

**Remark**

- Google Map 에서 전달된 에러메시지값을 갖습니다.


---

### errortype

> EventInfo Objects > GoogleMapErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
GoogleMapErrorEventInfo.errortype
```

**Setting Syntax**

- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우에 갖는 값입니다.

GoogleMap 컴포넌트에서 에러 발생 시 항상 이 값을 갖습니다.


---

### eventid

> EventInfo Objects > GoogleMapErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GoogleMapErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > GoogleMapErrorEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
GoogleMapErrorEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > GoogleMapErrorEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
GoogleMapErrorEventInfo.fromreferenceobject
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

### statuscode

> EventInfo Objects > GoogleMapErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대한 에러코드값를 갖는 속성입니다.

**Syntax**

```javascript
GoogleMapErrorEventInfo.statuscode
```

**Remark**

- Google Map 에서 전달된 에러코드값을 갖습니다.


---

## EventInfo Objects > GoogleMapEventInfo

### GoogleMapEventInfo

> EventInfo Objects > GoogleMapEventInfo

**Description**

GoogleMap 컴포넌트에 요청된 작업과 관련하여 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| addresses | getAddress() 메소드의 파라미터(위도,경도) 위치에 등록된 주소를 Collection 형태로 갖는 속성입니다. |
| centerlatitude | 이벤트가 발생했을 때 GoogleMap 컴포넌트에 로드된 지도의 중앙위치 위도값을 갖는 읽기전용 속성입니다. |
| centerlongitude | 이벤트가 발생했을 때 GoogleMap 컴포넌트에 로드된 지도의 중앙위치 경도값을 갖는 읽기전용 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| latitude | getCoordinates() 메소드의 파라미터(주소) 위치의 위도값을 갖는 읽기전용 속성입니다. |
| longitude | getCoordinates() 메소드의 파라미터(주소) 위치의 경도값을 갖는 읽기전용 속성입니다. |
| viewmode | 이벤트가 발생했을 때 GoogleMap 컴포넌트에 로드된 지도의 표시모드값을 갖는 속성입니다. |
| zoomlevel | 이벤트가 발생했을 때 GoogleMap 컴포넌트에 로드된 지도의 Zoom Level 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### addresses

> EventInfo Objects > GoogleMapEventInfo > Property > addresses

**Description**

getAddress() 메소드의 파라미터(위도,경도) 위치에 등록된 주소를 Collection 형태로 갖는 속성입니다.

**Syntax**

```javascript
GoogleMapEventInfo.addresses
```

**Remark**

- getAddress() 메소드에 의해 이벤트가 발생했을 때 값을 갖는 속성입니다.

**See Also**

GoogleMap.getAddress


---

### centerlatitude

> EventInfo Objects > GoogleMapEventInfo > Property > centerlatitude

**Description**

이벤트가 발생했을 때 GoogleMap 컴포넌트에 로드된 지도의 중앙위치 위도값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GoogleMapEventInfo.centerlatitude
```

**Setting Syntax**

```javascript
var nCenterLatitude = e.centerlatitude;
```


---

### centerlongitude

> EventInfo Objects > GoogleMapEventInfo > Property > centerlongitude

**Description**

이벤트가 발생했을 때 GoogleMap 컴포넌트에 로드된 지도의 중앙위치 경도값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GoogleMapEventInfo.centerlongitude
```

**Setting Syntax**

```javascript
var nCenterLongitude = e.centerlongitude;
```


---

### eventid

> EventInfo Objects > GoogleMapEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GoogleMapEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > GoogleMapEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
GoogleMapEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > GoogleMapEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
GoogleMapEventInfo.fromreferenceobject
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

### latitude

> EventInfo Objects > GoogleMapEventInfo > Property > latitude

**Description**

getCoordinates() 메소드의 파라미터(주소) 위치의 위도값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GoogleMapEventInfo.latitude
```

**Remark**

- getCoordinates() 메소드에 의해 이벤트가 발생했을 때 값을 갖는 속성입니다.


---

### longitude

> EventInfo Objects > GoogleMapEventInfo > Property > longitude

**Description**

getCoordinates() 메소드의 파라미터(주소) 위치의 경도값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GoogleMapEventInfo.longitude
```

**Remark**

- getCoordinates() 메소드에 의해 이벤트가 발생했을 때 값을 갖는 속성입니다.


---

### viewmode

> EventInfo Objects > GoogleMapEventInfo > Property > viewmode

**Description**

이벤트가 발생했을 때 GoogleMap 컴포넌트에 로드된 지도의 표시모드값을 갖는 속성입니다.

**Syntax**

```javascript
GoogleMapEventInfo.viewmode
```

**Setting Syntax**

- **`"0"`** — 로드된 지도가 일반 Google Map 형태일 때 갖는 값입니다.
- **`"1"`** — 로드된 지도가 위성 이미지일 때 갖는 값입니다.
- **`"2"`** — 로드된 지도가 위성 이미지이고, 주요거리의 투명레이어를 표시할 때 갖는 값입니다.
- **`"3"`** — 로드된 지도가 지형 및 초목과 같은 물리적인 지형지물과 주요거리 투명레이어를 표시할 때 갖는 값입니다.


---

### zoomlevel

> EventInfo Objects > GoogleMapEventInfo > Property > zoomlevel

**Description**

이벤트가 발생했을 때 GoogleMap 컴포넌트에 로드된 지도의 Zoom Level 값을 갖는 속성입니다.

**Syntax**

```javascript
GoogleMapEventInfo.zoomlevel
```

**Remark**

- 로딩된 지도의 Zoom Level 값은 0 이상의 정수입니다.


---

## EventInfo Objects > GridClickEventInfo

### GridClickEventInfo

> EventInfo Objects > GridClickEventInfo

**Description**

Grid 컴포넌트를 클릭했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| button | 이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다. |
| canvasx | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| canvasy | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| cell | 이벤트가 발생한 Cell 이 밴드에서 위치한 인덱스값을 갖는 속성입니다. |
| clickitem | 이벤트를 발생시킨 Cell 의 상세정보를 갖는 읽기전용 속성입니다. |
| clientx | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| clienty | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| col | 이벤트가 발생한 Cell 의 Column 인덱스값을 갖는 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| oldcell | 이벤트가 발생하기 전에 선택되어 있던 Cell 이 밴드에서 위치한 인덱스값을 갖는 속성입니다. |
| oldcol | 이벤트가 발생하기 전에 선택되어 있던 Cell 의 Column 인덱스값을 갖는 속성입니다. |
| oldrow | 이벤트가 발생하기 전에 선택되어 있던 Cell 의 Row 인덱스값을 갖는 속성입니다. |
| oldsubrow | 이벤트가 발생한 Cell 의 subrow 인덱스값을 갖는 속성입니다. |
| row | 이벤트가 발생한 Cell 의 Row 인덱스값을 갖는 속성입니다. |
| screenx | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| screeny | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |
| subrow | 이벤트가 발생한 Cell 의 subrow 인덱스값을 갖는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| preventDefault | 현재 이벤트의 Default Action 을 취소하는 메소드입니다. |


---

### 속성 (Properties)

### altkey

> EventInfo Objects > GridClickEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
GridClickEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### button

> EventInfo Objects > GridClickEventInfo > Property > button

**Description**

이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GridClickEventInfo.button
```

**Setting Syntax**

```javascript
var strButton = e.button;
```
- **`"none"`** — 마우스 버튼에 의해 발생한 이벤트가 아닌 경우 갖는 값입니다.
- **`"lbutton"`** — 마우스의 왼쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"rbutton"`** — 마우스의 오른쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"mbutton"`** — 마우스의 가운데 버튼(Wheel)에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton1"`** — 마우스의 첫번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton2"`** — 마우스의 두번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"touch"`** — 터치에 의해 이벤트가 발생했을 때 갖는 값입니다.


---

### canvasx

> EventInfo Objects > GridClickEventInfo > Property > canvasx

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridClickEventInfo.canvasx
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### canvasy

> EventInfo Objects > GridClickEventInfo > Property > canvasy

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridClickEventInfo.canvasy
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### cell

> EventInfo Objects > GridClickEventInfo > Property > cell

**Description**

이벤트가 발생한 Cell 이 밴드에서 위치한 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridClickEventInfo.cell
```

**Setting Syntax**

```javascript
var nCell = e.cell;
```

**Remark**

- Head,Body,Summary 밴드는 각 밴드별로 Cell 목록을 가집니다.

- Cell 인덱스는 왼쪽에서 오른쪽으로 위에서 아래로 지정됩니다.


---

### clickitem

> EventInfo Objects > GridClickEventInfo > Property > clickitem

**Description**

이벤트를 발생시킨 Cell 의 상세정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GridClickEventInfo.clickitem
```

**Setting Syntax**

- **`"control"`** — displaytype 속성값이 "buttoncontrol", "calendarcontrol", "checkboxcontrol", "combocontrol", "editcontrol", "maskeditcontrol", "progressbarcontrol", "radioitemcontrol", "textareacontrol" 중 하나인 Cell 을 클릭했을 때 갖는 값입니다.
- **`"image"`** — displaytype 속성값이 "imgaecontrol" 인 Cell 을 클릭했을 때 갖는 값입니다.
- **`"treeitembutton"`** — displaytype 속성값이 "treeitemcontrol" 인 Cell 에서 Collapse/Expand 버튼을 클릭했을 때 갖는 값입니다.
- **`"treeitemcheckbox"`** — displaytype 속성값이 "treeitemcontrol" 인 Cell 에서 체크박스를 클릭했을 때 갖는 값입니다.
- **`"expanddown"`** — Cell 의 오른쪽에 표시된 확장버튼을 클릭했을 때 갖는 값입니다.

**Remark**

- "control", "cellimage", "treeitembutton", "treeitemcheckbox", "exapnddown" 이외의 영역에서 이벤트 발생 시 clickitem 속성은 빈문자열(Empty String)을 갖습니다.

- clickitem 속성은 성능을 보장하기 위해 이벤트 발생 시에는 값을 가지고 있지 않습니다.
  스크립트에서 clickitem 속성값을 접근할 때 값을 가져옵니다. 그러므로 Debugging 할 때에는 Watch Tab에 항상 빈 값으로 보입니다.
  또한 잦은 속성값 접근은 성능 저하를 유발할 수 있으니, 변수에 할당하여 사용하시길 권장합니다.


---

### clientx

> EventInfo Objects > GridClickEventInfo > Property > clientx

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridClickEventInfo.clientx
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### clienty

> EventInfo Objects > GridClickEventInfo > Property > clienty

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridClickEventInfo.clienty
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### col

> EventInfo Objects > GridClickEventInfo > Property > col

**Description**

이벤트가 발생한 Cell 의 Column 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridClickEventInfo.col
```

**Setting Syntax**

```javascript
var nCol = e.col;
```

**Remark**

- Column 인덱스값은 왼쪽에서 오른쪽으로 지정됩니다.


---

### ctrlkey

> EventInfo Objects > GridClickEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
GridClickEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### eventid

> EventInfo Objects > GridClickEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GridClickEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > GridClickEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
GridClickEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > GridClickEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
GridClickEventInfo.fromreferenceobject
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

### metakey

> EventInfo Objects > GridClickEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
GridClickEventInfo.metakey
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

### oldcell

> EventInfo Objects > GridClickEventInfo > Property > oldcell

**Description**

이벤트가 발생하기 전에 선택되어 있던 Cell 이 밴드에서 위치한 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridClickEventInfo.oldcell
```

**Setting Syntax**

```javascript
var nOldcell = e.oldcell;
```

**Remark**

- Head,Body,Summary 밴드는 각 밴드별로 Cell 목록을 가집니다.

- Cell 인덱스는 왼쪽에서 오른쪽으로 위에서 아래로 지정됩니다.


---

### oldcol

> EventInfo Objects > GridClickEventInfo > Property > oldcol

**Description**

이벤트가 발생하기 전에 선택되어 있던 Cell 의 Column 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridClickEventInfo.oldcol
```

**Setting Syntax**

```javascript
var nOldcol = e.oldcol;
```

**Remark**

- Column 인덱스값은 왼쪽에서 오른쪽으로 지정됩니다.


---

### oldrow

> EventInfo Objects > GridClickEventInfo > Property > oldrow

**Description**

이벤트가 발생하기 전에 선택되어 있던 Cell 의 Row 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridClickEventInfo.oldrow
```

**Setting Syntax**

```javascript
var nOldrow = e.oldrow;
```

**Remark**

- Grid 에 바인딩된 DataSet 의 rowposition 속성값과 같은 값을 갖습니다.

- Head 밴드에서 이벤트가 발생하면 "-1" 값을 갖습니다.

- Summary 밴드에서 이벤트가 발생하면 "-2" 값을 갖습니다.

- Grid 가 트리형태일 때 화면에 표시되는 위치와 DataSet 의 rowposition 값이 달라집니다.
  화면에 표시되는 위치의 Row 인덱스값이 필요할 때는 Grid 의 getTreeRow() 메소드를 사용하여야 합니다.

this.Grid00_onclick = function(obj:nexacro.Grid, e:nexacro.GridClickEventInfo)
{
    trace(obj.getTreeRow(e.row));
}


---

### oldsubrow

> EventInfo Objects > GridClickEventInfo > Property > oldsubrow

**Description**

이벤트가 발생한 Cell 의 subrow 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridClickEventInfo.oldsubrow
```

**Setting Syntax**

```javascript
var nOldsubrow = e.oldsubrow;
```

**Remark**

- 병합된 Cell 일 경우 병합된 Cell 중 첫번째 Cell 의 subrow 값을 갖습니다.


---

### row

> EventInfo Objects > GridClickEventInfo > Property > row

**Description**

이벤트가 발생한 Cell 의 Row 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridClickEventInfo.row
```

**Setting Syntax**

```javascript
var nRow = e.row;
```

**Remark**

- Grid 에 바인딩된 DataSet 의 rowposition 속성값과 같은 값을 갖습니다.

- Head 밴드에서 이벤트가 발생하면 "-1" 값을 갖습니다.

- Summary 밴드에서 이벤트가 발생하면 "-2" 값을 갖습니다.

- Grid 가 트리형태일 때 화면에 표시되는 위치와 DataSet 의 rowposition 값이 달라집니다.
  화면에 표시되는 위치의 Row 인덱스값이 필요할 때는 Grid 의 getTreeRow() 메소드를 사용하여야 합니다.

this.Grid00_onclick = function(obj:nexacro.Grid, e:nexacro.GridClickEventInfo)
{
    trace(obj.getTreeRow(e.row));
}


---

### screenx

> EventInfo Objects > GridClickEventInfo > Property > screenx

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridClickEventInfo.screenx
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### screeny

> EventInfo Objects > GridClickEventInfo > Property > screeny

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridClickEventInfo.screeny
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 y 좌표를 계산합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다.
  때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.


---

### shiftkey

> EventInfo Objects > GridClickEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
GridClickEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### subrow

> EventInfo Objects > GridClickEventInfo > Property > subrow

**Description**

이벤트가 발생한 Cell 의 subrow 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridClickEventInfo.subrow
```

**Setting Syntax**

```javascript
var nSubrow = e.subrow;
```

**Remark**

- 병합된 Cell 일 경우 병합된 Cell 중 첫번째 Cell 의 subrow 값을 갖습니다.


---

### 메서드 (Methods)

### preventDefault

> EventInfo Objects > GridClickEventInfo > Method > preventDefault

**Description**

현재 이벤트의 Default Action 을 취소하는 메소드입니다.

**Syntax**

```javascript
GridClickEventInfo.preventDefault()
```

**Return**

없음


---

## EventInfo Objects > GridContextMenuEventInfo

### GridContextMenuEventInfo

> EventInfo Objects > GridContextMenuEventInfo

**Description**

컴포넌트의 편집영역에 마우스 오른쪽 마우스 클릭 시 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- 모바일 기기의 경우 터치를 길게하면 오른쪽 마우스 클릭과 같은 효과가 발생합니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| button | 이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다. |
| canvasx | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| canvasy | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| cell | 이벤트를 발생시킨 Cell 이 밴드에서 위치한 인덱스값을 갖는 속성입니다. |
| clientx | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| clienty | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| col | 이벤트를 발생시킨 Cell 의 Column 인덱스값을 갖는 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| mergecell | SubCell 에 속한 Cell 에 의해 이벤트가 발생했을 경우 SubCell 내에서의 Cell 인덱스값을 갖는 속성입니다. |
| mergecol | SubCell 에 속한 Cell 에 의해 이벤트가 발생했을 경우 SubCell 내에서의 Column 인덱스값을 갖는 속성입니다. |
| mergerow | SubCell 에 속한 Cell 에 의해 이벤트가 발생했을 경우 SubCell 내에서의 Row 인덱스값을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| row | 이벤트를 발생시킨 Cell 의 Row 인덱스값을 갖는 속성입니다. |
| screenx | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| screeny | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |
| subrow | 이벤트를 발생시킨 Cell 의 subrow 인덱스값을 갖는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| preventDefault | 현재 이벤트의 Default Action 을 취소하는 메소드입니다. |


---

### 속성 (Properties)

### altkey

> EventInfo Objects > GridContextMenuEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
GridContextMenuEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### button

> EventInfo Objects > GridContextMenuEventInfo > Property > button

**Description**

이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GridContextMenuEventInfo.button
```

**Setting Syntax**

```javascript
var strButton = e.button;
```
- **`"none"`** — 마우스 버튼에 의해 발생한 이벤트가 아닌 경우 갖는 값입니다.
- **`"lbutton"`** — 마우스의 왼쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"rbutton"`** — 마우스의 오른쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"mbutton"`** — 마우스의 가운데 버튼(Wheel)에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton1"`** — 마우스의 첫번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton2"`** — 마우스의 두번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"touch"`** — 터치에 의해 이벤트가 발생했을 때 갖는 값입니다.


---

### canvasx

> EventInfo Objects > GridContextMenuEventInfo > Property > canvasx

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridContextMenuEventInfo.canvasx
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### canvasy

> EventInfo Objects > GridContextMenuEventInfo > Property > canvasy

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridContextMenuEventInfo.canvasy
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### cell

> EventInfo Objects > GridContextMenuEventInfo > Property > cell

**Description**

이벤트를 발생시킨 Cell 이 밴드에서 위치한 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridContextMenuEventInfo.cell
```


---

### clientx

> EventInfo Objects > GridContextMenuEventInfo > Property > clientx

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridContextMenuEventInfo.clientx
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### clienty

> EventInfo Objects > GridContextMenuEventInfo > Property > clienty

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridContextMenuEventInfo.clienty
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### col

> EventInfo Objects > GridContextMenuEventInfo > Property > col

**Description**

이벤트를 발생시킨 Cell 의 Column 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridContextMenuEventInfo.col
```


---

### ctrlkey

> EventInfo Objects > GridContextMenuEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
GridContextMenuEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### eventid

> EventInfo Objects > GridContextMenuEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GridContextMenuEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > GridContextMenuEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
GridContextMenuEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > GridContextMenuEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
GridContextMenuEventInfo.fromreferenceobject
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

### mergecell

> EventInfo Objects > GridContextMenuEventInfo > Property > mergecell

**Description**

SubCell 에 속한 Cell 에 의해 이벤트가 발생했을 경우 SubCell 내에서의 Cell 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridContextMenuEventInfo.mergecell
```


---

### mergecol

> EventInfo Objects > GridContextMenuEventInfo > Property > mergecol

**Description**

SubCell 에 속한 Cell 에 의해 이벤트가 발생했을 경우 SubCell 내에서의 Column 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridContextMenuEventInfo.mergecol
```


---

### mergerow

> EventInfo Objects > GridContextMenuEventInfo > Property > mergerow

**Description**

SubCell 에 속한 Cell 에 의해 이벤트가 발생했을 경우 SubCell 내에서의 Row 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridContextMenuEventInfo.mergerow
```


---

### metakey

> EventInfo Objects > GridContextMenuEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
GridContextMenuEventInfo.metakey
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

### row

> EventInfo Objects > GridContextMenuEventInfo > Property > row

**Description**

이벤트를 발생시킨 Cell 의 Row 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridContextMenuEventInfo.row
```


---

### screenx

> EventInfo Objects > GridContextMenuEventInfo > Property > screenx

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridContextMenuEventInfo.screenx
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### screeny

> EventInfo Objects > GridContextMenuEventInfo > Property > screeny

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridContextMenuEventInfo.screeny
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 y 좌표를 계산합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다.
  때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.


---

### shiftkey

> EventInfo Objects > GridContextMenuEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
GridContextMenuEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### subrow

> EventInfo Objects > GridContextMenuEventInfo > Property > subrow

**Description**

이벤트를 발생시킨 Cell 의 subrow 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridContextMenuEventInfo.subrow
```


---

### 메서드 (Methods)

### preventDefault

> EventInfo Objects > GridContextMenuEventInfo > Method > preventDefault

**Description**

현재 이벤트의 Default Action 을 취소하는 메소드입니다.

**Syntax**

```javascript
GridContextMenuEventInfo.preventDefault()
```

**Return**

없음


---

## EventInfo Objects > GridDragEventInfo

### GridDragEventInfo

> EventInfo Objects > GridDragEventInfo

**Description**

Grid 컴포넌트에서 Drag 액션과 관련하여 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| button | 이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다. |
| canvasx | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| canvasy | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| cell | 이벤트가 발생한 Cell 이 밴드에서 위치한 인덱스값을 갖는 속성입니다. |
| clientx | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| clienty | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| col | 이벤트가 발생한 Cell 의 Column 인덱스값을 갖는 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| datatype | Drag 액션이 발생한 위치에 대한 정보를 갖는 읽기전용 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| filelist | 어플리케이션 외부에서 파일을 Drag 했을 때 파일의 정보를 배열형태로 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| row | 이벤트가 발생한 Cell 의 Row 인덱스값을 갖는 속성입니다. |
| screenx | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| screeny | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |
| sourceobject | Drag 액션이 처음 발생한 컴포넌트를 갖는 속성입니다. |
| sourcereferenceobject | Drag 액션이 처음 발생한 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| subrow | 이벤트가 발생한 Cell 의 subrow 인덱스값을 갖는 속성입니다. |
| userdata | Drag 관련 이벤트에서 사용자가 값을 설정하여 사용할 수 있는 속성입니다. |


---

### 속성 (Properties)

### altkey

> EventInfo Objects > GridDragEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
GridDragEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### button

> EventInfo Objects > GridDragEventInfo > Property > button

**Description**

이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GridDragEventInfo.button
```

**Setting Syntax**

```javascript
var strButton = e.button;
```
- **`"none"`** — 마우스 버튼에 의해 발생한 이벤트가 아닌 경우 갖는 값입니다.
- **`"lbutton"`** — 마우스의 왼쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"rbutton"`** — 마우스의 오른쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"mbutton"`** — 마우스의 가운데 버튼(Wheel)에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton1"`** — 마우스의 첫번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton2"`** — 마우스의 두번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"touch"`** — 터치에 의해 이벤트가 발생했을 때 갖는 값입니다.


---

### canvasx

> EventInfo Objects > GridDragEventInfo > Property > canvasx

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridDragEventInfo.canvasx
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### canvasy

> EventInfo Objects > GridDragEventInfo > Property > canvasy

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridDragEventInfo.canvasy
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### cell

> EventInfo Objects > GridDragEventInfo > Property > cell

**Description**

이벤트가 발생한 Cell 이 밴드에서 위치한 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridDragEventInfo.cell
```

**Setting Syntax**

```javascript
var nCell = e.cell;
```

**Remark**

- Head,Body,Summary 밴드는 각 밴드별로 Cell 목록을 가집니다.

- Cell 인덱스는 왼쪽에서 오른쪽으로 위에서 아래로 지정됩니다.


---

### clientx

> EventInfo Objects > GridDragEventInfo > Property > clientx

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridDragEventInfo.clientx
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### clienty

> EventInfo Objects > GridDragEventInfo > Property > clienty

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridDragEventInfo.clienty
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### col

> EventInfo Objects > GridDragEventInfo > Property > col

**Description**

이벤트가 발생한 Cell 의 Column 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridDragEventInfo.col
```

**Setting Syntax**

```javascript
var nCol = e.col;
```

**Remark**

- Column 인덱스값은 왼쪽에서 오른쪽으로 지정됩니다.


---

### ctrlkey

> EventInfo Objects > GridDragEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
GridDragEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### datatype

> EventInfo Objects > GridDragEventInfo > Property > datatype

**Description**

Drag 액션이 발생한 위치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GridDragEventInfo.datatype
```

**Setting Syntax**

```javascript
var strDataType = e.datatype;
```
- **`"text"`** — 어플리케이션 내부의 Drag 액션에 의해 발생한 이벤트일 때 갖는 값입니다.
- **`"file"`** — 어플리케이션 외부에서 파일을 Drag 하여 발생한 이벤트일 때 갖는 값입니다.

**Remark**

- 어플리케이션 외부에서 텍스트를 Drag 한 경우는 Drag 관련 이벤트가 발생하지 않습니다.


---

### eventid

> EventInfo Objects > GridDragEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GridDragEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### filelist

> EventInfo Objects > GridDragEventInfo > Property > filelist

**Description**

어플리케이션 외부에서 파일을 Drag 했을 때 파일의 정보를 배열형태로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GridDragEventInfo.filelist
```

**Setting Syntax**

```javascript
var objFile0 = e.filelist[0];
```
- **`filelist`** — VirtualFile 오브젝트의 배열로 구성되어 있습니다.

어플리케이션 내부의 Drag 액션에 의한 이벤트인 경우 값을 갖지 않습니다.

**Remark**

◆ web runtime environment 제약

- ondrop 이벤트 외 ondrag, ondragenter, ondragleave, ondragmove 이벤트에서 filelist 속성값이 정확하지 않을 수 있습니다.


---

### fromobject

> EventInfo Objects > GridDragEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
GridDragEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > GridDragEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
GridDragEventInfo.fromreferenceobject
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

### metakey

> EventInfo Objects > GridDragEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
GridDragEventInfo.metakey
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

### row

> EventInfo Objects > GridDragEventInfo > Property > row

**Description**

이벤트가 발생한 Cell 의 Row 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridDragEventInfo.row
```

**Setting Syntax**

```javascript
var nRow = e.row;
```

**Remark**

- Grid 에 바인딩된 DataSet 의 rowposition 속성값과 같은 값을 갖습니다.

- Head 밴드에서 이벤트가 발생하면 "-1" 값을 갖습니다.

- Summary 밴드에서 이벤트가 발생하면 "-2" 값을 갖습니다.

- Grid 가 트리형태일 때 화면에 표시되는 위치와 DataSet 의 rowposition 값이 달라집니다.
  화면에 표시되는 위치의 Row 인덱스값이 필요할 때는 Grid 의 getTreeRow() 메소드를 사용하여야 합니다.

this.Grid00_ondrag = function(obj:nexacro.Grid, e:nexacro.GridEditEventInfo)
{
    trace(obj.getTreeRow(e.row));
}


---

### screenx

> EventInfo Objects > GridDragEventInfo > Property > screenx

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridDragEventInfo.screenx
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### screeny

> EventInfo Objects > GridDragEventInfo > Property > screeny

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridDragEventInfo.screeny
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 y 좌표를 계산합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다.
  때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.


---

### shiftkey

> EventInfo Objects > GridDragEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
GridDragEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### sourceobject

> EventInfo Objects > GridDragEventInfo > Property > sourceobject

**Description**

Drag 액션이 처음 발생한 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
GridDragEventInfo.sourceobject
```

**Remark**

- ondrag 이벤트에서 리턴값을 "true" 로 반환한 컴포넌트를 갖습니다.


---

### sourcereferenceobject

> EventInfo Objects > GridDragEventInfo > Property > sourcereferenceobject

**Description**

Drag 액션이 처음 발생한 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
GridDragEventInfo.sourcereferenceobject
```

**Remark**

- ondrag 이벤트에서 리턴값을 "true" 로 반환한 컴포넌트 또는 서브컨트롤을 갖습니다.

- Calendar 와 같이 서브컨트롤이 있는 컴포넌트에서 서브컨트롤에 의해 이벤트가 발생한 경우 sourcereferenceobject 속성은 서브컨트롤을 갖습니다.
  Button 과 같이 서브컨트롤이 없는 컴포넌트는 해당 컴포넌트를 갖습니다.


---

### subrow

> EventInfo Objects > GridDragEventInfo > Property > subrow

**Description**

이벤트가 발생한 Cell 의 subrow 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridDragEventInfo.subrow
```

**Setting Syntax**

```javascript
var nSubrow = e.subrow;
```

**Remark**

- 병합된 Cell 일 경우 병합된 Cell 중 첫번째 Cell 의 subrow 값을 갖습니다.


---

### userdata

> EventInfo Objects > GridDragEventInfo > Property > userdata

**Description**

Drag 관련 이벤트에서 사용자가 값을 설정하여 사용할 수 있는 속성입니다.

**Syntax**

```javascript
GridDragEventInfo.userdata[= varUserData]
```

**Setting Syntax**

```javascript
e.userdata = "userData";
```

**Remark**

- ondrag 이벤트에서 userdata 속성값을 설정하면, 다른 Drag 관련 이벤트 발생 시 설정된 속성값이 유지되어 전달됩니다.

- Drag 가 유지되는 동안만 속성값이 유지되며, Drop 되어 Drag 액션이 종료되면 속성값도 지워집니다.


---

## EventInfo Objects > GridEditEventInfo

### GridEditEventInfo

> EventInfo Objects > GridEditEventInfo

**Description**

Grid 컴포넌트의 Cell 에 입력 컨트롤이 활성화 될 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- Grid 의 oncloseup, ondropdown, onenterdown 이벤트 발생 시 전달되는 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| cell | 입력 컨트롤이 활성화 된 Cell 이 밴드에서 위치한 인덱스값을 갖는 속성입니다. |
| col | 입력 컨트롤이 활성화 된 Cell 의 Column 인덱스값을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| row | 입력 컨트롤이 활성화 된 Cell 의 Row 인덱스값을 갖는 속성입니다. |
| subrow | 입력 컨트롤이 활성화 된 Cell 의 subrow 인덱스값을 갖는 속성입니다. |
| value | 입력 컨트롤이 활성화 된 Cell 의 value 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### cell

> EventInfo Objects > GridEditEventInfo > Property > cell

**Description**

입력 컨트롤이 활성화 된 Cell 이 밴드에서 위치한 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridEditEventInfo.cell
```

**Setting Syntax**

```javascript
var nCell = e.cell;
```

**Remark**

- Cell 인덱스는 왼쪽에서 오른쪽으로 위에서 아래로 지정됩니다.


---

### col

> EventInfo Objects > GridEditEventInfo > Property > col

**Description**

입력 컨트롤이 활성화 된 Cell 의 Column 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridEditEventInfo.col
```

**Setting Syntax**

```javascript
var nCol = e.col;
```

**Remark**

- Column 인덱스값은 왼쪽에서 오른쪽으로 지정됩니다.


---

### eventid

> EventInfo Objects > GridEditEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GridEditEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > GridEditEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
GridEditEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > GridEditEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
GridEditEventInfo.fromreferenceobject
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

### row

> EventInfo Objects > GridEditEventInfo > Property > row

**Description**

입력 컨트롤이 활성화 된 Cell 의 Row 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridEditEventInfo.row
```

**Setting Syntax**

```javascript
var nRow = e.row;
```

**Remark**

- Grid 에 바인딩된 DataSet 의 rowposition 속성값과 같은 값을 갖습니다.

- Grid 가 트리형태일 때 화면에 표시되는 위치와 DataSet 의 rowposition 값이 달라집니다.
  화면에 표시되는 위치의 Row 인덱스값이 필요할 때는 Grid 의 getTreeRow() 메소드를 사용하여야 합니다.

this.Grid00_onenterdown = function(obj:nexacro.Grid, e:nexacro.GridEditEventInfo)
{
    trace(obj.getTreeRow(e.row));
}


---

### subrow

> EventInfo Objects > GridEditEventInfo > Property > subrow

**Description**

입력 컨트롤이 활성화 된 Cell 의 subrow 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridEditEventInfo.subrow
```

**Setting Syntax**

```javascript
var nSubrow = e.subrow;
```

**Remark**

- 병합된 Cell 일 경우 병합된 Cell 중 첫번째 Cell 의 subrow 값을 갖습니다.


---

### value

> EventInfo Objects > GridEditEventInfo > Property > value

**Description**

입력 컨트롤이 활성화 된 Cell 의 value 값을 갖는 속성입니다.

**Syntax**

```javascript
GridEditEventInfo.value
```


---

## EventInfo Objects > GridHeadValueChangedEventInfo

### GridHeadValueChangedEventInfo

> EventInfo Objects > GridHeadValueChangedEventInfo

**Description**

Grid 컴포넌트의 Head 밴드 영역에서 Cell 내부에서 관리하는 HeadValue 값이 변경됐을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| cell | Cell 내부에서 관리하는 HeadValue 값이 변경된 Head 밴드 영역의 Cell 인덱스값을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| newvalue | Cell 내부에서 관리하는 HeadValue 값이 변경됐을 때 변경된 값을 갖는 속성입니다. |
| oldvalue | Cell 내부에서 관리하는 HeadValue 값이 변경됐을 때 변경되기 전 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### cell

> EventInfo Objects > GridHeadValueChangedEventInfo > Property > cell

**Description**

Cell 내부에서 관리하는 HeadValue 값이 변경된 Head 밴드 영역의 Cell 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridHeadValueChangedEventInfo.cell
```


---

### eventid

> EventInfo Objects > GridHeadValueChangedEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GridHeadValueChangedEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > GridHeadValueChangedEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
GridHeadValueChangedEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > GridHeadValueChangedEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
GridHeadValueChangedEventInfo.fromreferenceobject
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

### newvalue

> EventInfo Objects > GridHeadValueChangedEventInfo > Property > newvalue

**Description**

Cell 내부에서 관리하는 HeadValue 값이 변경됐을 때 변경된 값을 갖는 속성입니다.

**Syntax**

```javascript
GridHeadValueChangedEventInfo.newvalue
```


---

### oldvalue

> EventInfo Objects > GridHeadValueChangedEventInfo > Property > oldvalue

**Description**

Cell 내부에서 관리하는 HeadValue 값이 변경됐을 때 변경되기 전 값을 갖는 속성입니다.

**Syntax**

```javascript
GridHeadValueChangedEventInfo.oldvalue
```


---

## EventInfo Objects > GridImageErrorEventInfo

### GridImageErrorEventInfo

> EventInfo Objects > GridImageErrorEventInfo

**Description**

Grid 컴포넌트 Cell 오브젝트의 displaytype 속성값이 "imagecontrol"인 경우 이미지 로드 실패 시 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| cell | 이벤트가 발생한 Cell 이 밴드에서 위치한 인덱스값을 갖는 속성입니다. |
| errormsg | 발생한 에러에 대한 에러메시지를 갖는 속성입니다. |
| errorobj | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| requesturi | 이미지 로딩에 실패의 원인이 되는 URI 를 갖는 속성입니다. |
| row | 이벤트가 발생한 Cell의 Row 인덱스 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### cell

> EventInfo Objects > GridImageErrorEventInfo > Property > cell

**Description**

이벤트가 발생한 Cell 이 밴드에서 위치한 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridImageErrorEventInfo.cell
```

**Setting Syntax**

```javascript
var nCell = e.cell;
```

**Remark**

- Cell 인덱스는 왼쪽에서 오른쪽으로 위에서 아래로 지정됩니다.


---

### errormsg

> EventInfo Objects > GridImageErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러메시지를 갖는 속성입니다.

**Syntax**

```javascript
GridImageErrorEventInfo.errormsg
```

**Setting Syntax**

```javascript
var strErrmsg = e.errormsg;
```


---

### errorobj

> EventInfo Objects > GridImageErrorEventInfo > Property > errorobj

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
GridImageErrorEventInfo.errorobj
```

**Setting Syntax**

```javascript
var objComp = e.erroobj;
```


---

### errortype

> EventInfo Objects > GridImageErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
GridImageErrorEventInfo.errortype
```

**Setting Syntax**

- **`"EvalError"`** — 현재 버전에서 발생하지 않지만 이전 버전과의 호환성을 유지하기 위해 정의
- **`"RangeError"`** — 숫자값이 허용된 범위를 넘어선 경우
- **`"ReferenceError"`** — 참조값이 유효하지 않은 경우
- **`"SyntaxError"`** — 파싱에 문제가 있을 경우
- **`"TypeError"`** — 피연산자의 자료형이 허용된 범위가 아닌 경우
- **`"URIError"`** — 전역 URI 처리 함수 중 하나가 해당 정의와 호환되지 않는 방식으로 사용된 경우
- **`"NativeError"`** — 모든 Native Error 인 경우
- **`"CommunicationError"`** — 통신시 발생한 에러인 경우
- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우


---

### eventid

> EventInfo Objects > GridImageErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GridImageErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### requesturi

> EventInfo Objects > GridImageErrorEventInfo > Property > requesturi

**Description**

이미지 로딩에 실패의 원인이 되는 URI 를 갖는 속성입니다.

**Syntax**

```javascript
GridImageErrorEventInfo.requesturi
```


---

### row

> EventInfo Objects > GridImageErrorEventInfo > Property > row

**Description**

이벤트가 발생한 Cell의 Row 인덱스 값을 갖는 속성입니다.

**Syntax**

```javascript
GridImageErrorEventInfo.row
```

**Setting Syntax**

```javascript
var nRow = e.row;
```

**Remark**

- Grid 컴포넌트에 바인딩 된 Dataset 오브젝트의 rowposition 속성값과 같은 값을 갖습니다.


---

## EventInfo Objects > GridInputEventInfo

### GridInputEventInfo

> EventInfo Objects > GridInputEventInfo

**Description**

Grid 컴포넌트 Cell의 입력 컨트롤 영역이 활성화된 상태에서 문자 입력 시도 시 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| cell | 이벤트가 발생한 Cell이 밴드에서 위치한 인덱스 값을 갖는 속성입니다. |
| col | 이벤트가 발생한 Cell의 Column 인덱스 값을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| row | 이벤트가 발생한 Cell의 Row 인덱스 값을 갖는 속성입니다. |
| subrow | 이벤트가 발생한 Cell의 subrow 인덱스 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### cell

> EventInfo Objects > GridInputEventInfo > Property > cell

**Description**

이벤트가 발생한 Cell이 밴드에서 위치한 인덱스 값을 갖는 속성입니다.

**Syntax**

```javascript
GridInputEventInfo.cell
```

**Setting Syntax**

```javascript
var nCell = e.cell;
```

**Remark**

- Cell 인덱스는 왼쪽에서 오른쪽으로 위에서 아래로 지정됩니다.


---

### col

> EventInfo Objects > GridInputEventInfo > Property > col

**Description**

이벤트가 발생한 Cell의 Column 인덱스 값을 갖는 속성입니다.

**Syntax**

```javascript
GridInputEventInfo.col
```

**Setting Syntax**

```javascript
var nCol = e.col;
```

**Remark**

- Column 인덱스값은 왼쪽에서 오른쪽으로 지정됩니다.


---

### eventid

> EventInfo Objects > GridInputEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GridInputEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > GridInputEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
GridInputEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > GridInputEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
GridInputEventInfo.fromreferenceobject
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

### row

> EventInfo Objects > GridInputEventInfo > Property > row

**Description**

이벤트가 발생한 Cell의 Row 인덱스 값을 갖는 속성입니다.

**Syntax**

```javascript
GridInputEventInfo.row
```

**Setting Syntax**

```javascript
var nRow = e.row;
```

**Remark**

- Grid 컴포넌트에 바인딩 된 Dataset 오브젝트의 rowposition 속성값과 같은 값을 갖습니다.

- Grid 컴포넌트가 트리 형태일 때 화면에 표시되는 위치와 DataSet 오브젝트의 rowposition 값이 달라집니다.
  화면에 표시되는 위치의 Row 인덱스값이 필요할 때는 Grid 컴포넌트의 getTreeRow 메소드를 사용합니다.

this.Grid00_oninput = function(obj:nexacro.Grid, e:nexacro.GridInputEventInfo)
{
    trace(obj.getTreeRow(e.row));
}


---

### subrow

> EventInfo Objects > GridInputEventInfo > Property > subrow

**Description**

이벤트가 발생한 Cell의 subrow 인덱스 값을 갖는 속성입니다.

**Syntax**

```javascript
GridInputEventInfo.subrow
```

**Setting Syntax**

```javascript
var nSubrow = e.subrow;
```

**Remark**

- 병합된 Cell 일 경우 병합된 Cell 중 첫 번째 Cell의 subrow 값을 갖습니다.


---

## EventInfo Objects > GridKeyEventInfo

### GridKeyEventInfo

> EventInfo Objects > GridKeyEventInfo

**Description**

포커스가 있는 컴포넌트에서 키보드의 키가 눌렸을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| cell | 이벤트가 발생한 Cell 이 밴드에서 위치한 인덱스값을 갖는 속성입니다. |
| col | 이벤트가 발생한 Cell 의 Column 인덱스값을 갖는 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| keycode | 키보드로 입력된 키에 해당하는 코드값을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| row | 이벤트를 발생시킨 아이템의 인덱스값을 갖는 읽기전용 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |
| subrow | 이벤트가 발생한 Cell 의 subrow 인덱스값을 갖는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| preventDefault | 현재 이벤트의 Default Action 을 취소하는 메소드입니다. |


---

### 속성 (Properties)

### altkey

> EventInfo Objects > GridKeyEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
GridKeyEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### cell

> EventInfo Objects > GridKeyEventInfo > Property > cell

**Description**

이벤트가 발생한 Cell 이 밴드에서 위치한 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridKeyEventInfo.cell
```

**Setting Syntax**

```javascript
var nCell = e.cell;
```

**Remark**

- Head,Body,Summary 밴드는 각 밴드별로 Cell 목록을 가집니다.

- Cell 인덱스는 왼쪽에서 오른쪽으로 위에서 아래로 지정됩니다.


---

### col

> EventInfo Objects > GridKeyEventInfo > Property > col

**Description**

이벤트가 발생한 Cell 의 Column 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridKeyEventInfo.col
```

**Setting Syntax**

```javascript
var nCol = e.col;
```

**Remark**

- Column 인덱스값은 왼쪽에서 오른쪽으로 지정됩니다.


---

### ctrlkey

> EventInfo Objects > GridKeyEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
GridKeyEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### eventid

> EventInfo Objects > GridKeyEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GridKeyEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > GridKeyEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
GridKeyEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > GridKeyEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
GridKeyEventInfo.fromreferenceobject
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

> EventInfo Objects > GridKeyEventInfo > Property > keycode

**Description**

키보드로 입력된 키에 해당하는 코드값을 갖는 속성입니다.

**Syntax**

```javascript
GridKeyEventInfo.keycode
```

**Setting Syntax**

```javascript
var nCode = e.keycode;
```

**Remark**

- 운영체제(OS)에 따른 Key Code 값을 갖습니다.


---

### metakey

> EventInfo Objects > GridKeyEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
GridKeyEventInfo.metakey
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

### row

> EventInfo Objects > GridKeyEventInfo > Property > row

**Description**

이벤트를 발생시킨 아이템의 인덱스값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GridKeyEventInfo.row
```

**Setting Syntax**

```javascript
var nRow = e.row;
```

**Remark**

- ListView 에 바인딩된 DataSet 의 rowposition 속성값과 같은 값을 갖습니다.


---

### shiftkey

> EventInfo Objects > GridKeyEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
GridKeyEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### subrow

> EventInfo Objects > GridKeyEventInfo > Property > subrow

**Description**

이벤트가 발생한 Cell 의 subrow 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridKeyEventInfo.subrow
```

**Setting Syntax**

```javascript
var nSubrow = e.subrow;
```

**Remark**

- 병합된 Cell 일 경우 병합된 Cell 중 첫번째 Cell 의 subrow 값을 갖습니다.


---

### 메서드 (Methods)

### preventDefault

> EventInfo Objects > GridKeyEventInfo > Method > preventDefault

**Description**

현재 이벤트의 Default Action 을 취소하는 메소드입니다.

**Syntax**

```javascript
GridKeyEventInfo.preventDefault()
```

**Return**

없음


---

## EventInfo Objects > GridMouseEventInfo

### GridMouseEventInfo

> EventInfo Objects > GridMouseEventInfo

**Description**

Grid 컴포넌트 영역에서 마우스 액션과 관련하여 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- 마우스를 이동하거나 클릭할 때 관련된 이벤트가 발생합니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| button | 이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다. |
| canvasx | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| canvasy | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| cell | 이벤트를 발생시킨 Cell 이 밴드에서 위치한 인덱스값을 갖는 속성입니다. |
| clientx | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| clienty | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| col | 이벤트를 발생시킨 Cell 의 Column 인덱스값을 갖는 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| mergecell | SubCell 에 속한 Cell 에 의해 이벤트가 발생했을 경우 SubCell 내에서의 Cell 인덱스값을 갖는 속성입니다. |
| mergecol | SubCell 에 속한 Cell 에 의해 이벤트가 발생했을 경우 SubCell 내에서의 Column 인덱스값을 갖는 속성입니다. |
| mergerow | SubCell 에 속한 Cell 에 의해 이벤트가 발생했을 경우 SubCell 내에서의 Row 인덱스값을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| row | 이벤트를 발생시킨 Cell 의 Row 인덱스값을 갖는 속성입니다. |
| screenx | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| screeny | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |
| subrow | 이벤트를 발생시킨 Cell 의 subrow 인덱스값을 갖는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| preventDefault | 현재 이벤트의 Default Action 을 취소하는 메소드입니다. |
| stopPropagation | 현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다. |


---

### 속성 (Properties)

### altkey

> EventInfo Objects > GridMouseEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
GridMouseEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### button

> EventInfo Objects > GridMouseEventInfo > Property > button

**Description**

이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GridMouseEventInfo.button
```

**Setting Syntax**

```javascript
var strButton = e.button;
```
- **`"none"`** — 마우스 버튼에 의해 발생한 이벤트가 아닌 경우 갖는 값입니다.
- **`"lbutton"`** — 마우스의 왼쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"rbutton"`** — 마우스의 오른쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"mbutton"`** — 마우스의 가운데 버튼(Wheel)에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton1"`** — 마우스의 첫번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton2"`** — 마우스의 두번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"touch"`** — 터치에 의해 이벤트가 발생했을 때 갖는 값입니다.


---

### canvasx

> EventInfo Objects > GridMouseEventInfo > Property > canvasx

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridMouseEventInfo.canvasx
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### canvasy

> EventInfo Objects > GridMouseEventInfo > Property > canvasy

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridMouseEventInfo.canvasy
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### cell

> EventInfo Objects > GridMouseEventInfo > Property > cell

**Description**

이벤트를 발생시킨 Cell 이 밴드에서 위치한 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridMouseEventInfo.cell
```


---

### clientx

> EventInfo Objects > GridMouseEventInfo > Property > clientx

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridMouseEventInfo.clientx
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### clienty

> EventInfo Objects > GridMouseEventInfo > Property > clienty

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridMouseEventInfo.clienty
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### col

> EventInfo Objects > GridMouseEventInfo > Property > col

**Description**

이벤트를 발생시킨 Cell 의 Column 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridMouseEventInfo.col
```


---

### ctrlkey

> EventInfo Objects > GridMouseEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
GridMouseEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### eventid

> EventInfo Objects > GridMouseEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GridMouseEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > GridMouseEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
GridMouseEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > GridMouseEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
GridMouseEventInfo.fromreferenceobject
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

### mergecell

> EventInfo Objects > GridMouseEventInfo > Property > mergecell

**Description**

SubCell 에 속한 Cell 에 의해 이벤트가 발생했을 경우 SubCell 내에서의 Cell 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridMouseEventInfo.mergecell
```


---

### mergecol

> EventInfo Objects > GridMouseEventInfo > Property > mergecol

**Description**

SubCell 에 속한 Cell 에 의해 이벤트가 발생했을 경우 SubCell 내에서의 Column 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridMouseEventInfo.mergecol
```


---

### mergerow

> EventInfo Objects > GridMouseEventInfo > Property > mergerow

**Description**

SubCell 에 속한 Cell 에 의해 이벤트가 발생했을 경우 SubCell 내에서의 Row 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridMouseEventInfo.mergerow
```


---

### metakey

> EventInfo Objects > GridMouseEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
GridMouseEventInfo.metakey
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

### row

> EventInfo Objects > GridMouseEventInfo > Property > row

**Description**

이벤트를 발생시킨 Cell 의 Row 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridMouseEventInfo.row
```


---

### screenx

> EventInfo Objects > GridMouseEventInfo > Property > screenx

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridMouseEventInfo.screenx
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### screeny

> EventInfo Objects > GridMouseEventInfo > Property > screeny

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
GridMouseEventInfo.screeny
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 y 좌표를 계산합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다.
  때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.


---

### shiftkey

> EventInfo Objects > GridMouseEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
GridMouseEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### subrow

> EventInfo Objects > GridMouseEventInfo > Property > subrow

**Description**

이벤트를 발생시킨 Cell 의 subrow 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridMouseEventInfo.subrow
```


---

### 메서드 (Methods)

### preventDefault

> EventInfo Objects > GridMouseEventInfo > Method > preventDefault

**Description**

현재 이벤트의 Default Action 을 취소하는 메소드입니다.

**Syntax**

```javascript
GridMouseEventInfo.preventDefault()
```

**Return**

없음


---

### stopPropagation

> EventInfo Objects > GridMouseEventInfo > Method > stopPropagation

**Description**

현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다.

**Syntax**

```javascript
GridMouseEventInfo.stopPropagation()
```

**Return**

없음


---

## EventInfo Objects > GridSelectEventInfo

### GridSelectEventInfo

> EventInfo Objects > GridSelectEventInfo

**Description**

Grid 컴포넌트의 선택영역이 변경되었을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| cell | 새로 선택된 영역에서 마지막으로 선택된 Cell 이 밴드에서 위치한 인덱스값을 갖는 속성입니다. |
| col | 새로 선택된 영역에서 마지막으로 선택된 Cell 의 Column 인덱스값을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| oldcell | 변경되기 전 선택 영역에서 마지막으로 선택된 Cell 이 밴드에서 위치한 인덱스값을 갖는 속성입니다. |
| oldcol | 변경되기 전 선택 영역에서 마지막으로 선택된 Cell 의 Column 인덱스값을 갖는 속성입니다. |
| oldrow | 변경되기 전 선택 영역에서 마지막으로 선택된 Cell 의 Row 인덱스값을 갖는 속성입니다. |
| oldsubrow | 변경되기 전 선택 영역에서 마지막으로 선택된 Cell 의 subrow 인덱스값을 갖는 속성입니다. |
| row | 새로 선택된 영역에서 마지막으로 선택된 Cell 의 Row 인덱스값을 갖는 속성입니다. |
| selectendcol | 새로 선택된 영역에서 마지막으로 선택된 Cell 의 Column 인덱스를 갖는 속성입니다. |
| selectendrow | 새로 선택된 영역에서 마지막으로 선택된 Cell 의 Row 인덱스값을 갖는 속성입니다. |
| selectendsubrow | 새로 선택된 영역에서 마지막으로 선택된 Cell 의 subrow 인덱스값을 갖는 속성입니다. |
| selectstartcol | 새로 선택된 영역에서 처음으로 선택된 Cell 의 Column 인덱스를 갖는 속성입니다. |
| selectstartrow | 새로 선택된 영역에서 처음으로 선택된 Cell 의 Row 인덱스값을 갖는 속성입니다. |
| selectstartsubrow | 새로 선택된 영역에서 처음으로 선택된 Cell 의 subrow 인덱스값을 갖는 속성입니다. |
| subrow | 새로 선택된 영역에서 마지막으로 선택된 Cell 의 subrow 인덱스값을 갖는 속성입니다. |


---

### 속성 (Properties)

### cell

> EventInfo Objects > GridSelectEventInfo > Property > cell

**Description**

새로 선택된 영역에서 마지막으로 선택된 Cell 이 밴드에서 위치한 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridSelectEventInfo.cell
```


---

### col

> EventInfo Objects > GridSelectEventInfo > Property > col

**Description**

새로 선택된 영역에서 마지막으로 선택된 Cell 의 Column 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridSelectEventInfo.col
```


---

### eventid

> EventInfo Objects > GridSelectEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GridSelectEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > GridSelectEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
GridSelectEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > GridSelectEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
GridSelectEventInfo.fromreferenceobject
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

### oldcell

> EventInfo Objects > GridSelectEventInfo > Property > oldcell

**Description**

변경되기 전 선택 영역에서 마지막으로 선택된 Cell 이 밴드에서 위치한 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridSelectEventInfo.oldcell
```


---

### oldcol

> EventInfo Objects > GridSelectEventInfo > Property > oldcol

**Description**

변경되기 전 선택 영역에서 마지막으로 선택된 Cell 의 Column 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridSelectEventInfo.oldcol
```


---

### oldrow

> EventInfo Objects > GridSelectEventInfo > Property > oldrow

**Description**

변경되기 전 선택 영역에서 마지막으로 선택된 Cell 의 Row 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridSelectEventInfo.oldrow
```


---

### oldsubrow

> EventInfo Objects > GridSelectEventInfo > Property > oldsubrow

**Description**

변경되기 전 선택 영역에서 마지막으로 선택된 Cell 의 subrow 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridSelectEventInfo.oldsubrow
```


---

### row

> EventInfo Objects > GridSelectEventInfo > Property > row

**Description**

새로 선택된 영역에서 마지막으로 선택된 Cell 의 Row 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridSelectEventInfo.row
```


---

### selectendcol

> EventInfo Objects > GridSelectEventInfo > Property > selectendcol

**Description**

새로 선택된 영역에서 마지막으로 선택된 Cell 의 Column 인덱스를 갖는 속성입니다.

**Syntax**

```javascript
GridSelectEventInfo.selectendcol
```


---

### selectendrow

> EventInfo Objects > GridSelectEventInfo > Property > selectendrow

**Description**

새로 선택된 영역에서 마지막으로 선택된 Cell 의 Row 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridSelectEventInfo.selectendrow
```


---

### selectendsubrow

> EventInfo Objects > GridSelectEventInfo > Property > selectendsubrow

**Description**

새로 선택된 영역에서 마지막으로 선택된 Cell 의 subrow 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridSelectEventInfo.selectendsubrow
```


---

### selectstartcol

> EventInfo Objects > GridSelectEventInfo > Property > selectstartcol

**Description**

새로 선택된 영역에서 처음으로 선택된 Cell 의 Column 인덱스를 갖는 속성입니다.

**Syntax**

```javascript
GridSelectEventInfo.selectstartcol
```


---

### selectstartrow

> EventInfo Objects > GridSelectEventInfo > Property > selectstartrow

**Description**

새로 선택된 영역에서 처음으로 선택된 Cell 의 Row 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridSelectEventInfo.selectstartrow
```


---

### selectstartsubrow

> EventInfo Objects > GridSelectEventInfo > Property > selectstartsubrow

**Description**

새로 선택된 영역에서 처음으로 선택된 Cell 의 subrow 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridSelectEventInfo.selectstartsubrow
```


---

### subrow

> EventInfo Objects > GridSelectEventInfo > Property > subrow

**Description**

새로 선택된 영역에서 마지막으로 선택된 Cell 의 subrow 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridSelectEventInfo.subrow
```


---

## EventInfo Objects > GridSizeChangedEventInfo

### GridSizeChangedEventInfo

> EventInfo Objects > GridSizeChangedEventInfo

**Description**

Grid 컴포넌트에서 Row 또는 Column 의 크기가 변경되었을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| formatindex | 크기가 변경된 Row 또는 Column 이 Format 에서 위치한 인덱스값을 갖는 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| index | 크기가 변경된 Row 의 인덱스값을 갖는 속성입니다. |
| newvalue | 새로 변경된 Row 또는 Column 의 크기값을 갖는 속성입니다. |
| oldvalue | 변경되기 전 Row 또는 Column 의 크기값을 갖는 속성입니다. |
| reason | 크기가 변경된 대상에 대한 구별값을 정수로 갖는 읽기전용 속성입니다. |
| subindex | 크기가 변경된 Row 의 subrow 또는 Column 의 col 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > GridSizeChangedEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GridSizeChangedEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### formatindex

> EventInfo Objects > GridSizeChangedEventInfo > Property > formatindex

**Description**

크기가 변경된 Row 또는 Column 이 Format 에서 위치한 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridSizeChangedEventInfo.formatindex
```

**Remark**

- Grid 에 정의된 Format 중 현재 화면에 표시된 Format 을 기준으로 한 인덱스값입니다.


---

### fromobject

> EventInfo Objects > GridSizeChangedEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
GridSizeChangedEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > GridSizeChangedEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
GridSizeChangedEventInfo.fromreferenceobject
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

### index

> EventInfo Objects > GridSizeChangedEventInfo > Property > index

**Description**

크기가 변경된 Row 의 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridSizeChangedEventInfo.index
```

**Remark**

- Column 의 크기 변경에 의해 이벤트가 발생했을 경우 "-9" 값을 갖습니다.


---

### newvalue

> EventInfo Objects > GridSizeChangedEventInfo > Property > newvalue

**Description**

새로 변경된 Row 또는 Column 의 크기값을 갖는 속성입니다.

**Syntax**

```javascript
GridSizeChangedEventInfo.newvalue
```


---

### oldvalue

> EventInfo Objects > GridSizeChangedEventInfo > Property > oldvalue

**Description**

변경되기 전 Row 또는 Column 의 크기값을 갖는 속성입니다.

**Syntax**

```javascript
GridSizeChangedEventInfo.oldvalue
```


---

### reason

> EventInfo Objects > GridSizeChangedEventInfo > Property > reason

**Description**

크기가 변경된 대상에 대한 구별값을 정수로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GridSizeChangedEventInfo.reason
```

**Setting Syntax**

- **`1`** — Column 의 크기가 변경되어 이벤트가 발생했을 때 갖는 값입니다.
- **`2`** — Row 의 크기가 변경되어 이벤트가 발생했을 때 갖는 값입니다.


---

### subindex

> EventInfo Objects > GridSizeChangedEventInfo > Property > subindex

**Description**

크기가 변경된 Row 의 subrow 또는 Column 의 col 값을 갖는 속성입니다.

**Syntax**

```javascript
GridSizeChangedEventInfo.subindex
```


---

## EventInfo Objects > GridTreeStatusEventInfo

### GridTreeStatusEventInfo

> EventInfo Objects > GridTreeStatusEventInfo

**Description**

Grid 컴포넌트에서 트리 Cell 의 상태가 변경될 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| cell | 상태가 변경된 트리 Cell 이 밴드에서 위치한 인덱스값을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| realrow | 상태가 변경된 트리 Cell 이 DataSet 에 위치한 인덱스값을 갖는 속성입니다. |
| reason | 트리 Cell 의 변경된 상태값을 정수로 갖는 읽기전용 속성입니다. |
| row | 상태가 변경된 트리 Cell 이 Grid 에 표시되는 위치의 인덱스값을 갖는 속성입니다. |


---

### 속성 (Properties)

### cell

> EventInfo Objects > GridTreeStatusEventInfo > Property > cell

**Description**

상태가 변경된 트리 Cell 이 밴드에서 위치한 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridTreeStatusEventInfo.cell
```


---

### eventid

> EventInfo Objects > GridTreeStatusEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GridTreeStatusEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > GridTreeStatusEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
GridTreeStatusEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > GridTreeStatusEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
GridTreeStatusEventInfo.fromreferenceobject
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

### realrow

> EventInfo Objects > GridTreeStatusEventInfo > Property > realrow

**Description**

상태가 변경된 트리 Cell 이 DataSet 에 위치한 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridTreeStatusEventInfo.realrow
```

**Remark**

- 트리 Cell 이 화면에 표시된 위치와 관계없이 DataSet 에 실제로 위치한 Row 인덱스값을 갖습니다.


---

### reason

> EventInfo Objects > GridTreeStatusEventInfo > Property > reason

**Description**

트리 Cell 의 변경된 상태값을 정수로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
GridTreeStatusEventInfo.reason
```

**Setting Syntax**

- **`0`** — 트리 Cell 이 collapse 되었을 때 갖는 값입니다.
- **`1`** — 트리 Cell 이 Expand 되었을 때 갖는 값입니다.


---

### row

> EventInfo Objects > GridTreeStatusEventInfo > Property > row

**Description**

상태가 변경된 트리 Cell 이 Grid 에 표시되는 위치의 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
GridTreeStatusEventInfo.row
```

**Remark**

- 실제 DataSet 의 Row 인덱스와 관계없이 화면상에 표시된 위치의 인덱스값을 갖습니다.


---

## EventInfo Objects > ImagePickerErrorEventInfo

### ImagePickerErrorEventInfo

> EventInfo Objects > ImagePickerErrorEventInfo

**Description**

이미지 가져오기에 실패했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| errormsg | 발생한 에러에 대한 에러메시지를 갖는 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| statuscode | 발생한 에러에 대한 에러코드값을 갖는 속성입니다. |


---

### 속성 (Properties)

### errormsg

> EventInfo Objects > ImagePickerErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러메시지를 갖는 속성입니다.

**Syntax**

```javascript
ImagePickerErrorEventInfo.errormsg
```

**Setting Syntax**

- **`"00001"`** — Parameter Error
- **`"1300"`** — No ImagePicker Available

* Android NRE 는 발생하지 않는 에러입니다.
- **`"1301"`** — ImagePicker Application Cancel
- **`"1303"`** — IO Exception File Memory Error

* Android NRE 는 발생하지 않는 에러입니다.


---

### errortype

> EventInfo Objects > ImagePickerErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
ImagePickerErrorEventInfo.errortype
```

**Setting Syntax**

- **`"EvalError"`** — 현재 버전에서 발생하지 않지만 이전 버전과의 호환성을 유지하기 위해 정의
- **`"RangeError"`** — 숫자값이 허용된 범위를 넘어선 경우
- **`"ReferenceError"`** — 참조값이 유효하지 않은 경우
- **`"SyntaxError"`** — 파싱에 문제가 있을 경우
- **`"TypeError"`** — 피연산자의 자료형이 허용된 범위가 아닌 경우
- **`"URIError"`** — 전역 URI 처리 함수 중 하나가 해당 정의와 호환되지 않는 방식으로 사용된 경우
- **`"NativeError"`** — 모든 Native Error 인 경우
- **`"CommunicationError"`** — 통신시 발생한 에러인 경우
- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우


---

### eventid

> EventInfo Objects > ImagePickerErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ImagePickerErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### statuscode

> EventInfo Objects > ImagePickerErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대한 에러코드값을 갖는 속성입니다.

**Syntax**

```javascript
ImagePickerErrorEventInfo.statuscode
```

**Setting Syntax**

- **`"00001"`** — Parameter Error
- **`"1300"`** — No ImagePicker Available

* Android NRE 는 발생하지 않는 에러입니다.
- **`"1301"`** — ImagePicker Application Cancel
- **`"1303"`** — IO Exception File Memory Error

* Android NRE 는 발생하지 않는 에러입니다.


---

## EventInfo Objects > ImagePickerEventInfo

### ImagePickerEventInfo

> EventInfo Objects > ImagePickerEventInfo

**Description**

이미지 가져오기에 성공했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| imagedata | 선택된 이미지를 오브젝트 형태로 갖는 읽기전용 속성입니다. |
| imageurl | 선택된 이미지의 위치정보를 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > ImagePickerEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ImagePickerEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### imagedata

> EventInfo Objects > ImagePickerEventInfo > Property > imagedata

**Description**

선택된 이미지를 오브젝트 형태로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ImagePickerEventInfo.imagedata
```

**Remark**

- ImagePicker 의 open() 메소드 실행 시 첫번째 파라미터의 값을 "imagedata" 로 설정했을 경우 값을 갖습니다.


---

### imageurl

> EventInfo Objects > ImagePickerEventInfo > Property > imageurl

**Description**

선택된 이미지의 위치정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ImagePickerEventInfo.imageurl
```

**Remark**

- ImagePicker 의 open() 메소드 실행 시 첫번째 파라미터의 값을 "url" 로 설정했을 경우 값을 갖습니다.


---

## EventInfo Objects > InnerdataChangedEventInfo

### InnerdataChangedEventInfo

> EventInfo Objects > InnerdataChangedEventInfo

**Description**

컴포넌트의 innerdataset 속성에 바인드된 DataSet 의 value 가 변경되었을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| col | 값이 변경된 데이터의 Column 인덱스값을 갖는 읽기전용 속성입니다. |
| columnid | 값이 변경된 데이터의 Column ID 값을 갖는 읽기전용 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| newvalue | 변경된 값을 갖는 읽기전용 속성입니다. |
| oldvalue | 변경되기 전 원본값을 갖는 읽기전용 속성입니다. |
| row | 값이 변경된 데이터의 Row 인덱스값을 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### col

> EventInfo Objects > InnerdataChangedEventInfo > Property > col

**Description**

값이 변경된 데이터의 Column 인덱스값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
InnerdataChangedEventInfo.col
```

**Setting Syntax**

```javascript
var nCol = e.col;
```

**Remark**

- DataSet 의 Row 변경에 의해 이벤트가 발생하면 col 속성에 빈값이 설정됩니다.


---

### columnid

> EventInfo Objects > InnerdataChangedEventInfo > Property > columnid

**Description**

값이 변경된 데이터의 Column ID 값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
InnerdataChangedEventInfo.columnid
```

**Setting Syntax**

```javascript
var strColid = e.columnid;
```

**Remark**

- DataSet 의 Row 변경에 의해 이벤트가 발생하면 columnid 속성에 빈값이 설정됩니다.


---

### eventid

> EventInfo Objects > InnerdataChangedEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
InnerdataChangedEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > InnerdataChangedEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
InnerdataChangedEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > InnerdataChangedEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
InnerdataChangedEventInfo.fromreferenceobject
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

### newvalue

> EventInfo Objects > InnerdataChangedEventInfo > Property > newvalue

**Description**

변경된 값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
InnerdataChangedEventInfo.newvalue
```


---

### oldvalue

> EventInfo Objects > InnerdataChangedEventInfo > Property > oldvalue

**Description**

변경되기 전 원본값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
InnerdataChangedEventInfo.oldvalue
```


---

### row

> EventInfo Objects > InnerdataChangedEventInfo > Property > row

**Description**

값이 변경된 데이터의 Row 인덱스값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
InnerdataChangedEventInfo.row
```

**Setting Syntax**

```javascript
var nRow = e.row;
```

**Remark**

- DataSet 의 Row 변경에 의해 이벤트가 발생하면 row 속성에 빈값이 설정됩니다.


---

## EventInfo Objects > InputEventInfo

### InputEventInfo

> EventInfo Objects > InputEventInfo

**Description**

문자입력 기능이 있는 컴포넌트에서 문자 입력 시도 시 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > InputEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
InputEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > InputEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
InputEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > InputEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
InputEventInfo.fromreferenceobject
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

## EventInfo Objects > ItemChangeEventInfo

### ItemChangeEventInfo

> EventInfo Objects > ItemChangeEventInfo

**Description**

컴포넌트의 아이템 리스트에서 아이템 선택이 변경되었을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| postindex | 새로 변경된 아이템의 인덱스값을 갖는 속성입니다. |
| posttext | 새로 변경된 아이템의 text 값을 갖는 속성입니다. |
| postvalue | 새로 변경된 아이템의 value 값을 갖는 속성입니다. |
| preindex | 변경 전 아이템의 인덱스값을 갖는 속성입니다. |
| pretext | 변경 전 아이템의 text 값을 갖는 속성입니다. |
| prevalue | 변경 전 아이템의 value 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > ItemChangeEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ItemChangeEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > ItemChangeEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ItemChangeEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > ItemChangeEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
ItemChangeEventInfo.fromreferenceobject
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

### postindex

> EventInfo Objects > ItemChangeEventInfo > Property > postindex

**Description**

새로 변경된 아이템의 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
ItemChangeEventInfo.postindex
```

**Setting Syntax**

```javascript
var nPostIdx = e.postindex;
```


---

### posttext

> EventInfo Objects > ItemChangeEventInfo > Property > posttext

**Description**

새로 변경된 아이템의 text 값을 갖는 속성입니다.

**Syntax**

```javascript
ItemChangeEventInfo.posttext
```

**Setting Syntax**

```javascript
var strPosttext = e.posttext;
```


---

### postvalue

> EventInfo Objects > ItemChangeEventInfo > Property > postvalue

**Description**

새로 변경된 아이템의 value 값을 갖는 속성입니다.

**Syntax**

```javascript
ItemChangeEventInfo.postvalue
```

**Setting Syntax**

```javascript
var strPostvalue = e.postvalue;
```


---

### preindex

> EventInfo Objects > ItemChangeEventInfo > Property > preindex

**Description**

변경 전 아이템의 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
ItemChangeEventInfo.preindex
```

**Setting Syntax**

```javascript
var nPreIdx = e.preindex ;
```


---

### pretext

> EventInfo Objects > ItemChangeEventInfo > Property > pretext

**Description**

변경 전 아이템의 text 값을 갖는 속성입니다.

**Syntax**

```javascript
ItemChangeEventInfo.pretext
```

**Setting Syntax**

```javascript
var strPretext = e.pretext;
```


---

### prevalue

> EventInfo Objects > ItemChangeEventInfo > Property > prevalue

**Description**

변경 전 아이템의 value 값을 갖는 속성입니다.

**Syntax**

```javascript
ItemChangeEventInfo.prevalue
```

**Setting Syntax**

```javascript
var strPrevalue = e.prevalue;
```


---

## EventInfo Objects > ItemClickEventInfo

### ItemClickEventInfo

> EventInfo Objects > ItemClickEventInfo

**Description**

컴포넌트의 아이템 리스트에서 아이템을 클릭했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| index | 아이템 리스트에서 선택된 아이템의 인덱스값을 갖는 속성입니다. |
| itemtext | 아이템 리스트에서 선택된 아이템의 text 값을 갖는 속성입니다. |
| itemvalue | 아이템 리스트에서 선택된 아이템의 value 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > ItemClickEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ItemClickEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > ItemClickEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ItemClickEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > ItemClickEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
ItemClickEventInfo.fromreferenceobject
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

### index

> EventInfo Objects > ItemClickEventInfo > Property > index

**Description**

아이템 리스트에서 선택된 아이템의 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
ItemClickEventInfo.index
```

**Setting Syntax**

```javascript
var nItemIdx = e.index;
```


---

### itemtext

> EventInfo Objects > ItemClickEventInfo > Property > itemtext

**Description**

아이템 리스트에서 선택된 아이템의 text 값을 갖는 속성입니다.

**Syntax**

```javascript
ItemClickEventInfo.itemtext
```

**Setting Syntax**

```javascript
var nItemtext = e.itemtext;
```


---

### itemvalue

> EventInfo Objects > ItemClickEventInfo > Property > itemvalue

**Description**

아이템 리스트에서 선택된 아이템의 value 값을 갖는 속성입니다.

**Syntax**

```javascript
ItemClickEventInfo.itemvalue
```

**Setting Syntax**

```javascript
var nItemvalue = e.itemvalue;
```


---

## EventInfo Objects > KeyEventInfo

### KeyEventInfo

> EventInfo Objects > KeyEventInfo

**Description**

포커스가 있는 컴포넌트에서 키보드의 키가 눌렸을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| keycode | 키보드로 입력된 키에 해당하는 코드값을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| preventDefault | 현재 이벤트의 Default Action 을 취소하는 메소드입니다. |
| stopPropagation | 현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다. |


---

### 속성 (Properties)

### altkey

> EventInfo Objects > KeyEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
KeyEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### ctrlkey

> EventInfo Objects > KeyEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
KeyEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### eventid

> EventInfo Objects > KeyEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
KeyEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > KeyEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
KeyEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > KeyEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
KeyEventInfo.fromreferenceobject
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

> EventInfo Objects > KeyEventInfo > Property > keycode

**Description**

키보드로 입력된 키에 해당하는 코드값을 갖는 속성입니다.

**Syntax**

```javascript
KeyEventInfo.keycode
```

**Setting Syntax**

```javascript
var nCode = e.keycode;
```

**Remark**

- 운영체제(OS)에 따른 Key Code 값을 갖습니다.


---

### metakey

> EventInfo Objects > KeyEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
KeyEventInfo.metakey
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

> EventInfo Objects > KeyEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
KeyEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### 메서드 (Methods)

### preventDefault

> EventInfo Objects > KeyEventInfo > Method > preventDefault

**Description**

현재 이벤트의 Default Action 을 취소하는 메소드입니다.

**Syntax**

```javascript
KeyEventInfo.preventDefault()
```

**Return**

없음


---

### stopPropagation

> EventInfo Objects > KeyEventInfo > Method > stopPropagation

**Description**

현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다.

**Syntax**

```javascript
KeyEventInfo.stopPropagation()
```

**Return**

없음


---

## EventInfo Objects > KillFocusEventInfo

### KillFocusEventInfo

> EventInfo Objects > KillFocusEventInfo

**Description**

컴포넌트에서 포커스가 나갈 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| newcomponent | 이벤트 발생 후 새로 포커스가 이동하는 컴포넌트를 갖는 속성입니다. |
| newreferencecomponent | 이벤트 발생 후 새로 포커스가 이동하는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > KillFocusEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
KillFocusEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > KillFocusEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
KillFocusEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > KillFocusEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
KillFocusEventInfo.fromreferenceobject
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

### newcomponent

> EventInfo Objects > KillFocusEventInfo > Property > newcomponent

**Description**

이벤트 발생 후 새로 포커스가 이동하는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
KillFocusEventInfo.newcomponent
```

**Setting Syntax**

```javascript
var objNewComp = e.newcomponent;
```

**Remark**

- newcomponent 속성은 새로 포커스가 이동하는 컴포넌트를 갖습니다.

- 새로 포커스가 이동하는 컴포넌트가 Div 와 같은 컨테이너 컴포넌트 일 경우
   자식 컴포넌트 중 이전에 포커스를 받았거나 순서가 가장 빠른 컴포넌트가 포커스를 받습니다.
   따라서, newcomponent 속성은 실제 포커스를 받는 자식 컴포넌트를 갖습니다.

- newcomponent 가 복합컴포넌트가 아니면 newreferencecomponent 속성은 newcomponent 와 같은 값을 갖습니다.
   newcomponent 가 복합컴포넌트이면  newreferencecomponent 속성은 실제 포커스가 이동하는 서브컨트롤을 갖습니다.
   예를 들어 Calendar 컴포넌트에 새로 포커스가 이동한다면 newcomponent 속성은 Calendar 컴포넌트를 갖고, newreferencecomponent 속성은 Calendar 의 서브컨트롤을 갖습니다.


---

### newreferencecomponent

> EventInfo Objects > KillFocusEventInfo > Property > newreferencecomponent

**Description**

이벤트 발생 후 새로 포커스가 이동하는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
KillFocusEventInfo.newreferencecomponent
```

**Setting Syntax**

```javascript
var objNewrefer = e.newreferencecomponent;
```

**Remark**

- newcomponent 속성은 새로 포커스가 이동하는 컴포넌트를 갖습니다.

- 새로 포커스가 이동하는 컴포넌트가 Div 와 같은 컨테이너 컴포넌트 일 경우
   자식 컴포넌트 중 이전에 포커스를 받았거나 순서가 가장 빠른 컴포넌트가 포커스를 받습니다.
   따라서, newcomponent 속성은 실제 포커스를 받는 자식 컴포넌트를 갖습니다.

- newcomponent 가 복합컴포넌트가 아니면 newreferencecomponent 속성은 newcomponent 와 같은 값을 갖습니다.
   newcomponent 가 복합컴포넌트이면  newreferencecomponent 속성은 실제 포커스가 이동하는 서브컨트롤을 갖습니다.
   예를 들어 Calendar 컴포넌트에 새로 포커스가 이동한다면 newcomponent 속성은 Calendar 컴포넌트를 갖고, newreferencecomponent 속성은 Calendar 의 서브컨트롤을 갖습니다.


---

## EventInfo Objects > LayoutChangeEventInfo

### LayoutChangeEventInfo

> EventInfo Objects > LayoutChangeEventInfo

**Description**

Layout 이 적용된 Form 의 Layout 이 변경될 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| newlayout | 새로 변경된 Layout 의 이름을 갖는 속성입니다. |
| newlayoutheight | 새로 변경된 Layout 의 높이를 갖는 속성입니다. |
| newlayoutwidth | 새로 변경된 Layout 의 너비를 갖는 속성입니다. |
| oldlayout | 변경 전 Layout 의 이름을 갖는 속성입니다. |
| oldlayoutheight | 변경 전 Layout 의 높이를 갖는 속성입니다. |
| oldlayoutwidth | 변경 전 Layout 의 너비를 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > LayoutChangeEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
LayoutChangeEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > LayoutChangeEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
LayoutChangeEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > LayoutChangeEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
LayoutChangeEventInfo.fromreferenceobject
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

### newlayout

> EventInfo Objects > LayoutChangeEventInfo > Property > newlayout

**Description**

새로 변경된 Layout 의 이름을 갖는 속성입니다.

**Syntax**

```javascript
LayoutChangeEventInfo.newlayout
```


---

### newlayoutheight

> EventInfo Objects > LayoutChangeEventInfo > Property > newlayoutheight

**Description**

새로 변경된 Layout 의 높이를 갖는 속성입니다.

**Syntax**

```javascript
LayoutChangeEventInfo.newlayoutheight
```


---

### newlayoutwidth

> EventInfo Objects > LayoutChangeEventInfo > Property > newlayoutwidth

**Description**

새로 변경된 Layout 의 너비를 갖는 속성입니다.

**Syntax**

```javascript
LayoutChangeEventInfo.newlayoutwidth
```


---

### oldlayout

> EventInfo Objects > LayoutChangeEventInfo > Property > oldlayout

**Description**

변경 전 Layout 의 이름을 갖는 속성입니다.

**Syntax**

```javascript
LayoutChangeEventInfo.oldlayout
```


---

### oldlayoutheight

> EventInfo Objects > LayoutChangeEventInfo > Property > oldlayoutheight

**Description**

변경 전 Layout 의 높이를 갖는 속성입니다.

**Syntax**

```javascript
LayoutChangeEventInfo.oldlayoutheight
```


---

### oldlayoutwidth

> EventInfo Objects > LayoutChangeEventInfo > Property > oldlayoutwidth

**Description**

변경 전 Layout 의 너비를 갖는 속성입니다.

**Syntax**

```javascript
LayoutChangeEventInfo.oldlayoutwidth
```


---

## EventInfo Objects > ListViewBandStatusEventInfo

### ListViewBandStatusEventInfo

> EventInfo Objects > ListViewBandStatusEventInfo

**Description**

ListView 컴포넌트에서 Detail 밴드의 상태가 변경될 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| bandstatus | 이벤트를 발생시킨 아이템의 Detail 밴드 상태정보를 갖는 읽기전용 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| row | 이벤트를 발생시킨 아이템의 인덱스값을 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### bandstatus

> EventInfo Objects > ListViewBandStatusEventInfo > Property > bandstatus

**Description**

이벤트를 발생시킨 아이템의 Detail 밴드 상태정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewBandStatusEventInfo.bandstatus
```

**Setting Syntax**

- **`"collapse"`** — Detail 밴드가 축소(Collapse) 되었을 때 갖는 값입니다.
- **`"expand"`** — Detail 밴드가 확장(Expand) 되었을 때 갖는 값입니다.


---

### eventid

> EventInfo Objects > ListViewBandStatusEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewBandStatusEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > ListViewBandStatusEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ListViewBandStatusEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > ListViewBandStatusEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
ListViewBandStatusEventInfo.fromreferenceobject
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

### row

> EventInfo Objects > ListViewBandStatusEventInfo > Property > row

**Description**

이벤트를 발생시킨 아이템의 인덱스값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewBandStatusEventInfo.row
```

**Setting Syntax**

```javascript
var nRow = e.row;
```

**Remark**

- ListView 에 바인딩된 DataSet 의 rowposition 속성값과 같은 값을 갖습니다.


---

## EventInfo Objects > ListViewClickEventInfo

### ListViewClickEventInfo

> EventInfo Objects > ListViewClickEventInfo

**Description**

ListView 컴포넌트를 클릭했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| bandid | 이벤트를 발생시킨 밴드의 정보를 갖는 읽기전용 속성입니다. |
| button | 이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다. |
| canvasx | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| canvasy | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| cellid | 이벤트를 발생시킨 Cell 의 ID 를 갖는 읽기전용 속성입니다. |
| clickitem | 이벤트를 발생시킨 Cell 의 상세정보를 갖는 읽기전용 속성입니다. |
| clientx | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| clienty | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| row | 이벤트를 발생시킨 아이템의 인덱스값을 갖는 읽기전용 속성입니다. |
| screenx | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| screeny | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |


---

### 속성 (Properties)

### altkey

> EventInfo Objects > ListViewClickEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ListViewClickEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### bandid

> EventInfo Objects > ListViewClickEventInfo > Property > bandid

**Description**

이벤트를 발생시킨 밴드의 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewClickEventInfo.bandid
```

**Setting Syntax**

- **`"body"`** — Body 밴드 영역에서 이벤트가 발생하였을 때 갖는 값입니다.
- **`"detail"`** — Detail 밴드 영역에서 이벤트가 발생하였을 때 갖는 값입니다.


---

### button

> EventInfo Objects > ListViewClickEventInfo > Property > button

**Description**

이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewClickEventInfo.button
```

**Setting Syntax**

```javascript
var strButton = e.button;
```
- **`"none"`** — 마우스 버튼에 의해 발생한 이벤트가 아닌 경우 갖는 값입니다.
- **`"lbutton"`** — 마우스의 왼쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"rbutton"`** — 마우스의 오른쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"mbutton"`** — 마우스의 가운데 버튼(Wheel)에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton1"`** — 마우스의 첫번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton2"`** — 마우스의 두번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"touch"`** — 터치에 의해 이벤트가 발생했을 때 갖는 값입니다.


---

### canvasx

> EventInfo Objects > ListViewClickEventInfo > Property > canvasx

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewClickEventInfo.canvasx
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### canvasy

> EventInfo Objects > ListViewClickEventInfo > Property > canvasy

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewClickEventInfo.canvasy
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### cellid

> EventInfo Objects > ListViewClickEventInfo > Property > cellid

**Description**

이벤트를 발생시킨 Cell 의 ID 를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewClickEventInfo.cellid
```

**Setting Syntax**

```javascript
var strCellID = e.cellid;
```

**Remark**

- 밴드별로 각각 Cell 목록이 존재하므로 Cell 의 정확한 위치를 확인하려면 bandid 를 참조하여야 합니다.


---

### clickitem

> EventInfo Objects > ListViewClickEventInfo > Property > clickitem

**Description**

이벤트를 발생시킨 Cell 의 상세정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewClickEventInfo.clickitem
```

**Setting Syntax**

- **`"control"`** — displaytype 속성값이 "buttoncontrol", "calendarcontrol", "checkboxcontrol", "combocontrol", "editcontrol", "maskeditcontrol", "progressbarcontrol", "textareacontrol" 중 하나인 Cell 을 클릭했을 때 갖는 값입니다.
- **`"image"`** — displaytype 속성값이 "imgaecontrol" 인 Cell 을 클릭했을 때 갖는 값입니다.
- **`"expanddown"`** — Cell 의 오른쪽에 표시된 확장버튼을 클릭했을 때 갖는 값입니다.

**Remark**

- "control", "image", "exapnddown" 이외의 영역에서 이벤트 발생 시 clickitem 속성은 빈문자열(Empty String)을 갖습니다.

- clickitem 속성은 성능 향상을 위해 이벤트 발생 시에는 값을 가지고 있지 않습니다.
  스크립트에서 clickitem 속성값을 접근할 때 값을 가져옵니다.
  그러므로 Debugging 할 때에는 Watch Tab 에 항상 빈 값으로 보입니다.
  또한 잦은 속성값 접근은 성능 저하를 유발할 수 있으니, 변수에 할당하여 사용하시길 권장합니다.


---

### clientx

> EventInfo Objects > ListViewClickEventInfo > Property > clientx

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewClickEventInfo.clientx
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### clienty

> EventInfo Objects > ListViewClickEventInfo > Property > clienty

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewClickEventInfo.clienty
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### ctrlkey

> EventInfo Objects > ListViewClickEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ListViewClickEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### eventid

> EventInfo Objects > ListViewClickEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewClickEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > ListViewClickEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ListViewClickEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > ListViewClickEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
ListViewClickEventInfo.fromreferenceobject
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

### metakey

> EventInfo Objects > ListViewClickEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ListViewClickEventInfo.metakey
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

### row

> EventInfo Objects > ListViewClickEventInfo > Property > row

**Description**

이벤트를 발생시킨 아이템의 인덱스값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewClickEventInfo.row
```

**Setting Syntax**

```javascript
var nRow = e.row;
```

**Remark**

- ListView 에 바인딩된 DataSet 의 rowposition 속성값과 같은 값을 갖습니다.


---

### screenx

> EventInfo Objects > ListViewClickEventInfo > Property > screenx

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewClickEventInfo.screenx
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### screeny

> EventInfo Objects > ListViewClickEventInfo > Property > screeny

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewClickEventInfo.screeny
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 y 좌표를 계산합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다.
  때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.


---

### shiftkey

> EventInfo Objects > ListViewClickEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ListViewClickEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

## EventInfo Objects > ListViewContextMenuEventInfo

### ListViewContextMenuEventInfo

> EventInfo Objects > ListViewContextMenuEventInfo

**Description**

컴포넌트의 편집영역에 마우스 오른쪽 마우스 클릭 시 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- 모바일 기기의 경우 터치를 길게하면 오른쪽 마우스 클릭과 같은 효과가 발생합니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| bandid | 이벤트를 발생시킨 밴드의 정보를 갖는 읽기전용 속성입니다. |
| button | 이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다. |
| canvasx | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| canvasy | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| cellid | 이벤트를 발생시킨 Cell 의 ID 를 갖는 읽기전용 속성입니다. |
| clientx | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| clienty | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| row | 이벤트를 발생시킨 아이템의 인덱스값을 갖는 읽기전용 속성입니다. |
| screenx | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| screeny | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| preventDefault | 현재 이벤트의 Default Action 을 취소하는 메소드입니다. |


---

### 속성 (Properties)

### altkey

> EventInfo Objects > ListViewContextMenuEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ListViewContextMenuEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### bandid

> EventInfo Objects > ListViewContextMenuEventInfo > Property > bandid

**Description**

이벤트를 발생시킨 밴드의 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewContextMenuEventInfo.bandid
```

**Setting Syntax**

- **`"body"`** — Body 밴드 영역에서 이벤트가 발생하였을 때 갖는 값입니다.
- **`"detail"`** — Detail 밴드 영역에서 이벤트가 발생하였을 때 갖는 값입니다.


---

### button

> EventInfo Objects > ListViewContextMenuEventInfo > Property > button

**Description**

이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewContextMenuEventInfo.button
```

**Setting Syntax**

```javascript
var strButton = e.button;
```
- **`"none"`** — 마우스 버튼에 의해 발생한 이벤트가 아닌 경우 갖는 값입니다.
- **`"lbutton"`** — 마우스의 왼쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"rbutton"`** — 마우스의 오른쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"mbutton"`** — 마우스의 가운데 버튼(Wheel)에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton1"`** — 마우스의 첫번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton2"`** — 마우스의 두번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"touch"`** — 터치에 의해 이벤트가 발생했을 때 갖는 값입니다.


---

### canvasx

> EventInfo Objects > ListViewContextMenuEventInfo > Property > canvasx

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewContextMenuEventInfo.canvasx
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### canvasy

> EventInfo Objects > ListViewContextMenuEventInfo > Property > canvasy

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewContextMenuEventInfo.canvasy
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### cellid

> EventInfo Objects > ListViewContextMenuEventInfo > Property > cellid

**Description**

이벤트를 발생시킨 Cell 의 ID 를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewContextMenuEventInfo.cellid
```

**Setting Syntax**

```javascript
var strCellID = e.cellid;
```

**Remark**

- 밴드별로 각각 Cell 목록이 존재하므로 Cell 의 정확한 위치를 확인하려면 bandid 를 참조하여야 합니다.


---

### clientx

> EventInfo Objects > ListViewContextMenuEventInfo > Property > clientx

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewContextMenuEventInfo.clientx
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### clienty

> EventInfo Objects > ListViewContextMenuEventInfo > Property > clienty

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewContextMenuEventInfo.clienty
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### ctrlkey

> EventInfo Objects > ListViewContextMenuEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ListViewContextMenuEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### eventid

> EventInfo Objects > ListViewContextMenuEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewContextMenuEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > ListViewContextMenuEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ListViewContextMenuEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > ListViewContextMenuEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
ListViewContextMenuEventInfo.fromreferenceobject
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

### metakey

> EventInfo Objects > ListViewContextMenuEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ListViewContextMenuEventInfo.metakey
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

### row

> EventInfo Objects > ListViewContextMenuEventInfo > Property > row

**Description**

이벤트를 발생시킨 아이템의 인덱스값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewContextMenuEventInfo.row
```

**Setting Syntax**

```javascript
var nRow = e.row;
```

**Remark**

- ListView 에 바인딩된 DataSet 의 rowposition 속성값과 같은 값을 갖습니다.


---

### screenx

> EventInfo Objects > ListViewContextMenuEventInfo > Property > screenx

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewContextMenuEventInfo.screenx
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### screeny

> EventInfo Objects > ListViewContextMenuEventInfo > Property > screeny

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewContextMenuEventInfo.screeny
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 y 좌표를 계산합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다.
  때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.


---

### shiftkey

> EventInfo Objects > ListViewContextMenuEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ListViewContextMenuEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### 메서드 (Methods)

### preventDefault

> EventInfo Objects > ListViewContextMenuEventInfo > Method > preventDefault

**Description**

현재 이벤트의 Default Action 을 취소하는 메소드입니다.

**Syntax**

```javascript
ListViewContextMenuEventInfo.preventDefault()
```

**Return**

없음


---

## EventInfo Objects > ListViewDragEventInfo

### ListViewDragEventInfo

> EventInfo Objects > ListViewDragEventInfo

**Description**

ListView 컴포넌트에서 Drag 액션과 관련하여 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| bandid | 이벤트를 발생시킨 밴드의 정보를 갖는 읽기전용 속성입니다. |
| button | 이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다. |
| canvasx | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| canvasy | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| cellid | 이벤트를 발생시킨 Cell 의 ID 를 갖는 읽기전용 속성입니다. |
| clientx | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| clienty | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| datatype | Drag 액션이 발생한 위치에 대한 정보를 갖는 읽기전용 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| filelist | 어플리케이션 외부에서 파일을 Drag 했을 때 파일의 정보를 배열형태로 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| row | 이벤트를 발생시킨 아이템의 인덱스값을 갖는 읽기전용 속성입니다. |
| screenx | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| screeny | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |
| sourceobject | Drag 액션이 처음 발생한 컴포넌트를 갖습니다. |
| sourcereferenceobject | Drag 액션이 처음 발생한 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| userdata | Drag 관련 이벤트에서 사용자가 값을 설정하여 사용할 수 있는 속성입니다. |


---

### 속성 (Properties)

### altkey

> EventInfo Objects > ListViewDragEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ListViewDragEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### bandid

> EventInfo Objects > ListViewDragEventInfo > Property > bandid

**Description**

이벤트를 발생시킨 밴드의 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewDragEventInfo.bandid
```

**Setting Syntax**

- **`"body"`** — Body 밴드 영역에서 이벤트가 발생하였을 때 갖는 값입니다.
- **`"detail"`** — Detail 밴드 영역에서 이벤트가 발생하였을 때 갖는 값입니다.


---

### button

> EventInfo Objects > ListViewDragEventInfo > Property > button

**Description**

이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewDragEventInfo.button
```

**Setting Syntax**

```javascript
var strButton = e.button;
```
- **`"none"`** — 마우스 버튼에 의해 발생한 이벤트가 아닌 경우 갖는 값입니다.
- **`"lbutton"`** — 마우스의 왼쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"rbutton"`** — 마우스의 오른쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"mbutton"`** — 마우스의 가운데 버튼(Wheel)에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton1"`** — 마우스의 첫번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton2"`** — 마우스의 두번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"touch"`** — 터치에 의해 이벤트가 발생했을 때 갖는 값입니다.


---

### canvasx

> EventInfo Objects > ListViewDragEventInfo > Property > canvasx

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewDragEventInfo.canvasx
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### canvasy

> EventInfo Objects > ListViewDragEventInfo > Property > canvasy

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewDragEventInfo.canvasy
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### cellid

> EventInfo Objects > ListViewDragEventInfo > Property > cellid

**Description**

이벤트를 발생시킨 Cell 의 ID 를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewDragEventInfo.cellid
```

**Setting Syntax**

```javascript
var strCellID = e.cellid;
```

**Remark**

- 밴드별로 각각 Cell 목록이 존재하므로 Cell 의 정확한 위치를 확인하려면 bandid 를 참조하여야 합니다.


---

### clientx

> EventInfo Objects > ListViewDragEventInfo > Property > clientx

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewDragEventInfo.clientx
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### clienty

> EventInfo Objects > ListViewDragEventInfo > Property > clienty

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewDragEventInfo.clienty
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### ctrlkey

> EventInfo Objects > ListViewDragEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ListViewDragEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### datatype

> EventInfo Objects > ListViewDragEventInfo > Property > datatype

**Description**

Drag 액션이 발생한 위치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewDragEventInfo.datatype
```

**Setting Syntax**

```javascript
var strDataType = e.datatype;
```
- **`"text"`** — 어플리케이션 내부의 Drag 액션에 의해 발생한 이벤트일 때 갖는 값입니다.
- **`"file"`** — 어플리케이션 외부에서 파일을 Drag 하여 발생한 이벤트일 때 갖는 값입니다.

**Remark**

- 어플리케이션 외부에서 텍스트를 Drag 한 경우는 Drag 관련 이벤트가 발생하지 않습니다.


---

### eventid

> EventInfo Objects > ListViewDragEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewDragEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### filelist

> EventInfo Objects > ListViewDragEventInfo > Property > filelist

**Description**

어플리케이션 외부에서 파일을 Drag 했을 때 파일의 정보를 배열형태로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewDragEventInfo.filelist
```

**Setting Syntax**

```javascript
var objFile0 = e.filelist[0];
```
- **`filelist`** — VirtualFile 오브젝트의 배열로 구성되어 있습니다.

어플리케이션 내부의 Drag 액션에 의한 이벤트인 경우 값을 갖지 않습니다.

**Remark**

◆ web runtime environment 제약

- ondrop 이벤트 외 ondrag, ondragenter, ondragleave, ondragmove 이벤트에서 filelist 속성값이 정확하지 않을 수 있습니다.


---

### fromobject

> EventInfo Objects > ListViewDragEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ListViewDragEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > ListViewDragEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
ListViewDragEventInfo.fromreferenceobject
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

### metakey

> EventInfo Objects > ListViewDragEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ListViewDragEventInfo.metakey
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

### row

> EventInfo Objects > ListViewDragEventInfo > Property > row

**Description**

이벤트를 발생시킨 아이템의 인덱스값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewDragEventInfo.row
```

**Setting Syntax**

```javascript
var nRow = e.row;
```

**Remark**

- ListView 에 바인딩된 DataSet 의 rowposition 속성값과 같은 값을 갖습니다.


---

### screenx

> EventInfo Objects > ListViewDragEventInfo > Property > screenx

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewDragEventInfo.screenx
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### screeny

> EventInfo Objects > ListViewDragEventInfo > Property > screeny

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewDragEventInfo.screeny
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 y 좌표를 계산합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다.
  때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.


---

### shiftkey

> EventInfo Objects > ListViewDragEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ListViewDragEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### sourceobject

> EventInfo Objects > ListViewDragEventInfo > Property > sourceobject

**Description**

Drag 액션이 처음 발생한 컴포넌트를 갖습니다.

**Syntax**

```javascript
ListViewDragEventInfo.sourceobject
```

**Remark**

- ondrag 이벤트에서 리턴값을 "true" 로 반환한 컴포넌트를 갖습니다.


---

### sourcereferenceobject

> EventInfo Objects > ListViewDragEventInfo > Property > sourcereferenceobject

**Description**

Drag 액션이 처음 발생한 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
ListViewDragEventInfo.sourcereferenceobject
```

**Remark**

- ondrag 이벤트에서 리턴값을 "true" 로 반환한 컴포넌트 또는 서브컨트롤을 갖습니다.

- Calendar 와 같이 서브컨트롤이 있는 컴포넌트에서 서브컨트롤에 의해 이벤트가 발생한 경우 sourcereferenceobject 속성은 서브컨트롤을 갖습니다.
   Button 과 같이 서브컨트롤이 없는 컴포넌트는 해당 컴포넌트를 갖습니다.


---

### userdata

> EventInfo Objects > ListViewDragEventInfo > Property > userdata

**Description**

Drag 관련 이벤트에서 사용자가 값을 설정하여 사용할 수 있는 속성입니다.

**Syntax**

```javascript
ListViewDragEventInfo.userdata[= vValue]
```

**Setting Syntax**

- **`vValue`** — Drag 에 의해 발생하는 이벤트에 전달된 사용자값을 설정합니다.

**Remark**

- ondrag 이벤트에서 userdata 속성값을 설정하면, Drag 관련 이벤트 발생 시 설정된 속성값이 유지되어 전달됩니다.

- Drag 가 유지되는 동안만 속성값이 유지되며, Drop 되어 Drag 액션이 종료되면 속성값도 지워집니다.


---

## EventInfo Objects > ListViewEditEventInfo

### ListViewEditEventInfo

> EventInfo Objects > ListViewEditEventInfo

**Description**

ListView 컴포넌트의 Cell 에서 입력 컨트롤이 활성화 될 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- ListView 에서 oncloseup, ondropdown, onenterdown 이벤트 발생 시 전달되는 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| bandid | 이벤트를 발생시킨 밴드의 정보를 갖는 읽기전용 속성입니다. |
| cellid | 이벤트를 발생시킨 Cell 의 ID 를 갖는 읽기전용 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| row | 이벤트를 발생시킨 Cell 이 속한 Item 의 Row 인덱스값을 갖습니다. |
| value | 이벤트를 발생시킨 Cell 의 value 값을 갖습니다. |


---

### 속성 (Properties)

### bandid

> EventInfo Objects > ListViewEditEventInfo > Property > bandid

**Description**

이벤트를 발생시킨 밴드의 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewEditEventInfo.bandid
```

**Setting Syntax**

- **`"body"`** — Body 밴드 영역에서 이벤트가 발생하였을 때 갖는 값입니다.
- **`"detail"`** — Detail 밴드 영역에서 이벤트가 발생하였을 때 갖는 값입니다.


---

### cellid

> EventInfo Objects > ListViewEditEventInfo > Property > cellid

**Description**

이벤트를 발생시킨 Cell 의 ID 를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewEditEventInfo.cellid
```

**Setting Syntax**

```javascript
var strCellID = e.cellid;
```

**Remark**

- 밴드별로 각각 Cell 목록이 존재하므로 Cell 의 정확한 위치를 확인하려면 bandid 를 참조하여야 합니다.


---

### eventid

> EventInfo Objects > ListViewEditEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewEditEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > ListViewEditEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ListViewEditEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > ListViewEditEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
ListViewEditEventInfo.fromreferenceobject
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

### row

> EventInfo Objects > ListViewEditEventInfo > Property > row

**Description**

이벤트를 발생시킨 Cell 이 속한 Item 의 Row 인덱스값을 갖습니다.

**Syntax**

```javascript
ListViewEditEventInfo.row
```

**Setting Syntax**

```javascript
var nRow = e.row;
```

**Remark**

- ListView 에 바인딩된 DataSet 의 rowposition 속성값과 같은 값을 갖습니다.


---

### value

> EventInfo Objects > ListViewEditEventInfo > Property > value

**Description**

이벤트를 발생시킨 Cell 의 value 값을 갖습니다.

**Syntax**

```javascript
ListViewEditEventInfo.value
```

**Remark**

- oncloseup 이벤트일 경우 사용자가 값을 변경하였다면 새로 선택된 값을 갖습니다.


---

## EventInfo Objects > ListViewInputEventInfo

### ListViewInputEventInfo

> EventInfo Objects > ListViewInputEventInfo

**Description**

ListView 컴포넌트 Cell의 입력 컨트롤 영역이 활성화된 상태에서 문자 입력 시도 시 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| bandid | 이벤트를 발생시킨 밴드의 정보를 갖는 읽기전용 속성입니다. |
| cellid | 이벤트를 발생시킨 Cell 의 ID 를 갖는 읽기전용 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| row | 이벤트를 발생시킨 아이템의 인덱스값을 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### bandid

> EventInfo Objects > ListViewInputEventInfo > Property > bandid

**Description**

이벤트를 발생시킨 밴드의 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewInputEventInfo.bandid
```

**Setting Syntax**

- **`"body"`** — Body 밴드 영역에서 이벤트가 발생하였을 때 갖는 값입니다.
- **`"detail"`** — Detail 밴드 영역에서 이벤트가 발생하였을 때 갖는 값입니다.


---

### cellid

> EventInfo Objects > ListViewInputEventInfo > Property > cellid

**Description**

이벤트를 발생시킨 Cell 의 ID 를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewInputEventInfo.cellid
```

**Setting Syntax**

```javascript
var strCellID = e.cellid;
```

**Remark**

- 밴드별로 각각 Cell 목록이 존재하므로 Cell 의 정확한 위치를 확인하려면 bandid 를 참조하여야 합니다.


---

### eventid

> EventInfo Objects > ListViewInputEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewInputEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > ListViewInputEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ListViewInputEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > ListViewInputEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
ListViewInputEventInfo.fromreferenceobject
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

### row

> EventInfo Objects > ListViewInputEventInfo > Property > row

**Description**

이벤트를 발생시킨 아이템의 인덱스값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewInputEventInfo.row
```

**Setting Syntax**

```javascript
var nRow = e.row;
```

**Remark**

- ListView 에 바인딩된 DataSet 의 rowposition 속성값과 같은 값을 갖습니다.


---

## EventInfo Objects > ListViewKeyEventInfo

### ListViewKeyEventInfo

> EventInfo Objects > ListViewKeyEventInfo

**Description**

포커스가 있는 컴포넌트에서 키보드의 키가 눌렸을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| bandid | 이벤트를 발생시킨 밴드의 정보를 갖는 읽기전용 속성입니다. |
| cellid | 이벤트를 발생시킨 Cell 의 ID 를 갖는 읽기전용 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| keycode | 키보드로 입력된 키에 해당하는 코드값을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| row | 이벤트를 발생시킨 아이템의 인덱스값을 갖는 읽기전용 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| preventDefault | 현재 이벤트의 Default Action 을 취소하는 메소드입니다. |


---

### 속성 (Properties)

### altkey

> EventInfo Objects > ListViewKeyEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ListViewKeyEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### bandid

> EventInfo Objects > ListViewKeyEventInfo > Property > bandid

**Description**

이벤트를 발생시킨 밴드의 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewKeyEventInfo.bandid
```

**Setting Syntax**

- **`"body"`** — Body 밴드 영역에서 이벤트가 발생하였을 때 갖는 값입니다.
- **`"detail"`** — Detail 밴드 영역에서 이벤트가 발생하였을 때 갖는 값입니다.


---

### cellid

> EventInfo Objects > ListViewKeyEventInfo > Property > cellid

**Description**

이벤트를 발생시킨 Cell 의 ID 를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewKeyEventInfo.cellid
```

**Setting Syntax**

```javascript
var strCellID = e.cellid;
```

**Remark**

- 밴드별로 각각 Cell 목록이 존재하므로 Cell 의 정확한 위치를 확인하려면 bandid 를 참조하여야 합니다.


---

### ctrlkey

> EventInfo Objects > ListViewKeyEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ListViewKeyEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### eventid

> EventInfo Objects > ListViewKeyEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewKeyEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > ListViewKeyEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ListViewKeyEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > ListViewKeyEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
ListViewKeyEventInfo.fromreferenceobject
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

> EventInfo Objects > ListViewKeyEventInfo > Property > keycode

**Description**

키보드로 입력된 키에 해당하는 코드값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewKeyEventInfo.keycode
```

**Setting Syntax**

```javascript
var nCode = e.keycode;
```

**Remark**

- 운영체제(OS)에 따른 Key Code 값을 갖습니다.


---

### metakey

> EventInfo Objects > ListViewKeyEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ListViewKeyEventInfo.metakey
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

### row

> EventInfo Objects > ListViewKeyEventInfo > Property > row

**Description**

이벤트를 발생시킨 아이템의 인덱스값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewKeyEventInfo.row
```

**Setting Syntax**

```javascript
var nRow = e.row;
```

**Remark**

- ListView 에 바인딩된 DataSet 의 rowposition 속성값과 같은 값을 갖습니다.


---

### shiftkey

> EventInfo Objects > ListViewKeyEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ListViewKeyEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### 메서드 (Methods)

### preventDefault

> EventInfo Objects > ListViewKeyEventInfo > Method > preventDefault

**Description**

현재 이벤트의 Default Action 을 취소하는 메소드입니다.

**Syntax**

```javascript
ListViewKeyEventInfo.preventDefault()
```

**Return**

없음


---

## EventInfo Objects > ListViewMouseEventInfo

### ListViewMouseEventInfo

> EventInfo Objects > ListViewMouseEventInfo

**Description**

ListView 컴포넌트 영역에서 마우스 액션과 관련하여 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- 마우스를 이동하거나 클릭할 때 관련된 이벤트가 발생합니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| bandid | 이벤트를 발생시킨 밴드의 정보를 갖는 읽기전용 속성입니다. |
| button | 이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다. |
| canvasx | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| canvasy | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| cellid | 이벤트를 발생시킨 Cell 의 ID 를 갖는 읽기전용 속성입니다. |
| clientx | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| clienty | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| row | 이벤트를 발생시킨 아이템의 인덱스값을 갖는 읽기전용 속성입니다. |
| screenx | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| screeny | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| preventDefault | 현재 이벤트의 Default Action 을 취소하는 메소드입니다. |
| stopPropagation | 현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다. |


---

### 속성 (Properties)

### altkey

> EventInfo Objects > ListViewMouseEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ListViewMouseEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### bandid

> EventInfo Objects > ListViewMouseEventInfo > Property > bandid

**Description**

이벤트를 발생시킨 밴드의 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewMouseEventInfo.bandid
```

**Setting Syntax**

- **`"body"`** — Body 밴드 영역에서 이벤트가 발생하였을 때 갖는 값입니다.
- **`"detail"`** — Detail 밴드 영역에서 이벤트가 발생하였을 때 갖는 값입니다.


---

### button

> EventInfo Objects > ListViewMouseEventInfo > Property > button

**Description**

이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewMouseEventInfo.button
```

**Setting Syntax**

```javascript
var strButton = e.button;
```
- **`"none"`** — 마우스 버튼에 의해 발생한 이벤트가 아닌 경우 갖는 값입니다.
- **`"lbutton"`** — 마우스의 왼쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"rbutton"`** — 마우스의 오른쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"mbutton"`** — 마우스의 가운데 버튼(Wheel)에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton1"`** — 마우스의 첫번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton2"`** — 마우스의 두번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"touch"`** — 터치에 의해 이벤트가 발생했을 때 갖는 값입니다.


---

### canvasx

> EventInfo Objects > ListViewMouseEventInfo > Property > canvasx

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewMouseEventInfo.canvasx
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### canvasy

> EventInfo Objects > ListViewMouseEventInfo > Property > canvasy

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewMouseEventInfo.canvasy
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### cellid

> EventInfo Objects > ListViewMouseEventInfo > Property > cellid

**Description**

이벤트를 발생시킨 Cell 의 ID 를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewMouseEventInfo.cellid
```

**Setting Syntax**

```javascript
var strCellID = e.cellid;
```

**Remark**

- 밴드별로 각각 Cell 목록이 존재하므로 Cell 의 정확한 위치를 확인하려면 bandid 를 참조하여야 합니다.


---

### clientx

> EventInfo Objects > ListViewMouseEventInfo > Property > clientx

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewMouseEventInfo.clientx
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### clienty

> EventInfo Objects > ListViewMouseEventInfo > Property > clienty

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewMouseEventInfo.clienty
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### ctrlkey

> EventInfo Objects > ListViewMouseEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ListViewMouseEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### eventid

> EventInfo Objects > ListViewMouseEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewMouseEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > ListViewMouseEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ListViewMouseEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > ListViewMouseEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
ListViewMouseEventInfo.fromreferenceobject
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

### metakey

> EventInfo Objects > ListViewMouseEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ListViewMouseEventInfo.metakey
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

### row

> EventInfo Objects > ListViewMouseEventInfo > Property > row

**Description**

이벤트를 발생시킨 아이템의 인덱스값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewMouseEventInfo.row
```

**Setting Syntax**

```javascript
var nRow = e.row;
```

**Remark**

- ListView 에 바인딩된 DataSet 의 rowposition 속성값과 같은 값을 갖습니다.


---

### screenx

> EventInfo Objects > ListViewMouseEventInfo > Property > screenx

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewMouseEventInfo.screenx
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### screeny

> EventInfo Objects > ListViewMouseEventInfo > Property > screeny

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
ListViewMouseEventInfo.screeny
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 y 좌표를 계산합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다.
  때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.


---

### shiftkey

> EventInfo Objects > ListViewMouseEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
ListViewMouseEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### 메서드 (Methods)

### preventDefault

> EventInfo Objects > ListViewMouseEventInfo > Method > preventDefault

**Description**

현재 이벤트의 Default Action 을 취소하는 메소드입니다.

**Syntax**

```javascript
ListViewMouseEventInfo.preventDefault()
```

**Return**

없음


---

### stopPropagation

> EventInfo Objects > ListViewMouseEventInfo > Method > stopPropagation

**Description**

현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다.

**Syntax**

```javascript
ListViewMouseEventInfo.stopPropagation()
```

**Return**

없음


---

## EventInfo Objects > ListViewSelectEventInfo

### ListViewSelectEventInfo

> EventInfo Objects > ListViewSelectEventInfo

**Description**

ListView 컴포넌트의 선택영역이 변경되었을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| bandid | 새로 선택된 영역에서 마지막으로 선택된 아이템의 밴드 정보를 갖는 읽기전용 속성입니다. |
| cellid | 새로 선택된 영역에서 마지막으로 선택된 Cell 의 ID 를 갖는 읽기전용 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| oldbandid | 선택 영역이 변경되기 전 마지막으로 선택된 아이템의 밴드 정보를 갖는 읽기전용 속성입니다. |
| oldcellid | 선택 영역이 변경되기 전 마지막으로 선택된 Cell 의 ID 를 갖는 읽기전용 속성입니다. |
| oldrow | 선택 영역이 변경되기 전 마지막으로 선택된 아이템의 Row 인덱스값을 갖는 읽기전용 속성입니다. |
| row | 새로 선택된 영역에서 마지막으로 선택된 아이템의 Row 인덱스값을 갖는 읽기전용 속성입니다. |
| selectendrow | 새로 선택된 영역에서 마지막으로 선택된 아이템의 Row 인덱스값을 갖는 읽기전용 속성입니다. |
| selectstartrow | 새로 선택된 영역에서 처음으로 선택된 아이템의 Row 인덱스값을 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### bandid

> EventInfo Objects > ListViewSelectEventInfo > Property > bandid

**Description**

새로 선택된 영역에서 마지막으로 선택된 아이템의 밴드 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewSelectEventInfo.bandid
```

**Setting Syntax**

- **`"body"`** — 마지막으로 선택된 아이템의 밴드가 Body 밴드일 때 갖는 값입니다.
- **`"detail"`** — 마지막으로 선택된 아이템의 밴드가 Detail 밴드일 때 갖는 값입니다.


---

### cellid

> EventInfo Objects > ListViewSelectEventInfo > Property > cellid

**Description**

새로 선택된 영역에서 마지막으로 선택된 Cell 의 ID 를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewSelectEventInfo.cellid
```

**Setting Syntax**

```javascript
var strCellID = e.cellid;
```

**Remark**

- 밴드별로 각각 Cell 목록이 존재하므로 Cell 의 정확한 위치를 확인하려면 bandid 를 참조하여야 합니다.


---

### eventid

> EventInfo Objects > ListViewSelectEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewSelectEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > ListViewSelectEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ListViewSelectEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > ListViewSelectEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
ListViewSelectEventInfo.fromreferenceobject
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

### oldbandid

> EventInfo Objects > ListViewSelectEventInfo > Property > oldbandid

**Description**

선택 영역이 변경되기 전 마지막으로 선택된 아이템의 밴드 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewSelectEventInfo.oldbandid
```

**Setting Syntax**

- **`"body"`** — 선택 영역이 변경되기 전 마지막으로 선택된 아이템의 밴드가 Body 밴드일 때 갖는 값입니다.
- **`"detail"`** — 선택 영역이 변경되기 전 마지막으로 선택된 아이템의 밴드가 Detail 밴드일 때 갖는 값입니다.


---

### oldcellid

> EventInfo Objects > ListViewSelectEventInfo > Property > oldcellid

**Description**

선택 영역이 변경되기 전 마지막으로 선택된 Cell 의 ID 를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewSelectEventInfo.oldcellid
```

**Setting Syntax**

```javascript
var strOldCellID = e.oldcellid;
```

**Remark**

- 밴드별로 각각 Cell 목록이 존재하므로 Cell 의 정확한 위치를 확인하려면 oldbandid 를 참조하여야 합니다.


---

### oldrow

> EventInfo Objects > ListViewSelectEventInfo > Property > oldrow

**Description**

선택 영역이 변경되기 전 마지막으로 선택된 아이템의 Row 인덱스값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewSelectEventInfo.oldrow
```

**Setting Syntax**

```javascript
var nOldRow = e.oldrow;
```


---

### row

> EventInfo Objects > ListViewSelectEventInfo > Property > row

**Description**

새로 선택된 영역에서 마지막으로 선택된 아이템의 Row 인덱스값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewSelectEventInfo.row
```

**Setting Syntax**

```javascript
var nRow = e.row;
```


---

### selectendrow

> EventInfo Objects > ListViewSelectEventInfo > Property > selectendrow

**Description**

새로 선택된 영역에서 마지막으로 선택된 아이템의 Row 인덱스값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewSelectEventInfo.selectendrow
```


---

### selectstartrow

> EventInfo Objects > ListViewSelectEventInfo > Property > selectstartrow

**Description**

새로 선택된 영역에서 처음으로 선택된 아이템의 Row 인덱스값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ListViewSelectEventInfo.selectstartrow
```


---

## EventInfo Objects > LiteDBErrorEventInfo

### LiteDBErrorEventInfo

> EventInfo Objects > LiteDBErrorEventInfo

**Description**

LiteDB 에 요청한 작업에 오류가 생겼을때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| errormsg | 발생한 에러에 대한 에러메시지를 갖는 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| ldberrorcode | 발생한 에러에 대한 DB 에서 전달받은 에러코드값을 갖는 속성입니다. |
| ldberrormsg | 발생한 에러에 대한 DB 에서 전달받은 에러메시지값을 갖는 속성입니다 |
| statuscode | 발생한 에러에 대한 에러코드값을 갖는 속성입니다. |


---

### 속성 (Properties)

### errormsg

> EventInfo Objects > LiteDBErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러메시지를 갖는 속성입니다.

**Syntax**

```javascript
LiteDBErrorEventInfo.errormsg
```

**Setting Syntax**

- **`"00001"`** — Parameter Error
- **`"1201"`** — LiteDBConnection busytimeout Fail

* Android NRE 는 발생하지 않는 에러입니다.
- **`"1202"`** — LiteDBConnection begin Fail
- **`"1203"`** — LiteDBConnection close Fail
- **`"1204"`** — LiteDBConnection commit Fail
- **`"1205"`** — LiteDBConnection isConnected Fail
- **`"1206"`** — LiteDBConnection open Fail
- **`"1207"`** — LiteDBConnection rollback Fail
- **`"1210"`** — LiteDBStatement executeQuery Fail
- **`"1211"`** — LiteDBStatement executeUpdate Fail

Android NRE 는 발생하지 않는 에러입니다.


---

### errortype

> EventInfo Objects > LiteDBErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
LiteDBErrorEventInfo.errortype
```

**Setting Syntax**

- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우에 갖는 값입니다.

LiteDB 관련 컴포넌트에서 에러 발생 시 항상 이 값을 갖습니다.


---

### eventid

> EventInfo Objects > LiteDBErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
LiteDBErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### ldberrorcode

> EventInfo Objects > LiteDBErrorEventInfo > Property > ldberrorcode

**Description**

발생한 에러에 대한 DB 에서 전달받은 에러코드값을 갖는 속성입니다.

**Syntax**

```javascript
LiteDBErrorEventInfo.ldberrorcode
```

**Remark**

- Android NRE 는 발생한 에러에 대한 코드값이 DB 에서 전달되지 않습니다.


---

### ldberrormsg

> EventInfo Objects > LiteDBErrorEventInfo > Property > ldberrormsg

**Description**

발생한 에러에 대한 DB 에서 전달받은 에러메시지값을 갖는 속성입니다

**Syntax**

```javascript
LiteDBErrorEventInfo.ldberrormsg
```


---

### statuscode

> EventInfo Objects > LiteDBErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대한 에러코드값을 갖는 속성입니다.

**Syntax**

```javascript
LiteDBErrorEventInfo.statuscode
```

**Setting Syntax**

- **`"00001"`** — 메소드의 파라미터를 잘 못 설정하여 이벤트 발생 시 갖는 값입니다.
- **`"1201"`** — LiteDBConnection 오브젝트에 연결된 DB 의 응답시간이 대기시간을 초과하여 이벤트 발생 시 갖는 값입니다.

* Android NRE 는 발생하지 않는 에러입니다.
- **`"1202"`** — LiteDBConnection 오브젝트의 begin() 메소드 수행에 의해 이벤트 발생 시 갖는 값입니다.
- **`"1203"`** — LiteDBConnection 오브젝트의 close() 메소드 수행에 의해 이벤트 발생 시 갖는 값입니다.
- **`"1204"`** — LiteDBConnection 오브젝트의 commit() 메소드 수행에 의해 이벤트 발생 시 갖는 값입니다.
- **`"1205"`** — LiteDBConnection 오브젝트의 isConnected() 메소드 수행에 의해 이벤트 발생 시 갖는 값입니다.
- **`"1206"`** — LiteDBConnection 오브젝트의 open() 메소드 수행에 의해 이벤트 발생 시 갖는 값입니다.
- **`"1207"`** — LiteDBConnection 오브젝트의 rollback() 메소드 수행에 의해 이벤트 발생 시 갖는 값입니다.
- **`"1210"`** — LiteDBStatement 오브젝트의 executeQuery() 메소드 수행에 의해 이벤트 발생 시 갖는 값입니다.
- **`"1211"`** — LiteDBStatement 오브젝트의 executeUpdate() 메소드 수행에 의해 이벤트 발생 시 갖는 값입니다.

* Android NRE 는 발생하지 않는 에러입니다.


---

## EventInfo Objects > LiteDBEventInfo

### LiteDBEventInfo

> EventInfo Objects > LiteDBEventInfo

**Description**

LiteDB 에 요청한 작업이 성공했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| reason | 이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다. |
| returnvalue | LiteDBStatement 오브젝트에서 수행 한 메소드의 결과값을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > LiteDBEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
LiteDBEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### reason

> EventInfo Objects > LiteDBEventInfo > Property > reason

**Description**

이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
LiteDBEventInfo.reason
```

**Setting Syntax**

- **`1`** — LiteDBConnection 오브젝트의 begin() 메소드 수행에 의해 이벤트 발생 시 갖는 값입니다.
- **`2`** — LiteDBConnection 오브젝트의 close() 메소드 수행에 의해 이벤트 발생 시 갖는 값입니다.
- **`3`** — LiteDBConnection 오브젝트의 commit() 메소드 수행에 의해 이벤트 발생 시 갖는 값입니다.
- **`4`** — LiteDBConnection 오브젝트의 isConnected() 메소드 수행에 의해 이벤트 발생 시 갖는 값입니다.
- **`5`** — LiteDBConnection 오브젝트의 open() 메소드 수행에 의해 이벤트 발생 시 갖는 값입니다.
- **`6`** — LiteDBConnection 오브젝트의 rollback() 메소드 수행에 의해 이벤트 발생 시 갖는 값입니다.
- **`7`** — LiteDBStatement 오브젝트의 executeQuery() 메소드 수행에 의해 이벤트 발생 시 갖는 값입니다.
- **`8`** — LiteDBStatement 오브젝트의 executeUpdate() 메소드 수행에 의해 이벤트 발생 시 갖는 값입니다.
- **`9`** — LiteDBStatement 오브젝트의 close() 메소드 수행에 의해 이벤트 발생 시 갖는 값입니다.


---

### returnvalue

> EventInfo Objects > LiteDBEventInfo > Property > returnvalue

**Description**

LiteDBStatement 오브젝트에서 수행 한 메소드의 결과값을 갖는 속성입니다.

**Syntax**

```javascript
LiteDBEventInfo.returnvalue
```

**Remark**

- LiteDBStatement 오브젝트의 executeQuery, executeUpdate 메소드 실행 후 SQL문이 에러 없이 실행된 경우 결과 데이터를 아래와 같이 확인할 수 있습니다.

  - executeQuery 메소드: Dataset 오브젝트
    - 컬럼명: DB 컬럼명
    - 컬럼 타입: DB 컬럼 타입(int, float, string, blob 만 지원)
    - 컬럼 길이: 256
  - executeUpdate 메소드: 처리된 Row 숫자


---

## EventInfo Objects > LoadEventInfo

### LoadEventInfo

> EventInfo Objects > LoadEventInfo

**Description**

Form 또는 Application 에서 오브젝트가 모두 로딩되었을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| url | 로딩이 완료된 오브젝트의 위치정보를 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > LoadEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
LoadEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > LoadEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
LoadEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > LoadEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
LoadEventInfo.fromreferenceobject
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

### url

> EventInfo Objects > LoadEventInfo > Property > url

**Description**

로딩이 완료된 오브젝트의 위치정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
LoadEventInfo.url
```

**Setting Syntax**

- **`url`** — 로딩된 오브젝트의 위치정보를 URL 형태로 갖습니다.

Application, Form 의 경우 js 파일의 위치정보를 갖습니다.
ImageViewer 의 경우 이미지파일의 위치정보를 갖습니다.


---

## EventInfo Objects > MenuClickEventInfo

### MenuClickEventInfo

> EventInfo Objects > MenuClickEventInfo

**Description**

Menu 또는 PopupMenu 컴포넌트에서 MenuItem 항목을 클릭했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| id | 이벤트가 발생한 MenuItem 항목의 id 값을 갖는 속성입니다. |
| index | 이벤트가 발생한 MenuItem 이 동일한 level 의 MenuItem 에서 위치한 인덱스값을 갖는 속성입니다. |
| level | 이벤트가 발생한 MenuItem 항목의 level 값을 갖는 속성입니다. |
| userdata | 이벤트가 발생한 MenuItem 항목의 userdata 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > MenuClickEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
MenuClickEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > MenuClickEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
MenuClickEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > MenuClickEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
MenuClickEventInfo.fromreferenceobject
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

### id

> EventInfo Objects > MenuClickEventInfo > Property > id

**Description**

이벤트가 발생한 MenuItem 항목의 id 값을 갖는 속성입니다.

**Syntax**

```javascript
MenuClickEventInfo.id
```

**Setting Syntax**

```javascript
var strID = e.id ;
```

**Remark**

- 컴포넌트의 innerdataset 속성에 Bind 된 DataSet 의 컬럼 중 idcolumn 속성에 설정된 컬럼의 값을 갖습니다.


---

### index

> EventInfo Objects > MenuClickEventInfo > Property > index

**Description**

이벤트가 발생한 MenuItem 이 동일한 level 의 MenuItem 에서 위치한 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
MenuClickEventInfo.index
```

**Remark**

- level 이 동일한 MenuItem 중 상위 level 이 동일한 MenuItem 에서 인덱스를 계산합니다.
  level 값은 동일하더라도 상위 level 의 MenuItem 이 다르면 인덱스 계산에서 제외됩니다.


---

### level

> EventInfo Objects > MenuClickEventInfo > Property > level

**Description**

이벤트가 발생한 MenuItem 항목의 level 값을 갖는 속성입니다.

**Syntax**

```javascript
MenuClickEventInfo.level
```

**Remark**

- 컴포넌트의 innerdataset 속성에 Bind 된 Dataset 오브젝트의 컬럼 중 levelcolumn 속성에 설정된 컬럼의 값을 갖습니다.
  level 은 0부터 시작합니다.

- level 값을 기준으로 MenuItem 이 계층구조로 표시됩니다.


---

### userdata

> EventInfo Objects > MenuClickEventInfo > Property > userdata

**Description**

이벤트가 발생한 MenuItem 항목의 userdata 값을 갖는 속성입니다.

**Syntax**

```javascript
MenuClickEventInfo.userdata
```

**Setting Syntax**

```javascript
var strData = e.userdata;
```

**Remark**

- 컴포넌트의 innerdataset 속성에 Bind 된 DataSet 의 컬럼 중 userdatacolumn 속성에 설정된 컬럼의 값을 갖습니다.


---

## EventInfo Objects > MenuContextMenuEventInfo

### MenuContextMenuEventInfo

> EventInfo Objects > MenuContextMenuEventInfo

**Description**

컴포넌트의 편집영역에 마우스 오른쪽 마우스 클릭 시 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- 모바일 기기의 경우 터치를 길게하면 오른쪽 마우스 클릭과 같은 효과가 발생합니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| bindindex | 이벤트가 발생한 MenuItem 항목에 Bind 된 데이터의 인덱스값을 갖는 속성입니다. |
| button | 이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다. |
| canvasx | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| canvasy | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| clientx | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| clienty | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| id | 이벤트가 발생한 MenuItem의 ID값을 갖는 속성입니다. |
| index | 이벤트가 발생한 MenuItem 이 동일한 level 의 MenuItem 에서 위치한 인덱스값을 갖는 속성입니다. |
| level | 이벤트가 발생한 MenuItem 항목의 level 값을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| screenx | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| screeny | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| preventDefault | 현재 이벤트의 Default Action 을 취소하는 메소드입니다. |


---

### 속성 (Properties)

### altkey

> EventInfo Objects > MenuContextMenuEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
MenuContextMenuEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### bindindex

> EventInfo Objects > MenuContextMenuEventInfo > Property > bindindex

**Description**

이벤트가 발생한 MenuItem 항목에 Bind 된 데이터의 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
MenuContextMenuEventInfo.bindindex
```

**Remark**

- 컴포넌트의 innerdataset 속성에 Bind 된 DataSet 의 Row Index 값을 갖습니다.
  인덱스는 0부터 시작합니다.


---

### button

> EventInfo Objects > MenuContextMenuEventInfo > Property > button

**Description**

이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
MenuContextMenuEventInfo.button
```

**Setting Syntax**

```javascript
var strButton = e.button;
```
- **`"none"`** — 마우스 버튼에 의해 발생한 이벤트가 아닌 경우 갖는 값입니다.
- **`"lbutton"`** — 마우스의 왼쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"rbutton"`** — 마우스의 오른쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"mbutton"`** — 마우스의 가운데 버튼(Wheel)에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton1"`** — 마우스의 첫번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton2"`** — 마우스의 두번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"touch"`** — 터치에 의해 이벤트가 발생했을 때 갖는 값입니다.


---

### canvasx

> EventInfo Objects > MenuContextMenuEventInfo > Property > canvasx

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MenuContextMenuEventInfo.canvasx
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### canvasy

> EventInfo Objects > MenuContextMenuEventInfo > Property > canvasy

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MenuContextMenuEventInfo.canvasy
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### clientx

> EventInfo Objects > MenuContextMenuEventInfo > Property > clientx

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MenuContextMenuEventInfo.clientx
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### clienty

> EventInfo Objects > MenuContextMenuEventInfo > Property > clienty

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MenuContextMenuEventInfo.clienty
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### ctrlkey

> EventInfo Objects > MenuContextMenuEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
MenuContextMenuEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### eventid

> EventInfo Objects > MenuContextMenuEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
MenuContextMenuEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > MenuContextMenuEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
MenuContextMenuEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > MenuContextMenuEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
MenuContextMenuEventInfo.fromreferenceobject
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

### id

> EventInfo Objects > MenuContextMenuEventInfo > Property > id

**Description**

이벤트가 발생한 MenuItem의 ID값을 갖는 속성입니다.

**Syntax**

```javascript
MenuContextMenuEventInfo.id
```

**Remark**

- 컴포넌트의 innerdataset 속성에 Bind 된 Dataset 오브젝트의 컬럼 중 idcolumn 속성에 설정된 컬럼의 값을 갖습니다.


---

### index

> EventInfo Objects > MenuContextMenuEventInfo > Property > index

**Description**

이벤트가 발생한 MenuItem 이 동일한 level 의 MenuItem 에서 위치한 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
MenuContextMenuEventInfo.index
```

**Remark**

- level 이 동일한 MenuItem 중 상위 level 이 동일한 MenuItem 에서 인덱스를 계산합니다.
  level 값은 동일하더라도 상위 level 의 MenuItem 이 다르면 인덱스 계산에서 제외됩니다.


---

### level

> EventInfo Objects > MenuContextMenuEventInfo > Property > level

**Description**

이벤트가 발생한 MenuItem 항목의 level 값을 갖는 속성입니다.

**Syntax**

```javascript
MenuContextMenuEventInfo.level
```

**Remark**

- 컴포넌트의 innerdataset 속성에 Bind 된 DataSet 의 컬럼 중 levelcolumn 속성에 설정된 컬럼의 값을 갖습니다.
  level 은 0 부터 시작합니다.

- level 값을 기준으로 MenuItem 이 계층구조로 표시됩니다.


---

### metakey

> EventInfo Objects > MenuContextMenuEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
MenuContextMenuEventInfo.metakey
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

### screenx

> EventInfo Objects > MenuContextMenuEventInfo > Property > screenx

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MenuContextMenuEventInfo.screenx
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### screeny

> EventInfo Objects > MenuContextMenuEventInfo > Property > screeny

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MenuContextMenuEventInfo.screeny
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 y 좌표를 계산합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다.
  때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.


---

### shiftkey

> EventInfo Objects > MenuContextMenuEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
MenuContextMenuEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### 메서드 (Methods)

### preventDefault

> EventInfo Objects > MenuContextMenuEventInfo > Method > preventDefault

**Description**

현재 이벤트의 Default Action 을 취소하는 메소드입니다.

**Syntax**

```javascript
MenuContextMenuEventInfo.preventDefault()
```

**Return**

없음


---

## EventInfo Objects > MenuDragEventInfo

### MenuDragEventInfo

> EventInfo Objects > MenuDragEventInfo

**Description**

Menu 또는 PopupMenu 컴포넌트에서 Drag 액션과 관련하여 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- Menu 또는 PopupMenu 컴포넌트에서 Drag 를 발생시키거나 다른 컴포넌트에서 발생시킨 Drag 를 Drop 할 때 관련된 이벤트가 발생합니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| bindindex | 이벤트가 발생한 MenuItem 항목에 Bind 된 데이터의 인덱스값을 갖는 속성입니다. |
| button | 이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다. |
| canvasx | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| canvasy | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| clientx | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| clienty | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| datatype | Drag 액션이 발생한 위치에 대한 정보를 갖는 읽기전용 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| filelist | 어플리케이션 외부에서 파일을 Drag 했을 때 파일의 정보를 배열형태로 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| id | 이벤트가 발생한 MenuItem 항목의 id 값을 갖는 속성입니다. |
| index | 이벤트가 발생한 MenuItem 이 동일한 level 의 MenuItem 에서 위치한 인덱스값을 갖는 속성입니다. |
| level | 이벤트가 발생한 MenuItem 항목의 level 값을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| screenx | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| screeny | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |
| sourceobject | Drag 액션이 처음 발생한 컴포넌트를 갖는 속성입니다. |
| sourcereferenceobject | Drag 액션이 처음 발생한 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| userdata | 이벤트가 발생한 MenuItem 항목의 userdata 값을 갖는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| preventDefault | 현재 이벤트의 Default Action 을 취소하는 메소드입니다. |
| stopPropagation | 현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다. |


---

### 속성 (Properties)

### altkey

> EventInfo Objects > MenuDragEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
MenuDragEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### bindindex

> EventInfo Objects > MenuDragEventInfo > Property > bindindex

**Description**

이벤트가 발생한 MenuItem 항목에 Bind 된 데이터의 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
MenuDragEventInfo.bindindex
```

**Remark**

- 컴포넌트의 innerdataset 속성에 Bind 된 DataSet 의 Row Index 값을 갖습니다.
  인덱스는 "0" 부터 시작합니다.


---

### button

> EventInfo Objects > MenuDragEventInfo > Property > button

**Description**

이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
MenuDragEventInfo.button
```

**Setting Syntax**

```javascript
var strButton = e.button;
```
- **`"none"`** — 마우스 버튼에 의해 발생한 이벤트가 아닌 경우 갖는 값입니다.
- **`"lbutton"`** — 마우스의 왼쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"rbutton"`** — 마우스의 오른쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"mbutton"`** — 마우스의 가운데 버튼(Wheel)에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton1"`** — 마우스의 첫번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton2"`** — 마우스의 두번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"touch"`** — 터치에 의해 이벤트가 발생했을 때 갖는 값입니다.


---

### canvasx

> EventInfo Objects > MenuDragEventInfo > Property > canvasx

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MenuDragEventInfo.canvasx
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### canvasy

> EventInfo Objects > MenuDragEventInfo > Property > canvasy

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MenuDragEventInfo.canvasy
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### clientx

> EventInfo Objects > MenuDragEventInfo > Property > clientx

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MenuDragEventInfo.clientx
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### clienty

> EventInfo Objects > MenuDragEventInfo > Property > clienty

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MenuDragEventInfo.clienty
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### ctrlkey

> EventInfo Objects > MenuDragEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
MenuDragEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### datatype

> EventInfo Objects > MenuDragEventInfo > Property > datatype

**Description**

Drag 액션이 발생한 위치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
MenuDragEventInfo.datatype
```

**Setting Syntax**

```javascript
var strDataType = e.datatype;
```
- **`"text"`** — 어플리케이션 내부의 Drag 액션에 의해 발생한 이벤트일 때 갖는 값입니다.
- **`"file"`** — 어플리케이션 외부에서 파일을 Drag 하여 발생한 이벤트일 때 갖는 값입니다.

**Remark**

- 어플리케이션 외부에서 텍스트를 Drag 한 경우는 Drag 관련 이벤트가 발생하지 않습니다.


---

### eventid

> EventInfo Objects > MenuDragEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
MenuDragEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### filelist

> EventInfo Objects > MenuDragEventInfo > Property > filelist

**Description**

어플리케이션 외부에서 파일을 Drag 했을 때 파일의 정보를 배열형태로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
MenuDragEventInfo.filelist
```

**Setting Syntax**

```javascript
var objFile0 = e.filelist[0];
```
- **`filelist`** — VirtualFile 오브젝트의 배열로 구성되어 있습니다.

어플리케이션 내부의 Drag 액션에 의한 이벤트인 경우 값을 갖지 않습니다.

**Remark**

◆ web runtime environment 제약

- ondrop 이벤트 외 ondrag, ondragenter, ondragleave, ondragmove 이벤트에서 filelist 속성값이 정확하지 않을 수 있습니다.


---

### fromobject

> EventInfo Objects > MenuDragEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
MenuDragEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > MenuDragEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
MenuDragEventInfo.fromreferenceobject
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

### id

> EventInfo Objects > MenuDragEventInfo > Property > id

**Description**

이벤트가 발생한 MenuItem 항목의 id 값을 갖는 속성입니다.

**Syntax**

```javascript
MenuDragEventInfo.id
```

**Remark**

- 컴포넌트의 innerdataset 속성에 Bind 된 DataSet 의 컬럼 중 idcolumn 속성에 설정된 컬럼의 값을 갖습니다.


---

### index

> EventInfo Objects > MenuDragEventInfo > Property > index

**Description**

이벤트가 발생한 MenuItem 이 동일한 level 의 MenuItem 에서 위치한 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
MenuDragEventInfo.index
```

**Remark**

- level 이 동일한 MenuItem 중 상위 level 이 동일한 MenuItem 에서 인덱스를 계산합니다.
  level 값은 동일하더라도 상위 level 의 MenuItem 이 다르면 인덱스 계산에서 제외됩니다.


---

### level

> EventInfo Objects > MenuDragEventInfo > Property > level

**Description**

이벤트가 발생한 MenuItem 항목의 level 값을 갖는 속성입니다.

**Syntax**

```javascript
MenuDragEventInfo.level
```

**Remark**

- 컴포넌트의 innerdataset 속성에 Bind 된 DataSet 의 컬럼 중 levelcolumn 속성에 설정된 컬럼의 값을 갖습니다.
  level 은 "0" 부터 시작합니다.

- level 값을 기준으로 MenuItem 이 계층구조로 표시됩니다.


---

### metakey

> EventInfo Objects > MenuDragEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
MenuDragEventInfo.metakey
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

### screenx

> EventInfo Objects > MenuDragEventInfo > Property > screenx

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MenuDragEventInfo.screenx
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### screeny

> EventInfo Objects > MenuDragEventInfo > Property > screeny

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MenuDragEventInfo.screeny
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 y 좌표를 계산합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다.
  때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.


---

### shiftkey

> EventInfo Objects > MenuDragEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
MenuDragEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### sourceobject

> EventInfo Objects > MenuDragEventInfo > Property > sourceobject

**Description**

Drag 액션이 처음 발생한 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
MenuDragEventInfo.sourceobject
```

**Remark**

- ondrag 이벤트에서 리턴값을 true 로 반환한 컴포넌트를 갖습니다.


---

### sourcereferenceobject

> EventInfo Objects > MenuDragEventInfo > Property > sourcereferenceobject

**Description**

Drag 액션이 처음 발생한 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
MenuDragEventInfo.sourcereferenceobject
```

**Remark**

- ondrag 이벤트에서 리턴값을 true 로 반환한 컴포넌트 또는 서브컨트롤을 갖습니다.

- Calendar 와 같이 서브컨트롤이 있는 컴포넌트에서 서브컨트롤에 의해 이벤트가 발생한 경우 sourcereferenceobject 속성은 서브컨트롤을 갖습니다.
  Button 과 같이 서브컨트롤이 없는 컴포넌트는 해당 컴포넌트를 갖습니다.


---

### userdata

> EventInfo Objects > MenuDragEventInfo > Property > userdata

**Description**

이벤트가 발생한 MenuItem 항목의 userdata 값을 갖는 속성입니다.

**Syntax**

```javascript
MenuDragEventInfo.userdata
```

**Remark**

- 컴포넌트의 innerdataset 속성에 Bind 된 DataSet 의 컬럼 중 userdatacolumn 속성에 설정된 컬럼의 값을 갖습니다.


---

### 메서드 (Methods)

### preventDefault

> EventInfo Objects > MenuDragEventInfo > Method > preventDefault

**Description**

현재 이벤트의 Default Action 을 취소하는 메소드입니다.

**Syntax**

```javascript
MenuDragEventInfo.preventDefault()
```

**Return**

없음


---

### stopPropagation

> EventInfo Objects > MenuDragEventInfo > Method > stopPropagation

**Description**

현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다.

**Syntax**

```javascript
MenuDragEventInfo.stopPropagation()
```

**Return**

없음


---

## EventInfo Objects > MenuMouseEventInfo

### MenuMouseEventInfo

> EventInfo Objects > MenuMouseEventInfo

**Description**

Menu 또는 PopupMenu 컴포넌트에서 마우스 액션과 관련하여 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- 마우스를 이동하거나 클릭할 때 관련된 이벤트가 발생합니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| bindindex | 이벤트가 발생한 MenuItem 항목에 Bind 된 데이터의 인덱스값을 갖는 속성입니다. |
| button | 이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다. |
| canvasx | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| canvasy | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| clientx | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| clienty | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| id | 이벤트가 발생한 MenuItem 항목의 id 값을 갖는 속성입니다. |
| index | 이벤트가 발생한 MenuItem 이 동일한 level 의 MenuItem 에서 위치한 인덱스값을 갖는 속성입니다. |
| level | 이벤트가 발생한 MenuItem 항목의 level 값을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| screenx | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| screeny | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| preventDefault | 현재 이벤트의 Default Action 을 취소하는 메소드입니다. |
| stopPropagation | 현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다. |


---

### 속성 (Properties)

### altkey

> EventInfo Objects > MenuMouseEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
MenuMouseEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### bindindex

> EventInfo Objects > MenuMouseEventInfo > Property > bindindex

**Description**

이벤트가 발생한 MenuItem 항목에 Bind 된 데이터의 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
MenuMouseEventInfo.bindindex
```

**Remark**

- 컴포넌트의 innerdataset 속성에 Bind 된 DataSet 의 Row Index 값을 갖습니다.
  인덱스는 "0" 부터 시작합니다.


---

### button

> EventInfo Objects > MenuMouseEventInfo > Property > button

**Description**

이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
MenuMouseEventInfo.button
```

**Setting Syntax**

```javascript
var strButton = e.button;
```
- **`"none"`** — 마우스 버튼에 의해 발생한 이벤트가 아닌 경우 갖는 값입니다.
- **`"lbutton"`** — 마우스의 왼쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"rbutton"`** — 마우스의 오른쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"mbutton"`** — 마우스의 가운데 버튼(Wheel)에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton1"`** — 마우스의 첫번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton2"`** — 마우스의 두번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"touch"`** — 터치에 의해 이벤트가 발생했을 때 갖는 값입니다.


---

### canvasx

> EventInfo Objects > MenuMouseEventInfo > Property > canvasx

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MenuMouseEventInfo.canvasx
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### canvasy

> EventInfo Objects > MenuMouseEventInfo > Property > canvasy

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MenuMouseEventInfo.canvasy
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### clientx

> EventInfo Objects > MenuMouseEventInfo > Property > clientx

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MenuMouseEventInfo.clientx
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### clienty

> EventInfo Objects > MenuMouseEventInfo > Property > clienty

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MenuMouseEventInfo.clienty
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### ctrlkey

> EventInfo Objects > MenuMouseEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
MenuMouseEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### eventid

> EventInfo Objects > MenuMouseEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
MenuMouseEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > MenuMouseEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
MenuMouseEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > MenuMouseEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
MenuMouseEventInfo.fromreferenceobject
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

### id

> EventInfo Objects > MenuMouseEventInfo > Property > id

**Description**

이벤트가 발생한 MenuItem 항목의 id 값을 갖는 속성입니다.

**Syntax**

```javascript
MenuMouseEventInfo.id
```

**Remark**

- 컴포넌트의 innerdataset 속성에 Bind 된 DataSet 의 컬럼 중 idcolumn 속성에 설정된 컬럼의 값을 갖습니다.


---

### index

> EventInfo Objects > MenuMouseEventInfo > Property > index

**Description**

이벤트가 발생한 MenuItem 이 동일한 level 의 MenuItem 에서 위치한 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
MenuMouseEventInfo.index
```

**Remark**

- level 이 동일한 MenuItem 중 상위 level 이 동일한 MenuItem 에서 인덱스를 계산합니다.
  level 값은 동일하더라도 상위 level 의 MenuItem 이 다르면 인덱스 계산에서 제외됩니다.


---

### level

> EventInfo Objects > MenuMouseEventInfo > Property > level

**Description**

이벤트가 발생한 MenuItem 항목의 level 값을 갖는 속성입니다.

**Syntax**

```javascript
MenuMouseEventInfo.level
```

**Remark**

- 컴포넌트의 innerdataset 속성에 Bind 된 DataSet 의 컬럼 중 levelcolumn 속성에 설정된 컬럼의 값을 갖습니다.
  level 은 "0" 부터 시작합니다.

- level 값을 기준으로 MenuItem 이 계층구조로 표시됩니다.


---

### metakey

> EventInfo Objects > MenuMouseEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
MenuMouseEventInfo.metakey
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

### screenx

> EventInfo Objects > MenuMouseEventInfo > Property > screenx

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MenuMouseEventInfo.screenx
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### screeny

> EventInfo Objects > MenuMouseEventInfo > Property > screeny

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MenuMouseEventInfo.screeny
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 y 좌표를 계산합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다.
  때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.


---

### shiftkey

> EventInfo Objects > MenuMouseEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
MenuMouseEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### 메서드 (Methods)

### preventDefault

> EventInfo Objects > MenuMouseEventInfo > Method > preventDefault

**Description**

현재 이벤트의 Default Action 을 취소하는 메소드입니다.

**Syntax**

```javascript
MenuMouseEventInfo.preventDefault()
```

**Return**

없음


---

### stopPropagation

> EventInfo Objects > MenuMouseEventInfo > Method > stopPropagation

**Description**

현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다.

**Syntax**

```javascript
MenuMouseEventInfo.stopPropagation()
```

**Return**

없음


---

## EventInfo Objects > MouseEventInfo

### MouseEventInfo

> EventInfo Objects > MouseEventInfo

**Description**

컴포넌트 영역에서 마우스 액션과 관련하여 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- 마우스를 이동하거나 클릭할 때 관련된 이벤트가 발생합니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| button | 이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다. |
| canvasx | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| canvasy | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| clientx | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| clienty | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| screenx | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| screeny | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| preventDefault | 현재 이벤트의 Default Action 을 취소하는 메소드입니다. |
| stopPropagation | 현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다. |


---

### 속성 (Properties)

### altkey

> EventInfo Objects > MouseEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
MouseEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### button

> EventInfo Objects > MouseEventInfo > Property > button

**Description**

이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
MouseEventInfo.button
```

**Setting Syntax**

```javascript
var strButton = e.button;
```
- **`"none"`** — 마우스 버튼에 의해 발생한 이벤트가 아닌 경우 갖는 값입니다.
- **`"lbutton"`** — 마우스의 왼쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"rbutton"`** — 마우스의 오른쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"mbutton"`** — 마우스의 가운데 버튼(Wheel)에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton1"`** — 마우스의 첫번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton2"`** — 마우스의 두번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"touch"`** — 터치에 의해 이벤트가 발생했을 때 갖는 값입니다.


---

### canvasx

> EventInfo Objects > MouseEventInfo > Property > canvasx

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MouseEventInfo.canvasx
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### canvasy

> EventInfo Objects > MouseEventInfo > Property > canvasy

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MouseEventInfo.canvasy
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### clientx

> EventInfo Objects > MouseEventInfo > Property > clientx

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MouseEventInfo.clientx
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### clienty

> EventInfo Objects > MouseEventInfo > Property > clienty

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MouseEventInfo.clienty
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### ctrlkey

> EventInfo Objects > MouseEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
MouseEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### eventid

> EventInfo Objects > MouseEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
MouseEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > MouseEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
MouseEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > MouseEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
MouseEventInfo.fromreferenceobject
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

### metakey

> EventInfo Objects > MouseEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
MouseEventInfo.metakey
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

### screenx

> EventInfo Objects > MouseEventInfo > Property > screenx

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MouseEventInfo.screenx
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### screeny

> EventInfo Objects > MouseEventInfo > Property > screeny

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MouseEventInfo.screeny
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 y 좌표를 계산합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다.
  때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.


---

### shiftkey

> EventInfo Objects > MouseEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
MouseEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### 메서드 (Methods)

### preventDefault

> EventInfo Objects > MouseEventInfo > Method > preventDefault

**Description**

현재 이벤트의 Default Action 을 취소하는 메소드입니다.

**Syntax**

```javascript
MouseEventInfo.preventDefault()
```

**Return**

없음


---

### stopPropagation

> EventInfo Objects > MouseEventInfo > Method > stopPropagation

**Description**

현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다.

**Syntax**

```javascript
MouseEventInfo.stopPropagation()
```

**Return**

없음


---

## EventInfo Objects > MouseWheelEventInfo

### MouseWheelEventInfo

> EventInfo Objects > MouseWheelEventInfo

**Description**

마우스의 Wheel 버튼을 회전시켰을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| amount | 입력된 마우스 Wheel 의 방향 및 가중치 값을 갖는 속성입니다. |
| button | 이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다. |
| canvasx | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| canvasy | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| clientx | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| clienty | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| screenx | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| screeny | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| preventDefault | 현재 이벤트의 Default Action 을 취소하는 메소드입니다. |
| stopPropagation | 현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다. |


---

### 속성 (Properties)

### altkey

> EventInfo Objects > MouseWheelEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
MouseWheelEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### amount

> EventInfo Objects > MouseWheelEventInfo > Property > amount

**Description**

입력된 마우스 Wheel 의 방향 및 가중치 값을 갖는 속성입니다.

**Syntax**

```javascript
MouseWheelEventInfo.amount
```

**Setting Syntax**

```javascript
var nAmount = e.amount / 120 ;
```

**Remark**

- amount 속성값은 120의 배수로 이루어져 있습니다.

- 속성값에 따라 Wheel 이 움직이는 방향을 알 수 있습니다.
  Wheel 이 아래로 움직이는 경우에는 음수값을 갖고, 위로 움직이는 경우에는 양수값을 갖습니다.


---

### button

> EventInfo Objects > MouseWheelEventInfo > Property > button

**Description**

이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
MouseWheelEventInfo.button
```

**Setting Syntax**

```javascript
var strButton = e.button;
```
- **`"none"`** — 마우스 버튼에 의해 발생한 이벤트가 아닌 경우 갖는 값입니다.
- **`"lbutton"`** — 마우스의 왼쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"rbutton"`** — 마우스의 오른쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"mbutton"`** — 마우스의 가운데 버튼(Wheel)에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton1"`** — 마우스의 첫번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton2"`** — 마우스의 두번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"touch"`** — 터치에 의해 이벤트가 발생했을 때 갖는 값입니다.


---

### canvasx

> EventInfo Objects > MouseWheelEventInfo > Property > canvasx

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MouseWheelEventInfo.canvasx
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### canvasy

> EventInfo Objects > MouseWheelEventInfo > Property > canvasy

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MouseWheelEventInfo.canvasy
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### clientx

> EventInfo Objects > MouseWheelEventInfo > Property > clientx

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MouseWheelEventInfo.clientx
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### clienty

> EventInfo Objects > MouseWheelEventInfo > Property > clienty

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MouseWheelEventInfo.clienty
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### ctrlkey

> EventInfo Objects > MouseWheelEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
MouseWheelEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### eventid

> EventInfo Objects > MouseWheelEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
MouseWheelEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > MouseWheelEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
MouseWheelEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > MouseWheelEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
MouseWheelEventInfo.fromreferenceobject
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

### metakey

> EventInfo Objects > MouseWheelEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
MouseWheelEventInfo.metakey
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

### screenx

> EventInfo Objects > MouseWheelEventInfo > Property > screenx

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MouseWheelEventInfo.screenx
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### screeny

> EventInfo Objects > MouseWheelEventInfo > Property > screeny

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MouseWheelEventInfo.screeny
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 y 좌표를 계산합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다.
  때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.


---

### shiftkey

> EventInfo Objects > MouseWheelEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
MouseWheelEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### 메서드 (Methods)

### preventDefault

> EventInfo Objects > MouseWheelEventInfo > Method > preventDefault

**Description**

현재 이벤트의 Default Action 을 취소하는 메소드입니다.

**Syntax**

```javascript
MouseWheelEventInfo.preventDefault()
```

**Return**

없음


---

### stopPropagation

> EventInfo Objects > MouseWheelEventInfo > Method > stopPropagation

**Description**

현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다.

**Syntax**

```javascript
MouseWheelEventInfo.stopPropagation()
```

**Return**

없음


---

## EventInfo Objects > MoveEventInfo

### MoveEventInfo

> EventInfo Objects > MoveEventInfo

**Description**

컴포넌트의 위치가 변경되었을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| x | 위치가 변경된 컴포넌트의 x 좌표값을 갖는 속성입니다. |
| y | 위치가 변경된 컴포넌트의 y 좌표값을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > MoveEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
MoveEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > MoveEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
MoveEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > MoveEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
MoveEventInfo.fromreferenceobject
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

### x

> EventInfo Objects > MoveEventInfo > Property > x

**Description**

위치가 변경된 컴포넌트의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MoveEventInfo.x
```

**Setting Syntax**

```javascript
var nXpos = e.x ;
```


---

### y

> EventInfo Objects > MoveEventInfo > Property > y

**Description**

위치가 변경된 컴포넌트의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
MoveEventInfo.y
```

**Setting Syntax**

```javascript
var nYpos = e.y ;
```


---

## EventInfo Objects > NetworkErrorEventInfo

### NetworkErrorEventInfo

> EventInfo Objects > NetworkErrorEventInfo

**Description**

모바일 기기에서 네트워크 상태 확인에 실패했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| errormsg | 발생한 에러에 대한 에러메시지를 문자열로 갖는 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| statuscode | 발생한 에러에 대한 에러코드값을 문자열로 갖는 속성입니다. |


---

### 속성 (Properties)

### errormsg

> EventInfo Objects > NetworkErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러메시지를 문자열로 갖는 속성입니다.

**Syntax**

```javascript
NetworkErrorEventInfo.errormsg
```

**Setting Syntax**

- **`"00001"`** — Parameter Error
- **`"6000"`** — Time Out
- **`"6001"`** — Not reachable


---

### errortype

> EventInfo Objects > NetworkErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
NetworkErrorEventInfo.errortype
```

**Setting Syntax**

- **`"EvalError"`** — 현재 버전에서 발생하지 않지만 이전 버전과의 호환성을 유지하기 위해 정의
- **`"RangeError"`** — 숫자값이 허용된 범위를 넘어선 경우
- **`"ReferenceError"`** — 참조값이 유효하지 않은 경우
- **`"SyntaxError"`** — 파싱에 문제가 있을 경우
- **`"TypeError"`** — 피연산자의 자료형이 허용된 범위가 아닌 경우
- **`"URIError"`** — 전역 URI 처리 함수 중 하나가 해당 정의와 호환되지 않는 방식으로 사용된 경우
- **`"NativeError"`** — 모든 Native Error 인 경우
- **`"CommunicationError"`** — 통신시 발생한 에러인 경우
- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우


---

### eventid

> EventInfo Objects > NetworkErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
NetworkErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### statuscode

> EventInfo Objects > NetworkErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대한 에러코드값을 문자열로 갖는 속성입니다.

**Syntax**

```javascript
NetworkErrorEventInfo.statuscode
```

**Setting Syntax**

- **`"00001"`** — Parameter Error
- **`"6000"`** — Time Out
- **`"6001"`** — Not reachable


---

## EventInfo Objects > NetworkEventInfo

### NetworkEventInfo

> EventInfo Objects > NetworkEventInfo

**Description**

모바일 기기에서 네트워크 상태 확인에 성공했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > NetworkEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
NetworkEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

## EventInfo Objects > NetworkStatusChangeEventInfo

### NetworkStatusChangeEventInfo

> EventInfo Objects > NetworkStatusChangeEventInfo

**Description**

네트워크 사용 가능 상태가 변경됐을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| online | 애플리케이션이 실행 중인 환경에서 네트워크 사용 가능 상태 정보를 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > NetworkStatusChangeEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
NetworkStatusChangeEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > NetworkStatusChangeEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
NetworkStatusChangeEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > NetworkStatusChangeEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
NetworkStatusChangeEventInfo.fromreferenceobject
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

### online

> EventInfo Objects > NetworkStatusChangeEventInfo > Property > online

**Description**

애플리케이션이 실행 중인 환경에서 네트워크 사용 가능 상태 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
NetworkStatusChangeEventInfo.online
```

**Setting Syntax**

- **`online`** — 네트워크 사용 가능 상태 정보를 갖습니다.
- true: 네트워크가 연결된 상태
- false: 네트워크가 연결되지 않은 상태


---

## EventInfo Objects > NotificationEventInfo

### NotificationEventInfo

> EventInfo Objects > NotificationEventInfo

**Description**

모바일 기기에서 넥사크로가 Notification 을 수신하여 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| messages | 이벤트가 발생한 원인에 대한 정보를 갖는 읽기전용 속성입니다. |
| reason | 이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > NotificationEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
NotificationEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### messages

> EventInfo Objects > NotificationEventInfo > Property > messages

**Description**

이벤트가 발생한 원인에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
NotificationEventInfo.messages
```

**Remark**

- NotificationEventInfo 오브젝트의 reason 속성값이 200인 경우에만 유효한 값을 갖는 속성입니다.
  reason 속성값이 200이 아닌 경우에는 undefind 값을 갖습니다.


---

### reason

> EventInfo Objects > NotificationEventInfo > Property > reason

**Description**

이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
NotificationEventInfo.reason
```

**Setting Syntax**

- **`100`** — Notification 수신을 위해 Device Token 값이 등록되었을 때 갖는 값입니다.
- **`200`** — Notification 이 수신되었을 때 갖는 값입니다.
- **`300`** — 송수신 오류에 의해 Device Token 값이 발급되지 않았을 때 갖는 값입니다.


---

## EventInfo Objects > OrientationChangeEventInfo

### OrientationChangeEventInfo

> EventInfo Objects > OrientationChangeEventInfo

**Description**

모바일 기기의 방향이 변경되었을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| orientation | 모바일 기기의 변경된 방향센서 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### fromobject

> EventInfo Objects > OrientationChangeEventInfo > Property > fromobject

**Description**

 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
OrientationChangeEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- OrientationChangeEventInfo 오브젝트에서는 "null" 값을 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > OrientationChangeEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
OrientationChangeEventInfo.fromreferenceobject
```

**Setting Syntax**

```javascript
var objComp = e.fromreferenceobject;
```

**Remark**

- OrientationChangeEventInfo 오브젝트에서는 "null" 값을 갖습니다.


---

### orientation

> EventInfo Objects > OrientationChangeEventInfo > Property > orientation

**Description**

모바일 기기의 변경된 방향센서 값을 갖는 속성입니다.

**Syntax**

```javascript
OrientationChangeEventInfo.orientation
```

**Setting Syntax**

```javascript
var strOrient = e.orientation;
```
- **`"portrait"`** — 모바일 기기의 방향이 세로일 때 갖는 값입니다.
- **`"landscape"`** — 모바일 기기의 방향이 가로일 때 갖는 값입니다.


---

## EventInfo Objects > RangeDateChangedEventInfo

### RangeDateChangedEventInfo

> EventInfo Objects > RangeDateChangedEventInfo

**Description**

DateRangePicker 컴포넌트의 날짜가 변경된 후 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| postenddate | 새로 변경된 enddate 속성값을 갖는 속성입니다. |
| poststartdate | 새로 변경된 startdate 속성값을 갖는 속성입니다. |
| preenddate | 변경 전 enddate 속성값을 갖는 속성입니다. |
| prestartdate | 변경 전 startdate 속성값을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > RangeDateChangedEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
RangeDateChangedEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > RangeDateChangedEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
RangeDateChangedEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > RangeDateChangedEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
RangeDateChangedEventInfo.fromreferenceobject
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

### postenddate

> EventInfo Objects > RangeDateChangedEventInfo > Property > postenddate

**Description**

새로 변경된 enddate 속성값을 갖는 속성입니다.

**Syntax**

```javascript
RangeDateChangedEventInfo.postenddate
```


---

### poststartdate

> EventInfo Objects > RangeDateChangedEventInfo > Property > poststartdate

**Description**

새로 변경된 startdate 속성값을 갖는 속성입니다.

**Syntax**

```javascript
RangeDateChangedEventInfo.poststartdate
```


---

### preenddate

> EventInfo Objects > RangeDateChangedEventInfo > Property > preenddate

**Description**

변경 전 enddate 속성값을 갖는 속성입니다.

**Syntax**

```javascript
RangeDateChangedEventInfo.preenddate
```


---

### prestartdate

> EventInfo Objects > RangeDateChangedEventInfo > Property > prestartdate

**Description**

변경 전 startdate 속성값을 갖는 속성입니다.

**Syntax**

```javascript
RangeDateChangedEventInfo.prestartdate
```


---

## EventInfo Objects > ScrollEventInfo

### ScrollEventInfo

> EventInfo Objects > ScrollEventInfo

**Description**

컴포넌트 또는 Form 에서 스크롤에 의해 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| pos | 변경된 스크롤바의 Position 값을 갖는 속성입니다. |
| type | 컴포넌트에서 스크롤 이벤트가 발생한 원인값을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > ScrollEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ScrollEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > ScrollEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
ScrollEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > ScrollEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
ScrollEventInfo.fromreferenceobject
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

### pos

> EventInfo Objects > ScrollEventInfo > Property > pos

**Description**

변경된 스크롤바의 Position 값을 갖는 속성입니다.

**Syntax**

```javascript
ScrollEventInfo.pos
```

**Setting Syntax**

```javascript
var nPos = e.pos;
```


---

### type

> EventInfo Objects > ScrollEventInfo > Property > type

**Description**

컴포넌트에서 스크롤 이벤트가 발생한 원인값을 갖는 속성입니다.

**Syntax**

```javascript
ScrollEventInfo.type
```

**Setting Syntax**

```javascript
var strType = e.type;
```
- **`"first"`** — 스크롤바의 Position 이 최소값에 도달하여 이벤트가 발생했을 때 갖는 값입니다.
- **`"firstover"`** — 스크롤바의 Position 이 최소값에 도달한 상태에서 스크롤을 시도하여 이벤트가 발생했을 때 갖는 값입니다.
- **`"last"`** — 스크롤바의 Position 이 최대값에 도달하여 이벤트가 발생했을 때 갖는 값입니다.
- **`"lastover"`** — 스크롤바의 Position 이 최대값에 도달한 상태에서 스크롤을 시도하여 이벤트가 발생했을 때 갖는 값입니다.
- **`"lineup"`** — 수직 스크롤바에서 스크롤이 LIne 단위로 Up 되어 이벤트가 발생했을 때 갖는 값입니다.
- **`"linedown"`** — 수직 스크롤바에서 스크롤이 LIne 단위로 Down 되어 이벤트가 발생했을 때 갖는 값입니다.
- **`"lineleft"`** — 수평 스크롤바에서 스크롤이 LIne 단위로 Left 되어 이벤트가 발생했을 때 갖는 값입니다.
- **`"lineright"`** — 수평 스크롤바에서 스크롤이 LIne 단위로 Right 되어 이벤트가 발생했을 때 갖는 값입니다.
- **`"pageup"`** — 수직 스크롤바에서 스크롤이 Page 단위로 Up 되어 이벤트가 발생했을 때 갖는 값입니다.
- **`"pagedown"`** — 수직 스크롤바에서 스크롤이 Page 단위로 Down 되어 이벤트가 발생했을 때 갖는 값입니다.
- **`"pageleft"`** — 수평 스크롤바에서 스크롤이 Page 단위로 Left 되어 이벤트가 발생했을 때 갖는 값입니다.
- **`"pageright"`** — 수평 스크롤바에서 스크롤이 Page 단위로 Right 되어 이벤트가 발생했을 때 갖는 값입니다.
- **`"track"`** — 방향에 관계없이 트랙버튼에 의해 스크롤 되어 이벤트가 발생했을 때 갖는 값입니다.
- **`"trackfirst"`** — 트랙버튼에 의해 스크롤바의 Position 이 최소값에 도달하여 이벤트가 발생했을 때 갖는 값입니다.
- **`"trackfirstover"`** — 스크롤바의 Position 이 최소값에 도달한 상태에서 트랙버튼으로 스크롤을 시도하여 이벤트가 발생했을 때 갖는 값입니다.
- **`"tracklast"`** — 트랙버튼에 의해 스크롤바의 Position 이 최대값에 도달하여 이벤트가 발생했을 때 갖는 값입니다.
- **`"tracklastover"`** — 스크롤바의 Position 이 최대값에 도달한 상태에서 트랙버튼으로 스크롤을 시도하여 이벤트가 발생했을 때 갖는 값입니다.
- **`"trackstart"`** — 트랙버튼으로 스크롤이 시작되어 이벤트가 발생했을 때 갖는 값입니다.
- **`"trackend"`** — 트랙버튼으로 진행중인 스크롤이 종료되어 이벤트가 발생했을 때 갖는 값입니다.
- **`"wheelup"`** — 마우스의 Wheel 버튼에 의해 스크롤이 Up 되어 이벤트가 발생했을 때 갖는 값입니다.
- **`"wheeldown"`** — 마우스의 Wheel 버튼에 의해 스크롤이 Down 되어 이벤트가 발생했을 때 갖는 값입니다.
- **`"wheelfirst"`** — 마우스의 Wheel 버튼에 의해 스크롤바의 Position 이 최소값에 도달하여 이벤트가 발생했을 때 갖는 값입니다.
- **`"wheelfirstover"`** — 스크롤바의 Position 이 최소값에 도달한 상태에서 마우스의 Wheel 버튼으로 스크롤을 시도하여 이벤트가 발생했을 때 갖는 값입니다.
- **`"wheellast"`** — 마우스의 Wheel 버튼에 의해 스크롤바의 Position 이 최대값에 도달하여 이벤트가 발생했을 때 갖는 값입니다.
- **`"wheellastover"`** — 스크롤바의 Position 이 최대값에 도달한 상태에서 마우스의 Wheel 버튼으로 스크롤을 시도하여 이벤트가 발생했을 때 갖는 값입니다.
- **`"slidefirst"`** — 슬라이드 또는 플링에 의해 스크롤바의 Position 이 최소값에 도달하여 이벤트가 발생했을 때 갖는 값입니다.
- **`"slidefirstover"`** — 스크롤바의 Position 이 최소값에 도달한 상태에서 슬라이드 또는 플링으로 스크롤을 시도하여 이벤트가 발생했을 때 갖는 값입니다.
- **`"slidelast"`** — 슬라이드 또는 플링에 의해 스크롤바의 Position 이 최대값에 도달하여 이벤트가 발생했을 때 갖는 값입니다.
- **`"slidelastover"`** — 스크롤바의 Position 이 최대값에 도달한 상태에서 슬라이드 또는 플링으로 스크롤을 시도하여 이벤트가 발생했을 때 갖는 값입니다.
- **`"slidescrollup"`** — 수직 스크롤바에서 슬라이드 또는 플링에 의해 스크롤이 Up 되어 이벤트가 발생했을 때 갖는 값입니다.
- **`"slidescrolldown"`** — 수직 스크롤바에서 슬라이드 또는 플링에 의해 스크롤이 Down 되어 이벤트가 발생했을 때 갖는 값입니다.
- **`"slidescrollright"`** — 수평 스크롤바에서 슬라이드 또는 플링에 의해 스크롤이 Right 되어 이벤트가 발생했을 때 갖는 값입니다.
- **`"slidescrollleft"`** — 수평 스크롤바에서 슬라이드 또는 플링에 의해 스크롤이 Left 되어 이벤트가 발생했을 때 갖는 값입니다.
- **`"none"`** — 정의되지 않은 모든 동작에 의해 스크롤이 발생했을 때 갖는 값입니다.

예를 들어 메소드로 Position 값을 변경하거나 방향키에 의해 선택이 변경되어 스크롤이 발생하는 경우에 "none" 값을 갖습니다.


---

## EventInfo Objects > SelectFieldCloseUpEventInfo

### SelectFieldCloseUpEventInfo

> EventInfo Objects > SelectFieldCloseUpEventInfo

**Description**

SelectField 컴포넌트에서 화면에 표시된 아이템 리스트가 닫힐 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- SelectField 컴포넌트에서 화면에 표시된 아이템 리스트는 아이템을 선택하거나 다른 영역을 클릭했을 때 닫히게 됩니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| isselect | 아이템 선택에 의해 아이템 리스트가 닫혔는지 여부를 갖는 속성입니다. |
| postindex | 새로 변경된 아이템의 인덱스값을 갖는 속성입니다. |
| posttext | 새로 변경된 아이템의 text 값을 갖는 속성입니다. |
| postvalue | 새로 변경된 아이템의 value 값을 갖는 속성입니다. |
| preindex | 변경 전 아이템의 인덱스값을 갖는 속성입니다. |
| pretext | 변경 전 아이템의 text 값을 갖는 속성입니다. |
| prevalue | 변경 전 아이템의 value 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > SelectFieldCloseUpEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
SelectFieldCloseUpEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > SelectFieldCloseUpEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
SelectFieldCloseUpEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > SelectFieldCloseUpEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
SelectFieldCloseUpEventInfo.fromreferenceobject
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

### isselect

> EventInfo Objects > SelectFieldCloseUpEventInfo > Property > isselect

**Description**

아이템 선택에 의해 아이템 리스트가 닫혔는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
SelectFieldCloseUpEventInfo.isselect
```

**Setting Syntax**

```javascript
var bIssel = e.isselect ;
```
- **`true`** — 아이템 선택에 의해 아이템 리스트가 닫혀서 이벤트가 발생했을 경우 갖는 값입니다.
- **`false`** — 아이템 리스트 바깥쪽 영역 선택에 의해 리스트가 닫혀서 이벤트가 발생했을 경우 갖는 값입니다.

**Remark**

- SelectField 컴포넌트에서 화면에 표시된 아이템 리스트는 아이템을 선택하거나 다른 영역을 클릭했을 때 닫히게 됩니다.


---

### postindex

> EventInfo Objects > SelectFieldCloseUpEventInfo > Property > postindex

**Description**

새로 변경된 아이템의 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
SelectFieldCloseUpEventInfo.postindex
```

**Setting Syntax**

```javascript
var nPostIdx = e.postindex;
```


---

### posttext

> EventInfo Objects > SelectFieldCloseUpEventInfo > Property > posttext

**Description**

새로 변경된 아이템의 text 값을 갖는 속성입니다.

**Syntax**

```javascript
SelectFieldCloseUpEventInfo.posttext
```

**Setting Syntax**

```javascript
var strPosttext = e.posttext;
```


---

### postvalue

> EventInfo Objects > SelectFieldCloseUpEventInfo > Property > postvalue

**Description**

새로 변경된 아이템의 value 값을 갖는 속성입니다.

**Syntax**

```javascript
SelectFieldCloseUpEventInfo.postvalue
```

**Setting Syntax**

```javascript
var strPostvalue = e.postvalue;
```


---

### preindex

> EventInfo Objects > SelectFieldCloseUpEventInfo > Property > preindex

**Description**

변경 전 아이템의 인덱스값을 갖는 속성입니다.

**Syntax**

```javascript
SelectFieldCloseUpEventInfo.preindex
```

**Setting Syntax**

```javascript
var nPreIdx = e.preindex ;
```


---

### pretext

> EventInfo Objects > SelectFieldCloseUpEventInfo > Property > pretext

**Description**

변경 전 아이템의 text 값을 갖는 속성입니다.

**Syntax**

```javascript
SelectFieldCloseUpEventInfo.pretext
```

**Setting Syntax**

```javascript
var strPretext = e.pretext;
```


---

### prevalue

> EventInfo Objects > SelectFieldCloseUpEventInfo > Property > prevalue

**Description**

변경 전 아이템의 value 값을 갖는 속성입니다.

**Syntax**

```javascript
SelectFieldCloseUpEventInfo.prevalue
```

**Setting Syntax**

```javascript
var strPrevalue = e.prevalue;
```


---

## EventInfo Objects > SetFocusEventInfo

### SetFocusEventInfo

> EventInfo Objects > SetFocusEventInfo

**Description**

컴포넌트가 포커스 되었을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| oldcomponent | 이벤트가 발생하기 전 포커스를 가지고 있던 컴포넌트를 갖는 속성입니다. |
| oldreferencecomponent | 이벤트가 발생하기 전 포커스를 가지고 있던 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > SetFocusEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
SetFocusEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > SetFocusEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
SetFocusEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > SetFocusEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
SetFocusEventInfo.fromreferenceobject
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

### oldcomponent

> EventInfo Objects > SetFocusEventInfo > Property > oldcomponent

**Description**

이벤트가 발생하기 전 포커스를 가지고 있던 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
SetFocusEventInfo.oldcomponent
```

**Setting Syntax**

```javascript
var objOldComp = e.oldcomponent;
```

**Remark**

- oldcompoent 속성은 포커스를 가지고 있던 컴포넌트를 갖고, oldreferencecomponent 속성은 포커스를 가지고 있던 서브컨트롤을 갖습니다.
  예를 들어 Combo 컴포넌트의 Edit 영역에 포커스가 있었다면 oldcomponent 속성은 Combo 컴포넌트를 갖고, oldreferencecomponent 속성은 Edit 서브컨트롤을 갖습니다.


---

### oldreferencecomponent

> EventInfo Objects > SetFocusEventInfo > Property > oldreferencecomponent

**Description**

이벤트가 발생하기 전 포커스를 가지고 있던 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
SetFocusEventInfo.oldreferencecomponent
```

**Setting Syntax**

```javascript
var objOldrefer = e.oldreferencecomponent;
```

**Remark**

- 포커스를 가지고 있던 컴포넌트가 Calendar 와 같이 서브컨트롤이 있는 컴포넌트이면 fromreferenceobject 속성은 서브컨트롤을 갖습니다.
  Button 과 같이 서브컨트롤이 없는 컴포넌트는 해당 컴포넌트를 갖습니다.

- oldcompoent 속성은 포커스를 가지고 있던 컴포넌트를 갖고, oldreferencecomponent 속성은 포커스를 가지고 있던 서브컨트롤을 갖습니다.
  예를 들어 Combo 컴포넌트의 Edit 영역에 포커스가 있었다면 oldcomponent 속성은 Combo 컴포넌트를 갖고, oldreferencecomponent 속성은 Edit 서브컨트롤을 갖습니다.


---

## EventInfo Objects > SizeEventInfo

### SizeEventInfo

> EventInfo Objects > SizeEventInfo

**Description**

컴포넌트의 크기가 변경될 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| cx | 컴포넌트의 변경 된 너비값을 갖는 속성입니다. |
| cy | 컴포넌트의 변경 된 높이값을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| orientation | 모바일 기기일 때 방향센서의 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### cx

> EventInfo Objects > SizeEventInfo > Property > cx

**Description**

컴포넌트의 변경 된 너비값을 갖는 속성입니다.

**Syntax**

```javascript
SizeEventInfo.cx
```

**Setting Syntax**

```javascript
var nWidth = e.cx;
```


---

### cy

> EventInfo Objects > SizeEventInfo > Property > cy

**Description**

컴포넌트의 변경 된 높이값을 갖는 속성입니다.

**Syntax**

```javascript
SizeEventInfo.cy
```

**Setting Syntax**

```javascript
var nHeight = e.cy;
```


---

### eventid

> EventInfo Objects > SizeEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
SizeEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > SizeEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
SizeEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > SizeEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
SizeEventInfo.fromreferenceobject
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

### orientation

> EventInfo Objects > SizeEventInfo > Property > orientation

**Description**

모바일 기기일 때 방향센서의 값을 갖는 속성입니다.

**Syntax**

```javascript
SizeEventInfo.orientation
```

**Setting Syntax**

```javascript
var strOrient = e.orientation;
```
- **`"portrait"`** — 모바일 기기의 방향이 세로일 때 갖는 값입니다.
- **`"landscape"`** — 모바일 기기의 방향이 가로일 때 갖는 값입니다.
- **`"resize"`** — Windows 환경일 때 컴포넌트의 크기가 변경되면 갖는 값입니다.
- **`"onsize"`** — Windows 환경일 때 MainFrame 의 크기가 변경되면 갖는 값입니다.


---

## EventInfo Objects > SketchErrorEventInfo

### SketchErrorEventInfo

> EventInfo Objects > SketchErrorEventInfo

**Description**

Sketch 컴포넌트의 메소드 실행 중 오류가 생겼을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| errormsg | 발생한 에러에 대한 에러메시지를 갖는 속성입니다. |
| errorobj | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| locationuri | 대상 URI가 다른 주소로 변경된 경우 응답메세지 헤더의 Location 필드값을 갖는 속성입니다. |
| requesturi | 통신 중 발생한 오류의 원인이 되는 URI 를 갖는 속성입니다. |
| statuscode | 발생한 에러에 대한 에러코드값을 갖는 속성입니다. |


---

### 속성 (Properties)

### errormsg

> EventInfo Objects > SketchErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러메시지를 갖는 속성입니다.

**Syntax**

```javascript
SketchErrorEventInfo.errormsg
```

**Setting Syntax**

- **`"0001"`** — Parameter Error
- **`"1101"`** — I/O Error
- **`"1102"`** — Permission Denied
- **`"1103"`** — Irregular Expression Error
- **`"1104"`** — Removed target error
- **`"1105"`** — Image Info [statuscode] is not found
- **`"1106"`** — The file is not correct
- **`"1107"`** — Failed to save file


---

### errorobj

> EventInfo Objects > SketchErrorEventInfo > Property > errorobj

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
SketchErrorEventInfo.errorobj
```

**Setting Syntax**

```javascript
var objComp = e.erroobj;
```

**Remark**

- Sketch 컴포넌트 자신을 갖습니다.


---

### errortype

> EventInfo Objects > SketchErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
SketchErrorEventInfo.errortype
```

**Setting Syntax**

- **`"EvalError"`** — 현재 버전에서 발생하지 않지만 이전 버전과의 호환성을 유지하기 위해 정의
- **`"RangeError"`** — 숫자값이 허용된 범위를 넘어선 경우
- **`"ReferenceError"`** — 참조값이 유효하지 않은 경우
- **`"SyntaxError"`** — 파싱에 문제가 있을 경우
- **`"TypeError"`** — 피연산자의 자료형이 허용된 범위가 아닌 경우
- **`"URIError"`** — 전역 URI 처리 함수 중 하나가 해당 정의와 호환되지 않는 방식으로 사용된 경우
- **`"NativeError"`** — 모든 Native Error 인 경우
- **`"CommunicationError"`** — 통신시 발생한 에러인 경우
- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우


---

### eventid

> EventInfo Objects > SketchErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
SketchErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### locationuri

> EventInfo Objects > SketchErrorEventInfo > Property > locationuri

**Description**

대상 URI가 다른 주소로 변경된 경우 응답메세지 헤더의 Location 필드값을 갖는 속성입니다.

**Syntax**

```javascript
SketchErrorEventInfo.locationuri
```

**Remark**

- locationuri 속성은 대상 URI 가 Http/Https Redirection 이 필요한 경우에만 값을 가지며 응답메세지 헤더의 Location 필드 값을 표현합니다.


---

### requesturi

> EventInfo Objects > SketchErrorEventInfo > Property > requesturi

**Description**

통신 중 발생한 오류의 원인이 되는 URI 를 갖는 속성입니다.

**Syntax**

```javascript
SketchErrorEventInfo.requesturi
```


---

### statuscode

> EventInfo Objects > SketchErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대한 에러코드값을 갖는 속성입니다.

**Syntax**

```javascript
SketchErrorEventInfo.statuscode
```

**Setting Syntax**

- **`"0001"`** — Parameter Error
- **`"1101"`** — I/O Error
- **`"1102"`** — Permission Denied
- **`"1103"`** — Irregular Expression Error
- **`"1104"`** — Removed target error
- **`"1105"`** — Image Info [statuscode] is not found
- **`"1106"`** — The file is not correct
- **`"1107"`** — Failed to save file

**Remark**

- SketchErrorEventInfo 의 errortype 속성값이 "CommunicationError" 인 경우 HTTP/HTTPS 통신 중 오류가 발생하면 HTTP 상태코드를 반환합니다.
  HTTP/HTTPS Status Code는 RFC 2616 문서의 Status Code 정의를 참조하시기 바랍니다.


---

## EventInfo Objects > SketchEventInfo

### SketchEventInfo

> EventInfo Objects > SketchEventInfo

**Description**

Sketch 컴포넌트에 입력된 값을 value 속성 또는 파일로 저장에 성공했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- saveSketch(), saveSketchToFile() 메소드 실행에 성공했을 때 관련 이벤트가 발생합니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > SketchEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
SketchEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > SketchEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
SketchEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > SketchEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
SketchEventInfo.fromreferenceobject
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

## EventInfo Objects > SketchLoadEventInfo

### SketchLoadEventInfo

> EventInfo Objects > SketchLoadEventInfo

**Description**

loadSketch() 메소드 실행이 성공했을때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| url | value 속성에 로딩된 이미지의 위치경로 정보를 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > SketchLoadEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
SketchLoadEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > SketchLoadEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
SketchLoadEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > SketchLoadEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
SketchLoadEventInfo.fromreferenceobject
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

### url

> EventInfo Objects > SketchLoadEventInfo > Property > url

**Description**

value 속성에 로딩된 이미지의 위치경로 정보를 갖는 속성입니다.

**Syntax**

```javascript
SketchLoadEventInfo.url
```

**Remark**

- loadSketch() 메소드에 인수로 전달된 값을 가집니다.


---

## EventInfo Objects > SmsErrorEventInfo

### SmsErrorEventInfo

> EventInfo Objects > SmsErrorEventInfo

**Description**

SMS 를 처리하는 과정에서 오류가 생겼을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| errormsg | SMS 처리 시 발생한 에러에 대한 에러메시지를 갖는 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| message | 에러가 발생한 SMS 의 메시지 내용을 갖는 속성입니다. |
| phonenumber | 에러가 발생한 SMS 의 전화번호를 갖는 속성입니다. |
| smsid | 에러가 발생한 SMS 의 ID 값을 갖는 속성입니다. |
| statuscode | 발생한 에러에 대한 에러코드값을 갖는 속성입니다. |


---

### 속성 (Properties)

### errormsg

> EventInfo Objects > SmsErrorEventInfo > Property > errormsg

**Description**

SMS 처리 시 발생한 에러에 대한 에러메시지를 갖는 속성입니다.

**Syntax**

```javascript
SmsErrorEventInfo.errormsg
```

**Setting Syntax**

- **`"00001"`** — Parameter Error
- **`"2000"`** — An Sms was not deleted. Wrong smsid
- **`"2001"`** — Sending SMS Failure


---

### errortype

> EventInfo Objects > SmsErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
SmsErrorEventInfo.errortype
```

**Setting Syntax**

- **`"EvalError"`** — 현재 버전에서 발생하지 않지만 이전 버전과의 호환성을 유지하기 위해 정의
- **`"RangeError"`** — 숫자값이 허용된 범위를 넘어선 경우
- **`"ReferenceError"`** — 참조값이 유효하지 않은 경우
- **`"SyntaxError"`** — 파싱에 문제가 있을 경우
- **`"TypeError"`** — 피연산자의 자료형이 허용된 범위가 아닌 경우
- **`"URIError"`** — 전역 URI 처리 함수 중 하나가 해당 정의와 호환되지 않는 방식으로 사용된 경우
- **`"NativeError"`** — 모든 Native Error 인 경우
- **`"CommunicationError"`** — 통신시 발생한 에러인 경우
- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우


---

### eventid

> EventInfo Objects > SmsErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
SmsErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### message

> EventInfo Objects > SmsErrorEventInfo > Property > message

**Description**

에러가 발생한 SMS 의 메시지 내용을 갖는 속성입니다.

**Syntax**

```javascript
SmsErrorEventInfo.message
```


---

### phonenumber

> EventInfo Objects > SmsErrorEventInfo > Property > phonenumber

**Description**

에러가 발생한 SMS 의 전화번호를 갖는 속성입니다.

**Syntax**

```javascript
SmsErrorEventInfo.phonenumber
```


---

### smsid

> EventInfo Objects > SmsErrorEventInfo > Property > smsid

**Description**

에러가 발생한 SMS 의 ID 값을 갖는 속성입니다.

**Syntax**

```javascript
SmsErrorEventInfo.smsid
```


---

### statuscode

> EventInfo Objects > SmsErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대한 에러코드값을 갖는 속성입니다.

**Syntax**

```javascript
SmsErrorEventInfo.statuscode
```

**Setting Syntax**

- **`"00001"`** — Parameter Error
- **`"2000"`** — An Sms was not deleted. Wrong smsid
- **`"2001"`** — Sending SMS Failure


---

## EventInfo Objects > SmsEventInfo

### SmsEventInfo

> EventInfo Objects > SmsEventInfo

**Description**

SMS 메시지 처리와 관련하여 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- Sms 오브젝트의 cansendmessage, ondeletemessage, onrecvmessage, onsendmessage 이벤트 발생 시 EventInfo 오브젝트로 전달됩니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| message | 처리 된 SMS 의 메시지 내용을 갖는 속성입니다. |
| phonenumber | 처리된 SMS 의 전화번호를 갖는 속성입니다. |
| smsid | 처리 된 SMS 의 ID 를 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > SmsEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
SmsEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### message

> EventInfo Objects > SmsEventInfo > Property > message

**Description**

처리 된 SMS 의 메시지 내용을 갖는 속성입니다.

**Syntax**

```javascript
SmsEventInfo.message
```


---

### phonenumber

> EventInfo Objects > SmsEventInfo > Property > phonenumber

**Description**

처리된 SMS 의 전화번호를 갖는 속성입니다.

**Syntax**

```javascript
SmsEventInfo.phonenumber
```


---

### smsid

> EventInfo Objects > SmsEventInfo > Property > smsid

**Description**

처리 된 SMS 의 ID 를 갖는 속성입니다.

**Syntax**

```javascript
SmsEventInfo.smsid
```

**Remark**

- SMS 를 구분하는 고유값으로 2자리 숫자입니다.


---

## EventInfo Objects > SmsMessageListEventInfo

### SmsMessageListEventInfo

> EventInfo Objects > SmsMessageListEventInfo

**Description**

OS 가 Android 인 모바일 기기의 SMS 목록을 조회할 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| smsmessages | 조회된 SMS 메시지가 저장된 SmsMessage 오브젝트를 배열형태로 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > SmsMessageListEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
SmsMessageListEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### smsmessages

> EventInfo Objects > SmsMessageListEventInfo > Property > smsmessages

**Description**

조회된 SMS 메시지가 저장된 SmsMessage 오브젝트를 배열형태로 갖는 속성입니다.

**Syntax**

```javascript
SmsMessageListEventInfo.smsmessages
```

**Remark**

- SmsMessage 오브젝트에 SMS 메시지 한건이 저장됩니다.
   smsmessages 속성에는 SmsMessage 오브젝트의 배열이 전달됩니다.

- SmsMessage 오브젝트의 하위속성 정보는 여기를 참고하세요.


---

## EventInfo Objects > SocketErrorEventInfo

### SocketErrorEventInfo

> EventInfo Objects > SocketErrorEventInfo

**Description**

TCPClientSocket 컴포넌트에서 요청된 작업이 실패했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| errormsg | 발생한 에러에 대한 에러메시지값을 갖는 읽기전용 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| statuscode | 발생한 에러에 대한 에러코드값을 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### errormsg

> EventInfo Objects > SocketErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러메시지값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
SocketErrorEventInfo.errormsg
```

**Setting Syntax**

- **`"1"`** — Interrupted function call
- **`"2"`** — Bad socket
- **`"3"`** — Permission denied
- **`"4"`** — Bad address
- **`"5"`** — Invalid argument
- **`"6"`** — Too many open files(sockets)
- **`"10"`** — Socket operation on non-socket
- **`"11"`** — Destination address required
- **`"12"`** — Message too long
- **`"19"`** — Address family not supported by protocol
- **`"21"`** — Cannot assign requested address
- **`"22"`** — Network is down
- **`"23"`** — Network is unreachable
- **`"24"`** — Network dropped connection because of reset
- **`"25"`** — Software caused connection abort
- **`"26"`** — Connection reset by peer
- **`"27"`** — No buffer space available
- **`"28"`** — Transport endpoint is already connected
- **`"29"`** — Transport endpoint is not connected
- **`"30"`** — Cannot send after transport endpoint shutdown
- **`"32"`** — Connection timed out
- **`"33"`** — Connection refused
- **`"36"`** — Host is down
- **`"37"`** — No route to host
- **`"99"`** — Generic Error

**Remark**

- 에러 메시지는 운영체제 레벨에서 제공되는 시스템 메시지를 사용합니다.
   따라서, 운영체제의 버전에 따라 에러 메시지가 달라질 수 있습니다.


---

### eventid

> EventInfo Objects > SocketErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
SocketErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### statuscode

> EventInfo Objects > SocketErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대한 에러코드값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
SocketErrorEventInfo.statuscode
```

**Setting Syntax**

- **`"1"`** — Interrupted function call
- **`"2"`** — Bad socket
- **`"3"`** — Permission denied
- **`"4"`** — Bad address
- **`"5"`** — Invalid argument
- **`"6"`** — Too many open files(sockets)
- **`"10"`** — Socket operation on non-socket
- **`"11"`** — Destination address required
- **`"12"`** — Message too long
- **`"19"`** — Address family not supported by protocol
- **`"21"`** — Cannot assign requested address
- **`"22"`** — Network is down
- **`"23"`** — Network is unreachable
- **`"24"`** — Network dropped connection because of reset
- **`"25"`** — Software caused connection abort
- **`"26"`** — Connection reset by peer
- **`"27"`** — No buffer space available
- **`"28"`** — Transport endpoint is already connected
- **`"29"`** — Transport endpoint is not connected
- **`"30"`** — Cannot send after transport endpoint shutdown
- **`"32"`** — Connection timed out
- **`"33"`** — Connection refused
- **`"36"`** — Host is down
- **`"37"`** — No route to host
- **`"99"`** — Generic Error


---

## EventInfo Objects > SocketEventInfo

### SocketEventInfo

> EventInfo Objects > SocketEventInfo

**Description**

TCPClientSocket 컴포넌트에서 요청된 작업이 성공했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| bytesremain | write() 메소드에 의해 송신되고 남은 데이터의 길이를 바이트 단위로 갖는 읽기전용 속성입니다. |
| bytessent | write() 메소드에 의해 송신된 데이터의 길이를 바이트 단위로 갖는 읽기전용 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| reason | 이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다. |
| reasonmsg | 이벤트가 발생한 원인을 넥사크로플랫폼 14 이벤트명으로 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### bytesremain

> EventInfo Objects > SocketEventInfo > Property > bytesremain

**Description**

write() 메소드에 의해 송신되고 남은 데이터의 길이를 바이트 단위로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
SocketEventInfo.bytesremain
```

**Remark**

- reason 속성값이 "3" 인 경우만 의미가 있는 속성입니다.

- TCPClientSocket 에서 대용량 데이터를 송신하는 경우 패킷을 송신 가능한 크기로 나누어 송신합니다.
   이 때, 송신 후 남은 데이터가 있는 경우 남은 데이터의 길이를 바이트 단위로 갖습니다.


---

### bytessent

> EventInfo Objects > SocketEventInfo > Property > bytessent

**Description**

write() 메소드에 의해 송신된 데이터의 길이를 바이트 단위로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
SocketEventInfo.bytessent
```

**Remark**

- reason 속성값이 "3" 인 경우만 의미가 있는 속성입니다.

- TCPClientSocket 에서 대용량 데이터를 송신하는 경우 패킷을 송신 가능한 크기로 나누어 송신합니다.
   이 때, 송신 후 남은 데이터가 있는 경우 남은 데이터의 정보는 bytesremain 속성으로 전달됩니다.


---

### eventid

> EventInfo Objects > SocketEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
SocketEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### reason

> EventInfo Objects > SocketEventInfo > Property > reason

**Description**

이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
SocketEventInfo.reason
```

**Setting Syntax**

- **`1`** — open() 메소드를 사용하여 서버와 연결된 경우 갖는 값입니다.
- **`2`** — close() 메소드를 사용하여 서버와 연결이 해제된 경우 갖는 값입니다.
- **`3`** — write() 메소드를 사용하여 연결된 서버로 데이터를 송신한 경우 갖는 값입니다.


---

### reasonmsg

> EventInfo Objects > SocketEventInfo > Property > reasonmsg

**Description**

이벤트가 발생한 원인을 넥사크로플랫폼 14 이벤트명으로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
SocketEventInfo.reasonmsg
```

**Setting Syntax**

- **`"on_connect"`** — open() 메소드를 사용하여 서버와 연결된 경우 갖는 값입니다.
- **`"on_close"`** — close() 메소드를 사용하여 서버와 연결이 해제된 경우 갖는 값입니다.
- **`"on_send"`** — write() 메소드를 사용하여 연결된 서버로 데이터를 송신한 경우 갖는 값입니다.

**Remark**

- 넥사크로플랫폼 14 와 비교를 위해 추가된 속성입니다.


---

## EventInfo Objects > SocketReceiveEventInfo

### SocketReceiveEventInfo

> EventInfo Objects > SocketReceiveEventInfo

**Description**

TCPClientSocket 컴포넌트에서 연결된 서버에 데이터가 있을 경우 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| bytesread | TCPClientSocket 에서 수신 가능한 데이터의 길이를 바이트 단위로 갖는 읽기전용 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### bytesread

> EventInfo Objects > SocketReceiveEventInfo > Property > bytesread

**Description**

TCPClientSocket 에서 수신 가능한 데이터의 길이를 바이트 단위로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
SocketReceiveEventInfo.bytesread
```


---

### eventid

> EventInfo Objects > SocketReceiveEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
SocketReceiveEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

## EventInfo Objects > SpinEventInfo

### SpinEventInfo

> EventInfo Objects > SpinEventInfo

**Description**

Spin 컴포넌트에서 스핀버튼으로 value 속성값이 변경되었을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- Spin 컴포넌트의 값을 직접 수정하여 발생하는 이벤트에는 전달되지 않습니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| posttext | 변경된 후 text 속성값을 갖는 속성입니다. |
| postvalue | 변경된 후 value 속성값을 갖는 속성입니다. |
| pretext | 변경되기 전 text 속성값을 갖는 속성입니다. |
| prevalue | 변경되기 전 value 속성값을 갖는 속성입니다. |
| up | 이벤트가 발생한 원인이 되는 스핀버튼 정보를 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > SpinEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
SpinEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### posttext

> EventInfo Objects > SpinEventInfo > Property > posttext

**Description**

변경된 후 text 속성값을 갖는 속성입니다.

**Syntax**

```javascript
SpinEventInfo.posttext
```

**Setting Syntax**

```javascript
var sPosttext = e.posttext;
```


---

### postvalue

> EventInfo Objects > SpinEventInfo > Property > postvalue

**Description**

변경된 후 value 속성값을 갖는 속성입니다.

**Syntax**

```javascript
SpinEventInfo.postvalue
```

**Setting Syntax**

```javascript
var nPostval = e.postvalue
```


---

### pretext

> EventInfo Objects > SpinEventInfo > Property > pretext

**Description**

변경되기 전 text 속성값을 갖는 속성입니다.

**Syntax**

```javascript
SpinEventInfo.pretext
```

**Setting Syntax**

```javascript
var sPretext = e.pretext;
```


---

### prevalue

> EventInfo Objects > SpinEventInfo > Property > prevalue

**Description**

변경되기 전 value 속성값을 갖는 속성입니다.

**Syntax**

```javascript
SpinEventInfo.prevalue
```

**Setting Syntax**

```javascript
var nPreval = e.prevalue;
```


---

### up

> EventInfo Objects > SpinEventInfo > Property > up

**Description**

이벤트가 발생한 원인이 되는 스핀버튼 정보를 갖는 속성입니다.

**Syntax**

```javascript
SpinEventInfo.up
```

**Setting Syntax**

- **`"true"`** — spinup 버튼 클릭에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"false"`** — spindown 버튼 클릭에 의해 이벤트가 발생했을 때 갖는 값입니다.


---

## EventInfo Objects > StepChangeEventInfo

### StepChangeEventInfo

> EventInfo Objects > StepChangeEventInfo

**Description**

Form 의 stepindex 속성값 변경 시 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- 화면이 분할된 Form 에서 분할된 화면간의 전환에 의해 발생한 이벤트에 전달되는 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| postindex | 새로 변경된 분할화면의 인덱스를 갖는 속성입니다. |
| preindex | 전환 되기 전 분할화면의 인덱스를 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > StepChangeEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
StepChangeEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > StepChangeEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
StepChangeEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > StepChangeEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
StepChangeEventInfo.fromreferenceobject
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

### postindex

> EventInfo Objects > StepChangeEventInfo > Property > postindex

**Description**

새로 변경된 분할화면의 인덱스를 갖는 속성입니다.

**Syntax**

```javascript
StepChangeEventInfo.postindex
```

**Setting Syntax**

```javascript
var nPostIdx = e.postindex
```


---

### preindex

> EventInfo Objects > StepChangeEventInfo > Property > preindex

**Description**

전환 되기 전 분할화면의 인덱스를 갖는 속성입니다.

**Syntax**

```javascript
StepChangeEventInfo.preindex
```

**Setting Syntax**

```javascript
var nPreIdx = e.preindex
```


---

## EventInfo Objects > SysCommandEventInfo

### SysCommandEventInfo

> EventInfo Objects > SysCommandEventInfo

**Description**

시스템 명령(Command)과 관련하여 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- Frame 의 최소/최대 버튼이 클릭되거나 시스템명령(Command) 에 의해 발생하는 이벤트에 시스템명령 정보가 전달됩니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| systemcommand | 이벤트를 발생시킨 시스템명령의 타입을 갖는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| stopPropagation | 현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > SysCommandEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
SysCommandEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > SysCommandEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
SysCommandEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > SysCommandEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
SysCommandEventInfo.fromreferenceobject
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

### systemcommand

> EventInfo Objects > SysCommandEventInfo > Property > systemcommand

**Description**

이벤트를 발생시킨 시스템명령의 타입을 갖는 속성입니다.

**Syntax**

```javascript
SysCommandEventInfo.systemcommand
```

**Remark**

- Frame 의 상태에 따라서 "minimize","maximize","restore" 값을 갖습니다.


---

### 메서드 (Methods)

### stopPropagation

> EventInfo Objects > SysCommandEventInfo > Method > stopPropagation

**Description**

현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다.

**Syntax**

```javascript
SysCommandEventInfo.stopPropagation()
```

**Return**

없음


---

## EventInfo Objects > TabIndexChangeEventInfo

### TabIndexChangeEventInfo

> EventInfo Objects > TabIndexChangeEventInfo

**Description**

Tab 컴포넌트의 tabindex 속성값 변경 시 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- Tab 컴포넌트에서 TabPage 선택이 변경되기 전, 후에 이벤트가 발생합니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| postindex | 새로 변경 된 TabPage 의 인덱스를 갖는 속성입니다. |
| preindex | 변경 되기 전 선택되어 있던 TabPage 의 인덱스를 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > TabIndexChangeEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
TabIndexChangeEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > TabIndexChangeEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
TabIndexChangeEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > TabIndexChangeEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
TabIndexChangeEventInfo.fromreferenceobject
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

### postindex

> EventInfo Objects > TabIndexChangeEventInfo > Property > postindex

**Description**

새로 변경 된 TabPage 의 인덱스를 갖는 속성입니다.

**Syntax**

```javascript
TabIndexChangeEventInfo.postindex
```

**Setting Syntax**

```javascript
var nPostIdx = e.postindex
```


---

### preindex

> EventInfo Objects > TabIndexChangeEventInfo > Property > preindex

**Description**

변경 되기 전 선택되어 있던 TabPage 의 인덱스를 갖는 속성입니다.

**Syntax**

```javascript
TabIndexChangeEventInfo.preindex
```

**Setting Syntax**

```javascript
var nPreIdx = e.preindex
```


---

## EventInfo Objects > TabMouseEventInfo

### TabMouseEventInfo

> EventInfo Objects > TabMouseEventInfo

**Description**

Tab 컴포넌트의 탭버튼에 표시된 Extra Button 을 클릭했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- Tab 컴포넌트의 showextrabutton 속성값이 "true" 일 때만 관련 이벤트가 발생합니다.

**Property**

| Name | Description |
| --- | --- |
| altkey | 이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다. |
| button | 이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다. |
| canvasx | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| canvasy | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| clientx | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| clienty | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| ctrlkey | 이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| index | Extra Button 이 클릭된 탭버튼의 인덱스 값을 갖는 속성입니다. |
| metakey | 이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다. |
| screenx | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| screeny | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| shiftkey | 이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다. |


---

### 속성 (Properties)

### altkey

> EventInfo Objects > TabMouseEventInfo > Property > altkey

**Description**

이벤트 발생 시 Alt 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
TabMouseEventInfo.altkey
```

**Setting Syntax**

```javascript
var bAlt = e.altkey;
```
- **`"true"`** — Alt 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Alt 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### button

> EventInfo Objects > TabMouseEventInfo > Property > button

**Description**

이벤트를 발생시킨 버튼 또는 터치에 대한 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
TabMouseEventInfo.button
```

**Setting Syntax**

```javascript
var strButton = e.button;
```
- **`"none"`** — 마우스 버튼에 의해 발생한 이벤트가 아닌 경우 갖는 값입니다.
- **`"lbutton"`** — 마우스의 왼쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"rbutton"`** — 마우스의 오른쪽 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"mbutton"`** — 마우스의 가운데 버튼(Wheel)에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton1"`** — 마우스의 첫번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"xbutton2"`** — 마우스의 두번째 확장 버튼에 의해 이벤트가 발생했을 때 갖는 값입니다.
- **`"touch"`** — 터치에 의해 이벤트가 발생했을 때 갖는 값입니다.


---

### canvasx

> EventInfo Objects > TabMouseEventInfo > Property > canvasx

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
TabMouseEventInfo.canvasx
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### canvasy

> EventInfo Objects > TabMouseEventInfo > Property > canvasy

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
TabMouseEventInfo.canvasy
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### clientx

> EventInfo Objects > TabMouseEventInfo > Property > clientx

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
TabMouseEventInfo.clientx
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### clienty

> EventInfo Objects > TabMouseEventInfo > Property > clienty

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
TabMouseEventInfo.clienty
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### ctrlkey

> EventInfo Objects > TabMouseEventInfo > Property > ctrlkey

**Description**

이벤트 발생시 Ctrl 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
TabMouseEventInfo.ctrlkey
```

**Setting Syntax**

```javascript
var bCtrl = e.ctrlkey;
```
- **`"true"`** — Ctrl 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Ctrl 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

### eventid

> EventInfo Objects > TabMouseEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
TabMouseEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > TabMouseEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
TabMouseEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > TabMouseEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
TabMouseEventInfo.fromreferenceobject
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

### index

> EventInfo Objects > TabMouseEventInfo > Property > index

**Description**

Extra Button 이 클릭된 탭버튼의 인덱스 값을 갖는 속성입니다.

**Syntax**

```javascript
TabMouseEventInfo.index
```

**Setting Syntax**

```javascript
var nIndex = e.index
```

**Remark**

- 클릭된 탭버튼에 해당하는 TabPage 의 인덱스값을 갖습니다.


---

### metakey

> EventInfo Objects > TabMouseEventInfo > Property > metakey

**Description**

이벤트 발생 시 command(또는 windows) 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
TabMouseEventInfo.metakey
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

### screenx

> EventInfo Objects > TabMouseEventInfo > Property > screenx

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
TabMouseEventInfo.screenx
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### screeny

> EventInfo Objects > TabMouseEventInfo > Property > screeny

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
TabMouseEventInfo.screeny
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 y 좌표를 계산합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다.
  때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.


---

### shiftkey

> EventInfo Objects > TabMouseEventInfo > Property > shiftkey

**Description**

이벤트 발생시 Shift 키가 눌렸는지 여부를 갖는 속성입니다.

**Syntax**

```javascript
TabMouseEventInfo.shiftkey
```

**Setting Syntax**

```javascript
var bshiftkey = e.shiftkey;
```
- **`"true"`** — Shift 키가 눌린 상태로 이벤트가 발생되었을 때 갖는 값입니다.
- **`"false"`** — Shift 키가 눌리지 않은 상태로 이벤트가 발생되었을 때 갖는 값입니다.


---

## EventInfo Objects > TimerEventInfo

### TimerEventInfo

> EventInfo Objects > TimerEventInfo

**Description**

Form 에서 타이머와 관련하여 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| timerid | 이벤트를 발생시킨 타이머의 ID 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > TimerEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
TimerEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > TimerEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
TimerEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > TimerEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
TimerEventInfo.fromreferenceobject
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

### timerid

> EventInfo Objects > TimerEventInfo > Property > timerid

**Description**

이벤트를 발생시킨 타이머의 ID 값을 갖는 속성입니다.

**Syntax**

```javascript
TimerEventInfo.timerid
```

**Remark**

- setTimer() 메소드 실행 시 설정한 ID 값을 갖습니다.


---

## EventInfo Objects > TouchEventInfo

### TouchEventInfo

> EventInfo Objects > TouchEventInfo

**Description**

터치입력에 의해 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Remark**

- 멀티터치를 지원하는 윈도우7 이상 또는 모바일 환경에서 이벤트가 발생합니다.

**Property**

| Name | Description |
| --- | --- |
| changedtouchinputinfos | 터치입력이 있는 상태에서 추가로 터치입력이 발생한 경우 추가로 입력된 터치정보를 갖는 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| touchinputinfos | 터치정보가 저장된 TouchInputInfo 오브젝트를 배열형태로 갖는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| preventDefault | 현재 이벤트의 Default Action 을 취소하는 메소드입니다. |
| stopPropagation | 현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다. |


---

### 속성 (Properties)

### changedtouchinputinfos

> EventInfo Objects > TouchEventInfo > Property > changedtouchinputinfos

**Description**

터치입력이 있는 상태에서 추가로 터치입력이 발생한 경우 추가로 입력된 터치정보를 갖는 속성입니다.

**Syntax**

```javascript
TouchEventInfo.changedtouchinputinfos
```

**Setting Syntax**

```javascript
var strID = e.changedtouchinputinfos[0].touchid
```

**Remark**

- 추가로 입력된 터치정보를 TouchInputInfo 오브젝트의 배열로 저장합니다.

- TouchInputInfo 오브젝트는 입력종류, 좌표,시간 등의 정보를 가지고 있습니다.


---

### fromobject

> EventInfo Objects > TouchEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
TouchEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > TouchEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
TouchEventInfo.fromreferenceobject
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

### touchinputinfos

> EventInfo Objects > TouchEventInfo > Property > touchinputinfos

**Description**

터치정보가 저장된 TouchInputInfo 오브젝트를 배열형태로 갖는 속성입니다.

**Syntax**

```javascript
TouchEventInfo.touchinputinfos
```

**Setting Syntax**

```javascript
var strID = e.touchinputinfos[0].touchid
```

**Remark**

- TouchInputInfo 오브젝트는 동시에 터치한 입력(손가락) 수 만큼 생성되며, 입력종류, 좌표,시간 등의 정보를 가지고 있습니다.


---

### 메서드 (Methods)

### preventDefault

> EventInfo Objects > TouchEventInfo > Method > preventDefault

**Description**

현재 이벤트의 Default Action 을 취소하는 메소드입니다.

**Syntax**

```javascript
TouchEventInfo.preventDefault()
```

**Return**

없음


---

### stopPropagation

> EventInfo Objects > TouchEventInfo > Method > stopPropagation

**Description**

현재 이벤트를 상위컴포넌트로 전파하지 않게 중지시키는 메소드입니다.

**Syntax**

```javascript
TouchEventInfo.stopPropagation()
```

**Return**

없음


---

## EventInfo Objects > TrayBalloonTipHideEventInfo

### TrayBalloonTipHideEventInfo

> EventInfo Objects > TrayBalloonTipHideEventInfo

**Description**

Tray에 표시된 풍선팁이 숨겨질 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| reason | 이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기 전용 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > TrayBalloonTipHideEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
TrayBalloonTipHideEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > TrayBalloonTipHideEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
TrayBalloonTipHideEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > TrayBalloonTipHideEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
TrayBalloonTipHideEventInfo.fromreferenceobject
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

### reason

> EventInfo Objects > TrayBalloonTipHideEventInfo > Property > reason

**Description**

이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기 전용 속성입니다.

**Syntax**

```javascript
TrayBalloonTipHideEventInfo.reason
```

**Setting Syntax**

- **`1`** — hideBalloonTip 메소드 실행 후 풍선팁이 숨겨졌을 때 갖는 값입니다.
- **`2`** — timeout에 의해 풍선팁이 숨겨졌을 때 갖는 값입니다.
풍선팁이 표시된 상태에서 showBalloonTip 메소드 실행 시 기존 풍선팁이 숨겨질 때 갖는 값입니다.


---

## EventInfo Objects > VibratorErrorEventInfo

### VibratorErrorEventInfo

> EventInfo Objects > VibratorErrorEventInfo

**Description**

모바일 기기의 Vibrator 에 에러가 있을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| errormsg | 발생한 에러에 대한 에러메시지를 갖는 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| statuscode | 발생한 에러에 대한 에러코드값을 갖는 속성입니다. |


---

### 속성 (Properties)

### errormsg

> EventInfo Objects > VibratorErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러메시지를 갖는 속성입니다.

**Syntax**

```javascript
VibratorErrorEventInfo.errormsg
```

**Setting Syntax**

- **`"00001"`** — Parameter Error
- **`"10001"`** — Unsupported Device Vibrator

**Remark**

00001  :Parameter error


---

### errortype

> EventInfo Objects > VibratorErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
VibratorErrorEventInfo.errortype
```

**Setting Syntax**

- **`"EvalError"`** — 현재 버전에서 발생하지 않지만 이전 버전과의 호환성을 유지하기 위해 정의
- **`"RangeError"`** — 숫자값이 허용된 범위를 넘어선 경우
- **`"ReferenceError"`** — 참조값이 유효하지 않은 경우
- **`"SyntaxError"`** — 파싱에 문제가 있을 경우
- **`"TypeError"`** — 피연산자의 자료형이 허용된 범위가 아닌 경우
- **`"URIError"`** — 전역 URI 처리 함수 중 하나가 해당 정의와 호환되지 않는 방식으로 사용된 경우
- **`"NativeError"`** — 모든 Native Error 인 경우
- **`"CommunicationError"`** — 통신시 발생한 에러인 경우
- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우


---

### eventid

> EventInfo Objects > VibratorErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
VibratorErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### statuscode

> EventInfo Objects > VibratorErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대한 에러코드값을 갖는 속성입니다.

**Syntax**

```javascript
VibratorErrorEventInfo.statuscode
```

**Setting Syntax**

- **`"00001"`** — Parameter Error
- **`"10001"`** — Unsupported Device Vibrator


---

## EventInfo Objects > VibratorEventInfo

### VibratorEventInfo

> EventInfo Objects > VibratorEventInfo

**Description**

모바일 기기의 Vibrator 가 동작하거나 중지될 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > VibratorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
VibratorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

## EventInfo Objects > VideoCurrentTimeChangedEventInfo

### VideoCurrentTimeChangedEventInfo

> EventInfo Objects > VideoCurrentTimeChangedEventInfo

**Description**

VideoPlayer 에서 파일이 재생되는 위치가 변경되었을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| currenttime | VideoPlayer 에서 변경된 재생위치를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |


---

### 속성 (Properties)

### currenttime

> EventInfo Objects > VideoCurrentTimeChangedEventInfo > Property > currenttime

**Description**

VideoPlayer 에서 변경된 재생위치를 갖는 속성입니다.

**Syntax**

```javascript
VideoCurrentTimeChangedEventInfo.currenttime
```

**Setting Syntax**

- **`currenttime`** — Nexacro Runtime Environment는 변경된 재생위치값을 갖습니다.

Web Runtime Environment는 이벤트가 발생한 시점의 재생위치값을 갖습니다.


---

### eventid

> EventInfo Objects > VideoCurrentTimeChangedEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
VideoCurrentTimeChangedEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > VideoCurrentTimeChangedEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
VideoCurrentTimeChangedEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > VideoCurrentTimeChangedEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
VideoCurrentTimeChangedEventInfo.fromreferenceobject
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

## EventInfo Objects > VideoErrorEventInfo

### VideoErrorEventInfo

> EventInfo Objects > VideoErrorEventInfo

**Description**

비디오 또는 오디오 파일을 처리하는 과정에서 오류가 생겼을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| errormsg | 발생한 에러에 대한 에러메시지를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| statuscode | 발생한 에러에 대한 에러코드값을 갖는 속성입니다. |


---

### 속성 (Properties)

### errormsg

> EventInfo Objects > VideoErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러메시지를 갖는 속성입니다.

**Syntax**

```javascript
VideoErrorEventInfo.errormsg
```

**Setting Syntax**

- **`"1"`** — fetching process aborted by user
- **`"2"`** — error occurred when downloading
- **`"3"`** — error occurred when decoding
- **`"4"`** — video not supported

**Remark**

◆ Android 기기 제약

- 동일 에러에 대해 Android 기기에 따라 다른 에러메시지가 반환될 수 있습니다.


---

### eventid

> EventInfo Objects > VideoErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
VideoErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > VideoErrorEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
VideoErrorEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > VideoErrorEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
VideoErrorEventInfo.fromreferenceobject
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

### statuscode

> EventInfo Objects > VideoErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대한 에러코드값을 갖는 속성입니다.

**Syntax**

```javascript
VideoErrorEventInfo.statuscode
```

**Setting Syntax**

- **`"1"`** — fetching process aborted by user
- **`"2"`** — error occurred when downloading
- **`"3"`** — error occurred when decoding
- **`"4"`** — video not supported

**Remark**

◆ Android 기기 제약

- 동일 에러에 대해 Android 기기에 따라 다른 에러코드값이 반환될 수 있습니다.


---

## EventInfo Objects > VideoPlayStateChangedEventInfo

### VideoPlayStateChangedEventInfo

> EventInfo Objects > VideoPlayStateChangedEventInfo

**Description**

VideoPlayer 컴포넌트의 상태가 변경되었을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fromobject | 이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다. |
| fromreferenceobject | 이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다. |
| newstate | VideoPlayer 에서 이벤트가 발생한 원인에 대한 정보를 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > VideoPlayStateChangedEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
VideoPlayStateChangedEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fromobject

> EventInfo Objects > VideoPlayStateChangedEventInfo > Property > fromobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트를 갖는 속성입니다.

**Syntax**

```javascript
VideoPlayStateChangedEventInfo.fromobject
```

**Setting Syntax**

```javascript
var objComp = e.fromobject;
```

**Remark**

- onlbuttondown 과 같이 상위로 전파되는 이벤트에서 fromobject 속성은 이벤트가 최초로 발생한 컴포넌트를 갖습니다.


---

### fromreferenceobject

> EventInfo Objects > VideoPlayStateChangedEventInfo > Property > fromreferenceobject

**Description**

이벤트 발생의 원인이 되는 컴포넌트 또는 서브컨트롤을 갖는 속성입니다.

**Syntax**

```javascript
VideoPlayStateChangedEventInfo.fromreferenceobject
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

### newstate

> EventInfo Objects > VideoPlayStateChangedEventInfo > Property > newstate

**Description**

VideoPlayer 에서 이벤트가 발생한 원인에 대한 정보를 갖는 속성입니다.

**Syntax**

```javascript
VideoPlayStateChangedEventInfo.newstate
```

**Setting Syntax**

- **`"0"`** — undefined : Windows Video Player is in an undefined state

지원환경 : Windows NRE
- **`"1"`** — stop : Playback of the current video item is stopped

지원환경 : NRE, Desktop WRE
- **`"2"`** — pause : Playback of the current video item is paused.
           When a Video item is paused, resuming playback begins from the same location.

지원환경 : Windows NRE, macOS NRE, Android NRE, Desktop WRE
- **`"3"`** — play : The current media video is playing.

지원환경 : Windows NRE, macOS NRE, Android NRE, Desktop WRE
- **`"4"`** — scanforward : The current video item is fast forwarding.

지원환경 : Windows NRE
- **`"5"`** — scanreverse : The current video item is fast rewinding.

지원환경 : Windows NRE
- **`"6"`** — buffer : The current video item is getting additional data from the server.

지원환경 : Windows NRE, macOS NRE, Android NRE, Desktop WRE
- **`"7"`** — wait : Connection is established, but the server is not sending data.
        Waiting for session to begin.

지원환경 : Windows NRE
- **`"8"`** — ended : Video item has completed playback.

지원환경 : Windows NRE, macOS NRE, Android NRE, Desktop WRE
- **`"9"`** — transition : Preparing new video item.

지원환경 : Windows NRE, macOS NRE, Desktop WRE
- **`"10"`** — ready : Ready to begin playing.

지원환경 : Windows NRE, macOS NRE, Android NRE

**Remark**

- 환경별로 제공하는 이벤트발생 원인코드가 다르므로 주의하여야 합니다.


---

## EventInfo Objects > VirtualFileErrorEventInfo

### VirtualFileErrorEventInfo

> EventInfo Objects > VirtualFileErrorEventInfo

**Description**

VirtualFile 컴포넌트에서 요청된 작업이 실패했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| errormsg | 발생한 에러에 대한 에러메시지를 갖는 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| statuscode | 발생한 에러에 대한 에러코드값를 갖는 속성입니다. |


---

### 속성 (Properties)

### errormsg

> EventInfo Objects > VirtualFileErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러메시지를 갖는 속성입니다.

**Syntax**

```javascript
VirtualFileErrorEventInfo.errormsg
```

**Setting Syntax**

- **`"0001"`** — Parameter Error
- **`"1101"`** — I/O Error
- **`"1102"`** — Permission Denied
- **`"1103"`** — Irregular Expression Error
- **`"1104"`** — Can not be removed
- **`"1105"`** — Does not exist
- **`"1106"`** — Exist File
- **`"1108"`** — Can not read big size File

**Remark**

◆ web runtime environment 제약

- web runtime environment 에서 VirtualFile 오브젝트를 단독으로 사용할 수 없습니다.
   FileUpload 의 filelist 속성, FileDialogEventInfo 의 virtualfiles 속성에서 제공되는 VirtualFile 만 사용할 수 있습니다.


---

### errortype

> EventInfo Objects > VirtualFileErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
VirtualFileErrorEventInfo.errortype
```

**Setting Syntax**

- **`"EvalError"`** — 현재 버전에서 발생하지 않지만 이전 버전과의 호환성을 유지하기 위해 정의
- **`"RangeError"`** — 숫자값이 허용된 범위를 넘어선 경우
- **`"ReferenceError"`** — 참조값이 유효하지 않은 경우
- **`"SyntaxError"`** — 파싱에 문제가 있을 경우
- **`"TypeError"`** — 피연산자의 자료형이 허용된 범위가 아닌 경우
- **`"URIError"`** — 전역 URI 처리 함수 중 하나가 해당 정의와 호환되지 않는 방식으로 사용된 경우
- **`"NativeError"`** — 모든 Native Error 인 경우
- **`"CommunicationError"`** — 통신시 발생한 에러인 경우
- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우


---

### eventid

> EventInfo Objects > VirtualFileErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
VirtualFileErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### statuscode

> EventInfo Objects > VirtualFileErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대한 에러코드값를 갖는 속성입니다.

**Syntax**

```javascript
VirtualFileErrorEventInfo.statuscode
```

**Setting Syntax**

- **`"0001"`** — Parameter Error
- **`"1101"`** — I/O Error
- **`"1102"`** — Permission Denied
- **`"1103"`** — Irregular Expression Error
- **`"1104"`** — Can not be removed
- **`"1105"`** — Does not exist
- **`"1106"`** — Exist File
- **`"1108"`** — Can not read big size File

**Remark**

◆ web runtime environment 제약

- web runtime environment 에서 VirtualFile 오브젝트를 단독으로 사용할 수 없습니다.
   FileUpload 의 filelist 속성, FileDialogEventInfo 의 virtualfiles 속성에서 제공되는 VirtualFile 만 사용할 수 있습니다.


---

## EventInfo Objects > VirtualFileEventInfo

### VirtualFileEventInfo

> EventInfo Objects > VirtualFileEventInfo

**Description**

VirtualFile 컴포넌트에서 요청된 작업이 성공했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| binarydata | openBinary 형식으로 Open 된 파일에서 읽어들인 Binary 데이터를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| fileattributelist | VirtualFile 로 Open 된 파일의 Attribute 를 객체형태로 갖는 속성입니다. |
| fileisexist | VirtualFile 에 지정된 파일의 존재 여부를 갖는 속성입니다. |
| filesize | VirtualFile 에 지정된 파일의 크기를 갖는 속성입니다. |
| reason | 이벤트가 발생한 원인의 코드값을 정수로 갖는 읽기전용 속성입니다. |
| textdata | openText 형식으로 Open 된 파일에서 읽어들인 데이터를 갖는 속성입니다. |


---

### 속성 (Properties)

### binarydata

> EventInfo Objects > VirtualFileEventInfo > Property > binarydata

**Description**

openBinary 형식으로 Open 된 파일에서 읽어들인 Binary 데이터를 갖는 속성입니다.

**Syntax**

```javascript
VirtualFileEventInfo.binarydata
```

**Remark**

- VirtualFileEventInfo 의 reason 값이 3 인 경우에 binarydata 속성에 저장된 데이터가 유효합니다.


---

### eventid

> EventInfo Objects > VirtualFileEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
VirtualFileEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### fileattributelist

> EventInfo Objects > VirtualFileEventInfo > Property > fileattributelist

**Description**

VirtualFile 로 Open 된 파일의 Attribute 를 객체형태로 갖는 속성입니다.

**Syntax**

```javascript
VirtualFileEventInfo.fileattributelist
```

**Remark**

- VirtualFileEventInfo 의 reason 값이 8 인 경우에 fileattributelist 속성에 저장된 데이터가 유효합니다.


---

### fileisexist

> EventInfo Objects > VirtualFileEventInfo > Property > fileisexist

**Description**

VirtualFile 에 지정된 파일의 존재 여부를 갖는 속성입니다.

**Syntax**

```javascript
VirtualFileEventInfo.fileisexist
```

**Remark**

- VirtualFileEventInfo 의 reason 값이 10 인 경우에 fileisexist 속성에 저장된 데이터가 유효합니다.


---

### filesize

> EventInfo Objects > VirtualFileEventInfo > Property > filesize

**Description**

VirtualFile 에 지정된 파일의 크기를 갖는 속성입니다.

**Syntax**

```javascript
VirtualFileEventInfo.filesize
```

**Remark**

- VirtualFileEventInfo 의 reason 값이 9 인 경우(getFileSize() 메소드 수행)만 filesize 속성에 저장된 데이터가 유효합니다.


◆ web runtime environment 제약

- web runtime environment 는 파일의 경로가 실제경로가 아닌 "FakePath" 형태의 가상경로로 지원됩니다.
   따라서, web runtime environment 는 지원되지 않는 속성입니다.


---

### reason

> EventInfo Objects > VirtualFileEventInfo > Property > reason

**Description**

이벤트가 발생한 원인의 코드값을 정수로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
VirtualFileEventInfo.reason
```

**Setting Syntax**

- **`1`** — open() 메소드가 수행되었을 때 갖는 값입니다.
- **`2`** — close() 메소드가 수행되었을 때 갖는 값입니다.
- **`3`** — read() 메소드가 수행되었을 때 갖는 값입니다.

VirtualFileEventInfo 오브젝트의 binarydata 또는 textdata 속성에 읽어들인 데이터가 저장됩니다.
- **`4`** — readLine() 메소드가 수행되었을 때 갖는 값입니다.

VirtualFileEventInfo 오브젝트의 textdata 속성에 읽어들인 데이터가 저장됩니다.
- **`5`** — seek() 메소드가 수행되었을 때 갖는 값입니다.
- **`6`** — write() 메소드가 수행되었을 때 갖는 값입니다.
- **`7`** — remove() 메소드가 수행되었을 때 갖는 값입니다.
- **`8`** — getFileList() 메소드가 수행되었을 때 갖는 값입니다.

VirtualFileEventInfo 오브젝트의 fileattributelist 속성에 읽어들인 데이터가 저장됩니다.
- **`9`** — getFileSize() 메소드가 수행되었을 때 갖는 값입니다.

VirtualFileEventInfo 오브젝트의 filesize 속성에 읽어들인 데이터가 저장됩니다.
- **`10`** — isExist() 메소드가 수행되었을 때 갖는 값입니다.

VirtualFileEventInfo 오브젝트의 fileisexist 속성에 읽어들인 데이터가 저장됩니다.
- **`11`** — createDirectory() 메소드가 수행되었을 때 갖는 값입니다.
- **`12`** — deleteDirectory() 메소드가 수행되었을 때 갖는 값입니다.
- **`13`** — renameDirectory() 메소드가 수행되었을 때 갖는 값입니다.
- **`14`** — copy() 메소드가 수행되었을 때 갖는 값입니다.
- **`15`** — rename() 메소드가 수행되었을 때 갖는 값입니다.

**Remark**

◆ web runtime environment 제약

- web runtime environment 에서 VirtualFile 오브젝트를 단독으로 사용할 수 없습니다.
   FileUpload 의 filelist 속성, FileDialogEventInfo 의 virtualfiles 속성에서 제공되는 VirtualFile 만 사용할 수 있습니다.


---

### textdata

> EventInfo Objects > VirtualFileEventInfo > Property > textdata

**Description**

openText 형식으로 Open 된 파일에서 읽어들인 데이터를 갖는 속성입니다.

**Syntax**

```javascript
VirtualFileEventInfo.textdata
```

**Remark**

- VirtualFileEventInfo 의 reason 값이 3 또는 4 인 경우에 textdata 속성에 저장된 데이터가 유효합니다.


---

## EventInfo Objects > WebLoadCompEventInfo

### WebLoadCompEventInfo

> EventInfo Objects > WebLoadCompEventInfo

**Description**

WebBrowser 컴포넌트 또는 WebView 컴포넌트에서 URL 로딩에 성공했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| url | 연결을 성공한 URL 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > WebLoadCompEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
WebLoadCompEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### url

> EventInfo Objects > WebLoadCompEventInfo > Property > url

**Description**

연결을 성공한 URL 값을 갖는 속성입니다.

**Syntax**

```javascript
WebLoadCompEventInfo.url
```

**Setting Syntax**

```javascript
var strUrl = e.url ;
```


---

## EventInfo Objects > WebUserNotifyEventInfo

### WebUserNotifyEventInfo

> EventInfo Objects > WebUserNotifyEventInfo

**Description**

WebBrowser 컴포넌트 또는 WebView 컴포넌트에 로드된 웹페이지에서 넥사크로 쪽으로 발생시킨 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| userdata | 웹페이지에서 넥사크로로 전달되는 사용자 데이터를 갖는 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > WebUserNotifyEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
WebUserNotifyEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### userdata

> EventInfo Objects > WebUserNotifyEventInfo > Property > userdata

**Description**

웹페이지에서 넥사크로로 전달되는 사용자 데이터를 갖는 속성입니다.

**Syntax**

```javascript
WebUserNotifyEventInfo.userdata
```


---

## EventInfo Objects > XAgentErrorEventInfo

### XAgentErrorEventInfo

> EventInfo Objects > XAgentErrorEventInfo

**Description**

connect, callMethod 메서드 실행 실패 시 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| data | 이벤트 정보 객체를 갖는 속성입니다. |
| errorcode | 에러 코드를 갖는 속성입니다. |
| errormsg | error 정보를 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### data

> EventInfo Objects > XAgentErrorEventInfo > Property > data

**Description**

이벤트 정보 객체를 갖는 속성입니다.


---

### errorcode

> EventInfo Objects > XAgentErrorEventInfo > Property > errorcode

**Description**

에러 코드를 갖는 속성입니다.

**Remark**

	
		service
		errorcode
		errormsg
	

	
		connect/disconnect
		-101
		서버연결에 실패하였습니다. 
	

	
		-102
		서버의 연결 해제를 실패하였습니다. 
	

	
		-103
		통신 오류가 발생하였습니다. 다시 접속하여 주세요.
	

	
		-104
		연결을 실패 하였습니다. 다시 설치해주세요.
	

	
		-105
		연결을 실패하였습니다.  잘못된 서비스 형식입니다.
	

	
		-106
		연결을 실패하였습니다. 소켓 연결을 먼저 수행해 주시기 바랍니다.
	

	
		-107
		연결이 종료되었습니다. 다시 접속하여 주세요.
	

	
		-108
		Xagent와 연결 중 지정 Port 연결이 실패하였습니다. 다른 포트로 접속 중입니다
	

	
		update-module 
		-201
		Module 업데이트에 실패하였습니다. 
	

	
		-202
		URL이 유효하지 않습니다. 
	

	
		-203
		업데이트 버전 비교를 실패하였습니다. 
	

	
		-204
		업데이트 파일 다운로드를 실패하였습니다. 
	

	
		-205
		디렉터리 삭제 실패하였습니다. 
	

	
		-206
		파일 압축 해제 실패해였습니다. 
	

	
		-207
		Temp 폴더 정리 실패 하였습니다. 
	

	
		update-modules 
		-301
		Modules 업데이트 실패 하였습니다. 
	

	
		-302
		알 수 없는 오류입니다. 
	

	
		-303
		modules.json 파일 찾을 수 없음
	

	
		-304
		모듈 다운로드 실패 하였습니다. 
	

	
		update-module-check
		-401
		업데이트 모듈 체크 실패 하였습니다. 
	

	
		-402
		알 수 없는 모듈 체크 오류입니다. 
	

	
		installed
		-501
		타사 앱 설치 여부 체크 실패 하였습니다. 
	

	
		-502
		알 수 없는 오류입니다. 
	

	
		-503
		인자값 오류(ResisteryKey)입니다. 
	

	
		-504
		인자값 오류(ResisteryPath)입니다. 
	

	
		status
		-601
		상태 체크 실패 하였습니다. 
	

	
		-602
		알 수 없는 오류입니다. 
	

	
		-603
		인자값 오류입니다 
	

	
		version
		-701
		버전 체크 실패 하였습니다. 
	

	
		-702
		알 수 없는 오류입니다. 
	

	
		-703
		인자값 오류입니다 
	

	
		-704
		서버 버전 정보 체크를 실패하였습니다.
	

	
		-705
		모듈 버전 정보 체크를 실패하였습니다.
	

	
		project
		-801
		프로젝트 정보 체크를 실패하였습니다.
	

	
		-802
		알 수 없는 오류입니다. 
	

	
		-803
		인자값 오류입니다 
	

	
		-804
		프로젝트 정보를 찾는데 실패하였습니다. 
	

	
		-805
		라이선스 정보를 찾는데 실패하였습니다. 
	

	
		-806
		라이선스 검증 실패하였습니다. 
	

	
		-807
		업데이트 URL 정보를 찾는데 실패하였습니다. 
	

	
		execute
		-1001
		모듈 실행을 실패하였습니다. 
	

	
		-1002
		알 수 없는 오류입니다. 
	

	
		-1003
		인자값 오류입니다 
	

	
		-1004
		모듈을 찾을 수 없습니다.
	

	
		-1005
		함수를 찾을 수 없습니다.
	

	
		-1006
		인자를 찾을 수 없습니다.
	

	
		-1007
		JSON 데이터 파싱 오류입니다.


---

### errormsg

> EventInfo Objects > XAgentErrorEventInfo > Property > errormsg

**Description**

error 정보를 갖는 속성입니다.

**Remark**

	
		service
		errorcode
		errormsg
	

	
		connect/disconnect
		-101
		서버연결에 실패하였습니다. 
	

	
		-102
		서버의 연결 해제를 실패하였습니다. 
	

	
		-103
		통신 오류가 발생하였습니다. 다시 접속하여 주세요.
	

	
		-104
		연결을 실패 하였습니다. 다시 설치해주세요.
	

	
		-105
		연결을 실패하였습니다.  잘못된 서비스 형식입니다.
	

	
		-106
		연결을 실패하였습니다. 소켓 연결을 먼저 수행해 주시기 바랍니다.
	

	
		-107
		연결이 종료되었습니다. 다시 접속하여 주세요.
	

	
		-108
		Xagent와 연결 중 지정 Port 연결이 실패하였습니다. 다른 포트로 접속 중입니다
	

	
		update-module 
		-201
		Module 업데이트에 실패하였습니다. 
	

	
		-202
		URL이 유효하지 않습니다. 
	

	
		-203
		업데이트 버전 비교를 실패하였습니다. 
	

	
		-204
		업데이트 파일 다운로드를 실패하였습니다. 
	

	
		-205
		디렉터리 삭제 실패하였습니다. 
	

	
		-206
		파일 압축 해제 실패해였습니다. 
	

	
		-207
		Temp 폴더 정리 실패 하였습니다. 
	

	
		update-modules 
		-301
		Modules 업데이트 실패 하였습니다. 
	

	
		-302
		알 수 없는 오류입니다. 
	

	
		-303
		modules.json 파일 찾을 수 없음
	

	
		-304
		모듈 다운로드 실패 하였습니다. 
	

	
		update-module-check
		-401
		업데이트 모듈 체크 실패 하였습니다. 
	

	
		-402
		알 수 없는 모듈 체크 오류입니다. 
	

	
		installed
		-501
		타사 앱 설치 여부 체크 실패 하였습니다. 
	

	
		-502
		알 수 없는 오류입니다. 
	

	
		-503
		인자값 오류(ResisteryKey)입니다. 
	

	
		-504
		인자값 오류(ResisteryPath)입니다. 
	

	
		status
		-601
		상태 체크 실패 하였습니다. 
	

	
		-602
		알 수 없는 오류입니다. 
	

	
		-603
		인자값 오류입니다 
	

	
		version
		-701
		버전 체크 실패 하였습니다. 
	

	
		-702
		알 수 없는 오류입니다. 
	

	
		-703
		인자값 오류입니다 
	

	
		-704
		서버 버전 정보 체크를 실패하였습니다.
	

	
		-705
		모듈 버전 정보 체크를 실패하였습니다.
	

	
		project
		-801
		프로젝트 정보 체크를 실패하였습니다.
	

	
		-802
		알 수 없는 오류입니다. 
	

	
		-803
		인자값 오류입니다 
	

	
		-804
		프로젝트 정보를 찾는데 실패하였습니다. 
	

	
		-805
		라이선스 정보를 찾는데 실패하였습니다. 
	

	
		-806
		라이선스 검증 실패하였습니다. 
	

	
		-807
		업데이트 URL 정보를 찾는데 실패하였습니다. 
	

	
		execute
		-1001
		모듈 실행을 실패하였습니다. 
	

	
		-1002
		알 수 없는 오류입니다. 
	

	
		-1003
		인자값 오류입니다 
	

	
		-1004
		모듈을 찾을 수 없습니다.
	

	
		-1005
		함수를 찾을 수 없습니다.
	

	
		-1006
		인자를 찾을 수 없습니다.
	

	
		-1007
		JSON 데이터 파싱 오류입니다.


---

### eventid

> EventInfo Objects > XAgentErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
XAgentErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

## EventInfo Objects > XAgentEventInfo

### XAgentEventInfo

> EventInfo Objects > XAgentEventInfo

**Description**

connect, disconnect 메서드 실행 성공 시 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| modulefunc | 수행된 서비스와 연관된 모듈 함수 이름을 갖는 읽기 전용 속성입니다. |
| modulename | 모듈 이름을 갖는 읽기 전용 속성입니다. |
| param | 파라미터 값을 갖는 읽기 전용 속성입니다. |
| reason | 메시지 구분값을 갖는 읽기 전용 속성입니다. |
| statusmessage | 상태 정보값을 갖는 읽기 전용 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > XAgentEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
XAgentEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### modulefunc

> EventInfo Objects > XAgentEventInfo > Property > modulefunc

**Description**

수행된 서비스와 연관된 모듈 함수 이름을 갖는 읽기 전용 속성입니다.


---

### modulename

> EventInfo Objects > XAgentEventInfo > Property > modulename

**Description**

모듈 이름을 갖는 읽기 전용 속성입니다.


---

### param

> EventInfo Objects > XAgentEventInfo > Property > param

**Description**

파라미터 값을 갖는 읽기 전용 속성입니다.


---

### reason

> EventInfo Objects > XAgentEventInfo > Property > reason

**Description**

메시지 구분값을 갖는 읽기 전용 속성입니다.


---

### statusmessage

> EventInfo Objects > XAgentEventInfo > Property > statusmessage

**Description**

상태 정보값을 갖는 읽기 전용 속성입니다.


---

## EventInfo Objects > XPushErrorEventInfo

### XPushErrorEventInfo

> EventInfo Objects > XPushErrorEventInfo

**Description**

클라이언트에서 Push 서버로 한 요청이 실패했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| action | 이벤트가 발생한 원인의 코드값을 갖는 속성입니다. |
| errormsg | 발생한 에러에 대한 에러메시지 정보를 갖는 속성입니다. |
| errortype | 발생한 에러에 대한 에러유형을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| message | 수행이 요청된 PushMessage 오브젝트를 갖는 속성입니다. |
| serverip | 요청을 수행한 Push 서버의 IP 를 갖는 속성입니다. |
| serverport | 요청을 수행한 Push 서버의 Port 값을 갖는 속성입니다. |
| statuscode | 발생한 에러에 대한 에러코드값를 갖는 속성입니다. |


---

### 속성 (Properties)

### action

> EventInfo Objects > XPushErrorEventInfo > Property > action

**Description**

이벤트가 발생한 원인의 코드값을 갖는 속성입니다.

**Syntax**

```javascript
XPushErrorEventInfo.action
```

**Setting Syntax**

```javascript
var nCode = e.action ;
```
- **`"0"`** — connect() 메소드로 Push 서버 연결에 실패했을 때 갖는 값입니다.

nexacro.XPushAction.AUTH 상수값으로 처리됩니다.
- **`"1"`** — disconnect() 메소드로 Push 서버의 연결해제에 실패했을 때 갖는 값입니다.

nexacro.XPushAction.BYEC 상수값으로 처리됩니다.
- **`"2"`** — subscribe() 메소드로 Topic 추가에 실패했을 때 갖는 값입니다.

nexacro.XPushAction.ADDF 상수값으로 처리됩니다.
- **`"3"`** — unsubscribe() 메소드로 Topic 제거에 실패했을 때 갖는 값입니다.

nexacro.XPushAction.DELF 상수값으로 처리됩니다.
- **`"4"`** — requestMessage() 메소드로 미수신 신뢰성 메시지 요청에 실패했을 때 갖는 값입니다.

nexacro.XPushAction.REQD 상수값으로 처리됩니다.
- **`"5"`** — sendResponse() 메소드로 미수신 신뢰성 메시지 수신응답에 실패했을 때 갖는 값입니다.

nexacro.XPushAction.RECT 상수값으로 처리됩니다.
- **`"6"`** — registerDevice() 메소드로 Push 서버에 Device Token 등록에 실패했을 때 갖는 값입니다.

nexacro.XPushAction.RGST 상수값으로 처리됩니다.
- **`"7"`** — unregisterDevice() 메소드로 Push 서버에 등록된 Device Token 해제에 실패했을 때 갖는 값입니다.

nexacro.XPushAction.UNRG 상수값으로 처리됩니다.
- **`"8"`** — registerTopic() 메소드로 신뢰성 메시지 Topic 등록에 실패했을 때 갖는 값입니다.

nexacro.XPushAction.ADUI 상수값으로 처리됩니다.
- **`"9"`** — unregisterTopic() 메소드로 등록된 신뢰성 메시지 Topic 해제에 실패했을 때 갖는 값입니다.

nexacro.XPushAction.UNUI 상수값으로 처리됩니다.
- **`"10"`** — requestMessageCount() 메소드로 미수신된 신뢰성 메시지 갯수요청에 실패했을 때 갖는 값입니다.

nexacro.XPushAction.MSGC 상수값으로 처리됩니다.
- **`"11"`** — getRegisteredTopics, getRegisteredTopicsWithUserID 메소드로 Topic 정보 조회가 실패한 경우 갖는 값입니다.
nexacro.XPushAction.RTID 상수값으로 처리됩니다.

**Example**



---

### errormsg

> EventInfo Objects > XPushErrorEventInfo > Property > errormsg

**Description**

발생한 에러에 대한 에러메시지 정보를 갖는 속성입니다.

**Syntax**

```javascript
XPushErrorEventInfo.errormsg
```

**Setting Syntax**

- **`-100`** — XPush 서버가 “Byec”를 보냈거나 서버와의 규약에 따라 종료되어야 할 때 발생합니다.
- **`-200`** — Command Auth Error

현재 선택된 IP에 대한 인증 에러
- **`-201`** — All Command Auth Error

iplist 속성에 등록된 XPush 서버에 인증 실패했을 때 반환합니다.
- **`-202`** — Data Auth Error

Data 전송채널 인증(Authentication)에 오류가 발생하면 반환합니다.
- **`etc.`** — XPush 서버에서 Client로 알리는 메세지


---

### errortype

> EventInfo Objects > XPushErrorEventInfo > Property > errortype

**Description**

발생한 에러에 대한 에러유형을 갖는 속성입니다.

**Syntax**

```javascript
XPushErrorEventInfo.errortype
```

**Setting Syntax**

- **`"EvalError"`** — 현재 버전에서 발생하지 않지만 이전 버전과의 호환성을 유지하기 위해 정의
- **`"RangeError"`** — 숫자값이 허용된 범위를 넘어선 경우
- **`"ReferenceError"`** — 참조값이 유효하지 않은 경우
- **`"SyntaxError"`** — 파싱에 문제가 있을 경우
- **`"TypeError"`** — 피연산자의 자료형이 허용된 범위가 아닌 경우
- **`"URIError"`** — 전역 URI 처리 함수 중 하나가 해당 정의와 호환되지 않는 방식으로 사용된 경우
- **`"NativeError"`** — 모든 Native Error 인 경우
- **`"CommunicationError"`** — 통신시 발생한 에러인 경우
- **`"ObjectError"`** — 개별 오브젝트에서 사용하는 에러인 경우


---

### eventid

> EventInfo Objects > XPushErrorEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
XPushErrorEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### message

> EventInfo Objects > XPushErrorEventInfo > Property > message

**Description**

수행이 요청된 PushMessage 오브젝트를 갖는 속성입니다.

**Syntax**

```javascript
XPushErrorEventInfo.message
```

**Setting Syntax**

- **`messagetype`** — 메시지 레이아웃에 정의된 받을 메시지의 타입값을 갖습니다.
- **`messagekey`** — 받을 메시지의 키값을 갖습니다.
- **`messageid`** — 받을 메시지 아이디값을 갖습니다.

**Example**



---

### serverip

> EventInfo Objects > XPushErrorEventInfo > Property > serverip

**Description**

요청을 수행한 Push 서버의 IP 를 갖는 속성입니다.

**Syntax**

```javascript
XPushErrorEventInfo.serverip
```


---

### serverport

> EventInfo Objects > XPushErrorEventInfo > Property > serverport

**Description**

요청을 수행한 Push 서버의 Port 값을 갖는 속성입니다.

**Syntax**

```javascript
XPushErrorEventInfo.serverport
```


---

### statuscode

> EventInfo Objects > XPushErrorEventInfo > Property > statuscode

**Description**

발생한 에러에 대한 에러코드값를 갖는 속성입니다.

**Syntax**

```javascript
XPushErrorEventInfo.statuscode
```

**Setting Syntax**

- **`-100`** — Push 서버가 “Byec”를 보냈거나 서버와의 규약에 따라 종료되었습니다.
- **`-101`** — 타임아웃 처리되었습니다.
- **`-200`** — Command Auth Error. 현재 선택된 IP에 대해인증에 오류가 발생하였습니다.
- **`-201`** — iplist 속성에 등록되어 있는 Push 서버로의 접속이 모두 실패했습니다.
- **`-202`** — 데이터 전송 채널 인증(authentication)에 오류가 발생하였습니다.
- **`-300`** — 서버로의 접속에 실패했습니다.
- **`-301`** — 패킷 전송(send/recv) 오류가 발생하였습니다.
- **`-401`** — X-PUSH 서버와 접속해제(disconnect) 요청을 실패했습니다.
- **`-501`** — X-PUSH 서버로부터 메시지 수신중단(suspend) 요청을 실패했습니다.
- **`-601`** — X-PUSH 서버로부터 메시지 수신 재시작(resume) 요청을 실패했습니다.
- **`-701`** — X-PUSH 서버로 topic 등록/등록해제 요청을 실패했습니다.
- **`-801`** — 메시지 포맷 버전 정보가 일치하지 않습니다.
- **`-901`** — 신뢰성 메시지에 대한 수신응답 전송에 실패했습니다.
- **`-902`** — 미수신 메시지 요청을 실패했습니다.
- **`-1001`** — X-PUSH 서버로 모바일 DeviceToken 정보 등록요청을 실패했습니다.
- **`-1002`** — X-PUSH 서버로 유저 topic 정보 등록요청(reqisterUser)이 실패했습니다.
- **`-1003`** — X-PUSH 서버로 유저 topic 정보 등록해제(unregisterUser)요청이 실패했습니다.
- **`-1004`** — 미수신 메시지 정보요청을 실패했습니다.
- **`-1005`** — Topic 정보 요청을 실패했습니다.
- **`-1072`** — 디바이스 등록(RGST)시 중복된 경우 발생합니다.
- **`-1092`** — 메시지 토픽 등록(ADUI)시 중복된 경우 발생합니다.


---

## EventInfo Objects > XPushEventInfo

### XPushEventInfo

> EventInfo Objects > XPushEventInfo

**Description**

클라이언트에서 Push 서버로 한 요청이 성공했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| action | 이벤트가 발생한 원인의 코드값을 갖는 속성입니다. |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| layout | connect 메소드로 Push 서버 연결에 성공했을 때 layouturl 속성값으로 설정한 XML 정보를 배열 형태의 값으로 갖는 속성입니다. |
| message | 수행이 요청된 PushMessage 오브젝트를 갖는 속성입니다. |
| returnvalue | 요청된 수행 결과를 제공하는 속성입니다. |
| serverip | 요청을 수행한 Push 서버의 IP 를 갖는 속성입니다. |
| serverport | 요청을 수행한 Push 서버의 Port 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### action

> EventInfo Objects > XPushEventInfo > Property > action

**Description**

이벤트가 발생한 원인의 코드값을 갖는 속성입니다.

**Syntax**

```javascript
XPushEventInfo.action
```

**Setting Syntax**

```javascript
var nCode = e.action ;
```
- **`"0"`** — connect() 메소드로 Push 서버 연결에 성공했을 때 갖는 값입니다.

nexacro.XPushAction.AUTH 상수값으로 처리됩니다.
- **`"1"`** — disconnect() 메소드로 Push 서버의 연결해제에 성공했을 때 갖는 값입니다.

nexacro.XPushAction.BYEC 상수값으로 처리됩니다.
- **`"2"`** — subscribe() 메소드로 Topic 추가에 성공했을 때 갖는 값입니다.

nexacro.XPushAction.ADDF 상수값으로 처리됩니다.
- **`"3"`** — unsubscribe() 메소드로 Topic 제거에 성공했을 때 갖는 값입니다.

nexacro.XPushAction.DELF 상수값으로 처리됩니다.
- **`"4"`** — requestMessage() 메소드로 미수신 신뢰성 메시지 요청에 성공했을 때 갖는 값입니다.

nexacro.XPushAction.REQD 상수값으로 처리됩니다.
- **`"5"`** — sendResponse() 메소드로 미수신 신뢰성 메시지 수신응답에 성공했을 때 갖는 값입니다.

nexacro.XPushAction.RECT 상수값으로 처리됩니다.
- **`"6"`** — registerDevice() 메소드로 Push 서버에 Device Token 등록에 성공했을 때 갖는 값입니다.

nexacro.XPushAction.RGST 상수값으로 처리됩니다.
- **`"7"`** — unregisterDevice() 메소드로 Push 서버에 등록된 Device Token 해제에 성공했을 때 갖는 값입니다.

nexacro.XPushAction.UNRG 상수값으로 처리됩니다.
- **`"8"`** — registerTopic() 메소드로 신뢰성 메시지 Topic 등록에 성공했을 때 갖는 값입니다.

nexacro.XPushAction.ADUI 상수값으로 처리됩니다.
- **`"9"`** — unregisterTopic() 메소드로 등록된 신뢰성 메시지 Topic 해제에 성공했을 때 갖는 값입니다.

nexacro.XPushAction.UNUI 상수값으로 처리됩니다.
- **`"10"`** — requestMessageCount() 메소드로 미수신된 신뢰성 메시지 갯수요청에 성공했을 때 갖는 값입니다.

nexacro.XPushAction.MSGC 상수값으로 처리됩니다.
- **`"11"`** — getRegisteredTopics, getRegisteredTopicsWithUserID 메소드로 Topic 정보 조회가 성공한 경우 갖는 값입니다.
nexacro.XPushAction.RTID 상수값으로 처리됩니다.

**Example**



---

### eventid

> EventInfo Objects > XPushEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
XPushEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### layout

> EventInfo Objects > XPushEventInfo > Property > layout

**Description**

connect 메소드로 Push 서버 연결에 성공했을 때 layouturl 속성값으로 설정한 XML 정보를 배열 형태의 값으로 갖는 속성입니다.

**Syntax**

```javascript
XPushEventInfo.layout
```

**Remark**

- 이벤트 발생 시 action 속성값이 "0"(connect 메소드로 Push 서버 연결 성공)인 경우에만 값을 가집니다.
  그 외의 경우에는 undefined로 처리됩니다.

- layouturl 속성값으로 설정한 XML의 message 요소를 배열의 요소로 처리합니다.
  예를 들면 다음과 같이 처리됩니다.

  layouturl 속성값으로 설정한 XML 정보

  <message_layout>           
    <message type="NOTI">         
      <field id="TOPIC_ID" type="string" size="9" key="true"/>       
      <field id="DATA_01" type="string" size="255"/>      
      <field id="DATA_02" type="string" size="255"/>      
    </message>         
    <message type="TEST">         
      <field id="TOPIC_ID" type="string" size="9" />       
      <field id="MESSAGE_TYPE" type="string" size="9" />       
      <field id="MESSAGE" type="string" size="255"/>       
      <field id="SEND_USER_ID" type="string" size="255"/>      
      <field id="SEND_DATE" type="string" size="255"/>      
      <field id="RECV_USER_ID" type="string" size="255"/>      
    </message>         
  </message_layout>

  connnect 시 확인할 수 있는 배열 형태의 layout 속성값
   - id: message 요소의 type 속성값
   - listfield: field 요소를 순서대로 listfield 배열 요소로 처리
 
  [0]
    id: "NOTI"
    listfield: Array(3)
      0: {id: 'TOPIC_ID', type: 'string', size: 9, key: true, check: false}
      1: {id: 'DATA_01', type: 'string', size: 255, key: false, check: false}
      2: {id: 'DATA_02', type: 'string', size: 255, key: false, check: false}
  [1]
    id: "TEST"
    listfield: (6) [{…}, {…}, {…}, {…}, {…}, {…}]


---

### message

> EventInfo Objects > XPushEventInfo > Property > message

**Description**

수행이 요청된 PushMessage 오브젝트를 갖는 속성입니다.

**Syntax**

```javascript
XPushEventInfo.message
```

**Setting Syntax**

- **`messagetype`** — 메시지 레이아웃에 정의된 받을 메시지의 타입값을 갖습니다.
- **`messagekey`** — 받을 메시지의 키값을 갖습니다.
- **`messageid`** — 받을 메시지 아이디값을 갖습니다.
- **`returnvalue`** — 미수신 메시지정보가 저장된 배열을 갖습니다.

**Example**



---

### returnvalue

> EventInfo Objects > XPushEventInfo > Property > returnvalue

**Description**

요청된 수행 결과를 제공하는 속성입니다.

**Syntax**

```javascript
XPushEventInfo.returnvalue
```


---

### serverip

> EventInfo Objects > XPushEventInfo > Property > serverip

**Description**

요청을 수행한 Push 서버의 IP 를 갖는 속성입니다.

**Syntax**

```javascript
XPushEventInfo.serverip
```


---

### serverport

> EventInfo Objects > XPushEventInfo > Property > serverport

**Description**

요청을 수행한 Push 서버의 Port 값을 갖는 속성입니다.

**Syntax**

```javascript
XPushEventInfo.serverport
```


---

## EventInfo Objects > XPushKeepAliveEventInfo

### XPushKeepAliveEventInfo

> EventInfo Objects > XPushKeepAliveEventInfo

**Description**

XPush 서버와 클라이언트가 통신상태를 유지하기 위해 메시지를 주고 받을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| type | 이벤트가 발생한 원인의 코드값을 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### eventid

> EventInfo Objects > XPushKeepAliveEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
XPushKeepAliveEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### type

> EventInfo Objects > XPushKeepAliveEventInfo > Property > type

**Description**

이벤트가 발생한 원인의 코드값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
XPushKeepAliveEventInfo.type
```

**Setting Syntax**

```javascript
var nType = e.type ;
```
- **`"0"`** — Push 서버에 Topic 등록을 성공했을 때 갖는 값입니다.
- **`"1"`** — Push 서버로부터 KeepAlive 메시지를 받았을 때 갖는 값입니다.
- **`"2"`** — 클라이언트가 전송한 KeepAlive 메시지에 대한 Push 서버의 응답 메시지를 받았을 때 갖는 값입니다.

**Remark**

- KeppAlive 메시지 뿐만 아니라 Push 메시지를 받았을때도 이벤트가 발생합니다.


---

## EventInfo Objects > SmsMessageListEventInfo > SmsMessage

### SmsMessage

> EventInfo Objects > SmsMessageListEventInfo > SmsMessage

**Description**

SmsMessageListEventInfo 오브젝트의 smsmessages 속성에 배열형태로 저장되는 오브젝트입니다.

**Remark**

- SMS 메시지 한건의 정보를 갖는 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| date | SMS 가 발신 또는 수신된 시간정보를 갖는 속성입니다. |
| message | SMS 의 메시지 내용을 갖는 속성입니다. |
| phonenumber | SMS 가 발신 또는 수신된 전화번호를 갖는 속성입니다. |
| smsid | SMS 를 구분하는 ID 값을 갖는 속성입니다. |
| type | SMS 의 수신/발신 여부를 갖는 속성입니다. |


---

### 속성 (Properties)

### date

> EventInfo Objects > SmsMessageListEventInfo > SmsMessage > Property > date

**Description**

SMS 가 발신 또는 수신된 시간정보를 갖는 속성입니다.

**Syntax**

```javascript
SmsMessage.date
```

**Remark**

- 데이터가 Date 오브젝트 형태로 저장되며 "2011-09-09 06:50:06" 형태로 읽어올 수 있습니다.


---

### message

> EventInfo Objects > SmsMessageListEventInfo > SmsMessage > Property > message

**Description**

SMS 의 메시지 내용을 갖는 속성입니다.

**Syntax**

```javascript
SmsMessage.message
```

**Remark**




---

### phonenumber

> EventInfo Objects > SmsMessageListEventInfo > SmsMessage > Property > phonenumber

**Description**

SMS 가 발신 또는 수신된 전화번호를 갖는 속성입니다.

**Syntax**

```javascript
SmsMessage.phonenumber
```

**Setting Syntax**

```javascript
예) “01074749899”
```


---

### smsid

> EventInfo Objects > SmsMessageListEventInfo > SmsMessage > Property > smsid

**Description**

SMS 를 구분하는 ID 값을 갖는 속성입니다.

**Syntax**

```javascript
SmsMessage.smsid
```

**Remark**

- 발신 또는 수신된 SMS 메시지의 고유값으로 2자리 숫자입니다.


---

### type

> EventInfo Objects > SmsMessageListEventInfo > SmsMessage > Property > type

**Description**

SMS 의 수신/발신 여부를 갖는 속성입니다.

**Syntax**

```javascript
SmsMessage.type
```

**Setting Syntax**

- **`"send"`** — 발신된 SMS 일 경우 갖는 값입니다.
- **`"receive"`** — 수신된 SMS 일 경우 갖는 값입니다.

**Remark**




---

## EventInfo Objects > TouchEventInfo > TouchInputInfo

### TouchInputInfo

> EventInfo Objects > TouchEventInfo > TouchInputInfo

**Description**

TouchEventInfo 오브젝트의 touchinputinfos 또는 changetouchinputinfos 속성에 저장되는 터치입력 정보를 갖는 오브젝트입니다.

**Remark**

- 멀티터치를 지원하는 윈도우7 이상 또는 모바일 환경에서 이벤트가 발생합니다.

- TouchEventInfo 오브젝트의 touchinputinfos 속성에 동시에 입력된 터치 수만큼의 TouchInputInfo 오브젝트가 배열형태로 저장됩니다.

**Property**

| Name | Description |
| --- | --- |
| canvasx | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| canvasy | 이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| clientx | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| clienty | 이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| isfirst | 멀티터치 되었을 때 현재 좌표정보가 첫번째 입력인지 여부를 갖는 속성입니다. |
| screenx | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다. |
| screeny | 이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다. |
| time | 이벤트가 발생한 시간을 갖는 속성입니다. |
| touchid | 멀티터치 되었을 때 각 좌표정보를 구분하기 위한 고유 ID 값을 갖는 속성입니다. |
| type | 터치의 입력상태를 구분하는 값을 갖는 속성입니다. |


---

### 속성 (Properties)

### canvasx

> EventInfo Objects > TouchEventInfo > TouchInputInfo > Property > canvasx

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
TouchInputInfo.canvasx
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### canvasy

> EventInfo Objects > TouchEventInfo > TouchInputInfo > Property > canvasy

**Description**

이벤트 발생 시 컴포넌트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
TouchInputInfo.canvasy
```

**Remark**

- 마우스 또는 터치 위치의 컴포넌트 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### clientx

> EventInfo Objects > TouchEventInfo > TouchInputInfo > Property > clientx

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
TouchInputInfo.clientx
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### clienty

> EventInfo Objects > TouchEventInfo > TouchInputInfo > Property > clienty

**Description**

이벤트 발생 시 컴포넌트의 클라이언트 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
TouchInputInfo.clienty
```

**Remark**

- Border, Padding, ScrollBar, StatusBar 등이 표시되는 부분을 제외한 영역이 컴포넌트의 클라이언트 영역입니다.

- 마우스 또는 터치 위치의 컴포넌트 클라이언트영역 좌측 상단을 기준으로 y 좌표를 계산합니다.


---

### isfirst

> EventInfo Objects > TouchEventInfo > TouchInputInfo > Property > isfirst

**Description**

멀티터치 되었을 때 현재 좌표정보가 첫번째 입력인지 여부를 갖는 속성입니다.

**Setting Syntax**

```javascript
var vFirst = e.touchinputinfos[0].isfirst ;
```
- **`"true"`** — 현재 좌표정보가 첫번째 입력일 때 갖는 값입니다.
- **`"false"`** — 현재 좌표정보가 첫번째 입력이 아닐 때 갖는 값입니다.


---

### screenx

> EventInfo Objects > TouchEventInfo > TouchInputInfo > Property > screenx

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 x 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
TouchInputInfo.screenx
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 x 좌표를 계산합니다.


---

### screeny

> EventInfo Objects > TouchEventInfo > TouchInputInfo > Property > screeny

**Description**

이벤트 발생 시 모니터 영역을 기준으로 마우스 또는 터치 위치의 y 좌표값을 갖는 속성입니다.

**Syntax**

```javascript
TouchInputInfo.screeny
```

**Remark**

- 마우스 또는 터치 위치의 모니터 좌측 상단을 기준으로 y 좌표를 계산합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다.
  때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.


---

### time

> EventInfo Objects > TouchEventInfo > TouchInputInfo > Property > time

**Description**

이벤트가 발생한 시간을 갖는 속성입니다.

**Remark**

- time 속성값은 기기에서 받은 값을 OS 가 넥사크로로 전달해 줍니다.
  따라서 기기에 의해 현재시각과 전혀 다른 값이 나올 수 있습니다.


---

### touchid

> EventInfo Objects > TouchEventInfo > TouchInputInfo > Property > touchid

**Description**

멀티터치 되었을 때 각 좌표정보를 구분하기 위한 고유 ID 값을 갖는 속성입니다.

**Remark**

- touchid 속성은 OS 가 부여하는 숫자값을 갖습니다.
   0 이상의 값을 갖지만 반드시 0 부터 시작하지는 않습니다.

- 여러 입력이 동시에 발생했을 때, 각각의 입력이 종료(터치를 뗄 때)될 때 까지 해당 ID 값이 유지됩니다.


---

### type

> EventInfo Objects > TouchEventInfo > TouchInputInfo > Property > type

**Description**

터치의 입력상태를 구분하는 값을 갖는 속성입니다.

**Setting Syntax**

- **`"0"`** — 터치가 시작(Touch Down) 되었을 때 갖는 값입니다.
- **`"1"`** — 터치 후 이동중(Touch Move) 일 때 갖는 값입니다.
- **`"2"`** — 터치가 종료(Touch Up) 되었을 때 갖는 값입니다.

**Remark**

- Windows 는 기본적으로 Touch Down 후 이동하지 않고 누르고 있으면, 이를 마우스 오른쪽 버튼 입력으로 변환하여 입력해주는 기능을 지원합니다.
  이 기능이 켜져 있으면 Touch Down 을 수행한 즉시 ontouch 이벤트가 발생하지 않을 수 있으며, Windows에서 입력이 일반터치인지,
  마우스 오른쪽 버튼 입력인지 판단하는 동안 (Windows7에서 터치 지점 주변으로 동그라미가 그려짐) Touch Up 이 되면,
  Touch Down -> Touch Move -> Touch Up 이 한꺼번에 발생할 수 있습니다.


---
