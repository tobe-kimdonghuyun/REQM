# nexacroN V24 — Form

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 183개

---

## Form

### Form

> Form

**Description**

Form은 화면을 구성하는 기본 단위로써 내부적으로 각 컴포넌트들을 배치하여 원하는 화면을 구성할 수 있도록 합니다.

**Remark**

스크립트가 실행 될 수 있는 환경을 제공합니다.


◆ Control 표시 참고

- scrollbartype 속성값 또는 실행 환경(Desktop, Mobile)에 따라 스크롤바 영역에 표시되는 컨트롤이 달라집니다. 조건에 따라 ScrollBarControl 또는 ScrollIndicatorControl 중 하나가 적용됩니다.
  도움말에서 Structure 항목의 이미지는 모든 조건에 동시에 표시할 수 없어 ScrollBarControl 기준으로만 작성된 점을 참고해주세요.

**Structure**



**Contents Sizing**

Form 의 크기를 결정하는 기준입니다.

**Basic Key Action**

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| Default Button | Enter | Form 에 defaultbutton 속성값이 "true" 인 Button 이 있다면 해당 Button 이 클릭됩니다. |
| 스크롤 이동 | Ctrl + 방향키 | Form 또는 자식 컴포넌트에 포커스가 있고, Form 에 스크롤이 있을 때 입력된 방향키 방향으로 스크롤이 이동합니다. |

**Accessibility Key Action**

접근성 기능이 활성화 되어 있을 때 적용되는 키 액션입니다.

**Property**

| Name | Description |
| --- | --- |
| accessibilityaction | Form에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다. |
| accessibilitydesclevel | Form 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다. |
| accessibilitydescription | Form에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다. |
| accessibilityenable | Form 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다. |
| accessibilitylabel | Form에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다. |
| accessibilityrole | Form에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다. |
| all | Form 에 등록된 모든 오브젝트를 갖고 있는 읽기전용 속성입니다. |
| background | Form 의 배경 영역을 설정하는 속성입니다. |
| binds | Form 에 등록된 Component 와 DataSet 의 바인딩 정보를 갖는 읽기전용 속성입니다. |
| border-radius | Form 의 모서리 모양을 설정하는 속성입니다. |
| color | Form 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| components | Form 에 등록된 모든 컴포넌트를 갖고 있는 읽기전용 속성입니다. |
| cssclass | Form 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다. |
| cursor | Form 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| dragscrolltype | Form에서 터치 후 드래그로 스크롤이 발생할 경우, 스크롤 방향을 설정하는 속성입니다. |
| enable | Form 의 사용가능 여부를 설정하는 속성입니다. |
| enableevent | Form 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다. |
| font | Form 에서 사용하는 폰트를 설정하는 속성입니다. |
| height | Form 의 높이를 설정하는 속성입니다. |
| hscrollbar | Form 의 서브컨트롤인 수평 스크롤바의 오브젝트를 갖는 읽기전용 속성입니다. |
| id | Form 의 고유 식별자를 갖는 읽기전용 속성입니다. |
| initvalueid | Form 에 적용될 InitValue 의 ID 를 설정하는 속성입니다. |
| letter-spacing | Form 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다. |
| locale | Form 에 적용될 국가 및 언어(locale)를 설정하는 속성입니다. |
| name | Form 의 이름을 설정하는 속성입니다. |
| -nexa-border | Form 의 테두리를 설정하는 속성입니다. |
| -nexa-edge | Form 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-rtl-background-image | Form 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다. |
| -nexa-rtl-edge-image | Form 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| objects | Form 에 등록된 모든 Invisible Object 를 갖고 있는 읽기전용 속성입니다. |
| opacity | Form 영역의 투명도를 설정하는 속성입니다. |
| opener | 화면에 실행된 Form의 부모 Form을 갖는 읽기전용 속성입니다. |
| parent | Form 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| rtl | Form 에서 내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다. |
| scrollbarbarminsize | Form 에 표시되는 스크롤바의 트랙바(TrackBar) 최소크기를 설정하는 속성입니다. |
| scrollbarbaroutsize | Form 의 스크롤바에서 트랙바(TrackBar)가 사라지는 기준 크기를 설정하는 속성입니다. |
| scrollbardecbuttonsize | Form 에 표시되는 스크롤바의 감소 버튼(DecButton) 크기를 설정하는 속성입니다. |
| scrollbarincbuttonsize | Form 에 표시되는 스크롤바의 증가 버튼(IncButton) 크기를 설정하는 속성입니다. |
| scrollbarsize | Form 에 표시되는 스크롤바의 크기를 설정하는 속성입니다. |
| scrollbartrackbarsize | Form 에 표시되는 스크롤바의 트랙바(TrackBar) 크기를 설정하는 속성입니다. |
| scrollbartype | Form 에 스크롤바가 표시되는 형식을 설정하는 속성입니다. |
| scrollindicatorsize | Form 에 표시되는 스크롤 인디케이터바의 크기를 설정하는 속성입니다. |
| scrolltype | Form 에서 사용되는 스크롤의 종류를 설정하는 속성입니다. |
| statustext | 상위 Frame의 StatusBar 에 표시할 텍스트를 설정하는 속성입니다. |
| stepalign | Form 이 화면분할 되었을 때 서브컨트롤인 Step 컨트롤이 표시되는 위치를 설정하는 속성입니다. |
| stepitemgap | Form 이 화면분할 되었을 때 StepControl 에 표시되는 라디오버튼의 간격을 설정하는 속성입니다. |
| stepitemsize | Form 이 화면분할 되었을 때 StepControl 에 표시되는 라디오버튼의 크기를 설정하는 속성입니다. |
| stepselector | Form 에서 화면분할 기능을 사용할 때 현재 화면의 인덱스를 표시하는 Step 컨트롤을 갖는 읽기전용 속성입니다. |
| stepshowtype | Form 이 화면분할되었을 때 Step 컨트롤이 화면에 표시되는 조건을 설정하는 속성입니다. |
| titletext | 상위 Frame의 TitleBar 에 표시할 텍스트를 설정하는 속성입니다. |
| tooltiptext | Form 에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다. |
| tooltiptype | Form 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다. |
| visible | Form 이(가) 화면에 표시될지 여부를 설정하는 속성입니다. |
| vscrollbar | Form 의 서브컨트롤인 수직 스크롤바의 오브젝트를 갖는 읽기전용 속성입니다. |
| width | Form 의 너비를 설정하는 속성입니다. |
| word-spacing | Form 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addChild | 스크립트에서 동적으로 생성한 컴포넌트를 Form 의 자식 컴포넌트로 추가하는 메소드입니다. |
| addEventHandler | Form 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 Form 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| alert | 경고 대화상자를 표시하는 메소드입니다. |
| cancelTransaction | 진행중인 트랜잭션을 중지 시키는 메소드입니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| close | 실행된 Form을 종료하는 메소드입니다. |
| confirm | 선택 대화상자를 표시하는 메소드입니다. |
| findEventHandler | Form 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getCurrentLayoutID | Form에 정의된 레이아웃 중 현재 화면에 표시되는 레이아웃의 name 속성값을 반환하는 메소드입니다. |
| getEventHandler | Form 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| getFirstAccessibilityComponent | Form 오브젝트 내 accessibilityenable 속성값이 true이고 taborder 속성값이 가장 작은 컴포넌트를 반환하는 메소드입니다. |
| getFirstComponent | Form 에서 탭키로 포커스 이동 시 제일 처음에 포커스를 받는 컴포넌트를 반환하는 메소드입니다. |
| getFocus | Form 의 자식 컴포넌트 중 현재 포커스를 가지고 있는 컴포넌트를 반환하는 메소드입니다. |
| getHScrollPos | Form 에 표시된 수평스크롤바의 트랙바 위치값을 반환하는 메소드입니다. |
| getLastAccessibilityComponent | Form 오브젝트 내 accessibilityenable 속성값이 true이고 taborder 속성값이 가장 큰 컴포넌트를 반환하는 메소드입니다. |
| getLastComponent | Form 에서 탭키로 포커스 이동 시 제일 마지막에 포커스를 받는 컴포넌트를 반환하는 메소드입니다. |
| getLayoutInfo | Form 에 정의된 레이아웃 중 특정 레이아웃의 속성값을 반환하는 메소드입니다. |
| getNextComponent | Form 의 특정 컴포넌트에서 탭키 입력 시 포커스가 이동되는 컴포넌트를 반환하는 메소드입니다. |
| getOffsetHeight | Form 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOffsetWidth | Form 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다. |
| getOwnerFrame | Form 이 소속된 부모 Frame 을 반환하는 메소드입니다. |
| getPanel | 컴포넌트를 연결하고 있는 Panel 컴포넌트를 반환하는 메서드입니다. |
| getPrevComponent | Form 의 특정 컴포넌트에서 Shift+탭키 입력 시 포커스가 이동되는 컴포넌트를 반환하는 메소드입니다. |
| getStepCount | Form 의 화면이 분할되었을 때 화면의 갯수를 반환하는 메소드입니다. |
| getStepIndex | Form 이 화면분할 되었을 때 현재 표시되는 화면의 인덱스를 반환하는 메소드입니다. |
| getVScrollPos | Form 에 표시된 수직스크롤바의 트랙바 위치값을 반환하는 메소드입니다. |
| go | 화면에 표시된 Form 대신 인수로 전달된 Form을 로딩하는 메소드입니다. |
| hasPopupFrame | 현재 Form에서 스크립트로 실행된 Form이 있는지 확인하는 메소드입니다. |
| insertChild | 스크립트로 동적 생성한 컴포넌트를 Form 의 자식 컴포넌트로 특정 순서에 추가하는 메소드입니다. |
| insertEventHandler | Form 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| isValidObject | Form 에 특정 오브젝트가 존재하는지 확인하는 메소드입니다. |
| killTimer | setTimer() 메소드로 생성된 타이머를 삭제하는 메소드입니다. |
| lookup | 인수로 전달된 오브젝트를 Form 영역부터 상위 영역으로 검색하여 반환하는 메소드입니다. |
| reload | 현재 화면을 다시 로딩하는 메서드입니다. |
| removeChild | Form에 동적으로 추가된 컴포넌트를 제거하는 메소드입니다. |
| removeEventHandler | Form 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | Form 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| resetScroll | Form 의 스크롤바와 내부 컴포넌트를 현재 화면 상태에 맞게 갱신하는 메소드입니다. |
| scrollBy | Form 에 표시된 스크롤을 현재 위치에서 인수로 전달된 값만큼 이동시키는 메소드입니다. |
| scrollTo | Form 에 표시된 스크롤을 특정 위치로 이동시키는 메소드입니다. |
| setEventHandler | Form 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | Form 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| setFluidLayoutProperty | Form Layout 오브젝트의 속성 중 FluidLayout 관련 속성값을 동적으로 설정하는 메소드입니다. |
| setFocus | Form 컴포넌트(오브젝트)에 포커스를 설정하는 메서드입니다. |
| setStepCount | 현재 레이아웃의 화면을 지정한 숫자만큼 분할하도록 설정하는 메소드입니다. |
| setStepIndex | Form 이 화면분할 되었을 때 표시할 화면을 인덱스로 설정하는 메소드입니다. |
| setTimer | 주기적으로 ontimer 이벤트를 발생시키기 위해 타이머를 생성하는 메소드입니다. |
| setWaitCursor | Wait Cursor 를 표시하거나 해제하는 메소드입니다. |
| sleep | 설정한 시간만큼 스크립트 실행을 멈추는 메소드입니다. |
| transaction | DataSet 의 데이터를 갱신하기 위한 서비스를 호출하고,트랜잭션이 완료되면 콜백 함수를 수행하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| canlayoutchange | Form의 Layout 이 변경될 때 발생하는 이벤트입니다. |
| canstepchange | 화면분할이 설정된 Form 에서 표시되는 화면이 변경될 때 발생하는 이벤트입니다. |
| onactivate | Form 이 활성화될 때 발생하는 이벤트입니다. |
| onbeforeclose | Form 이 종료되기 전에 발생하는 이벤트입니다. |
| onbindingvaluechanged | DataSet 의 데이터 변경에 의해 바인딩된 컴포넌트에 변경이 있을 때 발생하는 이벤트입니다. |
| onclick | Form 영역 내에서 마우스 왼쪽버튼을 클릭했을 때 발생하는 이벤트입니다. |
| onclose | Form 이 종료되거나 화면 전환이 이뤄질 때 발생하는 이벤트입니다. |
| oncontextmenu | Form 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다. |
| ondeactivate | Form 이 비활성화 되었을 때 발생하는 이벤트입니다. |
| ondevicebuttonup | 모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다. |
| ondrag | Form 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다. |
| ondragenter | Form 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| ondragleave | Form 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| ondragmove | Form 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| ondrop | Form 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다. |
| onerror | Form 에서 실행한 Transaction 에서 에러가 생겼을 때 발생하는 이벤트입니다. |
| onextendedcommand | DeviceAdaptors 에 정의된 디바이스에서 이벤트가 전달되었을 때 발생하는 이벤트입니다. |
| onhscroll | Form 의 수평 스크롤바를 스크롤 했을 때 발생하는 이벤트입니다. |
| oninit | Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다. |
| onkeydown | Form 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다. |
| onkeyup | Form 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다. |
| onkillfocus | Form 에서 포커스가 나갈  때 발생하는 이벤트입니다. |
| onlayoutchanged | Form의 Layout 이 변경된 후 발생하는 이벤트입니다. |
| onlbuttondown | Form 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| onlbuttonup | Form 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| onload | Form 에 등록된 모든 컴포넌트와 데이터가 로드된 후 발생하는 이벤트입니다. |
| onmouseenter | Form 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다. |
| onmouseleave | Form 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다. |
| onmousemove | Form 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다. |
| onmousewheel | Form 영역 내에서 마우스의 휠버튼을 회전했을 때 발생하는 이벤트입니다. |
| onmove | Form 의 위치가 이동했을 때 발생하는 이벤트입니다. |
| onorientationchange | 모바일 기기의 화면 방향이 변경되었을 때 발생하는 이벤트입니다. |
| onrbuttondown | Form 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다. |
| onrbuttonup | Form 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다. |
| onsetfocus | Form 에 포커스가 들어올 때 발생하는 이벤트입니다. |
| onsize | Form 의 크기가 변경됐을 때 발생하는 이벤트입니다. |
| onstepchanged | 화면분할이 설정된 Form 에서 표시되는 화면이 변경된 후 발생하는 이벤트입니다. |
| ontimer | setTimer() 메소드로 생성한 타이머의 시간 간격마다 발생하는 이벤트입니다. |
| ontouchend | Form 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다. |
| ontouchmove | Form 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다. |
| ontouchstart | Form 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다. |
| onvscroll | Form 의 수직 스크롤바를 스크롤 했을 때 발생하는 이벤트입니다. |

**Status**

컴포넌트가 비활성화된 상태

**Control**

| Name | TypeName |
| --- | --- |
| hscrollbar | nexacro.ScrollBarControl |
| vscrollbar | nexacro.ScrollBarControl |
| stepselector | nexacro.StepControl |
| hscrollindicator | nexacro.ScrollIndicatorControl |
| vscrollindicator | nexacro.ScrollIndicatorControl |


---

### 속성 (Properties)

### -nexa-border

> Form > Property > -nexa-border

**Description**

Form 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
Form.border[= strborder]
```

**Setting Syntax**

```javascript
strborder ::= <line-width> <line-style> <color> [,<line-width> <line-style> <color>]{3}

<line-width> ::= 'thin' | 'medium' | 'thick' | <nWidth> 'px'
<line-style> ::= 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'
<color> ::= <NamedColor> | <NumericColor>

1회 입력 : top/right/bottom/left 에 모두 적용됩니다.
2회 입력 : top/bottom, right/left 에 첫번째 값부터 각각 적용됩니다.
3회 입력 : top, right/left, bottom 에 첫번째 값부터 각각 적용됩니다.
4회 입력 : top, right, bottom, left 에 첫번째 값부터 각각 적용됩니다.

* 2회~4회 입력은 border-radius 속성값이 설정되지 않은 경우만 적용됩니다.
```
```javascript
* XCSS
-nexa-border : 1px solid #999999;
-nexa-border : 1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999;

* Script ( normal property )
this.border = "1px solid #999999";
this.border = "1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999";
```
- **`<line-width>`** — 테두리 선의 두께를 설정합니다.

"thin" 설정 시 1 pixel 두께로 테두리가 표시됩니다.
"medium" 설정 시 3 pixel 두께로 테두리가 표시됩니다.
"thick" 설정 시  5 pixel 두께로 테두리가 표시됩니다.

<nWidth> 설정 시 <nWidth> pixel 두께로 테두리가 표시됩니다.
- **`<nWidth>`** — 테두리 선의 두께를 pixel 단위로 설정합니다.
"px" 단위는 생략할 수 없습니다.
- **`<line-style>`** — 테두리 선의 스타일을 설정합니다.

"none" 설정 시 테두리가 표시되지 않습니다.
"hidden" 설정 시 테두리가 표시되지 않습니다.
"dotted" 설정 시 테두리가 점선으로 표시됩니다.
"dashed" 설정 시 테두리가 긴 점선으로 표시됩니다.
"solid" 설정 시 테두리가 실선으로 표시됩니다.
"double" 설정 시 테두리가 두줄로 표시됩니다.
"groove" 설정 시 테두리가 들어간 것처럼 보이게 입체적으로 표시됩니다.
"ridge" 설정 시 테두리가 올라온 것처럼 보이게 입체적으로 표시됩니다.
"inset" 설정 시 컴포넌트가 들어간 것처럼 보이게 테두리가 입체적으로 표시됩니다.
"outset" 설정 시 컴포넌트가 올라온 것처럼 보이게 테두리가 입체적으로 표시됩니다.
- **`<color>`** — 테두리 색상을 색상이름 또는 색상코드로 설정합니다.
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- -nexa-border 속성값을 설정하지 않으면 undefined 가 설정되고, "medium none #999999" 로 동작합니다.

- <line-style> 이 "double" 일 때 두 줄을 다른 색으로 설정할 수 없습니다.
   <color> 에 설정된 색이 두 줄에 모두 적용됩니다.

- 스크립트로 접근 시 속성명은 "border"를 사용해야 합니다.


◆ Nexacro Runtime Environment 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 top > right > bottom > left 순으로 겹쳐서 표시됩니다.

- <line-style> 에 "double","groove","ridge","inset","outset" 값을 설정해도 적용되지 않습니다.

- <line-width> 에 "thin","medium","thick" 값을 설정해도 적용되지 않습니다.


◆ Web Runtime Environment 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 웹브라우저에 따라 테두리가 겹쳐지는 순서가 다르게 처리될 수 있습니다.

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있으면 
   두께는 각 테두리 별로 따로 적용되고, 색상은 top 에 설정된 색이 적용됩니다.

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있어도
   일부 브라우저는 각 테두리의 색상이나 두께가 각각 적용됩니다.

- XCSS 를 사용하지 않고 rgba(), hsl(), hsla() 메소드를 속성에 직접 설정할 경우 브라우저 버전에 따라 적용되지 않을 수 있습니다.


---

### -nexa-edge

> Form > Property > -nexa-edge

**Description**

Form 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
Form.edge[= stredge]
```

**Setting Syntax**

```javascript
stredge ::= 'none' | <image> [<fixedwidth>'px' <fixedheight>'px']

<image> ::= 'URL("' <Theme-Image> | <Web-Image> '")'
```
```javascript
* XCSS
-nexa-edge : "URL('./images/border.png')" 5px 5px;

* Script ( normal property )
this.edge = "URL('./images/border.png')" 5px 5px;
```
- **`"none"`** — edge 이미지를 설정하지 않습니다.
- **`<image>`** — 'URL ("[이미지위치]")' 형식으로 테마 또는 웹의 이미지를 설정합니다.

테두리(border) 안쪽에 edge 형태로 이미지가 표시됩니다.
- **`<Theme-Image>`** — 테마에 선언된 이미지를 "theme://images\이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/파일명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<fixedwidth>`** — 이미지가 고정되어 표시될 왼쪽/오른쪽 영역의 크기를 pixel 단위로 설정합니다.
"0px" 설정 시 왼쪽/오른쪽 영역을 고정하지 않습니다.

값을 설정하지 않으면 "0px" 로 적용됩니다.
- **`<fixedheight>`** — 이미지가 고정되어 표시될 위쪽/아래쪽 영역의 크기를 pixel 단위로 설정합니다.
"0px" 설정 시 위쪽/아래쪽 영역을 고정하지 않습니다.

값을 설정하지 않으면 "0px" 로 적용됩니다.

**Remark**

- -nexa-edge 속성값을 설정하지 않으면 undefined 가 설정되고, "none" 으로 동작합니다.

- 스크립트로 접근 시 속성명은 "edge" 를 사용해야 합니다.

- Form 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.


◆ WRE 제약

- <fixedwidth>,<fixedheight> 값이 이미지 사이즈의 1/2 을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-rtl-background-image

> Form > Property > -nexa-rtl-background-image

**Description**

Form 의 rtl 속성이 true 로 적용될 때 배경에 표시될 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
Form.-nexa-rtl-background-image
```

**Setting Syntax**

```javascript
strRtlBgImage ::= "URL(' " <Theme-Image> | <Web-Image> " ')"
```
```javascript
* XCSS
-nexa-rtl-background-image : URL("http://localhost/Test.jpg");
-nexa-rtl-background-image : URL("theme://images/Test.jpg");
```
- **`strRtlBgImage`** — "URL ('<이미지위치>')" 형식으로 테마 또는 웹의 이미지 경로를 문자열로 설정합니다.

background 속성에 설정된 값 중 이미지만 설정한 이미지로 대체됩니다.
background 속성에 설정된 이미지 이외의 값은 동일하게 적용됩니다.
- **`<Theme-Image>`** — 테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.

**Remark**

- rtl 속성에 의해 표시기준이 변경되면 반전된 이미지를 적용하려 할 때 사용하는 속성입니다.

- XCSS 에서만 설정할 수 있는 속성으로 스크립트로 값을 변경할 수 없습니다.
   XCSS 에 -nexa-rtl-background-image 속성값을 설정하지 않으면 background 속성에 설정된 이미지가 적용됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.

- 배경이미지가 적용되는 영역은 컴포넌트의 클라이언트 영역입니다.

- background 속성에 배경색이 설정되어 있을 경우 배경색 위에 이미지가 표시됩니다.

- 그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
   background 속성에 그라데이션이 설정되어 있을 경우 오동작이 발생할 수 있습니다.


---

### -nexa-rtl-edge-image

> Form > Property > -nexa-rtl-edge-image

**Description**

Form 의 rtl 속성이 true 로 적용될 때 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
Form.-nexa-rtl-edge-image
```

**Setting Syntax**

```javascript
strRtlEgImage ::= "URL(' " <Theme-Image> | <Web-Image> " ')"
```
```javascript
* XCSS
-nexa-rtl-edge-image : URL("http://localhost/Test.jpg");
-nexa-rtl-edge-image : URL("theme://images/Test.jpg")
```
- **`strRtlEgImage`** — "URL ('<이미지위치>')" 형식으로 테마 또는 웹의 이미지 경로를 문자열로 설정합니다.

-nexa-edge 속성에 설정된 값 중 이미지만 설정한 이미지로 대체됩니다.
-nexa-edge 속성에 설정된 이미지 이외의 값은 동일하게 적용됩니다.
- **`<Theme-Image>`** — 테마에 정의된 이미지를 "theme://images/이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/이미지명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.

**Remark**

- rtl 속성에 의해 표시기준이 변경되면 반전된 이미지를 적용하려 할 때 사용하는 속성입니다.

- XCSS 에서만 설정할 수 있는 속성으로 스크립트로 값을 변경할 수 없습니다.
   XCSS 에 -nexa-rtl-edge-image 속성값을 설정하지 않으면 -nexa-edge 속성에 설정된 이미지가 적용됩니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.

- 배경이미지가 적용되는 영역은 컴포넌트의 클라이언트 영역입니다.

- background 또는 -nexa-rtl-background-image 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-rtl-edge-image 속성에 설정된 이미지가 제일 위에 표시됩니다.


◆ web runtime environment 제약

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### accessibilityaction

> Form > Property > accessibilityaction

**Description**

Form에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 action 정보를 설정하는 속성입니다.

**Syntax**

```javascript
Form.accessibilityaction[= strAction]
```

**Setting Syntax**

```javascript
this.accessibilityaction = "Accessibility Action Message"; 
this.accessibilityaction = "Select by direction key";
```
- **`strAction`** — accessibilitydescreadtype 속성값에 "action"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 컴포넌트에 선택상자 이동 시 사용자가 추가적인 정보를 얻기 위해 필요한 동작을 안내하는 용도로 사용합니다. 
  예를 들어 컴포넌트 특성에 따라 다음과 같이 속성값을 설정할 수 있습니다.
  
  - CheckBox 컴포넌트의 경우 아래와 같은 안내문을 accessibilityaction 속성값으로 설정할 수 있습니다.
  "선택 상태를 전환하려면 스페이스 바를 누릅니다."
  
  - WebBrowser, WebView 컴포넌트의 경우 스크린 리더 사용자를 위한 안내문을 accessibilityaction 속성값으로 설정할 수 있습니다.
  "웹 브라우저 컴포넌트 내 콘텐츠를 이용하기 위해서는 가상커서를 해제해 주세요."
  그리고 WebBrowser, WebView 컴포넌트를 벗어났을 때 필요한 안내문을 accessibilityleavemessage 속성값으로 설정합니다.
  "가상커서를 설정해 주세요"


---

### accessibilitydesclevel

> Form > Property > accessibilitydesclevel

**Description**

Form 에 선택상자 이동 시 하위 컴포넌트의 접근성 출력여부를 설정하는 속성입니다.

**Syntax**

```javascript
Form.accessibilitydesclevel[= enumLevel]
```

**Setting Syntax**

```javascript
enumLevel ::= 'all' | 'self' | 'child' | 'none'
```
```javascript
this.accessibilitydesclevel = "all";
```
- **`"all"`** — Form 와 자식 컴포넌트에 대한 접근성을 모두 출력합니다.
- **`"self"`** — Form 의 접근성만 출력하고 자식 컴포넌트의 접근성은 출력하지 않습니다.
- **`"child"`** — Form 의 접근성은 출력하지 않고, 자식 컴포넌트의 접근성은 출력합니다.
- **`"none"`** — Form 와 자식 컴포넌트에 대한 접근성을 모두 출력하지 않습니다.

**Remark**

- accessibilitydesclevel 속성값을 설정하지 않으면 "all" 로 적용됩니다.

- Button 과 같이 자식 컴포넌트가 없는 컴포넌트는 "all" 또는 "child" 로 설정 시 "self" 로 적용됩니다.

- Div 와 같은 컨테이너 컴포넌트는 "child" 설정 시 실제 컨텐츠의 접근성만을 출력합니다.

- accessibilitydesclevel 속성은 선택상자의 이동에 영향을 주지 않으므로 방향키로 선택상자가 Form 에 이동되게 하지 않으려면 accessibilityenable 속성을 설정하여야 합니다.


---

### accessibilitydescription

> Form > Property > accessibilitydescription

**Description**

Form에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 description 정보를 설정하는 속성입니다.

**Syntax**

```javascript
Form.accessibilitydescription[= strDescription]
```

**Setting Syntax**

```javascript
this.accessibilitydescription = "Option";
```
- **`strDescription`** — accessibilitydescreadtype 속성값에 "description"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.


---

### accessibilityenable

> Form > Property > accessibilityenable

**Description**

Form 에 선택상자 이동 시 접근성 관련 속성값 출력여부를 설정하는 속성입니다.

**Syntax**

```javascript
Form.accessibilityenable[= bEnable]
```

**Setting Syntax**

```javascript
bEnable ::= 'true' | 'false'
```
```javascript
this.accessibilityenable = false;
```
- **`true`** — Form 에 선택상자가 이동되면 접근성 관련 속성값을 출력합니다.

방향키 또는 제스처로 선택상자 이동 시 Static 과 같이 포커스를 갖지 않는 컴포넌트에도 선택상자가 이동됩니다.
- **`false`** — Form 에 선택상자가 이동되어도 접근성 관련 속성값을 출력하지 않습니다.

데스크탑 환경에서 방향키로 선택상자가 Form 에 이동되지 않습니다.
모바일 환경에서 제스처로 선택상자가 Form 에 이동되지 않습니다.

**Remark**

- accessibilityenable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- 선택상자 이동 시 컴포넌트의 ARIA-LABEL + Status + Role 순서로 정보가 조합되어 접근성으로 출력됩니다.
   각 정보의 조합순서는 스크린 리더의 종류에 따라 달라질 수 있습니다.
   > ARIA-LABEL : Environment 의 accessibilitydescreadtype 속성에 설정된 속성값이 반영됩니다.
   > Status : Form 의 현재 상태가 반영됩니다.
   > Role : accessibilityrole 속성값이 반영됩니다. accessibilityrole 속성값을 설정하지 않으면 Form 의 고유 Role 이 반영됩니다.

- accessibilityenable 속성값이 false 일 때 데스크탑 환경에서 방향키 외의 방법으로 선택상자를 Form 로 이동시키면 스크린 리딩 프로그램에서 임의의 값을 출력할 수 있습니다.


◆ 컨테이너 컴포넌트 선택상자 이동 제약

아래와 같은 환경에서 컨테이너 컴포넌트로 선택상자가 이동하지 않고 컨테이너 컴포넌트 내에 배치된 컴포넌트로 이동합니다.
- Android, iOS/iPadOS 운영체제에서 실행 시 (Div, PopupDiv, TabpageControl, View)
- Windows 운영체제에서 센스리더 가상커서 사용 시 (Div, PopupDiv, View)


---

### accessibilitylabel

> Form > Property > accessibilitylabel

**Description**

Form에 선택상자 이동 시 accessibilitydescreadtype 속성에 따라 스크린 리더의 음성 출력 대상으로 포함할 label 정보를 설정하는 속성입니다.

**Syntax**

```javascript
Form.accessibilitylabel[= strLabel]
```

**Setting Syntax**

```javascript
this.accessibilitylabel = "OK Button"; 
this.accessibilitylabel = "[@static00]"; 
this.accessibilitylabel = "[@static00][@static01]"; 
this.accessibilitylabel = "[@static00][@static01] OK Button";
```
- **`strLabel`** — accessibilitydescreadtype 속성값에 "label"이 포함된 경우 스크린 리더의 음성 출력 대상으로 포함할 값을 설정합니다.
문자열로 설정하거나 부모가 같은 컴포넌트의 accessibilitylabel 속성값을 참조할 수 있습니다.
다른 컴포넌트 참조 시에는 "[@ComponentID]" 형식으로 컴포넌트의 id를 대괄호와 "@" 문자를 사용하여 설정합니다.
참조하는 참조값에 해당하는 컴포넌트를 찾을 수 없는 경우에는 참조값 자체가 문자열로 처리됩니다.

**Remark**

- enableaccessibility 속성값이 true인 경우만 적용되는 속성입니다.

- accessibilitydescreadtype 속성값에 "label"이 포함되었으나 accessibilitylabel 속성값을 설정하지 않으면 스크린 리더의 음성 출력 대상에 포함하지 않습니다.


---

### accessibilityrole

> Form > Property > accessibilityrole

**Description**

Form에 선택상자 이동 시 스크린 리더가 읽어주는 Role 정보를 설정하는 속성입니다.

**Syntax**

```javascript
Form.accessibilityrole[= enumRole]
```

**Setting Syntax**

```javascript
enumRole ::= 'none' | 'alert' | 'application' | 'button' | 'calendar' | 'chart' | 'checkbox' | 'columnheader' | 'combobox' | 'datepicker' | 'edit' | 'fileupload' | 'form' | 'frame' | 'grid' | 'gridcell' | 'groupbox' | 'heading' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6' | 'image' | 'link' | 'listbox' | 'menubar' | 'progressbar' | 'radio' | 'rowheader' | 'scrollbar' | 'spin' | 'static' | 'statusbar' | 'tab' | 'tabpage' | 'textarea' | 'titlebar' | 'toolbar' | 'tooltip' | 'treegrid' | 'treeitem' | 'webbrowser'
```
```javascript
this.accessibilityrole = "none"; 
this.accessibilityrole = "button";
```
- **`enumRole`** — - "none": 스크린 리더에서 Role 정보를 처리하지 않습니다.

- 속성값을 설정하지 않으면 컴포넌트/오브젝트에 따라 기본 accessibilityrole 값이 적용됩니다.
"application": Application, MainFrame
"button": Button, FileDownload
"calendar": Calendar
"checkbox": CheckBox
"combobox": ComboBox
"edit": Edit, MaskEdit
"frame": FrameSet, ChildFrame
"fileupload": FileUpload
"form": Form, Div
"groupbox": GroupBox
"image": ImageViewer, Sketch
"listbox": ListBox
"menubar": Menu
"progressbar": ProgressBar
"radio": Radio
"spin": Spin
"static": Static
"tab": Tab
"tabpage": TabPage
"textarea": TextArea
"webbrowser": WebBrower

- Grid 컴포넌트의 경우 하위 오브젝트까지 Role을 적용합니다.
"grid": Grid
"gridcell": Grid Cell
"columnheader": Grid Column Head
"rowheader": Grid Row Head
"treegrid": TreeGrid
"treeitem": TreeItem, TreeCell

- 기능에 따라 컴포넌트 또는 오브젝트의 하위 오브젝트 영역에 아래와 같은 Role이 적용됩니다.
"alert": Alert, Confirm, UserConfirm
"chart": Chart
"datepicker": DatePicker
"link": Link
"scrollbar": ScrollBar
"statusbar": StatusBar
"titlebar": TitleBar
"toolbar": ToolBar
"tooltip": Tooltip

- "heading" 또는 "heading1"부터 "heading6" 사이의 값으로 속성값을 설정하면 role, aria-level 값을 처리합니다.
예를 들어 속성값을 "heading3"으로 설정하면 Generate되는 코드 태그에 role="heading", aria-level="3" 형식으로 값을 처리합니다.
속성값을 "heading"으로 설정 시에는 "heading1"을 설정한 것과 같은 동작을 처리합니다.
accessibilityheadingnexthotkey, accessibilityheadingprevhotkey 속성값으로 설정한 단축키로 이동 시 사용할 수 있습니다.

**Remark**

- enableaccessibility 속성값이 true 인 경우만 적용되는 속성입니다.

- accessibilityenable 속성값을 설정하지 않으면 Form의 기본 Role 로 적용됩니다.

- 추가적인 속성값이 필요한 Role 설정 시 Form에 해당 속성이 없으면 스크린 리더에 따라 정상적으로 정보를 읽지 못할 수 있습니다.


---

### all

> Form > Property > all

**Description**

Form 에 등록된 모든 오브젝트를 갖고 있는 읽기전용 속성입니다.

**Syntax**

```javascript
this.all
```

**Setting Syntax**

```javascript
var allobjects = this.all
var object1 = this.all[0];
```

**Remark**

- all 속성을 사용하면 Component, DataSet, Invisible Object, Bind 정보에 접근할 수 있습니다.    

- all 속성은 Collection 접근방식을 사용할 수 있습니다.
  this.all[0], this.all["Button00"], this.all.length 등의 방법을 사용합니다.


---

### background

> Form > Property > background

**Description**

Form 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
Form.background[= strbackground]
```

**Setting Syntax**

```javascript
strBackground ::= [<bg-image> | <linear-gradient>] [<background-origin> [<background-clip>]] [<background-color>]

<bg-image> ::= 'none' | <imageurl> [<repeat-style>] [<position>]
   <imageurl> ::= 'URL(' <Theme-Image> | <Web-Image> ')'
   <repeat-style> ::= 'repeat-x' | 'repeat-y' | 'repeat' | 'no-repeat'
   <position> ::= <horizontal-position> <vertical-position> ['/' <background-size>]
      <horizontal-position> ::= 'left' | 'center' | 'right' | <pos-percentage> '%'
      <vertical-position> ::= 'top' | 'center' | 'bottom' | <pos-percentage> '%'
      <background-size> ::= 'auto' | 'cover' | 'contain' | (<length> 'px' | <percentage> '%') {1,2}

<linear-gradient> ::= 'linear-gradient(' [<angle> , ] <color-stop> ')'
   <angle> ::= 'to left' | 'to right' | 'to top' | 'to bottom' | 'to left top' | 'to left bottom' | 'to right top' | 'to right bottom'
   <color-stop> ::= <startcolor-stop> [<listcolor-stop>] <endcolor-stop>
      <startcolor-stop> ::= <color> [<percentage>'%']
      <endcolor-stop> ::= <color> [<percentage>'%']
      <listcolor-stop> ::= <color> [<percentage>'%"] [,<listcolor-stop>]*
         <color> ::= <NamedColor> | <NumericColor>

<background-origin> ::= 'border-box' | 'padding-box'
<background-clip> ::= 'border-box' | 'padding-box'
<background-color> ::= <NamedColor> | <NumericColor>
```
```javascript
* XCSS
background : #ffffaa;
background : "URL('./images/smiley.gif')" no-repeat center center #ffffaa;
background : "URL('./images/smiley.gif')" no-repeat center center /auto #ffffaa;
background : "URL('./images/smiley.gif')" no-repeat center center /15px 15% #ffffaa;
background : linear-gradient( red , blue , yellow );
background : linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0));
background : "URL('./images/smiley.gif')" border-box border-box #ffffaa;

* Script ( normal property )
this.background = "#ffffaa";
this.background = ""URL('./images/smiley.gif')" no-repeat center center #ffffaa";
this.background = ""URL('./images/smiley.gif')" no-repeat center center /auto #ffffaa";
this.background = ""URL('./images/smiley.gif')" no-repeat center center /15px 15% #ffffaa";
this.background = "linear-gradient( red , blue , yellow )";
this.background = "linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0))";
this.background = ""URL('./images/smiley.gif')" border-box border-box #ffffaa";
```
- **`<bg-image>`** — 배경에 표시될 이미지를 "'none' | <imageurl> [<repeat-style>] [<position>]" 형식으로 설정합니다.

<background-color> 값이 설정되어 있으면 배경색 위로 이미지가 표시됩니다.

"none" 으로 설정하면 이미지를 설정하지 않습니다.
<imageurl> 값으로 이미지를 설정할 수 있습니다.
<repeat-style> 값으로 이미지의 반복표시 방향을 설정할 수 있습니다.
<position> 값으로 이미지의 표시위치를 설정할 수 있습니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<imageurl>`** — 배경에 표시될 이미지를 "'URL(' <Theme-Image> | <Web-Image> ')'" 형식으로 설정합니다.

"URL ( [이미지경로] )" 형식으로 테마 또는 웹의 이미지를 설정합니다.
- **`<Theme-Image>`** — 테마에 선언된 이미지를 "theme://images\이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/파일명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<repeat-style>`** — 배경에 표시될 이미지의 반복표시 방향을 설정합니다.

"repeat-x" 설정 시 이미지가 가로 방향으로 반복표시 됩니다.
"repeat-y" 설정 시 이미지가 세로 방향으로 반복표시 됩니다.
"repeat" 설정 시 이미지가 가로,세로 방향으로 모두 반복표시 됩니다.
"no-repeat" 설정 시 이미지가 반복표시 되지 않습니다.

값을 설정하지 않으면 "repeat" 로 적용됩니다.
- **`<horizontal-position>`** — 배경에 표시될 이미지의 가로 위치를 설정합니다.

"left" 설정 시 Form 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 Form 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 Form 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 Form 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 Form 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 Form 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<horizontal-position> 값을 설정하고, <vertical-position> 값을 설정하지 않으면 <vertical-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <vertical-position> 은 "top" 으로 적용됩니다.
- **`<pos-percentage>`** — 배경에 표시될 이미지의 가로/세로 위치를 비율로 설정합니다.

<horizontal-position> 에 "0%" 설정 시 "left" 와 같은 위치로 적용됩니다.
<horizontal-position> 에 "50%" 설정 시 "center" 와 같은 위치로 적용됩니다.
<horizontal-position> 에 "100%" 설정 시 "right" 과 같은 위치로 적용됩니다.
<vertical-position> 에 "0%" 설정 시 "top" 와 같은 위치로 적용됩니다.
<vertical-position> 에 "50%" 설정 시 "center" 와 같은 위치로 적용됩니다.
<vertical-position> 에 "100%" 설정 시 "bottom" 과 같은 위치로 적용됩니다.

0 보다 작거나 100 보다 큰 값을 설정 시 Form 의 영역을 벗어난 가상의 위치로 적용됩니다.

값 설정 시 "%" 단위를 생략할 수 없습니다.
- **`<background-size>`** — 배경에 표시될 이미지의 크기를 설정합니다.
- auto: 원본 이미지 크기를 유지합니다.
- cover: 이미지 비율을 유지하는 한도 내에서 배경에 빈 공간이 없도록 가장 크게 설정합니다.
  width 또는 height 길이가 긴 쪽은 잘려서 표시될 수 있습니다.
- contain: 이미지가 잘리지 않고 비율을 유지하는 한도 내에서 가장 크게 설정합니다.
- <length> | <percentage>: 이미지의 width, height 크기 또는 컴포넌트 대비 비율을 설정합니다. 
  width 값만 설정하면 원본 이미지 비율에 따라 height 크기를 자동으로 처리합니다.
  height 값만 설정할 수는 없습니다. 
  음수값은 설정할 수 없습니다.
- **`<linear-gradient>`** — 배경에 표시될 그라데이션을 "'linear-gradient(' [<angle> , ] <color-stop> ')'" 형식으로 설정합니다.

<background-color> 값이 설정되어 있으면 배경색 위로 그라데이션이 표시됩니다.

"linear-gradient ( [방향, 색상값, 색상값, ...] )" 형식으로 그라데이션 방향과 색상을 설정할 수 있습니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<angle>`** — 그라데이션의 표시 방향을 설정합니다.

"to left" 설정 시 오른쪽에서 왼쪽 방향으로 그라데이션이 표시됩니다.
"to right" 설정 시 왼쪽에서 오른쪽 방향으로 그라데이션이 표시됩니다.
"to top" 설정 시 아래쪽에서 윗쪽 방향으로 그라데이션이 표시됩니다.
"to bottom" 설정 시 윗쪽에서 아래쪽 방향으로 그라데이션이 표시됩니다.
"to left top" 설정 시 오른쪽 아래 방향에서 왼쪽 윗 방향으로 그라데이션이 표시됩니다.
"to left bottom" 설정 시 오른쪽 윗 뱡향에서 왼쪽 아래 방향으로 그라데이션이 표시됩니다.
"to right top" 설정 시 왼쪽 아래 방향에서 오른쪽 윗 방향으로 그라데이션이 표시됩니다.
"to right bottom" 설정 시 왼쪽 윗 방향에서 오른쪽 아래 방향으로 그라데이션이 표시됩니다.

값을 설정하지 않으면 "to bottom"으로 적용됩니다.
- **`<color-stop>`** — 그라데이션의 시작점, 끝점, 중간점의 색을 "<startcolor-stop> [<listcolor-stop>] <endcolor-stop>" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 시작점과 끝점의 위치가 결정됩니다.
예를 들어 <angle> 값이 "to left" 이면 Form 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 Form 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

<listcolor-stop> 에 그라데이션 중간점의 색을 한개 이상 설정할 수 있으며 <percentage> 값 생략 시 균등하게 표시됩니다.
- **`<startcolor-stop>`** — 그라데이션의 시작점 색을 "<color> [<percentage>'%']" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 시작점 위치가 결정됩니다.
시작점의 <percentage> 값을 "0" 이상으로 설정 시 "시작점~설정값"까지 동일한 색상으로 표시됩니다.
- **`<endcolor-stop>`** — 그라데이션의 끝점 색을 "<color> [<percentage>'%']" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 끝점 위치가 결정됩니다.
끝점의 <percentage> 값을 "100" 이하로 설정 시 "설정값~끝점"까지 동일한 색상으로 표시됩니다.
- **`<listcolor-stop>`** — 그라데이션의 중간점 색을 "<color> [<percentage>'%"] [,<listcolor-stop>]*" 형식으로 설정합니다.

시작점과 끝점 사이에 적용될 중간색을 ","로 구분하여 여러개 설정할 수 있습니다.
뒤에 선언된 색의 <percentage> 값은 먼저 선언된 색의 <percentage> 값보다 커야 합니다.
- **`<color>`** — 그라데이션 색상을 색상이름 또는 색상코드로 설정합니다.
- **`<percentage>`** — <color> 에 해당하는 색이 적용될 위치를 비율값으로 설정합니다.

<angle> 값에 의해 결정된 시작점이 "0%" 로 적용됩니다.
<angle> 값에 의해 결정된 끝점이 "100%" 로 적용됩니다.

0 보다 작거나 100 보다 큰 값을 설정 시 Form 의 영역을 벗어난 가상의 위치로 적용됩니다.
예를 들어 "150%" 설정 시 시작점에서 끝점까지 거리의 반만큼 끝점에서 벗어난 위치에 <color> 값이 적용됩니다.

<percentage> 값을 생략하면 균등한 위치에 <color> 값이 적용됩니다.
값 설정 시 "%" 단위를 생략할 수 없습니다.
- **`<background-origin>`** — 배경으로 처리될 기준영역을 설정합니다.

"border-box" 설정 시 Border 를 포함한 영역이 배경영역으로 처리됩니다.

"padding-box" 설정 시 Border 의 안쪽 영역이 배경영역으로 처리됩니다.
"padding-box" 설정 시 그라데이션의 시작점, 끝점과 배경이미지의 반복 기준위치가 Border 안쪽 영역으로 처리됩니다.

값을 설정하지 않으면 "padding-box" 로 적용됩니다.
- **`<background-clip>`** — 배경이 실제로 표시될 영역을 설정합니다.

"border-box" 설정 시 Border 를 포함한 영역에 배경이 표시됩니다.
"padding-box" 설정 시 Border 의 안쪽 영역에 배경이 표시됩니다.

값을 설정하지 않으면 <background-origin> 에 설정한 값이 동일하게 적용됩니다.
<background-origin> 값도 설정하지 않았을 경우 "border-box" 로 적용됩니다.
- **`<background-color>`** — 배경에 표시될 색을 색상이름 또는 색상코드로 설정합니다.

<bg-image> 또는 <linear-gradient> 값이 설정되어 있다면 배경색은 배경이미지 또는 그라데이션 아래에 표시됩니다.
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 Form 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- background 속성값을 설정하지 않으면 undefined 가 설정되고, "transparent" 로 동작합니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.

- 배경의 기준영역과 표시영역은 <background-origin>, <background-clip> 값으로 각각 설정합니다.

- 배경 이미지를 중앙에 위치시키려면 <position> 값을 "center" 또는 "center center" 로 설정하여야 합니다.

- 배경이미지와 배경색을 모두 설정하면 배경색 위에 이미지가 표시됩니다.
   그라데이션과 배경색을 모두 설정하면 배경색 위에 그라데이션이 표시됩니다.

- 그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
   두 값을 동시에 설정 시 오동작이 발생할 수 있습니다.


---

### binds

> Form > Property > binds

**Description**

Form 에 등록된 Component 와 DataSet 의 바인딩 정보를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
this.binds
```

**Setting Syntax**

```javascript
var bindlist = this.binds;
var binditem1 = this.binds[0];
```

**Remark**

- binds 속성은 Collection 접근방식을 사용할 수 있습니다.
  this.binds[0], this.binds["item0"], this.binds.length 등의 방법을 사용합니다.


---

### border-radius

> Form > Property > border-radius

**Description**

Form 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
Form.borderRadius[= strborderradius]
```

**Setting Syntax**

```javascript
strborderradius ::= <horizontal-radius>{4} ['/' <vertical-radius>{4}]
```
```javascript
* XCSS
border-radius : 10px;
border-radius : 5px 6px 10px / 5px 10px;

* Script ( normal property )
this.borderRadius = "10px";
this.borderRadius = "5px 6px 10px / 5px 10px";
```
- **`<horizontal-radius>`** — 모서리를 둥글게 표시하기 위한 가로크기를 설정합니다.

pixel 단위로 입력하며 스페이스를 구분자로 4개값까지 설정할 수 있습니다.

값을 1회 입력 시 top-left/top-right/bottom-right/bottom-left 모서리의 가로크기로 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top-left/bottom-right, top-right/bottom-left 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top-left, top-right/bottom-left, bottom-right 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top-left, top-right, bottom-right, bottom-left 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
- **`<vertical-radius>`** — 모서리를 둥글게 표시하기 위한 세로크기를 설정합니다.

pixel 단위로 입력하며 스페이스를 구분자로 4개값까지 설정할 수 있습니다.

값을 1회 입력 시 top-left/top-right/bottom-right/bottom-left 모서리의 세로크기로 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top-left/bottom-right, top-right/bottom-left 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top-left, top-right/bottom-left, bottom-right 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top-left, top-right, bottom-right, bottom-left 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.

**Remark**

- border-radius 속성값을 설정하지 않으면 undefined 가 설정되고, "0px" 로 동작합니다. 

- 스크립트로 접근 시 속성명은 "borderRadius" 를 사용해야 합니다.

- <horizontal-radius>와 <vertical-radius>는 "/" 문자로 구분하여 입력합니다.

- Calendar, Combo 와 같이 하위 컨트롤이 존재하는 컴포넌트는 하위컨트롤에도 border-radius 속성을 설정해야 정상적으로 모서리가 표시됩니다.


◆ NRE 제약

- border-radius 속성을 설정하면 모든 테두리가 같은 색으로 적용됩니다.
   -nexa-border 속성에서 top 에 적용된 색이 모든 테두리에 적용됩니다.


---

### color

> Form > Property > color

**Description**

Form 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
Form.color[= strcolor]
```

**Setting Syntax**

```javascript
strcolor ::= <NamedColor> | <NumericColor>
```
```javascript
* XCSS
color : #999999;
color : rgb ( 255, 0, 0 );
color : red;

* Script ( normal property )
this.color = "#999999";
this.color = "rgb(255,0,0)";
this.color = "red";
```
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- color 속성값을 설정하지 않으면 undefined 가 설정되고, "#000000" 으로 동작합니다.


◆ web runtime environment 제약

- XCSS 를 사용하지 않고 rgba(), hsl(), hsla() 메소드를 속성에 직접 설정할 경우 브라우저 버전에 따라 적용되지 않을 수 있습니다.


---

### components

> Form > Property > components

**Description**

Form 에 등록된 모든 컴포넌트를 갖고 있는 읽기전용 속성입니다.

**Syntax**

```javascript
this.components
```

**Setting Syntax**

```javascript
var comp = this.components[0];
```

**Remark**

- components 속성은 Collection 접근방식을 사용할 수 있습니다.
  this.components[0], this.components["Button00"], this.components.length 등의 방법을 사용합니다.


---

### cssclass

> Form > Property > cssclass

**Description**

Form 의 Style 을 XCSS 파일에 정의된 class 로 설정하는 속성입니다.

**Syntax**

```javascript
Form.cssclass[= strcssclass]
```

**Setting Syntax**

```javascript
strcssclass ::= <ClassName> [ , &ltClassName> ]*
```
```javascript
this.cssclass = "TestClass"; 
this.cssclass = "TestClass,TestClass2";
```
- **`<ClassName>`** — XCSS 에 정의된 classname 을 설정합니다.

**Remark**

- XCSS 에 정의된 ".classname" 형식에서 "." 를 제외하고 "classname" 만 설정합니다.

- Style 에 적용되는 방식은 XCSS Attribute 지정과 동일하게 XCSS 내의 순서대로 적용됩니다.

- Status 를 적용하고자 할 경우는 "classname" 에 Status 를 붙여서 사용합니다.

- ',' 를 사용하여 class 를 다중으로 지정하게 되면 class 가 중첩되어 적용됩니다.
   중첩된 class 의 내용에 중복이 있다면 XCSS 내의 순서상 마지막으로 기술된 것이 적용됩니다.


◆ web runtime environment 제약

- web runtime environment 는 cssclass 명의 첫문자가 숫자일 경우 속성값이 적용되지 않으므로 주의하여야 합니다.


---

### cursor

> Form > Property > cursor

**Description**

Form 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
Form.cursor[= strCursor]
```

**Setting Syntax**

```javascript
strCursor ::= 'none' | 'auto' | 'default' | 'copy' | 'crosshair' | 'help' | 'move' | 'not-allowed' | 'pointer' | 'progress' | 'text' | 'wait' | 'ew-resize' | 'e-resize' | 'w-resize' | 'ns-resize' | 'n-resize' | 's-resize' | 'nesw-resize' | 'ne-resize' | 'sw-resize' | 'nwse-resize' | 'nw-resize' | 'se-resize'
```
```javascript
* XCSS
cursor : default;

* Script ( normal property )
this.cursor = "default";
```
- **`"none"`** — 마우스 포인터를 표시하지 않습니다.

* macOS NRE는 지원하지 않습니다.
- **`"auto"`** — 컴포넌트의 특성에 맞는 포인터가 표시됩니다.

Edit계열 컴포넌트는 "text" 포인터가 표시됩니다.
그외 계열 컴포넌트는 "arrow" 포인터가 표시됩니다.
- **`"default"`** — 시스템의 기본 포인터가 표시됩니다.

일반적으로 "arrow" 포인터가 표시됩니다.
- **`"copy"`** — 화살표와 작은 십자("+") 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"crosshair"`** — 십자("+") 모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"help"`** — 화살표와 작은 물음표 모양의 포인터가 표시됩니다.

* Safari 브라우저는 물음표 모양의 포인터가 표시됩니다.
* macOS NRE 는 지원하지 않습니다.
- **`"move"`** — 십자 화살표 모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"not-allowed"`** — 금지 표지판 모양의 포인터가 표시됩니다.

* Safari 브라우저는 화살표와 금지 표지판 모양의 포인터가 표시됩니다.
* macOS NRE 는 지원하지 않습니다.
- **`"pointer"`** — 손모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"progress"`** — OS 또는 환경에 따라 다른 형태의 포인터가 표시됩니다.

원, 화살표와 모래시계, 화살표와 원 등 다양한 형태로 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"text"`** — 아이("I") 모양의 포인터가 표시됩니다.
- **`"wait"`** — OS 또는 환경에 따라 다른 형태의 포인터가 표시됩니다.

원, 모래시계, 시계 등 다양한 형태로 표시됩니다.
- **`"ew-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"e-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"w-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"ns-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"n-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"s-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"nesw-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"ne-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"sw-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"nwse-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"nw-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"se-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

**Remark**

- cursor 속성값을 설정하지 않으면 undefined 가 설정되고 "auto" 로 동작합니다.

- disable 상태인 서브컨트롤이 있는 컴포넌트의 경우 마우스 포인터는 서브컨트롤 영역에서
   서브컨트롤의 disable status값이 적용되지 않고, 컴포넌트의 enable status 설정값이 적용됩니다.
   서브컨트롤과 컴포넌트가 모두 disable 상태일 때는 parent 의 enable status 설정값이 적용됩니다.


---

### dragscrolltype

> Form > Property > dragscrolltype

**Description**

Form에서 터치 후 드래그로 스크롤이 발생할 경우, 스크롤 방향을 설정하는 속성입니다.

**Syntax**

```javascript
Form.dragscrolltype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'vert' | 'horz' | 'both' | 'all'
```
- **`"none"`** — 터치 후 드래그로 스크롤이 발생하지 않습니다.

* Environment 오브젝트의 enabletouchevent 속성값이 false인 경우에는 다음과 같이 동작합니다.
 - scrolltype 속성값이 "none"인 경우, 드래그로 스크롤이 발생하지 않습니다.
 - scrolltype 속성값이 "none"이 아닌 경우, scrolltype 속성으로 설정한 스크롤 방향에 따라 드래그 스크롤이 발생합니다.
- **`"vert"`** — 터치 후 드래그로 수직 스크롤만 발생합니다.

* scrolltype 속성값이 "vertical" 또는 "both"인 경우에만 적용됩니다.
  scrolltype 속성값을 "horizontal"로 설정한 경우에는 수평 방향으로만 드래그 스크롤이 발생합니다.
- **`"horz"`** — 터치 후 드래그로 수평 스크롤만 발생합니다.

* scrolltype 속성값이 "horizontal" 또는 "both"인 경우에만 적용됩니다.
  scrolltype 속성값을 "vertical"인 경우에는 수직 방향으로만 드래그 스크롤이 발생합니다.
- **`"both"`** — 터치 후 드래그로 수직, 수평 스크롤 모두 발생합니다.

* scrolltype 속성값이 "both"인 경우에만 적용됩니다.
  scrolltype 속성값을 "vertical" 또는 "horizontal"인 경우에는 scrolltype 속성으로 설정한 스크롤 방향에 따라 드래그 스크롤이 발생합니다.
- **`"all"`** — 터치 후 드래그로 수직, 수평, 대각선 스크롤이 모두 발생합니다.

* scrolltype 속성값이 "both"인 경우에만 적용됩니다.
  Environment 오브젝트의 enabletouchevent 속성값이 false인 경우에는 대각선 방향으로 드래그 스크롤이 발생하지 않습니다.

**Remark**

- dragscrolltype 속성값을 설정하지 않으면 "all" 로 적용됩니다.

- 모바일 같이 터치 관련 이벤트가 발생하는 디바이스 에서만 속성이 적용됩니다.


---

### enable

> Form > Property > enable

**Description**

Form 의 사용가능 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Form.enable[= benable]
```

**Setting Syntax**

```javascript
benable ::= 'true' | 'false'
```
```javascript
this.enable = true;
this.enable = false;
```
- **`true`** — Form 을(를) 사용할 수 있게 설정합니다.
- **`false`** — Form 을(를) 사용할 수 없게 설정합니다.

하위 컨트롤이 있을 경우 하위 컨트롤에 "disabled" Status 가 적용됩니다.

**Remark**

- enable 속성값을 설정하지 않으면 true 로 적용됩니다.

- enable 속성값이 false 이면 컴포넌트가 화면에 표시되지만 포커스나 입력을 받을 수 없습니다.

- Div 와 같은 컨테이너 컴포넌트의 enable 속성값을 false 로 설정하면 자식 컴포넌트도 모두 Disable 됩니다.


---

### enableevent

> Form > Property > enableevent

**Description**

Form 에서 이벤트를 발생시킬지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Form.enableevent[= bEvent]
```

**Setting Syntax**

```javascript
bEvent ::= 'true' | 'false'
```
```javascript
this.enableevent = true;  

this.enableevent = false;
```
- **`true`** — Form 에서 이벤트가 발생하도록 설정합니다.
- **`false`** — Form 에서 이벤트가 발생하지 않도록 설정합니다.

**Remark**

- enableevent 속성을 false 로 설정하면 이벤트 발생으로 인한 처리속도 지연과 화면 깜빡임을 방지할 수 있습니다.


---

### font

> Form > Property > font

**Description**

Form 에서 사용하는 폰트를 설정하는 속성입니다.

**Syntax**

```javascript
Form.font[= strfont]
```

**Setting Syntax**

```javascript
strfont ::= [<font-style>] [<font-weight>] <font-size> ['/'<line-height>] <font-family>

<font-style> ::= 'normal' | 'italic'
<font-weight> ::= 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
<font-size> ::= <nSize> 'px'|'pt'|'em'|'rem'
<line-height> ::= 'normal' | <nValue> | <nPixel>'px' | <nPercent>'%'
<font-family> ::= <font-name> [',' <font-name>]*
```
```javascript
* XCSS
font : bold 12pt/30px arial, sans-serif;

* Script ( normal property )
this.font = "bold 12pt/30px arial, sans-serif";
```
- **`<font-style>`** — 폰트의 스타일을 설정합니다.

"normal" 설정 시 스타일이 적용되지 않습니다.
"italic" 설정 시 기울임 스타일이 적용됩니다.
- **`<font-weight>`** — 폰트의 굵기를 설정합니다.

"normal" 설정 시 굵기가 적용되지 않습니다.
"bold" 설정 시 굵은 폰트가 적용됩니다.

"100"~"900" 로 설정 시 설정한 굵기로 폰트가 적용됩니다.
"100"~"900" 로 설정 시 굵기에 해당하는 폰트가 정의되어 있어야 합니다.
- **`<font-size>`** — 폰트 크기의 단위는 아래와 같이 절대 길이 단위와 상대 길이 단위로 설정할 수 있습니다.
단위를 지정하지 않으면 속성값이 적용되지 않습니다.
- 절대 길이 단위: pixel("px"), point("pt")
- 상대 길이 단위: "em", "rem"

폰트 크기 단위를 "em", "rem"으로 설정한 경우에는 아래와 같이 폰트 크기가 계산됩니다.
- "em": 상위 컴포넌트 font-size 기준으로 상대적인 크기를 설정
- "rem": MainFrame font-size 기준으로 상대적인 크기를 설정
- **`<nSize>`** — 폰트 크기 단위에 따라 정수 또는 소수로 설정합니다.
음수값은 설정할 수 없습니다.
- "px", "pt": 정수
- "em", "rem": 정수 또는 소수
- **`<line-height>`** — 텍스트가 여러줄로 표시되는 경우 줄 사이의 간격을 설정합니다.

음수값을 설정할 수 없습니다.

"normal" 설정 시 줄 사이의 간격을 설정하지 않습니다.
"normal" 설정 시 웹브라우저마다 줄 사이의 간격이 다르게 적용됩니다.
"normal" 설정 시 Nexacro Runtime Environment는 폰트 크기에 곱할 값(<nValue>값)이 "1.15" 일 때와 동일하게 동작합니다.
- **`<nValue>`** — 폰트 크기에 곱할 값을 설정합니다.

계산 결과값이 줄 사이 간격으로 적용됩니다.
- **`<nPixel>`** — 줄 사이의 간격을 pixel 단위의 숫자로 설정합니다.

"px" 단위를 생략할 수 없습니다.
- **`<nPercent>`** — 폰트 크기에 곱할 비율값을 설정합니다.

계산 결과값이 줄 사이 간격으로 적용됩니다.
"%" 단위를 생략할 수 없습니다.
- **`<font-family>`** — 폰트 이름을 리스트로 설정합니다.

콤마(",")로 구분하여 폰트 이름을 여러개 설정할 수 있습니다.
먼저 선언된 폰트가 우선적으로 적용됩니다.
선언된 폰트가 시스템에 없을 경우 선언된 순서대로 사용 가능한 폰트를 적용합니다.
선언된 폰트가 모두 없을 경우 시스템 기본 폰트가 적용됩니다.
- **`<font-name>`** — 폰트의 이름을 설정합니다.

**Remark**

- font 속성값을 설정하지 않으면 undefined 가 설정되고, "12pt/normal Verdana" 로 동작합니다.

- font 속성의 폰트 크기가 변경되면 <line-height> 에 적용된 값에 따라 줄간격이 변경될 수 있습니다.

- <font-weight> 를 수치로 설정 시 "400" 값이 일반적인 굵기로 적용되고, "700" 값이 "bold" 로 적용됩니다.
   폰트에 수치값에 해당하는 폰트굵기가 없다면 "400" 과 "700" 중 가까운 값으로 표시됩니다.

- UserFont 사용 시 환경별로 지원하는 포맷정보는 "Appendix > Supported UserFont" 항목을 참고하세요.


◆ WRE 제약

- -nexa-text-align 속성값이 "right" 일 때 font 속성에 "italic" 을 설정하면 마지막 텍스트의 기울어진 부분이 잘려서 표시될 수 있습니다.
   웹브라우저에서 텍스트영역을 일반글자 기준으로 처리한 후 기울임을 적용하면서 발생하는 문제입니다.


---

### height

> Form > Property > height

**Description**

Form 의 높이를 설정하는 속성입니다.

**Syntax**

```javascript
this.height[= nheight]
```

**Setting Syntax**

```javascript
nheight ::= <nVal> ['px']
```
```javascript
this.height = 10;
this.height = "10px";
```
- **`<nVal>`** — Form 의 높이를 pixel 단위의 숫자로 설정합니다.
0~12000 사이의 숫자만 설정할 수 있습니다.

**Remark**

- 높이값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### hscrollbar

> Form > Property > hscrollbar

**Description**

Form 의 서브컨트롤인 수평 스크롤바의 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Form.hscrollbar
```

**Setting Syntax**

```javascript
this.hscrollbar.decbuttonsize = 30;
```

**Remark**

- scrollbartype 속성값과 앱 실행 환경에 따라 반환하는 오브젝트가 달라집니다.
  ScrollBarControl 또는 ScrollindicatorControl 오브젝트를 반환합니다.

- hscrollbar 속성을 사용하여 수평 스크롤바의 속성값을 변경할 수 있습니다.

- hscrollbar 속성은 읽기전용이므로 해당 속성에 다른 컨트롤을 설정할 수 없지만,
  hscrollbar 속성이 갖는 수평 스크롤바 오브젝트의 하위 속성은 수정이 가능합니다.


---

### id

> Form > Property > id

**Description**

Form 의 고유 식별자를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Form.id
```

**Setting Syntax**

- **`id`** — Form 의 고유 식별자인 "form" 값을 갖습니다.

**Remark**

- 넥사크로 스튜디오에서 Form 의 id 값을 설정하면 name 속성에 설정됩니다.

- Form 은 단독으로 실행불가하며 ChildFrame, Div, PopupDiv, TabpageControl 의 하위 컨트롤로만 사용할 수 있습니다.
   ChildFrame, Div, PopupDiv, TabpageControl 은 생성 시 한 개의 Form(Inner Form)을 자동생성합니다.
   자동생성된 Form(Inner Form)은 디자인 된 Form 과 연결되며 고유 식별자로 "form" 값이 자동 설정됩니다.


---

### initvalueid

> Form > Property > initvalueid

**Description**

Form 에 적용될 InitValue 의 ID 를 설정하는 속성입니다.

**Syntax**

```javascript
Form.initvalueid[= strValueID]
```

**Setting Syntax**

- **`strValueID`** — InitValueDefinition 영역에 정의된 InitValue 파일에서 Form 에 적용할 항목의 ID 를 문자열로 설정합니다.

**Remark**

- Form 가 화면에 표시된 후에는 속성값을 설정하거나 변경 할 수 없습니다.
   Form 를 동적으로 생성 시 show() 메소드 실행 전에 속성값을 설정하여야 합니다.

- Screen 별로 Environment 의 initvaluefileid 속성을 각각 설정하면 Screen 에 따라 다른 초기값을 설정할 수 있습니다.

- InitValueDefinition 영역에 한 개 이상의 InitValue 파일을 정의할 수 있고,
   InitValue 파일에는 컴포넌트별로 여러개의 초기값 정의를 할 수 있습니다.


---

### letter-spacing

> Form > Property > letter-spacing

**Description**

Form 에 표시되는 문자의 간격(자간)을 설정하는 속성입니다.

**Syntax**

```javascript
Form.letterSpacing[= strspace]
```

**Setting Syntax**

```javascript
strspace ::= 'normal' | <nVal> ['px']
```
```javascript
* XCSS
letter-spacing : 2px ;

* Script ( normal property )
this.letterSpacing = "2px";
```
- **`"normal"`** — 문자 사이의 간격(자간)을 설정하지 않습니다.
- **`<nVal>`** — 문자 사이의 간격(자간)을 pixel 단위로 설정합니다.

스크립트 작성 시에는 "px" 단위 표기를 생략할 수 있습니다.
(XCSS 작성 시에는 "px" 단위를 포함해 작성해야 합니다).

**Remark**

- letter-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "letterSpacing"을 사용해야 합니다.


---

### locale

> Form > Property > locale

**Description**

Form 에 적용될 국가 및 언어(locale)를 설정하는 속성입니다.

**Syntax**

```javascript
this.locale[= strlocale]
```

**Setting Syntax**

```javascript
this.locale = "ko_KR";
```
- **`strlocale`** — "언어[_국가]" 형식의 문자열로 설정합니다.

**Remark**

- ISO 639-1에서 정의하고 있는 2-알파벳 언어 코드와 ISO 3166-1에서 정의하고 있는 2-알파벳 국가 코드를 조합하여 사용합니다.

- 국가 및 언어 코드는 "Appendix > Locale Code List" 항목을 참고하세요.


---

### name

> Form > Property > name

**Description**

Form 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
Form.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### objects

> Form > Property > objects

**Description**

Form 에 등록된 모든 Invisible Object 를 갖고 있는 읽기전용 속성입니다.

**Syntax**

```javascript
this.objects
```

**Setting Syntax**

```javascript
var invisibleobjects = this.objects;
var object1 = this.objects[0];
```

**Remark**

- objects 속성은 Collection 접근방식을 사용할 수 있습니다.
  this.objects[0], this.objects["DataSet00"], this.objects.length 등의 방법을 사용합니다.


---

### opacity

> Form > Property > opacity

**Description**

Form 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
Form.opacity[= stropacity]
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8;
opacity : 80%;

* Script ( normal property )
this.opacity = "0.8";
this.opacity = 0.8;
this.opacity = "80%";
```
- **`strOpacity`** — 0.0 ~ 1.0 사이의 값 또는 0.0% ~ 100.0% 사이의 값을 지정합니다.
0(또는 0%)을 설정하면 완전 투명, 1(또는 100%)을 설정하면 완전 불투명으로 처리됩니다.
1 이상의 값은 1로, 0 이하의 값은 0으로 처리됩니다. 마찬가지로 100% 이상의 값은 100%로, 0% 이하의 값은 0%로 처리됩니다.

XCSS는 숫자 또는 퍼센트 값으로만 설정할 수 있습니다.
Script는 숫자 또는 문자(숫자, 퍼센트 값)로 설정할 수 있습니다.

**Remark**

- opacity 속성값을 설정하지 않으면 undefined 가 설정되고, 1 로 동작합니다.

- Div 와 같이 자식 컴포넌트를 가질 수 있는 컴포넌트에 opacity 속성을 적용하면 자식 컴포넌트도 함께 적용됩니다.

- 부모와 자식 컴포넌트에 각각 opacity 속성이 설정되어 있으면 자식 컴포넌트의 투명도는 부모의 투명도에 추가적으로 적용됩니다.
   예를 들어 부모의 opacity가 0.5 이고 자식의 opacity가 0.4 이면 결과적으로 자식 컴포넌트는 0.2 의 투명도가 적용됩니다.


---

### opener

> Form > Property > opener

**Description**

화면에 실행된 Form의 부모 Form을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
this.opener
```

**Setting Syntax**

```javascript
var objParent = this.opener;
```

**Remark**

- "A" Form에서 "B" Form을 showModal 또는 open 메소드로 실행했을 경우 "B" Form의 opener 속성은 "A" Form을 갖습니다.

- 부모 Form이 없을 경우 "null"을 갖습니다.


---

### parent

> Form > Property > parent

**Description**

Form 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Form.parent
```

**Setting Syntax**

```javascript
var objParent = this.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- Form 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### rtl

> Form > Property > rtl

**Description**

Form 에서 내부 컨텐츠 또는 컴포넌트의 표시 기준을 설정하는 속성입니다.

**Syntax**

```javascript
Form.rtl
```

**Setting Syntax**

```javascript
bRtl ::= undefined | 'true' | 'false'
```
```javascript
var vRtl = this.rtl;
```
- **`undefined`** — undefined 설정 시 상위 컴포넌트의 rtl 속성값이 적용됩니다.

사용자가 rtl 속성값을 설정하지 않거나 삭제했을 경우 undefined 가 설정됩니다.
- **`true`** — Form 의 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 오른쪽으로 설정합니다.
Form 의 내부 좌표계의 기준을 오른쪽으로 설정합니다.
Form 의 텍스트 표시 기준을 오른쪽으로 설정합니다.
수직스크롤바가 있을 경우 왼쪽에 표시됩니다.
- **`false`** — Form 의 내부 컨텐츠 또는 컴포넌트가 표시되는 기준을 왼쪽으로 설정합니다.
Form 의 내부 좌표계의 기준을 왼쪽으로 설정합니다.
Form 의 텍스트 표시 기준을 왼쪽으로 설정합니다.
수직스크롤바가 있을 경우 오른쪽에 표시됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 아랍권 같이 화면의 표시기준이 오른쪽인 환경에서 컨텐츠의 표시 기준을 변경하기 위해 설정하는 속성입니다.

- Form 부터 Environment 까지 상위의 모든 rtl 속성값이 undefined 이면
   Environment 의 locale 속성에 설정된 국가 및 언어 설정값을 기준으로 rtl 속성이 적용됩니다.
   Environment 의 locale 속성값을 설정하지 않았을 경우 시스템의 국가 및 언어 설정값이 적용됩니다.


---

### scrollbarbarminsize

> Form > Property > scrollbarbarminsize

**Description**

Form 에 표시되는 스크롤바의 트랙바(TrackBar) 최소크기를 설정하는 속성입니다.

**Syntax**

```javascript
this.scrollbarbarminsize[= nSize]
```

**Setting Syntax**

```javascript
this.scrollbarbarminsize = 20;
```
- **`nSize`** — 스크롤바의 트랙바 최소크기를 pixel 단위의 숫자로 설정합니다.

음수값은 설정할 수 없습니다.

**Remark**

- scrollbarbarminsize 속성값을 설정하지 않으면 undefined 가 설정되고 트랙바 크기에 맞는 적당한 값으로 동작합니다.

- scrollbartrackbarsize 속성값이 설정되어 있으면 scrollbarbarminsize 속성값은 무시됩니다.

- Form 의 크기 또는 내부 컨텐츠 변경에 의해 트랙바의 크기가 자동변경될 때 scrollbarbarminsize 속성값 미만으로 작아지지 않습니다.

- 트랙바가 표시되는 영역보다 scrollbarbarminsize 속성값을 크게 설정해도 트랙바는 표시영역까지만 표현됩니다.

- 현재 Form 이 Div 와 같은 컨테이너 컴포넌트의 url 속성으로 연결된 경우 scrollbarbarminsize 속성보다 컨테이너 컴포넌트의 formscrollbarbarminsize 속성이 우선 적용됩니다.


---

### scrollbarbaroutsize

> Form > Property > scrollbarbaroutsize

**Description**

Form 의 스크롤바에서 트랙바(TrackBar)가 사라지는 기준 크기를 설정하는 속성입니다.

**Syntax**

```javascript
this.scrollbarbaroutsize[= nSize]
```

**Setting Syntax**

```javascript
this.scrollbarbaroutsize( 50 );
```
- **`nSize`** — 스크롤바의 트랙바가 사라지는 기준 크기를 pixel 단위의 숫자로 설정합니다.

음수값은 설정할 수 없습니다.

**Remark**

- scrollbarbaroutsize 속성값을 설정하지 않으면 undefined 가 설정되고 스크롤바 크기에 맞는 적당한 값으로 동작합니다.

- Form 의 크기가 변경되어 스크롤바가 줄어들 때 트랙바를 표시할 공간이 scrollbarbaroutsize 속성값보다 작아지면 트랙바를 표시하지 않습니다.

- 현재 Form 이 Div 와 같은 컨테이너 컴포넌트의 url 속성으로 연결된 경우 scrollbarbaroutsize 속성보다 컨테이너 컴포넌트의 formscrollbarbaroutsize 속성이 우선 적용됩니다.


---

### scrollbardecbuttonsize

> Form > Property > scrollbardecbuttonsize

**Description**

Form 에 표시되는 스크롤바의 감소 버튼(DecButton) 크기를 설정하는 속성입니다.

**Syntax**

```javascript
this.scrollbardecbuttonsize[= nSize]
```

**Setting Syntax**

```javascript
this.scrollbardecbuttonsize = 30;
```
- **`nSize`** — 스크롤바의 감소 버튼(DecButton) 크기를 pixel 단위의 숫자로 설정합니다.

음수값이나 Form 의 너비/높이보다 큰 값을 설정할 수 없습니다.

**Remark**

- scrollbardecbuttonsize 속성값을 설정하지 않으면 scrollbarsize 에 적용된 값이 적용됩니다.

- scrollbardecbuttonsize 속성값은 수직/수평 스크롤바에 동일하게 적용됩니다.

- 수직스크롤바의 감소 버튼(DecButton) 높이는 scrollbardecbuttonsize 속성으로 설정하고 너비는 scrollbarsize 속성으로 설정합니다.

- 수평스크롤바의 감소 버튼(DecButton) 너비는 scrollbardecbuttonsize 속성으로 설정하고 높이는 scrollbarsize 속성으로 설정합니다.


---

### scrollbarincbuttonsize

> Form > Property > scrollbarincbuttonsize

**Description**

Form 에 표시되는 스크롤바의 증가 버튼(IncButton) 크기를 설정하는 속성입니다.

**Syntax**

```javascript
this.scrollbarincbuttonsize[= nSize]
```

**Setting Syntax**

```javascript
 this.scrollbarincbuttonsize = 30;
```
- **`nSize`** — 스크롤바의 증가 버튼(IncButton) 크기를 pixel 단위의 숫자로 설정합니다.

음수값이나 Form 의 너비/높이보다 큰 값을 설정할 수 없습니다.

**Remark**

- scrollbarincbuttonsize 속성값을 설정하지 않으면 scrollbarsize 에 적용된 값이 적용됩니다.

- scrollbarincbuttonsize 속성값은 수직/수평 스크롤바에 동일하게 적용됩니다.

- 수직스크롤바의 증가 버튼(IncButton) 높이는 scrollbarincbuttonsize 속성으로 설정하고 너비는 scrollbarsize 속성으로 설정합니다.

- 수평스크롤바의 증가 버튼(IncButton) 너비는 scrollbarincbuttonsize 속성으로 설정하고 높이는 scrollbarsize 속성으로 설정합니다.


---

### scrollbarsize

> Form > Property > scrollbarsize

**Description**

Form 에 표시되는 스크롤바의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
this.scrollbarsize[= nSize]
```

**Setting Syntax**

```javascript
this.scrollbarsize = 30;
```
- **`nSize`** — 스크롤바의 크기를 pixel 단위의 숫자로 설정합니다.

**Remark**

- scrollbarsize 속성값은 수직스크롤바의 너비와 수평스크롤바의 높이에 동일하게 적용됩니다.

- scrollbarsize 속성값을 변경하면 스크롤바 내부버튼의 높이와 너비가 같이 변경됩니다.


---

### scrollbartrackbarsize

> Form > Property > scrollbartrackbarsize

**Description**

Form 에 표시되는 스크롤바의 트랙바(TrackBar) 크기를 설정하는 속성입니다.

**Syntax**

```javascript
this.scrollbartrackbarsize[= nSize]
```

**Setting Syntax**

```javascript
this.scrollbartrackbarsize = 20;
```
- **`nSize`** — 스크롤바의 트랙바 크기를 pixel 단위의 숫자로 설정합니다.

-1 을 설정하면 Form 크기와 Form 에 표시되는 컴포넌트 위치에 따라 트랙바 크기가 자동으로 조절됩니다.
-2 이하의 음수값은 설정할 수 없습니다.

**Remark**

- scrollbartrackbarsize 속성값을 설정하지 않으면 undefined 가 설정되고 -1 로 동작합니다.

- scrollbartrackbarsize 속성을 설정하면 내부 컨텐츠와 관계없이 트랙바 크기가 고정되어 표시됩니다.

- 현재 Form 이 Div 와 같은 컨테이너 컴포넌트의 url 속성으로 연결된 경우 scrollbartrackbarsize 속성보다 컨테이너 컴포넌트의 formscrollbartrackbarsize 속성이 우선 적용됩니다.


---

### scrollbartype

> Form > Property > scrollbartype

**Description**

Form 에 스크롤바가 표시되는 형식을 설정하는 속성입니다.

**Syntax**

```javascript
Form.scrollbartype[= strBartype]
```

**Setting Syntax**

```javascript
strBartype ::= <scrolltype> | <pairtype>

<scrolltype> ::= <desktype> | <mobiletype>
<pairtype> ::= <desktype> ' ' <desktype> | <mobiletype> ' ' <mobiletype>

<desktype> ::= 'default' | 'none' | 'fixed' | 'auto'
<mobiletype> ::= 'default' | 'none' | 'indicator' | 'autoindicator'
```
```javascript
this.scrollbartype = "none"; 
this.scrollbartype = "default autoindicator"; 
this.scrollbartype = "auto fixed"; 
this.scrollbartype = "indicator none";
```
- **`<scrolltype>`** — scrollbartype 속성값을 하나만 설정하면 가로/세로 스크롤바에 동일한 값이 적용됩니다.
- **`<pairtype>`** — scrollbartype 속성값을 빈칸으로 구분한 두개의 값으로 설정합니다.

첫번째 값은 가로스크롤바에 적용되고, 두번째 값은 세로스크롤바에 적용됩니다.
- **`"default"`** — 데스크탑 환경인 경우 "auto" 로 적용됩니다.

모바일 환경인 경우 "autoindicator" 로 적용됩니다.
- **`"none"`** — 스크롤바 또는 인디케이터바를 표시하지 않습니다.
- **`"fixed"`** — 스크롤바를 항상 표시합니다.
- **`"auto"`** — 스크롤바가 필요할 때 자동으로 표시합니다.
- **`"indicator"`** — 스크롤 인디케이터바가 필요할 때 자동으로 표시합니다.
- **`"autoindicator"`** — 스크롤이 동작될 때만 인디케이터바가 표시되었다가 스크롤이 종료되면 사라집니다.

**Remark**

- scrollbartype 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- 데스크탑에 적용되는 값과 모바일에 적용되는 값을 함께 설정할 수 있지만 권장하지 않습니다.
   ex) this.Form00.scrollbartype = "fixed autoindicator";

**See Also**

Form.scrolltype


---

### scrollindicatorsize

> Form > Property > scrollindicatorsize

**Description**

Form 에 표시되는 스크롤 인디케이터바의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
Form.scrollindicatorsize[= nSize]
```

**Setting Syntax**

```javascript
this.scrollindicatorsize = 30;
```
- **`nSize`** — 스크롤 인디케이터바의 크기를 pixel 단위의 숫자로 설정합니다.

**Remark**

- scrollindicatorsize 속성값은 수직스크롤바의 너비와 수평스크롤바의 높이에 동일하게 적용됩니다.

- Form 에 스크롤 인디케이터바가 아닌 스크롤바가 표시될 경우 scrollbarsize 속성으로 크기를 설정하여야 합니다.


---

### scrolltype

> Form > Property > scrolltype

**Description**

Form 에서 사용되는 스크롤의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
Form.scrolltype[= enumType]
```

**Setting Syntax**

```javascript
enumType ::= 'none' | 'both' | 'vertical' | 'horizontal'
```
- **`"none"`** — Form 에서 수평/수직 스크롤을 사용하지 않습니다.
- **`"both"`** — Form 에서 수평/수직 스크롤을 모두 사용합니다.
- **`"vertical"`** — Form 에서 수직 스크롤만 사용합니다.

수평 스크롤은 사용하지 않습니다.
- **`"horizontal"`** — Form 에서 수평 스크롤만 사용합니다.

수직 스크롤은 사용하지 않습니다.

**Remark**

- scrolltype 속성값을 설정하지 않으면 "both" 로 적용됩니다.

- Form 에서 사용되는 스크롤에 대한 자세한 설정은 scrollbartype 속성을 사용하여야 합니다.

**See Also**

Form.scrollbartype


---

### statustext

> Form > Property > statustext

**Description**

상위 Frame의 StatusBar 에 표시할 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
this.statustext[= strText]
```

**Setting Syntax**

```javascript
this.statustext = "form status";
```
- **`strText`** — 상위 Frame의 StatusBar 에 표시할 텍스트를 설정합니다.

**Remark**

- 상위 Frame 의 showcascadestatustext 속성값이 true 인 경우만 Form의 statustext 속성값이 표시됩니다.

- 상위 Frame 의 statustext 속성값에 "-" 문자로 구분하여 "상위Frame.statustext - Form.statustext" 형태로 조합하여 표시됩니다.

- 하위 Frame을 여러개 가진 Frame의 StatusBar 에는 현재 활성화 되어 있는 하위 Frame과 Form 의 statustext 속성값이 표시됩니다.
   즉, "MainFrame.statustext - 활성화된 Frame.statustext - 활성화된 Form.statustext" 형태로 조합하여 표시됩니다.
   활성화된 Frame 또는 Form 이 변경되면 자동으로 새로고침하여 표시됩니다.


---

### stepalign

> Form > Property > stepalign

**Description**

Form 이 화면분할 되었을 때 서브컨트롤인 Step 컨트롤이 표시되는 위치를 설정하는 속성입니다.

**Syntax**

```javascript
this.stepalign[= strAlign]
```

**Setting Syntax**

```javascript
strAlign ::= <hAlign> <vAlign>

<hAlign> ::= 'left' | 'center' | 'right'
<vAlign> ::= 'top' | 'middle' | 'bottom'
```
```javascript
this.popupalign = "right bottom";
this.popupalign = "left bottom";
this.popupalign = "center top";
```
- **`<hAlign>`** — Step 컨트롤이 표시될 가로 위치를 설정합니다.

"left" 설정 시 Step 컨트롤이 Form 영역의 왼쪽에 표시됩니다.
"center" 설정 시 Step 컨트롤이 Form 영역의 가운데에 표시됩니다.
"right" 설정 시 Step 컨트롤이 Form 영역의 오른쪽에 표시됩니다.
- **`<vAlign>`** — Step 컨트롤이 표시될 세로 위치를 설정합니다.

"top" 설정 시 Step 컨트롤이 Form 영역의 윗쪽에 표시됩니다.
"middle" 설정 시 Step 컨트롤이 Form 영역의 가운데에 표시됩니다.
"bottom" 설정 시 Step 컨트롤이 Form 영역의 아랫쪽에 표시됩니다.

**Remark**

- stepcount 속성값을 설정하면 Form의 화면을 분할하여 사용할 수 있습니다.
  화면이 분할되면 Step 컨트롤이 표시되고, 각 화면을 이동할 수 있습니다.

- <hAlign> 값과 <vAlign> 값은 공백문자로 구분하여 설정합니다.

- stepalign 속성값을 설정하지 않으면 "center bottom"으로 적용됩니다.


---

### stepitemgap

> Form > Property > stepitemgap

**Description**

Form 이 화면분할 되었을 때 StepControl 에 표시되는 라디오버튼의 간격을 설정하는 속성입니다.

**Syntax**

```javascript
this.stepitemgap[= nGap]
```

**Setting Syntax**

```javascript
this.stepitemgap = 50;
```
- **`nGap`** — StepControl 에 표시되는 라디오 버튼의 간격을 pixel 단위의 숫자로 설정합니다.

null 설정 시 라디오 버튼의 간격이 3 pixel 로 표시되지만 속성값은 null 로 설정됩니다.

**Remark**

- stepitemgap 속성값을 설정하지 않으면 "null" 로 적용됩니다.

- Form 이 화면분할 상태가 아니면 속성값은 적용되지 않습니다.


---

### stepitemsize

> Form > Property > stepitemsize

**Description**

Form 이 화면분할 되었을 때 StepControl 에 표시되는 라디오버튼의 크기를 설정하는 속성입니다.

**Syntax**

```javascript
this.stepitemsize[= nSize]
```

**Setting Syntax**

```javascript
this.stepitemsize  = 20;
```
- **`nSize`** — StepControl 에 표시되는 라디오 버튼의 크기를 pixel 단위의 숫자로 설정합니다.

null 설정 시 라디오 버튼의 크기가 "버튼이미지크기 + Padding크기 + Border크기" 로 표시되지만 속성값은 null 로 설정됩니다.

**Remark**

- stepitemsize 속성값을 설정하지 않으면 "null" 로 적용됩니다.

- stepitemsize 속성값은 라디오 버튼의 너비와 높이에 동일하게 적용됩니다.


---

### stepselector

> Form > Property > stepselector

**Description**

Form 에서 화면분할 기능을 사용할 때 현재 화면의 인덱스를 표시하는 Step 컨트롤을 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Form.stepselector
```

**Setting Syntax**

```javascript
var objStep = this.stepselector;
```

**Remark**

- 화면에 표시되는 Step 컨트롤을 통해 분할된 화면의 수와 현재 화면의 인덱스를 확인할 수 있으며 마우스 클릭으로 화면을 이동할 수 있습니다.


---

### stepshowtype

> Form > Property > stepshowtype

**Description**

Form 이 화면분할되었을 때 Step 컨트롤이 화면에 표시되는 조건을 설정하는 속성입니다.

**Syntax**

```javascript
this.stepshowtype[= strType]
```

**Setting Syntax**

```javascript
strType ::= 'always' | 'action'
```
```javascript
this.stepshowtype = "always";
this.stepshowtype = "action";
```
- **`"always"`** — Step 컨트롤이 항상 화면에 표시됩니다.
- **`"action"`** — 분할된 화면을 전환시킬 때만 Step 컨트롤이 표시됩니다.

**Remark**

- stepshowtype 속성값을 설정하지 않으면 "always"로 적용됩니다.


---

### titletext

> Form > Property > titletext

**Description**

상위 Frame의 TitleBar 에 표시할 텍스트를 설정하는 속성입니다.

**Syntax**

```javascript
this.titletext[= strTitle]
```

**Setting Syntax**

```javascript
this.titletext = "form title";
```
- **`strText`** — 상위 Frame의 TitleBar 에 표시할 텍스트를 설정합니다.

**Remark**

- 상위 Frame 의 showcascadetitletext 속성값이 "true"인 경우만 Form의 titletext 속성값이 표시됩니다.

- 상위 Frame 의 titletext 속성값에 "-" 문자로 구분하여 "상위Frame.titletext - Form.titletext" 형태로 조합하여 표시됩니다.

- 하위 Frame을 여러개 가진 Frame의 TitleBar 에는 현재 활성화 되어 있는 하위 Frame과 Form 의 titletext 속성값이 표시됩니다.
  즉, "MainFrame.titletext - 활성화된Frame.titletext - 활성화된Form.titletext" 형태로 조합하여 표시됩니다.
  활성화된 Frame 또는 Form 이 변경되면 자동으로 새로고침하여 표시됩니다.


---

### tooltiptext

> Form > Property > tooltiptext

**Description**

Form 에 마우스 포인터를 올려 놓았을 때 표시되는 풍선도움말을 설정하는 속성입니다.

**Syntax**

```javascript
Form.tooltiptext[= strToolTipText]
```

**Setting Syntax**

```javascript
this.tooltiptext = "This is ToolTip Text"; this.tooltiptext = "";          // 풍선 도움말이 표시되지 않습니다. 

this.tooltiptext = null;        // 상위 컴포넌트의 풍선 도움말이 표시됩니다.
```
- **`strToolTipText`** — 풍선도움말에 표시할 텍스트를 설정합니다.

빈문자열(EmptyString) 설정 시 풍선도움말이 표시되지 않습니다.
null 또는 undefined 설정 시 상위컴포넌트(Form, Div 등)의 풍선도움말이 표시됩니다.

**Remark**

- tooltiptext 속성값을 설정하지 않으면 undefined 로 적용됩니다.

- 마우스 포인터가 Form 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.

- 풍선도움말이 표시된 상태에서 tooltiptext 속성값을 변경하면 풍선도움말이 사라집니다.


◆ Desktop WRE 제약

- 풍선도움말은 브라우저의 기능을 활용하므로 브라우저 사양에 따라 스타일에 차이가 있을 수 있습니다.
   NRE는 Chrome 의 스타일과 동일하게 적용됩니다.


---

### tooltiptype

> Form > Property > tooltiptype

**Description**

Form 에서 풍선도움말이 표시될 위치와 방식을 설정하는 속성입니다.

**Syntax**

```javascript
Form.tooltiptype[= enumTooltipType]
```

**Setting Syntax**

```javascript
enumTooltipType ::= 'default' | 'hover' | 'inplace' | 'default,mouseleave' | 'hover,mouseleave' | 'inplace,mouseleave'
```
```javascript
this.tooltiptype = "hover";
```
- **`"default"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 Form 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"hover"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 Form 영역내에 멈춰서 일정시간이 경과하면 풍선도움말이 사라집니다.
Form 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경되거나 사라진 풍선도움말이 다시 표시됩니다.
- **`"inplace"`** — Form 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 Form 영역내에 위치하고 일정시간이 경과하면 풍선도움말이 사라집니다.
- **`"default,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 Form 영역에 있으면 풍선도움말이 사라지지 않습니다.
- **`"hover,mouseleave"`** — 마우스 포인터의 오른쪽 하단 위치에 풍선도움말을 표시합니다.

마우스 포인터가 Form 영역에 있으면 풍선도움말이 사라지지 않습니다.
Form 영역 내에서 마우스 포인터를 이동한 후 멈추면 풍선도움말의 위치가 변경됩니다.
- **`"inplace,mouseleave"`** — Form 의 좌측상단 안쪽에 풍선도움말을 표시합니다.

마우스 포인터가 Form 영역에 있으면 풍선도움말이 사라지지 않습니다.

**Remark**

- tooltiptype 속성값을 설정하지 않으면 "default" 로 적용됩니다.

- 마우스 포인터가 Form 영역 위에서 일정시간 움직이지 않으면 풍선도움말이 표시됩니다.

- 풍선도움말이 표시된 상태에서 tooltiptext 속성값을 변경하면 tooltiptype 속성값에 관계없이 풍선도움말이 사라집니다.

- 표시되었다가 사라진 풍선도움말은 마우스 포인터가 Form 영역을 나갔다가 들어오면 다시 표시됩니다.

- 마우스 포인터가 Form 영역에서 벗어나면 풍선도움말이 사라집니다.

- 풍선도움말의 크기는 풍선도움말에 표시되는 텍스트의 길이와 크기에 맞춰 자동으로 조정됩니다.

- 풍선도움말에 표시되는 텍스트의 글꼴과 크기는 변경하실 수 없습니다.


---

### visible

> Form > Property > visible

**Description**

Form 이(가) 화면에 표시될지 여부를 설정하는 속성입니다.

**Syntax**

```javascript
Form.visible[= bVisible]
```

**Setting Syntax**

```javascript
bVisible ::= 'true' | 'false'
```
```javascript
this.visible = true; 
this.visible = false;
```
- **`"true"`** — Form 을(를) 화면에 표시합니다.
- **`"false"`** — Form 을(를) 화면에 표시하지 않습니다.

**Remark**

- visible 속성값을 변경하는 즉시 컴포넌트의 표시 여부가 화면에 반영됩니다.

- visible 속성값이 "false"이면 컴포넌트가 화면에 표시되지 않고, 포커스를 받을 수 없으므로 입력이나 사용이 불가능합니다.

- Div 와 같은 컨테이너 컴포넌트의 visible 속성값을 "false"로 설정하면 자식 컴포넌트도 함께 화면에 표시되지 않습니다.

- visible 속성값이 "false"이어도 컴포넌트는 존재하기 때문에 스크립트로 제어가 가능합니다.

- 넥사크로 스튜디오에서는 visible 속성값을 'false'로 설정해도 디자인화면에서 사라지지 않습니다.


---

### vscrollbar

> Form > Property > vscrollbar

**Description**

Form 의 서브컨트롤인 수직 스크롤바의 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
Form.vscrollbar
```

**Setting Syntax**

```javascript
this.vscrollbar.decbuttonsize = 30;
```

**Remark**

- scrollbartype 속성값과 앱 실행 환경에 따라 반환하는 오브젝트가 달라집니다.
  ScrollBarControl 또는 ScrollindicatorControl 오브젝트를 반환합니다.

- vscrollbar 속성을 사용하여 수직 스크롤바의 속성값을 변경할 수 있습니다.

- vscrollbar 속성은 읽기전용이므로 해당 속성에 다른 컨트롤을 설정할 수 없지만,
  vscrollbar 속성이 갖는 수직 스크롤바 오브젝트의 하위 속성은 수정이 가능합니다.


---

### width

> Form > Property > width

**Description**

Form 의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
this.width[= nWidth]
```

**Setting Syntax**

```javascript
nWidth ::= <nVal> ['px']
```
```javascript
this.width = 10;
this.width = "10px";
```
- **`<nVal>`** — Form 의 너비를 pixel 단위의 숫자로 설정합니다.
0~12000 사이의 숫자만 설정할 수 있습니다.

**Remark**

- 너비값에 단위문자를 포함할 경우 문자열 형태로 설정하여야 합니다.


---

### word-spacing

> Form > Property > word-spacing

**Description**

Form 에 표시되는 텍스트의 단어 사이 간격을 설정하는 속성입니다.

**Syntax**

```javascript
Form.wordSpacing[= strwordspacing]
```

**Setting Syntax**

```javascript
strWordSpacing ::= 'normal' | <nVal>'px'
```
```javascript
* XCSS
word-spacing : 30px;

* Script ( normal property )
this.wordSpacing = "30px";
```
- **`"normal"`** — 텍스트의 단어 사이 간격을 설정하지 않습니다.

현재 font 에 맞는 기본형태로 텍스트가 표시됩니다.
- **`<nVal>`** — pixel 단위로 텍스트의 단어 사이 간격을 설정합니다.

**Remark**

- word-spacing 속성값을 설정하지 않으면 undefined 가 설정되고, "normal" 로 동작합니다.

- 스크립트로 접근 시 속성명은 "wordSpacing"을 사용해야 합니다.


---

### 메서드 (Methods)

### addChild

> Form > Method > addChild

**Description**

스크립트에서 동적으로 생성한 컴포넌트를 Form 의 자식 컴포넌트로 추가하는 메소드입니다.

**Syntax**

```javascript
Form.addChild( strChildID, objComp )
```

**Parameters**

```
자식으로 추가될 컴포넌트의 ID를 설정합니다.
```

**Return**

추가된 자식 컴포넌트의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

**Remark**

- addChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- 스크립트에서 동적으로 생성한 컴포넌트만 추가할 수 있습니다.
  동적으로 생성한 컴포넌트가 아닌 경우 오동작이 발생할 수 있습니다.

- 자식 컴포넌트의 세부 속성은 addChild() 메소드로 자식 컴포넌트를 추가 후 설정해야 합니다.

- 자식 컴포넌트로 추가된 컴포넌트를 화면에 표시하기 위해서는 show() 메소드를 사용해야 합니다.

- 추가된 컴포넌트에 의해 부모 컴포넌트의 스크롤바가 갱신되야 할 때는 resetScroll() 메소드를 사용해야 합니다.
  추가된 컴포넌트에 의해 스크롤바가 자동으로 갱신되지 않습니다.

- 동적으로 추가된 컴포넌트를 제거하기 위해서는 removeChild() 메소드를 사용해야 합니다.

- removeChild() 메소드로 제거된 컴포넌트를 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.

- Div, PopupDiv, Tabpagecontrol 에서 제공하는  addChild() 메소드는 form 컨트롤에 자식 컴포넌트를 추가합니다.
   this.Div00.addChild("mysubbutton", Button00);
  수행 시  this.Div00.form.Button00  로  접근 가능합니다.

**See Also**

Form.insertChildForm.-nexa-rtl-background-imageForm.removeChild


---

### addEventHandler

> Form > Method > addEventHandler

**Description**

Form 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
Form.addEventHandler( strEventID, objFunc, objTarget )
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

> Form > Method > addEventHandlerLookup

**Description**

함수를 검색하여 Form 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
Form.addEventHandlerLookup( strEventID, strFunc, objTarget )
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

### alert

> Form > Method > alert

**Description**

경고 대화상자를 표시하는 메소드입니다.

**Syntax**

```javascript
Form.alert( strText )
```

**Parameters**

```
대화상자에 표시할 텍스트를 설정합니다.
```

**Return**

없음


---

### cancelTransaction

> Form > Method > cancelTransaction

**Description**

진행중인 트랜잭션을 중지 시키는 메소드입니다.

**Syntax**

```javascript
cancelTransaction( [strSvcID] )
```

**Parameters**

```
중지할 트랜잭션의 ID를 문자열로 설정합니다.
transaction() 메소드 수행 시 설정한 ID값입니다.
```

**Return**

없음

**Remark**

- transaction() 메소드 수행 시 bAsync 파라미터를 "false"로 지정했다면 cancelTransaction() 메소드가 수행되지 않습니다.

- strSvcID 값을 생략하면 현재 진행중인 트랜잭션을 중지시킵니다.
  트랜잭션 진행 중 ESC키를 입력한 것과 동일하게 동작합니다.


---

### clearEventHandler

> Form > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
Form.clearEventHandler( strEventID )
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

### close

> Form > Method > close

**Description**

실행된 Form을 종료하는 메소드입니다.

**Syntax**

```javascript
Form.close( [strReturn] )
```

**Parameters**

```
Form 이 종료될 때 자신을 호출했던 부모 Form 에게 넘겨줄 값을 문자열로 설정합니다.

기본형(Primitive Type) 데이터형만 지정 가능합니다.
특히, Form이 종료되면 Form에 정의됐던 오브젝트(Component, DataSet 등)도 소멸되므로 해당 오브젝트를 설정할 수 없습니다.
```

**Return**

없음

**Remark**

- close() 메소드를 호출하면 Form 에서 관리하던 부분을 종료하고 Form 을 연속하여 종료합니다.
   따라서 close() 메소드 이후의 스크립트에서 해당 Form 이 관리하던 부분이나 Form 에 접근 시 스크립트 오류가 발생할 수 있습니다.

- Form 이 Div, PopupDiv, TabPageControl 의 url 속성으로 연결되어 있을 경우 close() 메소드는 수행되지 않습니다.


---

### confirm

> Form > Method > confirm

**Description**

선택 대화상자를 표시하는 메소드입니다.

**Syntax**

```javascript
Form.confirm( strText [,strCaption [,strType]] )
```

**Parameters**

```
대화상자에 표시할 텍스트를 설정합니다.
```

**Return**

표시된 선택 대화상자에서 "확인" 버튼을 선택하면 "true"를 반환합니다.
표시된 선택 대화상자에서 "취소" 버튼을 선택하면 "false"를 반환합니다.


---

### findEventHandler

> Form > Method > findEventHandler

**Description**

Form 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
Form.findEventHandler( strEventID, objFunc, objTarget )
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

### getCurrentLayoutID

> Form > Method > getCurrentLayoutID

**Description**

Form에 정의된 레이아웃 중 현재 화면에 표시되는 레이아웃의 name 속성값을 반환하는 메소드입니다.

**Syntax**

```javascript
Form.getCurrentLayoutID()
```

**Return**

현재 레이아웃 name 속성값을 반환합니다.

**Remark**

- getLayoutInfo 메소드를 사용해 현재 화면에 표시되는 레이아웃 속성 정보를 확인할 수 있습니다.
  this.getLayoutInfo(this.getCurrentLayoutID(), "mobileorientation");


---

### getEventHandler

> Form > Method > getEventHandler

**Description**

Form 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
Form.getEventHandler( strEventID, nIdx )
```

**Parameters**

```
핸들러 함수를 얻을 이벤트의 ID를 설정합니다.
```

**Return**

지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.

지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.


---

### getFirstAccessibilityComponent

> Form > Method > getFirstAccessibilityComponent

**Description**

Form 오브젝트 내 accessibilityenable 속성값이 true이고 taborder 속성값이 가장 작은 컴포넌트를 반환하는 메소드입니다.

**Syntax**

```javascript
Form.getFirstAccessibilityComponent( [bStepIn] )
```

**Parameters**

```
Form 오브젝트 내에서 taborder가 가장 작은 컴포넌트가 컨테이너 컴포넌트일 경우 자식 컴포넌트까지 검색할지 설정합니다.
true 설정 시 컨테이너 컴포넌트의 자식까지 검색합니다.
false 설정 시 컨테이너 컴포넌트를 반환합니다.
```

**Return**

Form 오브젝트 내 accessibilityenable 속성값이 true이고 taborder 속성값이 가장 작은 컴포넌트를 반환합니다.

**Remark**

- environment.enableaccessibility 속성값의 영향을 받지 않습니다.
  컴포넌트의 accessibilityenable 속성값 또는 visible 속성값을 false로 설정한 경우에는 검색 대상에서 제외됩니다.

- bStepIn 파라미터 값을 생략하면 false로 적용됩니다.


---

### getFirstComponent

> Form > Method > getFirstComponent

**Description**

Form 에서 탭키로 포커스 이동 시 제일 처음에 포커스를 받는 컴포넌트를 반환하는 메소드입니다.

**Syntax**

```javascript
Form.getFirstComponent( [bStepIn] )
```

**Parameters**

```
처음으로 포커스를 받는 컴포넌트가 컨테이너 컴포넌트일 경우 자식 컴포넌트까지 검색할지 설정합니다.
"true" 설정 시 컨테이너 컴포넌트의 자식까지 검색합니다.
"false" 설정 시 컨테이너 컴포넌트를 반환하도록 합니다.
```

**Return**

포커스를 제일 처음에 받는 컴포넌트를 반환합니다.

**Remark**

- 일반적으로 tabstop 속성값이 true인 컴포넌트 중 taborder 속성값이 제일 작은 컴포넌트가 반환됩니다.

- bStepIn 값을 생략 할 경우 "false" 로 적용됩니다.

- 처음으로 포커스를 받는 컴포넌트가 컨테이너 컴포넌트가 아닐 경우 bStepIn 값에 관계 없이 해당 컴포넌트를 반환합니다.


---

### getFocus

> Form > Method > getFocus

**Description**

Form 의 자식 컴포넌트 중 현재 포커스를 가지고 있는 컴포넌트를 반환하는 메소드입니다.

**Syntax**

```javascript
Form.getFocus()
```

**Parameters**

var objComp = this.getFocus();

**Return**

포커스를 가진 자식 컴포넌트가 있으면 해당 컴포넌트를 반환합니다.

포커스를 가진 자식 컴포넌트가 없으면 null 을 반환합니다.


---

### getHScrollPos

> Form > Method > getHScrollPos

**Description**

Form 에 표시된 수평스크롤바의 트랙바 위치값을 반환하는 메소드입니다.

**Syntax**

```javascript
Form.getHScrollPos()
```

**Parameters**

var nScrollPos = this.getHScrollPos();

**Return**

수평스크롤바의 현재 트랙바 위치값을 반환합니다.

**Remark**

- scrollbartype 속성값에 따라 표시되는 스크롤바 종류에 관계없이 위치값을 반환합니다.

- 수직스크롤바의 트랙바 위치값을 구하려면 getVScrollPos() 메소드를 사용하여야 합니다.

**See Also**

Form.getVScrollPosForm.scrollbartype


---

### getLastAccessibilityComponent

> Form > Method > getLastAccessibilityComponent

**Description**

Form 오브젝트 내 accessibilityenable 속성값이 true이고 taborder 속성값이 가장 큰 컴포넌트를 반환하는 메소드입니다.

**Syntax**

```javascript
Form.getLastAccessibilityComponent( [bStepIn] )
```

**Parameters**

```
Form 오브젝트 내에서 taborder가 가장 큰 컴포넌트가 컨테이너 컴포넌트일 경우 자식 컴포넌트까지 검색할지 설정합니다.
true 설정 시 컨테이너 컴포넌트의 자식까지 검색합니다.
false 설정 시 컨테이너 컴포넌트를 반환합니다.
```

**Return**

Form 오브젝트 내 accessibilityenable 속성값이 true이고 taborder 속성값이 가장 큰 컴포넌트를 반환합니다.

**Remark**

- environment.enableaccessibility 속성값의 영향을 받지 않습니다.
  컴포넌트의 accessibilityenable 속성값 또는 visible 속성값을 false로 설정한 경우에는 검색 대상에서 제외됩니다.

- bStepIn 파라미터 값을 생략하면 false로 적용됩니다.


---

### getLastComponent

> Form > Method > getLastComponent

**Description**

Form 에서 탭키로 포커스 이동 시 제일 마지막에 포커스를 받는 컴포넌트를 반환하는 메소드입니다.

**Syntax**

```javascript
Form.getLastComponent( [bStepIn] )
```

**Parameters**

```
마지막으로 포커스를 받는 컴포넌트가 컨테이너 컴포넌트일 경우 자식 컴포넌트까지 검색할지 설정합니다.
"true" 설정 시 컨테이너 컴포넌트의 자식까지 검색합니다.
"false" 설정 시 컨테이너 컴포넌트를 반환하도록 합니다.
```

**Return**

포커스를 제일 마지막에 받는 컴포넌트를 반환합니다.

**Remark**

- 일반적으로 tabstop 속성값이 true인 컴포넌트 중 taborder 속성값이 제일 큰 컴포넌트가 반환됩니다.

- bStepIn 값을 생략 할 경우 "false" 로 적용됩니다.

- 마지막으로 포커스를 받는 컴포넌트가 컨테이너 컴포넌트가 아닐 경우 bStepIn 값에 관계 없이 해당 컴포넌트를 반환합니다.


---

### getLayoutInfo

> Form > Method > getLayoutInfo

**Description**

Form 에 정의된 레이아웃 중 특정 레이아웃의 속성값을 반환하는 메소드입니다.

**Syntax**

```javascript
Form.getLayoutInfo ( strLayoutID, strPropID )
```

**Parameters**

```
레이아웃의 이름을 문자열로 설정합니다.
```

**Return**

strPropID 속성에 설정된 값을 반환합니다.

**Remark**

- strPropID 파라미터값으로 설정할 수 있는 Layout 오브젝트 속성은 Form > Objects > Layout 항목을 참고하세요.


---

### getNextComponent

> Form > Method > getNextComponent

**Description**

Form 의 특정 컴포넌트에서 탭키 입력 시 포커스가 이동되는 컴포넌트를 반환하는 메소드입니다.

**Syntax**

```javascript
Form.getNextComponent( objComp [, bStepIn] )
```

**Parameters**

```
포커스 이동 시 기준이 되는 컴포넌트를 설정합니다.
```

**Return**

objComp 컴포넌트에서 탭키로 포커스가 이동되는 컴포넌트를 반환합니다.

**Remark**

- 탭키 입력에 의한 포커스 이동은 taborder 속성값이 작은 컴포넌트에서 큰 컴포넌트 순서로 포커스가 이동합니다.
  getNextComponent() 메소드는 기준 컴포넌트 이후 포커스를 받을 컴포넌트 중 tabstop 속성이 true인 첫번째 컴포넌트를 반환합니다.

- bStepIn 값을 생략 할 경우 "false" 로 적용됩니다.

- 포커스가 이동되는 컴포넌트가 컨테이너 컴포넌트가 아닐 경우 bStepIn 값에 관계 없이 해당 컴포넌트를 반환합니다.


---

### getOffsetHeight

> Form > Method > getOffsetHeight

**Description**

Form 의 높이를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Form.getOffsetHeight();
```

**Parameters**

var nWidth = this.getOffsetHeight( ) ;

**Return**

Form 의 높이를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 Form 의 높이를 동적으로 계산합니다.

- Form 의 크기는 부모 ChildFrame 의 크기와 동일합니다.


---

### getOffsetWidth

> Form > Method > getOffsetWidth

**Description**

Form 의 너비를 픽셀단위의 숫자로 반환하는 메소드입니다.

**Syntax**

```javascript
Form.getOffsetWidth();
```

**Parameters**

var nWidth = this.getOffsetWidth( ) ;

**Return**

Form 의 너비를 픽셀단위의 숫자로 변환하여 반환합니다.

**Remark**

- 화면에 표시된 Form 의 너비를 동적으로 계산합니다.

- Form 의 크기는 부모 ChildFrame 의 크기와 동일합니다.


---

### getOwnerFrame

> Form > Method > getOwnerFrame

**Description**

Form 이 소속된 부모 Frame 을 반환하는 메소드입니다.

**Syntax**

```javascript
Form.getOwnerFrame()
```

**Parameters**

var objOwnerFrame = this.getOwnerFrame();

**Return**

Form 이 소속된 부모 Frame 오브젝트를 반환합니다.
Form 이 소속된 Frame 이 없을 경우 "null"을 반환합니다.


---

### getPanel

> Form > Method > getPanel

**Description**

컴포넌트를 연결하고 있는 Panel 컴포넌트를 반환하는 메서드입니다.

**Syntax**

```javascript
this.getPanel(objComp)
```

**Parameters**

```
Form 오브젝트에 포함된 컴포넌트를 설정합니다.
```

**Return**

지정한 컴포넌트를 연결하고 있는 Panel 컴포넌트를 반환합니다.
지정한 컴포넌트가 없거나 지정한 컴포넌트에 연결된 Panel 컴포넌트가 없는 경우 null 값을 반환합니다.


---

### getPrevComponent

> Form > Method > getPrevComponent

**Description**

Form 의 특정 컴포넌트에서 Shift+탭키 입력 시 포커스가 이동되는 컴포넌트를 반환하는 메소드입니다.

**Syntax**

```javascript
Form.getPrevtComponent( objComp [, bStepIn] )
```

**Parameters**

```
포커스 이동 시 기준이 되는 컴포넌트를 설정합니다.
```

**Return**

objComp 컴포넌트에서 Shift+탭키로 포커스가 이동되는 컴포넌트를 반환합니다.

**Remark**

- Shift+탭키 입력에 의한 포커스 이동은 taborder 속성값이 큰 컴포넌트에서 작은 컴포넌트 순서로 포커스가 이동합니다.
  getPrevComponent() 메소드는 기준 컴포넌트 이후 포커스를 받을 컴포넌트 중 tabstop 속성이 true인 첫번째 컴포넌트를 반환합니다.

- bStepIn 값을 생략 할 경우 "false" 로 적용됩니다.

- 포커스가 이동되는 컴포넌트가 컨테이너 컴포넌트가 아닐 경우 bStepIn 값에 관계 없이 해당 컴포넌트를 반환합니다.

- 탭키 입력으로 포커스 이동 중 특정컴포넌트로 포커스가 오기 전 포커스를 가지고 있던 컴포넌트를 반환합니다.


---

### getStepCount

> Form > Method > getStepCount

**Description**

Form 의 화면이 분할되었을 때 화면의 갯수를 반환하는 메소드입니다.

**Syntax**

```javascript
Form.getStepCount();
```

**Return**

분할된 화면의 갯수를 반환합니다.

**Remark**

- stepcount 속성값이 반환됩니다.


---

### getStepIndex

> Form > Method > getStepIndex

**Description**

Form 이 화면분할 되었을 때 현재 표시되는 화면의 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
Form.getStepIndex()
```

**Parameters**

this.getStepIndex() ;

**Return**

현재 표시되는 화면의 인덱스값이 반환됩니다.

**Remark**

- 넥사크로 스튜디오에서 stepcount 속성을 설정하여 Form의 화면을 분할하여 사용할 때만 수행되는 메소드입니다.

- StepControl 의 stepindex 속성값을 반환합니다.


---

### getVScrollPos

> Form > Method > getVScrollPos

**Description**

Form 에 표시된 수직스크롤바의 트랙바 위치값을 반환하는 메소드입니다.

**Syntax**

```javascript
Form.getVScrollPos()
```

**Parameters**

var nScrollPos = this.getVScrollPos();

**Return**

수직스크롤바의 현재 트랙바 위치값을 반환합니다.

**Remark**

- scrollbartype 속성값에 따라 표시되는 스크롤바 종류에 관계없이 위치값을 반환합니다.

- 수평스크롤바의 트랙바 위치값을 구하려면 getHScrollPos() 메소드를 사용하여야 합니다.

**See Also**

Form.getHScrollPosForm.scrollbartype


---

### go

> Form > Method > go

**Description**

화면에 표시된 Form 대신 인수로 전달된 Form을 로딩하는 메소드입니다.

**Syntax**

```javascript
Form.go( strURL )
```

**Parameters**

```
화면에 로딩할 Form(xfdl 파일)의 URL을 문자열로 설정합니다.
```

**Return**

없음


---

### hasPopupFrame

> Form > Method > hasPopupFrame

**Description**

현재 Form에서 스크립트로 실행된 Form이 있는지 확인하는 메소드입니다.

**Syntax**

```javascript
Form.hasPopupFrame()
```

**Parameters**

var bHas = this.hasPopupFrame();

**Return**

현재 Form에서 스크립트로 실행된 Form이 있다면 "true"를 반환합니다.
현재 Form에서 스크립트로 실행된 Form이 없다면 "false"를 반환합니다.

**Remark**

- 스크립트로 실행되었다가 종료된 Form은 확인할 수 없습니다.


---

### insertChild

> Form > Method > insertChild

**Description**

스크립트로 동적 생성한 컴포넌트를 Form 의 자식 컴포넌트로 특정 순서에 추가하는 메소드입니다.

**Syntax**

```javascript
Form.insertChild( nIdx, strChildID, objComp )
```

**Parameters**

```
부모 컴포넌트에 추가 될 순서를 설정합니다.
"-1"로 설정할 경우 자식 컴포넌트 중 제일 마지막에 추가됩니다.
```

**Return**

추가된 자식 컴포넌트의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

**Remark**

- 자식 컴포넌트는 선언된 순서에 따라 화면에 표시됩니다.
  따라서 nIdx 값에 따라 추가되는 컴포넌트의 화면표시 순서가 정해집니다.
  컴포넌트가 겹칠 경우 nIdx 값이 작은 컴포넌트가 nIdx 값이 큰 컴포넌트에게 가려지게 됩니다.

- insertChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- 스크립트에서 동적으로 생성한 컴포넌트만 추가할 수 있습니다.
  동적으로 생성한 컴포넌트가 아닌 경우 오동작이 발생할 수 있습니다.

- 자식 컴포넌트의 세부 속성은 insertChild() 메소드로 자식 컴포넌트를 추가 후 설정해야 합니다.

- 자식 컴포넌트로 추가된 컴포넌트를 화면에 표시하기 위해서는 show() 메소드를 사용해야 합니다.

- 추가된 컴포넌트에 의해 부모 컴포넌트의 스크롤바가 갱신되야 할 때는 resetScroll() 메소드를 사용해야 합니다.
  추가된 컴포넌트에 의해 스크롤바가 자동으로 갱신되지 않습니다.

- 동적으로 추가된 컴포넌트를 제거하기 위해서는 removeChild() 메소드를 사용해야 합니다.

- removeChild() 메소드로 제거된 컴포넌트를 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.

**See Also**

Form.addChildForm.removeChild


---

### insertEventHandler

> Form > Method > insertEventHandler

**Description**

Form 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
Form.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
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

### isValidObject

> Form > Method > isValidObject

**Description**

Form 에 특정 오브젝트가 존재하는지 확인하는 메소드입니다.

**Syntax**

```javascript
Form.isValidObject( objName )
Form.isValidObject( strName )
```

**Parameters**

```
존재 여부를 확인할 오브젝트를 설정합니다.
```

**Return**

인수로 전달된 오브젝트가 Form 에 존재하면 "true"를 반환합니다.
인수로 전달된 오브젝트가 Form 에 존재하지 않으면 "false"를 반환합니다.
잘못된 값을 인수로 전달했을 경우도 "false"를 반환합니다.


---

### killTimer

> Form > Method > killTimer

**Description**

setTimer() 메소드로 생성된 타이머를 삭제하는 메소드입니다.

**Syntax**

```javascript
Form.killTimer( nTimerID )
```

**Parameters**

```
setTimer() 메소드에서 타이머 생성 시 설정했던 ID를 숫자로 설정합니다.
```

**Return**

없음


---

### lookup

> Form > Method > lookup

**Description**

인수로 전달된 오브젝트를 Form 영역부터 상위 영역으로 검색하여 반환하는 메소드입니다.

**Syntax**

```javascript
Form.lookup( strObjectID )
```

**Parameters**

```
검색하여 찾고자 하는 오브젝트의 ID를 문자열로 설정합니다.
```

**Return**

검색하여 찾아낸 오브젝트를 반환합니다.


---

### reload

> Form > Method > reload

**Description**

현재 화면을 다시 로딩하는 메서드입니다.

**Syntax**

```javascript
Form.reload()
```

**Parameters**

this.reload();

**Return**

없음

**Remark**

- 로딩이 완료되면 원래 Form 상태로 초기화됩니다.


◆ onbeforeclose, onclose 이벤트

- reload 메서드 실행 시 onbeforeclose, onclose 이벤트는 발생하지 않습니다.


---

### removeChild

> Form > Method > removeChild

**Description**

Form에 동적으로 추가된 컴포넌트를 제거하는 메소드입니다.

**Syntax**

```javascript
Form.removeChild( strChildID )
```

**Parameters**

```
제거할 자식 컴포넌트의 ID를 설정합니다.
```

**Return**

컴포넌트 제거에 성공하면 제거된 컴포넌트의 오브젝트를 반환합니다.
컴포넌트 제거에 실패하면 "null"을 반환합니다.

**Remark**

- removeChild() 메소드는 Frame 과 컨테이너 컴포넌트에서만 제공합니다.

- addChild() 또는 insertChild() 메소드를 사용하여 동적으로 추가한 컴포넌트만 제거할 수 있습니다.
  동적으로 추가한 컴포넌트가 아닌 경우 오동작이 발생할 수 있습니다.

- 제거된 컴포넌트에 의해 부모 컴포넌트의 스크롤바가 갱신되야 할 때는 resetScroll() 메소드를 사용해야 합니다.
  제거된 컴포넌트에 의해 스크롤바가 자동으로 갱신되지 않습니다.

- removeChild() 메소드로 제거된 컴포넌트를 완전히 삭제하기 위해서는 destroy() 메소드를 사용해야 합니다.

**See Also**

Form.addChildForm.insertChild


---

### removeEventHandler

> Form > Method > removeEventHandler

**Description**

Form 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
Form.removeEventHandler( strEventID, objFunc, objTarget )
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

> Form > Method > removeEventHandlerLookup

**Description**

Form 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
Form.removeEventHandlerLookup( strEventID, strFunc, objTarget )
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

### resetScroll

> Form > Method > resetScroll

**Description**

Form 의 스크롤바와 내부 컴포넌트를 현재 화면 상태에 맞게 갱신하는 메소드입니다.

**Syntax**

```javascript
Form.resetScroll()
```

**Parameters**

this.resetScroll();

**Return**

없음

**Remark**

- 다음과 같은 경우 resetScroll 메소드를 실행해야 합니다.

Form 오브젝트 또는 컨테이너 컴포넌트의 자식 컴포넌트를 생성, 삭제하거나 위치나 크기, visible 속성값을 동적으로 변경한 경우 스크롤바를 갱신하기 위해 resetScroll 메소드를 실행해야 합니다.
resetScroll 메소드를 실행하지 않으면 스크롤바가 정상적으로 동작하지 않을 수 있습니다.
컴포넌트의 left, right, top, bottom, width, height 속성값을 기준 컴포넌트를 참조하도록  설정하고 스크립트로 기준 컴포넌트의 크기나 위치 속성값을 변경하는 경우 변경된 기준 컴포넌트의 위치나 크기 속성값에 맞게 컴포넌트의 위치, 크기를 반영하기 위해 resetScroll 메소드를 실행해야 합니다.
예외적으로 ListView 컴포넌트의 ListViewCellControl 오브젝트의 경우에는 setCellProperty 메소드로 기준 컴포넌트의 위치나 크기 변경 시 내부적으로 resetScroll 메소드에서 수행하는 조정 기능을 처리하고 있습니다. 때문에 resetScroll 메소드를 따로 실행하지 않아도 됩니다.
컴포넌트의 fittocontents 속성값을 설정하고 스크립트로 내부 콘텐츠 변경 시 변경된 콘텐츠 영역 크기에 맞게 반영하기 위해 resetScroll 메소드를 실행해야 합니다.


---

### scrollBy

> Form > Method > scrollBy

**Description**

Form 에 표시된 스크롤을 현재 위치에서 인수로 전달된 값만큼 이동시키는 메소드입니다.

**Syntax**

```javascript
Form.scrollBy( nHoffsetpos, nVoffsetpos )
```

**Parameters**

```
수평스크롤바의 스크롤을 현재위치에서 이동시킬 값을 숫자로 설정합니다.

음수로 설정 시 스크롤의 위치가 감소합니다.
양수로 설정 시 스크롤의 위치가 증가합니다.

값을 적용했을 때 수평스크롤바의 min 속성값보다 작을 경우 min 값으로 적용됩니다.
값을 적용했을 때 수평스크롤바의 max 속성값보다 클 경우 max 값으로 적용됩니다.
```

**Return**

없음

**Remark**

- 수평/수직 스크롤바의 스크롤 위치를 현재 위치에 관계없이 특정 위치로 이동하려면 scrollTo() 메소드를 사용하여야 합니다.

**See Also**

Form.scrollTo


---

### scrollTo

> Form > Method > scrollTo

**Description**

Form 에 표시된 스크롤을 특정 위치로 이동시키는 메소드입니다.

**Syntax**

```javascript
Form.scrollTo( nHpos, nVpos )
```

**Parameters**

```
수평스크롤바의 스크롤이 위치할 값을 숫자로 설정합니다.

설정값이 수평스크롤바의 min 속성값보다 작을 경우 min 값으로 적용됩니다.
설정값이 수평스크롤바의 max 속성값보다 클 경우 max 값으로 적용됩니다.
```

**Return**

없음

**Remark**

- 수평/수직 스크롤바의 스크롤 위치를 현재 위치에서 특정값만큼 이동하려면 scrollBy() 메소드를 사용하여야 합니다.

**See Also**

Form.scrollBy


---

### setEventHandler

> Form > Method > setEventHandler

**Description**

Form 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
Form.setEventHandler( strEventID, objFunc, objTarget )
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

> Form > Method > setEventHandlerLookup

**Description**

Form 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
Form.setEventHandlerLookup( strEventID, strFunc, objTarget )
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

### setFluidLayoutProperty

> Form > Method > setFluidLayoutProperty

**Description**

Form Layout 오브젝트의 속성 중 FluidLayout 관련 속성값을 동적으로 설정하는 메소드입니다.

**Syntax**

```javascript
Form.setFluidLayoutProperty(strLayoutName, strPropID, strValue)
```

**Parameters**

```
레이아웃 이름을 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- strPropId 파라미터값으로 "tabletemplate" 속성만 설정할 수 있습니다.
  나머지 FluidLayout 관련 속성은 미지원입니다.

◆ tabletemplate 속성 관련

- tabletemplatearea 속성값을 넥사크로 스튜디오에서 설정한 경우에는 tabletemplate 속성값을 동적으로 설정할 수 없습니다.
  tabletemplatearea 속성값을 설정하지 않은 경우에만 지원합니다.


---

### setFocus

> Form > Method > setFocus

**Description**

Form 컴포넌트(오브젝트)에 포커스를 설정하는 메서드입니다.

**Syntax**

```javascript
Form.setFocus( [bMoveScroll [, bInnerFocus]] )
```

**Parameters**

```
부모 컴포넌트에 스크롤이 있을 경우, Form 기준으로 스크롤을 이동할지 여부를 설정합니다.

true: Form 이(가) 화면에 표시되도록 스크롤을 이동합니다.
false: Form 위치와 관계없이 스크롤을 이동하지 않습니다.

값을 지정하지 않으면 기본값은 true입니다.
```

**Return**

Form 이(가) 포커스를 얻기 전에 포커스를 가지고 있던 컴포넌트를 반환합니다.
이전에 포커스를 가진 컴포넌트가 없거나 메소드 실행에 실패한 경우에는 null을 반환합니다.

**Remark**

- enableaccessibility 속성값과 관계없이 전달된 파라미터값을 기준으로 동작합니다.


---

### setStepCount

> Form > Method > setStepCount

**Description**

현재 레이아웃의 화면을 지정한 숫자만큼 분할하도록 설정하는 메소드입니다.

**Syntax**

```javascript
Form.setStepCount(nStepcount)
```

**Parameters**

```
분할할 화면 개수를 설정합니다.
```

**Return**

없음

**Remark**

- 음수값을 지정하는 경우에는 이전값을 유지합니다.
- 설정값에 따라 stepindex 속성값이 달라질 수 있습니다.
  설정한 값에서 1을 뺀 값이 stepindex 속성값보다 작은 경우 설정한 값에서 1을 뺀 값으로 stepindex 속성값이 처리됩니다.
- 컴포넌트의 positionstep 속성값보다 nStepcount를 작게 설정하는 경우 해당 컴포넌트는 화면에 표시되지 않습니다.
  nStepcount를 0으로 설정하는 경우에는 컴포넌트의 positionstep 속성값은 무시됩니다.


---

### setStepIndex

> Form > Method > setStepIndex

**Description**

Form 이 화면분할 되었을 때 표시할 화면을 인덱스로 설정하는 메소드입니다.

**Syntax**

```javascript
Form.setStepIndex( nIndex )
```

**Parameters**

```
분할된 화면 중 표시할 화면의 인덱스를 설정합니다.

인덱스는 "0" 부터 시작하며 "stepcount속성값 - 1"까지 설정할 수 있습니다.
```

**Return**

분할된 화면 이동에 성공하면 "true"가 반환됩니다.
분할된 화면 이동에 실패하면 "false"가 반환됩니다.

**Remark**

- 넥사크로 스튜디오에서 stepcount 속성을 설정하여 Form의 화면을 분할하여 사용할 때만 적용되는 메소드입니다.

- setStepIndex() 메소드 수행에 성공하면 StepControl 의 stepindex 속성값이 해당 화면의 인덱스로 설정됩니다.


---

### setTimer

> Form > Method > setTimer

**Description**

주기적으로 ontimer 이벤트를 발생시키기 위해 타이머를 생성하는 메소드입니다.

**Syntax**

```javascript
Form.setTimer( nTimerID, nElapse )
```

**Parameters**

```
ontimer 이벤트를 발생시킨 타이머를 구분하기 위한 ID를 숫자로 설정합니다.
ID값은 "0~65535" 사이의 값을 설정할 수 있습니다.
```

**Return**

없음

**Remark**

- setTimer() 메소드로 생성한 타이머는 ontimer 이벤트를 발생시킵니다.

- nElapse의 간격은 Windows98 이상에서는 약 55ms 이상, Windows NT/2000 이상에서는 약 10ms 이상으로 설정해야 정상적으로 작동합니다.

- ontimer 이벤트 발생 주기는 환경에 따라 약간의 오차가 발생할 수 있습니다.


---

### setWaitCursor

> Form > Method > setWaitCursor

**Description**

Wait Cursor 를 표시하거나 해제하는 메소드입니다.

**Syntax**

```javascript
Form.setWaitCursor( [bWaitFlag [, bForcely]] )
```

**Parameters**

```
화면에 Wait Cursor의 표시 여부를 설정합니다.

true 설정 시 Wait Cursor가 화면에 표시됩니다.
false 설정 시 화면에 표시된 Wait Cursor 를 해제합니다.

값 생략 시 true 로 적용됩니다.
```

**Return**

없음

**Remark**

- loadingimage 속성에 설정된 이미지가 Wait Cursor 로 표시됩니다.
   loadingimage 속성을 설정하지 않아도 기본 Wait Cursor 가 표시됩니다.
   애니메이션 "GIF" 파일 설정 시 애니메이션이 플레이 됩니다.

- setWaitCursor() 메소드는 usewaitcursor 속성에 제약을 받습니다.
   usewaitcursor 속성값이 false 일 경우 bForcely 값을 설정하지 않으면 메소드가 실행되지 않습니다.

- WaitCursor 가 화면에 표시되어 있으면 입력과 선택이 모두 제한됩니다.


---

### sleep

> Form > Method > sleep

**Description**

설정한 시간만큼 스크립트 실행을 멈추는 메소드입니다.

**Syntax**

```javascript
Form.sleep( nMilliseconds )
```

**Parameters**

```
스크립트 실행을 멈출 시간을 밀리초(milliseconds) 단위의 숫자로 설정합니다.
```

**Return**

없음


---

### transaction

> Form > Method > transaction

**Description**

DataSet 의 데이터를 갱신하기 위한 서비스를 호출하고,트랜잭션이 완료되면 콜백 함수를 수행하는 메소드입니다.

**Syntax**

```javascript
Form.transaction( strSvcID, strURL, strInDatasets, strOutDatasets, strArgument [,strCallbackFunc [,bAsync [,nDataType [,bCompress]]]] )
```

**Parameters**

```
트랜잭션을 구분하기 위한 ID를 문자열로 설정합니다.
```

**Return**

strCallbackFunc 파라미터값을 설정하지 않은 경우에만 반환값이 있습니다.

Promise 오브젝트를 반환합니다.
Promise 오브젝트는 자바스크립트 표준 내장 객체입니다.
내부적으로 resolve 수행 시점은 transaction 수행이 완료되는 시점입니다.

**Remark**

- Application 과 Form 에 정의된 transaction() 메소드는 기본적인 기능은 동일하지만 DataSet 과 콜백함수를 찾는 영역이 다릅니다.
  > Application 의 transaction() 메소드는 DataSet 과 콜백함수가 Application 영역에 정의되어 있어야 합니다.
  > 반면 Form 의 transaction() 메소드는 Form 영역에서 DataSet 과 콜백함수를 우선적으로 검색하지만,
  > Form 영역에 DataSet 과 콜백함수가 정의되어 있지 않으면 상위 영역으로 검색을 확장시킵니다.
  > Form 이 Container Component 에 연결되어 있으면 상위 컴포넌트도 검색 영역에 포함됩니다.
  > Form 영역에서 strInDatasets, strOutDatasets 파라미터 설정 시 "."을 포함한 형식을 사용하는 경우에는 상위 영역으로 검색을 확장하지 않습니다.

- 트랜잭션은 기본적으로 비동기 방식으로 동작합니다.
   예외적으로 strURL 에 로컬 경로를 설정하는 경우에는 bAsync 옵션과 무관하게 동기(Sync) 방식으로 동작합니다.

- strInDatasets 의 추가 옵션
   strInDatasets 에 각각의 DataSet ID 뒤에 ":U", ":A", ":N" 의 옵션을 붙일 수 있습니다.
  > ":U" 는 갱신된 정보만을 보냅니다.
  > ":A" 는 모든 정보를 보냅니다.
  > ":N" 은 현재 삭제한 데이터를 제외한 정보를 Normal 상태로 보냅니다. 지정하지 않은 DataSet 은 Normal 로 동작합니다.

- strOutDatasets 관련 주의사항
   strOutDatasets 으로 입력받는 DataSet 은 Datasetid.load() 와 마찬가지로 
   기존에 가진 열/레코드 대신 수신받은 DataSet 의 열/레코드로 모두 변경됩니다.

- strCallbackFunc 에 관한 주의사항
   strCallbackFunc 를 "Transaction_Callback" 으로 설정할 경우,
   해당 Form 또는 상위영역에는 this.transaction_Callback = function(strSvcID, nErrorCode, strErrorMag) 이 존재해야 합니다.
   이 콜백 함수는 위와 같은 형태이며, 콜백 함수의 strSvcID 는 입력된 strSvcID 와 동일합니다.

- 트랜잭션 수행 후 서버로 부터 전달된 파라미터가 있을 경우 처리되는 사항
  > 파라미터의 변수명을 Form > Application > Environment 영역 순서로 찾아 처음 일치하는 영역의 변수값만 업데이트합니다.
     전체 영역에서 일치하는 변수가 없을 경우에는 전달된 파라미터값이 무시됩니다.

- 트랜잭션 수행 후 서버로 부터 전달된 Return XML 의 ErrorCode 파라미터 관련 주의사항
  > ErrorCode 가 0 미만의 음수이면 트랜잭션이 실패로 처리되고, Input DataSet 의 상태와 바인딩된 컴포넌트는 리드로(redraw) 되지 않습니다.
     단, Environment 의 datasetloadtype 속성값이 "errorallow" 인 경우는 Output DataSet 에 데이터를 로드합니다.
  > ErrorCode 가 0 이상이면 트랜잭션이 성공으로 처리되고, Input DataSet 의 상태는 "Normal" 로 변경되며 바인딩된 컴포넌트는 리드로(redraw) 됩니다.
  > 서버로 부터 전달된 데이터가 없을 경우 (서버에서 HttpPlatformResponse 자체를 실행하지 않음)에는
     ErrorCode 는 -1 값으로, ErrorMsg 는 "Stream Data is null!" 값으로 설정된 후 콜백 함수가 호출됩니다.

- 통신을 강제로 중지시키는 방법
   트랜잭션 처리 중이라도 ESC 키를 누르면 통신을 강제로 중지시킬 수 있습니다.

- Get/Post 방식관련 참고사항  
   1. strArgument 와 strInDatasets 이 ""이고, Environment 의 Cookies 영역에 변수가 없으면 GET 방식으로 동작합니다.
   2. strArgument 나 strInDatasets 에 값이 있거나 Environment 의 Cookies 영역에 변수가 있으면 POST로 동작합니다.
   3. 위 1번의 상태에서 addcookietovariable 값이 "true" 이면 서버와의 첫 통신시에는 GET 방식으로 동작하고 이후부터는 서버에서 유입되는
      Cookie 의 유무에 따라 Cookie 가 있으면 POST 없으면 GET 방식으로 동작합니다.
     (addcookietovariable 값이 "true"이면 Cookie 가 Environment 의 Cookies 영역에 변수로 자동 추가 되기 때문.)

- 서버로부터 데이터를 Chunked 방식으로 여러번에 걸쳐서 받을 경우 progressload 속성으로 데이터를 로드하는 방식을 설정할 수 있습니다.
   자세한 내용은 "Dataset > progressload" 항목을 참고하시기 바랍니다.

- 넥사크로 스튜디오를 사용해 넥사크로를 실행했을 때 트랜잭션을 수행하면 CacheLevel 의 설정과 상관없이 "none"으로 동작합니다.

- SSV 타입 참고사항
  > 넥사크로 Web 버전 과 Mobile 버전 연동을 위하여 CSV 포맷을 확장하여 사용합니다.
  > 확장내역 : RowType 추가, 구분자 변경(콤마 -> US, 줄바꿈(CR/LF) -> RS)
  > Empty String 과 undefined 의 구분을 위하여 undefined 는 ETX(end of text)[code:0x03] 값으로 대체되어 서버로 전송됩니다. 


◆ WRE 제약
 
- nDataTYpe 값이 “Binary”인 경우에는 bAsync 값과 상관없이 비동기(ASync)로 처리합니다.

- bCompress 값은 지원하지 않습니다.

- bAsync 값을 false로 설정하면 Environment의 httptimeout 속성에 설정된 대기시간이 적용되지 않습니다.

 
◆ Mobile 제약
 
- iOS/iPadOS 는 비동기(Async) 방식만 지원하여 bAsync 값이 적용되지 않습니다.


---

### 이벤트 (Events)

### canlayoutchange

> Form > Event > canlayoutchange

**Description**

Form의 Layout 이 변경될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
canlayoutchange(obj:nexacro.Form,e:nexacro.LayoutChangeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 Form 의 Layout 이 변경됩니다.
이벤트에서 리턴값으로 false 를 반환하면 Form 의 Layout 이 변경되지 않습니다.

이벤트에서 리턴값을 생략하면 true 로 적용됩니다.

**Remark**

- Form 에 Layout 이 정의되어 있을 때만 발생하는 이벤트입니다.


---

### canstepchange

> Form > Event > canstepchange

**Description**

화면분할이 설정된 Form 에서 표시되는 화면이 변경될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
canstepchange(obj:nexacro.Form,e:nexacro.StepChangeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 "true"를 반환하면 표시되는 화면이 변경됩니다.
이벤트에서 리턴값으로 "false"를 반환하면 표시되는 화면이 변경되지 않습니다.

이벤트에서 리턴값을 생략하면 "true"로 적용됩니다.

**Remark**

- stepcount 속성을 설정하여 Form의 화면을 분할하여 사용할 때만 발생하는 이벤트입니다.

- 이벤트에서 "true"를 반환하면 stepindex 속성값이 변경된 화면의 인덱스로 설정됩니다.


---

### onactivate

> Form > Event > onactivate

**Description**

Form 이 활성화될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onactivate(obj:nexacro.Form,e:nexacro.ActivateEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Form 이 최초 생성될 때 onload 이벤트가 발생한 후 onactivate 이벤트가 발생합니다.
- open() 메소드로 오픈된 Modeless 창에서 부모창의 Form 에 setFocus() 메소드 실행 시 환경에 따라 동작에 차이가 있으므로 주의하여야 합니다.
   > Nexacro Runtime Environment
       : 부모 Form 이 활성화 되어 onactivate 이벤트가 발생합니다.
         부모 Form 으로 포커스가 이동하며 "Frame 정렬"이 수행됩니다.
   > Web Runtime Environment
       : 브라우저 제약 때문에 부모 Form 은 활성화 되지 않으며 onactivate 이벤트가 발생하지 않습니다.
         부모 Form 으로 포커스가 이동하지 않지만 "Frame 정렬"은 수행됩니다.
   * "Frame 정렬" 
       : FrameSet 의 자식 Frame 중 하나로 포커스가 이동하면 해당 Frame 이 동일레벨 Frame 중 상위에 표시됩니다.
         이 때, Frame 간 포커스 이동이 발생했다면 해당 Frame 의 Form 에서 onsetfocus 이벤트가 발생합니다.
         Frame 간 포커스 이동이 없다면 onsetfocus 이벤트가 발생하지 않습니다.
- 활성화된 Form 에서만 키보드 관련 이벤트가 발생합니다.
- 활성화상태는 다른 Form 또는 어플리케이션을 선택하면 잃게 됩니다.

- 앱이 활성화될 때 이벤트가 발생합니다.
- MainFrame > [Frameset] > ChildFrame > Form 순으로 이벤트가 발생합니다.
  ChildFrame 의 onactivate 이벤트가 발생한 후 ChildFrame 의 formurl 속성에 설정된 Form 에서 onactivate 이벤트가 발생합니다. 
- 운영체제에 따라 특정 동작 또는 시스템과 연결되어 이벤트가 발생할 수 있습니다.
  > 안드로이드
     앱 시작 시
     background 상태에서 다시 foreground 상태로 변경될 때
  > iOS
    앱 시작 시
    background 상태에서 다시 foreground 상태로 변경될 때
    키패드가 내려가면서 deactive 상태가 된 상태에서 Form에 포커스를 줄 때
    (WKWebView 내부에서 포커스 동작 시 시스템 이벤트 발생 기준과 같습니다)


◆ visible, enable 속성값에 따른 Form 오브젝트 이벤트 발생 여부

- Form 오브젝트의 visible 또는 enable 속성값이 false인 경우, onbeforeclose, onclose, onactivate, ondeactivate 이벤트는 발생하지 않습니다.
- 컨테이너 컴포넌트(Div, PopupDiv, TabpageControl)의 url 속성값을 설정해 Form을 로딩한 경우
  컨테이너 컴포넌트의 enable 속성값이 false인 경우, Form 오브젝트의 onbeforeclose, onclose, onactivate, ondeactivate 이벤트는 발생하지 않습니다.
  컨테이너 컴포넌트의 enable 속성값은 true이고 visible 속성값만 false인 경우, Form 오브젝트의 onbeforeclose, onclose, onactivate 이벤트는 발생하지만 ondeactivate 이벤트는 발생하지 않습니다.


---

### onbeforeclose

> Form > Event > onbeforeclose

**Description**

Form 이 종료되기 전에 발생하는 이벤트입니다.

**Syntax**

```javascript
onbeforeclose(obj:nexacro.Form,e:nexacro.CloseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 문자열 설정 시 Form 종료를 위한 확인창이 표시됩니다.
이벤트에서 리턴값으로 설정한 문자열이 종료를 위한 확인창에 사용됩니다.

이벤트에서 리턴값을 생략하거나 null, undefined, ""(Empty String) 으로 설정 시 확인창이 표시되지 않습니다.

**Remark**

- Form 에서 발생한 onbeforeclose 이벤트는 상위로 전파됩니다.

- 일반적으로 Form 종료 전 사용자의 확인을 받을 때 사용하는 이벤트입니다.

- Form 내부의 Tab 컴포넌트에서 removeTabpage() 메소드로 TabPage 삭제 시 현재 Form 의 onbeforeclose 이벤트가 발생합니다.

- Form 에 속한 Div, PopupDiv, TabPageControl 의 url 속성값이 변경될 경우 현재 Form 의 onbeforeclose 이벤트가 발생합니다.

- 종료를 위한 확인창에서 "확인"을 선택하면 onclose 이벤트가 발생하고 Form 이 종료됩니다.
   종료를 위한 확인창에서 "취소"를 선택하면 onclose 이벤트가 발생하지 않고 Form 이 종료되지 않습니다.


◆ visible, enable 속성값에 따른 Form 오브젝트 이벤트 발생 여부

- Form 오브젝트의 visible 또는 enable 속성값이 false인 경우, onbeforeclose, onclose, onactivate, ondeactivate 이벤트는 발생하지 않습니다.
- 컨테이너 컴포넌트(Div, PopupDiv, TabpageControl)의 url 속성값을 설정해 Form을 로딩한 경우
  컨테이너 컴포넌트의 enable 속성값이 false인 경우, Form 오브젝트의 onbeforeclose, onclose, onactivate, ondeactivate 이벤트는 발생하지 않습니다.
  컨테이너 컴포넌트의 enable 속성값은 true이고 visible 속성값만 false인 경우, Form 오브젝트의 onbeforeclose, onclose, onactivate 이벤트는 발생하지만 ondeactivate 이벤트는 발생하지 않습니다.


---

### onbindingvaluechanged

> Form > Event > onbindingvaluechanged

**Description**

DataSet 의 데이터 변경에 의해 바인딩된 컴포넌트에 변경이 있을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onbindingvaluechanged(obj:nexacro.Form,e:nexacro.BindingValueChangedEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- DataSet 의 Data 또는 Row 변경에 의해 바인딩된 Form 또는 컴포넌트의 속성값이 변경되면 onbindingvaluechanged 이벤트가 발생합니다.
  일반적으로 DataSet 에서 onvaluechanged 이벤트가 발생한 후 변경된 값이 바인딩된 객체에 영향을 미칠때 이벤트가 발생합니다.
  예를 들어 DataSet 의 Row 변경에 의해 바인딩된 Edit 의 value 속성값이 변경되거나 외부요인에 의해 바인드된 Data 가 변경되면 이벤트가 발생합니다.

- xfdl 소스에 "<Bind>" 태그로 바인딩된 아이템 정보가 있을 때만 onbindingvaluechanged 이벤트가 발생합니다.

- Form 의 컴포넌트 크기가 바인딩된 값에 의해 변경되어 화면의 재배열이 필요할 경우 해당 이벤트에 정의합니다.


---

### onclick

> Form > Event > onclick

**Description**

Form 영역 내에서 마우스 왼쪽버튼을 클릭했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onclick(obj:nexacro.Form,e:nexacro.ClickEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Form 영역 내에서 마우스의 lbuttondown 액션과 lbuttonup 액션이 발생되어야 합니다.

- 일부 컴포넌트는 아래 조건에서 onclick 이벤트가 발생하는 경우 ClickEventInfo 오브젝트의 좌표 관련 속성값은 모두 -1로 처리합니다.
  * 컴포넌트에 포커스가 주어진 상태에서 Basic Key Action에 설정된 키 입력 시
    - Space 또는 Enter 키: Button, FileDownload, ImageViewer   
    - Space 키: CheckBox  
  * hotkey 속성을 설정하고 해당 키 입력 시: Button, CheckBox  
  * defaultbutton, escapebutton 속성을 설정하고 Form에서 해당 키 입력 시: Button  
  * click 메소드 실행 시: Button


---

### onclose

> Form > Event > onclose

**Description**

Form 이 종료되거나 화면 전환이 이뤄질 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onclose(obj:nexacro.Form,e:nexacro.CloseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Form 에서 발생한 onclose 이벤트는 상위 오브젝트로 전파됩니다.

- Form 내부의 Tab 컴포넌트에서 removeTabpage() 메소드로 TabPage 삭제 시 현재 Form 의 onclose 이벤트가 발생합니다.

- Form 에 속한 Div, PopupDiv, TabPageControl 의 url 속성값이 변경될 경우 현재 Form 의 onclose 이벤트가 발생합니다.


◆ visible, enable 속성값에 따른 Form 오브젝트 이벤트 발생 여부

- Form 오브젝트의 visible 또는 enable 속성값이 false인 경우, onbeforeclose, onclose, onactivate, ondeactivate 이벤트는 발생하지 않습니다.
- 컨테이너 컴포넌트(Div, PopupDiv, TabpageControl)의 url 속성값을 설정해 Form을 로딩한 경우
  컨테이너 컴포넌트의 enable 속성값이 false인 경우, Form 오브젝트의 onbeforeclose, onclose, onactivate, ondeactivate 이벤트는 발생하지 않습니다.
  컨테이너 컴포넌트의 enable 속성값은 true이고 visible 속성값만 false인 경우, Form 오브젝트의 onbeforeclose, onclose, onactivate 이벤트는 발생하지만 ondeactivate 이벤트는 발생하지 않습니다.


---

### oncontextmenu

> Form > Event > oncontextmenu

**Description**

Form 영역에서 오른쪽 마우스 버튼을 클릭하거나 터치를 일정시간 유지할 때 발생하는 이벤트입니다.

**Syntax**

```javascript
oncontextmenu(obj:nexacro.Form,e:nexacro.ContextMenuEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 모바일 환경에서는 터치를 일정시간 유지하면 oncontextmenu 이벤트가 발생합니다.

- Form 컴포넌트는 마우스 우클릭이나 터치에 의해 표시되는 기본팝업메뉴가 제공되지 않습니다.


---

### ondeactivate

> Form > Event > ondeactivate

**Description**

Form 이 비활성화 되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondeactivate(obj:nexacro.Form,e:nexacro.ActivateEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 앱이 비활성화될 때 이벤트가 발생합니다.
- Form > ChildFrame > [Frameset] > MainFrame 순으로 이벤트가 발생합니다.
  ChildFrame 의 formurl 속성에 지정된 Form에서 ondeactivate 이벤트가 발생 한 후에 ChildFrame 의 ondeactivate 이벤트가 발생합니다.
- 운영체제에 따라 특정 동작 또는 시스템과 연결되어 이벤트가 발생할 수 있습니다.
  > 안드로이드
     다른 앱이 활성화될 때
     홈 키를 입력할 때
     화면을 끌 때
  > iOS
     다른 앱이 활성화될 때
     화면을 끌 때
     키패드가 내려갈 때
    (WKWebView 내부에서 포커스 동작 시 시스템 이벤트 발생 기준과 같습니다).


◆ visible, enable 속성값에 따른 Form 오브젝트 이벤트 발생 여부

- Form 오브젝트의 visible 또는 enable 속성값이 false인 경우, onbeforeclose, onclose, onactivate, ondeactivate 이벤트는 발생하지 않습니다.
- 컨테이너 컴포넌트(Div, PopupDiv, TabpageControl)의 url 속성값을 설정해 Form을 로딩한 경우
  컨테이너 컴포넌트의 enable 속성값이 false인 경우, Form 오브젝트의 onbeforeclose, onclose, onactivate, ondeactivate 이벤트는 발생하지 않습니다.
  컨테이너 컴포넌트의 enable 속성값은 true이고 visible 속성값만 false인 경우, Form 오브젝트의 onbeforeclose, onclose, onactivate 이벤트는 발생하지만 ondeactivate 이벤트는 발생하지 않습니다.


---

### ondevicebuttonup

> Form > Event > ondevicebuttonup

**Description**

모바일 에서 디바이스 버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondevicebuttonup(obj:nexacro.Form,e:nexacro.DeviceButtonEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.
반환값을 생략하면 false로 적용됩니다.

**Remark**

- 디바이스 버튼을 눌렀다 뗄 때 이벤트가 발생합니다.

- 버튼 형식은 MENU(1),  CANCEL(2) 2종류 입니다.

- 일부 기종에서 CANCEL 버튼을 long press 해야 MENU key event가 발생합니다.

**Example**



---

### ondrag

> Form > Event > ondrag

**Description**

Form 영역 내에서 마우스 왼쪽버튼으로 드래그를 수행했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondrag(obj:nexacro.Form,e:nexacro.DragEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 드래그 상태가 되고 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 드래그 상태가 취소되고 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- Form 영역 내에서 마우스의 LButtonDown 후 LButtonUp 액션 없이 마우스 이동 시 ondrag 이벤트가 발생합니다.

- 이벤트의 리턴값을 true 로 하여 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등

- 에디트 계열 컴포넌트에서 마우스로 드래그 시 화면의 문자열을 선택할 지 드래그 상태를 발생시킬지 여부는 이벤트의 리턴값으로 결정됩니다.


---

### ondragenter

> Form > Event > ondragenter

**Description**

Form 영역 내로 드래그 상태의 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragenter(obj:nexacro.Form,e:nexacro.DragEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- 드래그 상태를 유지하고 있으면 Form 영역으로 마우스 포인터가 들어올 때마다 이벤트가 발생합니다.


---

### ondragleave

> Form > Event > ondragleave

**Description**

Form 영역 밖으로 드래그 상태의 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragleave(obj:nexacro.Form,e:nexacro.DragEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- 드래그 상태를 유지하고 있으면 Form 영역에서 마우스 포인터가 나갈 때마다 이벤트가 발생합니다.


---

### ondragmove

> Form > Event > ondragmove

**Description**

Form 영역 내에서 드래그 상태의 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondragmove(obj:nexacro.Form,e:nexacro.DragEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- 드래그 상태를 유지하고 있으면 Form 영역 내에서 마우스 포인터가 움직일 때마다 이벤트가 발생합니다.


---

### ondrop

> Form > Event > ondrop

**Description**

Form 영역 내에서 드래그 상태의 마우스 버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ondrop(obj:nexacro.Form,e:nexacro.DragEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- Form 영역 내에서 드래그 상태인 마우스의 LButtonUp 액션 발생 시 ondrop 이벤트가 발생합니다.

- 넥사크로에서 발생한 드래그 또는 어플리케이션 외부에서 파일을 드래그 했을 때 ondrop 이벤트를 발생시킬 수 있습니다.

- 드래그 상태가 발생해도 아래와 같은 이유로 드래그 상태가 중단될 수 있습니다.
   > 넥사크로 내부에서 alert(), confirm(), showModal() 메소드가 실행되어 포커스가 바뀌는 경우.
   > OS 내 다른 어플리케이션으로 포커스가 바뀌는 경우.
   > 이벤트가 시작된 컴포넌트가 삭제되는 경우 등


---

### onerror

> Form > Event > onerror

**Description**

Form 에서 실행한 Transaction 에서 에러가 생겼을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.Form,e:nexacro.ErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면
  > Environment 의 onerror 로 이벤트를 전파하지 않습니다.
  > 실행중인 Transaction 을 중지시키지 않고 유지합니다.

이벤트에서 리턴값으로 false 를 반환하면
  > Environment 의 onerror 로 이벤트를 전파합니다.
  > 실행중인 Transaction 의 중지여부는 Environment 의 onerror 에서 리턴값으로 결정됩니다.
  > Environment 에 onerror 이벤트가 정의되어 있지 않으면 실행중인 Transaction 은 중지됩니다.

이벤트의 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- Form 의 Transaction 이 실행중일 때 ESC 키를 입력하여 Form 의 onerror 이벤트를 발생 시킬 수 있습니다.
   Application 의 Transaction 이 실행중일 때 ESC 키를 입력하면 Application 의 onerror 이벤트가 발생합니다.

- Form 에서 발생한 onerror 이벤트는 Application 으로 전파되지 않습니다.


---

### onextendedcommand

> Form > Event > onextendedcommand

**Description**

DeviceAdaptors 에 정의된 디바이스에서 이벤트가 전달되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onextendedcommand(obj:nexacro.Form,e:nexacro.ExtendedCommandEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Form 에서 발생한 onextendedcommand 이벤트는 Environment 로 전파됩니다.
   이벤트 전파를 막으려면 stopPropagation() 메소드를 사용하여야 합니다.

- 디바이스에서 이벤트가 전달되었을 때 활성화 되어 있는 Form 에서 onextendedcommand 이벤트가 발생합니다.


---

### onhscroll

> Form > Event > onhscroll

**Description**

Form 의 수평 스크롤바를 스크롤 했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onhscroll(obj:nexacro.Form,e:nexacro.ScrollEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### oninit

> Form > Event > oninit

**Description**

Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
oninit(obj:nexacro.Form,e:nexacro.EventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Form 내부의 모든 컴포넌트가 생성되면 oninit 이벤트가 발생합니다.

- Form 내부의 모든 컴포넌트가 생성되고, DataSet 에 데이터 로딩까지 완료되면 onload 이벤트가 발생합니다.


---

### onkeydown

> Form > Event > onkeydown

**Description**

Form 에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkeydown(obj:nexacro.Form,e:nexacro.KeyEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- Tab 키 입력으로 포커스가 변경된 경우는 onkeydown 이벤트가 발생하지 않으며 이벤트가 상위로 전파되지 않습니다.

- onkeydown 이벤트는 키보드 관련 이벤트 중 키가 눌렸을 때 제일 먼저 발생하는 이벤트입니다.

- 키를 누르고 있을 경우 연속적으로 이벤트가 발생합니다.


◆ Mobile WRE 제약

- 일부 모바일 웹브라우저에서 e.keycode 속성에 입력값이 정상적으로 전달되지 않을 수 있습니다.
   또한 키보드 관련 이벤트의 순서가 바뀌어 발생할 수 있습니다.

**Basic Action**

- Tab 키 다운 시 내부 컴포넌트의 포커스를 이동합니다.

**Default Action**

＊ 조합키 [Ctrl+Right/Left] 다운 : 좌/우 스크롤 처리
＊ 조합키 [Ctrl+Down/Up] 다운 : 상/하 스크롤 처리


---

### onkeyup

> Form > Event > onkeyup

**Description**

Form 에 포커스가 있는 상태에서 눌렸던 키보드가 떼어질 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkeyup(obj:nexacro.Form,e:nexacro.KeyEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- Tab 키 입력으로 포커스가 변경된 경우는 onkeyup 이벤트가 발생하지 않으며 이벤트가 상위로 전파되지 않습니다.


◆ Mobile WRE 제약

- 일부 모바일 웹브라우저에서 e.keycode 속성에 입력값이 정상적으로 전달되지 않을 수 있습니다.
   또한 키보드 관련 이벤트의 순서가 바뀌어 발생할 수 있습니다.


---

### onkillfocus

> Form > Event > onkillfocus

**Description**

Form 에서 포커스가 나갈  때 발생하는 이벤트입니다.

**Syntax**

```javascript
onkillfocus(obj:nexacro.Form,e:nexacro.KillFocusEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 서로 다른 애플리케이션 단위로 포커스가 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showModal(), open() 등의 메소드로 팝업된 Frame 으로 포커스가 이동하는 경우 Form 에서 포커스 관련 이벤트가 발생하지 않습니다.
   또한, alert(), confirm() 메소드로 표시된 팝업으로 포커스가 이동하는 경우도 Form 에서 포커스 관련 이벤트가 발생하지 않습니다.


---

### onlayoutchanged

> Form > Event > onlayoutchanged

**Description**

Form의 Layout 이 변경된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
onlayoutchanged(obj:nexacro.Form,e:nexacro.LayoutChangeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- canlayoutchange 이벤트에서 false 를 반환하면 onlayoutchanged 이벤트는 발생하지 않습니다.


---

### onlbuttondown

> Form > Event > onlbuttondown

**Description**

Form 영역 내에서 마우스 왼쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onlbuttondown(obj:nexacro.Form,e:nexacro.MouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- NRE는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- Form 영역 내에서 마우스의 LButtonDown 액션이 발생하면 이벤트가 발생합니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

**Basic Action**

＊ pseudo 표시

**Default Action**

＊ 컴포넌트 포커스 처리


---

### onlbuttonup

> Form > Event > onlbuttonup

**Description**

Form 영역 내에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onlbuttonup(obj:nexacro.Form,e:nexacro.MouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- NRE는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- onlbuttonup 이벤트는 마우스의 왼쪽버튼을 떼었을 때 마우스의 위치와 관계없이 onlbuttondown 이벤트가 발생했던 컴포넌트에서 발생합니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.


---

### onload

> Form > Event > onload

**Description**

Form 에 등록된 모든 컴포넌트와 데이터가 로드된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
onload(obj:nexacro.Form,e:nexacro.LoadEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- Form 의 준비가 완료된 상태입니다.

- Form 에 등록된 컴포넌트만 생성되었을 땐 oninit 이벤트가 발생합니다. 

- Form 에 등록된 모든 컴포넌트가 생성되고, DataSet 에 데이터 로딩까지 완료되면 onload 이벤트가 발생합니다.


---

### onmouseenter

> Form > Event > onmouseenter

**Description**

Form 영역 내로 마우스 포인터가 들어왔을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmouseenter(obj:nexacro.Form,e:nexacro.MouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- NRE는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

- onmouseenter 이벤트 발생 후 onmousemove 이벤트가 발생합니다.
  https://www.w3.org/TR/DOM-Level-3-Events/#events-mouseevent-event-order


◆ iPad 운영체제 제약 (블루투스 마우스 사용 시)

- iPadOS 14 이상 버전에서 블루투스 마우스 사용 시 onmouseenter 이벤트를 지원합니다.
  iPadOS 14 미만 버전은 onmouseenter 이벤트를 지원하지 않습니다.


---

### onmouseleave

> Form > Event > onmouseleave

**Description**

Form 영역 밖으로 마우스 포인터가 나갈 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmouseleave(obj:nexacro.Form,e:nexacro.MouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- NRE는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.


◆ iPad 운영체제 제약 (블루투스 마우스 사용 시)

- iPadOS 14 이상 버전에서 블루투스 마우스 사용 시 onmouseleave 이벤트를 지원합니다.
  iPadOS 14 미만 버전은 onmouseleave 이벤트를 지원하지 않습니다.


---

### onmousemove

> Form > Event > onmousemove

**Description**

Form 영역 내에서 마우스 포인터가 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmousemove(obj:nexacro.Form,e:nexacro.MouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- NRE는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.


◆ iPad 운영체제 제약 (블루투스 마우스 사용 시)

- iPadOS 14 이상 버전에서 블루투스 마우스 사용 시 onmousemove 이벤트를 지원합니다.
  iPadOS 14 미만 버전은 onmousemove 이벤트를 지원하지 않습니다.


---

### onmousewheel

> Form > Event > onmousewheel

**Description**

Form 영역 내에서 마우스의 휠버튼을 회전했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmousewheel(obj:nexacro.Form,e:nexacro.MouseWheelEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 휠버튼 회전값이 무시되고, 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 휠버튼 회전값이 처리되고, 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- 이벤트의 리턴값과 스크롤 조건에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- Form 에서 마우스의 휠버튼 회전값을 처리할 필요가 없을 때 상위 컴포넌트로 휠버튼 회전값과 이벤트가 전파됩니다.
   즉, Form 에서 스크롤이 이동될 때는 상위로 이벤트가 전파되지 않고, 스크롤이 처음이나 마지막 상태일 때 상위로 이벤트가 전파됩니다.

- Control 키를 누른 상태에서 휠버튼을 회전시키면 환경에 따라 아래와 같이 Zoom 이 발생합니다.
   > Windows NRE 는 window 화면단위로 50%~200% 범위 내에서 10% 단위로 Zoom 이 변경됩니다.
   > Desktop WRE는 웹 브라우저에서 지원하는 범위/간격에 따라 Zoom이 변경됩니다.

- Zoom 상태에서도 Form 에서 이벤트가 발생하고 리턴값에 따라 상위로 전파되므로 스크립트 작성 시 주의하여야 합니다.
   이 때, 스크롤은 처리되지 않으며 e.ctrlkey 속성값이 true 로 설정됩니다.

**Default Action**

- Form 에 스크롤바가 있다면 이벤트 발생 후 스크롤을 이동시킵니다.


---

### onmove

> Form > Event > onmove

**Description**

Form 의 위치가 이동했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onmove(obj:nexacro.Form,e:nexacro.MoveEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onorientationchange

> Form > Event > onorientationchange

**Description**

모바일 기기의 화면 방향이 변경되었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onorientationchange(obj:nexacro.Form,e:nexacro.OrientationChangeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- onorientationchange  이벤트는 상위에서 하위로 이벤트가 발생합니다.
  모바일 기기의 방향 전환 시 MainFrame 의 onorientationchange 이벤트가 처음 발생한 후 Frame, Form 순서로 이벤트가 발생합니다.
  이때, preventDefault() 메소드로 이벤트 발생을 중지시킬 수 없습니다.

- onorientationchange 이벤트 내에서 MainFrame 크기 또는 시스템에서 값을 얻는 속성에 접근 시 변경된 값이 전달되지 않을 수 있습니다.
  모바일 기기마다 시스템 관련값의 갱신 시점이 다르고, onorientationchange 이벤트는 기기의 방향이 전환된 즉시 발생하기 때문입니다.


---

### onrbuttondown

> Form > Event > onrbuttondown

**Description**

Form 영역 내에서 마우스 오른쪽버튼을 눌렀을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrbuttondown(obj:nexacro.Form,e:nexacro.MouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- NRE는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

- WRE에서 마우스 오른쪽버튼은 기본팝업메뉴 표시에 사용되므로 일반적으로 onrbuttondown 이벤트를 정의하지 않습니다.

**Default Action**

- onrbuttondown 이벤트 종료 후 이벤트가 발생한 컴포넌트로 포커스가 이동됩니다.
  단, GroupBox, Static 컴포넌트는 포커스가 이동하지 않습니다.

- 일반적으로 onrbuttondown -> onrbuttonup -> oncontextmenu 순서로 이벤트가 발생하지만
   예외적으로 아래 환경은 onrbuttondown -> oncontextmenu -> onrbuttonup 순서로 이벤트가 발생하므로 주의하여야 합니다.
   : Safari 브라우저, macOS 환경의 전체 웹브라우저, Mobile 전체환경


---

### onrbuttonup

> Form > Event > onrbuttonup

**Description**

Form 영역 내에서 마우스 오른쪽버튼을 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onrbuttonup(obj:nexacro.Form,e:nexacro.MouseEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- NRE는 이벤트의 리턴값에 따라 상위 컴포넌트로 이벤트가 전파됩니다.

- onrbuttonup 이벤트는 onrbuttondown 이벤트와 관계없이 마우스 오른쪽버튼을 떼었을 때 마우스가 위치한 컴포넌트에서 발생합니다.


◆ WRE 제약

- WRE는 이벤트의 리턴값과 관계없이 상위 컴포넌트로 이벤트가 전파됩니다.

- WRE에서 마우스 오른쪽버튼은 기본팝업메뉴 표시에 사용되므로 일반적으로 onrbuttonup 이벤트를 정의하지 않습니다.

**Default Action**

- onrbuttonup 이벤트 종료 후 oncontextmenu 이벤트가 발생합니다.
   예외적으로 아래 환경은 onrbuttondown -> oncontextmenu -> onrbuttonup 순서로 이벤트가 발생하므로 주의하여야 합니다.
   : Safari 브라우저, macOS 환경의 전체 웹브라우저, Mobile 전체환경


---

### onsetfocus

> Form > Event > onsetfocus

**Description**

Form 에 포커스가 들어올 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsetfocus(obj:nexacro.Form,e:nexacro.SetFocusEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 서로 다른 애플리케이션 단위로 포커스가 이동할 때는 포커스 관련 이벤트가 발생하지 않습니다.

- showModal(), open() 등의 메소드로 팝업된 Frame 으로 포커스가 이동하는 경우 Form 에서 포커스 관련 이벤트가 발생하지 않습니다.
   또한, alert(), confirm() 메소드로 표시된 팝업으로 포커스가 이동하는 경우도 Form 에서 포커스 관련 이벤트가 발생하지 않습니다.

- open() 메소드로 오픈된 Modeless 창에서 부모창의 Form 에 setFocus() 메소드 실행 시 환경에 따라 동작에 차이가 있으므로 주의하여야 합니다.
   > Nexacro Runtime Environment
       : 부모 Form 이 활성화 되어 onactivate 이벤트가 발생합니다.
         부모 Form 으로 포커스가 이동하며 "Frame 정렬"이 수행됩니다.
   > Web Runtime Environment
       : 브라우저 제약 때문에 부모 Form 은 활성화 되지 않으며 onactivate 이벤트가 발생하지 않습니다.
         부모 Form 으로 포커스가 이동하지 않지만 "Frame 정렬"은 수행됩니다.
   * "Frame 정렬" : FrameSet 의 자식 Frame 중 하나로 포커스가 이동하면 해당 Frame 이 동일레벨 Frame 중 상위에 표시됩니다.
         이 때, Frame 간 포커스 이동이 발생했다면 해당 Frame 의 Form 에서 onsetfocus 이벤트가 발생합니다.
         Frame 간 포커스 이동이 없다면 onsetfocus 이벤트가 발생하지 않습니다.


---

### onsize

> Form > Event > onsize

**Description**

Form 의 크기가 변경됐을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsize(obj:nexacro.Form,e:nexacro.SizeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

### onstepchanged

> Form > Event > onstepchanged

**Description**

화면분할이 설정된 Form 에서 표시되는 화면이 변경된 후 발생하는 이벤트입니다.

**Syntax**

```javascript
onstepchanged(obj:nexacro.Form,e:nexacro.StepChangeEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- canstepchange 이벤트에서 "false"를 반환하면 onstepchanged 이벤트는 발생하지 않습니다.


---

### ontimer

> Form > Event > ontimer

**Description**

setTimer() 메소드로 생성한 타이머의 시간 간격마다 발생하는 이벤트입니다.

**Syntax**

```javascript
ontimer(obj:nexacro.Form,e:nexacro.TimerEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- setTimer() 메소드를 실행한 Form에서 ontimer 이벤트가 발생합니다.

- setTimer() 메소드에서 설정한 타이머 ID값은 e 객체(TimerEventInfo) 의 timerid 속성값으로 전달됩니다.

- ontimer 이벤트 발생을 중지하려면 killTimer() 메소드를 사용하여야 합니다.

- ontimer 이벤트에서 system 의 getCursorX(), getCursorY() 메소드 실행 시 정상적인 좌표값을 반환하지 못합니다.


---

### ontouchend

> Form > Event > ontouchend

**Description**

Form 영역 내에서 터치를 떼었을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchend(obj:nexacro.Form,e:nexacro.TouchEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- Environment 의 enabletouchevent 속성값이 true 인 경우에만 이벤트가 발생합니다.


---

### ontouchmove

> Form > Event > ontouchmove

**Description**

Form 영역 내에서 터치 상태를 유지하며 움직일 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchmove(obj:nexacro.Form,e:nexacro.TouchEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- Environment 의 enabletouchevent 속성값이 true 인 경우에만 이벤트가 발생합니다.


---

### ontouchstart

> Form > Event > ontouchstart

**Description**

Form 영역 내에서 터치가 시작될 때 발생하는 이벤트입니다.

**Syntax**

```javascript
ontouchstart(obj:nexacro.Form,e:nexacro.TouchEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

이벤트에서 리턴값으로 true 를 반환하면 상위 컴포넌트로 이벤트가 전파되지 않습니다.
이벤트에서 리턴값으로 false 를 반환하면 상위 컴포넌트로 이벤트가 전파됩니다.

이벤트에서 리턴값을 생략하면 false 로 적용됩니다.

**Remark**

- Environment 의 enabletouchevent 속성값이 true 인 경우에만 이벤트가 발생합니다.

**Basic Action**

- 테마에 정의된 Status가 적용된 후 이벤트가 발생합니다.


---

### onvscroll

> Form > Event > onvscroll

**Description**

Form 의 수직 스크롤바를 스크롤 했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onvscroll(obj:nexacro.Form,e:nexacro.ScrollEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

## Form > Objects

### Objects

> Form > Objects

**Description**

Form 을 구성하는 요소인 Layout 오브젝트와 StepControl 오브젝트입니다.


---

## Form > Layout

### Layout

> Form > Objects > Layout

**Description**

Form 의 하위요소인 Layout 오브젝트입니다.

**Remark**

- 기본적으로 한 개의 Layout 오브젝트가 자동으로 정의되며, 멀티 Layout 의 경우 여러개의 Layout 오브젝트가 Form 하위에 정의됩니다.

- Layout 오브젝트의 속성은 넥사크로 스튜디오에서 Form 을 선택하면 "Layout Information" 그룹에 표시되며, 여기에 설정된 속성값은 Layout 오브젝트에 저장됩니다.
  멀티 Layout 일 경우 Form 내부의 Layout 선택을 변경하면 "Layout Information" 그룹 속성값이 해당 Layout 에 저장된 값으로 표시됩니다.

- Layout 오브젝트의 속성은 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없습니다.

- 선택된 Screen 에 표시될 Layout 의 선택기준은 다음과 같습니다.
  
  1) 선택된 Screen 의 ID 가 screenid 속성에 정의된 LayOut 을 선택
  2) 1번에서 선택된 Layout 목록이 2 개 이상이면 Screen 의 너비와 오차가 가장 적은 Layout 을 선택
  3) 2번에서 선택된 Layout 목록이 2 개 이상이면 Screen 의 높이와 오차가 가장 적은 Layout 을 선택
  4) 3번에서 선택된 Layout 목록이 2 개 이상이면 먼저 정의된 Layout 을 선택
  
  * 각 단계에서 만족하는 Layout 이 없을 경우 Default Layout 이 표시됩니다.
  * 모바일 환경에서는 1번 선택 과정에서 실제 디바이스의 방향값과 Layout 에 정의된 방향값이 일치하여야 합니다.

- portrait 상태에서 "mobile_small" 은 "480x768", "mobile_medium" 은 "640x1024", "mobile_large" 는 "800x1280" 해상도로 처리됩니다.

**Property**

| Name | Description |
| --- | --- |
| description | Form 에 정의된 Layout 에 대한 사용자 설명을 설정하는 속성입니다. |
| flexcrossaxisalign | Layout 컨테이너 내 Cross Axis(type 속성값이 "horizontal"이면 수직축, type 속성값이 "vertical"이면 수평축)을 기준으로 컴포넌트의 배치 방식을 설정합니다. |
| flexcrossaxiswrapalign | flexwrap 속성값을 "wrap"으로 설정한 경우 Layout 컨테이너 내 Cross Axis(type 속성값이 "horizontal"이면 수직축, type 속성값이 "vertical"이면 수평축)을 기준으로 컴포넌트의 배치 방식을 설정합니다. |
| flexmainaxisalign | Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)을 기준으로 컴포넌트의 배치 방식을 설정합니다. |
| flexwrap | 컴포넌트가 배치되면서 Layout 컨테이너 영역을 넘어갈 때 줄바꿈 여부를 설정합니다. |
| height | Form 에 정의된 현재 Layout 의 높이를 설정하는 속성입니다. |
| horizontalgap | Layout 컨테이너 내 배치된 컴포넌트(또는 Cell)의 수평축 간격을 설정하는 속성입니다. |
| initvalueid | Layout 에 적용될 InitValue 의 ID 를 설정하는 속성입니다. |
| mobileorientation | 모바일 환경에서 LayOut 이 표시될 디바이스의 방향값을 설정하는 속성입니다. |
| name | Layout 의 이름을 설정하는 속성입니다. |
| screenid | Layout 이 적용될 Screen 의 ID 를 설정하는 속성입니다. |
| spacing | Layout 컨테이너와 컴포넌트 간 여백을 설정하는 속성입니다. |
| stepcount | Layout 의 화면이 분할되는 갯수를 설정하는 속성입니다. |
| stepindex | Layout 에 분할된 화면 중 표시할 화면의 인덱스를 설정하는 속성입니다. |
| tablecellalign | Layout 컨테이너 내 가상의 Table Cell의 배치 방식을 설정합니다. |
| tablecellincompalign | Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트의 배치 방식을 설정합니다. |
| tabledirection | Layout 컨테이너 내 가상의 Table Cell에 컴포넌트가 자동으로 배치되는 방향을 설정하는 속성입니다. |
| tabletemplate | Layout 컨테이너 내 가상의 Table Cell을 설정합니다. |
| tabletemplatearea | Layout 컨테이너 내 가상의 Table Cell의 이름을 설정하는 속성입니다. |
| type | Layout 컨테이너 내 컴포넌트 배치 기준을 설정하는 속성입니다. |
| verticalgap | Layout 컨테이너 내 배치된 컴포넌트(또는 Cell)의 수직축 간격을 설정하는 속성입니다. |
| width | Form 에 정의된 현재 Layout 의 너비를 설정하는 속성입니다. |


---

### 속성 (Properties)

### description

> Form > Objects > Layout > Property > description

**Description**

Form 에 정의된 Layout 에 대한 사용자 설명을 설정하는 속성입니다.

**Syntax**

```javascript
Layout.description
```

**Setting Syntax**

- **`description`** — 현재 Layout 에 대한 추가정보 및 사용자 정보를 설정합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 기능에 영향을 주지 않고, 추가적인 정보만 저장하는 속성입니다.

- Layout 마다 다르게 설정할 수 있습니다.


---

### flexcrossaxisalign

> Form > Objects > Layout > Property > flexcrossaxisalign

**Description**

Layout 컨테이너 내 Cross Axis(type 속성값이 "horizontal"이면 수직축, type 속성값이 "vertical"이면 수평축)을 기준으로 컴포넌트의 배치 방식을 설정합니다.

**Syntax**

```javascript
Layout.flexcrossaxisalign
```

**Setting Syntax**

```javascript
flexcrossaxisalign::= 'start' | 'end' | 'center'
```
- **`"start"`** — Cross Axis 시작 위치에 맞추어 배치됩니다.
- **`"end"`** — Cross Axis 끝 위치에 맞추어 배치됩니다.
- **`"center"`** — Cross Axis 가운데 위치에 맞추어 배치됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- flexcrossaxisalign 속성값을 설정하지 않으면 "start"로 설정됩니다.

- flexwrap 속성값을 "wrap"으로 설정하고 줄바꿈이 발생한 경우에는 각 행 또는 열 영역에 대한 배치만 처리합니다.
   전체 컴포넌트를 묶어서 배치하는 것은 flexcrossaxiswrapalign 속성에서 처리합니다.


---

### flexcrossaxiswrapalign

> Form > Objects > Layout > Property > flexcrossaxiswrapalign

**Description**

flexwrap 속성값을 "wrap"으로 설정한 경우 Layout 컨테이너 내 Cross Axis(type 속성값이 "horizontal"이면 수직축, type 속성값이 "vertical"이면 수평축)을 기준으로 컴포넌트의 배치 방식을 설정합니다.

**Syntax**

```javascript
Layout.flexcrossaxiswrapalign
```

**Setting Syntax**

```javascript
flexcrossaxiswrapalign::= 'start' | 'end' | 'center' | 'spacebetween' | 'spacearound' | 'spaceevenly'
```
- **`"start"`** — Cross Axis 시작 위치에 맞추어 배치됩니다.
- **`"end"`** — Cross Axis 끝 위치에 맞추어 배치됩니다.
- **`"center"`** — Cross Axis 가운데 위치에 맞추어 배치됩니다.
- **`"spacebetween"`** — Cross Axis 시작 위치와 끝 위치에 컴포넌트를 배치하고 나머지 컴포넌트는 컴포넌트 간 간격이 같도록 배치합니다.
- **`"spacearound"`** — Cross Axis를 기준으로 컴포넌트의 위, 아래 또는 왼쪽, 오른쪽에 같은 크기의 여백을 가지도록 컴포넌트를 배치합니다. 시작 위치와 첫 번째 컴포넌트 사이의 간격, 마지막 컴포넌트와 끝 위치 사이의 간격은 각 컴포넌트 사이의 간격의 1/2 크기로 배치합니다.
- **`"spaceevenly"`** — Cross Axis를 기준으로 시작 위치와 첫 번째 컴포넌트 사이의 간격, 각 컴포넌트 사이의 간격, 마지막 컴포넌트와 끝 위치 사이의 간격이 같도록 컴포넌트를 배치합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- flexcrossaxiswrapalign 속성값을 설정하지 않으면 "start"로 설정됩니다.

- 줄바꿈 처리 시 각 행과 열의 영역 크기가 다를 수 있고 컴포넌트의 배치 위치에 영향을 미칩니다.

- spacing, verticalgap, horizontalgap 속성값에서 설정한 값을 제외한 여백을 기준으로 간격을 조정해 컴포넌트를 배치합니다. 여백이 없는 경우에는 동작하지 않습니다.


---

### flexmainaxisalign

> Form > Objects > Layout > Property > flexmainaxisalign

**Description**

Layout 컨테이너 내 Main Axis(type 속성값이 "horizontal"이면 수평축, type 속성값이 "vertical"이면 수직축)을 기준으로 컴포넌트의 배치 방식을 설정합니다.

**Syntax**

```javascript
Layout.flexmainaxisalign
```

**Setting Syntax**

```javascript
flexmainaxisalign::= 'start' | 'end' | 'center' | 'spacebetween' | 'spacearound' | 'spaceevenly'
```
- **`"start"`** — Main Axis 시작 위치에 맞추어 배치됩니다.
- **`"end"`** — Main Axis 끝 위치에 맞추어 배치됩니다.
- **`"center"`** — Main Axis 가운데 위치에 맞추어 배치됩니다.
- **`"spacebetween"`** — Main Axis 시작 위치와 끝 위치에 컴포넌트를 배치하고 나머지 컴포넌트는 컴포넌트 간 간격이 같도록 배치합니다.
- **`"spacearound"`** — Main Axis를 기준으로 컴포넌트의 위, 아래 또는 왼쪽, 오른쪽에 같은 크기의 여백을 가지도록 컴포넌트를 배치합니다. 시작 위치와 첫 번째 컴포넌트 사이의 간격, 마지막 컴포넌트와 끝 위치 사이의 간격은 각 컴포넌트 사이의 간격의 1/2 크기로 배치합니다.
- **`"spaceevenly"`** — Main Axis를 기준으로 시작 위치와 첫 번째 컴포넌트 사이의 간격, 각 컴포넌트 사이의 간격, 마지막 컴포넌트와 끝 위치 사이의 간격이 같도록 컴포넌트를 배치합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- flexmainaxisalign 속성값을 설정하지 않으면 "start"로 설정됩니다.

- spacing, verticalgap, horizontalgap 속성값에서 설정한 값을 제외한 여백을 기준으로 간격을 조정해 컴포넌트를 배치합니다. 여백이 없는 경우에는 동작하지 않습니다.


---

### flexwrap

> Form > Objects > Layout > Property > flexwrap

**Description**

컴포넌트가 배치되면서 Layout 컨테이너 영역을 넘어갈 때 줄바꿈 여부를 설정합니다.

**Syntax**

```javascript
Layout.flexwrap
```

**Setting Syntax**

```javascript
flexwrap::= 'nowrap' | 'wrap'
```
- **`"nowrap"`** — 자동으로 줄바꿈을 처리하지 않습니다.
- **`"wrap"`** — 자동으로 줄바꿈 처리합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- flexwrap 속성값을 설정하지 않으면 "nowrap"으로 설정됩니다.

- flexwrap 속성값을 "wrap"으로 설정한 경우 컴포넌트의 flexshrink 속성은 무시됩니다.


---

### height

> Form > Objects > Layout > Property > height

**Description**

Form 에 정의된 현재 Layout 의 높이를 설정하는 속성입니다.

**Syntax**

```javascript
Layout.height
```

**Setting Syntax**

```javascript
height ::= <nVal> ['px']
```
- **`<nVal>`** — 현재 Layout 의 높이를 pixel 단위의 숫자로 설정합니다.
0~12000 사이의 숫자만 설정할 수 있습니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.


---

### horizontalgap

> Form > Objects > Layout > Property > horizontalgap

**Description**

Layout 컨테이너 내 배치된 컴포넌트(또는 Cell)의 수평축 간격을 설정하는 속성입니다.

**Syntax**

```javascript
Layout.horizontalgap
```

**Setting Syntax**

```javascript
horizontalgap ::= <nGap>
```
- **`<nGap>`** — type 속성값에 따라 간격을 설정합니다.

- "horizontal", "vertical": 컴포넌트의 수평축 간격
- "table": Layout 컨테이너 내 가상의 Table Cell의 수평축 간격

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- horizontalgap 속성값을 설정하지 않으면 undefined로 설정되고, 0px 값으로 동작합니다.

- 음수값으로 허용하지 않으며 유효하지 않은 값은 0px 값으로 동작합니다.

- 개별 컴포넌트(또는 Cell) 간의 간격은 설정할 수 없습니다.


---

### initvalueid

> Form > Objects > Layout > Property > initvalueid

**Description**

Layout 에 적용될 InitValue 의 ID 를 설정하는 속성입니다.

**Syntax**

```javascript
Layout.initvalueid[= strValueID]
```

**Setting Syntax**

- **`strValueID`** — InitValueDefinition 영역에 정의된 InitValue 파일에서 Layout 에 적용할 항목의 ID 를 문자열로 설정합니다.

**Remark**

- Layout 가 화면에 표시된 후에는 속성값을 설정하거나 변경 할 수 없습니다.
   Layout 를 동적으로 생성 시 show() 메소드 실행 전에 속성값을 설정하여야 합니다.

- Screen 별로 Environment 의 initvaluefileid 속성을 각각 설정하면 Screen 에 따라 다른 초기값을 설정할 수 있습니다.

- InitValueDefinition 영역에 한 개 이상의 InitValue 파일을 정의할 수 있고,
   InitValue 파일에는 컴포넌트별로 여러개의 초기값 정의를 할 수 있습니다.


---

### mobileorientation

> Form > Objects > Layout > Property > mobileorientation

**Description**

모바일 환경에서 LayOut 이 표시될 디바이스의 방향값을 설정하는 속성입니다.

**Syntax**

```javascript
Layout.mobileorientation
```

**Setting Syntax**

```javascript
mobileorientation  ::= 'portrait' | 'landscape'
```
- **`"portrait"`** — 디바이스의 방향이 "Portrait" 일 때 현재 LayOut 이 표시됩니다.
- **`"landscape"`** — 디바이스의 방향이 "Landscape" 일 때 현재 LayOut 이 표시됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- 모바일 환경일 때만 지원되는 속성이며, "Desktop" 환경에서는 속성값에 관계없이 LayOut 이 표시됩니다.

- 모바일 환경에서 디바이스 방향과 일치하는 설정이 없을 경우 "default" LayOut 이 표시됩니다.


---

### name

> Form > Objects > Layout > Property > name

**Description**

Layout 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
Layout.name
```

**Setting Syntax**

- **`name`** — Layout 을 구별할 수 있는 유일값을 설정합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- Form 에는 "default" 로 이름이 설정된 Layout 이 반드시 존재하여야 합니다.


---

### screenid

> Form > Objects > Layout > Property > screenid

**Description**

Layout 이 적용될 Screen 의 ID 를 설정하는 속성입니다.

**Syntax**

```javascript
Layout.screenid
```

**Setting Syntax**

- **`screenid`** — ScreenDefinition 영역에 정의된 Screen 의 ID 를 콤마(",")로 구분하여 여러개 설정할 수 있습니다.

값을 설정하지 않으면 모든 Screen 에 Layout 이 적용됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- ScreenDefinition 영역에 정의되지 않은 Screen 의 ID 설정 시 무시됩니다.

- 선택된 Screen 에 해당하는 Layout 이 존재하지 않을 경우 screenid 속성값에 관계없이 Default Layout 이 표시될 수 있습니다.


---

### spacing

> Form > Objects > Layout > Property > spacing

**Description**

Layout 컨테이너와 컴포넌트 간 여백을 설정하는 속성입니다.

**Syntax**

```javascript
Layout.spacing
```

**Setting Syntax**

```javascript
spacing ::= <nVal>'px'{4}

1회 입력: top/right/bottom/left 에 모두 적용됩니다.
2회 입력: top/bottom, right/left 에 첫 번째 값부터 각각 적용됩니다.
3회 입력: top, right/left, bottom 에 첫 번째 값부터 각각 적용됩니다.
4회 입력: top, right, bottom, left 에 첫 번째 값부터 각각 적용됩니다.
```
- **`<nVal>`** — 여백의 너비를 pixel 단위 숫자로 설정합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- spacing 속성값을 설정하지 않으면 undefined로 설정되고, "0px" 값으로 동작합니다.

- 음수값으로 허용하지 않으며 유효하지 않은 값은 "0px" 값으로 동작합니다.

- Layout에 배치되는 컴포넌트의 개수가 특정 범위를 넘어서면 아래의 조건 중 하나를 만족할 때 spacing 속성값과 실제 여백 너비가 달라질 수 있습니다.
    - flexmainaxisalign 속성값을 "center", "spacearound", "spaceevenly" 중 하나로 설정
    - flexcrossaxisalign, flexcrossaxiswrapalign 속성값을 "center", "spacearound", "spaceevenly" 중 하나로 설정


---

### stepcount

> Form > Objects > Layout > Property > stepcount

**Description**

Layout 의 화면이 분할되는 갯수를 설정하는 속성입니다.

**Syntax**

```javascript
Layout.stepcount
```

**Setting Syntax**

- **`stepcount`** — Layout 의 화면이 분할되는 갯수를 숫자로 설정합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- stepcount 속성값 만큼 현재 Layout 을 분할하여 사용할 수 있습니다.
  Layout 의 크기는 변경되지 않고, 동일 화면에서 Layout 의 갯수만 증가됩니다.

- Layout 화면이 분할되면 실행 시 StepControl 이 표시되며 가로 방향으로 이동할 수 있습니다.

- 컴포넌트의 positionstep 속성을 사용하여 특정 분할화면에만 컴포넌트를 표시하거나 전체 분할화면에 컴포넌트를 표시할 수 있습니다.

- 설정된 stepcount 속성값은 화면이 표시될 때 StepControl 의 stepcount 속성값에 반영됩니다.


---

### stepindex

> Form > Objects > Layout > Property > stepindex

**Description**

Layout 에 분할된 화면 중 표시할 화면의 인덱스를 설정하는 속성입니다.

**Syntax**

```javascript
Layout.stepindex
```

**Setting Syntax**

- **`stepindex`** — 표시할 화면의 인덱스를 숫자로 설정합니다.

인덱스는 "0" 부터 시작하며 "stepcount속성값 - 1"까지 설정할 수 있습니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.

- Form 로딩 시 stepindex 속성에 설정된 인덱스에 해당하는 분할화면이 표시됩니다.

- 컴포넌트의 positionstep 속성을 사용하여 특정 분할화면에만 컴포넌트를 표시하거나 전체 분할화면에 컴포넌트를 표시할 수 있습니다.

- 설정된 stepindex 속성값은 화면이 표시될 때 StepControl 의 stepindex 속성값에 반영됩니다.


---

### tablecellalign

> Form > Objects > Layout > Property > tablecellalign

**Description**

Layout 컨테이너 내 가상의 Table Cell의 배치 방식을 설정합니다.

**Syntax**

```javascript
Layout.tablecellalign
```

**Setting Syntax**

```javascript
tablecellalign ::= <horizontal-tablecellalign> <vertical-tablecellalign>

<horizontal-tablecellalign> ::= <tablecellalign>

<vertical-tablecellalign> ::= <tablecellalign>

<tablecellalign> ::= 'start' | 'end' | 'center' | 'spacebetween' | 'spacearound' | 'spaceevenly'
```
- **`<horizontal-tablecellalign>`** — 수평 방향 배치 기준을 설정합니다.
- **`<vertical-tablecellalign>`** — 수직 방향 배치 기준을 설정합니다.
- **`<tablecellalign>`** — 배치 기준을 설정합니다.
- "start": Layout 컨테이너 내 수평축 또는 수직축 시작 위치에 맞추어 배치됩니다.
- "end": Layout 컨테이너 내 수평축 또는 수직축 끝 위치에 맞추어 배치됩니다.
- "center": Layout 컨테이너 내 수평축 또는 수직축 가운데 위치에 맞추어 배치됩니다.
- "spacebetween": Layout 컨테이너 내 수평축 또는 수직축 시작 위치와 끝 위치에 Cell을 배치하고 나머지 Cell은 Cell 간 간격이 같도록 배치합니다.
- "spacearound": Layout 컨테이너 내 수평축 또는 수직축을 기준으로 Cell의 위, 아래 또는 왼쪽, 오른쪽에 같은 크기의 여백을 가지도록 Cell을 배치합니다. 
   시작 위치와 첫 번째 Cell 사이의 간격, 마지막 Cell과 끝 위치 사이의 간격은 각 Cell 사이의 간격의 1/2 크기로 배치합니다.
- "spaceevenly": Layout 컨테이너 내 수평축 또는 수직축을 기준으로 시작 위치와 첫 번째 Cell 사이의 간격, 각 Cell 사이의 간격, 마지막 Cell과 끝 위치 사이의 간격이 같도록 Cell을 배치합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.


---

### tablecellincompalign

> Form > Objects > Layout > Property > tablecellincompalign

**Description**

Layout 컨테이너 내 가상의 Table Cell 영역 내에서 컴포넌트의 배치 방식을 설정합니다.

**Syntax**

```javascript
Layout.tablecellincompalign
```

**Setting Syntax**

```javascript
tablecellincompalign ::= <horizontal-tablecellincompalign> <vertical-tablecellincompalign>
<horizontal-tablecellincompalign> ::= <tablecellincompalign>
<vertical-tablecellincompalign> ::= <tablecellincompalign>
<tablecellincompalign> ::= 'start' | 'end' | 'center'
```
- **`<horizontal-tablecellincompalign>`** — 컴포넌트의 수평 방향 배치 기준을 설정합니다.
- **`<vertical-tablecellincompalign>`** — 컴포넌트의 수직 방향 배치 기준을 설정합니다.
- **`<tablecellincompalign>`** — 배치 기준을 설정합니다.
- "start": Cell 영역 내 수평축 또는 수직축 시작 위치에 맞추어 배치됩니다.
- "center": Cell 영역 내 수평축 또는 수직축 가운데 위치에 맞추어 배치됩니다.
- "end": Cell 영역 내 수평축 또는 수직축 끝 위치에 맞추어 배치됩니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- 하나의 Cell 영역 내 2개 이상의 컴포넌트가 배치된 경우 겹쳐진 상태로 배치됩니다.

- tabletemplatearea 속성에서 2개 이상의 Cell을 같은 이름으로 설정하고 해당 영역에 컴포넌트를 배치한 경우 같은 이름으로 묶은 Cell 영역 기준으로 배치됩니다.


---

### tabledirection

> Form > Objects > Layout > Property > tabledirection

**Description**

Layout 컨테이너 내 가상의 Table Cell에 컴포넌트가 자동으로 배치되는 방향을 설정하는 속성입니다.

**Syntax**

```javascript
Layout.tabledirection
```

**Setting Syntax**

```javascript
tabledirection ::= 'horizontal' | 'vertical'
```
- **`"horizontal"`** — 컴포넌트를 배치할 Cell을 수평 방향으로 탐색합니다.
- **`"vertical"`** — 컴포넌트를 배치할 Cell을 수직 방향으로 탐색합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- tabledirection 속성값을 설정하지 않으면 "horizontal"으로 설정됩니다.

- 컴포넌트가 배치된 Cell은 탐색 대상에서 제외합니다.


---

### tabletemplate

> Form > Objects > Layout > Property > tabletemplate

**Description**

Layout 컨테이너 내 가상의 Table Cell을 설정합니다.

**Syntax**

```javascript
Layout.tabletemplate
```

**Setting Syntax**

```javascript
tabletemplate ::= <rowtemplate> '/' <columntemplate>

 <rowtemplate> ::= <nVal>'px'|'%'|'*' {n}
 <columntemplate> ::= <nVal>'px'|'%'|'*' {n}
```
- **`<rowtemplate>`** — 생성할 Row 개수만큼 정보를 공백문자로 구분해 설정합니다.
- **`<columntemplate>`** — 생성할 Column 개수만큼 정보를 공백문자로 구분해 설정합니다.
- **`<nVal>`** — Cell이 차지할 크기를 설정합니다.

- px: 설정된 크기
- %: 컨테이너 크기 기준으로 설정된 비율만큼의 크기
- *: 0보다 큰 실수로 설정하며 컨테이너 크기에서 고정된 크기("px" 또는 "%"로 설정한 값, spacing, verticalgap, horizontalgap 속성값에서 설정한 값)을 제외한 크기를 기준으로 비율을 계산한 크기

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.
  속성값을 직접 수정할 수는 없지만 Form 오브젝트의 setFluidLayoutProperty 메소드를 사용해 속성값을 수정할 수 있습니다.
  (setFluidLayoutProperty 메소드 사용 시 일부 제약이 있습니다).

- tabletemplate 속성값을 설정하지 않으면 "1* / 1*"로 설정됩니다.

- Cell은 서로 겹치지 않습니다. Cell에 배치된 컴포넌트의 크기가 Cell보다 큰 경우 Cell 영역을 벗어날 수 있습니다.


---

### tabletemplatearea

> Form > Objects > Layout > Property > tabletemplatearea

**Description**

Layout 컨테이너 내 가상의 Table Cell의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
Layout.tabletemplatearea
```

**Setting Syntax**

```javascript
tabletemplatearea ::= '"'<strArea> {n}'"' {n}
```
- **`<strArea>`** — Cell 이름을 설정합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- tabletemplate 속성에서 설정한 Row, Column 개수만큼 설정합니다. 개수가 맞지 않은 경우 유효하지 않은 값으로 처리합니다.

- Cell 이름을 지정하지 않은 경우에는 "."로 미사용 Cell 영역을 표시합니다.

- 여러 개의 Cell을 하나의 이름으로 설정해 묶을 수 있습니다. 
  - 이때 묶여지는 Cell은 연속적이어야 하고 사각형 형태로 묶여야 합니다.
    예를 들어 3*2 형태로 tabletemplate 속성을 설정한 경우 Column 별로 이름을 설정한다면 아래와 같이 설정할 수 있습니다.
      "LEFT BODY RIGHT" "LEFT BODY RIGHT"
  - 여러 개의 Cell을 하나의 이름으로 설정한 후 같은 이름으로 다른 쪽에 있는 여러 개의 Cell을 설정할 수는 없습니다.
    아래와 같은 경우 첫 번째 Column과 세 번째 컬럼의 이름("SIDE")이 같아서 둘 다 유효하지 않은 값으로 처리합니다.
      "SIDE BODY SIDE" "SIDE BODY SIDE"


---

### type

> Form > Objects > Layout > Property > type

**Description**

Layout 컨테이너 내 컴포넌트 배치 기준을 설정하는 속성입니다.

**Syntax**

```javascript
Layout.type
```

**Setting Syntax**

```javascript
type ::= 'default' | 'horizontal' | 'vertical' | 'table'
```
- **`"default"`** — 컴포넌트의 좌표 속성값을 기준으로 배치합니다.
- **`"horizontal"`** — 컴포넌트를 수평 방향으로 배치합니다.
- **`"vertical"`** — 컴포넌트를 수직 방향으로 배치합니다.
- **`"table"`** — 컴포넌트를 Layout 컨테이너 내 가상의 Table Cell에 배치합니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- type 속성값을 설정하지 않으면 "default"로 설정됩니다.

- PopupMenu, PopupDiv 컴포넌트는 type 속성과 상관없이 동작합니다.
  예를 들어 type 속성값을 “table”로 설정한 경우 배치된 컴포넌트의 크기를 %로 설정한 경우 Layout 컨테이너 내 가상의 Table Cell 크기를 기준으로 크기가 조정되지만 PopupMenu, PopupDiv 컴포넌트는 부모 Form 오브젝트 기준으로 크기가 조정됩니다.

- 선택한 속성값에 따라 편집할 수 있는 속성이 달라집니다.

- type 속성값을 "horizontal", "vertical", "table"으로 설정 시
    - Layout 내 배치된 컴포넌트의 left, top, right, bottom 속성값(Position Base 포함)은 무시됩니다.
    - stepcount 속성값을 설정해 화면 분할 기능을 사용할 수 없습니다.


---

### verticalgap

> Form > Objects > Layout > Property > verticalgap

**Description**

Layout 컨테이너 내 배치된 컴포넌트(또는 Cell)의 수직축 간격을 설정하는 속성입니다.

**Syntax**

```javascript
Layout.verticalgap
```

**Setting Syntax**

```javascript
verticalgap ::= <nGap>
```
- **`<nGap>`** — type 속성값에 따라 간격을 설정합니다.

- "horizontal", "vertical": 컴포넌트의 수직축 간격
- "table": Layout 컨테이너 내 가상의 Table Cell의 수직축 간격

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행 중에는 수정할 수 없는 속성입니다.

- verticalgap 속성값을 설정하지 않으면 undefined로 설정되고, 0px 값으로 동작합니다.

- 음수값으로 허용하지 않으며 유효하지 않은 값은 0px 값으로 동작합니다.

- 개별 컴포넌트(또는 Cell) 간의 간격은 설정할 수 없습니다.


---

### width

> Form > Objects > Layout > Property > width

**Description**

Form 에 정의된 현재 Layout 의 너비를 설정하는 속성입니다.

**Syntax**

```javascript
Layout.width
```

**Setting Syntax**

```javascript
width ::= <nVal> ['px']
```
- **`<nVal>`** — 현재 Layout 의 너비를 pixel 단위의 숫자로 설정합니다.
0~12000 사이의 숫자만 설정할 수 있습니다.

**Remark**

- 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없는 속성입니다.


---

## Form > StepControl

### StepControl

> Form > Objects > StepControl

**Description**

Form 에서 화면분할 기능을 사용할 때 Form 에 표시되는 Step Control 입니다.

**Remark**

- Layout 오브젝트의 stepcount 속성값을 2 이상 설정 시 Form 에 자동 표시됩니다.

- Form 의 getStepCount(), setStepIndex() 메소드를 사용하여 분할된 화면을 이동하거나 속성값을 얻을 수 있습니다.

**Property**

| Name | Description |
| --- | --- |
| background | StepControl 의 배경 영역을 설정하는 속성입니다. |
| border-radius | StepControl 의 모서리 모양을 설정하는 속성입니다. |
| color | StepControl 에 표시되는 텍스트의 색상을 설정하는 속성입니다. |
| cursor | StepControl 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다. |
| -nexa-border | StepControl 의 테두리를 설정하는 속성입니다. |
| -nexa-edge | StepControl 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다. |
| -nexa-padding | StepControl 영역의 안쪽 여백을 설정하는 속성입니다. |
| opacity | StepControl 영역의 투명도를 설정하는 속성입니다. |

**Status**

컴포넌트가 비활성화된 상태

**Control**

| Name | TypeName |
| --- | --- |
| stepitem | nexacro.Button |


---

### 속성 (Properties)

### -nexa-border

> Form > Objects > StepControl > Property > -nexa-border

**Description**

StepControl 의 테두리를 설정하는 속성입니다.

**Syntax**

```javascript
StepControl.-nexa-border
```

**Setting Syntax**

```javascript
-nexa-border ::= <line-width> <line-style> <color> [,<line-width> <line-style> <color>]{3}

<line-width> ::= 'thin' | 'medium' | 'thick' | <nWidth> 'px'
<line-style> ::= 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'
<color> ::= <NamedColor> | <NumericColor>

1회 입력 : top/right/bottom/left 에 모두 적용됩니다.
2회 입력 : top/bottom, right/left 에 첫번째 값부터 각각 적용됩니다.
3회 입력 : top, right/left, bottom 에 첫번째 값부터 각각 적용됩니다.
4회 입력 : top, right, bottom, left 에 첫번째 값부터 각각 적용됩니다.

* 2회~4회 입력은 border-radius 속성값이 설정되지 않은 경우만 적용됩니다.
```
```javascript
* XCSS
-nexa-border : 1px solid #999999;
-nexa-border : 1px solid #999999, 1px solid #999999, 1px solid #999999, 1px solid #999999;
```
- **`<line-width>`** — 테두리 선의 두께를 설정합니다.

"thin" 설정 시 1 pixel 두께로 테두리가 표시됩니다.
"medium" 설정 시 3 pixel 두께로 테두리가 표시됩니다.
"thick" 설정 시  5 pixel 두께로 테두리가 표시됩니다.

<nWidth> 설정 시 <nWidth> pixel 두께로 테두리가 표시됩니다.
- **`<nWidth>`** — 테두리 선의 두께를 pixel 단위로 설정합니다.
"px" 단위는 생략할 수 없습니다.
- **`<line-style>`** — 테두리 선의 스타일을 설정합니다.

"none" 설정 시 테두리가 표시되지 않습니다.
"hidden" 설정 시 테두리가 표시되지 않습니다.
"dotted" 설정 시 테두리가 점선으로 표시됩니다.
"dashed" 설정 시 테두리가 긴 점선으로 표시됩니다.
"solid" 설정 시 테두리가 실선으로 표시됩니다.
"double" 설정 시 테두리가 두줄로 표시됩니다.
"groove" 설정 시 테두리가 들어간 것처럼 보이게 입체적으로 표시됩니다.
"ridge" 설정 시 테두리가 올라온 것처럼 보이게 입체적으로 표시됩니다.
"inset" 설정 시 컴포넌트가 들어간 것처럼 보이게 테두리가 입체적으로 표시됩니다.
"outset" 설정 시 컴포넌트가 올라온 것처럼 보이게 테두리가 입체적으로 표시됩니다.
- **`<color>`** — 테두리 색상을 색상이름 또는 색상코드로 설정합니다.
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- -nexa-border 속성값을 설정하지 않으면 undefined 가 설정되고, "medium none #999999" 로 동작합니다.

- <line-style> 이 "double" 일 때 두 줄을 다른 색으로 설정할 수 없습니다.
   <color> 에 설정된 색이 두 줄에 모두 적용됩니다.


◆ Nexacro Runtime Environment 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 top > right > bottom > left 순으로 겹쳐서 표시됩니다.

- <line-style> 파라미터에 "double","groove","ridge","inset","outset" 값을 설정해도 적용되지 않습니다.

- <line-width> 파라미터에 "thin","medium","thick" 값을 설정해도 적용되지 않습니다.


◆ Web Runtime Environment 제약

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 웹브라우저에 따라 테두리가 겹쳐지는 순서가 다르게 처리될 수 있습니다.

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있으면 
   두께는 각 테두리 별로 따로 적용되고, 색상은 top 에 설정된 색이 적용됩니다.

- 각 테두리의 색상이나 두께를 다르게 설정했을 경우 border-radius 속성값이 설정되어 있어도
   일부 브라우저는 각 테두리의 색상이나 두께가 각각 적용됩니다.


---

### -nexa-edge

> Form > Objects > StepControl > Property > -nexa-edge

**Description**

StepControl 의 테두리(Border) 안쪽에 표시될 Edge 이미지를 설정하는 속성입니다.

**Syntax**

```javascript
StepControl.-nexa-edge
```

**Setting Syntax**

```javascript
-nexa-edge ::= 'none' | <image> [<fixedwidth>'px' <fixedheight>'px']

<image> ::= 'URL("' <Theme-Image> | <Web-Image> '")'
```
```javascript
* XCSS
-nexa-edge : URL("./images/border.png") 5px 5px;
```
- **`"none"`** — edge 이미지를 설정하지 않습니다.
- **`<image>`** — 'URL ("[이미지위치]")' 형식으로 테마 또는 웹의 이미지를 설정합니다.

테두리(border) 안쪽에 edge 형태로 이미지가 표시됩니다.
- **`<Theme-Image>`** — 테마에 선언된 이미지를 "theme://images\이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/파일명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<fixedwidth>`** — 이미지가 고정되어 표시될 왼쪽/오른쪽 영역의 크기를 pixel 단위로 설정합니다.
"0px" 설정 시 왼쪽/오른쪽 영역을 고정하지 않습니다.

값을 설정하지 않으면 "0px" 로 적용됩니다.
- **`<fixedheight>`** — 이미지가 고정되어 표시될 위쪽/아래쪽 영역의 크기를 pixel 단위로 설정합니다.
"0px" 설정 시 위쪽/아래쪽 영역을 고정하지 않습니다.

값을 설정하지 않으면 "0px" 로 적용됩니다.

**Remark**

- -nexa-edge 속성값을 설정하지 않으면 undefined 가 설정되고, "none" 으로 동작합니다.

- StepControl 내부에 테두리 형태로 이미지를 표시하고자 할 때 사용하는 속성입니다.

- -nexa-edge 속성값을 설정하면 이미지의 상/하/좌/우 일정 영역(<fixedwidth>,<fixedheight> 값)을 고정하고 안쪽 사각형 영역을 Stretch 하여 처리합니다.

- background 속성에 의해 배경색 또는 이미지가 설정되어 있어도 -nexa-edge 속성에 설정된 이미지가 제일 위에 표시됩니다.


◆ web runtime environment 제약

- <fixedwidth>,<fixedheight> 값이 이미지사이즈의 1/2을 초과할 경우 브라우저별로 보이는 형태가 다를 수 있습니다.

- CSS3 스펙을 지원하지 않는 브라우저 버전에서는 정상적으로 표시되지 않을 수 있습니다.


---

### -nexa-padding

> Form > Objects > StepControl > Property > -nexa-padding

**Description**

StepControl 영역의 안쪽 여백을 설정하는 속성입니다.

**Syntax**

```javascript
StepControl.-nexa-padding
```

**Setting Syntax**

```javascript
-nexa-padding ::= <npadding>'px'{4}
```
```javascript
* XCSS
-nexa-padding : 5px 5px 5px 5px;
```
- **`<npadding>`** — StepControl 영역의 안쪽 여백을 pixel 단위로 설정합니다.

값을 1회 입력 시 top/right/bottom/left 에 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top/bottom, right/left 에 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top, right/left, bottom 에 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top, right, bottom, left 에 첫번째 값부터 각각 적용됩니다.

"px" 단위를 생략할 수 없습니다.

**Remark**

- -nexa-padding 속성값을 설정하지 않으면 undefined 가 설정되고, "0px" 로 동작합니다.

- -nexa-padding 속성은 컴포넌트에 표시되는 아이콘과 텍스트의 영역에 적용됩니다.

- StepControl 의 너비보다 표시되는 컨텐츠의 너비가 길면 "right" 방향의 padding 값이 무시됩니다.

- Div 와 같이 자식을 갖을 수 있는 컴포넌트에서 -nexa-padding 속성은 자식 컴포넌트의 위치에 영향을 주지 않습니다.


---

### background

> Form > Objects > StepControl > Property > background

**Description**

StepControl 의 배경 영역을 설정하는 속성입니다.

**Syntax**

```javascript
StepControl.background
```

**Setting Syntax**

```javascript
strBackground ::= [<bg-image> | <linear-gradient>] [<background-origin> [<background-clip>]] [<background-color>]

<bg-image> ::= 'none' | <imageurl> [<repeat-style>] [<position>]
   <imageurl> ::= 'URL(' <Theme-Image> | <Web-Image> ')'
   <repeat-style> ::= 'repeat-x' | 'repeat-y' | 'repeat' | 'no-repeat'
   <position> ::= <horizontal-position> <vertical-position> ['/' <background-size>]
      <horizontal-position> ::= 'left' | 'center' | 'right' | <pos-percentage> '%'
      <vertical-position> ::= 'top' | 'center' | 'bottom' | <pos-percentage> '%'
      <background-size> ::= 'auto' | 'cover' | 'contain' | (<length> 'px' | <percentage> '%') {1,2}

<linear-gradient> ::= 'linear-gradient(' [<angle> , ] <color-stop> ')'
   <angle> ::= 'to left' | 'to right' | 'to top' | 'to bottom' | 'to left top' | 'to left bottom' | 'to right top' | 'to right bottom'
   <color-stop> ::= <startcolor-stop> [<listcolor-stop>] <endcolor-stop>
      <startcolor-stop> ::= <color> [<percentage>'%']
      <endcolor-stop> ::= <color> [<percentage>'%']
      <listcolor-stop> ::= <color> [<percentage>'%"] [,<listcolor-stop>]*
         <color> ::= <NamedColor> | <NumericColor>

<background-origin> ::= 'border-box' | 'padding-box'
<background-clip> ::= 'border-box' | 'padding-box'
<background-color> ::= <NamedColor> | <NumericColor>
```
```javascript
* XCSS
background : #ffffaa;
background : url('./images/smiley.gif') no-repeat center center #ffffaa;
background : url('./images/smiley.gif') no-repeat center center /auto #ffffaa;
background : url('./images/smiley.gif') no-repeat center center /15px 15% #ffffaa;
background : linear-gradient( red , blue , yellow );
background : linear-gradient( #FF0000 , rgb(0,0,255) , rgb(255,255,0));
background : url('./images/smiley.gif') border-box border-box #ffffaa;
```
- **`<bg-image>`** — 배경에 표시될 이미지를 "'none' | <imageurl> [<repeat-style>] [<position>]" 형식으로 설정합니다.

<background-color> 값이 설정되어 있으면 배경색 위로 이미지가 표시됩니다.

"none" 으로 설정하면 이미지를 설정하지 않습니다.
<imageurl> 값으로 이미지를 설정할 수 있습니다.
<repeat-style> 값으로 이미지의 반복표시 방향을 설정할 수 있습니다.
<position> 값으로 이미지의 표시위치를 설정할 수 있습니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<imageurl>`** — 배경에 표시될 이미지를 "'URL(' <Theme-Image> | <Web-Image> ')'" 형식으로 설정합니다.

"URL ( [이미지경로] )" 형식으로 테마 또는 웹의 이미지를 설정합니다.
- **`<Theme-Image>`** — 테마에 선언된 이미지를 "theme://images\이미지명" 형식으로 설정합니다.

테마에 해당 이미지가 등록되어 있어야 합니다.
- **`<Web-Image>`** — 웹의 이미지를 "http://경로/이미지명", "https://경로/파일명" 형식으로 설정합니다.

웹에 접근 가능한 환경이어야 합니다.
- **`<repeat-style>`** — 배경에 표시될 이미지의 반복표시 방향을 설정합니다.

"repeat-x" 설정 시 이미지가 가로 방향으로 반복표시 됩니다.
"repeat-y" 설정 시 이미지가 세로 방향으로 반복표시 됩니다.
"repeat" 설정 시 이미지가 가로,세로 방향으로 모두 반복표시 됩니다.
"no-repeat" 설정 시 이미지가 반복표시 되지 않습니다.

값을 설정하지 않으면 "repeat" 로 적용됩니다.
- **`<horizontal-position>`** — 배경에 표시될 이미지의 가로 위치를 설정합니다.

"left" 설정 시 StepControl 의 왼쪽면과 이미지의 왼쪽면이 정렬되어 표시됩니다.
"center" 설정 시 StepControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"right" 설정 시 StepControl 의 오른쪽면과 이미지의 오른쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<vertical-position> 값을 설정하고, <horizontal-position> 값을 설정하지 않으면 <horizontal-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <horizontal-position> 은 "left" 로 적용됩니다.
- **`<vertical-position>`** — 배경에 표시될 이미지의 세로 위치를 설정합니다.

"top" 설정 시 StepControl 의 윗쪽면과 이미지의 윗쪽면이 정렬되어 표시됩니다.
"center" 설정 시 StepControl 의 중앙과 이미지의 중앙이 정렬되어 표시됩니다.
"bottom" 설정 시 StepControl 의 아랫쪽면과 이미지의 아랫쪽면이 정렬되어 표시됩니다.
<pos-percentage> '%' 형식으로 설정 시 이미지의 위치가 비율로 설정됩니다.

<horizontal-position> 값을 설정하고, <vertical-position> 값을 설정하지 않으면 <vertical-position> 은 "center" 로 적용됩니다.
<vertical-position> 값과 <horizontal-position> 값을 모두 설정하지 않으면 <vertical-position> 은 "top" 으로 적용됩니다.
- **`<pos-percentage>`** — 배경에 표시될 이미지의 가로/세로 위치를 비율로 설정합니다.

<horizontal-position> 에 "0%" 설정 시 "left" 와 같은 위치로 적용됩니다.
<horizontal-position> 에 "50%" 설정 시 "center" 와 같은 위치로 적용됩니다.
<horizontal-position> 에 "100%" 설정 시 "right" 과 같은 위치로 적용됩니다.
<vertical-position> 에 "0%" 설정 시 "top" 와 같은 위치로 적용됩니다.
<vertical-position> 에 "50%" 설정 시 "center" 와 같은 위치로 적용됩니다.
<vertical-position> 에 "100%" 설정 시 "bottom" 과 같은 위치로 적용됩니다.

0 보다 작거나 100 보다 큰 값을 설정 시 StepControl 의 영역을 벗어난 가상의 위치로 적용됩니다.

값 설정 시 "%" 단위를 생략할 수 없습니다.
- **`<background-size>`** — 배경에 표시될 이미지의 크기를 설정합니다.
- auto: 원본 이미지 크기를 유지합니다.
- cover: 이미지 비율을 유지하는 한도 내에서 배경에 빈 공간이 없도록 가장 크게 설정합니다.
  width 또는 height 길이가 긴 쪽은 잘려서 표시될 수 있습니다.
- contain: 이미지가 잘리지 않고 비율을 유지하는 한도 내에서 가장 크게 설정합니다.
- <length> | <percentage>: 이미지의 width, height 크기 또는 컴포넌트 대비 비율을 설정합니다. 
  width 값만 설정하면 원본 이미지 비율에 따라 height 크기를 자동으로 처리합니다.
  height 값만 설정할 수는 없습니다. 
  음수값은 설정할 수 없습니다.
- **`<linear-gradient>`** — 배경에 표시될 그라데이션을 "'linear-gradient(' [<angle> , ] <color-stop> ')'" 형식으로 설정합니다.

<background-color> 값이 설정되어 있으면 배경색 위로 그라데이션이 표시됩니다.

"linear-gradient ( [방향, 색상값, 색상값, ...] )" 형식으로 그라데이션 방향과 색상을 설정할 수 있습니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<angle>`** — 그라데이션의 표시 방향을 설정합니다.

"to left" 설정 시 오른쪽에서 왼쪽 방향으로 그라데이션이 표시됩니다.
"to right" 설정 시 왼쪽에서 오른쪽 방향으로 그라데이션이 표시됩니다.
"to top" 설정 시 아래쪽에서 윗쪽 방향으로 그라데이션이 표시됩니다.
"to bottom" 설정 시 윗쪽에서 아래쪽 방향으로 그라데이션이 표시됩니다.
"to left top" 설정 시 오른쪽 아래 방향에서 왼쪽 윗 방향으로 그라데이션이 표시됩니다.
"to left bottom" 설정 시 오른쪽 윗 뱡향에서 왼쪽 아래 방향으로 그라데이션이 표시됩니다.
"to right top" 설정 시 왼쪽 아래 방향에서 오른쪽 윗 방향으로 그라데이션이 표시됩니다.
"to right bottom" 설정 시 왼쪽 윗 방향에서 오른쪽 아래 방향으로 그라데이션이 표시됩니다.

값을 설정하지 않으면 "to bottom"으로 적용됩니다.
- **`<color-stop>`** — 그라데이션의 시작점, 끝점, 중간점의 색을 "<startcolor-stop> [<listcolor-stop>] <endcolor-stop>" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 시작점과 끝점의 위치가 결정됩니다.
예를 들어 <angle> 값이 "to left" 이면 StepControl 의 right 위치가 시작점이 되고, left 위치가 끝점이 됩니다.
              <angle> 값이 "to right" 이면 StepControl 의 left 위치가 시작점이 되고, right 위치가 끝점이 됩니다.

<listcolor-stop> 에 그라데이션 중간점의 색을 한개 이상 설정할 수 있으며 <percentage> 값 생략 시 균등하게 표시됩니다.
- **`<startcolor-stop>`** — 그라데이션의 시작점 색을 "<color> [<percentage>'%']" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 시작점 위치가 결정됩니다.
시작점의 <percentage> 값을 "0" 이상으로 설정 시 "시작점~설정값"까지 동일한 색상으로 표시됩니다.
- **`<endcolor-stop>`** — 그라데이션의 끝점 색을 "<color> [<percentage>'%']" 형식으로 설정합니다.

<angle> 값에 설정된 방향에 따라 끝점 위치가 결정됩니다.
끝점의 <percentage> 값을 "100" 이하로 설정 시 "설정값~끝점"까지 동일한 색상으로 표시됩니다.
- **`<listcolor-stop>`** — 그라데이션의 중간점 색을 "<color> [<percentage>'%"] [,<listcolor-stop>]*" 형식으로 설정합니다.

시작점과 끝점 사이에 적용될 중간색을 ","로 구분하여 여러개 설정할 수 있습니다.
뒤에 선언된 색의 <percentage> 값은 먼저 선언된 색의 <percentage> 값보다 커야 합니다.
- **`<color>`** — 그라데이션 색상을 색상이름 또는 색상코드로 설정합니다.
- **`<percentage>`** — <color> 에 해당하는 색이 적용될 위치를 비율값으로 설정합니다.

<angle> 값에 의해 결정된 시작점이 "0%" 로 적용됩니다.
<angle> 값에 의해 결정된 끝점이 "100%" 로 적용됩니다.

0 보다 작거나 100 보다 큰 값을 설정 시 StepControl 의 영역을 벗어난 가상의 위치로 적용됩니다.
예를 들어 "150%" 설정 시 시작점에서 끝점까지 거리의 반만큼 끝점에서 벗어난 위치에 <color> 값이 적용됩니다.

<percentage> 값을 생략하면 균등한 위치에 <color> 값이 적용됩니다.
값 설정 시 "%" 단위를 생략할 수 없습니다.
- **`<background-origin>`** — 배경으로 처리될 기준영역을 설정합니다.

"border-box" 설정 시 Border 를 포함한 영역이 배경영역으로 처리됩니다.

"padding-box" 설정 시 Border 의 안쪽 영역이 배경영역으로 처리됩니다.
"padding-box" 설정 시 그라데이션의 시작점, 끝점과 배경이미지의 반복 기준위치가 Border 안쪽 영역으로 처리됩니다.

값을 설정하지 않으면 "padding-box" 로 적용됩니다.
- **`<background-clip>`** — 배경이 실제로 표시될 영역을 설정합니다.

"border-box" 설정 시 Border 를 포함한 영역에 배경이 표시됩니다.
"padding-box" 설정 시 Border 의 안쪽 영역에 배경이 표시됩니다.

값을 설정하지 않으면 <background-origin> 에 설정한 값이 동일하게 적용됩니다.
<background-origin> 값도 설정하지 않았을 경우 "border-box" 로 적용됩니다.
- **`<background-color>`** — 배경에 표시될 색을 색상이름 또는 색상코드로 설정합니다.

<bg-image> 또는 <linear-gradient> 값이 설정되어 있다면 배경색은 배경이미지 또는 그라데이션 아래에 표시됩니다.
<bg-image> 에 적용된 이미지에 투명으로 적용된 부분이 있거나 이미지가 StepControl 영역보다 작다면 해당 영역에 배경색이 표시됩니다.

그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- background 속성값을 설정하지 않으면 undefined 가 설정되고, "transparent" 로 동작합니다.

- TypeDefinition 영역의 Services 에 정의된 사용자 Prefix 는 테마 또는 XCSS 에서 이미지경로로 사용할 수 없습니다.
   사용자 Prefix 는 스크립트 또는 넥사크로 스튜디오에서 속성값으로 설정 시 사용할 수 있습니다.

- 배경의 기준영역과 표시영역은 <background-origin>, <background-clip> 값으로 각각 설정합니다.

- 배경 이미지를 중앙에 위치시키려면 <position> 값을 "center" 또는 "center center" 로 설정하여야 합니다.

- 배경이미지와 배경색을 모두 설정하면 배경색 위에 이미지가 표시됩니다.
   그라데이션과 배경색을 모두 설정하면 배경색 위에 그라데이션이 표시됩니다.

- 그라데이션과 배경이미지를 동시에 설정할 수 없습니다.
   두 값을 동시에 설정 시 오동작이 발생할 수 있습니다.


---

### border-radius

> Form > Objects > StepControl > Property > border-radius

**Description**

StepControl 의 모서리 모양을 설정하는 속성입니다.

**Syntax**

```javascript
StepControl.border-radius
```

**Setting Syntax**

```javascript
border-radius ::= <horizontal-radius>{4} ['/' <vertical-radius>{4}]
```
```javascript
* XCSS
border-radius : 10px;
border-radius : 5px 6px 10px / 5px 10px;
```
- **`<horizontal-radius>`** — 모서리를 둥글게 표시하기 위한 가로크기를 설정합니다.

pixel 단위로 입력하며 스페이스를 구분자로 4개값까지 설정할 수 있습니다.

값을 1회 입력 시 top-left/top-right/bottom-right/bottom-left 모서리의 가로크기로 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top-left/bottom-right, top-right/bottom-left 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top-left, top-right/bottom-left, bottom-right 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top-left, top-right, bottom-right, bottom-left 모서리의 가로크기로 첫번째 값부터 각각 적용됩니다.
- **`<vertical-radius>`** — 모서리를 둥글게 표시하기 위한 세로크기를 설정합니다.

pixel 단위로 입력하며 스페이스를 구분자로 4개값까지 설정할 수 있습니다.

값을 1회 입력 시 top-left/top-right/bottom-right/bottom-left 모서리의 세로크기로 모두 동일한 값이 적용됩니다.
값을 2회 입력 시 top-left/bottom-right, top-right/bottom-left 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.
값을 3회 입력 시 top-left, top-right/bottom-left, bottom-right 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.
값을 4회 입력 시 top-left, top-right, bottom-right, bottom-left 모서리의 세로크기로 첫번째 값부터 각각 적용됩니다.

**Remark**

- border-radius 속성값을 설정하지 않으면 undefined 가 설정되고, "0px" 로 동작합니다. 

- <horizontal-radius> 와 <vertical-radius> 는 "/" 문자로 구분하여 입력합니다.

◆ NRE 제약

- border-radius 속성을 설정하면 모든 테두리가 같은 색으로 적용됩니다.
   -nexa-border 속성에서 top 에 적용된 색이 모든 테두리에 적용됩니다.


---

### color

> Form > Objects > StepControl > Property > color

**Description**

StepControl 에 표시되는 텍스트의 색상을 설정하는 속성입니다.

**Syntax**

```javascript
StepControl.color
```

**Setting Syntax**

```javascript
color ::= <NamedColor> | <NumericColor>
```
```javascript
* XCSS
color : #999999;
color : rgb ( 255, 0, 0 );
color : red;
```
- **`<NamedColor>`** — "red","blue" 와 같이 미리 정의된 색상이름을 문자열로 설정합니다.
- **`<NumericColor>`** — 표시할 색의 색상코드입니다.

"#" 기호로 시작하는 6자리 hexadecimal 값으로 색상코드를 설정할 수 있습니다. (ex-"#FF00FF")
red, green, blue 값을 인자로 하는 "rgb()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgb(255,0,255)")
red, green, blue, alpha 값을 인자로 하는 "rgba()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"rgba(255,0,255,0.3)")
hue, saturation, lightness 값을 인자로 하는 "hsl()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsl(120,50%,50%)")
hue, saturation, lightness, alpha 값을 인자로 하는 "hsla()" 메소드로 색상코드를 설정할 수 있습니다. (ex-"hsla(120,50%,50%,0.8)")

**Remark**

- color 속성값을 설정하지 않으면 undefined 가 설정되고, "#000000" 으로 동작합니다.


---

### cursor

> Form > Objects > StepControl > Property > cursor

**Description**

StepControl 영역에서 표시될 마우스 포인터의 종류를 설정하는 속성입니다.

**Syntax**

```javascript
StepControl.cursor
```

**Setting Syntax**

```javascript
cursor ::= 'none' | 'auto' | 'default' | 'copy' | 'crosshair' | 'help' | 'move' | 'not-allowed' | 'pointer' | 'progress' | 'text' | 'wait' | 'ew-resize' | 'e-resize' | 'w-resize' | 'ns-resize' | 'n-resize' | 's-resize' | 'nesw-resize' | 'ne-resize' | 'sw-resize' | 'nwse-resize' | 'nw-resize' | 'se-resize'
```
```javascript
* XCSS
cursor : default ;
```
- **`"none"`** — 마우스 포인터를 표시하지 않습니다.

* macOS NRE는 지원하지 않습니다.
- **`"auto"`** — 컴포넌트의 특성에 맞는 포인터가 표시됩니다.

Edit계열 컴포넌트는 "text" 포인터가 표시됩니다.
그외 계열 컴포넌트는 "arrow" 포인터가 표시됩니다.
- **`"default"`** — 시스템의 기본 포인터가 표시됩니다.

일반적으로 "arrow" 포인터가 표시됩니다.
- **`"copy"`** — 화살표와 작은 십자("+") 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"crosshair"`** — 십자("+") 모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"help"`** — 화살표와 작은 물음표 모양의 포인터가 표시됩니다.

* Safari 브라우저는 물음표 모양의 포인터가 표시됩니다.
* macOS NRE 는 지원하지 않습니다.
- **`"move"`** — 십자 화살표 모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"not-allowed"`** — 금지 표지판 모양의 포인터가 표시됩니다.

* Safari 브라우저는 화살표와 금지 표지판 모양의 포인터가 표시됩니다.
* macOS NRE 는 지원하지 않습니다.
- **`"pointer"`** — 손모양의 포인터가 표시됩니다.

* macOS NRE 는 지원하지 않습니다.
- **`"progress"`** — OS 또는 환경에 따라 다른 형태의 포인터가 표시됩니다.

원, 화살표와 모래시계, 화살표와 원 등 다양한 형태로 표시됩니다.

* macOS NRE 에서는 지원하지 않습니다.
- **`"text"`** — 아이("I") 모양의 포인터가 표시됩니다.
- **`"wait"`** — OS 또는 환경에 따라 다른 형태의 포인터가 표시됩니다.

원, 모래시계, 시계 등 다양한 형태로 표시됩니다.
- **`"ew-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"e-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"w-resize"`** — 수평으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"ns-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"n-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"s-resize"`** — 수직으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"nesw-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"ne-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"sw-resize"`** — 사선("/")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.
- **`"nwse-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS NRE는 지원하지 않습니다.
- **`"nw-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

* macOS 는 지원하지 않습니다.
- **`"se-resize"`** — 역사선("＼")으로 된 양쪽 화살표 모양의 포인터가 표시됩니다.

**Remark**

- cursor 속성값을 설정하지 않으면 undefined 가 설정되고 "auto" 로 동작합니다.

- disable 상태인 서브컨트롤이 있는 컴포넌트의 경우 마우스 포인터는 서브컨트롤 영역에서
   서브컨트롤의 disable status값이 적용되지 않고, 컴포넌트의 enable status 설정값이 적용됩니다.
   서브컨트롤과 컴포넌트가 모두 disable 상태일 때는 parent 의 enable status 설정값이 적용됩니다.


---

### opacity

> Form > Objects > StepControl > Property > opacity

**Description**

StepControl 영역의 투명도를 설정하는 속성입니다.

**Syntax**

```javascript
StepControl.opacity
```

**Setting Syntax**

```javascript
* XCSS
opacity : 0.8 ;
opacity : 80%;
```
- **`opacity`** — 0.0 ~ 1.0 사이의 값 또는 0.0% ~ 100.0% 사이의 값을 지정합니다.
0(또는 0%)을 설정하면 완전 투명, 1(또는 100%)을 설정하면 완전 불투명으로 처리됩니다.
1 이상의 값은 1로, 0 이하의 값은 0으로 처리됩니다. 마찬가지로 100% 이상의 값은 100%로, 0% 이하의 값은 0%로 처리됩니다.

XCSS는 숫자 또는 퍼센트 값으로만 설정할 수 있습니다.

**Remark**

- opacity 속성값을 설정하지 않으면 undefined 가 설정되고, 1 로 동작합니다.

- Div 와 같이 자식 컴포넌트를 가질 수 있는 컴포넌트에 opacity 속성을 적용하면 자식 컴포넌트도 함께 적용됩니다.

- 부모와 자식 컴포넌트에 각각 opacity 속성이 설정되어 있으면 자식 컴포넌트의 투명도는 부모의 투명도에 추가적으로 적용됩니다.
   예를 들어 부모의 opacity가 0.5 이고 자식의 opacity가 0.4 이면 결과적으로 자식 컴포넌트는 0.2 의 투명도가 적용됩니다.


---
