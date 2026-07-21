# 68.Static

68.1개요

68.2속성

68.3메서드

68.4이벤트

```
Static은 화면에 일정한 문자열을 출력하기 위해 사용하는 컴포넌트입니다.

Static으로 출력할 문자열은 Dataset과 바인딩되어 수시로 변하게 하거나, 고정적으로 출력하게 할 수도 있습니다.
또한, expr 속성을 사용해 다른 값을 통해 계산된 값을 출력 할 수도 있습니다.
Static은 1줄의 문자열 뿐만 아니라 여러줄로 된 문자열도 표현이 가능합니다.
```

## 68.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- Static에 설정된 값은 화면에 출력되는 임시적인 값으로 바인딩된 Dataset에 반영되지 않습니다.

- Static은 바인딩되어 있는 경우 바인딩된 Dataset이 변경되면 다시 그리지만,
  그외의 경우에는 expr 속성을 사용해도 다시 그리게 될 때 까지 화면을 갱신하지는 않습니다.
```

## 68.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_24_Static1.png?raw=true)

## 68.1.3컴포넌트, 내부 컨텐츠 크기

```
Static 컴포넌트의 크기를 결정하는 기준입니다.

- Static 컴포넌트의 fittocontents 속성값이 "none" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| Static Component | |
| Width | Static 컴포넌트의 width 속성값이 적용됩니다.  컴포넌트에 표시되는 텍스트의 길이 보다 Width 가 작을 경우 텍스트가 잘려서 표시됩니다. |
| Height | Static 컴포넌트의 height 속성값이 적용됩니다.  컴포넌트에 표시되는 텍스트의 높이 보다 Height 가 작을 경우 텍스트가 잘려서 표시됩니다. |

```
- Static 컴포넌트의 fittocontents 속성값이 "width" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| Static Component | |
| Width | 텍스트 길이에 맞게 계산된 값이 적용됩니다.  텍스트가 여러줄 일 경우 가장 긴 줄을 기준으로 계산됩니다. |

```
- Static 컴포넌트의 fittocontents 속성값이 "height" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| Static Component | |
| Height | 텍스트 크기에 맞게 계산된 값이 적용됩니다.  텍스트가 여러줄 일 경우 전체 줄의 높이가 계산됩니다. |

```
- Static 컴포넌트의 fittocontents 속성값이 "both" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| Static Component | |
| Width | 텍스트 길이에 맞게 계산된 값이 적용됩니다.  텍스트가 여러줄 일 경우 가장 긴 줄을 기준으로 계산됩니다. |
| Height | 텍스트 크기에 맞게 계산된 값이 적용됩니다.  텍스트가 여러줄 일 경우 전체 줄의 높이가 계산됩니다. |

## 68.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | WRE 실행 시 다음 조건이 만족하는 경우 Tab키 입력 시 Static 컴포넌트 내 링크 텍스트 영역으로 포커스가 이동합니다.  - usedecorate 속성값 true  - 링크(link) 타입으로 설정한 텍스트    링크 텍스트 영역이 여러 개인 경우에는 순서대로 이동하고 마지막 링크 텍스트 영역에서 Tab키 입력 시 Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |

## 68.1.5Accessibility Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | WRE 실행 시 다음 조건이 만족하는 경우 Tab키 입력 시 Static 컴포넌트 내 링크 텍스트 영역으로 포커스가 이동합니다.  - usedecorate 속성값 true  - 링크(link) 타입으로 설정한 텍스트    링크 텍스트 영역이 여러 개인 경우에는 순서대로 이동하고 마지막 링크 텍스트 영역에서 Tab키 입력 시 Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 선택상자 이동 | 상하방향키 | Tab Order 가 이전/다음인 컴포넌트로 선택상자가 이동합니다.  스크린 리더에서 지원하는 경우 Static 컴포넌트 내 2줄 이상의 텍스트가 표시된 상태에서 방향키 입력 시 라인 단위로 선택상자가 이동합니다. |

## 68.1.6생성자

```
Static.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | Static 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | Static 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 Static 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Static 의 left 가 결정됩니다. |
| vTop | String, Number | Static 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 Static 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Static 의 top 이 결정됩니다. |
| vWidth | String, Number | Static 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Static 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Static 의 width 가 결정됩니다. |
| vHeight | String, Number | Static 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Static 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Static 의 height 가 결정됩니다. |
| vRight | String, Number | Static 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 Static 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Static 의 right 가 결정됩니다. |
| vBottom | String, Number | Static 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 Static 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Static 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | Static 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | Static 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | Static 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | Static 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new Static();  objComp.init( "Static00", 30, 120, 196, 46 ); objComp.init( "Static00", 30, 120, 196, 46, null, null ); objComp.init( "Static00", null, null, 300, "400px", "80%", 300 ); objComp.init( "Static00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "Static00", "Static22:10", 300, null, null, "Static33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objStatic = new Static();   objStatic.init("Static", 30, 120, 196, 46, null, null); objStatic.init("Static", null, null, 300, "400px", "80%", 300); or var objStatic = new Static("Static", 30, 120, 196, 46, null, null); var objStatic = new Static("Static", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("Static", objStatic);    // Insert Object to Parent Form   this.insertChild(1, "Static", objStatic);    // Remove Object form Parent Form   this.removeChild("Static");    // Show Object   objStatic.show();    // Destroy Object   objStatic.destroy();  objStatic = null; ``` |

## 68.1.7Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |
