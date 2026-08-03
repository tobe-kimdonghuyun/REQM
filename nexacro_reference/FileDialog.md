# nexacroN V24 — FileDialog

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 11개

---

## Components > Component > FileDialog

### FileDialog

> Components > Component > FileDialog

**Description**

사용자가 파일을 열거나 저장할 경로를 선택하기 위한 파일 선택 대화상자 컴포넌트입니다.

**Remark**

- 속성에 따라 지원되는 환경과 범위가 다르므로 사용에 주의하여야 합니다.

**Property**

| Name | Description |
| --- | --- |
| accept | FileDialog 에 적용될 파일형식을 설정하는 속성입니다. |
| defaultextension | FileDialog 에 선택되어 있는 파일형식의 확장자를 파일명에 포함시킬지 설정하는 속성입니다. |
| filter | FileDialog 에 적용될 파일형식을 설정하는 속성입니다. |
| filterindex | FileDialog 에 기본으로 표시될 파일형식을 인덱스값으로 설정하는 속성입니다. |
| id | FileDialog의 고유 식별자를 설정하는 속성입니다. |
| name | FileDialog 의 이름을 설정하는 속성입니다. |
| parent | FileDialog 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| destroy | 스크립트에서 동적으로 생성한 FileDialog 을(를) 삭제하는 메소드입니다. |
| open | FileDialog 를 표시하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onclose | FileDialog 를 닫았을 때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### accept

> Components > Component > FileDialog > Property > accept

**Description**

FileDialog 에 적용될 파일형식을 설정하는 속성입니다.

**Syntax**

```javascript
FileDialog.accept[= strAccept]
```

**Setting Syntax**

```javascript
this.FileDialog00.accept = ".png, .exe"; 
this.FileDialog00.accept = "image/png, application/*"; 
this.FileDialog00.accept = "audio/*, .png, .exe";
```
- **`strAccept`** — FileDialog 에 적용될 파일형식을 확장자 또는 MIME 형태로 설정합니다.

".png", ".exe", ".png, .exe" 형식의 확장자 형태로 파일형식을 설정합니다.
"image/png", "application/*", "audio" 형식의 MIME 형태로 파일형식을 설정합니다.

"audio/*, .png, .exe" 와 같이 "," 문자를 구분자로 하여 확장자, MIME 구분없이 여러개의 파일형식을 설정할 수 있습니다.

* Mobile WRE 는 MIME 형태만 설정할 수 있습니다.

**Remark**

◆ 데스크탑 NRE 제약

- FileDialog 에 파일형식을 적용하려면 filter 속성을 설정하여야 합니다.


◆ Mobile WRE 제약

- MIME 으로 "image", "video", "audio" 값만 설정할 수 있습니다.
   "image/png" 와 같은 형식의 확장자 제한방식은 적용되지 않습니다.

- MIME 으로 "image", "video", "audio" 설정 시 각각 메모리에 로드된 "이미지", "비디오", "오디오" 파일이 있는 폴더만 접근할 수 있습니다.

- 구글드라이브, NAS 와 같이 외부영역에 위치한 파일은 설정한 파일형식이 적용되지 않습니다.


◆ iOS/iPadOS Default Web Browser 제약

- 사진보관함은 설정한 파일형식이 적용되지 않습니다.


---

### defaultextension

> Components > Component > FileDialog > Property > defaultextension

**Description**

FileDialog 에 선택되어 있는 파일형식의 확장자를 파일명에 포함시킬지 설정하는 속성입니다.

**Syntax**

```javascript
FileDialog.defaultextension[= bExtension]
```

**Setting Syntax**

```javascript
bExtension ::= 'true' | 'false'
```
```javascript
this.FileDialog00.defaultextension = false;
```
- **`true`** — FileDialog 에 파일명만 설정하였을 경우 현재 선택된 파일형식의 확장자를 자동으로 포함합니다.

FileDialog 에 파일명과 확장자를 모두 설정한 경우는 설정값이 적용됩니다.
- **`false`** — FileDialog 에서 기본선택 확장자를 적용하지 않습니다.

**Remark**

- Nexacro Runtime Environment에서 FileDialog 를 "SAVE" 옵션으로 오픈했을 경우만 적용되는 속성입니다.

- defaultextension 속성값을 설정하지 않으면 true 로 적용됩니다.

- FileDialog 에 적용될 파일형식은 filter, filterindex 속성으로 설정합니다.


---

### filter

> Components > Component > FileDialog > Property > filter

**Description**

FileDialog 에 적용될 파일형식을 설정하는 속성입니다.

**Syntax**

```javascript
FileDialog.filter[= strFilter]
```

**Setting Syntax**

```javascript
this.FileDialog00.filter = "All(*.*)|*.*|Text Files(*.txt)|*.txt|"; 
this.FileDialog00.filter = "Excel Files(*.xlsx)|*.xls;*.xlsx|Word Files(*.docx)|*.doc;*.docx|ALL Files(*.*)|*.*|";
```
- **`strFilter`** — FileDialog 에 적용될 파일형식을 "설명|확장자" 형식으로 설정합니다.

"|" 문자를 구분자로 하여 설명과 실제 확장자를 쌍으로 여러개의 파일형식을 설정할 수 있습니다.
한 개의 파일형식내에서 복수개의 확장자를 지정할 때는 "*.xlsx;*.xls" 와 같이 ";" 문자로 구분하여 설정합니다.

**Remark**

- filter 속성값을 설정하지 않으면 빈문자열이 설정되고, "All(*.*)|*.*|" 로 동작합니다.

- FileDialog 가 표시될 때 선택될 필터는 filterindex 속성에 설정합니다.

- 웹브라우저 환경일 때 FileDialog 에 파일형식을 적용하려면 accept 속성을 설정하여야 합니다.


---

### filterindex

> Components > Component > FileDialog > Property > filterindex

**Description**

FileDialog 에 기본으로 표시될 파일형식을 인덱스값으로 설정하는 속성입니다.

**Syntax**

```javascript
FileDialog.filterindex[= nFilterIndex]
```

**Setting Syntax**

```javascript
this.FileDialog00.filterindex = 1;
```
- **`nFilterIndex`** — FileDialog 에 설정된 파일형식 중 기본으로 표시될 파일형식의 인덱스를 숫자로 설정합니다.

**Remark**

- filterindex 속성값을 설정하지 않으면 0 으로 적용됩니다.

- FileDialog 에 표시될 파일형식은 filter 속성을 설정하여야 합니다.
   파일형식의 인덱스는 0 부터 시작하며 첫번째 파일형식부터 차례로 인덱스가 설정됩니다.

- 화면에 표시된 FileDialog 의 파일형식을 변경하면 filterindex 속성에 반영됩니다.

- 웹브라우저 환경일 때 FileDialog 에 파일형식을 적용하려면 accept 속성을 설정하여야 합니다.


---

### id

> Components > Component > FileDialog > Property > id

**Description**

FileDialog의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
FileDialog.id
```

**Setting Syntax**

- **`id`** — FileDialog를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### name

> Components > Component > FileDialog > Property > name

**Description**

FileDialog 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
FileDialog.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### parent

> Components > Component > FileDialog > Property > parent

**Description**

FileDialog 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
FileDialog.parent
```

**Setting Syntax**

```javascript
var objParent = this.FileDialog00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- FileDialog 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### 메서드 (Methods)

### destroy

> Components > Component > FileDialog > Method > destroy

**Description**

스크립트에서 동적으로 생성한 FileDialog 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
FileDialog.destroy()
```

**Parameters**

var bSucc = this.FileDialog00.destroy();

**Return**

FileDialog 이(가) 정상적으로 삭제되면 true 를 반환합니다.

FileDialog 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 FileDialog 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

FileDialog.initFileDialog.showForm.addChildForm.insertChildForm.removeChild


---

### open

> Components > Component > FileDialog > Method > open

**Description**

FileDialog 를 표시하는 메소드입니다.

**Syntax**

```javascript
FileDialog.open( strTitle, constOpenMode [, strInitialPath [, strFileName [, nWidth [, nHeight ]]]] )
```

**Parameters**

```
File Dialog 의 TitleBar 에 표시할 문자열을 나타냅니다.

* macOS NRE 와 web runtime environment 는 설정값이 적용되지 않습니다.
```

**Return**

메소드 실행에 성공하면 true 를 반환합니다.

파라미터값을 잘 못 설정하거나 메소드 실행에 실패하면 false 를 반환합니다.

**Remark**

- open() 메소드 실행 후 다음 스크립트가 바로 실행되며, 파일 선택 후 FileDialog를 닫으면 onclose 이벤트가 발생합니다.

- FileDialog 에 적용될 파일형식은 환경에 따라 filter 또는 accept 속성으로 설정할 수 있습니다.

- nWidth, nHeight 를 설정한 경우 FileDialog 가 모니터의 중앙에 표시됩니다.

- strInitialPath 에 사용할 수 있는 Alias 실제경로입니다.

	
		Alias
		OS
		Path
		Remark
	

	
		%USERAPP%
		Windows
		C:\Users\[UserName]\AppData\LocalLow\TOBESOFT\Nexacro N\24
		 
	

	
		macOS
		/Users/[UserName]/Library/TOBESOFT/Nexacro N/24
		 
	

	
		Android
		/data/data/[PackageName]/files/NEXACRO/
* Key를 설정한 경우에는 아래와 같이 적용
/data/data/[PackageName]/files/[Key]

		 
	

	
		iOS
		[AppRoot]/Library/Application Support/NEXACRO/ 
		 
	

	
		%USERAPPLOCAL%
		Windows
		C:\Users\[UserName]\AppData\Local
		 
	

	
		macOS
		/Users/[UserName]/Library/Application Support
		 
	

	
		%MYDOCUMENT%
%DOCUMENT%
		Windows
		"내 문서" 로 설정한 위치
		 
	

	
		macOS
		/Users/[UserName]/Documents
		 
	

	
		%SD_CARD%
		Android
		/storage/emulated/0/Android/data/[PackageName]/files/
		 
	

	
		%INSTALLROOT%
		Windows
		Packing 시 Update Type이 "Update(Local+Server)" 또는 "Local"인 경우
%USERAPP%\projects\[Key]\[BootStrapURL]
Packing 시 Update Type이 "Server"인 경우
%USERAPP%
		 
	

	
		%EXECUTE%
		Windows
		NRE: nexacro.exe 실행 위치
WRE: 브라우저 실행 위치
		 
	

	
		macOS
		앱이 설치된 경로
		 
	

	
		%COMPONENTHOME%
		Windows
		C:\Users\[UserName]\AppData\LocalLow\TOBESOFT\Nexacro N\24\Component\[Key]\
		 
	


  * %USERAPP% : 애플리케이션에서 할당받은 공간, 다른 애플리케이션 접근불가
  * %SD_CARD% : 모바일 기기의 외부 저장소 공간, 다른 애플리케이션 접근가능


---

### 이벤트 (Events)

### onclose

> Components > Component > FileDialog > Event > onclose

**Description**

FileDialog 를 닫았을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onclose(obj:nexacro.FileDialog,e:nexacro.FileDialogEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

◆ web runtime environment 제약

- "FileDialog.LOAD" 또는 "FileDialog.MULTILOAD" 옵션으로 open() 메소드 실행 후 파일을 선택했을 때 onclose 이벤트가 발생합니다.
   FileDialog 를 "취소" 또는 "X" 버튼으로 닫았을 경우 onclose 이벤트가 발생하지 않습니다.


---
