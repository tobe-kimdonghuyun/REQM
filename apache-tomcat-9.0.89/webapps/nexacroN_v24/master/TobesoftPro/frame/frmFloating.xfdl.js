(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFloating");
            this.set_titletext("New Form");
            this.set_background("ㅠㅣㅠㅣ");
            if (Form == this.constructor)
            {
                this._setFormPosition(100,176);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnDownload","10","94","60","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_FloatingDownload");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnScrollUp","10","20","60","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_FloatingTop");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00",null,null,"100","176","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_verticalgap("16");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxiswrapalign("end");
            obj.set_flexmainaxisalign("center");
            obj.set_fittocontents("height");
            obj.set_spacing("16px 20px 24px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnScrollUp\"/><PanelItem id=\"PanelItem01\" componentid=\"btnDownload\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",100,176,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmFloating.xfdl", function() {
        /**
        *  proPortal
        *  @FileName 	frmFloating.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2025/03/10
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2025/03/10			TOBESOFT					최초생성
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
        // 화면 타입에 따른 다운로드 버튼 visible 처리
        this.fnSetVisible = function(sType) {
        	if(this.gfnIsNull(sType)) sType ="HOME";
        	switch(sType.toUpperCase()) {
        		case "UXPRO" :
        		case "DEVPRO"  :
        		case "PROGEN" :
        			this.btnDownload.set_visible(true);
        			break;
        		default :

        			this.btnDownload.set_visible(false);
        	}
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 맨 위로 버튼 onclick
        this.btnScrollUp_onclick = function(obj,e)
        {
        	this.objApp.gvBase.form.scrollTo(0, 0);
        };

        // 다운로드 버튼 onclick
        this.btnDownload_onclick = function(obj,e)
        {
        	var urlPath = "";

        	// 로컬
        	if(this.objApp.gvRunMode == "L")
        	{
        		urlPath = window.location.protocol + "//" + window.location.host + "/" + "file/TOBESOFT_DEVPRO_소개서.pdf";
        	}
        	// 개발
        	else if(this.objApp.gvRunMode == "D")
        	{
        		urlPath = window.location.protocol + "//" + window.location.host + "/" + "Pro/file/TOBESOFT_DEVPRO_소개서.pdf";
        	}
        	// 운영
        	else if(this.objApp.gvRunMode == "R")
        	{
        		urlPath = window.location.protocol + "//" + window.location.host + "/" + "file/TOBESOFT_DEVPRO_소개서.pdf";
        	}

        	if( this.gfnIsNull(urlPath)){
        		return;
        	}
        	system.execBrowser(urlPath);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnDownload.addEventHandler("onclick",this.btnDownload_onclick,this);
            this.btnScrollUp.addEventHandler("onclick",this.btnScrollUp_onclick,this);
        };
        this.loadIncludeScript("frmFloating.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
