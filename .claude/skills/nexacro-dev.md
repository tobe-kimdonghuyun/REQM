---
name: nexacro-dev
description: nexacroN/nexacroK 화면 개발 스킬. "넥사크로", "nexacro", "xfdl", "xprj", "Dataset", "Bind", "컴포넌트", "폼 개발", "이벤트 핸들러", "gfn_", "Transaction", "조회", "저장", "팝업", "그리드", "Div", "Tab", "Form 생명주기", "Application", "전역변수", "xapi", "PlatformData", "서버 서비스" 등을 언급할 때 이 스킬을 사용하세요.
---

# nexacroN 화면 개발 스킬

nexacroN v21 / v24 / nexacroK 환경에서의 화면 개발 패턴과 베스트 프랙티스를 안내합니다.

---

## 1. 프로젝트 구조

```
nexacroK/
├── typedefinition.xml   — 컴포넌트 타입 정의
├── AnimationTest/       — 애니메이션 테스트 화면
NTemplate/
├── config/              — 환경 설정
├── projectTemplate/     — 프로젝트 템플릿
├── nexacrolib/          — nexacro 라이브러리
└── result/              — 빌드 결과물
```

---

## 2. 네이밍 컨벤션

### 컴포넌트
| 컴포넌트 | prefix | 예시 |
|----------|--------|------|
| Button | `btn` | `btnSave`, `btnSearch` |
| Edit | `edt` | `edtUserId`, `edtPassword` |
| Grid | `grd` | `grdList`, `grdDetail` |
| Dataset | `ds` | `dsSearch`, `dsResult` |
| ComboBox | `cmb` | `cmbStatus`, `cmbType` |
| CheckBox | `chk` | `chkUseYn`, `chkAll` |
| Static | `sta` | `staTitle`, `staLabel` |
| Div | `div` | `divSearch`, `divList` |
| PopupDiv | `pop` | `popUser`, `popCode` |

### 함수
| 용도 | prefix | 예시 |
|------|--------|------|
| 공통 함수 | `gfn_` | `gfn_alert`, `gfn_getToday` |
| 화면 이벤트 | `컴포넌트명_이벤트명` | `btnSave_onclick` |
| 조회 | `fn_search` | `fn_searchList` |
| 저장 | `fn_save` | `fn_saveData` |
| 초기화 | `fn_init` | `fn_initForm` |

### Dataset 컬럼
- 대문자 스네이크케이스: `USER_ID`, `USER_NM`, `REG_DT`
- 검색 Dataset: `ds`+`Search` → `dsSearch`
- 결과 Dataset: `ds`+`Result` or `ds`+`List` → `dsResult`, `dsList`

---
### Dataset을 Grid에 연결방법
 - 2가지 방법이 있음 
   - 생성된 Grid의 binddataset에 텍스트로 바로 설정한다 
   - script통해서 동적으로 등록한다 예시로:  this.grd_main.binddataset  = "동적생성된 dataset id"
## 3. 화면 스크립트 기본 구조

```javascript
/***********************************************************************************
 * 화면명 : 사용자 관리
 * 작성자 : 홍길동
 * 작성일 : 2024-01-01
 ***********************************************************************************/

// ==================== 초기화 ====================
this.Form_onload = function(obj, e) {
    fn_init();
    fn_searchList();
};

function fn_init() {
    // 초기값 설정
    this.edtRegDt.set_value(gfn_getToday());
}

// ==================== 조회 ====================
function fn_searchList() {
    var svcId  = "selectUserList";
    var inDs   = "dsSearch:dsSearch";
    var outDs  = "dsResult:dsResult";
    var url    = "svc::UserService.do";

    this.transaction(svcId, url, inDs, outDs, "", "fn_searchListCallback");
}

function fn_searchListCallback(svcId, errCode, errMsg) {
    if (errCode != 0) {
        gfn_alert("조회 중 오류가 발생했습니다.\n" + errMsg);
        return;
    }
    // 조회 완료 후 처리
    this.grdList.set_rowcount(this.dsResult.rowcount);
}

// ==================== 저장 ====================
function fn_save() {
    if (!fn_validate()) return;

    var svcId  = "saveUser";
    var inDs   = "dsSave:dsSave";
    var outDs  = "";
    var url    = "svc::UserService.do";

    this.transaction(svcId, url, inDs, outDs, "", "fn_saveCallback");
}

function fn_saveCallback(svcId, errCode, errMsg) {
    if (errCode != 0) {
        gfn_alert("저장 중 오류가 발생했습니다.\n" + errMsg);
        return;
    }
    gfn_alert("저장되었습니다.");
    fn_searchList();
}

// ==================== 유효성 검사 ====================
function fn_validate() {
    if (nvl(this.edtUserId.value, "") == "") {
        gfn_alert("사용자 ID를 입력하세요.");
        this.edtUserId.setFocus();
        return false;
    }
    return true;
}

// ==================== 이벤트 ====================
this.btnSearch_onclick = function(obj, e) {
    fn_searchList();
};

this.btnSave_onclick = function(obj, e) {
    fn_save();
};

this.btnClose_onclick = function(obj, e) {
    this.close();
};
```

---

## 4. Transaction (서버 통신)

```javascript
// 기본 형식
this.transaction(
    svcId,      // 서비스 ID (콜백 구분용)
    url,        // 서비스 URL
    inDatasets, // "로컬Dataset:서버Dataset" (복수: "ds1:sv1 ds2:sv2")
    outDatasets,// "서버Dataset:로컬Dataset"
    args,       // 추가 파라미터 "key=value&key2=value2"
    callback    // 콜백 함수명 (문자열)
);

// 예시: 다중 Dataset
this.transaction(
    "multiSave",
    "svc::CommonService.do",
    "dsMaster:dsMaster dsDetail:dsDetail",
    "dsResult:dsResult",
    "type=save",
    "fn_saveCallback"
);
```

### 콜백 패턴
```javascript
function fn_saveCallback(svcId, errCode, errMsg) {
    if (errCode < 0) {          // 시스템 오류
        gfn_alert(errMsg);
        return;
    }
    if (errCode > 0) {          // 비즈니스 오류
        gfn_alert(errMsg);
        return;
    }
    // 성공 처리 (errCode == 0)
}
```

---

## 5. Dataset 처리

```javascript
// 행 추가
var nRow = this.dsData.addRow();
this.dsData.setColumn(nRow, "USER_ID", "admin");
this.dsData.setColumn(nRow, "USER_NM", "관리자");

// 행 삭제
this.dsData.deleteRow(this.dsData.rowposition);

// 전체 초기화
this.dsData.clearData();

// 행 순회
for (var i = 0; i < this.dsData.rowcount; i++) {
    var userId = this.dsData.getColumn(i, "USER_ID");
    var userNm = this.dsData.getColumn(i, "USER_NM");
    trace(userId + " / " + userNm);
}

// 필터
this.dsData.setFilter("STATUS == 'Y'");
this.dsData.clearFilter();

// 정렬
this.dsData.setSort("+USER_NM");  // 오름차순
this.dsData.setSort("-REG_DT");   // 내림차순

// 변경된 행만 추출 (저장 시)
// rowtype: 1=insert, 2=update, 4=delete
for (var i = 0; i < this.dsList.rowcount; i++) {
    var rowType = this.dsList.getRowType(i);
    if (rowType == Dataset.ROWTYPE_INSERT || rowType == Dataset.ROWTYPE_UPDATE) {
        // 저장 대상
    }
}
```

---

## 6. Grid 제어

```javascript
// 선택 행 값 가져오기
var nRow = this.grdList.currentrow;
var userId = this.dsResult.getColumn(nRow, "USER_ID");

// 그리드 셀 편집 가능 여부
this.grdList.setCellProperty(nRow, colIndex, "edittype", "normal"); // 편집 가능
this.grdList.setCellProperty(nRow, colIndex, "edittype", "none");   // 읽기 전용

// 행 색상 (ongetcellstyle 이벤트)
this.grdList_ongetcellstyle = function(obj, e) {
    if (this.dsResult.getColumn(e.row, "STATUS") == "N") {
        e.style.color = "#FF0000";  // 빨간색
    }
};
```

---

## 7. 팝업 처리

```javascript
// 팝업 열기
this.btnPopup_onclick = function(obj, e) {
    var args = {
        p_userId: this.edtUserId.value
    };
    this.openPopup("popUser", "화면경로/UserPopup.xfdl", args, "fn_popupCallback");
};

// 팝업 콜백
function fn_popupCallback(popupObj, returnValue) {
    if (returnValue != null) {
        this.edtUserId.set_value(returnValue.userId);
        this.edtUserNm.set_value(returnValue.userNm);
    }
}

// 팝업 닫기 (팝업 화면 내)
this.btnClose_onclick = function(obj, e) {
    this.close({ userId: this.edtUserId.value, userNm: this.edtUserNm.value });
};
```

---

## 8. 자주 쓰는 공통 함수 패턴 (gfn_)

```javascript
// 오늘 날짜 (YYYYMMDD)
function gfn_getToday() {
    var d = new Date();
    return d.getFullYear()
        + lpad(String(d.getMonth() + 1), 2, "0")
        + lpad(String(d.getDate()), 2, "0");
}

// null/undefined → 기본값 처리
function nvl(val, defaultVal) {
    if (val == null || val == undefined || val == "") return defaultVal;
    return val;
}

// 좌측 패딩
function lpad(str, len, padChar) {
    while (str.length < len) str = padChar + str;
    return str;
}

// 공통 알림
function gfn_alert(msg) {
    alert(msg);  // 또는 프로젝트 공통 alert 컴포넌트 사용
}

// 숫자 포맷 (1000 → "1,000")
function gfn_numFormat(num) {
    return Number(num).toLocaleString();
}
```

---

## 9. 자주 발생하는 오류

| 오류 | 원인 | 해결 |
|------|------|------|
| `is not defined` | 함수/변수 스코프 문제 | `this.` 또는 `gfn_` prefix 확인 |
| Transaction 응답 없음 | URL 오류 또는 서버 미기동 | URL 확인, Tomcat 상태 확인 |
| Dataset 컬럼 null | 컬럼명 대소문자 불일치 | typedefinition.xml 컬럼명과 일치 확인 |
| Grid 데이터 표시 안 됨 | `innerdataset` 속성 사용 오류 | `binddataset` 속성으로 교체 (`innerdataset`은 Grid 내부 전용, 외부 Dataset 연결 불가) |
| 일반 함수에서 컴포넌트 접근 안 됨 | `this`가 Form이 아닌 컨텍스트 | `nexacro.getForm()` 사용 금지 — 이벤트 핸들러에서 `fn_xxx(this)` 로 oForm 전달, 일반 함수는 `function fn_xxx(oForm)` 패턴 사용 |
| 팝업 안 열림 | 경로 오류 | xprj 기준 상대경로 확인 |

---

## 10. xfdl 파일 구조 (XML + Script 혼합)

```xml
<?xml version="1.0" encoding="utf-8"?>
<FDL version="2.0">
  <Form id="UserMgmt" width="1024" height="768"
        onload="Form_onload" onkeydown="Form_onkeydown">

    <!-- 데이터셋 정의 -->
    <Dataset id="dsSearch">
      <ColumnInfo>
        <Column id="USER_ID" type="STRING" size="20"/>
        <Column id="USER_NM" type="STRING" size="50"/>
      </ColumnInfo>
    </Dataset>

    <!-- 컴포넌트 배치 -->
    <Button  id="btnSearch" text="조회" onclick="btnSearch_onclick"/>
    <Edit    id="edtUserId" value=""/>
    <Grid    id="grdList"   binddataset="dsResult"/>

    <!-- 데이터 바인딩 -->
    <Bind>
      <BindItem compid="edtUserId" propid="value"
                datasetid="dsSearch" columnid="USER_ID"/>
    </Bind>

    <!-- 스크립트 -->
    <Script><![CDATA[
      this.Form_onload = function(obj, e) {
          fn_init();
      };
      function fn_init() { }
    ]]></Script>
  </Form>
</FDL>
```

---

## 11. Form 생명주기 이벤트

```javascript
// 화면 최초 로드 (1회) — 초기화, 데이터 로드
this.Form_onload = function(obj, e) {
    fn_init();
    fn_searchList();
};

// 화면 포커스 받을 때마다 실행 — 데이터 갱신
this.Form_onactivate = function(obj, e) {
    fn_searchList();
};

// 화면 포커스 잃을 때
this.Form_ondeactivate = function(obj, e) { };

// 화면 종료 전 — return false 시 종료 취소
this.Form_onclose = function(obj, e) {
    if (this.dsResult.rowcount > 0) {
        if (!confirm("저장하지 않은 데이터가 있습니다. 닫으시겠습니까?"))
            return false;
    }
};

// 키보드 단축키 (Form 레벨)
this.Form_onkeydown = function(obj, e) {
    if (e.ctrlKey && e.keycode == 83) { fn_save();       return false; } // Ctrl+S
    if (e.keycode == 13)              { fn_searchList(); return false; } // Enter
    if (e.keycode == 27)              { this.close();    return false; } // Esc
};
```

---

## 12. Div 동적 폼 로드

```javascript
// Div에 xfdl 로드
this.divContent.set_url("Form::SubForm.xfdl");

// Div 내부 컴포넌트/Dataset 접근
var innerForm  = this.divContent.form;
var innerValue = innerForm.dsMain.getColumn(0, "USER_ID");
var innerGrid  = innerForm.grdMain;

// Div 내부 함수 호출
innerForm.fn_searchList();
```

---

## 13. Tab 패턴

```javascript
// 탭 전환
this.tabMain.set_selectedindex(0);

// 탭 활성화/비활성화
this.tabMain.enableTab(1, false);  // 두 번째 탭 비활성화

// 탭 변경 이벤트
this.tabMain_onchanged = function(obj, e) {
    switch (obj.selectedindex) {
        case 0: fn_initTab1(); break;
        case 1: fn_initTab2(); break;
    }
};
```

---

## 14. Grid 고급 패턴

```javascript
// 전체선택 체크박스 (헤더 클릭)
this.grdList_onheadclick = function(obj, e) {
    if (e.cell == 0) obj.setAll("select", !obj.getCheckOldValue(0));
};

// 다중 선택 행 처리
var aRows = this.grdList.getSelectRowArray();
for (var i = 0; i < aRows.length; i++) {
    var userId = this.dsResult.getColumn(aRows[i], "USER_ID");
}

// 셀 스타일 동적 변경
this.grdList_ongetcellstyle = function(obj, e) {
    if (this.dsResult.getColumn(e.row, "STATUS") == "D") {
        e.style.color      = "#999999";
        e.style.background = "#f5f5f5";
    }
};

// 컬럼 표시/숨김
this.grdList.setColHidden(0, true);   // 숨김
this.grdList.setColHidden(0, false);  // 표시

// Dataset 정렬
this.dsResult.setSort("+USER_NM");   // 오름차순
this.dsResult.setSort("-REG_DT");    // 내림차순
```

---

## 15. 성능 최적화

```javascript
// 대량 행 추가 시 화면 갱신 중단
this.dsResult.updatecontrol = false;
for (var i = 0; i < 1000; i++) {
    var nRow = this.dsResult.addRow();
    this.dsResult.setColumn(nRow, "USER_ID", "user_" + i);
}
this.dsResult.updatecontrol = true;  // 마지막에 한 번만 갱신

// Dataset 필터 (루프보다 빠름)
this.dsResult.setFilter("STATUS == 'Y' && DEPT_CD == '001'");
this.dsResult.setFilter("");  // 해제
```

---

## 16. Application 전역 변수

```javascript
// 전역 변수 저장/조회 (로그인 정보 등 앱 전체 공유)
application.setGlobal("USER_ID",   "hong");
application.setGlobal("USER_NM",   "홍길동");
application.setGlobal("DEPT_CD",   "001");

var userId = application.getGlobal("USER_ID");
var userNm = application.getGlobal("USER_NM");
```

---

## 17. xapi 서버 서비스 개발 (Java / JSP)

> transaction() 호출을 받는 서버 서비스는 nexacro xapi 라이브러리로 구현한다.
> 메뉴얼: `D:\git_prj\REQM\nexacroN 메뉴얼\xapi\korean\`

### import

```java
import com.nexacro.java.xapi.data.*;   // PlatformData, DataSet, VariableList, DataTypes, ColumnHeader
import com.nexacro.java.xapi.tx.*;     // HttpPlatformRequest, HttpPlatformResponse, PlatformException
```

### DataTypes 상수

| 상수 | Java 타입 | 포맷 |
|------|---------|------|
| `DataTypes.STRING` | String | - |
| `DataTypes.INT` | int | - |
| `DataTypes.LONG` | long | - |
| `DataTypes.DOUBLE` | double | - |
| `DataTypes.BIG_DECIMAL` | BigDecimal | - |
| `DataTypes.DATE` | Date | yyyyMMdd |
| `DataTypes.DATE_TIME` | Date | yyyyMMddHHmmssSSS |
| `DataTypes.BLOB` | byte[] | - |

### DataSet API (서버)

```java
// 컬럼 정의 + 행 추가
DataSet ds = new DataSet("dsResult");
ds.addColumn(new ColumnHeader("USER_ID", DataTypes.STRING, 20));
ds.addColumn(new ColumnHeader("USER_NM", DataTypes.STRING, 50));
ds.addColumn(new ColumnHeader("REG_DT",  DataTypes.DATE));

int row = ds.newRow();
ds.setValue(row, "USER_ID", "hong");
ds.setValue(row, "USER_NM", "홍길동");

// 값 읽기
String userId = ds.getString(i, "USER_ID");
int    cnt    = ds.getInt(i, "CNT");

// 행 상태로 CRUD 분기
int rowType = ds.getRowType(i);
// ROW_TYPE_INSERT=1, ROW_TYPE_UPDATE=2, ROW_TYPE_DELETE=3
```

### 완전한 JSP 서비스 패턴

```jsp
<%@ page import="com.nexacro.java.xapi.data.*, com.nexacro.java.xapi.tx.*" %>
<%@ page contentType="text/xml; charset=UTF-8" %>
<%
    out.clearBuffer();  // 필수

    HttpPlatformRequest req = new HttpPlatformRequest(request);
    req.receiveData();
    PlatformData reqData = req.getData();

    // 입력값 추출
    String searchNm = reqData.getVariableList().getString("SEARCH_NM");
    DataSet dsIn    = reqData.getDataSet("dsSearch");

    // 응답 구성
    PlatformData resData = new PlatformData();
    DataSet dsOut = new DataSet("dsResult");
    dsOut.addColumn(new ColumnHeader("USER_ID", DataTypes.STRING, 20));
    dsOut.addColumn(new ColumnHeader("USER_NM", DataTypes.STRING, 50));
    // ... DB 조회 후 dsOut에 행 추가 ...
    resData.addDataSet(dsOut);
    resData.getVariableList().add("ErrorCode", 0);
    resData.getVariableList().add("ErrorMsg",  "SUCCESS");

    HttpPlatformResponse res = new HttpPlatformResponse(response, req);
    res.setData(resData);
    res.sendData();
%>
```

### 저장 서비스 — RowType별 CRUD 패턴

```java
DataSet dsSave = reqData.getDataSet("dsSave");
for (int i = 0; i < dsSave.getRowCount(); i++) {
    int rowType = dsSave.getRowType(i);
    Map<String, Object> row = dsSave.getRowToMap(i);
    if      (rowType == DataSet.ROW_TYPE_INSERT) { /* INSERT */ }
    else if (rowType == DataSet.ROW_TYPE_UPDATE) { /* UPDATE */ }
    else if (rowType == DataSet.ROW_TYPE_DELETE) { /* DELETE */ }
}
```
