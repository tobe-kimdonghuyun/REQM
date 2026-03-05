(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM000P032");
            this.set_titletext("회원가입 신청");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"idAplySe\" type=\"STRING\" size=\"256\"/><Column id=\"idAplyType\" type=\"STRING\" size=\"256\"/><Column id=\"userPswd\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"eml\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"telno\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"coNmHwrt\" type=\"STRING\" size=\"256\"/><Column id=\"prvcAgreDocId\" type=\"STRING\" size=\"256\"/><Column id=\"esntlAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"chcAgreYn\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsDsctn\" type=\"STRING\" size=\"256\"/><Column id=\"emlRcptnYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnPrgrsYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnAcntYn\" type=\"STRING\" size=\"256\"/><Column id=\"smsRcptnNewYn\" type=\"STRING\" size=\"256\"/><Column id=\"rltnCoActlOgdpYn\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDocNo\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"evdncDocKnd\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"agreType\" type=\"STRING\" size=\"256\"/><Column id=\"docCn\" type=\"STRING\" size=\"256\"/><Column id=\"esntlAgreCn\" type=\"STRING\" size=\"256\"/><Column id=\"chcAgreCn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"esntlAgreYn\">Y</Col><Col id=\"chcAgreYn\">Y</Col><Col id=\"emlRcptnYn\">Y</Col><Col id=\"smsRcptnPrgrsYn\">Y</Col><Col id=\"smsRcptnAcntYn\">Y</Col><Col id=\"smsRcptnNewYn\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile2", this);
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile3", this);
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile4", this);
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"acntType\" type=\"STRING\" size=\"256\"/><Column id=\"fld\" type=\"STRING\" size=\"256\"/><Column id=\"aplySrvc\" type=\"STRING\" size=\"256\"/><Column id=\"joinAsk\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"acntType\"/><Col id=\"fld\"/><Col id=\"aplySrvc\"/><Col id=\"joinAsk\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staState","20","20",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("표는 필수 입력 사항입니다.");
            obj.set_cssclass("sta_WF_EsentialTxt");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","80","75","420","90",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("회원가입 신청");
            obj.set_cssclass("btn_WF_Yes");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","80","190","420","90",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("회원가입 신청_ori");
            obj.set_cssclass("btn_WF_Yes");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","80","310","420","90",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("회원가입 신청_ori_backgound");
            obj.set_cssclass("btn_WF_Yes");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_01","520","75","260","90",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("회원가입 신청test1");
            obj.set_cssclass("btn_WF_Yes");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_01_00","520","190","260","90",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("팝업닫는 속도 test");
            obj.set_cssclass("btn_WF_Yes");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_01_00_00","520","305","260","90",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("팝업닫는 속도 test2");
            obj.set_cssclass("btn_WF_Yes");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",800,400,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item5","edit_coId","value","dsGet","coId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtId00","value","dsGet","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edit_prvcAgreDocId","value","dsGet","prvcAgreDocId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM000P031.xfdl", function() {
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
        * 2024/08/08			김완성					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
        //var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        this.pswdChk = false;
        this.coChk = false;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        // 	this.gfnFormOnload(obj); //필수함수
        //
        // 	// 전달받은 파라메터 팝업창과 페이지오픈으로 파라메터 불러오는 방식이 달라짐
        // 	if(this.opener)
        // 	{
        // 		this.param = {
        // 			"id" : this.getOwnerFrame().userId
        // 		}
        // 	} else
        // 	{
        // 		this.param = this.getOwnerFrame().form.fvObjArgs;
        // 	}
        //
        // 	this.fnInit();
        };


        // 신청버튼
        this.divPopBtn_Button00_00_onclick = function(obj,e)
        {
        	var sTitle = "회원가입";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
          		, width: 800
          		, height: 650			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("memberRegi", "work::COM/member/COM000P032.xfdl", objArg, sPopupCallBack, objOption);

        	// this.close();

        	// TODO : 추후 개인정보동의문서 ID 추가
        	//this.dsGet.setColumn(0, "prvcAgreDocId", "1111");
        	//this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        };


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
        	if(this.gvUploadCategory == 'bizFile')
        	{
        		if(this.dsFile1.rowcount >= 1)
        		{
        			this.gfnAlertMsg("MSG_001", "msgCallback");
        			//this.gfnAlertMsg("beforeAddFile", "파일 1개만 업로드 가능 합니다.", "msgCallback");
        			return false;
        		}
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
        	if(this.gvUploadCategory == 'bulicFile') {
        		var nIdx = this.dsFile1.addRow();
        		this.dsFile1.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile1.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile1.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile1.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile1.setColumn(nIdx, "colId", this.gvUploadCategory);
        	} else if(this.gvUploadCategory == 'hdofPrdocFile') {
        		var nIdx = this.dsFile2.addRow();
        		this.dsFile2.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile2.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile2.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile2.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile2.setColumn(nIdx, "colId", this.gvUploadCategory);
        	} else if(this.gvUploadCategory == 'arptMvnFile') {
        		var nIdx = this.dsFile3.addRow();
        		this.dsFile3.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile3.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile3.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile3.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile3.setColumn(nIdx, "colId", this.gvUploadCategory);
        	} else if(this.gvUploadCategory == 'mvzFile') {
        		var nIdx = this.dsFile4.addRow();
        		this.dsFile4.setColumn(nIdx, "fullName", paramObj.userdata.strName + ' (' + paramObj.userdata.nSize + ')');
        		this.dsFile4.setColumn(nIdx, "orgnlFileNm", paramObj.userdata.strName);
        		this.dsFile4.setColumn(nIdx, "fileSz", paramObj.userdata.nSize);
        		this.dsFile4.setColumn(nIdx, "atflMngSno", paramObj.userdata.nIndex);
        		this.dsFile4.setColumn(nIdx, "colId", this.gvUploadCategory);
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
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        this.cfnClose = function()
        {
        	console.log('cfnClose');
        	//부모창 검색 조회
         	var sWinId = this.objApp.gdsOpenMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, this.getOwnerFrame().form.fvMenuId.substring(0, 8), this.FRAME_MENUCOLUMNS.winId);
         	var objForm = this.objApp.gvFrsWork.all[sWinId];
        	objForm.form.divWork.form.cfnSearch(1);
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 데이터 조회
        this.selectTransaction = function()
        {
        	var strSvcId    = "select";
        	var strSvcUrl   = "member/mbrJoinAplyInfoInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet dsFile1=dsFile1 dsFile2=dsFile2 dsFile3=dsFile3";
        	var strArg      = "id=" + this.param.id;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "member/mbrJoinAplyInfoStrg.do";
        	var inData      = "dsGet=dsGet dsFile=dsFile";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };
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
        		case "select":
        			// 데이터 조회 후 파일리스트에 셋팅
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile1);
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile2);
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile3);
        			this.gfnDownloadSetting(this.RaonkUpload, this.dsFile4);
        			this.fnVisibleSetting();
        			break;
        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("save", gvRetMsg, null, "msgCallback");
        			break;
        		case "uploadComplete":
        			// 파일 업로드가 완료 된 후 첨부파일 과 같이 데이터 저장
        			this.saveTransaction();
        			break;
        		case "combo":
        			this.divForm.form.Div02.form.rdo01.set_index(0);
        			this.divForm.form.Div02.form.rdo02.set_index(0);
        			this.divForm.form.Div03.form.rdo03.set_index(0);
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
        				"prgrmId" : "COM000P032" 	// 프로그램ID (화면 ID)
        			}
        			var str = JSON.stringify(obj);
        			this.RaonkUpload.AddFormData('params', str);
        			this.RaonkUpload.Transfer();
        		}
        	} else if(sPopupId == "save")  {
        		if(this.opener) {
        			this.close();
        		} else {
        			var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        			this.gfnCloseMenu(cMenuId);
        		}
        	} else if(sPopupId == "file_all_del1") {
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile1);
        	} else if(sPopupId == "file_all_del2") {
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile2);
        	} else if(sPopupId == "file_all_del3") {
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile3);
        	} else if(sPopupId == "file_all_del4") {
        		this.gfnDeleteAllFile(this.RaonkUpload, this.dsFile4);
        	} else if(sPopupId == "file_del1") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile1, oRtn.paramArg);
        	} else if(sPopupId == "file_del2") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile2, oRtn.paramArg);
        	} else if(sPopupId == "file_del3") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile3, oRtn.paramArg);
        	} else if(sPopupId == "file_del4") {
        		this.gfnDeleteFile(this.RaonkUpload, this.dsFile4, oRtn.paramArg);
        	}
        };

        this.fnPopupCallback = function(svcId, ret)
        {
        	switch(svcId) {
        		case "userIdDpcnSrch":
        			if (ret != "") {
        				var param = JSON.parse(ret);
        				this.dsGet.setColumn(0, "userId", param.userId);
        			}
        			break;

        		case "coSch":
        			if (ret != "") {
        				var param = JSON.parse(ret);
        				this.dsGet.setColumn(0, "coId", param.coId);
        				this.dsGet.setColumn(0, "coNm", param.coNm);
        				this.dsGet.setColumn(0, "coNmHwrt", param.coNm);
        				this.edit_brno.set_value(param.brno);
        				this.edit_coAddr.set_value(param.coAddr);
        				this.edit_coDtlAddr.set_value(param.coDtlAddr);
        				this.coChk = true;
        			}
        			break;
        	}
        }
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.divForm.form.Div02.form.pan03.visible = false;
        	this.divForm.form.Div03.visible = false;
        	this.divForm.form.Div03.form.pan00_00.visible = false;
        	this.divForm.form.Div03.form.panFile04.visible = false;
        	this.divForm.form.divBscInfo.form.btnGrdRegi00.visible = false;
        	this.divForm.form.divBscInfo.form.Panel04_02_00_00.visible = false;

        	this.resetScroll();

        	this.gfnCmmCode("combo", "dsCombo", "PRCS_STTS", "A");

        	if(this.param != null && this.param.id != null && this.param.id != '') {
        		this.selectTransaction();
        	}
        }

        this.fnVisibleSetting = function()
        {
        	var idAplySe = this.dsGet.getColumn(0, "idAplySe");
        	var prcsSttsCd = this.dsGet.getColumn(0, "prcsSttsCd");

        	if (!this.gfnIsNull(prcsSttsCd)) {
        		this.divForm.form.Div01.set_visible(true);
        	}
        }

        this.fnPswdChk = function()
        {
        	var regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$^&*()])[a-zA-z\d!@#$^&*()]{9,16}$/;
        	var userPswd =	this.divForm.form.divBscInfo.form.edtPswd01.value;
        	var userPswdChk = this.divForm.form.divBscInfo.form.edtPswd02.value;
        	console.log(userPswd);
        	if (regex.test(userPswd)) {
        		if (userPswd == userPswdChk) {
        			this.divForm.form.divBscInfo.form.sta00.text = "유효한 비밀번호 입니다.";
        			this.divForm.form.divBscInfo.form.sta00.set_color("green");
        			this.pswdChk = true;
        		} else {
        			if (!this.gfnIsNull(userPswdChk)) {
        				this.divForm.form.divBscInfo.form.sta00.text = "비밀번호가 일치하지 않습니다.";
        				this.divForm.form.divBscInfo.form.sta00.set_color("red");
        				this.pswdChk = false;
        			} else {
        				this.divForm.form.divBscInfo.form.sta00.text = "비밀번호 확인을 입력해주세요.";
        				this.divForm.form.divBscInfo.form.sta00.set_color("red");
        				this.pswdChk = false;
        			}
        		}
        	} else {
        		this.divForm.form.divBscInfo.form.sta00.text = "비밀번호는 9자~16자[영문+특수문자+숫자] 조합으로 설정해 주세요   * 사용가능 특수문자 : ! @ # $ ^ & * ( )";
        		this.divForm.form.divBscInfo.form.sta00.set_color("red");
        		this.pswdChk = false;
        	}
        }
        /*******************************************************************************************************************************
         * 각 RAONK 별 EVENT 영역
        *******************************************************************************************************************************/
        // 파일 추가
        this.divForm_Div03_btn_file_1_onclick = function(obj,e)
        {
        	// 데이터의 첨부파일 관리번호 입력 컬럼명
        	this.gvUploadCategory = "bulicFile";		// 컬럼ID
        	this.RaonkUpload.OpenFileDialog();
        };

        this.divForm_Div03_btn_file_2_onclick = function(obj,e)
        {
        	this.gvUploadCategory = "hdofPrdocFile";
        	this.RaonkUpload.OpenFileDialog();
        };

        this.divForm_Div03_btn_file_3_onclick = function(obj,e)
        {
        	this.gvUploadCategory = "arptMvnFile";
        	this.RaonkUpload.OpenFileDialog();
        };

        this.divForm_Div03_btn_file_4_onclick = function(obj,e)
        {
        	this.gvUploadCategory = "mvzFile";
        	this.RaonkUpload.OpenFileDialog();
        };

        // 파일 그리드 클릭 이벤트
        this.divForm_Div03_Grid01_oncellclick = function(obj,e)
        {

        	if(e.col == 1) 	// 삭제 버튼 클릭
        	{
        		var param = {
        			"row" : e.row,
        			"col" : e.col
        		};
        		this.gfnConfirmMsg("file_del1", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"], param);
        	} else if(e.col == 0) // 파일명 클릭
        	{
        		this.gfnSelectFile(this.RaonkUpload, this.dsFile1, e);
        	}
        };

        // 파일 그리드 더블클릭 이벤트
        this.divForm_Div03_Grid01_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile1, e);
        	}
        };

        this.divForm_Div03_Grid02_oncellclick = function(obj,e)
        {
        	if(e.col == 1) 	// 삭제 버튼 클릭
        	{
        		var param = {
        			"row" : e.row,
        			"col" : e.col
        		};

        		this.gfnConfirmMsg("file_del2", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"], param);
        	} else if(e.col == 0) // 파일명 클릭
        	{
        		this.gfnSelectFile(this.RaonkUpload, this.dsFile2, e);
        	}
        };

        this.divForm_Div03_Grid02_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile2, e);
        	}
        };

        this.divForm_Div03_Grid03_oncellclick = function(obj,e)
        {
        	if(e.col == 1) 	// 삭제 버튼 클릭
        	{
        		var param = {
        			"row" : e.row,
        			"col" : e.col
        		};

        		this.gfnConfirmMsg("file_del3", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"], param);
        	} else if(e.col == 0) // 파일명 클릭
        	{
        		this.gfnSelectFile(this.RaonkUpload, this.dsFile3, e);
        	}
        };

        this.divForm_Div03_Grid03_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile3, e);
        	}
        };

        this.divForm_Div03_Grid04_oncellclick = function(obj,e)
        {
        	if(e.col == 1) 	// 삭제 버튼 클릭
        	{
        		var param = {
        			"row" : e.row,
        			"col" : e.col
        		};

        		this.gfnConfirmMsg("file_del4", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"], param);
        	} else if(e.col == 0) // 파일명 클릭
        	{
        		this.gfnSelectFile(this.RaonkUpload, this.dsFile4, e);
        	}
        };

        this.divForm_Div03_Grid04_oncelldblclick = function(obj,e)
        {
        	if(e.col == 0) 	// 파일명을 더블클릭 시 다운로드
        	{
        		this.gfnDownloadFile(this.RaonkUpload, this.dsFile4, e);
        	}
        };

        this.divForm_Div03_btn_del_file_1_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("file_all_del1", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        this.divForm_Div03_btn_del_file_2_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("file_all_del2", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        this.divForm_Div03_btn_del_file_3_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("file_all_del3", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        this.divForm_Div03_btn_del_file_4_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("file_all_del4", "MSG_002", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // ID 입력 edit 클릭 이벤트
        this.divForm_divBscInfo_edtId_oneditclick = function(obj,e)
        {
        	var sTitle = "아이디 중복 체크";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		, width: 600
         		, height: 300			//width,height 지정하지 않음 popup form size적용
        		, autosize: true
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("userIdDpcnSrch", "work::COM/member/COM000P033.xfdl", objArg, sPopupCallBack, objOption);
        };
        // ID신청구분 버튼 변경시
        this.divForm_Div02_rdo01_onitemchanged = function(obj,e)
        {
        	this.divForm.form.Div03.set_visible(false);

        	if (obj.value == "TIDCATCD001") {
        		this.divForm.form.Div02.form.pan01.visible = true;
        		this.divForm.form.Div02.form.pan02.visible = true;
        		trace("test0");
        	} else {
        		this.divForm.form.Div02.form.pan01.visible = false;
        		this.divForm.form.Div02.form.pan02.visible = false;
        		//this.divForm.form.Div03.form.panFile03.visible = false;
        		//this.divForm.form.Div02.form.rdo02.set_index(0);
        		trace("test1");
        	}

        	if (obj.value == "TIDCATCD003") {
        		this.divForm.form.Div02.form.pan03.visible = true;
        		this.divForm.form.Div03.visible = true;
        		this.divForm.form.Div03.form.pan00_00.visible = true;
        		this.divForm.form.divBscInfo.form.btnGrdRegi00.visible = true;
        	} else {
        		this.divForm.form.Div02.form.pan03.visible = false;
        		this.divForm.form.Div03.form.pan00_00.visible = false;
        		this.divForm.form.divBscInfo.form.btnGrdRegi00.visible = false;
        		this.divForm.form.Div03.form.panFile04.visible = false;
        	}
        	trace("test3");
        	if (obj.value == "TIDCATCD006" || obj.value == "TIDCATCD008" || obj.value == "TIDCATCD010") {
        		this.divForm.form.Div03.set_visible(true);
        	}

        	this.resetScroll();
        };
        // ID신청유형 버튼 변경시
        this.divForm_Div02_rdo02_onitemchanged = function(obj,e)
        {
        	if (obj.value == "TIDREQCD001") {
        		this.divForm.form.Div03.visible = false;
        		this.divForm.form.Div03.form.panFile03.visible = false;
        	} else {
        		this.divForm.form.Div03.visible = true;
        		this.divForm.form.Div03.form.panFile03.visible = true;
        	}
        };
        // 이동지역회사 실제 소속여부 버튼 변경시
        this.divForm_Div03_rdo03_onitemchanged = function(obj,e)
        {
        	if (obj.value == "N") {
        		this.divForm.form.Div03.form.panFile04.visible = true;
        	} else {
        		this.divForm.form.Div03.form.panFile04.visible = false;
        	}
        };
        // 회사 선택 버튼
        this.divForm_divBscInfo_divEdtPop00_btnPop_onclick = function(obj,e)
        {
        	var sTitle = "회사 선택 팝업";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		, width: 1000
         		, height: 460			//width,height 지정하지 않음 popup form size적용
        		, autosize: true
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("coSch", "work::COM/crtr/COM100P01.xfdl", objArg, sPopupCallBack, objOption);
        };
        // 회사 등록 버튼
        this.divForm_divBscInfo_btnGrdRegi00_onclick = function(obj,e)
        {
        	var sTitle = "회사 등록 팝업";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
         		, width: 1000
         		, height: 600			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("coRegi", "work::COM/crtr/COM023P01.xfdl", objArg, sPopupCallBack, objOption);
        };

        // 비밀번호체크
        this.divForm_divBscInfo_edtPswd01_onkillfocus = function(obj,e)
        {
        	this.fnPswdChk();
        };
        // 비밀번호체크
        this.divForm_divBscInfo_edtPswd02_onkillfocus = function(obj,e)
        {
        	this.fnPswdChk();
        };
        // 회사 취소 버튼
        this.divForm_divBscInfo_Button00_00_onclick = function(obj,e)
        {
        	this.dsGet.setColumn(0, "coId", null);
        	this.dsGet.setColumn(0, "coNm", null);
        	this.dsGet.setColumn(0, "coNmHwrt", null);
        	this.edit_brno.set_value("");
        	this.edit_coAddr.set_value("");
        	this.edit_coDtlAddr.set_value("");
        	this.divForm.form.divBscInfo.form.Panel04_02_00_00.set_visible(false);
        };
        // 회사 정보 버튼
        this.divForm_divBscInfo_Button00_onclick = function(obj,e)
        {
        	var coId = this.dsGet.getColumn(0, "coId");
        	var coNm = this.dsGet.getColumn(0, "coNm");
        	var brno = this.edit_brno.value;
        	var coAddr = this.edit_coAddr.value;
        	var coDtlAddr = this.edit_coDtlAddr.value;

        	if (!this.gfnIsNull(coId) && this.coChk) {
        		console.log(coId + "\n" + coNm);
        		var coText = "회사ID : " + coId + "\n" + "회사명 : " + coNm + "\n" + "사업자등록번호 : " + brno + "\n" + "주소 : " + coAddr + " " + coDtlAddr;
        		this.divForm.form.divBscInfo.form.Panel04_02_00_00.set_visible(true);
        		this.divForm.form.divBscInfo.form.sta00_00_00.set_text(coText);
        		this.coChk = false;
        	} else {
        		this.divForm.form.divBscInfo.form.Panel04_02_00_00.set_visible(false);
        		this.divForm.form.divBscInfo.form.sta00_00_00.set_text("");
        		this.coChk = true;
        	}
        };



        this.Button00_onclick = function(obj,e)
        {
        	this.resetScroll();
        };

        this.Button00_00_00_onclick = function(obj,e)
        {
        	var sTitle = "회원가입";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
          		, width: 800
          		, height: 650			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("memberRegi", "work::COM/member/COM000P032_ori.xfdl", objArg, sPopupCallBack, objOption);

        	// this.close();

        	// TODO : 추후 개인정보동의문서 ID 추가
        	//this.dsGet.setColumn(0, "prvcAgreDocId", "1111");
        	//this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        };

        this.Button00_00_00_00_onclick = function(obj,e)
        {
        	var sTitle = "회원가입";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
          		, width: 800
          		, height: 650			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        		, background: "url('imagerc::loadingimage.gif') no-repeat center center white"
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("memberRegi", "work::COM/member/COM000P032_ori.xfdl", objArg, sPopupCallBack, objOption);

        	// this.close();
        };

        this.Button00_00_00_01_onclick = function(obj,e)
        {
        	var sTitle = "회원가입";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
          		, width: 800
          		, height: 650			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        		, background: "white"
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("memberRegi", "work::COM/member/COM000P032_test1.xfdl", objArg, sPopupCallBack, objOption);

        	//this.close();
        };


        // 팝업 닫기 속도 test
        this.Button00_00_00_01_00_onclick = function(obj,e)
        {

        		var sTitle = "회원가입";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
          		, width: 800
          		, height: 650			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("memberRegi", "work::LIF/TSC/LIF052M00.xfdl", objArg, sPopupCallBack, objOption);
        };


        // 팝업 닫기 속도 test2
        this.Button00_00_00_01_00_00_onclick = function(obj,e)
        {
        		var sTitle = "회원가입";
        	var objArg   = {};

        	var objOption = {
        		popuptype: "modal"	//modal,modaless
          		, width: 800
          		, height: 650			//width,height 지정하지 않음 popup form size적용
        		, autosize: false
        		, title: sTitle
        		, resize: true
        		, titlebar: true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	this.gfnOpenPopup("memberRegi", "work::CST/TSC/CST002M00.xfdl", objArg, sPopupCallBack, objOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Button00_00.addEventHandler("onclick",this.divPopBtn_Button00_00_onclick,this);
            this.Button00_00_00.addEventHandler("onclick",this.Button00_00_00_onclick,this);
            this.Button00_00_00_00.addEventHandler("onclick",this.Button00_00_00_00_onclick,this);
            this.Button00_00_00_01.addEventHandler("onclick",this.Button00_00_00_01_onclick,this);
            this.Button00_00_00_01_00.addEventHandler("onclick",this.Button00_00_00_01_00_onclick,this);
            this.Button00_00_00_01_00_00.addEventHandler("onclick",this.Button00_00_00_01_00_00_onclick,this);
        };
        this.loadIncludeScript("COM000P031.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
