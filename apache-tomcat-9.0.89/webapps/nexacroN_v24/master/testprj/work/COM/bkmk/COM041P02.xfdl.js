(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM041P02");
            this.set_titletext("즐겨찾기 관리 (팝업)");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"grpId\" type=\"STRING\" size=\"256\"/><Column id=\"grpNm\" type=\"STRING\" size=\"256\"/><Column id=\"grpIcon\" type=\"STRING\" size=\"256\"/><Column id=\"procId\" type=\"STRING\" size=\"256\"/><Column id=\"procNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuOrdr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","20","10",null,null,"20","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta","200.00","383","100.00%","47",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("선택하신 [담당자 연락처 (COM022M04)] 메뉴를 즐겨찾기에 등록합니다.\r\n배치하고자 하는 “즐겨찾기 그룹”을 선택하시기 바랍니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_visible("true");
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

            obj = new Grid("grdGrpList","0","0","100%",null,null,"0",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"40\"/><Column size=\"150\"/><Column size=\"250\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"그룹메뉴\"/><Cell col=\"2\" colspan=\"2\" text=\"처리절차\"/><Cell col=\"4\" text=\"시스템등록\"/></Band><Band id=\"body\"><Cell text=\"bind:grpNm\" suppress=\"1\" textAlign=\"center\" suppressalign=\"middle\"/><Cell col=\"1\" editmaxlength=\"30\" edittype=\"none\" displaytype=\"imagecontrol\" suppress=\"1\" textAlign=\"center\" expr=\"&apos;theme://icon/&apos; + grpIcon\" suppressalign=\"middle\" imagestretch=\"none\" tooltiptext=\"bind:grpNm\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\" border=\"0px none, 0px none, 1px solid #dddddd\" suppress=\"3\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:procNm\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"4\" text=\"bind:menuNm\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPopBtn","170",null,null,"60","170","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnWhdwl","217.00","10","120","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_No");
            this.divPopBtn.addChild(obj.name, obj);

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

            obj = new Button("btnGrpOpen","10","divForm:10","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("그룹메뉴편집");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdGrpList.set_taborder("1");
                p.grdGrpList.set_binddataset("dsList");
                p.grdGrpList.set_autofittype("col");
                p.grdGrpList.set_autoenter("select");
                p.grdGrpList.move("0","0","100%",null,null,"0");
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
                p.sta.set_taborder("0");
                p.sta.set_text("선택하신 [담당자 연락처 (COM022M04)] 메뉴를 즐겨찾기에 등록합니다.\r\n배치하고자 하는 “즐겨찾기 그룹”을 선택하시기 바랍니다.");
                p.sta.set_cssclass("sta_WF_Des");
                p.sta.set_fittocontents("height");
                p.sta.set_visible("true");
                p.sta.move("200.00","383","100.00%","47",null,null);

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
                p.btnWhdwl.set_taborder("1");
                p.btnWhdwl.set_text("취소");
                p.btnWhdwl.set_fittocontents("width");
                p.btnWhdwl.set_visible("true");
                p.btnWhdwl.set_cssclass("btn_WF_No");
                p.btnWhdwl.move("217.00","10","120","40",null,null);

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
            obj = new Layout("default","Desktop_screen,Phone_screen",900,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("즐겨찾기 관리 (팝업)");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.move("20","10",null,null,"20","60");

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("170",null,null,"60","170","0");

                p.divGuide00.set_taborder("2");
                p.divGuide00.set_text("div00");
                p.divGuide00.set_visible("false");
                p.divGuide00.set_cssclass("div_GD_Tip");
                p.divGuide00.move("1600.00","145","450","385",null,null);

                p.btnGrpOpen.set_taborder("3");
                p.btnGrpOpen.set_text("그룹메뉴편집");
                p.btnGrpOpen.set_cssclass("btn_WF_Yes");
                p.btnGrpOpen.set_fittocontents("width");
                p.btnGrpOpen.move("10","divForm:10","140","40",null,null);
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
        this.registerScript("COM041P02.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM041P02.xfdl
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
        this.menuId;
        this.menuNm;

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.menuId = this.getOwnerFrame().menuId;
        	this.menuNm = this.getOwnerFrame().menuNm;
        	if(this.gfnIsNull(this.menuId) != true) {
        		this.divForm.form.sta.text = "선택하신 [" + this.menuNm + " (" + this.menuId + ")] 메뉴를 즐겨찾기에 등록합니다.\n배치하고자 하는 “즐겨찾기 그룹”을 선택하시기 바랍니다."
        	} else {
        		this.gfnAlertMsg("menu_null", "MSG_011", ["즐겨찾기 등록 가능한 메뉴가 없습니다."], "msgCallback");
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

        this.cfnClose = function()
        {
        	this.close();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "searchGrp";
        	var strSvcUrl   = "bkmk/aplcntBkmkListInq.do";
        	var inData      = "";
        	var outData     = "dsList=dsList";
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
        			this.gfnAlertMsg("saveAfter", "MSG_001", "", "msgCallback");
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
        	if(sPopupId == "menu_null") {
        		this.cfnClose();
        	}
        	else if(sPopupId == "save") {
        		if(oRtn.result == "Y") {
        			this.saveTransaction();
        		}
        	}
        	else if(sPopupId == "saveAfter") {
        		this.cfnClose();
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
        		this.gfnAlertMsg("msg", "MSG_004");
        	} else {
        		this.gfnConfirmMsg("save", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	}
        };

        this.dsGrpList_onrowposchanged = function(obj,e)
        {
        	if(obj.getRowCount() > 0) {
        		this.dsSearch.setColumn(0, "grpId", obj.getColumn(e.newrow, "grpId"));
        		this.getSearchMenuTransaction();
        	}
        };

        // 메뉴 중복 체크
        this.dsList_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "chk") {
        		var grpId = obj.getColumn(e.row, "grpId");
        		var procId = obj.getColumn(e.row, "procId");

        		var fRow = obj.findRowExpr("grpId == '" + grpId + "' && procId == '" + procId + "' && menuId == '" + this.menuId + "'");
        		if(fRow > -1) {
        			if(obj.getRowType(fRow) != Dataset.ROWTYPE_INSERT) {
        				this.gfnAlertMsg("msg", "MSG_011", ["선택한 그룹, 처리절차에 이미 시스템이\n등록되어 있습니다."]);
        				return false;
        			}
        		}
        	}
        };

        // 추가
        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "chk") {
        		var grpId = obj.getColumn(e.row, "grpId");
        		var procId = obj.getColumn(e.row, "procId");

        		var nRow = -1;

        		// suppress 된 체크박스 bind 값 동일하게 변경
        		for(var i=0; i<obj.getRowCount(); i++) {
        			if(grpId == obj.getColumn(i, "grpId") && procId == obj.getColumn(i, "procId")) {
        				obj.setColumn(i, "chk", e.newvalue);
        				nRow = i;
        			}
        		}

        		// 체크된 처리절차, 시스템등록에 메뉴 추가/삭제
        		if(e.newvalue == "1") {
        			if(this.gfnIsNull(this.menuId) != true) {
        				var addRow = obj.insertRow(nRow + 1);
        				obj.copyRow(addRow, obj, nRow);
        				obj.setColumn(addRow, "menuId", this.menuId);
        				obj.setColumn(addRow, "menuNm", this.menuNm);
        				obj.setColumn(addRow, "menuOrdr", nexacro.toNumber(obj.getColumn(nRow, "menuOrdr")) + 1);
        			}
        		} else {
        			for(var i=0; i<obj.getRowCount(); i++) {
        				if(grpId == obj.getColumn(i, "grpId") && procId == obj.getColumn(i, "procId") && obj.getRowType(i) == Dataset.ROWTYPE_INSERT) {
        					obj.deleteRow(i);
        				}
        			}
        		}
        	}
        };

        // 그룹메뉴편집 화면
        this.btnGrpOpen_onclick = function(obj,e)
        {
        	this.cfnClose();

        	var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;  //"MNG_0000001319";
        	var sMenuUrl = 'work::COM/bkmk/COM041M02.xfdl';
        	var actNm = '그룹메뉴 즐겨찾기 관리';
        	var objArg = {};
        	this.gfnPageOpen(sMenuId, sMenuUrl, actNm, objArg);


        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPopBtn.form.btnWhdwl.addEventHandler("onclick",this.cfnClose,this);
            this.divPopBtn.form.btnSave.addEventHandler("onclick",this.divPopBtn_btnSave_onclick,this);
            this.btnGrpOpen.addEventHandler("onclick",this.btnGrpOpen_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("COM041P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
