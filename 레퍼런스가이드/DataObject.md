# 136.DataObject

136.1개요

136.2속성

136.3메서드

136.4이벤트

```
데이터를 호출하거나 작성하고 관리하는 오브젝트입니다.
REST API 호출 기능과 Dataset 오브젝트와 단방향 바인딩을 지원합니다.
```

## 136.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- 데이터 로딩 성공 시 이벤트는 다음 순서로 발생합니다.
request: DataObject.onsuccess -> DataObject.onload -> Dataset.onload
load: DataObject.onload -> Dataset.onload

- 데이터 통신 실패 시 이벤트는 다음 순서로 발생합니다.
Environment.onerror (Return false) -> DataObject.onerror
Environment.onerror (Return true)
```

## 136.1.2생성자

|  |
| --- |
| ``` // Create Object   var obj = new DataObject("DataObject00", this);  // Add Object to Parent Form   this.addChild(obj.name, obj);  // Remove Object form Parent var obj = this.removeChild( "DataObject00" );   // Destroy Object obj.destroy(); obj = null; ``` |
