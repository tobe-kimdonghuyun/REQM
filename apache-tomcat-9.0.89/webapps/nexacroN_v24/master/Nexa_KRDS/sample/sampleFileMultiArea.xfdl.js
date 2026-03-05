(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleFileMultiArea");
            this.set_titletext("파일 up/download");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ATTC_FILE_NM","type" : "STRING","size" : "256"},{"id" : "SERV_ATTC_FILE_NM","type" : "STRING","size" : "256"},{"id" : "ATTC_FILE_SIZE","type" : "STRING","size" : "256"},{"id" : "ATTC_FILE_TYPE","type" : "STRING","size" : "256"},{"id" : "ATTC_FILE_PATH","type" : "STRING","size" : "256"},{"id" : "ATTC_FILE_IDX","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpload", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "FileName","type" : "STRING","size" : "256"},{"id" : "Path","type" : "STRING","size" : "256"},{"id" : "FileSize","type" : "STRING","size" : "256"},{"id" : "FileId","type" : "STRING","size" : "256"},{"id" : "DivName","type" : "STRING","size" : "256"}]}});
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
            obj = new Static("Static00","0","0","220","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("파일 미리보기");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","Static00:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","Static01:15","0","159","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Upload");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","100",null,"128","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_SchBar");
            obj.set_text("");
            obj.set_visible("false");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","226","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_flexgrow("1");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSearchTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00_00\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearchTitle00","0","12","86","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("파일명");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","staSearchTitle00:0","12","140","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","905","12","120","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Sch");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle","0","divSearch:40",null,"38","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("파일리스트");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staTitle:16",null,"338","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_flexgrow("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"91\"/><Column size=\"323\"/><Column size=\"80\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"IDX\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"파일 사이즈\"/></Band><Band id=\"body\"><Cell text=\"bind:ATTC_FILE_IDX\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ATTC_FILE_NM\"/><Cell col=\"2\" text=\"bind:ATTC_FILE_SIZE\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","grdList:32",null,"38","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("이미지업로드");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","staTitle00:16",null,"342","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_verticalgap("16");
            obj.set_horizontalgap("24");
            obj.set_spacing("40px 40px 40px 40px");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"div1\"/><PanelItem id=\"PanelItem01\" componentid=\"div2\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("div1","424","354","296","262",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("div00");
            obj.set_flexgrow("1");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgPre","2","1",null,"260","40",null,null,null,null,null,this.div1.form);
            obj.set_taborder("0");
            obj.set_stretch("fit");
            obj.set_border("1px solid black");
            obj.set_text("");
            this.div1.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"1","32","32","0",null,null,null,null,null,this.div1.form);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_Delete");
            this.div1.addChild(obj.name, obj);

            obj = new Static("staHelpMessage1","45","130","40","20",null,null,null,null,null,null,this.div1.form);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_usedecorate("true");
            obj.set_cursor("pointer");
            obj.set_textAlign("center");
            obj.set_text("<fc v=\'blue\'><u v=\'true\'>여기를</u></fc>");
            this.div1.addChild(obj.name, obj);

            obj = new Static("staHelpMessage","24","103",null,"55","64",null,null,null,null,null,this.div1.form);
            obj.set_taborder("4");
            obj.set_text("마우스로 파일을 끌어오거나 \r\n<fc v=\'blue\'><u v=\'true\'>여기를</u></fc> 클릭하세요");
            obj.set_visible("true");
            obj.set_cursor("pointer");
            obj.set_usedecorate("true");
            obj.set_textAlign("center");
            this.div1.addChild(obj.name, obj);

            obj = new Div("div2",null,"354","296","262","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("div00");
            obj.set_flexgrow("1");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgPre","2","1",null,"260","42",null,null,null,null,null,this.div2.form);
            obj.set_taborder("0");
            obj.set_stretch("fit");
            obj.set_border("1px solid black");
            obj.set_text("");
            this.div2.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"1","32","32","0",null,null,null,null,null,this.div2.form);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_Delete");
            this.div2.addChild(obj.name, obj);

            obj = new Static("staHelpMessage","24","103",null,"55","64",null,null,null,null,null,this.div2.form);
            obj.set_taborder("2");
            obj.set_text("마우스로 파일을 끌어오거나 \r\n<fc v=\'blue\'><u v=\'true\'>여기를</u></fc> 클릭하세요");
            obj.set_visible("true");
            obj.set_usedecorate("true");
            obj.set_cursor("pointer");
            obj.set_textAlign("center");
            this.div2.addChild(obj.name, obj);

            obj = new Static("staHelpMessage1","45","130","40","20",null,null,null,null,null,null,this.div2.form);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_usedecorate("true");
            obj.set_cursor("pointer");
            obj.set_textAlign("center");
            obj.set_text("<fc v=\'blue\'><u v=\'true\'>여기를</u></fc>");
            this.div2.addChild(obj.name, obj);

            obj = new Grid("grd00","0","Panel01:24",null,"164","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsUpload");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"237\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"DivName\"/><Cell col=\"1\" text=\"FileName\"/><Cell col=\"2\" text=\"FileSize\"/><Cell col=\"3\" text=\"FileId\"/><Cell col=\"4\" text=\"Path\"/></Band><Band id=\"body\"><Cell text=\"bind:DivName\"/><Cell col=\"1\" text=\"bind:FileName\"/><Cell col=\"2\" text=\"bind:FileSize\"/><Cell col=\"3\" text=\"bind:FileId\"/><Cell col=\"4\" text=\"bind:Path\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileSave",null,"grd00:40","100","48","40",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("파일저장");
            this.addChild(obj.name, obj);
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
                p.Panel00.move("0","0","226","48",null,null);

                p.staSearchTitle00.set_taborder("1");
                p.staSearchTitle00.set_text("파일명");
                p.staSearchTitle00.set_cssclass("sta_WF_SchDetail");
                p.staSearchTitle00.set_fittocontents("width");
                p.staSearchTitle00.set_visible("false");
                p.staSearchTitle00.move("0","12","86","48",null,null);

                p.Edit00_00.set_taborder("2");
                p.Edit00_00.set_visible("false");
                p.Edit00_00.move("staSearchTitle00:0","12","140","48",null,null);

                p.btnSearch.set_taborder("3");
                p.btnSearch.set_text("조회");
                p.btnSearch.set_cssclass("btn_WF_Sch");
                p.btnSearch.set_visible("false");
                p.btnSearch.move("905","12","120","48",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("16");
            obj.set_spacing("40px 40px 40px 40px ");
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
            obj.set_spacing("24px 24px 24px 24px");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("16");
            this.divSearch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div1.form
            obj = new Layout("default","",0,0,this.div1.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.imgPre.set_taborder("0");
                p.imgPre.set_stretch("fit");
                p.imgPre.set_border("1px solid black");
                p.imgPre.set_text("");
                p.imgPre.move("2","1",null,"260","40",null);

                p.btnDel.set_taborder("1");
                p.btnDel.set_visible("false");
                p.btnDel.set_cssclass("btn_WF_Delete");
                p.btnDel.move(null,"1","32","32","0",null);

                p.staHelpMessage1.set_taborder("2");
                p.staHelpMessage1.set_visible("false");
                p.staHelpMessage1.set_usedecorate("true");
                p.staHelpMessage1.set_cursor("pointer");
                p.staHelpMessage1.set_textAlign("center");
                p.staHelpMessage1.set_text("<fc v=\'blue\'><u v=\'true\'>여기를</u></fc>");
                p.staHelpMessage1.move("45","130","40","20",null,null);

                p.staHelpMessage.set_taborder("4");
                p.staHelpMessage.set_text("마우스로 파일을 끌어오거나 \r\n<fc v=\'blue\'><u v=\'true\'>여기를</u></fc> 클릭하세요");
                p.staHelpMessage.set_visible("true");
                p.staHelpMessage.set_cursor("pointer");
                p.staHelpMessage.set_usedecorate("true");
                p.staHelpMessage.set_textAlign("center");
                p.staHelpMessage.move("24","103",null,"55","64",null);
            	}
            );
            this.div1.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div1.form
            obj = new Layout("Layout0","",0,0,this.div1.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.div1.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div2.form
            obj = new Layout("default","",0,0,this.div2.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.imgPre.set_taborder("0");
                p.imgPre.set_stretch("fit");
                p.imgPre.set_border("1px solid black");
                p.imgPre.set_text("");
                p.imgPre.move("2","1",null,"260","42",null);

                p.btnDel.set_taborder("1");
                p.btnDel.set_visible("false");
                p.btnDel.set_cssclass("btn_WF_Delete");
                p.btnDel.move(null,"1","32","32","0",null);

                p.staHelpMessage.set_taborder("2");
                p.staHelpMessage.set_text("마우스로 파일을 끌어오거나 \r\n<fc v=\'blue\'><u v=\'true\'>여기를</u></fc> 클릭하세요");
                p.staHelpMessage.set_visible("true");
                p.staHelpMessage.set_usedecorate("true");
                p.staHelpMessage.set_cursor("pointer");
                p.staHelpMessage.set_textAlign("center");
                p.staHelpMessage.move("24","103",null,"55","64",null);

                p.staHelpMessage1.set_taborder("3");
                p.staHelpMessage1.set_visible("false");
                p.staHelpMessage1.set_usedecorate("true");
                p.staHelpMessage1.set_cursor("pointer");
                p.staHelpMessage1.set_textAlign("center");
                p.staHelpMessage1.set_text("<fc v=\'blue\'><u v=\'true\'>여기를</u></fc>");
                p.staHelpMessage1.move("45","130","40","20",null,null);
            	}
            );
            this.div2.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div2.form
            obj = new Layout("Layout0","",0,0,this.div2.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.div2.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,1400,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("파일 up/download");

                p.Static00.set_taborder("0");
                p.Static00.set_text("파일 미리보기");
                p.Static00.set_cssclass("sta_WF_H2_pc");
                p.Static00.set_fittocontents("width");
                p.Static00.set_accessibilityrole("heading2");
                p.Static00.move("0","0","220","60",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_cssclass("sta_WF_line");
                p.Static01.move("Static00:15","20","1","21",null,null);

                p.Static00_02.set_taborder("2");
                p.Static00_02.set_text("Upload");
                p.Static00_02.set_cssclass("sta_WF_ParaH4_pc");
                p.Static00_02.move("Static01:15","0","159","60",null,null);

                p.divSearch.set_taborder("3");
                p.divSearch.set_cssclass("div_WF_SchBar");
                p.divSearch.set_text("");
                p.divSearch.set_visible("false");
                p.divSearch.set_fittocontents("height");
                p.divSearch.set_accessibilityenable("false");
                p.divSearch.move("0","100",null,"128","0",null);

                p.staTitle.set_taborder("4");
                p.staTitle.set_text("파일리스트");
                p.staTitle.set_cssclass("sta_WF_H4_pc");
                p.staTitle.set_flexgrow("1");
                p.staTitle.set_accessibilityrole("heading3");
                p.staTitle.move("0","divSearch:40",null,"38","0",null);

                p.grdList.set_taborder("5");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("col");
                p.grdList.set_flexgrow("1");
                p.grdList.move("0","staTitle:16",null,"338","0",null);

                p.staTitle00.set_taborder("6");
                p.staTitle00.set_text("이미지업로드");
                p.staTitle00.set_cssclass("sta_WF_H4_pc");
                p.staTitle00.set_flexgrow("1");
                p.staTitle00.set_accessibilityrole("heading3");
                p.staTitle00.move("0","grdList:32",null,"38","0",null);

                p.Panel01.set_taborder("7");
                p.Panel01.set_verticalgap("16");
                p.Panel01.set_horizontalgap("24");
                p.Panel01.set_spacing("40px 40px 40px 40px");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_cssclass("pnl_WF_Detailbox");
                p.Panel01.move("0","staTitle00:16",null,"342","0",null);

                p.div1.set_taborder("8");
                p.div1.set_text("div00");
                p.div1.set_flexgrow("1");
                p.div1.set_accessibilityenable("false");
                p.div1.move("424","354","296","262",null,null);

                p.div2.set_taborder("9");
                p.div2.set_text("div00");
                p.div2.set_flexgrow("1");
                p.div2.set_accessibilityenable("false");
                p.div2.move(null,"354","296","262","0",null);

                p.grd00.set_taborder("10");
                p.grd00.set_binddataset("dsUpload");
                p.grd00.set_cellsizingtype("col");
                p.grd00.set_autofittype("col");
                p.grd00.set_fillareatype("allrow");
                p.grd00.move("0","Panel01:24",null,"164","0",null);

                p.btnFileSave.set_taborder("11");
                p.btnFileSave.set_text("파일저장");
                p.btnFileSave.move(null,"grd00:40","100","48","40",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,1400,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSearch.move("0","100",null,"96","0",null);
            	}
            );
            obj.set_mobileorientation("Portrait");
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
        this.registerScript("sampleFileMultiArea.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleFileMultiArea.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/11/30
        *  @Description    이미지 파일 미리보기 기능(only html5)
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2022/08/17			TOBESOFT					최초생성
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
        	this.dsUpload.sDiv = "div1";
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
        		//	this.fnInit();
        			this.dsUpload.clearData();
        			this.futFile.clearFileList();
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
        	this.fnHelpMessage(this.div1, true);
        	this.fnHelpMessage(this.div2, true);
        	this.div1.form.btnDel.set_visible(false);
        	this.div2.form.btnDel.set_visible(false);

        	this.dsUpload.clearData();
        	this.futFile.clearFileList();
        };

        this.fnFileDownload = function (nRow)
        {
        	this.fdtFile.setPostData("filePath"		, this.dsList.getColumn(nRow, "ATTC_FILE_PATH"));
        	this.fdtFile.setPostData("saveFileName"	, this.dsList.getColumn(nRow, "SERV_ATTC_FILE_NM"));
        	this.fdtFile.setPostData("orgFileName"	, this.dsList.getColumn(nRow, "ATTC_FILE_NM"));

        	this.fdtFile.set_downloadfilename( this.dsList.getColumn(nRow, "ATTC_FILE_NM"))
        	this.fdtFile.download("svcUrl::downloadFile.do");
        };

        this.fnFileDialogOpen = function(sDiv)
        {
        	this.fdgFile.sDiv = sDiv;
        	this.fdgFile.open("file_upload", FileDialog.LOAD);
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


        this.fnSetFile = function (aVFiles, sDiv)
        {
        	var aVFile = aVFiles[0];
        	var id = aVFile.id;
        	var sName = aVFile.filename;
        	var nSize = aVFile._handle.size;
        	var fileExt = sName.slice(sName.lastIndexOf(".")+1).toLowerCase();
        	var imgExt = ["jpg", "jpeg", "gif", "png", "bmp"];

        	if (imgExt.indexOf(fileExt) == -1)
        	{
        		this.gfnAlert("msg.file.allowtype", [fileExt, imgExt]);
        		return;
        	}

        	if (this.dsUpload.findRow("FileName", sName) > -1)
        	{
        		this.gfnAlert("msg.file.exist", [sName]);

        		if (this.gfnIsNull(this.components[sDiv].form.imgPre.image))
        		{
        			this.fnHelpMessage(this.components[sDiv], true);
        		}
        		return;
        	}

        	if (system.navigatorname == "nexacro")
        	{
        		var vFile = new VirtualFile("vFile");
        		vFile = aVFile;
        		vFile.addEventHandler("onsuccess", function(obj, e) {
        			switch (e.reason)
        			{
        				case 1 :	// open
        					obj.getFileSize();
        					break;
        				case 9 :	// getFileSize
        					if (e.filesize > 0)
        					{
        						if (e.filesize > 10485760)
        						{
        							this.gfnAlert("msg.file.filesize", ["10"]);
        							return;
        						}

        						this.dsUpload.sDiv = sDiv;
        						this.futFile.addFile(id, obj);

        						var nRow = this.dsUpload.findRow("DivName", sDiv);
        						if (nRow == -1)
        						{
        							nRow = this.dsUpload.addRow();
        						}

        						this.dsUpload.setColumn(nRow, "FileName", obj.filename);
        						this.dsUpload.setColumn(nRow, "Path"	, e.fullpath);
        						this.dsUpload.setColumn(nRow, "FileSize", e.filesize);
        						this.dsUpload.setColumn(nRow, "FileId"	, id);
        						this.dsUpload.setColumn(nRow, "DivName"	, sDiv);
        						this.components[sDiv].form.imgPre.set_image("URL('file://"+aVFile.fullpath+"')");
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
        	else
        	{
        		if (nSize > 10485760)
        		{
        			this.gfnAlert("msg.file.filesize", ["10"]);
        			return;
        		}

        		this.dsUpload.sDiv = sDiv;
        		this.futFile.addFile(id, aVFile);

        		var nRow = this.dsUpload.findRow("DivName", sDiv);
        		if (nRow == -1)
        		{
        			nRow = this.dsUpload.addRow();
        		}

        		this.dsUpload.setColumn(nRow, "FileName", sName);
        		this.dsUpload.setColumn(nRow, "Path"	, aVFile.fullpath);
        		this.dsUpload.setColumn(nRow, "FileSize", nSize);
        		this.dsUpload.setColumn(nRow, "FileId"	, id);
        		this.dsUpload.setColumn(nRow, "DivName"	, sDiv);

        		//브라우저 실행시
        		//if ( /\.(jpe?g|png|gif)$/i.test(filelist[0].filename) ) {
        		var reader = new FileReader();
        		reader.targetForm = this;
        		reader.addEventListener("load", function () {
        			reader.targetForm.components[sDiv].form.imgPre.set_image(this.result);
        		}, false);
        		reader.readAsDataURL(aVFile._handle);
        	}
        };

        // PlatformData 구성 : DataSet XML
        this.fnSerializeXML = function (arrDataset)
        {
        	var depth = 0;
        	var list = [];

        	if (system.navigatorname != "nexacro")
        	{
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
        	else
        	{
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

        /*
         * @class static 안내메세지 보이기/숨기기 처리
         * @param {Object} oComp - div Object
         * @param {Boolean} bFlag - [true/false]
         */
        this.fnHelpMessage = function (oComp, bFlag)
        {
        	oComp.form.components["staHelpMessage"].set_visible(bFlag);
        	oComp.form.components["staHelpMessage1"].set_visible(bFlag);
        };


        this.fnReadImageFile = function(filelist, oComp)
        {
        	if (filelist)
        	{
        		if (filelist.length > 1)
        		{
        			this.gfnAlert("msg.noselect",["하나의 파일을"]);

        			if (this.gfnIsNull(oComp.parent.components["imgPre"].image))
        			{
        				this.fnHelpMessage(oComp.parent.parent, true);
        			}
        		}
        		else
        		{
        			this.fnHelpMessage(oComp.parent.parent, false);	//static메세지 처리
        			this.fnSetFile(filelist, oComp.parent.parent.name);
        		}
        	}
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

        this.btnFileSave_onclick = function(obj,e)
        {
        	if (this.dsUpload.findRow("DivName", "div1") == -1)
        	{
        		this.gfnAlert("msg.err.validator.required" ,["첫번째 이미지"]);
        	}
        	else if (this.dsUpload.findRow("DivName", "div2") == -1)
        	{
        		this.gfnAlert("msg.err.validator.required" ,["두번째 이미지"]);
        	}
        	else
        	{
        		this.fnFileUploadTran();
        	}
        };

        this.fdgFile_onclose = function(obj,e)
        {
        	if ( e.reason == 1 )
        	{
        		var oComp = obj.sDiv;
        		this.fnHelpMessage(oComp, false);
        		this.fnSetFile(e.virtualfiles, oComp.name);
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

        this.dsUpload_onrowsetchanged = function(obj,e)
        {
        	if (e.reason == Dataset.REASON_CLEARDATA)
        	{
        		return;
        	}

        	var objForm = this.components[obj.sDiv].form;
        	if( obj.rowcount > 0 )
        	{
        		objForm.staHelpMessage.set_visible(false);
        		objForm.staHelpMessage1.set_visible(false);
        		objForm.btnDel.set_visible(true);
        	}
        	else
        	{
        		objForm.staHelpMessage.set_visible(true);
        		objForm.staHelpMessage1.set_visible(true);
        		objForm.btnDel.set_visible(false);
        	}
        };

        this.imgPre_ondragleave = function(obj,e)
        {
        	var objStaHelp = obj.parent.components["staHelpMessage"];
        	var objBtnDel = obj.parent.components["btnDel"];

        	if (!objStaHelp.visible && this.dsUpload.getRowCount() == 0)
        	{
        		this.fnHelpMessage(obj.parent.parent, true);
        	}
        	else
        	{
        		this.fnHelpMessage(obj.parent.parent, false);

        		if (this.gfnIsNull(obj.image))
        		{
        			this.fnHelpMessage(obj.parent.parent, true);
        		}
        	}
        };

        this.imgPre_ondrop = function(obj,e)
        {
        	if (e.datatype == "file")
        	{
        		this.fnReadImageFile(e.filelist, obj);
        	}
        };

        this.imgPre_ondragenter = function(obj,e)
        {
        	this.fnHelpMessage(obj.parent.parent, false);
        };

        this.btnDel_onclick = function(obj,e)
        {
        	var nRow = this.dsUpload.findRow("DivName", obj.parent.parent.name);
        	this.futFile.removeFile(this.dsUpload.getColumn(nRow, "FileId"));
        	this.dsUpload.deleteRow(nRow);
        	obj.parent.components["imgPre"].set_image("");
        	this.fnHelpMessage(obj.parent.parent, true);
        	obj.set_visible(false);
        };

        this.staHelpMessage_onclick = function(obj,e)
        {
        	this.fnFileDialogOpen(obj.parent.parent);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.div1.form.imgPre.addEventHandler("ondragleave",this.imgPre_ondragleave,this);
            this.div1.form.imgPre.addEventHandler("ondrop",this.imgPre_ondrop,this);
            this.div1.form.imgPre.addEventHandler("ondragenter",this.imgPre_ondragenter,this);
            this.div1.form.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.div1.form.staHelpMessage1.addEventHandler("onclick",this.staHelpMessage_onclick,this);
            this.div1.form.staHelpMessage.addEventHandler("onclick",this.staHelpMessage_onclick,this);
            this.div2.form.imgPre.addEventHandler("ondragleave",this.imgPre_ondragleave,this);
            this.div2.form.imgPre.addEventHandler("ondrop",this.imgPre_ondrop,this);
            this.div2.form.imgPre.addEventHandler("ondragenter",this.imgPre_ondragenter,this);
            this.div2.form.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.div2.form.staHelpMessage.addEventHandler("onclick",this.staHelpMessage_onclick,this);
            this.div2.form.staHelpMessage1.addEventHandler("onclick",this.staHelpMessage_onclick,this);
            this.btnFileSave.addEventHandler("onclick",this.btnFileSave_onclick,this);
            this.fdtFile.addEventHandler("onerror",this.fdtFile_onerror,this);
            this.fdtFile.addEventHandler("onsuccess",this.fdtFile_onsuccess,this);
            this.futFile.addEventHandler("onsuccess",this.futFile_onsuccess,this);
            this.futFile.addEventHandler("onerror",this.futFile_onerror,this);
            this.dsUpload.addEventHandler("onrowsetchanged",this.dsUpload_onrowsetchanged,this);
        };
        this.loadIncludeScript("sampleFileMultiArea.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
