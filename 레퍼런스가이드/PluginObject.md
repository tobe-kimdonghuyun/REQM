# 142.PluginObject

142.1개요

142.2메서드

```
WebBrowser, Plugin 컴포넌트에서 반환하는 오브젝트를 Wrapping 하는 Wrapper 오브젝트입니다.
```

## 142.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☐ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- WebBrowser 컴포넌트에서 getProperty() 메소드 실행 시 로드된 웹페이지의 window 또는 document 객체를 PluginObject 로 Wrapping 하여 반환합니다.
   WebBrowser 컴포넌트에서 callMethod() 메소드 실행 시 오브젝트를 리턴한 경우 PluginObject 로 Wrapping 되어 반환될 수 있습니다.

- Plugin 컴포넌트에서 getProperty(), callMethod() 메소드 실행 시 오브젝트를 리턴한 경우 PluginObject 로 Wrapping 되어 반환될 수 있습니다.

- 반환된 PluginObject 에서 getProperty() 메소드 실행 시 반환값이 객체일 경우 PluginObject 로 Wrapping 하여 반환합니다.

- 사용을 완료한 PluginObject 객체는 명시적으로 destroy 하여야 합니다.
   PluginObject 객체를 destroy 하지 않을 경우 메모리 누수가 발생할 수 있습니다.
```
