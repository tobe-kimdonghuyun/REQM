(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM022M05");
            this.set_titletext("업무공통목록코드관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"pCdTyId\" type=\"STRING\" size=\"256\"/><Column id=\"pCdTyNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCdTy", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTyId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTyNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnt\" type=\"STRING\" size=\"256\"/><Column id=\"editYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTask", this);
            obj._setContents("<ColumnInfo><Column id=\"cdNo\" type=\"STRING\" size=\"256\"/><Column id=\"cdTyId\" type=\"STRING\" size=\"256\"/><Column id=\"newCdTyId\" type=\"STRING\" size=\"256\"/><Column id=\"cdTyNm\" type=\"STRING\" size=\"256\"/><Column id=\"delYn\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp1CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdId\" type=\"STRING\" size=\"256\"/><Column id=\"grp2CdNm\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"exsArtclNm\" type=\"STRING\" size=\"256\"/><Column id=\"cnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"data\">Y</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"data\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","divTitle:10",null,"120","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("6");
            obj.set_text("코드유형명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel01","582","46","480","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("8");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCdTyNm\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtCdTyNm","692","46","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("7");
            obj.set_flexgrow("1");
            obj.set_maxlength("40");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","60",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("50");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel01\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("1");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("2");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("3");
            obj.set_text("코드유형ID");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtCdTyId","841","24","100%","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("4");
            obj.set_flexgrow("1");
            obj.set_maxlength("40");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel00","1694.00","398","480","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("5");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem00\" componentid=\"edtCdTyId\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panGrd","0","divSch:30",null,"900","60",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd00\"/><PanelItem id=\"PanelItem01\" componentid=\"divGrd01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divGrd00","0","340","100%","300",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","450","34","0",null,null,null,null,null,this.divGrd00.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnTyAdd\"/><PanelItem id=\"PanelItem00\" componentid=\"btnTyDel\"/><PanelItem id=\"PanelItem01\" componentid=\"btnGrdExcel\"/></Contents>");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Static("staTotal01","120","0","27","34",null,null,null,null,null,null,this.divGrd00.form);
            obj.set_taborder("3");
            obj.set_text("총");
            obj.set_usedecorate("true");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Static("staListTitle00","0","0","120","34",null,null,null,null,null,null,this.divGrd00.form);
            obj.set_taborder("4");
            obj.set_text("코드유형");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Panel("PanelTtlCnt00","0","0","300","34",null,null,null,null,null,null,this.divGrd00.form);
            obj.set_taborder("2");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staListTitle00\"/><PanelItem id=\"PanelItem00\" componentid=\"staTotal01\"/><PanelItem id=\"PanelItem02\" componentid=\"staTnocs00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00\"/></Contents>");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Static("staTnocs00","147","0","30","34",null,null,null,null,null,null,this.divGrd00.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_textAlign("left");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Static("Static00","213","17","30","34",null,null,null,null,null,null,this.divGrd00.form);
            obj.set_taborder("6");
            obj.set_text("건");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Button("btnTyAdd","405","0","80","34",null,null,null,null,null,null,this.divGrd00.form);
            obj.set_taborder("7");
            obj.set_text("유형추가");
            obj.set_cssclass("btn_WF_SmallGray");
            obj.set_visible("true");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Button("btnTyDel","417","12","80","34",null,null,null,null,null,null,this.divGrd00.form);
            obj.set_taborder("8");
            obj.set_text("유형삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Button("btnGrdExcel","1246","0","109","34",null,null,null,null,null,null,this.divGrd00.form);
            obj.set_taborder("9");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Grid("grdCdTyList","0","PanelGrdBtn:10","100.00%","250",null,null,null,null,null,null,this.divGrd00.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsCdTy");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"700\"/><Column size=\"700\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"코드유형ID\"/><Cell col=\"1\" text=\"코드유형명\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:cdTyId\" displaytype=\"text\" edittype=\"none\" editmaxlength=\"40\"/><Cell col=\"1\" text=\"bind:cdTyNm\" displaytype=\"text\" edittype=\"none\" cssclass=\"CellEnd\" editmaxlength=\"40\"/></Band></Format></Formats>");
            this.divGrd00.addChild(obj.name, obj);

            obj = new Div("divGrd01","0","divGrd00:10","100%","600",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelTtlCnt01","0","0","300","34",null,null,null,null,null,null,this.divGrd01.form);
            obj.set_taborder("1");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staListTitle01\"/><PanelItem id=\"PanelItem00\" componentid=\"staTotal03\"/><PanelItem id=\"PanelItem02\" componentid=\"staTnocs01\"/><PanelItem id=\"PanelItem04\" componentid=\"staTotal04\"/></Contents>");
            this.divGrd01.addChild(obj.name, obj);

            obj = new Static("staTnocs01","147","0","30","34",null,null,null,null,null,null,this.divGrd01.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_textAlign("center");
            this.divGrd01.addChild(obj.name, obj);

            obj = new Static("staTotal03","120","0","27","34",null,null,null,null,null,null,this.divGrd01.form);
            obj.set_taborder("2");
            obj.set_text("총");
            obj.set_usedecorate("true");
            this.divGrd01.addChild(obj.name, obj);

            obj = new Static("staListTitle01","0","0","120","34",null,null,null,null,null,null,this.divGrd01.form);
            obj.set_taborder("4");
            obj.set_text("업무목록성코드");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            this.divGrd01.addChild(obj.name, obj);

            obj = new Grid("grdTaskList","0","40","100.00%","500",null,null,null,null,null,null,this.divGrd01.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsTask");
            obj.set_autofittype("none");
            obj.set_scrollbartype("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"110\"/><Column size=\"150\"/><Column size=\"110\"/><Column size=\"150\"/><Column size=\"110\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"400\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"코드유형ID\"/><Cell col=\"1\" text=\"그룹1코드ID\"/><Cell col=\"2\" text=\"그룹1코드명\"/><Cell col=\"3\" text=\"그룹2코드ID\"/><Cell col=\"4\" text=\"그룹2코드명\"/><Cell col=\"5\" text=\"코드ID\"/><Cell col=\"6\" text=\"코드명\"/><Cell col=\"7\" text=\"사용여부\"/><Cell col=\"8\" text=\"비고\"/><Cell col=\"9\" cssclass=\"CellEnd\" text=\"기존항목명\"/></Band><Band id=\"body\"><Cell text=\"bind:cdTyId\" displaytype=\"text\" textAlign=\"center\" cssclass=\"expr:dataset.getColumn(currow,&quot;delYn&quot;) == &quot;Y&quot; ? &quot;CellTxtRed&quot; : &apos;&apos;\" editmaxlength=\"40\"/><Cell col=\"1\" text=\"bind:grp1CdId\" displaytype=\"text\" combodataset=\"dsCboPstnCd\" combodatacol=\"cdNm\" combocodecol=\"cdId\" textAlign=\"center\" edittype=\"text\" editmaxlength=\"20\"/><Cell col=\"2\" text=\"bind:grp1CdNm\" displaytype=\"text\" edittype=\"text\" combodataset=\"dsCboBldgCd\" combodatacol=\"cdNm\" combocodecol=\"cdId\" textAlign=\"center\" editmaxlength=\"40\"/><Cell col=\"3\" text=\"bind:grp2CdId\" textAlign=\"center\" displaytype=\"text\" edittype=\"text\" editmaxlength=\"20\"/><Cell col=\"4\" text=\"bind:grp2CdNm\" displaytype=\"text\" combodataset=\"dsCombo\" combocodecol=\"cdId\" combotype=\"dropdown\" comboautoselect=\"true\" combodatacol=\"cdNm\" textAlign=\"center\" edittype=\"text\" editmaxlength=\"40\"/><Cell col=\"5\" text=\"bind:cdId\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\" editmaxlength=\"20\"/><Cell col=\"6\" text=\"bind:cdNm\" textAlign=\"center\" displaytype=\"text\" edittype=\"text\" editmaxlength=\"60\"/><Cell col=\"7\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsUseYn\" combocodecol=\"code\" combodatacol=\"data\" text=\"bind:useYn\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:note\" displaytype=\"text\" edittype=\"text\" maskedittype=\"string\" textAlign=\"left\" editmaxlength=\"100\"/><Cell col=\"9\" cssclass=\"CellEnd\" text=\"bind:exsArtclNm\" displaytype=\"text\" edittype=\"text\" editmaxlength=\"100\"/></Band></Format></Formats>");
            this.divGrd01.addChild(obj.name, obj);

            obj = new Button("btnSave","405","0","45","34",null,null,null,null,null,null,this.divGrd01.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("true");
            this.divGrd01.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","450","34","0",null,null,null,null,null,this.divGrd01.form);
            obj.set_taborder("6");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("6");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnCdAdd\"/><PanelItem id=\"PanelItem02\" componentid=\"btnCdDel\"/><PanelItem id=\"PanelItem00\" componentid=\"btnSave\"/></Contents>");
            this.divGrd01.addChild(obj.name, obj);

            obj = new Button("btnCdDel","161","0","80","34",null,null,null,null,null,null,this.divGrd01.form);
            obj.set_taborder("7");
            obj.set_text("코드삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            this.divGrd01.addChild(obj.name, obj);

            obj = new Button("btnCdAdd","161","0","80","34",null,null,null,null,null,null,this.divGrd01.form);
            obj.set_taborder("8");
            obj.set_text("코드추가");
            obj.set_cssclass("btn_WF_SmallGray");
            obj.set_visible("true");
            this.divGrd01.addChild(obj.name, obj);

            obj = new Static("staTotal04","190","0","30","34",null,null,null,null,null,null,this.divGrd01.form);
            obj.set_taborder("9");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divGrd01.addChild(obj.name, obj);
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
                p.staLabel01.set_taborder("6");
                p.staLabel01.set_text("코드유형명");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_maxwidth("");
                p.staLabel01.move("0","0","100","40",null,null);

                p.Panel01.set_taborder("8");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_minwidth("");
                p.Panel01.move("582","46","480","40",null,null);

                p.edtCdTyNm.set_taborder("7");
                p.edtCdTyNm.set_flexgrow("1");
                p.edtCdTyNm.set_maxlength("40");
                p.edtCdTyNm.move("692","46","100%","40",null,null);

                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("50");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","60",null,null);

                p.btnSch.set_taborder("1");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.move("570","192","112","40",null,null);

                p.panSchBtn.set_taborder("2");
                p.panSchBtn.set_flexmainaxisalign("center");
                p.panSchBtn.move("632","235","100%","40",null,null);

                p.staLabel00.set_taborder("3");
                p.staLabel00.set_text("코드유형ID");
                p.staLabel00.set_cssclass("sta_WF_SchLabel");
                p.staLabel00.set_flexshrink("0");
                p.staLabel00.set_maxwidth("");
                p.staLabel00.move("0","0","100","40",null,null);

                p.edtCdTyId.set_taborder("4");
                p.edtCdTyId.set_flexgrow("1");
                p.edtCdTyId.set_maxlength("40");
                p.edtCdTyId.move("841","24","100%","40",null,null);

                p.Panel00.set_taborder("5");
                p.Panel00.set_type("horizontal");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_minwidth("");
                p.Panel00.move("1694.00","398","480","40",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_horizontalgap("50");
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

                p.Panel04.set_horizontalgap("8");
                p.Panel04.move("1694.00","398","100%","45",null,null);

                p.Panel02.set_horizontalgap("8");
                p.Panel02.move("1694.00","398","100%","40",null,null);

                p.Panel03.set_type("horizontal");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_horizontalgap("8");
                p.Panel03.move("1694.00","398","100%","80",null,null);

                p.Edit00.move("140","80","65%","40",null,null);

                p.edtCdTyNm.move("841","24","65%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("14px 16px 12px 16px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("50");
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
            obj.set_horizontalgap("50");
            this.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGrd00.form
            obj = new Layout("default","",0,0,this.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelGrdBtn.set_taborder("0");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","450","34","0",null);

                p.staTotal01.set_taborder("3");
                p.staTotal01.set_text("총");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.move("120","0","27","34",null,null);

                p.staListTitle00.set_taborder("4");
                p.staListTitle00.set_text("코드유형");
                p.staListTitle00.set_cssclass("sta_WF_SchLabel");
                p.staListTitle00.set_usedecorate("true");
                p.staListTitle00.move("0","0","120","34",null,null);

                p.PanelTtlCnt00.set_taborder("2");
                p.PanelTtlCnt00.set_fittocontents("width");
                p.PanelTtlCnt00.move("0","0","300","34",null,null);

                p.staTnocs00.set_taborder("5");
                p.staTnocs00.set_text("0");
                p.staTnocs00.set_cssclass("sta_WF_Total");
                p.staTnocs00.set_usedecorate("true");
                p.staTnocs00.set_textAlign("left");
                p.staTnocs00.move("147","0","30","34",null,null);

                p.Static00.set_taborder("6");
                p.Static00.set_text("건");
                p.Static00.move("213","17","30","34",null,null);

                p.btnTyAdd.set_taborder("7");
                p.btnTyAdd.set_text("유형추가");
                p.btnTyAdd.set_cssclass("btn_WF_SmallGray");
                p.btnTyAdd.set_visible("true");
                p.btnTyAdd.move("405","0","80","34",null,null);

                p.btnTyDel.set_taborder("8");
                p.btnTyDel.set_text("유형삭제");
                p.btnTyDel.set_cssclass("btn_WF_SmallRed");
                p.btnTyDel.set_visible("true");
                p.btnTyDel.move("417","12","80","34",null,null);

                p.btnGrdExcel.set_taborder("9");
                p.btnGrdExcel.set_text("다운로드(엑셀)");
                p.btnGrdExcel.set_cssclass("btn_WF_GrdDw");
                p.btnGrdExcel.set_visible("true");
                p.btnGrdExcel.set_fittocontents("width");
                p.btnGrdExcel.move("1246","0","109","34",null,null);

                p.grdCdTyList.set_taborder("1");
                p.grdCdTyList.set_binddataset("dsCdTy");
                p.grdCdTyList.set_autofittype("col");
                p.grdCdTyList.set_maxheight("");
                p.grdCdTyList.move("0","PanelGrdBtn:10","100.00%","250",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divGrd00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGrd00.form
            obj = new Layout("Layout0","",0,0,this.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdCdTyList.set_autofittype("none");

                p.btnTyAdd.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divGrd00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGrd00.form
            obj = new Layout("mobile","",0,0,this.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divGrd00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGrd01.form
            obj = new Layout("default","",0,0,this.divGrd01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelTtlCnt01.set_taborder("1");
                p.PanelTtlCnt01.set_fittocontents("width");
                p.PanelTtlCnt01.set_horizontalgap("1");
                p.PanelTtlCnt01.move("0","0","300","34",null,null);

                p.staTnocs01.set_taborder("3");
                p.staTnocs01.set_text("0");
                p.staTnocs01.set_cssclass("sta_WF_Total");
                p.staTnocs01.set_usedecorate("true");
                p.staTnocs01.set_textAlign("center");
                p.staTnocs01.move("147","0","30","34",null,null);

                p.staTotal03.set_taborder("2");
                p.staTotal03.set_text("총");
                p.staTotal03.set_usedecorate("true");
                p.staTotal03.move("120","0","27","34",null,null);

                p.staListTitle01.set_taborder("4");
                p.staListTitle01.set_text("업무목록성코드");
                p.staListTitle01.set_cssclass("sta_WF_SchLabel");
                p.staListTitle01.set_usedecorate("true");
                p.staListTitle01.move("0","0","120","34",null,null);

                p.grdTaskList.set_taborder("0");
                p.grdTaskList.set_binddataset("dsTask");
                p.grdTaskList.set_autofittype("none");
                p.grdTaskList.set_scrollbartype("default");
                p.grdTaskList.set_minheight("");
                p.grdTaskList.move("0","40","100.00%","500",null,null);

                p.btnSave.set_taborder("5");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_SmallBlack");
                p.btnSave.set_visible("true");
                p.btnSave.move("405","0","45","34",null,null);

                p.PanelGrdBtn.set_taborder("6");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("6");
                p.PanelGrdBtn.move(null,"0","450","34","0",null);

                p.btnCdDel.set_taborder("7");
                p.btnCdDel.set_text("코드삭제");
                p.btnCdDel.set_cssclass("btn_WF_SmallRed");
                p.btnCdDel.set_visible("true");
                p.btnCdDel.move("161","0","80","34",null,null);

                p.btnCdAdd.set_taborder("8");
                p.btnCdAdd.set_text("코드추가");
                p.btnCdAdd.set_cssclass("btn_WF_SmallGray");
                p.btnCdAdd.set_visible("true");
                p.btnCdAdd.move("161","0","80","34",null,null);

                p.staTotal04.set_taborder("9");
                p.staTotal04.set_text("건");
                p.staTotal04.set_usedecorate("true");
                p.staTotal04.move("190","0","30","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divGrd01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGrd01.form
            obj = new Layout("Layout0","",0,0,this.divGrd01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdTaskList.set_autofittype("none");

                p.btnSave.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divGrd01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGrd01.form
            obj = new Layout("mobile","",0,0,this.divGrd01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divGrd01.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,1200,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("업무공통목록코드관리");

                p.divTitle.set_taborder("0");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divSch.set_taborder("1");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","divTitle:10",null,"120","60",null);

                p.panGrd.set_taborder("4");
                p.panGrd.set_type("vertical");
                p.panGrd.set_verticalgap("20");
                p.panGrd.set_fittocontents("height");
                p.panGrd.move("0","divSch:30",null,"900","60",null);

                p.divGrd00.set_taborder("2");
                p.divGrd00.set_text("Div01");
                p.divGrd00.set_formscrollbartype("none none");
                p.divGrd00.set_formscrolltype("none");
                p.divGrd00.set_fittocontents("height");
                p.divGrd00.set_maxheight("");
                p.divGrd00.move("0","340","100%","300",null,null);

                p.divGrd01.set_taborder("3");
                p.divGrd01.set_text("Div01");
                p.divGrd01.set_formscrollbartype("none none");
                p.divGrd01.set_formscrolltype("none");
                p.divGrd01.set_fittocontents("height");
                p.divGrd01.set_minheight("");
                p.divGrd01.move("0","divGrd00:10","100%","600",null,null);
            	}
            );
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

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

            obj = new BindItem("item5","divCal.form.calBgngYmd","value","dsSearch","pBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divCal.form.calEndYmd","value","dsSearch","pEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtHireLohNo","value","dsSearch","pHireLohNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divTitle.form.divCal.form.calBgngYmd","value","dsSearch","pBgngYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divTitle.form.divCal.form.calEndYmd","value","dsSearch","pEndYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divGrd00.form.staTnocs01","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSch.form.edtCdTyNm","value","dsSearch","pCdTyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSch.form.edtCdTyId","value","dsSearch","pCdTyId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divGrd00.form.staTnocs00","text","dsCdTy","cnt");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("COM022M05.xfdl","xjs::TaskCom.xjs");
        this.registerScript("COM022M05.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName    COM022M05.xfdl
        *  @Creator     (주)이루온
        *  @CreateDate  2024/11/13
        *  @Desction   ************** 소스 수정 이력 ***********************************************
        * Date                  Modifier                    Description
        *******************************************************************************
        * 2024/11/13            pys                     최초생성
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

            this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //검색 조회
        this.cfnSearch = function ()
        {
            this.selectCdtyListTransaction();
        };

        this.cfnClose = function (){};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //코드유형 목록 조회
        this.selectCdtyListTransaction = function()
        {
            var strSvcId    = "selectCdtyList";
            var strSvcUrl   = "ren/com/selectCdtyList.do";
            var inData      = "dsSearch=dsSearch";
            var outData     = "dsCdTy=dsCdTy";
            var strArg      = "";
            var callBackFnc = "fnCallback";
            var isAsync     = true;

            this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        //업무목록성코드 목록 조회
        this.selectTaskListCdListTransaction = function()
        {
            var strSvcId    = "selectTaskListCdList";
            var strSvcUrl   = "ren/com/selectTaskListCdList.do";
            var inData      = "";
            var outData     = "dsTask=dsTask";
            var strArg      = "";
            var strArg      = "cdTyId=" + this.dsCdTy.getColumn(this.dsCdTy.rowposition, "cdTyId");
            var callBackFnc = "fnCallback";
            var isAsync     = true;

            this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 데이터 저장
        this.saveTransaction = function()
        {
            var strSvcId    = "save";
            var strSvcUrl   = "ren/com/saveTaskListCd.do";
            var inData      = "dsCdTy=dsCdTy:U dsTask=dsTask:U";
            var outData     = "";
            var strArg      = "";
            var callBackFnc = "fnCallback";
            var isAsync     = false;

            this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 데이터 삭제
        this.deleteTransaction = function()
        {
            var strSvcId    = "delete";
            var strSvcUrl   = "ren/com/deleteTaskListCd.do";
            var inData      = "dsTask=dsTask:U";
            var outData     = "";
            var strArg      = "";
            var callBackFnc = "fnCallback";
            var isAsync     = false;

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
                case "selectCdtyList":
                    if (!this.gfnIsNull(this.dsCdTy.getColumn(0, "cdTyId"))){
                        this.divGrd00.form.staTnocs00.text = this.dsCdTy.getColumn(0,"cnt");
                        this.selectTaskListCdListTransaction();
                    } else {
                        this.divGrd00.form.staTnocs00.text = "0";
                        this.divGrd01.form.staTnocs01.text = "0";
                        this.dsTask.clear();
                    }

                    break;

                case "selectTaskListCdList":
                    this.divGrd01.form.staTnocs01.text = this.dsTask.getColumn(0,"cnt");
                    this.divGrd01.form.staTnocs01.fittocontents = "width";
                    break;

                case "save":
                    this.gfnAlertMsg("msg", "CST_003");
                    this.cfnSearch();
                    break;
            }
        };

        //얼럿창 콜백 함수
        this.msgCallback = function(sPopupId, sRtn)
        {
            var oRtn = JSON.parse(sRtn);

            if (sPopupId == "save_confirm" && oRtn.result == "Y") {
                this.saveTransaction();
            }

            if (sPopupId == "delete_confirm" && oRtn.result == "Y") {
                var cdTyId = this.dsCdTy.getColumn(this.dsCdTy.rowposition,"cdTyId");

                for (var i=0; i<this.dsTask.rowcount; i++){
                    this.dsTask.setColumn(i, "newCdTyId", cdTyId);
                    this.dsTask.setColumn(i, "delYn", "Y");
                }

                this.saveTransaction();
            }
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
            // 그리드 속성 변경
            this.divGrd00.form.grdCdTyList.setCellProperty("body", 0, "edittype","expr:editYn == 'Y' ? 'text' : 'none'");
            this.divGrd00.form.grdCdTyList.setCellProperty("body", 1, "edittype","expr:editYn == 'Y' ? 'text' : 'none'");

            this.cfnSearch();
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divSch_btnSch_onclick = function(obj,e){
            this.cfnSearch();
        };

        this.divGrd00_grdCdTyList_oncellclick = function(obj,e)
        {
            if (!this.gfnIsNull(this.dsCdTy.getColumn(this.dsCdTy.rowposition,"cdTyId"))){
                this.selectTaskListCdListTransaction();
            }
        };

        this.divGrd00_btnTyAdd_onclick = function(obj,e)
        {
            this.dsCdTy.insertRow(0);
            this.dsCdTy.setColumn(0,"editYn", "Y");
            this.divGrd00.form.staTnocs00.text = this.dsCdTy.rowcount;
        };

        this.divGrd00_btnTyDel_onclick = function(obj,e)
        {
            var cdTyId = this.dsCdTy.getColumn(this.dsCdTy.rowposition,"cdTyId");

            if (!this.gfnIsNull(cdTyId)){
                this.gfnConfirmMsg("delete_confirm", "MSG_007", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["선택한 코드유형과 하위 목록성코드 \n전부를 삭제하시겠습니까?"]);
            } else {
                this.dsCdTy.deleteRow(e.row);
                this.divGrd00.form.staTnocs00.text = this.dsCdTy.rowcount;
            }
        };

        this.divGrd00_btnGrdExcel_onclick = function(obj,e)
        {
            /*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
            this.exportObj = new ExcelExportObject();
            var ret = this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.divGrd01.form.grdTaskList, "Sheet1!A1");
            this.exportObj.set_exporturl("svcUrl::/XExportImport.do");
            this.exportObj.exportData();
            /*****  현재 그리드 화면을 엑셀로 다운로드 받음  *****/
        };

        this.divGrd00_grdCdTyList_onenterdown = function(obj,e)
        {
            var cdTyId = this.dsCdTy.getColumn(this.dsCdTy.rowposition,"cdTyId");
            var cdTyNm = this.dsCdTy.getColumn(this.dsCdTy.rowposition,"cdTyNm");

            if (!this.gfnIsNull(cdTyId) && !this.gfnIsNull(cdTyNm)){
                this.dsTask.insertRow(0);
                this.dsTask.setColumn(0,"cdTyId", this.dsCdTy.getColumn(this.dsCdTy.rowposition,"cdTyId"));
                this.dsTask.setColumn(0,"useYn", "Y");
                this.divGrd01.form.staTnocs01.text = this.dsTask.rowcount;
            }
        };

        this.divGrd01_btnCdAdd_onclick = function(obj,e)
        {
            var cdTyId = this.dsCdTy.getColumn(this.dsCdTy.rowposition,"cdTyId");

            if (!this.gfnIsNull(cdTyId)){
                this.dsTask.insertRow(0);
                this.dsTask.setColumn(0,"cdTyId", this.dsCdTy.getColumn(this.dsCdTy.rowposition,"cdTyId"));
                this.dsTask.setColumn(0,"useYn", "Y");
            }
        };

        this.divGrd01_btnCdDel_onclick = function(obj,e)
        {
            if (!this.gfnIsNull(this.dsTask.getColumn(this.dsTask.rowposition, "cdNo"))){
                this.dsTask.setColumn(this.dsTask.rowposition, "cdTyId", "삭제");
                this.dsTask.setColumn(this.dsTask.rowposition, "delYn", "Y");
            } else {
                this.dsTask.deleteRow(0);
            }
        };

        this.divGrd01_btnSave_onclick = function(obj,e)
        {
            var cdTyId = this.dsCdTy.getColumn(this.dsCdTy.rowposition,"cdTyId");
            var cdTyNm = this.dsCdTy.getColumn(this.dsCdTy.rowposition,"cdTyNm");

            for (var i=0; i<this.dsTask.rowcount; i++){
                this.dsTask.setColumn(i, "newCdTyId", cdTyId);
                this.dsTask.setColumn(i, "cdTyNm", cdTyNm);
            }

            if (!this.gfnIsNull(cdTyId)){
                if (this.gfnDsIsUpdated(this.dsCdTy) == true || this.gfnDsIsUpdated(this.dsTask) == true) {
                    this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
                }
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSch.form.edtCdTyNm.addEventHandler("onkeydown",this.divSch_edtHirerNm_onkeydown,this);
            this.divSch.form.btnSch.addEventHandler("onclick",this.divSch_btnSch_onclick,this);
            this.divSch.form.btnSch.addEventHandler("onkeydown",this.divSch_btnSch_onkeydown,this);
            this.divSch.form.edtCdTyId.addEventHandler("onkeydown",this.divSch_edtHireLohNo_onkeydown,this);
            this.divGrd00.form.btnTyAdd.addEventHandler("onclick",this.divGrd00_btnTyAdd_onclick,this);
            this.divGrd00.form.btnTyDel.addEventHandler("onclick",this.divGrd00_btnTyDel_onclick,this);
            this.divGrd00.form.btnGrdExcel.addEventHandler("onclick",this.divGrd00_btnGrdExcel_onclick,this);
            this.divGrd00.form.grdCdTyList.addEventHandler("oncellclick",this.divGrd00_grdCdTyList_oncellclick,this);
            this.divGrd00.form.grdCdTyList.addEventHandler("onenterdown",this.divGrd00_grdCdTyList_onenterdown,this);
            this.divGrd01.form.grdTaskList.addEventHandler("oncelldblclick",this.divGrd_grdList_oncelldblclick,this);
            this.divGrd01.form.btnSave.addEventHandler("onclick",this.divGrd01_btnSave_onclick,this);
            this.divGrd01.form.btnCdDel.addEventHandler("onclick",this.divGrd01_btnCdDel_onclick,this);
            this.divGrd01.form.btnCdAdd.addEventHandler("onclick",this.divGrd01_btnCdAdd_onclick,this);
        };
        this.loadIncludeScript("COM022M05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
