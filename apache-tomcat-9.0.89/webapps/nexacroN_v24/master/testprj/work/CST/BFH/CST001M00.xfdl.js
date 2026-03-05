(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST001M00");
            this.set_titletext("사전협의등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1080);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divBtn","0",null,null,"60","60","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            obj.set_formscrollbartype("auto none");
            this.addChild(obj.name, obj);

            obj = new Button("btnChkList","1208","27","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("자가체크리스트");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnTmpSave","1001","33","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("임시저장");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnSave","637","14","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divBtn.addChild(obj.name, obj);

            obj = new Div("divForm","0","60",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_formscrollbartype("auto autoindicator");
            obj.set_url("work::CST/BFH/CST001M00_01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnChkList.set_taborder("1");
                p.btnChkList.set_text("자가체크리스트");
                p.btnChkList.set_cssclass("btn_WF_Yes");
                p.btnChkList.set_fittocontents("width");
                p.btnChkList.set_visible("false");
                p.btnChkList.move("1208","27","100","40",null,null);

                p.btnTmpSave.set_taborder("2");
                p.btnTmpSave.set_text("임시저장");
                p.btnTmpSave.set_cssclass("btn_WF_No");
                p.btnTmpSave.set_fittocontents("width");
                p.btnTmpSave.move("1001","33","100","40",null,null);

                p.btnSave.set_taborder("0");
                p.btnSave.set_text("등록");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.set_fittocontents("width");
                p.btnSave.move("637","14","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
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
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            this.divBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm
            obj = new Layout("default","",0,0,this.divForm.form,function(p){});
            this.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,1080,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("사전협의등록");

                p.divBtn.set_taborder("0");
                p.divBtn.set_text("Div00");
                p.divBtn.set_cssclass("div_WF_CkBg");
                p.divBtn.set_formscrollbartype("auto none");
                p.divBtn.move("0",null,null,"60","60","0");

                p.divForm.set_taborder("1");
                p.divForm.set_text("Div00");
                p.divForm.set_formscrollbartype("auto autoindicator");
                p.divForm.set_url("work::CST/BFH/CST001M00_01.xfdl");
                p.divForm.move("0","60",null,null,"60","70");

                p.divTitle.set_taborder("2");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.set_maxheight("");
                p.divTitle.move("0","0",null,"50","60",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,1080,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.move("0","0",null,"50","0",null);

                p.divForm.move("20","60",null,null,"20","70");

                p.divBtn.move("0",null,null,"60","0","0");
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
            this._addPreloadList("fdl","work::CST/BFH/CST001M00_01.xfdl");
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.registerScript("CST001M00.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST001M00.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			이규철					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//팝업으로 오픈시에 타이틀 제거
        	if(this.getOwnerFrame().name == "CST001P04") {
        		this.divTitle.destroy();
        		this.divForm.top = 10;
        		this.resetScroll();
        	}

        	this.gfnFormOnload(obj); //필수함수

        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function () {
        	//const bPopup = nexacro.getPopupFrames(this.getOwnerFrame()).length > 0;
        	//this.divBtn.form.btnChkList.visible = bPopup;
        	//팝업으로 여는지 확인
        	if(this.getOwnerFrame().name == "CST001P04") {
        		this.divBtn.form.btnChkList.visible = true;
        		this.fvBfhdCnsltnNo = this.getOwnerFrame().bfhdCnsltnNo;
        		this.divForm.form.fnGetParam(this.fvBfhdCnsltnNo);
        	} else {
        		this.divBtn.form.btnChkList.visible = false;
        	}
        }

        this.fnBtnEnable = function () {
        	this.divBtn.form.btnSave.visible = false;
        	this.divBtn.form.btnTmpSave.visible = false;
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.Button_onclick = function(obj,e)
        {
        	if (obj.name == "btnChkList") {
        		this.divForm.form.fnOpenSlfCheckList();
        	} else {
        		this.divForm.form.Button_onclick(obj, e);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtn.form.btnChkList.addEventHandler("onclick",this.Button_onclick,this);
            this.divBtn.form.btnTmpSave.addEventHandler("onclick",this.Button_onclick,this);
            this.divBtn.form.btnSave.addEventHandler("onclick",this.Button_onclick,this);
        };
        this.loadIncludeScript("CST001M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
