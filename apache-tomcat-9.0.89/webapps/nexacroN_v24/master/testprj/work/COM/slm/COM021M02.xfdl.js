(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM021M02");
            this.set_titletext("SLM 평가대상 조직 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsEvlYr", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvlNotn", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"evlYr\" type=\"STRING\" size=\"256\"/><Column id=\"evlNotn\" type=\"STRING\" size=\"256\"/><Column id=\"ognzGroupId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOgnzGroup", this);
            obj._setContents("<ColumnInfo><Column id=\"ognzGroupId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOgnzGroupList", this);
            obj._setContents("<ColumnInfo><Column id=\"ognzGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"evlStat\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcnList", this);
            obj._setContents("<ColumnInfo><Column id=\"evlYr\" type=\"STRING\" size=\"256\"/><Column id=\"evlNotn\" type=\"STRING\" size=\"256\"/><Column id=\"evlTrgtYmd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"evlYr\" type=\"STRING\" size=\"256\"/><Column id=\"evlNotn\" type=\"STRING\" size=\"256\"/><Column id=\"ognzGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"coSe\" type=\"STRING\" size=\"256\"/><Column id=\"upDeptId\" type=\"STRING\" size=\"256\"/><Column id=\"upDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"evlTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"deptWgvl\" type=\"STRING\" size=\"256\"/><Column id=\"scrRfltRt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvlMax", this);
            obj._setContents("<ColumnInfo><Column id=\"evlYr\" type=\"STRING\" size=\"256\"/><Column id=\"evlNotn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOgnzGroupId", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSlmCoSe", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcnYn", this);
            obj._setContents("<ColumnInfo><Column id=\"ognzGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"excnYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","70",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100%","160",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","60",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"pan00\"/><PanelItem id=\"PanelItem00\" componentid=\"pan01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbEvlYr\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("평가년도");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_text("평가대상조직표ID");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan00","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbOgnzGroup\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_text("평가차수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","1694.00","398","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbEvlNotn\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","30","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cmbOgnzGroup","788.00","145","20.42%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsOgnzGroupId");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cmbEvlYr","788.00","145","20.42%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsEvlYr");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cmbEvlNotn","788.00","145","20.42%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsEvlNotn");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrdL","0","divSch:30","480","350",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","100%","34",null,null,null,null,null,null,this.divForm.form.divGrdL.form);
            obj.set_taborder("4");
            obj.set_text("SLM 평가대상 조직표 목록");
            obj.set_cssclass("sta_WF_Txt60018");
            this.divForm.form.divGrdL.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","40","100","34",null,null,null,null,null,null,this.divForm.form.divGrdL.form);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem01\" componentid=\"staTotal01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal02\"/></Contents>");
            this.divForm.form.divGrdL.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn","301","40","399","34",null,null,null,null,null,null,this.divForm.form.divGrdL.form);
            obj.set_taborder("10");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem00\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem06\" componentid=\"btnGrdDw\"/></Contents>");
            this.divForm.form.divGrdL.addChild(obj.name, obj);

            obj = new Grid("grdOgnzGroupList","0","94","100.00%","256",null,null,null,null,null,null,this.divForm.form.divGrdL.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsOgnzGroupList");
            obj.set_autofittype("col");
            obj.set_flexgrow("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"평가대상조직표ID\"/><Cell col=\"1\" text=\"설정상태\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:ognzGroupId\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:evlStat\" cssclass=\"CellEnd\" textAlign=\"center\" expr=\"evlStat == &apos;Y&apos; ? &apos;사용&apos; : &apos;&apos;\"/></Band></Format></Formats>");
            this.divForm.form.divGrdL.addChild(obj.name, obj);

            obj = new Static("staTotal","0","40","27","34",null,null,null,null,null,null,this.divForm.form.divGrdL.form);
            obj.set_taborder("1");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrdL.addChild(obj.name, obj);

            obj = new Static("staTotal01","27","40","43","34",null,null,null,null,null,null,this.divForm.form.divGrdL.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrdL.addChild(obj.name, obj);

            obj = new Static("staTotal02","70","40","30","34",null,null,null,null,null,null,this.divForm.form.divGrdL.form);
            obj.set_taborder("3");
            obj.set_text("건");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrdL.addChild(obj.name, obj);

            obj = new Static("staTotal00","151.00","0","65","34",null,null,null,null,null,null,this.divForm.form.divGrdL.form);
            obj.set_taborder("5");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.divGrdL.addChild(obj.name, obj);

            obj = new Combo("cmbGrdList","226.00","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrdL.form);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divGrdL.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrdL.form);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrdL.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","371.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrdL.form);
            obj.set_taborder("8");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrdL.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","426.00","0","124","34",null,null,null,null,null,null,this.divForm.form.divGrdL.form);
            obj.set_taborder("9");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrdL.addChild(obj.name, obj);

            obj = new Panel("Panel01","151","0","155","34",null,null,null,null,null,null,this.divForm.form.divGrdL.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("10");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbGrdList\"/></Contents>");
            this.divForm.form.divGrdL.addChild(obj.name, obj);

            obj = new Panel("Panel00","167","662","100%","350",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_verticalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrdL\"/><PanelItem id=\"PanelItem02\" componentid=\"divGrdR\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divGrdR","0","30","480","350",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","100%","34",null,null,null,null,null,null,this.divForm.form.divGrdR.form);
            obj.set_taborder("8");
            obj.set_text("평가 대상 조직표 사용 평가년도/평가차수");
            obj.set_cssclass("sta_WF_Txt60018");
            this.divForm.form.divGrdR.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","40","100","34",null,null,null,null,null,null,this.divForm.form.divGrdR.form);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem01\" componentid=\"staTotal01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal02\"/></Contents>");
            this.divForm.form.divGrdR.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn","301","40","399","34",null,null,null,null,null,null,this.divForm.form.divGrdR.form);
            obj.set_taborder("4");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem00\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem06\" componentid=\"btnGrdDw\"/></Contents>");
            this.divForm.form.divGrdR.addChild(obj.name, obj);

            obj = new Grid("grdExcnList","0","94","100.00%","256",null,null,null,null,null,null,this.divForm.form.divGrdR.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsExcnList");
            obj.set_autofittype("col");
            obj.set_flexgrow("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"300\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"평가대상년도\"/><Cell col=\"1\" text=\"차수\"/><Cell col=\"2\" text=\"평가기간\"/><Cell col=\"3\" text=\"평가시행일\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:evlYr\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:evlNotn\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:evlTrgtYmd\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:frstRegDt\" cssclass=\"CellEnd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.divForm.form.divGrdR.addChild(obj.name, obj);

            obj = new Static("staTotal","0","40","27","34",null,null,null,null,null,null,this.divForm.form.divGrdR.form);
            obj.set_taborder("1");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrdR.addChild(obj.name, obj);

            obj = new Combo("cmbGrdList","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrdR.form);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divGrdR.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divForm.form.divGrdR.form);
            obj.set_taborder("2");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.divGrdR.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","774.00","10","124","34",null,null,null,null,null,null,this.divForm.form.divGrdR.form);
            obj.set_taborder("5");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrdR.addChild(obj.name, obj);

            obj = new Static("staTotal01","27","40","43","34",null,null,null,null,null,null,this.divForm.form.divGrdR.form);
            obj.set_taborder("6");
            obj.set_text("1000");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrdR.addChild(obj.name, obj);

            obj = new Static("staTotal02","70","40","30","34",null,null,null,null,null,null,this.divForm.form.divGrdR.form);
            obj.set_taborder("7");
            obj.set_text("건");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrdR.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","371.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrdR.form);
            obj.set_taborder("9");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrdR.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","858.00","30","45","34",null,null,null,null,null,null,this.divForm.form.divGrdR.form);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrdR.addChild(obj.name, obj);

            obj = new Panel("Panel01","151","0","155","34",null,null,null,null,null,null,this.divForm.form.divGrdR.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("10");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbGrdList\"/></Contents>");
            this.divForm.form.divGrdR.addChild(obj.name, obj);

            obj = new Panel("Panel01","118","681","100%","900",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"divGrd\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divGrd","0","30","100%","500",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","100%","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("평가대상 조직표 상세 현황");
            obj.set_cssclass("sta_WF_Txt60018");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","40","100","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("12");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem01\" componentid=\"staTotal01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal02\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn","1021","40","399","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem00\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem06\" componentid=\"btnGrdDw\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdOgnzList","0","94","100.00%","408",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"300\"/><Column size=\"200\"/><Column size=\"300\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"70\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"조직코드\"/><Cell col=\"1\" text=\"조직명\"/><Cell col=\"2\" text=\"회사구분\"/><Cell col=\"3\" text=\"취향조직명\"/><Cell col=\"4\" text=\"부서가중치\"/><Cell col=\"5\" text=\"평가대상여부\"/><Cell col=\"6\" colspan=\"2\" text=\"점수반영율\"/></Band><Band id=\"body\"><Cell text=\"bind:deptId\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:deptNm\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:coSe\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsSlmCoSe\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"3\" text=\"bind:upDeptNm\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:deptWgvl\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:evlTrgtYn\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:scrRfltRt\" textAlign=\"right\" border=\"0px none, 0px none, 1px solid #dddddd\"/><Cell col=\"7\" expr=\"scrRfltRt != &apos;&apos; ? &apos;%&apos; : &apos;&apos;\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","40","27","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbGrdList","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","774.00","10","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","27","40","43","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("1000");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","70","40","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("건");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","371.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","858.00","30","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00","151","0","155","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("10");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbGrdList\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnPop","660.00","0","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("평가대상 조직표 관리");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("panBtn","0","divForm:10","100.00%","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("none");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnPop\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","60",null,null);

                p.pan01.set_taborder("2");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_flexgrow("1");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","420","40",null,null);

                p.staLabel01.set_taborder("1");
                p.staLabel01.set_text("평가년도");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_minwidth("");
                p.staLabel01.move("0","0","100","40",null,null);

                p.staLabel.set_taborder("3");
                p.staLabel.set_text("평가대상조직표ID");
                p.staLabel.set_cssclass("sta_WF_SchLabel");
                p.staLabel.set_flexshrink("0");
                p.staLabel.set_minwidth("");
                p.staLabel.move("0","0","100","40",null,null);

                p.pan00.set_taborder("4");
                p.pan00.set_type("horizontal");
                p.pan00.set_horizontalgap("10");
                p.pan00.set_flexgrow("1");
                p.pan00.set_maxheight("");
                p.pan00.set_minwidth("");
                p.pan00.move("1694.00","398","420","40",null,null);

                p.staLabel02.set_taborder("5");
                p.staLabel02.set_text("평가차수");
                p.staLabel02.set_cssclass("sta_WF_SchLabel");
                p.staLabel02.set_flexshrink("0");
                p.staLabel02.set_minwidth("");
                p.staLabel02.move("0","0","100","40",null,null);

                p.pan02.set_taborder("6");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_flexgrow("1");
                p.pan02.set_minwidth("");
                p.pan02.move("1694.00","398","420","40",null,null);

                p.panClose.set_taborder("8");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("7");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","30","30",null,null);

                p.panSchBtn.set_taborder("9");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("10");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.cmbOgnzGroup.set_taborder("11");
                p.cmbOgnzGroup.set_flexgrow("1");
                p.cmbOgnzGroup.set_innerdataset("dsOgnzGroupId");
                p.cmbOgnzGroup.set_codecolumn("cdId");
                p.cmbOgnzGroup.set_datacolumn("cdNm");
                p.cmbOgnzGroup.set_text("전체");
                p.cmbOgnzGroup.set_value("");
                p.cmbOgnzGroup.set_index("-1");
                p.cmbOgnzGroup.move("788.00","145","20.42%","40",null,null);

                p.cmbEvlYr.set_taborder("12");
                p.cmbEvlYr.set_flexgrow("1");
                p.cmbEvlYr.set_innerdataset("dsEvlYr");
                p.cmbEvlYr.set_codecolumn("cdId");
                p.cmbEvlYr.set_datacolumn("cdNm");
                p.cmbEvlYr.set_text("전체");
                p.cmbEvlYr.set_value("");
                p.cmbEvlYr.set_index("-1");
                p.cmbEvlYr.move("788.00","145","20.42%","40",null,null);

                p.cmbEvlNotn.set_taborder("13");
                p.cmbEvlNotn.set_flexgrow("1");
                p.cmbEvlNotn.set_innerdataset("dsEvlNotn");
                p.cmbEvlNotn.set_codecolumn("cdId");
                p.cmbEvlNotn.set_datacolumn("cdNm");
                p.cmbEvlNotn.set_text("전체");
                p.cmbEvlNotn.set_value("");
                p.cmbEvlNotn.set_index("-1");
                p.cmbEvlNotn.move("788.00","145","20.42%","40",null,null);
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

            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrdL.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrdL.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("4");
                p.Static00.set_text("SLM 평가대상 조직표 목록");
                p.Static00.set_cssclass("sta_WF_Txt60018");
                p.Static00.move("0","0","100%","34",null,null);

                p.Panel00.set_taborder("11");
                p.Panel00.set_fittocontents("width");
                p.Panel00.move("0","40","100","34",null,null);

                p.panGrdBtn.set_taborder("10");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.set_flexgrow("1");
                p.panGrdBtn.set_visible("true");
                p.panGrdBtn.move("301","40","399","34",null,null);

                p.grdOgnzGroupList.set_taborder("0");
                p.grdOgnzGroupList.set_binddataset("dsOgnzGroupList");
                p.grdOgnzGroupList.set_autofittype("col");
                p.grdOgnzGroupList.set_flexgrow("1");
                p.grdOgnzGroupList.move("0","94","100.00%","256",null,null);

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","40","27","34",null,null);

                p.staTotal01.set_taborder("2");
                p.staTotal01.set_text("10");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("27","40","43","34",null,null);

                p.staTotal02.set_taborder("3");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.set_fittocontents("width");
                p.staTotal02.move("70","40","30","34",null,null);

                p.staTotal00.set_taborder("5");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.set_visible("false");
                p.staTotal00.move("151.00","0","65","34",null,null);

                p.cmbGrdList.set_taborder("6");
                p.cmbGrdList.set_visible("false");
                p.cmbGrdList.set_text("10");
                p.cmbGrdList.set_value("");
                p.cmbGrdList.set_index("-1");
                p.cmbGrdList.move("226.00","0","80","34",null,null);

                p.btnGrdDel.set_taborder("7");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("false");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("316.00","0","45","34",null,null);

                p.btnGrdRegi.set_taborder("8");
                p.btnGrdRegi.set_text("추가");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("false");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("371.00","0","45","34",null,null);

                p.btnGrdDw.set_taborder("9");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_visible("false");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("426.00","0","124","34",null,null);

                p.Panel01.set_taborder("12");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.move("151","0","155","34",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.divGrdL.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrdL.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrdL.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdOgnzGroupList.set_autofittype("col");
            	}
            );
            obj.set_verticalgap("8");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.divGrdL.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrdR.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrdR.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("8");
                p.Static00.set_text("평가 대상 조직표 사용 평가년도/평가차수");
                p.Static00.set_cssclass("sta_WF_Txt60018");
                p.Static00.move("0","0","100%","34",null,null);

                p.Panel00.set_taborder("11");
                p.Panel00.set_fittocontents("width");
                p.Panel00.move("0","40","100","34",null,null);

                p.panGrdBtn.set_taborder("4");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.set_flexgrow("1");
                p.panGrdBtn.set_visible("true");
                p.panGrdBtn.move("301","40","399","34",null,null);

                p.grdExcnList.set_taborder("0");
                p.grdExcnList.set_binddataset("dsExcnList");
                p.grdExcnList.set_autofittype("col");
                p.grdExcnList.set_flexgrow("1");
                p.grdExcnList.move("0","94","100.00%","256",null,null);

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","40","27","34",null,null);

                p.cmbGrdList.set_taborder("3");
                p.cmbGrdList.set_visible("false");
                p.cmbGrdList.set_text("10");
                p.cmbGrdList.set_value("");
                p.cmbGrdList.set_index("-1");
                p.cmbGrdList.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("2");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.set_visible("false");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.btnGrdDw.set_taborder("5");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_visible("false");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("774.00","10","124","34",null,null);

                p.staTotal01.set_taborder("6");
                p.staTotal01.set_text("1000");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("27","40","43","34",null,null);

                p.staTotal02.set_taborder("7");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.set_fittocontents("width");
                p.staTotal02.move("70","40","30","34",null,null);

                p.btnGrdRegi.set_taborder("9");
                p.btnGrdRegi.set_text("추가");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("false");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("371.00","0","45","34",null,null);

                p.btnGrdDel.set_taborder("10");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("false");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("858.00","30","45","34",null,null);

                p.Panel01.set_taborder("12");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.set_fittocontents("width");
                p.Panel01.move("151","0","155","34",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.divGrdR.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrdR.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrdR.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdExcnList.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("8");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.divGrdR.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("8");
                p.Static00.set_text("평가대상 조직표 상세 현황");
                p.Static00.set_cssclass("sta_WF_Txt60018");
                p.Static00.move("0","0","100%","34",null,null);

                p.Panel01.set_taborder("12");
                p.Panel01.set_fittocontents("width");
                p.Panel01.move("0","40","100","34",null,null);

                p.panGrdBtn.set_taborder("4");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.set_flexgrow("1");
                p.panGrdBtn.set_visible("true");
                p.panGrdBtn.move("1021","40","399","34",null,null);

                p.grdOgnzList.set_taborder("0");
                p.grdOgnzList.set_binddataset("dsList");
                p.grdOgnzList.set_autofittype("col");
                p.grdOgnzList.move("0","94","100.00%","408",null,null);

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","40","27","34",null,null);

                p.cmbGrdList.set_taborder("3");
                p.cmbGrdList.set_visible("false");
                p.cmbGrdList.set_text("10");
                p.cmbGrdList.set_value("");
                p.cmbGrdList.set_index("-1");
                p.cmbGrdList.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("2");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.set_visible("false");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.btnGrdDw.set_taborder("5");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_visible("false");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("774.00","10","124","34",null,null);

                p.staTotal01.set_taborder("6");
                p.staTotal01.set_text("1000");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("27","40","43","34",null,null);

                p.staTotal02.set_taborder("7");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.set_fittocontents("width");
                p.staTotal02.move("70","40","30","34",null,null);

                p.btnGrdRegi.set_taborder("9");
                p.btnGrdRegi.set_text("추가");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("false");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("371.00","0","45","34",null,null);

                p.btnGrdDel.set_taborder("10");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("false");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("858.00","30","45","34",null,null);

                p.Panel00.set_taborder("11");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_flexmainaxisalign("end");
                p.Panel00.move("151","0","155","34",null,null);
            	}
            );
            obj.set_verticalgap("10");
            obj.set_spacing("");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdOgnzList.set_autofittype("none");
            	}
            );
            obj.set_verticalgap("8");
            obj.set_spacing("");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
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
                p.divSch.move("0","0","100%","160",null,null);

                p.divGrdL.set_taborder("1");
                p.divGrdL.set_text("Div01");
                p.divGrdL.set_fittocontents("height");
                p.divGrdL.set_formscrollbartype("none none");
                p.divGrdL.set_formscrolltype("none");
                p.divGrdL.set_flexgrow("1");
                p.divGrdL.move("0","divSch:30","480","350",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_verticalgap("20");
                p.Panel00.move("167","662","100%","350",null,null);

                p.divGrdR.set_taborder("3");
                p.divGrdR.set_text("Div01");
                p.divGrdR.set_fittocontents("height");
                p.divGrdR.set_formscrollbartype("none none");
                p.divGrdR.set_formscrolltype("none");
                p.divGrdR.set_flexgrow("1");
                p.divGrdR.move("0","30","480","350",null,null);

                p.Panel01.set_taborder("4");
                p.Panel01.set_type("vertical");
                p.Panel01.set_verticalgap("20");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("118","681","100%","900",null,null);

                p.divGrd.set_taborder("5");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.set_flexgrow("1");
                p.divGrd.move("0","30","100%","500",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
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
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,1200,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("SLM 평가대상 조직 현황");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","70",null,null,"60","70");

                p.btnPop.set_taborder("1");
                p.btnPop.set_text("평가대상 조직표 관리");
                p.btnPop.set_fittocontents("width");
                p.btnPop.move("660.00","0","138","40",null,null);

                p.panBtn.set_taborder("2");
                p.panBtn.set_horizontalgap("10");
                p.panBtn.set_fittocontents("none");
                p.panBtn.set_flexmainaxisalign("center");
                p.panBtn.set_flexcrossaxisalign("center");
                p.panBtn.move("0","divForm:10","100.00%","60",null,null);

                p.divTitle.set_taborder("3");
                p.divTitle.set_text("");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.set_formscrolltype("none");
                p.divTitle.set_maxwidth("");
                p.divTitle.move("0","0",null,"50","60",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,1200,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.move("0","0",null,"50","0",null);

                p.divForm.move("0","70",null,null,"0","70");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divTitle.form.divSch.form.divCal.form.calBgngYmd","value","dsSearch","sDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divTitle.form.divSch.form.divCal.form.calEndYmd","value","dsSearch","eDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divTitle.form.divSch.form.edtCtrtNo","value","dsSearch","ctrtNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divTitle.form.divSch.form.edtBrno","value","dsSearch","brno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divTitle.form.divSch.form.edtCtrtNm","value","dsSearch","ctrtNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divTitle.form.divSch.form.edtCoNm","value","dsSearch","coNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divTitle.form.divSch.form.cmbMnlMngSeMnl","value","dsSearch","autoMnlRegSe");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divTitle.form.divGrd.form.staTotal01","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.divSch.form.cmbOgnzGroup","value","dsSearch","ognzGroupId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divForm.form.divSch.form.cmbEvlYr","value","dsSearch","evlYr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.divSch.form.cmbEvlNotn","value","dsSearch","evlNotn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.registerScript("COM021M02.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM021M02.xfdl
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
        this.objApp = nexacro.getApplication();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();
        	this.getOgnzGroupSearchTransaction();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.getGroupSearchTransaction();
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

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 년도, 차수 조회
        this.getBaseSearchTransaction = function()
        {
        	var strSvcId    = "searchBase";
        	var strSvcUrl   = "slm/slmCatalogBaseInfoInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsEvlYr=dsEvlYr dsEvlNotn=dsEvlNotn dsEvlMax=dsEvlMax";
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

        // 차수 조회
        this.getEvlNotnSearchTransaction = function()
        {
        	var strSvcId    = "searchEvlNotn";
        	var strSvcUrl   = "slm/slmCatalogEvlNotnInfoInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsEvlNotn=dsEvlNotn";
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

        // 평가대상 조직표 ID
        this.getOgnzGroupSearchTransaction = function()
        {
        	var strSvcId    = "searchOgnzGroup";
        	var strSvcUrl   = "slm/slmEvlTrgtOgnzGroupInfoInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsOgnzGroup=dsList";
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

        // 조직표 목록
        this.getGroupSearchTransaction = function()
        {
        	this.dsExcnList.clearData();
        	this.dsList.clearData();

        	var strSvcId    = "searchGroup";
        	var strSvcUrl   = "slm/slmEvlTrgtOgnzTblListInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsOgnzGroupList=dsList";
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

        // 평가 목록
        this.getExcnSearchTransaction = function(ognzGroupId)
        {
        	var strSvcId    = "searchExcn";
        	var strSvcUrl   = "slm/slmEvlTrgtOgnzExcnListInq.do";
        	var inData      = "";
        	var outData     = "dsExcnList=dsList";
        	var strArg      = "id=" + ognzGroupId;
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

        // 조직표 상세 현황
        this.getOgnzListSearchTransaction = function(ognzGroupId)
        {
        	var strSvcId    = "searchOgnz";
        	var strSvcUrl   = "slm/slmEvlTrgtOgnzTblInfoInq.do";
        	var inData      = "";
        	var outData     = "dsList=dsList dsExcnYn=dsExcnYn";
        	var strArg      = "id=" + ognzGroupId;
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
        		case "searchOgnzGroup" :
        			var nRow = this.dsOgnzGroupId.addRow();
        			this.dsOgnzGroupId.setColumn(nRow, "cdId", "");
        			this.dsOgnzGroupId.setColumn(nRow, "cdNm", "전체");
        			if(this.dsOgnzGroup.getRowCount() > 0) {
        				for(var i=0; i<this.dsOgnzGroup.getRowCount(); i++) {
        					var nRow = this.dsOgnzGroupId.addRow();
        					this.dsOgnzGroupId.setColumn(nRow, "cdId", this.dsOgnzGroup.getColumn(i, "ognzGroupId"));
        					this.dsOgnzGroupId.setColumn(nRow, "cdNm", this.dsOgnzGroup.getColumn(i, "ognzGroupId"));
        				}
        			}
        			this.divForm.form.divSch.form.cmbOgnzGroup.index = 0;

        			this.getBaseSearchTransaction();
        			break;
        		case "searchBase" :
        			this.dsEvlYr.insertRow(0);
        			this.dsEvlYr.setColumn(0, "cdId", "");
        			this.dsEvlYr.setColumn(0, "cdNm", "전체");

        			this.dsEvlNotn.clearData();
        			this.dsEvlNotn.insertRow(0);
        			this.dsEvlNotn.setColumn(0, "cdId", "");
        			this.dsEvlNotn.setColumn(0, "cdNm", "전체");

        			this.divForm.form.divSch.form.cmbEvlYr.index = 0;
        			this.divForm.form.divSch.form.cmbEvlNotn.index = 0;

        			this.cfnSearch();
        			break;
        		case "searchEvlNotn" :
        			this.dsEvlNotn.insertRow(0);
        			this.dsEvlNotn.setColumn(0, "cdId", "");
        			this.dsEvlNotn.setColumn(0, "cdNm", "전체");

        			this.divForm.form.divSch.form.cmbEvlNotn.index = 0;
        			break;
        		case "searchGroup" :
        			this.divForm.form.divGrdL.form.staTotal01.text = this.dsOgnzGroupList.getRowCount();
        			break;
        		case "searchExcn" :
        			this.divForm.form.divGrdR.form.staTotal01.text = this.dsExcnList.getRowCount();
        			break;
        		case "searchOgnz" :
        			this.divForm.form.divGrd.form.staTotal01.text = this.dsList.getRowCount();
        			break;
        	}
        };

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if(sPopupId =="ognzGroupPopup") {
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);
        		if(objRtn.result == "Y") {
        			this.getGroupSearchTransaction();
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.gfnCmmCode("slmCoSe", "dsSlmCoSe", "SLM_CO_SE", "S");
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 상세 조회
        this.dsOgnzGroupList_onrowposchanged = function(obj,e)
        {
        	if(e.newrow > -1) {
        		this.getExcnSearchTransaction(obj.getColumn(e.newrow, "ognzGroupId"));
        		this.getOgnzListSearchTransaction(obj.getColumn(e.newrow, "ognzGroupId"));
        	}
        };

        this.divForm_divSch_cmbEvlYr_onitemchanged = function(obj,e)
        {
        	if(this.gfnIsNull(e.postvalue) != true) {
        		this.getEvlNotnSearchTransaction();
        	} else {
        		this.dsEvlNotn.clearData();
        		this.dsEvlNotn.insertRow(0);
        		this.dsEvlNotn.setColumn(0, "cdId", "");
        		this.dsEvlNotn.setColumn(0, "cdNm", "전체");

        		this.divForm.form.divSch.form.cmbEvlNotn.index = 0;
        	}
        };

        // 평가대상 조직표 관리 팝업
        this.btnPop_onclick = function(obj,e)
        {
        	var sTitle = "평가대상 조직표 관리";
        	var objArg   = { "ognzGroupId" : this.dsOgnzGroupList.getColumn(this.dsOgnzGroupList.rowposition, "ognzGroupId")
        	               , "evlYr" : this.dsEvlMax.getColumn(0, "evlYr")
        				   , "evlNotn" : this.dsEvlMax.getColumn(0, "evlNotn")
        				   };

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		//, width: 820
        		//, height: 600
        		, autosize: true
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("ognzGroupPopup", "work::COM/slm/COM021P02.xfdl", objArg, sPopupCallBack, objOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.staLabel.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divSch.form.staLabel02.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.cfnSearch,this);
            this.divForm.form.divSch.form.cmbOgnzGroup.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.divSch.form.cmbEvlYr.addEventHandler("onitemchanged",this.divForm_divSch_cmbEvlYr_onitemchanged,this);
            this.btnPop.addEventHandler("onclick",this.btnPop_onclick,this);
            this.dsOgnzGroupList.addEventHandler("onrowposchanged",this.dsOgnzGroupList_onrowposchanged,this);
        };
        this.loadIncludeScript("COM021M02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
