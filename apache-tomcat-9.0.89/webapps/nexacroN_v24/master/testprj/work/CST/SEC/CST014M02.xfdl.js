(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST014M02");
            this.set_titletext("위해물품반출신청");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"chckpntId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chckpntId\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCPCODE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDtlList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComcodeList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","60",null,"1100","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","30","530","100.00%","300",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","170",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj.getSetter("sFirstLine").set("");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"pan02\"/><PanelItem id=\"PanelItem00\" componentid=\"pan03\"/><PanelItem id=\"PanelItem02\" componentid=\"panBlank\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02_00_00\"/><PanelItem id=\"PanelItem05\" componentid=\"pan02_00_00_00\"/><PanelItem id=\"PanelItem06\" componentid=\"pan02_00_00_00_00\"/><PanelItem id=\"PanelItem08\" componentid=\"pan02_00_00_00_01_00\"/><PanelItem id=\"PanelItem07\" componentid=\"pan02_00_00_00_01\"/><PanelItem id=\"PanelItem09\" componentid=\"panBlank00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan03","20.00","67","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.getSetter("sFirstLine").set("Y");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem00\" componentid=\"cboChckpntId\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("Static02","832","38","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("23");
            obj.set_text("신청번호");
            obj.set_flexshrink("0");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.getSetter("sFirstLine").set("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","52","29",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_SchClose");
            obj.getSetter("sFirstLine").set("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","1694.00","398","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.getSetter("sFirstLine").set("Y");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02\"/><PanelItem id=\"PanelItem01\" componentid=\"divPop\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            obj.getSetter("sFirstLine").set("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panBlank","1694.00","398","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02_00_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00","1694.00","398","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.getSetter("sFirstLine").set("");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"cboAplySeCd\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtCstrnNm","290","140","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("Static00","108","148","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("21");
            obj.set_text("공사명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00_00","1694.00","398","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.getSetter("sFirstLine").set("");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCstrnNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02_00_00_00_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","986","36","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00_00_00","1694.00","398","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCoNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02_00_00_00_01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_text("접수일시");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtRcptDt","986","36","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00_00_01","1694.00","398","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRcptDt\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel02_00_00_00_01_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("18");
            obj.set_text("신청일시");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtAplyDt","986","36","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00_00_01_00","1694.00","398","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("20");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02_00_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplyDt\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panBlank00","995","150","320","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("25");
            obj.set_flexgrow("1");
            obj._setContents("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_text("반출초소");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            obj.getSetter("sFirstLine").set("");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cboChckpntId","162","19","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("24");
            obj.set_innerdataset("dsCPCODE");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.getSetter("sFirstLine").set("");
            obj.set_text("초소1");
            obj.set_value("01");
            obj.set_index("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divPop","657","28","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("26");
            obj.set_text("Div00");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtAplyNo","0","0","100.00%","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divPop.form);
            obj.set_taborder("0");
            obj.getSetter("sFirstLine").set("");
            this.divForm.form.divSch.form.divPop.addChild(obj.name, obj);

            obj = new Button("btnDgads",null,"0","40","40","5",null,null,null,null,null,this.divForm.form.divSch.form.divPop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.getSetter("hwrtYn").set("N");
            obj.getSetter("sFirstLine").set("");
            this.divForm.form.divSch.form.divPop.addChild(obj.name, obj);

            obj = new Combo("cboAplySeCd","162","19","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("27");
            obj.set_innerdataset("dsComcodeList");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.getSetter("sFirstLine").set("");
            obj.set_readonly("true");
            obj.set_text("초소1");
            obj.set_value("01");
            obj.set_index("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","298","100.00%","400",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"0","800","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnAply\"/><PanelItem id=\"PanelItem03\" componentid=\"btnSave\"/><PanelItem id=\"PanelItem05\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem08\" componentid=\"btnAplcfm\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","774.00","10","93","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("일괄수량등록");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","0","43","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnAply","1282","4","47","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("승인");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Small");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnAplcfm","1288","16","107","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("신청서상세보기");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnSave","543.00","10","47","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Small");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","44","100.00%",null,null,"44",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/><Row size=\"48\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사진\"/><Cell col=\"2\" text=\"물품명\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"단위\"/><Cell col=\"5\" text=\"반입수량\"/><Cell col=\"6\" text=\"스캔수량\"/><Cell col=\"7\" text=\"육안확인수량\"/><Cell col=\"8\" text=\"수량합계\"/><Cell col=\"9\" text=\"정산(과오)수량\"/><Cell col=\"10\" text=\"총저장수량\"/><Cell col=\"11\" text=\"총승인수량\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"right\"/><Cell col=\"1\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:cmdtyNm\" textAlign=\"left\"/><Cell col=\"3\" textAlign=\"left\" text=\"bind:spcfctVl\"/><Cell col=\"4\" textAlign=\"left\" text=\"bind:unitVl\"/><Cell col=\"5\" textAlign=\"right\" text=\"bind:crynQty\" displaytype=\"number\"/><Cell col=\"6\" textAlign=\"right\" text=\"bind:autoInptQty\" editinputtype=\"digit\" editmaxlength=\"10\" editautoselect=\"true\"/><Cell col=\"7\" textAlign=\"right\" text=\"bind:mnlInptQty\" displaytype=\"editcontrol\" edittype=\"normal\" editinputtype=\"digit\" editmaxlength=\"10\" editautoselect=\"true\"/><Cell col=\"8\" textAlign=\"right\" text=\"bind:hstryCrynQty\" displaytype=\"number\"/><Cell col=\"9\" cssclass=\"expr:errQty != 0 ? &quot;CellEnd CellTxtRed&quot; : &quot;CellEnd&quot;\" textAlign=\"right\" text=\"bind:errQty\" displaytype=\"number\" font=\"bold 17px/normal &quot;pretendard&quot;\"/><Cell col=\"10\" text=\"bind:allRegQty\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:shpgotQty\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"합계수량\"/><Cell col=\"8\" expr=\"dataset.parent.gfn_appendComma(dataset.getSum(&apos;hstryCrynQty&apos;))\" textAlign=\"right\"/><Cell col=\"9\" expr=\"dataset.parent.gfn_appendComma(dataset.getSum(&apos;errQty&apos;)) \" textAlign=\"right\"/><Cell col=\"10\" expr=\"dataset.parent.gfn_appendComma(dataset.getSum(&apos;allRegQty&apos;)) + &quot; / &quot; + dataset.parent.gfn_appendComma(dataset.getSum(&apos;crynQty&apos;))\" textAlign=\"right\"/><Cell col=\"11\" expr=\"dataset.parent.gfn_appendComma(dataset.getSum(&apos;shpgotQty&apos;)) + &quot; / &quot; + dataset.parent.gfn_appendComma(dataset.getSum(&apos;crynQty&apos;))\" textAlign=\"right\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divHstry","60.00","755","100.00%","400",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"0","840","34","0",null,null,null,null,null,this.divForm.form.divHstry.form);
            obj.set_taborder("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnHstryDel\"/><PanelItem id=\"PanelItem03\" componentid=\"btnHstrySave\"/></Contents>");
            this.divForm.form.divHstry.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","270","34",null,null,null,null,null,null,this.divForm.form.divHstry.form);
            obj.set_taborder("0");
            obj.set_text("반출내역");
            obj.set_cssclass("sta_WF_Txt50022");
            obj.set_usedecorate("true");
            this.divForm.form.divHstry.addChild(obj.name, obj);

            obj = new Button("btnHstryDel","468.00","0","45","34",null,null,null,null,null,null,this.divForm.form.divHstry.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.form.divHstry.addChild(obj.name, obj);

            obj = new Button("btnHstrySave","523.00","0","57","34",null,null,null,null,null,null,this.divForm.form.divHstry.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Small");
            this.divForm.form.divHstry.addChild(obj.name, obj);

            obj = new Grid("grdList","0","44","100.00%",null,null,"5",null,null,null,null,this.divForm.form.divHstry.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsDtlList");
            obj.getSetter("uFunction").set("checkbox");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"초소명\"/><Cell col=\"2\" text=\"물품명\"/><Cell col=\"3\" text=\"스캔수량\"/><Cell col=\"4\" text=\"육안확인수량\"/><Cell col=\"5\" text=\"수량합계\"/><Cell col=\"6\" text=\"승인수량\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"right\"/><Cell col=\"1\" text=\"bind:chckpntNm\" suppress=\"1\" textAlign=\"center\" suppressalign=\"middle\"/><Cell col=\"2\" text=\"bind:cmdtyNm\" textAlign=\"left\"/><Cell col=\"3\" textAlign=\"right\" text=\"bind:autoInptQty\" editinputtype=\"digit\" editmaxlength=\"10\" editautoselect=\"true\" displaytype=\"number\"/><Cell col=\"4\" textAlign=\"right\" text=\"bind:mnlInptQty\" editinputtype=\"digit\" editmaxlength=\"10\" editautoselect=\"true\" displaytype=\"number\"/><Cell col=\"5\" textAlign=\"right\" text=\"bind:hstryCrynQty\" displaytype=\"number\"/><Cell col=\"6\" displaytype=\"number\" expr=\"autoAprvQty + mnlAprvQty\" textAlign=\"right\"/></Band></Format></Formats>");
            this.divForm.form.divHstry.addChild(obj.name, obj);

            obj = new Edit("edtQrCode","130","208","400","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("5^SEC2410_00006^WAPWATCHBOX00002");
            obj.set_visible("true");
            obj.set_text("5^SEC2410_00006^WAPWATCHBOX00002");
            this.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divSch.form.divPop.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form.divPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtAplyNo.set_taborder("0");
                p.edtAplyNo.getSetter("sFirstLine").set("");
                p.edtAplyNo.move("0","0","100.00%","40",null,null);

                p.btnDgads.set_taborder("1");
                p.btnDgads.set_cssclass("btn_WF_EdtSch");
                p.btnDgads.getSetter("hwrtYn").set("N");
                p.btnDgads.getSetter("sFirstLine").set("");
                p.btnDgads.move(null,"0","40","40","5",null);
            	}
            );
            this.divForm.form.divSch.form.divPop.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form.divPop.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSch.form.divPop.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divSch.form.divPop.form.addLayout(obj.name, obj);
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
                p.panLabel.getSetter("sFirstLine").set("");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","170",null,null);

                p.pan03.set_taborder("2");
                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("10");
                p.pan03.set_fittocontents("height");
                p.pan03.set_flexgrow("1");
                p.pan03.set_verticalgap("4");
                p.pan03.getSetter("sFirstLine").set("Y");
                p.pan03.set_minwidth("");
                p.pan03.move("20.00","67","320","40",null,null);

                p.Static02.set_taborder("23");
                p.Static02.set_text("신청번호");
                p.Static02.set_flexshrink("0");
                p.Static02.set_cssclass("sta_WF_SchLabel");
                p.Static02.getSetter("sFirstLine").set("");
                p.Static02.move("832","38","100","40",null,null);

                p.panClose.set_taborder("4");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("3");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.getSetter("sFirstLine").set("");
                p.btnSchClose.move("1251","185","52","29",null,null);

                p.panSchBtn.set_taborder("5");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.pan02.set_taborder("1");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_flexgrow("1");
                p.pan02.getSetter("sFirstLine").set("Y");
                p.pan02.set_fittocontents("height");
                p.pan02.set_minwidth("");
                p.pan02.move("1694.00","398","320","40",null,null);

                p.btnSch.set_taborder("6");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.getSetter("sFirstLine").set("");
                p.btnSch.move("570","192","112","40",null,null);

                p.panBlank.set_taborder("8");
                p.panBlank.set_type("horizontal");
                p.panBlank.set_horizontalgap("10");
                p.panBlank.set_flexgrow("1");
                p.panBlank.set_minwidth("");
                p.panBlank.move("1694.00","398","320","40",null,null);

                p.staLabel02_00_00.set_taborder("9");
                p.staLabel02_00_00.set_text("작업구분");
                p.staLabel02_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel02_00_00.set_flexshrink("0");
                p.staLabel02_00_00.set_minwidth("");
                p.staLabel02_00_00.move("0","0","100","40",null,null);

                p.pan02_00_00.set_taborder("10");
                p.pan02_00_00.set_type("horizontal");
                p.pan02_00_00.set_horizontalgap("10");
                p.pan02_00_00.set_flexgrow("1");
                p.pan02_00_00.getSetter("sFirstLine").set("");
                p.pan02_00_00.set_minwidth("");
                p.pan02_00_00.move("1694.00","398","320","40",null,null);

                p.edtCstrnNm.set_taborder("22");
                p.edtCstrnNm.set_readonly("true");
                p.edtCstrnNm.move("290","140","100%","40",null,null);

                p.Static00.set_taborder("21");
                p.Static00.set_text("공사명");
                p.Static00.set_cssclass("sta_WF_SchLabel");
                p.Static00.set_flexshrink("0");
                p.Static00.move("108","148","100","40",null,null);

                p.pan02_00_00_00.set_taborder("11");
                p.pan02_00_00_00.set_type("horizontal");
                p.pan02_00_00_00.set_horizontalgap("10");
                p.pan02_00_00_00.set_flexgrow("1");
                p.pan02_00_00_00.getSetter("sFirstLine").set("");
                p.pan02_00_00_00.set_minwidth("");
                p.pan02_00_00_00.move("1694.00","398","320","40",null,null);

                p.staLabel02_00_00_00_00.set_taborder("12");
                p.staLabel02_00_00_00_00.set_text("회사명");
                p.staLabel02_00_00_00_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel02_00_00_00_00.set_flexshrink("0");
                p.staLabel02_00_00_00_00.set_minwidth("");
                p.staLabel02_00_00_00_00.move("0","0","100","40",null,null);

                p.edtCoNm.set_taborder("13");
                p.edtCoNm.set_readonly("true");
                p.edtCoNm.move("986","36","100%","40",null,null);

                p.pan02_00_00_00_00.set_taborder("14");
                p.pan02_00_00_00_00.set_type("horizontal");
                p.pan02_00_00_00_00.set_horizontalgap("10");
                p.pan02_00_00_00_00.set_flexgrow("1");
                p.pan02_00_00_00_00.set_minwidth("");
                p.pan02_00_00_00_00.move("1694.00","398","320","40",null,null);

                p.staLabel02_00_00_00_01.set_taborder("15");
                p.staLabel02_00_00_00_01.set_text("접수일시");
                p.staLabel02_00_00_00_01.set_cssclass("sta_WF_SchLabel");
                p.staLabel02_00_00_00_01.set_flexshrink("0");
                p.staLabel02_00_00_00_01.set_minwidth("");
                p.staLabel02_00_00_00_01.move("0","0","100","40",null,null);

                p.edtRcptDt.set_taborder("16");
                p.edtRcptDt.set_readonly("true");
                p.edtRcptDt.move("986","36","100%","40",null,null);

                p.pan02_00_00_00_01.set_taborder("17");
                p.pan02_00_00_00_01.set_type("horizontal");
                p.pan02_00_00_00_01.set_horizontalgap("10");
                p.pan02_00_00_00_01.set_flexgrow("1");
                p.pan02_00_00_00_01.set_fittocontents("height");
                p.pan02_00_00_00_01.set_minwidth("");
                p.pan02_00_00_00_01.move("1694.00","398","320","40",null,null);

                p.staLabel02_00_00_00_01_00.set_taborder("18");
                p.staLabel02_00_00_00_01_00.set_text("신청일시");
                p.staLabel02_00_00_00_01_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel02_00_00_00_01_00.set_flexshrink("0");
                p.staLabel02_00_00_00_01_00.set_minwidth("");
                p.staLabel02_00_00_00_01_00.move("0","0","100","40",null,null);

                p.edtAplyDt.set_taborder("19");
                p.edtAplyDt.set_readonly("true");
                p.edtAplyDt.move("986","36","100%","40",null,null);

                p.pan02_00_00_00_01_00.set_taborder("20");
                p.pan02_00_00_00_01_00.set_type("horizontal");
                p.pan02_00_00_00_01_00.set_horizontalgap("10");
                p.pan02_00_00_00_01_00.set_flexgrow("1");
                p.pan02_00_00_00_01_00.set_minwidth("");
                p.pan02_00_00_00_01_00.move("1694.00","398","320","40",null,null);

                p.panBlank00.set_taborder("25");
                p.panBlank00.set_flexgrow("1");
                p.panBlank00.move("995","150","320","40",null,null);

                p.staLabel03.set_taborder("7");
                p.staLabel03.set_text("반출초소");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.getSetter("sFirstLine").set("");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.cboChckpntId.set_taborder("24");
                p.cboChckpntId.set_innerdataset("dsCPCODE");
                p.cboChckpntId.set_codecolumn("cdId");
                p.cboChckpntId.set_datacolumn("cdNm");
                p.cboChckpntId.getSetter("sFirstLine").set("");
                p.cboChckpntId.set_text("초소1");
                p.cboChckpntId.set_value("01");
                p.cboChckpntId.set_index("0");
                p.cboChckpntId.move("162","19","100%","40",null,null);

                p.divPop.set_taborder("26");
                p.divPop.set_text("Div00");
                p.divPop.move("657","28","100%","40",null,null);

                p.cboAplySeCd.set_taborder("27");
                p.cboAplySeCd.set_innerdataset("dsComcodeList");
                p.cboAplySeCd.set_codecolumn("cdId");
                p.cboAplySeCd.set_datacolumn("cdNm");
                p.cboAplySeCd.getSetter("sFirstLine").set("");
                p.cboAplySeCd.set_readonly("true");
                p.cboAplySeCd.set_text("초소1");
                p.cboAplySeCd.set_value("01");
                p.cboAplySeCd.set_index("0");
                p.cboAplySeCd.move("162","19","100%","40",null,null);
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
            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panGrdBtn.set_taborder("0");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.move(null,"0","800","34","0",null);

                p.btnGrdRegi.set_taborder("1");
                p.btnGrdRegi.set_text("일괄수량등록");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("true");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("774.00","10","93","34",null,null);

                p.staTotal.set_taborder("2");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTotal01.set_taborder("3");
                p.staTotal01.set_text("0");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("4");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);

                p.btnAply.set_taborder("5");
                p.btnAply.set_text("승인");
                p.btnAply.set_fittocontents("width");
                p.btnAply.set_cssclass("btn_WF_Small");
                p.btnAply.move("1282","4","47","34",null,null);

                p.btnAplcfm.set_taborder("6");
                p.btnAplcfm.set_text("신청서상세보기");
                p.btnAplcfm.set_cssclass("btn_WF_Small");
                p.btnAplcfm.set_fittocontents("width");
                p.btnAplcfm.move("1288","16","107","34",null,null);

                p.btnSave.set_taborder("7");
                p.btnSave.set_text("저장");
                p.btnSave.set_fittocontents("width");
                p.btnSave.set_cssclass("btn_WF_Small");
                p.btnSave.move("543.00","10","47","34",null,null);

                p.grdList.set_taborder("8");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autoenter("select");
                p.grdList.set_cellclickbound("cell");
                p.grdList.set_autofittype("col");
                p.grdList.move("0","44","100.00%",null,null,"44");
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
            //-- Default Layout : this.divForm.form.divHstry.form
            obj = new Layout("default","",0,0,this.divForm.form.divHstry.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panGrdBtn.set_taborder("1");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.move(null,"0","840","34","0",null);

                p.staTotal.set_taborder("0");
                p.staTotal.set_text("반출내역");
                p.staTotal.set_cssclass("sta_WF_Txt50022");
                p.staTotal.set_usedecorate("true");
                p.staTotal.move("0","0","270","34",null,null);

                p.btnHstryDel.set_taborder("2");
                p.btnHstryDel.set_text("삭제");
                p.btnHstryDel.set_cssclass("btn_WF_SmallRed");
                p.btnHstryDel.set_visible("true");
                p.btnHstryDel.set_fittocontents("width");
                p.btnHstryDel.move("468.00","0","45","34",null,null);

                p.btnHstrySave.set_taborder("3");
                p.btnHstrySave.set_text("저장");
                p.btnHstrySave.set_fittocontents("width");
                p.btnHstrySave.set_cssclass("btn_WF_Small");
                p.btnHstrySave.move("523.00","0","57","34",null,null);

                p.grdList.set_taborder("4");
                p.grdList.set_binddataset("dsDtlList");
                p.grdList.getSetter("uFunction").set("checkbox");
                p.grdList.set_autoenter("select");
                p.grdList.set_cellclickbound("cell");
                p.grdList.set_autofittype("col");
                p.grdList.move("0","44","100.00%",null,null,"5");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divHstry.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divHstry.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divHstry.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divHstry.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divHstry.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divHstry.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divHstry.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.set_taborder("1");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("30","530","100.00%","300",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","298","100.00%","400",null,null);

                p.divHstry.set_taborder("2");
                p.divHstry.set_fittocontents("height");
                p.divHstry.set_formscrollbartype("none none");
                p.divHstry.set_formscrolltype("none");
                p.divHstry.move("60.00","755","100.00%","400",null,null);
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
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,700,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("위해물품반출신청");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","60",null,"1100","60",null);

                p.edtQrCode.set_taborder("1");
                p.edtQrCode.set_value("5^SEC2410_00006^WAPWATCHBOX00002");
                p.edtQrCode.set_visible("true");
                p.edtQrCode.move("130","208","400","40",null,null);

                p.divTitle.set_taborder("2");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,700,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.move("0","0",null,"50","0",null);

                p.divForm.move("20","60",null,"1100","20",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divForm.form.divSch.form.Div00.form.edtAplyNo","value","dsSearch","aplyNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divSch.form.cboChckpntId","value","dsSearch","chckpntId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divForm.form.divSch.form.divPop.form.edtAplyNo","value","dsSearch","aplyNo");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("CST014M02.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST014M02.xfdl", function() {

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
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.divForm.form.divSch.set_width("100%");
        	this.divForm.form.divSch.fittocontents = "height";

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
        //조회
        this.fnSearch = function () {
        	var strSvcId    = "search";
        	var strSvcUrl   = "cst/sec/selectDgadsCmdtyShpgotList.do";
        	var inData      = "dsIn=dsSearch";
        	var outData     = "dsList=dsList dsDtlList=dsDtlList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId ,
        						strSvcUrl ,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc,
        						isAsync);
        }

        //저장
        this.fnSave = function () {
        	var strSvcId    = "save";
        	var strSvcUrl   = "cst/sec/insertDgadsCmdtyShpgotList.do";
        	var inData      = "dsList=dsList:A";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId ,
        						strSvcUrl ,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc,
        						isAsync);
        }

        //상세저장
        this.fnSaveDtl = function () {
        	var strSvcId    = "save";
        	var strSvcUrl   = "cst/sec/insertDgadsCmdtyShpgotDtlList.do";
        	var inData      = "dsDtlList=dsDtlList:A";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId ,
        						strSvcUrl ,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc,
        						isAsync);
        }

        //승인
        this.fnAply = function () {
        	var strSvcId    = "aply";
        	var strSvcUrl   = "cst/sec/insertDgadsCmdtyShpgotAply.do";
        	var inData      = "dsList=dsList:A";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId ,
        						strSvcUrl ,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc,
        						isAsync);
        }
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }

        	switch(svcId) {
        		case "search" :
        			this.divForm.form.divGrd.form.staTotal01.text = this.dsList.getRowCount();
        			this.divForm.form.divGrd.form.resetScroll();
        			break;
        		case "save" :
        			//저장되었습니다.
        			this.gfnAlertMsg("msgSave", "MSG_007", ["저장되었습니다."]);
        			this.fnSearch();
        			break;
        		case "aply" :
        			//정상적으로 처리되었습니다.
        			this.gfnAlertMsg("msgAply", "CST_003");
        			this.fnSearch();
        			break;

        		default:
        			break;
        	}
        }
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function () {
        	// 공통코드 함수 호출
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsCPCODE:"WAPWATCHBOX:S" });  //반입초소
        	this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fnCallBack", dsComcodeList:"TSP:B" });  //작업구분
        }


        this.fnSetQrCodeInfo = function (nFindRow = -1) {
        	if (nFindRow == -1) return;

        	const oTargetGrid = this.divForm.form.divGrd.form.grdList;
        	const nPos = oTargetGrid.getBindCellIndex("body", "mnlInptQty");
        	const nCurPos = oTargetGrid.getCellPos();

        	// 육안확인수량에 포커싱 되어 있으면 울렁울렁;;
        	if (nPos == nCurPos) oTargetGrid.setCellPos(nCurPos - 1);

        	this.dsList.rowposition = nFindRow;
        	this.dsList.setColumn(nFindRow, "autoInptQty", nexacro.toNumber(this.dsList.getColumn(nFindRow, "autoInptQty"), 0) + 1);
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //검색조건 신청번호 조회
        this.divForm_divSch_divPop_btnDgads_onclick = function(obj,e)
        {
        	const sTitle = "보호구역위해물품 신청번호조회";
        	const oArg = {}
        	const objOption = {
        		  popuptype : "modal"	//modal,modaless
        		// , autosize  : true
        		, title     : sTitle
        		// , resize    : true
        		, titlebar  : true
        		, width     : 900
        		, height    : 850
        	};

        	this.gfnOpenPopup("dgads", "work::CST/SEC/CST014P05.xfdl", oArg, function (sPopupId, oRtn) {
        		if (this.gfnIsNull(oRtn)) return;
        		//const oJson = JSON.parse(oRtn);
        		//console.log(oJson);
        		// 작업구분, 공사명, 회사명, 신청일시, 접수일지 확인필요 (위해물품만 할지 모든 신청서를 할지 결정필요)
        		this.dsSearch.setColumn(0, "aplyNo", oRtn.aplyNo);  //신청번호
        		this.divForm.form.divSch.form.cboAplySeCd.value = oRtn.aplySeCd;  //작업구분
        		this.divForm.form.divSch.form.edtCoNm.value = oRtn.sprvsnCoNm;  //회사명
        		this.divForm.form.divSch.form.edtAplyDt.value = oRtn.aplyDt;  //신청일시
        		this.divForm.form.divSch.form.edtRcptDt.value = oRtn.rcptDt;  //접수일시
        	}, objOption);
        };

        //조회
        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "aplyNo"))) {
        		this.divForm.form.divSch.form.divPop.form.edtAplyNo.setFocus();
        		this.gfnAlertMsg("msg1", "MSG_009", ["신청번호"]); /// {0} 을/를 입력해 주세요.
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "chckpntId"))) {
        		this.divForm.form.divSch.form.cboChckpntId.setFocus();
        		this.gfnAlertMsg("msg2", "MSG_009", ["반출초소"]); /// {0} 을/를 입력해 주세요.
        		return false;
        	}

        	if (this.gfnDsIsUpdated(this.dsList)) {
        		// {0}(을)를 하시겠습니까?
        		this.gfnConfirmMsg("msgSch", "CST_001", (sMsgId, oRet) => {
        			if (!JSON.parse(oRet).result) return;
        			this.fnSearch();
        		}, null, null, null, ["변경된 내용이 존재합니다.\n 조회"]);
        	} else {
        		this.fnSearch();
        	}
        };

        // 데이터 변경 전
        this.dsList_cancolumnchange = function(obj,e)
        {
        	return true;
        };

        // 데이터 변경 후
        this.dsList_oncolumnchanged = function(obj,e)
        {
        	// 자동입력수량, 수동입력수랑 [스캔수량, 육안확인수량]
        	if (e.columnid == "autoInptQty" || e.columnid == "mnlInptQty") {
        		const nAutoQty   = nexacro.toNumber(obj.getColumn(e.row, "autoInptQty"), 0);
        		const nMnlQty    = nexacro.toNumber(obj.getColumn(e.row, "mnlInptQty"), 0);
        		const nCrynQty   = nexacro.toNumber(obj.getColumn(e.row, "crynQty"), 0);
        		const nAllRegQty = nexacro.toNumber(obj.getColumn(e.row, "allRegQty"), 0);

        		obj.setColumn(e.row, "hstryCrynQty", nAutoQty + nMnlQty);
        		obj.setColumn(e.row, "errQty", -(nCrynQty - (nAllRegQty + nAutoQty + nMnlQty)));
        	}
        };

        //승인
        this.divForm_divGrd_btnAply_onclick = function(obj,e)
        {
        	if (!this.gfnDsIsUpdated(this.dsList)) {
        		const nFindRow = this.dsList.findRowExpr("nexacro.toNumber(allRegQty, 0) != nexacro.toNumber(shpgotQty, 0)");
        		if (nFindRow == -1) {
        			this.gfnAlertMsg("msg3", "MSG_011", ["승인 처리할 내역이 존재하지 않습니다."]);
        			return false;
        		}
        	}

        	if (this.gfnDsIsUpdated(this.dsList)) {
        		this.gfnAlertMsg("msg4", "MSG_011", ["변경된 내역이 존재합니다.\n저장 먼저 처리하세요."]);
        		return false;
        	}

        	// 정산(과오) 수량은 0보다 큰 경우 승인불가
        	const nErrRow = this.dsList.findRowExpr("nexacro.toNumber(errQty, 0) > 0");
        	if (nErrRow > -1) {
        		this.dsList.rowposition = nErrRow;
        		this.gfnAlertMsg("msg5", "MSG_011", ["신청수량 이상 등록된 항목이 존재합니다."]);
        		return false;
        	}

        	// {0}(을)를 하시겠습니까?
        	this.gfnConfirmMsg("confirmAply", "CST_001", (sMsgId, oRet) => {
        		if (!JSON.parse(oRet).result) return;
        		this.fnAply();
        	}, null, null, null, ["승인"]);
        };

        //저장
        this.divForm_divGrd_btnSave_onclick = function(obj,e)
        {
        	if (!this.gfnDsIsUpdated(this.dsList)) {
        		this.gfnAlertMsg("msg6", "MSG_011", ["변경된 내역이 존재하지 않습니다."]);
        		return false;
        	}

        	//저장하시겠습니까?
        	this.gfnConfirmMsg("confirmSaveM", "MSG_003", (sMsgId, oRet) => {
        			if (!JSON.parse(oRet).result) {
        				return false;
        			} else {
        				this.fnSave();
        				return true;
        			}

        		}, null, null, null, null);
        };

        // 일괄등록팝업
        this.divForm_divGrd_btnGrdRegi_onclick = function(obj,e)
        {
        	const sTitle = "위해물품수량일괄등록";
        	const oArg = {
        	      gubun : "out"
        	     ,aplyNo : this.dsSearch.getColumn(0, "aplyNo")
        		 ,chckpntId : this.dsSearch.getColumn(0, "chckpntId")
        		 ,aplySeCd : this.divForm.form.divSch.form.cboAplySeCd.value
        		 ,cstrnNm : this.divForm.form.divSch.form.edtCstrnNm.value
        		 ,sprvsnCoNm : this.divForm.form.divSch.form.edtCoNm.value
        		 ,aplyDt : this.divForm.form.divSch.form.edtAplyDt.value
        		 ,rcptDt : this.divForm.form.divSch.form.edtRcptDt.value
        	};
        	const objOption = {
        		  popuptype : "modal"	//modal,modaless
        		// , autosize  : true
        		, title     : sTitle
        		// , resize    : true
        		, titlebar  : true
        		, width     : 950
        		, height    : 850
        	};

        	this.gfnOpenPopup("allReg", "work::CST/SEC/CST014P01.xfdl", oArg, function (sPopupId, sSaveXML) {
        		if (this.gfnIsNull(sSaveXML)) return;
        		this.dsReturn.loadXML(sSaveXML);

        		this.dsList.enableevent = false;
        		this.divForm.form.divGrd.form.grdList.enableredraw = false;

        		for (let i=0; i<this.dsReturn.getRowCount(); i++ ){
        			const nFindRow = this.dsList.findRowExpr(`dgadsCmdtyCrynShpgotCmdtyCsafAplyNo == '${this.dsReturn.getColumn(i, "dgadsCmdtyCrynShpgotCmdtyCsafAplyNo")}'
			                                       && dgadsCmdtyCrynShpgotAplyNo == '${this.dsReturn.getColumn(i, "dgadsCmdtyCrynShpgotAplyNo")}'`);

			this.dsList.setColumn(nFindRow, "autoInptQty", this.dsReturn.getColumn(i, "autoInptQty"));
        			this.dsList.setColumn(nFindRow, "mnlInptQty", this.dsReturn.getColumn(i, "mnlInptQty"));
        			this.dsList.setColumn(nFindRow, "hstryCrynQty", this.dsReturn.getColumn(i, "hstryCrynQty"));
        			this.dsList.setColumn(nFindRow, "errQty", this.dsReturn.getColumn(i, "errQty"));
        		}

        		this.divForm.form.divGrd.form.grdList.enableredraw = true;
        		this.dsList.enableevent = true;
        	}, objOption);
        };

        //하단 반출내역 삭제버튼
        this.divForm_divHstry_btnHstryDel_onclick = function(obj,e)
        {
        	const nDelRows = this.dsDtlList.extractRows("chk == 1");
        	if(nDelRows == -1 || nDelRows.length == 0){
        		this.gfnAlertMsg("msg7", "MSG_011", ["선택된 정보가 없습니다."]);
        		return false;
        	}

        	//승인된 물품은 삭제되지 않아서 하단 내용은 주석처리
        // 	const nFindRow = this.dsDtlList.findRowExpr("chk == 1 && nexacro.toNumber(crynQty, 0) > 0");
        // 	if (nFindRow > - 1) {
        // 		this.gfnAlertMsg("msg", "MSG_011", ["승인된 물품은 삭제할 수 없습니다."]);
        // 		return false;
        // 	}

        	nDelRows.reverse().forEach(nRow => this.dsDtlList.deleteRow(nRow));
        	// this.dsList.deleteMultiRows(nDelRows);
        };

        //하단 반출내역 저장버튼
        this.divForm_divHstry_btnHstrySave_onclick = function(obj,e)
        {
        	if (!this.gfnDsIsUpdated(this.dsDtlList)) {
        		this.gfnAlertMsg("msg8", "MSG_011", ["변경된 내역이 존재하지 않습니다."]);
        		return false;
        	}

        	//저장하시겠습니까?
        	this.gfnConfirmMsg("confirmSaveD", "MSG_003", (sMsgId, oRet) => {
        			if (!JSON.parse(oRet).result) {
        				return false;
        			} else {
        				this.fnSaveDtl();
        				return true;
        			}

        		}, null, null, null, null);
        };

        // 스캐너 이벤트 (임시)
        this.CST014M02_onkeyup = function(obj,e)
        {
        	/*
        	QR코드 생성규칙 확인필요!!!
        	*/

        	if (this.dsList.getRowCount() == 0) return;

        	// 스캐너일때 (이벤트는 확인해봐야함)
        	// if (e.fromreferenceobject != "scan") return;

        	// 일단 엔터키로
        	if (e.keycode != 13) return;

        	// QR코드 예상
        	// 관리번호? or 신청번호^위해물품신청번호^초소아이디
        	// this.edtQrCode.value = "5" + "^" + "SEC2410_00006" + "^" + "WAPWATCHBOX00002";
        	const sQrCode = this.edtQrCode.value;
        	// QR코드가 스캔 되면 해당 물품을 찾는다.
        	const nFindRow = this.dsList.findRowExpr(`dgadsCmdtyCrynShpgotCmdtyCsafAplyNo == '${sQrCode.split("^")[0]}'
	                                       && dgadsCmdtyCrynShpgotAplyNo == '${sQrCode.split("^")[1]}'
        										   && chckpntId == '${sQrCode.split("^")[2]}'`);
	if (nFindRow == -1) {
        		this.gfnAlertMsg("msg", "MSG_011", ["물품정보가 존재하지 않습니다."]);
         		return false;
        	}

        	this.fnSetQrCodeInfo(nFindRow);
        };

        //신청서 상세보기 버튼
        this.divForm_divGrd_btnAplcfm_onclick = function(obj,e)
        {
        	const sTitle = "위해물품반출상세내역";
        	const oArg = {
        	      aplyNo : this.dsSearch.getColumn(0, "aplyNo")
        		 ,chckpntId : this.dsSearch.getColumn(0, "chckpntId")
        		 ,aplySeCd : this.divForm.form.divSch.form.cboAplySeCd.value
        		 ,cstrnNm : this.divForm.form.divSch.form.edtCstrnNm.value
        		 ,sprvsnCoNm : this.divForm.form.divSch.form.edtCoNm.value
        		 ,aplyDt : this.divForm.form.divSch.form.edtAplyDt.value
        		 ,rcptDt : this.divForm.form.divSch.form.edtRcptDt.value
        	};
        	const objOption = {
        		  popuptype : "modal"	//modal,modaless
        		// , autosize  : true
        		, title     : sTitle
        		// , resize    : true
        		, titlebar  : true
        		, width     : 950
        		, height    : 850
        	};

        	this.gfnOpenPopup("popDtl", "work::CST/SEC/CST014P03.xfdl", oArg, function (sPopupId, oRtn) {
        		if (this.gfnIsNull(oRtn)) return;

        	}, objOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeyup",this.CST014M02_onkeyup,this);
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.divForm_divSch_btnSch_onclick,this);
            this.divForm.form.divSch.form.staLabel02_00_00.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.staLabel02_00_00_00_00.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.staLabel02_00_00_00_01.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.staLabel02_00_00_00_01_00.addEventHandler("onclick",this.divForm_Div00_sta00_00_01_01_onclick,this);
            this.divForm.form.divSch.form.divPop.form.btnDgads.addEventHandler("onclick",this.divForm_divSch_divPop_btnDgads_onclick,this);
            this.divForm.form.divGrd.form.btnGrdRegi.addEventHandler("onclick",this.divForm_divGrd_btnGrdRegi_onclick,this);
            this.divForm.form.divGrd.form.btnAply.addEventHandler("onclick",this.divForm_divGrd_btnAply_onclick,this);
            this.divForm.form.divGrd.form.btnAplcfm.addEventHandler("onclick",this.divForm_divGrd_btnAplcfm_onclick,this);
            this.divForm.form.divGrd.form.btnSave.addEventHandler("onclick",this.divForm_divGrd_btnSave_onclick,this);
            this.divForm.form.divGrd.form.grdList.addEventHandler("onkeydown",this.divForm_divGrd_grdList_onkeydown,this);
            this.divForm.form.divHstry.form.btnHstryDel.addEventHandler("onclick",this.divForm_divHstry_btnHstryDel_onclick,this);
            this.divForm.form.divHstry.form.btnHstrySave.addEventHandler("onclick",this.divForm_divHstry_btnHstrySave_onclick,this);
            this.divForm.form.divHstry.form.grdList.addEventHandler("onkeydown",this.divForm_divGrd_grdList_onkeydown,this);
            this.dsSearch.addEventHandler("cancolumnchange",this.dsSearch_cancolumnchange,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_oncolumnchanged,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsDtlList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsDtlList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("CST014M02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
