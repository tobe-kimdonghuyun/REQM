# nexacroN V24 — Animation

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 31개

---

## Components > Animation Objects > Animation

### Animation

> Components > Animation Objects > Animation

**Description**

아이템으로 등록된 컴포넌트에 애니메이션 효과를 적용하는 오브젝트입니다.

**Remark**

- Animation 오브젝트는 디자인 시 생성할 수 없습니다.
   스크립트에서 동적 생성 후 addChild() 로 추가하여 사용하여야 합니다.
   Animation 오브젝트를 동적으로 생성할 때는 "nexacro." 구문을 반드시 사용하여야 합니다.

- Animation 오브젝트에 addTarget() 메소드로 AnimationItem 오브젝트를 여러개 등록할 수 있습니다.

- Animation 오브젝트 실행 시 아이템으로 등록된 컴포넌트에 애니메이션 효과를 동시에 적용합니다.

**Property**

| Name | Description |
| --- | --- |
| beziercurve | easing 속성값이 "custom" 일 때 애니메이션 효과에 적용될 Bezier 곡선을 직접 설정하는 속성입니다. |
| delay | 애니메이션 효과의 시작이 지연되는 시간을 설정하는 속성입니다. |
| direction | 애니메이션 효과가 진행되는 방향을 설정하는 속성입니다. |
| duration | 애니메이션 효과가 실행되는 시간을 설정하는 속성입니다. |
| easing | 애니메이션 효과에 적용될 Interpolation 함수를 설정하는 속성입니다. |
| elasticity | 애니메이션 효과에 적용될 탄력도를 설정하는 속성입니다. |
| id | Animation 오브젝트의 고유 식별자를 설정하는 속성입니다. |
| items | Animation 오브젝트에 등록된 모든 AnimationItem 오브젝트를 갖고 있는 읽기전용 속성입니다. |
| loop | 애니메이션 효과의 반복 여부를 설정하는 속성입니다. |
| loopcount | loop 속성값이 true 일 때 애니메이션 효과가 반복되는 횟수를 설정하는 속성입니다. |
| name | Animation 오브젝트의 이름을 설정하는 속성입니다. |
| parent | Animation 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addTarget | 애니메이션 효과가 적용될 대상 컴포넌트를 Animation 오브젝트에 아이템으로 추가하는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 Animation 을(를) 삭제하는 메소드입니다. |
| pause | 진행중인 애니메이션 효과를 일시 중지하는 메소드입니다. |
| play | 애니메이션 효과를 시작하는 메소드입니다. |
| removeTarget | Animation 오브젝트에 아이템으로 추가된 AnimationItem 오브젝트를 제거하는 메소드입니다. |
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

### beziercurve

> Components > Animation Objects > Animation > Property > beziercurve

**Description**

easing 속성값이 "custom" 일 때 애니메이션 효과에 적용될 Bezier 곡선을 직접 설정하는 속성입니다.

**Syntax**

```javascript
Animation.beziercurve[= strBezier]
```

**Setting Syntax**

```javascript
this.Animation00.beziercurve = "0, .76, 1, -0.79";
```
- **`strBezier`** — 애니메이션 효과에 적용될 Bezier 곡선의 조절점 값을 "," 로 구분하여 설정합니다.

"In" 지점의 조절점 좌표값을 첫번째, 두번째 파라미터로 설정합니다.
"Out" 지점의 조절점 좌표값을 세번째, 네번째 파라미터로 설정합니다.

**Remark**

- easing 속성값이 "custom" 인 경우만 적용되는 속성입니다.

- Bezier 곡선의 시작점은 "0, 0", 끝점은 "1, 1" 로 정의됩니다.


---

### delay

> Components > Animation Objects > Animation > Property > delay

**Description**

애니메이션 효과의 시작이 지연되는 시간을 설정하는 속성입니다.

**Syntax**

```javascript
Animation.delay[= nDelay]
```

**Setting Syntax**

```javascript
this.Animation00.delay = 5000;
```
- **`nDelay`** — 애니메이션 효과의 시작이 지연되는 시간을 밀리세컨드 단위로 설정합니다.

**Remark**

- delay 속성값을 설정하지 않으면 0 으로 적용됩니다.

- Animation 오브젝트가 AnimationTimeline 의 아이템으로 실행될 경우
   "offset 속성값 + delay 속성값" 만큼 지연된 후 애니메이션 효과가 시작됩니다.


---

### direction

> Components > Animation Objects > Animation > Property > direction

**Description**

애니메이션 효과가 진행되는 방향을 설정하는 속성입니다.

**Syntax**

```javascript
Animation.direction[= enumDirect]
```

**Setting Syntax**

```javascript
enumDirect ::= 'normal' | 'reverse' | 'alternate'
```
```javascript
this.Animation00.direction = "alternate";
```
- **`"normal"`** — AnimationItem 오브젝트의 props 속성에 설정된 속성값 순서대로 애니메이션 효과가 진행됩니다.
- **`"reverse"`** — AnimationItem 오브젝트의 props 속성에 설정된 속성값 순서의 반대로 애니메이션 효과가 진행됩니다.

대상 컴포넌트가 props 속성에 설정된 마지막 속성값 위치로 이동된 후 애니메이션 효과가 진행됩니다.
- **`"alternate"`** — 애니메이션 효과가 정방향과 역방향 순서로 번갈아 진행됩니다.

AnimationItem 오브젝트의 props 속성에 설정된 속성값 순서대로 애니메이션 효과가 진행된 후 반대순서로 진행됩니다.

**Remark**

- direction 속성값을 설정하지 않으면 "normal" 로 적용됩니다.

- direction 속성값이 "alternate" 일 때 loop 속성값이 false 이면 애니메이션 효과가 왕복되지 않고 반만 진행됩니다.
   1회 왕복되는 효과를 적용하려면 loop 속성값을 true 로 설정하고, loopcount 속성값을 2 로 설정하여야 합니다.


---

### duration

> Components > Animation Objects > Animation > Property > duration

**Description**

애니메이션 효과가 실행되는 시간을 설정하는 속성입니다.

**Syntax**

```javascript
Animation.duration[= nDuration]
```

**Setting Syntax**

```javascript
this.Animation00.duration = 3000;
```
- **`nDuration`** — 애니메이션 효과가 실행되는 시간을 밀리세컨드 단위로 설정합니다.

**Remark**

- duration 속성값을 설정하지 않으면 1000 으로 적용됩니다.

- duration 속성에 설정한 시간동안 AnimationItem 으로 등록된 컴포넌트에 애니메이션 효과로 적용합니다.


---

### easing

> Components > Animation Objects > Animation > Property > easing

**Description**

애니메이션 효과에 적용될 Interpolation 함수를 설정하는 속성입니다.

**Syntax**

```javascript
Animation.easing[= enumEasing]
```

**Setting Syntax**

```javascript
<enumEasing> ::= 'linear' 
                        | 'easeinsine' | 'easeoutsine' | 'easeinoutsine' | 'easeinquad' | 'easeoutquad' | 'easeinoutquad'
                        | 'easeincubic' | 'easeoutcubic' | 'easeinoutcubic' | 'easeinquart' | 'easeoutquart' | 'easeinoutquart'
                        | 'easeinquint' | 'easeoutquint'| 'easeinoutquint' | 'easeinexpo' | 'easeoutexpo' | 'easeinoutexpo'
                        | 'easeincirc' | 'easeoutcirc'  | 'easeinoutcirc' | 'easeinback' | 'easeoutback' | 'easeinoutback'
                        | 'easeinelastic' | 'easeoutelastic' | 'easeinoutelastic' | 'easeinbounce' | 'easeoutbounce' | 'easeinoutbounce'
                        | 'custom'
```
```javascript
this.Animation00.easing = "linear"; 
this.Animation00.easing = "easeoutquad"; 
this.Animation00.easing = "easeinoutquad"; 
this.Animation00.easing = "custom";
```
- **`enumEasing`** — Animation 효과에 적용될 Interpolation 함수를 설정합니다.

"linear"
, "easeinback", "easeinbounce", "easeincubic", "easeincirc", "easeinelastic", "easeinexpo"
, "easeinquad", "easeinquart", "easeinquint", "easeinsine"
, "easeoutback", "easeoutbounce", "easeoutcubic", "easeoutcirc", "easeoutelastic"
, "easeoutexpo", "easeoutquad", "easeoutquart", "easeoutquint", "easeoutsine"
, "easeinoutback", "easeinoutbounce", "easeinoutcubic", "easeinoutcirc", "easeinoutelastic"
, "easeinoutexpo", "easeinoutquad", "easeinoutquart", "easeinoutquint", "easeinoutsine"
, "custom"

중 하나의 값을 설정합니다.

"custom" 설정 시 beziercurve 속성에 정의된 값이 적용됩니다.

**Remark**

- easing 속성값을 설정하지 않으면 "easeoutelastic" 값으로 적용됩니다.

- easing 속성값은 "ease" + "in | out | inout" + "sine | quad | cubic | quart | quint | expo | circ | back | elastic | bounce" 조합으로 설정할 수 있습니다.

- <enumEasing> 값에 따른 Interpolation 함수 효과는 "여기"를 참조하세요.


---

### elasticity

> Components > Animation Objects > Animation > Property > elasticity

**Description**

애니메이션 효과에 적용될 탄력도를 설정하는 속성입니다.

**Syntax**

```javascript
Animation.elasticity[= nElasticity]
```

**Setting Syntax**

```javascript
this.Animation00.elasticity = 1000;
```
- **`nElasticity`** — 애니메이션 효과에 적용될 탄력도를 정수값으로 설정합니다.

**Remark**

- elasticity 속성값을 설정하지 않으면 0 으로 적용됩니다.

- elasticity 속성값을 크게 설정할 수록 easing 속성에 설정한 Interpolation 함수의 변동폭이 커집니다.


---

### id

> Components > Animation Objects > Animation > Property > id

**Description**

Animation 오브젝트의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
Animation.id
```

**Setting Syntax**

```javascript
var objAni = new nexacro.Animation( "Animation00", this );
```
- **`id`** — Animation 오브젝트를 구별할 수 있는 유일값을 설정합니다.

**Remark**

- new 연산자로 Animation 오브젝트를 생성할 때 id 속성값과 name 속성값이 동일하게 설정됩니다.

- 일반적으로 addChild(), insertChild() 메소드로 오브젝트를 자식으로 등록할 때 설정하는 값과 동일하게 설정합니다.


---

### items

> Components > Animation Objects > Animation > Property > items

**Description**

Animation 오브젝트에 등록된 모든 AnimationItem 오브젝트를 갖고 있는 읽기전용 속성입니다.

**Syntax**

```javascript
Animation.items
```

**Setting Syntax**

```javascript
var arrAniItem = this.Animation00.items[0];
```
- **`items`** — addTarget() 메소드를 사용하여 등록된 AnimationItem 오브젝트를 Collection 형태로 갖습니다.

**Remark**

- items 속성은 Collection 접근방식을 사용할 수 있습니다.
   this.Animation00.items[0], this.Animation00.items["AnimationItem00"], this.Animation00.items.length 등의 방법을 사용합니다.


---

### loop

> Components > Animation Objects > Animation > Property > loop

**Description**

애니메이션 효과의 반복 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Animation.loop[= bLoop]
```

**Setting Syntax**

```javascript
bLoop ::= 'true' | 'false'
```
```javascript
this.Animation00.loop = true;
```
- **`"true"`** — loopcount 속성에 설정된 횟수만큼 반복되어 실행됩니다.
- **`"false"`** — 애니메이션 효과가 1번 실행됩니다.

**Remark**

- loop 속성값을 설정하지 않으면 false 로 적용됩니다.

- direction 속성값이 "alternate" 일 때 loop 속성값이 false 이면 애니메이션 효과가 왕복되지 않고 반만 진행됩니다.
   1회 왕복되는 효과를 적용하려면 loop 속성값을 true 로 설정하고, loopcount 속성값을 2 로 설정하여야 합니다.

- Animation 오브젝트가 AnimationTimeline 오브젝트의 아이템으로 등록될 경우 항상 false 로 적용됩니다.


---

### loopcount

> Components > Animation Objects > Animation > Property > loopcount

**Description**

loop 속성값이 true 일 때 애니메이션 효과가 반복되는 횟수를 설정하는 속성입니다.

**Syntax**

```javascript
Animation.loopcount[= nLoopCnt]
```

**Setting Syntax**

```javascript
this.Animation00.loopcount = 1;
```
- **`nLoopCnt`** — 애니메이션 효과가 반복될 횟수를 정수로 설정합니다.

2 이상 설정 시 설정된 횟수만큼 애니메이션 효과가 반복됩니다.
1 이하 또는 잘못된 값을 설정 시 애니메이션 효과가 무한반복됩니다.

**Remark**

- loopcount 속성값을 설정하지 않으면 undefined 로 적용됩니다.


---

### name

> Components > Animation Objects > Animation > Property > name

**Description**

Animation 오브젝트의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
Animation.name
```

**Setting Syntax**

```javascript
var objAni = new nexacro.Animation( "Animation00", this );
```
- **`name`** — Animation 오브젝트를 구별할 수 있는 유일값을 설정합니다.

**Remark**

- new 연산자로 Animation 오브젝트를 생성할 때 id 속성값과 name 속성값이 동일하게 설정됩니다.

- 일반적으로 addChild(), insertChild() 메소드로 오브젝트를 자식으로 등록할 때 설정하는 값과 동일하게 설정합니다.


---

### parent

> Components > Animation Objects > Animation > Property > parent

**Description**

Animation 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Animation.parent
```

**Remark**

- 일반적으로 addChild() 메소드를 사용하여 Animation 를 추가한 오브젝트가 parent 속성에 설정됩니다.

- Animation 가 어디에도 속해있지 않거나 부모 오브젝트로부터 제거되면 null 값을 갖습니다.


---

### 메서드 (Methods)

### addTarget

> Components > Animation Objects > Animation > Method > addTarget

**Description**

애니메이션 효과가 적용될 대상 컴포넌트를 Animation 오브젝트에 아이템으로 추가하는 메소드입니다.

**Syntax**

```javascript
Animation.addTarget( strID, objComp, strProps );
```

**Parameters**

```
Animation 오브젝트에 추가될 AnimationItem 오브젝트의 ID 를 문자열로 설정합니다.
```

**Return**

추가된 AnimationItem 오브젝트의 인덱스를 반환합니다.

AnimationItem 오브젝트가 정상적으로 추가되지 않은 경우에는 -1 을 반환합니다.

**Remark**

- addTarget() 메소드가 정상적으로 실행되면 items 속성에 AnimationItem 오브젝트가 아이템으로 추가됩니다.

**See Also**

AnimationItem.props


---

### destroy

> Components > Animation Objects > Animation > Method > destroy

**Description**

스크립트에서 동적으로 생성한 Animation 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
Animation.destroy()
```

**Return**

Animation 이(가) 정상적으로 삭제되면 true 를 반환합니다.

Animation 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 Animation 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChild


---

### pause

> Components > Animation Objects > Animation > Method > pause

**Description**

진행중인 애니메이션 효과를 일시 중지하는 메소드입니다.

**Syntax**

```javascript
Animation.pause()
```

**Parameters**

this.Animation00.pause();

**Return**

메소드 실행에 성공하면 true 를 반환합니다.

메소드 실행에 실패하면 false 를 반환합니다.

**Remark**

- 일시 중지된 상태에서 Animation 오브젝트의 속성값을 변경해도 반영되지 않습니다.
   애니메이션 효과가 종료되거나 stop() 메소드를 실행하여야 변경된 속성값이 반영됩니다.

- 일시 중지된 애니메이션 효과는 play() 메소드를 실행하여 다시 진행시킬 수 있습니다.

- 일시 중지된 애니메이션 효과를 진행되던 방향의 반대로 진행하려면 reverse() 메소드 실행 후 play() 메소드를 실행하여야 합니다.


---

### play

> Components > Animation Objects > Animation > Method > play

**Description**

애니메이션 효과를 시작하는 메소드입니다.

**Syntax**

```javascript
Animation.play()
```

**Parameters**

this.Animation00.play();

**Return**

메소드 실행에 성공하면 true 를 반환합니다.

메소드 실행에 실패하면 false 를 반환합니다.

**Remark**

- 애니메이션 효과는 대상 컴포넌트의 속성값을 실제로 변경시키며 진행됩니다.
   따라서, 애니메이션 효과가 종료되면 변경된 속성값이 유지됩니다.

- 애니메이션 효과가 진행되는 중에 play() 메소드를 실행하면 애니메이션 효과가 처음부터 다시 실행됩니다.

- 애니메이션 효과를 최초 실행 시 Animation 오브젝트의 direction 속성값에 따라 실행되는 방향이 결정됩니다.
   reverse() 메소드 실행 시 애니메이션 진행방향이 변경됩니다.

- pause() 메소드에 의해 일시 중지된 애니메이션 효과는 play() 메소드를 실행하여 다시 진행시킬 수 있습니다.

- delay 속성값이 설정되어 있으면 설정된 시간만큼 지연된 후 애니메이션 효과가 시작됩니다.


---

### removeTarget

> Components > Animation Objects > Animation > Method > removeTarget

**Description**

Animation 오브젝트에 아이템으로 추가된 AnimationItem 오브젝트를 제거하는 메소드입니다.

**Syntax**

```javascript
Animation.removeTarget( strID );
```

**Parameters**

```
Animation 오브젝트에 등록된 아이템에서 제거할 AnimationItem 오브젝트의 ID 를 문자열로 설정합니다.
```

**Return**

Animation 오브젝트에서 제거된 AnimationItem 오브젝트를 반환합니다.

**Remark**

- removeTarget() 메소드가 정상적으로 실행되면 items 속성에서 AnimationItem 오브젝트가 제거됩니다.


---

### reverse

> Components > Animation Objects > Animation > Method > reverse

**Description**

애니메이션 효과의 방향을 반대로 변경하는 메소드입니다.

**Syntax**

```javascript
Animation.reverse()
```

**Parameters**

this.Animation00.reverse()

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

> Components > Animation Objects > Animation > Method > seek

**Description**

애니메이션 효과의 진행위치를 특정 시간으로 이동하는 메소드입니다.

**Syntax**

```javascript
Animation.seek( nMSecond )
```

**Parameters**

```
이동시킬 위치의 시간을 밀리세컨드 단위의 숫자로 설정합니다.

duration 속성에 설정된 전체 진행시간 범위 안의 값을 설정하여야 합니다.
진행시간을 벗어난 값을 설정하면 최소 또는 최대값으로 적용됩니다.
```

**Return**

메소드 실행에 의해 실제로 변경된 위치의 진행시간을 반환합니다.

**Remark**

- seek() 메소드 수행 시 애니메이션 효과의 진행위치가 즉시 변경됩니다.


---

### stop

> Components > Animation Objects > Animation > Method > stop

**Description**

진행중인 애니메이션 효과를 중지하는 메소드입니다.

**Syntax**

```javascript
Animation.stop()
```

**Parameters**

this.Animation00.stop()

**Return**

메소드 실행에 성공하면 true 를 반환합니다.

메소드 실행에 실패하면 false 를 반환합니다.

**Remark**

- 애니메이션 효과가 진행중일 때 stop() 메소드를 실행하면 대상 컴포넌트는 애니메이션 효과가 진행되기 전 상태로 돌아갑니다.
   애니메이션 효과가 완료된 후 stop() 메소드를 실행하면 대상 컴포넌트는 최종 상태를 유지합니다.

- 애니메이션 효과가 진행중일 때 Animation 오브젝트의 속성값을 변경해도 반영되지 않습니다.
   애니메이션 효과가 종료되거나 stop() 메소드를 실행하여야 변경된 속성값이 반영됩니다.


---

### 이벤트 (Events)

### onbegin

> Components > Animation Objects > Animation > Event > onbegin

**Description**

애니메이션 효과가 시작됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onbegin(obj:nexacro.Animation,e:nexacro.AnimationEventInfo);
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

> Components > Animation Objects > Animation > Event > oncomplete

**Description**

애니메이션 효과가 종료됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
oncomplete(obj:nexacro.Animation,e:nexacro.AnimationEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onrun

> Components > Animation Objects > Animation > Event > onrun

**Description**

애니메이션 효과가 실행중일 때 Tick 마다 발생하는 이벤트입니다.

**Syntax**

```javascript
onrun(obj:nexacro.Animation,e:nexacro.AnimationEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- delay 속성값에 의해 애니메이션 효과가 지연중일 때는 이벤트가 발생하지 않습니다.
   onbegin 이벤트가 발생된 후 부터 발생하는 이벤트입니다.

- Tick 은 일반적으로 초당 60 회 발생하지만 W3C 권장 사항에 따라 대부분의 웹 브라우저에서 표시 새로고침 빈도에 따라 발생합니다.
   Tick 발생은 다른 작업에 의해 일시 중지될 수 있으므로 항상 일정한 간격으로 발생하지 않습니다.


---

### onupdate

> Components > Animation Objects > Animation > Event > onupdate

**Description**

play() 메소드가 실행되면 애니메이션 효과가 종료될 때까지 Tick 마다 발생하는 이벤트입니다.

**Syntax**

```javascript
onupdate(obj:nexacro.Animation,e:nexacro.AnimationEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- delay 속성값에 의해 애니메이션 효과가 지연중일 때도 이벤트가 발생합니다.
   play() 메소드가 실행되면 즉시 발생하는 이벤트입니다.

- Tick 은 일반적으로 초당 60 회 발생하지만 W3C 권장 사항에 따라 대부분의 웹 브라우저에서 표시 새로고침 빈도에 따라 발생합니다.
   Tick 발생은 다른 작업에 의해 일시 중지될 수 있으므로 항상 일정한 간격으로 발생하지 않습니다.


---

## Components > Animation Objects > Animation > Objects

### Objects

> Components > Animation Objects > Animation > Objects

**Description**

Animation 오브젝트에 등록되는 아이템 오브젝트입니다.


---

## Components > Animation Objects > Animation > AnimationItem

### AnimationItem

> Components > Animation Objects > Animation > Objects > AnimationItem

**Description**

Animation 오브젝트에서 addTarget() 메소드 실행 시 파라미터 값을 기준으로 생성되는 아이템 오브젝트입니다.

**Remark**

- addTarget() 메소드 실행 시 AnimationItem 오브젝트가 생성되어 Animation 오브젝트에 아이템으로 등록됩니다.

- Animation 오브젝트에 addTarget() 메소드로 AnimationItem 오브젝트를 여러개 등록할 수 있습니다.

- Animation 오브젝트 실행 시 아이템으로 등록된 컴포넌트에 애니메이션 효과를 동시에 적용합니다.

**Property**

| Name | Description |
| --- | --- |
| componentid | 애니메이션 효과가 적용될 대상 컴포넌트를 설정하는 속성입니다. |
| id | AnimationItem 오브젝트의 고유 식별자가 설정되는 속성입니다. |
| props | 애니메이션 효과가 적용될 속성과 속성값을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| destroy | 스크립트에서 동적으로 생성한 AnimationItem 을(를) 삭제하는 메소드입니다. |


---

### 속성 (Properties)

### componentid

> Components > Animation Objects > Animation > Objects > AnimationItem > Property > componentid

**Description**

애니메이션 효과가 적용될 대상 컴포넌트를 설정하는 속성입니다.

**Syntax**

```javascript
AnimationItem.componentid
```

**Setting Syntax**

```javascript
var objAni = new nexacro.Animation("Animation00", this); 

objAni.addTarget( "AniItem00", this.Button00, "left:600" );
```
- **`componentid`** — 애니메이션 효과가 적용될 대상 컴포넌트를 addTarget() 메소드를 사용하여 등록합니다.

addTarget() 메소드에 설정한 두번째 파라미터가 AnimationItem 오브젝트의 componentid 값으로 설정됩니다.

**Remark**

- AnimationItem 오브젝트에 컴포넌트를 한개만 설정할 수 있습니다.
   애니메이션 효과가 적용될 컴포넌트를 추가하려면 AnimationItem 오브젝트를 추가하여야 합니다.


---

### id

> Components > Animation Objects > Animation > Objects > AnimationItem > Property > id

**Description**

AnimationItem 오브젝트의 고유 식별자가 설정되는 속성입니다.

**Syntax**

```javascript
AnimationItem.id
```

**Setting Syntax**

```javascript
var iItemIdx = this.Animation00.addTarget( "AnimationItem00", this.Button00, "left:600" );
```
- **`id`** — Animation 오브젝트의 addTarget() 메소드 실행 시 첫번째 파라미터가 id 값으로 설정됩니다.


---

### props

> Components > Animation Objects > Animation > Objects > AnimationItem > Property > props

**Description**

애니메이션 효과가 적용될 속성과 속성값을 설정하는 속성입니다.

**Syntax**

```javascript
AnimationItem.props
```

**Setting Syntax**

```javascript
strProps ::= <propName> ':' <propValue> [ ',' <propName> ':' <propValues> ]*

<propValues> ::= '[' <strValue> [ ',' <strValue> ]* ']'
```
```javascript
var objAni = new nexacro.Animation("Animation00", this); 

objAni.addTarget( "AniItem00", this.Button00, "left:600" );
objAni.addTarget( "AniItem01", this.Button01, "left:[100,600]" );
objAni.addTarget( "AniItem02", this.Button02, "left:[100,600], background:['white','blue']" );
```
- **`strProps`** — 애니메이션 효과가 적용될 속성명과 속성값을 addTarget() 메소드를 사용하여 등록합니다.

addTarget() 메소드에 설정한 세번째 파라미터가 AnimationItem 오브젝트의 props 값으로 설정됩니다.

속성명과 속성값은 ":" 문자로 구분하여 한 개 이상 설정할 수 있습니다.
각 속성은 "," 문자로 구분하여 설정합니다.
- **`<propName>`** — 애니메이션 효과가 적용될 속성명을 설정합니다.

읽기전용 속성은 설정할 수 없습니다.
- **`<propValues>`** — 애니메이션 효과가 수행되면서 변경시킬 속성값을 설정합니다.

속성값을 여러개 설정할 경우 "[","]" 문자를 사용하여 배열 형태로 설정하며 각 값은 "," 문자로 구분합니다.

**Remark**

- 애니메이션 효과는 props 에 설정된 속성의 값을 duration 에 설정된 시간 동안 props 에 설정된 속성값으로 변경시키며 적용됩니다.

- props 에 설정된 속성값은 애니메이션 효과가 실행되는 동안 균등 분할되어 적용됩니다.
   예를 들어 "left:[30,50,100]" 을 설정하면 애니메이션 효과 실행 시 대상 컴포넌트의 left 값이 30 으로 변경된 후
   애니메이션 효과가 50% 진행되는 동안 left 속성값이 30 -> 50 으로 변경되고, 나머지 100% 까지 진행되는 동안 50 -> 100으로 변경됩니다.

- props 에 설정된 속성에 변경시킬 속성값이 하나만 정의되어 있고, 대상 컴포넌트의 현재 속성값과 같다면
   애니메이션 효과가 실행되지 않는 것처럼 보일 수 있습니다.
   예를 들어 props 속성값이 "left:100" 이고 대상 컴포넌트의 left 속성값이 100 이면, 속성값이 100 -> 100 으로 변경되므로
   애니메이션 효과는 실행되고 있지만 화면에 변화는 없습니다.

- 애니메이션 효과가 적용된 속성은 최종적으로 props 에 설정된 마지막 값을 갖습니다.


---

### 메서드 (Methods)

### destroy

> Components > Animation Objects > Animation > Objects > AnimationItem > Method > destroy

**Description**

스크립트에서 동적으로 생성한 AnimationItem 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
AnimationItem.destroy()
```

**Return**

AnimationItem 이(가) 정상적으로 삭제되면 true 를 반환합니다.

AnimationItem 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 AnimationItem 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChild


---
