(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MF_Process");
            this.set_titletext("메인처리절차");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsProcessList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Panel("Panel00","0","30",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents/>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("MF_Process.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	MF_Process.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/12/04
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/12/04				김완성						최초생성
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

        	this.fnInit(this.parent.id);
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function(id) {

        	var strSvcId    = "search";
        	var strSvcUrl   = "main/selectMfProcessList.do";
        	var inData      = "";
        	var outData     = "dsProcessList=dsProcessList";
        	var strArg      = "procId=" + id;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "search":
        			//페이징 폼의 ID가 변경 될 경우 맞춰서 변경 해야함
        			//console.log(this.dsProcessList.saveJSON());

        			for(var i=0;i<this.dsProcessList.rowcount;i++) {
        				var panelId = this.dsProcessList.getColumn(i, "procImgId");
        				var btnId = this.dsProcessList.getColumn(i, "procImgId") + "_btn";
        				var staId = this.dsProcessList.getColumn(i, "procImgId") + "_sta";
        				var procNm = this.dsProcessList.getColumn(i, "procNm");
        				var procImg = this.dsProcessList.getColumn(i, "procImg");
        				var panelCss = "pan_MF_ProcessN";
        				if(i == 0) {
        					panelCss = "pan_MF_ProcessSN";
        				}

        				if(i == (this.dsProcessList.rowcount-1)) {
        					panelCss = "pan_MF_ProcessEnd";
        				}

        				var panel = new Panel();
        				panel.init(panelId, 0, 0, 120, 150);
        				panel.set_cssclass(panelCss);
        				panel.set_type("vertical");
        				panel.flexcrossaxisalign = "center";
        				panel.verticalgap = 10;
        				this.addChild(panelId, panel);
        				panel.show();

        				var objBtn = new Button();
        				objBtn.init(btnId, 0, 0, 70, 65, null, null);
        				objBtn.set_icon("theme://icon30/" + procImg);
        				objBtn.set_cssclass("btn_MF_Pro");
        				this.addChild(btnId, objBtn);
        				objBtn.show();
        				panel.insertItem(-1, btnId+"_Item", btnId);

        				var static00 = new Static();
        				static00.init(staId, 0, 0, 70, 80);
        				static00.set_text(procNm);
        				static00.set_cssclass("sta_MF_Pro");
        				this.addChild(staId, static00);
        				static00.show();
        				panel.insertItem(-1, staId+"_Item", staId);

        				this.Panel00.insertItem(i, "Item00" + i, panelId);
        			}

        			break;

        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function(id) {
        	this.getSearchTransaction(id);
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("MF_Process.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
