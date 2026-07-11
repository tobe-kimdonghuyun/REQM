# 71.VirtualFile

71.1개요

71.2속성

71.3메서드

71.4이벤트

```
로컬시스템의 파일을 읽거나 쓰기위해 사용되는 가상파일 오브젝트입니다.
```

## 71.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☐ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- read, write 메소드 실행 시 메모리 제약으로 2GB 이상의 파일을 처리하지 못할 수 있습니다. 또한 운영체제와 사용하는 장비에 따라 처리할 수 있는 파일의 크기는 다를 수 있습니다.

◆ web runtime environment  제약

- web runtime environment 에서 VirtualFile 오브젝트를 단독으로 사용할 수 없습니다.
   FileUpload, FileUpTransfer 의 filelist 속성, FileDialogEventInfo 의 virtualfiles 속성과 
   DragEventInfo, GridDragEventInfo, ListViewDragEventInfo  등에서 filelist 속성으로 제공하는 VirtualFile 만 사용할 수 있습니다.

- 따라서, web runtime environment 에서 일부 웹브라우저를 지원한다고 표시된 open(), close(), getFileSize() 메소드와 filename 속성은
   VirtualFile 오브젝트가 위에 예시된 속성으로 제공될 때만 사용할 수 있습니다.
```

## 71.1.2생성자

|  |
| --- |
| ``` // Create Object   var obj = new VirtualFile("VirtualFile00", this);  // Add Object to Parent Form   this.addChild(obj.name, obj);  // Remove Object form Parent var obj = this.removeChild( "VirtualFile00" );   // Destroy Object obj.destroy(); obj = null; ``` |
