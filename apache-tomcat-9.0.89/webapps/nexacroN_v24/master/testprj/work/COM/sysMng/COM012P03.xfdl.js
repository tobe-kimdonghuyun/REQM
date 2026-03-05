(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM012P03");
            this.set_titletext("알림 메세지 템플릿 관리");
            this.set_scrollbartype("none none");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,840);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"ntfcTmpId\" type=\"STRING\" size=\"256\"/><Column id=\"ntfcTmpNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntfcTmpTy\" type=\"STRING\" size=\"256\"/><Column id=\"ntfcTmpCn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNtfcTmpTy", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","100%","700",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
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
            obj.set_text("등록자명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtUserNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("템플릿유형");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbNtfcTmpTy\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02_","10.00","98","100%","400",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"txtNtfcTmpCn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoUseYn","51","580","280","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div00_form_rdoUseYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoUseYn_innerdataset", obj);
            divForm_form_Div00_form_rdoUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoUseYn_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoUseYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("템플릿ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtNtfcTmpId","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("14");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtNtfcTmpId\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("16");
            obj.set_text("템플릿명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtNtfcTmpNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("17");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02_00","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtNtfcTmpNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("19");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100%","400",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan02_\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan04_00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_01_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new TextArea("txtNtfcTmpCn","0","365","100%","321",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("21");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmbNtfcTmpTy","788.00","145","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("20");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsNtfcTmpTy");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0",null,"100%","60",null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","457.00","30","120","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            this.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
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
                p.staLabel00.set_text("등록자명");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.edtUserNm.set_taborder("2");
                p.edtUserNm.set_readonly("true");
                p.edtUserNm.move("10.00","158","100%","40",null,null);

                p.pan00_01.set_taborder("3");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","300","86",null,null);

                p.staLabel00_01.set_taborder("4");
                p.staLabel00_01.set_text("템플릿유형");
                p.staLabel00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.pan00_02.set_taborder("5");
                p.pan00_02.set_type("vertical");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.set_minwidth("");
                p.pan00_02.move("10.00","98","300","86",null,null);

                p.staLabel03_00.set_taborder("6");
                p.staLabel03_00.set_text("내용");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.pan02_.set_taborder("7");
                p.pan02_.set_type("vertical");
                p.pan02_.set_flexgrow("1");
                p.pan02_.move("10.00","98","100%","400",null,null);

                p.staLabel05_00_00.set_taborder("9");
                p.staLabel05_00_00.set_text("사용여부");
                p.staLabel05_00_00.set_cssclass("sta_WF_Label");
                p.staLabel05_00_00.move("10","98","100%","46",null,null);

                p.rdoUseYn.set_taborder("10");
                p.rdoUseYn.set_fittocontents("width");
                p.rdoUseYn.set_direction("vertical");
                p.rdoUseYn.set_innerdataset(divForm_form_Div00_form_rdoUseYn_innerdataset);
                p.rdoUseYn.set_codecolumn("codecolumn");
                p.rdoUseYn.set_datacolumn("datacolumn");
                p.rdoUseYn.set_value("0");
                p.rdoUseYn.set_index("0");
                p.rdoUseYn.move("51","580","280","40",null,null);

                p.pan04_01_00.set_taborder("11");
                p.pan04_01_00.set_type("vertical");
                p.pan04_01_00.set_flexgrow("1");
                p.pan04_01_00.move("10.00","98","300","86",null,null);

                p.staLabel00_00.set_taborder("13");
                p.staLabel00_00.set_text("템플릿ID");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.edtNtfcTmpId.set_taborder("14");
                p.edtNtfcTmpId.set_readonly("false");
                p.edtNtfcTmpId.move("10.00","158","100%","40",null,null);

                p.pan00_01_00.set_taborder("15");
                p.pan00_01_00.set_type("vertical");
                p.pan00_01_00.set_flexgrow("1");
                p.pan00_01_00.set_minwidth("");
                p.pan00_01_00.move("10.00","98","300","86",null,null);

                p.staLabel00_01_00.set_taborder("16");
                p.staLabel00_01_00.set_text("템플릿명");
                p.staLabel00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel00_01_00.move("10","98","100%","46",null,null);

                p.edtNtfcTmpNm.set_taborder("17");
                p.edtNtfcTmpNm.set_readonly("false");
                p.edtNtfcTmpNm.move("10.00","158","100%","40",null,null);

                p.pan00_02_00.set_taborder("18");
                p.pan00_02_00.set_type("vertical");
                p.pan00_02_00.set_flexgrow("1");
                p.pan00_02_00.set_minwidth("");
                p.pan00_02_00.move("10.00","98","300","86",null,null);

                p.pan00_00.set_taborder("19");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_verticalgap("0");
                p.pan00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.move("0","60","100.00%","96",null,null);

                p.pan02.set_taborder("8");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100%","400",null,null);

                p.pan04_00.set_taborder("12");
                p.pan04_00.set_horizontalgap("20");
                p.pan04_00.set_flexcrossaxiswrapalign("start");
                p.pan04_00.set_flexwrap("wrap");
                p.pan04_00.set_fittocontents("height");
                p.pan04_00.set_verticalgap("0");
                p.pan04_00.set_spacing("0px 20px 10px 20px");
                p.pan04_00.set_cssclass("pal_WF_DtlBg");
                p.pan04_00.move("0","60","100.00%","96",null,null);

                p.txtNtfcTmpCn.set_taborder("21");
                p.txtNtfcTmpCn.move("0","365","100%","321",null,null);

                p.cmbNtfcTmpTy.set_taborder("20");
                p.cmbNtfcTmpTy.set_flexgrow("1");
                p.cmbNtfcTmpTy.set_innerdataset("dsNtfcTmpTy");
                p.cmbNtfcTmpTy.set_codecolumn("cdId");
                p.cmbNtfcTmpTy.set_datacolumn("cdNm");
                p.cmbNtfcTmpTy.set_text("선택");
                p.cmbNtfcTmpTy.set_value("");
                p.cmbNtfcTmpTy.set_index("0");
                p.cmbNtfcTmpTy.move("788.00","145","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexwrap("wrap");
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
            obj.set_flexcrossaxisalign("center");
            obj.set_flexwrap("wrap");
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
                p.Div00.set_flexgrow("1");
                p.Div00.move("0","0","100%","700",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("horizontal");
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
            obj.set_verticalgap("20");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSave.set_taborder("1");
                p.btnSave.set_text("확인");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.move("457.00","30","120","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
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
            obj.set_horizontalgap("10");
            this.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1000,840,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("알림 메세지 템플릿 관리");
                p.set_scrollbartype("none none");
                p.set_scrolltype("none");

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.move("0","0",null,null,"0","60");

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0",null,"100%","60",null,"0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","0",null,null,"0","60");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div00.form.edtUserNm","value","dsGet","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div00.form.cmbNtfcTmpTy","value","dsGet","ntfcTmpTy");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div00.form.edtNtfcTmpId","value","dsGet","ntfcTmpId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div00.form.edtNtfcTmpNm","value","dsGet","ntfcTmpNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div00.form.txtNtfcTmpCn","value","dsGet","ntfcTmpCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div00.form.rdoUseYn","value","dsGet","useYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM012P03.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	COM012P03.xfdl
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

        this.validateColumn = [];

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();

        	this.validateColumn.push({"title" : "템플릿유형", "com": this.divForm.form.Div00.form.cmbNtfcTmpTy});
        	this.validateColumn.push({"title" : "템플릿ID", "com": this.divForm.form.Div00.form.edtNtfcTmpId});
        	this.validateColumn.push({"title" : "템플릿명", "com": this.divForm.form.Div00.form.edtNtfcTmpNm});
        	this.validateColumn.push({"title" : "내용", "com": this.divForm.form.Div00.form.txtNtfcTmpCn});

        	if(!this.gfnIsNull(this.getOwnerFrame().ntfcTmpId)) {
        		this.ntfcTmpId = this.getOwnerFrame().ntfcTmpId;
        		this.cfnSearch();
        	} else {
        		this.dsGet.addRow();
        		this.dsGet.setColumn(0, "userId", this.objApp.gdsUser.getColumn(0, "userId"));
        		this.dsGet.setColumn(0, "userNm", this.objApp.gdsUser.getColumn(0, "userNm"));
        		this.dsGet.setColumn(0, "useYn", "Y");
        	}
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

        this.cfnClose = function ()
        {
        	this.close();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "sysMng/notiTxtTmpInfoInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet";
        	var strArg      = "id=" + this.ntfcTmpId;
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
        	var strSvcId    = "save";
        	var strSvcUrl   = "sysMng/notiTxtTmpInfoStrg.do";
        	var inData      = "dsGet=dsGet:A";
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
        			this.gfnAlertMsg("save_after", "MSG_001", "", "msgCallback");
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
        			this.saveTransaction();
        		}
        	}
        	else if(sPopupId == "save_after") {
        		var arr = {"result" : "Y"};
        		this.close(JSON.stringify(arr));
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.gfnCmmCode("ntfcTmpTy", "dsNtfcTmpTy", "NTFC_TMP_TY", "S");
        	this.divForm.form.Div00.form.cmbNtfcTmpTy.index = 0;
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 저장
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div00.form.rdoUseYn.addEventHandler("onitemchanged",this.divForm_Div00_Radio00_onitemchanged,this);
            this.divForm.form.Div00.form.cmbNtfcTmpTy.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divPopBtn.form.btnSave.addEventHandler("onclick",this.divForm_divPopBtn_btnSave_onclick,this);
        };
        this.loadIncludeScript("COM012P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
