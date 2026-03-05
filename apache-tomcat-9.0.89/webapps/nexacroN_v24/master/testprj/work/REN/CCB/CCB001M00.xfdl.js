(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CCB001M00");
            this.set_titletext("TSP 개발자 소통채널");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"pBbsDvs\" type=\"STRING\" size=\"256\"/><Column id=\"pBbsTitl\" type=\"STRING\" size=\"256\"/><Column id=\"pBbsWrtr\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">10</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"bbsDvs\" type=\"STRING\" size=\"256\"/><Column id=\"titl\" type=\"STRING\" size=\"256\"/><Column id=\"cmntYn\" type=\"STRING\" size=\"256\"/><Column id=\"wrtr\" type=\"STRING\" size=\"256\"/><Column id=\"wrtDt\" type=\"STRING\" size=\"256\"/><Column id=\"inqCnt\" type=\"STRING\" size=\"256\"/><Column id=\"newBbs1\" type=\"STRING\" size=\"256\"/><Column id=\"newBbs2\" type=\"STRING\" size=\"256\"/><Column id=\"newBbs3\" type=\"STRING\" size=\"256\"/><Column id=\"newBbs4\" type=\"STRING\" size=\"256\"/><Column id=\"newBbs5\" type=\"STRING\" size=\"256\"/><Column id=\"newBbs6\" type=\"STRING\" size=\"256\"/><Column id=\"newBbs7\" type=\"STRING\" size=\"256\"/><Column id=\"newBbs1Cnt\" type=\"STRING\" size=\"256\"/><Column id=\"newBbs2Cnt\" type=\"STRING\" size=\"256\"/><Column id=\"newBbs3Cnt\" type=\"STRING\" size=\"256\"/><Column id=\"newBbs4Cnt\" type=\"STRING\" size=\"256\"/><Column id=\"newBbs5Cnt\" type=\"STRING\" size=\"256\"/><Column id=\"newBbs6Cnt\" type=\"STRING\" size=\"256\"/><Column id=\"newBbs7Cnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("<ColumnInfo><Column id=\"totalRecordCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBbsDvs", this);
            obj._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">공지사항</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">자유게시판</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">공통기능(API)</Col></Row><Row><Col id=\"codecolumn\">31</Col><Col id=\"datacolumn\">테스트</Col></Row><Row><Col id=\"codecolumn\">40</Col><Col id=\"datacolumn\">테이블</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">표준문서</Col></Row><Row><Col id=\"codecolumn\">51</Col><Col id=\"datacolumn\">참고문서</Col></Row></Rows><Rows><Row><Col id=\"recordCountPerPage\">10</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSch","0","150",null,"70","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00","69","25","50","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("4");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","1378","50",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel01","1694.00","398","200","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj.set_spacing("0px 0px 0px 30px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem03\" componentid=\"edtBbsWrtr\"/><PanelItem id=\"PanelItem02\" componentid=\"btnSch\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel01","0","0","60","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("1");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel00","20.00","14","200","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("3");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("height");
            obj.set_flexwrap("nowrap");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtBbsTitl\"/></Contents>");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtBbsTitl","841","24","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("7");
            obj.set_flexgrow("1");
            this.divSch.addChild(obj.name, obj);

            obj = new Edit("edtBbsWrtr","721.00","15","100","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("8");
            obj.set_flexgrow("1");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel02","1373","36","120","50",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("5");
            obj._setContents("");
            this.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("11");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            this.divSch.addChild(obj.name, obj);

            obj = new Panel("Panel03","1245","0","120","50",null,null,null,null,null,null,this.divSch.form);
            obj.set_taborder("6");
            obj._setContents("");
            this.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:40",null,null,"60","25",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("divPage","0","637","100.00%","36",null,null,null,null,"36",null,this.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/paging/paging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","44","100.00%",null,null,"divPage:10",null,null,null,null,this.divGrd.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autosizingtype("col");
            obj.set_cssclass("grd_WF_Select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"500\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"50\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"게시판명\"/><Cell col=\"1\" text=\"작성일\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"댓글\"/><Cell col=\"4\" text=\"작성자\"/><Cell col=\"5\" text=\"조회수\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:bbsDvs\" displaytype=\"combotext\" combodataset=\"dsBbsDvs\" combocodecol=\"codecolumn\" combodatacol=\"datacolumn\" cssclass=\"expr:dsList.getRowType(currow) == 4 ? &apos;cellBody_BgColor_0033ff&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:wrtDt\" displaytype=\"mask\" combodataset=\"dsCombo\" combocodecol=\"cdId\" combotype=\"dropdown\" comboautoselect=\"true\" combodatacol=\"cdNm\" maskedittype=\"string\" edittype=\"none\" maskeditformat=\"####.##.##\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:titl\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\" cssclass=\"expr:dataset.getColumn(currow,&quot;newBbs1&quot;) == &quot;1&quot; ? &quot;CellTxtRed&quot; : dataset.getColumn(currow,&quot;newBbs2&quot;) == &quot;1&quot; ? &quot;CellTxtRed&quot; : dataset.getColumn(currow,&quot;newBbs3&quot;) == &quot;1&quot; ? &quot;CellTxtRed&quot; : dataset.getColumn(currow,&quot;newBbs4&quot;) == &quot;1&quot; ? &quot;CellTxtRed&quot; : dataset.getColumn(currow,&quot;newBbs5&quot;) == &quot;1&quot; ? &quot;CellTxtRed&quot; : dataset.getColumn(currow,&quot;newBbs6&quot;) == &quot;1&quot; ? &quot;CellTxtRed&quot; : dataset.getColumn(currow,&quot;newBbs7&quot;) == &quot;1&quot; ? &quot;CellTxtRed&quot; :&apos;&apos;\"/><Cell col=\"3\" text=\"bind:cmntYn\" displaytype=\"text\" combodataset=\"dsCombo\" combodatacol=\"cdNm\" combocodecol=\"cdId\"/><Cell col=\"4\" text=\"bind:wrtr\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsCombo2\" combodatacol=\"cdNm\" combocodecol=\"cdId\"/><Cell col=\"5\" text=\"bind:inqCnt\" displaytype=\"text\" edittype=\"none\"/></Band></Format></Formats>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTnocs","staTotal:0.00","0","30","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("none");
            obj.set_textAlign("center");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTnocs:0","0","30","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel02","1100.00","180","145","40",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("6");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","405.00","0","100","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("false");
            this.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","250","34","0",null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("7");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("none");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"grdListCnt\"/><PanelItem id=\"PanelItem00\" componentid=\"btnGrdRegi\"/></Contents>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Combo("grdListCnt","1280.00","0","80","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            var divGrd_form_grdListCnt_innerdataset = new nexacro.NormalDataset("divGrd_form_grdListCnt_innerdataset", obj);
            divGrd_form_grdListCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">15</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(divGrd_form_grdListCnt_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.divGrd.addChild(obj.name, obj);

            obj = new Div("divTitle","0.00","10","1381","133",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","11","5","1192","50",null,null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/></Contents>");
            this.divTitle.addChild(obj.name, obj);

            obj = new Panel("Panel01","10","71","90%","46",null,null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btn1\"/><PanelItem id=\"PanelItem01\" componentid=\"btn2\"/><PanelItem id=\"PanelItem03\" componentid=\"btn3\"/><PanelItem id=\"PanelItem04\" componentid=\"btn4\"/><PanelItem id=\"PanelItem05\" componentid=\"btn5\"/><PanelItem id=\"PanelItem06\" componentid=\"btn6\"/><PanelItem id=\"PanelItem07\" componentid=\"btn7\"/></Contents>");
            this.divTitle.addChild(obj.name, obj);

            obj = new Static("Static00_00","20.00","10","220","40",null,null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("1");
            obj.set_text("TSP 개발자 소통채널");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_Txt50020,sta_WF_Txt64");
            obj.set_font("bold 24px/normal \"pretendard\"");
            this.divTitle.addChild(obj.name, obj);

            obj = new Button("btn1","460.00","10","160","40",null,null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("2");
            obj.set_text("공지사항");
            obj.set_cssclass("btn_WF_No");
            this.divTitle.addChild(obj.name, obj);

            obj = new Button("btn7","20.00","20","160","40",null,null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("8");
            obj.set_text("참고문서");
            obj.set_cssclass("btn_WF_No");
            this.divTitle.addChild(obj.name, obj);

            obj = new Button("btn6","30.00","30","160","40",null,null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("7");
            obj.set_text("표준문서");
            obj.set_cssclass("btn_WF_No");
            this.divTitle.addChild(obj.name, obj);

            obj = new Button("btn5","40.00","40","160","40",null,null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("6");
            obj.set_text("테이블");
            obj.set_cssclass("btn_WF_No");
            this.divTitle.addChild(obj.name, obj);

            obj = new Button("btn4","50.00","50","160","40",null,null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("5");
            obj.set_text("테스트");
            obj.set_cssclass("btn_WF_No");
            this.divTitle.addChild(obj.name, obj);

            obj = new Button("btn3","60.00","60","160","40",null,null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("4");
            obj.set_text("공통기능(API)");
            obj.set_cssclass("btn_WF_No");
            this.divTitle.addChild(obj.name, obj);

            obj = new Button("btn2","70.00","70","160","40",null,null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("3");
            obj.set_text("자유게시판");
            obj.set_cssclass("btn_WF_No");
            this.divTitle.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSch.form
            obj = new Layout("default","",0,0,this.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00.set_taborder("4");
                p.staLabel00.set_text("제목");
                p.staLabel00.set_cssclass("sta_WF_SchLabel");
                p.staLabel00.set_flexshrink("0");
                p.staLabel00.move("69","25","50","40",null,null);

                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("10");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","1378","50",null,null);

                p.Panel01.set_taborder("2");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_spacing("0px 0px 0px 30px");
                p.Panel01.set_maxheight("");
                p.Panel01.set_minwidth("");
                p.Panel01.move("1694.00","398","200","40",null,null);

                p.staLabel01.set_taborder("1");
                p.staLabel01.set_text("작성자");
                p.staLabel01.set_cssclass("sta_WF_SchLabel");
                p.staLabel01.set_flexshrink("0");
                p.staLabel01.set_maxwidth("");
                p.staLabel01.move("0","0","60","40",null,null);

                p.Panel00.set_taborder("3");
                p.Panel00.set_type("horizontal");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexwrap("nowrap");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_maxheight("");
                p.Panel00.set_minwidth("");
                p.Panel00.move("20.00","14","200","40",null,null);

                p.edtBbsTitl.set_taborder("7");
                p.edtBbsTitl.set_flexgrow("1");
                p.edtBbsTitl.move("841","24","100","40",null,null);

                p.edtBbsWrtr.set_taborder("8");
                p.edtBbsWrtr.set_flexgrow("1");
                p.edtBbsWrtr.move("721.00","15","100","40",null,null);

                p.Panel02.set_taborder("5");
                p.Panel02.move("1373","36","120","50",null,null);

                p.btnSch.set_taborder("11");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.move("570","192","112","40",null,null);

                p.Panel03.set_taborder("6");
                p.Panel03.move("1245","0","120","50",null,null);
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

                p.Panel03.set_type("horizontal");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_horizontalgap("8");
                p.Panel03.move("1694.00","398","100%","40",null,null);

                p.Panel02.set_horizontalgap("8");
                p.Panel02.move("1694.00","398","100%","45",null,null);

                p.Panel01.set_horizontalgap("8");
                p.Panel01.move("1694.00","398","100%","40",null,null);

                p.Panel00.set_type("horizontal");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_horizontalgap("8");
                p.Panel00.move("1694.00","398","100%","80",null,null);

                p.Edit00.move("140","80","65%","40",null,null);

                p.Edit01_00.move("841","24","65%","40",null,null);
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
                p.staLabel00.move("69","25","80","40",null,null);

                p.staLabel01.move("0","0","80","40",null,null);
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
                p.divPage.set_taborder("1");
                p.divPage.set_text("Div00");
                p.divPage.set_url("work::COM/util/paging/paging.xfdl");
                p.divPage.set_formscrollbartype("none none");
                p.divPage.set_formscrolltype("none");
                p.divPage.set_minheight("36");
                p.divPage.set_maxheight("");
                p.divPage.move("0","637","100.00%","36",null,null);

                p.grdList.set_taborder("2");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("col");
                p.grdList.set_autosizingtype("col");
                p.grdList.set_cssclass("grd_WF_Select");
                p.grdList.move("0","44","100.00%",null,null,"divPage:10");

                p.staTotal.set_taborder("3");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTnocs.set_taborder("4");
                p.staTnocs.set_text("0");
                p.staTnocs.set_cssclass("sta_WF_Total");
                p.staTnocs.set_usedecorate("true");
                p.staTnocs.set_fittocontents("none");
                p.staTnocs.set_textAlign("center");
                p.staTnocs.move("staTotal:0.00","0","30","34",null,null);

                p.staTotal01.set_taborder("5");
                p.staTotal01.set_text("건");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.move("staTnocs:0","0","30","34",null,null);

                p.Panel02.set_taborder("6");
                p.Panel02.set_type("horizontal");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_minwidth("");
                p.Panel02.move("1100.00","180","145","40",null,null);

                p.btnGrdRegi.set_taborder("8");
                p.btnGrdRegi.set_text("등록");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("false");
                p.btnGrdRegi.move("405.00","0","100","34",null,null);

                p.PanelGrdBtn.set_taborder("7");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("none");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","250","34","0",null);

                p.grdListCnt.set_innerdataset(divGrd_form_grdListCnt_innerdataset);
                p.grdListCnt.set_codecolumn("codecolumn");
                p.grdListCnt.set_datacolumn("datacolumn");
                p.grdListCnt.set_visible("false");
                p.grdListCnt.set_text("10");
                p.grdListCnt.set_value("10");
                p.grdListCnt.set_index("0");
                p.grdListCnt.move("1280.00","0","80","34",null,null);
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

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");
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

            	}
            );
            obj.set_verticalgap("20");
            this.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divTitle.form
            obj = new Layout("default","",0,0,this.divTitle.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("0");
                p.Panel00.move("11","5","1192","50",null,null);

                p.Panel01.set_taborder("9");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.move("10","71","90%","46",null,null);

                p.Static00_00.set_taborder("1");
                p.Static00_00.set_text("TSP 개발자 소통채널");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.set_cssclass("sta_WF_Txt50020,sta_WF_Txt64");
                p.Static00_00.set_font("bold 24px/normal \"pretendard\"");
                p.Static00_00.move("20.00","10","220","40",null,null);

                p.btn1.set_taborder("2");
                p.btn1.set_text("공지사항");
                p.btn1.set_cssclass("btn_WF_No");
                p.btn1.move("460.00","10","160","40",null,null);

                p.btn7.set_taborder("8");
                p.btn7.set_text("참고문서");
                p.btn7.set_cssclass("btn_WF_No");
                p.btn7.move("20.00","20","160","40",null,null);

                p.btn6.set_taborder("7");
                p.btn6.set_text("표준문서");
                p.btn6.set_cssclass("btn_WF_No");
                p.btn6.move("30.00","30","160","40",null,null);

                p.btn5.set_taborder("6");
                p.btn5.set_text("테이블");
                p.btn5.set_cssclass("btn_WF_No");
                p.btn5.move("40.00","40","160","40",null,null);

                p.btn4.set_taborder("5");
                p.btn4.set_text("테스트");
                p.btn4.set_cssclass("btn_WF_No");
                p.btn4.move("50.00","50","160","40",null,null);

                p.btn3.set_taborder("4");
                p.btn3.set_text("공통기능(API)");
                p.btn3.set_cssclass("btn_WF_No");
                p.btn3.move("60.00","60","160","40",null,null);

                p.btn2.set_taborder("3");
                p.btn2.set_text("자유게시판");
                p.btn2.set_cssclass("btn_WF_No");
                p.btn2.move("70.00","70","160","40",null,null);
            	}
            );
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divTitle.form
            obj = new Layout("mobile","",0,0,this.divTitle.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divTitle.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,1200,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("TSP 개발자 소통채널");

                p.divSch.set_taborder("0");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("none");
                p.divSch.move("0","150",null,"70","60",null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:40",null,null,"60","25");

                p.divTitle.set_taborder("2");
                p.divTitle.set_text("Div00");
                p.divTitle.move("0.00","10","1381","133",null,null);
            	}
            );
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",390,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.move("20","0",null,"198","20",null);

                p.divGrd.move("20","divSch:30",null,null,"20","20");
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
            obj = new BindItem("item3","divGrd.form.staTnocs","text","dsPage","totalRecordCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSch.form.edtBbsTitl","value","dsSearch","pBbsTitl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSch.form.edtBbsWrtr","value","dsSearch","pBbsWrtr");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::COM/util/paging/paging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("CCB001M00.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CCB001M00.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	CCB001M00.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/10/11
        *  @Desction   ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/11			pys						최초생성
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

        	this.cfnSearch(1);
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //검색 조회
        this.cfnSearch = function (page)
        {
        	//그리드 한 페이지에 게시되는 데이터건수
        	var recordCountPerPage = this.divGrd.form.grdListCnt.value;
        	this.dsSearch.setColumn(0, "currentPageNo", page);
        	this.dsSearch.setColumn(0, "recordCountPerPage", recordCountPerPage);
        	this.dsList.clear();
        	this.getSearchTransaction();
        };

        this.cfnClose = function() {};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**
        	strSvcId 		// transaction을 구분하기 위한 svc id값
        	strSvcUrl 		// trabsaction을 요청할 주소
        	inData 			// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        	outData 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        	strArg 			// 입력값으로 보낼 arguments, strFormData="20120607"
        	callBackFnc 	// transaction의 결과를 받을 Function 이름
        	isAsync 		// 비동기통신 여부 [생략가능]
        **/

        //목록 조회 트랜젝션
        this.getSearchTransaction = function() {

        	var strSvcId    = "search";
        	var strSvcUrl   = "ren/com/selectCcbBbsList.do";
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
        /**
        	svcID			// 트랜잭션을 구분하기 위한 ID
        	errorCode		// 트랜잭션 성공 유무 코드 (0:정상, 0이 아니면 오류)
        	errorMsg		// 에러 발생히 메시지 (커스텀으로 일반 메세지 리턴 가능)
        **/

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
        		case "search":
        			// 조회 한 후 페이징을 셋팅 하기 위한 초기 함수
        			this.divGrd.form.divPage.form.initPages(this.dsPage.getColumn(0, "currentPageNo"), this.dsPage.getColumn(0, "totalRecordCount"), this.dsPage.getColumn(0, "recordCountPerPage"), this.dsPage.getColumn(0, "pageSize"), "pagingCallback");

        			this.divGrd.form.staTnocs.fittocontents = "width";

        			if (this.dsList.getRowCount() > 0) {
        				if (this.dsList.getColumn(0,"newBbs1Cnt") != 0) {
        				this.divTitle.form.btn1.text = "공지사항" +"("+ this.dsList.getColumn(0,"newBbs1Cnt") + ")";
        				} else {
        					this.divTitle.form.btn1.text = "공지사항";
        				}
        				if (this.dsList.getColumn(0,"newBbs2Cnt") != 0) {
        					this.divTitle.form.btn2.text = "자유게시판" +"("+ this.dsList.getColumn(0,"newBbs2Cnt") + ")";
        				} else {
        					this.divTitle.form.btn2.text = "자유게시판";
        				}
        				if (this.dsList.getColumn(0,"newBbs3Cnt") != 0) {
        					this.divTitle.form.btn3.text = "공통기능(API)" +"("+ this.dsList.getColumn(0,"newBbs3Cnt") + ")";
        				} else {
        					this.divTitle.form.btn3.text = "공통기능(API)";
        				}
        				if (this.dsList.getColumn(0,"newBbs4Cnt") != 0) {
        					this.divTitle.form.btn4.text = "테스트" +"("+ this.dsList.getColumn(0,"newBbs4Cnt") + ")";
        				} else {
        					this.divTitle.form.btn4.text = "테스트";
        				}
        				if (this.dsList.getColumn(0,"newBbs5Cnt") != 0) {
        					this.divTitle.form.btn5.text = "테이블" +"("+ this.dsList.getColumn(0,"newBbs5Cnt") + ")";
        				} else {
        					this.divTitle.form.btn5.text = "테이블";
        				}
        				if (this.dsList.getColumn(0,"newBbs6Cnt") != 0) {
        					this.divTitle.form.btn6.text = "표준문서" +"("+ this.dsList.getColumn(0,"newBbs6Cnt") + ")";
        				} else {
        					this.divTitle.form.btn6.text = "표준문서";
        				}
        				if (this.dsList.getColumn(0,"newBbs7Cnt") != 0) {
        					this.divTitle.form.btn7.text = "참고문서" +"("+ this.dsList.getColumn(0,"newBbs7Cnt") + ")";
        				} else {
        					this.divTitle.form.btn7.text = "참고문서";
        				}
        			}

        			break;
        	}
        };

        //페이징 버튼 콜백함수
        this.pagingCallback = function(page) {
        	this.cfnSearch(page);
        };

        //팝업에 관한 콜백 함수
        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	console.log('sPopupId');
        }

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //상위 버튼 클릭
        this.bbsDvs = function (obj,e) {

        	this.divSch.form.edtBbsTitl.value="";
        	this.divSch.form.edtBbsWrtr.value="";

        	this.divGrd.form.btnGrdRegi.set_visible(true);

        	this.divTitle.form.btn1.cssclass = "btn_WF_No";
        	this.divTitle.form.btn2.cssclass = "btn_WF_No";
        	this.divTitle.form.btn3.cssclass = "btn_WF_No";
        	this.divTitle.form.btn4.cssclass = "btn_WF_No";
        	this.divTitle.form.btn5.cssclass = "btn_WF_No";
        	this.divTitle.form.btn6.cssclass = "btn_WF_No";
        	this.divTitle.form.btn7.cssclass = "btn_WF_No";

        	if (obj.id == "btn1"){
        		obj.cssclass = "btn_WF_Yes";
        		this.dsSearch.setColumn(0,"pBbsDvs","10"); //공지사항
        	} else if (obj.id == "btn2"){
        		obj.cssclass = "btn_WF_Yes";
        		this.dsSearch.setColumn(0,"pBbsDvs","20"); //자유게시판
        	} else if (obj.id == "btn3"){
        		obj.cssclass = "btn_WF_Yes";
        		this.dsSearch.setColumn(0,"pBbsDvs","30"); //공통기능
        	} else if (obj.id == "btn4"){
        		obj.cssclass = "btn_WF_Yes";
        		this.dsSearch.setColumn(0,"pBbsDvs","31"); //테스트
        	} else if (obj.id == "btn5"){
        		obj.cssclass = "btn_WF_Yes";
        		this.dsSearch.setColumn(0,"pBbsDvs","40"); //테이블
        	} else if (obj.id == "btn6"){
        		obj.cssclass = "btn_WF_Yes";
        		this.dsSearch.setColumn(0,"pBbsDvs","50"); //표준문서
        	} else if (obj.id == "btn7"){
        		obj.cssclass = "btn_WF_Yes";
        		this.dsSearch.setColumn(0,"pBbsDvs","51"); //참고문서
        	} else {
        		this.dsSearch.setColumn(0,"pBbsDvs","");
        		this.divGrd.form.btnGrdRegi.set_visible(false);
        	}

        	this.cfnSearch(1);

        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //조회
        this.divSch_btnSch_onclick = function(obj,e)
        {
        	this.cfnSearch(1);
        };

        //등록
        this.divGrd_btnGrdRegi_onclick = function(obj,e)
        {
        	var bbsDvs = this.dsSearch.getColumn(0,"pBbsDvs");

        	/*****  모달 팝업으로 페이지 오픈을 위한 코드 *****/
        	var sTitle = "TSP 개발자 소통채널";

        	var param = {
        		"status"  : "reg"
        		,"bbsDvs" : bbsDvs
        	};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		, autosize: true
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallback = "fnPopupCallback";

        	this.gfnOpenPopup("CCB001M01", "work::REN/CCB/CCB001M01.xfdl", param, sPopupCallback, objOption);

        };

        //상세
        this.divGrd_grdList_oncelldblclick = function(obj,e)
        {
        	var bbsDvs = this.dsList.getColumn(e.row, "bbsDvs");
        	var bbsMngNo = this.dsList.getColumn(e.row, "bbsMngNo");

        	/*****  모달 팝업으로 페이지 오픈을 위한 코드 *****/
        	var sTitle = "";
        	var param = {
        		"status"    : "detail"
        		,"bbsDvs"   : bbsDvs
        		,"bbsMngNo" : bbsMngNo
        	};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		, autosize: true
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallback = "fnPopupCallback";

        	this.gfnOpenPopup("CCB001M01", "work::REN/CCB/CCB001M01.xfdl", param, sPopupCallback, objOption);
        };

        //Enter
        this.form_onkeyup = function(obj,e)
        {
        	if (e.keycode==13) {
        		this.divSch.form.btnSch.click();
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
            this.divGrd.form.grdList.addEventHandler("oncellclick",this.divGrd_grdList_oncellclick,this);
            this.divGrd.form.btnGrdRegi.addEventHandler("onclick",this.divGrd_btnGrdRegi_onclick,this);
            this.divTitle.form.Static00_00.addEventHandler("onclick",this.bbsDvs,this);
            this.divTitle.form.btn1.addEventHandler("onclick",this.bbsDvs,this);
            this.divTitle.form.btn7.addEventHandler("onclick",this.bbsDvs,this);
            this.divTitle.form.btn6.addEventHandler("onclick",this.bbsDvs,this);
            this.divTitle.form.btn5.addEventHandler("onclick",this.bbsDvs,this);
            this.divTitle.form.btn4.addEventHandler("onclick",this.bbsDvs,this);
            this.divTitle.form.btn3.addEventHandler("onclick",this.bbsDvs,this);
            this.divTitle.form.btn2.addEventHandler("onclick",this.bbsDvs,this);
        };
        this.loadIncludeScript("CCB001M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
