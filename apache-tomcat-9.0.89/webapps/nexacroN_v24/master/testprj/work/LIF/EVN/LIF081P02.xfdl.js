(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF081P02");
            this.set_titletext("영접카운터정보 등록/수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"ctrNo\" type=\"STRING\" size=\"256\"/><Column id=\"ctrNm\" type=\"STRING\" size=\"256\"/><Column id=\"evntYm\" type=\"STRING\" size=\"256\"/><Column id=\"rgnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"useIpbtBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"useIpbtEndYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"evntYm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("divForm","0","10",null,null,"0","30",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("auto autoindicator");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","231","10","100%","290",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("카운터번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtCtrNo","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCtrNo\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("카운터명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCtrNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00","10","98","305","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("사용불가 시작일자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"pan04_02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_02_00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan00_02_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_02_00","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"calUseIpbtBgngYmd\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00_00","10","98","305","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("지역");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_02_00_00","10.00","98","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbRgnSeCd\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmbRgnSeCd","788.00","145","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_flexgrow("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div00_form_cmbRgnSeCd_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_cmbRgnSeCd_innerdataset", obj);
            divForm_form_Div00_form_cmbRgnSeCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">T1</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">T2</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_cmbRgnSeCd_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtCtrNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("calUseIpbtBgngYmd","0","0","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_00","437","119","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("14");
            obj.set_text("사용불가 종료일자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("calUseIpbtEndYmd","437","165","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02_00","437.00","119","250","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"calUseIpbtEndYmd\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0","550","100%","80",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSave","457.00","30","120","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Yes");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btnClose","457.00","30","120","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
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
            //-- Default Layout : this.divForm.form.Div00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","96",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("카운터번호");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.edtCtrNo.set_taborder("2");
                p.edtCtrNo.set_readonly("true");
                p.edtCtrNo.set_maxlength("4");
                p.edtCtrNo.move("10.00","158","100%","40",null,null);

                p.pan00_01.set_taborder("3");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","250","86",null,null);

                p.staLabel00_01.set_taborder("4");
                p.staLabel00_01.set_text("카운터명");
                p.staLabel00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.pan00_02.set_taborder("5");
                p.pan00_02.set_type("vertical");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.set_minwidth("");
                p.pan00_02.move("10.00","98","250","86",null,null);

                p.staLabel05_01_00.set_taborder("6");
                p.staLabel05_01_00.set_text("사용불가 시작일자");
                p.staLabel05_01_00.set_cssclass("sta_WF_Label");
                p.staLabel05_01_00.move("10","98","305","46",null,null);

                p.pan04_00.set_taborder("8");
                p.pan04_00.set_horizontalgap("20");
                p.pan04_00.set_flexcrossaxiswrapalign("start");
                p.pan04_00.set_flexwrap("wrap");
                p.pan04_00.set_fittocontents("height");
                p.pan04_00.set_verticalgap("0");
                p.pan04_00.set_spacing("0px 20px 10px 20px");
                p.pan04_00.set_cssclass("pal_WF_DtlBg");
                p.pan04_00.move("0","60","100.00%","96",null,null);

                p.pan04_02_00.set_taborder("7");
                p.pan04_02_00.set_type("vertical");
                p.pan04_02_00.set_flexgrow("1");
                p.pan04_02_00.move("10.00","98","250","86",null,null);

                p.staLabel05_01_00_00.set_taborder("9");
                p.staLabel05_01_00_00.set_text("지역");
                p.staLabel05_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_01_00_00.move("10","98","305","46",null,null);

                p.pan04_02_00_00.set_taborder("11");
                p.pan04_02_00_00.set_type("vertical");
                p.pan04_02_00_00.set_flexgrow("1");
                p.pan04_02_00_00.move("10.00","98","250","86",null,null);

                p.cmbRgnSeCd.set_taborder("10");
                p.cmbRgnSeCd.set_flexgrow("1");
                p.cmbRgnSeCd.set_innerdataset(divForm_form_Div00_form_cmbRgnSeCd_innerdataset);
                p.cmbRgnSeCd.set_codecolumn("codecolumn");
                p.cmbRgnSeCd.set_datacolumn("datacolumn");
                p.cmbRgnSeCd.set_text("선택");
                p.cmbRgnSeCd.set_value("");
                p.cmbRgnSeCd.set_index("0");
                p.cmbRgnSeCd.move("788.00","145","100%","40",null,null);

                p.edtCtrNm.set_taborder("12");
                p.edtCtrNm.set_readonly("false");
                p.edtCtrNm.move("10.00","158","100%","40",null,null);

                p.calUseIpbtBgngYmd.set_taborder("13");
                p.calUseIpbtBgngYmd.set_dateformat("yyyy-MM-dd");
                p.calUseIpbtBgngYmd.move("0","0","100%","40",null,null);

                p.staLabel00_01_00.set_taborder("14");
                p.staLabel00_01_00.set_text("사용불가 종료일자");
                p.staLabel00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel00_01_00.move("437","119","100%","46",null,null);

                p.calUseIpbtEndYmd.set_taborder("15");
                p.calUseIpbtEndYmd.set_dateformat("yyyy-MM-dd");
                p.calUseIpbtEndYmd.move("437","165","100%","40",null,null);

                p.pan00_02_00.set_taborder("16");
                p.pan00_02_00.set_type("vertical");
                p.pan00_02_00.set_flexgrow("1");
                p.pan00_02_00.set_minwidth("");
                p.pan00_02_00.move("437.00","119","250","86",null,null);
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
                p.btnSave.set_taborder("1");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.move("457.00","30","120","40",null,null);

                p.btnClose.set_taborder("1");
                p.btnClose.set_text("닫기");
                p.btnClose.move("457.00","30","120","40",null,null);
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
                p.Div00.set_taborder("0");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Bg");
                p.Div00.set_fittocontents("height");
                p.Div00.move("231","10","100%","290",null,null);

                p.divPopBtn.set_taborder("1");
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
            obj = new Layout("default","Desktop_screen,Phone_screen",1000,550,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("영접카운터정보 등록/수정");

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
                p.divForm.move("0","10",null,null,"0","30");
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
            obj = new BindItem("item0","divForm.form.Div00.form.cmbRgnSeCd","value","dsGet","rgnSeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div00.form.calUseIpbtBgngYmd","value","dsGet","useIpbtBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div00.form.edtCtrNo","value","dsGet","ctrNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div00.form.edtCtrNm","value","dsGet","ctrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div00.form.calUseIpbtEndYmd","value","dsGet","useIpbtEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("LIF081P02.xfdl","xjs::TaskCom.xjs");
        this.registerScript("LIF081P02.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 통합정보 프로젝트
        *  @FileName 	LIF081P02.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/12/29
        *  @Desction    생활 > 행사용시설신청 > 영접카운터번호관리 > 영접카운터번호 등록수정 팝업
        *  @Author
        ************** 소스 수정 이력 ****************************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/12/29			김진섭						최초생성
        *******************************************************************************/
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.ctrNo;
        this.evntYm;
        //this.curYm;

        this.validateColumn = [];

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();

        // 	this.validateColumn.push({"title" : "계약명", "com": this.divForm.form.Div00.form.edtCtrtNm});
        // 	this.validateColumn.push({"title" : "계약유형", "com": this.divForm.form.Div00.form.cmbCtrgType});
        // 	this.validateColumn.push({"title" : "계약일", "com": this.divForm.form.Div00.form.calCtrtYmd});
        // 	this.validateColumn.push({"title" : "계약시작일", "com": this.divForm.form.Div00.form.calCtrtBgngYmd});
        // 	this.validateColumn.push({"title" : "계약종료일", "com": this.divForm.form.Div00.form.calCtrtEndYmd});

        	if(this.opener) {
        		this.ctrNo = this.getOwnerFrame().ctrNo;
        		this.evntYm = this.getOwnerFrame().evntYm;

        	} else {
        		if(!this.gfnIsNull(this.gfnGetArgument("PARM")) != true) {
        			this.param = this.gfnGetArgument("PARM");
        			if(this.gfnIsNull(this.param.ctrNo) != true) {
        				this.ctrNo = this.param.ctrNo;
        			}
        			if(this.gfnIsNull(this.param.evntYm) != true) {
        				this.evntYm = this.param.evntYm;
        			}
        		}
        	}
        	//alert("this.ctrNo==>" + this.ctrNo);
        	if(this.gfnIsNull(this.ctrNo)) {
        		this.dsGet.addRow();
        		this.dsGet.setColumn(0, "evntYm", this.evntYm);
        		//this.dsGet.setColumn(0, "mnlMngSeMnl", "N");
        		//this.dsGet.setColumn(0, "rfctTrgtYn", "N");
        		//this.dsGet.setColumn(0, "taxfrTrgtYn", "N");
        		this.divForm.form.Div00.form.edtCtrNo.readonly = false;//카운터번호 항목

        	} else {

        		this.cfnSearch();
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	// 기본값 세팅
        	var curYmd = this.gfnGetDate();
        	this.evntYm = curYmd.substr(0,6);
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
        // 	console.log('cfnClose');
        // 	//부모창 검색 조회
        //  	var sWinId = this.objApp.gdsOpenMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, this.getOwnerFrame().form.fvMenuId.substring(0, 8), this.FRAME_MENUCOLUMNS.winId);
        //  	var objForm = this.objApp.gvFrsWork.all[sWinId];
        // 	objForm.form.divWork.form.cfnSearch(1);
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function()
        {

        	if(this.dsSearch.getRowCount() > 0){
        		this.dsSearch.clearData();
        	}

        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "ctrNo", this.ctrNo);
        	this.dsSearch.setColumn(0, "evntYm", this.evntYm);

        	var strSvcId    = "search";
        	var strSvcUrl   = "evntCtrInfoMng/selectEvntCtrInfoMngPopUpInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsGet=dsGet";
        	var strArg      = "";
        	//var strArg      = "id=" + this.ctrNo;
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

        // 데이터 저장
        this.saveTransaction = function()
        {

        // 	var vUseIpbtEndYmd = this.divForm.form.Div00.form.calUseIpbtEndYmd.value;
        // 	//행사년월 setting
         	//this.dsGet.setColumn(0, "evntYm", vUseIpbtEndYmd.substr(0,6));

        	var strSvcId    = "save";
        	var strSvcUrl   = "evntCtrInfoMng/saveEvntCtrInfoMngPopUpStrg.do";
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
        		case "search":
        			break;
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
        	//var vUseIpbtEndYmd = this.divForm.form.Div00.form.calUseIpbtEndYmd.value;
        	//행사년월 setting
        	//this.dsGet.setColumn(0, "evntYm", vUseIpbtEndYmd.substr(0,6));
        	this.dsGet.setColumn(0, "evntYm", this.evntYm);

        	var oRtn = JSON.parse(sRtn);
        	if(sPopupId == "save") {
        		if(oRtn.result == "Y") {
        			this.saveTransaction();
        		}
        	}
        	else if(sPopupId == "saveAfter") {
        		var arr = {"saveFlag" : "Y"};
        		this.close(JSON.stringify(arr));
        // 		var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        // 		this.gfnCloseMenu(cMenuId);
        // 		this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        	}
        };


        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /*===================================================================================================*
         * 저장버튼 클릭
        *====================================================================================================*/
        this.divForm_divPopBtn_btnSave_onclick = function(obj,e)
        {

        	// 카운터번호
        	if(this.gfnIsNull(this.divForm.form.Div00.form.edtCtrNo.value)){
        		this.divForm.form.Div00.form.edtCtrNo.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["[ 카운터번호 ] \n"]);
        		return false;
        	}

        	// 카운터명
        	if(this.gfnIsNull(this.divForm.form.Div00.form.edtCtrNm.value)){
        		this.divForm.form.Div00.form.edtCtrNm.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["[ 카운터명 ] \n"]);
        		return false;
        	}

        	// 지역
        	if(this.gfnIsNull(this.divForm.form.Div00.form.cmbRgnSeCd.value)){
        		this.divForm.form.Div00.form.cmbRgnSeCd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["[ 지역 ] \n"]);
        		return false;
        	}

        	// 사용불가 시작일자
        // 	if(this.gfnIsNull(this.divForm.form.Div00.form.calUseIpbtBgngYmd.value)){
        // 		this.divForm.form.Div00.form.calUseIpbtBgngYmd.setFocus();
        // 		this.gfnAlertMsg("msg", "MSG_009", ["[ 사용불가 시작일자 ] \n"]);
        // 		return false;
        // 	}
        //
        // 	// 사용불가 종료일자
        // 	if(this.gfnIsNull(this.divForm.form.Div00.form.calUseIpbtEndYmd.value)){
        // 		this.divForm.form.Div00.form.calUseIpbtEndYmd.setFocus();
        // 		this.gfnAlertMsg("msg", "MSG_009", ["[ 사용불가 종료일자 ] \n"]);
        // 		return false;
        // 	}

        	if(this.gfnDsIsUpdated(this.dsGet) != true) {
        		this.gfnAlertMsg("msg", "MSG_004");
        	} else {
        		if(this.gfnDsIsValidated(this.validateColumn)) {
        			this.gfnConfirmMsg("save", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        		}
        	}
        };

        // this.divForm_Div00_cmbCtrgType_onitemchanged = function(obj:nexacro.Combo,e:nexacro.ItemChangeEventInfo)
        // {
        // 	this.dsGet.setColumn(0, "ctrtTypeNm", e.posttext);
        // };

        /*===================================================================================================*
         * 닫기버튼 클릭
        *====================================================================================================*/
        this.divForm_divPopBtn_btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div00.form.cmbRgnSeCd.addEventHandler("onitemchanged",this.divForm_Div00_cmbCtrgType_onitemchanged,this);
            this.divForm.form.divPopBtn.form.btnSave.addEventHandler("onclick",this.divForm_divPopBtn_btnSave_onclick,this);
            this.divForm.form.divPopBtn.form.btnClose.addEventHandler("onclick",this.divForm_divPopBtn_btnClose_onclick,this);
        };
        this.loadIncludeScript("LIF081P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
