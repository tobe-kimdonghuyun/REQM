(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM013P03_2");
            this.set_titletext("파일등록(로컬PC)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0","100.00%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01","0","44","305","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btn_file_1","124","58","116","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panBtnFile00","433","58","305","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_file_1\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panTitle00","0","124","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnFile00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static00_00","88","123","48","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("파일수 : ");
            obj.set_fittocontents("width");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static01_00","165","143","9","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_fittocontents("width");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static02_00","293","131","13","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_text("개");
            obj.set_fittocontents("width");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panFileNum00","20","190","305","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Static02_00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btn_del_file_1","512","135","125","40",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("8");
            obj.set_text("전체파일삭제");
            obj.set_cssclass("btn_WF_FileDel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panBtnDel00","517","141","305","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("9");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn_del_file_1\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20","51","100%","46",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panFileNum00\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnDel00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","114","100%","200",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("11");
            obj.set_binddataset("dsFile1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panFile00","0","50","100%","380",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("12");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("1");
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
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00_02_01.set_taborder("0");
                p.staLabel00_02_01.set_text("첨부파일");
                p.staLabel00_02_01.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01.set_flexgrow("1");
                p.staLabel00_02_01.move("0","44","305","46",null,null);

                p.btn_file_1.set_taborder("1");
                p.btn_file_1.set_text("파일선택");
                p.btn_file_1.set_cssclass("btn_WF_FileUp");
                p.btn_file_1.move("124","58","116","40",null,null);

                p.panBtnFile00.set_taborder("2");
                p.panBtnFile00.set_flexgrow("1");
                p.panBtnFile00.set_flexcrossaxisalign("start");
                p.panBtnFile00.set_flexmainaxisalign("end");
                p.panBtnFile00.move("433","58","305","46",null,null);

                p.panTitle00.set_taborder("3");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.move("0","124","100%","46",null,null);

                p.Static00_00.set_taborder("4");
                p.Static00_00.set_text("파일수 : ");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.move("88","123","48","46",null,null);

                p.Static01_00.set_taborder("5");
                p.Static01_00.set_text("0");
                p.Static01_00.set_fittocontents("width");
                p.Static01_00.move("165","143","9","46",null,null);

                p.Static02_00.set_taborder("6");
                p.Static02_00.set_text("개");
                p.Static02_00.set_fittocontents("width");
                p.Static02_00.move("293","131","13","46",null,null);

                p.panFileNum00.set_taborder("7");
                p.panFileNum00.set_flexgrow("1");
                p.panFileNum00.set_horizontalgap("4");
                p.panFileNum00.move("20","190","305","46",null,null);

                p.btn_del_file_1.set_taborder("8");
                p.btn_del_file_1.set_text("전체파일삭제");
                p.btn_del_file_1.set_cssclass("btn_WF_FileDel");
                p.btn_del_file_1.set_fittocontents("width");
                p.btn_del_file_1.set_visible("false");
                p.btn_del_file_1.move("512","135","125","40",null,null);

                p.panBtnDel00.set_taborder("9");
                p.panBtnDel00.set_flexcrossaxisalign("center");
                p.panBtnDel00.set_flexmainaxisalign("end");
                p.panBtnDel00.set_flexgrow("1");
                p.panBtnDel00.move("517","141","305","46",null,null);

                p.Panel00_00.set_taborder("10");
                p.Panel00_00.move("20","51","100%","46",null,null);

                p.Grid00.set_taborder("11");
                p.Grid00.set_binddataset("dsFile1");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_cssclass("grd_WF_FileAdd");
                p.Grid00.move("20.00","114","100%","200",null,null);

                p.panFile00.set_taborder("12");
                p.panFile00.set_fittocontents("height");
                p.panFile00.set_spacing("10px 20px 10px 20px");
                p.panFile00.set_flexwrap("wrap");
                p.panFile00.set_verticalgap("4");
                p.panFile00.move("0","50","100%","380",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("30");
            obj.set_spacing("10px");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Phone_screen","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("30");
            obj.set_spacing("10px");
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
            obj = new Layout("Phone_screen","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1000,400,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("파일등록(로컬PC)");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0","100.00%",null,null,"0");

                p.divGuide.set_taborder("1");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Phone_screen","Phone_screen",480,420,this,
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM013P03_2.xfdl", function() {
        /********************************************************************
            created:	  2024/08/08
            filename: 	C:\developer\tsp_view\publishing\work\LIF\test.xfdl
            file path:	C:\developer\tsp_view\publishing\work\LIF
            file base: 	test
            file ext:	  xfdl
            author:

            purpose:
        *********************************************************************/

        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	test.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/08			조규완					최초생성
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
        	this.gfnFormOnload(obj); //필수함수
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 RAONK 별 EVENT 영역
        *******************************************************************************************************************************/
        // 파일 추가
        this.divForm_btn_file_1_onclick = function(obj,e)
        {
        	// 데이터의 첨부파일 관리번호 입력 컬럼명
        	this.parent.parent.parent.parent.parent.gvUploadCategory = "docFile";		// 컬럼ID
        	this.parent.parent.parent.parent.parent.RaonkUpload.OpenFileDialog();
        };

        // 파일 그리드 클릭 이벤트
        this.divForm_Grid00_oncellclick = function(obj,e)
        {
        	if(e.col == 1) 	// 삭제 버튼 클릭
        	{
        		var param = {
        			"row" : e.row,
        			"col" : e.col
        		};
        		this.parent.parent.parent.parent.parent.gfnConfirmMsg("file_del1", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"], param);
        	} else if(e.col == 0) // 파일명 클릭
        	{
        		this.gfnSelectFile(this.parent.parent.parent.parent.parent.RaonkUpload, this.dsFile1, e);
        	}
        };

        // 파일 그리드 더블클릭 이벤트
        this.divForm_Grid00_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.parent.parent.parent.parent.parent.gfnDownloadFile(this.parent.parent.parent.parent.parent.RaonkUpload, this.dsFile1, e);
        	}
        };

        this.divForm_btn_del_file_1_onclick = function(obj,e)
        {
        	this.parent.parent.parent.parent.parent.gfnConfirmMsg("file_all_del1", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.dsFile1_onvaluechanged = function(obj,e)
        {
        	this.divForm.form.Static01_00.text = this.dsFile1.rowcount;
        	if (this.dsFile1.rowcount > 0) {
        		this.divForm.form.btn_del_file_1.visible = true;
        	} else {
        		this.divForm.form.btn_del_file_1.visible = false;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.btn_file_1.addEventHandler("onclick",this.divForm_btn_file_1_onclick,this);
            this.divForm.form.btn_del_file_1.addEventHandler("onclick",this.divForm_btn_del_file_1_onclick,this);
            this.divForm.form.Grid00.addEventHandler("oncellclick",this.divForm_Grid00_oncellclick,this);
            this.divForm.form.Grid00.addEventHandler("oncelldblclick",this.divForm_Grid00_oncelldblclick,this);
            this.dsFile1.addEventHandler("onvaluechanged",this.dsFile1_onvaluechanged,this);
        };
        this.loadIncludeScript("COM013P03_2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
