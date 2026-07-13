(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
			// global dataobject
            obj = new nexacro.DataObject("DataObject0", this);
            obj.addEventHandler("onload",this.DataObject0_onload,this);
            this._addDataObject(obj.name, obj);		

            // global dataset
            obj = new nexacro.Dataset("gdsMessage", this);
            obj.addEventHandler("onload",this.gdsMessage_onload,this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "MSGE_CD","size" : "256","type" : "STRING"},{"id" : "KORN_MSGE","size" : "256","type" : "STRING"},{"id" : "MSGE_FLAG_CD","size" : "3","type" : "STRING"},{"id" : "msgTitle","size" : "256","type" : "STRING"}]},"Rows" : [{"MSGE_CD" : "msg.server.error","KORN_MSGE" : "서버 오류입니다.\\n관리자에게 문의하세요.","MSGE_FLAG_CD" : "ERR","msgTitle" : "에러"},{"MSGE_CD" : "msg.session.timeout","KORN_MSGE" : "세션이 종료되었습니다. 다시 로그인해주세요.","MSGE_FLAG_CD" : "WAN","msgTitle" : "경고"},{"MSGE_CD" : "confirm.exit","msgTitle" : "확인","MSGE_FLAG_CD" : "CFN","KORN_MSGE" : "종료 하시겠습니까?"},{"MSGE_CD" : "confirm.logout","KORN_MSGE" : "로그아웃 하시겠습니까?","MSGE_FLAG_CD" : "CFN","msgTitle" : "확인"},{"MSGE_CD" : "confirm.before.movepage","KORN_MSGE" : "변경된 데이터가 있습니다. 현재 화면을 닫겠습니까?","MSGE_FLAG_CD" : "CFN","msgTitle" : "확인"},{"MSGE_CD" : "msg.save.nochange","KORN_MSGE" : "변경된 내역이 없습니다.","MSGE_FLAG_CD" : "WAN","msgTitle" : "경고"},{"MSGE_CD" : "msg.err.validator","KORN_MSGE" : "{0}","MSGE_FLAG_CD" : "WAN","msgTitle" : "경고"},{"MSGE_CD" : "msg.err.validator.required","KORN_MSGE" : "{0} 은(는) 필수 입력 항목입니다.","MSGE_FLAG_CD" : "WAN","msgTitle" : "경고"},{"MSGE_CD" : "msg.err.tran","KORN_MSGE" : "{0}","MSGE_FLAG_CD" : "WAN","msgTitle" : "경고"},{"MSGE_CD" : "msg.general","KORN_MSGE" : "{0}","MSGE_FLAG_CD" : "INF","msgTitle" : "알림"},{"MSGE_CD" : "confirm.save","KORN_MSGE" : "저장 하시겠습니까?","MSGE_FLAG_CD" : "CFN","msgTitle" : "확인"},{"MSGE_CD" : "msg.exist","KORN_MSGE" : "{0} 가(이) 존재합니다.","MSGE_FLAG_CD" : "INF","msgTitle" : "알림"},{"MSGE_CD" : "msg.database.error","KORN_MSGE" : "데이터베이스 오류입니다. \\n에러코드 : {0}","MSGE_FLAG_CD" : "WAN","msgTitle" : "경고"}]});
            this._addDataset(obj.name, obj);


            obj = new nexacro.Dataset("gdsMenu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "MENU_ENGL_NM","size" : "32","type" : "string"},{"id" : "ENGL_DISPLAY_PATH","size" : "32","type" : "string"},{"id" : "MODULE_CD","size" : "32","type" : "string"},{"id" : "CMMNBTNADD","size" : "32","type" : "string"},{"id" : "DISPLAY_PATH","size" : "32","type" : "string"},{"id" : "SYTM_FLAG_CD","size" : "32","type" : "string"},{"id" : "MENU_ORDR","size" : "4","type" : "int"},{"id" : "PARM","size" : "256","type" : "STRING"},{"id" : "CMMNBTNSAVE","size" : "32","type" : "string"},{"id" : "MENU_ID","size" : "32","type" : "string"},{"id" : "MENU_URL","size" : "256","type" : "STRING"},{"id" : "PRGM_FILE_NM","size" : "256","type" : "STRING"},{"id" : "MENU_LV","size" : "4","type" : "int"},{"id" : "SEARCH_SCOPE_CD","size" : "256","type" : "STRING"},{"id" : "MENU_PATH","size" : "32","type" : "string"},{"id" : "MENU_FLAG_CD","size" : "32","type" : "string"},{"id" : "CMMNBTNINIT","size" : "32","type" : "string"},{"id" : "CMMNBTNPRINT","size" : "32","type" : "string"},{"id" : "CMMNBTNEXCELDOWN","size" : "32","type" : "string"},{"id" : "CMMNBTNSEARCH","size" : "32","type" : "string"},{"id" : "CMMNBTNDEL","size" : "32","type" : "string"},{"id" : "SortOrder","size" : "32","type" : "string"},{"id" : "PRGM_HELP_FLAG","size" : "32","type" : "string"},{"id" : "MENU_NM","size" : "32","type" : "string"},{"id" : "REMK","size" : "256","type" : "STRING"},{"id" : "HIPO_MENU_ID","size" : "32","type" : "string"},{"id" : "PRGM_ID","size" : "256","type" : "STRING"},{"id" : "PRGM_PATH","size" : "256","type" : "STRING"}]},"Rows" : [{"MODULE_CD" : "SP","CMMNBTNADD" : "0","DISPLAY_PATH" : "개발표준","SYTM_FLAG_CD" : "MO","MENU_ORDR" : "2","CMMNBTNSAVE" : "0","MENU_ID" : "10300000M","MENU_LV" : "0","MENU_PATH" : "10300000M","MENU_FLAG_CD" : "M","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "0","CMMNBTNDEL" : "0","SortOrder" : "2","PRGM_HELP_FLAG" : "","MENU_NM" : "개발표준","HIPO_MENU_ID" : "0"},{"MODULE_CD" : "SP","CMMNBTNADD" : "0","DISPLAY_PATH" : "개발표준 > 공통 기능","SYTM_FLAG_CD" : "MO","MENU_ORDR" : "1","CMMNBTNSAVE" : "0","MENU_ID" : "10301000M","MENU_LV" : "1","MENU_PATH" : "10300000M,10301000M","MENU_FLAG_CD" : "M","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "0","CMMNBTNDEL" : "0","SortOrder" : "002|001","PRGM_HELP_FLAG" : "","MENU_NM" : "공통 기능","HIPO_MENU_ID" : "10300000M"},{"MODULE_CD" : "SP","CMMNBTNADD" : "0","DISPLAY_PATH" : "개발표준 > 공통 기능 > 스크립트 표준","SYTM_FLAG_CD" : "MO","MENU_ORDR" : "1","CMMNBTNSAVE" : "0","MENU_ID" : "10301002M","MENU_URL" : "sample::sampleScript.xfdl","PRGM_FILE_NM" : "sampleScript.xfdl","MENU_LV" : "2","SEARCH_SCOPE_CD" : "10","MENU_PATH" : "10300000M,10301000M,10301002M","MENU_FLAG_CD" : "P","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "0","CMMNBTNDEL" : "0","SortOrder" : "002|001|001","PRGM_HELP_FLAG" : "","MENU_NM" : "스크립트 표준","HIPO_MENU_ID" : "10301000M","PRGM_ID" : "M000000038","PRGM_PATH" : "sample::sampleScript.xfdl"},{"MODULE_CD" : "SP","CMMNBTNADD" : "1","DISPLAY_PATH" : "개발표준 > 공통 기능 > 트랜잭션","SYTM_FLAG_CD" : "MO","MENU_ORDR" : "2","CMMNBTNSAVE" : "1","MENU_ID" : "10301001M","MENU_URL" : "sample::sampleTransaction.xfdl","PRGM_FILE_NM" : "sampleTransaction.xfdl","MENU_LV" : "2","SEARCH_SCOPE_CD" : "10","MENU_PATH" : "10300000M,10301000M,10301001M","MENU_FLAG_CD" : "P","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "1","CMMNBTNDEL" : "0","SortOrder" : "002|001|002","PRGM_HELP_FLAG" : "","MENU_NM" : "트랜잭션","HIPO_MENU_ID" : "10301000M","PRGM_ID" : "M000000040","PRGM_PATH" : "sample::sampleTransaction.xfdl"},{"MODULE_CD" : "SP","CMMNBTNADD" : "0","DISPLAY_PATH" : "개발표준 > 공통 기능 > 메세지","SYTM_FLAG_CD" : "MO","MENU_ORDR" : "3","CMMNBTNSAVE" : "0","MENU_ID" : "10301017M","MENU_URL" : "sample::sampleMessage.xfdl","PRGM_FILE_NM" : "sampleMessage.xfdl","MENU_LV" : "2","SEARCH_SCOPE_CD" : "10","MENU_PATH" : "10300000M,10301000M,10301017M","MENU_FLAG_CD" : "P","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "1","CMMNBTNDEL" : "1","SortOrder" : "002|001|003","PRGM_HELP_FLAG" : "","MENU_NM" : "메세지","HIPO_MENU_ID" : "10301000M","PRGM_ID" : "P000000026","PRGM_PATH" : "sample::sampleMessage.xfdl"},{"MODULE_CD" : "SP","CMMNBTNADD" : "0","DISPLAY_PATH" : "개발표준 > 공통 기능 > 팝업","SYTM_FLAG_CD" : "MO","MENU_ORDR" : "3","CMMNBTNSAVE" : "0","MENU_ID" : "10301003M","MENU_URL" : "sample::samplePopup.xfdl","PRGM_FILE_NM" : "samplePopup.xfdl","MENU_LV" : "2","SEARCH_SCOPE_CD" : "10","MENU_PATH" : "10300000M,10301000M,10301003M","MENU_FLAG_CD" : "P","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "0","CMMNBTNDEL" : "0","SortOrder" : "002|001|003","PRGM_HELP_FLAG" : "","MENU_NM" : "팝업","HIPO_MENU_ID" : "10301000M","PRGM_ID" : "M000000021","PRGM_PATH" : "sample::samplePopup.xfdl"},{"MODULE_CD" : "DN","CMMNBTNADD" : "0","DISPLAY_PATH" : "디자인","SYTM_FLAG_CD" : "MO","MENU_ORDR" : "3","CMMNBTNSAVE" : "0","MENU_ID" : "10100000M","MENU_LV" : "0","MENU_PATH" : "10100000M","MENU_FLAG_CD" : "M","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "0","CMMNBTNDEL" : "0","SortOrder" : "3","PRGM_HELP_FLAG" : "","MENU_NM" : "디자인","HIPO_MENU_ID" : "0"},{"MODULE_CD" : "DN","CMMNBTNADD" : "0","DISPLAY_PATH" : "디자인 > 템플릿","SYTM_FLAG_CD" : "MO","MENU_ORDR" : "2","CMMNBTNSAVE" : "0","MENU_ID" : "10101000M","MENU_LV" : "1","MENU_PATH" : "10100000M,10101000M","MENU_FLAG_CD" : "M","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "0","CMMNBTNDEL" : "0","SortOrder" : "003|002","PRGM_HELP_FLAG" : "","MENU_NM" : "템플릿","HIPO_MENU_ID" : "10100000M"},{"MENU_ENGL_NM" : "FoldingList","MODULE_CD" : "DN","CMMNBTNADD" : "0","DISPLAY_PATH" : "디자인 > 템플릿 > FoldingList","SYTM_FLAG_CD" : "MO","MENU_ORDR" : "1","CMMNBTNSAVE" : "0","MENU_ID" : "10101001M","MENU_URL" : "design::Template/Temp15.xfdl","PRGM_FILE_NM" : "Temp15.xfdl","MENU_LV" : "2","SEARCH_SCOPE_CD" : "10","MENU_PATH" : "10100000M,10101000M,10101001M","MENU_FLAG_CD" : "P","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "0","CMMNBTNDEL" : "0","SortOrder" : "003|002|001","PRGM_HELP_FLAG" : "","MENU_NM" : "FoldingList","HIPO_MENU_ID" : "10101000M","PRGM_ID" : "M000000010","PRGM_PATH" : "design::Template/Temp15.xfdl"},{"MENU_ENGL_NM" : "SingleDetail","MODULE_CD" : "DN","CMMNBTNADD" : "0","DISPLAY_PATH" : "디자인 > 템플릿 > SingleDetail","SYTM_FLAG_CD" : "MO","MENU_ORDR" : "2","CMMNBTNSAVE" : "0","MENU_ID" : "10101002M","MENU_URL" : "design::Template/Temp16.xfdl","PRGM_FILE_NM" : "Temp16.xfdl","MENU_LV" : "2","SEARCH_SCOPE_CD" : "10","MENU_PATH" : "10100000M,10101000M,10101002M","MENU_FLAG_CD" : "P","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "0","CMMNBTNDEL" : "0","SortOrder" : "003|002|002","PRGM_HELP_FLAG" : "","MENU_NM" : "SingleDetail","HIPO_MENU_ID" : "10101000M","PRGM_ID" : "M000000011","PRGM_PATH" : "design::Template/Temp16.xfdl"},{"MENU_ENGL_NM" : "ListDetail(List)","MODULE_CD" : "DN","CMMNBTNADD" : "0","DISPLAY_PATH" : "디자인 > 템플릿 > ListDetail(List)","SYTM_FLAG_CD" : "MO","MENU_ORDR" : "3","CMMNBTNSAVE" : "0","MENU_ID" : "10101003M","MENU_URL" : "design::Template/Temp17.xfdl","PRGM_FILE_NM" : "Temp17.xfdl","MENU_LV" : "2","SEARCH_SCOPE_CD" : "10","MENU_PATH" : "10100000M,10101000M,10101003M","MENU_FLAG_CD" : "P","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "0","CMMNBTNDEL" : "0","SortOrder" : "003|002|003","PRGM_HELP_FLAG" : "","MENU_NM" : "ListDetail(List)","HIPO_MENU_ID" : "10101000M","PRGM_ID" : "M000000012","PRGM_PATH" : "design::Template/Temp17.xfdl"},{"MENU_ENGL_NM" : "SearchDetail","MODULE_CD" : "DN","CMMNBTNADD" : "0","DISPLAY_PATH" : "디자인 > 템플릿 > SearchDetail","SYTM_FLAG_CD" : "MO","MENU_ORDR" : "4","CMMNBTNSAVE" : "0","MENU_ID" : "10101007M","MENU_URL" : "design::Template/Temp21.xfdl","PRGM_FILE_NM" : "Temp21.xfdl","MENU_LV" : "2","SEARCH_SCOPE_CD" : "10","MENU_PATH" : "10100000M,10101000M,10101007M","MENU_FLAG_CD" : "P","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "0","CMMNBTNDEL" : "0","SortOrder" : "003|002|004","PRGM_HELP_FLAG" : "","MENU_NM" : "SearchDetail","HIPO_MENU_ID" : "10101000M","PRGM_ID" : "M000000042","PRGM_PATH" : "design::Template/Temp21.xfdl"},{"MENU_ENGL_NM" : "SearchDetailList","MODULE_CD" : "DN","CMMNBTNADD" : "0","DISPLAY_PATH" : "디자인 > 템플릿 > SearchDetailList","SYTM_FLAG_CD" : "MO","MENU_ORDR" : "5","CMMNBTNSAVE" : "0","MENU_ID" : "101010087M","MENU_URL" : "design::Template/Temp22.xfdl","PRGM_FILE_NM" : "Temp22.xfdl","MENU_LV" : "2","SEARCH_SCOPE_CD" : "10","MENU_PATH" : "10100000M,10101000M,101010087M","MENU_FLAG_CD" : "P","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "0","CMMNBTNDEL" : "0","SortOrder" : "003|002|005","PRGM_HELP_FLAG" : "","MENU_NM" : "SearchDetailList","HIPO_MENU_ID" : "10101000M","PRGM_ID" : "M000000043","PRGM_PATH" : "design::Template/Temp22.xfdl"},{"MENU_ENGL_NM" : "Tab","MODULE_CD" : "DN","CMMNBTNADD" : "0","DISPLAY_PATH" : "디자인 > 템플릿 > Tab","SYTM_FLAG_CD" : "MO","MENU_ORDR" : "6","CMMNBTNSAVE" : "0","MENU_ID" : "10101004M","MENU_URL" : "design::Template/Temp18.xfdl","PRGM_FILE_NM" : "Temp18.xfdl","MENU_LV" : "2","SEARCH_SCOPE_CD" : "10","MENU_PATH" : "10100000M,10101000M,10101004M","MENU_FLAG_CD" : "P","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "0","CMMNBTNDEL" : "0","SortOrder" : "003|002|006","PRGM_HELP_FLAG" : "","MENU_NM" : "Tab","HIPO_MENU_ID" : "10101000M","PRGM_ID" : "M000000013","PRGM_PATH" : "design::Template/Temp18.xfdl"},{"MENU_ENGL_NM" : "Popup","MODULE_CD" : "DN","CMMNBTNADD" : "0","DISPLAY_PATH" : "디자인 > 템플릿 > Popup","SYTM_FLAG_CD" : "MO","MENU_ORDR" : "7","CMMNBTNSAVE" : "0","MENU_ID" : "10101005M","MENU_URL" : "design::Template/Temp19P.xfdl","PRGM_FILE_NM" : "Temp19P.xfdl","MENU_LV" : "2","SEARCH_SCOPE_CD" : "10","MENU_PATH" : "10100000M,10101000M,10101005M","MENU_FLAG_CD" : "P","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "0","CMMNBTNDEL" : "0","SortOrder" : "003|002|007","PRGM_HELP_FLAG" : "","MENU_NM" : "Popup","HIPO_MENU_ID" : "10101000M","PRGM_ID" : "M000000014","PRGM_PATH" : "design::Template/Temp19P.xfdl"},{"MENU_ENGL_NM" : "Shuttle","MODULE_CD" : "DN","CMMNBTNADD" : "0","DISPLAY_PATH" : "디자인 > 템플릿 > Shuttle","SYTM_FLAG_CD" : "MO","MENU_ORDR" : "8","CMMNBTNSAVE" : "0","MENU_ID" : "10101006M","MENU_URL" : "design::Template/Temp20.xfdl","PRGM_FILE_NM" : "Temp20.xfdl","MENU_LV" : "2","SEARCH_SCOPE_CD" : "10","MENU_PATH" : "10100000M,10101000M,10101006M","MENU_FLAG_CD" : "P","CMMNBTNINIT" : "0","CMMNBTNPRINT" : "0","CMMNBTNEXCELDOWN" : "0","CMMNBTNSEARCH" : "0","CMMNBTNDEL" : "0","SortOrder" : "003|002|008","PRGM_HELP_FLAG" : "","MENU_NM" : "Shuttle","HIPO_MENU_ID" : "10101000M","PRGM_ID" : "M000000015","PRGM_PATH" : "design::Template/Temp20.xfdl"}]});
            this._addDataset(obj.name, obj);


            obj = new nexacro.Dataset("gds", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "global"},{"Column0" : "Dataset"},{"Column0" : "sample"}]});
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("gvSytmFlagCd","MO");
            this._addVariable("gvIsLogin","N");
            this._addVariable("gvOpenMenuId","");
            this._addVariable("gvParam","");
            
			// global object

            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("desktop");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_showstatusbar("true");
            mainframe.set_showtitlebar("true");
            mainframe.set_titletext("TopLeftFrame");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;

            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new nexacro.ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);

            obj.set_formurl(nexacro._quickview_formurl);

            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };

		// script Compiler


		this.checkLicense("");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
