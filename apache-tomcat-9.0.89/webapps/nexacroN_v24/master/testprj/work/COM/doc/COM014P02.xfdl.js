(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM14P02");
            this.set_titletext("정보활용동의서 공통");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,1000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"agreMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"prvcAgreDocId\" type=\"STRING\" size=\"256\"/><Column id=\"agreYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"esntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"chcAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"agreType\" type=\"STRING\" size=\"256\"/><Column id=\"docCn\" type=\"STRING\" size=\"256\"/><Column id=\"esntlAgreCn\" type=\"STRING\" size=\"256\"/><Column id=\"chcAgreCn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"esntlAgreYn\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("divForm","20","0",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","-14","48","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("개인정보 수집 이용 안내 (문서유형명)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinAgreInfo","1436","718","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01","675","48","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinAgreInfo\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","-14","28","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div00","20","10","100.00%","800",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","129","88","100%","200",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj.set_visible("false");
            obj.set_displaynulltext("필수 개인정보 수집 및 이용 관련 안내문");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Pan01","0","60","100.00%","221.025",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_visible("false");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("개인정보(필수) 사용동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","127","203","280","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            var divForm_form_Div00_form_Radio00_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_Radio00_innerdataset", obj);
            divForm_form_Div00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_Radio00_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","10.00","98","960","126",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","20","20","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("(필수 동의 항목은 동의하지 않으면 회원 가입이 불가능합니다.)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("none");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("개인정보(선택) 사용동의여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio01","127","203","280","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            var divForm_form_Div00_form_Radio01_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_Radio01_innerdataset", obj);
            divForm_form_Div00_form_Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_Radio01_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","20","20","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("(선택 동의 항목은 동의하지 않으셔도 회원 가입이 가능합니다.)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("none");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00","10.00","98","960","126",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio01\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_00_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Pan02","0","60","100.00%","137",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_visible("false");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00","129","88","100%","200",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_visible("false");
            obj.set_displaynulltext("선택 개인정보 수집 및 이용 관련 안내문");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Pan03","0","60","100.00%","221.025",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_visible("false");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Pan04","0","60","100.00%","137",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_visible("false");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("divPopBtn","-10","730","100.00%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","68","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_01","1080","51","96.00%","120",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_value("필수 개인정보 수집 및 이용 관련 안내문 필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문");
            obj.set_visible("false");
            obj.set_flexgrow("1");
            obj.set_text("필수 개인정보 수집 및 이용 관련 안내문 필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00_00","1040","318","96.00%","120",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_value("선택 개인정보 수집 및 이용 관련 안내문");
            obj.set_visible("false");
            obj.set_text("선택 개인정보 수집 및 이용 관련 안내문");
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
            obj = new Layout("mobile","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.TextArea00.set_taborder("11");
                p.TextArea00.set_visible("false");
                p.TextArea00.set_displaynulltext("필수 개인정보 수집 및 이용 관련 안내문");
                p.TextArea00.move("129","88","100%","200",null,null);

                p.Pan01.set_taborder("0");
                p.Pan01.set_flexcrossaxiswrapalign("center");
                p.Pan01.set_flexwrap("wrap");
                p.Pan01.set_fittocontents("height");
                p.Pan01.set_verticalgap("0");
                p.Pan01.set_spacing("10px 20px 10px 20px");
                p.Pan01.set_cssclass("pal_WF_DtlBg");
                p.Pan01.set_flexcrossaxisalign("center");
                p.Pan01.set_flexmainaxisalign("center");
                p.Pan01.set_visible("false");
                p.Pan01.set_flexgrow("0");
                p.Pan01.move("0","60","100.00%","221.025",null,null);

                p.staLabel01_00_01.set_taborder("2");
                p.staLabel01_00_01.set_text("개인정보(필수) 사용동의여부");
                p.staLabel01_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel01_00_01.move("10","98","100%","46",null,null);

                p.Radio00.set_taborder("3");
                p.Radio00.set_fittocontents("width");
                p.Radio00.set_innerdataset(divForm_form_Div00_form_Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_direction("vertical");
                p.Radio00.set_enable("true");
                p.Radio00.set_value("");
                p.Radio00.set_index("-1");
                p.Radio00.move("127","203","280","40",null,null);

                p.Panel01_00.set_taborder("4");
                p.Panel01_00.set_type("vertical");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.move("10.00","98","960","126",null,null);

                p.sta00_00_00.set_taborder("5");
                p.sta00_00_00.set_text("(필수 동의 항목은 동의하지 않으면 회원 가입이 불가능합니다.)");
                p.sta00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00.set_fittocontents("none");
                p.sta00_00_00.move("20","20","100%","40",null,null);

                p.staLabel01_00_01_00_00.set_taborder("6");
                p.staLabel01_00_01_00_00.set_text("개인정보(선택) 사용동의여부");
                p.staLabel01_00_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_01_00_00.move("10","98","100%","46",null,null);

                p.Radio01.set_taborder("7");
                p.Radio01.set_fittocontents("width");
                p.Radio01.set_innerdataset(divForm_form_Div00_form_Radio01_innerdataset);
                p.Radio01.set_codecolumn("codecolumn");
                p.Radio01.set_datacolumn("datacolumn");
                p.Radio01.set_direction("vertical");
                p.Radio01.set_enable("true");
                p.Radio01.set_value("0");
                p.Radio01.set_index("0");
                p.Radio01.move("127","203","280","40",null,null);

                p.sta00_00_01.set_taborder("8");
                p.sta00_00_01.set_text("(선택 동의 항목은 동의하지 않으셔도 회원 가입이 가능합니다.)");
                p.sta00_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_01.set_fittocontents("none");
                p.sta00_00_01.move("20","20","100%","40",null,null);

                p.Panel01_00_00_00.set_taborder("9");
                p.Panel01_00_00_00.set_type("vertical");
                p.Panel01_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00.move("10.00","98","960","126",null,null);

                p.Pan02.set_taborder("1");
                p.Pan02.set_horizontalgap("20");
                p.Pan02.set_flexcrossaxiswrapalign("start");
                p.Pan02.set_flexwrap("wrap");
                p.Pan02.set_fittocontents("height");
                p.Pan02.set_verticalgap("0");
                p.Pan02.set_spacing("0px 20px 10px 20px");
                p.Pan02.set_visible("false");
                p.Pan02.set_cssclass("pal_WF_DtlBg");
                p.Pan02.set_flexgrow("0");
                p.Pan02.move("0","60","100.00%","137",null,null);

                p.TextArea00_00.set_taborder("12");
                p.TextArea00_00.set_visible("false");
                p.TextArea00_00.set_displaynulltext("선택 개인정보 수집 및 이용 관련 안내문");
                p.TextArea00_00.move("129","88","100%","200",null,null);

                p.Pan03.set_taborder("13");
                p.Pan03.set_flexcrossaxiswrapalign("center");
                p.Pan03.set_flexwrap("wrap");
                p.Pan03.set_fittocontents("height");
                p.Pan03.set_verticalgap("0");
                p.Pan03.set_spacing("10px 20px 10px 20px");
                p.Pan03.set_cssclass("pal_WF_DtlBg");
                p.Pan03.set_flexcrossaxisalign("center");
                p.Pan03.set_flexmainaxisalign("center");
                p.Pan03.set_visible("false");
                p.Pan03.set_flexgrow("0");
                p.Pan03.move("0","60","100.00%","221.025",null,null);

                p.Pan04.set_taborder("10");
                p.Pan04.set_horizontalgap("20");
                p.Pan04.set_flexcrossaxiswrapalign("start");
                p.Pan04.set_flexwrap("wrap");
                p.Pan04.set_fittocontents("height");
                p.Pan04.set_verticalgap("0");
                p.Pan04.set_spacing("0px 20px 10px 20px");
                p.Pan04.set_visible("false");
                p.Pan04.set_cssclass("pal_WF_DtlBg");
                p.Pan04.set_flexgrow("0");
                p.Pan04.move("0","60","100.00%","137",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("default","",0,0,this.divForm.form.divPopBtn.form,
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
                p.staSubTitle01.set_taborder("1");
                p.staSubTitle01.set_text("개인정보 수집 이용 안내 (문서유형명)");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("-14","48","100%","50",null,null);

                p.btnMinAgreInfo.set_taborder("2");
                p.btnMinAgreInfo.set_cssclass("btn_WF_ACMinus");
                p.btnMinAgreInfo.set_visible("true");
                p.btnMinAgreInfo.set_text("");
                p.btnMinAgreInfo.move("1436","718","34","34",null,null);

                p.Panel01.set_taborder("3");
                p.Panel01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01.set_spacing("0px 20px");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.move("675","48","100%","50",null,null);

                p.sub_tit01.set_taborder("4");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.set_minheight("70");
                p.sub_tit01.set_maxheight("");
                p.sub_tit01.move("-14","28","100%","70",null,null);

                p.Div00.set_taborder("0");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Bg");
                p.Div00.set_fittocontents("height");
                p.Div00.move("20","10","100.00%","800",null,null);

                p.divPopBtn.set_taborder("5");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("-10","730","100.00%","60",null,null);
            	}
            );
            obj.set_type("vertical");
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
            obj.set_spacing("10px 20px 0px 20px");
            obj.set_type("vertical");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1000,1000,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("정보활용동의서 공통");

                p.divGuide.set_taborder("0");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("20","0",null,null,"20","0");

                p.edt00_00_00_00_01.set_taborder("2");
                p.edt00_00_00_00_01.set_readonly("true");
                p.edt00_00_00_00_01.set_value("필수 개인정보 수집 및 이용 관련 안내문 필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문필수 개인정보 수집 및 이용 관련 안내문");
                p.edt00_00_00_00_01.set_visible("false");
                p.edt00_00_00_00_01.set_flexgrow("1");
                p.edt00_00_00_00_01.move("1080","51","96.00%","120",null,null);

                p.edt00_00_00_00_00_00.set_taborder("3");
                p.edt00_00_00_00_00_00.set_readonly("true");
                p.edt00_00_00_00_00_00.set_value("선택 개인정보 수집 및 이용 관련 안내문");
                p.edt00_00_00_00_00_00.set_visible("false");
                p.edt00_00_00_00_00_00.move("1040","318","96.00%","120",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,686,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","0","480","616",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div00.form.Radio00","value","dsGet","aplcntAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div00.form.Radio01","value","dsGet","aplcntAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div00.form.TextArea00","value","dsGet","esntlAgreCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div00.form.TextArea00_00","value","dsGet","chcAgreCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM014P02.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	sampleWrite.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/08/08
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/27			 조규완							최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
        var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	// 전달받은 파라메터 팝업창과 페이지오픈으로 파라메터 불러오는 방식이 달라짐
        	if(this.opener)
        	{
        		this.param = {
        			"id" : this.getOwnerFrame().id,
        		}
        	} else
        	{
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	this.fnInit();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        this.cfnClose = function()
        {
        	//부모창 검색 조회
         	var sWinId = this.objApp.gdsOpenMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, this.getOwnerFrame().form.fvMenuId.substring(0, 8), this.FRAME_MENUCOLUMNS.winId);
         	var objForm = this.objApp.gvFrsWork.all[sWinId];
        	objForm.form.divWork.form.cfnSearch(1);
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 데이터 조회
        this.selectTransaction = function()
        {
        	var strSvcId    = "select";
        	var strSvcUrl   = "doc/infoUtlzWtcsAgreYnInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet";
        	var strArg      = "id=" + this.param.id;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "doc/infoUtlzWtcsAgreYnStrg.do";
        	var inData      = "dsGet=dsGet";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

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
        		case "select":
        			// 데이터 조회 후 셋팅
        			var rowData1 = {
        				content: this.dsGet.getColumn(0, "esntlAgreCn")
        			};
        			this.divForm.form.Div00.form.EditDiv00.form.writeData(rowData1);
        			var rowData2 = {
        				content: this.dsGet.getColumn(0, "chcAgreCn")
        			};
        			this.divForm.form.Div00.form.EditDiv01.form.writeData(rowData2);
        			this.fnInitSetting();
        			break;

        		case "combo":
        			break;

        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("save_complete", gvRetMsg, null, "msgCallback");

        			break;

        	}
        };

        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);

        	if(sPopupId == "save")
        	{
        		if(oRtn.result == "Y") {
        			this.saveTransaction();
        		}
        	} else if(sPopupId == "save_complete")  {
        		if(this.opener)
        		{
        			this.close();
        		} else
        		{
        			this.gfnCloseMenu(cMenuId);
        		}
        	}
        };

        /* ck에디터에서 불러올때 콜백 펑션 */
        this.formGetData = function(thisObj, allData)
        {
        	var content = JSON.parse(allData).CONTENT;
        	if (thisObj.gfnIsNull(content)) {
        		thisObj.gfnAlertMsg("msg", "MSG_011", ["문서내용을 입력해주세요."]);
        		return false;
        	}
        	thisObj.dsGet.setColumn(0, "esntlAgreCn", content);
        	thisObj.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        }
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	var obj = {
        		filebrowserImageUploadUrl: '/common/insertImageCk.do', // 파일 업로드를 처리 할 경로 설정.
        		height: 200,
        		width: 1000,
        		toolbar: [['Source'], ['Bold', 'Italic', 'Underline', 'Strike'], ['Image', 'Table', 'HorizontalRule'], ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent'],	['Font', 'FontSize'], ['TextColor', 'BGColor']],
        		removePlugins: 'resize',
        	};

        	this.divForm.form.Div00.form.EditDiv00.form.fnInit(obj);
        	this.divForm.form.Div00.form.EditDiv01.form.fnInit(obj);

        	this.gfnCmmCode("combo", "dsCombo", "AGREETYPE", "A");
        }

        this.fnInitSetting = function()
        {
        	var esntlAgreYn = this.dsGet.getColumn(0, "esntlAgreYn");
        	var chcAgreYn = this.dsGet.getColumn(0, "chcAgreYn");
        	var agreType = this.dsGet.getColumn(0, "agreType");
        	var nRow = this.dsCombo.findRow("colId", agreType);
        	var docTypeNm = this.dsCombo.getColumn(nRow, "cdNm");

        	this.divForm.form.Div00.form.staSubTitle.text = "개인정보 수집 이용 안내 (" + docTypeNm + ")";

        	if (esntlAgreYn == "Y") {
        		this.divForm.form.Div00.form.Pan01.set_visible(true);
        		this.divForm.form.Div00.form.Pan02.set_visible(true);
        	} else if (chcAgreYn == "Y") {
        		this.divForm.form.Div00.form.Pan03.set_visible(true);
        		this.divForm.form.Div00.form.Pan04.set_visible(true);
        	}
        }

        this.tranInit = function()
        {
        	if(this.param != null && this.param.id != null && this.param.id != '')
        	{
        		this.selectTransaction();
        	}
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divPopBtn_Button00_00_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("save", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        };

        this.btnMin_onclick = function(obj,e)
        {
        	var objNm = obj.name;
        	var objClass = obj.cssclass;
        	var objDiv = null;
        	var divVisible = false;

        	// 해당 div 찾아줌.
        	if(objNm == "btnMinAgreInfo") {
        		objDiv = this.divForm.form.Div00;
        	} else{
        		return;
        	}

        	if (objClass == "btn_WF_ACMinus") { // - 버튼 일때
        		divVisible = false; // visible 세팅
        		obj.cssclass = "btn_WF_ACPlus"; // 클래스 수정
        	} else if (objClass == "btn_WF_ACPlus") { // + 버튼 일때
        		divVisible = true; // visible 세팅
        		obj.cssclass = "btn_WF_ACMinus";
        	}

        	objDiv.visible = divVisible;
        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.btnMinAgreInfo.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div00.form.Radio01.addEventHandler("onitemchanged",this.divForm_Div00_Radio00_00_onitemchanged,this);
            this.divForm.form.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divForm_divPopBtn_Button00_00_onclick,this);
        };
        this.loadIncludeScript("COM014P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
