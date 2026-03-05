(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST016M01");
            this.set_titletext("서비스처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"taskGbn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFcltOperMst", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeNm\" type=\"STRING\" size=\"256\"/><Column id=\"taskCd\" type=\"STRING\" size=\"256\"/><Column id=\"taskNm\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmproJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"nghtJobYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobApvsrId\" type=\"STRING\" size=\"256\"/><Column id=\"jobApvsrNm\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFcltOperMstCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"cnt1\" type=\"STRING\" size=\"256\"/><Column id=\"cnt2\" type=\"STRING\" size=\"256\"/><Column id=\"cnt3\" type=\"STRING\" size=\"256\"/><Column id=\"cnt4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("staLabel00_00","0","0","208","40",null,null,null,null,null,null,this.divForm.form.divMnCk.form);
            obj.set_taborder("4");
            obj.set_text("WorkFlowMap");
            obj.set_cssclass("sta_WF_SchLabel, sta_WF_Txt50022");
            obj.set_flexshrink("0");
            this.divForm.form.divMnCk.addChild(obj.name, obj);

            obj = new CheckBox("ck01","0","0","129","40",null,null,null,null,null,null,this.divForm.form.divMnCk.form);
            obj.set_taborder("1");
            obj.set_text("ICT 신청.해지");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.divForm.form.divMnCk.addChild(obj.name, obj);

            obj = new Div("divStep","0","91","100.00%","846",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_cssclass("div_WF_Step");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panStepGroup","20","0","100%","60",null,null,null,null,null,null,this.divForm.form.divStep.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_StepGroup");
            obj.set_spacing("0px 0px 20px 0px");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnStepService\"/><PanelItem id=\"PanelItem04\" componentid=\"btnStepNew\"/><PanelItem id=\"PanelItem01\" componentid=\"staStepEx\"/></Contents>");
            this.divForm.form.divStep.addChild(obj.name, obj);

            obj = new Button("btnStepService","774.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divStep.form);
            obj.set_taborder("0");
            obj.set_text("ICT 신청.해지");
            obj.set_cssclass("btn_WF_StepTit");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divStep.addChild(obj.name, obj);

            obj = new Button("btnStepNew","804.00","10","195","40",null,null,null,null,null,null,this.divForm.form.divStep.form);
            obj.set_taborder("1");
            obj.set_text("전산실작업신고서");
            obj.set_cssclass("btn_WF_StepSub");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divStep.addChild(obj.name, obj);

            obj = new Static("staStepEx","571","128","120","40",null,null,null,null,null,null,this.divForm.form.divStep.form);
            obj.set_taborder("2");
            obj.set_text("나 / 작업 그룹");
            obj.set_fittocontents("width");
            this.divForm.form.divStep.addChild(obj.name, obj);

            obj = new Div("divStepGroup","20","62","100%","100",null,null,null,null,null,null,this.divForm.form.divStep.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            this.divForm.form.divStep.addChild(obj.name, obj);

            obj = new Panel("palStepBox01","805","108","160","90",null,null,null,null,null,null,this.divForm.form.divStep.form.divStepGroup.form);
            obj.set_taborder("5");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_spacing("0px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit01\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon01\"/></Contents>");
            this.divForm.form.divStep.form.divStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit01","58","143","100%","60",null,null,null,null,null,null,this.divForm.form.divStep.form.divStepGroup.form);
            obj.set_taborder("0");
            obj.set_text("신청및보완");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("width");
            this.divForm.form.divStep.form.divStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountP01","177.00","110","105","30",null,null,null,null,null,null,this.divForm.form.divStep.form.divStepGroup.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            obj.set_text("0");
            this.divForm.form.divStep.form.divStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls01","55.00","0","15","30",null,null,null,null,null,null,this.divForm.form.divStep.form.divStepGroup.form);
            obj.set_taborder("2");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divStep.form.divStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountD01","75.00","0","105","30",null,null,null,null,null,null,this.divForm.form.divStep.form.divStepGroup.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            obj.set_text("0");
            this.divForm.form.divStep.form.divStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon01","177.00","110","100%","40",null,null,null,null,null,null,this.divForm.form.divStep.form.divStepGroup.form);
            obj.set_taborder("4");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCountP01\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls01\"/><PanelItem id=\"PanelItem03\" componentid=\"btnCountD01\"/></Contents>");
            this.divForm.form.divStep.form.divStepGroup.addChild(obj.name, obj);

            obj = new Static("BoxArw01","175","119","40","40",null,null,null,null,null,null,this.divForm.form.divStep.form.divStepGroup.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_BoxArw");
            obj.set_visible("true");
            this.divForm.form.divStep.form.divStepGroup.addChild(obj.name, obj);

            obj = new Static("staStepTit01_00","58","143","100%","60",null,null,null,null,null,null,this.divForm.form.divStep.form.divStepGroup.form);
            obj.set_taborder("7");
            obj.set_text("검토및협의");
            obj.set_cssclass("sta_WF_Boxtit");
            obj.set_fittocontents("width");
            this.divForm.form.divStep.form.divStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountP01_00","241","55","95","30",null,null,null,null,null,null,this.divForm.form.divStep.form.divStepGroup.form);
            obj.set_taborder("8");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountP");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep.form.divStepGroup.addChild(obj.name, obj);

            obj = new Static("StepSls01_00","55.00","0","15","30",null,null,null,null,null,null,this.divForm.form.divStep.form.divStepGroup.form);
            obj.set_taborder("9");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.divForm.form.divStep.form.divStepGroup.addChild(obj.name, obj);

            obj = new Button("btnCountD01_00","75.00","0","105","30",null,null,null,null,null,null,this.divForm.form.divStep.form.divStepGroup.form);
            obj.set_taborder("10");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CountD");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_letterSpacing("0px");
            this.divForm.form.divStep.form.divStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBoxCon01_00","177.00","110","100%","40",null,null,null,null,null,null,this.divForm.form.divStep.form.divStepGroup.form);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("5");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnCountP01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"StepSls01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"btnCountD01_00\"/></Contents>");
            this.divForm.form.divStep.form.divStepGroup.addChild(obj.name, obj);

            obj = new Panel("palStepBox01_00","805","108","160","90",null,null,null,null,null,null,this.divForm.form.divStep.form.divStepGroup.form);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_StepBox");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("5");
            obj.set_spacing("0px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staStepTit01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"palStepBoxCon01_00\"/></Contents>");
            this.divForm.form.divStep.form.divStepGroup.addChild(obj.name, obj);

            obj = new Div("palStepConGroup","20.00","220","100%","604",null,null,null,null,null,null,this.divForm.form.divStep.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Step");
            obj.set_formscrollbartype("none none");
            this.divForm.form.divStep.addChild(obj.name, obj);

            obj = new Div("divNvWrap","10","20","100%","60",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divStep.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Static("staNvLabel01","83","130","133","60",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("4");
            obj.set_text("전산실작업신고서");
            obj.set_cssclass("sta_WF_NvLabel");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvArw01","198.00","152","15","15",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_NvArw");
            this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Static("staNvLabel02","223.00","130","75","60",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form);
            obj.set_taborder("1");
            obj.set_text("검토및협의");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_NvLabel02");
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
            obj.set_cssclass("sta_WF_NvLabel02");
            this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.addChild(obj.name, obj);

            obj = new Div("divGrd","10.00","86","100%","500",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divStep.form.palStepConGroup.addChild(obj.name, obj);

            obj = new Grid("grdFcltOperMst","0","44","100.00%",null,null,"0",null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsFcltOperMst");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"단계\"/><Cell col=\"2\" text=\"신청구분\"/><Cell col=\"3\" text=\"전산실작업명\"/><Cell col=\"4\" text=\"작업감독자\"/><Cell col=\"5\" text=\"작업시작일시\"/><Cell col=\"6\" text=\"주/야구분\"/><Cell col=\"7\" text=\"신청&#13;&#10;자회사\"/><Cell col=\"8\" text=\"신청자\"/><Cell col=\"9\" text=\"신청&#13;&#10;일시\"/><Cell col=\"10\" text=\"처리자\"/><Cell col=\"11\" text=\"연락처\"/><Cell col=\"12\" text=\"처리&#13;&#10;작업그룹\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" cssclass=\"CellLink\" text=\"bind:aplyNo\"/><Cell col=\"1\" text=\"bind:taskNm\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:aplySeNm\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:cmproJobNm\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:jobApvsrNm\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:진행상태\" displaytype=\"text\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\"/><Cell col=\"6\" text=\"bind:nghtJobYn\" displaytype=\"text\"/><Cell col=\"7\"/><Cell col=\"8\" text=\"bind:aplcntNm\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:aplyDt\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:prcrNm\" textAlign=\"center\"/><Cell col=\"11\" textAlign=\"center\"/><Cell col=\"12\" cssclass=\"CellEnd\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.divStep.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","28","34",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divForm.form.divStep.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Static("Static01","Static00:0.00","0","42","34",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_Total");
            obj.set_text("0");
            this.divForm.form.divStep.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","Static01:0","0","30","34",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divStep.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","94.00","0","65","34",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.divStep.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbGrdList","169.00","0","80","34",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divStep.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"0","550","34","0",null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbGrdList\"/><PanelItem id=\"PanelItem00\" componentid=\"btnGrdAdd\"/></Contents>");
            this.divForm.form.divStep.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd","1292","13","36","34",null,null,null,null,null,null,this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_GrdSet");
            obj.set_fittocontents("width");
            this.divForm.form.divStep.form.palStepConGroup.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divGuide","1538.00","330","450","250",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","32.00","36","296","128",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("0");
            obj.set_text("divStep 이 내용에 맞게 계속 붙음");
            this.divGuide.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divMnCk.form
            obj = new Layout("default","",0,0,this.divForm.form.divMnCk.form,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_horizontalgap("20");
            this.divForm.form.divMnCk.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divStep.form.divStepGroup.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep.form.divStepGroup.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            this.divForm.form.divStep.form.divStepGroup.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form
            obj = new Layout("default","",0,0,this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staNvLabel01.set_taborder("4");
                p.staNvLabel01.set_text("전산실작업신고서");
                p.staNvLabel01.set_cssclass("sta_WF_NvLabel");
                p.staNvLabel01.set_flexshrink("0");
                p.staNvLabel01.set_fittocontents("width");
                p.staNvLabel01.set_minwidth("");
                p.staNvLabel01.move("83","130","133","60",null,null);

                p.staNvArw01.set_taborder("0");
                p.staNvArw01.set_text("");
                p.staNvArw01.set_cssclass("sta_WF_NvArw");
                p.staNvArw01.move("198.00","152","15","15",null,null);

                p.staNvLabel02.set_taborder("1");
                p.staNvLabel02.set_text("검토및협의");
                p.staNvLabel02.set_fittocontents("width");
                p.staNvLabel02.set_cssclass("sta_WF_NvLabel02");
                p.staNvLabel02.move("223.00","130","75","60",null,null);

                p.staNvArw02.set_taborder("2");
                p.staNvArw02.set_text("");
                p.staNvArw02.set_cssclass("sta_WF_NvArw");
                p.staNvArw02.move("338.00","152","15","15",null,null);

                p.staNvLabel03.set_taborder("3");
                p.staNvLabel03.set_text("작업그룹");
                p.staNvLabel03.set_fittocontents("width");
                p.staNvLabel03.set_cssclass("sta_WF_NvLabel02");
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
                p.grdFcltOperMst.set_taborder("0");
                p.grdFcltOperMst.set_binddataset("dsFcltOperMst");
                p.grdFcltOperMst.set_autofittype("none");
                p.grdFcltOperMst.move("0","44","100.00%",null,null,"0");

                p.Static00.set_taborder("1");
                p.Static00.set_text("총");
                p.Static00.set_cssclass("sta_WF_SchLabel");
                p.Static00.move("0","0","28","34",null,null);

                p.Static01.set_taborder("2");
                p.Static01.set_fittocontents("width");
                p.Static01.set_cssclass("sta_WF_Total");
                p.Static01.set_text("0");
                p.Static01.move("Static00:0.00","0","42","34",null,null);

                p.staTotal02.set_taborder("3");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("Static01:0","0","30","34",null,null);

                p.staTotal00.set_taborder("4");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.set_visible("false");
                p.staTotal00.move("94.00","0","65","34",null,null);

                p.cmbGrdList.set_taborder("5");
                p.cmbGrdList.set_visible("false");
                p.cmbGrdList.set_text("10");
                p.cmbGrdList.set_value("");
                p.cmbGrdList.set_index("-1");
                p.cmbGrdList.move("169.00","0","80","34",null,null);

                p.panGrdBtn.set_taborder("6");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.move(null,"0","550","34","0",null);

                p.btnGrdAdd.set_taborder("7");
                p.btnGrdAdd.set_cssclass("btn_WF_GrdSet");
                p.btnGrdAdd.set_fittocontents("width");
                p.btnGrdAdd.move("1292","13","36","34",null,null);
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
                p.grdFcltOperMst.set_autofittype("none");
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
            obj = new Layout("default","",0,0,this.divForm.form.divStep.form,function(p){});
            obj.set_verticalgap("20");
            obj.set_type("vertical");
            obj.set_spacing("20px");
            this.divForm.form.divStep.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,function(p){});
            obj.set_type("vertical");
            obj.set_verticalgap("30");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,function(p){});
            this.divGuide.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divStep.form.divStepGroup.form.btnCountP01","text","dsFcltOperMstCnt","cnt1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divStep.form.divStepGroup.form.btnCountD01","text","dsFcltOperMstCnt","cnt2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divStep.form.divStepGroup.form.btnCountP01_00","text","dsFcltOperMstCnt","cnt3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.divStep.form.divStepGroup.form.btnCountD01_00","text","dsFcltOperMstCnt","cnt4");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST016M01_01.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST016M01_01.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	test.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			김완성					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.fnSearchCnt();
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

        this.cfnClose = function() {};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnSearchCnt = function()
        {
        	var strSvcId    = "searchCnt";
        	var strSvcUrl   = "cmm/selectEdpSrvcPrcsCntInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsFcltOperMstCnt=dsFcltOperMstCnt";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.fnSearch = function(taskGbn)
        {
        	if(this.dsSearch.getRowCount() > 0){
        		this.dsSearch.clearData();
        	}

        	this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form.Static01.text = "";
        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "taskGbn", taskGbn);		//단계구분

        	var strSvcId    = "search";
        	var strSvcUrl   = "cmm/selectEdpSrvcPrcsInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsFcltOperMst=dsFcltOperMst";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0) {
        		return;
        	}

        	switch(svcID) {

        		case "searchCnt":


        			break;

        		case "search": //조회

        			this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form.Static01.text = this.dsFcltOperMst.getRowCount();
        			break;

        		default :
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divStep_palStepConGroup_divGrd_grdFcltOperMst_oncellclick = function(obj,e)
        {
        	// 신청번호 index값
        	if(e.col == 0) {
        		var sTitle = this.dsFcltOperMst.getColumn(e.row, "taskNm");
        		var objArg   = {
        			"aplyNo" : this.dsFcltOperMst.getColumn(e.row, "aplyNo"),
        			"jobCd"  : this.dsFcltOperMst.getColumn(e.row, "taskCd"),
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
        		this.gfnOpenPopup("popupCmproIncmgJobWtnt", "work::CST/CMM/CST016M00_00.xfdl", objArg, sPopupCallBack, objOption);
        	}
        };

        /**************************************************************************
         * @name :
         * @description : task별 조회
         ***************************************************************************/
        this.divForm_divStep_divStepGroup_btnCountP01_onclick = function(obj,e)
        {
        	this.fnSearch("aply");			//신청
        };

        this.divForm_divStep_divStepGroup_btnCountD01_onclick = function(obj,e)
        {
        	this.fnSearch("splmnt");		//보완
        };

        this.divForm_divStep_divStepGroup_btnCountP01_00_onclick = function(obj,e)
        {
        	this.fnSearch("rvwCnsltn");		//검토및 협의
        };

        this.divForm_divStep_divStepGroup_btnCountD01_00_onclick = function(obj,e)
        {
        	this.fnSearch("");				//
        };

        /**************************************************************************
         * @name :
         * @description : 그리드개인화 설정
         ***************************************************************************/
        this.divForm_divStep_palStepConGroup_divGrd_btnGrdAdd_onclick = function(obj,e)
        {
        	//divForm.form.divStep.form.palStepConGroup.form.divGrd.form.grdFcltOperMst
        	var oArg    = { pvObjtId:"divForm.form.divStep.form.palStepConGroup.form.divGrd.form.grdFcltOperMst" };
        	var oOption = { title:"그리드 개인화", titlebar:true };
        	this.gfnOpenPopup("popupModalDefault", "work::CST/COM/setGridFormat.xfdl", oArg, "", oOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divMnCk.form.staLabel00_00.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divStep.form.divStepGroup.form.btnCountP01.addEventHandler("onclick",this.divForm_divStep_divStepGroup_btnCountP01_onclick,this);
            this.divForm.form.divStep.form.divStepGroup.form.btnCountD01.addEventHandler("onclick",this.divForm_divStep_divStepGroup_btnCountD01_onclick,this);
            this.divForm.form.divStep.form.divStepGroup.form.btnCountP01_00.addEventHandler("onclick",this.divForm_divStep_divStepGroup_btnCountP01_00_onclick,this);
            this.divForm.form.divStep.form.divStepGroup.form.btnCountD01_00.addEventHandler("onclick",this.divForm_divStep_divStepGroup_btnCountD01_00_onclick,this);
            this.divForm.form.divStep.form.palStepConGroup.form.divNvWrap.form.staNvLabel01.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form.grdFcltOperMst.addEventHandler("oncellclick",this.divForm_divStep_palStepConGroup_divGrd_grdFcltOperMst_oncellclick,this);
            this.divForm.form.divStep.form.palStepConGroup.form.divGrd.form.btnGrdAdd.addEventHandler("onclick",this.divForm_divStep_palStepConGroup_divGrd_btnGrdAdd_onclick,this);
        };
        this.loadIncludeScript("CST016M01_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
