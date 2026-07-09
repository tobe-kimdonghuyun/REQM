# 89.DateField

89.1개요

89.2속성

89.3메서드

89.4이벤트

```
DateField 컴포넌트는 날짜와 시간을 입력받기 위한 컴포넌트입니다.
```

## 89.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- 편집 영역에 직접 값을 입력하는 것은 데스크톱 환경에서만 지원합니다.
  모바일 환경에서는 편집 영역 터치 시 DateTimePicker가 표시되며 DateTimePicker에서 선택한 값을 입력합니다.


◆ 편집 영역 선택 시 동작

- 편집 영역에 마우스 오른쪽 버튼 클릭 시 "년", "월", "일", "시", "분", "초" 단위로 기본 선택 됩니다.
  선택한 단위는 키보드로 값을 직접 입력하거나 상하 방향키로 값을 변경할 수 있습니다.

- "년,월,일", "시,분,초", "년,월,일,시,분,초" 형태로 마스크 문자 기준으로 영역 선택도 가능합니다.
  마스크 문자를 제외한 일반 문자열은 선택 영역 중간에 포함된 경우에는 선택되지만 선택 영역 시작이나 끝인 경우에는 선택되지 않습니다.
  예를 들어 format 속성값이 "<yyyy-M-d>H:m:s"인 경우 "<"와 ">"을 포함한 값을 선택할 수는 없습니다.

- 선택한 마스크 문자에 해당하는 값을 붙여 넣기 할 수 있습니다.
  예를 들어 format 속성값이 "yyyy-M-d"인 경우 "년,월,일" 영역을 선택하고 "19940530". "1994/05/30", "1994/5/30" 같은 값을 붙여 넣기 하면 format 속성값에 맞게 값이 입력됩니다.


◆ 기존값의 마지막 일자 보정

 - 년 또는 월이 변경 되었을 경우, 기존 값의 일자가 변경된 년월의 마지막 일자보다 큰 경우, 변경된 년월의 마지막 일자로 보정됩니다.


◆ 팝업달력이 열린 후 닫히는 현상

- DateField의 dropbutton 이미지 영역과 팝업달력이 겹쳐지는 경우 팝업달력이 열린 후 곧바로 닫히는 현상이 나타날 수 있습니다. 
  클릭할 수 있는 위치가 중첩되어 나타나는 문제이며 dropbutton 이미지 영역과 팝업달력이 중첩되지 않도록 설정값을 변경하여야 합니다.
```

## 89.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacroN_V24_DateField2.png?raw=true)

## 89.1.3컴포넌트, 내부 컨텐츠 크기

```
DateField 컴포넌트와 내부 콘텐츠 크기를 결정하는 기준입니다.
```

|  |  |
| --- | --- |
| DateField Component | |
| Width | DateField 컴포넌트의 width 속성값이 적용됩니다.  내부 콘텐츠의 Width 보다 작을 경우 내부 콘텐츠가 잘려서 표시됩니다. |
| Height | DateField컴포넌트의 height 속성값이 적용됩니다.  내부 콘텐츠의 Height 보다 작을 경우 내부 콘텐츠가 잘려서 표시됩니다. |
| label Control | |
| Width | label 컨트롤 Text의 자동 계산된 Width값이 적용됩니다. |
| Height | label 컨트롤 Text의 자동 계산된 Height값이 적용됩니다. |
| helpertext Control | |
| Left | 0으로 적용됩니다. |
| Top | DateField 컴포넌트의 Height에서 helpertext 컨트롤의 Height를 뺀 값이 적용됩니다. |
| Width | DateField 컴포넌트의 Width 가 적용됩니다. |
| Height | DateField 컴포넌트의 footerheight 속성값이 적용됩니다.  footerheight 속성값이 없으면 helpertext 컨트롤 Text의 자동 계산된 Height 값이 적용됩니다. |
| nulltext Control | |
| Left | 0으로 적용됩니다. |
| Top | 0으로 적용됩니다. |
| Width | DateField 컴포넌트의 Width에서 dropbutton 컨트롤의 Width 값을 뺀 값이 적용됩니다. |
| Height | box 컨트롤 Height 값에서 box 컨트롤의 위, 아래 border 값을 뺀 값이 적용됩니다. |
| box control | |
| Left | 0으로 적용됩니다. |
| Top | DateField 컴포넌트의 Height에서 label 컨트롤이 floating 되기 위해 확보된 영역의 Height를 뺀 값이 적용됩니다. |
| Width | DateField 컴포넌트의 Width 가 적용됩니다. |
| Height | DateField 컴포넌트의 contentheight 속성값이 적용됩니다.  contentheight 속성값이 없으면 DateField 컴포넌트의 Height 값에서 label 컨트롤이 labelposition 속성값으로 설정한 위치에 표시되기 위해 확보된 Height 값과 helpertext 컨트롤이 표시되기 위해 확보된 Height 값을 뺀 값이 적용됩니다. |
| dropbutton control | |
| Left | DateField 컴포넌트의 Width에서 dropbutton 컨트롤의 Width를 뺀 값이 적용됩니다. |
| Top | 0으로 적용됩니다. |
| Width | iconbuttonsize 속성 값이 적용됩니다. iconbuttonsize 속성값이 없으면 DateField 컴포넌트의 Height 가 적용됩니다. |
| Height | iconbuttonsize 속성 값이 적용됩니다. iconbuttonsize 속성값이 없으면 DateField 컴포넌트의 Height 가 적용됩니다. |
| datetimepicker control | |
| Left | DateField 컴포넌트의 left 속성 값이 적용됩니다. |
| Top | DateField 컴포넌트의 bottom 값에서 Helpertext 영역의 높이를 뺀 값이 적용됩니다. |
| Width | popupsize 속성 값의 값이 적용됩니다.  popupsize 속성값이 없으면 220으로 적용됩니다.  headline이 존재하는 경우 headline의 너비가 포함됩니다.  popuptype 속성값이 "mobile"인 경우, 컴포넌트 내부의 정해진 값만큼 너비가 포함됩니다. |
| Height | popupsize 속성 값의 값이 적용됩니다.  popupsize 속성값이 없으면 250으로 적용됩니다.  headline이 존재하는 경우, headline의 높이가 포함됩니다.  closebutton이 존재하는 경우, closebutton의 높이가 포함됩니다.  popuptype 속성값이 "mobile"인 경우, 컴포넌트 내부의 정해진 값만큼 높이가 포함됩니다. |

## 89.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| DateTimePicker 열기 | Alt + 아래방향키 또는 Option + 아래방향키 | 팝업달력(DateTimePicker)이 표시됩니다. |
| DateTimePicker 닫기 | Esc | 열려있는 팝업달력(DateTimePicker)을 닫습니다. |
| 날짜/시간 변경 | 상하방향키 | 선택영역의 년/월/일/시/분/초 값을 변경합니다.  년/월/일/시/분/초 가 가질 수 있는 최저/최고값에 도달하면 반대값(최저면 최고값, 최고면 최저값)으로 변경됩니다. |
| 날짜/시간 결정 | Enter | Dataset 오브젝트 column에 value가 binding 되어 있는 경우, value를 해당 Dataset 오브젝트 column에 반영합니다. |
| 날짜/시간 이동 | 좌우방향키 | DateField에서 년, 월, 일, 시, 분, 초 영역으로 좌우이동합니다. |
| 날짜/시간 삭제 | Del | 선택영역의 값을 삭제합니다. |
| 날짜/시간 삭제 | BackSpace | 선택영역의 값을 삭제하고, 이전 영역으로 이동합니다. |

## 89.1.5생성자

```
DateField.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | DateField 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | DateField 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 DateField 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 DateField 의 left 가 결정됩니다. |
| vTop | String, Number | DateField 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 DateField 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 DateField 의 top 이 결정됩니다. |
| vWidth | String, Number | DateField 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 DateField 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 DateField 의 width 가 결정됩니다. |
| vHeight | String, Number | DateField 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 DateField 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 DateField 의 height 가 결정됩니다. |
| vRight | String, Number | DateField 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 DateField 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 DateField 의 right 가 결정됩니다. |
| vBottom | String, Number | DateField 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 DateField 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 DateField 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | DateField 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | DateField 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | DateField 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | DateField 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new DateField();  objComp.init( "DateField00", 30, 120, 196, 46 ); objComp.init( "DateField00", 30, 120, 196, 46, null, null ); objComp.init( "DateField00", null, null, 300, "400px", "80%", 300 ); objComp.init( "DateField00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "DateField00", "DateField22:10", 300, null, null, "DateField33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objDateField = new DateField();   objDateField.init("DateField", 30, 120, 196, 46, null, null); objDateField.init("DateField", null, null, 300, "400px", "80%", 300); or var objDateField = new DateField("DateField", 30, 120, 196, 46, null, null); var objDateField = new DateField("DateField", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("DateField", objDateField);    // Insert Object to Parent Form   this.insertChild(1, "DateField", objDateField);    // Remove Object form Parent Form   this.removeChild("DateField");    // Show Object   objDateField.show();    // Destroy Object   objDateField.destroy();  objDateField = null; ``` |

## 89.1.6Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| nulltext | userstatus | 컴포넌트 값이 null 일 경우 표시될 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 89.1.7Control

| Name | | TypeName |
| --- | --- | --- |
| label | | nexacro.FieldBaseLabelControl |
| helpertext | | nexacro.FieldBaseTextControl |
| nulltext | | nexacro.FlexTextControl |
| box | | nexacro.DateFieldBoxControl |
| datetimepicker | | nexacro.DateRangePicker |
