(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmLog");
            this.set_titletext("로그");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,740);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsScript", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SYTM_FLAG_CD","type" : "STRING","size" : "256"},{"id" : "USER_ID","type" : "STRING","size" : "256"},{"id" : "LOG_TYPE","type" : "STRING","size" : "256"},{"id" : "ALOG_DTTM","type" : "DATETIME","size" : "256"},{"id" : "MENU_ID","type" : "STRING","size" : "256"},{"id" : "MENU_NM","type" : "STRING","size" : "256"},{"id" : "PRGM_ID","type" : "STRING","size" : "256"},{"id" : "PRGM_PATH","type" : "STRING","size" : "256"},{"id" : "ERR_TYPE","type" : "STRING","size" : "256"},{"id" : "ERR_MSG","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTran", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SYTM_FLAG_CD","type" : "STRING","size" : "256"},{"id" : "USER_ID","type" : "STRING","size" : "256"},{"id" : "LOG_TYPE","type" : "STRING","size" : "256"},{"id" : "ALOG_DTTM","type" : "DATETIME","size" : "256"},{"id" : "MENU_ID","type" : "STRING","size" : "256"},{"id" : "MENU_NM","type" : "STRING","size" : "256"},{"id" : "PRGM_ID","type" : "STRING","size" : "256"},{"id" : "PRGM_PATH","type" : "STRING","size" : "256"},{"id" : "ERR_TYPE","type" : "STRING","size" : "256"},{"id" : "ERR_MSG","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserLog", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SYTM_FLAG_CD","type" : "STRING","size" : "256"},{"id" : "USER_ID","type" : "STRING","size" : "256"},{"id" : "LOG_TYPE","type" : "STRING","size" : "256"},{"id" : "ALOG_DTTM","type" : "DATETIME","size" : "256"},{"id" : "MENU_ID","type" : "STRING","size" : "256"},{"id" : "MENU_NM","type" : "STRING","size" : "256"},{"id" : "PRGM_ID","type" : "STRING","size" : "256"},{"id" : "PRGM_PATH","type" : "STRING","size" : "256"},{"id" : "ERR_TYPE","type" : "STRING","size" : "256"},{"id" : "ERR_MSG","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab00","40","40",null,"572","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("56");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.set_text("Script Error Log");
            this.tab00.addChild(obj.name, obj);

            obj = new Grid("grdScript","0","38",null,null,"0","0",null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsScript");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"400\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"발생일시\"/><Cell col=\"1\" text=\"메뉴ID\"/><Cell col=\"2\" text=\"메뉴명\"/><Cell col=\"3\" text=\"프로그램ID\"/><Cell col=\"4\" text=\"화면URL\"/><Cell col=\"5\" text=\"에러타입\"/><Cell col=\"6\" text=\"내용\"/></Band><Band id=\"body\"><Cell wordWrap=\"english\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"####-##-## ##:##:##.###\" expr=\"ALOG_DTTM.toString()\"/><Cell col=\"1\" text=\"bind:MENU_ID\" wordWrap=\"english\"/><Cell col=\"2\" text=\"bind:MENU_NM\"/><Cell col=\"3\" text=\"bind:PRGM_ID\" wordWrap=\"english\"/><Cell col=\"4\" text=\"bind:PRGM_PATH\" wordWrap=\"english\"/><Cell col=\"5\" text=\"bind:ERR_TYPE\" wordWrap=\"english\"/><Cell col=\"6\" text=\"bind:ERR_MSG\" wordWrap=\"english\"/></Band></Format></Formats>");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab00);
            obj.set_text("Transaction Error Log");
            this.tab00.addChild(obj.name, obj);

            obj = new Grid("grdTran","0","38",null,null,"0","0",null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsTran");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"400\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"발생일시\"/><Cell col=\"1\" text=\"메뉴ID\"/><Cell col=\"2\" text=\"메뉴명\"/><Cell col=\"3\" text=\"프로그램ID\"/><Cell col=\"4\" text=\"화면URL\"/><Cell col=\"5\" text=\"내용\"/></Band><Band id=\"body\"><Cell wordWrap=\"english\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"####-##-## ##:##:##.###\" expr=\"ALOG_DTTM.toString()\"/><Cell col=\"1\" text=\"bind:MENU_ID\" wordWrap=\"english\"/><Cell col=\"2\" text=\"bind:MENU_NM\"/><Cell col=\"3\" text=\"bind:PRGM_ID\" wordWrap=\"english\"/><Cell col=\"4\" text=\"bind:PRGM_PATH\" wordWrap=\"english\"/><Cell col=\"5\" text=\"bind:ERR_MSG\" wordWrap=\"english\"/></Band></Format></Formats>");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tab00);
            obj.set_text("User Log");
            this.tab00.addChild(obj.name, obj);

            obj = new Grid("grdUserLog","0","38",null,null,"0","0",null,null,null,null,this.tab00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsUserLog");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"400\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"발생일시\"/><Cell col=\"1\" text=\"메뉴ID\"/><Cell col=\"2\" text=\"메뉴명\"/><Cell col=\"3\" text=\"프로그램ID\"/><Cell col=\"4\" text=\"화면URL\"/><Cell col=\"5\" text=\"내용\"/></Band><Band id=\"body\"><Cell wordWrap=\"english\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"####-##-## ##:##:##.###\" expr=\"ALOG_DTTM.toString()\"/><Cell col=\"1\" text=\"bind:MENU_ID\" wordWrap=\"english\"/><Cell col=\"2\" text=\"bind:MENU_NM\"/><Cell col=\"3\" text=\"bind:PRGM_ID\" wordWrap=\"english\"/><Cell col=\"4\" text=\"bind:PRGM_PATH\" wordWrap=\"english\"/><Cell col=\"5\" text=\"bind:ERR_MSG\" wordWrap=\"english\"/></Band></Format></Formats>");
            this.tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"tab00:40","90","48","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"tab00:40","90","48","138",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.tab00.Tabpage1.form,function(p){});
            this.tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.tab00.Tabpage2.form,function(p){});
            this.tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage3.form
            obj = new Layout("default","",0,0,this.tab00.Tabpage3.form,function(p){});
            this.tab00.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,740,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmLog.xfdl", function() {
        /**
        *  DevPro
        *  @FileName 	cmmLog.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2025/01/17
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2025/01/17			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.oApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.fnCopyDataset();
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnSaveTran = function ()
        {
        	var strSvcId    = "saveUserLog";
        	var strSvcUrl   = "saveUserLog.do";
        	var inData      = "dsList=gdsUserLog:A";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "saveUserLog":
        			this.gfnAlert("msg.save.success");
        			this.oApp.gdsUserLog.clearData();
        			this.gfnClosePopup();
        			break;
        		default:break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnCopyDataset = function ()
        {
        	this.dsScript.clearData();
        	this.dsTran.clearData();
        	this.dsUserLog.clearData();

        	this.oApp.gdsUserLog.filter("LOG_TYPE=='S'");
        	this.dsScript.copyData(this.oApp.gdsUserLog,true);

        	this.oApp.gdsUserLog.filter("LOG_TYPE=='T'");
        	this.dsTran.copyData(this.oApp.gdsUserLog,true);

        	this.oApp.gdsUserLog.filter("LOG_TYPE=='U'");
        	this.dsUserLog.copyData(this.oApp.gdsUserLog,true);

        	this.oApp.gdsUserLog.filter("");
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divButton_btnClose_onclick = function(obj,e)
        {
        	this.gfnClosePopup();
        };

        this.divButton_btnSave_onclick = function(obj,e)
        {
        	this.fnSaveTran();
        };

        this.tab00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.tab00.addEventHandler("onchanged",this.tab00_onchanged,this);
            this.btnClose.addEventHandler("onclick",this.divButton_btnClose_onclick,this);
            this.btnSave.addEventHandler("onclick",this.divButton_btnSave_onclick,this);
        };
        this.loadIncludeScript("cmmLog.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
