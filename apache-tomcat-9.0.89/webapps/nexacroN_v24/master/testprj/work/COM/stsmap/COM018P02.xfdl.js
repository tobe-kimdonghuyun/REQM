(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM018P02");
            this.set_titletext("현황도 섹터정보 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo1", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo2", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"stsmapId\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapSctrId\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapSctrNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapSctrArea\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapTy\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapArea\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapPstn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"rno\" type=\"INT\" size=\"256\"/><Column id=\"stsmapId\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapTy\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapTyNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapArea\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapAreaNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapPstn\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapPstnNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapAddr\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapDtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapZip\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapBno\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapBldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapFlr\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapExpln\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSectorList", this);
            obj._setContents("<ColumnInfo><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapSctrArea\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapSctrId\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapSctrNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"stsmapId\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapSctrId\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapSctrNm\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapSctrArea\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapTy\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapArea\" type=\"STRING\" size=\"256\"/><Column id=\"stsmapPstn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","20","0",null,"1500","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","-31","665","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_text("현황도 섹터정보 관리");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinStsImg","1342","674","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","682","665","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinStsImg\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","-31","645","99.24%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","100.00%","1350",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","620","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("2");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_02","10.00","98","300","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan01_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00","176","214","100%","50",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Combo01\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo02\"/><PanelItem id=\"PanelItem00\" componentid=\"Combo03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo03","788.00","145","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCombo2");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo01","788.00","145","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div01_form_Combo01_innerdataset = new nexacro.NormalDataset("divForm_form_Div01_form_Combo01_innerdataset", obj);
            divForm_form_Div01_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">건물</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">토지</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div01_form_Combo01_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo02","788.00","145","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsCombo1");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","381",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Grid00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","20","100%","370",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.getSetter("uFunction").set("radio");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"현황도명\"/><Cell col=\"1\" text=\"이미지명\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:stsmapNm\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:orgnlFileNm\" cssclass=\"CellEnd\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","600",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"PanelGrdBtn\"/><PanelItem id=\"PanelItem04\" componentid=\"WebBrowser00\"/><PanelItem id=\"PanelItem01\" componentid=\"divPopBtn\"/><PanelItem id=\"PanelItem00\" componentid=\"grid00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","0","45","34",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_text("확대");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","371.00","0","45","34",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_text("축소");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn00","910","508","71","34",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("새로고침");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","860","0","100%","34",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem00\" componentid=\"btn00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Grid("grid00","92","955","100%","270",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("36");
            obj.set_binddataset("dsSectorList");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"frstRegId\"/><Cell col=\"1\" text=\"frstRegNm\"/><Cell col=\"2\" text=\"stsmapSctrArea\"/><Cell col=\"3\" text=\"stsmapSectId\"/><Cell col=\"4\" text=\"stsmapSctrNm\"/><Cell col=\"5\" text=\"useYn\"/></Band><Band id=\"body\"><Cell text=\"bind:frstRegId\"/><Cell col=\"1\" text=\"bind:frstRegNm\"/><Cell col=\"2\" text=\"bind:stsmapSctrArea\"/><Cell col=\"3\" text=\"bind:stsmapSectId\"/><Cell col=\"4\" text=\"bind:stsmapSctrNm\"/><Cell col=\"5\" text=\"bind:useYn\"/></Band></Format></Formats>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","287","832","100%","323",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("35");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divPopBtn","30","950","100%","60",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn00_01","200.00","365","100","40",null,null,null,null,null,null,this.divForm.form.Div01.form.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("영역 설정");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            this.divForm.form.Div01.form.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btn00_01_00","200.00","365","100","40",null,null,null,null,null,null,this.divForm.form.Div01.form.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("영역 사용");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div01.form.divPopBtn.addChild(obj.name, obj);

            obj = new Static("staLabel04_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04_01","10.00","98","560","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edt04_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt04_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel04_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_text("섹터영역");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt04_02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04_02","10.00","98","560","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04_02\"/><PanelItem id=\"PanelItem02\" componentid=\"edt04_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel05_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_text("섹터ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt05_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan05_01","10.00","98","560","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edt05_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel05_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("26");
            obj.set_text("섹터명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt05_02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("27");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan05_02","10.00","98","560","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("28");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_02\"/><PanelItem id=\"PanelItem02\" componentid=\"edt05_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan05","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("29");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan05_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan05_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel06_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("30");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan06_01","10.00","98","560","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Radio06_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan06_02","10.00","98","560","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan06","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("33");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan06_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Radio("Radio06_01","51","580","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("34");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_Div01_form_Radio06_01_innerdataset = new nexacro.NormalDataset("divForm_form_Div01_form_Radio06_01_innerdataset", obj);
            divForm_form_Div01_form_Radio06_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div01_form_Radio06_01_innerdataset);
            obj.set_text("계약선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0","1350","100%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            obj.set_fittocontents("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","100","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);

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
            //-- Default Layout : this.divForm.form.Div01.form.divPopBtn.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00_01.set_taborder("0");
                p.btn00_01.set_text("영역 설정");
                p.btn00_01.set_cssclass("btn_WF_No");
                p.btn00_01.set_fittocontents("width");
                p.btn00_01.move("200.00","365","100","40",null,null);

                p.btn00_01_00.set_taborder("1");
                p.btn00_01_00.set_text("영역 사용");
                p.btn00_01_00.set_cssclass("btn_WF_No");
                p.btn00_01_00.set_fittocontents("width");
                p.btn00_01_00.set_visible("false");
                p.btn00_01_00.move("200.00","365","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divForm.form.Div01.form.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form.divPopBtn.form,
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
            this.divForm.form.Div01.form.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexmainaxisalign("start");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_horizontalgap("20");
            this.divForm.form.Div01.form.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan01_01.set_taborder("1");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("2");
                p.pan01_01.set_minwidth("");
                p.pan01_01.move("10.00","98","620","86",null,null);

                p.staLabel00_00.set_taborder("0");
                p.staLabel00_00.set_text("유형");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.pan01_02.set_taborder("2");
                p.pan01_02.set_type("horizontal");
                p.pan01_02.set_flexgrow("1");
                p.pan01_02.set_horizontalgap("10");
                p.pan01_02.set_minwidth("");
                p.pan01_02.move("10.00","98","300","1",null,null);

                p.pan01.set_taborder("3");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","97",null,null);

                p.Panel00.set_taborder("5");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.move("176","214","100%","50",null,null);

                p.Combo03.set_taborder("4");
                p.Combo03.set_innerdataset("dsCombo2");
                p.Combo03.set_codecolumn("cdId");
                p.Combo03.set_datacolumn("cdNm");
                p.Combo03.set_displaynulltext("선택");
                p.Combo03.set_text("전체");
                p.Combo03.set_value("");
                p.Combo03.set_index("-1");
                p.Combo03.move("788.00","145","100%","40",null,null);

                p.Combo01.set_taborder("6");
                p.Combo01.set_innerdataset(divForm_form_Div01_form_Combo01_innerdataset);
                p.Combo01.set_codecolumn("codecolumn");
                p.Combo01.set_datacolumn("datacolumn");
                p.Combo01.set_text("선택");
                p.Combo01.set_value("");
                p.Combo01.set_index("0");
                p.Combo01.move("788.00","145","100%","40",null,null);

                p.Combo02.set_taborder("7");
                p.Combo02.set_innerdataset("dsCombo1");
                p.Combo02.set_codecolumn("cdId");
                p.Combo02.set_datacolumn("cdNm");
                p.Combo02.set_displaynulltext("선택");
                p.Combo02.set_text("전체");
                p.Combo02.set_value("");
                p.Combo02.set_index("-1");
                p.Combo02.move("788.00","145","100%","40",null,null);

                p.pan02.set_taborder("8");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("10px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100.00%","381",null,null);

                p.Grid00_00.set_taborder("9");
                p.Grid00_00.set_binddataset("dsList");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.getSetter("uFunction").set("radio");
                p.Grid00_00.move("0","20","100%","370",null,null);

                p.pan03.set_taborder("10");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("10");
                p.pan03.set_spacing("10px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.set_type("vertical");
                p.pan03.move("0","60","100.00%","600",null,null);

                p.btnGrdDel.set_taborder("11");
                p.btnGrdDel.set_text("확대");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.set_visible("false");
                p.btnGrdDel.move("316.00","0","45","34",null,null);

                p.btnGrdRegi.set_taborder("12");
                p.btnGrdRegi.set_text("축소");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.set_visible("false");
                p.btnGrdRegi.move("371.00","0","45","34",null,null);

                p.btn00.set_taborder("13");
                p.btn00.set_text("새로고침");
                p.btn00.set_fittocontents("width");
                p.btn00.move("910","508","71","34",null,null);

                p.PanelGrdBtn.set_taborder("14");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move("860","0","100%","34",null,null);

                p.grid00.set_taborder("36");
                p.grid00.set_binddataset("dsSectorList");
                p.grid00.set_visible("false");
                p.grid00.move("92","955","100%","270",null,null);

                p.WebBrowser00.set_taborder("35");
                p.WebBrowser00.move("287","832","100%","323",null,null);

                p.divPopBtn.set_taborder("15");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("30","950","100%","60",null,null);

                p.staLabel04_01.set_taborder("16");
                p.staLabel04_01.set_text("작성자");
                p.staLabel04_01.set_cssclass("sta_WF_Label");
                p.staLabel04_01.move("10","98","100%","46",null,null);

                p.pan04_01.set_taborder("17");
                p.pan04_01.set_type("vertical");
                p.pan04_01.set_flexgrow("1");
                p.pan04_01.set_minwidth("");
                p.pan04_01.move("10.00","98","560","86",null,null);

                p.pan04.set_taborder("18");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.move("0","60","100.00%","97",null,null);

                p.edt04_01.set_taborder("19");
                p.edt04_01.set_readonly("true");
                p.edt04_01.move("10.00","158","100%","40",null,null);

                p.staLabel04_02.set_taborder("20");
                p.staLabel04_02.set_text("섹터영역");
                p.staLabel04_02.set_cssclass("sta_WF_Label");
                p.staLabel04_02.move("10","98","100%","46",null,null);

                p.edt04_02.set_taborder("21");
                p.edt04_02.set_readonly("true");
                p.edt04_02.move("10.00","158","100%","40",null,null);

                p.pan04_02.set_taborder("22");
                p.pan04_02.set_type("vertical");
                p.pan04_02.set_flexgrow("1");
                p.pan04_02.set_minwidth("");
                p.pan04_02.move("10.00","98","560","86",null,null);

                p.staLabel05_01.set_taborder("23");
                p.staLabel05_01.set_text("섹터ID");
                p.staLabel05_01.set_cssclass("sta_WF_Label");
                p.staLabel05_01.move("10","98","100%","46",null,null);

                p.edt05_01.set_taborder("24");
                p.edt05_01.set_readonly("true");
                p.edt05_01.move("10.00","158","100%","40",null,null);

                p.pan05_01.set_taborder("25");
                p.pan05_01.set_type("vertical");
                p.pan05_01.set_flexgrow("1");
                p.pan05_01.set_minwidth("");
                p.pan05_01.move("10.00","98","560","86",null,null);

                p.staLabel05_02.set_taborder("26");
                p.staLabel05_02.set_text("섹터명");
                p.staLabel05_02.set_cssclass("sta_WF_Label");
                p.staLabel05_02.move("10","98","100%","46",null,null);

                p.edt05_02.set_taborder("27");
                p.edt05_02.move("10.00","158","100%","40",null,null);

                p.pan05_02.set_taborder("28");
                p.pan05_02.set_type("vertical");
                p.pan05_02.set_flexgrow("1");
                p.pan05_02.set_minwidth("");
                p.pan05_02.move("10.00","98","560","86",null,null);

                p.pan05.set_taborder("29");
                p.pan05.set_horizontalgap("20");
                p.pan05.set_flexcrossaxiswrapalign("start");
                p.pan05.set_flexwrap("wrap");
                p.pan05.set_fittocontents("height");
                p.pan05.set_verticalgap("0");
                p.pan05.set_spacing("0px 20px 10px 20px");
                p.pan05.set_cssclass("pal_WF_DtlBg");
                p.pan05.move("0","60","100.00%","97",null,null);

                p.staLabel06_01.set_taborder("30");
                p.staLabel06_01.set_text("사용여부");
                p.staLabel06_01.set_cssclass("sta_WF_Label");
                p.staLabel06_01.move("10","98","100%","46",null,null);

                p.pan06_01.set_taborder("31");
                p.pan06_01.set_type("vertical");
                p.pan06_01.set_flexgrow("1");
                p.pan06_01.set_minwidth("");
                p.pan06_01.move("10.00","98","560","86",null,null);

                p.pan06_02.set_taborder("32");
                p.pan06_02.set_type("vertical");
                p.pan06_02.set_flexgrow("1");
                p.pan06_02.set_minwidth("");
                p.pan06_02.move("10.00","98","560","1",null,null);

                p.pan06.set_taborder("33");
                p.pan06.set_horizontalgap("20");
                p.pan06.set_flexcrossaxiswrapalign("start");
                p.pan06.set_flexwrap("wrap");
                p.pan06.set_fittocontents("height");
                p.pan06.set_verticalgap("0");
                p.pan06.set_spacing("0px 20px 10px 20px");
                p.pan06.set_cssclass("pal_WF_DtlBg");
                p.pan06.move("0","60","100.00%","97",null,null);

                p.Radio06_01.set_taborder("34");
                p.Radio06_01.set_fittocontents("width");
                p.Radio06_01.set_direction("vertical");
                p.Radio06_01.set_innerdataset(divForm_form_Div01_form_Radio06_01_innerdataset);
                p.Radio06_01.set_codecolumn("codecolumn");
                p.Radio06_01.set_datacolumn("datacolumn");
                p.Radio06_01.set_value("0");
                p.Radio06_01.set_index("0");
                p.Radio06_01.move("51","580","100%","40",null,null);
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
                p.Grid00_00.set_autofittype("none");
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("default","",0,0,this.divForm.form.divPopBtn.form,
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
                p.staSubTitle01.set_taborder("2");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.set_text("현황도 섹터정보 관리");
                p.staSubTitle01.move("-31","665","100%","50",null,null);

                p.btnMinStsImg.set_taborder("3");
                p.btnMinStsImg.set_cssclass("btn_WF_ACMinus");
                p.btnMinStsImg.set_visible("true");
                p.btnMinStsImg.set_text("");
                p.btnMinStsImg.move("1342","674","34","34",null,null);

                p.Panel01_00.set_taborder("4");
                p.Panel01_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_00.set_spacing("0px 20px");
                p.Panel01_00.set_horizontalgap("10");
                p.Panel01_00.set_flexcrossaxisalign("center");
                p.Panel01_00.set_flexmainaxisalign("end");
                p.Panel01_00.move("682","665","100%","50",null,null);

                p.sub_tit01.set_taborder("5");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.set_minheight("70");
                p.sub_tit01.set_maxheight("");
                p.sub_tit01.move("-31","645","99.24%","70",null,null);

                p.Div01.set_taborder("0");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("0","0","100.00%","1350",null,null);

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.set_fittocontents("none");
                p.divPopBtn.move("0","1350","100%","60",null,null);
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
            obj = new Layout("default","Desktop_screen",1480,1500,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("현황도 섹터정보 관리");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("20","0",null,"1500","20",null);

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
                p.divForm.move("20","0",null,null,"20","90");
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div01.form.Combo01","value","dsSearch","stsmapTy");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div01.form.Combo02","value","dsSearch","stsmapArea");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div01.form.Combo03","value","dsSearch","stsmapPstn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div01.form.edt04_01","value","dsSectorList","frstRegNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div01.form.Radio06_01","value","dsSectorList","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.Div01.form.edt04_02","value","dsSectorList","stsmapSctrArea");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.Div01.form.edt05_01","value","dsSectorList","stsmapSctrId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.Div01.form.edt05_02","value","dsSectorList","stsmapSctrNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM018P02.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	COM018P02.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/08/08
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08				김완성						최초생성
        * 2024/12/31				조규완						퍼블 수정
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.objSrv = nexacro.getEnvironment().services["svcUrl"];
        this.param;
        this.imgEditorIng = true;
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
        			"stsmapId" : this.getOwnerFrame().stsmapId,
        			"stsmapSctrId" : this.getOwnerFrame().stsmapSctrId
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
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
        };

        this.cfnClose = function()
        {
        	console.log('cfnClose');
        	//부모창 검색 조회
         	var sWinId = this.objApp.gdsOpenMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, this.getOwnerFrame().form.fvMenuId.substring(0, 14), this.FRAME_MENUCOLUMNS.winId);
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
        	var strSvcUrl   = "stsmap/mapSectorInfoInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet dsList=dsList dsCombo1=dsCombo1 dsCombo2=dsCombo2";
        	var strArg      = "id=" + this.param.stsmapId;
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

        this.selectStsmapsTransaction = function()
        {
        	var strSvcId    = "stsmaps";
        	var strSvcUrl   = "stsmap/mapImgListInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList";
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
        	var strSvcUrl   = "stsmap/mapSectorInfoStrg.do";
        	var inData      = "dsSectorList=dsSectorList:U";
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
        			this.dsSearch.setColumn(0, "stsmapTy", this.dsGet.getColumn(0, "stsmapTy"));
        			this.dsSearch.setColumn(0, "stsmapArea", this.dsGet.getColumn(0, "stsmapArea"));
        			this.dsSearch.setColumn(0, "stsmapPstn", this.dsGet.getColumn(0, "stsmapPstn"));

        			var sRow = this.dsList.findRow("stsmapId", this.param.stsmapId);
        			this.divForm.form.Div01.form.Grid00_00.selectRow(sRow);

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

        			this.divForm.form.Div01.form.WebBrowser00.callMethod("settingSectors", this.param.stsmapSctrId, JSON.stringify(data), true);

        			var sRow = this.dsSectorList.findRow("stsmapSctrId", this.param.stsmapSctrId);
        			this.divForm.form.Div01.form.grid00.selectRow(sRow);
        			break;

        		case "stsmaps":

        			break;

        		case "combo":

        			break;

        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("save", gvRetMsg, [], "msgCallback");
        // 			if(this.opener) {
        // 				this.close();
        // 			} else {
        // 				var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        // 				this.gfnCloseMenu(cMenuId);
        // 			}

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
        			this.saveTransaction();
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

        //API 콜백은 업데이트 중
        this.apiCallback = function(svcID, ret)
        {
        	switch(svcID)
        	{
        		case "tax":
        			if(ret != "")
        			{
        				console.log(ret);
        			}
        			break;
        	}
        }

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	//var url = this.objSrv.url + "stsmap/stsmapImgEdit.do";
        	var url = "/stsmap/stsmapImgEdit.do";
        	this.gfnWebBrowserSendPost(this, this.divForm.form.Div01.form.WebBrowser00, url, "");
        	//this.setTimer("initTimer", 1000);
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divSch_Combo01_onitemchanged = function(obj,e)
        {
        	this.selectCmmTransaction("combo1", "dsCombo1", "null", e.postvalue, "RGN_PSTN_SE");

        	this.divForm.form.Div01.form.Combo02.index = 0;
        	this.divForm.form.Div01.form.Combo03.index = 0;

        	this.dsSearch.setColumn(0, "stsmapArea", "");
        	this.dsSearch.setColumn(0, "stsmapPstn", "");
        };

        this.divForm_Div01_Combo02_onitemchanged = function(obj,e)
        {
        	var stsTy = this.dsSearch.getColumn(0, "stsmapTy");
        	var uprCd = this.dsSearch.getColumn(0, "stsmapArea");
        	this.selectCmmTransaction("combo2", "dsCombo2", uprCd, stsTy, "RGN_PSTN_SE");

        	this.divForm.form.Div01.form.Combo03.index = 0;

        	this.dsSearch.setColumn(0, "stsmapPstn", "");
        };

        this.divForm_Div01_Combo03_onitemchanged = function(obj,e)
        {
        	this.selectStsmapsTransaction();
        };

        this.divForm_Div01_Grid00_00_onselectchanged = function(obj,e)
        {
        	for(var i=0;i<this.dsList.rowcount;i++) {
        		this.dsList.setColumn(i, "chk", 0);
        	}

        	this.dsList.setColumn(e.row, "chk", -1);

        	var sRows = this.dsList.extractRows("chk == -1");
        	var stsmapId = this.dsList.getColumn(sRows[0], "stsmapId");

        	this.dsSearch.setColumn(0, "stsmapId", stsmapId);

        	//this.divForm.form.Div01.form.WebBrowser00.callMethod("loadImageMap", this.objSrv.url + "stsmap/stsmapViewer.do?stsmapId=" + stsmapId + "&original=Y", "image");
        	this.divForm.form.Div01.form.WebBrowser00.callMethod("loadImageMap", "/stsmap/stsmapViewer.do?stsmapId=" + stsmapId + "&original=Y", "image");
        	this.selectSectorsTransaction(stsmapId);
        };

        this.divForm_Div01_divPopBtn_btn00_01_onclick = function(obj,e)
        {
        	var shape = "polygon";
        	this.divForm.form.Div01.form.WebBrowser00.callMethod("shapeBtnClick", shape);
        };

        this.divForm_Div01_btnGrdDel_onclick = function(obj,e)
        {
        	this.divForm.form.Div01.form.WebBrowser00.callMethod("zoomIn");
        };

        this.divForm_Div01_btnGrdRegi_onclick = function(obj,e)
        {
        	this.divForm.form.Div01.form.WebBrowser00.callMethod("zoomOut");
        };

        this.divForm_Div01_btn00_onclick = function(obj,e)
        {
        	this.dsSectorList.clearData();
        	this.divForm.form.Div01.form.WebBrowser00.callMethod("resetSector");
        };

        this.divForm_Div01_WebBrowser00_onusernotify = function(obj,e)
        {
        	if(e.userdata.func == "insert") {
        		var nRow = this.dsSectorList.addRow();
        		this.dsSectorList.setColumn(nRow, "frstRegId", this.objApp.gdsUser.getColumn(0, "userId"));
        		this.dsSectorList.setColumn(nRow, "frstRegNm", this.objApp.gdsUser.getColumn(0, "userNm"));
        		this.dsSectorList.setColumn(nRow, "useYn", "Y");
        		this.dsSectorList.setColumn(nRow, "stsmapSctrArea", e.userdata.crdn);
        		this.dsSectorList.setColumn(nRow, "stsmapSctrId", e.userdata.id);

        		var sRows = this.dsList.extractRows("chk == -1");
        		var stsmapId = this.dsList.getColumn(sRows[0], "stsmapId");
        		this.dsSectorList.setColumn(nRow, "stsmapId", stsmapId);

        	} else if(e.userdata.func == "select") {
        		var sRow = this.dsSectorList.findRow("stsmapSctrId", e.userdata.id);
        		this.divForm.form.Div01.form.grid00.selectRow(sRow);
        	} else if(e.userdata.func == "remove") {
        		var sRow = this.dsSectorList.findRow("stsmapSctrId", e.userdata.id);
        		this.dsSectorList.deleteRow(sRow);
        	} else if(e.userdata.func == "update") {
        		var sRow = this.dsSectorList.findRow("stsmapSctrId", e.userdata.id);
        		this.dsSectorList.setColumn(sRow, "stsmapSctrArea", e.userdata.crdn);
        	} else if(e.userdata.func == "init") {
        		//this.killTimer("initTimer");

        		if(this.param != null && this.param.stsmapId != null && this.param.stsmapId != '')
        		{
        			this.selectTransaction();
        		}
        	}

        };

        this.divForm_divPopBtn_Button00_00_onclick = function(obj,e)
        {
        	if(this.gfnDsIsUpdated(this.dsSectorList)) {
        		this.gfnConfirmMsg("save_confirm", "MSG_020", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        	}

        };

        // this.COM018P02_ontimer = function(obj:nexacro.Form,e:nexacro.TimerEventInfo)
        // {
        // 	if(e.timerid == "initTimer") {
        // 		this.divForm.form.Div01.form.WebBrowser00.callMethod("initChk");
        // 	}
        // };

        this.divForm_Div01_WebBrowser00_onloadcompleted = function(obj,e)
        {
        	this.divForm.form.Div01.form.WebBrowser00.callMethod("initChk");
        };

        this.btnMin_onclick = function(obj,e)
        {
        	var objNm = obj.name;
        	var objClass = obj.cssclass;
        	var objDiv = null;
        	var divVisible = false;

        	// 해당 div 찾아줌.
        	if(objNm == "btnMinStsImg") {
        		objDiv = this.divForm.form.Div01;
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
            this.addEventHandler("ontimer",this.COM018P02_ontimer,this);
            this.divForm.form.btnMinStsImg.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div01.form.Combo03.addEventHandler("onitemchanged",this.divForm_Div01_Combo03_onitemchanged,this);
            this.divForm.form.Div01.form.Combo01.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.Div01.form.Combo02.addEventHandler("onitemchanged",this.divForm_Div01_Combo02_onitemchanged,this);
            this.divForm.form.Div01.form.Grid00_00.addEventHandler("onselectchanged",this.divForm_Div01_Grid00_00_onselectchanged,this);
            this.divForm.form.Div01.form.btnGrdDel.addEventHandler("onclick",this.divForm_Div01_btnGrdDel_onclick,this);
            this.divForm.form.Div01.form.btnGrdRegi.addEventHandler("onclick",this.divForm_Div01_btnGrdRegi_onclick,this);
            this.divForm.form.Div01.form.btn00.addEventHandler("onclick",this.divForm_Div01_btn00_onclick,this);
            this.divForm.form.Div01.form.WebBrowser00.addEventHandler("onusernotify",this.divForm_Div01_WebBrowser00_onusernotify,this);
            this.divForm.form.Div01.form.WebBrowser00.addEventHandler("onloadcompleted",this.divForm_Div01_WebBrowser00_onloadcompleted,this);
            this.divForm.form.Div01.form.divPopBtn.form.btn00_01.addEventHandler("onclick",this.divForm_Div01_divPopBtn_btn00_01_onclick,this);
            this.divForm.form.Div01.form.divPopBtn.form.btn00_01_00.addEventHandler("onclick",this.divForm_Div01_divPopBtn_btn00_01_00_onclick,this);
            this.divForm.form.Div01.form.Radio06_01.addEventHandler("onitemchanged",this.divForm_Div00_Radio00_onitemchanged,this);
            this.divForm.form.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divForm_divPopBtn_Button00_00_onclick,this);
        };
        this.loadIncludeScript("COM018P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
