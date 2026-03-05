(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST002P27");
            this.set_titletext("담당자찾기");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jbttlId\" type=\"STRING\" size=\"256\"/><Column id=\"userTelno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100%","130",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","50",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj.set_tabletemplate("1* / 1* / 1*");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"pan02\"/><PanelItem id=\"PanelItem04\" componentid=\"pan03\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("Edit01","163","80","65%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_displaynulltext("검색어 입력");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","1694.00","398","300","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("Edit02","602","76","150","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색어 입력");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("Static00","530","74","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan03","1694.00","398","300","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"Edit02\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30","100%","464",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Grid("grdList","0","44",null,"400","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"직원ID\"/><Cell col=\"1\" text=\"사용자구분\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"연락처(내선)\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:userId\"/><Cell col=\"1\" text=\"bind:userSeNm\"/><Cell col=\"2\" text=\"bind:userNm\"/><Cell col=\"3\" text=\"bind:deptNm\"/><Cell col=\"4\" text=\"bind:jbttlId\"/><Cell col=\"5\" text=\"bind:userTelno\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","0","43","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_expr("comp.parent.parent.parent.parent.parent.dsList.rowcount");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("btnSchClose","24.00","55","52","30",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_SchClose");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("btnSchOpen","100.00","55","52","30",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SchOpen");
            this.divGuide.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnIdnty","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            this.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form,function(p){});
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,function(p){});
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,function(p){});
            obj.set_verticalgap("20");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_type("vertical");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,function(p){});
            this.divGuide.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnIdnty.set_taborder("1");
                p.btnIdnty.set_text("확인");
                p.btnIdnty.set_cssclass("btn_WF_Yes");
                p.btnIdnty.move("457.00","30","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",900,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divSch.form.Edit01","value","dsSearch","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divSch.form.Edit02","value","dsSearch","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST002P27.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST002P27.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST002P27.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/09/24
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/24			김주화					최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.cfnSrvcCall = function(srvcId) {
        	var strSrvcId   = srvcId;         // transaction을 구분하기 위한 svc id값
        	var strSvcUrl   = "";             // trabsaction을 요청할 주소
        	var inData      = "";             // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        	var outData     = "";             // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        	var strArg      = "";             // 입력값으로 보낼 arguments, strFormData="20120607"
        	var callBackFnc = "fnCallback";   // transaction의 결과를 받을 Function 이름
        	var isAsync   	= true;           // 비동기통신 여부 [생략가능]

        	switch(strSrvcId)
        	{
        		case this.divForm.form.divSch.form.btnSch.name :  // 조회
        			strSvcUrl = "com/selectPic.do";
        			inData    = "dsSearch=dsSearch";
        			outData   = "dsList=dsList";
        			break;
        	}

        	this.gfnTransaction( strSrvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(srvcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }

        	switch(srvcId) {
        		case this.divForm.form.divSch.form.btnSch.name :  // 조회
        				this.divForm.form.divGrd.form.staTotal01.text = this.dsList.rowcount;

        			break;
        	}

            // reset
            this.divForm.form.divGrd.form.resetScroll();
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	this.cfnSrvcCall(obj.name);
        };

        // 조회조건 Enter시
        this.Edit_onkeydown = function(obj,e)
        {
            if(e.keycode == 13) {
        		obj.updateToDataset();
        		this.cfnSrvcCall(this.divForm.form.divSch.form.btnSch.name);
        	}
        };

        this.divForm_divGrd_Grid00_oncelldblclick = function(obj,e)
        {
            this.divPopBtn.form.btnIdnty.click();  // 확인
        };

        this.divPopBtn_btnIdnty_onclick = function(obj,e)
        {
            if(this.dsList.rowposition == -1) {
        		// 선택된 내용이 없습니다.
        		this.gfnAlertMsg("MSG_006", "MSG_006");
        	} else {
        		this.close(JSON.stringify(this.cfnGetToJson(this.dsList)));
        	}
        };

        this.divForm_divGrd_grdList_oncelldblclick = function(obj,e)
        {
        	this.divPopBtn.form.btnIdnty.click();  // 확인
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.Edit01.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divForm.form.divSch.form.staLabel02.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.Edit02.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.divForm_divSch_btnSch_onclick,this);
            this.divForm.form.divGrd.form.grdList.addEventHandler("oncelldblclick",this.divForm_divGrd_grdList_oncelldblclick,this);
            this.divPopBtn.form.btnIdnty.addEventHandler("onclick",this.divPopBtn_btnIdnty_onclick,this);
        };
        this.loadIncludeScript("CST002P27.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
