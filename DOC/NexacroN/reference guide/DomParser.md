# 140.DomParser

140.1개요

140.2속성

140.3메서드

140.4이벤트

```
XML 문자열을 해석하여 DOMDocument 오브젝트를 생성하기 위한 오브젝트입니다.
```

## 140.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- 자바스크립트의 DOMParser 와 별도로 넥사크로에서 제공하는 오브젝트입니다.
```

## 140.1.2생성자

```
new nexacro.DomParser();
```

|  |
| --- |
| ``` // Create Object var objDom = new nexacro.DomParser();  // Create DOMDocument Object var objDomDoc = objDom.parseFromString( strXMLData ); ``` |
