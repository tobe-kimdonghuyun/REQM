# 66.Sketch

66.1개요

66.2속성

66.3메서드

66.4이벤트

```
간단한 도형이나 서명등을 사용자가 직접 화면에 그릴 수 있는 컴포넌트입니다.
```

## 66.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

## 66.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_22_Sketch1.png?raw=true)

## 66.1.3생성자

```
Sketch.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | Sketch 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | Sketch 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 Sketch 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Sketch 의 left 가 결정됩니다. |
| vTop | String, Number | Sketch 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 Sketch 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Sketch 의 top 이 결정됩니다. |
| vWidth | String, Number | Sketch 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Sketch 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Sketch 의 width 가 결정됩니다. |
| vHeight | String, Number | Sketch 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Sketch 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Sketch 의 height 가 결정됩니다. |
| vRight | String, Number | Sketch 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 Sketch 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Sketch 의 right 가 결정됩니다. |
| vBottom | String, Number | Sketch 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 Sketch 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Sketch 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | Sketch 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | Sketch 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | Sketch 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | Sketch 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new Sketch();  objComp.init( "Sketch00", 30, 120, 196, 46 ); objComp.init( "Sketch00", 30, 120, 196, 46, null, null ); objComp.init( "Sketch00", null, null, 300, "400px", "80%", 300 ); objComp.init( "Sketch00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "Sketch00", "Sketch22:10", 300, null, null, "Sketch33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objSketch = new Sketch();   objSketch.init("Sketch", 30, 120, 196, 46, null, null); objSketch.init("Sketch", null, null, 300, "400px", "80%", 300); or var objSketch = new Sketch("Sketch", 30, 120, 196, 46, null, null); var objSketch = new Sketch("Sketch", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("Sketch", objSketch);    // Insert Object to Parent Form   this.insertChild(1, "Sketch", objSketch);    // Remove Object form Parent Form   this.removeChild("Sketch");    // Show Object   objSketch.show();    // Destroy Object   objSketch.destroy();  objSketch = null; ``` |

## 66.1.4Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 66.1.5Control

| Name | | TypeName |
| --- | --- | --- |
| sketchtextarea | | nexacro.TextArea |
