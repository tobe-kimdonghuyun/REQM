# 26.FileDownload

26.1개요

26.2속성

26.3메서드

26.4이벤트

```
FileDownload는 파일 다운로드 작업을 수행하는 컴포넌트입니다.
```

## 26.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

```
- invisible 오브젝트인 FileDownTransfer 를 통해서 파일을 내려받는 기능과 같지만 UI가 필요할 때 사용할 수 있습니다.

- downloadurl 을 지정하고 FileDownload 를 클릭하면 지정한 파일을 HTTP/HTTPS 를 통해 지정된 경로로 내려받습니다.
```

## 26.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_07_FileDownload1.png?raw=true)

## 26.1.3컴포넌트, 내부 컨텐츠 크기

```
FileDownload 컴포넌트의 크기를 결정하는 기준입니다.
```

|  |  |
| --- | --- |
| FileDownload Component | |
| Width | FileDownload 컴포넌트의 width 속성값이 적용됩니다.  텍스트의 길이가 Width 보다 클 경우 텍스트가 잘려서 표시됩니다. |
| Height | FileDownload 컴포넌트의 height 속성값이 적용됩니다.  텍스트의 크기가 Height 보다 클 경우 텍스트가 잘려서 표시됩니다. |

## 26.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| Click | Enter | 클릭 처리되어 onclick 이벤트가 발생합니다. |
| Click | Space | 클릭 처리되어 onclick 이벤트가 발생합니다. |

## 26.1.5Accessibility Key Action

```
접근성 기능이 활성화 되어 있을 때 적용되는 키 액션입니다.
```

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 선택상자 이동 | 상하방향키 | Tab Order 가 이전/다음인 컴포넌트로 선택상자가 이동합니다. |
| Click | Enter | 클릭 처리되어 onclick 이벤트가 발생합니다. |
| Click | Space | 클릭 처리되어 onclick 이벤트가 발생합니다. |

## 26.1.6생성자

```
FileDownload.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | FileDownload 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | FileDownload 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 FileDownload 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 FileDownload 의 left 가 결정됩니다. |
| vTop | String, Number | FileDownload 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 FileDownload 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 FileDownload 의 top 이 결정됩니다. |
| vWidth | String, Number | FileDownload 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 FileDownload 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 FileDownload 의 width 가 결정됩니다. |
| vHeight | String, Number | FileDownload 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 FileDownload 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 FileDownload 의 height 가 결정됩니다. |
| vRight | String, Number | FileDownload 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 FileDownload 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 FileDownload 의 right 가 결정됩니다. |
| vBottom | String, Number | FileDownload 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 FileDownload 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 FileDownload 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | FileDownload 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | FileDownload 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | FileDownload 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | FileDownload 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new FileDownload();  objComp.init( "FileDownload00", 30, 120, 196, 46 ); objComp.init( "FileDownload00", 30, 120, 196, 46, null, null ); objComp.init( "FileDownload00", null, null, 300, "400px", "80%", 300 ); objComp.init( "FileDownload00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "FileDownload00", "FileDownload22:10", 300, null, null, "FileDownload33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objFileDownload = new FileDownload();   objFileDownload.init("FileDownload", 30, 120, 196, 46, null, null); objFileDownload.init("FileDownload", null, null, 300, "400px", "80%", 300); or var objFileDownload = new FileDownload("FileDownload", 30, 120, 196, 46, null, null); var objFileDownload = new FileDownload("FileDownload", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("FileDownload", objFileDownload);    // Insert Object to Parent Form   this.insertChild(1, "FileDownload", objFileDownload);    // Remove Object form Parent Form   this.removeChild("FileDownload");    // Show Object   objFileDownload.show();    // Destroy Object   objFileDownload.destroy();  objFileDownload = null; ``` |

## 26.1.7Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| pushed | userstatus | 컴포넌트가 push된 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |
