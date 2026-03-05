(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM031M15");
            this.set_titletext("현황도 기반 처리 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1772);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cbo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"hh\" type=\"STRING\" size=\"256\"/><Column id=\"mm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hh\">선택</Col><Col id=\"code\">0</Col><Col id=\"mm\">선택</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"hh\">01</Col><Col id=\"mm\">5</Col></Row><Row><Col id=\"hh\">02</Col><Col id=\"code\">2</Col><Col id=\"mm\">10</Col></Row><Row><Col id=\"hh\">03</Col><Col id=\"code\">3</Col><Col id=\"mm\">15</Col></Row><Row><Col id=\"hh\">04</Col><Col id=\"code\">4</Col><Col id=\"mm\">20</Col></Row><Row><Col id=\"hh\">05</Col><Col id=\"code\">5</Col><Col id=\"mm\">25</Col></Row><Row><Col id=\"hh\">06</Col><Col id=\"code\">6</Col><Col id=\"mm\">30</Col></Row><Row><Col id=\"hh\">07</Col><Col id=\"code\">7</Col><Col id=\"mm\">35</Col></Row><Row><Col id=\"hh\">08</Col><Col id=\"code\">8</Col><Col id=\"mm\">40</Col></Row><Row><Col id=\"hh\">09</Col><Col id=\"code\">9</Col><Col id=\"mm\">45</Col></Row><Row><Col id=\"hh\">10</Col><Col id=\"code\">10</Col><Col id=\"mm\">50</Col></Row><Row><Col id=\"hh\">11</Col><Col id=\"code\">11</Col><Col id=\"mm\">60</Col></Row><Row><Col id=\"hh\">12</Col><Col id=\"code\">12</Col></Row><Row><Col id=\"hh\">13</Col><Col id=\"code\">13</Col></Row><Row><Col id=\"hh\">14</Col><Col id=\"code\">14</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"hh\">15</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"신청번호\" type=\"STRING\" size=\"256\"/><Column id=\"단계\" type=\"STRING\" size=\"256\"/><Column id=\"구분\" type=\"STRING\" size=\"256\"/><Column id=\"종료구분\" type=\"STRING\" size=\"256\"/><Column id=\"서비스\" type=\"STRING\" size=\"256\"/><Column id=\"발생일시\" type=\"STRING\" size=\"256\"/><Column id=\"작성일시\" type=\"STRING\" size=\"256\"/><Column id=\"작성자명\" type=\"STRING\" size=\"256\"/><Column id=\"연락처\" type=\"STRING\" size=\"256\"/><Column id=\"업체명\" type=\"STRING\" size=\"256\"/><Column id=\"내용\" type=\"STRING\" size=\"256\"/><Column id=\"처리자명\" type=\"STRING\" size=\"256\"/><Column id=\"처리완료일시\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"신청번호\">ptn01</Col><Col id=\"단계\">이동지역</Col><Col id=\"구분\">2024-10-21</Col><Col id=\"종료구분\">전*동</Col><Col id=\"서비스\">0000100001</Col><Col id=\"발생일시\">대한항공</Col><Col id=\"작성일시\">110-81-*****</Col><Col id=\"작성자명\"/><Col id=\"연락처\">2050-06-11</Col><Col id=\"업체명\"/><Col id=\"내용\">032-***-0000</Col><Col id=\"처리자명\">010-****-5678</Col><Col id=\"처리완료일시\">○</Col></Row><Row><Col id=\"신청번호\">steg1</Col><Col id=\"단계\">입주자</Col><Col id=\"구분\">2024-10-15</Col><Col id=\"종료구분\">홍*동</Col><Col id=\"서비스\">100000001</Col><Col id=\"발생일시\">㈜대한항공</Col><Col id=\"작성일시\">110-81-*****</Col><Col id=\"작성자명\"/><Col id=\"연락처\">2050-07-10</Col></Row><Row><Col id=\"신청번호\">steg1</Col><Col id=\"단계\">공사직원</Col><Col id=\"구분\">2024-09-21</Col><Col id=\"종료구분\">오*수</Col><Col id=\"서비스\">100000001</Col><Col id=\"발생일시\">인천국제공항공사</Col><Col id=\"작성일시\">123-45-*****</Col><Col id=\"작성자명\"/><Col id=\"연락처\">9000-12-31</Col><Col id=\"업체명\">터미널건축팀</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dataSet00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:10",null,"1632","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divInfoGuide","1660.00","262","100%","300",null,null,null,null,"300",null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("서비스 흐름 및 작업방법 안내");
            obj.set_cssclass("div_WF_InfoGuide");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSchClose",null,"10","34","34","10",null,null,null,null,null,this.divForm.form.divInfoGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ACPlus");
            this.divForm.form.divInfoGuide.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100.00%","196",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","98",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01\"/><PanelItem id=\"PanelItem01\" componentid=\"pan02\"/><PanelItem id=\"PanelItem06\" componentid=\"pan03\"/><PanelItem id=\"PanelItem04\" componentid=\"pan04\"/><PanelItem id=\"PanelItem02\" componentid=\"pan05\"/><PanelItem id=\"PanelItem05\" componentid=\"pan06\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan05","20.00","67","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_text("현황도공간정보");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","30","30",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_SchClose");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_cbo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divCal","1030","75","330","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_flexgrow("1");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","0","150","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Static("staDash","Calendar00:10","0","10","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Dash");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","staDash:10","0","150","40",null,null,null,null,null,null,this.divForm.form.divSch.form.divCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divForm.form.divSch.form.divCal.addChild(obj.name, obj);

            obj = new Panel("pan01","20.00","67","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("10");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"divCal\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_02","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("분야");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_00","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_cbo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","20.00","67","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("13");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_02\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_03","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("14");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_01","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_cbo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan03","20.00","67","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("16");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_03\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_01\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("17");
            obj.set_text("현황도");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_02","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_cbo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan04","20.00","67","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("19");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_02\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_04","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("20");
            obj.set_text("현황도유형");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cbo00_03","200.00","128","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_cbo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan06","20.00","67","420","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("22");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_04\"/><PanelItem id=\"PanelItem01\" componentid=\"cbo00_03\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("div00","51","537","100%","500",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("div00");
            this.divForm.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","10","100%","576",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_binddataset("dataSet00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\" band=\"head\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"구분\"/><Cell col=\"1\" colspan=\"4\" text=\"1월\"/><Cell col=\"5\" rowspan=\"2\"/><Cell col=\"6\" colspan=\"4\" text=\"합계\"/><Cell row=\"1\" col=\"1\" text=\"신청\"/><Cell row=\"1\" col=\"2\" text=\"접수\"/><Cell row=\"1\" col=\"3\" text=\"처리\"/><Cell row=\"1\" col=\"4\" text=\"완료\"/><Cell row=\"1\" col=\"6\" text=\"신청\"/><Cell row=\"1\" col=\"7\" text=\"접수\"/><Cell row=\"1\" col=\"8\" text=\"처리\"/><Cell row=\"1\" col=\"9\" text=\"완료\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" rowspan=\"4\" text=\"월생략\" cssclass=\"CellHead\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/><Cell row=\"1\" col=\"9\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\"/><Cell row=\"2\" col=\"2\"/><Cell row=\"2\" col=\"3\"/><Cell row=\"2\" col=\"4\"/><Cell row=\"2\" col=\"6\"/><Cell row=\"2\" col=\"7\"/><Cell row=\"2\" col=\"8\"/><Cell row=\"2\" col=\"9\"/><Cell row=\"3\"/><Cell row=\"3\" col=\"1\"/><Cell row=\"3\" col=\"2\"/><Cell row=\"3\" col=\"3\"/><Cell row=\"3\" col=\"4\"/><Cell row=\"3\" col=\"6\"/><Cell row=\"3\" col=\"7\"/><Cell row=\"3\" col=\"8\"/><Cell row=\"3\" col=\"9\"/></Band></Format></Formats>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0","divForm:20",null,"60","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_01","200.00","365","175","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("연간 휴일정보 초기화");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btn00_01_00","200.00","365","175","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("2");
            obj.set_text("월간 휴일정보 초기화");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("btn00_01_00_00","200.00","365","179","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("3");
            obj.set_text("누락된 일자 자동 채움");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","68","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divInfoGuide.form
            obj = new Layout("default","",0,0,this.divForm.form.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSchClose.set_taborder("0");
                p.btnSchClose.set_cssclass("btn_WF_ACPlus");
                p.btnSchClose.move(null,"10","34","34","10",null);
            	}
            );
            this.divForm.form.divInfoGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divInfoGuide.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divInfoGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divInfoGuide.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divInfoGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divInfoGuide.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divInfoGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divSch.form.divCal.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form.divCal.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Calendar00.set_taborder("0");
                p.Calendar00.set_dateformat("yyyy-MM-dd");
                p.Calendar00.move("0","0","150","40",null,null);

                p.staDash.set_taborder("1");
                p.staDash.set_text("~");
                p.staDash.set_cssclass("sta_WF_Dash");
                p.staDash.move("Calendar00:10","0","10","40",null,null);

                p.Calendar01.set_taborder("2");
                p.Calendar01.set_dateformat("yyyy-MM-dd");
                p.Calendar01.move("staDash:10","0","150","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            this.divForm.form.divSch.form.divCal.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form.divCal.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divSch.form.divCal.form,
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
                p.panLabel.set_horizontalgap("40");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","98",null,null);

                p.pan05.set_taborder("1");
                p.pan05.set_type("horizontal");
                p.pan05.set_horizontalgap("10");
                p.pan05.set_flexwrap("nowrap");
                p.pan05.set_fittocontents("height");
                p.pan05.set_flexgrow("1");
                p.pan05.set_minwidth("");
                p.pan05.move("20.00","67","420","40",null,null);

                p.staLabel03.set_taborder("6");
                p.staLabel03.set_text("현황도공간정보");
                p.staLabel03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03.set_flexshrink("0");
                p.staLabel03.set_maxwidth("");
                p.staLabel03.move("0","0","100","40",null,null);

                p.panClose.set_taborder("3");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSchClose.set_taborder("2");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","30","30",null,null);

                p.panSchBtn.set_taborder("4");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.btnSch.set_taborder("5");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.cbo00.set_taborder("7");
                p.cbo00.set_innerdataset("ds_cbo");
                p.cbo00.set_codecolumn("code");
                p.cbo00.set_datacolumn("data");
                p.cbo00.set_displaynulltext("선택");
                p.cbo00.set_text("");
                p.cbo00.set_index("-1");
                p.cbo00.move("200.00","128","100%","40",null,null);

                p.staLabel03_01.set_taborder("8");
                p.staLabel03_01.set_text("기간");
                p.staLabel03_01.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_01.set_flexshrink("0");
                p.staLabel03_01.set_maxwidth("");
                p.staLabel03_01.move("0","0","100","40",null,null);

                p.divCal.set_taborder("9");
                p.divCal.set_text("Div00");
                p.divCal.set_flexgrow("1");
                p.divCal.set_formscrollbartype("none none");
                p.divCal.set_formscrolltype("none");
                p.divCal.move("1030","75","330","40",null,null);

                p.pan01.set_taborder("10");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_flexwrap("nowrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_flexgrow("1");
                p.pan01.set_minwidth("");
                p.pan01.move("20.00","67","420","40",null,null);

                p.staLabel03_02.set_taborder("11");
                p.staLabel03_02.set_text("분야");
                p.staLabel03_02.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_02.set_flexshrink("0");
                p.staLabel03_02.set_maxwidth("");
                p.staLabel03_02.move("0","0","100","40",null,null);

                p.cbo00_00.set_taborder("12");
                p.cbo00_00.set_innerdataset("ds_cbo");
                p.cbo00_00.set_codecolumn("code");
                p.cbo00_00.set_datacolumn("data");
                p.cbo00_00.set_displaynulltext("선택");
                p.cbo00_00.set_text("");
                p.cbo00_00.set_index("-1");
                p.cbo00_00.move("200.00","128","100%","40",null,null);

                p.pan02.set_taborder("13");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_flexwrap("nowrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_flexgrow("1");
                p.pan02.set_minwidth("");
                p.pan02.move("20.00","67","420","40",null,null);

                p.staLabel03_03.set_taborder("14");
                p.staLabel03_03.set_text("구분");
                p.staLabel03_03.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_03.set_flexshrink("0");
                p.staLabel03_03.set_maxwidth("");
                p.staLabel03_03.move("0","0","100","40",null,null);

                p.cbo00_01.set_taborder("15");
                p.cbo00_01.set_innerdataset("ds_cbo");
                p.cbo00_01.set_codecolumn("code");
                p.cbo00_01.set_datacolumn("data");
                p.cbo00_01.set_displaynulltext("선택");
                p.cbo00_01.set_text("");
                p.cbo00_01.set_index("-1");
                p.cbo00_01.move("200.00","128","100%","40",null,null);

                p.pan03.set_taborder("16");
                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("10");
                p.pan03.set_flexwrap("nowrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_flexgrow("1");
                p.pan03.set_minwidth("");
                p.pan03.move("20.00","67","420","40",null,null);

                p.staLabel03_00.set_taborder("17");
                p.staLabel03_00.set_text("현황도");
                p.staLabel03_00.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_00.set_flexshrink("0");
                p.staLabel03_00.set_maxwidth("");
                p.staLabel03_00.move("0","0","100","40",null,null);

                p.cbo00_02.set_taborder("18");
                p.cbo00_02.set_innerdataset("ds_cbo");
                p.cbo00_02.set_codecolumn("code");
                p.cbo00_02.set_datacolumn("data");
                p.cbo00_02.set_displaynulltext("선택");
                p.cbo00_02.set_text("");
                p.cbo00_02.set_index("-1");
                p.cbo00_02.move("200.00","128","100%","40",null,null);

                p.pan04.set_taborder("19");
                p.pan04.set_type("horizontal");
                p.pan04.set_horizontalgap("10");
                p.pan04.set_flexwrap("nowrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_flexgrow("1");
                p.pan04.set_minwidth("");
                p.pan04.move("20.00","67","420","40",null,null);

                p.staLabel03_04.set_taborder("20");
                p.staLabel03_04.set_text("현황도유형");
                p.staLabel03_04.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_04.set_flexshrink("0");
                p.staLabel03_04.set_maxwidth("");
                p.staLabel03_04.move("0","0","100","40",null,null);

                p.cbo00_03.set_taborder("21");
                p.cbo00_03.set_innerdataset("ds_cbo");
                p.cbo00_03.set_codecolumn("code");
                p.cbo00_03.set_datacolumn("data");
                p.cbo00_03.set_displaynulltext("선택");
                p.cbo00_03.set_text("");
                p.cbo00_03.set_index("-1");
                p.cbo00_03.move("200.00","128","100%","40",null,null);

                p.pan06.set_taborder("22");
                p.pan06.set_type("horizontal");
                p.pan06.set_horizontalgap("10");
                p.pan06.set_flexwrap("nowrap");
                p.pan06.set_fittocontents("height");
                p.pan06.set_flexgrow("1");
                p.pan06.set_minwidth("");
                p.pan06.move("20.00","67","420","40",null,null);
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
                p.pan01.set_flexwrap("wrap");
                p.pan01.move("20.00","67","440","40",null,null);

                p.pan02.move("20.00","67","440","40",null,null);

                p.pan03.move("20.00","67","440","40",null,null);

                p.pan04.move("20.00","67","440","40",null,null);

                p.pan05.move("20.00","67","440","40",null,null);

                p.pan06.move("20.00","67","440","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.div00
            obj = new Layout("default","",0,0,this.divForm.form.div00.form,function(p){});
            this.divForm.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divInfoGuide.set_taborder("1");
                p.divInfoGuide.set_text("서비스 흐름 및 작업방법 안내");
                p.divInfoGuide.set_cssclass("div_WF_InfoGuide");
                p.divInfoGuide.set_visible("false");
                p.divInfoGuide.set_minheight("300");
                p.divInfoGuide.set_maxheight("");
                p.divInfoGuide.move("1660.00","262","100%","300",null,null);

                p.divSch.set_taborder("0");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","100.00%","196",null,null);

                p.div00.set_taborder("2");
                p.div00.set_text("div00");
                p.div00.move("51","537","100%","500",null,null);

                p.Grid00_00.set_taborder("3");
                p.Grid00_00.set_binddataset("dataSet00");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.move("0","10","100%","576",null,null);
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
                p.Grid00_00.set_autofittype("none");
            	}
            );
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00_01.set_taborder("0");
                p.btn00_01.set_text("연간 휴일정보 초기화");
                p.btn00_01.set_cssclass("btn_WF_No");
                p.btn00_01.set_fittocontents("width");
                p.btn00_01.move("200.00","365","175","40",null,null);

                p.btn00_01_00.set_taborder("2");
                p.btn00_01_00.set_text("월간 휴일정보 초기화");
                p.btn00_01_00.set_cssclass("btn_WF_No");
                p.btn00_01_00.set_fittocontents("width");
                p.btn00_01_00.move("200.00","365","175","40",null,null);

                p.btn00_01_00_00.set_taborder("3");
                p.btn00_01_00_00.set_text("누락된 일자 자동 채움");
                p.btn00_01_00_00.set_cssclass("btn_WF_No");
                p.btn00_01_00_00.set_fittocontents("width");
                p.btn00_01_00_00.move("200.00","365","179","40",null,null);

                p.Button00_00.set_taborder("1");
                p.Button00_00.set_text("확인");
                p.Button00_00.set_cssclass("btn_WF_Yes");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("457.00","30","68","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divPopBtn.form,
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
            obj.set_horizontalgap("10");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("Layout0","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("start");
            obj.set_type("horizontal");
            this.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,1772,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("현황도 기반 처리 현황");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","divTitle:10",null,"1632","60",null);

                p.divPopBtn.set_taborder("2");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0","divForm:20",null,"60","60",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,1772,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.move("0","0",null,"50","0",null);

                p.divForm.move("0","divTitle:10",null,"1632","0",null);

                p.divPopBtn.move("0","divForm:20",null,"60","0",null);
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.registerScript("COM031M15.xfdl", function() {
        this.form_onload = function(obj,e)
        {
        	this.divForm.form.divSch.set_width("100%");
        	this.divForm.form.divSch.fittocontents = "height";
        }



        this.divForm_divSch_btnSchClose_onclick = function(obj,e)
        {
        	this.divForm.form.divSch.form.panLabel.fittocontents="none";
        	this.divForm.form.divSch.form.panLabel.set_height("45px");
        	this.divForm.form.divSch.fittocontents="none";
        	this.divForm.form.divSch.set_height("145px");
        	this.divForm.form.divSch.form.btnSchClose.set_cssclass("btn_WF_SchOpen");
        	this.resetScroll();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divInfoGuide.form.btnSchClose.addEventHandler("onclick",this.divInfoGuide_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.btnSchClose.addEventHandler("onclick",this.divForm_divSch_btnSchClose_onclick,this);
            this.divForm.form.divSch.form.cbo00.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.divForm.form.divSch.form.cbo00_00.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.divForm.form.divSch.form.cbo00_01.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.divForm.form.divSch.form.cbo00_02.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.divForm.form.divSch.form.cbo00_03.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
        };
        this.loadIncludeScript("COM031M15.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
