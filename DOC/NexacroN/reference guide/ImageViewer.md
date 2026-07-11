# 46.ImageViewer

46.1개요

46.2속성

46.3메서드

46.4이벤트

```
ImageViewer는 이미지를 화면에 출력하기위해 사용하는 컴포넌트입니다.

ImageViewer를 이용해 원하는 형태의 Button을 제작해 사용할 수 있습니다.
```

## 46.1.1지원 환경

| Desktop NRE | | Desktop WRE | | | | |
| --- | --- | --- | --- | --- | --- | --- |
| ☑ Windows | ☑ macOS | ☑ Edge | ☑ Chrome | ☑ Safari | ☑ Firefox | ☑ Opera |
| Mobile NRE | | Mobile WRE | | | | |
| ☑ Android | ☑ iOS/iPadOS | ☑ Android | ☑ iOS/iPadOS |  |  |  |

## 46.1.2컴포넌트 구조

![](https://raw.githubusercontent.com/TOBESOFT-DOCS/CHM_Nexacro_N_V24/refs/heads/main/images//nexacro17_13_ImageViewer1.png?raw=true)

## 46.1.3컴포넌트, 내부 컨텐츠 크기

```
ImageViewer 컴포넌트와 내부 컨텐츠 크기를 결정하는 기준입니다.

- ImageViewer 컴포넌트의 fittocontents 속성값이 "none" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| ImageViewer Component | |
| Width | ImageViewer 컴포넌트의 width 속성값이 적용됩니다.  내부 컨텐츠의 Width 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다.  내부 컨텐츠의 Width 보다 클 경우 여백이 표시됩니다. |
| Height | ImageViewer 컴포넌트의 height 속성값이 적용됩니다.  내부 컨텐츠의 Height 보다 작을 경우 내부 컨텐츠가 잘려서 표시됩니다.  내부 컨텐츠의 Height 보다 클 경우 여백이 표시됩니다. |
| imagearea Control | |
| Left | ImageViewer 컴포넌트의 stretch, imagealign 속성값에 맞게 계산된 값이 적용됩니다. |
| Top | ImageViewer 컴포넌트의 stretch, imagealign 속성값에 맞게 계산된 값이 적용됩니다. |
| Width | ImageViewer 컴포넌트의 stretch 속성값에 맞게 계산된 값이 적용됩니다. |
| Height | ImageViewer 컴포넌트의 stretch 속성값에 맞게 계산된 값이 적용됩니다. |
| imagetext Control | |
| Left | 0 으로 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | ImageViewer 컴포넌트의 Width 가 적용됩니다. |
| Height | ImageViewer 컴포넌트의 Height 가 적용됩니다. |

```
- ImageViewer 컴포넌트의 fittocontents 속성값이 "width" 일 경우 기준입니다.
  ImageViewer 컴포넌트의 Width 가 결정된 후 stretch 속성값에 따라 이미지 크기가 변형될 수 있습니다.
```

|  |  |
| --- | --- |
| ImageViewer Component | |
| Width | imagearea 컨트롤의 Width 와 imagetext 컨트롤의 Width 중 큰 값이 적용됩니다. |
| imagearea Control | |
| Left | 0 으로 적용됩니다. |
| Width | 이미지의 원본 너비값이 적용됩니다. |
| imagetext Control | |
| Width | 텍스트 길이에 맞게 계산된 값이 적용됩니다.  텍스트가 여러줄 일 경우 가장 긴 줄을 기준으로 계산됩니다. |

```
- ImageViewer 컴포넌트의 fittocontents 속성값이 "height" 일 경우 기준입니다.
  ImageViewer 컴포넌트의 Height 가 결정된 후 stretch 속성값에 따라 이미지 크기가 변형될 수 있습니다.
```

|  |  |
| --- | --- |
| ImageViewer Component | |
| Height | imagearea 컨트롤의 Height 와 imagetext 컨트롤의 Height 중 큰 값이 적용됩니다. |
| imagearea Control | |
| Top | 0 으로 적용됩니다. |
| Height | 이미지의 원본 높이값이 적용됩니다. |
| imagetext Control | |
| Height | 텍스트 크기에 맞게 계산된 값이 적용됩니다.  텍스트가 여러줄 일 경우 전체 줄의 높이가 계산됩니다. |

```
- ImageViewer 컴포넌트의 fittocontents 속성값이 "both" 일 경우 기준입니다.
```

|  |  |
| --- | --- |
| ImageViewer Component | |
| Width | imagearea 컨트롤의 Width 와 imagetext 컨트롤의 Width 중 큰 값이 적용됩니다. |
| Height | imagearea 컨트롤의 Height 와 imagetext 컨트롤의 Height 중 큰 값이 적용됩니다. |
| imagearea Control | |
| Left | 0 으로 적용됩니다. |
| Top | 0 으로 적용됩니다. |
| Width | 이미지의 원본 너비값이 적용됩니다. |
| Height | 이미지의 원본 높이값이 적용됩니다. |
| imagetext Control | |
| Width | 텍스트 길이에 맞게 계산된 값이 적용됩니다.  텍스트가 여러줄 일 경우 가장 긴 줄을 기준으로 계산됩니다. |
| Height | 텍스트 크기에 맞게 계산된 값이 적용됩니다.  텍스트가 여러줄 일 경우 전체 줄의 높이가 계산됩니다. |

## 46.1.4Basic Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| Click | Enter | 클릭 처리되어 onclick 이벤트가 발생합니다. |
| Click | Space | 클릭 처리되어 onclick 이벤트가 발생합니다. |

## 46.1.5Accessibility Key Action

| Action | Key | Description |
| --- | --- | --- |
| 포커스 이동 | Tab | Tab 이동 순서에 따라 다음 컴포넌트로 포커스가 이동합니다. |
| 선택상자 이동 | 상하방향키 | Tab Order 가 이전/다음인 컴포넌트로 선택상자가 이동합니다. |

## 46.1.6생성자

```
ImageViewer.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
```

| Parameters | Type | Description |
| --- | --- | --- |
| strName | String | ImageViewer 의 ID를 문자열로 설정합니다. |
| vLeft | String, Number | ImageViewer 의 left 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 right 속성값을 기준으로 ImageViewer 의 left 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 ImageViewer 의 left 가 결정됩니다. |
| vTop | String, Number | ImageViewer 의 top 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 bottom 속성값을 기준으로 ImageViewer 의 top 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 ImageViewer 의 top 이 결정됩니다. |
| vWidth | String, Number | ImageViewer 의 width 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 ImageViewer 의 width 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 ImageViewer 의 width 가 결정됩니다. |
| vHeight | String, Number | ImageViewer 의 height 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트값은 무시되고 pixel 값으로 ImageViewer 의 height 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 ImageViewer 의 height 가 결정됩니다. |
| vRight | String, Number | ImageViewer 의 right 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vLeft, vWidth 값을 모두 설정했을 경우 vRight 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 left 속성값을 기준으로 ImageViewer 의 right 가 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 width 속성값을 기준으로 ImageViewer 의 right 가 결정됩니다. |
| vBottom | String, Number | ImageViewer 의 bottom 속성값을 pixel 또는 비율("%") 단위의 숫자로 설정합니다.    vTop, vHeight 값을 모두 설정했을 경우 vBottom 값은 무시됩니다.     * 값에 기준 컴포넌트를 포함하여 설정했을 때 :   pixel 단위로 설정 시 기준 컴포넌트의 top 속성값을 기준으로 ImageViewer 의 bottom 이 결정됩니다.  비율("%") 단위로 설정 시 기준 컴포넌트의 height 속성값을 기준으로 ImageViewer 의 bottom 이 결정됩니다. |
| vMinWidth | String, Number | ImageViewer 이(가) 화면에 표시되는 최소 너비값을 pixel 단위의 숫자로 설정합니다. |
| vMaxWidth | String, Number | ImageViewer 이(가) 화면에 표시되는 최대 너비값을 pixel 단위의 숫자로 설정합니다.    vMinWidth 보다 작은 값을 설정하면 vMinWidth 값으로 설정됩니다. |
| vMinHeight | String, Number | ImageViewer 이(가) 화면에 표시되는 최소 높이값을 pixel 단위의 숫자로 설정합니다. |
| vMaxHeight | String, Number | ImageViewer 이(가) 화면에 표시되는 최대 높이값을 pixel 단위의 숫자로 설정합니다.    vMinHeight 보다 작은 값을 설정하면 vMinHeight 값으로 설정됩니다. |
| ``` var objComp = new ImageViewer();  objComp.init( "ImageViewer00", 30, 120, 196, 46 ); objComp.init( "ImageViewer00", 30, 120, 196, 46, null, null ); objComp.init( "ImageViewer00", null, null, 300, "400px", "80%", 300 ); objComp.init( "ImageViewer00", 0, 0, 200, 100, null, null, 300, 500, 200, 500 ); objComp.init( "ImageViewer00", "ImageViewer22:10", 300, null, null, "ImageViewer33:10", "20%", 300, 500, 200, 500 ); ``` | | |

|  |
| --- |
| ``` // Create Object   var objImageViewer = new ImageViewer();   objImageViewer.init("ImageViewer", 30, 120, 196, 46, null, null); objImageViewer.init("ImageViewer", null, null, 300, "400px", "80%", 300); or var objImageViewer = new ImageViewer("ImageViewer", 30, 120, 196, 46, null, null); var objImageViewer = new ImageViewer("ImageViewer", null, null, 300, "400px", "80%", 300);   // Add Object to Parent Form   this.addChild("ImageViewer", objImageViewer);    // Insert Object to Parent Form   this.insertChild(1, "ImageViewer", objImageViewer);    // Remove Object form Parent Form   this.removeChild("ImageViewer");    // Show Object   objImageViewer.show();    // Destroy Object   objImageViewer.destroy();  objImageViewer = null; ``` |

## 46.1.7Status

| Name | Type | Description |
| --- | --- | --- |
| disabled | status | 컴포넌트가 비활성화된 상태 |
| mouseover | status | 마우스 커서가 컴포넌트 또는 컴포넌트의 특정 아이템 위에 있는 상태 |
| focused | status | 컴포넌트가 포커스를 받은 상태 |
| enabled | status | 컴포넌트가 활성화된 상태 |

## 46.1.8Control

| Name | | TypeName |
| --- | --- | --- |
| imagearea | | nexacro.ImageAreaControl |
| imagetext | | nexacro.Static |
