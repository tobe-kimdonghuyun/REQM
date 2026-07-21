# 133.XPush

133.1개요

133.2속성

133.3메서드

133.4이벤트

```
X-PUSH 서버에서 전달되는 메시지를 받을 수 있는 클라이언트 컴포넌트입니다.
```

## 133.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- X-PUSH 서버와 연결을 맺고 인증을 통과한 후 자신이 받을 Topic 을 메시지 타입과 메시지 키를 사용하여 등록하면 X-PUSH 서버로부터 공급되는 메시지 수신할 수 있습니다.

- 메시지 타입은 메시지의 종류나 그룹에 해당하고 메시지 키는 각 메시지를 구분하기 위한 인덱스의 역할을 합니다.

- WRE 에서 XPush 기능을 사용하려면 X-PUSH 서버의 버전이 v2.6 이상이어야 합니다.
- 모바일 NRE, WRE에서 실행 시 앱(또는 브라우저)이 background로 내려가거나 foreground로 올라올때 connect, disconnect, subscribe 등의 동작을 자동으로 처리하지 않으며 onsuccess, onerror 이벤트도 발생하지 않습니다.
```

## 133.1.2생성자

|  |
| --- |
| ``` // Create Object   var obj = new XPush("XPush00", this);  // Add Object to Parent Form   this.addChild(obj.name, obj);  // Remove Object form Parent var obj = this.removeChild( "XPush00" );   // Destroy Object obj.destroy(); obj = null; ``` |
