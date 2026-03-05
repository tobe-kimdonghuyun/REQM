(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM024P082");
            this.set_titletext("자회사 처리자 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,548);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"userMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"empExtNo\" type=\"STRING\" size=\"256\"/><Column id=\"empOnlnNo\" type=\"STRING\" size=\"256\"/><Column id=\"eml\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGuide","1184","80","450","385",null,null,null,null,null,null,this);
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

            obj = new Div("divForm","0","0","100.00%",null,null,"70",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("none");
            obj.set_formscrollbartype("default default");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","100%","468",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","710","0","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("34");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_02_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"pan01_02_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100.00%","50",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("자회사 처리자 등록");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_01_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtUserNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("소속회사");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtUserMblTelno","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("14");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_01_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtUserMblTelno\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01","20.00","242","69.47%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("16");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","-20.00","286","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtEml\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtEml","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("18");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("19");
            obj.set_text("내선번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtEmpExtNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("20");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_02_00_00_00","10.00","98","130","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtEmpExtNo\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_00","975.00","189","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("22");
            obj.set_text("내선번호(표출)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtEmpOnlnNo","975.00","235","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("23");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_02_00_00","975.00","189","130","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtEmpOnlnNo\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_00","20.00","242","69.47%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("25");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("26");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","-20.00","286","650","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCtrtNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02_00","0","60","100%","130",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("28");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel04_02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("divEdtPop","799.00","29","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("29");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div00.form.divEdtPop.addChild(obj.name, obj);

            obj = new Button("btnPop","edtCoNm:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div00.form.divEdtPop.addChild(obj.name, obj);

            obj = new Div("divEdtPop00","360","201","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("30");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div00.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Button("btnPop","edtDeptNm:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div00.form.divEdtPop00.addChild(obj.name, obj);

            obj = new Static("sta00","20","20","100%","100.8341736181135%",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("31");
            obj.set_text("자회사 처리자 계정 생성 방법\r\n1. 상기 신청서 <fc v=\'#1e4ebe\'><b v=\'true\'>항목 전부 작성</b></fc>\r\n2. [계정관리] 메뉴 내 해당 <fc v=\'#1e4ebe\'><b v=\'true\'>계정 생성</b></fc> 확인\r\n3. 해당 계정 상세보기에서 <fc v=\'#1e4ebe\'><b v=\'true\'>자회사 처리자 권한 부여</b></fc> 및 <fc v=\'#1e4ebe\'><b v=\'true\'>비밀번호 초기화</b></fc>\r\n4. 자회사 처리자 <fc v=\'#1e4ebe\'><b v=\'true\'>작업 그룹</b></fc> 설정\r\n5. 최종적으로 해당 계정으로 접속되는지 확인\r\n");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel04_02","0","685","100%","130",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("32");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("divEdtPop01","799.00","29","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("33");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtUserId","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop01.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div00.form.divEdtPop01.addChild(obj.name, obj);

            obj = new Button("btnPop","edtUserId:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div00.form.divEdtPop01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div00.form.divEdtPop01.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","516","675","68","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("center");
            obj.set_fittocontents("none");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnGrdRegi\"/></Contents>");
            this.addChild(obj.name, obj);
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
            obj = new Layout("Layout0","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div00.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtCoNm.set_taborder("0");
                p.edtCoNm.set_cssclass("edt_WF_EdtSch");
                p.edtCoNm.set_readonly("true");
                p.edtCoNm.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtCoNm:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div00.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form.divEdtPop.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div00.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div00.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form.divEdtPop.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div00.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div00.form.divEdtPop.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div00.form.divEdtPop00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtDeptNm.set_taborder("0");
                p.edtDeptNm.set_cssclass("edt_WF_EdtSch");
                p.edtDeptNm.set_readonly("true");
                p.edtDeptNm.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtDeptNm:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div00.form.divEdtPop00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form.divEdtPop00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div00.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div00.form.divEdtPop00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form.divEdtPop00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div00.form.divEdtPop00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div00.form.divEdtPop00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div00.form.divEdtPop01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form.divEdtPop01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtUserId.set_taborder("0");
                p.edtUserId.set_cssclass("edt_WF_EdtSch");
                p.edtUserId.set_readonly("true");
                p.edtUserId.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtUserId:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div00.form.divEdtPop01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form.divEdtPop01.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div00.form.divEdtPop01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div00.form.divEdtPop01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form.divEdtPop01.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div00.form.divEdtPop01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div00.form.divEdtPop01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("34");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.move("710","0","300","86",null,null);

                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("자회사 처리자 등록");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("0","0","100.00%","50",null,null);

                p.pan00.set_taborder("1");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","96",null,null);

                p.staLabel00.set_taborder("2");
                p.staLabel00.set_text("아이디");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.pan00_01.set_taborder("3");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","300","86",null,null);

                p.staLabel00_01.set_taborder("4");
                p.staLabel00_01.set_text("성명");
                p.staLabel00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.edtUserNm.set_taborder("5");
                p.edtUserNm.set_readonly("false");
                p.edtUserNm.move("10.00","158","100%","40",null,null);

                p.pan00_02.set_taborder("6");
                p.pan00_02.set_type("vertical");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.set_minwidth("");
                p.pan00_02.move("10.00","98","300","86",null,null);

                p.staLabel01_00.set_taborder("7");
                p.staLabel01_00.set_text("소속회사");
                p.staLabel01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.pan01_01.set_taborder("8");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.move("10.00","98","300","86",null,null);

                p.staLabel01_02.set_taborder("9");
                p.staLabel01_02.set_text("부서");
                p.staLabel01_02.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02.move("10","98","100%","46",null,null);

                p.pan01_02.set_taborder("10");
                p.pan01_02.set_type("vertical");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.move("10.00","98","300","86",null,null);

                p.pan01.set_taborder("11");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_flexshrink("1");
                p.pan01.set_fittocontents("height");
                p.pan01.move("0","60","100.00%","96",null,null);

                p.pan02.set_taborder("12");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100%","96",null,null);

                p.staLabel01_00_00.set_taborder("13");
                p.staLabel01_00_00.set_text("휴대폰번호");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_00.move("10","98","100%","46",null,null);

                p.edtUserMblTelno.set_taborder("14");
                p.edtUserMblTelno.set_readonly("false");
                p.edtUserMblTelno.move("10.00","158","100%","40",null,null);

                p.pan01_01_00.set_taborder("15");
                p.pan01_01_00.set_type("vertical");
                p.pan01_01_00.set_flexgrow("1");
                p.pan01_01_00.move("10.00","98","300","86",null,null);

                p.staLabel01_00_01.set_taborder("16");
                p.staLabel01_00_01.set_text("이메일");
                p.staLabel01_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_01.move("20.00","242","69.47%","46",null,null);

                p.Panel01_00.set_taborder("17");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.move("-20.00","286","300","86",null,null);

                p.edtEml.set_taborder("18");
                p.edtEml.set_readonly("false");
                p.edtEml.move("10.00","158","100%","40",null,null);

                p.staLabel01_02_00_00_00.set_taborder("19");
                p.staLabel01_02_00_00_00.set_text("내선번호");
                p.staLabel01_02_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00_00_00.move("10","98","100%","46",null,null);

                p.edtEmpExtNo.set_taborder("20");
                p.edtEmpExtNo.set_readonly("false");
                p.edtEmpExtNo.move("10.00","158","100%","40",null,null);

                p.pan01_02_00_00_00.set_taborder("21");
                p.pan01_02_00_00_00.set_type("vertical");
                p.pan01_02_00_00_00.set_flexgrow("1");
                p.pan01_02_00_00_00.move("10.00","98","130","86",null,null);

                p.staLabel01_02_00_00.set_taborder("22");
                p.staLabel01_02_00_00.set_text("내선번호(표출)");
                p.staLabel01_02_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00_00.move("975.00","189","100%","46",null,null);

                p.edtEmpOnlnNo.set_taborder("23");
                p.edtEmpOnlnNo.set_readonly("false");
                p.edtEmpOnlnNo.move("975.00","235","100%","40",null,null);

                p.pan01_02_00_00.set_taborder("24");
                p.pan01_02_00_00.set_type("vertical");
                p.pan01_02_00_00.set_flexgrow("1");
                p.pan01_02_00_00.move("975.00","189","130","86",null,null);

                p.staLabel01_00_01_00.set_taborder("25");
                p.staLabel01_00_01_00.set_text("계약명");
                p.staLabel01_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01_00.move("20.00","242","69.47%","46",null,null);

                p.edtCtrtNm.set_taborder("26");
                p.edtCtrtNm.set_readonly("false");
                p.edtCtrtNm.move("10.00","158","100%","40",null,null);

                p.Panel01_00_00.set_taborder("27");
                p.Panel01_00_00.set_type("vertical");
                p.Panel01_00_00.set_flexgrow("1");
                p.Panel01_00_00.move("-20.00","286","650","86",null,null);

                p.pan02_00.set_taborder("28");
                p.pan02_00.set_horizontalgap("20");
                p.pan02_00.set_flexcrossaxiswrapalign("start");
                p.pan02_00.set_flexwrap("wrap");
                p.pan02_00.set_fittocontents("height");
                p.pan02_00.set_verticalgap("0");
                p.pan02_00.set_cssclass("pal_WF_DtlBg");
                p.pan02_00.move("0","60","100%","130",null,null);

                p.divEdtPop.set_taborder("29");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("799.00","29","100%","40",null,null);

                p.divEdtPop00.set_taborder("30");
                p.divEdtPop00.set_text("Div00");
                p.divEdtPop00.set_formscrollbartype("none none");
                p.divEdtPop00.set_formscrolltype("none");
                p.divEdtPop00.set_flexgrow("1");
                p.divEdtPop00.move("360","201","100%","40",null,null);

                p.sta00.set_taborder("31");
                p.sta00.set_text("자회사 처리자 계정 생성 방법\r\n1. 상기 신청서 <fc v=\'#1e4ebe\'><b v=\'true\'>항목 전부 작성</b></fc>\r\n2. [계정관리] 메뉴 내 해당 <fc v=\'#1e4ebe\'><b v=\'true\'>계정 생성</b></fc> 확인\r\n3. 해당 계정 상세보기에서 <fc v=\'#1e4ebe\'><b v=\'true\'>자회사 처리자 권한 부여</b></fc> 및 <fc v=\'#1e4ebe\'><b v=\'true\'>비밀번호 초기화</b></fc>\r\n4. 자회사 처리자 <fc v=\'#1e4ebe\'><b v=\'true\'>작업 그룹</b></fc> 설정\r\n5. 최종적으로 해당 계정으로 접속되는지 확인\r\n");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.set_usedecorate("true");
                p.sta00.move("20","20","100%","100.8341736181135%",null,null);

                p.Panel04_02.set_taborder("32");
                p.Panel04_02.set_fittocontents("height");
                p.Panel04_02.move("0","685","100%","130",null,null);

                p.divEdtPop01.set_taborder("33");
                p.divEdtPop01.set_text("Div00");
                p.divEdtPop01.set_formscrollbartype("none none");
                p.divEdtPop01.set_formscrolltype("none");
                p.divEdtPop01.set_flexgrow("1");
                p.divEdtPop01.move("799.00","29","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00.move("0","60","100.00%","269",null,null);

                p.pan01.set_flexshrink("0");
                p.pan01.move("0","60","100.00%","269",null,null);

                p.pan02.move("0","60","100.00%","183",null,null);

                p.pan02_00.move("0","60","100.00%","131",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.set_taborder("0");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Bg");
                p.Div00.set_fittocontents("height");
                p.Div00.move("0","0","100%","468",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("horizontal");
            obj.set_spacing("10px 20px 0px 20px");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.set_fittocontents("none");
                p.Div00.move("0","0","100%","902",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_spacing("10px 20px 0px 20px");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1100,548,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("자회사 처리자 등록");

                p.divGuide.set_taborder("0");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1184","80","450","385",null,null);

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("none");
                p.divForm.set_formscrollbartype("default default");
                p.divForm.set_formscrolltype("both");
                p.divForm.move("0","0","100.00%",null,null,"70");

                p.btnGrdRegi.set_taborder("2");
                p.btnGrdRegi.set_text("확인");
                p.btnGrdRegi.set_cssclass("btn_WF_Yes");
                p.btnGrdRegi.set_visible("true");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("516","675","68","40",null,null);

                p.PanelGrdBtn.set_taborder("3");
                p.PanelGrdBtn.set_flexcrossaxisalign("center");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("center");
                p.PanelGrdBtn.set_fittocontents("none");
                p.PanelGrdBtn.set_horizontalgap("20");
                p.PanelGrdBtn.move("0",null,null,"60","0","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,578,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_fittocontents("none");
                p.divForm.move("0","0","100.00%",null,null,"70");

                p.divGuide.move("578","106","450","385",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div00.form.divEdtPop01.form.edtUserId","value","dsGet","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div00.form.edtUserNm","value","dsGet","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div00.form.edtUserMblTelno","value","dsGet","userMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div00.form.divEdtPop.form.edtCoNm","value","dsGet","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div00.form.divEdtPop00.form.edtDeptNm","value","dsGet","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div00.form.edtEmpExtNo","value","dsGet","empExtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div00.form.edtEmpOnlnNo","value","dsGet","empOnlnNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div00.form.edtEml","value","dsGet","eml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div00.form.edtCtrtNm","value","dsGet","ctrtNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM024P082.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM024P082.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			김완성					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.validateColumn = [];

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.dsGet.addRow();

        	this.validateColumn.push({"title" : "아이디", "com": this.divForm.form.Div00.form.divEdtPop01.form.edtUserId});
        	this.validateColumn.push({"title" : "성명", "com": this.divForm.form.Div00.form.edtUserNm});
        	this.validateColumn.push({"title" : "휴대폰번호", "com": this.divForm.form.Div00.form.edtUserMblTelno});
        	this.validateColumn.push({"title" : "소속회사", "com": this.divForm.form.Div00.form.divEdtPop.form.edtCoNm});
        	this.validateColumn.push({"title" : "부서", "com": this.divForm.form.Div00.form.divEdtPop00.form.edtDeptNm});
        	this.validateColumn.push({"title" : "이메일", "com": this.divForm.form.Div00.form.edtEml});
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
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

        //저장
        this.cfnSave = function ()
        {
        	this.saveTransaction();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "sysMng/cpatcoPrcrInfoStrg.do";
        	var inData      = "dsGet=dsGet:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
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
        		case "save" :
        			this.gfnAlertMsg("saveAfter", "MSG_001", "", "msgCallback");
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
        	if(sPopupId == "save") {
        		if(oRtn.result == "Y") {
        			this.cfnSave();
        		}
        	}
        	else if(sPopupId == "saveAfter") {
        		var arr = {"saveFlag" : "Y"};
        		this.close(JSON.stringify(arr));
        	}
        };

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if(sPopupId =="userIdSearchPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		this.dsGet.setColumn(0, "userId", objRtn.userId);
        	}
        	else if(sPopupId =="coIdSearchPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		this.dsGet.setColumn(0, "coId", objRtn.coId);
        		this.dsGet.setColumn(0, "coNm", objRtn.coNm);
        	}
        	else if(sPopupId == "deptSearchPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		this.dsGet.setColumn(0, "deptId", objRtn.deptId);
        		this.dsGet.setColumn(0, "deptNm", objRtn.deptNm);
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divPopBtn_btnSave_onclick = function(obj,e)
        {
        	if(this.gfnDsIsUpdated(this.dsGet) != true) {
        		this.gfnAlertMsg("msg", "MSG_004");
        	} else {
        		if(this.gfnDsIsValidated(this.validateColumn)) {
        			this.gfnConfirmMsg("save", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        		}
        	}
        };

        // ID 중복체크 팝업
        this.divForm_Div00_divEdtPop01_btnPop_onclick = function(obj,e)
        {
        	var sTitle = "ID 중복체크";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		//, width: 1221
         		//, height: 650			//width,height 지정하지 않음 popup form size적용
        		, autosize: true
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("userIdSearchPopup", "work::COM/member/COM000P033.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 회사 정보 팝업
        this.divForm_Div00_divEdtPop00_btnPop_onclick = function(obj,e)
        {
        	var sTitle = "회사 목록";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		//, width: 1221
         		//, height: 650			//width,height 지정하지 않음 popup form size적용
        		, autosize: true
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("coIdSearchPopup", "work::COM/crtr/COM100P01.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 부서 정보 팝업
        this.divForm_Div00_divEdtPop_btnPop_onclick = function(obj,e)
        {
        	var sTitle = "부서 목록";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		//, width: 1221
         		//, height: 650			//width,height 지정하지 않음 popup form size적용
        		, autosize: true
        		, title: sTitle
        		, resize: false
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("deptSearchPopup", "work::COM/crtr/COM100P03.xfdl", objArg, sPopupCallBack, objOption);
        };



        this.divForm_Div00_sta00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div00.form.divEdtPop.form.btnPop.addEventHandler("onclick",this.divForm_Div00_divEdtPop00_btnPop_onclick,this);
            this.divForm.form.Div00.form.divEdtPop00.form.btnPop.addEventHandler("onclick",this.divForm_Div00_divEdtPop_btnPop_onclick,this);
            this.divForm.form.Div00.form.sta00.addEventHandler("onclick",this.divForm_Div00_sta00_onclick,this);
            this.divForm.form.Div00.form.divEdtPop01.form.btnPop.addEventHandler("onclick",this.divForm_Div00_divEdtPop01_btnPop_onclick,this);
            this.btnGrdRegi.addEventHandler("onclick",this.divForm_divPopBtn_btnSave_onclick,this);
        };
        this.loadIncludeScript("COM024P082.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
