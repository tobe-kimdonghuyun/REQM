# 69.TextArea

69.1개요

69.2속성

69.3메서드

69.4이벤트

```
TextArea 는 사용자로부터 여러줄로 된 문자열을 입력받기 위해 사용되는 컴포넌트입니다.
```

## 69.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- 사용자에게 문자열을 출력하기 위한 용도로 사용할 수 있습니다.

- TextArea 에서 LF("\n") 문자는 줄넘김으로 처리됩니다.
   TextArea 에서 텍스트 입력 시 Enter 키는 줄넘김으로 처리됩니다.

- TextArea 는 입력중인 값에 대해 Undo/Redo 가능을 사용할 수 있습니다.

- 1 줄로 된 문자열을 입력 받고자 한다면 Edit 를 사용하여야 합니다.

- 특정한 형식의 문자나 숫자를 입력받고자 한다면 MaskEdit 를 사용하여야 합니다.

- 일본어 IME 로 일본어 입력(조합중이고 확정이 안된 상태)중이면 붙여넣기 기능이 동작하지 않습니다.


◆ Control 표시 참고

- scrollbartype 속성값 또는 실행 환경(Desktop, Mobile)에 따라 스크롤바 영역에 표시되는 컨트롤이 달라집니다. 조건에 따라 ScrollBarControl 또는 ScrollIndicatorControl 중 하나가 적용됩니다.
  도움말에서 Structure 항목의 이미지는 모든 조건에 동시에 표시할 수 없어 ScrollBarControl 기준으로만 작성된 점을 참고해주세요.
```

## 69.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_26_TaxtArea1.png?raw=true)

## 69.1.3컴포넌트, 내부 컨텐츠 크기

```
TextArea 의 크기를 결정하는 기준입니다.
```

|  |  |
| --- | --- |
| TextArea Component     * TextArea 의 Width 가 텍스트의 길이가 가장 긴 라인의 Width 보다 작을 경우 hscrollbar 가 표시됩니다. * TextArea 의 Height 가 텍스트 라인의 Height 합계보다 작을 경우 vscrollbar 가 표시됩니다. | |
| Width | TextArea 컴포넌트의 width 속성값이 적용됩니다.  컴포넌트에 표시되는 텍스트의 길이 보다 Width 가 작을 경우 텍스트가 잘려서 표시됩니다. |
| Height | TextArea 컴포넌트의 height 속성값이 적용됩니다.  컴포넌트에 표시되는 텍스트 라인의 높이 보다 Height 가 작을 경우 텍스트가 잘려서 표시됩니다. |

## 69.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 캐럿 이동 | 방향키 | 캐럿이 표시되고 있을 때 캐럿이 입력된 방향키 방향으로 이동됩니다. |
| 텍스트 선택 | Shift + 방향키 | 캐럿이 표시되고 있을 때 텍스트가 입력된 방향키 방향으로 선택됩니다. |
| 스크롤 이동 | Ctrl + 방향키 | TextArea 에 스크롤이 있을 때 입력된 방향키 방향으로 스크롤이 이동합니다 |

## 69.1.5Accessibility Key Action

```
접근성 기능이 활성화 되어 있을 때 적용되는 키 액션입니다.
```

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 선택상자 이동 | 상하방향키 | 캐럿이 첫번째 라인에 있을 때 위방향키 입력 시 Tab Order 가 이전인 컴포넌트로 선택상자가 이동합니다.  캐럿이 마지막 라인에 있을 때 아래방향키 입력 시 Tab Order 가 다음인 컴포넌트로 선택상자가 이동합니다. |
| 캐럿 이동 | 상하방향키 | 캐럿이 표시되고 있을 때 캐럿이 입력된 방향키 방향으로 이동됩니다.    캐럿이 첫번째 또는 마지막 라인에 위치해 있을 때 위/아래 방향키를 입력하면 선택상자가 이동됩니다. |
| 캐럿 이동 | 좌우방향키 | 캐럿이 표시되고 있을 때 캐럿이 입력된 방향키 방향으로 이동됩니다. |
| 텍스트 선택 | Shift + 방향키 | 캐럿이 표시되고 있을 때 텍스트가 입력된 방향키 방향으로 선택됩니다. |
| 스크롤 이동 | Ctrl + 방향키 | TextArea 에 스크롤이 있을 때 입력된 방향키 방향으로 스크롤이 이동합니다 |

## 69.1.6생성자

```
TextArea.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | TextArea 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | TextArea 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 TextArea 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 TextArea 의 left 가 결정됩니다. |
| vTop | String, Number | TextArea 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 TextArea 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 TextArea 의 top 이 결정됩니다. |
| vWidth | String, Number | TextArea 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 TextArea 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 TextArea 의 width 가 결정됩니다. |
| vHeight | String, Number | TextArea 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 TextArea 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 TextArea 의 height 가 결정됩니다. |
| vRight | String, Number | TextArea 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 TextArea 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 TextArea 의 right 가 결정됩니다. |
| vBottom | String, Number | TextArea 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 TextArea 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 TextArea 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | TextArea 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | TextArea 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | TextArea 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | TextArea 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new TextArea();  objComp.init( "TextArea00", 30, 120, 196, 46 ); objComp.init( "TextArea00", 30, 120, 196, 46, null, null ); objComp.init( "TextArea00", null, null, 300, "400px", "80%", 300 ); objComp.init( "TextArea00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "TextArea00", "TextArea22:10", 300, null, null, "TextArea33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objTextArea = new TextArea();   objTextArea.init("TextArea", 30, 120, 196, 46, null, null); objTextArea.init("TextArea", null, null, 300, "400px", "80%", 300); or var objTextArea = new TextArea("TextArea", 30, 120, 196, 46, null, null); var objTextArea = new TextArea("TextArea", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("TextArea", objTextArea);    // Insert Object to Parent Form   this.insertChild(1, "TextArea", objTextArea);    // Remove Object form Parent Form   this.removeChild("TextArea");    // Show Object   objTextArea.show();    // Destroy Object   objTextArea.destroy();  objTextArea = null; ``` |

## 69.1.7Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| nulltext | userstatus | 컴포넌트 값이 null 일 경우 표시될 상태 |
| readonly | status | 컴포넌트가 읽기 전용인 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 69.1.8Control

| Name | | TypeName |
| --- | --- | --- |
| vscrollbar | | nexacro.ScrollBarControl |
| hscrollbar | | nexacro.ScrollBarControl |
| hscrollindicator | | nexacro.ScrollIndicatorControl |
| vscrollindicator | | nexacro.ScrollIndicatorControl |
