# 18.AnimationTimeline > AnimationTimelineItem

18.1개요

18.2속성

18.3메서드

```
AnimationTimeline 오브젝트에서 addTarget() 메소드 실행 시 파라미터 값을 기준으로 생성되는 아이템 오브젝트입니다.
```

## 18.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- addTarget() 메소드 실행 시 AnimationTimelineItem 오브젝트가 생성되어 AnimationTimeline 오브젝트에 아이템으로 등록됩니다.

- AnimationTimeline 오브젝트에 addTarget() 메소드로 AnimationTimelineitem 오브젝트를 여러개 등록할 수 있습니다.

- AnimationTimeline 오브젝트 실행 시 AnimationTimelineItem 은 등록된 순서로 실행되며, 먼저 실행된 아이템이 종료된 후 다음 아이템이 실행됩니다.
```

## 18.1.2생성자

```
AnimationTimeline( strName, objParent )
```

|  |
| --- |
| ``` // Create Object   var objAniTime = new nexacro.AnimationTimeline( "AnimationTimeline00", this ); var objAni = new nexacro.Animation( "Animation00", this );  // Add Object to Parent Form   this.addChild( "AnimationTimeline00", objAniTime );  // Set Animation Object  objAni.duration = 1000; objAni.easing = "linear";  // Add Item to Animation Object objAni.addTarget( "AniItem00", this.Button00, "left:600" ); objAniTime.addTarget( "Animation00", objAni, 0 );  // Play Object objAniTime.play();   // Remove Object form Parent this.removeChild( "AnimationTimeline00" ); objAniTime.removeTarget( "Animation00" );   // Destroy Object objAni.destroy(); objAniTime.destroy(); objAni = null; objAniItem = null; ``` |
