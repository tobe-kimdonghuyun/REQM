(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp03");
            this.set_titletext("List-Detail");
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
            obj = new Static("sta00","0","50","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","0","93",null,null,"20","143",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"160\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"에디트\"/><Cell col=\"3\" text=\"필수\" cssclass=\"essential\"/><Cell col=\"4\" text=\"숫자\"/><Cell col=\"5\" text=\"익스팬드\"/><Cell col=\"6\" text=\"콤보박스\"/><Cell col=\"7\" text=\"캘린더\"/><Cell col=\"8\" text=\"중앙정렬\"/><Cell col=\"9\" text=\"버튼\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:No\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:Edi\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:Essential\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:Num\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:Expand\" displaytype=\"editcontrol\" expandshow=\"show\" expandsize=\"30\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:Cmb\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"7\" text=\"bind:Cal\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" text=\"bind:CenterAlign\" displaytype=\"text\"/><Cell col=\"9\" text=\"bind:Btn\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0",null,"342","43",null,"100",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("서브타이틀 상세");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div01","0",null,null,"100","20","0",null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","0","33",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta05","0","33","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_text("디세이블검색");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta07","0","66",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta08","0","66","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta09","257","0","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_text("필수에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta10","514","0","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("7");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta11","771","0","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("8");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta12","514","33","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("9");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta13","771","33","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("10");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta14","257","33","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta15","771","66","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("12");
            obj.set_text("스핀박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta17","514","66","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("13");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cbo00","112","5","141","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("14");
            obj.set_text("Combo00");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00","112","38","141","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_cssclass("edi_WF_Search");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt01","369","38","141","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("edi_WF_Search");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02","369","5","141","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("17");
            obj.set_cssclass("essential");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cbo01","112","71","60","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("18");
            obj.set_text("Combo00");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt03","184","71","60","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("19");
            obj.set_value("1234");
            obj.set_text("1234");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt04","256","71","60","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("20");
            obj.set_value("5678");
            obj.set_text("5678");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00","172","71","12","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("21");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta01","244","71","12","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("22");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btn02","224","38","28","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_enable("false");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btn00","482","38","28","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_EdiSch");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt05","626","5","141","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("25");
            this.div01.addChild(obj.name, obj);

            obj = new Radio("rdo00","626","38","141","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div01_form_rdo00_innerdataset = new nexacro.NormalDataset("div01_form_rdo00_innerdataset", obj);
            div01_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">체크</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">체크</Col></Row></Rows>");
            obj.set_innerdataset(div01_form_rdo00_innerdataset);
            obj.set_text("체크");
            obj.set_value("0");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new CheckBox("chk00","626","71","150","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("27");
            obj.set_text("사용");
            obj.set_value("true");
            this.div01.addChild(obj.name, obj);

            obj = new Calendar("cal00","883","5","142","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("28");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btn01","985","38","40","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("29");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Detail");
            this.div01.addChild(obj.name, obj);

            obj = new Spin("spn00","883","71","142","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("30");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","883","38","99","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("31");
            this.div01.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("필수캘린더");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo01","56","-158","185","28",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Combo("cbo02","282","-158","185","28",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Combo("cbo03","521","-158","184","28",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Calendar("cal00","785","-158","184","28",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Button("btn02","579","10","28","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_EdiSch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"60","572","28","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","119","28","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("2");
            obj.set_text("엑셀다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelUp",null,"0","107","28","btnExcelDown:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("3");
            obj.set_text("엑셀업로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"0","72","28","btnExcelUp:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("false");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","72","28","btnDel:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            obj.set_visible("false");
            this.divCmmnBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div01.form
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

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
        this.registerScript("Temp03.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	Temp03.xfdl
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
            this.div01.form.btn02.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.div01.form.btn00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.divSearch.form.btn02.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.divCmmnBtn.form.btnExcelDown.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.divCmmnBtn.form.btnExcelUp.addEventHandler("onclick",this.divCmmnBtn_btnExcelUp_onclick,this);
            this.divCmmnBtn.form.btnDel.addEventHandler("onclick",this.divCmmnBtn_btnDel_onclick,this);
            this.divCmmnBtn.form.btnAdd.addEventHandler("onclick",this.divCmmnBtn_btnAdd_onclick,this);
        };
        this.loadIncludeScript("Temp03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
