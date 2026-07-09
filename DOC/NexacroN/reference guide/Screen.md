# 2.Screen

2.1개요

2.2속성

```
어플리케이션에서 사용할 스크린 정보를 관리하는 오브젝트 입니다.
```

## 2.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- Screen 마다 themeid, initvaluefileid 와 같은 Environment 속성값을 별도로 설정할 수 있습니다.

- Screen 목록 중 어플리케이션에 적용되는 Screen 은 다음의 선택기준을 따릅니다.

  1) 어플리케이션이 실행될 환경에 대한 정보를 동적으로 생성하여 Screen 선택의 기준으로 사용
    1-1) 실행될 환경이 모바일이면 화면의 물리적 가로크기를 기준으로 "mobile_small", "mobile_medium", "mobile_large" 중 한개를 선택
  2) 1번에서 결정된 기준값과 type 속성값이 일치하는 Screen 을 선택
  3) 2번에서 선택된 Screen 목록이 2 개 이상이면 1번에서 결정된 기준값과 specifiedos 속성값이 일치하는 Screen 을 선택
  4) 3번에서 선택된 Screen 목록이 2 개 이상이면 1번에서 결정된 기준값과 specifiedlocale 속성값이 일치하는 Screen 을 선택
  5) 4번에서 선택된 Screen 목록이 2 개 이상이면 첫번째로 정의된 Screen 을 선택
  
  * 2번 선택 과정에서 1번에서 결정된 기준값과 type 속성값이 일치하는 Screen 이 없을 경우
    1번에서 결정된 기준값보다 작은 Screen 을 선택하고, 작은 Screen 도 없을 경우는 큰 Screen 을 선택합니다.
    예를 들어 1번에서 결정된 기준값이 "mobile_large" 이고 Screen 목록에는 type 속성값이 "desktop" 인 Screen 만 있다면,
    절차상으로는 "mobile_medium", "mobile_small" Screen 정보를 순서대로 찾고 "desktop" 인 Screen 정보를 찾게 됩니다.

  * iPad 시리즈(mini1, 2, 3, 4, iPad1, 2, air1, air2, pro 등)는 디바이스 구분정보가 부족하여 항상 "mobile_large" 로 적용됩니다.

- 선택된 Screen 에 따라 어플리케이션이 로딩될 때 zoomfactortype 속성값을 기준으로 Zoom 이 자동 적용됩니다.

- portrait 상태에서 "mobile_small" 은 "480x768", "mobile_medium" 은 "640x1024", "mobile_large" 는 "800x1280" 해상도로 처리됩니다.
```
