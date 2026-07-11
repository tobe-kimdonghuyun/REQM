# 27.FileDownTransfer

27.1개요

27.2속성

27.3메서드

27.4이벤트

```
서버로부터 파일을 다운로드하기 위한 Invisible 오브젝트입니다.
```

## 27.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- HTTP/HTTPS 프로토콜의 POST 방식을 사용하여 서버의 파일을 지정된 경로로 다운로드합니다.

- onsuccess, onerror 이벤트는 웹브라우저 환경에서는 발생하지 않습니다.
```

## 27.1.2생성자

```
FileDownTransfer( strName, objParent )
```

|  |
| --- |
| ``` // Create Object   var objFileDown = new nexacro.FileDownTransfer( "FileDownTransfer00", this );    // Add Object to Parent Form   this.addChild( "FileDownTransfer00", objFileDown );  // Set Object  objFileDown.url = "http://localhost/Test.txt"; objFileDown.setEventHandler( "onsuccess", this.FileDownTransfer00_onsuccess, this);  // Remove Object form Parent var objFileDown = this.removeChild( "FileDownTransfer00" );   // Destroy Object objFileDown.destroy(); objFileDown = null; ``` |
