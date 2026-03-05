(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmLogin");
            this.set_titletext("Login Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(0,0);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLoginResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",0,0,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLogin.xfdl", function() {
        /**
         *  DevPACK
         *  @FileName 	frmLogin.xfdl
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
        {
        	this.fnLoginChk();

        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnLoginChk = function()
        {
        	var strSvcUrl   = "cmmn/login/loginChk.do";
        	var inData      = "gdsUserInfo=dsCond";
        	var outData     = "gdsUserInfo=gdsUserInfo gdsCount=gdsCount gdsNtfcnCnt=gdsNtfcnCnt";

        	//this.gfnTransaction("loginChk", strSvcUrl, inData, outData, null, "fnCallback", true, 0);
        	this.fnCallback("loginChk", 0);
        }


        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case 'loginChk' :
        			// 유효한 세션이면 로그인 처리
        			this.gfnSetLogin();

        			// todo 유효하지 않은 세션이면 중단
        			break;


        	}
        };

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
        this.loadIncludeScript("frmLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
