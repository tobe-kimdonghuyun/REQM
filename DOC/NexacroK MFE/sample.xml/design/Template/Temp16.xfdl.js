(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp02");
            this.set_titletext("SingleDetail");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(480,896);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Static("sta00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_cssclass("sta_WF_BgGrey");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01",null,"30","85","30","30",null,null,null,null,null,this);
            obj.set_cssclass("sta_WF_SumViews");
            obj.set_taborder("0");
            obj.set_text("총 16건");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("Div00","30","80",null,"262","30",null,null,null,null,null,this);
            obj.set_cssclass("div_WF_DetailBox");
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","20","20",null,"30","20",null,null,null,null,null,this.Div00.form);
            obj.set_cssclass("sta_WF_Title");
            obj.set_taborder("0");
            obj.set_text("투비넥사크로");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","20","50",null,"30","20",null,null,null,null,null,this.Div00.form);
            obj.set_cssclass("sta_WF_Date");
            obj.set_taborder("1");
            obj.set_text("2022.05.01~2022.05.31");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","20","92","120","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_cssclass("sta_WF_LabelDetail");
            obj.set_taborder("2");
            obj.set_text("프로젝트");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02_00",null,"92","263","50","20",null,null,null,null,null,this.Div00.form);
            obj.set_cssclass("sta_WF_OutputR");
            obj.set_taborder("3");
            obj.set_text("투비일정관리프로젝트");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02_00_00",null,"142","263","50","20",null,null,null,null,null,this.Div00.form);
            obj.set_cssclass("sta_WF_OutputP");
            obj.set_taborder("4");
            obj.set_text("123,456,789,100");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02_01","20","142","120","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_cssclass("sta_WF_LabelDetail");
            obj.set_taborder("5");
            obj.set_text("단가");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02_02","20","192","120","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_cssclass("sta_WF_LabelDetail");
            obj.set_taborder("6");
            obj.set_text("제품");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02_00_01",null,"192","263","50","20",null,null,null,null,null,this.Div00.form);
            obj.set_cssclass("sta_WF_OutputR");
            obj.set_taborder("7");
            obj.set_text("넥사크로플랫폼");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Static("sta00","20","90",null,"2","20",null,null,null,null,null,this.Div00.form);
            obj.set_cssclass("sta_WF_Boundary");
            obj.set_taborder("8");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Div("Div00_00","30","352",null,"262","30",null,null,null,null,null,this);
            obj.set_cssclass("div_WF_DetailBox");
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","20","20",null,"30","20",null,null,null,null,null,this.Div00_00.form);
            obj.set_cssclass("sta_WF_Title");
            obj.set_taborder("0");
            obj.set_text("투비넥사크로");
            this.Div00_00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","20","50",null,"30","20",null,null,null,null,null,this.Div00_00.form);
            obj.set_cssclass("sta_WF_Date");
            obj.set_taborder("1");
            obj.set_text("2022.05.01~2022.05.31");
            this.Div00_00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","20","92","120","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_cssclass("sta_WF_LabelDetail");
            obj.set_taborder("2");
            obj.set_text("프로젝트");
            this.Div00_00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02_00",null,"92","263","50","20",null,null,null,null,null,this.Div00_00.form);
            obj.set_cssclass("sta_WF_OutputR");
            obj.set_taborder("3");
            obj.set_text("투비일정관리프로젝트");
            this.Div00_00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02_00_00",null,"142","263","50","20",null,null,null,null,null,this.Div00_00.form);
            obj.set_cssclass("sta_WF_OutputP");
            obj.set_taborder("4");
            obj.set_text("123,456,789,100");
            this.Div00_00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02_01","20","142","120","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_cssclass("sta_WF_LabelDetail");
            obj.set_taborder("5");
            obj.set_text("단가");
            this.Div00_00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02_02","20","192","120","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_cssclass("sta_WF_LabelDetail");
            obj.set_taborder("6");
            obj.set_text("제품");
            this.Div00_00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02_00_01",null,"192","263","50","20",null,null,null,null,null,this.Div00_00.form);
            obj.set_cssclass("sta_WF_OutputR");
            obj.set_taborder("7");
            obj.set_text("넥사크로플랫폼");
            this.Div00_00.addChild(obj.name, obj);

            obj = new nexacro.Static("sta00","20","90",null,"2","20",null,null,null,null,null,this.Div00_00.form);
            obj.set_cssclass("sta_WF_Boundary");
            obj.set_taborder("8");
            this.Div00_00.addChild(obj.name, obj);

            obj = new nexacro.Div("Div00_00_00","30","624",null,"262","30",null,null,null,null,null,this);
            obj.set_cssclass("div_WF_DetailBox");
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","20","20",null,"30","20",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_cssclass("sta_WF_Title");
            obj.set_taborder("0");
            obj.set_text("투비넥사크로");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","20","50",null,"30","20",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_cssclass("sta_WF_Date");
            obj.set_taborder("1");
            obj.set_text("2022.05.01~2022.05.31");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","20","92","120","50",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_cssclass("sta_WF_LabelDetail");
            obj.set_taborder("2");
            obj.set_text("프로젝트");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02_00",null,"92","263","50","20",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_cssclass("sta_WF_OutputR");
            obj.set_taborder("3");
            obj.set_text("투비일정관리프로젝트");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02_00_00",null,"142","263","50","20",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_cssclass("sta_WF_OutputP");
            obj.set_taborder("4");
            obj.set_text("123,456,789,100");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02_01","20","142","120","50",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_cssclass("sta_WF_LabelDetail");
            obj.set_taborder("5");
            obj.set_text("단가");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02_02","20","192","120","50",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_cssclass("sta_WF_LabelDetail");
            obj.set_taborder("6");
            obj.set_text("제품");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02_00_01",null,"192","263","50","20",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_cssclass("sta_WF_OutputR");
            obj.set_taborder("7");
            obj.set_text("넥사크로플랫폼");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new nexacro.Static("sta00","20","90",null,"2","20",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_cssclass("sta_WF_Boundary");
            obj.set_taborder("8");
            this.Div00_00_00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new nexacro.Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form
            obj = new nexacro.Layout("default","",0,0,this.Div00_00.form,function(p){});
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00.form
            obj = new nexacro.Layout("default","",0,0,this.Div00_00_00.form,function(p){});
            this.Div00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","mobile",480,896,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Temp16.xfdl", function(nexacro, system, trace, environment, application) {
        /**
        *  Mobile 프로젝트
        *  @FileName 	Temp16.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
        *******************************************************************************
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
        	//필수함수
        //	this.gfnFormOnLoadM(obj);
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
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
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };

        this.loadIncludeScript("Temp16.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
