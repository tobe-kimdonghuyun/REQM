# 11.TileFrameSet

11.1개요

11.2속성

11.3메서드

11.4이벤트

```
MainFrame 의 하위에 오는 Frame 으로써 응용프로그램의 화면 배열을 위한 기본단위 화면으로 사용됩니다.

TileFrameSet 은 하위에 FrameSet, HFrameSet, VFrameSet, TileFrameSet, ChildFrame 을 반복적으로 가질 수 있습니다.
또한 수평, 수직 방향으로 자동으로 하위 Frame 들을 배열할 수 있는 기능을 갖고 있습니다.
```

## 11.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

## 11.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_32_TileFrameSet2.png?raw=true)

## 11.1.3생성자

```
TileFrameSet.init( strName, nLeft, nTop, nWidth, nHeight [, nRight, nBottom] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | TileFrameSet 의 ID를 문자열로 설정합니다. |
| nLeft | Number | 부모 Frame 의 좌상단을 기준으로 TileFrameSet 의 left 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| nTop | Number | 부모 Frame 의 좌상단을 기준으로 TileFrameSet 의 top 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| nWidth | Number | TileFrameSet 의 width 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| nHeight | Number | TileFrameSet 의 height 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| nRight | Number | 부모 Frame 의 우하단을 기준으로 TileFrameSet 의 right 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다.  nLeft, nWidth 값을 모두 설정했을 경우 nRight 값은 무시됩니다. |
| nBottom | Number | 부모 Frame 의 우하단을 기준으로 TileFrameSet 의 bottom 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다.  nTop, nHeight 값을 모두 설정했을 경우 nBottom 값은 무시됩니다 |
| ``` var obFrame = new TileFrameSet();  obFrame.init( "TileFrameSet00", 30, 120, 196, 46, null, null); obFrame.init( "TileFrameSet00", null, null, 300, "400px", "80%", 300); ``` | | |

|  |
| --- |
| ``` // Create Object   var objTileFrameSet = new TileFrameSet();   objTileFrameSet.init("TileFrameSet", 30, 120, 196, 46, null, null); objTileFrameSet.init("TileFrameSet", null, null, 300, "400px", "80%", 300); or var objTileFrameSet = new TileFrameSet("TileFrameSet", 30, 120, 196, 46, null, null); var objTileFrameSet = new TileFrameSet("TileFrameSet", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Frame   this.addChild("TileFrameSet", objTileFrameSet);    // Insert Object to Parent Frame   this.insertChild(1, "TileFrameSet", objTileFrameSet);    // Remove Object form Parent Frame   this.removeChild("TileFrameSet");    // Show Object   objTileFrameSet.show();    // Destroy Object   objTileFrameSet.destroy();  objTileFrameSet = null; ``` |

## 11.1.4Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| deactivate | status | 비활성화된 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 11.1.5Control

| Name | | TypeName |
| --- | --- | --- |
| titlebar | | nexacro.TitleBarControl |
| statusbar | | nexacro.StatusBarControl |
