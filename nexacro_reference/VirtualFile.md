# nexacroN V24 — VirtualFile

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 35개

---

## Components > Component > VirtualFile

### VirtualFile

> Components > Component > VirtualFile

**Description**

로컬시스템의 파일을 읽거나 쓰기위해 사용되는 가상파일 오브젝트입니다.

**Remark**

- read, write 메소드 실행 시 메모리 제약으로 2GB 이상의 파일을 처리하지 못할 수 있습니다. 또한 운영체제와 사용하는 장비에 따라 처리할 수 있는 파일의 크기는 다를 수 있습니다.

◆ web runtime environment  제약

- web runtime environment 에서 VirtualFile 오브젝트를 단독으로 사용할 수 없습니다.
   FileUpload, FileUpTransfer 의 filelist 속성, FileDialogEventInfo 의 virtualfiles 속성과 
   DragEventInfo, GridDragEventInfo, ListViewDragEventInfo  등에서 filelist 속성으로 제공하는 VirtualFile 만 사용할 수 있습니다.

- 따라서, web runtime environment 에서 일부 웹브라우저를 지원한다고 표시된 open(), close(), getFileSize() 메소드와 filename 속성은
   VirtualFile 오브젝트가 위에 예시된 속성으로 제공될 때만 사용할 수 있습니다.

**Property**

| Name | Description |
| --- | --- |
| async | VirtualFile 에 요청된 작업이 동작되는 방식을 설정하는 속성입니다. |
| filename | VirtualFile 에 로드된 파일의 이름을 갖는 읽기전용 속성입니다. |
| fullpath | VirtualFile 에 오픈된 파일의 전체 경로정보를 갖는 읽기전용 속성입니다. |
| id | VirtualFile의 고유 식별자를 설정하는 속성입니다. |
| name | VirtualFile 의 이름을 설정하는 속성입니다. |
| parent | VirtualFile 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| path | VirtualFile 에 오픈된 파일의 경로정보를 갖는 읽기전용 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addEvent | VirtualFile 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| addEventHandler | VirtualFile 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| close | VirtualFile 로 오픈한 파일을 닫는 메소드입니다. |
| copy | VirtualFile 에서 특정 파일을 복사하는 메소드입니다. |
| createDirectory | VirtualFile 에서 폴더를 생성하는 메소드입니다. |
| deleteDirectory | VirtualFile 에서 폴더를 삭제하는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 VirtualFile 을(를) 삭제하는 메소드입니다. |
| findEventHandler | VirtualFile 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getEventHandler | VirtualFile 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| getFileList | 특정 위치의 파일 또는 하위폴더를 목록으로 반환하는 메소드입니다. |
| getFileSize | VirtualFile 에 오픈된 파일의 크기를 반환하는 메소드입니다. |
| insertEventHandler | VirtualFile 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| isExist | 지정된 파일 또는 폴더의 존재여부를 반환하는 메소드입니다. |
| open | VirtualFile 에 로드된 파일을 조건에 맞게 오픈하는 메소드입니다. |
| read | VirtualFile 에 오픈된 파일의 내용을 읽는 메소드입니다. |
| readLine | VirtualFile 에 오픈된 파일의 내용을 특정 위치까지 읽는 메소드입니다. |
| remove | VirtualFile 에 지정된 파일을 삭제하는 메소드입니다. |
| removeEvent | VirtualFile 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| removeEventHandler | VirtualFile 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| rename | VirtualFile 에서 특정 파일의 위치를 이동하거나 파일명을 변경하는 메소드입니다. |
| renameDirectory | VirtualFile 에서 폴더명을 변경하는 메소드입니다. |
| seek | VirtualFile 에 오픈한 파일에서 파일포인터의 위치를 이동하는 메소드입니다. |
| setEventHandler | VirtualFile 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| write | VirtualFile 에 오픈된 파일에 데이터를 저장하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onerror | VirtualFile 에 요청된 작업이 실패했을 때 발생되는 이벤트입니다. |
| onsuccess | VirtualFile 에 요청된 작업이 성공했을 때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### async

> Components > Component > VirtualFile > Property > async

**Description**

VirtualFile 에 요청된 작업이 동작되는 방식을 설정하는 속성입니다.

**Setting Syntax**

```javascript
bAsync ::= 'true' | 'false'
```
- **`true`** — VirtualFile 에 요청된 작업이 비동기(Async) 로 동작됩니다.
- **`false`** — VirtualFile 에 요청된 작업이 동기(Sync) 로 동작됩니다.

**Remark**

- async 속성값을 설정하지 않으면 true 로 적용됩니다.


◆ Mobile 제약

- 모바일 환경에서는 항상 비동기(Async) 로 동작합니다.


---

### filename

> Components > Component > VirtualFile > Property > filename

**Description**

VirtualFile 에 로드된 파일의 이름을 갖는 읽기전용 속성입니다.

**Setting Syntax**

- **`filename`** — VirtualFile 에 오픈된 파일의 이름만 갖습니다.

**Remark**

◆ web runtime environment 제약

- web runtime environment 에서 VirtualFile 오브젝트를 단독으로 사용할 수 없습니다.
   FileUpload, FileUpTransfer, DragEventInfo 의 filelist 속성, FileDialogEventInfo 의 virtualfiles 속성 등으로 제공되는 VirtualFile 오브젝트만 사용할 수 있습니다.


---

### fullpath

> Components > Component > VirtualFile > Property > fullpath

**Description**

VirtualFile 에 오픈된 파일의 전체 경로정보를 갖는 읽기전용 속성입니다.

**Setting Syntax**

- **`fullpath`** — VirtualFile 에 오픈된 파일의 이름을 포함한 전체경로를 갖습니다.

**Remark**

- 웹브라우저 환경에서는 파일의 경로가 실제경로가 아닌 "FakePath" 형태의 가상경로로 지원됩니다.
   따라서, 웹브라우저 환경일 때는 지원되지 않는 속성입니다.


---

### id

> Components > Component > VirtualFile > Property > id

**Description**

VirtualFile의 고유 식별자를 설정하는 속성입니다.

**Syntax**

```javascript
VirtualFile.id
```

**Setting Syntax**

- **`id`** — VirtualFile를 구별할 수 있는 유일값을 갖습니다.

**Remark**

-  addChild나 insertChild 메소드를 사용하여 컴포넌트를 등록할때 parent 가 자식컴포넌트를 구별하기 위한 고유한 key값입니다.

- 속성명이나 메소드명과 같은 예약어를 id 속성값으로 설정할 경우 오류가 발생할 수 있습니다.

- 컴포넌트의 속성은 아니지만 편의를 위하여 넥사크로 스튜디오에서 설정할 수 있는 기능이 제공됩니다.

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### name

> Components > Component > VirtualFile > Property > name

**Description**

VirtualFile 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
VirtualFile.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### parent

> Components > Component > VirtualFile > Property > parent

**Description**

VirtualFile 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
VirtualFile.parent
```

**Setting Syntax**

```javascript
var objParent = this.VirtualFile00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- VirtualFile 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### path

> Components > Component > VirtualFile > Property > path

**Description**

VirtualFile 에 오픈된 파일의 경로정보를 갖는 읽기전용 속성입니다.

**Setting Syntax**

- **`path`** — VirtualFile 에 오픈된 파일의 이름을 제외한 경로정보를 갖습니다.

**Remark**

- 웹브라우저 환경에서는 파일의 경로가 실제경로가 아닌 "FakePath" 형태의 가상경로로 지원됩니다.
   따라서, 웹브라우저 환경일 때는 지원되지 않는 속성입니다.


---

### 메서드 (Methods)

### addEvent

> Components > Component > VirtualFile > Method > addEvent

**Description**

VirtualFile 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**

```javascript
VirtualFile.addEvent( strEventID )
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| strEventID | String | VirtualFile 에 추가할 이벤트의 ID 를 문자열로 설정합니다. |

**Sample Call**

```javascript
var bResult = this.VirtualFile00.addEvent( "onmove" );
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | 이벤트 추가에 성공하면 true 를 반환합니다.

이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다. |

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- VirtualFile 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.


---

### addEventHandler

> Components > Component > VirtualFile > Method > addEventHandler

**Description**

VirtualFile 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
VirtualFile.addEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| strEventID | String | 핸들러 함수가 추가될 이벤트의 ID를 설정합니다. |
| objFunc | Object | 이벤트 발생 시 수행될 핸들러 함수를 설정합니다. |
| objTarget | Object | 핸들러 함수가 정의된 영역을 설정합니다. |

**Sample Call**

```javascript
this.VirtualFile00_onsuccess = function( obj:nexacro.VirtualFile,  e:nexacro.VirtualFileEventInfo) { // 수행할 스크립트 };
var nIndex = this.VirtualFile00.addEventHandler( "onsuccess", this.VirtualFile00_onsuccess, this);
```

**Return**

| Type | Description |
| --- | --- |
| Number | 이벤트에 추가된 핸들러 함수의 인덱스를 반환합니다.
동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다. |


---

### clearEventHandler

> Components > Component > VirtualFile > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
VirtualFile.clearEventHandler( strEventID )
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| strEventID | String | 모든 핸들러 함수를 제거할 이벤트의 ID를 설정합니다. |

**Sample Call**

```javascript
var nCnt = this.VirtualFile00.clearEventHandler( "onsuccess" );
```

**Return**

| Type | Description |
| --- | --- |
| Number | 특정 이벤트에서 제거된 핸들러 함수의 갯수를 반환합니다. |

**Remark**

- 특정 핸들러 함수만 제거하려면 removeEventHandler() 메소드를 사용하여야 합니다.


---

### close

> Components > Component > VirtualFile > Method > close

**Description**

VirtualFile 로 오픈한 파일을 닫는 메소드입니다.

**Syntax**

```javascript
VirtualFile.close()
```

**Parameters**

this.VirtualFile00.close();

**Return**

없음

**Remark**

- 파일 닫기에 성공하면 onsuccess 이벤트가 발생합니다.
   파일 닫기에 실패하면 onerror 이벤트가 발생합니다.


◆ web runtime environment 제약

- web runtime environment 에서 VirtualFile 오브젝트를 단독으로 사용할 수 없습니다.
   FileUpload, FileUpTransfer, DragEventInfo 의 filelist 속성, FileDialogEventInfo 의 virtualfiles 속성 등으로 제공되는 VirtualFile 오브젝트만 사용할 수 있습니다.

- Safari 브라우저에서는 지원되지 않는 메소드입니다.


---

### copy

> Components > Component > VirtualFile > Method > copy

**Description**

VirtualFile 에서 특정 파일을 복사하는 메소드입니다.

**Syntax**

```javascript
VirtualFile.copy( strSrc, strDest );
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| strSrc | String | 복사할 원본 파일명을 경로와 함께 설정합니다.

절대경로 또는 Alias 를 사용하여 설정합니다. |
| strDest | String | 복사하여 생성될 파일명을 경로와 함께 설정합니다.

절대경로 또는 Alias 를 사용하여 설정합니다. |

**Sample Call**

```javascript
var bSucc = this.VirtualFile00.copy("%USERAPP%source.txt", "%USERAPP%dest.txt") ;
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | 파라미터가 생략되거나 허용되지 않는 문자가 사용된 경우에는 false 를 반환합니다.

그 외의 정상적인 경우에는 true 를 반환합니다. |

**Remark**

- 파일 복사에 성공하면 onsuccess 이벤트가 발생합니다.
  파일 복사에 실패하면 onerror 이벤트가 발생합니다.

◆ Windows NRE 제약
- Environment.filesecurelevel 속성값을 "all"로 설정한 경우에는 모든 경로에 접근을 허용합니다. 
  단, strDest 파라미터로 설정한 경로 중 %MYDOCUMENT% 경로를 제외한 모든 경로에 대해 사용자에게 접근 허용 여부를 확인한 후 사용자가 승인한 경우에만 메소드를 실행합니다.

◆ Alias
- strSrc 와 strDest 에 사용할 수 있는 Alias 실제경로입니다.
	
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

### createDirectory

> Components > Component > VirtualFile > Method > createDirectory

**Description**

VirtualFile 에서 폴더를 생성하는 메소드입니다.

**Syntax**

```javascript
VirtualFile.createDirectory( strPath, [bAllCreate] )
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| strPath | String | 생성할 폴더명을 경로와 함께 설정합니다.

"C:\\TobeSoft\\TestFolder" 와 같이 절대경로를 설정 시 해당 위치에 폴더가 생성됩니다.
"My_Folder" 와 같이 디렉토리명만 설정할 경우 "내문서" 위치에 폴더가 생성됩니다. |
| bAllCreate | Boolean | true 설정 시 중간의 경로를 모두 생성한 후 폴더가 생성됩니다.
false 설정 시 중간의 경로가 존재할 경우만 폴더가 생성됩니다.

값 생략 시 false 로 적용됩니다. |

**Sample Call**

```javascript
var bSucc;
bSucc = this.VirtualFile00.createDirectory( "C:\\TobeSoft\\TestFolder", true );
bSucc = this.VirtualFile00.createDirectory( "TestFolder" ) ;
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | 폴더 생성여부와 관계없이 메소드 수행 여부를 반환합니다. |

**Remark**

- 폴더 생성에 성공하면 onsuccess 이벤트가 발생합니다.
   폴더 생성에 실패하면 onerror 이벤트가 발생합니다.


---

### deleteDirectory

> Components > Component > VirtualFile > Method > deleteDirectory

**Description**

VirtualFile 에서 폴더를 삭제하는 메소드입니다.

**Syntax**

```javascript
VirtualFile.deleteDirectory( strPath [, bAllChild] )
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| strPath | String | 삭제할 폴더명을 경로와 함께 설정합니다.

"C:\\TobeSoft\\TestFolder" 와 같이 절대경로를 설정 시 해당 위치의 폴더가 삭제됩니다.
"My_Folder" 와 같이 폴더명만 설정할 경우 "내문서" 위치의 폴더가 삭제됩니다. |
| bAllChild | Boolean | true 설정 시 삭제되는 폴더의 하위 폴더와 파일이 모두 삭제됩니다.
false 설정 시 삭제되는 폴더의 하위 폴더와 파일을 삭제하지 않습니다.

값 생략 시 false 로 적용됩니다. |

**Sample Call**

```javascript
var bSucc;
bSucc = this.VirtualFile00.deleteDirectory( "TestFolder" );
bSucc = this.VirtualFile00.deleteDirectory( "C:\\TobeSoft\\TestFolder", true );
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | 폴더 삭제여부와 관계없이 메소드 수행 여부를 반환합니다. |

**Remark**

- 폴더 삭제에 성공하면 onsuccess 이벤트가 발생합니다.
   폴더 삭제에 실패하면 onerror 이벤트가 발생합니다.


---

### destroy

> Components > Component > VirtualFile > Method > destroy

**Description**

스크립트에서 동적으로 생성한 VirtualFile 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
VirtualFile.destroy()
```

**Parameters**

var bSucc = this.VirtualFile00.destroy();

**Return**

| Type | Description |
| --- | --- |
| Boolean | VirtualFile 이(가) 정상적으로 삭제되면 true 를 반환합니다.

VirtualFile 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다. |

**Remark**

- 동적으로 생성한 VirtualFile 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChildVirtualFile.initVirtualFile.show


---

### findEventHandler

> Components > Component > VirtualFile > Method > findEventHandler

**Description**

VirtualFile 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
VirtualFile.findEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| strEventID | String | 핸들러 함수를 찾을 이벤트의 ID를 설정합니다. |
| objFunc | Object | 찾으려고 하는 핸들러 함수를 설정합니다. |
| objTarget | Object | 찾으려고 하는 핸들러 함수가 정의된 영역을 설정합니다. |

**Sample Call**

```javascript
this.VirtualFile00_onsuccess = function( obj:nexacro.VirtualFile,  e:nexacro.VirtualFileEventInfo) { //수행할 스크립트 };
var nIndex = this.VirtualFile00.findEventHandler( "onsuccess", this.VirtualFile00_onsuccess, this );
```

**Return**

| Type | Description |
| --- | --- |
| Number | 이벤트에서 찾으려고 하는 핸들러 함수의 인덱스를 반환합니다.
찾으려고 하는 핸들러 함수가 존재하지 않는다면 "-1"을 반환합니다. |

**Remark**

- 인덱스는 "0"부터 시작합니다.


---

### getEventHandler

> Components > Component > VirtualFile > Method > getEventHandler

**Description**

VirtualFile 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
VirtualFile.getEventHandler( strEventID, nIdx )
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| strEventID | String | 핸들러 함수를 얻을 이벤트의 ID를 설정합니다. |
| nIdx | Number | 얻으려고 하는 핸들러 함수의 인덱스를 설정합니다.
인덱스는 "0"부터 시작합니다. |

**Sample Call**

```javascript
var objFunc = VirtualFile00.getEventHandler( "onsuccess", 0 );
```

**Return**

| Type | Description |
| --- | --- |
| Object | 지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.
지정된 인덱스에 핸들러 함수가 존재하지 않는다면 "null"을 반환합니다. |


---

### getFileList

> Components > Component > VirtualFile > Method > getFileList

**Description**

특정 위치의 파일 또는 하위폴더를 목록으로 반환하는 메소드입니다.

**Syntax**

```javascript
VirtualFile.getFileList( strPath, strSearchExpr [, constOption] )
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| strPath | String | 파일 또는 폴더 목록을 가져올 대상 폴더를 설정합니다.

절대경로 또는 Alias 를 사용하여 설정합니다. |
| strSearchExpr | String | 반환되는 목록에 포함시킬 파일 또는 폴더의 검색조건을 정규표현식으로 설정합니다.
설정한 정규표현식을 파일명 또는 폴더명과 매칭시킵니다.

정규표현식에서 Escape 문자("\") 사용 시 두번("\\") 설정하여야 합니다.
ex) "Text" 뒤에 숫자가 붙은 파일명 또는 폴더명 검색 시 "Text\\d" 형태로 설정

정규표현식에서 "." 문자는 개행문자 이외의 모든 문자와 매칭되므로 "." 문자 자체를 매칭하려면 "\\." 로 설정하여야 합니다.
ex) 확장자가 "txt" 인 파일명 검색 시 "\\.txt$" 형태로 설정 |
| constOption | Constant | 반환되는 파일목록을 구성하는 검색옵션을 상수값으로 설정합니다.

"VirtualFile.findAll" 또는 1 (0x01) 설정 시 strPath 위치에 속한 파일과 폴더를 대상으로 검색합니다.
"VirtualFile.findFileOnly" 또는 2 (0x02) 설정 시 strPath 위치에 속한 파일을 대상으로 검색합니다.
"VirtualFile.findDirectoryOnly" 또는 4 (0x04) 설정 시 strPath 위치에 속한 폴더를 대상으로 검색합니다.

"VirtualFile.findRecursive" 또는 8 (0x08) 설정 시 하위 폴더에 대한 재귀검색을 합니다.
"VirtualFile.findCaseless" 또는 16 (0x10) 설정 시 대소문자를 구분하지 않고 검색합니다.

"VirtualFile.findRecursive" 와 "VirtualFile.findCaseless" 값은 다른 옵션과 "|" 문자로 구분하여 함께 설정할 수 있습니다.

값 생략 시 "VirtualFile.findAll" 로 적용됩니다. |

**Sample Call**

```javascript
this.VirtualFile00.getFileList( "%MYDOCUMENT%", "\\.txt$", VirtualFile.findFileOnly );
this.VirtualFile00.getFileList( "%MYDOCUMENT%", "\\.jpg$", VirtualFile.findFileOnly | VirtualFile.findRecursive );
this.VirtualFile00.getFileList( "%MYDOCUMENT%\\TestFolder", "^Folder.*\\d", VirtualFile.findDirectoryOnly | VirtualFile.findRecursive | VirtualFile.findCaseless );
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | 메소드 실행에 성공하면 true 를 반환합니다.
메소드 실행에 실패하거나 파라미터값을 잘 못 설정하면 false 를 반환합니다.

파일 또는 폴더 목록의 반환여부와 관계없이 메소드 실행여부를 반환합니다. |

**Remark**

- 파일 또는 폴더 목록 반환에 성공하면 onsuccess 이벤트가 발생합니다.
   파일 또는 폴더 목록 반환에 실패하면 onerror 이벤트가 발생합니다.

- onsuccess 이벤트에서 e 오브젝트(VirtualFileEventInfo)의 fileattributelist 속성으로 파일 또는 폴더 목록이 전달됩니다.

- strPath 파라미터에 사용할 수 있는 Alias 의 실제경로는 아래와 같습니다.

	
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

### getFileSize

> Components > Component > VirtualFile > Method > getFileSize

**Description**

VirtualFile 에 오픈된 파일의 크기를 반환하는 메소드입니다.

**Syntax**

```javascript
VirtualFile.getFileSize()
```

**Parameters**

this.VirtualFile00.getFileSize();

**Return**

| Type | Description |
| --- | --- |
| Boolean | 파일 크기의 반환여부와 관계없이 메소드의 수행여부를 반환합니다.

메소드 수행에 성공하면 true 를 반환합니다.
메소드 수행에 실패하면 false 를 반환합니다. |

**Remark**

- VirtualFile 의 open() 메소드를 사용하여 크기를 구할 파일을 먼저 오픈한 후 getFileSize() 메소드를 수행하여야 합니다.

- 파일크기 조회에 성공하면 onsuccess 이벤트가 발생합니다.
   파일크기 조회에 실패하면 onerror 이벤트가 발생합니다.

- 파일의 크기는 onsuccess 이벤트에서 "e" 오브젝트(VirtualFileEventInfo)의 filesize 속성값으로 전달됩니다.


◆ web runtime environment 제약

- web runtime environment 에서 VirtualFile 오브젝트를 단독으로 사용할 수 없습니다.
   FileUpload, FileUpTransfer, DragEventInfo 의 filelist 속성, FileDialogEventInfo 의 virtualfiles 속성 등으로 제공되는 VirtualFile 오브젝트만 사용할 수 있습니다.

- Safari 브라우저에서는 지원되지 않는 메소드입니다.


---

### insertEventHandler

> Components > Component > VirtualFile > Method > insertEventHandler

**Description**

VirtualFile 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
VirtualFile.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| strEventID | String | 핸들러 함수가 삽입될 이벤트의 ID 를 설정합니다. |
| nIndex | Number | 핸들러 함수가 삽입될 위치를 인덱스로 설정합니다.

-1 값 설정 시 마지막에 추가됩니다.
이벤트에 설정된 핸들러 함수의 갯수보다 큰 값을 설정한 경우 마지막에 추가됩니다.
NaN 값을 입력하면 ECMA 의 정수 변환 규칙에 따라 0 이 설정됩니다. |
| objFunc | Object | 이벤트 발생 시 수행될 핸들러 함수를 설정합니다. |
| objTarget | Object | 핸들러 함수가 정의된 영역을 설정합니다. |

**Sample Call**

```javascript
this.VirtualFile00_onsuccess = function( obj:nexacro.VirtualFile,  e:nexacro.VirtualFileEventInfo) { // 수행할 스크립트 };

var nIndex = this.VirtualFile00.insertEventHandler( "onsuccess", 0, this.VirtualFile00_onsuccess, this);
```

**Return**

| Type | Description |
| --- | --- |
| Number | 이벤트에 삽입된 핸들러 함수의 인덱스를 반환합니다.
동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다.

핸들러 함수가 정상적으로 삽입되지 않은 경우에는 -1 을 반환합니다. |

**Remark**

- 첫번째 핸들러 함수의 인덱스는 0 입니다.


---

### isExist

> Components > Component > VirtualFile > Method > isExist

**Description**

지정된 파일 또는 폴더의 존재여부를 반환하는 메소드입니다.

**Syntax**

```javascript
VirtualFile.isExist(strPath)
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| strPath | String | 존재여부를 확인할 파일 또는 폴더를 설정합니다.

절대경로 또는 Alias 를 사용하여 설정합니다. |

**Sample Call**

```javascript
this.VirtualFile00.isExist("%USERAPP%");
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | 파라미터가 생략되거나 허용되지 않는 문자가 사용된 경우에는 false 를 반환합니다.

그 외의 정상적인 경우에는 true 를 반환합니다. |

**Remark**

- 존재여부 반환에 성공하면 onsuccess 이벤트가 발생합니다.
   존재여부 반환에 실패하면 onerror 이벤트가 발생합니다.

- 검색된 파일목록은 onsuccess 이벤트에서 "e" 오브젝트(VirtualFileEventInfo)의 fileisexist 속성값으로 전달됩니다.

- strPath 에 사용할 수 있는 Alias 실제경로입니다.

	
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

### open

> Components > Component > VirtualFile > Method > open

**Description**

VirtualFile 에 로드된 파일을 조건에 맞게 오픈하는 메소드입니다.

**Syntax**

```javascript
VirtualFile.open( strFileName ,constOptions )
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| strFileName | String | 오픈할 파일명을 절대경로 또는 Alias 를 사용하여 설정합니다.

* FileUpload, FileUpTransfer, FileDialog 또는 Drag&Drop 으로 전달된 VirtualFile 오브젝트일 때만 strFileName 파라미터값을 null 또는 빈값으로 설정할 수 있습니다. |
| constOptions | Object | 파일을 오픈하는 옵션을 상수값으로 설정합니다.
각 옵션값들은 OR("|") 연산자를 사용하여 중복하여 설정할 수 있습니다.

VirtualFile.openRead 또는 1 설정 시 읽기전용으로 파일을 오픈합니다.
파일이 존재하지 않으면 에러가 발생합니다.

VirtualFile.openWrite 또는 2 설정 시 쓰기전용으로 파일을 오픈합니다.
파일이 존재하지 않으면 파일을 생성합니다.

VirtualFile.openAppend 또는 16 설정 시 읽기/쓰기 용도로 파일을 오픈합니다.
파일이 존재하면 오픈된 파일에서 파일포인터가 제일 마지막에 위치하게 됩니다.
파일이 존재하지 않으면 파일을 생성합니다.

VirtualFile.openCreate 또는 4096 설정 시 파일을 생성하며 오픈합니다.
파일이 존재하면 onerror 이벤트가 발생합니다.

VirtualFile.openText 또는 256 설정 시 파일을 텍스트모드로 오픈합니다.

VirtualFile.openBinary 또는 512 설정 시 파일을 이진모드로 오픈합니다. |

**Sample Call**

```javascript
this.VirtualFile00.open( "%USERAPP%test.txt", VirtualFile.openRead );
this.VirtualFile00.open( "%USERAPP%test.txt", VirtualFile.openWrite | VirtualFile.openAppend );
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | 파일의 오픈 여부와 관계없이 메소드 실행에 성공하면 true 를 반환합니다.

파일의 오픈 여부와 관계없이 메소드 실행에 실패하면 false 를 반환합니다.
파라미터를 생략하거나 잘못된 문자가 설정된 경우 false 를 반환합니다. |

**Remark**

- 파일 오픈에 성공하면 onsuccess 이벤트가 발생합니다.
   파일 오픈에 실패하면 onerror 이벤트가 발생합니다.

- VirtualFile 오브젝트에서 한 번에 할당받을 수 있는 메모리 크기 제약으로 2GB 이상 크기의 파일을 처리할 수 없습니다.

- strFileName 에 사용할 수 있는 Alias 실제경로입니다.

	
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


◆ web runtime environment  제약

- web runtime environment 에서 VirtualFile 오브젝트를 단독으로 사용할 수 없습니다.
   FileUpload, FileUpTransfer, DragEventInfo 의 filelist 속성, FileDialogEventInfo 의 virtualfiles 속성 등으로 제공되는 VirtualFile 오브젝트만 사용할 수 있습니다.

- Safari 브라우저에서는 지원되지 않는 메소드입니다.


---

### read

> Components > Component > VirtualFile > Method > read

**Description**

VirtualFile 에 오픈된 파일의 내용을 읽는 메소드입니다.

**Syntax**

```javascript
 VirtualFile.read([nLength [, strCharset]])
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| nLength | Number | 파일에서 읽어 올 길이를 Byte 단위의 숫자로 설정합니다.

값 생략 시 전체 파일을 읽어옵니다. |
| strCharset | String | 파일에서 읽어올 내용에 적용할 CharSet 을 설정합니다.

Windows NRE 만 적용되고 모바일은 "UTF-8" 로 동작합니다. |

**Sample Call**

```javascript
var varValue;
varValue = this.VirtualFile00.read(1000);
varValue = this.VirtualFile00.read(1000, "utf-8");
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | 파라미터에 허용되지 않는 문자가 사용된 경우에는 false 를 반환합니다.

그 외의 정상적인 경우에는 true 를 반환합니다. |

**Remark**

- 파일 읽기에 성공하면 onsuccess 이벤트가 발생합니다.
   파일 읽기에 실패하면 onerror 이벤트가 발생합니다.

- 읽어온 파일 내용은 onsuccess 이벤트에서 "e" 오브젝트(VirtualFileEventInfo)의 binarydata 또는 textdata 속성값으로 전달됩니다.

- Text 파일의 경우 첫부분에 문자셋정보(BOM:Byte Order Mark)가 포함되어 있다면  해당 부분을 제외하고 nLength 길이만큼 파일을 읽어들입니다.

- 파일의 내용을 읽은 후에는 파일포인터의 위치가 이동됩니다.


◆ Windows NRE 제약

- 파일 크기가 200MB 이상인 경우 nLength 파라미터 값을 지정하지 않거나 nLength 파라미터 값을 209,715,200Byte 이상으로 설정한 경우 onerror 이벤트가 발생합니다.
  (V8 엔진에서는 268,435,440Byte까지 지원하지만 내부적으로 인코딩 처리를 하면서 늘어나는 크기를 고려해 약 200MB 정도 크기까지 권장합니다).


---

### readLine

> Components > Component > VirtualFile > Method > readLine

**Description**

VirtualFile 에 오픈된 파일의 내용을 특정 위치까지 읽는 메소드입니다.

**Syntax**

```javascript
VirtualFile.readLine([strDelimeter[, strCharset]])
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| strDelimeter | String | 파일에서 읽기를 멈추는 구분자를 설정합니다.

값 생략 시 "\n" 으로 적용됩니다. |
| strCharset | String | 파일에서 읽어올 내용에 적용할 CharSet 을 설정합니다.

Windows NRE 만 적용되고 모바일은 "UTF-8" 로 동작합니다. |

**Sample Call**

```javascript
var varValue ;
varValue = this.VirtualFile00.readLine();
varValue = thie.VirtualFile00.readLine("\p");
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | 파라미터에 허용되지 않는 문자가 사용된 경우에는 false 를 반환합니다.

그 외의 정상적인 경우에는 true 를 반환합니다. |

**Remark**

- 파일 읽기에 성공하면 onsuccess 이벤트가 발생합니다.
   파일 읽기에 실패하면 onerror 이벤트가 발생합니다.

- 읽어온 파일 내용에서 strDelimeter 문자는 제외됩니다.

- 파일의 내용을 읽은 후에는 파일포인터의 위치가 이동됩니다.

- Binary 모드로 오픈된 파일인 경우 readLine() 메소드를 사용할 수 없습니다.
   읽어온 파일 내용은 onsuccess 이벤트에서 "e" 오브젝트(VirtualFileEventInfo)의 textdata 속성값으로 전달됩니다.


---

### remove

> Components > Component > VirtualFile > Method > remove

**Description**

VirtualFile 에 지정된 파일을 삭제하는 메소드입니다.

**Syntax**

```javascript
VirtualFile.remove( strFilePath )
VirtualFile.remove( objVirtualFile )
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| strFilePath | String | 삭제할 파일명을 경로와 함께 설정합니다.

절대경로 또는 Alias 를 사용하여 설정합니다. |
| objVirtualFile | Object | FileDialog 오브젝트에서 반환받은 삭제할 VirtualFile 오브젝트를 설정합니다.

메소드를 수행하는 VirtualFile 객체 자신을 설정할 수 없습니다.
자신을 설정하는 경우 onerror 이벤트가 발생합니다. |

**Sample Call**

```javascript
this.VirtualFile00.remove("%USERAPP%filename");

var objFileD = new FileDialog();
objFileD.open("", FileDialog.LOAD, "%USERAPP%", "");
VirtualFile.remove(obj.e.virtualfiles);
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | 파라미터가 생략되거나 허용되지 않는 문자가 사용된 경우에는 "false" 를 반환합니다.
그 외의 정상적인 경우에는 "true" 를 반환합니다. |

**Remark**

- 파일 삭제에 성공하면 onsuccess 이벤트가 발생합니다.
  파일이 존재하지 않거나 파일 삭제에 실패하면 onerror 이벤트가 발생합니다.

- sttrFilePath 에 사용할 수 있는 Alias 실제경로입니다.

	
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

### removeEvent

> Components > Component > VirtualFile > Method > removeEvent

**Description**

VirtualFile 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**

```javascript
VirtualFile.removeEvent( strEventID )
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| strEventID | String | VirtualFile 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다. |

**Sample Call**

```javascript
var bResult = this.VirtualFile00.removeEvent( "onmove" );
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | 이벤트 삭제에 성공하면 true 를 반환합니다.

이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다. |

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- VirtualFile 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- VirtualFile 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.


---

### removeEventHandler

> Components > Component > VirtualFile > Method > removeEventHandler

**Description**

VirtualFile 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
VirtualFile.removeEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| strEventID | String | 핸들러 함수를 제거할 이벤트의 ID를 설정합니다. |
| objFunc | Object | 제거할 핸들러 함수를 설정합니다. |
| objTarget | Object | 제거할 핸들러 함수가 정의된 영역을 설정합니다. |

**Sample Call**

```javascript
this.VirtualFile00_onsuccess = function( obj:nexacro.VirtualFile,  e:nexacro.VirtualFileEventInfo) { // 수행할 스크립트 };
var nIndex = this.VirtualFile00.removeEventHandler( "onsuccess", this.VirtualFile00_onsuccess, this);
```

**Return**

| Type | Description |
| --- | --- |
| Number | 핸들러 함수 제거에 성공하면 "1"을 반환합니다.
핸들러 함수 제거에 실패하면 "0"을 반환합니다. |

**Remark**

- 핸들러 함수가 제거되면 핸들러 함수의 인덱스가 "0"번부터 재조정됩니다.

- 이벤트에 등록된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하여야 합니다.


---

### rename

> Components > Component > VirtualFile > Method > rename

**Description**

VirtualFile 에서 특정 파일의 위치를 이동하거나 파일명을 변경하는 메소드입니다.

**Syntax**

```javascript
VirtualFile.rename( strOldname, strNewname );
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| strOldname | String | 위치를 이동하거나 이름을 변경할 파일명을 경로와 함께 설정합니다.

절대경로 또는 Alias 를 사용하여 설정합니다. |
| strNewname | String | 새로 이동될 위치와 파일명을 경로와 함께 설정합니다.

절대경로 또는 Alias 를 사용하여 설정합니다. |

**Sample Call**

```javascript
var bSucc;

bSucc = this.VirtualFile00.rename("%USERAPP%oldname.txt", "%USERAPP%newname.txt") ;
bSucc = this.VirtualFile00.rename("%USERAPP%file00.txt", "%SD_CARD%file00.txt") ;
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | 파라미터가 생략되거나 허용되지 않는 문자가 사용된 경우에는 false 를 반환합니다.

그 외의 정상적인 경우에는 true 를 반환합니다. |

**Remark**

- 파일 이동에 성공하면 onsuccess 이벤트가 발생합니다.
  파일 이동에 실패하면 onerror 이벤트가 발생합니다.

◆ Windows NRE 제약
- Environment.filesecurelevel 속성값을 "all"로 설정한 경우에는 모든 경로에 접근을 허용합니다. 
  단, strNewname 파라미터로 설정한 경로 중 %MYDOCUMENT% 경로를 제외한 모든 경로에 대해 사용자에게 접근 허용 여부를 확인한 후 사용자가 승인한 경우에만 메소드를 실행합니다.

◆ Alias
- strOldname 과 strNewname 에 사용할 수 있는 Alias 실제경로입니다.
	
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

### renameDirectory

> Components > Component > VirtualFile > Method > renameDirectory

**Description**

VirtualFile 에서 폴더명을 변경하는 메소드입니다.

**Syntax**

```javascript
VirtualFile.renameDirectory( strOldName, strNewName )
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| strOldName | String | 변경할 폴더명을 경로와 함께 설정합니다.

"C:\\TobeSoft\\TestFolder" 와 같이 절대경로를 설정 시 해당 위치의 폴더명이 변경됩니다.
"My_Folder" 와 같이 폴더명만 설정할 경우 "내문서" 위치의 폴더명이 변경됩니다. |
| strNewName | String | 경로를 포함하지 않은 새로운 폴더명을 문자열로 설정합니다. |

**Sample Call**

```javascript
var bChange;
bChange = this.VirtualFile00.renameDirectory( "TestFolder","TestFolder_New" );
bChange = this.VirtualFile00.renameDirectory( "C:\\TobeSoft\\TestFolder", "TestFolder_New" );
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | 폴더명 변경여부와 관계없이 메소드 수행 여부를 반환합니다. |

**Remark**

- 폴더명 변경에 성공하면 onsuccess 이벤트가 발생합니다.
   폴더명 변경에 실패하면 onerror 이벤트가 발생합니다.


---

### seek

> Components > Component > VirtualFile > Method > seek

**Description**

VirtualFile 에 오픈한 파일에서 파일포인터의 위치를 이동하는 메소드입니다.

**Syntax**

```javascript
VirtualFile.seek(nOffset[, constOption])
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| nOffset | Number | 현재 위치에서 파일포인터를 이동시킬 위치를 Byte 단위의 숫자로 설정합니다.

음수값 설정 시 현재 위치에서 시작위치 방향으로 포인터가 이동합니다. |
| constOption | Constant | 파일 포인터를 이동시킬때 적용할 옵션을 상수값으로 설정합니다.

"VirtualFile.seekBegin" 또는 0 설정 시 파일의 시작위치를 기준으로 파일포인터가 이동합니다.
"VirtualFile.seekCurrent" 또는 1 설정 시 현재 파일포인터 위치를 기준으로 이동합니다.
"VirtualFile.seekEnd" 또는 2 설정 시 파일의 마지막위치를 기준으로 파일포인터가 이동합니다.

값 생략 시 "VirtualFile.seekCurrent" 로 적용됩니다. |

**Sample Call**

```javascript
this.VirtualFile00.seek(1000);
this.VirtualFile00.seek(1000, VirtualFile.seekBegin);
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | 파라미터에 허용되지 않는 문자가 사용된 경우에는 false 를 반환합니다.

그 외의 정상적인 경우에는 true 를 반환합니다. |

**Remark**

- 파일포인터 이동에 성공하면 onsuccess 이벤트가 발생합니다.
   파일포인터 이동에 실패하면 onerror 이벤트가 발생합니다.


---

### setEventHandler

> Components > Component > VirtualFile > Method > setEventHandler

**Description**

VirtualFile 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
VirtualFile.setEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| strEventID | String | 핸들러 함수를 변경할 이벤트의 ID를 설정합니다. |
| objFunc | Object | 기존 핸들러 함수를 대체할 함수를 설정합니다. |
| objTarget | Object | 대체할 핸들러 함수가 정의된 영역을 설정합니다. |

**Sample Call**

```javascript
this.VirtualFile00_onsuccess = function( obj:nexacro.VirtualFile,  e:nexacro.VirtualFileEventInfo ) { //수행할 스크립트 };
var nIndex = this.VirtualFile00.setEventHandler( "onsuccess", this.VirtualFile00_onsuccess, this );
```

**Return**

| Type | Description |
| --- | --- |
| Number | 첫번째 핸들러 함수 변경에 성공하면 "0"을 반환합니다.
첫번째 핸들러 함수 변경에 실패하면 "-1"을 반환합니다. |

**Remark**

- 인덱스가 "0"번인 핸들러 함수를 새로운 함수로 대체합니다.

- 인덱스가 "0"번인 핸들러 함수가 없다면 "0"번 인덱스에 새로운 함수를 핸들러 함수로 추가합니다.


---

### write

> Components > Component > VirtualFile > Method > write

**Description**

VirtualFile 에 오픈된 파일에 데이터를 저장하는 메소드입니다.

**Syntax**

```javascript
VirtualFile.write( varData [, strCharset] )
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| varData | Variant | 오픈된 파일에 저장할 데이터를 문자열 또는 Buffer 오브젝트 형태로 설정합니다. |
| strCharset | String | 오픈된 파일에서 저장할 내용에 적용할 CharSet 을 설정합니다.

Windows NRE 만 적용되고 모바일은 "UTF-8" 로 동작합니다. |

**Sample Call**

```javascript
this.VirtualFile00.write( "test" );
this.VirtualFile00.write( new Object() );
this.VirtualFile00.write( "Hello!!", "utf-8" );
```

**Return**

| Type | Description |
| --- | --- |
| Boolean | 필수 파라미터가 생략되거나 파라미터에 허용되지 않는 문자가 사용된 경우에는 false 를 반환합니다.

그 외의 정상적인 경우에는 true 를 반환합니다. |

**Remark**

- 파일 저장에 성공하면 onsuccess 이벤트가 발생합니다.
   파일 저장에 실패하면 onerror 이벤트가 발생합니다.

- 오픈된 파일의 형태에 따라 Text 또는 Binary 데이터로 변환되어 저장하며 저장된 후 파일포인터가 이동합니다.

- write() 메소드가 수행되려면 파일을 오픈할 때 "VirtualFile.openWrite"  모드가 포함되어 있어야 합니다.

- 파일을 오픈할때 "VirtualFile.openAppend" 가 포함된 경우에는 무조건 파일의 마지막 위치에 데이터를 추가합니다.

- strCharset 에 "euc-kr", "Shift-JIS" 등 ANSI CodePage 로도 인코딩이 가능합니다.


◆ Windows NRE 제약

- varData 파라미터 값으로 지정한 문자열 또는 오브젝트 크기가 200MB 이상인 경우 onerror 이벤트가 발생합니다.
  (V8 엔진에서는 268,435,440Byte까지 지원하지만 내부적으로 인코딩 처리를 하면서 늘어나는 크기를 고려해 약 200MB 정도 크기까지 권장합니다).


---

### 이벤트 (Events)

### onerror

> Components > Component > VirtualFile > Event > onerror

**Description**

VirtualFile 에 요청된 작업이 실패했을 때 발생되는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.VirtualFile,e:nexacro.VirtualFileErrorEventInfo);
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| obj | VirtualFile | Event가 발생한 Object. |
| e | VirtualFileErrorEventInfo | Event Object. |

**Return**

없음

**Remark**

◆ web runtime environment 제약

- web runtime environment 는 VirtualFile 오브젝트를 단독으로 사용할 수 없습니다.
   FileUpload, FileUpTransfer, DragEventInfo 의 filelist 속성, FileDialogEventInfo 의 virtualfiles 속성 등으로 제공되는 VirtualFile 오브젝트만 사용할 수 있습니다.

- Safari 브라우저에서는 지원되지 않는 이벤트입니다.


---

### onsuccess

> Components > Component > VirtualFile > Event > onsuccess

**Description**

VirtualFile 에 요청된 작업이 성공했을 때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsuccess(obj:nexacro.VirtualFile,e:nexacro.VirtualFileEventInfo);
```

**Parameters**

| Parameters | Type | Description |
| --- | --- | --- |
| obj | VirtualFile | Event가 발생한 Object. |
| e | VirtualFileEventInfo | Event Object. |

**Return**

없음

**Remark**

◆ web runtime environment 제약

- web runtime environment 는 VirtualFile 오브젝트를 단독으로 사용할 수 없습니다.
   FileUpload, FileUpTransfer, DragEventInfo 의 filelist 속성, FileDialogEventInfo 의 virtualfiles 속성 등으로 제공되는 VirtualFile 오브젝트만 사용할 수 있습니다.

- Safari 브라우저에서는 지원되지 않는 이벤트입니다.


---
