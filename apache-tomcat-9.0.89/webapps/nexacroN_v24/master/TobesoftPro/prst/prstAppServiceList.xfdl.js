(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("serviceList");
            this.set_titletext("신청하기_서비스리스트");
            if (Form == this.constructor)
            {
                this._setFormPosition(750,88);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnUXP","395","45","400","88",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("UXPro");
            obj.set_cssclass("btn_WF_Service");
            obj.set_tablecellarea("1/2");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnDP","10","45","400","88",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("DevPro");
            obj.set_cssclass("btn_WF_Service");
            obj.set_tablecellarea("1/0");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnPRG","685","45","400","88",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("ProGen");
            obj.set_cssclass("btn_WF_Service");
            obj.set_tablecellarea("1/2");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",750,88,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("신청하기_서비스리스트");

                p.btnUXP.set_taborder("0");
                p.btnUXP.set_text("UXPro");
                p.btnUXP.set_cssclass("btn_WF_Service");
                p.btnUXP.set_tablecellarea("1/2");
                p.btnUXP.set_flexgrow("1");
                p.btnUXP.set_maxwidth("");
                p.btnUXP.move("395","45","400","88",null,null);

                p.btnDP.set_taborder("1");
                p.btnDP.set_text("DevPro");
                p.btnDP.set_cssclass("btn_WF_Service");
                p.btnDP.set_tablecellarea("1/0");
                p.btnDP.set_flexgrow("1");
                p.btnDP.set_maxwidth("");
                p.btnDP.move("10","45","400","88",null,null);

                p.btnPRG.set_taborder("2");
                p.btnPRG.set_text("ProGen");
                p.btnPRG.set_cssclass("btn_WF_Service");
                p.btnPRG.set_tablecellarea("1/2");
                p.btnPRG.set_flexgrow("1");
                p.btnPRG.set_maxwidth("");
                p.btnPRG.move("685","45","400","88",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,Mobile_screen",420,284,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnDP.move("10","45","420","88",null,null);

                p.btnUXP.move("395","45","420","88",null,null);

                p.btnPRG.move("685","45","420","88",null,null);
            	}
            );
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("Landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_type("horizontal");
            obj.set_verticalgap("10");
            obj.set_flexwrap("wrap");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("prstAppServiceList.xfdl", function() {
        /**
        *  proPortal
        *  @FileName 	prstAppServiceList.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2025/03/06
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2025/03/06			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
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

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.fnSetVisible = function(sType)
        {
        	switch(sType)
        	{
        		case "EXPERIEN" :
        			this.btnPRG.set_visible(false);
        			break;
        		case "INQUIRY" :
        			this.btnPRG.set_visible(true);
        			break;
        	};

        	this.parent.parent.resetScroll();
        };

        this.Button_onclick = function(obj,e)
        {
        	this.parent.parent.parent.parent.divWorkContents_divComm_onclick(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnUXP.addEventHandler("onclick",this.Button_onclick,this);
            this.btnDP.addEventHandler("onclick",this.Button_onclick,this);
            this.btnPRG.addEventHandler("onclick",this.Button_onclick,this);
        };
        this.loadIncludeScript("prstAppServiceList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
