# 67.Spin

67.1개요

67.2속성

67.3메서드

67.4이벤트

```
Spin은 일정범위 내의 숫자값을 입력하기 위해 사용하는 컴포넌트입니다.
```

## 67.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- Spin의 value값은 숫자형이 아닌 문자열 형 이므로 수학 연산을 위해서는 우선 숫자로 형변환을 해야 합니다.

- Spin은 정수 뿐만 아니라 소숫점 이하의 자리수 까지 입력할 수 있습니다.

- Spin을 이용하면 키의 위쪽 화살표나 아랫쪽 화살표로 숫자를 증감 시킬 수 있습니다.

- Spin은 바인딩된 Dataset의 1개의 값과 연동 할 수 있습니다.
```

## 67.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_23_Spin3.png?raw=true)

## 67.1.3컴포넌트, 내부 컨텐츠 크기

```
Spin 컴포넌트와 내부 컨텐츠 크기를 결정하는 기준입니다.
```

|  |  |
| --- | --- |
| Spin Component | |
| Width | Spin 컴포넌트의 width 속성값이 적용됩니다.  내부 컨텐츠의 Width 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
| Height | Spin 컴포넌트의 height 속성값이 적용됩니다.  내부 컨텐츠의 Height 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다. |
| spinedit Control     * type 속성값이 "spinonly" 이면 spinedit 컨트롤은 표시되지 않습니다. | |
| Left | buttonposition 속성값이 "left" 이면 spinupbutton 컨트롤의 Width 가 적용됩니다.  buttonposition 속성값이 "right" 이면 0 으로 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | Spin 컴포넌트의 Width 에서 spinupbutton 컨트롤의 Width 를 뺀 값이 적용됩니다. |
| Height | Spin 컴포넌트의 Height 가 적용됩니다. |
| spinupbutton Control | |
| Left | buttonposition 속성값이 "left" 이면 0 으로 적용됩니다.  buttonposition 속성값이 "right" 이면 Spin 컴포넌트의 Width 에서 spinupbutton 컨트롤의 Width 를 뺀 값이 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | buttonsize 속성값이 적용됩니다.  buttonsize 속성값이 없으면 Spin 컴포넌트의 Height 가 적용됩니다. |
| Height | Spin 컴포넌트의 Height 를 2로 나눈 몫이 적용됩니다. |
| spindownbutton Control | |
| Left | buttonposition 속성값이 "left" 이면 0 으로 적용됩니다.  buttonposition 속성값이 "right" 이면 Spin 컴포넌트의 Width 에서 spindownbutton 컨트롤의 Width 를 뺀 값이 적용됩니다. |
| Top | Spin 컴포넌트의 Height 에서 spinupbutton 컨트롤의 Height 를 뺀 값이 적용됩니다. |
| Width | buttonsize 속성값이 적용됩니다.  buttonsize 속성값이 없으면 Spin 컴포넌트의 Height 가 적용됩니다. |
| Height | Spin 컴포넌트의 Height 를 2로 나눈 몫이 적용됩니다. |

## 67.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 값 변경 | 상하방향키 | Spin 의 value 값을 increment 속성값만큼 증가 또는 감소 시킵니다. |

## 67.1.5Accessibility Key Action

```
접근성 기능이 활성화 되어 있을 때 적용되는 키 액션입니다.
```

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 선택상자 이동 | 상하방향키 | Tab Order 가 이전/다음인 컴포넌트로 선택상자가 이동합니다. |
| 값 변경 | Ctrl + 상하방향키 | Spin 의 value 값을 increment 속성값만큼 증가 또는 감소 시킵니다. |

## 67.1.6생성자

```
Spin.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | Spin 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | Spin 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 Spin 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Spin 의 left 가 결정됩니다. |
| vTop | String, Number | Spin 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 Spin 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Spin 의 top 이 결정됩니다. |
| vWidth | String, Number | Spin 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Spin 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Spin 의 width 가 결정됩니다. |
| vHeight | String, Number | Spin 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Spin 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Spin 의 height 가 결정됩니다. |
| vRight | String, Number | Spin 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 Spin 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Spin 의 right 가 결정됩니다. |
| vBottom | String, Number | Spin 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 Spin 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Spin 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | Spin 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | Spin 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | Spin 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | Spin 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new Spin();  objComp.init( "Spin00", 30, 120, 196, 46 ); objComp.init( "Spin00", 30, 120, 196, 46, null, null ); objComp.init( "Spin00", null, null, 300, "400px", "80%", 300 ); objComp.init( "Spin00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "Spin00", "Spin22:10", 300, null, null, "Spin33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objSpin = new Spin();   objSpin.init("Spin", 30, 120, 196, 46, null, null); objSpin.init("Spin", null, null, 300, "400px", "80%", 300); or var objSpin = new Spin("Spin", 30, 120, 196, 46, null, null); var objSpin = new Spin("Spin", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("Spin", objSpin);    // Insert Object to Parent Form   this.insertChild(1, "Spin", objSpin);    // Remove Object form Parent Form   this.removeChild("Spin");    // Show Object   objSpin.show();    // Destroy Object   objSpin.destroy();  objSpin = null; ``` |

## 67.1.7Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| invalidtext | userstatus | 유효하지 않은 값이 바인드 되거나 설정된 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 67.1.8Control

| Name | | TypeName |
| --- | --- | --- |
| spinedit | | nexacro.MaskEdit |
| spinupbutton | | nexacro.Button |
| spindownbutton | | nexacro.Button |
