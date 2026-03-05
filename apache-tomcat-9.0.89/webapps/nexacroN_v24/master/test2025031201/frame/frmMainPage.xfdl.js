(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmMainPage");
            this.set_titletext("메인");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">넥사크로 모바일 가이드</Col><Col id=\"Column1\">일팀원｜2023.10.23(월) 09:00 ~ 2023.10.23(월) 18:00</Col></Row><Row><Col id=\"Column0\">넥사크로 퍼블리싱</Col><Col id=\"Column1\">이팀원｜2023.10.23(월) 09:00 ~ 2023.10.23(월) 16:00</Col></Row><Row><Col id=\"Column0\">UI·UX 디자인</Col><Col id=\"Column1\">삼팀원｜2023.10.23(월) 09:00 ~ 2023.10.23(월) 16:00</Col></Row><Row><Col id=\"Column0\">공통 개발 가이드</Col><Col id=\"Column1\">사팀원｜2023.10.23(월) 09:00 ~ 2023.10.23(월) 16:00</Col></Row><Row><Col id=\"Column0\">넥사크로 개발</Col><Col id=\"Column1\">오팀원｜2023.10.23(월) 09:00 ~ 2023.10.23(월) 16:00</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div01");
            obj.set_cssclass("div_WF_Main");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00","48.96%","467","10","29",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","30","545",null,null,"30","0",null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("grd_WF_SearchBoard");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"405\"/></Columns><Rows><Row size=\"40\"/><Row size=\"50\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_Chip01\"/><Cell col=\"1\" text=\"bind:Column0\"/><Cell row=\"1\" colspan=\"2\" cssclass=\"cell_WF_Line\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01","0","0",null,"380","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_MainBg");
            this.div00.addChild(obj.name, obj);

            obj = new Div("divNoti","30","330",null,"92","30",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_NoticeBg");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staNoti","20","45",null,"30","20",null,null,null,null,null,this.div00.form.divNoti.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_NoticeTit");
            obj.set_font("normal 16px/normal \"-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,Apple SD Gothic Neo,sans-serif\"");
            obj.set_wordWrap("none");
            obj.set_text("[10/23] 넥사크로 2023년 10월 정기버전 안내");
            this.div00.form.divNoti.addChild(obj.name, obj);

            obj = new Static("sta00","20","15","120","20",null,null,null,null,null,null,this.div00.form.divNoti.form);
            obj.set_taborder("1");
            obj.set_text("공지사항");
            obj.set_cssclass("sta_WF_Notice");
            this.div00.form.divNoti.addChild(obj.name, obj);

            obj = new Button("btnGoTobesoft","30","250","26.88%","50",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("투비소프트");
            obj.set_cssclass("btn_WF_Link01");
            obj.getSetter("uLinkUrl").set("https://www.tobesoft.com/");
            obj.getSetter("uLinkType").set("url");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnGoSupport",null,"250","23.96%","50","30",null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("기술지원");
            obj.set_cssclass("btn_WF_Link03");
            obj.getSetter("uLinkUrl").set("http://support.tobesoft.co.kr/Support/index.html");
            obj.getSetter("uLinkType").set("url");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnGoPlayNexacro","btnGoTobesoft:8","250",null,"50","btnGoSupport:8",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("플레이넥사크로");
            obj.set_cssclass("btn_WF_Link02");
            obj.getSetter("uLinkUrl").set("https://www.playnexacro.com/#");
            obj.getSetter("uLinkType").set("url");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","30","542",null,"2","30",null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Boundary");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta02","30","90","235","90",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Main");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div01","sta02_00:-215.007","442",null,"80","30",null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("div01");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div00","0","0","50","80",null,null,null,null,null,null,this.div00.form.div01.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_DayS");
            this.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("sta00","0","10",null,"30","0",null,null,null,null,null,this.div00.form.div01.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("월");
            obj.set_cssclass("sta_WF_DOWS");
            this.div00.form.div01.form.div00.addChild(obj.name, obj);

            obj = new Static("sta01","0","sta00:0",null,"30","0",null,null,null,null,null,this.div00.form.div01.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("23");
            obj.set_cssclass("sta_WF_DayS");
            this.div00.form.div01.form.div00.addChild(obj.name, obj);

            obj = new Div("div01","div00:12","0","50","80",null,null,null,null,null,null,this.div00.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Day");
            this.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("sta00","0","10",null,"30","0",null,null,null,null,null,this.div00.form.div01.form.div01.form);
            obj.set_taborder("0");
            obj.set_text("화");
            obj.set_cssclass("sta_WF_DOW");
            this.div00.form.div01.form.div01.addChild(obj.name, obj);

            obj = new Static("sta01","0","40",null,"30","0",null,null,null,null,null,this.div00.form.div01.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("24");
            obj.set_cssclass("sta_WF_Day");
            this.div00.form.div01.form.div01.addChild(obj.name, obj);

            obj = new Div("div02","124","0","50","80",null,null,null,null,null,null,this.div00.form.div01.form);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Day");
            this.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("sta01","0","40",null,"30","0",null,null,null,null,null,this.div00.form.div01.form.div02.form);
            obj.set_taborder("0");
            obj.set_text("25");
            obj.set_cssclass("sta_WF_Day");
            this.div00.form.div01.form.div02.addChild(obj.name, obj);

            obj = new Static("sta00","0","10",null,"30","0",null,null,null,null,null,this.div00.form.div01.form.div02.form);
            obj.set_taborder("1");
            obj.set_text("수");
            obj.set_cssclass("sta_WF_DOW");
            this.div00.form.div01.form.div02.addChild(obj.name, obj);

            obj = new Div("div03","186","0","50","80",null,null,null,null,null,null,this.div00.form.div01.form);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Day");
            this.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("sta01","0","40",null,"30","0",null,null,null,null,null,this.div00.form.div01.form.div03.form);
            obj.set_taborder("0");
            obj.set_text("26");
            obj.set_cssclass("sta_WF_Day");
            this.div00.form.div01.form.div03.addChild(obj.name, obj);

            obj = new Static("sta00","0","10",null,"30","0",null,null,null,null,null,this.div00.form.div01.form.div03.form);
            obj.set_taborder("1");
            obj.set_text("목");
            obj.set_cssclass("sta_WF_DOW");
            this.div00.form.div01.form.div03.addChild(obj.name, obj);

            obj = new Div("div04","248","0","50","80",null,null,null,null,null,null,this.div00.form.div01.form);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Day");
            this.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("sta01","0","40",null,"30","0",null,null,null,null,null,this.div00.form.div01.form.div04.form);
            obj.set_taborder("0");
            obj.set_text("27");
            obj.set_cssclass("sta_WF_Day");
            this.div00.form.div01.form.div04.addChild(obj.name, obj);

            obj = new Static("sta00","0","10",null,"30","0",null,null,null,null,null,this.div00.form.div01.form.div04.form);
            obj.set_taborder("1");
            obj.set_text("금");
            obj.set_cssclass("sta_WF_DOW");
            this.div00.form.div01.form.div04.addChild(obj.name, obj);

            obj = new Div("div05","310","0","50","80",null,null,null,null,null,null,this.div00.form.div01.form);
            obj.set_taborder("5");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Day");
            this.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("sta01","0","40",null,"30","0",null,null,null,null,null,this.div00.form.div01.form.div05.form);
            obj.set_taborder("0");
            obj.set_text("28");
            obj.set_cssclass("sta_WF_Day");
            this.div00.form.div01.form.div05.addChild(obj.name, obj);

            obj = new Static("sta00","0","10",null,"30","0",null,null,null,null,null,this.div00.form.div01.form.div05.form);
            obj.set_taborder("1");
            obj.set_text("토");
            obj.set_cssclass("sta_WF_DOWSat");
            this.div00.form.div01.form.div05.addChild(obj.name, obj);

            obj = new Div("div06","372","0","50","80",null,null,null,null,null,null,this.div00.form.div01.form);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Day");
            this.div00.form.div01.addChild(obj.name, obj);

            obj = new Static("sta01","0","40",null,"30","0",null,null,null,null,null,this.div00.form.div01.form.div06.form);
            obj.set_taborder("0");
            obj.set_text("29");
            obj.set_cssclass("sta_WF_Day");
            this.div00.form.div01.form.div06.addChild(obj.name, obj);

            obj = new Static("sta00","0","10",null,"30","0",null,null,null,null,null,this.div00.form.div01.form.div06.form);
            obj.set_taborder("1");
            obj.set_text("일");
            obj.set_cssclass("sta_WF_DOWSun");
            this.div00.form.div01.form.div06.addChild(obj.name, obj);

            obj = new Button("btnMenu",null,"0","55","55","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_TF_Menu");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form.divNoti.form
            obj = new Layout("default","",0,0,this.div00.form.divNoti.form,function(p){});
            this.div00.form.divNoti.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div01.form.div00.form
            obj = new Layout("default","",0,0,this.div00.form.div01.form.div00.form,function(p){});
            this.div00.form.div01.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div01.form.div01.form
            obj = new Layout("default","",0,0,this.div00.form.div01.form.div01.form,function(p){});
            this.div00.form.div01.form.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div01.form.div02.form
            obj = new Layout("default","",0,0,this.div00.form.div01.form.div02.form,function(p){});
            this.div00.form.div01.form.div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div01.form.div03.form
            obj = new Layout("default","",0,0,this.div00.form.div01.form.div03.form,function(p){});
            this.div00.form.div01.form.div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div01.form.div04.form
            obj = new Layout("default","",0,0,this.div00.form.div01.form.div04.form,function(p){});
            this.div00.form.div01.form.div04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div01.form.div05.form
            obj = new Layout("default","",0,0,this.div00.form.div01.form.div05.form,function(p){});
            this.div00.form.div01.form.div05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div01.form.div06.form
            obj = new Layout("default","",0,0,this.div00.form.div01.form.div06.form,function(p){});
            this.div00.form.div01.form.div06.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form.div01.form
            obj = new Layout("default","",0,0,this.div00.form.div01.form,function(p){});
            this.div00.form.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","mobile",480,768,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmMainPage.xfdl", function() {
        /**
        *  Mobile 프로젝트
        *  @FileName 	frmMainPage.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
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

        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function()
        {

        };

        this.cfnAdd = function()
        {

        };
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
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.btnMenu_onclick = function(obj,e)
        {
        	this.objApp.gvBase.fnAction("MENU", true);
        };

        //Link 클릭
        this.btnLink_onclick = function(obj,e)
        {
        	var sUrl = obj.uLinkUrl;
        	var sLinkType = obj.uLinkType;

        	//링크타입별 처리
        	switch(sLinkType) {
        		case "url":
        			this.fnSetLinkUrl(sUrl);
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div00.form.divNoti.form.staNoti.addEventHandler("onclick",this.staNoti_onclick,this);
            this.div00.form.btnGoTobesoft.addEventHandler("onclick",this.btnLink_onclick,this);
            this.div00.form.btnGoSupport.addEventHandler("onclick",this.btnLink_onclick,this);
            this.div00.form.btnGoPlayNexacro.addEventHandler("onclick",this.btnLink_onclick,this);
            this.btnMenu.addEventHandler("onclick",this.btnMenu_onclick,this);
        };
        this.loadIncludeScript("frmMainPage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
