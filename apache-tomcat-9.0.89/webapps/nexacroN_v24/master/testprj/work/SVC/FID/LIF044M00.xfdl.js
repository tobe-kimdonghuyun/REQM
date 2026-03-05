(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF044M00");
            this.set_titletext("서비스처리목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCustTypeSrch", this);
            obj._setContents("<ColumnInfo><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustType", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsType", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ymdSe\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"bgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"endYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"instNm\" type=\"STRING\" size=\"256\"/><Column id=\"custTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobNm\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"actlEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrOnlnNo\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"endNm\" type=\"STRING\" size=\"256\"/><Column id=\"rnb\" type=\"STRING\" size=\"256\"/><Column id=\"docNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"custTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"custTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"supRegDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","70",null,"1600","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100.00%","350",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("PanelCal","285","24","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_flexgrow("2");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"cboCrtr\"/><PanelItem id=\"PanelItem01\" componentid=\"DivCal\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cboCrtr","130","14","150","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_flexshrink("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divSch_form_cboCrtr_innerdataset = new nexacro.NormalDataset("divForm_form_divSch_form_cboCrtr_innerdataset", obj);
            divForm_form_divSch_form_cboCrtr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신청일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">완료일</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divSch_form_cboCrtr_innerdataset);
            obj.set_text("신청일");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","250",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel04\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel07\"/><PanelItem id=\"PanelItem09\" componentid=\"Panel08\"/><PanelItem id=\"PanelItem10\" componentid=\"Panel09\"/><PanelItem id=\"PanelItem11\" componentid=\"Panel10\"/><PanelItem id=\"PanelItem12\" componentid=\"Panel11\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staCrtrYmd","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel00","1694.00","398","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCrtrYmd\"/><PanelItem id=\"PanelItem03\" componentid=\"PanelCal\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("DivCal","281","20","300","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("calBgngYmd","0","0","150","40",null,null,null,null,null,null,this.divForm.form.divSch.form.DivCal.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.DivCal.addChild(obj.name, obj);

            obj = new Static("StaticDash","calBgngYmd:10","0","10","40",null,null,null,null,null,null,this.divForm.form.divSch.form.DivCal.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.form.DivCal.addChild(obj.name, obj);

            obj = new Calendar("calEndYmd","StaticDash:10","0","150","40",null,null,null,null,null,null,this.divForm.form.divSch.form.DivCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.DivCal.addChild(obj.name, obj);

            obj = new Edit("edtAplyNo","163","80","65%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_displaynulltext("검색어 입력");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staAplyNo","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel02","1694.00","398","560","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplyNo\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplyNo\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("PanelClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","52","29",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("PanelSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staCustType","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("고객유형");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel04","1694.00","398","560","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staCustType\"/><PanelItem id=\"PanelItem01\" componentid=\"cboType\"/><PanelItem id=\"PanelItem00\" componentid=\"cboCust\"/><PanelItem id=\"PanelItem02\" componentid=\"cbo04_2\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staAplcnt","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtAplcnt","900.00","127","21.97%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_displaynulltext("검색어 입력");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel07","790.00","127","560","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staAplcnt\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplcnt\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staPrcr","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("18");
            obj.set_text("처리자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtPrcr","900.00","127","21.97%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("19");
            obj.set_displaynulltext("검색어 입력");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel08","790.00","127","560","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("20");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staPrcr\"/><PanelItem id=\"PanelItem01\" componentid=\"edtPrcr\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staInst","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("21");
            obj.set_text("회사");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtInst","900.00","127","21.97%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("22");
            obj.set_displaynulltext("검색어 입력");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel09","790.00","127","560","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("23");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staInst\"/><PanelItem id=\"PanelItem01\" componentid=\"edtInst\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staDept","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("24");
            obj.set_text("사업명\r\n(부서명)");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtDept","900.00","127","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("25");
            obj.set_displaynulltext("검색어 입력");
            obj.set_flexgrow("1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel10","790.00","127","560","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("26");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staDept\"/><PanelItem id=\"PanelItem01\" componentid=\"edtDept\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel11","685","150","560","1",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("27");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cboType","200.00","128","50%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("28");
            obj.set_innerdataset("dsType");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cboCust","200.00","128","50%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("29");
            obj.set_innerdataset("dsCustType");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_displaynulltext("선택");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30","100.00%","1000",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divPage","0","637","100.00%","36",null,null,null,null,"36",null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","450","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00\"/><PanelItem id=\"PanelItem03\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem00\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem05\" componentid=\"btnGrdDw\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","PanelGrdBtn:10","100.00%",null,null,"divPage:10",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"신청구분\"/><Cell col=\"3\" text=\"고객유형\"/><Cell col=\"4\" text=\"회사\"/><Cell col=\"5\" text=\"신청자\"/><Cell col=\"6\" text=\"등록자\"/><Cell col=\"7\" text=\"최초신청일시\"/><Cell col=\"8\" text=\"최종신청일시\"/><Cell col=\"9\" text=\"처리자\"/><Cell col=\"10\" text=\"연락처\"/><Cell col=\"11\" text=\"처리작업그룹\"/><Cell col=\"12\" text=\"완료일시\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:aplyNo\" textAlign=\"center\" cssclass=\"CellLink\" cursor=\"pointer\"/><Cell col=\"1\" text=\"bind:jobNm\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:aplySeNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:custTypeNm\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:aplcntInstNm\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:aplcntNm\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:rgtrNm\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:aplyDt\" displaytype=\"mask\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:supRegDt\" displaytype=\"mask\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:prcrNm\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:prcrOnlnNo\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:prcrJobGroupNm\" textAlign=\"center\"/><Cell col=\"12\" cssclass=\"CellEnd\" text=\"bind:endDt\" displaytype=\"mask\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("총 <fc v=\'#1e4ebe\'>100</fc>건");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("Combo00","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","54","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","774.00","10","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("false");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","804.00","10","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("false");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","1368","3","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("btnSchClose","24.00","55","52","30",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_SchClose");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("btnSchOpen","100.00","55","52","30",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SchOpen");
            this.divGuide.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divSch.form.DivCal.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form.DivCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.calBgngYmd.set_taborder("0");
                p.calBgngYmd.set_dateformat("yyyy-MM-dd");
                p.calBgngYmd.move("0","0","150","40",null,null);

                p.StaticDash.set_taborder("1");
                p.StaticDash.set_text("~");
                p.StaticDash.set_cssclass("sta_WF_Dash");
                p.StaticDash.set_flexshrink("0");
                p.StaticDash.move("calBgngYmd:10","0","10","40",null,null);

                p.calEndYmd.set_taborder("2");
                p.calEndYmd.set_dateformat("yyyy-MM-dd");
                p.calEndYmd.move("StaticDash:10","0","150","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch.form.DivCal.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form.DivCal.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divSch.form.DivCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch.form.DivCal.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelCal.set_taborder("13");
                p.PanelCal.set_flexgrow("2");
                p.PanelCal.set_horizontalgap("10");
                p.PanelCal.set_flexwrap("wrap");
                p.PanelCal.set_verticalgap("8");
                p.PanelCal.set_fittocontents("height");
                p.PanelCal.move("285","24","100%","40",null,null);

                p.cboCrtr.set_taborder("9");
                p.cboCrtr.set_flexshrink("0");
                p.cboCrtr.set_innerdataset(divForm_form_divSch_form_cboCrtr_innerdataset);
                p.cboCrtr.set_codecolumn("codecolumn");
                p.cboCrtr.set_datacolumn("datacolumn");
                p.cboCrtr.set_text("신청일");
                p.cboCrtr.set_value("");
                p.cboCrtr.set_index("-1");
                p.cboCrtr.move("130","14","150","40",null,null);

                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","250",null,null);

                p.staCrtrYmd.set_taborder("1");
                p.staCrtrYmd.set_text("기준일자");
                p.staCrtrYmd.set_cssclass("sta_WF_SchLabel");
                p.staCrtrYmd.set_flexshrink("0");
                p.staCrtrYmd.set_minwidth("");
                p.staCrtrYmd.move("0","0","100","40",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_type("horizontal");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_flexwrap("nowrap");
                p.Panel00.set_verticalgap("8");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_maxheight("");
                p.Panel00.set_minwidth("");
                p.Panel00.move("1694.00","398","100%","40",null,null);

                p.DivCal.set_taborder("14");
                p.DivCal.set_text("Div00");
                p.DivCal.set_flexgrow("1");
                p.DivCal.set_formscrollbartype("none none");
                p.DivCal.set_formscrolltype("none");
                p.DivCal.move("281","20","300","40",null,null);

                p.edtAplyNo.set_taborder("10");
                p.edtAplyNo.set_displaynulltext("검색어 입력");
                p.edtAplyNo.set_flexgrow("1");
                p.edtAplyNo.move("163","80","65%","40",null,null);

                p.staAplyNo.set_taborder("3");
                p.staAplyNo.set_text("신청번호");
                p.staAplyNo.set_cssclass("sta_WF_SchLabel");
                p.staAplyNo.set_flexshrink("0");
                p.staAplyNo.set_minwidth("");
                p.staAplyNo.move("0","0","100","40",null,null);

                p.Panel02.set_taborder("4");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_minwidth("");
                p.Panel02.move("1694.00","398","560","40",null,null);

                p.PanelClose.set_taborder("6");
                p.PanelClose.set_type("vertical");
                p.PanelClose.set_cssclass("pal_WF_SchLine");
                p.PanelClose.set_flexcrossaxisalign("end");
                p.PanelClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("5");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","52","29",null,null);

                p.PanelSchBtn.set_taborder("7");
                p.PanelSchBtn.set_flexmainaxisalign("center");
                p.PanelSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("8");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.staCustType.set_taborder("11");
                p.staCustType.set_text("고객유형");
                p.staCustType.set_cssclass("sta_WF_SchLabel");
                p.staCustType.set_flexshrink("0");
                p.staCustType.set_maxwidth("");
                p.staCustType.move("0","0","100","40",null,null);

                p.Panel04.set_taborder("12");
                p.Panel04.set_type("horizontal");
                p.Panel04.set_horizontalgap("10");
                p.Panel04.set_flexgrow("1");
                p.Panel04.set_minwidth("");
                p.Panel04.move("1694.00","398","560","40",null,null);

                p.staAplcnt.set_taborder("15");
                p.staAplcnt.set_text("신청자");
                p.staAplcnt.set_cssclass("sta_WF_SchLabel");
                p.staAplcnt.set_flexshrink("0");
                p.staAplcnt.set_maxwidth("");
                p.staAplcnt.move("0","0","100","40",null,null);

                p.edtAplcnt.set_taborder("16");
                p.edtAplcnt.set_displaynulltext("검색어 입력");
                p.edtAplcnt.set_flexgrow("1");
                p.edtAplcnt.move("900.00","127","21.97%","40",null,null);

                p.Panel07.set_taborder("17");
                p.Panel07.set_type("horizontal");
                p.Panel07.set_horizontalgap("10");
                p.Panel07.set_flexgrow("1");
                p.Panel07.set_minwidth("");
                p.Panel07.move("790.00","127","560","40",null,null);

                p.staPrcr.set_taborder("18");
                p.staPrcr.set_text("처리자");
                p.staPrcr.set_cssclass("sta_WF_SchLabel");
                p.staPrcr.set_flexshrink("0");
                p.staPrcr.set_maxwidth("");
                p.staPrcr.move("0","0","100","40",null,null);

                p.edtPrcr.set_taborder("19");
                p.edtPrcr.set_displaynulltext("검색어 입력");
                p.edtPrcr.set_flexgrow("1");
                p.edtPrcr.move("900.00","127","21.97%","40",null,null);

                p.Panel08.set_taborder("20");
                p.Panel08.set_type("horizontal");
                p.Panel08.set_horizontalgap("10");
                p.Panel08.set_flexgrow("1");
                p.Panel08.set_minwidth("");
                p.Panel08.move("790.00","127","560","40",null,null);

                p.staInst.set_taborder("21");
                p.staInst.set_text("회사");
                p.staInst.set_cssclass("sta_WF_SchLabel");
                p.staInst.set_flexshrink("0");
                p.staInst.set_maxwidth("");
                p.staInst.move("0","0","100","40",null,null);

                p.edtInst.set_taborder("22");
                p.edtInst.set_displaynulltext("검색어 입력");
                p.edtInst.set_flexgrow("1");
                p.edtInst.move("900.00","127","21.97%","40",null,null);

                p.Panel09.set_taborder("23");
                p.Panel09.set_type("horizontal");
                p.Panel09.set_horizontalgap("10");
                p.Panel09.set_flexgrow("1");
                p.Panel09.set_minwidth("");
                p.Panel09.move("790.00","127","560","40",null,null);

                p.staDept.set_taborder("24");
                p.staDept.set_text("사업명\r\n(부서명)");
                p.staDept.set_cssclass("sta_WF_SchLabel");
                p.staDept.set_flexshrink("0");
                p.staDept.set_maxwidth("");
                p.staDept.move("0","0","100","40",null,null);

                p.edtDept.set_taborder("25");
                p.edtDept.set_displaynulltext("검색어 입력");
                p.edtDept.set_flexgrow("1");
                p.edtDept.move("900.00","127","100%","40",null,null);

                p.Panel10.set_taborder("26");
                p.Panel10.set_type("horizontal");
                p.Panel10.set_horizontalgap("10");
                p.Panel10.set_flexgrow("1");
                p.Panel10.set_minwidth("");
                p.Panel10.move("790.00","127","560","40",null,null);

                p.Panel11.set_taborder("27");
                p.Panel11.set_type("horizontal");
                p.Panel11.set_horizontalgap("10");
                p.Panel11.set_flexgrow("1");
                p.Panel11.set_minwidth("");
                p.Panel11.move("685","150","560","1",null,null);

                p.cboType.set_taborder("28");
                p.cboType.set_innerdataset("dsType");
                p.cboType.set_codecolumn("cdId");
                p.cboType.set_datacolumn("cdNm");
                p.cboType.set_displaynulltext("선택");
                p.cboType.set_text("");
                p.cboType.set_index("-1");
                p.cboType.move("200.00","128","50%","40",null,null);

                p.cboCust.set_taborder("29");
                p.cboCust.set_innerdataset("dsCustType");
                p.cboCust.set_codecolumn("cdId");
                p.cboCust.set_datacolumn("cdNm");
                p.cboCust.set_displaynulltext("선택");
                p.cboCust.set_visible("false");
                p.cboCust.set_text("");
                p.cboCust.set_index("-1");
                p.cboCust.move("200.00","128","50%","40",null,null);
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
                p.PanelClose.move("30","151","100%","30",null,null);

                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_verticalgap("8");
                p.panLabel.move("132","47","100%","305",null,null);

                p.Panel02.set_horizontalgap("8");
                p.Panel02.move("1694.00","398","100%","45",null,null);

                p.Panel00.set_type("horizontal");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_horizontalgap("8");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("1694.00","398","100%","40",null,null);

                p.edtAplyNo.move("163","80","65%","40",null,null);

                p.Panel04.move("1694.00","398","100%","45",null,null);

                p.cboCrtr.move("130","14","120","40",null,null);

                p.PanelCal.move("285","24","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd.form.divPage
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form.divPage.form,function(p){});
            this.divForm.form.divGrd.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","637","100.00%","36",null,null);

                p.PanelGrdBtn.set_taborder("5");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","450","34","0",null);

                p.grdList.set_taborder("1");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("col");
                p.grdList.move("0","PanelGrdBtn:10","100.00%",null,null,"divPage:10");

                p.staTotal.set_taborder("2");
                p.staTotal.set_text("총 <fc v=\'#1e4ebe\'>100</fc>건");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.move("0","0","200","34",null,null);

                p.Combo00.set_taborder("4");
                p.Combo00.set_text("10");
                p.Combo00.set_value("");
                p.Combo00.set_index("-1");
                p.Combo00.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("3");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","54","34",null,null);

                p.btnGrdRegi.set_taborder("6");
                p.btnGrdRegi.set_text("등록");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("false");
                p.btnGrdRegi.move("774.00","10","45","34",null,null);

                p.btnGrdDel.set_taborder("7");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("false");
                p.btnGrdDel.move("804.00","10","45","34",null,null);

                p.btnGrdDw.set_taborder("8");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("1368","3","124","34",null,null);
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

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");
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
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","100.00%","350",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:30","100.00%","1000",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("30");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divGrd.move("0","divSch:50","100%","673",null,null);

                p.divSch.set_text("Div00");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","100%","386",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 10px 0px 20px");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("30");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSchClose.set_taborder("0");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("24.00","55","52","30",null,null);

                p.btnSchOpen.set_taborder("1");
                p.btnSchOpen.set_cssclass("btn_WF_SchOpen");
                p.btnSchOpen.move("100.00","55","52","30",null,null);
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
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("서비스처리목록");

                p.divTitle.set_taborder("2");
                p.divTitle.set_text("");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.set_formscrolltype("none");
                p.divTitle.set_maxwidth("");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","70",null,"1600","60",null);

                p.divGuide.set_taborder("1");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",390,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","0","100.00%","1089",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
            this._addPreloadList("fdl","work::COM/util/paging/paging.xfdl");
        };
        
        // User Script
        this.registerScript("LIF044M00.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	LIF044M00.xfdl
        *  @Creator 	CHG
        *  @CreateDate 	2024/10/08
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/08			CHG							최초생성
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

        	// 공통코드 조회
        	this.fnComCdSrch();

        	// 기준일자 세팅
        	this.divForm.form.divSch.form.cboCrtr.value = "1"; // 신청일
        	var curYmd = this.gfnGetDate();
        	this.divForm.form.divSch.form.DivCal.form.calBgngYmd.value = this.gfnAddMonth(curYmd, -1);
        	this.divForm.form.divSch.form.DivCal.form.calEndYmd.value = curYmd;

        	// 로그인 ID
        	this.gvUserId = this.objApp.gdsUser.getColumn(0,"userId");

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
        	//TODO..
        };

        //추가버튼1
        this.cfnbtnAdd1 = function ()
        {
        	this.gfnAlert("msg.confirm", ["추가버튼1입니다."]);
        	return;
        };

        //추가버튼2
        this.cfnbtnAdd2 = function ()
        {
        	this.gfnAlert("msg.confirm", ["추가버튼2입니다."]);
        	return;
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : fnComCdSrch
         * @description : 공통코드 조회
         ***************************************************************************/
        this.fnComCdSrch = function()
        {
        	if(this.dsCustTypeSrch.getRowCount() > 0){
        		this.dsCustTypeSrch.clearData();

        	}

        	this.dsCustTypeSrch.addRow();
        	this.dsCustTypeSrch.setColumn(0, "useYn", "Y");
        	this.dsCustTypeSrch.setColumn(0, "cdTypeId", "FIDREQTYPE");


        	var strSvcId    = "fnComCdSrch";
        	var strSvcUrl   = "lifCom/selectComCd.do";
        	var inData      = "dsSearch=dsCustTypeSrch";
        	var outData     = "dsCustType=dsCdList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**************************************************************************
         * @name : fnSearch
         * @description : 조회
         ***************************************************************************/
        this.fnSearch = function()
        {
        	if(this.dsSearch.getRowCount() > 0){
        		this.dsSearch.clearData();

        	}

        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "ymdSe"		, this.divForm.form.divSch.form.cboCrtr.value);
        	this.dsSearch.setColumn(0, "bgngYmd"	, this.divForm.form.divSch.form.DivCal.form.calBgngYmd.value);
        	this.dsSearch.setColumn(0, "endYmd"		, this.divForm.form.divSch.form.DivCal.form.calEndYmd.value);
        	this.dsSearch.setColumn(0, "aplyNo"		, this.divForm.form.divSch.form.edtAplyNo.value);
        	this.dsSearch.setColumn(0, "aplcntNm"	, this.divForm.form.divSch.form.edtAplcnt.value);
        	this.dsSearch.setColumn(0, "prcrNm"		, this.divForm.form.divSch.form.edtPrcr.value);
        	this.dsSearch.setColumn(0, "instNm"		, this.divForm.form.divSch.form.edtInst.value);
        	this.dsSearch.setColumn(0, "deptNm"		, this.divForm.form.divSch.form.edtDept.value);
        	this.dsSearch.setColumn(0, "custTypeCd"	, this.divForm.form.divSch.form.cboCust.value);

        	var strSvcId    = "search";
        	var strSvcUrl   = "fltInfoMdaExprsSrvcPrcs/mediaExprsPrcsListInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : fnCallback
         * @description : 서비스 콜백
         ***************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "fnComCdSrch" : // 공통코드 조회
        			// 전체 조회를 위해 [선택] 추가
        			this.dsCustType.insertRow(0);
        			this.dsCustType.setColumn(0, "cdId", "");
        			this.dsCustType.setColumn(0, "cdNm", "[선택]");
        			this.dsCustType.setColumn(0, "lev", 1);

        			this.dsType.copyData(this.dsCustType);

        			// filter
        			this.dsType.filter("lev == 1");

        			break;

        		case "search": //조회
        			this.divForm.form.divGrd.form.staTotal.text = "총 <fc v='#1e4ebe'>" + this.dsList.getRowCount() + "</fc>건";

        			break;

        		case "flrplnAplyTmprStrg" : //임시저장

        			break;

        		case "flrplnAply" : //신청

        			break;

        		case "getAplySeNm" :  // 공통코드(신청구분)
        			this.dsSearch.setColumn(0, "aplySeCd", "TSPCAD010");
        			this.dsCadMaster.setColumn(0, "aplySeCd", "TSPCAD010");
        			this.dsSearch.setColumn(0, "aplySeNm", this.cfnGvbkAplySeNm());
        			break;
        		default :
        			break;
        	}
        };

        /**************************************************************************
         * @name : fnPopupCallback
         * @description : 팝업에 관한 콜백 함수
         ***************************************************************************/
        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if (sPopupId == "plcSch") // 담당자 찾기
        	{
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);

        		var sUserId = objRtn.rUserId;
        		var sUserNm = objRtn.rUserNm;

        		if (!this.gfnIsNull(sUserId))
        		{
        			for(i=0; i < this.dsWfEmps.rowcount; i++)
        			{
        				var vDsUserId = this.dsWfEmps.getColumn(i,"wfeEmpId");
        				if(vDsUserId == sUserId)
        				{
        					this.divFrom01.form.divEdtPop01.form.mtiArptPicId.setSelect(i,true);
        					return;
        				}
        			}
        			nRow = this.dsWfEmps.addRow();
        			this.dsWfEmps.setColumn(nRow, "wfeEmpId" , sUserId);
        			this.dsWfEmps.setColumn(nRow, "userNm" , sUserNm);
        			/**수정해야함*/
        			this.dsWfEmps.setColumn(nRow, "wfeId" , "1000");
        			this.dsWfEmps.setColumn(nRow, "wfeJobCd" , "TAS10373");
        			this.dsWfEmps.setColumn(nRow, "wfeSrcEntId" , "CAD");
        			////////////////////////////////////////////////////////
        			this.divFrom01.form.divEdtPop01.form.mtiArptPicId.setSelect(nRow,true);
        		}
        	}
        }

        /**************************************************************************
         * @name : msgCallback
         * @description : 얼럿창 콜백 함수
         ***************************************************************************/
        this.msgCallback = function(sPopupId, sRtn) {
        	var oRtn = JSON.parse(sRtn);
        	if(sPopupId == "save_confirm") {
        		if(oRtn.result == "Y") {
        			var vStrSvcId  = "flrplnAply";
        			var vStrSvcUrl = "cad/flrplnAply.do";//신청
        			this.fnSave(vStrSvcId, vStrSvcUrl);
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : cboType_onitemchanged
         * @description : 고객유형콤보 수정 시
         ***************************************************************************/
        this.cboType_onitemchanged = function(obj,e)
        {
        	var objVal = obj.value;

        	if(this.gfnIsNull(objVal)){
        		this.divForm.form.divSch.form.cboCust.visible = false;

        	}else{ // null이 아닐때 고객콤보 visible true 처리
        		this.divForm.form.divSch.form.cboCust.visible = true;

        		// 0번째 [선택]의 상위 코드를 해당 유형코드로 수정
        		this.dsCustType.setColumn(0, "uprCd", objVal);

        		// visible true 시 해당 유형코드로 filter 해줌.
        		this.dsCustType.filter("uprCd == '" + objVal + "'");

        		// 고객콤보 [선택]으로 index 0 세팅
        		this.divForm.form.divSch.form.cboCust.index = 0;

        	}
        };

        /**************************************************************************
         * @name : btnSch_onclick
         * @description : 조회 버튼 클릭
         ***************************************************************************/
        this.btnSch_onclick = function(obj,e)
        {
        	// 조회
        	this.fnSearch();
        };

        /**************************************************************************
         * @name : grdList_oncellclick
         * @description : 그리드 클릭
         ***************************************************************************/
        this.grdList_oncellclick = function(obj,e)
        {
        	// 신청번호 index값
        	var cellIdx = obj.getBindCellIndex("BODY", "aplyNo");

        	if(e.row > -1){
        		if(cellIdx == e.cell){
        			var aplyNo = this.dsList.getColumn(e.row, "aplyNo");

        			this.gfnAlertMsg("msg", "MSG_011", ["chg 신청번호(" + aplyNo + ")팝업\n작업 완료 시 연결 예정!!"]);

        		}

        	}
        	/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        	/* 얘로 팝업 호출하는지는 확인 후 연결 해야함.
        	var param = {
        		"sampleDataId" : ""
        	};



        	var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        	var sMenuUrl = "publishing::work/"+this.divForm.form.divSch.form.Edit00_00.value+".xfdl";
        	var actNm = this.divForm.form.divSch.form.Edit00_00.value;

        	this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);
        	*/
        	/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.staCrtrYmd.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divSch.form.staAplyNo.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.btnSch_onclick,this);
            this.divForm.form.divSch.form.staInst.addEventHandler("onclick",this.divForm_divSch_staLabel05_02_onclick,this);
            this.divForm.form.divSch.form.cboType.addEventHandler("onitemchanged",this.cboType_onitemchanged,this);
            this.divForm.form.divGrd.form.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
        };
        this.loadIncludeScript("LIF044M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
