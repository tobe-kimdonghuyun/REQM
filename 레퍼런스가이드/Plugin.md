# 59.Plugin

59.1개요

59.2속성

59.3메서드

```
ActiveX 나 Applet 을 사용하기 위해 제공되는 wrapper 컴포넌트입니다.
```

## 59.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☐ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☐ Android | ☐ iOS/iPadOS | ☐ Android | ☐ iOS/iPadOS |  |  |  |

```
- 속성에 설정하는 값에 의해 ActiveX 또는 Applet 이 로딩 처리됩니다.

- 경로를 입력하는 모든 프로퍼티에 대해서 절대경로 및 상대경로를 지원하지 못합니다.
   HTTP Full URL 을 사용해야 합니다.

- Flash 를 로드 할 경우 movie 속성에 TypeDefinition 의 Services 에 정의된 경로 (ex>Base::sample.swf)를 지원하지 않습니다.
```

## 59.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_17_Plugin1.png?raw=true)

## 59.1.3생성자

```
Plugin.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | Plugin 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | Plugin 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 Plugin 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Plugin 의 left 가 결정됩니다. |
| vTop | String, Number | Plugin 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 Plugin 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Plugin 의 top 이 결정됩니다. |
| vWidth | String, Number | Plugin 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Plugin 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Plugin 의 width 가 결정됩니다. |
| vHeight | String, Number | Plugin 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 Plugin 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Plugin 의 height 가 결정됩니다. |
| vRight | String, Number | Plugin 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 Plugin 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 Plugin 의 right 가 결정됩니다. |
| vBottom | String, Number | Plugin 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 Plugin 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 Plugin 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | Plugin 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | Plugin 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | Plugin 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | Plugin 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new Plugin();  objComp.init( "Plugin00", 30, 120, 196, 46 ); objComp.init( "Plugin00", 30, 120, 196, 46, null, null ); objComp.init( "Plugin00", null, null, 300, "400px", "80%", 300 ); objComp.init( "Plugin00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "Plugin00", "Plugin22:10", 300, null, null, "Plugin33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objPlugin = new Plugin();   objPlugin.init("Plugin", 30, 120, 196, 46, null, null); objPlugin.init("Plugin", null, null, 300, "400px", "80%", 300); or var objPlugin = new Plugin("Plugin", 30, 120, 196, 46, null, null); var objPlugin = new Plugin("Plugin", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("Plugin", objPlugin);    // Insert Object to Parent Form   this.insertChild(1, "Plugin", objPlugin);    // Remove Object form Parent Form   this.removeChild("Plugin");    // Show Object   objPlugin.show();    // Destroy Object   objPlugin.destroy();  objPlugin = null; ``` |

## 59.1.4Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |
