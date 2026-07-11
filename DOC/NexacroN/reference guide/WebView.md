# 73.WebView

73.1개요

73.2속성

73.3메서드

73.4이벤트

```
WebView 컴포넌트는 웹페이지를 로딩하고 화면에 표시하는 컴포넌트입니다.
```

## 73.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- Windows 운영체제 NRE에서 WebBrowser 컴포넌트는 Microsoft WebBrowser Control 기반으로 동작합니다. 때문에 Internet Explorer를 지원하지 않는 콘텐츠를 표시하는데 제약이 발생할 수 있습니다.. 이런 제약을 해소하고자 Windows 운영체제 NRE에서 WebView 컴포넌트는 Microsoft Edge WebView2 Control 기반으로 동작하도록 구현했습니다.

- 컴포넌트 기반이 되는 컨트롤 변경으로 지원하는 기능 일부는 WebBrowser 컴포넌트와 다릅니다.
  지원하지 않는 메서드 (setProperty, getProperty, callMethod)
  새로 추가한 메서드 (goBack, goForward, callScript)

- Windows 운영체제 NRE에서 사용자 PC에 Microsoft Edge WebView2 Control이 설치되지 않은 경우에는 Environment onerror 이벤트가 발생합니다. 
  ErrorEventInfo 오브젝트의 errortype 속성값은 "ObjectError"이며 errormsg 속성값은 설치 안내 메시지를 반환합니다.

- WebView 컴포넌트 내에서 웹접근성 기능이 정상적으로 동작하려면 가상 커서 기능을 사용하여야 합니다.
  가상 커서 기능에 관한 안내 메시지는 WebView 컴포넌트로 선택 상자가 이동되거나 나갈 때 출력되도록 설정하는 것을 권장합니다.
  선택 상자가 이동되거나 나갈 때 접근성이 출력되게 하려면 accessibilityaction과 accessibilityleavemessage 속성을 사용하여야 합니다.


◆ macOS NRE 제약

- macOS NRE에서 WebView 컴포넌트를 사용하려면
  Xcode 프로젝트의 info 항목에서 "App Transport Security Settings > Allow Arbitrary Loads" 값을 "YES"로 설정하여야 합니다.


◆ Mobile NRE 제약

- WebView 컴포넌트에 로드한 페이지에서 window.open 메서드 실행 시 Nexacro in-app browser가 팝업 형태로 표시됩니다.
열린 창은 상단 왼쪽 닫기 버튼을 터치해 닫을 수 있습니다.
window.opener 속성을 사용해 WebView 컴포넌트에서 로드한 페이지와 Nexacro in-app browser에서 로드한 페이지 간 데이터를 주고받을 수 있습니다.
```

## 73.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_48_WebView.png?raw=true)

## 73.1.3생성자

```
WebView.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | WebView 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | WebView 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 WebView 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 WebView 의 left 가 결정됩니다. |
| vTop | String, Number | WebView 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 WebView 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 WebView 의 top 이 결정됩니다. |
| vWidth | String, Number | WebView 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 WebView 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 WebView 의 width 가 결정됩니다. |
| vHeight | String, Number | WebView 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 WebView 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 WebView 의 height 가 결정됩니다. |
| vRight | String, Number | WebView 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 WebView 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 WebView 의 right 가 결정됩니다. |
| vBottom | String, Number | WebView 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 WebView 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 WebView 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | WebView 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | WebView 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | WebView 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | WebView 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new WebView();  objComp.init( "WebView00", 30, 120, 196, 46 ); objComp.init( "WebView00", 30, 120, 196, 46, null, null ); objComp.init( "WebView00", null, null, 300, "400px", "80%", 300 ); objComp.init( "WebView00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "WebView00", "WebView22:10", 300, null, null, "WebView33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objWebView = new WebView();   objWebView.init("WebView", 30, 120, 196, 46, null, null); objWebView.init("WebView", null, null, 300, "400px", "80%", 300); or var objWebView = new WebView("WebView", 30, 120, 196, 46, null, null); var objWebView = new WebView("WebView", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("WebView", objWebView);    // Insert Object to Parent Form   this.insertChild(1, "WebView", objWebView);    // Remove Object form Parent Form   this.removeChild("WebView");    // Show Object   objWebView.show();    // Destroy Object   objWebView.destroy();  objWebView = null; ``` |

## 73.1.4Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |
