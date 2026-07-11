# 9.MainFrame

9.1개요

9.2속성

9.3메서드

9.4이벤트

```
애플리케이션의 기본 화면을 구성합니다.

내부적으로 TitleBarControl 과 StatusBarControl 을 기본으로 갖고 있습니다. 
하위 구성요소로 FrameSet,  HFrameSet, VFrameSet, TileFrameSet, ChildFrame 중 한개를 가질 수 있습니다.
```

## 9.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

## 9.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_30_MainFrame2.png?raw=true)

## 9.1.3Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| deactivate | status | 비활성화된 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 9.1.4Control

| Name | | TypeName |
| --- | --- | --- |
| titlebar | | nexacro.TitleBarControl |
| statusbar | | nexacro.StatusBarControl |
