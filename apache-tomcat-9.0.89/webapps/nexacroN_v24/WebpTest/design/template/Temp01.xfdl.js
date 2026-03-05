(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp01");
            this.set_titletext("Single-Detail");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"Edi\" type=\"STRING\" size=\"256\"/><Column id=\"Essential\" type=\"STRING\" size=\"256\"/><Column id=\"Num\" type=\"STRING\" size=\"256\"/><Column id=\"Expand\" type=\"STRING\" size=\"256\"/><Column id=\"Cmb\" type=\"STRING\" size=\"256\"/><Column id=\"Cal\" type=\"STRING\" size=\"256\"/><Column id=\"CenterAlign\" type=\"STRING\" size=\"256\"/><Column id=\"Btn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">01</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">02</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">03</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">04</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">05</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">06</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">07</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">08</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">09</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">10</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">11</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">12</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">13</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">14</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">15</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("필수캘린더");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo01","56","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_cbo01_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo01_innerdataset", obj);
            divSearch_form_cbo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02","282","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_cbo02_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo02_innerdataset", obj);
            divSearch_form_cbo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo02_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo03","521","-158","184","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_cbo03_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo03_innerdataset", obj);
            divSearch_form_cbo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo03_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("cal00","785","-158","184","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","238","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt00","324","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"9","30","30","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("cal01","98","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt04","467","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("edi_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn02","579","12","28","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_EdiSch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","0","50","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("div01_00","0","93",null,null,"20","0","1030",null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00","0","396",null,null,"0","0","1030",null,null,null,this.div01_00.form);
            obj.set_taborder("22");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta06","0","33",null,"34","0",null,"1030",null,null,null,this.div01_00.form);
            obj.set_taborder("0");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"34","0",null,"1030",null,null,null,this.div01_00.form);
            obj.set_taborder("1");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("2");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta05","0","33","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("3");
            obj.set_text("디세이블검색");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta07","0","66",null,"34","0",null,"1030",null,null,null,this.div01_00.form);
            obj.set_taborder("4");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta08","0","66","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("5");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta10","514","0","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("6");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta12","514","33","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("7");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta17","514","66","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("8");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo00","112","5","141","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("9");
            obj.set_text("Combo00");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt00","112","38","141","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_cssclass("edi_WF_Search");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo01","112","71","60","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("11");
            obj.set_text("Combo00");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt03","184","71","60","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("12");
            obj.set_value("1234");
            obj.set_text("1234");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt04","256","71","60","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("13");
            obj.set_value("5678");
            obj.set_text("5678");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta00","172","71","12","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("14");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta01","244","71","12","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("15");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01_00.addChild(obj.name, obj);

            obj = new Button("btn02","224","38","28","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_enable("false");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt05","626","5","141","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("17");
            this.div01_00.addChild(obj.name, obj);

            obj = new Radio("rdo00","626","38","141","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div01_00_form_rdo00_innerdataset = new nexacro.NormalDataset("div01_00_form_rdo00_innerdataset", obj);
            div01_00_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">체크</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">체크</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_form_rdo00_innerdataset);
            obj.set_text("체크");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00.addChild(obj.name, obj);

            obj = new CheckBox("chk00","626","71","150","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("19");
            obj.set_text("사용");
            obj.set_value("true");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","396","108",null,null,"0",null,null,null,null,this.div01_00.form);
            obj.set_taborder("20");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new TextArea("txa00","112","401",null,null,"5","5",null,null,null,null,this.div01_00.form);
            obj.set_taborder("21");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta06_00","0","132",null,"34","0",null,"1030",null,null,null,this.div01_00.form);
            obj.set_taborder("23");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta03_00","0","99",null,"34","0",null,"1030",null,null,null,this.div01_00.form);
            obj.set_taborder("24");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta02_00","0","99","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("25");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta05_00","0","132","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("26");
            obj.set_text("디세이블검색");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta07_01","0","165",null,"34","0",null,"1030",null,null,null,this.div01_00.form);
            obj.set_taborder("27");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta08_01","0","165","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("28");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta09_00","257","99","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("29");
            obj.set_text("필수에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta10_00","514","99","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("30");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta11_00","771","99","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("31");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta12_00","514","132","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("32");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta13_00","771","132","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("33");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta14_00","257","132","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("34");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta15_00","771","165","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("35");
            obj.set_text("스핀박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta17_00","514","165","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("36");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo00_00","112","104","141","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("37");
            obj.set_text("Combo00");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt00_00","112","137","141","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("38");
            obj.set_enable("false");
            obj.set_cssclass("edi_WF_Search");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt01_00","369","137","141","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("39");
            obj.set_cssclass("edi_WF_Search");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00","369","104","141","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("40");
            obj.set_cssclass("essential");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo01_00","112","170","60","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("41");
            obj.set_text("Combo00");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt03_00","184","170","60","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("42");
            obj.set_value("1234");
            obj.set_text("1234");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt04_00","256","170","60","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("43");
            obj.set_value("5678");
            obj.set_text("5678");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta00_00","172","170","12","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("44");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta01_00","244","170","12","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("45");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01_00.addChild(obj.name, obj);

            obj = new Button("btn02_00","224","137","28","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("46");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_enable("false");
            this.div01_00.addChild(obj.name, obj);

            obj = new Button("btn00_00","482","137","28","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("47");
            obj.set_cssclass("btn_WF_EdiSch");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt05_00","626","104","141","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("48");
            this.div01_00.addChild(obj.name, obj);

            obj = new Radio("rdo00_00","626","137","141","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("49");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div01_00_form_rdo00_00_innerdataset = new nexacro.NormalDataset("div01_00_form_rdo00_00_innerdataset", obj);
            div01_00_form_rdo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">체크</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">체크</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_form_rdo00_00_innerdataset);
            obj.set_text("체크");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00.addChild(obj.name, obj);

            obj = new CheckBox("chk00_00","626","170","150","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("50");
            obj.set_text("사용");
            obj.set_value("true");
            this.div01_00.addChild(obj.name, obj);

            obj = new Calendar("cal00_00","883","104","142","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("51");
            obj.set_dateformat("yyyy-MM-dd ");
            this.div01_00.addChild(obj.name, obj);

            obj = new Button("btn01_00","985","137","40","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("52");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Detail");
            this.div01_00.addChild(obj.name, obj);

            obj = new Spin("spn00_00","883","170","142","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("53");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta06_01","0","231",null,"34","0",null,"1030",null,null,null,this.div01_00.form);
            obj.set_taborder("54");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta03_01","0","198",null,"34","0",null,"1030",null,null,null,this.div01_00.form);
            obj.set_taborder("55");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta02_01","0","198","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("56");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta05_01","0","231","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("57");
            obj.set_text("디세이블검색");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta07_02","0","264",null,"34","0",null,"1030",null,null,null,this.div01_00.form);
            obj.set_taborder("58");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta08_02","0","264","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("59");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta10_01","514","198","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("60");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta12_01","514","231","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("61");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta17_01","514","264","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("62");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo00_01","112","203","141","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("63");
            obj.set_text("Combo00");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt00_01","112","236","141","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("64");
            obj.set_enable("false");
            obj.set_cssclass("edi_WF_Search");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo01_01","112","269","60","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("65");
            obj.set_text("Combo00");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt03_01","184","269","60","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("66");
            obj.set_value("1234");
            obj.set_text("1234");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt04_01","256","269","60","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("67");
            obj.set_value("5678");
            obj.set_text("5678");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta00_01","172","269","12","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("68");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta01_01","244","269","12","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("69");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01_00.addChild(obj.name, obj);

            obj = new Button("btn02_01","224","236","28","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("70");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_enable("false");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt05_01","626","203","141","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("71");
            this.div01_00.addChild(obj.name, obj);

            obj = new Radio("rdo00_01","626","236","141","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("72");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div01_00_form_rdo00_01_innerdataset = new nexacro.NormalDataset("div01_00_form_rdo00_01_innerdataset", obj);
            div01_00_form_rdo00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">체크</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">체크</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_form_rdo00_01_innerdataset);
            obj.set_text("체크");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00.addChild(obj.name, obj);

            obj = new CheckBox("chk00_01","626","269","150","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("73");
            obj.set_text("사용");
            obj.set_value("true");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta06_00_00","0","330",null,"34","0",null,"1030",null,null,null,this.div01_00.form);
            obj.set_taborder("74");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta03_00_00","0","297",null,"34","0",null,"1030",null,null,null,this.div01_00.form);
            obj.set_taborder("75");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta02_00_00","0","297","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("76");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta05_00_00","0","330","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("77");
            obj.set_text("디세이블검색");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta07_01_00","0","363",null,"34","0",null,"1030",null,null,null,this.div01_00.form);
            obj.set_taborder("78");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta08_01_00","0","363","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("79");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta09_00_00","257","297","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("80");
            obj.set_text("필수에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta10_00_00","514","297","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("81");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta11_00_00","771","297","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("82");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta12_00_00","514","330","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("83");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta13_00_00","771","330","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("84");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta14_00_00","257","330","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("85");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta15_00_00","771","363","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("86");
            obj.set_text("스핀박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta17_00_00","514","363","108","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("87");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo00_00_00","112","302","141","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("88");
            obj.set_text("Combo00");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","112","335","141","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("89");
            obj.set_enable("false");
            obj.set_cssclass("edi_WF_Search");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt01_00_00","369","335","141","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("90");
            obj.set_cssclass("edi_WF_Search");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt02_00_00","369","302","141","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("91");
            obj.set_cssclass("essential");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo01_00_00","112","368","60","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("92");
            obj.set_text("Combo00");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt03_00_00","184","368","60","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("93");
            obj.set_value("1234");
            obj.set_text("1234");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt04_00_00","256","368","60","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("94");
            obj.set_value("5678");
            obj.set_text("5678");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","172","368","12","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("95");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","244","368","12","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("96");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01_00.addChild(obj.name, obj);

            obj = new Button("btn02_00_00","224","335","28","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("97");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_enable("false");
            this.div01_00.addChild(obj.name, obj);

            obj = new Button("btn00_00_00","482","335","28","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("98");
            obj.set_cssclass("btn_WF_EdiSch");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt05_00_00","626","302","141","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("99");
            this.div01_00.addChild(obj.name, obj);

            obj = new Radio("rdo00_00_00","626","335","141","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("100");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div01_00_form_rdo00_00_00_innerdataset = new nexacro.NormalDataset("div01_00_form_rdo00_00_00_innerdataset", obj);
            div01_00_form_rdo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">체크</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">체크</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_form_rdo00_00_00_innerdataset);
            obj.set_text("체크");
            obj.set_value("0");
            obj.set_index("0");
            this.div01_00.addChild(obj.name, obj);

            obj = new CheckBox("chk00_00_00","626","368","150","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("101");
            obj.set_text("사용");
            obj.set_value("true");
            this.div01_00.addChild(obj.name, obj);

            obj = new Calendar("cal00_00_00","883","302","142","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("102");
            obj.set_dateformat("yyyy-MM-dd ");
            this.div01_00.addChild(obj.name, obj);

            obj = new Button("btn01_00_00","985","335","40","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("103");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Detail");
            this.div01_00.addChild(obj.name, obj);

            obj = new Spin("spn00_00_00","883","368","142","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("104");
            this.div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","883","137","99","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("105");
            this.div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("msk00_00","883","335","99","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("106");
            this.div01_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01_00.form
            obj = new Layout("default","",0,0,this.div01_00.form,function(p){});
            this.div01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Temp01.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	Temp01.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
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

        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
        };

        //저장
        this.cfnSave = function ()
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btn02.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.div01_00.form.btn02.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.div01_00.form.btn02_00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.div01_00.form.btn00_00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.div01_00.form.btn02_01.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.div01_00.form.btn02_00_00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.div01_00.form.btn00_00_00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
        };
        this.loadIncludeScript("Temp01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
