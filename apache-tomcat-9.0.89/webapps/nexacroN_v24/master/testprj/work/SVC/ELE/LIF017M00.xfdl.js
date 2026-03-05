(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF017M00");
            this.set_titletext("전기 서비스처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,3800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsJobSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"jobGrpSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsStepSeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrvcPrcsCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"authrtPrcrSe\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsStepSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"cnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsATF00028SrvcPrcsList", this);
            obj._setContents("<ColumnInfo><Column id=\"rnum\" type=\"STRING\" size=\"256\"/><Column id=\"rno\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"tOrder\" type=\"STRING\" size=\"256\"/><Column id=\"entId\" type=\"STRING\" size=\"256\"/><Column id=\"taskCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"docNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptRnb\" type=\"STRING\" size=\"256\"/><Column id=\"rnb\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rtosIdntyDmndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"comurmPstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngHr\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"allCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTaskPrcsStepSeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"taskPrcsStepSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsStepSeCdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsATF00141SrvcPrcsList", this);
            obj._setContents("<ColumnInfo><Column id=\"rnum\" type=\"STRING\" size=\"256\"/><Column id=\"rno\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"tOrder\" type=\"STRING\" size=\"256\"/><Column id=\"entId\" type=\"STRING\" size=\"256\"/><Column id=\"taskCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"docNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptRnb\" type=\"STRING\" size=\"256\"/><Column id=\"rnb\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rtosIdntyDmndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"comurmPstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngHr\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"allCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsATF00030SrvcPrcsList", this);
            obj._setContents("<ColumnInfo><Column id=\"rnum\" type=\"STRING\" size=\"256\"/><Column id=\"rno\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"tOrder\" type=\"STRING\" size=\"256\"/><Column id=\"entId\" type=\"STRING\" size=\"256\"/><Column id=\"taskCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"docNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptRnb\" type=\"STRING\" size=\"256\"/><Column id=\"rnb\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rtosIdntyDmndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"comurmPstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngHr\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"allCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsATF00149SrvcPrcsList", this);
            obj._setContents("<ColumnInfo><Column id=\"rnum\" type=\"STRING\" size=\"256\"/><Column id=\"rno\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"tOrder\" type=\"STRING\" size=\"256\"/><Column id=\"entId\" type=\"STRING\" size=\"256\"/><Column id=\"taskCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"docNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptRnb\" type=\"STRING\" size=\"256\"/><Column id=\"rnb\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rtosIdntyDmndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"comurmPstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngHr\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"allCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsATF00145SrvcPrcsList", this);
            obj._setContents("<ColumnInfo><Column id=\"rnum\" type=\"STRING\" size=\"256\"/><Column id=\"rno\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"tOrder\" type=\"STRING\" size=\"256\"/><Column id=\"entId\" type=\"STRING\" size=\"256\"/><Column id=\"taskCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"docNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptRnb\" type=\"STRING\" size=\"256\"/><Column id=\"rnb\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rtosIdntyDmndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"comurmPstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngHr\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"allCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsATF10022SrvcPrcsList", this);
            obj._setContents("<ColumnInfo><Column id=\"rnum\" type=\"STRING\" size=\"256\"/><Column id=\"rno\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"tOrder\" type=\"STRING\" size=\"256\"/><Column id=\"entId\" type=\"STRING\" size=\"256\"/><Column id=\"taskCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"docNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptRnb\" type=\"STRING\" size=\"256\"/><Column id=\"rnb\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rtosIdntyDmndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"comurmPstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngHr\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"allCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsATF00084SrvcPrcsList", this);
            obj._setContents("<ColumnInfo><Column id=\"rnum\" type=\"STRING\" size=\"256\"/><Column id=\"rno\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"tOrder\" type=\"STRING\" size=\"256\"/><Column id=\"entId\" type=\"STRING\" size=\"256\"/><Column id=\"taskCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"docNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptRnb\" type=\"STRING\" size=\"256\"/><Column id=\"rnb\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rtosIdntyDmndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"comurmPstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngHr\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"allCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,"3700","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("통신서비스처리");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divMnCk","98","75","100%","80",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","208","40",null,null,null,null,null,null,this.divForm.form.divMnCk.form);
            obj.set_taborder("0");
            obj.set_text("WorkFlowMap");
            obj.set_cssclass("sta_WF_SchLabel, sta_WF_Txt50022");
            obj.set_flexshrink("0");
            this.divForm.form.divMnCk.addChild(obj.name, obj);

            obj = new Panel("palCkWrap","285","24","271","40",null,null,null,null,null,null,this.divForm.form.divMnCk.form);
            obj.set_taborder("1");
            obj.set_flexgrow("2");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("nowrap");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ck01\"/><PanelItem id=\"PanelItem06\" componentid=\"ck02\"/><PanelItem id=\"PanelItem02\" componentid=\"ck03\"/></Contents>");
            this.divForm.form.divMnCk.addChild(obj.name, obj);

            obj = new Panel("Panel00","1694.00","398","560","40",null,null,null,null,"45",null,this.divForm.form.divMnCk.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem03\" componentid=\"palCkWrap\"/></Contents>");
            this.divForm.form.divMnCk.addChild(obj.name, obj);

            obj = new CheckBox("ck03","149.00","0","102","40",null,null,null,null,null,null,this.divForm.form.divMnCk.form);
            obj.set_taborder("5");
            obj.set_text("협조처리");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.divForm.form.divMnCk.addChild(obj.name, obj);

            obj = new CheckBox("ck02","387","14","133","40",null,null,null,null,null,null,this.divForm.form.divMnCk.form);
            obj.set_taborder("4");
            obj.set_text("전기신청/해지");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.divForm.form.divMnCk.addChild(obj.name, obj);

            obj = new CheckBox("ck01","0","0","129","40",null,null,null,null,null,null,this.divForm.form.divMnCk.form);
            obj.set_taborder("3");
            obj.set_text("이동지역");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.divForm.form.divMnCk.addChild(obj.name, obj);

            obj = new Div("divATF00008","1665","29","100%","900",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("통신신청");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_Step");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("btnStepGroup","20","0","100%","60",null,null,null,null,null,null,this.divForm.form.divATF00008.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_StepGroup");
            obj.set_spacing("0px 0px 20px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnStepService\"/><PanelItem id=\"PanelItem04\" componentid=\"btnStepNew\"/><PanelItem id=\"PanelItem01\" componentid=\"staStepEx\"/></Contents>");
            this.divForm.form.divATF00008.addChild(obj.name, obj);

            obj = new Button("btnStepService","774.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divATF00008.form);
            obj.set_taborder("1");
            obj.set_text("전기신청/해지");
            obj.set_cssclass("btn_WF_StepTit");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00008.addChild(obj.name, obj);

            obj = new Button("btnStepNew","804.00","10","240","40",null,null,null,null,null,null,this.divForm.form.divATF00008.form);
            obj.set_taborder("2");
            obj.set_text("전기사용(공사건물)");
            obj.set_cssclass("btn_WF_StepSub");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00008.addChild(obj.name, obj);

            obj = new Static("staStepEx","571","128","75","40",null,null,null,null,null,null,this.divForm.form.divATF00008.form);
            obj.set_taborder("3");
            obj.set_text("나 / 작업그룹");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00008.addChild(obj.name, obj);

            obj = new Div("palStepGroup","10.00","110","100%","110",null,null,null,null,null,null,this.divForm.form.divATF00008.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.divForm.form.divATF00008.addChild(obj.name, obj);

            obj = new Static("staStepTit01","20.00","0","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepGroup.form);
            obj.set_taborder("0");
            obj.set_text("신청 및 접수");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("none");
            this.divForm.form.divATF00008.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00010INDV","0","0","50","30",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepGroup.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("none");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00008.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls01","55.00","0","7","30",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepGroup.form);
            obj.set_taborder("2");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00008.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00010WRKGRP","67.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepGroup.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("none");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00008.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palCnt","20.00","54","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepGroup.form);
            obj.set_taborder("4");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj.set_enableevent("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnACT00010INDV\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls01\"/><PanelItem id=\"PanelItem03\" componentid=\"btnACT00010WRKGRP\"/></Contents>");
            this.divForm.form.divATF00008.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palACT00010","0","-3","160","90",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepGroup.form);
            obj.set_taborder("5");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit01\"/><PanelItem id=\"PanelItem02\" componentid=\"palCnt\"/></Contents>");
            this.divForm.form.divATF00008.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw01","220.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepGroup.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divATF00008.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit02","30.00","10","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepGroup.form);
            obj.set_taborder("7");
            obj.set_text("검침및급전");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("none");
            this.divForm.form.divATF00008.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00012INDV","10.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepGroup.form);
            obj.set_taborder("8");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("none");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00008.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls02","65.00","10","7","30",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepGroup.form);
            obj.set_taborder("9");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00008.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00012WRKGRP","77.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepGroup.form);
            obj.set_taborder("10");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("none");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00008.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palCnt2","30.00","64","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepGroup.form);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnACT00012INDV\"/><PanelItem id=\"PanelItem02\" componentid=\"StepSls02\"/><PanelItem id=\"PanelItem01\" componentid=\"btnACT00012WRKGRP\"/></Contents>");
            this.divForm.form.divATF00008.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palACT00065","230.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepGroup.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit02\"/><PanelItem id=\"PanelItem02\" componentid=\"palCnt2\"/></Contents>");
            this.divForm.form.divATF00008.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw02","440.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepGroup.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divATF00008.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit03","40.00","20","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepGroup.form);
            obj.set_taborder("14");
            obj.set_text("완료처리");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("none");
            this.divForm.form.divATF00008.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00013INDV","20.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepGroup.form);
            obj.set_taborder("15");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("none");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00008.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls03","75.00","20","7","30",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepGroup.form);
            obj.set_taborder("16");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00008.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00013WRKGRP","87.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepGroup.form);
            obj.set_taborder("17");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("none");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00008.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palCnt3","40.00","74","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepGroup.form);
            obj.set_taborder("18");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnACT00013INDV\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls03\"/><PanelItem id=\"PanelItem03\" componentid=\"btnACT00013WRKGRP\"/></Contents>");
            this.divForm.form.divATF00008.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palACT00066","450.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepGroup.form);
            obj.set_taborder("19");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit03\"/><PanelItem id=\"PanelItem02\" componentid=\"palCnt3\"/></Contents>");
            this.divForm.form.divATF00008.form.palStepGroup.addChild(obj.name, obj);

            obj = new Div("palStepConGroup","20","199","100%","510",null,null,null,null,null,null,this.divForm.form.divATF00008.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Step");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.form.divATF00008.addChild(obj.name, obj);

            obj = new Div("divNvWrap","10","20","100%","60",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepConGroup.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divATF00008.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Panel("Panel01","20","0","80%","60",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("7");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staNvLabel01\"/><PanelItem id=\"PanelItem01\" componentid=\"staNvArw01\"/><PanelItem id=\"PanelItem02\" componentid=\"staNvLabel02\"/><PanelItem id=\"PanelItem03\" componentid=\"staNvArw02\"/><PanelItem id=\"PanelItem04\" componentid=\"staNvLabel03\"/></Contents>");
            this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Panel("Panel00","315","15","15%","60",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("6");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnListClose\"/></Contents>");
            this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel01","20","0","164","60",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("4");
            obj.set_text("전기사용(공사건물)");
            obj.set_cssclass("sta_WF_NvLabel");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw01","198.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel02","199","0","103","60",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("1");
            obj.set_text("신청및접수");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw02","338.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel03","363.00","130","100","60",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("3");
            obj.set_text("나");
            obj.set_fittocontents("none");
            this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Button("btnListClose","1346","0","34","34",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_MDI_CloseAll");
            this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Div("divGrd","10","109","100%","350",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepConGroup.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divATF00008.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Grid("grdList","0","54","100.00%",null,null,"6",null,null,null,null,this.divForm.form.divATF00008.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsATF00028SrvcPrcsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"210\"/><Column size=\"150\"/><Column size=\"350\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"서비스구분\"/><Cell col=\"3\" text=\"지역구분\"/><Cell col=\"4\" text=\"신청자회사\"/><Cell col=\"5\" text=\"신청자\"/><Cell col=\"6\" text=\"신청일시\"/><Cell col=\"7\" text=\"처리자\"/><Cell col=\"8\" text=\"연락처\"/><Cell col=\"9\" text=\"처리작업그룹\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:aplyNo\" displaytype=\"text\" textAlign=\"center\" cssclass=\"CellLink\" cursor=\"pointer\"/><Cell col=\"1\" text=\"bind:taskNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:docNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:pstnSeNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:aplcntInstNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:aplcntNm\" displaytype=\"text\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:aplyDt\" displaytype=\"mask\" textAlign=\"center\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\"/><Cell col=\"7\" text=\"bind:prcrNm\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:prcrTelno\" textAlign=\"center\"/><Cell col=\"9\" cssclass=\"CellEnd\" text=\"bind:prcrJobGroupNm\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.divATF00008.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divATF00008.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#1e4ebe\'> 0</fc>건");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divForm.form.divATF00008.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divATF00012","1665","29","100%","900",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("통신변경");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_Step");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("btnStepGroup","20","0","100%","60",null,null,null,null,null,null,this.divForm.form.divATF00012.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_StepGroup");
            obj.set_spacing("0px 0px 20px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnStepService\"/><PanelItem id=\"PanelItem04\" componentid=\"btnStepNew\"/><PanelItem id=\"PanelItem01\" componentid=\"staStepEx\"/></Contents>");
            this.divForm.form.divATF00012.addChild(obj.name, obj);

            obj = new Button("btnStepService","774.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divATF00012.form);
            obj.set_taborder("1");
            obj.set_text("전기신청/해지");
            obj.set_cssclass("btn_WF_StepTit");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00012.addChild(obj.name, obj);

            obj = new Div("palStepGroup","10.00","110","100%","110",null,null,null,null,null,null,this.divForm.form.divATF00012.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.divForm.form.divATF00012.addChild(obj.name, obj);

            obj = new Static("staStepTit01","20.00","0","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("0");
            obj.set_text("신청 및 접수");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("none");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00015INDV","0.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("none");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls01","55.00","0","7","30",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("2");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00015WRKGRP","67.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("none");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon01","20.00","54","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("4");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnACT00015INDV\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls01\"/><PanelItem id=\"PanelItem03\" componentid=\"btnACT00015WRKGRP\"/></Contents>");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox01","0.00","-3","160","90",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("5");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit01\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon01\"/></Contents>");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw01","220.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit02","30.00","10","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("7");
            obj.set_text("서류제출");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("none");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00017INDV","10.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("8");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("none");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls02","65.00","10","7","30",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("9");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00017WRKGRP","77.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("10");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("none");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon02","30.00","64","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnACT00017INDV\"/><PanelItem id=\"PanelItem02\" componentid=\"StepSls02\"/><PanelItem id=\"PanelItem01\" componentid=\"btnACT00017WRKGRP\"/></Contents>");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox02","230.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit02\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon02\"/></Contents>");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw02","440.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit03","40.00","20","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("14");
            obj.set_text("공사수전요청");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("none");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00018INDV","20.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("15");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls03","75.00","20","7","30",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("16");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00018WRKGRP","87.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("17");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon03","40.00","74","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("18");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnACT00018INDV\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls03\"/><PanelItem id=\"PanelItem03\" componentid=\"btnACT00018WRKGRP\"/></Contents>");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox03","450.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("19");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit03\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon03\"/></Contents>");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw02_00","440.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit03_00","-1","-556","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("22");
            obj.set_text("검침및급전");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("none");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox04","450.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("21");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"palStepBoxCon03_00\"/></Contents>");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw02_00_00","440.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("27");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox05","450.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("28");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"palStepBoxCon03_00_00\"/></Contents>");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls03_00_00","75.00","20","7","30",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("32");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00020INDV","20.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("31");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon03_00_00","-1","-502","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("30");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnACT00020INDV\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls03_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"btnACT00020WRKGRP\"/></Contents>");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit03_00_00","-1","-556","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("29");
            obj.set_text("완료처리");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("none");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00019WRKGRP","87.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("26");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls03_00","75.00","20","7","30",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("25");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00019INDV","20.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("24");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon03_00","-1","-502","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("23");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnACT00019INDV\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"btnACT00019WRKGRP\"/></Contents>");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00020WRKGRP","87.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepGroup.form);
            obj.set_taborder("33");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00012.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnStepNew","804.00","10","240","40",null,null,null,null,null,null,this.divForm.form.divATF00012.form);
            obj.set_taborder("2");
            obj.set_text("전기사용(공사미소유건물,옥외)");
            obj.set_cssclass("btn_WF_StepSub");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00012.addChild(obj.name, obj);

            obj = new Static("staStepEx","571","128","78","40",null,null,null,null,null,null,this.divForm.form.divATF00012.form);
            obj.set_taborder("3");
            obj.set_text("나 / 작업 그룹");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00012.addChild(obj.name, obj);

            obj = new Div("palStepConGroup","20","199","100%","510",null,null,null,null,null,null,this.divForm.form.divATF00012.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Step");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.form.divATF00012.addChild(obj.name, obj);

            obj = new Div("divNvWrap","10","20","100%","60",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepConGroup.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divATF00012.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Static("staNvLabel01","20","0","235","60",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("4");
            obj.set_text("전기사용(공사미소유건물,옥외)");
            obj.set_cssclass("sta_WF_NvLabel");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw01","198.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel02","265","0","117","60",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("1");
            obj.set_text("신청및접수");
            obj.set_fittocontents("width");
            obj.set_wordWrap("none");
            this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw02","338.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel03","363.00","130","52","60",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("3");
            obj.set_text("작업그룹");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","0","80%","60",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staNvLabel01\"/><PanelItem id=\"PanelItem01\" componentid=\"staNvArw01\"/><PanelItem id=\"PanelItem05\" componentid=\"staNvLabel02\"/><PanelItem id=\"PanelItem02\" componentid=\"staNvArw02\"/><PanelItem id=\"PanelItem04\" componentid=\"staNvLabel03\"/></Contents>");
            this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Button("btnListClose","1346","0","34","34",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_MDI_CloseAll");
            this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","321","18","15%","60",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("6");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnListClose\"/></Contents>");
            this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Div("divGrd","10","109","100%","350",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepConGroup.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divATF00012.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Grid("grdList","0","54","100.00%",null,null,"6",null,null,null,null,this.divForm.form.divATF00012.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsATF00141SrvcPrcsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"210\"/><Column size=\"150\"/><Column size=\"350\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"서비스구분\"/><Cell col=\"3\" text=\"지역구분\"/><Cell col=\"4\" text=\"신청자회사\"/><Cell col=\"5\" text=\"신청자\"/><Cell col=\"6\" text=\"신청일시\"/><Cell col=\"7\" text=\"처리자\"/><Cell col=\"8\" text=\"연락처\"/><Cell col=\"9\" text=\"처리작업그룹\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:aplyNo\" displaytype=\"text\" textAlign=\"center\" cssclass=\"CellLink\" cursor=\"pointer\"/><Cell col=\"1\" text=\"bind:jobNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:docNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:pstnSeNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:rgtrInstNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:rgtrNm\" displaytype=\"text\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:aplyDt\" displaytype=\"mask\" textAlign=\"center\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\"/><Cell col=\"7\" text=\"bind:prcrNm\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:prcrOnlnNo\" textAlign=\"center\"/><Cell col=\"9\" cssclass=\"CellEnd\" text=\"bind:prcrJobGroupNm\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.divATF00012.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divATF00012.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#1e4ebe\'> 0</fc>건");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divForm.form.divATF00012.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divATF00014","18","1592","100.00%","900",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("통신해지");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_Step");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("btnStepGroup","20","0","100%","60",null,null,null,null,null,null,this.divForm.form.divATF00014.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_StepGroup");
            obj.set_spacing("0px 0px 20px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnStepService\"/><PanelItem id=\"PanelItem04\" componentid=\"btnStepNew\"/><PanelItem id=\"PanelItem01\" componentid=\"staStepEx\"/></Contents>");
            this.divForm.form.divATF00014.addChild(obj.name, obj);

            obj = new Button("btnStepService","774.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divATF00014.form);
            obj.set_taborder("1");
            obj.set_text("전기신청/해지");
            obj.set_cssclass("btn_WF_StepTit");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00014.addChild(obj.name, obj);

            obj = new Div("palStepGroup","10.00","110","100%","110",null,null,null,null,null,null,this.divForm.form.divATF00014.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.divForm.form.divATF00014.addChild(obj.name, obj);

            obj = new Static("staStepTit01","20.00","0","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepGroup.form);
            obj.set_taborder("0");
            obj.set_text("신청 및 접수");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("none");
            this.divForm.form.divATF00014.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00022INDV","0.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepGroup.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00014.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls01","55.00","0","7","30",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepGroup.form);
            obj.set_taborder("2");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00014.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00022WRKGRP","67.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepGroup.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00014.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon01","20.00","54","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepGroup.form);
            obj.set_taborder("4");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnACT00022INDV\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls01\"/><PanelItem id=\"PanelItem03\" componentid=\"btnACT00022WRKGRP\"/></Contents>");
            this.divForm.form.divATF00014.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox01","0.00","-3","160","90",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepGroup.form);
            obj.set_taborder("5");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit01\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon01\"/></Contents>");
            this.divForm.form.divATF00014.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw01","220.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepGroup.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divATF00014.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit02","30.00","10","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepGroup.form);
            obj.set_taborder("7");
            obj.set_text("원상회복");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("none");
            this.divForm.form.divATF00014.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00023INDV","10.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepGroup.form);
            obj.set_taborder("8");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00014.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls02","65.00","10","7","30",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepGroup.form);
            obj.set_taborder("9");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00014.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00023WRKGRP","77.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepGroup.form);
            obj.set_taborder("10");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00014.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon02","30.00","64","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepGroup.form);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnACT00023INDV\"/><PanelItem id=\"PanelItem02\" componentid=\"StepSls02\"/><PanelItem id=\"PanelItem01\" componentid=\"btnACT00023WRKGRP\"/></Contents>");
            this.divForm.form.divATF00014.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox02","230.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepGroup.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit02\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon02\"/></Contents>");
            this.divForm.form.divATF00014.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw02","440.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepGroup.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divATF00014.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit03","40.00","20","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepGroup.form);
            obj.set_taborder("14");
            obj.set_text("완료처리 ");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("none");
            this.divForm.form.divATF00014.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00024INDV","20.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepGroup.form);
            obj.set_taborder("15");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00014.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls03","75.00","20","7","30",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepGroup.form);
            obj.set_taborder("16");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00014.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00024WRKGRP","87.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepGroup.form);
            obj.set_taborder("17");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00014.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon03","40.00","74","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepGroup.form);
            obj.set_taborder("18");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnACT00024INDV\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls03\"/><PanelItem id=\"PanelItem03\" componentid=\"btnACT00024WRKGRP\"/></Contents>");
            this.divForm.form.divATF00014.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox03","450.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepGroup.form);
            obj.set_taborder("19");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit03\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon03\"/></Contents>");
            this.divForm.form.divATF00014.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnStepNew","804.00","10","240","40",null,null,null,null,null,null,this.divForm.form.divATF00014.form);
            obj.set_taborder("2");
            obj.set_text("전기해지(공사건물)");
            obj.set_cssclass("btn_WF_StepSub");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00014.addChild(obj.name, obj);

            obj = new Static("staStepEx","571","128","78","40",null,null,null,null,null,null,this.divForm.form.divATF00014.form);
            obj.set_taborder("3");
            obj.set_text("나 / 작업 그룹");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00014.addChild(obj.name, obj);

            obj = new Div("palStepConGroup","20","199","100%","510",null,null,null,null,null,null,this.divForm.form.divATF00014.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Step");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.form.divATF00014.addChild(obj.name, obj);

            obj = new Div("divNvWrap","10","20","100%","60",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepConGroup.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divATF00014.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Static("staNvLabel01","20","0","104","60",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("4");
            obj.set_text("전기해지(공사건물)");
            obj.set_cssclass("sta_WF_NvLabel");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw01","198.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel02","223.00","130","65","60",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("1");
            obj.set_text("신청및접수");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw02","338.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel03","363.00","130","52","60",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("3");
            obj.set_text("작업그룹");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","0","80%","60",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staNvLabel01\"/><PanelItem id=\"PanelItem01\" componentid=\"staNvArw01\"/><PanelItem id=\"PanelItem02\" componentid=\"staNvLabel02\"/><PanelItem id=\"PanelItem03\" componentid=\"staNvArw02\"/><PanelItem id=\"PanelItem04\" componentid=\"staNvLabel03\"/></Contents>");
            this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Button("btnListClose","1346","0","34","34",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_MDI_CloseAll");
            this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","558","0","15%","60",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("6");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnListClose\"/></Contents>");
            this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Div("divGrd","10","109","100%","350",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepConGroup.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divATF00014.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Grid("grdList","0","54","100.00%",null,null,"6",null,null,null,null,this.divForm.form.divATF00014.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsATF00030SrvcPrcsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"210\"/><Column size=\"150\"/><Column size=\"350\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"서비스구분\"/><Cell col=\"3\" text=\"지역구분\"/><Cell col=\"4\" text=\"신청자회사\"/><Cell col=\"5\" text=\"신청자\"/><Cell col=\"6\" text=\"신청일시\"/><Cell col=\"7\" text=\"처리자\"/><Cell col=\"8\" text=\"연락처\"/><Cell col=\"9\" text=\"처리작업그룹\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:aplyNo\" displaytype=\"text\" textAlign=\"center\" cssclass=\"CellLink\" cursor=\"pointer\"/><Cell col=\"1\" text=\"bind:jobNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:docNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:pstnSeNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:rgtrInstNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:rgtrNm\" displaytype=\"text\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:aplyDt\" displaytype=\"mask\" textAlign=\"center\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\"/><Cell col=\"7\" text=\"bind:prcrNm\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:prcrOnlnNo\" textAlign=\"center\"/><Cell col=\"9\" cssclass=\"CellEnd\" text=\"bind:prcrJobGroupNm\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.divATF00014.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divATF00014.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#1e4ebe\'> 0</fc>건");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divForm.form.divATF00014.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divATF00016","10","2290","100.00%","900",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("통신일시이용중단");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_Step");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("btnStepGroup","20","0","100%","60",null,null,null,null,null,null,this.divForm.form.divATF00016.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_StepGroup");
            obj.set_spacing("0px 0px 20px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnStepService\"/><PanelItem id=\"PanelItem04\" componentid=\"btnStepNew\"/><PanelItem id=\"PanelItem01\" componentid=\"staStepEx\"/></Contents>");
            this.divForm.form.divATF00016.addChild(obj.name, obj);

            obj = new Button("btnStepService","774.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divATF00016.form);
            obj.set_taborder("1");
            obj.set_text("전기신청/해지");
            obj.set_cssclass("btn_WF_StepTit");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00016.addChild(obj.name, obj);

            obj = new Div("palStepGroup","10.00","110","100%","110",null,null,null,null,null,null,this.divForm.form.divATF00016.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.divForm.form.divATF00016.addChild(obj.name, obj);

            obj = new Static("staStepTit01","20.00","0","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepGroup.form);
            obj.set_taborder("0");
            obj.set_text("신청 및 접수");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00016.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00026INDV","0.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepGroup.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00016.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls01","55.00","0","7","30",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepGroup.form);
            obj.set_taborder("2");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00016.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00026WRKGRP","67.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepGroup.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00016.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon01","20.00","54","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepGroup.form);
            obj.set_taborder("4");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnACT00026INDV\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls01\"/><PanelItem id=\"PanelItem03\" componentid=\"btnACT00026WRKGRP\"/></Contents>");
            this.divForm.form.divATF00016.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox01","0.00","-3","160","90",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepGroup.form);
            obj.set_taborder("5");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit01\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon01\"/></Contents>");
            this.divForm.form.divATF00016.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw01","220.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepGroup.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divATF00016.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit02","30.00","10","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepGroup.form);
            obj.set_taborder("7");
            obj.set_text("완료처리");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("none");
            this.divForm.form.divATF00016.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00029INDV","10.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepGroup.form);
            obj.set_taborder("8");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00016.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls02","65.00","10","7","30",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepGroup.form);
            obj.set_taborder("9");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00016.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00029WRKGRP","77.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepGroup.form);
            obj.set_taborder("10");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00016.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon02","30.00","64","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepGroup.form);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnACT00029INDV\"/><PanelItem id=\"PanelItem02\" componentid=\"StepSls02\"/><PanelItem id=\"PanelItem01\" componentid=\"btnACT00029WRKGRP\"/></Contents>");
            this.divForm.form.divATF00016.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox02","230.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepGroup.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit02\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon02\"/></Contents>");
            this.divForm.form.divATF00016.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnStepNew","804.00","10","240","40",null,null,null,null,null,null,this.divForm.form.divATF00016.form);
            obj.set_taborder("2");
            obj.set_text("전기해지(공사미소유건물,옥외)");
            obj.set_cssclass("btn_WF_StepSub");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00016.addChild(obj.name, obj);

            obj = new Static("staStepEx","571","128","78","40",null,null,null,null,null,null,this.divForm.form.divATF00016.form);
            obj.set_taborder("3");
            obj.set_text("나 / 작업 그룹");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00016.addChild(obj.name, obj);

            obj = new Div("palStepConGroup","20","199","100%","510",null,null,null,null,null,null,this.divForm.form.divATF00016.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Step");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.form.divATF00016.addChild(obj.name, obj);

            obj = new Div("divNvWrap","10","20","100%","60",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepConGroup.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divATF00016.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Static("staNvLabel01","83","130","130","60",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("4");
            obj.set_text("전기해지(공사미소유건물,옥외)");
            obj.set_cssclass("sta_WF_NvLabel");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw01","198.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel02","223.00","130","65","60",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("1");
            obj.set_text("신청및접수");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw02","338.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel03","363.00","130","52","60",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("3");
            obj.set_text("작업그룹");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","0","80%","60",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staNvLabel01\"/><PanelItem id=\"PanelItem01\" componentid=\"staNvArw01\"/><PanelItem id=\"PanelItem02\" componentid=\"staNvLabel02\"/><PanelItem id=\"PanelItem03\" componentid=\"staNvArw02\"/><PanelItem id=\"PanelItem04\" componentid=\"staNvLabel03\"/></Contents>");
            this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","558","0","15%","60",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("6");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnListClose\"/></Contents>");
            this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Button("btnListClose","1346","0","34","34",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_MDI_CloseAll");
            this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Div("divGrd","10","109","100%","350",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepConGroup.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divATF00016.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Grid("grdList","0","54","100.00%",null,null,"6",null,null,null,null,this.divForm.form.divATF00016.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsATF00145SrvcPrcsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"210\"/><Column size=\"150\"/><Column size=\"350\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"서비스구분\"/><Cell col=\"3\" text=\"지역구분\"/><Cell col=\"4\" text=\"신청자회사\"/><Cell col=\"5\" text=\"신청자\"/><Cell col=\"6\" text=\"신청일시\"/><Cell col=\"7\" text=\"처리자\"/><Cell col=\"8\" text=\"연락처\"/><Cell col=\"9\" text=\"처리작업그룹\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:aplyNo\" displaytype=\"text\" textAlign=\"center\" cssclass=\"CellLink\" cursor=\"pointer\"/><Cell col=\"1\" text=\"bind:jobNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:docNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:pstnSeNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:rgtrInstNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:rgtrNm\" displaytype=\"text\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:aplyDt\" displaytype=\"mask\" textAlign=\"center\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\"/><Cell col=\"7\" text=\"bind:prcrNm\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:prcrOnlnNo\" textAlign=\"center\"/><Cell col=\"9\" cssclass=\"CellEnd\" text=\"bind:prcrJobGroupNm\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.divATF00016.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divATF00016.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#1e4ebe\'>1</fc>건");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divForm.form.divATF00016.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divATF00020","52","2430","100.00%","900",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_text("통신일시이용중단해제");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_Step");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("btnStepGroup","20","0","100%","60",null,null,null,null,null,null,this.divForm.form.divATF00020.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_StepGroup");
            obj.set_spacing("0px 0px 20px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnStepService\"/><PanelItem id=\"PanelItem04\" componentid=\"btnStepNew\"/><PanelItem id=\"PanelItem01\" componentid=\"staStepEx\"/></Contents>");
            this.divForm.form.divATF00020.addChild(obj.name, obj);

            obj = new Button("btnStepService","774.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divATF00020.form);
            obj.set_taborder("1");
            obj.set_text("전기신청/해지");
            obj.set_cssclass("btn_WF_StepTit");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00020.addChild(obj.name, obj);

            obj = new Div("palStepGroup","10.00","110","100%","110",null,null,null,null,null,null,this.divForm.form.divATF00020.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.divForm.form.divATF00020.addChild(obj.name, obj);

            obj = new Static("staStepTit01","20.00","0","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("0");
            obj.set_text("신청 및 접수");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00034INDV","0.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls01","55.00","0","7","30",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("2");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00034WRKGRP","67.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon01","20.00","54","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("4");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnACT00034INDV\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls01\"/><PanelItem id=\"PanelItem03\" componentid=\"btnACT00034WRKGRP\"/></Contents>");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox01","0.00","-3","160","90",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("5");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit01\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon01\"/></Contents>");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw01","220.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit02","30.00","10","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("7");
            obj.set_text("작업 승인");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("none");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00035INDV","10.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("8");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls02","65.00","10","7","30",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("9");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00035WRKGRP","77.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("10");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon02","30.00","64","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnACT00035INDV\"/><PanelItem id=\"PanelItem02\" componentid=\"StepSls02\"/><PanelItem id=\"PanelItem01\" componentid=\"btnACT00035WRKGRP\"/></Contents>");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox02","230.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit02\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon02\"/></Contents>");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw02","440.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit03","40.00","20","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("14");
            obj.set_text("교체및안내");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("width");
            obj.set_wordWrap("none");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00036INDV","20.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("15");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls03","75.00","20","7","30",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("16");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00036WRKGRP","87.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("17");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon03","40.00","74","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("18");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnACT00036INDV\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls03\"/><PanelItem id=\"PanelItem03\" componentid=\"btnACT00036WRKGRP\"/></Contents>");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox03","450.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("19");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit03\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon03\"/></Contents>");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw02_00","440.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox03_00","450.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("21");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"palStepBoxCon03_00\"/></Contents>");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit03_00","-1","-1827","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("22");
            obj.set_text("완료처리");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("width");
            obj.set_wordWrap("none");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00037WRKGRP","87.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("26");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls03_00","75.00","20","7","30",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("25");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00037INDV","20.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("24");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon03_00","-1","-1773","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepGroup.form);
            obj.set_taborder("23");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnACT00037INDV\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"btnACT00037WRKGRP\"/></Contents>");
            this.divForm.form.divATF00020.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnStepNew","804.00","10","240","40",null,null,null,null,null,null,this.divForm.form.divATF00020.form);
            obj.set_taborder("2");
            obj.set_text("전기사용(형광램프신청)");
            obj.set_cssclass("btn_WF_StepSub");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00020.addChild(obj.name, obj);

            obj = new Static("staStepEx","571","128","78","40",null,null,null,null,null,null,this.divForm.form.divATF00020.form);
            obj.set_taborder("3");
            obj.set_text("나 / 작업 그룹");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00020.addChild(obj.name, obj);

            obj = new Div("palStepConGroup","20","199","100%","510",null,null,null,null,null,null,this.divForm.form.divATF00020.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Step");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.form.divATF00020.addChild(obj.name, obj);

            obj = new Div("divNvWrap","10","20","100%","60",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepConGroup.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divATF00020.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Static("staNvLabel01","83","130","130","60",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("4");
            obj.set_text("전기사용(형광램프신청)");
            obj.set_cssclass("sta_WF_NvLabel");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw01","198.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel02","223.00","130","65","60",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("1");
            obj.set_text("신청및접수");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw02","338.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel03","363.00","130","52","60",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("3");
            obj.set_text("작업그룹");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","0","80%","60",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staNvLabel01\"/><PanelItem id=\"PanelItem01\" componentid=\"staNvArw01\"/><PanelItem id=\"PanelItem02\" componentid=\"staNvLabel02\"/><PanelItem id=\"PanelItem03\" componentid=\"staNvArw02\"/><PanelItem id=\"PanelItem04\" componentid=\"staNvLabel03\"/></Contents>");
            this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","558","0","15%","60",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("6");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnListClose\"/></Contents>");
            this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Button("btnListClose","1346","0","34","34",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_MDI_CloseAll");
            this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Div("divGrd","10","109","100%","350",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepConGroup.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divATF00020.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Grid("grdList","0","54","100.00%",null,null,"6",null,null,null,null,this.divForm.form.divATF00020.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsATF00149SrvcPrcsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"210\"/><Column size=\"150\"/><Column size=\"350\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"서비스구분\"/><Cell col=\"3\" text=\"지역구분\"/><Cell col=\"4\" text=\"신청자회사\"/><Cell col=\"5\" text=\"신청자\"/><Cell col=\"6\" text=\"신청일시\"/><Cell col=\"7\" text=\"처리자\"/><Cell col=\"8\" text=\"연락처\"/><Cell col=\"9\" text=\"처리작업그룹\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:aplyNo\" displaytype=\"text\" textAlign=\"center\" cssclass=\"CellLink\" cursor=\"pointer\"/><Cell col=\"1\" text=\"bind:jobNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:docNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:pstnSeNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:rgtrInstNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:rgtrNm\" displaytype=\"text\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:aplyDt\" displaytype=\"mask\" textAlign=\"center\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\"/><Cell col=\"7\" text=\"bind:prcrNm\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:prcrOnlnNo\" textAlign=\"center\"/><Cell col=\"9\" cssclass=\"CellEnd\" text=\"bind:prcrJobGroupNm\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.divATF00020.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divATF00020.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#1e4ebe\'> 0</fc>건");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divForm.form.divATF00020.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divATF00022","0","2795","100.00%","900",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_text("통신실출입작업계획서");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_Step");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("btnStepGroup","20","0","100%","60",null,null,null,null,null,null,this.divForm.form.divATF00022.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_StepGroup");
            obj.set_spacing("0px 0px 20px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnStepService\"/><PanelItem id=\"PanelItem04\" componentid=\"btnStepNew\"/><PanelItem id=\"PanelItem01\" componentid=\"staStepEx\"/></Contents>");
            this.divForm.form.divATF00022.addChild(obj.name, obj);

            obj = new Button("btnStepService","774.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divATF00022.form);
            obj.set_taborder("1");
            obj.set_text("전기신청/해지");
            obj.set_cssclass("btn_WF_StepTit");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00022.addChild(obj.name, obj);

            obj = new Div("palStepGroup","10.00","110","100%","110",null,null,null,null,null,null,this.divForm.form.divATF00022.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.divForm.form.divATF00022.addChild(obj.name, obj);

            obj = new Static("staStepTit01","20.00","0","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("0");
            obj.set_text("신청 및 접수");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00039INDV","0.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls01","55.00","0","7","30",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("2");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00039WRKGRP","67.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon01","20.00","54","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("4");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnACT00039INDV\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls01\"/><PanelItem id=\"PanelItem03\" componentid=\"btnACT00039WRKGRP\"/></Contents>");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox01","0.00","-3","160","90",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("5");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit01\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon01\"/></Contents>");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw01","220.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit02","30.00","10","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("7");
            obj.set_text("반려확인");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("none");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00040INDV","10.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("8");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls02","65.00","10","7","30",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("9");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00040WRKGRP","77.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("10");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon02","30.00","64","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnACT00040INDV\"/><PanelItem id=\"PanelItem02\" componentid=\"StepSls02\"/><PanelItem id=\"PanelItem01\" componentid=\"btnACT00040WRKGRP\"/></Contents>");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox02","230.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit02\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon02\"/></Contents>");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00042WRKGRP","77.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("26");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls02_00_00","65.00","10","7","30",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("25");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw02","220.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00041WRKGRP","77.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("19");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox03","230.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("14");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"palStepBoxCon02_00\"/></Contents>");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw03","220.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit02_00_00","-1","-2251","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("22");
            obj.set_text("완료처리");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("none");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox04","230.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("21");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"palStepBoxCon02_00_00\"/></Contents>");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00042INDV","10.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("24");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon02_00_00","-1","-2197","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("23");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnACT00042INDV\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"btnACT00042WRKGRP\"/></Contents>");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls02_00","65.00","10","7","30",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("18");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00041INDV","10.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("17");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon02_00","-1","-2197","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("16");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnACT00041INDV\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"btnACT00041WRKGRP\"/></Contents>");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit02_00","-1","-2251","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepGroup.form);
            obj.set_taborder("15");
            obj.set_text("전기료확인");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("none");
            this.divForm.form.divATF00022.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnStepNew","804.00","10","240","40",null,null,null,null,null,null,this.divForm.form.divATF00022.form);
            obj.set_taborder("2");
            obj.set_text("전기사용(난로신청)");
            obj.set_cssclass("btn_WF_StepSub");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00022.addChild(obj.name, obj);

            obj = new Static("staStepEx","571","128","78","40",null,null,null,null,null,null,this.divForm.form.divATF00022.form);
            obj.set_taborder("3");
            obj.set_text("나 / 작업 그룹");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00022.addChild(obj.name, obj);

            obj = new Div("palStepConGroup","20","199","100%","510",null,null,null,null,null,null,this.divForm.form.divATF00022.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Step");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.form.divATF00022.addChild(obj.name, obj);

            obj = new Div("divNvWrap","10","20","100%","60",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepConGroup.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divATF00022.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Static("staNvLabel01","83","130","130","60",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("4");
            obj.set_text("전기사용(난로신청)");
            obj.set_cssclass("sta_WF_NvLabel");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw01","198.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel02","223.00","130","65","60",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("1");
            obj.set_text("신청및접수");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw02","338.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel03","363.00","130","52","60",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("3");
            obj.set_text("작업그룹");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","0","80%","60",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staNvLabel01\"/><PanelItem id=\"PanelItem01\" componentid=\"staNvArw01\"/><PanelItem id=\"PanelItem02\" componentid=\"staNvLabel02\"/><PanelItem id=\"PanelItem03\" componentid=\"staNvArw02\"/><PanelItem id=\"PanelItem04\" componentid=\"staNvLabel03\"/></Contents>");
            this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","558","0","15%","60",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("6");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnListClose\"/></Contents>");
            this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Button("btnListClose","1346","0","34","34",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_MDI_CloseAll");
            this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Div("divGrd","10","109","100%","350",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepConGroup.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divATF00022.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Grid("grdList","0","54","100.00%",null,null,"6",null,null,null,null,this.divForm.form.divATF00022.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsATF10022SrvcPrcsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"210\"/><Column size=\"150\"/><Column size=\"350\"/><Column size=\"120\"/><Column size=\"129\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"서비스구분\"/><Cell col=\"3\" text=\"통신실위치\"/><Cell col=\"4\" text=\"작업시작일\"/><Cell col=\"5\" text=\"작업시작시간\"/><Cell col=\"6\" text=\"신청자회사\"/><Cell col=\"7\" text=\"신청자\"/><Cell col=\"8\" text=\"신청일시\"/><Cell col=\"9\" text=\"처리자\"/><Cell col=\"10\" text=\"연락처\"/><Cell col=\"11\" text=\"처리작업그룹\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:aplyNo\" displaytype=\"text\" textAlign=\"center\" cssclass=\"CellLink\" cursor=\"pointer\"/><Cell col=\"1\" text=\"bind:taskNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:docNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:comurmPstnCn\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:jobBgngYmd\" displaytype=\"mask\" textAlign=\"center\" maskeditformat=\"####-##-##\" maskedittype=\"string\"/><Cell col=\"5\" text=\"bind:jobBgngHr\" maskeditformat=\"##:##\" maskedittype=\"string\"/><Cell col=\"6\" text=\"bind:aplcntInstNm\"/><Cell col=\"7\" text=\"bind:aplcntNm\" displaytype=\"text\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:aplyDt\" displaytype=\"mask\" textAlign=\"center\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\"/><Cell col=\"9\" text=\"bind:prcrNm\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:prcrTelno\" textAlign=\"center\"/><Cell col=\"11\" cssclass=\"CellEnd\" text=\"bind:prcrJobGroupNm\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.divATF00022.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divATF00022.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#1e4ebe\'> 0</fc>건");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divForm.form.divATF00022.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divATF00042","0","2795","100.00%","900",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_text("통신실출입작업계획서");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_Step");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("btnStepGroup","20","0","100%","60",null,null,null,null,null,null,this.divForm.form.divATF00042.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_StepGroup");
            obj.set_spacing("0px 0px 20px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnStepService\"/><PanelItem id=\"PanelItem04\" componentid=\"btnStepNew\"/><PanelItem id=\"PanelItem01\" componentid=\"staStepEx\"/></Contents>");
            this.divForm.form.divATF00042.addChild(obj.name, obj);

            obj = new Button("btnStepService","774.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divATF00042.form);
            obj.set_taborder("1");
            obj.set_text("이동지역");
            obj.set_cssclass("btn_WF_StepTit");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00042.addChild(obj.name, obj);

            obj = new Div("palStepGroup","10.00","110","100%","110",null,null,null,null,null,null,this.divForm.form.divATF00042.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.divForm.form.divATF00042.addChild(obj.name, obj);

            obj = new Static("staStepTit01","20.00","0","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00042.form.palStepGroup.form);
            obj.set_taborder("0");
            obj.set_text("계약체결등록");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00042.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00093INDV","0.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divATF00042.form.palStepGroup.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00042.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls01","55.00","0","7","30",null,null,null,null,null,null,this.divForm.form.divATF00042.form.palStepGroup.form);
            obj.set_taborder("2");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00042.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00093WRKGRP","67.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divATF00042.form.palStepGroup.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00042.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon01","20.00","54","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00042.form.palStepGroup.form);
            obj.set_taborder("4");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnACT00093INDV\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls01\"/><PanelItem id=\"PanelItem03\" componentid=\"btnACT00093WRKGRP\"/></Contents>");
            this.divForm.form.divATF00042.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox01","0.00","-3","160","90",null,null,null,null,null,null,this.divForm.form.divATF00042.form.palStepGroup.form);
            obj.set_taborder("5");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit01\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon01\"/></Contents>");
            this.divForm.form.divATF00042.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnStepNew","804.00","10","240","40",null,null,null,null,null,null,this.divForm.form.divATF00042.form);
            obj.set_taborder("2");
            obj.set_text("이동지역차량_장비등록");
            obj.set_cssclass("btn_WF_StepSub");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00042.addChild(obj.name, obj);

            obj = new Static("staStepEx","571","128","78","40",null,null,null,null,null,null,this.divForm.form.divATF00042.form);
            obj.set_taborder("3");
            obj.set_text("나 / 작업 그룹");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00042.addChild(obj.name, obj);

            obj = new Div("palStepConGroup","20","199","100%","510",null,null,null,null,null,null,this.divForm.form.divATF00042.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Step");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.form.divATF00042.addChild(obj.name, obj);

            obj = new Div("divNvWrap","10","20","100%","60",null,null,null,null,null,null,this.divForm.form.divATF00042.form.palStepConGroup.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divATF00042.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Static("staNvLabel01","83","130","180","60",null,null,null,null,null,null,this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("4");
            obj.set_text("이동지역차량_장비등록");
            obj.set_cssclass("sta_WF_NvLabel");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw01","198.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel02","223.00","130","65","60",null,null,null,null,null,null,this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("1");
            obj.set_text("계약쳬결등록");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw02","338.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel03","363.00","130","100","60",null,null,null,null,null,null,this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("3");
            obj.set_text("작업그룹");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","0","80%","60",null,null,null,null,null,null,this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staNvLabel01\"/><PanelItem id=\"PanelItem01\" componentid=\"staNvArw01\"/><PanelItem id=\"PanelItem02\" componentid=\"staNvLabel02\"/><PanelItem id=\"PanelItem03\" componentid=\"staNvArw02\"/><PanelItem id=\"PanelItem04\" componentid=\"staNvLabel03\"/></Contents>");
            this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","558","0","15%","60",null,null,null,null,null,null,this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("6");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnListClose\"/></Contents>");
            this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Button("btnListClose","1346","0","34","34",null,null,null,null,null,null,this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_MDI_CloseAll");
            this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Div("divGrd","10","109","100%","350",null,null,null,null,null,null,this.divForm.form.divATF00042.form.palStepConGroup.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divATF00042.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Grid("grdList","0","54","100.00%",null,null,"6",null,null,null,null,this.divForm.form.divATF00042.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsATF10022SrvcPrcsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"210\"/><Column size=\"150\"/><Column size=\"216\"/><Column size=\"157\"/><Column size=\"100\"/><Column size=\"221\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"서비스구분\"/><Cell col=\"3\" text=\"차량(장비)\"/><Cell col=\"4\" text=\"차종규모\"/><Cell col=\"5\" text=\"연료\"/><Cell col=\"6\" text=\"신청자회사\"/><Cell col=\"7\" text=\"신청자\"/><Cell col=\"8\" text=\"신청일시\"/><Cell col=\"9\" text=\"처리자\"/><Cell col=\"10\" text=\"연락처\"/><Cell col=\"11\" text=\"처리작업그룹\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:aplyNo\" displaytype=\"text\" textAlign=\"center\" cssclass=\"CellLink\" cursor=\"pointer\"/><Cell col=\"1\" text=\"bind:taskNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:docNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:comurmPstnCn\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"bind:aplcntInstNm\"/><Cell col=\"7\" text=\"bind:aplcntNm\" displaytype=\"text\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:aplyDt\" displaytype=\"mask\" textAlign=\"center\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\"/><Cell col=\"9\" text=\"bind:prcrNm\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:prcrTelno\" textAlign=\"center\"/><Cell col=\"11\" cssclass=\"CellEnd\" text=\"bind:prcrJobGroupNm\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.divATF00042.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divATF00042.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#1e4ebe\'> 0</fc>건");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divForm.form.divATF00042.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divATF00084","1665","29","100%","900",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("협조처리");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_Step");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("btnStepGroup","20","0","100%","60",null,null,null,null,null,null,this.divForm.form.divATF00084.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_StepGroup");
            obj.set_spacing("0px 0px 20px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnStepService\"/><PanelItem id=\"PanelItem04\" componentid=\"btnStepNew\"/><PanelItem id=\"PanelItem01\" componentid=\"staStepEx\"/></Contents>");
            this.divForm.form.divATF00084.addChild(obj.name, obj);

            obj = new Div("palStepGroup","10.00","110","100%","110",null,null,null,null,null,null,this.divForm.form.divATF00084.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.divForm.form.divATF00084.addChild(obj.name, obj);

            obj = new Static("staStepTit01","20.00","0","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00084.form.palStepGroup.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00084.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00171INDV","0.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divATF00084.form.palStepGroup.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00084.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls01","55.00","0","7","30",null,null,null,null,null,null,this.divForm.form.divATF00084.form.palStepGroup.form);
            obj.set_taborder("2");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00084.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00171WRKGRP","67.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divATF00084.form.palStepGroup.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00084.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon01","20.00","54","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00084.form.palStepGroup.form);
            obj.set_taborder("4");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnACT00171INDV\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls01\"/><PanelItem id=\"PanelItem03\" componentid=\"btnACT00171WRKGRP\"/></Contents>");
            this.divForm.form.divATF00084.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox01","0.00","-3","160","90",null,null,null,null,null,null,this.divForm.form.divATF00084.form.palStepGroup.form);
            obj.set_taborder("5");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit01\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon01\"/></Contents>");
            this.divForm.form.divATF00084.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnStepService","774.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divATF00084.form);
            obj.set_taborder("1");
            obj.set_text("협조처리");
            obj.set_cssclass("btn_WF_StepTit");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00084.addChild(obj.name, obj);

            obj = new Button("btnStepNew","804.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divATF00084.form);
            obj.set_taborder("2");
            obj.set_text("협조처리");
            obj.set_cssclass("btn_WF_StepSub");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00084.addChild(obj.name, obj);

            obj = new Static("staStepEx","571","128","120","40",null,null,null,null,null,null,this.divForm.form.divATF00084.form);
            obj.set_taborder("3");
            obj.set_text("나 / 작업 그룹");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00084.addChild(obj.name, obj);

            obj = new Div("palStepConGroup","20","199","100%","510",null,null,null,null,null,null,this.divForm.form.divATF00084.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Step");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.form.divATF00084.addChild(obj.name, obj);

            obj = new Div("divNvWrap","10","20","100%","60",null,null,null,null,null,null,this.divForm.form.divATF00084.form.palStepConGroup.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divATF00084.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Static("staNvLabel01","83","130","70","60",null,null,null,null,null,null,this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("4");
            obj.set_text("협조처리");
            obj.set_cssclass("sta_WF_NvLabel");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw01","198.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel02","223.00","130","26","60",null,null,null,null,null,null,this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw02","338.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel03","363.00","130","52","60",null,null,null,null,null,null,this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("3");
            obj.set_text("작업그룹");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","0","80%","60",null,null,null,null,null,null,this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staNvLabel01\"/><PanelItem id=\"PanelItem01\" componentid=\"staNvArw01\"/><PanelItem id=\"PanelItem02\" componentid=\"staNvLabel02\"/><PanelItem id=\"PanelItem03\" componentid=\"staNvArw02\"/><PanelItem id=\"PanelItem04\" componentid=\"staNvLabel03\"/></Contents>");
            this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","558","0","15%","60",null,null,null,null,null,null,this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("6");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnListClose\"/></Contents>");
            this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Button("btnListClose","1346","0","34","34",null,null,null,null,null,null,this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_MDI_CloseAll");
            this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Div("divGrd","10","109","100%","350",null,null,null,null,null,null,this.divForm.form.divATF00084.form.palStepConGroup.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divATF00084.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Grid("grdList","0","54","100.00%",null,null,"6",null,null,null,null,this.divForm.form.divATF00084.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsATF00084SrvcPrcsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"상위신청번호\"/><Cell col=\"2\" text=\"단계\"/><Cell col=\"3\" text=\"협조업무\"/><Cell col=\"4\" text=\"업무구분\"/><Cell col=\"5\" text=\"위치정보(룸번호)\"/><Cell col=\"6\" text=\"건물구분\"/><Cell col=\"7\" text=\"작업장위치\"/><Cell col=\"8\" text=\"작업시작일\"/><Cell col=\"9\" text=\"요청자회사\"/><Cell col=\"10\" text=\"요청자\"/><Cell col=\"11\" text=\"요청일시\"/><Cell col=\"12\" text=\"처리자\"/><Cell col=\"13\" text=\"연락처\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:aplyNo\" displaytype=\"text\" cssclass=\"CellLink\" cursor=\"pointer\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:souId\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"text\" textAlign=\"center\" text=\"bind:jobPrcsNm\"/><Cell col=\"3\" text=\"bind:cstrnKndNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:dtlProcsEtcCn\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:rnb\" displaytype=\"text\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:bldgSeNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:wrsPstnCn\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:jobBgngYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplayinvalidtype=\"default\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" text=\"bind:rgtrInstNm\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:aplcntNm\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:dmndDt\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\"/><Cell col=\"12\" text=\"bind:prcrNm\" textAlign=\"center\"/><Cell col=\"13\" cssclass=\"CellEnd\" text=\"bind:prcrOnlnNo\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.divATF00084.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divATF00084.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#1e4ebe\'> 0</fc>건");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divForm.form.divATF00084.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divMnCk.form
            obj = new Layout("default","",0,0,this.divForm.form.divMnCk.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00.set_taborder("0");
                p.staLabel00.set_text("WorkFlowMap");
                p.staLabel00.set_cssclass("sta_WF_SchLabel, sta_WF_Txt50022");
                p.staLabel00.set_flexshrink("0");
                p.staLabel00.set_minwidth("");
                p.staLabel00.move("0","0","208","40",null,null);

                p.palCkWrap.set_taborder("1");
                p.palCkWrap.set_flexgrow("2");
                p.palCkWrap.set_horizontalgap("20");
                p.palCkWrap.set_flexwrap("nowrap");
                p.palCkWrap.set_verticalgap("8");
                p.palCkWrap.set_fittocontents("height");
                p.palCkWrap.move("285","24","271","40",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_type("horizontal");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_verticalgap("8");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_minheight("45");
                p.Panel00.set_maxheight("");
                p.Panel00.set_minwidth("");
                p.Panel00.move("1694.00","398","560","40",null,null);

                p.ck03.set_taborder("5");
                p.ck03.set_text("협조처리");
                p.ck03.set_fittocontents("width");
                p.ck03.set_value("true");
                p.ck03.move("149.00","0","102","40",null,null);

                p.ck02.set_taborder("4");
                p.ck02.set_text("전기신청/해지");
                p.ck02.set_fittocontents("width");
                p.ck02.set_value("true");
                p.ck02.move("387","14","133","40",null,null);

                p.ck01.set_taborder("3");
                p.ck01.set_text("이동지역");
                p.ck01.set_fittocontents("width");
                p.ck01.set_value("true");
                p.ck01.move("0","0","129","40",null,null);
            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_spacing("14px 20px 12px 20px");
            this.divForm.form.divMnCk.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divMnCk.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divMnCk.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_spacing("14px 20px 12px 20px");
            this.divForm.form.divMnCk.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00008.form.palStepGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00008.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staStepTit01.set_taborder("0");
                p.staStepTit01.set_text("신청 및 접수");
                p.staStepTit01.set_cssclass("sta_WF_Boxtit");
                p.staStepTit01.set_fittocontents("none");
                p.staStepTit01.move("20.00","0","100%","49",null,null);

                p.btnACT00010INDV.set_taborder("1");
                p.btnACT00010INDV.set_text("0");
                p.btnACT00010INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00010INDV.set_fittocontents("none");
                p.btnACT00010INDV.set_textAlign("right");
                p.btnACT00010INDV.set_letterSpacing("0px");
                p.btnACT00010INDV.move("0","0","50","30",null,null);

                p.StepSls01.set_taborder("2");
                p.StepSls01.set_text("/");
                p.StepSls01.set_textAlign("center");
                p.StepSls01.move("55.00","0","7","30",null,null);

                p.btnACT00010WRKGRP.set_taborder("3");
                p.btnACT00010WRKGRP.set_text("0");
                p.btnACT00010WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00010WRKGRP.set_fittocontents("none");
                p.btnACT00010WRKGRP.set_textAlign("left");
                p.btnACT00010WRKGRP.set_letterSpacing("0px");
                p.btnACT00010WRKGRP.move("67.00","0","50","30",null,null);

                p.palCnt.set_taborder("4");
                p.palCnt.set_fittocontents("width");
                p.palCnt.set_flexcrossaxiswrapalign("center");
                p.palCnt.set_flexmainaxisalign("center");
                p.palCnt.set_horizontalgap("5");
                p.palCnt.set_enableevent("false");
                p.palCnt.move("20.00","54","100%","33",null,null);

                p.palACT00010.set_taborder("5");
                p.palACT00010.set_cssclass("pal_WF_StepBox");
                p.palACT00010.set_type("vertical");
                p.palACT00010.set_flexmainaxisalign("center");
                p.palACT00010.set_flexcrossaxiswrapalign("center");
                p.palACT00010.set_flexcrossaxisalign("center");
                p.palACT00010.set_verticalgap("5");
                p.palACT00010.set_fittocontents("height");
                p.palACT00010.set_spacing("0px 20px 0px 20px");
                p.palACT00010.move("0","-3","160","90",null,null);

                p.BoxArw01.set_taborder("6");
                p.BoxArw01.set_text("");
                p.BoxArw01.set_cssclass("sta_WF_BoxArw");
                p.BoxArw01.set_visible("true");
                p.BoxArw01.move("220.00","-3","40","40",null,null);

                p.staStepTit02.set_taborder("7");
                p.staStepTit02.set_text("검침및급전");
                p.staStepTit02.set_cssclass("sta_WF_Boxtit");
                p.staStepTit02.set_fittocontents("none");
                p.staStepTit02.move("30.00","10","100%","49",null,null);

                p.btnACT00012INDV.set_taborder("8");
                p.btnACT00012INDV.set_text("0");
                p.btnACT00012INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00012INDV.set_fittocontents("none");
                p.btnACT00012INDV.set_textAlign("right");
                p.btnACT00012INDV.set_letterSpacing("0px");
                p.btnACT00012INDV.move("10.00","10","50","30",null,null);

                p.StepSls02.set_taborder("9");
                p.StepSls02.set_text("/");
                p.StepSls02.set_textAlign("center");
                p.StepSls02.move("65.00","10","7","30",null,null);

                p.btnACT00012WRKGRP.set_taborder("10");
                p.btnACT00012WRKGRP.set_text("0");
                p.btnACT00012WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00012WRKGRP.set_fittocontents("none");
                p.btnACT00012WRKGRP.set_textAlign("left");
                p.btnACT00012WRKGRP.set_letterSpacing("0px");
                p.btnACT00012WRKGRP.move("77.00","10","50","30",null,null);

                p.palCnt2.set_taborder("11");
                p.palCnt2.set_fittocontents("width");
                p.palCnt2.set_flexcrossaxiswrapalign("center");
                p.palCnt2.set_flexmainaxisalign("center");
                p.palCnt2.set_horizontalgap("5");
                p.palCnt2.move("30.00","64","100%","33",null,null);

                p.palACT00065.set_taborder("12");
                p.palACT00065.set_cssclass("pal_WF_StepBox");
                p.palACT00065.set_spacing("0px 20px 0px 20px");
                p.palACT00065.set_type("vertical");
                p.palACT00065.set_flexmainaxisalign("center");
                p.palACT00065.set_flexcrossaxiswrapalign("center");
                p.palACT00065.set_flexcrossaxisalign("center");
                p.palACT00065.set_verticalgap("5");
                p.palACT00065.set_fittocontents("height");
                p.palACT00065.set_visible("true");
                p.palACT00065.move("230.00","7","160","90",null,null);

                p.BoxArw02.set_taborder("13");
                p.BoxArw02.set_text("");
                p.BoxArw02.set_cssclass("sta_WF_BoxArw");
                p.BoxArw02.set_visible("true");
                p.BoxArw02.move("440.00","-3","40","40",null,null);

                p.staStepTit03.set_taborder("14");
                p.staStepTit03.set_text("완료처리");
                p.staStepTit03.set_cssclass("sta_WF_Boxtit");
                p.staStepTit03.set_fittocontents("none");
                p.staStepTit03.move("40.00","20","100%","49",null,null);

                p.btnACT00013INDV.set_taborder("15");
                p.btnACT00013INDV.set_text("0");
                p.btnACT00013INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00013INDV.set_fittocontents("none");
                p.btnACT00013INDV.set_textAlign("right");
                p.btnACT00013INDV.set_letterSpacing("0px");
                p.btnACT00013INDV.move("20.00","20","50","30",null,null);

                p.StepSls03.set_taborder("16");
                p.StepSls03.set_text("/");
                p.StepSls03.set_textAlign("center");
                p.StepSls03.move("75.00","20","7","30",null,null);

                p.btnACT00013WRKGRP.set_taborder("17");
                p.btnACT00013WRKGRP.set_text("0");
                p.btnACT00013WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00013WRKGRP.set_fittocontents("none");
                p.btnACT00013WRKGRP.set_textAlign("left");
                p.btnACT00013WRKGRP.set_letterSpacing("0px");
                p.btnACT00013WRKGRP.move("87.00","20","50","30",null,null);

                p.palCnt3.set_taborder("18");
                p.palCnt3.set_fittocontents("width");
                p.palCnt3.set_flexcrossaxiswrapalign("center");
                p.palCnt3.set_flexmainaxisalign("center");
                p.palCnt3.set_horizontalgap("5");
                p.palCnt3.move("40.00","74","100%","33",null,null);

                p.palACT00066.set_taborder("19");
                p.palACT00066.set_cssclass("pal_WF_StepBox");
                p.palACT00066.set_spacing("0px 20px 0px 20px");
                p.palACT00066.set_type("vertical");
                p.palACT00066.set_flexmainaxisalign("center");
                p.palACT00066.set_flexcrossaxiswrapalign("center");
                p.palACT00066.set_flexcrossaxisalign("center");
                p.palACT00066.set_verticalgap("5");
                p.palACT00066.set_fittocontents("height");
                p.palACT00066.set_visible("true");
                p.palACT00066.move("450.00","7","160","90",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divATF00008.form.palStepGroup.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00008.form.palStepGroup.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00008.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divATF00008.form.palStepGroup.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.set_taborder("7");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("20","0","80%","60",null,null);

                p.Panel00.set_taborder("6");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_flexmainaxisalign("end");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("315","15","15%","60",null,null);

                p.staNvLabel01.set_taborder("4");
                p.staNvLabel01.set_text("전기사용(공사건물)");
                p.staNvLabel01.set_cssclass("sta_WF_NvLabel");
                p.staNvLabel01.set_flexshrink("0");
                p.staNvLabel01.set_fittocontents("width");
                p.staNvLabel01.set_minwidth("");
                p.staNvLabel01.move("20","0","164","60",null,null);

                p.staNvArw01.set_taborder("0");
                p.staNvArw01.set_text("");
                p.staNvArw01.set_cssclass("sta_WF_NvArw");
                p.staNvArw01.move("198.00","152","15","15",null,null);

                p.staNvLabel02.set_taborder("1");
                p.staNvLabel02.set_text("신청및접수");
                p.staNvLabel02.set_fittocontents("width");
                p.staNvLabel02.move("199","0","103","60",null,null);

                p.staNvArw02.set_taborder("2");
                p.staNvArw02.set_text("");
                p.staNvArw02.set_cssclass("sta_WF_NvArw");
                p.staNvArw02.move("338.00","152","15","15",null,null);

                p.staNvLabel03.set_taborder("3");
                p.staNvLabel03.set_text("나");
                p.staNvLabel03.set_fittocontents("none");
                p.staNvLabel03.move("363.00","130","100","60",null,null);

                p.btnListClose.set_taborder("5");
                p.btnListClose.set_cssclass("btn_MDI_CloseAll");
                p.btnListClose.move("1346","0","34","34",null,null);
            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00008.form.palStepConGroup.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00008.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsATF00028SrvcPrcsList");
                p.grdList.set_autofittype("none");
                p.grdList.move("0","54","100.00%",null,null,"6");

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총 <fc v=\'#1e4ebe\'> 0</fc>건");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.move("0","0","200","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divATF00008.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00008.form.palStepConGroup.form.divGrd.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00008.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divATF00008.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00008.form.palStepConGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00008.form.palStepConGroup.form,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_spacing("16px 10px 16px 10px ");
            this.divForm.form.divATF00008.form.palStepConGroup.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divATF00008.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00008.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepGroup.set_taborder("0");
                p.btnStepGroup.set_flexcrossaxisalign("start");
                p.btnStepGroup.set_flexcrossaxiswrapalign("start");
                p.btnStepGroup.set_flexmainaxisalign("start");
                p.btnStepGroup.set_horizontalgap("20");
                p.btnStepGroup.set_fittocontents("height");
                p.btnStepGroup.set_cssclass("pal_WF_StepGroup");
                p.btnStepGroup.set_spacing("0px 0px 20px 0px");
                p.btnStepGroup.move("20","0","100%","60",null,null);

                p.btnStepService.set_taborder("1");
                p.btnStepService.set_text("전기신청/해지");
                p.btnStepService.set_cssclass("btn_WF_StepTit");
                p.btnStepService.set_visible("true");
                p.btnStepService.set_fittocontents("width");
                p.btnStepService.move("774.00","10","195","40",null,null);

                p.btnStepNew.set_taborder("2");
                p.btnStepNew.set_text("전기사용(공사건물)");
                p.btnStepNew.set_cssclass("btn_WF_StepSub");
                p.btnStepNew.set_visible("true");
                p.btnStepNew.set_fittocontents("width");
                p.btnStepNew.move("804.00","10","240","40",null,null);

                p.staStepEx.set_taborder("3");
                p.staStepEx.set_text("나 / 작업그룹");
                p.staStepEx.set_fittocontents("width");
                p.staStepEx.move("571","128","75","40",null,null);

                p.palStepGroup.set_taborder("5");
                p.palStepGroup.set_text("Div00");
                p.palStepGroup.move("10.00","110","100%","110",null,null);

                p.palStepConGroup.set_taborder("4");
                p.palStepConGroup.set_text("Div00");
                p.palStepConGroup.set_cssclass("div_WF_Step");
                p.palStepConGroup.set_fittocontents("height");
                p.palStepConGroup.set_visible("false");
                p.palStepConGroup.move("20","199","100%","510",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divATF00008.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00008.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00008.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepService.set_visible("false");

                p.btnStepNew.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divATF00008.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00012.form.palStepGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00012.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staStepTit01.set_taborder("0");
                p.staStepTit01.set_text("신청 및 접수");
                p.staStepTit01.set_cssclass("sta_WF_Boxtit");
                p.staStepTit01.set_fittocontents("none");
                p.staStepTit01.move("20.00","0","100%","49",null,null);

                p.btnACT00015INDV.set_taborder("1");
                p.btnACT00015INDV.set_text("0");
                p.btnACT00015INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00015INDV.set_fittocontents("none");
                p.btnACT00015INDV.set_textAlign("right");
                p.btnACT00015INDV.set_letterSpacing("0px");
                p.btnACT00015INDV.move("0.00","0","50","30",null,null);

                p.StepSls01.set_taborder("2");
                p.StepSls01.set_text("/");
                p.StepSls01.set_textAlign("center");
                p.StepSls01.move("55.00","0","7","30",null,null);

                p.btnACT00015WRKGRP.set_taborder("3");
                p.btnACT00015WRKGRP.set_text("0");
                p.btnACT00015WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00015WRKGRP.set_fittocontents("none");
                p.btnACT00015WRKGRP.set_textAlign("left");
                p.btnACT00015WRKGRP.set_letterSpacing("0px");
                p.btnACT00015WRKGRP.move("67.00","0","50","30",null,null);

                p.palStepBoxCon01.set_taborder("4");
                p.palStepBoxCon01.set_fittocontents("width");
                p.palStepBoxCon01.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon01.set_flexmainaxisalign("center");
                p.palStepBoxCon01.set_horizontalgap("5");
                p.palStepBoxCon01.move("20.00","54","100%","33",null,null);

                p.palStepBox01.set_taborder("5");
                p.palStepBox01.set_cssclass("pal_WF_StepBox");
                p.palStepBox01.set_type("vertical");
                p.palStepBox01.set_flexmainaxisalign("center");
                p.palStepBox01.set_flexcrossaxiswrapalign("center");
                p.palStepBox01.set_flexcrossaxisalign("center");
                p.palStepBox01.set_verticalgap("5");
                p.palStepBox01.set_fittocontents("height");
                p.palStepBox01.set_spacing("0px 20px 0px 20px");
                p.palStepBox01.move("0.00","-3","160","90",null,null);

                p.BoxArw01.set_taborder("6");
                p.BoxArw01.set_text("");
                p.BoxArw01.set_cssclass("sta_WF_BoxArw");
                p.BoxArw01.set_visible("true");
                p.BoxArw01.move("220.00","-3","40","40",null,null);

                p.staStepTit02.set_taborder("7");
                p.staStepTit02.set_text("서류제출");
                p.staStepTit02.set_cssclass("sta_WF_Boxtit");
                p.staStepTit02.set_fittocontents("none");
                p.staStepTit02.move("30.00","10","100%","49",null,null);

                p.btnACT00017INDV.set_taborder("8");
                p.btnACT00017INDV.set_text("0");
                p.btnACT00017INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00017INDV.set_fittocontents("none");
                p.btnACT00017INDV.set_textAlign("right");
                p.btnACT00017INDV.set_letterSpacing("0px");
                p.btnACT00017INDV.move("10.00","10","50","30",null,null);

                p.StepSls02.set_taborder("9");
                p.StepSls02.set_text("/");
                p.StepSls02.set_textAlign("center");
                p.StepSls02.move("65.00","10","7","30",null,null);

                p.btnACT00017WRKGRP.set_taborder("10");
                p.btnACT00017WRKGRP.set_text("0");
                p.btnACT00017WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00017WRKGRP.set_fittocontents("none");
                p.btnACT00017WRKGRP.set_textAlign("left");
                p.btnACT00017WRKGRP.set_letterSpacing("0px");
                p.btnACT00017WRKGRP.move("77.00","10","50","30",null,null);

                p.palStepBoxCon02.set_taborder("11");
                p.palStepBoxCon02.set_fittocontents("width");
                p.palStepBoxCon02.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon02.set_flexmainaxisalign("center");
                p.palStepBoxCon02.set_horizontalgap("5");
                p.palStepBoxCon02.move("30.00","64","100%","33",null,null);

                p.palStepBox02.set_taborder("12");
                p.palStepBox02.set_cssclass("pal_WF_StepBox");
                p.palStepBox02.set_spacing("0px 20px 0px 20px");
                p.palStepBox02.set_type("vertical");
                p.palStepBox02.set_flexmainaxisalign("center");
                p.palStepBox02.set_flexcrossaxiswrapalign("center");
                p.palStepBox02.set_flexcrossaxisalign("center");
                p.palStepBox02.set_verticalgap("5");
                p.palStepBox02.set_fittocontents("height");
                p.palStepBox02.set_visible("true");
                p.palStepBox02.move("230.00","7","160","90",null,null);

                p.BoxArw02.set_taborder("13");
                p.BoxArw02.set_text("");
                p.BoxArw02.set_cssclass("sta_WF_BoxArw");
                p.BoxArw02.set_visible("true");
                p.BoxArw02.move("440.00","-3","40","40",null,null);

                p.staStepTit03.set_taborder("14");
                p.staStepTit03.set_text("공사수전요청");
                p.staStepTit03.set_cssclass("sta_WF_Boxtit");
                p.staStepTit03.set_fittocontents("none");
                p.staStepTit03.move("40.00","20","100%","49",null,null);

                p.btnACT00018INDV.set_taborder("15");
                p.btnACT00018INDV.set_text("0");
                p.btnACT00018INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00018INDV.set_fittocontents("width");
                p.btnACT00018INDV.set_textAlign("right");
                p.btnACT00018INDV.set_letterSpacing("0px");
                p.btnACT00018INDV.move("20.00","20","50","30",null,null);

                p.StepSls03.set_taborder("16");
                p.StepSls03.set_text("/");
                p.StepSls03.set_textAlign("center");
                p.StepSls03.move("75.00","20","7","30",null,null);

                p.btnACT00018WRKGRP.set_taborder("17");
                p.btnACT00018WRKGRP.set_text("0");
                p.btnACT00018WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00018WRKGRP.set_fittocontents("width");
                p.btnACT00018WRKGRP.set_textAlign("left");
                p.btnACT00018WRKGRP.set_letterSpacing("0px");
                p.btnACT00018WRKGRP.move("87.00","20","50","30",null,null);

                p.palStepBoxCon03.set_taborder("18");
                p.palStepBoxCon03.set_fittocontents("width");
                p.palStepBoxCon03.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon03.set_flexmainaxisalign("center");
                p.palStepBoxCon03.set_horizontalgap("5");
                p.palStepBoxCon03.move("40.00","74","100%","33",null,null);

                p.palStepBox03.set_taborder("19");
                p.palStepBox03.set_cssclass("pal_WF_StepBox");
                p.palStepBox03.set_spacing("0px 20px 0px 20px");
                p.palStepBox03.set_type("vertical");
                p.palStepBox03.set_flexmainaxisalign("center");
                p.palStepBox03.set_flexcrossaxiswrapalign("center");
                p.palStepBox03.set_flexcrossaxisalign("center");
                p.palStepBox03.set_verticalgap("5");
                p.palStepBox03.set_fittocontents("height");
                p.palStepBox03.set_visible("true");
                p.palStepBox03.move("450.00","7","160","90",null,null);

                p.BoxArw02_00.set_taborder("20");
                p.BoxArw02_00.set_text("");
                p.BoxArw02_00.set_cssclass("sta_WF_BoxArw");
                p.BoxArw02_00.set_visible("true");
                p.BoxArw02_00.move("440.00","-3","40","40",null,null);

                p.staStepTit03_00.set_taborder("22");
                p.staStepTit03_00.set_text("검침및급전");
                p.staStepTit03_00.set_cssclass("sta_WF_Boxtit");
                p.staStepTit03_00.set_fittocontents("none");
                p.staStepTit03_00.move("-1","-556","100%","49",null,null);

                p.palStepBox04.set_taborder("21");
                p.palStepBox04.set_cssclass("pal_WF_StepBox");
                p.palStepBox04.set_spacing("0px 20px 0px 20px");
                p.palStepBox04.set_type("vertical");
                p.palStepBox04.set_flexmainaxisalign("center");
                p.palStepBox04.set_flexcrossaxiswrapalign("center");
                p.palStepBox04.set_flexcrossaxisalign("center");
                p.palStepBox04.set_verticalgap("5");
                p.palStepBox04.set_fittocontents("height");
                p.palStepBox04.set_visible("true");
                p.palStepBox04.move("450.00","7","160","90",null,null);

                p.BoxArw02_00_00.set_taborder("27");
                p.BoxArw02_00_00.set_text("");
                p.BoxArw02_00_00.set_cssclass("sta_WF_BoxArw");
                p.BoxArw02_00_00.set_visible("true");
                p.BoxArw02_00_00.move("440.00","-3","40","40",null,null);

                p.palStepBox05.set_taborder("28");
                p.palStepBox05.set_cssclass("pal_WF_StepBox");
                p.palStepBox05.set_spacing("0px 20px 0px 20px");
                p.palStepBox05.set_type("vertical");
                p.palStepBox05.set_flexmainaxisalign("center");
                p.palStepBox05.set_flexcrossaxiswrapalign("center");
                p.palStepBox05.set_flexcrossaxisalign("center");
                p.palStepBox05.set_verticalgap("5");
                p.palStepBox05.set_fittocontents("height");
                p.palStepBox05.set_visible("true");
                p.palStepBox05.move("450.00","7","160","90",null,null);

                p.StepSls03_00_00.set_taborder("32");
                p.StepSls03_00_00.set_text("/");
                p.StepSls03_00_00.set_textAlign("center");
                p.StepSls03_00_00.move("75.00","20","7","30",null,null);

                p.btnACT00020INDV.set_taborder("31");
                p.btnACT00020INDV.set_text("0");
                p.btnACT00020INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00020INDV.set_fittocontents("width");
                p.btnACT00020INDV.set_textAlign("right");
                p.btnACT00020INDV.set_letterSpacing("0px");
                p.btnACT00020INDV.move("20.00","20","50","30",null,null);

                p.palStepBoxCon03_00_00.set_taborder("30");
                p.palStepBoxCon03_00_00.set_fittocontents("width");
                p.palStepBoxCon03_00_00.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon03_00_00.set_flexmainaxisalign("center");
                p.palStepBoxCon03_00_00.set_horizontalgap("5");
                p.palStepBoxCon03_00_00.move("-1","-502","100%","33",null,null);

                p.staStepTit03_00_00.set_taborder("29");
                p.staStepTit03_00_00.set_text("완료처리");
                p.staStepTit03_00_00.set_cssclass("sta_WF_Boxtit");
                p.staStepTit03_00_00.set_fittocontents("none");
                p.staStepTit03_00_00.move("-1","-556","100%","49",null,null);

                p.btnACT00019WRKGRP.set_taborder("26");
                p.btnACT00019WRKGRP.set_text("0");
                p.btnACT00019WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00019WRKGRP.set_fittocontents("width");
                p.btnACT00019WRKGRP.set_textAlign("left");
                p.btnACT00019WRKGRP.set_letterSpacing("0px");
                p.btnACT00019WRKGRP.move("87.00","20","50","30",null,null);

                p.StepSls03_00.set_taborder("25");
                p.StepSls03_00.set_text("/");
                p.StepSls03_00.set_textAlign("center");
                p.StepSls03_00.move("75.00","20","7","30",null,null);

                p.btnACT00019INDV.set_taborder("24");
                p.btnACT00019INDV.set_text("0");
                p.btnACT00019INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00019INDV.set_fittocontents("width");
                p.btnACT00019INDV.set_textAlign("right");
                p.btnACT00019INDV.set_letterSpacing("0px");
                p.btnACT00019INDV.move("20.00","20","50","30",null,null);

                p.palStepBoxCon03_00.set_taborder("23");
                p.palStepBoxCon03_00.set_fittocontents("width");
                p.palStepBoxCon03_00.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon03_00.set_flexmainaxisalign("center");
                p.palStepBoxCon03_00.set_horizontalgap("5");
                p.palStepBoxCon03_00.move("-1","-502","100%","33",null,null);

                p.btnACT00020WRKGRP.set_taborder("33");
                p.btnACT00020WRKGRP.set_text("0");
                p.btnACT00020WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00020WRKGRP.set_fittocontents("width");
                p.btnACT00020WRKGRP.set_textAlign("left");
                p.btnACT00020WRKGRP.set_letterSpacing("0px");
                p.btnACT00020WRKGRP.move("87.00","20","50","30",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divATF00012.form.palStepGroup.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00012.form.palStepGroup.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00012.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divATF00012.form.palStepGroup.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staNvLabel01.set_taborder("4");
                p.staNvLabel01.set_text("전기사용(공사미소유건물,옥외)");
                p.staNvLabel01.set_cssclass("sta_WF_NvLabel");
                p.staNvLabel01.set_flexshrink("0");
                p.staNvLabel01.set_fittocontents("width");
                p.staNvLabel01.set_minwidth("");
                p.staNvLabel01.move("20","0","235","60",null,null);

                p.staNvArw01.set_taborder("0");
                p.staNvArw01.set_text("");
                p.staNvArw01.set_cssclass("sta_WF_NvArw");
                p.staNvArw01.move("198.00","152","15","15",null,null);

                p.staNvLabel02.set_taborder("1");
                p.staNvLabel02.set_text("신청및접수");
                p.staNvLabel02.set_fittocontents("width");
                p.staNvLabel02.set_wordWrap("none");
                p.staNvLabel02.move("265","0","117","60",null,null);

                p.staNvArw02.set_taborder("2");
                p.staNvArw02.set_text("");
                p.staNvArw02.set_cssclass("sta_WF_NvArw");
                p.staNvArw02.move("338.00","152","15","15",null,null);

                p.staNvLabel03.set_taborder("3");
                p.staNvLabel03.set_text("작업그룹");
                p.staNvLabel03.set_fittocontents("width");
                p.staNvLabel03.move("363.00","130","52","60",null,null);

                p.Panel00.set_taborder("5");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_fittocontents("width");
                p.Panel00.move("20","0","80%","60",null,null);

                p.btnListClose.set_taborder("7");
                p.btnListClose.set_cssclass("btn_MDI_CloseAll");
                p.btnListClose.move("1346","0","34","34",null,null);

                p.Panel00_00.set_taborder("6");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_flexmainaxisalign("end");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.move("321","18","15%","60",null,null);
            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00012.form.palStepConGroup.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00012.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsATF00141SrvcPrcsList");
                p.grdList.set_autofittype("none");
                p.grdList.move("0","54","100.00%",null,null,"6");

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총 <fc v=\'#1e4ebe\'> 0</fc>건");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.move("0","0","200","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divATF00012.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00012.form.palStepConGroup.form.divGrd.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00012.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divATF00012.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00012.form.palStepConGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00012.form.palStepConGroup.form,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_spacing("16px 10px 16px 10px ");
            this.divForm.form.divATF00012.form.palStepConGroup.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divATF00012.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00012.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepGroup.set_taborder("0");
                p.btnStepGroup.set_flexcrossaxisalign("start");
                p.btnStepGroup.set_flexcrossaxiswrapalign("start");
                p.btnStepGroup.set_flexmainaxisalign("start");
                p.btnStepGroup.set_horizontalgap("20");
                p.btnStepGroup.set_fittocontents("height");
                p.btnStepGroup.set_cssclass("pal_WF_StepGroup");
                p.btnStepGroup.set_spacing("0px 0px 20px 0px");
                p.btnStepGroup.move("20","0","100%","60",null,null);

                p.btnStepService.set_taborder("1");
                p.btnStepService.set_text("전기신청/해지");
                p.btnStepService.set_cssclass("btn_WF_StepTit");
                p.btnStepService.set_visible("true");
                p.btnStepService.set_fittocontents("width");
                p.btnStepService.move("774.00","10","195","40",null,null);

                p.palStepGroup.set_taborder("5");
                p.palStepGroup.set_text("Div00");
                p.palStepGroup.move("10.00","110","100%","110",null,null);

                p.btnStepNew.set_taborder("2");
                p.btnStepNew.set_text("전기사용(공사미소유건물,옥외)");
                p.btnStepNew.set_cssclass("btn_WF_StepSub");
                p.btnStepNew.set_visible("true");
                p.btnStepNew.set_fittocontents("width");
                p.btnStepNew.move("804.00","10","240","40",null,null);

                p.staStepEx.set_taborder("3");
                p.staStepEx.set_text("나 / 작업 그룹");
                p.staStepEx.set_fittocontents("width");
                p.staStepEx.move("571","128","78","40",null,null);

                p.palStepConGroup.set_taborder("4");
                p.palStepConGroup.set_text("Div00");
                p.palStepConGroup.set_cssclass("div_WF_Step");
                p.palStepConGroup.set_fittocontents("height");
                p.palStepConGroup.set_visible("false");
                p.palStepConGroup.move("20","199","100%","510",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divATF00012.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00012.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00012.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepService.set_visible("false");

                p.btnStepNew.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divATF00012.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00014.form.palStepGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00014.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staStepTit01.set_taborder("0");
                p.staStepTit01.set_text("신청 및 접수");
                p.staStepTit01.set_cssclass("sta_WF_Boxtit");
                p.staStepTit01.set_fittocontents("none");
                p.staStepTit01.move("20.00","0","100%","49",null,null);

                p.btnACT00022INDV.set_taborder("1");
                p.btnACT00022INDV.set_text("0");
                p.btnACT00022INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00022INDV.set_fittocontents("width");
                p.btnACT00022INDV.set_textAlign("right");
                p.btnACT00022INDV.set_letterSpacing("0px");
                p.btnACT00022INDV.move("0.00","0","50","30",null,null);

                p.StepSls01.set_taborder("2");
                p.StepSls01.set_text("/");
                p.StepSls01.set_textAlign("center");
                p.StepSls01.move("55.00","0","7","30",null,null);

                p.btnACT00022WRKGRP.set_taborder("3");
                p.btnACT00022WRKGRP.set_text("0");
                p.btnACT00022WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00022WRKGRP.set_fittocontents("width");
                p.btnACT00022WRKGRP.set_textAlign("left");
                p.btnACT00022WRKGRP.set_letterSpacing("0px");
                p.btnACT00022WRKGRP.move("67.00","0","50","30",null,null);

                p.palStepBoxCon01.set_taborder("4");
                p.palStepBoxCon01.set_fittocontents("width");
                p.palStepBoxCon01.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon01.set_flexmainaxisalign("center");
                p.palStepBoxCon01.set_horizontalgap("5");
                p.palStepBoxCon01.move("20.00","54","100%","33",null,null);

                p.palStepBox01.set_taborder("5");
                p.palStepBox01.set_cssclass("pal_WF_StepBox");
                p.palStepBox01.set_type("vertical");
                p.palStepBox01.set_flexmainaxisalign("center");
                p.palStepBox01.set_flexcrossaxiswrapalign("center");
                p.palStepBox01.set_flexcrossaxisalign("center");
                p.palStepBox01.set_verticalgap("5");
                p.palStepBox01.set_fittocontents("height");
                p.palStepBox01.set_spacing("0px 20px 0px 20px");
                p.palStepBox01.move("0.00","-3","160","90",null,null);

                p.BoxArw01.set_taborder("6");
                p.BoxArw01.set_text("");
                p.BoxArw01.set_cssclass("sta_WF_BoxArw");
                p.BoxArw01.set_visible("true");
                p.BoxArw01.move("220.00","-3","40","40",null,null);

                p.staStepTit02.set_taborder("7");
                p.staStepTit02.set_text("원상회복");
                p.staStepTit02.set_cssclass("sta_WF_Boxtit");
                p.staStepTit02.set_fittocontents("none");
                p.staStepTit02.move("30.00","10","100%","49",null,null);

                p.btnACT00023INDV.set_taborder("8");
                p.btnACT00023INDV.set_text("0");
                p.btnACT00023INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00023INDV.set_fittocontents("width");
                p.btnACT00023INDV.set_textAlign("right");
                p.btnACT00023INDV.set_letterSpacing("0px");
                p.btnACT00023INDV.move("10.00","10","50","30",null,null);

                p.StepSls02.set_taborder("9");
                p.StepSls02.set_text("/");
                p.StepSls02.set_textAlign("center");
                p.StepSls02.move("65.00","10","7","30",null,null);

                p.btnACT00023WRKGRP.set_taborder("10");
                p.btnACT00023WRKGRP.set_text("0");
                p.btnACT00023WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00023WRKGRP.set_fittocontents("width");
                p.btnACT00023WRKGRP.set_textAlign("left");
                p.btnACT00023WRKGRP.set_letterSpacing("0px");
                p.btnACT00023WRKGRP.move("77.00","10","50","30",null,null);

                p.palStepBoxCon02.set_taborder("11");
                p.palStepBoxCon02.set_fittocontents("width");
                p.palStepBoxCon02.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon02.set_flexmainaxisalign("center");
                p.palStepBoxCon02.set_horizontalgap("5");
                p.palStepBoxCon02.move("30.00","64","100%","33",null,null);

                p.palStepBox02.set_taborder("12");
                p.palStepBox02.set_cssclass("pal_WF_StepBox");
                p.palStepBox02.set_spacing("0px 20px 0px 20px");
                p.palStepBox02.set_type("vertical");
                p.palStepBox02.set_flexmainaxisalign("center");
                p.palStepBox02.set_flexcrossaxiswrapalign("center");
                p.palStepBox02.set_flexcrossaxisalign("center");
                p.palStepBox02.set_verticalgap("5");
                p.palStepBox02.set_fittocontents("height");
                p.palStepBox02.set_visible("true");
                p.palStepBox02.move("230.00","7","160","90",null,null);

                p.BoxArw02.set_taborder("13");
                p.BoxArw02.set_text("");
                p.BoxArw02.set_cssclass("sta_WF_BoxArw");
                p.BoxArw02.set_visible("true");
                p.BoxArw02.move("440.00","-3","40","40",null,null);

                p.staStepTit03.set_taborder("14");
                p.staStepTit03.set_text("완료처리 ");
                p.staStepTit03.set_cssclass("sta_WF_Boxtit");
                p.staStepTit03.set_fittocontents("none");
                p.staStepTit03.move("40.00","20","100%","49",null,null);

                p.btnACT00024INDV.set_taborder("15");
                p.btnACT00024INDV.set_text("0");
                p.btnACT00024INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00024INDV.set_fittocontents("width");
                p.btnACT00024INDV.set_textAlign("right");
                p.btnACT00024INDV.set_letterSpacing("0px");
                p.btnACT00024INDV.move("20.00","20","50","30",null,null);

                p.StepSls03.set_taborder("16");
                p.StepSls03.set_text("/");
                p.StepSls03.set_textAlign("center");
                p.StepSls03.move("75.00","20","7","30",null,null);

                p.btnACT00024WRKGRP.set_taborder("17");
                p.btnACT00024WRKGRP.set_text("0");
                p.btnACT00024WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00024WRKGRP.set_fittocontents("width");
                p.btnACT00024WRKGRP.set_textAlign("left");
                p.btnACT00024WRKGRP.set_letterSpacing("0px");
                p.btnACT00024WRKGRP.move("87.00","20","50","30",null,null);

                p.palStepBoxCon03.set_taborder("18");
                p.palStepBoxCon03.set_fittocontents("width");
                p.palStepBoxCon03.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon03.set_flexmainaxisalign("center");
                p.palStepBoxCon03.set_horizontalgap("5");
                p.palStepBoxCon03.move("40.00","74","100%","33",null,null);

                p.palStepBox03.set_taborder("19");
                p.palStepBox03.set_cssclass("pal_WF_StepBox");
                p.palStepBox03.set_spacing("0px 20px 0px 20px");
                p.palStepBox03.set_type("vertical");
                p.palStepBox03.set_flexmainaxisalign("center");
                p.palStepBox03.set_flexcrossaxiswrapalign("center");
                p.palStepBox03.set_flexcrossaxisalign("center");
                p.palStepBox03.set_verticalgap("5");
                p.palStepBox03.set_fittocontents("height");
                p.palStepBox03.set_visible("true");
                p.palStepBox03.move("450.00","7","160","90",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divATF00014.form.palStepGroup.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00014.form.palStepGroup.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00014.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divATF00014.form.palStepGroup.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staNvLabel01.set_taborder("4");
                p.staNvLabel01.set_text("전기해지(공사건물)");
                p.staNvLabel01.set_cssclass("sta_WF_NvLabel");
                p.staNvLabel01.set_flexshrink("0");
                p.staNvLabel01.set_fittocontents("width");
                p.staNvLabel01.set_minwidth("");
                p.staNvLabel01.move("20","0","104","60",null,null);

                p.staNvArw01.set_taborder("0");
                p.staNvArw01.set_text("");
                p.staNvArw01.set_cssclass("sta_WF_NvArw");
                p.staNvArw01.move("198.00","152","15","15",null,null);

                p.staNvLabel02.set_taborder("1");
                p.staNvLabel02.set_text("신청및접수");
                p.staNvLabel02.set_fittocontents("width");
                p.staNvLabel02.move("223.00","130","65","60",null,null);

                p.staNvArw02.set_taborder("2");
                p.staNvArw02.set_text("");
                p.staNvArw02.set_cssclass("sta_WF_NvArw");
                p.staNvArw02.move("338.00","152","15","15",null,null);

                p.staNvLabel03.set_taborder("3");
                p.staNvLabel03.set_text("작업그룹");
                p.staNvLabel03.set_fittocontents("width");
                p.staNvLabel03.move("363.00","130","52","60",null,null);

                p.Panel00.set_taborder("5");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.move("20","0","80%","60",null,null);

                p.btnListClose.set_taborder("7");
                p.btnListClose.set_cssclass("btn_MDI_CloseAll");
                p.btnListClose.move("1346","0","34","34",null,null);

                p.Panel00_00.set_taborder("6");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_flexmainaxisalign("end");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.move("558","0","15%","60",null,null);
            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00014.form.palStepConGroup.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00014.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsATF00030SrvcPrcsList");
                p.grdList.set_autofittype("none");
                p.grdList.move("0","54","100.00%",null,null,"6");

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총 <fc v=\'#1e4ebe\'> 0</fc>건");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.move("0","0","200","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divATF00014.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00014.form.palStepConGroup.form.divGrd.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00014.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divATF00014.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00014.form.palStepConGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00014.form.palStepConGroup.form,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_spacing("16px 10px 16px 10px ");
            this.divForm.form.divATF00014.form.palStepConGroup.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divATF00014.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00014.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepGroup.set_taborder("0");
                p.btnStepGroup.set_flexcrossaxisalign("start");
                p.btnStepGroup.set_flexcrossaxiswrapalign("start");
                p.btnStepGroup.set_flexmainaxisalign("start");
                p.btnStepGroup.set_horizontalgap("20");
                p.btnStepGroup.set_fittocontents("height");
                p.btnStepGroup.set_cssclass("pal_WF_StepGroup");
                p.btnStepGroup.set_spacing("0px 0px 20px 0px");
                p.btnStepGroup.move("20","0","100%","60",null,null);

                p.btnStepService.set_taborder("1");
                p.btnStepService.set_text("전기신청/해지");
                p.btnStepService.set_cssclass("btn_WF_StepTit");
                p.btnStepService.set_visible("true");
                p.btnStepService.set_fittocontents("width");
                p.btnStepService.move("774.00","10","195","40",null,null);

                p.palStepGroup.set_taborder("5");
                p.palStepGroup.set_text("Div00");
                p.palStepGroup.move("10.00","110","100%","110",null,null);

                p.btnStepNew.set_taborder("2");
                p.btnStepNew.set_text("전기해지(공사건물)");
                p.btnStepNew.set_cssclass("btn_WF_StepSub");
                p.btnStepNew.set_visible("true");
                p.btnStepNew.set_fittocontents("width");
                p.btnStepNew.move("804.00","10","240","40",null,null);

                p.staStepEx.set_taborder("3");
                p.staStepEx.set_text("나 / 작업 그룹");
                p.staStepEx.set_fittocontents("width");
                p.staStepEx.move("571","128","78","40",null,null);

                p.palStepConGroup.set_taborder("4");
                p.palStepConGroup.set_text("Div00");
                p.palStepConGroup.set_cssclass("div_WF_Step");
                p.palStepConGroup.set_fittocontents("height");
                p.palStepConGroup.set_visible("false");
                p.palStepConGroup.move("20","199","100%","510",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divATF00014.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00014.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00014.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepService.set_visible("false");

                p.btnStepNew.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divATF00014.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00016.form.palStepGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00016.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staStepTit01.set_taborder("0");
                p.staStepTit01.set_text("신청 및 접수");
                p.staStepTit01.set_cssclass("sta_WF_Boxtit");
                p.staStepTit01.set_fittocontents("width");
                p.staStepTit01.move("20.00","0","100%","49",null,null);

                p.btnACT00026INDV.set_taborder("1");
                p.btnACT00026INDV.set_text("0");
                p.btnACT00026INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00026INDV.set_fittocontents("width");
                p.btnACT00026INDV.set_textAlign("right");
                p.btnACT00026INDV.set_letterSpacing("0px");
                p.btnACT00026INDV.move("0.00","0","50","30",null,null);

                p.StepSls01.set_taborder("2");
                p.StepSls01.set_text("/");
                p.StepSls01.set_textAlign("center");
                p.StepSls01.move("55.00","0","7","30",null,null);

                p.btnACT00026WRKGRP.set_taborder("3");
                p.btnACT00026WRKGRP.set_text("0");
                p.btnACT00026WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00026WRKGRP.set_fittocontents("width");
                p.btnACT00026WRKGRP.set_textAlign("left");
                p.btnACT00026WRKGRP.set_letterSpacing("0px");
                p.btnACT00026WRKGRP.move("67.00","0","50","30",null,null);

                p.palStepBoxCon01.set_taborder("4");
                p.palStepBoxCon01.set_fittocontents("width");
                p.palStepBoxCon01.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon01.set_flexmainaxisalign("center");
                p.palStepBoxCon01.set_horizontalgap("5");
                p.palStepBoxCon01.move("20.00","54","100%","33",null,null);

                p.palStepBox01.set_taborder("5");
                p.palStepBox01.set_cssclass("pal_WF_StepBox");
                p.palStepBox01.set_type("vertical");
                p.palStepBox01.set_flexmainaxisalign("center");
                p.palStepBox01.set_flexcrossaxiswrapalign("center");
                p.palStepBox01.set_flexcrossaxisalign("center");
                p.palStepBox01.set_verticalgap("5");
                p.palStepBox01.set_fittocontents("height");
                p.palStepBox01.set_spacing("0px 20px 0px 20px");
                p.palStepBox01.move("0.00","-3","160","90",null,null);

                p.BoxArw01.set_taborder("6");
                p.BoxArw01.set_text("");
                p.BoxArw01.set_cssclass("sta_WF_BoxArw");
                p.BoxArw01.set_visible("true");
                p.BoxArw01.move("220.00","-3","40","40",null,null);

                p.staStepTit02.set_taborder("7");
                p.staStepTit02.set_text("완료처리");
                p.staStepTit02.set_cssclass("sta_WF_Boxtit");
                p.staStepTit02.set_fittocontents("none");
                p.staStepTit02.move("30.00","10","100%","49",null,null);

                p.btnACT00029INDV.set_taborder("8");
                p.btnACT00029INDV.set_text("0");
                p.btnACT00029INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00029INDV.set_fittocontents("width");
                p.btnACT00029INDV.set_textAlign("right");
                p.btnACT00029INDV.set_letterSpacing("0px");
                p.btnACT00029INDV.move("10.00","10","50","30",null,null);

                p.StepSls02.set_taborder("9");
                p.StepSls02.set_text("/");
                p.StepSls02.set_textAlign("center");
                p.StepSls02.move("65.00","10","7","30",null,null);

                p.btnACT00029WRKGRP.set_taborder("10");
                p.btnACT00029WRKGRP.set_text("0");
                p.btnACT00029WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00029WRKGRP.set_fittocontents("width");
                p.btnACT00029WRKGRP.set_textAlign("left");
                p.btnACT00029WRKGRP.set_letterSpacing("0px");
                p.btnACT00029WRKGRP.move("77.00","10","50","30",null,null);

                p.palStepBoxCon02.set_taborder("11");
                p.palStepBoxCon02.set_fittocontents("width");
                p.palStepBoxCon02.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon02.set_flexmainaxisalign("center");
                p.palStepBoxCon02.set_horizontalgap("5");
                p.palStepBoxCon02.move("30.00","64","100%","33",null,null);

                p.palStepBox02.set_taborder("12");
                p.palStepBox02.set_cssclass("pal_WF_StepBox");
                p.palStepBox02.set_spacing("0px 20px 0px 20px");
                p.palStepBox02.set_type("vertical");
                p.palStepBox02.set_flexmainaxisalign("center");
                p.palStepBox02.set_flexcrossaxiswrapalign("center");
                p.palStepBox02.set_flexcrossaxisalign("center");
                p.palStepBox02.set_verticalgap("5");
                p.palStepBox02.set_fittocontents("height");
                p.palStepBox02.set_visible("true");
                p.palStepBox02.move("230.00","7","160","90",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divATF00016.form.palStepGroup.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00016.form.palStepGroup.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00016.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divATF00016.form.palStepGroup.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staNvLabel01.set_taborder("4");
                p.staNvLabel01.set_text("전기해지(공사미소유건물,옥외)");
                p.staNvLabel01.set_cssclass("sta_WF_NvLabel");
                p.staNvLabel01.set_flexshrink("0");
                p.staNvLabel01.set_fittocontents("width");
                p.staNvLabel01.set_minwidth("");
                p.staNvLabel01.move("83","130","130","60",null,null);

                p.staNvArw01.set_taborder("0");
                p.staNvArw01.set_text("");
                p.staNvArw01.set_cssclass("sta_WF_NvArw");
                p.staNvArw01.move("198.00","152","15","15",null,null);

                p.staNvLabel02.set_taborder("1");
                p.staNvLabel02.set_text("신청및접수");
                p.staNvLabel02.set_fittocontents("width");
                p.staNvLabel02.move("223.00","130","65","60",null,null);

                p.staNvArw02.set_taborder("2");
                p.staNvArw02.set_text("");
                p.staNvArw02.set_cssclass("sta_WF_NvArw");
                p.staNvArw02.move("338.00","152","15","15",null,null);

                p.staNvLabel03.set_taborder("3");
                p.staNvLabel03.set_text("작업그룹");
                p.staNvLabel03.set_fittocontents("width");
                p.staNvLabel03.move("363.00","130","52","60",null,null);

                p.Panel00.set_taborder("5");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.move("20","0","80%","60",null,null);

                p.Panel00_00.set_taborder("6");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_flexmainaxisalign("end");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.move("558","0","15%","60",null,null);

                p.btnListClose.set_taborder("7");
                p.btnListClose.set_cssclass("btn_MDI_CloseAll");
                p.btnListClose.move("1346","0","34","34",null,null);
            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00016.form.palStepConGroup.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00016.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsATF00145SrvcPrcsList");
                p.grdList.set_autofittype("none");
                p.grdList.move("0","54","100.00%",null,null,"6");

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총 <fc v=\'#1e4ebe\'>1</fc>건");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.move("0","0","200","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divATF00016.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00016.form.palStepConGroup.form.divGrd.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00016.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divATF00016.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00016.form.palStepConGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00016.form.palStepConGroup.form,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_spacing("16px 10px 16px 10px ");
            this.divForm.form.divATF00016.form.palStepConGroup.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divATF00016.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00016.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepGroup.set_taborder("0");
                p.btnStepGroup.set_flexcrossaxisalign("start");
                p.btnStepGroup.set_flexcrossaxiswrapalign("start");
                p.btnStepGroup.set_flexmainaxisalign("start");
                p.btnStepGroup.set_horizontalgap("20");
                p.btnStepGroup.set_fittocontents("height");
                p.btnStepGroup.set_cssclass("pal_WF_StepGroup");
                p.btnStepGroup.set_spacing("0px 0px 20px 0px");
                p.btnStepGroup.move("20","0","100%","60",null,null);

                p.btnStepService.set_taborder("1");
                p.btnStepService.set_text("전기신청/해지");
                p.btnStepService.set_cssclass("btn_WF_StepTit");
                p.btnStepService.set_visible("true");
                p.btnStepService.set_fittocontents("width");
                p.btnStepService.move("774.00","10","195","40",null,null);

                p.palStepGroup.set_taborder("5");
                p.palStepGroup.set_text("Div00");
                p.palStepGroup.move("10.00","110","100%","110",null,null);

                p.btnStepNew.set_taborder("2");
                p.btnStepNew.set_text("전기해지(공사미소유건물,옥외)");
                p.btnStepNew.set_cssclass("btn_WF_StepSub");
                p.btnStepNew.set_visible("true");
                p.btnStepNew.set_fittocontents("width");
                p.btnStepNew.move("804.00","10","240","40",null,null);

                p.staStepEx.set_taborder("3");
                p.staStepEx.set_text("나 / 작업 그룹");
                p.staStepEx.set_fittocontents("width");
                p.staStepEx.move("571","128","78","40",null,null);

                p.palStepConGroup.set_taborder("4");
                p.palStepConGroup.set_text("Div00");
                p.palStepConGroup.set_cssclass("div_WF_Step");
                p.palStepConGroup.set_fittocontents("height");
                p.palStepConGroup.set_visible("false");
                p.palStepConGroup.move("20","199","100%","510",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divATF00016.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00016.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00016.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepService.set_visible("false");

                p.btnStepNew.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divATF00016.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00020.form.palStepGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00020.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staStepTit01.set_taborder("0");
                p.staStepTit01.set_text("신청 및 접수");
                p.staStepTit01.set_cssclass("sta_WF_Boxtit");
                p.staStepTit01.set_fittocontents("width");
                p.staStepTit01.move("20.00","0","100%","49",null,null);

                p.btnACT00034INDV.set_taborder("1");
                p.btnACT00034INDV.set_text("0");
                p.btnACT00034INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00034INDV.set_fittocontents("width");
                p.btnACT00034INDV.set_textAlign("right");
                p.btnACT00034INDV.set_letterSpacing("0px");
                p.btnACT00034INDV.move("0.00","0","50","30",null,null);

                p.StepSls01.set_taborder("2");
                p.StepSls01.set_text("/");
                p.StepSls01.set_textAlign("center");
                p.StepSls01.move("55.00","0","7","30",null,null);

                p.btnACT00034WRKGRP.set_taborder("3");
                p.btnACT00034WRKGRP.set_text("0");
                p.btnACT00034WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00034WRKGRP.set_fittocontents("width");
                p.btnACT00034WRKGRP.set_textAlign("left");
                p.btnACT00034WRKGRP.set_letterSpacing("0px");
                p.btnACT00034WRKGRP.move("67.00","0","50","30",null,null);

                p.palStepBoxCon01.set_taborder("4");
                p.palStepBoxCon01.set_fittocontents("width");
                p.palStepBoxCon01.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon01.set_flexmainaxisalign("center");
                p.palStepBoxCon01.set_horizontalgap("5");
                p.palStepBoxCon01.move("20.00","54","100%","33",null,null);

                p.palStepBox01.set_taborder("5");
                p.palStepBox01.set_cssclass("pal_WF_StepBox");
                p.palStepBox01.set_type("vertical");
                p.palStepBox01.set_flexmainaxisalign("center");
                p.palStepBox01.set_flexcrossaxiswrapalign("center");
                p.palStepBox01.set_flexcrossaxisalign("center");
                p.palStepBox01.set_verticalgap("5");
                p.palStepBox01.set_fittocontents("height");
                p.palStepBox01.set_spacing("0px 20px 0px 20px");
                p.palStepBox01.move("0.00","-3","160","90",null,null);

                p.BoxArw01.set_taborder("6");
                p.BoxArw01.set_text("");
                p.BoxArw01.set_cssclass("sta_WF_BoxArw");
                p.BoxArw01.set_visible("true");
                p.BoxArw01.move("220.00","-3","40","40",null,null);

                p.staStepTit02.set_taborder("7");
                p.staStepTit02.set_text("작업 승인");
                p.staStepTit02.set_cssclass("sta_WF_Boxtit");
                p.staStepTit02.set_fittocontents("none");
                p.staStepTit02.move("30.00","10","100%","49",null,null);

                p.btnACT00035INDV.set_taborder("8");
                p.btnACT00035INDV.set_text("0");
                p.btnACT00035INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00035INDV.set_fittocontents("width");
                p.btnACT00035INDV.set_textAlign("right");
                p.btnACT00035INDV.set_letterSpacing("0px");
                p.btnACT00035INDV.move("10.00","10","50","30",null,null);

                p.StepSls02.set_taborder("9");
                p.StepSls02.set_text("/");
                p.StepSls02.set_textAlign("center");
                p.StepSls02.move("65.00","10","7","30",null,null);

                p.btnACT00035WRKGRP.set_taborder("10");
                p.btnACT00035WRKGRP.set_text("0");
                p.btnACT00035WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00035WRKGRP.set_fittocontents("width");
                p.btnACT00035WRKGRP.set_textAlign("left");
                p.btnACT00035WRKGRP.set_letterSpacing("0px");
                p.btnACT00035WRKGRP.move("77.00","10","50","30",null,null);

                p.palStepBoxCon02.set_taborder("11");
                p.palStepBoxCon02.set_fittocontents("width");
                p.palStepBoxCon02.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon02.set_flexmainaxisalign("center");
                p.palStepBoxCon02.set_horizontalgap("5");
                p.palStepBoxCon02.move("30.00","64","100%","33",null,null);

                p.palStepBox02.set_taborder("12");
                p.palStepBox02.set_cssclass("pal_WF_StepBox");
                p.palStepBox02.set_spacing("0px 20px 0px 20px");
                p.palStepBox02.set_type("vertical");
                p.palStepBox02.set_flexmainaxisalign("center");
                p.palStepBox02.set_flexcrossaxiswrapalign("center");
                p.palStepBox02.set_flexcrossaxisalign("center");
                p.palStepBox02.set_verticalgap("5");
                p.palStepBox02.set_fittocontents("height");
                p.palStepBox02.set_visible("true");
                p.palStepBox02.move("230.00","7","160","90",null,null);

                p.BoxArw02.set_taborder("13");
                p.BoxArw02.set_text("");
                p.BoxArw02.set_cssclass("sta_WF_BoxArw");
                p.BoxArw02.set_visible("true");
                p.BoxArw02.move("440.00","-3","40","40",null,null);

                p.staStepTit03.set_taborder("14");
                p.staStepTit03.set_text("교체및안내");
                p.staStepTit03.set_cssclass("sta_WF_Boxtit");
                p.staStepTit03.set_fittocontents("width");
                p.staStepTit03.set_wordWrap("none");
                p.staStepTit03.move("40.00","20","100%","49",null,null);

                p.btnACT00036INDV.set_taborder("15");
                p.btnACT00036INDV.set_text("0");
                p.btnACT00036INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00036INDV.set_fittocontents("width");
                p.btnACT00036INDV.set_textAlign("right");
                p.btnACT00036INDV.set_letterSpacing("0px");
                p.btnACT00036INDV.move("20.00","20","50","30",null,null);

                p.StepSls03.set_taborder("16");
                p.StepSls03.set_text("/");
                p.StepSls03.set_textAlign("center");
                p.StepSls03.move("75.00","20","7","30",null,null);

                p.btnACT00036WRKGRP.set_taborder("17");
                p.btnACT00036WRKGRP.set_text("0");
                p.btnACT00036WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00036WRKGRP.set_fittocontents("width");
                p.btnACT00036WRKGRP.set_textAlign("left");
                p.btnACT00036WRKGRP.set_letterSpacing("0px");
                p.btnACT00036WRKGRP.move("87.00","20","50","30",null,null);

                p.palStepBoxCon03.set_taborder("18");
                p.palStepBoxCon03.set_fittocontents("width");
                p.palStepBoxCon03.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon03.set_flexmainaxisalign("center");
                p.palStepBoxCon03.set_horizontalgap("5");
                p.palStepBoxCon03.move("40.00","74","100%","33",null,null);

                p.palStepBox03.set_taborder("19");
                p.palStepBox03.set_cssclass("pal_WF_StepBox");
                p.palStepBox03.set_spacing("0px 20px 0px 20px");
                p.palStepBox03.set_type("vertical");
                p.palStepBox03.set_flexmainaxisalign("center");
                p.palStepBox03.set_flexcrossaxiswrapalign("center");
                p.palStepBox03.set_flexcrossaxisalign("center");
                p.palStepBox03.set_verticalgap("5");
                p.palStepBox03.set_fittocontents("height");
                p.palStepBox03.set_visible("true");
                p.palStepBox03.move("450.00","7","160","90",null,null);

                p.BoxArw02_00.set_taborder("20");
                p.BoxArw02_00.set_text("");
                p.BoxArw02_00.set_cssclass("sta_WF_BoxArw");
                p.BoxArw02_00.set_visible("true");
                p.BoxArw02_00.move("440.00","-3","40","40",null,null);

                p.palStepBox03_00.set_taborder("21");
                p.palStepBox03_00.set_cssclass("pal_WF_StepBox");
                p.palStepBox03_00.set_spacing("0px 20px 0px 20px");
                p.palStepBox03_00.set_type("vertical");
                p.palStepBox03_00.set_flexmainaxisalign("center");
                p.palStepBox03_00.set_flexcrossaxiswrapalign("center");
                p.palStepBox03_00.set_flexcrossaxisalign("center");
                p.palStepBox03_00.set_verticalgap("5");
                p.palStepBox03_00.set_fittocontents("height");
                p.palStepBox03_00.set_visible("true");
                p.palStepBox03_00.move("450.00","7","160","90",null,null);

                p.staStepTit03_00.set_taborder("22");
                p.staStepTit03_00.set_text("완료처리");
                p.staStepTit03_00.set_cssclass("sta_WF_Boxtit");
                p.staStepTit03_00.set_fittocontents("width");
                p.staStepTit03_00.set_wordWrap("none");
                p.staStepTit03_00.move("-1","-1827","100%","49",null,null);

                p.btnACT00037WRKGRP.set_taborder("26");
                p.btnACT00037WRKGRP.set_text("0");
                p.btnACT00037WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00037WRKGRP.set_fittocontents("width");
                p.btnACT00037WRKGRP.set_textAlign("left");
                p.btnACT00037WRKGRP.set_letterSpacing("0px");
                p.btnACT00037WRKGRP.move("87.00","20","50","30",null,null);

                p.StepSls03_00.set_taborder("25");
                p.StepSls03_00.set_text("/");
                p.StepSls03_00.set_textAlign("center");
                p.StepSls03_00.move("75.00","20","7","30",null,null);

                p.btnACT00037INDV.set_taborder("24");
                p.btnACT00037INDV.set_text("0");
                p.btnACT00037INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00037INDV.set_fittocontents("width");
                p.btnACT00037INDV.set_textAlign("right");
                p.btnACT00037INDV.set_letterSpacing("0px");
                p.btnACT00037INDV.move("20.00","20","50","30",null,null);

                p.palStepBoxCon03_00.set_taborder("23");
                p.palStepBoxCon03_00.set_fittocontents("width");
                p.palStepBoxCon03_00.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon03_00.set_flexmainaxisalign("center");
                p.palStepBoxCon03_00.set_horizontalgap("5");
                p.palStepBoxCon03_00.move("-1","-1773","100%","33",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divATF00020.form.palStepGroup.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00020.form.palStepGroup.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00020.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divATF00020.form.palStepGroup.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staNvLabel01.set_taborder("4");
                p.staNvLabel01.set_text("전기사용(형광램프신청)");
                p.staNvLabel01.set_cssclass("sta_WF_NvLabel");
                p.staNvLabel01.set_flexshrink("0");
                p.staNvLabel01.set_fittocontents("width");
                p.staNvLabel01.set_minwidth("");
                p.staNvLabel01.move("83","130","130","60",null,null);

                p.staNvArw01.set_taborder("0");
                p.staNvArw01.set_text("");
                p.staNvArw01.set_cssclass("sta_WF_NvArw");
                p.staNvArw01.move("198.00","152","15","15",null,null);

                p.staNvLabel02.set_taborder("1");
                p.staNvLabel02.set_text("신청및접수");
                p.staNvLabel02.set_fittocontents("width");
                p.staNvLabel02.move("223.00","130","65","60",null,null);

                p.staNvArw02.set_taborder("2");
                p.staNvArw02.set_text("");
                p.staNvArw02.set_cssclass("sta_WF_NvArw");
                p.staNvArw02.move("338.00","152","15","15",null,null);

                p.staNvLabel03.set_taborder("3");
                p.staNvLabel03.set_text("작업그룹");
                p.staNvLabel03.set_fittocontents("width");
                p.staNvLabel03.move("363.00","130","52","60",null,null);

                p.Panel00.set_taborder("5");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.move("20","0","80%","60",null,null);

                p.Panel00_00.set_taborder("6");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_flexmainaxisalign("end");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.move("558","0","15%","60",null,null);

                p.btnListClose.set_taborder("7");
                p.btnListClose.set_cssclass("btn_MDI_CloseAll");
                p.btnListClose.move("1346","0","34","34",null,null);
            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00020.form.palStepConGroup.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00020.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsATF00149SrvcPrcsList");
                p.grdList.set_autofittype("none");
                p.grdList.move("0","54","100.00%",null,null,"6");

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총 <fc v=\'#1e4ebe\'> 0</fc>건");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.move("0","0","200","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divATF00020.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00020.form.palStepConGroup.form.divGrd.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00020.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divATF00020.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00020.form.palStepConGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00020.form.palStepConGroup.form,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_spacing("16px 10px 16px 10px ");
            this.divForm.form.divATF00020.form.palStepConGroup.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divATF00020.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00020.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepGroup.set_taborder("0");
                p.btnStepGroup.set_flexcrossaxisalign("start");
                p.btnStepGroup.set_flexcrossaxiswrapalign("start");
                p.btnStepGroup.set_flexmainaxisalign("start");
                p.btnStepGroup.set_horizontalgap("20");
                p.btnStepGroup.set_fittocontents("height");
                p.btnStepGroup.set_cssclass("pal_WF_StepGroup");
                p.btnStepGroup.set_spacing("0px 0px 20px 0px");
                p.btnStepGroup.move("20","0","100%","60",null,null);

                p.btnStepService.set_taborder("1");
                p.btnStepService.set_text("전기신청/해지");
                p.btnStepService.set_cssclass("btn_WF_StepTit");
                p.btnStepService.set_visible("true");
                p.btnStepService.set_fittocontents("width");
                p.btnStepService.move("774.00","10","195","40",null,null);

                p.palStepGroup.set_taborder("5");
                p.palStepGroup.set_text("Div00");
                p.palStepGroup.move("10.00","110","100%","110",null,null);

                p.btnStepNew.set_taborder("2");
                p.btnStepNew.set_text("전기사용(형광램프신청)");
                p.btnStepNew.set_cssclass("btn_WF_StepSub");
                p.btnStepNew.set_visible("true");
                p.btnStepNew.set_fittocontents("width");
                p.btnStepNew.move("804.00","10","240","40",null,null);

                p.staStepEx.set_taborder("3");
                p.staStepEx.set_text("나 / 작업 그룹");
                p.staStepEx.set_fittocontents("width");
                p.staStepEx.move("571","128","78","40",null,null);

                p.palStepConGroup.set_taborder("4");
                p.palStepConGroup.set_text("Div00");
                p.palStepConGroup.set_cssclass("div_WF_Step");
                p.palStepConGroup.set_fittocontents("height");
                p.palStepConGroup.set_visible("false");
                p.palStepConGroup.move("20","199","100%","510",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divATF00020.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00020.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00020.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepService.set_visible("false");

                p.btnStepNew.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divATF00020.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00022.form.palStepGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00022.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staStepTit01.set_taborder("0");
                p.staStepTit01.set_text("신청 및 접수");
                p.staStepTit01.set_cssclass("sta_WF_Boxtit");
                p.staStepTit01.set_fittocontents("width");
                p.staStepTit01.move("20.00","0","100%","49",null,null);

                p.btnACT00039INDV.set_taborder("1");
                p.btnACT00039INDV.set_text("0");
                p.btnACT00039INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00039INDV.set_fittocontents("width");
                p.btnACT00039INDV.set_textAlign("right");
                p.btnACT00039INDV.set_letterSpacing("0px");
                p.btnACT00039INDV.move("0.00","0","50","30",null,null);

                p.StepSls01.set_taborder("2");
                p.StepSls01.set_text("/");
                p.StepSls01.set_textAlign("center");
                p.StepSls01.move("55.00","0","7","30",null,null);

                p.btnACT00039WRKGRP.set_taborder("3");
                p.btnACT00039WRKGRP.set_text("0");
                p.btnACT00039WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00039WRKGRP.set_fittocontents("width");
                p.btnACT00039WRKGRP.set_textAlign("left");
                p.btnACT00039WRKGRP.set_letterSpacing("0px");
                p.btnACT00039WRKGRP.move("67.00","0","50","30",null,null);

                p.palStepBoxCon01.set_taborder("4");
                p.palStepBoxCon01.set_fittocontents("width");
                p.palStepBoxCon01.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon01.set_flexmainaxisalign("center");
                p.palStepBoxCon01.set_horizontalgap("5");
                p.palStepBoxCon01.move("20.00","54","100%","33",null,null);

                p.palStepBox01.set_taborder("5");
                p.palStepBox01.set_cssclass("pal_WF_StepBox");
                p.palStepBox01.set_type("vertical");
                p.palStepBox01.set_flexmainaxisalign("center");
                p.palStepBox01.set_flexcrossaxiswrapalign("center");
                p.palStepBox01.set_flexcrossaxisalign("center");
                p.palStepBox01.set_verticalgap("5");
                p.palStepBox01.set_fittocontents("height");
                p.palStepBox01.set_spacing("0px 20px 0px 20px");
                p.palStepBox01.move("0.00","-3","160","90",null,null);

                p.BoxArw01.set_taborder("6");
                p.BoxArw01.set_text("");
                p.BoxArw01.set_cssclass("sta_WF_BoxArw");
                p.BoxArw01.set_visible("true");
                p.BoxArw01.move("220.00","-3","40","40",null,null);

                p.staStepTit02.set_taborder("7");
                p.staStepTit02.set_text("반려확인");
                p.staStepTit02.set_cssclass("sta_WF_Boxtit");
                p.staStepTit02.set_fittocontents("none");
                p.staStepTit02.move("30.00","10","100%","49",null,null);

                p.btnACT00040INDV.set_taborder("8");
                p.btnACT00040INDV.set_text("0");
                p.btnACT00040INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00040INDV.set_fittocontents("width");
                p.btnACT00040INDV.set_textAlign("right");
                p.btnACT00040INDV.set_letterSpacing("0px");
                p.btnACT00040INDV.move("10.00","10","50","30",null,null);

                p.StepSls02.set_taborder("9");
                p.StepSls02.set_text("/");
                p.StepSls02.set_textAlign("center");
                p.StepSls02.move("65.00","10","7","30",null,null);

                p.btnACT00040WRKGRP.set_taborder("10");
                p.btnACT00040WRKGRP.set_text("0");
                p.btnACT00040WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00040WRKGRP.set_fittocontents("width");
                p.btnACT00040WRKGRP.set_textAlign("left");
                p.btnACT00040WRKGRP.set_letterSpacing("0px");
                p.btnACT00040WRKGRP.move("77.00","10","50","30",null,null);

                p.palStepBoxCon02.set_taborder("11");
                p.palStepBoxCon02.set_fittocontents("width");
                p.palStepBoxCon02.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon02.set_flexmainaxisalign("center");
                p.palStepBoxCon02.set_horizontalgap("5");
                p.palStepBoxCon02.move("30.00","64","100%","33",null,null);

                p.palStepBox02.set_taborder("12");
                p.palStepBox02.set_cssclass("pal_WF_StepBox");
                p.palStepBox02.set_spacing("0px 20px 0px 20px");
                p.palStepBox02.set_type("vertical");
                p.palStepBox02.set_flexmainaxisalign("center");
                p.palStepBox02.set_flexcrossaxiswrapalign("center");
                p.palStepBox02.set_flexcrossaxisalign("center");
                p.palStepBox02.set_verticalgap("5");
                p.palStepBox02.set_fittocontents("height");
                p.palStepBox02.set_visible("true");
                p.palStepBox02.move("230.00","7","160","90",null,null);

                p.btnACT00042WRKGRP.set_taborder("26");
                p.btnACT00042WRKGRP.set_text("0");
                p.btnACT00042WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00042WRKGRP.set_fittocontents("width");
                p.btnACT00042WRKGRP.set_textAlign("left");
                p.btnACT00042WRKGRP.set_letterSpacing("0px");
                p.btnACT00042WRKGRP.move("77.00","10","50","30",null,null);

                p.StepSls02_00_00.set_taborder("25");
                p.StepSls02_00_00.set_text("/");
                p.StepSls02_00_00.set_textAlign("center");
                p.StepSls02_00_00.move("65.00","10","7","30",null,null);

                p.BoxArw02.set_taborder("13");
                p.BoxArw02.set_text("");
                p.BoxArw02.set_cssclass("sta_WF_BoxArw");
                p.BoxArw02.set_visible("true");
                p.BoxArw02.move("220.00","-3","40","40",null,null);

                p.btnACT00041WRKGRP.set_taborder("19");
                p.btnACT00041WRKGRP.set_text("0");
                p.btnACT00041WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00041WRKGRP.set_fittocontents("width");
                p.btnACT00041WRKGRP.set_textAlign("left");
                p.btnACT00041WRKGRP.set_letterSpacing("0px");
                p.btnACT00041WRKGRP.move("77.00","10","50","30",null,null);

                p.palStepBox03.set_taborder("14");
                p.palStepBox03.set_cssclass("pal_WF_StepBox");
                p.palStepBox03.set_spacing("0px 20px 0px 20px");
                p.palStepBox03.set_type("vertical");
                p.palStepBox03.set_flexmainaxisalign("center");
                p.palStepBox03.set_flexcrossaxiswrapalign("center");
                p.palStepBox03.set_flexcrossaxisalign("center");
                p.palStepBox03.set_verticalgap("5");
                p.palStepBox03.set_fittocontents("height");
                p.palStepBox03.set_visible("true");
                p.palStepBox03.move("230.00","7","160","90",null,null);

                p.BoxArw03.set_taborder("20");
                p.BoxArw03.set_text("");
                p.BoxArw03.set_cssclass("sta_WF_BoxArw");
                p.BoxArw03.set_visible("true");
                p.BoxArw03.move("220.00","-3","40","40",null,null);

                p.staStepTit02_00_00.set_taborder("22");
                p.staStepTit02_00_00.set_text("완료처리");
                p.staStepTit02_00_00.set_cssclass("sta_WF_Boxtit");
                p.staStepTit02_00_00.set_fittocontents("none");
                p.staStepTit02_00_00.move("-1","-2251","100%","49",null,null);

                p.palStepBox04.set_taborder("21");
                p.palStepBox04.set_cssclass("pal_WF_StepBox");
                p.palStepBox04.set_spacing("0px 20px 0px 20px");
                p.palStepBox04.set_type("vertical");
                p.palStepBox04.set_flexmainaxisalign("center");
                p.palStepBox04.set_flexcrossaxiswrapalign("center");
                p.palStepBox04.set_flexcrossaxisalign("center");
                p.palStepBox04.set_verticalgap("5");
                p.palStepBox04.set_fittocontents("height");
                p.palStepBox04.set_visible("true");
                p.palStepBox04.move("230.00","7","160","90",null,null);

                p.btnACT00042INDV.set_taborder("24");
                p.btnACT00042INDV.set_text("0");
                p.btnACT00042INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00042INDV.set_fittocontents("width");
                p.btnACT00042INDV.set_textAlign("right");
                p.btnACT00042INDV.set_letterSpacing("0px");
                p.btnACT00042INDV.move("10.00","10","50","30",null,null);

                p.palStepBoxCon02_00_00.set_taborder("23");
                p.palStepBoxCon02_00_00.set_fittocontents("width");
                p.palStepBoxCon02_00_00.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon02_00_00.set_flexmainaxisalign("center");
                p.palStepBoxCon02_00_00.set_horizontalgap("5");
                p.palStepBoxCon02_00_00.move("-1","-2197","100%","33",null,null);

                p.StepSls02_00.set_taborder("18");
                p.StepSls02_00.set_text("/");
                p.StepSls02_00.set_textAlign("center");
                p.StepSls02_00.move("65.00","10","7","30",null,null);

                p.btnACT00041INDV.set_taborder("17");
                p.btnACT00041INDV.set_text("0");
                p.btnACT00041INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00041INDV.set_fittocontents("width");
                p.btnACT00041INDV.set_textAlign("right");
                p.btnACT00041INDV.set_letterSpacing("0px");
                p.btnACT00041INDV.move("10.00","10","50","30",null,null);

                p.palStepBoxCon02_00.set_taborder("16");
                p.palStepBoxCon02_00.set_fittocontents("width");
                p.palStepBoxCon02_00.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon02_00.set_flexmainaxisalign("center");
                p.palStepBoxCon02_00.set_horizontalgap("5");
                p.palStepBoxCon02_00.move("-1","-2197","100%","33",null,null);

                p.staStepTit02_00.set_taborder("15");
                p.staStepTit02_00.set_text("전기료확인");
                p.staStepTit02_00.set_cssclass("sta_WF_Boxtit");
                p.staStepTit02_00.set_fittocontents("none");
                p.staStepTit02_00.move("-1","-2251","100%","49",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divATF00022.form.palStepGroup.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00022.form.palStepGroup.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00022.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divATF00022.form.palStepGroup.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staNvLabel01.set_taborder("4");
                p.staNvLabel01.set_text("전기사용(난로신청)");
                p.staNvLabel01.set_cssclass("sta_WF_NvLabel");
                p.staNvLabel01.set_flexshrink("0");
                p.staNvLabel01.set_fittocontents("width");
                p.staNvLabel01.set_minwidth("");
                p.staNvLabel01.move("83","130","130","60",null,null);

                p.staNvArw01.set_taborder("0");
                p.staNvArw01.set_text("");
                p.staNvArw01.set_cssclass("sta_WF_NvArw");
                p.staNvArw01.move("198.00","152","15","15",null,null);

                p.staNvLabel02.set_taborder("1");
                p.staNvLabel02.set_text("신청및접수");
                p.staNvLabel02.set_fittocontents("width");
                p.staNvLabel02.move("223.00","130","65","60",null,null);

                p.staNvArw02.set_taborder("2");
                p.staNvArw02.set_text("");
                p.staNvArw02.set_cssclass("sta_WF_NvArw");
                p.staNvArw02.move("338.00","152","15","15",null,null);

                p.staNvLabel03.set_taborder("3");
                p.staNvLabel03.set_text("작업그룹");
                p.staNvLabel03.set_fittocontents("width");
                p.staNvLabel03.move("363.00","130","52","60",null,null);

                p.Panel00.set_taborder("5");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.move("20","0","80%","60",null,null);

                p.Panel00_00.set_taborder("6");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_flexmainaxisalign("end");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.move("558","0","15%","60",null,null);

                p.btnListClose.set_taborder("7");
                p.btnListClose.set_cssclass("btn_MDI_CloseAll");
                p.btnListClose.move("1346","0","34","34",null,null);
            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00022.form.palStepConGroup.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00022.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsATF10022SrvcPrcsList");
                p.grdList.set_autofittype("none");
                p.grdList.move("0","54","100.00%",null,null,"6");

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총 <fc v=\'#1e4ebe\'> 0</fc>건");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.move("0","0","200","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divATF00022.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00022.form.palStepConGroup.form.divGrd.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00022.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divATF00022.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00022.form.palStepConGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00022.form.palStepConGroup.form,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_spacing("16px 10px 16px 10px ");
            this.divForm.form.divATF00022.form.palStepConGroup.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divATF00022.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00022.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepGroup.set_taborder("0");
                p.btnStepGroup.set_flexcrossaxisalign("start");
                p.btnStepGroup.set_flexcrossaxiswrapalign("start");
                p.btnStepGroup.set_flexmainaxisalign("start");
                p.btnStepGroup.set_horizontalgap("20");
                p.btnStepGroup.set_fittocontents("height");
                p.btnStepGroup.set_cssclass("pal_WF_StepGroup");
                p.btnStepGroup.set_spacing("0px 0px 20px 0px");
                p.btnStepGroup.move("20","0","100%","60",null,null);

                p.btnStepService.set_taborder("1");
                p.btnStepService.set_text("전기신청/해지");
                p.btnStepService.set_cssclass("btn_WF_StepTit");
                p.btnStepService.set_visible("true");
                p.btnStepService.set_fittocontents("width");
                p.btnStepService.move("774.00","10","195","40",null,null);

                p.palStepGroup.set_taborder("5");
                p.palStepGroup.set_text("Div00");
                p.palStepGroup.move("10.00","110","100%","110",null,null);

                p.btnStepNew.set_taborder("2");
                p.btnStepNew.set_text("전기사용(난로신청)");
                p.btnStepNew.set_cssclass("btn_WF_StepSub");
                p.btnStepNew.set_visible("true");
                p.btnStepNew.set_fittocontents("width");
                p.btnStepNew.move("804.00","10","240","40",null,null);

                p.staStepEx.set_taborder("3");
                p.staStepEx.set_text("나 / 작업 그룹");
                p.staStepEx.set_fittocontents("width");
                p.staStepEx.move("571","128","78","40",null,null);

                p.palStepConGroup.set_taborder("4");
                p.palStepConGroup.set_text("Div00");
                p.palStepConGroup.set_cssclass("div_WF_Step");
                p.palStepConGroup.set_fittocontents("height");
                p.palStepConGroup.set_visible("false");
                p.palStepConGroup.move("20","199","100%","510",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divATF00022.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00022.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00022.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepService.set_visible("false");

                p.btnStepNew.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divATF00022.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00042.form.palStepGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00042.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staStepTit01.set_taborder("0");
                p.staStepTit01.set_text("계약체결등록");
                p.staStepTit01.set_cssclass("sta_WF_Boxtit");
                p.staStepTit01.set_fittocontents("width");
                p.staStepTit01.move("20.00","0","100%","49",null,null);

                p.btnACT00093INDV.set_taborder("1");
                p.btnACT00093INDV.set_text("0");
                p.btnACT00093INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00093INDV.set_fittocontents("width");
                p.btnACT00093INDV.set_textAlign("right");
                p.btnACT00093INDV.set_letterSpacing("0px");
                p.btnACT00093INDV.move("0.00","0","50","30",null,null);

                p.StepSls01.set_taborder("2");
                p.StepSls01.set_text("/");
                p.StepSls01.set_textAlign("center");
                p.StepSls01.move("55.00","0","7","30",null,null);

                p.btnACT00093WRKGRP.set_taborder("3");
                p.btnACT00093WRKGRP.set_text("0");
                p.btnACT00093WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00093WRKGRP.set_fittocontents("width");
                p.btnACT00093WRKGRP.set_textAlign("left");
                p.btnACT00093WRKGRP.set_letterSpacing("0px");
                p.btnACT00093WRKGRP.move("67.00","0","50","30",null,null);

                p.palStepBoxCon01.set_taborder("4");
                p.palStepBoxCon01.set_fittocontents("width");
                p.palStepBoxCon01.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon01.set_flexmainaxisalign("center");
                p.palStepBoxCon01.set_horizontalgap("5");
                p.palStepBoxCon01.move("20.00","54","100%","33",null,null);

                p.palStepBox01.set_taborder("5");
                p.palStepBox01.set_cssclass("pal_WF_StepBox");
                p.palStepBox01.set_type("vertical");
                p.palStepBox01.set_flexmainaxisalign("center");
                p.palStepBox01.set_flexcrossaxiswrapalign("center");
                p.palStepBox01.set_flexcrossaxisalign("center");
                p.palStepBox01.set_verticalgap("5");
                p.palStepBox01.set_fittocontents("height");
                p.palStepBox01.set_spacing("0px 20px 0px 20px");
                p.palStepBox01.move("0.00","-3","160","90",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divATF00042.form.palStepGroup.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00042.form.palStepGroup.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00042.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divATF00042.form.palStepGroup.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staNvLabel01.set_taborder("4");
                p.staNvLabel01.set_text("이동지역차량_장비등록");
                p.staNvLabel01.set_cssclass("sta_WF_NvLabel");
                p.staNvLabel01.set_flexshrink("0");
                p.staNvLabel01.set_fittocontents("width");
                p.staNvLabel01.set_minwidth("");
                p.staNvLabel01.move("83","130","180","60",null,null);

                p.staNvArw01.set_taborder("0");
                p.staNvArw01.set_text("");
                p.staNvArw01.set_cssclass("sta_WF_NvArw");
                p.staNvArw01.move("198.00","152","15","15",null,null);

                p.staNvLabel02.set_taborder("1");
                p.staNvLabel02.set_text("계약쳬결등록");
                p.staNvLabel02.set_fittocontents("width");
                p.staNvLabel02.move("223.00","130","65","60",null,null);

                p.staNvArw02.set_taborder("2");
                p.staNvArw02.set_text("");
                p.staNvArw02.set_cssclass("sta_WF_NvArw");
                p.staNvArw02.move("338.00","152","15","15",null,null);

                p.staNvLabel03.set_taborder("3");
                p.staNvLabel03.set_text("작업그룹");
                p.staNvLabel03.set_fittocontents("width");
                p.staNvLabel03.move("363.00","130","100","60",null,null);

                p.Panel00.set_taborder("5");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.move("20","0","80%","60",null,null);

                p.Panel00_00.set_taborder("6");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_flexmainaxisalign("end");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.move("558","0","15%","60",null,null);

                p.btnListClose.set_taborder("7");
                p.btnListClose.set_cssclass("btn_MDI_CloseAll");
                p.btnListClose.move("1346","0","34","34",null,null);
            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00042.form.palStepConGroup.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00042.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsATF10022SrvcPrcsList");
                p.grdList.set_autofittype("none");
                p.grdList.move("0","54","100.00%",null,null,"6");

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총 <fc v=\'#1e4ebe\'> 0</fc>건");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.move("0","0","200","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divATF00042.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00042.form.palStepConGroup.form.divGrd.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00042.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divATF00042.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00042.form.palStepConGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00042.form.palStepConGroup.form,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_spacing("16px 10px 16px 10px ");
            this.divForm.form.divATF00042.form.palStepConGroup.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divATF00042.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00042.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepGroup.set_taborder("0");
                p.btnStepGroup.set_flexcrossaxisalign("start");
                p.btnStepGroup.set_flexcrossaxiswrapalign("start");
                p.btnStepGroup.set_flexmainaxisalign("start");
                p.btnStepGroup.set_horizontalgap("20");
                p.btnStepGroup.set_fittocontents("height");
                p.btnStepGroup.set_cssclass("pal_WF_StepGroup");
                p.btnStepGroup.set_spacing("0px 0px 20px 0px");
                p.btnStepGroup.move("20","0","100%","60",null,null);

                p.btnStepService.set_taborder("1");
                p.btnStepService.set_text("이동지역");
                p.btnStepService.set_cssclass("btn_WF_StepTit");
                p.btnStepService.set_visible("true");
                p.btnStepService.set_fittocontents("width");
                p.btnStepService.move("774.00","10","195","40",null,null);

                p.palStepGroup.set_taborder("5");
                p.palStepGroup.set_text("Div00");
                p.palStepGroup.move("10.00","110","100%","110",null,null);

                p.btnStepNew.set_taborder("2");
                p.btnStepNew.set_text("이동지역차량_장비등록");
                p.btnStepNew.set_cssclass("btn_WF_StepSub");
                p.btnStepNew.set_visible("true");
                p.btnStepNew.set_fittocontents("width");
                p.btnStepNew.move("804.00","10","240","40",null,null);

                p.staStepEx.set_taborder("3");
                p.staStepEx.set_text("나 / 작업 그룹");
                p.staStepEx.set_fittocontents("width");
                p.staStepEx.move("571","128","78","40",null,null);

                p.palStepConGroup.set_taborder("4");
                p.palStepConGroup.set_text("Div00");
                p.palStepConGroup.set_cssclass("div_WF_Step");
                p.palStepConGroup.set_fittocontents("height");
                p.palStepConGroup.set_visible("false");
                p.palStepConGroup.move("20","199","100%","510",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divATF00042.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00042.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00042.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepService.set_visible("false");

                p.btnStepNew.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divATF00042.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00084.form.palStepGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00084.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staStepTit01.set_taborder("0");
                p.staStepTit01.set_text("확인");
                p.staStepTit01.set_cssclass("sta_WF_Boxtit");
                p.staStepTit01.set_fittocontents("width");
                p.staStepTit01.move("20.00","0","100%","49",null,null);

                p.btnACT00171INDV.set_taborder("1");
                p.btnACT00171INDV.set_text("0");
                p.btnACT00171INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00171INDV.set_fittocontents("width");
                p.btnACT00171INDV.set_textAlign("right");
                p.btnACT00171INDV.set_letterSpacing("0px");
                p.btnACT00171INDV.move("0.00","0","50","30",null,null);

                p.StepSls01.set_taborder("2");
                p.StepSls01.set_text("/");
                p.StepSls01.set_textAlign("center");
                p.StepSls01.move("55.00","0","7","30",null,null);

                p.btnACT00171WRKGRP.set_taborder("3");
                p.btnACT00171WRKGRP.set_text("0");
                p.btnACT00171WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00171WRKGRP.set_fittocontents("width");
                p.btnACT00171WRKGRP.set_textAlign("left");
                p.btnACT00171WRKGRP.set_letterSpacing("0px");
                p.btnACT00171WRKGRP.move("67.00","0","50","30",null,null);

                p.palStepBoxCon01.set_taborder("4");
                p.palStepBoxCon01.set_fittocontents("width");
                p.palStepBoxCon01.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon01.set_flexmainaxisalign("center");
                p.palStepBoxCon01.set_horizontalgap("5");
                p.palStepBoxCon01.move("20.00","54","100%","33",null,null);

                p.palStepBox01.set_taborder("5");
                p.palStepBox01.set_cssclass("pal_WF_StepBox");
                p.palStepBox01.set_type("vertical");
                p.palStepBox01.set_flexmainaxisalign("center");
                p.palStepBox01.set_flexcrossaxiswrapalign("center");
                p.palStepBox01.set_flexcrossaxisalign("center");
                p.palStepBox01.set_verticalgap("5");
                p.palStepBox01.set_fittocontents("height");
                p.palStepBox01.set_spacing("0px 20px 0px 20px");
                p.palStepBox01.move("0.00","-3","160","90",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divATF00084.form.palStepGroup.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00084.form.palStepGroup.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00084.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divATF00084.form.palStepGroup.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staNvLabel01.set_taborder("4");
                p.staNvLabel01.set_text("협조처리");
                p.staNvLabel01.set_cssclass("sta_WF_NvLabel");
                p.staNvLabel01.set_flexshrink("0");
                p.staNvLabel01.set_fittocontents("width");
                p.staNvLabel01.set_minwidth("");
                p.staNvLabel01.move("83","130","70","60",null,null);

                p.staNvArw01.set_taborder("0");
                p.staNvArw01.set_text("");
                p.staNvArw01.set_cssclass("sta_WF_NvArw");
                p.staNvArw01.move("198.00","152","15","15",null,null);

                p.staNvLabel02.set_taborder("1");
                p.staNvLabel02.set_text("확인");
                p.staNvLabel02.set_fittocontents("width");
                p.staNvLabel02.move("223.00","130","26","60",null,null);

                p.staNvArw02.set_taborder("2");
                p.staNvArw02.set_text("");
                p.staNvArw02.set_cssclass("sta_WF_NvArw");
                p.staNvArw02.move("338.00","152","15","15",null,null);

                p.staNvLabel03.set_taborder("3");
                p.staNvLabel03.set_text("작업그룹");
                p.staNvLabel03.set_fittocontents("width");
                p.staNvLabel03.move("363.00","130","52","60",null,null);

                p.Panel00.set_taborder("5");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.move("20","0","80%","60",null,null);

                p.Panel00_00.set_taborder("6");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_flexmainaxisalign("end");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.move("558","0","15%","60",null,null);

                p.btnListClose.set_taborder("7");
                p.btnListClose.set_cssclass("btn_MDI_CloseAll");
                p.btnListClose.move("1346","0","34","34",null,null);
            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00084.form.palStepConGroup.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00084.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsATF00084SrvcPrcsList");
                p.grdList.set_autofittype("none");
                p.grdList.move("0","54","100.00%",null,null,"6");

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총 <fc v=\'#1e4ebe\'> 0</fc>건");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.move("0","0","200","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divATF00084.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00084.form.palStepConGroup.form.divGrd.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00084.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divATF00084.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00084.form.palStepConGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00084.form.palStepConGroup.form,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_spacing("16px 10px 16px 10px ");
            this.divForm.form.divATF00084.form.palStepConGroup.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divATF00084.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00084.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepGroup.set_taborder("0");
                p.btnStepGroup.set_flexcrossaxisalign("start");
                p.btnStepGroup.set_flexcrossaxiswrapalign("start");
                p.btnStepGroup.set_flexmainaxisalign("start");
                p.btnStepGroup.set_horizontalgap("20");
                p.btnStepGroup.set_fittocontents("height");
                p.btnStepGroup.set_cssclass("pal_WF_StepGroup");
                p.btnStepGroup.set_spacing("0px 0px 20px 0px");
                p.btnStepGroup.move("20","0","100%","60",null,null);

                p.palStepGroup.set_taborder("5");
                p.palStepGroup.set_text("Div00");
                p.palStepGroup.move("10.00","110","100%","110",null,null);

                p.btnStepService.set_taborder("1");
                p.btnStepService.set_text("협조처리");
                p.btnStepService.set_cssclass("btn_WF_StepTit");
                p.btnStepService.set_visible("true");
                p.btnStepService.set_fittocontents("width");
                p.btnStepService.move("774.00","10","195","40",null,null);

                p.btnStepNew.set_taborder("2");
                p.btnStepNew.set_text("협조처리");
                p.btnStepNew.set_cssclass("btn_WF_StepSub");
                p.btnStepNew.set_visible("true");
                p.btnStepNew.set_fittocontents("width");
                p.btnStepNew.move("804.00","10","195","40",null,null);

                p.staStepEx.set_taborder("3");
                p.staStepEx.set_text("나 / 작업 그룹");
                p.staStepEx.set_fittocontents("width");
                p.staStepEx.move("571","128","120","40",null,null);

                p.palStepConGroup.set_taborder("4");
                p.palStepConGroup.set_text("Div00");
                p.palStepConGroup.set_cssclass("div_WF_Step");
                p.palStepConGroup.set_fittocontents("height");
                p.palStepConGroup.set_visible("false");
                p.palStepConGroup.move("20","199","100%","510",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divATF00084.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00084.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divATF00084.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepService.set_visible("false");

                p.btnStepNew.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divATF00084.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divMnCk.set_taborder("0");
                p.divMnCk.set_text("Div00");
                p.divMnCk.set_cssclass("div_WF_CkBg");
                p.divMnCk.set_fittocontents("height");
                p.divMnCk.set_formscrollbartype("none none");
                p.divMnCk.set_formscrolltype("none");
                p.divMnCk.move("98","75","100%","80",null,null);

                p.divATF00008.set_taborder("1");
                p.divATF00008.set_text("통신신청");
                p.divATF00008.set_fittocontents("height");
                p.divATF00008.set_formscrollbartype("none none");
                p.divATF00008.set_formscrolltype("none");
                p.divATF00008.set_cssclass("div_WF_Step");
                p.divATF00008.move("1665","29","100%","900",null,null);

                p.divATF00012.set_taborder("2");
                p.divATF00012.set_text("통신변경");
                p.divATF00012.set_fittocontents("height");
                p.divATF00012.set_formscrollbartype("none none");
                p.divATF00012.set_formscrolltype("none");
                p.divATF00012.set_cssclass("div_WF_Step");
                p.divATF00012.move("1665","29","100%","900",null,null);

                p.divATF00014.set_taborder("4");
                p.divATF00014.set_text("통신해지");
                p.divATF00014.set_fittocontents("height");
                p.divATF00014.set_formscrollbartype("none none");
                p.divATF00014.set_formscrolltype("none");
                p.divATF00014.set_cssclass("div_WF_Step");
                p.divATF00014.move("18","1592","100.00%","900",null,null);

                p.divATF00016.set_taborder("5");
                p.divATF00016.set_text("통신일시이용중단");
                p.divATF00016.set_fittocontents("height");
                p.divATF00016.set_formscrollbartype("none none");
                p.divATF00016.set_formscrolltype("none");
                p.divATF00016.set_cssclass("div_WF_Step");
                p.divATF00016.move("10","2290","100.00%","900",null,null);

                p.divATF00020.set_taborder("6");
                p.divATF00020.set_text("통신일시이용중단해제");
                p.divATF00020.set_fittocontents("height");
                p.divATF00020.set_formscrollbartype("none none");
                p.divATF00020.set_formscrolltype("none");
                p.divATF00020.set_cssclass("div_WF_Step");
                p.divATF00020.move("52","2430","100.00%","900",null,null);

                p.divATF00022.set_taborder("7");
                p.divATF00022.set_text("통신실출입작업계획서");
                p.divATF00022.set_fittocontents("height");
                p.divATF00022.set_formscrollbartype("none none");
                p.divATF00022.set_formscrolltype("none");
                p.divATF00022.set_cssclass("div_WF_Step");
                p.divATF00022.move("0","2795","100.00%","900",null,null);

                p.divATF00042.set_taborder("8");
                p.divATF00042.set_text("통신실출입작업계획서");
                p.divATF00042.set_fittocontents("height");
                p.divATF00042.set_formscrollbartype("none none");
                p.divATF00042.set_formscrolltype("none");
                p.divATF00042.set_cssclass("div_WF_Step");
                p.divATF00042.move("0","2795","100.00%","900",null,null);

                p.divATF00084.set_taborder("3");
                p.divATF00084.set_text("협조처리");
                p.divATF00084.set_fittocontents("height");
                p.divATF00084.set_formscrollbartype("none none");
                p.divATF00084.set_formscrolltype("none");
                p.divATF00084.set_cssclass("div_WF_Step");
                p.divATF00084.move("1665","29","100%","900",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("30");
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
            obj.set_spacing("0px 10px 0px 20px");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("30");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,3800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("전기 서비스처리");

                p.divForm.set_taborder("0");
                p.divForm.set_text("통신서비스처리");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0",null,"3700","60",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,600,this,
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

        };
        
        // User Script
        this.registerScript("LIF017M00.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	LIF026M00.xfdl
        *  @Creator 	CHG
        *  @CreateDate 	2024/10/16
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/16				김병조							최초생성
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

        	// 로그인 ID
        	this.gvUserId = this.objApp.gdsUser.getColumn(0,"userId");
        	this.dsJobSearch.addRow();
        	this.fnSearch();
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
         * @name : fnJobSeSearch
         * @description : 작업구분조회
         ***************************************************************************/
        this.fnSearch = function()
        {
        	var strSvcId    = "elctySrvcPrcsCntInq";
        	var strSvcUrl   = "elctySrvcPrcs/elctySrvcPrcsCntInq.do";
        	var inData      = "dsJobSearch=dsJobSearch";
        	var outData     = "dsSrvcPrcsCnt=dsSrvcPrcsCnt dsTaskPrcsStepSeCd=dsTaskPrcsStepSeCd";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**************************************************************************
         * @name : fnCmnctSrvcPrcsSearch
         * @description : 작업구분조회
         ***************************************************************************/
        this.fnCmnctSrvcPrcsSearch = function( taskPrcsSeCd )
        {
        	var strSvcId    = "elctySrvcPrcsInq";
        	var strSvcUrl   = "elctySrvcPrcs/elctySrvcPrcsInq.do";
        	var inData      = "dsJobSearch=dsJobSearch";
        	var outData     = "ds" + taskPrcsSeCd + "SrvcPrcsList=dsSrvcPrcsList";
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
        		case "elctySrvcPrcsCntInq" :
        			trace("cmnctSrvcPrcsCntInq" );
        			// 건수조회
        			for(var i =0; i < this.dsSrvcPrcsCnt.rowcount; i++) {
        				var comp1 = this.dsSrvcPrcsCnt.getColumn(i, "taskPrcsSeCd");
        				var comp2 = this.dsSrvcPrcsCnt.getColumn(i, "taskPrcsStepSeCd") + this.dsSrvcPrcsCnt.getColumn(i, "authrtPrcrSe");
        				var cnt   = this.dsSrvcPrcsCnt.getColumn(i, "cnt");

        				if ( this.divForm.form["div" + comp1 ] === undefined ) {
        					continue;
        				}
        				if ( this.divForm.form["div" + comp1 ].form.palStepGroup.form["btn" + comp2 ] === undefined ) {
        					continue;
        				}

        				console.log(this.divForm.form["div" + comp1 ].form.palStepGroup.form["btn" + comp2 ]);
        				this.divForm.form["div" + comp1 ].form.palStepGroup.form["btn" + comp2 ].text  = cnt;
        				trace(comp1 + "=" + comp2);
        			}

        			break;
        		case "elctySrvcPrcsInq" :
        			var taskPrcsSeCd = this.dsJobSearch.getColumn(0,"taskPrcsSeCd");
        			trace( "rowcnt = " + this["ds" + taskPrcsSeCd + "SrvcPrcsList"].rowcount );


        			if ( this["ds" + taskPrcsSeCd + "SrvcPrcsList"].rowcount > 0) {
        				this.divForm.form["div" + taskPrcsSeCd].form.palStepConGroup.form.divGrd.form.staTotal.text = "총 <fc v='#1e4ebe'> " + this["ds" + taskPrcsSeCd + "SrvcPrcsList"].getColumn(0, "allCnt")  + "</fc>건";
        			}
        			else {
        				this.divForm.form["div" + taskPrcsSeCd].form.palStepConGroup.form.divGrd.form.staTotal.text = "총 <fc v='#1e4ebe'> 0</fc>건";
        			}
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
         * @name : btnPrcsCnt_onclick
         * @description : 카운트 클릭 시 해당 그리드 노출.(전기신청)
         ***************************************************************************/
        this.btnPrcsCnt_onclick = function(obj,e)
        {
        	var objVal = obj.text;
        	var objNm = obj.name;


        	if(nexacro.toNumber(objVal, 0) == 0){
        		//return;
        	}
        	trace(obj.name + "=" + obj.parent.parent.parent.parent.id) ;
        	trace(obj.name + "=" + obj.parent.parent.parent.id) ;
        	trace(obj.name + "=" + obj.parent.parent.id) ;
        	trace(obj.name + "=" + obj.parent.id) ;

        	var grdObj = obj.parent.parent.parent.parent.form.palStepConGroup;
        	grdObj.visible = true;

        	if ( objNm.indexOf("INDV") > -1 ) {
        		grdObj.form.divNvWrap.form.staNvLabel03.text = "나";
        		this.dsJobSearch.setColumn(0,"jobGrpSeCd", "INDV");
        	}
        	else {
        		grdObj.form.divNvWrap.form.staNvLabel03.text = "작업그룹";
        		this.dsJobSearch.setColumn(0,"jobGrpSeCd", "WRKGRP");
        	}
        	grdObj.form.divGrd.form.staTotal.text = "총 <fc v='#1e4ebe'> 0</fc>건";

        	// 단계명
        	var nRow = this.dsTaskPrcsStepSeCd.findRow("taskPrcsStepSeCd", objNm.substr(3, 8));
        	grdObj.form.divNvWrap.form.staNvLabel02.text = this.dsTaskPrcsStepSeCd.getColumn(nRow, "taskPrcsStepSeCdNm");
        	grdObj.form.divNvWrap.form.staNvLabel02.visible = false;
        	grdObj.form.divNvWrap.form.staNvLabel02.visible = true;
        	// 처리목록조회
        	this.dsJobSearch.setColumn(0,"taskPrcsSeCd",    obj.parent.parent.parent.parent.id.substr(3, 8));
        	this.dsJobSearch.setColumn(0,"taskPrcsStepSeCd",objNm.substr(3, 8));

        	this.fnCmnctSrvcPrcsSearch(obj.parent.parent.parent.parent.id.substr(3, 8));

        	this.resetScroll();
        	return;
        };

        /**************************************************************************
         * @name : chk_onchanged
         * @description : work flow map 항목 체크.
         ***************************************************************************/
        this.chk_onchanged = function(obj,e)
        {
        	var objVal = obj.value;
        	var objNm = obj.name;
        	if(objNm == "ck01"){
        		this.divForm.form.divStep.visible = objVal;
        		this.divForm.form.divStep00.visible = objVal;

        	}else if(objNm == "ck02"){
        		this.divForm.form.divStep01.visible = objVal;
        	}

        };

        /**************************************************************************
         * @name : grdList_oncellclick
         * @description : 그리드 cell 클릭시 이벤트
         ***************************************************************************/
        this.grdList_oncellclick = function(obj,e)
        {
        	// 신청번호 index값
        	var cellIdx = obj.getBindCellIndex("BODY", "aplyNo");

        	if(e.row > -1){
        		if(cellIdx == e.cell){
        			var sTitle = obj.getBindDataset().getColumn(e.row, "jobNm");
        			var objArg   = {
        				"aplyNo" : obj.getBindDataset().getColumn(e.row, "aplyNo"),
        				// "jobCd"  : this.dsList.getColumn(e.row, "jobCd"),
        				"view"   : "popup"
        			};
        			console.log("objArg = " + JSON.stringify(objArg));

        			var objOption = {
        				popuptype: "modal"	//modal,modaless
        				, width: 1440
        				, height: 900			//width,height 지정하지 않음 popup form size적용
        				//, autosize: true
        				, title: sTitle
        				, resize: true
        				, titlebar: true
        			};
        			var sPopupCallBack = "fnPopupCallback";

        			this.gfnOpenPopup("popup", "work::LIF/WAT/LIF055M00.xfdl", objArg, sPopupCallBack, objOption);

        		}
        	}
        };

        this.gridClose_onclick = function(obj,e)
        {
        	var grdObj = obj.parent.parent.parent.parent;
        	if ( grdObj.id != "palStepConGroup") {
        		return;
        	}
        	grdObj.visible = false;
        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divMnCk.form.staLabel00.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divMnCk.form.ck03.addEventHandler("onchanged",this.chk_onchanged,this);
            this.divForm.form.divMnCk.form.ck02.addEventHandler("onchanged",this.chk_onchanged,this);
            this.divForm.form.divMnCk.form.ck01.addEventHandler("onchanged",this.chk_onchanged,this);
            this.divForm.form.divATF00008.form.palStepGroup.form.btnACT00010INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00008.form.palStepGroup.form.btnACT00010WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00008.form.palStepGroup.form.btnACT00012INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00008.form.palStepGroup.form.btnACT00012WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00008.form.palStepGroup.form.btnACT00013INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00008.form.palStepGroup.form.btnACT00013WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.form.staNvLabel01.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divATF00008.form.palStepConGroup.form.divNvWrap.form.btnListClose.addEventHandler("onclick",this.gridClose_onclick,this);
            this.divForm.form.divATF00008.form.palStepConGroup.form.divGrd.form.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.divForm.form.divATF00012.form.palStepGroup.form.btnACT00015INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00012.form.palStepGroup.form.btnACT00015WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00012.form.palStepGroup.form.btnACT00017INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00012.form.palStepGroup.form.btnACT00017WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00012.form.palStepGroup.form.btnACT00018INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00012.form.palStepGroup.form.btnACT00018WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00012.form.palStepGroup.form.btnACT00020INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00012.form.palStepGroup.form.btnACT00019WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00012.form.palStepGroup.form.btnACT00019INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00012.form.palStepGroup.form.btnACT00020WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.form.staNvLabel01.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divATF00012.form.palStepConGroup.form.divNvWrap.form.btnListClose.addEventHandler("onclick",this.gridClose_onclick,this);
            this.divForm.form.divATF00012.form.palStepConGroup.form.divGrd.form.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.divForm.form.divATF00014.form.palStepGroup.form.btnACT00022INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00014.form.palStepGroup.form.btnACT00022WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00014.form.palStepGroup.form.btnACT00023INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00014.form.palStepGroup.form.btnACT00023WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00014.form.palStepGroup.form.btnACT00024INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00014.form.palStepGroup.form.btnACT00024WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.form.staNvLabel01.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divATF00014.form.palStepConGroup.form.divNvWrap.form.btnListClose.addEventHandler("onclick",this.gridClose_onclick,this);
            this.divForm.form.divATF00014.form.palStepConGroup.form.divGrd.form.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.divForm.form.divATF00016.form.palStepGroup.form.btnACT00026INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00016.form.palStepGroup.form.btnACT00026WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00016.form.palStepGroup.form.btnACT00029INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00016.form.palStepGroup.form.btnACT00029WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.form.staNvLabel01.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divATF00016.form.palStepConGroup.form.divNvWrap.form.btnListClose.addEventHandler("onclick",this.gridClose_onclick,this);
            this.divForm.form.divATF00016.form.palStepConGroup.form.divGrd.form.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.divForm.form.divATF00020.form.palStepGroup.form.btnACT00034INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00020.form.palStepGroup.form.btnACT00034WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00020.form.palStepGroup.form.btnACT00035INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00020.form.palStepGroup.form.btnACT00035WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00020.form.palStepGroup.form.btnACT00036INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00020.form.palStepGroup.form.btnACT00036WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00020.form.palStepGroup.form.btnACT00037WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00020.form.palStepGroup.form.btnACT00037INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.form.staNvLabel01.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divATF00020.form.palStepConGroup.form.divNvWrap.form.btnListClose.addEventHandler("onclick",this.gridClose_onclick,this);
            this.divForm.form.divATF00020.form.palStepConGroup.form.divGrd.form.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.divForm.form.divATF00022.form.palStepGroup.form.btnACT00039INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00022.form.palStepGroup.form.btnACT00039WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00022.form.palStepGroup.form.btnACT00040INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00022.form.palStepGroup.form.btnACT00040WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00022.form.palStepGroup.form.btnACT00042WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00022.form.palStepGroup.form.btnACT00041WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00022.form.palStepGroup.form.btnACT00042INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00022.form.palStepGroup.form.btnACT00041INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.form.staNvLabel01.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divATF00022.form.palStepConGroup.form.divNvWrap.form.btnListClose.addEventHandler("onclick",this.gridClose_onclick,this);
            this.divForm.form.divATF00022.form.palStepConGroup.form.divGrd.form.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.divForm.form.divATF00042.form.palStepGroup.form.btnACT00093INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00042.form.palStepGroup.form.btnACT00093WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.form.staNvLabel01.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divATF00042.form.palStepConGroup.form.divNvWrap.form.btnListClose.addEventHandler("onclick",this.gridClose_onclick,this);
            this.divForm.form.divATF00042.form.palStepConGroup.form.divGrd.form.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.divForm.form.divATF00084.form.palStepGroup.form.btnACT00171INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00084.form.palStepGroup.form.btnACT00171WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form.staNvLabel01.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form.btnListClose.addEventHandler("onclick",this.gridClose_onclick,this);
            this.divForm.form.divATF00084.form.palStepConGroup.form.divGrd.form.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
        };
        this.loadIncludeScript("LIF017M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
