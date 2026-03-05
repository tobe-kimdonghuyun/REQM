(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup");
            this.set_cssclass("frm_POP_BgBox");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,181);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnCancle",null,"10","40","40","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            this.addChild(obj.name, obj);

            obj = new Static("txtMsgContent","30.00","62",null,"24","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_AlertText");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","0","txtMsgContent:30",null,"57","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_Confirm");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",600,181,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_cssclass("frm_POP_BgBox");

                p.btnCancle.set_taborder("1");
                p.btnCancle.set_cssclass("btn_POP_Close");
                p.btnCancle.move(null,"10","40","40","20",null);

                p.txtMsgContent.set_taborder("0");
                p.txtMsgContent.set_cssclass("sta_POP_AlertText");
                p.txtMsgContent.set_fittocontents("height");
                p.txtMsgContent.move("30.00","62",null,"24","30",null);

                p.btnOk.set_taborder("2");
                p.btnOk.set_text("확인");
                p.btnOk.set_cssclass("btn_POP_Confirm");
                p.btnOk.move("0","txtMsgContent:30",null,"57","0",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,Mobile_screen",300,181,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.txtMsgContent.set_text("입력 항목을 확인해 주세요.");
                p.txtMsgContent.set_fittocontents("height");
                p.txtMsgContent.move("5%","62",null,"24","5%",null);
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

        };
        
        // User Script
        this.registerScript("cmmAlert.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	cmmAlert.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2025/03/11
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2025/03/11			TOBESOFT					최초생성
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
        	var paramType = this.getOwnerFrame().paramType;
            var sContents = this.getOwnerFrame().paramContents;

        	this.fnMsgSetting(sContents);
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
        /**
        * @description 메세지설정
        */
         this.fnMsgSetting = function (sMsgContent)
         {
        	this.txtMsgContent.set_text(sMsgContent);
         };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.btnOk_onclick = function(obj,e)
        {
        	this.close(true);
        };

        this.btnCancle_onclick = function(obj,e)
        {
        	this.close(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
        };
        this.loadIncludeScript("cmmAlert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
