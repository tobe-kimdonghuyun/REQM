(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF073M00");
            this.set_titletext("이동지역운전자면허신청 신청서작성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
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
            obj._setContents("<ColumnInfo><Column id=\"체크\" type=\"STRING\" size=\"256\"/><Column id=\"작업일\" type=\"STRING\" size=\"256\"/><Column id=\"작업시작시간\" type=\"STRING\" size=\"256\"/><Column id=\"작업종료시간\" type=\"STRING\" size=\"256\"/><Column id=\"개요\" type=\"STRING\" size=\"256\"/><Column id=\"작업내역\" type=\"STRING\" size=\"256\"/><Column id=\"작업자회사\" type=\"STRING\" size=\"256\"/><Column id=\"신청자\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"위치구분\" type=\"STRING\" size=\"256\"/><Column id=\"위치정보\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"위치정보\">B1-3206, B1-3207, B1-3208</Col><Col id=\"위치구분\">제1교통센터</Col></Row><Row><Col id=\"위치정보\">B1-5014, B1-5014, B1-5014</Col><Col id=\"위치구분\">제2교통센터 </Col></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"수집이용항목\" type=\"STRING\" size=\"256\"/><Column id=\"수집목적\" type=\"STRING\" size=\"256\"/><Column id=\"보유기간\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:10",null,"2377","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickFrBg");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divInfoGuide","1660.00","262","100%","300",null,null,null,null,"300",null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("서비스 흐름 및 작업방법 안내");
            obj.set_cssclass("div_WF_InfoGuide");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSchClose",null,"10","34","34","10",null,null,null,null,null,this.divForm.form.divInfoGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ACPlus");
            this.divForm.form.divInfoGuide.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","100%","442",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_02_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("신청구분 ");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_02_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_00_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_02_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_02_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_02_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_00_00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_01_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("신청자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_01_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"edt00_01_00_01_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_01_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_02_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00_02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_02_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_02_02\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_00_00_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_01_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_text("등록자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_01_02","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_01_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_01_02\"/><PanelItem id=\"PanelItem03\" componentid=\"edt00_01_00_01_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_02_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_01_02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00","90","346","100%","97",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edt00_01_00_00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_02_03","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_text("등록자 휴대폰 번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00_03","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_02_03","10.00","98","305","143",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_02_03\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_01_03","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan05","0","60","100.00%","154",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_02_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_01_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta00","200.00","383","100%","47",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("24");
            obj.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("sub_tit02","1630","674","100%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div02","0","Div01:376.428","100%","1620",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","144",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("신청상태");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","305","133",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel02","54","48","100%","88",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("117");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"rdo00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdo00_00","200.00","328","100%","31",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div02_form_rdo00_00_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdo00_00_innerdataset", obj);
            divForm_form_Div02_form_rdo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신규</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">말소신규</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdo00_00_innerdataset);
            obj.set_text("Select");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00","200.00","383","100%","47",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("4");
            obj.set_text("신규 : 이동지역 운전면허를 최초로 신청할 경우\r\n말소신규 : 기존에 이동지역 운전면허를 가지고 있었으나 말소된 경우(1년 내)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("5");
            obj.set_text("이동지역출입여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_00","200.00","328","100%","31",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div02_form_rdo00_00_00_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdo00_00_00_innerdataset", obj);
            divForm_form_Div02_form_rdo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">아니요</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdo00_00_00_innerdataset);
            obj.set_text("Select");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","200.00","383","100%","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("7");
            obj.set_text("항공기의 이착륙 및 지상이동을 위해 사용되는 지역 출입여부");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10.00","98","305","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel03\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel03","755","70","100%","60",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("118");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"rdo00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("9");
            obj.set_text("운전자면허신청동일여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_01","200.00","328","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div02_form_rdo00_00_01_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdo00_00_01_innerdataset", obj);
            divForm_form_Div02_form_rdo00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">신청자정보와 동일</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신청자정보와 동일하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdo00_00_01_innerdataset);
            obj.set_text("Select");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"rdo00_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan01_00","0","60","100.00%","231",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"panFile\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("13");
            obj.set_text("운전연수확인서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("14");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_file_1","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("15");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile","433","58","305","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("16");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle","0","124","100%","80",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("17");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("18");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("19");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("20");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFileNum","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("21");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("22");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnDel","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("23");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("25");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00","200.00","383","100%","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("26");
            obj.set_text("JPG,JPEG,GIF,PNG,BMP만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile","0","42","305","220",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("27");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_02_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("28");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_02_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("30");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_00_00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_01_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("31");
            obj.set_text("소속사");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_01_01","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_01_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("33");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"edt00_01_00_01_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("34");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_01_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_02_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("35");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00_01_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_02_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("37");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_02_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edt00_01_00_00_01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_00_01_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("38");
            obj.set_text("출입증발급번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_01_01_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("39");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_00_01_01_00","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("40");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_00_01_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"edt00_01_00_01_01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan03_00","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("41");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_02_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_00_01_01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_02_03","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("42");
            obj.set_text("교육희망일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00_03","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("43");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_01","200.00","383","100%","81",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("44");
            obj.set_text("교육희망일로부터 7일 내 교육을 이수하여야하며, 미이수시 재신청 필요\r\n교육장 운영시간\r\n(T1)연중무휴 06:00~22:00\r\n(T2)평     일 09:00~18:00");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00","90","346","100%","131",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("45");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edt00_01_00_00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_02_03","10.00","98","305","177",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("46");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_02_03\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan05","0","60","100.00%","188",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("47");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj.set_flexshrink("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_02_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01_02_03_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_02_03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("48");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00_03_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("49");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","200.00","383","100%","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("50");
            obj.set_text("예)1980년12월25일 -> 801225");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","90","346","100%","80",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("51");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edt00_01_00_00_03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_02_03_00","10.00","98","305","126",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("52");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_02_03_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("53");
            obj.set_text("운전면허증사본");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("54");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("55");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("56");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","80",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("57");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("58");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_00","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("59");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("60");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFileNum00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("61");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_00","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("62");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("63");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("64");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("65");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_02","200.00","383","100%","64",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("66");
            obj.set_text("※모바일 운전면허증 첨부가능\r\n※면허증에 표시된 [주민번호 뒷자리], [주소], [면허증 번호] 마스킹(삭제) 후 첨부 바랍니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile00","0","42","305","288",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("67");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00\"/><PanelItem id=\"PanelItem05\" componentid=\"sta00_02_01\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan01_00_00","0","60","100.00%","299",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("68");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"panFile00\"/><PanelItem id=\"PanelItem01\" componentid=\"panFile00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00_00","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("69");
            obj.set_text("운전연수확인서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("70");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_file_1_00_00","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("71");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00_00","433","58","305","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("72");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle00_00","0","124","100%","80",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("73");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("0px 0px 10px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("74");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("75");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("76");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFileNum00_00","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("77");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_00_00","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("78");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00_00","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("79");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("80");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("81");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_02_00","200.00","383","100%","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("82");
            obj.set_text("JPG,JPEG,GIF,PNG,BMP만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile00_00","0","42","305","264",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("83");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_02_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn00","615","851","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("115");
            obj.set_text("연수 확인서 다운로드");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01","597","914","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("114");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn00\"/><PanelItem id=\"PanelItem02\" componentid=\"btn00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01","0","44","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("84");
            obj.set_text("개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_01","813","76","120","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("85");
            obj.set_text("샘플첨부파일명");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_file_1_01","124","58","116","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("86");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnFile01","433","58","305","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("87");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_01\"/><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panTitle01","0","124","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("88");
            obj.set_cssclass("pan_WF_FileTitle");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_01","88","123","48","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("89");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_01","165","143","9","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("90");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_01","293","131","13","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("91");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFileNum01","20","190","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("92");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1_01","512","135","125","34",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("93");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panBtnDel01","517","141","305","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("94");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_03","20","51","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("95");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00_01","20.00","114","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("96");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("panFile01","0","42","100.00%","161",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("97");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_02_03_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("98");
            obj.set_text("개인정보 수집·이용 동의");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_04","90","346","100%","97",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("99");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"txa00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_02_03_01","10.00","98","305","143",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("100");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_02_03_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_04\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan05_00","0","60","100.00%","154",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("101");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_02_03_01\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new TextArea("txa00","200.00","728","100%","100",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("102");
            obj.set_value("1. 개인정보의 수집ㆍ이용 목적\n  인계인수 신청 시 작성건의 접수와 처리를 위해 개인정보를 수집목적에 필요한 최소한의 범위 내에서 수집하고 있습니다.\n2. 수집하려는 개인정보의 항목\n  필수항목 : 총괄책임자 및 시설관리책임자 성명, 총괄책임자 및 시설관리책임자 휴대폰번호\n3. 개인정보의 보유 및 이용 기간\n  계약종료 후 3년, 회원탈퇴 시까지\n4. 동의를 거부할 권리와 거부에 따른 불이익 내용\n  귀하는 개인정보 수집에 거부할 권리가 있으며, 필수항목 수집을 거부할 경우 인계인수 승인요청서 작성건의 신청을 할 수 없습니다.");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_03","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("103");
            obj.set_text("개인정보 수집(필수) 동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_02","200.00","328","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("104");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divForm_form_Div02_form_rdo00_00_02_innerdataset = new nexacro.NormalDataset("divForm_form_Div02_form_rdo00_00_02_innerdataset", obj);
            divForm_form_Div02_form_rdo00_00_02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_Div02_form_rdo00_00_02_innerdataset);
            obj.set_text("Select");
            obj.set_value("0");
            obj.set_index("0");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("105");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"rdo00_00_02\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("106");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan01_01","0","60","100.00%","97",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("107");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_00_00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staLabel01_02_02_03_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("108");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new TextArea("txa00_00","200.00","728","100%","100",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("109");
            obj.set_displaynulltext("내용 입력");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_04_00","90","346","100%","97",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("110");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"txa00_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("Panel01_01_02_03_01_00","10.00","98","305","143",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("111");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_02_02_03_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_04_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Panel("pan05_00_00","0","60","100.00%","154",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("112");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01_02_03_01_00\"/></Contents>");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("sta00_02_01","200.00","383","100%","30",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("113");
            obj.set_text("JPG,JPEG,GIF,PNG,BMP만 첨부가능");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn00_00","615","851","100%","40",null,null,null,null,null,null,this.divForm.form.Div02.form);
            obj.set_taborder("116");
            obj.set_text("운전연수 가이드 다운로드");
            obj.set_fittocontents("width");
            this.divForm.form.Div02.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle02_00_00","1630.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_text("신청정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","2890.00","692","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01_02_00","2340.00","690","50%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divQuick",null,"62","296","111","62",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickMenu");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","17","20","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divQuick.addChild(obj.name, obj);

            obj = new Button("btn00_00","17.00","btn00:0","100%","45",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("1");
            obj.set_text("신청정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divQuick.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"divQuick:0","296","131","62",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_QuickBtnBg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","7","20","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("종료");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btn00","7","20","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("신청취소");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btn00_01","7","20","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("3");
            obj.set_text("임시저장");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btn00_00_01","10","20","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divBtn.addChild(obj.name, obj);

            obj = new Div("divGuide00","1600.00","145","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","18.00","15","262","45",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_Quick");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Static("sta00","18.00","122","375","50",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("1");
            obj.set_text("선택했을때 class : btn_WF_Quick_S 적용");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Button("btn00_00","18.00","68","262","45",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("2");
            obj.set_text("기본정보");
            obj.set_cssclass("btn_WF_Quick_S");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Button("Button00_00","20.00","205","34","34",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","64.00","205","34","34",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Static("sta00_00","20.00","255","375","50",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("5");
            obj.set_text("접혀있을때 class : btn_WF_ACPlus 로 접음");
            this.divGuide00.addChild(obj.name, obj);
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
            obj = new Layout("mobile","",0,0,this.divForm.form.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divInfoGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01_02_02_00.set_taborder("0");
                p.staLabel01_02_02_00.set_text("신청구분 ");
                p.staLabel01_02_02_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_02_00.move("10","98","100%","46",null,null);

                p.edt00_01_00_00_00.set_taborder("1");
                p.edt00_01_00_00_00.set_readonly("true");
                p.edt00_01_00_00_00.move("10.00","158","100%","40",null,null);

                p.Panel01_01_02_00.set_taborder("2");
                p.Panel01_01_02_00.set_type("vertical");
                p.Panel01_01_02_00.set_flexgrow("1");
                p.Panel01_01_02_00.move("10.00","98","305","86",null,null);

                p.pan02.set_taborder("3");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.set_flexshrink("1");
                p.pan02.set_fittocontents("height");
                p.pan02.move("0","60","100.00%","96",null,null);

                p.staLabel01_02_02_01.set_taborder("4");
                p.staLabel01_02_02_01.set_text("신청자");
                p.staLabel01_02_02_01.set_cssclass("sta_WF_Label");
                p.staLabel01_02_02_01.move("10","98","100%","46",null,null);

                p.edt00_01_00_00_01.set_taborder("5");
                p.edt00_01_00_00_01.set_readonly("true");
                p.edt00_01_00_00_01.move("10.00","158","100%","40",null,null);

                p.Panel01_01_02_01.set_taborder("6");
                p.Panel01_01_02_01.set_type("vertical");
                p.Panel01_01_02_01.set_flexgrow("1");
                p.Panel01_01_02_01.move("10.00","98","305","86",null,null);

                p.staLabel01_02_00_01_01.set_taborder("7");
                p.staLabel01_02_00_01_01.set_text("신청자 회사명");
                p.staLabel01_02_00_01_01.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00_01_01.move("10","98","100%","46",null,null);

                p.edt00_01_00_01_01.set_taborder("8");
                p.edt00_01_00_01_01.set_readonly("true");
                p.edt00_01_00_01_01.move("10.00","158","100%","40",null,null);

                p.Panel01_01_00_01_01.set_taborder("9");
                p.Panel01_01_00_01_01.set_type("vertical");
                p.Panel01_01_00_01_01.set_flexgrow("1");
                p.Panel01_01_00_01_01.move("10.00","98","305","86",null,null);

                p.pan03.set_taborder("10");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.set_flexshrink("1");
                p.pan03.set_fittocontents("height");
                p.pan03.move("0","60","100.00%","96",null,null);

                p.staLabel01_02_02_02.set_taborder("11");
                p.staLabel01_02_02_02.set_text("등록자");
                p.staLabel01_02_02_02.set_cssclass("sta_WF_Label");
                p.staLabel01_02_02_02.move("10","98","100%","46",null,null);

                p.edt00_01_00_00_02.set_taborder("12");
                p.edt00_01_00_00_02.set_readonly("true");
                p.edt00_01_00_00_02.move("10.00","158","100%","40",null,null);

                p.Panel01_01_02_02.set_taborder("13");
                p.Panel01_01_02_02.set_type("vertical");
                p.Panel01_01_02_02.set_flexgrow("1");
                p.Panel01_01_02_02.move("10.00","98","305","86",null,null);

                p.staLabel01_02_00_01_02.set_taborder("14");
                p.staLabel01_02_00_01_02.set_text("등록자 회사명");
                p.staLabel01_02_00_01_02.set_cssclass("sta_WF_Label");
                p.staLabel01_02_00_01_02.move("10","98","100%","46",null,null);

                p.edt00_01_00_01_02.set_taborder("15");
                p.edt00_01_00_01_02.set_readonly("true");
                p.edt00_01_00_01_02.move("10.00","158","100%","40",null,null);

                p.Panel01_01_00_01_02.set_taborder("16");
                p.Panel01_01_00_01_02.set_type("vertical");
                p.Panel01_01_00_01_02.set_flexgrow("1");
                p.Panel01_01_00_01_02.move("10.00","98","305","86",null,null);

                p.pan04.set_taborder("17");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.set_flexshrink("1");
                p.pan04.set_fittocontents("height");
                p.pan04.move("0","60","100.00%","96",null,null);

                p.Panel00.set_taborder("23");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("10");
                p.Panel00.move("90","346","100%","97",null,null);

                p.staLabel01_02_02_03.set_taborder("18");
                p.staLabel01_02_02_03.set_text("등록자 휴대폰 번호");
                p.staLabel01_02_02_03.set_cssclass("sta_WF_Label");
                p.staLabel01_02_02_03.move("10","98","100%","46",null,null);

                p.edt00_01_00_00_03.set_taborder("19");
                p.edt00_01_00_00_03.set_readonly("true");
                p.edt00_01_00_00_03.move("10.00","158","100%","40",null,null);

                p.Panel01_01_02_03.set_taborder("20");
                p.Panel01_01_02_03.set_type("vertical");
                p.Panel01_01_02_03.set_flexgrow("1");
                p.Panel01_01_02_03.move("10.00","98","305","143",null,null);

                p.Panel01_01_00_01_03.set_taborder("21");
                p.Panel01_01_00_01_03.set_type("vertical");
                p.Panel01_01_00_01_03.set_flexgrow("1");
                p.Panel01_01_00_01_03.move("10.00","98","305","1",null,null);

                p.pan05.set_taborder("22");
                p.pan05.set_horizontalgap("20");
                p.pan05.set_flexcrossaxiswrapalign("start");
                p.pan05.set_flexwrap("wrap");
                p.pan05.set_verticalgap("0");
                p.pan05.set_spacing("0px 20px 10px 20px");
                p.pan05.set_cssclass("pal_WF_DtlBg");
                p.pan05.set_flexshrink("1");
                p.pan05.set_fittocontents("height");
                p.pan05.move("0","60","100.00%","154",null,null);

                p.sta00.set_taborder("24");
                p.sta00.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.move("200.00","383","100%","47",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div02.form
            obj = new Layout("default","",0,0,this.divForm.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan01.set_taborder("0");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_type("horizontal");
                p.pan01.move("0","60","100.00%","144",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("신청상태");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","305","133",null,null);

                p.Panel02.set_taborder("117");
                p.Panel02.set_type("vertical");
                p.Panel02.set_verticalgap("10");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("54","48","100%","88",null,null);

                p.rdo00_00.set_taborder("3");
                p.rdo00_00.set_innerdataset(divForm_form_Div02_form_rdo00_00_innerdataset);
                p.rdo00_00.set_codecolumn("codecolumn");
                p.rdo00_00.set_datacolumn("datacolumn");
                p.rdo00_00.set_direction("vertical");
                p.rdo00_00.set_fittocontents("width");
                p.rdo00_00.set_value("0");
                p.rdo00_00.set_index("0");
                p.rdo00_00.move("200.00","328","100%","31",null,null);

                p.sta00_00.set_taborder("4");
                p.sta00_00.set_text("신규 : 이동지역 운전면허를 최초로 신청할 경우\r\n말소신규 : 기존에 이동지역 운전면허를 가지고 있었으나 말소된 경우(1년 내)");
                p.sta00_00.set_cssclass("sta_WF_Des");
                p.sta00_00.set_fittocontents("height");
                p.sta00_00.move("200.00","383","100%","47",null,null);

                p.staLabel00_00.set_taborder("5");
                p.staLabel00_00.set_text("이동지역출입여부");
                p.staLabel00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.rdo00_00_00.set_taborder("6");
                p.rdo00_00_00.set_innerdataset(divForm_form_Div02_form_rdo00_00_00_innerdataset);
                p.rdo00_00_00.set_codecolumn("codecolumn");
                p.rdo00_00_00.set_datacolumn("datacolumn");
                p.rdo00_00_00.set_direction("vertical");
                p.rdo00_00_00.set_fittocontents("width");
                p.rdo00_00_00.set_value("0");
                p.rdo00_00_00.set_index("0");
                p.rdo00_00_00.move("200.00","328","100%","31",null,null);

                p.sta00_00_00.set_taborder("7");
                p.sta00_00_00.set_text("항공기의 이착륙 및 지상이동을 위해 사용되는 지역 출입여부");
                p.sta00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00.set_fittocontents("height");
                p.sta00_00_00.move("200.00","383","100%","30",null,null);

                p.Panel00_00_00.set_taborder("8");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("10.00","98","305","96",null,null);

                p.Panel03.set_taborder("118");
                p.Panel03.set_type("vertical");
                p.Panel03.set_verticalgap("10");
                p.Panel03.set_fittocontents("height");
                p.Panel03.move("755","70","100%","60",null,null);

                p.staLabel00_01.set_taborder("9");
                p.staLabel00_01.set_text("운전자면허신청동일여부");
                p.staLabel00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.rdo00_00_01.set_taborder("10");
                p.rdo00_00_01.set_innerdataset(divForm_form_Div02_form_rdo00_00_01_innerdataset);
                p.rdo00_00_01.set_codecolumn("codecolumn");
                p.rdo00_00_01.set_datacolumn("datacolumn");
                p.rdo00_00_01.set_direction("vertical");
                p.rdo00_00_01.set_fittocontents("width");
                p.rdo00_00_01.set_value("0");
                p.rdo00_00_01.set_index("0");
                p.rdo00_00_01.move("200.00","328","100%","40",null,null);

                p.Panel00_00_01.set_taborder("11");
                p.Panel00_00_01.set_type("vertical");
                p.Panel00_00_01.set_flexgrow("1");
                p.Panel00_00_01.set_minwidth("");
                p.Panel00_00_01.move("10.00","98","305","86",null,null);

                p.pan01_00.set_taborder("12");
                p.pan01_00.set_horizontalgap("20");
                p.pan01_00.set_flexcrossaxiswrapalign("start");
                p.pan01_00.set_flexwrap("wrap");
                p.pan01_00.set_fittocontents("height");
                p.pan01_00.set_verticalgap("0");
                p.pan01_00.set_spacing("0px 20px 10px 20px");
                p.pan01_00.set_cssclass("pal_WF_DtlBg");
                p.pan01_00.set_type("horizontal");
                p.pan01_00.move("0","60","100.00%","231",null,null);

                p.staLabel00_02.set_taborder("13");
                p.staLabel00_02.set_text("운전연수확인서");
                p.staLabel00_02.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02.set_fittocontents("width");
                p.staLabel00_02.move("0","44","305","46",null,null);

                p.Button00.set_taborder("14");
                p.Button00.set_text("샘플첨부파일명");
                p.Button00.set_cssclass("btn_WF_Small");
                p.Button00.set_fittocontents("width");
                p.Button00.move("813","76","120","34",null,null);

                p.btn_file_1.set_taborder("15");
                p.btn_file_1.set_text("파일선택");
                p.btn_file_1.set_cssclass("btn_WF_FileUp");
                p.btn_file_1.set_fittocontents("width");
                p.btn_file_1.move("124","58","116","34",null,null);

                p.panBtnFile.set_taborder("16");
                p.panBtnFile.set_flexgrow("1");
                p.panBtnFile.set_flexmainaxisalign("end");
                p.panBtnFile.set_horizontalgap("10");
                p.panBtnFile.move("433","58","305","34",null,null);

                p.panTitle.set_taborder("17");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.set_flexwrap("wrap");
                p.panTitle.set_fittocontents("height");
                p.panTitle.set_flexcrossaxisalign("center");
                p.panTitle.set_spacing("0px 0px 10px 0px");
                p.panTitle.move("0","124","100%","80",null,null);

                p.Static00.set_taborder("18");
                p.Static00.set_text("파일수 : ");
                p.Static00.set_fittocontents("width");
                p.Static00.move("88","123","48","46",null,null);

                p.Static01.set_taborder("19");
                p.Static01.set_text("0");
                p.Static01.set_fittocontents("width");
                p.Static01.move("165","143","9","46",null,null);

                p.Static02.set_taborder("20");
                p.Static02.set_text("개");
                p.Static02.set_fittocontents("width");
                p.Static02.move("293","131","13","46",null,null);

                p.panFileNum.set_taborder("21");
                p.panFileNum.set_flexgrow("1");
                p.panFileNum.set_horizontalgap("4");
                p.panFileNum.move("20","190","305","46",null,null);

                p.btn_del_file_1.set_taborder("22");
                p.btn_del_file_1.set_text("전체파일삭제");
                p.btn_del_file_1.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1.set_fittocontents("width");
                p.btn_del_file_1.move("512","135","125","34",null,null);

                p.panBtnDel.set_taborder("23");
                p.panBtnDel.set_flexcrossaxisalign("center");
                p.panBtnDel.set_flexmainaxisalign("end");
                p.panBtnDel.set_flexgrow("1");
                p.panBtnDel.move("517","141","305","46",null,null);

                p.Panel00_02.set_taborder("24");
                p.Panel00_02.move("20","51","100%","46",null,null);

                p.Grid00.set_taborder("25");
                p.Grid00.set_binddataset("dsFile1");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_cssclass("grd_WF_FileAdd");
                p.Grid00.move("20.00","114","100%","40",null,null);

                p.sta00.set_taborder("26");
                p.sta00.set_text("JPG,JPEG,GIF,PNG,BMP만 첨부가능");
                p.sta00.set_cssclass("sta_WF_Des");
                p.sta00.set_fittocontents("height");
                p.sta00.move("200.00","383","100%","30",null,null);

                p.panFile.set_taborder("27");
                p.panFile.set_fittocontents("height");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_verticalgap("4");
                p.panFile.set_flexgrow("1");
                p.panFile.move("0","42","305","220",null,null);

                p.staLabel01_02_02_01.set_taborder("28");
                p.staLabel01_02_02_01.set_text("성명");
                p.staLabel01_02_02_01.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02_02_01.move("10","98","100%","46",null,null);

                p.edt00_01_00_00_01.set_taborder("29");
                p.edt00_01_00_00_01.set_readonly("true");
                p.edt00_01_00_00_01.move("10.00","158","100%","40",null,null);

                p.Panel01_01_02_01.set_taborder("30");
                p.Panel01_01_02_01.set_type("vertical");
                p.Panel01_01_02_01.set_flexgrow("1");
                p.Panel01_01_02_01.move("10.00","98","305","86",null,null);

                p.staLabel01_02_00_01_01.set_taborder("31");
                p.staLabel01_02_00_01_01.set_text("소속사");
                p.staLabel01_02_00_01_01.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02_00_01_01.move("10","98","100%","46",null,null);

                p.edt00_01_00_01_01.set_taborder("32");
                p.edt00_01_00_01_01.set_readonly("true");
                p.edt00_01_00_01_01.move("10.00","158","100%","40",null,null);

                p.Panel01_01_00_01_01.set_taborder("33");
                p.Panel01_01_00_01_01.set_type("vertical");
                p.Panel01_01_00_01_01.set_flexgrow("1");
                p.Panel01_01_00_01_01.move("10.00","98","305","86",null,null);

                p.pan03.set_taborder("34");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.set_flexshrink("1");
                p.pan03.set_fittocontents("height");
                p.pan03.move("0","60","100.00%","96",null,null);

                p.staLabel01_02_02_01_00.set_taborder("35");
                p.staLabel01_02_02_01_00.set_text("휴대폰번호");
                p.staLabel01_02_02_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02_02_01_00.move("10","98","100%","46",null,null);

                p.edt00_01_00_00_01_00.set_taborder("36");
                p.edt00_01_00_00_01_00.set_readonly("true");
                p.edt00_01_00_00_01_00.move("10.00","158","100%","40",null,null);

                p.Panel01_01_02_01_00.set_taborder("37");
                p.Panel01_01_02_01_00.set_type("vertical");
                p.Panel01_01_02_01_00.set_flexgrow("1");
                p.Panel01_01_02_01_00.move("10.00","98","305","86",null,null);

                p.staLabel01_02_00_01_01_00.set_taborder("38");
                p.staLabel01_02_00_01_01_00.set_text("출입증발급번호");
                p.staLabel01_02_00_01_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02_00_01_01_00.move("10","98","100%","46",null,null);

                p.edt00_01_00_01_01_00.set_taborder("39");
                p.edt00_01_00_01_01_00.set_readonly("true");
                p.edt00_01_00_01_01_00.move("10.00","158","100%","40",null,null);

                p.Panel01_01_00_01_01_00.set_taborder("40");
                p.Panel01_01_00_01_01_00.set_type("vertical");
                p.Panel01_01_00_01_01_00.set_flexgrow("1");
                p.Panel01_01_00_01_01_00.move("10.00","98","305","86",null,null);

                p.pan03_00.set_taborder("41");
                p.pan03_00.set_horizontalgap("20");
                p.pan03_00.set_flexcrossaxiswrapalign("start");
                p.pan03_00.set_flexwrap("wrap");
                p.pan03_00.set_verticalgap("0");
                p.pan03_00.set_spacing("0px 20px 10px 20px");
                p.pan03_00.set_cssclass("pal_WF_DtlBg");
                p.pan03_00.set_flexshrink("1");
                p.pan03_00.set_fittocontents("height");
                p.pan03_00.move("0","60","100.00%","96",null,null);

                p.staLabel01_02_02_03.set_taborder("42");
                p.staLabel01_02_02_03.set_text("교육희망일");
                p.staLabel01_02_02_03.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02_02_03.move("10","98","100%","46",null,null);

                p.edt00_01_00_00_03.set_taborder("43");
                p.edt00_01_00_00_03.set_readonly("true");
                p.edt00_01_00_00_03.move("10.00","158","100%","40",null,null);

                p.sta00_01.set_taborder("44");
                p.sta00_01.set_text("교육희망일로부터 7일 내 교육을 이수하여야하며, 미이수시 재신청 필요\r\n교육장 운영시간\r\n(T1)연중무휴 06:00~22:00\r\n(T2)평     일 09:00~18:00");
                p.sta00_01.set_cssclass("sta_WF_Des");
                p.sta00_01.set_fittocontents("height");
                p.sta00_01.move("200.00","383","100%","81",null,null);

                p.Panel00.set_taborder("45");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("10");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("90","346","100%","131",null,null);

                p.Panel01_01_02_03.set_taborder("46");
                p.Panel01_01_02_03.set_type("vertical");
                p.Panel01_01_02_03.set_fittocontents("height");
                p.Panel01_01_02_03.set_flexgrow("1");
                p.Panel01_01_02_03.move("10.00","98","305","177",null,null);

                p.pan05.set_taborder("47");
                p.pan05.set_horizontalgap("20");
                p.pan05.set_flexcrossaxiswrapalign("start");
                p.pan05.set_flexwrap("wrap");
                p.pan05.set_verticalgap("0");
                p.pan05.set_spacing("0px 20px 10px 20px");
                p.pan05.set_cssclass("pal_WF_DtlBg");
                p.pan05.set_fittocontents("height");
                p.pan05.set_flexshrink("1");
                p.pan05.move("0","60","100.00%","188",null,null);

                p.staLabel01_02_02_03_00.set_taborder("48");
                p.staLabel01_02_02_03_00.set_text("생년월일");
                p.staLabel01_02_02_03_00.set_cssclass("sta_WF_Label_E");
                p.staLabel01_02_02_03_00.move("10","98","100%","46",null,null);

                p.edt00_01_00_00_03_00.set_taborder("49");
                p.edt00_01_00_00_03_00.set_readonly("true");
                p.edt00_01_00_00_03_00.move("10.00","158","100%","40",null,null);

                p.sta00_01_00.set_taborder("50");
                p.sta00_01_00.set_text("예)1980년12월25일 -> 801225");
                p.sta00_01_00.set_cssclass("sta_WF_Des");
                p.sta00_01_00.set_fittocontents("height");
                p.sta00_01_00.move("200.00","383","100%","30",null,null);

                p.Panel00_01.set_taborder("51");
                p.Panel00_01.set_type("vertical");
                p.Panel00_01.set_verticalgap("10");
                p.Panel00_01.set_fittocontents("height");
                p.Panel00_01.move("90","346","100%","80",null,null);

                p.Panel01_01_02_03_00.set_taborder("52");
                p.Panel01_01_02_03_00.set_type("vertical");
                p.Panel01_01_02_03_00.set_flexgrow("1");
                p.Panel01_01_02_03_00.move("10.00","98","305","126",null,null);

                p.staLabel00_02_00.set_taborder("53");
                p.staLabel00_02_00.set_text("운전면허증사본");
                p.staLabel00_02_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_00.set_fittocontents("width");
                p.staLabel00_02_00.move("0","44","305","46",null,null);

                p.Button00_00.set_taborder("54");
                p.Button00_00.set_text("샘플첨부파일명");
                p.Button00_00.set_cssclass("btn_WF_Small");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("813","76","120","34",null,null);

                p.btn_file_1_00.set_taborder("55");
                p.btn_file_1_00.set_text("파일선택");
                p.btn_file_1_00.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_00.set_fittocontents("width");
                p.btn_file_1_00.move("124","58","116","34",null,null);

                p.panBtnFile00.set_taborder("56");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.set_horizontalgap("10");
                p.panBtnFile00.move("433","58","305","34",null,null);

                p.panTitle00.set_taborder("57");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.set_flexwrap("wrap");
                p.panTitle00.set_fittocontents("height");
                p.panTitle00.set_flexcrossaxisalign("center");
                p.panTitle00.set_spacing("0px 0px 10px 0px");
                p.panTitle00.move("0","124","100%","80",null,null);

                p.Static00_00.set_taborder("58");
                p.Static00_00.set_text("파일수 : ");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.move("88","123","48","46",null,null);

                p.Static01_00.set_taborder("59");
                p.Static01_00.set_text("0");
                p.Static01_00.set_fittocontents("width");
                p.Static01_00.move("165","143","9","46",null,null);

                p.Static02_00.set_taborder("60");
                p.Static02_00.set_text("개");
                p.Static02_00.set_fittocontents("width");
                p.Static02_00.move("293","131","13","46",null,null);

                p.panFileNum00.set_taborder("61");
                p.panFileNum00.set_flexgrow("1");
                p.panFileNum00.set_horizontalgap("4");
                p.panFileNum00.move("20","190","305","46",null,null);

                p.btn_del_file_1_00.set_taborder("62");
                p.btn_del_file_1_00.set_text("전체파일삭제");
                p.btn_del_file_1_00.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_00.set_fittocontents("width");
                p.btn_del_file_1_00.move("512","135","125","34",null,null);

                p.panBtnDel00.set_taborder("63");
                p.panBtnDel00.set_flexcrossaxisalign("center");
                p.panBtnDel00.set_flexmainaxisalign("end");
                p.panBtnDel00.set_flexgrow("1");
                p.panBtnDel00.move("517","141","305","46",null,null);

                p.Panel00_02_00.set_taborder("64");
                p.Panel00_02_00.move("20","51","100%","46",null,null);

                p.Grid00_00.set_taborder("65");
                p.Grid00_00.set_binddataset("dsFile1");
                p.Grid00_00.set_autofittype("col");
                p.Grid00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00.move("20.00","114","100%","40",null,null);

                p.sta00_02.set_taborder("66");
                p.sta00_02.set_text("※모바일 운전면허증 첨부가능\r\n※면허증에 표시된 [주민번호 뒷자리], [주소], [면허증 번호] 마스킹(삭제) 후 첨부 바랍니다.");
                p.sta00_02.set_cssclass("sta_WF_Des");
                p.sta00_02.set_fittocontents("height");
                p.sta00_02.move("200.00","383","100%","64",null,null);

                p.panFile00.set_taborder("67");
                p.panFile00.set_fittocontents("height");
                p.panFile00.set_flexwrap("wrap");
                p.panFile00.set_verticalgap("4");
                p.panFile00.set_flexgrow("1");
                p.panFile00.move("0","42","305","288",null,null);

                p.pan01_00_00.set_taborder("68");
                p.pan01_00_00.set_horizontalgap("20");
                p.pan01_00_00.set_flexcrossaxiswrapalign("start");
                p.pan01_00_00.set_flexwrap("wrap");
                p.pan01_00_00.set_fittocontents("height");
                p.pan01_00_00.set_verticalgap("0");
                p.pan01_00_00.set_spacing("0px 20px 10px 20px");
                p.pan01_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan01_00_00.set_type("horizontal");
                p.pan01_00_00.move("0","60","100.00%","299",null,null);

                p.staLabel00_02_00_00.set_taborder("69");
                p.staLabel00_02_00_00.set_text("운전연수확인서");
                p.staLabel00_02_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_02_00_00.set_fittocontents("width");
                p.staLabel00_02_00_00.move("0","44","305","46",null,null);

                p.Button00_00_00.set_taborder("70");
                p.Button00_00_00.set_text("샘플첨부파일명");
                p.Button00_00_00.set_cssclass("btn_WF_Small");
                p.Button00_00_00.set_fittocontents("width");
                p.Button00_00_00.move("813","76","120","34",null,null);

                p.btn_file_1_00_00.set_taborder("71");
                p.btn_file_1_00_00.set_text("파일선택");
                p.btn_file_1_00_00.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_00_00.set_fittocontents("width");
                p.btn_file_1_00_00.move("124","58","116","34",null,null);

                p.panBtnFile00_00.set_taborder("72");
                p.panBtnFile00_00.set_flexgrow("1");
                p.panBtnFile00_00.set_flexmainaxisalign("end");
                p.panBtnFile00_00.set_horizontalgap("10");
                p.panBtnFile00_00.move("433","58","305","34",null,null);

                p.panTitle00_00.set_taborder("73");
                p.panTitle00_00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00_00.set_flexwrap("wrap");
                p.panTitle00_00.set_fittocontents("height");
                p.panTitle00_00.set_flexcrossaxisalign("center");
                p.panTitle00_00.set_spacing("0px 0px 10px 0px");
                p.panTitle00_00.move("0","124","100%","80",null,null);

                p.Static00_00_00.set_taborder("74");
                p.Static00_00_00.set_text("파일수 : ");
                p.Static00_00_00.set_fittocontents("width");
                p.Static00_00_00.move("88","123","48","46",null,null);

                p.Static01_00_00.set_taborder("75");
                p.Static01_00_00.set_text("0");
                p.Static01_00_00.set_fittocontents("width");
                p.Static01_00_00.move("165","143","9","46",null,null);

                p.Static02_00_00.set_taborder("76");
                p.Static02_00_00.set_text("개");
                p.Static02_00_00.set_fittocontents("width");
                p.Static02_00_00.move("293","131","13","46",null,null);

                p.panFileNum00_00.set_taborder("77");
                p.panFileNum00_00.set_flexgrow("1");
                p.panFileNum00_00.set_horizontalgap("4");
                p.panFileNum00_00.move("20","190","305","46",null,null);

                p.btn_del_file_1_00_00.set_taborder("78");
                p.btn_del_file_1_00_00.set_text("전체파일삭제");
                p.btn_del_file_1_00_00.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_00_00.set_fittocontents("width");
                p.btn_del_file_1_00_00.move("512","135","125","34",null,null);

                p.panBtnDel00_00.set_taborder("79");
                p.panBtnDel00_00.set_flexcrossaxisalign("center");
                p.panBtnDel00_00.set_flexmainaxisalign("end");
                p.panBtnDel00_00.set_flexgrow("1");
                p.panBtnDel00_00.move("517","141","305","46",null,null);

                p.Panel00_02_00_00.set_taborder("80");
                p.Panel00_02_00_00.move("20","51","100%","46",null,null);

                p.Grid00_00_00.set_taborder("81");
                p.Grid00_00_00.set_binddataset("dsFile1");
                p.Grid00_00_00.set_autofittype("col");
                p.Grid00_00_00.set_cssclass("grd_WF_FileAdd");
                p.Grid00_00_00.move("20.00","114","100%","40",null,null);

                p.sta00_02_00.set_taborder("82");
                p.sta00_02_00.set_text("JPG,JPEG,GIF,PNG,BMP만 첨부가능");
                p.sta00_02_00.set_cssclass("sta_WF_Des");
                p.sta00_02_00.set_fittocontents("height");
                p.sta00_02_00.move("200.00","383","100%","30",null,null);

                p.panFile00_00.set_taborder("83");
                p.panFile00_00.set_fittocontents("height");
                p.panFile00_00.set_flexwrap("wrap");
                p.panFile00_00.set_verticalgap("4");
                p.panFile00_00.set_flexgrow("1");
                p.panFile00_00.move("0","42","305","264",null,null);

                p.btn00.set_taborder("115");
                p.btn00.set_text("연수 확인서 다운로드");
                p.btn00.set_fittocontents("width");
                p.btn00.move("615","851","100%","40",null,null);

                p.Panel01.set_taborder("114");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.move("597","914","100%","40",null,null);

                p.staLabel00_02_01.set_taborder("84");
                p.staLabel00_02_01.set_text("개인정보수집 및 이용동의서");
                p.staLabel00_02_01.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01.set_fittocontents("width");
                p.staLabel00_02_01.move("0","44","305","46",null,null);

                p.Button00_01.set_taborder("85");
                p.Button00_01.set_text("샘플첨부파일명");
                p.Button00_01.set_cssclass("btn_WF_Small");
                p.Button00_01.set_fittocontents("width");
                p.Button00_01.move("813","76","120","34",null,null);

                p.btn_file_1_01.set_taborder("86");
                p.btn_file_1_01.set_text("파일선택");
                p.btn_file_1_01.set_cssclass("btn_WF_FileUp");
                p.btn_file_1_01.set_fittocontents("width");
                p.btn_file_1_01.move("124","58","116","34",null,null);

                p.panBtnFile01.set_taborder("87");
                p.panBtnFile01.set_flexgrow("1");
                p.panBtnFile01.set_flexmainaxisalign("end");
                p.panBtnFile01.set_horizontalgap("10");
                p.panBtnFile01.move("433","58","305","34",null,null);

                p.panTitle01.set_taborder("88");
                p.panTitle01.set_cssclass("pan_WF_FileTitle");
                p.panTitle01.set_flexwrap("wrap");
                p.panTitle01.set_fittocontents("height");
                p.panTitle01.set_spacing("0px 0px 10px 0px");
                p.panTitle01.set_flexcrossaxisalign("center");
                p.panTitle01.move("0","124","100%","46",null,null);

                p.Static00_01.set_taborder("89");
                p.Static00_01.set_text("파일수 : ");
                p.Static00_01.set_fittocontents("width");
                p.Static00_01.move("88","123","48","46",null,null);

                p.Static01_01.set_taborder("90");
                p.Static01_01.set_text("0");
                p.Static01_01.set_fittocontents("width");
                p.Static01_01.move("165","143","9","46",null,null);

                p.Static02_01.set_taborder("91");
                p.Static02_01.set_text("개");
                p.Static02_01.set_fittocontents("width");
                p.Static02_01.move("293","131","13","46",null,null);

                p.panFileNum01.set_taborder("92");
                p.panFileNum01.set_flexgrow("1");
                p.panFileNum01.set_horizontalgap("4");
                p.panFileNum01.move("20","190","305","46",null,null);

                p.btn_del_file_1_01.set_taborder("93");
                p.btn_del_file_1_01.set_text("전체파일삭제");
                p.btn_del_file_1_01.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1_01.set_fittocontents("width");
                p.btn_del_file_1_01.move("512","135","125","34",null,null);

                p.panBtnDel01.set_taborder("94");
                p.panBtnDel01.set_flexcrossaxisalign("center");
                p.panBtnDel01.set_flexmainaxisalign("end");
                p.panBtnDel01.set_flexgrow("1");
                p.panBtnDel01.move("517","141","305","46",null,null);

                p.Panel00_03.set_taborder("95");
                p.Panel00_03.move("20","51","100%","46",null,null);

                p.Grid00_01.set_taborder("96");
                p.Grid00_01.set_binddataset("dsFile1");
                p.Grid00_01.set_autofittype("col");
                p.Grid00_01.set_cssclass("grd_WF_FileAdd");
                p.Grid00_01.move("20.00","114","100%","40",null,null);

                p.panFile01.set_taborder("97");
                p.panFile01.set_fittocontents("height");
                p.panFile01.set_spacing("10px 20px 10px 20px");
                p.panFile01.set_flexwrap("wrap");
                p.panFile01.set_cssclass("pal_WF_DtlBg");
                p.panFile01.set_verticalgap("4");
                p.panFile01.move("0","42","100.00%","161",null,null);

                p.staLabel01_02_02_03_01.set_taborder("98");
                p.staLabel01_02_02_03_01.set_text("개인정보 수집·이용 동의");
                p.staLabel01_02_02_03_01.set_cssclass("sta_WF_Label");
                p.staLabel01_02_02_03_01.move("10","98","100%","46",null,null);

                p.Panel00_04.set_taborder("99");
                p.Panel00_04.set_type("vertical");
                p.Panel00_04.set_verticalgap("10");
                p.Panel00_04.move("90","346","100%","97",null,null);

                p.Panel01_01_02_03_01.set_taborder("100");
                p.Panel01_01_02_03_01.set_type("vertical");
                p.Panel01_01_02_03_01.set_flexgrow("1");
                p.Panel01_01_02_03_01.move("10.00","98","305","143",null,null);

                p.pan05_00.set_taborder("101");
                p.pan05_00.set_horizontalgap("20");
                p.pan05_00.set_flexcrossaxiswrapalign("start");
                p.pan05_00.set_flexwrap("wrap");
                p.pan05_00.set_verticalgap("0");
                p.pan05_00.set_spacing("0px 20px 10px 20px");
                p.pan05_00.set_cssclass("pal_WF_DtlBg");
                p.pan05_00.set_flexshrink("1");
                p.pan05_00.set_fittocontents("height");
                p.pan05_00.move("0","60","100.00%","154",null,null);

                p.txa00.set_taborder("102");
                p.txa00.set_value("1. 개인정보의 수집ㆍ이용 목적\n  인계인수 신청 시 작성건의 접수와 처리를 위해 개인정보를 수집목적에 필요한 최소한의 범위 내에서 수집하고 있습니다.\n2. 수집하려는 개인정보의 항목\n  필수항목 : 총괄책임자 및 시설관리책임자 성명, 총괄책임자 및 시설관리책임자 휴대폰번호\n3. 개인정보의 보유 및 이용 기간\n  계약종료 후 3년, 회원탈퇴 시까지\n4. 동의를 거부할 권리와 거부에 따른 불이익 내용\n  귀하는 개인정보 수집에 거부할 권리가 있으며, 필수항목 수집을 거부할 경우 인계인수 승인요청서 작성건의 신청을 할 수 없습니다.");
                p.txa00.move("200.00","728","100%","100",null,null);

                p.staLabel00_03.set_taborder("103");
                p.staLabel00_03.set_text("개인정보 수집(필수) 동의여부");
                p.staLabel00_03.set_cssclass("sta_WF_Label_E");
                p.staLabel00_03.move("10","98","100%","46",null,null);

                p.rdo00_00_02.set_taborder("104");
                p.rdo00_00_02.set_innerdataset(divForm_form_Div02_form_rdo00_00_02_innerdataset);
                p.rdo00_00_02.set_codecolumn("codecolumn");
                p.rdo00_00_02.set_datacolumn("datacolumn");
                p.rdo00_00_02.set_direction("vertical");
                p.rdo00_00_02.set_fittocontents("width");
                p.rdo00_00_02.set_value("0");
                p.rdo00_00_02.set_index("0");
                p.rdo00_00_02.move("200.00","328","100%","40",null,null);

                p.Panel00_00_02.set_taborder("105");
                p.Panel00_00_02.set_type("vertical");
                p.Panel00_00_02.set_flexgrow("1");
                p.Panel00_00_02.set_minwidth("");
                p.Panel00_00_02.move("10.00","98","305","86",null,null);

                p.Panel00_00_00_00.set_taborder("106");
                p.Panel00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00.move("10.00","98","305","1",null,null);

                p.pan01_01.set_taborder("107");
                p.pan01_01.set_horizontalgap("20");
                p.pan01_01.set_flexcrossaxiswrapalign("start");
                p.pan01_01.set_flexwrap("wrap");
                p.pan01_01.set_fittocontents("height");
                p.pan01_01.set_verticalgap("0");
                p.pan01_01.set_spacing("0px 20px 10px 20px");
                p.pan01_01.set_cssclass("pal_WF_DtlBg");
                p.pan01_01.set_type("horizontal");
                p.pan01_01.move("0","60","100.00%","97",null,null);

                p.staLabel01_02_02_03_01_00.set_taborder("108");
                p.staLabel01_02_02_03_01_00.set_text("전달사항");
                p.staLabel01_02_02_03_01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_02_02_03_01_00.move("10","98","100%","46",null,null);

                p.txa00_00.set_taborder("109");
                p.txa00_00.set_displaynulltext("내용 입력");
                p.txa00_00.move("200.00","728","100%","100",null,null);

                p.Panel00_04_00.set_taborder("110");
                p.Panel00_04_00.set_type("vertical");
                p.Panel00_04_00.set_verticalgap("10");
                p.Panel00_04_00.move("90","346","100%","97",null,null);

                p.Panel01_01_02_03_01_00.set_taborder("111");
                p.Panel01_01_02_03_01_00.set_type("vertical");
                p.Panel01_01_02_03_01_00.set_flexgrow("1");
                p.Panel01_01_02_03_01_00.move("10.00","98","305","143",null,null);

                p.pan05_00_00.set_taborder("112");
                p.pan05_00_00.set_horizontalgap("20");
                p.pan05_00_00.set_flexcrossaxiswrapalign("start");
                p.pan05_00_00.set_flexwrap("wrap");
                p.pan05_00_00.set_verticalgap("0");
                p.pan05_00_00.set_spacing("0px 20px 10px 20px");
                p.pan05_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan05_00_00.set_flexshrink("1");
                p.pan05_00_00.set_fittocontents("height");
                p.pan05_00_00.move("0","60","100.00%","154",null,null);

                p.sta00_02_01.set_taborder("113");
                p.sta00_02_01.set_text("JPG,JPEG,GIF,PNG,BMP만 첨부가능");
                p.sta00_02_01.set_cssclass("sta_WF_Des");
                p.sta00_02_01.set_fittocontents("height");
                p.sta00_02_01.move("200.00","383","100%","30",null,null);

                p.btn00_00.set_taborder("116");
                p.btn00_00.set_text("운전연수 가이드 다운로드");
                p.btn00_00.set_fittocontents("width");
                p.btn00_00.move("615","851","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div02.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.rdo00_00_01.set_direction("horizontal");
                p.rdo00_00_01.set_fittocontents("height");

                p.Panel00_00_01.set_fittocontents("height");
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divInfoGuide.set_taborder("2");
                p.divInfoGuide.set_text("서비스 흐름 및 작업방법 안내");
                p.divInfoGuide.set_cssclass("div_WF_InfoGuide");
                p.divInfoGuide.set_minheight("300");
                p.divInfoGuide.set_maxheight("");
                p.divInfoGuide.move("1660.00","262","100%","300",null,null);

                p.sub_tit01.set_taborder("6");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.move("1630","674","100%","70",null,null);

                p.Div01.set_taborder("0");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("0","0","100%","442",null,null);

                p.sub_tit02.set_taborder("10");
                p.sub_tit02.set_background("#ffffff");
                p.sub_tit02.set_flexcrossaxisalign("end");
                p.sub_tit02.move("1630","674","100%","70",null,null);

                p.Div02.set_taborder("1");
                p.Div02.set_text("Div00");
                p.Div02.set_cssclass("div_WF_Bg");
                p.Div02.set_fittocontents("height");
                p.Div02.move("0","Div01:376.428","100%","1620",null,null);

                p.staSubTitle02_00.set_taborder("3");
                p.staSubTitle02_00.set_text("신청자정보");
                p.staSubTitle02_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00.move("1630.00","690","50%","50",null,null);

                p.Button00_00.set_taborder("4");
                p.Button00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02.set_taborder("5");
                p.Panel01_02.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02.set_spacing("0px 10px");
                p.Panel01_02.set_horizontalgap("10");
                p.Panel01_02.set_flexcrossaxisalign("center");
                p.Panel01_02.set_flexmainaxisalign("end");
                p.Panel01_02.move("2340.00","690","50%","50",null,null);

                p.staSubTitle02_00_00.set_taborder("7");
                p.staSubTitle02_00_00.set_text("신청정보");
                p.staSubTitle02_00_00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02_00_00.move("1630.00","690","50%","50",null,null);

                p.Button00_00_00.set_taborder("8");
                p.Button00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00.move("2890.00","692","34","34",null,null);

                p.Panel01_02_00.set_taborder("9");
                p.Panel01_02_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_02_00.set_spacing("0px 10px");
                p.Panel01_02_00.set_horizontalgap("10");
                p.Panel01_02_00.set_flexcrossaxisalign("center");
                p.Panel01_02_00.set_flexmainaxisalign("end");
                p.Panel01_02_00.move("2340.00","690","50%","50",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 400px 0px 0px");
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
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divQuick.form
            obj = new Layout("default","",0,0,this.divQuick.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_taborder("0");
                p.btn00.set_text("신청자정보");
                p.btn00.set_cssclass("btn_WF_Quick_S");
                p.btn00.move("17","20","100%","45",null,null);

                p.btn00_00.set_taborder("1");
                p.btn00_00.set_text("신청정보");
                p.btn00_00.set_cssclass("btn_WF_Quick");
                p.btn00_00.move("17.00","btn00:0","100%","45",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("20px 17px  0px 17px");
            this.divQuick.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divQuick.form
            obj = new Layout("mobile","",0,0,this.divQuick.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_cssclass("btn_WF_QuickM_S");
                p.btn00.set_fittocontents("width");

                p.btn00_00.set_fittocontents("width");
                p.btn00_00.set_cssclass("btn_WF_QuickM");
            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("0px 0px 0px 0px");
            this.divQuick.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00_00.set_taborder("2");
                p.btn00_00.set_text("종료");
                p.btn00_00.set_cssclass("btn_WF_No");
                p.btn00_00.set_fittocontents("width");
                p.btn00_00.move("7","20","100","40",null,null);

                p.btn00.set_taborder("0");
                p.btn00.set_text("신청취소");
                p.btn00.set_cssclass("btn_WF_No");
                p.btn00.set_fittocontents("width");
                p.btn00.move("7","20","100","40",null,null);

                p.btn00_01.set_taborder("3");
                p.btn00_01.set_text("임시저장");
                p.btn00_01.set_cssclass("btn_WF_No");
                p.btn00_01.set_fittocontents("width");
                p.btn00_01.move("7","20","100","40",null,null);

                p.btn00_00_01.set_taborder("1");
                p.btn00_00_01.set_text("신청");
                p.btn00_00_01.set_cssclass("btn_WF_Yes");
                p.btn00_00_01.set_fittocontents("width");
                p.btn00_00_01.move("10","20","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            obj.set_spacing("20px 10px");
            obj.set_flexwrap("wrap");
            this.divBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divBtn.form
            obj = new Layout("mobile","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_flexmainaxisalign("start");
            obj.set_flexwrap("nowrap");
            obj.set_spacing("0px 10px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("10");
            obj.set_horizontalgap("10");
            this.divBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGuide00.form
            obj = new Layout("default","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00.set_taborder("0");
                p.btn00.set_text("기본정보");
                p.btn00.set_cssclass("btn_WF_Quick");
                p.btn00.move("18.00","15","262","45",null,null);

                p.sta00.set_taborder("1");
                p.sta00.set_text("선택했을때 class : btn_WF_Quick_S 적용");
                p.sta00.move("18.00","122","375","50",null,null);

                p.btn00_00.set_taborder("2");
                p.btn00_00.set_text("기본정보");
                p.btn00_00.set_cssclass("btn_WF_Quick_S");
                p.btn00_00.move("18.00","68","262","45",null,null);

                p.Button00_00.set_taborder("3");
                p.Button00_00.set_cssclass("btn_WF_ACPlus");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("20.00","205","34","34",null,null);

                p.Button00_00_00.set_taborder("4");
                p.Button00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00.move("64.00","205","34","34",null,null);

                p.sta00_00.set_taborder("5");
                p.sta00_00.set_text("접혀있을때 class : btn_WF_ACPlus 로 접음");
                p.sta00_00.move("20.00","255","375","50",null,null);
            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide00.form
            obj = new Layout("mobile","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide00.form
            obj = new Layout("mobile","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("이동지역운전자면허신청 신청서작성");

                p.divTitle.set_taborder("3");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_cssclass("div_WF_QuickFrBg");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","divTitle:10",null,"2377","60",null);

                p.divQuick.set_taborder("1");
                p.divQuick.set_text("div00");
                p.divQuick.set_cssclass("div_WF_QuickMenu");
                p.divQuick.set_fittocontents("height");
                p.divQuick.move(null,"62","296","111","62",null);

                p.divBtn.set_taborder("2");
                p.divBtn.set_text("div00");
                p.divBtn.set_cssclass("div_WF_QuickBtnBg");
                p.divBtn.set_fittocontents("height");
                p.divBtn.move(null,"divQuick:0","296","131","62",null);

                p.divGuide00.set_taborder("4");
                p.divGuide00.set_text("div00");
                p.divGuide00.set_visible("false");
                p.divGuide00.set_cssclass("div_GD_Tip");
                p.divGuide00.move("1600.00","145","450","385",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,5000,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.move("0","0",null,"50","0",null);

                p.divQuick.set_cssclass("div_WF_QuickMenuM");
                p.divQuick.move("20","60",null,"60","20",null);

                p.divForm.set_fittocontents("none");
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","120",null,null,"0","80");

                p.divBtn.set_cssclass("div_WF_QuickBtnBgM");
                p.divBtn.set_fittocontents("none");
                p.divBtn.move("0",null,null,"80","0","0");
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
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("LIF073M00.xfdl","xjs::TaskCom.xjs");
        this.registerScript("LIF073M00.xfdl", function() {
        /******************************************************************************
        *  PcMdi 프로젝트
        *  @FileName 	LIF072M00.xfdl
        *  @Creator 	김진섭
        *  @CreateDate 	2024/11/22
        *  @Desction    생활>이동지역>차량/장비반출입신청>
        ******************* 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/22				김진섭							최초생성
        ********************************************************************************/
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.objVrbl = { isWrtSplmntStep : false    // 신청서 작성 및 보완 단계 여부
                       , isWrtStep       : false    // 신청서 작성 단계 여부
                       };

        this.aplyNo 	= "";	// 신청서번호(화면 로드시 신청서 번호가 없으면 신규등록 가능)

        //(ASIS : CAR_CAT_CD (워크플로우>임시저정>수정버튼클릭>데이타업데이트TAB에서 확인))
        this.aplySeCd 	= "TSPAIS005"; // 신청구분코드(운전면허신청)
        this.jobCd 		= "TAS00211"; // 작업코드(기본값 TAS00211 : 신청서작성)

        this.vStrSvcId  = ""; // 서비스ID
        this.vStrSvcUrl = ""; // 서비스URL

        this.btnDiv = this.divBtn; // 공통버튼영역 Div

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();

        };

        /*******************************************************************************************************************************
         * fnInit Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	// 로그인 정보
        	this.gvUserId 	= this.objApp.gdsUser.getColumn(0,"userId");			// 유저id
        	this.gvUserNm 	= this.objApp.gdsUser.getColumn(0,"userNm");			// 유저명
        	this.gvCoId   	= this.objApp.gdsUser.getColumn(0,"coId");				// 소속회사코드
        	this.gvCoNm   	= this.objApp.gdsUser.getColumn(0,"coNm");				// 소속회사명
        	this.gvDeptId   = this.objApp.gdsUser.getColumn(0,"deptId");			// 부서코드
        	this.gvTelNo  	= this.objApp.gdsUser.getColumn(0, "userTelno");		// 전화번호
        	this.gvMblTelNo	= this.objApp.gdsUser.getColumn(0, "userMblTelno");		// 휴대전화번호

        	// 신청구분명 조회
        	this.cfnGetAplySeNm({ id:"getAplySeNm", cbf:"fnCallback", aplySeCd:this.aplySeCd });

        	// 공통코드 함수 호출
        	this.cfnComCdLoad({ id:"comVhclSeSearch", cbf:"fnCallback", dsVhclSe:"AISVERVTY:S" }); // 차량/장비코드
        	this.cfnComCdLoad({ id:"comVhclCdSearch", cbf:"fnCallback", dsVhclCd:"AISVERVTY:S" }); // 차량/장비코드
        // 	this.cfnComCdLoad({ id:"comBldgSeSearch", cbf:"fnCallback", dsBldgSeList:"TSPLOC:S" }); // 건물구분코드(S:"선택"추가 옵션)
        // 	this.cfnComCdLoad({ id:"comAplyKndCdSearch", cbf:"fnCallback", dsAplyKndCdList:"FACREQTYPE:" }); // 신청종류코드
        // 	this.cfnComCdLoad({ id:"comRenUseCdSearch", cbf:"fnCallback", dsRenUseList:"RENUSE:" }); // 시설구분코드
        // 	this.cfnComCdLoad({ id:"comCustTypeCdSearch", cbf:"fnCallback", dsCustTypeCdList:"FACCOMTYPE:" }); // 고객유형코드
        // 	this.cfnComCdLoad({ id:"comZoneCdSearch", cbf:"fnCallback", dsZoneCdList:"TSCWPLARA:" }); // 구역구분코드
        // 	this.cfnComCdLoad({ id:"comSrvcAplySeCdSearch", cbf:"fnCallback", dsSrvcAplySeList:"FACSVCTYPE:" }); // 서비스신청구분코드

        	// 신청서 번호 있는지 체크 없으면 신규등록
        	this.aplyNo = this.getOwnerFrame().aplyNo;   // 신청번호

        	trace("a44_aplyNo==>" + this.aplyNo);
        	if (this.gfnIsNull(this.aplyNo)) {
        	    var nRow = this.dsAisMvmnRgnMst.addRow();
        		alert("dd11");
        		//신청자정보 영역
        		this.dsAisMvmnRgnMst.setColumn(nRow, "rgtrId"		, this.gvUserId);	// 등록자id
        		this.dsAisMvmnRgnMst.setColumn(nRow, "rgtrNm"		, this.gvUserNm);	// 등록자명
        		this.dsAisMvmnRgnMst.setColumn(nRow, "rgtrInstCd"	, this.gvCoId);		// 등록자기관코드
        		this.dsAisMvmnRgnMst.setColumn(nRow, "rgtrInstNm"	, this.gvCoNm);		// 등록자기관명
        		this.dsAisMvmnRgnMst.setColumn(nRow, "rgtrDeptCd"	, this.gvDeptId);	// 등록자부서코드
        		this.dsAisMvmnRgnMst.setColumn(nRow, "rgtrTelno"	, this.gvTelNo);	// 등록자전화번호
        		//KJS this.dsAisMvmnRgnMst.setColumn(nRow, "rgtrMblTelno"	, this.gvMblTelNo);	// 등록자휴대전화번호
        		this.dsAisMvmnRgnMst.setColumn(nRow, "hwrtInptCtinfoNo"	, this.gvMblTelNo);	// 등록자휴대전화번호
        		this.dsAisMvmnRgnMst.setColumn(nRow, "aplcntId"		, this.gvUserId);	// 신청자id
        		this.dsAisMvmnRgnMst.setColumn(nRow, "aplcntNm"		, this.gvUserNm);	// 신청자명
        		this.dsAisMvmnRgnMst.setColumn(nRow, "aplcntInstCd"	, this.gvCoId);		// 신청자기관코드
        		this.dsAisMvmnRgnMst.setColumn(nRow, "aplcntInstNm"	, this.gvCoNm);		// 신청자기관명
        		this.dsAisMvmnRgnMst.setColumn(nRow, "aplcntDeptCd"	, this.gvDeptId);	// 신청자부서코드
        		this.dsAisMvmnRgnMst.setColumn(nRow, "aplySeCd"		, this.aplySeCd);	// 신청구분코드
        		alert("dd22");
        		//설치요청기간 set
        // 		var vFdate 	= this.gfn_getDate("date");
        // 		var vTdate	= this.gfn_addMonth(vFdate, 1);
        // 		this.divForm.form.Div02.form.divCal.form.calBgngYmd.set_value(vFdate);
        // 		this.divForm.form.Div02.form.divCal.form.calEndYmd.set_value(vTdate);
        //
        // 		//이동지역차량장비말소 신청내역 리스트 영역
        // 		this.divForm.form.Div02.form.pan05.set_visible(false);
        //
        // 		this.divForm.form.Div02.form.staCnvyMttr.text = "전달내용";//처리내용 타이틀 항목
        // 		this.divForm.form.Div02.form.pan12.visible = false;//처리내용 그리드 이력 항목
        //
        // 	    this.divForm.form.Div02.form.rdoAplyKndCd.set_index(0);//신청종류 항목
        // 		this.divForm.form.Div02.form.rdoFcltSe.set_index(0);//시설구분 항목
        // 		this.divForm.form.Div02.form.rdoCustTypeCd.set_index(0);//고객유형 항목
        // 		this.divForm.form.Div02.form.rdoZone.set_index(0);//구역구분 항목
        //

        		// 해당 TASK ID로 버튼 자동 생성 -> 추후에 신청번호가 있는지 없는지 체크해서 task id 박아넣어줘야함. 현재는 신청서 작성으로 했음.
        		this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        	} else {

        		// 이동지역차량장비말소 마스터 조회
        		this.fnSearch(this.aplyNo);
        	}

        	alert("정상!!!");
        };

        /**************************************************************************
         * @name : form_onvscroll
         * @description : 화면 수직 스크롤 시
         ***************************************************************************/
        this.form_onvscroll = function(obj,e)
        {
        	// 버튼 크기에 맞춰 수치를 알아내야 한다.
        	var posTop1 = 0;
        	var posTop2 = 0;

        	if(e.pos == 0){
        		posTop1 = 63;
        		posTop2 = 219;

        	}else{
        		posTop1 = 12;
        		posTop2 = 168;
        	}

        	this.divQuick.top = e.pos + posTop1;
        	this.divBtn.top = e.pos + posTop2;
        };

        /**************************************************************************
         * @name : btnQuick_onclick
         * @description : 퀵메뉴 버튼 클릭
         ***************************************************************************/
        this.btnQuick_onclick = function(obj,e)
        {
        	var objNm = obj.name;

        	var objClass = obj.cssclass;

        	// btn_WF_Quick_S, btn_WF_Quick
        	// 컴포넌트 css 초기화
        	Array.from(this.divQuick.form.components).forEach(oComp => {
        		oComp.cssclass = "btn_WF_Quick";
        	});

        	obj.cssclass = "btn_WF_Quick_S";

        	var objDiv = null;
        	var objTit = null;

        	console.log("objNm = " + objNm);

        	if(objNm == "btn01"){//신청자정보
        		objDiv = this.divForm.form.Div01;
        		objTit = this.divForm.form.sub_tit01;

        	}else if(objNm == "btn02"){//신청정보
        		objDiv = this.divForm.form.Div02;
        		objTit = this.divForm.form.sub_tit02;

        	}else if(objNm == "btn03"){//처리결과
        		objDiv = this.divForm.form.Div03;
        		objTit = this.divForm.form.sub_tit03;

        	}

        	// 해당 DIV가 현재 숨겨져 있으면 이동 안함.
        	if(!objDiv.visible){
        		return;
        	}

        	if( this.getCurrentLayoutID() == "default" ) {
        		this.vscrollbar.set_pos(objTit.getOffsetTop() + 12);
        	}else{
        		// 모바일처리
        		// 얘는 픽셀 세팅 해야함 현재 화면 모바일 버전으로 안보임.
        		this.divForm.form.vscrollbar.set_pos(objTit.getOffsetTop() - 50);
        	}

        };

        /**************************************************************************
         * @name : btn_onclick
         * @description : Button Click Event
         ***************************************************************************/
        this.btn_onclick = function(obj,e)
        {
        	// WorkFlow 정보
        	var wfInfo = this.cfnGetWfInfo(obj.name);

        	trace("bb11");
        	var vBtnNm = wfInfo.prcsSeCdNm;
        	var vBtnCd = wfInfo.prcsSeCd; // 눌린 버튼 ID(obj.name과 같은 값임.)

        	/* vBtnCd 정보
        		CTL00774	임시저장
        		CTL00366	신청
        		CTL00832	종료
        		CTL00367	재신청
        		CTL00367	재신청
        		CTL00368	미처리종료
        		CTL00369	접수
        		CTL00371	보완요청
        		CTL00371	보완요청
        		CTL00382	승인
        		CTL00370	담당자변경
        		CTL00900	미처리종료
        		CTL00383	설문응답완료
        	*/

        	trace("vBtnCd===>" + vBtnCd);

        	if(vBtnCd == "CTL00774"){ // 임시저장 버튼
        		this.vStrSvcId  = "vhclEqpmntErsrAplyStrg";
        		this.vStrSvcUrl = "vhclEqpmntErsr/vhclEqpmntErsrAplyStrg.do";

        	}else if(vBtnCd == "CTL00366" || vBtnCd == "CTL00367" || vBtnCd == "CTL00367"){ // 신청서작성 - 신청, 신청서보완 - 재신청
        		// validation check
        		var res = this.fnValiChk();
        		if(!res){
        			return;

        		}
        		this.vStrSvcId  = "vhclEqpmntErsrAplyStrg";
        		this.vStrSvcUrl = "vhclEqpmntErsr/vhclEqpmntErsrAplyStrg.do";

        	}else if(vBtnCd == "CTL00832" || vBtnCd == "CTL00368" || vBtnCd == "CTL00900"){ // 종료, 신청서보완 - 미처리종료, 담당자검토및승인 - 미처리종료
        		// 신규입력일때 종료 버튼 클릭 시 화면만 닫아줌.
        		if(this.dsAisMvmnRgnMst.getRowType(0) == Dataset.ROWTYPE_INSERT){
        			this.gfnConfirmMsg("endConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["종료"]);

        			return;

        		}else{
        			this.vStrSvcId  = "vhclEqpmntErsrAplyStrg";
        			this.vStrSvcUrl = "vhclEqpmntErsr/vhclEqpmntErsrAplyStrg.do";

        		}

        	}else if(vBtnCd == "CTL00369" || vBtnCd == "CTL00371"){ // 접수 - 접수, 접수 - 보완요청
        		this.vStrSvcId  = "vhclEqpmntErsrAplyStrg";
        		this.vStrSvcUrl = "vhclEqpmntErsr/vhclEqpmntErsrAplyStrg.do";

        		// 서비스요청내용
        		if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "srvcDmndCnIdntyYn"))){
        			this.divForm.form.Div02.form.rdoSrvcDmndCnYn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["서비스요청 내용확인 \n"]);
        			return;

        		}
        		// 보완요청 - 보완사유 체크
        		if(vBtnCd == "CTL00371"){
        			if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "splmntDmndRsnCn"))){
        				this.divForm.form.Div02.form.txtSplmntDmndRsn.setFocus();
        				this.gfnAlertMsg("msg", "MSG_009", ["보완요청 사유 \n"]);
        				return;

        			}
        		}
        	}else if(vBtnCd == "CTL00371" || vBtnCd == "CTL00382"){ // 담당자검토및승인 - 보완요청 || 승인
        		this.vStrSvcId  = "vhclEqpmntErsrAplyStrg";
        		this.vStrSvcUrl = "vhclEqpmntErsr/vhclEqpmntErsrAplyStrg.do";

        		// 서비스신청정보
        		if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "srvcAplyInfoIdntyYn"))){
        			this.divForm.form.Div02.form.rdoSrvcDmndCnYn.setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", ["서비스신청정보 확인 \n"]);
        			return;

        		}
        		// 보완요청 - 보완사유 체크
        		if(vBtnCd == "CTL00371"){
        			if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "splmntDmndRsnCn"))){
        				this.divForm.form.Div02.form.txtSplmntDmndRsn.setFocus();
        				this.gfnAlertMsg("msg", "MSG_009", ["보완요청사유 \n"]);
        				return;

        			}
        		}
        	}else if(vBtnCd == "CTL00370"){ // 담당자변경
        		alert("담당자변경 팝업 완료 시 연결 예정!!");
        		return;

        	}

        	// 넘겨줄 데이터 세팅
        	this.dsAisMvmnRgnMst.setColumn(0, "jobCd", wfInfo.nextStepJobPrcsPrgrsSeCd);
        	this.dsAisMvmnRgnMst.setColumn(0, "aplySeCd", this.aplySeCd);

        	if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "docCd"))){
        		this.dsAisMvmnRgnMst.setColumn(0, "docCd", "TSPDOC900"); // 공통코드 TSPDOC900 : 전동차신청

        	}

        	// 시설운영마스터 데이터 세팅
        	if(!this.gfnIsNull(this.aplyNo)){
        		this.dsMst.setColumn(0, "aplyNo", this.aplyNo);

        	}
        	this.dsMst.setColumn(0, "taskCd"    , wfInfo.jobPrcsPrgrsSeCd        );  // 현재업무코드
        	this.dsMst.setColumn(0, "nextTaskCd", wfInfo.nextStepJobPrcsPrgrsSeCd);  // 다음업무코드

        	this.dsMst.setColumn(0, "aplySeCd", this.aplySeCd);  // 신청구분코드

        	if(this.gfnIsNull(this.dsMst.getColumn(0, "docCd"))){
        		this.dsMst.setColumn(0, "docCd", "TSPDOC900"); // 공통코드 TSPDOC900 : 전동차신청

        	}

        	var curDt = this.gfnGetDate("time");
        	if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "aplyDt"))){
        		this.dsAisMvmnRgnMst.setColumn(0, "aplyDt", curDt);

        	}
        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplyDt"))){
        		this.dsMst.setColumn(0, "aplyDt", curDt);

        	}

        	// 종료, 신청서보완 - 미처리종료, 담당자검토및승인 - 미처리종료, 등록/허가증제작중 - 제작완료
        	if(vBtnCd == "CTL00832" || vBtnCd == "CTL00368" || vBtnCd == "CTL00900" ){
        		// 종료일자 세팅
        		this.dsAisMvmnRgnMst.setColumn(0, "endDt", curDt);
        		this.dsMst.setColumn(0, "endDt", curDt);

        	}

        	// 납부담당자동일여부 - 동일하지 않을때 개인정보동의 항목 null 넣어줌.
        	if(this.dsAisMvmnRgnMst.getColumn(0, "payPicSmYn") == "1"){ // 동일하지않음
        		if(this.dsAisMvmnRgnMst.getColumn(0, "aplyKndCd") == "CARREQTYPE002"){
        			this.dsAisMvmnRgnMst.setColumn(0, "prvcClctEsntlAgreYn", null);
        			this.dsAisMvmnRgnMst.setColumn(0, "prvcClctChcAgreYn", null);

        		}else{
        			this.dsAisMvmnRgnMst.setColumn(0, "prvcClctEsntlAgreYn", null);
        			this.dsAisMvmnRgnMst.setColumn(0, "prvcClctEsntlAgreYn2", null);
        			this.dsAisMvmnRgnMst.setColumn(0, "prvcClctChcAgreYn", null);

        		}

        	}else if(this.dsAisMvmnRgnMst.getColumn(0, "payPicSmYn") == "0"){ // 동일함
        		this.dsAisMvmnRgnMst.setColumn(0, "prvcClctEsntlAgreYn2", null);

        	}

        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplcntId"))){
        		this.dsMst.setColumn(0, "aplcntId", this.gvUserId);	// 신청자id

        	}
        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplcntNm"))){
        		this.dsMst.setColumn(0, "aplcntNm", this.gvUserNm);	// 신청자명

        	}
        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplcntInstCd"))){
        		this.dsMst.setColumn(0, "aplcntInstCd", this.gvCoId);		// 신청자기관코드

        	}
        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplcntInstNm"))){
        		this.dsMst.setColumn(0, "aplcntInstNm", this.gvCoNm);		// 신청자기관명

        	}
        	if(this.gfnIsNull(this.dsMst.getColumn(0, "aplcntDeptCd"))){
        		this.dsMst.setColumn(0, "aplcntDeptCd", this.gvDeptId);	// 신청자부서코드

        	}

        	if(this.dsMst.getColumn(0, "clmZip") != this.dsAisMvmnRgnMst.getColumn(0, "clmZip")){
        		this.dsMst.setColumn(0, "clmZip", this.dsAisMvmnRgnMst.getColumn(0, "clmZip"));	// 우편번호

        	}
        	if(this.dsMst.getColumn(0, "clmAddr") != this.dsAisMvmnRgnMst.getColumn(0, "clmAddr")){
        		this.dsMst.setColumn(0, "clmAddr", this.dsAisMvmnRgnMst.getColumn(0, "clmZip"));	// 청구주소

        	}
        	if(this.dsMst.getColumn(0, "clmDtlAddr") != this.dsAisMvmnRgnMst.getColumn(0, "clmDtlAddr")){
        		this.dsMst.setColumn(0, "clmDtlAddr", this.dsAisMvmnRgnMst.getColumn(0, "clmDtlAddr"));		// 청구상세주소

        	}

        	// 수정된 내역이 있는지 체크
        	if(!this.gfnDsIsUpdated(this.dsAisMvmnRgnMst) && !this.gfnDsIsUpdated(this.dsAtfl) && !this.gfnDsIsUpdated(this.dsCnvyMttr)){
        		this.gfnAlertMsg("msg", "MSG_004", [""]);
        		return;

        	}

        	if(vBtnCd == "CTL00832" || vBtnCd == "CTL00368" || vBtnCd == "CTL00900"){ // 종료, 신청서보완 - 미처리종료, 담당자검토및승인 - 미처리종료
        		trace("sssss==>" + vBtnCd );
        		this.gfnConfirmMsg("endSaveConfirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["종료"]);

        	}else if(vBtnCd == "CTL00366") { // 신청
        		this.gfnConfirmMsg("aply_confirm", "MSG_025", "msgCallback", ["확인", "취소"], ["Y", "N"]);

        	}else{
        		this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);

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
                    // 첨부파일 변경시 첨부파일부터 저장
        			if(this.gfnDsIsUpdated(this.dsAtfl)) {  // 첨부파일 변경시
        				// 첨부파일 저장
        				var obj = { "thumnail" : "N"        // 썸네일 생성여부(첨부파일 중 이미지 파일이 있는 경우 "Y" 이면 썸네일 파일 생성)
        						  , "bsnsSeCd" : "TSPCAR"   // 업무구분코드(입주자서비스)
        						  , "prgrmId"  : this.name  // 프로그램ID (화면 ID)
        				};

        				this.RaonkUpload.AddFormData('params', JSON.stringify(obj));
        				this.RaonkUpload.Transfer();
        				return;

        			} else {
        				// 저장
        				this.cfnSave();
        			}
        		}
        	}else if(sPopupId == "endConfirm"){
        		if(oRtn.result == "Y") {
        			// 메뉴 ID
        			var sMenuId = this.objApp.gvFrmLeft.form.dsMenu.getColumn(this.objApp.gvFrmLeft.form.dsMenu.rowposition, this.FRAME_MENUCOLUMNS.menuId);

        			this.gfnCloseMenu(sMenuId);

        		}
        	}else if(sPopupId == "endSaveConfirm"){
        	alert("gggg==>" + oRtn.result);
        		if(oRtn.result == "Y") {
        			// 첨부파일 변경시 첨부파일부터 저장
        			if(this.gfnDsIsUpdated(this.dsAtfl)) {  // 첨부파일 변경시
        				// 첨부파일 저장
        				var obj = { "thumnail" : "N"        // 썸네일 생성여부(첨부파일 중 이미지 파일이 있는 경우 "Y" 이면 썸네일 파일 생성)
        						  , "bsnsSeCd" : "TSPCAR"   // 업무구분코드(입주자서비스)
        						  , "prgrmId"  : this.name  // 프로그램ID (화면 ID)
        				};

        				this.RaonkUpload.AddFormData('params', JSON.stringify(obj));
        				this.RaonkUpload.Transfer();
        				return;

        			} else {
        			alert("gggg2222==>" + oRtn.result);
        				// 저장
        				this.cfnSave();
        			}
        		}
        	}else if(sPopupId == "saveAlert"){
        		this.reload();

        		// this.gfnCloseMenu("MNG_0000000295");
        		// this.fnMovePage('MNG_0000000021', 'MNG_0000000144', 'work::CST/CAD/CST009M01.xfdl');

        	}else if(sPopupId == "imsi_saveAlert"){
        		//this.alert("임시저장 되었습니다.");
        		//this.close();

        		// this.gfnCloseMenu("MNG_0000000295");
        		// this.fnMovePage('MNG_0000000021', 'MNG_0000000144', 'work::CST/CAD/CST009M01.xfdl');

        	}else if(sPopupId == "aply_confirm"){
        		if(oRtn.result == "Y") {

        			// 저장
        			this.cfnSave();
        // 			// 메뉴 ID
        // 			var sMenuId = this.objApp.gvFrmLeft.form.dsMenu.getColumn(this.objApp.gvFrmLeft.form.dsMenu.rowposition, this.FRAME_MENUCOLUMNS.menuId);
        //
        // 			this.gfnCloseMenu(sMenuId);

        		}
        	}
        };

        /**************************************************************************
         * @name : cfnDelAtfl
         * @description : 첨부 파일 삭제
         ***************************************************************************/
        this.cfnDelAtfl = function(colId) {
            // 존재하지 않으면 돌아감
        	if(this.gfnIsNull(colId) || this.gfnIsNull(this.dsFile.getColumn(0, colId + "_orgnlFileNm"))) { return; }

            // RaonkUpload mergeFile 삭제
            var oRaonkUpload = this.RaonkUpload;
        	if(oRaonkUpload.GetListInfo().mergeFile) {
        	    oRaonkUpload.GetListInfo().mergeFile.forEach(function(v, i, o) {
        			if(v.customValue == colId) {
        				oRaonkUpload.SetSelectFile(i, '0');
        				oRaonkUpload.DeleteSelectedFile();
        			}
        		});
        	}

        	// 첨부파일 삭제
        	this.dsAtfl.deleteRow(this.dsAtfl.findRow("colId", colId));

        	// 첨부 파일 표출용 DS 설정
            this.cfnSetAtflExprs("", "", "", colId);
        };

        /**************************************************************************
         * @name : cfnSetAtflExprs
         * @description : 첨부 파일 표출용 DS 설정
         ***************************************************************************/
        this.cfnSetAtflExprs = function(fullName, orgnlFileNm, fileSz, colId) {
        	// 화면에 표출할 파일정보를 그리드에 설정
        	this.dsFile.setColumn(0, colId + "_fullName"   , fullName   );  // 파일풀명
        	this.dsFile.setColumn(0, colId + "_orgnlFileNm", orgnlFileNm);  // 원본파일명
        	this.dsFile.setColumn(0, colId + "_fileSz"     , fileSz     );  // 파일크기
        	this.dsFile.setColumn(0, colId + "_colId"      , this.gfnIsNull(fullName) ? "" : colId);  // 컬럼ID
        };

        /**************************************************************************
         * @name : fnValiChk
         * @description : validation check
         ***************************************************************************/
        this.fnValiChk = function(){

        	// 이동지역등록번호
        	if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "mvmnRgnRegNo"))){
        		this.divForm.form.Div02.form.edtMvmnRgnRegNo.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["이동지역등록번호 \n"]);
        		return false;

        	}

        	// 등록일자
        	if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "regYmd"))){
        		this.divForm.form.Div02.form.calRegYmd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["등록일자 \n"]);
        		return false;

        	}

        	// 차량장비명
        	if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "vhclEqpmntSeCd"))){
        		this.divForm.form.Div02.form.cboVhclEqpmntSeCd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["차량장비명 \n"]);
        		return false;

        	}

        	// 시도등록번호
        	if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "ctpvRegNo"))){
        		this.divForm.form.Div02.form.edtCtpvRegNo.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["시도등록번호 \n"]);
        		return false;

        	}

        	// 차량출입증반납일
        	if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "vhclAdpsRtnYmd"))){
        		this.divForm.form.Div02.form.calVhclAdpsRtnYmd.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["차량출입증반납일 \n"]);
        		return false;

        	}

        	// 차대번호
        	if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "vin"))){
        		this.divForm.form.Div02.form.edtVin.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["차대번호 \n"]);
        		return false;

        	}

        	// 말소사유
        	if(this.gfnIsNull(this.dsAisMvmnRgnMst.getColumn(0, "ersrRsnCn"))){
        		this.divForm.form.Div02.form.edtErsrRsnCn.setFocus();
        		this.gfnAlertMsg("msg", "MSG_009", ["말소사유 \n"]);
        		return false;

        	}

        	return true;
        }

        /**************************************************************************
         * @name : fnScrnSetting
         * @description : 조회 시 화면 세팅
         ***************************************************************************/
        this.fnScrnSetting = function()
        {

        //alert("bb11");
        	// 기본 바인딩 세팅
        	// 개인정보 필수동의
        	var sCompid = "divForm.form.Div02.form.rdoSrvcDmndCnYn";
        	var sItem = "";

        	for(var i = 0; i < this.binds.length; i++){
        		if(this.binds[i].compid == sCompid){
        			sItem = this.binds[i].name;
        			break;

        		}
        	}
        	// 같은 항목으로 동적바인딩 제거
        	this.removeChild(sItem);
        //alert("bb22");
        	var tmpTxt = "";

        	//TAS00214 : 담당자검토및승인
        	if(this.jobCd == "TAS00214"){
        		// 바인딩 생성
        		var bindObj = new BindItem();
        		bindObj.init(sItem, sCompid, "value", "dsAisMvmnRgnMst", "srvcAplyInfoIdntyYn");
        		this.addChild(sItem, bindObj);
        		bindObj.bind();
        		tmpTxt = "서비스신청정보확인";

        	}else{
        		// 바인딩 생성
        		var bindObj = new BindItem();
        		bindObj.init(sItem, sCompid, "value", "dsAisMvmnRgnMst", "srvcDmndCnIdntyYn");
        		this.addChild(sItem, bindObj);
        		bindObj.bind();
        		tmpTxt = "서비스요청내용확인";

        	}
        //alert("bb33_this.jobCd==>" + this.jobCd);
        	// text 세팅
        	this.divForm.form.Div02.form.staPrvcClctChcAgreYn01.text = tmpTxt;

        	// TAS00213 : 담당자접수, TAS00214 : 담당자검토및승인
        	//TODO
        	//서비스목록화면에서 팝업 오픈인지, 처리자 로그인 후 메인화면의 처리목록에 팝업 오픈인지 구분 필요
        	//KJS,20241120
        	if(this.jobCd == "TAS00213" || this.jobCd == "TAS00214"){
        //alert("bb33222");
        		this.divForm.form.Div02.form.pan07.visible = true; //서비스요청내용확인 radio
        		this.divForm.form.Div02.form.pan08.visible = true; //보완요청사유
        		this.divForm.form.Div02.form.pan09.visible = true; //별칭내용
        		this.divForm.form.Div02.form.pan10.visible = true; //전달사항
        		this.divForm.form.Div02.form.pan11.visible = true; //별칭내용
        		this.divForm.form.Div02.form.pan12.visible = true; //처리내용이력

        		this.resetScroll();//화면에서 스크롤을 길게 보이게 해주는 기능
        	}

        	//TAS00212 : 신청서보완
        	if(this.jobCd == "TAS00212"){
        		this.divForm.form.Div02.form.pan08.visible = true; //보완요청사유
        		this.divForm.form.Div02.form.pan10.visible = true; //전달사항
        		this.divForm.form.Div02.form.pan12.visible = true; //처리내용이력

        		this.resetScroll();//화면에서 스크롤을 길게 보이게 해주는 기능
        	}

        	//TAS00306 : 만족조조사
        	if(this.jobCd == "TAS00306"){
        	    this.divForm.form.Div02.form.pan10.visible = false; //처리내역
        		this.divForm.form.Div02.form.pan12.visible = true; //처리내용이력

        		this.resetScroll();//화면에서 스크롤을 길게 보이게 해주는 기능
        	}
        //alert("bb44");
        	// 담당자접수 (조회 거래) 시 readyOnly 처리
        // 	if(this.jobCd == "TAS00213"){
        // 		this.divForm.form.Div02.form.rdoSrvcDmndCnYn.readonly = true;
        // 		this.divForm.form.Div02.form.txtSplmntDmndRsn.readonly = true;
        // 	}

        	// 신청서 보완 시 보완내역 readyOnly 처리
        	if(this.jobCd == "TAS00212"){
        		this.divForm.form.Div02.form.rdoSrvcDmndCnYn.readonly = true;
        		this.divForm.form.Div02.form.txtSplmntDmndRsn.readonly = true;
        		this.divForm.form.Div02.form.grdSplmnt.readonly = true;
        		this.divForm.form.Div02.form.grdCnvyMttr.readonly = true;

        		this.resetScroll();

        	}

        	trace("(fn_ScrnSetting)this.jobCd ====>" + this.jobCd);

        	// TAS00220 : 종료 일때
        	if(this.jobCd == "TAS00220"){
        		var sBfrJobCd = this.dsAisMvmnRgnMst.getColumn(0, "bfrJobCd");
        		trace("sBfrJobCd_ff==>" + sBfrJobCd);
        		// TAS00211 : 신청서작성, TAS00212 : 신청서보완
        		if(sBfrJobCd == "TAS00211"){


        		}else if(sBfrJobCd == "TAS00212"){
        			// 신청서보완에서 미처리 종료된 경우 보완 내역을 보여준다.
        			this.divForm.form.Div02.form.pan07.visible = true;
        			this.divForm.form.Div02.form.pan08.visible = true;
        			this.divForm.form.Div02.form.pan09.visible = true;
        			// this.divForm.form.Div07.form.pan07.visible = true;
        			//this.divForm.form.Div07.form.pan08.visible = true;

        			this.resetScroll();

        		}
        	}
        //alert("bb555==>" + this.jobCd);
        	// this.jobCd 가 TAS00211, TAS00212 일때는 신청서 작성/보완 이라 이외에는 컴포넌트 readOnly 처리해줌.
        	if(this.jobCd != "TAS00211" && this.jobCd != "TAS00212"){
        //alert("bb66611==>" + this.jobCd);
        		// 이력 불러오기 버튼 신청성 작성일때만 노출
        		if(this.jobCd != "TAS00211"){
        			this.divForm.form.Div01.form.btnHstry.visible = false;

        		}
        //alert("bb66622==>" + this.jobCd);
        		// 컨포넌트 enable, readonly 처리
        		var sDivFrom = this.divForm.form;

        		var arrDivComps = [sDivFrom.Div01, sDivFrom.Div02];

        		arrDivComps.forEach(oDiv => {
        			Array.from(oDiv.form.components).forEach(oComp => {
        				fnReadonly.call(this, oComp);
        			});
        		});
        //alert("bb66633==>" + this.jobCd);
        		// 내부함수호출
        		function fnReadonly (oComp, bReadonly) {
        			if (oComp instanceof nexacro.Div) {
        				fnReadonly.call(this, oComp.form);
        			} else {
        				if (oComp instanceof nexacro.Static) return;
        				if (oComp instanceof nexacro.Panel) return;
        				if (oComp instanceof nexacro.TextArea){
        					// TAS00220 : 종료가 아닐땐 textArea 수정가능하게 해줌.
        					if(this.jobCd != "TAS00220"){
        						return;

        					}
        				}
        				if (oComp instanceof nexacro.Button) {
        					if(oComp.id.indexOf("btnMin") > -1) return;
        					try {
        						// enable 처리할거
        						oComp.enable = bReadonly;

        						return;
        					} catch(e) {
        						trace ("enable속성없음");
        					}
        				}
        //alert("bb8888");

        				try {
        					// 접수단계 || 담당자검토및승인
        					if(this.jobCd == "TAS00213" || this.jobCd == "TAS00214"){
        						// "rdoSrvcDmndCnYn", "grdSplmnt", "grdCnvyMttr"
        						if(this.gfnDecode(oComp.id, "rdoSrvcDmndCnYn", "1", "grdSplmnt", "1", "grdCnvyMttr", "1", "0") == "1"){
        							return;

        						}

        					}

        					// readonly 처리할거
        					oComp.readonly = !bReadonly;

        				} catch(e) {
        					trace ("readonly 속성없음");
        				}
        			}
        		}
        	}

        	//alert("bb9999");
        }

        /************************************************************************************************************
         * @name : fnCallback
         * @description : 팝업에 관한 콜백 함수
         ***********************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
            trace("@@fnCallback errorCode==>" + errorCode + " ; " +"svcID==>" + svcID + " ; " + "errorMsg==>" + errorMsg);

        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "vhclEqpmntErsrAplyInq" : // 이동지역차량장비말소 마스터 조회
        			//alert("마스터 정상조회!!!");
        			if(this.dsAisMvmnRgnMst.getRowCount() > 0){
        				this.jobCd = this.dsAisMvmnRgnMst.getColumn(0, "jobCd");
        			}

        			//@서비스목록 화면에서 팝업조회시 버튼 생성 막음(kjs, 20241119)
        			// 해당 TASK ID로 버튼 자동 생성 -> 추후에 신청번호가 있는지 없는지 체크해서 task id 박아넣어줘야함. 현재는 신청서 작성으로 했음.
        			this.cfnBtnCrt({ crtTrgt:this.divBtn, cbf:"fnCallback", lnkgEvnt:this.btn_onclick, inqCnd : { jobPrcsPrgrsSeCd:this.jobCd} });

        			// 화면 세팅
        			this.fnScrnSetting();

        			//상업용시설 이동지역차량장비말소 신청내역 리스트
        			if(this.dsAisMvmnRgnMst.getColumn(0, "fcltSeCd") == "RENUSE001"){
        				this.divForm.form.Div02.form.pan05.set_visible(false);//업무용시설
        			}else{
        				this.divForm.form.Div02.form.pan05.set_visible(true);//상업용시설
        			}

        			//차이 일수계산
        			var v_calBgngYmd = this.divForm.form.Div02.form.divCal.form.calBgngYmd.value;
        			var v_calEndYmd  = this.divForm.form.Div02.form.divCal.form.calEndYmd.value;
        			this.divForm.form.Div02.form.edtDiffDate.set_value(this.gfn_getDiffDate(v_calBgngYmd, v_calEndYmd));

        			//신청번호
        			this.divForm.form.Div01.form.pan01_AplyNo.visible = true;

        			alert("조회가 완료되었습니다");

        			break;

        		case "getAplySeNm" : // 신청구분명 조회
        			// 신청구분명 set
        			var v_AplySeNm = this.cfnGvbkAplySeNm();
        			trace("this.cfnGvbkAplySeNm()_v_AplySeNm==>" + v_AplySeNm);
        			this.divForm.form.Div01.form.edtAplySeNm.value = v_AplySeNm;

        			break;

        		case "comAplyKndCdSearch" : // 신청종류코드 조회
        			this.dsAplyKndCdList.filter("cdId == 'FACREQTYPE001' || cdId == 'FACREQTYPE002'");
        			this.divForm.form.Div02.form.rdoAplyKndCd.set_index(0);

        			break;

        		case "comRenUseCdSearch" : // 시설구분코드 조회

        			this.divForm.form.Div02.form.rdoFcltSe.set_index(0);

        			break;

        		case "comVhclSeSearch" : // 차량/장비 조회
        			// 차량/장비 제한값 'AISVERVTY01', 'AISVERVTY02', 'AISVERVTY03' ,'AISVERVTY04'
        			this.dsVhclSe.filter("cdId == '' || cdId == 'AISVERVTY01' || cdId == 'AISVERVTY02' || cdId == 'AISVERVTY03' || cdId == 'AISVERVTY04'");

        			// this.divForm.form.Div02.form.cboVhclSe.index = 0;

        			break;

        		case "comVhclCdSearch" : // 차량/장비 조회
        			// this.divForm.form.Div02.form.cboVhclCd.index = 0;

        			break;

        		case "comBldgSeSearch" : // 건물구분 조회
        			// 건물구분 제한값 'TSPLOCTSC010', 'TSPLOCTSC070', 'TSPLOCTSC020' ,'TSPLOCTSC030' ,'TSPLOCTSC090'
        			this.dsBldgSeList.filter("cdId == 'TSPLOCTSC010' || cdId == 'TSPLOCTSC020' || cdId == 'TSPLOCTSC070'");

        			// 전체 조회를 위해 [선택] 추가
        			this.dsBldgSeList.insertRow(0);
        			this.dsBldgSeList.setColumn(0, "cdId", "");
        			this.dsBldgSeList.setColumn(0, "cdNm", "[건물구분]");

        			this.divForm.form.Div02.form.cboBldgSe.set_index(0);

        			break;

        		case "comAplyKndSearch" : // 신청구분 조회
        			this.divForm.form.Div03.form.cboSrvcAplySe.set_index(0);

        			break;

        		case "_cfnBtnCrt_" : // 버튼 생성 callback
        			// 접수 || 담당자검토및승인
        			if(this.jobCd == "TAS00213" || this.jobCd == "TAS00214"){
        				this.rdoSrvcDmndCnYn_onitemchanged(this.divForm.form.Div02.form.rdoSrvcDmndCnYn);

        			}else if(this.jobCd == "TAS00212"){ // 신청서보완
        				var sClrId = this.dsAisMvmnRgnMst.getColumn(0, "clrId");
        				console.log("sClrId = " + sClrId);
        				if(this.gfnIsNull(sClrId)){ // 접수자ID가 없을때 담당자접수 에서 넘어온 자료
        					Array.from(this.btnDiv.form.components).forEach(oComp => {
        						if(oComp.id == "CTL00367"){
        							oComp.visible = false;

        						}else if(oComp.id == "CTL00367"){
        							oComp.visible = true;
        							console.log("CTL00367");

        						}
        					});

        				}else{
        					Array.from(this.btnDiv.form.components).forEach(oComp => {
        						if(oComp.id == "CTL00367"){
        							oComp.visible = true;
        							console.log("CTL00367");

        						}else if(oComp.id == "CTL00367"){
        							oComp.visible = false;

        						}
        					});
        				}
        			}

        			break;

        		case "vhclEqpmntErsrAplyStrg" : // 임시저장, 신청

        			alert("저장 처리가 정상적으로 완료되었습니다");
        		    this.close();
        			//this.gfnAlertMsg("저장", this.objApp.getVariable("gvRetMsg"));
        			//this.gfnAlertMsg("imsi_saveAlert", "저장", this.objApp.getVariable("gvRetMsg"), "msgCallback");

        // 			var param = {
        // 				"coId" : coId
        // 			};
        // 			var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        // 			var sMenuUrl = 'work::SVC/fac/LIF046M00.xfdl';
        // 			var actNm = '추가/상세';
        //
        // 			this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);

        			break;

        		case this.RaonkUpload.RAONKUPLOAD_UploadComplete.name :
        			// 파일 업로드 결과를 첨부파일 데이터셋에 설정
        			for(var i = 0; i < this.dsAtchRslt.rowcount; i++) {
        			    // 첨부파일관리번호
        				this.dsAtfl.setColumn(this.dsAtfl.findRow("colId", this.dsAtchRslt.getColumn(i, "colId")), "atflMngNo", this.dsAtchRslt.getColumn(i, "atflMngNo"));
        			}

                    // 저장
        			this.cfnSave();

        			break;

        		default :
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function (paramAplyNo)
        {
        	this.fnSearch(paramAplyNo);
        };

        /*=================================================================================*
         * @name : fnSearch
         * @description : 조회
         *=================================================================================*/
        this.fnSearch = function(paramAplyNo)
        {
        	if(this.dsSearch.getRowCount() > 0){
        		this.dsSearch.clearData();

        	}

        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "aplyNo", paramAplyNo);

        	var strSvcId    = "vhclEqpmntErsrAplyInq";
        	var strSvcUrl   = "vhclEqpmntErsr/vhclEqpmntErsrAplyInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsAisMvmnRgnMst=dsAisMvmnRgnMst dsCnvyMttr=dsCnvyMttr dsAtfl=dsAtfl dsMst=dsMst";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*=============================================================================*
         * @name : cfnSave
         * @description : 저장
         *=============================================================================*/
        this.cfnSave = function ()
        {
        	this.fn_Save(this.vStrSvcId, this.vStrSvcUrl);
        };

        this.fn_Save = function(vStrSvcId, vStrSvcUrl)
        {
        	//업무구분
        	//kjs this.dsAisMvmnRgnMst.setColumn(0, "jobCd", "FAC");

        	var strSvcId    = vStrSvcId;
        	var strSvcUrl   = vStrSvcUrl;
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;
        alert("ddd11");
        	inData    = "dsWfInfo=" + this.FV_DS_OTPT_WORK_FLOW_INFO + ":U"  // WorkFlow 정보
        			          + " dsMst=dsMst:U"                                     // Master DS
         			          + " dsAisMvmnRgnMst=dsAisMvmnRgnMst:U"     		 // 업무마스타 DS
        			          + " dsCnvyMttr=dsCnvyMttr"                           // 전달사항 DS
        			          + " dsAtfl=dsAtfl:U";                                   // 첨부파일 DS

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);

        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /*========================================================================================================*/
        /*  설치요청기간 시작일자 항목 변경
        /*=========================================================================================================*/
        this.divForm_Div02_divCal_calBgngYmd_onchanged = function(obj,e)
        {
        	var v_calBgngYmd = this.divForm.form.Div02.form.divCal.form.calBgngYmd.value;
        	var v_calEndYmd = this.divForm.form.Div02.form.divCal.form.calEndYmd.value;

        	//차이 일수계산
        	this.divForm.form.Div02.form.edtDiffDate.set_value(this.gfn_getDiffDate(v_calBgngYmd, v_calEndYmd));
        };

        /*=========================================================================================================*/
        /*  설치요청기간 종료일자 항목 변경
        /*=========================================================================================================*/
        this.divForm_Div02_divCal_calEndYmd_onchanged = function(obj,e)
        {
        	var v_calBgngYmd = this.divForm.form.Div02.form.divCal.form.calBgngYmd.value;
        	var v_calEndYmd = this.divForm.form.Div02.form.divCal.form.calEndYmd.value;

        	//차이 일수계산
        	this.divForm.form.Div02.form.edtDiffDate.set_value(this.gfn_getDiffDate(v_calBgngYmd, v_calEndYmd));
        };

        /*============================================================================================================================*/
        /*  시설구분 항목 변경
        /*============================================================================================================================*/
        this.divForm_Div02_rdoFcltSe_onitemchanged = function(obj,e)
        {
        	//상업용시설 이동지역차량장비말소 신청내역 리스트
        	if(this.divForm.form.Div02.form.rdoFcltSe.value == "RENUSE001"){
        		this.divForm.form.Div02.form.pan05.set_visible(false);//업무용시설
        	}else{
        		this.divForm.form.Div02.form.pan05.set_visible(true);//상업용시설
        	}
        };


        this.divForm_Div02_cboSrvcAplySe_onitemchanged = function(obj,e)
        {
            trace("dddd==>" + obj.value);
        	if(obj.value == "FACSVCTYPE008"){//기타선택
        		this.divForm.form.Div02.form.Panel_dtlArtlc.visible = true;
        	}else{
        		this.divForm.form.Div02.form.Panel_dtlArtlc.visible = false;
        	}
        };


        this.cfnClose = function(){

        	trace("cfnClose call");
        }

        /**************************************************************************
         * @name : rdoSrvcDmndCnYn_onitemchanged
         * @description : 서비스요청내용 수정 완료 시
         ***************************************************************************/
        this.rdoSrvcDmndCnYn_onitemchanged = function(obj,e)
        {
        	var objVal = obj.value;

        	if(this.jobCd == "TAS00213"){ // 담당자접수
        	//alert("objVal11==>" + objVal);
        		if(objVal == "1"){ // 1 : 확인
        			/*
        			CTL00369	접수
        			CTL00371	보완요청
        			CTL11020	미처리종료
        			*/
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL00369"){
        					oComp.visible = true;

        				}else{
        					oComp.visible = false;

        				}
        			});

        		}else if(objVal == "2"){ // 2 : 미처리종료
        			/*
        			CTL00369	접수
        			CTL00371	보완요청
        			CTL11020	미처리종료
        			*/
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        			//trace("oComp.id_1111==>" + oComp.id);
        				if(oComp.id == "CTL11020"){
        					oComp.visible = true;

        				}else{
        					oComp.visible = false;

        				}
        			});

        		}else{
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL00371"){
        					oComp.visible = true;

        				}else{
        					oComp.visible = false;

        				}
        			});
        		}

        	}else if(this.jobCd == "TAS00214"){ // 담당자검토및승인
        	alert("objVal==>" + objVal);
        		if(objVal == "1"){ // 1 : 확인
        			/*
        			CTL00371	보완요청
        			CTL00382	승인
        			*/
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL00382"){
        					oComp.visible = true;

        				}else if(oComp.id == "CTL00371"){
        					oComp.visible = false;

        				}
        			});

        		}else if(objVal == "2"){ // 2 : 미처리종료
        			/*
        			CTL00371	보완요청
        			CTL00382	승인
        			*/
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        			//trace("oComp.id_1111==>" + oComp.id);
        				if(oComp.id == "CTL11020"){
        					oComp.visible = true;

        				}else{
        					oComp.visible = false;

        				}
        			});

        		}else{
        			Array.from(this.btnDiv.form.components).forEach(oComp => {
        				if(oComp.id == "CTL00371"){
        					oComp.visible = true;

        				}else{
        					oComp.visible = false;

        				}
        			});
        		}
        	}

        	// 1 : 확인 일때 보완요청사유를 지워준다.
        	if(objVal == "1"){
        		// this.dsList.setColumn(0, "splmntDmndRsnCn", "");

        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.accordionmenu_onload,this);
            this.divForm.form.divInfoGuide.form.btnSchClose.addEventHandler("onclick",this.divInfoGuide_btnSchClose_onclick,this);
            this.divForm.form.Div02.form.btn_file_1.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div02.form.btn_del_file_1.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div02.form.Grid00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div02.form.Grid00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div02.form.btn_file_1_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div02.form.btn_del_file_1_00.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div02.form.Grid00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div02.form.Grid00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div02.form.btn_file_1_00_00.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div02.form.btn_del_file_1_00_00.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div02.form.Grid00_00_00.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div02.form.Grid00_00_00.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divForm.form.Div02.form.btn_file_1_01.addEventHandler("onclick",this.divForm_Div04_btn_file_1_onclick,this);
            this.divForm.form.Div02.form.btn_del_file_1_01.addEventHandler("onclick",this.divForm_Div04_btn_del_file_1_onclick,this);
            this.divForm.form.Div02.form.Grid00_01.addEventHandler("oncellclick",this.divForm_Div04_Grid00_oncellclick,this);
            this.divForm.form.Div02.form.Grid00_01.addEventHandler("oncelldblclick",this.divForm_Div04_Grid00_oncelldblclick,this);
            this.divBtn.form.btn00_00_01.addEventHandler("onclick",this.divBtn_btn00_00_onclick,this);
        };
        this.loadIncludeScript("LIF073M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
