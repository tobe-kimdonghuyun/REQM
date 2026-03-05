(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM024P081");
            this.set_titletext("계정 변경 처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"eml\" type=\"STRING\" size=\"256\"/><Column id=\"userTelno\" type=\"STRING\" size=\"256\"/><Column id=\"userMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"mngrYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","20","10",null,null,"20","70",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","100.00%","338",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_01_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staUserId","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtUserId","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","10.00","98","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staUserId\"/><PanelItem id=\"PanelItem01\" componentid=\"edtUserId\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staCoNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","10.00","98","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCoNm\"/><PanelItem id=\"PanelItem02\" componentid=\"edtEml\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Pane01_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Pane01_02_00\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staMblTelno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Pane01_02","10.00","98","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staMblTelno\"/><PanelItem id=\"PanelItem01\" componentid=\"edtUserMblTelno\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtEml","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtUserMblTelno","497","171","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_format("###-{####}-####");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staUserNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_00","10.00","98","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staUserNm\"/><PanelItem id=\"PanelItem01\" componentid=\"edtUserNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staEml","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtAcntAutzrId","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01_01","10.00","98","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staEml\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAcntAutzrId\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staTelno","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("16");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Pane01_02_00","10.00","98","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTelno\"/><PanelItem id=\"PanelItem03\" componentid=\"edtTelno\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staMngrYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("18");
            obj.set_text("관리자여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel06_01","10.00","98","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staMngrYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoMngrYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staUseYn","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("20");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoUseYn","0.00","46","313","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div00_form_rdoUseYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoUseYn_innerdataset", obj);
            divForm_form_Div00_form_rdoUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoUseYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel06_02","10.00","98","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staUseYn\"/><PanelItem id=\"PanelItem03\" componentid=\"rdoUseYn\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel06","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("23");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel06_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel06_01_01\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel06_01_01","10.00","98","200","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Radio("rdoMngrYn","0.00","46","313","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("25");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div00_form_rdoMngrYn_innerdataset = new nexacro.NormalDataset("divForm_form_Div00_form_rdoMngrYn_innerdataset", obj);
            divForm_form_Div00_form_rdoMngrYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div00_form_rdoMngrYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtTelno","497","171","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_format("###-{###}-####");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("divPopBtn","20",null,null,"60","20","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

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
                p.Panel00.set_taborder("0");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.move("0","60","100.00%","96",null,null);

                p.staUserId.set_taborder("1");
                p.staUserId.set_text("아이디");
                p.staUserId.set_cssclass("sta_WF_Label");
                p.staUserId.move("10","98","100%","46",null,null);

                p.edtUserId.set_taborder("2");
                p.edtUserId.set_readonly("true");
                p.edtUserId.move("10.00","158","100%","40",null,null);

                p.Panel00_01.set_taborder("3");
                p.Panel00_01.set_type("vertical");
                p.Panel00_01.set_flexgrow("1");
                p.Panel00_01.move("10.00","98","200","86",null,null);

                p.staCoNm.set_taborder("4");
                p.staCoNm.set_text("회사명");
                p.staCoNm.set_cssclass("sta_WF_Label");
                p.staCoNm.move("10","98","100%","46",null,null);

                p.Panel01_01.set_taborder("5");
                p.Panel01_01.set_type("vertical");
                p.Panel01_01.set_flexgrow("1");
                p.Panel01_01.move("10.00","98","200","86",null,null);

                p.Panel01.set_taborder("6");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.set_flexcrossaxiswrapalign("start");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_verticalgap("0");
                p.Panel01.set_spacing("0px 20px 10px 20px");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.set_flexshrink("1");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("0","60","100.00%","96",null,null);

                p.staMblTelno.set_taborder("7");
                p.staMblTelno.set_text("휴대전화번호");
                p.staMblTelno.set_cssclass("sta_WF_Label");
                p.staMblTelno.move("10","98","100%","46",null,null);

                p.Pane01_02.set_taborder("8");
                p.Pane01_02.set_type("vertical");
                p.Pane01_02.set_flexgrow("1");
                p.Pane01_02.move("10.00","98","200","86",null,null);

                p.edtEml.set_taborder("9");
                p.edtEml.set_readonly("true");
                p.edtEml.move("10.00","158","100%","40",null,null);

                p.edtUserMblTelno.set_taborder("26");
                p.edtUserMblTelno.set_readonly("true");
                p.edtUserMblTelno.set_type("string");
                p.edtUserMblTelno.set_format("###-{####}-####");
                p.edtUserMblTelno.move("497","171","100%","40",null,null);

                p.staUserNm.set_taborder("10");
                p.staUserNm.set_text("성명");
                p.staUserNm.set_cssclass("sta_WF_Label");
                p.staUserNm.move("10","98","100%","46",null,null);

                p.edtUserNm.set_taborder("11");
                p.edtUserNm.set_readonly("true");
                p.edtUserNm.move("10.00","158","100%","40",null,null);

                p.Panel00_01_00.set_taborder("12");
                p.Panel00_01_00.set_type("vertical");
                p.Panel00_01_00.set_flexgrow("1");
                p.Panel00_01_00.move("10.00","98","200","86",null,null);

                p.staEml.set_taborder("13");
                p.staEml.set_text("이메일");
                p.staEml.set_cssclass("sta_WF_Label");
                p.staEml.move("10","98","100%","46",null,null);

                p.edtAcntAutzrId.set_taborder("14");
                p.edtAcntAutzrId.set_readonly("true");
                p.edtAcntAutzrId.move("10.00","158","100%","40",null,null);

                p.Panel00_01_01.set_taborder("15");
                p.Panel00_01_01.set_type("vertical");
                p.Panel00_01_01.set_flexgrow("1");
                p.Panel00_01_01.move("10.00","98","200","86",null,null);

                p.staTelno.set_taborder("16");
                p.staTelno.set_text("전화번호");
                p.staTelno.set_cssclass("sta_WF_Label");
                p.staTelno.move("10","98","100%","46",null,null);

                p.Pane01_02_00.set_taborder("17");
                p.Pane01_02_00.set_type("vertical");
                p.Pane01_02_00.set_flexgrow("1");
                p.Pane01_02_00.move("10.00","98","200","86",null,null);

                p.staMngrYn.set_taborder("18");
                p.staMngrYn.set_text("관리자여부");
                p.staMngrYn.set_cssclass("sta_WF_Label");
                p.staMngrYn.move("10","98","100%","46",null,null);

                p.Panel06_01.set_taborder("19");
                p.Panel06_01.set_type("vertical");
                p.Panel06_01.set_flexgrow("1");
                p.Panel06_01.set_visible("false");
                p.Panel06_01.set_minwidth("");
                p.Panel06_01.move("10.00","98","200","86",null,null);

                p.staUseYn.set_taborder("20");
                p.staUseYn.set_text("사용여부");
                p.staUseYn.set_cssclass("sta_WF_Label");
                p.staUseYn.move("10","98","100%","46",null,null);

                p.rdoUseYn.set_taborder("21");
                p.rdoUseYn.set_innerdataset(divForm_form_Div00_form_rdoUseYn_innerdataset);
                p.rdoUseYn.set_codecolumn("codecolumn");
                p.rdoUseYn.set_datacolumn("datacolumn");
                p.rdoUseYn.set_direction("vertical");
                p.rdoUseYn.set_fittocontents("width");
                p.rdoUseYn.set_value("");
                p.rdoUseYn.move("0.00","46","313","40",null,null);

                p.Panel06_02.set_taborder("22");
                p.Panel06_02.set_type("vertical");
                p.Panel06_02.set_flexgrow("1");
                p.Panel06_02.set_minwidth("");
                p.Panel06_02.move("10.00","98","200","86",null,null);

                p.Panel06.set_taborder("23");
                p.Panel06.set_horizontalgap("20");
                p.Panel06.set_flexcrossaxiswrapalign("start");
                p.Panel06.set_flexwrap("wrap");
                p.Panel06.set_fittocontents("height");
                p.Panel06.set_verticalgap("0");
                p.Panel06.set_spacing("0px 20px 10px 20px");
                p.Panel06.set_cssclass("pal_WF_DtlBg");
                p.Panel06.set_type("horizontal");
                p.Panel06.move("0","60","100.00%","96",null,null);

                p.Panel06_01_01.set_taborder("24");
                p.Panel06_01_01.set_type("vertical");
                p.Panel06_01_01.set_flexgrow("1");
                p.Panel06_01_01.set_minwidth("");
                p.Panel06_01_01.move("10.00","98","200","86",null,null);

                p.rdoMngrYn.set_taborder("25");
                p.rdoMngrYn.set_innerdataset(divForm_form_Div00_form_rdoMngrYn_innerdataset);
                p.rdoMngrYn.set_codecolumn("codecolumn");
                p.rdoMngrYn.set_datacolumn("datacolumn");
                p.rdoMngrYn.set_direction("vertical");
                p.rdoMngrYn.set_fittocontents("width");
                p.rdoMngrYn.set_value("");
                p.rdoMngrYn.move("0.00","46","313","40",null,null);

                p.edtTelno.set_taborder("27");
                p.edtTelno.set_readonly("true");
                p.edtTelno.set_type("string");
                p.edtTelno.set_format("###-{###}-####");
                p.edtTelno.move("497","171","100%","40",null,null);
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
                p.Panel00.set_type("horizontal");
                p.Panel00.set_spacing("0px 10px 10px 10px");
                p.Panel00.move("0","56.713","100.00%","193",null,null);

                p.Panel01.set_spacing("0px 10px 10px 10px");
                p.Panel01.set_type("horizontal");
                p.Panel01.move("0","60","100.00%","231",null,null);
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
                p.Div00.set_maxheight("");
                p.Div00.move("0","0","100.00%","338",null,null);
            	}
            );
            obj.set_verticalgap("20");
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
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_00.set_taborder("0");
                p.Button00_00.set_text("확인");
                p.Button00_00.set_cssclass("btn_WF_Yes");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("457.00","30","100","40",null,null);
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
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,450,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("계정 변경 처리");

                p.divGuide.set_taborder("0");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.move("20","10",null,null,"20","70");

                p.divPopBtn.set_taborder("2");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("20",null,null,"60","20","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div00.form.edtUserId","value","dsGet","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div00.form.edtUserNm","value","dsGet","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div00.form.edtAcntAutzrId","value","dsGet","eml");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div00.form.edtEml","value","dsGet","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div00.form.rdoUseYn","value","dsGet","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div00.form.rdoEmlRcptnYn","value","dsGet","emlRcptnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div00.form.rdoSmsRcptnPrgrsYn","value","dsGet","smsRcptnPrgrsYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div00.form.rdoSmsRcptnNewYn","value","dsGet","smsRcptnNewYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div00.form.rdoSmsRcptnAcntYn","value","dsGet","smsRcptnAcntYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.Div00.form.rdoIdAplyType1","value","dsGet","userTat1Yn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divForm.form.Div00.form.rdoIdAplyType2","value","dsGet","userTat2Yn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divForm.form.Div00.form.rdoMvmnRgnYn","value","dsGet","mvmnRgnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divForm.form.Div00.form.rdoHireHpeYn","value","dsGet","hireHpeYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divForm.form.Div00.form.rdoCpatcoEmpYn","value","dsGet","cpatcoEmpYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divForm.form.Div00.form.rdoIiacEmpYn","value","dsGet","iiacEmpYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divForm.form.Div00.form.rdoPrmsSalsYn","value","dsGet","prmsSalsYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divForm.form.Div00.form.rdoEvntFcltYn","value","dsGet","evntFcltYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divForm.form.Div00.form.rdoLbsvcEtcYn","value","dsGet","lbsvcEtcYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divForm.form.Div00.form.rdoDelTrgtYn","value","dsGet","delTrgtYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divForm.form.Div00.form.edtRfslDt","value","dsGet","rfslDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divForm.form.Div00.form.edtDelTrgtRegDt","value","dsGet","delTrgtRegDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divForm.form.Div00.form.edtRefwEblcPrcsDt","value","dsGet","refwEblcPrcsDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divEdtPop00.form.edtCoNm","value","dsGet","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","edtIp","value","dsGet","shrtx8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div00.form.rdoMngrYn","value","dsGet","mngrYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div00.form.edtUserMblTelno","value","dsGet","userMblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div00.form.edtTelno","value","dsGet","userTelno");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM024P081.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	test.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/11/12
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/12			조규완					최초생성
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
        	if(this.opener) {
        		this.param = {
        			"id" : this.getOwnerFrame().userId,
        		}
        	} else {
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        this.cfnClose = function() {
         	var sWinId = this.objApp.gdsOpenMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, cMenuId.substring(0, 14), this.FRAME_MENUCOLUMNS.winId);
         	var objForm = this.objApp.gvFrsWork.all[sWinId];
        	objForm.form.divWork.form.cfnSearch(1);
        	this.close();
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.selectTransaction = function()
        {
        	var strSvcId    = "select";
        	var strSvcUrl   = "sysMng/chgTrgtAcntInfoInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet";
        	var strArg      = "id=" + this.param.id;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "sysMng/chgTrgtAcntInfoStrg.do";
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
        			var telno = this.dsGet.getColumn(0, "userTelno");
        			if (telno.substr(0, 2) == "02") {
        				this.divForm.form.Div00.form.edtTelno.format = "##-{####}-####";
        			}
        			break;
        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("save_complete", gvRetMsg, null, "msgCallback");
        			if(this.opener) {
        				console.log('fdsafdsa');
        				this.close();
        			} else {
        				var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        				this.gfnCloseMenu(cMenuId);
        			}
        			break;
        	}
        };

        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);

        	if(sPopupId == "save") {
        		this.saveTransaction();
        	} else if(sPopupId == "save_complete") {
        		if(this.opener) {
        			this.close();
        		} else {
        			var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			this.gfnCloseMenu(cMenuId);
        		}
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	if(this.param != null && this.param.id != null && this.param.id != '') {
        		this.selectTransaction();
        	}
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divPopBtn_Button00_00_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("save", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divPopBtn_Button00_00_onclick,this);
        };
        this.loadIncludeScript("COM024P081.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
