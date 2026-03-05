(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN010M01");
            this.set_titletext("임대배정문서 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1420,1550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"loiSeCd\" type=\"STRING\" size=\"0\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"0\"/><Column id=\"rcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"docTitl\" type=\"STRING\" size=\"256\"/><Column id=\"docCn\" type=\"STRING\" size=\"256\"/><Column id=\"docEtcCn\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSpceList", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"0\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"0\"/><Column id=\"bldgCd\" type=\"STRING\" size=\"0\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"rmnmNo\" type=\"STRING\" size=\"0\"/><Column id=\"rntar\" type=\"STRING\" size=\"0\"/><Column id=\"rentPrd\" type=\"STRING\" size=\"0\"/><Column id=\"rtfeYnNm\" type=\"STRING\" size=\"0\"/><Column id=\"mncoYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"utltYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"noteMttr\" type=\"STRING\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"trsmCycl\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hireLoiNo\">LOI2411_00001</Col><Col id=\"trsmCycl\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","10","70",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","100%","550",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtTtl","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01_00","10.00","98","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtTtl\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_00_00","10","98","50%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","102","528","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("utztnGdId","138","302","100%","280",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/editor/editor.xfdl");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02_00_00","10.00","98","100%","330",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"utztnGdId\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00","0","60","100.00%","330",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan00_02_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("붙임");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtTtl00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01_00_00","10.00","98","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtTtl00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00_01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("divBtn","0",null,null,"60","60","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","457.00","30","120","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Yes");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnAtrz","457.00","30","120","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_Yes");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnCancel","7","20","84","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_No");
            this.divBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.Div00.form.utztnGdId
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form.utztnGdId.form,function(p){});
            this.divForm.form.Div00.form.utztnGdId.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.Div00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00_00.set_taborder("0");
                p.staLabel00_00.set_text("제목");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.edtTtl.set_taborder("1");
                p.edtTtl.set_readonly("false");
                p.edtTtl.move("10.00","158","100%","40",null,null);

                p.pan00_01_00.set_taborder("2");
                p.pan00_01_00.set_type("vertical");
                p.pan00_01_00.set_flexgrow("1");
                p.pan00_01_00.set_minwidth("");
                p.pan00_01_00.move("10.00","98","200","86",null,null);

                p.pan00_00.set_taborder("3");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_verticalgap("0");
                p.pan00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.move("0","60","100.00%","96",null,null);

                p.staLabel00_01_00_00.set_taborder("4");
                p.staLabel00_01_00_00.set_text("내용");
                p.staLabel00_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_01_00_00.move("10","98","50%","46",null,null);

                p.Panel02_00.set_taborder("5");
                p.Panel02_00.move("102","528","100%","46",null,null);

                p.utztnGdId.set_taborder("6");
                p.utztnGdId.set_text("Div00");
                p.utztnGdId.set_url("work::COM/util/editor/editor.xfdl");
                p.utztnGdId.move("138","302","100%","280",null,null);

                p.pan00_02_00_00.set_taborder("7");
                p.pan00_02_00_00.set_type("vertical");
                p.pan00_02_00_00.set_flexgrow("1");
                p.pan00_02_00_00.set_fittocontents("height");
                p.pan00_02_00_00.set_minwidth("");
                p.pan00_02_00_00.move("10.00","98","100%","330",null,null);

                p.pan00_00_00.set_taborder("8");
                p.pan00_00_00.set_horizontalgap("20");
                p.pan00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00_00.set_flexwrap("wrap");
                p.pan00_00_00.set_fittocontents("height");
                p.pan00_00_00.set_verticalgap("0");
                p.pan00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_00.move("0","60","100.00%","330",null,null);

                p.staLabel00_00_00.set_taborder("9");
                p.staLabel00_00_00.set_text("붙임");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00.move("10","98","100%","46",null,null);

                p.edtTtl00.set_taborder("10");
                p.edtTtl00.set_readonly("false");
                p.edtTtl00.move("10.00","158","100%","40",null,null);

                p.pan00_01_00_00.set_taborder("11");
                p.pan00_01_00_00.set_type("vertical");
                p.pan00_01_00_00.set_flexgrow("1");
                p.pan00_01_00_00.set_minwidth("");
                p.pan00_01_00_00.move("10.00","98","200","86",null,null);

                p.pan00_00_01.set_taborder("12");
                p.pan00_00_01.set_horizontalgap("20");
                p.pan00_00_01.set_flexcrossaxiswrapalign("start");
                p.pan00_00_01.set_flexwrap("wrap");
                p.pan00_00_01.set_fittocontents("height");
                p.pan00_00_01.set_verticalgap("0");
                p.pan00_00_01.set_spacing("0px 20px 10px 20px");
                p.pan00_00_01.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_01.move("0","60","100.00%","96",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.set_taborder("0");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Bg");
                p.Div00.set_fittocontents("height");
                p.Div00.move("0","0","100%","550",null,null);
            	}
            );
            obj.set_verticalgap("30");
            obj.set_type("vertical");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_spacing("0px 10px 0px 20px");
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSave.set_taborder("1");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.move("457.00","30","120","40",null,null);

                p.btnAtrz.set_taborder("1");
                p.btnAtrz.set_text("결재상신");
                p.btnAtrz.set_cssclass("btn_WF_Yes");
                p.btnAtrz.move("457.00","30","120","40",null,null);

                p.btnCancel.set_taborder("2");
                p.btnCancel.set_text("취소");
                p.btnCancel.set_cssclass("btn_WF_No");
                p.btnCancel.move("7","20","84","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            obj.set_spacing("10px 20px 10px 20px");
            this.divBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divBtn.form
            obj = new Layout("mobile","",0,0,this.divBtn.form,
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
            obj.set_spacing("10px 20px 10px 20px");
            this.divBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1420,1550,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("임대배정문서 상세");

                p.divTitle.set_taborder("2");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.move("10","70",null,null,"10","10");

                p.divBtn.set_taborder("1");
                p.divBtn.set_text("Div00");
                p.divBtn.set_cssclass("div_WF_CkBg");
                p.divBtn.move("0",null,null,"60","60","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("20","70",null,"1000","20",null);

                p.divTitle.move("0","0",null,"50","0",null);

                p.divBtn.move("20",null,null,"60","20","0");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","divForm.form.Div00.form.edtTtl","value","dsMaster","docTitl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divForm.form.Div00.form.edtTtl00","value","dsMaster","docEtcCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
            this._addPreloadList("fdl","work::COM/util/editor/editor.xfdl");
        };
        
        // User Script
        this.addIncludeScript("REN010M01.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN010M01.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	REN010M01.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier				Description
        *******************************************************************************
        * 2023/10/30			이루온					최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
        this.utztnGdId;

        this.validateColumn = [];
        this.vContent

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	var obj = {
        		filebrowserImageUploadUrl: '/common/insertImageCk.do', // 파일 업로드를 처리 할 경로 설정.
        		height: 200,
        		width: 800,
        		toolbar: [['Source'], ['Bold', 'Italic', 'Underline', 'Strike'], ['Image', 'Table', 'HorizontalRule'], ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent'],	['Font', 'FontSize'], ['TextColor', 'BGColor']],
        		removePlugins: 'resize',
        	};

        	this.divForm.form.Div00.form.utztnGdId.form.fnInit(obj);

        	if (this.opener) {
        		this.divTitle.height = 0;
        		this.param = {
        			"status" : this.getOwnerFrame().status
        			,"hireLohNo" : this.getOwnerFrame().hireLohNo
        		}
        	} else {
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	if (this.param != null) {
        		//페이지 로딩시 처음에 실행 되는 함수
        		//this.fnInit();

        		// 배정문서정보 조회
        		this.dsSearch.setColumn(0,"hireLoiNo"	,this.param.hireLoiNo);
        		this.cfnSearch();

        	} else {
        		this.gfnAlertMsg("msg", "REN_002");	//임차의향서번호가 없습니다.
        	}
        };

        /*******************************************************************************************************************************
         * 임차의향서 상세조회
        *******************************************************************************************************************************/
        this.selectTransaction = function()
        {
        	var strSvcId    = "select";
        	var strSvcUrl   = "ren/frs/selectRentAsnDocInfo.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsMaster=dsMaster dsSpceList=dsSpceList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        /*
        	// 공통코드조회 : 상세용도, 유무상코드
        	this.cfnComCdLoad({dsCboDtlUsgCd:"RENT_DTL_USG:S", dsCboRtfeYnCd:"YN_CD:S", dsCboMncoYnCd:"YN_CD:S", dsCboUtltYnCd:"YN_CD:S"});

        	this.validateColumn.push({"title" : "관리비"	, "com": this.divForm.form.divHirerInfo.form.cboMncoYn});
        	this.validateColumn.push({"title" : "유티리티"	, "com": this.divForm.form.divHirerInfo.form.cboUtltYn});
        */
        	this.validateColumn.push({"title" : "제목"	, "com": this.divForm.form.Div00.form.edtTtl});
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	if (this.gfnIsNull(this.param.hireLoiNo)) {
        		this.gfnAlertMsg("msg", "REN_002");	// 임차의향서번호가 없습니다.
        		return;
        	}

        	if (this.gfnIsNull(this.param.status)) {
        		this.gfnAlertMsg("msg", "REN_020");	// 등록/수정 상태코드가 없습니다.
        		return;
        	}

        	this.selectTransaction();
        };

        //저장
        this.cfnSave = function ()
        {
        	//TODO..
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

        this.cfnClose = function()
        {
        	this.close();
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
        		case "select":
        			// 상태코드: 40.작성중 41.결재요청 42.결재완료
        			if (this.dsMaster.getColumn(0,"prgrsSttsCd") >= "41") {
        				this.divForm.form.divPopBtn.form.btnSave.visible = false;
        				this.divForm.form.divPopBtn.form.btnAtrz.visible = false;
        			}
        /*
        			// 데이터 조회 후 파일리스트에 셋팅
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile1);

        			this.dsFile.insertRow();
        			this.dsFile.setColumn(0, "atflMngNo", this.dsFile1.getColumn(0, "atflMngNo"));
        			this.dsFile.setColumn(0, "colId", this.dsFile1.getColumn(0, "colId"));
        			this.divForm.form.Div00.form.Static01.text = this.dsFile1.rowcount;
        */
        			//this.vContent = "<table border='0' style='width:500px'>";
        			this.vContent = "<table style='border:0; border-collapse:collapse;width:1500px;border-spacing:0'>";
        			this.vContent = this.vContent + "	<tbody>";
        			this.vContent = this.vContent + "<tr>"
        			this.vContent = this.vContent + "<td style='width:10%;border; 1px solid #000'> <blockquote style='margin: 0 0 0 40px; border: nobe; padding: 0px; align:center; '>계약자명</blockquote></td>";
        			this.vContent = this.vContent + "<td style='width:15%;border; 1px solid #000'> <blockquote style='margin: 0 0 0 40px; border: nobe; padding: 0px;'>건물명</blockquote></td>";
        			this.vContent = this.vContent + "<td style='width:7%;border; 1px solid #000'> <blockquote style='margin: 0 0 0 40px; border: nobe; padding: 0px;'>실번호</blockquote></td>";
        			this.vContent = this.vContent + "<td style='width:7%;border; 1px solid #000'> <blockquote style='margin: 0 0 0 40px; border: nobe; padding: 0px;'>면적(m2)</blockquote></td>";
        			this.vContent = this.vContent + "<td style='width:15%;border; 1px solid #000'> <blockquote style='margin: 0 0 0 40px; border: nobe; padding: 0px;'>계약기간</blockquote></td>";
        			this.vContent = this.vContent + "<td style='width:7%;border; 1px solid #000'> <blockquote style='margin: 0 0 0 40px; border: nobe; padding: 0px;'>임대료</blockquote></td>";
        			this.vContent = this.vContent + "<td style='width:7%;border; 1px solid #000'> <blockquote style='margin: 0 0 0 40px; border: nobe; padding: 0px;'>관리비</blockquote></td>";
        			this.vContent = this.vContent + "<td style='width:7%;border; 1px solid #000'> <blockquote style='margin: 0 0 0 40px; border: nobe; padding: 0px;'>유틸리티</blockquote></td>";
        			this.vContent = this.vContent + "<td style='border; 1px solid #000'> <blockquote style='margin: 0 0 0 40px; border: nobe; padding: 0px;'>비고</blockquote></td>";
        			this.vContent = this.vContent + "</tr>"

        			for (var i = 0; i<this.dsSpceList.rowcount; i++) {
        				this.vContent = this.vContent + "<tr>"
        				this.vContent = this.vContent + "<td>" + this.dsSpceList.getColumn(i,"bzentyNm") + "</td>";
        				this.vContent = this.vContent + "<td>" + this.dsSpceList.getColumn(i,"bldgNm") + "</td>";
        				this.vContent = this.vContent + "<td>" + this.dsSpceList.getColumn(i,"rmnmNo") + "</td>";
        				this.vContent = this.vContent + "<td>" + this.dsSpceList.getColumn(i,"rntar") + "</td>";
        				this.vContent = this.vContent + "<td>" + this.dsSpceList.getColumn(i,"rentPrd") + "</td>";
        				this.vContent = this.vContent + "<td>" + this.dsSpceList.getColumn(i,"rtfeYnNm") + "</td>";
        				this.vContent = this.vContent + "<td>" + this.dsSpceList.getColumn(i,"mncoYnNm") + "</td>";
        				this.vContent = this.vContent + "<td>" + this.dsSpceList.getColumn(i,"utltYnNm") + "</td>";
        				this.vContent = this.vContent + "<td>" + this.dsSpceList.getColumn(i,"noteMttr") + "</td>";
        				this.vContent = this.vContent + "</tr>"
        			}

        			this.vContent = this.vContent + "	</tbody>";
        			this.vContent = this.vContent + "</table>";

        			this.setTimer(100, 500);

        			break;

        		case "saveRentAsnDocInfo":		// 저장
        			this.gfnAlertMsg("msg", "MSG_007", [ this.objApp.getVariable("gvRetMsg") ]);
        			var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			this.gfnCloseMenu(cMenuId);
        			this._gfnOpenMenu(cMenuId.substring(0,14),"",true);

        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /*
        this.fnInit = function()
        {
        		const data = [
        			{ name: "홍길동1", phone: "010-1111-1111", note: "친구" },
        			{ name: "홍길동2", phone: "010-1111-1111", note: "친구" },
        			{ name: "홍길동3", phone: "010-1111-1111", note: "친구" },
        			{ name: "홍길동4", phone: "010-1111-1111", note: "친구" },
        			{ name: "홍길동5", phone: "010-1111-1111", note: "친구" }
        		];

        		const table = document.createElement("table");

        		const thead = document.createElement("thead");
        		const headerRow = document.createElement("tr");

        		["성명", "전화번호", "비고"].forEach((text) ==> {
        			const th = document.createElement("th");
        			th.textContent = text;
        			headerRow.addpendChild(th);
        		});
        		thead.addpendChild(headerRow);
        		table.addpendChild(thead);

        		const tbody = document.createElement("tbody");

        		// 각 데이터 행 추가
        		data.forEach((item) => {
        			const row = document.createElement("tr");


        			const nameCell = document.createElement("td");
        			nameCell.textContent = item.name;
        			row.addpendChild(nameCell);

        			const phoneCell = document.createElement("td");
        			nameCell.textContent = item.phone;
        			row.addpendChild(phoneCell);

        			const noteCell = document.createElement("td");
        			nameCell.textContent = item.note;
        			row.addpendChild(noteCell);

        			tbody.addpendChild(row);
        		});

        		table.addpendChild(tbody);
        		alert(">>>table<<<"+table);
        };
        */

        this.form_ontimer = function(obj,e)
        {
        	if (e.timerid == 100) {

        		var rowData = {
        			content: this.vContent
        		};

        		this.divForm.form.Div00.form.utztnGdId.form.writeData(rowData);
        		this.killTimer(100);
        	}
        };


        // 저장 버튼 클릭시
        this.divForm_divPopBtn_btnSave_onclick = function(obj,e)
        {
        	 if (this.param.status == "reg" || (this.param.status != "reg" && this.gfnDsIsUpdated(this.dsMaster) == true)) {
        		this.dsMaster.setColumn(0, "prgrsSttsCd"	, "40");	// 진행상태코드: 40.작성중
        		this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	} else {
        		// 변경된 내용이 없습니다.
         		this.gfnAlertMsg("msg", "MSG_004");
         		return;
        	}
        };

        //얼럿창 콜백 함수
        this.msgCallback = function(sPopupId, sRtn) {

        	var oRtn 		= JSON.parse(sRtn);

        	// 저장
        	if (sPopupId == "save_confirm" && oRtn.result == "Y") {
        		var strSvcId    = "saveRentAsnDocInfo";
        		var strSvcUrl   = "ren/frs/saveRentAsnDocInfo.do";
        		var inData      = "dsMaster=dsMaster:A dsSpceList=dsSpceList:U";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";
        		var isAsync   	= false;

        		this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        	}
        };

        // 결재상신 버튼 클릭시
        this.divForm_divPopBtn_btnAtrz_onclick = function(obj,e)
        {
        	// 필수입력 여부 체크
        	if(this.gfnDsIsValidated(this.validateColumn)) {
        		this.dsMaster.setColumn(0, "prgrsSttsCd"	, "41");	// 진행상태코드: 40.작성중 41.결재중
        		this.gfnConfirmMsg("save_confirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"],"",["결재상신"]);
        	}
        };

        // 취소 버튼 클릭시
        this.divBtn_btnCancel_onclick = function(obj,e)
        {
        	var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        	this.gfnCloseMenu(cMenuId);
        	this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.divBtn.form.btnSave.addEventHandler("onclick",this.divForm_divPopBtn_btnSave_onclick,this);
            this.divBtn.form.btnAtrz.addEventHandler("onclick",this.divForm_divPopBtn_btnAtrz_onclick,this);
            this.divBtn.form.btnCancel.addEventHandler("onclick",this.divBtn_btnCancel_onclick,this);
        };
        this.loadIncludeScript("REN010M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
