(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp02");
            this.set_titletext("Detail");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div01","0","0",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","0",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","108","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static09","257","0","108","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("필수에디트");
            obj.set_cssclass("sta_WF_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static10","514","0","108","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static11","771","0","108","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","112","5","141","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("Combo00");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit02","369","5","141","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("essential");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit05","626","5","141","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","883","5","142","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd ");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div01_00","0","220",null,"99","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","33",null,"34","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static03","0","0",null,"34","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","108","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static05","0","33","108","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("3");
            obj.set_text("디세이블검색");
            obj.set_cssclass("sta_WF_Label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static07","0","65",null,"34","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("4");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static08","0","65","108","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("5");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static09","257","0","108","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("6");
            obj.set_text("필수에디트");
            obj.set_cssclass("sta_WF_Label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static10","514","0","108","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("7");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static11","771","0","108","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("8");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static12","514","33","108","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("9");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static13","771","33","108","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("10");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static14","257","33","108","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("11");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static15","771","65","108","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("12");
            obj.set_text("스핀박스");
            obj.set_cssclass("sta_WF_Label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static17","514","65","108","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("13");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","112","5","141","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("14");
            obj.set_text("Combo00");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","112","38","141","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_cssclass("edi_WF_Search");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit01","369","38","141","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("edi_WF_Search");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit02","369","5","141","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("17");
            obj.set_cssclass("essential");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Combo("Combo01","112","70","60","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("18");
            obj.set_text("Combo00");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit03","184","70","60","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("19");
            obj.set_value("1234");
            obj.set_text("1234");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit04","256","70","60","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("20");
            obj.set_value("5678");
            obj.set_text("5678");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static00","172","70","12","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("21");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01","244","70","12","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("22");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button02","224","38","28","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_enable("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00","482","38","28","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_EdiSch");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit05","626","5","141","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("25");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Radio("Radio00","626","38","141","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Div01_00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div01_00_form_Radio00_innerdataset", obj);
            Div01_00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">체크</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">체크</Col></Row></Rows>");
            obj.set_innerdataset(Div01_00_form_Radio00_innerdataset);
            obj.set_text("체크");
            obj.set_value("0");
            obj.set_index("0");
            this.Div01_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","626","70","150","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("27");
            obj.set_text("사용");
            obj.set_value("true");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","883","5","142","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd ");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit06","883","38","99","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("29");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button01","985","39","40","26",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("30");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Detail");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Spin("Spin00","883","70","142","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("31");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div00","0","90","98.10%","67",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","33",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","0","0",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","108","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","0","33","108","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("디세이블검색");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static09","257","0","108","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("필수에디트");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","514","0","108","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static11","771","0","108","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static12","514","33","108","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static13","771","33","108","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static14","257","33","108","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","112","5","141","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","112","38","141","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.set_cssclass("edi_WF_Search");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","369","38","141","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("edi_WF_Search");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","369","5","141","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("essential");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","224","38","28","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","482","38","28","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_EdiSch");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit05","626","5","141","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","626","38","141","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Div00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div00_form_Radio00_innerdataset", obj);
            Div00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">체크</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">체크</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Radio00_innerdataset);
            obj.set_text("체크");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","883","5","142","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd ");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit06","883","38","99","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","985","39","40","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Detail");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div02","0","388",null,"133","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","33",null,"34","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03","0","0",null,"34","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","108","34",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05","0","33","108","34",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("디세이블검색");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static07","0","66",null,"34","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static08","0","66","108","34",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static09","257","0","108","34",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("필수에디트");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static10","514","0","108","34",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static11","771","0","108","34",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static12","514","33","108","34",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static13","771","33","108","34",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static14","257","33","108","34",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("11");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static15","771","66","108","34",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("12");
            obj.set_text("스핀박스");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static17","514","66","108","34",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("13");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo00","112","5","141","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("14");
            obj.set_text("Combo00");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit00","112","38","141","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_cssclass("edi_WF_Search");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit01","369","38","141","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("16");
            obj.set_cssclass("edi_WF_Search");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit02","369","5","141","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("17");
            obj.set_cssclass("essential");
            this.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo01","112","71","60","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("18");
            obj.set_text("Combo00");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit03","184","71","60","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("19");
            obj.set_value("1234");
            obj.set_text("1234");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit04","256","71","60","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("20");
            obj.set_value("5678");
            obj.set_text("5678");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","172","71","12","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("21");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","244","71","12","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("22");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button02","224","38","28","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_enable("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00","482","38","28","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_EdiSch");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit05","626","5","141","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("25");
            this.Div02.addChild(obj.name, obj);

            obj = new Radio("Radio00","626","38","141","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Div02_form_Radio00_innerdataset = new nexacro.NormalDataset("Div02_form_Radio00_innerdataset", obj);
            Div02_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">체크</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">체크</Col></Row></Rows>");
            obj.set_innerdataset(Div02_form_Radio00_innerdataset);
            obj.set_text("체크");
            obj.set_value("0");
            obj.set_index("0");
            this.Div02.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","626","71","150","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("27");
            obj.set_text("사용");
            obj.set_value("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","883","5","142","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd ");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit06","883","38","99","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("29");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01","985","39","40","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("30");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Detail");
            this.Div02.addChild(obj.name, obj);

            obj = new Spin("Spin00","883","71","142","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("31");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","99",null,"34","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("32");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static08_00","0","99","108","34",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("33");
            obj.set_text("건의사항");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","112","104","913","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj.set_taborder("34");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static04_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_00.form
            obj = new Layout("default","",0,0,this.Div01_00.form,function(p){});
            this.Div01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div01_00.form.Button02.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Div01_00.form.Button00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Div00.form.Button02.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Div02.form.Button02.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Div02.form.Button00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
        };
        this.loadIncludeScript("Detail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
