(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF045M00");
            this.set_titletext("서비스처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsJobSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobList", this);
            obj._setContents("<ColumnInfo><Column id=\"taskSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCntSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"lgnId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCntList1", this);
            obj._setContents("<ColumnInfo><Column id=\"cnt\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCntList2", this);
            obj._setContents("<ColumnInfo><Column id=\"cnt\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"lgnId\" type=\"STRING\" size=\"256\"/><Column id=\"inqSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskPrcsId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"taskPrcsStepSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobCd\" type=\"STRING\" size=\"256\"/><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"jobNm\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrOnlnNo\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"endNm\" type=\"STRING\" size=\"256\"/><Column id=\"docNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyKndNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"custTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"srvcAplyNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,"1200","60",null,null,null,null,null,this);
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
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ck01\"/></Contents>");
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

            obj = new CheckBox("ck01","0","0","129","40",null,null,null,null,null,null,this.divForm.form.divMnCk.form);
            obj.set_taborder("3");
            obj.set_text("부가시설물신청");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.divForm.form.divMnCk.addChild(obj.name, obj);

            obj = new Div("divStep","1665","29","100%","100%",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_Step");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("btnStepGroup","20","0","100%","60",null,null,null,null,null,null,this.divForm.form.divStep.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("start");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_StepGroup");
            obj.set_spacing("0px 0px 20px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnStepService\"/><PanelItem id=\"PanelItem04\" componentid=\"btnStepNew\"/><PanelItem id=\"PanelItem01\" componentid=\"staStepEx\"/></Contents>");
            this.divForm.form.divStep.addChild(obj.name, obj);

            obj = new Button("btnStepService","774.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divStep.form);
            obj.set_taborder("1");
            obj.set_text("부가시설물");
            obj.set_cssclass("btn_WF_StepTit");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divStep.addChild(obj.name, obj);

            obj = new Button("btnStepNew","804.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divStep.form);
            obj.set_taborder("2");
            obj.set_text("부가시설물신청");
            obj.set_cssclass("btn_WF_StepSub");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divStep.addChild(obj.name, obj);

            obj = new Static("staStepEx","571","128","120","40",null,null,null,null,null,null,this.divForm.form.divStep.form);
            obj.set_taborder("3");
            obj.set_text("나 / 작업 그룹");
            obj.set_fittocontents("width");
            this.divForm.form.divStep.addChild(obj.name, obj);

            obj = new Div("palStepGroup","216.00","100","100%","110",null,null,null,null,null,null,this.divForm.form.divStep.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.divForm.form.divStep.addChild(obj.name, obj);

            obj = new Static("staStepTit01","20.00","0","100%","49",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("0");
            obj.set_text("접수");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("width");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountP01","0.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("1");
            obj.set_text("100");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls01","55.00","0","7","30",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("2");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountD01","67.00","0","50","30",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("3");
            obj.set_text("100");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon01","20.00","54","100%","33",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("4");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCountP01\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls01\"/><PanelItem id=\"PanelItem03\" componentid=\"btnCountD01\"/></Contents>");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox01","0.00","-3","160","90",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
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
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw01","220.00","-3","40","40",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit02","30.00","10","100%","49",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("7");
            obj.set_text("검토 및 승인");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("width");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountP02","10.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("8");
            obj.set_text("100");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls02","65.00","10","7","30",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("9");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountD02","77.00","10","50","30",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("10");
            obj.set_text("100");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon02","30.00","64","100%","33",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnCountP02\"/><PanelItem id=\"PanelItem02\" componentid=\"StepSls02\"/><PanelItem id=\"PanelItem01\" componentid=\"btnCountD02\"/></Contents>");
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox02","230.00","7","160","90",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepGroup.form);
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
            this.divForm.form.divStep.form.palStepGroup.addChild(obj.name, obj);

            obj = new Div("palStepConGroup","20","199","100%","660",null,null,null,null,null,null,this.divForm.form.divStep.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Step");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.divForm.form.divStep.addChild(obj.name, obj);

            obj = new Div("divNvWrap","10","20","100%","60",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divStep.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Static("staNvLabel01","83","130","108","60",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("4");
            obj.set_text("부가시설물신청");
            obj.set_cssclass("sta_WF_NvLabel");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw01","198.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel02","223.00","130","26","60",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("1");
            obj.set_text("접수");
            obj.set_fittocontents("width");
            this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw02","338.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel03","363.00","130","52","60",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("3");
            obj.set_text("작업그룹");
            obj.set_fittocontents("width");
            this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Div("divGrd","10","109","100%","560",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divStep.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","54","100.00%",null,null,"10",null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"서비스구분명\"/><Cell col=\"3\" text=\"신청종류명\"/><Cell col=\"4\" text=\"고객유형명\"/><Cell col=\"5\" text=\"지역구분명\"/><Cell col=\"6\" text=\"설치서비스유형명\"/><Cell col=\"7\" text=\"신청자회사명\"/><Cell col=\"8\" text=\"신청자명\"/><Cell col=\"9\" text=\"신청일시\"/><Cell col=\"10\" text=\"처리자명\"/><Cell col=\"11\" text=\"연락처\"/><Cell col=\"12\" cssclass=\"CellEnd\" text=\"처리작업그룹\"/></Band><Band id=\"body\"><Cell text=\"bind:aplyNo\" displaytype=\"text\" textAlign=\"center\" cssclass=\"CellLink\" cursor=\"pointer\"/><Cell col=\"1\" text=\"bind:jobNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:docNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:aplyKndNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:custTypeNm\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:bldgNm\" displaytype=\"text\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:srvcAplyNm\" displaytype=\"text\" textAlign=\"center\" autosizecol=\"default\" controlautosizingtype=\"both\"/><Cell col=\"7\" text=\"bind:rgtrInstNm\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:aplcntNm\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:aplyDt\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"####-##-## ##:##\" maskedittype=\"string\"/><Cell col=\"10\" text=\"bind:prcrNm\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:prcrOnlnNo\" textAlign=\"center\"/><Cell col=\"12\" cssclass=\"CellEnd\" text=\"bind:prcrJobGroupNm\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.divStep.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","200","34",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총 <fc v=\'#1e4ebe\'>1</fc>건");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divForm.form.divStep.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);
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

                p.ck01.set_taborder("3");
                p.ck01.set_text("부가시설물신청");
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
            //-- Default Layout : this.divForm.form.divStep.form.palStepGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staStepTit01.set_taborder("0");
                p.staStepTit01.set_text("접수");
                p.staStepTit01.set_cssclass("sta_WF_Boxtit");
                p.staStepTit01.set_fittocontents("width");
                p.staStepTit01.move("20.00","0","100%","49",null,null);

                p.btnCountP01.set_taborder("1");
                p.btnCountP01.set_text("100");
                p.btnCountP01.set_cssclass("btn_WF_CountP");
                p.btnCountP01.set_fittocontents("width");
                p.btnCountP01.set_textAlign("right");
                p.btnCountP01.set_letterSpacing("0px");
                p.btnCountP01.move("0.00","0","50","30",null,null);

                p.StepSls01.set_taborder("2");
                p.StepSls01.set_text("/");
                p.StepSls01.set_textAlign("center");
                p.StepSls01.move("55.00","0","7","30",null,null);

                p.btnCountD01.set_taborder("3");
                p.btnCountD01.set_text("100");
                p.btnCountD01.set_cssclass("btn_WF_CountD");
                p.btnCountD01.set_fittocontents("width");
                p.btnCountD01.set_textAlign("left");
                p.btnCountD01.set_letterSpacing("0px");
                p.btnCountD01.move("67.00","0","50","30",null,null);

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
                p.staStepTit02.set_text("검토 및 승인");
                p.staStepTit02.set_cssclass("sta_WF_Boxtit");
                p.staStepTit02.set_fittocontents("width");
                p.staStepTit02.move("30.00","10","100%","49",null,null);

                p.btnCountP02.set_taborder("8");
                p.btnCountP02.set_text("100");
                p.btnCountP02.set_cssclass("btn_WF_CountP");
                p.btnCountP02.set_fittocontents("width");
                p.btnCountP02.set_textAlign("right");
                p.btnCountP02.set_letterSpacing("0px");
                p.btnCountP02.move("10.00","10","50","30",null,null);

                p.StepSls02.set_taborder("9");
                p.StepSls02.set_text("/");
                p.StepSls02.set_textAlign("center");
                p.StepSls02.move("65.00","10","7","30",null,null);

                p.btnCountD02.set_taborder("10");
                p.btnCountD02.set_text("100");
                p.btnCountD02.set_cssclass("btn_WF_CountD");
                p.btnCountD02.set_fittocontents("width");
                p.btnCountD02.set_textAlign("left");
                p.btnCountD02.set_letterSpacing("0px");
                p.btnCountD02.move("77.00","10","50","30",null,null);

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
            this.divForm.form.divStep.form.palStepGroup.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divStep.form.palStepGroup.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divStep.form.palStepGroup.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.divStep.form.palStepGroup.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staNvLabel01.set_taborder("4");
                p.staNvLabel01.set_text("부가시설물신청");
                p.staNvLabel01.set_cssclass("sta_WF_NvLabel");
                p.staNvLabel01.set_flexshrink("0");
                p.staNvLabel01.set_fittocontents("width");
                p.staNvLabel01.set_minwidth("");
                p.staNvLabel01.move("83","130","108","60",null,null);

                p.staNvArw01.set_taborder("0");
                p.staNvArw01.set_text("");
                p.staNvArw01.set_cssclass("sta_WF_NvArw");
                p.staNvArw01.move("198.00","152","15","15",null,null);

                p.staNvLabel02.set_taborder("1");
                p.staNvLabel02.set_text("접수");
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
            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("6");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_spacing("0px 20px 0px 20px");
            this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form,
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
            this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_taborder("0");
                p.Grid00.set_binddataset("dsList");
                p.Grid00.set_autofittype("none");
                p.Grid00.set_autosizingtype("none");
                p.Grid00.move("0","54","100.00%",null,null,"10");

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총 <fc v=\'#1e4ebe\'>1</fc>건");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.move("0","0","200","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divStep.form.palStepConGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep.form.palStepConGroup.form,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_spacing("16px 10px 16px 10px ");
            this.divForm.form.divStep.form.palStepConGroup.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divStep.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep.form,
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
                p.btnStepService.set_text("부가시설물");
                p.btnStepService.set_cssclass("btn_WF_StepTit");
                p.btnStepService.set_visible("true");
                p.btnStepService.set_fittocontents("width");
                p.btnStepService.move("774.00","10","195","40",null,null);

                p.btnStepNew.set_taborder("2");
                p.btnStepNew.set_text("부가시설물신청");
                p.btnStepNew.set_cssclass("btn_WF_StepSub");
                p.btnStepNew.set_visible("true");
                p.btnStepNew.set_fittocontents("width");
                p.btnStepNew.move("804.00","10","195","40",null,null);

                p.staStepEx.set_taborder("3");
                p.staStepEx.set_text("나 / 작업 그룹");
                p.staStepEx.set_fittocontents("width");
                p.staStepEx.move("571","128","120","40",null,null);

                p.palStepGroup.set_taborder("5");
                p.palStepGroup.set_text("Div00");
                p.palStepGroup.move("216.00","100","100%","110",null,null);

                p.palStepConGroup.set_taborder("4");
                p.palStepConGroup.set_text("Div00");
                p.palStepConGroup.set_cssclass("div_WF_Step");
                p.palStepConGroup.set_fittocontents("height");
                p.palStepConGroup.set_visible("false");
                p.palStepConGroup.move("20","199","100%","660",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divStep.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divStep.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divStep.form,
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
            this.divForm.form.divStep.form.addLayout(obj.name, obj);
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

                p.divStep.set_taborder("1");
                p.divStep.set_text("Div01");
                p.divStep.set_fittocontents("height");
                p.divStep.set_formscrollbartype("none none");
                p.divStep.set_formscrolltype("none");
                p.divStep.set_cssclass("div_WF_Step");
                p.divStep.move("1665","29","100%","100%",null,null);
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
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,1200,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("서비스처리");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0",null,"1200","60",null);
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
        this.registerScript("LIF045M00.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	LIF045M00.xfdl
        *  @Creator 	CHG
        *  @CreateDate 	2024/10/10
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/10				CHG							최초생성
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

        	// 작업구분 조회
        	this.fnJobSeSearch();

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
        this.fnJobSeSearch = function()
        {
        	if(this.dsJobSearch.getRowCount() > 0){
        		this.dsJobSearch.clearData();

        	}

        	this.dsJobSearch.addRow();
        	this.dsJobSearch.setColumn(0, "jobSeCd", "FAC");

        	var strSvcId    = "jobSeSearch";
        	var strSvcUrl   = "lifCom/selectSrvcJobSe.do";
        	var inData      = "dsSearch=dsJobSearch";
        	var outData     = "dsJobList=dsJobList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**************************************************************************
         * @name : fnCntSeSearch
         * @description : 카운트 조회
         ***************************************************************************/
        this.fnCntSeSearch = function()
        {
        	if(this.dsCntSearch.getRowCount() > 0){
        		this.dsCntSearch.clearData();

        	}

        	this.dsCntSearch.addRow();
        	this.dsCntSearch.setColumn(0, "lgnId", this.gvUserId);

        	var strSvcId    = "addedFcltyPrcsNocsInq";
        	var strSvcUrl   = "addedFcltySrvcPrcs/addedFcltyPrcsNocsInq.do";
        	var inData      = "dsSearch=dsCntSearch";
        	var outData     = "dsCntList1=dsCntList1 dsCntList2=dsCntList2";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**************************************************************************
         * @name : fnListSearch
         * @description : List 조회
         ***************************************************************************/
        this.fnListSearch = function(seCd, taskPrcsId){
        	if(this.dsListSearch.getRowCount() > 0){
        		this.dsListSearch.clearData();

        	}

        	this.dsListSearch.addRow();
        	this.dsListSearch.setColumn(0, "lgnId", this.gvUserId);
        	this.dsListSearch.setColumn(0, "inqSeCd", seCd);
        	this.dsListSearch.setColumn(0, "taskPrcsId", taskPrcsId);

        	var strSvcId    = "dsListSearch";
        	var strSvcUrl   = "addedFcltySrvcPrcs/addedFcltyPrcsInq.do";
        	var inData      = "dsSearch=dsListSearch";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }

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
        		case "jobSeSearch" : // 작업구분 조회
        			// 카운트 조회
        			this.fnCntSeSearch();

        			break;

        		case "addedFcltyPrcsNocsInq": // 카운트 조회
        			// 조회 후 해당 액션별 count 세팅해줌.
        			var act10160Cnt = 0;
        			var act10161Cnt = 0;

        			// 나
        			if(this.dsCntList1.getRowCount() > 0){
        				for(var i = 0; i < this.dsCntList1.getRowCount(); i++){
        					var jobSeCd = this.dsCntList1.getColumn(i, "jobSeCd");

        					var jobRow = this.dsJobList.findRow("jobSeCd", jobSeCd);

        					if(this.dsJobList.getColumn(jobRow, "taskSeCd") == "ACT10160"){
        						act10160Cnt = act10160Cnt + nexacro.toNumber(this.dsCntList1.getColumn(i, "cnt"), 0);

        					}else if(this.dsJobList.getColumn(jobRow, "taskSeCd") == "ACT10161"){
        						act10161Cnt = act10161Cnt + nexacro.toNumber(this.dsCntList1.getColumn(i, "cnt"), 0);

        					}
        				}
        			}

        			this.divForm.form.divStep.form.palStepGroup.form.btnCountP01.text = act10160Cnt;
        			this.divForm.form.divStep.form.palStepGroup.form.btnCountP02.text = act10161Cnt;

        			act10160Cnt = 0;
        			act10161Cnt = 0;

        			// 작업그룹
        			if(this.dsCntList2.getRowCount() > 0){
        				for(var i = 0; i < this.dsCntList2.getRowCount(); i++){
        					var jobSeCd = this.dsCntList2.getColumn(i, "jobSeCd");

        					var jobRow = this.dsJobList.findRow("jobSeCd", jobSeCd);

        					if(this.dsJobList.getColumn(jobRow, "taskSeCd") == "ACT10160"){
        						act10160Cnt = act10160Cnt + nexacro.toNumber(this.dsCntList2.getColumn(i, "cnt"), 0);

        					}else if(this.dsJobList.getColumn(jobRow, "taskSeCd") == "ACT10161"){
        						act10161Cnt = act10161Cnt + nexacro.toNumber(this.dsCntList2.getColumn(i, "cnt"), 0);

        					}
        				}
        			}

        			this.divForm.form.divStep.form.palStepGroup.form.btnCountD01.text = act10160Cnt;
        			this.divForm.form.divStep.form.palStepGroup.form.btnCountD02.text = act10161Cnt;


        			break;

        		case "dsListSearch" : // 조회
        			this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form.staTotal.text = "총 <fc v='#1e4ebe'>" + this.dsList.getRowCount() + "</fc>건";

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
         * @name : ck01_onchanged
         * @description : work flow map 항목 체크.
         ***************************************************************************/
        this.ck01_onchanged = function(obj,e)
        {
        	var objVal = obj.value;
        	this.divForm.form.divStep.visible = objVal;
        };

        /**************************************************************************
         * @name : cnt_onclick
         * @description : 카운트 클릭 시 해당 그리드 노출.
         ***************************************************************************/
        this.cnt_onclick = function(obj,e)
        {
        	var objVal = obj.text;
        	var objNm = obj.name;

        	var seCd = ""; // 1:나, 2:작업그룹
        	var taskPrcsId = ""; // task구분값
        	var widthSize = 0; // width size 세팅 (한 글자 당 13px)

        	// 업무스탭 text 세팅
        	if(objNm == "btnCountP01" || objNm == "btnCountD01"){
        		this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form.staNvLabel02.text = "접수";
        		taskPrcsId = "ACT10160";
        		widthSize = 26;

        	}else if(objNm == "btnCountP02" || objNm == "btnCountD02"){
        		this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form.staNvLabel02.text = "검토및승인";
        		taskPrcsId = "ACT10161";
        		widthSize = 65;

        	}

        	this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form.staNvLabel02.width = widthSize;

        	if(objNm == "btnCountP01" || objNm == "btnCountP02"){
        		this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form.staNvLabel03.text = "나";
        		seCd = "1";
        		widthSize = 13;

        	}else if(objNm == "btnCountD01" || objNm == "btnCountD02"){
        		this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form.staNvLabel03.text = "작업그룹";
        		seCd = "2";
        		widthSize = 52;

        	}

        	this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form.staNvLabel03.width = widthSize;

        	// 그리드 visible 여부 세팅
        	if(nexacro.toNumber(objVal, 0) > 0){
        		this.divForm.form.divStep.form.palStepConGroup.visible = true;

        		// 해당 자료 그리드 데이터 조회
        		this.fnListSearch(seCd, taskPrcsId);
        	}else{
        		this.divForm.form.divStep.form.palStepConGroup.visible = false;

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
        			var sTitle = this.dsList.getColumn(e.row,"jobNm");
        			var objArg   = {
        				"aplyNo" : this.dsList.getColumn(e.row, "aplyNo"),
        				// "jobCd"  : this.dsList.getColumn(e.row, "jobCd"),
        				"view"   : "popup"
        			};

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

        			this.gfnOpenPopup("popup", "work::LIF/FAC/LIF079M00.xfdl", objArg, sPopupCallBack, objOption);

        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divMnCk.form.staLabel00.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divMnCk.form.ck01.addEventHandler("onchanged",this.ck01_onchanged,this);
            this.divForm.form.divStep.form.palStepGroup.form.btnCountP01.addEventHandler("onclick",this.cnt_onclick,this);
            this.divForm.form.divStep.form.palStepGroup.form.btnCountD01.addEventHandler("onclick",this.cnt_onclick,this);
            this.divForm.form.divStep.form.palStepGroup.form.btnCountP02.addEventHandler("onclick",this.cnt_onclick,this);
            this.divForm.form.divStep.form.palStepGroup.form.btnCountD02.addEventHandler("onclick",this.cnt_onclick,this);
            this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form.staNvLabel01.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form.Grid00.addEventHandler("oncellclick",this.grdList_oncellclick,this);
        };
        this.loadIncludeScript("LIF045M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
