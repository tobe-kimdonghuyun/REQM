(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleFile");
            this.set_titletext("파일 up/download");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ATTC_FILE_NM","type" : "STRING","size" : "256"},{"id" : "SERV_ATTC_FILE_NM","type" : "STRING","size" : "256"},{"id" : "ATTC_FILE_SIZE","type" : "STRING","size" : "256"},{"id" : "ATTC_FILE_TYPE","type" : "STRING","size" : "256"},{"id" : "ATTC_FILE_PATH","type" : "STRING","size" : "256"},{"id" : "ATTC_FILE_IDX","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpload", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "FileName","type" : "STRING","size" : "256"},{"id" : "Path","type" : "STRING","size" : "256"},{"id" : "FileSize","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTest", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "11","Column1" : "AA","Column2" : "가나다"},{"Column0" : "22","Column1" : "BB","Column2" : "가A나B"}]});
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtFile", this);
            obj.set_url("svcUrl::downloadFile.do");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("futFile", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdgFile", this);
            obj.getSetter("onclose").set("fdgFile_onclose");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","75","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("파일");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","Static00:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","Static01:15","0","194","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Up/Download");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","100",null,"128","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_SchBar");
            obj.set_text("");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","12","274","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSearchTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00_00\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearchTitle00","0","12","100","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("파일명");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","staSearchTitle00:0","12","274","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_accessibilitylabel("[@staSearchTitle00]");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","815","12","120","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Sch");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","divSearch:32",null,"476","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("40");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","253","300","476",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"grdList\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","253","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("파일리스트");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading4");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","301","100%","420",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsList");
            obj.set_flexgrow("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"107\"/><Column size=\"363\"/><Column size=\"80\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"37\"/></Rows><Band id=\"head\"><Cell text=\"IDX\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"파일 사이즈\"/></Band><Band id=\"body\"><Cell text=\"bind:ATTC_FILE_IDX\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ATTC_FILE_NM\"/><Cell col=\"2\" text=\"bind:ATTC_FILE_SIZE\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","365","253","521","476",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_tabstop("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem01\" componentid=\"Div00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","0","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","365","0","200","48",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("파일업로드");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","306","0","240","48",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_horizontalgap("8");
            obj.set_flexgrow("0");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnFileSelect\"/><PanelItem id=\"PanelItem01\" componentid=\"btnFileSave\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileSelect",null,null,"100","48","133","440",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("파일선택");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileSave",null,null,"100","48","0","440",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("파일저장");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","100%","420",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUpload","0","0",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsUpload");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"283\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"37\"/></Rows><Band id=\"head\"><Cell text=\"FileName\"/><Cell col=\"1\" text=\"Size\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:FileName\"/><Cell col=\"1\" text=\"bind:FileSize\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("staHelpMessage","20","60",null,null,"20","20",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("마우스로 파일을 끌어오세요");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_Mes");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("0");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_visible("false");
                p.Panel00.move("0","12","274","48",null,null);

                p.staSearchTitle00.set_taborder("1");
                p.staSearchTitle00.set_text("파일명");
                p.staSearchTitle00.set_cssclass("sta_WF_SchDetail");
                p.staSearchTitle00.set_fittocontents("width");
                p.staSearchTitle00.set_visible("false");
                p.staSearchTitle00.move("0","12","100","48",null,null);

                p.Edit00_00.set_taborder("2");
                p.Edit00_00.set_visible("false");
                p.Edit00_00.set_accessibilitylabel("[@staSearchTitle00]");
                p.Edit00_00.move("staSearchTitle00:0","12","274","48",null,null);

                p.btnSearch.set_taborder("3");
                p.btnSearch.set_text("조회");
                p.btnSearch.set_cssclass("btn_WF_Sch");
                p.btnSearch.set_visible("true");
                p.btnSearch.move("815","12","120","48",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_spacing("40px");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("16");
            obj.set_flexmainaxisalign("end");
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSearch.form
            obj = new Layout("Layout0","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_spacing("24px");
            obj.set_flexmainaxisalign("end");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("16");
            this.divSearch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdUpload.set_taborder("0");
                p.grdUpload.set_binddataset("dsUpload");
                p.grdUpload.set_autofittype("col");
                p.grdUpload.move("0","0",null,null,"0","0");

                p.staHelpMessage.set_taborder("1");
                p.staHelpMessage.set_text("마우스로 파일을 끌어오세요");
                p.staHelpMessage.set_visible("true");
                p.staHelpMessage.set_cssclass("sta_WF_Mes");
                p.staHelpMessage.move("20","60",null,null,"20","20");
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,830,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("파일 up/download");

                p.Static00.set_taborder("0");
                p.Static00.set_text("파일");
                p.Static00.set_cssclass("sta_WF_H2_pc");
                p.Static00.set_fittocontents("width");
                p.Static00.set_accessibilityrole("heading2");
                p.Static00.move("0","0","75","60",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_cssclass("sta_WF_line");
                p.Static01.set_accessibilityenable("false");
                p.Static01.move("Static00:15","20","1","21",null,null);

                p.Static00_02.set_taborder("2");
                p.Static00_02.set_text("Up/Download");
                p.Static00_02.set_cssclass("sta_WF_ParaH4_pc");
                p.Static00_02.move("Static01:15","0","194","60",null,null);

                p.divSearch.set_taborder("3");
                p.divSearch.set_cssclass("div_WF_SchBar");
                p.divSearch.set_text("");
                p.divSearch.set_visible("true");
                p.divSearch.set_fittocontents("height");
                p.divSearch.set_accessibilityenable("false");
                p.divSearch.move("0","100",null,"128","0",null);

                p.Panel04.set_taborder("4");
                p.Panel04.set_horizontalgap("24");
                p.Panel04.set_verticalgap("40");
                p.Panel04.set_flexwrap("wrap");
                p.Panel04.set_fittocontents("height");
                p.Panel04.move("0","divSearch:32",null,"476","0",null);

                p.Panel00.set_taborder("5");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_verticalgap("8");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("0","253","300","476",null,null);

                p.staTitle.set_taborder("6");
                p.staTitle.set_text("파일리스트");
                p.staTitle.set_cssclass("sta_WF_H4_pc");
                p.staTitle.set_accessibilityrole("heading4");
                p.staTitle.set_flexgrow("1");
                p.staTitle.move("0","253","100%","48",null,null);

                p.grdList.set_taborder("7");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_flexgrow("1");
                p.grdList.move("0","301","100%","420",null,null);

                p.Panel01.set_taborder("8");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_verticalgap("8");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_tabstop("false");
                p.Panel01.move("365","253","521","476",null,null);

                p.Panel03.set_taborder("9");
                p.Panel03.set_fittocontents("height");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_verticalgap("8");
                p.Panel03.set_flexgrow("1");
                p.Panel03.move("0","0","100%","48",null,null);

                p.staTitle00.set_taborder("10");
                p.staTitle00.set_text("파일업로드");
                p.staTitle00.set_cssclass("sta_WF_H4_pc");
                p.staTitle00.set_flexgrow("1");
                p.staTitle00.set_accessibilityrole("heading4");
                p.staTitle00.move("365","0","200","48",null,null);

                p.Panel02.set_taborder("11");
                p.Panel02.set_horizontalgap("8");
                p.Panel02.set_flexgrow("0");
                p.Panel02.set_flexmainaxisalign("end");
                p.Panel02.move("306","0","240","48",null,null);

                p.btnFileSelect.set_taborder("12");
                p.btnFileSelect.set_text("파일선택");
                p.btnFileSelect.set_visible("true");
                p.btnFileSelect.move(null,null,"100","48","133","440");

                p.btnFileSave.set_taborder("13");
                p.btnFileSave.set_text("파일저장");
                p.btnFileSave.move(null,null,"100","48","0","440");

                p.Div00.set_taborder("14");
                p.Div00.set_text("Div00");
                p.Div00.move("0","0","100%","420",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,1290,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSearch.move("0","100",null,"96","0",null);

                p.Panel04.move("0","divSearch:32",null,"992","0",null);

                p.grdList.set_flexgrow("1");

                p.Panel02.set_flexgrow("1");

                p.Panel00.move("0","253","300","476",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.Edit00_00","value","dsSearch","srchCond1");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleFile.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleFile.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/11/30
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/11/30			TOBESOFT					최초생성
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
        	this.gfnFormOnload(obj,e); //필수함수

        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        this.cfnSearch = function ()
        {
        	this.fnSearch();
        };

        this.cfnRefresh = function ()
        {
        	//TODO
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnSearch = function()
        {
        	// DB 저장이 아닌 현재 저장경로에 있는  fileList를 불러옴
        	var strSvcId 	= "searchFileList";
        	var strSvcUrl 	= "searchFileList.do";
        	var inData 		= "inDs=dsSearch";
        	var outData 	= "dsList=outDs";
        	var strArg 		= "";
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg);
        };


        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchFileList":
        			//TODO..
        			this.fnInit();
        			break;
        		default: break;
        	}
        };

        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	//TODO..
        };

        this.fnFileDialogCallback= function (objDs, objFileDialog, e)
        {
        	//TODO..
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function ()
        {
        	this.dsUpload.clearData();
        	this.futFile.clearFileList();

        	this.staHelpMessage.set_visible(true);
        };


        this.fnFileDownload = function (nRow)
        {
        	this.fdtFile.setPostData("filePath"		, this.dsList.getColumn(nRow, "ATTC_FILE_PATH"));
        	this.fdtFile.setPostData("saveFileName"	, this.dsList.getColumn(nRow, "SERV_ATTC_FILE_NM"));
        	this.fdtFile.setPostData("orgFileName"	, this.dsList.getColumn(nRow, "ATTC_FILE_NM"));

        	this.fdtFile.set_downloadfilename( this.dsList.getColumn(nRow, "ATTC_FILE_NM"))
        	this.fdtFile.download("svcUrl::downloadFile.do");
        };

        this.fnFileDialogOpen = function()
        {
        	this.fdgFile.open("file upload..", FileDialog.MULTILOAD);
        };

        this.fnFileUploadTran = function ()
        {
        	// 파일 업로드 시 Dataset 전달 샘플 코드
        	// PostData : Dataset 전달 --------------------------------------- Start
        	var listDs = [];
        		listDs.push(this.dsList);
        		listDs.push(this.dsTest);
        	var dsList = this.fnSerializeXML(listDs);
        	//var dsList = this.fnSerializeSSV(listDs);

        	dsList = encodeURIComponent(dsList);
        	this.futFile.setPostData("infoDatasets", dsList);

        	this.futFile.upload("svcUrl::uploadFile.do");
        };

        this.fnSetFile = function (aVFiles)
        {
        	if (system.navigatorname == "nexacro")
        	{
        		for (var i = 0; i < aVFiles.length; i++)
        		{
        			var vFile = new VirtualFile("vFile"+i);
        			vFile = aVFiles[i];
        			vFile.addEventHandler("onsuccess", function(obj, e) {
        				var nRow = -1;
        				switch (e.reason)
        				{
        					case 1 :	// open
        						obj.getFileSize();
        						break;
        					case 9 :	// getFileSize
        						if (e.filesize > 0)
        						{
        							var nRow = this.dsUpload.addRow();
        							this.dsUpload.setColumn(nRow, "FileName", obj.filename);
        							this.dsUpload.setColumn(nRow, "Path"	, e.fullpath);
        							this.dsUpload.setColumn(nRow, "FileSize", e.filesize);
        							this.futFile.addFile("VFile"+nRow, obj);
        						}
        						obj.close();
        						break;
        				}
        			}, this);

        			vFile.addEventHandler("onerror", function(obj, e) {
        				trace("errortype: "+e.errortype + " , "+ e.errormsg + " , "+  e.statuscode);
        			}, this);

        			vFile.open(null, VirtualFile.openRead);
        		}
        	}
        	else
        	{
        		for (var i = 0; i < aVFiles.length; i++)
        		{
        			this.futFile.addFile("VFile"+i, aVFiles[i]);
        			var nRow = this.dsUpload.addRow();
        			this.dsUpload.setColumn(nRow, "FileName", aVFiles[i].filename);
        			this.dsUpload.setColumn(nRow, "Path"	, aVFiles[i].fullpath);
        			this.dsUpload.setColumn(nRow, "FileSize", aVFiles[i]._handle.size);
        		}
        	}
        };

        // PlatformData 구성 : DataSet XML
        this.fnSerializeXML = function (arrDataset)
        {
        	var depth = 0;
        	var list = [];

        	if (system.navigatorname != "nexacro") {
        		//[START] xml 통신시 아래의 특수문자가 서버쪽 SAX parser 에러가 발생해서 임시 추가함.
        		this.fnWriteData(list, "<?xml version=\'1.0\' encoding=\'UTF-8\'?>", depth);
        		//this._writeData(list, "<!DOCTYPE p_nexacro [ <!ENTITY nbsp '&#160;'> <!ENTITY quot '&#34;'>" +
        		//		" <!ENTITY amp '&#38;'> <!ENTITY lt '&#60;'> <!ENTITY gt '&#62;'> ]>", depth);
        		//[END] xml 통신시 아래의 특수문자가 서버쪽 SAX parser 에러가 발생해서 임시 추가함.

        		this.fnWriteData(list, "<Root xmlns=\'http://www.nexacroplatform.com/platform/dataset\'>", depth++);

        		for (var i = 0; i < arrDataset.length; i++) {
        			list.push(arrDataset[i].saveXML(arrDataset.name, "normal", depth, false));
        		}

        		this.fnWriteData(list, "</Root>", --depth);

        		var rtnList = list.join("\n");

        	} else {
        		// 런타임의 경우.......... ???????
        		//[START] xml 통신시 아래의 특수문자가 서버쪽 SAX parser 에러가 발생해서 임시 추가함.
        		this.fnWriteData(list, "<?xml version=\'1.0\' encoding=\'UTF-8\'?>", depth);
        		//this._writeData(list, "<!DOCTYPE p_nexacro [ <!ENTITY nbsp '&#160;'> <!ENTITY quot '&#34;'>" +
        		//		" <!ENTITY amp '&#38;'> <!ENTITY lt '&#60;'> <!ENTITY gt '&#62;'> ]>", depth);
        		//[END] xml 통신시 아래의 특수문자가 서버쪽 SAX parser 에러가 발생해서 임시 추가함.

        		this.fnWriteData(list, "<Root xmlns=\'http://www.nexacroplatform.com/platform/dataset\'>", depth++);

        		for (var i = 0; i < arrDataset.length; i++) {
        			list.push(arrDataset[i].saveXML(arrDataset.name, "normal", depth, false));
        		}

        		this.fnWriteData(list, "</Root>", --depth);

        		var rtnList = list.join("\n");
        	}

        	return rtnList;
        };


        // PlatformData 구성 : DataSet
        this._TABS = ["", "\t", "\t\t", "\t\t\t", "\t\t\t\t", "\t\t\t\t\t", "\t\t\t\t\t\t"];
        this.fnWriteData = function (list, str, depth)
        {
        	list[list.length] = this._TABS[depth] + str;
        };

        // PlatformData 구성 : DataSet SSV
        this.fnSerializeSSV = function (arrDataset)
        {
        	var _rs_ = String.fromCharCode(30);
        	var _cs_ = String.fromCharCode(31);

        	var list = [];
        		list.push("SSV:utf-8" + _rs_);

        	// Dataset
        	for (var i = 0; i < arrDataset.length; i++) {
        		list.push(arrDataset[i].saveSSV(arrDataset[i].name, "normal"));
        	}

        	var rtnVal = list.join("");
        	return rtnVal;
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.grdList_oncelldblclick = function(obj,e)
        {
        	this.fnFileDownload(e.row);
        };

        this.fdtFile_onerror = function(obj,e)
        {
        	trace(e.errormsg + "}}"+ "fdtFile_onerror : " + e.requesturi +"__"+ e.locationuri);
        };

        this.fdtFile_onsuccess = function(obj,e)
        {
        	trace("fdtFile_onsuccess : " + e.targetfullpath);
        };

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        this.btnFileupload_onclick = function(obj,e)
        {
        	this.fnFileDialogOpen();
        };

        this.btnFileSave_onclick = function(obj,e)
        {
        	this.fnFileUploadTran();
        };


        this.fdgFile_onclose = function(obj,e)
        {
        	if( e.reason == 3 ){
        		this.fnSetFile(e.virtualfiles);
        	}
        };

        this.grdUpload_oncellclick = function(obj,e)
        {
        	if(e.col == 1) {
        		this.futFile.removeFile("VFile"+e.row);
        		this.dsUpload.deleteRow(this.dsUpload.rowposition);
        	}
        };


        this.futFile_onsuccess = function(obj,e)
        {
        	this.futFile.clearFileList();
        	this.dsUpload.clearData();

        	this.cfnSearch();
        };

        this.futFile_onerror = function(obj,e)
        {
        	this.gfnAlert("msg.server.error.msg" ,[e.errormsg]);
        };

        this.grdUpload_ondrop = function(obj,e)
        {
        	if(!this.gfnIsNull(e.filelist)){
        		this.fnSetFile(e.filelist);
        	}
        };

        this.grdUpload_ondragenter = function(obj,e)
        {
        	this.Div00.form.staHelpMessage.set_visible(false);
        };

        this.grdUpload_ondragleave = function(obj,e)
        {
        	if(!this.Div00.form.staHelpMessage.visible && this.dsUpload.getRowCount()==0){
        		this.Div00.form.staHelpMessage.set_visible(true);
        	}else{
        		this.Div00.form.staHelpMessage.set_visible(false);
        	}
        };

        this.dsUpload_onrowsetchanged = function(obj,e)
        {
        	if( obj.rowcount > 0 ){
        		this.staHelpMessage.set_visible(false);
        	}else{
        		this.staHelpMessage.set_visible(true);
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.btnFileSelect.addEventHandler("onclick",this.btnFileupload_onclick,this);
            this.btnFileSave.addEventHandler("onclick",this.btnFileSave_onclick,this);
            this.Div00.form.grdUpload.addEventHandler("oncellclick",this.grdUpload_oncellclick,this);
            this.Div00.form.grdUpload.addEventHandler("ondrop",this.grdUpload_ondrop,this);
            this.Div00.form.grdUpload.addEventHandler("ondragenter",this.grdUpload_ondragenter,this);
            this.Div00.form.grdUpload.addEventHandler("ondragleave",this.grdUpload_ondragleave,this);
            this.Div00.form.staHelpMessage.addEventHandler("onmouseenter",this.staHelpMessage_onmouseenter,this);
            this.fdtFile.addEventHandler("onerror",this.fdtFile_onerror,this);
            this.fdtFile.addEventHandler("onsuccess",this.fdtFile_onsuccess,this);
            this.futFile.addEventHandler("onsuccess",this.futFile_onsuccess,this);
            this.futFile.addEventHandler("onerror",this.futFile_onerror,this);
            this.dsUpload.addEventHandler("onrowsetchanged",this.dsUpload_onrowsetchanged,this);
        };
        this.loadIncludeScript("sampleFile.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
