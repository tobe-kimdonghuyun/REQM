# 118.ScrollBarControl

118.1개요

118.2속성

```
Form 또는 컨테이너 컴포넌트에서 스크롤이 필요할 때 사용되는 ScrollBar Control 입니다.
```

## 118.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- FileUpload, Grid, ListBox, TextArea, Form 에서 하위 Control 로 사용중입니다.
```

## 118.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//ScrollBarControl.png?raw=true)

## 118.1.3Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 118.1.4Control

| Name | | TypeName |
| --- | --- | --- |
| incbutton | | nexacro.Button |
| decbutton | | nexacro.Button |
| trackbar | | nexacro.Button |

```
* xtheme 에디터에서 incbutton, decbutton, trackbar 컨트롤에 "focused", "selected" Status 를 정의할 수 있지만 실제로 Status 가 적용되지 않습니다.
  사용에 주의하여 주시기 바랍니다.
```
