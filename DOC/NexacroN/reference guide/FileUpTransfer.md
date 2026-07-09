# 30.FileUpTransfer

30.1개요

30.2속성

30.3메서드

30.4이벤트

```
서버로 파일을 업로드하기 위한 Invisible 오브젝트입니다.
```

## 30.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- HTTP/HTTPS 프로토콜의 POST 방식을 사용하여 파일을 서버로 업로드합니다.

- filelist 속성에 설정된 한 개 이상의 파일과 postdatalist 속성에 설정한 데이터를 서버로 전송합니다.

- 파일 업로드 중에는 onprogress 이벤트가 발생하며, 발생주기는 브라우저에 따라 달라질 수 있습니다.


◆ Desktop WRE 제약

- Chrome, FireFox 브라우저는 실제 파일경로가 표시되지 않는 제약사항으로 파일정보 중 파일경로가 "fakepath" 로 표시됩니다.
```

## 30.1.2생성자

```
FileUpTransfer( strName, objParent )
```

|  |
| --- |
| ``` // Create Object   var objFileUp = new nexacro.FileUpTransfer("FileUpTransfer00", this);    // Add Object to Parent Form   this.addChild( "FileUpTransfer00", objFileUp );  // Set Object  objFileUp.url = "http://localhost/UploadServlet.jsp"; objFileUp.setEventHandler( "onsuccess", this.FileUpTransfer00_onsuccess, this); objFileUp.addFile( "file00", objVFile00 );  // Remove Object form Parent var objFileUp = this.removeChild( "FileUpTransfer00" );   // Destroy Object objFileUp.destroy(); objFileUp = null; ``` |
