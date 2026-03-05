(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM000P04");
            this.set_titletext("계정통합 (PC 팝업)");
            this.set_scrollbartype("none none");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAcntList", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"itgrnCmptnYn\" type=\"STRING\" size=\"256\"/><Column id=\"itgrnCmptnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"itgrnRsltId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthrtList", this);
            obj._setContents("<ColumnInfo><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"authrtId\" type=\"STRING\" size=\"256\"/><Column id=\"authrtNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"itgrnCmptnYn\" type=\"STRING\" size=\"256\"/><Column id=\"itgrnCmptnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"itgrnRsltId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopBtn","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            obj.set_formscrollbartype("default default");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Div("divForm","0","0","100%",null,null,"60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("div01","20","10","100%","250",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_fittocontents("height");
            obj.set_cssclass("div_WF_Bg");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("0");
            obj.set_text("귀하의 TSP 계정을 통합합니다. 귀하의 계정 중 1개를 선택하세요.");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan01_01","20.00","242","100%","110",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan01","0","242","100.00%","110",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/></Contents>");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Panel("Panel00","125","50","100%","40",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("7");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"rdo01\"/></Contents>");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Panel("pan02","0","242","100.00%","100",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta02\"/><PanelItem id=\"PanelItem02\" componentid=\"sta03\"/></Contents>");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Static("sta03","20","20","100%","35",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_text("기존 권한 : ");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Radio("rdo01","200.00","328","100%","40",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsAcntList");
            obj.set_codecolumn("userId");
            obj.set_datacolumn("userId");
            obj.set_fittocontents("height");
            obj.set_direction("vertical");
            obj.set_text("Select");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.div01.addChild(obj.name, obj);

            obj = new Static("sta02","20","20","100%","35",null,null,null,null,null,null,this.divForm.form.div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_text("귀하의 계정에 부여된 모든 기존 권한이 hong10 계정으로 통합됩니다.");
            this.divForm.form.div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("1");
                p.Button00.set_text("확인");
                p.Button00.set_cssclass("btn_WF_Yes");
                p.Button00.move("457.00","30","100","40",null,null);
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
            //-- Default Layout : this.divForm.form.div01.form
            obj = new Layout("default","",0,0,this.divForm.form.div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01.set_taborder("0");
                p.staLabel01.set_text("귀하의 TSP 계정을 통합합니다. 귀하의 계정 중 1개를 선택하세요.");
                p.staLabel01.set_cssclass("sta_WF_Label");
                p.staLabel01.move("10","98","100%","46",null,null);

                p.pan01_01.set_taborder("1");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.set_fittocontents("height");
                p.pan01_01.move("20.00","242","100%","110",null,null);

                p.pan01.set_taborder("2");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","242","100.00%","110",null,null);

                p.Panel00.set_taborder("7");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexmainaxisalign("start");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.move("125","50","100%","40",null,null);

                p.pan02.set_taborder("3");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("nowrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("10");
                p.pan02.set_spacing("10px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.set_type("vertical");
                p.pan02.move("0","242","100.00%","100",null,null);

                p.sta03.set_taborder("6");
                p.sta03.set_cssclass("sta_WF_Des");
                p.sta03.set_fittocontents("height");
                p.sta03.set_text("기존 권한 : ");
                p.sta03.move("20","20","100%","35",null,null);

                p.rdo01.set_taborder("4");
                p.rdo01.set_innerdataset("dsAcntList");
                p.rdo01.set_codecolumn("userId");
                p.rdo01.set_datacolumn("userId");
                p.rdo01.set_fittocontents("height");
                p.rdo01.set_direction("vertical");
                p.rdo01.set_value("0");
                p.rdo01.set_index("0");
                p.rdo01.move("200.00","328","100%","40",null,null);

                p.sta02.set_taborder("5");
                p.sta02.set_cssclass("sta_WF_Des");
                p.sta02.set_fittocontents("height");
                p.sta02.set_text("귀하의 계정에 부여된 모든 기존 권한이 hong10 계정으로 통합됩니다.");
                p.sta02.move("20","20","100%","35",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexwrap("wrap");
            this.divForm.form.div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.div01.form
            obj = new Layout("mobile","",0,0,this.divForm.form.div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.rdo01.set_direction("horizontal");
                p.rdo01.move("200.00","328","100%","150",null,null);

                p.pan01.move("0","242","100.00%","200",null,null);

                p.pan01_01.move("20.00","242","100%","200",null,null);

                p.Panel00.move("125","50","100%","150",null,null);

                p.pan02.move("0","242","100.00%","140",null,null);

                p.sta02.move("20","20","100%","50",null,null);

                p.sta03.move("20","20","100%","50",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexwrap("wrap");
            this.divForm.form.div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.div01.set_taborder("0");
                p.div01.set_text("신청자정보");
                p.div01.set_fittocontents("height");
                p.div01.set_cssclass("div_WF_Bg");
                p.div01.move("20","10","100%","250",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_spacing("10px 20px 10px 20px");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.div01.move("20","10","100%","350",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_spacing("10px 20px 10px 20px");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,530,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("계정통합 (PC 팝업)");
                p.set_scrollbartype("none none");
                p.set_scrolltype("none");

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.set_formscrollbartype("default default");
                p.divPopBtn.move("0",null,null,"60","0","0");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.move("0","0","100%",null,null,"60");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,530,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

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

        };
        
        // User Script
        this.registerScript("COM000P04.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM000P04.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/11/13
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/13			조규완					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.authrtList;
        this.validateColumn = [];
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();
        	this.validateColumn.push({"title" : "통합계정아이디 선택", "com": this.divForm.form.div01.form.rdo01});
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "member/acntItgrnInfoStrg.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "id=" + this.divForm.form.div01.form.rdo01.value;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("save", gvRetMsg, "msgCallback");
        			this.parent.parent.form.gfnSetMain(true);
        			this.close();
        			break;
        	}
        };

        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);

        	if(sPopupId == "save_confirm")
        	{
        		if(oRtn.result == "Y")
        		{
        			this.saveTransaction();
        		}
        	} else if(sPopupId == "save")
        	{
        		if(this.opener)
        		{
        			this.close();
        		} else
        		{
        			var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			this.gfnCloseMenu(cMenuId);
        		}
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.dsAcntList.copyData(this.parent.parent.form.dsAcntList);
        	this.dsAuthrtList.copyData(this.parent.parent.form.dsAuthrtList);

        	this.divForm.form.div01.form.rdo01.index = 0;
        	this.divForm.form.div01.form.sta02.text = "귀하의 계정에 부여된 모든 기존 권한이 '" + this.divForm.form.div01.form.rdo01.value + "' 계정으로 통합됩니다."

        	this.authrtList = this.dsAuthrtList.getColumn(0, "authrtNm");
        	if (!this.gfnIsNull(this.authrtList)) {
        		for (var i = 1; i < this.dsAuthrtList.rowcount; i++) {
        			this.authrtList = this.authrtList + ", " + this.dsAuthrtList.getColumn(i, "authrtNm");
        		}
        		this.divForm.form.div01.form.sta03.text = "기존 권한 : " + this.authrtList;
        	}
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        2222222222222222222222222222222222222222222222222222222222222*******************************************************************************************************************************/
        this.divForm_div01_rdo01_onitemchanged = function(obj,e)
        {
        	this.divForm.form.div01.form.sta02.text = "귀하의 계정에 부여된 모든 기존 권한이 '" + obj.value + "' 계정으로 통합됩니다.";
        	this.dsGet.copyRow(0, this.dsAcntList, obj.index);
        };

        this.divPopBtn_Button00_onclick = function(obj,e)
        {
        	if (this.gfnDsIsValidated(this.validateColumn)) {
        		this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPopBtn.form.Button00.addEventHandler("onclick",this.divPopBtn_Button00_onclick,this);
            this.divForm.form.div01.form.rdo01.addEventHandler("onitemchanged",this.divForm_div01_rdo01_onitemchanged,this);
        };
        this.loadIncludeScript("COM000P04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
