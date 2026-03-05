(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("prstPopup");
            this.set_titletext("마케팅,개인정보 수집 및 이용 동의서");
            this.set_cssclass("frm_POP_BgBox");
            this.getSetter("uResetScroll").set("true");
            this.getSetter("nPortrait").set("640");
            if (Form == this.constructor)
            {
                this._setFormPosition(620,540);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsText", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CLCTEXT\" type=\"STRING\" size=\"256\"/><Column id=\"INFOTEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TITLE\">홍보 및 마케팅 수집 · 이용 동의서</Col><Col id=\"CLCTEXT\">이벤트 및 광고성 정보 제공</Col><Col id=\"INFOTEXT\">· 귀하는 위와 같은 개인정보를 수집 · 이용에 동의하지 않으실 수 있습니다.&#10;· 동의를 거부할 경우 홍보 및 마케팅 정보 수신에 어려움이 있을 수 있습니다.</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnClose",null,"22","40","40","22",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","30","30",null,"24","80",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("개인정보 수집 · 이용 동의서");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Static("staTextTitle","30","staTitle:24",null,"50","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("TOBESOFT Pro(TOBESOFT 주식회사)의 개인정보 수집 이용 목적은 다음과 같습니다.\r\n내용을 자세히 읽어 보신 후 동의 여부를 결정하여 주시기 바랍니다.");
            obj.set_cssclass("sta_POP_Text");
            obj.set_wordWrap("char");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divContents","30","staTextTitle:16",null,"216","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"36","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("0");
            obj.set_text("수집목적");
            obj.set_cssclass("sta_POP_Head");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staClcText","0","sta00:0",null,"36","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("1");
            obj.set_text("서비스 상담 및 TOBESOFT Pro 서비스 안내");
            obj.set_cssclass("sta_POP_Body");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","0","staClcText:0",null,"36","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("2");
            obj.set_text("수집항목");
            obj.set_cssclass("sta_POP_Head");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00","0","sta00_01_00:0",null,"36","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("3");
            obj.set_text("회사명, 이름, 연락처, 이메일");
            obj.set_cssclass("sta_POP_Body");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00","0","sta00_01_00_00:0",null,"36","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("4");
            obj.set_text("보유 · 이용기간");
            obj.set_cssclass("sta_POP_Head");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00_00","0","sta00_01_00_00_00:0",null,"36","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("5");
            obj.set_text("수집일로부터 1년까지");
            obj.set_cssclass("sta_POP_Body");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staInfoText","30","divContents:16",null,"50","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("· 귀하는 위와 같은 개인정보 수집 · 이용에 동의하지 않으실 수 있습니다.\r\n· 필수 수집 항목에 대한 동의를 거부할 경우 서비스 이용이 제한될 수 있습니다.");
            obj.set_cssclass("sta_POP_Text");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","0","staInfoText:50",null,"65","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_Confirm");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("0");
                p.sta00.set_text("수집목적");
                p.sta00.set_cssclass("sta_POP_Head");
                p.sta00.move("0","0",null,"36","0",null);

                p.staClcText.set_taborder("1");
                p.staClcText.set_text("서비스 상담 및 TOBESOFT Pro 서비스 안내");
                p.staClcText.set_cssclass("sta_POP_Body");
                p.staClcText.move("0","sta00:0",null,"36","0",null);

                p.sta00_01_00.set_taborder("2");
                p.sta00_01_00.set_text("수집항목");
                p.sta00_01_00.set_cssclass("sta_POP_Head");
                p.sta00_01_00.move("0","staClcText:0",null,"36","0",null);

                p.sta00_01_00_00.set_taborder("3");
                p.sta00_01_00_00.set_text("회사명, 이름, 연락처, 이메일");
                p.sta00_01_00_00.set_cssclass("sta_POP_Body");
                p.sta00_01_00_00.move("0","sta00_01_00:0",null,"36","0",null);

                p.sta00_01_00_00_00.set_taborder("4");
                p.sta00_01_00_00_00.set_text("보유 · 이용기간");
                p.sta00_01_00_00_00.set_cssclass("sta_POP_Head");
                p.sta00_01_00_00_00.move("0","sta00_01_00_00:0",null,"36","0",null);

                p.sta00_01_00_00_00_00.set_taborder("5");
                p.sta00_01_00_00_00_00.set_text("수집일로부터 1년까지");
                p.sta00_01_00_00_00_00.set_cssclass("sta_POP_Body");
                p.sta00_01_00_00_00_00.move("0","sta00_01_00_00_00:0",null,"36","0",null);
            	}
            );
            this.divContents.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divContents.form
            obj = new Layout("Layout0","",0,0,this.divContents.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staClcText.set_wordWrap("char");
                p.staClcText.set_fittocontents("height");
                p.staClcText.move("0","sta00:0",null,"56","0",null);

                p.sta00_01_00_00.set_fittocontents("height");
                p.sta00_01_00_00.set_wordWrap("char");

                p.sta00_01_00_00_00.set_fittocontents("height");
                p.sta00_01_00_00_00.set_wordWrap("char");

                p.sta00_01_00_00_00_00.set_fittocontents("height");
                p.sta00_01_00_00_00_00.set_wordWrap("char");

                p.sta00_01_00.set_fittocontents("height");
                p.sta00_01_00.set_wordWrap("char");

                p.sta00.set_fittocontents("height");
                p.sta00.set_wordWrap("char");
            	}
            );
            this.divContents.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",620,540,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("마케팅,개인정보 수집 및 이용 동의서");
                p.set_cssclass("frm_POP_BgBox");
                p.getSetter("uResetScroll").set("true");
                p.getSetter("nPortrait").set("640");

                p.btnClose.set_taborder("1");
                p.btnClose.set_cssclass("btn_POP_Close");
                p.btnClose.move(null,"22","40","40","22",null);

                p.staTitle.set_taborder("0");
                p.staTitle.set_text("개인정보 수집 · 이용 동의서");
                p.staTitle.set_cssclass("sta_POP_Title");
                p.staTitle.move("30","30",null,"24","80",null);

                p.staTextTitle.set_taborder("2");
                p.staTextTitle.set_text("TOBESOFT Pro(TOBESOFT 주식회사)의 개인정보 수집 이용 목적은 다음과 같습니다.\r\n내용을 자세히 읽어 보신 후 동의 여부를 결정하여 주시기 바랍니다.");
                p.staTextTitle.set_cssclass("sta_POP_Text");
                p.staTextTitle.set_wordWrap("char");
                p.staTextTitle.set_fittocontents("height");
                p.staTextTitle.move("30","staTitle:24",null,"50","30",null);

                p.divContents.set_taborder("4");
                p.divContents.set_text("div00");
                p.divContents.move("30","staTextTitle:16",null,"216","30",null);

                p.staInfoText.set_taborder("3");
                p.staInfoText.set_text("· 귀하는 위와 같은 개인정보 수집 · 이용에 동의하지 않으실 수 있습니다.\r\n· 필수 수집 항목에 대한 동의를 거부할 경우 서비스 이용이 제한될 수 있습니다.");
                p.staInfoText.set_cssclass("sta_POP_Text");
                p.staInfoText.set_fittocontents("height");
                p.staInfoText.move("30","divContents:16",null,"50","30",null);

                p.btnOk.set_taborder("5");
                p.btnOk.set_text("확인");
                p.btnOk.set_cssclass("btn_POP_Confirm");
                p.btnOk.move("0","staInfoText:50",null,"65","0",null);
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Mobile_screen",370,640,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_scrolltype("both");
                p.set_dragscrolltype("both");
                p.getSetter("nLandscape").set("320");

                p.staTextTitle.set_wordWrap("char");
                p.staTextTitle.set_fittocontents("height");
                p.staTextTitle.move("5%","staTitle:24",null,"96","5%",null);

                p.staInfoText.set_wordWrap("char");
                p.staInfoText.set_text("· 귀하는 위와 같은 개인정보 수집 · 이용에 동의하지 않으실 수 있습니다.\r\n· 필수 수집 항목에 대한 동의를 거부할 경우 서비스 이용이 제한될 수 있습니다.");
                p.staInfoText.set_fittocontents("height");
                p.staInfoText.move("5%","divContents:16",null,"96","5%",null);

                p.staTitle.set_wordWrap("char");
                p.staTitle.set_fittocontents("height");
                p.staTitle.move("5%","30",null,"24","btnClose:10",null);

                p.divContents.set_fittocontents("height");
                p.divContents.move("5%","staTextTitle:16",null,"236","5%",null);

                p.btnOk.set_text("확인");
                p.btnOk.move("0","staInfoText:50",null,"65","0",null);
            	}
            );
            obj.set_mobileorientation("portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("prstInfoPopup.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	prstPrivacyPopup.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/11/23
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/11/23			TOBESOFT					최초생성
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
        	this.fnResize();

        	if(this.getOwnerFrame().popupId == "prstMrktnPopup")
        	{
        		this.staTitle.set_text(this.dsText.getColumn(0, "TITLE"));
        		this.divContents.form.staClcText.set_text(this.dsText.getColumn(0, "CLCTEXT"));
        		this.staInfoText.set_text(this.dsText.getColumn(0, "INFOTEXT"));
        	}
        	this.resetScroll();
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
        this.fnResize = function()
        {
        	if(this.gfnIsRealMobile() == "0") return;

        	var pThis = this;

        	var sScreenHeight = window.screen.height;
        		var sDirection = system.mobileorientation;

        		if(sDirection == 3) // 가로
        		{
        			var curX = window.screenLeft;
        			var curY = window.screenTop;
        			var nTop = 0;
        			if(this.objApp.mainframe.height > this.height)
        				nTop  = curY + (pThis.objApp.mainframe.height / 2) - Math.round(pThis.height / 2);
        			else  nTop  = curY + (pThis.objApp.mainframe.height / 2) - Math.round(pThis.nLandscape / 2);

        			pThis.parent.set_top(nTop);
        			pThis.setOffsetHeight (pThis.nLandscape);
        			pThis.parent.setOffsetHeight(pThis.nLandscape);
        			pThis.parent.form.resetScroll();
        		}
        		else
        		{
        			pThis.setOffsetHeight (pThis.nPortrait);
        			pThis.parent.setOffsetHeight(pThis.nPortrait);
        			pThis.parent.form.resetScroll();
        		}


        // 	 nexacro._OnceCallbackTimer.callonce(pThis, function () {
        // 		var sScreenHeight = window.screen.height;
        // 		var sDirection = system.mobileorientation;
        //
        // 		if(sDirection == 3) // 가로
        // 		{
        // 			var curX = window.screenLeft;
        // 			var curY = window.screenTop;
        // 			var nTop = 0;
        // 			if(this.objApp.mainframe.height > this.height)
        // 				nTop  = curY + (pThis.objApp.mainframe.height / 2) - Math.round(pThis.height / 2);
        // 			else  nTop  = curY + (pThis.objApp.mainframe.height / 2) - Math.round(pThis.nLandscape / 2);
        //
        // 			pThis.parent.set_top(nTop);
        // 			pThis.setOffsetHeight (pThis.nLandscape);
        // 			pThis.parent.setOffsetHeight(pThis.nLandscape);
        // 			pThis.parent.form.resetScroll();
        // 		}
        // 		else
        // 		{
        // 			pThis.setOffsetHeight (pThis.nPortrait);
        // 			pThis.parent.setOffsetHeight(pThis.nPortrait);
        // 			pThis.parent.form.resetScroll();
        // 		}
        // 	}, 100);
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 확인버튼
        this.btnOk_onclick = function(obj,e)
        {
        	this.gfnClosePopup();
        };

        // 닫기버튼
        this.btnClose_onclick = function(obj,e)
        {
        	this.gfnClosePopup();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.staTitle.addEventHandler("onclick",this.sta00_00_onclick,this);
            this.divContents.form.staClcText.addEventHandler("onclick",this.div00_sta00_01_onclick,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
        };
        this.loadIncludeScript("prstInfoPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
