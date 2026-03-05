(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST006M01");
            this.set_titletext("투입자재 미치 공구류 등");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu00", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">01</Col><Col id=\"MENU_NM\">상세메뉴1</Col></Row><Row><Col id=\"MENU_CD\">02</Col><Col id=\"MENU_NM\">상세메뉴2</Col></Row><Row><Col id=\"MENU_CD\">03</Col><Col id=\"MENU_NM\">상세메뉴3</Col></Row><Row><Col id=\"MENU_CD\">04</Col><Col id=\"MENU_NM\">상세메뉴4</Col></Row><Row><Col id=\"MENU_CD\">05</Col><Col id=\"MENU_NM\">상세메뉴5</Col></Row><Row><Col id=\"MENU_CD\">06</Col><Col id=\"MENU_NM\">상세메뉴6</Col></Row><Row><Col id=\"MENU_CD\">07</Col><Col id=\"MENU_NM\">상세메뉴7</Col></Row><Row><Col id=\"MENU_CD\">08</Col><Col id=\"MENU_NM\">상세메뉴8</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsQuick", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">기본정보</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"title\">임차관련 정보</Col><Col id=\"code\">1</Col></Row><Row><Col id=\"title\">기타요청정보</Col><Col id=\"code\">2</Col></Row><Row><Col id=\"title\">증빙자료 첨부</Col><Col id=\"code\">3</Col></Row><Row><Col id=\"title\">임차희망서 검토의견</Col><Col id=\"code\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"hh\" type=\"STRING\" size=\"256\"/><Column id=\"mm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hh\">선택</Col><Col id=\"code\">0</Col><Col id=\"mm\">선택</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"hh\">01</Col><Col id=\"mm\">5</Col></Row><Row><Col id=\"hh\">02</Col><Col id=\"code\">2</Col><Col id=\"mm\">10</Col></Row><Row><Col id=\"hh\">03</Col><Col id=\"code\">3</Col><Col id=\"mm\">15</Col></Row><Row><Col id=\"hh\">04</Col><Col id=\"code\">4</Col><Col id=\"mm\">20</Col></Row><Row><Col id=\"hh\">05</Col><Col id=\"code\">5</Col><Col id=\"mm\">25</Col></Row><Row><Col id=\"hh\">06</Col><Col id=\"code\">6</Col><Col id=\"mm\">30</Col></Row><Row><Col id=\"hh\">07</Col><Col id=\"code\">7</Col><Col id=\"mm\">35</Col></Row><Row><Col id=\"hh\">08</Col><Col id=\"code\">8</Col><Col id=\"mm\">40</Col></Row><Row><Col id=\"hh\">09</Col><Col id=\"code\">9</Col><Col id=\"mm\">45</Col></Row><Row><Col id=\"hh\">10</Col><Col id=\"code\">10</Col><Col id=\"mm\">50</Col></Row><Row><Col id=\"hh\">11</Col><Col id=\"code\">11</Col><Col id=\"mm\">60</Col></Row><Row><Col id=\"hh\">12</Col><Col id=\"code\">12</Col></Row><Row><Col id=\"hh\">13</Col><Col id=\"code\">13</Col></Row><Row><Col id=\"hh\">14</Col><Col id=\"code\">14</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"hh\">15</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"체크\" type=\"STRING\" size=\"256\"/><Column id=\"작업일\" type=\"STRING\" size=\"256\"/><Column id=\"작업시작시간\" type=\"STRING\" size=\"256\"/><Column id=\"작업종료시간\" type=\"STRING\" size=\"256\"/><Column id=\"개요\" type=\"STRING\" size=\"256\"/><Column id=\"작업내역\" type=\"STRING\" size=\"256\"/><Column id=\"작업자회사\" type=\"STRING\" size=\"256\"/><Column id=\"신청자\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fullName\">Iaad010101 [PDF, 328KB]</Col><Col id=\"fileSz\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Panel("panForm","0","0","100.00%","2375",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem05\" componentid=\"div00_01_01_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_00\"/><PanelItem id=\"PanelItem06\" componentid=\"div00_01_01_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle03","40","3210","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("투입자재 미치 공구류 등(위해물품 및 위험물 포함)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","860","3210","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","40","3210","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("3");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_03","750","3170","34","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02","740","3176","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Div("div00_01_01_00_00","1400","331","100.00%","240",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","120",null,null,null,null,null,null,this.div00_01_01_00_00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.div00_01_01_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_01_00_00.form);
            obj.set_taborder("1");
            obj.set_text("투입자재 및 공구류 반입여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_01_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","84","300","110",null,null,null,null,null,null,this.div00_01_01_00_00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Radio01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00\"/></Contents>");
            this.div00_01_01_00_00.addChild(obj.name, obj);

            obj = new Radio("Radio01","74","77","100%","40",null,null,null,null,null,null,this.div00_01_01_00_00.form);
            obj.set_taborder("3");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div00_01_01_00_00_form_Radio01_innerdataset = new nexacro.NormalDataset("div00_01_01_00_00_form_Radio01_innerdataset", obj);
            div00_01_01_00_00_form_Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(div00_01_01_00_00_form_Radio01_innerdataset);
            obj.set_text("신청자정보와 동일");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_01_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","758","127","100%","40",null,null,null,null,null,null,this.div00_01_01_00_00.form);
            obj.set_taborder("4");
            obj.set_text("보호구역에 위해물품 등을 반입할 경우 작업신고서/이동지역 작업계획서의 관리번호를 식별 가능한 공구류 및 공구함 등에 부착하여야합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_01_01_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_01_00_00.form);
            obj.set_taborder("5");
            obj.set_text("항공기 내 반입금지 물품(국토교통부고시) 문서 읽음여부");
            obj.set_cssclass("sta_WF_Label");
            this.div00_01_01_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20.00","84","300","110",null,null,null,null,null,null,this.div00_01_01_00_00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.div00_01_01_00_00.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0","60","100.00%","120",null,null,null,null,null,null,this.div00_01_01_00_00.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/></Contents>");
            this.div00_01_01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00","210","231","69","34",null,null,null,null,null,null,this.div00_01_01_00_00.form);
            obj.set_taborder("9");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_SmallGray");
            obj.set_fittocontents("width");
            this.div00_01_01_00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","80","240","74","40",null,null,null,null,null,null,this.div00_01_01_00_00.form);
            obj.set_taborder("8");
            obj.set_text("읽음");
            obj.set_value("true");
            this.div00_01_01_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","240","270","40",null,null,null,null,null,null,this.div00_01_01_00_00.form);
            obj.set_taborder("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"CheckBox00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00\"/></Contents>");
            this.div00_01_01_00_00.addChild(obj.name, obj);

            obj = new Div("div00_01_01_00_00_00","1530","346","100%","1995",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","327",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("예시 (표 참조)");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","84","980","316",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem03\" componentid=\"Grid00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00\"/><PanelItem id=\"PanelItem05\" componentid=\"Static02\"/><PanelItem id=\"PanelItem02\" componentid=\"Static01\"/></Contents>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","72","100.00%","178",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"물품명\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"규격(길이/용량)\"/><Cell col=\"5\" text=\"비고\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:체크\"/><Cell col=\"1\" text=\"bind:작업일\"/><Cell col=\"2\" text=\"bind:작업시작시간\"/><Cell col=\"3\" text=\"bind:작업종료시간\"/><Cell col=\"4\" text=\"bind:개요\"/><Cell col=\"5\" text=\"bind:작업내역\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02","70","262","100%","40",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("위험물의 경우 규격란에 용량(ex. 100ml, 100g) 으로 기재");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","758","127","100%","40",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("수기 등록으로 25개 이상 신청 시 [임시저장] 후 연속하여 신청이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","141","261","100%","40",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("셋트 물품의 경우 최소단위부터 최대단위까지의 규격(ex. 10/12/14cm)을 모두 기재");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("투입자재 및 공구류 목록 기재");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20.00","84","96.08%","260",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divGrd\"/></Contents>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0","60","100.00%","271",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/></Contents>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","726","96.08%","172",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Des");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03\"/><PanelItem id=\"PanelItem01\" componentid=\"Static04\"/><PanelItem id=\"PanelItem02\" componentid=\"Static05\"/><PanelItem id=\"PanelItem03\" componentid=\"Static06\"/></Contents>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static04","62","766","100%","40",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("15");
            obj.set_text("보호구역 내 위해물품 및 위험물 반입은 업무에 필요한 최소 범위로 신청하며, 허가된 물품만 반입 사용 가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Div("divGrd","0","30","100%","210",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("10");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"0","550","34","0",null,null,null,null,null,this.div00_01_01_00_00_00.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnGrdAdd00\"/><PanelItem id=\"PanelItem03\" componentid=\"btnGrdAdd\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/></Contents>");
            this.div00_01_01_00_00_00.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","panGrdBtn:10","100.00%","166",null,null,null,null,null,null,this.div00_01_01_00_00_00.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"물품명\" cssclass=\"CellE\"/><Cell col=\"3\" text=\"수량\" cssclass=\"CellE\"/><Cell col=\"4\" text=\"단위\" cssclass=\"CellE\"/><Cell col=\"5\" text=\"규격(길이/용량)\" cssclass=\"CellE\"/><Cell col=\"6\" text=\"비고\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.div00_01_01_00_00_00.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd","774.00","10","47","34",null,null,null,null,null,null,this.div00_01_01_00_00_00.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.div00_01_01_00_00_00.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","804.00","10","45","34",null,null,null,null,null,null,this.div00_01_01_00_00_00.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.div00_01_01_00_00_00.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd00","458.00","10","131","34",null,null,null,null,null,null,this.div00_01_01_00_00_00.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("물품목록일괄업로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.div00_01_01_00_00_00.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("보호구역 내 위해물품 사용 관련 준수사항");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","20.00","648","96.08%","308",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static07\"/><PanelItem id=\"PanelItem03\" componentid=\"Static08\"/></Contents>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00","0","648","100.00%","328",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00\"/></Contents>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","102","1055","150","40",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("24");
            obj.set_text("동의");
            obj.set_value("true");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static08","140","927","100%","40",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("20");
            obj.set_text("관련규정에 따른 보호구역 출입정지(출입증 소지자 또는 인솔자) 등의 제재와 관련하여 인천국제공항공사에 이의를 제기하지 않음을 서약합니다.");
            obj.set_fittocontents("height");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static07","111","885","100%","40",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("19");
            obj.set_text("상기 사항에 대하여 철저히 준수하며, 만일 위반사항 발생 시 관계기관 통보, 위해물품 및 위험물 반입 금지 조치,");
            obj.set_fittocontents("height");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static06","86","855","100%","40",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("17");
            obj.set_text("보호구역 내 위해물품 및 위험물 방치 및 분실되지 않도록 관리");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static05","121","852","100%","40",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("16");
            obj.set_text("상주직원 초소 및 보호구역 내 위해물품 점검 시 작업신고서 제출 등 보안통제에 적극 협조");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static03","80","897","100%","40",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("14");
            obj.set_text("보호구역 내 위해물품 및 위험물 반입 사용 시, 국가항공보안계획 및 인천국제공항 자체보안계획에서 정한 사항 준수");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_text("위해물품사용 준수사항동의여부");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00","20.00","648","300","90",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox00\"/></Contents>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00_00","0","648","100.00%","101",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("23");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00\"/></Contents>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00","95","1210","120","34",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("33");
            obj.set_text("외곽초소 위치도");
            obj.set_cssclass("btn_WF_SmallGray");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("반입초소지정");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00_00","20.00","1077","300","90",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("26");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00_00_00","0","1077","100.00%","380",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("27");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02Blank\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02","20","1167","100%","279",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_spacing("5px 0px 0px 0px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static09\"/><PanelItem id=\"PanelItem02\" componentid=\"Static10\"/><PanelItem id=\"PanelItem03\" componentid=\"Static11\"/><PanelItem id=\"PanelItem04\" componentid=\"Static12\"/><PanelItem id=\"PanelItem05\" componentid=\"Static13\"/></Contents>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static13","195","1412","100%","40",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("38");
            obj.set_text("입.출시 동일 출입구 이용");
            obj.set_cssclass("sta_WF_Des3");
            obj.set_fittocontents("height");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static12","138","1421","100%","57",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("37");
            obj.set_text("* 예) (E구역 내 부대건물) 주변전소A 공사/작업 시, 최초 반입하는 초소(G1) 선택\r\n* 예) (E구역 외 부대건물) ICT센터 공사/작업 시, 부대건물-ICT센터 선택");
            obj.set_cssclass("sta_WF_Des2");
            obj.set_fittocontents("height");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static11","147","1365","100%","40",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("36");
            obj.set_text("부대건물 선택 시, 표출되지 않는 E구역(항공기 이동지역) 내 부대건물 공사/작업의 경우 최초 반입하는 초소 선택");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static10","127","1275","100%","40",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("35");
            obj.set_text("출국심사장 내 공사/작업 시 “출국심사장” 선택");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static09","92","1225","100%","40",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("34");
            obj.set_text("출입하는 구역을 구분하여 해당 초소 선택(“전 초소(외곽/터미널)” 선택 시 반려될 수 있음)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan02Blank","520","1077","300","1",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("31");
            obj.set_flexgrow("1");
            obj._setContents("");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","131","1132","150","40",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("28");
            obj.set_flexgrow("1");
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("-1");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo01","217","1146","150","40",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("29");
            obj.set_flexgrow("1");
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("-1");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel01","20","1140","100%","40",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("30");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Combo01\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00\"/></Contents>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("선택사유 및 이용예정초소");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00_00_00","20.00","1077","980","170",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("40");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"TextArea00\"/></Contents>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00_00_00_00","0","1077","100.00%","269",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("41");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03\"/></Contents>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static15","252","1757","100%","40",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("44");
            obj.set_text("외곽/터미널 초소를 모두 이용할 경우 협의부서에서 확인이 가능하도록 작업내용에 기재요청");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static14","80","1715","100%","40",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("43");
            obj.set_text("예시 : 위의 작업을 수행하기 위하여 (G1, G7, 3층 중앙 초소, 지하1층 동편 초소) 출입예정");
            obj.set_cssclass("sta_WF_Des2");
            obj.set_fittocontents("height");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel03","20","1661","100%","90",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("45");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj.set_spacing("5px 0px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static14\"/><PanelItem id=\"PanelItem01\" componentid=\"Static15\"/></Contents>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","84","1558","100%","120",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("42");
            obj.set_displaynulltext("내용 입력");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("46");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","53","302","100%","100",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("47");
            obj.set_displaynulltext("내용 입력");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","20.00","371","100.00%","166",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("48");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"801\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"별첨\"/><Cell col=\"1\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:체크\"/><Cell col=\"1\" text=\"bind:신청자\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","583","508","100%","40",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("49");
            obj.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","0","980","376",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("50");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00_00\"/></Contents>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","267","100.00%","426",null,null,null,null,null,null,this.div00_01_01_00_00_00.form);
            obj.set_taborder("51");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/></Contents>");
            this.div00_01_01_00_00_00.addChild(obj.name, obj);

            obj = new Static("staSubTitle03_00","10","30","86.48%","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("투입자재 및 공구류 목록 기재 예시 및 유의사항");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_03_00","94","18","34","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02_00","138","16","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","1117","30","172","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","10","386","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("12");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00_01_01_00_00.form
            obj = new Layout("default","",0,0,this.div00_01_01_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","120",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("투입자재 및 공구류 반입여부");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("20.00","84","300","110",null,null);

                p.Radio01.set_taborder("3");
                p.Radio01.set_fittocontents("width");
                p.Radio01.set_innerdataset(div00_01_01_00_00_form_Radio01_innerdataset);
                p.Radio01.set_codecolumn("codecolumn");
                p.Radio01.set_datacolumn("datacolumn");
                p.Radio01.set_direction("vertical");
                p.Radio01.set_value("0");
                p.Radio01.set_index("0");
                p.Radio01.move("74","77","100%","40",null,null);

                p.Static00.set_taborder("4");
                p.Static00.set_text("보호구역에 위해물품 등을 반입할 경우 작업신고서/이동지역 작업계획서의 관리번호를 식별 가능한 공구류 및 공구함 등에 부착하여야합니다.");
                p.Static00.set_cssclass("sta_WF_Des");
                p.Static00.set_fittocontents("height");
                p.Static00.move("758","127","100%","40",null,null);

                p.staLabel00_00.set_taborder("5");
                p.staLabel00_00.set_text("항공기 내 반입금지 물품(국토교통부고시) 문서 읽음여부");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_00.set_taborder("6");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("20.00","84","300","110",null,null);

                p.pan00_00.set_taborder("7");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_verticalgap("0");
                p.pan00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.move("0","60","100.00%","120",null,null);

                p.Button00.set_taborder("9");
                p.Button00.set_text("다운로드");
                p.Button00.set_cssclass("btn_WF_SmallGray");
                p.Button00.set_fittocontents("width");
                p.Button00.move("210","231","69","34",null,null);

                p.CheckBox00.set_taborder("8");
                p.CheckBox00.set_text("읽음");
                p.CheckBox00.set_value("true");
                p.CheckBox00.move("80","240","74","40",null,null);

                p.Panel00.set_taborder("10");
                p.Panel00.move("20","240","270","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_01_01_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_01_00_00.form
            obj = new Layout("mobile","",0,0,this.div00_01_01_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_01_01_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_01_00_00.form
            obj = new Layout("Layout0","",0,0,this.div00_01_01_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_01_01_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00_01_01_00_00_00.form.divGrd.form
            obj = new Layout("default","",0,0,this.div00_01_01_00_00_00.form.divGrd.form,
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
                p.panGrdBtn.move(null,"0","550","34","0",null);

                p.Grid00.set_taborder("0");
                p.Grid00.set_binddataset("ds00");
                p.Grid00.move("0","panGrdBtn:10","100.00%","166",null,null);

                p.btnGrdAdd.set_taborder("2");
                p.btnGrdAdd.set_text("추가");
                p.btnGrdAdd.set_cssclass("btn_WF_Small");
                p.btnGrdAdd.set_visible("true");
                p.btnGrdAdd.set_fittocontents("width");
                p.btnGrdAdd.move("774.00","10","47","34",null,null);

                p.btnGrdDel.set_taborder("3");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("804.00","10","45","34",null,null);

                p.btnGrdAdd00.set_taborder("4");
                p.btnGrdAdd00.set_text("물품목록일괄업로드");
                p.btnGrdAdd00.set_cssclass("btn_WF_Small");
                p.btnGrdAdd00.set_visible("true");
                p.btnGrdAdd00.set_fittocontents("width");
                p.btnGrdAdd00.move("458.00","10","131","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.div00_01_01_00_00_00.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_01_00_00_00.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.div00_01_01_00_00_00.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.div00_01_01_00_00_00.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_01_00_00_00.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.div00_01_01_00_00_00.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.div00_01_01_00_00_00.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00_01_01_00_00_00.form
            obj = new Layout("default","",0,0,this.div00_01_01_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","327",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.set_text("예시 (표 참조)");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_verticalgap("4");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("20.00","84","980","316",null,null);

                p.Grid00.set_taborder("4");
                p.Grid00.set_binddataset("ds00");
                p.Grid00.move("20","72","100.00%","178",null,null);

                p.Static02.set_taborder("6");
                p.Static02.set_text("위험물의 경우 규격란에 용량(ex. 100ml, 100g) 으로 기재");
                p.Static02.set_cssclass("sta_WF_Des");
                p.Static02.set_fittocontents("height");
                p.Static02.move("70","262","100%","40",null,null);

                p.Static00.set_taborder("3");
                p.Static00.set_text("수기 등록으로 25개 이상 신청 시 [임시저장] 후 연속하여 신청이 가능합니다.");
                p.Static00.set_cssclass("sta_WF_Des");
                p.Static00.set_fittocontents("height");
                p.Static00.move("758","127","100%","40",null,null);

                p.Static01.set_taborder("5");
                p.Static01.set_text("셋트 물품의 경우 최소단위부터 최대단위까지의 규격(ex. 10/12/14cm)을 모두 기재");
                p.Static01.set_cssclass("sta_WF_Des");
                p.Static01.set_fittocontents("height");
                p.Static01.move("141","261","100%","40",null,null);

                p.staLabel00_00.set_taborder("7");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.set_text("투입자재 및 공구류 목록 기재");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_00.set_taborder("8");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_verticalgap("4");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("20.00","84","96.08%","260",null,null);

                p.pan00_00.set_taborder("9");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_verticalgap("0");
                p.pan00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.move("0","60","100.00%","271",null,null);

                p.Panel00.set_taborder("18");
                p.Panel00.set_cssclass("sta_WF_Des");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("4");
                p.Panel00.move("20","726","96.08%","172",null,null);

                p.Static04.set_taborder("15");
                p.Static04.set_text("보호구역 내 위해물품 및 위험물 반입은 업무에 필요한 최소 범위로 신청하며, 허가된 물품만 반입 사용 가능");
                p.Static04.set_cssclass("sta_WF_Des");
                p.Static04.set_fittocontents("height");
                p.Static04.move("62","766","100%","40",null,null);

                p.divGrd.set_taborder("10");
                p.divGrd.set_text("Div01");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.set_fittocontents("height");
                p.divGrd.move("0","30","100%","210",null,null);

                p.staLabel00_00_00.set_taborder("11");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00.set_text("보호구역 내 위해물품 사용 관련 준수사항");
                p.staLabel00_00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_00_00.set_taborder("12");
                p.Panel00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00.set_verticalgap("4");
                p.Panel00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00.move("20.00","648","96.08%","308",null,null);

                p.pan00_00_00.set_taborder("13");
                p.pan00_00_00.set_horizontalgap("20");
                p.pan00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00_00.set_flexwrap("wrap");
                p.pan00_00_00.set_fittocontents("height");
                p.pan00_00_00.set_verticalgap("0");
                p.pan00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_00.move("0","648","100.00%","328",null,null);

                p.CheckBox00.set_taborder("24");
                p.CheckBox00.set_text("동의");
                p.CheckBox00.set_value("true");
                p.CheckBox00.move("102","1055","150","40",null,null);

                p.Static08.set_taborder("20");
                p.Static08.set_text("관련규정에 따른 보호구역 출입정지(출입증 소지자 또는 인솔자) 등의 제재와 관련하여 인천국제공항공사에 이의를 제기하지 않음을 서약합니다.");
                p.Static08.set_fittocontents("height");
                p.Static08.move("140","927","100%","40",null,null);

                p.Static07.set_taborder("19");
                p.Static07.set_text("상기 사항에 대하여 철저히 준수하며, 만일 위반사항 발생 시 관계기관 통보, 위해물품 및 위험물 반입 금지 조치,");
                p.Static07.set_fittocontents("height");
                p.Static07.move("111","885","100%","40",null,null);

                p.Static06.set_taborder("17");
                p.Static06.set_text("보호구역 내 위해물품 및 위험물 방치 및 분실되지 않도록 관리");
                p.Static06.set_cssclass("sta_WF_Des");
                p.Static06.set_fittocontents("height");
                p.Static06.move("86","855","100%","40",null,null);

                p.Static05.set_taborder("16");
                p.Static05.set_text("상주직원 초소 및 보호구역 내 위해물품 점검 시 작업신고서 제출 등 보안통제에 적극 협조");
                p.Static05.set_cssclass("sta_WF_Des");
                p.Static05.set_fittocontents("height");
                p.Static05.move("121","852","100%","40",null,null);

                p.Static03.set_taborder("14");
                p.Static03.set_text("보호구역 내 위해물품 및 위험물 반입 사용 시, 국가항공보안계획 및 인천국제공항 자체보안계획에서 정한 사항 준수");
                p.Static03.set_cssclass("sta_WF_Des");
                p.Static03.set_fittocontents("height");
                p.Static03.move("80","897","100%","40",null,null);

                p.staLabel00_00_00_00.set_taborder("21");
                p.staLabel00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_00_00.set_text("위해물품사용 준수사항동의여부");
                p.staLabel00_00_00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_00_00_00.set_taborder("22");
                p.Panel00_00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00_00.set_verticalgap("4");
                p.Panel00_00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00_00.move("20.00","648","300","90",null,null);

                p.pan00_00_00_00.set_taborder("23");
                p.pan00_00_00_00.set_horizontalgap("20");
                p.pan00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00_00_00.set_flexwrap("wrap");
                p.pan00_00_00_00.set_fittocontents("height");
                p.pan00_00_00_00.set_verticalgap("0");
                p.pan00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_00_00.move("0","648","100.00%","101",null,null);

                p.Button00.set_taborder("33");
                p.Button00.set_text("외곽초소 위치도");
                p.Button00.set_cssclass("btn_WF_SmallGray");
                p.Button00.move("95","1210","120","34",null,null);

                p.staLabel00_00_00_00_00.set_taborder("25");
                p.staLabel00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_00_00.set_text("반입초소지정");
                p.staLabel00_00_00_00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_00_00_00_00.set_taborder("26");
                p.Panel00_00_00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00_00_00.set_verticalgap("4");
                p.Panel00_00_00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00_00_00.move("20.00","1077","300","90",null,null);

                p.pan00_00_00_00_00.set_taborder("27");
                p.pan00_00_00_00_00.set_horizontalgap("20");
                p.pan00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00_00_00_00.set_flexwrap("wrap");
                p.pan00_00_00_00_00.set_fittocontents("height");
                p.pan00_00_00_00_00.set_verticalgap("0");
                p.pan00_00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_00_00_00.move("0","1077","100.00%","380",null,null);

                p.Panel02.set_taborder("32");
                p.Panel02.set_type("vertical");
                p.Panel02.set_verticalgap("4");
                p.Panel02.set_spacing("5px 0px 0px 0px");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("20","1167","100%","279",null,null);

                p.Static13.set_taborder("38");
                p.Static13.set_text("입.출시 동일 출입구 이용");
                p.Static13.set_cssclass("sta_WF_Des3");
                p.Static13.set_fittocontents("height");
                p.Static13.move("195","1412","100%","40",null,null);

                p.Static12.set_taborder("37");
                p.Static12.set_text("* 예) (E구역 내 부대건물) 주변전소A 공사/작업 시, 최초 반입하는 초소(G1) 선택\r\n* 예) (E구역 외 부대건물) ICT센터 공사/작업 시, 부대건물-ICT센터 선택");
                p.Static12.set_cssclass("sta_WF_Des2");
                p.Static12.set_fittocontents("height");
                p.Static12.move("138","1421","100%","57",null,null);

                p.Static11.set_taborder("36");
                p.Static11.set_text("부대건물 선택 시, 표출되지 않는 E구역(항공기 이동지역) 내 부대건물 공사/작업의 경우 최초 반입하는 초소 선택");
                p.Static11.set_cssclass("sta_WF_Des");
                p.Static11.set_fittocontents("height");
                p.Static11.move("147","1365","100%","40",null,null);

                p.Static10.set_taborder("35");
                p.Static10.set_text("출국심사장 내 공사/작업 시 “출국심사장” 선택");
                p.Static10.set_cssclass("sta_WF_Des");
                p.Static10.set_fittocontents("height");
                p.Static10.move("127","1275","100%","40",null,null);

                p.Static09.set_taborder("34");
                p.Static09.set_text("출입하는 구역을 구분하여 해당 초소 선택(“전 초소(외곽/터미널)” 선택 시 반려될 수 있음)");
                p.Static09.set_cssclass("sta_WF_Des");
                p.Static09.set_fittocontents("height");
                p.Static09.move("92","1225","100%","40",null,null);

                p.pan02Blank.set_taborder("31");
                p.pan02Blank.set_flexgrow("1");
                p.pan02Blank.move("520","1077","300","1",null,null);

                p.Combo00.set_taborder("28");
                p.Combo00.set_flexgrow("1");
                p.Combo00.set_text("선택");
                p.Combo00.set_value("선택");
                p.Combo00.set_index("-1");
                p.Combo00.move("131","1132","150","40",null,null);

                p.Combo01.set_taborder("29");
                p.Combo01.set_flexgrow("1");
                p.Combo01.set_text("선택");
                p.Combo01.set_value("선택");
                p.Combo01.set_index("-1");
                p.Combo01.move("217","1146","150","40",null,null);

                p.Panel01.set_taborder("30");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.move("20","1140","100%","40",null,null);

                p.staLabel00_00_00_00_00_00.set_taborder("39");
                p.staLabel00_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_00_00_00.set_text("선택사유 및 이용예정초소");
                p.staLabel00_00_00_00_00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_00_00_00_00_00.set_taborder("40");
                p.Panel00_00_00_00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00_00_00_00.set_verticalgap("4");
                p.Panel00_00_00_00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00_00_00_00.move("20.00","1077","980","170",null,null);

                p.pan00_00_00_00_00_00.set_taborder("41");
                p.pan00_00_00_00_00_00.set_horizontalgap("20");
                p.pan00_00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00_00_00_00_00.set_flexwrap("wrap");
                p.pan00_00_00_00_00_00.set_fittocontents("height");
                p.pan00_00_00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_00_00_00_00.move("0","1077","100.00%","269",null,null);

                p.Static15.set_taborder("44");
                p.Static15.set_text("외곽/터미널 초소를 모두 이용할 경우 협의부서에서 확인이 가능하도록 작업내용에 기재요청");
                p.Static15.set_cssclass("sta_WF_Des");
                p.Static15.set_fittocontents("height");
                p.Static15.move("252","1757","100%","40",null,null);

                p.Static14.set_taborder("43");
                p.Static14.set_text("예시 : 위의 작업을 수행하기 위하여 (G1, G7, 3층 중앙 초소, 지하1층 동편 초소) 출입예정");
                p.Static14.set_cssclass("sta_WF_Des2");
                p.Static14.set_fittocontents("height");
                p.Static14.move("80","1715","100%","40",null,null);

                p.Panel03.set_taborder("45");
                p.Panel03.set_type("vertical");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_verticalgap("4");
                p.Panel03.set_spacing("5px 0px 0px 0px");
                p.Panel03.move("20","1661","100%","90",null,null);

                p.TextArea00.set_taborder("42");
                p.TextArea00.set_displaynulltext("내용 입력");
                p.TextArea00.move("84","1558","100%","120",null,null);

                p.staLabel03_00.set_taborder("46");
                p.staLabel03_00.set_text("전달사항");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.TextArea01.set_taborder("47");
                p.TextArea01.set_displaynulltext("내용 입력");
                p.TextArea01.move("53","302","100%","100",null,null);

                p.Grid00_00.set_taborder("48");
                p.Grid00_00.set_binddataset("ds00");
                p.Grid00_00.move("20.00","371","100.00%","166",null,null);

                p.Static00_00.set_taborder("49");
                p.Static00_00.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
                p.Static00_00.set_cssclass("sta_WF_Des");
                p.Static00_00.set_fittocontents("height");
                p.Static00_00.move("583","508","100%","40",null,null);

                p.Panel02_00.set_taborder("50");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.set_fittocontents("height");
                p.Panel02_00.set_verticalgap("8");
                p.Panel02_00.move("20.00","0","980","376",null,null);

                p.pan02.set_taborder("51");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","267","100.00%","426",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_01_01_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_01_00_00_00.form
            obj = new Layout("mobile","",0,0,this.div00_01_01_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_01_01_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_01_00_00_00.form
            obj = new Layout("Layout0","",0,0,this.div00_01_01_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_01_01_00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("투입자재 미치 공구류 등");

                p.panForm.set_taborder("0");
                p.panForm.set_type("vertical");
                p.panForm.set_fittocontents("height");
                p.panForm.move("0","0","100.00%","2375",null,null);

                p.staSubTitle03.set_taborder("1");
                p.staSubTitle03.set_text("투입자재 미치 공구류 등(위해물품 및 위험물 포함)");
                p.staSubTitle03.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle03.move("40","3210","100%","50",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_flexmainaxisalign("end");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_spacing("0px 10px 0px 10px");
                p.Panel00.move("860","3210","200","50",null,null);

                p.Panel01_00.set_taborder("3");
                p.Panel01_00.set_fittocontents("none");
                p.Panel01_00.set_flexcrossaxisalign("end");
                p.Panel01_00.set_minheight("70");
                p.Panel01_00.set_maxheight("");
                p.Panel01_00.move("40","3210","100%","70",null,null);

                p.Button01_03.set_taborder("4");
                p.Button01_03.set_cssclass("btn_WF_ACPlus");
                p.Button01_03.set_visible("false");
                p.Button01_03.move("750","3170","34","30",null,null);

                p.Button00_02.set_taborder("5");
                p.Button00_02.set_cssclass("btn_WF_ACMinus");
                p.Button00_02.move("740","3176","34","34",null,null);

                p.div00_01_01_00_00.set_taborder("6");
                p.div00_01_01_00_00.set_text("신청자정보");
                p.div00_01_01_00_00.set_cssclass("div_WF_Bg");
                p.div00_01_01_00_00.set_fittocontents("height");
                p.div00_01_01_00_00.move("1400","331","100.00%","240",null,null);

                p.div00_01_01_00_00_00.set_taborder("7");
                p.div00_01_01_00_00_00.set_text("신청자정보");
                p.div00_01_01_00_00_00.set_cssclass("div_WF_Bg");
                p.div00_01_01_00_00_00.set_fittocontents("height");
                p.div00_01_01_00_00_00.move("1530","346","100%","1995",null,null);

                p.staSubTitle03_00.set_taborder("8");
                p.staSubTitle03_00.set_text("투입자재 및 공구류 목록 기재 예시 및 유의사항");
                p.staSubTitle03_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle03_00.move("10","30","86.48%","50",null,null);

                p.Button01_03_00.set_taborder("9");
                p.Button01_03_00.set_cssclass("btn_WF_ACPlus");
                p.Button01_03_00.set_visible("false");
                p.Button01_03_00.move("94","18","34","30",null,null);

                p.Button00_02_00.set_taborder("10");
                p.Button00_02_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_02_00.move("138","16","34","34",null,null);

                p.Panel00_00.set_taborder("11");
                p.Panel00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_flexmainaxisalign("end");
                p.Panel00_00.set_horizontalgap("10");
                p.Panel00_00.set_spacing("0px 10px 0px 10px");
                p.Panel00_00.move("1117","30","172","50",null,null);

                p.Panel01_00_00.set_taborder("12");
                p.Panel01_00_00.set_fittocontents("none");
                p.Panel01_00_00.set_flexcrossaxisalign("end");
                p.Panel01_00_00.set_minheight("70");
                p.Panel01_00_00.set_maxheight("");
                p.Panel01_00_00.move("10","386","100.00%","70",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panForm.set_spacing("0px 20px 10px 20px");
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
        this.registerScript("CST006S03.xfdl", function() {
        /********************************************************************
            created:	  2024/08/08
            filename: 	C:\developer\tsp_view\publishing\work\LIF\test.xfdl
            file path:	C:\developer\tsp_view\publishing\work\LIF
            file base: 	test
            file ext:	  xfdl
            author:

            purpose:
        *********************************************************************/

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

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.divForm.form.divSch.set_width("100%");
        	this.divForm.form.divSch.fittocontents = "height";
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

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/


        this.div00_00_00_01_staSubTitle_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.accordionmenu_onload,this);
            this.staSubTitle03.addEventHandler("onclick",this.div00_00_00_01_staSubTitle_onclick,this);
            this.staSubTitle03_00.addEventHandler("onclick",this.div00_00_00_01_staSubTitle_onclick,this);
        };
        this.loadIncludeScript("CST006S03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
