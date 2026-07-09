# 13.VFrameSet

13.1개요

13.2속성

13.3메서드

13.4이벤트

```
MainFrame 하위에 오는 Frame 으로써 애플리케이션의 화면 배열을 위한 기본단위 화면으로 사용됩니다. 

VFrameSet 은 하위에 FrameSet, HFrameSet, VFrameSet, TileFrameSet, ChildFrame을 반복적으로 가질 수 있습니다.
또한 수직 방향으로 자동으로 하위 Frame 을 배열할 수 있는 기능이 있습니다.
```

## 13.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

## 13.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_33_VFrameSet2.png?raw=true)

## 13.1.3생성자

```
VFrameSet.init( strName, nLeft, nTop, nWidth, nHeight [, nRight, nBottom] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | VFrameSet 의 ID를 문자열로 설정합니다. |
| nLeft | Number | 부모 Frame 의 좌상단을 기준으로 VFrameSet 의 left 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| nTop | Number | 부모 Frame 의 좌상단을 기준으로 VFrameSet 의 top 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| nWidth | Number | VFrameSet 의 width 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| nHeight | Number | VFrameSet 의 height 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| nRight | Number | 부모 Frame 의 우하단을 기준으로 VFrameSet 의 right 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다.  nLeft, nWidth 값을 모두 설정했을 경우 nRight 값은 무시됩니다. |
| nBottom | Number | 부모 Frame 의 우하단을 기준으로 VFrameSet 의 bottom 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다.  nTop, nHeight 값을 모두 설정했을 경우 nBottom 값은 무시됩니다 |
| ``` var obFrame = new VFrameSet();  obFrame.init( "VFrameSet00", 30, 120, 196, 46, null, null); obFrame.init( "VFrameSet00", null, null, 300, "400px", "80%", 300); ``` | | |

|  |
| --- |
| ``` // Create Object   var objVFrameSet = new VFrameSet();   objVFrameSet.init("VFrameSet", 30, 120, 196, 46, null, null); objVFrameSet.init("VFrameSet", null, null, 300, "400px", "80%", 300); or var objVFrameSet = new VFrameSet("VFrameSet", 30, 120, 196, 46, null, null); var objVFrameSet = new VFrameSet("VFrameSet", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Frame   this.addChild("VFrameSet", objVFrameSet);    // Insert Object to Parent Frame   this.insertChild(1, "VFrameSet", objVFrameSet);    // Remove Object form Parent Frame   this.removeChild("VFrameSet");    // Show Object   objVFrameSet.show();    // Destroy Object   objVFrameSet.destroy();  objVFrameSet = null; ``` |

## 13.1.4Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| deactivate | status | 비활성화된 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 13.1.5Control

| Name | | TypeName |
| --- | --- | --- |
| titlebar | | nexacro.TitleBarControl |
| statusbar | | nexacro.StatusBarControl |
