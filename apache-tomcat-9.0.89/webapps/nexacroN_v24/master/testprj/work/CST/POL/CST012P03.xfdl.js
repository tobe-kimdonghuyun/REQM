(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("prgmPopup");
            this.set_titletext("그룹물품등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSelList", this);
            obj._setContents("<ColumnInfo><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyRegGroupNo\" type=\"STRING\" size=\"256\"/><Column id=\"userCmdtySn\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyStgLctn\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyQty\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"unitNm\" type=\"STRING\" size=\"256\"/><Column id=\"spcfctNm\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddList", this);
            obj._setContents("<ColumnInfo><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyRegGroupNo\" type=\"STRING\" size=\"256\"/><Column id=\"userCmdtySn\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyStgLctn\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyQty\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"unitNm\" type=\"STRING\" size=\"256\"/><Column id=\"spcfctNm\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrpList", this);
            obj._setContents("<ColumnInfo><Column id=\"cmdtyRegGroupNo\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyGroupNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyRegGroupNo\" type=\"STRING\" size=\"256\"/><Column id=\"searchGubun\" type=\"STRING\" size=\"256\"/><Column id=\"searchKeyword\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyRegGroupNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddHiddenList", this);
            obj._setContents("<ColumnInfo><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyRegGroupNo\" type=\"STRING\" size=\"256\"/><Column id=\"userCmdtySn\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyStgLctn\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyQty\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"unitNm\" type=\"STRING\" size=\"256\"/><Column id=\"spcfctNm\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0","100%",null,null,"60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","53","20","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("물품그룹선택");
            obj.set_cssclass("sta_WF_Txt50022");
            this.divForm.addChild(obj.name, obj);

            obj = new Grid("grdSelList","53","60","100%","400",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsSelList");
            obj.set_selecttype("row");
            obj.getSetter("uFunction").set("checkbox");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"물품등록번호\"/><Cell col=\"1\" text=\"물품 명\"/><Cell col=\"2\" text=\"물품사진\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:userCmdtySn\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:cmdtyNm\"/><Cell col=\"2\" displaytype=\"text\" textAlign=\"left\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.addChild(obj.name, obj);

            obj = new Combo("cmbGrp1","0","46","230","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsGrpList");
            obj.set_codecolumn("cmdtyRegGroupNo");
            obj.set_datacolumn("cmdtyGroupNm");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.addChild(obj.name, obj);

            obj = new Combo("cmbGubun","260","84","150","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_cmbGubun_innerdataset = new nexacro.NormalDataset("divForm_form_cmbGubun_innerdataset", obj);
            divForm_form_cmbGubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">검색구분</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">등록번호</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">물품명</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_cmbGubun_innerdataset);
            obj.set_text("검색구분");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.addChild(obj.name, obj);

            obj = new Edit("edtKeyword","199","109","140","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSearch","104","154","47","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_fittocontents("width");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","75","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("10");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cmbGubun\"/><PanelItem id=\"PanelItem01\" componentid=\"edtKeyword\"/><PanelItem id=\"PanelItem02\" componentid=\"btnSearch\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","53","20","400","500",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("10");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00\"/><PanelItem id=\"PanelItem03\" componentid=\"cmbGrp1\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem01\" componentid=\"grdSelList\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnShuttle","1440","600","40","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_ShuttleR");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","1420","390","50","100%",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("15");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnShuttle\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","53","20","400","500",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("10");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cmbGrp2\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01\"/><PanelItem id=\"PanelItem03\" componentid=\"grdAddList\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Grid("grdAddList","0","69","100%","330",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("13");
            obj.set_autofittype("col");
            obj.set_selecttype("row");
            obj.set_binddataset("dsAddList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"물품등록번호\"/><Cell col=\"2\" text=\"물품 명\"/><Cell col=\"3\" text=\"물품사진\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:userCmdtySn\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:cmdtyNm\"/><Cell col=\"3\" displaytype=\"text\" textAlign=\"left\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnDel","260","-60","69","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_text("선택삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_fittocontents("width");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","0","26","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("10");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnDel\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Combo("cmbGrp2","0","-17","230","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsGrpList");
            obj.set_codecolumn("cmdtyRegGroupNo");
            obj.set_datacolumn("cmdtyGroupNm");
            obj.set_text("");
            obj.set_index("-1");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","-60","100%","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_text("등록할 물품 그룹 선택");
            obj.set_cssclass("sta_WF_Txt50022");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0",null,null,"60","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            obj.set_formscrollbartype("default default");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Yes");
            this.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("0");
                p.sta00.set_text("물품그룹선택");
                p.sta00.set_cssclass("sta_WF_Txt50022");
                p.sta00.move("53","20","100%","40",null,null);

                p.grdSelList.set_taborder("1");
                p.grdSelList.set_autofittype("col");
                p.grdSelList.set_binddataset("dsSelList");
                p.grdSelList.set_selecttype("row");
                p.grdSelList.getSetter("uFunction").set("checkbox");
                p.grdSelList.move("53","60","100%","400",null,null);

                p.cmbGrp1.set_taborder("3");
                p.cmbGrp1.set_innerdataset("dsGrpList");
                p.cmbGrp1.set_codecolumn("cmdtyRegGroupNo");
                p.cmbGrp1.set_datacolumn("cmdtyGroupNm");
                p.cmbGrp1.set_text("");
                p.cmbGrp1.set_index("-1");
                p.cmbGrp1.move("0","46","230","40",null,null);

                p.cmbGubun.set_taborder("4");
                p.cmbGubun.set_innerdataset(divForm_form_cmbGubun_innerdataset);
                p.cmbGubun.set_codecolumn("codecolumn");
                p.cmbGubun.set_datacolumn("datacolumn");
                p.cmbGubun.set_text("검색구분");
                p.cmbGubun.set_value("");
                p.cmbGubun.set_index("-1");
                p.cmbGubun.move("260","84","150","34",null,null);

                p.edtKeyword.set_taborder("5");
                p.edtKeyword.move("199","109","140","34",null,null);

                p.btnSearch.set_taborder("6");
                p.btnSearch.set_text("검색");
                p.btnSearch.set_cssclass("btn_WF_SmallBlack");
                p.btnSearch.set_fittocontents("width");
                p.btnSearch.move("104","154","47","34",null,null);

                p.Panel02.set_taborder("7");
                p.Panel02.set_horizontalgap("10");
                p.Panel02.set_flexmainaxisalign("end");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("0","75","100%","40",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_type("vertical");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("10");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("53","20","400","500",null,null);

                p.btnShuttle.set_taborder("14");
                p.btnShuttle.set_cssclass("btn_WF_ShuttleR");
                p.btnShuttle.move("1440","600","40","40",null,null);

                p.Panel00_01.set_taborder("15");
                p.Panel00_01.set_flexcrossaxisalign("center");
                p.Panel00_01.set_flexmainaxisalign("center");
                p.Panel00_01.set_flexgrow("1");
                p.Panel00_01.move("1420","390","50","100%",null,null);

                p.Panel00_00.set_taborder("8");
                p.Panel00_00.set_horizontalgap("10");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_verticalgap("10");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.move("53","20","400","500",null,null);

                p.grdAddList.set_taborder("13");
                p.grdAddList.set_autofittype("col");
                p.grdAddList.set_selecttype("row");
                p.grdAddList.set_binddataset("dsAddList");
                p.grdAddList.move("0","69","100%","330",null,null);

                p.btnDel.set_taborder("12");
                p.btnDel.set_text("선택삭제");
                p.btnDel.set_cssclass("btn_WF_SmallRed");
                p.btnDel.set_fittocontents("width");
                p.btnDel.move("260","-60","69","34",null,null);

                p.Panel02_01.set_taborder("11");
                p.Panel02_01.set_horizontalgap("10");
                p.Panel02_01.set_flexmainaxisalign("end");
                p.Panel02_01.set_fittocontents("height");
                p.Panel02_01.move("0","26","100%","40",null,null);

                p.cmbGrp2.set_taborder("10");
                p.cmbGrp2.set_innerdataset("dsGrpList");
                p.cmbGrp2.set_codecolumn("cmdtyRegGroupNo");
                p.cmbGrp2.set_datacolumn("cmdtyGroupNm");
                p.cmbGrp2.set_text("");
                p.cmbGrp2.set_index("-1");
                p.cmbGrp2.move("0","-17","230","40",null,null);

                p.sta00_00.set_taborder("9");
                p.sta00_00.set_text("등록할 물품 그룹 선택");
                p.sta00_00.set_cssclass("sta_WF_Txt50022");
                p.sta00_00.move("0","-60","100%","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSave.set_taborder("1");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.move("457.00","30","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("Layout0","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1000,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("그룹물품등록");

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_fittocontents("none");
                p.divForm.move("0","0","100%",null,null,"60");

                p.divPopBtn.set_taborder("0");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.set_formscrollbartype("default default");
                p.divPopBtn.move("0",null,null,"60","0","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,600,this,
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
            obj = new BindItem("item0","divForm.form.cmbGubun","value","dsSearch","searchGubun");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.edtKeyword","value","dsSearch","searchKeyword");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.cmbGrp1","value","dsSearch","cmdtyRegGroupNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.cmbGrp2","value","dsAddSearch","cmdtyRegGroupNo");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST012P03.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST012P03.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST012P03.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/06/05
        *  @Desction    팝업 유형 화면
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/13			박상희						최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.gvCoId = this.objApp.gdsUser.getColumn(0, "coId");
        this.gvUserId = this.objApp.gdsUser.getColumn(0, "userId");
        this.gvUserNm = this.objApp.gdsUser.getColumn(0, "userNm");

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	// 초기화
        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
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
        //그룹 조회
        this.fnSearchGrpList = function () {
        	this.dsSearch.setColumn(0, "coId", this.gvCoId);
        	this.dsSearch.setColumn(0, "userId", this.gvUserId);

        	var strSvcId    = "searchGrpList";
        	var strSvcUrl   = "cst/pol/polCmdtyGrpInfoInq.do";
        	var inData      = "dsIn=dsSearch";
        	var outData     = "dsGrpList=dsList";
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

        //좌측 그룹 list 조회
        this.fnSearch = function () {
        	this.dsSearch.setColumn(0, "coId", this.gvCoId);
        	this.dsSearch.setColumn(0, "userId", this.gvUserId);

        	var strSvcId    = "searchBase";
        	var strSvcUrl   = "cst/pol/polCmdtyGrpMpngListInq.do";
        	var inData      = "dsIn=dsSearch";
        	var outData     = "dsSelList=dsList";
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

        //우측 그룹 hidden list 조회
        this.fnSearchAdd = function () {
        	this.dsAddSearch.setColumn(0, "coId", this.gvCoId);
        	this.dsAddSearch.setColumn(0, "userId", this.gvUserId);

        	var strSvcId    = "searchAdd";
        	var strSvcUrl   = "cst/pol/polCmdtyGrpMpngListInq.do";
        	var inData      = "dsIn=dsAddSearch";
        	var outData     = "dsAddHiddenList=dsList";
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
        	var strSvcId    = "save";
        	var strSvcUrl   = "cst/pol/polCmdtyGrpMpngListStrg.do";
        	var inData      = "dsList=dsAddList:U";
        	var outData     = "";
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
        		case "searchGrpList" :
        			//물품그룹
        			this.dsSearch.enableevent = false;
        			this.dsGrpList.insertRow(0);
        			this.dsGrpList.setColumn(0, "cmdtyGroupNm", "선택");
        			this.dsSearch.enableevent = true;

        			break;

        		case "searchBase" :
        			//좌측 정보 조회
        			this.divForm.form.resetScroll();

        			break;

        		case "searchAdd" :
        			//우측 정보(보이는 영역) clear
        			this.dsAddList.clearData();

        			//우측 정보 조회
        			this.divForm.form.resetScroll();

        			break;

        		case "save" :
        			this.gfnAlertMsg("msg", "MSG_001"); // 등록되었습니다.

        			//저장 완료 후 닫기
        			this.close(true);

        			//좌측, 우측(hidden정보) 조회(저장 후 닫기가 아닌 경우)
        			//this.fnSearch();
        			//this.fnSearchAdd();

        			break;

        		default:
        			break;
        	}
        }
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description 초기화
        */
        this.fnInit = function()
        {
            //사용자 물품그룹 조회
        	this.fnSearchGrpList();
        }


        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //검색버튼
        this.divForm_btnSearch_onclick = function(obj,e)
        {
        	//물품그룹 선택
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "cmdtyRegGroupNo"))) {
        		this.divForm.form.cmbGrp1.setFocus();
        		this.gfnAlertMsg("req", "CST_004", ["물품그룹"]);
        		return;
        	}

        	//검색어 있는 경우
        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "searchKeyword"))) {
        		if(this.gfnIsNull(this.dsSearch.getColumn(0, "searchGubun"))) {
        			this.divForm.form.cmbGubun.setFocus();
        			this.gfnAlertMsg("msg", "MSG_022", ["검색구분"]);
        			return;
        		}
        	}

        	//좌측 물품그룹 조회
        	this.fnSearch();
        };

        //화설표 버튼
        this.divForm_btnShuttle_onclick = function(obj,e)
        {
        	//좌측 선택여부 확인
        	if (this.dsSelList.findRow("chk", "1") == -1) {
        		this.gfnAlertMsg("msg", "MSG_011", ["선택된 정보가 없습니다."]);
        		return;
        	}

        	//우측 그룹 선택 여부 확인
        	if (this.gfnIsNull(this.dsAddSearch.getColumn(0, "cmdtyRegGroupNo"))) {
        		this.divForm.form.cmbGrp2.setFocus();
        		this.gfnAlertMsg("req", "CST_004", ["물품그룹"]);
        		return;
        	}

        	//좌,우측 같은 그룹 선택여부 확인(같은 그룹이면 추가 불가)
        	let sameYn = false;
        	for (let i=this.dsSelList.getRowCount()-1; i>=0; i--) {
        		if (this.dsSelList.getColumn(i, "chk") != "1") {
        			continue;
        		} else {
        			if(this.dsSelList.getColumn(i, "cmdtyRegGroupNo") == this.dsAddSearch.getColumn(0, "cmdtyRegGroupNo")) {
        				sameYn = true;
        				break;
        			}
        		}
        	}
        	if(sameYn) {
        		this.gfnAlertMsg("req", "MSG_023", ["동일한 물품그룹에 추가"]);
        		return;
        	}

        	//선택한 내용 우측으로 세팅
        	for(let i=0; i<this.dsSelList.getRowCount(); i++) {
        		if (this.dsSelList.getColumn(i, "chk") != "1") {
        			continue;
        		} else {
        			//추가된 내용 중 중복 정보가 있는 경우 추가 안 함
        			if (this.dsAddList.findRow("userCmdtySn", this.dsSelList.getColumn(i, "userCmdtySn")) > -1) {
        				this.gfnAlertMsg("msg", "MSG_011", ["중복된 물품정보가 존재합니다."]);
        				return;
        			}

        			//중복 정보가 없는 경우 복사한 내용 세팅
        			const nRow = this.dsAddList.addRow();
        			this.dsAddList.copyRow(nRow, this.dsSelList, i);
        			this.dsAddList.setColumn(nRow, "cmdtyRegGroupNo", this.dsAddSearch.getColumn(0, "cmdtyRegGroupNo"));
        			this.dsAddList.setColumn(nRow, "chk", 0);		//체크박스 선택 컬럼 해제
        		}
        	}
        };

        //등록할 그룹 선택 변경
        this.dsAddSearch_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid != "cmdtyRegGroupNo") return;
        	if (this.gfnIsNull(e.newvalue)) return;

        	//그룹 선택 시 우측 내용 조회
        	this.fnSearchAdd();
        };

        //선택삭제 버튼
        this.divForm_btnDel_onclick = function(obj,e)
        {
        	if (this.dsAddList.findRow("chk", "1") == -1) {
        		this.gfnAlertMsg("msg", "MSG_011", ["선택된 정보가 없습니다."]);
        		return;
        	}

        	//선택된 정보가 있는 경우 삭제
        	for (let i=this.dsAddList.getRowCount()-1; i>=0; i--) {
        		if (this.dsAddList.getColumn(i, "chk") != "1") continue;
        		this.dsAddList.deleteRow(i);
        	}
        };

        //저장 버튼
        this.divPopBtn_btnSave_onclick = function(obj,e)
        {
        	//그리드 변경사항 확인
        	if (!this.gfnDsIsUpdated(this.dsAddList)) {
        		this.gfnAlertMsg("msg", "MSG_004");	// 변경된 내역이 없습니다.
        		return;
        	}

        	//등록할 그룹 선택 확인
        	if (this.gfnIsNull(this.dsAddSearch.getColumn(0, "cmdtyRegGroupNo"))) {
        		this.divForm.form.cmbGrp2.setFocus();
        		this.gfnAlertMsg("req", "CST_004", ["물품그룹"]);
        		return;
        	}

        	//hidden으로 조회한 내용과 userCmdtySn 정보가 같으면 중복된 정보이므로 저장 불가
        	for(let i=0; i<this.dsAddHiddenList.getRowCount(); i++) {
        		if (this.dsAddList.findRow("userCmdtySn", this.dsAddHiddenList.getColumn(i, "userCmdtySn")) > -1) {
        			this.gfnAlertMsg("msg", "MSG_011", ["기존에 등록된 정보와 \n중복된 물품정보가 존재합니다."]);
        			return;
        		}
        	}

        	this.gfnConfirmMsg("confirmSave", "MSG_003", (sPopId, oRtnVal) => {
        		if (!JSON.parse(oRtnVal).result) return;
        		this.fnSave();
        	});

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.divForm.form.grdSelList.addEventHandler("ondrag",this.grdSelList_ondrag,this);
            this.divForm.form.grdSelList.addEventHandler("ondrop",this.grdSelList_ondrop,this);
            this.divForm.form.btnSearch.addEventHandler("onclick",this.divForm_btnSearch_onclick,this);
            this.divForm.form.btnShuttle.addEventHandler("onclick",this.divForm_btnShuttle_onclick,this);
            this.divForm.form.grdAddList.addEventHandler("ondrag",this.grdSelList_ondrag,this);
            this.divForm.form.grdAddList.addEventHandler("ondrop",this.grdSelList_ondrop,this);
            this.divForm.form.btnDel.addEventHandler("onclick",this.divForm_btnDel_onclick,this);
            this.divForm.form.sta00_00.addEventHandler("onclick",this.sta00_onclick,this);
            this.divPopBtn.form.btnSave.addEventHandler("onclick",this.divPopBtn_btnSave_onclick,this);
            this.dsAddSearch.addEventHandler("oncolumnchanged",this.dsAddSearch_oncolumnchanged,this);
        };
        this.loadIncludeScript("CST012P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
