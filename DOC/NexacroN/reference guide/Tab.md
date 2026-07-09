# 97.Tab

97.1개요

97.2속성

97.3메서드

97.4이벤트

```
Tab은 여러개의 TabPageControl 을 추가해서 보여주는 컴포넌트입니다.

Tab은 좁은 화면에 많은 수의 입출력 컴포넌트가 배치될 필요가 있을 때 사용하면 좋습니다.
Tab안의 TabPageControl 은 Tab의 Contents로 구성되거나, Form을 연결해서 사용하게 됩니다.
```

## 97.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- Tab을 4~5단계의 다단으로 사용할 경우 화면의 로딩 속도가 느려질 수 있으므로 Tab은 2~3단계 이내로 중첩해 사용하시기 바랍니다.

- "Control" 키와 조합되어 사용되는 Key Action 은 usecontrolkey 속성을 설정하여야 합니다.
```

## 97.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacroN_25_Tab1.png?raw=true)

## 97.1.3컴포넌트, 내부 컨텐츠 크기

```
Tab 컴포넌트의 크기를 결정하는 기준입니다.

- Tab 컴포넌트의 tabposition 속성값이 "top" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| Tab Component | |
| Width | Tab 컴포넌트의 width 속성값이 적용됩니다. |
| Height | Tab 컴포넌트의 height 속성값이 적용됩니다. |
| tabbuttonitem Control     * multiline, tabjustify, showextrabutton, tabindex 속성값과 TabPage 의 갯수에 따라 표시되는 tabbuttonitem 컨트롤이 결정됩니다. | |
| Left | Tab 컴포넌트의 Width 와 multiline, tabjustify, showextrabutton, tabindex 속성값, TabPage 의 갯수를 고려하여 계산된 값이 적용됩니다. |
| Top | 0 으로 적용됩니다.  Tab 컴포넌트의 multiline 속성값이 "true" 이면 각 라인별로 tabbuttonitem 컨트롤의 Height 를 더한 값이 적용됩니다. |
| Width | tabbuttonitemtext 컨트롤의 Width 와 extrabutton 컨트롤의 Width 를 더한 값이 적용됩니다.  multiline 또는 tabjustify 속성값이 "true" 이면 Tab 컴포넌트의 Width 와 multiline, tabjustify, showextrabutton, tabindex 속성값, TabPage 의 갯수를 고려하여 계산된 값이 적용됩니다. |
| Height | tabbuttonitemtext 컨트롤의 Height 와 extrabutton 컨트롤의 Height 중 큰 값이 적용됩니다.  최종적으로 각 tabbuttonitem 컨트롤 중 제일 큰 Height 가 모든 tabbuttonitem 컨트롤의 Height 에 적용됩니다. |
| tabbuttonitemtext Control | |
| Left | 0 으로 적용됩니다. |
| Top | tabbuttonitem 컨트롤의 가운데에 정렬되게 계산되어 적용됩니다. |
| Width | 텍스트 길이에 맞게 계산된 값이 적용됩니다.  텍스트가 여러줄 일 경우 가장 긴 줄을 기준으로 계산됩니다. |
| Height | 텍스트 크기에 맞게 계산된 값이 적용됩니다.  텍스트가 여러줄 일 경우 전체 줄의 높이가 계산됩니다. |
| extrabutton Control     * showextrabutton 속성값에 의해 extrabutton 컨트롤의 표시 여부가 결정됩니다. | |
| Left | tabbuttonitem 컨트롤의 Width 에서 extrabutton 컨트롤의 Width 를 뺀 값이 적용됩니다. |
| Top | tabbuttonitem 컨트롤의 가운데에 정렬되게 계산되어 적용됩니다. |
| Width | 아이콘 이미지의 너비가 적용됩니다. |
| Height | 아이콘 이미지의 높이가 적용됩니다. |
| prevbutton Control     * tabjustify, multiline 속성값에 의해 prevbutton 컨트롤의 표시 여부가 결정됩니다. | |
| Left | nextbutton 컨트롤의 Left 에서 prevbutton 컨트롤의 Width 를 뺀 값이 적용됩니다. |
| Top | tabpage 컨트롤의 Top 에서 nextbutton 컨트롤의 Height 를 뺀 값이 적용됩니다. |
| Width | 아이콘 이미지의 너비가 적용됩니다. |
| Height | 아이콘 이미지의 높이가 적용됩니다. |
| nextbutton Control     * tabjustify, multiline 속성값에 의해 nextbutton 컨트롤의 표시 여부가 결정됩니다. | |
| Left | tabpage 컨트롤의 Width 에서 nextbutton 컨트롤의 Width 를 뺀 값이 적용됩니다. |
| Top | tabpage 컨트롤의 Top 에서 nextbutton 컨트롤의 Height 를 뺀 값이 적용됩니다. |
| Width | 아이콘 이미지의 너비가 적용됩니다. |
| Height | 아이콘 이미지의 높이가 적용됩니다. |
| tabpage Control     * tabpage 컨트롤에 속한 컴포넌트가 tabpage 컨트롤의 영역을 벗어난 경우 vscrollbar, hscrollbar 가 표시됩니다. | |
| Left | 0 으로 적용됩니다. |
| Top | tabbuttonitem 컨트롤의 Height 가 적용됩니다.  Tab 컴포넌트의 multiline 속성값이 "true" 이면 각 라인별로 tabbuttonitem 컨트롤의 Height 를 합산한 값이 적용됩니다. |
| Width | Tab 컴포넌트의 Width 가 적용됩니다. |
| Height | Tab 컴포넌트의 Height 에서 tabpage 컨트롤의 Top 을 뺀 값이 적용됩니다. |
| Form | |
| Left | 0 으로 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | tabpage 컨트롤의 Width 가 적용됩니다. |
| Height | tabpage 컨트롤의 Height 가 적용됩니다. |

```
- Tab 컴포넌트의 tabposition 속성값이 "bottom" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| Tab Component | |
| Width | Tab 컴포넌트의 width 속성값이 적용됩니다. |
| Height | Tab 컴포넌트의 height 속성값이 적용됩니다. |
| tabbuttonitem Control     * multiline, tabjustify, showextrabutton, tabindex 속성값과 TabPage 의 갯수에 따라 표시되는 tabbuttonitem 컨트롤이 결정됩니다. | |
| Top | tabpage 컨트롤의 Height 가 적용됩니다.  Tab 컴포넌트의 multiline 속성값이 "true" 이면 각 라인별로 tabbuttonitem 컨트롤의 Height 를 더한 값이 적용됩니다. |
| prevbutton Control     * tabjustify, multiline 속성값에 의해 prevbutton 컨트롤의 표시 여부가 결정됩니다. | |
| Top | tabpage 컨트롤의 Height 가 적용됩니다. |
| nextbutton Control     * tabjustify, multiline 속성값에 의해 nextbutton 컨트롤의 표시 여부가 결정됩니다. | |
| Top | tabpage 컨트롤의 Height 가 적용됩니다. |
| tabpage Control     * tabpage 컨트롤에 속한 컴포넌트가 tabpage 컨트롤의 영역을 벗어난 경우 vscrollbar, hscrollbar 가 표시됩니다. | |
| Top | 0 으로 적용됩니다. |
| Height | Tab 컴포넌트의 Height 에서 tabbuttonitem 컨트롤의 Height 를 뺀 값이 적용됩니다.  Tab 컴포넌트의 multiline 속성값이 "true" 이면 Tab 컴포넌트의 Height 에서 각 라인별로 tabbuttonitem 컨트롤의 Height 를 합산한 값을 뺀 값이 적용됩니다. |

```
- Tab 컴포넌트의 tabposition 속성값이 "left" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| Tab Component | |
| Width | Tab 컴포넌트의 width 속성값이 적용됩니다. |
| Height | Tab 컴포넌트의 height 속성값이 적용됩니다. |
| tabbuttonitem Control     * multiline, tabjustify, showextrabutton, tabindex 속성값과 TabPage 의 갯수에 따라 표시되는 tabbuttonitem 컨트롤이 결정됩니다. | |
| Left | 0 으로 적용됩니다.  Tab 컴포넌트의 multiline 속성값이 "true" 이면 각 라인별로 tabbuttonitem 컨트롤의 Width 를 더한 값이 적용됩니다. |
| Top | Tab 컴포넌트의 Height 와 multiline, tabjustify, showextrabutton, tabindex 속성값, TabPage 의 갯수를 고려하여 계산된 값이 적용됩니다. |
| Width | tabbuttonitemtext 컨트롤의 Width 와 extrabutton 컨트롤의 Width 를 더한 값이 적용됩니다.  최종적으로 각 tabbuttonitem 컨트롤 중 제일 큰 Width 가 모든 tabbuttonitem 컨트롤의 Width 에 적용됩니다. |
| Height | tabbuttonitemtext 컨트롤의 Height 와 extrabutton 컨트롤의 Height 중 큰 값이 적용됩니다.  multiline 또는 tabjustify 속성값이 "true" 이면 Tab 컴포넌트의 Height 와 multiline, tabjustify, showextrabutton, tabindex 속성값, TabPage 의 갯수를 고려하여 계산된 값이 적용됩니다. |
| prevbutton Control     * tabjustify, multiline 속성값에 의해 prevbutton 컨트롤의 표시 여부가 결정됩니다. | |
| Left | tabpage 컨트롤의 Left 에서 prevbutton 컨트롤의 Width 를 뺀 값이 적용됩니다. |
| Top | nextbutton 컨트롤의 Top 에서 prevbutton 컨트롤의 Height 를 뺀 값이 적용됩니다. |
| nextbutton Control     * tabjustify, multiline 속성값에 의해 nextbutton 컨트롤의 표시 여부가 결정됩니다. | |
| Left | tabpage 컨트롤의 Left 에서 nextbutton 컨트롤의 Width 를 뺀 값이 적용됩니다. |
| Top | tabpage 컨트롤의 Height 에서 nextbutton 컨트롤의 Height 를 뺀 값이 적용됩니다. |
| tabpage Control     * tabpage 컨트롤에 속한 컴포넌트가 tabpage 컨트롤의 영역을 벗어난 경우 vscrollbar, hscrollbar 가 표시됩니다. | |
| Left | tabbuttonitem 컨트롤의 Width 가 적용됩니다.  Tab 컴포넌트의 multiline 속성값이 "true" 이면 각 라인별로 tabbuttonitem 컨트롤의 Width 를 합산한 값이 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | Tab 컴포넌트의 Width 에서 tabpage 컨트롤의 Left 를 뺀 값이 적용됩니다. |
| Height | Tab 컴포넌트의 Height 가 적용됩니다. |

```
- Tab 컴포넌트의 tabposition 속성값이 "right" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| Tab Component | |
| Width | Tab 컴포넌트의 width 속성값이 적용됩니다. |
| Height | Tab 컴포넌트의 height 속성값이 적용됩니다. |
| tabbuttonitem Control     * multiline, tabjustify, showextrabutton, tabindex 속성값과 TabPage 의 갯수에 따라 표시되는 tabbuttonitem 컨트롤이 결정됩니다. | |
| Left | Tab 컴포넌트의 Width 와 multiline, tabjustify, showextrabutton, tabindex 속성값, TabPage 의 갯수를 고려하여 계산된 값이 적용됩니다. |
| Top | Tab 컴포넌트의 Height 와 multiline, tabjustify, showextrabutton, tabindex 속성값, TabPage 의 갯수를 고려하여 계산된 값이 적용됩니다. |
| Width | tabbuttonitemtext 컨트롤의 Width 와 extrabutton 컨트롤의 Width 를 더한 값이 적용됩니다.  최종적으로 각 tabbuttonitem 컨트롤 중 제일 큰 Width 가 모든 tabbuttonitem 컨트롤의 Width 에 적용됩니다. |
| Height | tabbuttonitemtext 컨트롤의 Height 와 extrabutton 컨트롤의 Height 중 큰 값이 적용됩니다.  multiline 또는 tabjustify 속성값이 "true" 이면 Tab 컴포넌트의 Height 와 multiline, tabjustify, showextrabutton, tabindex 속성값, TabPage 의 갯수를 고려하여 계산된 값이 적용됩니다. |
| prevbutton Control     * tabjustify, multiline 속성값에 의해 prevbutton 컨트롤의 표시 여부가 결정됩니다. | |
| Left | tabpage 컨트롤의 Width 가 적용됩니다. |
| Top | nextbutton 컨트롤의 Top 에서 prevbutton 컨트롤의 Height 를 뺀 값이 적용됩니다. |
| nextbutton Control     * tabjustify, multiline 속성값에 의해 nextbutton 컨트롤의 표시 여부가 결정됩니다. | |
| Left | tabpage 컨트롤의 Width 가 적용됩니다. |
| Top | tabpage 컨트롤의 Height 에서 nextbutton 컨트롤의 Height 를 뺀 값이 적용됩니다. |
| tabpage Control     * tabpage 컨트롤에 속한 컴포넌트가 tabpage 컨트롤의 영역을 벗어난 경우 vscrollbar, hscrollbar 가 표시됩니다. | |
| Left | 0 으로 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | Tab 컴포넌트의 Width 에서 tabbuttonitem 컨트롤의 Width 를 뺀 값이 적용됩니다.  Tab 컴포넌트의 multiline 속성값이 "true" 이면 Tab 컴포넌트의 Width 에서 각 라인별로 tabbuttonitem 컨트롤의 Width 를 합산한 값을 뺀 값이 적용됩니다. |
| Height | Tab 컴포넌트의 Height 가 적용됩니다. |

## 97.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| TabPage 이동 | Ctrl + Tab | 화면에 표시된 TabPage 를 변경합니다. |
| TabPage 이동 | 좌우방향키 | focusacceptable 속성값이 "true" 이고, TabButton 에 포커스가 있을 때 화면에 표시된 TabPage 를 변경합니다. |
| TabButton 클릭 | Ctrl + BackSpace | 화면에 표시된 TabPage 의 TabButton 이 클릭 처리되어 onextrabuttonclick 이벤트가 발생합니다. |

## 97.1.5Accessibility Key Action

```
접근성 기능이 활성화 되어 있을 때 적용되는 키 액션입니다.
```

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 선택상자 이동 | 상하방향키 | Tab Order 가 이전/다음인 컴포넌트로 선택상자가 이동합니다. |
| TabPage 이동 | Ctrl + Tab | 화면에 표시된 TabPage 를 변경합니다. |
| TabPage 이동 | 좌우방향키 | focusacceptable 속성값이 "true" 이고, TabButton 에 포커스가 있을 때 화면에 표시된 TabPage 를 변경합니다. |
| TabButton 클릭 | Ctrl + BackSpace | 화면에 표시된 TabPage 의 TabButton 이 클릭 처리되어 onextrabuttonclick 이벤트가 발생합니다. |
| TabButton 선택 결정 | Space | 이동한 TabButton을 선택 결정하여 TabPage를 변경합니다. |

## 97.1.6생성자

```
Tab.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | Tab 의 ID를 설정합니다. |
| vLeft | String, Number | Tab 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 Tab 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Tab 의 left 가 결정됩니다. |
| vTop | String, Number | Tab 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 Tab 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Tab 의 top 이 결정됩니다. |
| vWidth | String, Number | Tab 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Tab 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Tab 의 width 가 결정됩니다. |
| vHeight | String, Number | Tab 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Tab 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Tab 의 height 가 결정됩니다. |
| vRight | String, Number | Tab 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 Tab 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Tab 의 right 가 결정됩니다. |
| vBottom | String, Number | Tab 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 Tab 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Tab 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | Tab 이 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | Tab 이 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | Tab 이 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | Tab 이 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new Tab();  objComp.init( "Tab00", 30, 120, 196, 46 ); objComp.init( "Tab00", 30, 120, 196, 46, null, null ); objComp.init( "Tab00", null, null, 300, "400px", "80%", 300 ); objComp.init( "Tab00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "Tab00", "Button00:10", 300, null, null, "Static00:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objTab = new Tab();   objTab.init("Tab", 30, 120, 196, 46, null, null); objTab.init("Tab", null, null, 300, "400px", "80%", 300); or var objTab = new Tab("Tab", 30, 120, 196, 46, null, null); var objTab = new Tab("Tab", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("Tab", objTab);    // Insert Object to Parent Form   this.insertChild(1, "Tab", objTab);    // Remove Object form Parent Form   this.removeChild("Tab");    // Show Object   objTab.show();    // Destroy Object   objTab.destroy();  objTab = null; ``` |

## 97.1.7Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 97.1.8Control

| Name | | TypeName |
| --- | --- | --- |
| tabbuttonitem | | nexacro.TabButtonItemControl |
| prevbutton | | nexacro.Button |
| nextbutton | | nexacro.Button |
| tabpage | | nexacro.TabpageControl |
