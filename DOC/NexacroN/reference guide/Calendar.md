# 20.Calendar

20.1개요

20.2속성

20.3메서드

20.4이벤트

```
Calendar 는 날짜와 시간을 입력 받기 위한 컴포넌트입니다.
```

## 20.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- 날짜와 시간의 화면출력보다 입력과 관련된 기능을 많이 제공합니다.

- 입력영역과 팝업달력 형식, 월단위 달력 형식, 입력영역과 스핀버튼 형식을 type 속성값을 사용하여 선택할 수 있습니다.

- 입력된 날짜의 정합성을 검사하는 기능이 내장되어 있습니다.

- innerdataset 속성을 사용하여 특정날짜에 효과를 줄 수 있습니다.

- 입력되는 날짜의 형식을 editformat 속성값을 사용하여 설정할 수 있습니다.
   표시되는 날짜의 형식을 dateformat 속성값을 사용하여 설정할 수 있습니다.
   editformat, dateformat 속성에 "LONGDATE", "SHORTDATE" 설정 시 국가별로 다른 형식의 날짜를 설정할 수 있습니다.

- 화면에 제공되는 스핀버튼 또는 키보드의 Up/Down Key 를 이용해 편리하게 입력할 수 있습니다.
   Calendar 와 팝업달력에 표시되는 스핀버튼에 LButtonDown 상태를 유지할 경우 날짜값이 연속적으로 변경됩니다.

- Calendar 의 팝업달력에서 날짜선택은 마우스 왼쪽 버튼으로 Down&Up 을 수행하여야 합니다.

- Calendar 의 dropbutton 과 팝업달력이 겹쳐질 경우 팝업달력이 열린 후 곧바로 닫히는 현상이 나타날 수 있습니다.
   클릭위치가 중첩되어 나타나는 문제로 버그가 아니므로 dropbutton 과 팝업달력이 중첩되지 않도록 설정값을 변경하여야 합니다.

- editformat 속성값에 시간관련 마스크 문자를 설정한 경우 시간은 편집영역에서 직접 입력하여야 합니다.
   시간은 입력 시 24시간 형식으로 입력하여야 하며 표시는 12시간 형식을 사용할 수 있습니다.


◆ 입력값 자동 보정

- calendaredit 영역에 직접 날짜값을 입력하는 경우 유효하지 않은 값이 입력됐을 때 아래와 같은 규칙으로 정합성을 검사하고 날짜값을 반영합니다.

(1) 기존값이 윤일(閏日)인 경우
기존값이 윤일인 경우 윤년이 아닌 년도값을 입력하면 2월 28일로 날짜값을 반영합니다.
예를 들어 기존값이 "2020-02-29"인 경우 년도값으로 "2025"를 입력하면 "2025-02-28"로 날짜값을 반영합니다.

(2) 일의 자리 입력 시 유효하지 않은 숫자 처리
월 또는 일 편집 영역에 일의 자리를 입력할 때 유효하지 않은 숫자가 입력되면 십의 자리는 "0"으로 처리하고 일의 자리만 유지합니다.
월 편집 영역에 13에서 19 사이의 숫자를 입력하거나 일 편집 영역에 maxday보다 큰 숫자를 입력하는 경우가 해당합니다.
예를 들어 월 편집 영역에 "13"을 입력하면 십의 자리를 "0"으로 처리해서 "03"으로 날짜값을 반영합니다. 그리고 캐럿은 일 편집 영역 십의 자리 앞으로 이동합니다.
일 편집 영역에 "32"를 입력하면 십의 자리를 "0"으로 처리해서 "02"으로 날짜값을 반영합니다(2월인 경우에는 십의 자리에 3을 입력할 때 유효하지 않은 숫자로 처리됩니다). 그리고 캐럿은 일 편집 영역 일의 자리 뒤로 이동합니다.

(3) 십의 자리 입력 시 유효하지 않는 숫자 처리
월 또는 일 편집 영역에 십의 자리를 입력할 때 유효하지 않은 숫자가 입력되면 십의 자리는 "0"으로 처리하고 일의 자리에 반영합니다.
예를 들어 기존값이 "2020-11-11"인 경우 월 편집 영역 십의 자리에 "2"를 입력하면 "2020-02-11"로 날짜값을 반영합니다. 그리고 캐럿은 일 편집 영역 십의 자리 앞으로 이동합니다.
일 편집 영역 십의 자리에 "4"를 입력하면 "2020-11-04"로 날짜값을 반영합니다. 그리고 캐럿은 일 편집 영역 일의 자리 뒤로 이동합니다.

◆ Mobile 제약

- 모바일 환경에서는 기능상의 문제로 스핀버튼에 터치를 유지하여도 날짜값이 연속적으로 변경되지 않습니다.
```

## 20.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_02_Calendar4.png?raw=true)

## 20.1.3컴포넌트, 내부 컨텐츠 크기

```
Calendar 컴포넌트와 내부 컨텐츠 크기를 결정하는 기준입니다.

- Calendar 컴포넌트의 type 속성값이 "normal" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| Calendar Component | |
| Width | Calendar 컴포넌트의 width 속성값이 적용됩니다.  내부 컨텐츠의 Width 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
| Height | Calendar 컴포넌트의 height 속성값이 적용됩니다.  내부 컨텐츠의 Height 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
| calendaredit Control | |
| Left | 0 으로 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | Calendar 컴포넌트의 Width 에서 dropbutton 컨트롤의 Width 를 뺀 값이 적용됩니다. |
| Height | Calendar 컴포넌트의 Height 가 적용됩니다. |
| dropbutton Control | |
| Left | Calendar 컴포넌트의 Width 에서 dropbutton 컨트롤의 Width 를 뺀 값이 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | buttonsize 속성값이 적용됩니다.  buttonsize 속성값이 없으면 Calendar 컴포넌트의 Height 가 적용됩니다. |
| Height | Calendar 컴포넌트의 Height 가 적용됩니다. |
| datepicker Control | |
| Left | Calendar 컴포넌트의 left 속성값이 적용됩니다. |
| Top | Calendar 컴포넌트의 bottom 속성값이 적용됩니다. |
| Width | popupsize 속성값의 값이 적용됩니다.  popupsize 속성값이 없으면 220 으로 적용됩니다. |
| Height | popupsize 속성값의 값이 적용됩니다.  popupsize 속성값이 없으면 200 으로 적용됩니다. |

```
- Calendar 컴포넌트의 type 속성값이 "spin" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| Calendar Component | |
| Width | Calendar 컴포넌트의 width 속성값이 적용됩니다.  내부 컨텐츠의 Width 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
| Height | Calendar 컴포넌트의 height 속성값이 적용됩니다.  내부 컨텐츠의 Height 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
| calendaredit Control | |
| Left | 0 으로 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | Calendar 컴포넌트의 Width 에서 spinupbutton 컨트롤의 Width 를 뺀 값이 적용됩니다. |
| Height | Calendar 컴포넌트의 Height 가 적용됩니다. |
| spinupbutton Control | |
| Left | Calendar 컴포넌트의 Width 에서 spinupbutton 컨트롤의 Width 를 뺀 값이 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | buttonsize 속성값이 적용됩니다.  buttonsize 속성값이 없으면 Calendar 컴포넌트의 Height 가 적용됩니다. |
| Height | Calendar 컴포넌트의 Height 를 2로 나눈 몫이 적용됩니다. |
| spindownbutton Control | |
| Left | Calendar 컴포넌트의 Width 에서 spinupbutton 컨트롤의 Width 를 뺀 값이 적용됩니다. |
| Top | Calendar 컴포넌트의 Height 에서 spinupbutton 컨트롤의 Height 를 뺀 값이 적용됩니다. |
| Width | buttonsize 속성값이 적용됩니다.  buttonsize 속성값이 없으면 Calendar 컴포넌트의 Height 가 적용됩니다. |
| Height | Calendar 컴포넌트의 Height 를 2로 나눈 몫이 적용됩니다. |

```
- Calendar 컴포넌트의 type 속성값이 "monthonly" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| Calendar Component | |
| Width | Calendar 컴포넌트의 width 속성값이 적용됩니다. |
| Height | Calendar 컴포넌트의 height 속성값이 적용됩니다. |
| head Control | |
| Left | 0 으로 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | Calendar 컴포넌트의 Width 가 적용됩니다.  내부 컨텐츠의 Width 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
| Height | headheight 속성값이 적용됩니다.  headheight 속성값이 없으면 Calendar 컴포넌트의 Height 를 8 로 나눈 값이 적용됩니다.  내부 컨텐츠의 Height 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
| prevbutton Control | |
| Left | 0 으로 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | head 컨트롤의 Height 가 적용됩니다. |
| Height | head 컨트롤의 Height 가 적용됩니다. |
| nextbutton Control | |
| Left | 0 으로 적용됩니다. (오른쪽으로 정렬합니다.) |
| Top | 0 으로 적용됩니다. |
| Width | head 컨트롤의 Height 가 적용됩니다. |
| Height | head 컨트롤의 Height 가 적용됩니다. |
| yearstatic Control | |
| Left | monthstatic 컨트롤의 Width 와 합하여 head 컨트롤에 가운데 정렬되게 계산되어 적용됩니다. |
| Top | monthstatic 컨트롤의 Height 와 합하여 head 컨트롤에 가운데 정렬되게 계산되어 적용됩니다. |
| Width | 텍스트 길이에 맞게 계산된 값이 적용됩니다. |
| Height | 텍스트 크기에 맞게 계산된 값이 적용됩니다. |
| monthstatic Control | |
| Left | yearstatic 컨트롤의 Width 와 합하여 head 컨트롤에 가운데 정렬되게 계산되어 적용됩니다. |
| Top | yearstatic 컨트롤의 Height 와 합하여 head 컨트롤에 가운데 정렬되게 계산되어 적용됩니다. |
| Width | 텍스트 길이에 맞게 계산된 값이 적용됩니다. |
| Height | 텍스트 크기에 맞게 계산된 값이 적용됩니다. |
| body Control | |
| Left | 0 으로 적용됩니다. |
| Top | head 컨트롤의 Height 값이 적용됩니다. |
| Width | Calendar 컴포넌트의 Width 가 적용됩니다. |
| Height | Calendar 컴포넌트의 Height 에서 head 컨트롤의 Height 를 뺀 값이 적용됩니다. |
| weekband Control | |
| Left | 0 으로 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | body 컨트롤의 Width 가 적용됩니다. |
| Height | daysize 속성값의 값이 적용됩니다.  daysize 속성값이 없으면 body 컨트롤의 Height 를 7 로 나눈 값이 적용됩니다. |
| weekitem Control | |
| Left | 아이템별로 요일에 맞게 계산되어 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | daysize 속성값의 값이 적용됩니다.  daysize 속성값이 없으면 weekband 컨트롤의 Width 를 7로 나눈 값이 적용됩니다.  내부 컨텐츠의 Width 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
| Height | weekband 컨트롤의 Height 값이 적용됩니다.  내부 컨텐츠의 Height 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
| dayitem Control | |
| Left | 아이템별로 요일에 맞게 계산되어 적용됩니다. |
| Top | 아이템별로 주에 맞게 계산되어 적용됩니다. |
| Width | daysize 속성값의 값이 적용됩니다.  daysize 속성값이 없으면 weekband 컨트롤의 Width 를 7로 나눈 값이 적용됩니다.  내부 컨텐츠의 Width 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
| Height | daysize 속성값의 값이 적용됩니다.  daysize 속성값이 없으면 body 컨트롤의 Height 를 7 로 나눈 값이 적용됩니다.  내부 컨텐츠의 Height 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |

```
- Calendar 컴포넌트의 datepickerchangetype 속성값이 "button"(또는 "normal"이고 Mobile 환경에서 실행)인 경우 기준입니다.
```

|  |  |
| --- | --- |
| Calendar Component | |
| Width | Calendar 컴포넌트의 width 속성값이 적용됩니다. |
| Height | Calendar 컴포넌트의 height 속성값이 적용됩니다. |
| DatePickerHeadControl | |
| Left | calendarpopup 컨트롤 위치에 맞게 계산된 값이 적용됩니다. |
| Top | calendarpopup 컨트롤 위치에 맞게 계산된 값이 적용됩니다. |
| Width | popupsize로 지정한 Width 값이 적용됩니다.  해당 값 미설정 시 calendarpopup 컨트롤 Width 와 동일한 값이 적용됩니다. |
| Height | popupsize로 지정한 Height 값이 적용됩니다.  해당 값 미설정 시 Calendar 컴포넌트의 headheight 속성 값이 적용됩니다. 해당 값 미설정 시 기본 값(27.5px)이 적용됩니다. |
| DatePickerBodyControl | |
| Left | calendarpopup 컨트롤 위치에 맞게 계산된 값이 적용됩니다. |
| Top | calendarpopup 컨트롤 위치에 맞게 계산된 값에 DatePickerHeadControl의 height를 추가한 값이 적용됩니다. |
| Width | popupsize로 지정한 Width 값이 적용됩니다.  해당 값 미설정 시 calendarpopup 컨트롤 Width 와 동일한 값이 적용됩니다. |
| Height | popupsize로 지정한 Height 값이 적용됩니다.  해당 값 미설정 시 calendarpopup에서 DatePickerHeadControl의 height를 제외한 값이 적용됩니다. |
| dayitem | |
| Left | 아이템별로 요일에 맞게 계산되어 적용됩니다. |
| Top | 아이템별로 주에 맞게 계산되어 적용됩니다. |
| Width | daysize 속성값의 값이 적용됩니다.  daysize 속성값이 없으면 weekband 컨트롤의 Width 를 7로 나눈 값이 적용됩니다.  내부 컨텐츠의 Width 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
| Height | daysize 속성값의 값이 적용됩니다.  daysize 속성값이 없으면 body 컨트롤의 Height 를 7 로 나눈 값이 적용됩니다.  내부 콘텐츠의 Height 보다 작을 경우 내부 콘텐츠가 잘려서 표시됩니다. |
| monthitem | |
| Left | 아이템별로 월에 맞게 4개 단위로 나누어 계산되어 적용됩니다. |
| Top | head 컨트롤의 Height와 weekband 컨트롤의 Height를 더한 값을 시작으로  아이템별로 월에 맞게 4개 단위로 계산되어 적용됩니다. |
| Width | body 컨트롤의 Width를 4로 나눈 값이 적용됩니다. |
| Height | body 컨트롤의 Height를 4로 나눈 값이 적용됩니다. |
| yearitem | |
| Left | 아이템별로 년에 맞게 4개 단위로 나누어 계산되어 적용됩니다. |
| Top | head 컨트롤의 Height와 weekband 컨트롤의 Height를 더한 값을 시작으로  아이템별로 년에 맞게 4개 단위로 계산되어 적용됩니다. |
| Width | body 컨트롤의 Width를 4로 나눈 값이 적용됩니다. |
| Height | body 컨트롤의 Height를 4로 나눈 값이 적용됩니다. |

## 20.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| DatePicker 열기 | Alt + 아래방향키 또는 Option + 아래방향키 | type 속성값이 "normal"인 경우 팝업달력(DatePIcker)에서 방향키 입력으로 변경한 날짜를 value 속성에 반영합니다.  type 속성값이 "spin"인 경우 상하방향키 또는 스핀 버튼을 클릭해 변경한 날짜를 value 속성에 반영합니다. |
| DatePicker 닫기 | ESC | type 속성값이 "normal" 일 때 열려있는 팝업달력(DatePicker)을 닫습니다. |
| 날짜 변경 | 상하방향키 | type 속성값이 "spin" 일 때 캐럿위치의 년/월/일 값을 변경합니다.    년/월/일 이 가질 수 있는 최저/최고값에 도달하면 반대값(최저면 최고값, 최고면 최저값)으로 변경됩니다. |
| 날짜 결정 | Enter | type 속성값이 "normal" 또는 "monthonly" 일 때 팝업달력(DatePIcker)에 선택된 날짜를 value 속성에 반영합니다. |
| DatePicker 날짜이동 | 상하좌우방향키 | DatePicker 에서 날짜가 이동됩니다.  type 속성값이 "normal"인 경우 팝업달력(DatePIcker)에서 선택된 날짜를 결정하려면 Enter 를 입력하여야 합니다.    첫 날짜에서 상/좌 방향키 또는 마지막 날짜에서 하/우 방향키 입력 시 월이 전환됩니다. |
| DatePicker 날짜이동 | Ctrl + 좌우방향키 | DatePicker 의 월이 이동됩니다. |
| DatePicker 날짜이동 | Ctrl + 상하방향키 | DatePicker 의 연도가 이동됩니다. |

## 20.1.5Accessibility Key Action

```
접근성 기능이 활성화 되어 있을 때 적용되는 키 액션입니다.
```

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 선택상자 이동 | 상하방향키 | Tab Order 가 이전/다음인 컴포넌트로 선택상자가 이동합니다.    type 속성값이 "normal" 일 때 표시된 팝업달력(DatePicker) 에서는 아무런 액션도 발생하지 않습니다. |
| DatePicker 열기 | Alt + 아래방향키 또는 Option + 아래방향키 | type 속성값이 "normal" 일 때 팝업달력(DatePicker)이 표시됩니다.  데스크탑 환경에서는 팝업달력에서 날짜를 변경할 때 음성 출력을 위해 calendaredit 컨트롤 영역의 캐럿을 끝으로 이동합니다. |
| DatePicker 닫기 | ESC | type 속성값이 "normal" 일 때 열려있는 팝업달력(DatePicker)을 닫습니다.  calendaredit 컨트롤 영역의 캐럿을 처음으로 이동합니다. |
| 날짜 변경 | Ctrl + 상하방향키 | type 속성값이 "spin" 일 때 캐럿위치의 년/월/일 값을 변경합니다.    년/월/일 이 가질 수 있는 최저/최고값에 도달하면 반대값(최저면 최고값, 최고면 최저값)으로 변경됩니다. |
| 날짜 결정 | Enter | type 속성값이 "normal"인 경우 팝업달력(DatePIcker)에서 방향키 입력으로 변경한 날짜를 value 속성에 반영합니다.  type 속성값이 "spin"인 경우 상하방향키 또는 스핀 버튼을 클릭해 변경한 날짜를 value 속성에 반영합니다. |
| DatePicker 날짜이동 | 좌우방향키 | DatePicker 에서 날짜가 이동됩니다.  type 속성값이 "normal"인 경우 팝업달력(DatePIcker)에서 선택된 날짜를 결정하려면 Enter 를 입력하여야 합니다.    첫 날짜에서 좌측방향키 또는 마지막 날짜에서 우측방향키 입력 시 월이 전환됩니다. |
| DatePicker 날짜이동 | Ctrl + 좌우방향키 | DatePicker 의 월이 이동됩니다. |
| DatePicker 날짜이동 | Ctrl + 상하방향키 | DatePicker 의 연도가 이동됩니다. |

## 20.1.6생성자

```
Calendar.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | Calendar 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | Calendar 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 Calendar 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Calendar 의 left 가 결정됩니다. |
| vTop | String, Number | Calendar 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 Calendar 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Calendar 의 top 이 결정됩니다. |
| vWidth | String, Number | Calendar 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Calendar 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Calendar 의 width 가 결정됩니다. |
| vHeight | String, Number | Calendar 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Calendar 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Calendar 의 height 가 결정됩니다. |
| vRight | String, Number | Calendar 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 Calendar 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Calendar 의 right 가 결정됩니다. |
| vBottom | String, Number | Calendar 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 Calendar 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Calendar 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | Calendar 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | Calendar 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | Calendar 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | Calendar 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new Calendar();  objComp.init( "Calendar00", 30, 120, 196, 46 ); objComp.init( "Calendar00", 30, 120, 196, 46, null, null ); objComp.init( "Calendar00", null, null, 300, "400px", "80%", 300 ); objComp.init( "Calendar00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "Calendar00", "Calendar22:10", 300, null, null, "Calendar33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objCalendar = new Calendar();   objCalendar.init("Calendar", 30, 120, 196, 46, null, null); objCalendar.init("Calendar", null, null, 300, "400px", "80%", 300); or var objCalendar = new Calendar("Calendar", 30, 120, 196, 46, null, null); var objCalendar = new Calendar("Calendar", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("Calendar", objCalendar);    // Insert Object to Parent Form   this.insertChild(1, "Calendar", objCalendar);    // Remove Object form Parent Form   this.removeChild("Calendar");    // Show Object   objCalendar.show();    // Destroy Object   objCalendar.destroy();  objCalendar = null; ``` |

## 20.1.7Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| invalidtext | userstatus | 유효하지 않은 값이 바인드 되거나 설정된 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 20.1.8Control

| Name | | TypeName |
| --- | --- | --- |
| dropbutton | | nexacro.Button |
| calendarspinupbutton | | nexacro.Button |
| calendarspindownbutton | | nexacro.Button |
| datepicker | | nexacro.DatePickerControl |
| calendaredit | | nexacro.MaskEdit |
