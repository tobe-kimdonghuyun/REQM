# 25.FileDialog

25.1개요

25.2속성

25.3메서드

25.4이벤트

```
사용자가 파일을 열거나 저장할 경로를 선택하기 위한 파일 선택 대화상자 컴포넌트입니다.
```

## 25.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- 속성에 따라 지원되는 환경과 범위가 다르므로 사용에 주의하여야 합니다.
```

## 25.1.2생성자

|  |
| --- |
| ``` // Create Object var obj = new FileDialog("FileDialog00", this);  // Add Object to Parent Form   this.addChild(obj.name, obj);  // Remove Object form Parent var obj = this.removeChild( "FileDialog00" );   // Destroy Object obj.destroy(); obj = null; ``` |
