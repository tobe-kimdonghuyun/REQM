(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF006M00");
            this.set_titletext("입주/퇴거 서비스처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,4000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsJobSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"jobGrpSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsStepSeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSrvcPrcsCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"authrtPrcrSe\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsStepSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"cnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTaskPrcsStepSeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"taskPrcsStepSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsStepSeCdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsATF00130SrvcPrcsList", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"taskNm\" type=\"STRING\" size=\"256\"/><Column id=\"docNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"rnb\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rbprsnFcltMngRbprsnNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"allCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsATF00052SrvcPrcsList", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"taskNm\" type=\"STRING\" size=\"256\"/><Column id=\"docNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"rnb\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rbprsnFcltMngRbprsnNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrTelno\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"tpbizNm\" type=\"STRING\" size=\"256\"/><Column id=\"rtosIdntyDmndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"bgncstPrnmntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cmcnPrnmntYmd\" type=\"STRING\" size=\"256\"/><Column id=\"allCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsATF00084SrvcPrcsList", this);
            obj._setContents("<ColumnInfo><Column id=\"taskNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"souId\" type=\"STRING\" size=\"256\"/><Column id=\"crtDt\" type=\"STRING\" size=\"256\"/><Column id=\"dmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"subSysNm\" type=\"STRING\" size=\"256\"/><Column id=\"seNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrOnlnNo\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"drctnBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"drctnCmptnDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcsBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"prcsCmptnDt\" type=\"STRING\" size=\"256\"/><Column id=\"outputEsntlYnNm\" type=\"STRING\" size=\"256\"/><Column id=\"flrplnDmndNm\" type=\"STRING\" size=\"256\"/><Column id=\"dtlProcsEtcCn\" type=\"STRING\" size=\"256\"/><Column id=\"rnb\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnKndCd\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnKndNm\" type=\"STRING\" size=\"256\"/><Column id=\"wrsPstnCn\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"allCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,"3000","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ck01\"/><PanelItem id=\"PanelItem06\" componentid=\"ck02\"/></Contents>");
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

            obj = new CheckBox("ck02","149.00","0","102","40",null,null,null,null,null,null,this.divForm.form.divMnCk.form);
            obj.set_taborder("4");
            obj.set_text("협조처리");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.divForm.form.divMnCk.addChild(obj.name, obj);

            obj = new CheckBox("ck01","0","0","129","40",null,null,null,null,null,null,this.divForm.form.divMnCk.form);
            obj.set_taborder("3");
            obj.set_text("입주자서비스");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.divForm.form.divMnCk.addChild(obj.name, obj);

            obj = new Div("divATF00130","1665","29","100%","720",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_Step");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("btnStepGroup","20","0","100%","60",null,null,null,null,null,null,this.divForm.form.divATF00130.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_StepGroup");
            obj.set_spacing("0px 0px 20px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnStepService\"/><PanelItem id=\"PanelItem04\" componentid=\"btnStepNew\"/><PanelItem id=\"PanelItem01\" componentid=\"staStepEx\"/></Contents>");
            this.divForm.form.divATF00130.addChild(obj.name, obj);

            obj = new Button("btnStepService","774.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divATF00130.form);
            obj.set_taborder("1");
            obj.set_text("입주자서비스");
            obj.set_cssclass("btn_WF_StepTit");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00130.addChild(obj.name, obj);

            obj = new Button("btnStepNew","804.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divATF00130.form);
            obj.set_taborder("2");
            obj.set_text("인계인수(입주)");
            obj.set_cssclass("btn_WF_StepSub");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00130.addChild(obj.name, obj);

            obj = new Static("staStepEx","571","128","75","40",null,null,null,null,null,null,this.divForm.form.divATF00130.form);
            obj.set_taborder("3");
            obj.set_text("나 / 작업그룹");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00130.addChild(obj.name, obj);

            obj = new Div("palStepGroup","10.00","110","100%","110",null,null,null,null,null,null,this.divForm.form.divATF00130.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.divForm.form.divATF00130.addChild(obj.name, obj);

            obj = new Static("staStepTit01","20.00","0","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepGroup.form);
            obj.set_taborder("0");
            obj.set_text("신청 및 접수");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("none");
            this.divForm.form.divATF00130.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00154INDV","0","0","50","30",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepGroup.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("none");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00130.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls01","55.00","0","7","30",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepGroup.form);
            obj.set_taborder("2");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00130.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00154WRKGRP","67.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepGroup.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("none");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00130.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palCnt","20.00","54","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepGroup.form);
            obj.set_taborder("4");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj.set_enableevent("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnACT00154INDV\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls01\"/><PanelItem id=\"PanelItem03\" componentid=\"btnACT00154WRKGRP\"/></Contents>");
            this.divForm.form.divATF00130.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palACT00154","0","-3","160","90",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepGroup.form);
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
            this.divForm.form.divATF00130.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw01","220.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepGroup.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divATF00130.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit02","30.00","10","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepGroup.form);
            obj.set_taborder("7");
            obj.set_text("인계인수수행");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("none");
            this.divForm.form.divATF00130.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00155INDV","10.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepGroup.form);
            obj.set_taborder("8");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("none");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00130.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls02","65.00","10","7","30",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepGroup.form);
            obj.set_taborder("9");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00130.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00155WRKGRP","77.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepGroup.form);
            obj.set_taborder("10");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("none");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00130.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palCnt2","30.00","64","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepGroup.form);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnACT00155INDV\"/><PanelItem id=\"PanelItem02\" componentid=\"StepSls02\"/><PanelItem id=\"PanelItem01\" componentid=\"btnACT00155WRKGRP\"/></Contents>");
            this.divForm.form.divATF00130.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palACT00155","230.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepGroup.form);
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
            this.divForm.form.divATF00130.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw02","440.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepGroup.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divATF00130.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit03","40.00","20","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepGroup.form);
            obj.set_taborder("14");
            obj.set_text("완료처리");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("none");
            this.divForm.form.divATF00130.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00157INDV","20.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepGroup.form);
            obj.set_taborder("15");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("none");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00130.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls03","75.00","20","7","30",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepGroup.form);
            obj.set_taborder("16");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00130.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00157WRKGRP","87.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepGroup.form);
            obj.set_taborder("17");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("none");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00130.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palCnt3","40.00","74","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepGroup.form);
            obj.set_taborder("18");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnACT00157INDV\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls03\"/><PanelItem id=\"PanelItem03\" componentid=\"btnACT00157WRKGRP\"/></Contents>");
            this.divForm.form.divATF00130.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palACT00157","450.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepGroup.form);
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
            this.divForm.form.divATF00130.form.palStepGroup.addChild(obj.name, obj);

            obj = new Div("palStepConGroup","20","199","100%","510",null,null,null,null,null,null,this.divForm.form.divATF00130.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Step");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.form.divATF00130.addChild(obj.name, obj);

            obj = new Div("divNvWrap","10","20","100%","60",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepConGroup.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divATF00130.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Static("staNvLabel01","83","130","70","60",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("4");
            obj.set_text("인계인수(입주)");
            obj.set_cssclass("sta_WF_NvLabel");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw01","198.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel02","223.00","130","65","60",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("1");
            obj.set_text("신청및접수");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw02","338.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel03","363.00","130","100","60",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("3");
            obj.set_text("나");
            obj.set_fittocontents("none");
            this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","0","80%","60",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staNvLabel01\"/><PanelItem id=\"PanelItem01\" componentid=\"staNvArw01\"/><PanelItem id=\"PanelItem02\" componentid=\"staNvLabel02\"/><PanelItem id=\"PanelItem03\" componentid=\"staNvArw02\"/><PanelItem id=\"PanelItem04\" componentid=\"staNvLabel03\"/></Contents>");
            this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Button("btnListClose","1346","0","34","34",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_MDI_CloseAll");
            this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","1041","23","15%","60",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("7");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnListClose\"/></Contents>");
            this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Div("divGrd","10","109","100%","350",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepConGroup.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divATF00130.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Grid("grdList","0","54","100.00%",null,null,"6",null,null,null,null,this.divForm.form.divATF00130.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsATF00130SrvcPrcsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"210\"/><Column size=\"150\"/><Column size=\"153\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"서비스구분\"/><Cell col=\"3\" text=\"지역구분\"/><Cell col=\"4\" text=\"위치정보(룸번호)\"/><Cell col=\"5\" text=\"총괄책임자\"/><Cell col=\"6\" text=\"신청자회사\"/><Cell col=\"7\" text=\"신청자\"/><Cell col=\"8\" text=\"신청일시\"/><Cell col=\"9\" text=\"처리자\"/><Cell col=\"10\" text=\"연락처\"/><Cell col=\"11\" text=\"처리작업그룹\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:aplyNo\" displaytype=\"text\" textAlign=\"center\" cssclass=\"CellLink\" cursor=\"pointer\"/><Cell col=\"1\" text=\"bind:taskNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:docNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:pstnSeNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:rnb\"/><Cell col=\"5\" text=\"bind:rbprsnFcltMngRbprsnNm\"/><Cell col=\"6\" text=\"bind:aplcntInstNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:aplcntNm\" displaytype=\"text\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:aplyDt\" displaytype=\"mask\" textAlign=\"center\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\"/><Cell col=\"9\" text=\"bind:prcrNm\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:prcrTelno\" textAlign=\"center\"/><Cell col=\"11\" cssclass=\"CellEnd\" text=\"bind:prcrJobGroupNm\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.divATF00130.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divATF00130.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#1e4ebe\'>1</fc>건");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divForm.form.divATF00130.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divATF00052","1665","29","100%","720",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_Step");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("btnStepGroup","20","0","100%","60",null,null,null,null,null,null,this.divForm.form.divATF00052.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_StepGroup");
            obj.set_spacing("0px 0px 20px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnStepService\"/><PanelItem id=\"PanelItem04\" componentid=\"btnStepNew\"/><PanelItem id=\"PanelItem01\" componentid=\"staStepEx\"/></Contents>");
            this.divForm.form.divATF00052.addChild(obj.name, obj);

            obj = new Button("btnStepService","774.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divATF00052.form);
            obj.set_taborder("1");
            obj.set_text("입주자서비스");
            obj.set_cssclass("btn_WF_StepTit");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00052.addChild(obj.name, obj);

            obj = new Div("palStepGroup","10.00","110","100%","110",null,null,null,null,null,null,this.divForm.form.divATF00052.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.divForm.form.divATF00052.addChild(obj.name, obj);

            obj = new Static("staStepTit01","20.00","0","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
            obj.set_taborder("0");
            obj.set_text("신청 및 접수");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00116INDV","0.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("none");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls01","55.00","0","7","30",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
            obj.set_taborder("2");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00116WRKGRP","67.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("none");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon01","20.00","54","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
            obj.set_taborder("4");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnACT00116INDV\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls01\"/><PanelItem id=\"PanelItem03\" componentid=\"btnACT00116WRKGRP\"/></Contents>");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palACT00116","0.00","-3","160","90",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
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
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw01","220.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit02","30.00","10","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
            obj.set_taborder("7");
            obj.set_text("서류제출심사");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00117INDV","10.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
            obj.set_taborder("8");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("none");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls02","65.00","10","7","30",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
            obj.set_taborder("9");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00117WRKGRP","77.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
            obj.set_taborder("10");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("none");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon02","30.00","64","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnACT00117INDV\"/><PanelItem id=\"PanelItem02\" componentid=\"StepSls02\"/><PanelItem id=\"PanelItem01\" componentid=\"btnACT00117WRKGRP\"/></Contents>");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palACT00117","230.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
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
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw02","440.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit03","40.00","20","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
            obj.set_taborder("14");
            obj.set_text("원상회복확인");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00119INDV","20.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
            obj.set_taborder("15");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls03","75.00","20","7","30",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
            obj.set_taborder("16");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT00119WRKGRP","87.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
            obj.set_taborder("17");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon03","40.00","74","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
            obj.set_taborder("18");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnACT00119INDV\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls03\"/><PanelItem id=\"PanelItem03\" componentid=\"btnACT00119WRKGRP\"/></Contents>");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palACT00119","450.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
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
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw03","440.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palACT10174","450.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit04\"/><PanelItem id=\"PanelItem01\" componentid=\"palStepBoxCon04\"/></Contents>");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT10174WRKGRP","87.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
            obj.set_taborder("26");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls04","75.00","20","7","30",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
            obj.set_taborder("25");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnACT10174INDV00","20.00","20","50","30",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
            obj.set_taborder("24");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon04","-1","-903","100%","33",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
            obj.set_taborder("23");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnACT10174INDV00\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls04\"/><PanelItem id=\"PanelItem02\" componentid=\"btnACT10174WRKGRP\"/></Contents>");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit04","-1","-957","100%","49",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepGroup.form);
            obj.set_taborder("22");
            obj.set_text("조건부완료");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00052.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnStepNew","804.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divATF00052.form);
            obj.set_taborder("2");
            obj.set_text("원상회복(퇴거)");
            obj.set_cssclass("btn_WF_StepSub");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00052.addChild(obj.name, obj);

            obj = new Static("staStepEx","571","128","78","40",null,null,null,null,null,null,this.divForm.form.divATF00052.form);
            obj.set_taborder("3");
            obj.set_text("나 / 작업 그룹");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00052.addChild(obj.name, obj);

            obj = new Div("palStepConGroup","20","199","100%","510",null,null,null,null,null,null,this.divForm.form.divATF00052.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Step");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.form.divATF00052.addChild(obj.name, obj);

            obj = new Div("divNvWrap","10","20","100%","60",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepConGroup.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divATF00052.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Static("staNvLabel01","20","0","98","60",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("4");
            obj.set_text("인계인수(퇴거)");
            obj.set_cssclass("sta_WF_NvLabel");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw01","198.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel02","223.00","130","65","60",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("1");
            obj.set_text("신청및접수");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw02","338.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel03","363.00","130","52","60",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("3");
            obj.set_text("작업그룹");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","0","80%","60",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staNvLabel01\"/><PanelItem id=\"PanelItem01\" componentid=\"staNvArw01\"/><PanelItem id=\"PanelItem02\" componentid=\"staNvLabel02\"/><PanelItem id=\"PanelItem03\" componentid=\"staNvArw02\"/><PanelItem id=\"PanelItem04\" componentid=\"staNvLabel03\"/></Contents>");
            this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Button("btnListClose","223","13","34","34",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_MDI_CloseAll");
            this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","1036","33","15%","60",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("7");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnListClose\"/></Contents>");
            this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Div("divGrd","10","109","100%","350",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepConGroup.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divATF00052.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Grid("grdList","0","54","100.00%",null,null,"6",null,null,null,null,this.divForm.form.divATF00052.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsATF00052SrvcPrcsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"210\"/><Column size=\"150\"/><Column size=\"350\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"서비스구분\"/><Cell col=\"3\" text=\"지역구분\"/><Cell col=\"4\" text=\"위치정보(룸번호)\"/><Cell col=\"5\" text=\"업종\"/><Cell col=\"6\" text=\"확인요청일\"/><Cell col=\"7\" text=\"착공예정일\"/><Cell col=\"8\" text=\"준공예정일\"/><Cell col=\"9\" text=\"신청자회사\"/><Cell col=\"10\" text=\"신청자\"/><Cell col=\"11\" text=\"신청일시\"/><Cell col=\"12\" text=\"처리자\"/><Cell col=\"13\" text=\"연락처\"/><Cell col=\"14\" text=\"처리작업그룹\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:aplyNo\" displaytype=\"text\" textAlign=\"center\" cssclass=\"CellLink\" cursor=\"pointer\"/><Cell col=\"1\" text=\"bind:jobNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:docNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:pstnSeNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:rnb\"/><Cell col=\"5\" text=\"bind:tpbizNm\"/><Cell col=\"6\" text=\"bind:rtosIdntyDmndYmd\"/><Cell col=\"7\" text=\"bind:bgncstPrnmntYmd\"/><Cell col=\"8\" text=\"bind:cmcnPrnmntYmd\"/><Cell col=\"9\" text=\"bind:aplcntInstNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:aplcntNm\" displaytype=\"text\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:aplyDt\" displaytype=\"mask\" textAlign=\"center\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\"/><Cell col=\"12\" text=\"bind:prcrNm\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:prcrOnlnNo\" textAlign=\"center\"/><Cell col=\"14\" cssclass=\"CellEnd\" text=\"bind:prcrJobGroupNm\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.divATF00052.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divATF00052.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#1e4ebe\'>1</fc>건");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divForm.form.divATF00052.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divATF00084","1665","29","100%","720",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("Div01");
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnStepService\"/><PanelItem id=\"PanelItem01\" componentid=\"staStepEx\"/></Contents>");
            this.divForm.form.divATF00084.addChild(obj.name, obj);

            obj = new Div("palStepGroup","10.00","110","100%","110",null,null,null,null,null,null,this.divForm.form.divATF00084.form);
            obj.set_taborder("4");
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

            obj = new Static("staStepEx","571","128","120","40",null,null,null,null,null,null,this.divForm.form.divATF00084.form);
            obj.set_taborder("2");
            obj.set_text("나 / 작업 그룹");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00084.addChild(obj.name, obj);

            obj = new Div("palStepConGroup","20","199","100%","510",null,null,null,null,null,null,this.divForm.form.divATF00084.form);
            obj.set_taborder("3");
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
            obj.set_text("전체");
            obj.set_fittocontents("width");
            this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw02","338.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel03","170","0","98","60",null,null,null,null,null,null,this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("3");
            obj.set_text("나");
            obj.set_fittocontents("none");
            this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","0","80%","60",null,null,null,null,null,null,this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staNvLabel01\"/><PanelItem id=\"PanelItem01\" componentid=\"staNvArw01\"/><PanelItem id=\"PanelItem02\" componentid=\"staNvLabel02\"/><PanelItem id=\"PanelItem03\" componentid=\"staNvArw02\"/><PanelItem id=\"PanelItem04\" componentid=\"staNvLabel03\"/></Contents>");
            this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Button("btnListClose","223","13","34","34",null,null,null,null,null,null,this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_MDI_CloseAll");
            this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","1078","31","18.88%","60",null,null,null,null,null,null,this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("7");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnListClose\"/></Contents>");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"상위신청번호\"/><Cell col=\"2\" text=\"단계\"/><Cell col=\"3\" text=\"협조업무\"/><Cell col=\"4\" text=\"업무구분\"/><Cell col=\"5\" text=\"위치정보(룸번호)\"/><Cell col=\"6\" text=\"건물구분\"/><Cell col=\"7\" text=\"작업장위치\"/><Cell col=\"8\" text=\"작업시작일\"/><Cell col=\"9\" text=\"요청자회사\"/><Cell col=\"10\" text=\"요청자\"/><Cell col=\"11\" text=\"요청일시\"/><Cell col=\"12\" text=\"처리자\"/><Cell col=\"13\" text=\"연락처\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:aplyNo\" displaytype=\"text\" cssclass=\"CellLink\" cursor=\"pointer\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:souId\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"text\" textAlign=\"center\" text=\"bind:taskNm\"/><Cell col=\"3\" text=\"bind:cstrnKndNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:dtlProcsEtcCn\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:rnb\" displaytype=\"text\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:bldgSeNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:wrsPstnCn\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:jobBgngYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplayinvalidtype=\"default\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" text=\"bind:aplcntInstNm\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:aplcntNm\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:dmndDt\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\"/><Cell col=\"12\" text=\"bind:prcrNm\" textAlign=\"center\"/><Cell col=\"13\" cssclass=\"CellEnd\" text=\"bind:prcrOnlnNo\" textAlign=\"center\"/></Band></Format></Formats>");
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

                p.ck02.set_taborder("4");
                p.ck02.set_text("협조처리");
                p.ck02.set_fittocontents("width");
                p.ck02.set_value("true");
                p.ck02.move("149.00","0","102","40",null,null);

                p.ck01.set_taborder("3");
                p.ck01.set_text("입주자서비스");
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
            obj = new Layout("Layout0","",0,0,this.divForm.form.divMnCk.form,
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
            //-- Default Layout : this.divForm.form.divATF00130.form.palStepGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00130.form.palStepGroup.form,
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

                p.btnACT00154INDV.set_taborder("1");
                p.btnACT00154INDV.set_text("0");
                p.btnACT00154INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00154INDV.set_fittocontents("none");
                p.btnACT00154INDV.set_textAlign("right");
                p.btnACT00154INDV.set_letterSpacing("0px");
                p.btnACT00154INDV.move("0","0","50","30",null,null);

                p.StepSls01.set_taborder("2");
                p.StepSls01.set_text("/");
                p.StepSls01.set_textAlign("center");
                p.StepSls01.move("55.00","0","7","30",null,null);

                p.btnACT00154WRKGRP.set_taborder("3");
                p.btnACT00154WRKGRP.set_text("0");
                p.btnACT00154WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00154WRKGRP.set_fittocontents("none");
                p.btnACT00154WRKGRP.set_textAlign("left");
                p.btnACT00154WRKGRP.set_letterSpacing("0px");
                p.btnACT00154WRKGRP.move("67.00","0","50","30",null,null);

                p.palCnt.set_taborder("4");
                p.palCnt.set_fittocontents("width");
                p.palCnt.set_flexcrossaxiswrapalign("center");
                p.palCnt.set_flexmainaxisalign("center");
                p.palCnt.set_horizontalgap("5");
                p.palCnt.set_enableevent("false");
                p.palCnt.move("20.00","54","100%","33",null,null);

                p.palACT00154.set_taborder("5");
                p.palACT00154.set_cssclass("pal_WF_StepBox");
                p.palACT00154.set_type("vertical");
                p.palACT00154.set_flexmainaxisalign("center");
                p.palACT00154.set_flexcrossaxiswrapalign("center");
                p.palACT00154.set_flexcrossaxisalign("center");
                p.palACT00154.set_verticalgap("5");
                p.palACT00154.set_fittocontents("height");
                p.palACT00154.set_spacing("0px 20px 0px 20px");
                p.palACT00154.move("0","-3","160","90",null,null);

                p.BoxArw01.set_taborder("6");
                p.BoxArw01.set_text("");
                p.BoxArw01.set_cssclass("sta_WF_BoxArw");
                p.BoxArw01.set_visible("true");
                p.BoxArw01.move("220.00","-3","40","40",null,null);

                p.staStepTit02.set_taborder("7");
                p.staStepTit02.set_text("인계인수수행");
                p.staStepTit02.set_cssclass("sta_WF_Boxtit");
                p.staStepTit02.set_fittocontents("none");
                p.staStepTit02.move("30.00","10","100%","49",null,null);

                p.btnACT00155INDV.set_taborder("8");
                p.btnACT00155INDV.set_text("0");
                p.btnACT00155INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00155INDV.set_fittocontents("none");
                p.btnACT00155INDV.set_textAlign("right");
                p.btnACT00155INDV.set_letterSpacing("0px");
                p.btnACT00155INDV.move("10.00","10","50","30",null,null);

                p.StepSls02.set_taborder("9");
                p.StepSls02.set_text("/");
                p.StepSls02.set_textAlign("center");
                p.StepSls02.move("65.00","10","7","30",null,null);

                p.btnACT00155WRKGRP.set_taborder("10");
                p.btnACT00155WRKGRP.set_text("0");
                p.btnACT00155WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00155WRKGRP.set_fittocontents("none");
                p.btnACT00155WRKGRP.set_textAlign("left");
                p.btnACT00155WRKGRP.set_letterSpacing("0px");
                p.btnACT00155WRKGRP.move("77.00","10","50","30",null,null);

                p.palCnt2.set_taborder("11");
                p.palCnt2.set_fittocontents("width");
                p.palCnt2.set_flexcrossaxiswrapalign("center");
                p.palCnt2.set_flexmainaxisalign("center");
                p.palCnt2.set_horizontalgap("5");
                p.palCnt2.move("30.00","64","100%","33",null,null);

                p.palACT00155.set_taborder("12");
                p.palACT00155.set_cssclass("pal_WF_StepBox");
                p.palACT00155.set_spacing("0px 20px 0px 20px");
                p.palACT00155.set_type("vertical");
                p.palACT00155.set_flexmainaxisalign("center");
                p.palACT00155.set_flexcrossaxiswrapalign("center");
                p.palACT00155.set_flexcrossaxisalign("center");
                p.palACT00155.set_verticalgap("5");
                p.palACT00155.set_fittocontents("height");
                p.palACT00155.set_visible("true");
                p.palACT00155.move("230.00","7","160","90",null,null);

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

                p.btnACT00157INDV.set_taborder("15");
                p.btnACT00157INDV.set_text("0");
                p.btnACT00157INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00157INDV.set_fittocontents("none");
                p.btnACT00157INDV.set_textAlign("right");
                p.btnACT00157INDV.set_letterSpacing("0px");
                p.btnACT00157INDV.move("20.00","20","50","30",null,null);

                p.StepSls03.set_taborder("16");
                p.StepSls03.set_text("/");
                p.StepSls03.set_textAlign("center");
                p.StepSls03.move("75.00","20","7","30",null,null);

                p.btnACT00157WRKGRP.set_taborder("17");
                p.btnACT00157WRKGRP.set_text("0");
                p.btnACT00157WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00157WRKGRP.set_fittocontents("none");
                p.btnACT00157WRKGRP.set_textAlign("left");
                p.btnACT00157WRKGRP.set_letterSpacing("0px");
                p.btnACT00157WRKGRP.move("87.00","20","50","30",null,null);

                p.palCnt3.set_taborder("18");
                p.palCnt3.set_fittocontents("width");
                p.palCnt3.set_flexcrossaxiswrapalign("center");
                p.palCnt3.set_flexmainaxisalign("center");
                p.palCnt3.set_horizontalgap("5");
                p.palCnt3.move("40.00","74","100%","33",null,null);

                p.palACT00157.set_taborder("19");
                p.palACT00157.set_cssclass("pal_WF_StepBox");
                p.palACT00157.set_spacing("0px 20px 0px 20px");
                p.palACT00157.set_type("vertical");
                p.palACT00157.set_flexmainaxisalign("center");
                p.palACT00157.set_flexcrossaxiswrapalign("center");
                p.palACT00157.set_flexcrossaxisalign("center");
                p.palACT00157.set_verticalgap("5");
                p.palACT00157.set_fittocontents("height");
                p.palACT00157.set_visible("true");
                p.palACT00157.move("450.00","7","160","90",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divATF00130.form.palStepGroup.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00130.form.palStepGroup.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divATF00130.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divATF00130.form.palStepGroup.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staNvLabel01.set_taborder("4");
                p.staNvLabel01.set_text("인계인수(입주)");
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
                p.staNvLabel02.set_text("신청및접수");
                p.staNvLabel02.set_fittocontents("width");
                p.staNvLabel02.move("223.00","130","65","60",null,null);

                p.staNvArw02.set_taborder("2");
                p.staNvArw02.set_text("");
                p.staNvArw02.set_cssclass("sta_WF_NvArw");
                p.staNvArw02.move("338.00","152","15","15",null,null);

                p.staNvLabel03.set_taborder("3");
                p.staNvLabel03.set_text("나");
                p.staNvLabel03.set_fittocontents("none");
                p.staNvLabel03.move("363.00","130","100","60",null,null);

                p.Panel00.set_taborder("5");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.move("20","0","80%","60",null,null);

                p.btnListClose.set_taborder("6");
                p.btnListClose.set_cssclass("btn_MDI_CloseAll");
                p.btnListClose.move("1346","0","34","34",null,null);

                p.Panel00_00.set_taborder("7");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_flexmainaxisalign("end");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.move("1041","23","15%","60",null,null);
            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.form,
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
            this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00130.form.palStepConGroup.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00130.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsATF00130SrvcPrcsList");
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
            this.divForm.form.divATF00130.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00130.form.palStepConGroup.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divATF00130.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divATF00130.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00130.form.palStepConGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00130.form.palStepConGroup.form,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_spacing("16px 10px 16px 10px ");
            this.divForm.form.divATF00130.form.palStepConGroup.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divATF00130.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00130.form,
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
                p.btnStepService.set_text("입주자서비스");
                p.btnStepService.set_cssclass("btn_WF_StepTit");
                p.btnStepService.set_visible("true");
                p.btnStepService.set_fittocontents("width");
                p.btnStepService.move("774.00","10","195","40",null,null);

                p.btnStepNew.set_taborder("2");
                p.btnStepNew.set_text("인계인수(입주)");
                p.btnStepNew.set_cssclass("btn_WF_StepSub");
                p.btnStepNew.set_visible("true");
                p.btnStepNew.set_fittocontents("width");
                p.btnStepNew.move("804.00","10","195","40",null,null);

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
            this.divForm.form.divATF00130.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00130.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divATF00130.form,
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
            this.divForm.form.divATF00130.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00052.form.palStepGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00052.form.palStepGroup.form,
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

                p.btnACT00116INDV.set_taborder("1");
                p.btnACT00116INDV.set_text("0");
                p.btnACT00116INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00116INDV.set_fittocontents("none");
                p.btnACT00116INDV.set_textAlign("right");
                p.btnACT00116INDV.set_letterSpacing("0px");
                p.btnACT00116INDV.move("0.00","0","50","30",null,null);

                p.StepSls01.set_taborder("2");
                p.StepSls01.set_text("/");
                p.StepSls01.set_textAlign("center");
                p.StepSls01.move("55.00","0","7","30",null,null);

                p.btnACT00116WRKGRP.set_taborder("3");
                p.btnACT00116WRKGRP.set_text("0");
                p.btnACT00116WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00116WRKGRP.set_fittocontents("none");
                p.btnACT00116WRKGRP.set_textAlign("left");
                p.btnACT00116WRKGRP.set_letterSpacing("0px");
                p.btnACT00116WRKGRP.move("67.00","0","50","30",null,null);

                p.palStepBoxCon01.set_taborder("4");
                p.palStepBoxCon01.set_fittocontents("width");
                p.palStepBoxCon01.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon01.set_flexmainaxisalign("center");
                p.palStepBoxCon01.set_horizontalgap("5");
                p.palStepBoxCon01.move("20.00","54","100%","33",null,null);

                p.palACT00116.set_taborder("5");
                p.palACT00116.set_cssclass("pal_WF_StepBox");
                p.palACT00116.set_type("vertical");
                p.palACT00116.set_flexmainaxisalign("center");
                p.palACT00116.set_flexcrossaxiswrapalign("center");
                p.palACT00116.set_flexcrossaxisalign("center");
                p.palACT00116.set_verticalgap("5");
                p.palACT00116.set_fittocontents("height");
                p.palACT00116.set_spacing("0px 20px 0px 20px");
                p.palACT00116.move("0.00","-3","160","90",null,null);

                p.BoxArw01.set_taborder("6");
                p.BoxArw01.set_text("");
                p.BoxArw01.set_cssclass("sta_WF_BoxArw");
                p.BoxArw01.set_visible("true");
                p.BoxArw01.move("220.00","-3","40","40",null,null);

                p.staStepTit02.set_taborder("7");
                p.staStepTit02.set_text("서류제출심사");
                p.staStepTit02.set_cssclass("sta_WF_Boxtit");
                p.staStepTit02.set_fittocontents("width");
                p.staStepTit02.move("30.00","10","100%","49",null,null);

                p.btnACT00117INDV.set_taborder("8");
                p.btnACT00117INDV.set_text("0");
                p.btnACT00117INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00117INDV.set_fittocontents("none");
                p.btnACT00117INDV.set_textAlign("right");
                p.btnACT00117INDV.set_letterSpacing("0px");
                p.btnACT00117INDV.move("10.00","10","50","30",null,null);

                p.StepSls02.set_taborder("9");
                p.StepSls02.set_text("/");
                p.StepSls02.set_textAlign("center");
                p.StepSls02.move("65.00","10","7","30",null,null);

                p.btnACT00117WRKGRP.set_taborder("10");
                p.btnACT00117WRKGRP.set_text("0");
                p.btnACT00117WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00117WRKGRP.set_fittocontents("none");
                p.btnACT00117WRKGRP.set_textAlign("left");
                p.btnACT00117WRKGRP.set_letterSpacing("0px");
                p.btnACT00117WRKGRP.move("77.00","10","50","30",null,null);

                p.palStepBoxCon02.set_taborder("11");
                p.palStepBoxCon02.set_fittocontents("width");
                p.palStepBoxCon02.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon02.set_flexmainaxisalign("center");
                p.palStepBoxCon02.set_horizontalgap("5");
                p.palStepBoxCon02.move("30.00","64","100%","33",null,null);

                p.palACT00117.set_taborder("12");
                p.palACT00117.set_cssclass("pal_WF_StepBox");
                p.palACT00117.set_spacing("0px 20px 0px 20px");
                p.palACT00117.set_type("vertical");
                p.palACT00117.set_flexmainaxisalign("center");
                p.palACT00117.set_flexcrossaxiswrapalign("center");
                p.palACT00117.set_flexcrossaxisalign("center");
                p.palACT00117.set_verticalgap("5");
                p.palACT00117.set_fittocontents("height");
                p.palACT00117.set_visible("true");
                p.palACT00117.move("230.00","7","160","90",null,null);

                p.BoxArw02.set_taborder("13");
                p.BoxArw02.set_text("");
                p.BoxArw02.set_cssclass("sta_WF_BoxArw");
                p.BoxArw02.set_visible("true");
                p.BoxArw02.move("440.00","-3","40","40",null,null);

                p.staStepTit03.set_taborder("14");
                p.staStepTit03.set_text("원상회복확인");
                p.staStepTit03.set_cssclass("sta_WF_Boxtit");
                p.staStepTit03.set_fittocontents("width");
                p.staStepTit03.move("40.00","20","100%","49",null,null);

                p.btnACT00119INDV.set_taborder("15");
                p.btnACT00119INDV.set_text("0");
                p.btnACT00119INDV.set_cssclass("btn_WF_CountP");
                p.btnACT00119INDV.set_fittocontents("width");
                p.btnACT00119INDV.set_textAlign("right");
                p.btnACT00119INDV.set_letterSpacing("0px");
                p.btnACT00119INDV.move("20.00","20","50","30",null,null);

                p.StepSls03.set_taborder("16");
                p.StepSls03.set_text("/");
                p.StepSls03.set_textAlign("center");
                p.StepSls03.move("75.00","20","7","30",null,null);

                p.btnACT00119WRKGRP.set_taborder("17");
                p.btnACT00119WRKGRP.set_text("0");
                p.btnACT00119WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT00119WRKGRP.set_fittocontents("width");
                p.btnACT00119WRKGRP.set_textAlign("left");
                p.btnACT00119WRKGRP.set_letterSpacing("0px");
                p.btnACT00119WRKGRP.move("87.00","20","50","30",null,null);

                p.palStepBoxCon03.set_taborder("18");
                p.palStepBoxCon03.set_fittocontents("width");
                p.palStepBoxCon03.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon03.set_flexmainaxisalign("center");
                p.palStepBoxCon03.set_horizontalgap("5");
                p.palStepBoxCon03.move("40.00","74","100%","33",null,null);

                p.palACT00119.set_taborder("19");
                p.palACT00119.set_cssclass("pal_WF_StepBox");
                p.palACT00119.set_spacing("0px 20px 0px 20px");
                p.palACT00119.set_type("vertical");
                p.palACT00119.set_flexmainaxisalign("center");
                p.palACT00119.set_flexcrossaxiswrapalign("center");
                p.palACT00119.set_flexcrossaxisalign("center");
                p.palACT00119.set_verticalgap("5");
                p.palACT00119.set_fittocontents("height");
                p.palACT00119.set_visible("true");
                p.palACT00119.move("450.00","7","160","90",null,null);

                p.BoxArw03.set_taborder("20");
                p.BoxArw03.set_text("");
                p.BoxArw03.set_cssclass("sta_WF_BoxArw");
                p.BoxArw03.set_visible("true");
                p.BoxArw03.move("440.00","-3","40","40",null,null);

                p.palACT10174.set_taborder("21");
                p.palACT10174.set_cssclass("pal_WF_StepBox");
                p.palACT10174.set_spacing("0px 20px 0px 20px");
                p.palACT10174.set_type("vertical");
                p.palACT10174.set_flexmainaxisalign("center");
                p.palACT10174.set_flexcrossaxiswrapalign("center");
                p.palACT10174.set_flexcrossaxisalign("center");
                p.palACT10174.set_verticalgap("5");
                p.palACT10174.set_fittocontents("height");
                p.palACT10174.set_visible("true");
                p.palACT10174.move("450.00","7","160","90",null,null);

                p.btnACT10174WRKGRP.set_taborder("26");
                p.btnACT10174WRKGRP.set_text("0");
                p.btnACT10174WRKGRP.set_cssclass("btn_WF_CountD");
                p.btnACT10174WRKGRP.set_fittocontents("width");
                p.btnACT10174WRKGRP.set_textAlign("left");
                p.btnACT10174WRKGRP.set_letterSpacing("0px");
                p.btnACT10174WRKGRP.move("87.00","20","50","30",null,null);

                p.StepSls04.set_taborder("25");
                p.StepSls04.set_text("/");
                p.StepSls04.set_textAlign("center");
                p.StepSls04.move("75.00","20","7","30",null,null);

                p.btnACT10174INDV00.set_taborder("24");
                p.btnACT10174INDV00.set_text("0");
                p.btnACT10174INDV00.set_cssclass("btn_WF_CountP");
                p.btnACT10174INDV00.set_fittocontents("width");
                p.btnACT10174INDV00.set_textAlign("right");
                p.btnACT10174INDV00.set_letterSpacing("0px");
                p.btnACT10174INDV00.move("20.00","20","50","30",null,null);

                p.palStepBoxCon04.set_taborder("23");
                p.palStepBoxCon04.set_fittocontents("width");
                p.palStepBoxCon04.set_flexcrossaxiswrapalign("center");
                p.palStepBoxCon04.set_flexmainaxisalign("center");
                p.palStepBoxCon04.set_horizontalgap("5");
                p.palStepBoxCon04.move("-1","-903","100%","33",null,null);

                p.staStepTit04.set_taborder("22");
                p.staStepTit04.set_text("조건부완료");
                p.staStepTit04.set_cssclass("sta_WF_Boxtit");
                p.staStepTit04.set_fittocontents("width");
                p.staStepTit04.move("-1","-957","100%","49",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divATF00052.form.palStepGroup.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00052.form.palStepGroup.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divATF00052.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divATF00052.form.palStepGroup.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staNvLabel01.set_taborder("4");
                p.staNvLabel01.set_text("인계인수(퇴거)");
                p.staNvLabel01.set_cssclass("sta_WF_NvLabel");
                p.staNvLabel01.set_flexshrink("0");
                p.staNvLabel01.set_fittocontents("width");
                p.staNvLabel01.set_minwidth("");
                p.staNvLabel01.move("20","0","98","60",null,null);

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

                p.btnListClose.set_taborder("6");
                p.btnListClose.set_cssclass("btn_MDI_CloseAll");
                p.btnListClose.move("223","13","34","34",null,null);

                p.Panel00_00.set_taborder("7");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_flexmainaxisalign("end");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.move("1036","33","15%","60",null,null);
            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.form,
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
            this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00052.form.palStepConGroup.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00052.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_taborder("0");
                p.grdList.set_binddataset("dsATF00052SrvcPrcsList");
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
            this.divForm.form.divATF00052.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00052.form.palStepConGroup.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divATF00052.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divATF00052.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divATF00052.form.palStepConGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00052.form.palStepConGroup.form,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_spacing("16px 10px 16px 10px ");
            this.divForm.form.divATF00052.form.palStepConGroup.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divATF00052.form
            obj = new Layout("default","",0,0,this.divForm.form.divATF00052.form,
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
                p.btnStepService.set_text("입주자서비스");
                p.btnStepService.set_cssclass("btn_WF_StepTit");
                p.btnStepService.set_visible("true");
                p.btnStepService.set_fittocontents("width");
                p.btnStepService.move("774.00","10","195","40",null,null);

                p.palStepGroup.set_taborder("5");
                p.palStepGroup.set_text("Div00");
                p.palStepGroup.move("10.00","110","100%","110",null,null);

                p.btnStepNew.set_taborder("2");
                p.btnStepNew.set_text("원상회복(퇴거)");
                p.btnStepNew.set_cssclass("btn_WF_StepSub");
                p.btnStepNew.set_visible("true");
                p.btnStepNew.set_fittocontents("width");
                p.btnStepNew.move("804.00","10","195","40",null,null);

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
            this.divForm.form.divATF00052.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divATF00052.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divATF00052.form,
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
            this.divForm.form.divATF00052.form.addLayout(obj.name, obj);
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
            obj = new Layout("Layout0","",0,0,this.divForm.form.divATF00084.form.palStepGroup.form,
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
                p.staNvLabel02.set_text("전체");
                p.staNvLabel02.set_fittocontents("width");
                p.staNvLabel02.move("223.00","130","26","60",null,null);

                p.staNvArw02.set_taborder("2");
                p.staNvArw02.set_text("");
                p.staNvArw02.set_cssclass("sta_WF_NvArw");
                p.staNvArw02.move("338.00","152","15","15",null,null);

                p.staNvLabel03.set_taborder("3");
                p.staNvLabel03.set_text("나");
                p.staNvLabel03.set_fittocontents("none");
                p.staNvLabel03.move("170","0","98","60",null,null);

                p.Panel00.set_taborder("5");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.move("20","0","80%","60",null,null);

                p.btnListClose.set_taborder("6");
                p.btnListClose.set_cssclass("btn_MDI_CloseAll");
                p.btnListClose.move("223","13","34","34",null,null);

                p.Panel00_00.set_taborder("7");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_flexcrossaxiswrapalign("start");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_flexmainaxisalign("end");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.move("1078","31","18.88%","60",null,null);
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
            obj = new Layout("Layout0","",0,0,this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form,
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
            obj = new Layout("Layout0","",0,0,this.divForm.form.divATF00084.form.palStepConGroup.form.divGrd.form,
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

                p.palStepGroup.set_taborder("4");
                p.palStepGroup.set_text("Div00");
                p.palStepGroup.move("10.00","110","100%","110",null,null);

                p.btnStepService.set_taborder("1");
                p.btnStepService.set_text("협조처리");
                p.btnStepService.set_cssclass("btn_WF_StepTit");
                p.btnStepService.set_visible("true");
                p.btnStepService.set_fittocontents("width");
                p.btnStepService.move("774.00","10","195","40",null,null);

                p.staStepEx.set_taborder("2");
                p.staStepEx.set_text("나 / 작업 그룹");
                p.staStepEx.set_fittocontents("width");
                p.staStepEx.move("571","128","120","40",null,null);

                p.palStepConGroup.set_taborder("3");
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
            obj = new Layout("Layout0","",0,0,this.divForm.form.divATF00084.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnStepService.set_visible("false");
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

                p.divATF00130.set_taborder("1");
                p.divATF00130.set_text("Div01");
                p.divATF00130.set_fittocontents("height");
                p.divATF00130.set_formscrollbartype("none none");
                p.divATF00130.set_formscrolltype("none");
                p.divATF00130.set_cssclass("div_WF_Step");
                p.divATF00130.move("1665","29","100%","720",null,null);

                p.divATF00052.set_taborder("2");
                p.divATF00052.set_text("Div01");
                p.divATF00052.set_fittocontents("height");
                p.divATF00052.set_formscrollbartype("none none");
                p.divATF00052.set_formscrolltype("none");
                p.divATF00052.set_cssclass("div_WF_Step");
                p.divATF00052.move("1665","29","100%","720",null,null);

                p.divATF00084.set_taborder("3");
                p.divATF00084.set_text("Div01");
                p.divATF00084.set_fittocontents("height");
                p.divATF00084.set_formscrollbartype("none none");
                p.divATF00084.set_formscrolltype("none");
                p.divATF00084.set_cssclass("div_WF_Step");
                p.divATF00084.move("1665","29","100%","720",null,null);
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
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,4000,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("입주/퇴거 서비스처리");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0",null,"3000","60",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
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

        };
        
        // User Script
        this.registerScript("LIF006M00.xfdl", function() {
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


        	var strSvcId    = "mvnEvctSrvcPrcsCntInq";
        	var strSvcUrl   = "mvnEvctSrvcPrcs/mvnEvctSrvcPrcsCntInq.do";
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
        	var strSvcId    = "mvnEvctSrvcPrcsInq";
        	var strSvcUrl   = "mvnEvctSrvcPrcs/mvnEvctSrvcPrcsInq.do";
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
        		case "mvnEvctSrvcPrcsCntInq" :
        			trace("cmnctSrvcPrcsCntInq" );
        			// 건수조회
        			for(var i =0; i < this.dsSrvcPrcsCnt.rowcount; i++) {
        				var comp1 = this.dsSrvcPrcsCnt.getColumn(i, "taskPrcsSeCd");
        				var comp2 = this.dsSrvcPrcsCnt.getColumn(i, "taskPrcsStepSeCd") + this.dsSrvcPrcsCnt.getColumn(i, "authrtPrcrSe");
        				var cnt   = this.dsSrvcPrcsCnt.getColumn(i, "cnt");
        				trace(comp1 + "=" + comp2);
        				if ( this.divForm.form["div" + comp1 ] === undefined ) {
        					continue;
        				}
        				if ( this.divForm.form["div" + comp1 ].form.palStepGroup.form["btn" + comp2 ] === undefined ) {
        					continue;
        				}

        				console.log(this.divForm.form["div" + comp1 ].form.palStepGroup.form["btn" + comp2 ]);
        				this.divForm.form["div" + comp1 ].form.palStepGroup.form["btn" + comp2 ].text  = cnt;

        			}

        			break;
        		case "cmnctSrvcPrcsInq" :
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
         * @description : 카운트 클릭 시 해당 그리드 노출.(통신신청)
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

        	grdObj.form.resetScroll();
        	grdObj.form.divNvWrap.form.resetScroll();

        	this.dsJobSearch.setColumn(0,"taskPrcsSeCd",    obj.parent.parent.parent.parent.id.substr(3, 8));
        	this.dsJobSearch.setColumn(0,"taskPrcsStepSeCd",objNm.substr(3, 8));

        	this.fnCmnctSrvcPrcsSearch(obj.parent.parent.parent.parent.id.substr(3, 8));
        	//this.divForm.form.resetScroll();
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
            this.divForm.form.divMnCk.form.ck02.addEventHandler("onchanged",this.chk_onchanged,this);
            this.divForm.form.divMnCk.form.ck01.addEventHandler("onchanged",this.chk_onchanged,this);
            this.divForm.form.divATF00130.form.palStepGroup.form.btnACT00154INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00130.form.palStepGroup.form.btnACT00154WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00130.form.palStepGroup.form.btnACT00155INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00130.form.palStepGroup.form.btnACT00155WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00130.form.palStepGroup.form.btnACT00157INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00130.form.palStepGroup.form.btnACT00157WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.form.staNvLabel01.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divATF00130.form.palStepConGroup.form.divNvWrap.form.btnListClose.addEventHandler("onclick",this.gridClose_onclick,this);
            this.divForm.form.divATF00130.form.palStepConGroup.form.divGrd.form.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.divForm.form.divATF00052.form.palStepGroup.form.btnACT00116INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00052.form.palStepGroup.form.btnACT00116WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00052.form.palStepGroup.form.btnACT00117INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00052.form.palStepGroup.form.btnACT00117WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00052.form.palStepGroup.form.btnACT00119INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00052.form.palStepGroup.form.btnACT00119WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00052.form.palStepGroup.form.btnACT10174WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00052.form.palStepGroup.form.btnACT10174INDV00.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.form.staNvLabel01.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divATF00052.form.palStepConGroup.form.divNvWrap.form.btnListClose.addEventHandler("onclick",this.gridClose_onclick,this);
            this.divForm.form.divATF00052.form.palStepConGroup.form.divGrd.form.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.divForm.form.divATF00084.form.palStepGroup.form.btnACT00171INDV.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00084.form.palStepGroup.form.btnACT00171WRKGRP.addEventHandler("onclick",this.btnPrcsCnt_onclick,this);
            this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form.staNvLabel01.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divATF00084.form.palStepConGroup.form.divNvWrap.form.btnListClose.addEventHandler("onclick",this.gridClose_onclick,this);
            this.divForm.form.divATF00084.form.palStepConGroup.form.divGrd.form.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
        };
        this.loadIncludeScript("LIF006M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
