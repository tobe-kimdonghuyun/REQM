# 145.XmlSerializer

145.1개요

145.2속성

145.3메서드

```
DOMDocument 오브젝트를 해석하여 XML 문자열을 생성하기 위한 오브젝트입니다.
```

## 145.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- 자바스크립트의 XMLSerializer 와 별도로 넥사크로에서 제공하는 오브젝트입니다.
```

## 145.1.2생성자

```
new nexacro.XmlSerializer();
```

|  |
| --- |
| ``` // Create Object var objXml = new nexacro.XmlSerializer();  // Create XML String var strXML = objXml.serializeToString( objDOM ); ``` |
