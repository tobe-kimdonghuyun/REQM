# 7.Form > Layout

7.1개요

7.2속성

```
Form 의 하위요소인 Layout 오브젝트입니다.
```

## 7.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- 기본적으로 한 개의 Layout 오브젝트가 자동으로 정의되며, 멀티 Layout 의 경우 여러개의 Layout 오브젝트가 Form 하위에 정의됩니다.

- Layout 오브젝트의 속성은 넥사크로 스튜디오에서 Form 을 선택하면 "Layout Information" 그룹에 표시되며, 여기에 설정된 속성값은 Layout 오브젝트에 저장됩니다.
  멀티 Layout 일 경우 Form 내부의 Layout 선택을 변경하면 "Layout Information" 그룹 속성값이 해당 Layout 에 저장된 값으로 표시됩니다.

- Layout 오브젝트의 속성은 넥사크로 스튜디오에서만 값을 설정할 수 있고, 실행중에는 수정할 수 없습니다.

- 선택된 Screen 에 표시될 Layout 의 선택기준은 다음과 같습니다.
  
  1) 선택된 Screen 의 ID 가 screenid 속성에 정의된 LayOut 을 선택
  2) 1번에서 선택된 Layout 목록이 2 개 이상이면 Screen 의 너비와 오차가 가장 적은 Layout 을 선택
  3) 2번에서 선택된 Layout 목록이 2 개 이상이면 Screen 의 높이와 오차가 가장 적은 Layout 을 선택
  4) 3번에서 선택된 Layout 목록이 2 개 이상이면 먼저 정의된 Layout 을 선택
  
  * 각 단계에서 만족하는 Layout 이 없을 경우 Default Layout 이 표시됩니다.
  * 모바일 환경에서는 1번 선택 과정에서 실제 디바이스의 방향값과 Layout 에 정의된 방향값이 일치하여야 합니다.

- portrait 상태에서 "mobile_small" 은 "480x768", "mobile_medium" 은 "640x1024", "mobile_large" 는 "800x1280" 해상도로 처리됩니다.
```
