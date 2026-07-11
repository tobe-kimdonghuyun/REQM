# 10.FrameSet

10.1개요

10.2속성

10.3메서드

10.4이벤트

```
MainFrame 하위에 오는 Frame 으로써 애플리케이션의 화면 배열을 위한 기본단위 화면으로 사용됩니다. 

FrameSet 은 하위에 FrameSet, HFrameSet, VFrameSet, TileFrameSet, ChildFrame 을 반복적으로 가질 수 있습니다. 
또한, 하위 프레임을 자유롭게 배열할 수 있는 기능이 있습니다.
```

## 10.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

## 10.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_28_FrameSet4.png?raw=true)

## 10.1.3생성자

```
FrameSet.init( strName, nLeft, nTop, nWidth, nHeight [, nRight, nBottom] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | FrameSet 의 ID를 문자열로 설정합니다. |
| nLeft | Number | 부모 Frame 의 좌상단을 기준으로 FrameSet 의 left 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| nTop | Number | 부모 Frame 의 좌상단을 기준으로 FrameSet 의 top 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| nWidth | Number | FrameSet 의 width 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| nHeight | Number | FrameSet 의 height 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| nRight | Number | 부모 Frame 의 우하단을 기준으로 FrameSet 의 right 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다.  nLeft, nWidth 값을 모두 설정했을 경우 nRight 값은 무시됩니다. |
| nBottom | Number | 부모 Frame 의 우하단을 기준으로 FrameSet 의 bottom 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다.  nTop, nHeight 값을 모두 설정했을 경우 nBottom 값은 무시됩니다 |
| ``` var obFrame = new FrameSet();  obFrame.init( "FrameSet00", 30, 120, 196, 46, null, null); obFrame.init( "FrameSet00", null, null, 300, "400px", "80%", 300); ``` | | |

|  |
| --- |
| ``` // Create Object   var objFrameSet = new FrameSet();   objFrameSet.init("FrameSet", 30, 120, 196, 46, null, null); objFrameSet.init("FrameSet", null, null, 300, "400px", "80%", 300); or var objFrameSet = new FrameSet("FrameSet", 30, 120, 196, 46, null, null); var objFrameSet = new FrameSet("FrameSet", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("FrameSet", objFrameSet);    // Insert Object to Parent Form   this.insertChild(1, "FrameSet", objFrameSet);    // Remove Object form Parent Form   this.removeChild("FrameSet");    // Show Object   objFrameSet.show();    // Destroy Object   objFrameSet.destroy();  objFrameSet = null; ``` |

## 10.1.4Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| deactivate | status | 비활성화된 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 10.1.5Control

| Name | | TypeName |
| --- | --- | --- |
| titlebar | | nexacro.TitleBarControl |
| statusbar | | nexacro.StatusBarControl |
