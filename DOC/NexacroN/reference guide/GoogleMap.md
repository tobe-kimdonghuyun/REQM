# 31.GoogleMap

31.1개요

31.2속성

31.3메서드

31.4이벤트

```
Google Map 을 출력하기 위해 사용하는 컴포넌트입니다.
```

## 31.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☐ Windows | ☐ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☐ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☐ Android | ☐ iOS/iPadOS |  |  |  |

```
- Android NRE 에서 GoogleMap 을 사용하려면 "build.gradle" 에 아래와 같이 정의하여야 합니다.

  implementation 'com.google.android.gms:play-services-maps:16.0.0'
  implementation 'com.google.android.gms:play-services-location:16.0.0'
```

## 31.1.2생성자

```
GoogleMap.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | GoogleMap 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | GoogleMap 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 GoogleMap 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 GoogleMap 의 left 가 결정됩니다. |
| vTop | String, Number | GoogleMap 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 GoogleMap 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 GoogleMap 의 top 이 결정됩니다. |
| vWidth | String, Number | GoogleMap 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 GoogleMap 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 GoogleMap 의 width 가 결정됩니다. |
| vHeight | String, Number | GoogleMap 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 GoogleMap 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 GoogleMap 의 height 가 결정됩니다. |
| vRight | String, Number | GoogleMap 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 GoogleMap 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 GoogleMap 의 right 가 결정됩니다. |
| vBottom | String, Number | GoogleMap 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 GoogleMap 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 GoogleMap 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | GoogleMap 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | GoogleMap 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | GoogleMap 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | GoogleMap 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new GoogleMap();  objComp.init( "GoogleMap00", 30, 120, 196, 46 ); objComp.init( "GoogleMap00", 30, 120, 196, 46, null, null ); objComp.init( "GoogleMap00", null, null, 300, "400px", "80%", 300 ); objComp.init( "GoogleMap00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "GoogleMap00", "GoogleMap22:10", 300, null, null, "GoogleMap33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objGoogleMap = new GoogleMap();   objGoogleMap.init("GoogleMap", 30, 120, 196, 46, null, null); objGoogleMap.init("GoogleMap", null, null, 300, "400px", "80%", 300); or var objGoogleMap = new GoogleMap("GoogleMap", 30, 120, 196, 46, null, null); var objGoogleMap = new GoogleMap("GoogleMap", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("GoogleMap", objGoogleMap);    // Insert Object to Parent Form   this.insertChild(1, "GoogleMap", objGoogleMap);    // Remove Object form Parent Form   this.removeChild("GoogleMap");    // Show Object   objGoogleMap.show();    // Destroy Object   objGoogleMap.destroy();  objGoogleMap = null; ``` |

## 31.1.3Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |
