(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF050M00");
            this.set_titletext("입주서비스신청설정및현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"rno\" type=\"INT\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"hndvAcptnAplcfmSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"elctyAplcfmSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"wtspAplcfmSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"cmnctAplcfmSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"hndvAcptnAplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"elctyAplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"wtspAplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmnctAplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"chk1\" type=\"STRING\" size=\"256\"/><Column id=\"chk2\" type=\"STRING\" size=\"256\"/><Column id=\"chk3\" type=\"STRING\" size=\"256\"/><Column id=\"chk4\" type=\"STRING\" size=\"256\"/><Column id=\"aplcfmSbmsn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/><Column id=\"searchText\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmPathNm\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">10</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplyKndList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplyKnd", this);
            obj._setContents("<ColumnInfo><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplcfmSttsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"com_cd\" type=\"STRING\" size=\"256\"/><Column id=\"com_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"com_cd\">01</Col><Col id=\"com_nm\">신청서작성전</Col></Row><Row><Col id=\"com_cd\">02</Col><Col id=\"com_nm\">신청서작성중</Col></Row><Row><Col id=\"com_cd\">03</Col><Col id=\"com_nm\">신청서제출</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBldgSe", this);
            obj._setContents("<ColumnInfo><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBldgSeList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdLbl\" type=\"STRING\" size=\"256\"/><Column id=\"cdLblAbbr\" type=\"STRING\" size=\"256\"/><Column id=\"uprCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"hgrkCd\" type=\"STRING\" size=\"256\"/><Column id=\"cdLvl\" type=\"STRING\" size=\"256\"/><Column id=\"cdMntnId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTag\" type=\"STRING\" size=\"256\"/><Column id=\"picIdntyYn\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl01\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl02\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl03\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl04\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl05\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl06\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl07\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl08\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl09\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl10\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl11\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl12\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl13\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl14\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"48","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:10",null,"700","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
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

            obj = new Panel("Panel00","552","145","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnBscInfoReg\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","90",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"pan01\"/><PanelItem id=\"PanelItem04\" componentid=\"pan02\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_text("계약명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","1694.00","398","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCtrtNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel01","536","200","100%","140",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panLabel\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtCtrtNm","110","0","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_value("가나다라 인천국제공항 사무실 임대계약");
            obj.set_readonly("true");
            obj.set_text("가나다라 인천국제공항 사무실 임대계약");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","86","0","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_value("가나라다(주)");
            obj.set_readonly("true");
            obj.set_text("가나라다(주)");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","1694.00","398","100%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCoNm\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnBscInfoReg","827","154","106","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("8");
            obj.set_text("기본정보등록");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:54","100.00%","600",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","550","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staTotal00\"/><PanelItem id=\"PanelItem02\" componentid=\"cmbGrdList\"/><PanelItem id=\"PanelItem06\" componentid=\"btnGrdDw\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","PanelGrdBtn:10","100.00%",null,null,"50",null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 내역이 없습니다");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"79\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"위치구분\"/><Cell col=\"2\" text=\"위치정보(룸번호)\"/><Cell col=\"3\" colspan=\"2\" text=\"인계인수신청\" cssclass=\"cellApply_01\"/><Cell col=\"5\" colspan=\"2\" text=\"전기신청\" cssclass=\"cellApply_01\"/><Cell col=\"7\" colspan=\"2\" text=\"수도신청\" cssclass=\"cellApply_01\" displaytype=\"text\"/><Cell col=\"9\" colspan=\"2\" text=\"통신신청\" border=\"1px solid #dadada,1px solid #dddddd,1px solid #dadada,0px solid #dddddd\" displaytype=\"normal\" cssclass=\"cellApply_01\"/><Cell col=\"11\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"expr:rno\"/><Cell col=\"1\" text=\"bind:pstnSeCd\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsBldgSeList\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"2\" text=\"bind:pstnInfoRnb\" textAlign=\"center\"/><Cell col=\"3\" cssclass=\"CellEnd\" edittype=\"checkbox\" text=\"bind:chk1\" displaytype=\"expr:hndvAcptnAplcfmSttsCd == &apos;01&apos; || hndvAcptnAplcfmSttsCd == &apos;02&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;\"/><Cell col=\"4\" text=\"bind:hndvAcptnAplcfmSttsCd\" displaytype=\"combotext\" combodataset=\"dsAplcfmSttsCd\" combodatacol=\"com_nm\" combocodecol=\"com_cd\" background=\"#ffffff\" color=\"#333333\"/><Cell col=\"5\" cssclass=\"CellEnd\" displaytype=\"expr:hndvAcptnAplcfmSttsCd == &apos;01&apos; || hndvAcptnAplcfmSttsCd == &apos;02&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" edittype=\"checkbox\" text=\"bind:chk2\"/><Cell col=\"6\" text=\"bind:elctyAplcfmSttsCd\" combodataset=\"dsAplcfmSttsCd\" combodatacol=\"com_nm\" combocodecol=\"com_cd\" displaytype=\"combotext\"/><Cell col=\"7\" cssclass=\"CellEnd\" displaytype=\"expr:hndvAcptnAplcfmSttsCd == &apos;01&apos; || hndvAcptnAplcfmSttsCd == &apos;02&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" edittype=\"checkbox\" text=\"bind:chk3\"/><Cell col=\"8\" combodataset=\"dsAplcfmSttsCd\" combodatacol=\"com_nm\" combocodecol=\"com_cd\" text=\"bind:wtspAplcfmSttsCd\" displaytype=\"combotext\"/><Cell col=\"9\" cssclass=\"CellEnd\" displaytype=\"expr:hndvAcptnAplcfmSttsCd == &apos;01&apos; || hndvAcptnAplcfmSttsCd == &apos;02&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" edittype=\"checkbox\" text=\"bind:chk4\"/><Cell col=\"10\" combodataset=\"dsAplcfmSttsCd\" combodatacol=\"com_nm\" combocodecol=\"com_cd\" text=\"bind:cmnctAplcfmSttsCd\" displaytype=\"combotext\"/><Cell col=\"11\" displaytype=\"none\" cssclass=\"cellApply_02\" text=\"일괄신청\" edittype=\"checkbox\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divPage","0","Grid00:10",null,"36","0",null,null,null,"36",null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","774.00","10","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","5","27","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","5","43","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("12");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","5","30","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Combo("cmbGrdList","1230","0","80","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divGrd_form_cmbGrdList_innerdataset = new nexacro.NormalDataset("divForm_form_divGrd_form_cmbGrdList_innerdataset", obj);
            divForm_form_divGrd_form_cmbGrdList_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divGrd_form_cmbGrdList_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("1");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal00","1165","0","65","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("Static00","staTotal02:10","10","320","22",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_text("* 신청서작성을 하려면 해당 셀을 체크 하세요.");
            obj.set_cssclass("sta_WF_TxtRed");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("btnSchClose","24.00","55","52","30",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_SchClose");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("btnSchOpen","100.00","55","52","30",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SchOpen");
            this.divGuide.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("7");
                p.Panel00.set_flexmainaxisalign("end");
                p.Panel00.move("552","145","100%","40",null,null);

                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("10");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","90",null,null);

                p.staLabel.set_taborder("1");
                p.staLabel.set_text("계약명");
                p.staLabel.set_cssclass("sta_WF_SchLabel");
                p.staLabel.set_fittocontents("width");
                p.staLabel.set_minwidth("");
                p.staLabel.move("0","0","100","40",null,null);

                p.pan02.set_taborder("3");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_fittocontents("height");
                p.pan02.set_maxheight("");
                p.pan02.set_minwidth("");
                p.pan02.move("1694.00","398","100%","40",null,null);

                p.Panel01.set_taborder("9");
                p.Panel01.set_type("vertical");
                p.Panel01.set_verticalgap("10");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("536","200","100%","140",null,null);

                p.edtCtrtNm.set_taborder("2");
                p.edtCtrtNm.set_enable("true");
                p.edtCtrtNm.set_value("가나다라 인천국제공항 사무실 임대계약");
                p.edtCtrtNm.set_readonly("true");
                p.edtCtrtNm.set_maxwidth("");
                p.edtCtrtNm.move("110","0","100%","40",null,null);

                p.staLabel00.set_taborder("4");
                p.staLabel00.set_text("회사명");
                p.staLabel00.set_cssclass("sta_WF_SchLabel");
                p.staLabel00.set_flexshrink("0");
                p.staLabel00.set_fittocontents("width");
                p.staLabel00.set_minwidth("");
                p.staLabel00.move("0","0","100","40",null,null);

                p.edtCoNm.set_taborder("5");
                p.edtCoNm.set_enable("true");
                p.edtCoNm.set_value("가나라다(주)");
                p.edtCoNm.set_readonly("true");
                p.edtCoNm.set_maxwidth("");
                p.edtCoNm.move("86","0","100%","40",null,null);

                p.pan01.set_taborder("6");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_fittocontents("height");
                p.pan01.set_maxheight("");
                p.pan01.set_minwidth("");
                p.pan01.move("1694.00","398","100%","40",null,null);

                p.btnBscInfoReg.set_taborder("8");
                p.btnBscInfoReg.set_text("기본정보등록");
                p.btnBscInfoReg.set_fittocontents("width");
                p.btnBscInfoReg.move("827","154","106","40",null,null);
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
                p.PanelGrdBtn.set_taborder("3");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","550","34","0",null);

                p.Grid00.set_taborder("8");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_nodatatext("조회된 내역이 없습니다");
                p.Grid00.set_cellsizingtype("col");
                p.Grid00.set_binddataset("dsList");
                p.Grid00.move("0","PanelGrdBtn:10","100.00%",null,null,"50");

                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","Grid00:10",null,"36","0",null);

                p.btnGrdDw.set_taborder("4");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("774.00","10","124","34",null,null);

                p.staTotal.set_taborder("7");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","5","27","34",null,null);

                p.staTotal01.set_taborder("6");
                p.staTotal01.set_text("12");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","5","43","34",null,null);

                p.staTotal02.set_taborder("5");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","5","30","34",null,null);

                p.cmbGrdList.set_taborder("2");
                p.cmbGrdList.set_innerdataset(divForm_form_divGrd_form_cmbGrdList_innerdataset);
                p.cmbGrdList.set_codecolumn("codecolumn");
                p.cmbGrdList.set_datacolumn("datacolumn");
                p.cmbGrdList.set_text("10");
                p.cmbGrdList.set_value("10");
                p.cmbGrdList.set_index("1");
                p.cmbGrdList.move("1230","0","80","34",null,null);

                p.staTotal00.set_taborder("1");
                p.staTotal00.set_text("목록수");
                p.staTotal00.set_cssclass("sta_WF_SchLabel");
                p.staTotal00.set_fittocontents("width");
                p.staTotal00.move("1165","0","65","34",null,null);

                p.Static00.set_taborder("9");
                p.Static00.set_text("* 신청서작성을 하려면 해당 셀을 체크 하세요.");
                p.Static00.set_cssclass("sta_WF_TxtRed");
                p.Static00.set_fittocontents("width");
                p.Static00.move("staTotal02:10","10","320","22",null,null);
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
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:54","100.00%","600",null,null);
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
            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSchClose.set_taborder("0");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("24.00","55","52","30",null,null);

                p.btnSchOpen.set_taborder("1");
                p.btnSchOpen.set_cssclass("btn_WF_SchOpen");
                p.btnSchOpen.move("100.00","55","52","30",null,null);
            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide.form
            obj = new Layout("mobile","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("입주서비스신청설정및현황");

                p.divTitle.set_taborder("1");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"48","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","divTitle:10",null,"700","60",null);

                p.divGuide.set_taborder("2");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.move("20","divTitle:10",null,"834","20",null);

                p.divTitle.move("0","0",null,"48","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divGrd.form.staTotal01","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
            this._addPreloadList("fdl","work::COM/util/paging/paging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("LIF050M00.xfdl","xjs::TaskCom.xjs");
        this.registerScript("LIF050M00.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 통합정보 프로젝트
        *  @FileName 	LIF050M00.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/11/04
        *  @Desction    입주 > 입주서비스신청설정및현황
        *  @Author
        ************** 소스 수정 이력 ****************************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/04			김진섭						최초생성
        *******************************************************************************/
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();
        	this.cfnSearch(1);
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function() {
        	//this.divForm.form.divSch.set_width("100%");
        	//this.divForm.form.divSch.fittocontents = "height";

        	// 공통 코드 조회
        	this.fnAplyKndSrch();	// 신청종류
        	this.fnBldgSrch();		// 건물구분
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function (page)
        {
        	//var recordCountPerPage = this.divForm.form.divGrd.form.cmbGrdList.value;
        	var recordCountPerPage = 10;
        	this.dsSearch.setColumn(0, "currentPageNo", page);
        	this.dsSearch.setColumn(0, "recordCountPerPage", recordCountPerPage);
        	this.getSearchTransaction();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.getSearchTransaction = function()
        {

        	this.dsSearch.setColumn(0, "brno", "2222222222");

        	var strSvcId    = "search";
        	var strSvcUrl   = "mvnSrvcAplyStngCsaf/selectMvnSrvcAplyStngCsafInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList dsPage=dsPage";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
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
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        	    trace("@@ errorCode==>" + errorCode + "svcID==>" + svcID + "errorMsg==>" + errorMsg);
        		return;
        	}

        	switch(svcID)
        	{
        		case "search":
        			//페이징 폼의 ID가 변경 될 경우 맞춰서 변경 해야함
        			this.divForm.form.divGrd.form.divPage.form.initPages(this.dsPage.getColumn(0, "currentPageNo"), this.dsPage.getColumn(0, "totalRecordCount"), this.dsPage.getColumn(0, "recordCountPerPage"), this.dsPage.getColumn(0, "pageSize"), "cfnSearch");
        			//this.alert("조회가 완료되었습니다.");
        			break;

        		case "excel":
        			//다운로드
        			console.log(errorMsg);	// 다운로드 가능한 파일 URL
        			break;
        	}
        };


        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : fnAplyKndSrch
         * @description : 신청종류코드 조회
         ***************************************************************************/
        this.fnAplyKndSrch = function()
        {
        	if(this.dsAplyKnd.getRowCount() > 0){
        		this.dsAplyKnd.clearData();

        	}

        	this.dsAplyKnd.addRow();
        	this.dsAplyKnd.setColumn(0, "useYn", "Y");
        	this.dsAplyKnd.setColumn(0, "cdTypeId", "CARREQTYPE");


        	var strSvcId    = "fnAplyKndSrch";
        	var strSvcUrl   = "lifCom/selectComCd.do";
        	var inData      = "dsSearch=dsAplyKnd";
        	var outData     = "dsAplyKndList=dsCdList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**************************************************************************
         * @name : fnBldgSrch
         * @description : 건물구분 조회
         ***************************************************************************/
        this.fnBldgSrch = function()
        {
        	if(this.dsBldgSe.getRowCount() > 0){
        		this.dsBldgSe.clearData();

        	}

        	this.dsBldgSe.addRow();
        	this.dsBldgSe.setColumn(0, "useYn", "Y");
        	this.dsBldgSe.setColumn(0, "cdTypeId", "TSPLOC");


        	var strSvcId    = "fnBldgSrch";
        	var strSvcUrl   = "lifCom/selectComCd.do";
        	var inData      = "dsSearch=dsBldgSe";
        	var outData     = "dsBldgSeList=dsCdList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**************************************************************************
          * @description : 기본정보등록 버튼 클릭
         ***************************************************************************/
        this.divForm_divSch_btnBscInfoReg_onclick = function(obj,e)
        {
        	var sTitle = "기본정보등록및확인 팝업";
        	var objArg   = {"jobGroupId" : this.dsList.getColumn(e.row, "jobGroupId")
        				   };

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
        		, width: 930
        		, height: 970
        		, autosize: false
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("jobGroupInfoPopup", "work::LIF/TSC/LIF051M00.xfdl", objArg, sPopupCallBack, objOption);
        };


        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divSch_btnSchClose_onclick = function(obj,e)
        {
        	this.divForm.form.divSch.form.panLabel.fittocontents="none";
        	this.divForm.form.divSch.form.panLabel.set_height("45px");
        	this.divForm.form.divSch.fittocontents="none";
        	this.divForm.form.divSch.set_height("145px");
        	this.divForm.form.divSch.form.btnSchClose.set_cssclass("btn_WF_SchOpen");
        	this.resetScroll();
        };


        this.divForm_divGrd_Grid00_oncellclick = function(obj,e)
        {

        	for(var i = 0; i < this.dsList.rowcount ; i++ ){
        	//alert("ee==>" + this.dsList.getColumn(i,"chk1"));
        		if(this.dsList.getColumn(i,"chk1") == "1"){ //선택(인계인수)
        			this.dsList.setColumn(i, "chk1", "");//체크 초기화
        			var param = {
        				"status" : "detail"
        			};

        			var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			var sMenuUrl = 'work::LIF/TSC/LIF052M00.xfdl';
        			var actNm = '인계인수신청 상세';

        			this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);
        		}

        		if(this.dsList.getColumn(i,"chk2") == "1"){ //선택(전기)
        			this.dsList.setColumn(i, "chk2", "");//체크 초기화
        			var param = {
        				"status" : "detail"
        			};

        			var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			var sMenuUrl = 'work::LIF/TSC/LIF053M00.xfdl';
        			var actNm = '전기사용신청 상세';

        			this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);
        		}

        		if(this.dsList.getColumn(i,"chk3") == "1"){ //선택(수도)
        		    this.dsList.setColumn(i, "chk3", "");//체크 초기화
        			var param = {
        				"status" : "detail"
        			};

        			var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			var sMenuUrl = 'work::LIF/TSC/LIF055M00.xfdl';
        			var actNm = '수도사용신청 상세';

        			this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);
        		}

        		if(this.dsList.getColumn(i,"chk4") == "1"){ //선택(통신)
        			this.dsList.setColumn(i, "chk4", "");//체크 초기화
        			var param = {
        				"status" : "detail"
        			};

        			var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			var sMenuUrl = 'work::LIF/TSC/LIF056M00.xfdl';
        			var actNm = '통신사용신청 상세';

        			this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);
        		}

        	}

        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.staLabel.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divSch.form.staLabel00.addEventHandler("onclick",this.divForm_divSch_staLabel_onclick,this);
            this.divForm.form.divSch.form.btnBscInfoReg.addEventHandler("onclick",this.divForm_divSch_btnBscInfoReg_onclick,this);
            this.divForm.form.divGrd.form.Grid00.addEventHandler("oncellclick",this.divForm_divGrd_Grid00_oncellclick,this);
        };
        this.loadIncludeScript("LIF050M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
