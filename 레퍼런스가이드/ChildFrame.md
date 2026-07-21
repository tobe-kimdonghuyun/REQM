# 14.ChildFrame

14.1개요

14.2속성

14.3메서드

14.4이벤트

```
ChildFrame 은 MainFrame, FrameSet, HFrameSet, VFrameSet, TileFrameSet 하위에 올 수 있는 Frame 입니다.

Form 정보를 formurl 속성으로 갖고 있어 해당 Form의 화면을 로딩하여 보여줍니다.
기본적으로 Form이 로딩될 수 있는 기본 단위 화면입니다.
```

## 14.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

## 14.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_29_ChildFrame2.png?raw=true)

## 14.1.3생성자

```
ChildFrame.init( strName, nLeft, nTop, nWidth, nHeight [, nRight, nBottom [,strUrl]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | ChildFrame 의 ID를 문자열로 설정합니다. |
| nLeft | Number | 부모 Frame 의 좌상단을 기준으로 ChildFrame 의 left 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| nTop | Number | 부모 Frame 의 좌상단을 기준으로 ChildFrame 의 top 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| nWidth | Number | ChildFrame 의 width 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| nHeight | Number | ChildFrame 의 height 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다. |
| nRight | Number | 부모 Frame 의 우하단을 기준으로 ChildFrame 의 right 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다.  nLeft, nWidth 값을 모두 설정했을 경우 nRight 값은 무시됩니다. |
| nBottom | Number | 부모 Frame 의 우하단을 기준으로 ChildFrame 의 bottom 속성값을 설정합니다.  Pixel 단위 또는 비율("%")로 설정할 수 있습니다.  nTop, nHeight 값을 모두 설정했을 경우 nBottom 값은 무시됩니다 |
| strURL | String | ChildFrame 에 속할 Form 의 위치정보를 문자열로 설정합니다. |
| ``` var obFrame = new ChildFrame();  obFrame.init( "ChildFrame00", 30, 120, 196, 46, null, null); obFrame.init( "ChildFrame00", null, null, 300, "400px", "80%", 300, "Base::Form00.xfdl" ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objChildFrame = new ChildFrame();   objChildFrame.init("ChildFrame", 30, 120, 196, 46, null, null); objChildFrame.init("ChildFrame", null, null, 300, "400px", "80%", 300); or var objChildFrame = new ChildFrame("ChildFrame", 30, 120, 196, 46, null, null); var objChildFrame = new ChildFrame("ChildFrame", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Frame   this.addChild("ChildFrame", objChildFrame);    // Insert Object to Parent Frame   this.insertChild(1, "ChildFrame", objChildFrame);    // Remove Object form Parent Frame   this.removeChild("ChildFrame");    // Show Object   objChildFrame.show();    // Destroy Object   objChildFrame.destroy();  objChildFrame = null; ``` |

## 14.1.4Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| deactivate | status | 비활성화된 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 14.1.5Control

| Name | | TypeName |
| --- | --- | --- |
| titlebar | | nexacro.TitleBarControl |
| statusbar | | nexacro.StatusBarControl |
