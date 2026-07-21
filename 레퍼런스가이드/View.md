# 101.View

101.1개요

101.2속성

101.3메서드

101.4이벤트

```
View는 하나의 화면에 여러개의 부분화면을 구성할 때 사용하는 컴포넌트입니다.
```

## 101.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- View 컴포넌트는 Div 컴포넌트와 비슷하지만, 다른 Form을 연결해서 사용할 수 없습니다.
- View 컴포넌트는 Form 오브젝트에만 배치할 수 있습니다. Div나 TabPageControl 같은 ContainerComponent 내에 배치할 수 없습니다.

- View 컴포넌트가 배치된 Form을 ViewSet 템플릿으로 등록해서 사용할 수 있습니다.
  View 컴포넌트 내에 다른 컴포넌트를 직접 배치할 수 있지만, QuickCode 개발 환경에서 Model과 View Template을 연결해 자동으로 컴포넌트를 배치하는 용도로 사용합니다.
```

## 101.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_47_View.png?raw=true)

## 101.1.3컴포넌트, 내부 컨텐츠 크기

```
View 컴포넌트의 크기를 결정하는 기준입니다.
```

|  |  |
| --- | --- |
| View Component     * View 에 속한 컴포넌트가 View 컴포넌트의 영역을 벗어난 경우 vscrollbar, hscrollbar 가 표시됩니다. | |
| Width | View 컴포넌트의 width 속성값이 적용됩니다. |
| Height | View 컴포넌트의 height 속성값이 적용됩니다. |
| Form | |
| Left | 0 으로 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | View 컴포넌트의 Width 가 적용됩니다. |
| Height | View 컴포넌트의 Height 가 적용됩니다. |

## 101.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 스크롤 이동 | Ctrl + 방향키 | View 또는 자식 컴포넌트에 포커스가 있고, View 에 스크롤이 있을 때 입력된 방향키 방향으로 스크롤이 이동합니다. |

## 101.1.5Accessibility Key Action

```
접근성 기능이 활성화 되어 있을 때 적용되는 키 액션입니다.
```

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 선택상자 이동 | 상하방향키 | Tab Order 가 이전/다음인 컴포넌트로 선택상자가 이동합니다. |
| 스크롤 이동 | Ctrl + 방향키 | View 또는 자식 컴포넌트에 포커스가 있고, View 에 스크롤이 있을 때 입력된 방향키 방향으로 스크롤이 이동합니다. |

## 101.1.6생성자

```
View.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | View 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | View 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 View 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 View 의 left 가 결정됩니다. |
| vTop | String, Number | View 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 View 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 View 의 top 이 결정됩니다. |
| vWidth | String, Number | View 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 View 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 View 의 width 가 결정됩니다. |
| vHeight | String, Number | View 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 View 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 View 의 height 가 결정됩니다. |
| vRight | String, Number | View 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 View 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 View 의 right 가 결정됩니다. |
| vBottom | String, Number | View 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 View 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 View 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | View 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | View 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | View 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | View 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new View();  objComp.init( "View00", 30, 120, 196, 46 ); objComp.init( "View00", 30, 120, 196, 46, null, null ); objComp.init( "View00", null, null, 300, "400px", "80%", 300 ); objComp.init( "View00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "View00", "View22:10", 300, null, null, "View33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objView = new View();   objView.init("View", 30, 120, 196, 46, null, null); objView.init("View", null, null, 300, "400px", "80%", 300); or var objView = new View("View", 30, 120, 196, 46, null, null); var objView = new View("View", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("View", objView);    // Insert Object to Parent Form   this.insertChild(1, "View", objView);    // Remove Object form Parent Form   this.removeChild("View");    // Show Object   objView.show();    // Destroy Object   objView.destroy();  objView = null; ``` |

## 101.1.7Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |
