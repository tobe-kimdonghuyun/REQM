(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM100P01");
            this.set_titletext("회사 선택 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">10</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"rno\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"crtSysSe\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"coExpln\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rprsTelno\" type=\"STRING\" size=\"256\"/><Column id=\"coAddr\" type=\"STRING\" size=\"256\"/><Column id=\"coDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"picNm\" type=\"STRING\" size=\"256\"/><Column id=\"custTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"custAtrb\" type=\"STRING\" size=\"256\"/><Column id=\"custAtrbNm\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustNm\" type=\"STRING\" size=\"256\"/><Column id=\"custType\" type=\"STRING\" size=\"256\"/><Column id=\"tkcgDept\" type=\"STRING\" size=\"256\"/><Column id=\"rmnmNo\" type=\"STRING\" size=\"256\"/><Column id=\"clmDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmAaddr\" type=\"STRING\" size=\"256\"/><Column id=\"emlEbpp\" type=\"STRING\" size=\"256\"/><Column id=\"fxno\" type=\"STRING\" size=\"256\"/><Column id=\"vldtyEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzstat\" type=\"STRING\" size=\"256\"/><Column id=\"tpbiz\" type=\"STRING\" size=\"256\"/><Column id=\"rprsCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"area\" type=\"STRING\" size=\"256\"/><Column id=\"rprsCustNm\" type=\"STRING\" size=\"256\"/><Column id=\"zip\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvRrno\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"crno\" type=\"STRING\" size=\"256\"/><Column id=\"vldtyBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"emlTxiv\" type=\"STRING\" size=\"256\"/><Column id=\"rentCtrtYn\" type=\"STRING\" size=\"256\"/><Column id=\"corpYn\" type=\"STRING\" size=\"256\"/><Column id=\"ftzYn\" type=\"STRING\" size=\"256\"/><Column id=\"mvmnRgnYn\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoYn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"flwMdngEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"rfctTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"rfctTrgtCtrtEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"rfctTrgtCtrtEndYmdHwrt\" type=\"STRING\" size=\"256\"/><Column id=\"taxfrTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"taxfrTrgtCtrtEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"taxfrTrgtCtrtEndYmdHwrt\" type=\"STRING\" size=\"256\"/><Column id=\"clsbizYmd\" type=\"STRING\" size=\"256\"/><Column id=\"coSrc\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("default default");
            obj.set_formscrolltype("both");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100%","83",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            obj.set_cssclass("div_WF_SchBg");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_SchLabel_E");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","841","24","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색어 입력");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","55",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panSchBtn\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03","1694.00","398","300","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Edit01_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","1694.00","398","300","45",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Edit01_00_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","86","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00","841","24","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색어 입력");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30","100%","400",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0","100.00%","318",null,null,null,null,"285",null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"업체ID\"/><Cell col=\"1\" text=\"업체명\"/><Cell col=\"2\" text=\"사업자등록번호\"/><Cell col=\"3\" text=\"주소\"/><Cell col=\"4\" text=\"전화번호\"/><Cell col=\"5\" text=\"계약종료일\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:coId\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:coNm\"/><Cell col=\"2\" text=\"bind:brno\" textAlign=\"center\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"##-{###}-####\"/><Cell col=\"3\" text=\"bind:coAddr\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:rprsTelno\" textAlign=\"center\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"expr:rprsTelno.substr(0, 2) == &apos;02&apos; ? &apos;##-{####}-####&apos; : &apos;###-{###}-####&apos;\"/><Cell col=\"5\" text=\"bind:ctrtEndYmd\" cssclass=\"CellEnd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPage","0","Grid00:10","100%","36",null,null,null,null,"36",null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","68","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01_00.set_taborder("4");
                p.staLabel01_00.set_text("업체명");
                p.staLabel01_00.set_cssclass("sta_WF_SchLabel_E");
                p.staLabel01_00.set_flexshrink("0");
                p.staLabel01_00.set_maxwidth("");
                p.staLabel01_00.move("0","0","100","40",null,null);

                p.Edit01_00.set_taborder("5");
                p.Edit01_00.set_flexgrow("1");
                p.Edit01_00.set_displaynulltext("검색어 입력");
                p.Edit01_00.move("841","24","100%","40",null,null);

                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","55",null,null);

                p.Panel03.set_taborder("1");
                p.Panel03.set_type("horizontal");
                p.Panel03.set_horizontalgap("10");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_minwidth("");
                p.Panel03.move("1694.00","398","300","45",null,null);

                p.Panel03_00.set_taborder("8");
                p.Panel03_00.set_type("horizontal");
                p.Panel03_00.set_horizontalgap("10");
                p.Panel03_00.set_fittocontents("height");
                p.Panel03_00.set_flexgrow("1");
                p.Panel03_00.set_minwidth("");
                p.Panel03_00.move("1694.00","398","300","45",null,null);

                p.panSchBtn.set_taborder("2");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100","40",null,null);

                p.btnSch.set_taborder("3");
                p.btnSch.set_text("검색");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","86","40",null,null);

                p.staLabel01_00_00.set_taborder("6");
                p.staLabel01_00_00.set_text("사업자등록번호");
                p.staLabel01_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel01_00_00.set_flexshrink("0");
                p.staLabel01_00_00.set_maxwidth("");
                p.staLabel01_00_00.move("0","0","100","40",null,null);

                p.Edit01_00_00.set_taborder("7");
                p.Edit01_00_00.set_flexgrow("1");
                p.Edit01_00_00.set_displaynulltext("검색어 입력");
                p.Edit01_00_00.move("841","24","100%","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd.form.divPage.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form.divPage.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divGrd.form.divPage.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form.divPage.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd.form.divPage.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divGrd.form.divPage.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_taborder("0");
                p.Grid00.set_binddataset("dsList");
                p.Grid00.set_autofittype("none");
                p.Grid00.set_minheight("285");
                p.Grid00.set_maxheight("");
                p.Grid00.move("0","0","100.00%","318",null,null);

                p.divPage.set_taborder("1");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","Grid00:10","100%","36",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.set_taborder("0");
                p.divSch.set_text("Div00");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.move("0","0","100%","83",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.set_flexgrow("1");
                p.divGrd.move("0","divSch:30","100%","400",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_spacing("20px 20px 10px 20px");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_spacing("20px 20px 10px 20px");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_00.set_taborder("1");
                p.Button00_00.set_text("확인");
                p.Button00_00.set_cssclass("btn_WF_Yes");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("457.00","30","68","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            obj.set_spacing("0px 20px");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            obj.set_spacing("0px 20px");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("Layout0","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            obj.set_spacing("0px 20px");
            this.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1000,550,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("회사 선택 팝업");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("default default");
                p.divForm.set_formscrolltype("both");
                p.divForm.set_fittocontents("none");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0",null,null,"0","60");

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0",null,null,"60","0","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,550,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divSch.form.Edit01_00","value","dsSearch","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divSch.form.Edit01_00_00","value","dsSearch","brno");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::COM/util/paging/paging.xfdl");
        };
        
        // User Script
        this.registerScript("COM100P01.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	COM100P01.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/09/27
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/27				김완성						최초생성
        * 2024/12/24				조규완						페이지네이션 생성
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
        	this.fnInit();
        	this.cfnSearch(1);
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function (page)
        {
        	this.dsSearch.setColumn(0, "currentPageNo", page);
        	this.getSearchTransaction();
        };

        //닫기
        this.cfnClose = function() {
        	console.log('cfnClose');
        }
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function() {

        	var strSvcId    = "search";
        	var strSvcUrl   = "crtr/coListInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList dsPage=dsPage";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
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
        			this.divForm.form.divGrd.form.divPage.form.initPages(this.dsPage.getColumn(0, "currentPageNo"), this.dsPage.getColumn(0, "totalRecordCount"), this.dsPage.getColumn(0, "recordCountPerPage"), this.dsPage.getColumn(0, "pageSize"), "cfnSearch");
        			break;
        		case "excel":
        			//다운로드
        			console.log(errorMsg);	// 다운로드 가능한 파일 URL
        			break;
        	}
        };

        this.msgCallback = function(sPopupId, sRtn) {
        	if(sPopupId == "del_confirm") {
        		if(sRtn == "Y") {
        			//TODO..
        		}
        	} else if(sPopupId == "msg") {
        		//TODO..
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function() {

        };

        this.fnSendData = function()
        {
        	var objRet = {
        		coId : this.dsList.getColumn(this.dsList.rowposition, "coId")
        		, crtSysSe : this.dsList.getColumn(this.dsList.rowposition, "crtSysSe")
        		, coNm : this.dsList.getColumn(this.dsList.rowposition, "coNm")
        		, coExpln : this.dsList.getColumn(this.dsList.rowposition, "coExpln")
        		, useYn : this.dsList.getColumn(this.dsList.rowposition, "useYn")
        		, rprsTelno : this.dsList.getColumn(this.dsList.rowposition, "rprsTelno")
        		, coAddr : this.dsList.getColumn(this.dsList.rowposition, "coAddr")
        		, coDtlAddr : this.dsList.getColumn(this.dsList.rowposition, "coDtlAddr")
        		, mblTelno : this.dsList.getColumn(this.dsList.rowposition, "mblTelno")
        		, picNm : this.dsList.getColumn(this.dsList.rowposition, "picNm")
        		, custTypeNm : this.dsList.getColumn(this.dsList.rowposition, "custTypeNm")
        		, custAtrb : this.dsList.getColumn(this.dsList.rowposition, "custAtrb")
        		, custAtrbNm : this.dsList.getColumn(this.dsList.rowposition, "custAtrbNm")
        		, clmCustCd : this.dsList.getColumn(this.dsList.rowposition, "clmCustCd")
        		, clmCustNm : this.dsList.getColumn(this.dsList.rowposition, "clmCustNm")
        		, custType : this.dsList.getColumn(this.dsList.rowposition, "custType")
        		, tkcgDept : this.dsList.getColumn(this.dsList.rowposition, "tkcgDept")
        		, rmnmNo : this.dsList.getColumn(this.dsList.rowposition, "rmnmNo")
        		, clmAaddr : this.dsList.getColumn(this.dsList.rowposition, "clmAaddr")
        		, clmDtlAaddr : this.dsList.getColumn(this.dsList.rowposition, "clmDtlAaddr")
        		, emlEbpp : this.dsList.getColumn(this.dsList.rowposition, "emlEbpp")
        		, fxno : this.dsList.getColumn(this.dsList.rowposition, "fxno")
        		, vldtyEndYmd : this.dsList.getColumn(this.dsList.rowposition, "vldtyEndYmd")
        		, rprsvNm : this.dsList.getColumn(this.dsList.rowposition, "rprsvNm")
        		, bzstat : this.dsList.getColumn(this.dsList.rowposition, "bzstat")
        		, tpbiz : this.dsList.getColumn(this.dsList.rowposition, "tpbiz")
        		, rprsCustCd : this.dsList.getColumn(this.dsList.rowposition, "rprsCustCd")
        		, area : this.dsList.getColumn(this.dsList.rowposition, "area")
        		, rprsCustNm : this.dsList.getColumn(this.dsList.rowposition, "rprsCustNm")
        		, zip : this.dsList.getColumn(this.dsList.rowposition, "zip")
        		, ctrtNo : this.dsList.getColumn(this.dsList.rowposition, "ctrtNo")
        		, rprsvRrno : this.dsList.getColumn(this.dsList.rowposition, "rprsvRrno")
        		, brno : this.dsList.getColumn(this.dsList.rowposition, "brno")
        		, crno : this.dsList.getColumn(this.dsList.rowposition, "crno")
        		, vldtyBgngYmd : this.dsList.getColumn(this.dsList.rowposition, "vldtyBgngYmd")
        		, emlTxiv : this.dsList.getColumn(this.dsList.rowposition, "emlTxiv")
        		, rentCtrtYn : this.dsList.getColumn(this.dsList.rowposition, "rentCtrtYn")
        		, corpYn : this.dsList.getColumn(this.dsList.rowposition, "corpYn")
        		, ftzYn : this.dsList.getColumn(this.dsList.rowposition, "ftzYn")
        		, mvmnRgnYn : this.dsList.getColumn(this.dsList.rowposition, "mvmnRgnYn")
        		, cpatcoYn : this.dsList.getColumn(this.dsList.rowposition, "cpatcoYn")
        		, ctrtEndYmd : this.dsList.getColumn(this.dsList.rowposition, "ctrtEndYmd")
        		, flwMdngEndYmd : this.dsList.getColumn(this.dsList.rowposition, "flwMdngEndYmd")
        		, ctrtTrgtYn : this.dsList.getColumn(this.dsList.rowposition, "ctrtTrgtYn")
        		, rfctTrgtYn : this.dsList.getColumn(this.dsList.rowposition, "rfctTrgtYn")
        		, rfctTrgtCtrtEndYmd : this.dsList.getColumn(this.dsList.rowposition, "rfctTrgtCtrtEndYmd")
        		, rfctTrgtCtrtEndYmdHwrt : this.dsList.getColumn(this.dsList.rowposition, "rfctTrgtCtrtEndYmdHwrt")
        		, taxfrTrgtYn : this.dsList.getColumn(this.dsList.rowposition, "taxfrTrgtYn")
        		, taxfrTrgtCtrtEndYmd : this.dsList.getColumn(this.dsList.rowposition, "taxfrTrgtCtrtEndYmd")
        		, taxfrTrgtCtrtEndYmdHwrt : this.dsList.getColumn(this.dsList.rowposition, "taxfrTrgtCtrtEndYmdHwrt")
        		, clsbizYmd : this.dsList.getColumn(this.dsList.rowposition, "clsbizYmd")
        		, coSrc : this.dsList.getColumn(this.dsList.rowposition, "coSrc")
        	}

        	this.close(JSON.stringify(objRet));
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divGrd_Grid00_oncelldblclick = function(obj,e)
        {
        	this.fnSendData();
        };

        this.divForm_divPopBtn_Button00_00_onclick = function(obj,e)
        {
        	this.fnSendData();
        };

        this.divForm_divSch_onkeyup = function(obj,e)
        {
        	if (e.keycode==13) {
        		this.cfnSearch(1);
        	}
        };

        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.addEventHandler("onkeyup",this.divForm_divSch_onkeyup,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.divForm_divSch_btnSch_onclick,this);
            this.divForm.form.divGrd.form.Grid00.addEventHandler("oncelldblclick",this.divForm_divGrd_Grid00_oncelldblclick,this);
            this.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divForm_divPopBtn_Button00_00_onclick,this);
        };
        this.loadIncludeScript("COM100P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
