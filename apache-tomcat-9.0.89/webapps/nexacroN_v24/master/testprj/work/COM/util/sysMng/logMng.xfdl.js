(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("logMng");
            this.set_titletext("Tab");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,820);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("Tab00","0","0",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("로그인로그");
            obj.set_url("work::sysMng/logMngTab/loginLog.xfdl");
            obj.set_formscrolltype("none");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("시스템로그");
            obj.set_url("work::sysMng/logMngTab/systemLog.xfdl");
            obj.set_formscrolltype("none");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("개인정보열람로그");
            obj.set_url("work::sysMng/logMngTab/privacyLog.xfdl");
            obj.set_formscrolltype("none");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Tab00);
            obj.set_text("송/수신로그");
            obj.set_url("work::sysMng/logMngTab/transferLog.xfdl");
            obj.set_formscrolltype("none");
            this.Tab00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage4
            obj = new Layout("default","",0,0,this.Tab00.Tabpage4.form,function(p){});
            this.Tab00.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage5
            obj = new Layout("default","",0,0,this.Tab00.Tabpage5.form,function(p){});
            this.Tab00.Tabpage5.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,820,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::sysMng/logMngTab/loginLog.xfdl");
            this._addPreloadList("fdl","work::sysMng/logMngTab/systemLog.xfdl");
            this._addPreloadList("fdl","work::sysMng/logMngTab/privacyLog.xfdl");
            this._addPreloadList("fdl","work::sysMng/logMngTab/transferLog.xfdl");
        };
        
        // User Script
        this.registerScript("logMng.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	Temp16.xfdl
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
        	this.gfnFormOnload(obj); //필수함수

        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //삭제
        this.cfnClose = function ()
        {
        	trace('cfnClose');
        };
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
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
        };
        this.loadIncludeScript("logMng.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
