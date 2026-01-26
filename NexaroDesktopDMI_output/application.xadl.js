(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset
            obj = new Dataset("gdsMessage", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MSGE_CD","type" : "STRING","size" : "256"},{"id" : "KORN_MSGE","type" : "STRING","size" : "256"},{"id" : "MSGE_FLAG_CD","type" : "STRING","size" : "3"},{"id" : "msgTitle","type" : "STRING","size" : "256"}]},"Rows" : [{"MSGE_CD" : "msg.err.mdicount.max","KORN_MSGE" : "화면은 {0}개 까지만 실행 가능합니다. 화면을 닫고 다시 실행해주세요.","MSGE_FLAG_CD" : "WAN","msgTitle" : "경고"},{"MSGE_CD" : "confirm.logout","KORN_MSGE" : "로그아웃 하시겠습니까?","MSGE_FLAG_CD" : "CFN","msgTitle" : "확인"},{"MSGE_CD" : "confirm.before.movepage","KORN_MSGE" : "변경된 데이터가 있습니다. 현재 화면을 닫겠습니까?","MSGE_FLAG_CD" : "CFN","msgTitle" : "확인"},{"MSGE_CD" : "confirm.before.removeallpage","KORN_MSGE" : "전체 화면을 닫겠습니까?","MSGE_FLAG_CD" : "CFN","msgTitle" : "확인"},{"MSGE_CD" : "msg.save.nochange","KORN_MSGE" : "변경된 내역이 없습니다.","MSGE_FLAG_CD" : "WAN","msgTitle" : "경고"},{"MSGE_CD" : "msg.confirm","KORN_MSGE" : "{0}","MSGE_FLAG_CD" : "CFN","msgTitle" : "확인"},{"MSGE_CD" : "confirm.save","KORN_MSGE" : "저장 하시겠습니까?","MSGE_FLAG_CD" : "CFN","msgTitle" : "확인"},{"MSGE_CD" : "msg.nomenu","MSGE_FLAG_CD" : "INF","msgTitle" : "알림","KORN_MSGE" : "해당 Menu가 존재하지 않습니다!"},{"MSGE_CD" : "confirm.before.reopen","KORN_MSGE" : "변경된 데이터가 있습니다. 화면을 다시 여시겠습니까?","MSGE_FLAG_CD" : "CFN","msgTitle" : "확인"},{"MSGE_CD" : "msg.err.mdicount.max","KORN_MSGE" : "화면은 {0}개 까지만 실행 가능합니다. 화면을 닫고 다시 실행해주세요.","MSGE_FLAG_CD" : "INF","msgTitle" : "알림"},{"MSGE_CD" : "msg.server.error","KORN_MSGE" : "서버에서 다음과 같은 에러메시지를 받았습니다.\\n{0}","MSGE_FLAG_CD" : "WAN","msgTitle" : "경고"},{"MSGE_CD" : "msg.database.error","KORN_MSGE" : "데이터베이스 오류입니다. \\n에러코드 : {0}","MSGE_FLAG_CD" : "WAN","msgTitle" : "경고"},{"MSGE_CD" : "msg.session.timeout","KORN_MSGE" : "세션이 종료되었습니다. 다시 로그인해주세요.","MSGE_FLAG_CD" : "WAN","msgTitle" : "경고"},{"MSGE_CD" : "msg.exist","KORN_MSGE" : "{0} 가(이) 존재합니다.","MSGE_FLAG_CD" : "INF","msgTitle" : "알림"}]});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsOpenMenu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "WIN_ID","type" : "STRING","size" : "256"},{"id" : "MENU_ID","type" : "STRING","size" : "256"},{"id" : "MENU_NM","type" : "STRING","size" : "256"},{"id" : "MENU_URL","type" : "STRING","size" : "256"},{"id" : "PRGM_ID","type" : "STRING","size" : "256"}]}});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMenu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MENU_ENGL_NM","type" : "STRING","size" : "32"},{"id" : "ENGL_DISPLAY_PATH","type" : "STRING","size" : "32"},{"id" : "MODULE_CD","type" : "STRING","size" : "32"},{"id" : "CMMNBTNADD","type" : "STRING","size" : "32"},{"id" : "DISPLAY_PATH","type" : "STRING","size" : "32"},{"id" : "SYTM_FLAG_CD","type" : "STRING","size" : "32"},{"id" : "MENU_ORDR","type" : "BIGDECIMAL","size" : "16"},{"id" : "PARM","type" : "STRING","size" : "256"},{"id" : "CMMNBTNSAVE","type" : "STRING","size" : "32"},{"id" : "MENU_ID","type" : "STRING","size" : "32"},{"id" : "MENU_URL","type" : "STRING","size" : "256"},{"id" : "PRGM_FILE_NM","type" : "STRING","size" : "256"},{"id" : "MENU_LV","type" : "BIGDECIMAL","size" : "16"},{"id" : "SEARCH_SCOPE_CD","type" : "STRING","size" : "256"},{"id" : "MENU_PATH","type" : "STRING","size" : "32"},{"id" : "MENU_FLAG_CD","type" : "STRING","size" : "32"},{"id" : "CMMNBTNINIT","type" : "STRING","size" : "32"},{"id" : "CMMNBTNPRINT","type" : "STRING","size" : "32"},{"id" : "CMMNBTNEXCELDOWN","type" : "STRING","size" : "32"},{"id" : "CMMNBTNSEARCH","type" : "STRING","size" : "32"},{"id" : "CMMNBTNDEL","type" : "STRING","size" : "32"},{"id" : "MENU_NM","type" : "STRING","size" : "32"},{"id" : "REMK","type" : "STRING","size" : "256"},{"id" : "HIPO_MENU_ID","type" : "STRING","size" : "32"},{"id" : "PRGM_ID","type" : "STRING","size" : "256"},{"id" : "PRGM_PATH","type" : "STRING","size" : "256"},{"id" : "PRGM_HELP_FLAG","type" : "STRING","size" : "256"},{"id" : "PRGM_NM","type" : "STRING","size" : "256"}]},"Rows" : [{"MENU_ID" : "10100000","MENU_NM" : "디자인","MENU_LV" : "0","HIPO_MENU_ID" : "","PRGM_ID" : "10100000","USED_YN" : "Y","MENU_GRP_ID" : "10100000","MODULE_CD" : "DN","DISPLAY_PATH" : "디자인"},{"MENU_ID" : "10101000","MENU_NM" : "템플릿","MENU_LV" : "1","HIPO_MENU_ID" : "10100000","PRGM_ID" : "10100000","USED_YN" : "Y","MENU_GRP_ID" : "10100000","MODULE_CD" : "DN","DISPLAY_PATH" : "디자인 > 템플릿"},{"MENU_ID" : "10101001","MENU_NM" : "Single-Detail","MENU_LV" : "2","HIPO_MENU_ID" : "10101000","PRGM_ID" : "10101001","USED_YN" : "Y","LEAF_YN" : "Y","MENU_URL" : "design::template/Temp01.xfdl","cmmnBtnPrint" : "","cmmnBtnHelp" : "","cmmnBtnAdd" : "Y","cmmnBtnDel" : "Y","cmmnBtnSave" : "Y","MENU_GRP_ID" : "10100000","MODULE_CD" : "DN","SEARCH_SCOPE_CD" : "10","DISPLAY_PATH" : "디자인 > 템플릿 > Single-Detail","PRGM_PATH" : "design::template/Temp01.xfdl","PRGM_NM" : "Single-Detail","MENU_ORDR" : "1","PRGM_FILE_NM" : "Temp01.xfdl","CMMNBTNADD" : "0","CMMNBTNSAVE" : "0","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "1","CMMNBTNDEL" : "0"},{"MENU_ID" : "10101002","MENU_NM" : "List-Detail1","MENU_LV" : "2","HIPO_MENU_ID" : "10101000","PRGM_ID" : "10101002","LEAF_YN" : "Y","MENU_URL" : "design::template/Temp03.xfdl","USED_YN" : "Y","cmmnBtnAdd" : "Y","cmmnBtnDel" : "Y","cmmnBtnSave" : "Y","cmmnBtnPrint" : "","cmmnBtnHelp" : "","cmmnBtnExcelUp" : "Y","cmmnBtnExcelDown" : "Y","MENU_GRP_ID" : "10100000","MODULE_CD" : "DN","SEARCH_SCOPE_CD" : "10","DISPLAY_PATH" : "디자인 > 템플릿 > List-Detail1","PRGM_PATH" : "design::template/Temp03.xfdl","PRGM_NM" : "List-Detail1","MENU_ORDR" : "2","PRGM_FILE_NM" : "Temp03.xfdl","CMMNBTNADD" : "0","CMMNBTNSAVE" : "0","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "1","CMMNBTNDEL" : "0"},{"MENU_ID" : "10101003","MENU_NM" : "List-Detail2","MENU_LV" : "2","HIPO_MENU_ID" : "10101000","PRGM_ID" : "10101003","LEAF_YN" : "Y","MENU_URL" : "design::template/Temp04.xfdl","USED_YN" : "Y","cmmnBtnPrint" : "","cmmnBtnHelp" : "","cmmnBtnAdd" : "Y","cmmnBtnDel" : "Y","cmmnBtnSave" : "Y","MENU_GRP_ID" : "10100000","MODULE_CD" : "DN","SEARCH_SCOPE_CD" : "10","DISPLAY_PATH" : "디자인 > 템플릿 > List-Detail2","PRGM_PATH" : "design::template/Temp04.xfdl","PRGM_NM" : "List-Detail2","MENU_ORDR" : "3","PRGM_FILE_NM" : "Temp04.xfdl","CMMNBTNADD" : "0","CMMNBTNSAVE" : "0","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "1","CMMNBTNDEL" : "0"},{"MENU_ID" : "10101004","MENU_NM" : "Master-Detail","MENU_LV" : "2","HIPO_MENU_ID" : "10101000","PRGM_ID" : "10101004","LEAF_YN" : "Y","MENU_URL" : "design::template/Temp05.xfdl","USED_YN" : "Y","cmmnBtnPrint" : "","cmmnBtnHelp" : "","cmmnBtnAdd" : "Y","cmmnBtnDel" : "Y","cmmnBtnSave" : "Y","MENU_GRP_ID" : "10100000","MODULE_CD" : "DN","SEARCH_SCOPE_CD" : "10","DISPLAY_PATH" : "디자인 > 템플릿 > Master-Detail","PRGM_PATH" : "design::template/Temp05.xfdl","PRGM_NM" : "Master-Detail","MENU_ORDR" : "4","PRGM_FILE_NM" : "Temp05.xfdl","CMMNBTNADD" : "0","CMMNBTNSAVE" : "0","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "1","CMMNBTNDEL" : "0"},{"MENU_ID" : "10101005","MENU_NM" : "Master-Detail-V","MENU_LV" : "2","HIPO_MENU_ID" : "10101000","PRGM_ID" : "10101005","LEAF_YN" : "Y","MENU_URL" : "design::template/Temp06.xfdl","USED_YN" : "Y","cmmnBtnPrint" : "","cmmnBtnHelp" : "","cmmnBtnAdd" : "Y","cmmnBtnDel" : "Y","cmmnBtnSave" : "Y","MENU_GRP_ID" : "10100000","MODULE_CD" : "DN","SEARCH_SCOPE_CD" : "10","DISPLAY_PATH" : "디자인 > 템플릿 > Master-Detail-V","PRGM_PATH" : "design::template/Temp06.xfdl","PRGM_NM" : "Master-Detail-V","MENU_ORDR" : "5","PRGM_FILE_NM" : "Temp06.xfdl","CMMNBTNADD" : "0","CMMNBTNSAVE" : "0","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "1","CMMNBTNDEL" : "0"},{"MENU_ID" : "10101006","MENU_NM" : "Master-Detail-H","MENU_LV" : "2","HIPO_MENU_ID" : "10101000","PRGM_ID" : "10101006","LEAF_YN" : "Y","MENU_URL" : "design::template/Temp07.xfdl","USED_YN" : "Y","cmmnBtnAdd" : "Y","cmmnBtnDel" : "Y","cmmnBtnSave" : "Y","MENU_GRP_ID" : "10100000","MODULE_CD" : "DN","SEARCH_SCOPE_CD" : "10","DISPLAY_PATH" : "디자인 > 템플릿 > Master-Detail-H","PRGM_PATH" : "design::template/Temp07.xfdl","PRGM_NM" : "Master-Detail-H","MENU_ORDR" : "6","PRGM_FILE_NM" : "Temp07.xfdl","CMMNBTNADD" : "0","CMMNBTNSAVE" : "0","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "1","CMMNBTNDEL" : "0"},{"MENU_NM" : "Master-Detail-VVV","MENU_ID" : "10101010","MENU_LV" : "2","HIPO_MENU_ID" : "10101000","PRGM_ID" : "10101010","LEAF_YN" : "Y","USED_YN" : "Y","MENU_URL" : "design::template/Temp11.xfdl","cmmnBtnSave" : "Y","cmmnBtnDel" : "Y","cmmnBtnAdd" : "Y","MENU_GRP_ID" : "10100000","MODULE_CD" : "DN","SEARCH_SCOPE_CD" : "10","DISPLAY_PATH" : "디자인 > 템플릿 > Master-Detail-VVV","PRGM_PATH" : "design::template/Temp11.xfdl","PRGM_NM" : "Master-Detail-VVV","MENU_ORDR" : "7","PRGM_FILE_NM" : "Temp11.xfdl","CMMNBTNADD" : "0","CMMNBTNSAVE" : "0","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "1","CMMNBTNDEL" : "0"},{"MENU_NM" : "Master-List-Detail-VHH","MENU_ID" : "10101011","MENU_LV" : "2","HIPO_MENU_ID" : "10101000","PRGM_ID" : "10101011","LEAF_YN" : "Y","USED_YN" : "Y","MENU_URL" : "design::template/Temp12.xfdl","cmmnBtnAdd" : "Y","cmmnBtnDel" : "Y","cmmnBtnSave" : "Y","MENU_GRP_ID" : "10100000","MODULE_CD" : "DN","SEARCH_SCOPE_CD" : "10","DISPLAY_PATH" : "디자인 > 템플릿 > Master-List-Detail-VHH","PRGM_PATH" : "design::template/Temp12.xfdl","PRGM_NM" : "Master-List-Detail-VHH","MENU_ORDR" : "8","PRGM_FILE_NM" : "Temp12.xfdl","CMMNBTNADD" : "0","CMMNBTNSAVE" : "0","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "1","CMMNBTNDEL" : "0"},{"MENU_NM" : "Master-List-Detail-HVV","MENU_ID" : "10101012","MENU_LV" : "2","HIPO_MENU_ID" : "10101000","PRGM_ID" : "10101012","LEAF_YN" : "Y","USED_YN" : "Y","MENU_URL" : "design::template/Temp13.xfdl","cmmnBtnSave" : "Y","cmmnBtnDel" : "Y","cmmnBtnAdd" : "Y","MENU_GRP_ID" : "10100000","MODULE_CD" : "DN","SEARCH_SCOPE_CD" : "10","DISPLAY_PATH" : "디자인 > 템플릿 > Master-List-Detail-HVV","PRGM_PATH" : "design::template/Temp13.xfdl","PRGM_NM" : "Master-List-Detail-HVV","MENU_ORDR" : "9","PRGM_FILE_NM" : "Temp13.xfdl","CMMNBTNADD" : "0","CMMNBTNSAVE" : "0","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "1","CMMNBTNDEL" : "0"},{"MENU_NM" : "Tree","MENU_ID" : "10101013","MENU_LV" : "2","HIPO_MENU_ID" : "10101000","PRGM_ID" : "10101013","LEAF_YN" : "Y","USED_YN" : "Y","MENU_URL" : "design::template/Temp14.xfdl","cmmnBtnAdd" : "Y","cmmnBtnDel" : "Y","cmmnBtnSave" : "Y","MENU_GRP_ID" : "10100000","MODULE_CD" : "DN","SEARCH_SCOPE_CD" : "10","DISPLAY_PATH" : "디자인 > 템플릿 > Tree","PRGM_PATH" : "design::template/Temp14.xfdl","PRGM_NM" : "Tree","MENU_ORDR" : "10","PRGM_FILE_NM" : "Temp14.xfdl","CMMNBTNADD" : "0","CMMNBTNSAVE" : "0","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "1","CMMNBTNDEL" : "0"},{"MENU_NM" : "Shuttle","MENU_ID" : "10101014","MENU_LV" : "2","HIPO_MENU_ID" : "10101000","PRGM_ID" : "10101014","LEAF_YN" : "Y","USED_YN" : "Y","MENU_URL" : "design::template/Temp15.xfdl","cmmnBtnSave" : "Y","cmmnBtnDel" : "Y","cmmnBtnAdd" : "Y","MENU_GRP_ID" : "10100000","MODULE_CD" : "DN","SEARCH_SCOPE_CD" : "10","DISPLAY_PATH" : "디자인 > 템플릿 > Shuttle","PRGM_PATH" : "design::template/Temp15.xfdl","PRGM_NM" : "Shuttle","MENU_ORDR" : "11","PRGM_FILE_NM" : "Temp15.xfdl","CMMNBTNADD" : "0","CMMNBTNSAVE" : "0","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "1","CMMNBTNDEL" : "0"},{"MENU_NM" : "Tab","MENU_ID" : "10101015","MENU_LV" : "2","HIPO_MENU_ID" : "10101000","PRGM_ID" : "10101015","LEAF_YN" : "Y","USED_YN" : "Y","MENU_URL" : "design::template/Temp16.xfdl","cmmnBtnAdd" : "Y","cmmnBtnDel" : "Y","cmmnBtnSave" : "Y","MENU_GRP_ID" : "10100000","MODULE_CD" : "DN","SEARCH_SCOPE_CD" : "10","DISPLAY_PATH" : "디자인 > 템플릿 > Tab","PRGM_PATH" : "design::template/Temp16.xfdl","PRGM_NM" : "Tab","MENU_ORDR" : "12","PRGM_FILE_NM" : "Temp16.xfdl","CMMNBTNADD" : "0","CMMNBTNSAVE" : "0","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "1","CMMNBTNDEL" : "0"},{"MENU_NM" : "Popup","MENU_ID" : "10101016","MENU_LV" : "2","HIPO_MENU_ID" : "10101000","PRGM_ID" : "10101016","LEAF_YN" : "Y","USED_YN" : "Y","MENU_URL" : "design::template/Temp17.xfdl","cmmnBtnAdd" : "Y","cmmnBtnDel" : "Y","cmmnBtnSave" : "Y","MENU_GRP_ID" : "10100000","MODULE_CD" : "DN","SEARCH_SCOPE_CD" : "10","DISPLAY_PATH" : "디자인 > 템플릿 > Popup","PRGM_PATH" : "design::template/Temp17.xfdl","PRGM_NM" : "Popup","MENU_ORDR" : "13","PRGM_FILE_NM" : "Temp17.xfdl","CMMNBTNADD" : "0","CMMNBTNSAVE" : "0","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "1","CMMNBTNDEL" : "0"},{"MENU_ID" : "10300000","MENU_NM" : "개발표준","MENU_LV" : "0","PRGM_ID" : "10300000","USED_YN" : "Y","cmmnBtnPrint" : "","cmmnBtnHelp" : "","MENU_GRP_ID" : "10300000","MODULE_CD" : "SP","DISPLAY_PATH" : "개발표준"},{"MENU_ID" : "10301000","MENU_NM" : "공통 기능","MENU_LV" : "1","HIPO_MENU_ID" : "10300000","PRGM_ID" : "10300000","USED_YN" : "Y","cmmnBtnPrint" : "","cmmnBtnHelp" : "","MENU_GRP_ID" : "10300000","MODULE_CD" : "SP","DISPLAY_PATH" : "개발표준 > 공통 기능"},{"MENU_ID" : "10301001","MENU_NM" : "스크립트 표준","MENU_LV" : "2","HIPO_MENU_ID" : "10301000","PRGM_ID" : "10301001","LEAF_YN" : "Y","MENU_URL" : "sample::sampleScript.xfdl","USED_YN" : "Y","cmmnBtnPrint" : "","cmmnBtnHelp" : "","MENU_GRP_ID" : "10300000","MODULE_CD" : "SP","SEARCH_SCOPE_CD" : "10","DISPLAY_PATH" : "개발표준 > 공통 기능 > 스크립트 표준","PRGM_PATH" : "sample::sampleScript.xfdl","PRGM_NM" : "스크립트 샘플(기능X)","PARM" : "","PRGM_FILE_NM" : "sampleScript.xfdl","MENU_ORDR" : "1","CMMNBTNADD" : "0","CMMNBTNSAVE" : "0","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "0","CMMNBTNDEL" : "0"},{"MENU_ID" : "10301002","MENU_NM" : "트랜잭션","MENU_LV" : "2","HIPO_MENU_ID" : "10301000","PRGM_ID" : "10301002","LEAF_YN" : "Y","MENU_URL" : "sample::sampleTransaction.xfdl","USED_YN" : "Y","cmmnBtnAdd" : "Y","cmmnBtnDel" : "Y","cmmnBtnSave" : "Y","cmmnBtnPrint" : "","cmmnBtnHelp" : "","MENU_GRP_ID" : "10300000","MODULE_CD" : "SP","CMMNBTNDEL" : "1","CMMNBTNSEARCH" : "1","CMMNBTNSAVE" : "1","CMMNBTNADD" : "1","SEARCH_SCOPE_CD" : "10","DISPLAY_PATH" : "개발표준 > 공통 기능 > 트랜잭션","PRGM_PATH" : "sample::sampleTransaction.xfdl","PRGM_NM" : "트랜잭션 샘플","PARM" : "","PRGM_FILE_NM" : "sampleTransaction.xfdl","MENU_ORDR" : "2","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0"},{"MENU_ID" : "10301003","MENU_NM" : "팝업","MENU_LV" : "2","HIPO_MENU_ID" : "10301000","PRGM_ID" : "10301003","LEAF_YN" : "Y","MENU_URL" : "sample::samplePopup.xfdl","USED_YN" : "Y","cmmnBtnAdd" : "Y","cmmnBtnSave" : "Y","cmmnBtnHelp" : "","MENU_GRP_ID" : "10300000","MODULE_CD" : "SP","SEARCH_SCOPE_CD" : "10","DISPLAY_PATH" : "개발표준 > 공통 기능 > 팝업","PRGM_PATH" : "sample::samplePopup.xfdl","PRGM_NM" : "팝업샘플","PARM" : "","PRGM_FILE_NM" : "samplePopup.xfdl","MENU_ORDR" : "3","CMMNBTNADD" : "0","CMMNBTNSAVE" : "0","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "1","CMMNBTNDEL" : "0"},{"MENU_ID" : "10301004","MENU_NM" : "메세지","MENU_LV" : "2","HIPO_MENU_ID" : "10301000","PRGM_ID" : "10301004","LEAF_YN" : "Y","MENU_URL" : "sample::sampleMessage.xfdl","USED_YN" : "Y","MENU_GRP_ID" : "10300000","MODULE_CD" : "SP","SEARCH_SCOPE_CD" : "10","DISPLAY_PATH" : "개발표준 > 공통 기능 > 메세지","PRGM_PATH" : "sample::sampleMessage.xfdl","PRGM_NM" : "메세지 샘플","PARM" : "","CMMNBTNADD" : "0","CMMNBTNSAVE" : "0","CMMNBTNDEL" : "0","CMMNBTNSEARCH" : "1","PRGM_FILE_NM" : "sampleMessage.xfdl","MENU_ORDR" : "4","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0"}]});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsGridPopupMenu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "grp","type" : "STRING","size" : "256"},{"id" : "id","type" : "STRING","size" : "256"},{"id" : "level","type" : "STRING","size" : "256"},{"id" : "caption","type" : "STRING","size" : "256"},{"id" : "enable","type" : "STRING","size" : "256"},{"id" : "userData","type" : "STRING","size" : "256"},{"id" : "upmenu","type" : "STRING","size" : "256"},{"id" : "bandtype","type" : "STRING","size" : "256"},{"id" : "curselect","type" : "STRING","size" : "256"},{"id" : "enableMenu","type" : "STRING","size" : "256"}]},"Rows" : [{"grp" : "sort","id" : "sort","level" : "0","caption" : "헤더정렬사용","enable" : "false","userData" : "0","bandtype" : "head","enableMenu" : "true"},{"grp" : "sort","id" : "sortfree","level" : "0","caption" : "헤더정렬사용안함","enable" : "false","userData" : "0","bandtype" : "head","enableMenu" : "false"}]});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMyMenu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SORT_ORDR","type" : "int","size" : "4"},{"id" : "MODULE_CD","type" : "string","size" : "32"},{"id" : "PRGM_FULL_PATH","type" : "string","size" : "32"},{"id" : "SYTM_FLAG_CD","type" : "string","size" : "32"},{"id" : "USER_ID","type" : "string","size" : "32"},{"id" : "MENU_ID","type" : "string","size" : "32"},{"id" : "MENU_NM_EN","type" : "STRING","size" : "256"},{"id" : "MENU_NM","type" : "string","size" : "32"},{"id" : "PRGM_ID","type" : "string","size" : "32"},{"id" : "PRGM_PATH","type" : "string","size" : "32"}]},"Rows" : [{"SORT_ORDR" : "1","MODULE_CD" : "SP","PRGM_FULL_PATH" : "sample::sampleScript.xfdl","SYTM_FLAG_CD" : "PC","MENU_ID" : "10301001","MENU_NM" : "스크립트 표준","PRGM_ID" : "10301001","PRGM_PATH" : "sample::sampleScript.xfdl"},{"SORT_ORDR" : "2","MODULE_CD" : "SP","PRGM_FULL_PATH" : "sample::sampleTransaction.xfdl","SYTM_FLAG_CD" : "PC","MENU_ID" : "10301002","MENU_NM" : "트랜잭션","PRGM_ID" : "10301002","PRGM_PATH" : "sample::sampleTransaction.xfdl"}]});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsAddBtn", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SYTM_FLAG_CD","type" : "STRING","size" : "256"},{"id" : "MENU_ID","type" : "STRING","size" : "256"},{"id" : "BTTN_ID","type" : "STRING","size" : "256"},{"id" : "SORT_CD","type" : "STRING","size" : "256"},{"id" : "SORT_ORDR","type" : "STRING","size" : "256"},{"id" : "BTTN_NM","type" : "STRING","size" : "256"},{"id" : "BTTN_ENGL_NM","type" : "STRING","size" : "256"},{"id" : "BTTN_STYLE","type" : "STRING","size" : "256"}]}});
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("gvSytmFlagCd","PC");
            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("application");
            this.set_screenid("desktop");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","900",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("Desktop MDI");
            mainframe.set_showcascadetitletext("false");
            mainframe.set_openalign("center middle");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("vfrs",null,null,null,null,null,null,this);
            frame0.set_showtitleicon("false");
            frame0.set_showtitlebar("false");
            frame0.set_showstatusbar("false");
            frame0.set_separatesize("*,0,0");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("frmLogin",null,null,null,null,null,null,"",frame0);
            frame1.set_dragmovetype("none");
            frame1.set_showtitlebar("false");
            frame1.set_showtitleicon("false");
            frame0.addChild(frame1.name, frame1);

            var frame2 = new ChildFrame("frmTop",null,null,null,null,null,null,"",frame0);
            frame2.set_showtitleicon("false");
            frame2.set_showtitlebar("false");
            frame2.set_dragmovetype("none");
            frame0.addChild(frame2.name, frame2);

            var frame3 = new HFrameSet("hfrs",null,null,null,null,null,null,frame0);
            frame3.set_separatesize("0,*");
            frame3.set_showtitlebar("false");
            frame3.set_showtitleicon("false");
            frame0.addChild(frame3.name, frame3);

            var frame4 = new ChildFrame("frmLeft",null,null,null,null,null,null,"",frame3);
            frame4.set_showtitlebar("false");
            frame4.set_dragmovetype("none");
            frame4.set_showtitleicon("false");
            frame3.addChild(frame4.name, frame4);

            var frame5 = new VFrameSet("vfrsWork",null,null,null,null,null,null,frame3);
            frame5.set_separatesize("42,*,0,0");
            frame5.set_showtitlebar("false");
            frame5.set_showtitleicon("false");
            frame3.addChild(frame5.name, frame5);

            var frame6 = new ChildFrame("frmMdi",null,null,null,null,null,null,"",frame5);
            frame6.set_showtitlebar("false");
            frame6.set_showtitleicon("false");
            frame6.set_dragmovetype("none");
            frame5.addChild(frame6.name, frame6);

            var frame7 = new ChildFrame("frmMain",null,null,null,null,null,null,"",frame5);
            frame7.set_showtitlebar("false");
            frame7.set_dragmovetype("none");
            frame7.set_showtitleicon("false");
            frame5.addChild(frame7.name, frame7);

            var frame8 = new FrameSet("frsWork",null,null,null,null,null,null,frame5);
            frame8.set_showtitlebar("false");
            frame8.set_showtitleicon("false");
            frame5.addChild(frame8.name, frame8);
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.application_onload,this);
            this.mainframe.addEventHandler("onsize",this.mainframe_onsize,this);
        };
        
        // script Compiler
        this.registerScript("application.xadl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	application
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT				application
        *******************************************************************************
        */

        /************************************************************************************************
         * application 변수 선언 영역
        ************************************************************************************************/
        this.gvRunMode  = "";					// 실행환경 S : Studio, L : local, D : 개발, R : 운영

        /* 각 프레임에 해당되는 객체 참조 변수 */
        this.gvVfrs;
        this.gvFrmLogin;
        this.gvFrmTop ;
        this.gvHfrs;
        this.gvFrmLeft;
        this.gvVfrsWork;
        this.gvFrmMdi;
        this.gvFrmMain;
        this.gvFrsWork;

        /* 프레임 관련 변수*/
        this.LOGIN_FORM_PATH = "frame::frmLogin.xfdl";
        this.TOP_FORM_PATH   = "frame::frmTop.xfdl";
        this.LEFT_FORM_PATH  = "frame::frmLeft.xfdl";
        this.WORK_FORM_PATH  = "frame::frmWork.xfdl";
        this.MDI_FORM_PATH   = "frame::frmMdi.xfdl";
        this.MAIN_FORM_PATH  = "frame::frmMain.xfdl";

        this.gvOpenMaxFrame = 10; 				// 열리는 프레임 최대 갯수
        this.gvFrameStat = "login";				// 프레임상태(login,main,sub)
        this.gvCloseCheck;						// 화면 닫을때 체크할지 여부
        this.gvTitlebarHeight = 0;				// 차일드프레임 타이틀바 높이

        /* grid 관련 */
        this.gvUseGridContextMenu = true;		// 그리드 Context Menu 사용 여부

        /***********************************************************************************************
        * Application EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        this.application_onload = function(obj,e)
        {
        	// QuikView 여부 설정
        	nexacro.setEnvironmentVariable("evQuikView", "N");

        	//trace ("======================== PcMdi 프로젝트(PC) Start ==============================");

        	// 각 프레임에 해당되는 객체 참조 변수 설정
        	this.gvVfrs = this.mainframe.vfrs;
        	this.gvFrmLogin = this.mainframe.vfrs.frmLogin;
        	this.gvFrmTop = this.mainframe.vfrs.frmTop;
        	this.gvHfrs = this.mainframe.vfrs.hfrs;
        	this.gvFrmLeft 	= this.mainframe.vfrs.hfrs.frmLeft;
        	this.gvVfrsWork = this.mainframe.vfrs.hfrs.vfrsWork;
        	this.gvFrmMain = this.mainframe.vfrs.hfrs.vfrsWork.frmMain;
        	this.gvFrsWork = this.mainframe.vfrs.hfrs.vfrsWork.frsWork;
        	this.gvFrmMdi	= this.mainframe.vfrs.hfrs.vfrsWork.frmMdi;

        	var sRunMode = "S";  // S : Studio, L : local, D : 개발, R : 운영
        	var objEnv	 = nexacro.getEnvironment();
        	var objSrv   = objEnv.services["svcUrl"];

        	// 런타임 접속
        	if (system.navigatorname == "nexacro")
        	{
        		var sXadl = nexacro.getProjectPath();
        		// 로컬(Studio)
        		if (sXadl.indexOf("file://") != -1)
        		{
        			sRunMode = "S";
        			this.mainframe.set_titletext("로컬(Studio) - " + this.mainframe.titletext);
        		}

        		// Runtime 실행할때 TitleBar 크기(30px) 만큼 높이를 조정
        		this.mainframe.set_height(932);
        		// Runtime 실행할때 border 보이도록 설정
        		this.mainframe.set_border("1px solid #111111");
        	}
        	else 	//WEB 접속
        	{
        		var urlPath = window.location.protocol + "//" + window.location.host;
        		//서비스  URL 세팅
         		objSrv.set_url(urlPath+"/");

        		// 로컬(웹)
        	    if (objSrv.url.indexOf("localhost") > -1 || objSrv.url.indexOf("127.0.0.1") > -1 )
        		{
        			sRunMode = "L";
        			this.mainframe.set_titletext("로컬(웹)  - " + this.mainframe.titletext);
        		}
        	}
        	this.gvRunMode = sRunMode;
         	trace("========== 접속경로 : " + nexacro.getProjectPath() + " / 실행환경(nRunMode) : " + this.gvRunMode + " / 서비스URL : " + objSrv.url + " ================");

        	// 로그인 화면 보여주기
        	this.gvFrmLogin.set_formurl(this.LOGIN_FORM_PATH);
        };

        this.mainframe_onsize = function(obj,e)
        {
        	var objFrame = nexacro.getPopupFrames();
        	var nLeft = 0;
        	var nTop = 0;
        	for (var i = objFrame.length-1; i >= 0; i--)
        	{
        		if (objFrame[i]._modaltype == "center")
        		{
        			nLeft = (nexacro.getApplication().mainframe.width - objFrame[i].width)/2;
        			nTop = (nexacro.getApplication().mainframe.height - objFrame[i].height)/2;
        			objFrame[i].move(nLeft, nTop);
        		}
        	}
        };

        });
        this.checkLicense("");
        
        this.loadPreloadList();

        this.loadIncludeScript("application.xadl");
    };
}
)();
