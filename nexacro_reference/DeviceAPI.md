# nexacroN V24 — DeviceAPI

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 272개

---

## DeviceAPI

### DeviceAPI

> DeviceAPI

**Description**

무선 단말기기에 특화된 기능을 지원하기 위한 오브젝트입니다.

**Remark**

- 전화걸기, SMS, Audio 와 같이 무선 단말기기에 특화된 기능을 넥사크로 스튜디오에서 Invisible 오브젝트 형태로 제공됩니다.


---

## DeviceAPI > Acceleration

### Acceleration

> DeviceAPI > Acceleration

**Description**

모바일 기기의 가속도 정보를 제공합니다.

**Property**

| Name | Description |
| --- | --- |
| accuracy | 모바일 기기에서 수신한 가속도 정보의 정확도를 갖는 읽기전용 속성입니다. |
| id | Acceleration의 고유 식별자를 설정하는 속성입니다. |
| name | Acceleration 의 이름을 설정하는 속성입니다. |
| parent | Acceleration 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| timestamp | 모바일 기기에서 가속도 정보를 수신한 시간을 갖는 읽기전용 속성입니다. |
| xpos | 모바일 기기에서 수신한 가속도 정보 중 x 축의 값을 갖는 읽기전용 속성입니다. |
| ypos | 모바일 기기에서 수신한 가속도 정보 중 y 축의 값을 갖는 읽기전용 속성입니다. |
| zpos | 모바일 기기에서 수신한 가속도 정보 중 z 축의 값을 갖는 읽기전용 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| getCurrentAcceleration | 모바일 기기의 가속도 정보를 반환하는 메소드입니다. |
| watchStart | 모바일 기기의 가속도 정보를 일정 간격으로 수신하도록 설정하는 메소드입니다. |
| watchStop | watchStart() 메소드로 설정한 주기적인 가속도 정보 수신을 종료하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onrecverror | 모바일 기기에서 가속도 정보 수신이 실패했을 때 발생하는 이벤트입니다. |
| onrecvsuccess | 모바일 기기에서 가속도 정보 수신이 성공했을 때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### accuracy

> DeviceAPI > Acceleration > Property > accuracy

**Description**

모바일 기기에서 수신한 가속도 정보의 정확도를 갖는 읽기전용 속성입니다.

**Remark**

- accuracy 속성은 "0~3" 범위의 정수값만을 가질 수 있습니다.


---

### id

> DeviceAPI > Acceleration > Property > id

**Description**

Acceleration의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
Acceleration.id
```

**Setting Syntax**

- **`id`** — Acceleration를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### name

> DeviceAPI > Acceleration > Property > name

**Description**

Acceleration 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
Acceleration.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### parent

> DeviceAPI > Acceleration > Property > parent

**Description**

Acceleration 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Acceleration.parent
```

**Setting Syntax**

```javascript
var objParent = this.Acceleration00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- Acceleration 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### timestamp

> DeviceAPI > Acceleration > Property > timestamp

**Description**

모바일 기기에서 가속도 정보를 수신한 시간을 갖는 읽기전용 속성입니다.


---

### xpos

> DeviceAPI > Acceleration > Property > xpos

**Description**

모바일 기기에서 수신한 가속도 정보 중 x 축의 값을 갖는 읽기전용 속성입니다.

**Remark**

- 모바일 기기의 기울기 방향에 따라 양수 또는 음수값을 갖습니다.


---

### ypos

> DeviceAPI > Acceleration > Property > ypos

**Description**

모바일 기기에서 수신한 가속도 정보 중 y 축의 값을 갖는 읽기전용 속성입니다.

**Remark**

- 모바일 기기의 기울기 방향에 따라 양수 또는 음수값을 갖습니다.


---

### zpos

> DeviceAPI > Acceleration > Property > zpos

**Description**

모바일 기기에서 수신한 가속도 정보 중 z 축의 값을 갖는 읽기전용 속성입니다.

**Remark**

- 모바일 기기의 기울기 방향에 따라 양수 또는 음수값을 갖습니다.


---

### 메서드 (Methods)

### getCurrentAcceleration

> DeviceAPI > Acceleration > Method > getCurrentAcceleration

**Description**

모바일 기기의 가속도 정보를 반환하는 메소드입니다.

**Syntax**

```javascript
Acceleration.getCurrentAcceleration( [nAccuracy] )
```

**Parameters**

```
가속도 정보의 정확도를 "0~3" 범위의 숫자로 설정합니다.
값이 작을수록 반환되는 값의 정확도가 높아집니다.

값 생략 시 0 으로 적용됩니다.
```

**Return**

가속도 정보 수신에 성공하면 true 를 반환하고, onrecvsuccess 이벤트가 발생합니다.

가속도 정보 수신에 실패하면 false 를 반환하고, onrecverror 이벤트가 발생합니다.
nAccuracy 값이 "0~3" 값이 아니면 false 를 반환합니다.


---

### watchStart

> DeviceAPI > Acceleration > Method > watchStart

**Description**

모바일 기기의 가속도 정보를 일정 간격으로 수신하도록 설정하는 메소드입니다.

**Syntax**

```javascript
Acceleration.watchStart( nAccuracy, nIntervalTime )
```

**Parameters**

```
가속도 정보 정확도를 "0~3"범위의 숫자로 설정합니다.
값이 작을수록 반환되는 값의 정확도가 높아집니다.
```

**Return**

메소드 실행에 성공하면 "true"를 반환합니다.

메소드 실행에 실패하거나 파라미터값을 잘 못 설정하면 "false"를 반환합니다.

**Remark**

- nIntervalTime 간격으로 nAccuracy 정확도의 가속도 정보를 수신합니다.
  가속도 정보 수신에 성공하면 onrecvsuccess 이벤트가 발생합니다.
  가속도 정보 수신에 실패하면 onrecverror 이벤트가 발생합니다.


---

### watchStop

> DeviceAPI > Acceleration > Method > watchStop

**Description**

watchStart() 메소드로 설정한 주기적인 가속도 정보 수신을 종료하는 메소드입니다.

**Syntax**

```javascript
Acceleration.watchStop()
```

**Parameters**

Acceleration.watchStop();

**Return**

없음


---

### 이벤트 (Events)

### onrecverror

> DeviceAPI > Acceleration > Event > onrecverror

**Description**

모바일 기기에서 가속도 정보 수신이 실패했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrecverror(obj:nexacro.Acceleration,e:nexacro.AccelerationErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onrecvsuccess

> DeviceAPI > Acceleration > Event > onrecvsuccess

**Description**

모바일 기기에서 가속도 정보 수신이 성공했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrecvsuccess(obj:nexacro.Acceleration,e:nexacro.AccelerationEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

## DeviceAPI > AppInfo

### AppInfo

> DeviceAPI > AppInfo

**Description**

넥사크로로 만든 앱 버전 정보와 루팅(Android), 탈옥(iOS/iPadOS) 여부, USB 디버깅 여부를 확인하기 위한 오브젝트입니다.

**Remark**

- AppInfo 오브젝트는 별도 모듈 설치 후 사용할 수 있습니다.
  투비소프트 고객센터에서 모듈 설치 파일을 내려받아 설치할 수 있습니다.

**Property**

| Name | Description |
| --- | --- |
| id | AppInfo의 고유 식별자를 설정하는 속성입니다. |
| jailbreaking | 앱이 설치된 기기의 iOS/iPadOS 운영체제 변조(탈옥) 여부를 확인할 수 있는 속성입니다. |
| rooting | 앱이 설치된 기기의 Android 운영체제 변조(루팅) 여부를 확인할 수 있는 속성입니다. |
| version | 앱 내부에서 사용하는 버전 정보를 반환하는 속성입니다. |
| versionname | 앱 사용자에게 제공하는 버전 정보를 반환하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| destroy | 스크립트에서 동적으로 생성한 AppInfo 을(를) 삭제하는 메소드입니다. |
| isDebuggerConnected | USB 디버깅 설정 활성화 여부를 반환하는 메서드입니다. |


---

### 속성 (Properties)

### id

> DeviceAPI > AppInfo > Property > id

**Description**

AppInfo의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
AppInfo.id
```

**Setting Syntax**

- **`id`** — AppInfo를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### jailbreaking

> DeviceAPI > AppInfo > Property > jailbreaking

**Description**

앱이 설치된 기기의 iOS/iPadOS 운영체제 변조(탈옥) 여부를 확인할 수 있는 속성입니다.

**Syntax**

```javascript
AppInfo.jailbreaking
```

**Remark**

- 탈옥 여부에 따라 true, false 값을 반환합니다.
  지원하지 않는 기기인 경우에는 undefined를 반환합니다.


---

### rooting

> DeviceAPI > AppInfo > Property > rooting

**Description**

앱이 설치된 기기의 Android 운영체제 변조(루팅) 여부를 확인할 수 있는 속성입니다.

**Syntax**

```javascript
AppInfo.rooting
```

**Remark**

- 탈옥 여부에 따라 true, false 값을 반환합니다.
  지원하지 않는 기기인 경우에는 undefined를 반환합니다.


---

### version

> DeviceAPI > AppInfo > Property > version

**Description**

앱 내부에서 사용하는 버전 정보를 반환하는 속성입니다.

**Syntax**

```javascript
AppInfo.version
```

**Remark**

- 운영체제에 따라 아래 정보를 반환합니다.
  앱 내에서 버전 정보에 따라 업데이트 등의 작업을 처리할 수 있습니다.
  Android: versionCode
  iOS/iPadOS: CFBundleVersion

- 앱빌더를 사용하는 경우 앱을 빌드할 때마다 1씩 증가한 값으로 설정됩니다.


---

### versionname

> DeviceAPI > AppInfo > Property > versionname

**Description**

앱 사용자에게 제공하는 버전 정보를 반환하는 속성입니다.

**Syntax**

```javascript
AppInfo.versionname
```

**Remark**

- 운영체제에 따라 아래 정보를 반환합니다.
  Android: versionName
  iOS/iPadOS: CFBundleShortVersionString

- 넥사크로 스튜디오에서 빌드한 경우 [Build App > Setup Version] 값으로 설정한 값입니다.


---

### 메서드 (Methods)

### destroy

> DeviceAPI > AppInfo > Method > destroy

**Description**

스크립트에서 동적으로 생성한 AppInfo 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
AppInfo.destroy()
```

**Parameters**

var bSucc = this.AppInfo00.destroy();

**Return**

없음

**Remark**

- 동적으로 생성한 AppInfo 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.


---

### isDebuggerConnected

> DeviceAPI > AppInfo > Method > isDebuggerConnected

**Description**

USB 디버깅 설정 활성화 여부를 반환하는 메서드입니다.

**Syntax**

```javascript
AppInfo.isDebuggerConnected()
```

**Return**

USB 디버깅 설정 활성화 여부를 반환합니다.
USB 디버깅 설정이 활성화된 경우는 true를 반환합니다.


---

## DeviceAPI > AudioPlayer

### AudioPlayer

> DeviceAPI > AudioPlayer

**Description**

모바일 기기에서 오디오 파일을 재생합니다.

**Property**

| Name | Description |
| --- | --- |
| currentpos | 모바일기기에서 재생중인 오디오파일의 현재 재생위치를 밀리초(milliseconds) 단위로 갖는 읽기전용 속성입니다. |
| duration | 로드된 오디오파일의 총 재생시간을 밀리초(milliseconds)단위로 갖는 읽기전용 속성입니다. |
| id | AudioPlayer의 고유 식별자를 설정하는 속성입니다. |
| name | AudioPlayer 의 이름을 설정하는 속성입니다. |
| pan | 모바일 기기에서 스피커의 밸런스를 설정하는 속성입니다. |
| parent | AudioPlayer 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| repeatcount | 모바일 기기에서 오디오 파일의 반복재생 횟수를 설정하는 속성입니다. |
| startpos | 모바일 기기에서 구간 반복 시 구간의 시작지점을 설정하는 속성입니다. |
| stoppos | 모바일 기기에서 구간 반복 시 구간의 끝지점을 설정하는 속성입니다. |
| url | AudioPlayer 에 로드된 오디오파일의 경로를 갖는 읽기전용 속성입니다. |
| volume | 모바일 기기에서 오디오 파일 재생 시 볼륨값을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| load | AudioPlayer 에 오디오파일을 로딩하는 메소드입니다. |
| movePos | 모바일 기기에서 오디오파일의 재생위치를 특정 부분으로 이동하는 메소드입니다. |
| pause | 모바일기기에서 오디오파일의 재생을 일시중지하는 메소드입니다. |
| play | 모바일기기에서 로딩 된 오디오파일을 재생하는 메소드입니다. |
| resume | 모바일 기기에서 일시중지 상태의 오디오파일을 재생상태로 전환하는 메소드입니다. |
| stop | 모바일 기기에서 오디오파일의 재생을 중지하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onerror | 모바일 기기에서 오디오파일에 대한 처리가 실패했을 때 발생하는 이벤트입니다. |
| onload | 모바일 기기에서 오디오파일이 로드됐을 때 발생하는 이벤트입니다. |
| onmovepos | 모바일 기기에서 오디오파일의 재생 위치가 이동됐을 때 발생하는 이벤트입니다. |
| onplay | 모바일 기기에서 오디오파일의 재생이 시작됐을 때 발생하는 이벤트입니다. |
| onplaying | 모바일 기기에서 오디오파일이 재생중일 때 발생하는 이벤트입니다. |
| onstop | 모바일 기기에서 오디오파일의 재생이 중지됐을 때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### currentpos

> DeviceAPI > AudioPlayer > Property > currentpos

**Description**

모바일기기에서 재생중인 오디오파일의 현재 재생위치를 밀리초(milliseconds) 단위로 갖는 읽기전용 속성입니다.

**Remark**

- currentpos 속성값은 onload 또는 onplaying 이벤트가 발생한 경우에 설정됩니다.


---

### duration

> DeviceAPI > AudioPlayer > Property > duration

**Description**

로드된 오디오파일의 총 재생시간을 밀리초(milliseconds)단위로 갖는 읽기전용 속성입니다.

**Remark**

- duration 속성값은 onload 또는 onplaying 이벤트가 발생한 경우에 설정됩니다.


---

### id

> DeviceAPI > AudioPlayer > Property > id

**Description**

AudioPlayer의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
AudioPlayer.id
```

**Setting Syntax**

- **`id`** — AudioPlayer를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### name

> DeviceAPI > AudioPlayer > Property > name

**Description**

AudioPlayer 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
AudioPlayer.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### pan

> DeviceAPI > AudioPlayer > Property > pan

**Description**

모바일 기기에서 스피커의 밸런스를 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.AudioPlayer00.pan = 0.5;
```
- **`nPan`** — 오디오파일 재생 시작 시 적용될 왼쪽 스피커의 밸런스를 "0.0 ~ 1.0" 범위의 실수값으로 설정합니다.

"0" 설정 시 왼쪽 스피커만 사용합니다.
"0.5" 설정 시 좌우 스피커를 동일하게 사용합니다.
"1" 설정 시 오른쪽 스피커만 사용합니다.
"-1" 설정 시 모바일에 설정되어 있는 밸런스값이 적용됩니다

**Remark**

- pan 속성값을 설저하지 않으면 "-1" 로 적용됩니다.

- pan 속성값을 "0.3" 으로 설정 시 오른쪽 스피커에 30% 음량이, 왼쪽 스피커에 70% 의 음량이 적용됩니다.


---

### parent

> DeviceAPI > AudioPlayer > Property > parent

**Description**

AudioPlayer 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
AudioPlayer.parent
```

**Setting Syntax**

```javascript
var objParent = this.AudioPlayer00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- AudioPlayer 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### repeatcount

> DeviceAPI > AudioPlayer > Property > repeatcount

**Description**

모바일 기기에서 오디오 파일의 반복재생 횟수를 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.AudioPlayer00.repeatcount = 3;
```
- **`nRepeatCount`** — 오디오 파일의 반복재생 횟수를 정수로 설정합니다.

"0" 설정 시 오디오 파일을 무한 반복재생합니다.
"1" 설정 시 오디오 파일을 반복재생하지 않습니다.

**Remark**

- repeatcount 속성값을 설정하지 않으면 "1" 로 적용됩니다.


---

### startpos

> DeviceAPI > AudioPlayer > Property > startpos

**Description**

모바일 기기에서 구간 반복 시 구간의 시작지점을 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.AudioPlayer00.startpos = 1000;
```
- **`nStartPos`** — 전체 오디오 재생시간 중 구간반복 시작지점의 시간을 밀리초(milliseconds) 단위의 숫자로 설정합니다.

"-1" 설정 시 구간반복의 시작지점을 설정하지 않습니다.

**Remark**

- startpos 속성값을 설정하지 않으면 -1 로 적용됩니다.

- 오디오파일이 로딩되면 -1 로 재설정 됩니다.


---

### stoppos

> DeviceAPI > AudioPlayer > Property > stoppos

**Description**

모바일 기기에서 구간 반복 시 구간의 끝지점을 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.AudioPlayer00.stoppos = 5000;
```
- **`nStoppos`** — 전체 오디오 재생시간 중 구간반복 끝지점의 시간을 밀리초(milliseconds) 단위의 숫자로 설정합니다.

"-1" 설정 시 구간반복의 끝지점을 설정하지 않습니다.

**Remark**

- stoppos 속성값을 설정하지 않으면 "-1" 로 적용됩니다.

- 오디오파일이 로딩되면 "-1"로 재설정 됩니다.


---

### url

> DeviceAPI > AudioPlayer > Property > url

**Description**

AudioPlayer 에 로드된 오디오파일의 경로를 갖는 읽기전용 속성입니다.

**Remark**

- url 속성값은 load() 메소드가 수행될 때 설정됩니다.


---

### volume

> DeviceAPI > AudioPlayer > Property > volume

**Description**

모바일 기기에서 오디오 파일 재생 시 볼륨값을 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.AudioPlayer00.volume = 0.7;
```
- **`nVolume`** — 오디오파일 재생 시작 시 적용될 볼륨값을 0.0~1.0 범위의 실수값으로 설정합니다.

-1 설정 시 모바일에 설정되어 있는 볼륨값이 적용됩니다.

**Remark**

- volumn 속성값을 설정하지 않으면 -1 로 적용됩니다.

- iOS/iPadOS NRE 는 모바일 기기에 설정된 시스템 볼륨이 최대값으로 적용되므로 volumn 속성에 시스템 볼륨값보다 큰 값을 설정하여도 시스템 볼륨값으로 적용됩니다.


---

### 메서드 (Methods)

### load

> DeviceAPI > AudioPlayer > Method > load

**Description**

AudioPlayer 에 오디오파일을 로딩하는 메소드입니다.

**Syntax**

```javascript
AudioPlayer.load(strUrl)
```

**Parameters**

```
로딩할 오디오 파일의 위치를 URL 형식의 문자열로 설정합니다.

모바일 기기에 저장된 오디오 파일은 Alias 를 사용하여 문자열로 설정합니다.
```

**Return**

메소드 실행에 성공하면 "true"를 반환하고, onload 이벤트가 발생합니다.
메소드 실행에 실패하면 "true"를 반환하고, onerror 이벤트가 발생합니다.

strUrl 값이 생략된 경우 "false"를 반환합니다.

**Remark**

- 오디오 파일을 정상적으로 로딩하면 오디오파일 위치가 url 속성에 저장됩니다.

- 모바일 기기의 경로에 사용되는 Alias 실제경로입니다.

	
		OS
		Alias
		Path
	

	
		Android
		%USERAPP%
		/data/data/{PackageName}/files/NEXACRO/
	

	
		%SD_CARD%
		/mnt/sdcard                (Android v4.0 이하)
/storage/emulated/0    (Android v4.1 이상)
	

	
		%INSTALLROOT%
		%USERAPP%
	

	
		iOS
		%USERAPP%
		/Library/Caches/nexacro/
	

	
		%SD_CARD%
		미지원
	

	
		%INSTALLROOT%
		%USERAPP%
	


  * %USERAPP% : 애플리케이션에서 할당받은 공간, 다른 애플리케이션 접근불가
  * %SD_CARD% : 모바일 기기의 SD카드 메모리 공간, 다른 애플리케이션 접근가능


---

### movePos

> DeviceAPI > AudioPlayer > Method > movePos

**Description**

모바일 기기에서 오디오파일의 재생위치를 특정 부분으로 이동하는 메소드입니다.

**Syntax**

```javascript
AudioPlayer.movePos(nPos)
```

**Parameters**

```
오디오파일의 재생 위치를 밀리초(milliseconds) 단위의 숫자로 설정합니다.

이동 위치는 "0ms ~ duration속성값" 사이의 값을 설정할 수 있습니다.
```

**Return**

메소드 실행에 성공하면 "true"를 반환하고, onmovepos 이벤트가 발생합니다.

메소드 실행에 실패하거나 파라미터값을 잘 못 설정하면 "false"를 반환하고, onerror 이벤트가 발생합니다.


---

### pause

> DeviceAPI > AudioPlayer > Method > pause

**Description**

모바일기기에서 오디오파일의 재생을 일시중지하는 메소드입니다.

**Syntax**

```javascript
AudioPlayer.pause()
```

**Parameters**

this.AudioPlayer00.pause();

**Return**

없음

**Remark**

- pause() 메소드 수행이 완료되면  onstop 이벤트가 발생합니다.
  이 때, onstop 이벤트의 e.reason 속성값은 "6" 이 됩니다.


---

### play

> DeviceAPI > AudioPlayer > Method > play

**Description**

모바일기기에서 로딩 된 오디오파일을 재생하는 메소드입니다.

**Syntax**

```javascript
AudioPlayer.play( [nIntervalTime] )
```

**Parameters**

```
오디오 파일 재생 중 onplaying 이벤트가 발생하는 주기를 밀리초(milliseconds) 단위의 숫자로 설정합니다.

주기는 200ms ~ 86,400,000ms 사이의 값을 설정할 수 있습니다.
값을 생략하거나 200ms 미만으로 설정 시 onplaying 이벤트가 발생하지 않습니다.
```

**Return**

메소드 실행에 성공하면 true 를 반환합니다.

메소드 실행에 실패하거나 파라미터값을 잘 못 설정하면 false 를 반환합니다.

**Remark**

- 오디오파일 재생에 성공하면 onplay 이벤트 발생 후 onplaying 이벤트가 설정된 주기만큼 반복 발생합니다.
   오디오파일 재생에 실패하면 onerror 이벤트가 발생합니다.


---

### resume

> DeviceAPI > AudioPlayer > Method > resume

**Description**

모바일 기기에서 일시중지 상태의 오디오파일을 재생상태로 전환하는 메소드입니다.

**Syntax**

```javascript
AudioPlayer.resume()
```

**Return**

없음

**Remark**

- resume() 메소드 수행이 완료되면  onplay 이벤트가 발생합니다.
   이 때, onplay 이벤트의 e.reason 속성값은 2 가 됩니다.


---

### stop

> DeviceAPI > AudioPlayer > Method > stop

**Description**

모바일 기기에서 오디오파일의 재생을 중지하는 메소드입니다.

**Syntax**

```javascript
AudioPlayer.stop()
```

**Parameters**

this.AudioPlayer00.stop();

**Return**

없음

**Remark**

- stop() 메소드 수행이 완료되면  onstop 이벤트가 발생합니다.
  이 때, onstop 이벤트의 e.reason 속성값은 "5" 가 됩니다.


---

### 이벤트 (Events)

### onerror

> DeviceAPI > AudioPlayer > Event > onerror

**Description**

모바일 기기에서 오디오파일에 대한 처리가 실패했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.AudioPlayer,e:nexacro.AudioErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onload

> DeviceAPI > AudioPlayer > Event > onload

**Description**

모바일 기기에서 오디오파일이 로드됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onload(obj:nexacro.AudioPlayer,e:nexacro.AudioEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 오디오파일이 로딩 된 후 url, duration, currentpos 속성값이 파일정보에 맞게 설정됩니다.


---

### onmovepos

> DeviceAPI > AudioPlayer > Event > onmovepos

**Description**

모바일 기기에서 오디오파일의 재생 위치가 이동됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmovepos(obj:nexacro.AudioPlayer,e:nexacro.AudioEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onplay

> DeviceAPI > AudioPlayer > Event > onplay

**Description**

모바일 기기에서 오디오파일의 재생이 시작됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onplay(obj:nexacro.AudioPlayer,e:nexacro.AudioEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onplaying

> DeviceAPI > AudioPlayer > Event > onplaying

**Description**

모바일 기기에서 오디오파일이 재생중일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onplaying(obj:nexacro.AudioPlayer,e:nexacro.AudioEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onstop

> DeviceAPI > AudioPlayer > Event > onstop

**Description**

모바일 기기에서 오디오파일의 재생이 중지됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onstop(obj:nexacro.AudioPlayer,e:nexacro.AudioEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

## DeviceAPI > AudioRecorder

### AudioRecorder

> DeviceAPI > AudioRecorder

**Description**

모바일 기기의 오디오를 레코딩하여 파일로 저장합니다.

**Property**

| Name | Description |
| --- | --- |
| audiofile | 모바일 기기에서 녹음 시 오디오 데이터를 저장 할 파일명을 설정하는 속성입니다. |
| audioformat | 모바일 기기에서 녹음 시 오디오 데이타의 포맷을 설정하는 속성입니다. |
| channelconfig | 모바일 기기에서 녹음 시 오디오 채널의 종류를 설정하는 속성입니다. |
| id | AudioRecorder의 고유 식별자를 설정하는 속성입니다. |
| name | AudioRecorder 의 이름을 설정하는 속성입니다. |
| parent | AudioRecorder 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| samplerate | 모바일 기기에서 녹음 시 오디오 데이터의 샘플비율을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| pause | 모바일 기기에서 오디오 데이터의 녹음을 일시중지시키는 메소드입니다. |
| recordingStart | 모바일 기기에서 오디오 데이터의 녹음을 시작하는 메소드입니다. |
| recordingStop | 모바일 기기에서 오디오 데이타의 녹음을 중지하는 메소드입니다 |
| resume | 모바일 기기에서 일시중지 된 녹음을 다시 진행하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onerror | 모바일 기기에서 오디오 데이터의 녹음이 실패했을 때 발생하는 이벤트입니다. |
| onrecording | 모바일 기기에서 오디오 데이터를 녹음중일때 발생하는 이벤트입니다. |
| onstop | 모바일 기기에서 오디오 데이터의 녹음이 종료되었을때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### audiofile

> DeviceAPI > AudioRecorder > Property > audiofile

**Description**

모바일 기기에서 녹음 시 오디오 데이터를 저장 할 파일명을 설정하는 속성입니다.

**Syntax**

```javascript

```

**Setting Syntax**

```javascript
this.AudioRecorder00.audiofile = "%SD_CARD% rec001.mp3";
this.AudioRecorder00.audiofile = "%USERAPP% rec001.wav";
this.AudioRecorder00.audiofile = "%USERAPP% rec001";
```
- **`strAudioFile`** — 오디오 데이터를 저장 할 파일명을 문자열로 설정합니다.

**Remark**

- audiofile 속성값에 확장자를 설정하지 않으면 audioformat 속성값에 따라 자동으로 적용됩니다.

- 확장자는 audioformat 속성값에 맞게 설정해야 정상적인 재생이 가능합니다.

- 모바일 기기의 경로에 사용되는 Alias 실제경로입니다.

	
		OS
		Alias
		Path
	

	
		Android
		%USERAPP%
		/data/data/{PackageName}/files/NEXACRO/
	

	
		%SD_CARD%
		/mnt/sdcard                (Android v4.0 이하)
/storage/emulated/0    (Android v4.1 이상)
	

	
		%INSTALLROOT%
		%USERAPP%
	

	
		iOS
		%USERAPP%
		/Library/Caches/nexacro/
	

	
		%SD_CARD%
		미지원
	

	
		%INSTALLROOT%
		%USERAPP%
	


  * %USERAPP% : 애플리케이션에서 할당받은 공간, 다른 애플리케이션 접근불가
  * %SD_CARD% : 모바일 기기의 SD카드 메모리 공간, 다른 애플리케이션 접근가능


---

### audioformat

> DeviceAPI > AudioRecorder > Property > audioformat

**Description**

모바일 기기에서 녹음 시 오디오 데이타의 포맷을 설정하는 속성입니다.

**Setting Syntax**

```javascript
enumFormat ::= 'WAV' | 'OGG' | 'MP3' | 'AMR_NB' | 'AMR_WB'
```
```javascript
this.AudioRecoder00.audioformat = "WAV";
this.AudioRecoder00.audioformat = "MP3";
this.AudioRecoder00.audioformat = "OGG";
this.AudioRecoder00.audioformat = "AMR_NB";
this.AudioRecoder00.audioformat = "AMR_WB";
```
- **`enumFormat`** — 오디오 데이터의 포맷을 설정합니다.

"WAV", "OGG", "MP3", "AMR_NB", "AMR_WB" 중 하나의 값을 설정합니다.

**Remark**

- audioformat 속성값을 설정하지 않으면 Android NRE 는 "MP3" 로 적용되고, iOS/iPadOS NRE 는 "WAV" 로 적용됩니다.

- 파일포맷에 따른 샘플비율 범위입니다.

	
		File Format
		Extension
		Sample Rate
		Android
		iOS
	

	
		WAV
		*.wav
		8000 ~ 96000
		X
		O
	

	
		OGG
		*.ogg
		8000, 11025, 16000, 22050, 32000, 44100
		O
		X
	

	
		MP3
		*.mp3
		8000, 11025, 16000
		O
		X
	

	
		AMR_NB
		*.mp3
		8000
		O
		X
	

	
		AMR_WB
		*.mp3
		16000
		O
		X


---

### channelconfig

> DeviceAPI > AudioRecorder > Property > channelconfig

**Description**

모바일 기기에서 녹음 시 오디오 채널의 종류를 설정하는 속성입니다.

**Setting Syntax**

```javascript
enumChannel ::= '1' | '2'
```
```javascript
this.AudioRecorder00.channelconfig = 1;
this.AudioRecorder00.channelconfig = 2;
```
- **`enumChannel`** — "1" 설정 시 Mono 로 녹음이 됩니다.
"2" 설정 시 Stereo 로 녹음이 됩니다.

**Remark**

- channelconfig 속성값을 설정하지 않으면 "1" 로 적용됩니다.

- audioformat 속성값이 "AMR_NB" 인 경우는 channelconfig 속성값을 "1" 만 설정할 수 있습니다.


---

### id

> DeviceAPI > AudioRecorder > Property > id

**Description**

AudioRecorder의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
AudioRecorder.id
```

**Setting Syntax**

- **`id`** — AudioRecorder를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### name

> DeviceAPI > AudioRecorder > Property > name

**Description**

AudioRecorder 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
AudioRecorder.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### parent

> DeviceAPI > AudioRecorder > Property > parent

**Description**

AudioRecorder 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
AudioRecorder.parent
```

**Setting Syntax**

```javascript
var objParent = this.AudioRecorder00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- AudioRecorder 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### samplerate

> DeviceAPI > AudioRecorder > Property > samplerate

**Description**

모바일 기기에서 녹음 시 오디오 데이터의 샘플비율을 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.AudioRecoder00.samplerate = 9000;
```
- **`nSampleRate`** — 샘플비율을 숫자로 설정합니다.

audioformat 속성값에 따라 설정할 수 있는 범위가 달라집니다.

**Remark**

- samplerate 속성값을 설정하지 않으면 "8000" 으로 적용됩니다.

- 파일포맷에 따른 샘플비율 범위입니다.

	
		File Format
		Extension
		Sample Rate
		Android
		iOS
	

	
		WAV
		*.wav
		8000 ~ 96000
		X
		O
	

	
		OGG
		*.ogg
		8000, 11025, 16000, 22050, 32000, 44100
		O
		X
	

	
		MP3
		*.mp3
		8000, 11025, 16000
		O
		X
	

	
		AMR_NB
		*.mp3
		8000
		O
		X
	

	
		AMR_WB
		*.mp3
		16000
		O
		X


---

### 메서드 (Methods)

### pause

> DeviceAPI > AudioRecorder > Method > pause

**Description**

모바일 기기에서 오디오 데이터의 녹음을 일시중지시키는 메소드입니다.

**Syntax**

```javascript
AudioRecord.pause()
```

**Parameters**

this.AudioRecord00.pause();

**Return**

없음

**Remark**

- pause() 메소드 수행이 완료되면 onstop 이벤트가 발생합니다.
   이 때, onstop 이벤트의 e.reason 속성값은 6 이 됩니다.

- iOS/iPadOS NRE 만 지원되는 메소드입니다.


---

### recordingStart

> DeviceAPI > AudioRecorder > Method > recordingStart

**Description**

모바일 기기에서 오디오 데이터의 녹음을 시작하는 메소드입니다.

**Syntax**

```javascript
AudioRecord.recordingStart( [nIntervalTime] )
```

**Parameters**

```
오디오 데이터 녹음 중 onrecording 이벤트가 발생하는 주기를 밀리초(milliseconds) 단위의 숫자로 설정합니다.

주기는 200ms ~ 86,400,000ms 사이의 값을 설정할 수 있습니다.
값을 생략하거나 200ms 미만으로 설정 시 onrecording 이벤트가 발생하지 않습니다.
```

**Return**

메소드 실행에 성공하면 "true"를 반환합니다.

메소드 실행에 실패하거나 파라미터값을 잘 못 설정하면 "false"를 반환합니다.

**Remark**

- audiofile, audioformat, samplerate, channelconfig 속성에 유효하지 않은 값이 설정된 경우 녹음이 시작되지 않고, onerror 이벤트가 발생합니다.

- 파일을 생성할 수 없을 경우 녹음이 시작되지 않고, onerror 이벤트가 발생합니다.


---

### recordingStop

> DeviceAPI > AudioRecorder > Method > recordingStop

**Description**

모바일 기기에서 오디오 데이타의 녹음을 중지하는 메소드입니다

**Syntax**

```javascript
AudioRecord.recordingStop()
```

**Parameters**

this.AudioRecord00.recordingStop();

**Return**

없음


---

### resume

> DeviceAPI > AudioRecorder > Method > resume

**Description**

모바일 기기에서 일시중지 된 녹음을 다시 진행하는 메소드입니다.

**Syntax**

```javascript
AudioRecord.resume()
```

**Parameters**

this.AudioRecord00.resume();

**Return**

없음

**Remark**

- iOS/iPadOS NRE 만 지원되는 메소드입니다.


---

### 이벤트 (Events)

### onerror

> DeviceAPI > AudioRecorder > Event > onerror

**Description**

모바일 기기에서 오디오 데이터의 녹음이 실패했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.AudioRecorder,e:nexacro.AudioErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onrecording

> DeviceAPI > AudioRecorder > Event > onrecording

**Description**

모바일 기기에서 오디오 데이터를 녹음중일때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrecording(obj:nexacro.AudioRecorder,e:nexacro.AudioEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onstop

> DeviceAPI > AudioRecorder > Event > onstop

**Description**

모바일 기기에서 오디오 데이터의 녹음이 종료되었을때 발생하는 이벤트입니다.

**Syntax**

```javascript
onstop(obj:nexacro.AudioRecorder,e:nexacro.AudioEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

## DeviceAPI > BluetoothLE

### BluetoothLE

> DeviceAPI > BluetoothLE

**Description**

외부 디바이스와 Bluetooth 방식의 연결을 제공하는 오브젝트입니다.

**Remark**

- Bluetooth Low Energy 방식을 지원하며 Windows 8, Android 4.3, iOS 5, OSX 10.6 이상의 환경에서 사용할 수 있습니다.

- BluetoothLE 오브젝트의 모든 메소드는 비동기로 실행됩니다.
   메소드 실행 결과는 이벤트로 전달됩니다.

**Property**

| Name | Description |
| --- | --- |
| id | BluetoothLE의 고유 식별자를 설정하는 속성입니다. |
| name | BluetoothLE 의 이름을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| connect | Peripheral 디바이스와 연결을 수행하는 메소드입니다. |
| disconnect | Peripheral 디바이스와의 연결을 해제하는 메소드입니다. |
| discoverService | 연결된 Peripheral 디바이스가 제공하는 서비스 UUID 를 요청하는 메소드입니다. |
| readCharacteristic | 연결된 Peripheral 디바이스에 특정 서비스의 Characteristic 값을 요청하는 메소드입니다. |
| scanStart | 게시(Advertisement)중인 Peripheral 디바이스의 검색을 시작하는 메소드입니다. |
| scanStop | 게시(Advertisement)중인 Peripheral 디바이스의 검색을 종료하는 메소드입니다. |
| subscribe | 연결된 Peripheral 디바이스에 특정 서비스의 Characteristic 값이 변경될 때 Notification 을 요청하는 메소드입니다. |
| unsubscribe | 연결된 Peripheral 디바이스에 Notification 해지를 요청하는 메소드입니다. |
| writeCharacteristic | 연결된 Peripheral 디바이스에 특정 서비스의 Characteristic 값을 저장하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onerror | BluetoothLE 에서 요청된 작업이 실패했을 때 발생하는 이벤트입니다. |
| onscanresult | scanStart() 메소드로 특정 서비스가 제공되는 디바이스를 찾았을 때 발생하는 이벤트입니다. |
| onsubscriberesult | BluetoothLE 와 연결된 디바이스에서 Notification 이 전달되었을 때 발생하는 이벤트입니다. |
| onsuccess | BluetoothLE 에서 요청된 작업이 성공했을 때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### id

> DeviceAPI > BluetoothLE > Property > id

**Description**

BluetoothLE의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
BluetoothLE.id
```

**Setting Syntax**

- **`id`** — BluetoothLE를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### name

> DeviceAPI > BluetoothLE > Property > name

**Description**

BluetoothLE 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
BluetoothLE.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### 메서드 (Methods)

### connect

> DeviceAPI > BluetoothLE > Method > connect

**Description**

Peripheral 디바이스와 연결을 수행하는 메소드입니다.

**Syntax**

```javascript
BluetoothLE.connect( strAddress )
```

**Parameters**

```
Peripheral 디바이스의 주소를 문자열로 설정합니다.

Windows NRE 와 Android NRE 는 MAC Address 를 사용합니다.
macOS NRE 는 OS 가 부여한 UUID 를 사용합니다.
iOS/iPadOS NRE 는 검색된 디바이스 목록의 Index 를 사용합니다.
```

**Return**

없음

**Remark**

- Peripheral 디바이스와 연결에 성공하면 onsuccess 이벤트가 발생합니다.
   Peripheral 디바이스와 연결에 실패하면 onerror 이벤트가 발생합니다.

- Peripheral 디바이스의 주소는 scanStart() 메소드 실행 시 발생하는 onscanresult 이벤트에서 확인할 수 있습니다.


◆  Windows NRE 제약

- Windows OS 는 "Bluetooth 및 기타 디바이스" 화면을 통해서만 Peripheral 디바이스와 명시적 연결을 제공합니다.
   OS 를 통한 명시적 연결이 제공되지 않은 상태에서 connect() 메소드를 사용하면 에러가 발생할 수 있습니다.


---

### disconnect

> DeviceAPI > BluetoothLE > Method > disconnect

**Description**

Peripheral 디바이스와의 연결을 해제하는 메소드입니다.

**Syntax**

```javascript
BluetoothLE.disconnect()
```

**Parameters**

this.BluetoothLE00.disconnect();

**Return**

없음

**Remark**

- Peripheral 디바이스와 연결 해제에 성공하면 onsuccess 이벤트가 발생합니다.
   Peripheral 디바이스와 연결 해제에 실패하면 onerror 이벤트가 발생합니다.


◆  Windows NRE 제약

- Windows OS 는 "Bluetooth 및 기타 디바이스" 화면을 통해서만 Peripheral 디바이스와의 명시적 연결 해제를 제공합니다.
   disconnect() 메소드로 디바이스와 연결을 해제해도 실제로 연결이 해제되지 않습니다.


---

### discoverService

> DeviceAPI > BluetoothLE > Method > discoverService

**Description**

연결된 Peripheral 디바이스가 제공하는 서비스 UUID 를 요청하는 메소드입니다.

**Syntax**

```javascript
BluetoothLE.discoverService()
```

**Parameters**

this.BluetoothLE00.discoverService();

**Return**

없음

**Remark**

- 연결된 Peripheral 디바이스에 서비스 UUID 요청을 성공하면 onsuccess 이벤트가 발생합니다.
   연결된 Peripheral 디바이스에 서비스 UUID 요청을 실패하면 onerror 이벤트가 발생합니다.

- 연결된 Peripheral 디바이스에서 제공하는 서비스 UUID 갯수만큼 onsuccess 이벤트가 발생합니다.


---

### readCharacteristic

> DeviceAPI > BluetoothLE > Method > readCharacteristic

**Description**

연결된 Peripheral 디바이스에 특정 서비스의 Characteristic 값을 요청하는 메소드입니다.

**Syntax**

```javascript
BluetoothLE.readCharacteristic( strSvcUUID, strCharUUID )
```

**Parameters**

```
Characteristic 이 정의된 서비스의 UUID 를 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- Peripheral 디바이스에 Characteristic 값 요청을 성공하면 onsuccess 이벤트가 발생합니다.
   Peripheral 디바이스에 Characteristic 값 요청을 실패하면 onerror 이벤트가 발생합니다.


---

### scanStart

> DeviceAPI > BluetoothLE > Method > scanStart

**Description**

게시(Advertisement)중인 Peripheral 디바이스의 검색을 시작하는 메소드입니다.

**Syntax**

```javascript
BluetoothLE.scanStart( [nDuration [, strSvcUUID]] )
```

**Parameters**

```
검색을 지속할 시간을 밀리초(Millisecond) 단위의 숫자로 설정합니다.

값 생략 시 2000 으로 적용됩니다.
```

**Return**

없음

**Remark**

- 검색이 정상적으로 시작되거나 종료되면 onsuccess 이벤트가 발생합니다.
   게시(Advertisement)중인 디바이스를 찾을 때마다 onscanresult 이벤트가 발생합니다.
   검색이 정상적으로 시작되지 않았거나 오류가 생기면 onerror 이벤트가 발생합니다.


◆  Windows NRE 제약

- Windows OS 는 "Bluetooth 및 기타 디바이스" 화면을 통해서만 Peripheral 디바이스와 명시적 연결을 제공합니다.
   따라서 scanStart() 메소드 실행 시 "Bluetooth 및 기타 디바이스" 화면에 게시된 디바이스가 검색됩니다.


---

### scanStop

> DeviceAPI > BluetoothLE > Method > scanStop

**Description**

게시(Advertisement)중인 Peripheral 디바이스의 검색을 종료하는 메소드입니다.

**Syntax**

```javascript
BluetoothLE.scanStop()
```

**Return**

없음

**Remark**

- 검색이 정상적으로 종료되면 onsuccess 이벤트가 발생합니다.
   검색 종료에 실패하면 onerror 이벤트가 발생합니다.


---

### subscribe

> DeviceAPI > BluetoothLE > Method > subscribe

**Description**

연결된 Peripheral 디바이스에 특정 서비스의 Characteristic 값이 변경될 때 Notification 을 요청하는 메소드입니다.

**Syntax**

```javascript
BluetoothLE.subscribe( strSvcUUID, strCharUUID )
```

**Parameters**

```
Characteristic 이 정의된 서비스의 UUID 를 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- Peripheral 디바이스에 Notification 요청을 성공하면 onsuccess 이벤트가 발생합니다.
   Peripheral 디바이스에 Notification 요청을 실패하면 onerror 이벤트가 발생합니다.

- Peripheral 디바이스에서 Notification 이 전달되면 onsubscriberesult 이벤트가 발생합니다.


---

### unsubscribe

> DeviceAPI > BluetoothLE > Method > unsubscribe

**Description**

연결된 Peripheral 디바이스에 Notification 해지를 요청하는 메소드입니다.

**Syntax**

```javascript
BluetoothLE.unsubscribe( strSvcUUID, strCharUUID )
```

**Parameters**

```
Characteristic 이 정의된 서비스의 UUID 를 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- Peripheral 디바이스에 Notification 해제 요청을 성공하면 onsuccess 이벤트가 발생합니다.
   Peripheral 디바이스에 Notification 해제 요청을 실패하면 onerror 이벤트가 발생합니다.


---

### writeCharacteristic

> DeviceAPI > BluetoothLE > Method > writeCharacteristic

**Description**

연결된 Peripheral 디바이스에 특정 서비스의 Characteristic 값을 저장하는 메소드입니다.

**Syntax**

```javascript
BluetoothLE.writeCharacteristic( strSvcUUID, strCharUUID, strVal )
```

**Parameters**

```
Characteristic 이 정의된 서비스의 UUID 를 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- Peripheral 디바이스에 Characteristic 값 저장에 성공하면 onsuccess 이벤트가 발생합니다.
   Peripheral 디바이스에 Characteristic 값 저장에 실패하면 onerror 이벤트가 발생합니다.


---

### 이벤트 (Events)

### onerror

> DeviceAPI > BluetoothLE > Event > onerror

**Description**

BluetoothLE 에서 요청된 작업이 실패했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.BluetoothLE,e:nexacro.BluetoothLEErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 이벤트가 발생한 원인은 e 오브젝트(BluetoothLEErrorEventinfo) 의 reason 속성값을 참조하시기 바랍니다.


---

### onscanresult

> DeviceAPI > BluetoothLE > Event > onscanresult

**Description**

scanStart() 메소드로 특정 서비스가 제공되는 디바이스를 찾았을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onscanresult(obj:nexacro.BluetoothLE,e:nexacro.BluetoothLEScanDeviceEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 특정 서비스가 제공되는 디바이스를 찾을 때마다 발생하는 이벤트입니다.

- 찾아낸 디바이스에 대한 정보는 e 오브젝트(BluetoothLEScanDeviceEventInfo) 의 devicename, deviceaddress 속성을 참조하시기 바랍니다.


---

### onsubscriberesult

> DeviceAPI > BluetoothLE > Event > onsubscriberesult

**Description**

BluetoothLE 와 연결된 디바이스에서 Notification 이 전달되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsubscriberesult(obj:nexacro.BluetoothLE,e:nexacro.BluetoothLEEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- subscribe() 메소드로 요청한 Notification 이 수신되었을 때 발생하는 이벤트입니다.


---

### onsuccess

> DeviceAPI > BluetoothLE > Event > onsuccess

**Description**

BluetoothLE 에서 요청된 작업이 성공했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsuccess(obj:nexacro.BluetoothLE,e:nexacro.BluetoothLEEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 이벤트가 발생한 원인은 e 오브젝트(BluetoothLEEventinfo) 의 reason 속성값을 참조하시기 바랍니다.


---

## DeviceAPI > Camera

### Camera

> DeviceAPI > Camera

**Description**

모바일 기기의 카메라 장비를 연동하여 촬영한 이미지 또는 이미지 경로를 얻습니다.

**Property**

| Name | Description |
| --- | --- |
| encodingtype | 모바일 기기에서 카메라 앱을 통해 얻은 이미지의 타입을 설정하는 속성입니다. |
| gettype | 모바일 기기에서 촬영된 이미지가 전달되는 방식을 설정하는 속성입니다. |
| id | Camera의 고유 식별자를 설정하는 속성입니다. |
| imageheight | 모바일 기기에서 카메라 앱을 통해 얻은 이미지의 높이를 설정하는 속성입니다. |
| imagequality | 모바일 기기에서 카메라 앱을 통해 얻은 이미지의 품질을 설정하는 속성입니다. |
| imagewidth | 모바일 기기에서 카메라 앱을 통해 얻은 이미지의 너비를 설정하는 속성입니다. |
| name | Camera 의 이름을 설정하는 속성입니다. |
| parent | Camera 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| usegallery | 모바일 기기에서 촬영된 이미지를 사진앨범에 저장할 지 여부를 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| takePicture | 모바일 기기의 카메라 앱을 구동시켜 이미지를 얻는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| oncapture | 모바일 기기의 카메라 앱과 연동하여 이미지 얻기에 성공했을 때 발생하는 이벤트입니다. |
| onerror | 모바일 기기의 카메라 앱 연동이 실패했을 때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### encodingtype

> DeviceAPI > Camera > Property > encodingtype

**Description**

모바일 기기에서 카메라 앱을 통해 얻은 이미지의 타입을 설정하는 속성입니다.

**Setting Syntax**

```javascript
enumType ::= 'JPEG' | 'PNG'
```
```javascript
this.Camera00.encodingtype = "JPEG";
this.Camera00.encodingtype = "PNG";
```
- **`"JPEG"`** — 카메라 앱을 통해 얻은 이미지를 JPEG 형식으로 저장합니다.
- **`"PNG"`** — 카메라 앱을 통해 얻은 이미지를 PNG 형식으로 저장합니다.

**Remark**

- encodingtype 속성값을 설정하지 않으면 "JPEG" 으로 적용됩니다.


---

### gettype

> DeviceAPI > Camera > Property > gettype

**Description**

모바일 기기에서 촬영된 이미지가 전달되는 방식을 설정하는 속성입니다.

**Setting Syntax**

```javascript
enumType ::= 'url' | 'imagedata'
```
```javascript
this.Camera00.gettype = "imagedata";
```
- **`"url"`** — 촬영된 이미지의 위치정보가 URL 형태로 전달됩니다.
- **`"imagedata"`** — 촬영된 이미지가 오브젝트로 전달됩니다.

**Remark**

- gettype 속성값을 설정하지 않으면 "url" 로 적용됩니다.


---

### id

> DeviceAPI > Camera > Property > id

**Description**

Camera의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
Camera.id
```

**Setting Syntax**

- **`id`** — Camera를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### imageheight

> DeviceAPI > Camera > Property > imageheight

**Description**

모바일 기기에서 카메라 앱을 통해 얻은 이미지의 높이를 설정하는 속성입니다.

**Syntax**

```javascript

```

**Setting Syntax**

```javascript
this.Camera00.imageheight = 1500;
```
- **`nImageHeight`** — 촬영된 이미지의 높이를 pixel 단위의 숫자로 설정합니다.

"0" 으로 설정 시 촬영된 이미지의 높이를 변경하지 않습니다.

**Remark**

- imageheight 속성값을 설정하지 않으면 "0" 으로 적용됩니다.

- 이미지의 높이와 너비 비율이 맞지 않는 경우는 이미지가 왜곡될 수 있습니다.

- 이미지의 원본 크기는 모바일 기기의 종류에 따라 다르며 변경된 이미지의 용량이 사용가능한 메모리보다 큰 경우 오류가 발생합니다.


---

### imagequality

> DeviceAPI > Camera > Property > imagequality

**Description**

모바일 기기에서 카메라 앱을 통해 얻은 이미지의 품질을 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.Camera00.imagequality = 90;
```
- **`nImageQuality`** — 이미지의 품질을 "0 ~ 100" 범위의 값으로 설정합니다.

**Remark**

- imagequality 속성값을 설정하지 않으면 "100" 으로 적용됩니다.

- encodingtype 속성값이 "JPEG"인 경우만 적용되는 속성입니다.


---

### imagewidth

> DeviceAPI > Camera > Property > imagewidth

**Description**

모바일 기기에서 카메라 앱을 통해 얻은 이미지의 너비를 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.Camera00.imagewidth = 1500;
```
- **`nImageWidth`** — 촬영된 이미지의 너비를 pixel 단위의 숫자로 설정합니다.

"0" 으로 설정 시 촬영된 이미지의 너비를 변경하지 않습니다.

**Remark**

- imagewidth 속성값을 설정하지 않으면 "0" 으로 적용됩니다.

- 이미지의 높이와 너비 비율이 맞지 않는 경우는 이미지가 왜곡될 수 있습니다.

- 이미지의 원본 크기는 모바일 기기의 종류에 따라 다르며 변경된 이미지의 용량이 사용가능한 메모리보다 큰 경우 오류가 발생합니다.


---

### name

> DeviceAPI > Camera > Property > name

**Description**

Camera 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
Camera.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### parent

> DeviceAPI > Camera > Property > parent

**Description**

Camera 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Camera.parent
```

**Setting Syntax**

```javascript
var objParent = this.Camera00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- Camera 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### usegallery

> DeviceAPI > Camera > Property > usegallery

**Description**

모바일 기기에서 촬영된 이미지를 사진앨범에 저장할 지 여부를 설정하는 속성입니다.

**Setting Syntax**

```javascript
bUseGallery ::= 'true' | 'false'
```
```javascript
this.Camera00.usegallery = false;
```
- **`"true"`** — 모바일 기기에서 촬영된 이미지를 사진앨범 영역에 저장합니다.
- **`"false"`** — 모바일 기기에서 촬영된 이미지를 사진앨범 영역에 저장하지 않습니다.

**Remark**

- usegallery 속성값을 설정하지 않으면 true 로 적용됩니다.

- 촬영된 이미지는 usegallery 속성값과 관계없이 앱의 캐시영역에 저장됩니다.


---

### 메서드 (Methods)

### takePicture

> DeviceAPI > Camera > Method > takePicture

**Description**

모바일 기기의 카메라 앱을 구동시켜 이미지를 얻는 메소드입니다.

**Syntax**

```javascript
Camera.takePicture()
```

**Parameters**

this.Camera00.takePicture();

**Return**

없음

**Remark**

- 이미지가 전달에 성공하면 oncapture 이벤트가 발생합니다.
  이미지가 전달에 실패하면 onerror 이벤트가 발생합니다.


---

### 이벤트 (Events)

### oncapture

> DeviceAPI > Camera > Event > oncapture

**Description**

모바일 기기의 카메라 앱과 연동하여 이미지 얻기에 성공했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
oncapture(obj:nexacro.Camera,e:nexacro.CameraEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onerror

> DeviceAPI > Camera > Event > onerror

**Description**

모바일 기기의 카메라 앱 연동이 실패했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.Camera,e:nexacro.CameraErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

## DeviceAPI > Contact

### Contact

> DeviceAPI > Contact

**Description**

모바일 기기의 연락처 데이터를 처리합니다.

**Property**

| Name | Description |
| --- | --- |
| addresses | 연락처의 주소정보를 ContactAddress 객체의 배열로 설정하는 속성입니다. |
| birthday | 연락처의 생년월일을 설정하는 속성입니다. |
| categories | 연락처의 구분정보를 ContactField 객체의 배열로 설정하는 속성입니다. |
| contactname | 연락처의 이름을 하위속성으로 갖는 읽기전용 속성입니다. |
| emails | 연락처의 이메일정보를 ContactField 객체의 배열로 설정하는 속성입니다. |
| id | Contact의 고유 식별자를 설정하는 속성입니다. |
| ims | 연락처의 IM(Instant Messenger)정보를 ContactIM 객체의 배열로 설정하는 속성입니다. |
| name | Contact 의 이름을 설정하는 속성입니다. |
| nickname | 연락처의 별명을 설정하는 속성입니다. |
| note | 연락처의 메모정보를 설정하는 속성입니다. |
| organizations | 연락처의 회사정보를 ContactOrganization 객체의 배열로 설정하는 속성입니다. |
| phonenumbers | 연락처의 전화번호정보를 ContactField 객체의 배열로 설정하는 속성입니다. |
| photos | 연락처의 사진정보를 ContactPhoto 객체의 배열로 설정하는 속성입니다. |
| uniqueid | 연락처의 식별자(id) 값을 갖는 읽기전용 속성입니다. |
| urls | 연락처의 웹페이지주소정보를 ContactField 객체의 배열로 설정하는 속성입니다. |


---

### 속성 (Properties)

### addresses

> DeviceAPI > Contact > Property > addresses

**Description**

연락처의 주소정보를 ContactAddress 객체의 배열로 설정하는 속성입니다.

**Setting Syntax**

```javascript
var objContact = new nexacro.Contact();
var objAddress = new nexacro.ContactAdress();
var arrAddress = new Array();

arrAddress.push(objAddress); 
objContact.addresses = arrAddress;
```
- **`objAddresses`** — ContactAddress 객체의 배열을 설정합니다.


---

### birthday

> DeviceAPI > Contact > Property > birthday

**Description**

연락처의 생년월일을 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.Contact00.birthday = new Date();
```
- **`objBirthday`** — Date 타입의 자료형으로 날짜를 설정합니다.


---

### categories

> DeviceAPI > Contact > Property > categories

**Description**

연락처의 구분정보를 ContactField 객체의 배열로 설정하는 속성입니다.

**Setting Syntax**

```javascript
var objContact = new nexacro.Contact();
var objCategorie = new nexacro.ContactField();
var arrCategorie = new Array();

arrCategorie .push(objCategorie);
objContact.categories = arrCategorie;
```
- **`objCategories`** — ContactField 객체의 배열을 설정합니다.


---

### contactname

> DeviceAPI > Contact > Property > contactname

**Description**

연락처의 이름을 하위속성으로 갖는 읽기전용 속성입니다.

**Setting Syntax**

```javascript
this.Contact.contactname.familyname = "홍";
this.Contact.contactname.givenname = "길동";
this.Contact.contactname.middlename = "";
this.Contact.contactname.prefix = "괴도";
this.Contact.contactname.suffix = "님";

alert(this.Contact.contactname.displayname);      // "괴도홍길동님"
```
- **`objContactname`** — familyname 하위속성에 이름의 "성"을 설정합니다.
givenname 하위속성에 "이름"을 설정합니다.
middlename 하위속성에 이름의 "중간이름"을 설정합니다.
prefix 하위속성에 이름 앞에 붙는 "호칭"을 설정합니다.
suffix 하위속성에 이름 뒤에 붙는 "호칭"을 설정합니다.

displayname 하위속성에 나머지 하위속성값이 조합되어 자동으로 설정됩니다.

**Remark**

- 모바일 기기에 따라 사용 가능한 하위속성이 다를 수 있습니다.
  또한, 모바일 기기에 따라 설정한 값이 표시되지 않을 수 있습니다.


---

### emails

> DeviceAPI > Contact > Property > emails

**Description**

연락처의 이메일정보를 ContactField 객체의 배열로 설정하는 속성입니다.

**Setting Syntax**

```javascript
var objContact = new nexacro.Contact();
var objEmails = new nexacro.ContactField();
var arrEmails = new Array();

arrEmails.push(objEmails);
objContact.emails = arrEmails;
```
- **`objEmails`** — ContactField 객체의 배열을 설정합니다.

**Remark**

- 허용되는 타입에 한해서 1개 이상 중복하여 설정 및 조회가 가능합니다.
  단, 설정된 값을 모바일 기기의 기본 연락처 어플리케이션에서 조회시 기종에 따라 표현되는 방식은 상이할 수 있습니다.


◆ 사용가능한 타입

Android : 
0 TYPE_CUSTOM
4 TYPE_HOME
6 TYPE_MOBILE
7 TYPE_OTHER
10 TYPE_WORK

iOS :
0 TYPE_CUSTOM
2 TYPE_FAX_HOME
3 TYPE_FAX_WORK
4 TYPE_HOME
5 TYPE_MAIN
6 TYPE_MOBILE
7 TYPE_OTHER
8 TYPE_OTHER_FAX
9 TYPE_PAGER
10 TYPE_WORK
11 TYPE_IPHONE
12 TYPE_HOMEPAGE


---

### id

> DeviceAPI > Contact > Property > id

**Description**

Contact의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
Contact.id
```

**Setting Syntax**

- **`id`** — Contact를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### ims

> DeviceAPI > Contact > Property > ims

**Description**

연락처의 IM(Instant Messenger)정보를 ContactIM 객체의 배열로 설정하는 속성입니다.

**Setting Syntax**

```javascript
var objContact = new nexacro.Contact();
var objIms = new nexacro.ContactField();
var arrIms = new Array();

arrIms.push(objIms);
objContact.ims = arrIms;
```
- **`objIms`** — ContactIM 객체의 배열을 설정합니다.


---

### name

> DeviceAPI > Contact > Property > name

**Description**

Contact 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
Contact.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### nickname

> DeviceAPI > Contact > Property > nickname

**Description**

연락처의 별명을 설정하는 속성입니다.

**Syntax**

```javascript

```

**Setting Syntax**

```javascript
this.Contact00.nickname = "nickname";
```
- **`strNickname`** — 연락처의 별명으로 사용될 텍스트를 설정합니다.


---

### note

> DeviceAPI > Contact > Property > note

**Description**

연락처의 메모정보를 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.Contact00.note = "note string";
```
- **`strNote`** — 연락처의 메모정보를 문자열로 설정합니다.


---

### organizations

> DeviceAPI > Contact > Property > organizations

**Description**

연락처의 회사정보를 ContactOrganization 객체의 배열로 설정하는 속성입니다.

**Setting Syntax**

```javascript
var objContact = new nexacro.Contact();
var objOrgan = new nexacro.ContactOrganization();
var arrOrgan = new Array();

arrOrgan.push(objOrgan);
objContact.organization = arrOrgan;
```
- **`objOrganizations`** — ContactOrganization 객체의 배열을 설정합니다.

**Remark**

- 허용되는 타입에 한해서 1개 이상 중복하여 설정 및 조회가 가능합니다.
  단, 설정된 값을 모바일 기기의 기본 연락처 어플리케이션에서 조회시 기종에 따라 표현되는 방식은 상이할 수 있습니다.


◆ 사용가능한 타입

Android : 
0 TYPE_CUSTOM
7 TYPE_OTHER
10 TYPE_WORK

iOS :
10 TYPE_WORK


---

### phonenumbers

> DeviceAPI > Contact > Property > phonenumbers

**Description**

연락처의 전화번호정보를 ContactField 객체의 배열로 설정하는 속성입니다.

**Setting Syntax**

```javascript
var objContact = new nexacro.Contact();
var objPhone = new nexacro.ContactField();
var arrPhone = new Array();

arrPhone.push(objPhone);
objContact.phonenumbers = arrPhone;
```
- **`objPhonenumbers`** — ContactField 객체의 배열을 설정합니다.

**Remark**

- 허용되는 타입에 한해서 1개 이상 중복하여 설정 및 조회가 가능합니다.
  단, 설정된 값을 모바일 기기의 기본 연락처 어플리케이션에서 조회시 기종에 따라 표현되는 방식은 상이할 수 있습니다.


◆ 사용가능한 타입

Android : 
0 TYPE_CUSTOM
1 TYPE_CALLBACK
2 TYPE_FAX_HOME
3 TYPE_FAX_WORK
4 TYPE_HOME
6 TYPE_MOBILE
7 TYPE_OTHER
9 TYPE_PAGER
10 TYPE_WORK

iOS :
0 TYPE_CUSTOM
2 TYPE_FAX_HOME
3 TYPE_FAX_WORK
4 TYPE_HOME
5 TYPE_MAIN
6 TYPE_MOBILE
7 TYPE_OTHER
8 TYPE_OTHER_FAX
9 TYPE_PAGER
10 TYPE_WORK
11 TYPE_IPHONE
12 TYPE_HOMEPAGE


---

### photos

> DeviceAPI > Contact > Property > photos

**Description**

연락처의 사진정보를 ContactPhoto 객체의 배열로 설정하는 속성입니다.

**Setting Syntax**

```javascript
var objContact = new nexacro.Contact();
var objPhoto = new nexacro.ContactPhoto();
var arrPhoto = new Array();

arrPhoto.push(objPhoto);
objContact.photos = arrPhoto;
```
- **`objPhotos`** — ContactPhotos 객체의 배열을 설정합니다.

**Remark**

- 현재 출시된 iOS와 Android 버젼에서는 1개의 사진만 사용이 가능합니다.
  모바일 기기의 확장 가능성을 고려하여 배열구조로 설정하도록 되어 있습니다.


---

### uniqueid

> DeviceAPI > Contact > Property > uniqueid

**Description**

연락처의 식별자(id) 값을 갖는 읽기전용 속성입니다.

**Remark**

- 모바일 기기의 연락처 종류에 따라 저장되는 값이 다릅니다.


---

### urls

> DeviceAPI > Contact > Property > urls

**Description**

연락처의 웹페이지주소정보를 ContactField 객체의 배열로 설정하는 속성입니다.

**Setting Syntax**

```javascript
var objContact = new nexacro.Contact();
var objUrls = new nexacro.ContactField();
var arrUrls = new Array();

arrUrls.push(objUrls);
objContact.urls = arrUrls;
```
- **`objUrls`** — ContactField 객체의 배열을 설정합니다.

**Remark**

- 허용되는 타입에 한해서 1개 이상 중복하여 설정 및 조회가 가능합니다.
  단, 설정된 값을 모바일 기기의 기본 연락처 어플리케이션에서 조회시 기종에 따라 표현되는 방식은 상이할 수 있습니다.

- Android에서는 ContactField 객체의 type 속성에 "12"(TYPE_HOMEPAGE) 만 설정이 가능합니다.


---

## DeviceAPI > ContactAddress

### ContactAddress

> DeviceAPI > ContactAddress

**Description**

연락처에서 사용되는 주소 필드 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| city | 모바일 기기의 연락처정보에서 시/도 정보를 설정하는 속성입니다. |
| country | 모바일 기기의 연락처정보에서 국가정보를 설정하는 속성입니다. |
| id | ContactAddress의 고유 식별자를 설정하는 속성입니다. |
| label | 모바일 기기의 연락처정보에서 필드명칭을 설정하는 속성입니다. |
| name | ContactAddress 의 이름을 설정하는 속성입니다. |
| postcode | 모바일 기기의 연락처정보에서 우편번호를 설정하는 속성입니다. |
| region | 모바일 기기의 연락처정보에서 구/군/시 정보를 설정하는 속성입니다. |
| street | 모바일 기기의 연락처 정보에서 상세주소 정보를 설정하는 속성입니다. |
| type | 모바일 기기의 연락처정보에서 주소종류를 설정하는 속성입니다. |


---

### 속성 (Properties)

### city

> DeviceAPI > ContactAddress > Property > city

**Description**

모바일 기기의 연락처정보에서 시/도 정보를 설정하는 속성입니다.

**Setting Syntax**

```javascript
ContactAddress.city = "seoul";
```
- **`strCity`** — 시/도 정보를 문자열로 설정합니다.


---

### country

> DeviceAPI > ContactAddress > Property > country

**Description**

모바일 기기의 연락처정보에서 국가정보를 설정하는 속성입니다.

**Setting Syntax**

```javascript
ContactAddress.country = "korea";
```
- **`strCountry`** — 국가정보를 문자열로 설정합니다.


---

### id

> DeviceAPI > ContactAddress > Property > id

**Description**

ContactAddress의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
ContactAddress.id
```

**Setting Syntax**

- **`id`** — ContactAddress를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### label

> DeviceAPI > ContactAddress > Property > label

**Description**

모바일 기기의 연락처정보에서 필드명칭을 설정하는 속성입니다.

**Setting Syntax**

```javascript
ContactAddress.label = "testLable";
```
- **`strLabel`** — 필드명칭을 문자열로 설정합니다.

**Remark**

- ContactAddress 의 type 속성값이 "0"(Custom) 인 경우는 필드 종류명을 label 속성으로 사용합니다.


---

### name

> DeviceAPI > ContactAddress > Property > name

**Description**

ContactAddress 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
ContactAddress.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### postcode

> DeviceAPI > ContactAddress > Property > postcode

**Description**

모바일 기기의 연락처정보에서 우편번호를 설정하는 속성입니다.

**Setting Syntax**

```javascript
ContactAddress.postcode = "000-000";
```
- **`strPostcode`** — 우편번호를 문자열로 설정합니다.


---

### region

> DeviceAPI > ContactAddress > Property > region

**Description**

모바일 기기의 연락처정보에서 구/군/시 정보를 설정하는 속성입니다.

**Setting Syntax**

```javascript
ContactAddress.region = "kangnam-gu";
```
- **`strRegion`** — 구/군/시 정보를 문자열로 설정합니다.


---

### street

> DeviceAPI > ContactAddress > Property > street

**Description**

모바일 기기의 연락처 정보에서 상세주소 정보를 설정하는 속성입니다.

**Setting Syntax**

```javascript
ContactAddress.street = "000-00번지";
```
- **`strStreet`** — 상세주소 정보를 문자열로 설정합니다.


---

### type

> DeviceAPI > ContactAddress > Property > type

**Description**

모바일 기기의 연락처정보에서 주소종류를 설정하는 속성입니다.

**Setting Syntax**

```javascript
ContactAddress.type = "testType";
```
- **`strType`** — 주소종류를 문자열로 설정합니다.

**Remark**

- ContactAddress 의 type 속성값이 "0"(Custom) 인 경우는 필드 종류명을 label 속성으로 사용합니다.


---

## DeviceAPI > ContactField

### ContactField

> DeviceAPI > ContactField

**Description**

연락처에서 사용되는 일반 필드 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| id | ContactField의 고유 식별자를 설정하는 속성입니다. |
| label | 모바일 기기의 연락처정보에서 필드명칭을 설정하는 속성입니다. |
| name | ContactField 의 이름을 설정하는 속성입니다. |
| type | 모바일 기기의 연락처정보에서 필드 종류를 설정하는 속성입니다. |
| value | 모바일 기기의 연락처정보에서 필드값을 설정하는 속성입니다. |


---

### 속성 (Properties)

### id

> DeviceAPI > ContactField > Property > id

**Description**

ContactField의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
ContactField.id
```

**Setting Syntax**

- **`id`** — ContactField를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### label

> DeviceAPI > ContactField > Property > label

**Description**

모바일 기기의 연락처정보에서 필드명칭을 설정하는 속성입니다.

**Setting Syntax**

```javascript
ContactField.lable = "testLable";
```
- **`strLabel`** — 필드명칭을 문자열로 설정합니다.

**Remark**

- ContactField 의 type 속성값이 "0"(Custom) 인 경우는 필드 종류명을 label 속성으로 사용합니다.


---

### name

> DeviceAPI > ContactField > Property > name

**Description**

ContactField 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
ContactField.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### type

> DeviceAPI > ContactField > Property > type

**Description**

모바일 기기의 연락처정보에서 필드 종류를 설정하는 속성입니다.

**Setting Syntax**

```javascript
ContactField.type = "testType";
```
- **`strType`** — 필드 종류를 문자열로 설정합니다.

**Remark**

- ContactField 의 type 속성값이 "0"(Custom) 인 경우는 필드 종류명을 label 속성으로 사용합니다.


---

### value

> DeviceAPI > ContactField > Property > value

**Description**

모바일 기기의 연락처정보에서 필드값을 설정하는 속성입니다.

**Setting Syntax**

```javascript
ContactField.value = "testValue";
```
- **`strValue`** — 필드값을 문자열로 설정합니다.


---

## DeviceAPI > ContactOrganization

### ContactOrganization

> DeviceAPI > ContactOrganization

**Description**

연락처에서 사용되는 Organization 필드 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| company | 모바일 기기의 연락처정보에서 조직이름을 설정하는 속성입니다. |
| department | 모바일 기기의 연락처정보에서 부서명을 설정하는 속성입니다. |
| id | ContactOrganization의 고유 식별자를 설정하는 속성입니다. |
| label | 모바일 기기의 연락처정보에서 필드명칭을 설정하는 속성입니다. |
| name | ContactOrganization 의 이름을 설정하는 속성입니다. |
| title | 모바일 기기의 연락처정보에서 직급을 설정하는 속성입니다. |
| type | 모바일 기기의 연락처정보에서 조직 종류를 설정하는 속성입니다. |


---

### 속성 (Properties)

### company

> DeviceAPI > ContactOrganization > Property > company

**Description**

모바일 기기의 연락처정보에서 조직이름을 설정하는 속성입니다.

**Setting Syntax**

```javascript
ContactOrganization.company = "TOBESOFT";
```
- **`strCompany`** — 조직이름을 문자열로 설정합니다.


---

### department

> DeviceAPI > ContactOrganization > Property > department

**Description**

모바일 기기의 연락처정보에서 부서명을 설정하는 속성입니다.

**Setting Syntax**

```javascript
ContactOrganization.department = "경영지원";
```
- **`strDepartment`** — 부서명을 문자열로 설정합니다.


---

### id

> DeviceAPI > ContactOrganization > Property > id

**Description**

ContactOrganization의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
ContactOrganization.id
```

**Setting Syntax**

- **`id`** — ContactOrganization를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### label

> DeviceAPI > ContactOrganization > Property > label

**Description**

모바일 기기의 연락처정보에서 필드명칭을 설정하는 속성입니다.

**Setting Syntax**

```javascript
ContactOrganization.label = "testLable";
```
- **`strLabel`** — 필드명칭을 문자열로 설정합니다.

**Remark**

- ContactOrganization 의 type 속성값이 "0"(Custom) 인 경우는 필드 종류명을 label 속성으로 사용합니다.


---

### name

> DeviceAPI > ContactOrganization > Property > name

**Description**

ContactOrganization 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
ContactOrganization.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### title

> DeviceAPI > ContactOrganization > Property > title

**Description**

모바일 기기의 연락처정보에서 직급을 설정하는 속성입니다.

**Setting Syntax**

```javascript
ContactOrganization.title = "Manager";
```
- **`strTitle`** — 직급을 문자열로 설정합니다.


---

### type

> DeviceAPI > ContactOrganization > Property > type

**Description**

모바일 기기의 연락처정보에서 조직 종류를 설정하는 속성입니다.

**Setting Syntax**

```javascript
ContactOrganization.type = "Education Biz. Team";
```
- **`strType`** — 조직종류를 문자열로 설정합니다.

**Remark**

- ContactOrganization 의 type 속성값이 "0"(Custom) 인 경우는 필드 종류명을 label 속성으로 사용합니다.


---

## DeviceAPI > ContactPhoto

### ContactPhoto

> DeviceAPI > ContactPhoto

**Description**

연락처에서 사용되는 Photo 필드 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| id | ContactPhoto의 고유 식별자를 설정하는 속성입니다. |
| imagedata | 모바일 기기의 연락처정보에서 이미지 정보를 설정하는 속성입니다. |
| label | 모바일 기기의 연락처정보에서 필드명칭을 설정하는 속성입니다. |
| name | ContactPhoto 의 이름을 설정하는 속성입니다. |


---

### 속성 (Properties)

### id

> DeviceAPI > ContactPhoto > Property > id

**Description**

ContactPhoto의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
ContactPhoto.id
```

**Setting Syntax**

- **`id`** — ContactPhoto를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### imagedata

> DeviceAPI > ContactPhoto > Property > imagedata

**Description**

모바일 기기의 연락처정보에서 이미지 정보를 설정하는 속성입니다.

**Setting Syntax**

```javascript
ContactPhoto.imagedata = strImageEncodingBase64;
```
- **`strImagedata`** — 이미지 데이터를 base64 인코딩하여 문자열 형태로 설정합니다.


---

### label

> DeviceAPI > ContactPhoto > Property > label

**Description**

모바일 기기의 연락처정보에서 필드명칭을 설정하는 속성입니다.

**Setting Syntax**

```javascript
ContactPhoto.label = "testLable";
```
- **`strLabel`** — 필드명칭을 문자열로 설정합니다.


---

### name

> DeviceAPI > ContactPhoto > Property > name

**Description**

ContactPhoto 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
ContactPhoto.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

## DeviceAPI > ContactSet

### ContactSet

> DeviceAPI > ContactSet

**Description**

모바일 기기의 연락처 데이터를 연동하여 처리합니다.

**Property**

| Name | Description |
| --- | --- |
| id | ContactSet의 고유 식별자를 설정하는 속성입니다. |
| name | ContactSet 의 이름을 설정하는 속성입니다. |
| parent | ContactSet 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| append | 모바일 기기에 연락처정보를 추가하는 메소드입니다. |
| query | 모바일 기기에서 연락처정보 중 조건에 맞는 연락처를 조회하는 메소드입니다. |
| remove | 모바일 기기에서 연락처정보를 삭제하는 메소드입니다. |
| update | 모바일 기기에서 연락처정보를 갱신하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onerror | 모바일 기기에서 연락처정보의 처리가 실패한 경우에 발생하는 이벤트입니다. |
| onsuccess | 모바일 기기에서 연락처정보의 처리가 성공했을 경우에 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### id

> DeviceAPI > ContactSet > Property > id

**Description**

ContactSet의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
ContactSet.id
```

**Setting Syntax**

- **`id`** — ContactSet를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### name

> DeviceAPI > ContactSet > Property > name

**Description**

ContactSet 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
ContactSet.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### parent

> DeviceAPI > ContactSet > Property > parent

**Description**

ContactSet 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ContactSet.parent
```

**Setting Syntax**

```javascript
var objParent = this.ContactSet00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- ContactSet 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### 메서드 (Methods)

### append

> DeviceAPI > ContactSet > Method > append

**Description**

모바일 기기에 연락처정보를 추가하는 메소드입니다.

**Syntax**

```javascript
ContactSet.append(objContact)
```

**Parameters**

```
추가할 연락처 정보를 Contact 객체 형태로 설정합니다.
```

**Return**

메소드 실행에 성공하면 "true"를 반환합니다.

메소드 실행에 실패하거나 파라미터값을 잘 못 설정하면 "false"를 반환합니다.

**Remark**

- 모바일 기기에 연락처정보 추가에 성공하면 onsuccess 이벤트가 발생합니다.
  모바일 기기에 연락처정보 추가에 실패하면 onerror 이벤트가 발생합니다.


---

### query

> DeviceAPI > ContactSet > Method > query

**Description**

모바일 기기에서 연락처정보 중 조건에 맞는 연락처를 조회하는 메소드입니다.

**Syntax**

```javascript
ContactSet.query( strQueryInfo [, nResultCnt] )
```

**Parameters**

```
연락처정보 중 조회할 연락처의 조건을 문자열로 설정합니다.

"필드이름:검색어;필드이름:검색어;..." 형태로 설정하여야 합니다.
검색어에는 "?", "*" 와 같은 와일드카드 문자를 사용할 수 있습니다.
```

**Return**

메소드 실행에 성공하면 "true"를 반환합니다.

메소드 실행에 실패하거나 파라미터값을 잘 못 설정하면 "false"를 반환합니다.

**Remark**

- 모바일 기기에서 연락처정보 조회에 성공하면 onsuccess 이벤트가 발생합니다.
  모바일 기기에서 연락처정보 조회에 실패하면 onerror 이벤트가 발생합니다.

- 조건문 예제입니다.

	
		Field Name
		Example
		Remark
	

	
		all
		 
		모든 필드
	

	
		uniqueid
		352, 3??, 3*
		 
	

	
		categories
		회사, 회*, ?? 
		 
	

	
		birthday
		20120305, 2012*, ????03*
		yyyyMMdd의 형태로 검색어 입력
	

	
		contactname
		홍길동, *동, 홍??
		하위 프로퍼티를 모두 검색
	

	
		nickname
		개발자, *자, 개*
		 
	

	
		note
		노트, *노*, ????트* 
		 
	

	
		phonenumbers
		01012345678, *5678* 
		 
	

	
		emails
		tobe@naver.com, *naver.com 
		 
	

	
		ims
		testid, *st* 
		 
	

	
		urls
		naver.com, naver* 
		 
	

	
		addresses
		강남구, 강*
		하위 프로퍼티를 모두 검색
	

	
		organizations
		투비소프트, *투비*
		하위 프로퍼티를 모두 검색


---

### remove

> DeviceAPI > ContactSet > Method > remove

**Description**

모바일 기기에서 연락처정보를 삭제하는 메소드입니다.

**Syntax**

```javascript
ContactSet.remove(strUniqueID)
```

**Parameters**

```
삭제할 연락처정보의 Contact 객체의 uniqueid 속성값을 설정합니다.
```

**Return**

메소드 실행에 성공하면 "true"를 반환합니다.

메소드 실행에 실패하거나 파라미터값을 잘 못 설정하면 "false"를 반환합니다.

**Remark**

- 모바일 기기에서 연락처정보 삭제에 성공하면 onsuccess 이벤트가 발생합니다.
  모바일 기기에서 연락처정보 삭제에 실패하면 onerror 이벤트가 발생합니다.


---

### update

> DeviceAPI > ContactSet > Method > update

**Description**

모바일 기기에서 연락처정보를 갱신하는 메소드입니다.

**Syntax**

```javascript
ContactSet.update(objContact)
```

**Parameters**

```
수정할 연락처 정보의 Contact 객체를 설정합니다.
```

**Return**

메소드 실행에 성공하면 "true"를 반환합니다.

메소드 실행에 실패하거나 파라미터값을 잘 못 설정하면 "false"를 반환합니다.

**Remark**

- 모바일 기기에서 연락처정보 수정에 성공하면 onsuccess 이벤트가 발생합니다.
  모바일 기기에서 연락처정보 수정에 실패하면 onerror 이벤트가 발생합니다.

- ContactSet 에서 query() 메소드를 통해 연락처정보를 조회한 후 update() 메소드를 실행합니다.


---

### 이벤트 (Events)

### onerror

> DeviceAPI > ContactSet > Event > onerror

**Description**

모바일 기기에서 연락처정보의 처리가 실패한 경우에 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.ContactSet,e:nexacro.ContactSetErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onsuccess

> DeviceAPI > ContactSet > Event > onsuccess

**Description**

모바일 기기에서 연락처정보의 처리가 성공했을 경우에 발생하는 이벤트입니다.

**Syntax**

```javascript
onsuccess(obj:nexacro.ContactSet,e:nexacro.ContactSetEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

## DeviceAPI > ExternalAPI

### ExternalAPI

> DeviceAPI > ExternalAPI

**Description**

외부 앱에 정의된 API 모듈을 연동할 수 있는 오브젝트입니다.

**Remark**

- 외부 앱에는 넥사크로와 연동할 수 있는 코드가 정의되어 있어야 합니다.
   연동 코드가 정의되지 않은 앱과는 연동할 수 없습니다.

- 넥사크로의 요청을 처리하는 연동 코드는 안드로이드 스튜디오 또는 XCode 로 별도 정의하여야 합니다.

**Property**

| Name | Description |
| --- | --- |
| id | ExternalAPI의 고유 식별자를 설정하는 속성입니다. |
| name | ExternalAPI 의 이름을 설정하는 속성입니다. |
| parent | ExternalAPI 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| execExtAPI | 특정 외부 앱에 정의된 API 모듈을 실행하는 메소드입니다. |
| isAccessible | 특정 외부 앱에 접근이 가능한지 확인하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onerror | ExternalAPI 오브젝트에서 요청한 작업이 실패했을 때 발생하는 이벤트입니다. |
| onrecvdata | 외부 앱에서 데이터(문자열)를 전달받았을 때 발생하는 이벤트입니다. |
| onsuccess | ExternalAPI 오브젝트에서 요청한 작업이 성공했을 때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### id

> DeviceAPI > ExternalAPI > Property > id

**Description**

ExternalAPI의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
ExternalAPI.id
```

**Setting Syntax**

- **`id`** — ExternalAPI를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### name

> DeviceAPI > ExternalAPI > Property > name

**Description**

ExternalAPI 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
ExternalAPI.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### parent

> DeviceAPI > ExternalAPI > Property > parent

**Description**

ExternalAPI 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ExternalAPI.parent
```

**Setting Syntax**

```javascript
var objParent = this.ExternalAPI00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- ExternalAPI 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### 메서드 (Methods)

### execExtAPI

> DeviceAPI > ExternalAPI > Method > execExtAPI

**Description**

특정 외부 앱에 정의된 API 모듈을 실행하는 메소드입니다.

**Syntax**

```javascript
ExternalAPI.execExtAPI( strRecvID, strAppID, strAPI [, strParams] )
```

**Parameters**

```
실행한 메소드를 구분하기 위한 ID 를 문자열로 설정합니다.

onsuccess, onrecvdata 이벤트에서 ExternalAPIEventIfo 오브젝트의 recvid 속성에 설정한 값이 전달됩니다.
```

**Return**

API 모듈의 실행여부와 관계없이 메소드 실행에 성공하면 true 를 반환합니다.

API 모듈의 실행여부와 관계없이 메소드 실행에 실패하면 false 를 반환합니다.

**Remark**

- 외부 앱에 정의된 API 모듈 실행에 성공하면 onsuccess 이벤트가 발생합니다.
   외부 앱에 정의된 API 모듈 실행에 실패하면 onerror 이벤트가 발생합니다.


---

### isAccessible

> DeviceAPI > ExternalAPI > Method > isAccessible

**Description**

특정 외부 앱에 접근이 가능한지 확인하는 메소드입니다.

**Syntax**

```javascript
ExternalAPI.isAccessible ( strAppID )
```

**Parameters**

```
접근 가능여부를 확인하려는 외부 앱의 ID 를 문자열로 설정합니다.

Android 는 Domain 형태로 설정합니다. ("com.nexacro.testmodule")
iOS 는 URL Scheme 형태로 설정합니다. ("TestApp://")
```

**Return**

외부 앱의 접근 가능여부와 관계없이 메소드 실행에 성공하면 true 를 반환합니다.

외부 앱의 접근 가능여부와 관계없이 메소드 실행에 실패하면 false 를 반환합니다.

**Remark**

- 특정 외부 앱에 접근이 가능하면 onsuccess 이벤트가 발생합니다.
   특정 외부 앱에 접근이 불가능하면 onerror 이벤트가 발생합니다.


---

### 이벤트 (Events)

### onerror

> DeviceAPI > ExternalAPI > Event > onerror

**Description**

ExternalAPI 오브젝트에서 요청한 작업이 실패했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.ExternalAPI,e:nexacro.ExternalAPIErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onrecvdata

> DeviceAPI > ExternalAPI > Event > onrecvdata

**Description**

외부 앱에서 데이터(문자열)를 전달받았을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrecvdata(obj:nexacro.ExternalAPI,e:nexacro.ExternalAPIEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- ExternalAPI 에서 execExtAPI() 메소드로 외부 앱의 API 모듈을 실행한 결과가 전달되었을 때 발생하는 이벤트입니다.


---

### onsuccess

> DeviceAPI > ExternalAPI > Event > onsuccess

**Description**

ExternalAPI 오브젝트에서 요청한 작업이 성공했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsuccess(obj:nexacro.ExternalAPI,e:nexacro.ExternalAPIEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

## DeviceAPI > Geolocation

### Geolocation

> DeviceAPI > Geolocation

**Description**

모바일 기기의 위치정보를 제공합니다.

**Property**

| Name | Description |
| --- | --- |
| coords | 모바일 기기에서 마지막으로 수신된 위치정보 객체를 갖는 읽기전용 속성입니다. |
| id | Geolocation의 고유 식별자를 설정하는 속성입니다. |
| name | Geolocation 의 이름을 설정하는 속성입니다. |
| parent | Geolocation 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| sourcetype | 모바일 기기에서 수신된 위치정보를 제공한 소스를 갖는 읽기전용 속성입니다. |
| timestamp | 모바일 기기에서 위치정보를 수신한 시간을 갖는 읽기전용 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| getCurrentPosition | 모바일 기기의 위치정보를 반환하는 메소드입니다. |
| watchStart | 모바일 기기의 위치정보를 일정 간격으로 수신하도록 설정하는 메소드입니다. |
| watchStop | watchStart() 메소드로 설정한 주기적인 위치정보 수신을 종료하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onrecverror | 모바일 기기에서 위치정보 수신이 실패했을 때 발생하는 이벤트입니다. |
| onrecvsuccess | 모바일 기기에서 위치정보 수신이 성공했을 때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### coords

> DeviceAPI > Geolocation > Property > coords

**Description**

모바일 기기에서 마지막으로 수신된 위치정보 객체를 갖는 읽기전용 속성입니다.

**Setting Syntax**

```javascript
var nlatitude = this.Geolocation00.coords.latitude ;
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

### id

> DeviceAPI > Geolocation > Property > id

**Description**

Geolocation의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
Geolocation.id
```

**Setting Syntax**

- **`id`** — Geolocation를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### name

> DeviceAPI > Geolocation > Property > name

**Description**

Geolocation 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
Geolocation.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### parent

> DeviceAPI > Geolocation > Property > parent

**Description**

Geolocation 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Geolocation.parent
```

**Setting Syntax**

```javascript
var objParent = this.Geolocation00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- Geolocation 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### sourcetype

> DeviceAPI > Geolocation > Property > sourcetype

**Description**

모바일 기기에서 수신된 위치정보를 제공한 소스를 갖는 읽기전용 속성입니다.

**Remark**

- GPS 에서 수신된 위치정보일 경우 1 로 설정됩니다.
   WPS 에서 수신된 위치정보일 경우 2 로 설정됩니다.

- iOS/iPadOS NRE 는 사용할 수 없는 속성입니다.


---

### timestamp

> DeviceAPI > Geolocation > Property > timestamp

**Description**

모바일 기기에서 위치정보를 수신한 시간을 갖는 읽기전용 속성입니다.


---

### 메서드 (Methods)

### getCurrentPosition

> DeviceAPI > Geolocation > Method > getCurrentPosition

**Description**

모바일 기기의 위치정보를 반환하는 메소드입니다.

**Syntax**

```javascript
Geolocation.getCurrentPosition ( nAccuracy, nTimeout )
```

**Parameters**

```
위치 정보의 정확도를 숫자로 설정합니다.
값이 작을수록 반환되는 값의 정확도가 높아집니다.

Android NRE 는 0~2 범위의 값(ACCURACY_0~ACCURACY_2)을 설정합니다.
iOS/iPadOS NRE 는 0~4 범위의 값(ACCURACY_0~ACCURACY_4)을 설정합니다.
```

**Return**

위치 정보 수신에 성공하면 true 를 반환하고, onrecvsuccess 이벤트가 발생합니다.
위치 정보 수신에 실패하면  false 를 반환하고, onrecverror 이벤트가 발생합니다.

nAccuracy 값이 0~4 값이 아니면 false 를 반환합니다.

**Remark**

- Android NRE 는 어플리케이션 설치시 GPS 사용허가를 획득한 경우에만 사용가능합니다.

- iOS/iPadOS NRE 는 기기가 Airplane 모드일 때 GPS 기능을 사용할 수 없습니다.


---

### watchStart

> DeviceAPI > Geolocation > Method > watchStart

**Description**

모바일 기기의 위치정보를 일정 간격으로 수신하도록 설정하는 메소드입니다.

**Syntax**

```javascript
Geolocation.watchStart(nAccuracy, nIntervalTime)
```

**Parameters**

```
위치 정보의 정확도를 숫자로 설정합니다.
값이 작을수록 반환되는 값의 정확도가 높아집니다.

Android 일 경우 "0~2"(ACCURACY_0~ACCURACY_2) 범위의 값을 설정합니다.
iOS 일 경우 "0~4"(ACCURACY_0 ~ ACCURACY_4) 범위의 값을 설정합니다.
```

**Return**

메소드 실행에 성공하면 "true"를 반환합니다.

메소드 실행에 실패하거나 파라미터값을 잘 못 설정하면 "false"를 반환합니다.

**Remark**

- nIntervalTime 간격으로 nAccuracy 정확도의 위치 정보를 수신합니다.
  위치 정보 수신에 성공하면 onrecvsuccess 이벤트가 발생합니다.
  위치 정보 수신에 실패하면 onrecverror 이벤트가 발생합니다.


---

### watchStop

> DeviceAPI > Geolocation > Method > watchStop

**Description**

watchStart() 메소드로 설정한 주기적인 위치정보 수신을 종료하는 메소드입니다.

**Syntax**

```javascript
Geolocation.watchStop()
```

**Return**

없음

**Remark**

- Android 일 경우 watchStop() 메소드 수행으로 GPS 사용을 변경하지 않습니다.
  환경설정에서 GPS 사용 여부를 변경 해야 합니다.


---

### 이벤트 (Events)

### onrecverror

> DeviceAPI > Geolocation > Event > onrecverror

**Description**

모바일 기기에서 위치정보 수신이 실패했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrecverror(obj:nexacro.Geolocation,e:nexacro.GeolocationErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onrecvsuccess

> DeviceAPI > Geolocation > Event > onrecvsuccess

**Description**

모바일 기기에서 위치정보 수신이 성공했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrecvsuccess(obj:nexacro.Geolocation,e:nexacro.GeolocationEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

## DeviceAPI > ImagePicker

### ImagePicker

> DeviceAPI > ImagePicker

**Description**

모바일 기기의 사진앨범 또는 카메라 앱과 연동해 이미지 또는 이미지 경로를 얻습니다.

**Remark**

- open 메소드 실행 시 모바일 기기의 사진앨범이나 카메라 앱 또는 연결된 다른 앱을 선택할 수 있습니다.
  운영체제, 설치 환경에 따라 선택할 수 있는 앱은 다를 수 있습니다.

**Property**

| Name | Description |
| --- | --- |
| encodingtype | 가져온 이미지의 타입 정보를 갖는 읽기전용 속성입니다. |
| gettype | 가져온 이미지가 전달된 방식을 갖는 읽기전용 속성입니다. |
| id | ImagePicker의 고유 식별자를 설정하는 속성입니다. |
| imageheight | 가져올 이미지의 높이를 설정하는 속성입니다. |
| imagequality | 가져올 이미지의 품질을 설정하는 속성입니다. |
| imagewidth | 가져올 이미지의 너비를 설정하는 속성입니다. |
| name | ImagePicker 의 이름을 설정하는 속성입니다. |
| parent | ImagePicker 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| open | 모바일 기기의 사진앨범이나 카메라 앱 또는 연결된 다른 앱을 구동시켜 이미지를 가져오는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onerror | 이미지 가져오기에 실패했을 때 발생하는 이벤트입니다. |
| onsuccess | 이미지 가져오기에 성공했을 때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### encodingtype

> DeviceAPI > ImagePicker > Property > encodingtype

**Description**

가져온 이미지의 타입 정보를 갖는 읽기전용 속성입니다.

**Setting Syntax**

- **`"JPEG"`** — 가져온 이미지가 "JPEG" 형식일 때 갖는 값입니다.
- **`"PNG"`** — 가져온 이미지가 "PNG" 형식일 때 갖는 값입니다.

**Remark**

- ImagePicker 의 open 메소드에서 파라미터로 설정한 값을 갖습니다.


---

### gettype

> DeviceAPI > ImagePicker > Property > gettype

**Description**

가져온 이미지가 전달된 방식을 갖는 읽기전용 속성입니다.

**Setting Syntax**

- **`"url"`** — 가져온 이미지가 "URL" 형태일 때 갖는 값입니다.
- **`"imagedata"`** — 가져온 이미지가 오브젝트 형태일 때 갖는 값입니다.

**Remark**

- ImagePicker 의 open 메소드에서 파라미터로 설정한 값을 갖습니다.


---

### id

> DeviceAPI > ImagePicker > Property > id

**Description**

ImagePicker의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
ImagePicker.id
```

**Setting Syntax**

- **`id`** — ImagePicker를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### imageheight

> DeviceAPI > ImagePicker > Property > imageheight

**Description**

가져올 이미지의 높이를 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.ImagePicker00.imageheight = 1500;
```
- **`nImgHeight`** — 이미지를 가져올 때 적용될 높이를 픽셀 단위의 숫자로 설정합니다.

0 으로 설정 시 원본 이미지의 높이를 변경하지 않습니다.

**Remark**

- imageheight 속성값을 설정하지 않으면 0 으로 적용됩니다.

- open 메소드로 이미지를 가져올 때 이미지의 높이를 imageheight 속성값으로 변경합니다.

- 이미지의 높이를 변경할 때 원본이미지의 너비와 비율이 맞지 않는 경우는 이미지가 왜곡될 수 있습니다.

- 원본 이미지의 크기는 모바일 기기의 종류에 따라 다르며 변경된 이미지의 용량이 사용가능한 메모리보다 큰 경우 오류가 발생합니다.


---

### imagequality

> DeviceAPI > ImagePicker > Property > imagequality

**Description**

가져올 이미지의 품질을 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.ImagePicker00.imagequality = 90;
```
- **`nImgQuality`** — 이미지를 가져올 때 적용될 품질을 "0 ~ 100" 범위의 값으로 설정합니다.

**Remark**

- imagequality 속성값을 설정하지 않으면 "100" 으로 적용됩니다.

- open 메소드의 두번째 파라미터를 "JPEG" 으로 설정했을 때만 적용되는 속성입니다.


---

### imagewidth

> DeviceAPI > ImagePicker > Property > imagewidth

**Description**

가져올 이미지의 너비를 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.ImagePicker00.imagewidth = 1500;
```
- **`nImgWidth`** — 이미지를 가져올 때 적용될 너비를 픽셀 단위의 숫자로 설정합니다.

0 으로 설정 시 원본 이미지의 너비를 변경하지 않습니다.

**Remark**

- imagewidth 속성값을 설정하지 않으면 0 으로 적용됩니다.

- open 메소드로 이미지를 가져올 때 이미지의 너비를 imagewidth 속성값으로 변경합니다.

- 이미지의 너비를 변경할 때 원본이미지의 높이와 비율이 맞지 않는 경우는 이미지가 왜곡될 수 있습니다.

- 원본 이미지의 크기는 모바일 기기의 종류에 따라 다르며 변경된 이미지의 용량이 사용가능한 메모리보다 큰 경우 오류가 발생합니다.


---

### name

> DeviceAPI > ImagePicker > Property > name

**Description**

ImagePicker 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
ImagePicker.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### parent

> DeviceAPI > ImagePicker > Property > parent

**Description**

ImagePicker 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
ImagePicker.parent
```

**Setting Syntax**

```javascript
var objParent = this.ImagePicker00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- ImagePicker 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### 메서드 (Methods)

### open

> DeviceAPI > ImagePicker > Method > open

**Description**

모바일 기기의 사진앨범이나 카메라 앱 또는 연결된 다른 앱을 구동시켜 이미지를 가져오는 메소드입니다.

**Syntax**

```javascript
ImagePicker.open( enumGettype, enumEncodingype )
```

**Parameters**

```
이미지가 전달되는 방식을 설정합니다.

"url" 설정 시 이미지의 위치정보가 "URL" 형태로 전달됩니다.
"imagedata" 설정 시 이미지가 오브젝트 형태로 전달됩니다.

메소드 수행 후 gettype 속성에 파라미터값이 저장됩니다.
```

**Return**

메소드 실행에 성공하면 true 를 반환합니다.

메소드 실행에 실패하거나 파라미터값을 잘 못 설정하면 false 를 반환합니다.

**Remark**

- 앱에서 이미지 선택에 성공하면 onsuccess 이벤트가 발생합니다.
  앱에서 이미지 선택에 실패하면 onerror 이벤트가 발생합니다.

- 선택된 이미지는 파라미터값과 속성값에 맞게 변형된 후 "%USERAPP%/_resource_/_devicepics_" 위치에 저장됩니다.
   "%USERAPP%/_resource_/_devicepics_" 에 저장된 이미지의 위치정보 또는 오브젝트가 최종적으로 전달됩니다.


◆ Android NRE 제약
- enumEncodingtype 파라미터에 "PNG" 만 설정할 수 있습니다.
- Android 일부 기종의 사진앨범 앱에서 이미지 선택 후 자동으로 앱이 닫히지 않습니다.
   이런 경우에는 사용자가 직접 닫기를 수행하여야 합니다.


---

### 이벤트 (Events)

### onerror

> DeviceAPI > ImagePicker > Event > onerror

**Description**

이미지 가져오기에 실패했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.ImagePicker,e:nexacro.ImagePickerErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onsuccess

> DeviceAPI > ImagePicker > Event > onsuccess

**Description**

이미지 가져오기에 성공했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsuccess(obj:nexacro.ImagePicker,e:nexacro.ImagePickerEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

## DeviceAPI > LiteDBConnection

### LiteDBConnection

> DeviceAPI > LiteDBConnection

**Description**

데이터베이스 연결 정보를 관리하고 제어하는 오브젝트입니다.

**Remark**

- LiteDBConnection 오브젝트는 SQLite 데이터베이스만 지원합니다.
  SQLite 데이터베이스에 대한 세부적인 기능은 https://www.sqlite.org/ 를 참고하세요.

**Property**

| Name | Description |
| --- | --- |
| async | LiteDBConnection 에 요청된 작업이 동작되는 방식을 설정하는 속성입니다. |
| busytimeout | LiteDBConnection 에 연결된 데이터베이스에서 응답을 받기 위한 최대 대기시간을 설정하는 속성입니다. |
| datasource | LiteDBConnection 에 연결할 데이터베이스의 위치정보를 설정하는 속성입니다. |
| id | LiteDBConnection의 고유 식별자를 설정하는 속성입니다. |
| name | LiteDBConnection 의 이름을 설정하는 속성입니다. |
| openflag | LiteDBConnection 에 데이터베이스를 연결하는 옵션을 설정하는 속성입니다. |
| parent | LiteDBConnection 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| preconnect | LiteDBConnection 생성 시 데이터베이스를 연결할지 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| begin | LiteDBConnection 에 연결된 데이터베이스에 트랜잭션을 설정하는 메소드입니다. |
| close | LiteDBConnection 에 연결된 데이터베이스를 닫는 메소드입니다. |
| commit | LiteDBConnection 에 연결된 데이터베이스에 트랜잭션 Commit 을 수행하는 메소드입니다. |
| isConnected | LiteDBConnection 에 데이터베이스가 연결되어 있는지 확인하는 메소드입니다. |
| open | LiteDBConnection 에 데이터베이스를 연결하는 메소드입니다. |
| rollback | LiteDBConnection 에 연결된 데이터베이스에 트랜잭션 RollBack 을 수행하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onerror | LiteDBConnection 에 요청된 작업이 실패했을 때 발생하는 이벤트입니다. |
| onsuccess | LiteDBConnection 에 요청된 작업이 성공했을 때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### async

> DeviceAPI > LiteDBConnection > Property > async

**Description**

LiteDBConnection 에 요청된 작업이 동작되는 방식을 설정하는 속성입니다.

**Setting Syntax**

```javascript
bAsync ::= 'true' | 'false'
```
```javascript
this.LiteDBConnection00.async = false;
```
- **`true`** — LiteDBConnection 에 요청된 작업이 비동기(Async) 로 동작됩니다.
- **`false`** — LiteDBConnection 에 요청된 작업이 동기(Sync) 로 동작됩니다.

**Remark**

- async 속성값을 설정하지 않으면 true 로 적용됩니다.


◆ Mobile 제약

- 모바일 환경에서는 항상 비동기(Async) 로 동작합니다.


---

### busytimeout

> DeviceAPI > LiteDBConnection > Property > busytimeout

**Description**

LiteDBConnection 에 연결된 데이터베이스에서 응답을 받기 위한 최대 대기시간을 설정하는 속성입니다.

**Syntax**

```javascript

```

**Setting Syntax**

```javascript
this.LiteDBConnection00.busytimeout = 1000;
```
- **`nSec`** — 응답을 받기위한 최대시간을 밀리초(milliseconds) 단위의 숫자로 설정합니다.

200ms ~ 86,400,000ms 사이의 값을 설정할 수 있습니다.

**Remark**

- busytimeout 속성값을 설정하지 않으면 60000 으로 적용됩니다.

- Android NRE 는 지원하지 않는 속성입니다.


---

### datasource

> DeviceAPI > LiteDBConnection > Property > datasource

**Description**

LiteDBConnection 에 연결할 데이터베이스의 위치정보를 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.LiteDBConnection00.datasource = "%USERAPP%filename";
```
- **`strPath`** — 연결할 데이터베이스의 위치정보를 문자열로 설정합니다.

절대경로 또는 Alias 를 사용하여 설정합니다.

**Remark**

- strPath 에 사용할 수 있는 Alias 실제경로입니다.

	
		Alias
		OS
		Path
		Remark
	

	
		%USERAPP%
		Windows
		C:\Users\[UserName]\AppData\LocalLow\TOBESOFT\Nexacro N\24
		 
	

	
		macOS
		/Users/[UserName]/Library/TOBESOFT/Nexacro N/24
		 
	

	
		Android
		/data/data/[PackageName]/files/NEXACRO/
* Key를 설정한 경우에는 아래와 같이 적용
/data/data/[PackageName]/files/[Key]

		 
	

	
		iOS
		[AppRoot]/Library/Application Support/NEXACRO/ 
		 
	

	
		%USERAPPLOCAL%
		Windows
		C:\Users\[UserName]\AppData\Local
		 
	

	
		macOS
		/Users/[UserName]/Library/Application Support
		 
	

	
		%MYDOCUMENT%
%DOCUMENT%
		Windows
		"내 문서" 로 설정한 위치
		 
	

	
		macOS
		/Users/[UserName]/Documents
		 
	

	
		%SD_CARD%
		Android
		/storage/emulated/0/Android/data/[PackageName]/files/
		 
	

	
		%INSTALLROOT%
		Windows
		Packing 시 Update Type이 "Update(Local+Server)" 또는 "Local"인 경우
%USERAPP%\projects\[Key]\[BootStrapURL]
Packing 시 Update Type이 "Server"인 경우
%USERAPP%
		 
	

	
		%EXECUTE%
		Windows
		NRE: nexacro.exe 실행 위치
WRE: 브라우저 실행 위치
		 
	

	
		macOS
		앱이 설치된 경로
		 
	

	
		%COMPONENTHOME%
		Windows
		C:\Users\[UserName]\AppData\LocalLow\TOBESOFT\Nexacro N\24\Component\[Key]\
		 
	


  * %USERAPP% : 애플리케이션에서 할당받은 공간, 다른 애플리케이션 접근불가
  * %SD_CARD% : 모바일 기기의 외부 저장소 공간, 다른 애플리케이션 접근가능


---

### id

> DeviceAPI > LiteDBConnection > Property > id

**Description**

LiteDBConnection의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
LiteDBConnection.id
```

**Setting Syntax**

- **`id`** — LiteDBConnection를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### name

> DeviceAPI > LiteDBConnection > Property > name

**Description**

LiteDBConnection 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
LiteDBConnection.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### openflag

> DeviceAPI > LiteDBConnection > Property > openflag

**Description**

LiteDBConnection 에 데이터베이스를 연결하는 옵션을 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.LiteDBConnection00.openflag = LiteDBConnection.openReadWrite;
```
- **`constOpenFlag`** — 데이터베이스와 연결하는 옵션을 설정합니다.

LiteDBConnection.openReadWrite 또는 0 설정 시 데이터베이스를 읽기/쓰기가 가능하도록 연결합니다.
LiteDBConnection.openReadWriteCreate 또는 1 설정 시 데이터베이스를 읽기/쓰기/파일생성이 가능하도록 연결합니다.

**Remark**

- openflag 속성값을 설정하지 않으면 LiteDBConnection.openReadWriteCreate 로 적용됩니다.

- 넥사크로 스튜디오는 "openReadWrite", "openReadWriteCreate" 의 Enum 형태로 값을 설정하면 Generate 시 상수값이 설정됩니다.


---

### parent

> DeviceAPI > LiteDBConnection > Property > parent

**Description**

LiteDBConnection 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
LiteDBConnection.parent
```

**Setting Syntax**

```javascript
var objParent = this.LiteDBConnection00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- LiteDBConnection 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### preconnect

> DeviceAPI > LiteDBConnection > Property > preconnect

**Description**

LiteDBConnection 생성 시 데이터베이스를 연결할지 설정하는 속성입니다.

**Setting Syntax**

```javascript
bPreconn ::= 'true' | 'false'
```
```javascript
this.LiteDBConnection00.preconnect = true;
```
- **`"true"`** — LiteDBConnection 생성 시 datasource, openflag 속성에 설정된 값으로 데이터베이스를 연결합니다.
- **`"false"`** — LiteDBConnection 생성 시 데이터베이스를 자동으로 연결하지 않습니다.

**Remark**

- preconnect 속성값을 설정하지 않으면 "false" 로 적용됩니다.


---

### 메서드 (Methods)

### begin

> DeviceAPI > LiteDBConnection > Method > begin

**Description**

LiteDBConnection 에 연결된 데이터베이스에 트랜잭션을 설정하는 메소드입니다.

**Syntax**

```javascript
LiteDBConnection.begin()
```

**Parameters**

this.LiteDBConnection00.begin();

**Return**

없음

**Remark**

- 트랜잭션 설정에 성공하면 onsuccess 이벤트가 발생합니다.
  트랜잭션 설정에 실패하면 onerror 이벤트가 발생합니다.


---

### close

> DeviceAPI > LiteDBConnection > Method > close

**Description**

LiteDBConnection 에 연결된 데이터베이스를 닫는 메소드입니다.

**Syntax**

```javascript
LiteDBConnection.close()
```

**Parameters**

this.LiteDBConnection00.close();

**Return**

없음

**Remark**

- 데이터베이스 닫기에 성공하면 onsuccess 이벤트가 발생합니다.
  데이터베이스 닫기에 실패하면 onerror 이벤트가 발생합니다.

- 이미 닫혀있는 데이터베이스에 close() 메소드 수행 시 정상으로 처리되어 onsuccess 이벤트가 발생합니다.


---

### commit

> DeviceAPI > LiteDBConnection > Method > commit

**Description**

LiteDBConnection 에 연결된 데이터베이스에 트랜잭션 Commit 을 수행하는 메소드입니다.

**Syntax**

```javascript
LiteDBConnection.commit()
```

**Parameters**

this.LiteDBConnection00.commit();

**Return**

없음

**Remark**

- 트랜잭션 Commit 에 성공하면 onsuccess 이벤트가 발생합니다.
  트랜잭션 Commit 에 실패하면 onerror 이벤트가 발생합니다.


---

### isConnected

> DeviceAPI > LiteDBConnection > Method > isConnected

**Description**

LiteDBConnection 에 데이터베이스가 연결되어 있는지 확인하는 메소드입니다.

**Syntax**

```javascript
LiteDBConnection.isConnected()
```

**Parameters**

this.LiteDBConnection00.isConnected();

**Return**

없음

**Remark**

- 데이터베이스가 연결되어 있으면 onsuccess 이벤트가 발생합니다.
  데이터베이스가 연결되어 있지 않으면 onerror 이벤트가 발생합니다.


---

### open

> DeviceAPI > LiteDBConnection > Method > open

**Description**

LiteDBConnection 에 데이터베이스를 연결하는 메소드입니다.

**Syntax**

```javascript
LiteDBConnection.open( [strDataSource [,constOpenFlag]] )
```

**Parameters**

```
연결할 데이터베이스의 위치정보를 문자열로 설정합니다.

절대경로 또는 Alias 를 사용하여 설정합니다.
값 생략 시 datasource 속성값이 적용됩니다.
```

**Return**

메소드 실행에 성공하면 true 를 반환합니다.

파라미터값을 잘 못 설정하면 false 를 반환합니다.

**Remark**

- 데이터베이스 연결에 성공하면 onsuccess 이벤트가 발생합니다.
   데이터베이스 연결에 실패하면 onerror 이벤트가 발생합니다.

- 이미 연결되어 열려 있는 데이터베이스에 open() 메소드 수행 시 정상으로 처리되어 onsuccess 이벤트가 발생합니다.

- strDataSource 에 사용할 수 있는 Alias 실제경로입니다.

	
		Alias
		OS
		Path
		Remark
	

	
		%USERAPP%
		Windows
		C:\Users\[UserName]\AppData\LocalLow\TOBESOFT\Nexacro N\24
		 
	

	
		macOS
		/Users/[UserName]/Library/TOBESOFT/Nexacro N/24
		 
	

	
		Android
		/data/data/[PackageName]/files/NEXACRO/
* Key를 설정한 경우에는 아래와 같이 적용
/data/data/[PackageName]/files/[Key]

		 
	

	
		iOS
		[AppRoot]/Library/Application Support/NEXACRO/ 
		 
	

	
		%USERAPPLOCAL%
		Windows
		C:\Users\[UserName]\AppData\Local
		 
	

	
		macOS
		/Users/[UserName]/Library/Application Support
		 
	

	
		%MYDOCUMENT%
%DOCUMENT%
		Windows
		"내 문서" 로 설정한 위치
		 
	

	
		macOS
		/Users/[UserName]/Documents
		 
	

	
		%SD_CARD%
		Android
		/storage/emulated/0/Android/data/[PackageName]/files/
		 
	

	
		%INSTALLROOT%
		Windows
		Packing 시 Update Type이 "Update(Local+Server)" 또는 "Local"인 경우
%USERAPP%\projects\[Key]\[BootStrapURL]
Packing 시 Update Type이 "Server"인 경우
%USERAPP%
		 
	

	
		%EXECUTE%
		Windows
		NRE: nexacro.exe 실행 위치
WRE: 브라우저 실행 위치
		 
	

	
		macOS
		앱이 설치된 경로
		 
	

	
		%COMPONENTHOME%
		Windows
		C:\Users\[UserName]\AppData\LocalLow\TOBESOFT\Nexacro N\24\Component\[Key]\
		 
	


  * %USERAPP% : 애플리케이션에서 할당받은 공간, 다른 애플리케이션 접근불가
  * %SD_CARD% : 모바일 기기의 외부 저장소 공간, 다른 애플리케이션 접근가능


---

### rollback

> DeviceAPI > LiteDBConnection > Method > rollback

**Description**

LiteDBConnection 에 연결된 데이터베이스에 트랜잭션 RollBack 을 수행하는 메소드입니다.

**Syntax**

```javascript
LiteDBConnection.rollback()
```

**Parameters**

this.LiteDBConnection00.rollback();

**Return**

없음

**Remark**

- 트랜잭션 RollBack 에 성공하면 onsuccess 이벤트가 발생합니다.
  트랜잭션 RollBack 에 실패하면 onerror 이벤트가 발생합니다.

- RollBack 을 수행할 대상이 없는 경우도 정상으로 처리되어 onsuccess 이벤트가 발생합니다.


---

### 이벤트 (Events)

### onerror

> DeviceAPI > LiteDBConnection > Event > onerror

**Description**

LiteDBConnection 에 요청된 작업이 실패했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.LiteDBConnection,e:nexacro.LiteDBErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onsuccess

> DeviceAPI > LiteDBConnection > Event > onsuccess

**Description**

LiteDBConnection 에 요청된 작업이 성공했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsuccess(obj:nexacro.LiteDBConnection,e:nexacro.LiteDBEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

## DeviceAPI > LiteDBStatement

### LiteDBStatement

> DeviceAPI > LiteDBStatement

**Description**

데이터베이스 쿼리 실행을 관리하는 오브젝트입니다.

**Remark**

- LiteDBStatement 오브젝트는 SQLite 데이터베이스만 지원합니다.
  SQLite 데이터베이스에 대한 세부적인 기능은 https://www.sqlite.org/ 를 참고하세요.

**Property**

| Name | Description |
| --- | --- |
| async | LiteDBStatement 에 요청된 작업이 동작되는 방식을 설정하는 속성입니다. |
| id | LiteDBStatement의 고유 식별자를 설정하는 속성입니다. |
| ldbconnection | 데이터베이스 연결을 위해 LiteDBConnection 객체를 설정하는 속성입니다. |
| name | LiteDBStatement 의 이름을 설정하는 속성입니다. |
| parameters | 쿼리문에 사용된 파라미터를 배열로 설정하는 속성입니다. |
| parent | LiteDBStatement 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| query | executeQuery() 또는 executeUpdate() 메소드 수행 시 사용되는 쿼리문을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| close | LiteDBStatement 에서 수행중이던 동작을 중단하는 메소드입니다. |
| executeQuery | Select 쿼리를 수행하는 메소드입니다. |
| executeUpdate | Insert, Update, Delete 쿼리문을 수행하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onerror | LiteDBStatement 에 요청된 작업이 실패했을 때 발생하는 이벤트입니다. |
| onsuccess | LiteDBStatement 에 요청된 작업이 성공했을 때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### async

> DeviceAPI > LiteDBStatement > Property > async

**Description**

LiteDBStatement 에 요청된 작업이 동작되는 방식을 설정하는 속성입니다.

**Setting Syntax**

```javascript
bAsync ::= 'true' | 'false'
```
```javascript
this.LiteDBConnection00.async = false;
```
- **`true`** — LiteDBStatement 에 요청된 작업이 비동기(Async) 로 동작됩니다.
- **`false`** — LiteDBStatement 에 요청된 작업이 동기(Sync) 로 동작됩니다.

**Remark**

- async 속성값을 설정하지 않으면 true 로 적용됩니다.


◆ Mobile 제약

- 모바일 환경에서는 항상 비동기(Async) 로 동작합니다.


---

### id

> DeviceAPI > LiteDBStatement > Property > id

**Description**

LiteDBStatement의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
LiteDBStatement.id
```

**Setting Syntax**

- **`id`** — LiteDBStatement를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### ldbconnection

> DeviceAPI > LiteDBStatement > Property > ldbconnection

**Description**

데이터베이스 연결을 위해 LiteDBConnection 객체를 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.LiteDBStatement00.ldbconnection = this.LiteDBConnection00;
```
- **`objConn`** — 데이터베이스 연결정보가 설정된 LiteDBConnection 객체를 설정합니다.


---

### name

> DeviceAPI > LiteDBStatement > Property > name

**Description**

LiteDBStatement 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
LiteDBStatement.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### parameters

> DeviceAPI > LiteDBStatement > Property > parameters

**Description**

쿼리문에 사용된 파라미터를 배열로 설정하는 속성입니다.

**Setting Syntax**

```javascript
Var arrParam = new Array();

arrParam.add(new LiteDBParameter());
this.LiteDBStatement00.parameters = arrParam;
```
- **`arrParam`** — 쿼리문에 사용된 파라미터를 LiteDBParameter 객체의 배열로 설정합니다.

**Remark**

- parameters 속성은 Collection 접근방식을 사용할 수 있습니다.
  LiteDBStatement.parameters[0], LiteDBStatement.parameters["ChildFrame0"], LiteDBStatement.parameters.length 등의 방법을 사용합니다.


---

### parent

> DeviceAPI > LiteDBStatement > Property > parent

**Description**

LiteDBStatement 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
LiteDBStatement.parent
```

**Setting Syntax**

```javascript
var objParent = this.LiteDBStatement00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- LiteDBStatement 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### query

> DeviceAPI > LiteDBStatement > Property > query

**Description**

executeQuery() 또는 executeUpdate() 메소드 수행 시 사용되는 쿼리문을 설정하는 속성입니다.

**Setting Syntax**

- **`strQuery`** — executeQuery() 또는 executeUpdate() 메소드 수행 시 사용되는 쿼리문을 문자열로 설정합니다.

**Remark**

- 쿼리 문장에 ":ParameterName" 형식으로 설정하면 LiteDBStatement 의 parameters 속성을 통해 접근할 수 있습니다.


---

### 메서드 (Methods)

### close

> DeviceAPI > LiteDBStatement > Method > close

**Description**

LiteDBStatement 에서 수행중이던 동작을 중단하는 메소드입니다.

**Syntax**

```javascript
LiteDBStatement.close()
```

**Parameters**

this.LiteDBStatement00.close();

**Return**

없음

**Remark**

- 수행중이던 동작 중단에 성공하면 onsuccess 이벤트가 발생합니다.
  수행중이던 동작 중단에 실패하면 onerror 이벤트가 발생합니다.


---

### executeQuery

> DeviceAPI > LiteDBStatement > Method > executeQuery

**Description**

Select 쿼리를 수행하는 메소드입니다.

**Syntax**

```javascript
LiteDBStatement.executeQuery([strQuery])
```

**Parameters**

```
수행할 Select 쿼리문을 문자열로 설정합니다.

값 생략 시 query 속성에 설정된 쿼리문이 적용됩니다.
```

**Return**

strQuery 파라미터값(또는 LiteDBStatement 오브젝트의 query 속성값)이 null이거나 String 타입이 아닌 경우 false를 반환합니다.

**Remark**

- SQL문이 에러 없이 실행된 경우 onsuccess 이벤트가 발생합니다.
  onsuccess 이벤트 발생 시 LiteDBEventInfo 오브젝트의 returnvalue 속성값에서 SQL문 실행 결과 데이터를 Dataset 오브젝트로 확인할 수 있습니다.


---

### executeUpdate

> DeviceAPI > LiteDBStatement > Method > executeUpdate

**Description**

Insert, Update, Delete 쿼리문을 수행하는 메소드입니다.

**Syntax**

```javascript
LiteDBStatement.executeUpdate([strQuery])
```

**Parameters**

```
수행할 Insert, Update, Delete 쿼리문을 문자열로 설정합니다.

값 생략 시 query 속성에 설정된 쿼리문이 적용됩니다.
```

**Return**

strQuery 파라미터값(또는 LiteDBStatement 오브젝트의 query 속성값)이 null이거나 String 타입이 아닌 경우 false를 반환합니다.

**Remark**

- SQL문이 에러 없이 실행된 경우 onsuccess 이벤트가 발생합니다.
  onsuccess 이벤트 발생 시 LiteDBEventInfo 오브젝트의 returnvalue 속성값에서 SQL문 실행으로 처리된 Row 숫자를 확인할 수 있습니다.


---

### 이벤트 (Events)

### onerror

> DeviceAPI > LiteDBStatement > Event > onerror

**Description**

LiteDBStatement 에 요청된 작업이 실패했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.LiteDBStatement,e:nexacro.LiteDBErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onsuccess

> DeviceAPI > LiteDBStatement > Event > onsuccess

**Description**

LiteDBStatement 에 요청된 작업이 성공했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsuccess(obj:nexacro.LiteDBStatement,e:nexacro.LiteDBEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

## DeviceAPI > Network

### Network

> DeviceAPI > Network

**Description**

모바일 기기의 네트워크 연결정보를 제공합니다.

**Property**

| Name | Description |
| --- | --- |
| availabletype | 모바일 기기에서 사용가능한 네트워크에 대한 정보를 정수로 갖는 읽기전용 속성입니다. |
| id | Network의 고유 식별자를 설정하는 속성입니다. |
| name | Network 의 이름을 설정하는 속성입니다. |
| parent | Network 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| timestamp | 모바일 기기에서 사용가능한 네트워크를 확인한 시간정보를 갖는 읽기전용 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| isReachable | 모바일 기기에서 특정 URL 의 접속 가능 여부를 반환하는 메소드입니다. |
| watchStart | 모바일 기기에서 네트워크 상태를 일정 간격으로 수신하도록 설정하는 메소드입니다. |
| watchStop | watchStart() 메소드로 설정한 주기적인 네트워크 상태확인을 종료하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onrecverror | 모바일 기기에서 네트워크 상태 확인에 실패했을 때 발생하는 이벤트입니다. |
| onrecvsuccess | 모바일 기기에서 네트워크 상태 확인에 성공했을 때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### availabletype

> DeviceAPI > Network > Property > availabletype

**Description**

모바일 기기에서 사용가능한 네트워크에 대한 정보를 정수로 갖는 읽기전용 속성입니다.

**Setting Syntax**

```javascript
var nType = this.Network00.availabletype ;
```
- **`"0"`** — 사용가능한 네트워크가 없을 때 갖는 값입니다.
- **`"1"`** — "3G" 또는 "LTE" 네트워크를 사용할 때 갖는 값입니다.
- **`"2"`** — "WIFI" 네트워크를 사용할 때 갖는 값입니다.

**Remark**

- onrecvsuccess 이벤트가 발생하면 최신값으로 갱신됩니다.


---

### id

> DeviceAPI > Network > Property > id

**Description**

Network의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
Network.id
```

**Setting Syntax**

- **`id`** — Network를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### name

> DeviceAPI > Network > Property > name

**Description**

Network 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
Network.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### parent

> DeviceAPI > Network > Property > parent

**Description**

Network 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Network.parent
```

**Setting Syntax**

```javascript
var objParent = this.Network00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- Network 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### timestamp

> DeviceAPI > Network > Property > timestamp

**Description**

모바일 기기에서 사용가능한 네트워크를 확인한 시간정보를 갖는 읽기전용 속성입니다.

**Remark**

- JavaScript 의 Date 자료형을 갖습니다.

- onrecvsuccess 이벤트가 발생하면 최신값으로 갱신됩니다.


---

### 메서드 (Methods)

### isReachable

> DeviceAPI > Network > Method > isReachable

**Description**

모바일 기기에서 특정 URL 의 접속 가능 여부를 반환하는 메소드입니다.

**Syntax**

```javascript
Network.isReachable(strURL)
```

**Parameters**

```
접속 가능 여부를 확인하려는 URL을 문자열로 설정합니다.
```

**Return**

strURL 이 생략되거나 허용되지 않는 문자가 사용된 경우에는 "false" 를 반환합니다.
그 외의 정상적인 경우에는 "true" 를 반환합니다.

**Remark**

- 지정된 URL 에 접근이 가능하면 onrecvsuccess 이벤트가 발생합니다.
  지정된 URL 에 접근이 불가능하면 onrecverror 이벤트가 발생합니다.

- 지정된 URL 로 접근 시 일정시간 내에 응답이 없으면 onrecverror 이벤트가 발생합니다.


---

### watchStart

> DeviceAPI > Network > Method > watchStart

**Description**

모바일 기기에서 네트워크 상태를 일정 간격으로 수신하도록 설정하는 메소드입니다.

**Syntax**

```javascript
Network.watchStart(nIntervalTime)
```

**Parameters**

```
네트워크 상태를 수신할 주기를 밀리초(milliseconds) 단위의 숫자로 설정합니다.

주기는 200ms ~ 86,400,000ms 사이의 값을 설정할 수 있습니다.
```

**Return**

nIntervalTime 이 생략되거나 허용되지 않는 문자가 사용된 경우에는 "false" 를 반환합니다.
그 외의 정상적인 경우에는 "true" 를 반환합니다.

**Remark**

- 네트워크 상태가 확인되면 onrecvsuccess 이벤트가 발생합니다.
  네트워크 상태가 확인되지 않으면 onrecverror 이벤트가 발생합니다.

- onrecvsuccess 이벤트가 발생하면 네트워크 정보를 availabletype, timestamp 속성에 저장합니다.


---

### watchStop

> DeviceAPI > Network > Method > watchStop

**Description**

watchStart() 메소드로 설정한 주기적인 네트워크 상태확인을 종료하는 메소드입니다.

**Syntax**

```javascript
Network.watchStop()
```

**Return**

없음


---

### 이벤트 (Events)

### onrecverror

> DeviceAPI > Network > Event > onrecverror

**Description**

모바일 기기에서 네트워크 상태 확인에 실패했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrecverror(obj:nexacro.Network,e:nexacro.NetworkErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onrecvsuccess

> DeviceAPI > Network > Event > onrecvsuccess

**Description**

모바일 기기에서 네트워크 상태 확인에 성공했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrecvsuccess(obj:nexacro.Network,e:nexacro.NetworkEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 네트워크 상태가 확인되면 네트워크 정보를 availabletype, timestamp 속성에 저장합니다.


---

## DeviceAPI > Phone

### Phone

> DeviceAPI > Phone

**Description**

스마트폰에 특화된 기능들을 제공하는 오브젝트로서 전화걸기와 같은 기능들을 제공합니다.

**Remark**

- Phone 오브젝트는 정적 메소드를 제공하므로 new 생성자를 통해 새로운 오브젝트를 생성할 수 없습니다.

**Method**

| Name | Description |
| --- | --- |
| makeCall | 모바일 기기에서 인수로 전달된 번호로 전화연결 화면을 표시하는 정적 메소드입니다. |


---

### 메서드 (Methods)

### makeCall

> DeviceAPI > Phone > Method > makeCall

**Description**

모바일 기기에서 인수로 전달된 번호로 전화연결 화면을 표시하는 정적 메소드입니다.

**Syntax**

```javascript
Phone.makeCall( strPhoneNumber [, bAutoDialing] )
```

**Parameters**

```
전화를 연결할 상대방의 전화번호를 문자열로 설정합니다.
```

**Return**

strPhoneNumber 가 생략되거나 허용되지 않는 문자가 사용된 경우에는 false 를 반환합니다.

그 외의 정상적인 경우에는 true 를 반환합니다.

**Remark**

- 통화기능이 없는 모바일 기기에서 makeCall() 메소드를 수행하거나 전화걸기가 실패하는 경우에는 모바일 기기의 오류 처리 방식을 따릅니다.


---

## DeviceAPI > QRBarcode

### QRBarcode

> DeviceAPI > QRBarcode

**Description**

QR 코드, 바코드를 읽고 정보를 반환하는 오브젝트입니다.

**Remark**

- QRBarcode 오브젝트는 별도 모듈 설치 후 사용할 수 있습니다.
  투비소프트 고객센터에서 모듈 설치 파일을 내려받아 설치할 수 있습니다.

**Property**

| Name | Description |
| --- | --- |
| cameradirection | scan 메서드 실행 시 사용할 카메라를 설정하는 속성입니다. |
| enablesuccessbeep | scan 메서드 실행 성공 시 비프음 출력 여부를 설정하는 속성입니다. |
| formats | Scan 메서드 실행 시 인식할 수 있는 형식을 설정하는 속성입니다. |
| id | QRBarcode의 고유 식별자를 설정하는 속성입니다. |
| prompt | scan 메서드 실행 시 카메라 화면에 표시될 문구를 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| destroy | 스크립트에서 동적으로 생성한 QRBarcode 을(를) 삭제하는 메소드입니다. |
| scan | 디바이스 카메라를 실행해 QR 코드, 바코드를 스캔하는 메서드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onresult | QR 코드, 바코드 스캔에 성공, 실패하거나 스캔을 취소했을 때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### cameradirection

> DeviceAPI > QRBarcode > Property > cameradirection

**Description**

scan 메서드 실행 시 사용할 카메라를 설정하는 속성입니다.

**Syntax**

```javascript
QRBarcode.cameradirection[= enumCameradirection]
```

**Setting Syntax**

```javascript
enumCameradirection :: = 'BACK' | 'FRONT'
```
```javascript
this.QRBarcode00.cameradirection = 'FRONT';
```
- **`"BACK"`** — 후면 카메라를 사용합니다.
- **`"FRONT"`** — 전면 카메라를 사용합니다.

**Remark**

- cameradirection 속성값을 설정하지 않으면 'BACK'으로 적용됩니다.


---

### enablesuccessbeep

> DeviceAPI > QRBarcode > Property > enablesuccessbeep

**Description**

scan 메서드 실행 성공 시 비프음 출력 여부를 설정하는 속성입니다.

**Syntax**

```javascript
QRBarcode.enablesuccessbeep [=bEnablesuccessbeep]
```

**Setting Syntax**

```javascript
bEnablesuccessbeep :: = true | false
```
- **`true`** — scan 메서드 실행 성공 시 비프음을 출력합니다.
- **`false`** — scan 메서드 실행 성공 시 비프음을 출력하지 않습니다.

**Remark**

- enablesuccessbeep 속성값을 설정하지 않으면 false로 적용됩니다.


---

### formats

> DeviceAPI > QRBarcode > Property > formats

**Description**

Scan 메서드 실행 시 인식할 수 있는 형식을 설정하는 속성입니다.

**Syntax**

```javascript
QRBarcode.formats [=strFormats]
```

**Setting Syntax**

```javascript
strFormats ::= 'ALL' | <formatlist>

<formatlist> ::= <format> | <format> ',' <formatlist>
<format> ::= 'CODE_128' | 'CODE_39' | 'CODE_93' | 'CODABAR' | 'DATA_MATRIX' | 'EAN_13' | 'EAN_8' | 'ITF' | 'QR_CODE' | 'UPC_A' | 'UPC_E' | 'PDF417' | 'AZTEC'

* 각 타입값을 콤마(",")로 구분하여 중복 설정할 수 있습니다.
```
```javascript
this.QRBarcode.formats = "ALL";
this.QRBarcode.formats = "CODE_128, CODE_39, CODE_93";
this.QRBarcode.formats = "ALL, CODE_128, CODE_39, CODE_93";
```
- **`"ALL"`** — 지원하는 모든 형식을 인식하도록 설정합니다.
- **`<format>`** — 특정 형식만 인식해야 하는 경우 형식을 직접 지정할 수 있습니다.
지원하는 형식은 아래와 같습니다.
- CODE_128
- CODE_39
- CODE_93
- CODABAR
- DATA_MATRIX
- EAN_13
- EAN_8
- ITF
- QR_CODE
- UPC_A
- UPC_E
- PDF417
- AZTEC

**Remark**

- formats 속성값을 설정하지 않으면 "ALL"로 적용됩니다.

- "ALL, CODE_128, CODE_39"처럼 "ALL"을 포함한 값으로 설정한 경우 "ALL" 이외의 값은 무시됩니다.


---

### id

> DeviceAPI > QRBarcode > Property > id

**Description**

QRBarcode의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
QRBarcode.id
```

**Setting Syntax**

- **`id`** — QRBarcode를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### prompt

> DeviceAPI > QRBarcode > Property > prompt

**Description**

scan 메서드 실행 시 카메라 화면에 표시될 문구를 설정하는 속성입니다.

**Syntax**

```javascript
QRBarcode.prompt [=strPrompt]
```

**Setting Syntax**

- **`strPrompt`** — scan 메서드 실행 시 카메라 화면에 표시될 문구를 설정합니다.

**Remark**

- prompt 속성값을 설정하지 않으면 ""로 적용됩니다.


---

### 메서드 (Methods)

### destroy

> DeviceAPI > QRBarcode > Method > destroy

**Description**

스크립트에서 동적으로 생성한 QRBarcode 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
QRBarcode.destroy()
```

**Parameters**

var bSucc = this.QRBarcode00.destroy();

**Return**

없음

**Remark**

- 동적으로 생성한 QRBarcode 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.


---

### scan

> DeviceAPI > QRBarcode > Method > scan

**Description**

디바이스 카메라를 실행해 QR 코드, 바코드를 스캔하는 메서드입니다.

**Syntax**

```javascript
QRBarcode.scan()
```

**Return**

없음

**Remark**

- QR 코드, 바코드 스캔에 성공하거나 스캔 동작을 취소하면 onresult 이벤트가 발생합니다.


---

### 이벤트 (Events)

### onresult

> DeviceAPI > QRBarcode > Event > onresult

**Description**

QR 코드, 바코드 스캔에 성공, 실패하거나 스캔을 취소했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onresult(obj:nexacro.QRBarcode,e:nexacro.QRBarcodeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

## DeviceAPI > QRCodeGenerator

### QRCodeGenerator

> DeviceAPI > QRCodeGenerator

**Description**

QR 코드 이미지를 생성하기 위한 오브젝트입니다.

**Remark**

- QRCodeGenerator 오브젝트는 별도 모듈 설치 후 사용할 수 있습니다.
  투비소프트 고객센터에서 모듈 설치 파일을 내려받아 설치할 수 있습니다.

**Property**

| Name | Description |
| --- | --- |
| id | QRCodeGenerator의 고유 식별자를 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| destroy | 스크립트에서 동적으로 생성한 QRCodeGenerator 을(를) 삭제하는 메소드입니다. |
| make | QR 코드 이미지를 생성하는 메서드입니다. |


---

### 속성 (Properties)

### id

> DeviceAPI > QRCodeGenerator > Property > id

**Description**

QRCodeGenerator의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
QRCodeGenerator.id
```

**Setting Syntax**

- **`id`** — QRCodeGenerator를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### 메서드 (Methods)

### destroy

> DeviceAPI > QRCodeGenerator > Method > destroy

**Description**

스크립트에서 동적으로 생성한 QRCodeGenerator 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
QRCodeGenerator.destroy()
```

**Parameters**

var bSucc = this.QRCodeGenerator00.destroy();

**Return**

없음

**Remark**

- 동적으로 생성한 QRCodeGenerator 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.


---

### make

> DeviceAPI > QRCodeGenerator > Method > make

**Description**

QR 코드 이미지를 생성하는 메서드입니다.

**Syntax**

```javascript
QRCodeGenerator.make(strValue[, nWidth, nHeight])
```

**Parameters**

```
QR 코드로 생성할 값을 설정합니다.
```

**Return**

Base64 인코딩 된 PNG 이미지 문자열을 반환합니다.


---

## DeviceAPI > Sms

### Sms

> DeviceAPI > Sms

**Description**

단문 메시지 서비스(SMS)를 지원하는 오브젝트로 문자메시지 송수신을 처리합니다.

**Property**

| Name | Description |
| --- | --- |
| id | Sms의 고유 식별자를 설정하는 속성입니다. |
| message | 모바일 기기에서 상대에게 전송할 메시지를 설정하는 속성입니다. |
| name | Sms 의 이름을 설정하는 속성입니다. |
| parent | Sms 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| phonenumber | 모바일 기기에서 메시지를 보낼 상대의 전화번호를 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| deleteMessage | 모바일 기기에 저장되어 있는 SMS 에서 지정한 메시지를 삭제하는 메소드입니다. |
| readMessageList | 모바일 기기에 저장되어 있는 SMS 목록을 반환하는 메소드입니다. |
| recvStart | 모바일 기기에서 SMS 수신 시 이벤트를 발생시키도록 설정하는 메소드입니다. |
| recvStop | recvStart() 메소드로 설정한 이벤트 발생 기능을 종료하는 메소드입니다. |
| sendMessage | 모바일 기기에서 문자 메시지 전송을 위해 SMS 작성화면을 표시하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| cansendmessage | 모바일 기기에서 SMS 메시지가 송신될 때 발생하는 이벤트입니다. |
| ondeletemessage | 모바일 기기에 저장되어 있는 SMS 가 삭제될 때 발생하는 이벤트입니다. |
| onerror | 모바일 기기에서 SMS 관련 처리가 실패했을 때 발생하는 이벤트입니다. |
| onreadmessagelist | 모바일 기기에 저장되어 있는 SMS 목록을 조회할 때 발생하는 이벤트입니다. |
| onrecvmessage | 모바일 기기에서 SMS 메시지가 수신될 때 발생하는 이벤트입니다. |
| onsendmessage | 모바일 기기에서 SMS 메시지가 송신된 후 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### id

> DeviceAPI > Sms > Property > id

**Description**

Sms의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
Sms.id
```

**Setting Syntax**

- **`id`** — Sms를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### message

> DeviceAPI > Sms > Property > message

**Description**

모바일 기기에서 상대에게 전송할 메시지를 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.Sms00.message = "hello";
```
- **`strMessage`** — 상대에게 전송할 메시지를 문자열로 설정합니다.

**Remark**

- 만일 문자열 길이가 80 Bytes가 넘을 경우 통신사 또는 제조사의 기준에 따라 자동으로 MMS/LMS 형태로 변경되어 처리됩니다.
  문자열 길이 제한에 대해 사용자에게 알리는 방법은 통신사 또는 제조사마다 방식이 다릅니다.


---

### name

> DeviceAPI > Sms > Property > name

**Description**

Sms 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
Sms.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### parent

> DeviceAPI > Sms > Property > parent

**Description**

Sms 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Sms.parent
```

**Setting Syntax**

```javascript
var objParent = this.Sms00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- Sms 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### phonenumber

> DeviceAPI > Sms > Property > phonenumber

**Description**

모바일 기기에서 메시지를 보낼 상대의 전화번호를 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.Sms00.phonenumber = "010-1234-5678";
```
- **`strNumber`** — 메시지를 보낼 상대의 전화번호를 문자열로 설정합니다.

전화번호에 "-" 문자를 사용할 수 있습니다.

**Remark**




---

### 메서드 (Methods)

### deleteMessage

> DeviceAPI > Sms > Method > deleteMessage

**Description**

모바일 기기에 저장되어 있는 SMS 에서 지정한 메시지를 삭제하는 메소드입니다.

**Syntax**

```javascript
Sms.deleteMessage(nSmsid)
```

**Parameters**

```
저장되어 있는 SMS 에서 삭제할 메시지의 인덱스값을 설정합니다.

readMessageList() 메소드를 사용하여 반환되는 SMS 목록에서 인덱스값을 확인합니다.
```

**Return**

nSmsid 가 생략되거나 허용되지 않는 문자가 사용된 경우에는 false 를 반환합니다.

그 외의 정상적인 경우에는 true 를 반환합니다.

**Remark**

- iOS/iPadOS NRE 는 지원하지 않는 기능입니다.

- Android KitKat v4.4 버전 이상의 디바이스는 기본 SMS 앱에서만 SMS 메시지를 삭제할 수 있습니다.
   따라서 deleteMessage() 메소드는 Android KitKat v4.4 미만 버전까지 사용할 수 있습니다.


---

### readMessageList

> DeviceAPI > Sms > Method > readMessageList

**Description**

모바일 기기에 저장되어 있는 SMS 목록을 반환하는 메소드입니다.

**Syntax**

```javascript
Sms.readMessageList()
```

**Parameters**

this.Sms00.readMessageList();

**Return**

없음

**Remark**

- readMessageList() 메소드가 정상적으로 수행되면 onreadmessagelist 이벤트가 발생합니다.

- 저장된 SMS 의 텍스트만 반환됩니다.

- Android NRE 는 기기에서 SMS 접근경로를 공개한 경우만 지원가능합니다.
  (지원되지 않는 기기의 경우 onreadmessagelist 이벤트에서 빈 값의 목록을 전달 받습니다)

- iOS/iPadOS NRE 는 지원하지 않는 기능입니다.


---

### recvStart

> DeviceAPI > Sms > Method > recvStart

**Description**

모바일 기기에서 SMS 수신 시 이벤트를 발생시키도록 설정하는 메소드입니다.

**Syntax**

```javascript
Sms.recvStart()
```

**Parameters**

this.Sms00.recvStart();

**Return**

없음

**Remark**

- SMS 가 정상적으로 수신될 때마다 onrecvmessage 이벤트가 발생합니다.
   SMS 수신 시 에러가 발생하면 onerror 이벤트가 발생합니다.

- iOS/iPadOS NRE 는 지원하지 않는 기능입니다.


---

### recvStop

> DeviceAPI > Sms > Method > recvStop

**Description**

recvStart() 메소드로 설정한 이벤트 발생 기능을 종료하는 메소드입니다.

**Syntax**

```javascript
Sms.recvStop()
```

**Parameters**

this.Sms00.recvStop()

**Return**

없음

**Remark**

- SMS 수신에 따른 이벤트 발생을 중지합니다.

- iOS/iPadOS NRE 는 지원하지 않는 기능입니다.


---

### sendMessage

> DeviceAPI > Sms > Method > sendMessage

**Description**

모바일 기기에서 문자 메시지 전송을 위해 SMS 작성화면을 표시하는 메소드입니다.

**Syntax**

```javascript
Sms.sendMessage([strNumber [,strMessage]])
```

**Parameters**

```
메시지를 보낼 상대의 전화번호를 문자열로 설정합니다.

값 생략 시 phonenumber 속성값이 적용됩니다.
```

**Return**

파라미터에 허용되지 않는 문자가 사용된 경우에는 false 를 반환합니다.
그 외의 정상적인 경우에는 true 를 반환합니다.

**Remark**

- MMS 또는 이메일을 전송할 수 있습니다.

- sendMessage() 메소드 수행 시 모바일 기기의 SMS 작성화면이 호출되며, 메시지의 발송여부 또는 전달여부를 이벤트로 확인할 수 없습니다.

- iPad 계열의 디바이스에서는 지원하지 않는 메소드입니다.


---

### 이벤트 (Events)

### cansendmessage

> DeviceAPI > Sms > Event > cansendmessage

**Description**

모바일 기기에서 SMS 메시지가 송신될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
cansendmessage(obj:nexacro.Sms,e:nexacro.SmsEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값을 "true" 로 반환하면 메시지가 송신됩니다.
이벤트에서 리턴값을 "false" 로 반환하면 메시지가 송신되지 않습니다.

이벤트에서 리턴값을 생략하면 "true" 로 적용됩니다.

**Remark**




---

### ondeletemessage

> DeviceAPI > Sms > Event > ondeletemessage

**Description**

모바일 기기에 저장되어 있는 SMS 가 삭제될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondeletemessage(obj:nexacro.Sms,e:nexacro.SmsEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- iOS/iPadOS NRE 는 지원하지 않는 기능입니다.


---

### onerror

> DeviceAPI > Sms > Event > onerror

**Description**

모바일 기기에서 SMS 관련 처리가 실패했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.Sms,e:nexacro.SmsErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- iOS/iPadOS 는 메시지 발신 시 성공/실패 여부를 확인할 수 없어 발신에 실패하더라도 onerror 이벤트가 발생하지 않습니다.


---

### onreadmessagelist

> DeviceAPI > Sms > Event > onreadmessagelist

**Description**

모바일 기기에 저장되어 있는 SMS 목록을 조회할 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onreadmessagelist(obj:nexacro.Sms,e:nexacro.SmsMessageListEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- iOS/iPadOS NRE 는 지원하지 않는 기능입니다.


---

### onrecvmessage

> DeviceAPI > Sms > Event > onrecvmessage

**Description**

모바일 기기에서 SMS 메시지가 수신될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrecvmessage(obj:nexacro.Sms,e:nexacro.SmsEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- iOS/iPadOS NRE 는 지원하지 않는 기능입니다.


---

### onsendmessage

> DeviceAPI > Sms > Event > onsendmessage

**Description**

모바일 기기에서 SMS 메시지가 송신된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
onsendmessage(obj:nexacro.Sms,e:nexacro.SmsEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

## DeviceAPI > Vibrator

### Vibrator

> DeviceAPI > Vibrator

**Description**

모바일 기기의 진동기능을 제공합니다.

**Property**

| Name | Description |
| --- | --- |
| id | Vibrator의 고유 식별자를 설정하는 속성입니다. |
| name | Vibrator 의 이름을 설정하는 속성입니다. |
| parent | Vibrator 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| patterns | 모바일 기기에서 진동 패턴을 배열로 설정하는 속성입니다. |
| repeatcount | 모바일 디바이스에 진동패턴의 반복 횟수를 설정하는 속성입니다. |
| startpos | patterns 속성에 설정된 진동 패턴의 시작위치를 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| hasVibrator | 모바일 기기에서 진동 기능을 사용할 수 있는지 확인하는 메소드입니다. |
| play | 모바일 기기에서 진동을 발생시키는 메소드입니다. |
| stop | 모바일 기기에서 진동을 중지하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onerror | 모바일 기기에서 진동 처리가 실패했을 때 발생하는 이벤트입니다. |
| onplay | 모바일 기기에서 진동 처리가 완료된 후 발생하는 이벤트입니다. |
| onstop | 모바일 기기에서 진동 처리가 중단된 후 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### id

> DeviceAPI > Vibrator > Property > id

**Description**

Vibrator의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
Vibrator.id
```

**Setting Syntax**

- **`id`** — Vibrator를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### name

> DeviceAPI > Vibrator > Property > name

**Description**

Vibrator 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
Vibrator.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### parent

> DeviceAPI > Vibrator > Property > parent

**Description**

Vibrator 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Vibrator.parent
```

**Setting Syntax**

```javascript
var objParent = this.Vibrator00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- Vibrator 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### patterns

> DeviceAPI > Vibrator > Property > patterns

**Description**

모바일 기기에서 진동 패턴을 배열로 설정하는 속성입니다.

**Syntax**

```javascript

```

**Setting Syntax**

```javascript
var arrPattern = new Array(1000, 200, 1000, 2000, 1200, 1000);
this.Vibrator00.patterns = arrPattern;
```
- **`arrPattern`** — 진동 패턴을 "무진동, 진동" 의 쌍으로 이루어진 배열로 설정합니다.

배열의 요소값은 밀리초(milliseconds)단위의 시간으로 설정합니다.

**Remark**

- patterns 속성값을 설정하지 않으면 "{100, 100}" 으로 적용됩니다.

- iOS/iPadOS NRE 는 지원하지 않는 기능입니다.


---

### repeatcount

> DeviceAPI > Vibrator > Property > repeatcount

**Description**

모바일 디바이스에 진동패턴의 반복 횟수를 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.Vibrator00.repeatcount = 10;
```
- **`nRepeatCount`** — patterns 속성값에 설정된 진동패턴이 반복되는 횟수를 숫자로 설정합니다.

0 설정 시 진동패턴이 무한반복됩니다.
1 설정 시 반복없이 1회만 실행됩니다.

**Remark**

- repeatcount 속성값을 설정하지 않으면 1 로 적용됩니다.

- iOS/iPadOS 는 patterns 속성값이 무시되고, 디바이스에서 제공하는 진동패턴이 적용됩니다.


---

### startpos

> DeviceAPI > Vibrator > Property > startpos

**Description**

patterns 속성에 설정된 진동 패턴의 시작위치를 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.Vibrator00.startpos = 10;
```
- **`nStartPos`** — patterns 속성에 설정된 진동패턴 배열값에서 진동을 시작할 배열요소의 인덱스값을 설정합니다.

배열요소의 갯수보다 큰 값을 설정할 수 없습니다.

**Remark**

- startpos 속성값을 설정하지 않으면 0 으로 적용됩니다.

- 지정된 위치부터 패턴의 끝까지 반복 실행됩니다.

- iOS/iPadOS NRE 는 지원하지 않는 기능입니다.


---

### 메서드 (Methods)

### hasVibrator

> DeviceAPI > Vibrator > Method > hasVibrator

**Description**

모바일 기기에서 진동 기능을 사용할 수 있는지 확인하는 메소드입니다.

**Syntax**

```javascript
Vibrator.hasVibrator()
```

**Parameters**

this.Vibrator00.hasVibrator();

**Return**

기기에서 진동기능을 사용할수 있으면 "true" 를 반환합니다.
기기에서 진동기능을 사용할 수 없으면 "false" 를 반환합니다.


---

### play

> DeviceAPI > Vibrator > Method > play

**Description**

모바일 기기에서 진동을 발생시키는 메소드입니다.

**Syntax**

```javascript
Vibrator.play()
```

**Parameters**

this.Vibrator00.play();

**Return**

없음

**Remark**

- Android NRE 는 patterns 속성값에 설정된 순서대로 repeatCount 속성값만큼 반복하여 진동기능을 수행합니다.

- iOS/iPadOS NRE 는 patterns 속성값을 사용할 수 없고, 디바이스가 제공하는 진동을 repeatCount 속성값만큼 반복하여 진동기능을 수행합니다.


---

### stop

> DeviceAPI > Vibrator > Method > stop

**Description**

모바일 기기에서 진동을 중지하는 메소드입니다.

**Syntax**

```javascript
Vibrator.stop()
```

**Parameters**

this.Vibrator00.stop();

**Return**

없음


---

### 이벤트 (Events)

### onerror

> DeviceAPI > Vibrator > Event > onerror

**Description**

모바일 기기에서 진동 처리가 실패했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.Vibrator,e:nexacro.VibratorErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onplay

> DeviceAPI > Vibrator > Event > onplay

**Description**

모바일 기기에서 진동 처리가 완료된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
onplay(obj:nexacro.Vibrator,e:nexacro.VibratorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onstop

> DeviceAPI > Vibrator > Event > onstop

**Description**

모바일 기기에서 진동 처리가 중단된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
onstop(obj:nexacro.Vibrator,e:nexacro.VibratorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

## DeviceAPI > QRBarcode > EventInfo

### DeviceAPI_QRBarcode_EventInfo


---

## DeviceAPI > QRCodeGenerator > OpenSource License

### OpenSource License(QRCodeGenerator)

**QRCode.js**

The MIT License (MIT)
---------------------
Copyright (c) 2012 davidshimjs

Permission is hereby granted, free of charge,
to any person obtaining a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


---

## DeviceAPI > QRBarcode > EventInfo > QRBarcodeEventInfo

### QRBarcodeEventInfo

> DeviceAPI > QRBarcode > EventInfo > QRBarcodeEventInfo

**Description**

QR 코드, 바코드 스캔이 성공, 실패하거나 스캔을 취소했을 때 발생하는 이벤트에 전달되는 EventInfo 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| eventid | 이벤트의 ID를 갖는 읽기전용 속성입니다. |
| format | 스캔한 QR 코드, 바코드의 포맷 정보를 갖는 읽기전용 속성입니다. |
| reason | 이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다. |
| text | QR 코드, 바코드 스캔으로 얻은 값을 갖는 읽기전용 속성입니다. |


---

### 속성 (Properties)

### eventid

> DeviceAPI > QRBarcode > EventInfo > QRBarcodeEventInfo > Property > eventid

**Description**

이벤트의 ID를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
QRBarcodeEventInfo.eventid
```

**Setting Syntax**

```javascript
var strEventid = e.eventid;
```

**Remark**

- 이벤트에 핸들러로 등록된 함수의 이름이 아닌 발생한 이벤트명을 갖습니다.


---

### format

> DeviceAPI > QRBarcode > EventInfo > QRBarcodeEventInfo > Property > format

**Description**

스캔한 QR 코드, 바코드의 포맷 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
QRBarcodeEventInfo.format
```


---

### reason

> DeviceAPI > QRBarcode > EventInfo > QRBarcodeEventInfo > Property > reason

**Description**

이벤트가 발생한 원인에 대한 정보를 정수로 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
QRBarcodeEventInfo.reason
```

**Setting Syntax**

```javascript
var nReason = e.reason;
```
- **`0`** — QR 코드, 바코드 스캔이 성공했을 때 갖는 값입니다.
- **`-1`** — QR 코드, 바코드 스캔이 실패하거나 스캔을 취소했을 때 갖는 값입니다.


---

### text

> DeviceAPI > QRBarcode > EventInfo > QRBarcodeEventInfo > Property > text

**Description**

QR 코드, 바코드 스캔으로 얻은 값을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
QRBarcodeEventInfo.text
```


---
