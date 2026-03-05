(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN003M00");
            this.set_titletext("배정후보공간안내");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Tab("tabStep","0","divTitle:20",null,null,"60","25",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tabStep);
            obj.set_text("업체별 후보공간목록");
            obj.set_formscrollbartype("default autoindicator");
            obj.set_url("work::REN/FRS/REN003M00_01.xfdl");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tabStep);
            obj.set_text("임차대기후보업체");
            obj.set_formscrollbartype("default autoindicator");
            obj.set_url("work::REN/FRS/REN003M00_02.xfdl");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tabStep);
            obj.set_text("임대가능 전체목록");
            obj.set_formscrollbartype("default autoindicator");
            obj.set_url("work::REN/FRS/REN003M00_03.xfdl");
            this.tabStep.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStep.Tabpage1
            obj = new Layout("default","",0,0,this.tabStep.Tabpage1.form,function(p){});
            this.tabStep.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStep.Tabpage2
            obj = new Layout("default","",0,0,this.tabStep.Tabpage2.form,function(p){});
            this.tabStep.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStep.Tabpage3
            obj = new Layout("default","",0,0,this.tabStep.Tabpage3.form,function(p){});
            this.tabStep.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("배정후보공간안내");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.set_tabstop("false");
                p.divTitle.move("0","0",null,"50","60",null);

                p.tabStep.set_taborder("1");
                p.tabStep.set_tabindex("0");
                p.tabStep.move("0","divTitle:20",null,null,"60","25");

                p.tabStep.Tabpage1.set_text("업체별 후보공간목록");
                p.tabStep.Tabpage1.set_formscrollbartype("default autoindicator");
                p.tabStep.Tabpage1.set_url("work::REN/FRS/REN003M00_01.xfdl");

                p.tabStep.Tabpage2.set_text("임차대기후보업체");
                p.tabStep.Tabpage2.set_formscrollbartype("default autoindicator");
                p.tabStep.Tabpage2.set_url("work::REN/FRS/REN003M00_02.xfdl");

                p.tabStep.Tabpage3.set_text("임대가능 전체목록");
                p.tabStep.Tabpage3.set_formscrollbartype("default autoindicator");
                p.tabStep.Tabpage3.set_url("work::REN/FRS/REN003M00_03.xfdl");
            	}
            );
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.move("0","0",null,"50","0",null);

                p.tabStep.move("20","divTitle:10",null,"815","20",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
            this._addPreloadList("fdl","work::REN/FRS/REN003M00_01.xfdl");
            this._addPreloadList("fdl","work::REN/FRS/REN003M00_02.xfdl");
            this._addPreloadList("fdl","work::REN/FRS/REN003M00_03.xfdl");
        };
        
        // User Script
        this.registerScript("REN003M00.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN003M00.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/10/07
        *  @Desction   ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/07			박영수						최초생성
        *******************************************************************************
        */
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	// 페이지 로딩시 처음에 실행 되는 함수
        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        // 검색 조회
        this.cfnSearch = function (page){};

        this.cfnClose = function (){};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function (){};

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onstepchanged",this.REN003M00_onstepchanged,this);
        };
        this.loadIncludeScript("REN003M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
