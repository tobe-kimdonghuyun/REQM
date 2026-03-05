(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("prstAppinCmplt");
            this.set_titletext("신청완료");
            this.getSetter("uResetScroll").set("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,840);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsText", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"INFO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TITLE\">체험을 신청해 주셔서 감사합니다.&#10;지금 바로 체험해보세요.</Col><Col id=\"INFO\">버튼을 누르면 UXPro 체험 링크로 연결됩니다.</Col></Row><Row><Col id=\"TITLE\">문의 주셔서 감사합니다.</Col><Col id=\"INFO\">문의하기가 정상적으로 등록되었습니다.&#10;빠른 시일 내에 연락드리도록 하겠습니다.</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divWorkContents","0","0",null,"840","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleCmlt","0","307","600","50",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_text("체험을 신청해 주셔서 감사합니다.");
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_TitleL");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_wordWrap("char");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Button("btnOk","39.53%","679","300","52",null,null,null,"300",null,null,this.divWorkContents.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.getSetter("uLinkUrl").set("https://xd.adobe.com/view/6be6fe79-bd0a-4d88-afc2-60ec6526ff39-3eb5/?fullscreen");
            obj.set_flexgrow("1");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("staTitleCmlt00","10","317","600","56",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_text("체험 신청이 정상적으로 완료되었습니다.\n빠른 시일 내에 연락드리도록 하겠습니다.");
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_BodyMC");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_wordWrap("char");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","307","600","126",null,null,null,"600",null,null,this.divWorkContents.form);
            obj.set_taborder("3");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_verticalgap("20");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitleCmlt\"/><PanelItem id=\"PanelItem01\" componentid=\"staTitleCmlt00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","307","100%","224",null,null,null,"600",null,null,this.divWorkContents.form);
            obj.set_taborder("4");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_verticalgap("46");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"btnOk\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin02_01","0","0","5%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("5");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Static("StaMargin02_01_00","10","10","5%","60",null,null,null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("6");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","0",null,null,"0","0",null,null,null,null,this.divWorkContents.form);
            obj.set_taborder("7");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaMargin02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem02\" componentid=\"StaMargin02_01_00\"/></Contents>");
            this.divWorkContents.addChild(obj.name, obj);

            obj = new Div("divWorkContentsM","0","0",null,"840","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleCmlt","0","307","600","50",null,null,null,null,null,null,this.divWorkContentsM.form);
            obj.set_text("체험을 신청해 주셔서 감사합니다.");
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_TitleL");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_wordWrap("char");
            this.divWorkContentsM.addChild(obj.name, obj);

            obj = new Button("btnOk","39.53%","679","300","52",null,null,null,"300",null,null,this.divWorkContentsM.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.getSetter("uLinkUrl").set("https://xd.adobe.com/view/6be6fe79-bd0a-4d88-afc2-60ec6526ff39-3eb5/?fullscreen");
            obj.set_flexgrow("1");
            this.divWorkContentsM.addChild(obj.name, obj);

            obj = new Static("staTitleCmlt00","10","317","600","56",null,null,null,null,null,null,this.divWorkContentsM.form);
            obj.set_text("체험 신청이 정상적으로 완료되었습니다.\n빠른 시일 내에 연락드리도록 하겠습니다.");
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_BodyMC");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_wordWrap("char");
            this.divWorkContentsM.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","307","600","126",null,null,null,"600",null,null,this.divWorkContentsM.form);
            obj.set_taborder("3");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_verticalgap("20");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitleCmlt\"/><PanelItem id=\"PanelItem01\" componentid=\"staTitleCmlt00\"/></Contents>");
            this.divWorkContentsM.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","0",null,null,"0","0",null,null,null,null,this.divWorkContentsM.form);
            obj.set_taborder("8");
            obj.set_text("ImageViewer00");
            obj.set_image("url(\'theme::TobesoftPro/images/img_WF_AppinExprnM.png\')");
            obj.set_stretch("none");
            this.divWorkContentsM.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","307","100%","224",null,null,null,"600",null,null,this.divWorkContentsM.form);
            obj.set_taborder("4");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            obj.set_verticalgap("46");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"btnOk\"/></Contents>");
            this.divWorkContentsM.addChild(obj.name, obj);

            obj = new Static("StaMargin02_01","0","0","5%","60",null,null,null,null,null,null,this.divWorkContentsM.form);
            obj.set_taborder("5");
            this.divWorkContentsM.addChild(obj.name, obj);

            obj = new Static("StaMargin02_01_00","10","10","5%","60",null,null,null,null,null,null,this.divWorkContentsM.form);
            obj.set_taborder("6");
            this.divWorkContentsM.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","0",null,null,"0","0",null,null,null,null,this.divWorkContentsM.form);
            obj.set_taborder("7");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaMargin02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem02\" componentid=\"StaMargin02_01_00\"/></Contents>");
            this.divWorkContentsM.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWorkContents.form
            obj = new Layout("default","",0,0,this.divWorkContents.form,function(p){});
            this.divWorkContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWorkContentsM.form
            obj = new Layout("default","",0,0,this.divWorkContentsM.form,function(p){});
            this.divWorkContentsM.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,840,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("prstAppinCmplt.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	prstExprnCmplt.xfdl
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
        this.fvMenuGubun = "";
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.fvMenuGubun = this.gfnGetArgument("menuType");
        	this.fnCompGubun();
        	this.gfnFormOnLoad(this);
        	this.fnSetImage();
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
        //링크처리 URL..
        this.fnSetLinkUrl = function (sUrl)
        {
        	if(system.navigatorname == "nexacro"){
        		system.execBrowser(sUrl);
        	}else{
        		var newwin = window.open('about:blank');
        		newwin.location.href = sUrl;
        	}
        };

        // 신청 완료 시 화면 구분
        this.fnCompGubun = function ()
        {
        	var objParent = this.parent.parent.parent.parent;
        	var objSta = this.divWorkContents.form.staTitleCmlt; //  타이틀
        	var objStaInfo = this.divWorkContents.form.staTitleCmlt00; // 내용
        	var objBtn = this.divWorkContents.form.btnOk;	// 버튼


        	if(this.gfnIsNull(this.fvMenuGubun)) this.fvMenuGubun = "expCmltUXP";
        	if(this.fvMenuGubun == "expCmltUXP")
        	{
        		objSta.set_top("imgAppinType:15px");
        		objStaInfo.set_top("staTitleCmlt:15px");
        		objBtn.set_top("staInfo:15px");

        		this.divWorkContents.form.resetScroll();
        		objSta.set_text(this.dsText.getColumn(0, "TITLE"));
        		objStaInfo.set_text(this.dsText.getColumn(0, "INFO"));
        		objBtn.set_text("체험 시작하기");
        		this.divWorkContents.form.resetScroll();
        		this.divWorkContentsM.form.resetScroll();
        	}
        	else if(this.fvMenuGubun.indexOf("inqCmlt") > -1)
        	{
        		objSta.set_text(this.dsText.getColumn(1, "TITLE"));
        		objStaInfo.set_text(this.dsText.getColumn(1, "INFO"));

        		// 모바일
        		this.divWorkContentsM.form.staTitleCmlt.set_text(this.dsText.getColumn(1, "TITLE"));
        		this.divWorkContentsM.form.staTitleCmlt00.set_text(this.dsText.getColumn(1, "INFO"));

        		this.divWorkContents.form.resetScroll();
        		this.divWorkContentsM.form.resetScroll();
        	}
        	pThis = this;
        	 nexacro._OnceCallbackTimer.callonce(pThis, function () {
        		pThis.gfnFormResetScroll(this);
        	 }, 100);
        };

        // 메인 배경 이미지 세팅
        this.fnSetImage = function()
        {
        	var sUrlPrefix = nexacro._project_url + "_resource_/_theme_/";
        	var objM = this.divWorkContentsM;
        	var objP = this.divWorkContents;

        	var sStyle = objM._control_element.handle.style;

        	sStyle.backgroundImage ="url('"+sUrlPrefix+"TobesoftPro/images/img_WF_AppinM.png')";
        	sStyle.backgroundSize = "cover";
        	sStyle.backgroundPosition = "center";

        	sStyle = objP._control_element.handle.style;

        	sStyle.backgroundImage ="url('"+sUrlPrefix+"TobesoftPro/images/img_WF_Appin.png')";
        	sStyle.backgroundSize = "cover";
        	sStyle.backgroundPosition = "center";

        	this.fnResize();
        };

        // 배경 Resize
        this.fnResize = function(nX)
        {
        	if(this.gfnIsNull(nX)) nX = this.divWorkContents.getOffsetWidth();

        	var objM = this.divWorkContentsM;
        	var objP = this.divWorkContents;
        	var nFooterSize =  this.objApp.gvBase.form.divWork.form.divFooter.height;
        	if(nX < this.objApp.gvMobileSize) {
        		this.divWorkContentsM.setOffsetHeight(window.innerHeight-nFooterSize);
        		objM.set_visible(true);
        		objP.set_visible(false);
        	} else {
        		this.divWorkContents.setOffsetHeight(window.innerHeight-nFooterSize);
        		objM.set_visible(false);
        		objP.set_visible(true);
        	}
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 확인버튼
        this.divExprn_btnOk_onclick = function(obj,e)
        {
        	if(this.fvMenuGubun == "expCmltUXP")
        	{
        		var sUrl = "";

        		// 모바일 화면
        		if(this.gfnIsRealMobile() == 1)
        		{
        			 sUrl = "https://xd.adobe.com/view/cf599480-093a-48c9-a86c-b5b4b5b2633a-9a0a/?fullScreen";

        		}
        		else
        		{
        			sUrl = obj.uLinkUrl;
        		}

        		if( this.gfnIsNull(sUrl)){
        			return;
        		}

        		this.fnSetLinkUrl(sUrl);
        	}
        	else
        	{
        		//History
        		this.objApp.gvBase.form.fnFormOpen();
        	}
        };

        this.divWorkContents_onsize = function(obj,e)
        {
        	var nX = obj.getOffsetWidth();
        	this.fnResize(nX);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divWorkContents.addEventHandler("onsize",this.divWorkContents_onsize,this);
            this.divWorkContents.form.btnOk.addEventHandler("onclick",this.divExprn_btnOk_onclick,this);
            this.divWorkContentsM.addEventHandler("onsize",this.divWorkContents_onsize,this);
            this.divWorkContentsM.form.btnOk.addEventHandler("onclick",this.divExprn_btnOk_onclick,this);
        };
        this.loadIncludeScript("prstAppinCmplt.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
