# nexacroN V24 — Misc Objects

> 출처: `nexacro_manual.chm` 자동 추출
> 항목 수: 168개

---

## Misc. Objects

### Misc. Objects

> Misc. Objects

**Description**

특정 형식을 지원하기 위해 사용하는 오브젝트입니다.


---

## Misc. Objects > BindItem

### BindItem

> Misc. Objects > BindItem

**Description**

컴포넌트의 특정 속성과 데이터셋의 데이터를 바인딩하기 위해 사용하는 오브젝트입니다.

**Remark**

컴포넌트의 속성이 value로 지정된 경우에는 바인딩된 Dataset에서 데이터를 가져오고(get) 수정된 데이터를 다시 Dataset에 반영(set)할 수 있습니다.
value 이외의 속성을 지정하는 경우에는 데이터를 가져오는(get) 작업만 가능합니다.

**Property**

| Name | Description |
| --- | --- |
| columnid | 바인딩할 Dataset 의 Column ID 를 설정하는 속성입니다. |
| compid | 바인딩할 컴포넌트 ID를 설정하는 속성입니다. |
| datasetid | 바인딩할 Dataset ID를 설정하는 속성입니다. |
| name | BindItem 의 이름을 설정하는 속성입니다. |
| parent | BindItem 의 부모 오브젝트를 갖는 읽기전용 속성입니다. |
| propid | 바인딩할 컴포넌트의 속성을 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| bind | 스크립트에서 동적으로 생성된 BindItem을 실행시키는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 BindItem 을(를) 삭제하는 메소드입니다. |
| init | 스크립트에서 동적으로 생성된 BindItem을 초기화시키는 메소드입니다. |


---

### 속성 (Properties)

### columnid

> Misc. Objects > BindItem > Property > columnid

**Description**

바인딩할 Dataset 의 Column ID 를 설정하는 속성입니다.

**Syntax**

```javascript
BindItem.columnid[= strColumnID]
```

**Setting Syntax**

```javascript
this.BindItem00.columnid = "Column00";
```
- **`strColumnID`** — Dataset의 Column ID


---

### compid

> Misc. Objects > BindItem > Property > compid

**Description**

바인딩할 컴포넌트 ID를 설정하는 속성입니다.

**Syntax**

```javascript
BindItem.compid[= strCompID]
```

**Setting Syntax**

```javascript
this.BindItem00.compid = "Edit00";
```
- **`strCompID`** — 바인딩할 컴포넌트 ID


---

### datasetid

> Misc. Objects > BindItem > Property > datasetid

**Description**

바인딩할 Dataset ID를 설정하는 속성입니다.

**Syntax**

```javascript
BindItem.datasetid[= strDatasetID]
```

**Setting Syntax**

```javascript
this.BindItem00.datasetid = "Dataset00";
```
- **`strDatasetID`** — 바인딩할 Dataset ID


---

### name

> Misc. Objects > BindItem > Property > name

**Description**

BindItem 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
BindItem.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### parent

> Misc. Objects > BindItem > Property > parent

**Description**

BindItem 의 부모 오브젝트를 갖는 읽기전용 속성입니다.

**Syntax**

```javascript
BindItem.parent
```

**Setting Syntax**

```javascript
var objParent = this.BindItem00.parent;
```

**Remark**

- parent 속성은 일반적으로 컴포넌트가 속한 Form을 갖습니다.

- BindItem 이(가) Div 와 같은 컨테이너 컴포넌트에 자식으로 존재한다면 parent 속성은 해당 컨테이너 컴포넌트를 갖습니다.

- Calendar 와 같이 서브컨트롤이 존재하는 컴포넌트에서 서브컨트롤의 parent 속성은 해당 컴포넌트를 갖습니다.


---

### propid

> Misc. Objects > BindItem > Property > propid

**Description**

바인딩할 컴포넌트의 속성을 설정하는 속성입니다.

**Syntax**

```javascript
BindItem.propid[= strPropertyID]
```

**Setting Syntax**

```javascript
this.BindItem00.propid = "text";
```
- **`strPropertyID`** — 바인딩할 컴포넌트의 속성

**Remark**

- 컴포넌트의 속성이 value 로 지정된 경우에는 바인딩된 Dataset 에서 데이터를 가져오고(get) 수정된 데이터를 다시 Dataset 에 반영(set)할 수 있습니다.

- value 이외의 속성으로 지정된 경우에는 데이터를 가져오는(get) 작업만 가능합니다.


---

### 메서드 (Methods)

### bind

> Misc. Objects > BindItem > Method > bind

**Description**

스크립트에서 동적으로 생성된 BindItem을 실행시키는 메소드입니다.

**Syntax**

```javascript
BindItem.bind()
```

**Parameters**

BindItem.bind();

**Return**

없음

**Remark**

생성된 BindItem을 Form에 추가하고 사용할 수 있습니다.


---

### destroy

> Misc. Objects > BindItem > Method > destroy

**Description**

스크립트에서 동적으로 생성한 BindItem 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
BindItem.destroy()
```

**Parameters**

var bSucc = this.BindItem00.destroy();

**Return**

BindItem 이(가) 정상적으로 삭제되면 true 를 반환합니다.

BindItem 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 BindItem 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

BindItem.initBindItem.showForm.addChildForm.insertChildForm.removeChild


---

### init

> Misc. Objects > BindItem > Method > init

**Description**

스크립트에서 동적으로 생성된 BindItem을 초기화시키는 메소드입니다.

**Syntax**

```javascript
BindItem.init(strName[,strCompID,strPropertyID,strDatasetID,strColumnID])
```

**Parameters**

```
BindItem을 구별할 수 있는 이름
```

**Return**

없음


---

## Misc. Objects > ExcelExportObject

### ExcelExportObject

> Misc. Objects > ExcelExportObject

**Description**

Grid 에 표시되는 내용을 엑셀 또는 한셀 파일로 Export 하는 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| commandversion | Export 시 데이터 인코딩 방식을 설정하는 속성입니다. |
| commcompress | Export 를 위해 서버와 통신 시 PostData 를 압축할 지 설정하는 속성입니다. |
| commdataformat | Export를 위해 데이터를 서버에 전송 시 사용할 통신형식을 설정하는 속성입니다. |
| exportactivemode | Export 완료 후 생성된 파일을 자동으로 오픈할지 여부를 설정하는 속성입니다. |
| exporteventtype | Export 진행중 정보가 표시되는 방식과 onprogress 이벤트 발생 방식을 설정하는 속성입니다. |
| exportfilename | Export 완료 후 생성될 파일명을 설정하는 속성입니다. |
| exportfilepassword | Export 완료 후 생성될 파일에 적용될 암호를 설정하는 속성입니다. |
| exportfilepath | Export 완료 후 파일이 생성될 위치를 절대경로로 설정하는 속성입니다. |
| exportmessagealert | Export 전 표시되는 경고 대화상자에 출력될 텍스트를 설정하는 속성입니다. |
| exportmessagecomplete | exportuitype 속성값이 "exportprogress" 일 때 Export 가 완료되면 진행바에 표시될 텍스트를 설정하는 속성입니다. |
| exportmessageprocess | exportuitype 속성값이 "exportprogress" 일 때 Export 진행중 진행바에 표시될 텍스트의 형식을 설정하는 속성입니다. |
| exportmessageready | exportuitype 속성값이 "exportprogress" 일 때 Export 진행 전 진행바에 표시될 텍스트를 설정하는 속성입니다. |
| exporttype | ExcelExportObject 을 Export 하여 생성할 파일의 형식을 상수값으로 설정하는 속성입니다. |
| exportuitype | Export 시 진행상태를 표시하는 방식을 설정하는 속성입니다. |
| exporturl | ExcelExportObject 의 Export 를 수행할 서버의 URL을 설정하는 속성입니다. |
| exportwordwrap | Export 시 Cell 에 텍스트 줄바꿈 설정을 적용할지 여부를 설정하는 속성입니다. |
| filefilter | Export 시 생성될 파일을 설정하는 파일선택창에 적용될 파일형식을 설정하는 속성입니다. |
| filefilterindex | 파일선택창에 기본으로 표시될 파일형식을 인덱스값으로 설정하는 속성입니다. |
| name | ExcelExportObject 의 이름을 설정하는 속성입니다. |
| quotechar | Export 시 한정자로 사용할 값을 설정하는 속성입니다. |
| separator | Export 시 구분자로 사용할 값을 설정하는 속성입니다. |
| transferrowcount | Export 시 서버에 분할하여 전송할 Row 의 갯수를 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addEvent | ExcelExportObject 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| addEventHandler | ExcelExportObject 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 ExcelExportObject 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| addExportItem | Export 할 Item을 ExcelExportObject 에 추가하는 메소드입니다. |
| clear | ExcelExportObject 에 추가된 모든 Item 을 삭제하는 메소드입니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| clearExportItems | ExcelExportObject 에서 지정한 타입의 Item 만 삭제하는 메소드입니다. |
| count | ExcelExportObject 에 등록된 Item 의 갯수를 반환하는 메소드입니다. |
| countExportItems | ExcelExportObject 에서 지정한 타입의 Item 갯수를 반환하는 메소드입니다. |
| delExportItem | ExcelExportObject 에서 지정한 타입의 특정 Item 을 삭제하는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 ExcelExportObject 을(를) 삭제하는 메소드입니다. |
| exportData | ExcelExportObject 에 설정된 Item 을 모두 Export 하는 메소드입니다. |
| exportDataEx | Cell 에 표시된 값을 기준으로 ExcelExportObject 에 설정된 Item 을 모두 Export 하는 메소드입니다. |
| exportItems | ExcelExportObject 에서 지정한 타입의 Item 만 Export 하는 메소드입니다. |
| findEventHandler | ExcelExportObject 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getEventHandler | ExcelExportObject 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| getExportItem | ExcelExportObject 에서 지정한 타입의 특정 Item 을 반환하는 메소드입니다. |
| insertEventHandler | ExcelExportObject 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| removeEvent | ExcelExportObject 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| removeEventHandler | ExcelExportObject 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | ExcelExportObject 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| setEventHandler | ExcelExportObject 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | ExcelExportObject 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |
| setExportItem | Export 할 Item을 ExcelExportObject 의 특정 위치에 추가하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onerror | Export 도중 오류가 생겼을때 발생하는 이벤트입니다. |
| onprogress | Export 도중 진행상태에 따라 발생하는 이벤트입니다. |
| onsuccess | 모든 Export 가 완료되었을때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### commandversion

> Misc. Objects > ExcelExportObject > Property > commandversion

**Description**

Export 시 데이터 인코딩 방식을 설정하는 속성입니다.

**Syntax**

```javascript
ExcelExportObject.commandversion [=enumVersion]
```

**Setting Syntax**

```javascript
enumVersion ::= "1.0" | "2.0" | "3.0"
```
```javascript
this.ExcelExportObject00.commandversion = "2.0";
```
- **`"1.0"`** — 인코딩 처리를 하지 않습니다.
- **`"2.0"`** — Base32로 인코딩합니다.
- **`"3.0"`** — Base64로 인코딩합니다.

**Remark**

- commandversion 속성을 설정하지 않으면 "1.0"으로 적용됩니다.


---

### commcompress

> Misc. Objects > ExcelExportObject > Property > commcompress

**Description**

Export 를 위해 서버와 통신 시 PostData 를 압축할 지 설정하는 속성입니다.

**Setting Syntax**

```javascript
enumComp ::= 'none' | 'compress'
```
- **`"none"`** — 통신 시 PostData 를 압축하지 않습니다.
- **`"compress"`** — 통신 시 PostData 를 압축합니다.

**Remark**

- commcompress 속성값을 설정하지 않으면 "none" 으로 적용됩니다.


---

### commdataformat

> Misc. Objects > ExcelExportObject > Property > commdataformat

**Description**

Export를 위해 데이터를 서버에 전송 시 사용할 통신형식을 설정하는 속성입니다.

**Setting Syntax**

```javascript
enumFormat ::= 'xml' | 'ssv' | 'json' | 'binary'
```
- **`"xml"`** — XML 형식으로 데이터를 전송합니다.
- **`"ssv"`** — SSV 형식으로 데이터를 전송합니다.
- **`"json"`** — JSON 형식으로 데이터를 전송합니다.
- **`"binary"`** — Binary 형식으로 데이터를 전송합니다.

웹브라우저 환경에서는 지원하지 않습니다.

**Remark**

- commdataformat 속성값을 설정하지 않으면 "ssv" 로 적용됩니다.


---

### exportactivemode

> Misc. Objects > ExcelExportObject > Property > exportactivemode

**Description**

Export 완료 후 생성된 파일을 자동으로 오픈할지 여부를 설정하는 속성입니다.

**Setting Syntax**

```javascript
enumMode ::= 'noactive' | 'active'
```
```javascript
this.ExcelExportObject00.exportactivemode = "active";
```
- **`"noactive"`** — Export 완료 후 생성된 파일을 자동으로 오픈하지 않습니다.
- **`"active"`** — Export 완료 후 생성된 파일을 자동으로 오픈합니다.

생성된 파일과 연결된 어플리케이션이 설치되어 있어야 합니다.
예를 들어 생성된 파일이 엑셀인 경우 MS Excel 이 설치되어 있어야 합니다.

**Remark**

- exportactivemode 속성값을 설정하지 않으면 "noactive" 로 적용됩니다.


---

### exporteventtype

> Misc. Objects > ExcelExportObject > Property > exporteventtype

**Description**

Export 진행중 정보가 표시되는 방식과 onprogress 이벤트 발생 방식을 설정하는 속성입니다.

**Setting Syntax**

```javascript
enumEventtype ::= 'none' | 'item' | 'totalrecord' | 'itemrecord'
```
- **`"none"`** — Export 진행중 onprogress 이벤트를 발생하지 않습니다.

exportuitype 속성값과 관계없이 Export 진행 정보를 화면에 표시하지 않습니다.
- **`"item"`** — 각 Item 의 Export 가 완료되었을 때 onprogress 이벤트가 발생합니다.

Export 진행율이 "진행중인 Item 인덱스 / 전체 Item 갯수" 로 ProgressBar에 표시됩니다.
- **`"totalrecord"`** — 각 Item의 Record 단위로 Export 가 완료되었을 때 onprogress 이벤트가 발생합니다.

Export 진행율이 "진행중인 Record 인덱스 / 전체 Record 갯수" 로 진행바에 표시됩니다.
- **`"itemrecord"`** — 각 Item의 Record 단위로 Export 가 완료되었을 때 onprogress 이벤트가 발생합니다.

Export 진행율이 "진행중인 Item 의 Record 인덱스 / 진행중인 Item 의 Record 갯수" 로 진행바에 표시됩니다.
한 개 Item 의 Export 가 완료되면 진행율이 100%로 표시되었다가 다음 Item 이 Export 되면 0% 로 변경됩니다.

**Remark**

- exporteventtype 속성값을 설정하지 않으면 "itemrecord" 로 적용됩니다.

- exportuitype 속성값이 "statusbar" 이면 StatusBar 의 ProgressBar 를 사용합니다.
  exportuitype 속성값이 "exportprogress" 이면 화면 중앙에 표시되는 ProgressBar 를 사용합니다.


---

### exportfilename

> Misc. Objects > ExcelExportObject > Property > exportfilename

**Description**

Export 완료 후 생성될 파일명을 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.ExcelExportObject00.exportfilename = "ExportFile";
```
- **`strExportFileName`** — 저장될 파일명을 설정합니다.

파일명으로 사용할 수 없는 "\", "/", "*", """, "'", "<", ">", "|" 등의 문자는 설정할 수 없습니다.

**Remark**

- exportfilename 속성값을 설정하지 않으면 ExcelExportObject 에 추가된 Item 중 첫번째 Grid 의 id 값이 적용됩니다.

- Windows NRE 환경일 때 exportfilepath 속성값을 설정하면 경로선택 팝업창이 표시되지 않습니다.


---

### exportfilepassword

> Misc. Objects > ExcelExportObject > Property > exportfilepassword

**Description**

Export 완료 후 생성될 파일에 적용될 암호를 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.ExcelExportObject00.exportfilepassword = "password";
```
- **`strPassWord`** — 생성될 파일에 적용할 암호를 문자열로 설정합니다.


---

### exportfilepath

> Misc. Objects > ExcelExportObject > Property > exportfilepath

**Description**

Export 완료 후 파일이 생성될 위치를 절대경로로 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.ExcelExportObject00.exportfilepath = "C:\\";
this.ExcelExportObject00.exportfilepath = "C:\\Users\\[UserID]\\Downloads";
this.ExcelExportObject00.exportfilepath = "%MYDOCUMENT%";
```
- **`strFilePath`** — 파일이 저장될 위치를 절대경로 또는 Alias 를 사용하여 설정합니다.

Environment 의 filesecurelevel 속성으로 접근이 허용된 경로만 설정할 수 있습니다.
접근이 허용되지 않은 경로 또는 존재하지 않는 경로일 경우 파일이 생성되지 않으므로 주의하여야 합니다.

**Remark**

- exportfilepath 속성값 설정 시 경로선택 팝업창 없이 exportfilename 속성값을 파일명으로 해당 위치에 Excel 파일을 Export 합니다.

- 샌드박스(SandBox) 옵션인 Environment 의 filesecurelevel 속성값이 "all" 인 경우는 모든 경로에 접근을 허용합니다.
   이 경우 사용자에게 접근 허용 여부를 확인 한 후 사용자가 승인한 경우에만 파일이 생성됩니다.

- strFilePath 에 사용할 수 있는 Alias 의 실제경로입니다.

	
		Alias
		OS
		Path
		Remark
	

	
		%USERAPP%
		Windows
		C:\Users\[UserName]\AppData\LocalLow\TOBESOFT\Nexacro N\24
		 
	

	
		%INSTALLROOT%
		Windows
		Packing 시 Update Type이 "Update(Local+Server)" 또는 "Local"인 경우
%USERAPP%\projects\[Key]\[BootStrapURL]
Packing 시 Update Type이 "Server"인 경우
%USERAPP%
		 
	

	
		%USERAPPLOCAL%
		Windows
		C:\Users\[UserName]\AppData\Local
		 
	

	
		%MYDOCUMENT%
%DOCUMENT%
		Windows
		"내 문서" 로 설정한 위치
		 
	

	
		%CACHE%
		Windows
		%USERAPP%\Cache
		 
	

	
		%THEME%
		Windows
		%USERAPP%\Cache\Theme
		 
	

	
		%EXECUTE%
		Windows
		"nexacro.exe 실행 위치
		 
	


  * %USERAPP% : 애플리케이션에서 할당받은 공간, 다른 애플리케이션 접근불가


---

### exportmessagealert

> Misc. Objects > ExcelExportObject > Property > exportmessagealert

**Description**

Export 전 표시되는 경고 대화상자에 출력될 텍스트를 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.ExcelExportObject00.exportmessagealert = "Export Start";
```
- **`strMessage`** — 경고 대화상자에 출력될 텍스트를 설정합니다.

**Remark**

- exportmessagealert 속성값을 설정하지 않으면 경고 대화상자가 표시되지 않습니다.


---

### exportmessagecomplete

> Misc. Objects > ExcelExportObject > Property > exportmessagecomplete

**Description**

exportuitype 속성값이 "exportprogress" 일 때 Export 가 완료되면 진행바에 표시될 텍스트를 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.ExcelExportObject00.exportmessagecomplete = "Export Completed";
```
- **`strMessage`** — Export 완료 시 진행바에 표시될 텍스트를 설정합니다.

**Remark**

- 모든 Item 의 Export 가 완료되어 onsuccess 이벤트가 발생되기 전에 표시됩니다.

- exportuitype 속성값이 "exportprogress" 일 때만 진행바에 표시됩니다.


---

### exportmessageprocess

> Misc. Objects > ExcelExportObject > Property > exportmessageprocess

**Description**

exportuitype 속성값이 "exportprogress" 일 때 Export 진행중 진행바에 표시될 텍스트의 형식을 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.ExcelExportObject00.exportmessageprocess = "%d Item, %d Record / %d Total";
```
- **`strMessage`** — 진행중인 Export 정보를 표시하도록 "%d" 와 텍스트를 조합하여 설정합니다.
"%d" 는 3 개까지 설정할 수 있으며, 각 "%d" 는 아래와 같이 대체되어 표시됩니다.
"%d" 를 3 개 이상 설정하면 오동작 할 수 있습니다.

1) 첫번째 "%d"
   Export 중인 Item 의 인덱스값으로 대체됩니다.

2) 두번째 "%d"
   exporteventtype 속성값이 "item", "totalrecord" 이면 모든 Item 의 전체 Record 에서 출력중인 Record 인덱스값으로 대체됩니다.
   exporteventtype 속성값이 "itemrecord" 이면 현재 Item 에서 출력중인 Record 인덱스값으로 대체됩니다.

3) 세번째 "%d"
   exporteventtype 속성값이 "item", "totalrecord" 이면 모든 Item 의 전체 Record 갯수로 대체됩니다.
   exporteventtype 속성값이 "itemrecord" 이면 해당 Item 의 Record 갯수로 대체됩니다.

**Remark**

- exportuitype 속성값이 "exportprogress" 일 때만 표시됩니다.

- exportmessageprocess 속성값을 설정하지 않으면 진행바에 텍스트가 표시되지 않습니다.

- onprogress 이벤트가 정의되지 않아도 exporteventtype 속성값 기준으로 onprogress 이벤트 발생시점에 텍스트가 업데이트 됩니다.


---

### exportmessageready

> Misc. Objects > ExcelExportObject > Property > exportmessageready

**Description**

exportuitype 속성값이 "exportprogress" 일 때 Export 진행 전 진행바에 표시될 텍스트를 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.ExcelExportObject00.exportmessageready = "Export Ready";
```
- **`strMessage`** — Export 진행 전 진행바에 표시될 텍스트를 설정합니다.

**Remark**

- exportuitype 속성값이 "exportprogress" 일 때만 진행바에 표시됩니다.


---

### exporttype

> Misc. Objects > ExcelExportObject > Property > exporttype

**Description**

ExcelExportObject 을 Export 하여 생성할 파일의 형식을 상수값으로 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.ExcelExportObject00.exporttype = nexacro.ExportTypes.EXCEL2007;
this.ExcelExportObject00.exporttype = 1040;
```
- **`constExportTypes`** — Export 하여 생성할 파일의 형식을 상수값으로 설정합니다.

256 (0x0100) 또는 nexacro.ExportTypes.EXCEL 설정 시 엑셀 97 형식으로 Export 합니다.
272 (0x0110) 또는 nexacro.ExportTypes.EXCEL97 설정 시 엑셀 97~2003 형식으로 Export 합니다.
288 (0x0120) 또는 nexacro.ExportTypes.EXCEL2007 설정 시 엑셀 2007 XML 형식으로 Export 합니다.
1024 (0x0400) 또는 nexacro.ExportTypes.HANCELL2010 설정 시 한셀 2010 형식으로 Export 합니다.
1040 (0x0410) 또는 nexacro.ExportTypes.HANCELL2014 설정 시 한셀 2014 형식으로 Export 합니다.
1280 (0x0500) 또는 nexacro.ExportTypes.CSV 설정 시 CSV 형식으로 Export 합니다.
1296 (0x0510) 또는 nexacro.ExportTypes.TXT 설정 시 TXT 형식으로 Export 합니다.

**Remark**

- exporttype 속성값을 설정하지 않거나 null 설정 시 256 (0x0100) 으로 적용됩니다.

- 설정된 파일형식에 맞게 ExportItem 객체의 range 속성값을 설정하여야 합니다.


---

### exportuitype

> Misc. Objects > ExcelExportObject > Property > exportuitype

**Description**

Export 시 진행상태를 표시하는 방식을 설정하는 속성입니다.

**Setting Syntax**

```javascript
enumExportUI ::= 'none' | 'statusbar' | 'exportprogress'
```
- **`"none"`** — Export 시 진행상태를 표시하지 않습니다.
- **`"statusbar"`** — Export 가 실행 된 Frame 의 StatusBar 에 진행상태가 표시됩니다.
- **`"exportprogress"`** — Export 시 진행상태를 표시할 ProgressBar 가 화면 중앙에 출력됩니다.

**Remark**

- exportuitype 속성값을 설정하지 않으면 "none" 으로 적용됩니다.

- Export 시 ProgressBar 에 표시되는 내용은 exporteventtype 속성값에 따라 달라집니다.


---

### exporturl

> Misc. Objects > ExcelExportObject > Property > exporturl

**Description**

ExcelExportObject 의 Export 를 수행할 서버의 URL을 설정하는 속성입니다.

**Syntax**

```javascript
ExcelExportObject.exporturl[= strExporturl]
```

**Setting Syntax**

```javascript
strExporturl ::= <absolute-url> | <relative-url>
```
```javascript
this.ExcelExportObject00.exporturl = "http://localhost:8080/nexacro-xeni/XExportImport";
```
- **`<absolute-url>`** — Export 를 수행할 서버의 URL 을 문자열로 설정합니다.
웹에 접근 가능한 환경이어야 하고, Cross Domain 상황이면 사용에 제한이 있습니다.
- **`<relative-url>`** — 현재 Form 위치를 기준으로 한 상대경로를 사용하여 설정합니다.

**Remark**

- exporturl 속성값을 설정하지 않으면 Export 가 수행되지 않습니다.


---

### exportwordwrap

> Misc. Objects > ExcelExportObject > Property > exportwordwrap

**Description**

Export 시 Cell 에 텍스트 줄바꿈 설정을 적용할지 여부를 설정하는 속성입니다.

**Setting Syntax**

```javascript
bWordWrap ::= 'true' | 'false'
```
```javascript
this.ExcelExportObject00.exportwordwrap = false;
```
- **`true`** — Export 시 Cell 에 텍스트 줄바꿈을 설정합니다.
- **`false`** — Export 시 Cell 에 텍스트 줄바꿈 설정을 하지 않습니다.

**Remark**

- exportwordwrap 속성을 설정하지 않으면 true 로 적용됩니다.


---

### filefilter

> Misc. Objects > ExcelExportObject > Property > filefilter

**Description**

Export 시 생성될 파일을 설정하는 파일선택창에 적용될 파일형식을 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.ExcelExport00.filefilter = "All(*.*)|*.*|Text Files(*.txt)|*.txt|";
this.ExcelExport00.filefilter = "Excel Files(*.xlsx)|*.xls;*.xlsx|Word Files(*.docx)|*.doc;*.docx|ALL Files(*.*)|*.*|";
```
- **`strFileFilter`** — 파일선택창에 적용될 파일형식을 "설명|확장자" 형식으로 설정합니다.

"|" 문자를 구분자로 하여 설명과 실제 확장자를 쌍으로 여러개의 파일형식을 설정할 수 있습니다.
한 개의 파일형식내에서 복수개의 확장자를 지정할 때는 "*.xlsx;*.xls" 와 같이 ";" 문자로 구분하여 설정합니다.

**Remark**

- filefilter 속성값을 설정하지 않으면 exporttype 속성에 설정된 파일형식과 "All" 형식이 적용됩니다.

- exportfilepath 속성을 설정하지 않아야 파일선택창이 표시됩니다.
   exportfilepath 속성 설정 시 파일선택창이 표시되지 않고 속성값에 맞게 파일이 Export 됩니다.

- 파일형식이 여러개 일 경우 파일선택창에 기본으로 표시될 파일형식을 filefilterindex 속성에 인덱스값으로 설정합니다.
   인덱스는 0 부터 시작하며 첫번째 파일형식부터 차례로 설정됩니다.


---

### filefilterindex

> Misc. Objects > ExcelExportObject > Property > filefilterindex

**Description**

파일선택창에 기본으로 표시될 파일형식을 인덱스값으로 설정하는 속성입니다.

**Syntax**

```javascript
ExcelExportObject.filefilterindex[= nIndex]
```

**Setting Syntax**

```javascript
this.ExcelExportObject00.filefilterindex = 1;
```
- **`nIndex`** — 파일선택창에 설정된 파일형식 중 기본으로 표시될 파일형식의 인덱스를 숫자로 설정합니다.

**Remark**

- filefilterindex 속성값을 설정하지 않으면 0 으로 적용됩니다.

- 파일선택창에 표시되는 파일형식은 filefilter 속성에 설정합니다.
   파일형식의 인덱스는 0 부터 시작하며 첫번째 파일형식부터 차례로 인덱스가 설정됩니다.


---

### name

> Misc. Objects > ExcelExportObject > Property > name

**Description**

ExcelExportObject 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
ExcelExportObject.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### quotechar

> Misc. Objects > ExcelExportObject > Property > quotechar

**Description**

Export 시 한정자로 사용할 값을 설정하는 속성입니다.

**Syntax**

```javascript
ExcelExportObject.quotechar[= strQuotechar]
```

**Setting Syntax**

```javascript
this.ExcelExportObject00.quotechar = "'";
```
- **`strQuotechar`** — 구분자로 분리되는 항목 중 분리하지 않을 부분을 처리하기 위한 텍스트 한정자를 설정합니다.
" (quotation mark), ' (apostrophe), "none", "default" 값을 설정할 수 있습니다.

**Remark**

- default 값은 "default" 입니다.
  유효하지 않은 값을 입력할 경우에는 속성값은 "default" 값으로 처리합니다.
  "default" 값으로 설정한 경우에는 XENI 텍스트 한정자 설정값에 따라 동작합니다.


---

### separator

> Misc. Objects > ExcelExportObject > Property > separator

**Description**

Export 시 구분자로 사용할 값을 설정하는 속성입니다.

**Syntax**

```javascript
ExcelExportObject.separator[= strSeparator]
```

**Setting Syntax**

```javascript
this.ExcelExportObject00.separator = "0x1E";
```
- **`strSeparator`** — 컬럼을 구분을 문자를 설정합니다.
10진수 또는 16진수로 설정할 수 있습니다.
(16진수인 경우에는 0xXX, 0XXX의 형태로 입력해야 합니다).

0x00(0) ~ 0x7F(127) 범위의 ASCII 문자를 하나만 설정할 수 있습니다.
단, 아래 문자는 설정할 수 없습니다.

0x0A(10) - LF(Line Feed)
0x0D(13) - CR(Carriage Return)
0x22(34) - " (quotation mark)
0x27(39) - ' (apostrophe)
0x00(00) - NUL (Null char.)
0x03(03) - ETX (End of Text)
0x1D(29) - GS (Group Separator)
0x28(40) - ( (left opening parenthesis)
0x29(41) - ) (right closing parenthesis)
0x3A(58) - : (colon)
0x3D(61) - = (equal sign)

**Remark**

- default 값은 ","로 처리합니다.
  유효하지 않은 값을 입력할 경우에도 default 값으로 처리합니다.
- exporttype 속성값이 nexacro.ExportTypes.TXT 인 경우에만 유효합니다.


---

### transferrowcount

> Misc. Objects > ExcelExportObject > Property > transferrowcount

**Description**

Export 시 서버에 분할하여 전송할 Row 의 갯수를 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.ExcelExportObject00.transferrowcount = 1000;
```
- **`nCount`** — 전체 데이터에서 분할하여 전송할 Row 의 갯수를 숫자로 설정합니다.

설정한 Row 갯수만큼 분할하여 데이터를 서버로 전송합니다.
0 또는 전체 Row 수보다 크게 설정할 경우 모든 데이터를 한번에 전송합니다.

**Remark**

- transferrowcount 속성값을 설정하지 않으면 500 으로 적용됩니다.

- 모든 데이터를 한번에 전송하면 일시적인 화면멈춤 현상이나 진행상태 ProgressBar 의 불규칙한 갱신 현상이 발생할 수 있습니다.

- transferrowcount 속성값은 동일해도 Grid 의 Column 갯수에 따라 한번에 전송하는 데이터의 크기가 달라집니다.
   따라서, 한번에 전송할 데이터의 크기를 고려하여 transferrowcount 속성을 설정하여야 합니다.

- 동일한 데이터일 때 transferrowcount 속성값에 따라 Export 시 성능차이가 발생할 수 있습니다.

- transferrowcount 속성을 설정하면 비동기 방식으로 분할 전송이 진행됩니다.
   분할 전송이 진행되는 동안 Grid 속성이나 Dataset 의 데이터 변경 시 Export 데이터에 반영될 수 있으므로 주의하여야 합니다.
   예를 들어 exportData(), exportDataEx() 메소드 다음에 Grid 의 formatid 속성 변경 시 분할된 데이터의 포맷이 변경될 수 있습니다.


---

### 메서드 (Methods)

### addEvent

> Misc. Objects > ExcelExportObject > Method > addEvent

**Description**

ExcelExportObject 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.addEvent( strEventID )
```

**Parameters**

```
ExcelExportObject 에 추가할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 추가에 성공하면 true 를 반환합니다.

이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- ExcelExportObject 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.


---

### addEventHandler

> Misc. Objects > ExcelExportObject > Method > addEventHandler

**Description**

ExcelExportObject 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.addEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수가 추가될 이벤트의 ID를 설정합니다.
```

**Return**

이벤트에 추가된 핸들러 함수의 인덱스를 반환합니다.
동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 -1 을 반환합니다.


---

### addEventHandlerLookup

> Misc. Objects > ExcelExportObject > Method > addEventHandlerLookup

**Description**

함수를 검색하여 ExcelExportObject 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.addEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

```
핸들러 함수가 추가될 이벤트의 ID를 설정합니다.
```

**Return**

이벤트에 추가된 핸들러 함수의 인덱스를 반환합니다.
동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

**Remark**

- strFunc 이름의 함수를 objTarget 영역부터 상위로 올라가며 검색합니다.
  검색된 함수가 있다면 이벤트에 핸들러 함수로 추가합니다.


---

### addExportItem

> Misc. Objects > ExcelExportObject > Method > addExportItem

**Description**

Export 할 Item을 ExcelExportObject 에 추가하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.addExportItem( constExportItemType, objExportItem )
ExcelExportObject.addExportItem( constExportItemType, varExportSource, strRange [,strExportHead [,strExportSelect [,strExportMerge [,strExportValue [,strExportImage [,strExceptStyle [,strExportSize [,arrCellIndex, [strBandId]]]]]]]]])
```

**Parameters**

```
Export 대상이 되는 컴포넌트의 종류를 상수값으로 설정합니다.

현재 Grid 만 Export 할 수 있으며 "nexacro.ExportItemTypes.GRID" 로 설정하여야 합니다.
```

**Return**

ExcelExportObject 에 추가된 Item 의 인덱스를 반환합니다.

추가에 실패하였을 경우 "-1" 을 반환합니다.

**Remark**

- Export 정보를 설정한 ExportItem 오브젝트 또는 Export 정보를 파라미터로 전달하여 Item 을 추가할 수 있습니다.
- arrCellIndex 파라미터 설정 시 Export 값의 일관성을 위하여 exportDataEx() 메서드를 사용하는 것을 권장합니다.

* 스타일 처리 시 주의 사항
생성할 파일 특성에 따라 일부 스타일 속성이 화면과 다르게 처리될 수 있습니다.

- -nexa-border 속성은 처리되지 않습니다.
- background 속성에 Gradation 이 지정된 경우 Gradation의 중간값(50% 위치값) 색상으로 처리됩니다.
- 색상값을 RGBA, HSLA 형태로 설정한 경우 Alpha 값은 무시하고 RGB, HSL 형태로 처리됩니다. 단, Alpha 값이 0인 경우에는 투명색(transparent)으로 처리됩니다.
- font-family 스타일 속성이 2개 이상이면 마지막에 정의된 font로 처리됩니다.
  font-family는 CSS 속성이며 HTML에서만 적용할 수 있습니다. 
  Excel의 경우 셀에 하나의 폰트만 적용할 수 있어 font-family 스타일을 그대로 적용할 수는 없습니다.
  (HTML은 웹브라우저에서 사용자 PC에 설치된 폰트 정보를 확인하고 font-family 속성을 적용합니다.
  하지만, ExcelExportObject 오브젝트는 서버에서 Excel 파일을 생성하는 형식이기 때문에 사용자 PC에 설치된 폰트 정보를 알 수는 없습니다).
  때문에 넥사크로 애플리케이션에 적용된 font-family 정보를 엑셀로 전환 시 마지막에 정의된 폰트 정보만 적용하고 있습니다.


---

### clear

> Misc. Objects > ExcelExportObject > Method > clear

**Description**

ExcelExportObject 에 추가된 모든 Item 을 삭제하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.clear()
```

**Parameters**

var nCnt = this.ExcelExportObject00.clear();

**Return**

삭제된 Item 의 갯수를 반환합니다.


---

### clearEventHandler

> Misc. Objects > ExcelExportObject > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.clearEventHandler( strEventID )
```

**Parameters**

```
모든 핸들러 함수를 제거할 이벤트의 ID를 설정합니다.
```

**Return**

특정 이벤트에서 제거된 핸들러 함수의 갯수를 반환합니다.

**Remark**

- 특정 핸들러 함수만 제거하려면 removeEventHandler() 메소드를 사용하여야 합니다.


---

### clearExportItems

> Misc. Objects > ExcelExportObject > Method > clearExportItems

**Description**

ExcelExportObject 에서 지정한 타입의 Item 만 삭제하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.clearExportItems(constExportItemType)
```

**Parameters**

```
삭제대상이 되는 Item 의 타입을 상수값으로 설정합니다.

현재 Grid 만 Item 으로 추가 할 수 있으므로 "nexacro.ExportItemTypes.GRID" 로 설정하여야 합니다.
```

**Return**

삭제된 Item의 갯수를 반환합니다.


---

### count

> Misc. Objects > ExcelExportObject > Method > count

**Description**

ExcelExportObject 에 등록된 Item 의 갯수를 반환하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.count()
```

**Parameters**

var nCnt = this.ExcelExportObject00.count();

**Return**

모든 item의 갯수를 반환합니다.


---

### countExportItems

> Misc. Objects > ExcelExportObject > Method > countExportItems

**Description**

ExcelExportObject 에서 지정한 타입의 Item 갯수를 반환하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.countExportItems(constExportItemType)
```

**Parameters**

```
갯수를 확인하려는 Item 의 타입을 상수값으로 설정합니다.

현재 Grid 만 Item 으로 추가 할 수 있으므로 "nexacro.ExportItemTypes.GRID" 로 설정하여야 합니다
```

**Return**

지정한 타입의 item 갯수를 반환합니다.


---

### delExportItem

> Misc. Objects > ExcelExportObject > Method > delExportItem

**Description**

ExcelExportObject 에서 지정한 타입의 특정 Item 을 삭제하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.delExportItem(constExportItemType,nItemIndex)
```

**Parameters**

```
삭제대상이 되는 Item 의 타입을 상수값으로 설정합니다.

현재 Grid 만 Item 으로 추가 할 수 있으므로 "nexacro.ExportItemTypes.GRID" 로 설정하여야 합니다.
```

**Return**

Item 삭제에 성공하면 "true" 를 반환합니다.
파라미터가 유효하지 않거나 Item 삭제에 실패하면 "false" 를 반환합니다.

**Remark**

- Item 의 인덱스값은 addExportItem() 메소드의 반환값을 이용합니다.


---

### destroy

> Misc. Objects > ExcelExportObject > Method > destroy

**Description**

스크립트에서 동적으로 생성한 ExcelExportObject 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.destroy()
```

**Return**

ExcelExportObject 이(가) 정상적으로 삭제되면 true 를 반환합니다.

ExcelExportObject 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 ExcelExportObject 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChild


---

### exportData

> Misc. Objects > ExcelExportObject > Method > exportData

**Description**

ExcelExportObject 에 설정된 Item 을 모두 Export 하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.exportData( [strParam, strParamDS, nOrgValue, bFileDown] ) ;
```

**Parameters**

```
서버 통신시에 파라미터로 전달 될 값을 설정합니다.

DB key 와 같은 값을 전달할 때 사용하는 확장기능입니다.
```

**Return**

Export 요청에 성공한 Item 의 갯수를 반환합니다.

Export 시킬 Item 이 없는 경우 0 을 반환합니다.

파라미터가 유효하지 않은 값일 경우 -1 을 반환합니다.

**Remark**

- exportmessagealert 속성이 설정되어 있으면 경고창이 닫힌 후 Export 가 시작됩니다. 

- Export 중에는 exporteventtype 속성에 설정된 값에 맞게 이벤트가 발생합니다.

- bFileDown 파라미터를 true 로 설정 시 환경에 따라 다운로드를 위한 팝업창이 표시될 수 있습니다.

- Export 중 에러가 발생한 경우 onerror 이벤트가 발생됩니다.

- Cell 의 displaytype 속성값이 "decoratetext" 일 때 설정된 Tag 는 HTML 형식이므로 Export 시 Decorate 효과가 적용되지 않습니다.
   > valuetypecellindex 속성에 설정된 Cell 은 Tag 가 텍스트로 Export 됩니다.
   > valuetypecellindex 속성에 설정되지 않은 Cell 은 nOrgValue 값에 따라 Tag 가 텍스트로 Export 되거나 Tag 가 제거된 텍스트가 Export 됩니다.

- GridCellControl 에 설정한 CSS 관련 속성값만 Export 시 적용됩니다.

- transferrowcount 속성에 의한 분할 전송은 비동기로 진행됩니다.
   분할 전송이 진행되는 동안 Grid 속성이나 Dataset 의 데이터 변경 시 Export 데이터에 반영될 수 있으므로 주의하여야 합니다.
   예를 들어 exportData() 메소드 다음에 Grid 의 formatid 속성 변경 시 분할된 데이터의 포맷이 변경될 수 있습니다.


◆ web runtime environment 제약

- 웹브라우저에 팝업차단이 설정되어 있을 경우 메소드가 정상적으로 수행되지 않습니다.


---

### exportDataEx

> Misc. Objects > ExcelExportObject > Method > exportDataEx

**Description**

Cell 에 표시된 값을 기준으로 ExcelExportObject 에 설정된 Item 을 모두 Export 하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.exportDataEx( [strParam, strParamDS, bFileDown] ) ;
```

**Parameters**

```
서버 통신시에 파라미터로 전달 될 값을 설정합니다.

DB key 와 같은 값을 전달할 때 사용하는 확장기능입니다.
```

**Return**

Export 요청에 성공한 Item 의 갯수를 반환합니다.

Export 시킬 Item 이 없는 경우 0 을 반환합니다.

파라미터가 유효하지 않은 값일 경우 -1 을 반환합니다.

**Remark**

- exportDataEx() 메소드는 Cell 에 표시된 텍스트값을 Export 합니다.
   Cell 에 바인드된 Column 값을 Export 하려면 valuetypecellindex 속성에 해당 Cell 의 인덱스를 설정하여야 합니다.

- valuetypecellindex 속성에 설정된 Cell 은 바인드된 Column 값이 Export 됩니다.
   valuetypecellindex 속성에 설정되지 않은 Cell 은 표시된 텍스트값이 Export 됩니다.

- Cell 의 displaytype 속성값이 "decoratetext" 일 때 설정된 Tag 는 HTML 형식이므로 Export 시 Decorate 효과가 적용되지 않습니다.
   > valuetypecellindex 속성에 설정된 Cell 은 Tag 가 텍스트로 Export 됩니다.
   > valuetypecellindex 속성에 설정되지 않은 Cell 은 Tag 가 제거된 텍스트가 Export 됩니다.

- exportmessagealert 속성이 설정되어 있으면 경고창이 닫힌 후 Export 가 시작됩니다. 

- Export 중에는 exporteventtype 속성에 설정된 값에 맞게 이벤트가 발생합니다.

- Export 중 에러가 발생한 경우 onerror 이벤트가 발생됩니다.

- GridCellControl 에 설정한 CSS 관련 속성값만 Export 시 적용됩니다.

- transferrowcount 속성에 의한 분할 전송은 비동기로 진행됩니다.
   분할 전송이 진행되는 동안 Grid 속성이나 Dataset 의 데이터 변경 시 Export 데이터에 반영될 수 있으므로 주의하여야 합니다.
   예를 들어 exportDataEx() 메소드 다음에 Grid 의 formatid 속성 변경 시 분할된 데이터의 포맷이 변경될 수 있습니다.


◆ web runtime environment 제약

- 웹브라우저에 팝업차단이 설정되어 있을 경우 메소드가 정상적으로 수행되지 않습니다.


---

### exportItems

> Misc. Objects > ExcelExportObject > Method > exportItems

**Description**

ExcelExportObject 에서 지정한 타입의 Item 만 Export 하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.exportItems(constExportItemType)
```

**Parameters**

```
Export 하려는 Item 의 타입을 상수값으로 설정합니다.

현재 Grid 만 Item 으로 추가 할 수 있으므로 "nexacro.ExportItemTypes.GRID" 로 설정하여야 합니다.
```

**Return**

Export 요청에 성공한 Item 의 갯수를 반환합니다.
Export 시킬 Item 이 없는 경우 "0" 을 반환합니다.
파라미터가 유효하지 않은 값일 경우 "-1" 을 반환합니다.

**Remark**

- exportmessagealert 속성이 설정되어 있으면 경고창이 닫힌 후 Export가 시작됩니다. 

- Export 중에는 exporteventtype 속성에 설정된 값에 맞게 이벤트가 발생합니다.

- Export 중 에러가 발생한 경우 onerror 이벤트가 발생됩니다.

- 웹브라우저에 팝업차단이 설정되어 있을 경우 메소드가 정상적으로 수행되지 않습니다.


---

### findEventHandler

> Misc. Objects > ExcelExportObject > Method > findEventHandler

**Description**

ExcelExportObject 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.findEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 찾을 이벤트의 ID를 설정합니다.
```

**Return**

특정 이벤트에서 찾은 핸들러 함수의 인덱스를 반환합니다.

특정 이벤트에 찾으려는 핸들러 함수가 존재하지 않으면 -1 을 반환합니다.

**Remark**

- 핸들러 함수의 인덱스는 0 부터 시작합니다.


---

### getEventHandler

> Misc. Objects > ExcelExportObject > Method > getEventHandler

**Description**

ExcelExportObject 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.getEventHandler( strEventID, nIdx )
```

**Parameters**

```
핸들러 함수를 얻을 이벤트의 ID를 설정합니다.
```

**Return**

지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.

지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.


---

### getExportItem

> Misc. Objects > ExcelExportObject > Method > getExportItem

**Description**

ExcelExportObject 에서 지정한 타입의 특정 Item 을 반환하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.getExportItem(constExportItemType,nItemIndex)
```

**Parameters**

```
반환 받으려는 Item 의 타입을 상수값으로 설정합니다.

현재 Grid 만 Item 으로 추가 할 수 있으므로 "nexacro.ExportItemTypes.GRID" 로 설정하여야 합니다.
```

**Return**

지정된 인덱스에 해당하는 Item 을 ExportItem 오브젝트로 반환합니다.
지정된 인덱스에 해당하는 Item 이 없을 경우 "null" 을 반환합니다.

**Remark**

- Item 의 인덱스값은 addExportItem() 메소드의 반환값을 이용합니다.


---

### insertEventHandler

> Misc. Objects > ExcelExportObject > Method > insertEventHandler

**Description**

ExcelExportObject 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수가 삽입될 이벤트의 ID 를 설정합니다.
```

**Return**

이벤트에 삽입된 핸들러 함수의 인덱스를 반환합니다.
동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다.

핸들러 함수가 정상적으로 삽입되지 않은 경우에는 -1 을 반환합니다.

**Remark**

- 첫번째 핸들러 함수의 인덱스는 0 입니다.


---

### removeEvent

> Misc. Objects > ExcelExportObject > Method > removeEvent

**Description**

ExcelExportObject 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.removeEvent( strEventID )
```

**Parameters**

```
ExcelExportObject 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 삭제에 성공하면 true 를 반환합니다.

이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- ExcelExportObject 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- ExcelExportObject 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.


---

### removeEventHandler

> Misc. Objects > ExcelExportObject > Method > removeEventHandler

**Description**

ExcelExportObject 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.removeEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 제거할 이벤트의 ID를 설정합니다.
```

**Return**

핸들러 함수 제거에 성공하면 1 을 반환합니다.

핸들러 함수 제거에 실패하면 0 을 반환합니다.

**Remark**

- 핸들러 함수가 제거되면 핸들러 함수의 인덱스가 0 번부터 재조정됩니다.

- 이벤트에 등록된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하여야 합니다.


---

### removeEventHandlerLookup

> Misc. Objects > ExcelExportObject > Method > removeEventHandlerLookup

**Description**

ExcelExportObject 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.removeEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 제거할 이벤트의 ID를 설정합니다.
```

**Return**

핸들러 함수 제거에 성공하면 1 을 반환합니다.

핸들러 함수 제거에 실패하면 0 을 반환합니다.

**Remark**

- 핸들러 함수가 제거되면 핸들러 함수의 인덱스가 0 번부터 재조정됩니다.

- 이벤트에 등록된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하여야 합니다.


---

### setEventHandler

> Misc. Objects > ExcelExportObject > Method > setEventHandler

**Description**

ExcelExportObject 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.setEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 변경할 이벤트의 ID를 설정합니다.
```

**Return**

첫번째 핸들러 함수 변경에 성공하면 0 을 반환합니다.

첫번째 핸들러 함수 변경에 실패하면 -1 을 반환합니다.

**Remark**

- 인덱스가 0 번인 핸들러 함수를 새로운 함수로 대체합니다.

- 인덱스가 0 번인 핸들러 함수가 없다면 0 번 인덱스에 새로운 함수를 핸들러 함수로 추가합니다.


---

### setEventHandlerLookup

> Misc. Objects > ExcelExportObject > Method > setEventHandlerLookup

**Description**

ExcelExportObject 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.setEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 변경할 이벤트의 ID를 설정합니다.
```

**Return**

첫번째 핸들러 함수 변경에 성공하면 0 을 반환합니다.

첫번째 핸들러 함수 변경에 실패하면 -1 을 반환합니다.

**Remark**

- 인덱스가 0 번인 핸들러 함수를 검색된 함수로 대체합니다.

- 인덱스가 0 번인 핸들러 함수가 없다면 0 번 인덱스에 검색된 함수를 핸들러 함수로 추가합니다.


---

### setExportItem

> Misc. Objects > ExcelExportObject > Method > setExportItem

**Description**

Export 할 Item을 ExcelExportObject 의 특정 위치에 추가하는 메소드입니다.

**Syntax**

```javascript
ExcelExportObject.setExportItem( constExportItemType,nItemIndex,objExportItem )
```

**Parameters**

```
Export 대상이 되는 컴포넌트의 종류를 상수값으로 설정합니다.

현재 Grid 만 Export 할 수 있으므로 "nexacro.ExportItemTypes.GRID" 로 설정하여야 합니다
```

**Return**

Item 추가에 성공하면 "true" 를 반환합니다.
파라미터가 유효하지 않거나 Item 추가에 실패하면 "false" 를 반환합니다.


---

### 이벤트 (Events)

### onerror

> Misc. Objects > ExcelExportObject > Event > onerror

**Description**

Export 도중 오류가 생겼을때 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.ExcelExportObject,e:nexacro.ExcelExportErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- onerror 이벤트가 발생하면 Export 기능이 종료됩니다.


---

### onprogress

> Misc. Objects > ExcelExportObject > Event > onprogress

**Description**

Export 도중 진행상태에 따라 발생하는 이벤트입니다.

**Syntax**

```javascript
onprogress(obj:nexacro.ExcelExportObject,e:nexacro.ExcelExportProgressEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- exporteventtype 속성값이 "none" 이면 onprogress 이벤트는 발생하지 않습니다.
  exporteventtype 속성값이 "item" 이면 Item 의 Export 가 완료되었을 때 onprogress 이벤트가 발생합니다.
  exporteventtype 속성값이 "totalrecord" 이면 각 Record 마다 Export 될 때 onprogress 이벤트가 발생합니다.
  exporteventtype 속성값이 "itemrecord" 이면 Item 의 Export 가 완료되었을 때와 Item 의 각 Record 마다 Export 될 때 onprogress 이벤트가 발생합니다.


---

### onsuccess

> Misc. Objects > ExcelExportObject > Event > onsuccess

**Description**

모든 Export 가 완료되었을때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsuccess(obj:nexacro.ExcelExportObject,e:nexacro.ExcelExportEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- 모든 Export 가 성공적으로 완료되었을때 발생합니다.

- exporteventtype 속성값과 관계없이 이벤트가 발생합니다.


---

## Misc. Objects > ExcelImportObject

### ExcelImportObject

> Misc. Objects > ExcelImportObject

**Description**

엑셀 또는 한셀 파일의 내용을 DataSet 에 Import 하는 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| commandversion | Import 시 데이터 인코딩 방식을 설정하는 속성입니다. |
| commdataformat | Import를 위해 데이터를 서버에 전송 시 사용할 통신형식을 설정하는 속성입니다. |
| filefilter | Import 할 파일을 선택하는 파일선택창에 적용될 파일형식을 설정하는 속성입니다. |
| filefilterindex | 파일선택창에 기본으로 표시될 파일형식을 인덱스값으로 설정하는 속성입니다. |
| importfilemode | Import 할 파일의 위치와 처리방식을 설정하는 속성입니다. |
| importtype | ExcelImportObject 가 Import 할 파일의 형식을 상수값으로 설정하는 속성입니다. |
| importurl | ExcelImportObject 가 Import 를 수행할 서버의 URL 을 설정하는 속성입니다. |
| name | ExcelImportObject 의 이름을 설정하는 속성입니다. |
| quotechar | Import 시 한정자로 사용할 값을 설정하는 속성입니다. |
| separator | Import 시 구분자로 사용할 값을 설정하는 속성입니다. |
| userawdatevalue | 엑셀의 셀값이 날짜 또는 시간 계열일 때 원본값 그대로 Import 할지 여부를 설정하는 속성입니다. |
| userawnumbervalue | 엑셀의 셀값이 숫자계열일 때 원본값 그대로 Import 할지 여부를 설정하는 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| addEvent | ExcelImportObject 에 특정 이벤트를 선언하여 추가하는 메소드입니다. |
| addEventHandler | ExcelImportObject 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다. |
| addEventHandlerLookup | 함수를 검색하여 ExcelImportObject 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다. |
| clearEventHandler | 특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다. |
| destroy | 스크립트에서 동적으로 생성한 ExcelImportObject 을(를) 삭제하는 메소드입니다. |
| findEventHandler | ExcelImportObject 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다. |
| getEventHandler | ExcelImportObject 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다. |
| importData | 파일을 DataSet으로 Import 하는 메소드입니다. |
| importDataEx | ID 로 구분하여 파일을 DataSet 으로 Import 하는 메소드입니다. |
| insertEventHandler | ExcelImportObject 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다. |
| removeEvent | ExcelImportObject 에 선언된 특정 이벤트를 삭제하는 메소드입니다. |
| removeEventHandler | ExcelImportObject 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다. |
| removeEventHandlerLookup | ExcelImportObject 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다. |
| setEventHandler | ExcelImportObject 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다. |
| setEventHandlerLookup | ExcelImportObject 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다. |

**Event**

| Name | Description |
| --- | --- |
| onerror | Import 도중 오류가 생겼을때 발생하는 이벤트입니다. |
| onsuccess | Import 가 완료되었을때 발생하는 이벤트입니다. |


---

### 속성 (Properties)

### commandversion

> Misc. Objects > ExcelImportObject > Property > commandversion

**Description**

Import 시 데이터 인코딩 방식을 설정하는 속성입니다.

**Syntax**

```javascript
ExcelImportObject.commandversion [=enumVersion]
```

**Setting Syntax**

```javascript
enumVersion ::= "1.0" | "2.0" | "3.0"
```
```javascript
this.ExcelImportObject00.commandversion = "2.0";
```
- **`"1.0"`** — 인코딩 처리를 하지 않습니다.
- **`"2.0"`** — Base32로 인코딩합니다.
- **`"3.0"`** — Base64로 인코딩합니다.

**Remark**

- commandversion 속성을 설정하지 않으면 "1.0"으로 적용됩니다.


---

### commdataformat

> Misc. Objects > ExcelImportObject > Property > commdataformat

**Description**

Import를 위해 데이터를 서버에 전송 시 사용할 통신형식을 설정하는 속성입니다.

**Setting Syntax**

```javascript
enumFormat ::= 'xml' | 'ssv' | 'json'
```
- **`"xml"`** — XML 형식으로 데이터를 전송합니다.
- **`"ssv"`** — SSV 형식으로 데이터를 전송합니다.
- **`"json"`** — JSON 형식으로 데이터를 전송합니다.

**Remark**

- commdataformat 속성값을 설정하지 않으면 "xml" 로 적용됩니다.


---

### filefilter

> Misc. Objects > ExcelImportObject > Property > filefilter

**Description**

Import 할 파일을 선택하는 파일선택창에 적용될 파일형식을 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.ExcelImport00.filefilter = "All(*.*)|*.*|Text Files(*.txt)|*.txt|";
this.ExcelImport00.filefilter = "Excel Files(*.xlsx)|*.xls;*.xlsx|Word Files(*.docx)|*.doc;*.docx|ALL Files(*.*)|*.*|";
```
- **`strFileFilter`** — 파일선택창에 적용될 파일형식을 "설명|확장자" 형식으로 설정합니다.

"|" 문자를 구분자로 하여 설명과 실제 확장자를 쌍으로 여러개의 파일형식을 설정할 수 있습니다.
한 개의 파일형식내에서 복수개의 확장자를 지정할 때는 "*.xlsx;*.xls" 와 같이 ";" 문자로 구분하여 설정합니다.

**Remark**

- filefilter 속성값을 설정하지 않으면 빈문자열이 설정되고, "All(*.*)|*.*|" 로 동작합니다.

- importfilemode 속성값이 "local" 이거나 importData(), importDataEx() 메소드의 strSource 파라미터값을 설정하지 않았을 경우 파일선택창이 표시됩니다.

- 파일형식이 여러개 일 경우 파일선택창에 기본으로 표시될 파일형식을 filefilterindex 속성에 인덱스값으로 설정합니다.
   인덱스는 0 부터 시작하며 첫번째 파일형식부터 차례로 설정됩니다.


---

### filefilterindex

> Misc. Objects > ExcelImportObject > Property > filefilterindex

**Description**

파일선택창에 기본으로 표시될 파일형식을 인덱스값으로 설정하는 속성입니다.

**Syntax**

```javascript
ExcelImportObject.filefilterindex[= nIndex]
```

**Setting Syntax**

```javascript
this.ExcelImportObject00.filefilterindex = 1;
```
- **`nIndex`** — 파일선택창에 설정된 파일형식 중 기본으로 표시될 파일형식의 인덱스를 숫자로 설정합니다.

**Remark**

- filefilterindex 속성값을 설정하지 않으면 0 으로 적용됩니다.

- 파일선택창에 표시되는 파일형식은 filefilter 속성에 설정합니다.
   파일형식의 인덱스는 0 부터 시작하며 첫번째 파일형식부터 차례로 인덱스가 설정됩니다.


---

### importfilemode

> Misc. Objects > ExcelImportObject > Property > importfilemode

**Description**

Import 할 파일의 위치와 처리방식을 설정하는 속성입니다.

**Setting Syntax**

```javascript
enumMode ::= 'server' | 'local'
```
- **`"server"`** — 서버에 위치한 파일을 Import 하며 Import 후에도 해당 파일을 삭제하지 않습니다.
서버에 해당 파일이 없는 경우나 Local이나 Network File을 지정하는 경우, Import 가 처리되지 않고 결과를 수신받습니다.
- **`"local"`** — 파일 대화 상자(File Dialog)를 표시해 로컬에 위치한 파일을 선택합니다.
로컬에 위치한 파일을 서버로 전송해 Import 처리하며 Import 처리 후에 서버에 생성된 파일은 삭제됩니다.

**Remark**

- importfilemode 속성값을 설정하지 않으면 "local" 로 적용됩니다.


---

### importtype

> Misc. Objects > ExcelImportObject > Property > importtype

**Description**

ExcelImportObject 가 Import 할 파일의 형식을 상수값으로 설정하는 속성입니다.

**Setting Syntax**

```javascript
this.ExcelImportObject00.importtype = nexacro.ImportTypes.EXCEL2007;
this.ExcelImportObject00.importtype = 1040;
```
- **`constImportTypes`** — Import 할 파일의 형식을 상수값으로 설정합니다.

256 (0x0100) 또는 nexacro.ImportTypes.EXCEL 설정 시 엑셀 97 형식으로 Import 합니다.
272 (0x0110) 또는 nexacro.ImportTypes.EXCEL97 설정 시 엑셀 97~2003 형식으로 Import 합니다.
288 (0x0120) 또는 nexacro.ImportTypes.EXCEL2007 설정 시 엑셀 2007 XML 형식으로 Import 합니다.
1040 (0x0410) 또는 nexacro.ImportTypes.HANCELL2014 설정 시 한셀 2014 형식으로 Import 합니다.
1280 (0x0500) 또는 nexacro.ImportTypes.CSV 설정 시 CSV 형식으로 Import 합니다.
1296 (0x0510) 또는 nexacro.ImportTypes.TXT 설정 시 TXT 형식으로 Import 합니다.

**Remark**

- importtype 속성값을 설정하지 않거나 null 설정 시 256 (0x0100) 으로 적용됩니다.

- 한셀 2010 형식은 현재 지원되지 않습니다. Excel 2007 파일로 저장해서 사용하시기 바랍니다.


---

### importurl

> Misc. Objects > ExcelImportObject > Property > importurl

**Description**

ExcelImportObject 가 Import 를 수행할 서버의 URL 을 설정하는 속성입니다.

**Syntax**

```javascript
ExcelImportObject.importurl[= strImporturl]
```

**Setting Syntax**

```javascript
strImporturl ::= <absolute-url> | <relative-url>
```
```javascript
this.ExcelImportObject00.importurl = "https://localhost:8080/nexacro-xeni/XImport";
```
- **`<absolute-url>`** — Import 를 수행할 서버의 URL 을 문자열로 설정합니다.
웹에 접근 가능한 환경이어야 하고, Cross Domain 상황이면 사용에 제한이 있습니다.
- **`<relative-url>`** — 현재 Form 위치를 기준으로 한 상대경로를 사용하여 설정합니다.

**Remark**

- importurl 속성값을 설정하지 않으면 Import 가 수행되지 않습니다.


---

### name

> Misc. Objects > ExcelImportObject > Property > name

**Description**

ExcelImportObject 의 이름을 설정하는 속성입니다.

**Syntax**

```javascript
ExcelImportObject.name[= strName]
```

**Setting Syntax**

- **`strName`** — 컴포넌트의 이름을 설정합니다.

**Remark**

- name 속성은 사용자가 지정한 컴포넌트의 이름으로 논리적으로 중복이 가능합니다.

- 넥사크로 스튜디오에서 컴포넌트를 생성하거나 id 값을 설정하면 name 속성에 동일한 값이 설정됩니다.


---

### quotechar

> Misc. Objects > ExcelImportObject > Property > quotechar

**Description**

Import 시 한정자로 사용할 값을 설정하는 속성입니다.

**Syntax**

```javascript
ExcelImportObject.quotechar[= strQuotechar]
```

**Setting Syntax**

```javascript
this.ExcelImportObject00.quotechar = "'";
```
- **`strQuotechar`** — 구분자로 분리되는 항목 중 분리하지 않을 부분을 처리하기 위한 텍스트 한정자를 설정합니다.
" (quotation mark), ' (apostrophe), "none", "default" 값을 설정할 수 있습니다.

**Remark**

- default 값은 "default" 입니다.
  유효하지 않은 값을 입력할 경우에는 속성값은 "default" 값으로 처리합니다.
  "default" 값으로 설정한 경우에는 XENI 텍스트 한정자 설정값에 따라 동작합니다.


---

### separator

> Misc. Objects > ExcelImportObject > Property > separator

**Description**

Import 시 구분자로 사용할 값을 설정하는 속성입니다.

**Syntax**

```javascript
ExcelImportObject.separator[= strSeparator]
```

**Setting Syntax**

```javascript
this.ExcelImportObject00.separator = "0x1E";
```
- **`strSeparator`** — 컬럼을 구분을 문자를 설정합니다.
10진수 또는 16진수로 설정할 수 있습니다.
(16진수인 경우에는 0xXX, 0XXX의 형태로 입력해야 합니다).

0x00(0) ~ 0x7F(127) 범위의 ASCII 문자를 하나만 설정할 수 있습니다.
단, 아래 문자는 설정할 수 없습니다.

0x0A(10) - LF(Line Feed)
0x0D(13) - CR(Carriage Return)
0x22(34) - " (quotation mark)
0x27(39) - ' (apostrophe)
0x00(00) - NUL (Null char.)
0x03(03) - ETX (End of Text)
0x1D(29) - GS (Group Separator)
0x28(40) - ( (left opening parenthesis)
0x29(41) - ) (right closing parenthesis)
0x3A(58) - : (colon)
0x3D(61) - = (equal sign)

**Remark**

- default 값은 ","로 처리합니다.
  유효하지 않은 값을 입력할 경우에도 default 값으로 처리합니다.
- importtype 속성값이 nexacro.ImportTypes.TXT 인 경우에만 유효합니다.


---

### userawdatevalue

> Misc. Objects > ExcelImportObject > Property > userawdatevalue

**Description**

엑셀의 셀값이 날짜 또는 시간 계열일 때 원본값 그대로 Import 할지 여부를 설정하는 속성입니다.

**Setting Syntax**

```javascript
bRawDate ::= 'true' | 'false'
```
```javascript
this.ExcelImportObject00.userawdatevalue = true;
```
- **`true`** — 엑셀의 셀에 설정된 원본 데이터값만 Import 합니다.

셀의 표시형식에 따른 서식은 Import 하지 않습니다.
- **`false`** — 엑셀의 셀에 표시된 값을 Import 합니다.

셀의 표시형식에 따른 서식을 반영하여 Import 합니다.

**Remark**

- userawdatevalue 속성을 설정하지 않으면 false 로 적용됩니다.

- userawdatevalue 속성은 엑셀의 셀 표시형식이 "날짜", "시간" 형식인 경우에 적용되는 속성입니다.


---

### userawnumbervalue

> Misc. Objects > ExcelImportObject > Property > userawnumbervalue

**Description**

엑셀의 셀값이 숫자계열일 때 원본값 그대로 Import 할지 여부를 설정하는 속성입니다.

**Setting Syntax**

```javascript
bRawNum ::= 'true' | 'false'
```
```javascript
this.ExcelImportObject00.userawnumbervalue = false;
```
- **`true`** — 엑셀의 셀에 설정된 원본 데이터값만 Import 합니다.

셀의 표시형식에 따른 서식은 Import 하지 않습니다.
- **`false`** — 엑셀의 셀에 표시된 값을 Import 합니다.

셀의 표시형식에 따른 서식을 반영하여 Import 합니다.
셀의 표시형식이 "통화", "회계" 이면 통화기호, 회계기호를 포함하여 Import 합니다.
셀의 표시형식이 "백분율" 이면 "%" 기호를 포함하지 않고 Import 합니다.

**Remark**

- userawnumbervalue 속성을 설정하지 않으면 true 로 적용됩니다.

- userawnumbervalue 속성은 엑셀의 셀 표시형식이 "숫자", "통화", "회계", "백분율" 등 숫자형식인 경우에 적용되는 속성입니다.


---

### 메서드 (Methods)

### addEvent

> Misc. Objects > ExcelImportObject > Method > addEvent

**Description**

ExcelImportObject 에 특정 이벤트를 선언하여 추가하는 메소드입니다.

**Syntax**

```javascript
ExcelImportObject.addEvent( strEventID )
```

**Parameters**

```
ExcelImportObject 에 추가할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 추가에 성공하면 true 를 반환합니다.

이벤트 추가에 실패하거나 선언되어 있는 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에 특정 이벤트를 추가할 때 사용하는 메소드입니다.

- ExcelImportObject 에서 특정 이벤트를 제거하려면 removeEvent() 메소드를 사용하여야 합니다.


---

### addEventHandler

> Misc. Objects > ExcelImportObject > Method > addEventHandler

**Description**

ExcelImportObject 의 특정 이벤트에 핸들러 함수를 추가하는 메소드입니다.

**Syntax**

```javascript
ExcelImportObject.addEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수가 추가될 이벤트의 ID를 설정합니다.
```

**Return**

이벤트에 추가된 핸들러 함수의 인덱스를 반환합니다.
동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 -1 을 반환합니다.


---

### addEventHandlerLookup

> Misc. Objects > ExcelImportObject > Method > addEventHandlerLookup

**Description**

함수를 검색하여 ExcelImportObject 의 특정 이벤트에 핸들러 함수로 추가하는 메소드입니다.

**Syntax**

```javascript
ExcelImportObject.addEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

```
핸들러 함수가 추가될 이벤트의 ID를 설정합니다.
```

**Return**

이벤트에 추가된 핸들러 함수의 인덱스를 반환합니다.
동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다.
정상적으로 추가되지 않은 경우에는 "-1"을 반환합니다.

**Remark**

- strFunc 이름의 함수를 objTarget 영역부터 상위로 올라가며 검색합니다.
  검색된 함수가 있다면 이벤트에 핸들러 함수로 추가합니다.


---

### clearEventHandler

> Misc. Objects > ExcelImportObject > Method > clearEventHandler

**Description**

특정 이벤트에 등록된 핸들러 함수를 모두 제거하는 메소드입니다.

**Syntax**

```javascript
ExcelImportObject.clearEventHandler( strEventID )
```

**Parameters**

```
모든 핸들러 함수를 제거할 이벤트의 ID를 설정합니다.
```

**Return**

특정 이벤트에서 제거된 핸들러 함수의 갯수를 반환합니다.

**Remark**

- 특정 핸들러 함수만 제거하려면 removeEventHandler() 메소드를 사용하여야 합니다.


---

### destroy

> Misc. Objects > ExcelImportObject > Method > destroy

**Description**

스크립트에서 동적으로 생성한 ExcelImportObject 을(를) 삭제하는 메소드입니다.

**Syntax**

```javascript
ExcelImportObject.destroy()
```

**Return**

ExcelImportObject 이(가) 정상적으로 삭제되면 true 를 반환합니다.

ExcelImportObject 이(가) 정상적으로 삭제되지 않으면 false 를 반환합니다.

**Remark**

- 동적으로 생성한 ExcelImportObject 을(를) 완전히 삭제하기 위해서는 destroy() 메소드를 호출해야 합니다.

**See Also**

Form.addChildForm.insertChildForm.removeChild


---

### findEventHandler

> Misc. Objects > ExcelImportObject > Method > findEventHandler

**Description**

ExcelImportObject 의 특정 이벤트에서 핸들러 함수를 찾아 인덱스를 반환하는 메소드입니다.

**Syntax**

```javascript
ExcelImportObject.findEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 찾을 이벤트의 ID를 설정합니다.
```

**Return**

특정 이벤트에서 찾은 핸들러 함수의 인덱스를 반환합니다.

특정 이벤트에 찾으려는 핸들러 함수가 존재하지 않으면 -1 을 반환합니다.

**Remark**

- 핸들러 함수의 인덱스는 0 부터 시작합니다.


---

### getEventHandler

> Misc. Objects > ExcelImportObject > Method > getEventHandler

**Description**

ExcelImportObject 의 특정 이벤트에서 지정된 인덱스에 해당하는 핸들러 함수를 반환하는 메소드입니다.

**Syntax**

```javascript
ExcelImportObject.getEventHandler( strEventID, nIdx )
```

**Parameters**

```
핸들러 함수를 얻을 이벤트의 ID를 설정합니다.
```

**Return**

지정된 인덱스의 핸들러 함수 오브젝트를 반환합니다.

지정된 인덱스에 핸들러 함수가 존재하지 않는다면 null 을 반환합니다.


---

### importData

> Misc. Objects > ExcelImportObject > Method > importData

**Description**

파일을 DataSet으로 Import 하는 메소드입니다.

**Syntax**

```javascript
ExcelImportObject.importData( strSource,strRange,strOutDatasets [,strArgument] )
```

**Parameters**

```
Import 할 파일의 위치를 URL 형식의 문자열로 설정합니다.

importfilemode 속성값이 "server" 일 경우 "http://", "https://" 형식으로 파일의 위치를 설정합니다.
importfilemode 속성값이 "server" 일 때 상대경로를 설정 시 importurl 속성에 설정된 경로를 기준으로 처리됩니다.
importfilemode 속성값이 "local" 이거나 strSource 값을 설정하지 않았을 경우 FileDialog 가 표시되고 파일을 선택합니다.
```

**Return**

없음

**Remark**

- Import 중 ESC 키를 입력하면 Import 를 중지시킬 수 있습니다.

- Local 에 위치한 파일을 importurl 속성에 설정된 서버로 보낸 후 트랜잭션처럼 DataSet 으로 수신받습니다.

- importDataEx() 메소드와의 차이는 Import 를 구분할 수 있는 ID 파라미터의 유무입니다.

- Import 할 파일에 포함된 개체(이미지, 차트, 수식 등)는 Import 대상에 포함하지 않으며 개체가 포함된 경우 개체는 무시하고 처리합니다.


---

### importDataEx

> Misc. Objects > ExcelImportObject > Method > importDataEx

**Description**

ID 로 구분하여 파일을 DataSet 으로 Import 하는 메소드입니다.

**Syntax**

```javascript
ExcelImportObject.importDataEx( strImportID, strSource,strRange,strOutDatasets [,strArgument] )
```

**Parameters**

```
Import 를 구분하기 위한 ID 를 문자열로 설정합니다.

설정값은 onsuccess 이벤트에서 ExcelImportEventInfo 오브젝트의 importid 속성으로 전달됩니다.
```

**Return**

없음

**Remark**

- Import 중 ESC 키를 입력하면 Import 를 중지시킬 수 있습니다.

- Local 에 위치한 파일을 importurl 속성에 설정된 서버로 보낸 후 트랜잭션처럼 DataSet 으로 수신받습니다.

- importData() 메소드와의 차이는 Import 를 구분할 수 있는 ID 파라미터의 유무입니다.

- Import 할 파일에 포함된 개체(이미지, 차트, 수식 등)는 Import 대상에 포함하지 않으며 개체가 포함된 경우 개체는 무시하고 처리합니다.


---

### insertEventHandler

> Misc. Objects > ExcelImportObject > Method > insertEventHandler

**Description**

ExcelImportObject 의 특정 이벤트에 핸들러 함수를 지정한 위치에 삽입하는 메소드입니다.

**Syntax**

```javascript
ExcelImportObject.insertEventHandler( strEventID, nIndex, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수가 삽입될 이벤트의 ID 를 설정합니다.
```

**Return**

이벤트에 삽입된 핸들러 함수의 인덱스를 반환합니다.
동일한 핸들러 함수가 이미 있다면 해당 핸들러 함수의 인덱스를 반환합니다.

핸들러 함수가 정상적으로 삽입되지 않은 경우에는 -1 을 반환합니다.

**Remark**

- 첫번째 핸들러 함수의 인덱스는 0 입니다.


---

### removeEvent

> Misc. Objects > ExcelImportObject > Method > removeEvent

**Description**

ExcelImportObject 에 선언된 특정 이벤트를 삭제하는 메소드입니다.

**Syntax**

```javascript
ExcelImportObject.removeEvent( strEventID )
```

**Parameters**

```
ExcelImportObject 에서 삭제할 이벤트의 ID 를 문자열로 설정합니다.
```

**Return**

이벤트 삭제에 성공하면 true 를 반환합니다.

이벤트 삭제에 실패하거나 선언되지 않은 이벤트 ID 설정 시 false 를 반환합니다.

**Remark**

- Composite Component 와 같은 사용자 컴포넌트에서 특정 이벤트를 삭제할 때 사용하는 메소드입니다.

- 이벤트에 핸들러 함수가 정의되어 있을 경우 이벤트를 삭제할 수 없습니다.

- ExcelImportObject 에 특정 이벤트를 추가하려면 addEvent() 메소드를 사용하여야 합니다.

- ExcelImportObject 에 기본으로 선언되어 있는 이벤트 삭제 시 오동작 할 수 있으므로 주의하여야 합니다.


---

### removeEventHandler

> Misc. Objects > ExcelImportObject > Method > removeEventHandler

**Description**

ExcelImportObject 의 특정 이벤트에서 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
ExcelImportObject.removeEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 제거할 이벤트의 ID를 설정합니다.
```

**Return**

핸들러 함수 제거에 성공하면 1 을 반환합니다.

핸들러 함수 제거에 실패하면 0 을 반환합니다.

**Remark**

- 핸들러 함수가 제거되면 핸들러 함수의 인덱스가 0 번부터 재조정됩니다.

- 이벤트에 등록된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하여야 합니다.


---

### removeEventHandlerLookup

> Misc. Objects > ExcelImportObject > Method > removeEventHandlerLookup

**Description**

ExcelImportObject 의 특정 이벤트에서 검색된 함수와 동일한 핸들러 함수를 제거하는 메소드입니다.

**Syntax**

```javascript
ExcelImportObject.removeEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 제거할 이벤트의 ID를 설정합니다.
```

**Return**

핸들러 함수 제거에 성공하면 1 을 반환합니다.

핸들러 함수 제거에 실패하면 0 을 반환합니다.

**Remark**

- 핸들러 함수가 제거되면 핸들러 함수의 인덱스가 0 번부터 재조정됩니다.

- 이벤트에 등록된 핸들러 함수를 모두 제거하려면 clearEventHandler() 메소드를 사용하여야 합니다.


---

### setEventHandler

> Misc. Objects > ExcelImportObject > Method > setEventHandler

**Description**

ExcelImportObject 의 특정 이벤트에서 첫번째 핸들러 함수를 변경하는 메소드입니다.

**Syntax**

```javascript
ExcelImportObject.setEventHandler( strEventID, objFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 변경할 이벤트의 ID를 설정합니다.
```

**Return**

첫번째 핸들러 함수 변경에 성공하면 0 을 반환합니다.

첫번째 핸들러 함수 변경에 실패하면 -1 을 반환합니다.

**Remark**

- 인덱스가 0 번인 핸들러 함수를 새로운 함수로 대체합니다.

- 인덱스가 0 번인 핸들러 함수가 없다면 0 번 인덱스에 새로운 함수를 핸들러 함수로 추가합니다.


---

### setEventHandlerLookup

> Misc. Objects > ExcelImportObject > Method > setEventHandlerLookup

**Description**

ExcelImportObject 의 특정 이벤트에서 첫번째 핸들러 함수를 검색된 함수로 변경하는 메소드입니다.

**Syntax**

```javascript
ExcelImportObject.setEventHandlerLookup( strEventID, strFunc, objTarget )
```

**Parameters**

```
핸들러 함수를 변경할 이벤트의 ID를 설정합니다.
```

**Return**

첫번째 핸들러 함수 변경에 성공하면 0 을 반환합니다.

첫번째 핸들러 함수 변경에 실패하면 -1 을 반환합니다.

**Remark**

- 인덱스가 0 번인 핸들러 함수를 검색된 함수로 대체합니다.

- 인덱스가 0 번인 핸들러 함수가 없다면 0 번 인덱스에 검색된 함수를 핸들러 함수로 추가합니다.


---

### 이벤트 (Events)

### onerror

> Misc. Objects > ExcelImportObject > Event > onerror

**Description**

Import 도중 오류가 생겼을때 발생하는 이벤트입니다.

**Syntax**

```javascript
onerror(obj:nexacro.ExcelImportObject,e:nexacro.ExcelImportErrorEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음

**Remark**

- onerror 이벤트가 발생하면 Import 기능이 종료됩니다.


---

### onsuccess

> Misc. Objects > ExcelImportObject > Event > onsuccess

**Description**

Import 가 완료되었을때 발생하는 이벤트입니다.

**Syntax**

```javascript
onsuccess(obj:nexacro.ExcelImportObject,e:nexacro.ExcelImportEventInfo);
```

**Parameters**

```
Event가 발생한 Object.
```

**Return**

없음


---

## Misc. Objects > System

### System

> Misc. Objects > System

**Description**

운영체제, 하드웨어, 입력장치 등의 정보를 제공하는 오브젝트입니다.

**Remark**

- 스크립트에서 system 전역객체를 통해 접근합니다.

- OS 와 브라우저에 따라 지원되는 기능이 달라집니다.

**Property**

| Name | Description |
| --- | --- |
| computername | 어플리케이션이 실행된 컴퓨터의 NetBIOS 이름을 갖는 읽기전용 속성입니다. |
| cpuarchitecture | 어플리케이션이 실행된 컴퓨터의 CPU 제조사 이름을 갖는 읽기전용 속성입니다. |
| cpucount | 어플리케이션이 실행된 컴퓨터의 CPU 갯수를 갖는 읽기전용 속성입니다. |
| cputype | 어플리케이션이 실행된 컴퓨터의 CPU 종류 정보를 갖는 읽기전용 속성입니다. |
| locale | 어플리케이션이 실행된 컴퓨터의 locale 코드값을 갖는 읽기전용 속성입니다. |
| loginuser | 어플리케이션이 실행된 컴퓨터에 로그인된 사용자의 ID 를 갖는 읽기전용 속성입니다. |
| mobileorientation | 어플리케이션이 실행된 모바일 기기의 현재 방향정보를 갖는 읽기전용 속성입니다. |
| mobileproducttype | 어플리케이션이 실행된 모바일 기기의 기종명을 갖는 읽기전용 속성입니다. |
| monitorcount | 어플리케이션이 실행된 컴퓨터의 모니터 갯수를 갖는 읽기전용 속성입니다. |
| navigatorfullname | 어플리케이션이 실행된 Windows 넥사크로의 엔진종류를 갖는 읽기전용 속성입니다. |
| navigatorname | 어플리케이션이 실행된 브라우저 정보를 갖는 읽기전용 속성입니다. |
| navigatorversion | 어플리케이션이 실행된 브라우저의 버전을 갖는 읽기전용 속성입니다. |
| notificationtoken | 어플리케이션이 실행된 모바일 기기에서 Push 알림을 받기 위한 Device Token 값을 갖는 읽기전용 속성입니다. |
| osversion | 어플리케이션이 실행된 환경의 운영체제 명칭과 버전을 갖는 읽기전용 속성입니다. |
| taskbarsize | 어플리케이션이 실행된 모바일 기기의 TaskBar(Android 는 IndicatorBar)의 크기를 갖는 읽기전용 속성입니다. |

**Method**

| Name | Description |
| --- | --- |
| attachChildFrame | 웹브라우저에서 넥사크로 스튜디오로 Generate 된 "xfdl" 파일을 사용자 DOM 에 로드하는 메소드입니다. |
| checkDevicePermission | 권한 설정 여부를 확인하는 메소드입니다. |
| clearClipboard | 시스템의 클립보드에 저장된 내용을 삭제하는 메소드입니다. |
| clientToScreenX | 컴포넌트의 클라이언트 기준의 x 좌표값을 스크린 기준의 x 좌표값으로 반환하는 메소드입니다. |
| clientToScreenY | 컴포넌트의 클라이언트 기준의 y 좌표값을 스크린 기준의 y 좌표값으로 반환하는 메소드입니다. |
| convertRealPath | Alias 가 포함된 경로를 실제 절대경로로 변환하는 메소드입니다. |
| execBrowser | 전달된 문자열 정보에 따라 브라우저(또는 앱)를 실행하는 메소드입니다. |
| execDefaultBrowser | 전달된 URL을 기본앱으로 지정한 웹브라우저에서 실행하는 메소드입니다. |
| execNexacro | 전달된 실행경로와 인수값으로 넥사크로를 실행하는 메소드입니다. |
| execShell | 윈도우 셸(Shell)에 설정한 값을 전달하는 메소드입니다. |
| exportPDF | 지정한 컴포넌트의 이미지를 PDF 파일로 출력하는 메소드입니다. |
| getClipboard | 시스템의 클립보드에 저장된 데이터를 지정된 형식으로 반환하는 메소드입니다. |
| getCursorX | 마우스 커서가 위치한 곳의 x 좌표값을 반환하는 메서드입니다. |
| getCursorY | 마우스 커서가 위치한 곳의 y 좌표값을 반환하는 메서드입니다. |
| getMonitorIndex | 다중 모니터 일 때 전달된 좌표값에 가장 가까운 모니터의 번호를 반환하는 메소드입니다. |
| getPackageVersion | 앱 버전 정보를 반환하는 메소드입니다. |
| getScreenHeight | 어플리케이션이 실행된 스크린의 높이를 반환하는 메소드입니다. |
| getScreenPosition | 애플리케이션이 실행된 스크린을 기준으로 컴포넌트의 x, y 좌표값을 가지는 오브젝트를 반환하는 메서드입니다. |
| getScreenPrintString | 지정한 컴포넌트를 HTML 문자열 형태로 출력하는 메소드입니다. |
| getScreenRect | 지정한 모니터의 스크린정보를 Rect 오브젝트로 반환하는 메소드입니다. |
| getScreenResolution | 지정한 모니터의 해상도를 반환하는 메소드입니다. |
| getScreenWidth | 어플리케이션이 실행된 스크린의 너비를 반환하는 메소드입니다. |
| isPrimaryMonitor | 다중 모니터 일 때, 지정한 모니터가 주 모니터인지 반환하는 메소드입니다. |
| print | 지정한 컴포넌트의 이미지를 프린터로 출력하는 메소드입니다. |
| requestDevicePermission | 설정한 권한을 요청하는 메소드입니다. |
| saveToImageBase64String | 지정한 컴포넌트의 이미지를 Base64 로 인코딩 된 String 으로 반환하는 메소드입니다. |
| saveToImageFile | 지정한 컴포넌트의 이미지를 파일로 출력하는 메소드입니다. |
| screenToClientX | 스크린 기준의 x 좌표값을 컴포넌트의 클라이언트 기준 x 좌표값으로 반환하는 메소드입니다. |
| screenToClientY | 스크린 기준의 y 좌표값을 컴포넌트의 클라이언트 기준 y 좌표값으로 반환하는 메소드입니다. |
| setClipboard | 시스템의 클립보드에 지정된 형식으로 데이터를 저장하는 메소드입니다. |
| showModalSync | 동적으로 생성한 ChildFrame 을 Sync 로 동작하는 Modal 형태로 표시하는 메소드입니다. |
| showModalWindow | 동적으로 생성한 ChildFrame 을 별도의 Modal Window 로 표시하는 메소드입니다. |


---

### 속성 (Properties)

### computername

> Misc. Objects > System > Property > computername

**Description**

어플리케이션이 실행된 컴퓨터의 NetBIOS 이름을 갖는 읽기전용 속성입니다.

**Remark**

- 어플리케이션이 시작될 때 레지스트리에서 정보를 읽어와 저장합니다.


---

### cpuarchitecture

> Misc. Objects > System > Property > cpuarchitecture

**Description**

어플리케이션이 실행된 컴퓨터의 CPU 제조사 이름을 갖는 읽기전용 속성입니다.

**Remark**

- CPU 제조사 얻기에 실패했을 경우 "UNKNOWN" 값을 갖습니다.


---

### cpucount

> Misc. Objects > System > Property > cpucount

**Description**

어플리케이션이 실행된 컴퓨터의 CPU 갯수를 갖는 읽기전용 속성입니다.


---

### cputype

> Misc. Objects > System > Property > cputype

**Description**

어플리케이션이 실행된 컴퓨터의 CPU 종류 정보를 갖는 읽기전용 속성입니다.

**Remark**

- Processor Architecture, Processor Level, Processor Revision 정보가 순서대로 공백으로 구분되어 저장됩니다.

- CPU 종류 정보얻기에 실패했을 경우 "UNKNOWN PROCESSOR" 값을 갖습니다.


---

### locale

> Misc. Objects > System > Property > locale

**Description**

어플리케이션이 실행된 컴퓨터의 locale 코드값을 갖는 읽기전용 속성입니다.

**Remark**

- locale은 "language[_country]"  형식으로 작성된 문자열입니다.
  "language" 는 ISO 639-1에서 정의하고 있는 2-알파벳 Language 코드이고,
  "country" 는 ISO 3166-1에서 정의하고 있는 2-알파벳 Country 코드입니다.

- 국가 및 언어 코드는 "Appendix > Locale Code List" 항목을 참고하세요.


---

### loginuser

> Misc. Objects > System > Property > loginuser

**Description**

어플리케이션이 실행된 컴퓨터에 로그인된 사용자의 ID 를 갖는 읽기전용 속성입니다.


---

### mobileorientation

> Misc. Objects > System > Property > mobileorientation

**Description**

어플리케이션이 실행된 모바일 기기의 현재 방향정보를 갖는 읽기전용 속성입니다.

**Remark**

- "Portrait" 일 경우 "0" 값을 갖습니다.
  "Reverse Portrait" 일 경우 "1" 값을 갖습니다.
  "LandScape Left" 일 경우 "2" 값을 갖습니다.
  "LandScape Right" 일 경우 "3" 값을 갖습니다.


---

### mobileproducttype

> Misc. Objects > System > Property > mobileproducttype

**Description**

어플리케이션이 실행된 모바일 기기의 기종명을 갖는 읽기전용 속성입니다.

**Remark**

- 모바일 기기의 기종명 또는 제조코드를 반환하며 형식은 각 제조사에 따라 다를 수 있습니다.
  예) "SHV-E160K", "iPhone"

- PC에서 실행하는 경우에는 빈값을 반환합니다.


---

### monitorcount

> Misc. Objects > System > Property > monitorcount

**Description**

어플리케이션이 실행된 컴퓨터의 모니터 갯수를 갖는 읽기전용 속성입니다.


---

### navigatorfullname

> Misc. Objects > System > Property > navigatorfullname

**Description**

어플리케이션이 실행된 Windows 넥사크로의 엔진종류를 갖는 읽기전용 속성입니다.

**Setting Syntax**

```javascript
var navigatorFullName = system.navigatorfullname;
```
- **`"Nexacro N Engine (x86)"`** — Windows 넥사크로가 32bit 버전일 때 "Nexacro N Engine (x86)" 값을 갖습니다.
- **`"Nexacro N Engine (x64)"`** — Windows 넥사크로가 64bit 버전일 때 "Nexacro N Engine (x64)" 값을 갖습니다.

**Remark**

- Windows NRE 만 지원하는 속성입니다.


---

### navigatorname

> Misc. Objects > System > Property > navigatorname

**Description**

어플리케이션이 실행된 브라우저 정보를 갖는 읽기전용 속성입니다.

**Remark**

- "nexacro", "Chrome", "Gecko" 등의 값을 갖습니다.


---

### navigatorversion

> Misc. Objects > System > Property > navigatorversion

**Description**

어플리케이션이 실행된 브라우저의 버전을 갖는 읽기전용 속성입니다.

**Remark**

- 버전명 전체를 반환하지 않고 메이저 버전만 반환합니다.
  예를 들어 사용하는 웹브라우저가 구글 크롬이고 버전이 '28.0.1500.95'라면 '28'만 반환합니다.


---

### notificationtoken

> Misc. Objects > System > Property > notificationtoken

**Description**

어플리케이션이 실행된 모바일 기기에서 Push 알림을 받기 위한 Device Token 값을 갖는 읽기전용 속성입니다.


---

### osversion

> Misc. Objects > System > Property > osversion

**Description**

어플리케이션이 실행된 환경의 운영체제 명칭과 버전을 갖는 읽기전용 속성입니다.

**Setting Syntax**

```javascript
var osVersion = system.osversion;
```

**Remark**

- "Android 2.3", "iOS 6", "Windows 7", "Windows Vista" 등의 값을 갖습니다.

◆ WRE 제약

- WRE 실행 시 Chromium 기반 브라우저(Edge, Chrome, Opera)의 User-Agent Reduction 반영에 따라 최신 버전에서는 실행 환경과 통신 프로토콜에 따라 실제 운영체제와 다른 값이 속성값으로 처리되며 정상적인 동작을 보장하지 못할 수 있습니다.
  * 참고: https://www.chromium.org/updates/ua-reduction/

  - HTTPS 통신: 실제 운영체제 정보가 포함된 문자열을 속성값으로 가집니다.
  - HTTP 통신: 실제 운영체제 버전 정보가 아닌 고정된 문자열을 속성값으로 가집니다.
     Windows(Edge, Chrome, Opera): "Windows 10"
     macOS(Chrome): "Mac OS 10.15.7"
     Android(Chrome, Opera): "Android 10"
        * HTTP 통신 시 Android 운영체제에서 화면 로딩, 화면 회전 시 화면 비율이 확대 또는 축소될 수 있습니다.


---

### taskbarsize

> Misc. Objects > System > Property > taskbarsize

**Description**

어플리케이션이 실행된 모바일 기기의 TaskBar(Android 는 IndicatorBar)의 크기를 갖는 읽기전용 속성입니다.

**Setting Syntax**

```javascript
var nTask = system.taskbarsize;
```

**Remark**

- Taskbar(IndicatorBar) 의 표시 유무와 상관없이 기본 TaskBar 의 크기를 갖습니다.


---

### 메서드 (Methods)

### attachChildFrame

> Misc. Objects > System > Method > attachChildFrame

**Description**

웹브라우저에서 넥사크로 스튜디오로 Generate 된 "xfdl" 파일을 사용자 DOM 에 로드하는 메소드입니다.

**Syntax**

```javascript
system.attachChildFrame(window, document, strKey, stradlurl, strDivId, strxfdlurl)
```

**Parameters**

```
window 객체를 설정합니다.
```

**Return**

없음

**Remark**

- 스크립트에서 mainframe 을 사용하여 접근할 수 없습니다.

- 넥사크로 스튜디오로 개발된 xfdl 파일을 웹브라우저에서 사용할 수 있도록 제공되는 메소드입니다.


---

### checkDevicePermission

> Misc. Objects > System > Method > checkDevicePermission

**Description**

권한 설정 여부를 확인하는 메소드입니다.

**Syntax**

```javascript
system.checkDevicePermission(arrPermissiontypes);
```

**Parameters**

```
설정 여부를 확인할 수 있는 권한 목록을 배열 형식으로 설정합니다.
지정할 수 있는 값은 아래와 같습니다.

// 공통 
nexacro.DevicePermissionType.CALENDAR: "calendar" 
nexacro.DevicePermissionType.CAMERA: "camera" 
nexacro.DevicePermissionType.CONTACTS: "contacts" 
nexacro.DevicePermissionType.LOCATION: "location" 
nexacro.DevicePermissionType.MICROPHONE: "microphone" 

// Android 
nexacro.DevicePermissionType.PHONE: "phone" 
nexacro.DevicePermissionType.SMS: "sms" 
nexacro.DevicePermissionType.STORAGE: "storage" 

// iOS 
nexacro.DevicePermissionType.PHOTO: "photo" 
nexacro.DevicePermissionType.REMINDERS: "reminders"
```

**Return**

없음

**Remark**

- 설정 여부는 Environment의 ondevicepermission 이벤트에서 확인할 수 있습니다.


---

### clearClipboard

> Misc. Objects > System > Method > clearClipboard

**Description**

시스템의 클립보드에 저장된 내용을 삭제하는 메소드입니다.

**Syntax**

```javascript
system.clearClipboard()
```

**Parameters**

system.clearClipboard();

**Return**

없음

**Remark**

◆ WRE 제약 

- Edge, Chrome, FireFox, Opera 브라우저는 https 또는 localhost 통신 인 경우만 clearClipboard() 메소드가 정상동작 합니다.


---

### clientToScreenX

> Misc. Objects > System > Method > clientToScreenX

**Description**

컴포넌트의 클라이언트 기준의 x 좌표값을 스크린 기준의 x 좌표값으로 반환하는 메소드입니다.

**Syntax**

```javascript
system.clientToScreenX(objComp, nPosX)
```

**Parameters**

```
변환할 x 좌표값의 기준이 되는 컴포넌트를 설정합니다.
```

**Return**

스크린 기준의 x 좌표값을 반환합니다.

**Remark**

- 컴포넌트의 클라이언트 기준 좌표이므로 border 속성과 같이 클라이언트 영역이 아닌 부분은 계산에서 제외됩니다.
  예를 들어 클라이언트 기준 좌표계에서 좌표값(0,0)은 border 내부의 왼쪽상단 영역을 의미합니다.

◆ WRE 제약

- Form 오브젝트의 onload 이벤트 발생 후 마우스 이벤트 발생 전에 메소드가 실행되면 변환되지 않은 컴포넌트 좌표값을 그대로 반환합니다. 
  WRE 환경에서는 마우스 이벤트가 발생하기 전에 정확한 브라우저 영역 계산을 할 수 없습니다. 이 때문에 부정확한 변환값을 반환하지 않고 컴포넌트 좌표값을 반환합니다.
  마우스 이벤트(사용자의 컴포넌트 클릭, 마우스 이동 등의 동작)가 발생하지 않은 경우에는 WRE 환경에서 해당 메소드를 사용하지 않을 것을 권장합니다.


---

### clientToScreenY

> Misc. Objects > System > Method > clientToScreenY

**Description**

컴포넌트의 클라이언트 기준의 y 좌표값을 스크린 기준의 y 좌표값으로 반환하는 메소드입니다.

**Syntax**

```javascript
system.clientToScreenY(objComp, nPosY)
```

**Parameters**

```
변환할 y 좌표값의 기준이 되는 컴포넌트를 설정합니다.
```

**Return**

스크린 기준의 y 좌표값을 반환합니다.

**Remark**

- 컴포넌트의 클라이언트 기준 좌표이므로 border 속성과 같이 클라이언트 영역이 아닌 부분은 계산에서 제외됩니다.
  예를 들어 클라이언트 기준 좌표계에서 좌표값(0,0)은 border 내부의 왼쪽상단 영역을 의미합니다.

◆ WRE 제약

- Form 오브젝트의 onload 이벤트 발생 후 마우스 이벤트 발생 전에 메소드가 실행되면 변환되지 않은 컴포넌트 좌표값을 그대로 반환합니다. 
  WRE 환경에서는 마우스 이벤트가 발생하기 전에 정확한 브라우저 영역 계산을 할 수 없습니다. 이 때문에 부정확한 변환값을 반환하지 않고 컴포넌트 좌표값을 반환합니다.
  마우스 이벤트(사용자의 컴포넌트 클릭, 마우스 이동 등의 동작)가 발생하지 않은 경우에는 WRE 환경에서 해당 메소드를 사용하지 않을 것을 권장합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다.
때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.


---

### convertRealPath

> Misc. Objects > System > Method > convertRealPath

**Description**

Alias 가 포함된 경로를 실제 절대경로로 변환하는 메소드입니다.

**Syntax**

```javascript
system.convertRealPath(strAlias)
```

**Parameters**

```
절대경로로 변환하려는 Alias 가 포함된 경로를 문자열로 설정합니다.
```

**Return**

실제 절대경로를 반환합니다.

**Remark**

- 경로에 사용되는 Alias 실제경로입니다.

	
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


---

### execBrowser

> Misc. Objects > System > Method > execBrowser

**Description**

전달된 문자열 정보에 따라 브라우저(또는 앱)를 실행하는 메소드입니다.

**Syntax**

```javascript
system.execBrowser( strUrl )
```

**Parameters**

```
URL 경로 또는 전화 걸기, 메일 보내기 기능을 실행하기 위한 정보를 문자열로 설정합니다.
Android NRE, iOS/iPadOS NRE에서는 파일 또는 앱을 실행하기 위한 문자열을 설정할 수 있습니다. Remark 항목을 참고하세요.
```

**Return**

없음

**Remark**

- 윈도우 운영체제 NRE에서는 시스템에 설정된 기본 브라우저가 아닌 Edge 브라우저가 실행됩니다.
  윈도우 10에서 최신 업데이트를 적용하지 않았거나 윈도우 8.1 이하 버전에서는 인터넷 익스플로러가 실행될 수 있습니다.
  시스템에 설정된 기본 브라우저를 실행하려면 execDefaultBrowser 메소드를 사용합니다.

- WRE에서 메소드 실행 시 해당 웹브라우저에 새 탭(또는 새 창)으로 실행됩니다.

- Android NRE, iOS/iPadOS NRE에서 아래와 같은 문자열을 사용해 특정 파일에 접근하거나 설치된 앱을 실행할 수 있습니다. 
  URL Scheme은 운영체제에 따라 지원하는 항목이 다르며 연결된 앱에 따라 다를 수 있습니다. 운영체제 또는 해당 앱 가이드 문서를 참고하세요.
  특정 앱에서 지원하는 Custom URL Scheme은 앱이 설치되지 않았다면 동작하지 않습니다.
  
  // 상대경로
  system.execBrowser("/storage/emulated/0/Download/test.mp3");

  // 프로토콜 (ftp, file 등)
  system.execBrowser("file:///storage/emulated/0/Download/test.mp3");

  // URL Scheme
  system.execBrowser("Intent://command?parameter=option&version=1");
  system.execBrowser("android-app://com.android.chrome"); 
  system.execBrowser( "fb://profile" );
  system.execBrowser( "twitter://user?screen_name=unity3d" );


---

### execDefaultBrowser

> Misc. Objects > System > Method > execDefaultBrowser

**Description**

전달된 URL을 기본앱으로 지정한 웹브라우저에서 실행하는 메소드입니다.

**Syntax**

```javascript
system.execDefaultBrowser( strUrl, [bNewWindow] );
```

**Parameters**

```
웹페이지 URL 경로를 문자열로 설정합니다.
```

**Return**

없음

**Remark**

- NRE에서 메소드 실행 시 시스템에 설정된 기본 브라우저가 실행됩니다. 
- Desktop WRE 에서 메소드 실행 시 해당 웹브라우저에 새탭(또는 새창)으로 실행됩니다.

◆ Windows NRE 제약

- 윈도우 운영체제 NRE에서는 strUrl 파라미터값이 "http://", "https://"로 시작하지 않을 경우 execShell 메소드와 같은 수준의 실행 제약을 적용합니다. 
  자세한 내용은 execShell 도움말을 참고하세요.


---

### execNexacro

> Misc. Objects > System > Method > execNexacro

**Description**

전달된 실행경로와 인수값으로 넥사크로를 실행하는 메소드입니다.

**Syntax**

```javascript
system.execNexacro(strCommand)
```

**Parameters**

```
옵션예약어와 옵션값을 쌍으로 하여 실행옵션을 설정합니다.
옵션값에 빈칸이 포함된 경우는 따옴표(") 로 묶어야 합니다.

-K : 어플리케이션을 구별하기 위한 키값을 문자열로 설정합니다.
-S : 부트스트랩 경로를 설정합니다.
-C : 컴포넌트가 설치된 경로를 설정합니다.
-THR : 엔진 내부 통신 및 기타 Manager 의 쓰레드 수를 숫자로 설정합니다.
          쓰레드의 갯수는 최소 3개, 최대 10개이며 기본값은 3 입니다.
-SP : Splash Image 의 경로를 설정합니다.
-SM : Splash Image 에 시스템 메시지가 표시되지 않도록 "none" 값을 설정합니다.
         어플리케이션 실행 시 에러가 발생하면 "none" 값을 설정해도 에러 메시지가 표시됩니다.
- LF : 어플리케이션의 Left 위치 좌표값을 설정합니다.
-TP : 어플리케이션의 Top 위치 좌표값을 설정합니다.
-WD : 어플리케이션의 너비를 픽셀단위 숫자로 설정합니다.
-HT : 어플리케이션의 높이를 픽셀단위 숫자로 설정합니다.
-LG : Loading Image 의 경로를 설정합니다.
-TW : 엔진 내부 Manager 의 쓰레드가 대기할 최대시간을 설정합니다.
-OO : 동일한 키의 어플리케이션의 실행을 한개만 허용할 지 Boolean 으로 설정합니다.
-V : 어플리케이션이 실행될 때 추가될 Global 변수를 "변수명:타입=값 변수명:타입=값" 형식으로 설정합니다.
       각 변수는 콤마(",")문자로 구분하여 설정합니다.
       "타입"에 "ev"를 설정 시 Environment 의 Variables 영역에 변수가 추가됩니다.
       "타입"에 "ec"를 설정 시 Environment 의 Cookies 영역에 변수가 추가됩니다.
       "타입"을 설정하지 않거나 "av"를 설정 시 Application 의 Variables 영역에 변수가 추가됩니다.
-SIE : 어플리케이션 실행 시 에러가 발생하면 에러 메시지를 표시하고 종료할 지 Boolean 으로 설정합니다.
         옵션값 생략 시 false 로 적용됩니다.
-CT : 초기 네트워크가 연결되어 있는지 체크하는 최대 대기시간을 설정합니다.
         네트워크가 연결되어 있는지 여부를 어플리케이션이 구동되기 전에 체크합니다.
         대기시간동안 네트워크가 연결여부가 확인되지 않으면 어플리케이션이 종료됩니다.
-SCR : LayoutManager 에서 사용하기 위한 ScreenID 를 설정합니다.
-CC : V8 엔진의 CodeCache 기능을 비활성화 하기위해 설정합니다.
         "NO" 설정 시 CodeCache 기능을 사용하지 않습니다.
         "AL" 설정 또는 옵션값 생략 시 CodeCache 기능이 활성화 됩니다.
-AU : 어플리케이션이 실행될 때 엔진의 업데이트 여부를 설정합니다.
         "auto" 설정 시 엔진을 최신버전으로 업데이트합니다.
         "manual" 설정 시 엔진을 업데이트 하지 않습니다.
-NC : 어플리케이션이 실행될 때 적용될 Config 파일의 경로와 파일명을 설정합니다.
         Local 경로에 위치한 XML 형식의 파일만 설정할 수 있습니다.
         파일명만 설정할 경우 nexacro.exe 위치와 동일한 경로에서 파일을 찾습니다.
         옵션값 생략 시 "%USERAPP%\config\"+[Key] 경로에서 "nexacro_config.xml" 파일을 찾습니다.
```

**Return**

없음

**Remark**

- "실행경로 + 인수의 길이"가 256 자리를 넘는 경우 뒷부분이 짤려 정상적으로 적용되지 않기 때문에 꼭 필요한 옵션만 사용하도록 주의해야 합니다.

- "-AU" 옵션을 설정하면 Build App 과정에서 설정할 수 있는 "Auto Update" 옵션값이 적용되지 않습니다.

- 어플리케이션 실행 시 적용된 Config 파일에 tracemode, loglevel 속성이 정의되어 있지 않으면 Environment 에 설정된 해당 속성값이 적용됩니다.


---

### execShell

> Misc. Objects > System > Method > execShell

**Description**

윈도우 셸(Shell)에 설정한 값을 전달하는 메소드입니다.

**Syntax**

```javascript
system.execShell( strShellCmd )
```

**Parameters**

```
윈도우 셸에 전달할 값을 설정합니다.
사용할 수 있는 형식은 아래와 같습니다.

(1) 파일 경로+파일명
사용자 PC의 파일 경로와 파일명을 지정하고 연결된 앱에서 실행됩니다.
Alias로 설정하거나 직접 파일 경로를 지정할 수 있습니다.

(2) URL
"http://", "https://"로 시작하는 문자열은 URL 값으로 전달되며 기본 웹 브라우저에서 실행됩니다.

(3) 이메일
"mailto:"로 시작하는 문자열은 기본 이메일 앱에서 실행됩니다.
```

**Return**

없음

**Remark**

- execShell 메소드는 설정한 값을 윈도우 셸에 전달할 뿐 직접 특정 프로그램을 실행하지 않습니다.
때문에 사용자 PC 환경 설정에 따라 다르게 동작할 수 있습니다.

- 보안상의 이유로 아래와 같은 경우 설정한 값을 윈도우 셸에 전달하지 않습니다.

(1) 특정 실행 파일 확장자 (38종)
사용자 PC에 악성 코드를 설치하거나 실행할 수 있는 확장자를 제한합니다.
해당 확장자를 가진 파일명으로 설정한 값을 윈도우 셸에 전달하지 않습니다.
bat, bin, cmd, com, cpl, dll, exe, gadget, hta, inf1,
ins, inx, isu, job, js, jse, lnk, msc, msi, msp,
mst, paf, pif, ps1, reg, rgs, scr, sct, shb, shs,
u3p, vb, vbe, vbs, vbscript, ws, wsf, wsh

(2) 사용자 PC에 파일이 없는 경우
파라미터값으로 파일명을 설정한 경우 사용자 PC에 해당 파일이 있는지 확인하고 없으면 설정한 값을 윈도우 셸에 전달하지 않습니다.

(3) 확장자가 없는 경우
아래와 같이 확장자 없는 파일명 또는 시스템 등록 프로그램명을 파라미터값으로 전달해서 실행할 수 없습니다.
(X) system.execShell("notepad")


---

### exportPDF

> Misc. Objects > System > Method > exportPDF

**Description**

지정한 컴포넌트의 이미지를 PDF 파일로 출력하는 메소드입니다.

**Syntax**

```javascript
system.exportPDF(objComponent, strFileName)
```

**Parameters**

```
PDF 파일로 출력할 컴포넌트를 오브젝트로 설정합니다.
```

**Return**

이미지 출력에 성공하면 true를 반환하고 실패하면 false를 반환합니다.

**Remark**

- 파일 저장 시 애플리케이션 샌드박스 정책이 적용됩니다.
- 운영체제별 PDF 파일 저장 위치는 아래와 같습니다.
  - Windows NRE: 내문서
  - macOS NRE: 내문서


---

### getClipboard

> Misc. Objects > System > Method > getClipboard

**Description**

시스템의 클립보드에 저장된 데이터를 지정된 형식으로 반환하는 메소드입니다.

**Syntax**

```javascript
system.getClipboard( strFormat [, objCallBackFunc [, objTarget]] )
```

**Parameters**

```
시스템 클립보드에 데이터를 저장할 때 적용할 형식을 문자열로 설정합니다.

"CF_TEXT" 설정 시 데이터를 텍스트 형식으로 저장합니다.
"CF_UNICODETEXT" 설정 시 데이터를 유니코드 텍스트 형식으로 저장합니다.
"CF_CSV" 설정 시 데이터를 CSV 형식으로 저장합니다.
```

**Return**

시스템 클립보드의 데이터를 지정된 형식으로 반환합니다.

* Chrome, Opera 브라우저는 undefined 를 반환합니다.

**Remark**

◆ NRE 제약 
- 모바일 NRE는 "CF_TEXT" 형식만 지원합니다.

◆ WRE 제약 
- web runtime environment 는 "CF_TEXT" 형식만 지원합니다.
- Edge, Chrome, Opera 브라우저는 Async 방식으로 클립보드의 데이터를 반환합니다.
  따라서 objCallBackFunc, objTarget 파라미터를 설정하여 CallBack 함수로 데이터를 반환받아야 합니다.
- Edge, Chrome, Opera 브라우저는 https 또는 localhost 통신 인 경우만 getClipboard() 메소드가 정상동작 합니다.
- FireFox 브라우저는 보안 정책상 getClipboard() 메소드를 지원하지 않습니다.
  단, 클립보드의 데이터를 붙여넣기는 가능합니다.


---

### getCursorX

> Misc. Objects > System > Method > getCursorX

**Description**

마우스 커서가 위치한 곳의 x 좌표값을 반환하는 메서드입니다.

**Syntax**

```javascript
system.getCursorX()
```

**Parameters**

system.getCursorX()

**Return**

마우스 커서가 위치한 곳의 x 좌표값을 반환합니다.

**Remark**

- ontimer 이벤트에서 getCursorX 메서드 실행 시 정상적인 좌표값을 반환하지 못합니다.


◆ Desktop WRE 제약

- 화면이 로딩된 후 실행 화면 영역 내에서 마우스 커서를 이동하지 않은 경우에는 undefined를 반환합니다.


---

### getCursorY

> Misc. Objects > System > Method > getCursorY

**Description**

마우스 커서가 위치한 곳의 y 좌표값을 반환하는 메서드입니다.

**Syntax**

```javascript
system.getCursorY()
```

**Parameters**

system.getCursorY()

**Return**

마우스 커서가 위치한 곳의 y 좌표값을 반환합니다.

**Remark**

- ontimer 이벤트에서 getCursorY 메서드 실행 시 정상적인 좌표값을 반환하지 못합니다.


◆ Desktop WRE 제약

- 화면이 로딩된 후 실행 화면 영역 내에서 마우스 커서를 이동하지 않은 경우에는 undefined를 반환합니다.


---

### getMonitorIndex

> Misc. Objects > System > Method > getMonitorIndex

**Description**

다중 모니터 일 때 전달된 좌표값에 가장 가까운 모니터의 번호를 반환하는 메소드입니다.

**Syntax**

```javascript
system.getMonitorIndex(nCursorX, nCursorY)
```

**Parameters**

```
스크린의 x 좌표 값을 설정합니다.
```

**Return**

좌표에 해당하는 모니터 번호를 반환합니다.

**Remark**

- 모니터의 번호는 1 부터 시작합니다.

- 웹브라우저 환경에서는 지원하지 않는 메소드입니다.

**Example**



---

### getPackageVersion

> Misc. Objects > System > Method > getPackageVersion

**Description**

앱 버전 정보를 반환하는 메소드입니다.

**Syntax**

```javascript
system.getPackageVersion()
```

**Return**

Package version code, Package version name을 배열로 반환합니다.

[0] Package version code
[1] Package version name


---

### getScreenHeight

> Misc. Objects > System > Method > getScreenHeight

**Description**

어플리케이션이 실행된 스크린의 높이를 반환하는 메소드입니다.

**Syntax**

```javascript
system.getScreenHeight()
```

**Parameters**

system.getScreenHeight()

**Return**

스크린의 높이를 반환합니다.


---

### getScreenPosition

> Misc. Objects > System > Method > getScreenPosition

**Description**

애플리케이션이 실행된 스크린을 기준으로 컴포넌트의 x, y 좌표값을 가지는 오브젝트를 반환하는 메서드입니다.

**Syntax**

```javascript
system.getScreenPosition(objComp)
```

**Parameters**

```
x, y 좌표값을 반환할 기준이 되는 컴포넌트를 설정합니다.
```

**Return**

애플리케이션이 실행된 스크린을 기준으로 설정한 컴포넌트의 x, y 좌표값을 속성으로 가지는 오브젝트를 반환합니다.


---

### getScreenPrintString

> Misc. Objects > System > Method > getScreenPrintString

**Description**

지정한 컴포넌트를 HTML 문자열 형태로 출력하는 메소드입니다.

**Syntax**

```javascript
system.getScreenPrintString(objComponent)
```

**Parameters**

```
출력할 컴포넌트를 오브젝트로 설정합니다.
```

**Return**

HTML 문자열을 반환합니다.
실행 환경에 따라 반환되는 HTML 변환 방식이 다릅니다.
- WRE: 컴포넌트를 HTML 형태로 변환해 출력
- NRE: 컴포넌트를 Base64 인코딩 데이터로 변환해 img 태그로 출력

출력할 내용이 없거나 objComponet가 잘못 설정된 경우 빈 문자열을 반환합니다.

**Remark**

- WebBrowser, WebView 컴포넌트를 objComponent 파라미터로 설정한 경우 로딩된 콘텐츠가 출력되지 않습니다.

- 컴포넌트에 스크롤바가 활성화된 경우에 화면에 표시되지 않는 영역은 처리되지 않습니다.

◆ 윈도우 운영체제 NRE 제약

- VideoPlayer, Plugin 컴포넌트를 objComponent 파라미터로 설정한 경우 로딩된 콘텐츠가 출력되지 않습니다.


---

### getScreenRect

> Misc. Objects > System > Method > getScreenRect

**Description**

지정한 모니터의 스크린정보를 Rect 오브젝트로 반환하는 메소드입니다.

**Syntax**

```javascript
system.getScreenRect(nMonitorIndex)
```

**Parameters**

```
스크린정보를 가져올 모니터의 번호를 설정합니다.
```

**Return**

인수로 전달된 모니터의 스크린정보를 갖는 Rect 오브젝트를 반환합니다.

Rect 오브젝트는 "left", "top", "right", "bottom", "width", "height" 속성을 갖습니다.

**Remark**

- 모니터의 번호는 1 부터 시작합니다.


---

### getScreenResolution

> Misc. Objects > System > Method > getScreenResolution

**Description**

지정한 모니터의 해상도를 반환하는 메소드입니다.

**Syntax**

```javascript
system.getScreenResolution(nMonitorIndex)
```

**Parameters**

```
해상도를 가져올 모니터의 번호를 설정합니다.
```

**Return**

지정된 모니터의 해상도값을 문자열로 반환합니다.

잘못된 모니터 번호를 입력 시 "0" 을 반환합니다.

**Remark**

- 모니터의 번호는 1 부터 시작합니다.


---

### getScreenWidth

> Misc. Objects > System > Method > getScreenWidth

**Description**

어플리케이션이 실행된 스크린의 너비를 반환하는 메소드입니다.

**Syntax**

```javascript
system.getScreenWidth()
```

**Parameters**

system.getScreenWidth()

**Return**

스크린의 너비를 반환합니다.


---

### isPrimaryMonitor

> Misc. Objects > System > Method > isPrimaryMonitor

**Description**

다중 모니터 일 때, 지정한 모니터가 주 모니터인지 반환하는 메소드입니다.

**Syntax**

```javascript
system.isPrimaryMonitor(nMonitorIndex)
```

**Parameters**

```
주 모니터 여부를 판단할 모니터의 번호를 설정합니다.
```

**Return**

지정한 모니터가 주 모니터이면 "true" 를 반환합니다.
지정한 모니터가 주 모니터가 아니면 "false" 를 반환합니다.

**Remark**

- 모니터의 번호는 1 부터 시작합니다.


---

### print

> Misc. Objects > System > Method > print

**Description**

지정한 컴포넌트의 이미지를 프린터로 출력하는 메소드입니다.

**Syntax**

```javascript
system.print( objComponent [, bHideDialog [, strVAlign [, strHAlign [, bFitOnePage [, strOrientation]]]]] )
```

**Parameters**

```
프린터로 출력할 컴포넌트를 오브젝트로 설정합니다.
```

**Return**

이미지 출력 요청에 성공하면 true 를 반환합니다.
이미지 출력 요청에 실패하면 false 를 반환합니다.

실제 프린트 성공과 관계없이 메소드 호출 성공유무를 반환합니다.

**Remark**

- Grid, ListView 컴포넌트에 표시할 데이터가 많으면 스크롤바가 활성화되고 일부 데이터가 화면에 표시되지 않습니다. 이때 print 메소드의  objComponent 파라미터로 Grid, ListView 컴포넌트를 설정하고 실행하면 화면에 보이는 컴포넌트 영역만 출력합니다.
  Grid, ListView 컴포넌트의 전체 내용을 출력하기 위해서는 컴포넌트의 크기를 데이터에 맞추어 조정해야 합니다. 데이터가 많은 경우에는 ExcelExportObject 오브젝트를 사용해 출력할 파일을 따로 생성하거나 리포팅 툴을 사용해야 합니다.

◆ Desktop WRE 제약

- objComponent 파라미터로 설정된 컴포넌트에 WebBrowser 컴포넌트가 포함되어 있을 경우
   화면에 표시된 Form 전체가 출력되며 스크롤로 가려진 부분은 출력되지 않습니다.


---

### requestDevicePermission

> Misc. Objects > System > Method > requestDevicePermission

**Description**

설정한 권한을 요청하는 메소드입니다.

**Syntax**

```javascript
system.requestDevicePermission(arrPermissionTypes[, strDescription])
```

**Parameters**

```
요청할 권한 목록을 배열 형식으로 설정합니다.
지정할 수 있는 값은 아래와 같습니다.

// 공통 
nexacro.DevicePermissionType.CALENDAR: "calendar" 
nexacro.DevicePermissionType.CAMERA: "camera" 
nexacro.DevicePermissionType.CONTACTS: "contacts" 
nexacro.DevicePermissionType.LOCATION: "location" 
nexacro.DevicePermissionType.MICROPHONE: "microphone" 

// Android 
nexacro.DevicePermissionType.PHONE: "phone" 
nexacro.DevicePermissionType.SMS: "sms" 
nexacro.DevicePermissionType.STORAGE: "storage" 

// iOS 
nexacro.DevicePermissionType.PHOTO: "photo" 
nexacro.DevicePermissionType.REMINDERS: "reminders"
```

**Return**

없음

**Remark**

- 설정 결과는 Environment의 ondevicepermission 이벤트에서 확인할 수 있습니다.
- 메소드를 호출했지만 권한 설정 화면을 볼 수 없을 수가 있습니다.
- iOS는 사용자가 거부한 권한에 대해 요청을 할 수 없습니다.
- 안드로이드는 사용자가 "다시 묻지 않기"를 선택한 후 거부한 권한은 요청할 수 없습니다. 해당 권한은 시스템 설정에서만 변경 가능합니다.


---

### saveToImageBase64String

> Misc. Objects > System > Method > saveToImageBase64String

**Description**

지정한 컴포넌트의 이미지를 Base64 로 인코딩 된 String 으로 반환하는 메소드입니다.

**Syntax**

```javascript
system.saveToImageBase64String( objComponent [, bWholeForm [,strImageType [,strOptions]]] )
```

**Parameters**

```
이미지로 출력할 컴포넌트를 오브젝트 형태로 설정합니다.
```

**Return**

- 컴포넌트의 이미지를 Base64 로 인코딩 된 문자열로 반환합니다.
  인코딩에 실패하였을 경우 빈문자열을 반환합니다.

**Remark**

- 알파(alpha) 채널값을 유지하여 반투명값을 저장하기 위해서는 이미지 형식이 "PNG" 이어야 합니다.
   단, "PNG" 파일의 알파(alpha) 채널값 처리 특성상 배경색이 "black" 이 아닌 경우 이미지에 일부 변형이 있을 수 있습니다.

- 컴포넌트의 모습에 따라 차이가 있으나 대체적으로 각 이미지 형식별 특징은 다음과 같습니다.
   용량 : BMP > TIF > PNG > JPG(100) > GIF > JPG(0)
   품질 : (BMP = PNG) > TIF > JPG(100) > GIF > JPG(0)

- 이미지 압축방식이 "CCITT3"나 "CCITT4"인 경우 ColorDepth 는 무조건 1bit 모노크롬으로 저장됩니다.

- "BMP_MONO", "TIF_MONO" 이미지 형식은 1bit 흑백 모노크롬 이미지로 저장됩니다.

- "TIF_24" 이미지 형식은 24bit RGB 이미지로 저장됩니다.


---

### saveToImageFile

> Misc. Objects > System > Method > saveToImageFile

**Description**

지정한 컴포넌트의 이미지를 파일로 출력하는 메소드입니다.

**Syntax**

```javascript
system.saveToImageFile(objComponent, strFileName, strImageType[,strOptions [,bWholeForm]])
```

**Parameters**

```
이미지 파일로 출력할 컴포넌트를 오브젝트 형태로 설정합니다.
```

**Return**

이미지 출력에 성공하면 true 를 반환합니다.

이미지 출력에 실패하면 false 를 반환합니다.

**Remark**

- strFileName 에 설정할 수 있는 값은 OS 의 보안정책에 따라 달라집니다.

- 알파(alpha) 채널값을 유지하여 반투명값을 저장하기 위해서는 이미지 형식이 "PNG" 이어야 합니다.
   단, "PNG" 파일의 알파(alpha) 채널값 처리 특성상 배경색이 "black" 이 아닌 경우 이미지에 일부 변형이 있을 수 있습니다.

- 컴포넌트의 모습에 따라 차이가 있으나 대체적으로 각 이미지 형식별 특징은 다음과 같습니다.
   용량 : BMP > TIF > PNG > JPG(100) > GIF > JPG(0)
   품질 : (BMP = PNG) > TIF > JPG(100) > GIF > JPG(0)

- 이미지 압축방식이 "CCITT3"나 "CCITT4"인 경우 ColorDepth 는 무조건 1bit 모노크롬으로 저장됩니다.

- "BMP_MONO", "TIF_MONO" 이미지 형식은 1bit 흑백 모노크롬 이미지로 저장됩니다.

- "TIF_24" 이미지 형식은 24bit RGB 이미지로 저장됩니다.

- 파일 저장 시 애플리케이션 샌드박스 정책이 적용됩니다.
- 운영체제별 이미지 파일 저장 위치는 아래와 같습니다.
  - Windows NRE: 내문서
  - macOS NRE: 내문서


---

### screenToClientX

> Misc. Objects > System > Method > screenToClientX

**Description**

스크린 기준의 x 좌표값을 컴포넌트의 클라이언트 기준 x 좌표값으로 반환하는 메소드입니다.

**Syntax**

```javascript
system.screenToClientX(objComp, nPosX)
```

**Parameters**

```
변환될 x 좌표값의 기준이 되는 컴포넌트를 설정합니다.
```

**Return**

컴포넌트의 클라이언트 기준 x 좌표값을 반환합니다.

**Remark**

- 컴포넌트의 클라이언트 기준 좌표이므로 border 속성과 같이 클라이언트 영역이 아닌 부분은 계산에서 제외됩니다.
  예를 들어 클라이언트 기준 좌표계에서 좌표값(0,0)은 border 내부의 왼쪽상단 영역을 의미합니다.


---

### screenToClientY

> Misc. Objects > System > Method > screenToClientY

**Description**

스크린 기준의 y 좌표값을 컴포넌트의 클라이언트 기준 y 좌표값으로 반환하는 메소드입니다.

**Syntax**

```javascript
system.screenToClientY(objComp, nPosY)
```

**Parameters**

```
변환될 y 좌표값의 기준이 되는 컴포넌트를 설정합니다.
```

**Return**

컴포넌트의 클라이언트 기준 y 좌표값을 반환합니다.

**Remark**

- 컴포넌트의 클라이언트 기준 좌표이므로 border 속성과 같이 클라이언트 영역이 아닌 부분은 계산에서 제외됩니다.
  예를 들어 클라이언트 기준 좌표계에서 좌표값(0,0)은 border 내부의 왼쪽상단 영역을 의미합니다.

◆ Mobile WRE 제약

- Mobile WRE 실행 시 웹브라우저의 주소창 영역에 대한 정보가 운영체제, 브라우저 버전에 따라 다르게 처리될 수 있습니다. 
  때문에 스크린 좌표값 처리 시 웹브라우저의 주소창 영역은 제외하고 실제 화면이 표시되는 영역을 기준으로 처리합니다.


---

### setClipboard

> Misc. Objects > System > Method > setClipboard

**Description**

시스템의 클립보드에 지정된 형식으로 데이터를 저장하는 메소드입니다.

**Syntax**

```javascript
system.setClipboard( strFormat, varData )
```

**Parameters**

```
시스템 클립보드에 데이터를 저장할 때 적용할 형식을 문자열로 설정합니다.

"CF_TEXT" 설정 시 데이터를 텍스트 형식으로 저장합니다.
"CF_UNICODETEXT" 설정 시 데이터를 유니코드 텍스트 형식으로 저장합니다.
"CF_CSV" 설정 시 데이터를 CSV 형식으로 저장합니다.
```

**Return**

없음

**Remark**

◆ NRE 제약 
- 모바일 NRE는 "CF_TEXT" 형식만 지원합니다.

◆ WRE 제약 
- web runtime environment 는 "CF_TEXT" 형식만 지원합니다.
- Edge, Chrome, FireFox, Opera 브라우저는 https 또는 localhost 통신 인 경우만 setClipboard() 메소드가 정상동작 합니다.


---

### showModalSync

> Misc. Objects > System > Method > showModalSync

**Description**

동적으로 생성한 ChildFrame 을 Sync 로 동작하는 Modal 형태로 표시하는 메소드입니다.

**Syntax**

```javascript
system.showModalSync( objChildframe [, strID ] , objParentFrame, [{objArguList} [, objOpener]] );
```

**Parameters**

```
Modal 로 표시할 ChildFrame 을 오브젝트로 설정합니다.
```

**Return**

Modal 로 표시된 ChildFrame 이 종료된 후 성공/실패 여부를 반환합니다.

**Remark**

* 동적 생성 처리 방식

- showModalSync() 메소드는 스크립트에서 동적으로 생성한 ChildFrame 만 사용할 수 있습니다.
   동적으로 생성한 ChildFrame 이 아닌 경우에는 오동작이 발생할 수 있습니다.

- 동적으로 생성한 ChildFrame 은 autosize 속성값에 따라 표시되는 Modal 의 크기가 결정됩니다.
   autosize 속성값을 설정하지 않으면 true 로 적용됩니다.


* 파라미터 설정 시 참고사항

- objArguList 파라미터로 설정한 변수값은 Modal 로 표시된 ChildFrame 에서 "this.parent.[변수명]" 형태로 접근할 수 있습니다.

- strID 파라미터는 getPopupFrames() 메소드에서 결과값으로 받은 Collection 에 인자로 사용할 수 있습니다.


* 기타 참고사항

- showModalSync() 는 메소드 호출 위치에서 스크립트가 중지되었다가 Modal 종료 후 다음 스크립트가 수행됩니다.
   Modal 의 표시와 관계없이 메소드 호출 이후의 스크립트를 계속해서 수행하려면 showModal() 메소드를 사용하여야 합니다.

- showModalSync() 메소드 실행 시 objParentFrame 파라미터에 설정한 Frame 이 속한 Window 의 팝업 리스트에 Modal 로 표시된 ChildFrame 이 추가됩니다.
   또한, Modal 로 표시된 ChildFrame 이 종료되면 자동으로 팝업 리스트에서 제거되고 내부적으로 destroy 까지 수행됩니다.

- Modal 로 표시될 ChildFrame 의 left, top 속성값이 음수일 경우 0 으로 적용됩니다.
   또한, Modal 창이 표시될 공간이 부족한 경우 TitleBar 가 표시되도록 left, top 위치가 보정됩니다.

- objParentFrame 파라미터에 설정한 Frame 이 속한 window 영역을 기준으로 Modal 이 표시됩니다.
   objParentFrame 파라미터에 설정한 Frame 이 Modeless 인 경우 해당 Frame 이 포함된 Window 를 기준으로 표시됩니다.
   objParentFrame 파라미터에 null 이 설정된 경우 MainFrame 을 기준으로 표시됩니다.

- Modal 로 표시될 ChildFrame 의 openstatus 속성값을 "minimize" 로 설정해도 "normal" 로 표시됩니다.


---

### showModalWindow

> Misc. Objects > System > Method > showModalWindow

**Description**

동적으로 생성한 ChildFrame 을 별도의 Modal Window 로 표시하는 메소드입니다.

**Syntax**

```javascript
system.showModalWindow( objChildFrame [, strID] , objParentFrame[, {objArguList} [, objOpener]] );
```

**Parameters**

```
Modal Window 로 표시할 ChildFrame 을 오브젝트로 설정합니다.
```

**Return**

Modal Window 로 표시된 ChildFrame 에서 close() 메소드에 설정한 파라미터값을 반환합니다.

**Remark**

- showModalWindow() 메소드는 Sync 로 동작합니다.
   따라서 메소드 실행 시 스크립트 수행이 일시 중지되었다가 Modal Window 종료 시 다음 스크립트가 수행됩니다.

- showModalWindow() 메소드는 Modal Window 를 표시하므로 메소드 실행 이전에 열려있는 화면은 모두 사용불가 상태가 됩니다.

- showModalWindow() 메소드로 표시된 Modal Window 는 부모영역과 관계없이 스크린 내에서 이동이 가능합니다.
   showModal() 메소드로 표시된 Modal 은 부모 영역 내에서만 이동이 가능합니다.

- objArguList 파라미터로 설정한 변수값은 Modal Window 로 표시된 ChildFrame 에서 "this.parent.[변수명]" 형태로 접근할 수 있습니다.


---

## Misc. Objects > ExcelExportObject > Objects

### Objects

> Misc. Objects > ExcelExportObject > Objects

**Description**

ExcelExportObject 에서 사용되는 상수 또는 오브젝트입니다.


---

## Misc. Objects > ExcelImportObject > Objects

### Objects

> Misc. Objects > ExcelImportObject > Objects

**Description**

ExcelExportObject 에서 사용되는 상수집합입니다.


---

## Misc. Objects > ExcelExportObject > ExportItem

### ExportItem

> Misc. Objects > ExcelExportObject > Objects > ExportItem

**Description**

ExcelExportObject 에서 ExportItemType 별로 추가할 아이템 정보를 갖는 오브젝트입니다.

**Property**

| Name | Description |
| --- | --- |
| exceptstyle | Grid 에 적용된 CSS 관련 속성 중 Export 시 제외할 속성을 설정하는 속성입니다. |
| exporthead | Grid 의 Head, Summary 영역에 대한 Export 방식을 설정하는 속성입니다. |
| exportimage | Grid 의 Cell 에 설정된 이미지의 Export 방식을 설정하는 속성입니다. |
| exportmerge | Grid 에서 포맷과 관계없이 논리적으로 병합된 Cell 의 Export 방식을 설정하는 속성입니다. |
| exportselect | Grid 에서 Export 시킬 영역을 설정하는 속성입니다. |
| exportvalue | 엑셀 파일로 Export 시킬 경우 Export 되는 내용과 형식을 설정하는 속성입니다. |
| range | 엑셀 또는 한셀 파일에 Export 되는 위치를 설정하는 속성입니다. |
| source | Export 대상이 되는 오브젝트를 설정하는 속성입니다. |
| type | Export 대상이 되는 오브젝트의 종류를 상수값으로 설정하는 속성입니다. |
| valuetypebandid | valuetypecellindex 속성값을 적용할 Band를 설정하는 속성입니다. |
| valuetypecellindex | Export 시 바인드된 Column 값을 적용할 Cell 의 인덱스를 배열로 설정하는 속성입니다. |


---

### 속성 (Properties)

### exceptstyle

> Misc. Objects > ExcelExportObject > Objects > ExportItem > Property > exceptstyle

**Description**

Grid 에 적용된 CSS 관련 속성 중 Export 시 제외할 속성을 설정하는 속성입니다.

**Setting Syntax**

```javascript
strExceptStyle ::= <Exceptlist> | <Exceptlist> ',' strExceptStyle

<Exceptlist> ::= 'none' | 'align' | 'background' | 'color' | 'font' | 'border'

* 각 설정값을 콤마(",")로 구분하여 중복 설정할 수 있습니다.
```
```javascript
var objExpItem = new ExportItem();
objExpItem.exceptstyle = "color,background";
```
- **`"none"`** — Export 에서 제외되는 속성이 없습니다.
- **`"align"`** — Align 관련 -nexa-text-align, -nexa-vertical-align 속성값이 Export 에서 제외됩니다.
- **`"background"`** — background 의 color 관련 속성값이 Export 에서 제외됩니다.
- **`"color"`** — color 속성값이 Export 에서 제외됩니다.
- **`"font"`** — font 속성값이 Export 에서 제외됩니다.
- **`"border"`** — -nexa-border 속성값이 Export 에서 제외됩니다.

**Remark**

- exceptstyle 속성값을 설정하지 않으면 "none" 으로 적용됩니다.


---

### exporthead

> Misc. Objects > ExcelExportObject > Objects > ExportItem > Property > exporthead

**Description**

Grid 의 Head, Summary 영역에 대한 Export 방식을 설정하는 속성입니다.

**Setting Syntax**

```javascript
enumExportHead ::= 'allband' | 'nohead' | 'nosumm' | 'nohead,nosumm'
```
```javascript
var objExpItem = new ExportItem();
objExpItem.exporthead = "nosumm";
```
- **`"allband"`** — Grid 의 Head, Summary 영역을 모두 Export 합니다.
- **`"nohead"`** — Grid 의 Head 영역은 Export 하지 않고, Summary 영역만 Export 합니다.
- **`"nosumm"`** — Grid 의 Head 영역만 Export 하고, Summary 영역은 Export 하지 않습니다.
- **`"nohead,nosumm"`** — Grid 의 Head, Summary 영역을 모두 Export 하지 않습니다.

**Remark**

- exporthead 속성값을 설정하지 않으면 ExportItem 의 exportselect 속성값이 "allrecord" 인 경우 "allband" 로 적용됩니다.
   exporthead 속성값을 설정하지 않으면 ExportItem 의 exportselect 속성값이 "selectrecord" 인 경우 "nohead,nosumm" 으로 적용됩니다.

- Grid 의 selecttype 속성값이 "area", "multiarea" 인 경우 exporthead 속성값 설정여부와 관계없이 항상 "nohead,nosumm" 으로 적용됩니다.


---

### exportimage

> Misc. Objects > ExcelExportObject > Objects > ExportItem > Property > exportimage

**Description**

Grid 의 Cell 에 설정된 이미지의 Export 방식을 설정하는 속성입니다.

**Setting Syntax**

```javascript
enumExportImage ::= 'none' | 'url' | 'image'
```
```javascript
var objExpItem = new ExportItem();
objExpItem.exportimage = "url";
```
- **`"none"`** — 설정된 이미지 정보를 무시하고 공백으로 Export 합니다.
- **`"url"`** — 설정된 이미지의 위치정보를 URL 형식의 문자열로 Export 합니다.
- **`"image"`** — 설정된 이미지의 위치가 "http://", "https://" 로 시작하는 인터넷 URL 경로일 경우만 이미지를 그대로 Export 합니다.

**Remark**

- exportimage 속성값을 설정하지 않으면 "none" 으로 적용됩니다.


---

### exportmerge

> Misc. Objects > ExcelExportObject > Objects > ExportItem > Property > exportmerge

**Description**

Grid 에서 포맷과 관계없이 논리적으로 병합된 Cell 의 Export 방식을 설정하는 속성입니다.

**Setting Syntax**

```javascript
enumExportMerge ::= 'suppress' | 'nosuppress' | 'merge'
```
```javascript
var objExpItem = new ExportItem();

objExpItem.exportmerge = "merge";
```
- **`"suppress"`** — 논리적으로 병합된 결과를 무시하고 각 Cell 을 분할하여 Export 합니다.

논리적으로 병합된 결과에 맞게 1개 Cell 에만 값을 Export 합니다.
나머지 Cell 은 공백값을 Export 합니다.
- **`"nosuppress"`** — 논리적으로 병합된 결과를 무시하고 각 Cell 을 분할하여 Export 합니다.

논리적으로 병합된 결과에 따라 각 Cell 에 동일값을 Export 합니다.
- **`"merge"`** — 논리적으로 병합된 결과에 맞게 Cell 을 병합하여 Export 합니다.

논리적으로 병합된 결과에 맞게 1개 Cell 로 값을 Export 합니다.

**Remark**

- exportmerge 속성값을 설정하지 않으면 "suppress" 로 적용됩니다.
   exportselect 속성값을 "selectrecord" 로 설정한 경우는 항상 "nosuppress" 로 적용됩니다.

- 논리적인 병합이란 suppress 속성 또는 mergeCell() 메소드에 의해 Grid 에 표시된 데이터가 병합된 것을 의미합니다.

- suppresshorzcell 속성으로 병합된 Cell 은 항상 "suppress" 형태로 Export 됩니다.

- mergeContentsCell() 메소드 또는 Grid Contents Editor 의 Merge Cells 기능으로 포맷이 병합된 Cell 은 exportmerge 속성이 적용되지 않습니다.


---

### exportselect

> Misc. Objects > ExcelExportObject > Objects > ExportItem > Property > exportselect

**Description**

Grid 에서 Export 시킬 영역을 설정하는 속성입니다.

**Setting Syntax**

```javascript
enumExportSelect ::= 'allrecord' | 'selectrecord'
```
```javascript
var objExpItem = new ExportItem();
objExpItem.exportselect = "selectrecord";
```
- **`"allrecord"`** — Grid 의 모든 Row 를 Export 합니다.
- **`"selectrecord"`** — Grid 에서 선택된 Row 또는 Cell 만 Export 합니다.

Grid 의 selecttype 속성값이 "row" 또는 "multirow" 일 경우 선택된 Row 만 Export 됩니다.
Grid 의 selecttype 속성값이 "cell", "area", "multiarea" 일 경우 선택된 Cell 만 Export 됩니다.

**Remark**

- exportselect 속성값을 설정하지 않으면 "allrecord" 로 적용됩니다.

- exportselect 속성값을 "allrecord" 로 지정시, ExportItem 의 exporthead 속성값이 설정되지 않으면 "allband" 로 적용됩니다.
   exportselect 속성값을 "selectrecord" 로 지정시, ExportItem 의 exporthead 속성값이 설정되지 않으면 "nohead,nosumm" 으로 적용됩니다.

- Grid 의 selecttype 속성값이 "area", "multiarea" 인 경우 ExportItem 의 exporthead 속성값 설정여부와 관계없이 항상 "nohead,nosumm" 으로 적용됩니다.


---

### exportvalue

> Misc. Objects > ExcelExportObject > Objects > ExportItem > Property > exportvalue

**Description**

엑셀 파일로 Export 시킬 경우 Export 되는 내용과 형식을 설정하는 속성입니다.

**Setting Syntax**

```javascript
enumExportValue ::= 'allstyle' | 'selectstyle'
```
```javascript
var objExpItem = new ExportItem();
objExpItem.exportvalue = "selectstyle";
```
- **`"allstyle"`** — value, format, calendardateformat, font, color, background(color), -nexa-text-aign, -nexa-vertical-align, -nexa-border 속성의 설정이 모두 Export 됩니다.

선택된 영역이 있을 경우 선택에 의해 변경된 설정은 Export 되지 않습니다.
- **`"selectstyle"`** — value, format, calendardateformat, font, color, background(color), -nexa-text-aign, -nexa-vertical-align, -nexa-border 속성의 설정이 모두 Export 됩니다.

선택된 영역이 있을 경우 선택에 의해 변경된 설정도 Export 됩니다.

**Remark**

- exportvalue 속성값을 설정하지 않으면 "allstyle" 로 적용됩니다.

- background 속성에 Gradation 이 지정된 경우 Gradation의 중간값(50%위치값) 색상으로 Export 됩니다.

- GridCellControl 에 설정한 CSS 관련 속성값만 Export 시 적용됩니다.


---

### range

> Misc. Objects > ExcelExportObject > Objects > ExportItem > Property > range

**Description**

엑셀 또는 한셀 파일에 Export 되는 위치를 설정하는 속성입니다.

**Setting Syntax**

```javascript
var objExpItem = new ExportItem();
objExpItem.range = "Sheet1!A1";
```
- **`strRange`** — "시트명!셀영역" 또는 "셀영역" 형태로 오브젝트 내용이 Export 되는 위치를 지정합니다.


---

### source

> Misc. Objects > ExcelExportObject > Objects > ExportItem > Property > source

**Description**

Export 대상이 되는 오브젝트를 설정하는 속성입니다.

**Setting Syntax**

```javascript
var objExpItem = new ExportItem();
objExpItem.source = this.Grid00;
```
- **`objSource`** — Export 대상이 되는 컴포넌트를 오브젝트로 설정합니다.

현재 Grid 만 Export 할 수 있으며 "this.Grid00" 형태로 설정하여야 합니다.


---

### type

> Misc. Objects > ExcelExportObject > Objects > ExportItem > Property > type

**Description**

Export 대상이 되는 오브젝트의 종류를 상수값으로 설정하는 속성입니다.

**Setting Syntax**

```javascript
var objExpItem = new ExportItem();
objExpItem.type = nexacro.ExportItemTypes.GRID;
```
- **`nType`** — Export 대상이 되는 컴포넌트의 종류를 상수값으로 설정합니다.

현재 Grid 만 Export 할 수 있으며 "nexacro.ExportItemTypes.GRID" 로 설정하여야 합니다.


---

### valuetypebandid

> Misc. Objects > ExcelExportObject > Objects > ExportItem > Property > valuetypebandid

**Description**

valuetypecellindex 속성값을 적용할 Band를 설정하는 속성입니다.

**Setting Syntax**

```javascript
strBandId ::= "head" | "body" | "summ"
```
```javascript
var objExpItem = new ExportItem();
objExpItem.valuetypebandid = "head";
```
- **`"head"`** — valuetypecellindex 속성값을 head band에만 적용합니다.
- **`"body"`** — valuetypecellindex 속성값을 body band에만 적용합니다.
- **`"summ"`** — valuetypecellindex 속성값을 summary band에만 적용합니다.

**Remark**

- valuetypecellindex 속성으로 설정한 값을 적용할 Band를 설정하는 속성입니다.
  valuetypecellindex 속성과 같이 설정해야 합니다.

- valuetypebandid 속성값을 설정하지 않으면 모든 Band를 대상으로 적용됩니다.


---

### valuetypecellindex

> Misc. Objects > ExcelExportObject > Objects > ExportItem > Property > valuetypecellindex

**Description**

Export 시 바인드된 Column 값을 적용할 Cell 의 인덱스를 배열로 설정하는 속성입니다.

**Setting Syntax**

```javascript
var objExpItem = new ExportItem();
var arrCellIdx = [1, 5, 6];

objExpItem.valuetypecellindex = arrCellIdx;
```
- **`arrCellIndex`** — 바인드된 Column 값을 적용할 Cell 의 인덱스를 배열로 설정합니다.

인덱스가 설정된 Cell 은 표시된 텍스트값이 아닌 바인드된 Column 값을 Export 합니다.

인덱스가 설정되지 않은 Cell 은 사용 메소드에 따라 결과가 달라질 수 있습니다.
* exportData() : nOrgValue 파라미터값에 따라 Export 값이 결정됩니다.
* exportDataEx() : Cell 에 표시된 텍스트값이 Export 됩니다.

**Remark**

- valuetypecellindex 속성값 설정 시 Export 결과의 일관성을 위하여 exportDataEx() 메소드를 사용하는 것을 권장합니다.

- Cell 의 displaytype 속성값이 "decoratetext" 일 때 설정된 Tag 는 HTML 형식이므로 Export 시 Decorate 효과가 적용되지 않습니다.
   valuetypecellindex 속성값과 사용 메소드에 따라 Tag 가 텍스트로 Export 되거나 Tag 가 제거된 텍스트가 Export 됩니다.


---

## Misc. Objects > ExcelExportObject > ExportItemTypes

### ExportItemTypes

> Misc. Objects > ExcelExportObject > Objects > ExportItemTypes

**Description**

Export 대상 매체를 지정하는 상수를 가지는 오브젝트입니다.

**Remark**

GRID 컴포넌트만 사용할 수 있습니다.

**Property**

| Name | Description |
| --- | --- |
| GRID | Grid 를 외부 파일로 변환할 때 사용하는 상수 속성입니다. |


---

### 속성 (Properties)

### GRID

> Misc. Objects > ExcelExportObject > Objects > ExportItemTypes > Property > GRID

**Description**

Grid 를 외부 파일로 변환할 때 사용하는 상수 속성입니다.

**Setting Syntax**

```javascript
this.ExcelExport00.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!A1");
```


---

## Misc. Objects > ExcelExportObject > ExportTypes

### ExportTypes

> Misc. Objects > ExcelExportObject > Objects > ExportTypes

**Description**

Export 할 파일의 형식을 지정하기 위한 상수집합입니다.

**Property**

| Name | Description |
| --- | --- |
| CSV | 지정된 객체를 CSV 형식으로 Export 할 때 사용하는 상수 속성입니다. |
| EXCEL | 지정된 객체를 엑셀 형식으로 Export 할 때 사용하는 상수 속성입니다. |
| EXCEL2007 | 지정된 객체를 엑셀 2007 XML 형식으로 Export 할 때 사용하는 상수 속성입니다. |
| EXCEL97 | 지정된 객체를 엑셀 97-2003 형식으로 Export 할 때 사용하는 상수 속성입니다. |
| HANCELL2010 | 지정된 객체를 Hancell2010 형식으로 Export 할 때 사용하는 상수 속성입니다. |
| HANCELL2014 | 지정된 객체를 Hancell2014 형식으로 Export 할 때 사용하는 상수 속성입니다. |


---

### 속성 (Properties)

### CSV

> Misc. Objects > ExcelExportObject > Objects > ExportTypes > Property > CSV

**Description**

지정된 객체를 CSV 형식으로 Export 할 때 사용하는 상수 속성입니다.

**Remark**

- "CSV" 로 지정 시 Microsoft Excel CSV 파일 형식으로 처리합니다.


---

### EXCEL

> Misc. Objects > ExcelExportObject > Objects > ExportTypes > Property > EXCEL

**Description**

지정된 객체를 엑셀 형식으로 Export 할 때 사용하는 상수 속성입니다.

**Remark**

- 지원가능한 최하 버전인 엑셀97 형식으로 처리합니다.


---

### EXCEL2007

> Misc. Objects > ExcelExportObject > Objects > ExportTypes > Property > EXCEL2007

**Description**

지정된 객체를 엑셀 2007 XML 형식으로 Export 할 때 사용하는 상수 속성입니다.

**Remark**

- "EXCEL2007" 로 지정시 Microsoft OpenOffice Excel 2007 XML 파일포맷으로 동작합니다.
   Introducing the Office (2007) Open XML File Formats


---

### EXCEL97

> Misc. Objects > ExcelExportObject > Objects > ExportTypes > Property > EXCEL97

**Description**

지정된 객체를 엑셀 97-2003 형식으로 Export 할 때 사용하는 상수 속성입니다.

**Remark**

- "EXCEL97" 로 지정시 Microsoft Office Excel 97-2003 파일 형식으로 처리합니다.


---

### HANCELL2010

> Misc. Objects > ExcelExportObject > Objects > ExportTypes > Property > HANCELL2010

**Description**

지정된 객체를 Hancell2010 형식으로 Export 할 때 사용하는 상수 속성입니다.

**Remark**

- "HANCELL2010" 으로 지정 시 Hancell2010 파일 형식으로 처리합니다.


---

### HANCELL2014

> Misc. Objects > ExcelExportObject > Objects > ExportTypes > Property > HANCELL2014

**Description**

지정된 객체를 Hancell2014 형식으로 Export 할 때 사용하는 상수 속성입니다.

**Remark**

- "HANCELL2014" 로 지정 시 Hancell2014 파일 형식으로 처리합니다.


---

## Misc. Objects > ExcelImportObject > ImportTypes

### ImportTypes

> Misc. Objects > ExcelImportObject > Objects > ImportTypes

**Description**

DataSet 으로 Import 할 파일의 형식을 지정하기 위한 상수집합입니다.

**Property**

| Name | Description |
| --- | --- |
| CSV | Import 할 파일형식을 엑셀 CSV 로 설정하는 상수 속성입니다. |
| EXCEL | Import 할 파일형식을 엑셀97 로 설정하는 상수 속성입니다. |
| EXCEL2007 | Import 할 파일형식을 엑셀2007 XML 로 설정하는 상수 속성입니다. |
| EXCEL97 | Import 할 파일형식을 엑셀97-2003 으로 설정하는 상수 속성입니다. |
| HANCELL2014 | Import 할 파일형식을 Hancell2014 로 설정하는 상수 속성입니다. |


---

### 속성 (Properties)

### CSV

> Misc. Objects > ExcelImportObject > Objects > ImportTypes > Property > CSV

**Description**

Import 할 파일형식을 엑셀 CSV 로 설정하는 상수 속성입니다.

**Setting Syntax**

```javascript
nexacro.ImportTypes.CSV
```


---

### EXCEL

> Misc. Objects > ExcelImportObject > Objects > ImportTypes > Property > EXCEL

**Description**

Import 할 파일형식을 엑셀97 로 설정하는 상수 속성입니다.

**Setting Syntax**

```javascript
nexacro.ImportTypes.EXCEL
```


---

### EXCEL2007

> Misc. Objects > ExcelImportObject > Objects > ImportTypes > Property > EXCEL2007

**Description**

Import 할 파일형식을 엑셀2007 XML 로 설정하는 상수 속성입니다.

**Setting Syntax**

```javascript
nexacro.ImportTypes.EXCEL2007
```

**Remark**

- "EXCEL2007" 로 지정시 Microsoft OpenOffice Excel 2007 XML 파일포맷으로 동작합니다.
   Introducing the Office (2007) Open XML File Formats


---

### EXCEL97

> Misc. Objects > ExcelImportObject > Objects > ImportTypes > Property > EXCEL97

**Description**

Import 할 파일형식을 엑셀97-2003 으로 설정하는 상수 속성입니다.

**Setting Syntax**

```javascript
nexacro.ImportTypes.EXCEL97
```


---

### HANCELL2014

> Misc. Objects > ExcelImportObject > Objects > ImportTypes > Property > HANCELL2014

**Description**

Import 할 파일형식을 Hancell2014 로 설정하는 상수 속성입니다.

**Setting Syntax**

```javascript
nexacro.ImportTypes.HANCELL2014
```


---
