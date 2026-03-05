(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("upload");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(750,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFileList", this);
            obj._setContents("<ColumnInfo><Column id=\"fileTmpId\" type=\"STRING\" size=\"256\"/><Column id=\"fileOrder\" type=\"INT\" size=\"256\"/><Column id=\"filePath\" type=\"STRING\" size=\"256\"/><Column id=\"fileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileOriNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileExt\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileId", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new RaonkUpload("RaonkUpload","40.00","26","670","260",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_DevelopLangage("JAVA");
            obj.set_ExtensionAllowOrLimit("1");
            obj.set_HandlerUrl("/common/uploadDownload.do");
            obj.set_RunTimes("html5");
            obj.set_ButtonBarView("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload","208.00","300","76","33",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("업로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload_add","39.00","300","76","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("파일추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload_del","122.00","300","76","33",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("파일삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reupload","294.00","300","90","33",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("기존업로드");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",750,350,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("upload.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	$FILE_BASE$.$FILE_EXT$
        *  @Creator 	ELUON INS
        *  @CreateDate 	$DATE$
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * $DATE$			ELUON INS					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.workGroup;
        this.atchFileId;
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
        this.fileUploadTran = function() {

        	var strSvcId    = "upload";						// 트랜잭션 ID (콜백에서 ID로 구분하여 처리)
        	var strSvcUrl   = "common/fileUpload.do";		// 요청 URL (http://서버도메인/ <- 프로젝트셋팅에서 지정)
        	var inData      = "dsFileList=dsFileList:U";		// 요청 시 넘겨주는 데이터셋 (서버에서 받을명칭=실제데이터셋명)
        	var outData     = "dsFileId=dsFileId";			// 응답시 받는 데이터셋 (실제데이터셋명=서버에서 응답하는 데이터셋명)
        	var strArg      = "";							// 요청시 넘겨주는 파라메터(서버에서 받을명칭=파라메터값)
        	var callBackFnc = "fnCallback";					// 콜백 function명
        	var isAsync   	= true;							// 동기, 비동기 (기본 비동기)

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        }

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.RaonkUpload00_RAONKUPLOAD_AddLocalFileDirectly = function(obj, paramObj)
        {
        	trace('AddLocalFileDirectly');
        };

        this.RaonkUpload00_RAONKUPLOAD_AddLocalFileDirectlyEx = function(obj, paramObj)
        {
        	trace('AddLocalFileDirectlyEx');
        };

        this.RaonkUpload00_RAONKUPLOAD_AfterAddAllFile = function(obj, paramObj)
        {
        	trace('AfterAddAllFile');
        };

        this.RaonkUpload00_RAONKUPLOAD_AfterAddFile = function(obj, paramObj)
        {
        	trace('AfterAddFile');
        };

        this.RaonkUpload00_RAONKUPLOAD_AfterDeleteFile = function(obj, paramObj)
        {
        	trace('AfterDeleteFile');
        };

        this.RaonkUpload00_RAONKUPLOAD_AgentInstall = function(obj, paramObj)
        {
        	trace('AgentInstall');
        };

        this.RaonkUpload00_RAONKUPLOAD_Alert = function(obj, paramObj)
        {
        	trace('Alert');
        };

        this.RaonkUpload00_RAONKUPLOAD_BeforeAddFile = function(obj, paramObj)
        {
        	trace('BeforeAddFile');
        };

        this.RaonkUpload00_RAONKUPLOAD_BeforeCreation = function(obj)
        {
        	trace('BeforeCreation');
        };

        this.RaonkUpload00_RAONKUPLOAD_BeforeDeleteFile = function(obj, paramObj)
        {
        	trace('BeforeDeleteFile');
        	console.log(paramObj);

        };

        this.RaonkUpload00_RAONKUPLOAD_BeforeDownloadFile = function(obj, paramObj)
        {
        	trace('BeforeDownloadFile');
        };

        this.RaonkUpload00_RAONKUPLOAD_BeforeOpenFile = function(obj, paramObj)
        {
        	trace('BeforeOpenFile');
        };

        this.RaonkUpload00_RAONKUPLOAD_BeforeUpload = function(obj, paramObj)
        {
        	trace('BeforeUpload');
        };

        this.RaonkUpload00_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	trace('CreationComplete1');
        	this.RaonkUpload.SetConfig('FolderNameRule', this.workGroup + '/YYYY/MM/DD/');
        };

        this.RaonkUpload00_RAONKUPLOAD_CustomAction = function(obj, paramObj)
        {
        	trace('CustomAction');
        };

        this.RaonkUpload00_RAONKUPLOAD_DeleteAllFile = function(obj, paramObj)
        {
        	trace('DeleteAllFile');
        };

        this.RaonkUpload00_RAONKUPLOAD_DownloadCancel = function(obj, paramObj)
        {
        	trace('DownloadCancel');
        };

        this.RaonkUpload00_RAONKUPLOAD_DownloadCompleteAllFile = function(obj, paramObj)
        {
        	trace('DownloadCompleteAllFile');
        };

        this.RaonkUpload00_RAONKUPLOAD_DownloadCompleteFile = function(obj, paramObj)
        {
        	trace('DownloadCompleteFile');
        };

        this.RaonkUpload00_RAONKUPLOAD_GetExcelData = function(obj, paramObj)
        {
        	trace('GetExcelData');
        };

        this.RaonkUpload00_RAONKUPLOAD_GetZipFileInfo = function(obj, paramObj)
        {
        	trace('GetZipFileInfo');
        };

        this.RaonkUpload00_RAONKUPLOAD_InitAddAllFile = function(obj, paramObj)
        {
        	trace('InitAddAllFile');
        };

        this.RaonkUpload00_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
        	trace('OnError');

        	console.log(paramObj.userdata.strCode);
        	console.log(paramObj.userdata.strMessage);
        };

        this.RaonkUpload00_RAONKUPLOAD_OnLanguageDefinition = function(obj, paramObj)
        {
        	trace('OnLanguageDefinition');
        };

        this.RaonkUpload00_RAONKUPLOAD_SelectItem = function(obj, paramObj)
        {
        	trace('SelectItem');
        };

        this.RaonkUpload00_RAONKUPLOAD_TransferStatusChange = function(obj, paramObj)
        {
        	trace('TransferStatusChange');
        };

        this.RaonkUpload00_RAONKUPLOAD_UploadComplete = function(obj, paramObj)
        {
        	trace('UploadComplete');

        	var allListArray = RAONKUPLOAD.GetListInfo("json");

        	var newListArray = allListArray.newFile;
        	var deleteListArray = allListArray.deleteFile;
        	var webListArray = allListArray.webFile;

        	for(var i=0;i<newListArray.fileId.length;i++) {

        		var nRow = this.dsFileList.addRow();
        		this.dsFileList.setColumn(nRow, "fileTmpId", newListArray.fileId[i]);
        		this.dsFileList.setColumn(nRow, "fileOrder", newListArray.order[i]);
        		this.dsFileList.setColumn(nRow, "filePath", newListArray.uploadPath[i]);
        		this.dsFileList.setColumn(nRow, "fileNm", newListArray.uploadName[i]);
        		this.dsFileList.setColumn(nRow, "fileOriNm", newListArray.originalName[i]);
        		this.dsFileList.setColumn(nRow, "fileExt", newListArray.extension[i]);
        		this.dsFileList.setColumn(nRow, "fileSize", newListArray.size[i]);
        	}

        	this.fileUploadTran();
        };

        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	if(svcID != null && svcID == "upload") {
        		var atchFileId = this.dsFileId.getColumn(0, "atchFileId");

        		var rtnValue = {
        			atchFileId : atchFileId,
        			workGroup : this.workGroup,
        			atchFileList : this.dsFileList.saveJSON()
        		}
        		this.gfnClosePopup(JSON.stringify(rtnValue));
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function() {
        	this.workGroup = this.getOwnerFrame().workGroup;
        	this.atchFileId = this.getOwnerFrame().atchFileId;
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btn_upload_add_onclick = function(obj,e)
        {
        	this.RaonkUpload.OpenFileDialog();
        };

        this.btn_upload_del_onclick = function(obj,e)
        {
        	this.RaonkUpload.DeleteSelectedFile();
        };

        this.btn_upload_onclick = function(obj,e)
        {
        	var obj = {
        		"atchFileId" : this.atchFileId,
        		"workGroup" : this.workGroup
        	}

        	var str = JSON.stringify(obj);

         	this.RaonkUpload.AddFormData('params', str);
         	this.RaonkUpload.Transfer();
        };

        this.btn_reupload_onclick = function(obj,e)
        {

        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AddLocalFileDirectly",this.RaonkUpload00_RAONKUPLOAD_AddLocalFileDirectly,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AddLocalFileDirectlyEx",this.RaonkUpload00_RAONKUPLOAD_AddLocalFileDirectlyEx,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.RaonkUpload00_RAONKUPLOAD_AfterAddAllFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload00_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterDeleteFile",this.RaonkUpload00_RAONKUPLOAD_AfterDeleteFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AgentInstall",this.RaonkUpload00_RAONKUPLOAD_AgentInstall,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_Alert",this.RaonkUpload00_RAONKUPLOAD_Alert,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload00_RAONKUPLOAD_BeforeAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeCreation",this.RaonkUpload00_RAONKUPLOAD_BeforeCreation,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeDeleteFile",this.RaonkUpload00_RAONKUPLOAD_BeforeDeleteFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeDownloadFile",this.RaonkUpload00_RAONKUPLOAD_BeforeDownloadFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeOpenFile",this.RaonkUpload00_RAONKUPLOAD_BeforeOpenFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeUpload",this.RaonkUpload00_RAONKUPLOAD_BeforeUpload,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload00_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CustomAction",this.RaonkUpload00_RAONKUPLOAD_CustomAction,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_DeleteAllFile",this.RaonkUpload00_RAONKUPLOAD_DeleteAllFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_DownloadCancel",this.RaonkUpload00_RAONKUPLOAD_DownloadCancel,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_DownloadCompleteAllFile",this.RaonkUpload00_RAONKUPLOAD_DownloadCompleteAllFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_DownloadCompleteFile",this.RaonkUpload00_RAONKUPLOAD_DownloadCompleteFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_GetExcelData",this.RaonkUpload00_RAONKUPLOAD_GetExcelData,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_GetZipFileInfo",this.RaonkUpload00_RAONKUPLOAD_GetZipFileInfo,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_InitAddAllFile",this.RaonkUpload00_RAONKUPLOAD_InitAddAllFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload00_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnLanguageDefinition",this.RaonkUpload00_RAONKUPLOAD_OnLanguageDefinition,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_SelectItem",this.RaonkUpload00_RAONKUPLOAD_SelectItem,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_TransferStatusChange",this.RaonkUpload00_RAONKUPLOAD_TransferStatusChange,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload00_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadingCancel",this.RaonkUpload00_RAONKUPLOAD_UploadingCancel,this);
            this.btn_upload.addEventHandler("onclick",this.btn_upload_onclick,this);
            this.btn_upload_add.addEventHandler("onclick",this.btn_upload_add_onclick,this);
            this.btn_upload_del.addEventHandler("onclick",this.btn_upload_del_onclick,this);
            this.btn_reupload.addEventHandler("onclick",this.btn_reupload_onclick,this);
        };
        this.loadIncludeScript("upload.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
