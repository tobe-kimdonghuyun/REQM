# 4.Application > Tray

4.1개요

4.2속성

4.3메서드

4.4이벤트

```
어플리케이션에서 사용되는 시스템 트레이로써 다중 트레이를 등록할 수 있습니다.
```

## 4.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☐ Edge | ☐ Chrome | ☐ Safari | ☐ Firefox | ☐ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☐ Android | ☐ iOS/iPadOS | ☐ Android | ☐ iOS/iPadOS |  |  |  |

## 4.1.2생성자

```
Tray.init(strID, icon, tooltip);
```

| Parameters | Type | Description |
| --- | --- | --- |
| strID | String | 동적 생성된 Tray 의 ID 를 설정합니다. |
| icon | String | Tray 에서 사용할 Icon 을 설정합니다. |
| tooltip | String | Tray 의 풍선도움말에 표시될 문자열로 설정합니다. |
| ``` var objApp = nexacro.getApplication() ; var objTray = new nexacro.Tray("Tray00", objApp);  objTray.init("Tray00", "information", "Tray Tooltip");  var nIndex = objApp.addTray("Tray00", objTray); objTray.show(); ``` | | |

|  |
| --- |
| ``` // Get Appication var objApp = nexacro.getApplication();  // Create Object var objTray = new nexacro.Tray("Tray00", objApp);  // Init Object     objTray.init("Tray00", "information", "Tray ToolTip");  //Add Object to Application var nIndex = objApp.addTray("Tray00", objTray);  // Show Object objApp.trays["Tray00"].show();  // Remove Object from Application objApp.removeTray("Tray00");    // Destroy Object  objTray.destroy();  objTray = null; ``` |
