# 72.WebBrowser

72.1개요

72.2속성

72.3메서드

72.4이벤트

```
WebBrowser 컴포넌트는 웹페이지를 로딩하고 화면에 표시하는 컴포넌트입니다.
```

## 72.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- WebBrowser 컴포넌트 내에서 웹접근성 기능이 정상적으로 동작하려면 가상커서 기능을 사용하여야 합니다.
   가상커서 기능에 관한 안내 메시지는 WebBrowser 컴포넌트로 선택상자가 이동되거나 나갈 때 출력되도록 설정하는 것을 권장합니다.
   선택상자가 이동되거나 나갈 때 접근성이 출력되게 하려면 accessibilityaction과 accessibilityleavemessage 속성을 사용하여야 합니다.


◆ macOS NRE 제약

- macOS NRE에서 WebBrowser 컴포넌트를 사용하려면
   Xcode 프로젝트의 info 항목에서 "App Transport Security Settings > Allow Arbitrary Loads" 값을 "YES"로 설정하여야 합니다.


◆ Windows NRE 제약

- Windows NRE에서 WebBrowser 컴포넌트는 Microsoft WebBrowser Control 기반으로 작성됐습니다. 
  Microsoft WebBrowser Control의 제약으로 Internet Explorer를 지원하지 않는 콘텐츠는 정상적으로 로딩할 수 없습니다.
  24.0.0.100 이후 버전에서 WRE로 배포된 콘텐츠 역시 Internet Explorer를 지원하지 않으며 WebBrowser 컴포넌트에서 정상적으로 로딩할 수 없습니다.
  Internet Explorer를 지원하지 않는 콘텐츠가 필요한 경우에는 WebView 컴포넌트를 사용해 주세요.


◆ Mobile NRE 제약

- WebBrowser 컴포넌트에 로드한 페이지에서 window.open 메서드 실행 시 Nexacro in-app browser가 팝업 형태로 표시됩니다. 
  열린 창은 상단 왼쪽 닫기 버튼을 터치해 닫을 수 있습니다.
  window.opener 속성을 사용해 WebBrowser 컴포넌트에서 로드한 페이지와 Nexacro in-app browser에서 로드한 페이지 간 데이터를 주고받을 수 있습니다.
```

## 72.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_27_WebBrowser1.png?raw=true)

## 72.1.3생성자

```
WebBrowser.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | WebBrowser 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | WebBrowser 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 WebBrowser 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 WebBrowser 의 left 가 결정됩니다. |
| vTop | String, Number | WebBrowser 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 WebBrowser 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 WebBrowser 의 top 이 결정됩니다. |
| vWidth | String, Number | WebBrowser 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 WebBrowser 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 WebBrowser 의 width 가 결정됩니다. |
| vHeight | String, Number | WebBrowser 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 WebBrowser 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 WebBrowser 의 height 가 결정됩니다. |
| vRight | String, Number | WebBrowser 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 WebBrowser 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 WebBrowser 의 right 가 결정됩니다. |
| vBottom | String, Number | WebBrowser 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 WebBrowser 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 WebBrowser 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | WebBrowser 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | WebBrowser 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | WebBrowser 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | WebBrowser 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new WebBrowser();  objComp.init( "WebBrowser00", 30, 120, 196, 46 ); objComp.init( "WebBrowser00", 30, 120, 196, 46, null, null ); objComp.init( "WebBrowser00", null, null, 300, "400px", "80%", 300 ); objComp.init( "WebBrowser00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "WebBrowser00", "WebBrowser22:10", 300, null, null, "WebBrowser33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objWebBrowser = new WebBrowser();   objWebBrowser.init("WebBrowser", 30, 120, 196, 46, null, null); objWebBrowser.init("WebBrowser", null, null, 300, "400px", "80%", 300); or var objWebBrowser = new WebBrowser("WebBrowser", 30, 120, 196, 46, null, null); var objWebBrowser = new WebBrowser("WebBrowser", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("WebBrowser", objWebBrowser);    // Insert Object to Parent Form   this.insertChild(1, "WebBrowser", objWebBrowser);    // Remove Object form Parent Form   this.removeChild("WebBrowser");    // Show Object   objWebBrowser.show();    // Destroy Object   objWebBrowser.destroy();  objWebBrowser = null; ``` |

## 72.1.4Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |
