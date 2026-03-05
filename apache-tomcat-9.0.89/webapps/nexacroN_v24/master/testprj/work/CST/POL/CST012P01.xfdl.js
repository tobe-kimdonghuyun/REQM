(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST012P01");
            this.set_titletext("물품정보등록");
            this.set_scrollbartype("auto autoindicator");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyRegGroupNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyGroupShrnYn\" type=\"STRING\" size=\"256\"/><Column id=\"rmrk\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMsg", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSave","468","674","68","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0",null,"250","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","40","15","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사용자 물품 그룹관리");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","40","15","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCoNm","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","0","250","86",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCoNm\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","390.00","0","250","86",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtUserNm\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","0","35","100%","97",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","0.00","0","43.75%","46",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("물품 그룹 코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCmdtyRegGroupNo","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00","0.00","0","43.75%","43",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("물품 공유 여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_01","390.00","0","250","86",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCmdtyGroupNm\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan01","0","80","100%","97",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"pan04_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00","0.00","0","90.00%","46",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("물품 그룹 명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCmdtyGroupNm","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0",null,null,"50","60","0",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSave\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divGrd","0","Panel00:20",null,null,"60","Panel01:20",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"0","550","34","0",null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnAddRow\"/><PanelItem id=\"PanelItem00\" componentid=\"btnDelRow\"/></Contents>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","0","43","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnAddRow","420.00","0","51","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnDelRow","481.00","0","69","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("선택삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","44","100.00%",null,null,"0",null,null,null,null,this.divGrd.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsList");
            obj.getSetter("uFunction").set("checkbox");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"250\"/><Column size=\"200\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"그룹코드\"/><Cell col=\"1\" text=\"그룹 명\"/><Cell col=\"2\" text=\"공유여부\"/><Cell col=\"3\" text=\"설 명\"/><Cell col=\"4\" text=\"등록일자\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:cmdtyRegGroupNo\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:cmdtyGroupNm\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"normal\" textAlign=\"center\" text=\"expr:cmdtyGroupShrnYn == &quot;Y&quot; ? &quot;공유&quot; : &quot;미공유&quot;\"/><Cell col=\"3\" text=\"bind:rmrk\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:frstRegDt\" displaytype=\"date\" cssclass=\"CellEnd\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel03","1207","95","250","86",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCmdtyRegGroupNo\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Radio("raCmdtyGroupShrnYn","85","211","280","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var raCmdtyGroupShrnYn_innerdataset = new nexacro.NormalDataset("raCmdtyGroupShrnYn_innerdataset", obj);
            raCmdtyGroupShrnYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">공유</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미공유</Col></Row></Rows>");
            obj.set_innerdataset(raCmdtyGroupShrnYn_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","1207","183","250","86",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRmrk\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05","1205","190","250","86",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"raCmdtyGroupShrnYn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","893","181","120","46",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("설명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRmrk","867","213","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrd.form
            obj = new Layout("default","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panGrdBtn.set_taborder("1");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.move(null,"0","550","34","0",null);

                p.staTotal.set_taborder("0");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTotal01.set_taborder("2");
                p.staTotal01.set_text("0");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("3");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);

                p.btnAddRow.set_taborder("4");
                p.btnAddRow.set_text("추가");
                p.btnAddRow.set_cssclass("btn_WF_Small");
                p.btnAddRow.move("420.00","0","51","34",null,null);

                p.btnDelRow.set_taborder("5");
                p.btnDelRow.set_text("선택삭제");
                p.btnDelRow.set_cssclass("btn_WF_SmallRed");
                p.btnDelRow.set_visible("true");
                p.btnDelRow.set_fittocontents("width");
                p.btnDelRow.move("481.00","0","69","34",null,null);

                p.grdList.set_taborder("6");
                p.grdList.set_binddataset("dsList");
                p.grdList.getSetter("uFunction").set("checkbox");
                p.grdList.set_autofittype("col");
                p.grdList.move("0","44","100.00%",null,null,"0");
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
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("물품정보등록");
                p.set_scrollbartype("auto autoindicator");

                p.btnSave.set_taborder("19");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.set_fittocontents("width");
                p.btnSave.move("468","674","68","40",null,null);

                p.Panel00.set_taborder("0");
                p.Panel00.set_type("vertical");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("0","0",null,"250","60",null);

                p.staSubTitle.set_taborder("1");
                p.staSubTitle.set_text("사용자 물품 그룹관리");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("40","15","100%","50",null,null);

                p.Panel02.set_taborder("2");
                p.Panel02.move("40","15","100%","50",null,null);

                p.staLabel03_00.set_taborder("3");
                p.staLabel03_00.set_text("회사명");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("0.00","0","100%","46",null,null);

                p.edtCoNm.set_taborder("4");
                p.edtCoNm.set_readonly("true");
                p.edtCoNm.move("0.00","46","100%","40",null,null);

                p.Panel02_00.set_taborder("5");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.move("20.00","0","250","86",null,null);

                p.staLabel03_01.set_taborder("6");
                p.staLabel03_01.set_text("사용자");
                p.staLabel03_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01.move("10.00","10","100%","46",null,null);

                p.edtUserNm.set_taborder("7");
                p.edtUserNm.set_readonly("true");
                p.edtUserNm.move("10.00","56","100%","40",null,null);

                p.Panel02_01.set_taborder("8");
                p.Panel02_01.set_type("vertical");
                p.Panel02_01.set_flexgrow("1");
                p.Panel02_01.move("390.00","0","250","86",null,null);

                p.pan00.set_taborder("9");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","35","100%","97",null,null);

                p.staLabel03_00_00.set_taborder("10");
                p.staLabel03_00_00.set_text("물품 그룹 코드");
                p.staLabel03_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00.move("0.00","0","43.75%","46",null,null);

                p.edtCmdtyRegGroupNo.set_taborder("11");
                p.edtCmdtyRegGroupNo.set_readonly("true");
                p.edtCmdtyRegGroupNo.move("0.00","46","100%","40",null,null);

                p.staLabel03_01_00.set_taborder("12");
                p.staLabel03_01_00.set_text("물품 공유 여부");
                p.staLabel03_01_00.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00.move("0.00","0","43.75%","43",null,null);

                p.pan04_01.set_taborder("13");
                p.pan04_01.set_type("vertical");
                p.pan04_01.set_flexgrow("1");
                p.pan04_01.set_verticalgap("4");
                p.pan04_01.move("390.00","0","250","86",null,null);

                p.pan01.set_taborder("14");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","80","100%","97",null,null);

                p.staLabel03_00_00_00.set_taborder("15");
                p.staLabel03_00_00_00.set_text("물품 그룹 명");
                p.staLabel03_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_00.move("0.00","0","90.00%","46",null,null);

                p.edtCmdtyGroupNm.set_taborder("16");
                p.edtCmdtyGroupNm.move("0.00","46","100%","40",null,null);

                p.Panel01.set_taborder("18");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexmainaxisalign("center");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.move("0",null,null,"50","60","0");

                p.divGrd.set_taborder("17");
                p.divGrd.set_text("Div01");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","Panel00:20",null,null,"60","Panel01:20");

                p.Panel03.set_taborder("20");
                p.Panel03.set_type("vertical");
                p.Panel03.set_flexgrow("1");
                p.Panel03.move("1207","95","250","86",null,null);

                p.raCmdtyGroupShrnYn.set_taborder("21");
                p.raCmdtyGroupShrnYn.set_columncount("-1");
                p.raCmdtyGroupShrnYn.set_rowcount("-1");
                p.raCmdtyGroupShrnYn.set_innerdataset(raCmdtyGroupShrnYn_innerdataset);
                p.raCmdtyGroupShrnYn.set_codecolumn("codecolumn");
                p.raCmdtyGroupShrnYn.set_datacolumn("datacolumn");
                p.raCmdtyGroupShrnYn.move("85","211","280","40",null,null);

                p.Panel04.set_taborder("22");
                p.Panel04.set_flexgrow("1");
                p.Panel04.set_type("vertical");
                p.Panel04.move("1207","183","250","86",null,null);

                p.Panel05.set_taborder("23");
                p.Panel05.set_flexgrow("1");
                p.Panel05.set_type("vertical");
                p.Panel05.move("1205","190","250","86",null,null);

                p.Static00.set_taborder("24");
                p.Static00.set_text("설명");
                p.Static00.set_cssclass("sta_WF_Label");
                p.Static00.move("893","181","120","46",null,null);

                p.edtRmrk.set_taborder("25");
                p.edtRmrk.move("867","213","100%","40",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_verticalgap("30");
            obj.set_spacing("0px 60px 10px 0px");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.move("20","0",null,"340","20",null);

                p.divGrd.move("20","Panel00:20",null,"330","20",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_spacing("0px 20px 0px 20px");
            obj.set_verticalgap("30");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtCmdtyRegGroupNo","value","dsList","cmdtyRegGroupNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","raCmdtyGroupShrnYn","value","dsList","cmdtyGroupShrnYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtCmdtyRegGroupNo","value","dsList","cmdtyRegGroupNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtCmdtyGroupNm","value","dsList","cmdtyGroupNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtRmrk","value","dsList","rmrk");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CST012P01.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST012P01.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/09/23
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/23			이규철						최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.gvCoId = nexacro.getApplication().gdsUser.getColumn(0, "coId");
        this.gvUserId = nexacro.getApplication().gdsUser.getColumn(0, "userId");
        this.gvUserNm = nexacro.getApplication().gdsUser.getColumn(0, "userNm");

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
        //조회
        this.cfnSearch = function ()
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

        //저장
        this.cfnSave = function ()
        {
        	//TODO..
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnSearch = function () {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	// 유저정보를 셋팅한다.
        	const gdsUser = nexacro.getApplication().gdsUser;

        	this.dsSearch.setColumn(0, "coId", this.gvCoId);
        	this.dsSearch.setColumn(0, "userId", this.gvUserId);

        	var strSvcId    = "search";
        	var strSvcUrl   = "cst/pol/polCmdtyGrpInfoInq.do";
        	var inData      = "dsIn=dsSearch";
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
        						isAsync); 		// 비동기통신 여부 [생략가능]
        }

        //저장
        this.fnSave = function () {
        	//메시지 DataSet 클리어
        	this.dsMsg.clearData();

        	var strSvcId    = "save";
        	var strSvcUrl   = "cst/pol/polCmdtyGrpInfoRegStrg.do";
        	var inData      = "dsList=dsList:U";
        	var outData     = "dsMsg=dsMsg";
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
        }

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }

        	switch(svcId) {
        		case "search" :
        			this.divGrd.form.staTotal01.text = this.dsList.getRowCount();
        			this.divGrd.form.resetScroll();

        			break;

        		case "save" :
        			if(this.gfnIsNull(this.dsMsg.getColumn(0, "msg"))) {
        				this.gfnAlertMsg("msg1", "MSG_001"); // 등록되었습니다.
        				this.fnSearch();
        			} else {
        				this.gfnAlertMsg("error", "MSG_011", [this.dsMsg.getColumn(0, "msg")]);	// 오류메시지 전달
        				this.fnSearch();
        			}

        			break;

        		default:
        			break;
        	}
        }

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function () {
        	this.edtCoNm.value = nexacro.getApplication().gdsUser.getColumn(0, "coNm");
        	this.edtUserNm.value = this.gvUserNm;

        	this.fnSearch();
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //추가 버튼
        this.divForm_divGrd_btnAddRow_onclick = function(obj,e)
        {
        	const nRow = this.dsList.addRow();

        	this.dsList.setColumn(nRow, "cmdtyGroupShrnYn", "N");
        	this.dsList.setColumn(nRow, "frstRegDt", this.gfnGetDate());
        };

        //삭제 버튼
        this.divForm_divGrd_btnDelRow_onclick = function(obj,e)
        {
        	if (this.dsList.findRow("chk", "1") == -1) {
        		this.gfnAlertMsg("msg2", "MSG_011", ["선택된 정보가 없습니다."]);
        		return;
        	}

        	for (let i=this.dsList.getRowCount()-1; i>=0; i--) {
        		if (this.dsList.getColumn(i, "chk") != 1) continue;
        		this.dsList.deleteRow(i);
        	}
        };

        //저장 버튼
        this.btnSave_onclick = function(obj,e)
        {
        	if (!this.gfnDsIsUpdated(this.dsList)) {
        		this.gfnAlertMsg("msg3", "MSG_004");  //변경된 내용이 없습니다.
        		return;
        	}

        	// validation
        	// [물품명, 단위, 물품규격, 물품구분] 필수
        	const arrEssCols = new Array();
        	// arrEssCols.push(["cmdtyRegGroupNo", "물품그룹코드", this.edtCmdtyRegGroupNo]);
        	arrEssCols.push(["cmdtyGroupNm", "물품그룹명", this.edtCmdtyGroupNm]);
        	arrEssCols.push(["cmdtyGroupShrnYn", "물품공유여부", this.raCmdtyGroupShrnYn]);

        	for (let i=0; i<arrEssCols.length; i++) {
        		const arrEss = arrEssCols[i];
        		const nFindRow = this.dsList.findRowExpr(`dataset.parent.gfnIsNull(${arrEss[0]})`);

        		if (nFindRow > -1) {
        			this.dsList.rowposition = nFindRow;
        			arrEss[2].setFocus();
        			this.gfnAlertMsg("msg4", "CST_004", [arrEss[1]]);  //{0}는(은) 필수 항목입니다!
        			return false;
        		}
        	};

        	//저장하시겠습니까?
        	this.gfnConfirmMsg("confirmSave", "MSG_003", (sPopId, oRtnVal) => {
        		if (!JSON.parse(oRtnVal).result) return;
        		this.fnSave();
        	});
        };

        this.dsList_onrowposchanged = function(obj,e)
        {
        	// const nRowType = obj.getRowType(e.newrow);
        	// this.edtCmdtyRegGroupNo.readonly = nRowType != Dataset.ROWTYPE_INSERT;
        	// this.edtCmdtyRegGroupNo.readonly = true;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.divGrd.form.btnAddRow.addEventHandler("onclick",this.divForm_divGrd_btnAddRow_onclick,this);
            this.divGrd.form.btnDelRow.addEventHandler("onclick",this.divForm_divGrd_btnDelRow_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("CST012P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
