# 152.ExcelImportObject

152.1개요

152.2속성

152.3메서드

152.4이벤트

```
엑셀 또는 한셀 파일의 내용을 DataSet 에 Import 하는 오브젝트입니다.
```

## 152.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☐ iOS/iPadOS | ☑ Android | ☐ iOS/iPadOS |  |  |  |

## 152.1.2생성자

|  |
| --- |
| ``` // Create Object   var obj = new ExcelImportObject("ExcelImportObject00", this);  // Add Object to Parent Form   this.addChild(obj.name, obj);  // Remove Object form Parent var obj = this.removeChild( "ExcelImportObject00" );   // Destroy Object obj.destroy(); obj = null; ``` |
