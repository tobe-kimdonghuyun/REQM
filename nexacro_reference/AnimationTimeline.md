# nexacroN V24 — AnimationTimeline

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 24개

---

## Components > Animation Objects > AnimationTimeline

### AnimationTimeline

> Components > Animation Objects > AnimationTimeline

**Description**

아이템으로 등록된 Animation 오브젝트를 순서대로 수행하는 오브젝트입니다.

**Remark**

- AnimationTimeline 오브젝트는 디자인 시 생성할 수 없습니다.
   스크립트에서 동적 생성 후 addChild() 로 추가하여 사용하여야 합니다.
   AnimationTimeline 오브젝트를 동적으로 생성할 때는 "nexacro." 구문을 반드시 사용하여야 합니다.

- AnimationTimeline 오브젝트에 addTarget() 메소드로 AnimationTimelineItem 오브젝트를 여러개 등록할 수 있습니다.

- AnimationTimeline 오브젝트 실행 시 AnimationTimelineItem 은 등록된 순서로 실행되며, 먼저 실행된 아이템이 종료된 후 다음 아이템이 실행됩니다.

**Property**

| Name | Description |
| --- | --- |
| id | AnimationTimeline 오브젝트의 고유 식별자를 설정하는 속성입니다. |
| items | AnimationTimeline 오브젝트에 등록된 모든 AnimationTimelineItem 오브젝트를 갖고 있는 읽기전용 속성입니다. |
| name | AnimationTimeline 오브젝트의 이름을 설정하는 속성입니다. |
| parent | AnimationTimeline 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addTarget | 애니메이션 효과가 정의된 Animation 오브젝트를 AnimationTimeline 오브젝트에 아이템으로 추가하는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 AnimationTimeline 을(를) 삭제하는 메소드입니다. |
| insertTarget | 애니메이션 효과가 정의된 Animation 오브젝트를 AnimationTimeline 오브젝트에 아이템으로 삽입하는 메소드입니다. |
| pause | 진행중인 애니메이션 효과를 일시 중지하는 메소드입니다. |
| play | 애니메이션 효과를 시작하는 메소드입니다. |
| removeTarget | AnimationTimeline 오브젝트에 아이템으로 추가된 AnimationTimelineItem 오브젝트를 제거하는 메소드입니다. |
| reverse | 애니메이션 효과의 방향을 반대로 변경하는 메소드입니다. |
| seek | 애니메이션 효과의 진행위치를 특정 시간으로 이동하는 메소드입니다. |
| stop | 진행중인 애니메이션 효과를 중지하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onbegin | 애니메이션 효과가 시작됐을 때 발생하는 이벤트입니다. |
| oncomplete | 애니메이션 효과가 종료됐을 때 발생하는 이벤트입니다. |
| onrun | 애니메이션 효과가 실행중일 때 Tick 마다 발생하는 이벤트입니다. |
| onupdate | play() 메소드가 실행되면 애니메이션 효과가 종료될 때까지 Tick 마다 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### id

> Components > Animation Objects > AnimationTimeline > Property > id

**Description**

AnimationTimeline 오브젝트의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
AnimationTimeline.id
```

**Setting Syntax**

```javascript
var objAniTime = new nexacro.Animation( "Animation00", this );
```
- **`id`** — AnimationTimeline 오브젝트를 구별할 수 있는 유일값을 설정합니다.

**Remark**

- new 연산자로 AnimationTimeline 오브젝트를 생성할 때 id 속성값과 name 속성값이 동일하게 설정됩니다.

- 일반적으로 addChild(), insertChild() 메소드로 오브젝트를 자식으로 등록할 때 설정하는 값과 동일하게 설정합니다.


---

### items

> Components > Animation Objects > AnimationTimeline > Property > items

**Description**

AnimationTimeline 오브젝트에 등록된 모든 AnimationTimelineItem 오브젝트를 갖고 있는 읽기전용 속성입니다.

**Syntax**

```javascript
AnimationTimeline.items
```

**Setting Syntax**

```javascript
var arrAniTimeItem = this.AnimationTimeline00.items[0];
```
- **`itmes`** — addTarget() 또는 insertTarget() 메소드를 사용하여 등록된 AnimationTimelineItem 오브젝트를 Collection 형태로 갖습니다.

**Remark**

- items 속성은 Collection 접근방식을 사용할 수 있습니다.
   this.AnimationTimeline00.items[0], this.AnimationTimeline00.items["AnimationTimelineItem00"], 
   this.AnimationTimline00.items.length 등의 방법을 사용합니다.


---

### name

> Components > Animation Objects > AnimationTimeline > Property > name

**Description**

AnimationTimeline 오브젝트의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
AnimationTimeline.name
```

**Setting Syntax**

```javascript
var objAniTime = new nexacro.AnimationTimeline( "Animation00", this );
```
- **`name`** — AnimationTimeline 오브젝트를 구별할 수 있는 유일값을 설정합니다.

**Remark**

- new 연산자로 AnimationTimeline 오브젝트를 생성할 때 id 속성값과 name 속성값이 동일하게 설정됩니다.

- 일반적으로 addChild(), insertChild() 메소드로 오브젝트를 자식으로 등록할 때 설정하는 값과 동일하게 설정합니다.


---

### parent

> Components > Animation Objects > AnimationTimeline > Property > parent

**Description**

AnimationTimeline 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
AnimationTimeline.parent
```

**Remark**

- 일반적으로 addChild() 메소드를 사용하여 AnimationTimeline 를 추가한 오브젝트가 parent 속성에 설정됩니다.

- AnimationTimeline 가 어디에도 속해있지 않거나 부모 오브젝트로부터 제거되면 null 값을 갖습니다.


---

### 메서드 (Methods)

### addTarget

> Components > Animation Objects > AnimationTimeline > Method > addTarget

**Description**

애니메이션 효과가 정의된 Animation 오브젝트를 AnimationTimeline 오브젝트에 아이템으로 추가하는 메소드입니다.

**Syntax**

```javascript
AnimationTimeline.addTarget( strID, objAnimation, nOffset );
```

**Parameters**

```
AnimationTimeline 오브젝트에 추가될 AnimationTimelineItem 오브젝트의 ID 를 문자열로 설정합니다.
```

**Return**

추가된 AnimationTimelineItem 오브젝트의 인덱스를 반환합니다.

AnimationTimelineItem 오브젝트가 정상적으로 추가되지 않은 경우에는 -1 을 반환합니다.

**Remark**

- AnimationTimelineItem 에 정의된 Animation 오브젝트의 delay 속성이 설정되어 있다면 
   "offset 속성값 + delay 속성값" 만큼 지연된 후 애니메이션 효과가 시작됩니다.

- addTarget() 메소드가 정상적으로 실행되면 items 속성에 AnimationTimelineItem 오브젝트가 아이템으로 추가됩니다.


---

### destroy

> Components > Animation Objects > AnimationTimeline > Method > destroy

**Description**

스크립트에서 동적으로 생성한 AnimationTimeline 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
AnimationTimeline.destroy()
```

**Return**

AnimationTimeline 이(가) 정상적으로 삭제되면 true 를 반환합니다.

AnimationTimeline 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 AnimationTimeline 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChild


---

### insertTarget

> Components > Animation Objects > AnimationTimeline > Method > insertTarget

**Description**

애니메이션 효과가 정의된 Animation 오브젝트를 AnimationTimeline 오브젝트에 아이템으로 삽입하는 메소드입니다.

**Syntax**

```javascript
AnimationTimeline.insertTarget( nIndex, strID, objAnimation, nOffset );
```

**Parameters**

```
AnimationTimelineItem 오브젝트가 삽입될 위치의 인덱스를 숫자로 설정합니다.

인덱스는 0 부터 시작하며 "0 ~ 아이템갯수"까지 설정할 수 있습니다.
잘못된 인덱스값 설정 시 마지막 위치에 추가됩니다.
```

**Return**

없음

**Remark**

- AnimationTimelineItem 에 정의된 Animation 오브젝트의 delay 속성이 설정되어 있다면 
   "offset 속성값 + delay 속성값" 만큼 지연된 후 애니메이션 효과가 시작됩니다.

- insertTarget() 메소드가 정상적으로 실행되면 items 속성에 AnimationTimelineItem 오브젝트가 지정된 위치에 아이템으로 삽입됩니다.
   삽입된 위치 이후에 있는 AnimationTimelineItem 의 인덱스는 자동으로 "1"씩 증가합니다.


---

### pause

> Components > Animation Objects > AnimationTimeline > Method > pause

**Description**

진행중인 애니메이션 효과를 일시 중지하는 메소드입니다.

**Syntax**

```javascript
AnimationTimeline.pause()
```

**Parameters**

this.AnimationTimeline00.pause();

**Return**

메소드 실행에 성공하면 true 를 반환합니다.

메소드 실행에 실패하면 false 를 반환합니다.

**Remark**

- 일시 중지된 상태에서 AnimationTimelineItem 오브젝트의 속성값을 변경해도 반영되지 않습니다.
   등록된 아이템의 애니메이션 효과가 모두 종료되거나 stop() 메소드를 실행하여야 변경된 속성값이 반영됩니다.

- 일시 중지된 애니메이션 효과는 play() 메소드를 실행하여 다시 진행시킬 수 있습니다.

- 일시 중지된 애니메이션 효과를 진행되던 방향의 반대로 진행하려면 reverse() 메소드 실행 후 play() 메소드를 실행하여야 합니다.


---

### play

> Components > Animation Objects > AnimationTimeline > Method > play

**Description**

애니메이션 효과를 시작하는 메소드입니다.

**Syntax**

```javascript
AnimationTimeline.play()
```

**Parameters**

this.Animation00Timeline.play();

**Return**

메소드 실행에 성공하면 true 를 반환합니다.

메소드 실행에 실패하면 false 를 반환합니다.

**Remark**

- play() 메소드 실행 시 AnimationTimeline 오브젝트에 등록된 AnimationTimelineItem 오브젝트를 차례로 실행합니다.

- 애니메이션 효과는 대상 컴포넌트의 속성값을 실제로 변경시키며 진행됩니다.
   따라서, 애니메이션 효과가 종료되면 변경된 속성값이 유지됩니다.

- 애니메이션 효과가 진행되는 중에 play() 메소드를 실행하면 애니메이션 효과가 처음부터 다시 실행됩니다.

- pause() 메소드에 의해 일시 중지된 애니메이션 효과는 play() 메소드를 실행하여 다시 진행시킬 수 있습니다.

- offset 속성값 또는 delay 속성값이 설정되어 있으면 설정된 시간만큼 지연된 후 애니메이션 효과가 시작됩니다.


---

### removeTarget

> Components > Animation Objects > AnimationTimeline > Method > removeTarget

**Description**

AnimationTimeline 오브젝트에 아이템으로 추가된 AnimationTimelineItem 오브젝트를 제거하는 메소드입니다.

**Syntax**

```javascript
AnimationTimeline.removeTarget( strID );
```

**Parameters**

```
AnimationTimeline 오브젝트에 등록된 아이템에서 제거할 AnimationTimelineItem 오브젝트의 ID 를 문자열로 설정합니다.
```

**Return**

AnimationTimeline 오브젝트에서 제거된 AnimationTimelineItem 오브젝트를 반환합니다.

**Remark**

- removeTarget() 메소드가 정상적으로 실행되면 items 속성에서 AnimationTimelineItem 오브젝트가 제거됩니다.


---

### reverse

> Components > Animation Objects > AnimationTimeline > Method > reverse

**Description**

애니메이션 효과의 방향을 반대로 변경하는 메소드입니다.

**Syntax**

```javascript
AnimationTimeline.reverse()
```

**Parameters**

this.AnimationTimeline00.reverse()

**Return**

메소드 실행에 성공하면 true 를 반환합니다.

메소드 실행에 실패하면 false 를 반환합니다.

**Remark**

- reverse() 메소드는 play() 메소드가 한번 이상 수행되어 애니메이션 효과가 실행된 방향의 정보가 있을 때만 사용할 수 있습니다.

- 애니메이션 효과가 진행중일 때 reverse() 메소드를 실행하면 애니메이션 효과의 방향이 즉시 변경됩니다.

- 애니메이션 효과가 진행중이 아닐 때 reverse() 메소드를 실행하면 진행되는 방향의 정보만 변경됩니다.
   따라서 변경된 방향으로 애니메이션 효과를 실행하려면 play() 메소드를 사용하여야 합니다.


---

### seek

> Components > Animation Objects > AnimationTimeline > Method > seek

**Description**

애니메이션 효과의 진행위치를 특정 시간으로 이동하는 메소드입니다.

**Syntax**

```javascript
AnimationTimeline.seek( nMSecond )
```

**Parameters**

```
이동시킬 위치의 시간을 밀리세컨드 단위의 숫자로 설정합니다.

전체 진행시간 범위 안의 값을 설정하여야 합니다.
진행시간을 벗어난 값을 설정하면 최소 또는 최대값으로 적용됩니다.
```

**Return**

메소드 실행에 의해 실제로 변경된 위치의 진행시간을 반환합니다.

**Remark**

- seek() 메소드 수행 시 애니메이션 효과의 진행위치가 즉시 변경됩니다.


---

### stop

> Components > Animation Objects > AnimationTimeline > Method > stop

**Description**

진행중인 애니메이션 효과를 중지하는 메소드입니다.

**Syntax**

```javascript
AnimationTimeline.stop()
```

**Parameters**

this.AnimationTimeline00.stop()

**Return**

메소드 실행에 성공하면 true 를 반환합니다.

메소드 실행에 실패하면 false 를 반환합니다.

**Remark**

- 애니메이션 효과가 진행중일 때 stop() 메소드를 실행하면 대상 컴포넌트는 애니메이션 효과가 진행되기 전 상태로 돌아갑니다.
   애니메이션 효과가 완료된 후 stop() 메소드를 실행하면 대상 컴포넌트는 최종 상태를 유지합니다.

- 애니메이션 효과가 진행중일 때 AnimationTimelineItem 오브젝트의 속성값을 변경해도 반영되지 않습니다.
   애니메이션 효과가 종료되거나 stop() 메소드를 실행하여야 변경된 속성값이 반영됩니다.


---

### 이벤트 (Events)

### onbegin

> Components > Animation Objects > AnimationTimeline > Event > onbegin

**Description**

애니메이션 효과가 시작됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onbegin(obj:nexacro.AnimationTimeline,e:nexacro.AnimationEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 실제 애니메이션 효과가 시작되기 전에 발생하는 이벤트입니다.
   delay 속성값이 설정되어 있다면 해당 값만큼 지연 된 후 이벤트가 발생합니다.


---

### oncomplete

> Components > Animation Objects > AnimationTimeline > Event > oncomplete

**Description**

애니메이션 효과가 종료됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
oncomplete(obj:nexacro.AnimationTimeline,e:nexacro.AnimationEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onrun

> Components > Animation Objects > AnimationTimeline > Event > onrun

**Description**

애니메이션 효과가 실행중일 때 Tick 마다 발생하는 이벤트입니다.

**Syntax**

```javascript
onrun(obj:nexacro.AnimationTimeline,e:nexacro.AnimationEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 첫번째 AnimationTimelineItem 의 offset 속성값 또는 delay 속성값에 의해 애니메이션 효과가 지연중일 때는 이벤트가 발생하지 않습니다.
   onbegin 이벤트가 발생된 후 부터 발생하는 이벤트입니다.

- Tick 은 일반적으로 초당 60 회 발생하지만 W3C 권장 사항에 따라 대부분의 웹 브라우저에서 표시 새로고침 빈도에 따라 발생합니다.
   Tick 발생은 다른 작업에 의해 일시 중지될 수 있으므로 항상 일정한 간격으로 발생하지 않습니다.


---

### onupdate

> Components > Animation Objects > AnimationTimeline > Event > onupdate

**Description**

play() 메소드가 실행되면 애니메이션 효과가 종료될 때까지 Tick 마다 발생하는 이벤트입니다.

**Syntax**

```javascript
onupdate(obj:nexacro.AnimationTimeline,e:nexacro.AnimationEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 첫번째 AnimationTimelineItem 의 offset 속성값 또는 delay 속성값에 의해 애니메이션 효과가 지연중일 때도 이벤트가 발생합니다.
   play() 메소드가 실행되면 즉시 발생하는 이벤트입니다.

- Tick 은 일반적으로 초당 60 회 발생하지만 W3C 권장 사항에 따라 대부분의 웹 브라우저에서 표시 새로고침 빈도에 따라 발생합니다.
   Tick 발생은 다른 작업에 의해 일시 중지될 수 있으므로 항상 일정한 간격으로 발생하지 않습니다.


---

## Components > Animation Objects > AnimationTimeline > Objects

### Objects

> Components > Animation Objects > AnimationTimeline > Objects

**Description**

AnimationTimeline 오브젝트에 등록되는 아이템 오브젝트입니다.


---

## Components > Animation Objects > AnimationTimeline > AnimationTimelineItem

### AnimationTimelineItem

> Components > Animation Objects > AnimationTimeline > Objects > AnimationTimelineItem

**Description**

AnimationTimeline 오브젝트에서 addTarget() 메소드 실행 시 파라미터 값을 기준으로 생성되는 아이템 오브젝트입니다.

**Remark**

- addTarget() 메소드 실행 시 AnimationTimelineItem 오브젝트가 생성되어 AnimationTimeline 오브젝트에 아이템으로 등록됩니다.

- AnimationTimeline 오브젝트에 addTarget() 메소드로 AnimationTimelineitem 오브젝트를 여러개 등록할 수 있습니다.

- AnimationTimeline 오브젝트 실행 시 AnimationTimelineItem 은 등록된 순서로 실행되며, 먼저 실행된 아이템이 종료된 후 다음 아이템이 실행됩니다.

**Property**

| Name | Description |
| --- | --- |
| animationid | 애니메이션 효과가 정의된 Animation 오브젝트의 ID 를 설정하는 속성입니다. |
| id | AnimationTimelineItem 오브젝트의 고유 식별자가 설정되는 속성입니다. |
| offset | AnimationTimelineItem 오브젝트의 시작이 지연되는 시간을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| destroy | 스크립트에서 동적으로 생성한 AnimationTimelineItem 을(를) 삭제하는 메소드입니다. |


---

### 속성 (Properties)

### animationid

> Components > Animation Objects > AnimationTimeline > Objects > AnimationTimelineItem > Property > animationid

**Description**

애니메이션 효과가 정의된 Animation 오브젝트의 ID 를 설정하는 속성입니다.

**Syntax**

```javascript
AnimationTimelineItem.animationid
```

**Setting Syntax**

```javascript
var objAniTime = new nexacro.AnimationTimeline("AnimationTimeline00", this); 

objAniTime.addTarget( "AniTimeItem00", this.Animation00, 0 );
```
- **`animationid`** — 애니메이션 효과가 정의된 Animation 오브젝트를 addTarget() 또는 insertTarget() 메소드를 사용하여 등록합니다.

addTarget() 메소드 사용 시 두번째 파라미터가 AnimationTimelineItem 오브젝트의 animationid 값으로 설정됩니다.
insertTarget() 메소드 사용 시 세번째 파라미터가 AnimationTimelineItem 오브젝트의 animationid 값으로 설정됩니다.

**Remark**

- AnimationTimelineItem 오브젝트에 Animation 오브젝트를 한개만 설정할 수 있습니다.

- AnimationTimelineItem 오브젝트는 등록된 순서대로 하나씩 실행됩니다.


---

### id

> Components > Animation Objects > AnimationTimeline > Objects > AnimationTimelineItem > Property > id

**Description**

AnimationTimelineItem 오브젝트의 고유 식별자가 설정되는 속성입니다.

**Syntax**

```javascript
AnimationTimelineItem.id
```

**Setting Syntax**

```javascript
var iItemIdx = this.Animation00.addTarget( "AnimationTimelineItem00", this.Animation00, 0 );
```
- **`id`** — AnimationTimeline 오브젝트의 addTarget() 메소드 실행 시 첫번째 파라미터가 id 값으로 설정됩니다.

AnimationTimeline 오브젝트의 insertTarget() 메소드 실행 시 두번째 파라미터가 id 값으로 설정됩니다.


---

### offset

> Components > Animation Objects > AnimationTimeline > Objects > AnimationTimelineItem > Property > offset

**Description**

AnimationTimelineItem 오브젝트의 시작이 지연되는 시간을 설정하는 속성입니다.

**Syntax**

```javascript
AnimationTimelineItem.offset
```

**Setting Syntax**

```javascript
var objAniTime = new nexacro.AnimationTimeline("AnimationTimeline00", this); 

objAniTime.addTarget( "AniTimeItem00", this.Animation00, 0 );
```
- **`offset`** — 애니메이션 효과의 시작이 지연될 시간을 밀리세컨드 단위로 설정합니다.

이전 애니메이션 종료 후 현재 AnimationTimelineItem 의 애니메이션 시작이 설정한 시간동안 지연됩니다.

**Remark**

- offset 속성값을 설정하지 않으면 "0" 으로 적용됩니다.

- AnimationTimelineItem 에 정의된 Animation 오브젝트의 delay 속성이 설정되어 있다면 
   "offset 속성값 + delay 속성값" 만큼 지연된 후 애니메이션 효과가 시작됩니다.


---

### 메서드 (Methods)

### destroy

> Components > Animation Objects > AnimationTimeline > Objects > AnimationTimelineItem > Method > destroy

**Description**

스크립트에서 동적으로 생성한 AnimationTimelineItem 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
AnimationTimelineItem.destroy()
```

**Return**

AnimationTimelineItem 이(가) 정상적으로 삭제되면 true 를 반환합니다.

AnimationTimelineItem 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 AnimationTimelineItem 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChild


---
