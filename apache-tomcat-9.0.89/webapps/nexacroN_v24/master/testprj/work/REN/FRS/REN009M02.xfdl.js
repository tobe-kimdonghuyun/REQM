(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN009M02");
            this.set_titletext("임대배정확정 목록(신청자)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1420,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"hireLoiNo\" type=\"STRING\" size=\"256\"/><Column id=\"rcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"polSpceId\" type=\"STRING\" size=\"256\"/><Column id=\"pstnCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgCd\" type=\"STRING\" size=\"256\"/><Column id=\"bldgNm\" type=\"STRING\" size=\"256\"/><Column id=\"rmnmNo\" type=\"STRING\" size=\"256\"/><Column id=\"rntar\" type=\"STRING\" size=\"256\"/><Column id=\"rentBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"rentEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtnRmnmNo\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtnRntar\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtnRentBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"cfmtnRentEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"pUserId\" type=\"STRING\" size=\"256\"/><Column id=\"pLoiSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"pBldgCd\" type=\"STRING\" size=\"256\"/><Column id=\"pPrgrsSttsCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">10</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboBldgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPstnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPrgsSttsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">확정</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미확정</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","divTitle:20",null,"153","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","55",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel01\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel00","1694.00","398","480","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem00\" componentid=\"cboBldgCd\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSchClose","1251","185","30","30",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_SchClose");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panClose","30","151","100%","30",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_cssclass("pal_WF_SchLine");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSchClose\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","122","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("6");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("7");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Combo("cboBldgCd","140","27","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCboBldgCd");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel00","69","25","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("8");
            obj.set_text("건물명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("9");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Combo("cboPrgsSttsCd","851","24","664","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsCboPrgsSttsCd");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel01","1694.00","398","480","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("10");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem01\" componentid=\"cboPrgsSttsCd\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:30",null,null,"30","-52",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelTtlCnt","0","0","20%","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("7");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem03\" componentid=\"staTnocs\"/><PanelItem id=\"PanelItem02\" componentid=\"staTotal01\"/></Contents>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn","970","0","80%","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("2");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"staTotal02\"/><PanelItem id=\"PanelItem01\" componentid=\"grdListCnt\"/></Contents>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Div("divPage","0","519","100.00%","36",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","PanelGrdBtn:10","100.00%",null,null,"divPage:20",null,null,null,null,this.divGrd.form);
            obj.set_taborder("11");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"접수번호\"/><Cell col=\"1\" text=\"업체명\"/><Cell col=\"2\" text=\"건물명\"/><Cell col=\"3\" text=\"호실&#13;&#10;번호\"/><Cell col=\"4\" text=\"면적(m2)\"/><Cell col=\"5\" text=\"임대시작일자\"/><Cell col=\"6\" text=\"임대종료일자\"/><Cell col=\"7\" text=\"상태\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:rcptNo\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:bzentyNm\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsCboBzentyClsfCd\" combocodecol=\"cdId\" combodatacol=\"cdNm\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:bldgNm\" displaytype=\"normal\" edittype=\"none\" combodataset=\"dsCboBldgCd\" combodatacol=\"cdNm\" combocodecol=\"cdId\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:cfmtnRmnmNo\" textAlign=\"center\" expr=\"prgrsSttsCd==&apos;35&apos; ? cfmtnRmnmNo : rmnmNo \"/><Cell col=\"4\" text=\"bind:cfmtnRntar\" displaytype=\"text\" combotype=\"dropdown\" comboautoselect=\"true\" textAlign=\"center\" expr=\"prgrsSttsCd==&apos;35&apos; ? cfmtnRntar : rntar\"/><Cell col=\"5\" text=\"bind:cfmtnRentBgngYmd\" displaytype=\"text\" edittype=\"none\" maskedittype=\"string\" textAlign=\"center\" expr=\"prgrsSttsCd==&apos;35&apos; ? cfmtnRentBgngYmd : rentBgngYmd\"/><Cell col=\"6\" text=\"bind:cfmtnRentEndYmd\" displaytype=\"text\" edittype=\"none\" maskedittype=\"string\" textAlign=\"center\" expr=\"prgrsSttsCd==&apos;35&apos; ? cfmtnRentEndYmd : rentEndYmd\"/><Cell col=\"7\" cssclass=\"CellEnd\" text=\"bind:prgrsSttsCd\" displaytype=\"text\" expr=\"prgrsSttsCd == &apos;32&apos;  ? &apos;미확정&apos; : &apos;확정&apos;\"/></Band></Format></Formats>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Combo("grdListCnt","1230","0","80","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGrd_form_grdListCnt_innerdataset = new nexacro.NormalDataset("divGrd_form_grdListCnt_innerdataset", obj);
            divGrd_form_grdListCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(divGrd_form_grdListCnt_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","1165","0","54","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("목록수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","12","12","27","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTnocs","staTotal:0","12","43","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_textAlign("center");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTnocs:0","12","30","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divGrd.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSch.form
            obj = new Layout("default","",0,0,this.divSch.form,
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
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","55",null,null);

                p.Panel00.set_taborder("3");
                p.Panel00.set_type("horizontal");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_minwidth("");
                p.Panel00.move("1694.00","398","480","40",null,null);

                p.btnSchClose.set_taborder("4");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("1251","185","30","30",null,null);

                p.panClose.set_taborder("5");
                p.panClose.set_type("vertical");
                p.panClose.set_cssclass("pal_WF_SchLine");
                p.panClose.set_flexcrossaxisalign("end");
                p.panClose.move("30","151","100%","30",null,null);

                p.btnSch.set_taborder("6");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","122","40",null,null);

                p.panSchBtn.set_taborder("7");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.cboBldgCd.set_taborder("1");
                p.cboBldgCd.set_innerdataset("dsCboBldgCd");
                p.cboBldgCd.set_codecolumn("cdId");
                p.cboBldgCd.set_datacolumn("cdNm");
                p.cboBldgCd.set_text("전체");
                p.cboBldgCd.set_value("");
                p.cboBldgCd.set_index("-1");
                p.cboBldgCd.move("140","27","100%","40",null,null);

                p.staLabel00.set_taborder("8");
                p.staLabel00.set_text("건물명");
                p.staLabel00.set_cssclass("sta_WF_SchLabel");
                p.staLabel00.set_flexshrink("0");
                p.staLabel00.move("69","25","100","40",null,null);

                p.staLabel01.set_taborder("9");
                p.staLabel01.set_text("상태");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_maxwidth("");
                p.staLabel01.move("0","0","100","40",null,null);

                p.cboPrgsSttsCd.set_taborder("2");
                p.cboPrgsSttsCd.set_innerdataset("dsCboPrgsSttsCd");
                p.cboPrgsSttsCd.set_codecolumn("codecolumn");
                p.cboPrgsSttsCd.set_datacolumn("datacolumn");
                p.cboPrgsSttsCd.set_minwidth("");
                p.cboPrgsSttsCd.set_text("전체");
                p.cboPrgsSttsCd.set_value("");
                p.cboPrgsSttsCd.set_index("-1");
                p.cboPrgsSttsCd.move("851","24","664","40",null,null);

                p.Panel01.set_taborder("10");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_minwidth("");
                p.Panel01.move("1694.00","398","480","40",null,null);
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
                p.panLabel.move("132","47","100%","244",null,null);

                p.Panel01.set_type("horizontal");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_horizontalgap("8");
                p.Panel01.move("1694.00","398","100%","40",null,null);

                p.Panel00.set_horizontalgap("8");
                p.Panel00.move("1694.00","398","100%","45",null,null);

                p.Panel01.set_horizontalgap("8");
                p.Panel01.move("1694.00","398","100%","40",null,null);

                p.Panel00.set_type("horizontal");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_horizontalgap("8");
                p.Panel00.move("1694.00","398","100%","80",null,null);

                p.Edit00.move("140","80","65%","40",null,null);

                p.edtHireLohNo.move("841","24","65%","40",null,null);
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
            obj.set_verticalgap("20");
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
                p.PanelTtlCnt.set_taborder("7");
                p.PanelTtlCnt.set_fittocontents("width");
                p.PanelTtlCnt.move("0","0","20%","34",null,null);

                p.PanelGrdBtn.set_taborder("2");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.set_flexgrow("1");
                p.PanelGrdBtn.move("970","0","80%","34",null,null);

                p.divPage.set_taborder("0");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_maxheight("");
                p.divPage.move("0","519","100.00%","36",null,null);

                p.grdList.set_taborder("11");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("none");
                p.grdList.move("0","PanelGrdBtn:10","100.00%",null,null,"divPage:20");

                p.grdListCnt.set_taborder("3");
                p.grdListCnt.set_innerdataset(divGrd_form_grdListCnt_innerdataset);
                p.grdListCnt.set_codecolumn("codecolumn");
                p.grdListCnt.set_datacolumn("datacolumn");
                p.grdListCnt.set_text("10");
                p.grdListCnt.set_value("10");
                p.grdListCnt.set_index("0");
                p.grdListCnt.move("1230","0","80","34",null,null);

                p.staTotal02.set_taborder("1");
                p.staTotal02.set_text("목록수");
                p.staTotal02.set_cssclass("sta_WF_SchLabel");
                p.staTotal02.set_fittocontents("width");
                p.staTotal02.move("1165","0","54","34",null,null);

                p.staTotal.set_taborder("4");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("12","12","27","34",null,null);

                p.staTnocs.set_taborder("5");
                p.staTnocs.set_text("0");
                p.staTnocs.set_cssclass("sta_WF_Total");
                p.staTnocs.set_usedecorate("true");
                p.staTnocs.set_fittocontents("width");
                p.staTnocs.set_textAlign("center");
                p.staTnocs.move("staTotal:0","12","43","34",null,null);

                p.staTotal01.set_taborder("6");
                p.staTotal01.set_text("건");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.move("staTnocs:0","12","30","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("default");
            obj.set_flexwrap("wrap");
            this.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_autofittype("none");

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("default");
            obj.set_flexwrap("wrap");
            this.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGrd.form
            obj = new Layout("mobile","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelGrdBtn.move("-10","0","450","34",null,null);

                p.grdList.move("0","PanelGrdBtn:20","100.00%","528",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("10");
            this.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1420,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("임대배정확정 목록(신청자)");

                p.divTitle.set_taborder("2");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divSch.set_taborder("0");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","divTitle:20",null,"153","30",null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.set_flexgrow("1");
                p.divGrd.move("0","divSch:30",null,null,"30","-52");
            	}
            );
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.move("20","70",null,"198","20",null);

                p.divGrd.move("20","divSch:20",null,"662","20",null);

                p.divTitle.move("0","0",null,"50","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_horizontalgap("0");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","staTnocs","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divGrd.form.staTnocs","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divCal.form.calBgngYmd","value","dsSearch","pBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divCal.form.calEndYmd","value","dsSearch","pEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSch.form.cboBldgCd","value","dsSearch","pBldgCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSch.form.cboPrgsSttsCd","value","dsSearch","pPrgrsSttsCd");
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
        this.addIncludeScript("REN009M02.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN009M02.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN009M02.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/11/12
        *  @Desction     임대배정확정 목록(신청자)
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/12			이루온							최초생성
        *******************************************************************************
        */

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
        	console.log(this.objApp.gdsUser);
        	//페이지 로딩시 처음에 실행 되는 함수
        	this.fnInit();
        };

        // 검색조건 입력
        this.form_onkeyup = function(obj,e)
        {
        	if (e.keycode==13 && e.fromobject.id != "grdList") {
        		if (e.fromobject.taborder >= 1 && e.fromobject.taborder <= 2) {
        			this.divSch.form.btnSch.click();
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        // 검색 조회
        this.cfnSearch = function (page)
        {
        	//그리드 한 페이지에 게시되는 데이터건수
        	var recordCountPerPage = this.divGrd.form.grdListCnt.value;
        	this.dsSearch.setColumn(0, "currentPageNo", page);
        	this.dsSearch.setColumn(0, "recordCountPerPage", recordCountPerPage);
        	this.dsSearch.setColumn(0, "pUserId", this.objApp.gdsUser.getColumn(0, "userId"));

        	this.getSearchTransaction();
        };

        this.cfnClose = function (){};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 목록 조회 트랜젝션
        this.getSearchTransaction = function()
        {
        	// 의향서구분코드: A.신규 R.정기 M.변경 W.반납
        	this.dsSearch.setColumn(0,"pLoiSeCd", "A");

        	var strSvcId    = "search";
        	var strSvcUrl   = "ren/frs/selectRentAsnCfmtnList.do";
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
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		// 공통코드조회
        		case "_cfnComCdLoad_":
        			this.divSch.form.cboPrgsSttsCd.set_index(0);	// 상태
        			break;

        		// 위치,건물콤보조회
        		case "selectBldgCdList":
        			this.divSch.form.cboBldgCd.set_index(0);		// 건물

        			break;

        		// 목록조회
        		case "search":
        			// 조회 한 후 페이징을 셋팅 하기 위한 초기 함수
         			this.divGrd.form.divPage.form.initPages(this.dsPage.getColumn(0, "currentPageNo"), this.dsPage.getColumn(0, "totalRecordCount"), this.dsPage.getColumn(0, "recordCountPerPage"), this.dsPage.getColumn(0, "pageSize"), "pagingCallback");

        			break;
        	}
        };

        //페이징 버튼 콜백함수
        this.pagingCallback = function(page) {
        	this.cfnSearch(page);
        };

        //팝업에 관한 콜백 함수
        this.fnPopupCallback = function(sPopupId, sRtn){};

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	// 공통코드 함수 호출
        	this.cfnComCdLoad({dsCboPstnCd:"ZONE_SE_CD:A"});

        	// 건물코드 콤보 조회
        	this.selectBldgCdList();

        	//페이징을 위하여 검색 함수를 실행
        	this.cfnSearch(1);
        };

        // 건물코드 콤보 조회
        this.selectBldgCdList = function() {

        	this.dsCboBldgCd.clear();

        	var strSvcId    = "selectBldgCdList";
        	var strSvcUrl   = "ren/com/selectBldgCdList.do";
        	var inData      = "";
        	var outData     = "dsCboBldgCd=dsList";
        	var strArg      = "pInqSe=A pTaskSe=LOI pSttsCd='34,35'"
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divGrd_grdListCnt_onitemchanged = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        // 조회 버튼 클릭시
        this.divSch_btnSch_onclick = function(obj,e){
        	this.cfnSearch(1);
        };

        // 목록 더블 클릭시
        this.divGrd_grdList_oncelldblclick = function(obj,e)
        {
        	var hireLoiNo = this.dsList.getColumn(e.row, "hireLoiNo");
        	var polSpceId = this.dsList.getColumn(e.row, "polSpceId");

        	if (this.objApp.screenid == "Desktop_screen") {
        		/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        		var param = {
        			"hireLoiNo"   : hireLoiNo
        			,"polSpceId" : polSpceId
        		};

        		var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        		var sMenuUrl = 'work::REN/FRS/REN009M03.xfdl';
        		var actNm = '상세';

        		this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);
        		/*****  MDI 에 추가하는 페이지 오픈을 위한 코드 *****/
        	} else {
        		var sTitle = "상세";
        		var objArg   = {
        			"status" : "detail"
        			,"hireLoiNo" : hireLoiNo
        			,"polSpceId" : polSpceId
        		};

        		var objOption = {
        			popuptype: "modal"	//modal,modaless
        			, autosize: true
        			, title: sTitle
        			, resize: true
        			, titlebar: true
        		};
        		var sPopupCallBack = "fnPopupCallback";

        		this.gfnOpenPopup("REN002M01", "work::REN/FRS/REN009M03.xfdl", objArg, sPopupCallBack, objOption);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeyup",this.form_onkeyup,this);
            this.divSch.form.btnSch.addEventHandler("onclick",this.divSch_btnSch_onclick,this);
            this.divSch.form.cboPrgsSttsCd.addEventHandler("onitemchanged",this.divSch_bldgCombo_onitemchanged,this);
            this.divGrd.form.grdList.addEventHandler("oncelldblclick",this.divGrd_grdList_oncelldblclick,this);
            this.divGrd.form.grdListCnt.addEventHandler("onitemchanged",this.divGrd_grdListCnt_onitemchanged,this);
        };
        this.loadIncludeScript("REN009M02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
