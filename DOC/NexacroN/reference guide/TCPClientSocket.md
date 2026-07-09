# 131.TCPClientSocket

131.1개요

131.2속성

131.3메서드

131.4이벤트

```
TCP 통신을 사용하여 서버에 연결하여 정보를 송수신할 수 있는 클라이언트 컴포넌트입니다.
```

## 131.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☐ Edge | ☐ Chrome | ☐ Safari | ☐ Firefox | ☐ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☐ Android | ☐ iOS/iPadOS |  |  |  |

```
- 1:1 연결방식의 TCP 통신 Socket 기능을 지원하고 있습니다.
```

## 131.1.2생성자

|  |
| --- |
| ``` // Create Object   var obj = new TCPClientSocket("TCPClientSocket00", this);  // Add Object to Parent Form   this.addChild(obj.name, obj);  // Remove Object form Parent var obj = this.removeChild( "TCPClientSocket00" );   // Destroy Object obj.destroy(); obj = null; ``` |
