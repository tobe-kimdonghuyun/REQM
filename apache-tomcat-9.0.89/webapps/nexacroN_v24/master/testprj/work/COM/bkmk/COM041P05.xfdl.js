(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM041P04");
            this.set_titletext("처리절차 관리 (팝업)");
            if (Form == this.constructor)
            {
                this._setFormPosition(740,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsProcList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"procId\" type=\"STRING\" size=\"256\"/><Column id=\"procNm\" type=\"STRING\" size=\"256\"/><Column id=\"procImg\" type=\"STRING\" size=\"256\"/><Column id=\"procOrdr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","20","10",null,null,"20","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","200.00","383","100.00%","47",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("선택하신 [담당자 연락처 (COM022M04)] 메뉴를 즐겨찾기에 등록합니다.\r\n배치하고자 하는 “즐겨찾기 그룹”을 선택하시기 바랍니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","388","263","100.00%","494",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divGrd","0","54","100%","450",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","550","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdRegi\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdGrpList","0","PanelGrdBtn:10","100%",null,null,"0",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsProcList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"219\"/><Column size=\"330\"/><Column size=\"109\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"아이콘\"/><Cell col=\"1\" text=\"처리명\"/><Cell col=\"2\" text=\"순서\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:procImg\" editmaxlength=\"30\" edittype=\"text\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:procNm\"/><Cell col=\"2\" text=\"bind:procOrdr\" cssclass=\"CellEnd\" textAlign=\"center\" displaytype=\"number\" edittype=\"text\" editmaxlength=\"3\" editinputtype=\"number\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","100%","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("즐겨찾기 그룹");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","0","69","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("그룹삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            obj.set_enable("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","371.00","0","69","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("그룹추가");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPopBtn","20",null,null,"60","20","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","457.00","30","120","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Div("divGuide00","1600.00","145","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","20.00","205","34","34",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","64.00","205","34","34",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Static("sta00_00","20.00","255","375","50",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("2");
            obj.set_text("접혀있을때 class : btn_WF_ACPlus 로 접음");
            this.divGuide00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelGrdBtn.set_taborder("0");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","550","34","0",null);

                p.grdGrpList.set_taborder("4");
                p.grdGrpList.set_binddataset("dsProcList");
                p.grdGrpList.set_autofittype("col");
                p.grdGrpList.set_autoenter("select");
                p.grdGrpList.move("0","PanelGrdBtn:10","100%",null,null,"0");

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("즐겨찾기 그룹");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","100%","34",null,null);

                p.btnGrdDel.set_taborder("2");
                p.btnGrdDel.set_text("그룹삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.set_enable("true");
                p.btnGrdDel.move("316.00","0","69","34",null,null);

                p.btnGrdRegi.set_taborder("3");
                p.btnGrdRegi.set_text("그룹추가");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("true");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("371.00","0","69","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
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
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("0");
                p.sta00.set_text("선택하신 [담당자 연락처 (COM022M04)] 메뉴를 즐겨찾기에 등록합니다.\r\n배치하고자 하는 “즐겨찾기 그룹”을 선택하시기 바랍니다.");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.set_visible("false");
                p.sta00.move("200.00","383","100.00%","47",null,null);

                p.Panel00.set_taborder("1");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("388","263","100.00%","494",null,null);

                p.divGrd.set_taborder("2");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","54","100%","450",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_flexwrap("wrap");
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSave.set_taborder("0");
                p.btnSave.set_text("확인");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.set_fittocontents("width");
                p.btnSave.move("457.00","30","120","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
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
            obj.set_horizontalgap("10");
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
            obj.set_horizontalgap("10");
            this.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGuide00.form
            obj = new Layout("default","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_00.set_taborder("0");
                p.Button00_00.set_cssclass("btn_WF_ACPlus");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("20.00","205","34","34",null,null);

                p.Button00_00_00.set_taborder("1");
                p.Button00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00.move("64.00","205","34","34",null,null);

                p.sta00_00.set_taborder("2");
                p.sta00_00.set_text("접혀있을때 class : btn_WF_ACPlus 로 접음");
                p.sta00_00.move("20.00","255","375","50",null,null);
            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide00.form
            obj = new Layout("mobile","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide00.form
            obj = new Layout("mobile","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",740,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("처리절차 관리 (팝업)");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.move("20","10",null,null,"20","60");

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("20",null,null,"60","20","0");

                p.divGuide00.set_taborder("2");
                p.divGuide00.set_text("div00");
                p.divGuide00.set_visible("false");
                p.divGuide00.set_cssclass("div_GD_Tip");
                p.divGuide00.move("1600.00","145","450","385",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.move("20",null,null,"80","20","0");

                p.divForm.move("20","10",null,null,"20","90");
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM041P05.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM041P04.xfdl
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
        this.param;

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	if(this.opener)
        	{
        		this.param = {
        			"procId" : this.getOwnerFrame().procId
        		}
        	} else
        	{
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.getSearchGrpTransaction();
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
        this.getSearchGrpTransaction = function()
        {
        	var strSvcId    = "searchProc";
        	var strSvcUrl   = "bkmk/selectProcListInq.do";
        	var inData      = "";
        	var outData     = "dsProcList=dsProcList";
        	var strArg      = "procId=" + this.param.procId;
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
        	var strSvcUrl   = "bkmk/procImgInfoStrg.do";
        	var inData      = "dsProcList=dsProcList:A";
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
        		case "save" :
        			this.gfnAlertMsg("save", "MSG_001");
        			this.close();
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
        	if(sPopupId == "save") {
        		if(oRtn.result == "Y") {
        			this.saveTransaction();
        		}
        	} else if(sPopupId == "del_grp") {
        		if(oRtn.result == "Y") {
        			this.dsProcList.deleteRow(this.dsProcList.rowposition);
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function() {
        	this.cfnSearch();
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 그룹추가
        this.divForm_divGrd_btnGrdRegi_onclick = function(obj,e)
        {
        	var nRow = this.dsProcList.addRow();
        	this.dsProcList.setColumn(nRow, "procId", this.param.procId);
        };

        // 그룹삭제
        this.divForm_divGrd_btnGrdDel_onclick = function(obj,e)
        {
        	if(this.dsProcList.rowposition > -1) {
        		this.gfnConfirmMsg("del_grp", "MSG_005", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else {
        		this.gfnAlertMsg("msg", "MSG_006");
        	}
        };

        // 저장
        this.divPopBtn_btnSave_onclick = function(obj,e)
        {
        	if(this.gfnDsIsUpdated(this.dsProcList) != true) {
        		this.gfnAlertMsg("msg", "MSG_004");
        	} else {
        		this.gfnConfirmMsg("save", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divGrd.form.btnGrdDel.addEventHandler("onclick",this.divForm_divGrd_btnGrdDel_onclick,this);
            this.divForm.form.divGrd.form.btnGrdRegi.addEventHandler("onclick",this.divForm_divGrd_btnGrdRegi_onclick,this);
            this.divPopBtn.form.btnSave.addEventHandler("onclick",this.divPopBtn_btnSave_onclick,this);
            this.dsProcList.addEventHandler("onrowposchanged",this.dsGrpList_onrowposchanged,this);
        };
        this.loadIncludeScript("COM041P05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
