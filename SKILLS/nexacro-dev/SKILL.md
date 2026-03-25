---
name: nexacro-dev
description: nexacroN/nexacroK 화면 개발 스킬. "넥사크로", "nexacro", "xfdl", "xprj", "Dataset", "Bind", "컴포넌트", "폼 개발", "이벤트 핸들러", "gfn_", "Transaction", "조회", "저장", "팝업", "그리드" 등을 언급할 때 이 스킬을 사용하세요.
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
| Grid 표시 안 됨 | Dataset 바인딩 미설정 | Grid의 `binddataset` 속성 확인 |
| 팝업 안 열림 | 경로 오류 | xprj 기준 상대경로 확인 |
