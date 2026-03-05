(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template01");
            this.set_titletext("조회(1-1-1/1)+그리드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MENU_CD","type" : "STRING","size" : "256"},{"id" : "MENU_NM","type" : "STRING","size" : "256"}]},"Rows" : [{"MENU_CD" : "01","MENU_NM" : "상세메뉴1"},{"MENU_CD" : "02","MENU_NM" : "상세메뉴2"},{"MENU_CD" : "03","MENU_NM" : "상세메뉴3"},{"MENU_CD" : "04","MENU_NM" : "상세메뉴4"},{"MENU_CD" : "05","MENU_NM" : "상세메뉴5"},{"MENU_CD" : "06","MENU_NM" : "상세메뉴6"},{"MENU_CD" : "07","MENU_NM" : "상세메뉴7"},{"MENU_CD" : "08","MENU_NM" : "상세메뉴8"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsQuick", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "title","type" : "STRING","size" : "256"}]},"Rows" : [{"title" : "기본정보","code" : "0"},{"title" : "임차관련 정보","code" : "1"},{"title" : "기타요청정보","code" : "2"},{"title" : "증빙자료 첨부","code" : "3"},{"title" : "임차희망서 검토의견","code" : "4"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "hh","type" : "STRING","size" : "256"},{"id" : "mm","type" : "STRING","size" : "256"}]},"Rows" : [{"hh" : "선택","code" : "0","mm" : "선택"},{"code" : "1","hh" : "01","mm" : "5"},{"hh" : "02","code" : "2","mm" : "10"},{"hh" : "03","code" : "3","mm" : "15"},{"hh" : "04","code" : "4","mm" : "20"},{"hh" : "05","code" : "5","mm" : "25"},{"hh" : "06","code" : "6","mm" : "30"},{"hh" : "07","code" : "7","mm" : "35"},{"hh" : "08","code" : "8","mm" : "40"},{"hh" : "09","code" : "9","mm" : "45"},{"hh" : "10","code" : "10","mm" : "50"},{"hh" : "11","code" : "11","mm" : "60"},{"hh" : "12","code" : "12"},{"hh" : "13","code" : "13"},{"hh" : "14","code" : "14"},{"code" : "15","hh" : "15"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "업무분류","type" : "STRING","size" : "256"},{"id" : "업체기관명","type" : "STRING","size" : "256"},{"id" : "건물명","type" : "STRING","size" : "256"},{"id" : "크기","type" : "STRING","size" : "256"},{"id" : "용도","type" : "STRING","size" : "256"},{"id" : "제출일","type" : "STRING","size" : "256"},{"id" : "진행상태","type" : "STRING","size" : "256"},{"id" : "state","type" : "STRING","size" : "256"}]},"Rows" : [{"업무분류" : "공항운영그룹","업체기관명" : "AAA공항","건물명" : "정부합동청사","크기" : "60","용도" : "사무실","제출일" : "2024-06-27","진행상태" : "임차 대기중","state" : ""},{"업무분류" : "공항운영그룹","업체기관명" : "AAA공항","건물명" : "정부합동청사","크기" : "60","용도" : "사무실","제출일" : "2024-06-27","진행상태" : "임차 대기중","state" : ""},{"업무분류" : "공항운영그룹","업체기관명" : "AAA공항","건물명" : "정부합동청사","크기" : "60","용도" : "사무실","제출일" : "2024-06-27","진행상태" : "임차 대기중","state" : ""},{"업무분류" : "공항운영그룹","업체기관명" : "AAA공항","건물명" : "정부합동청사","크기" : "60","용도" : "사무실","제출일" : "2024-06-27","진행상태" : "임차 대기중","state" : ""},{"업무분류" : "공항운영그룹","업체기관명" : "AAA공항","건물명" : "정부합동청사","크기" : "60","용도" : "사무실","제출일" : "2024-06-27","진행상태" : "임차적합성 검토중","state" : "0"},{"업무분류" : "공항운영그룹","업체기관명" : "AAA공항","건물명" : "정부합동청사","크기" : "60","용도" : "사무실","제출일" : "2024-06-27","진행상태" : "임차적합성 검토중","state" : "0"},{"업무분류" : "공항운영그룹","업체기관명" : "AAA공항","건물명" : "정부합동청사","크기" : "60","용도" : "사무실","제출일" : "2024-06-27","진행상태" : "임차 대기중","state" : ""},{"업무분류" : "공항운영그룹","업체기관명" : "AAA공항","건물명" : "정부합동청사","크기" : "60","용도" : "사무실","제출일" : "2024-06-27","진행상태" : "임차 대기중","state" : ""},{"업무분류" : "공항운영그룹","업체기관명" : "AAA공항","건물명" : "정부합동청사","크기" : "60","용도" : "사무실","제출일" : "2024-06-27","진행상태" : "임차 대기중","state" : ""},{"업무분류" : "공항운영그룹","업체기관명" : "AAA공항","건물명" : "정부합동청사","크기" : "60","용도" : "사무실","제출일" : "2024-06-27","진행상태" : "임차 대기중","state" : ""}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:10",null,"800","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100.00%","200",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","102",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"pan00\"/><PanelItem id=\"PanelItem00\" componentid=\"pan01\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02\"/><PanelItem id=\"PanelItem04\" componentid=\"pan03\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem02\" componentid=\"Combo00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("업체분류");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_text("업체(기관)명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00","140.00","30","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("검색어 입력");
            obj.set_text("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan00","1694.00","398","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_01_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("Combo00","130.00","67","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_flexgrow("1");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("Combo01","626","98","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_flexgrow("1");
            obj.set_innerdataset("ds_cbo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("mm");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_text("건물명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","1694.00","398","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem02\" componentid=\"Combo01\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan03","20.00","67","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"divCal\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_text("제출일");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("Edit00","97","157","350","29",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("18");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00\"/><PanelItem id=\"PanelItem03\" componentid=\"Edit00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("Button00","927","165","120","50",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_text("Button00");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divCal","1030","75","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","0","145","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Static("staDash","Calendar00:10","0","10","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","staDash:10","0","145","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","52","29",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","30","100.00%","580",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divPage","0",null,"100.00%","36",null,"0",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","94.00","0","65","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"64","79.79%","34","253",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_border("1px solid pink");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbGrdList\"/><PanelItem id=\"PanelItem03\" componentid=\"btnGrdAdd\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem05\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem00\" componentid=\"btnGrdDw\"/><PanelItem id=\"PanelItem07\" componentid=\"Button00\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","0","43","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("1000");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbGrdList","169.00","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd","259.00","0","47","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","316.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","371.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","426.00","0","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("Button00","1286","10","34","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_GrdSet");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn00",null,"102","79.79%","34","254",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("12");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            obj.set_border("1px solid pink");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbGrdList00\"/><PanelItem id=\"PanelItem02\" componentid=\"btnGrdAdd00\"/><PanelItem id=\"PanelItem05\" componentid=\"btnGrdDw00\"/><PanelItem id=\"PanelItem06\" componentid=\"Button00_00\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00_00","631","-280","65","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("13");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbGrdList00","706","-280","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd00","796","-280","47","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("15");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw00","963","-280","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("16");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("Button00_00","1097","-280","34","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_GrdSet");
            this.divForm.form.divGrd.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divSch.form.divCal.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Calendar00.set_taborder("0");
                p.Calendar00.set_dateformat("yyyy-MM-dd");
                p.Calendar00.move("0","0","145","40",null,null);

                p.staDash.set_taborder("1");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("Calendar00:10","0","10","40",null,null);

                p.Calendar01.set_taborder("2");
                p.Calendar01.set_dateformat("yyyy-MM-dd");
                p.Calendar01.move("staDash:10","0","145","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch.form.divCal.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form.divCal.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch.form.divCal.form.addLayout(obj.name, obj);
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
                p.panLabel.move("20","14","100%","102",null,null);

                p.pan01.set_taborder("2");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_flexgrow("1");
                p.pan01.set_fittocontents("height");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","320","40",null,null);

                p.staLabel01.set_taborder("1");
                p.staLabel01.set_text("업체분류");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_minwidth("");
                p.staLabel01.move("0","0","100","40",null,null);

                p.staLabel.set_taborder("3");
                p.staLabel.set_text("업체(기관)명");
                p.staLabel.set_cssclass("sta_WF_SchLabel");
                p.staLabel.set_flexshrink("0");
                p.staLabel.set_minwidth("");
                p.staLabel.move("0","0","100","40",null,null);

                p.edt00_01_00.set_taborder("4");
                p.edt00_01_00.set_flexgrow("1");
                p.edt00_01_00.set_displaynulltext("검색어 입력");
                p.edt00_01_00.set_maxwidth("");
                p.edt00_01_00.move("140.00","30","100%","40",null,null);

                p.pan00.set_taborder("5");
                p.pan00.set_type("horizontal");
                p.pan00.set_horizontalgap("10");
                p.pan00.set_flexgrow("1");
                p.pan00.set_fittocontents("height");
                p.pan00.set_maxheight("");
                p.pan00.set_minwidth("");
                p.pan00.move("1694.00","398","320","40",null,null);

                p.Combo00.set_taborder("13");
                p.Combo00.set_flexgrow("1");
                p.Combo00.set_text("전체");
                p.Combo00.set_value("");
                p.Combo00.set_index("-1");
                p.Combo00.move("130.00","67","100%","40",null,null);

                p.Combo01.set_taborder("14");
                p.Combo01.set_flexgrow("1");
                p.Combo01.set_innerdataset("ds_cbo");
                p.Combo01.set_codecolumn("code");
                p.Combo01.set_datacolumn("mm");
                p.Combo01.set_text("선택");
                p.Combo01.set_value("0");
                p.Combo01.set_index("0");
                p.Combo01.move("626","98","100%","40",null,null);

                p.staLabel02.set_taborder("6");
                p.staLabel02.set_text("건물명");
                p.staLabel02.set_cssclass("sta_WF_SchLabel");
                p.staLabel02.set_flexshrink("0");
                p.staLabel02.set_minwidth("");
                p.staLabel02.move("0","0","100","40",null,null);

                p.pan02.set_taborder("7");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_flexgrow("1");
                p.pan02.set_fittocontents("height");
                p.pan02.set_minwidth("");
                p.pan02.move("1694.00","398","320","40",null,null);

                p.pan03.set_taborder("8");
                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("10");
                p.pan03.set_fittocontents("height");
                p.pan03.set_flexgrow("1");
                p.pan03.set_minwidth("");
                p.pan03.move("20.00","67","320","40",null,null);

                p.staLabel03.set_taborder("15");
                p.staLabel03.set_text("제출일");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.panClose.set_taborder("10");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.Edit00.set_taborder("18");
                p.Edit00.move("97","157","350","29",null,null);

                p.panSchBtn.set_taborder("11");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.Button00.set_taborder("17");
                p.Button00.set_text("Button00");
                p.Button00.move("927","165","120","50",null,null);

                p.btnSch.set_taborder("12");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.move("570","192","112","40",null,null);

                p.divCal.set_taborder("16");
                p.divCal.set_text("Div00");
                p.divCal.set_flexgrow("1");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("1030","75","320","40",null,null);

                p.btnSchClose.set_taborder("9");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","52","29",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSch.form,
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
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_maxheight("");
                p.divPage.move("0",null,"100.00%","36",null,"0");

                p.staTotal00.set_taborder("1");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("94.00","0","65","34",null,null);

                p.PanelGrdBtn.set_taborder("7");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("height");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_flexwrap("wrap");
                p.PanelGrdBtn.set_verticalgap("10");
                p.PanelGrdBtn.set_border("1px solid pink");
                p.PanelGrdBtn.move(null,"64","79.79%","34","253",null);

                p.staTotal.set_taborder("10");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTotal01.set_taborder("9");
                p.staTotal01.set_text("1000");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("8");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);

                p.cmbGrdList.set_taborder("2");
                p.cmbGrdList.set_text("10");
                p.cmbGrdList.set_value("");
                p.cmbGrdList.set_index("-1");
                p.cmbGrdList.move("169.00","0","80","34",null,null);

                p.btnGrdAdd.set_taborder("3");
                p.btnGrdAdd.set_text("추가");
                p.btnGrdAdd.set_cssclass("btn_WF_Small");
                p.btnGrdAdd.set_visible("true");
                p.btnGrdAdd.set_fittocontents("width");
                p.btnGrdAdd.move("259.00","0","47","34",null,null);

                p.btnGrdDel.set_taborder("4");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("false");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("316.00","0","45","34",null,null);

                p.btnGrdRegi.set_taborder("5");
                p.btnGrdRegi.set_text("등록");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("false");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("371.00","0","45","34",null,null);

                p.btnGrdDw.set_taborder("6");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_visible("true");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("426.00","0","124","34",null,null);

                p.Button00.set_taborder("11");
                p.Button00.set_cssclass("btn_WF_GrdSet");
                p.Button00.move("1286","10","34","34",null,null);

                p.PanelGrdBtn00.set_taborder("12");
                p.PanelGrdBtn00.set_flexcrossaxisalign("start");
                p.PanelGrdBtn00.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn00.set_flexmainaxisalign("end");
                p.PanelGrdBtn00.set_fittocontents("height");
                p.PanelGrdBtn00.set_horizontalgap("10");
                p.PanelGrdBtn00.set_flexwrap("wrap");
                p.PanelGrdBtn00.set_verticalgap("10");
                p.PanelGrdBtn00.set_border("1px solid pink");
                p.PanelGrdBtn00.move(null,"102","79.79%","34","254",null);

                p.staTotal00_00.set_taborder("13");
                p.staTotal00_00.set_text("목록수");
                p.staTotal00_00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00_00.set_fittocontents("width");
                p.staTotal00_00.move("631","-280","65","34",null,null);

                p.cmbGrdList00.set_taborder("14");
                p.cmbGrdList00.set_text("10");
                p.cmbGrdList00.set_value("");
                p.cmbGrdList00.set_index("-1");
                p.cmbGrdList00.move("706","-280","80","34",null,null);

                p.btnGrdAdd00.set_taborder("15");
                p.btnGrdAdd00.set_text("추가");
                p.btnGrdAdd00.set_cssclass("btn_WF_Small");
                p.btnGrdAdd00.set_visible("true");
                p.btnGrdAdd00.set_fittocontents("width");
                p.btnGrdAdd00.move("796","-280","47","34",null,null);

                p.btnGrdDw00.set_taborder("16");
                p.btnGrdDw00.set_text("다운로드(엑셀)");
                p.btnGrdDw00.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw00.set_visible("true");
                p.btnGrdDw00.set_fittocontents("width");
                p.btnGrdDw00.move("963","-280","124","34",null,null);

                p.Button00_00.set_taborder("17");
                p.Button00_00.set_cssclass("btn_WF_GrdSet");
                p.Button00_00.move("1097","-280","34","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

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
                p.divSch.move("0","0","100.00%","200",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.move("0","30","100.00%","580",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
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
            obj.set_verticalgap("20");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen,desktop,mobile",1480,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("조회(1-1-1/1)+그리드");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("Div01");
                p.divTitle.set_maxheight("");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","divTitle:10",null,"800","60",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.move("0","0",null,"50","0",null);

                p.divForm.move("20","divTitle:10",null,"850","20",null);
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
        this.registerScript("RP_101146_RP_101146_template01 (1).xfdl", function() {
        this.sizeFlag ="";
        this.divForm_divSch_Button00_onclick = function(obj,e)
        {
        	this.divForm.form.divGrd.form.btnGrdRegi.visible = true;
        };

        this.form_onload = function(obj,e)
        {
        	this.sizeFlag = this.divForm.form.divGrd.form.btnGrdAdd00.getOffsetLeft();
        };

        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	if(this.divForm.form.divGrd.form.btnGrdAdd.getPixelLeft() != this.divForm.form.divGrd.form.btnGrdAdd00.getPixelLeft())
        		this.divForm.form.divSch.form.Edit00.value = "RP 101146 에러";
        	else if(this.divForm.form.divGrd.form.btnGrdAdd.getPixelLeft() == this.divForm.form.divGrd.form.btnGrdAdd00.getPixelLeft())
        		this.divForm.form.divSch.form.Edit00.value = "RP 101146 정상";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.staLabel.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divSch.form.Combo01.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divForm.form.divSch.form.staLabel02.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.Button00.addEventHandler("onclick",this.divForm_divSch_Button00_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.divForm_divSch_btnSch_onclick,this);
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
        };
        this.loadIncludeScript("RP_101146_RP_101146_template01 (1).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
