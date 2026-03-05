(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN003M00_03");
            this.set_titletext("임대가능 전체목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1420,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"pPstnCd\" type=\"STRING\" size=\"256\"/><Column id=\"pBldgCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">10</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"INT\" size=\"256\"/><Column id=\"pstnCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgCd\" type=\"STRING\" size=\"256\"/><Column id=\"polSpceId\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"polSpceAr\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"rmnmNo\" type=\"STRING\" size=\"256\"/><Column id=\"vccYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPstnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboBldgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSch","0","10",null,"153","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("panLabel","530","110","100%","50",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("0");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("50");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Combo("cboPstnCd","570","25","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCboPstnCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("위치");
            obj.set_value("");
            obj.set_index("-1");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("Static00","505","20","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("5");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel01","426","128","200","45",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem02\" componentid=\"cboBldgCd\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel00","290","126","200","45",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("3");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"cboPstnCd\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Combo("cboBldgCd","1065","23","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsCboBldgCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("Static01","985","20","100","35",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("6");
            obj.set_text("건물명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","30","30",null,null,null,null,null,null,this.divSch.form);
            obj.set_cssclass("btn_WF_SchClose");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("4");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("11");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:20",null,"650","0",null,null,null,"580",null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelTtlCnt","0","0","172","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("9");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem03\" componentid=\"staTnocs\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal01\"/></Contents>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","550","34","0",null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("1");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("none");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staTotal02\"/><PanelItem id=\"PanelItem01\" componentid=\"grdListCnt\"/><PanelItem id=\"PanelItem03\" componentid=\"btnGrdRegi\"/></Contents>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","PanelGrdBtn:10","100.00%",null,null,"83",null,null,null,null,this.divGrd.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"건물명\"/><Cell col=\"3\" text=\"호실번호\"/><Cell col=\"4\" text=\"면적(m2)\"/><Cell col=\"5\" text=\"공실여부\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:pstnCd\" displaytype=\"combotext\" combodataset=\"dsCboPstnCd\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"2\" text=\"bind:bldgCd\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsCboBldgCd\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"3\" displaytype=\"text\" cssclass=\"CellTxtBlue,CellLink\" text=\"bind:rmnmNo\"/><Cell col=\"4\" text=\"bind:polSpceAr\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" cssclass=\"CellEnd\" expr=\"vccYn ==&apos;Y&apos; ? &apos;공실&apos; : &apos;임대중&apos;\"/></Band></Format></Formats>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Div("divPage","0","grdList:20","100.00%","36",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","1165","0","65","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","1320.00","-7","80","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("후보등록");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Combo("grdListCnt","482.00","12","80","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGrd_form_grdListCnt_innerdataset = new nexacro.NormalDataset("divGrd_form_grdListCnt_innerdataset", obj);
            divGrd_form_grdListCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(divGrd_form_grdListCnt_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTnocs","staTotal:0","0","43","34",null,null,"24",null,null,null,this.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("none");
            obj.set_textAlign("center");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTnocs:0","0","30","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divGrd.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSch.form
            obj = new Layout("default","",0,0,this.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panLabel.set_taborder("0");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_horizontalgap("50");
                p.panLabel.move("530","110","100%","50",null,null);

                p.cboPstnCd.set_taborder("1");
                p.cboPstnCd.set_innerdataset("dsCboPstnCd");
                p.cboPstnCd.set_codecolumn("cdId");
                p.cboPstnCd.set_datacolumn("cdNm");
                p.cboPstnCd.set_text("위치");
                p.cboPstnCd.set_value("");
                p.cboPstnCd.set_index("-1");
                p.cboPstnCd.move("570","25","100%","40",null,null);

                p.Static00.set_taborder("5");
                p.Static00.set_text("구분");
                p.Static00.set_cssclass("sta_WF_SchLabel");
                p.Static00.move("505","20","100","40",null,null);

                p.Panel01.set_taborder("4");
                p.Panel01.set_flexgrow("1");
                p.Panel01.move("426","128","200","45",null,null);

                p.Panel00.set_taborder("3");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("290","126","200","45",null,null);

                p.cboBldgCd.set_taborder("2");
                p.cboBldgCd.set_innerdataset("dsCboBldgCd");
                p.cboBldgCd.set_codecolumn("cdId");
                p.cboBldgCd.set_datacolumn("cdNm");
                p.cboBldgCd.set_text("전체");
                p.cboBldgCd.set_value("");
                p.cboBldgCd.set_index("-1");
                p.cboBldgCd.move("1065","23","100%","40",null,null);

                p.Static01.set_taborder("6");
                p.Static01.set_text("건물명");
                p.Static01.set_cssclass("sta_WF_SchLabel");
                p.Static01.move("985","20","100","35",null,null);

                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","30","30",null,null);

                p.panClose.set_taborder("10");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSch.set_taborder("4");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.move("570","192","112","40",null,null);

                p.panSchBtn.set_taborder("11");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.set_flexcrossaxiswrapalign("start");
                p.panSchBtn.set_flexcrossaxisalign("start");
                p.panSchBtn.move("632","235","100%","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form
            obj = new Layout("Layout0","",0,0,this.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panClose.move("30","151","100%","30",null,null);

                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_verticalgap("8");
                p.panLabel.move("132","47","100%","305",null,null);

                p.pan03.set_type("horizontal");
                p.pan03.set_horizontalgap("8");
                p.pan03.move("1694.00","398","100%","40",null,null);

                p.pan02.set_horizontalgap("8");
                p.pan02.move("1694.00","398","100%","45",null,null);

                p.pan01.set_horizontalgap("8");
                p.pan01.move("1694.00","398","100%","40",null,null);

                p.pan03.set_type("horizontal");
                p.pan03.set_fittocontents("height");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_horizontalgap("8");
                p.pan03.set_flexgrow("1");
                p.pan03.move("1694.00","398","100%","40",null,null);

                p.Edit00.move("890","24","65%","40",null,null);

                p.Edit01.move("163","80","65%","40",null,null);

                p.pan04.move("1694.00","398","100%","45",null,null);

                p.cmbList.move("130","14","120","40",null,null);

                p.Edit03.move("977","85","65%","40",null,null);

                p.PanelCal.move("285","24","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            this.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSch.form
            obj = new Layout("mobile","",0,0,this.divSch.form,
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
            this.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGrd.form.divPage
            obj = new Layout("default","",0,0,this.divGrd.form.divPage.form,function(p){});
            this.divGrd.form.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrd.form
            obj = new Layout("default","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelTtlCnt.set_taborder("9");
                p.PanelTtlCnt.set_fittocontents("width");
                p.PanelTtlCnt.move("0","0","172","34",null,null);

                p.PanelGrdBtn.set_taborder("1");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("none");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","550","34","0",null);

                p.grdList.set_taborder("6");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("col");
                p.grdList.move("0","PanelGrdBtn:10","100.00%",null,null,"83");

                p.divPage.set_taborder("8");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_maxheight("");
                p.divPage.move("0","grdList:20","100.00%","36",null,null);

                p.staTotal02.set_taborder("0");
                p.staTotal02.set_text("목록수");
                p.staTotal02.set_cssclass("sta_WF_SchLabel");
                p.staTotal02.set_fittocontents("width");
                p.staTotal02.move("1165","0","65","34",null,null);

                p.btnGrdRegi.set_taborder("4");
                p.btnGrdRegi.set_text("후보등록");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("1320.00","-7","80","34",null,null);

                p.grdListCnt.set_taborder("2");
                p.grdListCnt.set_innerdataset(divGrd_form_grdListCnt_innerdataset);
                p.grdListCnt.set_codecolumn("codecolumn");
                p.grdListCnt.set_datacolumn("datacolumn");
                p.grdListCnt.set_text("10");
                p.grdListCnt.set_value("10");
                p.grdListCnt.set_index("0");
                p.grdListCnt.move("482.00","12","80","34",null,null);

                p.staTotal.set_taborder("3");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTnocs.set_taborder("5");
                p.staTnocs.set_text("0");
                p.staTnocs.set_cssclass("sta_WF_Total");
                p.staTnocs.set_usedecorate("true");
                p.staTnocs.set_fittocontents("none");
                p.staTnocs.set_textAlign("center");
                p.staTnocs.set_minwidth("24");
                p.staTnocs.set_maxwidth("");
                p.staTnocs.move("staTotal:0","0","43","34",null,null);

                p.staTotal01.set_taborder("7");
                p.staTotal01.set_text("건");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.move("staTnocs:0","0","30","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");

                p.btnGrdAdd.set_visible("false");

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");

                p.btnGrdDw.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGrd.form
            obj = new Layout("mobile","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelGrdBtn.move("-70","0","100%","34",null,null);

                p.grdList.set_autofittype("none");
                p.grdList.move("0","PanelGrdBtn:10","100.00%","523",null,null);

                p.PanelTtlCnt.move("0","0","100%","34",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            this.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1420,850,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("임대가능 전체목록");

                p.divSch.set_taborder("1");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","10",null,"153","0",null);

                p.divGrd.set_taborder("0");
                p.divGrd.set_text("Div01");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_minheight("580");
                p.divGrd.set_maxheight("");
                p.divGrd.move("0","divSch:20",null,"650","0",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSch.form.cboPstnCd","value","dsSearch","pPstnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSch.form.cboBldgCd","value","dsSearch","pBldgCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divGrd.form.staTnocs","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::COM/util/paging/paging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("REN003M00_03.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN003M00_03.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN003M00_03.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/10/07
        *  @Desction   ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/07			박영수						최초생성
        *******************************************************************************
        */
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        const gdsUser = nexacro.getApplication().gdsUser;

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        // 검색 조회
        this.cfnSearch = function (page)
        {
        	// 그리드 한 페이지에 게시되는 데이터건수
        	var recordCountPerPage = this.divGrd.form.grdListCnt.value;
        	this.dsSearch.setColumn(0, "currentPageNo", page);
        	this.dsSearch.setColumn(0, "recordCountPerPage", recordCountPerPage);
        	this.getSearchTransaction();
        };

        this.cfnClose = function() {};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 목록 조회 트랜젝션
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "ren/frs/selectRentAvblAllList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList dsPage=dsPage";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //트랜젝션 콜백 함수
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if (errorCode != 0)	{
        		return;
        	}

        	switch (svcID) {
        		case "_cfnComCdLoad_":
        			var deptId = gdsUser.getColumn(0, "deptId");
        			var deptCd = "";

        			if (deptId == "41000086") { 	   // 운영기획팀
        				deptCd = 1;
        			} else if (deptId == "41000094") { // 교통운영팀
        				deptCd = 2;
        			} else if (deptId == "41000095") { // 물류운영팀
        				deptCd = 3;
        			} else if (deptId == "41000040") { // 재무팀
        				deptCd = 4;
        			}

        			if (deptCd > 0) {
        				this.dsCboPstnCd.filter("cdId == '" + deptCd + "'");
        				this.dsCboBldgCd.filter("grp2CdId == '" + deptCd + "' || cdNm == '전체' ");
        			}

        			this.divSch.form.cboPstnCd.set_index(0);

        			this.cfnSearch(1); //구분값 넘기기 위해 선택 후 조회
        			break;

        		case "search":
        			// 조회 한 후 페이징을 셋팅 하기 위한 초기 함수
        			this.divGrd.form.divPage.form.initPages(this.dsPage.getColumn(0, "currentPageNo"), this.dsPage.getColumn(0, "totalRecordCount"), this.dsPage.getColumn(0, "recordCountPerPage"), this.dsPage.getColumn(0, "pageSize"), "pagingCallback");
        			this.divGrd.form.staTnocs.fittocontents = "width";
        			break;
        	}
        };

        // 페이징 버튼 콜백함수
        this.pagingCallback = function(page) {
        	this.cfnSearch(page);
        };

        // 팝업에 관한 콜백 함수
        this.fnPopupCallback = function(sPopupId, sRtn){};

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	// 공통코드 함수 호출
        	this.cfnComCdLoad({dsCboPstnCd:"ZONE_SE_CD:"});
        	this.cfnEtcCdLoad({dsCboBldgCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'RENT_ASN_BLDG'}, opt:'A:cdNm'}"});
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 조회
        this.divSch_btnSch_onclick = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        // Enter 입력
        this.form_onkeyup = function(obj,e)
        {
        	var focus = this.getFocus();

        	if (e.keycode == 13 && focus.taborder < 5 ) {
        		this.divSch.form.btnSch.click();
        	}
        };

        // 목록수
        this.divGrd_grdListCnt_onitemchanged = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        // 체크선택
        this.dsList_oncolumnchanged = function(obj,e)
        {
        	var rCnt = obj.getRowCount();

        	if (e.columnid == "chk") {
        		obj.set_enableevent(false);

        		for (var i=0; i<rCnt; i++) {
        			if (i == e.row) {
        				obj.setColumn(i,"chk",1);
        			} else {
        				obj.setColumn(i,"chk",0);
        			}
        		}

        		obj.set_enableevent(true);
        	}
        };

        // 팝업호출
        this.divGrd_btnGrdRegi_onclick = function(obj,e)
        {
        	var chk = this.dsList.findRow("chk",1);

        	/*****  모달 팝업으로 페이지 오픈을 위한 코드 *****/
        	var sTitle = "임차희망서 제출 접수 업체";
        	var param   = {
        		"pstnCd" : this.divSch.form.cboPstnCd.value
        	   ,"bldgCd" : this.dsList.getColumn(chk, "bldgCd")
        	};

        	var objOption = {
        		popuptype: "modal"	// modal,modaless
        		, width : 800
        		, autosize: true
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallback = "fnPopupCallback";

        	this.gfnOpenPopup("REN003P02", "work::REN/FRS/REN003P02.xfdl", param, sPopupCallback, objOption);
        };

        this.divGrd_grdList_oncellclick = function(obj,e)
        {
        	if (e.cell == 3) {
        		var sTitle = "현황도";		// 팝업 파이틀
        		var objArg   = {};			// 팝업창에 보낸 파라메터

        		var objOption = {
        			popuptype: "modaless"	// modal,modaless
        			, width: 1300			// 팝업창 width
        			, height: 1000			// 팝업창 height
        			, autosize: false		// 사이즈 자동 여부
        			, title: sTitle			// 팝업타이틀
        			, resize: true			// 사이즈 조정 여부
        			, titlebar: true		// 팝업 타이틀바 여부
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("stsmap", "work::COM/stsmap/COM018P04.xfdl", objArg, sPopupCallBack, objOption);
        	}
        };

        // 상세페이지
        this.divGrd_grdList_oncelldblclick = function(obj,e)
        {
        	if (e.cell != "0") {
        		var pstnCd = this.dsList.getColumn(e.row, "pstnCd");
        		var bldgCd = this.dsList.getColumn(e.row, "bldgCd");
        		var rmnmNo = this.dsList.getColumn(e.row, "rmnmNo");
        		var rntar = this.dsList.getColumn(e.row, "polSpceAr");
        		var vccYn = this.dsList.getColumn(e.row, "vccYn");

        		if (this.objApp.screenid == "Desktop_screen") {
        			/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        			var param = {
        				"status" : "rentAvblDetail"
        				, "pstnCd" : pstnCd
        				, "bldgCd" : bldgCd
        				, "rmnmNo" : rmnmNo
        				, "rntar" : rntar
        				, "vccYn" : vccYn
        			};

        			var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			var sMenuUrl = 'work::REN/FRS/REN003M04.xfdl';
        			var actNm = '상세';

        			this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);
        			/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        		} else {
        			var sTitle = "상세";
        			var objArg   = {
        				"status" : "rentAvblDetail"
        				, "polSpceId" : polSpceId
        			};

        			var objOption = {
        				popuptype: "modal"	// modal,modaless
        				, autosize: true
        				, title: sTitle
        				, resize: true
        				, titlebar: true
        			};
        			var sPopupCallBack = "fnPopupCallback";

        			this.gfnOpenPopup("REN003M04", "work::REN/FRS/REN003M04.xfdl", objArg, sPopupCallBack, objOption);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeyup",this.form_onkeyup,this);
            this.divSch.form.btnSch.addEventHandler("onclick",this.divSch_btnSch_onclick,this);
            this.divGrd.form.grdList.addEventHandler("oncelldblclick",this.divGrd_grdList_oncelldblclick,this);
            this.divGrd.form.btnGrdRegi.addEventHandler("onclick",this.divGrd_btnGrdRegi_onclick,this);
            this.divGrd.form.grdListCnt.addEventHandler("onitemchanged",this.divGrd_grdListCnt_onitemchanged,this);
            this.divGrd.form.staTnocs.addEventHandler("onclick",this.divGrd_staTnocs_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("REN003M00_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
