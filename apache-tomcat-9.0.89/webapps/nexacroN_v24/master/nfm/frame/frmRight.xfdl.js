(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("right");
            this.set_titletext("Quick Menu");
            if (Form == this.constructor)
            {
                this._setFormPosition(233,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"taskTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"upMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuTargtCd\" type=\"STRING\" size=\"256\"/><Column id=\"menuOrdVl\" type=\"STRING\" size=\"256\"/><Column id=\"menuLvl\" type=\"STRING\" size=\"256\"/><Column id=\"menuExplnCn\" type=\"STRING\" size=\"256\"/><Column id=\"popupMenuAttrbCn\" type=\"STRING\" size=\"256\"/><Column id=\"menuImgPath\" type=\"STRING\" size=\"256\"/><Column id=\"menuImgNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"menuUrl\" type=\"STRING\" size=\"256\"/><Column id=\"frstRgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastMdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"lastMdfcnDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"dsName\" type=\"STRING\" size=\"256\"/><Column id=\"upInstId\" type=\"STRING\" size=\"256\"/><Column id=\"instId\" type=\"STRING\" size=\"256\"/><Column id=\"instTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"wplarId\" type=\"STRING\" size=\"256\"/><Column id=\"nxtrmNo\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmblcId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpInst", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInsttList", this);
            obj._setContents("<ColumnInfo><Column id=\"instId\" type=\"STRING\" size=\"256\"/><Column id=\"instNm\" type=\"STRING\" size=\"256\"/><Column id=\"instAbbrvNm\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWplarList", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNxtrmNoList", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmblcList", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSbltList", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWplbkList", this);
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSidoList", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSgngList", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmndnList", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLiList", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAdressSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"dsName\" type=\"STRING\" size=\"256\"/><Column id=\"sid_cd\" type=\"STRING\" size=\"256\"/><Column id=\"sig_cd\" type=\"STRING\" size=\"256\"/><Column id=\"emd_cd\" type=\"STRING\" size=\"256\"/><Column id=\"bchk\" type=\"STRING\" size=\"256\"/><Column id=\"bonbun\" type=\"STRING\" size=\"256\"/><Column id=\"bubun\" type=\"STRING\" size=\"256\"/><Column id=\"ri_cd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divQuick","0","0",null,"850","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_RF_group");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staName","0","0",null,"34","0",null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("0");
            obj.set_text("QUICK MENU");
            obj.set_cssclass("sta_RF_groupName");
            obj.set_letterSpacing("5px");
            this.divQuick.addChild(obj.name, obj);

            obj = new Div("divSearch01","10","66","213","54",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("6");
            obj.set_cssclass("div_RF_groupBox");
            this.divQuick.addChild(obj.name, obj);

            obj = new Static("staLabel00","15","12","51","28",null,null,null,null,null,null,this.divQuick.form.divSearch01.form);
            obj.set_taborder("0");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_RF_label");
            this.divQuick.form.divSearch01.addChild(obj.name, obj);

            obj = new Edit("editMenuNm","staLabel00:005","12","133","28",null,null,null,null,null,null,this.divQuick.form.divSearch01.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_RF_input");
            obj.set_text("");
            this.divQuick.form.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","divSearch01:11","108","32",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("1");
            obj.set_text("경영계획부 검색");
            obj.set_cssclass("sta_RF_groupLabel");
            this.divQuick.addChild(obj.name, obj);

            obj = new Div("divSearch02","10","Static00_00:-1","213","310",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_RF_groupBox");
            this.divQuick.addChild(obj.name, obj);

            obj = new Static("staLine00","0",null,null,"50","0","0",null,null,null,null,this.divQuick.form.divSearch02.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_RF_partLine");
            this.divQuick.form.divSearch02.addChild(obj.name, obj);

            obj = new Button("btnSearch02","54",null,"104","29",null,"10",null,null,null,null,this.divQuick.form.divSearch02.form);
            obj.set_taborder("4");
            obj.set_text("바로가기");
            obj.set_cssclass("btn_RF_shortcut");
            this.divQuick.form.divSearch02.addChild(obj.name, obj);

            obj = new Static("staLabel00","15","12","87","28",null,null,null,null,null,null,this.divQuick.form.divSearch02.form);
            obj.set_taborder("5");
            obj.set_text("지방산림청");
            obj.set_cssclass("sta_RF_label");
            this.divQuick.form.divSearch02.addChild(obj.name, obj);

            obj = new Static("staLabel01","15","47","87","28",null,null,null,null,null,null,this.divQuick.form.divSearch02.form);
            obj.set_taborder("7");
            obj.set_text("국유림관리소");
            obj.set_cssclass("sta_RF_label");
            this.divQuick.form.divSearch02.addChild(obj.name, obj);

            obj = new Static("staLabel02","15","82","87","28",null,null,null,null,null,null,this.divQuick.form.divSearch02.form);
            obj.set_taborder("8");
            obj.set_text("경영계획구");
            obj.set_cssclass("sta_RF_label");
            this.divQuick.form.divSearch02.addChild(obj.name, obj);

            obj = new Static("staLabel03","15","117","87","28",null,null,null,null,null,null,this.divQuick.form.divSearch02.form);
            obj.set_taborder("9");
            obj.set_text("차기");
            obj.set_cssclass("sta_RF_label");
            this.divQuick.form.divSearch02.addChild(obj.name, obj);

            obj = new Combo("upInstId","staLabel00:0","12",null,"28","9",null,null,null,null,null,this.divQuick.form.divSearch02.form);
            obj.set_taborder("0");
            obj.set_cssclass("cbo_RF_input");
            obj.set_innerdataset("dsUpInst");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            obj.set_text("");
            this.divQuick.form.divSearch02.addChild(obj.name, obj);

            obj = new Combo("instId","staLabel01:0","47",null,"28","9",null,null,null,null,null,this.divQuick.form.divSearch02.form);
            obj.set_taborder("1");
            obj.set_cssclass("cbo_RF_input");
            obj.set_innerdataset("dsInsttList");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            this.divQuick.form.divSearch02.addChild(obj.name, obj);

            obj = new Combo("wplarId","staLabel02:0","82",null,"28","9",null,null,null,null,null,this.divQuick.form.divSearch02.form);
            obj.set_taborder("2");
            obj.set_cssclass("cbo_RF_input");
            obj.set_innerdataset("dsWplarList");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            this.divQuick.form.divSearch02.addChild(obj.name, obj);

            obj = new Combo("nxtrmNo","staLabel03:0","117",null,"28","9",null,null,null,null,null,this.divQuick.form.divSearch02.form);
            obj.set_taborder("3");
            obj.set_cssclass("cbo_RF_input");
            obj.set_innerdataset("dsNxtrmNoList");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            this.divQuick.form.divSearch02.addChild(obj.name, obj);

            obj = new Static("staLine00_00","0",null,null,"101","0","58",null,null,null,null,this.divQuick.form.divSearch02.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_RF_partLine");
            obj.set_text("");
            this.divQuick.form.divSearch02.addChild(obj.name, obj);

            obj = new Static("staLabel04","15","182","87","28",null,null,null,null,null,null,this.divQuick.form.divSearch02.form);
            obj.set_taborder("11");
            obj.set_text("임반");
            obj.set_cssclass("sta_RF_label");
            this.divQuick.form.divSearch02.addChild(obj.name, obj);

            obj = new Static("staLabel05","15","217","87","28",null,null,null,null,null,null,this.divQuick.form.divSearch02.form);
            obj.set_taborder("12");
            obj.set_text("소반");
            obj.set_cssclass("sta_RF_label");
            this.divQuick.form.divSearch02.addChild(obj.name, obj);

            obj = new Combo("cmblcId","102","182",null,"28","9",null,null,null,null,null,this.divQuick.form.divSearch02.form);
            obj.set_taborder("13");
            obj.set_cssclass("cbo_RF_input");
            obj.set_innerdataset("dsCmblcList");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            this.divQuick.form.divSearch02.addChild(obj.name, obj);

            obj = new Combo("sbltId","102","217",null,"28","9",null,null,null,null,null,this.divQuick.form.divSearch02.form);
            obj.set_taborder("14");
            obj.set_cssclass("cbo_RF_input");
            obj.set_innerdataset("dsSbltList");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            this.divQuick.form.divSearch02.addChild(obj.name, obj);

            obj = new Radio("RadioSelect","12","152","198","28",null,null,null,null,null,null,this.divQuick.form.divSearch02.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divQuick_form_divSearch02_form_RadioSelect_innerdataset = new nexacro.NormalDataset("divQuick_form_divSearch02_form_RadioSelect_innerdataset", obj);
            divQuick_form_divSearch02_form_RadioSelect_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">직접입력</Col></Row></Rows>");
            obj.set_innerdataset(divQuick_form_divSearch02_form_RadioSelect_innerdataset);
            obj.set_text("체크");
            obj.set_value("0");
            obj.set_index("0");
            this.divQuick.form.divSearch02.addChild(obj.name, obj);

            obj = new MaskEdit("mskEdtCmblcId","102","182",null,"28","9",null,null,null,null,null,this.divQuick.form.divSearch02.form);
            obj.set_taborder("16");
            obj.set_visible("false");
            obj.set_format("###-###");
            obj.set_type("string");
            this.divQuick.form.divSearch02.addChild(obj.name, obj);

            obj = new MaskEdit("mskEdtSbltId","102","217",null,"28","9",null,null,null,null,null,this.divQuick.form.divSearch02.form);
            obj.set_taborder("17");
            obj.set_visible("false");
            obj.set_format("###-###");
            obj.set_type("string");
            this.divQuick.form.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","10","divSearch02:11","150","32",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("3");
            obj.set_text("경영계획부 지번 검색");
            obj.set_cssclass("sta_RF_groupLabel");
            this.divQuick.addChild(obj.name, obj);

            obj = new Div("divSearch03","10","Static00_00_00:-1",null,"301","10",null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_RF_groupBox");
            this.divQuick.addChild(obj.name, obj);

            obj = new Static("staLine00","0",null,null,"50","0","0",null,null,null,null,this.divQuick.form.divSearch03.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_RF_partLine");
            this.divQuick.form.divSearch03.addChild(obj.name, obj);

            obj = new Button("btnSearch03","54",null,"104","29",null,"10",null,null,null,null,this.divQuick.form.divSearch03.form);
            obj.set_taborder("8");
            obj.set_text("바로가기");
            obj.set_cssclass("btn_RF_shortcut");
            this.divQuick.form.divSearch03.addChild(obj.name, obj);

            obj = new Static("staLabel00","15","42","51","28",null,null,null,null,null,null,this.divQuick.form.divSearch03.form);
            obj.set_taborder("9");
            obj.set_text("주소");
            obj.set_cssclass("sta_RF_label");
            this.divQuick.form.divSearch03.addChild(obj.name, obj);

            obj = new Static("staLabel01","15","77","51","28",null,null,null,null,null,null,this.divQuick.form.divSearch03.form);
            obj.set_taborder("11");
            obj.set_text("시도");
            obj.set_cssclass("sta_RF_label");
            this.divQuick.form.divSearch03.addChild(obj.name, obj);

            obj = new Static("staLabel02","15","112","51","28",null,null,null,null,null,null,this.divQuick.form.divSearch03.form);
            obj.set_taborder("12");
            obj.set_text("시군구");
            obj.set_cssclass("sta_RF_label");
            this.divQuick.form.divSearch03.addChild(obj.name, obj);

            obj = new Static("staLabel03","15","147","51","28",null,null,null,null,null,null,this.divQuick.form.divSearch03.form);
            obj.set_taborder("13");
            obj.set_text("읍면동");
            obj.set_cssclass("sta_RF_label");
            this.divQuick.form.divSearch03.addChild(obj.name, obj);

            obj = new Static("staLabel04","15","182","51","28",null,null,null,null,null,null,this.divQuick.form.divSearch03.form);
            obj.set_taborder("14");
            obj.set_text("리");
            obj.set_cssclass("sta_RF_label");
            this.divQuick.form.divSearch03.addChild(obj.name, obj);

            obj = new Static("staLabel05","15","217","51","28",null,null,null,null,null,null,this.divQuick.form.divSearch03.form);
            obj.set_taborder("15");
            obj.set_text("지번");
            obj.set_cssclass("sta_RF_label");
            this.divQuick.form.divSearch03.addChild(obj.name, obj);

            obj = new Edit("textDtadd","staLabel00:0","42",null,"28","9",null,null,null,null,null,this.divQuick.form.divSearch03.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_RF_input");
            obj.set_enable("true");
            obj.set_text("");
            this.divQuick.form.divSearch03.addChild(obj.name, obj);

            obj = new Combo("ctprvCd","staLabel01:0","77",null,"28","9",null,null,null,null,null,this.divQuick.form.divSearch03.form);
            obj.set_taborder("1");
            obj.set_cssclass("cbo_RF_input");
            obj.set_innerdataset("dsSidoList");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            obj.set_enable("false");
            obj.set_enableevent("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divQuick.form.divSearch03.addChild(obj.name, obj);

            obj = new Combo("sgngCd","staLabel02:0","112",null,"28","9",null,null,null,null,null,this.divQuick.form.divSearch03.form);
            obj.set_taborder("2");
            obj.set_cssclass("cbo_RF_input");
            obj.set_innerdataset("dsSgngList");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            obj.set_enable("false");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divQuick.form.divSearch03.addChild(obj.name, obj);

            obj = new Combo("emndnCd","staLabel03:0","147",null,"28","9",null,null,null,null,null,this.divQuick.form.divSearch03.form);
            obj.set_taborder("3");
            obj.set_cssclass("cbo_RF_input");
            obj.set_innerdataset("dsEmndnList");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            obj.set_enable("false");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divQuick.form.divSearch03.addChild(obj.name, obj);

            obj = new Combo("liCd","staLabel04:0","182",null,"28","9",null,null,null,null,null,this.divQuick.form.divSearch03.form);
            obj.set_taborder("4");
            obj.set_cssclass("cbo_RF_input");
            obj.set_innerdataset("dsLiList");
            obj.set_codecolumn("value");
            obj.set_datacolumn("name");
            obj.set_enable("false");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divQuick.form.divSearch03.addChild(obj.name, obj);

            obj = new CheckBox("sanYn","68","217","48","28",null,null,null,null,null,null,this.divQuick.form.divSearch03.form);
            obj.set_taborder("5");
            obj.set_text("산");
            obj.set_cssclass("chk_RF_input");
            obj.set_enable("false");
            this.divQuick.form.divSearch03.addChild(obj.name, obj);

            obj = new Edit("jibun1","116","217","36","28",null,null,null,null,null,null,this.divQuick.form.divSearch03.form);
            obj.set_taborder("6");
            obj.set_cssclass("edt_RF_input");
            obj.set_enable("false");
            this.divQuick.form.divSearch03.addChild(obj.name, obj);

            obj = new Static("staUnit","jibun1:0","217","15","28",null,null,null,null,null,null,this.divQuick.form.divSearch03.form);
            obj.set_taborder("16");
            obj.set_text("-");
            obj.set_cssclass("sta_RF_unit");
            this.divQuick.form.divSearch03.addChild(obj.name, obj);

            obj = new Edit("jibun2","staUnit:0","217","37","28",null,null,null,null,null,null,this.divQuick.form.divSearch03.form);
            obj.set_taborder("7");
            obj.set_cssclass("edt_RF_input");
            obj.set_enable("false");
            this.divQuick.form.divSearch03.addChild(obj.name, obj);

            obj = new Radio("rdoAddrType","16","11","188","25",null,null,null,null,null,null,this.divQuick.form.divSearch03.form);
            obj.set_taborder("17");
            obj.set_columncount("2");
            obj.set_direction("horizontal");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("2");
            var divQuick_form_divSearch03_form_rdoAddrType_innerdataset = new nexacro.NormalDataset("divQuick_form_divSearch03_form_rdoAddrType_innerdataset", obj);
            divQuick_form_divSearch03_form_rdoAddrType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">소재지</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">주소</Col></Row></Rows>");
            obj.set_innerdataset(divQuick_form_divSearch03_form_rdoAddrType_innerdataset);
            obj.set_text("소반소재지");
            obj.set_value("1");
            obj.set_index("0");
            this.divQuick.form.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static00","10","staName:1","68","32",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("5");
            obj.set_text("메뉴 검색");
            obj.set_cssclass("sta_RF_groupLabel");
            obj.set_visible("true");
            this.divQuick.addChild(obj.name, obj);

            obj = new ImageViewer("img00","80","42","18","20",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("8");
            obj.set_image("url(\'imagerc::work/img_WF_guide_G.png\')");
            obj.set_tooltiptext("메뉴명을 입력하고 목록의 표출되는 메뉴명을 클릭하시면 해당 메뉴로 이동 합니다.");
            obj.set_tooltiptype("inplace");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_cursor("help");
            this.divQuick.addChild(obj.name, obj);

            obj = new ImageViewer("img00_00","122","138","18","20",null,null,null,null,null,null,this.divQuick.form);
            obj.set_taborder("9");
            obj.set_image("url(\'imagerc::work/img_WF_guide_G.png\')");
            obj.set_tooltiptext("지방산림청 부터 소반까지 차례대로 조건을 지정 하고 바로가기 버튼을 클릭하시면\r\n경영계획부 조회 메뉴에서 해당 검색조건으로 검색된 정보를 확인 할 수 있습니다.");
            obj.set_tooltiptype("hover");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_cursor("help");
            this.divQuick.addChild(obj.name, obj);

            obj = new Grid("grdList","81","106","133","119",null,null,null,null,null,null,this.divQuick.form);
            obj.set_initvalueid("iv_Grid0");
            obj.set_taborder("7");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"271\"/></Columns><Rows><Row size=\"35\"/></Rows><Band id=\"body\"><Cell text=\"bind:menuNm\" edittype=\"none\"/></Band></Format></Formats>");
            this.divQuick.addChild(obj.name, obj);

            obj = new ImageViewer("img00_00_00","153","490","18",null,null,"340",null,null,null,null,this.divQuick.form);
            obj.set_taborder("10");
            obj.set_image("url(\'imagerc::work/img_WF_guide_G.png\')");
            obj.set_tooltiptext("소재지 검색 / 주소 검색을 선택 후 검색조건을 입력하고 바로가기 버튼을 클릭시 \r\n경영계획부 조회 화면에서 해당 검색 조건으로 검색된 정보가 표출 됩니다.");
            obj.set_tooltiptype("inplace,mouseleave");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_cursor("help");
            this.divQuick.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divQuick.form.divSearch01.form
            obj = new Layout("default","",0,0,this.divQuick.form.divSearch01.form,function(p){});
            this.divQuick.form.divSearch01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divQuick.form.divSearch02.form
            obj = new Layout("default","",0,0,this.divQuick.form.divSearch02.form,function(p){});
            this.divQuick.form.divSearch02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divQuick.form.divSearch03.form
            obj = new Layout("default","",0,0,this.divQuick.form.divSearch03.form,function(p){});
            this.divQuick.form.divSearch03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divQuick.form
            obj = new Layout("default","",0,0,this.divQuick.form,function(p){});
            this.divQuick.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",233,850,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("frmRight.xfdl","lib::libSrcDatMngme.xjs");
        this.registerScript("frmRight.xfdl", function() {
        /**
         *  @FileName 	frmRight.xfdl
         *  @Creator 	박준하
         *  @CreateDate 2023/09/18
         *  @Desction
         ************** 소스 수정 이력 ***********************************************
         * Date					Modifier					Description
         *******************************************************************************
         * 2023/09/18			박준하						최초생성
         *******************************************************************************
        **/
        this.executeIncludeScript("lib::libSrcDatMngme.xjs"); /*include "lib::libSrcDatMngme.xjs"*/;
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        var wplbkMenuId = "";

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description Form 로드 완료
        **/
        const publicArgs = this.gfnGetMdiRootDiv() ? this.gfnGetMdiRootDiv().arguments.menuParam : this.getOwnerFrame();
        this.dpcnIdntyAt = false;
        this.form_onload = function(obj,e)
        {//trace(obj.name, e.eventid);
        	app.gvFrmRight = obj.parent;
        	app.gvFrmRight.org_width = obj.parent.getOffsetWidth();
        	this.dsSearch.setColumn(0, "upInstId", "KFS");
        	this.dsSearch.setColumn(0, "instTpcd", '20');
        	this.dsSearch.setColumn(0,'dsName',"INTEN");
        	this.dsAdressSearch.setColumn(0,'dsName',"SIDO");
        	this.fnWplbkSearch();
        	this.fnAdressSearch();

        	//this.fnCtprvSearch();
        	//this.fnWplbkSearch();
        };

        // /**
        //  * @description Form 크기 변경
        // **/
        // this.form_onsize = function(obj:nexacro.Form,e:nexacro.SizeEventInfo)
        // {
        //
        // };


        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**
         * @description 조회
        */
        this.fnSearch = function ()
        {
        	let strMenuNm = this.divQuick.form.divSearch01.form.editMenuNm.value == '' ? null : this.divQuick.form.divSearch01.form.editMenuNm.value == null ? null : this.divQuick.form.divSearch01.form.editMenuNm.value.trim();
        	this.dsSearch.setColumn(0,'menuNm', strMenuNm);

        	var strSvcId    = "menuSearch";
        	var strSvcUrl   = "/cmmn/sysMng/menuMng/readMainMenuMngList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync, 		// 비동기통신 여부 [생략가능]
        						3);				// nDataType :: 3(JSON)
        };

        //지방산림청 목록 함수
        this.fnWplbkSearch = function()
        {
        	var dsName = this.dsSearch.getColumn(0,'dsName')
        	var strSvcId    = "searchUpInst";
        	var strSvcUrl   = "/nfmCmmn/selectNfmCmmnSearch.do";
        	var inData      = "dsSearch=dsSearch";
        	if(dsName == "INTEN"){
        		var outData     = "dsUpInst=resultList";
        	}else if(dsName == "NTFRT_MNOFF"){
        		var outData     = "dsInsttList=resultList";
        	}else if(dsName == "WPLAR"){
        		var outData     = "dsWplarList=resultList";
        	}else if(dsName == "NXTRM"){
        		var outData     = "dsNxtrmNoList=resultList";
        	}else if(dsName == "CMBLC"){
        		var outData     = "dsCmblcList=resultList";
        	}else if(dsName == "SBLT"){
        		var outData     = "dsSbltList=resultList";
        	}

        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync, 		// 비동기통신 여부 [생략가능]
        						3);				// nDataType :: 3(JSON)
        };


        this.fnAdressSearch = function(){

        	var dsName = this.dsAdressSearch.getColumn(0,'dsName')
        	var strSvcId    = "adressSearch";
        	var strSvcUrl   = "/nfmCmmn/selectNfmCmmnSearch.do";
        	var inData      = "dsSearch=dsAdressSearch";
        	if(dsName == "SIDO"){
        		var outData     = "dsSidoList=resultList";
        	}else if(dsName == "SIGUNGU"){
        		var outData     = "dsSgngList=resultList";
        	}else if(dsName == "EMD"){
        		var outData     = "dsEmndnList=resultList";
        	}else if(dsName == "RI"){
        		var outData     = "dsLiList=resultList";
        	}

        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync, 		// 비동기통신 여부 [생략가능]
        						3);				// nDataType :: 3(JSON)
        };




        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        /**
         * @description Transaction CallBack 함수(선택)
        */
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "menuSearch":



        			break;
        		case "searchUpInst":

        			break;
        		case "searchInstt":
        			break;
        		case "searchWplar":
        			break;
        		case "searchNxtrm":
        			break;
        		case "searchCmblc":
        			break;
        		case "searchSblt":
        			break;
        		case "wplbkSearch":
        			break;
        		case "ctprvSearch":
        			break;
        		case "sgngSearch":
        			break;
        		case "emndnSearch":
        			break;
        		case "liSearch":
        			break;
        	}
        };


        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divQuick_divSearch_editMenuNm_onkeyup = function(obj,e)
        {
        	this.setTimer(1, 500)
        };

        this.form_ontimer = function(obj, e)
        {
         if(e.timerid==1)
         {
        	this.fnSearch();
        	this.killTimer(e.timerid);
         }
        }

        this.grdList_oncellclick = function(obj,e)
        {
        	this.gfnOpenMenu(this.dsList.getColumn(e.row, 'menuId'));
        	this.divQuick.form.divSearch01.form.editMenuNm.set_value('');
        	this.divQuick.form.grdList.set_visible(false);
        };

        this.divQuick_grdList_onkillfocus = function(obj,e)
        {	var menuValue = this.divQuick.form.divSearch01.form.editMenuNm.value ;

        	if(menuValue == null || menuValue == '' || menuValue == 'undefind'){
        		this.divQuick.form.grdList.set_visible(false);
        	}else{
        		this.divQuick.form.grdList.set_visible(true);
        	}
        };

        this.divQuick_divSearch_editMenuNm_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13 && this.dsList.rowcount > 0)
        	{
        		this.gfnOpenMenu(this.dsList.getColumn(this.dsList.rowposition, 'menuId'));
        	}

        	var menuValue = this.divQuick.form.divSearch01.form.editMenuNm.value ;

        	if(menuValue == null || menuValue == '' || menuValue == 'undefind'){
        		this.divQuick.form.grdList.set_visible(false);
        	}else{
        		this.divQuick.form.grdList.set_visible(true);
        	}
        };

        this.onlbuttondown_menu = function(obj,e)
        {
        	var menuValue = this.divQuick.form.divSearch01.form.editMenuNm.value ;

        	if(menuValue == null || menuValue == '' || menuValue == 'undefind'){
        		this.divQuick.form.grdList.set_visible(false);
        	}else{
        		this.divQuick.form.grdList.set_visible(true);
        	}
        };


        this.divQuick_divSearch02_upInstId_onitemchanged = function(obj,e)
        {
        	this.dsWplarList.clearData();
        	this.dsNxtrmNoList.clearData();
        	this.dsCmblcList.clearData();
        	this.dsSbltList.clearData();
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "upInstId", obj.value);
        	this.dsSearch.setColumn(0,'dsName',"NTFRT_MNOFF")
        	this.fnWplbkSearch();
        };

        this.divQuick_divSearch02_instId_onitemchanged = function(obj,e)
        {
        	this.dsNxtrmNoList.clearData();
        	this.dsCmblcList.clearData();
        	this.dsSbltList.clearData()
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "instId", obj.value);
        	this.dsSearch.setColumn(0,'dsName',"WPLAR")
        	this.fnWplbkSearch();
        };

        this.divQuick_divSearch02_wplarId_onitemchanged = function(obj,e)
        {
        	this.dsCmblcList.clearData();
        	this.dsSbltList.clearData();
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "wplarId", obj.value);
        	this.dsSearch.setColumn(0,'dsName',"NXTRM")
        	this.fnWplbkSearch();
        };

        this.divQuick_divSearch02_nxtrmNo_onitemchanged = function(obj,e)
        {
        	this.dsSbltList.clearData();
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "nxtrmNo", obj.value);
        	this.dsSearch.setColumn(0, "wplarId", this.divQuick.form.divSearch02.form.wplarId.value);
        	this.dsSearch.setColumn(0,'dsName',"CMBLC")
        	this.fnWplbkSearch();
        };

        this.divQuick_divSearch02_cmblcId_onitemchanged = function(obj,e)
        {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "nxtrmNo", this.divQuick.form.divSearch02.form.nxtrmNo.value);
        	this.dsSearch.setColumn(0, "wplarId", this.divQuick.form.divSearch02.form.wplarId.value);
        	this.dsSearch.setColumn(0, "cmblcId", obj.value);
        	this.dsSearch.setColumn(0,'dsName',"SBLT")
        	this.fnWplbkSearch();
        };

        //경영계획부 검색 바로가기
        this.divQuick_divSearch02_btnSearch02_onclick = function(obj,e)
        {
        	var upInstId = this.divQuick.form.divSearch02.form.upInstId.value;
        	var instId = this.divQuick.form.divSearch02.form.instId.value;
        	var wplarId = this.divQuick.form.divSearch02.form.wplarId.value;
        	var nxtrmNo = this.divQuick.form.divSearch02.form.nxtrmNo.value;
        	var cmblcId = this.divQuick.form.divSearch02.form.cmblcId.value;
        	var sbltId = this.divQuick.form.divSearch02.form.sbltId.text;

        	if(this.divQuick.form.divSearch02.form.RadioSelect.value == "1"){ //입력받을때
        		cmblcId = this.divQuick.form.divSearch02.form.mskEdtCmblcId.text;
        		sbltId = this.divQuick.form.divSearch02.form.mskEdtSbltId.text;

        		var regex = /^\d{3}-\d{3}$/;
        		if(!this.gfnIsEmpty(this.divQuick.form.divSearch02.form.mskEdtCmblcId.value)) {
        			if(!regex.test(cmblcId)){
        				this.gfnAlert("msg.general", ["임반 번호 규칙에 맞지 않습니다."]);
        				return false;
        			}
        		} else {
        			cmblcId = '';
        		}

        		if(!this.gfnIsEmpty(this.divQuick.form.divSearch02.form.mskEdtSbltId.value)) {
        			if(!regex.test(sbltId)){
        				this.gfnAlert("msg.general", ["소반 번호 규칙에 맞지 않습니다."]);
        				return false;
        			}
        		} else {
        			sbltId = '';
        		}
        	}

        	if(upInstId == undefined || upInstId == "KFS"){
        		upInstId = nexacro.Application.gdsUserInfo.getColumn(0, "instId");
        	}
        		if(instId == undefined){
        		instId = "";
        	}
        		if(wplarId == undefined){
        		wplarId = "";
        	}
        		if(nxtrmNo == undefined){
        		nxtrmNo = "";
        	}
        		if(cmblcId == undefined){
        		cmblcId = "";
        	}
        		if(sbltId == undefined){
        		sbltId = "";
        	}

        	let oArg = {searchParams : {
        				upInstId:upInstId
        				, instId:instId
        				, wplarId:wplarId
        				, nxtrmNo:nxtrmNo
        				, cmblcId:cmblcId
        				, sbltId:sbltId
        				}
        			};

        	this.gfnOpenMenu('NFM_01_01_01_0', oArg);
        	//NFM_02_05_01_0
        	//this.gfnOpenMenu('NFM_02_05_01_0', oArg); //경영계획부 조회
        	//this.gfnSetUrl('business::mngme/stats/wplbkMngmeStatus.xfdl', oArg);
        	//this.gfnSetUrl('business::mngme/stats/eBookList.xfdl', oArg);
        };


        //경영계획부 지번 검색 바로가기
        this.divQuick_divSearch03_btnSearch03_onclick = function(obj,e)
        {
        	var ctprvCd = this.divQuick.form.divSearch03.form.ctprvCd.value;
        	var sgngCd = this.divQuick.form.divSearch03.form.sgngCd.value;
        	var emndnCd = this.divQuick.form.divSearch03.form.emndnCd.value;
        	var liCd = this.divQuick.form.divSearch03.form.liCd.value;

        	//주소
        	var dtadd = this.divQuick.form.divSearch03.form.textDtadd.text;
        	//산 체크박스
        	var sanYn = this.divQuick.form.divSearch03.form.sanYn.value;
        	//지번 1
        	var jibun1 = this.divQuick.form.divSearch03.form.jibun1.text;
        	//지번2
        	var jibun2 = this.divQuick.form.divSearch03.form.jibun2.text;

        	var oArg = {};
        	if(this.divQuick.form.divSearch03.form.rdoAddrType.value == '1') {
        		oArg['searchParams'] = {
        			juso:dtadd
        			, rdoAddrType:this.divQuick.form.divSearch03.form.rdoAddrType.value
        		}
        	} else {
        		oArg['searchParams'] = {
        			sido:ctprvCd
        			, sigungu:sgngCd
        			, emd:emndnCd
        			, ri:liCd
        			, san:sanYn
        			, bonbun:jibun1
        			, bubun:jibun2
        			, rdoAddrType:this.divQuick.form.divSearch03.form.rdoAddrType.value
        		}
        	}

        	this.gfnOpenMenu('NFM_01_01_01_0', oArg);
        };

        this.divQuick_divSearch03_ctprvCd_onitemchanged = function(obj,e)
        {
        	this.dsSgngList.clearData();
        	this.dsEmndnList.clearData();
        	this.dsLiList.clearData();

        	this.dsAdressSearch.clearData();
        	this.dsAdressSearch.addRow();
        	this.dsAdressSearch.setColumn(0, "sid_cd", obj.value);
        	this.dsAdressSearch.setColumn(0,'dsName',"SIGUNGU");
        	this.fnAdressSearch();

        };

        this.divQuick_divSearch03_sgngCd_onitemchanged = function(obj,e)
        {
        	this.dsEmndnList.clearData();
        	this.dsLiList.clearData();

        	this.dsAdressSearch.clearData();
        	this.dsAdressSearch.addRow();
        	this.dsAdressSearch.setColumn(0, "sig_cd", obj.value);
        	this.dsAdressSearch.setColumn(0,'dsName',"EMD");
        	this.fnAdressSearch();
        };

        this.divQuick_divSearch03_emndnCd_onitemchanged = function(obj,e)
        {
        	this.dsLiList.clearData();

        	this.dsAdressSearch.clearData();
        	this.dsAdressSearch.addRow();
        	this.dsAdressSearch.setColumn(0, "emd_cd", obj.value);
        	this.dsAdressSearch.setColumn(0,'dsName',"RI") ;
        	this.fnAdressSearch();
        };

        this.divQuick_divSearch02_RadioSelect_onitemchanged = function(obj,e)
        {
        	if(this.divQuick.form.divSearch02.form.RadioSelect.value == '1' ) { //선택일때
        		this.divQuick.form.divSearch02.form.cmblcId.set_visible(false); //임반 select박스 해제
        		this.divQuick.form.divSearch02.form.mskEdtCmblcId.set_visible(true);

        		this.divQuick.form.divSearch02.form.sbltId.set_visible(false); //소반 select박스 해제
        		this.divQuick.form.divSearch02.form.mskEdtSbltId.set_visible(true);

        	}else if(this.divQuick.form.divSearch02.form.RadioSelect.value == '0' ){
        		this.divQuick.form.divSearch02.form.cmblcId.set_visible(true); //임반 select박스 해제
        		this.divQuick.form.divSearch02.form.mskEdtCmblcId.set_visible(false);

        		this.divQuick.form.divSearch02.form.sbltId.set_visible(true); //소반 select박스 해제
        		this.divQuick.form.divSearch02.form.mskEdtSbltId.set_visible(false);
        	}
        };

        this.divQuick_divSearch03_rdoAddrType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == '1') {
        		this.divQuick.form.divSearch03.form.textDtadd.set_enable(true);
        		this.divQuick.form.divSearch03.form.ctprvCd.set_enable(false);
        		this.divQuick.form.divSearch03.form.sgngCd.set_enable(false);
        		this.divQuick.form.divSearch03.form.emndnCd.set_enable(false);
        		this.divQuick.form.divSearch03.form.liCd.set_enable(false);
        		this.divQuick.form.divSearch03.form.sanYn.set_enable(false);
        		this.divQuick.form.divSearch03.form.jibun1.set_enable(false);
        		this.divQuick.form.divSearch03.form.jibun2.set_enable(false);
        	} else {
        		this.divQuick.form.divSearch03.form.textDtadd.set_enable(false);
        		this.divQuick.form.divSearch03.form.ctprvCd.set_enable(true);
        		this.divQuick.form.divSearch03.form.sgngCd.set_enable(true);
        		this.divQuick.form.divSearch03.form.emndnCd.set_enable(true);
        		this.divQuick.form.divSearch03.form.liCd.set_enable(true);
        		this.divQuick.form.divSearch03.form.sanYn.set_enable(true);
        		this.divQuick.form.divSearch03.form.jibun1.set_enable(true);
        		this.divQuick.form.divSearch03.form.jibun2.set_enable(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.divQuick.addEventHandler("onvscroll",this.divQuick_onvscroll,this);
            this.divQuick.form.divSearch01.form.editMenuNm.addEventHandler("onkeyup",this.divQuick_divSearch_editMenuNm_onkeyup,this);
            this.divQuick.form.divSearch01.form.editMenuNm.addEventHandler("onkeydown",this.divQuick_divSearch_editMenuNm_onkeydown,this);
            this.divQuick.form.divSearch01.form.editMenuNm.addEventHandler("onchanged",this.Div00_divSearch_editMenuNm_onchanged,this);
            this.divQuick.form.divSearch01.form.editMenuNm.addEventHandler("onkillfocus",this.divQuick_grdList_onkillfocus,this);
            this.divQuick.form.divSearch02.form.btnSearch02.addEventHandler("onclick",this.divQuick_divSearch02_btnSearch02_onclick,this);
            this.divQuick.form.divSearch02.form.upInstId.addEventHandler("onitemchanged",this.divQuick_divSearch02_upInstId_onitemchanged,this);
            this.divQuick.form.divSearch02.form.instId.addEventHandler("onitemchanged",this.divQuick_divSearch02_instId_onitemchanged,this);
            this.divQuick.form.divSearch02.form.wplarId.addEventHandler("onitemchanged",this.divQuick_divSearch02_wplarId_onitemchanged,this);
            this.divQuick.form.divSearch02.form.nxtrmNo.addEventHandler("onitemchanged",this.divQuick_divSearch02_nxtrmNo_onitemchanged,this);
            this.divQuick.form.divSearch02.form.cmblcId.addEventHandler("onitemchanged",this.divQuick_divSearch02_cmblcId_onitemchanged,this);
            this.divQuick.form.divSearch02.form.RadioSelect.addEventHandler("onitemchanged",this.divQuick_divSearch02_RadioSelect_onitemchanged,this);
            this.divQuick.form.divSearch02.form.mskEdtCmblcId.addEventHandler("onchanged",this.Div00_Div00_00_mskEdtCmblcId_onchanged,this);
            this.divQuick.form.divSearch02.form.mskEdtSbltId.addEventHandler("onchanged",this.Div00_Div00_00_mskEdtSbltId_onchanged,this);
            this.divQuick.form.divSearch03.form.btnSearch03.addEventHandler("onclick",this.divQuick_divSearch03_btnSearch03_onclick,this);
            this.divQuick.form.divSearch03.form.ctprvCd.addEventHandler("onitemchanged",this.divQuick_divSearch03_ctprvCd_onitemchanged,this);
            this.divQuick.form.divSearch03.form.sgngCd.addEventHandler("onitemchanged",this.divQuick_divSearch03_sgngCd_onitemchanged,this);
            this.divQuick.form.divSearch03.form.emndnCd.addEventHandler("onitemchanged",this.divQuick_divSearch03_emndnCd_onitemchanged,this);
            this.divQuick.form.divSearch03.form.rdoAddrType.addEventHandler("onitemchanged",this.divQuick_divSearch03_rdoAddrType_onitemchanged,this);
            this.divQuick.form.img00.addEventHandler("onclick",this.Div00_img00_onclick,this);
            this.divQuick.form.img00_00.addEventHandler("onclick",this.Div00_img00_onclick,this);
            this.divQuick.form.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.divQuick.form.grdList.addEventHandler("onkillfocus",this.divQuick_grdList_onkillfocus,this);
            this.divQuick.form.img00_00_00.addEventHandler("onclick",this.Div00_img00_onclick,this);
        };
        this.loadIncludeScript("frmRight.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
