# 148.ExcelExportObject

148.1개요

148.2속성

148.3메서드

148.4이벤트

```
Grid 에 표시되는 내용을 엑셀 또는 한셀 파일로 Export 하는 오브젝트입니다.
```

## 148.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

## 148.1.2생성자

|  |
| --- |
| ``` // Create Object   var obj = new ExcelExportObject("ExcelExportObject00", this);  // Add Object to Parent Form   this.addChild(obj.name, obj);  // Remove Object form Parent var obj = this.removeChild( "ExcelExportObject00" );   // Destroy Object obj.destroy(); obj = null; ``` |
