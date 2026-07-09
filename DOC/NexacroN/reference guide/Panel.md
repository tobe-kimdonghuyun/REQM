# 57.Panel

57.1개요

57.2속성

57.3메서드

57.4이벤트

```
두 개 이상의 컴포넌트를 그룹으로 묶어서 원하는 형식으로 배치할 수 있는 컴포넌트입니다.
```

## 57.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- 넥사크로 스튜디오 디자인 탭에서 두 개 이상의 컴포넌트를 선택하고 컨텍스트 메뉴에서 [Group by panel] 항목 선택 시 Panel 컴포넌트가 생성됩니다.

- 넥사크로 스튜디오 디자인 탭에서 Panel 컴포넌트를 삭제하는 경우에는 Panel 컴포넌트에 연결된 컴포넌트도 같이 삭제됩니다.
  디자인 탭에서는 Panel 컴포넌트 선택 후 컨텍스트 메뉴에서 [Ungroup panels] 항목을 선택하세요.
```

## 57.1.2생성자

|  |
| --- |
| ``` // Create Object   var objPanel = new Panel();   objPanel.init("Panel", 30, 120, 196, 46, null, null); objPanel.init("Panel", null, null, 300, "400px", "80%", 300); or var objPanel = new Panel("Panel", 30, 120, 196, 46, null, null); var objPanel = new Panel("Panel", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("Panel", objPanel);    // Insert Object to Parent Form   this.insertChild(1, "Panel", objPanel);    // Remove Object form Parent Form   this.removeChild("Panel");    // Show Object   objPanel.show();    // Destroy Object   objPanel.destroy();  objPanel = null; ``` |

## 57.1.3Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |
