(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM041M02");
            this.set_titletext("그룹메뉴 즐겨찾기 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGrpList", this);
            obj._setContents("<ColumnInfo><Column id=\"grpId\" type=\"STRING\" size=\"256\"/><Column id=\"grpNm\" type=\"STRING\" size=\"256\"/><Column id=\"grpIcon\" type=\"STRING\" size=\"256\"/><Column id=\"procId\" type=\"STRING\" size=\"256\"/><Column id=\"procNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuOrdr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"grpId\" type=\"STRING\" size=\"256\"/><Column id=\"grpNm\" type=\"STRING\" size=\"256\"/><Column id=\"grpIcon\" type=\"STRING\" size=\"256\"/><Column id=\"procId\" type=\"STRING\" size=\"256\"/><Column id=\"procNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuOrdr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,"50",null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","70",null,"830","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","708","194","40","700",null,null,"40",null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnAdd\"/><PanelItem id=\"PanelItem02\" componentid=\"btnDel\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divGrd","0","54","285","700",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("선택 가능 그룹메뉴");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","44","100%","680",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsGrpList");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj.getSetter("uFunction").set("checkbox");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"210\"/><Column size=\"210\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" wordWrap=\"char\"/><Cell col=\"1\" colspan=\"2\" text=\"그룹메뉴\" wordWrap=\"char\"/><Cell col=\"3\" text=\"처리절차\" wordWrap=\"char\"/><Cell col=\"4\" text=\"시스템등록\" cssclass=\"CellEnd\" wordWrap=\"char\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" suppress=\"2\" suppressalign=\"middle\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:grpNm\" textAlign=\"center\" suppress=\"1\" suppressalign=\"middle\" wordWrap=\"char\"/><Cell col=\"2\" textAlign=\"center\" displaytype=\"imagecontrol\" edittype=\"none\" suppress=\"1\" suppressalign=\"middle\" expr=\"&apos;theme://icon/&apos; + grpIcon\" wordWrap=\"char\" imagestretch=\"fixaspectratio\"/><Cell col=\"3\" text=\"bind:procNm\" suppress=\"3\" suppressalign=\"middle\" wordWrap=\"char\"/><Cell col=\"4\" text=\"bind:menuNm\" wordWrap=\"char\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divGrd00","0","54","285","700",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("0");
            obj.set_text("그룹메뉴 즐겨찾기");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00","10.00","72","100%","680",null,null,null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj.getSetter("uFunction").set("checkbox");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"210\"/><Column size=\"210\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" wordWrap=\"char\"/><Cell col=\"1\" colspan=\"2\" text=\"그룹메뉴\" wordWrap=\"char\"/><Cell col=\"3\" text=\"처리절차\" wordWrap=\"char\"/><Cell col=\"4\" text=\"시스템등록\" cssclass=\"CellEnd\" wordWrap=\"char\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:grpNm\" textAlign=\"center\" suppress=\"1\" suppressalign=\"middle\" wordWrap=\"char\"/><Cell col=\"2\" textAlign=\"center\" displaytype=\"imagecontrol\" edittype=\"none\" suppress=\"1\" suppressalign=\"middle\" expr=\"&apos;theme://icon/&apos; + grpIcon\" wordWrap=\"char\" imagestretch=\"fixaspectratio\"/><Cell col=\"3\" text=\"bind:procNm\" suppress=\"3\" suppressalign=\"middle\" wordWrap=\"char\"/><Cell col=\"4\" text=\"bind:menuNm\" cssclass=\"CellEnd\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Panel("Panel00","388","263","100.00%","700",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem02\" componentid=\"divGrd00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnAdd","687","154","40","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ArrowRight");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnDel","687","154","40","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_ArrowLeft");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divPopBtn","130","720","100%","80",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSave","789.97","10","120","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staTotal.set_taborder("0");
                p.staTotal.set_text("선택 가능 그룹메뉴");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","200","34",null,null);

                p.Grid00_00.set_taborder("1");
                p.Grid00_00.set_binddataset("dsGrpList");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.set_useselcolor("false");
                p.Grid00_00.getSetter("uFunction").set("checkbox");
                p.Grid00_00.move("0","44","100%","680",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("8");
            obj.set_type("vertical");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd00.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staTotal.set_taborder("0");
                p.staTotal.set_text("그룹메뉴 즐겨찾기");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","200","34",null,null);

                p.Grid00_00_00.set_taborder("1");
                p.Grid00_00_00.set_binddataset("dsList");
                p.Grid00_00_00.set_autofittype("col");
                p.Grid00_00_00.set_useselcolor("false");
                p.Grid00_00_00.getSetter("uFunction").set("checkbox");
                p.Grid00_00_00.move("10.00","72","100%","680",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divGrd00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("8");
            obj.set_type("vertical");
            this.divForm.form.divGrd00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("default","",0,0,this.divForm.form.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSave.set_taborder("0");
                p.btnSave.set_text("확인");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.move("789.97","10","120","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            this.divForm.form.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divPopBtn.form,
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
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            this.divForm.form.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.set_taborder("3");
                p.Panel01.set_type("vertical");
                p.Panel01.set_flexmainaxisalign("center");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_verticalgap("20");
                p.Panel01.set_minwidth("40");
                p.Panel01.set_maxwidth("");
                p.Panel01.move("708","194","40","700",null,null);

                p.divGrd.set_taborder("0");
                p.divGrd.set_text("Div01");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.set_flexgrow("1");
                p.divGrd.set_maxwidth("");
                p.divGrd.move("0","54","285","700",null,null);

                p.divGrd00.set_taborder("1");
                p.divGrd00.set_text("Div01");
                p.divGrd00.set_formscrollbartype("none none");
                p.divGrd00.set_formscrolltype("none");
                p.divGrd00.set_flexgrow("1");
                p.divGrd00.set_maxwidth("");
                p.divGrd00.move("0","54","285","700",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_verticalgap("10");
                p.Panel00.move("388","263","100.00%","700",null,null);

                p.btnAdd.set_taborder("4");
                p.btnAdd.set_cssclass("btn_WF_ArrowRight");
                p.btnAdd.move("687","154","40","40",null,null);

                p.btnDel.set_taborder("5");
                p.btnDel.set_cssclass("btn_WF_ArrowLeft");
                p.btnDel.move("687","154","40","40",null,null);

                p.divPopBtn.set_taborder("6");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("130","720","100%","80",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.move("388","263","100.00%","1048",null,null);

                p.Panel01.set_type("horizontal");
                p.Panel01.set_verticalgap("0");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.set_minwidth("80");
                p.Panel01.set_maxwidth("");
                p.Panel01.move("708","194","100%","80",null,null);

                p.btnAdd.set_cssclass("btn_WF_ArrowTop");

                p.btnDel.set_cssclass("btn_WF_ArrowDown");

                p.divGrd.move("0","54","100%","484",null,null);

                p.divGrd00.move("0","54","100%","484",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("그룹메뉴 즐겨찾기 관리");

                p.divTitle.set_taborder("0");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.set_minheight("50");
                p.divTitle.set_maxheight("");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","70",null,"830","60",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.move("0","0",null,"50","0",null);

                p.divForm.move("20","divTitle:20",null,"700","20",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.registerScript("COM041M02.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM041M02.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			김완성					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.userId;

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	if(this.opener)
        	{
        		this.divTitle.visible = this.getOwnerFrame()._arg.titlebar;
        	}

        	this.userId = this.objApp.gdsUser.getColumn(0, "userId");
        	this.cfnSearch();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.getSearchTransaction();
        };

        //추가
        this.cfnAdd = function ()
        {
        	//TODO..
        };

        //삭제
        this.cfnDel = function ()
        {
        	//TODO..
        };

        //저장
        this.cfnSave = function ()
        {
        	//TODO..
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "bkmk/groupMenuBkmkListInq.do";
        	var inData      = "";
        	var outData     = "dsGrpList=dsGrpList dsList=dsList";
        	var strArg      = "id=" + this.userId;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        };

        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "bkmk/groupMenuBkmkInfoStrg.do";
        	var inData      = "dsList=dsList:A";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "search":
        			break;
        		case "save" :
        			this.gfnAlertMsg("save", "MSG_001");
        			this.cfnSearch();
        			if(this.opener)
        			{
        				this.close();
        			}
        			break;
        	}
        };

        /**
        	sPopupId	// 페세지창을 구분하기 위한 ID
        	sRtn		// 메세지창에서 리턴 해주는 변수값 (JSON 형태의 스트링 리턴)
        **/
        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);
        	if(sPopupId == "add_menu") {
        		if(oRtn.result == "Y") {
        			var chk = this.dsGrpList.extractRows("chk == " + 1);
        			this.dsList.enableevent = false;
        			for(var i=0; i<chk.length; i++) {
        				var nRow = this.dsList.addRow();
        				this.dsList.copyRow(nRow, this.dsGrpList, chk[i]);
        				this.dsList.setColumn(nRow, "userId", this.userId);
        			}
        			this.dsList.enableevent = true;

        			if(chk.length > 0) {
        				this.dsGrpList.deleteMultiRows(chk);
        			}
        		}
        	}
        	else if(sPopupId == "del_menu") {
        		if(oRtn.result == "Y") {
        			var chk = this.dsList.extractRows("chk == " + 1);
        			this.dsGrpList.enableevent = false;
        			for(var i=0; i<chk.length; i++) {
        				var nRow = this.dsGrpList.addRow();
        				this.dsGrpList.copyRow(nRow, this.dsList, chk[i]);
        			}
        			this.dsGrpList.enableevent = true;

        			if(chk.length > 0) {
        				this.dsList.deleteMultiRows(chk);
        			}
        		}
        	}
        	else if(sPopupId == "save") {
        		if(oRtn.result == "Y") {
        			this.saveTransaction();
        		}
        	}
        	else if(sPopupId == "msg") {
        		if(this.opener)
        		{
        			this.close();
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 저장
        this.divPopBtn_btnSave_onclick = function(obj,e)
        {
        	if(this.gfnDsIsUpdated(this.dsList) != true) {
        		this.gfnAlertMsg("msg", "MSG_004", [], "msgCallback");
        	} else {
        		this.gfnConfirmMsg("save", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	}
        };

        this.dsGrpList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "chk") {
        		var grpId = obj.getColumn(e.row, "grpId");

        		// suppress 된 체크박스 bind 값 동일하게 변경
        		for(var i=0; i<obj.getRowCount(); i++) {
        			if(grpId == obj.getColumn(i, "grpId")) {
        				obj.setColumn(i, "chk", e.newvalue);
        			}
        		}
        	}
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "chk") {
        		var grpId = obj.getColumn(e.row, "grpId");

        		// suppress 된 체크박스 bind 값 동일하게 변경
        		for(var i=0; i<obj.getRowCount(); i++) {
        			if(grpId == obj.getColumn(i, "grpId")) {
        				obj.setColumn(i, "chk", e.newvalue);
        			}
        		}
        	}
        };

        // 그룹 추가
        this.divForm_btnAdd_onclick = function(obj,e)
        {
        	var chk = this.dsGrpList.findRow("chk", 1);
        	if(chk != -1) {
        		this.gfnConfirmMsg("add_menu", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["추가"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_006");
        	}
        };

        // 그룹 삭제
        this.divForm_btnDel_onclick = function(obj,e)
        {
        	var chk = this.dsList.findRow("chk", 1);
        	if(chk != -1) {
        		this.gfnConfirmMsg("del_menu", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_006");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.btnAdd.addEventHandler("onclick",this.divForm_btnAdd_onclick,this);
            this.divForm.form.btnDel.addEventHandler("onclick",this.divForm_btnDel_onclick,this);
            this.divForm.form.divPopBtn.form.btnSave.addEventHandler("onclick",this.divPopBtn_btnSave_onclick,this);
            this.dsGrpList.addEventHandler("oncolumnchanged",this.dsGrpList_oncolumnchanged,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("COM041M02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
