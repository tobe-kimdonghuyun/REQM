(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM019P01");
            this.set_titletext("이용안내 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"utztnGdId\" type=\"STRING\" size=\"256\"/><Column id=\"taskSe\" type=\"STRING\" size=\"256\"/><Column id=\"taskTypeSe\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"ttl\" type=\"STRING\" size=\"256\"/><Column id=\"picCtInfoYn\" type=\"STRING\" size=\"256\"/><Column id=\"faqYn\" type=\"STRING\" size=\"256\"/><Column id=\"cn\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTaskSe", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTaskSe1", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuSe", this);
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"menuNm\">선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0","1000","630",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","100.00%","620",null,null,null,null,null,null,this.divForm.form);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem04\" componentid=\"pan00_02_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("업무분류");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbTaskSe\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("담당자전화번호여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02","10.00","98","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoPicCtInfoYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("FAQ여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoFaqYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoFaqYn","30","189","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div00_form_rdoFaqYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoFaqYn_innerdataset", obj);
            divForm_form_Div00_form_rdoFaqYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoFaqYn_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02_00","10.00","98","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoUseYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoPicCtInfoYn","30","189","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div00_form_rdoPicCtInfoYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoPicCtInfoYn_innerdataset", obj);
            divForm_form_Div00_form_rdoPicCtInfoYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoPicCtInfoYn_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoUseYn","30","189","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
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

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtTtl","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01_00","10.00","98","640","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("3");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtTtl\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan00_01_01\"/><PanelItem id=\"PanelItem00\" componentid=\"pan00_01_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmbTaskSe","589.00","72","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("16");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsTaskSe");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_01_00_00","10","98","50%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","102","528","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("18");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("EditDiv00","138","302","100%","380",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("19");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/editor/editor.xfdl");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_02_00_00","10.00","98","100%","430",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"EditDiv00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00","0","60","100.00%","430",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("21");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"pan00_01_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02_00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("22");
            obj.set_text("서비스분야");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmbTaskSe00","589.00","72","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("23");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsTaskSe1");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01_01","20","96","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbTaskSe00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("25");
            obj.set_text("메뉴");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmbTaskSe00_00","589.00","72","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("26");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsMenuSe");
            obj.set_codecolumn("MENU_ID");
            obj.set_datacolumn("MENU_NM");
            obj.set_displaynulltext("선택");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan00_01_01_00","20","96","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbTaskSe00_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0","divForm:10","100.00%","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","457.00","30","68","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.Div00.form.EditDiv00
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form.EditDiv00.form,function(p){});
            this.divForm.form.Div00.form.EditDiv00.form.addLayout(obj.name, obj);

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
                p.staLabel00.set_text("업무분류");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.pan00_01.set_taborder("2");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_fittocontents("height");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","200","86",null,null);

                p.staLabel00_01.set_taborder("3");
                p.staLabel00_01.set_text("담당자전화번호여부");
                p.staLabel00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.pan00_02.set_taborder("4");
                p.pan00_02.set_type("vertical");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.set_fittocontents("height");
                p.pan00_02.set_minwidth("");
                p.pan00_02.move("10.00","98","200","86",null,null);

                p.staLabel01_00.set_taborder("5");
                p.staLabel01_00.set_text("FAQ여부");
                p.staLabel01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.pan01_01.set_taborder("6");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.set_fittocontents("height");
                p.pan01_01.move("10.00","98","200","86",null,null);

                p.rdoFaqYn.set_taborder("7");
                p.rdoFaqYn.set_fittocontents("width");
                p.rdoFaqYn.set_direction("vertical");
                p.rdoFaqYn.set_innerdataset(divForm_form_Div00_form_rdoFaqYn_innerdataset);
                p.rdoFaqYn.set_codecolumn("codecolumn");
                p.rdoFaqYn.set_datacolumn("datacolumn");
                p.rdoFaqYn.set_value("0");
                p.rdoFaqYn.set_index("0");
                p.rdoFaqYn.move("30","189","100%","40",null,null);

                p.staLabel00_01_00.set_taborder("8");
                p.staLabel00_01_00.set_text("사용여부");
                p.staLabel00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel00_01_00.move("10","98","100%","46",null,null);

                p.pan00_02_00.set_taborder("9");
                p.pan00_02_00.set_type("vertical");
                p.pan00_02_00.set_flexgrow("1");
                p.pan00_02_00.set_fittocontents("height");
                p.pan00_02_00.set_minwidth("");
                p.pan00_02_00.move("10.00","98","200","86",null,null);

                p.rdoPicCtInfoYn.set_taborder("10");
                p.rdoPicCtInfoYn.set_fittocontents("width");
                p.rdoPicCtInfoYn.set_direction("vertical");
                p.rdoPicCtInfoYn.set_innerdataset(divForm_form_Div00_form_rdoPicCtInfoYn_innerdataset);
                p.rdoPicCtInfoYn.set_codecolumn("codecolumn");
                p.rdoPicCtInfoYn.set_datacolumn("datacolumn");
                p.rdoPicCtInfoYn.set_value("0");
                p.rdoPicCtInfoYn.set_index("0");
                p.rdoPicCtInfoYn.move("30","189","100%","40",null,null);

                p.rdoUseYn.set_taborder("11");
                p.rdoUseYn.set_fittocontents("width");
                p.rdoUseYn.set_direction("vertical");
                p.rdoUseYn.set_innerdataset(divForm_form_Div00_form_rdoUseYn_innerdataset);
                p.rdoUseYn.set_codecolumn("codecolumn");
                p.rdoUseYn.set_datacolumn("datacolumn");
                p.rdoUseYn.set_value("0");
                p.rdoUseYn.set_index("0");
                p.rdoUseYn.move("30","189","100%","40",null,null);

                p.staLabel00_00.set_taborder("12");
                p.staLabel00_00.set_text("제목");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.edtTtl.set_taborder("13");
                p.edtTtl.set_readonly("false");
                p.edtTtl.move("10.00","158","100%","40",null,null);

                p.pan00_01_00.set_taborder("14");
                p.pan00_01_00.set_type("vertical");
                p.pan00_01_00.set_flexgrow("3");
                p.pan00_01_00.set_fittocontents("height");
                p.pan00_01_00.set_minwidth("");
                p.pan00_01_00.move("10.00","98","640","86",null,null);

                p.pan00_00.set_taborder("15");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_verticalgap("0");
                p.pan00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.move("0","60","100.00%","96",null,null);

                p.cmbTaskSe.set_taborder("16");
                p.cmbTaskSe.set_flexgrow("1");
                p.cmbTaskSe.set_innerdataset("dsTaskSe");
                p.cmbTaskSe.set_codecolumn("cdId");
                p.cmbTaskSe.set_datacolumn("cdNm");
                p.cmbTaskSe.set_text("선택");
                p.cmbTaskSe.set_value("");
                p.cmbTaskSe.set_index("0");
                p.cmbTaskSe.move("589.00","72","100%","40",null,null);

                p.staLabel00_01_00_00.set_taborder("17");
                p.staLabel00_01_00_00.set_text("내용");
                p.staLabel00_01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_01_00_00.move("10","98","50%","46",null,null);

                p.Panel02_00.set_taborder("18");
                p.Panel02_00.move("102","528","100%","46",null,null);

                p.EditDiv00.set_taborder("19");
                p.EditDiv00.set_text("Div00");
                p.EditDiv00.set_url("work::COM/util/editor/editor.xfdl");
                p.EditDiv00.move("138","302","100%","380",null,null);

                p.pan00_02_00_00.set_taborder("20");
                p.pan00_02_00_00.set_type("vertical");
                p.pan00_02_00_00.set_flexgrow("1");
                p.pan00_02_00_00.set_fittocontents("height");
                p.pan00_02_00_00.set_minwidth("");
                p.pan00_02_00_00.move("10.00","98","100%","430",null,null);

                p.pan00_00_00.set_taborder("21");
                p.pan00_00_00.set_horizontalgap("20");
                p.pan00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00_00.set_flexwrap("wrap");
                p.pan00_00_00.set_fittocontents("height");
                p.pan00_00_00.set_verticalgap("0");
                p.pan00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_00.move("0","60","100.00%","430",null,null);

                p.staLabel00_02.set_taborder("22");
                p.staLabel00_02.set_text("서비스분야");
                p.staLabel00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02.move("10","98","100%","46",null,null);

                p.cmbTaskSe00.set_taborder("23");
                p.cmbTaskSe00.set_flexgrow("1");
                p.cmbTaskSe00.set_innerdataset("dsTaskSe1");
                p.cmbTaskSe00.set_codecolumn("cdId");
                p.cmbTaskSe00.set_datacolumn("cdNm");
                p.cmbTaskSe00.set_displaynulltext("선택");
                p.cmbTaskSe00.set_text("선택");
                p.cmbTaskSe00.set_value("");
                p.cmbTaskSe00.set_index("0");
                p.cmbTaskSe00.move("589.00","72","100%","40",null,null);

                p.pan00_01_01.set_taborder("24");
                p.pan00_01_01.set_type("vertical");
                p.pan00_01_01.set_flexgrow("1");
                p.pan00_01_01.set_fittocontents("height");
                p.pan00_01_01.set_minwidth("");
                p.pan00_01_01.move("20","96","200","86",null,null);

                p.staLabel00_02_00.set_taborder("25");
                p.staLabel00_02_00.set_text("메뉴");
                p.staLabel00_02_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00.move("10","98","100%","46",null,null);

                p.cmbTaskSe00_00.set_taborder("26");
                p.cmbTaskSe00_00.set_flexgrow("1");
                p.cmbTaskSe00_00.set_innerdataset("dsMenuSe");
                p.cmbTaskSe00_00.set_codecolumn("MENU_ID");
                p.cmbTaskSe00_00.set_datacolumn("MENU_NM");
                p.cmbTaskSe00_00.set_displaynulltext("선택");
                p.cmbTaskSe00_00.set_text("선택");
                p.cmbTaskSe00_00.set_value("");
                p.cmbTaskSe00_00.set_index("0");
                p.cmbTaskSe00_00.move("589.00","72","100%","40",null,null);

                p.pan00_01_01_00.set_taborder("27");
                p.pan00_01_01_00.set_type("vertical");
                p.pan00_01_01_00.set_flexgrow("1");
                p.pan00_01_01_00.set_fittocontents("height");
                p.pan00_01_01_00.set_visible("false");
                p.pan00_01_01_00.set_minwidth("");
                p.pan00_01_01_00.move("20","96","200","86",null,null);
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
                p.pan00.set_type("vertical");
                p.pan00.move("0","60","100.00%","355",null,null);

                p.pan00_00.move("0","60","100.00%","97",null,null);

                p.pan00_00_00.move("0","60","100.00%","341",null,null);
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
                p.Div00.move("0","0","100.00%","620",null,null);
            	}
            );
            obj.set_verticalgap("30");
            obj.set_type("vertical");
            obj.set_spacing("0px 20px 10px 20px");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.move("0","0","100%","793",null,null);
            	}
            );
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_verticalgap("30");
            obj.set_type("vertical");
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
                p.btnSave.set_fittocontents("width");
                p.btnSave.move("457.00","30","68","40",null,null);
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
            obj = new Layout("default","Desktop_screen,Phone_screen",1000,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("이용안내 관리");

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.move("0","0","1000","630",null,null);

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0","divForm:10","100.00%","60",null,null);
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
                p.divForm.set_fittocontents("none");
                p.divForm.set_formscrollbartype("default default");
                p.divForm.set_formscrolltype("both");
                p.divForm.move("0","0","100.00%",null,null,"70");

                p.divPopBtn.move("0",null,"100.00%","60",null,"0");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div00.form.cmbTaskSe","value","dsGet","taskSe");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div00.form.rdoPicCtInfoYn","value","dsGet","picCtInfoYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div00.form.rdoFaqYn","value","dsGet","faqYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div00.form.rdoUseYn","value","dsGet","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div00.form.edtTtl","value","dsGet","ttl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div00.form.cmbTaskSe00","value","dsGet","taskTypeSe");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div00.form.cmbTaskSe00_00","value","dsGet","menuId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::COM/util/editor/editor.xfdl");
        };
        
        // User Script
        this.registerScript("COM019P01.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	COM019P01.xfdl
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
        this.param;

        this.validateColumn = [];

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	if(this.opener)
        	{
        		this.param = {
        			"utztnGdId" : this.getOwnerFrame().utztnGdId
        		}
        	} else
        	{
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	this.fnInit();
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
        	var strSvcUrl   = "crtr/utztnGdInfoInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet";
        	var strArg      = "id=" + this.param.utztnGdId;
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

        this.defaultMenuSelect = function()
        {
        	var strSvcId    = "menuSelect";
        	var strSvcUrl   = "common/defaultMenuList.do";
        	var inData      = "";
        	var outData     = "dsMenuSe=dsMenuSe";
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


        this.gridSaveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "crtr/utztnGdInfoStrg.do";
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
        		case "cmmCode":

        			this.dsTaskSe.filter("uprCd == ''");
        			this.dsTaskSe1.copyData(this.dsTaskSe);
        			this.dsTaskSe1.filter("cdId == ''");

        			this.divForm.form.Div00.form.cmbTaskSe.index = 0;
        			this.divForm.form.Div00.form.cmbTaskSe00.index = 0;
        			break;
        		case "search":

        			this.dsTaskSe1.filter("uprCd == '"+this.dsGet.getColumn(0, "taskSe")+"'");
        			this.dsTaskSe1.insertRow(0);
        			this.dsTaskSe1.setColumn(0, "cdTypeId", "");
        			this.dsTaskSe1.setColumn(0, "cdId", "");
        			this.dsTaskSe1.setColumn(0, "cdNm", "선택");

        			var rowData = {
        				content: this.dsGet.getColumn(0, "cn")
        			};
        			this.divForm.form.Div00.form.EditDiv00.form.writeData(rowData);

        			if(this.dsGet.getColumn(0, "taskTypeSe") == "TSPMNU010") {
        				this.divForm.form.Div00.form.pan00_01_01_00.visible = true;
        			}

        			break;
        		case "save":
        			this.gfnAlertMsg("saveAfter", "MSG_001", "", "msgCallback");
        			break;
        		case "menuSelect":
        			this.dsMenuSe.filter("MENU_LVL != '2'");
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
        			this.gridSaveTransaction();
        		}
        	}
        	else if(sPopupId == "saveAfter") {
        		var arr = {"saveFlag" : "Y"};
        		this.close(JSON.stringify(arr));
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.formGetData = function(thisObj, allData) {
        	var content = JSON.parse(allData).CONTENT;
        	thisObj.dsGet.setColumn(0, "cn", content);

        	if(thisObj.gfnDsIsUpdated(thisObj.dsGet) != true) {
        		thisObj.gfnAlertMsg("msg", "MSG_004");
        	} else {
        		if(thisObj.gfnDsIsValidated(thisObj.validateColumn)) {
        			thisObj.gfnConfirmMsg("save", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        		}
        	}
        }



        this.fnInit = function()
        {
        	this.validateColumn.push({"title" : "업무유형", "com": this.divForm.form.Div00.form.cmbTaskSe});
        	this.validateColumn.push({"title" : "제목", "com": this.divForm.form.Div00.form.edtTtl});

        	this.gfnCmmCode("cmmCode", "dsTaskSe", "CTGRY_CD", "S");

        	this.defaultMenuSelect();


        	var obj = {
        		filebrowserImageUploadUrl: '/common/insertImageCk.do', // 파일 업로드를 처리 할 경로 설정.
        		height: 300,
        		width: 800,
        		toolbar: [['Source'], ['Bold', 'Italic', 'Underline', 'Strike'], ['Image', 'Table', 'HorizontalRule'], ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent'],	['Font', 'FontSize'], ['TextColor', 'BGColor']],
        		removePlugins: 'resize',
        	};

        	this.divForm.form.Div00.form.EditDiv00.form.fnInit(obj);
        };

        this.tranInit = function() {
        	if(this.param != null && this.param.utztnGdId != null && this.param.utztnGdId != '')
        	{
        		this.cfnSearch();
        	} else {
        		this.dsGet.addRow();
        		this.dsGet.setColumn(0, "picCtInfoYn", "Y");
        		this.dsGet.setColumn(0, "faqYn", "Y");
        		this.dsGet.setColumn(0, "useYn", "Y");
        	}
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 저장
        this.divForm_divPopBtn_btnSave_onclick = function(obj,e)
        {
        	this.divForm.form.Div00.form.EditDiv00.form.readData(this.formGetData, this);
        };

        this.divForm_divSch_Combo01_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != '') {
        		//this.dsTaskSe1.copyData(this.dsTaskSe);
        		this.dsTaskSe1.filter("uprCd == '"+e.postvalue+"'");
        		this.dsTaskSe1.insertRow(0);
        		this.dsTaskSe1.setColumn(0, "cdTypeId", "");
        		this.dsTaskSe1.setColumn(0, "cdId", "");
        		this.dsTaskSe1.setColumn(0, "cdNm", "선택");
        	} else {
        		this.dsTaskSe1.filter("cdId == ''");
        	}

        	this.divForm.form.Div00.form.cmbTaskSe00.index = 0;
        	if(e.postvalue != 'TSPMNU') {
        		this.divForm.form.Div00.form.pan00_01_01_00.visible = false;
        		this.dsGet.setColumn(0, "menuId", "");
        	}
        };

        this.divForm_Div00_cmbTaskSe00_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == 'TSPMNU010') {
        		this.divForm.form.Div00.form.pan00_01_01_00.visible = true;
        	} else {
        		this.divForm.form.Div00.form.pan00_01_01_00.visible = false;
        		this.dsGet.setColumn(0, "menuId", "");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div00.form.rdoFaqYn.addEventHandler("onitemchanged",this.divForm_Div00_Radio00_onitemchanged,this);
            this.divForm.form.Div00.form.rdoPicCtInfoYn.addEventHandler("onitemchanged",this.divForm_Div00_Radio00_onitemchanged,this);
            this.divForm.form.Div00.form.rdoUseYn.addEventHandler("onitemchanged",this.divForm_Div00_Radio00_onitemchanged,this);
            this.divForm.form.Div00.form.cmbTaskSe.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.Div00.form.cmbTaskSe00.addEventHandler("onitemchanged",this.divForm_Div00_cmbTaskSe00_onitemchanged,this);
            this.divPopBtn.form.btnSave.addEventHandler("onclick",this.divForm_divPopBtn_btnSave_onclick,this);
        };
        this.loadIncludeScript("COM019P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
