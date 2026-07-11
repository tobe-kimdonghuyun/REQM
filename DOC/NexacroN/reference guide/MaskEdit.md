# 50.MaskEdit

50.1개요

50.2속성

50.3메서드

50.4이벤트

```
MaskEdit 는 정해진 규격에 따라 입력될 필요가 있는 자료가 있을 때 사용하는 컴포넌트입니다.
```

## 50.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- MaskEdit 는 Number형과 String형으로 구분됩니다.
  Number형으로 사용되는 MaskEdit는 규격화된 실수를 입력하기 위해 사용됩니다.
  String형 MaskEdit는 규격화된 코드값등을 입력하기위해 사용됩니다.

- MaskEdit에 의해 입력된 값은 Bind된 Dataset의 1개의 값과 연동할 수 있습니다.
  마우스로 Select 동작이 진행중일 때는 입력이 불가능합니다.
```

## 50.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_15_MaskEdit1.png?raw=true)

## 50.1.3컴포넌트, 내부 컨텐츠 크기

```
MaskEdit 의 크기를 결정하는 기준입니다.
```

|  |  |
| --- | --- |
| MaskEdit Component | |
| Width | MaskEdit 컴포넌트의 width 속성값이 적용됩니다.  컴포넌트에 표시되는 텍스트의 길이 보다 Width 가 작을 경우 텍스트가 잘려서 표시됩니다. |
| Height | MaskEdit 컴포넌트의 height 속성값이 적용됩니다.  컴포넌트에 표시되는 텍스트의 높이 보다 Height 가 작을 경우 텍스트가 잘려서 표시됩니다. |

## 50.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 캐럿 이동 | 좌우방향키 | 캐럿이 표시되고 있을 때 캐럿이 좌/우 방향으로 이동됩니다. |
| 텍스트 선택 | Shift + 좌우방향키 | 캐럿이 표시되고 있을 때 입력된 텍스트가 좌/우 방향으로 선택됩니다. |

## 50.1.5Accessibility Key Action

```
접근성 기능이 활성화 되어 있을 때 적용되는 키 액션입니다.
```

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 선택상자 이동 | 상하방향키 | Tab Order 가 이전/다음인 컴포넌트로 선택상자가 이동합니다. |
| 캐럿 이동 | 좌우방향키 | 캐럿이 표시되고 있을 때 캐럿이 좌/우 방향으로 이동됩니다. |
| 텍스트 선택 | Shift + 좌우방향키 | 캐럿이 표시되고 있을 때 입력된 텍스트가 좌/우 방향으로 선택됩니다. |

## 50.1.6생성자

```
MaskEdit.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | MaskEdit 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | MaskEdit 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 MaskEdit 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 MaskEdit 의 left 가 결정됩니다. |
| vTop | String, Number | MaskEdit 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 MaskEdit 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 MaskEdit 의 top 이 결정됩니다. |
| vWidth | String, Number | MaskEdit 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 MaskEdit 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 MaskEdit 의 width 가 결정됩니다. |
| vHeight | String, Number | MaskEdit 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 MaskEdit 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 MaskEdit 의 height 가 결정됩니다. |
| vRight | String, Number | MaskEdit 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 MaskEdit 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 MaskEdit 의 right 가 결정됩니다. |
| vBottom | String, Number | MaskEdit 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 MaskEdit 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 MaskEdit 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | MaskEdit 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | MaskEdit 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | MaskEdit 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | MaskEdit 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new MaskEdit();  objComp.init( "MaskEdit00", 30, 120, 196, 46 ); objComp.init( "MaskEdit00", 30, 120, 196, 46, null, null ); objComp.init( "MaskEdit00", null, null, 300, "400px", "80%", 300 ); objComp.init( "MaskEdit00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "MaskEdit00", "MaskEdit22:10", 300, null, null, "MaskEdit33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objMaskEdit = new MaskEdit();   objMaskEdit.init("MaskEdit", 30, 120, 196, 46, null, null); objMaskEdit.init("MaskEdit", null, null, 300, "400px", "80%", 300); or var objMaskEdit = new MaskEdit("MaskEdit", 30, 120, 196, 46, null, null); var objMaskEdit = new MaskEdit("MaskEdit", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("MaskEdit", objMaskEdit);    // Insert Object to Parent Form   this.insertChild(1, "MaskEdit", objMaskEdit);    // Remove Object form Parent Form   this.removeChild("MaskEdit");    // Show Object   objMaskEdit.show();    // Destroy Object   objMaskEdit.destroy();  objMaskEdit = null; ``` |

## 50.1.7Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| nulltext | userstatus | 컴포넌트 값이 null 일 경우 표시될 상태 |
| invalidtext | userstatus | 유효하지 않은 값이 바인드 되거나 설정된 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |
