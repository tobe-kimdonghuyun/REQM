# 28.FileUpload

28.1개요

28.2속성

28.3메서드

28.4이벤트

```
FileUpload 는 파일 업로드 작업을 수행하는 컴포넌트입니다.
```

## 28.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- fileuploaditem 은 fileuploaditemedit 와 fileuploaditembutton 한개씩으로 구성되며
   FileUpload 컴포넌트는 여러개의 fileuploaditem 을 가질 수 있습니다.

- Invisible 오브젝트인 FileUpTransfer 를 통해서 파일을 업로드하는 기능과 같지만 UI가 필요할 때 사용할 수 있습니다.

- fileuploaditemedit 에는 선택된 파일정보가 표시되며 직접입력할 수 없습니다.

- 여러개의 파일을 설정하고 upload() 메소드를 호출하면 HTTP/HTTPS 를 통해서 파일을 업로드합니다.


◆ Desktop WRE 제약

- Chrome, FireFox 브라우저는 실제 파일경로가 표시되지 않는 제약사항으로 파일정보 중 파일경로가 "fakepath" 로 표시됩니다.


◆ Control 표시 참고

- scrollbartype 속성값 또는 실행 환경(Desktop, Mobile)에 따라 스크롤바 영역에 표시되는 컨트롤이 달라집니다. 조건에 따라 ScrollBarControl 또는 ScrollIndicatorControl 중 하나가 적용됩니다.
  도움말에서 Structure 항목의 이미지는 모든 조건에 동시에 표시할 수 없어 ScrollBarControl 기준으로만 작성된 점을 참고해주세요.
```

## 28.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_08_FileUpload3.png?raw=true)

## 28.1.3컴포넌트, 내부 컨텐츠 크기

```
FileUpload 컴포넌트의 내부 컨텐츠 크기를 결정하는 기준입니다.
```

|  |  |
| --- | --- |
| FileUpload Component     * FileUpload 컴포넌트의 Height 가 전체 fileuploaditem 의 Height 보다 작을 경우 vscrollbar 가 표시됩니다. | |
| Width | FileUpload 컴포넌트의 width 속성값이 적용됩니다. |
| Height | FileUpload 컴포넌트의 height 속성값이 적용됩니다. |
| fileuploaditem Control | |
| Left | 0 으로 적용됩니다. |
| Top | FileUpload 컴포넌트의 itemcount 속성값과 fileuploaditem 컨트롤의 Height 에 따라 각 아이템별로 계산된 값이 적용됩니다. |
| Width | FileUpload 의 width 속성값이 적용됩니다. |
| Height | FileUpload 컴포넌트의 itemheight 속성값이 적용됩니다.  FileUpload 컴포넌트의 itemheight 속성값이 없으면 fileuploaditemedit 와 fileuploaditembutton 의 Height 중 큰 값이 적용됩니다. |
| fileuploaditemedit Control | |
| Left | 0 으로 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | fileuploaditem 컨트롤의 Width 에서 fileuploaditembutton 컨트롤의 Width 를 뺀 값이 적용됩니다. |
| Height | FileUpload 컴포넌트의 itemheight 속성값이 적용됩니다.  FileUpload 컴포넌트의 itemheight 속성값이 없으면 텍스트 크기에 맞게 계산된 값과 fileuploaditembutton 컨트롤의 Height 값 중 큰 값이 적용됩니다. |
| fileuploaditembutton Control | |
| Left | fileuploaditem 의 Right 에서 fileuploaditembutton 의 Width 를 뺀 값이 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | buttonsize 속성값이 적용됩니다.  buttonsize 속성값이 없으면 텍스트 길이에 맞게 계산된 값이 적용됩니다. |
| Height | FileUpload 컴포넌트의 itemheight속성값이 적용됩니다.  FileUpload 컴포넌트의 itemheight속성값이 없으면 텍스트 크기에 맞게 계산된 값과 fileuploaditemedit 컨트롤의 Height 값 중 큰 값이 적용됩니다. |

## 28.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| ItemButton 이동 | Tab | 아이템 순서대로 FileUploadItemButton 에 포커스가 이동합니다. |
| ItemButton Click | Enter | 선택되어 있는 아이템이 클릭 처리되어 onfindclick 이벤트가 발생합니다. |
| ItemButton Click | Space | 선택되어 있는 아이템이 클릭 처리되어 onfindclick 이벤트가 발생합니다. |
| 스크롤 이동(페이지) | PageUp/PageDown | vscrollbar가 활성화됐을 때 페이지 단위(화면에 표시되는 아이템 개수)로 스크롤합니다. |

## 28.1.5Accessibility Key Action

```
접근성 기능이 활성화 되어 있을 때 적용되는 키 액션입니다.
```

| Action | Key | Description |
| --- | --- | --- |
| ItemButton 이동 | Tab | 아이템 순서대로 FileUploadItemButton 에 포커스가 이동합니다. |
| 선택상자 이동 | 아래방향키 | 선택상자가 FileUploadItemEdit 에 있다면 FileUploadItemButton 으로 선택상자가 이동합니다.  선택상자가 FileUploadItemButton 에 있다면 다음 아이템의 FileUploadItemEdit 로 선택상자가 이동합니다.    선택상자가 마지막 아이템의 FileUploadItemButton 에 있다면 Tab Order 가 다음인 컴포넌트로 선택상자가 이동합니다. |
| 선택상자 이동 | 위방향키 | 선택상자가 FileUploadItemButton 에 있다면 FileUploadItemEdit 로 선택상자가 이동합니다.  선택상자가 FileUploadItemEdit 에 있다면 이전 아이템의 FileUploadItemButton 으로 선택상자가 이동합니다.    선택상자가 첫번째 아이템의 FileUploadItemEdit 에 있다면 Tab Order 가 이전인 컴포넌트로 선택상자가 이동합니다. |
| ItemButton Click | Enter | 선택되어 있는 아이템이 클릭 처리되어 onfindclick 이벤트가 발생합니다. |
| ItemButton Click | Space | 선택되어 있는 아이템이 클릭 처리되어 onfindclick 이벤트가 발생합니다. |
| 스크롤 이동(페이지) | PageUp/PageDown | vscrollbar가 활성화됐을 때 페이지 단위(화면에 표시되는 아이템 개수)로 스크롤합니다. |

## 28.1.6생성자

```
FileUpload.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | FileUpload 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | FileUpload 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 FileUpload 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 FileUpload 의 left 가 결정됩니다. |
| vTop | String, Number | FileUpload 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 FileUpload 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 FileUpload 의 top 이 결정됩니다. |
| vWidth | String, Number | FileUpload 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 FileUpload 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 FileUpload 의 width 가 결정됩니다. |
| vHeight | String, Number | FileUpload 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 FileUpload 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 FileUpload 의 height 가 결정됩니다. |
| vRight | String, Number | FileUpload 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 FileUpload 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 FileUpload 의 right 가 결정됩니다. |
| vBottom | String, Number | FileUpload 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 FileUpload 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 FileUpload 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | FileUpload 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | FileUpload 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | FileUpload 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | FileUpload 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new FileUpload();  objComp.init( "FileUpload00", 30, 120, 196, 46 ); objComp.init( "FileUpload00", 30, 120, 196, 46, null, null ); objComp.init( "FileUpload00", null, null, 300, "400px", "80%", 300 ); objComp.init( "FileUpload00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "FileUpload00", "FileUpload22:10", 300, null, null, "FileUpload33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objFileUpload = new FileUpload();   objFileUpload.init("FileUpload", 30, 120, 196, 46, null, null); objFileUpload.init("FileUpload", null, null, 300, "400px", "80%", 300); or var objFileUpload = new FileUpload("FileUpload", 30, 120, 196, 46, null, null); var objFileUpload = new FileUpload("FileUpload", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("FileUpload", objFileUpload);    // Insert Object to Parent Form   this.insertChild(1, "FileUpload", objFileUpload);    // Remove Object form Parent Form   this.removeChild("FileUpload");    // Show Object   objFileUpload.show();    // Destroy Object   objFileUpload.destroy();  objFileUpload = null; ``` |

## 28.1.7Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| selected | userstatus | 컴포넌트의 특정 아이템이 선택된 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 28.1.8Control

| Name | | TypeName |
| --- | --- | --- |
| fileuploaditem | | nexacro.FileUploadItemControl |
| vscrollbar | | nexacro.ScrollBarControl |
| vscrollindicator | | nexacro.ScrollIndicatorControl |
