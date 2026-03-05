(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM024P263");
            this.set_titletext("작업그룹 상세정보 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobGroupId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"eml\" type=\"STRING\" size=\"256\"/><Column id=\"userMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"jobYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCoList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeptList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","35.00","55","262","45",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divGuide.addChild(obj.name, obj);

            obj = new Static("sta00","35.00","175","375","105",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("1");
            obj.set_text("선택했을때 class : btn_WF_Quick_S 적용");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("btn00_00","35.00","115","262","45",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("2");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divGuide.addChild(obj.name, obj);

            obj = new Div("divForm","0","10",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("auto autoindicator");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100.00%","170",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20.00","14","100%","58",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"pan01\"/><PanelItem id=\"PanelItem01\" componentid=\"pan01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan03_00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan03\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","150","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Edit00\"/><PanelItem id=\"PanelItem06\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem00\" componentid=\"cmbCoId\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","80","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan03","1694.00","398","150","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtUserNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","80","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","52","29",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","792.00","32","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("검색어 입력");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cmbCoId","788.00","145","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsCoList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","80","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cmbDeptId","788.00","145","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsDeptList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01_00","1694.00","398","150","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Edit00\"/><PanelItem id=\"PanelItem06\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem00\" componentid=\"cmbDeptId\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","0","0","80","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtUserId","792.00","32","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_displaynulltext("검색어 입력");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan03_00","1694.00","398","150","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtUserId\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","39","140","100%","370",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"40","550","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbGrdList\"/><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem06\" componentid=\"btnUserDel\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","PanelGrdBtn:10","100.00%",null,null,"0",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.getSetter("uFunction").set("checkbox");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"130\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"아이디\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"회사명\"/><Cell col=\"4\" text=\"부서명\"/><Cell col=\"5\" text=\"이메일\"/><Cell col=\"6\" text=\"휴대전화번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"expr:jobYn == &apos;Y&apos; ? &apos;none&apos; : &apos;checkbox&apos;\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:userId\" textAlign=\"center\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:userNm\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:coNm\"/><Cell col=\"4\" textAlign=\"center\" text=\"bind:deptNm\"/><Cell col=\"5\" text=\"bind:eml\"/><Cell col=\"6\" textAlign=\"center\" text=\"bind:userMblTelno\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnUserDel","496.00","0","44","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("연결");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","500","40",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("소속 사용자 목록");
            obj.set_cssclass("sta_WF_Txt50022");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbGrdList","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","40","27","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","40","43","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("1000");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","40","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0","550","100%","80",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnCancel","457.00","30","120","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_No");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnConfirm","457.00","30","120","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_taborder("0");
                p.btn00.set_text("기본정보");
                p.btn00.set_cssclass("btn_WF_Quick");
                p.btn00.move("35.00","55","262","45",null,null);

                p.sta00.set_taborder("1");
                p.sta00.set_text("선택했을때 class : btn_WF_Quick_S 적용");
                p.sta00.move("35.00","175","375","105",null,null);

                p.btn00_00.set_taborder("2");
                p.btn00_00.set_text("기본정보");
                p.btn00_00.set_cssclass("btn_WF_Quick_S");
                p.btn00_00.move("35.00","115","262","45",null,null);
            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide.form
            obj = new Layout("mobile","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panLabel.set_taborder("3");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("40");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20.00","14","100%","58",null,null);

                p.pan01.set_taborder("0");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_flexgrow("1");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","150","40",null,null);

                p.staLabel.set_taborder("8");
                p.staLabel.set_text("회사명");
                p.staLabel.set_cssclass("sta_WF_SchLabel");
                p.staLabel.set_flexshrink("0");
                p.staLabel.set_minwidth("");
                p.staLabel.move("0","0","80","40",null,null);

                p.pan03.set_taborder("2");
                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("10");
                p.pan03.set_flexgrow("1");
                p.pan03.set_minwidth("");
                p.pan03.move("1694.00","398","150","40",null,null);

                p.staLabel00.set_taborder("9");
                p.staLabel00.set_text("사용자명");
                p.staLabel00.set_cssclass("sta_WF_SchLabel");
                p.staLabel00.set_flexshrink("0");
                p.staLabel00.set_minwidth("");
                p.staLabel00.move("0","0","80","40",null,null);

                p.panClose.set_taborder("5");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("4");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","52","29",null,null);

                p.panSchBtn.set_taborder("6");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("7");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.edtUserNm.set_taborder("1");
                p.edtUserNm.set_displaynulltext("검색어 입력");
                p.edtUserNm.set_flexgrow("1");
                p.edtUserNm.move("792.00","32","100%","40",null,null);

                p.cmbCoId.set_taborder("10");
                p.cmbCoId.set_flexgrow("1");
                p.cmbCoId.set_innerdataset("dsCoList");
                p.cmbCoId.set_codecolumn("cdId");
                p.cmbCoId.set_datacolumn("cdNm");
                p.cmbCoId.set_text("전체");
                p.cmbCoId.set_value("");
                p.cmbCoId.set_index("-1");
                p.cmbCoId.move("788.00","145","100%","40",null,null);

                p.staLabel01.set_taborder("11");
                p.staLabel01.set_text("부서명");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_minwidth("");
                p.staLabel01.move("0","0","80","40",null,null);

                p.cmbDeptId.set_taborder("12");
                p.cmbDeptId.set_flexgrow("1");
                p.cmbDeptId.set_innerdataset("dsDeptList");
                p.cmbDeptId.set_codecolumn("cdId");
                p.cmbDeptId.set_datacolumn("cdNm");
                p.cmbDeptId.set_text("전체");
                p.cmbDeptId.set_value("");
                p.cmbDeptId.set_index("-1");
                p.cmbDeptId.move("788.00","145","100%","40",null,null);

                p.pan01_00.set_taborder("13");
                p.pan01_00.set_type("horizontal");
                p.pan01_00.set_horizontalgap("10");
                p.pan01_00.set_flexgrow("1");
                p.pan01_00.set_maxheight("");
                p.pan01_00.set_minwidth("");
                p.pan01_00.move("1694.00","398","150","40",null,null);

                p.staLabel00_00.set_taborder("14");
                p.staLabel00_00.set_text("아이디");
                p.staLabel00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel00_00.set_flexshrink("0");
                p.staLabel00_00.set_minwidth("");
                p.staLabel00_00.move("0","0","80","40",null,null);

                p.edtUserId.set_taborder("15");
                p.edtUserId.set_displaynulltext("검색어 입력");
                p.edtUserId.set_flexgrow("1");
                p.edtUserId.move("792.00","32","100%","40",null,null);

                p.pan03_00.set_taborder("16");
                p.pan03_00.set_type("horizontal");
                p.pan03_00.set_horizontalgap("10");
                p.pan03_00.set_flexgrow("1");
                p.pan03_00.set_minwidth("");
                p.pan03_00.move("1694.00","398","150","40",null,null);
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
                p.panClose.move("30","151","100%","30",null,null);

                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_verticalgap("8");
                p.panLabel.move("132","47","100%","288",null,null);

                p.pan00.set_type("horizontal");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_horizontalgap("8");
                p.pan00.move("1694.00","398","99.99963967469833%","80",null,null);

                p.pan03.set_horizontalgap("8");
                p.pan03.move("1694.00","398","100%","45",null,null);

                p.pan02.set_horizontalgap("8");
                p.pan02.move("1694.00","398","100%","40",null,null);

                p.pan01.set_type("horizontal");
                p.pan01.set_fittocontents("height");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_horizontalgap("8");
                p.pan01.move("1694.00","398","100%","80",null,null);

                p.cmbMnlMngSeMnl.move("626","98","65%","45",null,null);

                p.divCal.move(null,null,"100%",null,null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelGrdBtn.set_taborder("3");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"40","550","34","0",null);

                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("col");
                p.grdList.getSetter("uFunction").set("checkbox");
                p.grdList.move("0","PanelGrdBtn:10","100.00%",null,null,"0");

                p.btnUserDel.set_taborder("4");
                p.btnUserDel.set_text("연결");
                p.btnUserDel.set_cssclass("btn_WF_SmallBlack");
                p.btnUserDel.set_visible("false");
                p.btnUserDel.set_fittocontents("width");
                p.btnUserDel.move("496.00","0","44","34",null,null);

                p.Static00.set_taborder("5");
                p.Static00.set_text("소속 사용자 목록");
                p.Static00.set_cssclass("sta_WF_Txt50022");
                p.Static00.move("0","0","500","40",null,null);

                p.btnGrdDel.set_taborder("6");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("false");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("316.00","0","45","34",null,null);

                p.cmbGrdList.set_taborder("2");
                p.cmbGrdList.set_visible("false");
                p.cmbGrdList.set_text("10");
                p.cmbGrdList.set_value("");
                p.cmbGrdList.set_index("-1");
                p.cmbGrdList.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("1");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.set_visible("false");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.staTotal.set_taborder("9");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","40","27","34",null,null);

                p.staTotal01.set_taborder("7");
                p.staTotal01.set_text("1000");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.move("staTotal:0","40","43","34",null,null);

                p.staTotal02.set_taborder("8");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","40","30","34",null,null);
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
                p.grdList.set_autofittype("none");

                p.btnUserDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("default","",0,0,this.divForm.form.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnCancel.set_taborder("1");
                p.btnCancel.set_text("취소");
                p.btnCancel.set_cssclass("btn_WF_No");
                p.btnCancel.move("457.00","30","120","40",null,null);

                p.btnConfirm.set_taborder("1");
                p.btnConfirm.set_text("확인");
                p.btnConfirm.set_cssclass("btn_WF_Yes");
                p.btnConfirm.move("457.00","30","120","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            this.divForm.form.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divPopBtn.form,
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
            obj.set_horizontalgap("10");
            this.divForm.form.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.set_taborder("2");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","100.00%","170",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.set_fittocontents("height");
                p.divGrd.move("39","140","100%","370",null,null);

                p.divPopBtn.set_taborder("0");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0","550","100%","80",null,null);
            	}
            );
            obj.set_verticalgap("30");
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_spacing("10px 20px 10px 20px");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_spacing("0px 10px 0px 20px");
            obj.set_verticalgap("30");
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1200,700,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("작업그룹 상세정보 관리");

                p.divGuide.set_taborder("0");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.set_formscrollbartype("auto autoindicator");
                p.divForm.set_formscrolltype("none");
                p.divForm.move("0","10",null,null,"0","10");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",390,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","30",null,"2112","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","rdoTaxfrTrgtYn","value","dsGet","taxfrTrgtYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divEdtPop01_01.form.edtDept","value","dsGet","bzentyTkcgDept");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtJobGroupNm","value","dsSearch","jobGroupNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divSch.form.edtUserNm","value","dsSearch","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divForm.form.divSch.form.cmbCoId","value","dsSearch","coId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cmbUpJobGroup","value","dsGet","upJobGroupId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.divSch.form.cmbDeptId","value","dsSearch","deptId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.divSch.form.edtUserId","value","dsSearch","userId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM024P263.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	COM024P263.xfdl
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
        	this.gfnFormOnload(obj); //필수함수

        	this.jobGroupId = this.getOwnerFrame().jobGroupId;
        	if(this.gfnIsNull(this.jobGroupId) != true) {
        		this.dsSearch.setColumn(0, "jobGroupId", this.jobGroupId);
        	}

        	this.fnInit();
        	this.cfnSearch();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.getSearchTransaction();
        };

        //저장
        this.cfnSave = function ()
        {
        	//TODO..
        };

        //추가
        this.cfnAdd = function ()
        {
        	//TODO..
        };

        //삭제
        this.cfnDel = function ()
        {
        	//TODO..
        };

        this.cfnClose = function()
        {
        	this.close();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "work/prcrPicListInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList";
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

        this.getCoSearchTransaction = function()
        {
        	var strSvcId    = "prcrPicCoListInq";
        	var strSvcUrl   = "work/prcrPicCoListInq.do";
        	var inData      = "";
        	var outData     = "dsCoList=dsList";
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

        this.getDeptSearchTransaction = function()
        {
        	var strSvcId    = "prcrPicDeptListInq";
        	var strSvcUrl   = "work/prcrPicDeptListInq.do";
        	var inData      = "";
        	var outData     = "dsDeptList=dsList";
        	var strArg      = "id=" + this.divForm.form.divSch.form.cmbCoId.value;
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
        			this.divForm.form.divGrd.form.staTotal01.text = this.dsList.getRowCount();
        			for(var i=0; i<this.dsList.getRowCount(); i++) {
        				if(this.dsList.getColumn(i, "jobYn") == "Y") {
        					this.dsList.setColumn(i, "chk", "1");
        				}
        			}
        			break;
        		case "prcrPicCoListInq" :
        			this.dsCoList.insertRow(0);
        			this.dsCoList.setColumn(0, "cdId", "");
        			this.dsCoList.setColumn(0, "cdNm", "전체");
        			this.divForm.form.divSch.form.cmbCoId.index = 0;

        			this.dsDeptList.insertRow(0);
        			this.dsDeptList.setColumn(0, "cdId", "");
        			this.dsDeptList.setColumn(0, "cdNm", "전체");
        			this.divForm.form.divSch.form.cmbDeptId.index = 0;
        			break;
        		case "prcrPicDeptListInq" :
        			this.dsDeptList.insertRow(0);
        			this.dsDeptList.setColumn(0, "cdId", "");
        			this.dsDeptList.setColumn(0, "cdNm", "전체");
        			this.divForm.form.divSch.form.cmbDeptId.index = 0;
        			break;
        	}
        };

        /**
        	sPopupId	// 페세지창을 구분하기 위한 ID
        	sRtn		// 메세지창에서 리턴 해주는 변수값 (JSON 형태의 스트링 리턴)
        **/
        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);
        	if(sPopupId == "userAdd") {
        		if(oRtn.result == "Y") {
        			this.dsList.filter("chk == '1'");
        			var arr = this.gfnDsToJson(this.dsList);
        			this.close(JSON.stringify(arr));
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.getCoSearchTransaction();
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 부서 조회
        this.divForm_divSch_cmbCoId_onitemchanged = function(obj,e)
        {
        	if(this.gfnIsNull(e.postvalue) != true) {
        		this.getDeptSearchTransaction();
        	} else {
        		this.dsDeptList.clearData();
        		this.dsDeptList.insertRow(0);
        		this.dsDeptList.setColumn(0, "cdId", "");
        		this.dsDeptList.setColumn(0, "cdNm", "전체");
        		this.divForm.form.divSch.form.cmbDeptId.index = 0;
        	}
        };

        this.divForm_divPopBtn_btnConfirm_onclick = function(obj,e)
        {
        	var chk = this.dsList.findRow("chk", "1");
        	if(chk < 0 && this.gfnDsIsUpdated(this.dsList) != true) {
        		this.gfnAlertMsg("msg", "MSG_006");
        		return;
        	}

        	this.gfnConfirmMsg("userAdd", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["사용자 추가"]);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.staLabel.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divSch.form.staLabel00.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.cfnSearch,this);
            this.divForm.form.divSch.form.cmbCoId.addEventHandler("onitemchanged",this.divForm_divSch_cmbCoId_onitemchanged,this);
            this.divForm.form.divSch.form.staLabel01.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divSch.form.cmbDeptId.addEventHandler("onitemchanged",this.divForm_Div00_cmbCtrgType_onitemchanged,this);
            this.divForm.form.divSch.form.staLabel00_00.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divGrd.form.grdList.addEventHandler("oncellclick",this.divForm_divGrd_grdList_oncellclick,this);
            this.divForm.form.divGrd.form.btnUserDel.addEventHandler("onclick",this.divForm_divGrd_btnUserDel_onclick,this);
            this.divForm.form.divGrd.form.btnGrdDel.addEventHandler("onclick",this.divForm_divGrd_btnGrdDel_onclick,this);
            this.divForm.form.divPopBtn.form.btnCancel.addEventHandler("onclick",this.cfnClose,this);
            this.divForm.form.divPopBtn.form.btnConfirm.addEventHandler("onclick",this.divForm_divPopBtn_btnConfirm_onclick,this);
        };
        this.loadIncludeScript("COM024P263.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
