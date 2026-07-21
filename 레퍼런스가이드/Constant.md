# 337.Constant

# 337.1DataObject

DataObjectLoadDatasetsEventInfo(onloaddatasets), DataObjectLoadEventInfo(onload) > reason

| Constant | Value | Description |
| --- | --- | --- |
| DataObject.REASON\_LOAD | 0 | DataObject 오브젝트의 url 속성값으로 설정한 서비스에서 데이터 로드를 완료했을 때 발생하는 값입니다. |
| DataObject.REASON\_LOADCONTENT | 1 | DataObject 오브젝트의 data 속성값 설정 시 발생하는 값입니다.  넥사크로 스튜디오에서 직접 설정한 data 속성값은 Form 오브젝트의 onload 이벤트보다 먼저 처리됩니다. |
| DataObject.REASON\_REQUEST | 2 | DataObject 오브젝트의 request 메소드 호출 후 데이터 로드가 완료됐을때 발생하는 값입니다. onsuccess 이벤트 발생 후 onload 이벤트가 발생합니다. |

# 337.2Dataset

DSLoadEventInfo(onload) > reason

| Constant | Value | Description |
| --- | --- | --- |
| Dataset.REASON\_LOAD | 0 | Dataset의 Load가 완료되었을 때 |
| Dataset.REASON\_LOADPROCESS | 1 | Dataset을 Loading 중일 때 |
| Dataset.REASON\_RESET | 2 | Dataset의 변경사항을 무시하고 이전상태로 Reset되었을 때 |
| Dataset.REASON\_LOADCONTENT | 3 | ADL 또는 FDL에 정의된 Dataset의 Load가 완료되었을 때. Form의 onload() 이벤트보다 먼저 발생합니다. |
| Dataset.REASON\_APPEND | 12 | append() 메소드를 실행했을 때  loadCSV()/loadXML() 메소드의 "bClear" 파라미터값을 "false" 로 설정하고 실행했을 때 |
| Dataset.REASON\_BINDSOURCE | 90 | Dataset을 Bind 했을 때 |

DSRowsetChangeEventInfo(onrowsetchanged) > reason

| Constant | Value | Description |
| --- | --- | --- |
| Dataset.REASON\_ASSIGN | 10 | Dataset이 Assign 되었을 때 |
| Dataset.REASON\_COPY | 11 | Dataset이 복사되었을 때 |
| Dataset.REASON\_APPEND | 12 | Dataset이 추가되었 때 |
| Dataset.REASON\_MERGE | 13 | Dataset이 통합되었을 때 |
| Dataset.REASON\_DELETE | 20 | Dataset의 Row가 삭제되었을 때 |
| Dataset.REASON\_DELETEALL | 22 | Dataset의 모든 Row가 삭제되었을 때 |
| Dataset.REASON\_CLEARDATA | 23 | Dataset의 모든 Row가 완전 삭제되었을 |
| Dataset.REASON\_CLEAR | 24 | Dataset의 모든 Column 및 Row가 완전히 삭제되었을 때 |
| Dataset.REASON\_SORTGROUP | 30 | Dataset의 데이터가 정렬 또는 그룹화 되었을 때 |
| Dataset.REASON\_FILTER | 31 | Dataset의 데이터가 Filter 되었을 때 |
| Dataset.REASON\_MOVE | 32 | Dataset의 Row가 다른 위치로 이동되었을 때 |
| Dataset.REASON\_EXCHANGE | 33 | Dataset의 두 Row가 서로 위치가 바뀌었을 때 |
| Dataset.REASON\_CHANGELAYOUT | 34 | Dataset의 Column 정보가 변경되었을 때 |
| Dataset.REASON\_CHANGESTATUS | 40 | Dataset의 Row 상태(Type, Select)이 변경되었을 때 |
| Dataset.REASON\_ENABLEEVENT | 41 | Dataset의 enableevent 속성이 'true'가 되었을 때 |
| Dataset.REASON\_RESETSTATUS | 42 | TR이나 applyChange로 인한 RowType변경완료 후 |
| Dataset.REASON\_CHANGEDATAOBJECT | 43 | 바인딩된 DataObject 오브젝트의 데이터가 변경됐을 때 |

DSRowPosChangeEventInfo(onrowposchanged) > reason

| Constant | Value | Description |
| --- | --- | --- |
| Dataset.REASON\_ROWCHANGE | 51 | Row 데이터와 rowposition 속성값이 모두 변경된 경우 |
| Dataset.REASON\_ROWINDEXCHANGE | 52 | Row 데이터는 변경되지 않고, rowposition 속성값만 변경된 경우 |
| Dataset.REASON\_ROWOBJECTCHANGE | 53 | Row 데이터가 변경되었지만 rowposition 속성값은 변경이 없는 경우 |

Dataset > Rows > Row > type

| Constant | Value | Description |
| --- | --- | --- |
| Dataset.ROWTYPE\_EMPTY | 0 | 존재하지 않는 행의 상태 |
| Dataset.ROWTYPE\_NORMAL | 1 | 초기 행의 상태 |
| Dataset.ROWTYPE\_INSERT | 2 | 추가된 행의 상태 |
| Dataset.ROWTYPE\_UPDATE | 4 | 수정된 행의 상태 |
| Dataset.ROWTYPE\_DELETE | 8 | 삭제된 행의 상태 |
| Dataset.ROWTYPE\_GROUP | 16 | 그룹 정보 행의 상태 |

# 337.3Environment

DevicePermissionEventInfo(ondevicepermission) > status

| Constant | Value | Description |
| --- | --- | --- |
| nexacro.DevicePermissionStatus.DENIED | 0 | 권한이 설정되지 않은 상태 |
| nexacro.DevicePermissionStatus.GRANTED | 1 | 권한이 설정된 상태 |

# 337.4Excel Object

ExcelExportObject > exporttype

| Constant | Value | Description |
| --- | --- | --- |
| nexacro.ExportTypes.EXCEL | 0x0100 | 엑셀 97 형식으로 Export |
| nexacro.ExportTypes.EXCEL97 | 0x0110 | 엑셀 97~2003 형식으로 Export |
| nexacro.ExportTypes.EXCEL2007 | 0x0120 | 엑셀 2007 XML 형식으로 Export |
| nexacro.ExportTypes.HANCELL2010 | 0x0400 | 한셀 2010 형식으로 Export |
| nexacro.ExportTypes.HANCELL2014 | 0x0410 | 한셀 2014 형식으로 Export |
| nexacro.ExportTypes.CSV | 0x0500 | 엑셀 CSV 형식으로 Export |
| nexacro.ExportTypes.TXT | 0x0510 | TXT 형식으로 Export |

ExcelExportObject > exportItems

| Constant | Value | Description |
| --- | --- | --- |
| nexacro.ExportItemTypes.GRID | 256 | Export Item 타입을 Grid 컴포넌트로 설정 |

ExcelImportObject > importtype

| Constant | Value | Description |
| --- | --- | --- |
| nexacro.ImportTypes.EXCEL | 0x0100 | 엑셀 97 형식으로 Import |
| nexacro.ImportTypes.EXCEL97 | 0x0110 | 엑셀 97~2003 형식으로 Import |
| nexacro.ImportTypes.EXCEL2007 | 0x0120 | 엑셀 2007 XML 형식으로 Import |
| nexacro.ImportTypes.HANCELL2014 | 0x0410 | 한셀 2014 형식으로 Import |
| nexacro.ImportTypes.CSV | 0x0500 | 엑셀 CSV 형식으로 Import |
| nexacro.ImportTypes.TXT | 0x0510 | TXT 형식으로 Import |

# 337.5FileDialog

FileDialog > open

| Constant | Value | Description |
| --- | --- | --- |
| nexacro.FileDialog.LOAD | 1 | 한 개 파일을 읽을 수 있는 FileDialog 를 표시 |
| nexacro.FileDialog.SAVE | 2 | 한 개 파일을 쓸 수 있는 FileDialog 를 표시 |
| nexacro.FileDialog.MULTILOAD | 3 | 여러개의 파일을 읽을 수 있는 FileDialog 를 표시 |
| nexacro.FileDialog.SELFOLDER | 4 | 폴더를 선택할 수 있는 FileDialog 를 표시 |

# 337.6LiteDBConnection

LiteDBConnection > openflag, open

| Constant | Value | Description |
| --- | --- | --- |
| LiteDBConnection.openReadWrite | 0 | 데이터베이스 읽기, 쓰기가 가능하도록 연결 |
| LiteDBConnection.openReadWriteCreate | 1 | 데이터베이스 읽기, 쓰기, 파일생성이 가능하도록 연결 |

# 337.7System

System > checkDevicePermission, requestDevicePermission

| Constant | Value | Description |
| --- | --- | --- |
| nexacro.DevicePermissionType.CALENDAR | "calendar" | Android, iOS/iPadOS |
| nexacro.DevicePermissionType.CAMERA | "camera" |
| nexacro.DevicePermissionType.CONTACTS | "contacts" |
| nexacro.DevicePermissionType.LOCATION | "location" |
| nexacro.DevicePermissionType.MICROPHONE | "microphone" |
| nexacro.DevicePermissionType.PHONE | "phone" | Android |
| nexacro.DevicePermissionType.SMS | "sms" |
| nexacro.DevicePermissionType.STORAGE | "storage" |
| nexacro.DevicePermissionType.PHOTO | "photo" | iOS/iPadOS |
| nexacro.DevicePermissionType.REMINDERS | "reminders" |

# 337.8VirtualFile

VirtualFile > open

| Constant | Value | Description |
| --- | --- | --- |
| VirtualFile.openRead | 0x0001 | 읽기 전용으로 존재하는 파일을 열때 사용합니다. 파일이 없으면 파일을 열지 못합니다. |
| VirtualFile.openWrite | 0x0002 | 쓰기 전용으로 파일을 생성합니다. 파일이 존재유무에 관계없이 파일을 생성합니다. |
| VirtualFile.openAppend | 0x0010 | 추가 전용으로 존재하는 파일을 열때 사용합니다. 파일이 없을경우 파일을 생성합니다. 파일이 열릴경우 파일포인터를 마지막 위치로 옮깁니다. |
| VirtualFile.openText | 0x0100 | 텍스트 파일을 열 때 사용합니다. |
| VirtualFile.openBinary | 0x0200 | 바이너리 파일을 열 때 사용합니다. |
| VirtualFile.openCreate | 0x1000 | 파일을 열때 파일이 없을 경우 파일을 생성하여 열때 사용합니다. 파일이 존재하면 존재하는 파일이 열립니다. |

VirtualFile > seek

| Constant | Value | Description |
| --- | --- | --- |
| VirtualFile.seekBegin | 0 | 파일의 시작 위치 |
| VirtualFile.seekCurrent | 1 | 파일의 현재 위치 |
| VirtualFile.seekEnd | 2 | 파일의 끝 위치 |

VirtualFile > getFileList

| Constant | Value | Description |
| --- | --- | --- |
| VirtualFile.findAll | 0x01 | 기준 폴더에 속한 파일과 폴더를 대상으로 검색합니다. |
| VirtualFile.findFileOnly | 0x02 | 기준 폴더에 속한 파일을 대상으로 검색합니다. |
| VirtualFile.findDirectoryOnly | 0x03 | 기준 폴더에 속한 폴더를 대상으로 검색합니다. |
| VirtualFile.findRecursive | 0x08 | 하위 폴더에 대한 재귀검색을 허용합니다.  다른 옵션값과 조합하여 사용할 수 있습니다. |
| VirtualFile.findCaseless | 0x10 | 검색 시 대소문자를 구분하지 않습니다.  다른 옵션값과 조합하여 사용할 수 있습니다. |

# 337.9XPush

XPushEventInfo(onsuccess) > action

| Constant | Value | Description |
| --- | --- | --- |
| nexacro.XPushAction.AUTH | 0 | connect() 메소드로 Push 서버 연결에 성공했을 때 |
| nexacro.XPushAction.BYEC | 1 | disconnect() 메소드로 Push 서버의 연결해제에 성공했을 때 |
| nexacro.XPushAction.ADDF | 2 | subscribe() 메소드로 Topic 추가에 성공했을 때 |
| nexacro.XPushAction.DELF | 3 | unsubscribe() 메소드로 Topic 제거에 성공했을 때 |
| nexacro.XPushAction.REQD | 4 | requestMessage() 메소드로 미수신 신뢰성 메시지 요청에 성공했을 때 |
| nexacro.XPushAction.RECT | 5 | sendResponse() 메소드로 미수신 신뢰성 메시지 수신응답에 성공했을 때 |
| nexacro.XPushAction.RGST | 6 | registerDevice() 메소드로 Push 서버에 Device Token 등록에 성공했을 때 |
| nexacro.XPushAction.UNRG | 7 | unregisterDevice() 메소드로 Push 서버에 등록된 Device Token 해제에 성공했을 때 |
| nexacro.XPushAction.ADUI | 8 | registerTopic() 메소드로 신뢰성 메시지 Topic 등록에 성공했을 때 |
| nexacro.XPushAction.UNUI | 9 | unregisterTopic() 메소드로 등록된 신뢰성 메시지 Topic 해제에 성공했을 때 |
| nexacro.XPushAction.MSGC | 10 | requestMessageCount() 메소드로 미수신된 신뢰성 메시지 갯수요청에 성공했을 때 |
