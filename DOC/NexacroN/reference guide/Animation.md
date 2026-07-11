# 15.Animation

15.1개요

15.2속성

15.3메서드

15.4이벤트

```
아이템으로 등록된 컴포넌트에 애니메이션 효과를 적용하는 오브젝트입니다.
```

## 15.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- Animation 오브젝트는 디자인 시 생성할 수 없습니다.
   스크립트에서 동적 생성 후 addChild() 로 추가하여 사용하여야 합니다.
   Animation 오브젝트를 동적으로 생성할 때는 "nexacro." 구문을 반드시 사용하여야 합니다.

- Animation 오브젝트에 addTarget() 메소드로 AnimationItem 오브젝트를 여러개 등록할 수 있습니다.

- Animation 오브젝트 실행 시 아이템으로 등록된 컴포넌트에 애니메이션 효과를 동시에 적용합니다.
```

## 15.1.2생성자

```
Animation( strName, objParent )
```

|  |
| --- |
| ``` // Create Object   var objAni = new nexacro.Animation("Animation00", this);    // Add Object to Parent Form   this.addChild( "Animation00", objAni );  // Set Object  objAni.duration = 1000; objAni.easing = "linear"; objAni.setEventHandler( "onbegin", this.Animation00_onbegin, this);  // Add Item to Object objAni.addTarget( "AniItem00", this.Button00, "left:600" );  // Play Object objAni.play();   // Remove Object form Parent var objAniItem = objAni.removeTarget( "AniItem00" ); this.removeChild( "Animation00" );   // Destroy Object objAniItem.destroy(); objAni.destroy(); objAniItem = null; objAni = null; ``` |
