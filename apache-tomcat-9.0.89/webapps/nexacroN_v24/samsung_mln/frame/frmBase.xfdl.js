(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameBase");
            this.set_dragscrolltype("vert");
            this.set_titletext("바탕프레임");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divTop","0","0",null,"55","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0",null,null,"1","0","0",null,null,null,null,this.divTop.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_TF_Line");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("sta00","65","0",null,"55","65",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_TF_Title");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("sta01","65","0",null,"55","65",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Logo");
            obj.set_visible("false");
            obj.set_text("Mobile");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnMenu",null,"0","55","55","20",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_TF_Menu");
            obj.set_text("");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnBack","20","0","55","55",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_TF_Pre");
            obj.set_text("");
            this.divTop.addChild(obj.name, obj);

            obj = new Div("divCenter","0","55",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("frame::frmWork.xfdl");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divMain","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("divMenu","980","0",null,null,"-980","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_url("frame::frmMenu.xfdl");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divLogin","490","0",null,null,"-490","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("frame::frmLogin.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTop.form
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCenter
            obj = new Layout("default","",0,0,this.divCenter.form,function(p){});
            this.divCenter.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMenu
            obj = new Layout("default","",0,0,this.divMenu.form,function(p){});
            this.divMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLogin
            obj = new Layout("default","",0,0,this.divLogin.form,function(p){});
            this.divLogin.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",480,768,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWork.xfdl");
            this._addPreloadList("fdl","frame::frmMenu.xfdl");
            this._addPreloadList("fdl","frame::frmLogin.xfdl");
        };
        
        // User Script
        this.registerScript("frmBase.xfdl", function() {
        /**
        *  Mobile 프로젝트
        *  @FileName 	frmBase.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
         this.objApp = nexacro.getApplication();
         this.fvBtnTop = 0;
         /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.frameBase_onload = function(obj,e)
        {
        	// Frame 변수 저장
        	this.objApp.gvBase 	    = this;
         	// 로그인 화면 open
        	this.divLogin.set_left(0);
        	this.divLogin.set_right(0);
        	this.divLogin.set_visible(true);
        	this.divMenu.set_left(0);
        	this.divMenu.set_right(0);
            //this.divMenu.set_width(0);
        	this.divMenu.set_visible(false);
        	this.divMain.set_visible(false);
        	this.divTop.set_visible(false);
        };
        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch (sMsgId)
        	{
        		case "logout":
        			if (sRtn)
        			{
        				this.fnLogout();
        			}
        			break;
        		case "exit":
        			if (sRtn)
        			{
        				nexacro.getApplication().exit();
        			}
        			break;
        		case "confirm.before.movepage":
        			if (sRtn)
        			{
        				this._gfnCallM(this.fvsMenuId, this.fvoObj);
        			}
        			else
        			{
        				this.fnAction("MENU", false);
        			}
        			break;
        	}
        };
        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
         this.fnAction = function(sID, arg)
        {
        	switch(sID)
        	{
        		case "MENU":
        			if (arg)
        			{
        				this.divMenu.set_visible(true);
        				var nWidth = this.getOffsetWidth();
        				this.divCenter.set_visible(false);
        				this.divMain.set_visible(false);
        			}
        			else
        			{
        				this.divMenu.set_visible(false);
        				if(this.gfnIsNull(this.divCenter.form.divWork.url))
        				{
        					this.divMain.set_visible(true);
        				}else{
        					this.divCenter.set_visible(true);
        					this.divTop.form.sta00.set_visible(true);
        					this.divTop.form.sta01.set_visible(false);
        				}
        			}
        			break;

        		case "LOGIN":
        			if (arg)
        			{
        				this.objApp.gvLogin = "Y";
        				this.divLogin.set_visible(false);
        				this.fnAction("HOME", false);
        			}else{
        				if (system.navigatorname != "nexacro")
        				{
        					window.location.reload();
        				}
        				this.objApp.gvLogout = "Y";
        				this.divMenu.set_visible(false);
        				this.divMain.set_visible(false);
        				this.divTop.set_visible(false);
        			//	this.btnAdd.set_visible(false);
        				this.divLogin.set_visible(true);
        			}
        			break;
        		case "HOME":
        			this.divTop.set_visible(true);
        			this.divTop.form.btnBack.set_visible(false);
        			this.divTop.form.sta00.set_visible(false);
        			this.divTop.form.sta01.set_visible(true);
        			this.divMain.set_visible(true);
        			this.divCenter.set_visible(false);
        			this.divMenu.set_visible(false);
        			this.objApp.gvOpenMenuId = '';
        			//arg : false일 경우 초기 로드이므로 main reload X
        			if (arg && !this.gfnIsNull(this.divMain.url)) this.divMain.form.reload();
        			break;

        		case "EXIT":
                    this.gfnAlert("confirm.logout", "", "logout", "fnMsgCallback");
        			break;
        	}
        }

        /**
         * @description workFrame close 시 처리
        */
        this.fnWorkFrameClose = function(sMenuId, oObj)
        {
        	if (this.gfnIsNull(this.divCenter.form.divWork.form.lookup("fnClose")))
        	{
        		//로컬환경에서 fnClose 함수 없음 알림
        		if (nexacro.getEnvironmentVariable("evRunMode") == "S" || nexacro.getEnvironmentVariable("evRunMode") == "L") {
        			trace("해당화면에 fnClose 함수가 없습니다. fnClose 함수가 없으면 데이타 변경여부 체크를 하지 않습니다.");
        		}
                this._gfnCallM(sMenuId, oObj);
        	}
            else
            {
        		if (this.divCenter.form.divWork.form.fnClose() == false)
        		{
        			var sMsgId = "confirm.before.movepage";
        			var arrArg = "";
        			var sPopId = sMsgId;
        			this.fvsMenuId = sMenuId;
                    this.fvoObj = oObj;

        			// 변경된 데이터가 있습니다. 현재 화면을 닫겠습니까?
                    this.gfnAlert(sMsgId, arrArg, sPopId, "fnMsgCallback");
        		}
                else
                {
        			this._gfnCallM(sMenuId, oObj);
        		}
        	}
        }

        // 로그아웃
        this.fnLogout = function ()
        {
        	if(system.navigatorname == "nexacro")
        	{
        		nexacro.getApplication().exit();
        	}
        	else
        	{
        		window.top.location.reload(true);
        	}
        };

        //프로팅 버튼 초기 위치 설정하는 함수.
        this.fnSetFloatBtnInitPos = function(objVscrollBar, objBtn, nPadding)
        {
        	if(this.gfnIsNull(objVscrollBar) || this.gfnIsNull(objBtn)) return;
        	if(this.gfnIsNull(nPadding)) nPadding = 20;
        	objBtn.set_top(objVscrollBar.height - objBtn.height - nPadding);
        	this.fvBtnTop = objBtn.top;
        }

        //popup화면에서 뒤로가기 디바이스 버튼 클릭시 팝업 닫기.
        this.fnClosePopupByDeviceButton = function(objForm)
        {
        	objForm.close();
        }


         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.divTop_btnMenu_onclick = function(obj,e)
        {
        	this.fnAction("MENU", true);
        };

        this.divTop_btnBack_onclick = function(obj,e)
        {
        	this.divCenter.form.divWork.set_url("");
        	this.fnAction("HOME", true);
        };

        this.frameBase_ondevicebuttonup = function(obj,e)
        {
        	if (this.objApp.gvOs.indexOf("ANDROID") >= 0)
        	{
        		if (e.button == 1) // MENU
        		{

        		}
        		else if (e.button == 2) // CANCEL
        		{
        			//경우 1. 로그인 화면에서 back, 2. Main 화면에서 back, 3. 메뉴 화면에서 back, 4. frmWork에서 back
        			if (this.divLogin.visible)
        			{
        				this.gfnAlert("confirm.exit", "", "exit", "fnMsgCallback");
        			}
        			else if (this.divMain.visible && !this.divLogin.visible)
        			{
        				if (this.objApp.gvIsLogin == "Y")
        				{
        					this.fnAction("EXIT");
        				}
        			}
        			else if (this.divMenu.visible)
        			{
        				this.fnAction("MENU", false);
        			}
        			else if(this.divCenter.form.divWork.url)
        			{
        				this.fnAction("HOME", true);
        			}
        		}
        	}

        	return false;
        };
        this.btnAdd_onclick = function(obj,e)
        {
        	var bDivCenterVisible = this.divCenter.visible;
        	var bDivMainVisible = this.divMain.visible;

        	var targetDiv = bDivCenterVisible ? this.divCenter : (bDivMainVisible ? this.divMain : null);
        	if(this.gfnIsNull(targetDiv)) return;

        	if(targetDiv == this.divCenter)
        	{
        		if(targetDiv.form.divWork.form.lookup("cfnAdd")) targetDiv.form.divWork.form.cfnAdd();
        	}
        	else if(targetDiv == this.divMain)
        	{
        		if(targetDiv.form.lookup("cfnAdd")) targetDiv.form.cfnAdd();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frameBase_onload,this);
            this.addEventHandler("ondevicebuttonup",this.frameBase_ondevicebuttonup,this);
            this.divTop.form.btnMenu.addEventHandler("onclick",this.divTop_btnMenu_onclick,this);
            this.divTop.form.btnBack.addEventHandler("onclick",this.divTop_btnBack_onclick,this);
        };
        this.loadIncludeScript("frmBase.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
