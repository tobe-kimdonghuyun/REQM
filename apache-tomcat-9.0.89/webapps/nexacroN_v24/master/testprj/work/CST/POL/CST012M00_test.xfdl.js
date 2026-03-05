(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST012M00");
            this.set_titletext("나의물품등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtySn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtfl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"cmdtySn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcfmNo\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTycoSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchDtlSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"bsnsSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"workId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"fileExtn\" type=\"STRING\" size=\"256\"/><Column id=\"strgFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTrgtYn\" type=\"STRING\" size=\"256\"/><Column id=\"dscdTerm\" type=\"STRING\" size=\"256\"/><Column id=\"currentRow\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"cmdtySn\" type=\"STRING\" size=\"256\"/><Column id=\"file_fullName\" type=\"STRING\" size=\"256\"/><Column id=\"file_orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"file_fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"file_colId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchRslt", this);
            obj._setContents("<ColumnInfo><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMsg", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","60","1420","870","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn","0","0","500","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnAddRow\"/><PanelItem id=\"PanelItem01\" componentid=\"btnDelRow\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Grid("grdList","58","568","100%","376",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_binddataset("dsList");
            obj.getSetter("uFunction").set("checkbox");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"물품등록번호\"/><Cell col=\"1\" text=\"물품 명\"/><Cell col=\"2\" text=\"물품사진\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"물품 규격\"/><Cell col=\"5\" text=\"등록일자\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:cmdtySn\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:cmdtyNm\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:건물명\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:unitNm\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:spcfctNm\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:frstRegDt\" displaytype=\"date\" cssclass=\"CellEnd\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"center\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","0","100%","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"panGrdBtn\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divMain","0","0","100.00%","430",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100.00%","50",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("1");
            obj.set_text("나의 물품등록");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","30","100%","50",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","66","240","50",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("9");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxisalign("center");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnSave\"/></Contents>");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new Button("btnSave","1270","12","45","34",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_SmallBlack");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("2");
            obj.set_text("물품명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new Edit("edtCmdtyNm","20.00","288","100%","40",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new Static("Static00","91","158","120","46",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("11");
            obj.set_text("물품규격");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","970","270","100%","46",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("4");
            obj.set_text("단위");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new Edit("edtUnitNm","970","315","100%","40",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("5");
            obj.set_text("");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00","970","270","100%","46",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("6");
            obj.set_text("물품사진");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new Combo("cboCmdtySeCd","72","308","50%","40",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divForm_form_divMain_form_cboCmdtySeCd_innerdataset = new nexacro.NormalDataset("divForm_form_divMain_form_cboCmdtySeCd_innerdataset", obj);
            divForm_form_divMain_form_cboCmdtySeCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">A1</Col><Col id=\"datacolumn\">소모품류</Col></Row><Row><Col id=\"codecolumn\">B1</Col><Col id=\"datacolumn\">소모성자재류</Col></Row><Row><Col id=\"codecolumn\">C1</Col><Col id=\"datacolumn\">공구류</Col></Row><Row><Col id=\"codecolumn\">D1</Col><Col id=\"datacolumn\">전동공구류</Col></Row><Row><Col id=\"codecolumn\">E1</Col><Col id=\"datacolumn\">기타</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_divMain_form_cboCmdtySeCd_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new Edit("edtSpcfctNm","71","217","100%","40",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("13");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new Static("Static01","83","278","120","46",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("12");
            obj.set_text("물품구분");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new Panel("Panel00","565","0","100%","380",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("7");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 10px 10px 0px");
            obj.set_horizontalgap("20");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel06\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel07\"/></Contents>");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new Div("Div01","782","517","100%","40",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("17");
            obj.set_text("Div01");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new Button("btnFileUp",null,"0","116","36","0",null,null,null,null,null,this.divForm.form.divMain.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            obj.getSetter("upcolid").set("file");
            obj.getSetter("upatchsecd").set("H01");
            this.divForm.form.divMain.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel06","337","424","250","380",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("15");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel08\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel09\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel11\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel10\"/></Contents>");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new Panel("Panel11","335","501","100%","96",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("21");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 0px 0px 20px");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"edtUnitNm\"/></Contents>");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new Panel("Panel10","370","442","100%","96",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("20");
            obj.set_spacing("0px 0px 0px 20px");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtSpcfctNm\"/></Contents>");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new Panel("Panel09","326","415","100%","96",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("19");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 0px 0px 20px");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"edtCmdtyNm\"/></Contents>");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new Panel("Panel08","122","381","100%","96",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("18");
            obj.set_spacing("0px 0px 0px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Static01\"/><PanelItem id=\"PanelItem04\" componentid=\"cboCmdtySeCd\"/></Contents>");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer","0.00","46","100.00%","240",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("0");
            obj.set_cssclass("img_WF_View");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new Panel("Panel03","1361","334","100%","5",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("23");
            obj._setContents("");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new Grid("Grid00","360","394","100%","40",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("22");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.getSetter("upcolid").set("file");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:dataset.parent.gfnIsNull(file_fullName) ? &quot;&quot; : &quot;CellFile&quot;\" text=\"bind:file_fullName\"/><Cell col=\"1\" edittype=\"expr:dataset.parent.gfnIsNull(file_fullName) ? &quot;none&quot; : &quot;button&quot;\" text=\"삭제\" displaytype=\"expr:dataset.parent.gfnIsNull(ffile_fullName) ? &quot;none&quot; : &quot;buttoncontrol&quot;\"/></Band></Format></Formats>");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new Panel("Panel07","918","398","250","400",null,null,null,null,null,null,this.divForm.form.divMain.form);
            obj.set_taborder("16");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"ImageViewer\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem01\" componentid=\"Div01\"/><PanelItem id=\"PanelItem04\" componentid=\"Grid00\"/></Contents>");
            this.divForm.form.divMain.addChild(obj.name, obj);

            obj = new Panel("divGrd","0","460","100.00%","410",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 20px 10px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem05\" componentid=\"grdList\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnAddRow","416.00","0","65","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Small");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnDelRow","804.00","10","69","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("선택삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","0","43","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","460","224","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staTotal\"/><PanelItem id=\"PanelItem03\" componentid=\"staTotal01\"/><PanelItem id=\"PanelItem01\" componentid=\"staTotal02\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","540","-10","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","747","150","594","207",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_DevelopLangage("JAVA");
            obj.set_ExtensionAllowOrLimit("1");
            obj.set_HandlerUrl("/common/uploadDownload.do");
            obj.set_RunTimes("html5");
            obj.set_ButtonBarView("0");
            obj.set_text("");
            obj.set_DisableDeleteConfirm("1");
            obj.set_positionstep("0");
            obj.set_ExtensionArr("gif,png,jpg,jpge");
            obj.set_AllowDuplicationFile("1");
            obj.set_ImgPreView("1");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divMain.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.divMain.form.Div01.form,function(p){});
            this.divForm.form.divMain.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divMain.form
            obj = new Layout("default","",0,0,this.divForm.form.divMain.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSubTitle.set_taborder("1");
                p.staSubTitle.set_text("나의 물품등록");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("0","0","100.00%","50",null,null);

                p.Panel02.set_taborder("10");
                p.Panel02.move("0","30","100%","50",null,null);

                p.Panel01.set_taborder("9");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01.set_spacing("0px 10px 0px 10px");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.move("0","66","240","50",null,null);

                p.btnSave.set_taborder("8");
                p.btnSave.set_text("저장");
                p.btnSave.set_fittocontents("width");
                p.btnSave.set_cssclass("btn_WF_SmallBlack");
                p.btnSave.move("1270","12","45","34",null,null);

                p.staLabel03_00.set_taborder("2");
                p.staLabel03_00.set_text("물품명");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.edtCmdtyNm.set_taborder("3");
                p.edtCmdtyNm.move("20.00","288","100%","40",null,null);

                p.Static00.set_taborder("11");
                p.Static00.set_text("물품규격");
                p.Static00.set_cssclass("sta_WF_Label");
                p.Static00.move("91","158","120","46",null,null);

                p.staLabel03_01.set_taborder("4");
                p.staLabel03_01.set_text("단위");
                p.staLabel03_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01.move("970","270","100%","46",null,null);

                p.edtUnitNm.set_taborder("5");
                p.edtUnitNm.move("970","315","100%","40",null,null);

                p.staLabel03_01_00.set_taborder("6");
                p.staLabel03_01_00.set_text("물품사진");
                p.staLabel03_01_00.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00.move("970","270","100%","46",null,null);

                p.cboCmdtySeCd.set_taborder("14");
                p.cboCmdtySeCd.set_innerdataset(divForm_form_divMain_form_cboCmdtySeCd_innerdataset);
                p.cboCmdtySeCd.set_codecolumn("codecolumn");
                p.cboCmdtySeCd.set_datacolumn("datacolumn");
                p.cboCmdtySeCd.set_text("선택");
                p.cboCmdtySeCd.set_value("");
                p.cboCmdtySeCd.set_index("0");
                p.cboCmdtySeCd.move("72","308","50%","40",null,null);

                p.edtSpcfctNm.set_taborder("13");
                p.edtSpcfctNm.move("71","217","100%","40",null,null);

                p.Static01.set_taborder("12");
                p.Static01.set_text("물품구분");
                p.Static01.set_cssclass("sta_WF_Label");
                p.Static01.move("83","278","120","46",null,null);

                p.Panel00.set_taborder("7");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.set_spacing("0px 10px 10px 0px");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_verticalgap("0");
                p.Panel00.move("565","0","100%","380",null,null);

                p.Div01.set_taborder("17");
                p.Div01.set_text("Div01");
                p.Div01.move("782","517","100%","40",null,null);

                p.Panel06.set_taborder("15");
                p.Panel06.set_flexgrow("1");
                p.Panel06.set_type("vertical");
                p.Panel06.move("337","424","250","380",null,null);

                p.Panel11.set_taborder("21");
                p.Panel11.set_cssclass("pal_WF_DtlBg");
                p.Panel11.set_spacing("0px 0px 0px 20px");
                p.Panel11.set_type("vertical");
                p.Panel11.move("335","501","100%","96",null,null);

                p.Panel10.set_taborder("20");
                p.Panel10.set_spacing("0px 0px 0px 20px");
                p.Panel10.set_type("vertical");
                p.Panel10.move("370","442","100%","96",null,null);

                p.Panel09.set_taborder("19");
                p.Panel09.set_cssclass("pal_WF_DtlBg");
                p.Panel09.set_spacing("0px 0px 0px 20px");
                p.Panel09.set_type("vertical");
                p.Panel09.move("326","415","100%","96",null,null);

                p.Panel08.set_taborder("18");
                p.Panel08.set_spacing("0px 0px 0px 20px");
                p.Panel08.set_cssclass("pal_WF_DtlBg");
                p.Panel08.set_type("vertical");
                p.Panel08.move("122","381","100%","96",null,null);

                p.ImageViewer.set_taborder("0");
                p.ImageViewer.set_cssclass("img_WF_View");
                p.ImageViewer.move("0.00","46","100.00%","240",null,null);

                p.Panel03.set_taborder("23");
                p.Panel03.move("1361","334","100%","5",null,null);

                p.Grid00.set_taborder("22");
                p.Grid00.set_binddataset("dsFile");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_cssclass("grd_WF_FileAdd");
                p.Grid00.getSetter("upcolid").set("file");
                p.Grid00.move("360","394","100%","40",null,null);

                p.Panel07.set_taborder("16");
                p.Panel07.set_flexgrow("1");
                p.Panel07.set_type("vertical");
                p.Panel07.move("918","398","250","400",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divMain.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divMain.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divMain.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.divMain.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panGrdBtn.set_taborder("4");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.move("0","0","500","34",null,null);

                p.grdList.set_taborder("8");
                p.grdList.set_binddataset("dsList");
                p.grdList.getSetter("uFunction").set("checkbox");
                p.grdList.set_autofittype("col");
                p.grdList.move("58","568","100%","376",null,null);

                p.Panel01.set_taborder("10");
                p.Panel01.set_flexmainaxisalign("spacebetween");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("0","0","100%","34",null,null);

                p.divMain.set_taborder("0");
                p.divMain.set_text("Div00");
                p.divMain.set_cssclass("div_WF_Bg");
                p.divMain.set_fittocontents("height");
                p.divMain.move("0","0","100.00%","430",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_type("vertical");
                p.divGrd.set_verticalgap("10");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_spacing("0px 20px 10px 20px");
                p.divGrd.move("0","460","100.00%","410",null,null);

                p.btnAddRow.set_taborder("2");
                p.btnAddRow.set_text("추가");
                p.btnAddRow.set_fittocontents("width");
                p.btnAddRow.set_cssclass("btn_WF_Small");
                p.btnAddRow.move("416.00","0","65","34",null,null);

                p.btnDelRow.set_taborder("3");
                p.btnDelRow.set_text("선택삭제");
                p.btnDelRow.set_cssclass("btn_WF_SmallRed");
                p.btnDelRow.set_visible("true");
                p.btnDelRow.set_fittocontents("width");
                p.btnDelRow.move("804.00","10","69","34",null,null);

                p.staTotal.set_taborder("5");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTotal01.set_taborder("6");
                p.staTotal01.set_text("0");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("7");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);

                p.Panel00.set_taborder("9");
                p.Panel00.move("0","460","224","34",null,null);
            	}
            );
            obj.set_verticalgap("30");
            obj.set_type("vertical");
            obj.set_spacing("0px 0px 0px 0px");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divMain.move("20","27.544","100%","745",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 10px 0px 20px");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("30");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("나의물품등록");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.move("0","60","1420","870","60",null);

                p.Panel00.set_taborder("1");
                p.Panel00.move("540","-10","120","50",null,null);

                p.RaonkUpload.set_taborder("2");
                p.RaonkUpload.set_DevelopLangage("JAVA");
                p.RaonkUpload.set_ExtensionAllowOrLimit("1");
                p.RaonkUpload.set_HandlerUrl("/common/uploadDownload.do");
                p.RaonkUpload.set_RunTimes("html5");
                p.RaonkUpload.set_ButtonBarView("0");
                p.RaonkUpload.set_text("");
                p.RaonkUpload.set_DisableDeleteConfirm("1");
                p.RaonkUpload.set_positionstep("0");
                p.RaonkUpload.set_ExtensionArr("gif,png,jpg,jpge");
                p.RaonkUpload.set_AllowDuplicationFile("1");
                p.RaonkUpload.set_ImgPreView("1");
                p.RaonkUpload.set_visible("false");
                p.RaonkUpload.move("747","150","594","207",null,null);

                p.divTitle.set_taborder("3");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",390,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.set_text("div00");
                p.divForm.move("0","30","100%","2603",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.divMain.form.edtCmdtyNm","value","dsList","cmdtyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divMain.form.edtUnitNm","value","dsList","unitNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divMain.form.edtSpcfctNm","value","dsList","spcfctNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.divMain.form.cboCmdtySeCd","value","dsList","cmdtySeCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("CST012M00_test.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST012M00_test.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST012M00.xfdl
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

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

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
        this.fnSearch = function () {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	// 유저정보를 셋팅한다.
        	const gdsUser = nexacro.getApplication().gdsUser;

        	this.dsSearch.setColumn(0, "coId", gdsUser.getColumn(0, "coId"));
        	this.dsSearch.setColumn(0, "userId", gdsUser.getColumn(0, "userId"));

        	//메시지 DataSet 클리어
        	this.dsMsg.clearData();

        	var strSvcId    = "search";
        	var strSvcUrl   = "cst/pol/polCmdtyInfoInq.do";
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

        this.fnSearchFile = function () {
        	this.dsSearch.setColumn(0, "cmdtySn", this.dsList.getColumn(this.dsList.rowposition, "cmdtySn"));

        	var strSvcId    = "searchFile";
        	var strSvcUrl   = "cst/pol/selectPolCmdtyInfoFileList.do";
        	var inData      = "dsIn=dsSearch";
        	var outData     = "dsAtfl=dsAtfl";
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

        this.fnSave = function () {
        	//메시지 DataSet 클리어
        	this.dsMsg.clearData();

        	var strSvcId    = "save";
        	var strSvcUrl   = "cst/pol/polCmdtyInfoRegStrg.do";
        	var inData      = "dsList=dsList:A dsAtfl=dsAtfl:A";
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
        			this.divForm.form.divGrd.form.staTotal01.text = this.dsList.getRowCount();
        			this.divForm.form.divGrd.form.resetScroll();

        			break;

        		case "searchFile" :
        			//ImageViewer 설정(이미지 서버 경로 확인 필요)
        			/*
        			if(this.dsAtfl.getRowCount() == 0) {
        				this.divForm.form.divMain.form.ImageViewer.image = "";
        			} else {
        				this.divForm.form.divMain.form.ImageViewer.image = this.dsAtfl.getColumn(0, "flpth");
        			}
        			*/
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

        		case this.RaonkUpload.RAONKUPLOAD_UploadComplete.name :
        			if (this.dsAtfl.getRowCount() == 0 && this.dsAtfl.getDeletedRowCount() == 0) {
        				this.dsAtfl.addRow();
        				this.dsAtfl.applyChange();
        			}

        			// 파일 업로드 결과를 첨부파일 데이터셋에 설정
        			for(var i = 0; i < this.dsAtchRslt.rowcount; i++) {
        				// 첨부파일관리번호
        				this.dsAtfl.setColumn(0, "atflMngNo", this.dsAtchRslt.getColumn(i, "atflMngNo"));
        				this.dsAtfl.setColumn(0, "cmdtySn", this.dsList.getColumn(this.dsList.rowcount, "cmdtySn"));
        			}

                    // 저장
        			this.fnSave();

        			break;

        		default:
        			break;
        	}
        }

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function () {
        	this.fnSearch();
        }


        // 첨부 파일 추가
        this.fnAddAtfl = function(oFile) {
        	// 이미 첨부된 파일이 있으면 기존 파일 삭제
        	this.fnDelAtfl(oFile.upcolid, "D");

        	const oObj = {
        		"strCustomValue" : oFile.upcolid,
        		"atflMngNo" : this.dsList.getColumn(this.dsList.rowposition, "atflMngNo")
        	}

        	// RaonkUpload에 컬럼ID 설정
        	this.RaonkUpload.SetFileCustomValue(-1, JSON.stringify(oObj));

            // 첨부파일 DS에 추가
        	var nRow = this.dsAtfl.findRow("colId", oFile.upcolid);
                nRow = Math.max(nRow, 0) ? nRow : this.dsAtfl.addRow();

        	this.dsAtfl.setColumn(nRow, "cmdtySn"      , this.dsList.getColumn(this.dsList.rowposition, "cmdtySn"));
        	this.dsAtfl.setColumn(nRow, "atflMngNo"    , this.dsList.getColumn(this.dsList.rowposition, "atflMngNo"));
        	this.dsAtfl.setColumn(nRow, "currentRow"   , this.dsList.rowposition);  //
        	this.dsAtfl.setColumn(nRow, "jobSeCd"      , "POL");  // 작업구분
        	this.dsAtfl.setColumn(nRow, "jobTycoSeCd"  , "POL");  // 작업공종구분코드
        	this.dsAtfl.setColumn(nRow, "aplcfmNo"     , "");  // 신청서번호(서비스에서설정)
        	this.dsAtfl.setColumn(nRow, "atchFileNm"   , oFile.userdata.strName);  // 첨부파일명E
        	this.dsAtfl.setColumn(nRow, "atchFileMngNo", "");  // 첨부파일관리번호(Main화면(CST002M00)에서 파일 업로드 후 설정)
        	this.dsAtfl.setColumn(nRow, "colId"        , oFile.upcolid);  // 컬럼ID
        	this.dsAtfl.setColumn(nRow, "atchSeCd"     , oFile.upatchsecd);  // 첨부파일구분코드
        	this.dsAtfl.setColumn(nRow, "atchDtlSeCd"  , oFile.upatchdtlsecd);  // 첨부파일상세구분코드

        	// 첨부 파일 표출용 DS 설정
            this.fnSetAtflExprs( oFile.userdata.strName + '(' + oFile.userdata.nSize + ')'  // 파일풀명
        	                   , oFile.userdata.strName                                     // 원본파일명
        					   , oFile.userdata.nSize                                       // 파일크기
        					   , oFile.upcolid                                              // 컬럼ID
        						);
        };

        // 첨부 파일 삭제
        this.fnDelAtfl = function(colId, sMode) {
            // 존재하지 않으면 돌아감
        	if(this.gfnIsNull(colId) || this.gfnIsNull(this.dsFile.getColumn(0, colId + "_orgnlFileNm"))) { return; }
        	const sFileUniqueId = this.dsList.getColumn(this.dsList.rowposition, "fileUniqueId");

            // RaonkUpload mergeFile 삭제
        	if(this.RaonkUpload.GetListInfo().mergeFile) {
        	    this.RaonkUpload.GetListInfo().mergeFile.forEach(function(v, i, o) {
        			if (this.dsAtfl.getRowType(0) == Dataset.ROWTYPE_INSERT) {
        				if (this.gfnIsNull(v.uniqKey)) {
        					this.RaonkUpload.SetSelectFile(i, '0');
        					this.RaonkUpload.DeleteSelectedFile();
        				}
        			}

        			if (sMode == "D") {
        				if (!this.gfnIsNull(sFileUniqueId) && sFileUniqueId == v.uniqKey) {
        					this.RaonkUpload.SetSelectFile(i, '0');
        					this.RaonkUpload.DeleteSelectedFile();
        				}
        			}
        		}, this);
        	}

        	// 첨부파일 삭제
        	this.dsAtfl.deleteRow(this.dsAtfl.findRow("colId", colId));

        	// 첨부 파일 표출용 DS 설정
            this.fnSetAtflExprs("", "", "", colId);
        };

        // 첨부 파일 표출용 DS 설정
        this.fnSetAtflExprs = function(fullName, orgnlFileNm, fileSz, colId) {
        	// 화면에 표출할 파일정보를 그리드에 설정
        	if (this.dsFile.getRowCount() == 0) {
        		this.dsFile.addRow();
        	}
        	this.dsFile.setColumn(0, colId + "_fullName"   , fullName   );  // 파일풀명
        	this.dsFile.setColumn(0, colId + "_orgnlFileNm", orgnlFileNm);  // 원본파일명
        	this.dsFile.setColumn(0, colId + "_fileSz"     , fileSz     );  // 파일크기
        	this.dsFile.setColumn(0, colId + "_colId"      , this.gfnIsNull(fullName) ? "" : colId);  // 컬럼ID
        };


        this.fnFileTransfer = function () {

        	var obj = { "atchFileId" : ""         // 기존 첨부파일 있을 경우 입력
        			  , "bsnsSeCd"   : "TSPPOL"   // 업무구분코드(보호구역위해물품)
        			  , "prgrmId"    : this.name  // 프로그램ID (화면 ID)
        	};

        	this.RaonkUpload.AddFormData('params', JSON.stringify(obj));
        	this.RaonkUpload.Transfer();
        }

        // 첨부파일 셋팅
        this.fnMakeRaonKInfo = function (obj, nRow) {
        	// 등록중인 첨부파일 삭제
        	if(this.RaonkUpload.GetListInfo().mergeFile) {
        	    this.RaonkUpload.GetListInfo().mergeFile.forEach(function(v, i, o) {
        			if (this.gfnIsNull(v.uniqKey)) {
        				this.RaonkUpload.SetSelectFile(i, '0');
        				this.RaonkUpload.DeleteSelectedFile();
        			}
        		}, this);
        	}

        	// 파일만들기
        	const sOrgnlFileNm = obj.getColumn(nRow, "orgnlFileNm");

        	try {
        		// this.dsAtfl.clearData();
        		this.dsFile.clearData();

        		if (!this.gfnIsNull(sOrgnlFileNm)) {
        			this.dsFile.addRow();
        			this.dsFile.setColumn(0, "file_fullName", sOrgnlFileNm);
        			this.dsFile.setColumn(0, "file_orgnlFileNm", sOrgnlFileNm);
        			this.dsFile.setColumn(0, "file_fileSz", obj.getColumn(nRow, "fileSz"));
        			this.dsFile.setColumn(0, "file_colId", "file");
        			this.dsFile.applyChange();

        			const sAtflMngNo = obj.getColumn(nRow, "atflMngNo");
        			let sMatchCnt = 0;

        			if (this.RaonkUpload.GetListInfo().mergeFile) {
        				this.RaonkUpload.GetListInfo().mergeFile.forEach(function(v, i, o) {
        					if (sAtflMngNo == v.uniqKey) ++ sMatchCnt;
        				}, this);
        			}

        			if (sMatchCnt == 0) {
        				this.RaonkUpload.AddUploadedFile(obj.getColumn(nRow, "fileUniqueId")
        											   , sOrgnlFileNm
        											   , obj.getColumn(nRow, "flpth")
        											   , obj.getColumn(nRow, "fileSz")
        												, "file");
        			}

        		}
        		this.fnSearchFile();
        	} finally {
        		this.dsFile.applyChange();
        	}
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divMain_btnSave_onclick = function(obj,e)
        {
        	if (!this.gfnDsIsUpdated(this.dsList) && !this.gfnDsIsUpdated(this.dsFile)) {
        		this.gfnAlertMsg("msg", "MSG_004");	// 변경된 내역이 없습니다.
        		return;
        	}

        	// validation
        	// [물품명, 단위, 물품규격, 물품구분] 필수
        	const arrEssCols = new Array();
        	arrEssCols.push(["cmdtySeCd", "물품구분", this.divForm.form.divMain.form.cboCmdtySeCd]);
        	arrEssCols.push(["cmdtyNm", "물품명", this.divForm.form.divMain.form.edtCmdtyNm]);
        	arrEssCols.push(["unitNm", "단위", this.divForm.form.divMain.form.edtUnitNm]);
        	arrEssCols.push(["spcfctNm", "물품규격", this.divForm.form.divMain.form.edtSpcfctNm]);

        	for (let i=0; i<arrEssCols.length; i++) {
        		const arrEss = arrEssCols[i];
        		const nFindRow = this.dsList.findRowExpr(`dataset.parent.gfnIsNull(${arrEss[0]})`);

        		if (nFindRow > -1) {
        			this.dsList.rowposition = nFindRow;
        			arrEss[2].setFocus();
        			this.gfnAlertMsg("msg", "MSG_009", [arrEss[1]]); /// {0} 을/를 입력해 주세요.
        			return false;
        		}
        	};


        	// 저장하시겠습니까?
        	this.gfnConfirmMsg("msg", "MSG_003", (sMsgId, oRet) => {
        		if (!JSON.parse(oRet).result) return;
        		if(this.gfnDsIsUpdated(this.dsAtfl)) {  // 첨부파일 변경시
        			// 첨부파일 저장
        			this.fnFileTransfer();
        		} else {
        			this.fnSave();
        		}
        	}, null, null, null, null);
        };

        //추가 버튼
        this.divForm_divGrd_btnAddRow_onclick = function(obj,e)
        {
        	this.dsList.addRow();
        };

        //선택삭제 버튼
        this.divForm_divGrd_btnDelRow_onclick = function(obj,e)
        {
        	if (this.dsList.findRow("chk", "1") == -1) {
        		this.gfnAlertMsg("msg", "MSG_011", ["선택된 정보가 없습니다."]);
        		return;
        	}

        	for (let i=this.dsList.getRowCount()-1; i>=0; i--) {
        		if (this.dsList.getColumn(i, "chk") != 1) continue;
        		this.dsList.deleteRow(i);
        	}
        };

        // 파일업로드 시작
        this.divForm_divMain_Div01_btnFileUp_onclick = function(obj,e)
        {
        	this.RaonkUpload.OpenFileDialog();
        };


        this.RaonkUpload_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	trace(" >>> RaonkUpload_RAONKUPLOAD_CreationComplete")
        	// 업로드 솔루션이 초기 생성시 업로드 할 경로를 지정해야 한다.
        	// /CMM/YYYY/MM/DD/  <<== CMM은 업무별 폴더 지정이고 기본적으로 /년도/월/일 의 폴더 구조를 갖는다.
        	this.RaonkUpload.SetConfig('FolderNameRule', '/CST/POL/YYYY/MM/DD/');
        };

        this.RaonkUpload_RAONKUPLOAD_BeforeAddFile = function(obj, paramObj)
        {
        	trace(" >>> RaonkUpload_RAONKUPLOAD_BeforeAddFile")
        	console.log(paramObj);

        //	this.dsAtfl.clearData();

        	return true;
        };

        this.RaonkUpload_RAONKUPLOAD_AfterAddFile = function(obj, e)
        {
        	trace(" >>> RaonkUpload_RAONKUPLOAD_AfterAddFile")
            e.upcolid       = this.getFocus().upcolid       || "";  // 컬럼ID
        	e.upatchsecd    = this.getFocus().upatchsecd    || "";  // 첨부파일구분코드
        	e.upatchdtlsecd = this.getFocus().upatchdtlsecd || "";  // 첨부파일상세구분코드

        	// 첨부 파일 추가
        	this.fnAddAtfl(e);
        };

        this.RaonkUpload_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
        	trace(" >>> RaonkUpload_RAONKUPLOAD_OnError");
        	trace(paramObj.userdata.strMessage);

            // 파일 업로드 중 오류가 발생했습니다!
        	this.gfnAlertMsg(this.RaonkUpload.name, "MSG_011", [paramObj.userdata.strMessage]);
        };

        this.RaonkUpload_RAONKUPLOAD_UploadComplete = function(obj, e)
        {
        	trace(" >>> RaonkUpload_RAONKUPLOAD_UploadComplete")
        	var allListArray = this.RaonkUpload.GetListInfo("json");
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	console.log(allListArray);

        	this.gfnUploadComplete(e.eventid, allListArray, "dsAtchRslt", "fnCallback");
        };

        this.Grid_oncellclick = function(obj,e)
        {
        	// 그리드 내의 삭제버튼 클릭
            if(obj.getCurEditType() == "button") {
        		// 첨부 파일 삭제
        		this.fnDelAtfl(obj.upcolid, "D");
        	} else {
        		this.RaonkUpload.SetSelectFile(0, '0');
        		this.RaonkUpload.DownloadFile();
        	}
        };

        this.dsList_canrowposchange = function(obj,e)
        {
        	if (this.gfnDsIsUpdated(this.dsFile)) {
        		// {0}(을)를 하시겠습니까?
        		this.gfnConfirmMsg("msg", "CST_001", (sMsgId, oRet) => {
        			if (!JSON.parse(oRet).result) return;
        			this.fnDelAtfl("file");
        			this.dsFile.clearData();

        			obj.rowposition = e.newrow;
        		}, null, null, null, ["물품사진 정보가 변경되었습니다.\n진행"]);
        		return false;
        	}

        	return true;
        };

        this.dsList_onrowposchanged = function(obj,e)
        {
        	if (e.newrow == -1) return;
        	if (nexacro._Browser == "Runtime") return;

        	//e.neworw가 undefined 로 나와서 obj.rowposition 으로 변경
        	this.fnMakeRaonKInfo(obj, obj.rowposition);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divMain.form.btnSave.addEventHandler("onclick",this.divForm_divMain_btnSave_onclick,this);
            this.divForm.form.divMain.form.Div01.form.btnFileUp.addEventHandler("onclick",this.divForm_divMain_Div01_btnFileUp_onclick,this);
            this.divForm.form.divMain.form.Grid00.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.divForm.form.btnAddRow.addEventHandler("onclick",this.divForm_divGrd_btnAddRow_onclick,this);
            this.divForm.form.btnDelRow.addEventHandler("onclick",this.divForm_divGrd_btnDelRow_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsSearch.addEventHandler("onrowposchanged",this.dsSearch_onrowposchanged,this);
            this.dsAtfl.addEventHandler("onload",this.dsAtfl_onload,this);
        };
        this.loadIncludeScript("CST012M00_test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
