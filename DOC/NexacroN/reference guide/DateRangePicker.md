# 90.DateRangePicker

90.1개요

90.2속성

90.3메서드

90.4이벤트

```
1개 또는 2개(시작일자와 종료일자)의 날짜와 시간을 입력받거나 선택하기 위한 컴포넌트입니다.
```

## 90.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- 조건에 따라 컴포넌트(또는 컨트롤) 하단에 표시되는 Button 컨트롤이 달라집니다.
  (1) Button 컨트롤이 표시되지 않습니다.
    - DateRangePicker 컴포넌트인 경우
    - DateField 컴포넌트의 inputtype 속성값이 "date"인 경우
    - PopupDateRangePicker 컴포넌트의 displaytype 속성값이 "date"인 경우
  (2) cancelbutton, okbutton 컨트롤이 표시됩니다.
    - DateField 컴포넌트의 inputtype 속성값이 "datetime" 또는 "time"인 경우
  (3) closebutton 컨트롤이 표시됩니다.  
    - PopupDateRangePicker 컴포넌트의 displaytype 속성값이 "datetime" 또는 "time"인 경우
```

## 90.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacroN_V24_DateRangePicker1.png?raw=true)

## 90.1.3컴포넌트, 내부 컨텐츠 크기

```
DateRangePicker 컴포넌트와 내부 콘텐츠 크기를 결정하는 기준입니다.
```

|  |  |
| --- | --- |
| DateRangePicker Component | |
| Width | DateRangePicker 컴포넌트의 width 속성값이 적용됩니다.  내부 콘텐츠의 Width 보다 작을 경우 내부 콘텐츠가 잘려서 표시됩니다. |
| Height | DateRangePicker 컴포넌트의 height 속성값이 적용됩니다.  내부 콘텐츠의 Height 보다 작을 경우 내부 콘텐츠가 잘려서 표시됩니다. |
| closebutton Control | |
| Left | DateRangePicker 컴포넌트의 width 값에서 closebutton의 width를 뺀 값이 적용됩니다. |
| Top | DateRangePicker 컴포넌트의 height 값에서 closebutton의 height를 뺀 값이 적용됩니다. |
| Width | closebuttonsize 속성 값이 적용됩니다.  closebuttonsize 속성 값이 없으면 70으로 적용됩니다. |
| Height | closebuttonsize 속성 값이 적용됩니다.  closebuttonsize 속성 값이 없으면 27로 적용됩니다. |
| headline Control | |
| Left | 0으로 적용됩니다. |
| Top | 0으로 적용됩니다. |
| Width | DateRangePicker width 값이 적용됩니다.  headlineposition="left" 일 때 headlinesize 속성 값이 적용됩니다. headlinesize 속성 값이 없으면 150로 적용됩니다. |
| Height | headlinesize 속성 값이 적용됩니다. headlinesize 속성 값이 없으면 80로 적용됩니다.  headlineposition="left" 일 때 DateRangePicker height 값이 적용됩니다. |
| startdate Control | |
| Left | 0으로 적용됩니다. |
| Top | 0으로 적용됩니다. |
| Width | headline control width 값이 적용됩니다.  direction="horizontal"이고 type="range"인 경우, width의 1/2 값이 적용됩니다. |
| Height | headline control Height의 1/2 값이 적용됩니다.  direction="vertical"이고 type="range"인 경우, height의 1/4 값이 적용됩니다. |
| startsubdate Control | |
| Left | 0으로 적용됩니다. |
| Top | startdate Control의 height 값이 적용됩니다. |
| Width | headline control width 값이 적용됩니다.  direction="horizontal"이고 type="range"인 경우, width의 1/2 값이 적용됩니다. |
| Height | headline control height의 1/2 값이 적용됩니다.  direction="vertical"이고 type="range"인 경우, height의 1/4 값이 적용됩니다. |
| enddate Control | |
| Left | headline control height의 1/2 값이 적용됩니다.  direction="vertical"인 경우, 0으로 적용됩니다. |
| Top | 0으로 적용됩니다.  direction="vertical"인 경우, headline control height의 1/2 값이 적용됩니다. |
| Width | headline control width의 1/2 값이 적용됩니다.  direction="vertical"인 경우, width 값이 적용됩니다. |
| Height | headline control height의 1/2 값이 적용됩니다.  direction="vertical"인 경우, height의 1/4 값이 적용됩니다. |
| endsubdate Control | |
| Left | headline control height의 1/2 값이 적용됩니다.  direction="vertical"인 경우, 0으로 적용됩니다. |
| Top | enddate Control의 top + height 값이 적용됩니다. |
| Width | headline control width의 1/2 값이 적용됩니다.  direction="vertical"인 경우, width 값이 적용됩니다. |
| Height | headline control height의 1/2 값이 적용됩니다.  direction="vertical"인 경우, height의 1/4 값이 적용됩니다. |
| datetabbutton Control | |
| Left | 0으로 적용됩니다.  headline control이 있을 경우 headline의 width를 포함한 값이 적용됩니다. |
| Top | 0으로 적용됩니다.  headline control이 있을 경우 headline의 height를 포함한 값이 적용됩니다. |
| Width | DateRangePicker의 width의 1/2 값이 적용됩니다.  headline control이 있을 경우 DateRangePicker의 width에서 headline의 width를 뺀 값의 1/2 값이 적용됩니다. |
| Height | tabbuttonheight 속성 값이 적용됩니다.  tabbuttonheight 속성 값이 없으면 27로 적용됩니다. |
| timetabbutton Control | |
| Left | datetabbutton width 값이 적용됩니다.  headline control이 있을 경우 headline의 width를 포함한 값이 적용됩니다. |
| Top | 0으로 적용됩니다.  headline control이 있을 경우 headline의 height를 포함한 값이 적용됩니다. |
| Width | DateRangePicker의 width의 1/2 값이 적용됩니다.  headline control이 있을 경우 DateRangePicker의 width에서 headline의 width를 뺀 값의 1/2 값이 적용됩니다. |
| Height | tabbuttonheight 속성 값이 적용됩니다.  tabbuttonheight 속성 값이 없으면 27로 적용됩니다. |
| datepickergroup Control | |
| Left | 0으로 적용됩니다.  headline control이 있을 경우 headline의 width를 포함한 값이 적용됩니다. |
| Top | 0으로 적용됩니다.  headline control이 있을 경우 headline의 height를 포함한 값이 적용됩니다. |
| Width | DateRangePicker의 width 값이 적용됩니다.  headline control이 있을 경우 DateRangePicker의 width에서 headline의 width를 뺀 값이 적용됩니다. |
| Height | DateRangePicker의 height 값이 적용됩니다.  headline control이 있을 경우 DateRangePicker의 height에서 headline의 height를 뺀 값이 적용됩니다. |
| timepickergroup Control | |
| Left | 0으로 적용됩니다.  headline control이 있을 경우 headline의 width를 포함한 값이 적용됩니다. |
| Top | 0으로 적용됩니다.  headline control이 있을 경우 headline의 height를 포함한 값이 적용됩니다. |
| Width | DateRangePicker의 width 값이 적용됩니다.  headline control이 있을 경우 DateRangePicker의 width에서 headline의 width를 뺀 값이 적용됩니다. |
| Height | DateRangePicker의 height 값이 적용됩니다.  headline control이 있을 경우 DateRangePicker의 height에서 headline의 height를 뺀 값이 적용됩니다. |
| datepicker Control | |
| Left | datepickergroup의 width를 displaymonthcount 속성 값으로 나눈 값을 기준으로 0부터 차례 대로 배치합니다. |
| Top | 0으로 적용됩니다. |
| Width | datepickergroup의 width를 displaymonthcount 속성 값으로 나눈 값이 적용됩니다. |
| Height | datepickergroup의 height 값이 적용됩니다. |
| timepicker Control | |
| Left | 0으로 적용됩니다.  direction="horizontal"이고 type="range"인 경우, timepickergroup width의 1/2 값이 적용됩니다. |
| Top | 0으로 적용됩니다.  direction="vertical"이고 type="range"인 경우, timepickergroup height의 1/2 값이 적용됩니다. |
| Width | timepickergroup의 width 값이 적용됩니다.  direction="horizontal"이고 type="range"인 경우, 1/2 값이 적용됩니다. |
| Height | datepickergroup의 height 값이 적용됩니다.  direction="vertical"이고 type="range"인 경우, 1/2 값이 적용됩니다. |
| ampmspinner Control | |
| Left | locale format에 따라 왼쪽 또는 오른쪽 끝에 계산되어 위치합니다. |
| Top | 0으로 적용됩니다. |
| Width | ampmspinner, hourspinner, minspinner, secspinner control 등 사용되는 개수에 따라 timepicker width에서 delimiter width를 제외한 값의 1/n 값으로 적용됩니다. |
| Height | timepicker의 height 값이 적용됩니다. |
| hourspinner Control | |
| Left | ampmspinner control이 왼쪽에 있는 경우 ampmspinner의 width, 아닌 경우 0으로 적용됩니다. |
| Top | 0으로 적용됩니다. |
| Width | ampmspinner, hourspinner, minspinner, secspinner control 등 사용되는 개수에 따라 timepicker width에서 delimiter width를 제외한 값의 1/n 값으로 적용됩니다. |
| Height | timepicker의 height 값이 적용됩니다. |
| minspinner Control | |
| Left | hourspinner control의 left + width 값으로 적용됩니다. |
| Top | 0으로 적용됩니다. |
| Width | ampmspinner, hourspinner, minspinner, secspinner control 등 사용되는 개수에 따라 timepicker width에서 delimiter width를 제외한 값의 1/n 값으로 적용됩니다. |
| Height | timepicker의 height 값이 적용됩니다. |
| secspinner Control | |
| Left | minspinner control의 left + width 값으로 적용됩니다. |
| Top | 0으로 적용됩니다. |
| Width | ampmspinner, hourspinner, minspinner, secspinner control 등 사용되는 개수에 따라 timepicker width에서 delimiter width를 제외한 값의 1/n 값으로 적용됩니다. |
| Height | timepicker의 height 값이 적용됩니다. |
| spinneritem Control | |
| Left | 0으로 적용됩니다. |
| Top | spinneritem 개수에 맞게 timepicker height의 1/n 값으로 순차적으로 배치됩니다. |
| Width | spinner control의 width 값으로 적용됩니다 |
| Height | spinner control의 height 값이 적용됩니다. |
| delimiter Control | |
| Left | hourspinner와 minspinner control 사이 또는 minspinner와 secspinner control 사이에 배치됩니다. |
| Top | 0으로 적용됩니다. |
| Width | 내부에서 정의된 값으로 적용됩니다. |
| Height | timepicker의 height 값이 적용됩니다. |

## 90.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 날짜 결정 | Space 또는 Enter | 선택한 날짜를 startdate 또는 enddate 속성값으로 반영합니다. |
| 날짜/시간 변경 | 상하좌우방향키 | - DatePicker  방향키 입력 시 해당 방향으로 선택한 날짜를 이동합니다.  1일을 선택한 상태에서 상/좌 방향키를 입력하면 이전 월로 이동합니다.  해당 월 마지막 날짜를 선택한 상태에서 하/우 방향키를 입력하면 다음 월로 이동합니다.  - TimePicker  좌우방향키 입력 시 시, 분, 초 단위로 포커스를 이동합니다.  상하방향키 입력 시 값을 변경합니다. |
| 날짜/시간 변경 | HOME 또는 END | - DatePicker  HOME 키 입력 시 선택한 날짜가 해당하는 주의 맨 앞에 위치한 날짜로 이동합니다.  END 키 입력 시 선택한 날짜의 해당하는 주의 맨 뒤에 위치한 날짜로 이동합니다.  - TimePicker  HOME 키 입력 시 스피너에서 선택할 수 있는 범위 내 시작값으로 이동합니다.  END 키 입력 시 스피너에서 선택할 수 있는 범위 내 마지막값으로 이동합니다. |
| 날짜/시간 변경 | PageUp 또는 PageDown | - DatePicker  PageUp 키 입력 시 해당 월 1일로 이동합니다.  PageDown 키 입력 시 해당 월 마지막 날짜로 이동합니다. |
| 날짜/시간 변경 | Ctrl + 좌우방향키 | - DatePicker  이전 월 또는 다음 월로 이동합니다.  - TimePicker  type 속성값이 "range"인 경우 start timepicker 또는 end timepicker로 포커스를 이동합니다. |
| 날짜/시간 변경 | Ctrl + 상하방향키 | DatePicker  - 이전 연도 또는 다음 연도로 이동합니다. |
| 날짜/시간 탭 이동 | Ctrl + Alt + 좌우방향키 또는 Ctrl + Option + 좌우방향키 | displaytype 속성값이 "datetime"인 경우 날짜 탭 또는 시간 탭으로 포커스를 이동합니다. |

## 90.1.5생성자

```
DateRangePicker.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | DateRangePicker 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | DateRangePicker 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 DateRangePicker 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 DateRangePicker 의 left 가 결정됩니다. |
| vTop | String, Number | DateRangePicker 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 DateRangePicker 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 DateRangePicker 의 top 이 결정됩니다. |
| vWidth | String, Number | DateRangePicker 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 DateRangePicker 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 DateRangePicker 의 width 가 결정됩니다. |
| vHeight | String, Number | DateRangePicker 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 DateRangePicker 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 DateRangePicker 의 height 가 결정됩니다. |
| vRight | String, Number | DateRangePicker 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 DateRangePicker 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 DateRangePicker 의 right 가 결정됩니다. |
| vBottom | String, Number | DateRangePicker 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 DateRangePicker 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 DateRangePicker 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | DateRangePicker 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | DateRangePicker 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | DateRangePicker 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | DateRangePicker 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new DateRangePicker();  objComp.init( "DateRangePicker00", 30, 120, 196, 46 ); objComp.init( "DateRangePicker00", 30, 120, 196, 46, null, null ); objComp.init( "DateRangePicker00", null, null, 300, "400px", "80%", 300 ); objComp.init( "DateRangePicker00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "DateRangePicker00", "DateRangePicker22:10", 300, null, null, "DateRangePicker33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objDateRangePicker = new DateRangePicker();   objDateRangePicker.init("DateRangePicker", 30, 120, 196, 46, null, null); objDateRangePicker.init("DateRangePicker", null, null, 300, "400px", "80%", 300); or var objDateRangePicker = new DateRangePicker("DateRangePicker", 30, 120, 196, 46, null, null); var objDateRangePicker = new DateRangePicker("DateRangePicker", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("DateRangePicker", objDateRangePicker);    // Insert Object to Parent Form   this.insertChild(1, "DateRangePicker", objDateRangePicker);    // Remove Object form Parent Form   this.removeChild("DateRangePicker");    // Show Object   objDateRangePicker.show();    // Destroy Object   objDateRangePicker.destroy();  objDateRangePicker = null; ``` |

## 90.1.6Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 90.1.7Control

| Name | | TypeName |
| --- | --- | --- |
| headline | | nexacro.PickerHeadLineControl |
| datetabbutton | | nexacro.Button |
| datepickergroup | | nexacro.DatePickerGroupControl |
| timepickergroup | | nexacro.TimePickerGroupControl |
| closebutton | | nexacro.Button |
| timetabbutton | | nexacro.Button |
| okbutton | | nexacro.Button |
| cancelbutton | | nexacro.Button |
