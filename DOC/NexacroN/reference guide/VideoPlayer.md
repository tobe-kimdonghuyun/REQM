# 70.VideoPlayer

70.1개요

70.2속성

70.3메서드

70.4이벤트

```
비디오 파일 및 스트림을 재생할 수 있는 Wrapper 컴포넌트입니다.
```

## 70.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- 오디오 파일 및 스트림을 재생할 수 있습니다.
```

## 70.1.2생성자

```
VideoPlayer.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | VideoPlayer 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | VideoPlayer 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 VideoPlayer 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 VideoPlayer 의 left 가 결정됩니다. |
| vTop | String, Number | VideoPlayer 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 VideoPlayer 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 VideoPlayer 의 top 이 결정됩니다. |
| vWidth | String, Number | VideoPlayer 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 VideoPlayer 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 VideoPlayer 의 width 가 결정됩니다. |
| vHeight | String, Number | VideoPlayer 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 VideoPlayer 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 VideoPlayer 의 height 가 결정됩니다. |
| vRight | String, Number | VideoPlayer 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 VideoPlayer 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 VideoPlayer 의 right 가 결정됩니다. |
| vBottom | String, Number | VideoPlayer 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 VideoPlayer 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 VideoPlayer 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | VideoPlayer 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | VideoPlayer 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | VideoPlayer 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | VideoPlayer 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new VideoPlayer();  objComp.init( "VideoPlayer00", 30, 120, 196, 46 ); objComp.init( "VideoPlayer00", 30, 120, 196, 46, null, null ); objComp.init( "VideoPlayer00", null, null, 300, "400px", "80%", 300 ); objComp.init( "VideoPlayer00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "VideoPlayer00", "VideoPlayer22:10", 300, null, null, "VideoPlayer33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objVideoPlayer = new VideoPlayer();   objVideoPlayer.init("VideoPlayer", 30, 120, 196, 46, null, null); objVideoPlayer.init("VideoPlayer", null, null, 300, "400px", "80%", 300); or var objVideoPlayer = new VideoPlayer("VideoPlayer", 30, 120, 196, 46, null, null); var objVideoPlayer = new VideoPlayer("VideoPlayer", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("VideoPlayer", objVideoPlayer);    // Insert Object to Parent Form   this.insertChild(1, "VideoPlayer", objVideoPlayer);    // Remove Object form Parent Form   this.removeChild("VideoPlayer");    // Show Object   objVideoPlayer.show();    // Destroy Object   objVideoPlayer.destroy();  objVideoPlayer = null; ``` |
