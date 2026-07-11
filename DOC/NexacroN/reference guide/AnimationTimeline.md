# 17.AnimationTimeline

17.1개요

17.2속성

17.3메서드

17.4이벤트

```
아이템으로 등록된 Animation 오브젝트를 순서대로 수행하는 오브젝트입니다.
```

## 17.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- AnimationTimeline 오브젝트는 디자인 시 생성할 수 없습니다.
   스크립트에서 동적 생성 후 addChild() 로 추가하여 사용하여야 합니다.
   AnimationTimeline 오브젝트를 동적으로 생성할 때는 "nexacro." 구문을 반드시 사용하여야 합니다.

- AnimationTimeline 오브젝트에 addTarget() 메소드로 AnimationTimelineItem 오브젝트를 여러개 등록할 수 있습니다.

- AnimationTimeline 오브젝트 실행 시 AnimationTimelineItem 은 등록된 순서로 실행되며, 먼저 실행된 아이템이 종료된 후 다음 아이템이 실행됩니다.
```

## 17.1.2생성자

```
AnimationTimeline( strName, objParent )
```

|  |
| --- |
| ``` // Create Object   var objAniTime = new nexacro.AnimationTimeline("AnimationTimeline00", this);    // Add Object to Parent Form   this.addChild( "AnimationTimeline00", objAniTime );    // Remove Object form Parent Form   this.removeChild("AnimationTimeline00");    // Destroy Object   objAniTime.destroy();  objAniTime = null; ``` |
