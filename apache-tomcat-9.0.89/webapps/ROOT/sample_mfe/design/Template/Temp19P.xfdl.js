(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp07");
            this.set_titletext("Popup");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(480,585);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Div("Div00","0","0",null,"58","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","30","20",null,"50","30",null,null,null,null,null,this.Div00.form);
            obj.set_cssclass("sta_WF_PopTit");
            obj.set_fittocontents("width");
            obj.set_taborder("0");
            obj.set_text("팝업 타이틀");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_00",null,"20","50","50","30",null,null,null,null,null,this.Div00.form);
            obj.set_cssclass("btn_TF_CloseB");
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02_00","30","225","42.71%","50",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_RdoS");
            obj.set_taborder("1");
            obj.set_text("엑스플랫폼");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02_00_00","Button02_00:10","225",null,"50","30",null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_Rdo");
            obj.set_taborder("2");
            obj.set_text("넥사크로플랫폼");
            this.addChild(obj.name, obj);

            obj = new nexacro.MaskEdit("MaskEdit07_00","30","325",null,"50","29",null,null,null,null,null,this);
            obj.set_cssclass("msk_WF_Spin");
            obj.set_format("###,###");
            obj.set_readonly("false");
            obj.set_taborder("3");
            obj.set_value("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_00",null,"325","50","50","30",null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_Spinup");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","30","325","50","50",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_Spindown");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00_00_00","30","85","120","40",null,null,null,null,null,null,this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("6");
            obj.set_text("프로젝트명");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit09_00_00","30","125",null,"50","29",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("TOBESOFT");
            obj.set_text("TOBESOFT");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00_00_00_00","30","185","120","40",null,null,null,null,null,null,this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("8");
            obj.set_text("제품선택");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00_00_00_00_00","30","285","120","40",null,null,null,null,null,null,this);
            obj.set_cssclass("sta_WF_Label");
            obj.set_taborder("9");
            obj.set_text("수량");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_01","30","405",null,"60","30",null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_Revised");
            obj.set_taborder("10");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_01_00","30","475",null,"60","30",null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_Del");
            obj.set_taborder("11");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo00","295","185","150","20",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("12");
            var cbo00_innerdataset = new nexacro.NormalDataset("cbo00_innerdataset", obj);
            cbo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{},{},{},{},{},{},{}]});
            obj.set_innerdataset(cbo00_innerdataset);
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new nexacro.Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","mobile",480,585,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Temp19P.xfdl", function(nexacro, system, trace, environment, application) {
        /**
        *  Mobile 프로젝트
        *  @FileName 	Temp19P.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
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
        	this.gfnFormOnLoadM(obj);


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
        this.Div00_Button00_00_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Div00.form.Button00_00.addEventHandler("onclick",this.Div00_Button00_00_onclick,this);
        };

        this.loadIncludeScript("Temp19P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
