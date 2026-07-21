# 92.PopupDateRangePicker

92.1개요

92.2속성

92.3메서드

92.4이벤트

```
1개 또는 2개(시작일자와 종료일자)의 날짜와 시간을 입력받거나 선택하기 위해 팝업창으로 띄우는 컴포넌트입니다.
```

## 92.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- DateField 컴포넌트에서 PopupDateRangePicker 컴포넌트를 사용하고자 할 경우에는 아래와 같이 사용할 수 있습니다.

   this.DateField00_ondropdown = function(obj:nexacro.DateField,e:nexacro.EventInfo)
   {
        // PopupDateRangePicker 컴포넌트 실행
        e.preventDefault();
   }
```

## 92.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacroN_V24_PopupDateRangePicker1.png?raw=true)

## 92.1.3컴포넌트, 내부 컨텐츠 크기

```
PopupDateRangePicker 컴포넌트와 내부 콘텐츠 크기를 결정하는 기준입니다.
```

|  |  |
| --- | --- |
| PopupDateRangePicker Component | |
| Width | PopupDateRangePicker 컴포넌트의 width 속성값이 적용됩니다.  내부 콘텐츠의 Width 보다 작을 경우 내부 콘텐츠가 잘려서 표시됩니다. |
| Height | PopupDateRangePicker 컴포넌트의 height 속성값이 적용됩니다.  내부 콘텐츠의 Height 보다 작을 경우 내부 콘텐츠가 잘려서 표시됩니다. |
| closebutton Control | |
| Left | PopupDateRangePicker 컴포넌트의 width 값에서 closebutton의 width를 뺀 값이 적용됩니다. |
| Top | PopupDateRangePicker 컴포넌트의 height 값에서 closebutton의 height를 뺀 값이 적용됩니다. |
| Width | closebuttonsize 속성 값이 적용됩니다.  closebuttonsize 속성 값이 없으면 70으로 적용됩니다. |
| Height | closebuttonsize 속성 값이 적용됩니다.  closebuttonsize 속성 값이 없으면 27로 적용됩니다. |
| headline Control | |
| Left | 0으로 적용됩니다. |
| Top | 0으로 적용됩니다. |
| Width | PopupDateRangePicker width 값이 적용됩니다.  headlineposition="left" 일 때 headlinesize 속성 값이 적용됩니다. headlinesize 속성 값이 없으면 150로 적용됩니다. |
| Height | headlinesize 속성 값이 적용됩니다. headlinesize 속성 값이 없으면 80로 적용됩니다.  headlineposition="left" 일 때 PopupDateRangePicker height 값이 적용됩니다. |
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
| Width | PopupDateRangePicker의 width의 1/2 값이 적용됩니다.  headline control이 있을 경우 PopupDateRangePicker의 width에서 headline의 width를 뺀 값의 1/2 값이 적용됩니다. |
| Height | tabbuttonheight 속성 값이 적용됩니다.  tabbuttonheight 속성 값이 없으면 27로 적용됩니다. |
| timetabbutton Control | |
| Left | datetabbutton width 값이 적용됩니다.  headline control이 있을 경우 headline의 width를 포함한 값이 적용됩니다. |
| Top | 0으로 적용됩니다.  headline control이 있을 경우 headline의 height를 포함한 값이 적용됩니다. |
| Width | PopupDateRangePicker의 width의 1/2 값이 적용됩니다.  headline control이 있을 경우 PopupDateRangePicker의 width에서 headline의 width를 뺀 값의 1/2 값이 적용됩니다. |
| Height | tabbuttonheight 속성 값이 적용됩니다.  tabbuttonheight 속성 값이 없으면 27로 적용됩니다. |
| datepickergroup Control | |
| Left | 0으로 적용됩니다.  headline control이 있을 경우 headline의 width를 포함한 값이 적용됩니다. |
| Top | 0으로 적용됩니다.  headline control이 있을 경우 headline의 height를 포함한 값이 적용됩니다. |
| Width | PopupDateRangePicker의 width 값이 적용됩니다.  headline control이 있을 경우 PopupDateRangePicker의 width에서 headline의 width를 뺀 값이 적용됩니다. |
| Height | PopupDateRangePicker의 height 값이 적용됩니다.  headline control이 있을 경우 PopupDateRangePicker의 height에서 headline의 height를 뺀 값이 적용됩니다. |
| timepickergroup Control | |
| Left | 0으로 적용됩니다.  headline control이 있을 경우 headline의 width를 포함한 값이 적용됩니다. |
| Top | 0으로 적용됩니다.  headline control이 있을 경우 headline의 height를 포함한 값이 적용됩니다. |
| Width | PopupDateRangePicker의 width 값이 적용됩니다.  headline control이 있을 경우 PopupDateRangePicker의 width에서 headline의 width를 뺀 값이 적용됩니다. |
| Height | PopupDateRangePicker의 height 값이 적용됩니다.  headline control이 있을 경우 PopupDateRangePicker의 height에서 headline의 height를 뺀 값이 적용됩니다. |
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

## 92.1.4생성자

```
PopupDateRangePicker.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | PopupDateRangePicker 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | PopupDateRangePicker 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 PopupDateRangePicker 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 PopupDateRangePicker 의 left 가 결정됩니다. |
| vTop | String, Number | PopupDateRangePicker 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 PopupDateRangePicker 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 PopupDateRangePicker 의 top 이 결정됩니다. |
| vWidth | String, Number | PopupDateRangePicker 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 PopupDateRangePicker 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 PopupDateRangePicker 의 width 가 결정됩니다. |
| vHeight | String, Number | PopupDateRangePicker 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 PopupDateRangePicker 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 PopupDateRangePicker 의 height 가 결정됩니다. |
| vRight | String, Number | PopupDateRangePicker 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 PopupDateRangePicker 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 PopupDateRangePicker 의 right 가 결정됩니다. |
| vBottom | String, Number | PopupDateRangePicker 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 PopupDateRangePicker 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 PopupDateRangePicker 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | PopupDateRangePicker 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | PopupDateRangePicker 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | PopupDateRangePicker 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | PopupDateRangePicker 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new PopupDateRangePicker();  objComp.init( "PopupDateRangePicker00", 30, 120, 196, 46 ); objComp.init( "PopupDateRangePicker00", 30, 120, 196, 46, null, null ); objComp.init( "PopupDateRangePicker00", null, null, 300, "400px", "80%", 300 ); objComp.init( "PopupDateRangePicker00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "PopupDateRangePicker00", "PopupDateRangePicker22:10", 300, null, null, "PopupDateRangePicker33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objPopupDateRangePicker = new PopupDateRangePicker();   objPopupDateRangePicker.init("PopupDateRangePicker", 30, 120, 196, 46, null, null); objPopupDateRangePicker.init("PopupDateRangePicker", null, null, 300, "400px", "80%", 300); or var objPopupDateRangePicker = new PopupDateRangePicker("PopupDateRangePicker", 30, 120, 196, 46, null, null); var objPopupDateRangePicker = new PopupDateRangePicker("PopupDateRangePicker", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("PopupDateRangePicker", objPopupDateRangePicker);    // Insert Object to Parent Form   this.insertChild(1, "PopupDateRangePicker", objPopupDateRangePicker);    // Remove Object form Parent Form   this.removeChild("PopupDateRangePicker");    // Show Object   objPopupDateRangePicker.show();    // Destroy Object   objPopupDateRangePicker.destroy();  objPopupDateRangePicker = null; ``` |

## 92.1.5Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 92.1.6Control

| Name | | TypeName |
| --- | --- | --- |
| headline | | nexacro.PickerHeadLineControl |
| datetabbutton | | nexacro.Button |
| datepickergroup | | nexacro.DatePickerGroupControl |
| timepickergroup | | nexacro.TimePickerGroupControl |
| closebutton | | nexacro.Button |
| timetabbutton | | nexacro.Button |
