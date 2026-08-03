# nexacroN V24 — Screen

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 7개

---

## Screen

### Screen

> Screen

**Description**

어플리케이션에서 사용할 스크린 정보를 관리하는 오브젝트 입니다.

**Remark**

- Screen 마다 themeid, initvaluefileid 와 같은 Environment 속성값을 별도로 설정할 수 있습니다.

- Screen 목록 중 어플리케이션에 적용되는 Screen 은 다음의 선택기준을 따릅니다.

  1) 어플리케이션이 실행될 환경에 대한 정보를 동적으로 생성하여 Screen 선택의 기준으로 사용
    1-1) 실행될 환경이 모바일이면 화면의 물리적 가로크기를 기준으로 "mobile_small", "mobile_medium", "mobile_large" 중 한개를 선택
  2) 1번에서 결정된 기준값과 type 속성값이 일치하는 Screen 을 선택
  3) 2번에서 선택된 Screen 목록이 2 개 이상이면 1번에서 결정된 기준값과 specifiedos 속성값이 일치하는 Screen 을 선택
  4) 3번에서 선택된 Screen 목록이 2 개 이상이면 1번에서 결정된 기준값과 specifiedlocale 속성값이 일치하는 Screen 을 선택
  5) 4번에서 선택된 Screen 목록이 2 개 이상이면 첫번째로 정의된 Screen 을 선택
  
  * 2번 선택 과정에서 1번에서 결정된 기준값과 type 속성값이 일치하는 Screen 이 없을 경우
    1번에서 결정된 기준값보다 작은 Screen 을 선택하고, 작은 Screen 도 없을 경우는 큰 Screen 을 선택합니다.
    예를 들어 1번에서 결정된 기준값이 "mobile_large" 이고 Screen 목록에는 type 속성값이 "desktop" 인 Screen 만 있다면,
    절차상으로는 "mobile_medium", "mobile_small" Screen 정보를 순서대로 찾고 "desktop" 인 Screen 정보를 찾게 됩니다.

  * iPad 시리즈(mini1, 2, 3, 4, iPad1, 2, air1, air2, pro 등)는 디바이스 구분정보가 부족하여 항상 "mobile_large" 로 적용됩니다.

- 선택된 Screen 에 따라 어플리케이션이 로딩될 때 zoomfactortype 속성값을 기준으로 Zoom 이 자동 적용됩니다.

- portrait 상태에서 "mobile_small" 은 "480x768", "mobile_medium" 은 "640x1024", "mobile_large" 는 "800x1280" 해상도로 처리됩니다.

**Property**

| Name | Description |
| --- | --- |
| id | Screen 의 고유 식별자를 설정하는 속성입니다. |
| specifiedlocale | 어플리케이션이 실행될 때 Screen 선택의 기준이 되는 로케일(Locale)을 설정하는 속성입니다. |
| specifiedos | 어플리케이션이 실행될 때 Screen 선택의 기준이 되는 OS 를 설정하는 속성입니다. |
| type | 어플리케이션이 실행될 때 Screen 선택의 기준이 되는 디바이스 유형을 설정하는 속성입니다. |
| userzoom | 모바일 웹브라우저 환경에서 선택된 Screen 의 type 속성값이 "desktop" 인 경우 핀치줌 기능의 사용 여부를 설정하는 속성입니다. |
| zoomfactortype | 모바일 환경에서 어플리케이션 로딩 시 Zoom 이 적용되는 기준을 설정하는 속성입니다. |


---

### 속성 (Properties)

### id

> Screen > Property > id

**Description**

Screen 의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
Screen.id
```

**Setting Syntax**

- **`id`** — ScreenDefinition 영역에 정의된 Screen 을 구별할 수 있는 유일값을 설정합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.


---

### specifiedlocale

> Screen > Property > specifiedlocale

**Description**

어플리케이션이 실행될 때 Screen 선택의 기준이 되는 로케일(Locale)을 설정하는 속성입니다.

**Syntax**

```javascript
Screen.specifiedlocale
```

**Setting Syntax**

```javascript
specifiedlocale ::= '2자리 알파벳 언어코드'_'2자리 알파벳 국가코드'
```
- **`specifiedlocale`** — "언어[_국가]" 형식의 문자열로 설정합니다.

설정된 로케일(Locale)과 어플리케이션이 실행된 디바이스의 로케일이 같으면 현재 Screen 정보가 선택대상이 됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 선택된 Screen 목록이 2 개 이상일 때 Screen 선택에 적용되는 속성입니다.

- Screen 목록 중 어플리케이션에 적용되는 Screen 은 다음의 선택기준을 따릅니다.

  1) 어플리케이션이 실행될 환경에 대한 정보를 동적으로 생성하여 Screen 선택의 기준으로 사용
    1-1) 실행될 환경이 모바일이면 화면의 물리적 가로크기를 기준으로 "mobile_small", "mobile_medium", "mobile_large" 중 한개를 선택
  2) 1번에서 결정된 기준값과 type 속성값이 일치하는 Screen 을 선택
  3) 2번에서 선택된 Screen 목록이 2 개 이상이면 1번에서 결정된 기준값과 specifiedos 속성값이 일치하는 Screen 을 선택
  4) 3번에서 선택된 Screen 목록이 2 개 이상이면 1번에서 결정된 기준값과 specifiedlocale 속성값이 일치하는 Screen 을 선택
  5) 4번에서 선택된 Screen 목록이 2 개 이상이면 첫번째로 정의된 Screen 을 선택
  
  * 2번 선택 과정에서 1번에서 결정된 기준값과 type 속성값이 일치하는 Screen 이 없을 경우
    1번에서 결정된 기준값보다 작은 Screen 을 선택하고, 작은 Screen 도 없을 경우는 큰 Screen 을 선택합니다.
    예를 들어 1번에서 결정된 기준값이 "mobile_large" 이고 Screen 목록에는 type 속성값이 "desktop" 인 Screen 만 있다면,
    절차상으로는 "mobile_medium", "mobile_small" Screen 정보를 순서대로 찾고 "desktop" 인 Screen 정보를 찾게 됩니다.

  * iPad 시리즈(mini1, 2, 3, 4, iPad1, 2, air1, air2, pro 등)는 디바이스 구분정보가 부족하여 항상 "mobile_large" 로 적용됩니다.


---

### specifiedos

> Screen > Property > specifiedos

**Description**

어플리케이션이 실행될 때 Screen 선택의 기준이 되는 OS 를 설정하는 속성입니다.

**Syntax**

```javascript
Screen.specifiedos
```

**Setting Syntax**

```javascript
specifiedos ::=  'windows' | 'macOS' | 'android' | 'ios'
```
- **`"windows"`** — OS 가 "Windows" 인 디바이스에서 어플리케이션이 실행될 때 현재 Screen 정보가 선택대상이 됩니다.
- **`"macOS"`** — OS 가 "macOS" 인 디바이스에서 어플리케이션이 실행될 때 현재 Screen 정보가 선택대상이 됩니다.
- **`"android"`** — OS 가 "Android" 인 디바이스에서 어플리케이션이 실행될 때 현재 Screen 정보가 선택대상이 됩니다.
- **`"ios"`** — OS 가 "iOS" 인 디바이스에서 어플리케이션이 실행될 때 현재 Screen 정보가 선택대상이 됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 크기가 동일한 Screen 목록이 2 개 이상일 때 Screen 선택에 적용되는 속성입니다.

- Screen 목록 중 어플리케이션에 적용되는 Screen 은 다음의 선택기준을 따릅니다.

  1) 어플리케이션이 실행될 환경에 대한 정보를 동적으로 생성하여 Screen 선택의 기준으로 사용
    1-1) 실행될 환경이 모바일이면 화면의 물리적 가로크기를 기준으로 "mobile_small", "mobile_medium", "mobile_large" 중 한개를 선택
  2) 1번에서 결정된 기준값과 type 속성값이 일치하는 Screen 을 선택
  3) 2번에서 선택된 Screen 목록이 2 개 이상이면 1번에서 결정된 기준값과 specifiedos 속성값이 일치하는 Screen 을 선택
  4) 3번에서 선택된 Screen 목록이 2 개 이상이면 1번에서 결정된 기준값과 specifiedlocale 속성값이 일치하는 Screen 을 선택
  5) 4번에서 선택된 Screen 목록이 2 개 이상이면 첫번째로 정의된 Screen 을 선택
  
  * 2번 선택 과정에서 1번에서 결정된 기준값과 type 속성값이 일치하는 Screen 이 없을 경우
    1번에서 결정된 기준값보다 작은 Screen 을 선택하고, 작은 Screen 도 없을 경우는 큰 Screen 을 선택합니다.
    예를 들어 1번에서 결정된 기준값이 "mobile_large" 이고 Screen 목록에는 type 속성값이 "desktop" 인 Screen 만 있다면,
    절차상으로는 "mobile_medium", "mobile_small" Screen 정보를 순서대로 찾고 "desktop" 인 Screen 정보를 찾게 됩니다.

  * iPad 시리즈(mini1, 2, 3, 4, iPad1, 2, air1, air2, pro 등)는 디바이스 구분정보가 부족하여 항상 "mobile_large" 로 적용됩니다.


---

### type

> Screen > Property > type

**Description**

어플리케이션이 실행될 때 Screen 선택의 기준이 되는 디바이스 유형을 설정하는 속성입니다.

**Syntax**

```javascript
Screen.type
```

**Setting Syntax**

```javascript
type ::= 'desktop' | 'mobile_small' | 'mobile_medium' | 'mobile_large'
```
- **`"desktop"`** — 데스크탑 환경에서 어플리케이션이 실행될 때 현재 Screen 정보가 선택대상이 됩니다.
- **`"mobile_small"`** — Portrait 상태에서 화면의 가로 길이가 8cm 이하인 모바일 디바이스에서 어플리케이션이 실행될 때 현재 Screen 정보가 선택대상이 됩니다.
- **`"mobile_medium"`** — Portrait 상태에서 화면의 가로 길이가 8cm 초과, 13cm 이하인 모바일 디바이스에서 어플리케이션이 실행될 때 현재 Screen 정보가 선택대상이 됩니다.
- **`"mobile_large"`** — Portrait 상태에서 화면의 가로 길이가 13cm 초과인 모바일 디바이스에서 어플리케이션이 실행될 때 현재 Screen 정보가 선택대상이 됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- Screen 목록 중 어플리케이션에 적용되는 Screen 은 다음의 선택기준을 따릅니다.

  1) 어플리케이션이 실행될 환경에 대한 정보를 동적으로 생성하여 Screen 선택의 기준으로 사용
    1-1) 실행될 환경이 모바일이면 화면의 물리적 가로크기를 기준으로 "mobile_small", "mobile_medium", "mobile_large" 중 한개를 선택
  2) 1번에서 결정된 기준값과 type 속성값이 일치하는 Screen 을 선택
  3) 2번에서 선택된 Screen 목록이 2 개 이상이면 1번에서 결정된 기준값과 specifiedos 속성값이 일치하는 Screen 을 선택
  4) 3번에서 선택된 Screen 목록이 2 개 이상이면 1번에서 결정된 기준값과 specifiedlocale 속성값이 일치하는 Screen 을 선택
  5) 4번에서 선택된 Screen 목록이 2 개 이상이면 첫번째로 정의된 Screen 을 선택
  
  * 2번 선택 과정에서 1번에서 결정된 기준값과 type 속성값이 일치하는 Screen 이 없을 경우
    1번에서 결정된 기준값보다 작은 Screen 을 선택하고, 작은 Screen 도 없을 경우는 큰 Screen 을 선택합니다.
    예를 들어 1번에서 결정된 기준값이 "mobile_large" 이고 Screen 목록에는 type 속성값이 "desktop" 인 Screen 만 있다면,
    절차상으로는 "mobile_medium", "mobile_small" Screen 정보를 순서대로 찾고 "desktop" 인 Screen 정보를 찾게 됩니다.

  * iPad 시리즈(mini1, 2, 3, 4, iPad1, 2, air1, air2, pro 등)는 디바이스 구분정보가 부족하여 항상 "mobile_large" 로 적용됩니다.

- 정상적인 방법으로 Screen 선택에 실패했을 경우 기본 Screen 정보가 적용됩니다.

- portrait 상태에서 "mobile_small" 은 "480x768", "mobile_medium" 은 "640x1024", "mobile_large" 는 "800x1280" 해상도로 처리됩니다.


---

### userzoom

> Screen > Property > userzoom

**Description**

모바일 웹브라우저 환경에서 선택된 Screen 의 type 속성값이 "desktop" 인 경우 핀치줌 기능의 사용 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Screen.userzoom
```

**Setting Syntax**

```javascript
userzoom ::= 'true' | 'false'
```
- **`"true"`** — 핀치줌 기능을 사용합니다.
- **`"false"`** — 핀치줌 기능을 사용하지 않습니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- userzoom 속성값을 설정하지 않으면 undefined 가 설정되고, "false" 로 동작합니다.

- 모바일 웹브라우저 환경에서 화면에 선택된 Screen 의 type 속성값이 "desktop" 인 경우에만 적용되는 속성입니다.

- 핀치줌 기능에 의해 화면의 배율이 변경된 경우 브라우저의 ViewPort 정보가 변경됩니다.


---

### zoomfactortype

> Screen > Property > zoomfactortype

**Description**

모바일 환경에서 어플리케이션 로딩 시 Zoom 이 적용되는 기준을 설정하는 속성입니다.

**Syntax**

```javascript
Screen.zoomfactortype
```

**Setting Syntax**

```javascript
zoomfactortype ::= 'portrait' | 'landscape' | 'auto'
```
- **`"portrait"`** — 선택된 Screen 의 width/height 중 작은 쪽을 기준으로 Zoom 이 적용됩니다.
- **`"landscape"`** — 선택된 Screen 의 width/height 중 큰 쪽을 기준으로 Zoom 이 적용됩니다.
- **`"auto"`** — 어플리케이션 로딩 시점에 선택된 Screen 의 width 를 기준으로 Zoom 이 적용됩니다.

**Remark**

- zoomfactortype 속성값을 설정하지 않으면 "portrait" 로 적용됩니다.

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 선택된 Screen 에 따라 어플리케이션이 로딩될 때 zoomfactortype 속성값을 기준으로 Zoom 이 자동 적용됩니다.

- 선택된 Screen 의 type 속성값이 "desktop" 인 경우 zoomfactortype 속성값과 무관하게 1280 픽셀을 기준으로 Zoom 배율이 적용됩니다.


---
