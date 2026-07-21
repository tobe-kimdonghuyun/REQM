# 123.StatusBarControl

123.1개요

123.2속성

```
Frame 에서 상태표시줄로 사용되는 StatusBarControl 오브젝트입니다.
```

## 123.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☐ Edge | ☐ Chrome | ☐ Safari | ☐ Firefox | ☐ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☐ Android | ☐ iOS/iPadOS | ☐ Android | ☐ iOS/iPadOS |  |  |  |

```
- Frame 의 showstatusbar 속성값이 "true" 일 때 보여집니다.
```

## 123.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_38_StatusBarControl1.png?raw=true)

## 123.1.3Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 123.1.4Control

| Name | | TypeName |
| --- | --- | --- |
| statustext | | nexacro.Static |
| progressbar | | nexacro.ProgressBar |
| resizegrip | | nexacro.IconControl |
