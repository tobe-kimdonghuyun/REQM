# 127.TitleBarControl

127.1개요

127.2속성

```
프레임의 제목 표시줄을 구성하는 오브젝트입니다.
```

## 127.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
각 프레임의 showtitlebar 속성값이 true일 때 보여집니다.
maxbutton과 normalbutton은 프레임의 상태에 따라 해당하는 버튼이 보여집니다.
```

## 127.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_37_TitleBarControl3.png?raw=true)

## 127.1.3Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| deactivate | status | 비활성화된 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 127.1.4Control

| Name | | TypeName |
| --- | --- | --- |
| titleicon | | nexacro.TitleBarIconTextControl |
| minbutton | | nexacro.TitleBarButtonControl |
| maxbutton | | nexacro.TitleBarButtonControl |
| normalbutton | | nexacro.TitleBarButtonControl |
| closebutton | | nexacro.TitleBarButtonControl |
