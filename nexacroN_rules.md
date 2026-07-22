# nexacroN / nexacroK 코딩 규칙

> **필독**: nexacroN 또는 nexacroK 관련 작업 시 **반드시** 아래 메뉴얼을 먼저 참조한다.
>
> 메뉴얼 위치 (이 프로젝트): `DOC/NexacroN/` (Markdown 변환본)
>
> | 파일명 | 용도 |
> |--------|------|
> | `developer_guide_nexacro_n_v24_ko.md` | 컴포넌트, Dataset API, transaction, 이벤트 처리 |
> | `advanced_development_guide_nexacro_n_v24_ko.md` | Grid 고급, 팝업, 탭, 모듈, 에러 처리 |
> | `deployment_guide_nexacro_n_v24_ko.md` | 빌드/배포, 서버 파일 구조 |
> | `development_tools_guide_nexacro_n_v24_ko.md` | Nexacro Studio, 디버거 사용법 |
> | `getting_started_nexacro_n_v24_ko.md` | 프로젝트 구조, 파일 타입(.xprj/.xadl/.xfdl) |
> | `server_setup_guide_nexacro_n_v24_ko.md` | Tomcat 설정, PlatformData, 인코딩 |
> | `module_developer_guide_nexacro_n_v24_ko.md` | 모듈(.xmodule) 개발, TypeDefinition |
> | `product_information_nexacro_n_v24_ko.md` | 지원 플랫폼/브라우저, v24 신규 기능 |
> | `launcher_service.md` | 런처 서비스(TPLSvc) 연동 |
> | `eGovFrame Integration Guide_n.md` | eGovFrame 연동 가이드 |

---

## 기본 규칙

- 이벤트 핸들러명: `컴포넌트명_이벤트명` (예: `btnSave_onclick`)
- 공통 함수는 `gfn_` prefix 사용
- Dataset 컬럼명은 대문자 스네이크케이스 (예: `USER_ID`)
- 화면 스크립트는 기능 단위로 구역 주석 구분
- nexacro 화면은 `.xfdl` 확장자 파일 — XML(컴포넌트/레이아웃) + nexacro 스크립트(로직) 혼합
- 스크립트는 `<Script><![CDATA[ ... ]]></Script>` 태그 내부에 function으로 작성 javascript문법을 사용하고 있다
- `nexacrodeploy.exe` 를 통해 nexacroK, nexacroN 모두 빌드 → 최종 `.js` 파일 생성
- 넥사크로 엔진은 js로 되어 있고 D:\git_prj\cursor_project\nexacrolib\nexacrolib 폴더이다  
---

## 프로젝트 파일 구조

| 확장자 | 역할 |
|--------|------|
| `.xprj` | 프로젝트 파일 (전체 프로젝트 설정) |
| `.xadl` | Application Definition — 앱 진입점, 전역 변수, 글로벌 Dataset 설정 |
| `.xfdl` | Form Definition — 화면 단위 UI + 스크립트 |
| `.xjs` | 외부 스크립트 파일 (공통 함수 모듈) |
| `.xtheme` | 테마/스타일 정의 |

**빌드 실행 흐름**: `launch.html` → `nexacro.js` 로드 → `application.xadl` 초기화 → startup Form 표시

---

## 주요 컴포넌트 목록

| 분류 | 컴포넌트 |
|------|---------|
| 입력 | `Edit`, `TextArea`, `Combo`, `CheckBox`, `Radio`, `Calendar`, `DateField` |
| 버튼 | `Button`, `ImageButton`, `CheckButton` |
| 표시 | `Static`, `Image`, `Grid`, `ListBox`, `ProgressBar` |
| 컨테이너 | `Div`, `Panel`, `PopupDiv`, `Tab` |
| 기타 | `FileUpload`, `FileDownload`, `WebBrowser`, `Menu`, `PopupMenu` |

**컴포넌트 ID 네이밍 prefix 권장**: `btn_`, `edt_`, `grd_`, `ds_`, `cmb_`, `chk_`, `div_`, `tab_`, `lst_`

---

## Dataset을 Grid에 연결 방법

2가지 방법이 있음:
- 생성된 Grid의 `binddataset`에 텍스트로 바로 설정한다
- script를 통해서 동적으로 등록한다: `this.grd_main.binddataset = "동적생성된 dataset id"`

## nexacro Grid 엑셀 내보내기 기능

- 기본적으로 제공되는 grid의 `saveXLS` 로직을 가져와서 사용하면 됨
- **ExcelExportObject**(권장) 또는 `saveXLS`로 엑셀 내보내기 구현

```javascript
// ExcelExportObject 방식 (서버에 nexacro-xeni 설치 필요)
this.Button00_onclick = function(obj, e) {
    this.exportObj = new ExcelExportObject("Export00", this);
    this.exportObj.exportfilename = "ExcelExportFile";
    this.exportObj.exporturl      = "http://localhost:8080/XExportImport";
    this.exportObj.exporttype     = nexacro.ExportTypes.EXCEL2007;
    this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!A1");
    this.addEventHandler("onsuccess", this.Export00_onsuccess, this);
    this.addEventHandler("onerror",   this.Export00_onerror,   this);
    this.exportObj.exportData();
};

// ExcelImportObject 방식
this.importObj = new ExcelImportObject("Import00", this);
this.importObj.importtype = nexacro.ImportTypes.EXCEL2007;
this.importObj.importurl  = "http://localhost:8080/XExportImport";
this.importObj.addEventHandler("onsuccess", this.Import00_onsuccess, this);
this.importObj.importData("", "Sheet1!A1:F100", "Dataset00=output1");
```

---

## Dataset API

```javascript
// 행 추가
var nRow = this.dsMain.addRow();

// 값 설정/조회
this.dsMain.setColumn(nRow, "USER_ID", "hong");
var val = this.dsMain.getColumn(nRow, "USER_ID");

// 행 삭제
this.dsMain.deleteRow(nRow);

// 행 검색
var foundRow = this.dsMain.findRow("USER_ID", "hong");

// 전체 행 수
var cnt = this.dsMain.rowcount;

// 대량 데이터 처리 시 화면 갱신 비활성화 (성능)
this.dsMain.updatecontrol = false;
// ... 반복 처리 ...
this.dsMain.updatecontrol = true;

// Dataset 필터 적용
this.dsMain.setFilter("STATUS == 'Y'");
this.dsMain.setFilter("");  // 필터 해제

// 행 타입 (ROWTYPE_NORMAL, ROWTYPE_INSERT, ROWTYPE_UPDATE, ROWTYPE_DELETE)
this.dsMain.setRowType(nRow, Dataset.ROWTYPE_NORMAL);
```

---

## Dataset 심화 API (V24)

```javascript
// 행 검색 — 범위 지정 가능
var nRow = this.ds.findRow("COL", "100", 10, 10000);  // 10~10000행 범위
var nRow = this.ds.findRowExpr("dept_cd == 'A2' && pos_cd > '03'", 2, 10);

// filter — 빈문자열=해제, 인수없음=직전조건 재적용
this.ds.filter("amount > 1000 && model_cd = 'A-1'");
this.ds.filter("");   // 해제
this.ds.filter();     // 직전 조건 재적용

// keystring — S(정렬)/G(그룹)/O(locale옵션)
this.ds.keystring = "G:+column0,S:-column1";
this.ds.keystring = "S:Column0,O:Column0[en-US]{\"caseFirst\":\"upper\",\"numeric\":true}";

// 조건부 집계
this.ds.getCaseSum("Column0 > 10", "Column0");
this.ds.getCaseCount(strExpr, "Column0");

// 그룹 범위 집계 (소계 행 클릭 시)
var s = this.ds.getGroupRangeStart(e.row);
var cnt = this.ds.getGroupRangeCount(e.row);
this.ds.getAvg("Column1", s, s + cnt);
// getRowLevel(row) == 0 이면 그룹(소계) 행

// 변경 전 값 / 삭제된 행 조회
var orgVal = this.ds.getOrgColumn(i, "COL");       // 변경 전 원본 값
var delCnt = this.ds.getDeletedRowCount();
var delVal = this.ds.getDeletedColumn(i, "COL");

// Dataset 통째 복사
this.ds_copy.copyData(this.ds_input);

// 스크립트 동적 Dataset 생성 + Grid 바인딩
var ds = new Dataset; ds.name = "ds_data";
this.addChild("ds_data", ds);
this.ds_data.addColumn("COL0", "String");
this.Grid00.binddataset = "ds_data";
this.Grid00.createFormat();   // 동적 바인딩 후 필수

// RowType 강제변경 시 updatecontrol=false 필수
this.ds.updatecontrol = false;
this.ds.setRowType(i, Dataset.ROWTYPE_NORMAL);
this.ds.updatecontrol = true;
```

### Dataset JSON 포맷 `_rowtype_` (서버 통신 디버깅)

| 값 | 의미 |
|----|------|
| `n` | normal (변경 없음) |
| `i` | inserted (추가) |
| `u` | updated (수정) |
| `d` | deleted (삭제) |
| `o` | original — 바로 앞 `u` 행이 있을 때만 존재 (수정 원본값) |

---

## 서비스 통신 (transaction)

```javascript
// 기본 패턴
this.transaction(
    "svcId",             // 서비스 식별자
    "/api/endpoint",     // URL
    "dsSearch:dsSearch", // 입력 Dataset (로컬명:서버명)
    "dsResult:dsResult", // 출력 Dataset
    "",                  // 추가 파라미터
    "fn_callback"        // 콜백 함수명 (문자열)
);

// 콜백 패턴 — errCode 반드시 확인
this.fn_callback = function(svcId, errCode, errMsg) {
    if (errCode < 0) {   // 시스템 오류
        alert("시스템 오류: " + errMsg);
        return;
    }
    if (errCode > 0) {   // 업무 오류
        alert("업무 오류: " + errMsg);
        return;
    }
    // 성공 처리
};
```

### transaction bAsync (동기/비동기) 처리 순서

```javascript
// bAsync=true(기본, 비동기): Before → After → Callback 순서로 실행
// bAsync=false(동기):       Before → Callback → After 순서로 실행
this.transaction("TEST", url, null, "Dataset00=TEST", null, "fn_callback", true);  // 비동기
this.transaction("TEST", url, null, "Dataset00=TEST", null, "fn_callback", false); // 동기
```

### transaction() Promise/async-await 패턴

```javascript
// 전체 시그니처: transaction(svcId, url, inDs, outDs, args, callbackFn, bAsync)
// bAsync 기본 true. 콜백명을 null로 주면 Promise 반환 (v24.0.0.900 이상)

// Promise 패턴
var req = this.transaction(svcId, url, null, "dsResult:dsResult", null, null, true);
req.then(function(result) {
    var ErrorCode = result[0], ErrorMsg = result[1];
}).catch(function(err) { trace(err[1]); });

// async/await 패턴
this.fn_load = async function() {
    try {
        var result = await this.transaction(svcId, url, null, "dsResult:dsResult", null);
        var ErrorCode = result[0], ErrorMsg = result[1];
    } catch(err) { trace(err[1]); }
};

// URL에 로컬 리소스 Namespace 사용 가능
this.transaction(svcId, "FileSample::sample.xml", null, "dsResult:dsResult", null, "fn_callback");
```

---

## 타이머 (Timer)

```javascript
// 타이머 생성 — key(정수), interval(밀리초)
this.setTimer(1, 1000);  // 1초마다 타이머 1 발생

// 타이머 이벤트 처리 — e.timerid로 어느 타이머인지 구분
this.Form_ontimer = function(obj, e) {
    if (e.timerid == 1) {
        this.staticTime.text = new Date().toLocaleTimeString();
    } else if (e.timerid == 2) {
        // 다른 타이머 처리
    }
};

// 타이머 중지 (삭제)
this.killTimer(1);
```

- nexacro에서는 고유 key 값으로 여러 타이머를 동시에 관리 가능 (JS `setInterval`은 1개)
- Button의 **User Properties**(`timekey`)에 키값 저장 → 공통 이벤트 함수에서 `obj.timekey`로 접근
- `Form_onload`에서 `setTimer` 호출 → 화면 진입 시 자동 시작

---

## DataObject — REST/JSON 통신

nexacro v24에서 제공하는 REST API 직접 통신 방식 (`transaction` 대안).

```javascript
// POST 요청
var header = { "Content-Type": "application/json; charset=UTF-8" };
this.DataObject00.request("CREATE", "POST", url, {
    "httpheader": header,
    "postdata": JSON.stringify(body)
});

// 이벤트: onsuccess → onload, 오류 시 onerror
this.DataObject00_onsuccess = function(obj, e) {
    if (e.statuscode > 200) {
        e.preventDefault();
        this.TextArea00.value = obj.getResponse();
    }
};

// Dataset 바인딩: binddataobject + dataobjectpath(JSONPath "$.data.items")
// twoway 바인딩 지원 — Dataset 변경 시 DataObject에 자동 반영
```

---

## FileUpTransfer — 파일 업로드 (드래그앤드롭 포함)

```javascript
// 드래그앤드롭 이벤트: 파일 타입인지 확인 후 처리
this.Grid00_ondragenter = function(obj, e) {
    if (e.datatype == "file") { this.Grid00.opacity = 0.5; }
};
this.Grid00_ondragleave = function(obj, e) {
    this.Grid00.opacity = 1;
};
this.Grid00_ondrop = function(obj, e) {
    this.Grid00.opacity = 1;
    if (e.datatype == "file") {
        for (var i = 0; i < e.filelist.length; i++) {
            var vf = e.filelist[i];
            vf.addEventHandler("onsuccess", this.FileList_onsuccess, this);
            vf.getFileInfo();  // 파일 크기/이름 조회 트리거 (reason=9에서 완료)
        }
    }
};

// VirtualFile onsuccess — reason==9: 파일 정보 조회 완료
this.FileList_onsuccess = function(obj, e) {
    if (e.reason == 9) {
        var nRow = this.Dataset00.addRow();
        this.Dataset00.setColumn(nRow, "FILE_NM", obj.filename);
        this.Dataset00.setColumn(nRow, "FILE_SIZE", obj.filesize);
        this.FileUpTransfer00.addFile(obj.filename, obj);
    }
};

// 파일 업로드 실행
this.btnUpload_onclick = function(obj, e) {
    this.FileUpTransfer00.upload("http://server:8080/fileupload.jsp");
};

// 업로드 완료 콜백
this.FileUpTransfer00_onsuccess = function(obj, e) {
    alert("업로드 완료");
};
this.FileUpTransfer00_onerror = function(obj, e) {
    alert("업로드 실패: " + e.errormsg);
};
```

- FileUpTransfer 컴포넌트의 `addFile(filename, VirtualFile)` 로 파일을 큐에 추가
- `upload(url)` 호출 시 큐의 파일 전체 전송
- 드래그앤드롭 없이 버튼 클릭 방식도 동일 패턴 (FileDialog → VirtualFile 획득)

---

## Form.components[] 순회 + instanceof

```javascript
// Form 내 모든 컴포넌트를 순회하여 타입별 처리
for (var i = 0; i < this.components.length; i++) {
    var comp = this.components[i];
    if (comp instanceof nexacro.Edit) {
        comp.background = "lavenderblush";
    } else if (comp instanceof nexacro.Button) {
        if (comp.id != obj.id) {
            comp.background = "lightgreen";
        }
    }
}
```

- `this.components` — Form 직속 컴포넌트 배열 (Div 내부 컴포넌트는 미포함)
- `this.all` — Form 내 모든 컴포넌트 (Div 내부 포함) 플랫 배열
- Div 내부까지 재귀 순회: `comp.valueOf() == "[object Div]"` 확인 후 `comp.form.components` 재귀 호출
- Tab 내부 접근: `tab.tabpages[j].form.components`
- 주요 타입 문자열: `"[object Div]"`, `"[object Tab]"`, `"[object Edit]"`, `"[object Button]"`, `"[object Grid]"`
- `instanceof` 대신 `valueOf()` 문자열 비교도 사용 가능

---

## 반응형 레이아웃 (onlayoutchanged)

넥사크로 스튜디오에서 Form에 여러 Layout을 추가하면, 화면 크기 변경 시 레이아웃이 자동 전환되고 이벤트가 발생한다.

```javascript
// 레이아웃 변경 이벤트 — e.oldlayout / e.newlayout 으로 이전/현재 레이아웃 확인
this.Form_onlayoutchanged = function(obj, e) {
    this.staticInfo.text = e.oldlayout + " -> " + e.newlayout +
        " (" + this.width + "x" + this.height + ")";
    // 레이아웃에 따라 Grid 포맷 변경
    if (e.newlayout == "small") {
        this.grdMain.formats = this.strSmallFormat;
    } else {
        this.grdMain.formats = this.strDefaultFormat;
    }
};
```

- 레이아웃 추가: 스튜디오 디자인 화면 우클릭 → [Add Layout] → width/height 기준으로 자동 전환
- `Form.stepcount` 속성으로 화면을 단계적으로 분할 가능 (stepcount=3 → 폼 너비 3배, 스텝마다 파란 점선 표시)

---

## 컴포넌트 User Properties (사용자 속성)

Studio 속성창에서 컴포넌트에 임의 속성을 추가할 수 있다. 런타임에서 `obj.속성명`으로 접근한다.

```
속성창 오른쪽 클릭 → [Add User Property] → Name: "timekey", Value: "1"
```

```javascript
// 추가된 사용자 속성은 obj.속성명으로 접근
this.btnStart_onclick = function(obj, e) {
    this.setTimer(obj.timekey, 1000);  // obj.timekey = 버튼에 설정된 사용자 속성값
};
this.btnEnd_onclick = function(obj, e) {
    this.killTimer(obj.timekey);
};
```

- 여러 버튼에 공통 이벤트 함수를 사용하면서 버튼마다 다른 값을 처리할 때 활용
- Calendar, Radio 등에 연동 대상 컴포넌트 id를 사용자 속성으로 저장하는 패턴에도 사용

---

## 이벤트 처리 패턴

```javascript
// 버튼 클릭
this.btnSearch_onclick = function(obj, e) { };

// Combo 항목 변경
this.cmbStatus_onitemchanged = function(obj, e) {
    var val = obj.value;
};

// Grid 셀 클릭
this.grdMain_oncellclick = function(obj, e) {
    var rowIdx = e.row;
    var colIdx = e.cell;
};

// Grid 헤더 클릭 (정렬/전체선택)
this.grdMain_onheadclick = function(obj, e) { };

// 키보드 단축키 (Form 레벨)
this.Form_onkeydown = function(obj, e) {
    if (e.ctrlKey && e.keycode == 83) { fn_save(); return false; }  // Ctrl+S
    if (e.keycode == 13) { fn_search(); return false; }              // Enter
    if (e.keycode == 27) { this.close(); return false; }             // Esc
};
```

---

## Form 생명주기 이벤트

```javascript
// 화면 최초 로드 (1회 실행) — 초기화 로직
this.Form_onload = function(obj, e) {
    fn_initForm();
    fn_loadInitData();
};

// 화면 활성화 시마다 실행 — 데이터 갱신
this.Form_onactivate = function(obj, e) { };

// 화면 비활성화 시
this.Form_ondeactivate = function(obj, e) { };

// 화면 종료 전 — return false 시 종료 취소
this.Form_onclose = function(obj, e) {
    if (!fn_validateBeforeClose()) return false;
};
```

### 생명주기 이벤트 정확한 순서

```
environment.onload
→ application.onloadingappvariables
→ mainframe.onactivate
→ childframe.onactivate
→ application.onload
→ form.oninit
→ form.onload
→ form.onactivate
→ application.onloadforms
```

---

## 팝업(Popup) 패턴

```javascript
// 팝업 열기
this.openPopup("popUser", "xfdl/UserPopup.xfdl",
    { p_userId: this.edtUserId.value, p_mode: "edit" },
    "fn_popupCallback");

// 팝업 내부 — argument로 전달된 데이터 수신
this.Form_onload = function(obj, e) {
    var userId = this.argument.p_userId;
    var mode   = this.argument.p_mode;
};

// 팝업 닫기 + 데이터 반환
this.btnConfirm_onclick = function(obj, e) {
    this.close({ resultCode: "OK", userId: this.edtUserId.value });
};

// 팝업 콜백 처리
this.fn_popupCallback = function(popupObj, returnValue) {
    if (returnValue && returnValue.resultCode == "OK") {
        this.edtUserId.set_value(returnValue.userId);
    }
};
```

### ChildFrame / 팝업 고급 패턴

```javascript
// 모달 ChildFrame 동적 생성
var cf = new ChildFrame();
cf.init("childframe00", 0, 0, 300, 300, null, null);
cf.openalign = "center middle";
cf.resizable = true;
cf.overlaycolor = "rgba(0,0,0,0.3)";
cf.showModal(this.getOwnerFrame());

// nexacro.open — 새 브라우저/NRE 창에 속성 전달
nexacro.open("POPUP", "Sample::frame.xfdl",
    nexacro.getApplication().getActiveFrame(),
    { p_userId: "hong", p_mode: "view" }
);
// 수신측: var userId = this.parent.p_userId;

// 엔터키 네비게이션 (다음 컴포넌트로 포커스 이동)
this.Form_onkeydown = function(obj, e) {
    if (e.keycode == 13) {
        obj.getNextComponent(this.getFocus(), true).setFocus();
    }
};
// 특정 버튼에서 엔터 전파 차단
this.btnSubmit_onkeydown = function(obj, e) { return true; };
```

---

## Div 동적 폼 로드

```javascript
// Div에 xfdl 로드
this.divContent.set_url("Form::SubForm.xfdl");

// Div 내부 컴포넌트 접근
var innerValue = this.divContent.form.dsMain.getColumn(0, "USER_ID");
var innerGrid  = this.divContent.form.grdMain;
```

### Div 레이아웃 (type 속성)

```xml
<!-- 가로 순차 배치 -->
<Div type="horizontal" horizontalgap="10" ...>
  <Button .../> <Button .../> <Button .../>
</Div>

<!-- 세로 순차 배치 -->
<Div type="vertical" verticalgap="8" ...>
  <Edit .../> <Edit .../>
</Div>
```

| 속성 | 설명 |
|------|------|
| `type="horizontal"` | 왼쪽부터 순서대로 가로 배치 |
| `type="vertical"` | 위에서부터 순서대로 세로 배치 |
| `horizontalgap` | 컴포넌트 간 가로 간격(px) |
| `verticalgap` | 컴포넌트 간 세로 간격(px) |

---

## Tab 컴포넌트 패턴

```javascript
// 탭페이지 수 조회
var cnt = this.Tab00.getTabpageCount();

// 탭페이지 동적 추가 (index=-1이면 마지막에 추가)
this.btnAddTab_onclick = function(obj, e) {
    var i = this.Tab00.getTabpageCount() + 1;
    this.Tab00.insertTabpage("TabPage" + i, -1);
};

// 탭페이지 비활성화/활성화
this.Tab00.tabpages[1].enable = false;  // 2번째 탭 비활성화
this.Tab00.tabpages[1].enable = true;

// 탭버튼 위치 변경 — "top"|"left"|"right"|"bottom"
this.Tab00.tabposition = "left";

// 멀티라인 탭 (탭버튼이 Tab 너비를 초과할 때 여러 줄로 표시)
this.Tab00.multiline = true;

// 탭 전환 이벤트
this.Tab00_onchanged = function(obj, e) {
    var newIdx = e.postindex;  // 새로 선택된 탭 인덱스
};

// 탭페이지 내부 컴포넌트 접근
var innerEdit = this.Tab00.tabpages[0].form.edtName;
```

- Tab 기본 생성 시 탭페이지 2개 자동 생성
- 탭페이지 url 속성으로 외부 xfdl 로드 가능: `this.Tab00.tabpages[0].set_url("Form::Sub.xfdl")`

---

## Animation 오브젝트

스크립트로만 생성 가능 (툴바에 미표시).

```javascript
this.Form_onload = function(obj, e) {
    // Animation 오브젝트 생성 및 등록
    var aniObj = new nexacro.Animation("Ani00", this);
    this.addChild("Ani00", aniObj);

    // 속성 설정
    this.Ani00.loop      = true;          // 반복
    this.Ani00.direction = "alternate";   // 정방향 → 역방향 교대

    // 애니메이션 대상 및 변경 속성 지정
    this.Ani00.addTarget("AniItem00", this.Button00, "width:200, left:300");

    // 시작/정지
    this.Ani00.start();
    // this.Ani00.stop();
};
```

- `addTarget(itemId, component, "속성:목표값, ...")` 형식으로 애니메이션 대상 추가
- `loop`, `direction("normal"|"reverse"|"alternate")`, `duration(ms)` 속성으로 동작 제어

---

## 공통 함수(gfn_) 필수 패턴

```javascript
// Null/빈값 처리
function gfn_nvl(val, defaultVal) {
    return (val == null || val == undefined || val == "") ? defaultVal : val;
}

// 날짜 조회 — "YYYYMMDD" 형식
function gfn_getToday() { /* 오늘 날짜 반환 */ }

// 문자열 좌우 패딩
function gfn_lpad(str, len, padChar) { /* "1" → "0001" */ }
function gfn_rpad(str, len, padChar) { /* "1" → "1000" */ }

// 숫자 포맷
function gfn_numFormat(num) { return Number(num).toLocaleString(); }

// 유효성 검증 (이메일, 전화번호 등)
function gfn_isEmail(email) { /* regex 검증 */ }
function gfn_isPhone(phone) { /* regex 검증 */ }
```

---

## MaskEdit 패턴

정해진 형식으로 입/출력할 때 사용하는 Edit 계열 컴포넌트.

```javascript
// type: "number"(숫자) | "string"(문자열) — 미설정 시 기본 "number"
// format: 마스크 기호 조합

// 전화번호 (string 형식)
this.mskPhone.type   = "string";
this.mskPhone.format = "###-####-####";

// 주민등록번호 — {} 안의 문자는 *로 마스킹 출력
this.mskRrn.type   = "string";
this.mskRrn.format = "######-#{######}";  // 뒤 6자리 비표시

// 숫자 + 소수점 + 천단위 쉼표
this.mskAmt.type   = "number";
this.mskAmt.format = "#,#.###";          // 정수부 천단위 쉼표, 소수 3자리

// 알파벳+숫자 혼합 (aaaa=문자4, #####=숫자5)
this.mskCode.type   = "string";
this.mskCode.format = "aaaa-#####";

// 값 읽기 (실제 저장값)
var rawVal = this.mskPhone.value;

// Grid 트리 셀에 마스크 적용 시: MaskEdit 컴포넌트를 화면에 invisible로 배치 후
// getDisplayText()로 포맷된 문자열 획득
this.MaskEdit00.value = this.dsMain.getColumn(e.row, "CODE");
var displayStr = this.MaskEdit00.getDisplayText();
```

**MaskEdit format 기호 요약 (string 타입)**:

| 기호 | 의미 |
|------|------|
| `#` | 숫자 0~9 |
| `a` | 영문자 a~z, A~Z |
| `@` | 영문자 또는 숫자 |
| `*` | 모든 문자 |
| `-`, `/` | 구분자 (고정 표시) |
| `{...}` | 내부 문자를 `*`로 마스킹 |

---

## Grid 주요 패턴

```javascript
// 그리드 선택 행 배열 가져오기
var aRows = this.grdMain.getSelectRowArray();

// 셀 스타일 동적 변경
this.grdMain_ongetcellstyle = function(obj, e) {
    if (this.dsMain.getColumn(e.row, "STATUS") == "ERROR") {
        e.style.background = "#ffcccc";
    }
};

// 컬럼 표시/숨김
this.grdMain.setColHidden(colIndex, true);

// 전체 선택 체크박스 (헤더 클릭 시)
this.grdMain_onheadclick = function(obj, e) {
    if (e.cell == 0) obj.setAll("select", !obj.getCheckOldValue(0));
};
```

### Grid displaytype / edittype

Grid Contents Editor에서 각 셀의 `displaytype`(표시형식)과 `edittype`(편집형식)을 설정한다.

**displaytype** — Body 셀 표시 형식:

| 값 | 설명 |
|----|------|
| `normal` | 기본 텍스트 |
| `none` | 표시 안 함 |
| `text` | 텍스트 (폰트 적용) |
| `currency` | 통화 형식 (`#,##0`) |
| `number` | 숫자 형식 |
| `date` | 날짜 형식 |
| `image` | 이미지 표시 |
| `bar` | 막대 그래프 |
| `buttoncontrol` | 버튼 컴포넌트 |
| `checkboxcontrol` | 체크박스 컴포넌트 |
| `combocontrol` | 콤보박스 컴포넌트 (combodataset/combocodecol/combodatacol 필수) |
| `imagecontrol` | 이미지 컴포넌트 |
| `progressbarcontrol` | 프로그레스바 컴포넌트 |
| `treeitemcontrol` | 트리 형식 (treelevel/treestate/treecheck 컬럼 설정 필수) |

**edittype** — 편집 시 입력 형식:

| 값 | 설명 |
|----|------|
| `none` | 편집 불가 (기본) |
| `normal` | 일반 텍스트 편집 |
| `text` | 텍스트 입력 |
| `textarea` | 여러 줄 텍스트 |
| `mask` | 마스크 형식 입력 |
| `date` | 날짜 선택기 |
| `combo` | 콤보박스 편집 |
| `checkbox` | 체크박스 토글 |

- `autoenter` — 셀 선택 시 자동 편집모드 전환 (웹 브라우저 미지원)
- `wordwrap = true` — 셀 내용이 너비를 초과하면 자동 줄바꿈

### Grid Cell expr 스크립트

Grid 셀 내부에서 `expr:` 표현식 사용 시 `this`는 Cell 컨텍스트이며 Form이 아님.

```xml
<Cell text="expr:column00"/>                       <!-- 바인딩 Dataset 컬럼 -->
<Cell text="expr:comp.currentcell"/>               <!-- comp = Grid 자신 -->
<Cell text="expr:dataset.parent.fn_format(row)"/>  <!-- Form 함수 호출 -->
```

### Grid autofittype (컬럼 너비 자동 조정)

| 값 | 동작 |
|----|------|
| `none` | 지정된 컬럼 너비 고정 (기본) |
| `col` | Grid 전체 너비에 맞게 모든 컬럼 너비 자동 조정 |
| `row` | 행 높이 자동 조정 |

```javascript
this.grdMain.autofittype = "col";
this.grdMain.autofittype = "none";
```

### Grid 셀 툴팁 (tooltiptext) + setCellProperty

```javascript
// 정적 설정: Grid Contents Editor에서 Cell의 tooltiptext 속성에 컬럼 바인딩
// 동적 설정: 런타임에 setCellProperty 사용
this.grdMain_onmousemove = function(obj, e) {
    var nCellSize = obj.getFormatColSize(e.cell);         // 컬럼 설계 너비
    var strText   = obj.getCellText(e.row, e.cell);       // 셀 표시 텍스트
    var nTextLen  = nexacro.getTextSize(strText, obj.font); // 텍스트 실제 너비

    if (nCellSize < nTextLen.nx) {
        // 텍스트가 셀 너비를 초과할 때만 툴팁 표시
        obj.setCellProperty("Body", e.cell, "tooltiptext", strText);
    } else {
        obj.setCellProperty("Body", e.cell, "tooltiptext", "");
    }
};

// setCellProperty 시그니처: (section, colIndex, propName, propValue)
// section: "Head" | "Body" | "Summary"
obj.setCellProperty("Body", 2, "displaytype", "image");
obj.setCellProperty("Head", 2, "text", "새 헤더명");

// expr: 조건으로 displaytype 동적 변경
this.btnToggle_onclick = function(obj, e) {
    // Column2가 "Y"이면 checkboxcontrol, 아니면 normal
    this.Grid00.setCellProperty("body", 0, "displaytype",
        "expr:Column2=='Y'?'checkboxcontrol':'normal'");
    this.Grid00.setCellProperty("body", 0, "edittype",
        "expr:Column2=='Y'?'checkbox':'none'");
};
```

- `getFormatColSize(colIndex)` — Grid Contents Editor에서 설정된 컬럼 너비 반환
- `getRealColSize(colIndex)` — 동적 너비 조정 시 실제 컬럼 너비 반환
- `getCellText(row, col)` — 셀에 표시되는 텍스트 반환

### Grid fastvscrolltype (대용량 스크롤)

대용량 데이터(수만~수백만 행)에서 트랙바 드래그 시 중간 데이터를 미리 보여주는 기능.

| 값 | 동작 |
|----|------|
| `none` | 기본 스크롤 (표시 없음) |
| `topdisplay` | 스크롤 위치의 첫 행 표시 |
| `topbottomdisplay` | 첫 행 + 마지막 행 표시 |
| `trackbarfollow` | 트랙바 위치에 따라 연속 표시 |

```javascript
this.grdMain.fastvscrolltype = "trackbarfollow";
```

### Grid 틀 고정 (Column/Row Band)

Grid의 컬럼을 `left`/`right` 밴드로 지정하면 스크롤 시 해당 컬럼이 고정된다.

```javascript
// 특정 컬럼을 left/right 밴드로 설정하여 틀 고정
this.Grid00.setFormatColProperty(0, "band", "left");   // 0번 컬럼 왼쪽 고정
this.Grid00.setFormatColProperty(4, "band", "right");  // 4번 컬럼 오른쪽 고정
this.Grid00.setFormatColProperty(1, "band", "body");   // 다시 body 밴드로 해제

// 현재 밴드 값 조회
var bandVal = this.Grid00.getFormatColProperty(0, "band");
```

- 컬럼 band 값: `"left"` | `"body"` (기본) | `"right"`
- Row 고정: summary 밴드에 Row 추가하면 하단 고정 (설정 불필요)
- head 밴드의 Row는 자동으로 상단 고정

### Grid 컬럼 이동 (cellmovingtype)

```javascript
// 사용자가 헤더 드래그로 컬럼 순서를 변경할 수 있게 함
this.grdMain.cellmovingtype = "col";  // "col" | "row" | "none"
```

### Grid summary 밴드 (합계 행)

Grid Contents Editor에서 [Add Summary Row]로 summary 밴드 Row 추가. 셀 `expr` 속성에 집계 함수 사용:

```
// Grid Contents Editor에서 summary 셀의 expr 속성 설정
expr: dataset.getSum('Salary')       // 합계
expr: dataset.getAvg('parseInt(Salary)')  // 평균
expr: dataset.getMax('parseInt(Salary)')  // 최대값
expr: dataset.getMin('parseInt(Salary)')  // 최소값
```

---

## Application 전역 변수

```javascript
// 전역 변수 저장/조회
application.setGlobal("USER_ID", "hong");
var userId = application.getGlobal("USER_ID");
```

---

## 스크립트 유효범위(scope) — `this` 사용 근거

nexacro 스크립트는 표준 JS와 스코프가 다름. `this` 없이 쓴 변수는 글로벌 멤버가 됨.

```javascript
alert("msg");                              // JS 표준 alert
this.alert("msg");                         // Form.alert()
nexacro.getApplication().alert("msg");     // Application.alert()

// transaction/close 등 Form 메서드는 반드시 this. 로 호출
this.transaction(svcId, url, ...);

// 전역값은 global 변수 대신 appVariables 권장
nexacro.getApplication().addVariable("USER_ID", "hong");
nexacro.getApplication().getVariable("USER_ID");
```

**명명 제약 (화면이 뜨지 않는 원인):**
- 언더바(`_`)로 시작하는 변수/함수명 금지 — 라이브러리 내부 충돌
- `createComponent` 등 라이브러리 예약 함수명 금지
- 컨테이너 멤버명과 같은 컴포넌트 id 금지 (예: Button id를 `text`로, Dataset 컬럼을 `length`로 지정 불가)

---

## Frame Tree 참조 경로

```javascript
this.parent;                           // form → 부모 childframe
this.getOwnerFrame();                  // form → 소속 childframe
this.div0.form.btn0;                   // Div 내부 컴포넌트
this.div1.form.ds2.parent.parent.name; // "form"

// Div 서브 폼에서 부모 폼 컴포넌트 접근
this.parent.parent.edtSearch;          // Div → form → 컴포넌트

// id 중복: 동일 레벨에서만 금지. btn0 와 div0.form.btn0 는 공존 허용
```

---

## 반응형 컴포넌트 배치 (right / bottom 속성)

```xml
<!-- Edit은 오른쪽 버튼과 거리 유지, 버튼은 오른쪽 고정 -->
<Edit  left="30" top="30" height="50" right="160"/>   <!-- right = 버튼left + 여백 -->
<Button right="30" top="30" height="50" width="120"/> <!-- left 제거, right만 사용 -->
```

- `left` 속성 대신 `right` 속성 지정 → 화면 너비 변경 시 컴포넌트가 오른쪽 기준으로 고정
- Edit의 `+` 핸들을 Button으로 드래그 → 상대 거리 자동 연결
- `bottom` 속성도 동일 원리 (화면 높이 기준 하단 고정)

---

## em/rem 단위 지원 속성

nexacroK/nexacroN에서 em/rem 단위를 사용할 수 있는 속성 목록:

| 속성 | em 기준 | 비고 |
|------|---------|------|
| `width`, `height` | self font | |
| `minwidth`, `maxwidth`, `minheight`, `maxheight` | MainFrame font | rem 사용 권장 |
| `padding` | self font | 1~4방향 모두 가능 |
| `border` | self font | 두께 부분만 |
| `borderRadius` | self font | |
| `font` | 부모 font | font-size 부분 |
| `letterSpacing` | self font | 음수도 허용 |
| `wordSpacing` | self font | |
| `textPadding` | self font | |
| `background` | self font | size/position 부분 |
| `boxShadow` | self font | offset/blur/spread |

- **em** = 해당 컴포넌트 자신의 font-size 기준
- **rem** = MainFrame의 font-size 기준
- **규칙: em/rem 속성은 XML에 직접 쓰지 않고, `FormId_onload` 스크립트에서 설정한다**

```javascript
// Form 태그: <Form id="MyForm" ... onload="MyForm_onload">
this.MyForm_onload = function(obj:nexacro.Form, e:nexacro.LoadEventInfo)
{
    this.btn01.padding       = "1em";
    this.btn01.border        = "0.5em solid #3B82F6";
    this.btn02.letterSpacing = "0.1em";
    this.btn02.wordSpacing   = "0.2em";
    this.btn03.font          = "0.8em/normal \"Malgun Gothic\"";
    this.btn04.boxShadow     = "0.2em 0.2em 0.5rem rgba(0,0,0,0.3)";
};
```

- `text` 속성 값에 em/rem 문자열이 포함되어도 제거 대상 아님 (설명 텍스트)
- 화면 초기화 버튼 패턴: `this.reload()` — taborder 마지막+1, left=1165, top=8

---

## xfdl 파일 복사·리네임 체크리스트

xfdl 파일을 복사하거나 파일명을 변경할 때 반드시 내부를 함께 수정한다:

1. `<Form id="...">` — 새 파일명과 동일하게 수정 (`MyForm01.xfdl` → `id="MyForm01"`)
2. `onload="..."` — 새 Form id에 맞게 수정 (`onload="MyForm01_onload"`)
3. 스크립트 내 `this.OldName_onload = function(...)` — 새 이름으로 수정
4. `$Geninfo$.geninfo` — 빌드 시 자동 재생성이므로 별도 수정 불필요

> xfdl 파일 인코딩: **UTF-8 without BOM** (첫 3바이트 `3C 3F 78` = `<?x`)
> PowerShell 수정 시: `New-Object System.Text.UTF8Encoding($false)` 사용

연속 리네임 시 충돌 방지: 임시 파일명을 경유한다 (10→tmp, 09→10, …, 01→02, tmp→01).

---

## main.xfdl dsMenu 관리

`FrameBase/main.xfdl`의 `dsMenu` Dataset에서 Combo 메뉴 항목을 관리한다:

```xml
<!-- Column0 = 순서 코드(정수), Column1 = Namespace::파일명.xfdl -->
<Row>
  <Col id="Column1">TestCase::MyNewForm.xfdl</Col>
  <Col id="Column0">17</Col>
</Row>
```

- Namespace: `TestCase::` (TestCase 폴더), `Base::` (Base 폴더)
- **새 xfdl 파일 생성 시 반드시 dsMenu에 Row 추가**
- Div에 로드되는 서브 폼(예: `EmRemChild.xfdl`)은 추가 여부를 별도 판단

---

## 앱 캐시 (CacheLevel)

| 값 | 동작 |
|----|------|
| `none` | 캐시 미사용 — 매번 서버에서 수신 |
| `dynamic` | 서버 변경 시에만 재다운로드 (기본 권장) |
| `session` | 실행 시 1회 캐시, 종료까지 유지 |
| `static` | 재실행해도 로컬 캐시만 사용 |

```javascript
// 특정 서비스의 캐시 레벨 동적 변경
nexacro.getEnvironment().services["base"].cachelevel = "none";
```

---

## QuickView vs Launch 실행 방식 구분

| 방식 | 단축키 | 용도 |
|------|--------|------|
| **QuickView** | `Ctrl+F6` / 돋보기 아이콘 | 현재 편집 중인 Form만 단독 실행 — 빠른 컴포넌트/레이아웃 테스트 |
| **Launch** | `Ctrl+F5` | 전체 앱(application.xadl 기준) 실행 — 화면 전환·팝업·메뉴 흐름 테스트 |

> QuickView로 실행 시 Form 단독 구동이므로 `Form_onload`에서 transaction 호출 시 서버가 필요하다.

---

## Nexacro Studio 주요 단축키

| 기능 | 단축키 |
|------|--------|
| 새 Form 만들기 | `Ctrl+N` |
| Dataset Editor | `Ctrl+D` |
| 화면 실행(Launch) | `Ctrl+F5` |
| Quick View | `Ctrl+F6` |
| 파일 내 검색 | `Ctrl+Shift+F` |
| Properties | `Alt+Enter` |
| ID 복사(부모 포함) | `Ctrl+Shift+C` |
| 인텔리센스 | `Ctrl+Space` |
| 중단점 토글 | `F9` |
| Step Into/Over/Out | `F11` / `F10` / `Shift+F11` |
| 디버그 시작/중지 | `F5` / `Shift+F5` |
| 커서까지 실행 | `Ctrl+F10` |

---

## NRE 원격 디버깅 (Chrome inspect)

```bash
# 1. Environment: enableinspector=true 설정
# 2. NRE 실행 시 원격 디버깅 포트 지정
nexacro.exe -K "KEY" -S "http://localhost:8080/start.json" -RPP 127.0.0.1:9223 -brk "true"
# 3. Chrome → chrome://inspect → 포트 추가(9223) → inspect 클릭
```

## NRE 로그 설정 (nexacro_config.xml)

```xml
<nexacro-config os="windows">
  <application file-logging="true" loglevel="debug" tracemode="new" traceduration="-1"/>
  <log filepath="%USERAPP%\Log\nre.log" filesize="408960" backupfilecount="5"/>
</nexacro-config>
```

- `loglevel`: `fatal|error|warn|info|debug` (trace()는 debug 레벨)
- Windows/macOS NRE 전용 (웹 브라우저 환경 미지원)

---

## xapi 서버 서비스 개발 (Java)

transaction() 호출 시 서버에서 처리하는 Java 서비스는 **nexacro xapi** 라이브러리로 구현한다.

### 패키지 구조 및 import

```java
import com.nexacro.java.xapi.data.*;            // PlatformData, DataSet, VariableList, DataTypes, ColumnHeader
import com.nexacro.java.xapi.data.datatype.*;   // PlatformDataType
import com.nexacro.java.xapi.tx.*;              // HttpPlatformRequest, HttpPlatformResponse, PlatformException, PlatformType
```

### PlatformData 구조

```
PlatformData (최상위 컨테이너)
  ├─ VariableList  — 단일 파라미터 (ErrorCode, ErrorMsg, 검색조건 등)
  └─ DataSetList   — DataSet 목록 (2차원 테이블 데이터)
       └─ DataSet  — ColumnHeader 목록 + 행 데이터
```

### DataTypes 상수

| 상수 | Java 타입 | 포맷 |
|------|---------|------|
| `DataTypes.STRING` | `String` | - |
| `DataTypes.INT` | `int` | - |
| `DataTypes.LONG` | `long` | - |
| `DataTypes.DOUBLE` | `double` | - |
| `DataTypes.FLOAT` | `float` | - |
| `DataTypes.BIG_DECIMAL` | `BigDecimal` | - |
| `DataTypes.BOOLEAN` | `boolean` | - |
| `DataTypes.DATE` | `Date` | yyyyMMdd |
| `DataTypes.DATE_TIME` | `Date` | yyyyMMddHHmmssSSS |
| `DataTypes.BLOB` | `byte[]` | - |

### DataSet API (Java)

```java
// 컬럼 정의
DataSet ds = new DataSet("dsResult");
ds.addColumn(new ColumnHeader("USER_ID",   DataTypes.STRING, 20));
ds.addColumn(new ColumnHeader("USER_NM",   DataTypes.STRING, 50));
ds.addColumn(new ColumnHeader("REG_DT",    DataTypes.DATE));
ds.addColumn(new ColumnHeader("AMT",       DataTypes.BIG_DECIMAL));

// 행 추가 및 값 설정
int row = ds.newRow();
ds.setValue(row, "USER_ID", "hong");
ds.setValue(row, "USER_NM", "홍길동");
ds.setValue(row, "AMT",     new BigDecimal("50000.00"));

// 값 읽기 (타입별)
String  userId = ds.getString(i,  "USER_ID");
int     cnt    = ds.getInt(i,     "CNT");
double  amt    = ds.getDouble(i,  "AMT");
Date    dt     = ds.getDateTime(i,"REG_DT");
Object  val    = ds.getObject(i,  "COL");

// 행 상태 확인 — 클라이언트가 변경한 행 처리 시 필수
int rowType = ds.getRowType(i);
// ROW_TYPE_NORMAL=0, ROW_TYPE_INSERT=1, ROW_TYPE_UPDATE=2, ROW_TYPE_DELETE=3
```

### VariableList API

```java
VariableList varList = resData.getVariableList();
varList.add("ErrorCode", 0);          // int
varList.add("ErrorMsg",  "SUCCESS");  // String
varList.add("TotalCnt",  100);

// 요청 Variable 읽기
VariableList inVar = reqData.getVariableList();
String searchNm = inVar.getString("SEARCH_NM");
int    pageNo   = inVar.getInt("PAGE_NO");
```

### 완전한 JSP 서비스 패턴

```jsp
<%@ page import="com.nexacro.java.xapi.data.*, com.nexacro.java.xapi.tx.*" %>
<%@ page contentType="text/xml; charset=UTF-8" %>
<%
    out.clearBuffer();  // 필수 — 앞선 출력 제거

    // 1. 요청 수신
    HttpPlatformRequest req = new HttpPlatformRequest(request);
    req.receiveData();
    PlatformData reqData = req.getData();

    // 2. 입력값 추출
    VariableList inVar = reqData.getVariableList();
    String searchNm = inVar.getString("SEARCH_NM");
    DataSet dsIn = reqData.getDataSet("dsSearch");

    // 3. 응답 생성
    PlatformData resData = new PlatformData();

    // 4. 결과 Dataset 구성
    DataSet dsOut = new DataSet("dsResult");
    dsOut.addColumn(new ColumnHeader("USER_ID", DataTypes.STRING, 20));
    dsOut.addColumn(new ColumnHeader("USER_NM", DataTypes.STRING, 50));
    // ... DB 조회 후 행 추가 ...
    resData.addDataSet(dsOut);

    // 5. 처리 결과 Variable
    resData.getVariableList().add("ErrorCode", 0);
    resData.getVariableList().add("ErrorMsg",  "SUCCESS");

    // 6. 응답 송신
    HttpPlatformResponse res = new HttpPlatformResponse(response, req);
    res.setData(resData);
    res.sendData();
%>
```

### Servlet 패턴 (복잡한 비즈니스 로직 시)

```java
protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
    try {
        HttpPlatformRequest  req     = new HttpPlatformRequest(request);
        req.receiveData();
        PlatformData         reqData = req.getData();
        PlatformData         resData = processService(reqData);
        HttpPlatformResponse res     = new HttpPlatformResponse(response, req);
        res.setData(resData);
        res.sendData();
    } catch (PlatformException e) {
        sendError(response, -1, e.getMessage());
    } catch (Exception e) {
        sendError(response, -999, "서버 오류: " + e.getMessage());
    }
}
```

### 행 상태(RowType)별 CRUD 처리 패턴

```java
DataSet dsIn = reqData.getDataSet("dsSave");
for (int i = 0; i < dsIn.getRowCount(); i++) {
    int rowType = dsIn.getRowType(i);
    if (rowType == DataSet.ROW_TYPE_INSERT) {
        // INSERT
    } else if (rowType == DataSet.ROW_TYPE_UPDATE) {
        // UPDATE
    } else if (rowType == DataSet.ROW_TYPE_DELETE) {
        // DELETE
    }
}
```

### ContentType / 인코딩 설정

| 항목 | 설정값 |
|------|--------|
| JSP contentType | `text/xml; charset=UTF-8` |
| Binary 응답 | `PlatformType.CONTENT_TYPE_BINARY` |
| ZLIB 압축 | `res.addProtocolType(PlatformType.PROTOCOL_TYPE_ZLIB)` |
| Tomcat JVM 옵션 | `-Dfile.encoding=UTF8` |

**Excel MIME 타입 (web.xml):**
```xml
<mime-mapping>
  <extension>xlsx</extension>
  <mime-type>application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</mime-type>
</mime-mapping>
```

### xapi 서비스 개발 체크리스트

- `out.clearBuffer()` 호출 (JSP에서 필수)
- `receiveData()` / `sendData()` 는 반드시 `try-catch(PlatformException)` 으로 감쌀 것
- 응답에 `ErrorCode` (0=성공, 음수=오류) + `ErrorMsg` 포함 필수
- 저장 서비스는 `getRowType()` 으로 INSERT/UPDATE/DELETE 분기 처리
- 컬럼명은 **대문자** 사용 (클라이언트 Dataset과 일치해야 함)

### Jakarta EE 지원 (중요)

| Tomcat 버전 | 패키지 |
|------------|--------|
| Tomcat 9 이하 | `javax.servlet.*` |
| Tomcat 10 이상 | `jakarta.servlet.*` |

> 환경에 맞는 X-API 빌드(jar)를 사용해야 함. 패키지 불일치 시 ClassNotFoundException 발생.

### java.lang.IllegalStateException 대처 (빈발 이슈)

SSV/Binary 전송 시 발생 (XML/CSV는 미발생). JSP 대신 **Servlet** 사용이 근본 해결책.
Tomcat/WebSphere에서 발생, WebLogic/JEUS에서는 자동 무시됨.

### HTTP GET 파라미터 수신

```java
req.setProperty("http.getparameter.register", "true");
req.setProperty("http.getparameter.asvariable", "true");  // true=Variable, false=DataSet
```

### ZLIB 압축 응답

```java
HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_BINARY);
res.addProtocolType(PlatformType.PROTOCOL_TYPE_ZLIB);
res.setData(resData);
res.sendData();
```

### nexacro-xeni Excel 내보내기/가져오기 (web.xml 등록 필수)

```xml
<!-- web.xml -->
<servlet>
  <servlet-name>XExportImport</servlet-name>
  <servlet-class>com.nexacro.java.xeni.services.GridExportImportServlet</servlet-class>
</servlet>
<servlet-mapping>
  <servlet-name>XExportImport</servlet-name>
  <url-pattern>/XExportImport</url-pattern>
</servlet-mapping>
```

클라이언트: `ExcelExportObject`/`ExcelImportObject`의 `exporturl`/`importurl`을 `/XExportImport`로 설정.

> **null 문자(0x00) 주의**: NRE는 0x00을 문자열 종료로 인식하므로, X-API 응답 데이터에 0x00이 포함되면 잘림 현상 발생.

---

## 모듈(.xmodule) 개발 — Composite Component형

모듈은 재사용 가능한 복합 컴포넌트(Composite Component) 단위이다.

**패키지 구성:**
```
MyModule.xmodule
├── module.xml        — 타입 정의 (Property, Method, Event)
├── MyModule.xcdl     — 컴포지트 컴포넌트 UI 레이아웃
├── MyModule.js       — 동작 로직 (prototype 기반)
└── resource/         — 이미지, xcss 스타일
```

**모듈 스크립트 기본 구조:**
```javascript
nexacro.MyModule = function(name, left, top, width, height) {
    nexacro._CompositeComponent.call(this, name, left, top, width, height);
    this._p_myProp = "";
};
nexacro.MyModule.prototype = Object.create(nexacro._CompositeComponent.prototype);

// getter/setter
nexacro.MyModule.prototype.set_myProp = function(v) {
    if (this._p_myProp != v) { this._p_myProp = v; }
};
nexacro.MyModule.prototype.get_myProp = function() {
    return this._p_myProp;
};
```

**모듈 배포/설치:** `Deploy > Module Package` 생성 후 `File > Install Module`로 설치 → 컴포넌트 팔레트에 자동 등록.

---

## 모듈(.xmodule) 개발 — Action형

Composite Component형 외에 **Action형** 모듈도 존재 (nexacro v24 실측 확인).

**Action형 모듈 내부 구조 (xmodule은 ZIP):**
```
SimpleActionTest.xmodule (ZIP)
├── SimpleActionTest.json              ← 매니페스트
└── SimpleActionTest/
    ├── TestQueryAction.js             ← 동작 로직
    └── _metainfo_/{KOR,ENG,JPN}/      ← TypeDefinition (*.info, MetaInfo XML)
```

**매니페스트 JSON 핵심 키:**
```json
{
  "name": "SimpleActionTest",
  "moduletype": "action",
  "version": "1.0.0",
  "minnexacroversion": "24.0.0",
  "scripts": ["SimpleActionTest/TestQueryAction.js"]
}
```

**Action형 모듈 .js 패턴:**
```javascript
(function(nexacro) {
    "use strict";
    if (nexacro.TestAlertAction) return;   // 중복 로드 가드

    var TestAlertAction = function(id, parent) {
        nexacro.Action.call(this, id, parent);
    };
    var _p = nexacro._createPrototype(nexacro.Action, TestAlertAction);
    TestAlertAction.prototype = _p;
    _p._type_name = "TestAlertAction";

    _p.set_message = function(v) { this.message = v; };   // setter: set_<속성명>
    _p.run = function() { alert(this.message); };           // Action 진입점
    _p.destroy = function() {
        nexacro.Action.prototype.destroy.call(this);
        this.message = null;
    };

    nexacro.TestAlertAction = TestAlertAction;
})(nexacro);
```

**TypeDefinition (MetaInfo XML — `_metainfo_/<LANG>/*.info`):**
```xml
<MetaInfo version="2.0">
  <Object id="TestAlertAction">
    <ObjectInfo inheritance="nexacro.Action" classname="nexacro.TestAlertAction"
                group="Action" requirement="Edge,Chrome,Windows NRE"/>
    <PropertyInfo>
      <Property name="message" group="Action" edittype="String" description="표시할 메시지"/>
    </PropertyInfo>
    <MethodInfo/> <EventHandlerInfo/>
  </Object>
</MetaInfo>
```

**연관 파일 형식:**
- `.xmodel` — transaction 입출력 스키마 정의 (`iotype="input|output"`)
- `.xpackage` — 프로젝트 일괄 가져오기 ZIP (`File > Import Package`)

---

## X-PUSH 실시간 메시지 처리

```javascript
// Form_onload: X-PUSH 서버 연결
this.Form_onload = function(obj, e) {
    this.XPush00.connect("user00", "password");
};

// onsuccess: 연결 성공 시 구독 등록
this.XPush00_onsuccess = function(obj, e) {
    if (e.action == nexacro.XPushAction.AUTH) {  // AUTH=0
        this.XPush00.subscribe("OPDT", "ALL", this, this.Dataset00, "append", "fn_PushCallback");
    }
};

// 메시지 수신 콜백
this.fn_PushCallback = function(Row, ChangeColumn, AllColumn, Type, ActionType) {
    trace(Row, ChangeColumn, AllColumn, Type, ActionType);
};

// onerror: 연결 실패 원인 확인
this.XPush00_onerror = function(obj, e) {
    trace(e.errormsg, e.statuscode);
};
```

**XPush 오브젝트 필수 속성:**
- `layouturl` — 메시지 레이아웃 XML 파일 URL
- `iplist` — X-PUSH 서버 IP/PORT (TCP: 10081, HTTP: 10080)
  - `iplist="http://localhost:10080,localhost:10081"` (웹·NRE 동시 지원)

**신뢰성 메시지(Reliable):** `registerTopic` → `requestMessage` → `sendResponse` 순서

---

## 프로토콜 어댑터 (Protocol Adaptor)

```javascript
// 암호화: 전송 전 호출
nexacro.MyPtAdp.prototype.encrypt = function(strUrl, strData) {
    return strData;
};

// 복호화: 수신 후 호출
nexacro.MyPtAdp.prototype.decrypt = function(strUrl, strData) {
    return strData;
};

// 사용: transaction URL에 프로토콜 어댑터 스킴 적용
this.transaction("svcId", "myPtAdp://server:8080/api/endpoint", ...);
```

**배포 절차:** 넥사크로 모듈 디벨로퍼 → `[Deploy > ModulePackage]` → Type: `protocoladaptor` → Studio에서 Install → TypeDefinition에 Protocol 등록

---

## 런처 서비스 (Launcher Service / TPLSvc)

액티브X/플러그인 없이 웹 브라우저에서 nexacro NRE를 실행하는 Windows 서비스.

**통신 방식:** JSON 형식 → `http://127.0.0.1:7895/launcher/nexacro/<timestamp>`

```javascript
// 1. create: ID 할당 받기
var obj = { platform: "nexacro", action: "create" };
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var result = JSON.parse(xhr.responseText);
        if (result.result == "success") { nexacroId = result.id; doSetProperty(); }
    }
};
xhr.open("POST", "http://127.0.0.1:7895/launcher/nexacro/" + new Date().getTime(), true);
xhr.send(JSON.stringify(obj));

// 2. setproperty: 필수 속성 설정
var setPropObj = {
    platform: "nexacro", id: nexacroId, action: "setproperty",
    value: {
        key: "myApp", bjson: "http://server/start.json",
        version: "24", onlyone: true
    }
};

// 3. method: launch — NRE 실행
var launchObj = { platform: "nexacro", id: nexacroId, action: "method", value: { launch: null } };
```

**런처 서비스 포트:**

| 통신 | 기본 포트 |
|------|---------|
| HTTP | 7895~7935 |
| HTTPS | 7936~7966 |
| WebSocket | 7970~7981 |

**주요 에러 코드:** 102: key 미설정 / 103: bjson 미설정 / 104: 이미지 다운로드 실패 / 105: nexacro.xml 읽기 실패

---

## eGovFrame(전자정부 프레임워크) 연동 개요

**핵심 원칙:**
- 기존 Service / DAO / SQL Mapper는 **그대로 재사용**
- nexacro 전용 **Controller만 새로 작성** (JSON 응답 처리)
- `pom.xml`에 Jackson 라이브러리 추가 (JSON 통신 지원)

**JSP 화면 전환 (iframe 삽입):**
```jsp
<c:choose>
  <c:when test="${param.menu == 'notice'}">
    <iframe src="/nexa_ui/launch.html" width="100%" height="600px" frameborder="0"/>
  </c:when>
  <c:otherwise><%-- 기존 eGovFrame 뷰 --%></c:otherwise>
</c:choose>
```

**연동 파일 복사 순서:**
1. `egov_nexacroN.zip` 압축 해제
2. 넥사크로 프로젝트 소스 → 기존 eGovFrame 프로젝트에 병합
3. Controller 파일 → `src/main/java/.../web/` 에 복사
4. Generate 산출물 → `src/main/webapp/nexa_ui/` 에 복사

---

## V24 동작 변경점 (v21 → v24 마이그레이션 시 주의)

| 구분 | 변경 전 | 변경 후 |
|------|---------|---------|
| 부등호 연산자 | `<>` | `!=` |
| switch-case 타입 비교 | 느슨한 비교 | 엄격 비교 (`case "2"` ≠ `case 2`) |
| regex replace | 전체 치환 | `/g` 없으면 첫 번째만 치환 |
| 소수점 반올림 | `Math.floor(v, digit)` | `nexacro.floor(v, digit)` |
| 이미지 객체 | `new Image()` | `new nexacro.Image()` |
| CSS 클래스 | `.class` | `.cssclass` |

---

## nexacrodeploy 콘솔 도구 (빌드 자동화)

```bash
# 필수 4개 옵션
nexacrodeploy.exe -P [xprj경로] -O [출력경로] -B [nexacrolib경로] -GENERATERULE [generate룰경로]

# Generate + Deploy + 압축 + 난독화
nexacrodeploy.exe -P "C:\Test.xprj" -O "E:\Gen" -B "C:\nexacrolib" \
    -GENERATERULE "C:\generate" -D "E:\Deploy" -COMPRESS -SHRINK
```

| 옵션 | 설명 |
|------|------|
| `-SERVICE "Base,FrameBase"` | 서비스 선택 (콤마 뒤 공백 금지) |
| `-REGENERATE` | 변경 무시, 전체 재변환 |
| `-COMPRESS` | 공백·주석 제거 |
| `-SHRINK` | JS 난독화 (`eval` 함수 제외) |
| `-MERGE` / `-MERGEXCSS` | JS/XCSS 병합 (HTTP 요청 수 감소) |
| `-COMPILE` | NRE 전용 암호화 |

> Generate Rule 경로: `[SDK]/{24.x}/generate` 폴더. 구 `-CSSRULE`는 폐지됨.

---

## 주의사항

- Dataset 컬럼명은 반드시 **대문자** 사용 (`USER_ID` ○, `user_id` ✕)
- `this` 스코프: 이벤트 핸들러 내부에서는 `this` = Form. 일반 함수에서는 `this`가 Form이 아니므로 `oForm` 파라미터로 전달받아 사용
- `nexacro.getForm("FormId")` **사용 금지** — 이벤트 핸들러에서는 `this`를, 일반 함수에서는 `oForm` 파라미터를 사용할 것
- Grid-Dataset 연결은 반드시 **`binddataset`** 속성 사용 (`innerdataset`은 외부 Dataset 바인딩에 사용 불가)
- Grid 정렬 후 행 인덱스가 변경되므로 Dataset 직접 접근으로 값 추적
- 대량 데이터 루프 전 `updatecontrol = false` 설정 필수 (성능)
- 팝업 콜백은 함수 참조가 아닌 **함수명 문자열**로 전달
- 지원 브라우저: Chrome, Edge (최신 버전)
- 서버 응답 콘텐츠 타입: `text/xml; charset=UTF-8` (PlatformData 포맷 사용 시)

---

## 컴포넌트 레퍼런스 요약

> 각 컴포넌트의 핵심 속성·이벤트·Status·Controls 요약. 상세 사양은 `DOC/NexacroN/reference guide/` 참조.

### 컴포넌트별 Status 목록

| 컴포넌트 | Status |
|----------|--------|
| Button | disabled, pushed, selected, mouseover, focused, enabled |
| Edit | disabled, nulltext, readonly, mouseover, focused, enabled |
| TextArea | disabled, nulltext, readonly, mouseover, focused, enabled |
| Static | disabled, mouseover, enabled |
| CheckBox | disabled, selected, readonly, mouseover, focused, enabled |
| CheckBoxSet | disabled, readonly, mouseover, focused, enabled |
| Radio | disabled, selected, readonly, mouseover, focused, enabled |
| Combo | disabled, nulltext, readonly, mouseover, focused, enabled |
| Calendar | disabled, nulltext, readonly, mouseover, focused, enabled |
| DateField | disabled, nulltext, readonly, mouseover, focused, enabled |
| DateRangePicker | disabled, readonly, mouseover, focused, enabled |
| SelectField | disabled, readonly, mouseover, focused, enabled |
| TextField | disabled, readonly, mouseover, focused, enabled |
| MultiLineTextField | disabled, readonly, mouseover, focused, enabled |
| Spin | disabled, invalidtext, readonly, mouseover, focused, enabled |
| ListBox | disabled, mouseover, focused, enabled |
| ListView | disabled, readonly, mouseover, focused, enabled |
| Grid | disabled, mouseover, focused, enabled |
| Menu | disabled, mouseover, focused, enabled |
| PopupMenu | disabled, mouseover, enabled |
| GroupBox | disabled, mouseover, enabled |
| Panel | disabled, mouseover, focused, enabled |
| ImageViewer | disabled, mouseover, focused, enabled |
| WebBrowser | disabled, mouseover, focused, enabled |
| FileDownload | disabled, pushed, mouseover, focused, enabled |
| FileUpload | disabled, selected, mouseover, focused, enabled |
| Form | disabled, contents, mouseover, focused, enabled |
| ChildFrame | disabled, deactivate, enabled |
| MainFrame | disabled, deactivate, enabled |

### 컴포넌트별 내부 Controls

| 컴포넌트 | Controls |
|----------|----------|
| Edit | vscrollbar, hscrollbar |
| TextArea | vscrollbar, hscrollbar, hscrollindicator, vscrollindicator |
| TextField | box, helpertext, charcounttext, label, nulltext |
| MultiLineTextField | box, helpertext, charcounttext, label, nulltext, vscrollbar, hscrollbar, vscrollindicator, hscrollindicator |
| SelectField | box, label, nulltext, selectfieldlist |
| DateField | label, helpertext, nulltext, box, datetimepicker |
| DateRangePicker | headline, datetabbutton, datepickergroup, timepickergroup, closebutton, okbutton, cancelbutton |
| Combo | dropbutton, comboedit, combolist |
| Calendar (normal) | calendaredit, dropbutton, datepicker |
| Calendar (spin) | calendaredit, spinupbutton, spindownbutton |
| Spin | spinedit(MaskEdit), spinupbutton, spindownbutton |
| ListBox | listboxitem, vscrollbar, hscrollbar |
| ListView | body(ListViewBandControl), detail(ListViewDetailBandControl), vscrollbar, vscrollindicator |
| CheckBoxSet | checkboxsetitem(CheckBox), vscrollbar, vscrollindicator |
| Grid | head, body, summary, hscrollbar, vscrollbar |
| Tab | tabbuttonitem, tabpage, prevbutton, nextbutton, extrabutton |
| Menu | menupopupmenu, menuitem, prevbutton, nextbutton |
| PopupMenu | popupmenuitem, prevbutton, nextbutton |
| GroupBox | groupboxtitle(IconTextControl), groupboxcontents(Static) |
| ImageViewer | imagearea(ImageAreaControl), imagetext(Static) |
| FileUpload | fileuploaditem, vscrollbar, vscrollindicator |
| Form | hscrollbar, vscrollbar, stepselector |
| MainFrame | titlebar(TitleBarControl), statusbar(StatusBarControl) |
| MultiCombo | multicombotext, dropbutton, checkboxset, checkboxsetitem, selectallcheckbox |

---

## Form 상세

```
화면을 구성하는 기본 단위 컴포넌트 — 모든 컴포넌트는 Form 위에 배치됨
defaultbutton: Enter 키 입력 시 자동 클릭될 Button의 ID
scrollbartype: 스크롤바 표시 방식 ("autohide"|"none"|"show")
stepcount: 화면을 N개 스텝으로 분할 (stepcount=3 → 폼 너비 3배)
stepalign: 스텝 선택기 위치 ("top"|"bottom"|"left"|"right")
Controls: hscrollbar, vscrollbar, stepselector
Key Action: Tab(포커스이동), Enter(defaultbutton 클릭), Ctrl+방향키(스크롤)
```

### Form 전용 메서드

```javascript
// 서비스 통신
this.transaction(svcId, url, inDs, outDs, args, callbackFn, bAsync);

// 화면 닫기 (팝업 형태 ChildFrame에서)
this.close();
this.close({ resultCode: "OK", data: "값" }); // 반환값 포함

// 팝업 열기
this.openPopup("popUser", "Namespace::UserPopup.xfdl",
    { p_userId: "hong" }, "fn_popupCallback");

// 대화상자
this.alert("메시지");
this.confirm("확인하시겠습니까?");  // true/false 반환

// 포커스 이동
this.getFocus();                    // 현재 포커스된 컴포넌트 반환
this.setFocus();                    // Form 자체에 포커스

// 다음 컴포넌트로 포커스 이동 (Tab 순서 기준)
this.getNextComponent(this.getFocus(), true).setFocus();

// Form 다시 로드
this.reload();
```

### Frame 참조 경로

```javascript
// Form → 상위 프레임 참조
this.parent;                     // form → 소속 Div/ChildFrame
this.getOwnerFrame();            // form → 소속 ChildFrame

// 자식 컴포넌트 접근
this.edt_name;                   // form 직속 컴포넌트 직접 참조
this.div_search.form.btn_search; // Div 내부 컴포넌트

// 팝업/Div 서브폼에서 부모 폼 접근
this.parent.parent.edt_search;   // Div → form → 컴포넌트

// 전역 Dataset 접근 (application.xadl에 선언된 것)
nexacro.getApplication().dsGlobal;
```

### 컴포넌트 동적 접근

```javascript
// ID로 컴포넌트 찾기
var comp = this["edt_" + sFieldId];   // 동적 ID 조합

// 모든 컴포넌트 순회 (Form 직속)
for (var i = 0; i < this.components.length; i++) {
    var comp = this.components[i];
}

// Form 전체 컴포넌트 (Div 내부 포함)
for (var i = 0; i < this.all.length; i++) {
    var comp = this.all[i];
}

// 특정 컴포넌트 존재 여부 확인
if (this["grd_" + sId] != undefined) { ... }
```

### Form Status

| Name | Type | 설명 |
|------|------|------|
| `disabled` | status | 비활성화 상태 |
| `contents` | userstatus | contents form 처리용 |
| `mouseover` | status | 마우스 오버 상태 |
| `focused` | status | 포커스를 받은 상태 |
| `enabled` | status | 활성화 상태 |

---

## Button 상세

```
Push Button 컴포넌트 — 클릭 시 지정한 스크립트 실행
text: 버튼에 표시할 텍스트
fittocontents: "none"|"width"|"height"|"both" — 내용에 맞게 크기 자동 조정
iconurl: 아이콘 이미지 URL
defaultbutton: true이면 Form에서 Enter 키 입력 시 해당 버튼이 클릭됨
Space/Enter 키로 클릭 동작 실행
```

```javascript
// 버튼 활성화/비활성화
this.btnSave.set_enable(false);

// 버튼 텍스트 변경
this.btnSave.set_text("저장 중...");

// 동적 생성
var objBtn = new Button();
objBtn.init("btn_new", 10, 10, 100, 30, null, null);
objBtn.set_text("확인");
this.addChild("btn_new", objBtn);
objBtn.show();
```

---

## TextArea 상세

```
여러 줄 문자열 입력 컴포넌트
LF("\n") 문자 = 줄바꿈, Enter 키 = 줄바꿈
Undo(Ctrl+Z) / Redo(Ctrl+Y) 지원
1줄 입력 → Edit, 형식 입력 → MaskEdit 사용
scrollbartype: 스크롤바 표시 방식
wordwrap: true이면 자동 줄바꿈
```

```javascript
// 값 읽기/쓰기
var txt = this.txtMemo.value;
this.txtMemo.set_value("첫 줄\n두 번째 줄");

// 줄 수 계산
var lines = this.txtMemo.value.split("\n").length;

// 읽기 전용
this.txtMemo.set_readonly(true);
```

---

## Static 상세

```
텍스트 출력 전용 컴포넌트 (입력 불가)
text: 고정 텍스트 / binddataset+bindcolumn: Dataset 값 표시
expr 속성: 계산식으로 동적 표시
fittocontents: "none"|"width"|"height"|"both"
Dataset 바인딩 시 Dataset 변경 시 자동 갱신
그 외 경우 expr 속성도 화면 다시 그릴 때만 갱신
usedecorate: true이면 링크/마크업 텍스트 처리
```

```javascript
// 값 변경
this.stcTitle.set_text("조회 결과");

// expr 활용 (Studio 속성창에서 설정)
// text = "expr:dataset.rowcount + ' 건'"

// 동적 생성
var objStc = new Static("stc_new", 10, 10, 200, 24, null, null);
this.addChild("stc_new", objStc);
objStc.set_text("라벨");
objStc.show();
```

---

## Combo 상세

```
단일 선택 드롭다운 컴포넌트
innerdataset: 아이템 목록 Dataset (참조만, 변경 대상 아님)
codecolumn: 실제 값이 저장될 컬럼
datacolumn: 화면에 표시할 텍스트 컬럼
type: "dropdown"(기본) | "search"(검색) | "filter"(필터링)
displayrowcount: 팝업 목록 표시 행 수
Alt+아래방향키로 목록 열기, ESC로 닫기
```

```javascript
// 값 읽기/쓰기
var code = this.cmbDept.value;   // codecolumn 값
var text = this.cmbDept.text;    // datacolumn 텍스트

this.cmbDept.set_value("A01");

// 아이템 변경 이벤트
this.cmbDept_onitemchanged = function(obj, e) {
    var newVal = obj.value;
    var oldVal = e.prevalue;  // 변경 전 값
};

// 동적으로 innerdataset 교체
this.cmbDept.set_innerdataset("dsNewDept");
```

---

## Edit 상세

```
1줄 문자열 입력 컴포넌트
password: true 설정 시 암호 입력 모드 (입력값 마스킹)
maxlength: 최대 입력 문자 수 제한
nulltext: 값이 없을 때 표시할 힌트 텍스트
여러 줄 입력 → TextArea, 형식 입력 → MaskEdit 사용
```

```javascript
// 값 읽기/쓰기
var val = this.edtName.value;
this.edtName.set_value("홍길동");

// 읽기 전용 전환
this.edtName.set_readonly(true);

// 활성화/비활성화
this.edtName.set_enable(false);

// 포커스 이동
this.edtName.setFocus();

// 전체 선택
this.edtName.selectAll();
```

---

## CheckBox 상세

```
value/truevalue/falsevalue 속성으로 체크 상태 제어
Dataset 바인딩: value 속성 ↔ Dataset 컬럼 자동 연동
fittocontents: "none"|"width"|"height"|"both"
Space 키로 체크 토글
```

```javascript
// Dataset 바인딩 패턴
// XML: <CheckBox id="chkAgree" binddataset="dsMain" bindcolumn="AGREE_YN"
//                truevalue="Y" falsevalue="N" .../>

// 스크립트로 값 읽기/쓰기
var checked = this.chkAgree.value;  // "Y" or "N"
this.chkAgree.set_value("Y");
```

---

## Radio 상세

```
InnerDataset 방식: innerdataset/codecolumn/datacolumn 속성으로 자동 구성
Contents 방식: 직접 배치 (사용자가 위치 지정)
rowcount/columncount: 행/열 수 (-1이면 자동)
direction: "horizontal"|"vertical" 방향
```

```javascript
// InnerDataset 방식 예시 (XML)
// <Radio innerdataset="dsCode" codecolumn="CODE" datacolumn="CODE_NM" rowcount="1"/>

// 선택값 읽기
var selVal = this.radGender.value;
this.radGender.set_value("M");
```

---

## Calendar 상세

```
type: "normal"(팝업달력) | "spin"(스핀버튼) | "monthonly"(월달력)
editformat: 입력 형식 마스크 (예: "YYYY-MM-DD", "LONGDATE")
dateformat: 화면 표시 형식 (LONGDATE/SHORTDATE = 국가별 형식)
innerdataset: 특정 날짜 강조 효과
dropbutton과 팝업달력 겹침 주의 — dropbutton 위치 조정 필요
```

```javascript
// 날짜 값 읽기/쓰기
var sDate = this.calStart.value;  // "20260101" 형식
this.calStart.set_value("20260101");

// 오늘 날짜로 초기화
this.calStart.set_value(nexacro.getDate("YYYYMMDD"));
```

---

## ListBox 상세

```
InnerDataset 방식으로 데이터 공급
itemheight: 각 아이템 높이 (미설정 시 텍스트 크기 자동 계산)
multiselect: 다중 선택 가능 여부
방향키로 아이템 이동 시 자동 선택
```

```javascript
// 선택 아이템 값 읽기
var selVal  = this.lst_main.value;
var selText = this.lst_main.text;
var selIdx  = this.lst_main.selecteditemindex;

// 특정 인덱스 선택
this.lst_main.set_selecteditemindex(2);
```

---

## PopupDiv 상세

```
Div와 달리 포커스를 잃으면 자동으로 숨김 (날짜 선택, 코드 팝업 등에 활용)
trackPopup(x, y [,w, h]) — 절대 좌표로 표시
trackPopupByComponent(comp [,align]) — 컴포넌트 기준으로 표시
2~3단계 이내 사용 권장 (단계 증가 시 초기화 속도 저하)
```

```javascript
// 버튼 클릭 시 PopupDiv 표시
this.btnCode_onclick = function(obj, e) {
    this.popCode.trackPopupByComponent(obj, "bottom-left");
};

// PopupDiv 내부에서 선택 후 닫기
this.popCode.hide();
```

---

## MultiCombo 상세

```
여러 아이템을 동시에 선택하는 콤보
type: "dropdown"|"search"|"filter"
edittype: "text"(선택 텍스트 표시) | "count"(선택 개수 표시)
         | "singletag"(단일 태그 UI) | "multitag"(다중 태그 UI)
selectallcheckbox: 전체 선택 체크박스 표시 여부
displayrowcount: 팝업 리스트 표시 행 수
```

```javascript
// 선택된 값 읽기 (구분자로 연결된 문자열)
var selVals = this.mcb_dept.value;    // 예: "A,B,C"
var selCnt  = this.mcb_dept.selectcount;
```

---

## SpinField 상세

```
숫자 범위 입력 + label + helpertext UI 일체형 컴포넌트
buttontype: "default"(우측 상하 스핀버튼) | "horizontal"(좌우 스핀버튼)
min/max: 허용 범위, step: 증감 단위
prefix/postfix: 앞뒤 텍스트 (예: "₩", "개")
TextField 등과 같이 쓸 때 일관성 있는 UI 제공
```

---

## ProgressBar 상세

```
min/max: 범위 (기본 0~100)
step: 한 번 진행 시 증가량
smooth: true=연속 바, false=블록 바
direction: "right"(기본) | "left"
값 범위: 0 ~ 2147483647
```

```javascript
// 진행 제어
this.pgb_load.min   = 0;
this.pgb_load.max   = 100;
this.pgb_load.value = 0;

// 타이머와 조합하여 진행
this.pgb_load.stepIt();          // step 만큼 증가
this.pgb_load.set_value(50);     // 직접 지정
```

---

## Dataset Expression (expr:) 상세

Grid 셀 속성이나 Dataset 메서드 인수에서 `expr:` 접두어로 스크립트 작성.

### 예약어

| 예약어 | 의미 |
|--------|------|
| `dataset` | Expression을 보유한 컴포넌트에 바인드된 Dataset |
| `comp` | Expression을 보유한 컴포넌트 자체 |
| `currow` | 현재 Expression이 실행 중인 행 인덱스 |
| `this` | Expression을 보유한 오브젝트(Band 또는 Cell) |

```javascript
// Grid 셀에서 바인드된 컬럼 직접 참조
<Cell text="expr:USER_NM"/>                         // 컬럼 ID 직접 사용

// 조건 분기
<Cell text="expr:STATUS=='Y' ? '활성' : '비활성'"/>

// 이전 행과 차이 계산
<Cell text="expr:dataset.getColumn(currow-1, 'AMT') - AMT"/>

// Form 함수 호출
<Cell text="expr:dataset.parent.gfn_formatAmt(AMT)"/>

// Dataset 집계
<Cell text="expr:dataset.getSum('AMT')"/>           // summary 셀에 합계

// filter/findRowExpr에서도 사용
this.dsMain.filter("STATUS == 'Y' && AMT > 1000");
var row = this.dsMain.findRowExpr("DEPT_CD == 'A1' && USE_YN == 'Y'");
```

> **주의**: expr 컨텍스트는 Form과 독립적. expr 내 변수 선언은 Form에 영향 없음.
> Form 변수 읽기/쓰기는 가능 (Form Context에 정의된 변수 접근 허용).

---

## 동적 컴포넌트 생성 패턴 (공통)

모든 nexacro 컴포넌트는 동일한 패턴으로 동적 생성·제거한다.

```javascript
// 생성 — init(id, left, top, width, height [, right, bottom])
var objBtn = new Button();
objBtn.init("btn_new", 10, 10, 100, 30, null, null);
objBtn.set_text("확인");
this.addChild("btn_new", objBtn);
objBtn.show();

// 또는 생성자에 파라미터 직접 전달
var objEdit = new Edit("edt_new", 10, 50, 200, 30, null, null);
this.addChild("edt_new", objEdit);
objEdit.show();

// 중간에 삽입 (insertChild)
this.insertChild(1, "btn_insert", objBtn);

// 제거
this.removeChild("btn_new");
objBtn.destroy();
objBtn = null;
```

**`init()` 공통 파라미터**:

| 파라미터 | 설명 |
|----------|------|
| `strName` | 컴포넌트 ID |
| `vLeft` | left (px 또는 "기준컴포넌트id:offset") |
| `vTop` | top |
| `vWidth` | width |
| `vHeight` | height |
| `vRight` | right (vLeft+vWidth 모두 지정 시 무시) |
| `vBottom` | bottom (vTop+vHeight 모두 지정 시 무시) |

> `vLeft`에 `"Button00:10"` 형식으로 기준 컴포넌트를 지정하면 해당 컴포넌트 기준으로 상대 배치.

---

## 이벤트 파라미터(EventInfo) 정리

이벤트 핸들러 함수의 두 번째 파라미터 `e`(EventInfo 오브젝트)에 담기는 주요 속성들.

### 공통 이벤트 파라미터

| 속성 | 타입 | 설명 | 사용 이벤트 |
|------|------|------|------------|
| `e.id` | String | 이벤트 발생 컴포넌트 ID | 모든 이벤트 |
| `e.userdata` | Any | 이벤트에 첨부된 사용자 데이터 | 모든 이벤트 |

### 키보드 이벤트 파라미터 (onkeydown, onkeyup, onkeypress)

| 속성 | 타입 | 설명 |
|------|------|------|
| `e.keycode` | Number | 키 코드 값 (Enter=13, Esc=27, Space=32, F5=116 등) |
| `e.charcode` | Number | 문자 코드 값 |
| `e.ctrlKey` | Boolean | Ctrl 키 누름 여부 |
| `e.shiftKey` | Boolean | Shift 키 누름 여부 |
| `e.altKey` | Boolean | Alt 키 누름 여부 |

```javascript
// 주요 키코드 상수
// Enter=13, Esc=27, Tab=9, Space=32, BackSpace=8
// 방향키: Left=37, Up=38, Right=39, Down=40
// F1~F12: 112~123
// Delete=46, Insert=45, Home=36, End=35, PageUp=33, PageDown=34
// A~Z: 65~90, 0~9: 48~57

this.Form_onkeydown = function(obj, e) {
    if (e.ctrlKey && e.keycode == 83) { this.fn_save(); return false; } // Ctrl+S
    if (e.keycode == 13)              { this.fn_search(); return false; } // Enter
    if (e.keycode == 27)              { this.close(); return false; }     // Esc
};
```

### 마우스 이벤트 파라미터 (onclick, onmousemove, onmousedown 등)

| 속성 | 타입 | 설명 |
|------|------|------|
| `e.clientx` | Number | 컴포넌트 기준 마우스 X 좌표 |
| `e.clienty` | Number | 컴포넌트 기준 마우스 Y 좌표 |
| `e.screenx` | Number | 화면 기준 마우스 X 좌표 |
| `e.screeny` | Number | 화면 기준 마우스 Y 좌표 |
| `e.button` | Number | 마우스 버튼 (0=왼쪽, 1=가운데, 2=오른쪽) |

### Grid 이벤트 파라미터

| 속성 | 타입 | 설명 | 사용 이벤트 |
|------|------|------|------------|
| `e.row` | Number | 클릭/편집 대상 행 인덱스 | oncellclick, oncelldbclick, ongetcellstyle 등 |
| `e.cell` | Number | 클릭/편집 대상 컬럼 인덱스 | oncellclick, oncelldbclick 등 |
| `e.col` | Number | 실제 컬럼 인덱스 (병합 셀 고려) | oncellclick |
| `e.subrow` | Number | 서브 행 인덱스 (멀티라인 행) | oncellclick |
| `e.userdata` | Any | ondrag 이벤트 시작 시 설정한 데이터 | ondrop |

```javascript
this.grdMain_oncellclick = function(obj, e) {
    var row  = e.row;   // 행 인덱스
    var col  = e.cell;  // 컬럼 인덱스
    var val  = obj.getCellText(e.row, e.cell);
};

// Grid 드래그앤드롭
this.grdMain_ondragstart = function(obj, e) {
    e.userdata = e.row;                 // 시작 행 저장
};
this.grdMain_ondrop = function(obj, e) {
    var srcRow = e.userdata;            // 저장된 시작 행
    obj.dataset.moveRow(srcRow, e.row); // 행 이동
};
```

### Dataset 이벤트 파라미터

| 속성 | 타입 | 설명 | 사용 이벤트 |
|------|------|------|------------|
| `e.reason` | Number | 이벤트 발생 이유 코드 | onload, oncolumnchanged 등 |
| `e.row` | Number | 변경된 행 인덱스 | onrowposchanged, oncolumnchanged |
| `e.col` | Number | 변경된 컬럼 인덱스 | oncolumnchanged |
| `e.prerow` | Number | 변경 전 행 인덱스 | onrowposchanged |
| `e.prevalue` | Any | 변경 전 값 | oncolumnchanged |

```javascript
// Dataset onload reason 코드
// 0: 초기화, 1: transaction 응답, 2: filter 변경
// 3: keystring 변경, 4: copyData

this.dsMain_onload = function(obj, e) {
    switch (e.reason) {
        case 0: break; // 초기화
        case 1:        // 서버에서 데이터 로드 완료
            this.fn_afterLoad();
            break;
    }
};

// 컬럼 값 변경 감지
this.dsMain_oncolumnchanged = function(obj, e) {
    var changedRow = e.row;
    var changedCol = e.col;  // 컬럼 인덱스
    var oldVal     = e.prevalue;
    var newVal     = obj.getColumn(e.row, e.col);
};
```

### Transaction 콜백 파라미터

| 파라미터 | 타입 | 설명 |
|----------|------|------|
| `svcId` | String | transaction() 호출 시 지정한 서비스 ID |
| `errCode` | Number | 0=성공, 음수=시스템오류, 양수=업무오류 |
| `errMsg` | String | 오류 메시지 |

```javascript
this.fn_callback = function(svcId, errCode, errMsg) {
    if (errCode < 0) { alert("시스템 오류: " + errMsg); return; }
    if (errCode > 0) { alert("업무 오류: " + errMsg); return; }
    // 성공 처리
};
```

### 기타 이벤트 파라미터

| 이벤트 | 파라미터 | 설명 |
|--------|----------|------|
| `Form_ontimer` | `e.timerid` | 발생한 타이머 키값 |
| `Tab_onchanged` | `e.preindex`, `e.postindex` | 변경 전/후 탭 인덱스 |
| `Combo_onitemchanged` | `e.prevalue`, `e.postvalue` | 변경 전/후 값 |
| `Calendar_oncloseup` | `e.value` | 선택한 날짜 값 |
| `FileUpTransfer_onsuccess` | `e.reason` | 9=파일정보조회완료, 1=업로드완료 |
| `Form_onlayoutchanged` | `e.oldlayout`, `e.newlayout` | 변경 전/후 레이아웃명 |
| `Grid_ongetcellstyle` | `e.row`, `e.cell`, `e.style` | 셀 스타일 동적 변경 시 |

---

## CheckBoxSet 상세

```
여러 개의 후보값 중 1개 이상을 동시에 선택하는 컴포넌트 (CheckBox 집합)
innerdataset/codecolumn/datacolumn 속성으로 데이터 공급
rowcount/columncount/direction 속성으로 배치 방향 설정 (-1=자동)
fittocontents: "none"|"width"|"height"|"both"
Space: 선택 결정/취소, Shift+방향키: 연속 다중 선택
```

```javascript
// 선택된 값 읽기 (체크박스 값은 truevalue 기준)
var val = this.chkSet.value;        // 체크된 아이템 값 (콤마 구분)
var cnt = this.chkSet.selectedcount; // 선택된 아이템 수

// 이벤트: oncheckboxchanged
this.chkSet_oncheckboxchanged = function(obj, e) {
    trace(e.prevalue, e.postvalue); // 변경 전/후 값
};
```

---

## DateField 상세

```
날짜와 시간을 레이블+입력박스+헬퍼텍스트 일체형으로 제공하는 컴포넌트 (v24)
format 속성: 날짜/시간 마스크 형식 (예: "yyyy-MM-dd", "yyyy-MM-dd HH:mm:ss")
inputtype: "date"|"datetime"|"time"
popuptype: "normal"|"mobile"
Controls: label, helpertext, nulltext, box(DateFieldBoxControl), datetimepicker
모바일 환경에서는 편집창 터치 시 DateTimePicker 팝업 표시
dropbutton과 팝업달력이 겹치면 즉시 닫히는 현상 주의 (iconbuttonsize 조정)
```

```javascript
// 값 읽기/쓰기
var sDate = this.df_start.value;   // "20260101" 또는 "20260101120000000"
this.df_start.set_value("20260101");

// 이벤트
this.df_start_oncloseup = function(obj, e) {
    // DateTimePicker 팝업이 닫힐 때
};
```

---

## GroupBox 상세

```
border 영역에 타이틀이 있는 그룹 컨테이너 컴포넌트
titlealign: 타이틀 위치 ("top-left"|"top-center"|"top-right"|"left-top" 등)
titlegap: 타이틀과 테두리 사이 간격
Controls: groupboxtitle(IconTextControl), groupboxcontents(Static)
내부에 컴포넌트를 배치하는 컨테이너로 사용
```

```javascript
// 동적 생성 예
var gb = new GroupBox("gb_info", 10, 10, 400, 200);
this.addChild("gb_info", gb);
gb.set_text("사용자 정보");
gb.show();
```

---

## ListView 상세

```
Dataset의 내용을 Body/Detail 밴드 아이템 단위로 표현하는 컴포넌트 (Grid의 가드 뷰)
항상 Dataset과 바인딩하여 사용
Body 밴드: 기본 표시 영역, Detail 밴드: 확장 영역 (Ctrl+Alt+E로 토글)
셀에 Combo/CheckBox/Image/ProgressBar/Edit 컨트롤 포함 가능
binddataset 속성으로 Dataset 연결
Controls: body(ListViewBandControl), detail(ListViewDetailBandControl), vscrollbar, vscrollindicator
```

```javascript
// 이벤트 패턴
this.lv_main_oncellclick = function(obj, e) {
    var rowIdx  = e.row;
    var bandIdx = e.bandindex;  // 0=body
    var cellIdx = e.cell;
};

this.lv_main_onbandstatuschanged = function(obj, e) {
    // Detail 밴드 확장/축소
    trace(e.row, e.expandstate);
};
```

---

## Menu 상세

```
MenuBar 또는 PopupMenu를 구성하는 컴포넌트
Dataset 바인딩 가능: levelcolumn, iconcolumn, captioncolumn, enablecolumn
trackPopup() 메서드로 마우스 오른쪽 클릭 위치에 팝업메뉴 표시
Controls: menupopupmenu(PopupMenu), menuitem(MenuItemControl), prevbutton, nextbutton
```

```javascript
// Dataset 바인딩 방식
// XML: <Menu innerdataset="dsMenu" levelcolumn="LEVEL" captioncolumn="CAPTION"
//            enablecolumn="ENABLE" iconcolumn="ICON" .../>

// 동적 메뉴 아이템 추가
this.mn_main.insertItem(0, "아이템1", "CODE1", null, 1);

// onmenuclick 이벤트
this.mn_main_onmenuclick = function(obj, e) {
    trace(e.code);    // 메뉴 코드
    trace(e.level);   // 메뉴 레벨
};

// 오른쪽 클릭 팝업 메뉴
this.Form_oncontextmenu = function(obj, e) {
    this.mn_popup.trackPopup(e.screenx, e.screeny);
    return false; // 브라우저 기본 컨텍스트 메뉴 차단
};
```

---

## Panel 상세

```
두 개 이상의 컴포넌트를 그룹화하는 컨테이너 (레이아웃 목적)
Nexacro Studio: 컴포넌트 다중 선택 → 우클릭 → [Group by panel]로 생성
Panel 삭제 시 내부 컴포넌트도 같이 삭제됨 — 해제는 [Ungroup panels] 사용
Status: disabled, mouseover, focused, enabled
```

---

## PopupMenu 상세

```
Menu 컴포넌트의 하위 메뉴 또는 독립 팝업 메뉴
trackPopup(x, y) 또는 trackPopupByComponent(comp, align)으로 표시
Controls: popupmenuitem, prevbutton, nextbutton
```

```javascript
// 버튼 우클릭 시 팝업메뉴 표시
this.btn_more_oncontextmenu = function(obj, e) {
    this.pm_action.trackPopupByComponent(obj, "bottom-left");
    return false;
};

// 메뉴 클릭 처리
this.pm_action_onmenuclick = function(obj, e) {
    switch (e.code) {
        case "EDIT":   this.fn_edit();   break;
        case "DELETE": this.fn_delete(); break;
    }
};
```

---

## Spin 상세

```
일정 범위 내의 숫자값을 스핀버튼으로 증감 입력하는 컴포넌트
value는 문자열 타입 — 수학 연산 시 Number()로 형변환 필요
min/max: 허용 범위, increment: 증감 단위
type: "normal"(기본) | "spinonly"(편집창 없음)
buttonposition: "right"(기본) | "left"
Controls: spinedit(MaskEdit), spinupbutton, spindownbutton
```

```javascript
// 값 읽기 (문자열을 숫자로 변환)
var nVal = Number(this.spn_qty.value);
this.spn_qty.set_value(10);

// 이벤트
this.spn_qty_onspin = function(obj, e) {
    trace(e.postvalue); // 변경 후 값
};
```

---

## TextField 상세

```
단일행 텍스트 입력 — 레이블/입력박스/헬퍼텍스트/글자수 일체형 컴포넌트 (v24)
label: floating 레이블 (labelposition: "top"|"inside"|"left"|"right")
helpertext: 하단 보조 텍스트
charcounttext: 글자수 표시 (maxlength 설정 시 "현재/최대" 형식)
inputtype/pattern 속성으로 입력 형식 및 유효성 검사
prefixtext/postfixtext: 앞뒤 고정 텍스트
leadingbutton/trailingbutton: 앞뒤 아이콘 버튼
Controls: box(TextFieldBoxControl), helpertext, charcounttext, label, nulltext
```

```javascript
// 값 읽기/쓰기
var val = this.tf_name.value;
this.tf_name.set_value("홍길동");

// 유효성 검사 속성 설정
this.tf_email.inputtype = "email";    // 이메일 형식 검사
this.tf_phone.pattern   = "010-[0-9]{4}-[0-9]{4}";
```

---

## MultiLineTextField 상세

```
여러 줄 텍스트 입력 — 레이블/입력박스/헬퍼텍스트/글자수 일체형 컴포넌트 (v24)
TextField의 멀티라인 버전 — 같은 속성 체계 공유
Controls: box(MultiLineTextFieldBoxControl), helpertext, charcounttext, label, nulltext,
          vscrollbar, hscrollbar, vscrollindicator, hscrollindicator
```

---

## SelectField 상세

```
미리 설정된 아이템 리스트에서 1개를 선택하는 컴포넌트 (v24)
Combo의 향상된 버전 — 레이블/입력박스/헬퍼텍스트 일체형
innerdataset/codecolumn/datacolumn으로 아이템 공급
type: "dropdown"(기본) | "search"(검색 가능) | "filter"(필터 가능)
선택 목록은 ListBox 컨트롤로 표시
Controls: box(SelectFieldBoxControl), label, nulltext, selectfieldlist(ListBox)
```

```javascript
// 값 읽기/쓰기
var code = this.sf_dept.value;   // code 값 (codecolumn)
var text = this.sf_dept.text;    // 표시 텍스트 (datacolumn)
this.sf_dept.set_value("A01");

// 이벤트
this.sf_dept_onitemchanged = function(obj, e) {
    trace(e.prevalue, e.postvalue);
};
```

---

## DateRangePicker 상세

```
1개 또는 2개(시작/종료)의 날짜와 시간을 선택하는 달력 컴포넌트 (v24)
type: "date"(기본) | "range"(범위 선택)
displaytype: "date" | "datetime" | "time"
displaymonthcount: 동시 표시할 달력 수 (range 모드에서 2로 설정 권장)
direction: "horizontal"(기본) | "vertical" (달력 2개 배치 방향)
값 읽기: startdate, enddate 속성
Controls: headline, datepickergroup, timepickergroup, closebutton, okbutton, cancelbutton
DateField의 datetimepicker 컨트롤로도 내부 사용됨
```

```javascript
// 범위 선택 값 읽기
var sStart = this.drp_period.startdate;  // "20260101"
var sEnd   = this.drp_period.enddate;    // "20260131"

// 이벤트
this.drp_period_ondayclick = function(obj, e) {
    trace(e.date);  // 클릭한 날짜
};
```

---

## WebBrowser 상세

```
웹페이지를 로딩하고 화면에 표시하는 컴포넌트
url 속성으로 로드할 URL 설정
navigate(url) 메서드로 페이지 이동
reload() 메서드로 새로고침
NRE(Windows)에서는 IE 기반 — IE 미지원 콘텐츠는 WebView 컴포넌트 사용
```

```javascript
// URL 설정 및 로드
this.wb_main.set_url("https://www.example.com");
this.wb_main.navigate("https://www.example.com/page");
this.wb_main.reload();

// 이벤트
this.wb_main_onload = function(obj, e) {
    // 페이지 로드 완료
};
this.wb_main_onusernotify = function(obj, e) {
    // 웹 페이지에서 nexacro로 메시지 전달 시
    trace(e.message);
};
```

---

## ImageViewer 상세

```
이미지를 화면에 출력하는 컴포넌트 (커스텀 버튼 제작에도 활용)
src 속성으로 이미지 경로 설정
stretch: "none"(원본) | "fit"(맞춤) | "zoom"(비율유지맞춤) | "max"(최대맞춤)
imagealign: 이미지 정렬 (예: "center middle")
fittocontents: "none"|"width"|"height"|"both" (이미지 크기에 맞게 컴포넌트 크기 조정)
Controls: imagearea(ImageAreaControl), imagetext(Static)
```

```javascript
// 이미지 설정
this.iv_logo.set_src("url('images/logo.png')");

// 이벤트
this.iv_logo_onclick = function(obj, e) {
    // 클릭 처리
};
```

---

## FileDialog 상세

```
파일 열기/저장 대화상자 Invisible 컴포넌트
showOpen() — 파일 열기 대화상자
showSave() — 파일 저장 대화상자
filter 속성으로 파일 확장자 필터 설정 (예: "이미지 (*.jpg)|*.jpg|모든파일|*.*")
WRE 환경에서도 일부 지원 (속성별 제약 있음)
```

```javascript
var fd = new FileDialog("fd_main", this);
this.addChild(fd.name, fd);
fd.filter = "엑셀 (*.xlsx)|*.xlsx|모든 파일 (*.*)|*.*";
fd.addEventHandler("onselect", this.fd_onselect, this);
fd.showOpen();

this.fd_onselect = function(obj, e) {
    var vf = e.virtualfiles[0];  // VirtualFile 오브젝트
    vf.getFileInfo();            // 파일 정보 조회 시작
};
```

---

## FileDownload 상세

```
파일 다운로드 UI 컴포넌트 (링크 형태)
downloadurl 속성으로 다운로드 URL 설정
클릭 시 파일 다운로드 실행
FileDownTransfer(invisible)의 UI 버전
Status: disabled, pushed, mouseover, focused, enabled
```

---

## FileDownTransfer 상세

```
서버로부터 파일을 다운로드하는 Invisible 오브젝트
HTTP/HTTPS POST 방식으로 파일 다운로드
url 속성으로 다운로드 URL 설정, localpath 속성으로 저장 경로 설정
download() 메서드로 다운로드 시작
onsuccess/onerror 이벤트는 WRE(브라우저) 환경에서 미발생
```

```javascript
var fd = new nexacro.FileDownTransfer("fd00", this);
this.addChild("fd00", fd);
fd.url = "http://server/download?file=sample.xlsx";
fd.localpath = "C:/downloads/";
fd.addEventHandler("onsuccess", this.fd_onsuccess, this);
fd.download();

this.fd_onsuccess = function(obj, e) {
    alert("다운로드 완료: " + obj.localpath + obj.filename);
};
```

---

## FileUpload 상세

```
파일 업로드 UI 컴포넌트 (편집창+찾기버튼 세트)
itemcount: 표시할 업로드 아이템 수
itemheight: 각 아이템 높이
upload(url) 메서드로 서버에 파일 전송
FileUpTransfer(invisible)의 UI 버전
Controls: fileuploaditem(FileUploadItemControl), vscrollbar, vscrollindicator
```

```javascript
// 업로드 실행
this.fu_main.upload("http://server/upload");

// 이벤트
this.fu_main_onsuccess = function(obj, e) {
    alert("업로드 완료");
};
this.fu_main_onerror = function(obj, e) {
    alert("업로드 실패: " + e.errormsg);
};
```

---

## VirtualFile 상세

```
로컬 파일을 읽거나 쓰기 위한 가상 파일 Invisible 오브젝트
WRE(브라우저)에서는 단독 사용 불가 — FileUpload/FileUpTransfer/FileDialog/DragEventInfo의
filelist 속성으로 제공될 때만 사용 가능
NRE(네이티브)에서는 독립적으로 파일 R/W 가능
2GB 이상 파일은 처리 제한 있음
```

```javascript
// NRE 환경 — 파일 읽기
var vf = new VirtualFile("vf00", this);
this.addChild(vf.name, vf);
vf.open("C:/data/sample.txt", "r");
var content = vf.read();
vf.close();

// WRE 환경 — drag&drop으로 얻은 VirtualFile 사용
this.grd_main_ondrop = function(obj, e) {
    if (e.datatype == "file") {
        for (var i = 0; i < e.filelist.length; i++) {
            var vf = e.filelist[i];
            vf.addEventHandler("onsuccess", this.fn_fileInfo, this);
            vf.getFileInfo();  // 파일 정보 조회 (reason=9에서 완료)
        }
    }
};
```

---

## Application 상세

```
애플리케이션의 기본 정보와 환경을 관리하는 최상위 오브젝트
nexacro.getApplication()으로 접근
전역 변수 관리: addVariable(), getVariable()
전역 Dataset 관리: getDataset()
서비스 관리: services 컬렉션
멀티스크린 환경: mainFrame, mainFrameCount
```

```javascript
// 전역 변수
var app = nexacro.getApplication();
app.addVariable("USER_ID",   "hong");
app.addVariable("USER_ROLE", "ADMIN");
var userId = app.getVariable("USER_ID");

// 전역 Dataset 접근
var dsGlobal = app.getDataset("dsGlobalCode");

// 서비스 설정 접근
var baseUrl = app.services["base"].url;

// 애플리케이션 종료
app.exit();
```

---

## Environment 상세

```
프로젝트 환경정보를 저장/관리하는 오브젝트
nexacro.getEnvironment()로 접근
locale: 애플리케이션 로케일 (예: "ko-KR")
usewaitcursor: 처리 중 대기 커서 표시 여부
services: 서비스 컬렉션 (URL, cachelevel 등)
variables/cookies: 환경 변수/쿠키 관리
```

```javascript
var env = nexacro.getEnvironment();

// 서비스 캐시 설정 변경
env.services["base"].cachelevel = "none";

// 로케일 확인
trace(env.locale);  // "ko-KR"
```

---

## System 상세

```
운영체제, 하드웨어, 입력장치 정보를 제공하는 오브젝트
system 전역객체로 직접 접근 (nexacro.getSystem() 불필요)
OS/브라우저에 따라 지원 기능 상이
```

```javascript
// 환경 정보 확인
trace(system.osversion);     // OS 버전
trace(system.browsertype);   // 브라우저 타입
trace(system.screenwidth);   // 화면 너비
trace(system.screenheight);  // 화면 높이
trace(system.devicetype);    // "desktop" | "mobile" | "tablet"
```

---

## MainFrame 상세

```
애플리케이션의 기본 화면 — 앱당 1개
하위 구성: FrameSet, HFrameSet, VFrameSet, TileFrameSet, ChildFrame 중 1개
Controls: titlebar(TitleBarControl), statusbar(StatusBarControl)
Status: disabled, deactivate, enabled
font 속성이 rem 단위의 기준(root font-size) 역할
```

```javascript
// MainFrame에 접근
var mf = nexacro.getApplication().mainframe;

// 타이틀 변경
mf.titlebar.set_text("시스템명 - 화면명");

// StatusBar 메시지 설정
mf.statusbar.set_text("준비됨");
```

---

## ChildFrame 상세

```
MainFrame, FrameSet, HFrameSet, VFrameSet, TileFrameSet 하위에 올 수 있는 Frame
formurl 속성으로 Form을 로딩하여 표시하는 기본 단위 화면
모달 팝업으로도 사용 가능 (showModal() 메서드)
Status: disabled, deactivate, enabled
Controls: titlebar(TitleBarControl), statusbar(StatusBarControl)
```

```javascript
// formurl로 Form 로딩
this.cfMain.set_formurl("Base::MainForm.xfdl");

// 모달 ChildFrame 동적 생성
var cf = new ChildFrame();
cf.init("cf_popup", 0, 0, 400, 300, null, null);
cf.set_formurl("Form::PopupForm.xfdl");
cf.openalign  = "center middle";
cf.resizable  = true;
cf.overlaycolor = "rgba(0,0,0,0.3)";
cf.showModal(this.getOwnerFrame());

// 이벤트
this.cf_popup_onclose = function(obj, e) {
    trace(obj.returnValue);  // 팝업 반환값
};
```

---

## FrameSet / HFrameSet / VFrameSet / TileFrameSet 상세

```
MainFrame 하위에서 화면 배열을 위한 프레임 컨테이너들
FrameSet: 자유 배열 (하위 Frame 위치 자유롭게 지정)
HFrameSet: 수평 자동 배열 (가로 방향으로 하위 Frame 순서대로 배치)
VFrameSet: 수직 자동 배열 (세로 방향으로 하위 Frame 순서대로 배치)
TileFrameSet: 타일 형식 배열
모두 FrameSet, HFrameSet, VFrameSet, TileFrameSet, ChildFrame 재귀 포함 가능
Status: disabled, deactivate, enabled
Controls: titlebar(TitleBarControl), statusbar(StatusBarControl)
```

---

## Div 상세

```
하나의 화면에 여러 개의 부분화면을 구성하는 컨테이너 컴포넌트
url 속성으로 외부 .xfdl Form을 로드 가능
border, scrollbar로 영역 분할 가능
깊이 2~3단계 권장 (4~5단계 이상 시 초기화 속도 저하)
type="horizontal"|"vertical": 자식 컴포넌트 자동 배열
Status: disabled, mouseover, focused, enabled
```

---

## View 상세

```
Form 오브젝트에만 배치 가능한 부분화면 컨테이너 (Div와 유사)
Div와 달리 외부 Form(.xfdl)을 url로 연결 불가
QuickCode 개발 환경에서 Model-View Template 자동 배치 용도로 주로 사용
Status: disabled, mouseover, focused, enabled
```

---

## Animation / AnimationTimeline 상세

```
Animation: 컴포넌트에 애니메이션 효과를 적용하는 Invisible 오브젝트
- 스크립트로만 생성 (new nexacro.Animation() 필수)
- addTarget(itemId, component, "속성:목표값") 으로 AnimationItem 등록
- play()/pause()/stop() 메서드로 제어
- duration, easing, loop, direction 속성으로 동작 제어

AnimationTimeline: 키프레임 기반 애니메이션 오브젝트 (v24)
- 여러 AnimationTimelineItem을 시간축(timeline)으로 조합
- 복잡한 다단계 애니메이션 구현 시 사용
```

```javascript
// Animation 생성
var ani = new nexacro.Animation("Ani00", this);
this.addChild("Ani00", ani);
ani.duration  = 1000;
ani.loop      = true;
ani.direction = "alternate";
ani.easing    = "ease-in-out";
ani.addTarget("item0", this.btn00, "left:300, width:200");
ani.play();

// 이벤트
ani.addEventHandler("onbegin", this.ani_onbegin, this);
ani.addEventHandler("onend",   this.ani_onend,   this);
```

---

## Graphics 상세

```
도형, 선, 이미지, 경로, 텍스트 등을 화면에 그릴 수 있는 컴포넌트
하위 오브젝트: GraphicsGroup, GraphicsRect, GraphicsEllipse,
              GraphicsImage, GraphicsLine, GraphicsPath, GraphicsPaths, GraphicsText
Status: disabled, mouseover, focused, enabled
```

```javascript
// Graphics + 도형 오브젝트 생성
var grp = new Graphics("grp00", 0, 0, 400, 300);
this.addChild("grp00", grp);
grp.show();

var rect = new Graphics_GraphicsRect("rect0", grp);
rect.init("rect0", 10, 10, 100, 50);
rect.set_fillcolor("#4A90D9");
rect.set_strokecolor("#000000");
grp.addChild("rect0", rect);
grp.redraw();
```

---

## WebView 상세

```
웹페이지를 로딩하고 표시하는 컴포넌트 (WebBrowser 업그레이드 버전)
Windows NRE: Microsoft Edge WebView2 Control 기반 (WebBrowser의 IE 제약 해소)
Edge WebView2가 미설치된 경우 Environment.onerror 발생 (설치 안내 메시지)
추가 메서드: goBack(), goForward(), callScript()
미지원 메서드: setProperty(), getProperty(), callMethod()
Status: disabled, mouseover, focused, enabled
```

```javascript
// URL 로드
this.wv_main.set_url("https://www.example.com");
this.wv_main.navigate("https://www.example.com/page");
this.wv_main.goBack();
this.wv_main.goForward();

// 웹 페이지 내 스크립트 호출
this.wv_main.callScript("functionName", "arg1", "arg2");
```

---

## VideoPlayer 상세

```
비디오 파일 및 스트림을 재생하는 컴포넌트
오디오 파일/스트림도 재생 가능
src 속성으로 재생 파일 URL 설정
play(), pause(), stop() 메서드로 재생 제어
Status: disabled, mouseover, focused, enabled
```

```javascript
this.vp_main.set_src("http://server/video/sample.mp4");
this.vp_main.play();
this.vp_main.pause();
this.vp_main.stop();

// 재생 상태 이벤트
this.vp_main_onplaystatechanged = function(obj, e) {
    trace(e.prestate, e.poststate);  // "playing", "paused", "stopped"
};
```

---

## Sketch 상세

```
사용자가 직접 화면에 도형이나 서명을 그릴 수 있는 컴포넌트
touch/mouse 이벤트로 드로잉 입력
getDataURL() 메서드로 그린 내용을 Base64 이미지로 추출
clear() 메서드로 전체 지우기
Controls: sketchtextarea(TextArea)
Status: disabled, readonly, mouseover, focused, enabled
```

```javascript
// 그린 내용을 이미지로 저장
var dataUrl = this.skMain.getDataURL("image/png");
this.imgPreview.set_src("url('" + dataUrl + "')");

// 이미지로 Sketch 내용 로드
this.skMain.loadDataURL(dataUrl);

// 전체 지우기
this.skMain.clear();
```

---

## GoogleMap 상세

```
Google Map을 출력하는 컴포넌트
지원: Desktop WRE(Edge/Chrome/Safari/Firefox), Mobile NRE(Android/iOS)
미지원: Desktop NRE, Opera, Mobile WRE
Android NRE: build.gradle에 Google Play Services Maps 라이브러리 추가 필요
마커, 원, 다각형, 폴리라인 등 하위 오브젝트 지원
Status: disabled, mouseover, focused, enabled
```

```javascript
// 지도 초기화
this.gm_main.set_apikey("YOUR_GOOGLE_MAPS_API_KEY");
this.gm_main.setCenter(37.5665, 126.9780);  // 서울 좌표
this.gm_main.set_zoom(12);

// 마커 추가
var marker = new GoogleMap_GoogleMapMarker("mk0", this.gm_main);
marker.set_position(37.5665, 126.9780);
this.gm_main.addChild("mk0", marker);
```

---

## DomParser / XmlSerializer 상세

```
DomParser: XML 문자열 → DOMDocument 오브젝트 변환
- new nexacro.DomParser() 로 생성
- parseFromString(strXML) → DOMDocument

XmlSerializer: DOMDocument → XML 문자열 변환
- new nexacro.XmlSerializer() 로 생성
- serializeToString(objDOM) → XML 문자열

둘 다 JS 표준 DOMParser/XMLSerializer와 별도로 넥사크로에서 제공
모든 플랫폼/브라우저 지원
```

```javascript
// XML 파싱 → DOM → 수정 → 다시 문자열
var parser = new nexacro.DomParser();
var dom    = parser.parseFromString("<root><item>value</item></root>");
var node   = dom.documentElement.childNodes[0];
trace(node.textContent);

var serializer = new nexacro.XmlSerializer();
var strResult  = serializer.serializeToString(dom);
```

---

## XAgent 상세

```
X-AGENT 서버와 통신하는 클라이언트 컴포넌트
지원: Windows NRE, WRE(Edge/Chrome/Firefox)
미지원: macOS, Mobile, Opera, Safari
서버 측 업무 로직을 원격 에이전트로 실행하는 데 사용
```

---

## TCPClientSocket 상세

```
TCP 통신으로 서버에 연결하여 데이터를 송수신하는 클라이언트 컴포넌트
지원: Desktop NRE(Windows/macOS), Mobile NRE — WRE에서는 미지원
1:1 연결 방식의 TCP 소켓
connect(host, port), send(data), close() 메서드 제공
```

```javascript
var sock = new TCPClientSocket("sock00", this);
this.addChild(sock.name, sock);
sock.addEventHandler("onsuccess", this.sock_onsuccess, this);
sock.addEventHandler("onerror",   this.sock_onerror,   this);
sock.addEventHandler("onreceive", this.sock_onreceive, this);
sock.connect("127.0.0.1", 8888);
sock.send("HELLO");

this.sock_onreceive = function(obj, e) {
    trace(e.data);
};
```

---

## LiteDBConnection / LiteDBStatement 상세

```
LiteDBConnection: SQLite 데이터베이스 연결/제어 오브젝트
LiteDBStatement: SQL 실행 오브젝트

지원: Windows NRE, Mobile NRE(Android/iOS) — WRE 미지원
SQLite 데이터베이스 전용
```

```javascript
// DB 연결 및 쿼리 실행
var db = new LiteDBConnection("db00", this);
this.addChild(db.name, db);
db.open("database.db");

var stmt = new LiteDBStatement("stmt00", this);
stmt.init("stmt00", db);
stmt.executeQuery("SELECT * FROM users WHERE id = ?", 1);

// 결과 읽기
this.stmt00_onsuccess = function(obj, e) {
    var ds = e.dataset;
    for (var i = 0; i < ds.rowcount; i++) {
        trace(ds.getColumn(i, "USER_NM"));
    }
};
```

---

## PopupDateRangePicker 상세

```
DateRangePicker의 팝업 버전 컴포넌트
DateField에서 ondropdown 이벤트 시 e.preventDefault()로 교체하여 사용
type: "single"(1개 날짜) | "range"(시작~종료 범위)
displaytype: "date" | "datetime" | "time"
Controls: DateRangePicker와 동일
```

```javascript
// DateField에 PopupDateRangePicker 연결
this.DateField00_ondropdown = function(obj, e) {
    e.preventDefault();  // 기본 달력 팝업 차단 → PopupDateRangePicker 표시
    this.pdrp_period.trackPopupByComponent(obj, "bottom-left");
};

this.pdrp_period_oncloseup = function(obj, e) {
    this.df_start.set_value(obj.startdate);
    this.df_end.set_value(obj.enddate);
};
```

---

## NexacroAPI 주요 정적 메서드

```
nexacro 전역에 정의된 정적 유틸리티 메서드 — 생성 없이 바로 사용
```

| 메서드 | 설명 |
|--------|------|
| `nexacro.floor(v, digit)` | 소수점 자릿수 지정 내림 (v24에서 Math.floor 대체) |
| `nexacro.round(v, digit)` | 소수점 자릿수 지정 반올림 |
| `nexacro.ceil(v, digit)` | 소수점 자릿수 지정 올림 |
| `nexacro.getTextSize(str, font)` | 텍스트 렌더링 크기 반환 (`{nx, ny}`) |
| `nexacro.getDate(format)` | 현재 날짜 반환 (예: `"YYYYMMDD"`) |
| `nexacro.getTime(format)` | 현재 시간 반환 (예: `"HHMMSS"`) |
| `nexacro.toBase64(str)` | Base64 인코딩 |
| `nexacro.fromBase64(str)` | Base64 디코딩 |
| `nexacro.getApplication()` | Application 오브젝트 반환 |
| `nexacro.getEnvironment()` | Environment 오브젝트 반환 |

---

## 모바일 전용 컴포넌트 (NRE 전용)

| 컴포넌트 | 용도 | 비고 |
|----------|------|------|
| `AudioPlayer` | 오디오 재생 | Mobile NRE(Android/iOS) |
| `AudioRecorder` | 오디오 녹음 | Mobile NRE |
| `Camera` | 카메라 촬영 | Mobile NRE |
| `ImagePicker` | 갤러리 이미지 선택 | Mobile NRE |
| `QRBarcode` | QR/바코드 스캔 | Mobile NRE (별도 모듈) |
| `QRCodeGenerator` | QR 코드 생성 | |
| `Geolocation` | GPS 위치정보 | Mobile NRE |
| `Network` | 네트워크 연결상태 | Mobile NRE |
| `BluetoothLE` | BLE 통신 | Mobile NRE |
| `Vibrator` | 진동 제어 | Mobile NRE |
| `Phone` | 전화 기능 | Mobile NRE |
| `Sms` | SMS 기능 | Mobile NRE |
| `Contact` / `ContactSet` | 연락처 관리 | Mobile NRE |
| `Acceleration` | 가속도 센서 | Mobile NRE |

---

## 컴포넌트별 Status/Controls 추가 정보

| 컴포넌트 | Status |
|----------|--------|
| ChildFrame | disabled, deactivate, enabled |
| FrameSet / HFrameSet / VFrameSet / TileFrameSet | disabled, deactivate, enabled |
| Div | disabled, mouseover, focused, enabled |
| Static | disabled, mouseover, enabled |
| View | disabled, mouseover, focused, enabled |
| Image (오브젝트) | (Status 없음 — Invisible 오브젝트) |
| Graphics | disabled, mouseover, focused, enabled |
| VideoPlayer | disabled, mouseover, focused, enabled |
| WebView | disabled, mouseover, focused, enabled |
| Sketch | disabled, readonly, mouseover, focused, enabled |
| GoogleMap | disabled, mouseover, focused, enabled |

| 컴포넌트 | Controls |
|----------|----------|
| ChildFrame | titlebar(TitleBarControl), statusbar(StatusBarControl) |
| FrameSet 계열 | titlebar(TitleBarControl), statusbar(StatusBarControl) |
| Sketch | sketchtextarea(TextArea) |

---

## Dataset / VirtualFile / XPush Constant 상수 목록

### Dataset.ROWTYPE_*

| 상수 | 값 | 설명 |
|------|----|------|
| `Dataset.ROWTYPE_EMPTY` | 0 | 존재하지 않는 행 |
| `Dataset.ROWTYPE_NORMAL` | 1 | 초기 행 |
| `Dataset.ROWTYPE_INSERT` | 2 | 추가된 행 |
| `Dataset.ROWTYPE_UPDATE` | 4 | 수정된 행 |
| `Dataset.ROWTYPE_DELETE` | 8 | 삭제된 행 |
| `Dataset.ROWTYPE_GROUP` | 16 | 그룹 정보 행 |

### Dataset onrowsetchanged reason 상수

| 상수 | 값 | 설명 |
|------|----|------|
| `Dataset.REASON_ASSIGN` | 10 | Dataset Assign |
| `Dataset.REASON_COPY` | 11 | Dataset 복사 |
| `Dataset.REASON_APPEND` | 12 | Dataset 추가 |
| `Dataset.REASON_DELETE` | 20 | Row 삭제 |
| `Dataset.REASON_DELETEALL` | 22 | 모든 Row 삭제 |
| `Dataset.REASON_SORTGROUP` | 30 | 정렬/그룹화 |
| `Dataset.REASON_FILTER` | 31 | 필터 적용 |
| `Dataset.REASON_CHANGESTATUS` | 40 | Row 상태 변경 |

### ExcelExportObject exporttype 상수

| 상수 | 설명 |
|------|------|
| `nexacro.ExportTypes.EXCEL97` | 엑셀 97~2003 형식 |
| `nexacro.ExportTypes.EXCEL2007` | 엑셀 2007 XML 형식 (권장) |
| `nexacro.ExportTypes.CSV` | CSV 형식 |
| `nexacro.ExportTypes.TXT` | TXT 형식 |
| `nexacro.ExportItemTypes.GRID` | Export 대상 = Grid |

### VirtualFile open 플래그

| 상수 | 설명 |
|------|------|
| `VirtualFile.openRead` | 읽기 전용 (파일 없으면 실패) |
| `VirtualFile.openWrite` | 쓰기 전용 (파일 새로 생성) |
| `VirtualFile.openAppend` | 추가 쓰기 (파일 없으면 생성) |
| `VirtualFile.openText` | 텍스트 모드 |
| `VirtualFile.openBinary` | 바이너리 모드 |
| `VirtualFile.openCreate` | 없으면 생성, 있으면 기존 열기 |

### XPush onsuccess action 상수

| 상수 | 값 | 설명 |
|------|----|------|
| `nexacro.XPushAction.AUTH` | 0 | 서버 연결 성공 |
| `nexacro.XPushAction.BYEC` | 1 | 연결 해제 성공 |
| `nexacro.XPushAction.ADDF` | 2 | Topic 구독 추가 |
| `nexacro.XPushAction.DELF` | 3 | Topic 구독 해제 |
| `nexacro.XPushAction.REQD` | 4 | 미수신 신뢰성 메시지 요청 |
| `nexacro.XPushAction.RECT` | 5 | 신뢰성 메시지 수신응답 |

---

## nexacro.Date 오브젝트

```
Date 정보를 처리하는 넥사크로 전용 Date 오브젝트
new nexacro.Date() 로 생성 ("nexacro." 필수)
시간을 지정하지 않으면 시/분/초 모두 0으로 설정
Invalid Value Date: new nexacro.Date(undefined)
```

```javascript
var d1 = new nexacro.Date();               // 현재 날짜
var d2 = new nexacro.Date(2026, 0, 1);     // 2026-01-01 (월은 0부터)
var d3 = new nexacro.Date(2026, 0, 1, 9, 0, 0, 0);  // 2026-01-01 09:00:00

// 메서드
trace(d2.getFullYear());   // 2026
trace(d2.getMonth());      // 0 (1월)
trace(d2.getDate());       // 1
trace(d2.toLocaleDateString());

// 넥사크로 내장 날짜 함수 (nexacroN_rules.md NexacroAPI 참조)
var today = nexacro.getDate("YYYYMMDD");  // "20260101"
```

---

## nexacro.Decimal 오브젝트

```
고정소수점 정밀 계산을 위한 넥사크로 전용 Decimal 오브젝트
Dataset BIGDECIMAL 컬럼 타입 처리에 사용
산술연산자(+,-,*,/) 사용 금지 → 제공된 메서드 사용
최대 31자리 (정수부 24자리 + 소수부 15자리 - 합산 최대 31)
```

```javascript
var d1 = new nexacro.Decimal("12345678901234567890.12345");
var d2 = new nexacro.Decimal(100);

// 메서드 (산술연산자 대신 사용)
var sum  = d1.add(d2);       // 덧셈
var diff = d1.subtract(d2);  // 뺄셈
var prod = d1.multiply(d2);  // 곱셈
var quot = d1.divide(d2);    // 나눗셈

trace(sum.toString());

// 비교
var cmp = d1.compareTo(d2);  // -1: d1<d2, 0: 같음, 1: d1>d2
```

---

## 상세 컴포넌트 레퍼런스 (`nexacro_reference/`)

> `nexacro_reference/` 폴더에는 `nexacro_manual.chm`에서 자동 추출된 **컴포넌트별 상세 속성·메서드·이벤트 레퍼런스**가 있다.

### 활용 규칙

1. 특정 컴포넌트의 속성·메서드·이벤트 상세 사양이 필요한 경우 → 해당 MD 파일을 **Read 도구로 직접 읽어서** 확인한다.
2. 아래 표에서 컴포넌트명으로 파일을 찾은 뒤 `nexacro_reference/<파일명>`을 읽는다.
3. 이 rules 파일의 내용과 레퍼런스가 충돌할 경우 → **레퍼런스 파일 우선** (CHM 원문 기준).

### 파일 인덱스

| 파일 | 항목 수 | 주요 컴포넌트/대상 |
|------|---------|------------------|
| [Animation.md](nexacro_reference/Animation.md) | 31개 | Animation 오브젝트 |
| [AnimationTimeline.md](nexacro_reference/AnimationTimeline.md) | 24개 | AnimationTimeline 오브젝트 |
| [Appendix.md](nexacro_reference/Appendix.md) | 27개 | 상수·부록 |
| [Application.md](nexacro_reference/Application.md) | 80개 | Application 오브젝트 |
| [Button.md](nexacro_reference/Button.md) | 136개 | Button |
| [Calendar.md](nexacro_reference/Calendar.md) | 176개 | Calendar |
| [CheckBox.md](nexacro_reference/CheckBox.md) | 135개 | CheckBox |
| [CheckBoxSet.md](nexacro_reference/CheckBoxSet.md) | 140개 | CheckBoxSet |
| [Combo.md](nexacro_reference/Combo.md) | 166개 | Combo |
| [Communication_Objects.md](nexacro_reference/Communication_Objects.md) | 93개 | DataObject, XAgent 등 |
| [Dataset.md](nexacro_reference/Dataset.md) | 171개 | Dataset, VariableList, ColumnInfo |
| [DataObject.md](nexacro_reference/DataObject.md) | 40개 | DataObject (REST/JSON 통신 오브젝트) |
| [DateField.md](nexacro_reference/DateField.md) | 178개 | DateField |
| [DateRangePicker.md](nexacro_reference/DateRangePicker.md) | 147개 | DateRangePicker |
| [DeviceAPI.md](nexacro_reference/DeviceAPI.md) | 272개 | 모바일 디바이스 API |
| [Div.md](nexacro_reference/Div.md) | 141개 | Div |
| [Edit.md](nexacro_reference/Edit.md) | 145개 | Edit |
| [Environment.md](nexacro_reference/Environment.md) | 92개 | Environment 오브젝트 |
| [EventInfo_Objects.md](nexacro_reference/EventInfo_Objects.md) | 1317개 | 이벤트 파라미터 오브젝트 전체 |
| [Event_Objects.md](nexacro_reference/Event_Objects.md) | 5개 | 이벤트 오브젝트 |
| [FileDialog.md](nexacro_reference/FileDialog.md) | 11개 | FileDialog |
| [FileDownTransfer.md](nexacro_reference/FileDownTransfer.md) | 26개 | FileDownTransfer |
| [FileDownload.md](nexacro_reference/FileDownload.md) | 129개 | FileDownload |
| [FileUpTransfer.md](nexacro_reference/FileUpTransfer.md) | 35개 | FileUpTransfer |
| [FileUpload.md](nexacro_reference/FileUpload.md) | 166개 | FileUpload |
| [Form.md](nexacro_reference/Form.md) | 183개 | Form |
| [Frames.md](nexacro_reference/Frames.md) | 535개 | MainFrame, ChildFrame, FrameSet 계열 |
| [GoogleMap.md](nexacro_reference/GoogleMap.md) | 104개 | GoogleMap |
| [Graphics.md](nexacro_reference/Graphics.md) | 396개 | Graphics, 도형 오브젝트 |
| [Grid.md](nexacro_reference/Grid.md) | 690개 | Grid (가장 많은 API) |
| [GroupBox.md](nexacro_reference/GroupBox.md) | 106개 | GroupBox |
| [ImageViewer.md](nexacro_reference/ImageViewer.md) | 137개 | ImageViewer |
| [ListBox.md](nexacro_reference/ListBox.md) | 177개 | ListBox |
| [ListView.md](nexacro_reference/ListView.md) | 429개 | ListView |
| [MaskEdit.md](nexacro_reference/MaskEdit.md) | 148개 | MaskEdit |
| [Menu.md](nexacro_reference/Menu.md) | 157개 | Menu |
| [Misc_Objects.md](nexacro_reference/Misc_Objects.md) | 168개 | 기타 오브젝트 (Timer, VirtualFile 등) |
| [MultiCombo.md](nexacro_reference/MultiCombo.md) | 242개 | MultiCombo |
| [MultiLineTextField.md](nexacro_reference/MultiLineTextField.md) | 165개 | MultiLineTextField |
| [NexacroAPI.md](nexacro_reference/NexacroAPI.md) | 55개 | nexacro 정적 API |
| [Panel.md](nexacro_reference/Panel.md) | 132개 | Panel |
| [Plugin.md](nexacro_reference/Plugin.md) | 72개 | Plugin |
| [PopupDateRangePicker.md](nexacro_reference/PopupDateRangePicker.md) | 147개 | PopupDateRangePicker |
| [PopupDiv.md](nexacro_reference/PopupDiv.md) | 125개 | PopupDiv |
| [PopupMenu.md](nexacro_reference/PopupMenu.md) | 132개 | PopupMenu |
| [ProgressBar.md](nexacro_reference/ProgressBar.md) | 127개 | ProgressBar |
| [Radio.md](nexacro_reference/Radio.md) | 158개 | Radio |
| [Script.md](nexacro_reference/Script.md) | 131개 | Script 오브젝트 |
| [SelectField.md](nexacro_reference/SelectField.md) | 165개 | SelectField |
| [Sketch.md](nexacro_reference/Sketch.md) | 144개 | Sketch |
| [Spin.md](nexacro_reference/Spin.md) | 147개 | Spin |
| [SpinField.md](nexacro_reference/SpinField.md) | 151개 | SpinField |
| [Static.md](nexacro_reference/Static.md) | 113개 | Static |
| [System_Component.md](nexacro_reference/System_Component.md) | 550개 | System, Screen, Geolocation 등 |
| [Tab.md](nexacro_reference/Tab.md) | 277개 | Tab |
| [TextArea.md](nexacro_reference/TextArea.md) | 167개 | TextArea |
| [TextField.md](nexacro_reference/TextField.md) | 154개 | TextField |
| [VideoPlayer.md](nexacro_reference/VideoPlayer.md) | 86개 | VideoPlayer |
| [View.md](nexacro_reference/View.md) | 141개 | View |
| [VirtualFile.md](nexacro_reference/VirtualFile.md) | 35개 | VirtualFile |
| [WebBrowser.md](nexacro_reference/WebBrowser.md) | 85개 | WebBrowser |
| [WebView.md](nexacro_reference/WebView.md) | 86개 | WebView |

### 주요 사용 시나리오

```
Grid 속성 확인       → nexacro_reference/Grid.md 읽기
Dataset API          → nexacro_reference/Dataset.md 읽기
DataObject API       → nexacro_reference/DataObject.md 읽기
이벤트 파라미터      → nexacro_reference/EventInfo_Objects.md 읽기
환경 설정            → nexacro_reference/Environment.md 읽기
NexacroAPI           → nexacro_reference/NexacroAPI.md 읽기
Frame 구조           → nexacro_reference/Frames.md 읽기
```

---

## nexacrolib 엔진 구조 (`nexacrolib/nexacrolib/`)

> **위치**: `D:\git_prj\cursor_project\nexacrolib\nexacrolib\`
>
> nexacro N v24 엔진 자체를 구성하는 JS 라이브러리 소스. 컴포넌트 내부 동작 원리 파악, 커스텀 모듈 개발, 디버깅 시 참조한다.

### 최상위 구조

```
nexacrolib/nexacrolib/
├── nexacrolib.json         — 라이브러리 메타정보 (버전, 폴더 목록)
├── framework/              — 시스템 코어 (초기화, 플랫폼 추상화, 암호화)
├── component/              — UI 컴포넌트 라이브러리 (Button, Grid, Dataset 등)
└── resources/              — 공통 리소스 (이미지 등)
```

**nexacrolib.json 핵심 정보**:
```json
{
  "Nexacro N": {
    "version": "24.0.0.9999",
    "type": "framework",
    "cssruleversion": "1.3",
    "resources": [
      { "folder": "component" },
      { "folder": "framework" },
      { "folder": "resources" }
    ]
  }
}
```

---

### framework/ — 시스템 코어

| 파일명 | 크기 | 역할 |
|--------|------|------|
| `SystemBase.js` | 143KB | 시스템 초기화, 프로토타입 생성 엔진(`_createPrototype`) |
| `SystemBase_HTML5.js` | 671KB | WRE(웹 브라우저) + iOS_NRE 런타임 구현 |
| `SystemBase_Runtime.js` | 349KB | NRE(Native Runtime) 구현 |
| `Platform.js` | 728KB | **최대 파일** — 전역 객체 등록, 컴포넌트 glue code |
| `Platform_HTML5.js` | 188KB | HTML5 플랫폼 특화 |
| `Platform_Runtime.js` | 84KB | Runtime 플랫폼 특화 |
| `BasicObjs.js` | 143KB | 기본 객체 정의 (Point, Rect, Size, Decimal, Date, Image) |
| `CssObjs.js` | 56KB | CSS 객체 및 스타일 관리 |
| `ErrorDefine.js` | 56KB | 에러 코드 및 메시지 정의 |
| `Crypto.js` | 157KB | 암호화 기능 (MD5, SHA, AES 등) |
| `LocaleSupport.js` | 94KB | 다국어/지역 지원 |
| `Device.js` | 34KB | Device API 기본 인터페이스 |
| `Device_Android.js` | 5.7KB | Android 특화 기능 |
| `Device_iOS.js` | 12KB | iOS 특화 기능 |
| `Device_Windows.js` | 2.1KB | Windows 특화 기능 |
| `makeLocaleInfo.js` | 604KB | 다국어 정보 생성/컴파일 |

**파일명 패턴**:
- `*_HTML5.js` → WRE (웹 브라우저), iOS_NRE 대상
- `*_Runtime.js` → NRE (Windows/Android 네이티브) 대상
- `Device_<OS>.js` → OS별 특화 구현

**로딩 순서 (Framework.json 기준)**:
```
SystemBase.js → LocaleSupport.js → SystemBase_HTML5/Runtime.js
→ BasicObjs.js → ErrorDefine.js → Platform_HTML5/Runtime.js
→ Platform.js → CssObjs.js → Device*.js → Crypto.js
```

---

### component/ — UI 컴포넌트 라이브러리

#### CompBase/ — 컴포넌트 기본 클래스

| 파일명 | 역할 |
|--------|------|
| `CompBase.js` | 모든 컴포넌트의 최상위 기본 클래스 |
| `CompEventBase.js` | 이벤트 처리 기반 |
| `FormBase.js` | Form 기본 클래스 |
| `FrameBase.js` | Frame 기본 클래스 |
| `EditBase.js` | 편집 컴포넌트 기본 클래스 |
| `Element_HTML5.js` | HTML5 환경 DOM 요소 추상화 |
| `Element_Runtime.js` | NRE 환경 DOM 요소 추상화 |
| `Animation.js` | 애니메이션 기본 |
| `ScrollBar.js` | 스크롤바 |
| `TitleBar.js`, `StatusBar.js` | 타이틀바/상태바 |
| `Data.js` | 데이터 기반 추상화 |
| `ViewTransition.js` | 화면 전환 효과 |

#### ComComp/ — 일반 UI 컴포넌트 (44개 JS)

```
Button.js, Edit.js, MaskEdit.js, TextArea.js
CheckBox.js, Radio.js, CheckBoxSet.js
Combo.js, MultiCombo.js, ListBox.js
Calendar.js, DatePicker.js, Spin.js
Static.js, ImageViewer.js, ProgressBar.js
Div.js, Panel.js, PopupDiv.js, Tab.js, GroupBox.js
Grid 관련: Dataset.js, DataObject.js, DomObject.js, Cell.js
Menu.js, PopupMenu.js
FileDialog.js, FileUpload.js, FileDownload.js
FileUpTransfer.js, FileDownTransfer.js, VirtualFile.js
WebBrowser.js, WebView.js, VideoPlayer.js
GoogleMap.js, Sketch.js, View.js
ExportObject.js, ImportObject.js
Action.js, Plugin.js, Tray.js
```

#### Grid/ — 데이터 그리드 (2개 JS)

```
Grid.js      — 메인 그리드 구현 (복잡한 이벤트/셀/밴드 처리)
GridInfo.js  — 그리드 컬럼/포맷 메타정보
```

#### MobileComp/ — 모바일 최적화 컴포넌트 (13개 JS)

```
MobileCompBase.js
MobileElement_HTML5.js, MobileElement_Runtime.js
TextField.js, MultiLineTextField.js
DateField.js, SpinField.js, SelectField.js
DateRangePicker.js, PopupDateRangePicker.js
DateRangeCalendar.js, TimePickerControl.js, SpinnerControl.js
```

#### DevPackLib/ — 개발 팩 유틸리티 (12개 JS)

```
Frame.js        — 프레임 관리 유틸
Util.js         — 공통 유틸리티
Comp.js         — 컴포넌트 유틸리티
Transaction.js  — 서버 통신
Validation.js   — 유효성 검증
Grid.js         — 그리드 관련 유틸
Excel.js        — 엑셀 Import/Export
Message.js      — 메시지 박스
Popup.js        — 팝업 창
File.js         — 파일 처리
ExtLib.js       — 확장 라이브러리
CompOverride.js — 컴포넌트 오버라이드
```

#### DeviceAPI/ — 디바이스 API (7개 JS)

```
DeviceObjs.js, DeviceObjs_Runtime.js
SQLite.js, SQLite_Runtime.js
Mobile.js                    — Camera, Geolocation, Contact, SMS 등
BluetoothLE.js               — Bluetooth Low Energy
TCPClientSocket.js           — TCP 소켓 통신
```

#### 기타 component 모듈

| 폴더 | 파일 수 | 용도 |
|------|--------|------|
| `Chart/` | 119개 | 차트 엔진 (BasicChart, PieChart, BubbleChart, GaugeChart, RadarChart 등) |
| `Accessibility/` | 4개 | 접근성(WAI-ARIA) |
| `Graphics/` | 2개 | 캔버스 벡터 그래픽 |
| `ListView/` | 2개 | 리스트뷰 |
| `Push/` | 6개 | X-PUSH (sockjs.js 포함) |
| `Splitter/` | 2개 | 분할 컨테이너 |
| `XAgent/` | 1개 | XAgent 서버 통신 |
| `VoiceRecognition/` | 1개 | 음성 인식 |
| `Cordova/` | 1개 | Cordova 플러그인 |
| `CompBaseEx/` | 2개 | SimpleComp, ComplexComp 확장 |

---

### 엔진 JS 코딩 패턴 (내부 구현 규칙)

> 엔진 소스 분석 또는 커스텀 모듈 개발 시 아래 패턴을 이해하고 활용한다.

#### 1. 전역 namespace 및 조건부 정의

```javascript
// nexacro 전역 namespace 초기화
if (!this.nexacro) { this.nexacro = {}; }

// 중복 로드 방지 — 컴포넌트 정의 전 반드시 체크
if (!nexacro.Button) {
    // 컴포넌트 정의...
}
```

#### 2. 프로토타입 기반 상속

```javascript
// 컴포넌트 생성자 함수 — 인자: id, left, top, width, height, right, bottom, ...parent
nexacro.Button = function (id, left, top, width, height, right, bottom,
                           minwidth, maxwidth, minheight, maxheight, parent) {
    nexacro._IconText.call(this, id, left, top, width, height,
                           right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
};

// 상속 체인 설정
var _pButton = nexacro._createPrototype(nexacro._IconText, nexacro.Button);
nexacro.Button.prototype = _pButton;
_pButton._type_name = "Button";   // 타입명 등록 (필수)
```

#### 3. 내부 속성 네이밍 규칙

| 접두어 | 의미 | 예시 |
|--------|------|------|
| `_p_` | property (외부 노출 속성) | `_p_tabstop`, `_p_text` |
| `_is_` | boolean flag | `_is_focus_accept`, `_is_alive` |
| `_cur_` | current state | `_cur_ldown_elem` |
| `_use_` | feature flag | `_use_pushed_status` |
| `_v_` | 내부 변수 | `_v_value` |

```javascript
_pButton._p_tabstop     = true;
_pButton._p_defaultbutton = false;
_pButton._is_focus_accept = true;
_pButton._cur_ldown_elem  = null;
_pButton._use_pushed_status = true;
```

#### 4. setter/getter 패턴

```javascript
// setter: set_<속성명>
_pButton.set_text = function (v) {
    if (this._p_text != v) {
        this._p_text = v;
        this._updateText();
    }
};

// getter: get_<속성명>
_pButton.get_text = function () {
    return this._p_text;
};
```

#### 5. EventInfo 클래스 패턴

```javascript
// 이벤트 파라미터 객체 — 이벤트별로 전용 클래스 정의
nexacro.GridCellClickEventInfo = function (obj, id, cell, col, row, subrow, ...) {
    nexacro.ClickEventInfo.call(this, obj, id, ...);
    this.cell   = cell;
    this.col    = col;
    this.row    = row;
    this.subrow = subrow;
};
var _p = nexacro._createPrototype(nexacro.ClickEventInfo, nexacro.GridCellClickEventInfo);
nexacro.GridCellClickEventInfo.prototype = _p;
_p._type_name = "GridCellClickEventInfo";
delete _p;   // 임시 변수 정리
```

#### 6. 플랫폼 분기 패턴

```javascript
// scriptfilter로 환경별 파일 선택적 로드 (Framework.json/Component.json)
// target: "WRE,iOS_NRE"  → 웹 + iOS 네이티브에서만 로드
// target: "NRE"           → 모든 네이티브 환경
// target: "NRE,iOS_NRE"  → 네이티브 환경 전체

// 런타임 환경 분기 (파일 내부)
if (nexacro._isWRE) {
    // 웹 브라우저 환경 처리
} else {
    // NRE 환경 처리
}
```

#### 7. 컴포넌트 라이프사이클 오버라이드

```javascript
// 생성/초기화
_pButton.on_created = function () { /* ... */ };

// 표시
_pButton.on_show = function () { /* ... */ };

// 크기/위치 변경
_pButton.on_resize = function () { /* ... */ };

// 포커스
_pButton.on_focus_in = function (focused_comp) { /* ... */ };
_pButton.on_focus_out = function (focus_comp)  { /* ... */ };

// 제거
_pButton.destroyComponent = function () {
    // 정리 로직
    return nexacro.Component.prototype.destroyComponent.call(this);
};
```

---

### 컴포넌트 상속 계층 (클래스 트리)

```
nexacro.Object
└── nexacro.Component                         (CompBase.js)
    ├── nexacro._Text / nexacro._IconText      (공통 텍스트/아이콘)
    │   ├── nexacro.Button
    │   ├── nexacro.Static
    │   └── nexacro.CheckBox, Radio ...
    ├── nexacro._EditBase                      (EditBase.js)
    │   ├── nexacro.Edit
    │   ├── nexacro.MaskEdit
    │   └── nexacro.TextArea
    ├── nexacro.Div                            (컨테이너)
    │   ├── nexacro.Panel, GroupBox
    │   └── nexacro.PopupDiv
    ├── nexacro.Grid                           (Grid.js)
    └── nexacro.Dataset                        (ComComp/Dataset.js)

nexacro._Form (FormBase.js)
└── nexacro.Form
    └── nexacro.ChildFrame, MainFrame 등
```

---

### 규모 요약

| 모듈 | JS 파일 수 | 비고 |
|------|-----------|------|
| framework | 16 | 시스템 코어 (~3.5MB) |
| CompBase | 14 | 컴포넌트 기반 클래스 |
| ComComp | 44 | 기본 UI 컴포넌트 |
| Grid | 2 | 그리드 (가장 복잡한 단일 컴포넌트) |
| Chart | ~6 | 차트 엔진 |
| MobileComp | 13 | 모바일 최적화 컴포넌트 |
| DeviceAPI | 7 | 디바이스 API |
| DevPackLib | 12 | 개발 유틸리티 라이브러리 |
| metainfo | 1,000+ | 다국어 API 메타정보 (CHN/ENG/JPN/KOR) |

> **Design/ 폴더**: 각 컴포넌트 하위에 Design 스크립트가 존재하며, Nexacro Studio 디자이너 실행 시에만 로드됨. 프로덕션 빌드에는 포함되지 않음.
