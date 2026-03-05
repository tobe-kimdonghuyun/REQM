(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmLeft");
            this.set_titletext("Left Frame");
            this.set_cssclass("frm_LF_menu");
            this.set_background("#029589");
            if (Form == this.constructor)
            {
                this._setFormPosition(269,1032);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divMenu","25","27","244","10",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbarsize("10");
            obj.set_url("frame::frmMenu.xfdl");
            obj.set_formscrollbartype("none fixed");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","divMenu:9",null,"244","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_LF_darkBG");
            this.addChild(obj.name, obj);

            obj = new Button("btnWEBGIS","26","divMenu:26","105","90",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("WEB GIS");
            obj.set_cssclass("btn_LF_webgis");
            this.addChild(obj.name, obj);

            obj = new Button("btnDashboard","139","divMenu:26","105","90",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_LF_dashboard");
            obj.set_text("K-GEO");
            this.addChild(obj.name, obj);

            obj = new Static("staCenter","28","divMenu:146","213","18",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("정보화지원센터");
            obj.set_cssclass("sta_LF_center");
            this.addChild(obj.name, obj);

            obj = new Static("staImage","200","staCenter:4","42","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_LF_image");
            this.addChild(obj.name, obj);

            obj = new Static("staPhoneNum","28","staCenter:1","142","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("1811-7434");
            obj.set_cssclass("sta_LF_phoneNumber");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","28","staPhoneNum:3","215","27",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("평일 09:00 ~ 18:00  (주말,공휴일 휴무)");
            obj.set_cssclass("sta_LF_officeHours");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMenu
            obj = new Layout("default","",0,0,this.divMenu.form,function(p){});
            this.divMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",269,1032,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmMenu.xfdl");
        };
        
        // User Script
        this.registerScript("frmLeft.xfdl", function() {
        /**
         *  DevPACK
         *  @FileName 	frmLeft.xfdl
         *  @Creator 	TOBESOFT
         *  @CreateDate 	2020/11/24
         *  @Desction
         ************** 소스 수정 이력 ***********************************************
         * Date					Modifier					Description
         *******************************************************************************
         * 2020/11/24			TOBESOFT					최초생성
         *******************************************************************************
        **/

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description Form 로드 완료
        **/
        this.form_onload = function(obj,e)
        {//trace(obj.name, e.eventid);
        	app.gvFrmLeft = obj.parent;
        	app.gvFrmLeft.org_width = obj.parent.getOffsetWidth();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        // this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        // {
        // 	switch(sSvcId)
        // 	{
        // 		case "svcid":
        // 			break;
        // 	}
        // };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.btnWEBGIS_onclick = function(obj,e)
        {
        	var pForm = nexacro.Form.prototype;
        	pForm.openGisPopup({});
        };

        this.btnDashboard_onclick = function(obj,e)
        {
        // 	var serverUrl = "http://fgisn.forest.go.kr/dashboard/home.html";
        // 	window.open(serverUrl, 'dashboard', 'width=2200, height=900, menubar=no, status=no, toolbar=no');
        	//alert('토지이용계획 조회는 준비 중입니다.');


        	var sTitle = "KGEO 검색";
        	var oArg   = {};
        	var oOption = {
        		popuptype:"modal"	//modal,modaless
        		,autosize:true
        		,title:sTitle
        		,resize:true
        		,titlebar:true};
        	this.gfnOpenPopup("kgeoApiPopup","business::kgeoApi/kgeoApiPopup.xfdl", oArg, "fnPopupCallback", oOption);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnWEBGIS.addEventHandler("onclick",this.btnWEBGIS_onclick,this);
            this.btnDashboard.addEventHandler("onclick",this.btnDashboard_onclick,this);
        };
        this.loadIncludeScript("frmLeft.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
