# 45.GroupBox

45.1개요

45.2속성

45.3메서드

45.4이벤트

```
GroupBox는 border 영역에 title을 입력하여 그룹 형태를 나타내는  컴포넌트입니다.
```

## 45.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

## 45.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_12_GroupBox1.png?raw=true)

## 45.1.3컴포넌트, 내부 컨텐츠 크기

```
GroupBox 컴포넌트와 내부 컨텐츠 크기를 결정하는 기준입니다.
```

|  |  |
| --- | --- |
| GroupBox Component | |
| Width | GroupBox 컴포넌트의 width 속성값이 적용됩니다.  내부 컨텐츠의 Width 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
| Height | GroupBox 컴포넌트의 height 속성값이 적용됩니다.  내부 컨텐츠의 Height 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
| groupboxtitle Control | |
| Left | GroupBox 컴포넌트의 titlealign 속성값과 titlegap 속성값에 따라 계산된 값이 적용됩니다. |
| Top | GroupBox 컴포넌트의 titlealign 속성값과 titlegap 속성값에 따라 계산된 값이 적용됩니다. |
| Width | groupboxtitle 컨트롤의 -nexa-icon-position 속성값이 "left","right" 이면 icon 의 Width 에 text 의 Width 를 더한 값이 적용됩니다.  groupboxtitle 컨트롤의 -nexa-icon-position 속성값이 "top","bottom" 이면 icon 의 Width 와 text 의 Width 중 큰 값이 적용됩니다. |
| Height | groupboxtitle 컨트롤의 -nexa-icon-position 속성값이 "left","right" 이면 icon 의 Height 와 text 의 Height 중 큰 값이 적용됩니다.  groupboxtitle 컨트롤의 -nexa-icon-position 속성값이 "top","bottom" 이면 icon 의 Height 에 text 의 Height 를 더한 값이 적용됩니다. |
| icon | |
| Left | -nexa-icon-position,-nexa-text-align,-nexa-vertical-align 속성값에 따라 계산된 값이 적용됩니다. |
| Top | -nexa-icon-position,-nexa-text-align,-nexa-vertical-align 속성값에 따라 계산된 값이 적용됩니다. |
| Width | 아이콘 이미지의 너비가 적용됩니다. |
| Height | 아이콘 이미지의 높이가 적용됩니다. |
| text | |
| Left | -nexa-icon-position,-nexa-text-align,-nexa-vertical-align 속성값에 따라 계산된 값이 적용됩니다. |
| Top | -nexa-icon-position,-nexa-text-align,-nexa-vertical-align 속성값에 따라 계산된 값이 적용됩니다. |
| Width | 텍스트 길이에 맞게 계산된 값이 적용됩니다. |
| Height | 텍스트 크기에 맞게 계산된 값이 적용됩니다. |
| groupboxcontents Control | |
| Left | GroupBox 컴포넌트의 titlealign 속성값이 "left" 로 시작한다면 groupboxtitle 컨트롤의 Width 를 2로 나눈값이 적용됩니다.  GroupBox 컴포넌트의 titlealign 속성값이 "left" 로 시작하지 않는다면 0 으로 적용됩니다. |
| Top | GroupBox 컴포넌트의 titlealign 속성값이 "top" 으로 시작한다면 groupboxtitle 컨트롤의 Height 를 2로 나눈값이 적용됩니다.  GroupBox 컴포넌트의 titlealign 속성값이 "top" 으로 시작하지 않는다면 0 으로 적용됩니다. |
| Width | GroupBox 컴포넌트의 titlealign 속성값이 "left" 또는 "right" 로 시작한다면 GroupBox 컴포넌트의 Width 에서 groupboxtitle 의 Width 를 2로 나눈값을 뺀 값이 적용됩니다.  GroupBox 컴포넌트의 titlealign 속성값이 "top" 또는 "bottom" 으로 시작한다면 GroupBox 컴포넌트의 Width 속성값이 적용됩니다. |
| Height | GroupBox 컴포넌트의 titlealign 속성값이 "top" 또는 "bottom" 으로 시작한다면 GroupBox 컴포넌트의 Height 에서 groupboxtitle 의 Height 를 2로 나눈값을 뺀 값이 적용됩니다.  GroupBox 컴포넌트의 titlealign 속성값이 "left" 또는 "right" 로 시작한다면 GroupBox 컴포넌트의 Height 속성값이 적용됩니다. |

## 45.1.4Accessibility Key Action

| Action | Key | Description |
| --- | --- | --- |
| 선택상자 이동 | 상하방향키 | Tab Order 가 이전/다음인 컴포넌트로 선택상자가 이동합니다. |

## 45.1.5생성자

```
GroupBox.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | GroupBox 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | GroupBox 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 GroupBox 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 GroupBox 의 left 가 결정됩니다. |
| vTop | String, Number | GroupBox 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 GroupBox 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 GroupBox 의 top 이 결정됩니다. |
| vWidth | String, Number | GroupBox 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 GroupBox 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 GroupBox 의 width 가 결정됩니다. |
| vHeight | String, Number | GroupBox 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 GroupBox 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 GroupBox 의 height 가 결정됩니다. |
| vRight | String, Number | GroupBox 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 GroupBox 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 GroupBox 의 right 가 결정됩니다. |
| vBottom | String, Number | GroupBox 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 GroupBox 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 GroupBox 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | GroupBox 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | GroupBox 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | GroupBox 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | GroupBox 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new GroupBox();  objComp.init( "GroupBox00", 30, 120, 196, 46 ); objComp.init( "GroupBox00", 30, 120, 196, 46, null, null ); objComp.init( "GroupBox00", null, null, 300, "400px", "80%", 300 ); objComp.init( "GroupBox00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "GroupBox00", "GroupBox22:10", 300, null, null, "GroupBox33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objGroupBox = new GroupBox();   objGroupBox.init("GroupBox", 30, 120, 196, 46, null, null); objGroupBox.init("GroupBox", null, null, 300, "400px", "80%", 300); or var objGroupBox = new GroupBox("GroupBox", 30, 120, 196, 46, null, null); var objGroupBox = new GroupBox("GroupBox", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("GroupBox", objGroupBox);    // Insert Object to Parent Form   this.insertChild(1, "GroupBox", objGroupBox);    // Remove Object form Parent Form   this.removeChild("GroupBox");    // Show Object   objGroupBox.show();    // Destroy Object   objGroupBox.destroy();  objGroupBox = null; ``` |

## 45.1.6Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 45.1.7Control

| Name | | TypeName |
| --- | --- | --- |
| groupboxtitle | | nexacro.IconTextControl |
| groupboxcontents | | nexacro.Static |
