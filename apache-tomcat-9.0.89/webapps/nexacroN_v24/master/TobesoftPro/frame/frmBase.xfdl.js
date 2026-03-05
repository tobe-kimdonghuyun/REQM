(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmBase");
            this.set_titletext("New Form");
            this.set_cssclass("div_WF_Floating");
            this.getSetter("uResetScroll").set("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,1080);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staLimit","48.36%","0","120","1",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_text("center 맞춤용");
            this.addChild(obj.name, obj);

            obj = new Div("divWork","0","0",null,"4268","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_Frame");
            obj.set_text("123");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("divContents","0","0",null,null,"0","80",null,null,"1000",null,this.divWork.form);
            obj.set_taborder("0");
            obj.set_formscrolltype("none");
            obj.set_text("");
            obj.getSetter("uGubun").set("");
            obj.set_fittocontents("none");
            obj.set_formscrollbartype("none none");
            obj.set_url("prst::prstMain.xfdl");
            this.divWork.addChild(obj.name, obj);

            obj = new Div("divFooter","0","divContents:0",null,"80","0",null,null,null,null,null,this.divWork.form);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            obj.set_url("frame::frmFooter.xfdl");
            this.divWork.addChild(obj.name, obj);

            obj = new Div("divTop","0","0",null,"80","0",null,null,null,null,null,this);
            obj.set_url("frame::frmTop.xfdl");
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Div("divFloating",null,null,"100","176","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("divFloating");
            obj.set_url("frame::frmFloating.xfdl");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWork.form.divContents
            obj = new Layout("default","",0,0,this.divWork.form.divContents.form,function(p){});
            this.divWork.form.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWork.form.divFooter
            obj = new Layout("default","",0,0,this.divWork.form.divFooter.form,function(p){});
            this.divWork.form.divFooter.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWork.form
            obj = new Layout("default","",0,0,this.divWork.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divContents.set_taborder("0");
                p.divContents.set_formscrolltype("none");
                p.divContents.set_text("");
                p.divContents.getSetter("uGubun").set("");
                p.divContents.set_fittocontents("none");
                p.divContents.set_formscrollbartype("none none");
                p.divContents.set_url("prst::prstMain.xfdl");
                p.divContents.set_minheight("1000");
                p.divContents.set_maxheight("");
                p.divContents.move("0","0",null,null,"0","80");

                p.divFooter.set_taborder("1");
                p.divFooter.set_formscrollbartype("none none");
                p.divFooter.set_formscrolltype("none");
                p.divFooter.set_visible("true");
                p.divFooter.set_fittocontents("height");
                p.divFooter.set_url("frame::frmFooter.xfdl");
                p.divFooter.move("0","divContents:0",null,"80","0",null);
            	}
            );
            obj.set_type("default");
            this.divWork.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divWork.form
            obj = new Layout("Layout0","",0,0,this.divWork.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("default");
            this.divWork.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divWork.form
            obj = new Layout("Layout1","",0,0,this.divWork.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divFooter.move("0","divContents:0",null,"120","0",null);

                p.divContents.move("0","0",null,null,"0","120");
            	}
            );
            obj.set_type("default");
            this.divWork.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divWork.form
            obj = new Layout("Layout2","",0,0,this.divWork.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divContents.set_text("");
                p.divContents.move("0","0",null,null,"0","120");

                p.divFooter.move("0","divContents:0",null,"120","0",null);
            	}
            );
            obj.set_type("default");
            this.divWork.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divWork.form
            obj = new Layout("Layout0","",0,0,this.divWork.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("default");
            this.divWork.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divWork.form
            obj = new Layout("Layout1","",0,0,this.divWork.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("default");
            this.divWork.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divWork.form
            obj = new Layout("Layout2","",0,0,this.divWork.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("default");
            this.divWork.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divTop
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFloating
            obj = new Layout("default","",0,0,this.divFloating.form,function(p){});
            this.divFloating.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,1080,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","prst::prstMain.xfdl");
            this._addPreloadList("fdl","frame::frmFooter.xfdl");
            this._addPreloadList("fdl","frame::frmTop.xfdl");
            this._addPreloadList("fdl","frame::frmFloating.xfdl");
        };
        
        // User Script
        this.registerScript("frmBase.xfdl", function() {
        /**
        *  proPortal
        *  @FileName 	frmBase.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2025/02/26
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2025/02/26			TOBESOFT					최초생성
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
        	//this.fnFormOpen();

        	// 첫 로딩 시 푸터 안보이도록 하기 위해 onload 시 height 걸어줌
        	this.divWork.set_fittocontents("height");
        	this.divWork.form.divContents.set_fittocontents("height");


        	document.getElementById(this.divFloating._unique_id).style.position = "fixed"; // 플로팅 div position 세팅
        	document.getElementById(this.divTop._unique_id).style.position = "fixed"; // top div position 세팅

        	this.fnTranSearch(); // 공통 코드 조회
        	this.fnHistory(); // 히스토리 세팅


        };

        // divTop 스크롤 시 따라옴
        this.frmBase_onvscroll = function(obj,e)
        {
        	this.divTop.set_top(0);
        	this.divFloating.set_bottom(20);
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //공통 코드 조회
        this.fnTranSearch = function ()
        {
        	var strSvcId    = "searchPrstBaseInfo";
        	var strSvcUrl   = "searchPrstBaseInfo.do";
        	var inData      = "";
        	var outData     = "gdsCommCode=dsComboData";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchPrstBaseInfo":
        			// DEVPRO, UXPRO 메뉴 바로가기
        			const sServiceName = this.objApp.gvInitSevice;
        			if(this.gfnIsNotNull(sServiceName))
        			{
        				let nRow = this.objApp.gdsMenu.findRow("MENU_NM", sServiceName);
        				let sMenuId = this.objApp.gdsMenu.getColumn(nRow, "MENU_ID");
        				switch(sServiceName) {
        				case "DevPro" :
        					this.divTop.form.divButton.form.btnDEVPRO.click();
        					break;
        				case "UXPro" :
        					this.divTop.form.divButton.form.btnUXPRO.click();
        					break;
        				case "ProGen" :
        					this.divTop.form.divButton.form.btnPROGEN.click();
        					break;
        				default:
        				}
        			}

        			this.divWork.form.divContents.set_minheight(0);
        			break;
        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        // div top의 top 값 setting
        this.fnSetTopMenuTop = function(pos) {
        	this.divTop.set_top(pos);
        };

        // div floating visible 처리
        this.fnSetFloating = function(sMenuNm) {
        	this.divFloating.form.fnSetVisible(sMenuNm);
        };

        this.fnHistory = function ()
        {
        	if (system.navigatorname != "nexacro")
        	{
        		MyHistory.init(this.fnOnChangeHistory, this);

        		var hash = MyHistory.getLocationHash();

        		if (hash)
        		{
        			var data = MyHistory.getData(hash);
        			if (data)
        			{
        				//새로고침시 처리가 필요한 경우
        				this.fnOnChangeHistory(hash, data);
        				return;
        			}
        		}
        	}
        };

          // 히스토리
        this.fnOnChangeHistory = function(hash, data)
        {
        	//히스토리 동작시 팝업 close
        	if (nexacro.getPopupFrames().length > 0)
        	{
        		var objframes = nexacro.getPopupFrames();
        		for(var i=0; i< objframes.length; i++)
        		{
        			objframes[i].form.close();
        		}
        		return;
        	}
        	//직전 화면이 Home인 경우
        // 	if (hash == "HOME")
        //     {
        // 		this.fnAction("HOME", null);
        //     }
        // 	//직전 화면이 없는 경우.
        // 	else
        	if (this.gfnIsNull(hash))
        	{
        		if(sessionStorage.length > 0) // 메인을 set_url로 가져오기 때문에 별도의 예외 처리
        		{
        			sessionStorage.removeItem("HOME");
        			this.fnAction("HOME", null);
        			return;
        		}
        	}
        	else
        	{
        		this.fnFormOpen(data.oArg,data.oArgPm,data.oArgGu);
        		return;
        	}
        };

        /*
        * @description Menu History 셋팅
        */
        this.fnSetMenuHistory = function(sId, objArg)
        {
        	var data;
        	var hash;

        	if(sId == "MENU") {
        		hash = sId;
        		data = objArg;

        		var iHistoryLength = this.fvObjMenuHistory.length;
        		this.fvObjMenuHistory.push({index:this.fvObjMenuHistory.length, objMenuArg:objArg});
        	}else{
        		this.fvObjMenuHistory = [];
        	}
        	MyHistory.setLocationHash(hash, data);
        };

        // 히스토리 저장 및 home 호출
        this.fnAction = function(sID, objArg)
        {
        	switch(sID)
        	{
        		//History 동작시 state 저장
        		case "History":
        			//history setting
        			if (system.navigatorname != "nexacro")
        			{
        				var data;
        				var hash;
        				if(this.gfnIsNull(objArg))
        				{
        					hash = "HOME"
        					data = null;
        				}else
        				{
        					hash = objArg.menuNm;
        					data = {oArg : objArg.menuNm, oArgPm : objArg.type, oArgGu : objArg.gubun};
        				}
        				MyHistory.setLocationHash(hash, data);
        			}
        			break;

        		case "HOME":
        			this.fnFormOpen("HOME");
        			break;
        		default : break;
        	}
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 화면 open
        this.fnFormOpen = function(sMenuNm, sType)
        {
        	if (this.gfnIsNull(sMenuNm)) {
        		var objParams = new URLSearchParams(window.location.search);
        		if(this.gfnIsNull(objParams.get("page"))) {
        			sMenuNm = "HOME";
        		}
        		else {
        			sMenuNm = objParams.get("page");
        		}
        	}
        	var oDsMenu = this.objApp.gdsMenu;

        	var nFindRow = oDsMenu.findRowExpr(`MENU_NM == '${sMenuNm.toUpperCase()}'`);
        	if(nFindRow < 0) return;

        	var sUseApp = this.objApp.gdsMenu.getColumn(nFindRow, "USE_APP");
        	this.divTop.form.fnAppButtonVisibleControl(sUseApp); // 체험하기, 문의하기 버튼 visible 설정

        	this.gfnOpenMenu(nFindRow, sType);
        	this.fnSetFloating(sMenuNm);

        	// 히스토리
        	var objArg = {menuNm : sMenuNm};
        	if(sMenuNm == "APP") {
        		objArg.type = this.objApp.gvAppType;
        	} else if(sMenuNm == "INFO") {
        		objArg.type = this.objApp.gvInfoType;
        	}

        	this.fnAction("History", objArg);
        };


        // 웹 브라우저 resize 시 resetScroll, top 조절 (디바운스 적용)
        this.divWork_onsize = this.gfnDebounce(function(obj, e) {
        	var nX = obj.getOffsetWidth();

        	if(nX > this.objApp.gvMobileSize) {
        		this.divWork.form.divFooter.setOffsetHeight(80);
        	} else {
        		this.divWork.form.divFooter.setOffsetHeight(130);
        	}
            this.divWork.form.divContents.form.resetScroll();
            this.divWork.form.resetScroll();
            this.resetScroll();
        }, 0);

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onvscroll",this.frmBase_onvscroll,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divWork.addEventHandler("onsize",this.divWork_onsize,this);
        };
        this.loadIncludeScript("frmBase.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
