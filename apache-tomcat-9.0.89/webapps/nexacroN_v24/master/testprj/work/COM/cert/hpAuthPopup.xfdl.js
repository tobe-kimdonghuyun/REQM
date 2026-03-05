(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sPopup");
            this.set_titletext("HP AUTH POPUP");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMap", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsToken", this);
            obj._setContents("<ColumnInfo><Column id=\"token\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00","0","0","450","700",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",450,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("hpAuthPopup.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	withAuthPopup.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/10/07
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/07				김완성						최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.objSrv = nexacro.getEnvironment().services["svcUrl"];
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        //	this.WebBrowser00.url = this.objSrv.url + "hpcert.html";
        	var url = "hpcert.html";
        	this.gfnWebBrowserSendPost(this, this.WebBrowser00, url, "");
        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        this.cfnClose = function() {
        	console.log('cfnClose');
        }
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getApiTransaction = function() {
        	var strSvcId    = "cert";
        	var strSvcUrl   = "api/withAuthResult.do";
        	var inData      = "dsToken=dsToken";
        	var outData     = "dsMap=dsMap";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "cert":
        			var resultCode = this.dsMap.getColumn(0, "resultCode");
        			var phone = this.dsMap.getColumn(0, "phone");
        			var birthday = this.dsMap.getColumn(0, "birthday");
        			var name = this.dsMap.getColumn(0, "name");

        			var obj = {
        				"resultCode" : resultCode,
        				"phone" : phone,
        				"birthday" : birthday,
        				"name" : name
        			};

        			this.close(JSON.stringify(obj));
        			break;
        	}
        };

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if(sPopupId =="popupSearch")
        	{
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		console.log(objRtn);
        		//TODO..
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function() {


        	if(!nexacro.userpostmessage) {
        		window.addEventListener('message', function(e) {
        			if(this.parent[3]) {
        				this.parent[3].NEXACROWEBBROWSER._refform.fnPostData(e.data);
        			}
        		});
        	}
        };

        this.fnPostData = function(data) {
        	var vJson = JSON.stringify(data);
        	var obj = JSON.parse(vJson);
        	this.close(JSON.stringify(obj));
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.WebBrowser00_onusernotify = function(obj,e)
        {
        	console.log("hpAuth");
        	console.log(e);
        };

        this.hpCallback = function(retVal) {
        	console.log(retVal);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.WebBrowser00.addEventHandler("onusernotify",this.WebBrowser00_onusernotify,this);
        };
        this.loadIncludeScript("hpAuthPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
