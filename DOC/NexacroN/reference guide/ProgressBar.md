# 62.ProgressBar

62.1개요

62.2속성

62.3메서드

62.4이벤트

```
ProgressBar는 어떤 작업의 진행상태를 점진적인 Bar의 형태로 표현하고자 할때 사용하는 컴포넌트입니다.

ProgressBar 는 사각형 모양의 빈영역에 진행상태를 의미하는 영역만큼 채우는 형태로 표현됩니다. 
채워지는 방향은 왼쪽에서 오른쪽으로, 또는 오른쪽에서 왼쪽으로 진행되며, 채워지는 모양은 연속된 형태 또는 Block형 형태의 2가지 형태를 지정할 수 있습니다.
```

## 62.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- ProgressBar의 비율이 되는 최소값과 최대값을 min, max 속성으로 사용자가 직접 지정할수 있습니다.
  시작값과 마지막값은 ProgressBar가 진행중에도 수정될수 있습니다.

- ProgressBar의 진행은 stepIt() 메소드를 직접 호출해 실행되며, 진행단계의 증가값은 step 속성에 직접 지정할수 있습니다.
  진행시 채워지는 모양은 smooth 속성을 지정해 연속적 형태/Block형 형태로 선택할 수 있습니다.
  채워지는 방향은 왼쪽에서 오른쪽 또는 오른쪽에서 왼쪽으로 지정할 수 있습니다.

- ProgressBar 에 사용되는 값은 0 부터 2147483647 사이의 정수값을 사용할수 있습니다.
```

## 62.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_20_ProgressBar1.png?raw=true)

## 62.1.3Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |

## 62.1.4Accessibility Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 선택상자 이동 | 상하방향키 | Tab Order 가 이전/다음인 컴포넌트로 선택상자가 이동합니다. |

## 62.1.5생성자

```
ProgressBar.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | ProgressBar 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | ProgressBar 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 ProgressBar 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 ProgressBar 의 left 가 결정됩니다. |
| vTop | String, Number | ProgressBar 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 ProgressBar 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 ProgressBar 의 top 이 결정됩니다. |
| vWidth | String, Number | ProgressBar 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 ProgressBar 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 ProgressBar 의 width 가 결정됩니다. |
| vHeight | String, Number | ProgressBar 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 ProgressBar 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 ProgressBar 의 height 가 결정됩니다. |
| vRight | String, Number | ProgressBar 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 ProgressBar 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 ProgressBar 의 right 가 결정됩니다. |
| vBottom | String, Number | ProgressBar 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 ProgressBar 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 ProgressBar 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | ProgressBar 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | ProgressBar 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | ProgressBar 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | ProgressBar 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new ProgressBar();  objComp.init( "ProgressBar00", 30, 120, 196, 46 ); objComp.init( "ProgressBar00", 30, 120, 196, 46, null, null ); objComp.init( "ProgressBar00", null, null, 300, "400px", "80%", 300 ); objComp.init( "ProgressBar00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "ProgressBar00", "ProgressBar22:10", 300, null, null, "ProgressBar33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objProgressBar = new ProgressBar();   objProgressBar.init("ProgressBar", 30, 120, 196, 46, null, null); objProgressBar.init("ProgressBar", null, null, 300, "400px", "80%", 300); or var objProgressBar = new ProgressBar("ProgressBar", 30, 120, 196, 46, null, null); var objProgressBar = new ProgressBar("ProgressBar", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("ProgressBar", objProgressBar);    // Insert Object to Parent Form   this.insertChild(1, "ProgressBar", objProgressBar);    // Remove Object form Parent Form   this.removeChild("ProgressBar");    // Show Object   objProgressBar.show();    // Destroy Object   objProgressBar.destroy();  objProgressBar = null; ``` |

## 62.1.6Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 62.1.7Control

| Name | | TypeName |
| --- | --- | --- |
| progressstartcap | | nexacro.IconControl |
| progressendcap | | nexacro.IconControl |
| progressbaritem | | nexacro.IconControl |
| progressbartext | | nexacro.Static |
