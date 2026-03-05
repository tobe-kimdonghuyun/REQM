(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM013P03");
            this.set_titletext("파일등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"docboxId\" type=\"STRING\" size=\"256\"/><Column id=\"regCoCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"docClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplySe\" type=\"STRING\" size=\"256\"/><Column id=\"srvcSe\" type=\"STRING\" size=\"256\"/><Column id=\"artclSe\" type=\"STRING\" size=\"256\"/><Column id=\"docNm\" type=\"STRING\" size=\"256\"/><Column id=\"docVldDrtn\" type=\"STRING\" size=\"256\"/><Column id=\"prvcInclYn\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","20","10",null,null,"20","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_async("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","167","90","100%","450",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"tab00\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Tab("tab00","197.00","695","100%","450",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            obj.set_preload("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.divForm.form.tab00);
            obj.set_text("문서함");
            obj.set_url("work::COM/doc/COM013P03_1.xfdl");
            this.divForm.form.tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.divForm.form.tab00);
            obj.set_text("로컬PC");
            obj.set_url("work::COM/doc/COM013P03_2.xfdl");
            this.divForm.form.tab00.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0",null,"100%","60",null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","-975","0","91.50%","200",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_DevelopLangage("JAVA");
            obj.set_ExtensionAllowOrLimit("1");
            obj.set_HandlerUrl("/common/uploadDownload.do");
            obj.set_RunTimes("html5");
            obj.set_ButtonBarView("0");
            obj.set_visible("false");
            obj.set_AllowDuplicationFile("1");
            obj.set_text("");
            obj.set_DisableDeleteConfirm("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.tab00.Tabpage1
            obj = new Layout("default","",0,0,this.divForm.form.tab00.Tabpage1.form,function(p){});
            this.divForm.form.tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.tab00.Tabpage2
            obj = new Layout("default","",0,0,this.divForm.form.tab00.Tabpage2.form,function(p){});
            this.divForm.form.tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("0");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("167","90","100%","450",null,null);

                p.tab00.set_taborder("1");
                p.tab00.set_tabindex("0");
                p.tab00.set_showextrabutton("true");
                p.tab00.set_preload("false");
                p.tab00.move("197.00","695","100%","450",null,null);

                p.tab00.Tabpage1.set_text("문서함");
                p.tab00.Tabpage1.set_url("work::COM/doc/COM013P03_1.xfdl");

                p.tab00.Tabpage2.set_text("로컬PC");
                p.tab00.Tabpage2.set_url("work::COM/doc/COM013P03_2.xfdl");
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_spacing("0px 10px 0px 20px");
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_00.set_taborder("1");
                p.Button00_00.set_text("확인");
                p.Button00_00.set_cssclass("btn_WF_Yes");
                p.Button00_00.move("457.00","30","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divPopBtn.form,
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
            obj = new Layout("default","Desktop_screen",1000,550,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("파일등록");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_async("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("20","10",null,null,"20","60");

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0",null,"100%","60",null,"0");

                p.RaonkUpload.set_taborder("2");
                p.RaonkUpload.set_DevelopLangage("JAVA");
                p.RaonkUpload.set_ExtensionAllowOrLimit("1");
                p.RaonkUpload.set_HandlerUrl("/common/uploadDownload.do");
                p.RaonkUpload.set_RunTimes("html5");
                p.RaonkUpload.set_ButtonBarView("0");
                p.RaonkUpload.set_visible("false");
                p.RaonkUpload.set_AllowDuplicationFile("1");
                p.RaonkUpload.set_text("");
                p.RaonkUpload.set_DisableDeleteConfirm("1");
                p.RaonkUpload.move("-975","0","91.50%","200",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,560,this,
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
            this._addPreloadList("fdl","work::COM/doc/COM013P03_1.xfdl");
            this._addPreloadList("fdl","work::COM/doc/COM013P03_2.xfdl");
        };
        
        // User Script
        this.registerScript("COM013P03.xfdl", function() {
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
        * 2024/09/27			조규완						최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
        var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
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
        this.cfnClose = function()
        {
        	// 문서함에서 선택한 dsList setting
        	var chk = this.divForm.form.tab00.Tabpage1.form.dsList.extractRows("chk == '1'");

        	var docArr = [];

        	for(var i=0;i<chk.length;i++) {

        		var docboxId = this.divForm.form.tab00.Tabpage1.form.dsList.getColumn(chk[i], "docboxId");
        		var regCoCd = this.divForm.form.tab00.Tabpage1.form.dsList.getColumn(chk[i], "regCoCd");
        		var rgtrId = this.divForm.form.tab00.Tabpage1.form.dsList.getColumn(chk[i], "rgtrId");
        		var docClsfCd = this.divForm.form.tab00.Tabpage1.form.dsList.getColumn(chk[i], "docClsfCd");
        		var aplySe = this.divForm.form.tab00.Tabpage1.form.dsList.getColumn(chk[i], "aplySe");
        		var srvcSe = this.divForm.form.tab00.Tabpage1.form.dsList.getColumn(chk[i], "srvcSe");
        		var artclSe = this.divForm.form.tab00.Tabpage1.form.dsList.getColumn(chk[i], "artclSe");
        		var docNm = this.divForm.form.tab00.Tabpage1.form.dsList.getColumn(chk[i], "docNm");
        		var docVldDrtn = this.divForm.form.tab00.Tabpage1.form.dsList.getColumn(chk[i], "docVldDrtn");
        		var prvcInclYn = this.divForm.form.tab00.Tabpage1.form.dsList.getColumn(chk[i], "prvcInclYn");
        		var atflMngNo = this.divForm.form.tab00.Tabpage1.form.dsList.getColumn(chk[i], "atflMngNo");
        		var frstRegDt = this.divForm.form.tab00.Tabpage1.form.dsList.getColumn(chk[i], "frstRegDt");
        		var coId = this.divForm.form.tab00.Tabpage1.form.dsList.getColumn(chk[i], "coId");
        		var coNm = this.divForm.form.tab00.Tabpage1.form.dsList.getColumn(chk[i], "coNm");
        		var userId = this.divForm.form.tab00.Tabpage1.form.dsList.getColumn(chk[i], "userId");
        		var userNm = this.divForm.form.tab00.Tabpage1.form.dsList.getColumn(chk[i], "userNm");
        		var orgnlFileNm = this.divForm.form.tab00.Tabpage1.form.dsList.getColumn(chk[i], "orgnlFileNm");

        		var docPbj = {
        			"docboxId" : docboxId,
        			"regCoCd" : regCoCd,
        			"rgtrId" : rgtrId,
        			"docClsfCd" : docClsfCd,
        			"aplySe" : aplySe,
        			"srvcSe" : srvcSe,
        			"artclSe" : artclSe,
        			"docNm" : docNm,
        			"docVldDrtn" : docVldDrtn,
        			"prvcInclYn" : prvcInclYn,
        			"atflMngNo" : atflMngNo,
        			"frstRegDt" : frstRegDt,
        			"coId" : coId,
        			"coNm" : coNm,
        			"userId" : userId,
        			"userNm" : userNm,
        			"orgnlFileNm" : orgnlFileNm
        		};

        		docArr.push(docPbj);
        	}

        	// 첨부파일로 들어온 dsFile setting
        	var fileArr = [];

        	for(var i=0; i<this.dsFile.rowcount; i++) {

        		var colId = this.dsFile.getColumn(i, "colId");
        		var atflMngNo = this.dsFile.getColumn(0, "atflMngNo");
        		var type = this.dsFile.getColumn(0, "type");

        		var filePbj = {
        			"colId" : colId,
        			"atflMngNo" : atflMngNo,
        			"type" : type
        		};

        		fileArr.push(filePbj);
        	}

        	// 첨부파일로 들어온 dsFile1 setting
        	var fileArr1 = [];

        	for(var i=0; i<this.dsFile1.rowcount; i++) {

        		var fullName = this.dsFile1.getColumn(i, "fullName");
        		var orgnlFileNm = this.dsFile1.getColumn(i, "orgnlFileNm");
        		var fileSz = this.dsFile1.getColumn(i, "fileSz");
        		var atflMngSno = this.dsFile1.getColumn(i, "atflMngSno");
        		var flpth = this.dsFile1.getColumn(i, "flpth");
        		var colId = this.dsFile1.getColumn(i, "colId");
        		var fileUniqueId = this.dsFile1.getColumn(i, "fileUniqueId");
        		var atflMngNo = this.dsFile1.getColumn(0, "atflMngNo");

        		var filePbj1 = {
        			"fullName" : fullName,
        			"orgnlFileNm" : orgnlFileNm,
        			"fileSz" : fileSz,
        			"atflMngSno" : atflMngSno,
        			"flpth" : flpth,
        			"colId" : colId,
        			"fileUniqueId" : fileUniqueId,
        			"atflMngNo" : atflMngNo
        		};

        		fileArr1.push(filePbj1);
        	}

        	// 부모로 전달
        	var objRet = {
        		"docArr" : docArr,
        		"fileArr" : fileArr,
        		"fileArr1" : fileArr1
        	}

        	this.close(JSON.stringify(objRet));
        }
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "uploadComplete":
        			this.cfnClose();
        			break;
        	}
        };

        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);

        	if(sPopupId == "save_confirm") {
        		if(oRtn.result == "Y") {
        			var obj = {
        				"atchFileId" : "",			// 기존 첨부파일 있을 경우 입력
        				"bsnsSeCd" : "COM",			// 업무구분코드
        				"prgrmId" : "COM013P03" 	// 프로그램ID (화면 ID)
        			}
        			var str = JSON.stringify(obj);
        			this.RaonkUpload.AddFormData('params', str);
        			this.RaonkUpload.Transfer();
        		}
        	} else if(sPopupId == "file_all_del1") {
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile1);
        	} else if(sPopupId == "file_del1") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile1, oRtn.paramArg);
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 RAONK 별 EVENT 영역
        *******************************************************************************************************************************/
        // 페이지에서 라온K업로드 솔루션의 생성 이벤트
        this.RaonkUpload_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	// 업로드 솔루션이 초기 생성시 업로드 할 경로를 지정해야 한다.
        	// /CMM/YYYY/MM/DD/  <<== CMM은 업무별 폴더 지정이고 기본적으로 /년도/월/일 의 폴더 구조를 갖는다.
        	this.RaonkUpload.SetConfig('FolderNameRule', '/COM/YYYY/MM/DD/');
        };

        // 파일 업로드 시 에러 발생 이벤트
        this.RaonkUpload_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
        	console.log(paramObj);
        };

        // 파일 추가 시 발생 이벤트
        // 파일 추가 시 타입을 정해야 한다.(사업자등록증, 증빙자료, 첨부파일, 등등)
        this.RaonkUpload_RAONKUPLOAD_AfterAddAllFile = function(obj, paramObj)
        {
        	// 파일 카테고리 초기화
        	this.gvUploadCategory = "";
        };

        this.RaonkUpload_RAONKUPLOAD_BeforeAddFile = function(obj, paramObj)
        {
        	if(this.gvUploadCategory == 'docFile')
        	{
        // 		if(this.dsFile1.rowcount >= 1)
        // 		{
        // 			this.gfnAlertMsg("MSG_001", "msgCallback");
        // 			//this.gfnAlertMsg("beforeAddFile", "파일 1개만 업로드 가능 합니다.", "msgCallback");
        // 			return false;
        // 		}
        	}

        	return true;
        };

        this.RaonkUpload_RAONKUPLOAD_AfterAddFile = function(obj, paramObj)
        {
        	// 파일에 카테고리 셋팅
        	var sRow = this.dsFile.findRow("colId", this.gvUploadCategory);
        	var atflMngNo = this.dsFile.getColumn(sRow, "atflMngNo");

        	var cvObj = {
        		"strCustomValue" : this.gvUploadCategory,
        		"atflMngNo" : atflMngNo
        	};
        	this.RaonkUpload.SetFileCustomValue(-1, JSON.stringify(cvObj));

        	// 파일 카테고리별 구분으로 파일 리스트에 추가
        	if(this.gvUploadCategory == 'docFile') {
        		var nIdx = this.dsFile1.addRow();
        		this.dsFile1.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile1.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile1.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile1.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile1.setColumn(nIdx, "colId", this.gvUploadCategory);
        	}

        };

        // 파일 업로드 완료 이벤트
        this.RaonkUpload_RAONKUPLOAD_UploadComplete = function(obj, paramObj)
        {
        	var allListArray = this.RaonkUpload.GetListInfo("json");
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	this.gfnUploadComplete("uploadComplete", allListArray, "dsFile", "fnCallback");
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divPopBtn_Button00_00_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        };

        this.dsFile1_onvaluechanged = function(obj,e)
        {
        	this.divForm.form.tab00.Tabpage2.form.dsFile1.copyData(obj);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divPopBtn_Button00_00_onclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.RaonkUpload_RAONKUPLOAD_AfterAddAllFile,this);
            this.dsFile1.addEventHandler("onrowsetchanged",this.dsFile1_onrowsetchanged,this);
            this.dsFile1.addEventHandler("onvaluechanged",this.dsFile1_onvaluechanged,this);
        };
        this.loadIncludeScript("COM013P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
