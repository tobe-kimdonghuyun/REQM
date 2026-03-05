(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM018P04");
            this.set_titletext("현황도 섹터정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo1", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo2", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"stsmapId\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapSctrId\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapSctrNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapSctrArea\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapTy\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapArea\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapPstn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"currentPageNo\">1</Col><Col id=\"recordCountPerPage\">99999</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"rno\" type=\"INT\" size=\"256\"/><Column id=\"stsmapId\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapTy\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapTyNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapArea\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapAreaNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapPstn\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapPstnNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapAddr\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapZip\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapBno\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapBldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapFlr\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapExpln\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo3", this);
            obj._setContents("<ColumnInfo><Column id=\"stsmapId\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSectorList", this);
            obj._setContents("<ColumnInfo><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapSctrArea\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapSctrId\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapSctrNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMetaList", this);
            obj._setContents("<ColumnInfo><Column id=\"rno\" type=\"INT\" size=\"256\"/><Column id=\"stsmapSpceInfoId\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapId\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapTy\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapTyNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapPstn\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapPstnNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapArea\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapAreaNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapSctrId\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapSctrNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapBno\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapBldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapFlr\" type=\"STRING\" size=\"256\"/><Column id=\"ltlndNm\" type=\"STRING\" size=\"256\"/><Column id=\"ltlndAddr\" type=\"STRING\" size=\"256\"/><Column id=\"ltlndDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"ltlndZip\" type=\"STRING\" size=\"256\"/><Column id=\"rentPsbltySpceYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"prps\" type=\"STRING\" size=\"256\"/><Column id=\"prpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"ar\" type=\"STRING\" size=\"256\"/><Column id=\"rmNo\" type=\"STRING\" size=\"256\"/><Column id=\"dtyDeptId\" type=\"STRING\" size=\"256\"/><Column id=\"dtyDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMetaPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMetaSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapSctrNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapBldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapSctrId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">99999</Col><Col id=\"currentPageNo\">1</Col><Col id=\"stsmapSctrNm\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","20","0",null,"1000","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","100.00%","1000",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","70%","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"ComGroup\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","300","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_spacing("10px 0p;x 0px 0px");
            obj.set_flexcrossaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("div00","206","345","500","355",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_text("영역");
            obj.set_background("#ececec");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","0","0","100%","100%",null,null,null,null,null,null,this.divForm.form.Div01.form.div00.form);
            obj.set_taborder("0");
            this.divForm.form.Div01.form.div00.addChild(obj.name, obj);

            obj = new Combo("Combo01","788.00","145","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div01_form_Combo01_innerdataset = new nexacro.NormalDataset("divForm_form_Div01_form_Combo01_innerdataset", obj);
            divForm_form_Div01_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">건물</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">토지</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div01_form_Combo01_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("ComGroup","606","293","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Combo01\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo02\"/><PanelItem id=\"PanelItem00\" componentid=\"Combo03\"/><PanelItem id=\"PanelItem04\" componentid=\"Combo04\"/><PanelItem id=\"PanelItem05\" componentid=\"Button00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo03","788.00","145","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCombo2");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo02","788.00","145","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsCombo1");
            obj.set_datacolumn("cdNm");
            obj.set_codecolumn("cdId");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","376",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("20");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"div00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","10","500","355",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_autofittype("col");
            obj.set_flexgrow("1");
            obj.set_binddataset("dsMetaList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"현황도명\"/><Cell col=\"1\" text=\"위치\"/><Cell col=\"2\" text=\"섹터명\"/><Cell col=\"3\" text=\"건물명\"/><Cell col=\"4\" text=\"호실&#13;&#10;번호\"/><Cell col=\"5\" cssclass=\"CellEnd\" text=\"임대가능&#13;&#10;여부\"/></Band><Band id=\"body\"><Cell text=\"bind:stsmapNm\"/><Cell col=\"1\" text=\"bind:stsmapPstnNm\"/><Cell col=\"2\" text=\"bind:stsmapSctrNm\"/><Cell col=\"3\" text=\"bind:stsmapBldgNm\"/><Cell col=\"4\" text=\"bind:rmNo\"/><Cell col=\"5\" cssclass=\"CellEnd\" text=\"expr:rentPsbltySpceYn == &apos;Y&apos; ? &apos;가능&apos; : &apos;불가능&apos;\"/></Band></Format></Formats>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_text("현황도명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem03\" componentid=\"edt03_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan03_02\"/><PanelItem id=\"PanelItem04\" componentid=\"pan03_03\"/><PanelItem id=\"PanelItem05\" componentid=\"pan03_04\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt03_01","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel03_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_text("섹터ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt03_02","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_02\"/><PanelItem id=\"PanelItem03\" componentid=\"edt03_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel03_03","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_text("현황도유형");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt03_03","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03_03","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_03\"/><PanelItem id=\"PanelItem03\" componentid=\"edt03_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel03_04","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_text("섹터명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt03_04","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03_04","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_04\"/><PanelItem id=\"PanelItem03\" componentid=\"edt03_04\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel04_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("24");
            obj.set_text("현황도위치");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt04_01","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("25");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("26");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04_01\"/><PanelItem id=\"PanelItem03\" componentid=\"edt04_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel04_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("27");
            obj.set_text("임대가능여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt04_02","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("28");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("29");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04_02\"/><PanelItem id=\"PanelItem03\" componentid=\"edt04_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel04_03","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("30");
            obj.set_text("용도");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt04_03","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("31");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04_03","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04_03\"/><PanelItem id=\"PanelItem03\" componentid=\"edt04_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel03_04_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("33");
            obj.set_text("면적");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt03_04_00","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("34");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04_04","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("35");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_04_00\"/><PanelItem id=\"PanelItem03\" componentid=\"edt03_04_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("36");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_02\"/><PanelItem id=\"PanelItem04\" componentid=\"pan04_03\"/><PanelItem id=\"PanelItem05\" componentid=\"pan04_04\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel05_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("37");
            obj.set_text("담당부서");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt05_01","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("38");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan05_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("39");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01\"/><PanelItem id=\"PanelItem03\" componentid=\"edt05_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan05_02","10.00","98","300","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("40");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan05_03","10.00","98","300","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("41");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan05_04","10.00","98","300","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("42");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan05","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("43");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan05_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan05_02\"/><PanelItem id=\"PanelItem04\" componentid=\"pan05_03\"/><PanelItem id=\"PanelItem05\" componentid=\"pan05_04\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabe06_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("44");
            obj.set_text("구조물ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt06_01","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("45");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan06_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("46");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabe06_01\"/><PanelItem id=\"PanelItem03\" componentid=\"edt06_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel06_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("47");
            obj.set_text("구조물명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt06_02","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("48");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan06_02","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("49");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_02\"/><PanelItem id=\"PanelItem03\" componentid=\"edt06_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel06_03","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("50");
            obj.set_text("레벨");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt06_03","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("51");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan06_03","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("52");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_03\"/><PanelItem id=\"PanelItem03\" componentid=\"edt06_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel06_04","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("53");
            obj.set_text("룸번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt06_04","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("54");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan06_04","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("55");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_04\"/><PanelItem id=\"PanelItem03\" componentid=\"edt06_04\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan06","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("56");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan06_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_02\"/><PanelItem id=\"PanelItem04\" componentid=\"pan06_03\"/><PanelItem id=\"PanelItem05\" componentid=\"pan06_04\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel07_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("57");
            obj.set_text("필지명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt07_01","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("58");
            obj.set_flexgrow("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan07_01","10.00","98","300","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("59");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel07_01\"/><PanelItem id=\"PanelItem03\" componentid=\"edt07_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan07_03","10.00","98","300","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("60");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan07","0","60","100.00%","147",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("61");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan07_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan05_01_00\"/><PanelItem id=\"PanelItem04\" componentid=\"pan07_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo04","788.00","145","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("62");
            obj.set_innerdataset("dsCombo3");
            obj.set_codecolumn("stsmapId");
            obj.set_datacolumn("stsmapNm");
            obj.set_displaynulltext("선택");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00","0.00","0","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("63");
            obj.set_text("필지주소");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divEdtPop","780.00","635","305","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("64");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"40","0",null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            obj.set_readonly("true");
            this.divForm.form.Div01.form.divEdtPop.addChild(obj.name, obj);

            obj = new Button("btnPop","Edit00:-40","0","40","40",null,null,null,null,null,null,this.divForm.form.Div01.form.divEdtPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divForm.form.Div01.form.divEdtPop.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","360","637","305","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("65");
            obj.set_flexgrow("2");
            obj.set_readonly("true");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("panAddress","200","641","100%","45",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("66");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divEdtPop\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00","0","46","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("67");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan05_01_00","20.00","0","980","136",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("68");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem03\" componentid=\"panAddress\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","400","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("69");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divGuide00","1600.00","145","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","20.00","205","34","34",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","64.00","205","34","34",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Static("sta00_00","20.00","255","375","50",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("2");
            obj.set_text("접혀있을때 class : btn_WF_ACPlus 로 접음");
            this.divGuide00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.Div01.form.div00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.WebBrowser00.set_taborder("0");
                p.WebBrowser00.move("0","0","100%","100%",null,null);
            	}
            );
            this.divForm.form.Div01.form.div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.div00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div01.form.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01.form.divEdtPop.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_cssclass("edt_WF_EdtSch");
                p.Edit00.set_readonly("true");
                p.Edit00.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("Edit00:-40","0","40","40",null,null);
            	}
            );
            this.divForm.form.Div01.form.divEdtPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divEdtPop.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div01.form.divEdtPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.Div01.form.divEdtPop.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan01_01.set_taborder("4");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.set_minwidth("");
                p.pan01_01.move("10.00","98","70%","86",null,null);

                p.staLabel00_00.set_taborder("0");
                p.staLabel00_00.set_text("유형");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.pan01_02.set_taborder("5");
                p.pan01_02.set_type("horizontal");
                p.pan01_02.set_horizontalgap("10");
                p.pan01_02.set_spacing("10px 0p;x 0px 0px");
                p.pan01_02.set_flexcrossaxisalign("end");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.set_minwidth("");
                p.pan01_02.move("10.00","98","300","1",null,null);

                p.pan01.set_taborder("6");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","97",null,null);

                p.div00.set_taborder("9");
                p.div00.set_text("영역");
                p.div00.set_background("#ececec");
                p.div00.set_flexgrow("1");
                p.div00.move("206","345","500","355",null,null);

                p.Combo01.set_taborder("1");
                p.Combo01.set_innerdataset(divForm_form_Div01_form_Combo01_innerdataset);
                p.Combo01.set_codecolumn("codecolumn");
                p.Combo01.set_datacolumn("datacolumn");
                p.Combo01.set_text("선택");
                p.Combo01.set_value("");
                p.Combo01.set_index("0");
                p.Combo01.move("788.00","145","100%","40",null,null);

                p.ComGroup.set_taborder("7");
                p.ComGroup.set_horizontalgap("10");
                p.ComGroup.move("606","293","100%","40",null,null);

                p.Combo03.set_taborder("3");
                p.Combo03.set_innerdataset("dsCombo2");
                p.Combo03.set_codecolumn("cdId");
                p.Combo03.set_datacolumn("cdNm");
                p.Combo03.set_displaynulltext("선택");
                p.Combo03.set_text("전체");
                p.Combo03.set_value("");
                p.Combo03.set_index("-1");
                p.Combo03.move("788.00","145","100%","40",null,null);

                p.Combo02.set_taborder("2");
                p.Combo02.set_innerdataset("dsCombo1");
                p.Combo02.set_datacolumn("cdNm");
                p.Combo02.set_codecolumn("cdId");
                p.Combo02.set_displaynulltext("선택");
                p.Combo02.set_text("");
                p.Combo02.set_value("");
                p.Combo02.set_index("-1");
                p.Combo02.move("788.00","145","100%","40",null,null);

                p.pan02.set_taborder("8");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("20");
                p.pan02.set_spacing("10px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.set_type("horizontal");
                p.pan02.move("0","60","100.00%","376",null,null);

                p.Grid00_00.set_taborder("10");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.set_flexgrow("1");
                p.Grid00_00.set_binddataset("dsMetaList");
                p.Grid00_00.move("0","10","500","355",null,null);

                p.staLabel03_01.set_taborder("11");
                p.staLabel03_01.set_text("현황도명");
                p.staLabel03_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01.move("10","98","100%","46",null,null);

                p.pan03_01.set_taborder("12");
                p.pan03_01.set_type("vertical");
                p.pan03_01.set_flexgrow("1");
                p.pan03_01.set_minwidth("");
                p.pan03_01.move("10.00","98","300","86",null,null);

                p.pan03.set_taborder("13");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","60","100.00%","97",null,null);

                p.edt03_01.set_taborder("14");
                p.edt03_01.set_flexgrow("1");
                p.edt03_01.set_readonly("true");
                p.edt03_01.set_maxwidth("");
                p.edt03_01.move("140.00","30","100%","40",null,null);

                p.staLabel03_02.set_taborder("15");
                p.staLabel03_02.set_text("섹터ID");
                p.staLabel03_02.set_cssclass("sta_WF_Label");
                p.staLabel03_02.move("10","98","100%","46",null,null);

                p.edt03_02.set_taborder("16");
                p.edt03_02.set_flexgrow("1");
                p.edt03_02.set_readonly("true");
                p.edt03_02.set_maxwidth("");
                p.edt03_02.move("140.00","30","100%","40",null,null);

                p.pan03_02.set_taborder("17");
                p.pan03_02.set_type("vertical");
                p.pan03_02.set_flexgrow("1");
                p.pan03_02.set_minwidth("");
                p.pan03_02.move("10.00","98","300","86",null,null);

                p.staLabel03_03.set_taborder("18");
                p.staLabel03_03.set_text("현황도유형");
                p.staLabel03_03.set_cssclass("sta_WF_Label");
                p.staLabel03_03.move("10","98","100%","46",null,null);

                p.edt03_03.set_taborder("19");
                p.edt03_03.set_flexgrow("1");
                p.edt03_03.set_readonly("true");
                p.edt03_03.set_maxwidth("");
                p.edt03_03.move("140.00","30","100%","40",null,null);

                p.pan03_03.set_taborder("20");
                p.pan03_03.set_type("vertical");
                p.pan03_03.set_flexgrow("1");
                p.pan03_03.set_minwidth("");
                p.pan03_03.move("10.00","98","300","86",null,null);

                p.staLabel03_04.set_taborder("21");
                p.staLabel03_04.set_text("섹터명");
                p.staLabel03_04.set_cssclass("sta_WF_Label");
                p.staLabel03_04.move("10","98","100%","46",null,null);

                p.edt03_04.set_taborder("22");
                p.edt03_04.set_flexgrow("1");
                p.edt03_04.set_readonly("true");
                p.edt03_04.set_maxwidth("");
                p.edt03_04.move("140.00","30","100%","40",null,null);

                p.pan03_04.set_taborder("23");
                p.pan03_04.set_type("vertical");
                p.pan03_04.set_flexgrow("1");
                p.pan03_04.set_minwidth("");
                p.pan03_04.move("10.00","98","300","86",null,null);

                p.staLabel04_01.set_taborder("24");
                p.staLabel04_01.set_text("현황도위치");
                p.staLabel04_01.set_cssclass("sta_WF_Label");
                p.staLabel04_01.move("10","98","100%","46",null,null);

                p.edt04_01.set_taborder("25");
                p.edt04_01.set_flexgrow("1");
                p.edt04_01.set_readonly("true");
                p.edt04_01.set_maxwidth("");
                p.edt04_01.move("140.00","30","100%","40",null,null);

                p.pan04_01.set_taborder("26");
                p.pan04_01.set_type("vertical");
                p.pan04_01.set_flexgrow("1");
                p.pan04_01.set_minwidth("");
                p.pan04_01.move("10.00","98","300","86",null,null);

                p.staLabel04_02.set_taborder("27");
                p.staLabel04_02.set_text("임대가능여부");
                p.staLabel04_02.set_cssclass("sta_WF_Label");
                p.staLabel04_02.move("10","98","100%","46",null,null);

                p.edt04_02.set_taborder("28");
                p.edt04_02.set_flexgrow("1");
                p.edt04_02.set_readonly("true");
                p.edt04_02.set_maxwidth("");
                p.edt04_02.move("140.00","30","100%","40",null,null);

                p.pan04_02.set_taborder("29");
                p.pan04_02.set_type("vertical");
                p.pan04_02.set_flexgrow("1");
                p.pan04_02.set_minwidth("");
                p.pan04_02.move("10.00","98","300","86",null,null);

                p.staLabel04_03.set_taborder("30");
                p.staLabel04_03.set_text("용도");
                p.staLabel04_03.set_cssclass("sta_WF_Label");
                p.staLabel04_03.move("10","98","100%","46",null,null);

                p.edt04_03.set_taborder("31");
                p.edt04_03.set_flexgrow("1");
                p.edt04_03.set_readonly("true");
                p.edt04_03.set_maxwidth("");
                p.edt04_03.move("140.00","30","100%","40",null,null);

                p.pan04_03.set_taborder("32");
                p.pan04_03.set_type("vertical");
                p.pan04_03.set_flexgrow("1");
                p.pan04_03.set_minwidth("");
                p.pan04_03.move("10.00","98","300","86",null,null);

                p.staLabel03_04_00.set_taborder("33");
                p.staLabel03_04_00.set_text("면적");
                p.staLabel03_04_00.set_cssclass("sta_WF_Label");
                p.staLabel03_04_00.move("10","98","100%","46",null,null);

                p.edt03_04_00.set_taborder("34");
                p.edt03_04_00.set_flexgrow("1");
                p.edt03_04_00.set_readonly("true");
                p.edt03_04_00.set_maxwidth("");
                p.edt03_04_00.move("140.00","30","100%","40",null,null);

                p.pan04_04.set_taborder("35");
                p.pan04_04.set_type("vertical");
                p.pan04_04.set_flexgrow("1");
                p.pan04_04.set_minwidth("");
                p.pan04_04.move("10.00","98","300","86",null,null);

                p.pan04.set_taborder("36");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.move("0","60","100.00%","97",null,null);

                p.staLabel05_01.set_taborder("37");
                p.staLabel05_01.set_text("담당부서");
                p.staLabel05_01.set_cssclass("sta_WF_Label");
                p.staLabel05_01.move("10","98","100%","46",null,null);

                p.edt05_01.set_taborder("38");
                p.edt05_01.set_flexgrow("1");
                p.edt05_01.set_readonly("true");
                p.edt05_01.set_maxwidth("");
                p.edt05_01.move("140.00","30","100%","40",null,null);

                p.pan05_01.set_taborder("39");
                p.pan05_01.set_type("vertical");
                p.pan05_01.set_flexgrow("1");
                p.pan05_01.set_minwidth("");
                p.pan05_01.move("10.00","98","300","86",null,null);

                p.pan05_02.set_taborder("40");
                p.pan05_02.set_type("vertical");
                p.pan05_02.set_flexgrow("1");
                p.pan05_02.set_minwidth("");
                p.pan05_02.move("10.00","98","300","1",null,null);

                p.pan05_03.set_taborder("41");
                p.pan05_03.set_type("vertical");
                p.pan05_03.set_flexgrow("1");
                p.pan05_03.set_minwidth("");
                p.pan05_03.move("10.00","98","300","1",null,null);

                p.pan05_04.set_taborder("42");
                p.pan05_04.set_type("vertical");
                p.pan05_04.set_flexgrow("1");
                p.pan05_04.set_minwidth("");
                p.pan05_04.move("10.00","98","300","1",null,null);

                p.pan05.set_taborder("43");
                p.pan05.set_horizontalgap("20");
                p.pan05.set_flexcrossaxiswrapalign("start");
                p.pan05.set_flexwrap("wrap");
                p.pan05.set_fittocontents("height");
                p.pan05.set_verticalgap("0");
                p.pan05.set_spacing("0px 20px 10px 20px");
                p.pan05.set_cssclass("pal_WF_DtlBg");
                p.pan05.move("0","60","100.00%","97",null,null);

                p.staLabe06_01.set_taborder("44");
                p.staLabe06_01.set_text("구조물ID");
                p.staLabe06_01.set_cssclass("sta_WF_Label");
                p.staLabe06_01.move("10","98","100%","46",null,null);

                p.edt06_01.set_taborder("45");
                p.edt06_01.set_flexgrow("1");
                p.edt06_01.set_readonly("true");
                p.edt06_01.set_maxwidth("");
                p.edt06_01.move("140.00","30","100%","40",null,null);

                p.pan06_01.set_taborder("46");
                p.pan06_01.set_type("vertical");
                p.pan06_01.set_flexgrow("1");
                p.pan06_01.set_minwidth("");
                p.pan06_01.move("10.00","98","300","86",null,null);

                p.staLabel06_02.set_taborder("47");
                p.staLabel06_02.set_text("구조물명");
                p.staLabel06_02.set_cssclass("sta_WF_Label");
                p.staLabel06_02.move("10","98","100%","46",null,null);

                p.edt06_02.set_taborder("48");
                p.edt06_02.set_flexgrow("1");
                p.edt06_02.set_readonly("true");
                p.edt06_02.set_maxwidth("");
                p.edt06_02.move("140.00","30","100%","40",null,null);

                p.pan06_02.set_taborder("49");
                p.pan06_02.set_type("vertical");
                p.pan06_02.set_flexgrow("1");
                p.pan06_02.set_minwidth("");
                p.pan06_02.move("10.00","98","300","86",null,null);

                p.staLabel06_03.set_taborder("50");
                p.staLabel06_03.set_text("레벨");
                p.staLabel06_03.set_cssclass("sta_WF_Label");
                p.staLabel06_03.move("10","98","100%","46",null,null);

                p.edt06_03.set_taborder("51");
                p.edt06_03.set_flexgrow("1");
                p.edt06_03.set_readonly("true");
                p.edt06_03.set_maxwidth("");
                p.edt06_03.move("140.00","30","100%","40",null,null);

                p.pan06_03.set_taborder("52");
                p.pan06_03.set_type("vertical");
                p.pan06_03.set_flexgrow("1");
                p.pan06_03.set_minwidth("");
                p.pan06_03.move("10.00","98","300","86",null,null);

                p.staLabel06_04.set_taborder("53");
                p.staLabel06_04.set_text("룸번호");
                p.staLabel06_04.set_cssclass("sta_WF_Label");
                p.staLabel06_04.move("10","98","100%","46",null,null);

                p.edt06_04.set_taborder("54");
                p.edt06_04.set_flexgrow("1");
                p.edt06_04.set_readonly("true");
                p.edt06_04.set_maxwidth("");
                p.edt06_04.move("140.00","30","100%","40",null,null);

                p.pan06_04.set_taborder("55");
                p.pan06_04.set_type("vertical");
                p.pan06_04.set_flexgrow("1");
                p.pan06_04.set_minwidth("");
                p.pan06_04.move("10.00","98","300","86",null,null);

                p.pan06.set_taborder("56");
                p.pan06.set_horizontalgap("20");
                p.pan06.set_flexcrossaxiswrapalign("start");
                p.pan06.set_flexwrap("wrap");
                p.pan06.set_fittocontents("height");
                p.pan06.set_verticalgap("0");
                p.pan06.set_spacing("0px 20px 10px 20px");
                p.pan06.set_cssclass("pal_WF_DtlBg");
                p.pan06.set_visible("false");
                p.pan06.move("0","60","100.00%","97",null,null);

                p.staLabel07_01.set_taborder("57");
                p.staLabel07_01.set_text("필지명");
                p.staLabel07_01.set_cssclass("sta_WF_Label");
                p.staLabel07_01.move("10","98","100%","46",null,null);

                p.edt07_01.set_taborder("58");
                p.edt07_01.set_flexgrow("1");
                p.edt07_01.set_readonly("true");
                p.edt07_01.set_maxwidth("");
                p.edt07_01.move("140.00","30","100%","40",null,null);

                p.pan07_01.set_taborder("59");
                p.pan07_01.set_type("vertical");
                p.pan07_01.set_flexgrow("1");
                p.pan07_01.set_minwidth("");
                p.pan07_01.move("10.00","98","300","86",null,null);

                p.pan07_03.set_taborder("60");
                p.pan07_03.set_type("vertical");
                p.pan07_03.set_flexgrow("1");
                p.pan07_03.set_minwidth("");
                p.pan07_03.move("10.00","98","300","1",null,null);

                p.pan07.set_taborder("61");
                p.pan07.set_horizontalgap("20");
                p.pan07.set_flexcrossaxiswrapalign("start");
                p.pan07.set_flexwrap("wrap");
                p.pan07.set_fittocontents("height");
                p.pan07.set_verticalgap("0");
                p.pan07.set_spacing("0px 20px 10px 20px");
                p.pan07.set_cssclass("pal_WF_DtlBg");
                p.pan07.set_visible("false");
                p.pan07.move("0","60","100.00%","147",null,null);

                p.Combo04.set_taborder("62");
                p.Combo04.set_innerdataset("dsCombo3");
                p.Combo04.set_codecolumn("stsmapId");
                p.Combo04.set_datacolumn("stsmapNm");
                p.Combo04.set_displaynulltext("선택");
                p.Combo04.set_text("전체");
                p.Combo04.set_value("");
                p.Combo04.set_index("-1");
                p.Combo04.move("788.00","145","100%","40",null,null);

                p.staLabel00.set_taborder("63");
                p.staLabel00.set_text("필지주소");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("0.00","0","100%","46",null,null);

                p.divEdtPop.set_taborder("64");
                p.divEdtPop.set_text("Div00");
                p.divEdtPop.set_formscrollbartype("none none");
                p.divEdtPop.set_formscrolltype("none");
                p.divEdtPop.set_flexgrow("1");
                p.divEdtPop.move("780.00","635","305","40",null,null);

                p.edt00_00_00.set_taborder("65");
                p.edt00_00_00.set_flexgrow("2");
                p.edt00_00_00.set_readonly("true");
                p.edt00_00_00.move("360","637","305","40",null,null);

                p.panAddress.set_taborder("66");
                p.panAddress.set_horizontalgap("10");
                p.panAddress.move("200","641","100%","45",null,null);

                p.edt00_00.set_taborder("67");
                p.edt00_00.set_readonly("true");
                p.edt00_00.move("0","46","100%","40",null,null);

                p.pan05_01_00.set_taborder("68");
                p.pan05_01_00.set_type("vertical");
                p.pan05_01_00.set_flexgrow("1");
                p.pan05_01_00.set_fittocontents("height");
                p.pan05_01_00.set_verticalgap("10");
                p.pan05_01_00.set_visible("true");
                p.pan05_01_00.set_minwidth("");
                p.pan05_01_00.move("20.00","0","980","136",null,null);

                p.Button00_00.set_taborder("69");
                p.Button00_00.set_text("선택");
                p.Button00_00.set_cssclass("btn_WF_Yes");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("457.00","30","400","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan01_02.set_flexcrossaxisalign("center");

                p.Grid00_00.set_autofittype("none");
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div01.set_taborder("0");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("0","0","100.00%","1000",null,null);
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
            obj.set_type("vertical");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGuide00.form
            obj = new Layout("default","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_00.set_taborder("0");
                p.Button00_00.set_cssclass("btn_WF_ACPlus");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("20.00","205","34","34",null,null);

                p.Button00_00_00.set_taborder("1");
                p.Button00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00.move("64.00","205","34","34",null,null);

                p.sta00_00.set_taborder("2");
                p.sta00_00.set_text("접혀있을때 class : btn_WF_ACPlus 로 접음");
                p.sta00_00.move("20.00","255","375","50",null,null);
            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide00.form
            obj = new Layout("mobile","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide00.form
            obj = new Layout("mobile","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("현황도 섹터정보");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.move("20","0",null,"1000","20",null);

                p.divGuide00.set_taborder("1");
                p.divGuide00.set_text("div00");
                p.divGuide00.set_visible("false");
                p.divGuide00.set_cssclass("div_GD_Tip");
                p.divGuide00.move("1600.00","145","450","385",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.move("20","0",null,null,"20","0");
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div01.form.Combo01","value","dsGet","stsmapTy");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div01.form.Combo02","value","dsGet","stsmapArea");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div01.form.Combo03","value","dsGet","stsmapPstn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div01.form.Combo04","value","dsGet","stsmapId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div01.form.edt03_01","value","dsMetaList","stsmapNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div01.form.edt03_02","value","dsMetaList","stsmapSctrId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div01.form.edt03_03","value","dsMetaList","stsmapTyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div01.form.edt03_04","value","dsMetaList","stsmapSctrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.Div01.form.edt04_01","value","dsMetaList","stsmapPstnNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.Div01.form.edt04_02","value","dsMetaList","rentPsbltySpceYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.Div01.form.edt04_03","value","dsMetaList","prpsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.Div01.form.edt03_04_00","value","dsMetaList","ar");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.Div01.form.edt05_01","value","dsMetaList","dtyDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.Div01.form.edt06_01","value","dsMetaList","stsmapBno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.Div01.form.edt06_02","value","dsMetaList","stsmapBldgNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.Div01.form.edt06_03","value","dsMetaList","stsmapFlr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.Div01.form.edt06_04","value","dsMetaList","rmNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divForm.form.Div01.form.edt07_01","value","dsMetaList","ltlndNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divForm.form.Div01.form.edt00_00","value","dsMetaList","ltlndDtlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divForm.form.Div01.form.divEdtPop.form.Edit00","value","dsMetaList","ltlndZip");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divForm.form.Div01.form.edt00_00_00","value","dsMetaList","ltlndAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM018P04.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	sampleWrite.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/08/08
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08				김완성						최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.objSrv = nexacro.getEnvironment().services["svcUrl"];
        this.param;

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	// 전달받은 파라메터 팝업창과 페이지오픈으로 파라메터 불러오는 방식이 달라짐
        	if(this.opener)
        	{

        	} else
        	{
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	this.fnInit();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
        };

        this.cfnClose = function()
        {
        	console.log('cfnClose');
        	//부모창 검색 조회
         	var sWinId = this.objApp.gdsOpenMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, this.getOwnerFrame().form.fvMenuId.substring(0, 8), this.FRAME_MENUCOLUMNS.winId);
         	var objForm = this.objApp.gvFrsWork.all[sWinId];
        	objForm.form.divWork.form.cfnSearch(1);
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 데이터 조회
        this.selectStsmapsTransaction = function()
        {
        	var strSvcId    = "stsmaps";
        	var strSvcUrl   = "stsmap/mapImgListInq.do";
        	var inData      = "dsSearch=dsGet";
        	var outData     = "dsCombo3=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.selectSectorsTransaction = function(stsmapId)
        {
        	var strSvcId    = "sectorSelect";
        	var strSvcUrl   = "stsmap/mapSectorInfoListInq.do";
        	var inData      = "";
        	var outData     = "dsSectorList=dsSectorList";
        	var strArg      = "id=" + stsmapId;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };


        this.selectMetaTransaction = function() {

        	var strSvcId    = "metaSearch";
        	var strSvcUrl   = "stsmap/mapMetaMgnListInq.do";
        	var inData      = "dsMetaSearch=dsMetaSearch";
        	var outData     = "dsMetaList=dsMetaList dsMetaPage=dsMetaPage";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };


        // 공통 코드 조회
        this.selectCmmTransaction = function(id, ds, uprCd, stsTy, cdTypeId)
        {
        	var strSvcId    = id;
        	var strSvcUrl   = "stsmap/stsmapCmmCode.do";
        	var inData      = "";
        	var outData     = ds + "=dsCombo";
        	var strArg      = "comboTy=S stsTy="+stsTy+" uprCd="+uprCd+" cdTypeId=" + cdTypeId;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "sample/sampleInsert.do";
        	var inData      = "dsGet=dsGet dsFile=dsFile";
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
        			// 데이터 조회 후 파일리스트에 셋팅

        			break;

        		case "combo":

        			break;

        		case "sectorSelect":
        			var data = [];
        			for(var i=0; i<this.dsSectorList.rowcount; i++) {
        				var obj = {
        					stsmapSctrId : this.dsSectorList.getColumn(i, "stsmapSctrId"),
        					stsmapSctrArea : this.dsSectorList.getColumn(i, "stsmapSctrArea")
        				}
        				data.push(obj);
        			}

        			this.divForm.form.Div01.form.div00.form.WebBrowser00.callMethod("settingSectors", '', JSON.stringify(data), false);

        			break;

        		case "stsmaps":

        			break;

        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        /*			this.gfnAlertMsg("save", gvRetMsg, "msgCallback");*/
        			this.gfnAlertMsg("MSG_001", "msgCallback");


        			break;


        	}
        };

        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);

        	if(sPopupId == "save_confirm")
        	{
        		if(oRtn.result == "Y")
        		{

        		}
        	} else if(sPopupId == "save")
        	{
        		if(this.opener)
        		{
        			this.close();
        		} else
        		{
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
        	//var url = this.objSrv.url + "stsmap/stsmapImgEdit.do";
        	var url = "/stsmap/stsmapImgEdit.do";
        	this.gfnWebBrowserSendPost(this, this.divForm.form.Div01.form.div00.form.WebBrowser00, url, "name=ytedy&");
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/



        this.divForm_Div01_Combo01_onitemchanged = function(obj,e)
        {
        	this.selectCmmTransaction("combo1", "dsCombo1", "null", e.postvalue, "RGN_PSTN_SE");

        	this.divForm.form.Div01.form.Combo02.index = 0;
        	this.divForm.form.Div01.form.Combo03.index = 0;

        	this.dsGet.setColumn(0, "stsmapArea", "");
        	this.dsGet.setColumn(0, "stsmapPstn", "");

        	if(e.postvalue == '01') {
        		this.divForm.form.Div01.form.pan06.visible = true;
        		this.divForm.form.Div01.form.pan07.visible = false;
        	} else {
        		this.divForm.form.Div01.form.pan06.visible = false;
        		this.divForm.form.Div01.form.pan07.visible = true;
        	}

        	this.divForm.form.resetScroll();
        };

        this.divForm_Div01_Combo02_onitemchanged = function(obj,e)
        {
        	var stsTy = this.dsCombo1.getColumn(this.divForm.form.Div01.form.Combo01.getSelect(), "cdId");
        	var uprCd = e.postvalue;
        	this.selectCmmTransaction("combo2", "dsCombo2", uprCd, stsTy, "RGN_PSTN_SE");
        	this.divForm.form.Div01.form.Combo03.index = 0;
        };

        this.divForm_Div01_Combo03_onitemchanged = function(obj,e)
        {
        	this.selectStsmapsTransaction();
        };

        this.divForm_Div01_Combo04_onitemchanged = function(obj,e)
        {
        	//this.divForm.form.Div01.form.div00.form.WebBrowser00.callMethod("loadImageMap", this.objSrv.url + "stsmap/stsmapViewer.do?stsmapId=" + e.postvalue + "&original=Y", "image");
        	this.divForm.form.Div01.form.div00.form.WebBrowser00.callMethod("loadImageMap", "/stsmap/stsmapViewer.do?stsmapId=" + e.postvalue + "&original=Y", "image");
        	this.selectSectorsTransaction(e.postvalue);
        };

        this.divForm_Div01_div00_WebBrowser00_onusernotify = function(obj,e)
        {
        	if(e.userdata.func == "select") {
        		this.dsMetaSearch.setColumn(0, "stsmapSctrId", e.userdata.id);
        		this.selectMetaTransaction();

        	}
        };

        this.divForm_Div01_Button00_00_onclick = function(obj,e)
        {

        	var stsmapTy = this.dsMetaList.getColumn(this.dsMetaList.rowposition, "stsmapTy");
        	var stsmapTyNm = this.dsMetaList.getColumn(this.dsMetaList.rowposition, "stsmapTyNm");
        	var stsmapPstn = this.dsMetaList.getColumn(this.dsMetaList.rowposition, "stsmapPstn");
        	var stsmapPstnNm = this.dsMetaList.getColumn(this.dsMetaList.rowposition, "stsmapPstnNm");
        	var stsmapArea = this.dsMetaList.getColumn(this.dsMetaList.rowposition, "stsmapArea");
        	var stsmapAreaNm = this.dsMetaList.getColumn(this.dsMetaList.rowposition, "stsmapAreaNm");
        	var stsmapSctrId = this.dsMetaList.getColumn(this.dsMetaList.rowposition, "stsmapSctrId");
        	var stsmapSctrNm = this.dsMetaList.getColumn(this.dsMetaList.rowposition, "stsmapSctrNm");
        	var stsmapBno = this.dsMetaList.getColumn(this.dsMetaList.rowposition, "stsmapBno");
        	var stsmapBldgNm = this.dsMetaList.getColumn(this.dsMetaList.rowposition, "stsmapBldgNm");
        	var stsmapFlr = this.dsMetaList.getColumn(this.dsMetaList.rowposition, "stsmapFlr");
        	var rmNo = this.dsMetaList.getColumn(this.dsMetaList.rowposition, "rmNo");

        	var obj = {
        		"stsmapTy" : stsmapTy,
        		"stsmapTyNm" : stsmapTyNm,
        		"stsmapPstn" : stsmapPstn,
        		"stsmapPstnNm" : stsmapPstnNm,
        		"stsmapArea" : stsmapArea,
        		"stsmapAreaNm" : stsmapAreaNm,
        		"stsmapSctrId" : stsmapSctrId,
        		"stsmapSctrNm" : stsmapSctrNm,
        		"stsmapBno" : stsmapBno,
        		"stsmapBldgNm" : stsmapBldgNm,
        		"stsmapFlr" : stsmapFlr+'',
        		"rmNo" : rmNo
        	}

        	this.close(JSON.stringify(obj));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.COM018P04_ontimer,this);
            this.divForm.form.Div01.form.div00.form.WebBrowser00.addEventHandler("onusernotify",this.divForm_Div01_div00_WebBrowser00_onusernotify,this);
            this.divForm.form.Div01.form.Combo01.addEventHandler("onitemchanged",this.divForm_Div01_Combo01_onitemchanged,this);
            this.divForm.form.Div01.form.Combo03.addEventHandler("onitemchanged",this.divForm_Div01_Combo03_onitemchanged,this);
            this.divForm.form.Div01.form.Combo02.addEventHandler("onitemchanged",this.divForm_Div01_Combo02_onitemchanged,this);
            this.divForm.form.Div01.form.Combo04.addEventHandler("onitemchanged",this.divForm_Div01_Combo04_onitemchanged,this);
            this.divForm.form.Div01.form.Button00_00.addEventHandler("onclick",this.divForm_Div01_Button00_00_onclick,this);
        };
        this.loadIncludeScript("COM018P04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
