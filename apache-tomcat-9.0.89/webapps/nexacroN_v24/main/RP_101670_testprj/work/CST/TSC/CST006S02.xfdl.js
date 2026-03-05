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
            this.set_titletext("협의/신청정보");
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
            obj = new Panel("panForm","0","0","100.00%","4593",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"div00_01_02\"/><PanelItem id=\"PanelItem03\" componentid=\"panTitle01\"/><PanelItem id=\"PanelItem04\" componentid=\"div00_00\"/><PanelItem id=\"PanelItem05\" componentid=\"panTitle02\"/><PanelItem id=\"PanelItem06\" componentid=\"div00_00_00\"/><PanelItem id=\"PanelItem07\" componentid=\"Panel04\"/><PanelItem id=\"PanelItem08\" componentid=\"div00_00_00_00\"/><PanelItem id=\"PanelItem09\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem10\" componentid=\"div00_00_00_01\"/><PanelItem id=\"PanelItem11\" componentid=\"panPrvcWtcs\"/><PanelItem id=\"PanelItem12\" componentid=\"divPrvcWtcs\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","100","30","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("협의정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","917","30","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","760","20","34","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","765","30","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle","1357","451","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("3");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("div00_01_02","1710","288","100%","412",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","100.00%","64",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("0");
            obj.set_text("■ 공항공사 담당자(감독자) : 입주자 시설 공사 및 개선공사 등의 작업은 공항공사 담당자(감독자) 필히 지정 (공항공사 담당자가 없는 단순 물품반입 및 단순작업 제외)\r\n · 입주자 시설공사 : 해당부서 담당자(식음, 면세, 상업시설, 여객시설 등)\r\n · 공항공사 및 자회사 발주공사 : 발주부서 자회사 감독자");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","131",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","142","265","74","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("21");
            obj.set_text("기계");
            obj.set_fittocontents("width");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","180","267","74","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("20");
            obj.set_text("건축");
            obj.set_fittocontents("width");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","192","272","74","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("19");
            obj.set_text("전기");
            obj.set_fittocontents("width");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","227","257","74","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("18");
            obj.set_text("소방");
            obj.set_fittocontents("width");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staArptPbcprtPicChcYn","10","98","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("2");
            obj.set_text("공항공사 담당자(감독자)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","84","300","120",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staArptPbcprtPicChcYn\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Radio("rdoArptPbcprtPicChcYn","20.00","91","41.67%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("4");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div00_01_02_form_rdoArptPbcprtPicChcYn_innerdataset = new nexacro.NormalDataset("div00_01_02_form_rdoArptPbcprtPicChcYn_innerdataset", obj);
            div00_01_02_form_rdoArptPbcprtPicChcYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">유</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">무</Col></Row></Rows>");
            obj.set_innerdataset(div00_01_02_form_rdoArptPbcprtPicChcYn_innerdataset);
            obj.set_text("");
            obj.set_value("-1");
            obj.set_index("-1");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel02","20","113","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("12");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"rdoArptPbcprtPicChcYn\"/><PanelItem id=\"PanelItem01\" componentid=\"btnArptPbcprtPicChc\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Button("btnArptPbcprtPicChc","200.00","0","193","34",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("11");
            obj.set_text("입주자 시설 담당부서 현황");
            obj.set_cssclass("btn_WF_SmallGray");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel00","50","196","100%","50",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("9");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("Static03","81","238","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("10");
            obj.set_text("도면 신청진행현황 공유 할 공항공사 담당자 유/무 선택");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staArptPbcprtPicSpvsrId","974.00","151","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("5");
            obj.set_text("공항공사 담당자");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Div("divEdtPop01","974.00","197","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new MultiCombo("mtiArptPicId","10.00","0","90.83333333333333%","100%",null,null,null,null,null,null,this.div00_01_02.form.divEdtPop01.form);
            obj.set_taborder("1");
            obj.set_edittype("multitag");
            obj.set_innerdataset("dsWfEmps");
            obj.set_codecolumn("userId");
            obj.set_datacolumn("userNm");
            obj.set_flexgrow("1");
            obj.set_value("");
            obj.set_index("-1");
            this.div00_01_02.form.divEdtPop01.addChild(obj.name, obj);

            obj = new Button("btnArptPbcprtPicSpvsrId","mtiArptPicId:-6","0","40","40",null,null,null,null,null,null,this.div00_01_02.form.divEdtPop01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.div00_01_02.form.divEdtPop01.addChild(obj.name, obj);

            obj = new Panel("pan06_00","974.00","151","300","120",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staArptPbcprtPicSpvsrId\"/><PanelItem id=\"PanelItem01\" componentid=\"divEdtPop01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("Static02","603","155","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("8");
            obj.set_text("협의 받을 담당자 확인 후 선택");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staDstrtnPrnmntDt","10","98","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("13");
            obj.set_text("공사(작업) 분야");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20.00","84","300","124",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staDstrtnPrnmntDt\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem03\" componentid=\"Static03_00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0","60","100.00%","135",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel01","20","224","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("23");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"CheckBox03\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox04\"/><PanelItem id=\"PanelItem02\" componentid=\"CheckBox02\"/><PanelItem id=\"PanelItem03\" componentid=\"CheckBox05\"/><PanelItem id=\"PanelItem04\" componentid=\"CheckBox01\"/><PanelItem id=\"PanelItem05\" componentid=\"CheckBox00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05","157","308","74","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("22");
            obj.set_text("통신");
            obj.set_fittocontents("width");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","107","237","129","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("17");
            obj.set_text("해당사항없음");
            obj.set_fittocontents("width");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("Static03_00","30.00","325","100%","30",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("16");
            obj.set_text("공종별 협의자 지정 : 해당 클릭시 공종별 담당자 협의");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","-5","582","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("신청정보(주관사)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","1220","582","213","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle01","-5","582","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("9");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","1257","497","34","27",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","1285","477","34","29",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Div("div00_00","1420","779","100%","409",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("신청정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","60.00","107","100.00%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("주관사의 동일여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","242","300","86",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","242","100.00%","96",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Radio("Radio00","124","145","100%","31",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var div00_00_form_Radio00_innerdataset = new nexacro.NormalDataset("div00_00_form_Radio00_innerdataset", obj);
            div00_00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신청자정보와동일</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신청자정보와동일하지않음</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_form_Radio00_innerdataset);
            obj.set_text("신청자정보와동일");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","60.00","145","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("■ 주관사 : 공사/작업을 발주, 의뢰하는 회사 혹은 공항공사 내 담당부서");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("6");
            obj.set_text("주관사 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","84","247","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("7");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00","10.00","98","300","86",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00_00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("panBlank","10.00","98","300","86",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan05_00_00","0","60","100%","96",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panBlank\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","651","246","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("12");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","563","211","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("11");
            obj.set_text("주관사 담당자명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("13");
            obj.set_text("주관사 연락처");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","84","247","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("14");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_00","10.00","98","300","86",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00_00_00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("panBlank00","10.00","98","300","1",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("pan05_00_00_00","0","60","100.00%","96",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("17");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panBlank00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","0","490","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("18");
            obj.set_text("주관자담당자의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00","244.00","0","131","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("19");
            obj.set_text("동의서양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("btn_file_1","374.00","0","116","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("20");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","490.00","0","490","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("21");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("panTitle","20","10","100%","46",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("22");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","20.00","110","100%","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("23");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Panel("panFile","1456","2096","100%","161",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("24");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00\"/></Contents>");
            this.div00_00.addChild(obj.name, obj);

            obj = new Div("div00_00_00","1850","573","100%","487",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("신청정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","60.00","107","100.00%","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("5");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("시공사의 동일여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","242","300","86",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","242","100.00%","96",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Radio("Radio00","124","145","100%","31",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var div00_00_00_form_Radio00_innerdataset = new nexacro.NormalDataset("div00_00_00_form_Radio00_innerdataset", obj);
            div00_00_00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신청자정보와동일</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신청자정보와동일하지않음</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_00_form_Radio00_innerdataset);
            obj.set_text("신청자정보와동일");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan08","0","570","100.00%","96",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan05_01\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","60.00","145","100%","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("■ 시공사 : 실제 공사/작업을 시행하는 회사(실제 현장에 상주하는 공사책임자 연락처 1인 기재)");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("7");
            obj.set_text("시공사 연락처");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","84","247","100%","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("8");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00","10.00","98","300","86",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panBlank","10.00","98","300","1",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan05_00_00","0","60","100.00%","96",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panBlank\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan08_00","0","570","100.00%","107",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 0px 10px 0px ");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan05_00_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","83","444","100%","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("13");
            obj.set_text("JPG,JPEG,GIF,PNG,BMP,PDF만 첨부가능(단, PDF는 1장만 첨부가능)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("14");
            obj.set_text("시공사 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","84","247","100%","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("15");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00","10.00","98","300","86",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("17");
            obj.set_text("시공사 담당자명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit01","568","251","100%","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("18");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan05_01","10.00","98","300","86",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","0","490","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("20");
            obj.set_text("시공사의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00","244.00","0","131","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("21");
            obj.set_text("동의서양식다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_file_1","374.00","0","116","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("22");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","490.00","0","490","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("23");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panTitle","20","10","100%","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("24");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","20.00","110","100%","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("25");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("panFile","1456","2096","100%","161",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("26");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Div("div00_00_00_00","2010","1220","100.00%","1521",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("신청정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","242","300","86",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","242","100.00%","137",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan05_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static01\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Radio("Radio00","124","145","100%","31",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var div00_00_00_00_form_Radio00_innerdataset = new nexacro.NormalDataset("div00_00_00_00_form_Radio00_innerdataset", obj);
            div00_00_00_00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신청자정보와동일</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신청자정보와동일하지않음</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_00_00_form_Radio00_innerdataset);
            obj.set_text("신청자정보와동일");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan08","0","187","100.00%","146",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static01_00_00\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","10.00","2820","100%","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("12");
            obj.set_text("일반터미널 지역 및 화물터미널 지역이 분리되어 두 지역 모두에서 작업을 진행 할 경우 각 1건씩 작업신고서를 따로 신청해주셔야합니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","72","238","100%","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("8");
            obj.set_text("아웃소싱용역업무”는 공항공사와 아웃소싱용역 체결된 건으로 작업신고서 신청시 해당 감독자에게 자동으로 협의완료요청됩니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("용역/공사 담당자(성명기입)");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan05_01_00","10.00","98","300","86",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divEdtPop01\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Div("divEdtPop01","20.00","715","100%","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0",null,"40","0",null,null,null,null,null,this.div00_00_00_00.form.divEdtPop01.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            this.div00_00_00_00.form.divEdtPop01.addChild(obj.name, obj);

            obj = new Button("btnPop","Edit00:-40","0","40","40",null,null,null,null,null,null,this.div00_00_00_00.form.divEdtPop01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.div00_00_00_00.form.divEdtPop01.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("9");
            obj.set_text("지역구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Radio("Radio01_00","142","235","100%","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var div00_00_00_00_form_Radio01_00_innerdataset = new nexacro.NormalDataset("div00_00_00_00_form_Radio01_00_innerdataset", obj);
            div00_00_00_00_form_Radio01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">제1,2터미널지역/기타그외지역</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">화물터미널지역/물류단지</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_00_00_form_Radio01_00_innerdataset);
            obj.set_text("일반작업");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00","10.00","98","300","86",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Radio01_00\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("13");
            obj.set_text("건물구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_00","20.00","326","300","176",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan08_00","0","333","100.00%","188",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00_00\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02","180","469","100%","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("25");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox05\"/><PanelItem id=\"PanelItem02\" componentid=\"CheckBox06\"/><PanelItem id=\"PanelItem04\" componentid=\"CheckBox08\"/><PanelItem id=\"PanelItem05\" componentid=\"CheckBox09\"/><PanelItem id=\"PanelItem06\" componentid=\"CheckBox07\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox06","236.00","0","123","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("28");
            obj.set_text("제2합동청사");
            obj.set_value("true");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel01","219","444","100%","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("21");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox03\"/><PanelItem id=\"PanelItem02\" componentid=\"CheckBox04\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02","102","441","100","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("22");
            obj.set_text("[제2터미널역]");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","631","390","100","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("20");
            obj.set_text("[제1터미널역]");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","338","389","88","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("19");
            obj.set_text("탑승동");
            obj.set_value("true");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","60","397","123","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("16");
            obj.set_text("제1교통센터");
            obj.set_value("true");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","223","399","136","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("17");
            obj.set_text("제1여객터미널");
            obj.set_value("true");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","394","100%","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("18");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Static00\"/><PanelItem id=\"PanelItem03\" componentid=\"CheckBox01\"/><PanelItem id=\"PanelItem00\" componentid=\"CheckBox00\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox02\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","100.00","0","136","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("23");
            obj.set_text("제2여객터미널");
            obj.set_value("true");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","236.00","0","123","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("24");
            obj.set_text("제2교통센터");
            obj.set_value("true");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox09","757","468","116","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("31");
            obj.set_text("인재개발원");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox08","359.00","0","88","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("30");
            obj.set_text("AICC");
            obj.set_fittocontents("width");
            obj.set_value("true");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox07","359.00","0","129","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("29");
            obj.set_text("기타부대건물");
            obj.set_value("true");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05","100.00","0","136","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("27");
            obj.set_text("제1청사동");
            obj.set_value("true");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static03","89","473","100","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("26");
            obj.set_text("[기타그외지역]");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("32");
            obj.set_text("보안구역여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01_00","223","399","136","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("33");
            obj.set_text("A/S(보호구역)");
            obj.set_value("true");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","60","397","123","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("34");
            obj.set_text("L/S(일반지역)");
            obj.set_value("true");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20","394","100%","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("35");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"CheckBox01_00\"/><PanelItem id=\"PanelItem00\" componentid=\"CheckBox00_00\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static03_00","20.00","607","305","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("36");
            obj.set_text("A/S(보호구역):출입허가가 필요한 보안구역(보안검색이 완료된 구역)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","180","469","100%","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("37");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static04\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_00_00","20.00","326","300","126",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("38");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02_01\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan08_00_00","0","333","100.00%","137",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("39");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00_00_00\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static04","488","628","302","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("40");
            obj.set_text("항공기 이동지역(계류장, E구역)에서 작업할 경우 작업신고서와는 별도로 이동지역 작업신고서를 반드시 신청 및 승인 받아야 합니다. (필수사항)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("41");
            obj.set_text("작업장위치");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","84","247","100%","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("42");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00","10.00","98","300","86",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("43");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("44");
            obj.set_text("총 작업인원");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit01","568","251","100%","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("45");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan05_01","10.00","98","300","86",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("46");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan08_01","0","570","100.00%","96",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("47");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan05_01\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("48");
            obj.set_text("작업시작일");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","67","623","145","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("49");
            obj.set_dateformat("yyyy-MM-dd");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00_01","10.00","98","300","130",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("50");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Calendar00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static05\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel05_01_00_01","10","98","100%","46",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("51");
            obj.set_text("작업종료일");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","570","621","145","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan05_01_01","10.00","98","300","130",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("53");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_01_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Calendar01\"/><PanelItem id=\"PanelItem03\" componentid=\"Static06\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan05_00","0","60","100.00%","140",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("54");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan05_01_01\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static06","732","792","100%","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("56");
            obj.set_text("작업신청 가능기간은 최대 7일입니다(휴일포함)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static05","382","802","100%","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("55");
            obj.set_text("작업전 24시간 이전에 등록하시기 바랍니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("57");
            obj.set_text("작업목적");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Radio("Radio01_00_00","142","235","100%","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("58");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var div00_00_00_00_form_Radio01_00_00_innerdataset = new nexacro.NormalDataset("div00_00_00_00_form_Radio01_00_00_innerdataset", obj);
            div00_00_00_00_form_Radio01_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">유지보수</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">시설물점검</Col></Row><Row><Col id=\"datacolumn\">하자보수</Col><Col id=\"codecolumn\">2</Col></Row><Row><Col id=\"datacolumn\">개선공사</Col><Col id=\"codecolumn\">3</Col></Row><Row><Col id=\"datacolumn\">기타</Col><Col id=\"codecolumn\">4</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_00_00_form_Radio01_00_00_innerdataset);
            obj.set_text("일반작업");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_01","10.00","98","300","86",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("59");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Radio01_00_00\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan08_02","0","187","100%","97",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("60");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00_01\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00_01_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("61");
            obj.set_text("공사작업명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_01_00","10.00","98","300","86",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("62");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit02\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan08_02_00","0","187","100%","97",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("63");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00_01_00\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit02","78","1058","100%","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("64");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00_01_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("65");
            obj.set_text("작업내용");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_01_00_00","10.00","98","300","220",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("66");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea00\"/><PanelItem id=\"PanelItem04\" componentid=\"Static08\"/><PanelItem id=\"PanelItem02\" componentid=\"Static07\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan08_02_00_00","0","1088","100%","483",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("67");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"divGrd\"/></Contents>");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static07","982","1204","100%","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("69");
            obj.set_text("원활한 작업신고서 출력을 위해 [작업내용] 및 [다중 작업내용]은 전체 1300자 내로 작성해주시길 바랍니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static08","201","1198","100%","40",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("70");
            obj.set_text("다중작업인 경우 아래 표 기재");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","67","1157","100%","80",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("68");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Div("divGrd","0","30","100%","290",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("71");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"0","550","34","0",null,null,null,null,null,this.div00_00_00_00.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnGrdAdd\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/></Contents>");
            this.div00_00_00_00.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","panGrdBtn:10","100.00%","246",null,null,null,null,null,null,this.div00_00_00_00.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"시공사명\"/><Cell col=\"2\" text=\"위치정보(룸번호)\"/><Cell col=\"3\" text=\"작업내용\"/><Cell col=\"4\" text=\"작업일시\"/><Cell col=\"5\" text=\"작업인원\"/><Cell col=\"6\" text=\"비고\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.div00_00_00_00.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd","774.00","10","47","34",null,null,null,null,null,null,this.div00_00_00_00.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.div00_00_00_00.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","804.00","10","45","34",null,null,null,null,null,null,this.div00_00_00_00.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.div00_00_00_00.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.div00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("공사(작업)구분");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_00_00_00.addChild(obj.name, obj);

            obj = new Div("div00_00_00_01","1390","3115","100.00%","537",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("신청정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","60.00","107","100.00%","40",null,null,null,null,null,null,this.div00_00_00_01.form);
            obj.set_taborder("2");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01\"/></Contents>");
            this.div00_00_00_01.addChild(obj.name, obj);

            obj = new Panel("pan02","0","242","100.00%","497",null,null,null,null,null,null,this.div00_00_00_01.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static01\"/><PanelItem id=\"PanelItem03\" componentid=\"Static02\"/><PanelItem id=\"PanelItem05\" componentid=\"Static02_00\"/></Contents>");
            this.div00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00","91","411","100%","40",null,null,null,null,null,null,this.div00_00_00_01.form);
            obj.set_taborder("4");
            obj.set_text("화기작업(용접/그라인딩(불꽃발생), 신나사용 페인팅작업, 가연성원료 사용작업) 전 반드시 SMIS(안전관리정보시스템) 작업허가서 등록  ");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01","206","410","100%","40",null,null,null,null,null,null,this.div00_00_00_01.form);
            obj.set_taborder("5");
            obj.set_text("SMIS 작업허가서 : 1일(주/야간) 단위로 등록");
            obj.set_cssclass("sta_WF_Des2");
            obj.set_fittocontents("height");
            this.div00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static02","321","410","100%","40",null,null,null,null,null,null,this.div00_00_00_01.form);
            obj.set_taborder("6");
            obj.set_text("공항소방대는 SMIS 작업허가서 등록 화기작업장 대하여 안전조치 점검 후 “허가증” 발급");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_00_00_01.addChild(obj.name, obj);

            obj = new Div("divGrd","0","30","100%","300",null,null,null,null,null,null,this.div00_00_00_01.form);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.div00_00_00_01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0","100.00%",null,null,"0",null,null,null,null,this.div00_00_00_01.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"작업일\"/><Cell col=\"1\" text=\"시작시간\"/><Cell col=\"2\" text=\"종료시간\"/><Cell col=\"3\" text=\"용접기/&#13;&#10;그라인더사용\"/><Cell col=\"4\" text=\"인화성/유독성/&#13;&#10;악취발생\"/><Cell col=\"5\" colspan=\"8\" text=\"기존시설물해체\"/><Cell col=\"13\" text=\"소음/진동/&#13;&#10;분진발생\"/><Cell col=\"14\" text=\"고소작업\"/><Cell col=\"15\" text=\"배관작업\"/><Cell col=\"16\" text=\"옥상작업\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"2\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"4\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"5\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"CellMerge\"/><Cell col=\"6\" text=\"벽\"/><Cell col=\"7\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"CellMerge\"/><Cell col=\"8\" text=\"바닥\"/><Cell col=\"9\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"CellMerge\"/><Cell col=\"10\" text=\"천장\"/><Cell col=\"11\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"CellMerge\"/><Cell col=\"12\" text=\"없음\"/><Cell col=\"13\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"14\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"15\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"16\" cssclass=\"CellEnd\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band></Format></Formats>");
            this.div00_00_00_01.form.divGrd.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","60.00","145","100.00%","40",null,null,null,null,null,null,this.div00_00_00_01.form);
            obj.set_taborder("1");
            obj.set_text("■ 작업협의완료 후 \"용접기/그라인더 사용\" 작업 변경 시 작업일자 1일전까지 반드시 변경사항 입력(위치 : My Page → 나의할일)");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static02_00","321","410","100%","40",null,null,null,null,null,null,this.div00_00_00_01.form);
            obj.set_taborder("7");
            obj.set_text("불시점검 중 SMIS 미등록 작업 / 안전조치 미흡 작업은 허가증 발급된 경우라도 작업 중단");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_00_00_01.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","100","1160","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("신청정보 (시공사)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","916","1160","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button01_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Button02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle02","100","1160","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("18");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","800","990","34","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_01","773","970","34","31",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle02","213","1690","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("작업계획");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","1033","1690","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","213","1690","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("23");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_02","1170","1530","34","32",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","1150","1520","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle03","40","3210","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("중요필드 일자별 입력");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","860","3210","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","40","3210","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("28");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_03","750","3170","34","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02","740","3176","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","1866","3263","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("시설물 설치(변경) 신청을 위한 개인정보 수집 이용동의서");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrvcWtcs","3030","3280","34","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","3000","3263","136","50",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnPrvcWtcs\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panPrvcWtcs","0","3293","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("34");
            obj.set_flexcrossaxisalign("end");
            obj.set_visible("false");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divPrvcWtcs","0","3363","100%","807",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Div03");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","71","3301","100.00%","47",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("0");
            obj.set_text("■ 입주자서비스포털은 배정 받은 공간에 대한 시설물 설치(변경) 신청 서비스 제공을 위해 아래와 같이 개인정보를 수집 이용하고자 합니다.\r\n내용을 자세히 읽은신 후 동의여부를 결정하야 주시길 바랍니다.");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Static("Static01","20","3286","100%","46",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("1");
            obj.set_text("개인정보 수집 이용내역");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","44","100.00%","220",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"414\"/><Column size=\"414\"/><Column size=\"414\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"176\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"수집이용항목\" border=\"1px solid, 1px solid #bcbcbc, 1px solid, 0px none\"/><Cell col=\"1\" text=\"수집목적\" border=\"1px solid, 1px solid #bcbcbc, 1px solid, 0px none\"/><Cell col=\"2\" cssclass=\"CellEnd\" text=\"보유기간\" border=\"1px solid, 0px none\"/><Cell row=\"1\" color=\"blue\" text=\"[필수] 입주담당자 회사명, 입주담당자 성명&#13;&#10;[선택] 현장대리인 회사명, 현장대리인 성명,&#13;&#10;        건축분야 회사명, 건축담당자,&#13;&#10;        기계분야 회사명, 기계담당자,&#13;&#10;        전기분야 회사명, 전기담당자,&#13;&#10;        통신분야 회사명, 통신담당자,&#13;&#10;        소방분야 회사명, 소방담당자,&#13;&#10;        안전관리자(주간) 회사명, 안전관리자(주간)성명,&#13;&#10;        안전관리자(야간) 회사명, 안전관리자(야간)성명\" background=\"#ffffff\" textAlign=\"left\"/><Cell row=\"1\" col=\"1\" background=\"#ffffff\" text=\"배정 받은 공간에 대한 시설물 설치(변경)관련 서비스 신청,&#13;&#10;민원처리, 사후관리\"/><Cell row=\"1\" col=\"2\" color=\"blue\" background=\"#ffffff\" text=\"계약종료 후 3년, 회원탈퇴 시까지\" font=\"bold 16px/normal &quot;pretendard&quot;\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Panel("Panel07","20","3346","1100","414",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("5");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static03\"/><PanelItem id=\"PanelItem02\" componentid=\"Static04\"/></Contents>");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","3336","100.00%","425",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("6");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07\"/></Contents>");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Static("Static05","137","3798","100%","46",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("7");
            obj.set_text("개인정보(필수) 수집이용 동의 여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new CheckBox("chkPrvcClctEsntlAgreYn","87","3847","46","40",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("8");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_value("0");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Static("Static06","45","3881","100%","30",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("9");
            obj.set_text("신청자의 개인정보수집 및 이용동의 여부(필수항목)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Panel("Panel10","20","3771","300","124",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static05\"/><PanelItem id=\"PanelItem01\" componentid=\"chkPrvcClctEsntlAgreYn\"/><PanelItem id=\"PanelItem02\" componentid=\"Static06\"/></Contents>");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Panel("Panel09","0","3761","100.00%","150",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("11");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel10\"/></Contents>");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Static("Static07","93","3950","100%","46",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("12");
            obj.set_text("개인정보(선택) 수집이용 동의 여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Radio("rdoPrvcClctChcAgreYn","20.00","3878","470","40",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_fittocontents("width");
            var divPrvcWtcs_form_rdoPrvcClctChcAgreYn_innerdataset = new nexacro.NormalDataset("divPrvcWtcs_form_rdoPrvcClctChcAgreYn_innerdataset", obj);
            divPrvcWtcs_form_rdoPrvcClctChcAgreYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">동의하지 않음(동의하지 않으셔도 신청이 가능합니다.)</Col></Row></Rows>");
            obj.set_innerdataset(divPrvcWtcs_form_rdoPrvcClctChcAgreYn_innerdataset);
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Static("Static08","148","4030","100%","30",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("14");
            obj.set_text("신청자의 개인정보수집 및 이용동의여부(선택항목)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Static("Static09","48","4062","100%","30",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("15");
            obj.set_text("선택항목에 해당하는 정보를 입력하지 않으셔도 서비스 이용에는 제한이 없습니다,");
            obj.set_cssclass("sta_WF_Des2");
            obj.set_fittocontents("height");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Panel("Panel12","20","3921","300","158",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoPrvcClctChcAgreYn\"/><PanelItem id=\"PanelItem02\" componentid=\"Static08\"/><PanelItem id=\"PanelItem03\" componentid=\"Static09\"/></Contents>");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Panel("Panel11","0","3911","100.00%","179",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("17");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel12\"/></Contents>");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Static("Static04","73","3748","100%","60",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("4");
            obj.set_text("필수 항목 수집•이용 동의를 거부하실 경우 시설물 설치(변경) 신청을 하실수 없으시나, 선택 항목 수집 이용•동의를 거부하셔도 시설물 설치(변경) 신청에는 제한이 없습니다.");
            obj.set_cssclass("sta_WF_Des2");
            obj.set_fittocontents("height");
            this.divPrvcWtcs.addChild(obj.name, obj);

            obj = new Static("Static03","113","3670","100%","60",null,null,null,null,null,null,this.divPrvcWtcs.form);
            obj.set_taborder("3");
            obj.set_text("위의 개인정보 수집•이용에 대한 동의를 거부할 권리가 있습니다.\r\n그러나 필수 항목 수집•이용 동의를 거부할 경우 시설물 설치(변경) 신청을 할 수 없습니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            obj.set_color("red");
            this.divPrvcWtcs.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00_01_02.form.divEdtPop01.form
            obj = new Layout("default","",0,0,this.div00_01_02.form.divEdtPop01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.mtiArptPicId.set_taborder("1");
                p.mtiArptPicId.set_edittype("multitag");
                p.mtiArptPicId.set_innerdataset("dsWfEmps");
                p.mtiArptPicId.set_codecolumn("userId");
                p.mtiArptPicId.set_datacolumn("userNm");
                p.mtiArptPicId.set_flexgrow("1");
                p.mtiArptPicId.set_value("");
                p.mtiArptPicId.set_index("-1");
                p.mtiArptPicId.move("10.00","0","90.83333333333333%","100%",null,null);

                p.btnArptPbcprtPicSpvsrId.set_taborder("1");
                p.btnArptPbcprtPicSpvsrId.set_cssclass("btn_WF_EdtSch");
                p.btnArptPbcprtPicSpvsrId.move("mtiArptPicId:-6","0","40","40",null,null);
            	}
            );
            this.div00_01_02.form.divEdtPop01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_02.form.divEdtPop01.form
            obj = new Layout("mobile","",0,0,this.div00_01_02.form.divEdtPop01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.div00_01_02.form.divEdtPop01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_02.form.divEdtPop01.form
            obj = new Layout("Layout0","",0,0,this.div00_01_02.form.divEdtPop01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.div00_01_02.form.divEdtPop01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00_01_02.form
            obj = new Layout("default","",0,0,this.div00_01_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("0");
                p.sta00.set_text("■ 공항공사 담당자(감독자) : 입주자 시설 공사 및 개선공사 등의 작업은 공항공사 담당자(감독자) 필히 지정 (공항공사 담당자가 없는 단순 물품반입 및 단순작업 제외)\r\n · 입주자 시설공사 : 해당부서 담당자(식음, 면세, 상업시설, 여객시설 등)\r\n · 공항공사 및 자회사 발주공사 : 발주부서 자회사 감독자");
                p.sta00.set_cssclass("sta_WF_Des004");
                p.sta00.set_fittocontents("height");
                p.sta00.move("0","0","100.00%","64",null,null);

                p.pan00.set_taborder("1");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","131",null,null);

                p.CheckBox04.set_taborder("21");
                p.CheckBox04.set_text("기계");
                p.CheckBox04.set_fittocontents("width");
                p.CheckBox04.move("142","265","74","40",null,null);

                p.CheckBox03.set_taborder("20");
                p.CheckBox03.set_text("건축");
                p.CheckBox03.set_fittocontents("width");
                p.CheckBox03.move("180","267","74","40",null,null);

                p.CheckBox02.set_taborder("19");
                p.CheckBox02.set_text("전기");
                p.CheckBox02.set_fittocontents("width");
                p.CheckBox02.move("192","272","74","40",null,null);

                p.CheckBox01.set_taborder("18");
                p.CheckBox01.set_text("소방");
                p.CheckBox01.set_fittocontents("width");
                p.CheckBox01.move("227","257","74","40",null,null);

                p.staArptPbcprtPicChcYn.set_taborder("2");
                p.staArptPbcprtPicChcYn.set_text("공항공사 담당자(감독자)");
                p.staArptPbcprtPicChcYn.set_cssclass("sta_WF_Label_E");
                p.staArptPbcprtPicChcYn.move("10","98","100%","46",null,null);

                p.Panel00_00.set_taborder("3");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_verticalgap("4");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("20.00","84","300","120",null,null);

                p.rdoArptPbcprtPicChcYn.set_taborder("4");
                p.rdoArptPbcprtPicChcYn.set_fittocontents("width");
                p.rdoArptPbcprtPicChcYn.set_innerdataset(div00_01_02_form_rdoArptPbcprtPicChcYn_innerdataset);
                p.rdoArptPbcprtPicChcYn.set_codecolumn("codecolumn");
                p.rdoArptPbcprtPicChcYn.set_datacolumn("datacolumn");
                p.rdoArptPbcprtPicChcYn.set_direction("vertical");
                p.rdoArptPbcprtPicChcYn.set_value("-1");
                p.rdoArptPbcprtPicChcYn.set_index("-1");
                p.rdoArptPbcprtPicChcYn.move("20.00","91","41.67%","40",null,null);

                p.Panel02.set_taborder("12");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.move("20","113","100%","40",null,null);

                p.btnArptPbcprtPicChc.set_taborder("11");
                p.btnArptPbcprtPicChc.set_text("입주자 시설 담당부서 현황");
                p.btnArptPbcprtPicChc.set_cssclass("btn_WF_SmallGray");
                p.btnArptPbcprtPicChc.move("200.00","0","193","34",null,null);

                p.Panel00.set_taborder("9");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("50","196","100%","50",null,null);

                p.Static03.set_taborder("10");
                p.Static03.set_text("도면 신청진행현황 공유 할 공항공사 담당자 유/무 선택");
                p.Static03.set_cssclass("sta_WF_Des");
                p.Static03.set_fittocontents("height");
                p.Static03.move("81","238","100%","40",null,null);

                p.staArptPbcprtPicSpvsrId.set_taborder("5");
                p.staArptPbcprtPicSpvsrId.set_text("공항공사 담당자");
                p.staArptPbcprtPicSpvsrId.set_cssclass("sta_WF_Label_E");
                p.staArptPbcprtPicSpvsrId.move("974.00","151","100%","46",null,null);

                p.divEdtPop01.set_taborder("6");
                p.divEdtPop01.set_text("Div00");
                p.divEdtPop01.set_formscrollbartype("none none");
                p.divEdtPop01.set_formscrolltype("none");
                p.divEdtPop01.set_flexgrow("1");
                p.divEdtPop01.move("974.00","197","100%","40",null,null);

                p.pan06_00.set_taborder("7");
                p.pan06_00.set_type("vertical");
                p.pan06_00.set_flexgrow("1");
                p.pan06_00.set_fittocontents("height");
                p.pan06_00.set_verticalgap("4");
                p.pan06_00.set_visible("true");
                p.pan06_00.move("974.00","151","300","120",null,null);

                p.Static02.set_taborder("8");
                p.Static02.set_text("협의 받을 담당자 확인 후 선택");
                p.Static02.set_cssclass("sta_WF_Des");
                p.Static02.set_fittocontents("height");
                p.Static02.move("603","155","100%","40",null,null);

                p.staDstrtnPrnmntDt.set_taborder("13");
                p.staDstrtnPrnmntDt.set_text("공사(작업) 분야");
                p.staDstrtnPrnmntDt.set_cssclass("sta_WF_Label_E");
                p.staDstrtnPrnmntDt.move("10","98","100%","46",null,null);

                p.Panel00_00_00.set_taborder("14");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_verticalgap("4");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("20.00","84","300","124",null,null);

                p.pan00_00.set_taborder("15");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_verticalgap("0");
                p.pan00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.move("0","60","100.00%","135",null,null);

                p.Panel01.set_taborder("23");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.move("20","224","100%","40",null,null);

                p.CheckBox05.set_taborder("22");
                p.CheckBox05.set_text("통신");
                p.CheckBox05.set_fittocontents("width");
                p.CheckBox05.move("157","308","74","40",null,null);

                p.CheckBox00.set_taborder("17");
                p.CheckBox00.set_text("해당사항없음");
                p.CheckBox00.set_fittocontents("width");
                p.CheckBox00.move("107","237","129","40",null,null);

                p.Static03_00.set_taborder("16");
                p.Static03_00.set_text("공종별 협의자 지정 : 해당 클릭시 공종별 담당자 협의");
                p.Static03_00.set_cssclass("sta_WF_Des");
                p.Static03_00.set_fittocontents("height");
                p.Static03_00.move("30.00","325","100%","30",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_01_02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_02.form
            obj = new Layout("mobile","",0,0,this.div00_01_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_01_02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_02.form
            obj = new Layout("Layout0","",0,0,this.div00_01_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_01_02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00_00.form
            obj = new Layout("default","",0,0,this.div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00_02.set_taborder("4");
                p.Panel00_02.set_fittocontents("height");
                p.Panel00_02.move("60.00","107","100.00%","40",null,null);

                p.staLabel03_00.set_taborder("0");
                p.staLabel03_00.set_text("주관사의 동일여부");
                p.staLabel03_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.Panel02_00.set_taborder("1");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.move("20.00","242","300","86",null,null);

                p.pan02.set_taborder("2");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","242","100.00%","96",null,null);

                p.Radio00.set_taborder("5");
                p.Radio00.set_innerdataset(div00_00_form_Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_direction("vertical");
                p.Radio00.set_fittocontents("width");
                p.Radio00.set_value("0");
                p.Radio00.set_index("0");
                p.Radio00.move("124","145","100%","31",null,null);

                p.sta00_00_01.set_taborder("3");
                p.sta00_00_01.set_text("■ 주관사 : 공사/작업을 발주, 의뢰하는 회사 혹은 공항공사 내 담당부서");
                p.sta00_00_01.set_cssclass("sta_WF_Des004");
                p.sta00_00_01.set_fittocontents("height");
                p.sta00_00_01.set_flexgrow("1");
                p.sta00_00_01.move("60.00","145","100%","40",null,null);

                p.staLabel05_00_00_00.set_taborder("6");
                p.staLabel05_00_00_00.set_text("주관사 회사명");
                p.staLabel05_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_00.move("10","98","100%","46",null,null);

                p.Edit00_00.set_taborder("7");
                p.Edit00_00.move("84","247","100%","40",null,null);

                p.pan04_00_00.set_taborder("8");
                p.pan04_00_00.set_type("vertical");
                p.pan04_00_00.set_flexgrow("1");
                p.pan04_00_00.move("10.00","98","300","86",null,null);

                p.panBlank.set_taborder("9");
                p.panBlank.set_type("vertical");
                p.panBlank.set_flexgrow("1");
                p.panBlank.move("10.00","98","300","86",null,null);

                p.pan05_00_00.set_taborder("10");
                p.pan05_00_00.set_horizontalgap("20");
                p.pan05_00_00.set_flexcrossaxiswrapalign("start");
                p.pan05_00_00.set_flexwrap("wrap");
                p.pan05_00_00.set_verticalgap("0");
                p.pan05_00_00.set_spacing("0px 20px 10px 20px");
                p.pan05_00_00.set_fittocontents("height");
                p.pan05_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan05_00_00.move("0","60","100%","96",null,null);

                p.Edit00.set_taborder("12");
                p.Edit00.move("651","246","100%","40",null,null);

                p.Static01.set_taborder("11");
                p.Static01.set_text("주관사 담당자명");
                p.Static01.set_cssclass("sta_WF_Label_E");
                p.Static01.move("563","211","100%","46",null,null);

                p.staLabel05_00_00_00_00.set_taborder("13");
                p.staLabel05_00_00_00_00.set_text("주관사 연락처");
                p.staLabel05_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_00_00.move("10","98","100%","46",null,null);

                p.Edit00_00_00.set_taborder("14");
                p.Edit00_00_00.move("84","247","100%","40",null,null);

                p.pan04_00_00_00.set_taborder("15");
                p.pan04_00_00_00.set_type("vertical");
                p.pan04_00_00_00.set_flexgrow("1");
                p.pan04_00_00_00.move("10.00","98","300","86",null,null);

                p.panBlank00.set_taborder("16");
                p.panBlank00.set_type("vertical");
                p.panBlank00.set_flexgrow("1");
                p.panBlank00.move("10.00","98","300","1",null,null);

                p.pan05_00_00_00.set_taborder("17");
                p.pan05_00_00_00.set_horizontalgap("20");
                p.pan05_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan05_00_00_00.set_flexwrap("wrap");
                p.pan05_00_00_00.set_verticalgap("0");
                p.pan05_00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan05_00_00_00.set_fittocontents("height");
                p.pan05_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan05_00_00_00.move("0","60","100.00%","96",null,null);

                p.staLabel00_02.set_taborder("18");
                p.staLabel00_02.set_text("주관자담당자의 개인정보수집 및 이용동의서");
                p.staLabel00_02.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02.set_flexgrow("1");
                p.staLabel00_02.move("0","0","490","46",null,null);

                p.Button00_00.set_taborder("19");
                p.Button00_00.set_text("동의서양식다운로드");
                p.Button00_00.set_cssclass("btn_WF_Small");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("244.00","0","131","40",null,null);

                p.btn_file_1.set_taborder("20");
                p.btn_file_1.set_text("파일선택");
                p.btn_file_1.set_cssclass("btn_WF_FileUp");
                p.btn_file_1.move("374.00","0","116","40",null,null);

                p.panBtnFile.set_taborder("21");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("490.00","0","490","46",null,null);

                p.panTitle.set_taborder("22");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.move("20","10","100%","46",null,null);

                p.Grid00_00.set_taborder("23");
                p.Grid00_00.set_binddataset("dsFile1");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00.move("20.00","110","100%","40",null,null);

                p.panFile.set_taborder("24");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("1456","2096","100%","161",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_00.form
            obj = new Layout("mobile","",0,0,this.div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_00.form
            obj = new Layout("Layout0","",0,0,this.div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00_00_00.form
            obj = new Layout("default","",0,0,this.div00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00_02.set_taborder("5");
                p.Panel00_02.set_fittocontents("height");
                p.Panel00_02.move("60.00","107","100.00%","40",null,null);

                p.staLabel03_00.set_taborder("0");
                p.staLabel03_00.set_text("시공사의 동일여부");
                p.staLabel03_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.Panel02_00.set_taborder("1");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.move("20.00","242","300","86",null,null);

                p.pan02.set_taborder("2");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","242","100.00%","96",null,null);

                p.Radio00.set_taborder("6");
                p.Radio00.set_innerdataset(div00_00_00_form_Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_direction("vertical");
                p.Radio00.set_fittocontents("width");
                p.Radio00.set_value("0");
                p.Radio00.set_index("0");
                p.Radio00.move("124","145","100%","31",null,null);

                p.pan08.set_taborder("3");
                p.pan08.set_cssclass("pal_WF_DtlBg");
                p.pan08.set_fittocontents("height");
                p.pan08.set_spacing("0px 20px 10px 20px");
                p.pan08.set_flexwrap("wrap");
                p.pan08.set_horizontalgap("20");
                p.pan08.move("0","570","100.00%","96",null,null);

                p.sta00_00_01.set_taborder("4");
                p.sta00_00_01.set_text("■ 시공사 : 실제 공사/작업을 시행하는 회사(실제 현장에 상주하는 공사책임자 연락처 1인 기재)");
                p.sta00_00_01.set_cssclass("sta_WF_Des004");
                p.sta00_00_01.set_fittocontents("height");
                p.sta00_00_01.set_flexgrow("1");
                p.sta00_00_01.move("60.00","145","100%","40",null,null);

                p.staLabel05_00_00_00.set_taborder("7");
                p.staLabel05_00_00_00.set_text("시공사 연락처");
                p.staLabel05_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_00.move("10","98","100%","46",null,null);

                p.Edit00_00.set_taborder("8");
                p.Edit00_00.move("84","247","100%","40",null,null);

                p.pan04_00_00.set_taborder("9");
                p.pan04_00_00.set_type("vertical");
                p.pan04_00_00.set_flexgrow("1");
                p.pan04_00_00.move("10.00","98","300","86",null,null);

                p.panBlank.set_taborder("10");
                p.panBlank.set_type("vertical");
                p.panBlank.set_flexgrow("1");
                p.panBlank.move("10.00","98","300","1",null,null);

                p.pan05_00_00.set_taborder("11");
                p.pan05_00_00.set_horizontalgap("20");
                p.pan05_00_00.set_flexcrossaxiswrapalign("start");
                p.pan05_00_00.set_flexwrap("wrap");
                p.pan05_00_00.set_verticalgap("0");
                p.pan05_00_00.set_spacing("0px 20px 10px 20px");
                p.pan05_00_00.set_fittocontents("height");
                p.pan05_00_00.move("0","60","100.00%","96",null,null);

                p.pan08_00.set_taborder("12");
                p.pan08_00.set_type("vertical");
                p.pan08_00.set_cssclass("pal_WF_DtlBg");
                p.pan08_00.set_fittocontents("height");
                p.pan08_00.set_spacing("0px 0px 10px 0px ");
                p.pan08_00.move("0","570","100.00%","107",null,null);

                p.Static00.set_taborder("13");
                p.Static00.set_text("JPG,JPEG,GIF,PNG,BMP,PDF만 첨부가능(단, PDF는 1장만 첨부가능)");
                p.Static00.set_cssclass("sta_WF_Des");
                p.Static00.set_fittocontents("height");
                p.Static00.move("83","444","100%","40",null,null);

                p.staLabel05_00_00.set_taborder("14");
                p.staLabel05_00_00.set_text("시공사 회사명");
                p.staLabel05_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00.move("10","98","100%","46",null,null);

                p.Edit00.set_taborder("15");
                p.Edit00.move("84","247","100%","40",null,null);

                p.pan04_00.set_taborder("16");
                p.pan04_00.set_type("vertical");
                p.pan04_00.set_flexgrow("1");
                p.pan04_00.move("10.00","98","300","86",null,null);

                p.staLabel05_01_00.set_taborder("17");
                p.staLabel05_01_00.set_text("시공사 담당자명");
                p.staLabel05_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_01_00.move("10","98","100%","46",null,null);

                p.Edit01.set_taborder("18");
                p.Edit01.move("568","251","100%","40",null,null);

                p.pan05_01.set_taborder("19");
                p.pan05_01.set_type("vertical");
                p.pan05_01.set_flexgrow("1");
                p.pan05_01.move("10.00","98","300","86",null,null);

                p.staLabel00_02.set_taborder("20");
                p.staLabel00_02.set_text("시공사의 개인정보수집 및 이용동의서");
                p.staLabel00_02.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02.set_flexgrow("1");
                p.staLabel00_02.move("0","0","490","46",null,null);

                p.Button00_00.set_taborder("21");
                p.Button00_00.set_text("동의서양식다운로드");
                p.Button00_00.set_cssclass("btn_WF_Small");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("244.00","0","131","40",null,null);

                p.btn_file_1.set_taborder("22");
                p.btn_file_1.set_text("파일선택");
                p.btn_file_1.set_cssclass("btn_WF_FileUp");
                p.btn_file_1.move("374.00","0","116","40",null,null);

                p.panBtnFile.set_taborder("23");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexcrossaxisalign("start");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("490.00","0","490","46",null,null);

                p.panTitle.set_taborder("24");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.move("20","10","100%","46",null,null);

                p.Grid00_00.set_taborder("25");
                p.Grid00_00.set_binddataset("dsFile1");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00.move("20.00","110","100%","40",null,null);

                p.panFile.set_taborder("26");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("1456","2096","100%","161",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_00_00.form
            obj = new Layout("mobile","",0,0,this.div00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_00_00.form
            obj = new Layout("Layout0","",0,0,this.div00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00_00_00_00.form.divEdtPop01.form
            obj = new Layout("default","",0,0,this.div00_00_00_00.form.divEdtPop01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_cssclass("edt_WF_EdtSch");
                p.Edit00.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("Edit00:-40","0","40","40",null,null);
            	}
            );
            this.div00_00_00_00.form.divEdtPop01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_00_00_00.form.divEdtPop01.form
            obj = new Layout("mobile","",0,0,this.div00_00_00_00.form.divEdtPop01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.div00_00_00_00.form.divEdtPop01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_00_00_00.form.divEdtPop01.form
            obj = new Layout("Layout0","",0,0,this.div00_00_00_00.form.divEdtPop01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.div00_00_00_00.form.divEdtPop01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00_00_00_00.form.divGrd.form
            obj = new Layout("default","",0,0,this.div00_00_00_00.form.divGrd.form,
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
                p.Grid00.move("0","panGrdBtn:10","100.00%","246",null,null);

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
            	}
            );
            obj.set_verticalgap("20");
            this.div00_00_00_00.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_00_00_00.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.div00_00_00_00.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.div00_00_00_00.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_00_00_00.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.div00_00_00_00.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.div00_00_00_00.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00_00_00_00.form
            obj = new Layout("default","",0,0,this.div00_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel02_00.set_taborder("1");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.move("20.00","242","300","86",null,null);

                p.pan02.set_taborder("2");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("4");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","242","100.00%","137",null,null);

                p.Radio00.set_taborder("4");
                p.Radio00.set_innerdataset(div00_00_00_00_form_Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_direction("vertical");
                p.Radio00.set_fittocontents("width");
                p.Radio00.set_value("0");
                p.Radio00.set_index("0");
                p.Radio00.move("124","145","100%","31",null,null);

                p.pan08.set_taborder("3");
                p.pan08.set_cssclass("pal_WF_DtlBg");
                p.pan08.set_spacing("0px 20px 10px 20px");
                p.pan08.set_flexwrap("wrap");
                p.pan08.set_horizontalgap("20");
                p.pan08.set_fittocontents("height");
                p.pan08.move("0","187","100.00%","146",null,null);

                p.Static01_00_00.set_taborder("12");
                p.Static01_00_00.set_text("일반터미널 지역 및 화물터미널 지역이 분리되어 두 지역 모두에서 작업을 진행 할 경우 각 1건씩 작업신고서를 따로 신청해주셔야합니다.");
                p.Static01_00_00.set_fittocontents("height");
                p.Static01_00_00.set_cssclass("sta_WF_Des");
                p.Static01_00_00.move("10.00","2820","100%","40",null,null);

                p.Static01.set_taborder("8");
                p.Static01.set_text("아웃소싱용역업무”는 공항공사와 아웃소싱용역 체결된 건으로 작업신고서 신청시 해당 감독자에게 자동으로 협의완료요청됩니다.");
                p.Static01.set_fittocontents("height");
                p.Static01.set_cssclass("sta_WF_Des");
                p.Static01.move("72","238","100%","40",null,null);

                p.staLabel05_01_00_00.set_taborder("5");
                p.staLabel05_01_00_00.set_text("용역/공사 담당자(성명기입)");
                p.staLabel05_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_01_00_00.move("10","98","100%","46",null,null);

                p.pan05_01_00.set_taborder("6");
                p.pan05_01_00.set_type("vertical");
                p.pan05_01_00.set_flexgrow("1");
                p.pan05_01_00.move("10.00","98","300","86",null,null);

                p.divEdtPop01.set_taborder("7");
                p.divEdtPop01.set_text("Div00");
                p.divEdtPop01.set_formscrollbartype("none none");
                p.divEdtPop01.set_formscrolltype("none");
                p.divEdtPop01.set_flexgrow("1");
                p.divEdtPop01.move("20.00","715","100%","40",null,null);

                p.staLabel05_00_00_00.set_taborder("9");
                p.staLabel05_00_00_00.set_text("지역구분");
                p.staLabel05_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_00.move("10","98","100%","46",null,null);

                p.Radio01_00.set_taborder("10");
                p.Radio01_00.set_innerdataset(div00_00_00_00_form_Radio01_00_innerdataset);
                p.Radio01_00.set_codecolumn("codecolumn");
                p.Radio01_00.set_datacolumn("datacolumn");
                p.Radio01_00.set_direction("vertical");
                p.Radio01_00.set_fittocontents("width");
                p.Radio01_00.set_value("0");
                p.Radio01_00.set_index("0");
                p.Radio01_00.move("142","235","100%","40",null,null);

                p.pan04_00_00.set_taborder("11");
                p.pan04_00_00.set_type("vertical");
                p.pan04_00_00.set_flexgrow("1");
                p.pan04_00_00.set_fittocontents("height");
                p.pan04_00_00.move("10.00","98","300","86",null,null);

                p.staLabel05_00_00_00_00.set_taborder("13");
                p.staLabel05_00_00_00_00.set_text("건물구분");
                p.staLabel05_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_00_00.move("10","98","100%","46",null,null);

                p.pan04_00_00_00.set_taborder("14");
                p.pan04_00_00_00.set_type("vertical");
                p.pan04_00_00_00.set_flexgrow("1");
                p.pan04_00_00_00.set_fittocontents("height");
                p.pan04_00_00_00.set_flexwrap("wrap");
                p.pan04_00_00_00.move("20.00","326","300","176",null,null);

                p.pan08_00.set_taborder("15");
                p.pan08_00.set_cssclass("pal_WF_DtlBg");
                p.pan08_00.set_spacing("0px 20px 10px 20px");
                p.pan08_00.set_flexwrap("wrap");
                p.pan08_00.set_horizontalgap("20");
                p.pan08_00.set_fittocontents("height");
                p.pan08_00.move("0","333","100.00%","188",null,null);

                p.Panel02.set_taborder("25");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.move("180","469","100%","40",null,null);

                p.CheckBox06.set_taborder("28");
                p.CheckBox06.set_text("제2합동청사");
                p.CheckBox06.set_value("true");
                p.CheckBox06.move("236.00","0","123","40",null,null);

                p.Panel01.set_taborder("21");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.move("219","444","100%","40",null,null);

                p.Static02.set_taborder("22");
                p.Static02.set_text("[제2터미널역]");
                p.Static02.move("102","441","100","40",null,null);

                p.Static00.set_taborder("20");
                p.Static00.set_text("[제1터미널역]");
                p.Static00.move("631","390","100","40",null,null);

                p.CheckBox02.set_taborder("19");
                p.CheckBox02.set_text("탑승동");
                p.CheckBox02.set_value("true");
                p.CheckBox02.move("338","389","88","40",null,null);

                p.CheckBox00.set_taborder("16");
                p.CheckBox00.set_text("제1교통센터");
                p.CheckBox00.set_value("true");
                p.CheckBox00.move("60","397","123","40",null,null);

                p.CheckBox01.set_taborder("17");
                p.CheckBox01.set_text("제1여객터미널");
                p.CheckBox01.set_value("true");
                p.CheckBox01.move("223","399","136","40",null,null);

                p.Panel00.set_taborder("18");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("20","394","100%","40",null,null);

                p.CheckBox03.set_taborder("23");
                p.CheckBox03.set_text("제2여객터미널");
                p.CheckBox03.set_value("true");
                p.CheckBox03.move("100.00","0","136","40",null,null);

                p.CheckBox04.set_taborder("24");
                p.CheckBox04.set_text("제2교통센터");
                p.CheckBox04.set_value("true");
                p.CheckBox04.move("236.00","0","123","40",null,null);

                p.CheckBox09.set_taborder("31");
                p.CheckBox09.set_text("인재개발원");
                p.CheckBox09.set_fittocontents("width");
                p.CheckBox09.set_value("true");
                p.CheckBox09.move("757","468","116","40",null,null);

                p.CheckBox08.set_taborder("30");
                p.CheckBox08.set_text("AICC");
                p.CheckBox08.set_fittocontents("width");
                p.CheckBox08.set_value("true");
                p.CheckBox08.move("359.00","0","88","40",null,null);

                p.CheckBox07.set_taborder("29");
                p.CheckBox07.set_text("기타부대건물");
                p.CheckBox07.set_value("true");
                p.CheckBox07.move("359.00","0","129","40",null,null);

                p.CheckBox05.set_taborder("27");
                p.CheckBox05.set_text("제1청사동");
                p.CheckBox05.set_value("true");
                p.CheckBox05.move("100.00","0","136","40",null,null);

                p.Static03.set_taborder("26");
                p.Static03.set_text("[기타그외지역]");
                p.Static03.move("89","473","100","40",null,null);

                p.staLabel05_00_00_00_00_00.set_taborder("32");
                p.staLabel05_00_00_00_00_00.set_text("보안구역여부");
                p.staLabel05_00_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_00_00_00.move("10","98","100%","46",null,null);

                p.CheckBox01_00.set_taborder("33");
                p.CheckBox01_00.set_text("A/S(보호구역)");
                p.CheckBox01_00.set_value("true");
                p.CheckBox01_00.move("223","399","136","40",null,null);

                p.CheckBox00_00.set_taborder("34");
                p.CheckBox00_00.set_text("L/S(일반지역)");
                p.CheckBox00_00.set_value("true");
                p.CheckBox00_00.move("60","397","123","40",null,null);

                p.Panel00_00.set_taborder("35");
                p.Panel00_00.set_flexwrap("wrap");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.move("20","394","100%","40",null,null);

                p.Static03_00.set_taborder("36");
                p.Static03_00.set_text("A/S(보호구역):출입허가가 필요한 보안구역(보안검색이 완료된 구역)");
                p.Static03_00.set_cssclass("sta_WF_Des");
                p.Static03_00.set_fittocontents("height");
                p.Static03_00.set_flexgrow("1");
                p.Static03_00.move("20.00","607","305","40",null,null);

                p.Panel02_01.set_taborder("37");
                p.Panel02_01.set_fittocontents("height");
                p.Panel02_01.set_flexwrap("wrap");
                p.Panel02_01.set_horizontalgap("20");
                p.Panel02_01.set_verticalgap("4");
                p.Panel02_01.move("180","469","100%","40",null,null);

                p.pan04_00_00_00_00.set_taborder("38");
                p.pan04_00_00_00_00.set_type("vertical");
                p.pan04_00_00_00_00.set_flexgrow("1");
                p.pan04_00_00_00_00.set_fittocontents("height");
                p.pan04_00_00_00_00.set_flexwrap("wrap");
                p.pan04_00_00_00_00.move("20.00","326","300","126",null,null);

                p.pan08_00_00.set_taborder("39");
                p.pan08_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan08_00_00.set_spacing("0px 20px 10px 20px");
                p.pan08_00_00.set_flexwrap("wrap");
                p.pan08_00_00.set_horizontalgap("20");
                p.pan08_00_00.set_fittocontents("height");
                p.pan08_00_00.move("0","333","100.00%","137",null,null);

                p.Static04.set_taborder("40");
                p.Static04.set_text("항공기 이동지역(계류장, E구역)에서 작업할 경우 작업신고서와는 별도로 이동지역 작업신고서를 반드시 신청 및 승인 받아야 합니다. (필수사항)");
                p.Static04.set_cssclass("sta_WF_Des");
                p.Static04.set_fittocontents("height");
                p.Static04.set_flexgrow("1");
                p.Static04.move("488","628","302","40",null,null);

                p.staLabel05_00_00.set_taborder("41");
                p.staLabel05_00_00.set_text("작업장위치");
                p.staLabel05_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00.move("10","98","100%","46",null,null);

                p.Edit00.set_taborder("42");
                p.Edit00.move("84","247","100%","40",null,null);

                p.pan04_00.set_taborder("43");
                p.pan04_00.set_type("vertical");
                p.pan04_00.set_flexgrow("1");
                p.pan04_00.move("10.00","98","300","86",null,null);

                p.staLabel05_01_00.set_taborder("44");
                p.staLabel05_01_00.set_text("총 작업인원");
                p.staLabel05_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_01_00.move("10","98","100%","46",null,null);

                p.Edit01.set_taborder("45");
                p.Edit01.move("568","251","100%","40",null,null);

                p.pan05_01.set_taborder("46");
                p.pan05_01.set_type("vertical");
                p.pan05_01.set_flexgrow("1");
                p.pan05_01.move("10.00","98","300","86",null,null);

                p.pan08_01.set_taborder("47");
                p.pan08_01.set_cssclass("pal_WF_DtlBg");
                p.pan08_01.set_fittocontents("height");
                p.pan08_01.set_spacing("0px 20px 10px 20px");
                p.pan08_01.set_flexwrap("wrap");
                p.pan08_01.set_horizontalgap("20");
                p.pan08_01.move("0","570","100.00%","96",null,null);

                p.staLabel05_00_00_01.set_taborder("48");
                p.staLabel05_00_00_01.set_text("작업시작일");
                p.staLabel05_00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_01.move("10","98","100%","46",null,null);

                p.Calendar00.set_taborder("49");
                p.Calendar00.set_dateformat("yyyy-MM-dd");
                p.Calendar00.move("67","623","145","40",null,null);

                p.pan04_00_01.set_taborder("50");
                p.pan04_00_01.set_type("vertical");
                p.pan04_00_01.set_flexgrow("1");
                p.pan04_00_01.set_fittocontents("height");
                p.pan04_00_01.set_verticalgap("4");
                p.pan04_00_01.move("10.00","98","300","130",null,null);

                p.staLabel05_01_00_01.set_taborder("51");
                p.staLabel05_01_00_01.set_text("작업종료일");
                p.staLabel05_01_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel05_01_00_01.move("10","98","100%","46",null,null);

                p.Calendar01.set_taborder("52");
                p.Calendar01.set_dateformat("yyyy-MM-dd");
                p.Calendar01.move("570","621","145","40",null,null);

                p.pan05_01_01.set_taborder("53");
                p.pan05_01_01.set_type("vertical");
                p.pan05_01_01.set_flexgrow("1");
                p.pan05_01_01.set_fittocontents("height");
                p.pan05_01_01.set_verticalgap("4");
                p.pan05_01_01.move("10.00","98","300","130",null,null);

                p.pan05_00.set_taborder("54");
                p.pan05_00.set_horizontalgap("20");
                p.pan05_00.set_flexcrossaxiswrapalign("start");
                p.pan05_00.set_flexwrap("wrap");
                p.pan05_00.set_verticalgap("0");
                p.pan05_00.set_spacing("0px 20px 10px 20px");
                p.pan05_00.set_fittocontents("height");
                p.pan05_00.set_cssclass("pal_WF_DtlBg");
                p.pan05_00.move("0","60","100.00%","140",null,null);

                p.Static06.set_taborder("56");
                p.Static06.set_text("작업신청 가능기간은 최대 7일입니다(휴일포함)");
                p.Static06.set_cssclass("sta_WF_Des");
                p.Static06.set_fittocontents("height");
                p.Static06.move("732","792","100%","40",null,null);

                p.Static05.set_taborder("55");
                p.Static05.set_text("작업전 24시간 이전에 등록하시기 바랍니다.");
                p.Static05.set_cssclass("sta_WF_Des");
                p.Static05.set_fittocontents("height");
                p.Static05.move("382","802","100%","40",null,null);

                p.staLabel05_00_00_00_01.set_taborder("57");
                p.staLabel05_00_00_00_01.set_text("작업목적");
                p.staLabel05_00_00_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_00_01.move("10","98","100%","46",null,null);

                p.Radio01_00_00.set_taborder("58");
                p.Radio01_00_00.set_innerdataset(div00_00_00_00_form_Radio01_00_00_innerdataset);
                p.Radio01_00_00.set_codecolumn("codecolumn");
                p.Radio01_00_00.set_datacolumn("datacolumn");
                p.Radio01_00_00.set_direction("vertical");
                p.Radio01_00_00.set_fittocontents("width");
                p.Radio01_00_00.set_value("0");
                p.Radio01_00_00.set_index("0");
                p.Radio01_00_00.move("142","235","100%","40",null,null);

                p.pan04_00_00_01.set_taborder("59");
                p.pan04_00_00_01.set_type("vertical");
                p.pan04_00_00_01.set_flexgrow("1");
                p.pan04_00_00_01.set_fittocontents("height");
                p.pan04_00_00_01.move("10.00","98","300","86",null,null);

                p.pan08_02.set_taborder("60");
                p.pan08_02.set_cssclass("pal_WF_DtlBg");
                p.pan08_02.set_spacing("0px 20px 10px 20px");
                p.pan08_02.set_flexwrap("wrap");
                p.pan08_02.set_horizontalgap("20");
                p.pan08_02.set_fittocontents("height");
                p.pan08_02.move("0","187","100%","97",null,null);

                p.staLabel05_00_00_00_01_00.set_taborder("61");
                p.staLabel05_00_00_00_01_00.set_text("공사작업명");
                p.staLabel05_00_00_00_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_00_01_00.move("10","98","100%","46",null,null);

                p.pan04_00_00_01_00.set_taborder("62");
                p.pan04_00_00_01_00.set_type("vertical");
                p.pan04_00_00_01_00.set_flexgrow("1");
                p.pan04_00_00_01_00.set_fittocontents("height");
                p.pan04_00_00_01_00.move("10.00","98","300","86",null,null);

                p.pan08_02_00.set_taborder("63");
                p.pan08_02_00.set_cssclass("pal_WF_DtlBg");
                p.pan08_02_00.set_spacing("0px 20px 10px 20px");
                p.pan08_02_00.set_flexwrap("wrap");
                p.pan08_02_00.set_horizontalgap("20");
                p.pan08_02_00.set_fittocontents("height");
                p.pan08_02_00.move("0","187","100%","97",null,null);

                p.Edit02.set_taborder("64");
                p.Edit02.move("78","1058","100%","40",null,null);

                p.staLabel05_00_00_00_01_00_00.set_taborder("65");
                p.staLabel05_00_00_00_01_00_00.set_text("작업내용");
                p.staLabel05_00_00_00_01_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel05_00_00_00_01_00_00.set_flexgrow("1");
                p.staLabel05_00_00_00_01_00_00.move("10","98","100%","46",null,null);

                p.pan04_00_00_01_00_00.set_taborder("66");
                p.pan04_00_00_01_00_00.set_type("vertical");
                p.pan04_00_00_01_00_00.set_flexgrow("1");
                p.pan04_00_00_01_00_00.set_fittocontents("height");
                p.pan04_00_00_01_00_00.set_verticalgap("4");
                p.pan04_00_00_01_00_00.move("10.00","98","300","220",null,null);

                p.pan08_02_00_00.set_taborder("67");
                p.pan08_02_00_00.set_spacing("0px 20px 10px 20px");
                p.pan08_02_00_00.set_flexwrap("wrap");
                p.pan08_02_00_00.set_horizontalgap("20");
                p.pan08_02_00_00.set_fittocontents("height");
                p.pan08_02_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan08_02_00_00.set_verticalgap("8");
                p.pan08_02_00_00.move("0","1088","100%","483",null,null);

                p.Static07.set_taborder("69");
                p.Static07.set_text("원활한 작업신고서 출력을 위해 [작업내용] 및 [다중 작업내용]은 전체 1300자 내로 작성해주시길 바랍니다.");
                p.Static07.set_fittocontents("height");
                p.Static07.set_cssclass("sta_WF_Des");
                p.Static07.move("982","1204","100%","40",null,null);

                p.Static08.set_taborder("70");
                p.Static08.set_text("다중작업인 경우 아래 표 기재");
                p.Static08.set_fittocontents("height");
                p.Static08.set_cssclass("sta_WF_Des");
                p.Static08.move("201","1198","100%","40",null,null);

                p.TextArea00.set_taborder("68");
                p.TextArea00.move("67","1157","100%","80",null,null);

                p.divGrd.set_taborder("71");
                p.divGrd.set_text("Div01");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.set_fittocontents("height");
                p.divGrd.move("0","30","100%","290",null,null);

                p.staLabel03_00.set_taborder("0");
                p.staLabel03_00.set_text("공사(작업)구분");
                p.staLabel03_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00.move("10","98","100%","46",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_00_00_00.form
            obj = new Layout("mobile","",0,0,this.div00_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_00_00_00.form
            obj = new Layout("Layout0","",0,0,this.div00_00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00_00_00_01.form.divGrd.form
            obj = new Layout("default","",0,0,this.div00_00_00_01.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_taborder("1");
                p.Grid00.set_binddataset("ds00");
                p.Grid00.move("0","0","100.00%",null,null,"0");
            	}
            );
            obj.set_verticalgap("20");
            this.div00_00_00_01.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_00_00_01.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.div00_00_00_01.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.div00_00_00_01.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_00_00_01.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.div00_00_00_01.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.div00_00_00_01.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00_00_00_01.form
            obj = new Layout("default","",0,0,this.div00_00_00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00_02.set_taborder("2");
                p.Panel00_02.set_fittocontents("height");
                p.Panel00_02.move("60.00","107","100.00%","40",null,null);

                p.pan02.set_taborder("0");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_spacing("10px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.set_verticalgap("4");
                p.pan02.move("0","242","100.00%","497",null,null);

                p.Static00.set_taborder("4");
                p.Static00.set_text("화기작업(용접/그라인딩(불꽃발생), 신나사용 페인팅작업, 가연성원료 사용작업) 전 반드시 SMIS(안전관리정보시스템) 작업허가서 등록  ");
                p.Static00.set_cssclass("sta_WF_Des");
                p.Static00.set_fittocontents("height");
                p.Static00.move("91","411","100%","40",null,null);

                p.Static01.set_taborder("5");
                p.Static01.set_text("SMIS 작업허가서 : 1일(주/야간) 단위로 등록");
                p.Static01.set_cssclass("sta_WF_Des2");
                p.Static01.set_fittocontents("height");
                p.Static01.move("206","410","100%","40",null,null);

                p.Static02.set_taborder("6");
                p.Static02.set_text("공항소방대는 SMIS 작업허가서 등록 화기작업장 대하여 안전조치 점검 후 “허가증” 발급");
                p.Static02.set_cssclass("sta_WF_Des");
                p.Static02.set_fittocontents("height");
                p.Static02.move("321","410","100%","40",null,null);

                p.divGrd.set_taborder("3");
                p.divGrd.set_text("Div01");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","30","100%","300",null,null);

                p.sta00_00_01.set_taborder("1");
                p.sta00_00_01.set_text("■ 작업협의완료 후 \"용접기/그라인더 사용\" 작업 변경 시 작업일자 1일전까지 반드시 변경사항 입력(위치 : My Page → 나의할일)");
                p.sta00_00_01.set_cssclass("sta_WF_Des004");
                p.sta00_00_01.set_fittocontents("height");
                p.sta00_00_01.set_flexgrow("1");
                p.sta00_00_01.move("60.00","145","100.00%","40",null,null);

                p.Static02_00.set_taborder("7");
                p.Static02_00.set_text("불시점검 중 SMIS 미등록 작업 / 안전조치 미흡 작업은 허가증 발급된 경우라도 작업 중단");
                p.Static02_00.set_cssclass("sta_WF_Des");
                p.Static02_00.set_fittocontents("height");
                p.Static02_00.move("321","410","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_00_00_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_00_00_01.form
            obj = new Layout("mobile","",0,0,this.div00_00_00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_00_00_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_00_00_01.form
            obj = new Layout("Layout0","",0,0,this.div00_00_00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_00_00_01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPrvcWtcs.form
            obj = new Layout("default","",0,0,this.divPrvcWtcs.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02.set_taborder("0");
                p.Static02.set_text("■ 입주자서비스포털은 배정 받은 공간에 대한 시설물 설치(변경) 신청 서비스 제공을 위해 아래와 같이 개인정보를 수집 이용하고자 합니다.\r\n내용을 자세히 읽은신 후 동의여부를 결정하야 주시길 바랍니다.");
                p.Static02.set_cssclass("sta_WF_Des004");
                p.Static02.set_fittocontents("height");
                p.Static02.move("71","3301","100.00%","47",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_text("개인정보 수집 이용내역");
                p.Static01.set_cssclass("sta_WF_Label");
                p.Static01.set_flexgrow("1");
                p.Static01.move("20","3286","100%","46",null,null);

                p.Grid00.set_taborder("2");
                p.Grid00.set_binddataset("Dataset00");
                p.Grid00.set_autofittype("col");
                p.Grid00.move("0","44","100.00%","220",null,null);

                p.Panel07.set_taborder("5");
                p.Panel07.set_flexgrow("1");
                p.Panel07.set_type("vertical");
                p.Panel07.set_fittocontents("height");
                p.Panel07.set_verticalgap("4");
                p.Panel07.move("20","3346","1100","414",null,null);

                p.Panel01.set_taborder("6");
                p.Panel01.set_spacing("10px 20px 10px 20px");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.move("0","3336","100.00%","425",null,null);

                p.Static05.set_taborder("7");
                p.Static05.set_text("개인정보(필수) 수집이용 동의 여부");
                p.Static05.set_cssclass("sta_WF_Label_E");
                p.Static05.move("137","3798","100%","46",null,null);

                p.chkPrvcClctEsntlAgreYn.set_taborder("8");
                p.chkPrvcClctEsntlAgreYn.set_truevalue("1");
                p.chkPrvcClctEsntlAgreYn.set_falsevalue("0");
                p.chkPrvcClctEsntlAgreYn.set_value("0");
                p.chkPrvcClctEsntlAgreYn.move("87","3847","46","40",null,null);

                p.Static06.set_taborder("9");
                p.Static06.set_text("신청자의 개인정보수집 및 이용동의 여부(필수항목)");
                p.Static06.set_cssclass("sta_WF_Des");
                p.Static06.set_fittocontents("height");
                p.Static06.move("45","3881","100%","30",null,null);

                p.Panel10.set_taborder("10");
                p.Panel10.set_type("vertical");
                p.Panel10.set_verticalgap("4");
                p.Panel10.set_fittocontents("height");
                p.Panel10.set_flexgrow("1");
                p.Panel10.move("20","3771","300","124",null,null);

                p.Panel09.set_taborder("11");
                p.Panel09.set_spacing("10px 20px 10px 20px");
                p.Panel09.set_horizontalgap("20");
                p.Panel09.set_flexwrap("wrap");
                p.Panel09.set_cssclass("pal_WF_DtlBg");
                p.Panel09.set_fittocontents("height");
                p.Panel09.move("0","3761","100.00%","150",null,null);

                p.Static07.set_taborder("12");
                p.Static07.set_text("개인정보(선택) 수집이용 동의 여부");
                p.Static07.set_cssclass("sta_WF_Label_E");
                p.Static07.move("93","3950","100%","46",null,null);

                p.rdoPrvcClctChcAgreYn.set_taborder("13");
                p.rdoPrvcClctChcAgreYn.set_innerdataset(divPrvcWtcs_form_rdoPrvcClctChcAgreYn_innerdataset);
                p.rdoPrvcClctChcAgreYn.set_codecolumn("codecolumn");
                p.rdoPrvcClctChcAgreYn.set_datacolumn("datacolumn");
                p.rdoPrvcClctChcAgreYn.set_columncount("2");
                p.rdoPrvcClctChcAgreYn.set_fittocontents("width");
                p.rdoPrvcClctChcAgreYn.move("20.00","3878","470","40",null,null);

                p.Static08.set_taborder("14");
                p.Static08.set_text("신청자의 개인정보수집 및 이용동의여부(선택항목)");
                p.Static08.set_cssclass("sta_WF_Des");
                p.Static08.set_fittocontents("height");
                p.Static08.move("148","4030","100%","30",null,null);

                p.Static09.set_taborder("15");
                p.Static09.set_text("선택항목에 해당하는 정보를 입력하지 않으셔도 서비스 이용에는 제한이 없습니다,");
                p.Static09.set_cssclass("sta_WF_Des2");
                p.Static09.set_fittocontents("height");
                p.Static09.move("48","4062","100%","30",null,null);

                p.Panel12.set_taborder("16");
                p.Panel12.set_type("vertical");
                p.Panel12.set_verticalgap("4");
                p.Panel12.set_fittocontents("height");
                p.Panel12.set_flexgrow("1");
                p.Panel12.move("20","3921","300","158",null,null);

                p.Panel11.set_taborder("17");
                p.Panel11.set_cssclass("pal_WF_DtlBg");
                p.Panel11.set_spacing("10px 20px 10px 20px");
                p.Panel11.set_horizontalgap("20");
                p.Panel11.move("0","3911","100.00%","179",null,null);

                p.Static04.set_taborder("4");
                p.Static04.set_text("필수 항목 수집•이용 동의를 거부하실 경우 시설물 설치(변경) 신청을 하실수 없으시나, 선택 항목 수집 이용•동의를 거부하셔도 시설물 설치(변경) 신청에는 제한이 없습니다.");
                p.Static04.set_cssclass("sta_WF_Des2");
                p.Static04.set_fittocontents("height");
                p.Static04.move("73","3748","100%","60",null,null);

                p.Static03.set_taborder("3");
                p.Static03.set_text("위의 개인정보 수집•이용에 대한 동의를 거부할 권리가 있습니다.\r\n그러나 필수 항목 수집•이용 동의를 거부할 경우 시설물 설치(변경) 신청을 할 수 없습니다.");
                p.Static03.set_fittocontents("height");
                p.Static03.set_cssclass("sta_WF_Des");
                p.Static03.set_color("red");
                p.Static03.move("113","3670","100%","60",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divPrvcWtcs.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPrvcWtcs.form
            obj = new Layout("Layout0","",0,0,this.divPrvcWtcs.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divPrvcWtcs.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPrvcWtcs.form
            obj = new Layout("Layout0","",0,0,this.divPrvcWtcs.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divPrvcWtcs.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("협의/신청정보");

                p.panForm.set_taborder("0");
                p.panForm.set_type("vertical");
                p.panForm.set_fittocontents("height");
                p.panForm.move("0","0","100.00%","4593",null,null);

                p.staSubTitle.set_taborder("1");
                p.staSubTitle.set_text("협의정보");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("100","30","100%","50",null,null);

                p.Panel01.set_taborder("2");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_spacing("0px 10px 0px 10px");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01.move("917","30","200","50",null,null);

                p.Button01.set_taborder("4");
                p.Button01.set_cssclass("btn_WF_ACPlus");
                p.Button01.set_visible("false");
                p.Button01.move("760","20","34","32",null,null);

                p.Button00.set_taborder("5");
                p.Button00.set_cssclass("btn_WF_ACMinus");
                p.Button00.move("765","30","34","34",null,null);

                p.panTitle.set_taborder("3");
                p.panTitle.set_fittocontents("none");
                p.panTitle.set_flexcrossaxisalign("end");
                p.panTitle.set_minheight("70");
                p.panTitle.set_maxheight("");
                p.panTitle.move("1357","451","100.00%","70",null,null);

                p.div00_01_02.set_taborder("6");
                p.div00_01_02.set_text("신청자정보");
                p.div00_01_02.set_cssclass("div_WF_Bg");
                p.div00_01_02.set_fittocontents("height");
                p.div00_01_02.move("1710","288","100%","412",null,null);

                p.staSubTitle00.set_taborder("7");
                p.staSubTitle00.set_text("신청정보(주관사)");
                p.staSubTitle00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00.move("-5","582","100%","50",null,null);

                p.Panel02.set_taborder("8");
                p.Panel02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel02.set_spacing("0px 10px 0px 10px");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexcrossaxisalign("center");
                p.Panel02.set_flexmainaxisalign("end");
                p.Panel02.move("1220","582","213","50",null,null);

                p.panTitle01.set_taborder("9");
                p.panTitle01.set_fittocontents("none");
                p.panTitle01.set_flexcrossaxisalign("end");
                p.panTitle01.set_minheight("70");
                p.panTitle01.set_maxheight("");
                p.panTitle01.move("-5","582","100%","70",null,null);

                p.Button01_00.set_taborder("10");
                p.Button01_00.set_cssclass("btn_WF_ACPlus");
                p.Button01_00.set_visible("true");
                p.Button01_00.move("1257","497","34","27",null,null);

                p.Button00_00.set_taborder("11");
                p.Button00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00.move("1285","477","34","29",null,null);

                p.div00_00.set_taborder("12");
                p.div00_00.set_text("신청정보");
                p.div00_00.set_cssclass("div_WF_Bg");
                p.div00_00.set_fittocontents("height");
                p.div00_00.move("1420","779","100%","409",null,null);

                p.div00_00_00.set_taborder("13");
                p.div00_00_00.set_text("신청정보");
                p.div00_00_00.set_cssclass("div_WF_Bg");
                p.div00_00_00.set_fittocontents("height");
                p.div00_00_00.move("1850","573","100%","487",null,null);

                p.div00_00_00_00.set_taborder("14");
                p.div00_00_00_00.set_text("신청정보");
                p.div00_00_00_00.set_cssclass("div_WF_Bg");
                p.div00_00_00_00.set_fittocontents("height");
                p.div00_00_00_00.move("2010","1220","100.00%","1521",null,null);

                p.div00_00_00_01.set_taborder("15");
                p.div00_00_00_01.set_text("신청정보");
                p.div00_00_00_01.set_cssclass("div_WF_Bg");
                p.div00_00_00_01.set_fittocontents("height");
                p.div00_00_00_01.move("1390","3115","100.00%","537",null,null);

                p.staSubTitle01.set_taborder("16");
                p.staSubTitle01.set_text("신청정보 (시공사)");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("100","1160","100%","50",null,null);

                p.Panel02_00.set_taborder("17");
                p.Panel02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel02_00.set_flexcrossaxisalign("center");
                p.Panel02_00.set_flexmainaxisalign("end");
                p.Panel02_00.set_horizontalgap("10");
                p.Panel02_00.set_spacing("0px 10px 0px 10px");
                p.Panel02_00.move("916","1160","200","50",null,null);

                p.panTitle02.set_taborder("18");
                p.panTitle02.set_fittocontents("none");
                p.panTitle02.set_flexcrossaxisalign("end");
                p.panTitle02.set_minheight("70");
                p.panTitle02.set_maxheight("");
                p.panTitle02.move("100","1160","100%","70",null,null);

                p.Button02.set_taborder("19");
                p.Button02.set_cssclass("btn_WF_ACPlus");
                p.Button02.set_visible("false");
                p.Button02.move("800","990","34","26",null,null);

                p.Button01_01.set_taborder("20");
                p.Button01_01.set_cssclass("btn_WF_ACMinus");
                p.Button01_01.move("773","970","34","31",null,null);

                p.staSubTitle02.set_taborder("21");
                p.staSubTitle02.set_text("작업계획");
                p.staSubTitle02.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02.set_maxheight("");
                p.staSubTitle02.move("213","1690","100%","50",null,null);

                p.Panel03_00.set_taborder("22");
                p.Panel03_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel03_00.set_flexcrossaxisalign("center");
                p.Panel03_00.set_flexmainaxisalign("end");
                p.Panel03_00.set_horizontalgap("10");
                p.Panel03_00.set_spacing("0px 10px 0px 10px");
                p.Panel03_00.move("1033","1690","200","50",null,null);

                p.Panel04.set_taborder("23");
                p.Panel04.set_fittocontents("none");
                p.Panel04.set_flexcrossaxisalign("end");
                p.Panel04.set_minheight("70");
                p.Panel04.set_maxheight("");
                p.Panel04.move("213","1690","100%","70",null,null);

                p.Button01_02.set_taborder("24");
                p.Button01_02.set_cssclass("btn_WF_ACPlus");
                p.Button01_02.set_visible("false");
                p.Button01_02.move("1170","1530","34","32",null,null);

                p.Button00_01.set_taborder("25");
                p.Button00_01.set_cssclass("btn_WF_ACMinus");
                p.Button00_01.move("1150","1520","34","34",null,null);

                p.staSubTitle03.set_taborder("26");
                p.staSubTitle03.set_text("중요필드 일자별 입력");
                p.staSubTitle03.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle03.move("40","3210","100%","50",null,null);

                p.Panel00.set_taborder("27");
                p.Panel00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_flexmainaxisalign("end");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_spacing("0px 10px 0px 10px");
                p.Panel00.move("860","3210","200","50",null,null);

                p.Panel01_00.set_taborder("28");
                p.Panel01_00.set_fittocontents("none");
                p.Panel01_00.set_flexcrossaxisalign("end");
                p.Panel01_00.set_minheight("70");
                p.Panel01_00.set_maxheight("");
                p.Panel01_00.move("40","3210","100%","70",null,null);

                p.Button01_03.set_taborder("29");
                p.Button01_03.set_cssclass("btn_WF_ACPlus");
                p.Button01_03.set_visible("false");
                p.Button01_03.move("750","3170","34","30",null,null);

                p.Button00_02.set_taborder("30");
                p.Button00_02.set_cssclass("btn_WF_ACMinus");
                p.Button00_02.move("740","3176","34","34",null,null);

                p.staSubTitle02_00.set_taborder("31");
                p.staSubTitle02_00.set_text("시설물 설치(변경) 신청을 위한 개인정보 수집 이용동의서");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("1866","3263","100%","50",null,null);

                p.btnPrvcWtcs.set_taborder("32");
                p.btnPrvcWtcs.set_cssclass("btn_WF_ACMinus");
                p.btnPrvcWtcs.set_visible("true");
                p.btnPrvcWtcs.move("3030","3280","34","30",null,null);

                p.Panel00_02.set_taborder("33");
                p.Panel00_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_02.set_spacing("0px 10px 0px 10px");
                p.Panel00_02.set_flexcrossaxisalign("center");
                p.Panel00_02.set_flexmainaxisalign("end");
                p.Panel00_02.set_horizontalgap("10");
                p.Panel00_02.move("3000","3263","136","50",null,null);

                p.panPrvcWtcs.set_taborder("34");
                p.panPrvcWtcs.set_flexcrossaxisalign("end");
                p.panPrvcWtcs.set_visible("false");
                p.panPrvcWtcs.set_fittocontents("none");
                p.panPrvcWtcs.set_minheight("70");
                p.panPrvcWtcs.set_maxheight("");
                p.panPrvcWtcs.move("0","3293","100%","70",null,null);

                p.divPrvcWtcs.set_taborder("35");
                p.divPrvcWtcs.set_text("Div03");
                p.divPrvcWtcs.set_formscrollbartype("none none");
                p.divPrvcWtcs.set_formscrolltype("none");
                p.divPrvcWtcs.set_fittocontents("height");
                p.divPrvcWtcs.set_visible("false");
                p.divPrvcWtcs.move("0","3363","100%","807",null,null);
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
            obj = new BindItem("item0","div00_01_02.form.rdoArptPbcprtPicChcYn","value","dsCadMaster","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPrvcWtcs.form.chkPrvcClctEsntlAgreYn","value","dsRtosAplcfm","prvcClctEsntlAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divPrvcWtcs.form.rdoPrvcClctChcAgreYn","value","dsRtosAplcfm","prvcClctEsntlAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divPrvcWtcs.form.chkPrvcClctEsntlAgreYn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divPrvcWtcs.form.rdoPrvcClctChcAgreYn","readonly","dsAtrb","roAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divPrvcWtcs.form.Static05","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divPrvcWtcs.form.Static07","cssclass","dsAtrb","ccAplcfmWrtRcpt");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CST006S02.xfdl", function() {
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
            this.div00_01_02.form.rdoArptPbcprtPicChcYn.addEventHandler("onitemchanged",this.divForm_div00_01_02_rdoArptPbcprtPicChcYn_onitemchanged,this);
            this.div00_01_02.form.btnArptPbcprtPicChc.addEventHandler("onclick",this.divForm_div00_01_02_btnArptPbcprtPicChc_onclick,this);
            this.div00_01_02.form.divEdtPop01.form.mtiArptPicId.addEventHandler("onitemchanged",this.divForm_div00_01_02_divEdtPop01_MultiCombo00_onitemchanged,this);
            this.div00_01_02.form.divEdtPop01.form.btnArptPbcprtPicSpvsrId.addEventHandler("onclick",this.divForm_div00_01_02_divEdtPop01_btnArptPbcprtPicSpvsrId_onclick,this);
            this.div00_00.form.btn_file_1.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.div00_00.form.Grid00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.div00_00.form.Grid00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.div00_00_00.form.btn_file_1.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.div00_00_00.form.Grid00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.div00_00_00.form.Grid00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.staSubTitle03.addEventHandler("onclick",this.div00_00_00_01_staSubTitle_onclick,this);
            this.btnPrvcWtcs.addEventHandler("onclick",this.Button_onclick,this);
            this.btnPrvcWtcs.addEventHandler("ondblclick",this.Button_ondblclick,this);
            this.divPrvcWtcs.form.Static02.addEventHandler("onclick",this.Static02_onclick,this);
        };
        this.loadIncludeScript("CST006S02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
